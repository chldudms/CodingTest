function solution(s){
    var s = s.split("");

    var p = s.filter((a,i)=>a=="p"||a=="P").length
    var y = s.filter((a,i)=>a=="y"||a=="Y").length
    
    return y==p;
}