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

//console.log(arrayToList([10, 20]));
//--> {value: 10, rest: {value: 20, rest: null}}
