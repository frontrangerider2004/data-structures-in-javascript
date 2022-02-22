/**
 * Generates a new function that memoizes the supplied function.
 * This is commonly used with recursion to optimize runtime performance.
 * @throws {TypeError} if not passed a function
 * @param {function} fn the function to memoize
 * @return {function} a memoized verions of the original function
 */
function memoizer(fn) {
  if ('function' !== typeof fn) {
    throw new TypeError('Memoizer requires a function pointer');
  }

  const cache = new Map();

  return function(...args) {
    if (cache.has(args)) {
      return cache.get(args);
    }

    const result = fn(...args);
    cache.set(args, result);

    return result;
  };
}

module.exports = memoizer;
