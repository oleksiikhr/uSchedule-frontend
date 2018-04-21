<template>
  <div id="app" :class="theme + (isFocusSearch ? ' is--search' : '')">
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
    isFocusSearch () {
      return this.$store.state.template.isFocusSearch
    },
    theme () {
      return this.$store.state.template.theme
    }
  },
  created () {
    this.$store.commit('GET_DARK_THEME')
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  background: #fbfbfb;
  &.is--search {
    height: 100vh;
    overflow: hidden;
    .el-main {
      filter: blur(5px)
    }
  }
}

header {
  display: flex;
  align-items: center;
  height: 64px !important;
  box-shadow: 0 0 1px 0 #4c4c4c;
}

.el-main {
  padding: 0;
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
