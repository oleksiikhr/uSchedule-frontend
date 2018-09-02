import { addDiffTime } from './scripts/timestamp'

/**
 * Call time, with settings for the "schedule" page.
 *
 * @type {{utc: number, show: {current: boolean, rest: boolean, time: boolean}, time: {start: string, end: string, diff: string}[]}}
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
