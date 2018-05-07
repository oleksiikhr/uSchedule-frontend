<template>
  <div :class="'loading ' + theme">
    <div class="teacher" v-for="n in 8" :key="n">
      <div class="img"></div>
      <div class="name"></div>
      <div class="academic"></div>
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
  flex-wrap: wrap;
  width: 100%;
}

.teacher {
  cursor: context-menu;
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
}

.name, .academic, .img {
  position: relative;
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

.light {
  .name:after, .academic:after, .img:after {
    background: #f3f3f3;
    background: linear-gradient(to right, #f3f3f3 8%, #fbfbfb 18%, #f9f9f9 33%);
    background-size: 800px 100px;
  }
}

.dark {
  .name:after, .academic:after, .img:after {
    background: #4c4c4c;
    background: linear-gradient(to right, #4c4c4c 8%, #424242 18%, #444 33%);
    background-size: 800px 100px;
  }
}
</style>
