function solution(todo, finished) {
    var answer = [];
   answer= todo.filter((a,index)=>finished[index]===false)
    
    return answer;
}