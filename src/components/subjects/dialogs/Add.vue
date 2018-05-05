<!--
@added | response from the server
-->
<template>
  <el-dialog title="Добавить предмет" :visible.sync="inDialog" width="40%" :class="theme">
    <div>
      <span>Название:</span>
      <el-input placeholder="Название" v-model="form.name" />
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
    },
    name: {
      type: String,
      required: false
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

      axios.post('subjects', this.form)
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
      this.form.name = this.name
    }
  }
}
</script>
