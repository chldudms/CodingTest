function solution(arr, n) {
    var len = arr.length
    
    return  arr.map((a,idx)=>{
    if((len%2==1&&idx%2==0)||(len%2==0&&idx%2==1)){
        return a+n
    }
    else{
        return a}
    })
  
//     var odd = arr.map(a=>len%2===0?a+n:a)
//     var even = arr.map(a=>len%2===1?a+n:a)
    
//     return len%2===1?odd:even
}