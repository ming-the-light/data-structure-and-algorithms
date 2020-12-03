import sum from '../index';

test('sum test', () => {
  expect(sum([2, 1, 4, 5, 2, 20932, 1],7)).toBe(20947)
});
