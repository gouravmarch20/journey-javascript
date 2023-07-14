#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

int main()
{
    // Your code here
    vector<int> prices = {7, 1, 5, 3, 6, 4};
    int maxProfit = 0;
    int minPrice = INT_MAX;

    for (int i = 0; i < prices.size(); i++)
    {
        minPrice = min(minPrice, prices[i]);//~ l1 : min , max function --> if case error < , > possibility hard to debug this
        maxProfit = max(maxProfit, prices[i] - minPrice);
    }
    cout << maxProfit;
    return 0;
}
