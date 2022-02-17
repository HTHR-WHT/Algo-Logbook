// Build a Shopping List

// Using HTML and vanilla JavaScript, make a shopping list. Users should be able to enter the item into a text field and press a button to add the item to the list. The item should then appear on the list. Each item on the list should have a button to delete this list item. After pressing add item button the input field should clear and the cursor returns to the input field (focus). See example of complete Shopping List below.

/*Approach:
-first set up basic html, with body, header, input form, add button, unordered list with delete button for each list item
-give each element an appropriate id
-access the html elements using document property 
-add event listener to add button, 
--when button is clicked (addButton.addEventListener('click', makeItem))
-makeItem is a function that checks if input value is not an empty string 
--create a new list item with the value of the input as the item
--reset the input field to an empty string
-figure out how to refocus the cursor, probably a property?
*/

//could use .querySelector because there is only one input
const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

function makeItem() {
  //evaluate the value of input field, console.log(input.value)
  if(input.value !== '') {
    // document.createElement to make list item, then appendChild
    const newItem = document.createElement('li');
    
    // newItem.textContent = input.value;
    itemList.appendChild(newItem).textContent = input.value + ' ';
    
    //handle delete button
    const deleteButton = document.createElement('button');
    newItem.appendChild(deleteButton).textContent = 'Delete Item';
    
    deleteButton.addEventListener('click', () => {
      itemList.removeChild(newItem);
      input.focus();
    })
    
    //clear input field
    input.value = '';
    input.focus();
  }
}

addButton.addEventListener('click', makeItem);


