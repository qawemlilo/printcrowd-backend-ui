import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'
import auth from './auth';
import dashboard from './dashboard';


let allRoutes = [];

let routes = allRoutes.concat(
  auth, 
  dashboard
);

console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});


router.beforeEach((to, from, next) => {
  let loggedIn = !!store.getters['auth/user'];

  if(!loggedIn && to.meta.auth) {
    return next({name: 'login'});
  }
  else if(loggedIn && !to.meta.auth) {
    return next({name: 'dashboard'});
  }

  if (to.meta.title) {
    document.title = to.meta.title;
  }

  next();
});


export default router;