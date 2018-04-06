// Components
import Vue from 'vue'
import App from './App'
// import axios from 'axios'
// import moment from 'moment'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'

// Styles (own + libs)
import './assets/scss/main.scss'

Vue.use(ElementUI)

// moment.locale()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
