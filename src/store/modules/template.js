const state = {
  darkTheme: false,
  theme: 'light'
}

const mutations = {
  GET_DARK_THEME (state) {
    if (+localStorage.getItem('darkTheme')) {
      state.darkTheme = true
      state.theme = 'dark'
    }
  },
  CHANGE_DARK_THEME (state) {
    state.darkTheme = !state.darkTheme
    state.theme = state.darkTheme ? 'dark' : 'light'
    localStorage.setItem('darkTheme', +state.darkTheme)
  }
}

const actions = {

}

export default {
  state, mutations, actions
}
