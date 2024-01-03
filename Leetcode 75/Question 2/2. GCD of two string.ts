export class Solution{
    gcdOfStrings(str1: string, str2: string): string {
        if(str1+str2!== str2+str1)
        return "";
        
        return str1.substring(0,this.gcd(str1.length,str2.length))
    }

    /**My first approach
     * space O(1)
     * time O(n)
     * Not so optimized solution
     * @param str1 
     * @param str2 
     * @returns 
     */
     gcdOfStrings1(str1: string, str2: string): string {
        if(str1.length<str2.length){
            const s = str1;
            str1 = str2;
            str2 = s;
        }
        const gcdStrLen = this.gcd(str1.length, str2.length);
        const gcdStr = str1.substring(0, gcdStrLen);
        const k1 = str1.length/gcdStrLen;
        const k2 = str2.length/gcdStrLen;

        console.log(str1.split(gcdStr),str1.split(gcdStr).length)
        console.log(str2.split(gcdStr),str2.split(gcdStr).length)

        if(str1.split(gcdStr).length-1 === k1 && str2.split(gcdStr).length-1 === k2){
            return gcdStr;
        }
        return "";
    };
    
    //  gcd(a:number,rem:number):number{
    //     const remainder = a%rem;
    //     if(remainder === 0)
    //     {
    //         return rem;
    //     }
    //     return this.gcd(rem,remainder)
    // }
    gcd(a:number,rem:number):number{
        return rem === 0? a: this.gcd(rem, a%rem) 
    }
}