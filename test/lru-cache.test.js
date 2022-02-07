const LruCache = require('./index.js');

test('it should be defined', () => {
  expect(LruCache).toBeDefined();
});

test('it should create an instance', () => {
  const lruCache = new LruCache(3);
  expect(lruCache).toBeDefined();
});

test('it should create a cache of the supplied capacity', () => {
  const lruCache = new LruCache(3);
  expect(lruCache.capacity).toBe(3);
});

test('it should have a queue property', () => {
  const lruCache = new LruCache(3);
  expect(typeof lruCache.queue).toBe('array');
});

describe('size', () => {
  test('it should have a size property', () => {
    const lruCache = new LruCache(3);
    expect(typeof lruCache.size).toBe('number');
  });

  test('it should return the size', () => {
    expect.assertions(2);

    const lruCache = new LruCache(3);
    expect(lruCache.size).toBe(0);

    lruCache.put('foo', 1);
    expect(lruCache.size).toBe(1);
  });
});

describe('set', () => {
  test('it should have a set function', () => {
    const lruCache = new LruCache(3);
    expect(typeof lruCache.set).toBe('function');
  });

  test('it should set a new key to the value supplied', () => {
    expect.assertions(1);

    const lruCache = new LruCache(3);
    lruCache.put('foo', 5);

    expect(lruCache.get('foo')).toBe(5);
  });

  test('it should update the value for an existsing key', () => {
    expect.assertions(1);

    const lruCache = new LruCache(3);
    lruCache.put('foo', 5);
    lruCache.put('foo', 7);

    expect(lruCache.get('foo')).toBe(7);
  });

  test('it should order the elements from newest to oldest', () => {
    expect.assertions(3);

    const lruCache = new LruCache(3);
    lruCache.set('foo', 1);
    lruCache.set('bar', 2);
    lruCache.set('baz', 3);

    expect(lruCache.capacity).toBe(3);
    expect(lruCache.size).toBe(3);
    expect(lruCache.queue).toEqual([1, 2, 3]);
  });

  test('it should not exceed capacity', () => {
    expect.assertions(3);

    const lruCache = new LruCache(3);
    lruCache.set('foo', 1);
    lruCache.set('bar', 2);
    lruCache.set('baz', 3);
    lruCache.set('quix', 4);

    expect(lruCache.capacity).toBe(3);
    expect(lruCache.size).toBe(3);
  });

  test('it should evict the oldest element when adding a new key-value', () => {
    expect.assertions(3);

    const lruCache = new LruCache(3);
    lruCache.set('foo', 1);
    lruCache.set('bar', 2);
    lruCache.set('baz', 3);
    lruCache.set('quix', 4);

    expect(lruCache.capacity).toBe(3);
    expect(lruCache.size).toBe(3);
    expect(lruCache.queue).toEqual([2, 3, 4]);
  });

  test('it should put the last updated element at the tail', () => {
    expect.assertions(3);

    const lruCache = new LruCache(3);
    lruCache.set('foo', 1);
    lruCache.set('bar', 2);
    lruCache.set('baz', 3);

    // should make foo the newest element
    lruCache.set('foo', 4);

    expect(lruCache.capacity).toBe(3);
    expect(lruCache.size).toBe(3);
    expect(lruCache.queue).toEqual([2, 3, 4]);
  });
});

describe('get', () => {
  test('it should should have a get function', () => {
    const lruCache = new LruCache(3);
    expect(typeof lruCache.get).toBe('function');
  });

  test('it should return the matching value when the key exists', () => {
    expect.assertions(1);

    const lruCache = new LruCache(3);
    lruCache.put('foo', 5);

    expect(lruCache.get('foo')).toBe(5);
  });

  test('it should return undefined for a key that does not exist', () => {
    expect.assertions(1);

    const lruCache = new LruCache(3);

    expect(lruCache.get('foo')).toBe(undefined);
  });

  test('it should put the last accessed element at the tail', () => {
    expect.assertions(3);

    const lruCache = new LruCache(3);
    lruCache.set('foo', 1);
    lruCache.set('bar', 2);
    lruCache.set('baz', 3);

    // should make foo the newest element
    lruCache.get('foo');

    expect(lruCache.capacity).toBe(3);
    expect(lruCache.size).toBe(3);
    expect(lruCache.queue).toEqual([3, 2, 1]);
  });

  test('it should move the middle element to the tail and shift down', () => {
    expect.assertions(3);

    const lruCache = new LruCache(3);
    lruCache.set('foo', 1);
    lruCache.set('bar', 2);
    lruCache.set('baz', 3);

    // should make foo the newest element
    lruCache.get('bar');

    expect(lruCache.capacity).toBe(3);
    expect(lruCache.size).toBe(3);
    expect(lruCache.queue).toEqual([1, 3, 2]);
  });
});
