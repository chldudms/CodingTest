function solution(num_list, n) {
    var answer = [];
    
    answer1 = num_list.slice(0, n)
    answer2= num_list.slice(n, n.length)
    return answer2.concat(answer1)
    
 
    
}