<template>
  <el-dialog :visible.sync="inDialog" :class="theme">
    <div class="card-teacher">
      <!--FIXME Image url, alt-->
      <img src="http://uschedule.local/images/avatar.png" :alt="longName">
      <span class="name">{{ longName }}</span>
      <span class="academic_title">{{ item.academic_title }}</span>
      <!--TODO Another info-->
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      inDialog: false
    }
  },
  computed: {
    longName () {
      return `${this.item.last_name} ${this.item.first_name} ${this.item.middle_name}`
    }
  },
  watch: {
    dialog () {
      this.inDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.card-teacher {
  text-align: center;
  > img {
    max-width: 150px;
    max-height: 150px;
  }
  > .name {
    display: block;
    font-size: 1.3rem;
    font-weight: bold;
    color: #333;
    margin: 12px 0 8px;
  }
}
</style>
