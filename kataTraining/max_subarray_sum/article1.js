const maxSequence = (arr) => {
  //initiate a current sum variable to 0
  //and a maximum sum variable to the smallest number possible
  let currSum = 0;
  let maxSum = -Infinity;

  //iterate over the array of integers
  for (let i = 0; i < arr.length; i++) {
    //add the current integer to the current sum
    let currNum = arr[i];
    currSum += currNum;

    //if the current sum is a negative number it won't be the maximum sum, reset the current sum to zero
    if (currSum < 0) {
      currSum = 0;
    }
    //evaluate and reassign the maximum sum variable to the greater of current sum and maximum sum so far
    maxSum = Math.max(currSum, maxSum);
  }

  //if the input array is empty, return current sum which is initiated at zero, else return the maximum sum.
  return arr.length === 0 ? currSum : maxSum;
};
