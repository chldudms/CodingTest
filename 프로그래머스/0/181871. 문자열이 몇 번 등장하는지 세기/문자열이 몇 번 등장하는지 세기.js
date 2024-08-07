function solution(myString, pat) {
    var answer = 0;
    for( var i in myString){
      if(myString.substr(i,pat.length)==pat)
          answer++
    }
    
    
    return answer;
}