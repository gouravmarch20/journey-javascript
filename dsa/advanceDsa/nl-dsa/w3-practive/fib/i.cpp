#include <iostream>
#include <vector>
using namespace std;

int fib(int n, vector<int> &dp)
{
    // base case
    if (n == 0 || n == 1)
    {
        return n;
    }
    if (dp[n] != -1)
        return dp[n];

    int a = fib(n - 1, dp);
    int b = fib(n - 2, dp);
    dp[n] = a + b;
    return (a + b);
}

int main()
{

    int n = 5;
    vector<int> dp(n + 1, -1);

    int ans = fib(n, dp);
    cout << n << "th term is: " << ans << endl;

    return 0;
}
