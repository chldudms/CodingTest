function solution(s) {
    var s = s.split(""); 
    // var lo= s.toLowerCase()
    // var upp = s.toUpperCase()
  //  s = s.map((a,i)=>i%2==0||s[i-1]==" "?a.toUpperCase():a.toLowerCase())
    var c=0
    for(var i in s){ 
         if(s[i]==" ") c=-1 
        console.log(c)
            if(c%2==0){
               s[i]=s[i].toUpperCase()
            }
            else if(c%2==1) {
                s[i]=s[i].toLowerCase()
             }  
          c++
         
    }

    return s.join("")
}
