import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Login from '../screens/Login'
import Home from '../screens/Home'

const Routing = () => (
	<Router>
		<div>
			<Route exact={true} path='/' component={Home}/>
			<Route path='/login' component={Login}/>
		</div>
	</Router>
)

export default Routing
