// 1. Two Sum
// Difficulty: Easy
// Topic: Array, Hash Map
// Date: 2026-07-08

var twoSum = function(nums, target) {
    let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        let partner = target - nums[i];
        
        if (map[partner] !== undefined) {
            return [map[partner], i];
        }
        
        map[nums[i]] = i;
    }
};