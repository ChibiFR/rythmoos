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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(5));
__export(__webpack_require__(3));
__export(__webpack_require__(8));
__export(__webpack_require__(29));
__export(__webpack_require__(4));
__export(__webpack_require__(12));
__export(__webpack_require__(7));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphics_1 = __webpack_require__(3);
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
            this._point.x = x;
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Font_1 = __webpack_require__(15);
exports.Font = Font_1.default;
var Model_1 = __webpack_require__(16);
exports.Model = Model_1.default;
var Point_1 = __webpack_require__(17);
exports.Point = Point_1.default;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = __webpack_require__(22);
exports.Renderer = Renderer_1.default;
var Screen_1 = __webpack_require__(27);
exports.Screen = Screen_1.default;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = __webpack_require__(14);
exports.Circle = Circle_1.default;
var GameObject_1 = __webpack_require__(2);
exports.GameObject = GameObject_1.default;
var GameObjectTypes_1 = __webpack_require__(0);
exports.GameObjectTypes = GameObjectTypes_1.default;
var Label_1 = __webpack_require__(18);
exports.Label = Label_1.default;
var Rectangle_1 = __webpack_require__(19);
exports.Rectangle = Rectangle_1.default;
var Shape_1 = __webpack_require__(20);
exports.Shape = Shape_1.default;


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Time_1 = __webpack_require__(23);
exports.Time = Time_1.default;
var now_1 = __webpack_require__(11);
exports.now = now_1.default;
var Profiler_1 = __webpack_require__(24);
exports.Profiler = Profiler_1.default;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState_1 = __webpack_require__(6);
exports.InputState = InputState_1.default;
var Key_1 = __webpack_require__(9);
exports.Key = Key_1.default;
var Keyboard_1 = __webpack_require__(21);
exports.Keyboard = Keyboard_1.default;
var KeyCodes_1 = __webpack_require__(10);
exports.KeyCodes = KeyCodes_1.default;
var Mouse_1 = __webpack_require__(28);
exports.Mouse = Mouse_1.default;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState_1 = __webpack_require__(6);
var Key = /** @class */ (function () {
    function Key(key) {
        this.key = key;
        this._state = new InputState_1.default();
    }
    Key.prototype.isDown = function () {
        return this._state.isDown();
    };
    Key.prototype.isUp = function () {
        return this._state.isUp();
    };
    return Key;
}());
exports.default = Key;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KeyCodes;
(function (KeyCodes) {
    KeyCodes["Digit0"] = "Digit0";
    KeyCodes["Digit1"] = "Digit1";
    KeyCodes["Digit2"] = "Digit2";
    KeyCodes["Digit3"] = "Digit3";
    KeyCodes["Digit4"] = "Digit4";
    KeyCodes["Digit5"] = "Digit5";
    KeyCodes["Digit6"] = "Digit6";
    KeyCodes["Digit7"] = "Digit7";
    KeyCodes["Digit8"] = "Digit8";
    KeyCodes["Digit9"] = "Digit9";
    KeyCodes["KeyA"] = "KeyA";
    KeyCodes["KeyB"] = "KeyB";
    KeyCodes["KeyC"] = "KeyC";
    KeyCodes["KeyD"] = "KeyD";
    KeyCodes["KeyE"] = "KeyE";
    KeyCodes["KeyF"] = "KeyF";
    KeyCodes["KeyG"] = "KeyG";
    KeyCodes["KeyH"] = "KeyH";
    KeyCodes["KeyI"] = "KeyI";
    KeyCodes["KeyJ"] = "KeyJ";
    KeyCodes["KeyK"] = "KeyK";
    KeyCodes["KeyL"] = "KeyL";
    KeyCodes["KeyM"] = "KeyM";
    KeyCodes["KeyN"] = "KeyN";
    KeyCodes["KeyO"] = "KeyO";
    KeyCodes["KeyP"] = "KeyP";
    KeyCodes["KeyQ"] = "KeyQ";
    KeyCodes["KeyR"] = "KeyR";
    KeyCodes["KeyS"] = "KeyS";
    KeyCodes["KeyT"] = "KeyT";
    KeyCodes["KeyU"] = "KeyU";
    KeyCodes["KeyV"] = "KeyV";
    KeyCodes["KeyW"] = "KeyW";
    KeyCodes["KeyX"] = "KeyX";
    KeyCodes["KeyY"] = "KeyY";
    KeyCodes["KeyZ"] = "KeyZ";
    KeyCodes["Escape"] = "Escape";
    KeyCodes["F1"] = "F1";
    KeyCodes["F2"] = "F2";
    KeyCodes["F3"] = "F3";
    KeyCodes["F4"] = "F4";
    KeyCodes["F5"] = "F5";
    KeyCodes["F6"] = "F6";
    KeyCodes["F7"] = "F7";
    KeyCodes["F8"] = "F8";
    KeyCodes["F9"] = "F9";
    KeyCodes["F10"] = "F10";
    KeyCodes["F11"] = "F11";
    KeyCodes["F12"] = "F12";
    KeyCodes["Insert"] = "Insert";
    KeyCodes["Delete"] = "Delete";
    KeyCodes["Home"] = "Home";
    KeyCodes["End"] = "End";
    KeyCodes["PageUp"] = "PageUp";
    KeyCodes["PageDown"] = "PageDown";
    KeyCodes["NumLock"] = "NumLock";
    KeyCodes["NumpadDivide"] = "NumpadDivide";
    KeyCodes["NumpadMultiply"] = "NumpadMultiply";
    KeyCodes["NumpadSubtract"] = "NumpadSubtract";
    KeyCodes["NumpadAdd"] = "NumpadAdd";
    KeyCodes["NumpadEnter"] = "NumpadEnter";
    KeyCodes["NumpadDecimal"] = "NumpadDecimal";
    KeyCodes["Numpad0"] = "Numpad0";
    KeyCodes["Numpad1"] = "Numpad1";
    KeyCodes["Numpad2"] = "Numpad2";
    KeyCodes["Numpad3"] = "Numpad3";
    KeyCodes["Numpad4"] = "Numpad4";
    KeyCodes["Numpad5"] = "Numpad5";
    KeyCodes["Numpad6"] = "Numpad6";
    KeyCodes["Numpad7"] = "Numpad7";
    KeyCodes["Numpad8"] = "Numpad8";
    KeyCodes["Numpad9"] = "Numpad9";
    KeyCodes["ArrowUp"] = "ArrowUp";
    KeyCodes["ArrowDown"] = "ArrowDown";
    KeyCodes["ArrowLeft"] = "ArrowLeft";
    KeyCodes["ArrowRight"] = "ArrowRight";
    KeyCodes["Backquote"] = "Backquote";
    KeyCodes["Minus"] = "Minus";
    KeyCodes["Equal"] = "Equal";
    KeyCodes["Backspace"] = "Backspace";
    KeyCodes["BracketLeft"] = "BracketLeft";
    KeyCodes["BracketRight"] = "BracketRight";
    KeyCodes["Quote"] = "Quote";
    KeyCodes["Backslash"] = "Backslash";
    KeyCodes["Comma"] = "Comma";
    KeyCodes["Period"] = "Period";
    KeyCodes["Slash"] = "Slash";
    KeyCodes["Enter"] = "Enter";
    KeyCodes["ShiftLeft"] = "ShiftLeft";
    KeyCodes["ShiftRight"] = "ShiftRight";
    KeyCodes["CapsLock"] = "CapsLock";
    KeyCodes["Tab"] = "Tab";
    KeyCodes["ControlLeft"] = "ControlLeft";
    KeyCodes["ControlRight"] = "ControlRight";
    KeyCodes["MetaLeft"] = "MetaLeft";
    KeyCodes["MetaRight"] = "MetaRight";
    KeyCodes["AltLeft"] = "AltLeft";
    KeyCodes["AltRight"] = "AltRight";
})(KeyCodes || (KeyCodes = {}));
;
exports.default = KeyCodes;


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(25);
exports.Game = Game_1.default;
var Scene_1 = __webpack_require__(26);
exports.Scene = Scene_1.default;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(1);
var FPSCounter_1 = __webpack_require__(31);
var Cursor_1 = __webpack_require__(32);
var HitKeys_1 = __webpack_require__(33);
var HitCircle_1 = __webpack_require__(34);
var g = new engine_1.Game();
// Background
var bg = new engine_1.Rectangle('background', new engine_1.Point(0, 0), true);
bg.color = '#000000';
bg.width = engine_1.Screen.width;
bg.height = engine_1.Screen.height;
g.scene.add(bg);
// Game elements
var hitCircle = new HitCircle_1.default(g.scene);
var hitKeys = new HitKeys_1.default(g.scene);
var cursor = new Cursor_1.default(g.scene);
var fpscounter = new FPSCounter_1.default(g.scene);
// Update bg size on resize
engine_1.Screen.onResize(function () {
    bg.width = engine_1.Screen.width;
    bg.height = engine_1.Screen.height;
});
// Update all game objects
g.renderer.attachUpdate(function () {
    if (hitCircle.element.x - hitCircle.element.size / 2 < engine_1.Mouse.cursorX &&
        hitCircle.element.x + hitCircle.element.size / 2 > engine_1.Mouse.cursorX &&
        hitCircle.element.y - hitCircle.element.size / 2 < engine_1.Mouse.cursorY &&
        hitCircle.element.y + hitCircle.element.size / 2 > engine_1.Mouse.cursorY) {
        hitCircle.element.color = '#1DBBFF';
    }
    else {
        hitCircle.element.color = '#0133DD';
    }
    fpscounter.update();
    hitCircle.update();
    cursor.update();
    hitKeys.update();
});
g.start();


