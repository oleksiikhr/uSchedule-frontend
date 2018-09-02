/**
 * Add a new diff attribute to existing objects.
 *
 * @param  {Array}  times
 * @return {Array}
 */
function addDiffTime (times) {
  const len = times.length

  for (let i = 0; i < len - 1; i++) {
    const [fHour, fMinute] = times[i].end.split(':').map(Number)
    const [sHour, sMinute] = times[i + 1].start.split(':').map(Number)
    const diff = (sHour * 60 + sMinute) - (fHour * 60 + fMinute)

    times[i].diff = Math.floor(diff / 60) + ':' + diff % 60
  }

  return times
}

/**
 * Call time, with settings for the "schedule" page.
 *
 * @type {{utc: number, show: {current: boolean, rest: boolean, time: boolean}, time: *[]}}
 */
export const schedule = {
  utc: 3,
  show: {
    current: true,
    rest: true,
    time: true
  },
  time: addDiffTime([
    { start: '8:20', end: '9:40' },
    { start: '9:55', end: '11:15' },
    { start: '11:50', end: '13:10' },
    { start: '13:30', end: '14:50' },
    { start: '15:00', end: '16:20' },
    { start: '16:30', end: '17:50' },
    { start: '18:00', end: '19:20' }
  ])
}
