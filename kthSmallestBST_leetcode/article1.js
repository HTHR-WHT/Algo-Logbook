/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 */

/*NOTES:
-global solution variable
-depth first search using a stack 
-in-order traversal
  -left, root, right
-recursive calls
  -base case of node null check
  -call left
  -process current node
  -call right
-return solution
*/

let solution = [];

const kthSmallest = (root, k) => {
    let stack = [root];
    if(!root) {
        return;
    }
    while(stack.length > 0) {
        let currentNode = stack.pop();
        kthSmallest(currentNode.left);
        solution.push(currentNode.val);
        kthSmallest(currentNode.right);
    }
    return solution[k-1];
};