function halvesAreAlike(s: string): boolean {
    let val = 0;
    const strLen = s.length;
    const map = {
        'a':1, 'e':1, 'i':1, 'o':1, 'u':1, 'A':1, 'E':1, 'I':1, 'O':1, 'U':1
    }
    for(let i=0;i<strLen/2;i++){
        if(map[s[i]]){
            val++;
        }
        if(map[s[strLen-i-1]]){
            val--;
        }
    }

    return val===0;
};