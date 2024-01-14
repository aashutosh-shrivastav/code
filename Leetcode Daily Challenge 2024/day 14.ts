/**
 * O(n) time
 * O(1) space as need 2 arr of 26 element not independent of n
 * @param word1 
 * @param word2 
 * @returns 
 */
function closeStrings(word1:string, word2:String):boolean {
    if (word1.length !== word2.length) {
        return false;
    }
    const arr1 = Array(26).fill(0);
    const arr2 = Array(26).fill(0);
    const a = "a".charCodeAt(0);
    for (let i = 0; i < word1.length; i++) {
        arr1[word1.charCodeAt(i) - a]++;
        arr2[word2.charCodeAt(i) - a]++;
    }
    for (let i = 0; i < 26; i++) {
        if ((arr1[i] === 0) !== (arr2[i] === 0)) {
            return false;
        }
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
