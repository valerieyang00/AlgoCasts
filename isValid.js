function isValid(s) {
    let frequency = {}
    for (let char of s) {
        frequency[char] ? frequency[char]++ : frequency[char] = 1
    }
    
    let freqValues = Object.values(frequency)
    let valuesCount = {}
    
    for (let value of freqValues) {
        valuesCount[value] ? valuesCount[value]++ : valuesCount[value] = 1
    }
    
    const length = Object.keys(valuesCount).length
    console.log(valuesCount)
    if (length > 2) {
        return 'NO'
    } else if (length === 1) {
        return 'YES'
    } else {
        Object.values(valuesCount).reduce((a,b) => {
            if (a === b) {
                return 'NO'
            } else if (a > 2 && b > 2) {
                return 'NO'
            }
            }
        )
            return 'YES'
    }

}

isValid('aabbcd')