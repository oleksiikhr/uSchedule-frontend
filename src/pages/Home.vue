<template>
  <div>Home page</div>
</template>

<script>
import db from '../database'

export default {
  async mounted () {
    // await db.timetable.add({ number: 1, start: '8:20', end: '9:40' })
    // await db.timetable.add({ number: 2, start: '9:55', end: '11:15' })
    // await db.timetable.add({ number: 3, start: '11:50', end: '13:10' })
    // await db.timetable.add({ number: 4, start: '13:30', end: '14:50' })
    // await db.timetable.add({ number: 5, start: '15:00', end: '16:20' })
    // await db.timetable.add({ number: 6, start: '16:30', end: '17:50' })
    // await db.timetable.add({ number: 7, start: '18:00', end: '19:20' })

    await db.config.put({ key: 'utc', value: 3 })
    await db.config.put({ key: 'schedule', value: '2a' })
  }
}
</script>
