'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst (str) {
  return str.substr(2, str.length-2);
}

function cutLast (str) {
  return str.substr(0, str.length-2);
}

function cutFirstLast (str) {
  return cutLast(cutFirst(str));
}

//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutFirstLast.length, 1);
assert.deepStrictEqual(cutFirst('abc'), 'c');
assert.deepStrictEqual(cutLast('abc'), 'a');
assert.deepStrictEqual(cutFirstLast('abcde'), 'c');
assert.deepStrictEqual(cutFirstLast('abc'), '');
// End of tests */
