class Solution {
    public int solution(int[] num) {
        int answer = 0;
        String jak="";
        String hol = "";
        
        for(int i=0; i<num.length;i++){
             if(num[i]%2==0)
                jak += Integer.toString(num[i]);
            else
                hol += Integer.toString(num[i]);
            
            
                  
           
                 
        }
         answer = Integer.parseInt(hol) + Integer.parseInt(jak);
        
        return answer;
    }
}