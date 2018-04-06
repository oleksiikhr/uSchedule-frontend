<template>
  <div id="app">
    <el-container>
      <el-header class="primary">
        <header-content />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderContent from './components/Header'

export default {
  components: {
    HeaderContent
  }
}
</script>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  height: 64px !important;
  box-shadow: 0 0 1px 0 #4c4c4c;
}
</style>
