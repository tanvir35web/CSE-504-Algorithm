function topologicalSort(vertices, edges) {
  const inDegree = Array(vertices).fill(0); // Array to track in-degrees of vertices
  const adjacencyList = Array.from({ length: vertices }, () => []); // Adjacency list representation of the graph

  // Step 1: Build the graph and compute in-degrees
  for (const [u, v] of edges) {
    adjacencyList[u].push(v);
    inDegree[v]++;
  }

  const queue = []; // Queue to store vertices with in-degree 0

  // Step 2: Enqueue vertices with in-degree 0
  for (let i = 0; i < vertices; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const topoOrder = []; // List to store the topological order

  // Step 3: Process the queue
  while (queue.length > 0) {
    const current = queue.shift(); // Remove the front of the queue
    topoOrder.push(current);

    // Decrease in-degree for all neighbors
    for (const neighbor of adjacencyList[current]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor); // Add to queue if in-degree becomes 0
      }
    }
  }

  // Step 4: Check if a topological sort is possible (i.e., no cycles)
  if (topoOrder.length !== vertices) {
    throw new Error("Graph has a cycle; topological sort not possible.");
  }

  return topoOrder;
}

// Example usage
const vertices = 6; // Number of vertices (A-F -> 0-6)
const edges = [
  [0, 2], // A -> C
  [0, 3], // A -> D
  [0, 1], // A -> B
  [1, 3], // B -> D
  [1, 4], // B -> E
  [2, 5], // C -> F
  [3, 4], // D -> E
  [3, 2], // D -> C
  [4, 5], // E -> F
];

try {
  const result = topologicalSort(vertices, edges);
  console.log(
    "Topological Sort Order:",
    result.map((i) => String.fromCharCode(65 + i))
  ); // Convert to letters (A-F)
} catch (error) {
  console.error(error.message);
}
