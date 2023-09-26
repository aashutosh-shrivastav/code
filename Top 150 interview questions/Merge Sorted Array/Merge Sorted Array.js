 function merge (nums1, m, nums2, n) {
    let i = m-1;
    let j= n-1;
    let k = m+n-1;

    while(j>=0){
        if(i>=0 && nums1[i]>nums2[j]){
            nums1[k--] = nums1[i--];
        }
        else{
            nums1[k--]=nums2[j--];
        }
    }
};

// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
let nums1 = [4,5,6,7,7,8,9,10,12,0,0,0,0,0,0], m = 9, nums2 = [3,5,6,8,11,13], n = 6
merge(nums1,m,nums2,n)
console.log(nums1)