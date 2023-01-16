// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let newArr = []
    while (array.length > size) {
        let subarray = array.splice(0, size)
        newArr.push(subarray)
    }
    newArr.push(array)
    return newArr
}

function chunkSlice(array, size) {
    let newArr = []
    let index = 0
    while (index < array.length) {
       newArr.push(array.slice(index, index+size))
       index += size
    }
    return newArr
}

function chunkVerTwo(array, size) {
    const newArr = []

    for (let item in array) {
        const last = newArr[newArr.length -1]
        if (!last || last.length === size) {
            newArr.push([item])
        } else {
            last.push(item)
        }
    }
    return newArr
}

module.exports = chunk;
