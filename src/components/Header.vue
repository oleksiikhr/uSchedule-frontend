<template>
  <header id="header">
    <div class="header__clock">
      <!--TODO link to time-->
      <el-button icon="el-icon-time" circle></el-button>
    </div>
    <div class="header__logo">
      LOGO
    </div>
    <div class="header__find">
      <!--TODO Search (schedule, teacher)-->
      <el-button icon="el-icon-search" circle></el-button>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
</style>
