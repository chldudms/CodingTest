function solution(arr) {
    var answer = [];
    var min = 100
  
    for(var i in arr){
        if(arr.length<=2**i){
            min = 2**i
            break
        }  
    }
        while(arr.length!=min){
            arr.push(0)
        }
  
    
    return arr;
}