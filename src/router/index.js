import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const load = (component) => {
  return () => import(`@/pages/${component}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: load('Home')
    }
  ]
})
