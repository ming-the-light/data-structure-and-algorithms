import TreeNode from '../tree-node';

interface IBinaryTree<T> {
  root(): Nullable<TreeNode<T>>;
  height(): number;
  size(): number;
  [Symbol.iterator](): Generator;
}

export default abstract class BinaryTree<T> implements IBinaryTree<T> {
  protected _root: Nullable<TreeNode<T>>;

  constructor();
  constructor(root: TreeNode<T>);
  constructor(root?: TreeNode<T>) {
    if (root) {
      this._root = root;
    }
  }

  root(): Nullable<TreeNode<T>> {
    return this._root;
  }

  height(): number {
    return 1;
  }

  size(): number {
    return 1;
  }

  *iter(node: Nullable<TreeNode<T>>): Generator {
    if (!node) return;

    yield node.key;
    yield* this.iter(node.left);
    yield* this.iter(node.right);
  }

  [Symbol.iterator](): Generator {
    return this.iter(this._root);
  }
}
