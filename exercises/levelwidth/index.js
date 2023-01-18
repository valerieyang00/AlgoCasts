// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counters = [0]
    const arr = [root, 's']

    while(arr.length > 1) {
        const node = arr.shift()
        if (node === 's') {
            arr.push('s')
            // add new 0 counter to the result array
            counters.push(0)
        } else {
            arr.push(...node.children)
            // increment the counter at the end of the array to count the node in current level
            counters[counters.length-1]++
        }
    }
    return counters
}

module.exports = levelWidth;
