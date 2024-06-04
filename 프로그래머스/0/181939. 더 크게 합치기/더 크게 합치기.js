function solution(a, b) {
    var answer = 0;
    const a_str = a.toString()
    const b_str = b.toString()
    
    
    answer = parseInt(a_str+b_str)>parseInt(b_str+a_str) ?a_str.concat("",b_str):b_str.concat("",a_str)
    
    return parseInt(answer);
}