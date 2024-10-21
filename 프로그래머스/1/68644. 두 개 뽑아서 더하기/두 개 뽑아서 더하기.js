function solution(numbers) {
    var answer = [];
    
    for(var i in numbers){
        for(var j in numbers){
            if(!answer.includes(numbers[i]+numbers[j])&&i<numbers.length&&i!==j)
            answer.push(numbers[i]+numbers[j])
        }
    }
    
    return answer.sort((a,b)=>a-b);
}