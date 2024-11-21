function solution(phone) {
    var answer = []
    var answer= phone.substring(-4,phone.length-4).split("").map(a=>a="*").join("")//
    +phone.slice(-4)
    //answer = answer.slice(-4)
    return answer;
}