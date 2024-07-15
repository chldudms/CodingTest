function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    answer = arr.filter((a,i)=> a!==arr[i+1])
    return answer
    
}