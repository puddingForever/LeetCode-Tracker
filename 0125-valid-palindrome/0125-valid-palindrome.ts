function isPalindrome(s: string): boolean {
 
    if(s.length <= 1) return true;
    s = s.replace(/[^a-zA-Z\d]/g,'').toLowerCase();

    if(s[s.length - 1] !== s[0]) return false;
  
    return isPalindrome(s.slice(1,-1))
};