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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __webpack_require__(10);
exports.Point = Point_1.default;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = __webpack_require__(12);
exports.Renderer = Renderer_1.default;
var Screen_1 = __webpack_require__(16);
exports.Screen = Screen_1.default;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Time_1 = __webpack_require__(13);
exports.Time = Time_1.default;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState_1 = __webpack_require__(4);
exports.InputState = InputState_1.default;
var Mouse_1 = __webpack_require__(11);
exports.Mouse = Mouse_1.default;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState = /** @class */ (function () {
    function InputState() {
        this._pressed = false;
    }
    InputState.prototype._switch = function () {
        this._pressed = !this._pressed;
    };
    InputState.prototype.isUp = function () {
        return this._pressed === false;
    };
    InputState.prototype.isDown = function () {
        return this._pressed === true;
    };
    return InputState;
}());
exports.default = InputState;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(14);
exports.Game = Game_1.default;
var Scene_1 = __webpack_require__(15);
exports.Scene = Scene_1.default;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(7);
var g = new engine_1.Game();
g.renderer.attachUpdate(function () {
    g.renderer.context.fillStyle = '#000000';
    g.renderer.context.fillRect(0, 0, engine_1.Screen.width, engine_1.Screen.height);
});
g.renderer.attachUpdate(function () {
    g.renderer.context.fillStyle = '#ffffff';
    g.renderer.context.font = '20px Arial';
    g.renderer.context.fillText("FPS: " + engine_1.Time.fps, 20, 30);
});
g.renderer.attachUpdate(function () {
    g.renderer.context.fillStyle = engine_1.Mouse.clicked ? '#0000FF' : '#FF0000';
    g.renderer.context.beginPath();
    g.renderer.context.arc(engine_1.Mouse.cursorX, engine_1.Mouse.cursorY, 10, 0, 2 * Math.PI);
    g.renderer.context.fill();
});
g.start();


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(0));
__export(__webpack_require__(3));
__export(__webpack_require__(1));
__export(__webpack_require__(5));
__export(__webpack_require__(2));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = __webpack_require__(9);
exports.GameObject = GameObject_1.default;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphics_1 = __webpack_require__(0);
var GameObject = /** @class */ (function () {
    function GameObject(name, point, visible) {
        this.name = name;
        this._point = point ? point : new graphics_1.Point(0, 0);
        if (visible === undefined) {
            this.visible = point ? true : false;
        }
        else {
            this.visible = visible;
        }
    }
    Object.defineProperty(GameObject.prototype, "point", {
        get: function () {
            return this._point;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () {
            return this.point.x;
        },
        set: function (x) {
            this.point.x = 4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () {
            return this.point.y;
        },
        set: function (y) {
            this.point.y = y;
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.setPoint = function (point) {
        this._point = point;
    };
    return GameObject;
}());
exports.default = GameObject;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.default = Point;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rendering_1 = __webpack_require__(1);
var graphics_1 = __webpack_require__(0);
var InputState_1 = __webpack_require__(4);
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse._init = function () {
        this._cursor = new graphics_1.Point(rendering_1.Screen.width / 2, rendering_1.Screen.height / 2);
        this._leftClick = new InputState_1.default();
        this._middleClick = new InputState_1.default();
        this._rightClick = new InputState_1.default();
        this.initEvents();
    };
    Object.defineProperty(Mouse, "cursor", {
        get: function () {
            return this._cursor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "cursorX", {
        get: function () {
            return this.cursor.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "cursorY", {
        get: function () {
            return this.cursor.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "clicked", {
        get: function () {
            return (this.leftClicked || this.middleClicked || this.rightClicked);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftClicked", {
        get: function () {
            return this._leftClick.isDown();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleClicked", {
        get: function () {
            return this._middleClick.isDown();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightClicked", {
        get: function () {
            return this._rightClick.isDown();
        },
        enumerable: true,
        configurable: true
    });
    Mouse.initEvents = function () {
        var _this = this;
        rendering_1.Screen.on(['mousemove'], function (e) {
            _this._cursor.x = e.clientX;
            _this._cursor.y = e.clientY;
        });
        rendering_1.Screen.on(['mousedown', 'mouseup'], function (e) {
            e.preventDefault();
            switch (e.button) {
                case 0:
                    _this._leftClick._switch();
                    break;
                case 1:
                    _this._middleClick._switch();
                    break;
                case 2:
                    _this._rightClick._switch();
                    break;
            }
        });
        rendering_1.Screen.on(['contextmenu'], function (e) {
            e.preventDefault();
        });
    };
    return Mouse;
}());
exports.default = Mouse;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timing_1 = __webpack_require__(2);
var root_1 = __webpack_require__(5);
var Renderer = /** @class */ (function () {
    function Renderer(context) {
        this.context = context;
        this.animationFrame = 0;
        this.scene = new root_1.Scene();
        this._updates = [];
    }
    Renderer.prototype.start = function () {
        var _this = this;
        if (!this.animationFrame) {
            this.animationFrame = requestAnimationFrame(function (frame) {
                _this.render(frame);
            });
        }
    };
    Renderer.prototype.attachUpdate = function (update) {
        this._updates.push(update);
    };
    Renderer.prototype.render = function (frame) {
        var _this = this;
        timing_1.Time._setFrame(frame);
        for (var _i = 0, _a = this._updates; _i < _a.length; _i++) {
            var update = _a[_i];
            update(frame);
        }
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        for (var gameObjectName in this.scene.getAll()) {
            var gameObject = this.scene.get(gameObjectName);
            // Render gameObjects
        }
        this.animationFrame = requestAnimationFrame(function (frame) {
            _this.render(frame);
        });
    };
    return Renderer;
}());
exports.default = Renderer;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Time = /** @class */ (function () {
    function Time() {
    }
    Time._init = function () {
        this._deltaTime = 0;
        this._time = 0;
        this._fps;
    };
    Time._setFrame = function (frame) {
        this._deltaTime = frame - this._time;
        this._time = frame;
        this._fps = Math.round(1000 / this._deltaTime);
    };
    Object.defineProperty(Time, "deltaTime", {
        get: function () {
            return this._deltaTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time, "time", {
        get: function () {
            return this._time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time, "fps", {
        get: function () {
            return this._fps;
        },
        enumerable: true,
        configurable: true
    });
    return Time;
}());
exports.default = Time;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inputs_1 = __webpack_require__(3);
var rendering_1 = __webpack_require__(1);
var timing_1 = __webpack_require__(2);
var Game = /** @class */ (function () {
    /**
     * Create a new Game.
     * @param canvas The canvas to create the game in.
     */
    function Game() {
        this.canvas = this.createCanvas();
        this.renderer = new rendering_1.Renderer(this.canvas.getContext('2d'));
        this._scene = this.renderer.scene;
    }
    Object.defineProperty(Game.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.setScene = function (scene) {
        this.renderer.scene = scene;
        this._scene = scene;
    };
    Game.prototype.start = function () {
        timing_1.Time._init();
        inputs_1.Mouse._init();
        rendering_1.Screen._init(this.canvas);
        this.renderer.start();
    };
    Game.prototype.createCanvas = function () {
        var canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        return canvas;
    };
    return Game;
}());
exports.default = Game;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scene = /** @class */ (function () {
    function Scene() {
        this._gameObjects = {};
    }
    Scene.prototype.add = function (gameObject) {
        if (this.contains(gameObject.name))
            return false;
        this._gameObjects[gameObject.name] = gameObject;
        return true;
    };
    Scene.prototype.remove = function (gameObjectName) {
        if (!this.contains(gameObjectName))
            return false;
        delete this._gameObjects[gameObjectName];
        return true;
    };
    Scene.prototype.get = function (gameObjectName) {
        if (!this.contains(gameObjectName))
            return null;
        return this._gameObjects[gameObjectName];
    };
    Scene.prototype.getAll = function () {
        return this._gameObjects;
    };
    Scene.prototype.contains = function (gameObjectName) {
        return this._gameObjects.hasOwnProperty(gameObjectName);
    };
    Scene.prototype.clear = function () {
        this._gameObjects = {};
    };
    return Scene;
}());
exports.default = Scene;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Screen = /** @class */ (function () {
    function Screen() {
    }
    Screen._init = function (canvas) {
        var _this = this;
        this._canvas = canvas;
        this._width = canvas.width;
        this._height = canvas.height;
        window.addEventListener('resize', function () {
            _this._canvas.width = window.innerWidth;
            _this._canvas.height = window.innerHeight;
        });
    };
    Object.defineProperty(Screen, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Screen, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Screen.on = function (eventNames, eventHandler) {
        for (var _i = 0, eventNames_1 = eventNames; _i < eventNames_1.length; _i++) {
            var eventName = eventNames_1[_i];
            window.addEventListener(eventName, function (e) {
                eventHandler(e);
            });
        }
    };
    return Screen;
}());
exports.default = Screen;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2Y5MjE3YTlhMTgxYjhkODg4YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9JbnB1dFN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ3JhcGhpY3MvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvTW91c2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yZW5kZXJpbmcvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90aW1pbmcvVGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb3QvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb3QvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yZW5kZXJpbmcvU2NyZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFVO1lBQTdCLElBQU0sU0FBUztZQUNsQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBUTtnQkFDMUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMiLCJmaWxlIjoicnl0aG1vb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZjkyMTdhOWExODFiOGQ4ODhhMyIsImltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgUG9pbnRcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9pbmRleC50cyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyJztcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbic7XHJcblxyXG5leHBvcnQge1xyXG4gIFJlbmRlcmVyLFxyXG4gIFNjcmVlblxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9pbmRleC50cyIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIFRpbWVcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvaW5kZXgudHMiLCJpbXBvcnQgSW5wdXRTdGF0ZSBmcm9tICcuL0lucHV0U3RhdGUnO1xyXG5pbXBvcnQgTW91c2UgZnJvbSAnLi9Nb3VzZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIElucHV0U3RhdGUsXHJcbiAgTW91c2VcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvaW5kZXgudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFN0YXRlIHtcclxuICBwcml2YXRlIF9wcmVzc2VkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3ByZXNzZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfc3dpdGNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcHJlc3NlZCA9ICF0aGlzLl9wcmVzc2VkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlc3NlZCA9PT0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByZXNzZWQgPT09IHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL0lucHV0U3RhdGUudHMiLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xyXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIEdhbWUsXHJcbiAgU2NlbmVcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb290L2luZGV4LnRzIiwiaW1wb3J0IHsgR2FtZSwgTW91c2UsIFNjcmVlbiwgVGltZSB9IGZyb20gJy4vZW5naW5lJztcclxuXHJcbmNvbnN0IGcgPSBuZXcgR2FtZSgpO1xyXG5cclxuZy5yZW5kZXJlci5hdHRhY2hVcGRhdGUoKCkgPT4ge1xyXG4gIGcucmVuZGVyZXIuY29udGV4dC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XHJcbiAgZy5yZW5kZXJlci5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIFNjcmVlbi53aWR0aCwgU2NyZWVuLmhlaWdodCk7XHJcbn0pO1xyXG5cclxuZy5yZW5kZXJlci5hdHRhY2hVcGRhdGUoKCkgPT4ge1xyXG4gIGcucmVuZGVyZXIuY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XHJcbiAgZy5yZW5kZXJlci5jb250ZXh0LmZvbnQgPSAnMjBweCBBcmlhbCc7XHJcbiAgZy5yZW5kZXJlci5jb250ZXh0LmZpbGxUZXh0KGBGUFM6ICR7VGltZS5mcHN9YCwgMjAsIDMwKTtcclxufSk7XHJcblxyXG5nLnJlbmRlcmVyLmF0dGFjaFVwZGF0ZSgoKSA9PiB7XHJcbiAgZy5yZW5kZXJlci5jb250ZXh0LmZpbGxTdHlsZSA9IE1vdXNlLmNsaWNrZWQgPyAnIzAwMDBGRicgOiAnI0ZGMDAwMCc7XHJcbiAgZy5yZW5kZXJlci5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gIGcucmVuZGVyZXIuY29udGV4dC5hcmMoTW91c2UuY3Vyc29yWCwgTW91c2UuY3Vyc29yWSwgMTAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICBnLnJlbmRlcmVyLmNvbnRleHQuZmlsbCgpO1xyXG59KTtcclxuXHJcbmcuc3RhcnQoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9nYW1lLW9iamVjdHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dyYXBoaWNzJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnB1dHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcm9vdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGltaW5nJztcclxuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5kZXgudHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5cclxuZXhwb3J0IHtcclxuICBHYW1lT2JqZWN0XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL2luZGV4LnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX3BvaW50OiBQb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3BvaW50ID0gcG9pbnQgPyBwb2ludCA6IG5ldyBQb2ludCgwLCAwKTtcclxuICAgIFxyXG4gICAgaWYgKHZpc2libGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBwb2ludCA/IHRydWUgOiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBvaW50KCk6IFBvaW50IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2ludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucG9pbnQueDtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5wb2ludC54ID0gNDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucG9pbnQueTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMucG9pbnQueSA9IHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UG9pbnQocG9pbnQ6IFBvaW50KTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb2ludCA9IHBvaW50O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9HYW1lT2JqZWN0LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL1BvaW50LnRzIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcbmltcG9ydCBJbnB1dFN0YXRlIGZyb20gJy4vSW5wdXRTdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBNb3VzZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2N1cnNvcjogUG9pbnQ7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xlZnRDbGljazogSW5wdXRTdGF0ZTtcclxuICBwcml2YXRlIHN0YXRpYyBfbWlkZGxlQ2xpY2s6IElucHV0U3RhdGU7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JpZ2h0Q2xpY2s6IElucHV0U3RhdGU7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdXJzb3IgPSBuZXcgUG9pbnQoU2NyZWVuLndpZHRoIC8gMiwgU2NyZWVuLmhlaWdodCAvIDIpO1xyXG4gICAgdGhpcy5fbGVmdENsaWNrID0gbmV3IElucHV0U3RhdGUoKTtcclxuICAgIHRoaXMuX21pZGRsZUNsaWNrID0gbmV3IElucHV0U3RhdGUoKTtcclxuICAgIHRoaXMuX3JpZ2h0Q2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgY3Vyc29yKCk6IFBvaW50IHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJzb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBjdXJzb3JYKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJzb3IueDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGN1cnNvclkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnNvci55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgY2xpY2tlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodGhpcy5sZWZ0Q2xpY2tlZCB8fCB0aGlzLm1pZGRsZUNsaWNrZWQgfHwgdGhpcy5yaWdodENsaWNrZWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbGVmdENsaWNrZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGVmdENsaWNrLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbWlkZGxlQ2xpY2tlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9taWRkbGVDbGljay5pc0Rvd24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHJpZ2h0Q2xpY2tlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9yaWdodENsaWNrLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5pdEV2ZW50cygpOiB2b2lkIHtcclxuICAgIFNjcmVlbi5vbihbJ21vdXNlbW92ZSddLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9jdXJzb3IueCA9IGUuY2xpZW50WDtcclxuICAgICAgdGhpcy5fY3Vyc29yLnkgPSBlLmNsaWVudFk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JlZW4ub24oWydtb3VzZWRvd24nLCAnbW91c2V1cCddLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBzd2l0Y2goZS5idXR0b24pIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLl9sZWZ0Q2xpY2suX3N3aXRjaCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgdGhpcy5fbWlkZGxlQ2xpY2suX3N3aXRjaCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGhpcy5fcmlnaHRDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgU2NyZWVuLm9uKFsnY29udGV4dG1lbnUnXSwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvTW91c2UudHMiLCJpbXBvcnQgeyBUaW1lIH0gZnJvbSAnLi4vdGltaW5nJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9yb290JztcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4uL2dhbWUtb2JqZWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwdWJsaWMgYW5pbWF0aW9uRnJhbWU6IG51bWJlcjtcclxuICBwdWJsaWMgc2NlbmU6IFNjZW5lO1xyXG4gIHByaXZhdGUgX3VwZGF0ZXM6IEZ1bmN0aW9uW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBTY2VuZSgpO1xyXG4gICAgdGhpcy5fdXBkYXRlcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZyYW1lOiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcihmcmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGF0dGFjaFVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLl91cGRhdGVzLnB1c2godXBkYXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKGZyYW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIFRpbWUuX3NldEZyYW1lKGZyYW1lKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB0aGlzLl91cGRhdGVzKSB7XHJcbiAgICAgIHVwZGF0ZShmcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNvbnRleHQuY2FudmFzLndpZHRoLCB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBnYW1lT2JqZWN0TmFtZSBpbiB0aGlzLnNjZW5lLmdldEFsbCgpKSB7XHJcbiAgICAgIGNvbnN0IGdhbWVPYmplY3QgPSA8R2FtZU9iamVjdD50aGlzLnNjZW5lLmdldChnYW1lT2JqZWN0TmFtZSk7XHJcbiAgICAgIC8vIFJlbmRlciBnYW1lT2JqZWN0c1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZyYW1lOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXIoZnJhbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcmVuZGVyaW5nL1JlbmRlcmVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVGltZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2RlbHRhVGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF90aW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2ZwczogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIF9pbml0KCkge1xyXG4gICAgdGhpcy5fZGVsdGFUaW1lID0gMDtcclxuICAgIHRoaXMuX3RpbWUgPSAwO1xyXG4gICAgdGhpcy5fZnBzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBfc2V0RnJhbWUoZnJhbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fZGVsdGFUaW1lID0gZnJhbWUgLSB0aGlzLl90aW1lO1xyXG4gICAgdGhpcy5fdGltZSA9IGZyYW1lO1xyXG4gICAgdGhpcy5fZnBzID0gTWF0aC5yb3VuZCgxMDAwIC8gdGhpcy5fZGVsdGFUaW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRlbHRhVGltZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbHRhVGltZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90aW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZnBzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZnBzO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9UaW1lLnRzIiwiaW1wb3J0IHsgTW91c2UgfSBmcm9tICcuLi9pbnB1dHMnO1xyXG5pbXBvcnQgeyBTY3JlZW4sIFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3RpbWluZyc7XHJcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgR2FtZS5cclxuICAgKiBAcGFyYW0gY2FudmFzIFRoZSBjYW52YXMgdG8gY3JlYXRlIHRoZSBnYW1lIGluLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcig8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPnRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykpO1xyXG4gICAgdGhpcy5fc2NlbmUgPSB0aGlzLnJlbmRlcmVyLnNjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzY2VuZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zY2VuZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTY2VuZShzY2VuZTogU2NlbmUpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICBUaW1lLl9pbml0KCk7XHJcbiAgICBNb3VzZS5faW5pdCgpO1xyXG4gICAgU2NyZWVuLl9pbml0KHRoaXMuY2FudmFzKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb290L0dhbWUudHMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcclxuICBwcml2YXRlIF9nYW1lT2JqZWN0czogQ29sbGVjdGlvbjxHYW1lT2JqZWN0PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9nYW1lT2JqZWN0cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZChnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb250YWlucyhnYW1lT2JqZWN0Lm5hbWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdC5uYW1lXSA9IGdhbWVPYmplY3Q7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKGdhbWVPYmplY3ROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5jb250YWlucyhnYW1lT2JqZWN0TmFtZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBkZWxldGUgdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdE5hbWVdO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgZ2V0KGdhbWVPYmplY3ROYW1lOiBzdHJpbmcpOiBHYW1lT2JqZWN0fG51bGwge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5zKGdhbWVPYmplY3ROYW1lKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBbGwoKTogQ29sbGVjdGlvbjxHYW1lT2JqZWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udGFpbnMoZ2FtZU9iamVjdE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzLmhhc093blByb3BlcnR5KGdhbWVPYmplY3ROYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuX2dhbWVPYmplY3RzID0ge307XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcm9vdC9TY2VuZS50cyIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFNjcmVlbiB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2hlaWdodDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIF9pbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuX3dpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb24oZXZlbnROYW1lczogc3RyaW5nW10sIGV2ZW50SGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudEhhbmRsZXIoZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiXSwic291cmNlUm9vdCI6IiJ9