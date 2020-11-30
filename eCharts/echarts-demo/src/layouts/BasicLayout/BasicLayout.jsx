import React, { Component } from 'react';
import Layout from '@icedesign/layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import routeData from '../../config/routerConfig';

export default class BasicLayout extends Component {
	componentDidMount() {
		console.log('BasicLayout--', routeData);
	}
	render() {
		return (
			<Layout>
				<div>
					<Switch>
						{routeData.map((item, index) => {
							return item.component ? (
								<Route
									key={index}
									path={item.path}
									component={item.component}
									exact={item.exact}
								/>
							) : null;
						})}
					</Switch>

					{/* <Redirect exact from="/" to="/app" /> */}
				</div>
			</Layout>
		);
	}
}
