export default {
  computed: {
    search () {
      return this.$store.state.template.search
    }
  },
  methods: {
    openSearch () {
      this.$store.commit('OPEN_SEARCH')
    },
    closeSearch () {
      this.$store.commit('CLOSE_SEARCH')
    }
  }
}
