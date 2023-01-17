//study seconds
//build a singly linked list from an array of numbers
const arrayToList = (arr) => { 
    let newList = null;
    for(let i = arr.length - 1; i >= 0; i--) {
        newList = {value: arr[i], rest: newList };
    }
    return newList;
};

//let testArray = [1, 2, 3];

//console.log(arrayToList(testArray));
//--> { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

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

//prepend helper func

const prepend = (element, list) => {
    return newList = {value: element, rest: list};
};

//nth func
//returns element(value) at idx num
//or undefined

const nth = (list, num) => {
    
};
