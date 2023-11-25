class Node {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    remove(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                this.size--;
                return true;
            }

            current = current.next;
        }

        return false;
    }

    search(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return current;
            }

            current = current.next;
        }

        return null;
    }

    toArray() {
        const result = [];
        let current = this.head;

        while (current) {
            result.push({ value: current.value, prev: current.prev, next: current.next });
            current = current.next;
        }

        return result;
    }
}

const myList = new DoublyLinkedList();
myList.add(1);
myList.add(2);
myList.add(3);

console.log("Size:", myList.size);
console.log("Head:", myList.head);
console.log("Search 2:", myList.search(2));
console.log("Array representation:", myList.toArray());

myList.remove(2);
console.log("Size after removing 2:", myList.size);
console.log("Array representation after removing 2:", myList.toArray());
