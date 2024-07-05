function solution(a, d, included) {
    var answer = 0
    var index = 0
    index = included.map((a,i)=>i)
    answer = index.filter((a)=>included[a]!=false)
    answer = answer.map((i)=>a+d*i).reduce((a,b)=>a+b)
    
    return answer;
}