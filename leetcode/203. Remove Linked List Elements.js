function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
@param {ListNode} head
@param {number} val
var removeElements = function (head, val) {
    console.log(head)

};

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6))
