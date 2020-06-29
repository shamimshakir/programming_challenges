var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.add = function(item){
    let node = new Node(item)
    if(this.root === null){
      this.root = node;
    }else{
      let current = this.root;
      while(true){
        if(current.value === item)return null;
        if(current.value > item){
          if(current.left === null){
            current.left = node;
            return this;
          }else{
            current = current.left
          }
        }else if(current.value < item){
          if(current.right === null){
            current.right = node;
            return this;
          }else{
            current = current.right
          }
        }
      }
    }
  }
  
  
  this.findMin = function(){
    if(this.root === null)return null;
    let current = this.root
    while(current){
      if(current.left === null){
        return current.value
      }
      current = current.left
    }
  }
  this.findMax = function(){
    if(this.root === null)return null;
    let current = this.root;
    while(current){
      if(current.right === null){
        return current.value;
      }
      current = current.right
    }
  }
  
  

}


let bst = new BinarySearchTree()
bst.add(8)
bst.add(3)
bst.add(10)
bst.add(1)
bst.add(6)
bst.add(4)
bst.add(7)
bst.add(14)
bst.add(13)
console.log(bst)
