// You are given the vals of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the val of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// class Node 
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }

    insertAtBack(data) {
        var newNode = new ListNode(data);
        if (this.next !== null){
            this.next.insertAtBack(data);
        }
        else{
            this.next = newNode;
        }
    }
    //given
    printList() {
        if (!this.next) {
            console.log(this.val);
            return
        } else{
            console.log(this.val);
            this.next.printList();
        }


    }

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(data) {
        let runner = this.val;
        while (runner) {
            if (runner.data == data) return true;
            runner = runner.next;
        }

        return false;
    }

    /**
     * Removes the last node of this list.
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        if (!this.val) return false;

        let staggered = this.val,
            runner = staggered.next;

        while (runner && runner.next) {
            staggered = runner;
            runner = runner.next;
        }

        if (runner) {
            staggered.next = null;
            return runner.data;
        }
        this.val = null;
        return staggered.data;
    }

}


var mergeTwoLists = function (list1, list2) {
    let output = new ListNode();
    let head = output;

    while (list1 !== null && list2 !== null) {
        console.log(list1.val);
        if (list1.val < list2.val) {
            output.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            output.next = new ListNode(list2.val)
            list2 = list2.next
        }
        
        output = output.next
    }

    if (list1 !== null)
        output.next = list1
    if (list2 !== null)
        output.next = list2
    

    return head.next;
    
};

var l1 = new ListNode(1);
var l2 = new ListNode(1);

l1.insertAtBack(2);
l1.insertAtBack(4);

l2.insertAtBack(3);
l2.insertAtBack(4);
console.log(mergeTwoLists(l1, l2));

// l1.printList();
// l2.printList();