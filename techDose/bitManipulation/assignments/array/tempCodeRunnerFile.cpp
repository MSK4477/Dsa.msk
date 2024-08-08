
        j--;
        break;
    }
      if (i < j) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
      }
      nums[nums.size() -1] = nums[i];
      nums[i] = p;
      cout<< i << p << endl;
      for(int num :nums) { 
          cout << num << " ";
      }
    }