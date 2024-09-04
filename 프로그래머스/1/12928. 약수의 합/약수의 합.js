function solution(n) {
    var answer = 0;
    var count = 0
    
    for(var i= 0;i<=n;i++){
        if(i==1||n%i==0) answer+=i
    }
    
    return answer;
}