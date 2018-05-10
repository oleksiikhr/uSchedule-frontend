<!--
@added | response from the server
-->
<template>
  <el-dialog title="Добавить преподавателя" :visible.sync="inDialog" width="40%" :class="theme">
    <div>
      <p>
        <span>Имя:</span>
        <el-input placeholder="Имя" v-model="form.first_name" />
      </p>
      <p>
        <span>Фамилия:</span>
        <el-input placeholder="Фамилия" v-model="form.last_name" />
      </p>
      <p>
        <span>Отчество:</span>
        <el-input placeholder="Отчество" v-model="form.middle_name" />
      </p>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="inDialog = false">Отмена</el-button>
      <el-button type="primary" @click="fetchAdd()">Добавить</el-button>
    </span>
  </el-dialog>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    dialog: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      form: {},
      inDialog: false,
      loading: false
    }
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    }
  },
  methods: {
    fetchAdd () {
      this.loading = true

      axios.post('teachers', this.form)
        .then(res => {
          this.$emit('added', res.data)
          this.$message({ type: 'success', message: 'Добавлено' })
          this.form = {}
          this.loading = false
          this.inDialog = false
        })
        .catch(() => {
          this.$message({ type: 'error', message: 'Произошла ошибка' })
          this.loading = false
        })
    }
  },
  watch: {
    dialog () {
      this.inDialog = true
    }
  }
}
</script>
