// Your code here.
// This was my study buddy's solution.
// I like how clean and clear his code is.

const isEven = (num) => {
    let currNum = Math.abs(num);
    if(currNum === 0) return true;
    if(currNum === 1) return false;
    
    return isEven(currNum - 2);
};
  
  
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
console.log(isEven(-10));
// → true