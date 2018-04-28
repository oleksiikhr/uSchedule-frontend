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
      <template v-if="!loading">
        <template v-if="hasItems">
          <card v-for="(item, index) in items" :key="index" :item="item" @open="openDialog(item, index)" />
          <!--TODO Button "+". Improved fetchGet (push array or new)-->
        </template>
        <no-items :search="search" v-else />
      </template>
      <loading v-else />
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
      // TODO Delete simple data
      items: [],
      search: '',
      loading: true,
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
    fetchGet () {
      this.loading = true

      // TODO Params
      axios.get('api/subjects')
        .then(res => {
          // TODO response from the server
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
  }
}
</script>

<style lang="scss" scoped>
// TODO Dark theme
</style>
