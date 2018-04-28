<template>
  <div id="teachers" :class="'component admin ' + theme">
    <div class="header">
      <div class="search">
        <el-input
                placeholder="Поиск"
                prefix-icon="el-icon-search"
                v-model="search"
                ref="search"
                clearable
        />
      </div>
      <div class="actions">
        <el-button @click="fetchGet()" icon="el-icon-refresh" :loading="loading" :disabled="loading" />
        <el-button>Добавить</el-button>
      </div>
    </div>

    <div class="items">
      <!--TODO Card.vue - first_name, middle_name, last_name, academic_title, image, -->
    </div>
    <!-- TODO Edit (+delete), Add Dialogs*. Or Teacher.vue -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: [],
      search: '',
      loading: true
    }
  },
  mounted () {
    this.fetchGet()
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    }
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

<style lang="scss" scoped>
// TODO Dark theme
</style>
