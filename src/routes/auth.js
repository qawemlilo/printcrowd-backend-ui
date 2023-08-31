
import Login from '../pages/auth/Login.vue';
import Register from '../pages/auth/Register.vue';
import ForgotPassword from '../pages/auth/ForgotPassword.vue';
import ResetPassword from '../pages/auth/ResetPassword.vue';


const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Members Login',
      auth: false
    },
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: 'Members Registration',
      auth: false
    },
    component: Register
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    meta: {
      title: 'Forgot your password?',
      auth: false
    },
    component: ForgotPassword
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    meta: {
      title: 'Reset your password',
      auth: false
    },
    component: ResetPassword
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      auth: true
    },
    component: ForgotPassword
  },
  {
    path: '/',
    redirect: '/login'
  }
];

export default  routes;
