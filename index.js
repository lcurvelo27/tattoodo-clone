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
app.use(cors({
	origin: 'http://localhost:3001',
	credentials: true
}));

//*Setting up passport session*//
app.use(passport.initialize());
app.use(passport.session());

//* Connecting server to database *//
massive(process.env.CONNECTION_STRING)
	.then(db => {
		app.set('db', db)
	})




app.listen(port, ()=>{
	console.log(`server listening on port ${port}`)
})


