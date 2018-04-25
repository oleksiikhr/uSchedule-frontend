<template>
  <!--FIXME Max Width*-->
  <div id="subjects">
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
        <el-button>Добавить</el-button>
      </div>
    </div>

    <div class="items" v-loading="loading">
      <template v-if="filterItems.length">
        <a class="item" v-for="item in filterItems" :key="item.id" @click="openItem(item)">
          {{ item.name }}
        </a>
      </template>
      <div class="no-items" v-else>
        <span>Предметы не найдены</span>
        <!--TODO @click-->
        <el-button type="primary">Добавить с таким названием</el-button>
      </div>
    </div>

    <subject-dialog :dialog="dialog" :item="item" @edited="handleEdited" @deleted="handleDeleted" />
  </div>
</template>

<script>
import SubjectDialog from '../../components/admin/dialogs/Subject'

export default {
  components: {
    SubjectDialog
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
      item: {},
      search: '',
      // TODO change to true
      loading: false,
      dialog: false
    }
  },
  mounted () {
    this.$refs.search.focus()
  },
  computed: {
    filterItems () {
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
    openItem (obj) {
      this.item = obj
      this.dialog = !this.dialog
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
  justify-content: space-around;
  padding: 10px 20px;
  background: #fff;
  border: 1px solid #e7e7e7;
  > .item {
    cursor: pointer;
    padding: 10px 20px;
  }
}

.no-items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;
  > span {
    margin-bottom: 20px;
    font-weight: bold;
  }
}

</style>
