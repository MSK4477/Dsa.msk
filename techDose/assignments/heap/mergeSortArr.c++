#include <iostream>
#include <vector>
#include <queue>

using namespace std;

// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

// Custom comparator for priority queue (min-heap)
struct Compare {
    bool operator()(ListNode* a, ListNode* b) {
        return a->val > b->val; // Min-heap based on node values
    }
};

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // Min-heap priority queue
        priority_queue<ListNode*, vector<ListNode*>, Compare> pq;
        
        // Push all the heads of the lists into the priority queue
        for (ListNode* list : lists) {
            if (list)
                pq.push(list);
        }
        
        ListNode* dummy = new ListNode(0);
        ListNode* tail = dummy;
        
        // Merge using the priority queue
        while (!pq.empty()) {
            ListNode* minNode = pq.top();
            pq.pop();
            
            // Add the minNode to the result linked list
            tail->next = minNode;
            tail = tail->next;
            
            // If minNode has a next node, push it into the priority queue
            if (minNode->next)
                pq.push(minNode->next);
        }
        
        return dummy->next;
    }
};

// Function to print a linked list (for testing)
void printList(ListNode* head) {
    ListNode* curr = head;
    while (curr) {
        cout << curr->val;
        if (curr->next) cout << "->";
        curr = curr->next;
    }
    cout << endl;
}

int main() {
    Solution sol;

    // Example usage
    vector<ListNode*> lists;
    
    // Creating the example input lists
    ListNode* l1 = new ListNode(1);
    l1->next = new ListNode(4);
    l1->next->next = new ListNode(5);
    
    ListNode* l2 = new ListNode(1);
    l2->next = new ListNode(3);
    l2->next->next = new ListNode(4);
    
    ListNode* l3 = new ListNode(2);
    l3->next = new ListNode(6);
    
    lists.push_back(l1);
    lists.push_back(l2);
    lists.push_back(l3);
    
    // Merging k sorted lists
    ListNode* mergedList = sol.mergeKLists(lists);
    
    // Printing the merged list
    printList(mergedList);
    
    return 0;
}
