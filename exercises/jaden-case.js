'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase (str) {
  var arr = str.split(" ");
  let build = '';
  for (let word of arr) {
    build+=word.substr(0,1).toUpperCase()+word.substr(1, word.length-1).toLowerCase()+' ';
    }
return build.substr(0, build.length-1);
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.deepStrictEqual(jadenCase('how are you ?'), 'How Are You ?');
// End of tests */
