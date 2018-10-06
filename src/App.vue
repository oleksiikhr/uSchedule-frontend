<template>
  <div id="app">
    <u-header />
    <div id="content" :class="{ 'blur-5': search }">
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
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
    document.addEventListener('keyup', this.eventKeyUp)
  },
  destroyed () {
    document.removeEventListener('keyup', this.eventKeyUp)
  },
  methods: {
    eventKeyUp (e) {
      if (e.keyCode === 27) {
        this.closeSearch()
      }
    }
  }
}
</script>
