// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'

import router from './router'
import store from './store'

import App from './App'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
