function solution(s) {
    var answer = 0;
    var s= s.split(" ").map((a,i)=>a!="Z"?Number(a):a)
for(var i in s){
    if(s[i]!="Z"){  answer+=s[i];}
  if(s[i]=="Z"){ answer-=s[i-1]; }
}
 
    return answer;
}