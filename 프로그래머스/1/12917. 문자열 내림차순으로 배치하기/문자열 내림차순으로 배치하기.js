function solution(s) {
    var answer = '';
    
    s = s.split("").sort((a,b)=>a>b?-1:1)
    
    return s.join("");
}