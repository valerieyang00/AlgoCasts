function sherlockAndAnagrams(s) {
    let count = 0
    let substrings = []
    for (let i=0; i < s.length; i++) {
        for (let j=i+1; j <= s.length; j++) {
            substrings.push(s.substring(i, j))
        }
    }
    for (let i=0; i < substrings.length - 1; i++) {
        let freq = {}
        for (let char of substrings[i]) {
            freq[char] ? freq[char]++ : freq[char] = 1
        }

        for (let j=i+1; j < substrings.length; j++) {
            let anagram = true
            let shallowFreq = {...freq}
            for (let char of substrings[j]) {
              shallowFreq[char] ? shallowFreq[char]-- : anagram = false
            }
            Object.values(shallowFreq).forEach(val => {
                if (val > 0) {
                    anagram = false
                }
            })

            if (anagram) {
                count++
            }
        }
    }    
    return console.log(count)
}

sherlockAndAnagrams('abba')