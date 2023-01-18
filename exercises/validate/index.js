// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    // min and max will change throughout recursion. If node is smaller than min or larger than max, valtidation fails
    if (max !== null && node.data > max) {
        return false
    }

    if (min !== null && node.data < min) {
        return false
    }

    // recursion to check node.left and node.right until all nodes are checked with cases above
    if (node.left) {
        return validate(node.left, min, node.data)
    }

    if (node.right) {
        return validate(node.right, node.data, max)
    }


    // all false cases tested above, so return true
    return true
}

module.exports = validate;
