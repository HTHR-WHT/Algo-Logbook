//return a NEW array with elements in reverse order

const reverseArray = (arr) => {
    //creating a new array to accumulate reversed elements
    let result = [];

    //the 'unshift' array method adds the current element to the beginning of the array
    for(let val of arr) {
      result.unshift(val);
    }
    return result;
  };

//use a two pointer approach with a temporary variable and while loop  
const reverseArrayInPlace = (arr) => {

//starting our pointers at the first index and last index
let left = 0;
let right = arr.length -1;
//temporary pointer to hold on to values before we reassign
let temp;

//move through the input array until we find the middle
while(left < right) {

    //store the value of the left pointer before we reassign it with the right pointer value
    temp = arr[left];
    //now it's safe to reassign the left pointer value
    arr[left] = arr[right];
    //reassign the right pointer value with the previously stored left value held by temp 
    arr[right] = temp;
    //move the left pointer forward
    left++;
    //move the right pointer backward
    right--;
}
return arr;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]