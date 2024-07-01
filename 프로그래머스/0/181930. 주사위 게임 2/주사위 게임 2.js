function solution(a, b, c) {
    var answer = a+b+c;
    var one = ( a + b + c)*(a ** 2 + b ** 2 + c ** 2)
    var all = answer*(a ** 2 + b ** 2 + c ** 2)*(a ** 3 + b**3 + c**3)
 
    if(a!=b&&a!=c&&b!=c){
        
    }
    else if(a==b&&a==c&&b==c){
        answer = all
    }
    else{
        answer= one}
    
    return answer;
}