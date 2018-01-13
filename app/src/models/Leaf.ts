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
}
