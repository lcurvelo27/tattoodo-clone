import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';

export default (
	<Switch>
		<Route path='/' component={Login} exact />
		<Route path='/dashboard' component={Dashboard} exact />
	</Switch>
	)