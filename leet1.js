// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// For example, the saying and conversion for digit string "3322251":

function countAndSay(n) {
    if (n === 1) {
        return '1'
    }
    return countHelper(countAndSay(n-1))
}

function countHelper(str) {
    let output = ''
    for (i=0; i < str.length; i++) {
        let count = 1
        for (j=i+1; j < str.length; j++) {
            if (str[j] === str[i]) {
                count ++
            } else {
                output += count.toString() + str[i]
                i = j
                count = 1
            }
        }
    }
    return console.log(output)
}

countAndSay(4)