import bubbleSort from '../index';

test('insertion sort test', () => {
  expect(bubbleSort([2, 1, 4, 5, 2, 20932, 1])).toEqual([
    1,
    1,
    2,
    2,
    4,
    5,
    20932,
  ]);
});
