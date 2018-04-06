<template>
  <div :class="'toolbar' + (darkTheme ? ' black' : '')">
    <router-link to="/" class="logo">
      <!-- TODO LOGO (img, svg) -->
      <!-- TODO Animate* on hover -->
      uSchedule
    </router-link>
    <!-- TODO Component Search* -->
    <div :class="classSearch">
      <div class="input-group primary--text">
        <i class="material-icons">search</i>
        <input placeholder="Поиск" @focus="search.focused = true" @blur="search.focused = false">
        <!-- TODO Clear input X -->
      </div>
    </div>

    <div class="right">
      <button @click="changeDarkTheme()" class="h-btn-icon">
        <i class="material-icons">opacity</i>
      </button>
      <!-- TODO FIXME if auth (Notifications) -->
      <router-link to="/notifications" class="h-btn-icon">
        <i class="material-icons">notifications_none</i>
      </router-link>
      <!-- TODO FIXME if auth && admin (Admin page) -->
      <router-link to="/admin" class="h-btn-icon">
        <i class="material-icons">star_border</i>
      </router-link>
      <!-- TODO FIXME if auth (User panel) -->
      <!-- TODO Component -->

      <!-- TODO FIXME if not auth -->
      <router-link to="/login" class="h-btn">
        Авторизация
      </router-link>

      <!-- TODO If auth - Admin panel (icon) -->
      <!-- TODO If auth - User panel -->
      <!-- TODO If not auth - Log In -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: {
        focused: false
      }
    }
  },
  computed: {
    classSearch () {
      return 'search' + (this.search.focused ? ' is--focused' : '')
    },
    darkTheme () {
      return this.$store.state.template.darkTheme
    }
  },
  methods: {
    changeDarkTheme () {
      this.$store.commit('CHANGE_DARK_THEME')
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
  height: 46px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  text-decoration: none !important;
  padding-right: 60px;
  &:hover {
    color: #fff;
  }
}

.search {
  display: flex;
  flex: 1 1;
  flex-wrap: wrap;
  position: relative;
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

.right {
  display: flex;
  margin-left: 20px;
}

.h-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  margin-left: 10px;
  background: #006da9;
  color: #fff;
  text-decoration: none;
  transition: .3s;
  &:hover {
    background: #fff;
    color: #333;
  }
}

.h-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: 0;
  height: 40px;
  width: 40px;
  cursor: pointer;
  text-decoration: none;
  color: rgba(255, 255, 255, .85);
  outline: 0;
  margin: 0 3px;
  transition: .3s;
  line-height: 0;
  &:hover {
    color: #fff;
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
