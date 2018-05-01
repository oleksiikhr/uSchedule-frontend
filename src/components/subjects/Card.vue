<!--
@open | prop item
-->
<template>
  <a :class="'subject ' + theme" @click="emitOpenDialog()">
    {{ item.name }}
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    }
  },
  methods: {
    emitOpenDialog () {
      this.$emit('open', this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
.subject {
  margin: 10px;
  padding: 10px 20px;
  color: rgba(0, 0, 0, .87);
  background: #fff;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
}

.dark {
  background: #444;
  color: rgba(255, 255, 255, .87);
  &:hover {
    color: #fff;
  }
}
</style>
