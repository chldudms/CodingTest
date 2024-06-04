function solution(num_list) {
    var answer = 0;
    var mul = 1
    var sum =0
    
    for(var i=0;i<num_list.length;i++){
         mul*=num_list[i]
         sum+=num_list[i]
      }
      return sum**2<mul?0:1
    }