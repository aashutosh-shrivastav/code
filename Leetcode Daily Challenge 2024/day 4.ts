// Minimum Number of Operations to Make Array Empty
/**
 * O(n) time complexity
 * and O(n) space
 * @param nums 
 * @returns 
 */
function minOperations(nums: number[]): number {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const count = map.has(nums[i]) ? map.get(nums[i]) + 1 : 1;
        map.set(nums[i], count);
    }
    let operationCount = 0;
    for (let [key, val] of map) {
        const mod3 = val % 3;
        if (val === 1) return -1;

        if (mod3 === 0) {
            operationCount = operationCount + (val / 3)
        }
        else {
            operationCount = operationCount + Math.floor(val / 3) + 1;
        }
    }
    return operationCount;
};