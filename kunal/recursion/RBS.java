public class RBS {

    public static void main(String[] args) {
        
        int[] arr = {6, 7, 8, 9, 1, 2, 3, 4,5};

        int target =4;
        int s = 0;
        int e = arr.length - 1;
        System.out.println(search(arr, target, s, e));
    }

    static int search(int[] arr, int target, int s, int e) { 

        int mid = s + (e - s) / 2;
        if (s > e) { 
            return -1;
        }

        if (arr[mid] == target) { 
            return mid;
        }
if(arr[s] <= arr[mid]) { 
    if(target >= arr[s] && target <= arr[mid]) { 
System.out.println("hello from 4");
        return search(arr, target, s, mid-1);
    } else { 
System.out.println("hello from 3");
        return search(arr, target, mid+1, e);
    }
}  

if(target >= arr[mid] && target <= arr[e]) { 
System.out.println("hello from 1");
    return search(arr, target, mid+1, e);

} else { 
System.out.println("hello from 2");

    return search(arr, target, s, mid-1);
}
    }
}
