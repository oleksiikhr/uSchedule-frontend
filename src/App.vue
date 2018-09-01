<template>
  <div id="app">
    <u-header />
    <router-view/>
  </div>
</template>

<script>
import uHeader from './components/Header'

export default {
  components: {
    uHeader
  }
}
</script>

<style lang="scss" scoped>

</style>
