/**
 * 300. Longest Increasing Subsequence
 * (Medium)
 */

export class Solution {
    lengthOfLIS(nums: number[]): number {
        const dp = [nums[0]];
        let lis = 1;
        //dp is the LIS

        for (let i = 1; i < nums.length; i++) {
            const dpLen = dp.length;
            if (dp[dpLen - 1] < nums[i]) {
                dp.push(nums[i]);
            }
            else {
                const indexToReplace = indexToReplace(dp, nums[i]);
                dp[indexToReplace] = nums[i];
            }
        }

        return lis;
    };
    indexToReplace(dp: number[], val: number) {

    }
    binarySearch(arr: number[], target: number): number {
        let left = 0;
        let right = arr.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid]> target) {
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}