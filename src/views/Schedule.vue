<template>
  <div id="schedule" :class="theme">
    <h1>Расписание звонков</h1>
    <!-- TODO Loading process -->
    <!-- TODO Current time** -->
    <table>
      <thead>
      <tr>
        <td><i class="material-icons">format_list_numbered</i></td>
        <td><i class="material-icons">alarm</i></td>
        <td><i class="material-icons">alarm_off</i></td>
        <td><i class="material-icons">restaurant</i></td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in items" :key="index" :class="getClassRow(index)">
        <td>{{ index + 1 }}</td>
        <td>{{ item.start_time }}</td>
        <td>{{ item.end_time }}</td>
        <td>{{ compareTime(index) }}</td>
      </tr>
      </tbody>
    </table>
    <!-- TODO: button for edit -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      // FIXME Transfer to vuex store
      items: [
        { id: 1, lesson_num: 1, start_time: '8:20', end_time: '9:40' },
        { id: 5, lesson_num: 2, start_time: '9:55', end_time: '11:15' },
        { id: 2, lesson_num: 3, start_time: '11:50', end_time: '13:10' },
        { id: 3, lesson_num: 4, start_time: '13:30', end_time: '14:50' },
        { id: 4, lesson_num: 5, start_time: '15:00', end_time: '16:20' },
        { id: 7, lesson_num: 6, start_time: '16:30', end_time: '17:50' },
        { id: 8, lesson_num: 7, start_time: '18:00', end_time: '19:20' }
      ]
    }
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    }
  },
  methods: {
    compareTime (index) {
      if (!this.items[index + 1]) {
        return ''
      }

      const [fHour, fMinute] = this.items[index].end_time.split(':').map(Number)
      const [sHour, sMinute] = this.items[index + 1].start_time.split(':').map(Number)

      const start = fHour * 60 + fMinute
      const end = sHour * 60 + sMinute
      const diff = end - start

      return Math.floor(diff / 60) + ':' + diff % 60
    },
    getClassRow (index) {
      const date = new Date()
      const hour = date.getHours()
      const minute = date.getMinutes()
      const time = hour * 60 + minute

      const [startTimeHour, startTimeMinute] = this.items[index].start_time.split(':').map(Number)
      const [endTimeHour, endTimeMinute] = this.items[index].end_time.split(':').map(Number)

      const startTime = startTimeHour * 60 + startTimeMinute
      const endTime = endTimeHour * 60 + endTimeMinute

      if (time >= startTime && time < endTime) {
        return 'current work'
      }

      if (this.items[index + 1]) {
        const [nextStartTimeHour, nextStartTimeMinute] = this.items[index + 1].start_time.split(':').map(Number)
        const nextStartTime = nextStartTimeHour * 60 + nextStartTimeMinute

        if (time >= endTime && time < nextStartTime) {
          return 'current rest'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#schedule {
  max-width: 400px;
  margin: 20px auto;
  border: 1px solid #e7e7e7;
  background: #fff;
  padding: 40px 60px;
  cursor: context-menu;
  border-radius: 10px;
}

h1 {
  text-align: center;
  padding-bottom: 15px;
  margin: 0 0 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 18px;
  text-align: center;
}

thead {
  border: 1px solid #c1c1c1;
  border-left: 0;
  border-right: 0;
  td {
    line-height: 0;
  }
}

tbody {
  tr {
    &:nth-child(odd) {
      background: #fbfbfb;
    }
  }
  td:first-child {
    font-weight: bold;
  }
}

tr {
  border-bottom: 1px solid #e7e7e7;
  &:last-child {
    border-bottom: 0;
  }
}

td {
  padding: 20px;
}

.current {
  &.work {
    td:nth-child(2), td:nth-child(3) {
      border: 1px solid #688290;
    }
    td:nth-child(2) {
      border-right: 0;
    }
    td:nth-child(3) {
      border-left: 0;
    }
  }
  &.rest {
    td:nth-child(4) {
      border: 1px solid #688290;
    }
  }
}

// Dark

.dark {
  color: rgba(255, 255, 255, .87);
  #schedule {
    background: #333;
    border-color: #5f5f5f;
  }
  h1 {
    color: rgba(255, 255, 255, .87);
  }
  thead {
    border-color: #a2a2a2
  }
  tbody {
    tr {
      &:nth-child(odd) {
        background: #2f2f2f;
      }
    }
  }
  tr {
    border-color: #5f5f5f
  }
  .current {
    &.work {
      td:nth-child(2), td:nth-child(3) {
        border-color: #d29494;
      }
    }
    &.rest {
      td:nth-child(4) {
        border-color: #d29494;
      }
    }
  }
}

</style>
