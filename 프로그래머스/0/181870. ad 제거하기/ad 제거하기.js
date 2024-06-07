function solution(str) {
    var answer = [];
     
    answer = str.filter((a)=> a.indexOf("ad")==-1)
    
    return answer;
}