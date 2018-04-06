<template>
  <div id="app">
    <el-container>
      <el-header class="primary">
        <header-content />
      </el-header>
      <el-main>
        Main
        <router-view/>
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
}
</style>
