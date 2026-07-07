// 27. Remove Element
// Difficulty: Easy
// Topic: Array, Two Pointer
// Date: 2026-07-07

var removeElement = function(nums, val) {
    let slow = 0;
    
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    
    return slow;
};