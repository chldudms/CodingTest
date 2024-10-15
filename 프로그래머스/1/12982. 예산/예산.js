function solution(d, budget) {
    var answer = 0;
    var cnt=0;
    var d=d.sort((a,b)=>a-b)  //최대한 많은 부서    
    
    answer = d.forEach((a,i)=>{
   
   if(budget>=a){ budget-=a; cnt++;}
    
                      })
    return cnt
}