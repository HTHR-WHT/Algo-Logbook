# #???DaysOfCode Challenge

## Eloquent JavaScript - 4.3 A List

**Prompt:**
-Write a function `arrayToList` that builds up a `list` structure like the one shown (EJ pg 79) when given `[1, 2, 3]` as argument. 

-Also write a `listToArray` function that produces an array from a list. 

-Then add a helper function `prepend`, which takes an element and a list and creates a new list that adds the element to the front of the input list,...

-and `nth`, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or `undefined` when there is no such element. 

-If you haven't already, also write a recursive version of `nth`.

> Example 1:
> 
> Input: `arrayToList([10, 20])`
>  
> Output: `{value: 10, rest: {value: 20, rest: null}}`
>
> Example 2:
> 
> Input: `listToArray(arrayToList([10, 20, 30]))`
>  
> Output: `[10, 20, 30]`
>
> Example 3:
> 
> Input: `prepend(10, prepend(20, null))`
>
> Output: `{value: 10, rest: {value: 20, rest: null}}`
>
> Example 4:
>
> Input: `nth(arrayToList([10, 20, 30]), 1)`
>
> Output: `20`
>

