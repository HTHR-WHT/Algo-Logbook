/* 
replit at 
https://replit.com/@HTHR-WHT/ejsalisttestcode#index.js 
*/

//study seconds
//build a singly linked list from an array of numbers
const arrayToList = (arr) => { 
    let newList = null;
    for(let i = arr.length - 1; i >= 0; i--) {
        newList = {value: arr[i], rest: newList };
    }
    return newList;
};

let testArray = [1, 2, 3];
let longerTestArray = [1, 2, 3, 4, 5, 6, 7, 8];

//console.log("first func:", arrayToList(testArray));
//testArray--> { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

//a func that produces an array from a list

const listToArray = (list) => {
    let newArray = [];
    let currNode = list;
    while(currNode) {
        newArray.push(currNode.value);
        currNode = currNode.rest;
    }
    return newArray;
};

let testList = arrayToList(testArray);
let longerTestList = arrayToList(longerTestArray);

//console.log("second func:", listToArray(testList));

//prepend helper func

const prepend = (element, list) => {
    return {value: element, rest: list};
};

//console.log("third func:", prepend(8, arrayToList(testArray)));

//nth func
//returns element(value) at idx num
//or undefined

const nth = (list, num) => {
    let listArray = listToArray(list);
    if(listArray[num]) {
        return listArray[num];
    }
    return undefined;
};

//console.log("fourth func:", nth(testList, 1));
//console.log("fourth func:", nth(testList, 4));
//console.log("4th:", nth(longerTestList, 4));
//console.log("4th:", nth(longerTestList, 11));

//recursive nth
//use the input num as a "counter" to decrement with each recursive call, it's our base case
//the counter keeps track of how many recursive calls are made
//once the num is decremented to zero return the value

const recursiveNth = (list, num) => {
    
    if(!list) {
        return undefined;
    } else if(num === 0) {
        return list.value;
    } else {
        return recursiveNth(list.rest, num - 1);
    }
};

//console.log("fifth func:", recursiveNth(testList, 1));
//console.log("fifth func:", recursiveNth(testList, 4));
//console.log("4th:", recursiveNth(longerTestList, 7));
//console.log("4th:", recursiveNth(longerTestList, 13));
