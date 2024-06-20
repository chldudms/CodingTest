function solution(my) {
    var answer = [];
    
    answer = my.split("x").sort((a,b)=>  a > b ? 1 : -1).filter(a=>a.length!=0)
    
    return answer;
}