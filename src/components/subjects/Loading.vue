<template>
  <div :class="'loading ' + theme">
    <div class="item" v-for="n in 3" :key="n">
      ...
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
  display: flex;
  > .item {
    margin: 10px;
    padding: 10px 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    cursor: context-menu;
    letter-spacing: 2px;
    &:nth-child(2) {
      padding: 10px 30px;
    }
    &:nth-child(3) {
      padding: 10px 40px;
    }
  }
}

// TODO Dark theme
</style>
