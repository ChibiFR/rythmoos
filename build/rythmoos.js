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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Font_1 = __webpack_require__(17);
exports.Font = Font_1.default;
var Model_1 = __webpack_require__(18);
exports.Model = Model_1.default;
var Point_1 = __webpack_require__(19);
exports.Point = Point_1.default;
var TextMeasure_1 = __webpack_require__(20);
exports.TextMeasure = TextMeasure_1.default;


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphics_1 = __webpack_require__(0);
var physics_1 = __webpack_require__(5);
var GameObjectTypes_1 = __webpack_require__(1);
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
        this._rotationCenter = physics_1.RotationCenters.SELF;
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
    Object.defineProperty(GameObject.prototype, "center", {
        get: function () {
            return new graphics_1.Point(this._point.x, this._point.y);
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
    Object.defineProperty(GameObject.prototype, "rotationCenter", {
        get: function () {
            return this._rotationCenter;
        },
        set: function (rotationCenter) {
            this._rotationCenter = rotationCenter;
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
    GameObject.prototype.rotate = function (degrees, center) {
        this._rotation = degrees;
        this.rotationCenter = center !== undefined ? center : physics_1.RotationCenters.SELF;
    };
    GameObject.prototype.setScale = function (scale) {
        this._scale = scale;
    };
    return GameObject;
}());
exports.default = GameObject;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Renderer_1 = __webpack_require__(29);
exports.Renderer = Renderer_1.default;
var Screen_1 = __webpack_require__(13);
exports.Screen = Screen_1.default;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = __webpack_require__(16);
exports.Circle = Circle_1.default;
var GameObject_1 = __webpack_require__(2);
exports.GameObject = GameObject_1.default;
var GameObjectTypes_1 = __webpack_require__(1);
exports.GameObjectTypes = GameObjectTypes_1.default;
var Group_1 = __webpack_require__(23);
exports.Group = Group_1.default;
var Image_1 = __webpack_require__(24);
exports.Image = Image_1.default;
var Label_1 = __webpack_require__(25);
exports.Label = Label_1.default;
var Rectangle_1 = __webpack_require__(26);
exports.Rectangle = Rectangle_1.default;
var Shape_1 = __webpack_require__(27);
exports.Shape = Shape_1.default;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Collision_1 = __webpack_require__(21);
exports.Collision = Collision_1.default;
var RotationCenters_1 = __webpack_require__(22);
exports.RotationCenters = RotationCenters_1.default;


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
var Time_1 = __webpack_require__(30);
exports.Time = Time_1.default;
var now_1 = __webpack_require__(11);
exports.now = now_1.default;
var Profiler_1 = __webpack_require__(31);
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
var Keyboard_1 = __webpack_require__(28);
exports.Keyboard = Keyboard_1.default;
var Keys_1 = __webpack_require__(10);
exports.Keys = Keys_1.default;
var Mouse_1 = __webpack_require__(34);
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
var Keys;
(function (Keys) {
    Keys["Digit0"] = "Digit0";
    Keys["Digit1"] = "Digit1";
    Keys["Digit2"] = "Digit2";
    Keys["Digit3"] = "Digit3";
    Keys["Digit4"] = "Digit4";
    Keys["Digit5"] = "Digit5";
    Keys["Digit6"] = "Digit6";
    Keys["Digit7"] = "Digit7";
    Keys["Digit8"] = "Digit8";
    Keys["Digit9"] = "Digit9";
    Keys["KeyA"] = "KeyA";
    Keys["KeyB"] = "KeyB";
    Keys["KeyC"] = "KeyC";
    Keys["KeyD"] = "KeyD";
    Keys["KeyE"] = "KeyE";
    Keys["KeyF"] = "KeyF";
    Keys["KeyG"] = "KeyG";
    Keys["KeyH"] = "KeyH";
    Keys["KeyI"] = "KeyI";
    Keys["KeyJ"] = "KeyJ";
    Keys["KeyK"] = "KeyK";
    Keys["KeyL"] = "KeyL";
    Keys["KeyM"] = "KeyM";
    Keys["KeyN"] = "KeyN";
    Keys["KeyO"] = "KeyO";
    Keys["KeyP"] = "KeyP";
    Keys["KeyQ"] = "KeyQ";
    Keys["KeyR"] = "KeyR";
    Keys["KeyS"] = "KeyS";
    Keys["KeyT"] = "KeyT";
    Keys["KeyU"] = "KeyU";
    Keys["KeyV"] = "KeyV";
    Keys["KeyW"] = "KeyW";
    Keys["KeyX"] = "KeyX";
    Keys["KeyY"] = "KeyY";
    Keys["KeyZ"] = "KeyZ";
    Keys["Escape"] = "Escape";
    Keys["F1"] = "F1";
    Keys["F2"] = "F2";
    Keys["F3"] = "F3";
    Keys["F4"] = "F4";
    Keys["F5"] = "F5";
    Keys["F6"] = "F6";
    Keys["F7"] = "F7";
    Keys["F8"] = "F8";
    Keys["F9"] = "F9";
    Keys["F10"] = "F10";
    Keys["F11"] = "F11";
    Keys["F12"] = "F12";
    Keys["Insert"] = "Insert";
    Keys["Delete"] = "Delete";
    Keys["Home"] = "Home";
    Keys["End"] = "End";
    Keys["PageUp"] = "PageUp";
    Keys["PageDown"] = "PageDown";
    Keys["NumLock"] = "NumLock";
    Keys["NumpadDivide"] = "NumpadDivide";
    Keys["NumpadMultiply"] = "NumpadMultiply";
    Keys["NumpadSubtract"] = "NumpadSubtract";
    Keys["NumpadAdd"] = "NumpadAdd";
    Keys["NumpadEnter"] = "NumpadEnter";
    Keys["NumpadDecimal"] = "NumpadDecimal";
    Keys["Numpad0"] = "Numpad0";
    Keys["Numpad1"] = "Numpad1";
    Keys["Numpad2"] = "Numpad2";
    Keys["Numpad3"] = "Numpad3";
    Keys["Numpad4"] = "Numpad4";
    Keys["Numpad5"] = "Numpad5";
    Keys["Numpad6"] = "Numpad6";
    Keys["Numpad7"] = "Numpad7";
    Keys["Numpad8"] = "Numpad8";
    Keys["Numpad9"] = "Numpad9";
    Keys["ArrowUp"] = "ArrowUp";
    Keys["ArrowDown"] = "ArrowDown";
    Keys["ArrowLeft"] = "ArrowLeft";
    Keys["ArrowRight"] = "ArrowRight";
    Keys["Backquote"] = "Backquote";
    Keys["Minus"] = "Minus";
    Keys["Equal"] = "Equal";
    Keys["Backspace"] = "Backspace";
    Keys["BracketLeft"] = "BracketLeft";
    Keys["BracketRight"] = "BracketRight";
    Keys["Quote"] = "Quote";
    Keys["Backslash"] = "Backslash";
    Keys["Comma"] = "Comma";
    Keys["Period"] = "Period";
    Keys["Slash"] = "Slash";
    Keys["Enter"] = "Enter";
    Keys["ShiftLeft"] = "ShiftLeft";
    Keys["ShiftRight"] = "ShiftRight";
    Keys["CapsLock"] = "CapsLock";
    Keys["Tab"] = "Tab";
    Keys["ControlLeft"] = "ControlLeft";
    Keys["ControlRight"] = "ControlRight";
    Keys["MetaLeft"] = "MetaLeft";
    Keys["MetaRight"] = "MetaRight";
    Keys["AltLeft"] = "AltLeft";
    Keys["AltRight"] = "AltRight";
})(Keys || (Keys = {}));
;
exports.default = Keys;


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
var Game_1 = __webpack_require__(32);
exports.Game = Game_1.default;
var Scene_1 = __webpack_require__(33);
exports.Scene = Scene_1.default;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphics_1 = __webpack_require__(0);
var Screen = /** @class */ (function () {
    function Screen() {
    }
    Screen._init = function (canvas) {
        var _this = this;
        this._canvas = canvas;
        this._width = window.innerWidth;
        this._height = window.innerHeight;
        this._center = new graphics_1.Point(this.width / 2, this.height / 2);
        this._onResize = function (event) { };
        window.addEventListener('resize', function (event) {
            _this._width = window.innerWidth;
            _this._height = window.innerHeight;
            _this._canvas.width = _this.width;
            _this._canvas.height = _this.height;
            _this._center.x = _this.width / 2;
            _this._center.y = _this.height / 2;
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
    Object.defineProperty(Screen, "center", {
        get: function () {
            return this._center;
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(15);
var g = new engine_1.Game();
var s = new engine_1.Scene();
g.setScene(s);
var circleGroup = new engine_1.Group('group');
var bigCircle = new engine_1.Circle('big circle');
var littleCircle = new engine_1.Circle('small circle');
var cursor = new engine_1.Circle('cursor');
var fpsCounter = new engine_1.Label('fps counter');
var text = new engine_1.Label('text');
var audio = new Audio();
var audioData = new Uint8Array(1024);
var av = 0;
cursor.visible = true;
cursor.fill = true;
cursor.color = '#dd1860';
cursor.size = 30;
cursor.setPoint(engine_1.Mouse.cursor);
cursor.renderContextSettings = function (context) {
    context.shadowColor = '#FFFFFF';
    context.shadowBlur = 15;
};
fpsCounter.visible = true;
fpsCounter.font.color = '#000000';
fpsCounter.font.fontSize = 14;
fpsCounter.setPoint(new engine_1.Point(15, 20));
circleGroup.add(bigCircle);
circleGroup.add(littleCircle);
circleGroup.add(text);
bigCircle.visible = true;
bigCircle.color = '#f993d4';
bigCircle.size = engine_1.Screen.height / 2.2;
bigCircle.setPoint(engine_1.Screen.center);
littleCircle.visible = true;
littleCircle.color = 'rgba(249, 147, 212, 0.3)';
littleCircle.size = engine_1.Screen.height / 1.8;
littleCircle.setPoint(engine_1.Screen.center);
text.visible = true;
text.text = 'Rythmoos';
text.setFont(new engine_1.Font('Arial', engine_1.Screen.height * 0.07, '#FFFFFF'));
text.setPoint(new engine_1.Point(engine_1.Screen.width / 2 - engine_1.TextMeasure.measureText(text.text, text.font) / 2, engine_1.Screen.height / 2 + text.font.fontSize / 4));
text.renderContextSettings = function (context) {
    context.shadowColor = 'black';
    context.shadowBlur = engine_1.Screen.height * 0.02;
};
s.add(circleGroup);
s.add(fpsCounter);
s.add(cursor);
var audioContext = new AudioContext();
var source = audioContext.createMediaElementSource(audio);
var audioAnalyser = audioContext.createAnalyser();
audioAnalyser.fftSize = 1024;
source.connect(audioAnalyser);
// audioAnalyser.connect(audioContext.destination);
g.update(function () {
    audioAnalyser.getByteFrequencyData(audioData);
    av = 0;
    audioData.forEach(function (val) {
        av += val;
    });
    av /= 1024;
    bigCircle.size = (engine_1.Screen.height / 2.2) + (av / 0.7);
    littleCircle.size = (engine_1.Screen.height / 1.8) + (av / 0.7);
    fpsCounter.text = "FPS: " + engine_1.Time.fps;
    if (engine_1.Keyboard.key(engine_1.Keys.ControlLeft).isDown() && engine_1.Keyboard.key(engine_1.Keys.KeyR).isDown()) {
        window.location.reload(true);
    }
});
audio.src = 'audio.mp3';
audio.loop = true;
audio.autoplay = true;
g.start();


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(0));
__export(__webpack_require__(8));
__export(__webpack_require__(5));
__export(__webpack_require__(3));
__export(__webpack_require__(12));
__export(__webpack_require__(7));


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
var GameObject_1 = __webpack_require__(2);
var GameObjectTypes_1 = __webpack_require__(1);
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TextMeasure = /** @class */ (function () {
    function TextMeasure() {
    }
    TextMeasure._init = function () {
        this.context = document.createElement('canvas').getContext('2d');
    };
    TextMeasure.measureText = function (text, font) {
        this.context.font = font.fontSize + "px " + font.fontName;
        return this.context.measureText(text).width;
    };
    return TextMeasure;
}());
exports.default = TextMeasure;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var game_objects_1 = __webpack_require__(4);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RotationCenters;
(function (RotationCenters) {
    RotationCenters[RotationCenters["SELF"] = 0] = "SELF";
    RotationCenters[RotationCenters["WORLD"] = 1] = "WORLD";
})(RotationCenters || (RotationCenters = {}));
;
exports.default = RotationCenters;


/***/ }),
/* 23 */
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


/***/ }),
/* 24 */
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
var GameObjectTypes_1 = __webpack_require__(1);
var graphics_1 = __webpack_require__(0);
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
    Object.defineProperty(Image.prototype, "center", {
        get: function () {
            var centerX;
            var centerY;
            if (this.image.width === 0) {
                centerX = this.x;
            }
            else {
                centerX = this.x + this.image.width / 2;
            }
            if (this.image.height === 0) {
                centerY = this.y;
            }
            else {
                centerY = this.y + this.image.height / 2;
            }
            return new graphics_1.Point(centerX, centerY);
        },
        enumerable: true,
        configurable: true
    });
    return Image;
}(GameObject_1.default));
exports.default = Image;


/***/ }),
/* 25 */
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
var GameObjectTypes_1 = __webpack_require__(1);
var graphics_1 = __webpack_require__(0);
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(name, point, visible) {
        var _this = _super.call(this, name, point, visible) || this;
        _this.text = '';
        _this.fill = true;
        _this._type = GameObjectTypes_1.default.LABEL;
        _this.font = new graphics_1.Font();
        return _this;
    }
    Object.defineProperty(Label.prototype, "center", {
        get: function () {
            var centerX = graphics_1.TextMeasure.measureText(this.text, this.font);
            if (centerX === 0) {
                centerX = this.point.x;
            }
            else {
                centerX = this.point.x + centerX / 2;
            }
            return new graphics_1.Point(centerX, this.point.y);
        },
        enumerable: true,
        configurable: true
    });
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
/* 26 */
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
var GameObjectTypes_1 = __webpack_require__(1);
var graphics_1 = __webpack_require__(0);
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
    Object.defineProperty(Rectangle.prototype, "center", {
        get: function () {
            var centerX;
            var centerY;
            if (this.width === 0) {
                centerX = this.x;
            }
            else {
                centerX = this.x + this.width / 2;
            }
            if (this.height === 0) {
                centerY = this.y;
            }
            else {
                centerY = this.y + this.height / 2;
            }
            return new graphics_1.Point(centerX, centerY);
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}(GameObject_1.default));
exports.default = Rectangle;


/***/ }),
/* 27 */
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
var GameObjectTypes_1 = __webpack_require__(1);
var graphics_1 = __webpack_require__(0);
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Key_1 = __webpack_require__(9);
var Keys_1 = __webpack_require__(10);
var rendering_1 = __webpack_require__(3);
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard._init = function () {
        var _this = this;
        this._keys = {};
        for (var key in Keys_1.default) {
            this._keys[key] = new Key_1.default(key);
        }
        rendering_1.Screen.on(['keydown'], function (e) {
            e.preventDefault();
            if (Keys_1.default[e.code] && _this._keys[e.code].isUp()) {
                _this._keys[e.code]._state._switch();
            }
        });
        rendering_1.Screen.on(['keyup'], function (e) {
            e.preventDefault();
            if (Keys_1.default[e.code] && _this._keys[e.code].isDown()) {
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timing_1 = __webpack_require__(7);
var root_1 = __webpack_require__(12);
var physics_1 = __webpack_require__(5);
var game_objects_1 = __webpack_require__(4);
var Screen_1 = __webpack_require__(13);
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
                for (var gameObjectName in gameObjectResolvable.getAll()) {
                    var gameObject = gameObjectResolvable.get(gameObjectName);
                    this.setRenderContext(gameObject);
                    this.renderGameObject(gameObject);
                    this.restoreRenderContext(gameObject);
                }
            }
            else {
                this.setRenderContext(gameObjectResolvable);
                this.renderGameObject(gameObjectResolvable);
                this.restoreRenderContext(gameObjectResolvable);
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
    };
    Renderer.prototype.setRenderContext = function (gameObject) {
        if (gameObject.renderContextSettings !== null) {
            this.context.save();
            gameObject.renderContextSettings(this.context);
        }
        if (gameObject.rotation) {
            var rotationCenter = void 0;
            switch (gameObject.rotationCenter) {
                case physics_1.RotationCenters.WORLD:
                    rotationCenter = Screen_1.default.center;
                    break;
                case physics_1.RotationCenters.SELF:
                default:
                    rotationCenter = gameObject.center;
                    break;
            }
            this.context.save();
            this.context.translate(rotationCenter.x, rotationCenter.y);
            this.context.rotate(gameObject.rotation * Math.PI / 180);
            this.context.translate(-rotationCenter.x, -rotationCenter.y);
        }
        if (gameObject.scale !== 1) {
            this.context.scale(gameObject.scale, gameObject.scale);
        }
    };
    Renderer.prototype.restoreRenderContext = function (gameObject) {
        if (gameObject.scale !== 1) {
            this.context.scale(1, 1);
        }
        if (gameObject.rotation) {
            this.context.restore();
        }
        if (gameObject.renderContextSettings !== null) {
            this.context.restore();
        }
    };
    return Renderer;
}());
exports.default = Renderer;


/***/ }),
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inputs_1 = __webpack_require__(8);
var rendering_1 = __webpack_require__(3);
var graphics_1 = __webpack_require__(0);
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
        graphics_1.TextMeasure._init();
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
        this._scene = scene;
        this.renderer.scene = this._scene;
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rendering_1 = __webpack_require__(3);
var graphics_1 = __webpack_require__(0);
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDY4OWM1MzRmNmMyNDFkYzNmMmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9HYW1lT2JqZWN0VHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3BoeXNpY3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvSW5wdXRTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9LZXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9ub3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yb290L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcmVuZGVyaW5nL1NjcmVlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9DaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9Gb250LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ3JhcGhpY3MvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL1RleHRNZWFzdXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcGh5c2ljcy9Db2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9waHlzaWNzL1JvdGF0aW9uQ2VudGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9Hcm91cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9JbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9MYWJlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9SZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvU2hhcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yZW5kZXJpbmcvUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90aW1pbmcvVGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9Qcm9maWxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb3QvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb3QvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvTW91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7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cnl0aG1vb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDY4OWM1MzRmNmMyNDFkYzNmMmQiLCJpbXBvcnQgRm9udCBmcm9tICcuL0ZvbnQnO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9Nb2RlbCc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4vUGF0aCc7XHJcbmltcG9ydCBQYXRoUG9pbnQgZnJvbSAnLi9QYXRoUG9pbnQnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9Qb2ludCc7XHJcbmltcG9ydCBUZXh0TWVhc3VyZSBmcm9tICcuL1RleHRNZWFzdXJlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgRm9udCxcclxuICBNb2RlbCxcclxuICBQYXRoLFxyXG4gIFBhdGhQb2ludCxcclxuICBQb2ludCxcclxuICBUZXh0TWVhc3VyZVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL2luZGV4LnRzIiwiZW51bSBHYW1lT2JqZWN0VHlwZXMge1xyXG4gIFJFQ1RBTkdMRSxcclxuICBDSVJDTEUsXHJcbiAgTEFCRUwsXHJcbiAgU0hBUEUsXHJcbiAgSU1BR0UsXHJcbiAgT1RIRVJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3RUeXBlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdFR5cGVzLnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcbmltcG9ydCB7IFJvdGF0aW9uQ2VudGVycyB9IGZyb20gJy4uL3BoeXNpY3MnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF90eXBlOiBHYW1lT2JqZWN0VHlwZXM7XHJcbiAgcHJvdGVjdGVkIF9wb2ludDogUG9pbnQ7XHJcbiAgcHJvdGVjdGVkIF9yb3RhdGlvbjogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfcm90YXRpb25DZW50ZXI6IFJvdGF0aW9uQ2VudGVycztcclxuICBwcm90ZWN0ZWQgX3NjYWxlOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF91cGRhdGU6IEZ1bmN0aW9uO1xyXG4gIHByb3RlY3RlZCBfY29udGV4dFNldHRpbmdzOiBGdW5jdGlvbnxudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fcG9pbnQgPSBwb2ludCA/IHBvaW50IDogbmV3IFBvaW50KDAsIDApO1xyXG4gICAgXHJcbiAgICBpZiAodmlzaWJsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHBvaW50ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XHJcbiAgICB0aGlzLl9yb3RhdGlvbkNlbnRlciA9IFJvdGF0aW9uQ2VudGVycy5TRUxGO1xyXG4gICAgdGhpcy5fc2NhbGUgPSAxO1xyXG5cclxuICAgIHRoaXMuX3VwZGF0ZSA9ICgpID0+IHt9O1xyXG5cclxuICAgIHRoaXMuX2NvbnRleHRTZXR0aW5ncyA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5PVEhFUjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBHYW1lT2JqZWN0VHlwZXMge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBvaW50KCk6IFBvaW50IHtcclxuICAgIHJldHVybiB0aGlzLl9wb2ludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgeCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucG9pbnQueDtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIHNldCB4KHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcG9pbnQueCA9IHg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBvaW50Lnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHkoeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9wb2ludC55ID0geTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY2VudGVyKCk6IFBvaW50IHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5fcG9pbnQueCwgdGhpcy5fcG9pbnQueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHJvdGF0aW9uKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm90YXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHJvdGF0aW9uKGRlZ3JlZXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcm90YXRpb24gPSBkZWdyZWVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByb3RhdGlvbkNlbnRlcigpOiBSb3RhdGlvbkNlbnRlcnMge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uQ2VudGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCByb3RhdGlvbkNlbnRlcihyb3RhdGlvbkNlbnRlcjogUm90YXRpb25DZW50ZXJzKSB7XHJcbiAgICB0aGlzLl9yb3RhdGlvbkNlbnRlciA9IHJvdGF0aW9uQ2VudGVyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzY2FsZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBzY2FsZShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9zY2FsZSA9IHNjYWxlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB1cGRhdGUoKTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwZGF0ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgdXBkYXRlKHVwZGF0ZTogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMuX3VwZGF0ZSA9IHVwZGF0ZTtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIGdldCByZW5kZXJDb250ZXh0U2V0dGluZ3MoKTogRnVuY3Rpb258bnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dFNldHRpbmdzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCByZW5kZXJDb250ZXh0U2V0dGluZ3MoY29udGV4dFNldHRpbmdzOiBGdW5jdGlvbnxudWxsKSB7XHJcbiAgICB0aGlzLl9jb250ZXh0U2V0dGluZ3MgPSBjb250ZXh0U2V0dGluZ3M7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UG9pbnQocG9pbnQ6IFBvaW50KTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb2ludCA9IHBvaW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJvdGF0ZShkZWdyZWVzOiBudW1iZXIsIGNlbnRlcj86IFJvdGF0aW9uQ2VudGVycyk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm90YXRpb24gPSBkZWdyZWVzO1xyXG4gICAgdGhpcy5yb3RhdGlvbkNlbnRlciA9IGNlbnRlciAhPT0gdW5kZWZpbmVkID8gY2VudGVyIDogUm90YXRpb25DZW50ZXJzLlNFTEY7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2NhbGUoc2NhbGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fc2NhbGUgPSBzY2FsZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdC50cyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyJztcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbic7XHJcblxyXG5leHBvcnQge1xyXG4gIFJlbmRlcmVyLFxyXG4gIFNjcmVlblxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9pbmRleC50cyIsImltcG9ydCBDaXJjbGUgZnJvbSAnLi9DaXJjbGUnO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFJlc29sdmFibGUgZnJvbSAnLi9HYW1lT2JqZWN0UmVzb2x2YWJsZSc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgR3JvdXAgZnJvbSAnLi9Hcm91cCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlJztcclxuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vUmVjdGFuZ2xlJztcclxuaW1wb3J0IFNoYXBlIGZyb20gJy4vU2hhcGUnO1xyXG5cclxuZXhwb3J0IHtcclxuICBDaXJjbGUsXHJcbiAgR2FtZU9iamVjdCxcclxuICBHYW1lT2JqZWN0UmVzb2x2YWJsZSxcclxuICBHYW1lT2JqZWN0VHlwZXMsXHJcbiAgR3JvdXAsXHJcbiAgSW1hZ2UsXHJcbiAgTGFiZWwsXHJcbiAgUmVjdGFuZ2xlLFxyXG4gIFNoYXBlXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL2luZGV4LnRzIiwiaW1wb3J0IENvbGxpc2lvbiBmcm9tICcuL0NvbGxpc2lvbic7XHJcbmltcG9ydCBSb3RhdGlvbkNlbnRlcnMgZnJvbSAnLi9Sb3RhdGlvbkNlbnRlcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBDb2xsaXNpb24sXHJcbiAgUm90YXRpb25DZW50ZXJzXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcGh5c2ljcy9pbmRleC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0U3RhdGUge1xyXG4gIHByaXZhdGUgX3ByZXNzZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fcHJlc3NlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIF9zd2l0Y2goKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wcmVzc2VkID0gIXRoaXMuX3ByZXNzZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNVcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVzc2VkID09PSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0Rvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlc3NlZCA9PT0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvSW5wdXRTdGF0ZS50cyIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSc7XHJcbmltcG9ydCBub3cgZnJvbSAnLi9ub3cnO1xyXG5pbXBvcnQgUHJvZmlsZXIgZnJvbSAnLi9Qcm9maWxlcic7XHJcblxyXG5leHBvcnQge1xyXG4gIFRpbWUsXHJcbiAgbm93LFxyXG4gIFByb2ZpbGVyXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdGltaW5nL2luZGV4LnRzIiwiaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuaW1wb3J0IEtleSBmcm9tICcuL0tleSc7XHJcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuL0tleWJvYXJkJztcclxuaW1wb3J0IEtleXMgZnJvbSAnLi9LZXlzJztcclxuaW1wb3J0IE1vdXNlIGZyb20gJy4vTW91c2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICBJbnB1dFN0YXRlLFxyXG4gIEtleSxcclxuICBLZXlib2FyZCxcclxuICBLZXlzLFxyXG4gIE1vdXNlXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL2luZGV4LnRzIiwiaW1wb3J0IEtleXMgZnJvbSAnLi9LZXlzJztcclxuaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleSB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGtleTogS2V5cztcclxuICBwdWJsaWMgX3N0YXRlOiBJbnB1dFN0YXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihrZXk6IEtleXMpIHtcclxuICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgdGhpcy5fc3RhdGUgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5pc0Rvd24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmlzVXAoKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5LnRzIiwiZW51bSBLZXlzIHtcclxuICBEaWdpdDAgPSAnRGlnaXQwJyxcclxuICBEaWdpdDEgPSAnRGlnaXQxJyxcclxuICBEaWdpdDIgPSAnRGlnaXQyJyxcclxuICBEaWdpdDMgPSAnRGlnaXQzJyxcclxuICBEaWdpdDQgPSAnRGlnaXQ0JyxcclxuICBEaWdpdDUgPSAnRGlnaXQ1JyxcclxuICBEaWdpdDYgPSAnRGlnaXQ2JyxcclxuICBEaWdpdDcgPSAnRGlnaXQ3JyxcclxuICBEaWdpdDggPSAnRGlnaXQ4JyxcclxuICBEaWdpdDkgPSAnRGlnaXQ5JyxcclxuXHJcbiAgS2V5QSA9ICdLZXlBJyxcclxuICBLZXlCID0gJ0tleUInLFxyXG4gIEtleUMgPSAnS2V5QycsXHJcbiAgS2V5RCA9ICdLZXlEJyxcclxuICBLZXlFID0gJ0tleUUnLFxyXG4gIEtleUYgPSAnS2V5RicsXHJcbiAgS2V5RyA9ICdLZXlHJyxcclxuICBLZXlIID0gJ0tleUgnLFxyXG4gIEtleUkgPSAnS2V5SScsXHJcbiAgS2V5SiA9ICdLZXlKJyxcclxuICBLZXlLID0gJ0tleUsnLFxyXG4gIEtleUwgPSAnS2V5TCcsXHJcbiAgS2V5TSA9ICdLZXlNJyxcclxuICBLZXlOID0gJ0tleU4nLFxyXG4gIEtleU8gPSAnS2V5TycsXHJcbiAgS2V5UCA9ICdLZXlQJyxcclxuICBLZXlRID0gJ0tleVEnLFxyXG4gIEtleVIgPSAnS2V5UicsXHJcbiAgS2V5UyA9ICdLZXlTJyxcclxuICBLZXlUID0gJ0tleVQnLFxyXG4gIEtleVUgPSAnS2V5VScsXHJcbiAgS2V5ViA9ICdLZXlWJyxcclxuICBLZXlXID0gJ0tleVcnLFxyXG4gIEtleVggPSAnS2V5WCcsXHJcbiAgS2V5WSA9ICdLZXlZJyxcclxuICBLZXlaID0gJ0tleVonLFxyXG5cclxuICBFc2NhcGUgPSAnRXNjYXBlJyxcclxuXHJcbiAgRjEgPSAnRjEnLFxyXG4gIEYyID0gJ0YyJyxcclxuICBGMyA9ICdGMycsXHJcbiAgRjQgPSAnRjQnLFxyXG4gIEY1ID0gJ0Y1JyxcclxuICBGNiA9ICdGNicsXHJcbiAgRjcgPSAnRjcnLFxyXG4gIEY4ID0gJ0Y4JyxcclxuICBGOSA9ICdGOScsXHJcbiAgRjEwID0gJ0YxMCcsXHJcbiAgRjExID0gJ0YxMScsXHJcbiAgRjEyID0gJ0YxMicsXHJcblxyXG4gIEluc2VydCA9ICdJbnNlcnQnLFxyXG4gIERlbGV0ZSA9ICdEZWxldGUnLFxyXG5cclxuICBIb21lID0gJ0hvbWUnLFxyXG4gIEVuZCA9ICdFbmQnLFxyXG4gIFBhZ2VVcCA9ICdQYWdlVXAnLFxyXG4gIFBhZ2VEb3duID0gJ1BhZ2VEb3duJyxcclxuXHJcbiAgTnVtTG9jayA9ICdOdW1Mb2NrJyxcclxuICBOdW1wYWREaXZpZGUgPSAnTnVtcGFkRGl2aWRlJyxcclxuICBOdW1wYWRNdWx0aXBseSA9ICdOdW1wYWRNdWx0aXBseScsXHJcbiAgTnVtcGFkU3VidHJhY3QgPSAnTnVtcGFkU3VidHJhY3QnLFxyXG4gIE51bXBhZEFkZCA9ICdOdW1wYWRBZGQnLFxyXG4gIE51bXBhZEVudGVyID0gJ051bXBhZEVudGVyJyxcclxuICBOdW1wYWREZWNpbWFsID0gJ051bXBhZERlY2ltYWwnLFxyXG4gIE51bXBhZDAgPSAnTnVtcGFkMCcsXHJcbiAgTnVtcGFkMSA9ICdOdW1wYWQxJyxcclxuICBOdW1wYWQyID0gJ051bXBhZDInLFxyXG4gIE51bXBhZDMgPSAnTnVtcGFkMycsXHJcbiAgTnVtcGFkNCA9ICdOdW1wYWQ0JyxcclxuICBOdW1wYWQ1ID0gJ051bXBhZDUnLFxyXG4gIE51bXBhZDYgPSAnTnVtcGFkNicsXHJcbiAgTnVtcGFkNyA9ICdOdW1wYWQ3JyxcclxuICBOdW1wYWQ4ID0gJ051bXBhZDgnLFxyXG4gIE51bXBhZDkgPSAnTnVtcGFkOScsXHJcblxyXG4gIEFycm93VXAgPSAnQXJyb3dVcCcsXHJcbiAgQXJyb3dEb3duID0gJ0Fycm93RG93bicsXHJcbiAgQXJyb3dMZWZ0ID0gJ0Fycm93TGVmdCcsXHJcbiAgQXJyb3dSaWdodCA9ICdBcnJvd1JpZ2h0JyxcclxuXHJcbiAgQmFja3F1b3RlID0gJ0JhY2txdW90ZScsXHJcbiAgTWludXMgPSAnTWludXMnLFxyXG4gIEVxdWFsID0gJ0VxdWFsJyxcclxuICBCYWNrc3BhY2UgPSAnQmFja3NwYWNlJyxcclxuICBCcmFja2V0TGVmdCA9ICdCcmFja2V0TGVmdCcsXHJcbiAgQnJhY2tldFJpZ2h0ID0gJ0JyYWNrZXRSaWdodCcsXHJcbiAgUXVvdGUgPSAnUXVvdGUnLFxyXG4gIEJhY2tzbGFzaCA9ICdCYWNrc2xhc2gnLFxyXG4gIENvbW1hID0gJ0NvbW1hJyxcclxuICBQZXJpb2QgPSAnUGVyaW9kJyxcclxuICBTbGFzaCA9ICdTbGFzaCcsXHJcblxyXG4gIEVudGVyID0gJ0VudGVyJyxcclxuICBTaGlmdExlZnQgPSAnU2hpZnRMZWZ0JyxcclxuICBTaGlmdFJpZ2h0ID0gJ1NoaWZ0UmlnaHQnLFxyXG4gIENhcHNMb2NrID0gJ0NhcHNMb2NrJyxcclxuICBUYWIgPSAnVGFiJyxcclxuICBDb250cm9sTGVmdCA9ICdDb250cm9sTGVmdCcsXHJcbiAgQ29udHJvbFJpZ2h0ID0gJ0NvbnRyb2xSaWdodCcsXHJcbiAgTWV0YUxlZnQgPSAnTWV0YUxlZnQnLFxyXG4gIE1ldGFSaWdodCA9ICdNZXRhUmlnaHQnLFxyXG4gIEFsdExlZnQgPSAnQWx0TGVmdCcsXHJcbiAgQWx0UmlnaHQgPSAnQWx0UmlnaHQnXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXlzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9LZXlzLnRzIiwiZnVuY3Rpb24gZ2V0Tm93KCk6ICgpID0+IG51bWJlciB7XHJcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3c7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gRGF0ZS5ub3c7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE5vdygpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9ub3cudHMiLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xyXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9TY2VuZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIEdhbWUsXHJcbiAgU2NlbmVcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb290L2luZGV4LnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBTY3JlZW4ge1xyXG4gIHByaXZhdGUgc3RhdGljIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgc3RhdGljIF93aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9oZWlnaHQ6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfY2VudGVyOiBQb2ludDtcclxuICBwcml2YXRlIHN0YXRpYyBfb25SZXNpemU6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIHRoaXMuX2NlbnRlciA9IG5ldyBQb2ludCh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgIFxyXG4gICAgdGhpcy5fb25SZXNpemUgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7fTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICB0aGlzLl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgdGhpcy5fY2VudGVyLnggPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgdGhpcy5fY2VudGVyLnkgPSB0aGlzLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICB0aGlzLl9vblJlc2l6ZShldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBjZW50ZXIoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NlbnRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb24oZXZlbnROYW1lczogc3RyaW5nW10sIGV2ZW50SGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudEhhbmRsZXIoZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBvblJlc2l6ZShoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5fb25SZXNpemUgPSA8KGV2ZW50OiBFdmVudCkgPT4gdm9pZD5oYW5kbGVyO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJpbXBvcnQge1xyXG4gIEdhbWUsXHJcbiAgU2NlbmUsXHJcbiAgR3JvdXAsXHJcbiAgQ2lyY2xlLFxyXG4gIFNjcmVlbixcclxuICBMYWJlbCxcclxuICBGb250LFxyXG4gIFBvaW50LFxyXG4gIFRleHRNZWFzdXJlLFxyXG4gIE1vdXNlLFxyXG4gIFRpbWUsXHJcbiAgS2V5Ym9hcmQsXHJcbiAgS2V5c1xyXG59IGZyb20gJy4vZW5naW5lJztcclxuXHJcbmNvbnN0IGcgPSBuZXcgR2FtZSgpO1xyXG5jb25zdCBzID0gbmV3IFNjZW5lKCk7XHJcblxyXG5nLnNldFNjZW5lKHMpO1xyXG5cclxuY29uc3QgY2lyY2xlR3JvdXAgPSBuZXcgR3JvdXAoJ2dyb3VwJyk7XHJcbmNvbnN0IGJpZ0NpcmNsZSA9IG5ldyBDaXJjbGUoJ2JpZyBjaXJjbGUnKTtcclxuY29uc3QgbGl0dGxlQ2lyY2xlID0gbmV3IENpcmNsZSgnc21hbGwgY2lyY2xlJyk7XHJcbmNvbnN0IGN1cnNvciA9IG5ldyBDaXJjbGUoJ2N1cnNvcicpO1xyXG5jb25zdCBmcHNDb3VudGVyID0gbmV3IExhYmVsKCdmcHMgY291bnRlcicpO1xyXG5jb25zdCB0ZXh0ID0gbmV3IExhYmVsKCd0ZXh0Jyk7XHJcbmNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCk7XHJcbmxldCBhdWRpb0RhdGEgPSBuZXcgVWludDhBcnJheSgxMDI0KTtcclxubGV0IGF2ID0gMDtcclxuXHJcbmN1cnNvci52aXNpYmxlID0gdHJ1ZTtcclxuY3Vyc29yLmZpbGwgPSB0cnVlO1xyXG5jdXJzb3IuY29sb3IgPSAnI2RkMTg2MCc7XHJcbmN1cnNvci5zaXplID0gMzA7XHJcbmN1cnNvci5zZXRQb2ludChNb3VzZS5jdXJzb3IpO1xyXG5jdXJzb3IucmVuZGVyQ29udGV4dFNldHRpbmdzID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xyXG4gIGNvbnRleHQuc2hhZG93Q29sb3IgPSAnI0ZGRkZGRic7XHJcbiAgY29udGV4dC5zaGFkb3dCbHVyID0gMTU7XHJcbn07XHJcblxyXG5mcHNDb3VudGVyLnZpc2libGUgPSB0cnVlO1xyXG5mcHNDb3VudGVyLmZvbnQuY29sb3IgPSAnIzAwMDAwMCc7XHJcbmZwc0NvdW50ZXIuZm9udC5mb250U2l6ZSA9IDE0O1xyXG5mcHNDb3VudGVyLnNldFBvaW50KG5ldyBQb2ludCgxNSwgMjApKTtcclxuXHJcbmNpcmNsZUdyb3VwLmFkZChiaWdDaXJjbGUpO1xyXG5jaXJjbGVHcm91cC5hZGQobGl0dGxlQ2lyY2xlKTtcclxuY2lyY2xlR3JvdXAuYWRkKHRleHQpO1xyXG5cclxuYmlnQ2lyY2xlLnZpc2libGUgPSB0cnVlO1xyXG5iaWdDaXJjbGUuY29sb3IgPSAnI2Y5OTNkNCc7XHJcbmJpZ0NpcmNsZS5zaXplID0gU2NyZWVuLmhlaWdodCAvIDIuMjtcclxuYmlnQ2lyY2xlLnNldFBvaW50KFNjcmVlbi5jZW50ZXIpO1xyXG5cclxubGl0dGxlQ2lyY2xlLnZpc2libGUgPSB0cnVlO1xyXG5saXR0bGVDaXJjbGUuY29sb3IgPSAncmdiYSgyNDksIDE0NywgMjEyLCAwLjMpJztcclxubGl0dGxlQ2lyY2xlLnNpemUgPSBTY3JlZW4uaGVpZ2h0IC8gMS44O1xyXG5saXR0bGVDaXJjbGUuc2V0UG9pbnQoU2NyZWVuLmNlbnRlcik7XHJcblxyXG50ZXh0LnZpc2libGUgPSB0cnVlO1xyXG50ZXh0LnRleHQgPSAnUnl0aG1vb3MnO1xyXG50ZXh0LnNldEZvbnQobmV3IEZvbnQoJ0FyaWFsJywgU2NyZWVuLmhlaWdodCAqIDAuMDcsICcjRkZGRkZGJykpO1xyXG50ZXh0LnNldFBvaW50KG5ldyBQb2ludChcclxuICBTY3JlZW4ud2lkdGggLyAyIC0gVGV4dE1lYXN1cmUubWVhc3VyZVRleHQodGV4dC50ZXh0LCB0ZXh0LmZvbnQpIC8gMixcclxuICBTY3JlZW4uaGVpZ2h0IC8gMiArIHRleHQuZm9udC5mb250U2l6ZSAvIDRcclxuKSk7XHJcbnRleHQucmVuZGVyQ29udGV4dFNldHRpbmdzID0gKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xyXG4gIGNvbnRleHQuc2hhZG93Q29sb3IgPSAnYmxhY2snO1xyXG4gIGNvbnRleHQuc2hhZG93Qmx1ciA9IFNjcmVlbi5oZWlnaHQgKiAwLjAyO1xyXG59O1xyXG5cclxucy5hZGQoY2lyY2xlR3JvdXApO1xyXG5zLmFkZChmcHNDb3VudGVyKTtcclxucy5hZGQoY3Vyc29yKTtcclxuXHJcbmNvbnN0IGF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcclxuY29uc3Qgc291cmNlID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XHJcbmNvbnN0IGF1ZGlvQW5hbHlzZXIgPSBhdWRpb0NvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcclxuXHJcbmF1ZGlvQW5hbHlzZXIuZmZ0U2l6ZSA9IDEwMjQ7XHJcbnNvdXJjZS5jb25uZWN0KGF1ZGlvQW5hbHlzZXIpO1xyXG4vLyBhdWRpb0FuYWx5c2VyLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcclxuXHJcbmcudXBkYXRlKCgpID0+IHtcclxuICBhdWRpb0FuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGF1ZGlvRGF0YSk7XHJcbiAgYXYgPSAwO1xyXG5cclxuICBhdWRpb0RhdGEuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICBhdiArPSB2YWw7XHJcbiAgfSk7XHJcblxyXG4gIGF2IC89IDEwMjQ7XHJcblxyXG4gIGJpZ0NpcmNsZS5zaXplID0gKFNjcmVlbi5oZWlnaHQgLyAyLjIpICsgKGF2IC8gMC43KTtcclxuICBsaXR0bGVDaXJjbGUuc2l6ZSA9IChTY3JlZW4uaGVpZ2h0IC8gMS44KSArIChhdiAvIDAuNyk7XHJcblxyXG4gIGZwc0NvdW50ZXIudGV4dCA9IGBGUFM6ICR7VGltZS5mcHN9YDtcclxuXHJcbiAgaWYgKEtleWJvYXJkLmtleShLZXlzLkNvbnRyb2xMZWZ0KS5pc0Rvd24oKSAmJiBLZXlib2FyZC5rZXkoS2V5cy5LZXlSKS5pc0Rvd24oKSkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuYXVkaW8uc3JjID0gJ2F1ZGlvLm1wMyc7XHJcbmF1ZGlvLmxvb3AgPSB0cnVlO1xyXG5hdWRpby5hdXRvcGxheSA9IHRydWU7XHJcblxyXG5nLnN0YXJ0KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vZ2FtZS1vYmplY3RzJztcclxuZXhwb3J0ICogZnJvbSAnLi9ncmFwaGljcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXRzJztcclxuZXhwb3J0ICogZnJvbSAnLi9waHlzaWNzJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Jvb3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RpbWluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2luZGV4LnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHNpemU6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgcHVibGljIGZpbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLkNJUkNMRTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvQ2lyY2xlLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9udCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGZvbnROYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIGZvbnRTaXplOiBudW1iZXI7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGZvbnROYW1lOiBzdHJpbmcgPSAnQXJpYWwnLCBmb250U2l6ZTogbnVtYmVyID0gMTIsIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCcpIHtcclxuICAgIHRoaXMuZm9udE5hbWUgPSBmb250TmFtZTtcclxuICAgIHRoaXMuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9Gb250LnRzIiwiaW1wb3J0IFBhdGhQb2ludCBmcm9tICcuL1BhdGhQb2ludCc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4vUGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XHJcbiAgcHJpdmF0ZSBfcGF0aDogUGF0aDtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aDogUGF0aCA9IFtdKSB7XHJcbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGF0aCgpOiBQYXRoIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5fcGF0aF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHBhdGgocGF0aDogUGF0aCkge1xyXG4gICAgdGhpcy5fcGF0aCA9IFsuLi5wYXRoXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQb2ludChpbmRleDogbnVtYmVyKTogUGF0aFBvaW50fG51bGwge1xyXG4gICAgaWYgKGluZGV4IDwgdGhpcy5fcGF0aC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICB0aGlzLl9wYXRoW2luZGV4XVswXSxcclxuICAgICAgICB0aGlzLl9wYXRoW2luZGV4XVsxXVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBvaW50KGluZGV4OiBudW1iZXIsIHBhdGhQb2ludDogUGF0aFBvaW50KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9wYXRoLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9wYXRoW2luZGV4XSA9IFtcclxuICAgICAgICBwYXRoUG9pbnRbMF0sXHJcbiAgICAgICAgcGF0aFBvaW50WzFdXHJcbiAgICAgIF07XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkUG9pbnQocGF0aFBvaW50OiBQYXRoUG9pbnQpIHtcclxuICAgIHRoaXMuX3BhdGgucHVzaChwYXRoUG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVBvaW50KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuX3BhdGgubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3BhdGguc2xpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL01vZGVsLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL1BvaW50LnRzIiwiaW1wb3J0IEZvbnQgZnJvbSAnLi9Gb250JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFRleHRNZWFzdXJlIHtcclxuICBwcml2YXRlIHN0YXRpYyBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRleHQgPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG1lYXN1cmVUZXh0KHRleHQ6IHN0cmluZywgZm9udDogRm9udCk6IG51bWJlciB7XHJcbiAgICB0aGlzLmNvbnRleHQuZm9udCA9IGAke2ZvbnQuZm9udFNpemV9cHggJHtmb250LmZvbnROYW1lfWA7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzLmNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JhcGhpY3MvVGV4dE1lYXN1cmUudHMiLCJpbXBvcnQgeyBSZWN0YW5nbGUsIENpcmNsZSwgR2FtZU9iamVjdCB9IGZyb20gJy4uL2dhbWUtb2JqZWN0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb2xsaXNpb24ge1xyXG4gIHB1YmxpYyBzdGF0aWMgYm94Q29sbGlkZShlbGVtZW50MTogUmVjdGFuZ2xlLCBlbGVtZW50MjogUmVjdGFuZ2xlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBlbGVtZW50MS54IDwgZWxlbWVudDIueCArIGVsZW1lbnQyLndpZHRoICYmXHJcbiAgICAgIGVsZW1lbnQxLnggKyBlbGVtZW50MS53aWR0aCA+IGVsZW1lbnQyLnggJiZcclxuICAgICAgZWxlbWVudDEueSA8IGVsZW1lbnQyLnkgKyBlbGVtZW50Mi5oZWlnaHQgJiZcclxuICAgICAgZWxlbWVudDEuaGVpZ2h0ICsgZWxlbWVudDEueSA+IGVsZW1lbnQyLnlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNpcmNsZUNvbGxpZGUoZWxlbWVudDE6IENpcmNsZSwgZWxlbWVudDI6IENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZHg6IG51bWJlciA9IGVsZW1lbnQxLnggLSBlbGVtZW50Mi54O1xyXG4gICAgY29uc3QgZHk6IG51bWJlciA9IGVsZW1lbnQxLnkgLSBlbGVtZW50Mi55O1xyXG4gICAgY29uc3QgZDogbnVtYmVyID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBkIDwgZWxlbWVudDEuc2l6ZSAvIDIgKyBlbGVtZW50Mi5zaXplIC8gMlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY29sbGlkZShlbGVtZW50MTogUmVjdGFuZ2xlfENpcmNsZSwgZWxlbWVudDI6IFJlY3RhbmdsZXxDaXJjbGUpOiBib29sZWFuIHtcclxuICAgIGlmIChlbGVtZW50MSBpbnN0YW5jZW9mIENpcmNsZSAmJiBlbGVtZW50MiBpbnN0YW5jZW9mIENpcmNsZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jaXJjbGVDb2xsaWRlKGVsZW1lbnQxLCBlbGVtZW50Mik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgdzE6IG51bWJlcjtcclxuICAgICAgbGV0IGgxOiBudW1iZXI7XHJcbiAgICAgIGxldCB3MjogbnVtYmVyO1xyXG4gICAgICBsZXQgaDI6IG51bWJlcjtcclxuXHJcbiAgICAgIGlmIChlbGVtZW50MSBpbnN0YW5jZW9mIENpcmNsZSkge1xyXG4gICAgICAgIHcxID0gZWxlbWVudDEuc2l6ZTtcclxuICAgICAgICBoMSA9IGVsZW1lbnQxLnNpemU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdzEgPSBlbGVtZW50MS53aWR0aDtcclxuICAgICAgICBoMSA9IGVsZW1lbnQxLmhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVsZW1lbnQyIGluc3RhbmNlb2YgQ2lyY2xlKSB7XHJcbiAgICAgICAgdzIgPSBlbGVtZW50Mi5zaXplO1xyXG4gICAgICAgIGgyID0gZWxlbWVudDIuc2l6ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3MiA9IGVsZW1lbnQyLndpZHRoO1xyXG4gICAgICAgIGgyID0gZWxlbWVudDIuaGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5ib3hDb2xsaWRlKFxyXG4gICAgICAgIDxSZWN0YW5nbGU+e3g6IGVsZW1lbnQxLngsIHk6IGVsZW1lbnQxLnksIHdpZHRoOiB3MSwgaGVpZ2h0OiBoMX0sXHJcbiAgICAgICAgPFJlY3RhbmdsZT57eDogZWxlbWVudDIueCwgeTogZWxlbWVudDIueSwgd2lkdGg6IHcyLCBoZWlnaHQ6IGgyfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3BoeXNpY3MvQ29sbGlzaW9uLnRzIiwiZW51bSBSb3RhdGlvbkNlbnRlcnMge1xyXG4gIFNFTEYsXHJcbiAgV09STERcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdGF0aW9uQ2VudGVycztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9waHlzaWNzL1JvdGF0aW9uQ2VudGVycy50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX2dhbWVPYmplY3RzOiBDb2xsZWN0aW9uPEdhbWVPYmplY3Q+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX2dhbWVPYmplY3RzID0ge307XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLl9nYW1lT2JqZWN0c1tnYW1lT2JqZWN0Lm5hbWVdICE9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgIFxyXG4gICAgdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdC5uYW1lXSA9IGdhbWVPYmplY3Q7XHJcbiAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldChnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogR2FtZU9iamVjdHxudWxsIHtcclxuICAgIGlmICh0aGlzLl9nYW1lT2JqZWN0c1tnYW1lT2JqZWN0TmFtZV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBbGwoKTogQ29sbGVjdGlvbjxHYW1lT2JqZWN0PiB7XHJcbiAgICByZXR1cm4gey4uLnRoaXMuX2dhbWVPYmplY3RzfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoZ2FtZU9iamVjdE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZGVsZXRlIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR3JvdXAudHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIHByb3RlY3RlZCBfcmVhZHk6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF9VUkw6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgX2ltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcclxuICAgIHRoaXMuX2ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgdGhpcy5faW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5fcmVhZHkgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5JTUFHRTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcmVhZHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVhZHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IFVSTCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9VUkw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IFVSTChVUkw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcclxuICAgIHRoaXMuX1VSTCA9IFVSTDtcclxuICAgIHRoaXMuX2ltYWdlLnNyYyA9IHRoaXMuX1VSTDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaW1hZ2UoKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5faW1hZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VVJMKFVSTDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLlVSTCA9IFVSTDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY2VudGVyKCk6IFBvaW50IHtcclxuICAgIGxldCBjZW50ZXJYOiBudW1iZXI7XHJcbiAgICBsZXQgY2VudGVyWTogbnVtYmVyO1xyXG5cclxuICAgIGlmICh0aGlzLmltYWdlLndpZHRoID09PSAwKSB7XHJcbiAgICAgIGNlbnRlclggPSB0aGlzLng7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZW50ZXJYID0gdGhpcy54ICsgdGhpcy5pbWFnZS53aWR0aCAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW1hZ2UuaGVpZ2h0ID09PSAwKSB7XHJcbiAgICAgIGNlbnRlclkgPSB0aGlzLnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZW50ZXJZID0gdGhpcy55ICsgdGhpcy5pbWFnZS5oZWlnaHQgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQoY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0ltYWdlLnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50LCBGb250LCBUZXh0TWVhc3VyZSB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZm9udDogRm9udDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgc3VwZXIobmFtZSwgcG9pbnQsIHZpc2libGUpO1xyXG5cclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuTEFCRUw7XHJcblxyXG4gICAgdGhpcy5mb250ID0gbmV3IEZvbnQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY2VudGVyKCk6IFBvaW50IHtcclxuICAgIGxldCBjZW50ZXJYOiBudW1iZXIgPSBUZXh0TWVhc3VyZS5tZWFzdXJlVGV4dCh0aGlzLnRleHQsIHRoaXMuZm9udCk7XHJcblxyXG4gICAgaWYgKGNlbnRlclggPT09IDApIHtcclxuICAgICAgY2VudGVyWCA9IHRoaXMucG9pbnQueDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNlbnRlclggPSB0aGlzLnBvaW50LnggKyBjZW50ZXJYIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFBvaW50KGNlbnRlclgsIHRoaXMucG9pbnQueSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Rm9udChmb250OiBGb250KTogdm9pZCB7XHJcbiAgICB0aGlzLmZvbnQgPSBmb250O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvbnRTaXplKGZvbnRTaXplOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9udC5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvbnRDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvbnQuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvTGFiZWwudHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMDAwMDAwJztcclxuICBwdWJsaWMgZmlsbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLlJFQ1RBTkdMRTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY2VudGVyKCk6IFBvaW50IHtcclxuICAgIGxldCBjZW50ZXJYOiBudW1iZXI7XHJcbiAgICBsZXQgY2VudGVyWTogbnVtYmVyO1xyXG5cclxuICAgIGlmICh0aGlzLndpZHRoID09PSAwKSB7XHJcbiAgICAgIGNlbnRlclggPSB0aGlzLng7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZW50ZXJYID0gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaGVpZ2h0ID09PSAwKSB7XHJcbiAgICAgIGNlbnRlclkgPSB0aGlzLnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZW50ZXJZID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQoY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1JlY3RhbmdsZS50cyIsImltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0VHlwZXMgZnJvbSAnLi9HYW1lT2JqZWN0VHlwZXMnO1xyXG5pbXBvcnQgeyBQb2ludCwgTW9kZWwgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyByZWFkb25seSBtb2RlbDogTW9kZWw7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgcHVibGljIGZpbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbCgpO1xyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5TSEFQRTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvU2hhcGUudHMiLCJpbXBvcnQgS2V5IGZyb20gJy4vS2V5JztcclxuaW1wb3J0IEtleXMgZnJvbSAnLi9LZXlzJztcclxuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEtleWJvYXJkIHtcclxuICBwcml2YXRlIHN0YXRpYyBfa2V5czogQ29sbGVjdGlvbjxLZXk+O1xyXG4gIFxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9rZXlzID0ge307XHJcbiAgICBcclxuICAgIGZvciAoY29uc3Qga2V5IGluIEtleXMpIHtcclxuICAgICAgdGhpcy5fa2V5c1trZXldID0gbmV3IEtleSg8S2V5cz5rZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIFNjcmVlbi5vbihbJ2tleWRvd24nXSwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKEtleXNbPGFueT5lLmNvZGVdICYmIHRoaXMuX2tleXNbZS5jb2RlXS5pc1VwKCkpIHtcclxuICAgICAgICB0aGlzLl9rZXlzW2UuY29kZV0uX3N0YXRlLl9zd2l0Y2goKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgU2NyZWVuLm9uKFsna2V5dXAnXSwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKEtleXNbPGFueT5lLmNvZGVdICYmIHRoaXMuX2tleXNbZS5jb2RlXS5pc0Rvd24oKSkge1xyXG4gICAgICAgIHRoaXMuX2tleXNbZS5jb2RlXS5fc3RhdGUuX3N3aXRjaCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JlZW4ub24oWydrZXlwcmVzcyddLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0S2V5KGtleTogS2V5cyk6IEtleSB7XHJcbiAgICByZXR1cm4gdGhpcy5fa2V5c1trZXldO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBrZXkoa2V5OiBLZXlzKTogS2V5IHtcclxuICAgIHJldHVybiB0aGlzLmdldEtleShrZXkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc0Rvd24oa2V5OiBLZXlzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fa2V5c1trZXldLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc1VwKGtleTogS2V5cyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2tleXNba2V5XS5pc1VwKCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXRzL0tleWJvYXJkLnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcbmltcG9ydCB7IFRpbWUgfSBmcm9tICcuLi90aW1pbmcnO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3Jvb3QnO1xyXG5pbXBvcnQgeyBSb3RhdGlvbkNlbnRlcnMgfSBmcm9tICcuLi9waHlzaWNzJztcclxuaW1wb3J0IHtcclxuICBHYW1lT2JqZWN0LFxyXG4gIEdhbWVPYmplY3RSZXNvbHZhYmxlLFxyXG4gIEdhbWVPYmplY3RUeXBlcyxcclxuICBHcm91cCxcclxuICBSZWN0YW5nbGUsXHJcbiAgQ2lyY2xlLFxyXG4gIFNoYXBlLFxyXG4gIExhYmVsLFxyXG4gIEltYWdlXHJcbn0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzJztcclxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwdWJsaWMgc2NlbmU6IFNjZW5lO1xyXG4gIHByaXZhdGUgYW5pbWF0aW9uRnJhbWU6IG51bWJlcjtcclxuICBwcml2YXRlIF91cGRhdGVzOiBGdW5jdGlvbltdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gMDtcclxuICAgIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuICAgIHRoaXMuX3VwZGF0ZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5hbmltYXRpb25GcmFtZSkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmcmFtZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoZnJhbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhdHRhY2hVcGRhdGUodXBkYXRlOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5fdXBkYXRlcy5wdXNoKHVwZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcihmcmFtZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBUaW1lLl9zZXRGcmFtZShmcmFtZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdGhpcy5fdXBkYXRlcykge1xyXG4gICAgICB1cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHVwZGF0ZSBvZiB0aGlzLnNjZW5lLnVwZGF0ZXMpIHtcclxuICAgICAgdXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNvbnRleHQuY2FudmFzLndpZHRoLCB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBnYW1lT2JqZWN0UmVzb2x2YWJsZU5hbWUgaW4gdGhpcy5zY2VuZS5nZXRBbGwoKSkge1xyXG4gICAgICBjb25zdCBnYW1lT2JqZWN0UmVzb2x2YWJsZSA9IDxHYW1lT2JqZWN0UmVzb2x2YWJsZT50aGlzLnNjZW5lLmdldChnYW1lT2JqZWN0UmVzb2x2YWJsZU5hbWUpO1xyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3RSZXNvbHZhYmxlIGluc3RhbmNlb2YgR3JvdXApIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGdhbWVPYmplY3ROYW1lIGluIGdhbWVPYmplY3RSZXNvbHZhYmxlLmdldEFsbCgpKSB7XHJcbiAgICAgICAgICBjb25zdCBnYW1lT2JqZWN0ID0gPEdhbWVPYmplY3Q+Z2FtZU9iamVjdFJlc29sdmFibGUuZ2V0KGdhbWVPYmplY3ROYW1lKTtcclxuXHJcbiAgICAgICAgICB0aGlzLnNldFJlbmRlckNvbnRleHQoZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlckdhbWVPYmplY3QoZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgICB0aGlzLnJlc3RvcmVSZW5kZXJDb250ZXh0KGdhbWVPYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFJlbmRlckNvbnRleHQoZ2FtZU9iamVjdFJlc29sdmFibGUpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyR2FtZU9iamVjdChnYW1lT2JqZWN0UmVzb2x2YWJsZSk7XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlUmVuZGVyQ29udGV4dChnYW1lT2JqZWN0UmVzb2x2YWJsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmcmFtZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyKGZyYW1lKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJHYW1lT2JqZWN0KGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcclxuICAgIGdhbWVPYmplY3QudXBkYXRlKCk7XHJcblxyXG4gICAgaWYgKCFnYW1lT2JqZWN0LnZpc2libGUpIHJldHVybjtcclxuXHJcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFJlY3RhbmdsZSkge1xyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QuZmlsbCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChcclxuICAgICAgICAgIGdhbWVPYmplY3QueCxcclxuICAgICAgICAgIGdhbWVPYmplY3QueSxcclxuICAgICAgICAgIGdhbWVPYmplY3Qud2lkdGgsXHJcbiAgICAgICAgICBnYW1lT2JqZWN0LmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdChcclxuICAgICAgICAgIGdhbWVPYmplY3QueCxcclxuICAgICAgICAgIGdhbWVPYmplY3QueSxcclxuICAgICAgICAgIGdhbWVPYmplY3Qud2lkdGgsXHJcbiAgICAgICAgICBnYW1lT2JqZWN0LmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIENpcmNsZSkge1xyXG4gICAgICBpZiAoZ2FtZU9iamVjdC5zaXplID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5hcmMoZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnksIGdhbWVPYmplY3Quc2l6ZSAvIDIsIDAsIDIgKiBNYXRoLlBJKTtcclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0LmZpbGwpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBTaGFwZSkge1xyXG4gICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnkpO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBwYXRoUG9pbnQgb2YgZ2FtZU9iamVjdC5tb2RlbC5wYXRoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwYXRoUG9pbnRbMF0sIHBhdGhQb2ludFsxXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0LmZpbGwpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBMYWJlbCkge1xyXG4gICAgICB0aGlzLmNvbnRleHQuZm9udCA9IGAke2dhbWVPYmplY3QuZm9udC5mb250U2l6ZX1weCAke2dhbWVPYmplY3QuZm9udC5mb250TmFtZX1gO1xyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QuZmlsbCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBnYW1lT2JqZWN0LmZvbnQuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KGdhbWVPYmplY3QudGV4dCwgZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGdhbWVPYmplY3QuZm9udC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlVGV4dChnYW1lT2JqZWN0LnRleHQsIGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgSW1hZ2UpIHtcclxuICAgICAgaWYgKGdhbWVPYmplY3QucmVhZHkpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGdhbWVPYmplY3QuaW1hZ2UsIGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRSZW5kZXJDb250ZXh0KGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcclxuICAgIGlmIChnYW1lT2JqZWN0LnJlbmRlckNvbnRleHRTZXR0aW5ncyAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICBnYW1lT2JqZWN0LnJlbmRlckNvbnRleHRTZXR0aW5ncyh0aGlzLmNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnYW1lT2JqZWN0LnJvdGF0aW9uKSB7XHJcbiAgICAgIGxldCByb3RhdGlvbkNlbnRlcjogUG9pbnQ7XHJcblxyXG4gICAgICBzd2l0Y2ggKGdhbWVPYmplY3Qucm90YXRpb25DZW50ZXIpIHtcclxuICAgICAgICBjYXNlIFJvdGF0aW9uQ2VudGVycy5XT1JMRDpcclxuICAgICAgICAgIHJvdGF0aW9uQ2VudGVyID0gU2NyZWVuLmNlbnRlcjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUm90YXRpb25DZW50ZXJzLlNFTEY6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJvdGF0aW9uQ2VudGVyID0gZ2FtZU9iamVjdC5jZW50ZXI7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHJvdGF0aW9uQ2VudGVyLngsIHJvdGF0aW9uQ2VudGVyLnkpO1xyXG4gICAgICB0aGlzLmNvbnRleHQucm90YXRlKGdhbWVPYmplY3Qucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSgtcm90YXRpb25DZW50ZXIueCwgLXJvdGF0aW9uQ2VudGVyLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnYW1lT2JqZWN0LnNjYWxlICE9PSAxKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5zY2FsZShnYW1lT2JqZWN0LnNjYWxlLCBnYW1lT2JqZWN0LnNjYWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzdG9yZVJlbmRlckNvbnRleHQoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IHZvaWQge1xyXG4gICAgaWYgKGdhbWVPYmplY3Quc2NhbGUgIT09IDEpIHtcclxuICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnYW1lT2JqZWN0LnJvdGF0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdhbWVPYmplY3QucmVuZGVyQ29udGV4dFNldHRpbmdzICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcmVuZGVyaW5nL1JlbmRlcmVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVGltZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2RlbHRhVGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF90aW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2ZwczogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIF9pbml0KCkge1xyXG4gICAgdGhpcy5fZGVsdGFUaW1lID0gMDtcclxuICAgIHRoaXMuX3RpbWUgPSAwO1xyXG4gICAgdGhpcy5fZnBzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBfc2V0RnJhbWUoZnJhbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fZGVsdGFUaW1lID0gZnJhbWUgLSB0aGlzLl90aW1lO1xyXG4gICAgdGhpcy5fdGltZSA9IGZyYW1lO1xyXG4gICAgdGhpcy5fZnBzID0gTWF0aC5yb3VuZCgxMDAwIC8gdGhpcy5fZGVsdGFUaW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRlbHRhVGltZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbHRhVGltZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90aW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZnBzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZnBzO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9UaW1lLnRzIiwiaW1wb3J0IG5vdyBmcm9tICcuL25vdyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlciB7XHJcbiAgcHVibGljIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBlbmRUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfc3RlcHM6IG51bWJlcltdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIHRoaXMuZW5kVGltZSA9IDA7XHJcbiAgICB0aGlzLl9zdGVwcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuZW5kVGltZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhcnRUaW1lKSB7XHJcbiAgICAgIHJldHVybiBub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHN0ZXBzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5fc3RlcHNdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbmRUaW1lID0gMDtcclxuICAgIHRoaXMuX3N0ZXBzID0gW107XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5vdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0ZXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGFydFRpbWUpIHtcclxuICAgICAgdGhpcy5fc3RlcHMucHVzaChub3coKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZW5kVGltZSA9IG5vdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0ZXAoaW5kZXg6IG51bWJlcik6IG51bWJlcnxudWxsIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuX3N0ZXBzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RlcHNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0ZXBEdXJhdGlvbihpbmRleDogbnVtYmVyKTogbnVtYmVyfG51bGwge1xyXG4gICAgY29uc3Qgc3RlcDogbnVtYmVyfG51bGwgPSB0aGlzLmdldFN0ZXAoaW5kZXgpO1xyXG5cclxuICAgIGlmIChzdGVwICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBzdGVwIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3RlcER1cmF0aW9ucygpOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCBzdGVwczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHN0ZXAgb2YgdGhpcy5zdGVwcykge1xyXG4gICAgICBzdGVwcy5wdXNoKHN0ZXAgLSB0aGlzLnN0YXJ0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0ZXBzO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9Qcm9maWxlci50cyIsImltcG9ydCB7IE1vdXNlLCBLZXlib2FyZCB9IGZyb20gJy4uL2lucHV0cyc7XHJcbmltcG9ydCB7IFNjcmVlbiwgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyBUZXh0TWVhc3VyZSB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3RpbWluZyc7XHJcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgR2FtZS5cclxuICAgKiBAcGFyYW0gY2FudmFzIFRoZSBjYW52YXMgdG8gY3JlYXRlIHRoZSBnYW1lIGluLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcig8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPnRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykpO1xyXG4gICAgdGhpcy5fc2NlbmUgPSB0aGlzLnJlbmRlcmVyLnNjZW5lO1xyXG5cclxuICAgIFRpbWUuX2luaXQoKTtcclxuICAgIE1vdXNlLl9pbml0KCk7XHJcbiAgICBLZXlib2FyZC5faW5pdCgpO1xyXG4gICAgVGV4dE1lYXN1cmUuX2luaXQoKTtcclxuICAgIFNjcmVlbi5faW5pdCh0aGlzLmNhbnZhcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNjZW5lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFNjZW5lKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2NlbmUgPSB0aGlzLl9zY2VuZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ2FudmFzKCk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnNjZW5lLmF0dGFjaFVwZGF0ZSh1cGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdsb2JhbFVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmF0dGFjaFVwZGF0ZSh1cGRhdGUpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Jvb3QvR2FtZS50cyIsImltcG9ydCB7IEdhbWVPYmplY3RSZXNvbHZhYmxlIH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcclxuICBwcml2YXRlIF9nYW1lT2JqZWN0czogQ29sbGVjdGlvbjxHYW1lT2JqZWN0UmVzb2x2YWJsZT47XHJcbiAgcHJpdmF0ZSBfdXBkYXRlczogRnVuY3Rpb25bXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9nYW1lT2JqZWN0cyA9IHt9O1xyXG4gICAgdGhpcy5fdXBkYXRlcyA9IFtdO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgZ2V0IHVwZGF0ZXMoKTogRnVuY3Rpb25bXSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX3VwZGF0ZXNdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZChnYW1lT2JqZWN0OiBHYW1lT2JqZWN0UmVzb2x2YWJsZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY29udGFpbnMoZ2FtZU9iamVjdC5uYW1lKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3QubmFtZV0gPSBnYW1lT2JqZWN0O1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbnMoZ2FtZU9iamVjdE5hbWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZGVsZXRlIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIGdldChnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogR2FtZU9iamVjdFJlc29sdmFibGV8bnVsbCB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbnMoZ2FtZU9iamVjdE5hbWUpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEFsbCgpOiBDb2xsZWN0aW9uPEdhbWVPYmplY3RSZXNvbHZhYmxlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udGFpbnMoZ2FtZU9iamVjdE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzLmhhc093blByb3BlcnR5KGdhbWVPYmplY3ROYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuX2dhbWVPYmplY3RzID0ge307XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGF0dGFjaFVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLl91cGRhdGVzLnB1c2godXBkYXRlKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb290L1NjZW5lLnRzIiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi4vcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcbmltcG9ydCBJbnB1dFN0YXRlIGZyb20gJy4vSW5wdXRTdGF0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBNb3VzZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2N1cnNvcjogUG9pbnQ7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2xlZnRDbGljazogSW5wdXRTdGF0ZTtcclxuICBwcml2YXRlIHN0YXRpYyBfbWlkZGxlQ2xpY2s6IElucHV0U3RhdGU7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3JpZ2h0Q2xpY2s6IElucHV0U3RhdGU7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jdXJzb3IgPSBuZXcgUG9pbnQoU2NyZWVuLndpZHRoIC8gMiwgU2NyZWVuLmhlaWdodCAvIDIpO1xyXG4gICAgdGhpcy5fbGVmdENsaWNrID0gbmV3IElucHV0U3RhdGUoKTtcclxuICAgIHRoaXMuX21pZGRsZUNsaWNrID0gbmV3IElucHV0U3RhdGUoKTtcclxuICAgIHRoaXMuX3JpZ2h0Q2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgY3Vyc29yKCk6IFBvaW50IHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJzb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBjdXJzb3JYKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJzb3IueDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGN1cnNvclkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnNvci55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgYnV0dG9uRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodGhpcy5sZWZ0QnV0dG9uRG93biB8fCB0aGlzLm1pZGRsZUJ1dHRvbkRvd24gfHwgdGhpcy5yaWdodEJ1dHRvbkRvd24pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbGVmdEJ1dHRvbkRvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGVmdENsaWNrLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbWlkZGxlQnV0dG9uRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9taWRkbGVDbGljay5pc0Rvd24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHJpZ2h0QnV0dG9uRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9yaWdodENsaWNrLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgbGVmdEJ1dHRvblVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xlZnRDbGljay5pc1VwKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBtaWRkbGVCdXR0b25VcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9taWRkbGVDbGljay5pc1VwKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCByaWdodEJ1dHRvblVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0Q2xpY2suaXNVcCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgaW5pdEV2ZW50cygpOiB2b2lkIHtcclxuICAgIFNjcmVlbi5vbihbJ21vdXNlbW92ZSddLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9jdXJzb3IueCA9IGUuY2xpZW50WDtcclxuICAgICAgdGhpcy5fY3Vyc29yLnkgPSBlLmNsaWVudFk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JlZW4ub24oWydtb3VzZWRvd24nLCAnbW91c2V1cCddLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBzd2l0Y2goZS5idXR0b24pIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLl9sZWZ0Q2xpY2suX3N3aXRjaCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgdGhpcy5fbWlkZGxlQ2xpY2suX3N3aXRjaCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGhpcy5fcmlnaHRDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgU2NyZWVuLm9uKFsnY29udGV4dG1lbnUnXSwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvTW91c2UudHMiXSwic291cmNlUm9vdCI6IiJ9