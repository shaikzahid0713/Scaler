#include <iostream>
#include <vector>

using namespace std;



bool linearSearch(vector<int> arr, int key) {
    int n = arr.size(); 
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) 
            return true;
    }
    return false;
}


int main() {
    // int arr[10] = {3, 6, 9, 12, 14, 19, 20, 23, 25, 27};
    vector<int> arr = {3, 6, 9, 12, 14, 19, 20, 23, 25, 27};

    int target = 19;


    bool elementFound = linearSearch(arr, target);
    cout << "Element Found is " << elementFound << "\n";
}