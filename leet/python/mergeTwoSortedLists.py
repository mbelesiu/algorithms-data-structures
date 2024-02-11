# // Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

# // Example 1:
# // Input: l1 = [1,2,4], l2 = [1,3,4]
# // Output: [1,1,2,3,4,4]
# // Example 2:

# // Input: l1 = [], l2 = []
# // Output: []
# // Example 3:

# // Input: l1 = [], l2 = [0]
# // Output: [0]
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        head = ListNode()
        n = head

        while list1 != None and list2 != None:
            if list1.val > list2.val:
                n.next = list2
                list2 = list2.next
            else:
                n.next = list1
                list1 = list1.next
            n = n.next

        if list1 != None:
            n.next = list1

        elif list2 != None:
            n.next = list2

        return head.next
