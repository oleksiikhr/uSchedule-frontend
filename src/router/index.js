import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login'
import Schedule from '@/views/Schedule'

import Admin from '@/views/Admin'
import DashboardAdmin from '@/views/admin/Dashboard'
import SubjectsAdmin from '@/views/admin/Subjects'
import TeachersAdmin from '@/views/admin/Teachers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        { path: '/', component: DashboardAdmin },
        { path: 'subjects/', component: SubjectsAdmin },
        { path: 'teachers/', component: TeachersAdmin }
      ]
    }
  ]
})
