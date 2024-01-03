export class Solution {

/**
 * Return the total number of laser beams in the bank.
 * 
 * O(1) space
 * O(m*n) time where m is length of bank arr and n is length of each string in bank.
 * this beats 91% in user in memory usage.
 */
numberOfBeams1(bank: string[]): number {

    let acc = 0;
    let val = 0;
    for (let i = 0; i < bank.length; i++) {
        let count = 0;
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === '1') {
                count++;
            }
        }
        if (count > 0) {
            if (val === 0) {
                val = count;
            }
            else {
                acc = acc + (val * count);
                val = count;
            }
        }
    }
    return acc;
};
/**Time complexity O(m*n)
 * beats 95% on runtime
 * beats 75% on space usage
 * 
 * @param bank 
 * @returns 
 */
numberOfBeams(bank: string[]): number {
    let acc = 0;
    let val = 0;
    for (let i = 0; i < bank.length; i++) {
        const count = this.countOnes(bank[i]);
        if (count > 0) {
            acc = acc + (val * count);
            val = count;
        }
    }
    return acc;
};

countOnes(str: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            count++;
        }
    }
    return count;
}

}
