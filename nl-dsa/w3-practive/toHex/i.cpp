#include <iostream>
#include <vector>
using namespace std;

string toHex(int num, vector<char> hex)
{
    //TODO: WITHOUT UNSIGNED -1 NOT HANDLE
    unsigned n = num;
    string s = "";
    while (n != 0)
    {
        int r = n % 16;
        if (r < 0)
        {
            r = 16 + r;
        }
        s=hex[r]+s;

        n = n / 16;
    }
    return s;
};

int main()
{
    vector<char> hex = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};
    string s = toHex(26, hex);
    cout << s << endl;
    return 0;
}
