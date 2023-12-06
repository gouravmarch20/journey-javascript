#include <iostream>
#include <vector> // vector header file to use vector in our program
using namespace std;
int bs(int n)
{
    vector<int> arr;
    int totalSum = 0;
    for (int i = 1; i <= n; i++)
    {
        arr.push_back(i);
    }
    //

    for (int i = 0; i < arr.size(); i++)
    {
        totalSum += arr[i];
    }
    // total sum
    for (int i = 0; i < arr.size(); i++)
    {
        int rightWiseSum = 0;
        for (int j = 0; j < i; j++)
        {
            rightWiseSum += arr[j];
        }

        if (rightWiseSum == totalSum - rightWiseSum - arr[i])
        {
            return arr[i];
        }
    }

    return -1;
}
int main()
{

    // vector<int> arr{1, 2, 6, 9, 11};
    int n = 8;
    cout << "present at index: " << bs(n) << endl;

    return 0;
}