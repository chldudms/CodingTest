function solution(s) {
    var answer =[]
    var s= s.split("");
    var isx=0; 
    var notx=0;
    var p =0
     var x= s[0]   
       
    for(var i=0;i<s.length;i++){
           if(s[i]==x){    isx++;    }
           else{  notx++       }
        if(isx==notx) {
             answer.push(s.slice(p,i+1));
             isx = 0; notx=0; x=s[i+1]; p=i+1; 
      }

    }
        if(p<s.length)
       answer.push(s.slice(p,s.length)) 
    
    return answer.length;
}