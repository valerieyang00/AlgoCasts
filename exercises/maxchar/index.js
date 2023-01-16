// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let frequency = {}
    for (let char of str) {
        frequency[char] ? frequency[char]++ : frequency[char] = 1
    }
    return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b)
    
}

function maxCharForIn(str) {
    let frequency = {}
    for (let char of str) {
        frequency[char] ? frequency[char]++ : frequency[char] = 1
    }
    // for in for iterating object
    for (let char in frequency) {
        if (frequency[char] > max) {
            max = frequency[char]
            maxChar = char
        }
    }
    return maxChar
}

module.exports = maxChar;
