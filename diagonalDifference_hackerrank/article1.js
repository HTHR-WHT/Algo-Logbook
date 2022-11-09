/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
//Initial Thoughts:
//logged input: arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
//return the DIFFERENCE of the diagonal sums
//L to R sum = arr[0][0] + arr[1][1] + arr[2][2] 
///pattern!! all indices are equal
//R to L sum = arr[0][2] + arr[1][1] + arr[2][0] 
//pattern!! all indices equal arr length-1
//create two counter variables to track sum of these elements?
//optimization? use a hash map somehow??? lol...junior dev mesmerized by hashmap

function diagonalDifference(arr) {
    //invoke counter variables for diagonal sums
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    //outer arr loop
    for(let i = 0; i < arr.length; i++) { 
        //inner arr loop
        for(let j = 0; j < arr.length; j++) { 
            let currNum = arr[i][j];
            //if indices are equal add currNum to left diagonal sum
            if(i === j) {
                leftDiagonalSum += currNum;
            }
            //if indices are equal to the arr length - 1, add currNum to right diagonal sum
            if(i + j === arr.length - 1) {
                rightDiagonalSum += currNum;
            }
        }
    }
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}