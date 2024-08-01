function solution(my, indices) {
    var answer = [];
  //  my = my.split("")
 //   answer = my.filter((a,i)=> a!== my[indices[i]])
    for(var i=0;i<my.length;i++){
        if(!indices.includes(i)) answer.push(my[i])
    }
    
    
    return answer.join("");
}