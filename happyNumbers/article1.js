//APPROACH: 
//use FAST and SLOW pointers to:
//find an "unhappy number" cycle (any calculation that never reaches 1)
//this happens if both pointers are the same number at the same time
//otherwise we will be in a "happy number" cycle that repeats with 1

const find_happy_number = function(num) {
//start both pointers at the same location, or in this case-- number
    let slow = num;
    let fast = num;

//run a while loop until... 
    while(true) {

//start our square sum helper function on the slow pointer location, 
//and the fast pointer location, which is two steps ahead!
      slow = find_square_sum(slow);
      fast = find_square_sum(find_square_sum(fast));

//we've found a condition that signifies an "unhappy number" cycle.
//be sure to BREAK that loop!
      if(slow === fast) {
        break;
      }
    }
//we've found a condition that signifies a "happy number" cycle.
    if(slow === 1){
      return true;
    } else return false;
};

//SQUARE SUM HELPER FUNC:
//this runs our calculation and returns the final sum for the current num
//in our find_happy_number function, the slow & fast variables will take on
//the assignment of this return statement, aka our sum
//this is how we will evaluate whether we have found a "happy" or "unhappy" cycle

const find_square_sum = (num) => {
//create a sum accumulator
    let sum = 0;
//as long as our number is greater than 0, we continue calculations of while loop
    while(num > 0) {
//grab the left-most digit using the modulo operator
      let digit = num % 10;
//square the digit and add it to our sum accumulator
      sum += digit * digit;
//reassign num to the next left-most digit, and repeat 
      num = Math.floor(num / 10);
    }
    return sum;
}
  
  
  console.log(`${find_happy_number(23)}`)
  console.log(`${find_happy_number(12)}`)