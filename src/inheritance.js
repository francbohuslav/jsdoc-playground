/**
 * @typedef {Object} Animal
 * @property {number} countOfLegs
 */

/**
 * @typedef {Animal} Dog
 * @property {() => void} bark
 */

/** @type {Dog} */
const dog = {};
dog.countOfLegs = 4;
// Unfortunately in VS code and tsc: Property 'bark' does not exist on type 'Animal'
// dog.bark();

// Currently known solution is
/**
 * @typedef {Object} DogOnly
 * @property {() => any} bark
 */

/** @typedef {Animal & DogOnly} Dog2 */

/** @type {Dog2} */
const dog2 = {};
dog2.countOfLegs = 4;
dog2.bark();

export {};
