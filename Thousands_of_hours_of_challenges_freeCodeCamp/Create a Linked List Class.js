
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    let node = new Node(element)
    if(head === null){
      head = node;
    }else{
      let current = head;
      while(current.next !== null){
        current = current.next
      }
      current.next = node
    }
    length++;
    // Only change code above this line
  };
}

let list = new LinkedList()
list.add('matha')
list.add('mundu')
list.add('hat')
list.add('pa')

console.log(list.head())
