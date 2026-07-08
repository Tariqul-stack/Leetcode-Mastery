// 383. Ransom Note
// Difficulty: Easy
// Topic: Hash Map
// Date: 2026-07-08

var canConstruct = function(ransomNote, magazine) {
    let count = {};
    
    
    for (let char of magazine) {
        count[char] = (count[char] || 0) + 1;
    }
    
    
    for (let char of ransomNote) {
        count[char] = (count[char] || 0) - 1;
        if (count[char] < 0) return false;
    }
    
    return true;
};