function hourglassSum(arr) {
    let sums = []
    
    for (let row = 0; row <= 3; row++) { 
        let startColumn = 0
        let endColumn = 2
        while(endColumn < 6) {
            let counter = 0
            // Add hourglass
            for (let i = startColumn; i <= endColumn; i++) {
                counter += arr[row][i]
                counter += arr[row + 2][i]
                if (i === startColumn + 1) {
                    // Add middle row at 2nd index of hourglass
                    counter += arr[row + 1][i]
                }
            }
            sums.push(counter)         
            startColumn++
            endColumn ++
        }
    }

    
    return Math.max(...sums)

}