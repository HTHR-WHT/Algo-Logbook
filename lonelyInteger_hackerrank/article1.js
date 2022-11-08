/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
//Initial thoughts:
//create a frequency map
//evaluate all elements
//return the map key(element) with a value of 1

function lonelyinteger(a) {
    //invoke an empty object to use as a frequency map
    let frequencyMap = {};
    //loop to evaluate all nums in the array
    for(let i = 0; i < a.length; i++) {
        let currElement = a[i];
        //if the current number is "new"
        if(!(currElement in frequencyMap)) {
            //create a key for the current number and set it's value to 0
            frequencyMap[currElement] = 0;
        }
        //increment the current number value by one
        frequencyMap[currElement] += 1;
    }
    //now that we have filled our frequency map
    //let's find the number key that has a value of 1 and return it!
    for(const num in frequencyMap) {
        if(frequencyMap[num] === 1) {
            return num;
        }
    }
}
