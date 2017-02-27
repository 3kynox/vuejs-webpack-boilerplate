'use strict';

import Vue from 'vue';

import Vuex from 'vuex';

import exampleStore from 'vuex/example/store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    exampleStore
  },
  strict: process.env.NODE_ENV !== 'development'
});

export default store;
