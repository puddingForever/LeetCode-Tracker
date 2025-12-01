/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let radiants = [];
   let dires = [];
   let senateArr = senate.split("");
    
   for(let i=0; i<senateArr.length; i++){
        if(senateArr[i] === "R"){
            radiants.push(i);
        }else{
            dires.push(i);
        }
   }
    
   while( radiants.length > 0 && dires.length > 0 ){
        let R = radiants.shift();
        let D = dires.shift();
       
       if( R > D ){ // dire 가 radiant를 ban 할 수 있다. 
           dires.push(D + senateArr.length );
       }else if(D > R){ // radiant가 dire를 ban 할 수 있다. 
           radiants.push(R + senateArr.length);
       }
   
   }

    return radiants.length >  dires.length  ? 'Radiant' : 'Dire';
    
};