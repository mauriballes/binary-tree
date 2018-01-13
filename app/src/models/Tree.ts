import { Leaf } from './Leaf';

export class Tree {
  // Attributes
  private _root: Leaf;
  // Constructor
  constructor(root = new Leaf()) {
    this._root = root;
  }
}
