/**
 * 插入排序
 * @param xs 数组
 */
export default function insertionSort<T>(xs: T[]): T[] {
  let i, j, cur;
  for (i = 1; i < xs.length; i++) {
    j = i;
    cur = xs[i];
    // 从后往前遍历每一项，如果大于 cur，那么该项往后移动一位。
    while (--j >= 0 && xs[j] > cur) {
      xs[j + 1] = xs[j];
    }

    xs[j + 1] = cur;
  }

  return xs;
}
