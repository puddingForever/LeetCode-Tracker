function isSubsequence(s: string, t: string): boolean {
     const counter = t.split("").reduce((acc,el) => el === s[acc] ? acc += 1 : acc  ,0)
    return s.length === counter
};