// Given a Binary Tree, convert it to a Circular Doubly Linked List (In-Place).  

// The left and right pointers in nodes are to be used as previous and next pointers respectively in the converted Circular Linked List.
// The order of nodes in the List must be the same as in Inorder for the given Binary Tree.
// The first node of Inorder traversal must be the head node of the Circular List.

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = null; 

const concatenate = (leftList, rightList) => {
    // If either of the list is empty, then 
    // return the other list 
    if (!leftList) return rightList
    if (!rightList) return leftList

    // Store the last Node of left List
    let lastLeft = leftList.left
    // Store the last Node of right List
    let lastRight = rightList.left

    // Connect the last node of Left List 
    // with the first Node of the right List 
    lastLeft.right = rightList
    rightList.left = leftList

    // left of first node refers to 
    // the last node in the list 
    leftList.left = rightList

    // Right of last node refers to the first 
    // node of the List 
    lastRight.right = leftList;

    // Return the Head of the List 
    return leftList;

}


const bTreeToCList = (root) => {
    if (root == null) return null

    // Recursively convert left and right subtrees 
    let left = bTreeToCList(root.left)
    let right = bTreeToCList(root.right)

    // Make a circular linked list of single node 
    // (or root). To do so, make the right and 
    // left pointers of this node point to itself 
    root.left = root.right = root


    // Step 1 (concatenate the left list with the list 
    // with single node, i.e., current node) 
    // Step 2 (concatenate the returned list with the 
    // right List)
    return concatenate(concatenate(left, root), right)

}



function display(head) {
    console.log("Circular Linked List is :<br/>");
    var itr = head;
    do {
        console.log(itr.val + " ");
        itr = itr.right;
    } while (itr != head);
}


// Driver Code 


// Build the  
root = new Node(10);
root.left = new Node(12);
root.right = new Node(15);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right.left = new Node(36);

// head refers to the head of the Link List 
var head = bTreeToCList(root);

// Display the Circular LinkedList 
display(head);


