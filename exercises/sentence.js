'use strict';

/*
 * Create a `sentence` function that takes an array of strings
 * and return a string of all the element separated by a space
 *
 */

// Your code:
function sentence (arr) {
 let sen = arr[0];
  for (let i=1; i<arr.length; i++) {
    sen = sen.concat(' ', arr[i]);
  }
  return sen;
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof sentence, 'function');
assert.strictEqual(sentence.length, 1);
assert.deepStrictEqual(sentence([ 'a', 'b', 'c' ]), 'a b c');
assert.deepStrictEqual(sentence([ 'a', '1', 'c' ]), 'a 1 c');
assert.deepStrictEqual(sentence([ 'a', '1', 'c', 'd', 'e', 'f' ]), 'a 1 c d e f');
assert.deepStrictEqual(sentence([ 'wol.lol', 'lo,lol' ]), 'wol.lol lo,lol');
// End of tests */
