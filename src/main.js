import ElementUiLangRu from 'element-ui/lib/locale/lang/ru-RU'
import ElementUi from 'element-ui'
import router from './router'
import store from './store'
import App from './App'
import Vue from 'vue'

// Vue use components.
Vue.use(ElementUi, ElementUiLangRu)

// Prevent the production tip on Vue startup.
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
