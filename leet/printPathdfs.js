

var pathPrint = (root, path) => {
    path = path || [] // no need for helper function with this :)
    path.push(root)

    if(!root.left && !root.right) {
        console.log(path.map(function(node) {return node.name}).join(' '))
    }
    if(root.left) pathPrint(root.left, path)
    if(root.right) pathPrint(root.right, path)
    path.pop()
}