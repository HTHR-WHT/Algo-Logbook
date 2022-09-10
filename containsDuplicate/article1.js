const containsDuplicate = function(nums) {
//create an empty hashset to keep track of each number
    let numSet = new Set();
//loop over input array of nums
    for(let num of nums) {
//if we already added our current num to the set,
//we have a duplicate so return true
        if(numSet.has(num)) {
            return true;
        }
//the current num is unique so add it to our hashset
        numSet.add(num);
    };
//return false if we reached the end of our loop and didn't find duplicates
    return false;
};