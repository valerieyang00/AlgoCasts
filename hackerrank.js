function repeatedString(s, n) {
    let count = 0
    let index = 0
    while (n) {
        if (index === s.length) {
            index = 0
        }
        if (s[index] === 'a') {
            count++
        }
        index++
        n--
        console.log(count)
        console.log(n)
    }
    return count
}

repeatedString('abc', 10)

