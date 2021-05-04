import BinaryTree from '../binary-tree';
import TreeNode from '../tree-node';

interface IBinarySearchTree<T> {
  insert(key: T): this;
  delete(key: T): this;
}
/**
 * Binary Search Tree
 */
export class BinarySearchTree<T>
  extends BinaryTree<T>
  implements IBinarySearchTree<T> {
  constructor();
  constructor(root: TreeNode<T>);
  constructor(root?: TreeNode<T>) {
    if (root) {
      super(root);
    }
  }

  static of<K>(root: TreeNode<K>): BinarySearchTree<K> {
    return new BinarySearchTree(root);
  }

  private _insertNode(
    node: Nullable<TreeNode<T>>,
    newNode: TreeNode<T>
  ): TreeNode<T> {
    if (!node) {
      return newNode;
    }
    if (newNode.key >= node.key)
      node.right = this._insertNode(node.right, newNode);
    else node.left = this._insertNode(node.left, newNode);
    return node;
  }

  insert(key: T): this {
    this._root = this._insertNode(this._root, TreeNode.of(key));
    return this;
  }

  insertNode(node: TreeNode<T>): this {
    this._root = this._insertNode(this._root, node);
    return this;
  }

  private _delete(node: Nullable<TreeNode<T>>, key: T): Nullable<TreeNode<T>> {
    if (!node) return node;

    if (node.key === key) {
      return node.left ? this._insertNode(node.right, node.left) : node.right;
    }

    if (node.left && key <= node.left.key) {
      return (node.left = this._delete(node.left, key));
    }

    if (node.right && key >= node.right.key) {
      return (node.right = this._delete(node.right, key));
    }

    return node;
  }

  delete(key: T): this {
    this._root = this._delete(this._root, key);
    return this;
  }
}
const tree = BinarySearchTree.of(TreeNode.of(50));

console.time('insert');
for (let i = 0; i < 10; i++) {
  tree.insert(Math.ceil(Math.random() * 100));
}
console.timeEnd('insert');

for (const item of tree) {
  console.log(item);
}
// console.log(tree);
