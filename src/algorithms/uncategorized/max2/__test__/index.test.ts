import max2, { max2_recursion } from '../index';

test('max2 test', () => {
  expect(max2([2, 1, 4, 5, 2, 20932, 1])).toEqual([20932, 5]);
  expect(max2_recursion([2, 1, 4, 5, 2, 20932, 1])).toEqual([20932, 5]);
});
