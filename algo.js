// 42. Trapping Rain Water



// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.









/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let count = 0; // count variable
    let l = 0; // left pointer
    let r = height.length - 1; // right pointer
    let maxLeft = 0; // max left variable
    let maxRight = 0; // max right variable

    while (l <= r) {
        if (height[l] <= height[r]) { // if the left current number is less than or equal to the right current number
            if (height[l] >= maxLeft) { // then, if the current left number is greater than or equal to the current maxLeft number
                maxLeft = height[l];    // update the maxLeft number to the current left number
            } else {    // otherwise, if the current left number is smaller than the maxLeft number
                count += maxLeft - height[l]; // add the maxLeft - the current left Number to the count 
            }
            l++; // increment the left pointer
        } else { // if the current right number is greater than the left current number
            if (height[r] >= maxRight) { // then, if the current right number is greater than or equal to the current maxRight number
                maxRight = height[r]; // update the maxRight number to the current right number
            } else {    
                count += maxRight - height[r]; // otherwise, add the maxRight - the current right number to the count
            }
            r--;  // increment the right pointer
        }
    }

    return count;  // return the count
};