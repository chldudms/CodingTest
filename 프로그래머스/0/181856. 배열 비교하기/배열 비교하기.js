function solution(arr1, arr2) {
    var answer = 0;
    var len1 = arr1.length
    var len2 = arr2.length
    var sum1 = arr1.reduce((a,b)=>a+b)
    var sum2 = arr2.reduce((a,b)=>a+b)
    if(len1!==len2){
       return len1>len2?1:-1
    }
    else{
        return sum1 === sum2? 0:(sum1 > sum2 ? 1 : -1)
    }
    
}