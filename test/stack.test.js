const Stack = require('../src/stacks/stack');

let stack;
beforeEach(()=> {
  stack = new Stack();
});

test('should be defined', ()=> {
  expect(Stack).toBeDefined();
});

test('should create an instance', () => {
  expect(stack).toBeDefined();
});

test('should have a peek function', () => {
  expect('function' === typeof stack.peek).toBe(true);
});

test('should have a isEmpty function', () => {
  expect('function' === typeof stack.isEmpty).toBe(true);
});

describe('isEmpty', () => {
  test('should return true when zero items in the stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('should return false when more than zero items in the stack', () => {
    stack.push('foo');
    expect(stack.isEmpty()).toBe(false);
  });
});

describe('peek', () => {
  test('should return undefined when zero items in the stack', () => {
    expect(stack.peek()).toBeUndefined();
  });

  test('should return the last item added', () => {
    stack.push('foo');
    stack.push('bar');
    expect(stack.peek()).toBe('bar');
  });

  test('should not change the length or remove anything', () => {
    stack.push('foo');
    stack.push('bar');
    stack.peek();
    expect(stack.length).toBe(2);
  });
});
