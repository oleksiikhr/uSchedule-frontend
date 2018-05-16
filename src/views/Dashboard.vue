<template>
  <div id="dashboard" :class="theme">
    <div class="block-admin" v-if="user.is_admin">
      <div class="admin-link">
        <router-link :to="{ name: 'admin' }">Перейти в админ панель</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.auth.user
    },
    theme () {
      return this.$store.state.template.theme
    }
  }
}
</script>

<style lang="scss" scoped>
#dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

.block-admin {
  .admin-link {
    > a {
      display: block;
      margin: 30px auto;
      padding: 20px;
      max-width: 800px;
      border: 1px solid #e7e7e7;
      background-color: #fff;
      text-align: center;
      color: rgba(0, 0, 0, .87);
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);
      }
    }
  }
}

.dark {
  .admin-link {
    > a {
      background-color: #333;
      border-color: #444;
      color: rgba(255, 255, 255, .8);
    }
  }
}
</style>
