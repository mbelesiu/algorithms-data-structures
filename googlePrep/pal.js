
var countSubstrings = function (s) {
    let count = 0;

    for(let i = 0; i < s.length; i++){
        helper(i,i)   // Even Palindromics Substrings
        helper(i,i+1) // Odd Palidromic Substrings
    }
    
    return count


    function helper(low, high){
        while (low >= 0 && high <= s.length && s[low] === s[high]){
            count++
            low--
            high++
        }
    }
};


console.log(countSubstrings("aaa"))