function solution(my) {
    var answer = [];
    
   // answer = my.split(" ").reduce((a,c)=>a.concat(isNaN(c)?c:),[])
    answer = my.split(" ").filter(a=>a.length>0)
    
    return answer;
}