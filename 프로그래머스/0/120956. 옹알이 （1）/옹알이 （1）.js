function solution(babbling) {
    var answer = 0;
    var ong = ["aya", "ye", "woo", "ma"]
    
    answer =babbling.filter((a,i)=>a.includes(ong[0])||a.includes(ong[1])||a.includes(ong[2])||a.includes(ong[3])) 
    answer = answer.map((a,i)=>a.replaceAll(/aya|ye|woo|ma/g,1)).filter((a,i)=>a=="1"||a=="11"||a=="111"||a=="1111")
    // babbling.replaceAll("/aya|ye|woo|ma/g",1) //ong.filter((a,b,i)=>ong.push(a+ong[i]))
    
    return answer.length;
}