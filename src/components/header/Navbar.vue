<template>
  <div :class="'toolbar ' + theme">
    <a @click="go('/')" class="logo">
      <!-- TODO LOGO (img, svg) -->
      <!-- TODO Animate* on hover -->
      uSchedule
    </a>
    <search />

    <div class="right">
      <button @click="go('/schedule')" class="h-btn-icon btn">
        <i class="material-icons">schedule</i>
      </button>
      <!-- TODO FIXME if auth (User panel) -->
      <!-- TODO Component -->

      <!-- TODO FIXME if auth (Notifications) + drop-down box* -->
      <button v-if="false" @click="go('/')" class="h-btn-icon btn">
        <i class="material-icons">notifications_none</i>
      </button>
      <button @click="changeDarkTheme()" class="h-btn-icon btn">
        <i class="material-icons">opacity</i>
      </button>
      <!-- TODO FIXME if not auth -->
      <button @click="go('/login')" class="h-btn btn">
        Авторизация
      </button>

      <!-- TODO If auth - Admin panel (icon) -->
      <!-- TODO If auth - User panel -->
      <!-- TODO If not auth - Log In -->
    </div>
  </div>
</template>

<script>
import Search from './Search'

export default {
  components: {
    Search
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    }
  },
  methods: {
    changeDarkTheme () {
      this.$store.commit('CHANGE_DARK_THEME')
    },
    changeFocusSearch (bool) {
      this.$store.commit('SET_FOCUS_SEARCH', bool)
    },
    go (to) {
      this.changeFocusSearch(false)
      this.$router.push(to)
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  width: 200px;
  height: 46px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  text-decoration: none !important;
  cursor: pointer;
  &:hover {
    color: #fff;
    opacity: .7;
  }
}

.right {
  display: flex;
  margin-left: 20px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  line-height: 0;
  transition: .3s;
  text-decoration: none;
  cursor: pointer;
  font-size: .9rem;
}

.h-btn {
  padding: 0 15px;
  margin-left: 10px;
  background: #006da9;
  color: #fff;
  &:hover {
    background: #fff;
    color: #333;
  }
}

.h-btn-icon {
  padding: 0;
  background: 0;
  height: 40px;
  width: 40px;
  color: rgba(255, 255, 255, .85);
  margin: 0 3px;
  &:hover {
    color: #fff;
  }
}

// Dark

.dark {
  .right {
    a, button {
      color: rgba(255, 255, 255, .5);
    }
    .h-btn {
      color: rgba(255, 255, 255, .85);
      background: #525252;
      &:hover {
        background: #222;
      }
    }
    .h-btn-icon, .h-btn {
      &:hover {
        color: rgba(255, 255, 255, .9);
      }
    }
  }
}
</style>
