function solution(num) {
    var answer = 0;
    answer = num.length>=11?num.reduce((a,b)=>a+b):num.reduce((a,b)=>a*b)
    
    return answer;
}