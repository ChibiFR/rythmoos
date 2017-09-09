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
        this._rotation = 0;
        this._scale = 1;
        this._update = function () { };
        this._contextSettings = null;
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
    Object.defineProperty(GameObject.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (degrees) {
            this._rotation = degrees;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (scale) {
            this._scale = scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "update", {
        get: function () {
            return this._update;
        },
        set: function (update) {
            this._update = update;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "renderContextSettings", {
        get: function () {
            return this._contextSettings;
        },
        set: function (contextSettings) {
            this._contextSettings = contextSettings;
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.setPoint = function (point) {
        this._point = point;
    };
    GameObject.prototype.hasRenderContextSettings = function () {
        return this._contextSettings !== null ? true : false;
    };
    GameObject.prototype.rotate = function (degrees) {
        this._rotation = degrees;
    };
    GameObject.prototype.setScale = function (scale) {
        this._scale = scale;
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

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(2));
__export(__webpack_require__(8));
__export(__webpack_require__(33));
__export(__webpack_require__(3));
__export(__webpack_require__(12));
__export(__webpack_require__(6));


/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = __webpack_require__(14);
exports.Circle = Circle_1.default;
var GameObject_1 = __webpack_require__(1);
exports.GameObject = GameObject_1.default;
var GameObjectTypes_1 = __webpack_require__(0);
exports.GameObjectTypes = GameObjectTypes_1.default;
var Image_1 = __webpack_require__(35);
exports.Image = Image_1.default;
var Label_1 = __webpack_require__(18);
exports.Label = Label_1.default;
var Rectangle_1 = __webpack_require__(19);
exports.Rectangle = Rectangle_1.default;
var Shape_1 = __webpack_require__(20);
exports.Shape = Shape_1.default;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputState_1 = __webpack_require__(5);
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
var InputState_1 = __webpack_require__(5);
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
var engine_1 = __webpack_require__(4);
var FPSCounter_1 = __webpack_require__(32);
var Cursor_1 = __webpack_require__(29);
var HitKeys_1 = __webpack_require__(30);
var HitCircle_1 = __webpack_require__(31);
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
    if (engine_1.Collision.circleCollide(hitCircle.element, new engine_1.Circle('', engine_1.Mouse.cursor))) {
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
var Key_1 = __webpack_require__(9);
var KeyCodes_1 = __webpack_require__(10);
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
var timing_1 = __webpack_require__(6);
var root_1 = __webpack_require__(12);
var game_objects_1 = __webpack_require__(7);
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
        for (var _b = 0, _c = this.scene.updates; _b < _c.length; _b++) {
            var update = _c[_b];
            update();
        }
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        for (var gameObjectName in this.scene.getAll()) {
            var gameObject = this.scene.get(gameObjectName);
            gameObject.update();
            if (!gameObject.visible)
                continue;
            if (gameObject.hasRenderContextSettings()) {
                this.context.save();
                gameObject.renderContextSettings(this.context);
            }
            if (gameObject.rotation) {
                this.context.save();
                this.context.translate(this.context.canvas.width / 2, this.context.canvas.height / 2);
                this.context.rotate(gameObject.rotation * Math.PI / 180);
                this.context.translate(-this.context.canvas.width / 2, -this.context.canvas.height / 2);
            }
            if (gameObject.scale !== 1) {
                this.context.scale(gameObject.scale, gameObject.scale);
            }
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
                for (var _d = 0, _e = gameObject.model.path; _d < _e.length; _d++) {
                    var pathPoint = _e[_d];
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
            if (gameObject instanceof game_objects_1.Image) {
                if (gameObject.ready) {
                    this.context.drawImage(gameObject.image, gameObject.x, gameObject.y);
                }
            }
            if (gameObject.scale !== 1) {
                this.context.scale(1, 1);
            }
            if (gameObject.rotation) {
                this.context.restore();
            }
            if (gameObject.hasRenderContextSettings()) {
                this.context.restore();
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
var rendering_1 = __webpack_require__(3);
var timing_1 = __webpack_require__(6);
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
    Game.prototype.update = function (update) {
        this.scene.attachUpdate(update);
    };
    Game.prototype.globalUpdate = function (update) {
        this.renderer.attachUpdate(update);
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
        this._updates = [];
    }
    Object.defineProperty(Scene.prototype, "updates", {
        get: function () {
            return this._updates.slice();
        },
        enumerable: true,
        configurable: true
    });
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
    Scene.prototype.attachUpdate = function (update) {
        this._updates.push(update);
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
var InputState_1 = __webpack_require__(5);
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
var engine_1 = __webpack_require__(4);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(4);
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(4);
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
                engine_1.Collision.circleCollide(this.element, new engine_1.Circle('', engine_1.Mouse.cursor))) {
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


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(4);
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Collision_1 = __webpack_require__(34);
exports.Collision = Collision_1.default;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var game_objects_1 = __webpack_require__(7);
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
/* 35 */
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
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image(name, point, visible) {
        var _this = _super.call(this, name, point, visible) || this;
        _this._ready = false;
        _this._image = document.createElement('img');
        _this._image.addEventListener('load', function () {
            _this._ready = true;
        });
        _this._type = GameObjectTypes_1.default.IMAGE;
        return _this;
    }
    Object.defineProperty(Image.prototype, "ready", {
        get: function () {
            return this._ready;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "URL", {
        get: function () {
            return this._URL;
        },
        set: function (URL) {
            this._ready = false;
            this._URL = URL;
            this._image.src = this._URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "image", {
        get: function () {
            return this._image;
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.setURL = function (URL) {
        this.URL = URL;
    };
    return Image;
}(GameObject_1.default));
exports.default = Image;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2RmZmI5N2Y2NGRmYjY5YTkxMmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdFR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL0lucHV0U3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90aW1pbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL0tleUNvZGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL25vdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL0ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0xhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9TaGFwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9UaW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9HYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvTW91c2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbHMvQ3Vyc29yLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxzL0hpdEtleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbHMvSGl0Q2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxzL0ZQU0NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9waHlzaWNzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcGh5c2ljcy9Db2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvSW1hZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztB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QyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsS0FBSyxHQUFHLHlCQUFlLENBQUMsS0FBSyxDQUFDOztJQUNyQyxDQUFDO0lBRUQsc0JBQVcsd0JBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHNCQUFHO2FBQWQ7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDO2FBRUQsVUFBZSxHQUFXO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUIsQ0FBQzs7O09BTkE7SUFRRCxzQkFBVyx3QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRU0sc0JBQU0sR0FBYixVQUFjLEdBQVc7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLENBdkNrQyxvQkFBVSxHQXVDNUMiLCJmaWxlIjoicnl0aG1vb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2RmZmI5N2Y2NGRmYjY5YTkxMmIiLCJlbnVtIEdhbWVPYmplY3RUeXBlcyB7XHJcbiAgUkVDVEFOR0xFLFxyXG4gIENJUkNMRSxcclxuICBMQUJFTCxcclxuICBTSEFQRSxcclxuICBJTUFHRSxcclxuICBPVEhFUlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU9iamVjdFR5cGVzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9HYW1lT2JqZWN0VHlwZXMudHMiLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBfdHlwZTogR2FtZU9iamVjdFR5cGVzO1xyXG4gIHByb3RlY3RlZCBfcG9pbnQ6IFBvaW50O1xyXG4gIHByb3RlY3RlZCBfcm90YXRpb246IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX3NjYWxlOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF91cGRhdGU6IEZ1bmN0aW9uO1xyXG4gIHByb3RlY3RlZCBfY29udGV4dFNldHRpbmdzOiAoKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCl8bnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3BvaW50ID0gcG9pbnQgPyBwb2ludCA6IG5ldyBQb2ludCgwLCAwKTtcclxuICAgIFxyXG4gICAgaWYgKHZpc2libGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBwb2ludCA/IHRydWUgOiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcm90YXRpb24gPSAwO1xyXG4gICAgdGhpcy5fc2NhbGUgPSAxO1xyXG5cclxuICAgIHRoaXMuX3VwZGF0ZSA9ICgpID0+IHt9O1xyXG5cclxuICAgIHRoaXMuX2NvbnRleHRTZXR0aW5ncyA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5PVEhFUjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBHYW1lT2JqZWN0VHlwZXMge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBvaW50KCk6IFBvaW50IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2ludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucG9pbnQueDtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcG9pbnQueCA9IHg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBvaW50Lnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHkoeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9wb2ludC55ID0geTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcm90YXRpb24oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9yb3RhdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgcm90YXRpb24oZGVncmVlczogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9yb3RhdGlvbiA9IGRlZ3JlZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNjYWxlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2NhbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHNjYWxlKHNjYWxlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3NjYWxlID0gc2NhbGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHVwZGF0ZSgpOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB1cGRhdGUodXBkYXRlOiBGdW5jdGlvbikge1xyXG4gICAgdGhpcy5fdXBkYXRlID0gdXBkYXRlO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgZ2V0IHJlbmRlckNvbnRleHRTZXR0aW5ncygpOiAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkIHtcclxuICAgIHJldHVybiA8KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZD50aGlzLl9jb250ZXh0U2V0dGluZ3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHJlbmRlckNvbnRleHRTZXR0aW5ncyhjb250ZXh0U2V0dGluZ3M6IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuX2NvbnRleHRTZXR0aW5ncyA9IGNvbnRleHRTZXR0aW5ncztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQb2ludChwb2ludDogUG9pbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BvaW50ID0gcG9pbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzUmVuZGVyQ29udGV4dFNldHRpbmdzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHRTZXR0aW5ncyAhPT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByb3RhdGUoZGVncmVlczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yb3RhdGlvbiA9IGRlZ3JlZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2NhbGUoc2NhbGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fc2NhbGUgPSBzY2FsZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdC50cyIsImltcG9ydCBGb250IGZyb20gJy4vRm9udCc7XHJcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsJztcclxuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoJztcclxuaW1wb3J0IFBhdGhQb2ludCBmcm9tICcuL1BhdGhQb2ludCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgRm9udCxcclxuICBNb2RlbCxcclxuICBQYXRoLFxyXG4gIFBhdGhQb2ludCxcclxuICBQb2ludFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL2luZGV4LnRzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vUmVuZGVyZXInO1xyXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgUmVuZGVyZXIsXHJcbiAgU2NyZWVuXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcmVuZGVyaW5nL2luZGV4LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9nYW1lLW9iamVjdHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dyYXBoaWNzJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbnB1dHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL3BoeXNpY3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcm9vdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGltaW5nJztcclxuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5kZXgudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFN0YXRlIHtcclxuICBwcml2YXRlIF9wcmVzc2VkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3ByZXNzZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfc3dpdGNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcHJlc3NlZCA9ICF0aGlzLl9wcmVzc2VkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlc3NlZCA9PT0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByZXNzZWQgPT09IHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL0lucHV0U3RhdGUudHMiLCJpbXBvcnQgVGltZSBmcm9tICcuL1RpbWUnO1xyXG5pbXBvcnQgbm93IGZyb20gJy4vbm93JztcclxuaW1wb3J0IFByb2ZpbGVyIGZyb20gJy4vUHJvZmlsZXInO1xyXG5cclxuZXhwb3J0IHtcclxuICBUaW1lLFxyXG4gIG5vdyxcclxuICBQcm9maWxlclxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9pbmRleC50cyIsImltcG9ydCBDaXJjbGUgZnJvbSAnLi9DaXJjbGUnO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9SZWN0YW5nbGUnO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9TaGFwZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIENpcmNsZSxcclxuICBHYW1lT2JqZWN0LFxyXG4gIEdhbWVPYmplY3RUeXBlcyxcclxuICBJbWFnZSxcclxuICBMYWJlbCxcclxuICBSZWN0YW5nbGUsXHJcbiAgU2hhcGVcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvaW5kZXgudHMiLCJpbXBvcnQgSW5wdXRTdGF0ZSBmcm9tICcuL0lucHV0U3RhdGUnO1xyXG5pbXBvcnQgS2V5IGZyb20gJy4vS2V5JztcclxuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4vS2V5Ym9hcmQnO1xyXG5pbXBvcnQgS2V5Q29kZXMgZnJvbSAnLi9LZXlDb2Rlcyc7XHJcbmltcG9ydCBNb3VzZSBmcm9tICcuL01vdXNlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgSW5wdXRTdGF0ZSxcclxuICBLZXksXHJcbiAgS2V5Ym9hcmQsXHJcbiAgS2V5Q29kZXMsXHJcbiAgTW91c2VcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvaW5kZXgudHMiLCJpbXBvcnQgS2V5Q29kZXMgZnJvbSAnLi9LZXlDb2Rlcyc7XHJcbmltcG9ydCBJbnB1dFN0YXRlIGZyb20gJy4vSW5wdXRTdGF0ZSc7XHJcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4uL3JlbmRlcmluZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXkge1xyXG4gIHB1YmxpYyByZWFkb25seSBrZXk6IEtleUNvZGVzO1xyXG4gIHB1YmxpYyBfc3RhdGU6IElucHV0U3RhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtleTogS2V5Q29kZXMpIHtcclxuICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgdGhpcy5fc3RhdGUgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5pc0Rvd24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmlzVXAoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5LnRzIiwiZW51bSBLZXlDb2RlcyB7XHJcbiAgRGlnaXQwID0gJ0RpZ2l0MCcsXHJcbiAgRGlnaXQxID0gJ0RpZ2l0MScsXHJcbiAgRGlnaXQyID0gJ0RpZ2l0MicsXHJcbiAgRGlnaXQzID0gJ0RpZ2l0MycsXHJcbiAgRGlnaXQ0ID0gJ0RpZ2l0NCcsXHJcbiAgRGlnaXQ1ID0gJ0RpZ2l0NScsXHJcbiAgRGlnaXQ2ID0gJ0RpZ2l0NicsXHJcbiAgRGlnaXQ3ID0gJ0RpZ2l0NycsXHJcbiAgRGlnaXQ4ID0gJ0RpZ2l0OCcsXHJcbiAgRGlnaXQ5ID0gJ0RpZ2l0OScsXHJcblxyXG4gIEtleUEgPSAnS2V5QScsXHJcbiAgS2V5QiA9ICdLZXlCJyxcclxuICBLZXlDID0gJ0tleUMnLFxyXG4gIEtleUQgPSAnS2V5RCcsXHJcbiAgS2V5RSA9ICdLZXlFJyxcclxuICBLZXlGID0gJ0tleUYnLFxyXG4gIEtleUcgPSAnS2V5RycsXHJcbiAgS2V5SCA9ICdLZXlIJyxcclxuICBLZXlJID0gJ0tleUknLFxyXG4gIEtleUogPSAnS2V5SicsXHJcbiAgS2V5SyA9ICdLZXlLJyxcclxuICBLZXlMID0gJ0tleUwnLFxyXG4gIEtleU0gPSAnS2V5TScsXHJcbiAgS2V5TiA9ICdLZXlOJyxcclxuICBLZXlPID0gJ0tleU8nLFxyXG4gIEtleVAgPSAnS2V5UCcsXHJcbiAgS2V5USA9ICdLZXlRJyxcclxuICBLZXlSID0gJ0tleVInLFxyXG4gIEtleVMgPSAnS2V5UycsXHJcbiAgS2V5VCA9ICdLZXlUJyxcclxuICBLZXlVID0gJ0tleVUnLFxyXG4gIEtleVYgPSAnS2V5VicsXHJcbiAgS2V5VyA9ICdLZXlXJyxcclxuICBLZXlYID0gJ0tleVgnLFxyXG4gIEtleVkgPSAnS2V5WScsXHJcbiAgS2V5WiA9ICdLZXlaJyxcclxuXHJcbiAgRXNjYXBlID0gJ0VzY2FwZScsXHJcblxyXG4gIEYxID0gJ0YxJyxcclxuICBGMiA9ICdGMicsXHJcbiAgRjMgPSAnRjMnLFxyXG4gIEY0ID0gJ0Y0JyxcclxuICBGNSA9ICdGNScsXHJcbiAgRjYgPSAnRjYnLFxyXG4gIEY3ID0gJ0Y3JyxcclxuICBGOCA9ICdGOCcsXHJcbiAgRjkgPSAnRjknLFxyXG4gIEYxMCA9ICdGMTAnLFxyXG4gIEYxMSA9ICdGMTEnLFxyXG4gIEYxMiA9ICdGMTInLFxyXG5cclxuICBJbnNlcnQgPSAnSW5zZXJ0JyxcclxuICBEZWxldGUgPSAnRGVsZXRlJyxcclxuXHJcbiAgSG9tZSA9ICdIb21lJyxcclxuICBFbmQgPSAnRW5kJyxcclxuICBQYWdlVXAgPSAnUGFnZVVwJyxcclxuICBQYWdlRG93biA9ICdQYWdlRG93bicsXHJcblxyXG4gIE51bUxvY2sgPSAnTnVtTG9jaycsXHJcbiAgTnVtcGFkRGl2aWRlID0gJ051bXBhZERpdmlkZScsXHJcbiAgTnVtcGFkTXVsdGlwbHkgPSAnTnVtcGFkTXVsdGlwbHknLFxyXG4gIE51bXBhZFN1YnRyYWN0ID0gJ051bXBhZFN1YnRyYWN0JyxcclxuICBOdW1wYWRBZGQgPSAnTnVtcGFkQWRkJyxcclxuICBOdW1wYWRFbnRlciA9ICdOdW1wYWRFbnRlcicsXHJcbiAgTnVtcGFkRGVjaW1hbCA9ICdOdW1wYWREZWNpbWFsJyxcclxuICBOdW1wYWQwID0gJ051bXBhZDAnLFxyXG4gIE51bXBhZDEgPSAnTnVtcGFkMScsXHJcbiAgTnVtcGFkMiA9ICdOdW1wYWQyJyxcclxuICBOdW1wYWQzID0gJ051bXBhZDMnLFxyXG4gIE51bXBhZDQgPSAnTnVtcGFkNCcsXHJcbiAgTnVtcGFkNSA9ICdOdW1wYWQ1JyxcclxuICBOdW1wYWQ2ID0gJ051bXBhZDYnLFxyXG4gIE51bXBhZDcgPSAnTnVtcGFkNycsXHJcbiAgTnVtcGFkOCA9ICdOdW1wYWQ4JyxcclxuICBOdW1wYWQ5ID0gJ051bXBhZDknLFxyXG5cclxuICBBcnJvd1VwID0gJ0Fycm93VXAnLFxyXG4gIEFycm93RG93biA9ICdBcnJvd0Rvd24nLFxyXG4gIEFycm93TGVmdCA9ICdBcnJvd0xlZnQnLFxyXG4gIEFycm93UmlnaHQgPSAnQXJyb3dSaWdodCcsXHJcblxyXG4gIEJhY2txdW90ZSA9ICdCYWNrcXVvdGUnLFxyXG4gIE1pbnVzID0gJ01pbnVzJyxcclxuICBFcXVhbCA9ICdFcXVhbCcsXHJcbiAgQmFja3NwYWNlID0gJ0JhY2tzcGFjZScsXHJcbiAgQnJhY2tldExlZnQgPSAnQnJhY2tldExlZnQnLFxyXG4gIEJyYWNrZXRSaWdodCA9ICdCcmFja2V0UmlnaHQnLFxyXG4gIFF1b3RlID0gJ1F1b3RlJyxcclxuICBCYWNrc2xhc2ggPSAnQmFja3NsYXNoJyxcclxuICBDb21tYSA9ICdDb21tYScsXHJcbiAgUGVyaW9kID0gJ1BlcmlvZCcsXHJcbiAgU2xhc2ggPSAnU2xhc2gnLFxyXG5cclxuICBFbnRlciA9ICdFbnRlcicsXHJcbiAgU2hpZnRMZWZ0ID0gJ1NoaWZ0TGVmdCcsXHJcbiAgU2hpZnRSaWdodCA9ICdTaGlmdFJpZ2h0JyxcclxuICBDYXBzTG9jayA9ICdDYXBzTG9jaycsXHJcbiAgVGFiID0gJ1RhYicsXHJcbiAgQ29udHJvbExlZnQgPSAnQ29udHJvbExlZnQnLFxyXG4gIENvbnRyb2xSaWdodCA9ICdDb250cm9sUmlnaHQnLFxyXG4gIE1ldGFMZWZ0ID0gJ01ldGFMZWZ0JyxcclxuICBNZXRhUmlnaHQgPSAnTWV0YVJpZ2h0JyxcclxuICBBbHRMZWZ0ID0gJ0FsdExlZnQnLFxyXG4gIEFsdFJpZ2h0ID0gJ0FsdFJpZ2h0J1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2V5Q29kZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL0tleUNvZGVzLnRzIiwiZnVuY3Rpb24gZ2V0Tm93KCk6ICgpID0+IG51bWJlciB7XHJcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3c7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gRGF0ZS5ub3c7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE5vdygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9ub3cudHMiLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xyXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIEdhbWUsXHJcbiAgU2NlbmVcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb290L2luZGV4LnRzIiwiaW1wb3J0IHsgR2FtZSwgUmVjdGFuZ2xlLCBTY3JlZW4sIFBvaW50LCBDaXJjbGUsIE1vdXNlLCBDb2xsaXNpb24gfSBmcm9tICcuL2VuZ2luZSc7XHJcblxyXG5pbXBvcnQgRlBTQ291bnRlciBmcm9tICcuL3Zpc3VhbHMvRlBTQ291bnRlcic7XHJcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi92aXN1YWxzL0N1cnNvcic7XHJcbmltcG9ydCBIaXRLZXlzIGZyb20gJy4vdmlzdWFscy9IaXRLZXlzJztcclxuaW1wb3J0IEhpdENpcmNsZSBmcm9tICcuL3Zpc3VhbHMvSGl0Q2lyY2xlJztcclxuXHJcbmNvbnN0IGcgPSBuZXcgR2FtZSgpO1xyXG5cclxuLy8gQmFja2dyb3VuZFxyXG5jb25zdCBiZyA9IG5ldyBSZWN0YW5nbGUoJ2JhY2tncm91bmQnLCBuZXcgUG9pbnQoMCwgMCksIHRydWUpO1xyXG5iZy5jb2xvciA9ICcjMDAwMDAwJztcclxuYmcud2lkdGggPSBTY3JlZW4ud2lkdGg7XHJcbmJnLmhlaWdodCA9IFNjcmVlbi5oZWlnaHQ7XHJcbmcuc2NlbmUuYWRkKGJnKTtcclxuXHJcbi8vIEdhbWUgZWxlbWVudHNcclxuY29uc3QgaGl0Q2lyY2xlID0gbmV3IEhpdENpcmNsZShnLnNjZW5lKTtcclxuY29uc3QgaGl0S2V5cyA9IG5ldyBIaXRLZXlzKGcuc2NlbmUpO1xyXG5jb25zdCBjdXJzb3IgPSBuZXcgQ3Vyc29yKGcuc2NlbmUpO1xyXG5jb25zdCBmcHNjb3VudGVyID0gbmV3IEZQU0NvdW50ZXIoZy5zY2VuZSk7XHJcblxyXG4vLyBVcGRhdGUgYmcgc2l6ZSBvbiByZXNpemVcclxuU2NyZWVuLm9uUmVzaXplKCgpID0+IHtcclxuICBiZy53aWR0aCA9IFNjcmVlbi53aWR0aDtcclxuICBiZy5oZWlnaHQgPSBTY3JlZW4uaGVpZ2h0O1xyXG59KTtcclxuXHJcbi8vIFVwZGF0ZSBhbGwgZ2FtZSBvYmplY3RzXHJcbmcucmVuZGVyZXIuYXR0YWNoVXBkYXRlKCgpID0+IHtcclxuICBpZiAoQ29sbGlzaW9uLmNpcmNsZUNvbGxpZGUoaGl0Q2lyY2xlLmVsZW1lbnQsIG5ldyBDaXJjbGUoJycsIE1vdXNlLmN1cnNvcikpKSB7XHJcbiAgICBoaXRDaXJjbGUuZWxlbWVudC5jb2xvciA9ICcjMURCQkZGJztcclxuICB9IGVsc2Uge1xyXG4gICAgaGl0Q2lyY2xlLmVsZW1lbnQuY29sb3IgPSAnIzAxMzNERCc7XHJcbiAgfVxyXG5cclxuICBmcHNjb3VudGVyLnVwZGF0ZSgpO1xyXG4gIGhpdENpcmNsZS51cGRhdGUoKTtcclxuICBjdXJzb3IudXBkYXRlKCk7XHJcbiAgaGl0S2V5cy51cGRhdGUoKTtcclxufSk7XHJcblxyXG5nLnN0YXJ0KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyBzaXplOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuICBcclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5DSVJDTEU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0NpcmNsZS50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBmb250TmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBmb250U2l6ZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihmb250TmFtZTogc3RyaW5nID0gJ0FyaWFsJywgZm9udFNpemU6IG51bWJlciA9IDEyLCBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnKSB7XHJcbiAgICB0aGlzLmZvbnROYW1lID0gZm9udE5hbWU7XHJcbiAgICB0aGlzLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JhcGhpY3MvRm9udC50cyIsImltcG9ydCBQYXRoUG9pbnQgZnJvbSAnLi9QYXRoUG9pbnQnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuL1BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xyXG4gIHByaXZhdGUgX3BhdGg6IFBhdGg7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGg6IFBhdGggPSBbXSkge1xyXG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBhdGgoKTogUGF0aCB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX3BhdGhdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBwYXRoKHBhdGg6IFBhdGgpIHtcclxuICAgIHRoaXMuX3BhdGggPSBbLi4ucGF0aF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UG9pbnQoaW5kZXg6IG51bWJlcik6IFBhdGhQb2ludHxudWxsIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuX3BhdGgubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgdGhpcy5fcGF0aFtpbmRleF1bMF0sXHJcbiAgICAgICAgdGhpcy5fcGF0aFtpbmRleF1bMV1cclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQb2ludChpbmRleDogbnVtYmVyLCBwYXRoUG9pbnQ6IFBhdGhQb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGluZGV4IDwgdGhpcy5fcGF0aC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5fcGF0aFtpbmRleF0gPSBbXHJcbiAgICAgICAgcGF0aFBvaW50WzBdLFxyXG4gICAgICAgIHBhdGhQb2ludFsxXVxyXG4gICAgICBdO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFBvaW50KHBhdGhQb2ludDogUGF0aFBvaW50KSB7XHJcbiAgICB0aGlzLl9wYXRoLnB1c2gocGF0aFBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVQb2ludChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9wYXRoLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9wYXRoLnNsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9Nb2RlbC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcclxuICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gIHB1YmxpYyB5OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9Qb2ludC50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCwgRm9udCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZm9udDogRm9udDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgc3VwZXIobmFtZSwgcG9pbnQsIHZpc2libGUpO1xyXG5cclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuTEFCRUw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Rm9udChmb250OiBGb250KTogdm9pZCB7XHJcbiAgICB0aGlzLmZvbnQgPSBmb250O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9udC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvbnRDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvbnQuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvTGFiZWwudHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBwdWJsaWMgZmlsbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLlJFQ1RBTkdMRTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvUmVjdGFuZ2xlLnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50LCBNb2RlbCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBwdWJsaWMgZmlsbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLm1vZGVsID0gbmV3IE1vZGVsKCk7XHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLlNIQVBFO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9TaGFwZS50cyIsImltcG9ydCBLZXkgZnJvbSAnLi9LZXknO1xyXG5pbXBvcnQgS2V5Q29kZXMgZnJvbSAnLi9LZXlDb2Rlcyc7XHJcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4uL3JlbmRlcmluZyc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBLZXlib2FyZCB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2tleXM6IENvbGxlY3Rpb248S2V5PjtcclxuICBcclxuICBwdWJsaWMgc3RhdGljIF9pbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fa2V5cyA9IHt9O1xyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBLZXlDb2Rlcykge1xyXG4gICAgICB0aGlzLl9rZXlzW2tleV0gPSBuZXcgS2V5KDxLZXlDb2Rlcz5rZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIFNjcmVlbi5vbihbJ2tleWRvd24nXSwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKEtleUNvZGVzWzxhbnk+ZS5jb2RlXSAmJiB0aGlzLl9rZXlzW2UuY29kZV0uaXNVcCgpKSB7XHJcbiAgICAgICAgdGhpcy5fa2V5c1tlLmNvZGVdLl9zdGF0ZS5fc3dpdGNoKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFNjcmVlbi5vbihbJ2tleXVwJ10sIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChLZXlDb2Rlc1s8YW55PmUuY29kZV0gJiYgdGhpcy5fa2V5c1tlLmNvZGVdLmlzRG93bigpKSB7XHJcbiAgICAgICAgdGhpcy5fa2V5c1tlLmNvZGVdLl9zdGF0ZS5fc3dpdGNoKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFNjcmVlbi5vbihbJ2tleXByZXNzJ10sIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRLZXkoa2V5OiBLZXlDb2Rlcyk6IEtleSB7XHJcbiAgICByZXR1cm4gdGhpcy5fa2V5c1trZXldO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBrZXkoa2V5OiBLZXlDb2Rlcyk6IEtleSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXkoa2V5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNEb3duKGtleTogS2V5Q29kZXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9rZXlzW2tleV0uaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzVXAoa2V5OiBLZXlDb2Rlcyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2tleXNba2V5XS5pc1VwKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL0tleWJvYXJkLnRzIiwiaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3RpbWluZyc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vcm9vdCc7XHJcbmltcG9ydCB7XHJcbiAgR2FtZU9iamVjdCxcclxuICBHYW1lT2JqZWN0VHlwZXMsXHJcbiAgUmVjdGFuZ2xlLFxyXG4gIENpcmNsZSxcclxuICBTaGFwZSxcclxuICBMYWJlbCxcclxuICBJbWFnZVxyXG59IGZyb20gJy4uL2dhbWUtb2JqZWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwdWJsaWMgc2NlbmU6IFNjZW5lO1xyXG4gIHByaXZhdGUgYW5pbWF0aW9uRnJhbWU6IG51bWJlcjtcclxuICBwcml2YXRlIF91cGRhdGVzOiBGdW5jdGlvbltdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuICAgIHRoaXMuX3VwZGF0ZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hbmltYXRpb25GcmFtZSkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmcmFtZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoZnJhbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhdHRhY2hVcGRhdGUodXBkYXRlOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5fdXBkYXRlcy5wdXNoKHVwZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcihmcmFtZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBUaW1lLl9zZXRGcmFtZShmcmFtZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdGhpcy5fdXBkYXRlcykge1xyXG4gICAgICB1cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB0aGlzLnNjZW5lLnVwZGF0ZXMpIHtcclxuICAgICAgdXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNvbnRleHQuY2FudmFzLndpZHRoLCB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBnYW1lT2JqZWN0TmFtZSBpbiB0aGlzLnNjZW5lLmdldEFsbCgpKSB7XHJcbiAgICAgIGNvbnN0IGdhbWVPYmplY3QgPSA8R2FtZU9iamVjdD50aGlzLnNjZW5lLmdldChnYW1lT2JqZWN0TmFtZSk7XHJcblxyXG4gICAgICBnYW1lT2JqZWN0LnVwZGF0ZSgpO1xyXG4gICAgICBcclxuICAgICAgaWYgKCFnYW1lT2JqZWN0LnZpc2libGUpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QuaGFzUmVuZGVyQ29udGV4dFNldHRpbmdzKCkpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICAgIGdhbWVPYmplY3QucmVuZGVyQ29udGV4dFNldHRpbmdzKHRoaXMuY29udGV4dCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0LnJvdGF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHRoaXMuY29udGV4dC5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoZ2FtZU9iamVjdC5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoLXRoaXMuY29udGV4dC5jYW52YXMud2lkdGggLyAyLCAtdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3Quc2NhbGUgIT09IDEpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUoZ2FtZU9iamVjdC5zY2FsZSwgZ2FtZU9iamVjdC5zY2FsZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgUmVjdGFuZ2xlKSB7XHJcblxyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LmZpbGwpIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LngsXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSxcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC53aWR0aCxcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC5oZWlnaHRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdChcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC54LFxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnksXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QuaGVpZ2h0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgQ2lyY2xlKSB7XHJcbiAgICAgICAgaWYgKGdhbWVPYmplY3Quc2l6ZSA9PT0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55LCBnYW1lT2JqZWN0LnNpemUgLyAyLCAwLCAyICogTWF0aC5QSSk7XHJcblxyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LmZpbGwpIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFNoYXBlKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAoY29uc3QgcGF0aFBvaW50IG9mIGdhbWVPYmplY3QubW9kZWwucGF0aCkge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwYXRoUG9pbnRbMF0sIHBhdGhQb2ludFsxXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBMYWJlbCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gYCR7Z2FtZU9iamVjdC5mb250LmZvbnRTaXplfXB4ICR7Z2FtZU9iamVjdC5mb250LmZvbnROYW1lfWA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGdhbWVPYmplY3QuZmlsbCkge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdhbWVPYmplY3QuZm9udC5jb2xvcjtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChnYW1lT2JqZWN0LnRleHQsIGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gZ2FtZU9iamVjdC5mb250LmNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQoZ2FtZU9iamVjdC50ZXh0LCBnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBJbWFnZSkge1xyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0LnJlYWR5KSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGdhbWVPYmplY3QuaW1hZ2UsIGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0LnNjYWxlICE9PSAxKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKDEsIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZ2FtZU9iamVjdC5yb3RhdGlvbikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0Lmhhc1JlbmRlckNvbnRleHRTZXR0aW5ncygpKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZyYW1lOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXIoZnJhbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcmVuZGVyaW5nL1JlbmRlcmVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVGltZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2RlbHRhVGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF90aW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2ZwczogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIF9pbml0KCkge1xyXG4gICAgdGhpcy5fZGVsdGFUaW1lID0gMDtcclxuICAgIHRoaXMuX3RpbWUgPSAwO1xyXG4gICAgdGhpcy5fZnBzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBfc2V0RnJhbWUoZnJhbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fZGVsdGFUaW1lID0gZnJhbWUgLSB0aGlzLl90aW1lO1xyXG4gICAgdGhpcy5fdGltZSA9IGZyYW1lO1xyXG4gICAgdGhpcy5fZnBzID0gTWF0aC5yb3VuZCgxMDAwIC8gdGhpcy5fZGVsdGFUaW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRlbHRhVGltZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbHRhVGltZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90aW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZnBzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZnBzO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9UaW1lLnRzIiwiaW1wb3J0IG5vdyBmcm9tICcuL25vdyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlciB7XHJcbiAgcHVibGljIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBlbmRUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfc3RlcHM6IG51bWJlcltdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIHRoaXMuZW5kVGltZSA9IDA7XHJcbiAgICB0aGlzLl9zdGVwcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuZW5kVGltZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhcnRUaW1lKSB7XHJcbiAgICAgIHJldHVybiBub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHN0ZXBzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5fc3RlcHNdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbmRUaW1lID0gMDtcclxuICAgIHRoaXMuX3N0ZXBzID0gW107XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5vdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0ZXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGFydFRpbWUpIHtcclxuICAgICAgdGhpcy5fc3RlcHMucHVzaChub3coKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZW5kVGltZSA9IG5vdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0ZXAoaW5kZXg6IG51bWJlcik6IG51bWJlcnxudWxsIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuX3N0ZXBzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RlcHNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0ZXBEdXJhdGlvbihpbmRleDogbnVtYmVyKTogbnVtYmVyfG51bGwge1xyXG4gICAgY29uc3Qgc3RlcDogbnVtYmVyfG51bGwgPSB0aGlzLmdldFN0ZXAoaW5kZXgpO1xyXG5cclxuICAgIGlmIChzdGVwICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBzdGVwIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3RlcER1cmF0aW9ucygpOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCBzdGVwczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHN0ZXAgb2YgdGhpcy5zdGVwcykge1xyXG4gICAgICBzdGVwcy5wdXNoKHN0ZXAgLSB0aGlzLnN0YXJ0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0ZXBzO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9Qcm9maWxlci50cyIsImltcG9ydCB7IE1vdXNlLCBLZXlib2FyZCB9IGZyb20gJy4uL2lucHV0cyc7XHJcbmltcG9ydCB7IFNjcmVlbiwgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyBUaW1lIH0gZnJvbSAnLi4vdGltaW5nJztcclxuaW1wb3J0IFNjZW5lIGZyb20gJy4vU2NlbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgcHVibGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICBwcml2YXRlIF9zY2VuZTogU2NlbmU7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBHYW1lLlxyXG4gICAqIEBwYXJhbSBjYW52YXMgVGhlIGNhbnZhcyB0byBjcmVhdGUgdGhlIGdhbWUgaW4uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+dGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKSk7XHJcbiAgICB0aGlzLl9zY2VuZSA9IHRoaXMucmVuZGVyZXIuc2NlbmU7XHJcblxyXG4gICAgVGltZS5faW5pdCgpO1xyXG4gICAgTW91c2UuX2luaXQoKTtcclxuICAgIEtleWJvYXJkLl9pbml0KCk7XHJcbiAgICBTY3JlZW4uX2luaXQodGhpcy5jYW52YXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzY2VuZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zY2VuZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTY2VuZShzY2VuZTogU2NlbmUpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMuX3NjZW5lID0gc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUNhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUodXBkYXRlOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5zY2VuZS5hdHRhY2hVcGRhdGUodXBkYXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnbG9iYWxVcGRhdGUodXBkYXRlOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hdHRhY2hVcGRhdGUodXBkYXRlKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb290L0dhbWUudHMiLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcclxuICBwcml2YXRlIF9nYW1lT2JqZWN0czogQ29sbGVjdGlvbjxHYW1lT2JqZWN0PjtcclxuICBwcml2YXRlIF91cGRhdGVzOiBGdW5jdGlvbltdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2dhbWVPYmplY3RzID0ge307XHJcbiAgICB0aGlzLl91cGRhdGVzID0gW107XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBnZXQgdXBkYXRlcygpOiBGdW5jdGlvbltdIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5fdXBkYXRlc107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbnRhaW5zKGdhbWVPYmplY3QubmFtZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9nYW1lT2JqZWN0c1tnYW1lT2JqZWN0Lm5hbWVdID0gZ2FtZU9iamVjdDtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoZ2FtZU9iamVjdE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5zKGdhbWVPYmplY3ROYW1lKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGRlbGV0ZSB0aGlzLl9nYW1lT2JqZWN0c1tnYW1lT2JqZWN0TmFtZV07XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBnZXQoZ2FtZU9iamVjdE5hbWU6IHN0cmluZyk6IEdhbWVPYmplY3R8bnVsbCB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbnMoZ2FtZU9iamVjdE5hbWUpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEFsbCgpOiBDb2xsZWN0aW9uPEdhbWVPYmplY3Q+IHtcclxuICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb250YWlucyhnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHMuaGFzT3duUHJvcGVydHkoZ2FtZU9iamVjdE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZ2FtZU9iamVjdHMgPSB7fTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgYXR0YWNoVXBkYXRlKHVwZGF0ZTogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuX3VwZGF0ZXMucHVzaCh1cGRhdGUpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Jvb3QvU2NlbmUudHMiLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBTY3JlZW4ge1xyXG4gIHByaXZhdGUgc3RhdGljIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgc3RhdGljIF93aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9oZWlnaHQ6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfb25SZXNpemU6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIFxyXG4gICAgdGhpcy5fb25SZXNpemUgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7fTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICB0aGlzLl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuX29uUmVzaXplKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb24oZXZlbnROYW1lczogc3RyaW5nW10sIGV2ZW50SGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudEhhbmRsZXIoZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBvblJlc2l6ZShoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5fb25SZXNpemUgPSA8KGV2ZW50OiBFdmVudCkgPT4gdm9pZD5oYW5kbGVyO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIE1vdXNlIHtcclxuICBwcml2YXRlIHN0YXRpYyBfY3Vyc29yOiBQb2ludDtcclxuICBwcml2YXRlIHN0YXRpYyBfbGVmdENsaWNrOiBJbnB1dFN0YXRlO1xyXG4gIHByaXZhdGUgc3RhdGljIF9taWRkbGVDbGljazogSW5wdXRTdGF0ZTtcclxuICBwcml2YXRlIHN0YXRpYyBfcmlnaHRDbGljazogSW5wdXRTdGF0ZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2N1cnNvciA9IG5ldyBQb2ludChTY3JlZW4ud2lkdGggLyAyLCBTY3JlZW4uaGVpZ2h0IC8gMik7XHJcbiAgICB0aGlzLl9sZWZ0Q2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5fbWlkZGxlQ2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5fcmlnaHRDbGljayA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBjdXJzb3IoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnNvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGN1cnNvclgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnNvci54O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgY3Vyc29yWSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3Vyc29yLnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBidXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0aGlzLmxlZnRCdXR0b25Eb3duIHx8IHRoaXMubWlkZGxlQnV0dG9uRG93biB8fCB0aGlzLnJpZ2h0QnV0dG9uRG93bik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBsZWZ0QnV0dG9uRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sZWZ0Q2xpY2suaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBtaWRkbGVCdXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pZGRsZUNsaWNrLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgcmlnaHRCdXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0Q2xpY2suaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBsZWZ0QnV0dG9uVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGVmdENsaWNrLmlzVXAoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG1pZGRsZUJ1dHRvblVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pZGRsZUNsaWNrLmlzVXAoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHJpZ2h0QnV0dG9uVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmlnaHRDbGljay5pc1VwKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbml0RXZlbnRzKCk6IHZvaWQge1xyXG4gICAgU2NyZWVuLm9uKFsnbW91c2Vtb3ZlJ10sIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2N1cnNvci54ID0gZS5jbGllbnRYO1xyXG4gICAgICB0aGlzLl9jdXJzb3IueSA9IGUuY2xpZW50WTtcclxuICAgIH0pO1xyXG5cclxuICAgIFNjcmVlbi5vbihbJ21vdXNlZG93bicsICdtb3VzZXVwJ10sIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHN3aXRjaChlLmJ1dHRvbikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHRoaXMuX2xlZnRDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLl9taWRkbGVDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICB0aGlzLl9yaWdodENsaWNrLl9zd2l0Y2goKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JlZW4ub24oWydjb250ZXh0bWVudSddLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9Nb3VzZS50cyIsImltcG9ydCB7IE1vdXNlLCBDaXJjbGUsIFNjZW5lIH0gZnJvbSAnLi4vZW5naW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XHJcbiAgcHVibGljIGVsZW1lbnQ6IENpcmNsZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgQ2lyY2xlKCdjdXJzb3InKTtcclxuICAgIHRoaXMuZWxlbWVudC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZWxlbWVudC5maWxsID0gdHJ1ZTtcclxuICAgIHRoaXMuZWxlbWVudC5jb2xvciA9ICcjRkYwMDAwJztcclxuICAgIHRoaXMuZWxlbWVudC5zaXplID0gMzA7XHJcblxyXG4gICAgc2NlbmUuYWRkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50LnggPSBNb3VzZS5jdXJzb3JYO1xyXG4gICAgdGhpcy5lbGVtZW50LnkgPSBNb3VzZS5jdXJzb3JZO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFscy9DdXJzb3IudHMiLCJpbXBvcnQgeyBSZWN0YW5nbGUsIExhYmVsLCBTY2VuZSwgRm9udCwgU2NyZWVuLCBQb2ludCwgS2V5Ym9hcmQsIEtleUNvZGVzIH0gZnJvbSAnLi4vZW5naW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpdEtleXMge1xyXG4gIHB1YmxpYyBxRWxlbWVudDogUmVjdGFuZ2xlO1xyXG4gIHB1YmxpYyBxTGFiZWw6IExhYmVsO1xyXG4gIHB1YmxpYyB3RWxlbWVudDogUmVjdGFuZ2xlO1xyXG4gIHB1YmxpYyB3TGFiZWw6IExhYmVsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUpIHtcclxuICAgIHRoaXMucUVsZW1lbnQgPSBuZXcgUmVjdGFuZ2xlKCdxcmVjdGFuZ2xlJyk7XHJcbiAgICB0aGlzLnFFbGVtZW50LnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5xRWxlbWVudC5maWxsID0gdHJ1ZTtcclxuICAgIHRoaXMucUVsZW1lbnQuY29sb3IgPSAnI0NDRERDQyc7XHJcbiAgICB0aGlzLnFFbGVtZW50LndpZHRoID0gNjA7XHJcbiAgICB0aGlzLnFFbGVtZW50LmhlaWdodCA9IDYwO1xyXG4gICAgdGhpcy5xTGFiZWwgPSBuZXcgTGFiZWwoJ3FsYWJlbCcpO1xyXG4gICAgdGhpcy5xTGFiZWwudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLnFMYWJlbC50ZXh0ID0gJ1EnO1xyXG4gICAgdGhpcy5xTGFiZWwuZmlsbCA9IHRydWU7XHJcbiAgICB0aGlzLnFMYWJlbC5zZXRGb250KG5ldyBGb250KCdBcmlhbCcsIDE2LCAnIzAwMDAwMCcpKTtcclxuXHJcbiAgICB0aGlzLndFbGVtZW50ID0gbmV3IFJlY3RhbmdsZSgnd3JlY3RhbmdsZScpO1xyXG4gICAgdGhpcy53RWxlbWVudC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMud0VsZW1lbnQuZmlsbCA9IHRydWU7XHJcbiAgICB0aGlzLndFbGVtZW50LmNvbG9yID0gJyNDQ0REQ0MnO1xyXG4gICAgdGhpcy53RWxlbWVudC53aWR0aCA9IDYwO1xyXG4gICAgdGhpcy53RWxlbWVudC5oZWlnaHQgPSA2MDtcclxuICAgIHRoaXMud0xhYmVsID0gbmV3IExhYmVsKCd3bGFiZWwnKTtcclxuICAgIHRoaXMud0xhYmVsLnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy53TGFiZWwudGV4dCA9ICdXJztcclxuICAgIHRoaXMud0xhYmVsLmZpbGwgPSB0cnVlO1xyXG4gICAgdGhpcy53TGFiZWwuc2V0Rm9udChuZXcgRm9udCgnQXJpYWwnLCAxNiwgJyMwMDAwMDAnKSk7XHJcblxyXG4gICAgdGhpcy5xRWxlbWVudC5zZXRQb2ludChuZXcgUG9pbnQoMjAsIFNjcmVlbi5oZWlnaHQgLSA4MCkpO1xyXG4gICAgdGhpcy5xTGFiZWwuc2V0UG9pbnQobmV3IFBvaW50KDYwLCBTY3JlZW4uaGVpZ2h0IC0gMzApKTtcclxuXHJcbiAgICB0aGlzLndFbGVtZW50LnNldFBvaW50KG5ldyBQb2ludCgxMDAsIFNjcmVlbi5oZWlnaHQgLSA4MCkpO1xyXG4gICAgdGhpcy53TGFiZWwuc2V0UG9pbnQobmV3IFBvaW50KDE0MCwgU2NyZWVuLmhlaWdodCAtIDMwKSk7XHJcblxyXG4gICAgc2NlbmUuYWRkKHRoaXMucUVsZW1lbnQpO1xyXG4gICAgc2NlbmUuYWRkKHRoaXMucUxhYmVsKTtcclxuICAgIHNjZW5lLmFkZCh0aGlzLndFbGVtZW50KTtcclxuICAgIHNjZW5lLmFkZCh0aGlzLndMYWJlbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKEtleWJvYXJkLmtleShLZXlDb2Rlcy5LZXlRKS5pc0Rvd24oKSkge1xyXG4gICAgICB0aGlzLnFFbGVtZW50LmNvbG9yID0gJyMxMTMzMTEnO1xyXG4gICAgICB0aGlzLnFMYWJlbC5zZXRGb250Q29sb3IoJyNGRkZGRkYnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucUVsZW1lbnQuY29sb3IgPSAnI0NDRERDQyc7XHJcbiAgICAgIHRoaXMucUxhYmVsLnNldEZvbnRDb2xvcignIzAwMDAwMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChLZXlib2FyZC5rZXkoS2V5Q29kZXMuS2V5VykuaXNEb3duKCkpIHtcclxuICAgICAgdGhpcy53RWxlbWVudC5jb2xvciA9ICcjMTEzMzExJztcclxuICAgICAgdGhpcy53TGFiZWwuc2V0Rm9udENvbG9yKCcjRkZGRkZGJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndFbGVtZW50LmNvbG9yID0gJyNDQ0REQ0MnO1xyXG4gICAgICB0aGlzLndMYWJlbC5zZXRGb250Q29sb3IoJyMwMDAwMDAnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbHMvSGl0S2V5cy50cyIsImltcG9ydCB7IENpcmNsZSwgU2NlbmUsIFBvaW50LCBTY3JlZW4sIEtleWJvYXJkLCBNb3VzZSwgS2V5Q29kZXMsIENvbGxpc2lvbiB9IGZyb20gJy4uL2VuZ2luZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaXRDaXJjbGUge1xyXG4gIHB1YmxpYyBib3JkZXI6IENpcmNsZTtcclxuICBwdWJsaWMgZWxlbWVudDogQ2lyY2xlO1xyXG4gIHB1YmxpYyBoaXQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSkge1xyXG4gICAgdGhpcy5oaXQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmJvcmRlciA9IG5ldyBDaXJjbGUoJ2hpdCBjaXJjbGUgYm9yZGVyJyk7XHJcbiAgICB0aGlzLmJvcmRlci5zZXRQb2ludChuZXcgUG9pbnQoTWF0aC5yYW5kb20oKSAqIFNjcmVlbi53aWR0aCwgTWF0aC5yYW5kb20oKSAqIFNjcmVlbi5oZWlnaHQpKTtcclxuICAgIHRoaXMuYm9yZGVyLmNvbG9yID0gJyNGRkZGRkYnO1xyXG4gICAgdGhpcy5ib3JkZXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmJvcmRlci5zaXplID0gODQ7XHJcbiAgICBcclxuICAgIHRoaXMuZWxlbWVudCA9IG5ldyBDaXJjbGUoJ2hpdCBjaXJjbGUnKTtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRQb2ludChuZXcgUG9pbnQodGhpcy5ib3JkZXIueCwgdGhpcy5ib3JkZXIueSkpO1xyXG4gICAgdGhpcy5lbGVtZW50LmNvbG9yID0gJyMwMTMzREQnO1xyXG4gICAgdGhpcy5lbGVtZW50LnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5lbGVtZW50LnNpemUgPSA4MDtcclxuXHJcbiAgICBzY2VuZS5hZGQodGhpcy5ib3JkZXIpO1xyXG4gICAgc2NlbmUuYWRkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGl0KSB7XHJcbiAgICAgIGlmIChLZXlib2FyZC5rZXkoS2V5Q29kZXMuS2V5USkuaXNVcCgpICYmIEtleWJvYXJkLmtleShLZXlDb2Rlcy5LZXlXKS5pc1VwKCkpIHtcclxuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEtleWJvYXJkLmtleShLZXlDb2Rlcy5LZXlRKS5pc0Rvd24oKSB8fCBLZXlib2FyZC5rZXkoS2V5Q29kZXMuS2V5VykuaXNEb3duKCkpIHtcclxuICAgICAgaWYgKCF0aGlzLmhpdCAmJlxyXG4gICAgICAgIENvbGxpc2lvbi5jaXJjbGVDb2xsaWRlKHRoaXMuZWxlbWVudCwgbmV3IENpcmNsZSgnJywgTW91c2UuY3Vyc29yKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgUG9pbnQoTWF0aC5yYW5kb20oKSAqIFNjcmVlbi53aWR0aCwgTWF0aC5yYW5kb20oKSAqIFNjcmVlbi5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyLnNldFBvaW50KHBvaW50KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0UG9pbnQocG9pbnQpO1xyXG4gICAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFscy9IaXRDaXJjbGUudHMiLCJpbXBvcnQgeyBMYWJlbCwgUG9pbnQsIFNjZW5lLCBUaW1lLCBGb250IH0gZnJvbSAnLi4vZW5naW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZQU0NvdW50ZXIge1xyXG4gIHB1YmxpYyBlbGVtZW50OiBMYWJlbDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgTGFiZWwoJ2ZwcyBjb3VudGVyJyk7XHJcbiAgICB0aGlzLmVsZW1lbnQudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0Rm9udChuZXcgRm9udCgnQXJpYWwnLCAxMiwgJyNGRkZGRkYnKSk7XHJcbiAgICB0aGlzLmVsZW1lbnQudGV4dCA9ICdGUFM6IDAnO1xyXG4gICAgdGhpcy5lbGVtZW50LnNldFBvaW50KG5ldyBQb2ludCgxNSwgMTUpKTtcclxuXHJcbiAgICBzY2VuZS5hZGQodGhpcy5lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnQudGV4dCA9IGBGUFM6ICR7VGltZS5mcHN9YDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbHMvRlBTQ291bnRlci50cyIsImltcG9ydCBDb2xsaXNpb24gZnJvbSAnLi9Db2xsaXNpb24nO1xyXG5cclxuZXhwb3J0IHtcclxuICBDb2xsaXNpb25cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9waHlzaWNzL2luZGV4LnRzIiwiaW1wb3J0IHsgUmVjdGFuZ2xlLCBDaXJjbGUsIEdhbWVPYmplY3QgfSBmcm9tICcuLi9nYW1lLW9iamVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29sbGlzaW9uIHtcclxuICBwdWJsaWMgc3RhdGljIGJveENvbGxpZGUoZWxlbWVudDE6IFJlY3RhbmdsZSwgZWxlbWVudDI6IFJlY3RhbmdsZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZWxlbWVudDEueCA8IGVsZW1lbnQyLnggKyBlbGVtZW50Mi53aWR0aCAmJlxyXG4gICAgICBlbGVtZW50MS54ICsgZWxlbWVudDEud2lkdGggPiBlbGVtZW50Mi54ICYmXHJcbiAgICAgIGVsZW1lbnQxLnkgPCBlbGVtZW50Mi55ICsgZWxlbWVudDIuaGVpZ2h0ICYmXHJcbiAgICAgIGVsZW1lbnQxLmhlaWdodCArIGVsZW1lbnQxLnkgPiBlbGVtZW50Mi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjaXJjbGVDb2xsaWRlKGVsZW1lbnQxOiBDaXJjbGUsIGVsZW1lbnQyOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGR4OiBudW1iZXIgPSBlbGVtZW50MS54IC0gZWxlbWVudDIueDtcclxuICAgIGNvbnN0IGR5OiBudW1iZXIgPSBlbGVtZW50MS55IC0gZWxlbWVudDIueTtcclxuICAgIGNvbnN0IGQ6IG51bWJlciA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgZCA8IGVsZW1lbnQxLnNpemUgLyAyICsgZWxlbWVudDIuc2l6ZSAvIDJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNvbGxpZGUoZWxlbWVudDE6IFJlY3RhbmdsZXxDaXJjbGUsIGVsZW1lbnQyOiBSZWN0YW5nbGV8Q2lyY2xlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZWxlbWVudDEgaW5zdGFuY2VvZiBDaXJjbGUgJiYgZWxlbWVudDIgaW5zdGFuY2VvZiBDaXJjbGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlQ29sbGlkZShlbGVtZW50MSwgZWxlbWVudDIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHcxOiBudW1iZXI7XHJcbiAgICAgIGxldCBoMTogbnVtYmVyO1xyXG4gICAgICBsZXQgdzI6IG51bWJlcjtcclxuICAgICAgbGV0IGgyOiBudW1iZXI7XHJcblxyXG4gICAgICBpZiAoZWxlbWVudDEgaW5zdGFuY2VvZiBDaXJjbGUpIHtcclxuICAgICAgICB3MSA9IGVsZW1lbnQxLnNpemU7XHJcbiAgICAgICAgaDEgPSBlbGVtZW50MS5zaXplO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHcxID0gZWxlbWVudDEud2lkdGg7XHJcbiAgICAgICAgaDEgPSBlbGVtZW50MS5oZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbGVtZW50MiBpbnN0YW5jZW9mIENpcmNsZSkge1xyXG4gICAgICAgIHcyID0gZWxlbWVudDIuc2l6ZTtcclxuICAgICAgICBoMiA9IGVsZW1lbnQyLnNpemU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdzIgPSBlbGVtZW50Mi53aWR0aDtcclxuICAgICAgICBoMiA9IGVsZW1lbnQyLmhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYm94Q29sbGlkZShcclxuICAgICAgICA8UmVjdGFuZ2xlPnt4OiBlbGVtZW50MS54LCB5OiBlbGVtZW50MS55LCB3aWR0aDogdzEsIGhlaWdodDogaDF9LFxyXG4gICAgICAgIDxSZWN0YW5nbGU+e3g6IGVsZW1lbnQyLngsIHk6IGVsZW1lbnQyLnksIHdpZHRoOiB3MiwgaGVpZ2h0OiBoMn1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9waHlzaWNzL0NvbGxpc2lvbi50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHJvdGVjdGVkIF9yZWFkeTogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX1VSTDogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBfaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLl9yZWFkeSA9IGZhbHNlO1xyXG4gICAgdGhpcy5faW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICB0aGlzLl9pbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZWFkeSA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLklNQUdFO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByZWFkeSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9yZWFkeTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgVVJMKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX1VSTDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgVVJMKFVSTDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yZWFkeSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fVVJMID0gVVJMO1xyXG4gICAgdGhpcy5faW1hZ2Uuc3JjID0gdGhpcy5fVVJMO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpbWFnZSgpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLl9pbWFnZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRVUkwoVVJMOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuVVJMID0gVVJMO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9JbWFnZS50cyJdLCJzb3VyY2VSb290IjoiIn0=