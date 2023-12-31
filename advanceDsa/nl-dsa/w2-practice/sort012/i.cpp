#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    // Your code here
    vector<int> nums{2, 0, 2, 1, 1, 0};
    int i = 0;
    int e = nums.size() - 1;
    int zp = 0;
    while (i <= e)
    {
        if (nums[i] == 0)
        {
            swap(nums[i], nums[zp]);
            zp++;
            i++;
        }
        else if (nums[i] == 2)
        {
            swap(nums[i], nums[e]);
            e--;
        }
        else
        {
            i++;
        }
    }
    for (auto &&i : nums)
    {
        cout << i << " ";
    }

    return 0;
}
