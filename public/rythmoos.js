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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Renderer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Time__ = __webpack_require__(0);




// Set body style
document.body.style.background = '#000000';
document.body.style.cursor = 'none';


// Create canvas + style and Renderer
const c = document.createElement('canvas');
const r = new __WEBPACK_IMPORTED_MODULE_0__Renderer__["a" /* default */](c);

c.width = window.innerWidth;
c.height = window.innerHeight;


// Track cursor
const mouse = {
  x: null,
  y: null
};

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Track fps
let fps = 0;


// Attach draw and updates

// Update fps
r.attachUpdate(() => {
  fps = Math.round(1000 / __WEBPACK_IMPORTED_MODULE_1__Time__["a" /* default */].deltaTime);
});

// Draw fps counter
r.attachDraw((ctx) => {
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '20px Arial';
  ctx.fillText(`FPS: ${fps}`, 15, 15);
});

// Draw cursor
r.attachDraw((ctx) => {
  if (mouse.x !== null) {
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
});


// Start main loop
document.body.appendChild(c);
r.start();


/***/ }),
/* 2 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2VhZGM1MTI3OTA0ODU4YWUxNTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9SZW5kZXJlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLElBQUk7QUFDM0IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoicnl0aG1vb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3ZWFkYzUxMjc5MDQ4NThhZTE1MSIsImNsYXNzIFRpbWUge1xyXG4gIC8qKlxyXG4gICAqIEluaXQgdGhlIFRpbWUgY2xhc3MuXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyBfaW5pdCgpIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRpbWUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZS5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9kZWx0YVRpbWUgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRvdGFsIHRpbWUgZWxhcHNlZCBzaW5jZSB0aGUgcmVuZGVyaW5nIHByb2Nlc3MgaGFzIHN0YXJ0ZWQuXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fdGltZSA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIFRpbWUgcHJvcGVydGllcyB0byB0aGUgbmV3IGZyYW1lLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBmcmFtZSBBIHRpbWVzdGFtcCBjb250YWluaW5nIHRoZSB0aW1lIGVsYXBzZWQgc2luY2UgdGhlIHJlbmRlcmluZ1xyXG4gICAqIHByb2Nlc3MgaGFzIHN0YXJ0ZWQuXHJcbiAgICogQHN0YXRpY1xyXG4gICAqL1xyXG4gIHN0YXRpYyBfc2V0RnJhbWUoZnJhbWUpIHtcclxuICAgIHRoaXMuX2RlbHRhVGltZSA9IGZyYW1lIC0gdGhpcy50aW1lO1xyXG4gICAgdGhpcy5fdGltZSA9IGZyYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZS5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCBkZWx0YVRpbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsdGFUaW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRvdGFsIHRpbWUgZWxhcHNlZCBzaW5jZSB0aGUgcmVuZGVyaW5nIHByb2Nlc3MgaGFzIHN0YXJ0ZWQuXHJcbiAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdGltZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90aW1lO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvVGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9SZW5kZXJlcic7XHJcbmltcG9ydCBUaW1lIGZyb20gJy4vVGltZSc7XHJcblxyXG5cclxuLy8gU2V0IGJvZHkgc3R5bGVcclxuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMDAwMDAnO1xyXG5kb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdub25lJztcclxuXHJcblxyXG4vLyBDcmVhdGUgY2FudmFzICsgc3R5bGUgYW5kIFJlbmRlcmVyXHJcbmNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuY29uc3QgciA9IG5ldyBSZW5kZXJlcihjKTtcclxuXHJcbmMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuYy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cclxuLy8gVHJhY2sgY3Vyc29yXHJcbmNvbnN0IG1vdXNlID0ge1xyXG4gIHg6IG51bGwsXHJcbiAgeTogbnVsbFxyXG59O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgbW91c2UueCA9IGUuY2xpZW50WDtcclxuICBtb3VzZS55ID0gZS5jbGllbnRZO1xyXG59KTtcclxuXHJcbi8vIFRyYWNrIGZwc1xyXG5sZXQgZnBzID0gMDtcclxuXHJcblxyXG4vLyBBdHRhY2ggZHJhdyBhbmQgdXBkYXRlc1xyXG5cclxuLy8gVXBkYXRlIGZwc1xyXG5yLmF0dGFjaFVwZGF0ZSgoKSA9PiB7XHJcbiAgZnBzID0gTWF0aC5yb3VuZCgxMDAwIC8gVGltZS5kZWx0YVRpbWUpO1xyXG59KTtcclxuXHJcbi8vIERyYXcgZnBzIGNvdW50ZXJcclxuci5hdHRhY2hEcmF3KChjdHgpID0+IHtcclxuICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xyXG4gIGN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xyXG4gIGN0eC5maWxsVGV4dChgRlBTOiAke2Zwc31gLCAxNSwgMTUpO1xyXG59KTtcclxuXHJcbi8vIERyYXcgY3Vyc29yXHJcbnIuYXR0YWNoRHJhdygoY3R4KSA9PiB7XHJcbiAgaWYgKG1vdXNlLnggIT09IG51bGwpIHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSAnI0ZGMDAwMCc7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKG1vdXNlLngsIG1vdXNlLnksIDEwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8gU3RhcnQgbWFpbiBsb29wXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYyk7XHJcbnIuc3RhcnQoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRpbWUgZnJvbSAnLi9UaW1lJztcclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJlciBjbGFzcy5cclxuICogTWFuYWdlIHRoZSBhbmltYXRpb24gZnJhbWUuXHJcbiAqL1xyXG5jbGFzcyBSZW5kZXJlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBSZW5kZXJlci5cclxuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgVGhlIGNhbnZhcyB0aGlzIFJlbmRlcmVyIGlzIGF0dGFjaGVkIHRvLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29udGV4dCB0aGlzIFJlbmRlcmVyIHdpbGwgdXNlIGZvciB0aGUgcmVuZGVyaW5nLlxyXG4gICAgICogQHR5cGUge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhbmltYXRpb24gZnJhbWUncyBpZCwgMCBpZiBubyBhbmltYXRpb24gZnJhbWUgaXMgbGlua2VkIHRvIGl0LlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaXN0IG9mIGFsbCB1cGRhdGUgYXR0YWNobWVudHMgdG8gYmUgcnVuIGluIGVhY2ggZnJhbWUuXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8RnVuY3Rpb24+fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5fdXBkYXRlQXR0YWNobWVudHMgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaXN0IG9mIGFsbCBkcmF3IGF0dGFjaG1lbnRzIHRvIGJlIHJ1biBpbiBlYWNoIGZyYW1lIGFmdGVyIHVwZGF0ZS5cclxuICAgICAqIEB0eXBlIHtBcnJheTxGdW5jdGlvbj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLl9kcmF3QXR0YWNobWVudHMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb250ZXh0IHRoaXMgUmVuZGVyZXIgd2lsbCB1c2UgZm9yIHRoZSByZW5kZXJpbmcuXHJcbiAgICogQHR5cGUge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH1cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBnZXQgY29udGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgdGhlIHJlbmRlcmluZyBwcm9jZXNzLlxyXG4gICAqL1xyXG4gIHN0YXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZyYW1lID09PSAwKSB7XHJcbiAgICAgIC8vIEluaXQgdGhlIFRpbWUgcHJvcGVydGllcyBpZiBubyBhbmltYXRpb24gZnJhbWUgaXMgYXR0YWNoZWQuXHJcbiAgICAgIFRpbWUuX2luaXQoKTtcclxuXHJcbiAgICAgIC8vIElmIG5vIGFuaW1hdGlvbiBmcmFtZSBpcyBhdHRhY2hlZCwgY3JlYXRlIG9uZS5cclxuICAgICAgdGhpcy5fYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZyYW1lKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoZnJhbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE90aGVyd2lzZSwgc3RvcCB0aGUgY3VycmVudCBhbmltYXRpb24gZnJhbWUgYW5kIGNyZWF0ZSBhIG5ldyBvbmUuXHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIHRoZSByZW5kZXJpbmcgcHJvY2Vzcy5cclxuICAgKi9cclxuICBzdG9wKCkge1xyXG4gICAgaWYgKHRoaXMuX2FuaW1hdGlvbkZyYW1lICE9PSAwKSB7XHJcbiAgICAgIC8vIENhbmNlbCB0aGUgYW5pbWF0aW9uIGZyYW1lIGFuZCBzZXQgaXQgdG8gMC5cclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgICB0aGlzLl9hbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgY29udGV4dCwgZXhlY3V0ZWQgYmVmb3JlIGRyYXdpbmcgdGhlIHNjZW5lLlxyXG4gICAqL1xyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGZvciAoY29uc3QgdXBkYXRlQXR0YWNobWVudCBvZiB0aGlzLl91cGRhdGVBdHRhY2htZW50cykge1xyXG4gICAgICB1cGRhdGVBdHRhY2htZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEcmF3IHRoZSBzY2VuZSB1c2luZyB0aGUgY29udGV4dC5cclxuICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY29udGV4dCBUaGUgY29udGV4dCB1c2VkIGJ5IHRoaXMgUmVuZGVyZXIuXHJcbiAgICovXHJcbiAgZHJhdyhjb250ZXh0KSB7XHJcbiAgICBmb3IgKGNvbnN0IGRyYXdBdHRhY2htZW50IG9mIHRoaXMuX2RyYXdBdHRhY2htZW50cykge1xyXG4gICAgICBkcmF3QXR0YWNobWVudChjb250ZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcihmcmFtZSkge1xyXG4gICAgLy8gVXBkYXRlIHRoZSBUaW1lIHByb3BlcnRpZXMgdG8gdGhlIG5ldyBmcmFtZS5cclxuICAgIFRpbWUuX3NldEZyYW1lKGZyYW1lKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIHNjZW5lXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgIC8vIENsZWFyIHRoZSBzY2VuZVxyXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNvbnRleHQuY2FudmFzLndpZHRoLCB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgLy8gRHJhdyB0aGUgc2NlbmVcclxuICAgIHRoaXMuZHJhdyh0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgIC8vIFJlcXVlc3QgZm9yIHRoZSBuZXh0IGZyYW1lXHJcbiAgICB0aGlzLl9hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnJhbWUpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXIoZnJhbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2ggYSBmdW5jdGlvbiB0byB0aGUgdXBkYXRlIGxvb3AuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gYXR0YWNobWVudCBBIGZ1bmN0aW9uIHRvIHJ1biBpbiBlYWNoIGZyYW1lLlxyXG4gICAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gV2hlbiBhdHRhY2htZW50IGlzIG5vdCBhIGZ1bmN0aW9uLlxyXG4gICAqL1xyXG4gIGF0dGFjaFVwZGF0ZShhdHRhY2htZW50KSB7XHJcbiAgICAvLyBUaHJvdyBhIFR5cGVFcnJvciBpZiBhdHRhY2htZW50IGlzIG5vdCBhIGZ1bmN0aW9uLlxyXG4gICAgaWYgKHR5cGVvZiBhdHRhY2htZW50ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0F0dGFjaG1lbnQgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlQXR0YWNobWVudHMucHVzaChhdHRhY2htZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjaCBhIGZ1bmN0aW9uIHRvIHRoZSBkcmF3IGxvb3AuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gYXR0YWNobWVudCBBIGZ1bmN0aW9uIHRvIHJ1biBpbiBlYWNoIGZyYW1lLiBUYWtlcyB0aGlzIFJlbmRlcmVyJ3NcclxuICAgKiByZW5kZXJpbmcgY29udGV4dCBhcyBhcmd1bWVudC5cclxuICAgKiBAdGhyb3dzIHtUeXBlRXJyb3J9IFdoZW4gYXR0YWNobWVudCBpcyBub3QgYSBmdW5jdGlvbi5cclxuICAgKi9cclxuICBhdHRhY2hEcmF3KGF0dGFjaG1lbnQpIHtcclxuICAgIC8vIFRocm93IGEgVHlwZUVycm9yIGlmIGF0dGFjaG1lbnQgaXMgbm90IGEgZnVuY3Rpb24uXHJcbiAgICBpZiAodHlwZW9mIGF0dGFjaG1lbnQgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXR0YWNobWVudCBpcyBub3QgYSBmdW5jdGlvbi4nKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kcmF3QXR0YWNobWVudHMucHVzaChhdHRhY2htZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9SZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9