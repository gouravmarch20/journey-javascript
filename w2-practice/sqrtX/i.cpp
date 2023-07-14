#include <iostream>
#include <vector>
#include <unordered_map>
#include <climits>
// * O(n)
using namespace std;
int mySqrt(int x)
{
    // Your code goes here
    int e = x;
    int s = 0;
    int m = (s + e) / 2;
    int near = -1;
    while (s <= e)
    {

        if (m * m == x)
        {
            return m;
        }
        else if (m * m > x)
        {
            e = m - 1;
        }
        else
        {
            near = m;
            s = m + 1;
        }
        m = (s + e) / 2;
    }
    return near;
}
int main()
{
    // Your code here
    int r = mySqrt(2);
    cout << r << endl;
    return 0;
}
