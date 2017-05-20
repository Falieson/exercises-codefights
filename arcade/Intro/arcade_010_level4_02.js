/* commonCharacterCount | CODEFIGHTS ARCADE | Level 3

  # RESULTS: I prefer my answer to the top voted one. I thought of using Math.max() but,
  the top voted solution uses multiple loops (Math.max, inputArray.map, inputArray.filter),
  while my solution only uses 1 loop.
*/

/* == EXERCICES
  Given two strings, find the number of common characters between them.


  Example
  ------
  For s1 = "aabcc" and s2 = "adcaa", the output should be
  commonCharacterCount(s1, s2) = 3.

  Strings have 3 common characters - 2 "a"s and 1 "c".


  Input/Output
  ------
  [time limit] 4000ms (js)
  [input] string s1

  A string consisting of lowercase latin letters a-z.

  Guaranteed constraints:
  1 ≤ s1.length ≤ 15.

  [input] string s2

  A string consisting of lowercase latin letters a-z.

  Guaranteed constraints:
  1 ≤ s2.length ≤ 15.

  [output] integer
*/

// # Try 1 - Passed first attempt!
function commonCharacterCount(s1, s2) {
  var counts = {} // {a: {s1: 0, s2: 1}}
  var increaseCount = (letter, arg) => {
    if(counts[letter]){
      var count = counts[letter][arg] || 0
      counts[letter][arg] = count + 1
    } else {
      counts[letter] = {}
      counts[letter][arg] = 1
    }
  }

  s1.split('').forEach(l => {
    increaseCount(l, 'c1')
  })
  s2.split('').forEach(l => {
    increaseCount(l, 'c2')
  })

  var commonChars = 0
  Object.keys(counts).forEach(c => {
    // var {s1, s2} = counts[c]
    var c1 = counts[c].c1
    var c2 = counts[c].c2
    
    if(c1 && c2){
      commonChars += c1 < c2? c1 : c2
    }
  })

  return commonChars
}

// === TEST
var s1 = "aabcc"
var s2 = "adcaa"

console.log("TEST> ", commonCharacterCount(s1, s2)===3)


// Top voted solution by ???
// function commonCharacterCount(s1, s2) {
// 
// }

