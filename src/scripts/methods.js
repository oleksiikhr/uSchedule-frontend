/**
 * Prepending 0 to single-digit numbers.
 *
 * @param  {Number}  num
 * @return {String}
 */
export function pad2 (num) {
  return (num < 10 ? '0' : '') + num
}
