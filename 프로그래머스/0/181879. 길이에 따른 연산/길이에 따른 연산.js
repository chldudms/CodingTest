function solution(num_list) {
    let answer = 0;
    if (num_list.length <= 10) { 
        answer = num_list.reduce((prev, next) => {
            return prev * next;    }, 1);
        // answer = 1;
        // num_list.forEach(a => {
        //     answer *= a;
        // })
    } 
    
    else {
        num_list.forEach((a) => {
            answer += a;
        });
    }
    return answer;
}