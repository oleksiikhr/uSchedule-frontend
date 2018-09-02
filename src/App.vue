<template>
  <div id="app">
    <u-header />
    <div id="content" :class="{ 'blur-5': search }">
      <router-view />
    </div>

    <u-search v-show="search" @close="closeSearch" />
  </div>
</template>

<script>
import uSearch from './components/Search'
import uHeader from './components/Header'

export default {
  components: {
    uHeader, uSearch
  },
  mounted () {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        this.closeSearch()
      }
    })
  }
}
</script>
