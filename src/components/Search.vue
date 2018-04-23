<template>
  <div :class="classSearch">
    <div class="input-group primary--text">
      <i class="material-icons">search</i>
      <input placeholder="Поиск" v-model="input" @focus="changeFocus(true)">
      <a v-if="input || focus" href="#" class="close" @click.prevent="clearInput()">
        <i class="material-icons">clear</i>
      </a>
    </div>
    <div v-if="focus" class="result" @click="changeFocus(false)">
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
          <div class="r-items" v-for="(item, i) in filterSectionsSite" :key="i">
            <span class="title">{{ item.name }}</span>
            <div class="item" v-for="(sub, j) in item.items" :key="j">
              <a v-if="sub.link" href="#" @click.prevent="go(sub.link)">{{ sub.name }}</a>
              <a v-else :href="sub.href" target="_blank" rel="noreferrer">{{ sub.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sections } from '../config'

export default {
  data () {
    return {
      input: ''
    }
  },
  computed: {
    focus () {
      return this.$store.state.template.isFocusSearch
    },
    filterSectionsSite () {
      let search = this.input

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
    },
    classSearch () {
      return 'search' + (this.focus ? ' is--focused' : '')
    }
  },
  methods: {
    changeFocus (bool) {
      this.$store.commit('SET_FOCUS_SEARCH', bool)
    },
    clearInput () {
      this.input = ''
      this.changeFocus(false)
    },
    go (link) {
      this.clearInput()
      this.$router.push(link)
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;
  padding: 0;
  border-radius: 2px;
  background: #fff;
  border: 0;
  outline: none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  &.is--focused {
    i {
      color: inherit !important;
    }
  }
  > .input-group {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 7px 16px;
    > i {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-width: 40px;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      color: rgba(0, 0, 0, 0.54);
      cursor: context-menu;
    }
    > input {
      color: rgba(0, 0, 0, 0.87);
      box-shadow: none;
      flex: 1;
      height: 30px;
      font-size: 16px;
      border-style: none;
      margin: 0;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:focus {
        outline: none;
      }
    }
  }
}

.close {
  font-size: 0;
  color: #333;
  opacity: .3;
  margin-left: 16px;
  text-align: right;
  &:hover {
    opacity: 1;
  }
}

// Result
// TODO Dark
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
      padding: 7px;
      margin-bottom: 7px;
      border: 1px solid #969696;
      background: rgba(0, 0, 0, .1);
      color: rgba(255, 255, 255, 0.87);
      &:hover {
        background: rgba(0, 0, 0, .3);
        border: 1px solid transparent;
      }
    }
  }
}

// Dark

.dark {
  .search {
    &.is--focused i {
      color: rgba(255, 255, 255, .9) !important;
    }
    .input-group {
      color: rgba(255, 255, 255, .85);
      background: #4a4a4a;
      i {
        color: rgba(255, 255, 255, .5);
      }
      input {
        color: rgba(255, 255, 255, .85);
        background: #4a4a4a;
      }
    }
  }
}
</style>
