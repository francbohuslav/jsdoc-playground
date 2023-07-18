/**
 * @typedef {Object} IAnimal
 * @property {number} countOfLegs
 * @property {() => void} speak
 */

/**
 * @abstract
 */
class Animal {
  /**
   * @protected
   */
  constructor() {}

  /**
   * Optional method
   * @returns {boolean}
   */
  hasTail() {
    return false;
  }

  printCountOfLegs() {
    // @ts-ignore Thare is no way to define property but make it abstract
    console.log(this.countOfLegs);
  }

  doSpeak() {
    // @ts-ignore Thare is no way to define method but make it abstract
    this.speak();
  }
}

/**
 * @implements {IAnimal}
 */
class Dog extends Animal {
  constructor() {
    super();
    this.countOfLegs = 4;
  }

  hasTail() {
    return true;
  }

  speak() {
    console.log("Woof");
  }
}

// @ts-ignore Animal is abstract, cannot be contructed directly
new Animal();
