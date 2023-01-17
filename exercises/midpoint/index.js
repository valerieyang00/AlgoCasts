// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// slow / fast advancing at 1 and 2 each. check fast.next and fast.next.next to find the end of the list and return Slow to be midpoint at the end

function midpoint(list) {
    let slow = list.head
    let fast = list.head

    while(fast) {
        if (!fast.next || !fast.next.next) {
            return slow
        }
        slow = slow.next
        fast = fast.next.next
    }
}

module.exports = midpoint;
