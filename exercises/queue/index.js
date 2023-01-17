// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// FIFO -  Enqueue/Dequeue (in JS array would be unshift/pop methods)
class Queue {
    // initialize Queue
    constructor() {
        this.data = [];
    }

    // add method (enqueue, to start of array)
    add(record) {
        this.data.unshift(record)
    }

    // remove method (dequeue, from end of array and return the removed item)
    remove() {
        return this.data.pop()
    }
}

module.exports = Queue;
