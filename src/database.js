import { addDiffTime } from './scripts/timestamp'
import Dexie from 'dexie'

const NAME_DB = 'uSchedule'
const db = new Dexie(NAME_DB)

db.version(1).stores({
  timetable: '&number, start, end',
  config: '&key, value'
})

export async function getTimetable () {
  const arr = await db.timetable.orderBy('number').toArray()

  return addDiffTime(arr)
}

export async function getConfigUtc () {
  const utc = await db.config.where({ key: 'utc' }).first()

  return utc.value
}

export default db
