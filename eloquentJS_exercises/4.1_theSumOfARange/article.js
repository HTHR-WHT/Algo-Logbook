//evaluate whether step is a positive or negative integer based on start and end values
//default step values of 1 or -1 will only be assigned IF no step value is passed as an argument.
const range = (start, end, step = start < end ? 1 : -1) => {
    let result = [];
    //determine proper comparison operators for execution loop condition (middle condition)
    if(step > 0) {
      for(let i = start; i <= end; i += step) result.push(i);
    } else {
      for(let i = start; i >= end; i += step) result.push(i);
    }
    return result;
  };
 //iterate over each value of array and accumulate total 
  const sum = (nums) => {
    let total = 0;
    for(let num of nums) {
      total += num;
    }
    return total;
  };
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]
  console.log(sum(range(1, 10)));
  // → 55