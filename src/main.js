import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

Vue.http.options.root = 'https://vuejs-stock-trader-d1691.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
})
