<template>
  <div id="teachers" v-loading="loading">
    Teachers
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: [],
      loading: true
    }
  },
  mounted () {
    this.fetchGet()
  },
  methods: {
    fetchGet () {
      this.loading = true

      axios.get('api/teachers')
        .then(res => {
          // TODO
          this.loading = false
        })
        .catch(() => {
          // TODO Show error message
          this.loading = false
        })
    }
  }
}
</script>
