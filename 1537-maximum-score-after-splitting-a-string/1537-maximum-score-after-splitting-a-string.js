/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    var hana = 0;
    var young = 0;
    var best = -1;
    // get left 
   for(var i=0; i<s.length-1; i++){
        if(s.charAt(i) === '0'){
           young++;
        }else if(s.charAt(i) === '1'){
            hana++;
        } // 11100  ->  11111 - 00  => 111 
        // 00 11111

        // FIND WHEN YOUNG IS BIGGER THAN HANA 
        // WHEN HANA GETS BIGGER IT RETURNS NEGATIVE 
        // THERE FOR , Math.max(best, young - hana ) will return best possible num 
        best = Math.max(best, young-hana); 
       
   }
    // get right 
    if(s.charAt(s.length-1) === '1'){
        hana++;
    }
    // return max 
    return best + hana ;
};