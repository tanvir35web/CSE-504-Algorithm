class UnionFind {
    constructor(size) {
        this.parent = new Array(size);
        this.rank = new Array(size);
        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            // Union by rank
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
            return true;
        }
        return false;
    }
}

function kruskalMST(edges, numVertices) {
    // Sort all edges in non-decreasing order of their weight
    edges.sort((a, b) => a[2] - b[2]);

    const uf = new UnionFind(numVertices);
    const mst = [];

    for (const edge of edges) {
        const [u, v, weight] = edge;

        // Check if including this edge forms a cycle
        if (uf.union(u, v)) {
            mst.push(edge);
        }

        // Stop if we have included enough edges to form a spanning tree
        if (mst.length === numVertices - 1) {
            break;
        }
    }

    return mst;
}

// Map vertices to numerical indices
const vertexMap = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };

// Define edges using numerical indices
const edges = [
    [vertexMap.g, vertexMap.h, 2],
    [vertexMap.f, vertexMap.h, 2],
    [vertexMap.e, vertexMap.h, 3],
    [vertexMap.e, vertexMap.f, 3],
    [vertexMap.a, vertexMap.g, 3],
    [vertexMap.g, vertexMap.f, 4],
    [vertexMap.a, vertexMap.b, 5],
    [vertexMap.c, vertexMap.d, 5],
    [vertexMap.c, vertexMap.e, 8],
    [vertexMap.b, vertexMap.c, 9],
    [vertexMap.a, vertexMap.d, 9],
];

const numVertices = 8;
const mst = kruskalMST(edges, numVertices);

console.log("Edges in the MST:");
mst.forEach(edge => {
    const [u, v, weight] = edge;
    // Convert numerical indices back to vertex labels for output
    const uLabel = Object.keys(vertexMap).find(key => vertexMap[key] === u);
    const vLabel = Object.keys(vertexMap).find(key => vertexMap[key] === v);
    console.log(`${uLabel} - ${vLabel} = ${weight}`);
});

// Calculate the total weight of the MST
const totalWeight = mst.reduce((sum, edge) => sum + edge[2], 0);
console.log("Total weight of the MST:", totalWeight);