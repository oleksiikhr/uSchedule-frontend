<template>
  <div :class="'no-items ' + theme">
    <span>Предметы не найдены</span>
    <el-button v-if="search" type="primary" @click="dialog = !dialog">
      Добавить с таким названием
    </el-button>

    <add-dialog :dialog="dialog" :name="search" />
  </div>
</template>

<script>
import AddDialog from './dialogs/SubjectAdd'

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

<style lang="scss" scoped>
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

// TODO Dark theme
</style>
