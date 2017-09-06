import Time from './Time';

/**
 * Renderer class.
 * Manage the animation frame.
 */
class Renderer {

  /**
   * Create a new Renderer.
   * @param {HTMLCanvasElement} canvas The canvas this Renderer is attached to.
   */
  constructor(canvas) {
    /**
     * The context this Renderer will use for the rendering.
     * @type {CanvasRenderingContext2D}
     * @private
     */
    this._context = canvas.getContext('2d');

    /**
     * The animation frame's id, 0 if no animation frame is linked to it.
     * @type {number}
     * @private
     */
    this._animationFrame = 0;

    /**
     * The list of all update attachments to be run in each frame.
     * @type {Array<Function>}
     * @private
     */
    this._updateAttachments = [];

    /**
     * The list of all draw attachments to be run in each frame after update.
     * @type {Array<Function>}
     * @private
     */
    this._drawAttachments = [];
  }

  /**
   * The context this Renderer will use for the rendering.
   * @type {CanvasRenderingContext2D}
   * @readonly
   */
  get context() {
    return this._context;
  }

  /**
   * Start the rendering process.
   */
  start() {
    if (this._animationFrame === 0) {
      // Init the Time properties if no animation frame is attached.
      Time._init();

      // If no animation frame is attached, create one.
      this._animationFrame = requestAnimationFrame((frame) => {
        this.render(frame);
      });
    } else {
      // Otherwise, stop the current animation frame and create a new one.
      this.stop();
      this.start();
    }
  }

  /**
   * Stop the rendering process.
   */
  stop() {
    if (this._animationFrame !== 0) {
      // Cancel the animation frame and set it to 0.
      cancelAnimationFrame(this._animationFrame);
      this._animationFrame = 0;
    }
  }

  /**
   * Update the current context, executed before drawing the scene.
   */
  update() {
    for (const updateAttachment of this._updateAttachments) {
      updateAttachment();
    }
  }

  /**
   * Draw the scene using the context.
   * @param {CanvasRenderingContext2D} context The context used by this Renderer.
   */
  draw(context) {
    for (const drawAttachment of this._drawAttachments) {
      drawAttachment(context);
    }
  }

  render(frame) {
    // Update the Time properties to the new frame.
    Time._setFrame(frame);

    // Update the scene
    this.update();

    // Clear the scene
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    // Draw the scene
    this.draw(this.context);

    // Request for the next frame
    this._animationFrame = requestAnimationFrame((frame) => {
      this.render(frame);
    });
  }

  /**
   * Attach a function to the update loop.
   * @param {Function} attachment A function to run in each frame.
   * @throws {TypeError} When attachment is not a function.
   */
  attachUpdate(attachment) {
    // Throw a TypeError if attachment is not a function.
    if (typeof attachment !== 'function') {
      throw new TypeError('Attachment is not a function.');
    }

    this._updateAttachments.push(attachment);
  }

  /**
   * Attach a function to the draw loop.
   * @param {Function} attachment A function to run in each frame. Takes this Renderer's
   * rendering context as argument.
   * @throws {TypeError} When attachment is not a function.
   */
  attachDraw(attachment) {
    // Throw a TypeError if attachment is not a function.
    if (typeof attachment !== 'function') {
      throw new TypeError('Attachment is not a function.');
    }

    this._drawAttachments.push(attachment);
  }
}

export default Renderer;
