// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('')
}

function reverseForLoop(str) {
    let reversed = ''
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed
}

function reverseReduceHelper(str) {
    return str.split('').reduce((reversed, char) => char + reversed
    , '')
}

module.exports = reverse;
