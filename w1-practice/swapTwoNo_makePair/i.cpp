#include <iostream>
#include <utility>
using namespace std;
class Solution
{
public:
    pair<int, int> swapNumbers(int a, int b)
    {
        int temp = a;
        a = b;
        b = temp;
        return make_pair(a, b);
    }
};

int main()
{
    int a, b;
    a = 4;
    b = 5;

    Solution solution;
    pair<int, int> swapped = solution.swapNumbers(a, b);

    cout << "After swapping: a = " << swapped.first << ", b = " << swapped.second << endl;

    return 0;
}
