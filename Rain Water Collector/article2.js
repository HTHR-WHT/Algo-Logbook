//APPROACH:
//keep track of the max area
//two pointer problem, beg & end
//calc max area at each iteration
//min height of the two pointers x (right - left index) = area
//set the max area so far
//we want the max height for each pointer
//move the minimum pointer along
//as long as the left pointer is less than the right pointer

const maxArea = (height) => {
  let maxAreaSoFar = -Infinity;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let minHeight = Math.min(height[left], height[right]);
    let currArea = minHeight * (right - left);
    maxAreaSoFar = Math.max(currArea, maxAreaSoFar);

    minHeight === height[left] ? left++ : right--;
  }
  return maxAreaSoFar;
};
