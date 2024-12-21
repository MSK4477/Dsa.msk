#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

// Definition for a Node.
class Node
{
public:
    int val;
    vector<Node *> neighbors;

    Node(int _val)
    {
        val = _val;
    }
};


// Main function to clone the graph
Node *cloneGraph(Node *node, unordered_map<int, Node *> &visited)
{
   if(visited[node->val]) { 
    return visited[node->val];
   }

   Node * cloneNode = new Node(node->val);

   visited[node->val] = cloneNode;

   for(Node * neighbors : node->neighbors) { 
    cloneNode->neighbors.push_back(cloneGraph(neighbors, visited));
   }


   return cloneNode;
}

int main()
{
    // Create the original graph
    Node *node1 = new Node(1);
    Node *node2 = new Node(2);
    Node *node3 = new Node(3);
    Node *node4 = new Node(4);

    node1->neighbors.push_back(node2);
    node1->neighbors.push_back(node4);

    node2->neighbors.push_back(node1);
    node2->neighbors.push_back(node3);

    node3->neighbors.push_back(node2);
    node3->neighbors.push_back(node4);

    node4->neighbors.push_back(node1);
    node4->neighbors.push_back(node3);

    unordered_map<int, Node *> visited; // To store cloned nodes

    // Clone the graph
    Node *clonedGraph = cloneGraph(node1, visited);

  
    return 0;
}
