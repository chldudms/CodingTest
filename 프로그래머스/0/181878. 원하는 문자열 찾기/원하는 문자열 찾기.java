class Solution {
    public int solution(String my, String pat) {
        int answer = 0;
        
        if(my.toUpperCase().contains(pat.toUpperCase()))
            return 1;
        else 
          return  0;
    }
}