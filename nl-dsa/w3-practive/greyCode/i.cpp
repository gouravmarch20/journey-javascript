#include <iostream>
#include <vector>

using namespace std;

vector<string> generate(int n)
{
    if (n == 1)
    {
        return {"0", "1"};
    }
    vector<string> ans;
    vector<string> temp = generate(n - 1);
    for (int i = 0; i < temp.size(); i++)
    {
        ans.push_back("0" + temp[i]);
    }
    for (int i = temp.size() - 1; i >= 0; i--)
    {
        ans.push_back("1" + temp[i]);
    }
    return ans;
}
int main()
{
    int n = 2;
    vector<string> garyString = generate(n);
    vector<int> ans;
    for (auto i : garyString)
    {
        ans.push_back(stoi(i, 0, 2));
    }
    for (auto val : ans)
    {
        cout << val << " ";
    }

    return 0;
}
