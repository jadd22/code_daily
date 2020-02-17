#include <array>
#include <algorithm>
#include <iostream>
#include <iterator>
#include <string>
using namespace std;

int main() {

    array <int, 5> arr1 {1,2,3,4,5};

    cout << arr1.size() << "\n";

    for(auto i : arr1) {
        cout << arr1[i] << " ";
    }

    return 0;


}