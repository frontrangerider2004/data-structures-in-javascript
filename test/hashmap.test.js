const HashMap = require('../src/hashmap/hashmap.js');

let hashmap;
beforeEach(()=> {
  hashmap = new HashMap();
});

test('should be defined', ()=> {
  expect(Stack).toBeDefined();
})

test('should create an instance', () => {
  expect(hashmap).toBeDefined();
})