
// dfs
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

// bfs
var pathPrint2 = (root) => {

    const queue = [[root]]
    while(queue.length){
        let path = queue.shift()
        let lastNode = path[path.length - 1]
        if(!lastNode.left && !lastNode.right){
            console.log(path.map(function(node) {return node.name}).join(' '))
        }

        if(lastNode.left){
            queue.push(path.slice().concat([lastNode.left]))
        }
        if(lastNode.right){
            queue.push(path.slice().concat([lastNode.right]))
        }
    }
}