function solution(code) {
    var ret = '';
    var mode = 0
 
    for(var i in code){
        if(mode==0)
            code[i]=="1"?mode=1:(i%2==0&&(ret+=code[i]))
        else if(mode=1)
            code[i]=="1"?mode=0:(i%2==1&&(ret+=code[i]))
      }  
    
    return ret.length==0?"EMPTY":ret;
}