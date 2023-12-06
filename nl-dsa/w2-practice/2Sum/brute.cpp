#include <iostream>
#include <vector>
#include <unordered_map>
// * O(n)
using namespace std;
vector<int> twoSum(vector<int> &nums, int target)
{
    unordered_map<int, int> map;
    for (int i = 0; i < nums.size(); i++)
    {
        int pairIndex = target - nums[i];
        if (map.count(nums[i]))
        {
            return {i, map[nums[i]]};
        }
        map[pairIndex] = i;
    }
    return {};
}

int main()
{
    // Your code here
    vector<int> nums = {3, 2, 4};
    int target = 6;
    vector<int> result = twoSum(nums, target);
    // Print the indices of the two numbers
    // for (int i : result)
    // {
    //     cout << i << " ";
    // }
    return 0;
}
