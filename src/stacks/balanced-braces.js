const Stack = require('./stack');

/**
 * Determines if a line of code has matching open/close braces. Statements have
 * matching syntax for (), {}, [].
 * @param {string} string a line of code with braces to verify is balanced
 * @throws {Error} if the braces are not balanced
 */
function balancedBraces(string) {
  const stack = new Stack();

  for (const char of string) {
    if (char === '[' || char === '{' || char === '(') {
      stack.push(char);
    } else if (char === ']' || char === '}' || char === ')') {
      if (char === ']') {
        if (stack.peek() === '[') {
          stack.pop();
        } else {
          throw new Error('[balancedBraces] string is missing [');
        }
      } else if (char === '}') {
        if (stack.peek() === '{') {
          stack.pop();
        } else {
          throw new Error('[balancedBraces] string is missing {');
        }
      } else if (char === ')') {
        if (stack.peek() === '(') {
          stack.pop();
        } else {
          throw new Error('[balancedBraces] string is missing \(');
        }
      }
    }
  }

  if (!stack.isEmpty()) {
    throw new Error(
        `[balancedBraces] string is missing corresponding ${stack.peek()}`,
    );
  }
}

module.exports = balancedBraces;
