<template>
  <div :class="'no-items ' + theme">
    <span>{{ search ? 'Предметы не найдены' : 'Предметы отсутствуют' }}</span>
    <el-button type="primary" @click="dialog = !dialog">
      {{ search ? 'Добавить с таким названием' : 'Добавить' }}
    </el-button>

    <add-dialog :dialog="dialog" :name="search" />
  </div>
</template>

<script>
import AddDialog from './dialogs/Add'

export default {
  props: {
    search: {
      type: String,
      required: false
    }
  },
  components: {
    AddDialog
  },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    }
  }
}
</script>
