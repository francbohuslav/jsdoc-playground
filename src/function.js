/**
 * @param {string} text
 * @param {any} count
 */
function repeatStr(text, count) {
  return text.repeat(count);
}

/**
 * @param {string} text
 * @param {number} count
 * @returns {string}
 */
const repeat2 = (text, count) => text.repeat(count);

// Declaration as type

/**
 * @callback ValidationEventHandler
 * @param {ValidationEvent} event
 * @returns {ValidationResult | undefined}
 */

/**
 * @typedef {Object} ValidationEvent
 * @property {{ form: { value: any }; name: string; value: any}} data
 */

/**
 * @typedef {Object} ValidationResult
 * @property {string} code
 * @property {React.ReactNode} message
 * @property {"success" | "warning" | "error"} feedback
 */

/**
 * @type {ValidationEventHandler}
 */
function validateTextInput(event) {
  if (!event.data.value) {
    return {
      code: "required",
      feedback: "error",
      message: "Value must be filled",
    };
  }
}

// Optional properties

/**
 * @param {number} year Year is required
 * @param {number} month Month is required
 * @param {number} day Day is required
 * @param {number | undefined} hours Hours is required, but "undefined" value is accepted
 * @param {number=} minutes "=" char means that minutes are optional
 * @param {number=} seconds "=" char means that seconds are optional
 * @returns {Date}
 */
function makeDate(year, month, day, hours, minutes = 0, seconds = 0) {
  return new Date(year, month - 1, day, hours ?? 0, minutes, seconds);
}

makeDate(2023, 1, 1, undefined);
