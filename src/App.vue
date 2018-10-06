<template>
  <div id="app">
    <u-header />
    <div id="content" :class="{ 'blur-5': search }">
      <transition name="page" mode="out-in">
        <router-view class="content__inner" />
      </transition>
    </div>

    <transition name="search">
      <u-search v-show="search" @close="closeSearch" />
    </transition>
  </div>
</template>

<script>
import uSearch from './components/Search'
import uHeader from './components/Header'

export default {
  components: {
    uHeader, uSearch
  }
}
</script>
