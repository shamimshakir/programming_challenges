var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // change code below this line
    if(tree.root === null)return null;
    let isBst = true;
    function checkBst(node){
      if(node.left != null){
        let left = node.left;
        if(left.value > node.value){
          isBst = false;
        }else{
          checkBst(left)
        }
      }
      if(tree.right != null){
        let right = node.right;
        if(right.value < node.value){
          isBst = false;
        }else{
          checkBst(right)
        }
      }
    }
    checkBst(tree.root)
    return isBst
  // change code above this line
}
