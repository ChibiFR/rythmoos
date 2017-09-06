/**
 * Represent a simple 2D point with an X and Y position.
 */
class Point {
  /**
   * Create a Point.
   * @param {number} x 
   * @param {number} y 
   */
  constructor(x, y) {
    /**
     * Position in the X axis (horizontal).
     * @type {number}
     */
    this.x = x;

    /**
     * Position in the Y axis (vertical).
     * @type {number}
     */
    this.y = y;
  }
}

export default Point;
