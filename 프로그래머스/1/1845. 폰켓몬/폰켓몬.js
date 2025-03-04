function solution(nums) {
    var answer = []
    var p = nums.length/2
    
    for(var i in nums){
        if(!answer.includes(nums[i]))
            answer.push(nums[i])
    }
    
    return Math.min(p,answer.length)
}