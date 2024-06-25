function solution(n) {
    const arr = [];
    while(n!=1){arr.push(n); n=n%2==0?n/2:n*3+1;}; arr.push(1)
    
    // n이 1이 안될때까지 반복하며 조건에 따라 값을 설정하기 전에 배열에 값을 넣고 반복이 끝나면 1을 마지막으로 넣는다.
    // while(n != 1){ arr.push(n); n = (n % 2 == 0) ? n / 2 : (3 * n + 1)}; arr.push(1);
    return arr;
}