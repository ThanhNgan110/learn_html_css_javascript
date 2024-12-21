/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x < 0) {
		// negative number not is palindrome number
		return false;
	}

	let xorigin = x;
	let reverse = 0;

	while (x > 0) {
		reverse = reverse * 10 + (x % 10);
		x = Math.floor(x / 10);
	}
	return reverse === xorigin;
};
