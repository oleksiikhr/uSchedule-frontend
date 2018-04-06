<template>
  <div id="app" :class="darkTheme ? 'dark' : ''">
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
  },
  computed: {
    darkTheme () {
      return this.$store.state.template.darkTheme
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
}

header {
  display: flex;
  align-items: center;
  height: 64px !important;
  box-shadow: 0 0 1px 0 #4c4c4c;
}

// Dark Theme
.dark {
  &#app {
    background: #222;
  }
  header {
    background: #333;
  }
}
</style>
