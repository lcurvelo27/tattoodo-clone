require('dotenv').config();
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express();
var massive = require('massive')
var Auth0Strategy = require('passport-auth0');
var session = require('express-session');
var passport = require('passport')
var port = 3000;

//* Allowing access to req.body *//
app.use(bodyParser.json());


//* setting up session*//
app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false
}));

//* Cross origin permit *//
app.use(cors({origin: 'http://localhost:3001', credentials: true}));

//*Setting up passport session*//
app.use(passport.initialize());
app.use(passport.session());

//* Connecting server to database *//
massive(process.env.CONNECTION_STRING)
	.then(db => {
		app.set('db', db)
	})


//* setting up passport strategy *//
passport.use(new Auth0Strategy({
	domain: process.env.AUTH_DOMAIN,
	clientSecret: process.env.AUT_CLIENT_SECRET,
	clientID: process.env.AUTH_CLIENT_ID,
	callbackURL: process.env.AUTH_CALLBACK 
},

	function(accessToken, refreshToken, extraParams, profile, done){
		const db = app.get('db')

		db.find_user([profile.identities[0].user_id])
			.then( user => {
				if(user[0]){
					console.log(user[0])
					return done(null, {id: user[0].id})
				}
				else {
					db.create_user([profile.identities[0].user_id, profile.emails[0]])
						.then( user => {
							console.log(user)
							return done(null,  {id: user[0].id})
						})
				}
			})
	}
	))

//* setting authentication endpoint URL *//
app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
	successRedirect: 'http://localhost:3001/#/dashboard',
	failureRedirect: 'http://localhost:3001'
}));

passport.serializeUser(function(user, done){
	done(null, {id: user.id})
})

passport.deserializeUser(function(user, done){
	app.get('db').find_session_user([user.id])
		.then(user => {
			return done(null, user[0])
		})
})

app.get('/logout', (req, res) => {
	req.logout()
	return res.redirect('https://curvelo-app.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:3001/#/')
})

app.get('/images', (req, res) => {
	app.get('db').get_images()
		.then(response => {			
			return res.status(200).json(response)
		})
})

app.get('/tattoo/:id', (req, res) => {

	app.get('db').get_tattoo(req.params.id)
		.then(response => {
			return res.status(200).send(response)
		})
		.catch(error => res.status(400).send(error))
})

app.get('/auth/me', (req, res, next) => {
	if(!req.user) {
		return res.status(401).send('log in required')
	} else {
		return res.status(200).send(req.user)
	}
})

app.post('/addToWishlist', (req, res, next) => {
	const {imageId, userId} = req.body
	app.get('db').addToWishlist(imageId, userId).then(response => res.status(200).send(response))
})

app.get('/wishlist', (req, res, next) => {
	app.get('db').get_wishlist(req.user.id).then(response => res.status(200).send(response))
})

app.listen(port, ()=>{
	console.log(`server listening on port ${port}`)
})


