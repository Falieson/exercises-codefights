// # Try 1 Passess but Too Slow ~4ms on TestE
// function strictlyIncreasingSequence(arr) {
//     var result = true
//     arr.reduce((p, n)=> {
//         if(result) {
//             result = n > p
//         }

//         return n
//     })
//     return result
// }
// function almostIncreasingSequence(sequence) {
//   for(var i=0; i<sequence.length; i+=1) {
//       var smallerArray = [...sequence]
//       smallerArray.splice(i,1)

//       console.log({smallerArray, sequence, i})
//       if(strictlyIncreasingSequence(smallerArray)){
//         return true
//       }
//   }
//   return false
// }

// # Try 2 - FAILS
// function strictlyIncreasingSequence(arr) {
//   return Math.max(...arr) - Math.min(...arr) - arr.length === 0
// }

// # Try 3 - by inspection for lolz, fails on tests C & E
// function almostIncreasingSequence(sequence) {
//   var l = sequence.length

//   var a =sequence[0] 
//   var b =sequence[1] 
//   var c = sequence[Math.round(l/2, 0)]
//   var d = sequence[l-1]
//   var r = l > 3 ? a<b && b<c && c<d : a<b && b<d
//   console.log({l: l>3, a,b,c,d, r: a<b && b<c && c<d})
//   return r
// }

// # Try 4  - FAILS
// Array.prototype.spliced = function() {
//     // Returns the array of values deleted from array.
//     Array.prototype.splice.apply( this, arguments );
//     // Return current (mutated) array array reference.
//     return( this );
// };

// function strictlyIncreasingSequence(arr) {
//     var result = true
//     arr.reduce((p, n)=> {
//         if(result) {
//             result = n > p
//         }

//         return n
//     })
//     return result
// }
// function almostIncreasingSequence(sequence) {
//   for(var i=0; i<sequence.length; i+=1) {
//       // console.log({smallerArray, sequence, i})
//       if(strictlyIncreasingSequence([...sequence].spliced(i,1))){
//         return true
//       }
//   }
//   return false
// }

// # Try 5 - FAILS
// hint from eric_h36
// After some thinking I arrived at this solution:
// if we encounter 2 consecutive elements where the first is larger than the next, then we know at least one of the 2 has to be removed. If another element can be removed then this discrepancy still remains unsolved.
// this means that if the second (smaller) element is larger than the element previous to these consecutive elements, then that is strictly the better element to keep. Otherwise we take the first element because the second is too small. At this point, we know all previous elements are in proper order and this is only still a valid list if the rest of the elements are strictly increasing.

// function almostIncreasingSequence(sequence) {
//   var lessers = 0;
//   var min = 0;
//   sequence.forEach((v, i)=> {
//     if(i>0){
//       min = v > min ? v : min
//     }
//     var len = sequence.length
//     var isLast = i === len-1
//     var vn = sequence[i+1]
//     var lesser = v>=vn || min>=vn
//     if(!isLast && lesser){
//       lessers+=1
//     }

//     console.log({i, v, vn, min, sequence, lesser: v>vn, lessers, isLast })
//   })

//   return lessers < 2
// }

// # Try 6  - FAILS
// function almostIncreasingSequence(sequence) {
//   // you cannot have a strictly increasing sequence if
//   // i+1 is less than i
//   // therefore, if 1 mistake is allowed, then lets test that
//   // this fails no more than one time
  
//   var failures = 0
//   var min = 0
//   var len = sequence.length
//   sequence.forEach((v, i) => {
//       if(v>min){ min = v}
      
//       if(i!== len-1){
//         var v = sequence[i]
//         var vn = sequence[i+1]
//         var t = v>=vn || v<min
//         if(t){
//           failures += 1
//           min = min === v && i-1>=0? sequence[i-1] :0
//         }

//         console.log({failures, v, vn, t, min })
//       }
//   })
  
    
//   return failures < 2
// }


// # Try 7 - FAILS
// function almostIncreasingSequence(sequence) {
//   // you cannot have a strictly increasing sequence if
//   // i+1 is less than i
//   // therefore, if 1 mistake is allowed, then lets test that
//   // this fails no more than one time
  
//   var failures = 0
//   var min = 0
//   var len = sequence.length
//   var last = (i)=> i === len-1
//   sequence.forEach((v, i) => {
//     if(!last(i)){
//       var v = sequence[i]
//       var vn = sequence[i-1]
//       var testFails = vn && v<=vn
//       if(testFails){
//         failures += 1
//         min = sequence[i-1] || min
//       } else {
//         min = v
//       }
      
//       console.log({failures, v, vn, testFails, min })
//     }
//   })
  
//   return failures < 2
// }


// Solution by [swbullis](github.com/swbullis/)
function almostIncreasingSequence(sequence) {
    var copy = [...(new Set(sequence))];
    const seqlen = sequence.length;

    // Check for more than 2 Duplicates
    if (copy.length + 1 < seqlen){
        return false;
    }
    // Check if last Item Fails test
    var failures=0;
    if (sequence[seqlen-1] < sequence[seqlen-2]){
        sequence.pop();
        failures = 1;
    }

    for(index = seqlen; index > 0 ; index--){
        // Get the Lowest of the Next Two Items and Compare
        if(sequence[index-1] > Math.min(
            ...sequence.slice(index, seqlen - (seqlen-index)+2)
        )){
            failures++;
            if (failures > 1) {
                return false;
            }
        }
    }

    return true;
}

// /* TESTS
var testA = [1,2,3]
var testB = [1,3,2,1]
var testC = [1,3,2]
var testD = [1,1,1,2,3]
var testE = [0,-2,5,6]
var testF = [1, 3, 2, 1]
var testG = [1, 2, 1, 2]
var testH = [10, 1, 2, 3, 4, 5]

var timers = true;

console.log("Test A: ", almostIncreasingSequence(testA) === true )
console.log("Test B: ", almostIncreasingSequence(testB) === false )
console.log("Test C: ", almostIncreasingSequence(testC) === true )
console.log("Test D: ", almostIncreasingSequence(testD) === false )
// timers && console.time("Test E")
console.log("Test E: ", almostIncreasingSequence(testE) === true )
// timers && console.timeEnd("Test E") // Try#3 0.106ms (vs Try #1 ~4ms !!)
// timers && console.time("Test F")
console.log("Test F: ", almostIncreasingSequence(testF) === false )
// timers && console.timeEnd("Test F") // Try#3 0.037ms 
console.log("Test G: ", almostIncreasingSequence(testG) === false )
console.log("Test H: ", almostIncreasingSequence(testH) === true )
