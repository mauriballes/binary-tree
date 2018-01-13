import { Leaf } from './Leaf';

export class Tree {
  // Attributes
  private _root: Leaf | null;
  // Constructor
  constructor(root?: Leaf) {
    this._root = root ? root : null;
  }
}
