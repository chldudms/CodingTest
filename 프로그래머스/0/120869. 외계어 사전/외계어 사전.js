function solution(spell, dic) {
    var answer = 0;
    
    answer = dic.map((a,i)=> spell.filter((b,j)=>a.includes(b)&&a.length==spell.length))
       answer= answer.filter((a,i)=>a.join()&&a.length==spell.length).join("")
  
    
    return answer.split(",").map((a,i)=>a==spell[i]?1:2).every(a=>a==1)==true?1:2  //spell.filter((a,i)=>)
}