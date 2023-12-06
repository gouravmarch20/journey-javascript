// class Solution {
// public:
//     vector<int> maxOfSubArray(vector<int>& arr, int k) {
//         // Your code here    
//         	int j, max;
//     int n = arr.size();
//     vector <int> res ;

// 	for (int i = 0; i <= n - k; i++) {
// 		max = arr[i];

// 		for (j = 1; j < k; j++) {
// 			if (arr[i + j] > max)
// 				max = arr[i + j];
// 		}
//        res.push_back(max);
// 	}
//     return res;
//     }
// };