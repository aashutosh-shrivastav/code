class Solution {
    public String maximumOddBinaryNumber(String s) {
        StringBuilder out = new StringBuilder(s);
        Integer count = 0;
        for(Integer j = out.length()-1; j >=0 ; j--){
            if(out.charAt(j) == '1'){
                count++;
                out.setCharAt(j,'0');
            }
        }
        
        if(count >= 1){
            out.setCharAt(out.length()-1,'1');
            count--;
        }
        Integer idx= 0;
        while(count>0)
        {
            out.setCharAt(idx,'1');
            idx++;
            count--;
        }
        
        return out.toString();
    }
}