/*
input: array of non neg nums
output: an array of the non duplicates only, in order
initial thoughts:
use a hashmap to track what elements we've visited
traverse the array, is the curr element in our hashmap?
-if it isnt in map?
 if(!map.has(element))
  - then add element to map
  - push that element result array
-if it is in map?
 continue on in the loop  
once we reach the end of loop return the result array
*/

//test one: input --> [1, 1, 2] output --> [1, 2]

function distinct(a) {// a = [1,1,2]

  let result = []; // initiate to empty []
  let visitedNums = {}; // initiate to empty {}

  for (let i = 0; i < a.length; i++) {// i = 2

    let currElement = a[i]; // current num is 2

    if (!visitedNums[currElement]) { // current num is NOT in map so...
      visitedNums[currElement] = 1; // add to map: {"1":1, "2":1}
      result.push(currElement); // add num to result array [1,2]
    }
  }

  return result; // [1,2]
}
