<template>
  <div id="subjects" :class="'component ' + theme">
    <div class="header">
      <div class="search">
        <el-input
                placeholder="Поиск предмета"
                prefix-icon="el-icon-search"
                v-model="search"
                ref="search"
                clearable
        />
      </div>
      <div class="actions">
        <el-button @click="fetchGet()" icon="el-icon-refresh" :loading="loading" :disabled="loading" />
        <el-button @click="addItem()">Добавить</el-button>
      </div>
    </div>

    <div class="items">
      <template v-if="!loading">
        <template v-if="filterItems.length">
          <a class="item" v-for="(item, index) in filterItems" :key="index" @click="openItem(item, index)">
            {{ item.name }}
          </a>
        </template>
        <div class="no-items" v-else>
          <span>Предметы не найдены</span>
          <el-button v-if="search" type="primary" @click="addItem(search)">
            Добавить с таким названием
          </el-button>
        </div>
      </template>
      <div class="loading" v-else>
        <div class="item" v-for="n in 3" :key="n">
          ...
        </div>
      </div>
    </div>

    <subject-add-dialog :dialog="dialogs.add" :name="add.name" @added="handleAdded" />
    <subject-edit-dialog :dialog="dialogs.edit" :item="edit.item" :index="edit.index" @edited="handleEdited"
                         @deleted="handleDeleted" />
  </div>
</template>

<script>
import SubjectEditDialog from '../../components/admin/dialogs/SubjectEdit'
import SubjectAddDialog from '../../components/admin/dialogs/SubjectAdd'
import axios from 'axios'

export default {
  components: {
    SubjectAddDialog, SubjectEditDialog
  },
  data () {
    return {
      // TODO Delete simple data
      items: [
        { id: 1, name: 'Информатика' },
        { id: 2, name: 'Биология' },
        { id: 3, name: 'Физика' },
        { id: 5, name: 'Математика' },
        { id: 6, name: 'ООП' },
        { id: 7, name: 'Химия' }
      ],
      search: '',
      loading: true,
      edit: {
        item: {},
        index: -1
      },
      add: {
        name: ''
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
    filterItems () {
      // FIXME Search backend**
      let search = this.search
      let items = this.items

      if (!search) {
        return items
      }

      search = search.toLocaleLowerCase().trim()

      items = items.filter(subject => {
        if (subject.name.toLowerCase().indexOf(search) !== -1) {
          return subject
        }
      })

      return items
    }
  },
  methods: {
    fetchGet () {
      this.loading = true

      // TODO Params
      axios.get('api/subjects')
        .then(res => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    openItem (obj, index) {
      this.edit.item = obj
      this.edit.index = index
      this.dialogs.edit = !this.dialogs.edit
    },
    addItem (name = '') {
      this.add.name = name
      this.dialogs.add = !this.dialogs.add
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
.header {
  display: flex;
  justify-items: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto 20px;
}

.search {
  flex-grow: 1;
  margin-right: 20px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #e7e7e7;
  > .item {
    cursor: pointer;
    padding: 10px 20px;
    margin: 10px;
    color: rgba(0, 0, 0, .87);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }
}

.no-items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  > span {
    margin-bottom: 20px;
    font-weight: bold;
  }
}

.loading {
  display: flex;
  > .item {
    padding: 10px 20px;
    margin: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    cursor: context-menu;
    letter-spacing: 2px;
    &:nth-child(2) {
      padding: 10px 30px;
    }
    &:nth-child(3) {
      padding: 10px 40px;
    }
  }
}

// TODO Dark theme
</style>
