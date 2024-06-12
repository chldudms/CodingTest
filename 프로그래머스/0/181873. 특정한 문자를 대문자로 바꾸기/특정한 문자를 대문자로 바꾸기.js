function solution(my, alp) {
    var answer=[];
    answer = my.split("")
    answer = answer.map(a=>a!=alp?a:a.toUpperCase()).join("")
return answer
    
}