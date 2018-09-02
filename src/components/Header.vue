<template>
  <header id="header">
    <div class="header__clock" @click="closeSearch">
      <router-link :to="{ name: 'timetable' }">
        <i class="material-icons">access_time</i>
      </router-link>
    </div>
    <div class="header__logo" @click="closeSearch">
      <router-link :to="{ name: 'home' }">
        <strong style="font-size: 1.2rem; border-bottom: 1px solid;">uSchedule</strong>
      </router-link>
    </div>
    <div class="header__find">
      <a @click="toggleSearch">
        <i class="material-icons">{{ search ? 'close' : 'search' }}</i>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleSearch () {
      if (this.search) {
        return this.closeSearch()
      }

      return this.openSearch()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

a {
  display: block;
  line-height: 0;
  padding: 0 20px;
  user-select: none;
}

#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
