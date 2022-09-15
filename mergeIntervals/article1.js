class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

//APPROACH:
//use merge intervals pattern with "a" interval & "b" interval
//there are four interval scenarios:
// 1. they don't overlap
// 2. some of b overlaps with a --> ex: [a.start, b.end]
// 3. a fully overlaps b --> ex: [a.start, a.end]
// 4. b fully overlaps a, with same start time --> ex: [a.start, b.end]

const merge = (intervals) => {
  //if there are less than two intervals, return intervals
  if (intervals.length < 2) {
    return intervals;
  }
  //SORT the intervals on start values
  intervals.sort((a, b) => a.start - b.start);
  //create a merged interval accumulator
  let mergedInts = [];
  //create a start and end variable to look at the first sorted interval
  let start = intervals[0].start;
  let end = intervals[0].end;
  //loop over the remaining intervals, starting at next interval
  for (let i = 1; i < intervals.length; i++) {
    let nextInt = intervals[i];
    //if the next interval's start is less than or equal to the first intervals end value, they overlap
    if (nextInt.start <= end) {
      //shift our end variable to be the max of the first interval end and next interval end
      end = Math.max(currInt.end, end);
    } else {
      //the intervals don't overlap,
      //create & push the first interval into our merged interval array
      mergedInts.push(new Interval(start, end));
      //reset first interval values to the next interval values, and continue loop
      start = currInt.start;
      end = currInt.end;
    }
  }
  //done with loop, push the last interval values into the array and return it
  mergedInts.push(new Interval(start, end));
  return mergedInts;
};

//TEST CASES from grokking course:
merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(5, 9),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);

merged_intervals = merge([
  new Interval(1, 4),
  new Interval(2, 6),
  new Interval(3, 5),
]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`);
