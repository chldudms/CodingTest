function solution(numbers, n) {
    var answer = 0;
  
    for(var i of numbers){
    
    if(answer>n){
        return answer;}
     else
     answer +=i;
    
      } 
  
    
    
   return answer;
}