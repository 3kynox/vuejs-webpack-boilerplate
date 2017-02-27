import Vue from 'vue';

import VueRouter from 'vue-router';

import HomePageComponent from 'containers/Homepage';

Vue.use( VueRouter );

class Router extends VueRouter {

  constructor() {

    super({
      pushState: true,
      mode: 'history',
      abstract: false,
      scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 };
      }
    });

    this.path = '/';
    this.firstRoute = true;
    this.routeTimeout = null;

    this.routes = [
      { path: '*', component: HomePageComponent }
    ];
  }
}

export default new Router;
