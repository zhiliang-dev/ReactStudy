/**
 * 路由菜单配置项
 */

import loadable from '../utils/loadable';

const routerConfig = [
	{
		path: '/app',
		component: loadable(() => import('../components/App/App')),
	},
	{
		path: '/barui',
		component: loadable(() => import('../components/BarUI')),
	},
	{
		path: '/',
		component: loadable(() => import('../components/App/App')),
	},
];

export default routerConfig;
