/**
 * Definition for singly-linked list.
 **/
struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
    ListNode *removeNthFromEnd(ListNode *head, int n)
    {
        ListNode *dummy = new ListNode(0, head);
        ListNode *p = dummy;
        ListNode *r = dummy;
        int count = 0;

        while (p->next != nullptr)
        {
            if (count >= n)
            {
                // move r by one
                r = r->next;
            }
            count++;
            p = p->next;
        }

        r->next = r->next->next;

        return dummy->next;
    }
};

// One Pass, kiss my class 😜

// traverse list, until you have hit nth nodes away from the head
//      keep track of head at this point
// keep traversing until you have hit the end of the list, moving both remove node and pointer.
// once at end of list, perform remove operation
//return head

// note, the remove head operation need to be one behind the one you want to remove

// post-mortem - remembering back to my college days, the dummy node is extremely important for operations like this.
// it allows for r->next = r->next->next; to exists without having confusing checks on if r->next->next even exists.
// 4 ms and uses about 10 MB of memory