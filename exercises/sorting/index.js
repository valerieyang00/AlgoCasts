// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//start from index 0 and compare to next index, swap if index is larger than next index, then start over
function bubbleSort(arr) {
    // i indicates number of iterations sort will do (arr.length -1)
    for (let i=0; i < arr.length; i++) {
        // reduce window for j as i increments as largest number is already placed at the end after each j loop is done
        for (let j=0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

//iterate and get the minimum value and swap with current index with minimum
function selectionSort(arr) {
    for (let i=0; i < arr.length; i++) {
        //set minIndex to current i
        let minIndex = i
        for (let j= i+1; j < arr.length; j++) {
            //iterate rest of the array with j, and if value at j is lower than value at minIndex, update minIndex to end up with lowest value after iteration
            if (arr[minIndex] > arr[j]) {
                minIndex = arr.indexOf(arr[j])
            }
        }
        // after j loop is done, compare the minIndex to i, if they are not the same, swap
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }

    return arr
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    const midpoint = Math.floor(arr.length / 2) 
    // left : from index 0 to element before midpoint
    const left = arr.slice(0, midpoint)
    // right: from midpoint to end
    const right = arr.slice(midpoint)

    // mergeSort will recursively run until arr.length === 1 passing the if statement above and return the arr with 1 element
    // merge will receive the returned 1 element arrays from left and right
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const results = []
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    // return results array + anything left in either left or right
    return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
