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

//prepend helper function

/* steps
-function takes an element and a list as arguments
-creates a new list that adds the element to the front of the input list
-returns the new list
 */

const prepend = (element, list) => {
  return {value: element, rest: list}; 
};

//nth function

/* steps
-function takes a list and a number as arguments
-create a counter to track where we are as we traverse list to find element position
-returns the element at position, or undefined if not found
 */

const nth = (list, nodePos) => {
  let nodeCount = 0;
  let node = list;
  while(node) {
    if(nodePos === nodeCount) {
        return node.value;
    } else {
        nodeCount++;
        node = node.rest;
    }
  }
  return undefined;
};


//console.log(arrayToList([10, 20]));
//--> {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
//--> [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
//--> {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
//--> 20
