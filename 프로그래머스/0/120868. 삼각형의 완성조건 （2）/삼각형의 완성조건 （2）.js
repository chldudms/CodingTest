function solution(sides) {
    var answer = 0;
    var arr = []
    var max = Math.max(...sides)
    var min = Math.min(...sides)
    for(var i =0;i<=max;i++){
        if(i+min>max)answer++
    }
    
     for(var i=max+1;i<max+min;i++){
          if(max+min>i)answer++; arr.push(i)
     }
    
    return answer;
}