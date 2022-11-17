/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

//Initial thoughts:
//create a new Array with length 100 and fill 0s
//iterate over input array, using a forEach rather than map,
//because we don't need to return an array from our iterative function
//use the value of the curr element for the index to increment the result array element 

function countingSort(arr) {
    //create an array filled with 100 zeros
    let number_frequency_result = Array(100).fill(0);
    //iterate over the input array and use the value of the element
    //to find the appropriate index to increment of the frequency array
    arr.forEach((frequency_index) => {
        number_frequency_result[frequency_index] += 1;
    });
    return number_frequency_result;
}