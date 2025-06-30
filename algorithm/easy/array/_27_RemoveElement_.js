//https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// solutions 1: two points
var removeElement = function (nums, val) {
	let k = 0;
	let left = 0,
		right = nums.length - 1;

	while (left < right) {
		if (nums[left] !== val && nums[right] !== val) {
            k++;
		}
        left++;
        right--;

	}
	return k;
};
