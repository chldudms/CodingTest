function solution(x, n) {
    var answer = [x];
    
    for(var i=0;i<n-1;i++){
        answer.push(answer[i]+x)
    }
    
    return answer;
}