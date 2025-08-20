function gcdOfStrings(str1: string, str2: string): string {
    

    // if reverse is not match , there's no pattern 
    if(str1 + str2 !== str2 + str1) return "";


    return str1.substr(0,gcd(str1.length,str2.length));


};

// str1 = "ABABAB", str2 = "ABAB" 6 4
function gcd(a : number, b : number):number{
     return a === 0 ? b : gcd( b % a , a);
}

