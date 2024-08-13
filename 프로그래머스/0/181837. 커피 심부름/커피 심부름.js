function solution(order) {
    var answer = 0;
    
    order.map((a,i)=>a.includes("latte")?answer+=5000:answer+=4500)
    
    return answer;
}