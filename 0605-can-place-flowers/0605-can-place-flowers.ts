function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // 1.if i have no flower 
    // 2.if i am the start of the index else if previous flower is not planted 
    // 3. if i am end of the array else if next flower is planted 

    for(let i=0; i<flowerbed.length; i++){
        if(flowerbed[i] === 0 && 
           (i === 0 || flowerbed[i-1] === 0 ) &&
           (i === flowerbed.length - 1 || flowerbed[i+1] === 0)
           ){
            n--;
            flowerbed[i] = 1;
            if(n === 0) return true;
           }
    }

    return n <= 0 ;
};