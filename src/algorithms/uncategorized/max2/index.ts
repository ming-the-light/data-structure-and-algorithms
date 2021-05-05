export default function max2(xs: number[]): number[] {
  const n = xs.length
  if (n <= 1) return xs

  const results = [xs[0]]

  let cur,
    i = 1
  for (i = 1; i < n; i++) {
    cur = xs[i]
    if (cur >= results[0]) {
      results[1] = results[0]
      results[0] = cur
    } else if (!results[1] || cur > results[1]) {
      results[1] = cur
    }
  }

  return results
}

export function max2_recursion(
  xs: number[],
  results: number[] = [],
  i: number = 0
): number[] {
  if (xs.length === 0 || i >= xs.length) return results

  if (!results[0] || xs[i] >= results[0])
    return max2_recursion(xs, [xs[i], results[0]], ++i)
  else if (!results[1] || xs[i] > results[1])
    return max2_recursion(xs, [xs[i], results[0]], ++i)
  else return max2_recursion(xs, results, ++i)
}
