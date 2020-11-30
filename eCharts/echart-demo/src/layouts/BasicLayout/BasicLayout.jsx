import React, { Component } from 'react'
import Layout from '@icedesign/layout'
import routerData from '../../config/routerConfig'
import { Switch, Route, Redirect } from 'react-router-dom'

export default class BasicLayout extends Component {
	render() {
		return (
			<Layout>
				<div>
					{/* <Switch>
						{routerData.map((item, index) => {
							return item.component ? <Route key={index} path={item.path} component={item.component} exact={item.exact} /> : null
						})}
					</Switch> */}
				</div>
			</Layout>
		)
	}
}
