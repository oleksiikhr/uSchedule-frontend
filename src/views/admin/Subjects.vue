<template>
  <div id="subjects" :class="'component admin ' + theme">
    <div class="header">
      <div class="search">
        <el-input placeholder="Поиск" prefix-icon="el-icon-search" v-model="search" ref="search" clearable />
      </div>
      <div class="actions">
        <el-button @click="fetchGet()" icon="el-icon-refresh" :loading="loading" :disabled="loading" />
        <el-button @click="dialogs.add = !dialogs.add">Добавить</el-button>
      </div>
    </div>

    <div class="items">
      <template v-if="!loading || items.length">
        <template v-if="hasItems">
          <card v-for="(item, index) in items" :key="index" :item="item" @open="openDialog(item, index)" />
          <a v-if="!loading && isNextPage" :class="'subject continue ' + theme" @click="fetchGet(true)">
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
import EditDialog from '../../components/subjects/dialogs/Edit'
import AddDialog from '../../components/subjects/dialogs/Add'
import Loading from '../../components/subjects/Loading'
import NoItems from '../../components/subjects/NoItems'
import Card from '../../components/subjects/Card'
import axios from 'axios'

export default {
  components: {
    AddDialog, EditDialog, Loading, NoItems, Card
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

      axios.get('subjects', {
        params: {
          page: this.page++,
          search: this.search,
          order: { column: 'name', type: 'ASC' },
          count: 50
        }
      })
        .then(res => {
          const s = res.data.subjects
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
.subject {
  &.continue  {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 19px;
    background: #0288d1;
    color: #fff;
    > i {
      line-height: 0;
      font-size: inherit;
    }
  }
}

.dark {
  .items {
    border-color: #484848;
    background: #333;
  }
  .subject {
    &.continue {
      background: #845252;
      color: #fff;
    }
  }
}
</style>
