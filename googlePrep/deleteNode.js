function ListNode(val) {
    this.val = val;
    this.next = null;
}


const delete_node = (head, key) => {

    let current = head
    let prev = head

    while (current) {
        if (current.val === head) {
            prev.next = current.next
        }
        else {
            prev = current
            current = head.next
        }
    }

    if(!current) {
        return head
    }
    return head
}

const head = [4, 5, 1, 9]
const key = 5