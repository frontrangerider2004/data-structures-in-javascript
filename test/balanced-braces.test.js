const balancedBraces = require('../src/stacks/balanced-braces');

test('should be defined', ()=> {
  expect(balancedBraces).toBeDefined()
});

test('should be a function', ()=> {
  expect('function' === typeof balancedBraces).toBe(true);
});

test('should complete without error for balanced {}', () => {
  expect.assertions(3)
  expect(() => balancedBraces('{abcd}')).not.toThrow()
  expect(() => balancedBraces('{{abcd}}')).not.toThrow()
  expect(() => balancedBraces('{a{bc}d}')).not.toThrow()
})

test('should complete without error for balanced []', () => {
  expect.assertions(3)
  expect(() => balancedBraces('[abcd]')).not.toThrow()
  expect(() => balancedBraces('[[abcd]]')).not.toThrow()
  expect(() => balancedBraces('[a[bc]d]')).not.toThrow()
})

test('should complete without error for balanced ()', () => {
  expect.assertions(3)
  expect(() => balancedBraces('(abcd)')).not.toThrow()
  expect(() => balancedBraces('((abcd))')).not.toThrow()
  expect(() => balancedBraces('(a(bc)d)')).not.toThrow()
})

test('should complete without error when no braces detected', () => {
  expect(() => balancedBraces('abcd')).not.toThrow()
})

test('should throw when only an open {', () => {
  expect(() => balancedBraces('{abcd')).toThrow()
})
test('should throw when only an open [', () => {
  expect(() => balancedBraces('[abcd')).toThrow()
})
test('should throw when only an open (', () => {
  expect(() => balancedBraces('(abcd')).toThrow()
})

test('should throw when only a close }', () => {
  expect(() => balancedBraces('abcd}')).toThrow()
})
test('should throw when only a close ]', () => {
  expect(() => balancedBraces('abcd}')).toThrow()
})
test('should throw when only a close )', () => {
  expect(() => balancedBraces('abcd}')).toThrow()
})

test('should throw when close } out number open {', () => {
  expect(() => balancedBraces('{abcd}}')).toThrow()
})
test('should throw when close ] out number open [', () => {
  expect(() => balancedBraces('[abcd]]')).toThrow()
})
test('should throw when close ) out number open (', () => {
  expect(() => balancedBraces('(abcd))')).toThrow()
})

test('should throw when open { out number close }', () => {
  expect(() => balancedBraces('{{abcd}')).toThrow()
})
test('should throw when open [ out number close ]', () => {
  expect(() => balancedBraces('[[abcd]')).toThrow()
})
test('should throw when open ( out number close )', () => {
  expect(() => balancedBraces('((abcd)')).toThrow()
})

