/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

        var l1Node = l1;
        var l2Node = l2;

        var headNode = {
            val:0,
            next:null
        }

        var lastNode = headNode;
        var by = 0;
        var lossList = null;

        while(true){
            var num = 0;
            if(l1Node.next === null && l2Node.next === null){
                num = l1Node.val+l2Node.val + by;
                lastNode.val =num%10;
                if(num>=10){
                    lastNode.next = {
                        val:1,
                        next:null
                    }
                }else{  
                    lastNode.next = null;
                }
                break;
            }

            num = l1Node.val+l2Node.val + by;


            lastNode.val = num % 10;

            lastNode.next = {
                val:0,
                next:null
            }

            lastNode = lastNode.next;


            if(l1Node.next){
                l1Node = l1Node.next;
            }else{
                l1Node = {
                    val:0,
                    next:null
                };
            }

            if(l2Node.next){
                l2Node = l2Node.next;
            }else{
                l2Node = {
                    val:0,
                    next:null
                };
            }
            

            if(num>=10){
                by = 1;
            }else{
                by = 0;
            }
        }


        return headNode;

};