#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>
using namespace std;
void characterReplacement(string s, int k)
{
    int n = s.size();
    int maxfreq = 0;
    int len = 0;
    unordered_map<char, int> freq;
    for (int i = 0; i < n; i++)
    {
        int c = s[i];
        freq[c]++;
        maxfreq = max(maxfreq, freq[c]);
        if (len - maxfreq < k)
        {
            len++;
        }
        else
        {
            char oldestChar = s[i - len];
            freq[oldestChar]--;
        }
    }
    cout << len << endl;
    // return len;
}
int main()
{
    // string s = "AABABBA";
    string s = "ABAB";
    int k = 2;
    characterReplacement(s, k);
    return 0;
}