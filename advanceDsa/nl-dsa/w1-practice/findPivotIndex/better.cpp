#include <iostream>
#include <vector> // vector header file to use vector in our program
using namespace std;

int pivotIndex(vector<int> &nums)
{
  int totalSum = 0;
  int len = nums.size();
  for (int i = 0; i < len; i++)
  {
    totalSum += nums[i];
  }
  int leftSum = 0;
  for (int i = 0; i < len; i++)
  {
    leftSum += nums[i];
    if (totalSum - leftSum == leftSum - nums[i])
      return i;
  }
  return -1;
}

int main()
{

  vector<int> arr{1, 7, 3, 6, 5, 6};
  cout << "present at index: " << pivotIndex(arr) << endl;

  return 0;
}