//arrayToList function

/* steps
-create a list variable and give it the value of null
-start building the list from the last element in the array
-reassign the list to have a value of the current element
-reassign the list to have a rest pointing to the list
 we have built so far
-return the newly built list
*/
const arrayToList = (array) => {
    let newList = null;

    for(let i = array.length - 1; i >= 0; i--) {
        newList = { value: array[i], rest: newList };
    };

    return newList;
};

//listToArray function

/* steps
-function takes in a list and returns an array of the values
-create an array variable to hold the list values
-create a node variable that has the list as a value
-while the current node is not null
-push the current node value into the array
-reassign the value of node to the curr node's rest pointer value
-return the array of list values
*/

const listToArray = (list) => {
    let listValueArray = [];
    let node = list;
    while(node) {
        listValueArray.push(node.value);
        node = node.rest;    
    }
    return listValueArray;
};


//console.log(arrayToList([10, 20]));
//--> {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
//--> [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
//--> {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
//--> 20
