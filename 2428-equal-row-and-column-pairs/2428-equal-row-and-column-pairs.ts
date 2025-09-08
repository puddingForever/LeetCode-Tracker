function equalPairs(grid: number[][]): number {
    const myMap = new Map();
    let res = 0;

    for(let i=0; i<grid.length; i++){
        let row = JSON.stringify(grid[i]);
        myMap.set(row, (myMap.get(row) || 0 ) + 1)
    }

    // check if row exists in column 
    for(let i=0; i<grid.length; i++){
        let arr = [];
        for(let j=0; j<grid.length; j++){
            arr.push(grid[j][i])
        }

        let col = JSON.stringify(arr);

        if(myMap.has(col)){
            res += myMap.get(col);
        }
        
    }

    return res;
};