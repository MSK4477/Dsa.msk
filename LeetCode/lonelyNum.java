import java.util.*;

class lonelyNum {
    public List<Integer> findLonely(int[] nums) {
        Map<Integer, Integer> obj = new HashMap<>();
        List<Integer> arr = new ArrayList<>();

        // Populate the frequency map
        for (int num : nums) {
            obj.put(num, obj.getOrDefault(num, 0) + 1);
        }

        // Check for lonely numbers
        for (int num : nums) {
            if (obj.get(num) == 1 && !obj.containsKey(num - 1) && !obj.containsKey(num + 1)) {
                arr.add(num);
            }
        }

        return arr;
    }

    public static void main(String[] args) {
        lonelyNum sol = new lonelyNum();
        int[] nums = {10, 6, 5, 8};
        List<Integer> result = sol.findLonely(nums);
        System.out.println(result); // Output: [10, 8]
    }
}
