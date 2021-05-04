import { LCS } from '../index';

test('longest common subsquence', () => {
    expect(LCS('abcdefg', 'kjaoicbdgf')).toBe('acdg');
    expect(LCS('a', '')).toBe('');
    expect(LCS('a', 'b')).toBe('');
});
