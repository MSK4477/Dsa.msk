#include <iostream>

using namespace std;

struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;

    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};
void morrisTraversal(TreeNode *root)
{

    TreeNode *curr = root;
    while (curr)
    {

        if (!curr->left)
        {
            cout << curr->val << " ";
            curr = curr->right;

        }
        else
        {
            TreeNode *predecessor;

            predecessor = curr->left;

            while (predecessor->right != NULL and predecessor->right != curr)
            {
                predecessor = predecessor->right;
            }

            if (predecessor->right == NULL)
            {
                predecessor->right = curr;
                curr = curr->left;
            }
            else
            {
                cout << curr->val << " ";
                curr = curr->right;
                predecessor->right = NULL;
            }
        }
    }
}

int main()
{

    TreeNode *root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    root->right->left = new TreeNode(6);
    root->right->right = new TreeNode(7);

    morrisTraversal(root);

    delete root->left->left;
    delete root->left->right;
     delete root->right->left;
    delete root->right->right;
    delete root->left;
    delete root->right;
    delete root;

    return 0;
}