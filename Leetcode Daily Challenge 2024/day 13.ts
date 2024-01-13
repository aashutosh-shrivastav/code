/**
 * TC:O(n)
 * SC:O(n)
 * @param s 
 * @param t 
 * @returns 
 */
function minSteps(s: string, t: string): number {
    const sArr = charCounts(s);
    const tArr = charCounts(t);

    let diff = 0;
    for (let i = 0; i < 26; i++) {
        diff += Math.abs(sArr[i] - tArr[i]);
    }
    return diff / 2;
};

function charCounts(s: string): number[] {
    const a = 'a'.charCodeAt(0);
    const arr = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - a]++;
    }
    return arr;
}

function minStepsOriginalApproach(s: string, t: string): number {
    const map:{[key:string]:number} = {};
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (map[s[i]]) {
            map[s[i]] = map[s[i]] + 1;
        }
        else {
            map[s[i]] = 1
        }
        if (map[t[i]]) {
            map[t[i]] = map[t[i]] - 1;
        }
        else {
            map[t[i]] = -1
        }
    }
    let out = 0;
    for (const [key, val] of Object.entries(map)) {
        if (val > 0) {
            out+=val;
        }
    }
    return out;
};