//https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// solution 1:
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 1; j <= nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};

// solution 2: Use HashTable
var twoSum = function (nums, target) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		let nedded = target - nums[i];
        let indexOfnedded = map.get(nedded)
		if (map.has(indexOfnedded)) {
			return [i, indexOfnedded];
		}

        map.set(nums[i], i)
	}
};
