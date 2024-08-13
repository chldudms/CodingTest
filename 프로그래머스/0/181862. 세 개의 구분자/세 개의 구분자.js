function solution(myStr) {
    var answer = [];
    
answer = myStr.replaceAll("b","a").replaceAll("c","a").split("a").filter((a,i)=>a.length!=0)
    
    return answer.length!=0?answer:answer.push("EMPTY");
}