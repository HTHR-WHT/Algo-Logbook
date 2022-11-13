function oddOrEven(array) {
    //calculate the sum of the number elements
    //use 0 as an initial value in the reducer to account
    //for an empty array as input
    let totalSum = array.reduce((prev, curr) => prev + curr, 0);
    //evaluate the remainder of the total sum to determine
    //if it is even or odd
    return totalSum % 2 === 0 ? "even" : "odd";
}
 