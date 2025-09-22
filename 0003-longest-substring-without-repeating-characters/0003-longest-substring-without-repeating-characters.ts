function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    let left = 0;
    let seen = {};
    for(let right = 0; right < s.length; right++){
        let char = s[right];
        if(seen[char] !== undefined){
            left = Math.max(left,seen[char] + 1);
        }
        seen[char] = right;
        longest = Math.max(longest, right - left + 1);
    }

    return longest
};