
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
   for(let i=0; i<flowerbed.length; i++){
        if(i === 0 && flowerbed[i] === 0 ){ // first element 
            if(flowerbed.length > 1 && flowerbed[i+1] === 0 ){
                   flowerbed[i] = 1;
                  n--;
            }else if(flowerbed.length === 1){
                 flowerbed[i] = 1;
                  n--;
            }
        }else if(i !==0 && flowerbed[i] === 0
                        && flowerbed[i+1] === 0 
                        && flowerbed[i-1] === 0){
            flowerbed[i] = 1;
            n--;
        }else if( i === flowerbed.length-1 && flowerbed[i-1] === 0
                                           && flowerbed[i] === 0){
            flowerbed[i] = 1;
            n--;
        }
    }
   return n<=0;
    
};



