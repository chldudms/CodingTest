function solution(num) {
    var answer = 0;
    var num = num

 for(var i=0;i<500;i++){
     if(num==1){answer= i; break; } 
      num= num%2==0?num/2:num*3+1
    // console.log(num)
 }

    return num!=1?-1:answer;
}