function solution(number) {
    var answer = 0;
    
    for(var i=0;i<number.length;i++){
       for(var j=i+1;j<number.length;j++){
           for(var x=j+1;x<number.length;x++){
               if(number[i]+number[j]+number[x]==0) answer++
       }
    }
    }
    
    return answer;
}