class Solution:
    def isValid(self, s: str) -> bool:
        dict = {'(':')','{':'}','[':']',};
        stack :list= []
        for ch in s:
            if(dict.get(ch,None) != None):
                stack.append()(dict[ch])
            elif (len(stack) == 0 or ch != stack.pop() ):
                return False;
        else:
            return  len(stack) ==0;

    def isValid_Optimal(self,s:str) -> bool :
        dict = {'(':')','{':'}','[':']',};
        stk = [];
        for ch in s:
            if ch in dict:
                stk.append(dict[ch]);
            elif not stk or ch is not stk.pop():
                return False;

        return len(stk) == 0