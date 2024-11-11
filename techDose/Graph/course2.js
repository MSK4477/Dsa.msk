class Solution {
  isACyclic(adj, visited, curr, res) {
    if (visited[curr] === 2) {
      return [];
    }
    if (visited[curr] == 1) return res;

    visited[curr] = 2;

    for (let next of adj[curr]) {
      if (this.isACyclic(adj, visited, next, res)?.length < 1) {
        return [];
      }
    }

    visited[curr] = 1;
    res.push(curr);
    return res?.length === adj?.length && res;
  }

  findOrder(numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    const visited = Array(numCourses).fill(0);
    const res = [];

    for (let i = 0; i < prerequisites?.length; ++i) {
      adj[prerequisites[i][1]].push(prerequisites[i][0]);
    }

    for (let i = 0; i < numCourses; ++i) {
      if (visited[i] === 0) {
        const result = this.isACyclic(adj, visited, i, res);

        if (result.length === 0) {
          return [];
        }
      }
    }

    return res.reverse();
  }
}

// Testing the code
const sol = new Solution();
const prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];
const order = sol.findOrder(4, prerequisites);

console.log(order.join(" "));
