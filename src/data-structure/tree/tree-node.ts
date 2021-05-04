export default class TreeNode<T> {
  key!: T;
  left: Nullable<TreeNode<T>>;
  right: Nullable<TreeNode<T>>;

  /**
   *
   */
  constructor(
    key: T,
    left: Nullable<TreeNode<T>> = null,
    right: Nullable<TreeNode<T>> = null
  ) {
    this.key = key;
    this.left = left;
    this.right = right;
  }

  static of<K>(
    key: K,
    left: Nullable<TreeNode<K>> = null,
    right: Nullable<TreeNode<K>> = null
  ) {
    return new TreeNode(key, left, right);
  }
}
