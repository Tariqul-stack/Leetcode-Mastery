// 242. Valid Anagram
// Difficulty: Easy
// Topic: Hash Map
// Date: 2026-07-08

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let count = {};
    
    
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    
    for (let char of t) {
        count[char] = (count[char] || 0) - 1;
        if (count[char] < 0) return false;
    }
    
    return true;
};