export declare class Vector2 {
    x: number;
    y: number;
    static ZERO: Vector2;
    static UP: Vector2;
    static DOWN: Vector2;
    static LEFT: Vector2;
    static RIGHT: Vector2;
    constructor(x?: number, y?: number);
    /**
     * Returns the `x` and `y` components of the vector as an iterable array.
     */
    components(): [number, number];
    /**
     * Negates the vector.
     * */
    negate(): Vector2;
    /**
     * Return the length of the vector.
     */
    magnitude(): number;
    /**
     * Returns the the vector scaled by an arbitrary amount.
     */
    scale(scalar: number): Vector2;
    /**
     * Returns the vector scaled to unit length, always having a length of one.
     */
    normalize(): Vector2;
    /**
     * Add two vectors together.
     */
    add(b: Vector2): Vector2;
    /**
     * Subtract two vectors from each other.
     */
    sub(b: Vector2): Vector2;
    /**
     * Returns the distance between two vectors.
     */
    distanceTo(b: Vector2): number;
    /**
     * Returns a vector that is perpendicular to the current vector.
     */
    perpendicular(): Vector2;
    angle(): number;
    angleTo(b: Vector2): number;
    abs(): Vector2;
    floor(): Vector2;
    ceil(): Vector2;
}
export declare function createVector(x?: number, y?: number): Vector2;
export declare function mouseEventToVector(event: MouseEvent): Vector2;
