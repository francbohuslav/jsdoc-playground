/**
 * @param {T | T[]} itemOrArray
 * @returns {T[]}
 * @template T
 */
function ensureArray(itemOrArray) {
  return Array.isArray(itemOrArray) ? itemOrArray : [itemOrArray];
}
