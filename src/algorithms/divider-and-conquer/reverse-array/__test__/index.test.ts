import { reverse_iter, reverse_rec } from '../index'

function get_reverse<T>(xs: T[]): T[] {
  return [...xs].reverse()
}

test('reverse a array', () => {
  const arr1 = [1, 2, 42, 543, 1234],
    arr2 = [1, 23, 34, 43, 52, 65, 232],
    arr3 = 'shen kang'.split(''),
    arr4: [] = []

  // iteration version
  expect(reverse_iter(arr1)).toStrictEqual(get_reverse(arr1))
  expect(reverse_iter(arr2)).toStrictEqual(get_reverse(arr2))
  expect(reverse_iter(arr3)).toStrictEqual(get_reverse(arr3))
  expect(reverse_iter(arr4)).toStrictEqual(get_reverse(arr4))

  // recursion version
  expect(reverse_rec(arr1)).toStrictEqual(get_reverse(arr1))
  expect(reverse_rec(arr2)).toStrictEqual(get_reverse(arr2))
  expect(reverse_iter(arr3)).toStrictEqual(get_reverse(arr3))
  expect(reverse_rec(arr4)).toStrictEqual(get_reverse(arr4))
})
