function multiplesOf3and5(number) {
    //sum accumulator
    let sum = 0;
    //iterate starting at 3 because it's the lowest number divisible by 3
    for (let i = 3; i < number; i++) {
      //use the modulo operator to look at remainders
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  multiplesOf3and5(1000);
  