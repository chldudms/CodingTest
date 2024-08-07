function solution(intStrs, k, s, l) {
    var answer = [];
    var str = intStrs.map((a)=>parseInt(a.substr(s,l))).filter(a=>a>k)
    
    
    return str;
}