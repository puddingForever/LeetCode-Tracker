function capitalizeTitle(title: string): string { 
     let arr = title.split(" ");

    for(let i=0; i<arr.length; i++){
        if(arr[i].length > 2) {
           arr[i] =  arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase();
        }else{
            arr[i] = arr[i].toLowerCase();
        }
    }

    return arr.join(" ");
};