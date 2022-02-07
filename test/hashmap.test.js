const HashMap = require('../src/hashmap/hashmap.js');

let hashmap;
beforeEach(()=> {
  hashmap = new HashMap();
});

test('should be defined', ()=> {
  expect(hashmap).toBeDefined();
});

test('should create an instance', () => {
  expect(hashmap).toBeDefined();
});

describe('get', () => {
  test('should return the value matching the key', () => {
    hashmap.set('a', 'foo');
    expect(hashmap.get('a')).toBe('foo');
  });
});

describe('set', () => {
  test('should return the map instance', () => {
    expect(hashmap.set('a', 'foo')).toBe(hashmap);
  });
});

describe('__hash', () => {
  test('should return 97 for lower-case a', () => {
    expect(hashmap.__hash('a')).toBe(97);
  });
  test('should return 3104 for lower-case aa', () => {
    expect(hashmap.__hash('aa')).toBe(3104);
  });
  test('should return zero if the key is empty string', () => {
    expect(hashmap.__hash('')).toBe(0);
  });
});
