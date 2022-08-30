function fiboEvenSum(n) {

    //in the case our input "n" is less than 2, let's return 0
    if(n <= 1) {
      return 0;
    }

    //create variables for our sum and our pointers
    //start our fib sequence as follows: 0(prev), 1(curr) 
    let sum = 0, prev = 0, curr = 1, next;

    //only evaluate numbers that do not exceed input "n"
    while(curr <= n) {

    //we only want to add even numbers to our sum
    //so let's check if our current number in the fib sequence
    //is even using the modulo operator to evaluate the remainder    
      if(curr % 2 === 0) {
        sum += curr;
      }

    //now we iterate by swapping variables:
    //the next fib num is the result of adding 
    //the previous two nums in the fib sequence so far
      next = curr + prev;

    //nudge our pointers "forward" a variable
    //and head back to our while loop condition
      prev = curr;
      curr = next;
    }

    return sum;
  }