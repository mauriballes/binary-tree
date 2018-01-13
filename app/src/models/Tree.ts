import { Leaf } from './Leaf';

export class Tree {
  // Attributes
  private _root: Leaf | null;
  // Constructor
  constructor(root?: Leaf) {
    this._root = root ? root : null;
  }
  // Methods
  insert(value: number): void {
    // if empty
    if (this._root === null) {
      this._root = new Leaf(value);
      return;
    }
    // if not empty
    this.insertRecursive(this._root, value);
  }
  private insertRecursive(leaf: Leaf, value: number): void {
    if (value > leaf.value) {
      if (leaf.right === null) {
        leaf.right = new Leaf(value);
      } else {
        this.insertRecursive(leaf.right, value);
      }
    } else if (value < leaf.value) {
      if (leaf.left === null) {
        leaf.left = new Leaf(value);
      } else {
        this.insertRecursive(leaf.left, value);
      }
    }
  }
  // toString
  toString(): string {
    if (this._root === null) {
      return "Tree";
    } else {
      return this._root.toString();
    }
  }
}
