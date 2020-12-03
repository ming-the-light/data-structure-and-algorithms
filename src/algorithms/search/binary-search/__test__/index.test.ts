import binarySearch from '../index';

test('bubble sort test', () => {
  const arr1 = [1, 2, 42, 543, 1234],
    arr2 = [1, 23, 34, 43, 52, 65, 232];
  const arr3: [] = [];

  expect(binarySearch(arr1, 1234)).toBe(4);
  expect(binarySearch(arr1, 1)).toBe(0);
  expect(binarySearch(arr1, 543)).toBe(3);
  expect(binarySearch(arr2, 23)).toBe(1);
  expect(binarySearch(arr3, 1)).toBe(-1);
});
