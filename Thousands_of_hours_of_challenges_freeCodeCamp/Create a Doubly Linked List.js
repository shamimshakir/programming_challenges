
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add = function(item){

    if(this.head === null){
        let node = new Node(item)
        this.head = node;
        this.tail = this.head;
    }else{
        let tempTail = this.tail;
        let node = new Node(item, tempTail)
        tempTail.next = node;
        this.tail = node;
    }
  }
  this.remove = function(item){
    if(this.head === null){
      return null;
    }

    if(this.head.data === item){
      this.head = this.head.next
      this.head.prev = null
    }
    if(this.tail.data === item){
        let prev = this.tail.prev
        prev.next = null;
        this.tail = prev
    }
  }
  // change code above this line
};



let list = new DoublyLinkedList()
list.add('frst')
list.add('second')
list.add('third')
console.log(list.head)
