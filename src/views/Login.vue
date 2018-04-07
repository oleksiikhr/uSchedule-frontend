<template>
  <div id="login-page" :class="theme">
    <div class="left">
      <!-- FIXME Temporary logo -->
      <img src="../assets/logo.png">
    </div>
    <div class="right">
      <div class="content">
        <h1>Авторизация</h1>
        <small>Забыли пароль? <router-link to="/restore">Восстановить аккаунт.</router-link></small>
        <el-form label-position="top" :model="form">
          <el-form-item label="Логин">
            <el-input v-model="form.login" ref="login" />
          </el-form-item>
          <el-form-item label="Пароль" class="bottom10">
            <el-input v-model="form.password" />
          </el-form-item>
          <el-form-item class="bottom10">
            <el-checkbox v-model="form.remember">Запомнить пароль</el-checkbox>
          </el-form-item>
          <el-form-item class="text--right">
            <el-button type="primary" @click="fetchAuth()">Войти</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {},
      loading: false
    }
  },
  mounted () {
    this.$nextTick(() => this.$refs.login.focus())
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    }
  },
  methods: {
    fetchAuth () {
      this.loading = true
      // TODO URL Auth
      axios.post('', this.form)
        .then(res => {
          console.log(res.data)
          this.form = {}
          this.loading = false
        })
        .catch(err => {
          console.log(err.response.data)
          this.$refs.login.focus()
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

#login-page {
  display: flex;
  max-width: 800px;
  margin: 0 auto;
}

.left, .right {
  width: 50%;
}

.left {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 400px;
  background: url('../assets/images/login/background.jpg') center;
  background-size: contain;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(26, 45, 80, 0.68);
  }
  > img {
    z-index: 999;
    max-width: 250px;
    max-height: 250px;
  }
}

.right {
  background: #fff;
  border: 1px solid #eaeaea;
  border-left: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  > .content {
    padding: 40px 40px 20px;
    > h1 {
      display: block;
      color: rgba(0, 0, 0, .87);
      font-size: 26px;
      margin: 0 0 5px;
    }
  }
}

.el-form {
  margin-top: 30px;
}

.el-form-item {
  margin-bottom: 30px;
  button {
    min-width: 120px;
  }
}

.bottom10 {
  margin-bottom: 10px;
}
</style>
