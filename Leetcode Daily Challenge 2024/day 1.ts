//455. Assign Cookies
/**
 * Maximize no of satisfied childrens 
 * 
 * O(n log(n)) solution
 * @param g greed array
 * @param s cookie size array
 * @returns 
 */
function findContentChildren(g: number[], s: number[]): number {
    let out = 0;
    let i = 0;
    let j = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    console.log(g, s);
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            // s[j] = 0;
            out++;
            i++;
        }
        j++;
    }
    return out;
};