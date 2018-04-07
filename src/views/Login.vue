<template>
  <div id="login-page">
    <h1>Авторизация</h1>
    <el-form label-width="60px" ref="form" :model="form">
      <el-form-item label="Логин">
        <el-input v-model="form.login" ref="login"></el-input>
      </el-form-item>
      <el-form-item label="Пароль">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" :disabled="loading" @click="fetchAuth()">
          Войти
        </el-button>
      </el-form-item>
    </el-form>
    <!-- TODO Login and recovery password link -->
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
#login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e7e7e7;
  background: #fff;
}

h1 {
  text-align: center;
  margin: 0 0 20px;
}

.el-button {
  width: 100%;
}
</style>
