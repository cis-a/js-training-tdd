'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
function whisper (astr) {
  let whisp = '*';
  return whisp.concat(astr.toLowerCase(), whisp);
}
//* Begin of tests
const assert = require('assert');


assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.deepStrictEqual(whisper('ABC'), '*abc*');
// End of tests */
