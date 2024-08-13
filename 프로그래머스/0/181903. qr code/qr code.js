function solution(q, r, code) {
    var answer = '';
    
    answer = code.split("").filter((a,i)=>i%q==r).join("")
    
    
    return answer;
}