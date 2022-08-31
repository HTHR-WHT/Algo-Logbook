function largestPalindromeProduct(n) {
    //FCC comment: To get the maximum n digit number, + operator type castes String to Number type
    let max = +[...Array(n)].reduce((a, c) => (a += 9), "");
  
    //FCC comment: Next we get minimum n digit number from the max
    let min = (max + 1) / 10;
  
    //FCC comment: To store the result
    let largest = -1;
  
    //FCC comment: Starting the loop from max to min
    for (let i = max; i >= min; i--) {
      //FCC comment: Another loop
      for (let j = max; j >= min; j--) {
        //FCC comment: Getting the product
        let num = i * j;
  
        //FCC comment: Reversing the number
        let numReverse = [...String(num)].reverse().join("");
  
        //FCC comment: Checking for palindromic number
        if (num == numReverse) {
          //FCC comment: Check if max and break the loop
          largest = Math.max(num, largest);
          break;
        }
      }
    }
  
    //FCC comment: Returning largest found
    return largest;
  }

  console.log(largestPalindromeProduct(3));