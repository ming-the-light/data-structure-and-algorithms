/*
    Question: Evaluating the longest common subsequence of two sequences
    思路：
    1. i < 0 or j < 0           ->     ""
    2. str1[i] = str2[j]        ->     str1[i] + LCS(i - 1, j - 1)
    3. str1[i] != str2[j]       ->     longest(LCS(i -1, j), LCS(i, j -1))
*/

function longest(str1: string, str2: string): string {
  return str1.length > str2.length ? str1 : str2
}

function _LCS(
  dp: string[][],
  str1: string,
  str2: string,
  i: number,
  j: number
): string {
  if (i < 0 || j < 0) return ''

  return str1[i] === str2[j]
    ? _LCS(dp, str1, str2, i - 1, j - 1) + str1[i] // O(i + j)
    : dp[i][j] != null
    ? dp[i][j]
    : (dp[i][j] = longest(
        _LCS(dp, str1, str2, i - 1, j),
        _LCS(dp, str1, str2, i, j - 1)
      ))
}

/**
 * evluating longest common subsequence
 * @param str1 string sequence 1
 * @param str2 string sequence 2
 * @returns longest common subsequence
 */
export function LCS(str1: string, str2: string): string {
  const i = str1.length - 1,
    j = str2.length - 1
  const dp: string[][] = []

  for (let x = 0; x <= i; x++) dp.push([])

  return _LCS(dp, str1, str2, i, j)
}
