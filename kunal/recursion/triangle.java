public class triangle {
    public static void main(String[] args) {
        tri(4  ,0);
    }

    public static void tri(int r, int c) { 
        if(r == 0) { 
            return ;
        }

        if(c < r)  { 
            tri(r, c+1);
            System.out.print("*");
        }else { 
            tri(r -1, 0);
            System.out.println();
        }
    }
}

