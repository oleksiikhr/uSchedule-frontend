const state = {
  search: ''
}

const mutations = {
  OPEN_SEARCH (state) {
    state.search = true
  },
  CLOSE_SEARCH (state) {
    state.search = false
  }
}

const actions = {

}

export default {
  state, mutations, actions
}
