<!--
@deleted | index
@edited | response from the server | index
-->
<template>
  <el-dialog :title="item.name" :visible.sync="inDialog" width="40%">
    <div>
      <span>Новое название:</span>
      <el-input placeholder="Название" v-model="inItem.name" />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="danger" class="delete" icon="el-icon-delete" @click="openDelete()"
                 :loading="loading" :disabled="loading" />
      <el-button @click="inDialog = false">Отмена</el-button>
      <el-button type="primary" @click="fetchEdit()" :loading="loading" :disabled="loading">
        Изменить
      </el-button>
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
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: false
    }
  },
  data () {
    return {
      inItem: {},
      inDialog: false,
      loading: false
    }
  },
  methods: {
    fetchEdit () {
      this.loading = true

      axios.put('subjects/' + this.inItem.id, this.inItem)
        .then(res => {
          this.$emit('edited', res.data, this.index)
          this.$message({ type: 'success', message: 'Отредактировано' })
          this.loading = false
          this.inDialog = false
        })
        .catch(() => {
          this.$message({ type: 'error', message: 'Произошла ошибка' })
          this.loading = false
        })
    },
    fetchDelete () {
      this.loading = true

      axios.delete('subjects/' + this.inItem.id)
        .then(() => {
          this.$emit('deleted', this.index)
          this.$message({ type: 'success', message: 'Удалено' })
          this.loading = false
          this.inDialog = false
        })
        .catch(() => {
          this.$message({ type: 'error', message: 'Произошла ошибка' })
          this.loading = false
        })
    },
    openDelete () {
      this.$confirm('Вы действительно хотите удалить этот предмет?', 'Warning', {
        confirmButtonText: 'Да',
        cancelButtonText: 'Отмена',
        type: 'warning'
      }).then(() => {
        this.fetchDelete()
      }).catch(() => {})
    }
  },
  watch: {
    dialog () {
      this.inItem = Object.assign({}, this.item)
      this.inDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.delete {
  float: left;
}
</style>
