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
      <!--TODO No Items Component-->
      <!--TODO Loading Component-->
      <!--TODO Handle-->
      <card v-for="(item, index) in items" :key="index" :item="item" />
    </div>
    <!-- TODO Edit (+delete), Add Dialogs*. Or Teacher.vue -->
  </div>
</template>

<script>
import Card from '../../components/teachers/Card'
import axios from 'axios'

export default {
  components: {
    Card
  },
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
          this.items = res.data.teachers.data
          this.loading = false
        })
        .catch(() => {
          this.$Message.warning('Ошибка сервера')
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  display: block !important;
  text-align: center;
}

// TODO Dark theme
</style>
