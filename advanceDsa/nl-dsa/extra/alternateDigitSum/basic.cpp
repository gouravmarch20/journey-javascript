#include <vector>
#include <iostream>
using namespace std;

int alternateDigitSum(int n)
{
    vector<int> v;
    int k = n;
    while (k)
    {
        v.push_back(k % 10);
        k = k / 10;
    }


    //^ number in array --> reverse order 123 -> [3, 2 , 1]
    int sze = v.size();
    int l = 1;//^ basic (+ , - ) case , first mai add so => l as positive number
    int sum = 0;
    for (int i = sze - 1; i >= 0; i--)
    {
        sum += v[i] * l;
        l = l * (-1);//& positive * negative => negative , negative * pos => positive
    }

    return sum;
    // return 1;
}

int main()
{
    int n = 123;
    int result = alternateDigitSum(n);
    // cout << result << endl;
    return 0;
}
