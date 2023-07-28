class Solution {
	/** 
	 * @param {number} num
	 * @return {string}
	 */
	checkNumber(num) {
		// Your code goes here
		if(num & 1){
			return "odd"
		}else{
			return "even"
		}
	}
};
