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
        <el-button @click="dialogs.add = !dialogs.add">Добавить</el-button>
      </div>
    </div>

    <div class="items">
      <template v-if="!loading || items.length">
        <template v-if="hasItems">
          <!--FIXME @open - Show.vue-->
          <card v-for="(item, index) in items" :key="index" :item="item" @open="openDialog(item, index)" />
          <a v-if="!loading && isNextPage" :class="'teacher continue ' + theme" @click="fetchGet(true)">
            <i class="material-icons">autorenew</i>
          </a>
        </template>
        <no-items :search="search" v-else />
      </template>
      <loading v-if="loading" />
    </div>

    <add-dialog :dialog="dialogs.add" @added="handleAdded" />
    <edit-dialog :dialog="dialogs.edit" :item="edit.item" :index="edit.index" @edited="handleEdited" @deleted="handleDeleted" />
  </div>
</template>

<script>
import EditDialog from '../../components/teachers/dialogs/Edit'
import AddDialog from '../../components/teachers/dialogs/Add'
import Loading from '../../components/teachers/Loading'
import NoItems from '../../components/teachers/NoItems'
import Card from '../../components/teachers/Card'
import axios from 'axios'

export default {
  components: {
    Card, NoItems, Loading, AddDialog, EditDialog
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
  activated () {
    this.$refs.search.focus()
  },
  mounted () {
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

      axios.get('teachers', {
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
          const result = res.data.teachers
          if (result) {
            if (isContinue) {
              this.items.push(...result.data)
            } else {
              this.items = result.data
            }
            this.isNextPage = result.current_page < result.last_page
          }
          this.loading = false
        })
        .catch(() => {
          // TODO Show error message
          this.loading = false
        })
    },
    openDialog (obj, index = -1) {
      this.edit.item = obj
      this.edit.index = index
      this.dialogs.edit = !this.dialogs.edit
    },
    handleAdded (response) {
      this.openDialog(response.item)
      // TODO
    },
    handleEdited (response, index) {
      this.$set(this.items, index, response.item)
    },
    handleDeleted (index) {
      this.items.splice(index, 1)
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
