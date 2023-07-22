/**
 * @typedef {Object} TMessageDto
 * @property {string} id Unique identifier
 * @property {string} label Some summary of message
 * @property {"IN" | "OUT"} direction
 * @property {boolean} archived True if message is archived
 * @property {number} version Version number
 * @property {string | undefined} author
 * @property {Record<string, any>} params Custom parameters
 */

/**
 * @param {string} author
 */
function printAuthor(author) {
  console.log(author);
}

