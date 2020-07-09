/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 
 // Runtime: 104 ms	
 // Memory: 42.4 MB	
var searchBST = function(root, val) {
    let current = root;
    while(current){
        if(current.val === val)return current;
        if(val > current.val){
            current = current.right;
        }else{
            current = current.left;
        }
    }
    return null;
};




// Recursive Solution
// Runtime: 120 ms	
// Memory: 42.3 MB	
var searchBST = function(root, val) {
    if(!root)return null;
    if(root.val === val)return root;
    if(val > root.val){
        return searchBST(root.right, val)
    }
    if(val < root.val){
        return searchBST(root.left, val)
    }
};




// Recursive Shorter
var searchBST = function(root, val) {
    if(!root)return null;
    if(root.val === val)return root;
    return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val)
};
