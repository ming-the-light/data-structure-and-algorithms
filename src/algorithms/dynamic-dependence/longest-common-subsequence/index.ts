/*
    1. i < 1 or j < 1  ->  ""
    2. str1[i] = str2[j]               -> str1[i] + LCS(i - 1, j - 1)
    3. str1[i] != str2[j]              ->  longest(LCS(i -1, j), LCS(i, j -1))
*/

function longest(str1: string, str2: string) {
    return str1.length > str2.length ? str1 : str2;
}

function _LCS(str1: string, str2: string, i: number, j: number): string {
    if (i < 0 || j < 1) return '';
    if (str1[i] === str2[j])
        return _LCS(str1, str2, i - 1, j - 1) + str1[i];
    else
        return longest(_LCS(str1, str2, i - 1, j), _LCS(str1, str2, i, j - 1));
}

/**
* longest common subsquence
*/
export function LCS(str1: string, str2: string): string {
   return _LCS(str1, str2, str1.length - 1, str2.length - 1); 
}
