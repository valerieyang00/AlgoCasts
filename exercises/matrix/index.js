// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let matrixArr = []
    // push right number of subarrays
    for (let i=0; i < n; i++) {
        matrixArr.push([])
    }
    let counter = 1
    let startColumn = 0
    let endColumn = n - 1
    let startRow = 0
    let endRow = n - 1

    // set boundaries of matrix
    while(startColumn <= endColumn && startRow <= endRow) {
        // Iterate and fill Top Row 
        for (let i = startColumn; i <= endColumn; i++) {
            matrixArr[startRow][i] = counter;
            counter++
        }
        // increment StartRow to move down a row
        startRow++
        for (let i = startRow; i <= endRow; i++) {
            matrixArr[i][endColumn] = counter;
            counter++
        }
        // decrement endColumn as we finished the right side of matrix
        endColumn--
        for (let i = endColumn; i >= startColumn; i--) {
            matrixArr[endRow][i] = counter;
            counter++
        }
        // decrement endRow as we finished the bottom row
        endRow--
        for (let i = endRow; i >= startRow; i--) {
            matrixArr[i][startColumn] = counter;
            counter++
        }
        // increment startColumn as completed the left side of matrix
        startColumn++
    }
    return matrixArr
}

module.exports = matrix;
