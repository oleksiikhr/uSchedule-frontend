<template>
  <div :class="'loading ' + theme">
    <div class="item" v-for="n in 10" :style="{ width: getRndInteger(60, 140) + 'px' }" :key="n"></div>
  </div>
</template>

<script>
export default {
  computed: {
    theme () {
      return this.$store.state.template.theme
    }
  },
  methods: {
    getRndInteger (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  flex-wrap: wrap;
  > .item {
    position: relative;
    margin: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    cursor: context-menu;
    letter-spacing: 2px;
    height: 39px;
    // FIXME To global*
    &:after {
      content: '';
      box-sizing: border-box;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: loading;
      animation-timing-function: linear;
      background: #eeeeee;
      background: linear-gradient(to right, #eeeeee 8%,#dddddd 18%, #eeeeee 33%);
      background-size: 800px 104px;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
}

.dark {
  .item {
    background-color: #444;
    color: rgba(255, 255, 255, .87);
  }
}
</style>
