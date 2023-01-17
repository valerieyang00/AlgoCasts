// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// use slow/fast 
function fromLast(list, n) {
    let slow = list.head
    let fast = list.head

    //move fast n places forward
    while (n > 0) {
        fast = fast.next
        n--;
    }
    
    while(fast) {
        if (!fast.next) {
            return slow
        }
        slow = slow.next
        fast = fast.next
    }   
}

module.exports = fromLast;
