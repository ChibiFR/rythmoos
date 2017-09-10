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
var physics_1 = __webpack_require__(33);
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
    GameObject.prototype.hasRenderContextSettings = function () {
        return this._contextSettings !== null ? true : false;
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
var TextMeasure_1 = __webpack_require__(40);
exports.TextMeasure = TextMeasure_1.default;


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
var Keys_1 = __webpack_require__(37);
exports.Keys = Keys_1.default;
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
/* 10 */,
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
var graphics_1 = __webpack_require__(2);
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
            var centerY = this.font.fontSize;
            if (centerX === 0) {
                centerX = this.point.x;
            }
            else {
                centerX = this.point.x + centerX / 2;
            }
            if (centerY === 0) {
                centerY = this.point.y;
            }
            else {
                centerY = this.point.y + centerY / 2;
            }
            return new graphics_1.Point(centerX, centerY);
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
var graphics_1 = __webpack_require__(2);
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
var Keys_1 = __webpack_require__(37);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timing_1 = __webpack_require__(6);
var root_1 = __webpack_require__(12);
var physics_1 = __webpack_require__(33);
var game_objects_1 = __webpack_require__(7);
var Screen_1 = __webpack_require__(27);
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
        if (gameObject.hasRenderContextSettings()) {
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
var graphics_1 = __webpack_require__(2);
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
var graphics_1 = __webpack_require__(2);
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
        if (engine_1.Keyboard.key(engine_1.Keys.KeyQ).isDown()) {
            this.qElement.color = '#113311';
            this.qLabel.setFontColor('#FFFFFF');
        }
        else {
            this.qElement.color = '#CCDDCC';
            this.qLabel.setFontColor('#000000');
        }
        if (engine_1.Keyboard.key(engine_1.Keys.KeyW).isDown()) {
            this.wElement.color = '#113311';
            this.wLabel.setFontColor('#FFFFFF');
        }
        else {
            this.wElement.color = '#CCDDCC';
            this.wLabel.setFontColor('#000000');
        }
        this.qElement.rotation += 1;
        this.qLabel.rotation += 1;
        if (this.qElement.rotation === 360) {
            this.qElement.rotation = 0;
            this.qLabel.rotation = 0;
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
            if (engine_1.Keyboard.key(engine_1.Keys.KeyQ).isUp() && engine_1.Keyboard.key(engine_1.Keys.KeyW).isUp()) {
                this.hit = false;
            }
        }
        if (engine_1.Keyboard.key(engine_1.Keys.KeyQ).isDown() || engine_1.Keyboard.key(engine_1.Keys.KeyW).isDown()) {
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
var RotationCenters_1 = __webpack_require__(38);
exports.RotationCenters = RotationCenters_1.default;


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
var graphics_1 = __webpack_require__(2);
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


/***/ }),
/* 37 */
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
/* 38 */
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
/* 39 */,
/* 40 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWU5ZTNhZjllMTA1MzI1ZmI1NGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdFR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXRzL0lucHV0U3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS90aW1pbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL25vdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL0ZvbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ncmFwaGljcy9Nb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyYXBoaWNzL1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0xhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9TaGFwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2lucHV0cy9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9SZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3RpbWluZy9UaW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdGltaW5nL1Byb2ZpbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9HYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vdC9TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvTW91c2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbHMvQ3Vyc29yLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxzL0hpdEtleXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zpc3VhbHMvSGl0Q2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy92aXN1YWxzL0ZQU0NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9waHlzaWNzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcGh5c2ljcy9Db2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvSW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3BoeXNpY3MvUm90YXRpb25DZW50ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ3JhcGhpY3MvVGV4dE1lYXN1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBLElBQUssZUFPSjtBQVBELFdBQUssZUFBZTtJQUNsQiwrREFBUztJQUNULHlEQUFNO0lBQ04sdURBQUs7SUFDTCx1REFBSztJQUNMLHVEQUFLO0lBQ0wsdURBQUs7QUFDUCxDQUFDLEVBUEksZUFBZSxLQUFmLGVBQWUsUUFPbkI7QUFBQSxDQUFDO0FBRUYsa0JBQWUsZUFBZSxDQUFDOzs7Ozs7Ozs7O0FDVC9CLHdDQUFvQztBQUNwQyx3Q0FBNkM7QUFDN0MsK0NBQWdEO0FBRWhEO0lBV0Usb0JBQVksSUFBWSxFQUFFLEtBQWEsRUFBRSxPQUFpQjtRQUN4RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxnQkFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5QyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLHlCQUFlLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBTyxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsS0FBSyxHQUFHLHlCQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQkFBVyw0QkFBSTthQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw2QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcseUJBQUM7YUFBWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBYSxDQUFTO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLHlCQUFDO2FBQVo7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQWEsQ0FBUztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyw4QkFBTTthQUFqQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLGdCQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGdDQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQW9CLE9BQWU7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyxzQ0FBYzthQUF6QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7YUFFRCxVQUEwQixjQUErQjtZQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztRQUN4QyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLDZCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQWlCLEtBQWE7WUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyw4QkFBTTthQUFqQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFrQixNQUFnQjtZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLDZDQUFxQjthQUFoQztZQUNFLE1BQU0sQ0FBOEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzVFLENBQUM7YUFFRCxVQUFpQyxlQUE0RDtZQUMzRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO1FBQzFDLENBQUM7OztPQUpBO0lBTU0sNkJBQVEsR0FBZixVQUFnQixLQUFZO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSw2Q0FBd0IsR0FBL0I7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsT0FBZSxFQUFFLE1BQXdCO1FBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxLQUFLLFNBQVMsR0FBRyxNQUFNLEdBQUcseUJBQWUsQ0FBQyxJQUFJLENBQUM7SUFDN0UsQ0FBQztJQUVNLDZCQUFRLEdBQWYsVUFBZ0IsS0FBYTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQ3hIRCxxQ0FBMEI7QUFReEIsZUFSSyxjQUFJLENBUUw7QUFQTixzQ0FBNEI7QUFRMUIsZ0JBUkssZUFBSyxDQVFMO0FBTFAsc0NBQTRCO0FBUTFCLGdCQVJLLGVBQUssQ0FRTDtBQVBQLDRDQUF3QztBQVF0QyxzQkFSSyxxQkFBVyxDQVFMOzs7Ozs7Ozs7O0FDYmIseUNBQWtDO0FBSWhDLG1CQUpLLGtCQUFRLENBSUw7QUFIVix1Q0FBOEI7QUFJNUIsaUJBSkssZ0JBQU0sQ0FJTDs7Ozs7Ozs7Ozs7OztBQ0xSLGlDQUErQjtBQUMvQixpQ0FBMkI7QUFDM0IsaUNBQXlCO0FBQ3pCLGtDQUEwQjtBQUMxQixpQ0FBNEI7QUFDNUIsa0NBQXVCO0FBQ3ZCLGlDQUF5Qjs7Ozs7Ozs7OztBQ056QjtJQUdFO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLDRCQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRU0sMkJBQU0sR0FBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQ2xCRCxxQ0FBMEI7QUFLeEIsZUFMSyxjQUFJLENBS0w7QUFKTixvQ0FBd0I7QUFLdEIsY0FMSyxhQUFHLENBS0w7QUFKTCx5Q0FBa0M7QUFLaEMsbUJBTEssa0JBQVEsQ0FLTDs7Ozs7Ozs7OztBQ1BWLHVDQUE4QjtBQVc1QixpQkFYSyxnQkFBTSxDQVdMO0FBVlIsMENBQXNDO0FBV3BDLHFCQVhLLG9CQUFVLENBV0w7QUFUWiwrQ0FBZ0Q7QUFXOUMsMEJBWEsseUJBQWUsQ0FXTDtBQVZqQixzQ0FBNEI7QUFXMUIsZ0JBWEssZUFBSyxDQVdMO0FBVlAsc0NBQTRCO0FBVzFCLGdCQVhLLGVBQUssQ0FXTDtBQVZQLHNDQUE0QjtBQVcxQixnQkFYSyxlQUFLLENBV0w7QUFWUCwwQ0FBb0M7QUFXbEMsb0JBWEssbUJBQVMsQ0FXTDtBQVZYLHNDQUE0QjtBQVcxQixnQkFYSyxlQUFLLENBV0w7Ozs7Ozs7Ozs7QUNuQlAsMENBQXNDO0FBT3BDLHFCQVBLLG9CQUFVLENBT0w7QUFOWixtQ0FBd0I7QUFPdEIsY0FQSyxhQUFHLENBT0w7QUFOTCx5Q0FBa0M7QUFPaEMsbUJBUEssa0JBQVEsQ0FPTDtBQU5WLHFDQUEwQjtBQU94QixlQVBLLGNBQUksQ0FPTDtBQU5OLHNDQUE0QjtBQU8xQixnQkFQSyxlQUFLLENBT0w7Ozs7Ozs7Ozs7QUNWUCwwQ0FBc0M7QUFHdEM7SUFJRSxhQUFZLEdBQVM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxvQkFBTSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLGtCQUFJLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0gsVUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7OztBQ3BCRDtJQUNFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sV0FBVyxLQUFLLFdBQVcsSUFBSSxXQUFXLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ2xCLENBQUM7QUFFRCxrQkFBZSxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7OztBQ1J4QixxQ0FBMEI7QUFJeEIsZUFKSyxjQUFJLENBSUw7QUFITixzQ0FBNEI7QUFJMUIsZ0JBSkssZUFBSyxDQUlMOzs7Ozs7Ozs7O0FDTFAsc0NBQW9GO0FBRXBGLDJDQUE4QztBQUM5Qyx1Q0FBc0M7QUFDdEMsd0NBQXdDO0FBQ3hDLDBDQUE0QztBQUU1QyxJQUFNLENBQUMsR0FBRyxJQUFJLGFBQUksRUFBRSxDQUFDO0FBRXJCLGFBQWE7QUFDYixJQUFNLEVBQUUsR0FBRyxJQUFJLGtCQUFTLENBQUMsWUFBWSxFQUFFLElBQUksY0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5RCxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUNyQixFQUFFLENBQUMsS0FBSyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUM7QUFDeEIsRUFBRSxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDO0FBQzFCLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRWhCLGdCQUFnQjtBQUNoQixJQUFNLFNBQVMsR0FBRyxJQUFJLG1CQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLElBQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckMsSUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxJQUFNLFVBQVUsR0FBRyxJQUFJLG9CQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTNDLDJCQUEyQjtBQUMzQixlQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2QsRUFBRSxDQUFDLEtBQUssR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3hCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQztBQUM1QixDQUFDLENBQUMsQ0FBQztBQUVILDBCQUEwQjtBQUMxQixDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztJQUN0QixFQUFFLENBQUMsQ0FBQyxrQkFBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksZUFBTSxDQUFDLEVBQUUsRUFBRSxjQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBRUgsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDViwwQ0FBc0M7QUFDdEMsK0NBQWdEO0FBR2hEO0lBQW9DLDBCQUFVO0lBSzVDLGdCQUFZLElBQVksRUFBRSxLQUFhLEVBQUUsT0FBaUI7UUFBMUQsWUFDRSxrQkFBTSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUc1QjtRQVJNLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsV0FBSyxHQUFXLFNBQVMsQ0FBQztRQUMxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBSzFCLEtBQUksQ0FBQyxLQUFLLEdBQUcseUJBQWUsQ0FBQyxNQUFNLENBQUM7O0lBQ3RDLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxDQVZtQyxvQkFBVSxHQVU3Qzs7Ozs7Ozs7Ozs7QUNkRDtJQUtFLGNBQVksUUFBMEIsRUFBRSxRQUFxQixFQUFFLEtBQXlCO1FBQTVFLDZDQUEwQjtRQUFFLHdDQUFxQjtRQUFFLHlDQUF5QjtRQUN0RixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7O0FDUEQ7SUFHRSxlQUFZLElBQWU7UUFBZixnQ0FBZTtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsc0JBQVcsdUJBQUk7YUFBZjtZQUNFLE1BQU0sQ0FBSyxJQUFJLENBQUMsS0FBSyxTQUFFO1FBQ3pCLENBQUM7YUFFRCxVQUFnQixJQUFVO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQU8sSUFBSSxRQUFDLENBQUM7UUFDekIsQ0FBQzs7O09BSkE7SUFNTSx3QkFBUSxHQUFmLFVBQWdCLEtBQWE7UUFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JCLENBQUM7UUFDSixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSx3QkFBUSxHQUFmLFVBQWdCLEtBQWEsRUFBRSxTQUFvQjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUc7Z0JBQ2xCLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNiLENBQUM7WUFFRixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sd0JBQVEsR0FBZixVQUFnQixTQUFvQjtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sMkJBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM5QixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUUzQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7O0FDdkREO0lBSUUsZUFBWSxDQUFTLEVBQUUsQ0FBUztRQUM5QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRCwwQ0FBc0M7QUFDdEMsK0NBQWdEO0FBQ2hELHdDQUF1RDtBQUV2RDtJQUFtQyx5QkFBVTtJQUszQyxlQUFZLElBQVksRUFBRSxLQUFhLEVBQUUsT0FBaUI7UUFBMUQsWUFDRSxrQkFBTSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUs1QjtRQVZNLFVBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQU0xQixLQUFJLENBQUMsS0FBSyxHQUFHLHlCQUFlLENBQUMsS0FBSyxDQUFDO1FBRW5DLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxlQUFJLEVBQUUsQ0FBQzs7SUFDekIsQ0FBQztJQUVELHNCQUFXLHlCQUFNO2FBQWpCO1lBQ0UsSUFBSSxPQUFPLEdBQVcsc0JBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEUsSUFBSSxPQUFPLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFekMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUVNLHVCQUFPLEdBQWQsVUFBZSxJQUFVO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFTSwyQkFBVyxHQUFsQixVQUFtQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVNLDRCQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxDQTNDa0Msb0JBQVUsR0EyQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0QsMENBQXNDO0FBQ3RDLCtDQUFnRDtBQUNoRCx3Q0FBb0M7QUFFcEM7SUFBdUMsNkJBQVU7SUFNL0MsbUJBQVksSUFBWSxFQUFFLEtBQWEsRUFBRSxPQUFpQjtRQUExRCxZQUNFLGtCQUFNLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBRzVCO1FBVE0sV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFdBQUssR0FBVyxTQUFTLENBQUM7UUFDMUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUsxQixLQUFJLENBQUMsS0FBSyxHQUFHLHlCQUFlLENBQUMsU0FBUyxDQUFDOztJQUN6QyxDQUFDO0lBRUQsc0JBQVcsNkJBQU07YUFBakI7WUFDRSxJQUFJLE9BQWUsQ0FBQztZQUNwQixJQUFJLE9BQWUsQ0FBQztZQUVwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDckMsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLGdCQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLENBOUJzQyxvQkFBVSxHQThCaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDRCwwQ0FBc0M7QUFDdEMsK0NBQWdEO0FBQ2hELHdDQUEyQztBQUUzQztJQUFtQyx5QkFBVTtJQUszQyxlQUFZLElBQVksRUFBRSxLQUFhLEVBQUUsT0FBaUI7UUFBMUQsWUFDRSxrQkFBTSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUk1QjtRQVJNLFdBQUssR0FBVyxTQUFTLENBQUM7UUFDMUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUsxQixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZ0JBQUssRUFBRSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcseUJBQWUsQ0FBQyxLQUFLLENBQUM7O0lBQ3JDLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxDQVhrQyxvQkFBVSxHQVc1Qzs7Ozs7Ozs7Ozs7QUNmRCxtQ0FBd0I7QUFDeEIscUNBQTBCO0FBQzFCLHlDQUFzQztBQUd0QztJQUFBO0lBOENBLENBQUM7SUEzQ2UsY0FBSyxHQUFuQjtRQUFBLGlCQTBCQztRQXpCQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixHQUFHLENBQUMsQ0FBQyxJQUFNLEdBQUcsSUFBSSxjQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxhQUFHLENBQU8sR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELGtCQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBQyxDQUFnQjtZQUN0QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkIsRUFBRSxDQUFDLENBQUMsY0FBSSxDQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxrQkFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFVBQUMsQ0FBZ0I7WUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRW5CLEVBQUUsQ0FBQyxDQUFDLGNBQUksQ0FBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsa0JBQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxVQUFDLENBQWdCO1lBQ3ZDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFYSxlQUFNLEdBQXBCLFVBQXFCLEdBQVM7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVhLFlBQUcsR0FBakIsVUFBa0IsR0FBUztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRWEsZUFBTSxHQUFwQixVQUFxQixHQUFTO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFYSxhQUFJLEdBQWxCLFVBQW1CLEdBQVM7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQ2xERCxzQ0FBaUM7QUFDakMscUNBQWdDO0FBQ2hDLHdDQUE2QztBQUM3Qyw0Q0FVeUI7QUFDekIsdUNBQThCO0FBRTlCO0lBTUUsa0JBQVksT0FBaUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFlBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSx3QkFBSyxHQUFaO1FBQUEsaUJBTUM7UUFMQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUMsVUFBQyxLQUFhO2dCQUN4RCxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFTSwrQkFBWSxHQUFuQixVQUFvQixNQUFnQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8seUJBQU0sR0FBZCxVQUFlLEtBQWE7UUFBNUIsaUJBZ0NDO1FBL0JDLGFBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEIsR0FBRyxDQUFDLENBQWlCLFVBQWEsRUFBYixTQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhO1lBQTdCLElBQU0sTUFBTTtZQUNmLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxHQUFHLENBQUMsQ0FBaUIsVUFBa0IsRUFBbEIsU0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCO1lBQWxDLElBQU0sTUFBTTtZQUNmLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRixHQUFHLENBQUMsQ0FBQyxJQUFNLHdCQUF3QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNELElBQU0sb0JBQW9CLEdBQXlCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFNUYsRUFBRSxDQUFDLENBQUMsb0JBQW9CLFlBQVksb0JBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEdBQUcsQ0FBQyxDQUFDLElBQU0sY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNqRCxJQUFNLFVBQVUsR0FBZSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBRXhFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xELENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQyxVQUFDLEtBQWE7WUFDeEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxtQ0FBZ0IsR0FBeEIsVUFBeUIsVUFBc0I7UUFDN0MsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXBCLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUVoQyxFQUFFLENBQUMsQ0FBQyxVQUFVLFlBQVksd0JBQVMsQ0FBQyxDQUFDLENBQUM7WUFFcEMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUNuQixVQUFVLENBQUMsQ0FBQyxFQUNaLFVBQVUsQ0FBQyxDQUFDLEVBQ1osVUFBVSxDQUFDLEtBQUssRUFDaEIsVUFBVSxDQUFDLE1BQU0sQ0FDbEIsQ0FBQztZQUNKLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FDckIsVUFBVSxDQUFDLENBQUMsRUFDWixVQUFVLENBQUMsQ0FBQyxFQUNaLFVBQVUsQ0FBQyxLQUFLLEVBQ2hCLFVBQVUsQ0FBQyxNQUFNLENBQ2xCLENBQUM7WUFDSixDQUFDO1lBRUQsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFVBQVUsWUFBWSxxQkFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztnQkFBQyxNQUFNLENBQUM7WUFFbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbEYsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEIsQ0FBQztZQUVELE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxVQUFVLFlBQVksb0JBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoRCxHQUFHLENBQUMsQ0FBb0IsVUFBcUIsRUFBckIsZUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQXJCLGNBQXFCLEVBQXJCLElBQXFCO2dCQUF4QyxJQUFNLFNBQVM7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRDtZQUVELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLENBQUM7WUFFRCxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsVUFBVSxZQUFZLG9CQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxXQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBVSxDQUFDO1lBRWhGLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsQ0FBQztZQUVELE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxVQUFVLFlBQVksb0JBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRU8sbUNBQWdCLEdBQXhCLFVBQXlCLFVBQXNCO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksY0FBYyxTQUFPLENBQUM7WUFFMUIsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEtBQUsseUJBQWUsQ0FBQyxLQUFLO29CQUN4QixjQUFjLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLENBQUM7b0JBQy9CLEtBQUssQ0FBQztnQkFDUixLQUFLLHlCQUFlLENBQUMsSUFBSSxDQUFDO2dCQUMxQjtvQkFDRSxjQUFjLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztvQkFDbkMsS0FBSztZQUNULENBQUM7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0gsQ0FBQztJQUVPLHVDQUFvQixHQUE1QixVQUE2QixVQUFzQjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQzVNRDtJQUFBO0lBNEJBLENBQUM7SUF2QmUsVUFBSyxHQUFuQjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNaLENBQUM7SUFFYSxjQUFTLEdBQXZCLFVBQXdCLEtBQWE7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsc0JBQWtCLGlCQUFTO2FBQTNCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IsWUFBSTthQUF0QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLFdBQUc7YUFBckI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUNILFdBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQzVCRCxvQ0FBd0I7QUFFeEI7SUFLRTtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQkFBVyw4QkFBUTthQUFuQjtZQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQyxhQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2hDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMkJBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUssSUFBSSxDQUFDLE1BQU0sU0FBRTtRQUMxQixDQUFDOzs7T0FBQTtJQUVNLHdCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSx1QkFBSSxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBRyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVNLHVCQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwwQkFBTyxHQUFkLFVBQWUsS0FBYTtRQUMxQixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLGtDQUFlLEdBQXRCLFVBQXVCLEtBQWE7UUFDbEMsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLG1DQUFnQixHQUF2QjtRQUNFLElBQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUUzQixHQUFHLENBQUMsQ0FBZSxVQUFVLEVBQVYsU0FBSSxDQUFDLEtBQUssRUFBVixjQUFVLEVBQVYsSUFBVTtZQUF4QixJQUFNLElBQUk7WUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQ3RFRCxzQ0FBNEM7QUFDNUMseUNBQWdEO0FBQ2hELHdDQUEwQztBQUMxQyxzQ0FBaUM7QUFHakM7SUFLRTs7O09BR0c7SUFDSDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxvQkFBUSxDQUEyQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFbEMsYUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsY0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsaUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixzQkFBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLGtCQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVNLHVCQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLG9CQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTywyQkFBWSxHQUFwQjtRQUNFLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQkFBTSxHQUFiLFVBQWMsTUFBZ0I7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLDJCQUFZLEdBQW5CLFVBQW9CLE1BQWdCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7QUN0REQ7SUFJRTtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBVywwQkFBTzthQUFsQjtZQUNFLE1BQU0sQ0FBSyxJQUFJLENBQUMsUUFBUSxTQUFFO1FBQzVCLENBQUM7OztPQUFBO0lBRU0sbUJBQUcsR0FBVixVQUFXLFVBQWdDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVqRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7UUFFaEQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWMsY0FBc0I7UUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVqRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxtQkFBRyxHQUFWLFVBQVcsY0FBc0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUVoRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sc0JBQU0sR0FBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFTSx3QkFBUSxHQUFmLFVBQWdCLGNBQXNCO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0scUJBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFHTSw0QkFBWSxHQUFuQixVQUFvQixNQUFnQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7O0FDdERELHdDQUFvQztBQUVwQztJQUFBO0lBa0RBLENBQUM7SUEzQ2UsWUFBSyxHQUFuQixVQUFvQixNQUF5QjtRQUE3QyxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0JBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBQyxLQUFZLElBQVksQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFZO1lBQzdDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNoQyxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDbEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRWpDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQWtCLGVBQUs7YUFBdkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixnQkFBTTthQUF4QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLGdCQUFNO2FBQXhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFYSxTQUFFLEdBQWhCLFVBQWlCLFVBQW9CLEVBQUUsWUFBc0I7UUFDM0QsR0FBRyxDQUFDLENBQW9CLFVBQVUsRUFBVix5QkFBVSxFQUFWLHdCQUFVLEVBQVYsSUFBVTtZQUE3QixJQUFNLFNBQVM7WUFDbEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDLENBQVE7Z0JBQzFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVhLGVBQVEsR0FBdEIsVUFBdUIsT0FBaUI7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBMkIsT0FBTyxDQUFDO0lBQ25ELENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7QUNwREQseUNBQXNDO0FBQ3RDLHdDQUFvQztBQUNwQywwQ0FBc0M7QUFFdEM7SUFBQTtJQWlGQSxDQUFDO0lBM0VlLFdBQUssR0FBbkI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0JBQUssQ0FBQyxrQkFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsa0JBQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG9CQUFVLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQkFBa0IsZUFBTTthQUF4QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLGdCQUFPO2FBQXpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLGdCQUFPO2FBQXpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLG1CQUFVO2FBQTVCO1lBQ0UsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hGLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLHVCQUFjO2FBQWhDO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IseUJBQWdCO2FBQWxDO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0Isd0JBQWU7YUFBakM7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixxQkFBWTthQUE5QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLHVCQUFjO2FBQWhDO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0Isc0JBQWE7YUFBL0I7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVjLGdCQUFVLEdBQXpCO1FBQUEsaUJBeUJDO1FBeEJDLGtCQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBQyxDQUFhO1lBQ3JDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDM0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILGtCQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxFQUFFLFVBQUMsQ0FBYTtZQUNoRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkIsTUFBTSxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFLLENBQUM7b0JBQ0osS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDMUIsS0FBSyxDQUFDO2dCQUNSLEtBQUssQ0FBQztvQkFDSixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM1QixLQUFLLENBQUM7Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzNCLEtBQUssQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILGtCQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsVUFBQyxDQUFhO1lBQ3hDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7QUNyRkQsc0NBQWlEO0FBRWpEO0lBR0UsZ0JBQVksS0FBWTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUV2QixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sdUJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLGNBQUssQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsY0FBSyxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7O0FDbkJELHNDQUFzRztBQUV0RztJQU1FLGlCQUFZLEtBQVk7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksY0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksYUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksa0JBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxjQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksY0FBSyxDQUFDLEVBQUUsRUFBRSxlQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFLLENBQUMsRUFBRSxFQUFFLGVBQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQUssQ0FBQyxHQUFHLEVBQUUsZUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksY0FBSyxDQUFDLEdBQUcsRUFBRSxlQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLHdCQUFNLEdBQWI7UUFDRSxFQUFFLENBQUMsQ0FBQyxpQkFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLGlCQUFRLENBQUMsR0FBRyxDQUFDLGFBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUUxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7QUN0RUQsc0NBQTJGO0FBRTNGO0lBS0UsbUJBQVksS0FBWTtRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGVBQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRXZCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSwwQkFBTSxHQUFiO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxpQkFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksaUJBQVEsQ0FBQyxHQUFHLENBQUMsYUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxpQkFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksaUJBQVEsQ0FBQyxHQUFHLENBQUMsYUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUNYLGtCQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxlQUFNLENBQUMsRUFBRSxFQUFFLGNBQUssQ0FBQyxNQUFNLENBQUMsQ0FDcEUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0QsSUFBTSxLQUFLLEdBQUcsSUFBSSxjQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGVBQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUNsQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7O0FDNUNELHNDQUE0RDtBQUU1RDtJQUdFLG9CQUFZLEtBQVk7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGNBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV6QyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sMkJBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVEsYUFBSSxDQUFDLEdBQUssQ0FBQztJQUN6QyxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7OztBQ2xCRCwwQ0FBb0M7QUFJbEMsb0JBSkssbUJBQVMsQ0FJTDtBQUhYLGdEQUFnRDtBQUk5QywwQkFKSyx5QkFBZSxDQUlMOzs7Ozs7Ozs7O0FDTGpCLDRDQUFnRTtBQUVoRTtJQUFBO0lBbURBLENBQUM7SUFsRGUsb0JBQVUsR0FBeEIsVUFBeUIsUUFBbUIsRUFBRSxRQUFtQjtRQUMvRCxNQUFNLENBQUMsQ0FDTCxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUs7WUFDeEMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTTtZQUN6QyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FDMUMsQ0FBQztJQUNKLENBQUM7SUFFYSx1QkFBYSxHQUEzQixVQUE0QixRQUFnQixFQUFFLFFBQWdCO1FBQzVELElBQU0sRUFBRSxHQUFXLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFNLEVBQUUsR0FBVyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUUvQyxNQUFNLENBQUMsQ0FDTCxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLENBQzFDLENBQUM7SUFDSixDQUFDO0lBRWEsaUJBQU8sR0FBckIsVUFBc0IsUUFBMEIsRUFBRSxRQUEwQjtRQUMxRSxFQUFFLENBQUMsQ0FBQyxRQUFRLFlBQVkscUJBQU0sSUFBSSxRQUFRLFlBQVkscUJBQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksRUFBRSxTQUFRLENBQUM7WUFDZixJQUFJLEVBQUUsU0FBUSxDQUFDO1lBQ2YsSUFBSSxFQUFFLFNBQVEsQ0FBQztZQUNmLElBQUksRUFBRSxTQUFRLENBQUM7WUFFZixFQUFFLENBQUMsQ0FBQyxRQUFRLFlBQVkscUJBQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNuQixFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLFlBQVkscUJBQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNuQixFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BCLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FDVCxFQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxFQUNyRCxFQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUNqRSxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JERCwwQ0FBc0M7QUFDdEMsK0NBQWdEO0FBQ2hELHdDQUFvQztBQUVwQztJQUFtQyx5QkFBVTtJQUszQyxlQUFZLElBQVksRUFBRSxLQUFhLEVBQUUsT0FBaUI7UUFBMUQsWUFDRSxrQkFBTSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQVU1QjtRQVJDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU1QyxLQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUNuQyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxLQUFLLEdBQUcseUJBQWUsQ0FBQyxLQUFLLENBQUM7O0lBQ3JDLENBQUM7SUFFRCxzQkFBVyx3QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0JBQUc7YUFBZDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7YUFFRCxVQUFlLEdBQVc7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QixDQUFDOzs7T0FOQTtJQVFELHNCQUFXLHdCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFTSxzQkFBTSxHQUFiLFVBQWMsR0FBVztRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsc0JBQVcseUJBQU07YUFBakI7WUFDRSxJQUFJLE9BQWUsQ0FBQztZQUNwQixJQUFJLE9BQWUsQ0FBQztZQUVwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxnQkFBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUNILFlBQUM7QUFBRCxDQUFDLENBMURrQyxvQkFBVSxHQTBENUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREQ7SUFLRSxlQUFZLElBQVk7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLG1CQUFHLEdBQVYsVUFBVyxVQUFzQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRW5FLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUVoRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLG1CQUFHLEdBQVYsVUFBVyxjQUFzQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxLQUFLLFNBQVMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFakUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLHNCQUFNLEdBQWI7UUFDRSxNQUFNLGNBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtJQUNoQyxDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLGNBQXNCO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssU0FBUyxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVsRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7QUN2Q0QsSUFBSyxJQTRHSjtBQTVHRCxXQUFLLElBQUk7SUFDUCx5QkFBaUI7SUFDakIseUJBQWlCO0lBQ2pCLHlCQUFpQjtJQUNqQix5QkFBaUI7SUFDakIseUJBQWlCO0lBQ2pCLHlCQUFpQjtJQUNqQix5QkFBaUI7SUFDakIseUJBQWlCO0lBQ2pCLHlCQUFpQjtJQUNqQix5QkFBaUI7SUFFakIscUJBQWE7SUFDYixxQkFBYTtJQUNiLHFCQUFhO0lBQ2IscUJBQWE7SUFDYixxQkFBYTtJQUNiLHFCQUFhO0lBQ2IscUJBQWE7SUFDYixxQkFBYTtJQUNiLHFCQUFhO0lBQ2IscUJBQWE7SUFDYixxQkFBYTtJQUNiLHFCQUFhO0lBQ2IscUJBQWE7SUFDYixxQkFBYTtJQUNiLHFCQUFhO0lBQ2IscUJBQWE7SUFDYixxQkFBYTtJQUNiLHFCQUFhO0lBQ2IscUJBQWE7SUFDYixxQkFBYTtJQUNiLHFCQUFhO0lBQ2IscUJBQWE7SUFDYixxQkFBYTtJQUNiLHFCQUFhO0lBQ2IscUJBQWE7SUFDYixxQkFBYTtJQUViLHlCQUFpQjtJQUVqQixpQkFBUztJQUNULGlCQUFTO0lBQ1QsaUJBQVM7SUFDVCxpQkFBUztJQUNULGlCQUFTO0lBQ1QsaUJBQVM7SUFDVCxpQkFBUztJQUNULGlCQUFTO0lBQ1QsaUJBQVM7SUFDVCxtQkFBVztJQUNYLG1CQUFXO0lBQ1gsbUJBQVc7SUFFWCx5QkFBaUI7SUFDakIseUJBQWlCO0lBRWpCLHFCQUFhO0lBQ2IsbUJBQVc7SUFDWCx5QkFBaUI7SUFDakIsNkJBQXFCO0lBRXJCLDJCQUFtQjtJQUNuQixxQ0FBNkI7SUFDN0IseUNBQWlDO0lBQ2pDLHlDQUFpQztJQUNqQywrQkFBdUI7SUFDdkIsbUNBQTJCO0lBQzNCLHVDQUErQjtJQUMvQiwyQkFBbUI7SUFDbkIsMkJBQW1CO0lBQ25CLDJCQUFtQjtJQUNuQiwyQkFBbUI7SUFDbkIsMkJBQW1CO0lBQ25CLDJCQUFtQjtJQUNuQiwyQkFBbUI7SUFDbkIsMkJBQW1CO0lBQ25CLDJCQUFtQjtJQUNuQiwyQkFBbUI7SUFFbkIsMkJBQW1CO0lBQ25CLCtCQUF1QjtJQUN2QiwrQkFBdUI7SUFDdkIsaUNBQXlCO0lBRXpCLCtCQUF1QjtJQUN2Qix1QkFBZTtJQUNmLHVCQUFlO0lBQ2YsK0JBQXVCO0lBQ3ZCLG1DQUEyQjtJQUMzQixxQ0FBNkI7SUFDN0IsdUJBQWU7SUFDZiwrQkFBdUI7SUFDdkIsdUJBQWU7SUFDZix5QkFBaUI7SUFDakIsdUJBQWU7SUFFZix1QkFBZTtJQUNmLCtCQUF1QjtJQUN2QixpQ0FBeUI7SUFDekIsNkJBQXFCO0lBQ3JCLG1CQUFXO0lBQ1gsbUNBQTJCO0lBQzNCLHFDQUE2QjtJQUM3Qiw2QkFBcUI7SUFDckIsK0JBQXVCO0lBQ3ZCLDJCQUFtQjtJQUNuQiw2QkFBcUI7QUFDdkIsQ0FBQyxFQTVHSSxJQUFJLEtBQUosSUFBSSxRQTRHUjtBQUFBLENBQUM7QUFFRixrQkFBZSxJQUFJLENBQUM7Ozs7Ozs7Ozs7QUM5R3BCLElBQUssZUFHSjtBQUhELFdBQUssZUFBZTtJQUNsQixxREFBSTtJQUNKLHVEQUFLO0FBQ1AsQ0FBQyxFQUhJLGVBQWUsS0FBZixlQUFlLFFBR25CO0FBQUEsQ0FBQztBQUVGLGtCQUFlLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUNIL0I7SUFBQTtJQVlBLENBQUM7SUFUZSxpQkFBSyxHQUFuQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQTZCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFYSx1QkFBVyxHQUF6QixVQUEwQixJQUFZLEVBQUUsSUFBVTtRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBTSxJQUFJLENBQUMsUUFBUSxXQUFNLElBQUksQ0FBQyxRQUFVLENBQUM7UUFFMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM5QyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6InJ5dGhtb29zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVlOWUzYWY5ZTEwNTMyNWZiNTRlIiwiZW51bSBHYW1lT2JqZWN0VHlwZXMge1xyXG4gIFJFQ1RBTkdMRSxcclxuICBDSVJDTEUsXHJcbiAgTEFCRUwsXHJcbiAgU0hBUEUsXHJcbiAgSU1BR0UsXHJcbiAgT1RIRVJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVPYmplY3RUeXBlcztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdFR5cGVzLnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcbmltcG9ydCB7IFJvdGF0aW9uQ2VudGVycyB9IGZyb20gJy4uL3BoeXNpY3MnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF90eXBlOiBHYW1lT2JqZWN0VHlwZXM7XHJcbiAgcHJvdGVjdGVkIF9wb2ludDogUG9pbnQ7XHJcbiAgcHJvdGVjdGVkIF9yb3RhdGlvbjogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfcm90YXRpb25DZW50ZXI6IFJvdGF0aW9uQ2VudGVycztcclxuICBwcm90ZWN0ZWQgX3NjYWxlOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF91cGRhdGU6IEZ1bmN0aW9uO1xyXG4gIHByb3RlY3RlZCBfY29udGV4dFNldHRpbmdzOiAoKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCl8bnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX3BvaW50ID0gcG9pbnQgPyBwb2ludCA6IG5ldyBQb2ludCgwLCAwKTtcclxuICAgIFxyXG4gICAgaWYgKHZpc2libGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBwb2ludCA/IHRydWUgOiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcm90YXRpb24gPSAwO1xyXG4gICAgdGhpcy5fcm90YXRpb25DZW50ZXIgPSBSb3RhdGlvbkNlbnRlcnMuU0VMRjtcclxuICAgIHRoaXMuX3NjYWxlID0gMTtcclxuXHJcbiAgICB0aGlzLl91cGRhdGUgPSAoKSA9PiB7fTtcclxuXHJcbiAgICB0aGlzLl9jb250ZXh0U2V0dGluZ3MgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuT1RIRVI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHR5cGUoKTogR2FtZU9iamVjdFR5cGVzIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwb2ludCgpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9pbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBvaW50Lng7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBzZXQgeCh4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3BvaW50LnggPSB4O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wb2ludC55O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCB5KHk6IG51bWJlcikge1xyXG4gICAgdGhpcy5fcG9pbnQueSA9IHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGNlbnRlcigpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMuX3BvaW50LngsIHRoaXMuX3BvaW50LnkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCByb3RhdGlvbigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCByb3RhdGlvbihkZWdyZWVzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3JvdGF0aW9uID0gZGVncmVlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcm90YXRpb25DZW50ZXIoKTogUm90YXRpb25DZW50ZXJzIHtcclxuICAgIHJldHVybiB0aGlzLl9yb3RhdGlvbkNlbnRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgcm90YXRpb25DZW50ZXIocm90YXRpb25DZW50ZXI6IFJvdGF0aW9uQ2VudGVycykge1xyXG4gICAgdGhpcy5fcm90YXRpb25DZW50ZXIgPSByb3RhdGlvbkNlbnRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgc2NhbGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zY2FsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgc2NhbGUoc2NhbGU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2NhbGUgPSBzY2FsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgdXBkYXRlKCk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLl91cGRhdGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLl91cGRhdGUgPSB1cGRhdGU7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBnZXQgcmVuZGVyQ29udGV4dFNldHRpbmdzKCk6IChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQge1xyXG4gICAgcmV0dXJuIDwoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkPnRoaXMuX2NvbnRleHRTZXR0aW5ncztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgcmVuZGVyQ29udGV4dFNldHRpbmdzKGNvbnRleHRTZXR0aW5nczogKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5fY29udGV4dFNldHRpbmdzID0gY29udGV4dFNldHRpbmdzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBvaW50KHBvaW50OiBQb2ludCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9pbnQgPSBwb2ludDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNSZW5kZXJDb250ZXh0U2V0dGluZ3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dFNldHRpbmdzICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJvdGF0ZShkZWdyZWVzOiBudW1iZXIsIGNlbnRlcj86IFJvdGF0aW9uQ2VudGVycyk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm90YXRpb24gPSBkZWdyZWVzO1xyXG4gICAgdGhpcy5yb3RhdGlvbkNlbnRlciA9IGNlbnRlciAhPT0gdW5kZWZpbmVkID8gY2VudGVyIDogUm90YXRpb25DZW50ZXJzLlNFTEY7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U2NhbGUoc2NhbGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fc2NhbGUgPSBzY2FsZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvR2FtZU9iamVjdC50cyIsImltcG9ydCBGb250IGZyb20gJy4vRm9udCc7XHJcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsJztcclxuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoJztcclxuaW1wb3J0IFBhdGhQb2ludCBmcm9tICcuL1BhdGhQb2ludCc7XHJcbmltcG9ydCBQb2ludCBmcm9tICcuL1BvaW50JztcclxuaW1wb3J0IFRleHRNZWFzdXJlIGZyb20gJy4vVGV4dE1lYXN1cmUnO1xyXG5cclxuZXhwb3J0IHtcclxuICBGb250LFxyXG4gIE1vZGVsLFxyXG4gIFBhdGgsXHJcbiAgUGF0aFBvaW50LFxyXG4gIFBvaW50LFxyXG4gIFRleHRNZWFzdXJlXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JhcGhpY3MvaW5kZXgudHMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9SZW5kZXJlcic7XHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4nO1xyXG5cclxuZXhwb3J0IHtcclxuICBSZW5kZXJlcixcclxuICBTY3JlZW5cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yZW5kZXJpbmcvaW5kZXgudHMiLCJleHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2lucHV0cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGh5c2ljcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyaW5nJztcclxuZXhwb3J0ICogZnJvbSAnLi9yb290JztcclxuZXhwb3J0ICogZnJvbSAnLi90aW1pbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbmRleC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0U3RhdGUge1xyXG4gIHByaXZhdGUgX3ByZXNzZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fcHJlc3NlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIF9zd2l0Y2goKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wcmVzc2VkID0gIXRoaXMuX3ByZXNzZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNVcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVzc2VkID09PSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0Rvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlc3NlZCA9PT0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvSW5wdXRTdGF0ZS50cyIsImltcG9ydCBUaW1lIGZyb20gJy4vVGltZSc7XHJcbmltcG9ydCBub3cgZnJvbSAnLi9ub3cnO1xyXG5pbXBvcnQgUHJvZmlsZXIgZnJvbSAnLi9Qcm9maWxlcic7XHJcblxyXG5leHBvcnQge1xyXG4gIFRpbWUsXHJcbiAgbm93LFxyXG4gIFByb2ZpbGVyXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdGltaW5nL2luZGV4LnRzIiwiaW1wb3J0IENpcmNsZSBmcm9tICcuL0NpcmNsZSc7XHJcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vR2FtZU9iamVjdCc7XHJcbmltcG9ydCBHYW1lT2JqZWN0UmVzb2x2YWJsZSBmcm9tICcuL0dhbWVPYmplY3RSZXNvbHZhYmxlJztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCBHcm91cCBmcm9tICcuL0dyb3VwJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbCc7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9SZWN0YW5nbGUnO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9TaGFwZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIENpcmNsZSxcclxuICBHYW1lT2JqZWN0LFxyXG4gIEdhbWVPYmplY3RSZXNvbHZhYmxlLFxyXG4gIEdhbWVPYmplY3RUeXBlcyxcclxuICBHcm91cCxcclxuICBJbWFnZSxcclxuICBMYWJlbCxcclxuICBSZWN0YW5nbGUsXHJcbiAgU2hhcGVcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvaW5kZXgudHMiLCJpbXBvcnQgSW5wdXRTdGF0ZSBmcm9tICcuL0lucHV0U3RhdGUnO1xyXG5pbXBvcnQgS2V5IGZyb20gJy4vS2V5JztcclxuaW1wb3J0IEtleWJvYXJkIGZyb20gJy4vS2V5Ym9hcmQnO1xyXG5pbXBvcnQgS2V5cyBmcm9tICcuL0tleXMnO1xyXG5pbXBvcnQgTW91c2UgZnJvbSAnLi9Nb3VzZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIElucHV0U3RhdGUsXHJcbiAgS2V5LFxyXG4gIEtleWJvYXJkLFxyXG4gIEtleXMsXHJcbiAgTW91c2VcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvaW5kZXgudHMiLCJpbXBvcnQgS2V5cyBmcm9tICcuL0tleXMnO1xyXG5pbXBvcnQgSW5wdXRTdGF0ZSBmcm9tICcuL0lucHV0U3RhdGUnO1xyXG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5IHtcclxuICBwdWJsaWMgcmVhZG9ubHkga2V5OiBLZXlzO1xyXG4gIHB1YmxpYyBfc3RhdGU6IElucHV0U3RhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtleTogS2V5cykge1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaXNVcCgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9LZXkudHMiLCJmdW5jdGlvbiBnZXROb3coKTogKCkgPT4gbnVtYmVyIHtcclxuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdztcclxuICB9XHJcblxyXG4gIHJldHVybiBEYXRlLm5vdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Tm93KCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdGltaW5nL25vdy50cyIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgR2FtZSxcclxuICBTY2VuZVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Jvb3QvaW5kZXgudHMiLCJpbXBvcnQgeyBHYW1lLCBSZWN0YW5nbGUsIFNjcmVlbiwgUG9pbnQsIENpcmNsZSwgTW91c2UsIENvbGxpc2lvbiB9IGZyb20gJy4vZW5naW5lJztcclxuXHJcbmltcG9ydCBGUFNDb3VudGVyIGZyb20gJy4vdmlzdWFscy9GUFNDb3VudGVyJztcclxuaW1wb3J0IEN1cnNvciBmcm9tICcuL3Zpc3VhbHMvQ3Vyc29yJztcclxuaW1wb3J0IEhpdEtleXMgZnJvbSAnLi92aXN1YWxzL0hpdEtleXMnO1xyXG5pbXBvcnQgSGl0Q2lyY2xlIGZyb20gJy4vdmlzdWFscy9IaXRDaXJjbGUnO1xyXG5cclxuY29uc3QgZyA9IG5ldyBHYW1lKCk7XHJcblxyXG4vLyBCYWNrZ3JvdW5kXHJcbmNvbnN0IGJnID0gbmV3IFJlY3RhbmdsZSgnYmFja2dyb3VuZCcsIG5ldyBQb2ludCgwLCAwKSwgdHJ1ZSk7XHJcbmJnLmNvbG9yID0gJyMwMDAwMDAnO1xyXG5iZy53aWR0aCA9IFNjcmVlbi53aWR0aDtcclxuYmcuaGVpZ2h0ID0gU2NyZWVuLmhlaWdodDtcclxuZy5zY2VuZS5hZGQoYmcpO1xyXG5cclxuLy8gR2FtZSBlbGVtZW50c1xyXG5jb25zdCBoaXRDaXJjbGUgPSBuZXcgSGl0Q2lyY2xlKGcuc2NlbmUpO1xyXG5jb25zdCBoaXRLZXlzID0gbmV3IEhpdEtleXMoZy5zY2VuZSk7XHJcbmNvbnN0IGN1cnNvciA9IG5ldyBDdXJzb3IoZy5zY2VuZSk7XHJcbmNvbnN0IGZwc2NvdW50ZXIgPSBuZXcgRlBTQ291bnRlcihnLnNjZW5lKTtcclxuXHJcbi8vIFVwZGF0ZSBiZyBzaXplIG9uIHJlc2l6ZVxyXG5TY3JlZW4ub25SZXNpemUoKCkgPT4ge1xyXG4gIGJnLndpZHRoID0gU2NyZWVuLndpZHRoO1xyXG4gIGJnLmhlaWdodCA9IFNjcmVlbi5oZWlnaHQ7XHJcbn0pO1xyXG5cclxuLy8gVXBkYXRlIGFsbCBnYW1lIG9iamVjdHNcclxuZy5yZW5kZXJlci5hdHRhY2hVcGRhdGUoKCkgPT4ge1xyXG4gIGlmIChDb2xsaXNpb24uY2lyY2xlQ29sbGlkZShoaXRDaXJjbGUuZWxlbWVudCwgbmV3IENpcmNsZSgnJywgTW91c2UuY3Vyc29yKSkpIHtcclxuICAgIGhpdENpcmNsZS5lbGVtZW50LmNvbG9yID0gJyMxREJCRkYnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBoaXRDaXJjbGUuZWxlbWVudC5jb2xvciA9ICcjMDEzM0REJztcclxuICB9XHJcblxyXG4gIGZwc2NvdW50ZXIudXBkYXRlKCk7XHJcbiAgaGl0Q2lyY2xlLnVwZGF0ZSgpO1xyXG4gIGN1cnNvci51cGRhdGUoKTtcclxuICBoaXRLZXlzLnVwZGF0ZSgpO1xyXG59KTtcclxuXHJcbmcuc3RhcnQoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHNpemU6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgcHVibGljIGZpbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcG9pbnQ/OiBQb2ludCwgdmlzaWJsZT86IGJvb2xlYW4pIHtcclxuICAgIHN1cGVyKG5hbWUsIHBvaW50LCB2aXNpYmxlKTtcclxuXHJcbiAgICB0aGlzLl90eXBlID0gR2FtZU9iamVjdFR5cGVzLkNJUkNMRTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLW9iamVjdHMvQ2lyY2xlLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9udCB7XHJcbiAgcHVibGljIHJlYWRvbmx5IGZvbnROYW1lOiBzdHJpbmc7XHJcbiAgcHVibGljIGZvbnRTaXplOiBudW1iZXI7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGZvbnROYW1lOiBzdHJpbmcgPSAnQXJpYWwnLCBmb250U2l6ZTogbnVtYmVyID0gMTIsIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCcpIHtcclxuICAgIHRoaXMuZm9udE5hbWUgPSBmb250TmFtZTtcclxuICAgIHRoaXMuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9Gb250LnRzIiwiaW1wb3J0IFBhdGhQb2ludCBmcm9tICcuL1BhdGhQb2ludCc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4vUGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XHJcbiAgcHJpdmF0ZSBfcGF0aDogUGF0aDtcclxuXHJcbiAgY29uc3RydWN0b3IocGF0aDogUGF0aCA9IFtdKSB7XHJcbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGF0aCgpOiBQYXRoIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5fcGF0aF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHBhdGgocGF0aDogUGF0aCkge1xyXG4gICAgdGhpcy5fcGF0aCA9IFsuLi5wYXRoXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQb2ludChpbmRleDogbnVtYmVyKTogUGF0aFBvaW50fG51bGwge1xyXG4gICAgaWYgKGluZGV4IDwgdGhpcy5fcGF0aC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICB0aGlzLl9wYXRoW2luZGV4XVswXSxcclxuICAgICAgICB0aGlzLl9wYXRoW2luZGV4XVsxXVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBvaW50KGluZGV4OiBudW1iZXIsIHBhdGhQb2ludDogUGF0aFBvaW50KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoaW5kZXggPCB0aGlzLl9wYXRoLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9wYXRoW2luZGV4XSA9IFtcclxuICAgICAgICBwYXRoUG9pbnRbMF0sXHJcbiAgICAgICAgcGF0aFBvaW50WzFdXHJcbiAgICAgIF07XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkUG9pbnQocGF0aFBvaW50OiBQYXRoUG9pbnQpIHtcclxuICAgIHRoaXMuX3BhdGgucHVzaChwYXRoUG9pbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVBvaW50KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuX3BhdGgubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3BhdGguc2xpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL01vZGVsLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyYXBoaWNzL1BvaW50LnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50LCBGb250LCBUZXh0TWVhc3VyZSB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHRleHQ6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgZm9udDogRm9udDtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgc3VwZXIobmFtZSwgcG9pbnQsIHZpc2libGUpO1xyXG5cclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuTEFCRUw7XHJcblxyXG4gICAgdGhpcy5mb250ID0gbmV3IEZvbnQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY2VudGVyKCk6IFBvaW50IHtcclxuICAgIGxldCBjZW50ZXJYOiBudW1iZXIgPSBUZXh0TWVhc3VyZS5tZWFzdXJlVGV4dCh0aGlzLnRleHQsIHRoaXMuZm9udCk7XHJcbiAgICBsZXQgY2VudGVyWTogbnVtYmVyID0gdGhpcy5mb250LmZvbnRTaXplO1xyXG5cclxuICAgIGlmIChjZW50ZXJYID09PSAwKSB7XHJcbiAgICAgIGNlbnRlclggPSB0aGlzLnBvaW50Lng7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZW50ZXJYID0gdGhpcy5wb2ludC54ICsgY2VudGVyWCAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNlbnRlclkgPT09IDApIHtcclxuICAgICAgY2VudGVyWSA9IHRoaXMucG9pbnQueTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNlbnRlclkgPSB0aGlzLnBvaW50LnkgKyBjZW50ZXJZIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFBvaW50KGNlbnRlclgsIGNlbnRlclkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZvbnQoZm9udDogRm9udCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb250ID0gZm9udDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGb250U2l6ZShmb250U2l6ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvbnQuZm9udFNpemUgPSBmb250U2l6ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGb250Q29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5mb250LmNvbG9yID0gY29sb3I7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0xhYmVsLnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IEdhbWVPYmplY3RUeXBlcyBmcm9tICcuL0dhbWVPYmplY3RUeXBlcyc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzAwMDAwMCc7XHJcbiAgcHVibGljIGZpbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5SRUNUQU5HTEU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGNlbnRlcigpOiBQb2ludCB7XHJcbiAgICBsZXQgY2VudGVyWDogbnVtYmVyO1xyXG4gICAgbGV0IGNlbnRlclk6IG51bWJlcjtcclxuXHJcbiAgICBpZiAodGhpcy53aWR0aCA9PT0gMCkge1xyXG4gICAgICBjZW50ZXJYID0gdGhpcy54O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2VudGVyWCA9IHRoaXMueCArIHRoaXMud2lkdGggLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmhlaWdodCA9PT0gMCkge1xyXG4gICAgICBjZW50ZXJZID0gdGhpcy55O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2VudGVyWSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFBvaW50KGNlbnRlclgsIGNlbnRlclkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9SZWN0YW5nbGUudHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQsIE1vZGVsIH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbW9kZWw6IE1vZGVsO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyMwMDAwMDAnO1xyXG4gIHB1YmxpYyBmaWxsOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb2ludD86IFBvaW50LCB2aXNpYmxlPzogYm9vbGVhbikge1xyXG4gICAgc3VwZXIobmFtZSwgcG9pbnQsIHZpc2libGUpO1xyXG5cclxuICAgIHRoaXMubW9kZWwgPSBuZXcgTW9kZWwoKTtcclxuICAgIHRoaXMuX3R5cGUgPSBHYW1lT2JqZWN0VHlwZXMuU0hBUEU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL1NoYXBlLnRzIiwiaW1wb3J0IEtleSBmcm9tICcuL0tleSc7XHJcbmltcG9ydCBLZXlzIGZyb20gJy4vS2V5cyc7XHJcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4uL3JlbmRlcmluZyc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBLZXlib2FyZCB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2tleXM6IENvbGxlY3Rpb248S2V5PjtcclxuICBcclxuICBwdWJsaWMgc3RhdGljIF9pbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fa2V5cyA9IHt9O1xyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBLZXlzKSB7XHJcbiAgICAgIHRoaXMuX2tleXNba2V5XSA9IG5ldyBLZXkoPEtleXM+a2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBTY3JlZW4ub24oWydrZXlkb3duJ10sIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChLZXlzWzxhbnk+ZS5jb2RlXSAmJiB0aGlzLl9rZXlzW2UuY29kZV0uaXNVcCgpKSB7XHJcbiAgICAgICAgdGhpcy5fa2V5c1tlLmNvZGVdLl9zdGF0ZS5fc3dpdGNoKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFNjcmVlbi5vbihbJ2tleXVwJ10sIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChLZXlzWzxhbnk+ZS5jb2RlXSAmJiB0aGlzLl9rZXlzW2UuY29kZV0uaXNEb3duKCkpIHtcclxuICAgICAgICB0aGlzLl9rZXlzW2UuY29kZV0uX3N0YXRlLl9zd2l0Y2goKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgU2NyZWVuLm9uKFsna2V5cHJlc3MnXSwgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEtleShrZXk6IEtleXMpOiBLZXkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2tleXNba2V5XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMga2V5KGtleTogS2V5cyk6IEtleSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXkoa2V5KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNEb3duKGtleTogS2V5cyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2tleXNba2V5XS5pc0Rvd24oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNVcChrZXk6IEtleXMpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9rZXlzW2tleV0uaXNVcCgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9LZXlib2FyZC50cyIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZ3JhcGhpY3MnO1xyXG5pbXBvcnQgeyBUaW1lIH0gZnJvbSAnLi4vdGltaW5nJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9yb290JztcclxuaW1wb3J0IHsgUm90YXRpb25DZW50ZXJzIH0gZnJvbSAnLi4vcGh5c2ljcyc7XHJcbmltcG9ydCB7XHJcbiAgR2FtZU9iamVjdCxcclxuICBHYW1lT2JqZWN0UmVzb2x2YWJsZSxcclxuICBHYW1lT2JqZWN0VHlwZXMsXHJcbiAgR3JvdXAsXHJcbiAgUmVjdGFuZ2xlLFxyXG4gIENpcmNsZSxcclxuICBTaGFwZSxcclxuICBMYWJlbCxcclxuICBJbWFnZVxyXG59IGZyb20gJy4uL2dhbWUtb2JqZWN0cyc7XHJcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xyXG4gIHB1YmxpYyBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgcHVibGljIHNjZW5lOiBTY2VuZTtcclxuICBwcml2YXRlIGFuaW1hdGlvbkZyYW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdXBkYXRlczogRnVuY3Rpb25bXTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IDA7XHJcbiAgICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lKCk7XHJcbiAgICB0aGlzLl91cGRhdGVzID0gW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uRnJhbWUpIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnJhbWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKGZyYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXR0YWNoVXBkYXRlKHVwZGF0ZTogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuX3VwZGF0ZXMucHVzaCh1cGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoZnJhbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgVGltZS5fc2V0RnJhbWUoZnJhbWUpO1xyXG5cclxuICAgIGZvciAoY29uc3QgdXBkYXRlIG9mIHRoaXMuX3VwZGF0ZXMpIHtcclxuICAgICAgdXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCB1cGRhdGUgb2YgdGhpcy5zY2VuZS51cGRhdGVzKSB7XHJcbiAgICAgIHVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCwgdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZ2FtZU9iamVjdFJlc29sdmFibGVOYW1lIGluIHRoaXMuc2NlbmUuZ2V0QWxsKCkpIHtcclxuICAgICAgY29uc3QgZ2FtZU9iamVjdFJlc29sdmFibGUgPSA8R2FtZU9iamVjdFJlc29sdmFibGU+dGhpcy5zY2VuZS5nZXQoZ2FtZU9iamVjdFJlc29sdmFibGVOYW1lKTtcclxuXHJcbiAgICAgIGlmIChnYW1lT2JqZWN0UmVzb2x2YWJsZSBpbnN0YW5jZW9mIEdyb3VwKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBnYW1lT2JqZWN0TmFtZSBpbiB0aGlzLnNjZW5lLmdldEFsbCgpKSB7XHJcbiAgICAgICAgICBjb25zdCBnYW1lT2JqZWN0ID0gPEdhbWVPYmplY3Q+Z2FtZU9iamVjdFJlc29sdmFibGUuZ2V0KGdhbWVPYmplY3ROYW1lKTtcclxuXHJcbiAgICAgICAgICB0aGlzLnJlbmRlckdhbWVPYmplY3QoZ2FtZU9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0UmVuZGVyQ29udGV4dChnYW1lT2JqZWN0UmVzb2x2YWJsZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJHYW1lT2JqZWN0KGdhbWVPYmplY3RSZXNvbHZhYmxlKTtcclxuICAgICAgICB0aGlzLnJlc3RvcmVSZW5kZXJDb250ZXh0KGdhbWVPYmplY3RSZXNvbHZhYmxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZyYW1lOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXIoZnJhbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckdhbWVPYmplY3QoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IHZvaWQge1xyXG4gICAgZ2FtZU9iamVjdC51cGRhdGUoKTtcclxuXHJcbiAgICBpZiAoIWdhbWVPYmplY3QudmlzaWJsZSkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgUmVjdGFuZ2xlKSB7XHJcblxyXG4gICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdhbWVPYmplY3QuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KFxyXG4gICAgICAgICAgZ2FtZU9iamVjdC54LFxyXG4gICAgICAgICAgZ2FtZU9iamVjdC55LFxyXG4gICAgICAgICAgZ2FtZU9iamVjdC53aWR0aCxcclxuICAgICAgICAgIGdhbWVPYmplY3QuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgZ2FtZU9iamVjdC54LFxyXG4gICAgICAgICAgZ2FtZU9iamVjdC55LFxyXG4gICAgICAgICAgZ2FtZU9iamVjdC53aWR0aCxcclxuICAgICAgICAgIGdhbWVPYmplY3QuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgQ2lyY2xlKSB7XHJcbiAgICAgIGlmIChnYW1lT2JqZWN0LnNpemUgPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jb250ZXh0LmFyYyhnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSwgZ2FtZU9iamVjdC5zaXplIC8gMiwgMCwgMiAqIE1hdGguUEkpO1xyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QuZmlsbCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFNoYXBlKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSk7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IHBhdGhQb2ludCBvZiBnYW1lT2JqZWN0Lm1vZGVsLnBhdGgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHBhdGhQb2ludFswXSwgcGF0aFBvaW50WzFdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGdhbWVPYmplY3QuZmlsbCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBnYW1lT2JqZWN0LmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gZ2FtZU9iamVjdC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIExhYmVsKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5mb250ID0gYCR7Z2FtZU9iamVjdC5mb250LmZvbnRTaXplfXB4ICR7Z2FtZU9iamVjdC5mb250LmZvbnROYW1lfWA7XHJcblxyXG4gICAgICBpZiAoZ2FtZU9iamVjdC5maWxsKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGdhbWVPYmplY3QuZm9udC5jb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoZ2FtZU9iamVjdC50ZXh0LCBnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gZ2FtZU9iamVjdC5mb250LmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VUZXh0KGdhbWVPYmplY3QudGV4dCwgZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBJbWFnZSkge1xyXG4gICAgICBpZiAoZ2FtZU9iamVjdC5yZWFkeSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoZ2FtZU9iamVjdC5pbWFnZSwgZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFJlbmRlckNvbnRleHQoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IHZvaWQge1xyXG4gICAgaWYgKGdhbWVPYmplY3QuaGFzUmVuZGVyQ29udGV4dFNldHRpbmdzKCkpIHtcclxuICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuICAgICAgZ2FtZU9iamVjdC5yZW5kZXJDb250ZXh0U2V0dGluZ3ModGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZU9iamVjdC5yb3RhdGlvbikge1xyXG4gICAgICBsZXQgcm90YXRpb25DZW50ZXI6IFBvaW50O1xyXG5cclxuICAgICAgc3dpdGNoIChnYW1lT2JqZWN0LnJvdGF0aW9uQ2VudGVyKSB7XHJcbiAgICAgICAgY2FzZSBSb3RhdGlvbkNlbnRlcnMuV09STEQ6XHJcbiAgICAgICAgICByb3RhdGlvbkNlbnRlciA9IFNjcmVlbi5jZW50ZXI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJvdGF0aW9uQ2VudGVycy5TRUxGOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByb3RhdGlvbkNlbnRlciA9IGdhbWVPYmplY3QuY2VudGVyO1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZShyb3RhdGlvbkNlbnRlci54LCByb3RhdGlvbkNlbnRlci55KTtcclxuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShnYW1lT2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoLXJvdGF0aW9uQ2VudGVyLngsIC1yb3RhdGlvbkNlbnRlci55KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZU9iamVjdC5zY2FsZSAhPT0gMSkge1xyXG4gICAgICB0aGlzLmNvbnRleHQuc2NhbGUoZ2FtZU9iamVjdC5zY2FsZSwgZ2FtZU9iamVjdC5zY2FsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc3RvcmVSZW5kZXJDb250ZXh0KGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcclxuICAgIGlmIChnYW1lT2JqZWN0LnNjYWxlICE9PSAxKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5zY2FsZSgxLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2FtZU9iamVjdC5yb3RhdGlvbikge1xyXG4gICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnYW1lT2JqZWN0Lmhhc1JlbmRlckNvbnRleHRTZXR0aW5ncygpKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcmVuZGVyaW5nL1JlbmRlcmVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVGltZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2RlbHRhVGltZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF90aW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2ZwczogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIF9pbml0KCkge1xyXG4gICAgdGhpcy5fZGVsdGFUaW1lID0gMDtcclxuICAgIHRoaXMuX3RpbWUgPSAwO1xyXG4gICAgdGhpcy5fZnBzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBfc2V0RnJhbWUoZnJhbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fZGVsdGFUaW1lID0gZnJhbWUgLSB0aGlzLl90aW1lO1xyXG4gICAgdGhpcy5fdGltZSA9IGZyYW1lO1xyXG4gICAgdGhpcy5fZnBzID0gTWF0aC5yb3VuZCgxMDAwIC8gdGhpcy5fZGVsdGFUaW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGRlbHRhVGltZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbHRhVGltZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHRpbWUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90aW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgZnBzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZnBzO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9UaW1lLnRzIiwiaW1wb3J0IG5vdyBmcm9tICcuL25vdyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlciB7XHJcbiAgcHVibGljIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBlbmRUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfc3RlcHM6IG51bWJlcltdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIHRoaXMuZW5kVGltZSA9IDA7XHJcbiAgICB0aGlzLl9zdGVwcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBkdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuZW5kVGltZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhcnRUaW1lKSB7XHJcbiAgICAgIHJldHVybiBub3coKSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHN0ZXBzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5fc3RlcHNdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbmRUaW1lID0gMDtcclxuICAgIHRoaXMuX3N0ZXBzID0gW107XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5vdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0ZXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGFydFRpbWUpIHtcclxuICAgICAgdGhpcy5fc3RlcHMucHVzaChub3coKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZW5kVGltZSA9IG5vdygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0ZXAoaW5kZXg6IG51bWJlcik6IG51bWJlcnxudWxsIHtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuX3N0ZXBzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RlcHNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFN0ZXBEdXJhdGlvbihpbmRleDogbnVtYmVyKTogbnVtYmVyfG51bGwge1xyXG4gICAgY29uc3Qgc3RlcDogbnVtYmVyfG51bGwgPSB0aGlzLmdldFN0ZXAoaW5kZXgpO1xyXG5cclxuICAgIGlmIChzdGVwICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBzdGVwIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U3RlcER1cmF0aW9ucygpOiBudW1iZXJbXSB7XHJcbiAgICBjb25zdCBzdGVwczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHN0ZXAgb2YgdGhpcy5zdGVwcykge1xyXG4gICAgICBzdGVwcy5wdXNoKHN0ZXAgLSB0aGlzLnN0YXJ0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0ZXBzO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3RpbWluZy9Qcm9maWxlci50cyIsImltcG9ydCB7IE1vdXNlLCBLZXlib2FyZCB9IGZyb20gJy4uL2lucHV0cyc7XHJcbmltcG9ydCB7IFNjcmVlbiwgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyBUZXh0TWVhc3VyZSB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL3RpbWluZyc7XHJcbmltcG9ydCBTY2VuZSBmcm9tICcuL1NjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgcHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgR2FtZS5cclxuICAgKiBAcGFyYW0gY2FudmFzIFRoZSBjYW52YXMgdG8gY3JlYXRlIHRoZSBnYW1lIGluLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcygpO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcig8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPnRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykpO1xyXG4gICAgdGhpcy5fc2NlbmUgPSB0aGlzLnJlbmRlcmVyLnNjZW5lO1xyXG5cclxuICAgIFRpbWUuX2luaXQoKTtcclxuICAgIE1vdXNlLl9pbml0KCk7XHJcbiAgICBLZXlib2FyZC5faW5pdCgpO1xyXG4gICAgVGV4dE1lYXN1cmUuX2luaXQoKTtcclxuICAgIFNjcmVlbi5faW5pdCh0aGlzLmNhbnZhcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHNjZW5lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NjZW5lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFNjZW5lKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zY2VuZSA9IHNjZW5lO1xyXG4gICAgdGhpcy5fc2NlbmUgPSBzY2VuZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ2FudmFzKCk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnNjZW5lLmF0dGFjaFVwZGF0ZSh1cGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdsb2JhbFVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmF0dGFjaFVwZGF0ZSh1cGRhdGUpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Jvb3QvR2FtZS50cyIsImltcG9ydCB7IEdhbWVPYmplY3RSZXNvbHZhYmxlIH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcclxuICBwcml2YXRlIF9nYW1lT2JqZWN0czogQ29sbGVjdGlvbjxHYW1lT2JqZWN0UmVzb2x2YWJsZT47XHJcbiAgcHJpdmF0ZSBfdXBkYXRlczogRnVuY3Rpb25bXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9nYW1lT2JqZWN0cyA9IHt9O1xyXG4gICAgdGhpcy5fdXBkYXRlcyA9IFtdO1xyXG4gIH1cclxuICBcclxuICBwdWJsaWMgZ2V0IHVwZGF0ZXMoKTogRnVuY3Rpb25bXSB7XHJcbiAgICByZXR1cm4gWy4uLnRoaXMuX3VwZGF0ZXNdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZChnYW1lT2JqZWN0OiBHYW1lT2JqZWN0UmVzb2x2YWJsZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY29udGFpbnMoZ2FtZU9iamVjdC5uYW1lKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3QubmFtZV0gPSBnYW1lT2JqZWN0O1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbnMoZ2FtZU9iamVjdE5hbWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZGVsZXRlIHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIGdldChnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogR2FtZU9iamVjdFJlc29sdmFibGV8bnVsbCB7XHJcbiAgICBpZiAoIXRoaXMuY29udGFpbnMoZ2FtZU9iamVjdE5hbWUpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEFsbCgpOiBDb2xsZWN0aW9uPEdhbWVPYmplY3RSZXNvbHZhYmxlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29udGFpbnMoZ2FtZU9iamVjdE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dhbWVPYmplY3RzLmhhc093blByb3BlcnR5KGdhbWVPYmplY3ROYW1lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuX2dhbWVPYmplY3RzID0ge307XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGF0dGFjaFVwZGF0ZSh1cGRhdGU6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLl91cGRhdGVzLnB1c2godXBkYXRlKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb290L1NjZW5lLnRzIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBTY3JlZW4ge1xyXG4gIHByaXZhdGUgc3RhdGljIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gIHByaXZhdGUgc3RhdGljIF93aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9oZWlnaHQ6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfY2VudGVyOiBQb2ludDtcclxuICBwcml2YXRlIHN0YXRpYyBfb25SZXNpemU6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgX2luaXQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIHRoaXMuX2NlbnRlciA9IG5ldyBQb2ludCh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgIFxyXG4gICAgdGhpcy5fb25SZXNpemUgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7fTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50OiBFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICB0aGlzLl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgdGhpcy5fY2VudGVyLnggPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgdGhpcy5fY2VudGVyLnkgPSB0aGlzLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICB0aGlzLl9vblJlc2l6ZShldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBjZW50ZXIoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NlbnRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgb24oZXZlbnROYW1lczogc3RyaW5nW10sIGV2ZW50SGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudEhhbmRsZXIoZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBvblJlc2l6ZShoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5fb25SZXNpemUgPSA8KGV2ZW50OiBFdmVudCkgPT4gdm9pZD5oYW5kbGVyO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3JlbmRlcmluZy9TY3JlZW4udHMiLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuLi9yZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2dyYXBoaWNzJztcclxuaW1wb3J0IElucHV0U3RhdGUgZnJvbSAnLi9JbnB1dFN0YXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIE1vdXNlIHtcclxuICBwcml2YXRlIHN0YXRpYyBfY3Vyc29yOiBQb2ludDtcclxuICBwcml2YXRlIHN0YXRpYyBfbGVmdENsaWNrOiBJbnB1dFN0YXRlO1xyXG4gIHByaXZhdGUgc3RhdGljIF9taWRkbGVDbGljazogSW5wdXRTdGF0ZTtcclxuICBwcml2YXRlIHN0YXRpYyBfcmlnaHRDbGljazogSW5wdXRTdGF0ZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2N1cnNvciA9IG5ldyBQb2ludChTY3JlZW4ud2lkdGggLyAyLCBTY3JlZW4uaGVpZ2h0IC8gMik7XHJcbiAgICB0aGlzLl9sZWZ0Q2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5fbWlkZGxlQ2xpY2sgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG4gICAgdGhpcy5fcmlnaHRDbGljayA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBjdXJzb3IoKTogUG9pbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnNvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGN1cnNvclgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnNvci54O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgY3Vyc29yWSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuY3Vyc29yLnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBidXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0aGlzLmxlZnRCdXR0b25Eb3duIHx8IHRoaXMubWlkZGxlQnV0dG9uRG93biB8fCB0aGlzLnJpZ2h0QnV0dG9uRG93bik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBsZWZ0QnV0dG9uRG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sZWZ0Q2xpY2suaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBtaWRkbGVCdXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pZGRsZUNsaWNrLmlzRG93bigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgcmlnaHRCdXR0b25Eb3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JpZ2h0Q2xpY2suaXNEb3duKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBsZWZ0QnV0dG9uVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGVmdENsaWNrLmlzVXAoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IG1pZGRsZUJ1dHRvblVwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pZGRsZUNsaWNrLmlzVXAoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IHJpZ2h0QnV0dG9uVXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmlnaHRDbGljay5pc1VwKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBpbml0RXZlbnRzKCk6IHZvaWQge1xyXG4gICAgU2NyZWVuLm9uKFsnbW91c2Vtb3ZlJ10sIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2N1cnNvci54ID0gZS5jbGllbnRYO1xyXG4gICAgICB0aGlzLl9jdXJzb3IueSA9IGUuY2xpZW50WTtcclxuICAgIH0pO1xyXG5cclxuICAgIFNjcmVlbi5vbihbJ21vdXNlZG93bicsICdtb3VzZXVwJ10sIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHN3aXRjaChlLmJ1dHRvbikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHRoaXMuX2xlZnRDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLl9taWRkbGVDbGljay5fc3dpdGNoKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICB0aGlzLl9yaWdodENsaWNrLl9zd2l0Y2goKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBTY3JlZW4ub24oWydjb250ZXh0bWVudSddLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0cy9Nb3VzZS50cyIsImltcG9ydCB7IE1vdXNlLCBDaXJjbGUsIFNjZW5lIH0gZnJvbSAnLi4vZW5naW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvciB7XHJcbiAgcHVibGljIGVsZW1lbnQ6IENpcmNsZTtcclxuXHJcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBuZXcgQ2lyY2xlKCdjdXJzb3InKTtcclxuICAgIHRoaXMuZWxlbWVudC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZWxlbWVudC5maWxsID0gdHJ1ZTtcclxuICAgIHRoaXMuZWxlbWVudC5jb2xvciA9ICcjRkYwMDAwJztcclxuICAgIHRoaXMuZWxlbWVudC5zaXplID0gMzA7XHJcblxyXG4gICAgc2NlbmUuYWRkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50LnggPSBNb3VzZS5jdXJzb3JYO1xyXG4gICAgdGhpcy5lbGVtZW50LnkgPSBNb3VzZS5jdXJzb3JZO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFscy9DdXJzb3IudHMiLCJpbXBvcnQgeyBSZWN0YW5nbGUsIExhYmVsLCBTY2VuZSwgRm9udCwgU2NyZWVuLCBQb2ludCwgS2V5Ym9hcmQsIEtleXMsIFRleHRNZWFzdXJlIH0gZnJvbSAnLi4vZW5naW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpdEtleXMge1xyXG4gIHB1YmxpYyBxRWxlbWVudDogUmVjdGFuZ2xlO1xyXG4gIHB1YmxpYyBxTGFiZWw6IExhYmVsO1xyXG4gIHB1YmxpYyB3RWxlbWVudDogUmVjdGFuZ2xlO1xyXG4gIHB1YmxpYyB3TGFiZWw6IExhYmVsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUpIHtcclxuICAgIHRoaXMucUVsZW1lbnQgPSBuZXcgUmVjdGFuZ2xlKCdxcmVjdGFuZ2xlJyk7XHJcbiAgICB0aGlzLnFFbGVtZW50LnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5xRWxlbWVudC5maWxsID0gdHJ1ZTtcclxuICAgIHRoaXMucUVsZW1lbnQuY29sb3IgPSAnI0NDRERDQyc7XHJcbiAgICB0aGlzLnFFbGVtZW50LndpZHRoID0gNjA7XHJcbiAgICB0aGlzLnFFbGVtZW50LmhlaWdodCA9IDYwO1xyXG4gICAgdGhpcy5xTGFiZWwgPSBuZXcgTGFiZWwoJ3FsYWJlbCcpO1xyXG4gICAgdGhpcy5xTGFiZWwudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLnFMYWJlbC50ZXh0ID0gJ1EnO1xyXG4gICAgdGhpcy5xTGFiZWwuZmlsbCA9IHRydWU7XHJcbiAgICB0aGlzLnFMYWJlbC5zZXRGb250KG5ldyBGb250KCdBcmlhbCcsIDE2LCAnIzAwMDAwMCcpKTtcclxuXHJcbiAgICB0aGlzLndFbGVtZW50ID0gbmV3IFJlY3RhbmdsZSgnd3JlY3RhbmdsZScpO1xyXG4gICAgdGhpcy53RWxlbWVudC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMud0VsZW1lbnQuZmlsbCA9IHRydWU7XHJcbiAgICB0aGlzLndFbGVtZW50LmNvbG9yID0gJyNDQ0REQ0MnO1xyXG4gICAgdGhpcy53RWxlbWVudC53aWR0aCA9IDYwO1xyXG4gICAgdGhpcy53RWxlbWVudC5oZWlnaHQgPSA2MDtcclxuICAgIHRoaXMud0xhYmVsID0gbmV3IExhYmVsKCd3bGFiZWwnKTtcclxuICAgIHRoaXMud0xhYmVsLnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy53TGFiZWwudGV4dCA9ICdXJztcclxuICAgIHRoaXMud0xhYmVsLmZpbGwgPSB0cnVlO1xyXG4gICAgdGhpcy53TGFiZWwuc2V0Rm9udChuZXcgRm9udCgnQXJpYWwnLCAxNiwgJyMwMDAwMDAnKSk7XHJcblxyXG4gICAgdGhpcy5xRWxlbWVudC5zZXRQb2ludChuZXcgUG9pbnQoMjAsIFNjcmVlbi5oZWlnaHQgLSA4MCkpO1xyXG4gICAgdGhpcy5xTGFiZWwuc2V0UG9pbnQobmV3IFBvaW50KDYwLCBTY3JlZW4uaGVpZ2h0IC0gMzApKTtcclxuXHJcbiAgICB0aGlzLndFbGVtZW50LnNldFBvaW50KG5ldyBQb2ludCgxMDAsIFNjcmVlbi5oZWlnaHQgLSA4MCkpO1xyXG4gICAgdGhpcy53TGFiZWwuc2V0UG9pbnQobmV3IFBvaW50KDE0MCwgU2NyZWVuLmhlaWdodCAtIDMwKSk7XHJcblxyXG4gICAgc2NlbmUuYWRkKHRoaXMucUVsZW1lbnQpO1xyXG4gICAgc2NlbmUuYWRkKHRoaXMucUxhYmVsKTtcclxuICAgIHNjZW5lLmFkZCh0aGlzLndFbGVtZW50KTtcclxuICAgIHNjZW5lLmFkZCh0aGlzLndMYWJlbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKEtleWJvYXJkLmtleShLZXlzLktleVEpLmlzRG93bigpKSB7XHJcbiAgICAgIHRoaXMucUVsZW1lbnQuY29sb3IgPSAnIzExMzMxMSc7XHJcbiAgICAgIHRoaXMucUxhYmVsLnNldEZvbnRDb2xvcignI0ZGRkZGRicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5xRWxlbWVudC5jb2xvciA9ICcjQ0NERENDJztcclxuICAgICAgdGhpcy5xTGFiZWwuc2V0Rm9udENvbG9yKCcjMDAwMDAwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKEtleWJvYXJkLmtleShLZXlzLktleVcpLmlzRG93bigpKSB7XHJcbiAgICAgIHRoaXMud0VsZW1lbnQuY29sb3IgPSAnIzExMzMxMSc7XHJcbiAgICAgIHRoaXMud0xhYmVsLnNldEZvbnRDb2xvcignI0ZGRkZGRicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53RWxlbWVudC5jb2xvciA9ICcjQ0NERENDJztcclxuICAgICAgdGhpcy53TGFiZWwuc2V0Rm9udENvbG9yKCcjMDAwMDAwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5xRWxlbWVudC5yb3RhdGlvbiArPSAxO1xyXG4gICAgdGhpcy5xTGFiZWwucm90YXRpb24gKz0gMTtcclxuXHJcbiAgICBpZiAodGhpcy5xRWxlbWVudC5yb3RhdGlvbiA9PT0gMzYwKSB7XHJcbiAgICAgIHRoaXMucUVsZW1lbnQucm90YXRpb24gPSAwO1xyXG4gICAgICB0aGlzLnFMYWJlbC5yb3RhdGlvbiA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxzL0hpdEtleXMudHMiLCJpbXBvcnQgeyBDaXJjbGUsIFNjZW5lLCBQb2ludCwgU2NyZWVuLCBLZXlib2FyZCwgTW91c2UsIEtleXMsIENvbGxpc2lvbiB9IGZyb20gJy4uL2VuZ2luZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaXRDaXJjbGUge1xyXG4gIHB1YmxpYyBib3JkZXI6IENpcmNsZTtcclxuICBwdWJsaWMgZWxlbWVudDogQ2lyY2xlO1xyXG4gIHB1YmxpYyBoaXQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSkge1xyXG4gICAgdGhpcy5oaXQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmJvcmRlciA9IG5ldyBDaXJjbGUoJ2hpdCBjaXJjbGUgYm9yZGVyJyk7XHJcbiAgICB0aGlzLmJvcmRlci5zZXRQb2ludChuZXcgUG9pbnQoTWF0aC5yYW5kb20oKSAqIFNjcmVlbi53aWR0aCwgTWF0aC5yYW5kb20oKSAqIFNjcmVlbi5oZWlnaHQpKTtcclxuICAgIHRoaXMuYm9yZGVyLmNvbG9yID0gJyNGRkZGRkYnO1xyXG4gICAgdGhpcy5ib3JkZXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmJvcmRlci5zaXplID0gODQ7XHJcbiAgICBcclxuICAgIHRoaXMuZWxlbWVudCA9IG5ldyBDaXJjbGUoJ2hpdCBjaXJjbGUnKTtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRQb2ludChuZXcgUG9pbnQodGhpcy5ib3JkZXIueCwgdGhpcy5ib3JkZXIueSkpO1xyXG4gICAgdGhpcy5lbGVtZW50LmNvbG9yID0gJyMwMTMzREQnO1xyXG4gICAgdGhpcy5lbGVtZW50LnZpc2libGUgPSB0cnVlO1xyXG4gICAgdGhpcy5lbGVtZW50LnNpemUgPSA4MDtcclxuXHJcbiAgICBzY2VuZS5hZGQodGhpcy5ib3JkZXIpO1xyXG4gICAgc2NlbmUuYWRkKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGl0KSB7XHJcbiAgICAgIGlmIChLZXlib2FyZC5rZXkoS2V5cy5LZXlRKS5pc1VwKCkgJiYgS2V5Ym9hcmQua2V5KEtleXMuS2V5VykuaXNVcCgpKSB7XHJcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChLZXlib2FyZC5rZXkoS2V5cy5LZXlRKS5pc0Rvd24oKSB8fCBLZXlib2FyZC5rZXkoS2V5cy5LZXlXKS5pc0Rvd24oKSkge1xyXG4gICAgICBpZiAoIXRoaXMuaGl0ICYmXHJcbiAgICAgICAgQ29sbGlzaW9uLmNpcmNsZUNvbGxpZGUodGhpcy5lbGVtZW50LCBuZXcgQ2lyY2xlKCcnLCBNb3VzZS5jdXJzb3IpKVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludChNYXRoLnJhbmRvbSgpICogU2NyZWVuLndpZHRoLCBNYXRoLnJhbmRvbSgpICogU2NyZWVuLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5ib3JkZXIuc2V0UG9pbnQocG9pbnQpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRQb2ludChwb2ludCk7XHJcbiAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aXN1YWxzL0hpdENpcmNsZS50cyIsImltcG9ydCB7IExhYmVsLCBQb2ludCwgU2NlbmUsIFRpbWUsIEZvbnQgfSBmcm9tICcuLi9lbmdpbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRlBTQ291bnRlciB7XHJcbiAgcHVibGljIGVsZW1lbnQ6IExhYmVsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IG5ldyBMYWJlbCgnZnBzIGNvdW50ZXInKTtcclxuICAgIHRoaXMuZWxlbWVudC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRGb250KG5ldyBGb250KCdBcmlhbCcsIDEyLCAnI0ZGRkZGRicpKTtcclxuICAgIHRoaXMuZWxlbWVudC50ZXh0ID0gJ0ZQUzogMCc7XHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0UG9pbnQobmV3IFBvaW50KDE1LCAxNSkpO1xyXG5cclxuICAgIHNjZW5lLmFkZCh0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudC50ZXh0ID0gYEZQUzogJHtUaW1lLmZwc31gO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlzdWFscy9GUFNDb3VudGVyLnRzIiwiaW1wb3J0IENvbGxpc2lvbiBmcm9tICcuL0NvbGxpc2lvbic7XHJcbmltcG9ydCBSb3RhdGlvbkNlbnRlcnMgZnJvbSAnLi9Sb3RhdGlvbkNlbnRlcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBDb2xsaXNpb24sXHJcbiAgUm90YXRpb25DZW50ZXJzXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcGh5c2ljcy9pbmRleC50cyIsImltcG9ydCB7IFJlY3RhbmdsZSwgQ2lyY2xlLCBHYW1lT2JqZWN0IH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbGxpc2lvbiB7XHJcbiAgcHVibGljIHN0YXRpYyBib3hDb2xsaWRlKGVsZW1lbnQxOiBSZWN0YW5nbGUsIGVsZW1lbnQyOiBSZWN0YW5nbGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGVsZW1lbnQxLnggPCBlbGVtZW50Mi54ICsgZWxlbWVudDIud2lkdGggJiZcclxuICAgICAgZWxlbWVudDEueCArIGVsZW1lbnQxLndpZHRoID4gZWxlbWVudDIueCAmJlxyXG4gICAgICBlbGVtZW50MS55IDwgZWxlbWVudDIueSArIGVsZW1lbnQyLmhlaWdodCAmJlxyXG4gICAgICBlbGVtZW50MS5oZWlnaHQgKyBlbGVtZW50MS55ID4gZWxlbWVudDIueVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2lyY2xlQ29sbGlkZShlbGVtZW50MTogQ2lyY2xlLCBlbGVtZW50MjogQ2lyY2xlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBkeDogbnVtYmVyID0gZWxlbWVudDEueCAtIGVsZW1lbnQyLng7XHJcbiAgICBjb25zdCBkeTogbnVtYmVyID0gZWxlbWVudDEueSAtIGVsZW1lbnQyLnk7XHJcbiAgICBjb25zdCBkOiBudW1iZXIgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGQgPCBlbGVtZW50MS5zaXplIC8gMiArIGVsZW1lbnQyLnNpemUgLyAyXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjb2xsaWRlKGVsZW1lbnQxOiBSZWN0YW5nbGV8Q2lyY2xlLCBlbGVtZW50MjogUmVjdGFuZ2xlfENpcmNsZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGVsZW1lbnQxIGluc3RhbmNlb2YgQ2lyY2xlICYmIGVsZW1lbnQyIGluc3RhbmNlb2YgQ2lyY2xlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNpcmNsZUNvbGxpZGUoZWxlbWVudDEsIGVsZW1lbnQyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB3MTogbnVtYmVyO1xyXG4gICAgICBsZXQgaDE6IG51bWJlcjtcclxuICAgICAgbGV0IHcyOiBudW1iZXI7XHJcbiAgICAgIGxldCBoMjogbnVtYmVyO1xyXG5cclxuICAgICAgaWYgKGVsZW1lbnQxIGluc3RhbmNlb2YgQ2lyY2xlKSB7XHJcbiAgICAgICAgdzEgPSBlbGVtZW50MS5zaXplO1xyXG4gICAgICAgIGgxID0gZWxlbWVudDEuc2l6ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3MSA9IGVsZW1lbnQxLndpZHRoO1xyXG4gICAgICAgIGgxID0gZWxlbWVudDEuaGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZWxlbWVudDIgaW5zdGFuY2VvZiBDaXJjbGUpIHtcclxuICAgICAgICB3MiA9IGVsZW1lbnQyLnNpemU7XHJcbiAgICAgICAgaDIgPSBlbGVtZW50Mi5zaXplO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHcyID0gZWxlbWVudDIud2lkdGg7XHJcbiAgICAgICAgaDIgPSBlbGVtZW50Mi5oZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmJveENvbGxpZGUoXHJcbiAgICAgICAgPFJlY3RhbmdsZT57eDogZWxlbWVudDEueCwgeTogZWxlbWVudDEueSwgd2lkdGg6IHcxLCBoZWlnaHQ6IGgxfSxcclxuICAgICAgICA8UmVjdGFuZ2xlPnt4OiBlbGVtZW50Mi54LCB5OiBlbGVtZW50Mi55LCB3aWR0aDogdzIsIGhlaWdodDogaDJ9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcGh5c2ljcy9Db2xsaXNpb24udHMiLCJpbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL0dhbWVPYmplY3QnO1xyXG5pbXBvcnQgR2FtZU9iamVjdFR5cGVzIGZyb20gJy4vR2FtZU9iamVjdFR5cGVzJztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9ncmFwaGljcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEdhbWVPYmplY3Qge1xyXG4gIHByb3RlY3RlZCBfcmVhZHk6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF9VUkw6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgX2ltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBvaW50PzogUG9pbnQsIHZpc2libGU/OiBib29sZWFuKSB7XHJcbiAgICBzdXBlcihuYW1lLCBwb2ludCwgdmlzaWJsZSk7XHJcblxyXG4gICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcclxuICAgIHRoaXMuX2ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgdGhpcy5faW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5fcmVhZHkgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fdHlwZSA9IEdhbWVPYmplY3RUeXBlcy5JTUFHRTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcmVhZHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVhZHk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IFVSTCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9VUkw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IFVSTChVUkw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcclxuICAgIHRoaXMuX1VSTCA9IFVSTDtcclxuICAgIHRoaXMuX2ltYWdlLnNyYyA9IHRoaXMuX1VSTDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaW1hZ2UoKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5faW1hZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VVJMKFVSTDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLlVSTCA9IFVSTDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY2VudGVyKCk6IFBvaW50IHtcclxuICAgIGxldCBjZW50ZXJYOiBudW1iZXI7XHJcbiAgICBsZXQgY2VudGVyWTogbnVtYmVyO1xyXG5cclxuICAgIGlmICh0aGlzLmltYWdlLndpZHRoID09PSAwKSB7XHJcbiAgICAgIGNlbnRlclggPSB0aGlzLng7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZW50ZXJYID0gdGhpcy54ICsgdGhpcy5pbWFnZS53aWR0aCAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW1hZ2UuaGVpZ2h0ID09PSAwKSB7XHJcbiAgICAgIGNlbnRlclkgPSB0aGlzLnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZW50ZXJZID0gdGhpcy55ICsgdGhpcy5pbWFnZS5oZWlnaHQgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUG9pbnQoY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1vYmplY3RzL0ltYWdlLnRzIiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwIHtcclxuICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBfZ2FtZU9iamVjdHM6IENvbGxlY3Rpb248R2FtZU9iamVjdD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fZ2FtZU9iamVjdHMgPSB7fTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3QubmFtZV0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHJcbiAgICB0aGlzLl9nYW1lT2JqZWN0c1tnYW1lT2JqZWN0Lm5hbWVdID0gZ2FtZU9iamVjdDtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0KGdhbWVPYmplY3ROYW1lOiBzdHJpbmcpOiBHYW1lT2JqZWN0fG51bGwge1xyXG4gICAgaWYgKHRoaXMuX2dhbWVPYmplY3RzW2dhbWVPYmplY3ROYW1lXSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEFsbCgpOiBDb2xsZWN0aW9uPEdhbWVPYmplY3Q+IHtcclxuICAgIHJldHVybiB7Li4udGhpcy5fZ2FtZU9iamVjdHN9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShnYW1lT2JqZWN0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdE5hbWVdID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBkZWxldGUgdGhpcy5fZ2FtZU9iamVjdHNbZ2FtZU9iamVjdE5hbWVdO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtb2JqZWN0cy9Hcm91cC50cyIsImVudW0gS2V5cyB7XHJcbiAgRGlnaXQwID0gJ0RpZ2l0MCcsXHJcbiAgRGlnaXQxID0gJ0RpZ2l0MScsXHJcbiAgRGlnaXQyID0gJ0RpZ2l0MicsXHJcbiAgRGlnaXQzID0gJ0RpZ2l0MycsXHJcbiAgRGlnaXQ0ID0gJ0RpZ2l0NCcsXHJcbiAgRGlnaXQ1ID0gJ0RpZ2l0NScsXHJcbiAgRGlnaXQ2ID0gJ0RpZ2l0NicsXHJcbiAgRGlnaXQ3ID0gJ0RpZ2l0NycsXHJcbiAgRGlnaXQ4ID0gJ0RpZ2l0OCcsXHJcbiAgRGlnaXQ5ID0gJ0RpZ2l0OScsXHJcblxyXG4gIEtleUEgPSAnS2V5QScsXHJcbiAgS2V5QiA9ICdLZXlCJyxcclxuICBLZXlDID0gJ0tleUMnLFxyXG4gIEtleUQgPSAnS2V5RCcsXHJcbiAgS2V5RSA9ICdLZXlFJyxcclxuICBLZXlGID0gJ0tleUYnLFxyXG4gIEtleUcgPSAnS2V5RycsXHJcbiAgS2V5SCA9ICdLZXlIJyxcclxuICBLZXlJID0gJ0tleUknLFxyXG4gIEtleUogPSAnS2V5SicsXHJcbiAgS2V5SyA9ICdLZXlLJyxcclxuICBLZXlMID0gJ0tleUwnLFxyXG4gIEtleU0gPSAnS2V5TScsXHJcbiAgS2V5TiA9ICdLZXlOJyxcclxuICBLZXlPID0gJ0tleU8nLFxyXG4gIEtleVAgPSAnS2V5UCcsXHJcbiAgS2V5USA9ICdLZXlRJyxcclxuICBLZXlSID0gJ0tleVInLFxyXG4gIEtleVMgPSAnS2V5UycsXHJcbiAgS2V5VCA9ICdLZXlUJyxcclxuICBLZXlVID0gJ0tleVUnLFxyXG4gIEtleVYgPSAnS2V5VicsXHJcbiAgS2V5VyA9ICdLZXlXJyxcclxuICBLZXlYID0gJ0tleVgnLFxyXG4gIEtleVkgPSAnS2V5WScsXHJcbiAgS2V5WiA9ICdLZXlaJyxcclxuXHJcbiAgRXNjYXBlID0gJ0VzY2FwZScsXHJcblxyXG4gIEYxID0gJ0YxJyxcclxuICBGMiA9ICdGMicsXHJcbiAgRjMgPSAnRjMnLFxyXG4gIEY0ID0gJ0Y0JyxcclxuICBGNSA9ICdGNScsXHJcbiAgRjYgPSAnRjYnLFxyXG4gIEY3ID0gJ0Y3JyxcclxuICBGOCA9ICdGOCcsXHJcbiAgRjkgPSAnRjknLFxyXG4gIEYxMCA9ICdGMTAnLFxyXG4gIEYxMSA9ICdGMTEnLFxyXG4gIEYxMiA9ICdGMTInLFxyXG5cclxuICBJbnNlcnQgPSAnSW5zZXJ0JyxcclxuICBEZWxldGUgPSAnRGVsZXRlJyxcclxuXHJcbiAgSG9tZSA9ICdIb21lJyxcclxuICBFbmQgPSAnRW5kJyxcclxuICBQYWdlVXAgPSAnUGFnZVVwJyxcclxuICBQYWdlRG93biA9ICdQYWdlRG93bicsXHJcblxyXG4gIE51bUxvY2sgPSAnTnVtTG9jaycsXHJcbiAgTnVtcGFkRGl2aWRlID0gJ051bXBhZERpdmlkZScsXHJcbiAgTnVtcGFkTXVsdGlwbHkgPSAnTnVtcGFkTXVsdGlwbHknLFxyXG4gIE51bXBhZFN1YnRyYWN0ID0gJ051bXBhZFN1YnRyYWN0JyxcclxuICBOdW1wYWRBZGQgPSAnTnVtcGFkQWRkJyxcclxuICBOdW1wYWRFbnRlciA9ICdOdW1wYWRFbnRlcicsXHJcbiAgTnVtcGFkRGVjaW1hbCA9ICdOdW1wYWREZWNpbWFsJyxcclxuICBOdW1wYWQwID0gJ051bXBhZDAnLFxyXG4gIE51bXBhZDEgPSAnTnVtcGFkMScsXHJcbiAgTnVtcGFkMiA9ICdOdW1wYWQyJyxcclxuICBOdW1wYWQzID0gJ051bXBhZDMnLFxyXG4gIE51bXBhZDQgPSAnTnVtcGFkNCcsXHJcbiAgTnVtcGFkNSA9ICdOdW1wYWQ1JyxcclxuICBOdW1wYWQ2ID0gJ051bXBhZDYnLFxyXG4gIE51bXBhZDcgPSAnTnVtcGFkNycsXHJcbiAgTnVtcGFkOCA9ICdOdW1wYWQ4JyxcclxuICBOdW1wYWQ5ID0gJ051bXBhZDknLFxyXG5cclxuICBBcnJvd1VwID0gJ0Fycm93VXAnLFxyXG4gIEFycm93RG93biA9ICdBcnJvd0Rvd24nLFxyXG4gIEFycm93TGVmdCA9ICdBcnJvd0xlZnQnLFxyXG4gIEFycm93UmlnaHQgPSAnQXJyb3dSaWdodCcsXHJcblxyXG4gIEJhY2txdW90ZSA9ICdCYWNrcXVvdGUnLFxyXG4gIE1pbnVzID0gJ01pbnVzJyxcclxuICBFcXVhbCA9ICdFcXVhbCcsXHJcbiAgQmFja3NwYWNlID0gJ0JhY2tzcGFjZScsXHJcbiAgQnJhY2tldExlZnQgPSAnQnJhY2tldExlZnQnLFxyXG4gIEJyYWNrZXRSaWdodCA9ICdCcmFja2V0UmlnaHQnLFxyXG4gIFF1b3RlID0gJ1F1b3RlJyxcclxuICBCYWNrc2xhc2ggPSAnQmFja3NsYXNoJyxcclxuICBDb21tYSA9ICdDb21tYScsXHJcbiAgUGVyaW9kID0gJ1BlcmlvZCcsXHJcbiAgU2xhc2ggPSAnU2xhc2gnLFxyXG5cclxuICBFbnRlciA9ICdFbnRlcicsXHJcbiAgU2hpZnRMZWZ0ID0gJ1NoaWZ0TGVmdCcsXHJcbiAgU2hpZnRSaWdodCA9ICdTaGlmdFJpZ2h0JyxcclxuICBDYXBzTG9jayA9ICdDYXBzTG9jaycsXHJcbiAgVGFiID0gJ1RhYicsXHJcbiAgQ29udHJvbExlZnQgPSAnQ29udHJvbExlZnQnLFxyXG4gIENvbnRyb2xSaWdodCA9ICdDb250cm9sUmlnaHQnLFxyXG4gIE1ldGFMZWZ0ID0gJ01ldGFMZWZ0JyxcclxuICBNZXRhUmlnaHQgPSAnTWV0YVJpZ2h0JyxcclxuICBBbHRMZWZ0ID0gJ0FsdExlZnQnLFxyXG4gIEFsdFJpZ2h0ID0gJ0FsdFJpZ2h0J1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2V5cztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9pbnB1dHMvS2V5cy50cyIsImVudW0gUm90YXRpb25DZW50ZXJzIHtcclxuICBTRUxGLFxyXG4gIFdPUkxEXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3RhdGlvbkNlbnRlcnM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcGh5c2ljcy9Sb3RhdGlvbkNlbnRlcnMudHMiLCJpbXBvcnQgRm9udCBmcm9tICcuL0ZvbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVGV4dE1lYXN1cmUge1xyXG4gIHByaXZhdGUgc3RhdGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBfaW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udGV4dCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbWVhc3VyZVRleHQodGV4dDogc3RyaW5nLCBmb250OiBGb250KTogbnVtYmVyIHtcclxuICAgIHRoaXMuY29udGV4dC5mb250ID0gYCR7Zm9udC5mb250U2l6ZX1weCAke2ZvbnQuZm9udE5hbWV9YDtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmFwaGljcy9UZXh0TWVhc3VyZS50cyJdLCJzb3VyY2VSb290IjoiIn0=