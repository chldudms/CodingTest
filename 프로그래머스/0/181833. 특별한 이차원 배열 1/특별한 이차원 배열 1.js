function solution(n) {
    const answer = Array(n).fill(Array(n).fill(0));
    
    return answer.map((a,index)=>{
        return answer.map((a,i)=>index==i?1:0)
        
    })

}