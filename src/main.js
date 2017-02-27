import Vue from 'vue';

import Application from 'containers/Application';

import Router from 'core/Router';

import 'stylesheets/main.scss';

import domready from 'domready';

class Main {

  constructor() {

    this.bind();

    this.addEventListeners();

    this.router = Router;

    this.start();
  }

  bind() {}

  addEventListeners() {}

  start() {

    new Vue({
      el: '#application',
      router: Router,
      template: Application
    });

  }
}

domready(() => {

  new Main();
});
