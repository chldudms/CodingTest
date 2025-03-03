function solution(s) {
    //   if(/^[0-9]+$/.test(s)) return Number(s, 10);
    const replaceList = [/zero/ig,/one/ig,/two/ig,/three/ig,/four/ig,/five/ig,/six/ig,/seven/ig,/eight/ig,/nine/ig];
    for(let i =0; i<= replaceList.length; i++){
        s = s.replace(replaceList[i], i)
    }
    return parseInt(s);
}
