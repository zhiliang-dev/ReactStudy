import loadable from '../utils/loadable'

//使用loadable实现代码分割，提高首次页面加载速度
const routerConfig = [
	{
		path: '/app',
		component: loadable(() => import('../App')),
	},
	{
		path: '/pieui',
		component: loadable(() => import('../components/pieui')),
	},
	{
		path: '/mutilecharts',
		component: loadable(() => import('../components/MutiEcharts')),
	},
]

export default routerConfig
