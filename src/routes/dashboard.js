
import Dashboard from '../pages/dashboard/Dashboard.vue';

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: 'Welcome to your dashboard!',
      auth: true
    },
    component: Dashboard
  }
];

export default  routes;