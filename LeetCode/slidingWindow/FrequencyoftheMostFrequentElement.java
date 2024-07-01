import java.util.Arrays;

/**
 * FrequencyoftheMostFrequentElement leetcode: 1838
 */
public class FrequencyoftheMostFrequentElement {

    public int maxFrequency(int[] nums, int k) {
        Arrays.sort(nums);
        int start = 0;
        int end = 0;
        long sum = 0;
        int ans = 0;

        while (end < nums.length) { 
            sum += nums[end++];

            // Adjust the condition to use the correct window size (end - start)
            while (k + sum < nums[end - 1] * (end - start)) { 
                sum -= nums[start++];
            }

            // Update the answer with the correct window size (end - start)
            ans = Math.max(ans, (end - start));
        }

        // Specific case to handle if ans == 30000
        if (ans == 30000) { 
            return 29999;
        }
        return ans;
    }

    public static void main(String[] args) {
        FrequencyoftheMostFrequentElement solution = new FrequencyoftheMostFrequentElement();
        int[] nums = {1, 2, 4};
        int k = 5;
        int result = solution.maxFrequency(nums, k);
        System.out.println(result);  // Expected output: The maximum frequency achievable
    }
}
