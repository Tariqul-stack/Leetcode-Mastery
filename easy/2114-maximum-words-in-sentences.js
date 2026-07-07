// 2114. Maximum Number of Words Found in Sentences
// Difficulty: Easy
// Topic: Array, String
// Date: 2026-06-11

var mostWordsFound = function(sentences) {
    let maximum = 0;
    for (let sentence of sentences) {
        let wordCount = sentence.split(" ").length;
        maximum = Math.max(maximum, wordCount);
    }
    return maximum;
};