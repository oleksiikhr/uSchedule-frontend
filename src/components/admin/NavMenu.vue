<template>
  <el-menu :default-active="routeFullPath" router>
    <el-menu-item v-for="(item, index) in items" :key="index" :index="'/admin' + item.route">
      <i class="material-icons">{{ item.icon }}</i>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      // TODO Role v-if
      items: [
        { route: '', name: 'Профиль', icon: 'account_balance' },
        { route: '/teachers', name: 'Преподаватели', icon: 'people' },
        { route: '/subjects', name: 'Предметы', icon: 'book' }
      ]
    }
  },
  computed: {
    routeFullPath () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: 0;
}

.material-icons {
  font-size: 20px;
  width: 24px;
  margin-right: 5px;
  text-align: center;
}
</style>
