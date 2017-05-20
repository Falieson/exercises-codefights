/* All Longest Strings | CODEFIGHTS ARCADE | Level 3

  # RESULTS: I prefer my answer to the top voted one. I thought of using Math.max() but,
  the top voted solution uses multiple loops (Math.max, inputArray.map, inputArray.filter),
  while my solution only uses 1 loop.
*/

/* == EXERCICES
  Given an array of strings, return another array containing all of its longest strings.

  Example
  ------
  For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
  allLongestStrings(inputArray) = ["aba", "vcd", "aba"].


  Input/Output
  ------
  [time limit] 4000ms (js)
  [input] array.string inputArray

  A non-empty array.

  Guaranteed constraints:
  1 ≤ inputArray.length ≤ 10,
  1 ≤ inputArray[i].length ≤ 10.

  [output] array.string

  Array of the longest strings, stored in the same order as in the inputArray.

*/

// # Try 1 - Passed first attempt!
function allLongestStrings(inputArray) {
  var outputArray = []
  var minLength = 0

  inputArray.forEach(str => {
    if(str.length===minLength){
      outputArray.push(str)
    } else if(str.length>minLength){
      outputArray=[str]
      minLength = str.length
    }
  })
  
  return outputArray
}


// Top voted solution by xym
// https://codefights.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL/solutions/73vJ8j8bEwRp9SGPr
function allLongestStrings(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}
