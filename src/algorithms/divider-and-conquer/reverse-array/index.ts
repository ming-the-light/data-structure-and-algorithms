/**
 * to swap two items of array
 * @param xs array
 * @param idx1 index 1
 * @param idx2 index 2
 */
function swap<T>(xs: T[], idx1: number, idx2: number) {
  const temp = xs[idx1];
  xs[idx1] = xs[idx2];
  xs[idx2] = temp;
}

function _reverse_rec<T>(xs: T[], low: number, high: number): T[] {
  if (low < high) {
    swap(xs, low, high);
    return _reverse_rec(xs, ++low, --high);
  }

  return xs;
}

/**
 * to reverse via recursion
 * @param xs array
 * @returns reversed array
 */
export function reverse_rec<T>(xs: T[]): T[] {
  return _reverse_rec([...xs], 0, xs.length - 1);
}

/**
 * to reverse via iteration
 * @param xs array
 * @returns reversed array
 */
export function reverse_iter<T>(xs: T[]): T[] {
  const r = [...xs];

  let high = r.length - 1,
    low = 0;

  while (low < high) {
    swap(r, low++, high--);
  }

  return r;
}
