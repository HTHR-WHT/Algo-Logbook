function fiboEvenSum(n) {

    //in the case our input "n" is less than 2, let's return 0
    if(n <= 1) {
      return 0;
    }

    //create variables for our sum and our pointers
    let sum = 0, prev = 0, curr = 1, next;

    //only evaluate numbers that do not exceed input "n"
    while(curr <= n) {

    //check if our current number in the fib sequence is even
    //using the modulo operator to evaluate the remainder    
      if(curr % 2 === 0) {
        sum += curr;
      }

    //iterate by swapping variables:
      next = curr + prev;
      prev = curr;
      curr = next;
    }
    
    return sum;
  }