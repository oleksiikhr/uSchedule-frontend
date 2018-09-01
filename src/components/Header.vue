<template>
  <header id="header">
    <div class="header__clock">
      <router-link :to="{ name: 'timetable' }">
        <i class="material-icons">access_time</i>
      </router-link>
    </div>
    <div class="header__logo">
      <router-link :to="{ name: 'home' }">
        <strong style="font-size: 1.2rem; border-bottom: 1px solid;">uSchedule</strong>
      </router-link>
    </div>
    <div class="header__find">
      <!--TODO Search, full-height (schedule, teacher)-->
      <a @click="openSearch">
        <i class="material-icons">search</i>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    openSearch () {
      console.log('Open search')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  display: block;
  line-height: 0;
  padding: 0 20px;
}

#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
</style>
