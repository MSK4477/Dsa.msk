class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].val <= this.heap[index].val) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let smallest = index;
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;

            if (leftIndex < length && this.heap[leftIndex].val < this.heap[smallest].val) {
                smallest = leftIndex;
            }
            if (rightIndex < length && this.heap[rightIndex].val < this.heap[smallest].val) {
                smallest = rightIndex;
            }
            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

const mergeKLists = function(lists) {
    const minHeap = new MinHeap();
    // Push all the heads of the lists into the min-heap
    for (let list of lists) {
        if (list) minHeap.insert(list);
    }

    const dummy = new ListNode(0);
    let tail = dummy;

    // Merge using the min-heap
    while (!minHeap.isEmpty()) {
        const minNode = minHeap.extractMin();
        tail.next = minNode;
        tail = tail.next;
        if (minNode.next) {
            minHeap.insert(minNode.next);
        }
    }

    return dummy.next;
};

// Helper function to print a linked list (for testing)
function printList(head) {
    let curr = head;
    const result = [];
    while (curr) {
        // console.log(curr.next, "curr nxt")
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join("->"));
}

// Example usage
const l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const l3 = new ListNode(2, new ListNode(6));

const lists = [l1, l2, l3];

const mergedList = mergeKLists(lists);
printList(mergedList);
