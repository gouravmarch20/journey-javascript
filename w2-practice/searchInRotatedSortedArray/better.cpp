#include <iostream>
#include <vector>
#include <unordered_map>
// * O(n)
using namespace std;
class Solution
{
public:
    int search(vector<int> &nums, int target)
    {
        int s = 0, e = nums.size() - 1;

        while (s <= e)
        {
            if (nums[s] == target)
                return s;
            else if (nums[e] == target)
                return e;
            s++;
            e--;
        }

        return -1;
    }
};