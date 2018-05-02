import router from '../../router/index'
import { Message } from 'element-ui'
import axios from 'axios'

const state = {
  user: {},
  token: ''
}

const mutations = {
  AUTH_SET_USER (state, obj) {
    state.user = obj
  },
  AUTH_SET_TOKEN (state, str) {
    state.token = str
  }
}

const actions = {
  // TODO if exists token && user in localStorage -> not login. Global**
  authLogin ({commit}, obj) {
    axios.post('api/auth/login', obj)
      .then(res => {
        const user = res.data.user
        const token = res.data.token

        commit('AUTH_SET_USER', user)
        commit('AUTH_SET_TOKEN', token)

        if (obj.remember) {
          localStorage.setItem('token', token)
        }
        localStorage.setItem('user', JSON.stringify(user))

        Message.success(`Добро пожаловать, ${user.last_name} ${user.first_name}`)
        router.push('/')
      })
      .catch(() => {
        Message.error('Логин или пароль неверный.')
      })
  }
}

export default {
  state, mutations, actions
}
