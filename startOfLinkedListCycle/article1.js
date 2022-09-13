//Node Class
class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  //APPROACH
  //use FAST and SLOW pointers to:
  //1. determine if this is a linked list with a cycle
  //2. find cycle length to move a pointer ahead this many nodes
  //-->create helper function: findCycleLength, params: slow pointer
  //3. find start of the cycle by using found cycle length and two pointers
  //-->create helper function:  findCycleStartNode, params: head node and cycle length
  
  
  const find_cycle_start = function(head){
//start both our slow and fast pointers at the head node
    let slow = head;
    let fast = head;
//initiate our cycle length variable to zero
    let cycleLength = 0;
//iterate over the linked list
//as long as our fast pointer and it's next node aren't null
//we haven't reached the end of the list, so there might be a cycle...
    while(fast !== null && fast.next !== null) {
//move fast pointer two nodes ahead, and slow pointer one pointer ahead
      fast = fast.next.next;
      slow = slow.next
//if the fast pointer ever catches up with the slow pointer we have a cycle!
      if(slow === fast) {
//time to find the cycle length and break out of our linked list cycle.
//pass the slow pointer to our helper function because it moves one node at a time, unlike the fast pointer.
//this is ideal for counting the nodes and finding the exact cycle length.
        cycleLength = findCycleLength(slow);
        break;
      }
    }
//now that we have the cycle length, we can find the start
//pass the head node and the cycle length to our helper function
    return findCycleStart(head, cycleLength);
  };

//CYCLE LENGTH HELPER FUNC:
//when we call this function the slow pointer is already within the cycle of our linked list
  const findCycleLength = (slow) => {
//create a current node variable, starting at the slow node pointer location
//we need to compare the slow pointer location to this new current node location
    let currNode = slow;
//create a length counter variable
    let length = 0;
//run a while loop until we break out of it
    while(true) {
//move the current node forward one spot and increment the length each time
      currNode = currNode.next;
      length += 1;
//once the current node has come back to the same location as the slow node pointer
//we have found a full cycle length, so break out of that potentially infinite loop!
      if(currNode === slow) {
        break;
      }
    }
//return the cycle length so we can use it to find the starting node of the cycle
    return length;
  };


//CYCLE START HELPER FUNC:
//now that we have the cycle length, we can find the beginning of the cycle 
  const findCycleStart = (head, cycleLength) => {
//create two pointers 
    let firstPointer = head;
    let secondPointer = head;
//move the second pointer "cycle length" nodes ahead 
    while(cycleLength > 0) {
      secondPointer = secondPointer.next;
      cycleLength -= 1;
    }
//now move both pointers ahead by one until they catch up (equal) to each other
    while(firstPointer !== secondPointer) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }
//once the second pointer has made a full cycle, starting at "cycle length" nodes ahead
//the first pointer will be at the starting node of the cycle, so we found it, let's return it
    return firstPointer;
  };
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  head.next.next.next.next.next = new Node(6)
  
  head.next.next.next.next.next.next = head.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = head.next.next.next
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  
  head.next.next.next.next.next.next = head
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
  