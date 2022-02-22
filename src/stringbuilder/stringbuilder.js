/**
 * This file shows off several ways to measure performance in Node.js
 */


const {performance, PerformanceObserver} = require('perf_hooks');

/**
 * Test a stringbuilder performance
 * @return {string}
 */
function stringBuilder() {
  const stringBuilder = [];
  stringBuilder.push('a');
  stringBuilder.push('b');
  stringBuilder.push('c');
  stringBuilder.push('d');
  stringBuilder.push('e');
  stringBuilder.push('f');
  stringBuilder.push('g');
  stringBuilder.push('h');

  return stringBuilder.join('');
}

/**
 * test basic string concat performance
 * @return {string}
 */
function stringConcat() {
  const s = '';
  s + 'a';
  s + 'b';
  s + 'c';
  s + 'd';
  s + 'e';
  s + 'f';
  s + 'g';
  s + 'h';

  return s;
}

const sbWrapper = performance.timerify(stringBuilder);
const concatWrapper = performance.timerify(stringConcat);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries());
  obs.disconnect();
});

obs.observe({entryTypes: ['function']});

sbWrapper();
concatWrapper();


// Browser and Node supported older methods, but much simpler
console.time('stringBuilder');
stringBuilder();
console.timeEnd('stringBuilder');

console.time('stringConcat');
stringConcat();
console.timeEnd('stringConcat');
