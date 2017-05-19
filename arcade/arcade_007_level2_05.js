/* matricElementsSum | CODEFIGHTS ARCADE Level 2

  RESULTS: Passed first try, but the optimum and 
    preferred answers are way better
*/

/*
Exercise
======

After becoming famous, CodeBots decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms, each cell containing an integer - the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots.

Help the bots calculate the total price of all the rooms that are suitable for them.


Example
------
For

```
matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
```
the output should be `matrixElementsSum(matrix) = 9.`

Here's the rooms matrix with unsuitable rooms marked with 'x':
```
[[x, 1, 1, 2], 
 [x, 5, x, x], 
 [x, x, x, x]]
```
Thus, the answer is `1 + 5 + 1 + 2 = 9.`


Input/Output
------
[time limit] 4000ms (js)
[input] array.array.integer matrix

2-dimensional array of integers representing a rectangular matrix of the building.

Guaranteed constraints:
1 ≤ matrix.length ≤ 5,
1 ≤ matrix[i].length ≤ 5,
0 ≤ matrix[i][j] ≤ 10.

[output] integer
*/

function matrixElementsSum(matrix) {
  // Matrix is like [row[], row[], row[]]
  // Ghost columns are then row[i] for matrix[n>j] or...
  // matrix = [[0, 1, 1, 2], 
  //         [0, 5, 0, 0], 
  //         [2, 0, 3, 3]]
  // 
  // [0,0] ... [2,0]
  // [1,2] ... [2,2]
  // [1,3] ... [2,3]
  //       ... [2,1]

  const valueForPosition = (x,y) => matrix[x][y]
  const flatten = (arr) => Array.prototype.concat(...arr)
  const sumArray = (arr) => arr.reduce((a, b) => a + b, 0);

  const resultMatrix = [...matrix]
  const zeroOutColumnStartingAtRow = (x,y) => {
    console.log("hello! running me again! ", {x, y})
    for(i=x; i<resultMatrix.length; i+=1){
      resultMatrix[i][y] = 0
    }
  }  

  for(x=0; x<matrix.length; x+=1){
    const row = matrix[x]
    for(y=0; y<row.length; y+=1){
      if(valueForPosition(x,y) === 0){
        zeroOutColumnStartingAtRow(x,y)
      }
    }
  }

  return sumArray(flatten(resultMatrix))
}


const test = [[0, 1, 1, 2], 
              [0, 5, 0, 0], 
              [2, 0, 3, 3]]

// console.log("Test> ", matrixElementsSum(test) === 9) | Passed first time!


// Optimum Solution
//这个还行
// https://codefights.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr/solutions/zSmfeRyuE2X65ause
// function matrixElementsSum(matrix) {
//   for(var r=0,j=0;j<matrix[0].length;j++){
//       for(var i=0;i<matrix.length;i++){
//         if(matrix[i][j]===0) break
//         else r+=matrix[i][j]
//       }
//   }
//   return r
// }

// Preferred Solution
// By zkeeton5
// https://codefights.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr/solutions/JBQg4rsoXXK2PEo54
// function matrixElementsSum(matrix) {
//     var total = 0;
    
//     // Navigate each column of rooms
//     // i = current column, j = current floor in column
//     for (var i = 0; i < matrix[0].length; i++) {
            
//         for (var j = 0; j < matrix.length; j++) {
//             if (matrix[j][i] === 0) {
//                 // This room is haunted, so we don't care about the rooms below it. 
//                 // Continue to the next column of rooms
//                 break;
//             }
//             total += matrix[j][i];
//         }
        
//     }
    
//     return total;
// }
