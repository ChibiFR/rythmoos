import Point from './Point';
import InputState from './InputState';

/**
 * Contain information about the user's mouse.
 * @abstract
 */
class Mouse {
  /**
   * Init the Mouse class.
   * @param {HTMLCanvasElement} canvas The canvas to attach mouse capture to.
   */
  static _init(canvas) {
    /**
     * The position of the mouse cursor.
     * @type {Point}
     * @private
     */
    this._cursor = new Point(0, 0);

    /**
     * Mouse left button state.
     * @type {InputState}
     * @private
     */
    this._leftButton = new InputState();

    /**
     * Mouse middle button (wheel) state.
     * @type {InputState}
     * @private
     */
    this._middleButton = new InputState();

    /**
     * Mouse right button state.
     * @type {InputState}
     * @private
     */
    this._rightButton = new InputState();

    // Map cursor
    canvas.addEventListener('mousemove', (e) => {
      this._cursor.x = e.clientX;
      this._cursor.y = e.clientY;
    });

    // Prevent default click behaviors
    canvas.addEventListener('click', (e) => {
      e.preventDefault();
    });

    // Prevent right click menu popup
    canvas.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    // Map mouse buttons
    canvas.addEventListener('mousedown', (e) => {
      e.preventDefault();

      switch(e.button) {
        case 0:
          this._leftButton._switch();
          break;
        case 1:
          this._middleButton._switch();
          break;
        case 2:
          this._rightButton._switch();
      }
    });

    canvas.addEventListener('mouseup', (e) => {
      e.preventDefault();

      switch (e.button) {
        case 0:
          this._leftButton._switch();
          break;
        case 1:
          this._middleButton._switch();
          break;
        case 2:
          this._rightButton._switch();
      }
    });
  }

  /**
   * The position of the cursor as a Point.
   * @return {Point}
   * @readonly
   */
  static get cursor() {
    return this._cursor;
  }
  
  /**
   * The position of the cursor in the X axis.
   * @return {number}
   * @readonly
   */
  static get cursorX() {
    return this._cursor.x;
  }

  /**
   * The position of the cursor in the Y axis.
   * @return {number}
   * @readonly
   */
  static get cursorY() {
    return this._cursor.y;
  }

  /**
   * True if a mouse button is being clicked, false otherwise.
   * @return {boolean}
   */
  static isClicked() {
    return (this._leftButton.isDown() ||
            this._middleButton.isDown() ||
            this._rightButton.isDown()
    );
  }

  /**
   *  True if the mouse left button is being clicked, false otherwise.
   * @return {boolean}
   */
  static isLeftClicked() {
    return this._leftButton.isDown();
  }

  /**
   * True if the mouse middle button (wheel) is being clicked, false otherwise.
   * @return {boolean}
   */
  static isMiddleClicked() {
    return this._middleButton.isDown();
  }

  /**
   * True if the mouse right button is being clicked, false otherwise.
   * @return {boolean}
   */
  static isRightClicked() {
    return this._rightButton.isDown();
  }
}

export default Mouse;
