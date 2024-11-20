function solution(arr) {
    var answer = [];
    
  answer=  arr.filter((a,i)=>a!==Math.min(...arr))
  
    
    return answer.length==0?[-1]:answer;
}