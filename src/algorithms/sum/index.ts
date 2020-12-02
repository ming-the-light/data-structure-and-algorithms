/**
 * 计算总数
 * @param xs 待计算总数的数组
 * @param n 数组里元素的个数
 */
export default function sum<T>(xs: T[],n: number): any {
  return (
    n<1?0:sum(xs,n-1)+xs[n-1]
  )
}
