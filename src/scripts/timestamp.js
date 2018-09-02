/**
 * Calculate local time in a different UTC offset.
 *
 * @param  {Number}  offsetUtc
 * @return {Date}
 */
export function getUtcOffset (offsetUtc) {
  const d = new Date()
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000)

  return new Date(utc + (3600000 * offsetUtc))
}

/**
 * Add a new diff attribute to existing array of objects.
 *
 * @param  {{start: string, end: string}[]}  times
 * @return {{start: string, end: string, diff: string}[]}
 */
export function addDiffTime (times) {
  const len = times.length

  for (let i = 0; i < len - 1; i++) {
    const [fHour, fMinute] = times[i].end.split(':').map(Number)
    const [sHour, sMinute] = times[i + 1].start.split(':').map(Number)
    const diff = (sHour * 60 + sMinute) - (fHour * 60 + fMinute)

    times[i].diff = Math.floor(diff / 60) + ':' + diff % 60
  }

  return times
}
