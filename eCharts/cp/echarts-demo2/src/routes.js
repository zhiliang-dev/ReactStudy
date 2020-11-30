import { lazy } from 'ice';
import UserLayout from '@/layouts/UserLayout';
// const UserLayout = lazy(() => import('@/layouts/UserLayout'));
// import Login from '@/pages/Login';
const Login = lazy(() => import('@/pages/Login'));
// import Register from '@/pages/Register';
const Register = lazy(() => import('@/pages/Register'));
import BasicLayout from '@/layouts/BasicLayout';
// const BasicLayout = lazy(() => import('@/layouts/BasicLayout'));
// import Solution from '@/pages/Solution';
const Solution = lazy(() => import('@/pages/Solution'));
// import Analysis from '@/pages/Analysis';
const Analysis = lazy(() => import('@/pages/Analysis'));
// import Monitor from '@/pages/Monitor';
const Monitor = lazy(() => import('@/pages/Monitor'));
// import Workplace from '@/pages/Workplace';
const Workplace = lazy(() => import('@/pages/Workplace'));
import FormBasic from '@/pages/FormBasic';
import FormTwo from '@/pages/FormTwo';
import FormThree from '@/pages/FormThree';
import FormFour from '@/pages/FormFour';
import FormStep from '@/pages/FormStep';
import FormClassified from '@/pages/FormClassified';
import FormHierarchical from '@/pages/FormHierarchical';
import FormGroup from '@/pages/FormGroup';
import FlowGroup from '@/pages/FlowGroup';
import BasicDetailPage from '@/pages/BasicDetailPage';
import Advanced from '@/pages/Advanced';
import BasicListPage from '@/pages/BasicListPage';
import CardListPage from '@/pages/CardListPage';
import TableListPage from '@/pages/TableListPage';
import FeedbackFail from '@/pages/FeedbackFail';
import FeedbackSuccess from '@/pages/FeedbackSuccess';
import FeedbackForbidden from '@/pages/FeedbackForbidden';
import FeedbackNotFound from '@/pages/FeedbackNotFound';
import FeedbackServerError from '@/pages/FeedbackServerError';
import Settings from '@/pages/Settings';
import Person from '@/pages/Person';

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/',
        redirect: '/user/login',
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/solution',
        component: Solution,
      },
      {
        path: '/dashboard/analysis',
        component: Analysis,
      },
      {
        path: '/dashboard/monitor',
        component: Monitor,
      },
      {
        path: '/dashboard/workplace',
        component: Workplace,
      },
      {
        path: '/form/basic',
        component: FormBasic,
      },
      {
        path: '/form/two',
        component: FormTwo,
      },
      {
        path: '/form/three',
        component: FormThree,
      },
      {
        path: '/form/four',
        component: FormFour,
      },
      {
        path: '/form/step',
        component: FormStep,
      },
      {
        path: '/form/classified',
        component: FormClassified,
      },
      {
        path: '/form/hierarchical',
        component: FormHierarchical,
      },
      {
        path: '/form/group',
        component: FormGroup,
      },
      {
        path: '/form/flow',
        component: FlowGroup,
      },
      {
        path: '/detail/basic',
        component: BasicDetailPage,
      },
      {
        path: '/detail/advanced',
        component: Advanced,
      },
      {
        path: '/list/basic',
        component: BasicListPage,
      },
      {
        path: '/list/card',
        component: CardListPage,
      },
      {
        path: '/list/table',
        component: TableListPage,
      },
      {
        path: '/feedback/fail',
        component: FeedbackFail,
      },
      {
        path: '/feedback/success',
        component: FeedbackSuccess,
      },
      {
        path: '/feedback/403',
        component: FeedbackForbidden,
      },
      {
        path: '/feedback/404',
        component: FeedbackNotFound,
      },
      {
        path: '/feedback/500',
        component: FeedbackServerError,
      },
      {
        path: '/settings',
        component: Settings,
      },
      {
        path: '/person',
        component: Person,
      },
      {
        path: '/',
        redirect: '/dashboard/analysis',
      },
    ],
  },
];
export default routerConfig;
