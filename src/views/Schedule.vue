<template>
  <div id="schedule" :class="theme">
    <h1>Расписание звонков</h1>
    <table>
      <thead>
      <tr>
        <td><i class="material-icons">format_list_numbered</i></td>
        <td><i class="material-icons">alarm</i></td>
        <td><i class="material-icons">alarm_off</i></td>
        <td v-if="schedule.show.rest"><i class="material-icons">restaurant</i></td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in schedule.time" :key="index" :class="getClassRow(index)">
        <td>{{ index + 1 }}</td>
        <td class="f">{{ item.start }}</td>
        <td class="f">{{ item.end }}</td>
        <td class="s" v-if="schedule.show.rest">{{ compareTime(index) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { schedule } from '../config'

export default {
  data () {
    return {
      schedule
    }
  },
  computed: {
    theme () {
      return this.$store.state.template.theme
    }
  },
  methods: {
    compareTime (index) {
      if (!this.schedule.time[index + 1]) {
        return ''
      }

      const [fHour, fMinute] = this.schedule.time[index].end.split(':').map(Number)
      const [sHour, sMinute] = this.schedule.time[index + 1].start.split(':').map(Number)

      const diff = (sHour * 60 + sMinute) - (fHour * 60 + fMinute)

      return Math.floor(diff / 60) + ':' + diff % 60
    },
    getClassRow (index) {
      if (!this.schedule.show.current) {
        return
      }

      const date = new Date()
      const time = date.getHours() * 60 + date.getMinutes()

      const [startTimeHour, startTimeMinute] = this.schedule.time[index].start.split(':').map(Number)
      const [endTimeHour, endTimeMinute] = this.schedule.time[index].end.split(':').map(Number)

      const startTime = startTimeHour * 60 + startTimeMinute
      const endTime = endTimeHour * 60 + endTimeMinute

      if (time >= startTime && time < endTime) {
        return 'current work'
      }

      if (this.schedule.time[index + 1]) {
        const [nextStartTimeHour, nextStartTimeMinute] = this.schedule.time[index + 1].start.split(':').map(Number)
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
    .f {
      color: #0288d1;
    }
  }
  &.rest {
    .s {
      color: #0288d1;
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
      .f {
        color: #d27575;
      }
    }
    &.rest {
      .s {
        color: #d27575;
      }
    }
  }
}

</style>
