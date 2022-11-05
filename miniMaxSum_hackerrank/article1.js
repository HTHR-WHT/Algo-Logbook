/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
//Initial thoughts:
//sort arr
//create a min, max, and sum variable
//similar to the sliding window approach


function miniMaxSum(arr) {
    //sort arr in ascending order
    arr.sort((a,b) => a - b);
    let currSum = 0,
        min,
        max;
    for(let i = 0; i < arr.length; i++) {
    //sum first four integers for min sum
        currSum += arr[i];
    
        if(i === arr.length - 2) {
        //add fourth integer and set min sum
            min = currSum;
        //subtract first integer from sum
            currSum -= arr[0];
        }
    //finish loop to add last integer and set max sum   
        max = currSum;
    }
    console.log(min, max);
}