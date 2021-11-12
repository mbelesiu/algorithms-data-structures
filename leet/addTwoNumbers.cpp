/**
 * Definition for singly-linked list.
 * */
struct ListNode
{
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

using namespace std;

class Solution
{
public:
  ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
  {
    return addNodeByNode(l1, l2, 0);
  }

  ListNode *addNodeByNode(ListNode *l1, ListNode *l2, int carryOver)
  {
    if (l1 == nullptr)
      l1 = new ListNode(0);
    if (l2 == nullptr)
      l2 = new ListNode(0);

    ListNode *l = new ListNode((l1->val + l2->val + carryOver) % 10);
    carryOver = (l1->val + l2->val + carryOver) / 10;

    if (l1->next != nullptr || l2->next != nullptr || carryOver == 1)
    {
      l->next = addNodeByNode(l1->next, l2->next, carryOver);
    }

    return l;
  }
};
