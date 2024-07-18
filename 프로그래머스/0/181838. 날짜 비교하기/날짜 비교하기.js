function solution(date1, date2) {
    var answer = 0;
    answer = date2.join("")-date1.join("")>0?1:0 //date1.map((a,i)=>date1[i]<date2[i]?1:0).includes(1)?1:0       //join("").search(1)!==-1?1:0
    return answer
}