// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i=1; i <= n; i++) {
        let result= Array(n)
        result.fill('#',0,i)
        result.fill(' ',i,n)
        console.log(result.join(''))
    }
}

function stepIterative(n) {
    for (let row=0; row < n; row++) {
        let stair = ''

        for (let column=0; column < n; column++) {
            if (column <= row) {
                stair += '#'
            } else {
                stair += ' '
            }
        }
        console.log(stair)
    }
}

function stepRecursion(n, row = 0, stair = '') {
    if (n === row) {
        return
    }

    if (n === stair.length) {
        console.log(stair)
        return stepRecursion(n, row + 1)
    }

    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    stepRecursion(n, row, stair)
}

module.exports = steps;
