function reverseVowels(s: string): string {

    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']); 
    let arr = s.split(""); 
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        // if they are vowels, break and swap 
        while(start < end && !vowels.has(arr[start])){
            start++;
        }

         while(start < end && !vowels.has(arr[end])){
            end--;
        }

        [arr[start],arr[end]] = [arr[end], arr[start]];
        start++;
        end--;   
    }
    return arr.join("")
    
};