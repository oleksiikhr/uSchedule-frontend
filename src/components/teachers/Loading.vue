<template>
  <div class="loading">
    <div :class="'teacher ' + theme" v-for="n in 8" :key="n">
      <div class="img process-loading process-loading__harder"></div>
      <div class="name process-loading process-loading__harder"></div>
      <div class="academic process-loading process-loading__harder"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    theme () {
      return this.$store.state.template.theme
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  display: contents;
}

.teacher {
  cursor: context-menu;
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
}

.name {
  height: 19px;
}

.academic {
  height: 16px;
}

.img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  &:after {
    border-radius: 50%;
  }
}
</style>
