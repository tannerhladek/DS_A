/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let res = [...nums];
    let l = 0;
    let r = nums.length - 1;
    let i = nums.length - 1;

    while (i >= 0) {
        let n1 = Math.abs(nums[l]);
        let n2 = Math.abs(nums[r]);

        if (n2 > n1) {
            res[i] = n2 * n2;
            r--
        } else {
            res[i] = n1 * n1;
            l++
        }
        i--
    }

    return res
};
