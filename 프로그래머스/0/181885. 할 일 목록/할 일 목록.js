function solution(todo_list, finished) {
    var answer = [];
    
  return todo_list.filter((v,i) => !finished[i]);
 
}