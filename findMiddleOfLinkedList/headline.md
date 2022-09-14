# #100DaysOfCode Challenge - day 5

## Grokking Course (educative.io) - Fast & Slow Pointers - Find Middle Of Linked List (easy)

**Prompt:**

Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, return the second middle node.

> Example 1:
> 
> Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
> Output: 3

> Example 2:
> 
> Input: Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
> Output: 4

> Example 3:
> 
> Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
> Output: 4

```
class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}
```