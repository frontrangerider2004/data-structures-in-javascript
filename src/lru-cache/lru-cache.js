/**
 * Implementation of LRU Cache in es6.
 */
class LruCache {
  /**
   * Create a new instance
   * @param {number} capacity size of the cache
   */
  constructor(capacity) {
    this.capacity = capacity;
    this._map = new Map(); // guarantees ordering
    // TODO: make this a linked list this._queue = [];
  }

  /**
   * Returns how many elements are in the LRU Cache
   * @return {number}
   */
  get size() {
    return this._map.size;
  }

  /**
   * Returns an array of the values in their LRU order
   * @return {array}
   */
  get queue() {
    return this._queue;
  }

  /**
   * Update the value of the key if the key exists. Otherwise add the
   * key-value * pair to the cache as the newest element. If the number
   * of keys exceeds the capacity the least recently used entry will be evicted.
   * @param {*} key
   * @param {*} value
   */
  set(key, value) {
    // TODO:
  }

  /**
   * Return the value of the key if it exists otherwise undefined if it cannot
   * be found.
   * @param {*} key
   * @return {*|undefined} the value for this key or undefined if it does not
   * exist
   */
  get(key) {
    // TODO:
  }
}

module.exports = LruCache;
