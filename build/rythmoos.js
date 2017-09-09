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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
var Font_1 = __webpack_require__(15);
exports.Font = Font_1.default;
var Model_1 = __webpack_require__(16);
exports.Model = Model_1.default;
var Point_1 = __webpack_require__(17);
exports.Point = Point_1.default;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = __webpack_require__(22);
exports.Renderer = Renderer_1.default;
var Screen_1 = __webpack_require__(27);
exports.Screen = Screen_1.default;


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
var Time_1 = __webpack_require__(23);
exports.Time = Time_1.default;
var now_1 = __webpack_require__(10);
exports.now = now_1.default;
var Profiler_1 = __webpack_require__(24);
exports.Profiler = Profiler_1.default;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = __webpack_require__(14);
exports.Circle = Circle_1.default;
var GameObject_1 = __webpack_require__(1);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState_1 = __webpack_require__(4);
exports.InputState = InputState_1.default;
var Key_1 = __webpack_require__(8);
exports.Key = Key_1.default;
var Keyboard_1 = __webpack_require__(21);
exports.Keyboard = Keyboard_1.default;
var KeyCodes_1 = __webpack_require__(9);
exports.KeyCodes = KeyCodes_1.default;
var Mouse_1 = __webpack_require__(28);
exports.Mouse = Mouse_1.default;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState_1 = __webpack_require__(4);
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(25);
exports.Game = Game_1.default;
var Scene_1 = __webpack_require__(26);
exports.Scene = Scene_1.default;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(13);
var g = new engine_1.Game();
var keyPressedText = '';
var bg = new engine_1.Rectangle('background', new engine_1.Point(0, 0), true);
var fps = new engine_1.Label('fps counter', new engine_1.Point(15, 15), true);
var keyPressed = new engine_1.Label('key pressed', new engine_1.Point(0, 0), true);
var cursor = new engine_1.Circle('cursor', engine_1.Mouse.cursor, true);
engine_1.Screen.onResize(function () {
    bg.width = engine_1.Screen.width;
    bg.height = engine_1.Screen.height;
});
bg.color = '#000000';
bg.fill = true;
bg.width = engine_1.Screen.width;
bg.height = engine_1.Screen.height;
fps.fill = true;
fps.font = new engine_1.Font('Arial', 14, '#FFFFFF');
fps.text = "FPS: " + engine_1.Time.fps;
keyPressed.fill = true;
keyPressed.setPoint(new engine_1.Point(300, 18));
keyPressed.font = new engine_1.Font('Arial', 12, '#FFFF55');
keyPressed.text = '';
cursor.fill = true;
cursor.size = 20;
cursor.color = '#FF0000';
g.scene.add(bg);
g.scene.add(fps);
g.scene.add(keyPressed);
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
    keyPressedText = '';
    keyPressedText += engine_1.Keyboard.key(engine_1.KeyCodes.ArrowUp).isDown() ? 'Arrow up ' : '';
    keyPressedText += engine_1.Keyboard.key(engine_1.KeyCodes.ArrowDown).isDown() ? 'Arrow down ' : '';
    keyPressedText += engine_1.Keyboard.key(engine_1.KeyCodes.ArrowLeft).isDown() ? 'Arrow left ' : '';
    keyPressedText += engine_1.Keyboard.key(engine_1.KeyCodes.ArrowRight).isDown() ? 'Arrow right' : '';
    keyPressed.text = keyPressedText;
});
g.start();


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));
__export(__webpack_require__(2));
__export(__webpack_require__(7));
__export(__webpack_require__(3));
__export(__webpack_require__(11));
__export(__webpack_require__(5));


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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Key_1 = __webpack_require__(8);
var KeyCodes_1 = __webpack_require__(9);
var rendering_1 = __webpack_require__(3);
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
var timing_1 = __webpack_require__(5);
var root_1 = __webpack_require__(11);
var game_objects_1 = __webpack_require__(6);
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
var now_1 = __webpack_require__(10);
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
var inputs_1 = __webpack_require__(7);
var rendering_1 = __webpack_require__(3);
var timing_1 = __webpack_require__(5);
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
var rendering_1 = __webpack_require__(3);
var graphics_1 = __webpack_require__(2);
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjQ5NDlkYWQ0Mzc5NmE3NjFiNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdFR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9JbnB1dFN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL0tleS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9LZXlDb2Rlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9ub3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yb290L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL0ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0xhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9TaGFwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9UaW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9HYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvTW91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBLElBQUssZUFPSjtBQVBELFdBQUssZUFBZTtJQUNsQiwrREFBUztJQUNULHlEQUFNO0lBQ04sdURBQUs7SUFDTCx1REFBSztJQUNMLHVEQUFLO0lBQ0wsdURBQUs7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Q0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzNCLEtBQUssQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILGtCQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsVUFBQyxDQUFhO1lBQ3hDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJyeXRobW9vcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNDk0OWRhZDQzNzk2YTc2MWI2MSIsImVudW0gR2FtZU9iamVjdFR5cGVzIHtcclxuICBSRUNUQU5HTEUsXHJcbiAgQ0lSQ0xFLFxyXG4gIExBQkVMLFxyXG4gIFNIQVBFLFxyXG4gIElNQUdFLFxyXG4gIE9USEVSXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0VHlwZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0dhbWVPYmplY3RUeXBlcy50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF90eXBlOiBHYW1lT2JqZWN0VHlwZXM7XHJcbiAgcHJvdGVjdGVkIF9wb2ludDogUG9pbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9wb2ludCA9IHBvaW50ID8gcG9pbnQgOiBuZXcgUG9pbnQoMCwgMCk7XHJcbiAgICBcclxuICAgIGlmICh2aXNpYmxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy52aXNpYmxlID0gcG9pbnQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuT1RIRVI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogR2FtZU9iamVjdFR5cGVzIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwb2ludCgpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMuX3BvaW50LngsIHRoaXMuX3BvaW50LnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wb2ludC54O1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9wb2ludC54ID0gNDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucG9pbnQueTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BvaW50LnkgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBvaW50KHBvaW50OiBQb2ludCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9pbnQgPSBwb2ludDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdC50cyIsImltcG9ydCBGb250IGZyb20gJy4vRm9udCc7XHJcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsJztcclxuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoJztcclxuaW1wb3J0IFBhdGhQb2ludCBmcm9tICcuL1BhdGhQb2ludCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgRm9udCxcclxuICBNb2RlbCxcclxuICBQYXRoLFxyXG4gIFBhdGhQb2ludCxcclxuICBQb2ludFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL2luZGV4LnRzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vUmVuZGVyZXInO1xyXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgUmVuZGVyZXIsXHJcbiAgU2NyZWVuXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcmVuZGVyaW5nL2luZGV4LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRTdGF0ZSB7XHJcbiAgcHJpdmF0ZSBfcHJlc3NlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9wcmVzc2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgX3N3aXRjaCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ByZXNzZWQgPSAhdGhpcy5fcHJlc3NlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByZXNzZWQgPT09IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVzc2VkID09PSB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9JbnB1dFN0YXRlLnRzIiwiaW1wb3J0IFRpbWUgZnJvbSAnLi9UaW1lJztcclxuaW1wb3J0IG5vdyBmcm9tICcuL25vdyc7XHJcbmltcG9ydCBQcm9maWxlciBmcm9tICcuL1Byb2ZpbGVyJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgVGltZSxcclxuICBub3csXHJcbiAgUHJvZmlsZXJcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvaW5kZXgudHMiLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vQ2lyY2xlJztcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJztcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL1JlY3RhbmdsZSc7XHJcbmltcG9ydCBTaGFwZSBmcm9tICcuL1NoYXBlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ2lyY2xlLFxyXG4gIEdhbWVPYmplY3QsXHJcbiAgR2FtZU9iamVjdFR5cGVzLFxyXG4gIExhYmVsLFxyXG4gIFJlY3RhbmdsZSxcclxuICBTaGFwZVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9pbmRleC50cyIsImltcG9ydCBJbnB1dFN0YXRlIGZyb20gJy4vSW5wdXRTdGF0ZSc7XHJcbmltcG9ydCBLZXkgZnJvbSAnLi9LZXknO1xyXG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi9LZXlib2FyZCc7XHJcbmltcG9ydCBLZXlDb2RlcyBmcm9tICcuL0tleUNvZGVzJztcclxuaW1wb3J0IE1vdXNlIGZyb20gJy4vTW91c2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICBJbnB1dFN0YXRlLFxyXG4gIEtleSxcclxuICBLZXlib2FyZCxcclxuICBLZXlDb2RlcyxcclxuICBNb3VzZVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9pbmRleC50cyIsImltcG9ydCBLZXlDb2RlcyBmcm9tICcuL0tleUNvZGVzJztcclxuaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleSB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGtleTogS2V5Q29kZXM7XHJcbiAgcHVibGljIF9zdGF0ZTogSW5wdXRTdGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioa2V5OiBLZXlDb2Rlcykge1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaXNVcCgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9LZXkudHMiLCJlbnVtIEtleUNvZGVzIHtcclxuICBEaWdpdDAgPSAnRGlnaXQwJyxcclxuICBEaWdpdDEgPSAnRGlnaXQxJyxcclxuICBEaWdpdDIgPSAnRGlnaXQyJyxcclxuICBEaWdpdDMgPSAnRGlnaXQzJyxcclxuICBEaWdpdDQgPSAnRGlnaXQ0JyxcclxuICBEaWdpdDUgPSAnRGlnaXQ1JyxcclxuICBEaWdpdDYgPSAnRGlnaXQ2JyxcclxuICBEaWdpdDcgPSAnRGlnaXQ3JyxcclxuICBEaWdpdDggPSAnRGlnaXQ4JyxcclxuICBEaWdpdDkgPSAnRGlnaXQ5JyxcclxuXHJcbiAgS2V5QSA9ICdLZXlBJyxcclxuICBLZXlCID0gJ0tleUInLFxyXG4gIEtleUMgPSAnS2V5QycsXHJcbiAgS2V5RCA9ICdLZXlEJyxcclxuICBLZXlFID0gJ0tleUUnLFxyXG4gIEtleUYgPSAnS2V5RicsXHJcbiAgS2V5RyA9ICdLZXlHJyxcclxuICBLZXlIID0gJ0tleUgnLFxyXG4gIEtleUkgPSAnS2V5SScsXHJcbiAgS2V5SiA9ICdLZXlKJyxcclxuICBLZXlLID0gJ0tleUsnLFxyXG4gIEtleUwgPSAnS2V5TCcsXHJcbiAgS2V5TSA9ICdLZXlNJyxcclxuICBLZXlOID0gJ0tleU4nLFxyXG4gIEtleU8gPSAnS2V5TycsXHJcbiAgS2V5UCA9ICdLZXlQJyxcclxuICBLZXlRID0gJ0tleVEnLFxyXG4gIEtleVIgPSAnS2V5UicsXHJcbiAgS2V5UyA9ICdLZXlTJyxcclxuICBLZXlUID0gJ0tleVQnLFxyXG4gIEtleVUgPSAnS2V5VScsXHJcbiAgS2V5ViA9ICdLZXlWJyxcclxuICBLZXlXID0gJ0tleVcnLFxyXG4gIEtleVggPSAnS2V5WCcsXHJcbiAgS2V5WSA9ICdLZXlZJyxcclxuICBLZXlaID0gJ0tleVonLFxyXG5cclxuICBFc2NhcGUgPSAnRXNjYXBlJyxcclxuXHJcbiAgRjEgPSAnRjEnLFxyXG4gIEYyID0gJ0YyJyxcclxuICBGMyA9ICdGMycsXHJcbiAgRjQgPSAnRjQnLFxyXG4gIEY1ID0gJ0Y1JyxcclxuICBGNiA9ICdGNicsXHJcbiAgRjcgPSAnRjcnLFxyXG4gIEY4ID0gJ0Y4JyxcclxuICBGOSA9ICdGOScsXHJcbiAgRjEwID0gJ0YxMCcsXHJcbiAgRjExID0gJ0YxMScsXHJcbiAgRjEyID0gJ0YxMicsXHJcblxyXG4gIEluc2VydCA9ICdJbnNlcnQnLFxyXG4gIERlbGV0ZSA9ICdEZWxldGUnLFxyXG5cclxuICBIb21lID0gJ0hvbWUnLFxyXG4gIEVuZCA9ICdFbmQnLFxyXG4gIFBhZ2VVcCA9ICdQYWdlVXAnLFxyXG4gIFBhZ2VEb3duID0gJ1BhZ2VEb3duJyxcclxuXHJcbiAgTnVtTG9jayA9ICdOdW1Mb2NrJyxcclxuICBOdW1wYWREaXZpZGUgPSAnTnVtcGFkRGl2aWRlJyxcclxuICBOdW1wYWRNdWx0aXBseSA9ICdOdW1wYWRNdWx0aXBseScsXHJcbiAgTnVtcGFkU3VidHJhY3QgPSAnTnVtcGFkU3VidHJhY3QnLFxyXG4gIE51bXBhZEFkZCA9ICdOdW1wYWRBZGQnLFxyXG4gIE51bXBhZEVudGVyID0gJ051bXBhZEVudGVyJyxcclxuICBOdW1wYWREZWNpbWFsID0gJ051bXBhZERlY2ltYWwnLFxyXG4gIE51bXBhZDAgPSAnTnVtcGFkMCcsXHJcbiAgTnVtcGFkMSA9ICdOdW1wYWQxJyxcclxuICBOdW1wYWQyID0gJ051bXBhZDInLFxyXG4gIE51bXBhZDMgPSAnTnVtcGFkMycsXHJcbiAgTnVtcGFkNCA9ICdOdW1wYWQ0JyxcclxuICBOdW1wYWQ1ID0gJ051bXBhZDUnLFxyXG4gIE51bXBhZDYgPSAnTnVtcGFkNicsXHJcbiAgTnVtcGFkNyA9ICdOdW1wYWQ3JyxcclxuICBOdW1wYWQ4ID0gJ051bXBhZDgnLFxyXG4gIE51bXBhZDkgPSAnTnVtcGFkOScsXHJcblxyXG4gIEFycm93VXAgPSAnQXJyb3dVcCcsXHJcbiAgQXJyb3dEb3duID0gJ0Fycm93RG93bicsXHJcbiAgQXJyb3dMZWZ0ID0gJ0Fycm93TGVmdCcsXHJcbiAgQXJyb3dSaWdodCA9ICdBcnJvd1JpZ2h0JyxcclxuXHJcbiAgQmFja3F1b3RlID0gJ0JhY2txdW90ZScsXHJcbiAgTWludXMgPSAnTWludXMnLFxyXG4gIEVxdWFsID0gJ0VxdWFsJyxcclxuICBCYWNrc3BhY2UgPSAnQmFja3NwYWNlJyxcclxuICBCcmFja2V0TGVmdCA9ICdCcmFja2V0TGVmdCcsXHJcbiAgQnJhY2tldFJpZ2h0ID0gJ0JyYWNrZXRSaWdodCcsXHJcbiAgUXVvdGUgPSAnUXVvdGUnLFxyXG4gIEJhY2tzbGFzaCA9ICdCYWNrc2xhc2gnLFxyXG4gIENvbW1hID0gJ0NvbW1hJyxcclxuICBQZXJpb2QgPSAnUGVyaW9kJyxcclxuICBTbGFzaCA9ICdTbGFzaCcsXHJcblxyXG4gIEVudGVyID0gJ0VudGVyJyxcclxuICBTaGlmdExlZnQgPSAnU2hpZnRMZWZ0JyxcclxuICBTaGlmdFJpZ2h0ID0gJ1NoaWZ0UmlnaHQnLFxyXG4gIENhcHNMb2NrID0gJ0NhcHNMb2NrJyxcclxuICBUYWIgPSAnVGFiJyxcclxuICBDb250cm9sTGVmdCA9ICdDb250cm9sTGVmdCcsXHJcbiAgQ29udHJvbFJpZ2h0ID0gJ0NvbnRyb2xSaWdodCcsXHJcbiAgTWV0YUxlZnQgPSAnTWV0YUxlZnQnLFxyXG4gIE1ldGFSaWdodCA9ICdNZXRhUmlnaHQnLFxyXG4gIEFsdExlZnQgPSAnQWx0TGVmdCcsXHJcbiAgQWx0UmlnaHQgPSAnQWx0UmlnaHQnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXlDb2RlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5Q29kZXMudHMiLCJmdW5jdGlvbiBnZXROb3coKTogKCkgPT4gbnVtYmVyIHtcclxuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdztcclxuICB9XHJcblxyXG4gIHJldHVybiBEYXRlLm5vdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Tm93KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdGltaW5nL25vdy50cyIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgR2FtZSxcclxuICBTY2VuZVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Jvb3QvaW5kZXgudHMiLCJpbXBvcnQgeyBHYW1lLCBNb3VzZSwgU2NyZWVuLCBUaW1lLCBSZWN0YW5nbGUsIENpcmNsZSwgTGFiZWwsIFBvaW50LCBGb250LCBLZXlib2FyZCwgS2V5Q29kZXMgfSBmcm9tICcuL2VuZ2luZSc7XHJcblxyXG5jb25zdCBnID0gbmV3IEdhbWUoKTtcclxuXHJcbmxldCBrZXlQcmVzc2VkVGV4dCA9ICcnO1xyXG5cclxuY29uc3QgYmcgPSBuZXcgUmVjdGFuZ2xlKCdiYWNrZ3JvdW5kJywgbmV3IFBvaW50KDAsIDApLCB0cnVlKTtcclxuY29uc3QgZnBzID0gbmV3IExhYmVsKCdmcHMgY291bnRlcicsIG5ldyBQb2ludCgxNSwgMTUpLCB0cnVlKTtcclxuY29uc3Qga2V5UHJlc3NlZCA9IG5ldyBMYWJlbCgna2V5IHByZXNzZWQnLCBuZXcgUG9pbnQoMCwgMCksIHRydWUpO1xyXG5jb25zdCBjdXJzb3IgPSBuZXcgQ2lyY2xlKCdjdXJzb3InLCBNb3VzZS5jdXJzb3IsIHRydWUpO1xyXG5cclxuU2NyZWVuLm9uUmVzaXplKCgpID0+IHtcclxuICBiZy53aWR0aCA9IFNjcmVlbi53aWR0aDtcclxuICBiZy5oZWlnaHQgPSBTY3JlZW4uaGVpZ2h0O1xyXG59KTtcclxuXHJcbmJnLmNvbG9yID0gJyMwMDAwMDAnO1xyXG5iZy5maWxsID0gdHJ1ZTtcclxuYmcud2lkdGggPSBTY3JlZW4ud2lkdGg7XHJcbmJnLmhlaWdodCA9IFNjcmVlbi5oZWlnaHQ7XHJcblxyXG5mcHMuZmlsbCA9IHRydWU7XHJcbmZwcy5mb250ID0gbmV3IEZvbnQoJ0FyaWFsJywgMTQsICcjRkZGRkZGJyk7XHJcbmZwcy50ZXh0ID0gYEZQUzogJHtUaW1lLmZwc31gO1xyXG5cclxua2V5UHJlc3NlZC5maWxsID0gdHJ1ZTtcclxua2V5UHJlc3NlZC5zZXRQb2ludChuZXcgUG9pbnQoMzAwLCAxOCkpO1xyXG5rZXlQcmVzc2VkLmZvbnQgPSBuZXcgRm9udCgnQXJpYWwnLCAxMiwgJyNGRkZGNTUnKTtcclxua2V5UHJlc3NlZC50ZXh0ID0gJyc7XHJcblxyXG5jdXJzb3IuZmlsbCA9IHRydWU7XHJcbmN1cnNvci5zaXplID0gMjA7XHJcbmN1cnNvci5jb2xvciA9ICcjRkYwMDAwJztcclxuXHJcbmcuc2NlbmUuYWRkKGJnKTtcclxuZy5zY2VuZS5hZGQoZnBzKTtcclxuZy5zY2VuZS5hZGQoa2V5UHJlc3NlZCk7XHJcbmcuc2NlbmUuYWRkKGN1cnNvcik7XHJcblxyXG5nLnJlbmRlcmVyLmF0dGFjaFVwZGF0ZSgoKSA9PiB7XHJcbiAgZnBzLnRleHQgPSBgRlBTOiAke1RpbWUuZnBzfWA7XHJcbiAgY3Vyc29yLnNldFBvaW50KE1vdXNlLmN1cnNvcik7XHJcblxyXG4gIGlmIChNb3VzZS5idXR0b25Eb3duKSB7XHJcbiAgICBjdXJzb3IuY29sb3IgPSAnIzAwMDBGRic7XHJcbiAgfSBlbHNlIHtcclxuICAgIGN1cnNvci5jb2xvciA9ICcjRkYwMDAwJztcclxuICB9XHJcblxyXG4gIGtleVByZXNzZWRUZXh0ID0gJyc7XHJcblxyXG4gIGtleVByZXNzZWRUZXh0ICs9IEtleWJvYXJkLmtleShLZXlDb2Rlcy5BcnJvd1VwKS5pc0Rvd24oKSA/ICdBcnJvdyB1cCAnIDogJyc7XHJcbiAga2V5UHJlc3NlZFRleHQgKz0gS2V5Ym9hcmQua2V5KEtleUNvZGVzLkFycm93RG93bikuaXNEb3duKCkgPyAnQXJyb3cgZG93biAnIDogJyc7XHJcbiAga2V5UHJlc3NlZFRleHQgKz0gS2V5Ym9hcmQua2V5KEtleUNvZGVzLkFycm93TGVmdCkuaXNEb3duKCkgPyAnQXJyb3cgbGVmdCAnIDogJyc7XHJcbiAga2V5UHJlc3NlZFRleHQgKz0gS2V5Ym9hcmQua2V5KEtleUNvZGVzLkFycm93UmlnaHQpLmlzRG93bigpID8gJ0Fycm93IHJpZ2h0JyA6ICcnO1xyXG5cclxuICBrZXlQcmVzc2VkLnRleHQgPSBrZXlQcmVzc2VkVGV4dDtcclxufSk7XHJcblxyXG5nLnN0YXJ0KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vZ2FtZS1vYmplY3RzJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncmFwaGljcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXRzJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Jvb3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RpbWluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2luZGV4LnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHNpemU6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgcHVibGljIGZpbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLkNJUkNMRTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvQ2lyY2xlLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9udCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGZvbnROYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIGZvbnRTaXplOiBudW1iZXI7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGZvbnROYW1lOiBzdHJpbmcgPSAnQXJpYWwnLCBmb250U2l6ZTogbnVtYmVyID0gMTIsIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCcpIHtcclxuICAgIHRoaXMuZm9udE5hbWUgPSBmb250TmFtZTtcclxuICAgIHRoaXMuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9Gb250LnRzIiwiaW1wb3J0IFBhdGhQb2ludCBmcm9tICcuL1BhdGhQb2ludCc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4vUGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XHJcbiAgcHJpdmF0ZSBfcGF0aDogUGF0aDtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aDogUGF0aCA9IFtdKSB7XHJcbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGF0aCgpOiBQYXRoIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5fcGF0aF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHBhdGgocGF0aDogUGF0aCkge1xyXG4gICAgdGhpcy5fcGF0aCA9IFsuLi5wYXRoXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQb2ludChpbmRleDogbnVtYmVyKTogUGF0aFBvaW50fG51bGwge1xyXG4gICAgaWYgKGluZGV4IDwgdGhpcy5fcGF0aC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICB0aGlzLl9wYXRoW2luZGV4XVswXSxcclxuICAgICAgICB0aGlzLl9wYXRoW2luZGV4XVsxXVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBvaW50KGluZGV4OiBudW1iZXIsIHBhdGhQb2ludDogUGF0aFBvaW50KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9wYXRoLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9wYXRoW2luZGV4XSA9IFtcclxuICAgICAgICBwYXRoUG9pbnRbMF0sXHJcbiAgICAgICAgcGF0aFBvaW50WzFdXHJcbiAgICAgIF07XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkUG9pbnQocGF0aFBvaW50OiBQYXRoUG9pbnQpIHtcclxuICAgIHRoaXMuX3BhdGgucHVzaChwYXRoUG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVBvaW50KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuX3BhdGgubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3BhdGguc2xpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL01vZGVsLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL1BvaW50LnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50LCBGb250IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgdGV4dDogc3RyaW5nID0gJyc7XHJcbiAgcHVibGljIGZpbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBmb250OiBGb250O1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5MQUJFTDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGb250KGZvbnQ6IEZvbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9udCA9IGZvbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Rm9udFNpemUoZm9udFNpemU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5mb250LmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Rm9udENvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9udC5jb2xvciA9IGNvbG9yO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9MYWJlbC50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgc3VwZXIobmFtZSwgcG9pbnQsIHZpc2libGUpO1xyXG5cclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuUkVDVEFOR0xFO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9SZWN0YW5nbGUudHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQsIE1vZGVsIH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbW9kZWw6IE1vZGVsO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgc3VwZXIobmFtZSwgcG9pbnQsIHZpc2libGUpO1xyXG5cclxuICAgIHRoaXMubW9kZWwgPSBuZXcgTW9kZWwoKTtcclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuU0hBUEU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1NoYXBlLnRzIiwiaW1wb3J0IEtleSBmcm9tICcuL0tleSc7XHJcbmltcG9ydCBLZXlDb2RlcyBmcm9tICcuL0tleUNvZGVzJztcclxuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEtleWJvYXJkIHtcclxuICBwcml2YXRlIHN0YXRpYyBfa2V5czogQ29sbGVjdGlvbjxLZXk+O1xyXG4gIFxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9rZXlzID0ge307XHJcbiAgICBcclxuICAgIGZvciAoY29uc3Qga2V5IGluIEtleUNvZGVzKSB7XHJcbiAgICAgIHRoaXMuX2tleXNba2V5XSA9IG5ldyBLZXkoPEtleUNvZGVzPmtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2NyZWVuLm9uKFsna2V5ZG93biddLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAoS2V5Q29kZXNbPGFueT5lLmNvZGVdICYmIHRoaXMuX2tleXNbZS5jb2RlXS5pc1VwKCkpIHtcclxuICAgICAgICB0aGlzLl9rZXlzW2UuY29kZV0uX3N0YXRlLl9zd2l0Y2goKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgU2NyZWVuLm9uKFsna2V5dXAnXSwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKEtleUNvZGVzWzxhbnk+ZS5jb2RlXSAmJiB0aGlzLl9rZXlzW2UuY29kZV0uaXNEb3duKCkpIHtcclxuICAgICAgICB0aGlzLl9rZXlzW2UuY29kZV0uX3N0YXRlLl9zd2l0Y2goKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgU2NyZWVuLm9uKFsna2V5cHJlc3MnXSwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEtleShrZXk6IEtleUNvZGVzKTogS2V5IHtcclxuICAgIHJldHVybiB0aGlzLl9rZXlzW2tleV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGtleShrZXk6IEtleUNvZGVzKTogS2V5IHtcclxuICAgIHJldHVybiB0aGlzLmdldEtleShrZXkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc0Rvd24oa2V5OiBLZXlDb2Rlcyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2tleXNba2V5XS5pc0Rvd24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNVcChrZXk6IEtleUNvZGVzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fa2V5c1trZXldLmlzVXAoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5Ym9hcmQudHMiLCJpbXBvcnQgeyBUaW1lIH0gZnJvbSAnLi4vdGltaW5nJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9yb290JztcclxuaW1wb3J0IHtcclxuICBHYW1lT2JqZWN0LFxyXG4gIEdhbWVPYmplY3RUeXBlcyxcclxuICBSZWN0YW5nbGUsXHJcbiAgQ2lyY2xlLFxyXG4gIFNoYXBlLFxyXG4gIExhYmVsXHJcbn0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcclxuICBwdWJsaWMgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIHB1YmxpYyBzY2VuZTogU2NlbmU7XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25GcmFtZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3VwZGF0ZXM6IEZ1bmN0aW9uW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSAwO1xyXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBTY2VuZSgpO1xyXG4gICAgdGhpcy5fdXBkYXRlcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZyYW1lOiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcihmcmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGF0dGFjaFVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLl91cGRhdGVzLnB1c2godXBkYXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKGZyYW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIFRpbWUuX3NldEZyYW1lKGZyYW1lKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB0aGlzLl91cGRhdGVzKSB7XHJcbiAgICAgIHVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCwgdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZ2FtZU9iamVjdE5hbWUgaW4gdGhpcy5zY2VuZS5nZXRBbGwoKSkge1xyXG4gICAgICBjb25zdCBnYW1lT2JqZWN0ID0gPEdhbWVPYmplY3Q+dGhpcy5zY2VuZS5nZXQoZ2FtZU9iamVjdE5hbWUpO1xyXG4gICAgICBcclxuICAgICAgaWYgKCFnYW1lT2JqZWN0LnZpc2libGUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBSZWN0YW5nbGUpIHtcclxuICAgICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC54LFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnksXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QuaGVpZ2h0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueCxcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC55LFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LmhlaWdodFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIENpcmNsZSkge1xyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LnNpemUgPT09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSwgZ2FtZU9iamVjdC5zaXplIC8gMiwgMCwgMiAqIE1hdGguUEkpO1xyXG5cclxuICAgICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBTaGFwZSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55KTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGNvbnN0IHBhdGhQb2ludCBvZiBnYW1lT2JqZWN0Lm1vZGVsLnBhdGgpIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocGF0aFBvaW50WzBdLCBwYXRoUG9pbnRbMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdhbWVPYmplY3QuZmlsbCkge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgTGFiZWwpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IGAke2dhbWVPYmplY3QuZm9udC5mb250U2l6ZX1weCAke2dhbWVPYmplY3QuZm9udC5mb250TmFtZX1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LmZpbGwpIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBnYW1lT2JqZWN0LmZvbnQuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoZ2FtZU9iamVjdC50ZXh0LCBnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuZm9udC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VUZXh0KGdhbWVPYmplY3QudGV4dCwgZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmcmFtZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyKGZyYW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9SZW5kZXJlci50cyIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFRpbWUge1xyXG4gIHByaXZhdGUgc3RhdGljIF9kZWx0YVRpbWU6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfdGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9mcHM6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5pdCgpIHtcclxuICAgIHRoaXMuX2RlbHRhVGltZSA9IDA7XHJcbiAgICB0aGlzLl90aW1lID0gMDtcclxuICAgIHRoaXMuX2ZwcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX3NldEZyYW1lKGZyYW1lOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2RlbHRhVGltZSA9IGZyYW1lIC0gdGhpcy5fdGltZTtcclxuICAgIHRoaXMuX3RpbWUgPSBmcmFtZTtcclxuICAgIHRoaXMuX2ZwcyA9IE1hdGgucm91bmQoMTAwMCAvIHRoaXMuX2RlbHRhVGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBkZWx0YVRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWx0YVRpbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCB0aW1lKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGZwcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZwcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvVGltZS50cyIsImltcG9ydCBub3cgZnJvbSAnLi9ub3cnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZXIge1xyXG4gIHB1YmxpYyBzdGFydFRpbWU6IG51bWJlcjtcclxuICBwdWJsaWMgZW5kVGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3N0ZXBzOiBudW1iZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVuZFRpbWUgPSAwO1xyXG4gICAgdGhpcy5fc3RlcHMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmVuZFRpbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXJ0VGltZSkge1xyXG4gICAgICByZXR1cm4gbm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzdGVwcygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX3N0ZXBzXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZW5kVGltZSA9IDA7XHJcbiAgICB0aGlzLl9zdGVwcyA9IFtdO1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSBub3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGVwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RhcnRUaW1lKSB7XHJcbiAgICAgIHRoaXMuX3N0ZXBzLnB1c2gobm93KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVuZFRpbWUgPSBub3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGVwKGluZGV4OiBudW1iZXIpOiBudW1iZXJ8bnVsbCB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9zdGVwcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3N0ZXBzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGVwRHVyYXRpb24oaW5kZXg6IG51bWJlcik6IG51bWJlcnxudWxsIHtcclxuICAgIGNvbnN0IHN0ZXA6IG51bWJlcnxudWxsID0gdGhpcy5nZXRTdGVwKGluZGV4KTtcclxuXHJcbiAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gc3RlcCAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0ZXBEdXJhdGlvbnMoKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3Qgc3RlcHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBzdGVwIG9mIHRoaXMuc3RlcHMpIHtcclxuICAgICAgc3RlcHMucHVzaChzdGVwIC0gdGhpcy5zdGFydFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGVwcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvUHJvZmlsZXIudHMiLCJpbXBvcnQgeyBNb3VzZSwgS2V5Ym9hcmQgfSBmcm9tICcuLi9pbnB1dHMnO1xyXG5pbXBvcnQgeyBTY3JlZW4sIFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3RpbWluZyc7XHJcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgR2FtZS5cclxuICAgKiBAcGFyYW0gY2FudmFzIFRoZSBjYW52YXMgdG8gY3JlYXRlIHRoZSBnYW1lIGluLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcig8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPnRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykpO1xyXG4gICAgdGhpcy5fc2NlbmUgPSB0aGlzLnJlbmRlcmVyLnNjZW5lO1xyXG5cclxuICAgIFRpbWUuX2luaXQoKTtcclxuICAgIE1vdXNlLl9pbml0KCk7XHJcbiAgICBLZXlib2FyZC5faW5pdCgpO1xyXG4gICAgU2NyZWVuLl9pbml0KHRoaXMuY2FudmFzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2NlbmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2NlbmUoc2NlbmU6IFNjZW5lKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNjZW5lID0gc2NlbmU7XHJcbiAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcm9vdC9HYW1lLnRzIiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4uL2dhbWUtb2JqZWN0cyc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XHJcbiAgcHJpdmF0ZSBfZ2FtZU9iamVjdHM6IENvbGxlY3Rpb248R2FtZU9iamVjdD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fZ2FtZU9iamVjdHMgPSB7fTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY29udGFpbnMoZ2FtZU9iamVjdC5uYW1lKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3QubmFtZV0gPSBnYW1lT2JqZWN0O1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbnMoZ2FtZU9iamVjdE5hbWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZGVsZXRlIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIGdldChnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogR2FtZU9iamVjdHxudWxsIHtcclxuICAgIGlmICghdGhpcy5jb250YWlucyhnYW1lT2JqZWN0TmFtZSkpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0c1tnYW1lT2JqZWN0TmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QWxsKCk6IENvbGxlY3Rpb248R2FtZU9iamVjdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnRhaW5zKGdhbWVPYmplY3ROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0cy5oYXNPd25Qcm9wZXJ0eShnYW1lT2JqZWN0TmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9nYW1lT2JqZWN0cyA9IHt9O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Jvb3QvU2NlbmUudHMiLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBTY3JlZW4ge1xyXG4gIHByaXZhdGUgc3RhdGljIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgc3RhdGljIF93aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9oZWlnaHQ6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfb25SZXNpemU6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIFxyXG4gICAgdGhpcy5fb25SZXNpemUgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7fTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICB0aGlzLl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuX29uUmVzaXplKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb24oZXZlbnROYW1lczogc3RyaW5nW10sIGV2ZW50SGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudEhhbmRsZXIoZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBvblJlc2l6ZShoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5fb25SZXNpemUgPSA8KGV2ZW50OiBFdmVudCkgPT4gdm9pZD5oYW5kbGVyO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIE1vdXNlIHtcclxuICBwcml2YXRlIHN0YXRpYyBfY3Vyc29yOiBQb2ludDtcclxuICBwcml2YXRlIHN0YXRpYyBfbGVmdENsaWNrOiBJbnB1dFN0YXRlO1xyXG4gIHByaXZhdGUgc3RhdGljIF9taWRkbGVDbGljazogSW5wdXRTdGF0ZTtcclxuICBwcml2YXRlIHN0YXRpYyBfcmlnaHRDbGljazogSW5wdXRTdGF0ZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2N1cnNvciA9IG5ldyBQb2ludChTY3JlZW4ud2lkdGggLyAyLCBTY3JlZW4uaGVpZ2h0IC8gMik7XHJcbiAgICB0aGlzLl9sZWZ0Q2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5fbWlkZGxlQ2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5fcmlnaHRDbGljayA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBjdXJzb3IoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnNvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGN1cnNvclgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnNvci54O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgY3Vyc29yWSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3Vyc29yLnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBidXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0aGlzLmxlZnRCdXR0b25Eb3duIHx8IHRoaXMubWlkZGxlQnV0dG9uRG93biB8fCB0aGlzLnJpZ2h0QnV0dG9uRG93bik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBsZWZ0QnV0dG9uRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sZWZ0Q2xpY2suaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBtaWRkbGVCdXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pZGRsZUNsaWNrLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgcmlnaHRCdXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0Q2xpY2suaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBsZWZ0QnV0dG9uVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGVmdENsaWNrLmlzVXAoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG1pZGRsZUJ1dHRvblVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pZGRsZUNsaWNrLmlzVXAoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHJpZ2h0QnV0dG9uVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmlnaHRDbGljay5pc1VwKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbml0RXZlbnRzKCk6IHZvaWQge1xyXG4gICAgU2NyZWVuLm9uKFsnbW91c2Vtb3ZlJ10sIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2N1cnNvci54ID0gZS5jbGllbnRYO1xyXG4gICAgICB0aGlzLl9jdXJzb3IueSA9IGUuY2xpZW50WTtcclxuICAgIH0pO1xyXG5cclxuICAgIFNjcmVlbi5vbihbJ21vdXNlZG93bicsICdtb3VzZXVwJ10sIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHN3aXRjaChlLmJ1dHRvbikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHRoaXMuX2xlZnRDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLl9taWRkbGVDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICB0aGlzLl9yaWdodENsaWNrLl9zd2l0Y2goKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JlZW4ub24oWydjb250ZXh0bWVudSddLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9Nb3VzZS50cyJdLCJzb3VyY2VSb290IjoiIn0=