import Renderer from './Renderer';
import Mouse from './Mouse';

/**
 * Represent a game.
 * A Game instance contains all that is needed to run a game from the rendering
 * to mapping and updating inputs.
 */
class Game {
  /**
   * Create a Game.
   * @param {HTMLCanvasElement} [canvas] 
   */
  constructor(canvas = null) {
    if (canvas === null) {
      // Create a new canvas if not passed as argument
      canvas = document.createElement('canvas');

      // Set its style to fill the window
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';

      // Make the canvas resizable
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      // Clear the window and append the canvas
      document.body.innerHTML = '';
      document.body.appendChild(canvas);
    }

    /**
     * The canvas attached to the Game.
     * @type {HTMLCanvasElement}
     */
    this.canvas = canvas;

    /**
     * The renderer attached to the Game.
     * @type {Renderer}
     */
    this.renderer = new Renderer(this.canvas);

    // Init static modules
    Mouse._init(this.canvas);
  }

  /**
   * Start the main loop.
   */
  start() {
    this.renderer.start();
  }

  /**
   * Add a process to the update loop.
   * @param {Function} updateFunction A function to run at each update.
   */
  update(updateFunction) {
    this.renderer.attachUpdate(() => {
      updateFunction();
    });
  }

  /**
   * Stop the main loop.
   */
  stop() {
    this.renderer.stop();
  }
}

export default Game;
