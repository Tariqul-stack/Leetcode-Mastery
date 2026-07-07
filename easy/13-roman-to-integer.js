// 13.Roman to Integer
// Difficulty: Easy
// Topic: string, hash-map
// Date: 2026-06-21

var romanToInt = function(s) {
    let values = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        let current = values[s[i]];
        let next = (i === s.length - 1) ? 0 : values[s[i + 1]];
        
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    
    return total;
};