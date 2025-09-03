function reverseVowels(s: string): string {
 let start = 0;
    let end = s.length-1;
    let arr = s.split("");
    const mySet = new Set(['a','e','i','o','u','A','E','I','O','U'])

    while(start <= end){

        while(!mySet.has(arr[start]) && start < end){
            start++;
        }

        while(!mySet.has(arr[end]) && start < end){
            end--;
        }

        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }

    return arr.join("")
    
};