/**
 * An input state contains the information's structure about the basic
 * states of an input.
 */
class InputState {
  constructor() {
    /**
     * True if the key is being pressed.
     * @type {boolean}
     * @private
     */
    this._down = false;

    /**
     * True if the key is not being pressed.
     * @type {boolean}
     * @private
     */
    this._up = true;
  }

  /**
   * Switch the states of the key.
   */
  _switch() {
    this._down = !this._down;
    this._up = !this._up;
  }

  /**
   * The key is being pressed.
   */
  isDown() {
    return this._down;
  }

  /**
   * The key is not being pressed.
   */
  isUp() {
    return this._up;
  }
}

export default InputState;
