function solution(arr, k) {
    
    var hol = arr.map((a)=>a*k)
    var jjak = arr.map((a)=>a+k)
    
    return k%2==1?hol:jjak;
}