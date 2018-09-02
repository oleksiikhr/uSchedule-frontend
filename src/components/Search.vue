<template>
  <div id="search">
    <div class="search__header">
      <input type="text" class="box-shadow" title="Поиск" ref="search" placeholder="Поиск" v-model="input">
    </div>
    <div class="search__content">
      {{ input }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      teachers: []
    }
  },
  mounted () {
    this.fetchGetTeachers()
  },
  methods: {
    fetchGetTeachers () {
      console.log('fetchGetTeachers')
    }
  },
  watch: {
    search () {
      if (this.search) {
        this.$refs.search.focus()

        if (!this.input && !this.teachers.length) {
          this.fetchGetTeachers()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

#search {
  position: absolute;
  top: $header-height;
  left: 0;
  width: 100%;
  height: calc(100% - #{$header-height});
  min-height: calc(100vh - #{$header-height} + 1px);
}

.search__header {
  text-align: center;
  margin-bottom: 20px;
  > input {
    width: 100%;
    min-width: 300px;
    max-width: 500px;
    font-size: .9rem;
  }
}
</style>
