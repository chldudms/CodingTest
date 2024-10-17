function solution(ta, p) {
    var answer = []
    var c = 0
    var t= ta.split("").map((a)=>Number(a))
    
    
    t.forEach((a,i)=>{
      var cnt = p.length
      answer.push(ta.substr(i,p.length)); 
    })
    answer = answer.filter((a,i)=>a.length==p.length).map((a)=>Number(a)).filter((a,i)=>Number(p)>=a)
    return answer.length
}