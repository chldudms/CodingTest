function solution(n) {
    var answer = [];
    for(var i=0;i<n;i++){
        if(n%i==1) answer.push(i)  
    }
    
    return Math.min(...answer);
}