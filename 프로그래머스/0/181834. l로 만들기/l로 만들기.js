function solution(myString) {
    var answer = '';
    answer = myString.split("").map((a,index)=> a.charCodeAt()<"l".charCodeAt()?"l":a).join("")
    
    return answer; //
}