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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameObjectTypes;
(function (GameObjectTypes) {
    GameObjectTypes[GameObjectTypes["RECTANGLE"] = 0] = "RECTANGLE";
    GameObjectTypes[GameObjectTypes["CIRCLE"] = 1] = "CIRCLE";
    GameObjectTypes[GameObjectTypes["LABEL"] = 2] = "LABEL";
    GameObjectTypes[GameObjectTypes["SHAPE"] = 3] = "SHAPE";
    GameObjectTypes[GameObjectTypes["IMAGE"] = 4] = "IMAGE";
    GameObjectTypes[GameObjectTypes["OTHER"] = 5] = "OTHER";
})(GameObjectTypes || (GameObjectTypes = {}));
;
exports.default = GameObjectTypes;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphics_1 = __webpack_require__(2);
var GameObjectTypes_1 = __webpack_require__(0);
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
        this._type = GameObjectTypes_1.default.OTHER;
    }
    Object.defineProperty(GameObject.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "point", {
        get: function () {
            return new graphics_1.Point(this._point.x, this._point.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () {
            return this.point.x;
        },
        set: function (x) {
            this._point.x = 4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () {
            return this.point.y;
        },
        set: function (y) {
            this._point.y = y;
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Font_1 = __webpack_require__(13);
exports.Font = Font_1.default;
var Model_1 = __webpack_require__(14);
exports.Model = Model_1.default;
var Point_1 = __webpack_require__(15);
exports.Point = Point_1.default;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = __webpack_require__(20);
exports.Renderer = Renderer_1.default;
var Screen_1 = __webpack_require__(25);
exports.Screen = Screen_1.default;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Time_1 = __webpack_require__(21);
exports.Time = Time_1.default;
var now_1 = __webpack_require__(8);
exports.now = now_1.default;
var Profiler_1 = __webpack_require__(22);
exports.Profiler = Profiler_1.default;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = __webpack_require__(12);
exports.Circle = Circle_1.default;
var GameObject_1 = __webpack_require__(1);
exports.GameObject = GameObject_1.default;
var GameObjectTypes_1 = __webpack_require__(0);
exports.GameObjectTypes = GameObjectTypes_1.default;
var Label_1 = __webpack_require__(16);
exports.Label = Label_1.default;
var Rectangle_1 = __webpack_require__(17);
exports.Rectangle = Rectangle_1.default;
var Shape_1 = __webpack_require__(18);
exports.Shape = Shape_1.default;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState_1 = __webpack_require__(7);
exports.InputState = InputState_1.default;
var Mouse_1 = __webpack_require__(19);
exports.Mouse = Mouse_1.default;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getNow() {
    if (typeof performance !== 'undefined' && performance.now !== undefined) {
        return performance.now;
    }
    return Date.now;
}
exports.default = getNow();


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(23);
exports.Game = Game_1.default;
var Scene_1 = __webpack_require__(24);
exports.Scene = Scene_1.default;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(11);
var g = new engine_1.Game();
var bg = new engine_1.Rectangle('background', new engine_1.Point(0, 0), true);
var fps = new engine_1.Label('fps counter', new engine_1.Point(15, 15), true);
var cursor = new engine_1.Circle('cursor', engine_1.Mouse.cursor, true);
bg.color = '#000000';
bg.fill = true;
bg.width = engine_1.Screen.width;
bg.height = engine_1.Screen.height;
fps.fill = true;
fps.font = new engine_1.Font('Arial', 14, '#FFFFFF');
fps.text = "FPS: " + engine_1.Time.fps;
cursor.fill = true;
cursor.size = 20;
cursor.color = '#FF0000';
g.scene.add(bg);
g.scene.add(fps);
g.scene.add(cursor);
g.renderer.attachUpdate(function () {
    fps.text = "FPS: " + engine_1.Time.fps;
    cursor.setPoint(engine_1.Mouse.cursor);
    if (engine_1.Mouse.buttonDown) {
        cursor.color = '#0000FF';
    }
    else {
        cursor.color = '#FF0000';
    }
});
g.start();


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(5));
__export(__webpack_require__(2));
__export(__webpack_require__(6));
__export(__webpack_require__(3));
__export(__webpack_require__(9));
__export(__webpack_require__(4));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = __webpack_require__(1);
var GameObjectTypes_1 = __webpack_require__(0);
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, point, visible) {
        var _this = _super.call(this, name, point, visible) || this;
        _this.size = 0;
        _this.color = '#000000';
        _this.fill = true;
        _this._type = GameObjectTypes_1.default.CIRCLE;
        return _this;
    }
    return Circle;
}(GameObject_1.default));
exports.default = Circle;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Font = /** @class */ (function () {
    function Font(fontName, fontSize, color) {
        if (fontName === void 0) { fontName = 'Arial'; }
        if (fontSize === void 0) { fontSize = 12; }
        if (color === void 0) { color = '#000000'; }
        this.fontName = fontName;
        this.fontSize = fontSize;
        this.color = color;
    }
    return Font;
}());
exports.default = Font;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model(path) {
        if (path === void 0) { path = []; }
        this._path = path;
    }
    Object.defineProperty(Model.prototype, "path", {
        get: function () {
            return this._path.slice();
        },
        set: function (path) {
            this._path = path.slice();
        },
        enumerable: true,
        configurable: true
    });
    Model.prototype.getPoint = function (index) {
        if (index < this._path.length) {
            return [
                this._path[index][0],
                this._path[index][1]
            ];
        }
        return null;
    };
    Model.prototype.setPoint = function (index, pathPoint) {
        if (index < this._path.length) {
            this._path[index] = [
                pathPoint[0],
                pathPoint[1]
            ];
            return true;
        }
        return false;
    };
    Model.prototype.addPoint = function (pathPoint) {
        this._path.push(pathPoint);
    };
    Model.prototype.removePoint = function (index) {
        if (index < this._path.length) {
            this._path.slice(index, 1);
            return true;
        }
        return false;
    };
    return Model;
}());
exports.default = Model;


