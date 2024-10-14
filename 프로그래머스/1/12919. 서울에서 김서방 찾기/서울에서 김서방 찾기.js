function solution(seoul) {
    var answer = '';
    
    answer = seoul.map((a,i)=>a=="Kim"?i:null).filter(a=>a!=null)
    
    return "김서방은 "+answer+"에 있다";
}