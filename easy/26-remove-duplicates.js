// 26.Remove Duplicates from Sorted Array
// Difficulty: Easy
// Topic: array, two-pointer
// Date: 2026-06-28

var removeDuplicates = function(nums) {
    let slow = 0;
    
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    
    return slow + 1;
};