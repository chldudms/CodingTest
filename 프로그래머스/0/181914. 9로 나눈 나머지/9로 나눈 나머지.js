function solution(number) {
    var answer = 0;
    
    answer = number.split("").map(str => parseInt(str, 10)).reduce((a,b)=>a+b)
    
    return answer%9;
}