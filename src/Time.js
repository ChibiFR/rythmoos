/**
 * Contain information about time in the rendering process.
 * @abstract
 */
class Time {
  /**
   * Init the Time class.
   * @static
   */
  static _init() {
    /**
     * The time elapsed since the last frame.
     * @type {number}
     * @private
     */
    this._deltaTime = 0;

    /**
     * The total time elapsed since the rendering process has started.
     * @type {number}
     * @private
     */
    this._time = 0;
  }

  /**
   * Update the Time properties to the new frame.
   * @param {number} frame A timestamp containing the time elapsed since the rendering
   * process has started.
   * @static
   */
  static _setFrame(frame) {
    this._deltaTime = frame - this.time;
    this._time = frame;
  }

  /**
   * The time elapsed since the last frame.
   * @return {number}
   * @readonly
   */
  static get deltaTime() {
    return this._deltaTime;
  }

  /**
   * The total time elapsed since the rendering process has started.
   * @return {number}
   * @readonly
   */
  static get time() {
    return this._time;
  }
}

export default Time;
