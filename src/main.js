// Components
import Vue from 'vue'
import App from './App'
// import axios from 'axios'
// import moment from 'moment'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'

// Styles (own + libs)
import './assets/scss/main.scss'

Vue.use(ElementUI, lang)

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
