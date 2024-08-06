function solution(my_string, s, e) {
    var answer = '';
    var f = my_string.slice(0,s)
    var l = my_string.slice(e+1)
    
    answer = my_string.slice(s,e+1).split("").reverse().join("")
    
    return f+answer+l;
}