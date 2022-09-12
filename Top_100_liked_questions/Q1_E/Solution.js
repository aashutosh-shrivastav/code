/**
 * @param {string} s
 * @return {boolean}
 */


 var isValid = function(s) {
    let arr = [];
    let index = 0;
    for(let x in s)
    {
        switch(s.charAt(x))
            {
                case '(':arr.push(')'); break; 
                case '{':arr.push('}');break;
                case '[':arr.push(']');break;
                default:if(arr.length ==0 || arr[arr.length-1] != s.charAt(x)) return false;
                    else arr.pop();

            }
    }
    return arr.length==0;
};

console.log(isValid("()"));