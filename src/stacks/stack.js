class Stack extends Array {
  peek() {
    return this.length > 0 ? this[this.length - 1] : undefined
  }

  isEmpty() {
    return this.length === 0;
  }
}

module.exports = Stack;