/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	let roman = new Map();
	roman.set("I", 1);
	roman.set("V", 5);
	roman.set("X", 10);
	roman.set("L", 50);
	roman.set("C", 100);
	roman.set("D", 500);
	roman.set("M", 1000);

	let ans = 0;

	for (let i = 0; i < s.length; i++) {
		let current = roman.get(s[i]);
		let next = roman.get(s[i + 1]); 

		if (current < next) {
              ans -= current;
        } else {
               ans += current;
        }
	}

	return ans;
};
