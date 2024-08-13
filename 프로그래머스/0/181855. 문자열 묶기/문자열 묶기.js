function solution(strArr) {
    var answer = 0;
    var max =0
    var len=[]
 //   answer = strArr.map((a,i)=>)
    answer= strArr.map((a,i)=>len[a.length]=0)
           strArr.map((a,i)=>len[a.length]++)
    for(var i of len){
        if(max<i)
            max=i;
        answer = max
    }
    return max;
}