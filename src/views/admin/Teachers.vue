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
      <template v-if="!loading || items.length">
        <template v-if="hasItems">
          <card v-for="(item, index) in items" :key="index" :item="item" @open="openDialog(item, index)" />
          <a v-if="!loading && isNextPage" :class="'teacher continue ' + theme" @click="fetchGet(true)">
            <i class="material-icons">autorenew</i>
          </a>
        </template>
        <no-items :search="search" v-else />
      </template>
      <loading v-if="loading" />
    </div>

    <!-- TODO Edit (+delete), Add Dialogs*. Or Teacher.vue -->
  </div>
</template>

<script>
import Loading from '../../components/teachers/Loading'
import NoItems from '../../components/teachers/NoItems'
import Card from '../../components/teachers/Card'
import axios from 'axios'

export default {
  components: {
    Card, NoItems, Loading
  },
  data () {
    return {
      items: [],
      search: '',
      page: 1,
      loading: true,
      isNextPage: false,
      edit: {
        item: {},
        index: -1
      },
      dialogs: {
        add: false,
        edit: false
      }
    }
  },
  mounted () {
    this.$refs.search.focus()
    this.fetchGet()
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    },
    hasItems () {
      return this.items.length > 0
    }
  },
  methods: {
    fetchGet (isContinue = false) {
      this.loading = true

      if (!isContinue) {
        this.items = []
        this.page = 1
      }

      axios.get('api/teachers', {
        params: {
          page: this.page++,
          search: this.search,
          order: [
            { column: 'last_name', type: 'ASC' },
            { column: 'first_name', type: 'ASC' },
            { column: 'middle_name', type: 'ASC' }
          ]
        }
      })
        .then(res => {
          const s = res.data.teachers
          if (s) {
            if (isContinue) {
              this.items.push(...s.data)
            } else {
              this.items = s.data
            }
            this.isNextPage = s.current_page < s.last_page
          }
          this.loading = false
        })
        .catch(() => {
          // TODO Show error message
          this.loading = false
        })
    },
    openDialog (obj, index) {
      this.edit.item = obj
      this.edit.index = index
      this.dialogs.edit = !this.dialogs.edit
    },
    handleAdded () {
      // TODO
    },
    handleEdited () {
      // TODO
    },
    handleDeleted () {
      // TODO
    }
  },
  watch: {
    search () {
      this.fetchGet()
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  text-align: center;
  justify-content: center;
}

.teacher {
  &.continue {
    display: flex;
    align-items: center;
    justify-content: center;
    > i {
      font-size: 2.5rem;
      color: #333;
    }
  }
}

// TODO Dark theme
</style>