/***/ }),
/* 14 */
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
var GameObject_1 = __webpack_require__(2);
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
var GameObject_1 = __webpack_require__(2);
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
/* 19 */
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
var GameObject_1 = __webpack_require__(2);
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
/* 20 */
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
var GameObject_1 = __webpack_require__(2);
var GameObjectTypes_1 = __webpack_require__(0);
var graphics_1 = __webpack_require__(3);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Key_1 = __webpack_require__(9);
var KeyCodes_1 = __webpack_require__(10);
var rendering_1 = __webpack_require__(4);
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard._init = function () {
        var _this = this;
        this._keys = {};
        for (var key in KeyCodes_1.default) {
            this._keys[key] = new Key_1.default(key);
        }
        rendering_1.Screen.on(['keydown'], function (e) {
            e.preventDefault();
            if (KeyCodes_1.default[e.code] && _this._keys[e.code].isUp()) {
                _this._keys[e.code]._state._switch();
            }
        });
        rendering_1.Screen.on(['keyup'], function (e) {
            e.preventDefault();
            if (KeyCodes_1.default[e.code] && _this._keys[e.code].isDown()) {
                _this._keys[e.code]._state._switch();
            }
        });
        rendering_1.Screen.on(['keypress'], function (e) {
            e.preventDefault();
        });
    };
    Keyboard.getKey = function (key) {
        return this._keys[key];
    };
    Keyboard.key = function (key) {
        return this.getKey(key);
    };
    Keyboard.isDown = function (key) {
        return this._keys[key].isDown();
    };
    Keyboard.isUp = function (key) {
        return this._keys[key].isUp();
    };
    return Keyboard;
}());
exports.default = Keyboard;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timing_1 = __webpack_require__(7);
var root_1 = __webpack_require__(12);
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var now_1 = __webpack_require__(11);
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inputs_1 = __webpack_require__(8);
var rendering_1 = __webpack_require__(4);
var timing_1 = __webpack_require__(7);
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
        inputs_1.Keyboard._init();
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Screen = /** @class */ (function () {
    function Screen() {
    }
    Screen._init = function (canvas) {
        var _this = this;
        this._canvas = canvas;
        this._width = window.innerWidth;
        this._height = window.innerHeight;
        this._onResize = function (event) { };
        window.addEventListener('resize', function (event) {
            _this._width = window.innerWidth;
            _this._height = window.innerHeight;
            _this._canvas.width = _this.width;
            _this._canvas.height = _this.height;
            _this._onResize(event);
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
    Screen.onResize = function (handler) {
        this._onResize = handler;
    };
    return Screen;
}());
exports.default = Screen;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rendering_1 = __webpack_require__(4);
var graphics_1 = __webpack_require__(3);
var InputState_1 = __webpack_require__(6);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Collision_1 = __webpack_require__(30);
exports.Collision = Collision_1.default;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var game_objects_1 = __webpack_require__(5);
var Collision = /** @class */ (function () {
    function Collision() {
    }
    Collision.boxCollide = function (element1, element2) {
        return (element1.x < element2.x + element2.width &&
            element1.x + element1.width > element2.x &&
            element1.y < element2.y + element2.height &&
            element1.height + element1.y > element2.y);
    };
    Collision.circleCollide = function (element1, element2) {
        var dx = element1.x - element2.x;
        var dy = element1.y - element2.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        return (d < element1.size / 2 + element2.size / 2);
    };
    Collision.collide = function (element1, element2) {
        if (element1 instanceof game_objects_1.Circle && element2 instanceof game_objects_1.Circle) {
            return this.circleCollide(element1, element2);
        }
        else {
            var w1 = void 0;
            var h1 = void 0;
            var w2 = void 0;
            var h2 = void 0;
            if (element1 instanceof game_objects_1.Circle) {
                w1 = element1.size;
                h1 = element1.size;
            }
            else {
                w1 = element1.width;
                h1 = element1.height;
            }
            if (element2 instanceof game_objects_1.Circle) {
                w2 = element2.size;
                h2 = element2.size;
            }
            else {
                w2 = element2.width;
                h2 = element2.height;
            }
            return this.boxCollide({ x: element1.x, y: element1.y, width: w1, height: h1 }, { x: element2.x, y: element2.y, width: w2, height: h2 });
        }
    };
    return Collision;
}());
exports.default = Collision;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(1);
var FPSCounter = /** @class */ (function () {
    function FPSCounter(scene) {
        this.element = new engine_1.Label('fps counter');
        this.element.visible = true;
        this.element.setFont(new engine_1.Font('Arial', 12, '#FFFFFF'));
        this.element.text = 'FPS: 0';
        this.element.setPoint(new engine_1.Point(15, 15));
        scene.add(this.element);
    }
    FPSCounter.prototype.update = function () {
        this.element.text = "FPS: " + engine_1.Time.fps;
    };
    return FPSCounter;
}());
exports.default = FPSCounter;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(1);
var Cursor = /** @class */ (function () {
    function Cursor(scene) {
        this.element = new engine_1.Circle('cursor');
        this.element.visible = true;
        this.element.fill = true;
        this.element.color = '#FF0000';
        this.element.size = 30;
        scene.add(this.element);
    }
    Cursor.prototype.update = function () {
        this.element.x = engine_1.Mouse.cursorX;
        this.element.y = engine_1.Mouse.cursorY;
    };
    return Cursor;
}());
exports.default = Cursor;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(1);
var HitKeys = /** @class */ (function () {
    function HitKeys(scene) {
        this.qElement = new engine_1.Rectangle('qrectangle');
        this.qElement.visible = true;
        this.qElement.fill = true;
        this.qElement.color = '#CCDDCC';
        this.qElement.width = 60;
        this.qElement.height = 60;
        this.qLabel = new engine_1.Label('qlabel');
        this.qLabel.visible = true;
        this.qLabel.text = 'Q';
        this.qLabel.fill = true;
        this.qLabel.setFont(new engine_1.Font('Arial', 16, '#000000'));
        this.wElement = new engine_1.Rectangle('wrectangle');
        this.wElement.visible = true;
        this.wElement.fill = true;
        this.wElement.color = '#CCDDCC';
        this.wElement.width = 60;
        this.wElement.height = 60;
        this.wLabel = new engine_1.Label('wlabel');
        this.wLabel.visible = true;
        this.wLabel.text = 'W';
        this.wLabel.fill = true;
        this.wLabel.setFont(new engine_1.Font('Arial', 16, '#000000'));
        this.qElement.setPoint(new engine_1.Point(20, engine_1.Screen.height - 80));
        this.qLabel.setPoint(new engine_1.Point(60, engine_1.Screen.height - 30));
        this.wElement.setPoint(new engine_1.Point(100, engine_1.Screen.height - 80));
        this.wLabel.setPoint(new engine_1.Point(140, engine_1.Screen.height - 30));
        scene.add(this.qElement);
        scene.add(this.qLabel);
        scene.add(this.wElement);
        scene.add(this.wLabel);
    }
    HitKeys.prototype.update = function () {
        if (engine_1.Keyboard.key(engine_1.KeyCodes.KeyQ).isDown()) {
            this.qElement.color = '#113311';
            this.qLabel.setFontColor('#FFFFFF');
        }
        else {
            this.qElement.color = '#CCDDCC';
            this.qLabel.setFontColor('#000000');
        }
        if (engine_1.Keyboard.key(engine_1.KeyCodes.KeyW).isDown()) {
            this.wElement.color = '#113311';
            this.wLabel.setFontColor('#FFFFFF');
        }
        else {
            this.wElement.color = '#CCDDCC';
            this.wLabel.setFontColor('#000000');
        }
    };
    return HitKeys;
}());
exports.default = HitKeys;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(1);
var HitCircle = /** @class */ (function () {
    function HitCircle(scene) {
        this.hit = false;
        this.border = new engine_1.Circle('hit circle border');
        this.border.setPoint(new engine_1.Point(Math.random() * engine_1.Screen.width, Math.random() * engine_1.Screen.height));
        this.border.color = '#FFFFFF';
        this.border.visible = true;
        this.border.size = 84;
        this.element = new engine_1.Circle('hit circle');
        this.element.setPoint(new engine_1.Point(this.border.x, this.border.y));
        this.element.color = '#0133DD';
        this.element.visible = true;
        this.element.size = 80;
        scene.add(this.border);
        scene.add(this.element);
    }
    HitCircle.prototype.update = function () {
        if (this.hit) {
            if (engine_1.Keyboard.key(engine_1.KeyCodes.KeyQ).isUp() && engine_1.Keyboard.key(engine_1.KeyCodes.KeyW).isUp()) {
                this.hit = false;
            }
        }
        if (engine_1.Keyboard.key(engine_1.KeyCodes.KeyQ).isDown() || engine_1.Keyboard.key(engine_1.KeyCodes.KeyW).isDown()) {
            if (!this.hit &&
                this.element.x - this.element.size / 2 < engine_1.Mouse.cursorX &&
                this.element.y - this.element.size / 2 < engine_1.Mouse.cursorY &&
                this.element.x + this.element.size / 2 > engine_1.Mouse.cursorX &&
                this.element.y + this.element.size / 2 > engine_1.Mouse.cursorY) {
                var point = new engine_1.Point(Math.random() * engine_1.Screen.width, Math.random() * engine_1.Screen.height);
                this.border.setPoint(point);
                this.element.setPoint(point);
                this.hit = true;
            }
        }
    };
    return HitCircle;
}());
exports.default = HitCircle;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDEzMGY2MmUzYWU0OTJkODNlZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdFR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcmVuZGVyaW5nL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL0lucHV0U3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90aW1pbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL0tleUNvZGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL25vdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL0ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0xhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9TaGFwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9UaW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9HYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvTW91c2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9waHlzaWNzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcGh5c2ljcy9Db2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbHMvRlBTQ291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFscy9DdXJzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbHMvSGl0S2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzdWFscy9IaXRDaXJjbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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ZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQxMzBmNjJlM2FlNDkyZDgzZWQzIiwiZW51bSBHYW1lT2JqZWN0VHlwZXMge1xyXG4gIFJFQ1RBTkdMRSxcclxuICBDSVJDTEUsXHJcbiAgTEFCRUwsXHJcbiAgU0hBUEUsXHJcbiAgSU1BR0UsXHJcbiAgT1RIRVJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3RUeXBlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdFR5cGVzLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9nYW1lLW9iamVjdHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dyYXBoaWNzJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnB1dHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BoeXNpY3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcm9vdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGltaW5nJztcclxuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5kZXgudHMiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBfdHlwZTogR2FtZU9iamVjdFR5cGVzO1xyXG4gIHByb3RlY3RlZCBfcG9pbnQ6IFBvaW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fcG9pbnQgPSBwb2ludCA/IHBvaW50IDogbmV3IFBvaW50KDAsIDApO1xyXG4gICAgXHJcbiAgICBpZiAodmlzaWJsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHBvaW50ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLk9USEVSO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB0eXBlKCk6IEdhbWVPYmplY3RUeXBlcyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcG9pbnQoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BvaW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wb2ludC54O1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9wb2ludC54ID0geDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucG9pbnQueTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BvaW50LnkgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBvaW50KHBvaW50OiBQb2ludCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9pbnQgPSBwb2ludDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdC50cyIsImltcG9ydCBGb250IGZyb20gJy4vRm9udCc7XHJcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsJztcclxuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoJztcclxuaW1wb3J0IFBhdGhQb2ludCBmcm9tICcuL1BhdGhQb2ludCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgRm9udCxcclxuICBNb2RlbCxcclxuICBQYXRoLFxyXG4gIFBhdGhQb2ludCxcclxuICBQb2ludFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL2luZGV4LnRzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vUmVuZGVyZXInO1xyXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgUmVuZGVyZXIsXHJcbiAgU2NyZWVuXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcmVuZGVyaW5nL2luZGV4LnRzIiwiaW1wb3J0IENpcmNsZSBmcm9tICcuL0NpcmNsZSc7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9SZWN0YW5nbGUnO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9TaGFwZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIENpcmNsZSxcclxuICBHYW1lT2JqZWN0LFxyXG4gIEdhbWVPYmplY3RUeXBlcyxcclxuICBMYWJlbCxcclxuICBSZWN0YW5nbGUsXHJcbiAgU2hhcGVcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvaW5kZXgudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFN0YXRlIHtcclxuICBwcml2YXRlIF9wcmVzc2VkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3ByZXNzZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfc3dpdGNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcHJlc3NlZCA9ICF0aGlzLl9wcmVzc2VkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlc3NlZCA9PT0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByZXNzZWQgPT09IHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL0lucHV0U3RhdGUudHMiLCJpbXBvcnQgVGltZSBmcm9tICcuL1RpbWUnO1xyXG5pbXBvcnQgbm93IGZyb20gJy4vbm93JztcclxuaW1wb3J0IFByb2ZpbGVyIGZyb20gJy4vUHJvZmlsZXInO1xyXG5cclxuZXhwb3J0IHtcclxuICBUaW1lLFxyXG4gIG5vdyxcclxuICBQcm9maWxlclxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9pbmRleC50cyIsImltcG9ydCBJbnB1dFN0YXRlIGZyb20gJy4vSW5wdXRTdGF0ZSc7XHJcbmltcG9ydCBLZXkgZnJvbSAnLi9LZXknO1xyXG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi9LZXlib2FyZCc7XHJcbmltcG9ydCBLZXlDb2RlcyBmcm9tICcuL0tleUNvZGVzJztcclxuaW1wb3J0IE1vdXNlIGZyb20gJy4vTW91c2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICBJbnB1dFN0YXRlLFxyXG4gIEtleSxcclxuICBLZXlib2FyZCxcclxuICBLZXlDb2RlcyxcclxuICBNb3VzZVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9pbmRleC50cyIsImltcG9ydCBLZXlDb2RlcyBmcm9tICcuL0tleUNvZGVzJztcclxuaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleSB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGtleTogS2V5Q29kZXM7XHJcbiAgcHVibGljIF9zdGF0ZTogSW5wdXRTdGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioa2V5OiBLZXlDb2Rlcykge1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaXNVcCgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9LZXkudHMiLCJlbnVtIEtleUNvZGVzIHtcclxuICBEaWdpdDAgPSAnRGlnaXQwJyxcclxuICBEaWdpdDEgPSAnRGlnaXQxJyxcclxuICBEaWdpdDIgPSAnRGlnaXQyJyxcclxuICBEaWdpdDMgPSAnRGlnaXQzJyxcclxuICBEaWdpdDQgPSAnRGlnaXQ0JyxcclxuICBEaWdpdDUgPSAnRGlnaXQ1JyxcclxuICBEaWdpdDYgPSAnRGlnaXQ2JyxcclxuICBEaWdpdDcgPSAnRGlnaXQ3JyxcclxuICBEaWdpdDggPSAnRGlnaXQ4JyxcclxuICBEaWdpdDkgPSAnRGlnaXQ5JyxcclxuXHJcbiAgS2V5QSA9ICdLZXlBJyxcclxuICBLZXlCID0gJ0tleUInLFxyXG4gIEtleUMgPSAnS2V5QycsXHJcbiAgS2V5RCA9ICdLZXlEJyxcclxuICBLZXlFID0gJ0tleUUnLFxyXG4gIEtleUYgPSAnS2V5RicsXHJcbiAgS2V5RyA9ICdLZXlHJyxcclxuICBLZXlIID0gJ0tleUgnLFxyXG4gIEtleUkgPSAnS2V5SScsXHJcbiAgS2V5SiA9ICdLZXlKJyxcclxuICBLZXlLID0gJ0tleUsnLFxyXG4gIEtleUwgPSAnS2V5TCcsXHJcbiAgS2V5TSA9ICdLZXlNJyxcclxuICBLZXlOID0gJ0tleU4nLFxyXG4gIEtleU8gPSAnS2V5TycsXHJcbiAgS2V5UCA9ICdLZXlQJyxcclxuICBLZXlRID0gJ0tleVEnLFxyXG4gIEtleVIgPSAnS2V5UicsXHJcbiAgS2V5UyA9ICdLZXlTJyxcclxuICBLZXlUID0gJ0tleVQnLFxyXG4gIEtleVUgPSAnS2V5VScsXHJcbiAgS2V5ViA9ICdLZXlWJyxcclxuICBLZXlXID0gJ0tleVcnLFxyXG4gIEtleVggPSAnS2V5WCcsXHJcbiAgS2V5WSA9ICdLZXlZJyxcclxuICBLZXlaID0gJ0tleVonLFxyXG5cclxuICBFc2NhcGUgPSAnRXNjYXBlJyxcclxuXHJcbiAgRjEgPSAnRjEnLFxyXG4gIEYyID0gJ0YyJyxcclxuICBGMyA9ICdGMycsXHJcbiAgRjQgPSAnRjQnLFxyXG4gIEY1ID0gJ0Y1JyxcclxuICBGNiA9ICdGNicsXHJcbiAgRjcgPSAnRjcnLFxyXG4gIEY4ID0gJ0Y4JyxcclxuICBGOSA9ICdGOScsXHJcbiAgRjEwID0gJ0YxMCcsXHJcbiAgRjExID0gJ0YxMScsXHJcbiAgRjEyID0gJ0YxMicsXHJcblxyXG4gIEluc2VydCA9ICdJbnNlcnQnLFxyXG4gIERlbGV0ZSA9ICdEZWxldGUnLFxyXG5cclxuICBIb21lID0gJ0hvbWUnLFxyXG4gIEVuZCA9ICdFbmQnLFxyXG4gIFBhZ2VVcCA9ICdQYWdlVXAnLFxyXG4gIFBhZ2VEb3duID0gJ1BhZ2VEb3duJyxcclxuXHJcbiAgTnVtTG9jayA9ICdOdW1Mb2NrJyxcclxuICBOdW1wYWREaXZpZGUgPSAnTnVtcGFkRGl2aWRlJyxcclxuICBOdW1wYWRNdWx0aXBseSA9ICdOdW1wYWRNdWx0aXBseScsXHJcbiAgTnVtcGFkU3VidHJhY3QgPSAnTnVtcGFkU3VidHJhY3QnLFxyXG4gIE51bXBhZEFkZCA9ICdOdW1wYWRBZGQnLFxyXG4gIE51bXBhZEVudGVyID0gJ051bXBhZEVudGVyJyxcclxuICBOdW1wYWREZWNpbWFsID0gJ051bXBhZERlY2ltYWwnLFxyXG4gIE51bXBhZDAgPSAnTnVtcGFkMCcsXHJcbiAgTnVtcGFkMSA9ICdOdW1wYWQxJyxcclxuICBOdW1wYWQyID0gJ051bXBhZDInLFxyXG4gIE51bXBhZDMgPSAnTnVtcGFkMycsXHJcbiAgTnVtcGFkNCA9ICdOdW1wYWQ0JyxcclxuICBOdW1wYWQ1ID0gJ051bXBhZDUnLFxyXG4gIE51bXBhZDYgPSAnTnVtcGFkNicsXHJcbiAgTnVtcGFkNyA9ICdOdW1wYWQ3JyxcclxuICBOdW1wYWQ4ID0gJ051bXBhZDgnLFxyXG4gIE51bXBhZDkgPSAnTnVtcGFkOScsXHJcblxyXG4gIEFycm93VXAgPSAnQXJyb3dVcCcsXHJcbiAgQXJyb3dEb3duID0gJ0Fycm93RG93bicsXHJcbiAgQXJyb3dMZWZ0ID0gJ0Fycm93TGVmdCcsXHJcbiAgQXJyb3dSaWdodCA9ICdBcnJvd1JpZ2h0JyxcclxuXHJcbiAgQmFja3F1b3RlID0gJ0JhY2txdW90ZScsXHJcbiAgTWludXMgPSAnTWludXMnLFxyXG4gIEVxdWFsID0gJ0VxdWFsJyxcclxuICBCYWNrc3BhY2UgPSAnQmFja3NwYWNlJyxcclxuICBCcmFja2V0TGVmdCA9ICdCcmFja2V0TGVmdCcsXHJcbiAgQnJhY2tldFJpZ2h0ID0gJ0JyYWNrZXRSaWdodCcsXHJcbiAgUXVvdGUgPSAnUXVvdGUnLFxyXG4gIEJhY2tzbGFzaCA9ICdCYWNrc2xhc2gnLFxyXG4gIENvbW1hID0gJ0NvbW1hJyxcclxuICBQZXJpb2QgPSAnUGVyaW9kJyxcclxuICBTbGFzaCA9ICdTbGFzaCcsXHJcblxyXG4gIEVudGVyID0gJ0VudGVyJyxcclxuICBTaGlmdExlZnQgPSAnU2hpZnRMZWZ0JyxcclxuICBTaGlmdFJpZ2h0ID0gJ1NoaWZ0UmlnaHQnLFxyXG4gIENhcHNMb2NrID0gJ0NhcHNMb2NrJyxcclxuICBUYWIgPSAnVGFiJyxcclxuICBDb250cm9sTGVmdCA9ICdDb250cm9sTGVmdCcsXHJcbiAgQ29udHJvbFJpZ2h0ID0gJ0NvbnRyb2xSaWdodCcsXHJcbiAgTWV0YUxlZnQgPSAnTWV0YUxlZnQnLFxyXG4gIE1ldGFSaWdodCA9ICdNZXRhUmlnaHQnLFxyXG4gIEFsdExlZnQgPSAnQWx0TGVmdCcsXHJcbiAgQWx0UmlnaHQgPSAnQWx0UmlnaHQnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXlDb2RlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5Q29kZXMudHMiLCJmdW5jdGlvbiBnZXROb3coKTogKCkgPT4gbnVtYmVyIHtcclxuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdztcclxuICB9XHJcblxyXG4gIHJldHVybiBEYXRlLm5vdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Tm93KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdGltaW5nL25vdy50cyIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgR2FtZSxcclxuICBTY2VuZVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Jvb3QvaW5kZXgudHMiLCJpbXBvcnQgeyBHYW1lLCBSZWN0YW5nbGUsIFNjcmVlbiwgUG9pbnQsIE1vdXNlIH0gZnJvbSAnLi9lbmdpbmUnO1xyXG5cclxuaW1wb3J0IEZQU0NvdW50ZXIgZnJvbSAnLi92aXN1YWxzL0ZQU0NvdW50ZXInO1xyXG5pbXBvcnQgQ3Vyc29yIGZyb20gJy4vdmlzdWFscy9DdXJzb3InO1xyXG5pbXBvcnQgSGl0S2V5cyBmcm9tICcuL3Zpc3VhbHMvSGl0S2V5cyc7XHJcbmltcG9ydCBIaXRDaXJjbGUgZnJvbSAnLi92aXN1YWxzL0hpdENpcmNsZSc7XHJcblxyXG5jb25zdCBnID0gbmV3IEdhbWUoKTtcclxuXHJcbi8vIEJhY2tncm91bmRcclxuY29uc3QgYmcgPSBuZXcgUmVjdGFuZ2xlKCdiYWNrZ3JvdW5kJywgbmV3IFBvaW50KDAsIDApLCB0cnVlKTtcclxuYmcuY29sb3IgPSAnIzAwMDAwMCc7XHJcbmJnLndpZHRoID0gU2NyZWVuLndpZHRoO1xyXG5iZy5oZWlnaHQgPSBTY3JlZW4uaGVpZ2h0O1xyXG5nLnNjZW5lLmFkZChiZyk7XHJcblxyXG4vLyBHYW1lIGVsZW1lbnRzXHJcbmNvbnN0IGhpdENpcmNsZSA9IG5ldyBIaXRDaXJjbGUoZy5zY2VuZSk7XHJcbmNvbnN0IGhpdEtleXMgPSBuZXcgSGl0S2V5cyhnLnNjZW5lKTtcclxuY29uc3QgY3Vyc29yID0gbmV3IEN1cnNvcihnLnNjZW5lKTtcclxuY29uc3QgZnBzY291bnRlciA9IG5ldyBGUFNDb3VudGVyKGcuc2NlbmUpO1xyXG5cclxuLy8gVXBkYXRlIGJnIHNpemUgb24gcmVzaXplXHJcblNjcmVlbi5vblJlc2l6ZSgoKSA9PiB7XHJcbiAgYmcud2lkdGggPSBTY3JlZW4ud2lkdGg7XHJcbiAgYmcuaGVpZ2h0ID0gU2NyZWVuLmhlaWdodDtcclxufSk7XHJcblxyXG4vLyBVcGRhdGUgYWxsIGdhbWUgb2JqZWN0c1xyXG5nLnJlbmRlcmVyLmF0dGFjaFVwZGF0ZSgoKSA9PiB7XHJcbiAgaWYgKGhpdENpcmNsZS5lbGVtZW50LnggLSBoaXRDaXJjbGUuZWxlbWVudC5zaXplIC8gMiA8IE1vdXNlLmN1cnNvclggJiZcclxuICAgIGhpdENpcmNsZS5lbGVtZW50LnggKyBoaXRDaXJjbGUuZWxlbWVudC5zaXplIC8gMiA+IE1vdXNlLmN1cnNvclggJiZcclxuICAgIGhpdENpcmNsZS5lbGVtZW50LnkgLSBoaXRDaXJjbGUuZWxlbWVudC5zaXplIC8gMiA8IE1vdXNlLmN1cnNvclkgJiZcclxuICAgIGhpdENpcmNsZS5lbGVtZW50LnkgKyBoaXRDaXJjbGUuZWxlbWVudC5zaXplIC8gMiA+IE1vdXNlLmN1cnNvcllcclxuICApIHtcclxuICAgIGhpdENpcmNsZS5lbGVtZW50LmNvbG9yID0gJyMxREJCRkYnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBoaXRDaXJjbGUuZWxlbWVudC5jb2xvciA9ICcjMDEzM0REJztcclxuICB9XHJcblxyXG4gIGZwc2NvdW50ZXIudXBkYXRlKCk7XHJcbiAgaGl0Q2lyY2xlLnVwZGF0ZSgpO1xyXG4gIGN1cnNvci51cGRhdGUoKTtcclxuICBoaXRLZXlzLnVwZGF0ZSgpO1xyXG59KTtcclxuXHJcbmcuc3RhcnQoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHNpemU6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgcHVibGljIGZpbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLkNJUkNMRTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvQ2lyY2xlLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9udCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGZvbnROYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIGZvbnRTaXplOiBudW1iZXI7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGZvbnROYW1lOiBzdHJpbmcgPSAnQXJpYWwnLCBmb250U2l6ZTogbnVtYmVyID0gMTIsIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCcpIHtcclxuICAgIHRoaXMuZm9udE5hbWUgPSBmb250TmFtZTtcclxuICAgIHRoaXMuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9Gb250LnRzIiwiaW1wb3J0IFBhdGhQb2ludCBmcm9tICcuL1BhdGhQb2ludCc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4vUGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XHJcbiAgcHJpdmF0ZSBfcGF0aDogUGF0aDtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aDogUGF0aCA9IFtdKSB7XHJcbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGF0aCgpOiBQYXRoIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5fcGF0aF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHBhdGgocGF0aDogUGF0aCkge1xyXG4gICAgdGhpcy5fcGF0aCA9IFsuLi5wYXRoXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQb2ludChpbmRleDogbnVtYmVyKTogUGF0aFBvaW50fG51bGwge1xyXG4gICAgaWYgKGluZGV4IDwgdGhpcy5fcGF0aC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICB0aGlzLl9wYXRoW2luZGV4XVswXSxcclxuICAgICAgICB0aGlzLl9wYXRoW2luZGV4XVsxXVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBvaW50KGluZGV4OiBudW1iZXIsIHBhdGhQb2ludDogUGF0aFBvaW50KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9wYXRoLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9wYXRoW2luZGV4XSA9IFtcclxuICAgICAgICBwYXRoUG9pbnRbMF0sXHJcbiAgICAgICAgcGF0aFBvaW50WzFdXHJcbiAgICAgIF07XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkUG9pbnQocGF0aFBvaW50OiBQYXRoUG9pbnQpIHtcclxuICAgIHRoaXMuX3BhdGgucHVzaChwYXRoUG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVBvaW50KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuX3BhdGgubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3BhdGguc2xpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL01vZGVsLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL1BvaW50LnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50LCBGb250IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgdGV4dDogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGZpbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBmb250OiBGb250O1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5MQUJFTDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGb250KGZvbnQ6IEZvbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9udCA9IGZvbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Rm9udFNpemUoZm9udFNpemU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5mb250LmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Rm9udENvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9udC5jb2xvciA9IGNvbG9yO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9MYWJlbC50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgc3VwZXIobmFtZSwgcG9pbnQsIHZpc2libGUpO1xyXG5cclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuUkVDVEFOR0xFO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9SZWN0YW5nbGUudHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQsIE1vZGVsIH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbW9kZWw6IE1vZGVsO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgc3VwZXIobmFtZSwgcG9pbnQsIHZpc2libGUpO1xyXG5cclxuICAgIHRoaXMubW9kZWwgPSBuZXcgTW9kZWwoKTtcclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuU0hBUEU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1NoYXBlLnRzIiwiaW1wb3J0IEtleSBmcm9tICcuL0tleSc7XHJcbmltcG9ydCBLZXlDb2RlcyBmcm9tICcuL0tleUNvZGVzJztcclxuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEtleWJvYXJkIHtcclxuICBwcml2YXRlIHN0YXRpYyBfa2V5czogQ29sbGVjdGlvbjxLZXk+O1xyXG4gIFxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9rZXlzID0ge307XHJcbiAgICBcclxuICAgIGZvciAoY29uc3Qga2V5IGluIEtleUNvZGVzKSB7XHJcbiAgICAgIHRoaXMuX2tleXNba2V5XSA9IG5ldyBLZXkoPEtleUNvZGVzPmtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2NyZWVuLm9uKFsna2V5ZG93biddLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAoS2V5Q29kZXNbPGFueT5lLmNvZGVdICYmIHRoaXMuX2tleXNbZS5jb2RlXS5pc1VwKCkpIHtcclxuICAgICAgICB0aGlzLl9rZXlzW2UuY29kZV0uX3N0YXRlLl9zd2l0Y2goKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgU2NyZWVuLm9uKFsna2V5dXAnXSwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKEtleUNvZGVzWzxhbnk+ZS5jb2RlXSAmJiB0aGlzLl9rZXlzW2UuY29kZV0uaXNEb3duKCkpIHtcclxuICAgICAgICB0aGlzLl9rZXlzW2UuY29kZV0uX3N0YXRlLl9zd2l0Y2goKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgU2NyZWVuLm9uKFsna2V5cHJlc3MnXSwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEtleShrZXk6IEtleUNvZGVzKTogS2V5IHtcclxuICAgIHJldHVybiB0aGlzLl9rZXlzW2tleV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGtleShrZXk6IEtleUNvZGVzKTogS2V5IHtcclxuICAgIHJldHVybiB0aGlzLmdldEtleShrZXkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc0Rvd24oa2V5OiBLZXlDb2Rlcyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2tleXNba2V5XS5pc0Rvd24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNVcChrZXk6IEtleUNvZGVzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fa2V5c1trZXldLmlzVXAoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5Ym9hcmQudHMiLCJpbXBvcnQgeyBUaW1lIH0gZnJvbSAnLi4vdGltaW5nJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9yb290JztcclxuaW1wb3J0IHtcclxuICBHYW1lT2JqZWN0LFxyXG4gIEdhbWVPYmplY3RUeXBlcyxcclxuICBSZWN0YW5nbGUsXHJcbiAgQ2lyY2xlLFxyXG4gIFNoYXBlLFxyXG4gIExhYmVsXHJcbn0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcclxuICBwdWJsaWMgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHB1YmxpYyBzY2VuZTogU2NlbmU7XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25GcmFtZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3VwZGF0ZXM6IEZ1bmN0aW9uW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBTY2VuZSgpO1xyXG4gICAgdGhpcy5fdXBkYXRlcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZyYW1lOiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcihmcmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGF0dGFjaFVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLl91cGRhdGVzLnB1c2godXBkYXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKGZyYW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIFRpbWUuX3NldEZyYW1lKGZyYW1lKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB0aGlzLl91cGRhdGVzKSB7XHJcbiAgICAgIHVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCwgdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZ2FtZU9iamVjdE5hbWUgaW4gdGhpcy5zY2VuZS5nZXRBbGwoKSkge1xyXG4gICAgICBjb25zdCBnYW1lT2JqZWN0ID0gPEdhbWVPYmplY3Q+dGhpcy5zY2VuZS5nZXQoZ2FtZU9iamVjdE5hbWUpO1xyXG4gICAgICBcclxuICAgICAgaWYgKCFnYW1lT2JqZWN0LnZpc2libGUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBSZWN0YW5nbGUpIHtcclxuICAgICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC54LFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnksXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QuaGVpZ2h0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueCxcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC55LFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LmhlaWdodFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIENpcmNsZSkge1xyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LnNpemUgPT09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSwgZ2FtZU9iamVjdC5zaXplIC8gMiwgMCwgMiAqIE1hdGguUEkpO1xyXG5cclxuICAgICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBTaGFwZSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55KTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IHBhdGhQb2ludCBvZiBnYW1lT2JqZWN0Lm1vZGVsLnBhdGgpIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocGF0aFBvaW50WzBdLCBwYXRoUG9pbnRbMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdhbWVPYmplY3QuZmlsbCkge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgTGFiZWwpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IGAke2dhbWVPYmplY3QuZm9udC5mb250U2l6ZX1weCAke2dhbWVPYmplY3QuZm9udC5mb250TmFtZX1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LmZpbGwpIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBnYW1lT2JqZWN0LmZvbnQuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoZ2FtZU9iamVjdC50ZXh0LCBnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuZm9udC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VUZXh0KGdhbWVPYmplY3QudGV4dCwgZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmcmFtZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyKGZyYW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9SZW5kZXJlci50cyIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFRpbWUge1xyXG4gIHByaXZhdGUgc3RhdGljIF9kZWx0YVRpbWU6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfdGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9mcHM6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5pdCgpIHtcclxuICAgIHRoaXMuX2RlbHRhVGltZSA9IDA7XHJcbiAgICB0aGlzLl90aW1lID0gMDtcclxuICAgIHRoaXMuX2ZwcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX3NldEZyYW1lKGZyYW1lOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2RlbHRhVGltZSA9IGZyYW1lIC0gdGhpcy5fdGltZTtcclxuICAgIHRoaXMuX3RpbWUgPSBmcmFtZTtcclxuICAgIHRoaXMuX2ZwcyA9IE1hdGgucm91bmQoMTAwMCAvIHRoaXMuX2RlbHRhVGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBkZWx0YVRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWx0YVRpbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCB0aW1lKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGZwcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZwcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvVGltZS50cyIsImltcG9ydCBub3cgZnJvbSAnLi9ub3cnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZXIge1xyXG4gIHB1YmxpYyBzdGFydFRpbWU6IG51bWJlcjtcclxuICBwdWJsaWMgZW5kVGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3N0ZXBzOiBudW1iZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVuZFRpbWUgPSAwO1xyXG4gICAgdGhpcy5fc3RlcHMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmVuZFRpbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXJ0VGltZSkge1xyXG4gICAgICByZXR1cm4gbm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzdGVwcygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX3N0ZXBzXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZW5kVGltZSA9IDA7XHJcbiAgICB0aGlzLl9zdGVwcyA9IFtdO1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSBub3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGVwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RhcnRUaW1lKSB7XHJcbiAgICAgIHRoaXMuX3N0ZXBzLnB1c2gobm93KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVuZFRpbWUgPSBub3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGVwKGluZGV4OiBudW1iZXIpOiBudW1iZXJ8bnVsbCB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9zdGVwcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3N0ZXBzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGVwRHVyYXRpb24oaW5kZXg6IG51bWJlcik6IG51bWJlcnxudWxsIHtcclxuICAgIGNvbnN0IHN0ZXA6IG51bWJlcnxudWxsID0gdGhpcy5nZXRTdGVwKGluZGV4KTtcclxuXHJcbiAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gc3RlcCAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0ZXBEdXJhdGlvbnMoKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3Qgc3RlcHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBzdGVwIG9mIHRoaXMuc3RlcHMpIHtcclxuICAgICAgc3RlcHMucHVzaChzdGVwIC0gdGhpcy5zdGFydFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGVwcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvUHJvZmlsZXIudHMiLCJpbXBvcnQgeyBNb3VzZSwgS2V5Ym9hcmQgfSBmcm9tICcuLi9pbnB1dHMnO1xyXG5pbXBvcnQgeyBTY3JlZW4sIFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3RpbWluZyc7XHJcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgR2FtZS5cclxuICAgKiBAcGFyYW0gY2FudmFzIFRoZSBjYW52YXMgdG8gY3JlYXRlIHRoZSBnYW1lIGluLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcig8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPnRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykpO1xyXG4gICAgdGhpcy5fc2NlbmUgPSB0aGlzLnJlbmRlcmVyLnNjZW5lO1xyXG5cclxuICAgIFRpbWUuX2luaXQoKTtcclxuICAgIE1vdXNlLl9pbml0KCk7XHJcbiAgICBLZXlib2FyZC5faW5pdCgpO1xyXG4gICAgU2NyZWVuLl9pbml0KHRoaXMuY2FudmFzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2NlbmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2NlbmUoc2NlbmU6IFNjZW5lKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNjZW5lID0gc2NlbmU7XHJcbiAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcm9vdC9HYW1lLnRzIiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4uL2dhbWUtb2JqZWN0cyc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XHJcbiAgcHJpdmF0ZSBfZ2FtZU9iamVjdHM6IENvbGxlY3Rpb248R2FtZU9iamVjdD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fZ2FtZU9iamVjdHMgPSB7fTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY29udGFpbnMoZ2FtZU9iamVjdC5uYW1lKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3QubmFtZV0gPSBnYW1lT2JqZWN0O1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbnMoZ2FtZU9iamVjdE5hbWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZGVsZXRlIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIGdldChnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogR2FtZU9iamVjdHxudWxsIHtcclxuICAgIGlmICghdGhpcy5jb250YWlucyhnYW1lT2JqZWN0TmFtZSkpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0c1tnYW1lT2JqZWN0TmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QWxsKCk6IENvbGxlY3Rpb248R2FtZU9iamVjdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnRhaW5zKGdhbWVPYmplY3ROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0cy5oYXNPd25Qcm9wZXJ0eShnYW1lT2JqZWN0TmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9nYW1lT2JqZWN0cyA9IHt9O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Jvb3QvU2NlbmUudHMiLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBTY3JlZW4ge1xyXG4gIHByaXZhdGUgc3RhdGljIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgc3RhdGljIF93aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9oZWlnaHQ6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfb25SZXNpemU6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIFxyXG4gICAgdGhpcy5fb25SZXNpemUgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7fTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICB0aGlzLl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuX29uUmVzaXplKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb24oZXZlbnROYW1lczogc3RyaW5nW10sIGV2ZW50SGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudEhhbmRsZXIoZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBvblJlc2l6ZShoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5fb25SZXNpemUgPSA8KGV2ZW50OiBFdmVudCkgPT4gdm9pZD5oYW5kbGVyO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIE1vdXNlIHtcclxuICBwcml2YXRlIHN0YXRpYyBfY3Vyc29yOiBQb2ludDtcclxuICBwcml2YXRlIHN0YXRpYyBfbGVmdENsaWNrOiBJbnB1dFN0YXRlO1xyXG4gIHByaXZhdGUgc3RhdGljIF9taWRkbGVDbGljazogSW5wdXRTdGF0ZTtcclxuICBwcml2YXRlIHN0YXRpYyBfcmlnaHRDbGljazogSW5wdXRTdGF0ZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2N1cnNvciA9IG5ldyBQb2ludChTY3JlZW4ud2lkdGggLyAyLCBTY3JlZW4uaGVpZ2h0IC8gMik7XHJcbiAgICB0aGlzLl9sZWZ0Q2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5fbWlkZGxlQ2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5fcmlnaHRDbGljayA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBjdXJzb3IoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnNvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGN1cnNvclgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnNvci54O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgY3Vyc29yWSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3Vyc29yLnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBidXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0aGlzLmxlZnRCdXR0b25Eb3duIHx8IHRoaXMubWlkZGxlQnV0dG9uRG93biB8fCB0aGlzLnJpZ2h0QnV0dG9uRG93bik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBsZWZ0QnV0dG9uRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sZWZ0Q2xpY2suaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBtaWRkbGVCdXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pZGRsZUNsaWNrLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgcmlnaHRCdXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0Q2xpY2suaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBsZWZ0QnV0dG9uVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGVmdENsaWNrLmlzVXAoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG1pZGRsZUJ1dHRvblVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pZGRsZUNsaWNrLmlzVXAoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHJpZ2h0QnV0dG9uVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmlnaHRDbGljay5pc1VwKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbml0RXZlbnRzKCk6IHZvaWQge1xyXG4gICAgU2NyZWVuLm9uKFsnbW91c2Vtb3ZlJ10sIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2N1cnNvci54ID0gZS5jbGllbnRYO1xyXG4gICAgICB0aGlzLl9jdXJzb3IueSA9IGUuY2xpZW50WTtcclxuICAgIH0pO1xyXG5cclxuICAgIFNjcmVlbi5vbihbJ21vdXNlZG93bicsICdtb3VzZXVwJ10sIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHN3aXRjaChlLmJ1dHRvbikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHRoaXMuX2xlZnRDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLl9taWRkbGVDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICB0aGlzLl9yaWdodENsaWNrLl9zd2l0Y2goKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JlZW4ub24oWydjb250ZXh0bWVudSddLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9Nb3VzZS50cyIsImltcG9ydCBDb2xsaXNpb24gZnJvbSAnLi9Db2xsaXNpb24nO1xyXG5cclxuZXhwb3J0IHtcclxuICBDb2xsaXNpb25cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9waHlzaWNzL2luZGV4LnRzIiwiaW1wb3J0IHsgUmVjdGFuZ2xlLCBDaXJjbGUsIEdhbWVPYmplY3QgfSBmcm9tICcuLi9nYW1lLW9iamVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29sbGlzaW9uIHtcclxuICBwdWJsaWMgc3RhdGljIGJveENvbGxpZGUoZWxlbWVudDE6IFJlY3RhbmdsZSwgZWxlbWVudDI6IFJlY3RhbmdsZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZWxlbWVudDEueCA8IGVsZW1lbnQyLnggKyBlbGVtZW50Mi53aWR0aCAmJlxyXG4gICAgICBlbGVtZW50MS54ICsgZWxlbWVudDEud2lkdGggPiBlbGVtZW50Mi54ICYmXHJcbiAgICAgIGVsZW1lbnQxLnkgPCBlbGVtZW50Mi55ICsgZWxlbWVudDIuaGVpZ2h0ICYmXHJcbiAgICAgIGVsZW1lbnQxLmhlaWdodCArIGVsZW1lbnQxLnkgPiBlbGVtZW50Mi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjaXJjbGVDb2xsaWRlKGVsZW1lbnQxOiBDaXJjbGUsIGVsZW1lbnQyOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGR4OiBudW1iZXIgPSBlbGVtZW50MS54IC0gZWxlbWVudDIueDtcclxuICAgIGNvbnN0IGR5OiBudW1iZXIgPSBlbGVtZW50MS55IC0gZWxlbWVudDIueTtcclxuICAgIGNvbnN0IGQ6IG51bWJlciA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgZCA8IGVsZW1lbnQxLnNpemUgLyAyICsgZWxlbWVudDIuc2l6ZSAvIDJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNvbGxpZGUoZWxlbWVudDE6IFJlY3RhbmdsZXxDaXJjbGUsIGVsZW1lbnQyOiBSZWN0YW5nbGV8Q2lyY2xlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZWxlbWVudDEgaW5zdGFuY2VvZiBDaXJjbGUgJiYgZWxlbWVudDIgaW5zdGFuY2VvZiBDaXJjbGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlQ29sbGlkZShlbGVtZW50MSwgZWxlbWVudDIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHcxOiBudW1iZXI7XHJcbiAgICAgIGxldCBoMTogbnVtYmVyO1xyXG4gICAgICBsZXQgdzI6IG51bWJlcjtcclxuICAgICAgbGV0IGgyOiBudW1iZXI7XHJcblxyXG4gICAgICBpZiAoZWxlbWVudDEgaW5zdGFuY2VvZiBDaXJjbGUpIHtcclxuICAgICAgICB3MSA9IGVsZW1lbnQxLnNpemU7XHJcbiAgICAgICAgaDEgPSBlbGVtZW50MS5zaXplO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHcxID0gZWxlbWVudDEud2lkdGg7XHJcbiAgICAgICAgaDEgPSBlbGVtZW50MS5oZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbGVtZW50MiBpbnN0YW5jZW9mIENpcmNsZSkge1xyXG4gICAgICAgIHcyID0gZWxlbWVudDIuc2l6ZTtcclxuICAgICAgICBoMiA9IGVsZW1lbnQyLnNpemU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdzIgPSBlbGVtZW50Mi53aWR0aDtcclxuICAgICAgICBoMiA9IGVsZW1lbnQyLmhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYm94Q29sbGlkZShcclxuICAgICAgICA8UmVjdGFuZ2xlPnt4OiBlbGVtZW50MS54LCB5OiBlbGVtZW50MS55LCB3aWR0aDogdzEsIGhlaWdodDogaDF9LFxyXG4gICAgICAgIDxSZWN0YW5nbGU+e3g6IGVsZW1lbnQyLngsIHk6IGVsZW1lbnQyLnksIHdpZHRoOiB3MiwgaGVpZ2h0OiBoMn1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9waHlzaWNzL0NvbGxpc2lvbi50cyIsImltcG9ydCB7IExhYmVsLCBQb2ludCwgU2NlbmUsIFRpbWUsIEZvbnQgfSBmcm9tICcuLi9lbmdpbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRlBTQ291bnRlciB7XHJcbiAgcHVibGljIGVsZW1lbnQ6IExhYmVsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IG5ldyBMYWJlbCgnZnBzIGNvdW50ZXInKTtcclxuICAgIHRoaXMuZWxlbWVudC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRGb250KG5ldyBGb250KCdBcmlhbCcsIDEyLCAnI0ZGRkZGRicpKTtcclxuICAgIHRoaXMuZWxlbWVudC50ZXh0ID0gJ0ZQUzogMCc7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0UG9pbnQobmV3IFBvaW50KDE1LCAxNSkpO1xyXG5cclxuICAgIHNjZW5lLmFkZCh0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudC50ZXh0ID0gYEZQUzogJHtUaW1lLmZwc31gO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFscy9GUFNDb3VudGVyLnRzIiwiaW1wb3J0IHsgTW91c2UsIENpcmNsZSwgU2NlbmUgfSBmcm9tICcuLi9lbmdpbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Vyc29yIHtcclxuICBwdWJsaWMgZWxlbWVudDogQ2lyY2xlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IG5ldyBDaXJjbGUoJ2N1cnNvcicpO1xyXG4gICAgdGhpcy5lbGVtZW50LnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5lbGVtZW50LmZpbGwgPSB0cnVlO1xyXG4gICAgdGhpcy5lbGVtZW50LmNvbG9yID0gJyNGRjAwMDAnO1xyXG4gICAgdGhpcy5lbGVtZW50LnNpemUgPSAzMDtcclxuXHJcbiAgICBzY2VuZS5hZGQodGhpcy5lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnQueCA9IE1vdXNlLmN1cnNvclg7XHJcbiAgICB0aGlzLmVsZW1lbnQueSA9IE1vdXNlLmN1cnNvclk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxzL0N1cnNvci50cyIsImltcG9ydCB7IFJlY3RhbmdsZSwgTGFiZWwsIFNjZW5lLCBGb250LCBTY3JlZW4sIFBvaW50LCBLZXlib2FyZCwgS2V5Q29kZXMgfSBmcm9tICcuLi9lbmdpbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGl0S2V5cyB7XHJcbiAgcHVibGljIHFFbGVtZW50OiBSZWN0YW5nbGU7XHJcbiAgcHVibGljIHFMYWJlbDogTGFiZWw7XHJcbiAgcHVibGljIHdFbGVtZW50OiBSZWN0YW5nbGU7XHJcbiAgcHVibGljIHdMYWJlbDogTGFiZWw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSkge1xyXG4gICAgdGhpcy5xRWxlbWVudCA9IG5ldyBSZWN0YW5nbGUoJ3FyZWN0YW5nbGUnKTtcclxuICAgIHRoaXMucUVsZW1lbnQudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLnFFbGVtZW50LmZpbGwgPSB0cnVlO1xyXG4gICAgdGhpcy5xRWxlbWVudC5jb2xvciA9ICcjQ0NERENDJztcclxuICAgIHRoaXMucUVsZW1lbnQud2lkdGggPSA2MDtcclxuICAgIHRoaXMucUVsZW1lbnQuaGVpZ2h0ID0gNjA7XHJcbiAgICB0aGlzLnFMYWJlbCA9IG5ldyBMYWJlbCgncWxhYmVsJyk7XHJcbiAgICB0aGlzLnFMYWJlbC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMucUxhYmVsLnRleHQgPSAnUSc7XHJcbiAgICB0aGlzLnFMYWJlbC5maWxsID0gdHJ1ZTtcclxuICAgIHRoaXMucUxhYmVsLnNldEZvbnQobmV3IEZvbnQoJ0FyaWFsJywgMTYsICcjMDAwMDAwJykpO1xyXG5cclxuICAgIHRoaXMud0VsZW1lbnQgPSBuZXcgUmVjdGFuZ2xlKCd3cmVjdGFuZ2xlJyk7XHJcbiAgICB0aGlzLndFbGVtZW50LnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy53RWxlbWVudC5maWxsID0gdHJ1ZTtcclxuICAgIHRoaXMud0VsZW1lbnQuY29sb3IgPSAnI0NDRERDQyc7XHJcbiAgICB0aGlzLndFbGVtZW50LndpZHRoID0gNjA7XHJcbiAgICB0aGlzLndFbGVtZW50LmhlaWdodCA9IDYwO1xyXG4gICAgdGhpcy53TGFiZWwgPSBuZXcgTGFiZWwoJ3dsYWJlbCcpO1xyXG4gICAgdGhpcy53TGFiZWwudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLndMYWJlbC50ZXh0ID0gJ1cnO1xyXG4gICAgdGhpcy53TGFiZWwuZmlsbCA9IHRydWU7XHJcbiAgICB0aGlzLndMYWJlbC5zZXRGb250KG5ldyBGb250KCdBcmlhbCcsIDE2LCAnIzAwMDAwMCcpKTtcclxuXHJcbiAgICB0aGlzLnFFbGVtZW50LnNldFBvaW50KG5ldyBQb2ludCgyMCwgU2NyZWVuLmhlaWdodCAtIDgwKSk7XHJcbiAgICB0aGlzLnFMYWJlbC5zZXRQb2ludChuZXcgUG9pbnQoNjAsIFNjcmVlbi5oZWlnaHQgLSAzMCkpO1xyXG5cclxuICAgIHRoaXMud0VsZW1lbnQuc2V0UG9pbnQobmV3IFBvaW50KDEwMCwgU2NyZWVuLmhlaWdodCAtIDgwKSk7XHJcbiAgICB0aGlzLndMYWJlbC5zZXRQb2ludChuZXcgUG9pbnQoMTQwLCBTY3JlZW4uaGVpZ2h0IC0gMzApKTtcclxuXHJcbiAgICBzY2VuZS5hZGQodGhpcy5xRWxlbWVudCk7XHJcbiAgICBzY2VuZS5hZGQodGhpcy5xTGFiZWwpO1xyXG4gICAgc2NlbmUuYWRkKHRoaXMud0VsZW1lbnQpO1xyXG4gICAgc2NlbmUuYWRkKHRoaXMud0xhYmVsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAoS2V5Ym9hcmQua2V5KEtleUNvZGVzLktleVEpLmlzRG93bigpKSB7XHJcbiAgICAgIHRoaXMucUVsZW1lbnQuY29sb3IgPSAnIzExMzMxMSc7XHJcbiAgICAgIHRoaXMucUxhYmVsLnNldEZvbnRDb2xvcignI0ZGRkZGRicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5xRWxlbWVudC5jb2xvciA9ICcjQ0NERENDJztcclxuICAgICAgdGhpcy5xTGFiZWwuc2V0Rm9udENvbG9yKCcjMDAwMDAwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEtleWJvYXJkLmtleShLZXlDb2Rlcy5LZXlXKS5pc0Rvd24oKSkge1xyXG4gICAgICB0aGlzLndFbGVtZW50LmNvbG9yID0gJyMxMTMzMTEnO1xyXG4gICAgICB0aGlzLndMYWJlbC5zZXRGb250Q29sb3IoJyNGRkZGRkYnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud0VsZW1lbnQuY29sb3IgPSAnI0NDRERDQyc7XHJcbiAgICAgIHRoaXMud0xhYmVsLnNldEZvbnRDb2xvcignIzAwMDAwMCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFscy9IaXRLZXlzLnRzIiwiaW1wb3J0IHsgQ2lyY2xlLCBTY2VuZSwgUG9pbnQsIFNjcmVlbiwgS2V5Ym9hcmQsIE1vdXNlLCBLZXlDb2RlcyB9IGZyb20gJy4uL2VuZ2luZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaXRDaXJjbGUge1xyXG4gIHB1YmxpYyBib3JkZXI6IENpcmNsZTtcclxuICBwdWJsaWMgZWxlbWVudDogQ2lyY2xlO1xyXG4gIHB1YmxpYyBoaXQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSkge1xyXG4gICAgdGhpcy5oaXQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmJvcmRlciA9IG5ldyBDaXJjbGUoJ2hpdCBjaXJjbGUgYm9yZGVyJyk7XHJcbiAgICB0aGlzLmJvcmRlci5zZXRQb2ludChuZXcgUG9pbnQoTWF0aC5yYW5kb20oKSAqIFNjcmVlbi53aWR0aCwgTWF0aC5yYW5kb20oKSAqIFNjcmVlbi5oZWlnaHQpKTtcclxuICAgIHRoaXMuYm9yZGVyLmNvbG9yID0gJyNGRkZGRkYnO1xyXG4gICAgdGhpcy5ib3JkZXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmJvcmRlci5zaXplID0gODQ7XHJcbiAgICBcclxuICAgIHRoaXMuZWxlbWVudCA9IG5ldyBDaXJjbGUoJ2hpdCBjaXJjbGUnKTtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRQb2ludChuZXcgUG9pbnQodGhpcy5ib3JkZXIueCwgdGhpcy5ib3JkZXIueSkpO1xyXG4gICAgdGhpcy5lbGVtZW50LmNvbG9yID0gJyMwMTMzREQnO1xyXG4gICAgdGhpcy5lbGVtZW50LnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5lbGVtZW50LnNpemUgPSA4MDtcclxuXHJcbiAgICBzY2VuZS5hZGQodGhpcy5ib3JkZXIpO1xyXG4gICAgc2NlbmUuYWRkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGl0KSB7XHJcbiAgICAgIGlmIChLZXlib2FyZC5rZXkoS2V5Q29kZXMuS2V5USkuaXNVcCgpICYmIEtleWJvYXJkLmtleShLZXlDb2Rlcy5LZXlXKS5pc1VwKCkpIHtcclxuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEtleWJvYXJkLmtleShLZXlDb2Rlcy5LZXlRKS5pc0Rvd24oKSB8fCBLZXlib2FyZC5rZXkoS2V5Q29kZXMuS2V5VykuaXNEb3duKCkpIHtcclxuICAgICAgaWYgKCF0aGlzLmhpdCAmJlxyXG4gICAgICAgICAgdGhpcy5lbGVtZW50LnggLSB0aGlzLmVsZW1lbnQuc2l6ZSAvIDIgPCBNb3VzZS5jdXJzb3JYICYmXHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnQueSAtIHRoaXMuZWxlbWVudC5zaXplIC8gMiA8IE1vdXNlLmN1cnNvclkgJiZcclxuICAgICAgICAgIHRoaXMuZWxlbWVudC54ICsgdGhpcy5lbGVtZW50LnNpemUgLyAyID4gTW91c2UuY3Vyc29yWCAmJlxyXG4gICAgICAgICAgdGhpcy5lbGVtZW50LnkgKyB0aGlzLmVsZW1lbnQuc2l6ZSAvIDIgPiBNb3VzZS5jdXJzb3JZXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KE1hdGgucmFuZG9tKCkgKiBTY3JlZW4ud2lkdGgsIE1hdGgucmFuZG9tKCkgKiBTY3JlZW4uaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmJvcmRlci5zZXRQb2ludChwb2ludCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldFBvaW50KHBvaW50KTtcclxuICAgICAgICB0aGlzLmhpdCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbHMvSGl0Q2lyY2xlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==