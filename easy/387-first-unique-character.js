// 387.First Unique Character in a String
// Difficulty: Easy
// Topic: string, hash-map
// Date: 2026-06-21

var firstUniqChar = function(s) {
    let count = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        count[char] = (count[char] || 0) + 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};