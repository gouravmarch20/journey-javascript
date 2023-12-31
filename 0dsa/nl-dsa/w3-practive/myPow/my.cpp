#include <iostream>
#include <vector>

using namespace std;

void myPow(double x, int n)
{
    int positiveBase = abs(n);
    double ans = 1.0;
    while (positiveBase / 2 >= 1)
    {
        if (positiveBase & 1)
        {
            ans *= x;
        }
        positiveBase /= 2;
        x *= 2;
    }
    double res = n > 0 ? 1 / ans : ans;
    cout << res << endl;
};

int main()
{
    myPow(.5555, 0);
    return 0;
}
