function solution(array, commands) {
    var answer = [];
    var idx = commands.map((a,i)=>commands[i][2])
    answer = commands.map((a,i)=>array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b))
    
    answer = idx.map((a,i)=>answer[i][a-1]) 
    
    return answer;
}