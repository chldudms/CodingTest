function solution(s, n) {
   var alpha = Array.from({length:26},(i,a)=>String.fromCharCode(97+a))
   alpha = [...alpha,...alpha]
   var arrl = s.split("")
   var answer = []
   
   for(var i=0;i<arrl.length;i++){
         if(arrl[i]==" "){ answer.push(" ")}
       for(var j=0;j<alpha.length-26;j++){
           if(arrl[i].toLowerCase()==alpha[j].toLowerCase()){
              if(arrl[i]==arrl[i].toLowerCase()){
                   answer.push(alpha[j+n].toLowerCase())
              }
              else{
                   answer.push(alpha[j+n].toUpperCase())
              }
           }
    }
}
   
    return answer.join("")
}