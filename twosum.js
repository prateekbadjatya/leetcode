// two sum problem

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

 
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Brut force soution

// const twoSum =(arr, target)=> {
//     const result =[]
//     for(let i = 0 ; i < arr.length; i++){
//       for(let j = i+1;j<arr.length; j++){
//         if(arr[i]+ arr[j] === target) {
//           result.push([i, j])
//           break
//         }
//       }
//       if(result.length>0){
//         break
//       }
//     }
    
//     return result.flat()
    
// }

// console.log(twoSum([1,5,3,54], 6))





// x + y = target
// => y = target - x
function twoSum(nums, target) {
  const map = new Map();
  
  for(let i = 0; i<nums.length; i++){
     const diff = target - nums[i] //give second number
     if(map.has(diff)){
       return [map.get(diff), i];
     }
     map.set(nums[i] , i)
  }
  return []
}

const nums = [2,7,11,15], target = 9

console.log(twoSum(nums, target))