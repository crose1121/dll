class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
        this.prev = null;
    }
}
class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToBack(valueInput) {
        let newNode = new Node(valueInput);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    addToFront(valueInput) {
        let newNode = new Node(valueInput);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else { 
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    removeFromBack() {
        if (this.head == null) {
            return null;
        }
        if (this.head === this.tail && this.head!=null) {
            this.head = null;
            this.tail = null;
        }
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
    }
    removeFromFront() {
        if (this.head === null) {
            return null;
        }
        if (this.head === this.tail && this.head!=null) {
            this.head = null;
            this.tail = null;
        }
        this.head.next.prev = null;
        this.head = this.head.next;
    }
    display() {
        let result = "";
        //use runner to traverse the SLL
        let runner = this.head;
        while (runner != null) { //while runner is pointing at a node
            result += `${runner.value}--->`
            runner = runner.next //this is how you increment runner to go to the next node
        }
        console.log(result)
    }
    reverse() {
        if(this.head===null) {
            return;
        }
        if(this.head===this.tail) {
            return;
        }
        let runner = this.head;
        let prevNode = null;
        let nextNode = runner.next;

        while(nextNode != null) {
            nextNode = runner.next;
            runner.prev = nextNode;
            runner.next = prevNode;
            prevNode=runner;
            runner = nextNode;
        }
        [[this.head],[this.tail]] = [[this.tail],[this.head]];
    }
}
let dll1 = new DLL();
dll1.addToBack(5);
dll1.addToBack(7);
dll1.addToBack(888);
dll1.addToBack(54);

dll1.addToFront(1)
dll1.addToFront(2)
dll1.addToFront(3)
// dll1.display();
// console.log("-------After removing from the back------")
// dll1.removeFromBack();
// dll1.display();
// console.log("-------After removing from the front------")
// dll1.removeFromFront();
dll1.display();

dll1.reverse();

dll1.display();