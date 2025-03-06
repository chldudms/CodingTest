function solution(strings, n) {
    var answer = [];
     answer= strings.sort((a,b)=>a.charAt(n)>b.charAt(n)?1:-1).sort((a,b)=>a.charAt(n)==b.charAt(n)?a>b?1:-1:a) //map((a,i)=>a.charAt(n)).sort()  
     
    return answer;
}