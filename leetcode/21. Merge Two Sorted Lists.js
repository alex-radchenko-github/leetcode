function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    console.log(!list1)

};

console.log(mergeTwoLists([1, 2, 3], [1, 3, 4]))


// class Solution:
// def mergeTwoLists(self, l1, l2):
// if l1 is None:
//     return l2
// elif l2 is None:
//     return l1
// elif l1.val < l2.val:
// l1.next = self.mergeTwoLists(l1.next, l2)
// return l1
// else:
// l2.next = self.mergeTwoLists(l1, l2.next)
// return l2
