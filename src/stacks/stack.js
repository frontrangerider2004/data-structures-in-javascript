/**
 * A basic Stack extending from the standard library's Array
 */
class Stack extends Array {
  /**
   * Get a reference to the item at the tail of the stack (the last item)
   * @return {*} item
   */
  peek() {
    return this.length > 0 ? this[this.length - 1] : undefined;
  }

  /**
   * Computes if the stack is emtpy
   * @return {boolean} true if the stack has not items
   */
  isEmpty() {
    return this.length === 0;
  }
}

module.exports = Stack;
