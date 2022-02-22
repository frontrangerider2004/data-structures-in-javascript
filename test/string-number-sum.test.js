const stringNumberSum = require('../src/stacks/string-number-sum');

test('largeNumberSum is a function', () => {
  expect(typeof stringNumberSum).toEqual('function');
});

test('it returns undefined when both a and b are undefined', () => {
  expect(stringNumberSum()).toEqual(undefined);
});

test('it returns a when only a is defined', ()=> {
  expect(stringNumberSum('15', undefined)).toEqual('15');
});

test('it returns b when only b is defined', ()=> {
  expect(stringNumberSum(undefined, '7')).toEqual('7');
});

test('it returns undefined when both a and b are zero length', ()=> {
  expect(stringNumberSum('', '')).toEqual(undefined);
});

test('it returns a when b is zero length', ()=> {
  expect(stringNumberSum('6', '')).toEqual('6');
});

test('it returns b when a is zero length', ()=> {
  expect(stringNumberSum('', '9')).toEqual('9');
});

test('1 + 2 = 3', ()=> {
  expect(stringNumberSum('1', '2')).toEqual('3');
});

test('12 + 34 = 46', ()=> {
  expect(stringNumberSum('12', '34')).toEqual('46');
});

test('57 + 75 = 132', ()=> {
  expect(stringNumberSum('57', '75')).toEqual('132');
});

test('99 + 99 = 198', ()=> {
  expect(stringNumberSum('99', '99')).toEqual('198');
});
