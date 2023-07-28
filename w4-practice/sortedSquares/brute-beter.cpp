#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> sortedSquares(vector<int> &nums)
{
    vector<int> res;
    for (int i = 0; i < nums.size(); i++)
    {
     // ^ must need push_back ->  ans[i] = nums[i] * nums[i] wrong 

        res.push_back(nums[i] * nums[i]);
        // res[i] = nums[i] * nums[i];
    }

    std::sort(res.begin(), res.end());
    return res;
}

int main()
{
    vector<int> nums = {-4, -2, 0, 3, 5};
    vector<int> result = sortedSquares(nums);

    // Output the sorted squares
    for (int num : result)
    {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
