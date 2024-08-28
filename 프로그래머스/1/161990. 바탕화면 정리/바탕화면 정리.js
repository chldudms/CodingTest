function solution(wallpaper) {
  const list = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if ("#" === wallpaper[i][j]) {
        list.push([i, j]);
      }
    }
  }

  const xList = [];
  list.forEach((v) => xList.push(v[0]));
  const yList = [];
  list.forEach((v) => yList.push(v[1]));

  const res = [Math.min(...xList), Math.min(...yList), Math.max(...xList) + 1, Math.max(...yList) + 1];
  return res;
}