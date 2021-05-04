/**
 * 冒泡排序
 * @param xs 待排序的数组
 */
export default function bubbleSort<T>(xs: T[]): T[] {
  const n = xs.length;
  let i, j, temp;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (xs[j] > xs[j + 1]) {
        // swap
        temp = xs[j];
        xs[j] = xs[j + 1];
        xs[j + 1] = temp;
      }
    }
  }

  return xs;
}
