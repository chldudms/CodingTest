function solution(my, parts) {
    var answer = '';
    
    for(i in my){
    answer+= my[i].split("").slice(parts[i][0],parts[i][1]+1).join("");}
    return answer;
}