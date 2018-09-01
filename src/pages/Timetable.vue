<template>
  <!--TODO mobile design-->
  <div id="timetable">
    <div class="timetable__header">
      <h1>Расписание звонков</h1>
      <span class="timetable__header__now">{{ time }}</span>
    </div>
    <table class="timetable__content">
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
import { getUtcOffset } from '../scripts/timestamp'
import { pad2 } from '../scripts/methods'
import { schedule } from '../config'

export default {
  data () {
    return {
      schedule,
      date: getUtcOffset(schedule.utc)
    }
  },
  created () {
    if (schedule.show.time) {
      setInterval(() => {
        this.date = getUtcOffset(schedule.utc)
      }, 1000)
    }
  },
  computed: {
    time () {
      return pad2(this.date.getHours()) + ':' + pad2(this.date.getMinutes()) + ':' + pad2(this.date.getSeconds())
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
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1.2rem;
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
      background-color: #fbfbfb;
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

#timetable {
  max-width: 450px;
  margin: 30px auto;
  border: 1px solid #e7e7e7;
  background: #fff;
  padding: 40px;
  cursor: context-menu;
  border-radius: 10px;
}

.timetable__header {
  margin-bottom: 5px;
  text-align: center;
  h1 {
    margin: 0;
    padding-bottom: 15px;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
}

.timetable__header__now {
  display: block;
  font-weight: bold;
  margin-bottom: 20px;
}

.current {
  &.work .f  {
    color: $red;
  }
  &.rest .s {
    color: $red;
  }
}
</style>
