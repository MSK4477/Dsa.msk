public class findEle {
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        System.out.println(findInd(arr, 5, 0));
System.out.println(findI(arr, 5, 0));
    } 

    static boolean findInd(int [] arr, int target, int index) {

        if(index == arr.length)  { 
            return false;
        }

        return arr[index] == target || findInd(arr, target, index+1);

    }

    static int findI(int [] arr, int target, int index) {

        if(arr[index] == target) { 
            return index;
        } 
        else  {
           return  findI(arr, target, index + 1);
        }
    }
   
    
    
}
