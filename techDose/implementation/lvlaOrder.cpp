#include <iostream>
#include <queue>
using namespace std;
// Definition for a binary tree node
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

void levelOrderTraversal(TreeNode* root) {
    if (root == NULL) return;
    std::queue<TreeNode*> q;
    q.push(root);

    while (!q.empty()) {
        int levelSize = q.size();
        for (int i = 0; i < levelSize; ++i) {
    cout<<q.size()<< " before" <<endl;

            TreeNode* node = q.front();
            q.pop();
            std::cout << node->val << " "<<endl;
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
    cout<<q.size()<< " after" <<endl;

        }
        std::cout << std::endl; // Move to the next line after each level
    }
}

int main() {
    // Example usage
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    root->right->right = new TreeNode(6);

    levelOrderTraversal(root);
    return 0;
}
