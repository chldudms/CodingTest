function solution(my_string) {
    var answer = [];
    answer= my_string.split("").map((a,i)=>Number(a))
    answer = answer.filter((a,i)=>a==answer[i]).sort((a,b)=>a-b)
    
    return answer;
}