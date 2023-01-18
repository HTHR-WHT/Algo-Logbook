//This is the Eloquent JS textbook solution
//The comments are notes for study purposes
//This statement from Frank Tan on Stackoverflow makes sense to me:
//"Deep equality" means..."equal keys and equal values."
//https://stackoverflow.com/questions/38400594/javascript-deep-comparison

function deepEqual(a, b) {
    //check if the two values we want to compare are equal. The strict equality operator inpects data types as well.
    if (a === b) return true;
    
    //a & b are NOT equal, so use the logical OR operator to check if any of the operands are true, and return false
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
    
    //Now we start our "deep comparison" create an array of each object's keys for comparison
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    //first, if the objects don't have the same number of keys, they can't be equal, return false
    if (keysA.length != keysB.length) return false;
  
    //now check if both objects have the same keys
    //and, recursively, if the object values are strictly equal
    //if any of these checks are false, return false
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    
    return true;
  }

/*TESTS
 let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
 */