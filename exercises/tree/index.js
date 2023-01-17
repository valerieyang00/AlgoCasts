// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data
        this.children = []
    }

    // add: create a new Node and add to current Node's children
    add(data) {
        this.children.push(new Node(data))
    } 

    // remove: given data, look at each child of current node and remove any node with data === data
    remove(data) {
        this.children = this.children.filter(node => node.data !== data)
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    // Traverse - Breadth first
    traverseBF(fn) {
        const arr = [this.root]
        while(arr.length) {
            const node = arr.shift()
            // Add node's children to the End of the array to get BF
            arr.push(...node.children)
            fn(node)
        }
    }

    // Traverse - Depth first
    traverseDF(fn) {
        const arr = [this.root]
        while(arr.length) {
            const node = arr.shift()
            // Add node's children to the Start of the array to get DF
            arr.unshift(...node.children)
            fn(node)
        }
    }
}

module.exports = { Tree, Node };
