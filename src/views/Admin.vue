<template>
  <el-container id="admin">
    <el-aside width="250px">
      <nav-menu />
    </el-aside>
    <el-main>
      Content
      <!-- TODO sub routes -->
    </el-main>
  </el-container>
</template>

<script>
import NavMenu from '../components/admin/NavMenu'

export default {
  components: {
    NavMenu
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  background: #fff;
  border-right: 1px solid #e6e6e6;
  height: calc(100vh - 64px); // 64px - Header
}
</style>
