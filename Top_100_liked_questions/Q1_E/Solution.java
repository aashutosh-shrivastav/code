import java.util.Stack;


class Solution {
     public static void main(String[] args) {
        String[] s = {"({[)","(((((((((((())))))))))}","{[()]}"};
        for(String str: s)
        {
            System.out.println(isValid_V2(str));
        }
    }
    public static boolean isValid_V1(String s) {
        Stack<Character> stk = new Stack<>();
        int index = 0;

        if(s.length() %2 !=0) {return false;}
        do{
            if(!stk.isEmpty() && ((s.charAt(index)==')' && stk.peek() == '(') 
            ||(s.charAt(index)=='}' && stk.peek() == '{') 
            ||(s.charAt(index)==']' && stk.peek() == '[')))
            {
                stk.pop();
            }
            else {
                stk.push(s.charAt(index));
            }

            index++;
        }
        while(index!=s.length());
        System.out.println(s.length() +" - "+stk.size());
        return stk.isEmpty();
    }
    public static boolean isValid_V2(String s) {
        //O(n) space and O(n)time 
        Stack<Character> stk = new Stack<>();
        int index = 0;
        do{
            switch(s.charAt(index))
            {
                case '(': stk.push(')');break;
                case '{': stk.push('}');break;
                case '[': stk.push(']');break;
                default: if(stk.isEmpty() || stk.pop() != s.charAt(index) ) {return false;}
            }
            index++;
        }
        while(index!=s.length());
        System.out.println(s.length() +" - "+stk.size());
        return stk.isEmpty();
    }
}