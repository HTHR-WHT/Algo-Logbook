function largestPrimeFactor(number) {
    
    //create a variable for tracking the current possible prime number
    //let's start at two, the smallest possible prime number
    let currPossiblePrime = 2;

    //create a variable for tracking the largest prime factor
    //found so far. we'll start at 2, the smallest prime number.
    let maxPrimeFactor = 2;
  
    //as long as the currPossiblePrime is less than or equal to
    //the number we're currently evaluating...
    while(currPossiblePrime <= number) {

    //check to see if the number divided by the currPossiblePrime 
    //has NO remainder, and is a factor of the number
      if(number % currPossiblePrime == 0) { 
    
    //he number is evenly divisable by the currPossiblePrime which means
    //the currPossiblePrime is a factor of the number we are evaluating!
    //let's set the maxPrimeFactor variable to the currPossiblePrime
        maxPrimeFactor = currPossiblePrime;

    //we reduce the number we're evaluating, to isolate the paired factor 
    //for our currPossiblePrime factor to see if this paired factor 
    //is possibly a prime and perhaps larger than the currPossiblePrime!
    //let's head back to our while loop condition to evaluate our "new" paired factor number
        number = number / currPossiblePrime;
      } 

    //we HAVE a remainder from our "if" statement, so the currPossiblePrime is not a factor!
    //let's increment the currPossiblePrime variable and head back to our while loop condition 
    //to repeat our steps until we find a higher (true prime number) currPossiblePrime
      else currPossiblePrime++;
    }

    //once our currPossiblePrime is larger than our reduced "paired factor" number
    //we've found the largest Prime factor of our original number.  Phew!
    return maxPrimeFactor;
  }
  
  console.log(largestPrimeFactor(253));