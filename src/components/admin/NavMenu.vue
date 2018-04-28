<template>
  <el-menu :default-active="routeFullPath" :class="theme" router>
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
        { route: '', name: 'Главная страница', icon: 'dashboard' },
        { route: '/teachers', name: 'Преподаватели', icon: 'people' },
        { route: '/subjects', name: 'Предметы', icon: 'book' },
        { route: '/settings', name: 'Настройки', icon: 'settings' }
      ]
    }
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    },
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

.dark {
  .el-menu-item {
    color: rgba(255, 255, 255, .87);
    background: #333;
    &:hover {
      background: #222;
    }
    &.is-active {
      color: #fff;
    }
  }
}
</style>
