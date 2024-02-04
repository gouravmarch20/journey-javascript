#include <climits>
#include <vector>
#include <iostream>

class Solution {
public:
    int maxProfit(std::vector<int>& prices) {
        int maxProfit = 0;
        int minPrice = INT_MAX;

        for (int i = 0; i < prices.size(); i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            }
            if (prices[i] - minPrice > maxProfit) {
                maxProfit = prices[i] - minPrice;
            }
        }

        return maxProfit;
    }
};

int main() {
    std::vector<int> prices = {7, 1, 5, 3, 6, 4};
    Solution solution;
    int result = solution.maxProfit(prices);
    std::cout << "Max Profit: " << result << std::endl;

    return 0;
}
