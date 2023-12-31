
#include <iostream>
#include <vector>
using namespace std;
vector<int> removeDuplicates(vector<int> nums)
{
    vector<int> arr;
    for (int i = 0; i < nums.size(); i++)
    {

        while (nums[i] == nums[i + 1])
        {
            i++;
        }
        arr.push_back(nums[i]);
    }

    return arr;
}
int main()
{

    vector<int> arr{0, 0, 0, 1};
    removeDuplicates(arr);

    return 0;
}