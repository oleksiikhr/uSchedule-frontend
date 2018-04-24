<template>
  <div :class="'toolbar ' + theme">
    <router-link to="/" class="logo">
      <!-- TODO LOGO (img, svg) -->
      <!-- TODO Animate* on hover -->
      uSchedule
    </router-link>
    <search />

    <div class="right">
      <router-link to="/schedule" class="h-btn-icon">
        <i class="material-icons">schedule</i>
      </router-link>
      <!-- TODO FIXME if auth && admin (Admin page) -->
      <router-link to="/admin" class="h-btn-icon">
        <i class="material-icons">star_border</i>
      </router-link>
      <!-- TODO FIXME if auth (User panel) -->
      <!-- TODO Component -->

      <!-- TODO FIXME if auth (Notifications) + drop-down box* -->
      <router-link to="/notifications" class="h-btn-icon">
        <i class="material-icons">notifications_none</i>
      </router-link>
      <button @click="changeDarkTheme()" class="h-btn-icon">
        <i class="material-icons">opacity</i>
      </button>
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
  &:hover {
    color: #fff;
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
