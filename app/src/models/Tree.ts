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
  inOrder(): Array<number> {
    return this.inOrderRecursive(this._root);
  }
  private inOrderRecursive(leaf: Leaf | null): Array<number> {
    if (leaf === null) return [];
    let left: number[] = this.inOrderRecursive(leaf.left);
    let actual: number[] = [leaf.value];
    let right: number[] = this.inOrderRecursive(leaf.right);
    return left.concat(actual.concat(right));
  }
  preOrder(): Array<number> {
    return this.preOrderRecursive(this._root);
  }
  private preOrderRecursive(leaf: Leaf | null): Array<number> {
    if (leaf === null) return [];
    let actual: number[] = [leaf.value];
    let left: number[] = this.preOrderRecursive(leaf.left);
    let right: number[] = this.preOrderRecursive(leaf.right);
    return actual.concat(left.concat(right));
  }
  postOrder(): Array<number> {
    return this.postOrderRecursive(this._root);
  }
  private postOrderRecursive(leaf: Leaf | null): Array<number> {
    if (leaf === null) return [];
    let left: number[] = this.postOrderRecursive(leaf.left);
    let right: number[] = this.postOrderRecursive(leaf.right);
    let actual: number[] = [leaf.value];
    return left.concat(right.concat(actual));
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
