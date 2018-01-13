export class Leaf {
  // Attributes
  private _left: Leaf;
  private _value: number;
  private _right: Leaf;
  // Constructor
  constructor(value = 0) {
    this._value = value;
  }
  // Setters and Getters
  get left(): Leaf { return this._left; }
  set left(left: Leaf) { this._left = left; }

  get value(): number { return this._value; }
  set value(value: number) { this._value = value; }

  get right(): Leaf { return this._right; }
  set right(right: Leaf) { this._right = right; }
}
