<!--
@deleted | index
@edited | response from the server | index
-->
<template>
  <el-dialog :title="longName" :visible.sync="inDialog">
    <div>
      <!--TODO Image-->
      <p>
        <span>Имя:</span>
        <el-input placeholder="Имя" v-model="inItem.first_name" />
      </p>
      <p>
        <span>Фамилия:</span>
        <el-input placeholder="Фамилия" v-model="inItem.last_name" />
      </p>
      <p>
        <span>Отчество:</span>
        <el-input placeholder="Отчество" v-model="inItem.middle_name" />
      </p>
      <p>
        <span>Ученое звание:</span>
        <el-input placeholder="Отчество" v-model="inItem.academic_title" />
      </p>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="danger" class="delete" icon="el-icon-delete" @click="openDelete()" size="small"
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
  computed: {
    longName () {
      return `${this.item.last_name} ${this.item.first_name} ${this.item.middle_name}`
    }
  },
  methods: {
    fetchEdit () {
      this.loading = true

      // TODO Image

      axios.patch('teachers/' + this.inItem.id, {
        first_name: this.inItem.first_name,
        middle_name: this.inItem.middle_name,
        last_name: this.inItem.last_name,
        academic_title: this.inItem.academic_title
      })
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

      axios.delete('teachers/' + this.inItem.id)
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
      this.$confirm('Вы действительно хотите удалить этото преподавателя?', this.item.name, {
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
  height: 40px;
}
</style>
