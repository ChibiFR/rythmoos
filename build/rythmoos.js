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
var Group_1 = __webpack_require__(36);
exports.Group = Group_1.default;
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
        for (var gameObjectResolvableName in this.scene.getAll()) {
            var gameObjectResolvable = this.scene.get(gameObjectResolvableName);
            if (gameObjectResolvable instanceof game_objects_1.Group) {
                for (var gameObjectName in this.scene.getAll()) {
                    var gameObject = gameObjectResolvable.get(gameObjectName);
                    this.renderGameObject(gameObject);
                }
            }
            else {
                this.renderGameObject(gameObjectResolvable);
            }
        }
        this.animationFrame = requestAnimationFrame(function (frame) {
            _this.render(frame);
        });
    };
    Renderer.prototype.renderGameObject = function (gameObject) {
        gameObject.update();
        if (!gameObject.visible)
            return;
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
            return;
        }
        if (gameObject instanceof game_objects_1.Circle) {
            if (gameObject.size === 0)
                return;
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
            return;
        }
        if (gameObject instanceof game_objects_1.Shape) {
            this.context.beginPath();
            this.context.moveTo(gameObject.x, gameObject.y);
            for (var _i = 0, _a = gameObject.model.path; _i < _a.length; _i++) {
                var pathPoint = _a[_i];
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
            return;
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
            return;
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


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Group = /** @class */ (function () {
    function Group(name) {
        this.name = name;
        this.visible = false;
        this._gameObjects = {};
    }
    Group.prototype.add = function (gameObject) {
        if (this._gameObjects[gameObject.name] !== undefined)
            return false;
        this._gameObjects[gameObject.name] = gameObject;
        return true;
    };
    Group.prototype.get = function (gameObjectName) {
        if (this._gameObjects[gameObjectName] === undefined)
            return null;
        return this._gameObjects[gameObjectName];
    };
    Group.prototype.getAll = function () {
        return __assign({}, this._gameObjects);
    };
    Group.prototype.remove = function (gameObjectName) {
        if (this._gameObjects[gameObjectName] === undefined)
            return false;
        delete this._gameObjects[gameObjectName];
        return true;
    };
    return Group;
}());
exports.default = Group;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGNhYjE3NjdiNDIyZWExMTc2M2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdFR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL0lucHV0U3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90aW1pbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL0tleUNvZGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL25vdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL0ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0xhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9TaGFwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9UaW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9HYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvTW91c2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbHMvQ3Vyc29yLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxzL0hpdEtleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbHMvSGl0Q2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxzL0ZQU0NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9waHlzaWNzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcGh5c2ljcy9Db2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvSW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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Q0FBQztJQUNkLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJyeXRobW9vcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0Y2FiMTc2N2I0MjJlYTExNzYzZiIsImVudW0gR2FtZU9iamVjdFR5cGVzIHtcclxuICBSRUNUQU5HTEUsXHJcbiAgQ0lSQ0xFLFxyXG4gIExBQkVMLFxyXG4gIFNIQVBFLFxyXG4gIElNQUdFLFxyXG4gIE9USEVSXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lT2JqZWN0VHlwZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0dhbWVPYmplY3RUeXBlcy50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF90eXBlOiBHYW1lT2JqZWN0VHlwZXM7XHJcbiAgcHJvdGVjdGVkIF9wb2ludDogUG9pbnQ7XHJcbiAgcHJvdGVjdGVkIF9yb3RhdGlvbjogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfc2NhbGU6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX3VwZGF0ZTogRnVuY3Rpb247XHJcbiAgcHJvdGVjdGVkIF9jb250ZXh0U2V0dGluZ3M6ICgoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkKXxudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fcG9pbnQgPSBwb2ludCA/IHBvaW50IDogbmV3IFBvaW50KDAsIDApO1xyXG4gICAgXHJcbiAgICBpZiAodmlzaWJsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHBvaW50ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XHJcbiAgICB0aGlzLl9zY2FsZSA9IDE7XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlID0gKCkgPT4ge307XHJcblxyXG4gICAgdGhpcy5fY29udGV4dFNldHRpbmdzID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLk9USEVSO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB0eXBlKCk6IEdhbWVPYmplY3RUeXBlcyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcG9pbnQoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BvaW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wb2ludC54O1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgc2V0IHgoeDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9wb2ludC54ID0geDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucG9pbnQueTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgeSh5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BvaW50LnkgPSB5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByb3RhdGlvbigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCByb3RhdGlvbihkZWdyZWVzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3JvdGF0aW9uID0gZGVncmVlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2NhbGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zY2FsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2NhbGUoc2NhbGU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2NhbGUgPSBzY2FsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLl91cGRhdGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLl91cGRhdGUgPSB1cGRhdGU7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBnZXQgcmVuZGVyQ29udGV4dFNldHRpbmdzKCk6IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQge1xyXG4gICAgcmV0dXJuIDwoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkPnRoaXMuX2NvbnRleHRTZXR0aW5ncztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgcmVuZGVyQ29udGV4dFNldHRpbmdzKGNvbnRleHRTZXR0aW5nczogKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5fY29udGV4dFNldHRpbmdzID0gY29udGV4dFNldHRpbmdzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBvaW50KHBvaW50OiBQb2ludCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9pbnQgPSBwb2ludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNSZW5kZXJDb250ZXh0U2V0dGluZ3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dFNldHRpbmdzICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJvdGF0ZShkZWdyZWVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX3JvdGF0aW9uID0gZGVncmVlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRTY2FsZShzY2FsZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zY2FsZSA9IHNjYWxlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9HYW1lT2JqZWN0LnRzIiwiaW1wb3J0IEZvbnQgZnJvbSAnLi9Gb250JztcclxuaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuL1BhdGgnO1xyXG5pbXBvcnQgUGF0aFBvaW50IGZyb20gJy4vUGF0aFBvaW50JztcclxuaW1wb3J0IFBvaW50IGZyb20gJy4vUG9pbnQnO1xyXG5cclxuZXhwb3J0IHtcclxuICBGb250LFxyXG4gIE1vZGVsLFxyXG4gIFBhdGgsXHJcbiAgUGF0aFBvaW50LFxyXG4gIFBvaW50XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JhcGhpY3MvaW5kZXgudHMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9SZW5kZXJlcic7XHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4nO1xyXG5cclxuZXhwb3J0IHtcclxuICBSZW5kZXJlcixcclxuICBTY3JlZW5cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yZW5kZXJpbmcvaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2lucHV0cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGh5c2ljcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyaW5nJztcclxuZXhwb3J0ICogZnJvbSAnLi9yb290JztcclxuZXhwb3J0ICogZnJvbSAnLi90aW1pbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbmRleC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0U3RhdGUge1xyXG4gIHByaXZhdGUgX3ByZXNzZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fcHJlc3NlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIF9zd2l0Y2goKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wcmVzc2VkID0gIXRoaXMuX3ByZXNzZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNVcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVzc2VkID09PSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0Rvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlc3NlZCA9PT0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvSW5wdXRTdGF0ZS50cyIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSc7XHJcbmltcG9ydCBub3cgZnJvbSAnLi9ub3cnO1xyXG5pbXBvcnQgUHJvZmlsZXIgZnJvbSAnLi9Qcm9maWxlcic7XHJcblxyXG5leHBvcnQge1xyXG4gIFRpbWUsXHJcbiAgbm93LFxyXG4gIFByb2ZpbGVyXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdGltaW5nL2luZGV4LnRzIiwiaW1wb3J0IENpcmNsZSBmcm9tICcuL0NpcmNsZSc7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0UmVzb2x2YWJsZSBmcm9tICcuL0dhbWVPYmplY3RSZXNvbHZhYmxlJztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCBHcm91cCBmcm9tICcuL0dyb3VwJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9SZWN0YW5nbGUnO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9TaGFwZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIENpcmNsZSxcclxuICBHYW1lT2JqZWN0LFxyXG4gIEdhbWVPYmplY3RSZXNvbHZhYmxlLFxyXG4gIEdhbWVPYmplY3RUeXBlcyxcclxuICBHcm91cCxcclxuICBJbWFnZSxcclxuICBMYWJlbCxcclxuICBSZWN0YW5nbGUsXHJcbiAgU2hhcGVcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvaW5kZXgudHMiLCJpbXBvcnQgSW5wdXRTdGF0ZSBmcm9tICcuL0lucHV0U3RhdGUnO1xyXG5pbXBvcnQgS2V5IGZyb20gJy4vS2V5JztcclxuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4vS2V5Ym9hcmQnO1xyXG5pbXBvcnQgS2V5Q29kZXMgZnJvbSAnLi9LZXlDb2Rlcyc7XHJcbmltcG9ydCBNb3VzZSBmcm9tICcuL01vdXNlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgSW5wdXRTdGF0ZSxcclxuICBLZXksXHJcbiAgS2V5Ym9hcmQsXHJcbiAgS2V5Q29kZXMsXHJcbiAgTW91c2VcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvaW5kZXgudHMiLCJpbXBvcnQgS2V5Q29kZXMgZnJvbSAnLi9LZXlDb2Rlcyc7XHJcbmltcG9ydCBJbnB1dFN0YXRlIGZyb20gJy4vSW5wdXRTdGF0ZSc7XHJcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4uL3JlbmRlcmluZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXkge1xyXG4gIHB1YmxpYyByZWFkb25seSBrZXk6IEtleUNvZGVzO1xyXG4gIHB1YmxpYyBfc3RhdGU6IElucHV0U3RhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtleTogS2V5Q29kZXMpIHtcclxuICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgdGhpcy5fc3RhdGUgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5pc0Rvd24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmlzVXAoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5LnRzIiwiZW51bSBLZXlDb2RlcyB7XHJcbiAgRGlnaXQwID0gJ0RpZ2l0MCcsXHJcbiAgRGlnaXQxID0gJ0RpZ2l0MScsXHJcbiAgRGlnaXQyID0gJ0RpZ2l0MicsXHJcbiAgRGlnaXQzID0gJ0RpZ2l0MycsXHJcbiAgRGlnaXQ0ID0gJ0RpZ2l0NCcsXHJcbiAgRGlnaXQ1ID0gJ0RpZ2l0NScsXHJcbiAgRGlnaXQ2ID0gJ0RpZ2l0NicsXHJcbiAgRGlnaXQ3ID0gJ0RpZ2l0NycsXHJcbiAgRGlnaXQ4ID0gJ0RpZ2l0OCcsXHJcbiAgRGlnaXQ5ID0gJ0RpZ2l0OScsXHJcblxyXG4gIEtleUEgPSAnS2V5QScsXHJcbiAgS2V5QiA9ICdLZXlCJyxcclxuICBLZXlDID0gJ0tleUMnLFxyXG4gIEtleUQgPSAnS2V5RCcsXHJcbiAgS2V5RSA9ICdLZXlFJyxcclxuICBLZXlGID0gJ0tleUYnLFxyXG4gIEtleUcgPSAnS2V5RycsXHJcbiAgS2V5SCA9ICdLZXlIJyxcclxuICBLZXlJID0gJ0tleUknLFxyXG4gIEtleUogPSAnS2V5SicsXHJcbiAgS2V5SyA9ICdLZXlLJyxcclxuICBLZXlMID0gJ0tleUwnLFxyXG4gIEtleU0gPSAnS2V5TScsXHJcbiAgS2V5TiA9ICdLZXlOJyxcclxuICBLZXlPID0gJ0tleU8nLFxyXG4gIEtleVAgPSAnS2V5UCcsXHJcbiAgS2V5USA9ICdLZXlRJyxcclxuICBLZXlSID0gJ0tleVInLFxyXG4gIEtleVMgPSAnS2V5UycsXHJcbiAgS2V5VCA9ICdLZXlUJyxcclxuICBLZXlVID0gJ0tleVUnLFxyXG4gIEtleVYgPSAnS2V5VicsXHJcbiAgS2V5VyA9ICdLZXlXJyxcclxuICBLZXlYID0gJ0tleVgnLFxyXG4gIEtleVkgPSAnS2V5WScsXHJcbiAgS2V5WiA9ICdLZXlaJyxcclxuXHJcbiAgRXNjYXBlID0gJ0VzY2FwZScsXHJcblxyXG4gIEYxID0gJ0YxJyxcclxuICBGMiA9ICdGMicsXHJcbiAgRjMgPSAnRjMnLFxyXG4gIEY0ID0gJ0Y0JyxcclxuICBGNSA9ICdGNScsXHJcbiAgRjYgPSAnRjYnLFxyXG4gIEY3ID0gJ0Y3JyxcclxuICBGOCA9ICdGOCcsXHJcbiAgRjkgPSAnRjknLFxyXG4gIEYxMCA9ICdGMTAnLFxyXG4gIEYxMSA9ICdGMTEnLFxyXG4gIEYxMiA9ICdGMTInLFxyXG5cclxuICBJbnNlcnQgPSAnSW5zZXJ0JyxcclxuICBEZWxldGUgPSAnRGVsZXRlJyxcclxuXHJcbiAgSG9tZSA9ICdIb21lJyxcclxuICBFbmQgPSAnRW5kJyxcclxuICBQYWdlVXAgPSAnUGFnZVVwJyxcclxuICBQYWdlRG93biA9ICdQYWdlRG93bicsXHJcblxyXG4gIE51bUxvY2sgPSAnTnVtTG9jaycsXHJcbiAgTnVtcGFkRGl2aWRlID0gJ051bXBhZERpdmlkZScsXHJcbiAgTnVtcGFkTXVsdGlwbHkgPSAnTnVtcGFkTXVsdGlwbHknLFxyXG4gIE51bXBhZFN1YnRyYWN0ID0gJ051bXBhZFN1YnRyYWN0JyxcclxuICBOdW1wYWRBZGQgPSAnTnVtcGFkQWRkJyxcclxuICBOdW1wYWRFbnRlciA9ICdOdW1wYWRFbnRlcicsXHJcbiAgTnVtcGFkRGVjaW1hbCA9ICdOdW1wYWREZWNpbWFsJyxcclxuICBOdW1wYWQwID0gJ051bXBhZDAnLFxyXG4gIE51bXBhZDEgPSAnTnVtcGFkMScsXHJcbiAgTnVtcGFkMiA9ICdOdW1wYWQyJyxcclxuICBOdW1wYWQzID0gJ051bXBhZDMnLFxyXG4gIE51bXBhZDQgPSAnTnVtcGFkNCcsXHJcbiAgTnVtcGFkNSA9ICdOdW1wYWQ1JyxcclxuICBOdW1wYWQ2ID0gJ051bXBhZDYnLFxyXG4gIE51bXBhZDcgPSAnTnVtcGFkNycsXHJcbiAgTnVtcGFkOCA9ICdOdW1wYWQ4JyxcclxuICBOdW1wYWQ5ID0gJ051bXBhZDknLFxyXG5cclxuICBBcnJvd1VwID0gJ0Fycm93VXAnLFxyXG4gIEFycm93RG93biA9ICdBcnJvd0Rvd24nLFxyXG4gIEFycm93TGVmdCA9ICdBcnJvd0xlZnQnLFxyXG4gIEFycm93UmlnaHQgPSAnQXJyb3dSaWdodCcsXHJcblxyXG4gIEJhY2txdW90ZSA9ICdCYWNrcXVvdGUnLFxyXG4gIE1pbnVzID0gJ01pbnVzJyxcclxuICBFcXVhbCA9ICdFcXVhbCcsXHJcbiAgQmFja3NwYWNlID0gJ0JhY2tzcGFjZScsXHJcbiAgQnJhY2tldExlZnQgPSAnQnJhY2tldExlZnQnLFxyXG4gIEJyYWNrZXRSaWdodCA9ICdCcmFja2V0UmlnaHQnLFxyXG4gIFF1b3RlID0gJ1F1b3RlJyxcclxuICBCYWNrc2xhc2ggPSAnQmFja3NsYXNoJyxcclxuICBDb21tYSA9ICdDb21tYScsXHJcbiAgUGVyaW9kID0gJ1BlcmlvZCcsXHJcbiAgU2xhc2ggPSAnU2xhc2gnLFxyXG5cclxuICBFbnRlciA9ICdFbnRlcicsXHJcbiAgU2hpZnRMZWZ0ID0gJ1NoaWZ0TGVmdCcsXHJcbiAgU2hpZnRSaWdodCA9ICdTaGlmdFJpZ2h0JyxcclxuICBDYXBzTG9jayA9ICdDYXBzTG9jaycsXHJcbiAgVGFiID0gJ1RhYicsXHJcbiAgQ29udHJvbExlZnQgPSAnQ29udHJvbExlZnQnLFxyXG4gIENvbnRyb2xSaWdodCA9ICdDb250cm9sUmlnaHQnLFxyXG4gIE1ldGFMZWZ0ID0gJ01ldGFMZWZ0JyxcclxuICBNZXRhUmlnaHQgPSAnTWV0YVJpZ2h0JyxcclxuICBBbHRMZWZ0ID0gJ0FsdExlZnQnLFxyXG4gIEFsdFJpZ2h0ID0gJ0FsdFJpZ2h0J1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2V5Q29kZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL0tleUNvZGVzLnRzIiwiZnVuY3Rpb24gZ2V0Tm93KCk6ICgpID0+IG51bWJlciB7XHJcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3c7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gRGF0ZS5ub3c7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE5vdygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9ub3cudHMiLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xyXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIEdhbWUsXHJcbiAgU2NlbmVcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb290L2luZGV4LnRzIiwiaW1wb3J0IHsgR2FtZSwgUmVjdGFuZ2xlLCBTY3JlZW4sIFBvaW50LCBDaXJjbGUsIE1vdXNlLCBDb2xsaXNpb24gfSBmcm9tICcuL2VuZ2luZSc7XHJcblxyXG5pbXBvcnQgRlBTQ291bnRlciBmcm9tICcuL3Zpc3VhbHMvRlBTQ291bnRlcic7XHJcbmltcG9ydCBDdXJzb3IgZnJvbSAnLi92aXN1YWxzL0N1cnNvcic7XHJcbmltcG9ydCBIaXRLZXlzIGZyb20gJy4vdmlzdWFscy9IaXRLZXlzJztcclxuaW1wb3J0IEhpdENpcmNsZSBmcm9tICcuL3Zpc3VhbHMvSGl0Q2lyY2xlJztcclxuXHJcbmNvbnN0IGcgPSBuZXcgR2FtZSgpO1xyXG5cclxuLy8gQmFja2dyb3VuZFxyXG5jb25zdCBiZyA9IG5ldyBSZWN0YW5nbGUoJ2JhY2tncm91bmQnLCBuZXcgUG9pbnQoMCwgMCksIHRydWUpO1xyXG5iZy5jb2xvciA9ICcjMDAwMDAwJztcclxuYmcud2lkdGggPSBTY3JlZW4ud2lkdGg7XHJcbmJnLmhlaWdodCA9IFNjcmVlbi5oZWlnaHQ7XHJcbmcuc2NlbmUuYWRkKGJnKTtcclxuXHJcbi8vIEdhbWUgZWxlbWVudHNcclxuY29uc3QgaGl0Q2lyY2xlID0gbmV3IEhpdENpcmNsZShnLnNjZW5lKTtcclxuY29uc3QgaGl0S2V5cyA9IG5ldyBIaXRLZXlzKGcuc2NlbmUpO1xyXG5jb25zdCBjdXJzb3IgPSBuZXcgQ3Vyc29yKGcuc2NlbmUpO1xyXG5jb25zdCBmcHNjb3VudGVyID0gbmV3IEZQU0NvdW50ZXIoZy5zY2VuZSk7XHJcblxyXG4vLyBVcGRhdGUgYmcgc2l6ZSBvbiByZXNpemVcclxuU2NyZWVuLm9uUmVzaXplKCgpID0+IHtcclxuICBiZy53aWR0aCA9IFNjcmVlbi53aWR0aDtcclxuICBiZy5oZWlnaHQgPSBTY3JlZW4uaGVpZ2h0O1xyXG59KTtcclxuXHJcbi8vIFVwZGF0ZSBhbGwgZ2FtZSBvYmplY3RzXHJcbmcucmVuZGVyZXIuYXR0YWNoVXBkYXRlKCgpID0+IHtcclxuICBpZiAoQ29sbGlzaW9uLmNpcmNsZUNvbGxpZGUoaGl0Q2lyY2xlLmVsZW1lbnQsIG5ldyBDaXJjbGUoJycsIE1vdXNlLmN1cnNvcikpKSB7XHJcbiAgICBoaXRDaXJjbGUuZWxlbWVudC5jb2xvciA9ICcjMURCQkZGJztcclxuICB9IGVsc2Uge1xyXG4gICAgaGl0Q2lyY2xlLmVsZW1lbnQuY29sb3IgPSAnIzAxMzNERCc7XHJcbiAgfVxyXG5cclxuICBmcHNjb3VudGVyLnVwZGF0ZSgpO1xyXG4gIGhpdENpcmNsZS51cGRhdGUoKTtcclxuICBjdXJzb3IudXBkYXRlKCk7XHJcbiAgaGl0S2V5cy51cGRhdGUoKTtcclxufSk7XHJcblxyXG5nLnN0YXJ0KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyBzaXplOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuICBcclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5DSVJDTEU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0NpcmNsZS50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnQge1xyXG4gIHB1YmxpYyByZWFkb25seSBmb250TmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBmb250U2l6ZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihmb250TmFtZTogc3RyaW5nID0gJ0FyaWFsJywgZm9udFNpemU6IG51bWJlciA9IDEyLCBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnKSB7XHJcbiAgICB0aGlzLmZvbnROYW1lID0gZm9udE5hbWU7XHJcbiAgICB0aGlzLmZvbnRTaXplID0gZm9udFNpemU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JhcGhpY3MvRm9udC50cyIsImltcG9ydCBQYXRoUG9pbnQgZnJvbSAnLi9QYXRoUG9pbnQnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuL1BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xyXG4gIHByaXZhdGUgX3BhdGg6IFBhdGg7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhdGg6IFBhdGggPSBbXSkge1xyXG4gICAgdGhpcy5fcGF0aCA9IHBhdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBhdGgoKTogUGF0aCB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX3BhdGhdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBwYXRoKHBhdGg6IFBhdGgpIHtcclxuICAgIHRoaXMuX3BhdGggPSBbLi4ucGF0aF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UG9pbnQoaW5kZXg6IG51bWJlcik6IFBhdGhQb2ludHxudWxsIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuX3BhdGgubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgdGhpcy5fcGF0aFtpbmRleF1bMF0sXHJcbiAgICAgICAgdGhpcy5fcGF0aFtpbmRleF1bMV1cclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQb2ludChpbmRleDogbnVtYmVyLCBwYXRoUG9pbnQ6IFBhdGhQb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGluZGV4IDwgdGhpcy5fcGF0aC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5fcGF0aFtpbmRleF0gPSBbXHJcbiAgICAgICAgcGF0aFBvaW50WzBdLFxyXG4gICAgICAgIHBhdGhQb2ludFsxXVxyXG4gICAgICBdO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFBvaW50KHBhdGhQb2ludDogUGF0aFBvaW50KSB7XHJcbiAgICB0aGlzLl9wYXRoLnB1c2gocGF0aFBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVQb2ludChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9wYXRoLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9wYXRoLnNsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9Nb2RlbC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcclxuICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gIHB1YmxpYyB5OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9Qb2ludC50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCwgRm9udCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZm9udDogRm9udDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgc3VwZXIobmFtZSwgcG9pbnQsIHZpc2libGUpO1xyXG5cclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuTEFCRUw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Rm9udChmb250OiBGb250KTogdm9pZCB7XHJcbiAgICB0aGlzLmZvbnQgPSBmb250O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9udC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvbnRDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvbnQuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvTGFiZWwudHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBwdWJsaWMgZmlsbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLlJFQ1RBTkdMRTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvUmVjdGFuZ2xlLnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50LCBNb2RlbCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBwdWJsaWMgZmlsbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLm1vZGVsID0gbmV3IE1vZGVsKCk7XHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLlNIQVBFO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9TaGFwZS50cyIsImltcG9ydCBLZXkgZnJvbSAnLi9LZXknO1xyXG5pbXBvcnQgS2V5Q29kZXMgZnJvbSAnLi9LZXlDb2Rlcyc7XHJcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4uL3JlbmRlcmluZyc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBLZXlib2FyZCB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2tleXM6IENvbGxlY3Rpb248S2V5PjtcclxuICBcclxuICBwdWJsaWMgc3RhdGljIF9pbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fa2V5cyA9IHt9O1xyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBLZXlDb2Rlcykge1xyXG4gICAgICB0aGlzLl9rZXlzW2tleV0gPSBuZXcgS2V5KDxLZXlDb2Rlcz5rZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIFNjcmVlbi5vbihbJ2tleWRvd24nXSwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKEtleUNvZGVzWzxhbnk+ZS5jb2RlXSAmJiB0aGlzLl9rZXlzW2UuY29kZV0uaXNVcCgpKSB7XHJcbiAgICAgICAgdGhpcy5fa2V5c1tlLmNvZGVdLl9zdGF0ZS5fc3dpdGNoKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFNjcmVlbi5vbihbJ2tleXVwJ10sIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChLZXlDb2Rlc1s8YW55PmUuY29kZV0gJiYgdGhpcy5fa2V5c1tlLmNvZGVdLmlzRG93bigpKSB7XHJcbiAgICAgICAgdGhpcy5fa2V5c1tlLmNvZGVdLl9zdGF0ZS5fc3dpdGNoKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFNjcmVlbi5vbihbJ2tleXByZXNzJ10sIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRLZXkoa2V5OiBLZXlDb2Rlcyk6IEtleSB7XHJcbiAgICByZXR1cm4gdGhpcy5fa2V5c1trZXldO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBrZXkoa2V5OiBLZXlDb2Rlcyk6IEtleSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXkoa2V5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNEb3duKGtleTogS2V5Q29kZXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9rZXlzW2tleV0uaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzVXAoa2V5OiBLZXlDb2Rlcyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2tleXNba2V5XS5pc1VwKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL0tleWJvYXJkLnRzIiwiaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3RpbWluZyc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vcm9vdCc7XHJcbmltcG9ydCB7XHJcbiAgR2FtZU9iamVjdCxcclxuICBHYW1lT2JqZWN0UmVzb2x2YWJsZSxcclxuICBHYW1lT2JqZWN0VHlwZXMsXHJcbiAgR3JvdXAsXHJcbiAgUmVjdGFuZ2xlLFxyXG4gIENpcmNsZSxcclxuICBTaGFwZSxcclxuICBMYWJlbCxcclxuICBJbWFnZVxyXG59IGZyb20gJy4uL2dhbWUtb2JqZWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwdWJsaWMgc2NlbmU6IFNjZW5lO1xyXG4gIHByaXZhdGUgYW5pbWF0aW9uRnJhbWU6IG51bWJlcjtcclxuICBwcml2YXRlIF91cGRhdGVzOiBGdW5jdGlvbltdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuICAgIHRoaXMuX3VwZGF0ZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hbmltYXRpb25GcmFtZSkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmcmFtZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoZnJhbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhdHRhY2hVcGRhdGUodXBkYXRlOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5fdXBkYXRlcy5wdXNoKHVwZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcihmcmFtZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBUaW1lLl9zZXRGcmFtZShmcmFtZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdGhpcy5fdXBkYXRlcykge1xyXG4gICAgICB1cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB0aGlzLnNjZW5lLnVwZGF0ZXMpIHtcclxuICAgICAgdXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNvbnRleHQuY2FudmFzLndpZHRoLCB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBnYW1lT2JqZWN0UmVzb2x2YWJsZU5hbWUgaW4gdGhpcy5zY2VuZS5nZXRBbGwoKSkge1xyXG4gICAgICBjb25zdCBnYW1lT2JqZWN0UmVzb2x2YWJsZSA9IDxHYW1lT2JqZWN0UmVzb2x2YWJsZT50aGlzLnNjZW5lLmdldChnYW1lT2JqZWN0UmVzb2x2YWJsZU5hbWUpO1xyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3RSZXNvbHZhYmxlIGluc3RhbmNlb2YgR3JvdXApIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGdhbWVPYmplY3ROYW1lIGluIHRoaXMuc2NlbmUuZ2V0QWxsKCkpIHtcclxuICAgICAgICAgIGNvbnN0IGdhbWVPYmplY3QgPSA8R2FtZU9iamVjdD5nYW1lT2JqZWN0UmVzb2x2YWJsZS5nZXQoZ2FtZU9iamVjdE5hbWUpO1xyXG5cclxuICAgICAgICAgIHRoaXMucmVuZGVyR2FtZU9iamVjdChnYW1lT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJHYW1lT2JqZWN0KGdhbWVPYmplY3RSZXNvbHZhYmxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZyYW1lOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXIoZnJhbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckdhbWVPYmplY3QoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IHZvaWQge1xyXG4gICAgZ2FtZU9iamVjdC51cGRhdGUoKTtcclxuXHJcbiAgICBpZiAoIWdhbWVPYmplY3QudmlzaWJsZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChnYW1lT2JqZWN0Lmhhc1JlbmRlckNvbnRleHRTZXR0aW5ncygpKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICAgIGdhbWVPYmplY3QucmVuZGVyQ29udGV4dFNldHRpbmdzKHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdhbWVPYmplY3Qucm90YXRpb24pIHtcclxuICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmNvbnRleHQuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShnYW1lT2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoLXRoaXMuY29udGV4dC5jYW52YXMud2lkdGggLyAyLCAtdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZU9iamVjdC5zY2FsZSAhPT0gMSkge1xyXG4gICAgICB0aGlzLmNvbnRleHQuc2NhbGUoZ2FtZU9iamVjdC5zY2FsZSwgZ2FtZU9iamVjdC5zY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBSZWN0YW5nbGUpIHtcclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0LmZpbGwpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoXHJcbiAgICAgICAgICBnYW1lT2JqZWN0LngsXHJcbiAgICAgICAgICBnYW1lT2JqZWN0LnksXHJcbiAgICAgICAgICBnYW1lT2JqZWN0LndpZHRoLFxyXG4gICAgICAgICAgZ2FtZU9iamVjdC5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICBnYW1lT2JqZWN0LngsXHJcbiAgICAgICAgICBnYW1lT2JqZWN0LnksXHJcbiAgICAgICAgICBnYW1lT2JqZWN0LndpZHRoLFxyXG4gICAgICAgICAgZ2FtZU9iamVjdC5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBDaXJjbGUpIHtcclxuICAgICAgaWYgKGdhbWVPYmplY3Quc2l6ZSA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmNvbnRleHQuYXJjKGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55LCBnYW1lT2JqZWN0LnNpemUgLyAyLCAwLCAyICogTWF0aC5QSSk7XHJcblxyXG4gICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgU2hhcGUpIHtcclxuICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmNvbnRleHQubW92ZVRvKGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55KTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgcGF0aFBvaW50IG9mIGdhbWVPYmplY3QubW9kZWwucGF0aCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocGF0aFBvaW50WzBdLCBwYXRoUG9pbnRbMV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgTGFiZWwpIHtcclxuICAgICAgdGhpcy5jb250ZXh0LmZvbnQgPSBgJHtnYW1lT2JqZWN0LmZvbnQuZm9udFNpemV9cHggJHtnYW1lT2JqZWN0LmZvbnQuZm9udE5hbWV9YDtcclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0LmZpbGwpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5mb250LmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChnYW1lT2JqZWN0LnRleHQsIGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmZvbnQuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVRleHQoZ2FtZU9iamVjdC50ZXh0LCBnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIEltYWdlKSB7XHJcbiAgICAgIGlmIChnYW1lT2JqZWN0LnJlYWR5KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShnYW1lT2JqZWN0LmltYWdlLCBnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZU9iamVjdC5zY2FsZSAhPT0gMSkge1xyXG4gICAgICB0aGlzLmNvbnRleHQuc2NhbGUoMSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdhbWVPYmplY3Qucm90YXRpb24pIHtcclxuICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZU9iamVjdC5oYXNSZW5kZXJDb250ZXh0U2V0dGluZ3MoKSkge1xyXG4gICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9SZW5kZXJlci50cyIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFRpbWUge1xyXG4gIHByaXZhdGUgc3RhdGljIF9kZWx0YVRpbWU6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfdGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9mcHM6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5pdCgpIHtcclxuICAgIHRoaXMuX2RlbHRhVGltZSA9IDA7XHJcbiAgICB0aGlzLl90aW1lID0gMDtcclxuICAgIHRoaXMuX2ZwcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX3NldEZyYW1lKGZyYW1lOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2RlbHRhVGltZSA9IGZyYW1lIC0gdGhpcy5fdGltZTtcclxuICAgIHRoaXMuX3RpbWUgPSBmcmFtZTtcclxuICAgIHRoaXMuX2ZwcyA9IE1hdGgucm91bmQoMTAwMCAvIHRoaXMuX2RlbHRhVGltZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBkZWx0YVRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWx0YVRpbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCB0aW1lKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGltZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGZwcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZwcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvVGltZS50cyIsImltcG9ydCBub3cgZnJvbSAnLi9ub3cnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZXIge1xyXG4gIHB1YmxpYyBzdGFydFRpbWU6IG51bWJlcjtcclxuICBwdWJsaWMgZW5kVGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgX3N0ZXBzOiBudW1iZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVuZFRpbWUgPSAwO1xyXG4gICAgdGhpcy5fc3RlcHMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLmVuZFRpbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXJ0VGltZSkge1xyXG4gICAgICByZXR1cm4gbm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzdGVwcygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX3N0ZXBzXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZW5kVGltZSA9IDA7XHJcbiAgICB0aGlzLl9zdGVwcyA9IFtdO1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSBub3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGVwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RhcnRUaW1lKSB7XHJcbiAgICAgIHRoaXMuX3N0ZXBzLnB1c2gobm93KCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVuZFRpbWUgPSBub3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGVwKGluZGV4OiBudW1iZXIpOiBudW1iZXJ8bnVsbCB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9zdGVwcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3N0ZXBzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTdGVwRHVyYXRpb24oaW5kZXg6IG51bWJlcik6IG51bWJlcnxudWxsIHtcclxuICAgIGNvbnN0IHN0ZXA6IG51bWJlcnxudWxsID0gdGhpcy5nZXRTdGVwKGluZGV4KTtcclxuXHJcbiAgICBpZiAoc3RlcCAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gc3RlcCAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0ZXBEdXJhdGlvbnMoKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3Qgc3RlcHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBzdGVwIG9mIHRoaXMuc3RlcHMpIHtcclxuICAgICAgc3RlcHMucHVzaChzdGVwIC0gdGhpcy5zdGFydFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGVwcztcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS90aW1pbmcvUHJvZmlsZXIudHMiLCJpbXBvcnQgeyBNb3VzZSwgS2V5Ym9hcmQgfSBmcm9tICcuLi9pbnB1dHMnO1xyXG5pbXBvcnQgeyBTY3JlZW4sIFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3RpbWluZyc7XHJcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgR2FtZS5cclxuICAgKiBAcGFyYW0gY2FudmFzIFRoZSBjYW52YXMgdG8gY3JlYXRlIHRoZSBnYW1lIGluLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcig8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPnRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykpO1xyXG4gICAgdGhpcy5fc2NlbmUgPSB0aGlzLnJlbmRlcmVyLnNjZW5lO1xyXG5cclxuICAgIFRpbWUuX2luaXQoKTtcclxuICAgIE1vdXNlLl9pbml0KCk7XHJcbiAgICBLZXlib2FyZC5faW5pdCgpO1xyXG4gICAgU2NyZWVuLl9pbml0KHRoaXMuY2FudmFzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2NlbmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2NlbmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2NlbmUoc2NlbmU6IFNjZW5lKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNjZW5lID0gc2NlbmU7XHJcbiAgICB0aGlzLl9zY2VuZSA9IHNjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKHVwZGF0ZTogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuc2NlbmUuYXR0YWNoVXBkYXRlKHVwZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2xvYmFsVXBkYXRlKHVwZGF0ZTogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYXR0YWNoVXBkYXRlKHVwZGF0ZSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcm9vdC9HYW1lLnRzIiwiaW1wb3J0IHsgR2FtZU9iamVjdFJlc29sdmFibGUgfSBmcm9tICcuLi9nYW1lLW9iamVjdHMnO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xyXG4gIHByaXZhdGUgX2dhbWVPYmplY3RzOiBDb2xsZWN0aW9uPEdhbWVPYmplY3RSZXNvbHZhYmxlPjtcclxuICBwcml2YXRlIF91cGRhdGVzOiBGdW5jdGlvbltdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2dhbWVPYmplY3RzID0ge307XHJcbiAgICB0aGlzLl91cGRhdGVzID0gW107XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBnZXQgdXBkYXRlcygpOiBGdW5jdGlvbltdIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5fdXBkYXRlc107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKGdhbWVPYmplY3Q6IEdhbWVPYmplY3RSZXNvbHZhYmxlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb250YWlucyhnYW1lT2JqZWN0Lm5hbWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdC5uYW1lXSA9IGdhbWVPYmplY3Q7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKGdhbWVPYmplY3ROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5jb250YWlucyhnYW1lT2JqZWN0TmFtZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBkZWxldGUgdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdE5hbWVdO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgZ2V0KGdhbWVPYmplY3ROYW1lOiBzdHJpbmcpOiBHYW1lT2JqZWN0UmVzb2x2YWJsZXxudWxsIHtcclxuICAgIGlmICghdGhpcy5jb250YWlucyhnYW1lT2JqZWN0TmFtZSkpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0c1tnYW1lT2JqZWN0TmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QWxsKCk6IENvbGxlY3Rpb248R2FtZU9iamVjdFJlc29sdmFibGU+IHtcclxuICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb250YWlucyhnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHMuaGFzT3duUHJvcGVydHkoZ2FtZU9iamVjdE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZ2FtZU9iamVjdHMgPSB7fTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgYXR0YWNoVXBkYXRlKHVwZGF0ZTogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuX3VwZGF0ZXMucHVzaCh1cGRhdGUpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Jvb3QvU2NlbmUudHMiLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBTY3JlZW4ge1xyXG4gIHByaXZhdGUgc3RhdGljIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgc3RhdGljIF93aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9oZWlnaHQ6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfb25SZXNpemU6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIFxyXG4gICAgdGhpcy5fb25SZXNpemUgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7fTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICB0aGlzLl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuX29uUmVzaXplKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb24oZXZlbnROYW1lczogc3RyaW5nW10sIGV2ZW50SGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudEhhbmRsZXIoZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBvblJlc2l6ZShoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5fb25SZXNpemUgPSA8KGV2ZW50OiBFdmVudCkgPT4gdm9pZD5oYW5kbGVyO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIE1vdXNlIHtcclxuICBwcml2YXRlIHN0YXRpYyBfY3Vyc29yOiBQb2ludDtcclxuICBwcml2YXRlIHN0YXRpYyBfbGVmdENsaWNrOiBJbnB1dFN0YXRlO1xyXG4gIHByaXZhdGUgc3RhdGljIF9taWRkbGVDbGljazogSW5wdXRTdGF0ZTtcclxuICBwcml2YXRlIHN0YXRpYyBfcmlnaHRDbGljazogSW5wdXRTdGF0ZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2N1cnNvciA9IG5ldyBQb2ludChTY3JlZW4ud2lkdGggLyAyLCBTY3JlZW4uaGVpZ2h0IC8gMik7XHJcbiAgICB0aGlzLl9sZWZ0Q2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5fbWlkZGxlQ2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5fcmlnaHRDbGljayA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBjdXJzb3IoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnNvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGN1cnNvclgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnNvci54O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgY3Vyc29yWSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3Vyc29yLnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBidXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0aGlzLmxlZnRCdXR0b25Eb3duIHx8IHRoaXMubWlkZGxlQnV0dG9uRG93biB8fCB0aGlzLnJpZ2h0QnV0dG9uRG93bik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBsZWZ0QnV0dG9uRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sZWZ0Q2xpY2suaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBtaWRkbGVCdXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pZGRsZUNsaWNrLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgcmlnaHRCdXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0Q2xpY2suaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBsZWZ0QnV0dG9uVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGVmdENsaWNrLmlzVXAoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG1pZGRsZUJ1dHRvblVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pZGRsZUNsaWNrLmlzVXAoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHJpZ2h0QnV0dG9uVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmlnaHRDbGljay5pc1VwKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbml0RXZlbnRzKCk6IHZvaWQge1xyXG4gICAgU2NyZWVuLm9uKFsnbW91c2Vtb3ZlJ10sIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2N1cnNvci54ID0gZS5jbGllbnRYO1xyXG4gICAgICB0aGlzLl9jdXJzb3IueSA9IGUuY2xpZW50WTtcclxuICAgIH0pO1xyXG5cclxuICAgIFNjcmVlbi5vbihbJ21vdXNlZG93bicsICdtb3VzZXVwJ10sIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHN3aXRjaChlLmJ1dHRvbikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHRoaXMuX2xlZnRDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLl9taWRkbGVDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICB0aGlzLl9yaWdodENsaWNrLl9zd2l0Y2goKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JlZW4ub24oWydjb250ZXh0bWVudSddLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9Nb3VzZS50cyIsImltcG9ydCB7IE1vdXNlLCBDaXJjbGUsIFNjZW5lIH0gZnJvbSAnLi4vZW5naW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XHJcbiAgcHVibGljIGVsZW1lbnQ6IENpcmNsZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgQ2lyY2xlKCdjdXJzb3InKTtcclxuICAgIHRoaXMuZWxlbWVudC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZWxlbWVudC5maWxsID0gdHJ1ZTtcclxuICAgIHRoaXMuZWxlbWVudC5jb2xvciA9ICcjRkYwMDAwJztcclxuICAgIHRoaXMuZWxlbWVudC5zaXplID0gMzA7XHJcblxyXG4gICAgc2NlbmUuYWRkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50LnggPSBNb3VzZS5jdXJzb3JYO1xyXG4gICAgdGhpcy5lbGVtZW50LnkgPSBNb3VzZS5jdXJzb3JZO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFscy9DdXJzb3IudHMiLCJpbXBvcnQgeyBSZWN0YW5nbGUsIExhYmVsLCBTY2VuZSwgRm9udCwgU2NyZWVuLCBQb2ludCwgS2V5Ym9hcmQsIEtleUNvZGVzIH0gZnJvbSAnLi4vZW5naW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpdEtleXMge1xyXG4gIHB1YmxpYyBxRWxlbWVudDogUmVjdGFuZ2xlO1xyXG4gIHB1YmxpYyBxTGFiZWw6IExhYmVsO1xyXG4gIHB1YmxpYyB3RWxlbWVudDogUmVjdGFuZ2xlO1xyXG4gIHB1YmxpYyB3TGFiZWw6IExhYmVsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUpIHtcclxuICAgIHRoaXMucUVsZW1lbnQgPSBuZXcgUmVjdGFuZ2xlKCdxcmVjdGFuZ2xlJyk7XHJcbiAgICB0aGlzLnFFbGVtZW50LnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5xRWxlbWVudC5maWxsID0gdHJ1ZTtcclxuICAgIHRoaXMucUVsZW1lbnQuY29sb3IgPSAnI0NDRERDQyc7XHJcbiAgICB0aGlzLnFFbGVtZW50LndpZHRoID0gNjA7XHJcbiAgICB0aGlzLnFFbGVtZW50LmhlaWdodCA9IDYwO1xyXG4gICAgdGhpcy5xTGFiZWwgPSBuZXcgTGFiZWwoJ3FsYWJlbCcpO1xyXG4gICAgdGhpcy5xTGFiZWwudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLnFMYWJlbC50ZXh0ID0gJ1EnO1xyXG4gICAgdGhpcy5xTGFiZWwuZmlsbCA9IHRydWU7XHJcbiAgICB0aGlzLnFMYWJlbC5zZXRGb250KG5ldyBGb250KCdBcmlhbCcsIDE2LCAnIzAwMDAwMCcpKTtcclxuXHJcbiAgICB0aGlzLndFbGVtZW50ID0gbmV3IFJlY3RhbmdsZSgnd3JlY3RhbmdsZScpO1xyXG4gICAgdGhpcy53RWxlbWVudC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMud0VsZW1lbnQuZmlsbCA9IHRydWU7XHJcbiAgICB0aGlzLndFbGVtZW50LmNvbG9yID0gJyNDQ0REQ0MnO1xyXG4gICAgdGhpcy53RWxlbWVudC53aWR0aCA9IDYwO1xyXG4gICAgdGhpcy53RWxlbWVudC5oZWlnaHQgPSA2MDtcclxuICAgIHRoaXMud0xhYmVsID0gbmV3IExhYmVsKCd3bGFiZWwnKTtcclxuICAgIHRoaXMud0xhYmVsLnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy53TGFiZWwudGV4dCA9ICdXJztcclxuICAgIHRoaXMud0xhYmVsLmZpbGwgPSB0cnVlO1xyXG4gICAgdGhpcy53TGFiZWwuc2V0Rm9udChuZXcgRm9udCgnQXJpYWwnLCAxNiwgJyMwMDAwMDAnKSk7XHJcblxyXG4gICAgdGhpcy5xRWxlbWVudC5zZXRQb2ludChuZXcgUG9pbnQoMjAsIFNjcmVlbi5oZWlnaHQgLSA4MCkpO1xyXG4gICAgdGhpcy5xTGFiZWwuc2V0UG9pbnQobmV3IFBvaW50KDYwLCBTY3JlZW4uaGVpZ2h0IC0gMzApKTtcclxuXHJcbiAgICB0aGlzLndFbGVtZW50LnNldFBvaW50KG5ldyBQb2ludCgxMDAsIFNjcmVlbi5oZWlnaHQgLSA4MCkpO1xyXG4gICAgdGhpcy53TGFiZWwuc2V0UG9pbnQobmV3IFBvaW50KDE0MCwgU2NyZWVuLmhlaWdodCAtIDMwKSk7XHJcblxyXG4gICAgc2NlbmUuYWRkKHRoaXMucUVsZW1lbnQpO1xyXG4gICAgc2NlbmUuYWRkKHRoaXMucUxhYmVsKTtcclxuICAgIHNjZW5lLmFkZCh0aGlzLndFbGVtZW50KTtcclxuICAgIHNjZW5lLmFkZCh0aGlzLndMYWJlbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKEtleWJvYXJkLmtleShLZXlDb2Rlcy5LZXlRKS5pc0Rvd24oKSkge1xyXG4gICAgICB0aGlzLnFFbGVtZW50LmNvbG9yID0gJyMxMTMzMTEnO1xyXG4gICAgICB0aGlzLnFMYWJlbC5zZXRGb250Q29sb3IoJyNGRkZGRkYnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucUVsZW1lbnQuY29sb3IgPSAnI0NDRERDQyc7XHJcbiAgICAgIHRoaXMucUxhYmVsLnNldEZvbnRDb2xvcignIzAwMDAwMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChLZXlib2FyZC5rZXkoS2V5Q29kZXMuS2V5VykuaXNEb3duKCkpIHtcclxuICAgICAgdGhpcy53RWxlbWVudC5jb2xvciA9ICcjMTEzMzExJztcclxuICAgICAgdGhpcy53TGFiZWwuc2V0Rm9udENvbG9yKCcjRkZGRkZGJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndFbGVtZW50LmNvbG9yID0gJyNDQ0REQ0MnO1xyXG4gICAgICB0aGlzLndMYWJlbC5zZXRGb250Q29sb3IoJyMwMDAwMDAnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbHMvSGl0S2V5cy50cyIsImltcG9ydCB7IENpcmNsZSwgU2NlbmUsIFBvaW50LCBTY3JlZW4sIEtleWJvYXJkLCBNb3VzZSwgS2V5Q29kZXMsIENvbGxpc2lvbiB9IGZyb20gJy4uL2VuZ2luZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaXRDaXJjbGUge1xyXG4gIHB1YmxpYyBib3JkZXI6IENpcmNsZTtcclxuICBwdWJsaWMgZWxlbWVudDogQ2lyY2xlO1xyXG4gIHB1YmxpYyBoaXQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSkge1xyXG4gICAgdGhpcy5oaXQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmJvcmRlciA9IG5ldyBDaXJjbGUoJ2hpdCBjaXJjbGUgYm9yZGVyJyk7XHJcbiAgICB0aGlzLmJvcmRlci5zZXRQb2ludChuZXcgUG9pbnQoTWF0aC5yYW5kb20oKSAqIFNjcmVlbi53aWR0aCwgTWF0aC5yYW5kb20oKSAqIFNjcmVlbi5oZWlnaHQpKTtcclxuICAgIHRoaXMuYm9yZGVyLmNvbG9yID0gJyNGRkZGRkYnO1xyXG4gICAgdGhpcy5ib3JkZXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmJvcmRlci5zaXplID0gODQ7XHJcbiAgICBcclxuICAgIHRoaXMuZWxlbWVudCA9IG5ldyBDaXJjbGUoJ2hpdCBjaXJjbGUnKTtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRQb2ludChuZXcgUG9pbnQodGhpcy5ib3JkZXIueCwgdGhpcy5ib3JkZXIueSkpO1xyXG4gICAgdGhpcy5lbGVtZW50LmNvbG9yID0gJyMwMTMzREQnO1xyXG4gICAgdGhpcy5lbGVtZW50LnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5lbGVtZW50LnNpemUgPSA4MDtcclxuXHJcbiAgICBzY2VuZS5hZGQodGhpcy5ib3JkZXIpO1xyXG4gICAgc2NlbmUuYWRkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGl0KSB7XHJcbiAgICAgIGlmIChLZXlib2FyZC5rZXkoS2V5Q29kZXMuS2V5USkuaXNVcCgpICYmIEtleWJvYXJkLmtleShLZXlDb2Rlcy5LZXlXKS5pc1VwKCkpIHtcclxuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEtleWJvYXJkLmtleShLZXlDb2Rlcy5LZXlRKS5pc0Rvd24oKSB8fCBLZXlib2FyZC5rZXkoS2V5Q29kZXMuS2V5VykuaXNEb3duKCkpIHtcclxuICAgICAgaWYgKCF0aGlzLmhpdCAmJlxyXG4gICAgICAgIENvbGxpc2lvbi5jaXJjbGVDb2xsaWRlKHRoaXMuZWxlbWVudCwgbmV3IENpcmNsZSgnJywgTW91c2UuY3Vyc29yKSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgUG9pbnQoTWF0aC5yYW5kb20oKSAqIFNjcmVlbi53aWR0aCwgTWF0aC5yYW5kb20oKSAqIFNjcmVlbi5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyLnNldFBvaW50KHBvaW50KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0UG9pbnQocG9pbnQpO1xyXG4gICAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFscy9IaXRDaXJjbGUudHMiLCJpbXBvcnQgeyBMYWJlbCwgUG9pbnQsIFNjZW5lLCBUaW1lLCBGb250IH0gZnJvbSAnLi4vZW5naW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZQU0NvdW50ZXIge1xyXG4gIHB1YmxpYyBlbGVtZW50OiBMYWJlbDtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgTGFiZWwoJ2ZwcyBjb3VudGVyJyk7XHJcbiAgICB0aGlzLmVsZW1lbnQudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0Rm9udChuZXcgRm9udCgnQXJpYWwnLCAxMiwgJyNGRkZGRkYnKSk7XHJcbiAgICB0aGlzLmVsZW1lbnQudGV4dCA9ICdGUFM6IDAnO1xyXG4gICAgdGhpcy5lbGVtZW50LnNldFBvaW50KG5ldyBQb2ludCgxNSwgMTUpKTtcclxuXHJcbiAgICBzY2VuZS5hZGQodGhpcy5lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnQudGV4dCA9IGBGUFM6ICR7VGltZS5mcHN9YDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc3VhbHMvRlBTQ291bnRlci50cyIsImltcG9ydCBDb2xsaXNpb24gZnJvbSAnLi9Db2xsaXNpb24nO1xyXG5cclxuZXhwb3J0IHtcclxuICBDb2xsaXNpb25cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9waHlzaWNzL2luZGV4LnRzIiwiaW1wb3J0IHsgUmVjdGFuZ2xlLCBDaXJjbGUsIEdhbWVPYmplY3QgfSBmcm9tICcuLi9nYW1lLW9iamVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29sbGlzaW9uIHtcclxuICBwdWJsaWMgc3RhdGljIGJveENvbGxpZGUoZWxlbWVudDE6IFJlY3RhbmdsZSwgZWxlbWVudDI6IFJlY3RhbmdsZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgZWxlbWVudDEueCA8IGVsZW1lbnQyLnggKyBlbGVtZW50Mi53aWR0aCAmJlxyXG4gICAgICBlbGVtZW50MS54ICsgZWxlbWVudDEud2lkdGggPiBlbGVtZW50Mi54ICYmXHJcbiAgICAgIGVsZW1lbnQxLnkgPCBlbGVtZW50Mi55ICsgZWxlbWVudDIuaGVpZ2h0ICYmXHJcbiAgICAgIGVsZW1lbnQxLmhlaWdodCArIGVsZW1lbnQxLnkgPiBlbGVtZW50Mi55XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjaXJjbGVDb2xsaWRlKGVsZW1lbnQxOiBDaXJjbGUsIGVsZW1lbnQyOiBDaXJjbGUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGR4OiBudW1iZXIgPSBlbGVtZW50MS54IC0gZWxlbWVudDIueDtcclxuICAgIGNvbnN0IGR5OiBudW1iZXIgPSBlbGVtZW50MS55IC0gZWxlbWVudDIueTtcclxuICAgIGNvbnN0IGQ6IG51bWJlciA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgZCA8IGVsZW1lbnQxLnNpemUgLyAyICsgZWxlbWVudDIuc2l6ZSAvIDJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNvbGxpZGUoZWxlbWVudDE6IFJlY3RhbmdsZXxDaXJjbGUsIGVsZW1lbnQyOiBSZWN0YW5nbGV8Q2lyY2xlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZWxlbWVudDEgaW5zdGFuY2VvZiBDaXJjbGUgJiYgZWxlbWVudDIgaW5zdGFuY2VvZiBDaXJjbGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlQ29sbGlkZShlbGVtZW50MSwgZWxlbWVudDIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHcxOiBudW1iZXI7XHJcbiAgICAgIGxldCBoMTogbnVtYmVyO1xyXG4gICAgICBsZXQgdzI6IG51bWJlcjtcclxuICAgICAgbGV0IGgyOiBudW1iZXI7XHJcblxyXG4gICAgICBpZiAoZWxlbWVudDEgaW5zdGFuY2VvZiBDaXJjbGUpIHtcclxuICAgICAgICB3MSA9IGVsZW1lbnQxLnNpemU7XHJcbiAgICAgICAgaDEgPSBlbGVtZW50MS5zaXplO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHcxID0gZWxlbWVudDEud2lkdGg7XHJcbiAgICAgICAgaDEgPSBlbGVtZW50MS5oZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbGVtZW50MiBpbnN0YW5jZW9mIENpcmNsZSkge1xyXG4gICAgICAgIHcyID0gZWxlbWVudDIuc2l6ZTtcclxuICAgICAgICBoMiA9IGVsZW1lbnQyLnNpemU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdzIgPSBlbGVtZW50Mi53aWR0aDtcclxuICAgICAgICBoMiA9IGVsZW1lbnQyLmhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYm94Q29sbGlkZShcclxuICAgICAgICA8UmVjdGFuZ2xlPnt4OiBlbGVtZW50MS54LCB5OiBlbGVtZW50MS55LCB3aWR0aDogdzEsIGhlaWdodDogaDF9LFxyXG4gICAgICAgIDxSZWN0YW5nbGU+e3g6IGVsZW1lbnQyLngsIHk6IGVsZW1lbnQyLnksIHdpZHRoOiB3MiwgaGVpZ2h0OiBoMn1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9waHlzaWNzL0NvbGxpc2lvbi50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHJvdGVjdGVkIF9yZWFkeTogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX1VSTDogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBfaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLl9yZWFkeSA9IGZhbHNlO1xyXG4gICAgdGhpcy5faW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICB0aGlzLl9pbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZWFkeSA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLklNQUdFO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByZWFkeSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9yZWFkeTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgVVJMKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX1VSTDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgVVJMKFVSTDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9yZWFkeSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fVVJMID0gVVJMO1xyXG4gICAgdGhpcy5faW1hZ2Uuc3JjID0gdGhpcy5fVVJMO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpbWFnZSgpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLl9pbWFnZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRVUkwoVVJMOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuVVJMID0gVVJMO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9JbWFnZS50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX2dhbWVPYmplY3RzOiBDb2xsZWN0aW9uPEdhbWVPYmplY3Q+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX2dhbWVPYmplY3RzID0ge307XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLl9nYW1lT2JqZWN0c1tnYW1lT2JqZWN0Lm5hbWVdICE9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgIFxyXG4gICAgdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdC5uYW1lXSA9IGdhbWVPYmplY3Q7XHJcbiAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldChnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogR2FtZU9iamVjdHxudWxsIHtcclxuICAgIGlmICh0aGlzLl9nYW1lT2JqZWN0c1tnYW1lT2JqZWN0TmFtZV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBbGwoKTogQ29sbGVjdGlvbjxHYW1lT2JqZWN0PiB7XHJcbiAgICByZXR1cm4gey4uLnRoaXMuX2dhbWVPYmplY3RzfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoZ2FtZU9iamVjdE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZGVsZXRlIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR3JvdXAudHMiXSwic291cmNlUm9vdCI6IiJ9