/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = __webpack_require__(1);
var GameObjectTypes_1 = __webpack_require__(0);
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(name, point, visible) {
        var _this = _super.call(this, name, point, visible) || this;
        _this.text = '';
        _this.fill = true;
        _this._type = GameObjectTypes_1.default.LABEL;
        return _this;
    }
    Label.prototype.setFont = function (font) {
        this.font = font;
    };
    Label.prototype.setFontSize = function (fontSize) {
        this.font.fontSize = fontSize;
    };
    Label.prototype.setFontColor = function (color) {
        this.font.color = color;
    };
    return Label;
}(GameObject_1.default));
exports.default = Label;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = __webpack_require__(1);
var GameObjectTypes_1 = __webpack_require__(0);
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, point, visible) {
        var _this = _super.call(this, name, point, visible) || this;
        _this.width = 0;
        _this.height = 0;
        _this.color = '#000000';
        _this.fill = true;
        _this._type = GameObjectTypes_1.default.RECTANGLE;
        return _this;
    }
    return Rectangle;
}(GameObject_1.default));
exports.default = Rectangle;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameObject_1 = __webpack_require__(1);
var GameObjectTypes_1 = __webpack_require__(0);
var graphics_1 = __webpack_require__(2);
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape(name, point, visible) {
        var _this = _super.call(this, name, point, visible) || this;
        _this.color = '#000000';
        _this.fill = true;
        _this.model = new graphics_1.Model();
        _this._type = GameObjectTypes_1.default.SHAPE;
        return _this;
    }
    return Shape;
}(GameObject_1.default));
exports.default = Shape;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rendering_1 = __webpack_require__(3);
var graphics_1 = __webpack_require__(2);
var InputState_1 = __webpack_require__(7);
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
    Object.defineProperty(Mouse, "buttonDown", {
        get: function () {
            return (this.leftButtonDown || this.middleButtonDown || this.rightButtonDown);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftButtonDown", {
        get: function () {
            return this._leftClick.isDown();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleButtonDown", {
        get: function () {
            return this._middleClick.isDown();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightButtonDown", {
        get: function () {
            return this._rightClick.isDown();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "leftButtonUp", {
        get: function () {
            return this._leftClick.isUp();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "middleButtonUp", {
        get: function () {
            return this._middleClick.isUp();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mouse, "rightButtonUp", {
        get: function () {
            return this._rightClick.isUp();
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timing_1 = __webpack_require__(4);
var root_1 = __webpack_require__(9);
var game_objects_1 = __webpack_require__(5);
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
            update();
        }
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        for (var gameObjectName in this.scene.getAll()) {
            var gameObject = this.scene.get(gameObjectName);
            if (!gameObject.visible)
                continue;
            if (gameObject instanceof game_objects_1.Rectangle) {
                if (gameObject.fill) {
                    this.context.fillStyle = gameObject.color;
                    this.context.fillRect(gameObject.x, gameObject.y, gameObject.width, gameObject.height);
                }
                else {
                    this.context.strokeStyle = gameObject.color;
                    this.context.strokeRect(gameObject.x, gameObject.y, gameObject.width, gameObject.height);
                }
                continue;
            }
            if (gameObject instanceof game_objects_1.Circle) {
                if (gameObject.size === 0)
                    continue;
                this.context.beginPath();
                this.context.arc(gameObject.x, gameObject.y, gameObject.size / 2, 0, 2 * Math.PI);
                if (gameObject.fill) {
                    this.context.fillStyle = gameObject.color;
                    this.context.fill();
                }
                else {
                    this.context.strokeStyle = gameObject.color;
                    this.context.stroke();
                }
                continue;
            }
            if (gameObject instanceof game_objects_1.Shape) {
                this.context.beginPath();
                this.context.moveTo(gameObject.x, gameObject.y);
                for (var _b = 0, _c = gameObject.model.path; _b < _c.length; _b++) {
                    var pathPoint = _c[_b];
                    this.context.lineTo(pathPoint[0], pathPoint[1]);
                }
                if (gameObject.fill) {
                    this.context.fillStyle = gameObject.color;
                    this.context.fill();
                }
                else {
                    this.context.strokeStyle = gameObject.color;
                    this.context.stroke();
                }
                continue;
            }
            if (gameObject instanceof game_objects_1.Label) {
                this.context.font = gameObject.font.fontSize + "px " + gameObject.font.fontName;
                if (gameObject.fill) {
                    this.context.fillStyle = gameObject.font.color;
                    this.context.fillText(gameObject.text, gameObject.x, gameObject.y);
                }
                else {
                    this.context.strokeStyle = gameObject.font.color;
                    this.context.strokeText(gameObject.text, gameObject.x, gameObject.y);
                }
                continue;
            }
        }
        this.animationFrame = requestAnimationFrame(function (frame) {
            _this.render(frame);
        });
    };
    return Renderer;
}());
exports.default = Renderer;


/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var now_1 = __webpack_require__(8);
var Profiler = /** @class */ (function () {
    function Profiler() {
        this.startTime = 0;
        this.endTime = 0;
        this._steps = [];
    }
    Object.defineProperty(Profiler.prototype, "duration", {
        get: function () {
            if (this.endTime) {
                return this.endTime - this.startTime;
            }
            else if (this.startTime) {
                return now_1.default() - this.startTime;
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profiler.prototype, "steps", {
        get: function () {
            return this._steps.slice();
        },
        enumerable: true,
        configurable: true
    });
    Profiler.prototype.start = function () {
        this.endTime = 0;
        this._steps = [];
        this.startTime = now_1.default();
    };
    Profiler.prototype.step = function () {
        if (this.startTime) {
            this._steps.push(now_1.default());
        }
    };
    Profiler.prototype.stop = function () {
        this.endTime = now_1.default();
    };
    Profiler.prototype.getStep = function (index) {
        if (index < this._steps.length) {
            return this._steps[index];
        }
        return null;
    };
    Profiler.prototype.getStepDuration = function (index) {
        var step = this.getStep(index);
        if (step !== null) {
            return step - this.startTime;
        }
        return null;
    };
    Profiler.prototype.getStepDurations = function () {
        var steps = [];
        for (var _i = 0, _a = this.steps; _i < _a.length; _i++) {
            var step = _a[_i];
            steps.push(step - this.startTime);
        }
        return steps;
    };
    return Profiler;
}());
exports.default = Profiler;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inputs_1 = __webpack_require__(6);
var rendering_1 = __webpack_require__(3);
var timing_1 = __webpack_require__(4);
var Game = /** @class */ (function () {
    /**
     * Create a new Game.
     * @param canvas The canvas to create the game in.
     */
    function Game() {
        this.canvas = this.createCanvas();
        this.renderer = new rendering_1.Renderer(this.canvas.getContext('2d'));
        this._scene = this.renderer.scene;
        timing_1.Time._init();
        inputs_1.Mouse._init();
        rendering_1.Screen._init(this.canvas);
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
/* 24 */
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
/* 25 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTcxZDI0NDk5MmUzOWRjNWZmOGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdFR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9JbnB1dFN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL25vdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvQ2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ3JhcGhpY3MvRm9udC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL01vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ3JhcGhpY3MvUG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvTGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvUmVjdGFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1NoYXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL01vdXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcmVuZGVyaW5nL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL1RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90aW1pbmcvUHJvZmlsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yb290L0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yb290L1NjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcmVuZGVyaW5nL1NjcmVlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REEsSUFBSyxlQU9KO0FBUEQsV0FBSyxlQUFlO0lBQ2xCLCtEQUFTO0lBQ1QseURBQU07SUFDTix1REFBSztJQUNMLHVEQUFLO0lBQ0wsdURBQUs7SUFDTCx1REFBSztBQUNQLENBQUMsRUFQSSxlQUFlLEtBQWYsZUFBZSxRQU9uQjtBQUFBLENBQUM7QUFFRixrQkFBZSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUNUL0Isd0NBQW9DO0FBQ3BDLCtDQUFnRDtBQUVoRDtJQU1FLG9CQUFZLElBQVksRUFBRSxL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QVM7WUFDbEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLENBQVE7Z0JBQzFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDIiwiZmlsZSI6InJ5dGhtb29zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU3MWQyNDQ5OTJlMzlkYzVmZjhjIiwiZW51bSBHYW1lT2JqZWN0VHlwZXMge1xyXG4gIFJFQ1RBTkdMRSxcclxuICBDSVJDTEUsXHJcbiAgTEFCRUwsXHJcbiAgU0hBUEUsXHJcbiAgSU1BR0UsXHJcbiAgT1RIRVJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3RUeXBlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdFR5cGVzLnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX3R5cGU6IEdhbWVPYmplY3RUeXBlcztcclxuICBwcm90ZWN0ZWQgX3BvaW50OiBQb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3BvaW50ID0gcG9pbnQgPyBwb2ludCA6IG5ldyBQb2ludCgwLCAwKTtcclxuICAgIFxyXG4gICAgaWYgKHZpc2libGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBwb2ludCA/IHRydWUgOiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5PVEhFUjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBHYW1lT2JqZWN0VHlwZXMge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBvaW50KCk6IFBvaW50IHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5fcG9pbnQueCwgdGhpcy5fcG9pbnQueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBvaW50Lng7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBzZXQgeCh4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BvaW50LnggPSA0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wb2ludC55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB5KHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcG9pbnQueSA9IHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UG9pbnQocG9pbnQ6IFBvaW50KTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb2ludCA9IHBvaW50O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9HYW1lT2JqZWN0LnRzIiwiaW1wb3J0IEZvbnQgZnJvbSAnLi9Gb250JztcclxuaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuL1BhdGgnO1xyXG5pbXBvcnQgUGF0aFBvaW50IGZyb20gJy4vUGF0aFBvaW50JztcclxuaW1wb3J0IFBvaW50IGZyb20gJy4vUG9pbnQnO1xyXG5cclxuZXhwb3J0IHtcclxuICBGb250LFxyXG4gIE1vZGVsLFxyXG4gIFBhdGgsXHJcbiAgUGF0aFBvaW50LFxyXG4gIFBvaW50XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JhcGhpY3MvaW5kZXgudHMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9SZW5kZXJlcic7XHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4nO1xyXG5cclxuZXhwb3J0IHtcclxuICBSZW5kZXJlcixcclxuICBTY3JlZW5cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yZW5kZXJpbmcvaW5kZXgudHMiLCJpbXBvcnQgVGltZSBmcm9tICcuL1RpbWUnO1xyXG5pbXBvcnQgbm93IGZyb20gJy4vbm93JztcclxuaW1wb3J0IFByb2ZpbGVyIGZyb20gJy4vUHJvZmlsZXInO1xyXG5cclxuZXhwb3J0IHtcclxuICBUaW1lLFxyXG4gIG5vdyxcclxuICBQcm9maWxlclxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9pbmRleC50cyIsImltcG9ydCBDaXJjbGUgZnJvbSAnLi9DaXJjbGUnO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vUmVjdGFuZ2xlJztcclxuaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xyXG5cclxuZXhwb3J0IHtcclxuICBDaXJjbGUsXHJcbiAgR2FtZU9iamVjdCxcclxuICBHYW1lT2JqZWN0VHlwZXMsXHJcbiAgTGFiZWwsXHJcbiAgUmVjdGFuZ2xlLFxyXG4gIFNoYXBlXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL2luZGV4LnRzIiwiaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuaW1wb3J0IE1vdXNlIGZyb20gJy4vTW91c2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICBJbnB1dFN0YXRlLFxyXG4gIE1vdXNlXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL2luZGV4LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRTdGF0ZSB7XHJcbiAgcHJpdmF0ZSBfcHJlc3NlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9wcmVzc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgX3N3aXRjaCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ByZXNzZWQgPSAhdGhpcy5fcHJlc3NlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByZXNzZWQgPT09IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVzc2VkID09PSB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9JbnB1dFN0YXRlLnRzIiwiZnVuY3Rpb24gZ2V0Tm93KCk6ICgpID0+IG51bWJlciB7XHJcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3c7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gRGF0ZS5ub3c7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE5vdygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9ub3cudHMiLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xyXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIEdhbWUsXHJcbiAgU2NlbmVcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb290L2luZGV4LnRzIiwiaW1wb3J0IHsgR2FtZSwgTW91c2UsIFNjcmVlbiwgVGltZSwgUmVjdGFuZ2xlLCBDaXJjbGUsIExhYmVsLCBQb2ludCwgRm9udCB9IGZyb20gJy4vZW5naW5lJztcclxuXHJcbmNvbnN0IGcgPSBuZXcgR2FtZSgpO1xyXG5cclxuY29uc3QgYmcgPSBuZXcgUmVjdGFuZ2xlKCdiYWNrZ3JvdW5kJywgbmV3IFBvaW50KDAsIDApLCB0cnVlKTtcclxuY29uc3QgZnBzID0gbmV3IExhYmVsKCdmcHMgY291bnRlcicsIG5ldyBQb2ludCgxNSwgMTUpLCB0cnVlKTtcclxuY29uc3QgY3Vyc29yID0gbmV3IENpcmNsZSgnY3Vyc29yJywgTW91c2UuY3Vyc29yLCB0cnVlKTtcclxuXHJcbmJnLmNvbG9yID0gJyMwMDAwMDAnO1xyXG5iZy5maWxsID0gdHJ1ZTtcclxuYmcud2lkdGggPSBTY3JlZW4ud2lkdGg7XHJcbmJnLmhlaWdodCA9IFNjcmVlbi5oZWlnaHQ7XHJcblxyXG5mcHMuZmlsbCA9IHRydWU7XHJcbmZwcy5mb250ID0gbmV3IEZvbnQoJ0FyaWFsJywgMTQsICcjRkZGRkZGJyk7XHJcbmZwcy50ZXh0ID0gYEZQUzogJHtUaW1lLmZwc31gO1xyXG5cclxuY3Vyc29yLmZpbGwgPSB0cnVlO1xyXG5jdXJzb3Iuc2l6ZSA9IDIwO1xyXG5jdXJzb3IuY29sb3IgPSAnI0ZGMDAwMCc7XHJcblxyXG5nLnNjZW5lLmFkZChiZyk7XHJcbmcuc2NlbmUuYWRkKGZwcyk7XHJcbmcuc2NlbmUuYWRkKGN1cnNvcik7XHJcblxyXG5nLnJlbmRlcmVyLmF0dGFjaFVwZGF0ZSgoKSA9PiB7XHJcbiAgZnBzLnRleHQgPSBgRlBTOiAke1RpbWUuZnBzfWA7XHJcbiAgY3Vyc29yLnNldFBvaW50KE1vdXNlLmN1cnNvcik7XHJcblxyXG4gIGlmIChNb3VzZS5idXR0b25Eb3duKSB7XHJcbiAgICBjdXJzb3IuY29sb3IgPSAnIzAwMDBGRic7XHJcbiAgfSBlbHNlIHtcclxuICAgIGN1cnNvci5jb2xvciA9ICcjRkYwMDAwJztcclxuICB9XHJcbn0pO1xyXG5cclxuZy5zdGFydCgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2lucHV0cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyaW5nJztcclxuZXhwb3J0ICogZnJvbSAnLi9yb290JztcclxuZXhwb3J0ICogZnJvbSAnLi90aW1pbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbmRleC50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyBzaXplOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuICBcclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5DSVJDTEU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0NpcmNsZS50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBmb250TmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBmb250U2l6ZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihmb250TmFtZTogc3RyaW5nID0gJ0FyaWFsJywgZm9udFNpemU6IG51bWJlciA9IDEyLCBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnKSB7XHJcbiAgICB0aGlzLmZvbnROYW1lID0gZm9udE5hbWU7XHJcbiAgICB0aGlzLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JhcGhpY3MvRm9udC50cyIsImltcG9ydCBQYXRoUG9pbnQgZnJvbSAnLi9QYXRoUG9pbnQnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuL1BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xyXG4gIHByaXZhdGUgX3BhdGg6IFBhdGg7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGg6IFBhdGggPSBbXSkge1xyXG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBhdGgoKTogUGF0aCB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX3BhdGhdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBwYXRoKHBhdGg6IFBhdGgpIHtcclxuICAgIHRoaXMuX3BhdGggPSBbLi4ucGF0aF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UG9pbnQoaW5kZXg6IG51bWJlcik6IFBhdGhQb2ludHxudWxsIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuX3BhdGgubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgdGhpcy5fcGF0aFtpbmRleF1bMF0sXHJcbiAgICAgICAgdGhpcy5fcGF0aFtpbmRleF1bMV1cclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQb2ludChpbmRleDogbnVtYmVyLCBwYXRoUG9pbnQ6IFBhdGhQb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGluZGV4IDwgdGhpcy5fcGF0aC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5fcGF0aFtpbmRleF0gPSBbXHJcbiAgICAgICAgcGF0aFBvaW50WzBdLFxyXG4gICAgICAgIHBhdGhQb2ludFsxXVxyXG4gICAgICBdO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFBvaW50KHBhdGhQb2ludDogUGF0aFBvaW50KSB7XHJcbiAgICB0aGlzLl9wYXRoLnB1c2gocGF0aFBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVQb2ludChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9wYXRoLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9wYXRoLnNsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9Nb2RlbC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcclxuICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gIHB1YmxpYyB5OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9Qb2ludC50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCwgRm9udCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZm9udDogRm9udDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgc3VwZXIobmFtZSwgcG9pbnQsIHZpc2libGUpO1xyXG5cclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuTEFCRUw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Rm9udChmb250OiBGb250KTogdm9pZCB7XHJcbiAgICB0aGlzLmZvbnQgPSBmb250O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9udC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvbnRDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvbnQuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvTGFiZWwudHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBwdWJsaWMgZmlsbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLlJFQ1RBTkdMRTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvUmVjdGFuZ2xlLnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50LCBNb2RlbCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBwdWJsaWMgZmlsbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLm1vZGVsID0gbmV3IE1vZGVsKCk7XHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLlNIQVBFO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9TaGFwZS50cyIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4uL3JlbmRlcmluZyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5pbXBvcnQgSW5wdXRTdGF0ZSBmcm9tICcuL0lucHV0U3RhdGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTW91c2Uge1xyXG4gIHByaXZhdGUgc3RhdGljIF9jdXJzb3I6IFBvaW50O1xyXG4gIHByaXZhdGUgc3RhdGljIF9sZWZ0Q2xpY2s6IElucHV0U3RhdGU7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX21pZGRsZUNsaWNrOiBJbnB1dFN0YXRlO1xyXG4gIHByaXZhdGUgc3RhdGljIF9yaWdodENsaWNrOiBJbnB1dFN0YXRlO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIF9pbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY3Vyc29yID0gbmV3IFBvaW50KFNjcmVlbi53aWR0aCAvIDIsIFNjcmVlbi5oZWlnaHQgLyAyKTtcclxuICAgIHRoaXMuX2xlZnRDbGljayA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcbiAgICB0aGlzLl9taWRkbGVDbGljayA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcbiAgICB0aGlzLl9yaWdodENsaWNrID0gbmV3IElucHV0U3RhdGUoKTtcclxuXHJcbiAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGN1cnNvcigpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3Vyc29yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgY3Vyc29yWCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3Vyc29yLng7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBjdXJzb3JZKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJzb3IueTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGJ1dHRvbkRvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHRoaXMubGVmdEJ1dHRvbkRvd24gfHwgdGhpcy5taWRkbGVCdXR0b25Eb3duIHx8IHRoaXMucmlnaHRCdXR0b25Eb3duKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGxlZnRCdXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xlZnRDbGljay5pc0Rvd24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG1pZGRsZUJ1dHRvbkRvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWlkZGxlQ2xpY2suaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCByaWdodEJ1dHRvbkRvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmlnaHRDbGljay5pc0Rvd24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGxlZnRCdXR0b25VcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sZWZ0Q2xpY2suaXNVcCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbWlkZGxlQnV0dG9uVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWlkZGxlQ2xpY2suaXNVcCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgcmlnaHRCdXR0b25VcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9yaWdodENsaWNrLmlzVXAoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGluaXRFdmVudHMoKTogdm9pZCB7XHJcbiAgICBTY3JlZW4ub24oWydtb3VzZW1vdmUnXSwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5fY3Vyc29yLnggPSBlLmNsaWVudFg7XHJcbiAgICAgIHRoaXMuX2N1cnNvci55ID0gZS5jbGllbnRZO1xyXG4gICAgfSk7XHJcblxyXG4gICAgU2NyZWVuLm9uKFsnbW91c2Vkb3duJywgJ21vdXNldXAnXSwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgc3dpdGNoKGUuYnV0dG9uKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgdGhpcy5fbGVmdENsaWNrLl9zd2l0Y2goKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIHRoaXMuX21pZGRsZUNsaWNrLl9zd2l0Y2goKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHRoaXMuX3JpZ2h0Q2xpY2suX3N3aXRjaCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFNjcmVlbi5vbihbJ2NvbnRleHRtZW51J10sIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL01vdXNlLnRzIiwiaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3RpbWluZyc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vcm9vdCc7XHJcbmltcG9ydCB7XHJcbiAgR2FtZU9iamVjdCxcclxuICBHYW1lT2JqZWN0VHlwZXMsXHJcbiAgUmVjdGFuZ2xlLFxyXG4gIENpcmNsZSxcclxuICBTaGFwZSxcclxuICBMYWJlbFxyXG59IGZyb20gJy4uL2dhbWUtb2JqZWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwdWJsaWMgc2NlbmU6IFNjZW5lO1xyXG4gIHByaXZhdGUgYW5pbWF0aW9uRnJhbWU6IG51bWJlcjtcclxuICBwcml2YXRlIF91cGRhdGVzOiBGdW5jdGlvbltdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuICAgIHRoaXMuX3VwZGF0ZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hbmltYXRpb25GcmFtZSkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmcmFtZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoZnJhbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhdHRhY2hVcGRhdGUodXBkYXRlOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5fdXBkYXRlcy5wdXNoKHVwZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcihmcmFtZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBUaW1lLl9zZXRGcmFtZShmcmFtZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdGhpcy5fdXBkYXRlcykge1xyXG4gICAgICB1cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY29udGV4dC5jYW52YXMud2lkdGgsIHRoaXMuY29udGV4dC5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGdhbWVPYmplY3ROYW1lIGluIHRoaXMuc2NlbmUuZ2V0QWxsKCkpIHtcclxuICAgICAgY29uc3QgZ2FtZU9iamVjdCA9IDxHYW1lT2JqZWN0PnRoaXMuc2NlbmUuZ2V0KGdhbWVPYmplY3ROYW1lKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghZ2FtZU9iamVjdC52aXNpYmxlKSBjb250aW51ZTtcclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgUmVjdGFuZ2xlKSB7XHJcbiAgICAgICAgaWYgKGdhbWVPYmplY3QuZmlsbCkge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueCxcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC55LFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LmhlaWdodFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LngsXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSxcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC53aWR0aCxcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC5oZWlnaHRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBDaXJjbGUpIHtcclxuICAgICAgICBpZiAoZ2FtZU9iamVjdC5zaXplID09PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnksIGdhbWVPYmplY3Quc2l6ZSAvIDIsIDAsIDIgKiBNYXRoLlBJKTtcclxuXHJcbiAgICAgICAgaWYgKGdhbWVPYmplY3QuZmlsbCkge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgU2hhcGUpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChjb25zdCBwYXRoUG9pbnQgb2YgZ2FtZU9iamVjdC5tb2RlbC5wYXRoKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHBhdGhQb2ludFswXSwgcGF0aFBvaW50WzFdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LmZpbGwpIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIExhYmVsKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBgJHtnYW1lT2JqZWN0LmZvbnQuZm9udFNpemV9cHggJHtnYW1lT2JqZWN0LmZvbnQuZm9udE5hbWV9YDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5mb250LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGdhbWVPYmplY3QudGV4dCwgZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmZvbnQuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlVGV4dChnYW1lT2JqZWN0LnRleHQsIGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnJhbWU6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcihmcmFtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yZW5kZXJpbmcvUmVuZGVyZXIudHMiLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBUaW1lIHtcclxuICBwcml2YXRlIHN0YXRpYyBfZGVsdGFUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3RpbWU6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfZnBzOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoKSB7XHJcbiAgICB0aGlzLl9kZWx0YVRpbWUgPSAwO1xyXG4gICAgdGhpcy5fdGltZSA9IDA7XHJcbiAgICB0aGlzLl9mcHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIF9zZXRGcmFtZShmcmFtZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9kZWx0YVRpbWUgPSBmcmFtZSAtIHRoaXMuX3RpbWU7XHJcbiAgICB0aGlzLl90aW1lID0gZnJhbWU7XHJcbiAgICB0aGlzLl9mcHMgPSBNYXRoLnJvdW5kKDEwMDAgLyB0aGlzLl9kZWx0YVRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZGVsdGFUaW1lKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsdGFUaW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgdGltZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBmcHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9mcHM7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdGltaW5nL1RpbWUudHMiLCJpbXBvcnQgbm93IGZyb20gJy4vbm93JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGVyIHtcclxuICBwdWJsaWMgc3RhcnRUaW1lOiBudW1iZXI7XHJcbiAgcHVibGljIGVuZFRpbWU6IG51bWJlcjtcclxuICBwcml2YXRlIF9zdGVwczogbnVtYmVyW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgdGhpcy5lbmRUaW1lID0gMDtcclxuICAgIHRoaXMuX3N0ZXBzID0gW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGR1cmF0aW9uKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5lbmRUaW1lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVuZFRpbWUgLSB0aGlzLnN0YXJ0VGltZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGFydFRpbWUpIHtcclxuICAgICAgcmV0dXJuIG5vdygpIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc3RlcHMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFsuLi50aGlzLl9zdGVwc107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVuZFRpbWUgPSAwO1xyXG4gICAgdGhpcy5fc3RlcHMgPSBbXTtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gbm93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RlcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0YXJ0VGltZSkge1xyXG4gICAgICB0aGlzLl9zdGVwcy5wdXNoKG5vdygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbmRUaW1lID0gbm93KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3RlcChpbmRleDogbnVtYmVyKTogbnVtYmVyfG51bGwge1xyXG4gICAgaWYgKGluZGV4IDwgdGhpcy5fc3RlcHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zdGVwc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3RlcER1cmF0aW9uKGluZGV4OiBudW1iZXIpOiBudW1iZXJ8bnVsbCB7XHJcbiAgICBjb25zdCBzdGVwOiBudW1iZXJ8bnVsbCA9IHRoaXMuZ2V0U3RlcChpbmRleCk7XHJcblxyXG4gICAgaWYgKHN0ZXAgIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHN0ZXAgLSB0aGlzLnN0YXJ0VGltZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGVwRHVyYXRpb25zKCk6IG51bWJlcltdIHtcclxuICAgIGNvbnN0IHN0ZXBzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3Qgc3RlcCBvZiB0aGlzLnN0ZXBzKSB7XHJcbiAgICAgIHN0ZXBzLnB1c2goc3RlcCAtIHRoaXMuc3RhcnRUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RlcHM7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdGltaW5nL1Byb2ZpbGVyLnRzIiwiaW1wb3J0IHsgTW91c2UgfSBmcm9tICcuLi9pbnB1dHMnO1xyXG5pbXBvcnQgeyBTY3JlZW4sIFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3RpbWluZyc7XHJcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgR2FtZS5cclxuICAgKiBAcGFyYW0gY2FudmFzIFRoZSBjYW52YXMgdG8gY3JlYXRlIHRoZSBnYW1lIGluLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcig8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPnRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykpO1xyXG4gICAgdGhpcy5fc2NlbmUgPSB0aGlzLnJlbmRlcmVyLnNjZW5lO1xyXG5cclxuICAgIFRpbWUuX2luaXQoKTtcclxuICAgIE1vdXNlLl9pbml0KCk7XHJcbiAgICBTY3JlZW4uX2luaXQodGhpcy5jYW52YXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzY2VuZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zY2VuZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTY2VuZShzY2VuZTogU2NlbmUpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb290L0dhbWUudHMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcclxuICBwcml2YXRlIF9nYW1lT2JqZWN0czogQ29sbGVjdGlvbjxHYW1lT2JqZWN0PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9nYW1lT2JqZWN0cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZChnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb250YWlucyhnYW1lT2JqZWN0Lm5hbWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdC5uYW1lXSA9IGdhbWVPYmplY3Q7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKGdhbWVPYmplY3ROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5jb250YWlucyhnYW1lT2JqZWN0TmFtZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBkZWxldGUgdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdE5hbWVdO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgZ2V0KGdhbWVPYmplY3ROYW1lOiBzdHJpbmcpOiBHYW1lT2JqZWN0fG51bGwge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5zKGdhbWVPYmplY3ROYW1lKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBbGwoKTogQ29sbGVjdGlvbjxHYW1lT2JqZWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udGFpbnMoZ2FtZU9iamVjdE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzLmhhc093blByb3BlcnR5KGdhbWVPYmplY3ROYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuX2dhbWVPYmplY3RzID0ge307XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcm9vdC9TY2VuZS50cyIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFNjcmVlbiB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3dpZHRoOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2hlaWdodDogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIF9pbml0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuX3dpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb24oZXZlbnROYW1lczogc3RyaW5nW10sIGV2ZW50SGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudEhhbmRsZXIoZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiXSwic291cmNlUm9vdCI6IiJ9