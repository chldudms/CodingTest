function solution(my) {
    var answer = [];
  // var arr = my.split("")
    
    for(i in my){
      answer.push(my.substr(i,my.length))
    }
    
    answer.sort()
  //  answer =answer.map((a,i)=> answer.splice(-1,i+1))
    
    return answer;
}