function solution(strArr) {
    var answer = [];
    answer = strArr.map((a,index)=>index%2==0?a.toLowerCase():a.toUpperCase())
    return answer;
}