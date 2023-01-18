// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    insert(data) {
        // recursive
        if (data < this.data && this.left) {
            // if data is less than this node's data and there is node to the left
            this.left.insert(data)
        } else if (data < this.data) {
            // if data is less than this node's data, but there is no node to the left
            this.left = new Node(data)
        } else if (data > this.data && this.right) {
            this.right.insert(data)
        } else if (data > this.data) {
            this.right = new Node(data)
        }
    }

    contains(data) {
        if (data === this.data) {
            return this
        }

        if (data < this.data && this.left) {
            return this.left.contains(data)
        } else if (data > this.data && this.right) {
            return this.right.contains(data)
        } 

        // this would be if there's no left or right node to compare to, thus does not exist
        return null
    }
}

module.exports = Node;
