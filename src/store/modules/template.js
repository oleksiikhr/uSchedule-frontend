const state = {
  darkTheme: false
}

const mutations = {
  GET_DARK_THEME (state) {
    if (+localStorage.getItem('darkTheme')) {
      state.darkTheme = true
    }
  },
  CHANGE_DARK_THEME (state) {
    state.darkTheme = !state.darkTheme
    localStorage.setItem('darkTheme', +state.darkTheme)
  }
}

const actions = {

}

export default {
  state, mutations, actions
}
