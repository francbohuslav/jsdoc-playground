/**
 * @typedef {Object} Cat
 * @property {function():any} meow
 */

/**
 * Type guard for cat.
 * @param {any} something
 * @return {something is Cat}   <-- YOU ARE LOOKING FOR THIS
 */
function isCat(something) {
  return "meow" in something;
}

/** @type {unknown} */
const animal = "123";

// Property 'meow' does not exist on type 'unknown'
// animal.meow();

if (isCat(animal)) {
  // animal: Cat
  animal.meow();
}
