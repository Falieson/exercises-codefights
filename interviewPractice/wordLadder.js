/*
# wordLadder
Given two words, beginWord and endWord, and a wordList of approved words, find the length of the shortest transformation sequence from beginWord to endWord such that:

Only one letter can be changed at a time
Each transformed word must exist in the wordList.
Return the length of the shortest transformation sequence, or 0 if no such transformation sequence exists.

Note: beginWord does not count as a transformed word. You can assume that beginWord and endWord are not empty and are not the same.

# Example

For beginWord = "hit", endWord = "cog", and wordList = ["hot", "dot", "dog", "lot", "log", "cog"], the output should be
wordLadder(beginWord, endWord, wordList) = 5.

The shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog" with a length of 5.

# Input/Output

[time limit] 4000ms (js)
[input] string beginWord

## Guaranteed constraints:
1 ≤ beginWord.length ≤ 5.

[input] string endWord

## Guaranteed constraints:
endWord.length = beginWord.length.

[input] array.string wordList

An array containing all of the approved words. All words in the array are the same length and contain only lowercase English letters. You can assume that there are no duplicates in wordList.

## Guaranteed constraints:
2 ≤ wordList.length ≤ 600,
wordList[i].length = beginWord.length.

[output] integer

An integer representing the length of the shortest transformation sequence from beginWord to endWord using only words from wordList as described above.

# Citation [https://codefights.com/interview-practice/companies/Ny2Sn8kGM6oJmnDSg/1](https://codefights.com/interview-practice/companies/Ny2Sn8kGM6oJmnDSg/1)
*/

function isOnlyOneLetterMutation(str1, str2){
  var diffs = 0, max = 1
  var maxDiffs = (curr) => curr === max
  for(var i=0; i<=str1.length; i+=1){
    if(str1[i] !== str2[i]){
      diffs += 1
      if(diffs>max){
        return false
      }
    }
  }
  return diffs === max
}

// var apple1 = "apple"
// var apple2 = "appne" // true
// var apple2 = "adpne" // false
// console.log( isOnlyOneLetterMutation(apple1, apple2) )

function findNextLetter(str1, str2) {

}
var begin="hit"
var list=["hot"] // returns "hot"


// function matchLetterFromWordInList(attempt, goal, wordList) {
//   for(var i = 0; i<= attempt.length; i+=1){
//     if(attempt[i] !== goal[i]){
//
//     }
//   }
// }
// function wordLadder(beginWord, endWord, wordList) {
//   var attempt = wordList[0]
//   var mutations = []
//   while(attempt !== endWord){
//     var matchResult = matchLetterFromWordInList(attempt, endWord, wordList)
//     mutations.push(matchResult)
//     console.log ({ attempt, matchResult, mutations })
//     attempt = matchResult
//   }
// }
// var begin = "hit";
// var end = "cog";
// var list = ["hot", "dot", "dog", "lot", "log", "cog"] //  "hit" -> "hot" -> "dot" -> "dog" -> "cog" with a length of 5
// console.log ( wordLadder(begin, end, list) )


// var parts = [...endWord]
// var lastTry = wordList[0]
// for(var i=0; i<wordList.length; i+=1){
//   var option = wordList[i]
//   for(var j=option; j>-option.length; j=-1){
//     var letter = option[j]
//     if(letter === parts[j]){
//       lastTry = option
//     }
//   }
// }
