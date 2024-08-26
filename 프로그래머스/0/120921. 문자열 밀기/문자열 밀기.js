
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
const solution = (A, B) => {
    if (A === B) return 0;

    let str = [...A]
    let cnt = 0;

    for (let i = 0; i < A.length - 1; i++) {
        str.unshift(str.pop());
        cnt++;

        if (str.join('') === B) break;
    }

    return str.join('') === B ? cnt : -1;
}