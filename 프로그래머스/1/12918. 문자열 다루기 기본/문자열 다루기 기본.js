function solution(s) {
    var answer = true;
    var patt = /[1-9]/
    var patt2 = /[a-z]/gi
    
    return !patt2.test(s)&&(s.length==4||s.length==6);
}