function solution(my, index) {
    var answer = '';
  
    for(i in index){
    answer += my.substr(index[i],1)}
    
    return answer;
}