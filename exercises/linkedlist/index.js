// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        // Assign new Node's next to this.head in case there's already a head assigned to move that to next on the list
        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0;
        let node = this.head

        //If head node doesn't exist, while loop will fail to run and return 0 counter.
        // Reassign node var to the next node to keep the while loop going until reaching null (no other nodes)
        while(node) {
            counter++
            node = node.next
        }

        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if(!this.head) {
            return null
        }

        let node = this.head
        while(node) {
            if (!node.next) {
                return node
            }
            node = node.next
        }
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }

    removeLast() {
        if(!this.head) {
            return
        }
        if(!this.head.next) {
            return this.head = null
        }

        let prev = this.head
        let node = this.head.next

        while(node.next) {
            prev = node
            node = node.next
        }

        prev.next = null
    }

    insertLast(data) {
        const newNode = new Node(data)
        const last = this.getLast()
        if (last) {
            last.next = newNode
        } else {
            this.head = newNode
        }
    }

    getAt(index) {
        //if this.head is null, while loop will not execute, will return null from the last line of code
        let node = this.head
        let counter = 0

        while(node) {
            if (counter === index) {
                return node
            }
            counter++
            node = node.next
        }
        // this would mean index was higher than the list size, return null
        return null
    }

    removeAt(index) {
        if (!this.head) {
            return
        }
        //if removing the first element
        if (index === 0) {
            this.head = this.head.next
            return
        }

        const prev = this.getAt(index - 1)
        // edge case of index being larger than list size
        if (!prev.next) {
            return
        } else {
             prev.next = prev.next.next  
         }
    }

    insertAt(data,index) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }
        // if inserting at start
        if (index === 0) {
            this.head = new Node(data, this.head)
            return
        }

        //if prev node doesn't exist (index out of boundary), get the last node 
        const prev = this.getAt(index - 1) || this.getLast()
        const newNode = new Node(data, prev.next)
        prev.next = newNode       
    }

    forEach(fn) {
        if (!this.head) {
            return
        }
        let node = this.head
        let index = 0
        while(node) {
            fn(node, index)
            node = node.next
            index++
        }
    }
}

module.exports = { Node, LinkedList };
