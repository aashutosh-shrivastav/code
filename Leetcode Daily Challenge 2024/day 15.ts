function findWinners(m: number[][]): number[][] {
    const lc = new Map<number,number>();  

    for(let i=0;i<m.length;i++){
        lc.set(m[i][1],(lc.get(m[i][1]) || 0)+1);
        lc.set(m[i][0],lc.get(m[i][0])||0);
    }
    const onlyWinners = [];
    const oneTimeLoser = [];

    for(const [key,val] of lc){
        const loseCount = lc.get(key);
        if(loseCount===1){
            oneTimeLoser.push(key);
        }
        else if(loseCount===0){
            onlyWinners.push(key);
        }
    }
    return [onlyWinners.sort((a,b)=>a-b),oneTimeLoser.sort((a,b)=>a-b)]
};