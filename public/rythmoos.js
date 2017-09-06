/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Time);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InputState__ = __webpack_require__(6);



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
    this._cursor = new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */](0, 0);

    /**
     * Mouse left button state.
     * @type {InputState}
     * @private
     */
    this._leftButton = new __WEBPACK_IMPORTED_MODULE_1__InputState__["a" /* default */]();

    /**
     * Mouse middle button (wheel) state.
     * @type {InputState}
     * @private
     */
    this._middleButton = new __WEBPACK_IMPORTED_MODULE_1__InputState__["a" /* default */]();

    /**
     * Mouse right button state.
     * @type {InputState}
     * @private
     */
    this._rightButton = new __WEBPACK_IMPORTED_MODULE_1__InputState__["a" /* default */]();

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

/* harmony default export */ __webpack_exports__["a"] = (Mouse);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Time__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mouse__ = __webpack_require__(1);




const g = new __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */]();

// Draw black background
g.renderer.attachDraw((ctx) => {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, g.canvas.width, g.canvas.height);
});

// Draw a fps counter accurate to the microsecond.
g.renderer.attachDraw((ctx) => {
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '20px Arial';
  ctx.fillText(`FPS: ${Math.round(1000 / __WEBPACK_IMPORTED_MODULE_1__Time__["a" /* default */]._deltaTime)}`, 20, 20);
});

// Draw the cursor as a small circle. Change color as a mouse button is pressed.
g.renderer.attachDraw((ctx) => {
  if (__WEBPACK_IMPORTED_MODULE_2__Mouse__["a" /* default */].isClicked()) {
    ctx.fillStyle = '#0000FF';
  } else {
    ctx.fillStyle = '#FF0000';
  }

  ctx.beginPath();
  ctx.arc(__WEBPACK_IMPORTED_MODULE_2__Mouse__["a" /* default */].cursorX, __WEBPACK_IMPORTED_MODULE_2__Mouse__["a" /* default */].cursorY, 10, 0, 2 * Math.PI);
  ctx.fill();
});

g.start();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Renderer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Mouse__ = __webpack_require__(1);



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
    this.renderer = new __WEBPACK_IMPORTED_MODULE_0__Renderer__["a" /* default */](this.canvas);

    // Init static modules
    __WEBPACK_IMPORTED_MODULE_1__Mouse__["a" /* default */]._init(this.canvas);
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

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Time__ = __webpack_require__(0);


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
      __WEBPACK_IMPORTED_MODULE_0__Time__["a" /* default */]._init();

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
    __WEBPACK_IMPORTED_MODULE_0__Time__["a" /* default */]._setFrame(frame);

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

