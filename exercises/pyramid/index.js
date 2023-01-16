// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const columnLength = n + n - 1
    const midpoint = Math.floor(columnLength / 2)
    for (let row = 0; row < n; row++) {
        let level = ''
        for (let column = 0; column < columnLength; column++) {
            if (column >= midpoint - row && column <= midpoint + row) {
                level += '#'
            }
            else {
                level += ' '
            }
        }
        console.log(level)
    }
}

function pyramidRecursion(n, row = 0, level= '') {
    if (row === n) {
        return
    }

    const columnLength = n + n - 1

    if (level.length === columnLength) {
        console.log(level)
        return pyramidRecursion(n, row + 1)
    }

    const midpoint = Math.floor(columnLength / 2)
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#'
    } else {
        add = ' '
    }

    pyramidRecursion(n, row, level + add)
}

module.exports = pyramid;
