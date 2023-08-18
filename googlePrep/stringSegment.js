var wordBreak = function (s, wordDict) {

    let dict = new Set(wordDict)
    for (let i = 0; i < s.length; i++) {
        let first = s.substring(0, i)
        if (dict.has(first)) {
            let second = s.substring(i)
            if (second.length === 0) {
                return true
            }
            return wordBreak(second, wordDict)
        }
    }

    return false
};


let canSegmentString2 = function (s, dictionary) {
    for (let i = 1; i < s.length + 1; i++) {
        let first = s.substr(0, i);
        if (dictionary.has(first)) {
            let second = s.substr(i);
            if (second.length === 0) {
                return true;
            }
            if (dictionary.has(second)) {
                return true;
            }
            if (canSegmentString(second, dictionary)) {
                return true;
            }
        }
    }
    return false;
};