/* harmony default export */ __webpack_exports__["a"] = (Renderer);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (Point);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (InputState);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWVhNjI5ODIyODM2MmI4NTg3MmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9JbnB1dFN0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdkRBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN4SkE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxRkFBbUM7QUFDMUQsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUM3RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJyeXRobW9vcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVlYTYyOTgyMjgzNjJiODU4NzJiIiwiLyoqXHJcbiAqIENvbnRhaW4gaW5mb3JtYXRpb24gYWJvdXQgdGltZSBpbiB0aGUgcmVuZGVyaW5nIHByb2Nlc3MuXHJcbiAqIEBhYnN0cmFjdFxyXG4gKi9cclxuY2xhc3MgVGltZSB7XHJcbiAgLyoqXHJcbiAgICogSW5pdCB0aGUgVGltZSBjbGFzcy5cclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIF9pbml0KCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGltZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lLlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2RlbHRhVGltZSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdG90YWwgdGltZSBlbGFwc2VkIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvY2VzcyBoYXMgc3RhcnRlZC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl90aW1lID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgVGltZSBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgZnJhbWUuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGZyYW1lIEEgdGltZXN0YW1wIGNvbnRhaW5pbmcgdGhlIHRpbWUgZWxhcHNlZCBzaW5jZSB0aGUgcmVuZGVyaW5nXHJcbiAgICogcHJvY2VzcyBoYXMgc3RhcnRlZC5cclxuICAgKiBAc3RhdGljXHJcbiAgICovXHJcbiAgc3RhdGljIF9zZXRGcmFtZShmcmFtZSkge1xyXG4gICAgdGhpcy5fZGVsdGFUaW1lID0gZnJhbWUgLSB0aGlzLnRpbWU7XHJcbiAgICB0aGlzLl90aW1lID0gZnJhbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGltZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lLlxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGRlbHRhVGltZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWx0YVRpbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgdG90YWwgdGltZSBlbGFwc2VkIHNpbmNlIHRoZSByZW5kZXJpbmcgcHJvY2VzcyBoYXMgc3RhcnRlZC5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCB0aW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9UaW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcclxuaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuXHJcbi8qKlxyXG4gKiBDb250YWluIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyJ3MgbW91c2UuXHJcbiAqIEBhYnN0cmFjdFxyXG4gKi9cclxuY2xhc3MgTW91c2Uge1xyXG4gIC8qKlxyXG4gICAqIEluaXQgdGhlIE1vdXNlIGNsYXNzLlxyXG4gICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIHRvIGF0dGFjaCBtb3VzZSBjYXB0dXJlIHRvLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBfaW5pdChjYW52YXMpIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBtb3VzZSBjdXJzb3IuXHJcbiAgICAgKiBAdHlwZSB7UG9pbnR9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9jdXJzb3IgPSBuZXcgUG9pbnQoMCwgMCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb3VzZSBsZWZ0IGJ1dHRvbiBzdGF0ZS5cclxuICAgICAqIEB0eXBlIHtJbnB1dFN0YXRlfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fbGVmdEJ1dHRvbiA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb3VzZSBtaWRkbGUgYnV0dG9uICh3aGVlbCkgc3RhdGUuXHJcbiAgICAgKiBAdHlwZSB7SW5wdXRTdGF0ZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX21pZGRsZUJ1dHRvbiA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb3VzZSByaWdodCBidXR0b24gc3RhdGUuXHJcbiAgICAgKiBAdHlwZSB7SW5wdXRTdGF0ZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3JpZ2h0QnV0dG9uID0gbmV3IElucHV0U3RhdGUoKTtcclxuXHJcbiAgICAvLyBNYXAgY3Vyc29yXHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5fY3Vyc29yLnggPSBlLmNsaWVudFg7XHJcbiAgICAgIHRoaXMuX2N1cnNvci55ID0gZS5jbGllbnRZO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUHJldmVudCBkZWZhdWx0IGNsaWNrIGJlaGF2aW9yc1xyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUHJldmVudCByaWdodCBjbGljayBtZW51IHBvcHVwXHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBNYXAgbW91c2UgYnV0dG9uc1xyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHN3aXRjaChlLmJ1dHRvbikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHRoaXMuX2xlZnRCdXR0b24uX3N3aXRjaCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgdGhpcy5fbWlkZGxlQnV0dG9uLl9zd2l0Y2goKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLl9zd2l0Y2goKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBzd2l0Y2ggKGUuYnV0dG9uKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgdGhpcy5fbGVmdEJ1dHRvbi5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLl9taWRkbGVCdXR0b24uX3N3aXRjaCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGhpcy5fcmlnaHRCdXR0b24uX3N3aXRjaCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgY3Vyc29yIGFzIGEgUG9pbnQuXHJcbiAgICogQHJldHVybiB7UG9pbnR9XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCBjdXJzb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3Vyc29yO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGN1cnNvciBpbiB0aGUgWCBheGlzLlxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGN1cnNvclgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3Vyc29yLng7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGN1cnNvciBpbiB0aGUgWSBheGlzLlxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGN1cnNvclkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3Vyc29yLnk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcnVlIGlmIGEgbW91c2UgYnV0dG9uIGlzIGJlaW5nIGNsaWNrZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc0NsaWNrZWQoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuX2xlZnRCdXR0b24uaXNEb3duKCkgfHxcclxuICAgICAgICAgICAgdGhpcy5fbWlkZGxlQnV0dG9uLmlzRG93bigpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX3JpZ2h0QnV0dG9uLmlzRG93bigpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIFRydWUgaWYgdGhlIG1vdXNlIGxlZnQgYnV0dG9uIGlzIGJlaW5nIGNsaWNrZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc0xlZnRDbGlja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xlZnRCdXR0b24uaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcnVlIGlmIHRoZSBtb3VzZSBtaWRkbGUgYnV0dG9uICh3aGVlbCkgaXMgYmVpbmcgY2xpY2tlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgc3RhdGljIGlzTWlkZGxlQ2xpY2tlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9taWRkbGVCdXR0b24uaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcnVlIGlmIHRoZSBtb3VzZSByaWdodCBidXR0b24gaXMgYmVpbmcgY2xpY2tlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgc3RhdGljIGlzUmlnaHRDbGlja2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0QnV0dG9uLmlzRG93bigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW91c2U7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL01vdXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcbmltcG9ydCBUaW1lIGZyb20gJy4vVGltZSc7XHJcbmltcG9ydCBNb3VzZSBmcm9tICcuL01vdXNlJztcclxuXHJcbmNvbnN0IGcgPSBuZXcgR2FtZSgpO1xyXG5cclxuLy8gRHJhdyBibGFjayBiYWNrZ3JvdW5kXHJcbmcucmVuZGVyZXIuYXR0YWNoRHJhdygoY3R4KSA9PiB7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcclxuICBjdHguZmlsbFJlY3QoMCwgMCwgZy5jYW52YXMud2lkdGgsIGcuY2FudmFzLmhlaWdodCk7XHJcbn0pO1xyXG5cclxuLy8gRHJhdyBhIGZwcyBjb3VudGVyIGFjY3VyYXRlIHRvIHRoZSBtaWNyb3NlY29uZC5cclxuZy5yZW5kZXJlci5hdHRhY2hEcmF3KChjdHgpID0+IHtcclxuICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xyXG4gIGN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xyXG4gIGN0eC5maWxsVGV4dChgRlBTOiAke01hdGgucm91bmQoMTAwMCAvIFRpbWUuX2RlbHRhVGltZSl9YCwgMjAsIDIwKTtcclxufSk7XHJcblxyXG4vLyBEcmF3IHRoZSBjdXJzb3IgYXMgYSBzbWFsbCBjaXJjbGUuIENoYW5nZSBjb2xvciBhcyBhIG1vdXNlIGJ1dHRvbiBpcyBwcmVzc2VkLlxyXG5nLnJlbmRlcmVyLmF0dGFjaERyYXcoKGN0eCkgPT4ge1xyXG4gIGlmIChNb3VzZS5pc0NsaWNrZWQoKSkge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMEZGJztcclxuICB9IGVsc2Uge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjRkYwMDAwJztcclxuICB9XHJcblxyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHguYXJjKE1vdXNlLmN1cnNvclgsIE1vdXNlLmN1cnNvclksIDEwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgY3R4LmZpbGwoKTtcclxufSk7XHJcblxyXG5nLnN0YXJ0KCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyJztcclxuaW1wb3J0IE1vdXNlIGZyb20gJy4vTW91c2UnO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudCBhIGdhbWUuXHJcbiAqIEEgR2FtZSBpbnN0YW5jZSBjb250YWlucyBhbGwgdGhhdCBpcyBuZWVkZWQgdG8gcnVuIGEgZ2FtZSBmcm9tIHRoZSByZW5kZXJpbmdcclxuICogdG8gbWFwcGluZyBhbmQgdXBkYXRpbmcgaW5wdXRzLlxyXG4gKi9cclxuY2xhc3MgR2FtZSB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgR2FtZS5cclxuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBbY2FudmFzXSBcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihjYW52YXMgPSBudWxsKSB7XHJcbiAgICBpZiAoY2FudmFzID09PSBudWxsKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBhIG5ldyBjYW52YXMgaWYgbm90IHBhc3NlZCBhcyBhcmd1bWVudFxyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHJcbiAgICAgIC8vIFNldCBpdHMgc3R5bGUgdG8gZmlsbCB0aGUgd2luZG93XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICBjYW52YXMuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICBjYW52YXMuc3R5bGUubGVmdCA9ICcwJztcclxuXHJcbiAgICAgIC8vIE1ha2UgdGhlIGNhbnZhcyByZXNpemFibGVcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENsZWFyIHRoZSB3aW5kb3cgYW5kIGFwcGVuZCB0aGUgY2FudmFzXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjYW52YXMgYXR0YWNoZWQgdG8gdGhlIEdhbWUuXHJcbiAgICAgKiBAdHlwZSB7SFRNTENhbnZhc0VsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHJlbmRlcmVyIGF0dGFjaGVkIHRvIHRoZSBHYW1lLlxyXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICAvLyBJbml0IHN0YXRpYyBtb2R1bGVzXHJcbiAgICBNb3VzZS5faW5pdCh0aGlzLmNhbnZhcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgbWFpbiBsb29wLlxyXG4gICAqL1xyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgcHJvY2VzcyB0byB0aGUgdXBkYXRlIGxvb3AuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdXBkYXRlRnVuY3Rpb24gQSBmdW5jdGlvbiB0byBydW4gYXQgZWFjaCB1cGRhdGUuXHJcbiAgICovXHJcbiAgdXBkYXRlKHVwZGF0ZUZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmF0dGFjaFVwZGF0ZSgoKSA9PiB7XHJcbiAgICAgIHVwZGF0ZUZ1bmN0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgdGhlIG1haW4gbG9vcC5cclxuICAgKi9cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zdG9wKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9HYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSc7XHJcblxyXG4vKipcclxuICogUmVuZGVyZXIgY2xhc3MuXHJcbiAqIE1hbmFnZSB0aGUgYW5pbWF0aW9uIGZyYW1lLlxyXG4gKi9cclxuY2xhc3MgUmVuZGVyZXIge1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgUmVuZGVyZXIuXHJcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgdGhpcyBSZW5kZXJlciBpcyBhdHRhY2hlZCB0by5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbnRleHQgdGhpcyBSZW5kZXJlciB3aWxsIHVzZSBmb3IgdGhlIHJlbmRlcmluZy5cclxuICAgICAqIEB0eXBlIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYW5pbWF0aW9uIGZyYW1lJ3MgaWQsIDAgaWYgbm8gYW5pbWF0aW9uIGZyYW1lIGlzIGxpbmtlZCB0byBpdC5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9hbmltYXRpb25GcmFtZSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGlzdCBvZiBhbGwgdXBkYXRlIGF0dGFjaG1lbnRzIHRvIGJlIHJ1biBpbiBlYWNoIGZyYW1lLlxyXG4gICAgICogQHR5cGUge0FycmF5PEZ1bmN0aW9uPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX3VwZGF0ZUF0dGFjaG1lbnRzID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGlzdCBvZiBhbGwgZHJhdyBhdHRhY2htZW50cyB0byBiZSBydW4gaW4gZWFjaCBmcmFtZSBhZnRlciB1cGRhdGUuXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8RnVuY3Rpb24+fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fZHJhd0F0dGFjaG1lbnRzID0gW107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgY29udGV4dCB0aGlzIFJlbmRlcmVyIHdpbGwgdXNlIGZvciB0aGUgcmVuZGVyaW5nLlxyXG4gICAqIEB0eXBlIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgZ2V0IGNvbnRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSByZW5kZXJpbmcgcHJvY2Vzcy5cclxuICAgKi9cclxuICBzdGFydCgpIHtcclxuICAgIGlmICh0aGlzLl9hbmltYXRpb25GcmFtZSA9PT0gMCkge1xyXG4gICAgICAvLyBJbml0IHRoZSBUaW1lIHByb3BlcnRpZXMgaWYgbm8gYW5pbWF0aW9uIGZyYW1lIGlzIGF0dGFjaGVkLlxyXG4gICAgICBUaW1lLl9pbml0KCk7XHJcblxyXG4gICAgICAvLyBJZiBubyBhbmltYXRpb24gZnJhbWUgaXMgYXR0YWNoZWQsIGNyZWF0ZSBvbmUuXHJcbiAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmcmFtZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKGZyYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBPdGhlcndpc2UsIHN0b3AgdGhlIGN1cnJlbnQgYW5pbWF0aW9uIGZyYW1lIGFuZCBjcmVhdGUgYSBuZXcgb25lLlxyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCB0aGUgcmVuZGVyaW5nIHByb2Nlc3MuXHJcbiAgICovXHJcbiAgc3RvcCgpIHtcclxuICAgIGlmICh0aGlzLl9hbmltYXRpb25GcmFtZSAhPT0gMCkge1xyXG4gICAgICAvLyBDYW5jZWwgdGhlIGFuaW1hdGlvbiBmcmFtZSBhbmQgc2V0IGl0IHRvIDAuXHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1hdGlvbkZyYW1lKTtcclxuICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRoZSBjdXJyZW50IGNvbnRleHQsIGV4ZWN1dGVkIGJlZm9yZSBkcmF3aW5nIHRoZSBzY2VuZS5cclxuICAgKi9cclxuICB1cGRhdGUoKSB7XHJcbiAgICBmb3IgKGNvbnN0IHVwZGF0ZUF0dGFjaG1lbnQgb2YgdGhpcy5fdXBkYXRlQXR0YWNobWVudHMpIHtcclxuICAgICAgdXBkYXRlQXR0YWNobWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRHJhdyB0aGUgc2NlbmUgdXNpbmcgdGhlIGNvbnRleHQuXHJcbiAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHQgVGhlIGNvbnRleHQgdXNlZCBieSB0aGlzIFJlbmRlcmVyLlxyXG4gICAqL1xyXG4gIGRyYXcoY29udGV4dCkge1xyXG4gICAgZm9yIChjb25zdCBkcmF3QXR0YWNobWVudCBvZiB0aGlzLl9kcmF3QXR0YWNobWVudHMpIHtcclxuICAgICAgZHJhd0F0dGFjaG1lbnQoY29udGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoZnJhbWUpIHtcclxuICAgIC8vIFVwZGF0ZSB0aGUgVGltZSBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgZnJhbWUuXHJcbiAgICBUaW1lLl9zZXRGcmFtZShmcmFtZSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBzY2VuZVxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuXHJcbiAgICAvLyBDbGVhciB0aGUgc2NlbmVcclxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCwgdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIC8vIERyYXcgdGhlIHNjZW5lXHJcbiAgICB0aGlzLmRyYXcodGhpcy5jb250ZXh0KTtcclxuXHJcbiAgICAvLyBSZXF1ZXN0IGZvciB0aGUgbmV4dCBmcmFtZVxyXG4gICAgdGhpcy5fYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZyYW1lKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyKGZyYW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNoIGEgZnVuY3Rpb24gdG8gdGhlIHVwZGF0ZSBsb29wLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGF0dGFjaG1lbnQgQSBmdW5jdGlvbiB0byBydW4gaW4gZWFjaCBmcmFtZS5cclxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IFdoZW4gYXR0YWNobWVudCBpcyBub3QgYSBmdW5jdGlvbi5cclxuICAgKi9cclxuICBhdHRhY2hVcGRhdGUoYXR0YWNobWVudCkge1xyXG4gICAgLy8gVGhyb3cgYSBUeXBlRXJyb3IgaWYgYXR0YWNobWVudCBpcyBub3QgYSBmdW5jdGlvbi5cclxuICAgIGlmICh0eXBlb2YgYXR0YWNobWVudCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBdHRhY2htZW50IGlzIG5vdCBhIGZ1bmN0aW9uLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3VwZGF0ZUF0dGFjaG1lbnRzLnB1c2goYXR0YWNobWVudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggYSBmdW5jdGlvbiB0byB0aGUgZHJhdyBsb29wLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGF0dGFjaG1lbnQgQSBmdW5jdGlvbiB0byBydW4gaW4gZWFjaCBmcmFtZS4gVGFrZXMgdGhpcyBSZW5kZXJlcidzXHJcbiAgICogcmVuZGVyaW5nIGNvbnRleHQgYXMgYXJndW1lbnQuXHJcbiAgICogQHRocm93cyB7VHlwZUVycm9yfSBXaGVuIGF0dGFjaG1lbnQgaXMgbm90IGEgZnVuY3Rpb24uXHJcbiAgICovXHJcbiAgYXR0YWNoRHJhdyhhdHRhY2htZW50KSB7XHJcbiAgICAvLyBUaHJvdyBhIFR5cGVFcnJvciBpZiBhdHRhY2htZW50IGlzIG5vdCBhIGZ1bmN0aW9uLlxyXG4gICAgaWYgKHR5cGVvZiBhdHRhY2htZW50ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0F0dGFjaG1lbnQgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZHJhd0F0dGFjaG1lbnRzLnB1c2goYXR0YWNobWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvUmVuZGVyZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIFJlcHJlc2VudCBhIHNpbXBsZSAyRCBwb2ludCB3aXRoIGFuIFggYW5kIFkgcG9zaXRpb24uXHJcbiAqL1xyXG5jbGFzcyBQb2ludCB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgUG9pbnQuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHggXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHkgXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBQb3NpdGlvbiBpbiB0aGUgWCBheGlzIChob3Jpem9udGFsKS5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMueCA9IHg7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3NpdGlvbiBpbiB0aGUgWSBheGlzICh2ZXJ0aWNhbCkuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1BvaW50LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBBbiBpbnB1dCBzdGF0ZSBjb250YWlucyB0aGUgaW5mb3JtYXRpb24ncyBzdHJ1Y3R1cmUgYWJvdXQgdGhlIGJhc2ljXHJcbiAqIHN0YXRlcyBvZiBhbiBpbnB1dC5cclxuICovXHJcbmNsYXNzIElucHV0U3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUcnVlIGlmIHRoZSBrZXkgaXMgYmVpbmcgcHJlc3NlZC5cclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fZG93biA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSBpZiB0aGUga2V5IGlzIG5vdCBiZWluZyBwcmVzc2VkLlxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl91cCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTd2l0Y2ggdGhlIHN0YXRlcyBvZiB0aGUga2V5LlxyXG4gICAqL1xyXG4gIF9zd2l0Y2goKSB7XHJcbiAgICB0aGlzLl9kb3duID0gIXRoaXMuX2Rvd247XHJcbiAgICB0aGlzLl91cCA9ICF0aGlzLl91cDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBrZXkgaXMgYmVpbmcgcHJlc3NlZC5cclxuICAgKi9cclxuICBpc0Rvd24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZG93bjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBrZXkgaXMgbm90IGJlaW5nIHByZXNzZWQuXHJcbiAgICovXHJcbiAgaXNVcCgpIHtcclxuICAgIHJldHVybiB0aGlzLl91cDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0U3RhdGU7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0lucHV0U3RhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==