// Components
import Vue from 'vue'
import App from './App'
// import axios from 'axios'
// import moment from 'moment'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

// Styles (own + libs)
import './assets/scss/main.scss'

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
