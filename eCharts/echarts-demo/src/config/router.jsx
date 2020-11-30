/**
 * 定义应用路由
 */

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import UserLayout from '../layouts/UserLayout';
import BasicLayout from '../layouts/BasicLayout';

//按照layout分组
const router = () => {
	console.log('router');
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={BasicLayout} />
			</Switch>
		</BrowserRouter>
	);
};

export default router;
