/*
 * @param {number} n
 * @return {string[]}
 */

//Initial thoughts:
//create a loop starting at n and working down to 1
//first check if the num is divisible by BOTH 3 & 5
//then run through 3 and 5 checks
//if not divisible, add to string array

 var fizzBuzz = function(n) {
    let answer = [];
    for(let i = n; i > 0; i--){
        if(i % 3 === 0 && i % 5 === 0) {
            answer.unshift("FizzBuzz");
        } else if(i % 3 === 0) {
            answer.unshift("Fizz");
        } else if(i % 5 === 0) {
            answer.unshift("Buzz");
        } else {
            answer.unshift(i.toString());
        }
    }
    return answer;
};