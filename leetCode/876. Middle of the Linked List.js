/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
    count = 0;
    current = head;
    while(current){
        current = current.next;
        count++;
    }
    
    let mid = Math.floor(count / 2);
    
    count2 = 0;
    current2 = head;
    while(current2){
        if(mid === count2){
            return current2
        }
        current2 = current2.next;
        count2++;
    }
};
