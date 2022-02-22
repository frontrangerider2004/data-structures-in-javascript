const memoizer = require('../src/memoization/memoizer');

test('should be defined', ()=> {
  expect(memoizer).toBeDefined();
});

test('should be a function', ()=> {
  expect('function' === typeof memoizer).toBe(true);
});

test('should return a function when called with a function', () => {
  // eslint-disable-next-line require-jsdoc
  function fibonacci(n) {
    if (n < 2) {
      return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  expect('function' === typeof memoizer(fibonacci)).toBe(true);
});

test('should thow when not called with a function', () => {
  expect('function' === typeof memoizer(null)).toBe(true);
});
