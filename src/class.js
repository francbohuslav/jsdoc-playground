class Person {
  /**
   * @param {string} name
   * @param {number} [age]
   */
  constructor(name, age = 33) {

    /**
     * @type {string}
     * @private
     */
    this._name = name;

     /**
     * @type {number}
     * @private
     */
    this._age = age;
  }
}
