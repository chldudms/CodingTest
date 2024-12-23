function solution(x) {
    var answer = true;
    var y = x.toString().split("").map(a=>Number(a)).reduce((a,b)=>a+b)
    
    return x%y==0?true:false;
}