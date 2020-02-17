#include <iostream>
#include <vector>
using namespace std;

//ACCESS 
// at(), [], front(), back(), data()


//Modifier
// push_back(), insert(), emplace(), pop_back(), emplace_back(), resize(), swap(), erase(), clear()

void print_element(vector<int> &v) 
{
    for(int i = 0; i < v.size(); i++) 
    {
        cout << v.at(i) << "\n";
    } 
}


int main()
{

    vector<int> v;
    vector<int> v1 (5,1);
    vector<int> v2 = {1,2,3,4,5};
    vector<int> v3 {2,3,1,12};

    print_element(v);
    print_element(v1);
    print_element(v2);
    print_element(v3);
    return 0;

}