const largeNumberSum = require('./index');

test('largeNumberSum is a function', () => {
  expect(typeof largeNumberSum).toEqual('function');
});

test('it returns undefined when both a and b are undefined', () => {
  expect(largeNumberSum()).toEqual(undefined);
});

test('it returns a when only a is defined', ()=> {
  expect(largeNumberSum('15', undefined)).toEqual('15');
});

test('it returns b when only b is defined', ()=> {
  expect(largeNumberSum(undefined, '7')).toEqual('7');
});

test('it returns undefined when both a and b are zero length', ()=> {
  expect(largeNumberSum('', '')).toEqual(undefined);
});

test('it returns a when b is zero length', ()=> {
  expect(largeNumberSum('6', '')).toEqual('6');
});

test('it returns b when a is zero length', ()=> {
  expect(largeNumberSum('', '9')).toEqual('9');
});

test('1 + 2 = 3', ()=> {
  expect(largeNumberSum('1', '2')).toEqual('3');
});

test('12 + 34 = 46', ()=> {
  expect(largeNumberSum('12', '34')).toEqual('46');
});

test('57 + 75 = 132', ()=> {
  expect(largeNumberSum('57', '75')).toEqual('132');
});
