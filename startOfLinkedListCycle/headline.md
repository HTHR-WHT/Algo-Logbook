# #100DaysOfCode Challenge - day 4

## Grokking Course (educative.io) - Fast & Slow Pointers - Start of Linked List Cycle (med)

**Prompt:**

Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

```
class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}
```
```
head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
```   

> Example 1:
>
>> head.next.next.next.next.next.next = head.next.next <br>
>> console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`) <br>
> Output:  LinkedList cycle start: 3

> Example 2:
>
>> head.next.next.next.next.next.next = head.next.next.next
>> console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
> Output:  LinkedList cycle start: 4

> Example 3:
>
>> head.next.next.next.next.next.next = head
>> console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
> Output:  LinkedList cycle start: 1