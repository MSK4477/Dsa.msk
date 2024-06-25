// Absolutely! In Kadane's Algorithm, at each step i in the array nums, 
// we decide whether to continue with the current element nums[i] 
// alone or to extend the previous subarray (maxEnd) by including nums[i]. 
// Here’s how the decision is made:

//leetcode 53

public class MaxSubArray {
    public static void main(String[] args) {
        MaxSubArray solution = new MaxSubArray();
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        int maxSubarraySum = solution.maxSubArray(nums);
        System.out.println("Maximum subarray sum: " + maxSubarraySum);
    }

    public int maxSubArray(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        
        int maxEndingHere = nums[0];
        int maxSoFar = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
}

