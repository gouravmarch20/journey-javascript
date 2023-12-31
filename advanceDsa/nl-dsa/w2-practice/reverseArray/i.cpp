#include <iostream>
#include <vector>

using namespace std;

int main()
{
    // Your code here
    vector<int> arr{1, 2, 3, 4, 5};
    int i = 0;
    int j = arr.size() - 1;
    while (i <= j)
    {
        swap(arr[i], arr[j]);
        i++;
        j--;
    }
    for (int i = 0; i < arr.size(); i++)
    {
        cout << arr[i] << " ";
    }

    return 0;
}
