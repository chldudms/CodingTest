function solution(arr) {
    var answer = 1;
   for(var i in arr){
       for(var j in arr){
          if(arr[i][j]!=arr[j][i])
              answer = 0
       }
   }

    return answer
}