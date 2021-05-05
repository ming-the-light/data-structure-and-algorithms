import { LCS } from '../../longest-common-subsequence'

test('longest common subsquence', () => {
  expect(LCS('abcdefg', 'kjaoicbdgf')).toBe('acdg')
  expect(LCS('a', '')).toBe('')
  expect(LCS('adb', 'bda')).toMatch(/^(a|d|b)$/)
  expect(LCS('computer', 'complement')).toMatch(/^comp(e|t)$/)
})
