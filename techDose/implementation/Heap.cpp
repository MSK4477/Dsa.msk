#include <iostream>
#include <vector>

using namespace std;

class MaxHeap {

    private:

    vector<int> heap;

    void heapify(int index) {
        int largest = index;
        int left =  2 * index + 1;
        int right = 2  * index + 2;

        if(left < heap.size() && heap[left] > heap[largest]) { 
            largest = left;
        }

         if(right < heap.size() && heap[right] > heap[largest]) { 
            largest = right;
        }

        if(largest != index) { 
            swap(heap[index], heap[largest]);
            heapify(largest);
        }
    }

    public:
        int getMax()
        {

            if (heap.size() == 0)
            {
                return 0;
            }
            else
                return heap[0];
        }

        void insert(int value) { 
            
            heap.push_back(value);

            int index = heap.size() -1;

            while(index > 0 && heap[index] > heap[(index -1)] /2) { 
                swap(heap[index], heap[(index -1) /2]);
                index = (index -1) /2;
            }
        }

        int heapSize() { 
            return heap.size();
        }
        int extractMax () { 
            if(heap.size())  { 
            int max = heap[0];
            heap[0] = heap.back();
            heap.pop_back();
            heapify(0);
            return max;
            }
        }
};

        int main () { 
   MaxHeap maxHeap;

   maxHeap.insert(10);
    maxHeap.insert(30);
    maxHeap.insert(20);
    maxHeap.insert(40);
    maxHeap.insert(5);
 
    cout << maxHeap.heapSize()<<endl;
    cout << maxHeap.extractMax()<<endl;
    cout << maxHeap.heapSize();
}

