// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import moment from 'moment'

Vue.config.productionTip = false
Vue.config.silent = true

 Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(value).format('lll')
    }
  })
Vue.use(Vuetify)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
