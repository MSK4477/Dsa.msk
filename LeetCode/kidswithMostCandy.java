
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
// leetcode 1431
public class kidswithMostCandy {
    public static void main(String[] args) {
        int[] candies = {12, 1, 12};
        int extraCandies = 10;
        List<Boolean> result = kidsWithCandies(candies, extraCandies);
        System.out.println(result);
    }

    public static List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int max = Arrays.stream(candies).max().getAsInt();
        List<Boolean> result = new ArrayList<>();

        for (int candy : candies) {
            result.add(candy + extraCandies >= max);
        }

        return result;
    }
}
