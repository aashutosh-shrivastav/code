function minFallingPathSum(matrix: number[][]): number {
    const h = matrix.length;
    const w = matrix[0].length;
    for (let i = h - 2; i >= 0; i--) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = matrix[i][j]+ getMinValueFallingStep(i, j, matrix);
        }
    }
    let min = matrix[0][0];
    for (let i = 0; i < h; i++) {
        min = Math.min(matrix[0][i],min)
    }
    return min;
};

function getMinValueFallingStep(i: number, j: number, m: number[][]): number {
    const n = m.length;
    let min = m[i + 1][j];
    if (j - 1 >= 0) {
        min = Math.min(m[i + 1][j - 1], min);
    }
    if (j + 1 < n) {
        min = Math.min(m[i + 1][j + 1], min);
    }
    return min;
}