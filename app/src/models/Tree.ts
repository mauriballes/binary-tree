import { Leaf } from './Leaf';
import { Edges, Nodes, NetworkData } from './Structures';

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
    this.insertRecursive(this._root, new Leaf(value));
  }
  private insertRecursive(leaf: Leaf, newLeaf: Leaf): void {
    if (newLeaf.value > leaf.value) {
      if (leaf.right === null) {
        leaf.right = newLeaf;
      } else {
        this.insertRecursive(leaf.right, newLeaf);
      }
    } else if (newLeaf.value < leaf.value) {
      if (leaf.left === null) {
        leaf.left = newLeaf;
      } else {
        this.insertRecursive(leaf.left, newLeaf);
      }
    }
  }
  remove(value: number): void {
    this._root = this.removeRecursive(this._root, value);
  }
  private removeRecursive(leaf: Leaf | null, value: number): Leaf | null {
    // if empty
    if (leaf === null) return null;
    // if the same value
    if (leaf.value === value) {
      // if child
      if (leaf.isChild()) return null;
      // if have one child
      if (leaf.left === null) return leaf.right;
      if (leaf.right === null) return leaf.left;
      // if have two childs
      let leftCount: number = this.countLeafRecursive(leaf.left);
      let rightCount: number = this.countLeafRecursive(leaf.right);
      // choose the biggest
      if (leftCount > rightCount) {
        this.insertRecursive(leaf.left, leaf.right);
        return leaf.left;
      } else {
        this.insertRecursive(leaf.right, leaf.left);
        return leaf.right;
      }
    }
    // Search in other place
    if (value > leaf.value) {
      leaf.right = this.removeRecursive(leaf.right, value);
    } else {
      leaf.left = this.removeRecursive(leaf.left, value);
    }
    return leaf;
  }
  countLeaf(): number {
    return this.countLeafRecursive(this._root);
  }
  private countLeafRecursive(leaf: Leaf | null, count = 0): number {
    if (leaf === null) return count;
    return this.countLeafRecursive(leaf.left, this.countLeafRecursive(leaf.right, count + 1));
  }
  find(value: number): Leaf | null {
    return this.findRecursive(this._root, value);
  }
  private findRecursive(leaf: Leaf | null, value: number): Leaf | null {
    if (leaf === null || leaf.value === value) return leaf;
    if (value > leaf.value)
      return this.findRecursive(leaf.right, value);
    else
      return this.findRecursive(leaf.left, value);
  }
  maxValue(): number | null {
    // if empty
    if (this._root === null) return null;
    // if not empty
    return this.maxValueRecursive(this._root);
  }
  private maxValueRecursive(leaf: Leaf): number {
    if (leaf.right === null) return leaf.value;
    return this.maxValueRecursive(leaf.right);
  }
  minValue(): number | null {
    // if empty
    if (this._root === null) return null;
    // if not empty
    return this.minValueRecursive(this._root);
  }
  private minValueRecursive(leaf: Leaf): number {
    if (leaf.left === null) return leaf.value;
    return this.minValueRecursive(leaf.left);
  }
  inOrder(): Array<Leaf> {
    return this.inOrderRecursive(this._root);
  }
  private inOrderRecursive(leaf: Leaf | null): Array<Leaf> {
    if (leaf === null) return [];
    let left: Leaf[] = this.inOrderRecursive(leaf.left);
    let actual: Leaf[] = [leaf];
    let right: Leaf[] = this.inOrderRecursive(leaf.right);
    return left.concat(actual.concat(right));
  }
  preOrder(): Array<Leaf> {
    return this.preOrderRecursive(this._root);
  }
  private preOrderRecursive(leaf: Leaf | null): Array<Leaf> {
    if (leaf === null) return [];
    let actual: Leaf[] = [leaf];
    let left: Leaf[] = this.preOrderRecursive(leaf.left);
    let right: Leaf[] = this.preOrderRecursive(leaf.right);
    return actual.concat(left.concat(right));
  }
  postOrder(): Array<Leaf> {
    return this.postOrderRecursive(this._root);
  }
  private postOrderRecursive(leaf: Leaf | null): Array<Leaf> {
    if (leaf === null) return [];
    let left: Leaf[] = this.postOrderRecursive(leaf.left);
    let right: Leaf[] = this.postOrderRecursive(leaf.right);
    let actual: Leaf[] = [leaf];
    return left.concat(right.concat(actual));
  }
  getNodesAndEdges(): NetworkData {
    let nodes: Nodes[] = [];
    let edges: Edges[] = [];
    let leafs: Leaf[] = this.inOrder();
    for (let leaf of leafs) {
      nodes.push(leaf.getNode());
      edges = edges.concat(leaf.getEdges());
    }
    return { nodes: nodes, edges: edges };
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
