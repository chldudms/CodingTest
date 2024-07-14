function solution(numLog) {
    var answer = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };
   
    return numLog.slice(1).map((v, i) => {
        return answer[v - numLog[i]]
    }).join('')
    return answer;
}