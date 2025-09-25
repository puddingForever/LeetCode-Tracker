function titleToNumber(columnTitle: string): number {
    let res = 0;
    for(let i=0; i<columnTitle.length; i++){
        let charCode = columnTitle.charCodeAt(i) - 64;
        res = res * 26 + charCode;
    }

    return res;
};