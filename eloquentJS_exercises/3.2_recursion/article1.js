// Your code here.

const isEven = (num) => {
  let currNum = Math.abs(num - 2);
  if(num === 0) {
  	return true;
  }
  else if(num === 1) {
  	return false;
  }
  else {
  	return isEven(currNum);
  }
};


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
console.log(isEven(-10));
// → true