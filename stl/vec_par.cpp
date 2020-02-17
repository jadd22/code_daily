#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

int total = 0;
void func(int n)
{
    int count = 0;
    while (n != 0)
    {
        n = n / 10;
        count++;
    }
    if (count % 2 == 0)
    {
        total++;
    }
    return;
}

int main()
{
    func(367);
    //cout << func(234) << endl;
    cout << total << "\n";
    cout << log10(367) << "\n";
    // for(int i : v) {
    //     cout << i << "\n";
    //     int a = pow(10,2);
    //     // cout << a << "\n";
    // }
    return 0;
}