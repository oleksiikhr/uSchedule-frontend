// Components
import Vue from 'vue'
import App from './App'
// import axios from 'axios'
// import moment from 'moment'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

// Styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

// moment.locale()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
