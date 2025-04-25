function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const adjList = constructAdjList(edges);

  const queue: number[] = [source];
  const visited = new Set<number>();
  visited.add(source);

  while (queue.length) {
    const curr = queue.shift()!;
    if (curr === destination) return true;

    for (const node of adjList[curr]) {
      if (!visited.has(node)) {
        visited.add(node);
        queue.push(node);
      }
    }
  }

  return false;
}

function constructAdjList(edges: number[][]): Record<number, number[]> {
  const res = {};
  for (const edge of edges) {
    const [val1, val2] = edge;
    if (!res[val1]) {
      res[val1] = [];
    }
    if (!res[val2]) {
      res[val2] = [];
    }
    res[val1].push(val2);
    res[val2].push(val1);
  }
  return res;
}
