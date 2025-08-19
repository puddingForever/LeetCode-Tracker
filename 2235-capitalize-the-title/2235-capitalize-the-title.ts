function capitalizeTitle(title: string): string { //capiTalIze tHe titLe 
    let arr = title.split(" "); // [capiTalIze,tHe]
    if(arr.length === 1){
        if(arr[0].length > 2){ 
            return arr[0][0].toUpperCase() + arr[0].substr(1).toLowerCase();  // Capitalize 
        }else{
             return arr[0].toLowerCase();
        }
    } 

    let last = arr[arr.length-1]; // tHe 
    let front =  capitalizeTitle(arr.slice(0,-1).join(" ")); // capiTalIze  Capitalize 

    if(last.length > 2){   
       last = last[0].toUpperCase() + last.slice(1).toLowerCase(); // The 
    }else{
        last = last.toLowerCase();
    }

   
    return front + " " +last; // Capitalize tHe
};