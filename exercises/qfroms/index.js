// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack()
        this.second = new Stack()
    }

    add(record) {
        this.first.push(record)
    }
// pop and push everything over from first to second, essentially to flip the order from StackA to stackB, so when .pop from StackB it would remove the first item that was added to queue, following FIFO way of Queue.
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }
        const removed = this.second.pop()
        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }
        return removed
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }
        const peeked = this.second.peek()
        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }
        return peeked
    }
}

module.exports = Queue;
