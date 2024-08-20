function solution(rank, attendance) {
    var answer = 0;
    
    answer = rank.filter((a,i)=>attendance[i]==true).sort((a,b)=>a-b).slice(0,3)
    answer = answer.map((a,i)=>rank.indexOf(a))
   answer = answer[0]* 10000 + 100 * answer[1] + answer[2]
    
    return answer;
}
