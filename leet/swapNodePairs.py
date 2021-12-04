# Given a linked list, swap every two adjacent nodes and return its head.

# You may not modify the values in the list's nodes. Only nodes itself may be changed.

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or head.next == None:
            return head

        p1 = head
        p2 = head.next
        head = p2
        prev = None

        while p2 != None:
            p1.next = p2.next
            p2.next = p1

            if prev:
                prev.next = p2

            prev = p1
            p1 = p1.next
            if p1 != None:
                p2 = p1.next
            else:
                p2 = None

        return head

# Example 1:
# Input: head = [1,2,3,4]
# Output: [2,1,4,3]

# Example 2:
# Input: head = []
# Output: []

# Example 3:
# Input: head = [1]
# Output: [1]
