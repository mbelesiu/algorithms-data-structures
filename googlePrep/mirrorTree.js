// JavaScript program to convert
// binary tree into its mirror

/* Class containing left and right child of current
node and key value*/

class Node {
    constructor(item) {
        this.data = item;
        this.left = this.right = null;
    }
}

let root;



function mirror(node) {
    if(!node) {
        return node
    }

    let left = mirror(node.left)
    let right = mirror(node.right)

    node.left = right
    node.right = left

    return node
}



/* Helper function to test mirror(). Given a binary
search tree, print out its data elements in
increasing sorted order.*/
function inOrder(node) {
    if (!node)
        return node;

    inOrder(node.left);
    console.log(node.data + " ");

    inOrder(node.right);
}



root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

/* print inorder traversal of the input tree */
console.log("Inorder traversal of input tree is : \n");
inOrder(root);

/* convert tree to its mirror */
mirror(root);

/* print inorder traversal of the minor tree */
console.log(
    "Inorder traversal of binary tree is :  \n"
);
inOrder(root);

