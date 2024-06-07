function solution(num) {
    var answer = {};
    answer = num.split("")
    
    var answer =answer.map(s=> parseInt(s))
    var answer = answer.reduce(function(a,c){ return a+c})
    
   return answer;
}