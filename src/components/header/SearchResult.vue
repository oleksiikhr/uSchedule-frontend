<template>
  <div :class="'result ' + theme">
    <div class="content">
      <div class="left">
        <!--TODO data from API-->
        <span style="color: #fff;">LEFT</span>
      </div>
      <div class="middle">
        <!--TODO data from API-->
        <span style="color: #fff;">MIDDLE</span>
      </div>
      <div class="right">
        <!--TODO has access-->
        <div class="r-items" v-for="(item, i) in filterSectionsSite" :key="i" v-if="item.items.length > 0">
          <span class="title">{{ item.name }}</span>
          <div class="item" v-for="(sub, j) in item.items" :key="j">
            <a v-if="sub.link" @click.prevent="go(sub.link)">{{ sub.name }}</a>
            <a v-else @click="href(sub.href)">{{ sub.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sections } from '../../config'

export default {
  props: {
    search: {
      type: String,
      required: false
    }
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    },
    filterSectionsSite () {
      let search = this.search

      if (!search) {
        return sections.items
      }

      // Lost references
      let res = JSON.parse(JSON.stringify(sections.items))
      search = search.toLocaleLowerCase().trim()

      for (let [i, item] of res.entries()) {
        res[i].items = item.items.filter(section => {
          if (section.name.toLowerCase().indexOf(search) !== -1) {
            return section
          }
        })
      }

      return res
    }
  },
  methods: {
    changeFocus (bool) {
      this.$store.commit('SET_FOCUS_SEARCH', bool)
    },
    go (to) {
      this.changeFocus(false)
      this.$router.push(to)
    },
    href (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.result {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  overflow: auto;
  background: rgba(38, 51, 70, 0.8);
  z-index: 99999;
  > .content {
    display: flex;
    justify-content: center;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    .left, .middle, .right {
      width: 100%;
    }
    .right {
      display: flex;
      flex-direction: column;
    }
  }
}

// Right items
.r-items {
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
  > .title {
    display: block;
    padding-bottom: 20px;
    text-align: center;
    color: rgba(255, 255, 255, .87);
    font-weight: bold;
    font-size: 1.1rem;
    overflow: hidden;
    cursor: context-menu;
    &:before, &:after {
      content: "";
      background: rgba(255, 255, 255, .87);
      display: inline-block;
      height: 1px;
      position: relative;
      vertical-align: middle;
      width: 50%;
    }
    &:before {
      right: 0.5em;
      margin-left: -50%;
    }
    &:after {
      left: 0.5em;
      margin-right: -50%;
    }
  }
  > .item {
    > a {
      display: block;
      padding: 9px;
      margin-bottom: 7px;
      border-left: 2px solid #8c8c8c;
      background: rgba(0, 0, 0, .1);
      color: rgba(255, 255, 255, 0.87);
      font-size: 0.9rem;
      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, .3);
        border-color: transparent;
      }
    }
  }
}

// TODO Dark
// Dark

</style>
