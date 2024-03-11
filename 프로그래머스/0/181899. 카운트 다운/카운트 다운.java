class Solution {
    public int[] solution(int start, int end) {
      int sum =start-end; 
        int answer[]=new int[sum+1];
        
    //    int sum[]=new int[];
      
       // answer.length= sum;
        
        for(int i=0;i<=sum;i++){
            answer[i]=start-i;
        }return answer;
    }
}