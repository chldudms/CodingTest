function solution(wp) {
    const fx = wp.findIndex(row => row.includes("#"));
    const lx = wp.length - 1 - wp.slice().reverse().findIndex(row => row.includes("#")) + 1;
    const fy = Math.min(...wp.map(row => row.indexOf("#")).filter(idx => idx !== -1));
    const ly = Math.max(...wp.map(row => row.lastIndexOf("#")).filter(idx => idx !== -1)) + 1;
    
    return [fx, fy, lx, ly];
}
