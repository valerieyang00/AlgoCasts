function minimumBribes(q) {
    let moves = 0
    const orderedq = [...Array(q.length + 1).keys()].slice(1)
    
    for (let i=0; i < q.length; i++) {
        if (q[i] !== orderedq[0]) {
            console.log(orderedq, q, i)  
            console.log(q[i] - orderedq[0])
            const diff = q[i] - orderedq[0]
            const idx = orderedq.indexOf(q[i])
            if (diff > 2) {
                return console.log('Too chaotic')
            }
            moves += diff
            orderedq.splice(idx, 1)     
        } else {
            orderedq.shift()
        }
    }
    return console.log(moves)

}


console.log(minimumBribes([2, 1, 5, 3, 4]))