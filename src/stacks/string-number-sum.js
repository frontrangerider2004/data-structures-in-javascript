/**
 * Computes the sum of two large numbers represented as string
 * @param {string} a large number as a string
 * @param {string} b large number as a string
 * @return {string} the sum of a and b
 *
 * @example
 * '1' + '2' = '3'
 * '11' + '22' = '33'
 * '15' +
 */
function largeNumberSum(a = '', b = '') {
  if (a.length === 0 && b.length === 0) {
    return undefined;
  } else if (a.length === 0) {
    return b;
  } else if (b.length === 0) {
    return a;
  }

  // convert these into 'stacks'
  const results = [];
  const aDigits = a.split('');
  const bDigits = b.split('');

  // treat this like a stack since es6 arrays stack-like
  let aDigit = aDigits.pop();
  let bDigit = bDigits.pop();
  let carry = 0;

  // we can use truthyness since string '0' is truthy and
  // if carry = 0 that's in integer which is falsey so we don't continue
  while (aDigit || bDigit || carry) {
    // ensure we handle any leftover digits
    let sum = carry;

    // have to parseInt because a and b are strings
    sum = aDigit ? sum + parseInt(aDigit) : sum;
    sum = bDigit ? sum + parseInt(bDigit) : sum;

    let result = sum;
    if (sum > 9) {
      // need to carry the 10s and record the 1s place
      result = sum - 10;
      carry = 1;
    } else {
      // reset carry otherwise loop will continue infinitely
      carry = 0;
    }

    // cast back to string and insert from left to right like a queue
    // since we are computing from right to left
    results.unshift(String(result));

    // change the loop conditions so we don't infinitely loop
    aDigit = aDigits.pop();
    bDigit = bDigits.pop();
  }

  return results.join('');
}

module.exports = largeNumberSum;
