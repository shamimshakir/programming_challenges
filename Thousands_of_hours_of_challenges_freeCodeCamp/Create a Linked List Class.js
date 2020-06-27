
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
  
    this.remove = function(element){
    let temp = head;
    if(element == temp.element){
      head = temp.next
      return length--;
    }else{
      while(temp.next !== null){
        if(temp.next.element === element){
          temp.next = temp.next.next
          return length--;
        }
        temp = temp.next;
      }
    }
  };
  // Only change code below this line
  this.isEmpty = function(){
    return this.size() === 0
  }
  this.indexOf = function(element){
    let temp = head;
    let index = 0;
    while(temp.next !== null){
      if(temp.element === element){
        return index;
      }
      temp = temp.next;
      index++;
    }
    return -1
  }
  this.elementAt = function(index){
    let count = 0;
    let current = head;
    while(current.next !== null){
      if(count === index){
        return current.element;
      }
      current = current.next;
      count++;
    }
    return undefined
  }
  
}

let list = new LinkedList()
list.add('matha')
list.add('mundu')
list.add('hat')
list.add('pa')

console.log(list.head())
