<template>
  <div id="dashboard" :class="theme">
    <!-- TODO FIXME if auth && admin (Admin page) -->
    <div class="block-admin">
      <div class="admin-link">
        <a @click.prevent="go('/admin')">Перейти в админ панель</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    theme () {
      return this.$store.state.template.theme
    }
  },
  methods: {
    go (to) {
      this.$router.push(to)
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
      background: #fff;
      text-align: center;
      color: rgba(0, 0, 0, 0.87);
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      }
    }
  }
}

// Dark

.dark {
  .admin-link > a {
    background: #333;
    border: 1px solid #444;
    color: rgba(255, 255, 255, .8);
  }
}
</style>
