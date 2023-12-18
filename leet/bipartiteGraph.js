// Check if the Graph is Bipartite
// A Bipartite Graph is a graph whose vertices can be divided into two independent sets, 
// U and V such that every edge (u, v) either connects a vertex from U to V or a vertex from V to U. 
// In other words, for every edge (u, v), either u belongs to U and v to V, or u belongs to V and v to U.
const isBipartite = (G, startingPosition) => {
    // Create a color array to store
    // colors assigned to all vertices.
    // Vertex number is used as index
    // in this array. The value '-1'
    // of colorArr[i] is used to indicate
    // that no color is assigned
    // to vertex 'i'. The value 1 is
    // used to indicate first color
    // is assigned and value 0 indicates
    // second color is assigned.
    let colorArr = new Array(V);
    for (let i = 0; i < V; ++i) {
        colorArr[i] = -1;
    }

    // Assign first color to source
    colorArr[startingPosition] = 1;

    // Create a queue (FIFO) of vertex numbers
    // and enqueue source vertex for BFS traversal
    let q = [];
    q.push(startingPosition);

    // Run while there are vertices in queue (Similar to BFS)
    while (q.length != 0) {
        // Dequeue a vertex from queue
        let u = q.shift();

        // Return false if there is a self-loop
        if (G[u][u] == 1)
            return false;

        // Find all non-colored adjacent vertices
        for (let v = 0; v < V; ++v) {
            // An edge from u to v exists
            // and destination v is not colored
            if (G[u][v] == 1 && colorArr[v] == -1) {
                // Assign alternate color to this adjacent v of u
                colorArr[v] = 1 - colorArr[u];
                q.push(v);
            }

            // An edge from u to v exists and destination
            // v is colored with same color as u
            else if (G[u][v] == 1 && colorArr[v] == colorArr[u])
                return false;
        }
    }
    // If we reach here, then all adjacent vertices can
    // be colored with alternate color
    return true;
}

//  Driver program to test above function
const V = 4 // No. of Vertices
const G = [
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0]
];

if (isBipartite(G, 0))
    console.log("Yes");
else
    console.log("No");








// Algorithm to check if a graph is Bipartite: 
// One approach is to check whether the graph is 2-colorable or not using backtracking algorithm m coloring problem. 
// Following is a simple algorithm to find out whether a given graph is Bipartite or not using Breadth First Search (BFS). 
// 1. Assign RED color to the source vertex (putting into set U). 
// 2. Color all the neighbors with BLUE color (putting into set V). 
// 3. Color all neighbor’s neighbor with RED color (putting into set U). 
// 4. This way, assign color to all vertices such that it satisfies all the constraints of m way coloring problem where m = 2. 
// 5. While assigning colors, if we find a neighbor which is colored with same color as current vertex, then the graph cannot be colored with 2 vertices (or graph is not Bipartite) 