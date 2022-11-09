//optimized solution, track i & j in one loop!
//i address increases by one each loop iteration
//j address decreases by one each loop iteration
/*
example of 3x3 matrix
i  1  j
0 i/j 2
j  1  i
example of 4x4 matrix
i 1 2 j
0 i j 3
0 j i 3
j 1 2 i
*/

function diagonalDifference(arr) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    let j = arr.length -1;

    for(let i = 0; i < arr.length; i++, j--) {
        leftDiagonalSum += arr[i][i];
        rightDiagonalSum += arr[i][j];
    }
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}