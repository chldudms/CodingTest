function solution(food) {
    var answer = [];
     food.shift()
    var fcnt = food.map((a,i)=>Math.floor(a/2))
    
    for(var i of fcnt){
        for(var j=0;j<i;j++){
          answer.push(fcnt.indexOf(i)+1)
        }
          fcnt[fcnt.indexOf(i)]=0
    }
    var a = answer
    
  return [...a,0,...a.reverse()].join("");
    
   
    return food
}