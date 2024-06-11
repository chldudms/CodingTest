function solution(num) {
    var answer = [];
    answer = num.sort((a,b)=> a-b).splice(0,5);
    
    return answer;
}