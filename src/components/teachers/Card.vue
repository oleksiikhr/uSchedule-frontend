<!--
@open | prop item
-->
<template>
  <a :class="'teacher ' + theme" @click="emitOpenDialog()">
    <img :src="item.image" :alt="fullName">
    <p class="name">{{ fullName }}</p>
    <p class="academic">{{ item.academic_title }}</p>
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
    },
    fullName () {
      return `${this.item.last_name} ${this.item.first_name} ${this.item.middle_name}`
    }
  },
  methods: {
    emitOpenDialog () {
      this.$emit('open', this.item)
    }
  }
}
</script>

<style lang="scss">
.teacher {
  display: inline-block;
  max-width: 170px;
  vertical-align: top;
  height: 180px;
  width: 100%;
  border: 1px solid #e7e7e7;
  margin: 10px;
  padding: 15px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  > img {
    width: 100%;
    max-width: 100px;
    border-radius: 50%;
  }
  p {
    color: rgba(0, 0, 0, .87);
    margin: 0 auto;
  }
  .name {
    font-size: 1rem;
    font-weight: bold;
    margin: 8px 0 12px;
  }
  .academic {
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.85rem;
  }
}

.dark {
  &.teacher {
    background-color: #444;
    border-color: #555;
  }
  p {
    color: rgba(255, 255, 255, .87);
  }
}
</style>
