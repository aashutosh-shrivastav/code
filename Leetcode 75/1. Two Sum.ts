/**
 * This method creates a map to store integer occurences and loop each number in list 
 * to find its counterpart value, and return indexs of the pair for whcih sum is target.
 * @param nums 
 * @param target 
 * @returns 
 */
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number[] | undefined>();
    let out: number[] = [];

    for (let index = 0; index < nums.length; index++) {
        const idxArr = map.has(nums[index]) ? (map.get(nums[index])) : [];
        idxArr?.push(index);
        map.set(nums[index], idxArr)
    }
    for (let index = 0; index < nums.length; index++) {
        const val = target - nums[index];
        if (map.has(val)) {
            const idxArr = map.get(val) || [];
            if (val === nums[index] && idxArr.length > 1) {
                out = [idxArr[0], idxArr[1]];
                break;
            }
            else if(val !== nums[index]) {
                out = [index, idxArr[0]]
            }
        }
    }
    return out;
}