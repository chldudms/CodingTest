function solution(myString, pat) {
    var answer = '';
    var i  = myString.lastIndexOf(pat)
   //  myString =myString.split("")
  return myString.endsWith(pat)?myString:myString.substring(0,i+pat.length)
// return myString.substr(myString.length-pat.length,pat.length)!==pat?myString.substr(0,myString.length-pat.length):myString

}