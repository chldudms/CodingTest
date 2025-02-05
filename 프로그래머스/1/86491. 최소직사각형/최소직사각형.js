function solution(size) {
  var  answer = []
  for(var i in size){
          if(size[i][0]<size[i][1]) [size[i][0],size[i][1]]=[size[i][1],size[i][0]]
      
  }
    var w = size.map((a,i)=>size[i][0])
    var h = size.map((a,i)=>size[i][1])
  return Math.max(...w)* Math.max(...h)
}