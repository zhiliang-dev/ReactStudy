import BasicLayout from '@/layouts/BasicLayout';
import Dashboard from '@/pages/Dashboard';
import BarUI from '@/pages/BarUI';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/barui',
        exact: true,
        component: BarUI,
      },
      {
        path: '/',
        exact: true,
        component: Dashboard,
      },
    ],
  },
];
export default routerConfig;
