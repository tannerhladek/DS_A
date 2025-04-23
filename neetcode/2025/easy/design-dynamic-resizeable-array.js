class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.array = new Array(this.capacity).fill(0);
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.array[i];
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    this.array[i] = n;
    return;
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.array[this.length] = n;
    this.length = this.length + 1;
    return;
  }

  /**
   * @returns {number}
   */
  popback() {
    if (this.length > 0) {
      this.length = this.length - 1;
    }
    return this.array[this.length];
  }

  /**
   * @returns {void}
   */
  resize() {
    this.capacity = this.capacity * 2;
    const newArray = new Array(this.capacity).fill(0);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
    return;
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.length;
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity;
  }
}
