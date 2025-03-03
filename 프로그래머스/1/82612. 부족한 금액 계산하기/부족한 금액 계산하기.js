function solution(price, money, count) {
    var answer = -1;
   answer=  Array.from({length:count},(a,i)=>a=price*(i+1)).reduce((a,b)=>a+b)

    return answer>money?answer-money:0
}