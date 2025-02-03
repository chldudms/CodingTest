function solution(s) {
    var answer = [];
    var dp = [];
    var s = s.split("")
    
    for(var i in s){
        if(!dp.includes(s[i])){
           dp.push(s[i])
            answer.push(-1) } 
        else {
            answer.push(i-s.indexOf(s[i]))
            s.splice(s.indexOf(s[i]),1,0)
}
    }
    
    return answer;
}