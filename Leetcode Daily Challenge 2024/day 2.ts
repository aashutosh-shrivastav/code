/**
 * 2610. Convert an Array Into a 2D Array With Conditions
 * 
 * O(nlog(n)) time complexity solution
 */

function twoSum(nums: number[], target: number): number[] {
    const sortednums = nums.sort((a,b)=>a-b);
    let first = -1;
    for(let i=0;i<nums.length;i++){
        if(binarySearchIterative(sortednums,target - nums[i],)){
            first = i;
            console.log(first)
           break;
        }
    }
    if(first === -1){
        return [];
    }
    for(let i=0;i<nums.length;i++){
        if(first !== i && (nums[first] + nums[i]) === target){
            console.log(i)
            return [first, i];
        }
    }
    return []
};

function binarySearchIterative(arr: number[], x: number): boolean {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      return true;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}