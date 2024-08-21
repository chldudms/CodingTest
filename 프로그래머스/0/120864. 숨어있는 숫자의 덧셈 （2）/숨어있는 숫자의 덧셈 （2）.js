function solution(my) {
    var answer = 0;
    
      let str = my.replace(/[^0-9]/g, " ").split(" ").map(a=>Number(a)).reduce((a,b)=>a+b)
    
    return str;
}