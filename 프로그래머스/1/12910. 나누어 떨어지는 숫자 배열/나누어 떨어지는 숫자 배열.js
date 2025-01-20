function solution(arr, divisor) {
    var answer = [];
    
    for(var i of arr){
        if(i%divisor==0) answer.push(i)
    }
    
    return answer.length==0?[-1]:answer.sort((a,b)=>a-b);
}