#include <iostream>

using namespace std;
int main() {
      int i = 0, S = 1; 
        do
        { 
    	        if ( i % 4 != 0) S += i + 5;
                i += 2; 
  	}while (i < 10);
     cout << S;
}