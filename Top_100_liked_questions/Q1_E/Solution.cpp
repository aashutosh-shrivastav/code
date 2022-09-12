#include <string>;
#include <stack>;
using namespace std;
class Solution {

public:bool isValid(string s) {
    // O(n) space time solution 
        if(s.size()%2 != 0 ) return false;
        stack<char> stk;
        for(char ch: s)
        {
            switch(ch)
            {
                case '(':stk.push(')');break;
                case '{':stk.push('}');break;
                case '[': stk.push(']');break;
                default: if(stk.empty() || stk.top() != ch) return false;
                    else stk.pop();
            }
        }
        
        return stk.empty();
    }
};
