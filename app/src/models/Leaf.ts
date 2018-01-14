import { Edges, Nodes } from './Structures';

export class Leaf {
  // Attributes
  private _left: Leaf | null;
  private _value: number;
  private _right: Leaf | null;
  // Constructor
  constructor(value = 0) {
    this._left = null;
    this._value = value;
    this._right = null;
  }
  // Setters and Getters
  get left(): Leaf | null { return this._left; }
  set left(left: Leaf | null) { this._left = left; }

  get value(): number { return this._value; }
  set value(value: number) { this._value = value; }

  get right(): Leaf | null { return this._right; }
  set right(right: Leaf | null) { this._right = right; }
  // Methods
  isChild(): boolean {
    return this._left === null && this._right === null;
  }
  getNode(): Nodes {
    return { id: this._value, label: String(this._value) };
  }
  getEdges(): Array<Edges> {
    let edges: Edges[] = [];
    if (this._left !== null) edges.push({ from: this._value, to: this._left.value, arrows: 'to' });
    if (this._right !== null) edges.push({ from: this._value, to: this._right.value, arrows: 'to' });
    return edges;
  }
  // toString
  toString(): string {
    return String(this._value);
  }
}
