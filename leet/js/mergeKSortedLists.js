// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] === null) {
      lists.splice(i, 1);
    }
  }

  if (lists.length === 0) {
    return null;
  }

  let mergedList = lists[0];

  for (let i = 1; i < lists.length; i++) {
    let subList = lists[i];

    while (subList !== null) {
      let returnListItem = mergedList;
      if(subList.val <= returnListItem.val){
        mergedList = new ListNode(subList.val, returnListItem);
        subList = subList.next;
          continue;
      }
      while (returnListItem.next !== null) {
        if (subList.val <= returnListItem.next.val) {
          let newItem = new ListNode(subList.val, returnListItem.next);
          returnListItem.next = newItem;
          break;
        }
        returnListItem = returnListItem.next;
      }
      if (returnListItem.next === null) {
        if (subList.val < returnListItem.val) {
          mergedList = new ListNode(subList.val, returnListItem);
        } else {
          returnListItem.next = new ListNode(subList.val, null);
        }
      }

      subList = subList.next;
    }
  }
  return mergedList;
};
// set return to equal lists[0]
// for remaining elements in the list
// travese the sub lists
//  meaning, traveses lists[1][i]
// compare each item in that list to the return list
// if item in list is less than or equal to next item in the reutrn list
// insert it TODO*************
// else
// keep going on
// if item is the biggest in the list i.e. we break out of the loop
//  add it to the end of the return list
//return the list


// How to insert
// inserting will happen when item is less than or equal to the next item on the return list
// set item to insert's next to current items next
// set current item's next to inserted item