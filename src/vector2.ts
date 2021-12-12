export class Vector2 {
  x: number;
  y: number;

  static ZERO = createVector(0, 0);
  static UP = createVector(0, -1);
  static DOWN = createVector(0, 1);
  static LEFT = createVector(-1, 0);
  static RIGHT = createVector(1, 0);

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Returns the `x` and `y` components of the vector as an iterable array.
   */
  components(): [number, number] {
    return [this.x, this.y]
  }

  /**
   * Negates the vector.
   * */
  negate() {
    return createVector(-this.x, -this.y);
  }

  /**
   * Return the length of the vector.
   */
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Returns the the vector scaled by an arbitrary amount.
   */
  scale(scalar: number) {
    return createVector(this.x * scalar, this.y * scalar);
  }

  /**
   * Returns the vector scaled to unit length, always having a length of one.
   */
  normalize() {
    const magnitude = this.magnitude();

    // TODO: Describe **why** 1e-9 is used instead of zero.
    // Might be to do something with rounding error:
    // https://www.geeksforgeeks.org/problem-in-comparing-floating-point-numbers-and-how-to-compare-them-correctly/
    if (Math.abs(magnitude) < 1e-9) {
      return createVector(0, 0);
    } else {
      return createVector(this.x / magnitude, this.y / magnitude);
    }
  }

  /**
   * Add two vectors together.
   */
  add(b: Vector2) {
    return createVector(this.x + b.x, this.y + b.y);
  }

  /**
   * Subtract two vectors from each other.
   */
  sub(b: Vector2) {
    return createVector(this.x - b.x, this.y - b.y);
  }

  /**
   * Returns the distance between two vectors.
   */
  distanceTo(b: Vector2) {
    const difference = this.sub(b);
    return Math.sqrt(difference.x * difference.x + difference.y * difference.y);
  }

  /**
   * Returns a vector that is perpendicular to the current vector.
   */
  perpendicular() {
    return createVector(
      this.y, -this.x
    );
  }

  angle(): number {
    return Math.atan2(this.y, this.x);
  }

  angleTo(b: Vector2) {
    return b.sub(this).angle();
  }

  abs() {
    return createVector(
      Math.abs(this.x),
      Math.abs(this.y)
    );
  }

  floor() {
    return createVector(
      Math.floor(this.x),
      Math.floor(this.y),
    );
  }

  ceil() {
    return createVector(
      Math.ceil(this.x),
      Math.ceil(this.y),
    );
  }
}

export function createVector(x: number = 0, y: number = 0) {
  return new Vector2(x, y);
}

export function mouseEventToVector(event: MouseEvent) {
  return createVector(event.offsetX, event.offsetY);
}
