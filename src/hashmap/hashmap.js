/**
 * Basic implementation of a Java-like HashMap from first principles.
 * This does not use the standard libary's Map class or a basic ES object
 * since this is intended to showcase the underlying implementation.
 */
class HashMap {
  /**
   * Create a new instance
   */
  constructor() {
    this._table = [];
  }

  /**
   * Convert the string key into an integer hashcode
   * NOTE: This was sourced from a Stack Overflow article that also referenced
   * this algorithm from Java @see {@link http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/}
   * and @see {@link https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript}
   * @param {string} key unique string that maps to the value
   * @return {number} 32bit integer hash
   */
  __hash(key) {
    let hash = 0;

    if (this.length === 0) return hash;

    for (const char of key) {
      const code = this.charCodeAt(char);
      hash = ((hash << 5) - hash) + code;
      hash |= 0; // Convert to 32bit integer
    }

    return hash;
  }

  /**
   * Insert a unique string key and unique value bound to that key.
   * @param {string} key unique string that maps to the value
   * @param {*} value data for the node
   * @return {HashMap} reference to this map for chaining
   */
  set(key, value) {
    // TODO: insert the item
    return this;
  }

  /**
   * Lookup the value for a unique string key
   * @param {string} key unique string that maps to the value
   */
  get(key) {
    // TODO: return the value
  }
}

module.exports = HashMap;
