# #100DaysOfCode Challenge - day 4

## Grokking Course (educative.io) - Fast & Slow Pointers - Start of Linked List Cycle (med)

**Prompt:**

Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

`class Node { <br>
    constructor(value, next=null){ <br>
      this.value = value; <br>
      this.next = next; <br>
    } <br>
  }`

  `head = new Node(1) <br>
  head.next = new Node(2) <br>
  head.next.next = new Node(3) <br>
  head.next.next.next = new Node(4) <br>
  head.next.next.next.next = new Node(5) <br>
  head.next.next.next.next.next = new Node(6)`
   

> Example 1: <br>
  `head.next.next.next.next.next.next = head.next.next <br>
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)` <br>
> Output:  LinkedList cycle start: 3

> Example 2: <br>
  `head.next.next.next.next.next.next = head.next.next.next <br>
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)` <br>
> Output:  LinkedList cycle start: 4

> Example 3: <br>
  `head.next.next.next.next.next.next = head <br>
  console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)` <br>
> Output:  LinkedList cycle start: 1