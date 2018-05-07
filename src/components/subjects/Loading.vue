<template>
  <div :class="'loading ' + theme">
    <div class="item process-loading" v-for="n in 10" :style="{ width: getRndInteger(90, 180) + 'px' }" :key="n"></div>
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
  width: 100%;
}

.item {
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  letter-spacing: 2px;
  height: 39px;
}
</style>
