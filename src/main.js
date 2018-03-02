// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import API  from './API'
import Store from './Store'
import {apiDomain} from './API'
//import Vue from 'vue'
import Vuetify from 'vuetify'
 
//Vue.use(Vuetify)
axios.defaults.baseURL = apiDomain //'http://127.0.0.1:8001';

window.axios = axios
window.API = API
window.Store = Store

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
