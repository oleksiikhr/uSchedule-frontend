<template>
  <div :class="'result ' + theme">
    <div class="flex">
      <div class="content">
        <div class="left">
          <!--TODO data from API, loading, etc-->
          <span class="title">Расписание</span>
        </div>
        <div class="middle">
          <!--TODO data from API, loading, etc-->
          <span class="title">Преподаватели</span>
        </div>
        <div class="right">
          <template v-if="rightColumnHasData">
            <div class="r-items" v-for="(item, i) in filterSections" :key="i" v-if="canDisplaySection(item)">
              <span class="title">{{ item.name }}</span>
              <div class="item" v-for="(sub, j) in item.items" :key="j">
                <a v-if="sub.link" @click.prevent="go(sub.link)">{{ sub.name }}</a>
                <a v-else @click="href(sub.href)">{{ sub.name }}</a>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="no-items">
              Данные не найдены
            </div>
          </template>
        </div>
      </div>
      <div class="copyright">
        <span>Made with 💖 by:</span>
        <a v-for="profile in copyright" :key="profile.nickname" :href="'https://github.com/' + profile.nickname"
           target="_blank" rel="noreferrer" :title="profile.name">
          {{ '@' + profile.nickname }}
        </a>
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
  data () {
    return {
      copyright: [
        { name: 'Alexey Khrushch', nickname: 'alexeykhr' },
        { name: 'Nikolay Siabrenko', nickname: 'niksib' }
      ]
    }
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    },
    user () {
      return this.$store.state.auth.user
    },
    filterSections () {
      let search = this.search.toLocaleLowerCase().trim()
      let res = []

      for (let [i, item] of sections.items.entries()) {
        res[i] = Object.assign({}, item)
        res[i].items = item.items.filter(section => {
          if (!search || (search && section.name.toLowerCase().indexOf(search) !== -1)) {
            if (typeof section.is_auth === 'undefined' || (section.is_auth === !!this.user.id)) {
              return section
            }
          }
        })
      }

      return res
    },
    rightColumnHasData () {
      return this.filterSections.some(s => {
        if (s.items.length) {
          return true
        }
      })
    }
  },
  methods: {
    changeFocus (bool) {
      this.$store.commit('SET_FOCUS_SEARCH', bool)
    },
    canDisplaySection (item) {
      if (item.is_admin && !this.user.is_admin) {
        return false
      }
      if (item.is_auth && !this.user.id) {
        return false
      }

      return item.items.length >= 1
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
  .flex {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0;
    max-width: 1400px;
    margin: 0 auto;
    min-height: calc(100% - 20px);
  }
  .content {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    .left, .middle, .right {
      width: 100%;
      padding: 0 20px;
    }
    .right {
      display: flex;
      flex-direction: column;
    }
  }
}

.no-items {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: rgba(255, 255, 255, .87);
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

.title {
  color: rgba(255, 255, 255, .87);
  font-weight: bold;
}

// Copyright
.copyright {
  display: flex;
  align-items: center;
  padding: 15px 0;
  margin-top: 25px;
  border-top: 1px solid #929292;
  font-size: .8rem;
  > span {
    color: #dcdcdc;
    margin-right: 10px;
    font-size: 12px;
    cursor: context-menu;
  }
  > a {
    color: #dcdcdc;
    margin-right: 10px;
    opacity: .6;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      opacity: 1;
    }
  }
}

// Dark

.dark {
  .result {
    background-color: rgba(43, 43, 43, .8);
  }
  .r-items {
    .item > a {
      background-color: rgba(255, 255, 255, .03);
      border-color: #505050;
      &:hover {
        background-color: rgba(0, 0, 0, .3);
        border-color: transparent;
      }
    }
  }
}
</style>
