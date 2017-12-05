import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import TattooDetails from './components/TattooDetails/tattooDetails'
import Wishlist from './components/wishlist/wishlist'

export default (
	<Switch>
		<Route path='/' component={Login} exact />
		<Route path='/dashboard' component={Dashboard}  />
		<Route path='/tattoo/:id' component={TattooDetails}  />
		<Route path='/wishlist' component={Wishlist}  />
	</Switch>
	)