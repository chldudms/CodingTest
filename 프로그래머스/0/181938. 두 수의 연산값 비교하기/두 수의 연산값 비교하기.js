function solution(a, b) {
    var answer = 0;
    const ab = parseInt(a.toString()+b.toString())
    const ab2 = 2*a*b
    
    return ab>ab2?ab:ab2
    
}