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
