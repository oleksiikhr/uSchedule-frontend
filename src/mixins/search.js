export default {
  computed: {
    search () {
      return this.$store.state.template.search
    }
  },
  created () {
    document.addEventListener('keyup', this.eventKeyUp)
  },
  destroyed () {
    document.removeEventListener('keyup', this.eventKeyUp)
  },
  methods: {
    openSearch () {
      this.$store.commit('OPEN_SEARCH')
    },
    closeSearch () {
      this.$store.commit('CLOSE_SEARCH')
    },
    eventKeyUp (e) {
      if (e.keyCode === 27) {
        this.closeSearch()
      }
    }
  }
}
