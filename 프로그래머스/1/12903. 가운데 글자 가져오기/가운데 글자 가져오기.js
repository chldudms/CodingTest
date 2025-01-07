function solution(s) {
    //var s = s.replaceAll(" ","")

    var len = Math.round(s.length/2)
    
   return s.length%2==0?s[len-1]+s[len]:s[len-1];
    
}