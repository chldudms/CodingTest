function solution(arr1, arr2) {
    var answer = arr1
   
    for(var i=0 in arr1){
        for(var j=0 in arr1[i])
          //if(arr1[i][j]!=null&&arr2[i][j]!=null)
            answer[i][j]=arr1[i][j]+arr2[i][j]
    }
    
    return answer//.filter(a=>a.join("")!=null)
    }
