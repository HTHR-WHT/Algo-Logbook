class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  //APPROACH: 
  //use FAST and SLOW pointers
  //when the fast pointer, which moves twice as fast as the slow pointer
  //gets to the end (ex: fast.next is null or fast is null),
  //The slow pointer is currently at the middle
  
  
  const find_middle_of_linked_list = (head) => {
  //create fast & slow pointers
    let slow = head,
        fast = head;
  //find the end of the list and move pointers along
    while(fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  //if while loop is done we have found the middle with our slow pointer
    return slow;
  };
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  
  console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)
  
  head.next.next.next.next.next = new Node(6)
  console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)
  
  head.next.next.next.next.next.next = new Node(7)
  console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`)
  