const min = (...nums) => {
    let smallest = Infinity;
    for(let num of nums) {
      smallest = Math.min(smallest, num);
    }
    return smallest;
  };
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10
  let numbers = [3, -12, 14, 57, 0, 101, -2];
  console.log(min(...numbers));
  // → -12 