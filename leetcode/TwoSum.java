import java.util.Arrays;

public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        int n[] = new int[2];
        for(int i = 0; i < nums.length; i++) {
            for(int j = i+1; j < nums.length; j++) {
                if(target == nums[j] + nums[i]) {
                    n[0] = i;
                    n[1] = j;
                    break;
                }
            }
        }	
        return n;
    }
    
    public static void main(String args[]) {
    	TwoSum s = new TwoSum();
    	int[] arr = {2,7,11,15};
    	System.out.println(Arrays.toString(s.twoSum(arr, 9)));
    }

}


