/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
//Initial thoughts:
//create a frequency map to track occurances of pos, neg, and zero?
//OR use counter variables?
//find ratio of each pos,neg,zero by dividing by arr length
//print ratio values in order with 6 decimals

function plusMinus(arr) {
    //find number of elements in array to determine ratio of num frequency
    let num = arr.length;
    //create counter variables for each num type we want to track
    let posNums = 0,
        negNums = 0,
        zeros = 0;
    //iterate over array to evaluate each number element
    for(let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
    //evaluate type of currNum, and increment appropriate counter variable
        if(currNum === 0) {
            zeros++;
        } else {
            currNum > 0 ? posNums++ : negNums++;
        }
    }
    //create vars to store each num type ratio
    let posRatio = posNums/num;
    let negRatio = negNums/num;
    let zeroRatio = zeros/num;
    //print each ratio to a 6 place decimal number
    console.log(posRatio.toFixed(6));
    console.log(negRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));    
}
