function solution(ab, s) {
    var answer = 123456789;
    
    answer = ab.map((a,i)=>s[i]==true?ab[i]:-ab[i]).reduce((a,b)=>a+b)
    
    return answer;
}