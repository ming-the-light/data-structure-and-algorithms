/**
 * 二分查找
 * @param xs 要搜索的数组
 * @param item 搜索项
 * @return 搜索结果索引，若无该项则返回 -1
 */
export default function binarySearch<T>(xs: T[], item: T): number {
  let low = 0,
    high = xs.length - 1,
    mid;

  while (high >= low) {
    mid = Math.ceil((low + high) / 2);

    if (xs[mid] === item) return mid;
    else if (xs[mid] > item) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}
