function solution(my, m, c) {
    var answer = '';
   
// 정규식 패턴: 문자열을 chunkSize만큼 나누기
   answer = new RegExp(`.{1,${m}}`, 'g');  //문자열을 m만큼 나누기
  answer = my.match(answer);
    answer = answer.map((a,i)=>a[c-1]).join("")
    
   // answer = my.split("").filter((a,i)=>(i-1)%m==0).join("")
    
    return answer;
}