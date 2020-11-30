import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'

class AppIndex extends Component {
	render() {
		return (
			<div>
				<h1>AppIndex</h1>
				<li>
					<ol>
						<Link to='/app'>App</Link>
					</ol>
					<ol>
						<Link to='/echarts'>Echarts</Link>
					</ol>
					<ol>
						<Link to='/mutilecharts'>MutiEcharts</Link>
					</ol>
				</li>
			</div>
		)
	}
}

const router = () => {
	return (
		<BrowserRouter>
			<Route path='/' component={AppIndex} />
			{/* <Switch>
				<Route path='/' component={AppIndex} />
				<Route path='/app' component={BasicLayout} />
				<Route path='/echarts' component={BasicLayout} />
				<Route path='/mutilecharts' component={BasicLayout} />
			</Switch> */}
		</BrowserRouter>
	)
}

export default router()
