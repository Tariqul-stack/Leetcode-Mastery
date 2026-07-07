// 20.Valid Parentheses
// Difficulty: Easy
// Topic: string, stack
// Date: 2026-06-26

var isValid = function(s) {
    let stack = [];
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (pairs[char]) {
            if (stack.length === 0) {
                return false;
            }
            if (stack[stack.length - 1] !== pairs[char]) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
};