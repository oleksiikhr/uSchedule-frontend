<template>
  <div :class="'loading ' + theme">
    <div class="item" v-for="n in 10" :style="{ width: getRndInteger(90, 180) + 'px' }" :key="n"></div>
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
}

.item {
  position: relative;
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  cursor: context-menu;
  letter-spacing: 2px;
  height: 39px;
  &:after {
    content: '';
    box-sizing: border-box;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: loading;
    animation-timing-function: linear;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
}

.light {
  .item:after {
    background: #f3f3f3;
    background: linear-gradient(to right, #f3f3f3 8%, #fbfbfb 18%, #f9f9f9 33%);
    background-size: 800px 100px;
  }
}

.dark {
  .item:after {
    background: #4c4c4c;
    background: linear-gradient(to right, #4c4c4c 8%, #424242 18%, #444 33%);
    background-size: 800px 100px;
  }
}
</style>
