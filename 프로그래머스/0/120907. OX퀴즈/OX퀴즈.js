function solution(quiz) {
    var answer = [];
    var cal = []
   answer= quiz.join(" ").split(" ")
    cal = answer.filter((a,i)=>a=="+"||a=="-")
    answer = answer.filter((a,i)=>a!="+"&&a!="-"&&a!="=").map(Number)
answer= cal.map((a,i)=>a=="+"&&answer[i*3]+answer[i*3+1]==answer[i*3+2]?"O":"X"&&a=="-"&&answer[i*3]-answer[i*3+1]==answer[i*3+2]?"O":"X")
    
    return answer;
}