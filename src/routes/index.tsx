import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Login from '../screens/Login'

const Routing = () => (
	<Router>
		<div>
			<Route path='/login' component={Login}/>
		</div>
	</Router>
)

export default Routing
