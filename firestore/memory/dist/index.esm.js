import i from '@firebase/app';
import { isMobileCordova, isReactNative, isElectron, isIE, isUWP, isBrowserExtension } from '@firebase/util';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays$1() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays$1(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }
            this._logLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.ERROR], args));
    };
    return Logger;
}());

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g, goog = goog || {}, k = commonjsGlobal || self;
function aa() { }
function ba(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array)
                return "array";
            if (a instanceof Object)
                return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)
                return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                return "function";
        }
        else
            return "null";
    else if ("function" == b && "undefined" == typeof a.call)
        return "object";
    return b;
}
function da(a) { var b = ba(a); return "array" == b || "object" == b && "number" == typeof a.length; }
function m(a) { var b = typeof a; return "object" == b && null != a || "function" == b; }
function ea(a) { return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha); }
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;
function ia(a, b, c) { return a.call.apply(a.bind, arguments); }
function ja(a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; }
function n(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n = ia : n = ja; return n.apply(null, arguments); }
function ka(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; }
var q = Date.now || function () { return +new Date; };
function r(a, b) { function c() { } c.prototype = b.prototype; a.M = b.prototype; a.prototype = new c; a.prototype.constructor = a; }
function t() { this.j = this.j; this.i = this.i; }
var la = 0;
t.prototype.j = !1;
t.prototype.da = function () { if (!this.j && (this.j = !0, this.C(), 0 != la)) {
    var a = ea(this);
} };
t.prototype.C = function () { if (this.i)
    for (; this.i.length;)
        this.i.shift()(); };
var na = Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b, void 0); } : function (a, b) { if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; }, oa = Array.prototype.forEach ? function (a, b, c) { Array.prototype.forEach.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a); };
function pa(a) { a: {
    var b = qa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
        }
    b = -1;
} return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; }
function ra(a) { return Array.prototype.concat.apply([], arguments); }
function sa(a) { var b = a.length; if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
function wa(a) { return /^[\s\xa0]*$/.test(a); }
var xa = String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
function u(a, b) { return -1 != a.indexOf(b); }
function ya(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
var v;
a: {
    var za = k.navigator;
    if (za) {
        var Aa = za.userAgent;
        if (Aa) {
            v = Aa;
            break a;
        }
    }
    v = "";
}
function Ba(a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); }
function Ca(a) { var b = {}; for (var c in a)
    b[c] = a[c]; return b; }
var Da = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ea(a, b) { var c, d; for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < Da.length; f++)
        c = Da[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} }
function Fa(a) { Fa[" "](a); return a; }
Fa[" "] = aa;
function Ga(a, b) { var c = Ha; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a); }
var Ia = u(v, "Opera"), w = u(v, "Trident") || u(v, "MSIE"), Ja = u(v, "Edge"), Ka = Ja || w, La = u(v, "Gecko") && !(u(v.toLowerCase(), "webkit") && !u(v, "Edge")) && !(u(v, "Trident") || u(v, "MSIE")) && !u(v, "Edge"), Ma = u(v.toLowerCase(), "webkit") && !u(v, "Edge");
function Na() { var a = k.document; return a ? a.documentMode : void 0; }
var Oa;
a: {
    var Pa = "", Qa = function () { var a = v; if (La)
        return /rv:([^\);]+)(\)|;)/.exec(a); if (Ja)
        return /Edge\/([\d\.]+)/.exec(a); if (w)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Ma)
        return /WebKit\/(\S+)/.exec(a); if (Ia)
        return /(?:Version)[ \/]?(\S+)/.exec(a); }();
    Qa && (Pa = Qa ? Qa[1] : "");
    if (w) {
        var Ra = Na();
        if (null != Ra && Ra > parseFloat(Pa)) {
            Oa = String(Ra);
            break a;
        }
    }
    Oa = Pa;
}
var Ha = {};
function Sa(a) { return Ga(a, function () { {
    var b = 0;
    var e = xa(String(Oa)).split("."), f = xa(String(a)).split("."), h = Math.max(e.length, f.length);
    for (var l = 0; 0 == b && l < h; l++) {
        var c = e[l] || "", d = f[l] || "";
        do {
            c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
            d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
            if (0 == c[0].length && 0 == d[0].length)
                break;
            b = ya(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || ya(0 == c[2].length, 0 == d[2].length) || ya(c[2], d[2]);
            c = c[3];
            d = d[3];
        } while (0 == b);
    }
} return 0 <= b; }); }
var Ta;
if (k.document && w) {
    var Ua = Na();
    Ta = Ua ? Ua : parseInt(Oa, 10) || void 0;
}
else
    Ta = void 0;
var Va = Ta;
var Wa = !w || 9 <= Number(Va), Xa = w && !Sa("9"), Ya = function () { if (!k.addEventListener || !Object.defineProperty)
    return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0; } }); try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
}
catch (c) { } return a; }();
function x(a, b) { this.type = a; this.a = this.target = b; this.defaultPrevented = !1; }
x.prototype.b = function () { this.defaultPrevented = !0; };
function y(a, b) {
    x.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (La) {
                a: {
                    try {
                        Fa(b.nodeName);
                        var e = !0;
                        break a;
                    }
                    catch (f) { }
                    e = !1;
                }
                e || (b = null);
            }
        }
        else
            "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Za[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
    }
}
r(y, x);
var Za = { 2: "touch", 3: "pen", 4: "mouse" };
y.prototype.b = function () { y.M.b.call(this); var a = this.c; if (a.preventDefault)
    a.preventDefault();
else if (a.returnValue = !1, Xa)
    try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1;
    }
    catch (b) { } };
var A = "closure_listenable_" + (1E6 * Math.random() | 0), $a = 0;
function ab(a, b, c, d, e) { this.listener = a; this.proxy = null; this.src = b; this.type = c; this.capture = !!d; this.aa = e; this.key = ++$a; this.V = this.X = !1; }
function bb(a) { a.V = !0; a.listener = null; a.proxy = null; a.src = null; a.aa = null; }
function cb(a) { this.src = a; this.a = {}; this.b = 0; }
cb.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.a[f]; a || (a = this.a[f] = [], this.b++); var h = db(a, b, d, e); -1 < h ? (b = a[h], c || (b.X = !1)) : (b = new ab(b, this.src, f, !!d, e), b.X = c, a.push(b)); return b; };
function eb(a, b) { var c = b.type; if (c in a.a) {
    var d = a.a[c], e = na(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (bb(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
} }
function db(a, b, c, d) { for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.V && f.listener == b && f.capture == !!c && f.aa == d)
        return e;
} return -1; }
var fb = "closure_lm_" + (1E6 * Math.random() | 0), gb = {};
function ib(a, b, c, d, e) { if (d && d.once)
    return jb(a, b, c, d, e); if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        ib(a, b[f], c, d, e);
    return null;
} c = kb(c); return a && a[A] ? a.ra(b, c, m(d) ? !!d.capture : !!d, e) : lb(a, b, c, !1, d, e); }
function lb(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var h = m(e) ? !!e.capture : !!e;
    if (h && !Wa)
        return null;
    var l = mb(a);
    l || (a[fb] = l = new cb(a));
    c = l.add(b, c, d, h, f);
    if (c.proxy)
        return c;
    d = nb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Ya || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(ob(b.toString()), d);
    else if (a.addListener && a.removeListener)
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    return c;
}
function nb() { var a = pb, b = Wa ? function (c) { return a.call(b.src, b.listener, c); } : function (c) { c = a.call(b.src, b.listener, c); if (!c)
    return c; }; return b; }
function jb(a, b, c, d, e) { if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        jb(a, b[f], c, d, e);
    return null;
} c = kb(c); return a && a[A] ? a.sa(b, c, m(d) ? !!d.capture : !!d, e) : lb(a, b, c, !0, d, e); }
function qb(a, b, c, d, e) { if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
        qb(a, b[f], c, d, e);
else
    (d = m(d) ? !!d.capture : !!d, c = kb(c), a && a[A]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = db(f, c, d, e), -1 < c && (bb(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = mb(a)) && (b = a.a[b.toString()], a = -1, b && (a = db(b, c, d, e)), (c = -1 < a ? b[a] : null) && rb(c)); }
function rb(a) { if ("number" !== typeof a && a && !a.V) {
    var b = a.src;
    if (b && b[A])
        eb(b.c, a);
    else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ob(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = mb(b)) ? (eb(c, a), 0 == c.b && (c.src = null, b[fb] = null)) : bb(a);
    }
} }
function ob(a) { return a in gb ? gb[a] : gb[a] = "on" + a; }
function sb(a, b) { var c = a.listener, d = a.aa || a.src; a.X && rb(a); return c.call(d, b); }
function pb(a, b) { if (a.V)
    return !0; if (!Wa) {
    if (!b)
        a: {
            b = ["window", "event"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a;
                }
            b = c;
        }
    b = new y(b, this);
    return sb(a, b);
} return sb(a, new y(b, this)); }
function mb(a) { a = a[fb]; return a instanceof cb ? a : null; }
var tb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function kb(a) { if ("function" == ba(a))
    return a; a[tb] || (a[tb] = function (b) { return a.handleEvent(b); }); return a[tb]; }
function B() { t.call(this); this.c = new cb(this); this.J = this; this.A = null; }
r(B, t);
B.prototype[A] = !0;
g = B.prototype;
g.addEventListener = function (a, b, c, d) { ib(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { qb(this, a, b, c, d); };
g.dispatchEvent = function (a) { var b, c = this.A; if (c)
    for (b = []; c; c = c.A)
        b.push(c); c = this.J; var d = a.type || a; if ("string" === typeof a)
    a = new x(a, c);
else if (a instanceof x)
    a.target = a.target || c;
else {
    var e = a;
    a = new x(d, c);
    Ea(a, e);
} e = !0; if (b)
    for (var f = b.length - 1; 0 <= f; f--) {
        var h = a.a = b[f];
        e = ub(h, d, !0, a) && e;
    } h = a.a = c; e = ub(h, d, !0, a) && e; e = ub(h, d, !1, a) && e; if (b)
    for (f = 0; f < b.length; f++)
        h = a.a = b[f], e = ub(h, d, !1, a) && e; return e; };
g.C = function () { B.M.C.call(this); if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
            bb(d[e]);
        delete a.a[c];
        a.b--;
    }
} this.A = null; };
g.ra = function (a, b, c, d) { return this.c.add(String(a), b, !1, c, d); };
g.sa = function (a, b, c, d) { return this.c.add(String(a), b, !0, c, d); };
function ub(a, b, c, d) { b = a.c.a[String(b)]; if (!b)
    return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.V && h.capture == c) {
        var l = h.listener, p = h.aa || h.src;
        h.X && eb(a.c, h);
        e = !1 !== l.call(p, d) && e;
    }
} return e && !d.defaultPrevented; }
var vb = k.JSON.stringify;
function wb() { this.b = this.a = null; }
var yb = new /** @class */ (function () {
    function class_1(a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null;
    }
    class_1.prototype.get = function () { var a; 0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c(); return a; };
    return class_1;
}())(function () { return new xb; }, function (a) { a.reset(); }, 100);
wb.prototype.add = function (a, b) { var c = yb.get(); c.set(a, b); this.b ? this.b.next = c : this.a = c; this.b = c; };
function zb() { var a = Ab, b = null; a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null); return b; }
function xb() { this.next = this.b = this.a = null; }
xb.prototype.set = function (a, b) { this.a = a; this.b = b; this.next = null; };
xb.prototype.reset = function () { this.next = this.b = this.a = null; };
function Bb(a) { k.setTimeout(function () { throw a; }, 0); }
function Cb(a, b) { Db || Eb(); Fb || (Db(), Fb = !0); Ab.add(a, b); }
var Db;
function Eb() { var a = k.Promise.resolve(void 0); Db = function () { a.then(Gb); }; }
var Fb = !1, Ab = new wb;
function Gb() { for (var a; a = zb();) {
    try {
        a.a.call(a.b);
    }
    catch (c) {
        Bb(c);
    }
    var b = yb;
    b.g(a);
    b.b < b.f && (b.b++, a.next = b.a, b.a = a);
} Fb = !1; }
function Hb(a, b) { B.call(this); this.b = a || 1; this.a = b || k; this.f = n(this.Ua, this); this.g = q(); }
r(Hb, B);
g = Hb.prototype;
g.Z = !1;
g.L = null;
g.Ua = function () { if (this.Z) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.L = this.a.setTimeout(this.f, this.b - a) : (this.L && (this.a.clearTimeout(this.L), this.L = null), this.dispatchEvent("tick"), this.Z && (Ib(this), this.start()));
} };
g.start = function () { this.Z = !0; this.L || (this.L = this.a.setTimeout(this.f, this.b), this.g = q()); };
function Ib(a) { a.Z = !1; a.L && (a.a.clearTimeout(a.L), a.L = null); }
g.C = function () { Hb.M.C.call(this); Ib(this); delete this.a; };
function Jb(a, b, c) { if ("function" == ba(a))
    c && (a = n(a, c));
else if (a && "function" == typeof a.handleEvent)
    a = n(a.handleEvent, a);
else
    throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0); }
function Kb(a, b, c) { t.call(this); this.f = null != c ? n(a, c) : a; this.c = b; this.b = n(this.Pa, this); this.a = []; }
r(Kb, t);
g = Kb.prototype;
g.ba = !1;
g.T = null;
g.Ia = function (a) { this.a = arguments; this.T ? this.ba = !0 : Lb(this); };
g.C = function () { Kb.M.C.call(this); this.T && (k.clearTimeout(this.T), this.T = null, this.ba = !1, this.a = []); };
g.Pa = function () { this.T = null; this.ba && (this.ba = !1, Lb(this)); };
function Lb(a) { a.T = Jb(a.b, a.c); a.f.apply(null, a.a); }
function C(a) { t.call(this); this.b = a; this.a = {}; }
r(C, t);
var Mb = [];
function Nb(a, b, c, d) { Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb); for (var e = 0; e < c.length; e++) {
    var f = ib(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f)
        break;
    a.a[f.key] = f;
} }
function Ob(a) { Ba(a.a, function (b, c) { this.a.hasOwnProperty(c) && rb(b); }, a); a.a = {}; }
C.prototype.C = function () { C.M.C.call(this); Ob(this); };
C.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
function Pb() { }
var Qb = null;
function Rb() { return Qb = Qb || new B; }
function Sb(a) { x.call(this, "serverreachability", a); }
r(Sb, x);
function E(a) { var b = Rb(); b.dispatchEvent(new Sb(b, a)); }
function Tb(a) { x.call(this, "statevent", a); }
r(Tb, x);
function F(a) { var b = Rb(); b.dispatchEvent(new Tb(b, a)); }
function Ub(a) { x.call(this, "timingevent", a); }
r(Ub, x);
function Vb(a, b) { if ("function" != ba(a))
    throw Error("Fn must not be null and must be a function"); return k.setTimeout(function () { a(); }, b); }
var Wb = { NO_ERROR: 0, Va: 1, bb: 2, ab: 3, Ya: 4, $a: 5, cb: 6, za: 7, TIMEOUT: 8, gb: 9 };
var Xb = { Xa: "complete", kb: "success", Aa: "error", za: "abort", ib: "ready", jb: "readystatechange", TIMEOUT: "timeout", eb: "incrementaldata", hb: "progress", Za: "downloadprogress", lb: "uploadprogress" };
function Yb() { }
Yb.prototype.a = null;
function Zb(a) { var b; (b = a.a) || (b = a.a = {}); return b; }
function $b() { }
var G = { OPEN: "a", Wa: "b", Aa: "c", fb: "d" };
function ac() { x.call(this, "d"); }
r(ac, x);
function bc() { x.call(this, "c"); }
r(bc, x);
var cc;
function dc() { }
r(dc, Yb);
cc = new dc;
function H(a, b, c) { this.g = a; this.W = b; this.U = c || 1; this.G = new C(this); this.N = ec; a = Ka ? 125 : void 0; this.O = new Hb(a); this.m = null; this.b = !1; this.j = this.A = this.f = this.B = this.s = this.P = this.h = null; this.i = []; this.a = null; this.w = 0; this.c = this.v = null; this.H = -1; this.l = !1; this.J = 0; this.D = null; this.o = this.R = this.F = !1; }
var ec = 45E3, fc = {}, gc = {};
g = H.prototype;
g.setTimeout = function (a) { this.N = a; };
function hc(a, b, c) { a.B = 1; a.f = ic(I(b)); a.j = c; a.F = !0; jc(a, null); }
function jc(a, b) { a.s = q(); J(a); a.A = I(a.f); var c = a.A, d = a.U; Array.isArray(d) || (d = [String(d)]); kc(c.b, "t", d); a.w = 0; a.a = lc(a.g, a.g.w ? b : null); 0 < a.J && (a.D = new Kb(n(a.ya, a, a.a), a.J)); Nb(a.G, a.a, "readystatechange", a.Sa); b = a.m ? Ca(a.m) : {}; a.j ? (a.v || (a.v = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.$(a.A, a.v, a.j, b)) : (a.v = "GET", a.a.$(a.A, a.v, null, b)); E(1); }
g.Sa = function (a) { a = a.target; var b = this.D; b && 3 == K(a) ? b.Ia() : this.ya(a); };
g.ya = function (a) {
    try {
        if (a == this.a)
            a: {
                var b = K(this.a), c = this.a.qa(), d = this.a.S();
                if (!(3 > b || 3 == b && !Ka && !this.a.Y())) {
                    this.l || 4 != b || 7 == c || (8 == c || 0 >= d ? E(3) : E(2));
                    mc(this);
                    var e = this.a.S();
                    this.H = e;
                    var f = this.a.Y();
                    if (this.b = 200 == e) {
                        if (this.R && !this.o) {
                            b: {
                                if (this.a) {
                                    var h, l = this.a;
                                    if ((h = l.a ? l.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !wa(h)) {
                                        var p = h;
                                        break b;
                                    }
                                }
                                p = null;
                            }
                            if (p)
                                this.o = !0, nc(this, p);
                            else {
                                this.b = !1;
                                this.c = 3;
                                F(12);
                                L(this);
                                pc(this);
                                break a;
                            }
                        }
                        this.F ? (qc(this, b, f), Ka && this.b && 3 == b && (Nb(this.G, this.O, "tick", this.Ra), this.O.start())) : nc(this, f);
                        4 == b && L(this);
                        this.b && !this.l && (4 == b ? rc(this.g, this) : (this.b = !1, J(this)));
                    }
                    else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.c = 3, F(12)) : (this.c = 0, F(13)), L(this), pc(this);
                }
            }
    }
    catch (D) { }
    finally { }
};
function qc(a, b, c) { for (var d = !0; !a.l && a.w < c.length;) {
    var e = tc(a, c);
    if (e == gc) {
        4 == b && (a.c = 4, F(14), d = !1);
        break;
    }
    else if (e == fc) {
        a.c = 4;
        F(15);
        d = !1;
        break;
    }
    else
        nc(a, e);
} 4 == b && 0 == c.length && (a.c = 1, F(16), d = !1); a.b = a.b && d; d || (L(a), pc(a)); }
g.Ra = function () { if (this.a) {
    var a = K(this.a), b = this.a.Y();
    this.w < b.length && (mc(this), qc(this, a, b), this.b && 4 != a && J(this));
} };
function tc(a, b) { var c = a.w, d = b.indexOf("\n", c); if (-1 == d)
    return gc; c = Number(b.substring(c, d)); if (isNaN(c))
    return fc; d += 1; if (d + c > b.length)
    return gc; b = b.substr(d, c); a.w = d + c; return b; }
g.cancel = function () { this.l = !0; L(this); };
function J(a) { a.P = q() + a.N; uc(a, a.N); }
function uc(a, b) { if (null != a.h)
    throw Error("WatchDog timer not null"); a.h = Vb(n(a.Qa, a), b); }
function mc(a) { a.h && (k.clearTimeout(a.h), a.h = null); }
g.Qa = function () { this.h = null; var a = q(); 0 <= a - this.P ? (2 != this.B && (E(3), F(17)), L(this), this.c = 2, pc(this)) : uc(this, this.P - a); };
function pc(a) { 0 == a.g.u || a.l || rc(a.g, a); }
function L(a) { mc(a); var b = a.D; b && "function" == typeof b.da && b.da(); a.D = null; Ib(a.O); Ob(a.G); a.a && (b = a.a, a.a = null, b.abort(), b.da()); }
function nc(a, b) {
    try {
        var c = a.g;
        if (0 != c.u && (c.a == a || vc(c.b, a)))
            if (c.A = a.H, !a.o && vc(c.b, a) && 3 == c.u) {
                try {
                    var d = c.ja.a.parse(b);
                }
                catch (oc) {
                    d = null;
                }
                if (Array.isArray(d) && 3 == d.length) {
                    var e = d;
                    if (0 == e[0])
                        a: {
                            if (!c.i) {
                                if (c.a)
                                    if (c.a.s + 3E3 < a.s)
                                        wc(c), c.a.cancel(), c.a = null;
                                    else
                                        break a;
                                xc(c);
                                F(18);
                            }
                        }
                    else
                        c.ia = e[1], 0 < c.ia - c.G && 37500 > e[2] && c.U && 0 == c.m && !c.l && (c.l = Vb(n(c.Na, c), 6E3));
                    if (1 >= yc(c.b) && c.O) {
                        try {
                            c.O();
                        }
                        catch (oc) { }
                        c.O = void 0;
                    }
                }
                else
                    M(c, 11);
            }
            else if ((a.o || c.a == a) && wc(c), !wa(b))
                for (b = d = c.ja.a.parse(b), d = 0; d < b.length; d++)
                    if (e =
                        b[d], c.G = e[0], e = e[1], 2 == c.u)
                        if ("c" == e[0]) {
                            c.B = e[1];
                            c.R = e[2];
                            var f = e[3];
                            null != f && (c.oa = f);
                            var h = e[5];
                            null != h && "number" === typeof h && 0 < h && (c.D = 1.5 * h);
                            var l = c, p = a.a;
                            if (p) {
                                var D = p.a ? p.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (D) {
                                    var z = l.b;
                                    !z.a && (u(D, "spdy") || u(D, "quic") || u(D, "h2")) && (z.f = z.g, z.a = new Set, z.b && (zc(z, z.b), z.b = null));
                                }
                                if (l.s) {
                                    var ta = p.a ? p.a.getResponseHeader("X-HTTP-Session-Id") : null;
                                    ta && (l.ha = ta, N(l.v, l.s, ta));
                                }
                            }
                            c.u = 3;
                            c.c && c.c.na();
                            l = c;
                            var ua = a;
                            l.ea = Ac(l, l.w ? l.R : null, l.P);
                            if (ua.o) {
                                Bc(l.b, ua);
                                var va = ua, sc = l.D;
                                sc && va.setTimeout(sc);
                                va.h && (mc(va), J(va));
                                l.a = ua;
                            }
                            else
                                Cc(l);
                            0 < c.f.length && Dc(c);
                        }
                        else
                            "stop" != e[0] && "close" != e[0] || M(c, 7);
                    else
                        3 == c.u && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? M(c, 7) : Ec(c) : "noop" != e[0] && c.c && c.c.ma(e), c.m = 0);
        E(4);
    }
    catch (oc) { }
}
function Fc(a) { if (a.I && "function" == typeof a.I)
    return a.I(); if ("string" === typeof a)
    return a.split(""); if (da(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
} b = []; c = 0; for (d in a)
    b[c++] = a[d]; return a = b; }
function Gc(a, b) { if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
else if (da(a) || "string" === typeof a)
    oa(a, b, void 0);
else {
    if (a.K && "function" == typeof a.K)
        var c = a.K();
    else if (a.I && "function" == typeof a.I)
        c = void 0;
    else if (da(a) || "string" === typeof a) {
        c = [];
        for (var d = a.length, e = 0; e < d; e++)
            c.push(e);
    }
    else
        for (e in c = [], d = 0, a)
            c[d++] = e;
    d = Fc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
} }
function O(a, b) { this.b = {}; this.a = []; this.c = 0; var c = arguments.length; if (1 < c) {
    if (c % 2)
        throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
}
else if (a)
    if (a instanceof O)
        for (c = a.K(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
    else
        for (d in a)
            this.set(d, a[d]); }
g = O.prototype;
g.I = function () { Hc(this); for (var a = [], b = 0; b < this.a.length; b++)
    a.push(this.b[this.a[b]]); return a; };
g.K = function () { Hc(this); return this.a.concat(); };
function Hc(a) { if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        P(a.b, d) && (a.a[c++] = d);
        b++;
    }
    a.a.length = c;
} if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;)
        d = a.a[b], P(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c;
} }
g.get = function (a, b) { return P(this.b, a) ? this.b[a] : b; };
g.set = function (a, b) { P(this.b, a) || (this.c++, this.a.push(a)); this.b[a] = b; };
g.forEach = function (a, b) { for (var c = this.K(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
} };
function P(a, b) { return Object.prototype.hasOwnProperty.call(a, b); }
var Ic = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Jc(a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
} }
function Q(a, b) { this.c = this.j = this.f = ""; this.h = null; this.i = this.g = ""; this.a = !1; if (a instanceof Q) {
    this.a = void 0 !== b ? b : a.a;
    Kc(this, a.f);
    this.j = a.j;
    Lc(this, a.c);
    Mc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new R;
    c.c = b.c;
    b.a && (c.a = new O(b.a), c.b = b.b);
    Nc(this, c);
    this.i = a.i;
}
else
    a && (c = String(a).match(Ic)) ? (this.a = !!b, Kc(this, c[1] || "", !0), this.j = S(c[2] || ""), Lc(this, c[3] || "", !0), Mc(this, c[4]), this.g = S(c[5] || "", !0), Nc(this, c[6] || "", !0), this.i = S(c[7] || "")) : (this.a = !!b, this.b = new R(null, this.a)); }
Q.prototype.toString = function () { var a = [], b = this.f; b && a.push(T(b, Oc, !0), ":"); var c = this.c; if (c || "file" == b)
    a.push("//"), (b = this.j) && a.push(T(b, Oc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)); if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(T(c, "/" == c.charAt(0) ? Pc : Qc, !0)); (c = this.b.toString()) && a.push("?", c); (c = this.i) && a.push("#", T(c, Rc)); return a.join(""); };
function I(a) { return new Q(a); }
function Kc(a, b, c) { a.f = c ? S(b, !0) : b; a.f && (a.f = a.f.replace(/:$/, "")); }
function Lc(a, b, c) { a.c = c ? S(b, !0) : b; }
function Mc(a, b) { if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
    a.h = b;
}
else
    a.h = null; }
function Nc(a, b, c) { b instanceof R ? (a.b = b, Sc(a.b, a.a)) : (c || (b = T(b, Tc)), a.b = new R(b, a.a)); }
function N(a, b, c) { a.b.set(b, c); }
function ic(a) { N(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)); return a; }
function Uc(a) { return a instanceof Q ? I(a) : new Q(a, void 0); }
function Vc(a, b, c, d) { var e = new Q(null, void 0); a && Kc(e, a); b && Lc(e, b); c && Mc(e, c); d && (e.g = d); return e; }
function S(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""; }
function T(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, Wc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null; }
function Wc(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16); }
var Oc = /[#\/\?@]/g, Qc = /[#\?:]/g, Pc = /[#\?]/g, Tc = /[#\?@]/g, Rc = /#/g;
function R(a, b) { this.b = this.a = null; this.c = a || null; this.f = !!b; }
function U(a) { a.a || (a.a = new O, a.b = 0, a.c && Jc(a.c, function (b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c); })); }
g = R.prototype;
g.add = function (a, b) { U(this); this.c = null; a = V(this, a); var c = this.a.get(a); c || this.a.set(a, c = []); c.push(b); this.b += 1; return this; };
function Xc(a, b) { U(a); b = V(a, b); P(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, P(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Hc(a))); }
function Yc(a, b) { U(a); b = V(a, b); return P(a.a.b, b); }
g.forEach = function (a, b) { U(this); this.a.forEach(function (c, d) { oa(c, function (e) { a.call(b, e, d, this); }, this); }, this); };
g.K = function () { U(this); for (var a = this.a.I(), b = this.a.K(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]); return c; };
g.I = function (a) { U(this); var b = []; if ("string" === typeof a)
    Yc(this, a) && (b = ra(b, this.a.get(V(this, a))));
else {
    a = this.a.I();
    for (var c = 0; c < a.length; c++)
        b = ra(b, a[c]);
} return b; };
g.set = function (a, b) { U(this); this.c = null; a = V(this, a); Yc(this, a) && (this.b -= this.a.get(a).length); this.a.set(a, [b]); this.b += 1; return this; };
g.get = function (a, b) { if (!a)
    return b; a = this.I(a); return 0 < a.length ? String(a[0]) : b; };
function kc(a, b, c) { Xc(a, b); 0 < c.length && (a.c = null, a.a.set(V(a, b), sa(c)), a.b += c.length); }
g.toString = function () { if (this.c)
    return this.c; if (!this.a)
    return ""; for (var a = [], b = this.a.K(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.I(d);
    for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
    }
} return this.c = a.join("&"); };
function V(a, b) { b = String(b); a.f && (b = b.toLowerCase()); return b; }
function Sc(a, b) { b && !a.f && (U(a), a.c = null, a.a.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (Xc(this, d), kc(this, e, c)); }, a)); a.f = b; }
function Zc(a, b) { this.b = a; this.a = b; }
function $c(a) { this.g = a || ad; k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ca && k.ca.ua && k.ca.ua() && k.ca.ua().mb); this.f = a ? this.g : 1; this.a = null; 1 < this.f && (this.a = new Set); this.b = null; this.c = []; }
var ad = 10;
function bd(a) { return a.b ? !0 : a.a ? a.a.size >= a.f : !1; }
function yc(a) { return a.b ? 1 : a.a ? a.a.size : 0; }
function vc(a, b) { return a.b ? a.b == b : a.a ? a.a.has(b) : !1; }
function zc(a, b) { a.a ? a.a.add(b) : a.b = b; }
function Bc(a, b) { a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b); }
$c.prototype.cancel = function () {
    var e_1, _a;
    this.c = cd(this);
    if (this.b)
        this.b.cancel(), this.b = null;
    else if (this.a && 0 !== this.a.size) {
        try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.cancel();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.a.clear();
    }
};
function cd(a) {
    var e_2, _a;
    if (null != a.b)
        return a.c.concat(a.b.i);
    if (null != a.a && 0 !== a.a.size) {
        var b = a.c;
        try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b = b.concat(c.i);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    }
    return sa(a.c);
}
function dd() { }
dd.prototype.stringify = function (a) { return k.JSON.stringify(a, void 0); };
dd.prototype.parse = function (a) { return k.JSON.parse(a, void 0); };
function ed() { this.a = new dd; }
function fd(a, b, c) { var d = c || ""; try {
    Gc(a, function (e, f) { var h = e; m(e) && (h = vb(e)); b.push(d + f + "=" + encodeURIComponent(h)); });
}
catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
} }
function gd(a, b) { var c = new Pb; if (k.Image) {
    var d = new Image;
    d.onload = ka(hd, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ka(hd, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ka(hd, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ka(hd, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () { if (d.ontimeout)
        d.ontimeout(); }, 1E4);
    d.src = a;
}
else
    b(!1); }
function hd(a, b, c, d, e) { try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
}
catch (f) { } }
var id = k.JSON.parse;
function W(a) { B.call(this); this.headers = new O; this.G = a || null; this.b = !1; this.s = this.a = null; this.D = ""; this.h = 0; this.f = ""; this.g = this.w = this.l = this.v = !1; this.o = 0; this.m = null; this.H = jd; this.B = this.F = !1; }
r(W, B);
var jd = "", kd = /^https?$/i, ld = ["POST", "PUT"];
g = W.prototype;
g.$ = function (a, b, c, d) {
    if (this.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.D = a;
    this.f = "";
    this.h = 0;
    this.v = !1;
    this.b = !0;
    this.a = new XMLHttpRequest;
    this.s = this.G ? Zb(this.G) : Zb(cc);
    this.a.onreadystatechange = n(this.va, this);
    try {
        this.w = !0, this.a.open(b, String(a), !0), this.w = !1;
    }
    catch (f) {
        md(this, f);
        return;
    }
    a = c || "";
    var e = new O(this.headers);
    d && Gc(d, function (f, h) { e.set(h, f); });
    d = pa(e.K());
    c = k.FormData && a instanceof k.FormData;
    !(0 <=
        na(ld, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, h) { this.a.setRequestHeader(h, f); }, this);
    this.H && (this.a.responseType = this.H);
    "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
    try {
        nd(this), 0 < this.o && ((this.B = od(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = n(this.ta, this)) : this.m = Jb(this.ta, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
    }
    catch (f) {
        md(this, f);
    }
};
function od(a) { return w && Sa(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout; }
function qa(a) { return "content-type" == a.toLowerCase(); }
g.ta = function () { "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8)); };
function md(a, b) { a.b = !1; a.a && (a.g = !0, a.a.abort(), a.g = !1); a.f = b; a.h = 5; pd(a); qd(a); }
function pd(a) { a.v || (a.v = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")); }
g.abort = function (a) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), qd(this)); };
g.C = function () { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), qd(this, !0)); W.M.C.call(this); };
g.va = function () { this.j || (this.w || this.l || this.g ? rd(this) : this.Oa()); };
g.Oa = function () { rd(this); };
function rd(a) {
    if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != K(a) || 2 != a.S()))
        if (a.l && 4 == K(a))
            Jb(a.va, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == K(a)) {
            a.b = !1;
            try {
                var b = a.S();
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default: c = !1;
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.D).match(Ic)[1] || null;
                        if (!f && k.self && k.self.location) {
                            var h = k.self.location.protocol;
                            f = h.substr(0, h.length - 1);
                        }
                        e = !kd.test(f ? f.toLowerCase() : "");
                    }
                    d = e;
                }
                if (d)
                    a.dispatchEvent("complete"),
                        a.dispatchEvent("success");
                else {
                    a.h = 6;
                    try {
                        var l = 2 < K(a) ? a.a.statusText : "";
                    }
                    catch (p) {
                        l = "";
                    }
                    a.f = l + " [" + a.S() + "]";
                    pd(a);
                }
            }
            finally {
                qd(a);
            }
        }
}
function qd(a, b) { if (a.a) {
    nd(a);
    var c = a.a, d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b || a.dispatchEvent("ready");
    try {
        c.onreadystatechange = d;
    }
    catch (e) { }
} }
function nd(a) { a.a && a.B && (a.a.ontimeout = null); a.m && (k.clearTimeout(a.m), a.m = null); }
function K(a) { return a.a ? a.a.readyState : 0; }
g.S = function () { try {
    return 2 < K(this) ? this.a.status : -1;
}
catch (a) {
    return -1;
} };
g.Y = function () { try {
    return this.a ? this.a.responseText : "";
}
catch (a) {
    return "";
} };
g.Ja = function (a) { if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return id(b);
} };
g.qa = function () { return this.h; };
g.Ma = function () { return "string" === typeof this.f ? this.f : String(this.f); };
function sd(a) { var b = ""; Ba(a, function (c, d) { b += d; b += ":"; b += c; b += "\r\n"; }); return b; }
function td(a, b, c) { a: {
    for (d in c) {
        var d = !1;
        break a;
    }
    d = !0;
} d || (c = sd(c), "string" === typeof a ? (null != c && encodeURIComponent(String(c))) : N(a, b, c)); }
function X(a, b, c) { return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b; }
function ud(a) {
    this.f = [];
    this.R = this.ea = this.v = this.P = this.a = this.ha = this.s = this.N = this.h = this.F = this.j = null;
    this.Fa = this.H = 0;
    this.Ca = X("failFast", !1, a);
    this.U = this.l = this.i = this.g = this.c = null;
    this.W = !0;
    this.A = this.ia = this.G = -1;
    this.J = this.m = this.o = 0;
    this.Ba = X("baseRetryDelayMs", 5E3, a);
    this.Ga = X("retryDelaySeedMs", 1E4, a);
    this.Da = X("forwardChannelMaxRetries", 2, a);
    this.ga = X("forwardChannelRequestTimeoutMs", 2E4, a);
    this.Ea = a && a.nb || void 0;
    this.D = void 0;
    this.w = a && a.supportsCrossDomainXhr || !1;
    this.B = "";
    this.b = new $c(a && a.concurrentRequestLimit);
    this.ja = new ed;
    this.fa = a && a.fastHandshake || !1;
    a && a.forceLongPolling && (this.W = !1);
    this.O = void 0;
}
g = ud.prototype;
g.oa = 8;
g.u = 1;
function Ec(a) { vd(a); if (3 == a.u) {
    var b = a.H++, c = I(a.v);
    N(c, "SID", a.B);
    N(c, "RID", b);
    N(c, "TYPE", "terminate");
    wd(a, c);
    b = new H(a, b, void 0);
    b.B = 2;
    b.f = ic(I(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.f.toString(), ""));
    !c && k.Image && ((new Image).src = b.f, c = !0);
    c || (b.a = lc(b.g, null), b.a.$(b.f));
    b.s = q();
    J(b);
} xd(a); }
function vd(a) { a.a && (a.a.cancel(), a.a = null); a.i && (k.clearTimeout(a.i), a.i = null); wc(a); a.b.cancel(); a.g && ("number" === typeof a.g && k.clearTimeout(a.g), a.g = null); }
function yd(a, b) { a.f.push(new Zc(a.Fa++, b)); 3 == a.u && Dc(a); }
function Dc(a) { bd(a.b) || a.g || (a.g = !0, Cb(a.xa, a), a.o = 0); }
function zd(a, b) { if (yc(a.b) >= a.b.f - (a.g ? 1 : 0))
    return !1; if (a.g)
    return a.f = b.i.concat(a.f), !0; if (1 == a.u || 2 == a.u || a.o >= (a.Ca ? 0 : a.Da))
    return !1; a.g = Vb(n(a.xa, a, b), Ad(a, a.o)); a.o++; return !0; }
g.xa = function (a) {
    if (this.g)
        if (this.g = null, 1 == this.u) {
            if (!a) {
                this.H = Math.floor(1E5 * Math.random());
                a = this.H++;
                var b = new H(this, a, void 0), c = this.j;
                this.F && (c ? (c = Ca(c), Ea(c, this.F)) : c = this.F);
                null === this.h && (b.m = c);
                var d;
                if (this.fa)
                    a: {
                        for (var e = d = 0; e < this.f.length; e++) {
                            b: {
                                var f = this.f[e];
                                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b;
                                }
                                f = void 0;
                            }
                            if (void 0 === f)
                                break;
                            d += f;
                            if (4096 < d) {
                                d = e;
                                break a;
                            }
                            if (4096 === d || e === this.f.length - 1) {
                                d = e + 1;
                                break a;
                            }
                        }
                        d = 1E3;
                    }
                else
                    d = 1E3;
                d = Bd(this, b, d);
                e = I(this.v);
                N(e, "RID", a);
                N(e, "CVER", 22);
                this.s && N(e, "X-HTTP-Session-Id", this.s);
                wd(this, e);
                this.h && c && td(e, this.h, c);
                zc(this.b, b);
                this.fa ? (N(e, "$req", d), N(e, "SID", "null"), b.R = !0, hc(b, e, null)) : hc(b, e, d);
                this.u = 2;
            }
        }
        else
            3 == this.u && (a ? Cd(this, a) : 0 == this.f.length || bd(this.b) || Cd(this));
};
function Cd(a, b) { var c; b ? c = b.W : c = a.H++; var d = I(a.v); N(d, "SID", a.B); N(d, "RID", c); N(d, "AID", a.G); wd(a, d); a.h && a.j && td(d, a.h, a.j); c = new H(a, c, a.o + 1); null === a.h && (c.m = a.j); b && (a.f = b.i.concat(a.f)); b = Bd(a, c, 1E3); c.setTimeout(Math.round(.5 * a.ga) + Math.round(.5 * a.ga * Math.random())); zc(a.b, c); hc(c, d, b); }
function wd(a, b) { a.c && Gc({}, function (c, d) { N(b, d, c); }); }
function Bd(a, b, c) { c = Math.min(a.f.length, c); var d = a.c ? n(a.c.Ha, a.c, a) : null; a: for (var e = a.f, f = -1;;) {
    var h = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
    for (var l = !0, p = 0; p < c; p++) {
        var D = e[p].b, z = e[p].a;
        D -= f;
        if (0 > D)
            f = Math.max(0, e[p].b - 100), l = !1;
        else
            try {
                fd(z, h, "req" + D + "_");
            }
            catch (ta) {
                d && d(z);
            }
    }
    if (l) {
        d = h.join("&");
        break a;
    }
} a = a.f.splice(0, c); b.i = a; return d; }
function Cc(a) { a.a || a.i || (a.J = 1, Cb(a.wa, a), a.m = 0); }
function xc(a) { if (a.a || a.i || 3 <= a.m)
    return !1; a.J++; a.i = Vb(n(a.wa, a), Ad(a, a.m)); a.m++; return !0; }
g.wa = function () { this.i = null; this.a = new H(this, "rpc", this.J); null === this.h && (this.a.m = this.j); this.a.J = 0; var a = I(this.ea); N(a, "RID", "rpc"); N(a, "SID", this.B); N(a, "CI", this.U ? "0" : "1"); N(a, "AID", this.G); wd(this, a); N(a, "TYPE", "xmlhttp"); this.h && this.j && td(a, this.h, this.j); this.D && this.a.setTimeout(this.D); var b = this.a, c = this.R; b.B = 1; b.f = ic(I(a)); b.j = null; b.F = !0; jc(b, c); };
g.Na = function () { null != this.l && (this.l = null, this.a.cancel(), this.a = null, xc(this), F(19)); };
function wc(a) { null != a.l && (k.clearTimeout(a.l), a.l = null); }
function rc(a, b) { var c = null; if (a.a == b) {
    wc(a);
    a.a = null;
    var d = 2;
}
else if (vc(a.b, b))
    c = b.i, Bc(a.b, b), d = 1;
else
    return; a.A = b.H; if (0 != a.u)
    if (b.b)
        if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.s;
            var e = a.o;
            d = Rb();
            d.dispatchEvent(new Ub(d, c, b, e));
            Dc(a);
        }
        else
            Cc(a);
    else if (e = b.c, 3 == e || 0 == e && 0 < a.A || !(1 == d && zd(a, b) || 2 == d && xc(a)))
        switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
            case 1:
                M(a, 5);
                break;
            case 4:
                M(a, 10);
                break;
            case 3:
                M(a, 6);
                break;
            default: M(a, 2);
        } }
function Ad(a, b) { var c = a.Ba + Math.floor(Math.random() * a.Ga); a.c || (c *= 2); return c * b; }
function M(a, b) { if (2 == b) {
    var c = null;
    a.c && (c = null);
    var d = n(a.Ta, a);
    c || (c = new Q("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Kc(c, "https"), ic(c));
    gd(c.toString(), d);
}
else
    F(2); a.u = 0; a.c && a.c.la(b); xd(a); vd(a); }
g.Ta = function (a) { a ? F(2) : F(1); };
function xd(a) { a.u = 0; a.A = -1; if (a.c) {
    if (0 != cd(a.b).length || 0 != a.f.length)
        a.b.c.length = 0, sa(a.f), a.f.length = 0;
    a.c.ka();
} }
function Ac(a, b, c) { var d = Uc(c); if ("" != d.c)
    b && Lc(d, b + "." + d.c), Mc(d, d.h);
else {
    var e = k.location;
    d = Vc(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
} a.N && Ba(a.N, function (f, h) { N(d, h, f); }); b = a.s; c = a.ha; b && c && N(d, b, c); N(d, "VER", a.oa); wd(a, d); return d; }
function lc(a, b) { if (b && !a.w)
    throw Error("Can't create secondary domain capable XhrIo object."); b = new W(a.Ea); b.F = a.w; return b; }
function Dd() { }
g = Dd.prototype;
g.na = function () { };
g.ma = function () { };
g.la = function () { };
g.ka = function () { };
g.Ha = function () { };
function Ed() { if (w && !(10 <= Number(Va)))
    throw Error("Environmental error: no available transport."); }
Ed.prototype.a = function (a, b) { return new Y(a, b); };
function Y(a, b) {
    B.call(this);
    this.a = new ud(b);
    this.l = a;
    this.b = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.a.j = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.pa && (a ? a["X-WebChannel-Client-Profile"] = b.pa : a = { "X-WebChannel-Client-Profile": b.pa });
    this.a.F =
        a;
    (a = b && b.httpHeadersOverwriteParam) && !wa(a) && (this.a.h = a);
    this.h = b && b.supportsCrossDomainXhr || !1;
    this.g = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !wa(b) && (this.a.s = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
    this.f = new Z(this);
}
r(Y, B);
g = Y.prototype;
g.addEventListener = function (a, b, c, d) { Y.M.addEventListener.call(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { Y.M.removeEventListener.call(this, a, b, c, d); };
g.Ka = function () { this.a.c = this.f; this.h && (this.a.w = !0); var a = this.a, b = this.l, c = this.b || void 0; F(0); a.P = b; a.N = c || {}; a.U = a.W; a.v = Ac(a, null, a.P); Dc(a); };
g.close = function () { Ec(this.a); };
g.La = function (a) { if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    yd(this.a, b);
}
else
    this.g ? (b = {}, b.__data__ = vb(a), yd(this.a, b)) : yd(this.a, a); };
g.C = function () { this.a.c = null; delete this.f; Ec(this.a); delete this.a; Y.M.C.call(this); };
function Fd(a) { ac.call(this); var b = a.__sm__; if (b) {
    a: {
        for (var c in b) {
            a = c;
            break a;
        }
        a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
}
else
    this.data = a; }
r(Fd, ac);
function Gd() { bc.call(this); this.status = 1; }
r(Gd, bc);
function Z(a) { this.a = a; }
r(Z, Dd);
Z.prototype.na = function () { this.a.dispatchEvent("a"); };
Z.prototype.ma = function (a) { this.a.dispatchEvent(new Fd(a)); };
Z.prototype.la = function (a) { this.a.dispatchEvent(new Gd(a)); };
Z.prototype.ka = function () { this.a.dispatchEvent("b"); }; /*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Ed.prototype.createWebChannel = Ed.prototype.a;
Y.prototype.send = Y.prototype.La;
Y.prototype.open = Y.prototype.Ka;
Y.prototype.close = Y.prototype.close;
Wb.NO_ERROR = 0;
Wb.TIMEOUT = 8;
Wb.HTTP_ERROR = 6;
Xb.COMPLETE = "complete";
$b.EventType = G;
G.OPEN = "a";
G.CLOSE = "b";
G.ERROR = "c";
G.MESSAGE = "d";
B.prototype.listen = B.prototype.ra;
W.prototype.listenOnce = W.prototype.sa;
W.prototype.getLastError = W.prototype.Ma;
W.prototype.getLastErrorCode = W.prototype.qa;
W.prototype.getStatus = W.prototype.S;
W.prototype.getResponseJson = W.prototype.Ja;
W.prototype.getResponseText = W.prototype.Y;
W.prototype.send = W.prototype.$;
var esm = { createWebChannelTransport: function () { return new Ed; }, ErrorCode: Wb, EventType: Xb, WebChannel: $b, XhrIo: W };
var esm_1 = esm.createWebChannelTransport;
var esm_2 = esm.ErrorCode;
var esm_3 = esm.EventType;
var esm_4 = esm.WebChannel;
var esm_5 = esm.XhrIo;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The semver (www.semver.org) version of the SDK. */ var w$1 = i.SDK_VERSION, b = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.t = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.s = function() {
        return this.t() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
/** A user with a null UID. */ b.UNAUTHENTICATED = new b(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
b.i = new b("google-credentials-uid"), b.h = new b("first-party-uid");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var E$1 = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, I$1 = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).code = t, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return __extends(n, e), n;
}(Error), N$1 = function(t, e) {
    this.user = e, this.type = "OAuth", this.o = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.o.Authorization = "Bearer " + t;
}, A$1 = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.u = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.l = function() {}, t.prototype._ = function(t) {
        this.u = t, 
        // Fire with initial user.
        t(b.UNAUTHENTICATED);
    }, t.prototype.T = function() {
        this.u = null;
    }, t;
}(), T$1 = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.I = null, 
        /** Tracks the current User. */
        this.currentUser = b.UNAUTHENTICATED, this.m = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.R = 0, 
        /** The listener registered with setChangeListener(). */
        this.u = null, this.forceRefresh = !1, this.I = function() {
            e.R++, e.currentUser = e.A(), e.m = !0, e.u && e.u(e.currentUser);
        }, this.R = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.I) : (
        // if auth is not available, invoke tokenListener once with null token
        this.I(null), t.get().then((function(t) {
            e.auth = t, e.I && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.I);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.R, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.R !== e ? (Ne("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
            t.getToken()) : n ? (De("string" == typeof n.accessToken), new N$1(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.l = function() {
        this.forceRefresh = !0;
    }, t.prototype._ = function(t) {
        this.u = t, 
        // Fire the initial event
        this.m && t(this.currentUser);
    }, t.prototype.T = function() {
        this.auth && this.auth.removeAuthTokenListener(this.I), this.I = null, this.u = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.A = function() {
        var t = this.auth && this.auth.getUid();
        return De(null === t || "string" == typeof t), new b(t);
    }, t;
}(), _ = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.V = e, this.type = "FirstParty", this.user = b.h;
    }
    return Object.defineProperty(t.prototype, "o", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.V
            }, e = this.P.auth.p([]);
            return e && (t.Authorization = e), t;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}(), D = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.V = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new _(this.P, this.V));
    }, t.prototype._ = function(t) {
        // Fire with initial uid.
        t(b.h);
    }, t.prototype.T = function() {}, t.prototype.l = function() {}, t;
}(), R$1 = /** @class */ function() {
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new I$1(E$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new I$1(E$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new I$1(E$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new I$1(E$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    return t.now = function() {
        return t.fromMillis(Date.now());
    }, t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.g = function(t) {
        return this.seconds === t.seconds ? ke(this.nanoseconds, t.nanoseconds) : ke(this.seconds, t.seconds);
    }, t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), V$1 = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.v = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new R$1(0, 0));
    }, t.prototype.S = function(t) {
        return this.timestamp.g(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.C = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.D = function() {
        return this.timestamp;
    }, t;
}(), k$1 = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && _e(), void 0 === n ? n = t.length - e : n > t.length - e && _e(), 
        this.segments = t, this.offset = e, this.F = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.F;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.N(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.$(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.L = function(t) {
        return t = void 0 === t ? 1 : t, this.$(this.segments, this.offset + t, this.length - t);
    }, t.prototype.O = function() {
        return this.$(this.segments, this.offset, this.length - 1);
    }, t.prototype.k = function() {
        return this.segments[this.offset];
    }, t.prototype.q = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.M = function() {
        return 0 === this.length;
    }, t.prototype.B = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.U = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.W = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.N = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), S$1 = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.$ = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.j = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.W().join("/");
    }, n.prototype.toString = function() {
        return this.j();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    n.G = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new n(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, n;
}(k$1);

/**
 * An error class used for Firestore-generated errors. Ideally we should be
 * using FirebaseError, but integrating with it is overly arduous at the moment,
 * so we define our own compatible error class (with a `name` of 'FirebaseError'
 * and compatible `code` and `message` fields.)
 */ S$1.H = new S$1([]);

var U$1 = /^[_a-zA-Z][_a-zA-Z0-9]*$/, P$1 = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.$ = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.K = function(t) {
        return U$1.test(t);
    }, n.prototype.j = function() {
        return this.W().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.K(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.j();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.Y = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.X = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.J = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var u = t[i];
            if ("\\" === u) {
                if (i + 1 === t.length) throw new I$1(E$1.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new I$1(E$1.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }
        if (o(), s) throw new I$1(E$1.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n;
}(k$1);

/** A dot-separated path for navigating sub-objects within a document. */ P$1.H = new P$1([]);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var O$1 = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.Z = function(e) {
        return new t(S$1.G(e).L(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.tt = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === S$1.N(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.N = function(t, e) {
        return S$1.N(t.path, e.path);
    }, t.et = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.st = function(e) {
        return new t(new S$1(e.slice()));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function L$1(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function q$1(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function M$1(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ O$1.EMPTY = new O$1(new S$1([]));

var C$1 = /** @class */ function() {
    function t(t) {
        this.it = t;
    }
    return t.fromBase64String = function(e) {
        return new t(be.nt().atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return be.nt().btoa(this.it);
    }, t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.it);
    }, t.prototype.rt = function() {
        return 2 * this.it.length;
    }, t.prototype.S = function(t) {
        return ke(this.it, t.it);
    }, t.prototype.isEqual = function(t) {
        return this.it === t.it;
    }, t;
}();

function F$1(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function x$1(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */ function j(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the local time at which this timestamp was first set.
 */ function B$1(t) {
    var e = X$1(t.mapValue.fields.__local_write_time__.timestampValue);
    return new R$1(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
C$1.ht = new C$1("");

var G$1 = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function z(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? j(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : _e();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Q$1(t, e) {
    var n = z(t);
    if (n !== z(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return B$1(t).isEqual(B$1(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = X$1(t.timestampValue), r = X$1(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return J$1(t.bytesValue).isEqual(J$1(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return $(t.geoPointValue.latitude) === $(e.geoPointValue.latitude) && $(t.geoPointValue.longitude) === $(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return $(t.integerValue) === $(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = $(t.doubleValue), r = $(e.doubleValue);
                return n === r ? x$1(n) === x$1(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return Se(t.arrayValue.values || [], e.arrayValue.values || [], Q$1);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (L$1(n) !== L$1(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !Q$1(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return _e();
    }
}

function W$1(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return Q$1(t, e);
    }));
}

function H$1(t, e) {
    var n = z(t), r = z(e);
    if (n !== r) return ke(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return ke(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = $(t.integerValue || t.doubleValue), r = $(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return Y$1(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return Y$1(B$1(t), B$1(e));

      case 5 /* StringValue */ :
        return ke(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = J$1(t), r = J$1(e);
            return n.S(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = ke(n[i], r[i]);
                if (0 !== o) return o;
            }
            return ke(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = ke($(t.latitude), $(e.latitude));
            return 0 !== n ? n : ke($(t.longitude), $(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = H$1(n[i], r[i]);
                if (o) return o;
            }
            return ke(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = ke(r[s], o[s]);
                if (0 !== u) return u;
                var a = H$1(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
            }
            return ke(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw _e();
    }
}

function Y$1(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return ke(t, e);
    var n = X$1(t), r = X$1(e), i = ke(n.seconds, r.seconds);
    return 0 !== i ? i : ke(n.nanos, r.nanos);
}

function K$1(t) {
    return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t) {
            var e = X$1(t);
            return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? J$1(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, 
        O$1.Z(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function(e) {
            for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += t(s);
            }
            return n + "]";
        }(e.arrayValue) : "mapValue" in e ? function(e) {
            for (
            // Iteration order in JavaScript is not guaranteed. To ensure that we generate
            // matching canonical IDs for identical maps, we need to sort the keys.
            var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
            }
            return n + "}";
        }(e.mapValue) : _e();
        var n, r;
    }(t);
}

function X$1(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (De(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = G$1.exec(t);
        if (De(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: $(t.seconds),
        nanos: $(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function $(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function J$1(t) {
    return "string" == typeof t ? C$1.fromBase64String(t) : C$1.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function Z$1(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.j()
    };
}

/** Returns true if `value` is an IntegerValue . */ function tt(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function et(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function nt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function rt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function it(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Transforms a value into a server-generated timestamp. */ var ot = /** @class */ function() {
    function t() {}
    return t.prototype.ot = function(t, e) {
        return function(t, e) {
            var n = {
                fields: {
                    __type__: {
                        stringValue: "server_timestamp"
                    },
                    __local_write_time__: {
                        timestampValue: {
                            seconds: t.seconds,
                            nanos: t.nanoseconds
                        }
                    }
                }
            };
            return e && (n.fields.__previous_value__ = e), {
                mapValue: n
            };
        }(e, t);
    }, t.prototype.at = function(t, e) {
        return e;
    }, t.prototype.ut = function(t) {
        return null;
        // Server timestamps are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t;
    }, t;
}();

ot.instance = new ot;

/** Transforms an array value via a union operation. */
var st = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.ot = function(t, e) {
        return this.apply(t);
    }, t.prototype.at = function(t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var e = ht(t), n = function(t) {
            e.some((function(e) {
                return Q$1(e, t);
            })) || e.push(t);
        }, r = 0, i = this.elements; r < i.length; r++) {
            n(i[r]);
        }
        return {
            arrayValue: {
                values: e
            }
        };
    }, t.prototype.ut = function(t) {
        return null;
        // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t && Se(this.elements, e.elements, Q$1);
    }, t;
}(), ut = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.ot = function(t, e) {
        return this.apply(t);
    }, t.prototype.at = function(t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var e = ht(t), n = function(t) {
            e = e.filter((function(e) {
                return !Q$1(e, t);
            }));
        }, r = 0, i = this.elements; r < i.length; r++) {
            n(i[r]);
        }
        return {
            arrayValue: {
                values: e
            }
        };
    }, t.prototype.ut = function(t) {
        return null;
        // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t && Se(this.elements, e.elements, Q$1);
    }, t;
}(), at = /** @class */ function() {
    function t(t, e) {
        this.serializer = t, this.ct = e;
    }
    return t.prototype.ot = function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = this.ut(t), r = this.asNumber(n) + this.asNumber(this.ct);
        return tt(n) && tt(this.ct) ? this.serializer.lt(r) : this.serializer._t(r);
    }, t.prototype.at = function(t, e) {
        return e;
    }, 
    /**
     * Inspects the provided value, returning the provided value if it is already
     * a NumberValue, otherwise returning a coerced value of 0.
     */
    t.prototype.ut = function(t) {
        return tt(e = t) || function(t) {
            return !!t && "doubleValue" in t;
        }(e) ? t : {
            integerValue: 0
        };
        var e;
    }, t.prototype.isEqual = function(e) {
        return e instanceof t && Q$1(this.ct, e.ct);
    }, t.prototype.asNumber = function(t) {
        return $(t.integerValue || t.doubleValue);
    }, t;
}();

/** Transforms an array value via a remove operation. */ function ht(t) {
    return et(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var ct = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(P$1.N)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.ft = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].B(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return Se(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), ft = /** @class */ function() {
    function t(t, e) {
        this.field = t, this.transform = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.field.isEqual(t.field) && this.transform.isEqual(t.transform);
    }, t;
}(), lt = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
e) {
    this.version = t, this.transformResults = e;
}, pt = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.dt = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "wt", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Returns true if the preconditions is valid for the given document
     * (or null if no document is available).
     */
    t.prototype.Tt = function(t) {
        return void 0 !== this.updateTime ? t instanceof _t && t.version.isEqual(this.updateTime) : void 0 === this.exists || this.exists === t instanceof _t;
    }, t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}(), dt = /** @class */ function() {
    function t() {}
    return t.prototype.Et = function(t) {}, 
    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.min().
     */
    t.It = function(t) {
        return t instanceof _t ? t.version : V$1.min();
    }, t;
}(), yt = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).key = t, i.value = n, i.Rt = r, i.type = 0 /* Set */ , 
        i;
    }
    return __extends(n, e), n.prototype.at = function(t, e) {
        this.Et(t);
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        var n = e.version;
        return new _t(this.key, n, this.value, {
            hasCommittedMutations: !0
        });
    }, n.prototype.ot = function(t, e, n) {
        if (this.Et(t), !this.Rt.Tt(t)) return t;
        var r = dt.It(t);
        return new _t(this.key, r, this.value, {
            At: !0
        });
    }, n.prototype.Pt = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.Rt.isEqual(t.Rt);
    }, n;
}(dt), vt = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this) || this).key = t, o.data = n, o.Vt = r, o.Rt = i, o.type = 1 /* Patch */ , 
        o;
    }
    return __extends(n, e), n.prototype.at = function(t, e) {
        if (this.Et(t), !this.Rt.Tt(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Rt(this.key, e.version);
        var n = this.pt(t);
        return new _t(this.key, e.version, n, {
            hasCommittedMutations: !0
        });
    }, n.prototype.ot = function(t, e, n) {
        if (this.Et(t), !this.Rt.Tt(t)) return t;
        var r = dt.It(t), i = this.pt(t);
        return new _t(this.key, r, i, {
            At: !0
        });
    }, n.prototype.Pt = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Vt.isEqual(t.Vt) && this.Rt.isEqual(t.Rt);
    }, 
    /**
     * Patches the data of document if available or creates a new document. Note
     * that this does not check whether or not the precondition of this patch
     * holds.
     */
    n.prototype.pt = function(t) {
        var e;
        return e = t instanceof _t ? t.data() : bt.empty(), this.yt(e);
    }, n.prototype.yt = function(t) {
        var e = this, n = new Et(t);
        return this.Vt.fields.forEach((function(t) {
            if (!t.M()) {
                var r = e.data.field(t);
                null !== r ? n.set(t, r) : n.delete(t);
            }
        })), n.gt();
    }, n;
}(dt), mt = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.fieldTransforms = n, r.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Rt = pt.exists(!0), r;
    }
    return __extends(n, e), n.prototype.at = function(t, e) {
        if (this.Et(t), De(null != e.transformResults), !this.Rt.Tt(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Rt(this.key, e.version);
        var n = this.bt(t), r = this.vt(t, e.transformResults), i = e.version, o = this.St(n.data(), r);
        return new _t(this.key, i, o, {
            hasCommittedMutations: !0
        });
    }, n.prototype.ot = function(t, e, n) {
        if (this.Et(t), !this.Rt.Tt(t)) return t;
        var r = this.bt(t), i = this.Ct(n, t, e), o = this.St(r.data(), i);
        return new _t(this.key, r.version, o, {
            At: !0
        });
    }, n.prototype.Pt = function(t) {
        for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) {
            var i = r[n], o = t instanceof _t ? t.field(i.field) : void 0, s = i.transform.ut(o || null);
            null != s && (e = null == e ? (new Et).set(i.field, s) : e.set(i.field, s));
        }
        return e ? e.gt() : null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && Se(this.fieldTransforms, t.fieldTransforms, (function(t, e) {
            return t.isEqual(e);
        })) && this.Rt.isEqual(t.Rt);
    }, 
    /**
     * Asserts that the given MaybeDocument is actually a Document and verifies
     * that it matches the key for this mutation. Since we only support
     * transformations with precondition exists this method is guaranteed to be
     * safe.
     */
    n.prototype.bt = function(t) {
        return t;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use after a
     * TransformMutation has been acknowledged by the server.
     *
     * @param baseDoc The document prior to applying this mutation batch.
     * @param serverTransformResults The transform results received by the server.
     * @return The transform results list.
     */
    n.prototype.vt = function(t, e) {
        var n = [];
        De(this.fieldTransforms.length === e.length);
        for (var r = 0; r < e.length; r++) {
            var i = this.fieldTransforms[r], o = i.transform, s = null;
            t instanceof _t && (s = t.field(i.field)), n.push(o.at(s, e[r]));
        }
        return n;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use when applying a
     * TransformMutation locally.
     *
     * @param localWriteTime The local time of the transform mutation (used to
     *     generate ServerTimestampValues).
     * @param maybeDoc The current state of the document after applying all
     *     previous mutations.
     * @param baseDoc The document prior to applying this mutation batch.
     * @return The transform results list.
     */
    n.prototype.Ct = function(t, e, n) {
        for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) {
            var s = o[i], u = s.transform, a = null;
            e instanceof _t && (a = e.field(s.field)), null === a && n instanceof _t && (
            // If the current document does not contain a value for the mutated
            // field, use the value that existed before applying this mutation
            // batch. This solves an edge case where a PatchMutation clears the
            // values in a nested map before the TransformMutation is applied.
            a = n.field(s.field)), r.push(u.ot(a, t));
        }
        return r;
    }, n.prototype.St = function(t, e) {
        for (var n = new Et(t), r = 0; r < this.fieldTransforms.length; r++) {
            var i = this.fieldTransforms[r].field;
            n.set(i, e[r]);
        }
        return n.gt();
    }, n;
}(dt), gt = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Rt = n, r.type = 3 /* Delete */ , r;
    }
    return __extends(n, e), n.prototype.at = function(t, e) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return this.Et(t), new Dt(this.key, e.version, {
            hasCommittedMutations: !0
        });
    }, n.prototype.ot = function(t, e, n) {
        return this.Et(t), this.Rt.Tt(t) ? new Dt(this.key, V$1.min()) : t;
    }, n.prototype.Pt = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Rt.isEqual(t.Rt);
    }, n;
}(dt), wt = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Rt = n, r.type = 4 /* Verify */ , r;
    }
    return __extends(n, e), n.prototype.at = function(t, e) {
        _e();
    }, n.prototype.ot = function(t, e, n) {
        _e();
    }, n.prototype.Pt = function(t) {
        _e();
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Rt.isEqual(t.Rt);
    }, n;
}(dt), bt = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    return t.empty = function() {
        return new t({
            mapValue: {}
        });
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t.M()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!it(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t.q()]) || null;
    }, t.prototype.isEqual = function(t) {
        return Q$1(this.proto, t.proto);
    }, t;
}(), Et = /** @class */ function() {
    /**
     * @param baseObject The object to mutate.
     */
    function t(t) {
        void 0 === t && (t = bt.empty()), this.Dt = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.Ft = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */    return t.prototype.set = function(t, e) {
        return this.Nt(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.Nt(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.Nt = function(t, e) {
        for (var n = this.Ft, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === z(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.q(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.gt = function() {
        var t = this.$t(P$1.H, this.Ft);
        return null != t ? new bt(t) : this.Dt;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.EMPTY_PATH to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.$t = function(t, e) {
        var n = this, r = !1, i = this.Dt.field(t), o = it(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var s = n.$t(t.child(i), e);
                null != s && (o[i] = s, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}();

/** A field path and the TransformOperation to perform upon it. */
/**
 * Returns a FieldMask built from all fields in a MapValue.
 */
function It(t) {
    var e = [];
    return q$1(t.fields || {}, (function(t, n) {
        var r = new P$1([ t ]);
        if (it(n)) {
            var i = It(n.mapValue).fields;
            if (0 === i.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(r); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, s = i; o < s.length; o++) {
                var u = s[o];
                e.push(r.child(u));
            }
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(r);
    })), new ct(e)
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */;
}

var Nt, At, Tt = function(t, e) {
    this.key = t, this.version = e;
}, _t = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this, t, n) || this).Lt = r, o.At = !!i.At, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return __extends(n, e), n.prototype.field = function(t) {
        return this.Lt.field(t);
    }, n.prototype.data = function() {
        return this.Lt;
    }, n.prototype.Ot = function() {
        return this.Lt.proto;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.At === t.At && this.hasCommittedMutations === t.hasCommittedMutations && this.Lt.isEqual(t.Lt);
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.Lt.toString() + ", {hasLocalMutations: " + this.At + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.At || this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), n;
}(Tt), Dt = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return __extends(n, e), n.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(Tt), Rt = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(Tt), Vt = /** @class */ function() {
    /**
     * Initializes a Target with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     *
     * NOTE: you should always construct `Target` from `Query.toTarget` instead of
     * using this constructor, because `Query` provides an implicit `orderBy`
     * property.
     */
    function t(t, e, n, r, i, o, s) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
        this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
        this.startAt = o, this.endAt = s, this.kt = null;
    }
    return t.prototype.canonicalId = function() {
        if (null === this.kt) {
            var t = this.path.j();
            null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup), t += "|f:", 
            t += this.filters.map((function(t) {
                return t.canonicalId();
            })).join(","), t += "|ob:", t += this.orderBy.map((function(t) {
                return t.canonicalId();
            })).join(","), F$1(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", 
            t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), 
            this.kt = t;
        }
        return this.kt;
    }, t.prototype.toString = function() {
        var t = this.path.j();
        return null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup), 
        this.filters.length > 0 && (t += ", filters: [" + this.filters.join(", ") + "]"), 
        F$1(this.limit) || (t += ", limit: " + this.limit), this.orderBy.length > 0 && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"), 
        this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), 
        "Target(" + t + ")";
    }, t.prototype.isEqual = function(t) {
        if (this.limit !== t.limit) return !1;
        if (this.orderBy.length !== t.orderBy.length) return !1;
        for (var e = 0; e < this.orderBy.length; e++) if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
        if (this.filters.length !== t.filters.length) return !1;
        for (var n = 0; n < this.filters.length; n++) if (!this.filters[n].isEqual(t.filters[n])) return !1;
        return this.collectionGroup === t.collectionGroup && !!this.path.isEqual(t.path) && !!(null !== this.startAt ? this.startAt.isEqual(t.startAt) : null === t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt);
    }, t.prototype.qt = function() {
        return O$1.et(this.path) && null === this.collectionGroup && 0 === this.filters.length;
    }, t;
}(), kt = /** @class */ function() {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    function t(t, e, n, r, i, o /* First */ , s, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
        void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.Mt = n, 
        this.filters = r, this.limit = i, this.xt = o, this.startAt = s, this.endAt = u, 
        this.Bt = null, 
        // The corresponding `Target` of this `Query` instance.
        this.Ut = null, this.startAt && this.Qt(this.startAt), this.endAt && this.Qt(this.endAt);
    }
    return t.Wt = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "orderBy", {
        get: function() {
            if (null === this.Bt) {
                this.Bt = [];
                var t = this.jt(), e = this.Gt();
                if (null !== t && null === e) 
                // In order to implicitly add key ordering, we must also add the
                // inequality filter field for it to be a valid query.
                // Note that the default inequality field and key ordering is ascending.
                t.Y() || this.Bt.push(new Ct(t)), this.Bt.push(new Ct(P$1.X(), "asc" /* ASCENDING */)); else {
                    for (var n = !1, r = 0, i = this.Mt; r < i.length; r++) {
                        var o = i[r];
                        this.Bt.push(o), o.field.Y() && (n = !0);
                    }
                    if (!n) {
                        // The order of the implicit key ordering always matches the last
                        // explicit order by
                        var s = this.Mt.length > 0 ? this.Mt[this.Mt.length - 1].dir : "asc" /* ASCENDING */;
                        this.Bt.push(new Ct(P$1.X(), s));
                    }
                }
            }
            return this.Bt;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Ht = function(e) {
        var n = this.filters.concat([ e ]);
        return new t(this.path, this.collectionGroup, this.Mt.slice(), n, this.limit, this.xt, this.startAt, this.endAt);
    }, t.prototype.Kt = function(e) {
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var n = this.Mt.concat([ e ]);
        return new t(this.path, this.collectionGroup, n, this.filters.slice(), this.limit, this.xt, this.startAt, this.endAt);
    }, t.prototype.zt = function(e) {
        return new t(this.path, this.collectionGroup, this.Mt.slice(), this.filters.slice(), e, "F" /* First */ , this.startAt, this.endAt);
    }, t.prototype.Yt = function(e) {
        return new t(this.path, this.collectionGroup, this.Mt.slice(), this.filters.slice(), e, "L" /* Last */ , this.startAt, this.endAt);
    }, t.prototype.Xt = function(e) {
        return new t(this.path, this.collectionGroup, this.Mt.slice(), this.filters.slice(), this.limit, this.xt, e, this.endAt);
    }, t.prototype.Jt = function(e) {
        return new t(this.path, this.collectionGroup, this.Mt.slice(), this.filters.slice(), this.limit, this.xt, this.startAt, e);
    }, 
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */
    t.prototype.Zt = function(e) {
        return new t(e, 
        /*collectionGroup=*/ null, this.Mt.slice(), this.filters.slice(), this.limit, this.xt, this.startAt, this.endAt);
    }, 
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */
    t.prototype.te = function() {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.Mt.length || 1 === this.Mt.length && this.Mt[0].field.Y());
    }, 
    // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.
    t.prototype.canonicalId = function() {
        return this.ee().canonicalId() + "|lt:" + this.xt;
    }, t.prototype.toString = function() {
        return "Query(target=" + this.ee().toString() + "; limitType=" + this.xt + ")";
    }, t.prototype.isEqual = function(t) {
        return this.ee().isEqual(t.ee()) && this.xt === t.xt;
    }, t.prototype.se = function(t, e) {
        for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
            var o = i[r], s = o.compare(t, e);
            if (0 !== s) return s;
            n = n || o.field.Y();
        }
        return 0;
    }, t.prototype.matches = function(t) {
        return this.ie(t) && this.ne(t) && this.re(t) && this.he(t);
    }, t.prototype.oe = function() {
        return !F$1(this.limit) && "F" /* First */ === this.xt;
    }, t.prototype.ae = function() {
        return !F$1(this.limit) && "L" /* Last */ === this.xt;
    }, t.prototype.Gt = function() {
        return this.Mt.length > 0 ? this.Mt[0].field : null;
    }, t.prototype.jt = function() {
        for (var t = 0, e = this.filters; t < e.length; t++) {
            var n = e[t];
            if (n instanceof St && n.ue()) return n.field;
        }
        return null;
    }, 
    // Checks if any of the provided Operators are included in the query and
    // returns the first one that is, or null if none are.
    t.prototype.ce = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            var r = n[e];
            if (r instanceof St && t.indexOf(r.op) >= 0) return r.op;
        }
        return null;
    }, t.prototype.qt = function() {
        return this.ee().qt();
    }, t.prototype.le = function() {
        return null !== this.collectionGroup;
    }, 
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */
    t.prototype.ee = function() {
        if (!this.Ut) if ("F" /* First */ === this.xt) this.Ut = new Vt(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt); else {
            for (
            // Flip the orderBy directions since we want the last results
            var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                var r = n[e], i = "desc" /* DESCENDING */ === r.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
                t.push(new Ct(r.field, i));
            }
            // We need to swap the cursors to match the now-flipped query ordering.
                        var o = this.endAt ? new Mt(this.endAt.position, !this.endAt.before) : null, s = this.startAt ? new Mt(this.startAt.position, !this.startAt.before) : null;
            // Now return as a LimitType.First query.
                        this.Ut = new Vt(this.path, this.collectionGroup, t, this.filters, this.limit, o, s);
        }
        return this.Ut;
    }, t.prototype.ie = function(t) {
        var e = t.key.path;
        return null !== this.collectionGroup ? t.key.tt(this.collectionGroup) && this.path.B(e) : O$1.et(this.path) ? this.path.isEqual(e) : this.path.U(e);
    }, 
    /**
     * A document must have a value for every ordering clause in order to show up
     * in the results.
     */
    t.prototype.ne = function(t) {
        for (var e = 0, n = this.Mt; e < n.length; e++) {
            var r = n[e];
            // order by key always matches
                        if (!r.field.Y() && null === t.field(r.field)) return !1;
        }
        return !0;
    }, t.prototype.re = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            if (!n[e].matches(t)) return !1;
        }
        return !0;
    }, 
    /**
     * Makes sure a document is within the bounds, if provided.
     */
    t.prototype.he = function(t) {
        return !(this.startAt && !this.startAt._e(this.orderBy, t) || this.endAt && this.endAt._e(this.orderBy, t));
    }, t.prototype.Qt = function(t) {}, t;
}(), St = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return __extends(n, e), n.create = function(t, e, r) {
        if (t.Y()) return "in" /* IN */ === e ? new Pt(t, r) : new Ut(t, e, r);
        if (nt(r)) {
            if ("==" /* EQUAL */ !== e) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new n(t, e, r);
        }
        if (rt(r)) {
            if ("==" /* EQUAL */ !== e) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new n(t, e, r);
        }
        return "array-contains" /* ARRAY_CONTAINS */ === e ? new Ot(t, r) : "in" /* IN */ === e ? new Lt(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new qt(t, r) : new n(t, e, r);
    }, n.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Only compare types with matching backend order (such as double and int).
                return null !== e && z(this.value) === z(e) && this.fe(H$1(e, this.value));
    }, n.prototype.fe = function(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return _e();
        }
    }, n.prototype.ue = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ ].indexOf(this.op) >= 0;
    }, n.prototype.canonicalId = function() {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return this.field.j() + this.op.toString() + K$1(this.value);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.op === t.op && this.field.isEqual(t.field) && Q$1(this.value, t.value);
    }, n.prototype.toString = function() {
        return this.field.j() + " " + this.op + " " + K$1(this.value);
    }, n;
}((function() {})), Ut = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, r) || this).key = O$1.Z(r.referenceValue), i;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = O$1.N(t.key, this.key);
        return this.fe(e);
    }, n;
}(St), Pt = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "in" /* IN */ , n) || this).keys = (n.arrayValue.values || []).map((function(t) {
            return O$1.Z(t.referenceValue);
        })), r;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(St), Ot = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return et(e) && W$1(e.arrayValue, this.value);
    }, n;
}(St), Lt = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "in" /* IN */ , n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && W$1(this.value.arrayValue, e);
    }, n;
}(St), qt = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!et(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return W$1(e.value.arrayValue, t);
        }));
    }, n;
}(St), Mt = /** @class */ function() {
    function t(t, e) {
        this.position = t, this.before = e;
    }
    return t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return (this.before ? "b" : "a") + ":" + this.position.map((function(t) {
            return K$1(t);
        })).join(",");
    }, 
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */
    t.prototype._e = function(t, e) {
        for (var n = 0, r = 0; r < this.position.length; r++) {
            var i = t[r], o = this.position[r];
            if (n = i.field.Y() ? O$1.N(O$1.Z(o.referenceValue), e.key) : H$1(o, e.field(i.field)), 
            "desc" /* DESCENDING */ === i.dir && (n *= -1), 0 !== n) break;
        }
        return this.before ? n <= 0 : n < 0;
    }, t.prototype.isEqual = function(t) {
        if (null === t) return !1;
        if (this.before !== t.before || this.position.length !== t.position.length) return !1;
        for (var e = 0; e < this.position.length; e++) if (!Q$1(this.position[e], t.position[e])) return !1;
        return !0;
    }, t;
}(), Ct = /** @class */ function() {
    function t(t, e) {
        this.field = t, void 0 === e && (e = "asc" /* ASCENDING */), this.dir = e, this.de = t.Y();
    }
    return t.prototype.compare = function(t, e) {
        var n = this.de ? O$1.N(t.key, e.key) : function(t, e, n) {
            var r = e.field(t), i = n.field(t);
            return null !== r && null !== i ? H$1(r, i) : _e();
        }(this.field, t, e);
        switch (this.dir) {
          case "asc" /* ASCENDING */ :
            return n;

          case "desc" /* DESCENDING */ :
            return -1 * n;

          default:
            return _e();
        }
    }, t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return this.field.j() + this.dir.toString();
    }, t.prototype.toString = function() {
        return this.field.j() + " (" + this.dir + ")";
    }, t.prototype.isEqual = function(t) {
        return this.dir === t.dir && this.field.isEqual(t.field);
    }, t;
}(), Ft = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , s) {
        void 0 === i && (i = V$1.min()), void 0 === o && (o = V$1.min()), void 0 === s && (s = C$1.ht), 
        this.target = t, this.targetId = e, this.we = n, this.sequenceNumber = r, this.Te = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.Ee = function(e) {
        return new t(this.target, this.targetId, this.we, e, this.Te, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.Ie = function(e, n) {
        return new t(this.target, this.targetId, this.we, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.me = function(e) {
        return new t(this.target, this.targetId, this.we, this.sequenceNumber, this.Te, e, this.resumeToken);
    }, t;
}(), xt = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function jt(t) {
    switch (t) {
      case E$1.OK:
        return _e();

      case E$1.CANCELLED:
      case E$1.UNKNOWN:
      case E$1.DEADLINE_EXCEEDED:
      case E$1.RESOURCE_EXHAUSTED:
      case E$1.INTERNAL:
      case E$1.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case E$1.UNAUTHENTICATED:
        return !1;

      case E$1.INVALID_ARGUMENT:
      case E$1.NOT_FOUND:
      case E$1.ALREADY_EXISTS:
      case E$1.PERMISSION_DENIED:
      case E$1.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case E$1.ABORTED:
      case E$1.OUT_OF_RANGE:
      case E$1.UNIMPLEMENTED:
      case E$1.DATA_LOSS:
        return !0;

      default:
        return _e();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function Bt(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return Ae("GRPC error has no .code"), E$1.UNKNOWN;
    switch (t) {
      case Nt.OK:
        return E$1.OK;

      case Nt.CANCELLED:
        return E$1.CANCELLED;

      case Nt.UNKNOWN:
        return E$1.UNKNOWN;

      case Nt.DEADLINE_EXCEEDED:
        return E$1.DEADLINE_EXCEEDED;

      case Nt.RESOURCE_EXHAUSTED:
        return E$1.RESOURCE_EXHAUSTED;

      case Nt.INTERNAL:
        return E$1.INTERNAL;

      case Nt.UNAVAILABLE:
        return E$1.UNAVAILABLE;

      case Nt.UNAUTHENTICATED:
        return E$1.UNAUTHENTICATED;

      case Nt.INVALID_ARGUMENT:
        return E$1.INVALID_ARGUMENT;

      case Nt.NOT_FOUND:
        return E$1.NOT_FOUND;

      case Nt.ALREADY_EXISTS:
        return E$1.ALREADY_EXISTS;

      case Nt.PERMISSION_DENIED:
        return E$1.PERMISSION_DENIED;

      case Nt.FAILED_PRECONDITION:
        return E$1.FAILED_PRECONDITION;

      case Nt.ABORTED:
        return E$1.ABORTED;

      case Nt.OUT_OF_RANGE:
        return E$1.OUT_OF_RANGE;

      case Nt.UNIMPLEMENTED:
        return E$1.UNIMPLEMENTED;

      case Nt.DATA_LOSS:
        return E$1.DATA_LOSS;

      default:
        return _e();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (At = Nt || (Nt = {}))[At.OK = 0] = "OK", At[At.CANCELLED = 1] = "CANCELLED", 
At[At.UNKNOWN = 2] = "UNKNOWN", At[At.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
At[At.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", At[At.NOT_FOUND = 5] = "NOT_FOUND", 
At[At.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", At[At.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
At[At.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", At[At.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
At[At.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", At[At.ABORTED = 10] = "ABORTED", 
At[At.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", At[At.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
At[At.INTERNAL = 13] = "INTERNAL", At[At.UNAVAILABLE = 14] = "UNAVAILABLE", At[At.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var Gt = /** @class */ function() {
    function t(t, e) {
        this.N = t, this.root = e || Qt.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.Re = function(e, n) {
        return new t(this.N, this.root.Re(e, n, this.N).Ae(null, null, Qt.Pe, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.N, this.root.remove(e, this.N).Ae(null, null, Qt.Pe, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.M(); ) {
            var n = this.N(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.M(); ) {
            var r = this.N(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.M = function() {
        return this.root.M();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.Ve = function() {
        return this.root.Ve();
    }, 
    // Returns the maximum key in the map.
    t.prototype.pe = function() {
        return this.root.pe();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ye = function(t) {
        return this.root.ye(t);
    }, t.prototype.forEach = function(t) {
        this.ye((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.ye((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ge = function(t) {
        return this.root.ge(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.be = function() {
        return new zt(this.root, null, this.N, !1);
    }, t.prototype.ve = function(t) {
        return new zt(this.root, t, this.N, !1);
    }, t.prototype.Se = function() {
        return new zt(this.root, null, this.N, !0);
    }, t.prototype.Ce = function(t) {
        return new zt(this.root, t, this.N, !0);
    }, t;
}(), zt = /** @class */ function() {
    function t(t, e, n, r) {
        this.De = r, this.Fe = [];
        for (var i = 1; !t.M(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.De ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Fe.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.Fe.push(t), t = this.De ? t.right : t.left;
        }
    }
    return t.prototype.Ne = function() {
        var t = this.Fe.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.De) for (t = t.left; !t.M(); ) this.Fe.push(t), t = t.right; else for (t = t.right; !t.M(); ) this.Fe.push(t), 
        t = t.left;
        return e;
    }, t.prototype.$e = function() {
        return this.Fe.length > 0;
    }, t.prototype.Le = function() {
        if (0 === this.Fe.length) return null;
        var t = this.Fe[this.Fe.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), Qt = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.Ae = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.M = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ye = function(t) {
        return this.left.ye(t) || t(this.key, this.value) || this.right.ye(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ge = function(t) {
        return this.right.ge(t) || t(this.key, this.value) || this.left.ge(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.M() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.Ve = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.pe = function() {
        return this.right.M() ? this.key : this.right.pe();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.Re = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.Ae(null, null, null, r.left.Re(t, e, n), null) : 0 === i ? r.Ae(null, e, null, null, null) : r.Ae(null, null, null, null, r.right.Re(t, e, n))).Oe();
    }, t.prototype.ke = function() {
        if (this.left.M()) return t.EMPTY;
        var e = this;
        return e.left.qe() || e.left.left.qe() || (e = e.Me()), (e = e.Ae(null, null, null, e.left.ke(), null)).Oe();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.M() || i.left.qe() || i.left.left.qe() || (i = i.Me()), 
        i = i.Ae(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.qe() && (i = i.xe()), i.right.M() || i.right.qe() || i.right.left.qe() || (i = i.Be()), 
            0 === n(e, i.key)) {
                if (i.right.M()) return t.EMPTY;
                r = i.right.min(), i = i.Ae(r.key, r.value, null, null, i.right.ke());
            }
            i = i.Ae(null, null, null, null, i.right.remove(e, n));
        }
        return i.Oe();
    }, t.prototype.qe = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.Oe = function() {
        var t = this;
        return t.right.qe() && !t.left.qe() && (t = t.Ue()), t.left.qe() && t.left.left.qe() && (t = t.xe()), 
        t.left.qe() && t.right.qe() && (t = t.Qe()), t;
    }, t.prototype.Me = function() {
        var t = this.Qe();
        return t.right.left.qe() && (t = (t = (t = t.Ae(null, null, null, null, t.right.xe())).Ue()).Qe()), 
        t;
    }, t.prototype.Be = function() {
        var t = this.Qe();
        return t.left.left.qe() && (t = (t = t.xe()).Qe()), t;
    }, t.prototype.Ue = function() {
        var e = this.Ae(null, null, t.RED, null, this.right.left);
        return this.right.Ae(null, null, this.color, e, null);
    }, t.prototype.xe = function() {
        var e = this.Ae(null, null, t.RED, this.left.right, null);
        return this.left.Ae(null, null, this.color, null, e);
    }, t.prototype.Qe = function() {
        var t = this.left.Ae(null, null, !this.left.color, null, null), e = this.right.Ae(null, null, !this.right.color, null, null);
        return this.Ae(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.We = function() {
        var t = this.je();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.je = function() {
        if (this.qe() && this.left.qe()) throw _e();
        if (this.right.qe()) throw _e();
        var t = this.left.je();
        if (t !== this.right.je()) throw _e();
        return t + (this.qe() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Qt.EMPTY = null, Qt.RED = !0, Qt.Pe = !1, 
// end LLRBEmptyNode
Qt.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw _e();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw _e();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw _e();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw _e();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw _e();
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.Ae = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.Re = function(t, e, n) {
        return new Qt(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.M = function() {
        return !0;
    }, t.prototype.ye = function(t) {
        return !1;
    }, t.prototype.ge = function(t) {
        return !1;
    }, t.prototype.Ve = function() {
        return null;
    }, t.prototype.pe = function() {
        return null;
    }, t.prototype.qe = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.We = function() {
        return !0;
    }, t.prototype.je = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var Wt = /** @class */ function() {
    function t(t) {
        this.N = t, this.data = new Gt(this.N);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.Ve();
    }, t.prototype.last = function() {
        return this.data.pe();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.ye((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */ t.prototype.Ge = function(t, e) {
        for (var n = this.data.ve(t[0]); n.$e(); ) {
            var r = n.Ne();
            if (this.N(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.He = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data.ve(e) : this.data.be(); n.$e(); ) if (!t(n.Ne().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.Ke = function(t) {
        var e = this.data.ve(t);
        return e.$e() ? e.Ne().key : null;
    }, t.prototype.be = function() {
        return new Ht(this.data.be());
    }, t.prototype.ve = function(t) {
        return new Ht(this.data.ve(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.Ae(this.data.remove(t).Re(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.Ae(this.data.remove(t)) : this;
    }, t.prototype.M = function() {
        return this.data.M();
    }, t.prototype.ze = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.be(), r = e.data.be(); n.$e(); ) {
            var i = n.Ne().key, o = r.Ne().key;
            if (0 !== this.N(i, o)) return !1;
        }
        return !0;
    }, t.prototype.W = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.Ae = function(e) {
        var n = new t(this.N);
        return n.data = e, n;
    }, t;
}(), Ht = /** @class */ function() {
    function t(t) {
        this.Ye = t;
    }
    return t.prototype.Ne = function() {
        return this.Ye.Ne().key;
    }, t.prototype.$e = function() {
        return this.Ye.$e();
    }, t;
}(), Yt = new Gt(O$1.N);

function Kt() {
    return Yt;
}

function Xt() {
    return Kt();
}

var $t = new Gt(O$1.N);

function Jt() {
    return $t;
}

var Zt = new Gt(O$1.N), te = new Wt(O$1.N);

function ee() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = te, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var ne = new Wt(ke);

function re() {
    return ne;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var ie = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.N = t ? function(e, n) {
            return t(e, n) || O$1.N(e.key, n.key);
        } : function(t, e) {
            return O$1.N(t.key, e.key);
        }, this.Xe = Jt(), this.Je = new Gt(this.N)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.Ze = function(e) {
        return new t(e.N);
    }, t.prototype.has = function(t) {
        return null != this.Xe.get(t);
    }, t.prototype.get = function(t) {
        return this.Xe.get(t);
    }, t.prototype.first = function() {
        return this.Je.Ve();
    }, t.prototype.last = function() {
        return this.Je.pe();
    }, t.prototype.M = function() {
        return this.Je.M();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.Xe.get(t);
        return e ? this.Je.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Je.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.Je.ye((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.Ae(e.Xe.Re(t.key, t), e.Je.Re(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.Ae(this.Xe.remove(t), this.Je.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.Je.be(), r = e.Je.be(); n.$e(); ) {
            var i = n.Ne().key, o = r.Ne().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.Ae = function(e, n) {
        var r = new t;
        return r.N = this.N, r.Xe = e, r.Je = n, r;
    }, t;
}(), oe = /** @class */ function() {
    function t() {
        this.ts = new Gt(O$1.N);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.ts.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.ts = this.ts.Re(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.ts = this.ts.Re(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.ts = this.ts.Re(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.ts = this.ts.Re(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.ts = this.ts.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.ts = this.ts.Re(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.ts = this.ts.Re(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        _e() : this.ts = this.ts.Re(e, t);
    }, t.prototype.es = function() {
        var t = [];
        return this.ts.ye((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), se = /** @class */ function() {
    function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.ss = n, this.docChanges = r, this.ns = i, this.fromCache = o, 
        this.rs = s, this.hs = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.os = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, ie.Ze(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.ns.M();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.rs === t.rs && this.ns.isEqual(t.ns) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.ss.isEqual(t.ss))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), ue = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.Te = t, this.as = e, this.us = n, this.cs = r, this.ls = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t._s = function(e, n) {
        var r = new Map;
        return r.set(e, ae.fs(e, n)), new t(V$1.min(), r, re(), Kt(), ee());
    }, t;
}(), ae = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.ds = e, this.ws = n, this.Ts = r, this.Es = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.fs = function(e, n) {
        return new t(C$1.ht, n, ee(), ee(), ee());
    }, t;
}(), he = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.Is = t, this.removedTargetIds = e, this.key = n, this.ms = r;
}, ce = function(t, e) {
    this.targetId = t, this.Rs = e;
}, fe = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = C$1.ht), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, le = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.As = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.Ps = ye(), 
        /** See public getters for explanations of these fields. */
        this.Vs = C$1.ht, this.ps = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.ys = !0;
    }
    return Object.defineProperty(t.prototype, "ds", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.ps;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.Vs;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "gs", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.As;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "bs", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.ys;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.vs = function(t) {
        t.rt() > 0 && (this.ys = !0, this.Vs = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.Ss = function() {
        var t = ee(), e = ee(), n = ee();
        return this.Ps.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                _e();
            }
        })), new ae(this.Vs, this.ps, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.Cs = function() {
        this.ys = !1, this.Ps = ye();
    }, t.prototype.Ds = function(t, e) {
        this.ys = !0, this.Ps = this.Ps.Re(t, e);
    }, t.prototype.Fs = function(t) {
        this.ys = !0, this.Ps = this.Ps.remove(t);
    }, t.prototype.Ns = function() {
        this.As += 1;
    }, t.prototype.$s = function() {
        this.As -= 1;
    }, t.prototype.Ls = function() {
        this.ys = !0, this.ps = !0;
    }, t;
}(), pe = /** @class */ function() {
    function t(t) {
        this.Os = t, 
        /** The internal state of all tracked targets. */
        this.ks = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.qs = Kt(), 
        /** A mapping of document keys to their set of target IDs. */
        this.Ms = de(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.xs = new Wt(ke)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.Bs = function(t) {
        for (var e = 0, n = t.Is; e < n.length; e++) {
            var r = n[e];
            t.ms instanceof _t ? this.Us(r, t.ms) : t.ms instanceof Dt && this.Qs(r, t.key, t.ms);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.Qs(s, t.key, t.ms);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.Ws = function(t) {
        var e = this;
        this.js(t, (function(n) {
            var r = e.Gs(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.Hs(n) && r.vs(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.$s(), r.gs || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.Cs(), r.vs(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.$s(), r.gs || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.Hs(n) && (r.Ls(), r.vs(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.Hs(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.Ks(n), r.vs(t.resumeToken));
                break;

              default:
                _e();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.js = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.ks.forEach((function(t, r) {
            n.Hs(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.zs = function(t) {
        var e = t.targetId, n = t.Rs.count, r = this.Ys(e);
        if (r) {
            var i = r.target;
            if (i.qt()) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new O$1(i.path);
                this.Qs(e, o, new Dt(o, V$1.min()));
            } else De(1 === n); else this.Xs(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.Ks(e), this.xs = this.xs.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.Js = function(t) {
        var e = this, n = new Map;
        this.ks.forEach((function(r, i) {
            var o = e.Ys(i);
            if (o) {
                if (r.ds && o.target.qt()) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new O$1(o.target.path);
                    null !== e.qs.get(s) || e.Zs(i, s) || e.Qs(i, s, new Dt(s, t));
                }
                r.bs && (n.set(i, r.Ss()), r.Cs());
            }
        }));
        var r = ee();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.Ms.forEach((function(t, n) {
            var i = !0;
            n.He((function(t) {
                var n = e.Ys(t);
                return !n || 2 /* LimboResolution */ === n.we || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new ue(t, n, this.xs, this.qs, r);
        return this.qs = Kt(), this.Ms = de(), this.xs = new Wt(ke), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.Us = function(t, e) {
        if (this.Hs(t)) {
            var n = this.Zs(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.Gs(t).Ds(e.key, n), this.qs = this.qs.Re(e.key, e), this.Ms = this.Ms.Re(e.key, this.ti(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.Qs = function(t, e, n) {
        if (this.Hs(t)) {
            var r = this.Gs(t);
            this.Zs(t, e) ? r.Ds(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.Fs(e), this.Ms = this.Ms.Re(e, this.ti(e).delete(t)), n && (this.qs = this.qs.Re(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.ks.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.Xs = function(t) {
        var e = this.Gs(t).Ss();
        return this.Os.ei(t).size + e.ws.size - e.Es.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.Ns = function(t) {
        this.Gs(t).Ns();
    }, t.prototype.Gs = function(t) {
        var e = this.ks.get(t);
        return e || (e = new le, this.ks.set(t, e)), e;
    }, t.prototype.ti = function(t) {
        var e = this.Ms.get(t);
        return e || (e = new Wt(ke), this.Ms = this.Ms.Re(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.Hs = function(t) {
        var e = null !== this.Ys(t);
        return e || Ne("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.Ys = function(t) {
        var e = this.ks.get(t);
        return e && e.gs ? null : this.Os.si(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.Ks = function(t) {
        var e = this;
        this.ks.set(t, new le), this.Os.ei(t).forEach((function(n) {
            e.Qs(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.Zs = function(t, e) {
        return this.Os.ei(t).has(e);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function de() {
    return new Gt(O$1.N);
}

function ye() {
    return new Gt(O$1.N);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ve = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, me = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, ge = /** @class */ function() {
    function t(t, e) {
        this.ii = t, this.options = e;
    }
    return t.prototype.ni = function(t) {
        var e = void 0 === t.code ? E$1.UNKNOWN : Bt(t.code);
        return new I$1(e, t.message || "");
    }, 
    /**
     * Returns a value for a number (or null) that's appropriate to put into
     * a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "number" because that's what
     * our generated proto interfaces say Int32Value must be. But GRPC actually
     * expects a { value: <number> } struct.
     */
    t.prototype.ri = function(t) {
        return this.options.hi || F$1(t) ? t : {
            value: t
        };
    }, 
    /**
     * Returns a number (or null) from a google.protobuf.Int32Value proto.
     */
    t.prototype.oi = function(t) {
        var e;
        return F$1(e = "object" == typeof t ? t.value : t) ? null : e;
    }, 
    /**
     * Returns an IntegerValue for `value`.
     */
    t.prototype.lt = function(t) {
        return {
            integerValue: "" + t
        };
    }, 
    /**
     * Returns an DoubleValue for `value` that is encoded based the serializer's
     * `useProto3Json` setting.
     */
    t.prototype._t = function(t) {
        if (this.options.hi) {
            if (isNaN(t)) return {
                doubleValue: "NaN"
            };
            if (t === 1 / 0) return {
                doubleValue: "Infinity"
            };
            if (t === -1 / 0) return {
                doubleValue: "-Infinity"
            };
        }
        return {
            doubleValue: x$1(t) ? "-0" : t
        };
    }, 
    /**
     * Returns a value for a number that's appropriate to put into a proto.
     * The return value is an IntegerValue if it can safely represent the value,
     * otherwise a DoubleValue is returned.
     */
    t.prototype.ai = function(t) {
        return function(t) {
            return "number" == typeof t && Number.isInteger(t) && !x$1(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
        }(t) ? this.lt(t) : this._t(t);
    }, 
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     */
    t.prototype.D = function(t) {
        return this.options.hi ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : {
            seconds: "" + t.seconds,
            nanos: t.nanoseconds
        };
    }, t.prototype.v = function(t) {
        var e = X$1(t);
        return new R$1(e.seconds, e.nanos);
    }, 
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     *
     * Visible for testing.
     */
    t.prototype.ui = function(t) {
        return this.options.hi ? t.toBase64() : t.toUint8Array();
    }, 
    /**
     * Returns a ByteString based on the proto string value.
     */
    t.prototype.ci = function(t) {
        return this.options.hi ? (De(void 0 === t || "string" == typeof t), C$1.fromBase64String(t || "")) : (De(void 0 === t || t instanceof Uint8Array), 
        C$1.fromUint8Array(t || new Uint8Array));
    }, t.prototype.toVersion = function(t) {
        return this.D(t.D());
    }, t.prototype.fromVersion = function(t) {
        return De(!!t), V$1.v(this.v(t));
    }, t.prototype.li = function(t, e) {
        return this._i(e || this.ii).child("documents").child(t).j();
    }, t.prototype.fi = function(t) {
        var e = S$1.G(t);
        return De(we(e)), e;
    }, t.prototype.di = function(t) {
        return this.li(t.path);
    }, t.prototype.Z = function(t) {
        var e = this.fi(t);
        return De(e.get(1) === this.ii.projectId), De(!e.get(3) && !this.ii.database || e.get(3) === this.ii.database), 
        new O$1(this.wi(e));
    }, t.prototype.Ti = function(t) {
        return this.li(t);
    }, t.prototype.Ei = function(t) {
        var e = this.fi(t);
        // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.
                return 4 === e.length ? S$1.H : this.wi(e);
    }, Object.defineProperty(t.prototype, "Ii", {
        get: function() {
            return new S$1([ "projects", this.ii.projectId, "databases", this.ii.database ]).j();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype._i = function(t) {
        return new S$1([ "projects", t.projectId, "databases", t.database ]);
    }, t.prototype.wi = function(t) {
        return De(t.length > 4 && "documents" === t.get(4)), t.L(5);
    }, 
    /** Creates an api.Document from key and fields (but no create/update time) */ t.prototype.mi = function(t, e) {
        return {
            name: this.di(t),
            fields: e.proto.mapValue.fields
        };
    }, t.prototype.Ri = function(t) {
        return {
            name: this.di(t.key),
            fields: t.Ot().mapValue.fields,
            updateTime: this.D(t.version.D())
        };
    }, t.prototype.Ai = function(t, e) {
        var n = this.Z(t.name), r = this.fromVersion(t.updateTime), i = new bt({
            mapValue: {
                fields: t.fields
            }
        });
        return new _t(n, r, i, {
            hasCommittedMutations: !!e
        });
    }, t.prototype.Pi = function(t) {
        De(!!t.found), t.found.name, t.found.updateTime;
        var e = this.Z(t.found.name), n = this.fromVersion(t.found.updateTime), r = new bt({
            mapValue: {
                fields: t.found.fields
            }
        });
        return new _t(e, n, r, {});
    }, t.prototype.Vi = function(t) {
        De(!!t.missing), De(!!t.readTime);
        var e = this.Z(t.missing), n = this.fromVersion(t.readTime);
        return new Dt(e, n);
    }, t.prototype.pi = function(t) {
        return "found" in t ? this.Pi(t) : "missing" in t ? this.Vi(t) : _e();
    }, t.prototype.yi = function(t) {
        var e;
        if ("targetChange" in t) {
            t.targetChange;
            // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset
            var n = this.gi(t.targetChange.targetChangeType || "NO_CHANGE"), r = t.targetChange.targetIds || [], i = this.ci(t.targetChange.resumeToken), o = t.targetChange.cause, s = o && this.ni(o);
            e = new fe(n, r, i, s || null);
        } else if ("documentChange" in t) {
            t.documentChange;
            var u = t.documentChange;
            u.document, u.document.name, u.document.updateTime;
            var a = this.Z(u.document.name), h = this.fromVersion(u.document.updateTime), c = new bt({
                mapValue: {
                    fields: u.document.fields
                }
            }), f = new _t(a, h, c, {}), l = u.targetIds || [], p = u.removedTargetIds || [];
            e = new he(l, p, f.key, f);
        } else if ("documentDelete" in t) {
            t.documentDelete;
            var d = t.documentDelete;
            d.document;
            var y = this.Z(d.document), v = d.readTime ? this.fromVersion(d.readTime) : V$1.min(), m = new Dt(y, v), g = d.removedTargetIds || [];
            e = new he([], g, m.key, m);
        } else if ("documentRemove" in t) {
            t.documentRemove;
            var w = t.documentRemove;
            w.document;
            var b = this.Z(w.document), E = w.removedTargetIds || [];
            e = new he([], E, b, null);
        } else {
            if (!("filter" in t)) return _e();
            t.filter;
            var I = t.filter;
            I.targetId;
            var N = I.count || 0, A = new xt(N), T = I.targetId;
            e = new ce(T, A);
        }
        return e;
    }, t.prototype.gi = function(t) {
        return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : _e();
    }, t.prototype.bi = function(t) {
        // We have only reached a consistent snapshot for the entire stream if there
        // is a read_time set and it applies to all targets (i.e. the list of
        // targets is empty). The backend is guaranteed to send such responses.
        if (!("targetChange" in t)) return V$1.min();
        var e = t.targetChange;
        return e.targetIds && e.targetIds.length ? V$1.min() : e.readTime ? this.fromVersion(e.readTime) : V$1.min();
    }, t.prototype.vi = function(t) {
        var e, n = this;
        if (t instanceof yt) e = {
            update: this.mi(t.key, t.value)
        }; else if (t instanceof gt) e = {
            delete: this.di(t.key)
        }; else if (t instanceof vt) e = {
            update: this.mi(t.key, t.data),
            updateMask: this.Si(t.Vt)
        }; else if (t instanceof mt) e = {
            transform: {
                document: this.di(t.key),
                fieldTransforms: t.fieldTransforms.map((function(t) {
                    return n.Ci(t);
                }))
            }
        }; else {
            if (!(t instanceof wt)) return _e();
            e = {
                verify: this.di(t.key)
            };
        }
        return t.Rt.wt || (e.currentDocument = this.Di(t.Rt)), e;
    }, t.prototype.Fi = function(t) {
        var e = this, n = t.currentDocument ? this.Ni(t.currentDocument) : pt.dt();
        if (t.update) {
            t.update.name;
            var r = this.Z(t.update.name), i = new bt({
                mapValue: {
                    fields: t.update.fields
                }
            });
            if (t.updateMask) {
                var o = this.$i(t.updateMask);
                return new vt(r, i, o, n);
            }
            return new yt(r, i, n);
        }
        if (t.delete) {
            var s = this.Z(t.delete);
            return new gt(s, n);
        }
        if (t.transform) {
            var u = this.Z(t.transform.document), a = t.transform.fieldTransforms.map((function(t) {
                return e.Li(t);
            }));
            return De(!0 === n.exists), new mt(u, a);
        }
        if (t.verify) {
            var h = this.Z(t.verify);
            return new wt(h, n);
        }
        return _e();
    }, t.prototype.Di = function(t) {
        return void 0 !== t.updateTime ? {
            updateTime: this.toVersion(t.updateTime)
        } : void 0 !== t.exists ? {
            exists: t.exists
        } : _e();
    }, t.prototype.Ni = function(t) {
        return void 0 !== t.updateTime ? pt.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? pt.exists(t.exists) : pt.dt();
    }, t.prototype.Oi = function(t, e) {
        // NOTE: Deletes don't have an updateTime.
        var n = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e);
        n.isEqual(V$1.min()) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        n = this.fromVersion(e));
        var r = null;
        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
        new lt(n, r);
    }, t.prototype.ki = function(t, e) {
        var n = this;
        return t && t.length > 0 ? (De(void 0 !== e), t.map((function(t) {
            return n.Oi(t, e);
        }))) : [];
    }, t.prototype.Ci = function(t) {
        var e = t.transform;
        if (e instanceof ot) return {
            fieldPath: t.field.j(),
            setToServerValue: "REQUEST_TIME"
        };
        if (e instanceof st) return {
            fieldPath: t.field.j(),
            appendMissingElements: {
                values: e.elements
            }
        };
        if (e instanceof ut) return {
            fieldPath: t.field.j(),
            removeAllFromArray: {
                values: e.elements
            }
        };
        if (e instanceof at) return {
            fieldPath: t.field.j(),
            increment: e.ct
        };
        throw _e();
    }, t.prototype.Li = function(t) {
        var e = null;
        if ("setToServerValue" in t) De("REQUEST_TIME" === t.setToServerValue), e = ot.instance; else if ("appendMissingElements" in t) {
            var n = t.appendMissingElements.values || [];
            e = new st(n);
        } else if ("removeAllFromArray" in t) {
            var r = t.removeAllFromArray.values || [];
            e = new ut(r);
        } else "increment" in t ? e = new at(this, t.increment) : _e();
        var i = P$1.J(t.fieldPath);
        return new ft(i, e);
    }, t.prototype.qi = function(t) {
        return {
            documents: [ this.Ti(t.path) ]
        };
    }, t.prototype.Mi = function(t) {
        De(1 === t.documents.length);
        var e = t.documents[0];
        return kt.Wt(this.Ei(e)).ee();
    }, t.prototype.xi = function(t) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var e = {
            structuredQuery: {}
        }, n = t.path;
        null !== t.collectionGroup ? (e.parent = this.Ti(n), e.structuredQuery.from = [ {
            collectionId: t.collectionGroup,
            allDescendants: !0
        } ]) : (e.parent = this.Ti(n.O()), e.structuredQuery.from = [ {
            collectionId: n.q()
        } ]);
        var r = this.Bi(t.filters);
        r && (e.structuredQuery.where = r);
        var i = this.Ui(t.orderBy);
        i && (e.structuredQuery.orderBy = i);
        var o = this.ri(t.limit);
        return null !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.Qi(t.startAt)), 
        t.endAt && (e.structuredQuery.endAt = this.Qi(t.endAt)), e;
    }, t.prototype.Wi = function(t) {
        var e = this.Ei(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
        if (r > 0) {
            De(1 === r);
            var o = n.from[0];
            o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }
        var s = [];
        n.where && (s = this.ji(n.where));
        var u = [];
        n.orderBy && (u = this.Gi(n.orderBy));
        var a = null;
        n.limit && (a = this.oi(n.limit));
        var h = null;
        n.startAt && (h = this.Hi(n.startAt));
        var c = null;
        return n.endAt && (c = this.Hi(n.endAt)), new kt(e, i, u, s, a, "F" /* First */ , h, c).ee();
    }, t.prototype.Ki = function(t) {
        var e = this.zi(t.we);
        return null == e ? null : {
            "goog-listen-tags": e
        };
    }, t.prototype.zi = function(t) {
        switch (t) {
          case 0 /* Listen */ :
            return null;

          case 1 /* ExistenceFilterMismatch */ :
            return "existence-filter-mismatch";

          case 2 /* LimboResolution */ :
            return "limbo-document";

          default:
            return _e();
        }
    }, t.prototype.ee = function(t) {
        var e, n = t.target;
        return (e = n.qt() ? {
            documents: this.qi(n)
        } : {
            query: this.xi(n)
        }).targetId = t.targetId, t.resumeToken.rt() > 0 && (e.resumeToken = this.ui(t.resumeToken)), 
        e;
    }, t.prototype.Bi = function(t) {
        var e = this;
        if (0 !== t.length) {
            var n = t.map((function(t) {
                return t instanceof St ? e.Yi(t) : _e();
            }));
            return 1 === n.length ? n[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: n
                }
            };
        }
    }, t.prototype.ji = function(t) {
        var e = this;
        return t ? void 0 !== t.unaryFilter ? [ this.Xi(t) ] : void 0 !== t.fieldFilter ? [ this.Ji(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
            return e.ji(t);
        })).reduce((function(t, e) {
            return t.concat(e);
        })) : _e() : [];
    }, t.prototype.Ui = function(t) {
        var e = this;
        if (0 !== t.length) return t.map((function(t) {
            return e.Zi(t);
        }));
    }, t.prototype.Gi = function(t) {
        var e = this;
        return t.map((function(t) {
            return e.tn(t);
        }));
    }, t.prototype.Qi = function(t) {
        return {
            before: t.before,
            values: t.position
        };
    }, t.prototype.Hi = function(t) {
        var e = !!t.before, n = t.values || [];
        return new Mt(n, e);
    }, 
    // visible for testing
    t.prototype.en = function(t) {
        return ve[t];
    }, 
    // visible for testing
    t.prototype.sn = function(t) {
        switch (t) {
          case "ASCENDING":
            return "asc" /* ASCENDING */;

          case "DESCENDING":
            return "desc" /* DESCENDING */;

          default:
            return;
        }
    }, 
    // visible for testing
    t.prototype.nn = function(t) {
        return me[t];
    }, t.prototype.rn = function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return _e();
        }
    }, t.prototype.hn = function(t) {
        return {
            fieldPath: t.j()
        };
    }, t.prototype.on = function(t) {
        return P$1.J(t.fieldPath);
    }, 
    // visible for testing
    t.prototype.Zi = function(t) {
        return {
            field: this.hn(t.field),
            direction: this.en(t.dir)
        };
    }, t.prototype.tn = function(t) {
        return new Ct(this.on(t.field), this.sn(t.direction));
    }, t.prototype.Ji = function(t) {
        return St.create(this.on(t.fieldFilter.field), this.rn(t.fieldFilter.op), t.fieldFilter.value);
    }, 
    // visible for testing
    t.prototype.Yi = function(t) {
        if ("==" /* EQUAL */ === t.op) {
            if (rt(t.value)) return {
                unaryFilter: {
                    field: this.hn(t.field),
                    op: "IS_NAN"
                }
            };
            if (nt(t.value)) return {
                unaryFilter: {
                    field: this.hn(t.field),
                    op: "IS_NULL"
                }
            };
        }
        return {
            fieldFilter: {
                field: this.hn(t.field),
                op: this.nn(t.op),
                value: t.value
            }
        };
    }, t.prototype.Xi = function(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var e = this.on(t.unaryFilter.field);
            return St.create(e, "==" /* EQUAL */ , {
                doubleValue: NaN
            });

          case "IS_NULL":
            var n = this.on(t.unaryFilter.field);
            return St.create(n, "==" /* EQUAL */ , {
                nullValue: "NULL_VALUE"
            });

          case "OPERATOR_UNSPECIFIED":
          default:
            return _e();
        }
    }, t.prototype.Si = function(t) {
        var e = [];
        return t.fields.forEach((function(t) {
            return e.push(t.j());
        })), {
            fieldPaths: e
        };
    }, t.prototype.$i = function(t) {
        var e = t.fieldPaths || [];
        return new ct(e.map((function(t) {
            return P$1.J(t);
        })));
    }, t;
}();

/**
 * Generates JsonObject values for the Datastore API suitable for sending to
 * either GRPC stub methods or via the JSON/HTTP REST API.
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */ function we(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides singleton helpers where setup code can inject a platform at runtime.
 * setPlatform needs to be set before Firestore is used and must be set exactly
 * once.
 */ var be = /** @class */ function() {
    function t() {}
    return t.an = function(e) {
        t.platform && _e(), t.platform = e;
    }, t.nt = function() {
        return t.platform || _e(), t.platform;
    }, t;
}(), Ee = new Logger("@firebase/firestore");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Helper methods are needed because variables can't be exported as read/write
function Ie() {
    return Ee.logLevel;
}

function Ne(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (Ee.logLevel <= LogLevel.DEBUG) {
        var i = e.map(Te);
        Ee.debug.apply(Ee, __spreadArrays([ "Firestore (" + w$1 + "): " + t ], i));
    }
}

function Ae(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (Ee.logLevel <= LogLevel.ERROR) {
        var i = e.map(Te);
        Ee.error.apply(Ee, __spreadArrays([ "Firestore (" + w$1 + "): " + t ], i));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function Te(t) {
    if ("string" == typeof t) return t;
    var e = be.nt();
    try {
        return e.un(t);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function _e(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (" + w$1 + ") INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw Ae(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function De(t, e) {
    t || _e();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function Re(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ve = /** @class */ function() {
    function t() {}
    return t.cn = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = be.nt().ln(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function ke(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function Se(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ue = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function(t, e, n, r, i) {
    this.ii = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
}, Pe = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "_n", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t.prototype.S = function(t) {
        return ke(this.projectId, t.projectId) || ke(this.database, t.database);
    }, t;
}(), Oe = /** @class */ function() {
    function t(t) {
        this.fn = t, 
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.dn = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.fn(t), n = this.dn[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], u = o[1];
            if (s.isEqual(t)) return u;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.fn(t), r = this.dn[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (r[i][0].isEqual(t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.dn[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.fn(t), n = this.dn[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.dn[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        q$1(this.dn, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], u = o[1];
                t(s, u);
            }
        }));
    }, t.prototype.M = function() {
        return M$1(this.dn);
    }, t;
}(), Le = /** @class */ function() {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.wn = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.at = function(t, e, n) {
        for (var r = n.Tn, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            if (o.key.isEqual(t)) {
                var s = r[i];
                e = o.at(e, s);
            }
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.ot = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = i.ot(e, e, this.wn));
        }
        // Second, apply all user-provided mutations.
        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
            var a = u[s];
            a.key.isEqual(t) && (e = a.ot(e, o, this.wn));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.En = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.ot(r.key, t.get(r.key));
            i && (n = n.Re(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), ee());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && Se(this.mutations, t.mutations, (function(t, e) {
            return t.isEqual(e);
        })) && Se(this.baseMutations, t.baseMutations, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), qe = /** @class */ function() {
    function t(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.In = e, this.Tn = n, this.mn = r
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r) {
        De(e.mutations.length === r.length);
        for (var i = Zt, o = e.mutations, s = 0; s < o.length; s++) i = i.Re(o[s].key, r[s].version);
        return new t(e, n, r, i);
    }, t;
}(), Me = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.Rn = null, this.An = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Pn = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Vn = !1, t((function(t) {
            e.Pn = !0, e.result = t, e.Rn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.Rn(t);
        }), (function(t) {
            e.Pn = !0, e.error = t, e.An && e.An(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.Vn && _e(), this.Vn = !0, this.Pn ? this.error ? this.pn(n, this.error) : this.yn(e, this.result) : new t((function(t, i) {
            r.Rn = function(n) {
                r.yn(e, n).next(t, i);
            }, r.An = function(e) {
                r.pn(n, e).next(t, i);
            };
        }));
    }, t.prototype.gn = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.bn = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.yn = function(e, n) {
        return e ? this.bn((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.pn = function(e, n) {
        return e ? this.bn((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.vn = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.Sn = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.vn(r);
    }, t;
}(), Ce = /** @class */ function() {
    function t(t, e, n) {
        this.Cn = t, this.Dn = e, this.Fn = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.Nn = function(t, e) {
        var n = this;
        return this.Dn.$n(t, e).next((function(r) {
            return n.Ln(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.Ln = function(t, e, n) {
        return this.Cn.On(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].ot(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.kn = function(t, e, n) {
        var r = Xt();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].ot(t, e);
            }
            r = r.Re(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.qn = function(t, e) {
        var n = this;
        return this.Cn.getEntries(t, e).next((function(e) {
            return n.Mn(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.Mn = function(t, e) {
        var n = this;
        return this.Dn.xn(t, e).next((function(r) {
            var i = n.kn(t, e, r), o = Kt();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new Dt(t, V$1.min())), o = o.Re(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.Bn = function(t, e, n) {
        return e.qt() ? this.Un(t, e.path) : e.le() ? this.Qn(t, e, n) : this.Wn(t, e, n);
    }, t.prototype.Un = function(t, e) {
        // Just do a simple document lookup.
        return this.Nn(t, new O$1(e)).next((function(t) {
            var e = Jt();
            return t instanceof _t && (e = e.Re(t.key, t)), e;
        }));
    }, t.prototype.Qn = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = Jt();
        return this.Fn.jn(t, i).next((function(s) {
            return Me.forEach(s, (function(s) {
                var u = e.Zt(s.child(i));
                return r.Wn(t, u, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.Re(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.Wn = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.Cn.Bn(t, e, n).next((function(n) {
            return r = n, o.Dn.Gn(t, e);
        })).next((function(e) {
            return i = e, o.Hn(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                    var a = u[s], h = a.key, c = r.get(h), f = a.ot(c, c, o.wn);
                    r = f instanceof _t ? r.Re(h, f) : r.remove(h);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                e.matches(n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.Hn = function(t, e, n) {
        for (var r = ee(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof vt && null === n.get(a.key) && (r = r.add(a.key));
        }
        var h = n;
        return this.Cn.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof _t && (h = h.Re(t, e));
            })), h;
        }));
    }, t;
}(), Fe = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.Kn = n, this.zn = r;
    }
    return t.Yn = function(e, n) {
        for (var r = ee(), i = ee(), o = 0, s = n.docChanges; o < s.length; o++) {
            var u = s[o];
            switch (u.type) {
              case 0 /* Added */ :
                r = r.add(u.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(u.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), xe = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.Xn = function(t) {
            return n.Jn(t);
        }, this.Zn = function(t) {
            return e.tr(t);
        });
    }
    return t.prototype.Jn = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.Zn && this.Zn(t), t;
    }, t;
}();

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */ xe.er = -1;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var je = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, Be = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.sr = t, this.ir = e, this.nr = n, this.rr = r, this.hr = i, this.or = 0, this.ar = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.ur = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.or = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.cr = function() {
        this.or = this.hr;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.lr = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.or + this._r()), r = Math.max(0, Date.now() - this.ur), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && Ne("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.or + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.ar = this.sr.dr(this.ir, i, (function() {
            return e.ur = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.or *= this.rr, this.or < this.nr && (this.or = this.nr), this.or > this.hr && (this.or = this.hr);
    }, t.prototype.wr = function() {
        null !== this.ar && (this.ar.Tr(), this.ar = null);
    }, t.prototype.cancel = function() {
        null !== this.ar && (this.ar.cancel(), this.ar = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype._r = function() {
        return (Math.random() - .5) * this.or;
    }, t;
}(), Ge = /** @class */ function() {
    function t() {
        this.Er = new ze;
    }
    return t.prototype.Ir = function(t, e) {
        return this.Er.add(e), Me.resolve();
    }, t.prototype.jn = function(t, e) {
        return Me.resolve(this.Er.getEntries(e));
    }, t;
}(), ze = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.q(), n = t.O(), r = this.index[e] || new Wt(S$1.N), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.q(), n = t.O(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new Wt(S$1.N)).W();
    }, t;
}(), Qe = /** @class */ function() {
    function t(t) {
        this.mr = t;
    }
    return t.prototype.next = function() {
        return this.mr += 2, this.mr;
    }, t.Rr = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.Ar = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Verifies whether `e` is an IndexedDbTransactionError. */ function We(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ var He = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.Pr = t, this.ir = e, this.Vr = n, this.op = r, this.pr = i, this.yr = new je, 
        this.then = this.yr.promise.then.bind(this.yr.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.yr.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.gr = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.br = setTimeout((function() {
            return e.vr();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Tr = function() {
        return this.vr();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.br && (this.clearTimeout(), this.yr.reject(new I$1(E$1.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.vr = function() {
        var t = this;
        this.Pr.Sr((function() {
            return null !== t.br ? (t.clearTimeout(), t.op().then((function(e) {
                return t.yr.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.br && (this.pr(this), clearTimeout(this.br), this.br = null);
    }, t;
}(), Ye = /** @class */ function() {
    function t() {
        var t = this;
        // The last promise in the queue.
                this.Cr = Promise.resolve(), 
        // The last retryable operation. Retryable operation are run in order and
        // retried with backoff.
        this.Dr = Promise.resolve(), 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Fr = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Nr = [], 
        // visible for testing
        this.$r = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Lr = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Or = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.kr = new Be(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.qr = function() {
            return t.kr.wr();
        };
        var e = be.nt().window;
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.qr);
    }
    return Object.defineProperty(t.prototype, "Mr", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.Fr;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.Sr = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.xr = function(t) {
        this.Br(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Ur(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue.
     */
    t.prototype.Qr = function(t) {
        return this.Br(), this.Ur(t);
    }, 
    /**
     * Adds a new operation to the queue and initialize the shut down of this queue.
     * Returns a promise that will be resolved when the promise returned by the new
     * operation is (with its value).
     * Once this method is called, the only possible way to request running an operation
     * is through `enqueueAndForgetEvenAfterShutdown`.
     */
    t.prototype.Wr = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Br(), this.Fr ? [ 3 /*break*/ , 2 ] : (this.Fr = !0, (e = be.nt().window) && e.removeEventListener("visibilitychange", this.qr), 
                    [ 4 /*yield*/ , this.Qr(t) ]);

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    t.prototype.enqueue = function(t) {
        return this.Br(), this.Fr ? new Promise((function(t) {})) : this.Ur(t);
    }, 
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */
    t.prototype.jr = function(t) {
        var r = this;
        this.Br(), this.Fr || (this.Dr = this.Dr.then((function() {
            var i = new je, o = function() {
                return __awaiter(r, void 0, void 0, (function() {
                    var e;
                    return __generator(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , t() ];

                          case 1:
                            return n.sent(), i.resolve(), this.kr.reset(), [ 3 /*break*/ , 3 ];

                          case 2:
                            if (!We(e = n.sent())) throw i.resolve(), e;
                            // Failure will be handled by AsyncQueue
                                                        return Ne("AsyncQueue", "Operation failed with retryable error: " + e), 
                            this.kr.lr(o), [ 3 /*break*/ , 3 ];

                          case 3:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            };
            return r.Sr(o), i.promise;
        })));
    }, t.prototype.Ur = function(t) {
        var e = this, n = this.Cr.then((function() {
            return e.Lr = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.$r = t, e.Lr = !1, Ae("INTERNAL UNHANDLED ERROR: ", 
                /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error Error or FirestoreError
 */
                function(t) {
                    var e = t.message || "";
                    return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), 
                    e;
                }(t)), t;
            })).then((function(t) {
                return e.Lr = !1, t;
            }));
        }));
        return this.Cr = n, n;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
     * or fast-forward the operation prior to its running.
     */
    t.prototype.dr = function(t, e, n) {
        var r = this;
        this.Br(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Or.indexOf(t) > -1 && (e = 0);
        var i = He.gr(this, t, e, n, (function(t) {
            return r.Gr(t);
        }));
        return this.Nr.push(i), i;
    }, t.prototype.Br = function() {
        this.$r && _e();
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.Hr = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.Kr = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.Cr ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.Cr) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.zr = function(t) {
        for (var e = 0, n = this.Nr; e < n.length; e++) {
            if (n[e].ir === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.Yr = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.Kr().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.Nr.sort((function(t, e) {
                return t.Vr - e.Vr;
            }));
            for (var n = 0, r = e.Nr; n < r.length; n++) {
                var i = r[n];
                if (i.Tr(), "all" /* All */ !== t && i.ir === t) break;
            }
            return e.Kr();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.Xr = function(t) {
        this.Or.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.Gr = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.Nr.indexOf(t);
        this.Nr.splice(e, 1);
    }, t;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */
function Ke(t, e) {
    if (Ae("AsyncQueue", e + ": " + t), We(t)) return new I$1(E$1.UNAVAILABLE, e + ": " + t);
    throw t;
}

var Xe = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.Jr = t, this.Zr = e, this.th = n;
    }
    return t.eh = function(e) {
        return new t(e, t.sh, t.ih);
    }, t;
}();

Xe.nh = -1, Xe.rh = 1048576, Xe.hh = 41943040, Xe.sh = 10, Xe.ih = 1e3, Xe.oh = new Xe(Xe.hh, Xe.sh, Xe.ih), 
Xe.DISABLED = new Xe(Xe.nh, 0, 0);

/**
 * Local storage in the Firestore client. Coordinates persistence components
 * like the mutation queue and remote document cache to present a
 * latency-compensated view of stored data.
 *
 * The LocalStore is responsible for accepting mutations from the Sync Engine.
 * Writes from the client are put into a queue as provisional Mutations until
 * they are processed by the RemoteStore and confirmed as having been written
 * to the server.
 *
 * The local store provides the local version of documents that have been
 * modified locally. It maintains the constraint:
 *
 *   LocalDocument = RemoteDocument + Active(LocalMutations)
 *
 * (Active mutations are those that are enqueued and have not been previously
 * acknowledged or rejected).
 *
 * The RemoteDocument ("ground truth") state is provided via the
 * applyChangeBatch method. It will be some version of a server-provided
 * document OR will be a server-provided document PLUS acknowledged mutations:
 *
 *   RemoteDocument' = RemoteDocument + Acknowledged(LocalMutations)
 *
 * Note that this "dirty" version of a RemoteDocument will not be identical to a
 * server base version, since it has LocalMutations added to it pending getting
 * an authoritative copy from the server.
 *
 * Since LocalMutations can be rejected by the server, we have to be able to
 * revert a LocalMutation that has already been applied to the LocalDocument
 * (typically done by replaying all remaining LocalMutations to the
 * RemoteDocument to re-apply).
 *
 * The LocalStore is responsible for the garbage collection of the documents it
 * contains. For now, it every doc referenced by a view, the mutation queue, or
 * the RemoteStore.
 *
 * It also maintains the persistence of mapping queries to resume tokens and
 * target ids. It needs to know this data about queries to properly know what
 * docs it would be allowed to garbage collect.
 *
 * The LocalStore must be able to efficiently execute queries against its local
 * cache of the documents, to provide the initial set of results before any
 * remote changes have been received.
 *
 * Note: In TypeScript, most methods return Promises since the implementation
 * may rely on fetching data from IndexedDB which is async.
 * These Promises will only be rejected on an I/O error or other internal
 * (unexpected) failure (e.g. failed assert) and always represent an
 * unrecoverable error (should be caught / reported by the async_queue).
 */
var $e = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n) {
        this.persistence = t, this.ah = e, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.uh = new Gt(ke), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.lh = new Oe((function(t) {
            return t.canonicalId();
        })), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this._h = V$1.min(), this.Dn = t.fh(n), this.dh = t.wh(), this.Th = t.Eh(), this.Ih = new Ce(this.dh, this.Dn, this.persistence.mh()), 
        this.ah.Rh(this.Ih)
        /** Starts the LocalStore. */;
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, 
    /**
     * Tells the LocalStore that the currently authenticated user has changed.
     *
     * In response the local store switches the mutation queue to the new user and
     * returns any resulting document changes.
     */
    // PORTING NOTE: Android and iOS only return the documents affected by the
    // change.
    t.prototype.Ah = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = this.Dn, r = this.Ih, [ 4 /*yield*/ , this.persistence.runTransaction("Handle user change", "readonly", (function(n) {
                        // Swap out the mutation queue, grabbing the pending mutation batches
                        // before and after.
                        var i;
                        return o.Dn.Ph(n).next((function(s) {
                            return i = s, e = o.persistence.fh(t), 
                            // Recreate our LocalDocumentsView using the new
                            // MutationQueue.
                            r = new Ce(o.dh, e, o.persistence.mh()), e.Ph(n);
                        })).next((function(t) {
                            for (var e = [], o = [], s = ee(), u = 0, a = i
                            // Union the old/new changed keys.
                            ; u < a.length; u++) {
                                var h = a[u];
                                e.push(h.batchId);
                                for (var c = 0, f = h.mutations; c < f.length; c++) {
                                    var l = f[c];
                                    s = s.add(l.key);
                                }
                            }
                            for (var p = 0, d = t; p < d.length; p++) {
                                var y = d[p];
                                o.push(y.batchId);
                                for (var v = 0, m = y.mutations; v < m.length; v++) {
                                    var g = m[v];
                                    s = s.add(g.key);
                                }
                            }
                            // Return the set of all (potentially) changed documents and the list
                            // of mutation batch IDs that were affected by change.
                                                        return r.qn(n, s).next((function(t) {
                                return {
                                    Vh: t,
                                    ph: e,
                                    yh: o
                                };
                            }));
                        }));
                    })) ];

                  case 1:
                    return i = n.sent(), [ 2 /*return*/ , (this.Dn = e, this.Ih = r, this.ah.Rh(this.Ih), 
                    i) ];
                }
            }));
        }));
    }, 
    /* Accept locally generated Mutations and commit them to storage. */ t.prototype.gh = function(t) {
        var e, n = this, r = R$1.now(), i = t.reduce((function(t, e) {
            return t.add(e.key);
        }), ee());
        return this.persistence.runTransaction("Locally write mutations", "readwrite", (function(o) {
            return n.Ih.qn(o, i).next((function(i) {
                e = i;
                for (
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                var s = [], u = 0, a = t; u < a.length; u++) {
                    var h = a[u], c = h.Pt(e.get(h.key));
                    null != c && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    s.push(new vt(h.key, c, It(c.proto.mapValue), pt.exists(!0)));
                }
                return n.Dn.bh(o, r, s, t);
            }));
        })).then((function(t) {
            var n = t.En(e);
            return {
                batchId: t.batchId,
                vh: n
            };
        }));
    }, 
    /**
     * Acknowledge the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */
    t.prototype.Sh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(n) {
            var r = t.batch.keys(), i = e.dh.Ch({
                Dh: !0
            });
            return e.Fh(n, t, i).next((function() {
                return i.apply(n);
            })).next((function() {
                return e.Dn.Nh(n);
            })).next((function() {
                return e.Ih.qn(n, r);
            }));
        }));
    }, 
    /**
     * Remove mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */
    t.prototype.$h = function(t) {
        var e = this;
        return this.persistence.runTransaction("Reject batch", "readwrite-primary", (function(n) {
            var r;
            return e.Dn.Lh(n, t).next((function(t) {
                return De(null !== t), r = t.keys(), e.Dn.Oh(n, t);
            })).next((function() {
                return e.Dn.Nh(n);
            })).next((function() {
                return e.Ih.qn(n, r);
            }));
        }));
    }, 
    /**
     * Returns the largest (latest) batch id in mutation queue that is pending server response.
     * Returns `BATCHID_UNKNOWN` if the queue is empty.
     */
    t.prototype.kh = function() {
        var t = this;
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(e) {
            return t.Dn.kh(e);
        }));
    }, 
    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */
    t.prototype.qh = function() {
        var t = this;
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(e) {
            return t.Th.qh(e);
        }));
    }, 
    /**
     * Update the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */
    t.prototype.Mh = function(e) {
        var n = this, r = e.Te, i = this.uh;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(o) {
            var s = n.dh.Ch({
                Dh: !0
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                        i = n.uh;
            var u = [];
            e.as.forEach((function(e, s) {
                var a = i.get(s);
                if (a) {
                    // Only update the remote keys if the target is still active. This
                    // ensures that we can persist the updated target data along with
                    // the updated assignment.
                    u.push(n.Th.xh(o, e.Es, s).next((function() {
                        return n.Th.Bh(o, e.ws, s);
                    })));
                    var h = e.resumeToken;
                    // Update the resume token if the change includes one.
                                        if (h.rt() > 0) {
                        var c = a.Ie(h, r).Ee(o.Uh);
                        i = i.Re(s, c), 
                        // Update the target data if there are target changes (or if
                        // sufficient time has passed since the last update).
                        t.Qh(a, c, e) && u.push(n.Th.Wh(o, c));
                    }
                }
            }));
            var a = Kt(), h = ee();
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
                        if (e.cs.forEach((function(t, e) {
                h = h.add(t);
            })), 
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            u.push(s.getEntries(o, h).next((function(t) {
                e.cs.forEach((function(i, h) {
                    var c = t.get(i);
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.min()) never add documents to
                    // cache.
                                        h instanceof Dt && h.version.isEqual(V$1.min()) ? (
                    // NoDocuments with SnapshotVersion.min() are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    s.jh(i, r), a = a.Re(i, h)) : null == c || h.version.S(c.version) > 0 || 0 === h.version.S(c.version) && c.hasPendingWrites ? (s.Gh(h, r), 
                    a = a.Re(i, h)) : Ne("LocalStore", "Ignoring outdated watch update for ", i, ". Current version:", c.version, " Watch version:", h.version), 
                    e.ls.has(i) && u.push(n.persistence.Kh.Hh(o, i));
                }));
            }))), !r.isEqual(V$1.min())) {
                var c = n.Th.qh(o).next((function(t) {
                    return n.Th.zh(o, o.Uh, r);
                }));
                u.push(c);
            }
            return Me.vn(u).next((function() {
                return s.apply(o);
            })).next((function() {
                return n.Ih.Mn(o, a);
            }));
        })).then((function(t) {
            return n.uh = i, t;
        }));
    }, 
    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
    t.Qh = function(t, e, n) {
        // Always persist target data if we don't already have a resume token.
        return De(e.resumeToken.rt() > 0), 0 === t.resumeToken.rt() || (e.Te.C() - t.Te.C() >= this.Yh || n.ws.size + n.Ts.size + n.Es.size > 0);
        // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
        }, 
    /**
     * Notify local store of the changed views to locally pin documents.
     */
    t.prototype.Xh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o, s, u, a, h, c = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(e) {
                        return Me.forEach(t, (function(t) {
                            return Me.forEach(t.Kn, (function(n) {
                                return c.persistence.Kh.Jh(e, t.targetId, n);
                            })).next((function() {
                                return Me.forEach(t.zn, (function(n) {
                                    return c.persistence.Kh.Zh(e, t.targetId, n);
                                }));
                            }));
                        }));
                    })) ];

                  case 1:
                    return n.sent(), [ 3 /*break*/ , 3 ];

                  case 2:
                    if (!We(e = n.sent())) throw e;
                    // If `notifyLocalViewChanges` fails, we did not advance the sequence
                    // number for the documents that were included in this transaction.
                    // This might trigger them to be deleted earlier than they otherwise
                    // would have, but it should not invalidate the integrity of the data.
                                        return Ne("LocalStore", "Failed to update sequence numbers: " + e), 
                    [ 3 /*break*/ , 3 ];

                  case 3:
                    for (r = 0, i = t; r < i.length; r++) o = i[r], s = o.targetId, o.fromCache || (u = this.uh.get(s), 
                    a = u.Te, h = u.me(a), 
                    // Advance the last limbo free snapshot version
                    this.uh = this.uh.Re(s, h));
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */
    t.prototype.to = function(t) {
        var e = this;
        return this.persistence.runTransaction("Get next mutation batch", "readonly", (function(n) {
            return void 0 === t && (t = -1), e.Dn.eo(n, t);
        }));
    }, 
    /**
     * Read the current value of a Document with a given key or null if not
     * found - used for testing.
     */
    t.prototype.so = function(t) {
        var e = this;
        return this.persistence.runTransaction("read document", "readonly", (function(n) {
            return e.Ih.Nn(n, t);
        }));
    }, 
    /**
     * Assigns the given target an internal ID so that its results can be pinned so
     * they don't get GC'd. A target must be allocated in the local store before
     * the store can be used to manage its view.
     *
     * Allocating an already allocated `Target` will return the existing `TargetData`
     * for that `Target`.
     */
    t.prototype.io = function(t) {
        var e = this;
        return this.persistence.runTransaction("Allocate target", "readwrite", (function(n) {
            var r;
            return e.Th.no(n, t).next((function(i) {
                return i ? (
                // This target has been listened to previously, so reuse the
                // previous targetID.
                // TODO(mcg): freshen last accessed date?
                r = i, Me.resolve(r)) : e.Th.ro(n).next((function(i) {
                    return r = new Ft(t, i, 0 /* Listen */ , n.Uh), e.Th.ho(n, r).next((function() {
                        return r;
                    }));
                }));
            }));
        })).then((function(n) {
            // If Multi-Tab is enabled, the existing target data may be newer than
            // the in-memory data
            var r = e.uh.get(n.targetId);
            return (null === r || n.Te.S(r.Te) > 0) && (e.uh = e.uh.Re(n.targetId, n), e.lh.set(t, n.targetId)), 
            n;
        }));
    }, 
    /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
    // Visible for testing.
    t.prototype.no = function(t, e) {
        var n = this.lh.get(e);
        return void 0 !== n ? Me.resolve(this.uh.get(n)) : this.Th.no(t, e);
    }, 
    /**
     * Unpin all the documents associated with the given target. If
     * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
     * directly removes the associated target data from the target cache.
     *
     * Releasing a non-existing `Target` is a no-op.
     */
    // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
    t.prototype.oo = function(t, e) {
        var n = this, r = this.uh.get(t), i = e ? "readwrite" : "readwrite-primary";
        return this.persistence.runTransaction("Release target", i, (function(t) {
            return e ? Me.resolve() : n.persistence.Kh.removeTarget(t, r);
        })).then((function() {
            n.uh = n.uh.remove(t), n.lh.delete(r.target);
        }));
    }, 
    /**
     * Runs the specified query against the local store and returns the results,
     * potentially taking advantage of query data from previous executions (such
     * as the set of remote keys).
     *
     * @param usePreviousResults Whether results from previous executions can
     * be used to optimize this query execution.
     */
    t.prototype.ao = function(t, e) {
        var n = this, r = V$1.min(), i = ee();
        return this.persistence.runTransaction("Execute query", "readonly", (function(o) {
            return n.no(o, t.ee()).next((function(t) {
                if (t) return r = t.lastLimboFreeSnapshotVersion, n.Th.uo(o, t.targetId).next((function(t) {
                    i = t;
                }));
            })).next((function() {
                return n.ah.Bn(o, t, e ? r : V$1.min(), e ? i : ee());
            })).next((function(t) {
                return {
                    documents: t,
                    co: i
                };
            }));
        }));
    }, t.prototype.Fh = function(t, e, n) {
        var r = this, i = e.batch, o = i.keys(), s = Me.resolve();
        return o.forEach((function(r) {
            s = s.next((function() {
                return n.On(t, r);
            })).next((function(t) {
                var o = t, s = e.mn.get(r);
                De(null !== s), (!o || o.version.S(s) < 0) && ((o = i.at(r, o, e)) && 
                // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                n.Gh(o, e.In));
            }));
        })), s.next((function() {
            return r.Dn.Oh(t, i);
        }));
    }, t.prototype.lo = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t._o(n, e.uh);
        }));
    }, t;
}();

/**
 * The maximum time to leave a resume token buffered without writing it out.
 * This value is arbitrary: it's long enough to avoid several writes
 * (possibly indefinitely if updates come more frequently than this) but
 * short enough that restarting after crashing will still have a pretty
 * recent resume token.
 */
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */ function Je(t) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(e) {
            if (t.code !== E$1.FAILED_PRECONDITION || "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab." !== t.message) throw t;
            return Ne("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ $e.Yh = 3e8;

var Ze = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.fo = new Wt(tn.do), 
        // A set of outstanding references to a document sorted by target id.
        this.wo = new Wt(tn.To)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.M = function() {
        return this.fo.M();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.Jh = function(t, e) {
        var n = new tn(t, e);
        this.fo = this.fo.add(n), this.wo = this.wo.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.Eo = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.Jh(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.Zh = function(t, e) {
        this.Io(new tn(t, e));
    }, t.prototype.mo = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.Zh(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Ro = function(t) {
        var e = this, n = O$1.EMPTY, r = new tn(n, t), i = new tn(n, t + 1), o = [];
        return this.wo.Ge([ r, i ], (function(t) {
            e.Io(t), o.push(t.key);
        })), o;
    }, t.prototype.Ao = function() {
        var t = this;
        this.fo.forEach((function(e) {
            return t.Io(e);
        }));
    }, t.prototype.Io = function(t) {
        this.fo = this.fo.delete(t), this.wo = this.wo.delete(t);
    }, t.prototype.Po = function(t) {
        var e = O$1.EMPTY, n = new tn(e, t), r = new tn(e, t + 1), i = ee();
        return this.wo.Ge([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.Vo = function(t) {
        var e = new tn(t, 0), n = this.fo.Ke(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), tn = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.po = e
        /** Compare by key then by ID */;
    }
    return t.do = function(t, e) {
        return O$1.N(t.key, e.key) || ke(t.po, e.po);
    }, 
    /** Compare by ID then by key */ t.To = function(t, e) {
        return ke(t.po, e.po) || O$1.N(t.key, e.key);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */
function en(t, e) {
    if (0 !== e.length) throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + bn(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function nn(t, e, n) {
    if (e.length !== n) throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires " + bn(n, "argument") + ", but was called with " + bn(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function rn(t, e, n) {
    if (e.length < n) throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires at least " + bn(n, "argument") + ", but was called with " + bn(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function on(t, e, n, r) {
    if (e.length < n || e.length > r) throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + bn(e.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */ function sn(t, e, n, r) {
    ln(t, e, wn(n) + " argument", r);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function un(t, e, n, r) {
    void 0 !== r && sn(t, e, n, r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function an(t, e, n, r) {
    ln(t, e, n + " option", r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function hn(t, e, n, r) {
    void 0 !== r && an(t, e, n, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function cn(t, e, n, r, i) {
    void 0 !== r && function(t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
            var a = u[s];
            if (a === r) return;
            o.push(dn(a));
        }
        var h = dn(r);
        throw new I$1(E$1.INVALID_ARGUMENT, "Invalid value " + h + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
    }(t, 0, n, r, i);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Argument to validate.
 * @return The value as T if the argument can be converted.
 */ function fn(t, e, n, r) {
    if (!e.some((function(t) {
        return t === r;
    }))) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid value " + dn(r) + " provided to function " + t + "() for its " + wn(n) + " argument. Acceptable values: " + e.join(", "));
    return r;
}

/** Helper to validate the type of a provided input. */ function ln(t, e, n, r) {
    if (!("object" === e ? pn(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = dn(r);
        throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function pn(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function dn(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : _e();
}

function yn(t, e, n) {
    if (void 0 === n) throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + wn(e) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function vn(t, e, n) {
    q$1(e, (function(e, r) {
        if (n.indexOf(e) < 0) throw new I$1(E$1.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function mn(t, e, n, r) {
    var i = dn(r);
    return new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + wn(n) + " argument to be a " + e + ", but it was: " + i);
}

function gn(t, e, n) {
    if (n <= 0) throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + wn(e) + " argument to be a positive number, but it was: " + n + ".");
}

/** Converts a number to its english word representation */ function wn(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function bn(t, e) {
    return t + " " + e + (1 === t ? "" : "s");
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */ function En() {
    if ("undefined" == typeof Uint8Array) throw new I$1(E$1.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function In() {
    if (!be.nt().yo) throw new I$1(E$1.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ var Nn = /** @class */ function() {
    function t(t) {
        In(), this.bo = t;
    }
    return t.fromBase64String = function(e) {
        nn("Blob.fromBase64String", arguments, 1), sn("Blob.fromBase64String", "string", 1, e), 
        In();
        try {
            return new t(C$1.fromBase64String(e));
        } catch (e) {
            throw new I$1(E$1.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e);
        }
    }, t.fromUint8Array = function(e) {
        if (nn("Blob.fromUint8Array", arguments, 1), En(), !(e instanceof Uint8Array)) throw mn("Blob.fromUint8Array", "Uint8Array", 1, e);
        return new t(C$1.fromUint8Array(e));
    }, t.prototype.toBase64 = function() {
        return nn("Blob.toBase64", arguments, 0), In(), this.bo.toBase64();
    }, t.prototype.toUint8Array = function() {
        return nn("Blob.toUint8Array", arguments, 0), En(), this.bo.toUint8Array();
    }, t.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.bo.isEqual(t.bo);
    }, t;
}(), An = function(t) {
    !function(t, e, n, r) {
        if (!(e instanceof Array) || e.length < 1) throw new I$1(E$1.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + bn(1, "element") + ".");
    }(0, t);
    for (var e = 0; e < t.length; ++e) if (sn("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this.vo = new P$1(t);
}, Tn = /** @class */ function(e) {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function n() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return e.call(this, t) || this;
    }
    return __extends(n, e), n.documentId = function() {
        return n.So;
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw mn("isEqual", "FieldPath", 1, t);
        return this.vo.isEqual(t.vo);
    }, n;
}(An);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A field class base class that is shared by the lite, full and legacy SDK,
 * which supports shared code that deals with FieldPaths.
 */
/**
 * Internal Note: The backend doesn't technically support querying by
 * document ID. Instead it queries by the entire document name (full path
 * included), but in the cases we currently support documentId(), the net
 * effect is the same.
 */
Tn.So = new Tn(P$1.X().j());

/**
 * Matches any characters in a field path string that are reserved.
 */
var _n = new RegExp("[~\\*/\\[\\]]"), Dn = function() {
    /** A pointer to the implementing class. */
    this.Co = this;
}, Rn = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Do = t, n;
    }
    return __extends(n, e), n.prototype.Fo = function(t) {
        if (2 /* MergeSet */ !== t.No) throw 1 /* Update */ === t.No ? t.$o(this.Do + "() can only appear at the top level of your update data") : t.$o(this.Do + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.Vt.push(t.path), null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(Dn), Vn = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Do = t, n;
    }
    return __extends(n, e), n.prototype.Fo = function(t) {
        return new ft(t.path, ot.instance);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(Dn), kn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Do = t, r.Lo = n, r;
    }
    return __extends(n, e), n.prototype.Fo = function(t) {
        // Although array transforms are used with writes, the actual elements
        // being uniomed or removed are not considered writes since they cannot
        // contain any FieldValue sentinels, etc.
        var e = new jn({
            No: 3 /* Argument */ ,
            methodName: this.Do,
            Oo: !0
        }, t.ii, t.serializer, t.ignoreUndefinedProperties), n = this.Lo.map((function(t) {
            return Gn(t, e);
        })), r = new st(n);
        return new ft(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Dn), Sn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Do = t, r.Lo = n, r;
    }
    return __extends(n, e), n.prototype.Fo = function(t) {
        // Although array transforms are used with writes, the actual elements
        // being unioned or removed are not considered writes since they cannot
        // contain any FieldValue sentinels, etc.
        var e = new jn({
            No: 3 /* Argument */ ,
            methodName: this.Do,
            Oo: !0
        }, t.ii, t.serializer, t.ignoreUndefinedProperties), n = this.Lo.map((function(t) {
            return Gn(t, e);
        })), r = new ut(n);
        return new ft(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Dn), Un = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Do = t, r.ko = n, r;
    }
    return __extends(n, e), n.prototype.Fo = function(t) {
        var e = new jn({
            No: 3 /* Argument */ ,
            methodName: this.Do
        }, t.ii, t.serializer, t.ignoreUndefinedProperties), n = Gn(this.ko, e), r = new at(t.serializer, n);
        return new ft(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Dn), Pn = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.delete = function() {
        return en("FieldValue.delete", arguments), new On(new Rn("FieldValue.delete"));
    }, n.serverTimestamp = function() {
        return en("FieldValue.serverTimestamp", arguments), new On(new Vn("FieldValue.serverTimestamp"));
    }, n.arrayUnion = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return rn("FieldValue.arrayUnion", arguments, 1), new On(new kn("FieldValue.arrayUnion", t));
    }, n.arrayRemove = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return rn("FieldValue.arrayRemove", arguments, 1), new On(new Sn("FieldValue.arrayRemove", t));
    }, n.increment = function(t) {
        return sn("FieldValue.increment", "number", 1, t), nn("FieldValue.increment", arguments, 1), 
        new On(new Un("FieldValue.increment", t));
    }, n;
}(Dn), On = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Co = t, n.Do = t.Do, n;
    }
    return __extends(n, e), n.prototype.Fo = function(t) {
        return this.Co.Fo(t);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.Co.isEqual(t.Co);
    }, n;
}(Pn), Ln = /** @class */ function() {
    function t(t, e) {
        if (nn("GeoPoint", arguments, 2), sn("GeoPoint", "number", 1, t), sn("GeoPoint", "number", 2, e), 
        !isFinite(t) || t < -90 || t > 90) throw new I$1(E$1.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new I$1(E$1.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.qo = t, this.Mo = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this.qo;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.Mo;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.qo === t.qo && this.Mo === t.Mo;
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.g = function(t) {
        return ke(this.qo, t.qo) || ke(this.Mo, t.Mo);
    }, t;
}(), qn = /^__.*__$/, Mn = function(t, e, n) {
    this.xo = t, this.Bo = e, this.Uo = n;
}, Cn = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Vt = e, this.fieldTransforms = n;
    }
    return t.prototype.Qo = function(t, e) {
        var n = [];
        return null !== this.Vt ? n.push(new vt(t, this.data, this.Vt, e)) : n.push(new yt(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new mt(t, this.fieldTransforms)), n;
    }, t;
}(), Fn = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Vt = e, this.fieldTransforms = n;
    }
    return t.prototype.Qo = function(t, e) {
        var n = [ new vt(t, this.data, this.Vt, e) ];
        return this.fieldTransforms.length > 0 && n.push(new mt(t, this.fieldTransforms)), 
        n;
    }, t;
}();

/**
 * Parses a field path string into a FieldPath, treating dots as separators.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An opaque base class for FieldValue sentinel objects in our public API that
 * is shared between the full, lite and legacy SDK.
 */ function xn(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw _e();
    }
}

/** A "context" object passed around while parsing user data. */ var jn = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings The settings for the parser.
     * @param databaseId The database ID of the Firestore instance.
     * @param serializer The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.settings = t, this.ii = e, this.serializer = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.Wo(), this.fieldTransforms = i || [], this.Vt = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "No", {
        get: function() {
            return this.settings.No;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.jo = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.ii, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Vt);
    }, t.prototype.Go = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.jo({
            path: n,
            Oo: !1
        });
        return r.Ho(t), r;
    }, t.prototype.Ko = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.jo({
            path: n,
            Oo: !1
        });
        return r.Wo(), r;
    }, t.prototype.zo = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.jo({
            path: void 0,
            Oo: !0
        });
    }, t.prototype.$o = function(t) {
        var e = !this.path || this.path.M() ? "" : " (found in field " + this.path.toString() + ")";
        return new I$1(E$1.INVALID_ARGUMENT, "Function " + this.settings.methodName + "() called with invalid data. " + t + e);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.Vt.find((function(e) {
            return t.B(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.B(e.field);
        }));
    }, t.prototype.Wo = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.Ho(this.path.get(t));
    }, t.prototype.Ho = function(t) {
        if (0 === t.length) throw this.$o("Document fields must not be empty");
        if (xn(this.No) && qn.test(t)) throw this.$o('Document fields cannot begin and end with "__"');
    }, t;
}(), Bn = /** @class */ function() {
    function t(t, e, n) {
        this.ii = t, this.ignoreUndefinedProperties = e, this.serializer = n || be.nt().Yo(t)
        /** Parse document data from a set() call. */;
    }
    return t.prototype.Xo = function(t, e, n) {
        void 0 === n && (n = {});
        var r = this.Jo(n.merge || n.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , t);
        Wn("Data must be an object, but it was:", r, e);
        var i, o, s = zn(e, r);
        if (n.merge) i = new ct(r.Vt), o = r.fieldTransforms; else if (n.mergeFields) {
            for (var u = [], a = 0, h = n.mergeFields; a < h.length; a++) {
                var c = h[a], f = void 0;
                if (c instanceof An) f = c.vo; else {
                    if ("string" != typeof c) throw _e();
                    f = Yn(t, c);
                }
                if (!r.contains(f)) throw new I$1(E$1.INVALID_ARGUMENT, "Field '" + f + "' is specified in your field mask but missing from your input data.");
                Kn(u, f) || u.push(f);
            }
            i = new ct(u), o = r.fieldTransforms.filter((function(t) {
                return i.ft(t.field);
            }));
        } else i = null, o = r.fieldTransforms;
        return new Cn(new bt(s), i, o);
    }, 
    /** Parse update data from an update() call. */ t.prototype.Zo = function(t, e) {
        var n = this.Jo(1 /* Update */ , t);
        Wn("Data must be an object, but it was:", n, e);
        var r = [], i = new Et;
        q$1(e, (function(e, o) {
            var s = Yn(t, e), u = n.Ko(s);
            if (o instanceof Dn && o.Co instanceof Rn) 
            // Add it to the field mask, but don't add anything to updateData.
            r.push(s); else {
                var a = Gn(o, u);
                null != a && (r.push(s), i.set(s, a));
            }
        }));
        var o = new ct(r);
        return new Fn(i.gt(), o, n.fieldTransforms);
    }, 
    /** Parse update data from a list of field/value arguments. */ t.prototype.ta = function(t, e, n, r) {
        var i = this.Jo(1 /* Update */ , t), o = [ Hn(t, e) ], s = [ n ];
        if (r.length % 2 != 0) throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
        for (var u = 0; u < r.length; u += 2) o.push(Hn(t, r[u])), s.push(r[u + 1]);
        // We iterate in reverse order to pick the last value for a field if the
        // user specified the field multiple times.
        for (var a = [], h = new Et, c = o.length - 1; c >= 0; --c) if (!Kn(a, o[c])) {
            var f = o[c], l = s[c], p = i.Ko(f);
            if (l instanceof Dn && l.Co instanceof Rn) 
            // Add it to the field mask, but don't add anything to updateData.
            a.push(f); else {
                var d = Gn(l, p);
                null != d && (a.push(f), h.set(f, d));
            }
        }
        var y = new ct(a);
        return new Fn(h.gt(), y, i.fieldTransforms);
    }, 
    /** Creates a new top-level parse context. */ t.prototype.Jo = function(t, e) {
        return new jn({
            No: t,
            methodName: e,
            path: P$1.H,
            Oo: !1
        }, this.ii, this.serializer, this.ignoreUndefinedProperties);
    }, 
    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     *
     * @param allowArrays Whether the query value is an array that may directly
     * contain additional arrays (e.g. the operand of an `in` query).
     */
    t.prototype.ea = function(t, e, n) {
        return void 0 === n && (n = !1), Gn(e, this.Jo(n ? 4 /* ArrayArgument */ : 3 /* Argument */ , t));
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */
/**
 * Parses user data to Protobuf Values.
 *
 * @param input Data to be parsed.
 * @param context A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @return The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */
function Gn(t, e) {
    if (Qn(t)) return Wn("Unsupported field value:", e, t), zn(t, e);
    if (t instanceof Dn) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!xn(e.No)) throw e.$o(t.Do + "() can only be used with update() and set()");
        if (!e.path) throw e.$o(t.Do + "() is not currently supported inside arrays");
        var n = t.Fo(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.Vt.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.Oo && 4 /* ArrayArgument */ !== e.No) throw e.$o("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var s = Gn(o[i], e.zo(r));
                null == s && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                s = {
                    nullValue: "NULL_VALUE"
                }), n.push(s), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return e.serializer.ai(t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = R$1.fromDate(t);
            return {
                timestampValue: e.serializer.D(n)
            };
        }
        if (t instanceof R$1) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new R$1(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: e.serializer.D(r)
            };
        }
        if (t instanceof Ln) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof Nn) return {
            bytesValue: e.serializer.ui(t)
        };
        if (t instanceof Mn) {
            var i = e.ii, o = t.xo;
            if (!o.isEqual(i)) throw e.$o("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {
                referenceValue: e.serializer.li(t.Bo.path, t.xo)
            };
        }
        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.$o("Unsupported field value: " + dn(t));
    }(t, e);
}

function zn(t, e) {
    var n = {};
    return M$1(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.Vt.push(e.path) : q$1(t, (function(t, r) {
        var i = Gn(r, e.Go(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function Qn(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof R$1 || t instanceof Ln || t instanceof Nn || t instanceof Mn || t instanceof Dn);
}

function Wn(t, e, n) {
    if (!Qn(n) || !pn(n)) {
        var r = dn(n);
        throw "an object" === r ? e.$o(t + " a custom object") : e.$o(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Hn(t, e) {
    if (e instanceof An) return e.vo;
    if ("string" == typeof e) return Yn(t, e);
    throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.");
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 */ function Yn(t, e) {
    try {
        return function(t) {
            if (t.search(_n) >= 0) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new (Tn.bind.apply(Tn, __spreadArrays([ void 0 ], t.split("."))));
            } catch (e) {
                throw new I$1(E$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(e).vo;
    } catch (e) {
        var n = (i = e) instanceof Error ? i.message : i.toString();
        throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + n);
    }
    /**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */    var i;
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */}

function Kn(t, e) {
    return t.some((function(t) {
        return t.isEqual(e);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ var Xn = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.sr = t, this.sa = n, this.ia = r, this.na = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.ra = 0, this.ha = null, this.stream = null, this.kr = new Be(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.oa = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.aa = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.ua();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.oa() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.ca = function() {
        this.state = 0 /* Initial */ , this.kr.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.la = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.aa() && null === this.ha && (this.ha = this.sr.dr(this.sa, 6e4, (function() {
            return t._a();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.fa = function(t) {
        this.da(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype._a = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this.aa() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.da = function() {
        this.ha && (this.ha.cancel(), this.ha = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    t.prototype.close = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.da(), this.kr.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.ra++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.kr.reset() : r && r.code === E$1.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    Ae(r.toString()), Ae("Using maximum backoff delay to prevent overloading the backend."), 
                    this.kr.cr()) : r && r.code === E$1.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.na.l(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.wa(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.Ta(r) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.wa = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.Ea(this.ra), n = this.ra;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.na.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.ra === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.Ia(e);
        }), (function(n) {
            e((function() {
                var e = new I$1(E$1.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.ma(e);
            }));
        }));
    }, t.prototype.Ia = function(t) {
        var e = this, n = this.Ea(this.ra);
        this.stream = this.Ra(t), this.stream.Aa((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.Aa();
            }));
        })), this.stream.Ta((function(t) {
            n((function() {
                return e.ma(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.ua = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.kr.lr((function() {
            return __awaiter(t, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.ma = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return Ne("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.Ea = function(t) {
        var e = this;
        return function(n) {
            e.sr.Sr((function() {
                return e.ra === t ? n() : (Ne("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), $n = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).serializer = i, 
        s;
    }
    return __extends(n, e), n.prototype.Ra = function(t) {
        return this.ia.Pa("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.kr.reset();
        var e = this.serializer.yi(t), n = this.serializer.bi(t);
        return this.listener.Va(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.pa = function(t) {
        var e = {};
        e.database = this.serializer.Ii, e.addTarget = this.serializer.ee(t);
        var n = this.serializer.Ki(t);
        n && (e.labels = n), this.fa(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.ya = function(t) {
        var e = {};
        e.database = this.serializer.Ii, e.removeTarget = t, this.fa(e);
    }, n;
}(Xn), Jn = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).serializer = i, 
        s.ga = !1, 
        /**
             * The last received stream token from the server, used to acknowledge which
             * responses the client has processed. Stream tokens are opaque checkpoint
             * markers whose only real value is their inclusion in the next request.
             *
             * PersistentWriteStream manages propagating this value from responses to the
             * next request.
             */
        s.lastStreamToken = C$1.ht, s;
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "ba", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.ga;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.ga = !1, this.lastStreamToken = C$1.ht, e.prototype.start.call(this);
    }, n.prototype.wa = function() {
        this.ga && this.va([]);
    }, n.prototype.Ra = function(t) {
        return this.ia.Pa("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        De(!!t.streamToken), this.lastStreamToken = this.serializer.ci(t.streamToken), this.ga) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.kr.reset();
            var e = this.serializer.ki(t.writeResults, t.commitTime), n = this.serializer.fromVersion(t.commitTime);
            return this.listener.Sa(n, e);
        }
        // The first response is always the handshake response
                return De(!t.writeResults || 0 === t.writeResults.length), this.ga = !0, 
        this.listener.Ca();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.Da = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = this.serializer.Ii, this.fa(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.va = function(t) {
        var e = this, n = {
            streamToken: this.serializer.ui(this.lastStreamToken),
            writes: t.map((function(t) {
                return e.serializer.vi(t);
            }))
        };
        this.fa(n);
    }, n;
}(Xn), Zn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).ia = t, i.credentials = n, i.serializer = r, i.Na = !1, 
        i;
    }
    return __extends(n, e), n.prototype.$a = function() {
        if (this.Na) throw new I$1(E$1.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Gets an auth token and invokes the provided RPC. */ n.prototype.La = function(t, e) {
        var n = this;
        return this.$a(), this.credentials.getToken().then((function(r) {
            return n.ia.La(t, e, r);
        })).catch((function(t) {
            throw t.code === E$1.UNAUTHENTICATED && n.credentials.l(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ n.prototype.Oa = function(t, e) {
        var n = this;
        return this.$a(), this.credentials.getToken().then((function(r) {
            return n.ia.Oa(t, e, r);
        })).catch((function(t) {
            throw t.code === E$1.UNAUTHENTICATED && n.credentials.l(), t;
        }));
    }, n;
}((function() {
    // Make sure that the structural type of `Datastore` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.Fa = void 0;
})), tr = /** @class */ function() {
    function t(t) {
        this.ka = t, 
        // The version of each document that was read during this transaction.
        this.qa = new Map, this.mutations = [], this.Ma = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.xa = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.Ba = new Set;
    }
    return t.prototype.Ua = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var r, i = this;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    if (this.Qa(), this.mutations.length > 0) throw new I$1(E$1.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(t, r) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var e, i, o, s, u;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = Re(t), i = {
                                        database: e.serializer.Ii,
                                        documents: r.map((function(t) {
                                            return e.serializer.di(t);
                                        }))
                                    }, [ 4 /*yield*/ , e.Oa("BatchGetDocuments", i) ];

                                  case 1:
                                    return o = n.sent(), s = new Map, o.forEach((function(t) {
                                        var n = e.serializer.pi(t);
                                        s.set(n.key.toString(), n);
                                    })), u = [], [ 2 /*return*/ , (r.forEach((function(t) {
                                        var e = s.get(t.toString());
                                        De(!!e), u.push(e);
                                    })), u) ];
                                }
                            }));
                        }));
                    }(this.ka, t) ];

                  case 1:
                    return [ 2 /*return*/ , ((r = o.sent()).forEach((function(t) {
                        t instanceof Dt || t instanceof _t ? i.Wa(t) : _e();
                    })), r) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.Qo(t, this.Rt(t))), this.Ba.add(t);
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.Qo(t, this.ja(t)));
        } catch (t) {
            this.xa = t;
        }
        this.Ba.add(t);
    }, t.prototype.delete = function(t) {
        this.write([ new gt(t, this.Rt(t)) ]), this.Ba.add(t);
    }, t.prototype.commit = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, r = this;
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (this.Qa(), this.xa) throw this.xa;
                    return t = this.qa, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t.delete(e.key.toString());
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, e) {
                        var n = new O$1(S$1.G(e));
                        r.mutations.push(new wt(n, r.Rt(n)));
                    })), [ 4 /*yield*/ , function(t, r) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var e, i;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = Re(t), i = {
                                        database: e.serializer.Ii,
                                        writes: r.map((function(t) {
                                            return e.serializer.vi(t);
                                        }))
                                    }, [ 4 /*yield*/ , e.La("Commit", i) ];

                                  case 1:
                                    return n.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.ka, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return i.sent(), this.Ma = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Wa = function(t) {
        var e;
        if (t instanceof _t) e = t.version; else {
            if (!(t instanceof Dt)) throw _e();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = V$1.min();
        }
        var n = this.qa.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new I$1(E$1.ABORTED, "Document version changed between two reads.");
        } else this.qa.set(t.key.toString(), e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.Rt = function(t) {
        var e = this.qa.get(t.toString());
        return !this.Ba.has(t) && e ? pt.updateTime(e) : pt.dt();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.ja = function(t) {
        var e = this.qa.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.Ba.has(t) && e) {
            if (e.isEqual(V$1.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new I$1(E$1.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return pt.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return pt.exists(!0);
    }, t.prototype.write = function(t) {
        this.Qa(), this.mutations = this.mutations.concat(t);
    }, t.prototype.Qa = function() {}, t;
}(), er = /** @class */ function() {
    function t(t, e) {
        this.Pr = t, this.Ga = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.Ha = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.Ka = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.za = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.Ya = function() {
        var t = this;
        0 === this.Ha && (this.Xa("Unknown" /* Unknown */), this.Ka = this.Pr.dr("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.Ka = null, t.Ja("Backend didn't respond within 10 seconds."), t.Xa("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Za = function(t) {
        "Online" /* Online */ === this.state ? this.Xa("Unknown" /* Unknown */) : (this.Ha++, 
        this.Ha >= 1 && (this.tu(), this.Ja("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Xa("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.tu(), this.Ha = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.za = !1), this.Xa(t);
    }, t.prototype.Xa = function(t) {
        t !== this.state && (this.state = t, this.Ga(t));
    }, t.prototype.Ja = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.za ? (Ae(e), this.za = !1) : Ne("OnlineStateTracker", e);
    }, t.prototype.tu = function() {
        null !== this.Ka && (this.Ka.cancel(), this.Ka = null);
    }, t;
}(), nr = /** @class */ function() {
    function t(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    r, i, o, s) {
        var u = this;
        this.eu = t, this.ka = r, this.Pr = i, 
        /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
        this.su = [], 
        /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
        this.iu = new Map, this.nu = null, 
        /**
             * Set to true by enableNetwork() and false by disableNetwork() and indicates
             * the user-preferred network state.
             */
        this.networkEnabled = !1, this.isPrimary = !1, 
        /**
             * When set to `true`, the network was taken offline due to an IndexedDB
             * failure. The state is flipped to `false` when access becomes available
             * again.
             */
        this.ru = !1, this.hu = s, this.hu.ou((function(t) {
            i.Sr((function() {
                return __awaiter(u, void 0, void 0, (function() {
                    return __generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return this.au() ? (Ne("RemoteStore", "Restarting streams for network reachability change."), 
                            [ 4 /*yield*/ , this.uu() ]) : [ 3 /*break*/ , 2 ];

                          case 1:
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        })), this.cu = new er(i, o), 
        // Create streams (but note they're not started yet).
        this.lu = function(t, e, n) {
            var r = Re(t);
            return new $n(e, r.ia, r.credentials, r.serializer, n);
        }(this.ka, i, {
            Aa: this._u.bind(this),
            Ta: this.fu.bind(this),
            Va: this.du.bind(this)
        }), this.wu = function(t, e, n) {
            var r = Re(t);
            return new Jn(e, r.ia, r.credentials, r.serializer, n);
        }(this.ka, i, {
            Aa: this.Tu.bind(this),
            Ta: this.Eu.bind(this),
            Ca: this.Iu.bind(this),
            Sa: this.Sa.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */    return t.prototype.start = function() {
        return this.enableNetwork();
    }, 
    /** Re-enables the network. Idempotent. */ t.prototype.enableNetwork = function() {
        return this.networkEnabled = !0, this.mu();
    }, t.prototype.mu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.au() ? (this.Ru() ? this.Au() : this.cu.set("Unknown" /* Unknown */), 
                    [ 4 /*yield*/ , this.Pu() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    // This will start the write stream if necessary.
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */
    t.prototype.disableNetwork = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.Vu() ];

                  case 1:
                    return t.sent(), 
                    // Set the OnlineState to Offline so get()s return from cache, etc.
                    this.cu.set("Offline" /* Offline */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Vu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.wu.stop() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.lu.stop() ];

                  case 2:
                    return t.sent(), this.su.length > 0 && (Ne("RemoteStore", "Stopping write stream with " + this.su.length + " pending writes"), 
                    this.su = []), this.pu(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.yu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return Ne("RemoteStore", "RemoteStore shutting down."), this.networkEnabled = !1, 
                    [ 4 /*yield*/ , this.Vu() ];

                  case 1:
                    return t.sent(), this.hu.yu(), 
                    // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    this.cu.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    t.prototype.listen = function(t) {
        this.iu.has(t.targetId) || (
        // Mark this as something the client is currently listening for.
        this.iu.set(t.targetId, t), this.Ru() ? 
        // The listen will be sent in onWatchStreamOpen
        this.Au() : this.lu.aa() && this.gu(t));
    }, 
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */
    t.prototype.bu = function(t) {
        this.iu.delete(t), this.lu.aa() && this.vu(t), 0 === this.iu.size && (this.lu.aa() ? this.lu.la() : this.au() && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.cu.set("Unknown" /* Unknown */));
    }, 
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */ t.prototype.si = function(t) {
        return this.iu.get(t) || null;
    }, 
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */ t.prototype.ei = function(t) {
        return this.Su.ei(t);
    }, 
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    t.prototype.gu = function(t) {
        this.nu.Ns(t.targetId), this.lu.pa(t);
    }, 
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    t.prototype.vu = function(t) {
        this.nu.Ns(t), this.lu.ya(t);
    }, t.prototype.Au = function() {
        this.nu = new pe(this), this.lu.start(), this.cu.Ya();
    }, 
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */
    t.prototype.Ru = function() {
        return this.au() && !this.lu.oa() && this.iu.size > 0;
    }, t.prototype.au = function() {
        return !this.ru && this.isPrimary && this.networkEnabled;
    }, t.prototype.pu = function() {
        this.nu = null;
    }, t.prototype._u = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t = this;
            return __generator(this, (function(e) {
                return this.iu.forEach((function(e, n) {
                    t.gu(e);
                })), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.fu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                return this.pu(), 
                // If we still need the watch stream, retry the connection.
                this.Ru() ? (this.cu.Za(t), this.Au()) : 
                // No need to restart watch stream because there are no active targets.
                // The online state is set to unknown because there is no active attempt
                // at establishing a connection
                this.cu.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.du = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (this.cu.set("Online" /* Online */), !(t instanceof fe && 2 /* Removed */ === t.state && t.cause)) 
                    // Mark the client as online since we got a message from the server
                    return [ 3 /*break*/ , 6 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , this.Cu(t) ];

                  case 2:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 3:
                    return e = n.sent(), Ne("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), e), 
                    [ 4 /*yield*/ , this.Du(e) ];

                  case 4:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 5:
                    return [ 3 /*break*/ , 13 ];

                  case 6:
                    if (t instanceof he ? this.nu.Bs(t) : t instanceof ce ? this.nu.zs(t) : this.nu.Ws(t), 
                    r.isEqual(V$1.min())) return [ 3 /*break*/ , 13 ];
                    n.label = 7;

                  case 7:
                    return n.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , this.eu.qh() ];

                  case 8:
                    return i = n.sent(), r.S(i) >= 0 ? [ 4 /*yield*/ , this.Fu(r) ] : [ 3 /*break*/ , 10 ];

                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.min().
                                      case 9:
                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.min().
                    n.sent(), n.label = 10;

                  case 10:
                    return [ 3 /*break*/ , 13 ];

                  case 11:
                    return Ne("RemoteStore", "Failed to raise snapshot:", o = n.sent()), [ 4 /*yield*/ , this.Du(o) ];

                  case 12:
                    return n.sent(), [ 3 /*break*/ , 13 ];

                  case 13:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Recovery logic for IndexedDB errors that takes the network offline until
     * `op` succeeds. Retries are scheduled with backoff using
     * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
     * validated via a generic operation.
     *
     * The returned Promise is resolved once the network is disabled and before
     * any retry attempt.
     */
    t.prototype.Du = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var i = this;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    if (!We(t)) throw t;
                    // Disable network and raise offline snapshots
                    return this.ru = !0, [ 4 /*yield*/ , this.Vu() ];

                  case 1:
                    // Disable network and raise offline snapshots
                    return o.sent(), this.cu.set("Offline" /* Offline */), r || (
                    // Use a simple read operation to determine if IndexedDB recovered.
                    // Ideally, we would expose a health check directly on SimpleDb, but
                    // RemoteStore only has access to persistence through LocalStore.
                    r = function() {
                        return i.eu.qh();
                    }), 
                    // Probe IndexedDB periodically and re-enable network
                    this.Pr.jr((function() {
                        return __awaiter(i, void 0, void 0, (function() {
                            return __generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return Ne("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , r() ];

                                  case 1:
                                    return t.sent(), this.ru = !1, [ 4 /*yield*/ , this.mu() ];

                                  case 2:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Executes `op`. If `op` fails, takes the network offline until `op`
     * succeeds. Returns after the first attempt.
     */
    t.prototype.Nu = function(t) {
        var e = this;
        return t().catch((function(n) {
            return e.Du(n, t);
        }));
    }, 
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    t.prototype.Fu = function(t) {
        var e = this, n = this.nu.Js(t);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
        // Finally raise remote event
        return n.as.forEach((function(n, r) {
            if (n.resumeToken.rt() > 0) {
                var i = e.iu.get(r);
                // A watched target might have been removed already.
                                i && e.iu.set(r, i.Ie(n.resumeToken, t));
            }
        })), 
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n.us.forEach((function(t) {
            var n = e.iu.get(t);
            if (n) {
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                e.iu.set(t, n.Ie(C$1.ht, n.Te)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                e.vu(t);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                var r = new Ft(n.target, t, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                e.gu(r);
            }
        })), this.Su.Mh(n);
    }, 
    /** Handles an error on a target */ t.prototype.Cu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    e = t.cause, r = 0, i = t.targetIds, n.label = 1;

                  case 1:
                    return r < i.length ? (o = i[r], this.iu.has(o) ? [ 4 /*yield*/ , this.Su.$u(o, e) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                  case 2:
                    n.sent(), this.iu.delete(o), this.nu.removeTarget(o), n.label = 3;

                  case 3:
                    n.label = 4;

                  case 4:
                    return r++, [ 3 /*break*/ , 1 ];

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */
    t.prototype.Pu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e, r;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    t = this.su.length > 0 ? this.su[this.su.length - 1].batchId : -1, n.label = 1;

                  case 1:
                    if (!this.Lu()) return [ 3 /*break*/ , 7 ];
                    n.label = 2;

                  case 2:
                    return n.trys.push([ 2, 4, , 6 ]), [ 4 /*yield*/ , this.eu.to(t) ];

                  case 3:
                    return null === (e = n.sent()) ? (0 === this.su.length && this.wu.la(), [ 3 /*break*/ , 7 ]) : (t = e.batchId, 
                    this.Ou(e), [ 3 /*break*/ , 6 ]);

                  case 4:
                    return r = n.sent(), [ 4 /*yield*/ , this.Du(r) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 3 /*break*/ , 1 ];

                  case 7:
                    return this.ku() && this.qu(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */
    t.prototype.Lu = function() {
        return this.au() && this.su.length < 10;
    }, 
    // For testing
    t.prototype.Mu = function() {
        return this.su.length;
    }, 
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */
    t.prototype.Ou = function(t) {
        this.su.push(t), this.wu.aa() && this.wu.ba && this.wu.va(t.mutations);
    }, t.prototype.ku = function() {
        return this.au() && !this.wu.oa() && this.su.length > 0;
    }, t.prototype.qu = function() {
        this.wu.start();
    }, t.prototype.Tu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this.wu.Da(), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Iu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e, r;
            return __generator(this, (function(n) {
                // Send the write pipeline now that the stream is established.
                for (t = 0, e = this.su; t < e.length; t++) r = e[t], this.wu.va(r.mutations);
                return [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Sa = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = this.su.shift(), i = qe.from(e, t, r), [ 4 /*yield*/ , this.Nu((function() {
                        return o.Su.xu(i);
                    })) ];

                  case 1:
                    // It's possible that with the completion of this mutation another
                    // slot has freed up.
                    return n.sent(), [ 4 /*yield*/ , this.Pu() ];

                  case 2:
                    // It's possible that with the completion of this mutation another
                    // slot has freed up.
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Eu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t && this.wu.ba ? [ 4 /*yield*/ , this.Bu(t) ] : [ 3 /*break*/ , 2 ];

                    // This error affects the actual write.
                                      case 1:
                    // This error affects the actual write.
                    e.sent(), e.label = 2;

                  case 2:
                    // If the write stream closed after the write handshake completes, a write
                    // operation failed and we fail the pending operation.
                    // The write stream might have been started by refilling the write
                    // pipeline for failed writes
                    return this.ku() && this.qu(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Bu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return jt(r = t.code) && r !== E$1.ABORTED ? (e = this.su.shift(), 
                    // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    this.wu.ca(), [ 4 /*yield*/ , this.Nu((function() {
                        return i.Su.Uu(e.batchId, t);
                    })) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    return n.sent(), [ 4 /*yield*/ , this.Pu() ];

                  case 2:
                    // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    n.sent(), n.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Qu = function() {
        return new tr(this.ka);
    }, t.prototype.uu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.Vu() ];

                  case 1:
                    return t.sent(), this.cu.set("Unknown" /* Unknown */), [ 4 /*yield*/ , this.enableNetwork() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Wu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.au() ? (
                    // Tear down and re-create our network streams. This will ensure we get a fresh auth token
                    // for the new user and re-fill the write pipeline with new mutations from the LocalStore
                    // (since mutations are per-user).
                    Ne("RemoteStore", "RemoteStore restarting streams for new credential"), [ 4 /*yield*/ , this.uu() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    t.prototype.ju = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.isPrimary = t, t && this.networkEnabled ? [ 4 /*yield*/ , this.enableNetwork() ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 2:
                    return (e = t) ? [ 3 /*break*/ , 4 ] : [ 4 /*yield*/ , this.Vu() ];

                  case 3:
                    n.sent(), e = this.cu.set("Unknown" /* Unknown */), n.label = 4;

                  case 4:
                    n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), rr = /** @class */ function() {
    function t() {
        this.activeTargetIds = re();
    }
    return t.prototype.Gu = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.Hu = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.Ku = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.W(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), ir = /** @class */ function() {
    function t() {
        this.zu = new rr, this.Yu = {}, this.Su = null, this.Ga = null, this.Xn = null;
    }
    return t.prototype.Xu = function(t) {
        // No op.
    }, t.prototype.Ju = function(t, e, n) {
        // No op.
    }, t.prototype.Zu = function(t) {
        return this.zu.Gu(t), this.Yu[t] || "not-current";
    }, t.prototype.tc = function(t, e, n) {
        this.Yu[t] = e;
    }, t.prototype.ec = function(t) {
        this.zu.Hu(t);
    }, t.prototype.sc = function(t) {
        return this.zu.activeTargetIds.has(t);
    }, t.prototype.ic = function(t) {
        delete this.Yu[t];
    }, t.prototype.nc = function() {
        return this.zu.activeTargetIds;
    }, t.prototype.rc = function(t) {
        return this.zu.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.zu = new rr, Promise.resolve();
    }, t.prototype.Ah = function(t, e, n) {
        // No op.
    }, t.prototype.hc = function(t) {
        // No op.
    }, t.prototype.yu = function() {}, t.prototype.tr = function(t) {}, t;
}(), or = function(t) {
    this.key = t;
}, sr = function(t) {
    this.key = t;
}, ur = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.oc = e, this.ac = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.ds = !1, 
        /** Documents in the view but not in the remote target */
        this.uc = ee(), 
        /** Document Keys that have local changes */
        this.ns = ee(), this.cc = new ie(t.se.bind(t));
    }
    return Object.defineProperty(t.prototype, "lc", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.oc;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype._c = function(t, e) {
        var n = this, r = e ? e.fc : new oe, i = e ? e.cc : this.cc, o = e ? e.ns : this.ns, s = i, u = !1, a = this.query.oe() && i.size === this.query.limit ? i.last() : null, h = this.query.ae() && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.ye((function(t, e) {
            var c = i.get(t), f = e instanceof _t ? e : null;
            f && (f = n.query.matches(f) ? f : null);
            var l = !!c && n.ns.has(c.key), p = !!f && (f.At || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.ns.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            c && f ? c.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.dc(c, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.query.se(f, a) > 0 || h && n.query.se(f, h) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            u = !0)) : !c && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : c && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: c
            }), d = !0, (a || h) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), this.query.oe() || this.query.ae()) for (;s.size > this.query.limit; ) {
            var c = this.query.oe() ? s.last() : s.first();
            s = s.delete(c.key), o = o.delete(c.key), r.track({
                type: 1 /* Removed */ ,
                doc: c
            });
        }
        return {
            cc: s,
            fc: r,
            wc: u,
            ns: o
        };
    }, t.prototype.dc = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.At && e.hasCommittedMutations && !e.At;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.Tc = function(t, e, n) {
        var r = this, i = this.cc;
        this.cc = t.cc, this.ns = t.ns;
        // Sort changes based on type and query comparator
        var o = t.fc.es();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return _e();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.query.se(t.doc, e.doc);
        })), this.Ec(n);
        var s = e ? this.Ic() : [], u = 0 === this.uc.size && this.ds ? 1 /* Synced */ : 0 /* Local */ , a = u !== this.ac;
        return this.ac = u, 0 !== o.length || a ? {
            snapshot: new se(this.query, t.cc, i, o, t.ns, 0 /* Local */ === u, a, 
            /* excludesMetadataChanges= */ !1),
            mc: s
        } : {
            mc: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Rc = function(t) {
        return this.ds && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.ds = !1, this.Tc({
            cc: this.cc,
            fc: new oe,
            ns: this.ns,
            wc: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            mc: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.Ac = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.oc.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.cc.has(t) && !this.cc.get(t).At;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.Ec = function(t) {
        var e = this;
        t && (t.ws.forEach((function(t) {
            return e.oc = e.oc.add(t);
        })), t.Ts.forEach((function(t) {})), t.Es.forEach((function(t) {
            return e.oc = e.oc.delete(t);
        })), this.ds = t.ds);
    }, t.prototype.Ic = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.ds) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.uc;
        this.uc = ee(), this.cc.forEach((function(e) {
            t.Ac(e.key) && (t.uc = t.uc.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.uc.has(e) || n.push(new sr(e));
        })), this.uc.forEach((function(t) {
            e.has(t) || n.push(new or(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Pc = function(t) {
        this.oc = t.co, this.uc = ee();
        var e = this._c(t.documents);
        return this.Tc(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Vc = function() {
        return se.os(this.query, this.cc, this.ns, 0 /* Local */ === this.ac);
    }, t;
}(), ar = /** @class */ function() {
    function t(t, e, n, r) {
        this.Pr = t, this.ka = e, this.updateFunction = n, this.yr = r, this.pc = 5, this.kr = new Be(this.Pr, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.yc = function() {
        this.gc();
    }, t.prototype.gc = function() {
        var t = this;
        this.kr.lr((function() {
            return __awaiter(t, void 0, void 0, (function() {
                var t, e, r = this;
                return __generator(this, (function(n) {
                    return t = new tr(this.ka), (e = this.bc(t)) && e.then((function(e) {
                        r.Pr.Sr((function() {
                            return t.commit().then((function() {
                                r.yr.resolve(e);
                            })).catch((function(t) {
                                r.vc(t);
                            }));
                        }));
                    })).catch((function(t) {
                        r.vc(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.bc = function(t) {
        try {
            var e = this.updateFunction(t);
            return !F$1(e) && e.catch && e.then ? e : (this.yr.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.yr.reject(t), null;
        }
    }, t.prototype.vc = function(t) {
        var e = this;
        this.pc > 0 && this.Sc(t) ? (this.pc -= 1, this.Pr.Sr((function() {
            return e.gc(), Promise.resolve();
        }))) : this.yr.reject(t);
    }, t.prototype.Sc = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !jt(e);
        }
        return !1;
    }, t;
}(), hr = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, cr = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.Cc = !1;
}, fr = /** @class */ function() {
    function t(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o) {
        this.eu = t, this.Dc = e, this.ka = n, this.Fc = r, this.currentUser = i, this.Nc = o, 
        this.$c = null, this.Lc = new Oe((function(t) {
            return t.canonicalId();
        })), this.Oc = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.kc = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.qc = new Gt(O$1.N), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.Mc = new Map, this.xc = new Ze, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.Bc = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Uc = new Map, this.Qc = Qe.Ar(), this.onlineState = "Unknown" /* Unknown */;
    }
    return Object.defineProperty(t.prototype, "Wc", {
        get: function() {
            return !0;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Subscribes to SyncEngine notifications. Has to be called exactly once. */ t.prototype.subscribe = function(t) {
        this.$c = t;
    }, 
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the initial snapshot.
     */
    t.prototype.listen = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o, s;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.jc("listen()"), (i = this.Lc.get(t)) ? (
                    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                    // already exists when EventManager calls us for the first time. This
                    // happens when the primary tab is already listening to this query on
                    // behalf of another tab and the user of the primary also starts listening
                    // to the query. EventManager will not have an assigned target ID in this
                    // case and calls `listen` to obtain this ID.
                    e = i.targetId, this.Fc.Zu(e), r = i.view.Vc(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , this.eu.io(t.ee()) ];

                  case 2:
                    return o = n.sent(), s = this.Fc.Zu(o.targetId), e = o.targetId, [ 4 /*yield*/ , this.Gc(t, e, "current" === s) ];

                  case 3:
                    r = n.sent(), this.Wc && this.Dc.listen(o), n.label = 4;

                  case 4:
                    return [ 2 /*return*/ , r ];
                }
            }));
        }));
    }, 
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */
    t.prototype.Gc = function(t, r, i) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, o, s, u, a, h;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.eu.ao(t, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return e = n.sent(), o = new ur(t, e.co), s = o._c(e.documents), u = ae.fs(r, i && "Offline" /* Offline */ !== this.onlineState), 
                    a = o.Tc(s, 
                    /* updateLimboDocuments= */ this.Wc, u), this.Hc(r, a.mc), h = new hr(t, r, o), 
                    [ 2 /*return*/ , (this.Lc.set(t, h), this.Oc.has(r) ? this.Oc.get(r).push(t) : this.Oc.set(r, [ t ]), 
                    a.snapshot) ];
                }
            }));
        }));
    }, 
    /** Stops listening to the query. */ t.prototype.bu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // Only clean up the query view and target if this is the only query mapped
                    // to the target.
                    return this.jc("unlisten()"), e = this.Lc.get(t), (r = this.Oc.get(e.targetId)).length > 1 ? [ 2 /*return*/ , (this.Oc.set(e.targetId, r.filter((function(e) {
                        return !e.isEqual(t);
                    }))), void this.Lc.delete(t)) ] : this.Wc ? (
                    // We need to remove the local query target first to allow us to verify
                    // whether any other client is still interested in this target.
                    this.Fc.ec(e.targetId), this.Fc.rc(e.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , this.eu.oo(e.targetId, /*keepPersistedTargetData=*/ !1).then((function() {
                        i.Fc.ic(e.targetId), i.Dc.bu(e.targetId), i.Kc(e.targetId);
                    })).catch(Je) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 5 ];

                  case 3:
                    return this.Kc(e.targetId), [ 4 /*yield*/ , this.eu.oo(e.targetId, 
                    /*keepPersistedTargetData=*/ !0) ];

                  case 4:
                    n.sent(), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */
    t.prototype.write = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.jc("write()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , this.eu.gh(t) ];

                  case 2:
                    return e = n.sent(), this.Fc.Xu(e.batchId), this.zc(e.batchId, r), [ 4 /*yield*/ , this.Yc(e.vh) ];

                  case 3:
                    return n.sent(), [ 4 /*yield*/ , this.Dc.Pu() ];

                  case 4:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 5:
                    return i = n.sent(), o = Ke(i, "Failed to persist write"), r.reject(o), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     *
     * The Deferred input is resolved when the transaction is fully committed.
     */
    t.prototype.runTransaction = function(t, e, n) {
        new ar(t, this.ka, e, n).yc();
    }, t.prototype.Mh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.jc("applyRemoteEvent()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.eu.Mh(t) ];

                  case 2:
                    return e = n.sent(), 
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    t.as.forEach((function(t, e) {
                        var n = r.Mc.get(e);
                        n && (
                        // Since this is a limbo resolution lookup, it's for a single document
                        // and it could be added, modified, or removed, but not a combination.
                        De(t.ws.size + t.Ts.size + t.Es.size <= 1), t.ws.size > 0 ? n.Cc = !0 : t.Ts.size > 0 ? De(n.Cc) : t.Es.size > 0 && (De(n.Cc), 
                        n.Cc = !1));
                    })), [ 4 /*yield*/ , this.Yc(e, t) ];

                  case 3:
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Je(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */
    t.prototype.Rc = function(t, e) {
        this.jc("applyOnlineStateChange()");
        var n = [];
        this.Lc.forEach((function(e, r) {
            var i = r.view.Rc(t);
            i.snapshot && n.push(i.snapshot);
        })), this.$c.Xc(t), this.$c.Va(n), this.onlineState = t;
    }, t.prototype.$u = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o, s, u, a = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.jc("rejectListens()"), 
                    // PORTING NOTE: Multi-tab only.
                    this.Fc.tc(t, "rejected", r), e = this.Mc.get(t), (i = e && e.key) ? (o = (o = new Gt(O$1.N)).Re(i, new Dt(i, V$1.min())), 
                    s = ee().add(i), u = new ue(V$1.min(), 
                    /* targetChanges= */ new Map, 
                    /* targetMismatches= */ new Wt(ke), o, s), [ 4 /*yield*/ , this.Mh(u) ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    return n.sent(), 
                    // Since this query failed, we won't want to manually unlisten to it.
                    // We only remove it from bookkeeping after we successfully applied the
                    // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                    // this query when the RemoteStore restarts the Watch stream, which should
                    // re-trigger the target failure.
                    this.qc = this.qc.remove(i), this.Mc.delete(t), this.Jc(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return [ 4 /*yield*/ , this.eu.oo(t, /* keepPersistedTargetData */ !1).then((function() {
                        return a.Kc(t, r);
                    })).catch(Je) ];

                  case 3:
                    n.sent(), n.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.xu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.jc("applySuccessfulWrite()"), e = t.batch.batchId, n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.eu.Sh(t) ];

                  case 2:
                    return r = n.sent(), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    this.Zc(e, /*error=*/ null), this.tl(e), this.Fc.Ju(e, "acknowledged"), [ 4 /*yield*/ , this.Yc(r) ];

                  case 3:
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Je(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Uu = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.jc("rejectFailedWrite()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.eu.$h(t) ];

                  case 2:
                    return e = n.sent(), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    this.Zc(t, r), this.tl(t), this.Fc.Ju(t, "rejected", r), [ 4 /*yield*/ , this.Yc(e) ];

                  case 3:
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , Je(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Registers a user callback that resolves when all pending mutations at the moment of calling
     * are acknowledged .
     */
    t.prototype.el = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.Dc.au() || Ne("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.eu.kh() ];

                  case 2:
                    return -1 === (e = n.sent()) ? [ 2 /*return*/ , void t.resolve() ] : ((r = this.Uc.get(e) || []).push(t), 
                    this.Uc.set(e, r), [ 3 /*break*/ , 4 ]);

                  case 3:
                    return i = n.sent(), o = Ke(i, "Initialization of waitForPendingWrites() operation failed"), 
                    t.reject(o), [ 3 /*break*/ , 4 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */
    t.prototype.tl = function(t) {
        (this.Uc.get(t) || []).forEach((function(t) {
            t.resolve();
        })), this.Uc.delete(t);
    }, 
    /** Reject all outstanding callbacks waiting for pending writes to complete. */ t.prototype.sl = function(t) {
        this.Uc.forEach((function(e) {
            e.forEach((function(e) {
                e.reject(new I$1(E$1.CANCELLED, t));
            }));
        })), this.Uc.clear();
    }, t.prototype.zc = function(t, e) {
        var n = this.Bc[this.currentUser.s()];
        n || (n = new Gt(ke)), n = n.Re(t, e), this.Bc[this.currentUser.s()] = n;
    }, 
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    t.prototype.Zc = function(t, e) {
        var n = this.Bc[this.currentUser.s()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
                if (n) {
            var r = n.get(t);
            r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.Bc[this.currentUser.s()] = n;
        }
    }, t.prototype.Kc = function(t, e) {
        var n = this;
        void 0 === e && (e = null), this.Fc.ec(t);
        for (var r = 0, i = this.Oc.get(t); r < i.length; r++) {
            var o = i[r];
            this.Lc.delete(o), e && this.$c.il(o, e);
        }
        this.Oc.delete(t), this.Wc && this.xc.Ro(t).forEach((function(t) {
            n.xc.Vo(t) || 
            // We removed the last reference for this key
            n.nl(t);
        }));
    }, t.prototype.nl = function(t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var e = this.qc.get(t);
        null !== e && (this.Dc.bu(e), this.qc = this.qc.remove(t), this.Mc.delete(e), this.Jc());
    }, t.prototype.Hc = function(t, e) {
        for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i instanceof or ? (this.xc.Jh(i.key, t), this.rl(i)) : i instanceof sr ? (Ne("SyncEngine", "Document no longer in limbo: " + i.key), 
            this.xc.Zh(i.key, t), this.xc.Vo(i.key) || 
            // We removed the last reference for this key
            this.nl(i.key)) : _e();
        }
    }, t.prototype.rl = function(t) {
        var e = t.key;
        this.qc.get(e) || (Ne("SyncEngine", "New document in limbo: " + e), this.kc.push(e), 
        this.Jc());
    }, 
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */
    t.prototype.Jc = function() {
        for (;this.kc.length > 0 && this.qc.size < this.Nc; ) {
            var t = this.kc.shift(), e = this.Qc.next();
            this.Mc.set(e, new cr(t)), this.qc = this.qc.Re(t, e), this.Dc.listen(new Ft(kt.Wt(t.path).ee(), e, 2 /* LimboResolution */ , xe.er));
        }
    }, 
    // Visible for testing
    t.prototype.hl = function() {
        return this.qc;
    }, 
    // Visible for testing
    t.prototype.ol = function() {
        return this.kc;
    }, t.prototype.Yc = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o, s = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = [], i = [], o = [], this.Lc.forEach((function(n, u) {
                        o.push(Promise.resolve().then((function() {
                            var e = u.view._c(t);
                            return e.wc ? s.eu.ao(u.query, /* usePreviousResults= */ !1).then((function(t) {
                                var n = t.documents;
                                return u.view._c(n, e);
                            })) : e;
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                                                })).then((function(t) {
                            var n = r && r.as.get(u.targetId), o = u.view.Tc(t, 
                            /* updateLimboDocuments= */ s.Wc, n);
                            if (s.Hc(u.targetId, o.mc), o.snapshot) {
                                s.Wc && s.Fc.tc(u.targetId, o.snapshot.fromCache ? "not-current" : "current"), e.push(o.snapshot);
                                var a = Fe.Yn(u.targetId, o.snapshot);
                                i.push(a);
                            }
                        })));
                    })), [ 4 /*yield*/ , Promise.all(o) ];

                  case 1:
                    return n.sent(), this.$c.Va(e), [ 4 /*yield*/ , this.eu.Xh(i) ];

                  case 2:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.jc = function(t) {}, t.prototype.Wu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.currentUser.isEqual(t) ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , this.eu.Ah(t) ];

                  case 1:
                    return e = n.sent(), this.currentUser = t, 
                    // Fails tasks waiting for pending writes requested by previous user.
                    this.sl("'waitForPendingWrites' promise is rejected due to a user change."), 
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    this.Fc.Ah(t, e.ph, e.yh), [ 4 /*yield*/ , this.Yc(e.Vh) ];

                  case 2:
                    n.sent(), n.label = 3;

                  case 3:
                    return [ 4 /*yield*/ , this.Dc.Wu() ];

                  case 4:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.enableNetwork = function() {
        return this.Dc.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.Dc.disableNetwork();
    }, t.prototype.ei = function(t) {
        var e = this.Mc.get(t);
        if (e && e.Cc) return ee().add(e.key);
        var n = ee(), r = this.Oc.get(t);
        if (!r) return n;
        for (var i = 0, o = r; i < o.length; i++) {
            var s = o[i], u = this.Lc.get(s);
            n = n.ze(u.view.lc);
        }
        return n;
    }, t;
}(), lr = function() {
    this.al = void 0, this.ul = [];
}, pr = /** @class */ function() {
    function t(t) {
        this.Su = t, this.cl = new Oe((function(t) {
            return t.canonicalId();
        })), this.onlineState = "Unknown" /* Unknown */ , this.ll = new Set, this.Su.subscribe(this);
    }
    return t.prototype.listen = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o, s, u;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (e = t.query, r = !1, (i = this.cl.get(e)) || (r = !0, i = new lr), !r) return [ 3 /*break*/ , 4 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), o = i, [ 4 /*yield*/ , this.Su.listen(e) ];

                  case 2:
                    return o.al = n.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    return s = n.sent(), u = Ke(s, "Initialization of query '" + t.query + "' failed"), 
                    [ 2 /*return*/ , void t.onError(u) ];

                  case 4:
                    return this.cl.set(e, i), i.ul.push(t), 
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    t.Rc(this.onlineState), i.al && t._l(i.al) && this.fl(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.bu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o;
            return __generator(this, (function(n) {
                return e = t.query, r = !1, (i = this.cl.get(e)) && (o = i.ul.indexOf(t)) >= 0 && (i.ul.splice(o, 1), 
                r = 0 === i.ul.length), r ? [ 2 /*return*/ , (this.cl.delete(e), this.Su.bu(e)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Va = function(t) {
        for (var e = !1, n = 0, r = t; n < r.length; n++) {
            var i = r[n], o = i.query, s = this.cl.get(o);
            if (s) {
                for (var u = 0, a = s.ul; u < a.length; u++) {
                    a[u]._l(i) && (e = !0);
                }
                s.al = i;
            }
        }
        e && this.fl();
    }, t.prototype.il = function(t, e) {
        var n = this.cl.get(t);
        if (n) for (var r = 0, i = n.ul; r < i.length; r++) {
            i[r].onError(e);
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
                this.cl.delete(t);
    }, t.prototype.Xc = function(t) {
        this.onlineState = t;
        var e = !1;
        this.cl.forEach((function(n, r) {
            for (var i = 0, o = r.ul; i < o.length; i++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                o[i].Rc(t) && (e = !0);
            }
        })), e && this.fl();
    }, t.prototype.dl = function(t) {
        this.ll.add(t), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
    }, t.prototype.wl = function(t) {
        this.ll.delete(t);
    }, 
    // Call all global snapshot listeners that have been set.
    t.prototype.fl = function() {
        this.ll.forEach((function(t) {
            t.next();
        }));
    }, t;
}(), dr = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.Tl = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.El = !1, this.Il = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype._l = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new se(t.query, t.docs, t.ss, e, t.ns, t.fromCache, t.rs, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.El ? this.ml(t) && (this.Tl.next(t), o = !0) : this.Rl(t, this.onlineState) && (this.Al(t), 
        o = !0), this.Il = t, o;
    }, t.prototype.onError = function(t) {
        this.Tl.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.Rc = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.Il && !this.El && this.Rl(this.Il, t) && (this.Al(this.Il), e = !0), 
        e;
    }, t.prototype.Rl = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.Pl && n || t.docs.M() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.ml = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.Il && this.Il.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.rs && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.Al = function(t) {
        t = se.os(t.query, t.docs, t.ns, t.fromCache), this.El = !0, this.Tl.next(t);
    }, t;
}(), yr = /** @class */ function() {
    function t() {}
    return t.prototype.Rh = function(t) {
        this.Vl = t;
    }, t.prototype.Bn = function(t, e, n, r) {
        var i = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return e.te() || n.isEqual(V$1.min()) ? this.pl(t, e) : this.Vl.qn(t, r).next((function(o) {
            var u = i.yl(e, o);
            return (e.oe() || e.ae()) && i.wc(e.xt, u, r, n) ? i.pl(t, e) : (Ie() <= LogLevel.DEBUG && Ne("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), e.toString()), 
            i.Vl.Bn(t, e, n).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return u.forEach((function(e) {
                    t = t.Re(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.yl = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new Wt((function(e, n) {
            return t.se(e, n);
        }));
        return e.forEach((function(e, r) {
            r instanceof _t && t.matches(r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype.wc = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.S(r) > 0);
    }, t.prototype.pl = function(t, e) {
        return Ie() <= LogLevel.DEBUG && Ne("IndexFreeQueryEngine", "Using full collection scan to execute query:", e.toString()), 
        this.Vl.Bn(t, e, V$1.min());
    }, t;
}(), vr = /** @class */ function() {
    function t(t, e) {
        this.Fn = t, this.Kh = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.Dn = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.gl = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.bl = new Wt(tn.do);
    }
    return t.prototype.vl = function(t) {
        return Me.resolve(0 === this.Dn.length);
    }, t.prototype.bh = function(t, e, n, r) {
        var i = this.gl;
        this.gl++, this.Dn.length > 0 && this.Dn[this.Dn.length - 1];
        var o = new Le(i, e, n, r);
        this.Dn.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.bl = this.bl.add(new tn(a.key, i)), this.Fn.Ir(t, a.key.path.O());
        }
        return Me.resolve(o);
    }, t.prototype.Lh = function(t, e) {
        return Me.resolve(this.Sl(e));
    }, t.prototype.eo = function(t, e) {
        var n = e + 1, r = this.Cl(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Me.resolve(this.Dn.length > i ? this.Dn[i] : null);
    }, t.prototype.kh = function() {
        return Me.resolve(0 === this.Dn.length ? -1 : this.gl - 1);
    }, t.prototype.Ph = function(t) {
        return Me.resolve(this.Dn.slice());
    }, t.prototype.$n = function(t, e) {
        var n = this, r = new tn(e, 0), i = new tn(e, Number.POSITIVE_INFINITY), o = [];
        return this.bl.Ge([ r, i ], (function(t) {
            var e = n.Sl(t.po);
            o.push(e);
        })), Me.resolve(o);
    }, t.prototype.xn = function(t, e) {
        var n = this, r = new Wt(ke);
        return e.forEach((function(t) {
            var e = new tn(t, 0), i = new tn(t, Number.POSITIVE_INFINITY);
            n.bl.Ge([ e, i ], (function(t) {
                r = r.add(t.po);
            }));
        })), Me.resolve(this.Dl(r));
    }, t.prototype.Gn = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                O$1.et(i) || (i = i.child(""));
        var o = new tn(new O$1(i), 0), s = new Wt(ke);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.bl.He((function(t) {
            var e = t.key.path;
            return !!n.B(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.po)), !0);
        }), o), Me.resolve(this.Dl(s));
    }, t.prototype.Dl = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.Sl(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.Oh = function(t, e) {
        var n = this;
        De(0 === this.Fl(e.batchId, "removed")), this.Dn.shift();
        var r = this.bl;
        return Me.forEach(e.mutations, (function(i) {
            var o = new tn(i.key, e.batchId);
            return r = r.delete(o), n.Kh.Nl(t, i.key);
        })).next((function() {
            n.bl = r;
        }));
    }, t.prototype.$l = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.Vo = function(t, e) {
        var n = new tn(e, 0), r = this.bl.Ke(n);
        return Me.resolve(e.isEqual(r && r.key));
    }, t.prototype.Nh = function(t) {
        return this.Dn.length, Me.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.Fl = function(t, e) {
        return this.Cl(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.Cl = function(t) {
        return 0 === this.Dn.length ? 0 : t - this.Dn[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.Sl = function(t) {
        var e = this.Cl(t);
        return e < 0 || e >= this.Dn.length ? null : this.Dn[e];
    }, t;
}(), mr = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, e) {
        this.Fn = t, this.Ll = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new Gt(O$1.N), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.Gh = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.Ll(e);
        return this.docs = this.docs.Re(r, {
            Ol: e,
            size: s,
            readTime: n
        }), this.size += s - o, this.Fn.Ir(t, r.path.O());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.jh = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.On = function(t, e) {
        var n = this.docs.get(e);
        return Me.resolve(n ? n.Ol : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = Xt();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.Re(t, e ? e.Ol : null);
        })), Me.resolve(r);
    }, t.prototype.Bn = function(t, e, n) {
        for (var r = Jt(), i = new O$1(e.path.child("")), o = this.docs.ve(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.$e(); ) {
            var s = o.Ne(), u = s.key, a = s.value, h = a.Ol, c = a.readTime;
            if (!e.path.B(u.path)) break;
            c.S(n) <= 0 || h instanceof _t && e.matches(h) && (r = r.Re(h.key, h));
        }
        return Me.resolve(r);
    }, t.prototype.kl = function(t, e) {
        return Me.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.Ch = function(e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.ql(this);
    }, t.prototype.Ml = function(t) {
        return Me.resolve(this.size);
    }, t;
}();

/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
mr.ql = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).jl = t, n;
    }
    return __extends(n, e), n.prototype.Tc = function(t) {
        var e = this, n = [];
        return this.vh.forEach((function(r, i) {
            i ? n.push(e.jl.Gh(t, i, e.readTime)) : e.jl.jh(r);
        })), Me.vn(n);
    }, n.prototype.Ql = function(t, e) {
        return this.jl.On(t, e);
    }, n.prototype.Wl = function(t, e) {
        return this.jl.getEntries(t, e);
    }, n;
}(/** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.vh = new Oe((function(t) {
            return t.toString();
        })), this.xl = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return this.Bl;
        },
        set: function(t) {
            this.Bl = t;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Gh = function(t, e) {
        this.Ul(), this.readTime = e, this.vh.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.jh = function(t, e) {
        this.Ul(), e && (this.readTime = e), this.vh.set(t, null);
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.On = function(t, e) {
        this.Ul();
        var n = this.vh.get(e);
        return void 0 !== n ? Me.resolve(n) : this.Ql(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.Wl(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.Ul(), this.xl = !0, this.Tc(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.Ul = function() {}, 
    t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gr = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.Gl = new Oe((function(t) {
            return t.canonicalId();
        })), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = V$1.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.Hl = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.Kl = new Ze, this.targetCount = 0, this.zl = Qe.Rr();
    }
    return t.prototype.js = function(t, e) {
        return this.Gl.forEach((function(t, n) {
            return e(n);
        })), Me.resolve();
    }, t.prototype.qh = function(t) {
        return Me.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.Yl = function(t) {
        return Me.resolve(this.Hl);
    }, t.prototype.ro = function(t) {
        return this.highestTargetId = this.zl.next(), Me.resolve(this.highestTargetId);
    }, t.prototype.zh = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.Hl && (this.Hl = e), 
        Me.resolve();
    }, t.prototype.Xl = function(t) {
        this.Gl.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.zl = new Qe(e), this.highestTargetId = e), t.sequenceNumber > this.Hl && (this.Hl = t.sequenceNumber);
    }, t.prototype.ho = function(t, e) {
        return this.Xl(e), this.targetCount += 1, Me.resolve();
    }, t.prototype.Wh = function(t, e) {
        return this.Xl(e), Me.resolve();
    }, t.prototype.Jl = function(t, e) {
        return this.Gl.delete(e.target), this.Kl.Ro(e.targetId), this.targetCount -= 1, 
        Me.resolve();
    }, t.prototype.Zl = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.Gl.forEach((function(s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.Gl.delete(s), o.push(r.t_(t, u.targetId)), 
            i++);
        })), Me.vn(o).next((function() {
            return i;
        }));
    }, t.prototype.e_ = function(t) {
        return Me.resolve(this.targetCount);
    }, t.prototype.no = function(t, e) {
        var n = this.Gl.get(e) || null;
        return Me.resolve(n);
    }, t.prototype.Bh = function(t, e, n) {
        return this.Kl.Eo(e, n), Me.resolve();
    }, t.prototype.xh = function(t, e, n) {
        this.Kl.mo(e, n);
        var r = this.persistence.Kh, i = [];
        return r && e.forEach((function(e) {
            i.push(r.Nl(t, e));
        })), Me.vn(i);
    }, t.prototype.t_ = function(t, e) {
        return this.Kl.Ro(e), Me.resolve();
    }, t.prototype.uo = function(t, e) {
        var n = this.Kl.Po(e);
        return Me.resolve(n);
    }, t.prototype.Vo = function(t, e) {
        return Me.resolve(this.Kl.Vo(e));
    }, t;
}(), wr = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t) {
        var e = this;
        this.s_ = {}, this.i_ = new xe(0), this.n_ = !1, this.n_ = !0, this.Kh = t(this), 
        this.Th = new gr(this), this.Fn = new Ge, this.Cn = new mr(this.Fn, (function(t) {
            return e.Kh.r_(t);
        }));
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.yu = function() {
        // No durable state to ensure is closed on shutdown.
        return this.n_ = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "h_", {
        get: function() {
            return this.n_;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.o_ = function() {
        // No op.
    }, t.prototype.mh = function() {
        return this.Fn;
    }, t.prototype.fh = function(t) {
        var e = this.s_[t.s()];
        return e || (e = new vr(this.Fn, this.Kh), this.s_[t.s()] = e), e;
    }, t.prototype.Eh = function() {
        return this.Th;
    }, t.prototype.wh = function() {
        return this.Cn;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        Ne("MemoryPersistence", "Starting transaction:", t);
        var i = new br(this.i_.next());
        return this.Kh.a_(), n(i).next((function(t) {
            return r.Kh.u_(i).next((function() {
                return t;
            }));
        })).gn().then((function(t) {
            return i.c_(), t;
        }));
    }, t.prototype.l_ = function(t, e) {
        return Me.Sn(Object.values(this.s_).map((function(n) {
            return function() {
                return n.Vo(t, e);
            };
        })));
    }, t;
}(), br = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Uh = t, n;
    }
    /**
     * A base class representing a persistence transaction, encapsulating both the
     * transaction's sequence numbers as well as a list of onCommitted listeners.
     *
     * When you call Persistence.runTransaction(), it will create a transaction and
     * pass it to your callback. You then pass it to any method that operates
     * on persistence.
     */
    return __extends(n, e), n;
}(/** @class */ function() {
    function t() {
        this.__ = [];
    }
    return t.prototype.f_ = function(t) {
        this.__.push(t);
    }, t.prototype.c_ = function() {
        this.__.forEach((function(t) {
            return t();
        }));
    }, t;
}()), Er = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.d_ = new Ze, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.w_ = null;
    }
    return t.T_ = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "E_", {
        get: function() {
            if (this.w_) return this.w_;
            throw _e();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Jh = function(t, e, n) {
        return this.d_.Jh(n, e), this.E_.delete(n), Me.resolve();
    }, t.prototype.Zh = function(t, e, n) {
        return this.d_.Zh(n, e), this.E_.add(n), Me.resolve();
    }, t.prototype.Nl = function(t, e) {
        return this.E_.add(e), Me.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.d_.Ro(e.targetId).forEach((function(t) {
            return n.E_.add(t);
        }));
        var r = this.persistence.Eh();
        return r.uo(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.E_.add(t);
            }));
        })).next((function() {
            return r.Jl(t, e);
        }));
    }, t.prototype.a_ = function() {
        this.w_ = new Set;
    }, t.prototype.u_ = function(t) {
        var e = this, n = this.persistence.wh().Ch();
        // Remove newly orphaned documents.
                return Me.forEach(this.E_, (function(r) {
            return e.I_(t, r).next((function(t) {
                t || n.jh(r);
            }));
        })).next((function() {
            return e.w_ = null, n.apply(t);
        }));
    }, t.prototype.Hh = function(t, e) {
        var n = this;
        return this.I_(t, e).next((function(t) {
            t ? n.E_.delete(e) : n.E_.add(e);
        }));
    }, t.prototype.r_ = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.I_ = function(t, e) {
        var n = this;
        return Me.Sn([ function() {
            return Me.resolve(n.d_.Vo(e));
        }, function() {
            return n.persistence.Eh().Vo(t, e);
        }, function() {
            return n.persistence.l_(t, e);
        } ]);
    }, t;
}(), Ir = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.", Nr = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Fc = this.m_(t), this.persistence = this.R_(t), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return n.sent(), this.A_ = this.P_(t), this.eu = this.V_(t), this.Dc = this.p_(t), 
                    this.Su = this.y_(t), this.g_ = this.b_(t), this.Fc.Ga = function(t) {
                        return e.Su.Rc(t, 1 /* SharedClientState */);
                    }, this.Dc.Su = this.Su, [ 4 /*yield*/ , this.eu.start() ];

                  case 2:
                    return n.sent(), [ 4 /*yield*/ , this.Fc.start() ];

                  case 3:
                    return n.sent(), [ 4 /*yield*/ , this.Dc.start() ];

                  case 4:
                    return n.sent(), [ 4 /*yield*/ , this.Dc.ju(this.Su.Wc) ];

                  case 5:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.b_ = function(t) {
        return new pr(this.Su);
    }, t.prototype.P_ = function(t) {
        return null;
    }, t.prototype.V_ = function(t) {
        return new $e(this.persistence, new yr, t.v_);
    }, t.prototype.R_ = function(t) {
        if (t.C_.S_) throw new I$1(E$1.FAILED_PRECONDITION, Ir);
        return new wr(Er.T_);
    }, t.prototype.p_ = function(t) {
        var e = this;
        return new nr(this.eu, t.ka, t.Pr, (function(t) {
            return e.Su.Rc(t, 0 /* RemoteStore */);
        }), t.platform.D_());
    }, t.prototype.m_ = function(t) {
        return new ir;
    }, t.prototype.y_ = function(t) {
        return new fr(this.eu, this.Dc, t.ka, this.Fc, t.v_, t.Nc);
    }, t.prototype.clearPersistence = function(t) {
        throw new I$1(E$1.FAILED_PRECONDITION, Ir);
    }, t;
}(), Ar = /** @class */ function() {
    function t(t, e, n, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    r) {
        this.platform = t, this.F_ = e, this.credentials = n, this.Pr = r, this.clientId = Ve.cn()
        /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param componentProvider Provider that returns all core components.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */;
    }
    return t.prototype.start = function(t, e) {
        var n = this;
        this.$a();
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        var r = new je, i = new je, o = !1;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
                // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials._((function(s) {
            if (!o) return o = !0, Ne("FirestoreClient", "Initializing. user=", s.uid), n.N_(t, e, s, i).then(r.resolve, r.reject);
            n.Pr.jr((function() {
                return n.Wu(s);
            }));
        })), 
        // Block the async queue until initialization is done
        this.Pr.Sr((function() {
            return r.promise;
        })), i.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */ t.prototype.enableNetwork = function() {
        var t = this;
        return this.$a(), this.Pr.enqueue((function() {
            return t.Su.enableNetwork();
        }));
    }, 
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param componentProvider The provider that provides all core componennts
     *     for IndexedDB or memory-backed persistence
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    t.prototype.N_ = function(t, r, i, o) {
        return __awaiter(this, void 0, void 0, (function() {
            var s, u, a, h, c = this;
            return __generator(this, (function(f) {
                switch (f.label) {
                  case 0:
                    return f.trys.push([ 0, 3, , 4 ]), [ 4 /*yield*/ , this.platform.L_(this.F_) ];

                  case 1:
                    return s = f.sent(), u = this.platform.Yo(this.F_.ii), a = function(t, e, n) {
                        return new Zn(t, e, n);
                    }(s, this.credentials, u), [ 4 /*yield*/ , t.initialize({
                        Pr: this.Pr,
                        F_: this.F_,
                        platform: this.platform,
                        ka: a,
                        clientId: this.clientId,
                        v_: i,
                        Nc: 100,
                        C_: r
                    }) ];

                  case 2:
                    return f.sent(), this.persistence = t.persistence, this.Fc = t.Fc, this.eu = t.eu, 
                    this.Dc = t.Dc, this.Su = t.Su, this.A_ = t.A_, this.O_ = t.g_, 
                    // When a user calls clearPersistence() in one client, all other clients
                    // need to be terminated to allow the delete to succeed.
                    this.persistence.o_((function() {
                        return __awaiter(c, void 0, void 0, (function() {
                            return __generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.terminate() ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), o.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    // An unknown failure on the first stage shuts everything down.
                    if (h = f.sent(), 
                    // Regardless of whether or not the retry succeeds, from an user
                    // perspective, offline persistence has failed.
                    o.reject(h), !this.k_(h)) throw h;
                    return [ 2 /*return*/ , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + h), 
                    this.N_(new Nr, {
                        S_: !1
                    }, i, o)) ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    t.prototype.k_ = function(t) {
        return "FirebaseError" === t.name ? t.code === E$1.FAILED_PRECONDITION || t.code === E$1.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.$a = function() {
        if (this.Pr.Mr) throw new I$1(E$1.FAILED_PRECONDITION, "The client has already been terminated.");
    }, t.prototype.Wu = function(t) {
        return this.Pr.Hr(), Ne("FirestoreClient", "Credential Changed. Current user: " + t.uid), 
        this.Su.Wu(t);
    }, 
    /** Disables the network connection. Pending operations will not complete. */ t.prototype.disableNetwork = function() {
        var t = this;
        return this.$a(), this.Pr.enqueue((function() {
            return t.Su.disableNetwork();
        }));
    }, t.prototype.terminate = function() {
        var t = this;
        return this.Pr.Wr((function() {
            return __awaiter(t, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return this.A_ && this.A_.stop(), [ 4 /*yield*/ , this.Dc.yu() ];

                      case 1:
                        return t.sent(), [ 4 /*yield*/ , this.Fc.yu() ];

                      case 2:
                        return t.sent(), [ 4 /*yield*/ , this.persistence.yu() ];

                      case 3:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return t.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.T(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    t.prototype.waitForPendingWrites = function() {
        var t = this;
        this.$a();
        var e = new je;
        return this.Pr.Sr((function() {
            return t.Su.el(e);
        })), e.promise;
    }, t.prototype.listen = function(t, e, n) {
        var r = this;
        this.$a();
        var i = new dr(t, e, n);
        return this.Pr.Sr((function() {
            return r.O_.listen(i);
        })), i;
    }, t.prototype.bu = function(t) {
        var e = this;
        // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.
                this.q_ || this.Pr.Sr((function() {
            return e.O_.bu(t);
        }));
    }, t.prototype.M_ = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var r, i = this;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return this.$a(), r = new je, [ 4 /*yield*/ , this.Pr.enqueue((function() {
                        return __awaiter(i, void 0, void 0, (function() {
                            var e, i, o;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.eu.so(t) ];

                                  case 1:
                                    return (e = n.sent()) instanceof _t ? r.resolve(e) : e instanceof Dt ? r.resolve(null) : r.reject(new I$1(E$1.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                    [ 3 /*break*/ , 3 ];

                                  case 2:
                                    return i = n.sent(), o = Ke(i, "Failed to get document '" + t + " from cache"), 
                                    r.reject(o), [ 3 /*break*/ , 3 ];

                                  case 3:
                                    return [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 1:
                    return [ 2 /*return*/ , (o.sent(), r.promise) ];
                }
            }));
        }));
    }, t.prototype.x_ = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var r, i = this;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return this.$a(), r = new je, [ 4 /*yield*/ , this.Pr.enqueue((function() {
                        return __awaiter(i, void 0, void 0, (function() {
                            var e, i, o, s, u, a;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.eu.ao(t, 
                                    /* usePreviousResults= */ !0) ];

                                  case 1:
                                    return e = n.sent(), i = new ur(t, e.co), o = i._c(e.documents), s = i.Tc(o, 
                                    /* updateLimboDocuments= */ !1), r.resolve(s.snapshot), [ 3 /*break*/ , 3 ];

                                  case 2:
                                    return u = n.sent(), a = Ke(u, "Failed to execute query '" + t + " against cache"), 
                                    r.reject(a), [ 3 /*break*/ , 3 ];

                                  case 3:
                                    return [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 1:
                    return [ 2 /*return*/ , (o.sent(), r.promise) ];
                }
            }));
        }));
    }, t.prototype.write = function(t) {
        var e = this;
        this.$a();
        var n = new je;
        return this.Pr.Sr((function() {
            return e.Su.write(t, n);
        })), n.promise;
    }, t.prototype.ii = function() {
        return this.F_.ii;
    }, t.prototype.dl = function(t) {
        var e = this;
        this.$a(), this.Pr.Sr((function() {
            return e.O_.dl(t), Promise.resolve();
        }));
    }, t.prototype.wl = function(t) {
        var e = this;
        // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.
                this.q_ || this.Pr.Sr((function() {
            return e.O_.wl(t), Promise.resolve();
        }));
    }, Object.defineProperty(t.prototype, "q_", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.Pr.Mr;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.transaction = function(t) {
        var e = this;
        this.$a();
        var n = new je;
        return this.Pr.Sr((function() {
            return e.Su.runTransaction(e.Pr, t, n), Promise.resolve();
        })), n.promise;
    }, t;
}(), Tr = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.B_(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.B_(this.observer.error, t);
    }, t.prototype.U_ = function() {
        this.muted = !0;
    }, t.prototype.B_ = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _r(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var Dr = /** @class */ function() {
    function t(t, e, n, r) {
        this.ii = t, this.timestampsInSnapshots = e, this.Q_ = n, this.W_ = r;
    }
    return t.prototype.j_ = function(t) {
        switch (z(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return $(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.G_(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.H_(t);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return new Nn(J$1(t.bytesValue));

          case 7 /* RefValue */ :
            return this.K_(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.z_(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.Y_(t.arrayValue);

          case 10 /* ObjectValue */ :
            return this.X_(t.mapValue);

          default:
            throw _e();
        }
    }, t.prototype.X_ = function(t) {
        var e = this, n = {};
        return q$1(t.fields || {}, (function(t, r) {
            n[t] = e.j_(r);
        })), n;
    }, t.prototype.z_ = function(t) {
        return new Ln($(t.latitude), $(t.longitude));
    }, t.prototype.Y_ = function(t) {
        var e = this;
        return (t.values || []).map((function(t) {
            return e.j_(t);
        }));
    }, t.prototype.H_ = function(t) {
        switch (this.Q_) {
          case "previous":
            var e = function t(e) {
                var n = e.mapValue.fields.__previous_value__;
                return j(n) ? t(n) : n;
            }(t);
            return null == e ? null : this.j_(e);

          case "estimate":
            return this.G_(B$1(t));

          default:
            return null;
        }
    }, t.prototype.G_ = function(t) {
        var e = X$1(t), n = new R$1(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
    }, t.prototype.K_ = function(t) {
        var e = S$1.G(t);
        De(we(e));
        var n = new Pe(e.get(1), e.get(3)), r = new O$1(e.L(5));
        return n.isEqual(this.ii) || 
        // TODO(b/64130202): Somehow support foreign references.
        Ae("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.ii.projectId + "/" + this.ii.database + ") instead."), 
        this.W_(r);
    }, t;
}(), Rr = Xe.nh, Vr = /** @class */ function() {
    function t(t) {
        var e, n, r, i;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new I$1(E$1.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else an("settings", "non-empty string", "host", t.host), this.host = t.host, hn("settings", "boolean", "ssl", t.ssl), 
        this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (vn("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties" ]), 
        hn("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        hn("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), hn("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? Ae("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && Ae("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), 
        this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, 
        this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, 
        hn("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = Xe.hh; else {
            if (t.cacheSizeBytes !== Rr && t.cacheSizeBytes < Xe.rh) throw new I$1(E$1.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + Xe.rh);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        hn("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.forceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }, t;
}(), kr = /** @class */ function() {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function t(r, i, o) {
        var s = this;
        if (void 0 === o && (o = new Nr), this.J_ = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.Z_ = new Ye, this.INTERNAL = {
            delete: function() {
                return __awaiter(s, void 0, void 0, (function() {
                    return __generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.tf(), [ 4 /*yield*/ , this.ef.terminate() ];

                          case 1:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof r.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var u = r;
            this.J_ = u, this.xo = t.sf(u), this.if = u.name, this.nf = new T$1(i);
        } else {
            var a = r;
            if (!a.projectId) throw new I$1(E$1.INVALID_ARGUMENT, "Must provide projectId");
            this.xo = new Pe(a.projectId, a.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.if = "[DEFAULT]", this.nf = new A$1;
        }
        this.rf = o, this.hf = new Vr({});
    }
    return Object.defineProperty(t.prototype, "af", {
        get: function() {
            return this.uf || (
            // Lazy initialize UserDataReader once the settings are frozen
            this.uf = new Bn(this.xo, this.hf.ignoreUndefinedProperties)), this.uf;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.settings = function(t) {
        nn("Firestore.settings", arguments, 1), sn("Firestore.settings", "object", 1, t);
        var e = new Vr(t);
        if (this.ef && !this.hf.isEqual(e)) throw new I$1(E$1.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.hf = e, void 0 !== e.credentials && (this.nf = function(t) {
            if (!t) return new A$1;
            switch (t.type) {
              case "gapi":
                var e = t.cf;
                // Make sure this really is a Gapi client.
                                return De(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new D(e, t.V || "0");

              case "provider":
                return t.cf;

              default:
                throw new I$1(E$1.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(e.credentials));
    }, t.prototype.enableNetwork = function() {
        return this.tf(), this.ef.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.tf(), this.ef.disableNetwork();
    }, t.prototype.enablePersistence = function(t) {
        var e, n;
        if (this.ef) throw new I$1(E$1.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1, i = !1;
        if (t && (void 0 !== t.experimentalTabSynchronization && Ae("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), 
        r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, 
        i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new I$1(E$1.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
        return this.lf(this.rf, {
            S_: !0,
            cacheSizeBytes: this.hf.cacheSizeBytes,
            synchronizeTabs: r,
            _f: i
        });
    }, t.prototype.clearPersistence = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, r = this;
            return __generator(this, (function(i) {
                if (void 0 !== this.ef && !this.ef.q_) throw new I$1(E$1.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
                return t = new je, [ 2 /*return*/ , (this.Z_.xr((function() {
                    return __awaiter(r, void 0, void 0, (function() {
                        var e, r;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return n.trys.push([ 0, 2, , 3 ]), e = this.ff(), [ 4 /*yield*/ , this.rf.clearPersistence(e) ];

                              case 1:
                                return n.sent(), t.resolve(), [ 3 /*break*/ , 3 ];

                              case 2:
                                return r = n.sent(), t.reject(r), [ 3 /*break*/ , 3 ];

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), t.promise) ];
            }));
        }));
    }, t.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(t.prototype, "df", {
        get: function() {
            return this.tf(), this.ef.q_;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.waitForPendingWrites = function() {
        return this.tf(), this.ef.waitForPendingWrites();
    }, t.prototype.onSnapshotsInSync = function(t) {
        if (this.tf(), _r(t)) return this.wf(t);
        sn("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
            next: t
        };
        return this.wf(e);
    }, t.prototype.wf = function(t) {
        var e = this, n = new Tr({
            next: function() {
                t.next && t.next();
            },
            error: function(t) {
                throw _e();
            }
        });
        return this.ef.dl(n), function() {
            n.U_(), e.ef.wl(n);
        };
    }, t.prototype.tf = function() {
        return this.ef || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.lf(new Nr, {
            S_: !1
        }), this.ef;
    }, t.prototype.ff = function() {
        return new Ue(this.xo, this.if, this.hf.host, this.hf.ssl, this.hf.forceLongPolling);
    }, t.prototype.lf = function(t, e) {
        var n = this.ff();
        return this.ef = new Ar(be.nt(), n, this.nf, this.Z_), this.ef.start(t, e);
    }, t.sf = function(t) {
        if (e = t.options, !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new I$1(E$1.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e, n = t.options.projectId;
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        /**
 * Helper function to prevent instantiation through the constructor.
 *
 * This method creates a new constructor that throws when it's invoked.
 * The prototype of that constructor is then set to the prototype of the hidden
 * "class" to expose all the prototype methods and allow for instanceof
 * checks.
 *
 * To also make all the static methods available, all properties of the
 * original constructor are copied to the new constructor.
 */        if (!n || "string" != typeof n) throw new I$1(E$1.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new Pe(n);
    }, Object.defineProperty(t.prototype, "app", {
        get: function() {
            if (!this.J_) throw new I$1(E$1.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.J_;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        return nn("Firestore.collection", arguments, 1), sn("Firestore.collection", "non-empty string", 1, t), 
        this.tf(), new Fr(S$1.G(t), this, 
        /* converter= */ null);
    }, t.prototype.doc = function(t) {
        return nn("Firestore.doc", arguments, 1), sn("Firestore.doc", "non-empty string", 1, t), 
        this.tf(), Pr.Tf(S$1.G(t), this, 
        /* converter= */ null);
    }, t.prototype.collectionGroup = function(t) {
        if (nn("Firestore.collectionGroup", arguments, 1), sn("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.tf(), new Mr(new kt(S$1.H, t), this, 
        /* converter= */ null);
    }, t.prototype.runTransaction = function(t) {
        var e = this;
        return nn("Firestore.runTransaction", arguments, 1), sn("Firestore.runTransaction", "function", 1, t), 
        this.tf().transaction((function(n) {
            return t(new Sr(e, n));
        }));
    }, t.prototype.batch = function() {
        return this.tf(), new Ur(this);
    }, Object.defineProperty(t, "logLevel", {
        get: function() {
            switch (Ie()) {
              case LogLevel.DEBUG:
                return "debug";

              case LogLevel.ERROR:
                return "error";

              case LogLevel.SILENT:
                return "silent";

              case LogLevel.WARN:
                return "warn";

              case LogLevel.INFO:
                return "info";

              case LogLevel.VERBOSE:
                return "verbose";

              default:
                // The default log level is error
                return "error";
            }
        },
        enumerable: !0,
        configurable: !0
    }), t.setLogLevel = function(t) {
        var e;
        nn("Firestore.setLogLevel", arguments, 1), fn("setLogLevel", [ "debug", "error", "silent", "warn", "info", "verbose" ], 1, t), 
        e = t, Ee.setLogLevel(e);
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    t.prototype.Ef = function() {
        return this.hf.timestampsInSnapshots;
    }, t;
}(), Sr = /** @class */ function() {
    function t(t, e) {
        this.If = t, this.mf = e;
    }
    return t.prototype.get = function(t) {
        var e = this;
        nn("Transaction.get", arguments, 1);
        var n = Gr("Transaction.get", t, this.If);
        return this.mf.Ua([ n.Bo ]).then((function(t) {
            if (!t || 1 !== t.length) return _e();
            var r = t[0];
            if (r instanceof Dt) return new Lr(e.If, n.Bo, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.Uo);
            if (r instanceof _t) return new Lr(e.If, n.Bo, r, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.Uo);
            throw _e();
        }));
    }, t.prototype.set = function(t, e, n) {
        on("Transaction.set", arguments, 2, 3);
        var r = Gr("Transaction.set", t, this.If);
        n = xr("Transaction.set", n);
        var i = Qr(r.Uo, e, "Transaction.set"), o = i[0], s = i[1], u = this.If.af.Xo(s, o, n);
        return this.mf.set(r.Bo, u), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return "string" == typeof e || e instanceof Tn ? (rn("Transaction.update", arguments, 3), 
        r = Gr("Transaction.update", t, this.If), i = this.If.af.ta("Transaction.update", e, n, o)) : (nn("Transaction.update", arguments, 2), 
        r = Gr("Transaction.update", t, this.If), i = this.If.af.Zo("Transaction.update", e)), 
        this.mf.update(r.Bo, i), this;
    }, t.prototype.delete = function(t) {
        nn("Transaction.delete", arguments, 1);
        var e = Gr("Transaction.delete", t, this.If);
        return this.mf.delete(e.Bo), this;
    }, t;
}(), Ur = /** @class */ function() {
    function t(t) {
        this.If = t, this.Rf = [], this.Af = !1;
    }
    return t.prototype.set = function(t, e, n) {
        on("WriteBatch.set", arguments, 2, 3), this.Pf();
        var r = Gr("WriteBatch.set", t, this.If);
        n = xr("WriteBatch.set", n);
        var i = Qr(r.Uo, e, "WriteBatch.set"), o = i[0], s = i[1], u = this.If.af.Xo(s, o, n);
        return this.Rf = this.Rf.concat(u.Qo(r.Bo, pt.dt())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return this.Pf(), "string" == typeof e || e instanceof Tn ? (rn("WriteBatch.update", arguments, 3), 
        r = Gr("WriteBatch.update", t, this.If), i = this.If.af.ta("WriteBatch.update", e, n, o)) : (nn("WriteBatch.update", arguments, 2), 
        r = Gr("WriteBatch.update", t, this.If), i = this.If.af.Zo("WriteBatch.update", e)), 
        this.Rf = this.Rf.concat(i.Qo(r.Bo, pt.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        nn("WriteBatch.delete", arguments, 1), this.Pf();
        var e = Gr("WriteBatch.delete", t, this.If);
        return this.Rf = this.Rf.concat(new gt(e.Bo, pt.dt())), this;
    }, t.prototype.commit = function() {
        return this.Pf(), this.Af = !0, this.Rf.length > 0 ? this.If.tf().write(this.Rf) : Promise.resolve();
    }, t.prototype.Pf = function() {
        if (this.Af) throw new I$1(E$1.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), Pr = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, n.xo, t, r) || this).Bo = t, i.firestore = n, i.Uo = r, 
        i.ef = i.firestore.tf(), i;
    }
    return __extends(n, e), n.Tf = function(t, e, r) {
        if (t.length % 2 != 0) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.j() + " has " + t.length);
        return new n(new O$1(t), e, r);
    }, Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.Bo.path.q();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            return new Fr(this.Bo.path.O(), this.firestore, this.Uo);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.Bo.path.j();
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.collection = function(t) {
        if (nn("DocumentReference.collection", arguments, 1), sn("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new I$1(E$1.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = S$1.G(t);
        return new Fr(this.Bo.path.child(e), this.firestore, 
        /* converter= */ null);
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw mn("isEqual", "DocumentReference", 1, t);
        return this.firestore === t.firestore && this.Bo.isEqual(t.Bo) && this.Uo === t.Uo;
    }, n.prototype.set = function(t, e) {
        on("DocumentReference.set", arguments, 1, 2), e = xr("DocumentReference.set", e);
        var n = Qr(this.Uo, t, "DocumentReference.set"), r = n[0], i = n[1], o = this.firestore.af.Xo(i, r, e);
        return this.ef.write(o.Qo(this.Bo, pt.dt()));
    }, n.prototype.update = function(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return "string" == typeof t || t instanceof Tn ? (rn("DocumentReference.update", arguments, 2), 
        n = this.firestore.af.ta("DocumentReference.update", t, e, r)) : (nn("DocumentReference.update", arguments, 1), 
        n = this.firestore.af.Zo("DocumentReference.update", t)), this.ef.write(n.Qo(this.Bo, pt.exists(!0)));
    }, n.prototype.delete = function() {
        return nn("DocumentReference.delete", arguments, 0), this.ef.write([ new gt(this.Bo, pt.dt()) ]);
    }, n.prototype.onSnapshot = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        on("DocumentReference.onSnapshot", arguments, 1, 4);
        var n, r = {
            includeMetadataChanges: !1
        }, i = 0;
        "object" != typeof t[i] || _r(t[i]) || (vn("DocumentReference.onSnapshot", r = t[i], [ "includeMetadataChanges" ]), 
        hn("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), 
        i++);
        var o = {
            includeMetadataChanges: r.includeMetadataChanges
        };
        return _r(t[i]) ? n = t[i] : (sn("DocumentReference.onSnapshot", "function", i, t[i]), 
        un("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), un("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), 
        n = {
            next: t[i],
            error: t[i + 1],
            complete: t[i + 2]
        }), this.Vf(o, n);
    }, n.prototype.Vf = function(t, e) {
        var n = this, r = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        e.error && (r = e.error.bind(e));
        var i = new Tr({
            next: function(t) {
                if (e.next) {
                    var r = t.docs.get(n.Bo);
                    e.next(new Lr(n.firestore, n.Bo, r, t.fromCache, t.hasPendingWrites, n.Uo));
                }
            },
            error: r
        }), o = this.ef.listen(kt.Wt(this.Bo.path), i, t);
        return function() {
            i.U_(), n.ef.bu(o);
        };
    }, n.prototype.get = function(t) {
        var e = this;
        return on("DocumentReference.get", arguments, 0, 1), Br("DocumentReference.get", t), 
        new Promise((function(n, r) {
            t && "cache" === t.source ? e.firestore.tf().M_(e.Bo).then((function(t) {
                n(new Lr(e.firestore, e.Bo, t, 
                /*fromCache=*/ !0, t instanceof _t && t.At, e.Uo));
            }), r) : e.pf(n, r, t);
        }));
    }, n.prototype.pf = function(t, e, n) {
        var r = this.Vf({
            includeMetadataChanges: !0,
            Pl: !0
        }, {
            next: function(i) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                r(), !i.exists && i.metadata.fromCache ? 
                // TODO(dimond): If we're online and the document doesn't
                // exist then we resolve with a doc.exists set to false. If
                // we're offline however, we reject the Promise in this
                // case. Two options: 1) Cache the negative response from
                // the server so we can deliver that even when you're
                // offline 2) Actually reject the Promise in the online case
                // if the document doesn't exist.
                e(new I$1(E$1.UNAVAILABLE, "Failed to get document because the client is offline.")) : i.exists && i.metadata.fromCache && n && "server" === n.source ? e(new I$1(E$1.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : t(i);
            },
            error: e
        });
    }, n.prototype.withConverter = function(t) {
        return new n(this.Bo, this.firestore, t);
    }, n;
}(Mn), Or = /** @class */ function() {
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), Lr = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.If = t, this.Bo = e, this.yf = n, this.gf = r, this.bf = i, this.Uo = o;
    }
    return t.prototype.data = function(t) {
        var e = this;
        if (on("DocumentSnapshot.data", arguments, 0, 1), t = jr("DocumentSnapshot.data", t), 
        this.yf) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.Uo) {
                var n = new qr(this.If, this.Bo, this.yf, this.gf, this.bf, 
                /* converter= */ null);
                return this.Uo.fromFirestore(n, t);
            }
            return new Dr(this.If.xo, this.If.Ef(), t.serverTimestamps || "none", (function(t) {
                return new Pr(t, e.If, /* converter= */ null);
            })).j_(this.yf.Ot());
        }
    }, t.prototype.get = function(t, e) {
        var n = this;
        if (on("DocumentSnapshot.get", arguments, 1, 2), e = jr("DocumentSnapshot.get", e), 
        this.yf) {
            var r = this.yf.data().field(Hn("DocumentSnapshot.get", t));
            if (null !== r) return new Dr(this.If.xo, this.If.Ef(), e.serverTimestamps || "none", (function(t) {
                return new Pr(t, n.If, n.Uo);
            })).j_(r);
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.Bo.path.q();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new Pr(this.Bo, this.If, this.Uo);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.yf;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new Or(this.bf, this.gf);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw mn("isEqual", "DocumentSnapshot", 1, e);
        return this.If === e.If && this.gf === e.gf && this.Bo.isEqual(e.Bo) && (null === this.yf ? null === e.yf : this.yf.isEqual(e.yf)) && this.Uo === e.Uo;
    }, t;
}(), qr = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.data = function(t) {
        return e.prototype.data.call(this, t);
    }, n;
}(Lr), Mr = /** @class */ function() {
    function t(t, e, n) {
        this.vf = t, this.firestore = e, this.Uo = n;
    }
    return t.prototype.where = function(e, n, r) {
        nn("Query.where", arguments, 3), yn("Query.where", 3, r);
        // Enumerated from the WhereFilterOp type in index.d.ts.
        var i, o = fn("Query.where", [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , "==" /* EQUAL */ , ">=" /* GREATER_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , "array-contains" /* ARRAY_CONTAINS */ , "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], 2, n), s = Hn("Query.where", e);
        if (s.Y()) {
            if ("array-contains" /* ARRAY_CONTAINS */ === o || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === o) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
            if ("in" /* IN */ === o) {
                this.Sf(r, o);
                for (var u = [], a = 0, h = r; a < h.length; a++) {
                    var c = h[a];
                    u.push(this.Cf(c));
                }
                i = {
                    arrayValue: {
                        values: u
                    }
                };
            } else i = this.Cf(r);
        } else "in" /* IN */ !== o && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== o || this.Sf(r, o), 
        i = this.firestore.af.ea("Query.where", r, 
        // We only allow nested arrays for IN queries.
        /** allowArrays = */ "in" /* IN */ === o);
        var f = St.create(s, o, i);
        return this.Df(f), new t(this.vf.Ht(f), this.firestore, this.Uo);
    }, t.prototype.orderBy = function(e, n) {
        var r;
        if (on("Query.orderBy", arguments, 1, 2), un("Query.orderBy", "non-empty string", 2, n), 
        void 0 === n || "asc" === n) r = "asc" /* ASCENDING */; else {
            if ("desc" !== n) throw new I$1(E$1.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
            r = "desc" /* DESCENDING */;
        }
        if (null !== this.vf.startAt) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.vf.endAt) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        var i = Hn("Query.orderBy", e), o = new Ct(i, r);
        return this.Ff(o), new t(this.vf.Kt(o), this.firestore, this.Uo);
    }, t.prototype.limit = function(e) {
        return nn("Query.limit", arguments, 1), sn("Query.limit", "number", 1, e), gn("Query.limit", 1, e), 
        new t(this.vf.zt(e), this.firestore, this.Uo);
    }, t.prototype.limitToLast = function(e) {
        return nn("Query.limitToLast", arguments, 1), sn("Query.limitToLast", "number", 1, e), 
        gn("Query.limitToLast", 1, e), new t(this.vf.Yt(e), this.firestore, this.Uo);
    }, t.prototype.startAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        rn("Query.startAt", arguments, 1);
        var i = this.Nf("Query.startAt", e, n, 
        /*before=*/ !0);
        return new t(this.vf.Xt(i), this.firestore, this.Uo);
    }, t.prototype.startAfter = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        rn("Query.startAfter", arguments, 1);
        var i = this.Nf("Query.startAfter", e, n, 
        /*before=*/ !1);
        return new t(this.vf.Xt(i), this.firestore, this.Uo);
    }, t.prototype.endBefore = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        rn("Query.endBefore", arguments, 1);
        var i = this.Nf("Query.endBefore", e, n, 
        /*before=*/ !0);
        return new t(this.vf.Jt(i), this.firestore, this.Uo);
    }, t.prototype.endAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        rn("Query.endAt", arguments, 1);
        var i = this.Nf("Query.endAt", e, n, 
        /*before=*/ !1);
        return new t(this.vf.Jt(i), this.firestore, this.Uo);
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw mn("isEqual", "Query", 1, e);
        return this.firestore === e.firestore && this.vf.isEqual(e.vf) && this.Uo === e.Uo;
    }, t.prototype.withConverter = function(e) {
        return new t(this.vf, this.firestore, e);
    }, 
    /** Helper function to create a bound from a document or fields */ t.prototype.Nf = function(t, e, n, r) {
        if (yn(t, 1, e), e instanceof Lr) {
            if (n.length > 0) throw new I$1(E$1.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
            var i = e;
            if (!i.exists) throw new I$1(E$1.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
            return this.$f(i.yf, r);
        }
        var o = [ e ].concat(n);
        return this.Lf(t, o, r);
    }, 
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */
    t.prototype.$f = function(t, e) {
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var n = [], r = 0, i = this.vf.orderBy; r < i.length; r++) {
            var o = i[r];
            if (o.field.Y()) n.push(Z$1(this.firestore.xo, t.key)); else {
                var s = t.field(o.field);
                if (j(s)) throw new I$1(E$1.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + o.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === s) {
                    var u = o.field.j();
                    throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.");
                }
                n.push(s);
            }
        }
        return new Mt(n, e);
    }, 
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    t.prototype.Lf = function(t, e, n) {
        // Use explicit order by's because it has to match the query the user made
        var r = this.vf.Mt;
        if (e.length > r.length) throw new I$1(E$1.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
        for (var i = [], o = 0; o < e.length; o++) {
            var s = e[o];
            if (r[o].field.Y()) {
                if ("string" != typeof s) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                if (!this.vf.le() && -1 !== s.indexOf("/")) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
                var u = this.vf.path.child(S$1.G(s));
                if (!O$1.et(u)) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + u + "' is not because it contains an odd number of segments.");
                var a = new O$1(u);
                i.push(Z$1(this.firestore.xo, a));
            } else {
                var h = this.firestore.af.ea(t, s);
                i.push(h);
            }
        }
        return new Mt(i, n);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        on("Query.onSnapshot", arguments, 1, 4);
        var n, r = {}, i = 0;
        return "object" != typeof t[i] || _r(t[i]) || (vn("Query.onSnapshot", r = t[i], [ "includeMetadataChanges" ]), 
        hn("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), 
        i++), _r(t[i]) ? n = t[i] : (sn("Query.onSnapshot", "function", i, t[i]), un("Query.onSnapshot", "function", i + 1, t[i + 1]), 
        un("Query.onSnapshot", "function", i + 2, t[i + 2]), n = {
            next: t[i],
            error: t[i + 1],
            complete: t[i + 2]
        }), this.Of(this.vf), this.Vf(r, n);
    }, t.prototype.Vf = function(t, e) {
        var n = this, r = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        e.error && (r = e.error.bind(e));
        var i = new Tr({
            next: function(t) {
                e.next && e.next(new Cr(n.firestore, n.vf, t, n.Uo));
            },
            error: r
        }), o = this.firestore.tf(), s = o.listen(this.vf, i, t);
        return function() {
            i.U_(), o.bu(s);
        };
    }, t.prototype.Of = function(t) {
        if (t.ae() && 0 === t.Mt.length) throw new I$1(E$1.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
    }, t.prototype.get = function(t) {
        var e = this;
        return on("Query.get", arguments, 0, 1), Br("Query.get", t), this.Of(this.vf), new Promise((function(n, r) {
            t && "cache" === t.source ? e.firestore.tf().x_(e.vf).then((function(t) {
                n(new Cr(e.firestore, e.vf, t, e.Uo));
            }), r) : e.pf(n, r, t);
        }));
    }, t.prototype.pf = function(t, e, n) {
        var r = this.Vf({
            includeMetadataChanges: !0,
            Pl: !0
        }, {
            next: function(i) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                r(), i.metadata.fromCache && n && "server" === n.source ? e(new I$1(E$1.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : t(i);
            },
            error: e
        });
    }, 
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    t.prototype.Cf = function(t) {
        if ("string" == typeof t) {
            if ("" === t) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!this.vf.le() && -1 !== t.indexOf("/")) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
            var e = this.vf.path.child(S$1.G(t));
            if (!O$1.et(e)) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
            return Z$1(this.firestore.xo, new O$1(e));
        }
        if (t instanceof Pr) {
            var n = t;
            return Z$1(this.firestore.xo, n.Bo);
        }
        throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + dn(t) + ".");
    }, 
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    t.prototype.Sf = function(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
    }, t.prototype.Df = function(t) {
        if (t instanceof St) {
            var e = [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], n = [ "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], r = e.indexOf(t.op) >= 0, i = n.indexOf(t.op) >= 0;
            if (t.ue()) {
                var o = this.vf.jt();
                if (null !== o && !o.isEqual(t.field)) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
                var s = this.vf.Gt();
                null !== s && this.kf(t.field, s);
            } else if (i || r) {
                // You can have at most 1 disjunctive filter and 1 array filter. Check if
                // the new filter conflicts with an existing one.
                var u = null;
                if (i && (u = this.vf.ce(n)), null === u && r && (u = this.vf.ce(e)), null != u) 
                // We special case when it's a duplicate op to give a slightly clearer error message.
                throw u === t.op ? new I$1(E$1.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new I$1(E$1.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + u.toString() + "' filters.");
            }
        }
    }, t.prototype.Ff = function(t) {
        if (null === this.vf.Gt()) {
            // This is the first order by. It must match any inequality.
            var e = this.vf.jt();
            null !== e && this.kf(e, t.field);
        }
    }, t.prototype.kf = function(t, e) {
        if (!e.isEqual(t)) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.");
    }, t;
}(), Cr = /** @class */ function() {
    function t(t, e, n, r) {
        this.If = t, this.qf = e, this.Mf = n, this.Uo = r, this.xf = null, this.Bf = null, 
        this.metadata = new Or(n.hasPendingWrites, n.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this.Mf.docs.M();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Mf.docs.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.forEach = function(t, e) {
        var n = this;
        on("QuerySnapshot.forEach", arguments, 1, 2), sn("QuerySnapshot.forEach", "function", 1, t), 
        this.Mf.docs.forEach((function(r) {
            t.call(e, n.Uf(r));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new Mr(this.qf, this.If, this.Uo);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (vn("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), hn("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.Mf.hs) throw new I$1(E$1.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.xf && this.Bf === e || (this.xf = 
        /**
     * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
     *
     * Exported for testing.
     */
        function(t, e, n, r) {
            if (n.ss.M()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var i = 0;
                return n.docChanges.map((function(e) {
                    var o = new qr(t, e.doc.key, e.doc, n.fromCache, n.ns.has(e.doc.key), r);
                    return e.doc, {
                        type: "added",
                        doc: o,
                        oldIndex: -1,
                        newIndex: i++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var o = n.ss;
            return n.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var i = new qr(t, e.doc.key, e.doc, n.fromCache, n.ns.has(e.doc.key), r), s = -1, u = -1;
                return 0 /* Added */ !== e.type && (s = o.indexOf(e.doc.key), o = o.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (u = (o = o.add(e.doc)).indexOf(e.doc.key)), {
                    type: zr(e.type),
                    doc: i,
                    oldIndex: s,
                    newIndex: u
                };
            }));
        }(this.If, e, this.Mf, this.Uo), this.Bf = e), this.xf;
    }, 
    /** Check the equality. The call can be very expensive. */ t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw mn("isEqual", "QuerySnapshot", 1, e);
        return this.If === e.If && this.qf.isEqual(e.qf) && this.Mf.isEqual(e.Mf) && this.Uo === e.Uo;
    }, t.prototype.Uf = function(t) {
        return new qr(this.If, t.key, t, this.metadata.fromCache, this.Mf.ns.has(t.key), this.Uo);
    }, t;
}(), Fr = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        if ((i = e.call(this, kt.Wt(t), n, r) || this).Qf = t, t.length % 2 != 1) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.j() + " has " + t.length);
        return i;
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.vf.path.q();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.vf.path.O();
            return t.M() ? null : new Pr(new O$1(t), this.firestore, 
            /* converter= */ null);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.vf.path.j();
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.doc = function(t) {
        on("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = Ve.cn()), sn("CollectionReference.doc", "non-empty string", 1, t);
        var e = S$1.G(t);
        return Pr.Tf(this.vf.path.child(e), this.firestore, this.Uo);
    }, n.prototype.add = function(t) {
        nn("CollectionReference.add", arguments, 1), sn("CollectionReference.add", "object", 1, this.Uo ? this.Uo.toFirestore(t) : t);
        var e = this.doc();
        return e.set(t).then((function() {
            return e;
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.Qf, this.firestore, t);
    }, n;
}(Mr);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
function xr(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (vn(t, e, [ "merge", "mergeFields" ]), hn(t, "boolean", "merge", e.merge), function(t, e, n, r, i) {
        void 0 !== r && function(t, e, n, r, i) {
            if (!(r instanceof Array)) throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + dn(r));
            for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new I$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + dn(r[o]));
        }(t, e, n, r, i);
    }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof Tn;
    })), void 0 !== e.mergeFields && void 0 !== e.merge) throw new I$1(E$1.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

function jr(t, e) {
    return void 0 === e ? {} : (vn(t, e, [ "serverTimestamps" ]), cn(t, 0, "serverTimestamps", e.serverTimestamps, [ "estimate", "previous", "none" ]), 
    e);
}

function Br(t, e) {
    un(t, "object", 1, e), e && (vn(t, e, [ "source" ]), cn(t, 0, "source", e.source, [ "default", "server", "cache" ]));
}

function Gr(t, e, n) {
    if (e instanceof Mn) {
        if (e.firestore !== n) throw new I$1(E$1.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
    }
    throw mn(t, "DocumentReference", 1, e);
}

function zr(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return _e();
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function Qr(t, e, n) {
    var r;
    return t ? (r = t.toFirestore(e), n = "toFirestore() in " + n) : r = e, [ r, n ];
}

function Wr(t, e) {
    function n() {
        var t = "This constructor is private.";
        throw e && (t += " ", t += e), new I$1(E$1.INVALID_ARGUMENT, t);
    }
    // Make sure instanceof checks work and all methods are exposed on the public
    // constructor
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return n.prototype = t.prototype, 
    // Copy any static methods/members
    Object.assign(n, t), n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Public instance that disallows construction at runtime. Note that this still
// allows instanceof checks.
var Hr = Wr(kr, "Use firebase.firestore() instead."), Yr = Wr(Sr, "Use firebase.firestore().runTransaction() instead."), Kr = Wr(Ur, "Use firebase.firestore().batch() instead."), Xr = Wr(Pr, "Use firebase.firestore().doc() instead."), $r = Wr(Lr), Jr = Wr(qr), Zr = Wr(Mr), ti = Wr(Cr), ei = Wr(Fr, "Use firebase.firestore().collection() instead."), ni = Wr(Pn, "Use FieldValue.<field>() instead."), ri = Wr(Nn, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."), ii = {
    Firestore: Hr,
    GeoPoint: Ln,
    Timestamp: R$1,
    Blob: ri,
    Transaction: Yr,
    WriteBatch: Kr,
    DocumentReference: Xr,
    DocumentSnapshot: $r,
    Query: Zr,
    QueryDocumentSnapshot: Jr,
    QuerySnapshot: ti,
    CollectionReference: ei,
    FieldPath: Tn,
    FieldValue: ni,
    setLogLevel: kr.setLogLevel,
    CACHE_SIZE_UNLIMITED: Rr
}, oi = /** @class */ function() {
    function t() {}
    return t.prototype.ou = function(t) {
        // No-op.
    }, t.prototype.yu = function() {
        // No-op.
    }, t;
}(), si = /** @class */ function() {
    function t() {
        var t = this;
        this.Wf = function() {
            return t.jf();
        }, this.Gf = function() {
            return t.Hf();
        }, this.Kf = [], this.zf();
    }
    return t.prototype.ou = function(t) {
        this.Kf.push(t);
    }, t.prototype.yu = function() {
        window.removeEventListener("online", this.Wf), window.removeEventListener("offline", this.Gf);
    }, t.prototype.zf = function() {
        window.addEventListener("online", this.Wf), window.addEventListener("offline", this.Gf);
    }, t.prototype.jf = function() {
        Ne("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.Kf; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.Hf = function() {
        Ne("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.Kf; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.Yf = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), ui = /** @class */ function() {
    function t(t) {
        this.Xf = t.Xf, this.Jf = t.Jf;
    }
    return t.prototype.Aa = function(t) {
        this.Zf = t;
    }, t.prototype.Ta = function(t) {
        this.td = t;
    }, t.prototype.onMessage = function(t) {
        this.ed = t;
    }, t.prototype.close = function() {
        this.Jf();
    }, t.prototype.send = function(t) {
        this.Xf(t);
    }, t.prototype.sd = function() {
        this.Zf();
    }, t.prototype.nd = function(t) {
        this.td(t);
    }, t.prototype.rd = function(t) {
        this.ed(t);
    }, t;
}(), ai = {
    BatchGetDocuments: "batchGet",
    Commit: "commit"
}, hi = "gl-js/ fire/" + w$1, ci = /** @class */ function() {
    function t(t) {
        this.ii = t.ii;
        var e = t.ssl ? "https" : "http";
        this.hd = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    return t.prototype.od = function(t, e) {
        if (e) for (var n in e.o) e.o.hasOwnProperty(n) && (t[n] = e.o[n]);
        t["X-Goog-Api-Client"] = hi;
    }, t.prototype.La = function(t, e, n) {
        var r = this, i = this.ad(t);
        return new Promise((function(o, s) {
            var u = new esm_5;
            u.listenOnce(esm_3.COMPLETE, (function() {
                try {
                    switch (u.getLastErrorCode()) {
                      case esm_2.NO_ERROR:
                        var e = u.getResponseJson();
                        Ne("Connection", "XHR received:", JSON.stringify(e)), o(e);
                        break;

                      case esm_2.TIMEOUT:
                        Ne("Connection", 'RPC "' + t + '" timed out'), s(new I$1(E$1.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case esm_2.HTTP_ERROR:
                        var n = u.getStatus();
                        if (Ne("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), 
                        n > 0) {
                            var r = u.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var i = function(t) {
                                    var e = t.toLowerCase().replace("_", "-");
                                    return Object.values(E$1).indexOf(e) >= 0 ? e : E$1.UNKNOWN;
                                }(r.status);
                                s(new I$1(i, r.message));
                            } else s(new I$1(E$1.UNKNOWN, "Server responded with status " + u.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        Ne("Connection", 'RPC "' + t + '" failed'), s(new I$1(E$1.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        _e();
                    }
                } finally {
                    Ne("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            // The database field is already encoded in URL. Specifying it again in
            // the body is not necessary in production, and will cause duplicate field
            // errors in the Firestore Emulator. Let's remove it.
            var a = Object.assign({}, e);
            delete a.database;
            var h = JSON.stringify(a);
            Ne("Connection", "XHR sending: ", i + " " + h);
            // Content-Type: text/plain will avoid preflight requests which might
            // mess with CORS and redirects by proxies. If we add custom headers
            // we will need to change this code to potentially use the
            // $httpOverwrite parameter supported by ESF to avoid
            // triggering preflight requests.
            var c = {
                "Content-Type": "text/plain"
            };
            r.od(c, n), u.send(i, "POST", h, c, 15);
        }));
    }, t.prototype.Oa = function(t, e, n) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.La(t, e, n);
    }, t.prototype.Pa = function(t, e) {
        var n = [ this.hd, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], i = esm_1(), o = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.ii.projectId + "/databases/" + this.ii.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.od(o.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (o.httpHeadersOverwriteParam = "$httpHeaders");
        var p = n.join("");
        Ne("Connection", "Creating WebChannel: " + p + " " + o);
        var d = i.createWebChannel(p, o), y = !1, v = !1, b = new ui({
            Xf: function(t) {
                v ? Ne("Connection", "Not sending because WebChannel is closed:", t) : (y || (Ne("Connection", "Opening WebChannel transport."), 
                d.open(), y = !0), Ne("Connection", "WebChannel sending:", t), d.send(t));
            },
            Jf: function() {
                return d.close();
            }
        }), N = function(t, e) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            d.listen(t, (function(t) {
                try {
                    e(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return N(esm_4.EventType.OPEN, (function() {
            v || Ne("Connection", "WebChannel transport opened.");
        })), N(esm_4.EventType.CLOSE, (function() {
            v || (v = !0, Ne("Connection", "WebChannel transport closed"), b.nd());
        })), N(esm_4.EventType.ERROR, (function(t) {
            v || (v = !0, function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (Ee.logLevel <= LogLevel.WARN) {
                    var i = e.map(Te);
                    Ee.warn.apply(Ee, __spreadArrays([ "Firestore (" + w$1 + "): " + t ], i));
                }
            }("Connection", "WebChannel transport errored:", t), b.nd(new I$1(E$1.UNAVAILABLE, "The operation could not be completed")));
        })), N(esm_4.EventType.MESSAGE, (function(t) {
            var e;
            if (!v) {
                var n = t.data[0];
                De(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    Ne("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, s = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = Nt[t];
                        if (void 0 !== e) return Bt(e);
                    }(o), u = i.message;
                    void 0 === s && (s = E$1.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    v = !0, b.nd(new I$1(s, u)), d.close();
                } else Ne("Connection", "WebChannel received:", n), b.rd(n);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            b.sd();
        }), 0), b;
    }, 
    // visible for testing
    t.prototype.ad = function(t) {
        var e = ai[t];
        return this.hd + "/v1/projects/" + this.ii.projectId + "/databases/" + this.ii.database + "/documents:" + e;
    }, t;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the memory-only Firestore build with the components framework.
 */
function fi(t) {
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
    !function(t, e) {
        t.INTERNAL.registerComponent(new Component("firestore", (function(t) {
            return function(t, e) {
                return new kr(t, e, new Nr);
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, ii)));
    }(t), t.registerVersion("@firebase/firestore", "1.15.1");
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Implements the Platform API for browsers and some browser-like environments
// (including ReactNative, which has its own ReactNativePlatform that extends
// from this class).
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This code needs to run before Firestore is used. This can be achieved in
 * several ways:
 *   1) Through the JSCompiler compiling this code and then (automatically)
 *      executing it before exporting the Firestore symbols.
 *   2) Through importing this module first in a Firestore main module
 */
be.an(new (/** @class */ function() {
    function t() {
        this.yo = "undefined" != typeof atob;
    }
    return Object.defineProperty(t.prototype, "document", {
        get: function() {
            // `document` is not always available, e.g. in ReactNative and WebWorkers.
            // eslint-disable-next-line no-restricted-globals
            return "undefined" != typeof document ? document : null;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "window", {
        get: function() {
            // `window` is not always available, e.g. in ReactNative and WebWorkers.
            // eslint-disable-next-line no-restricted-globals
            return "undefined" != typeof window ? window : null;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.L_ = function(t) {
        return Promise.resolve(new ci(t));
    }, t.prototype.D_ = function() {
        return si.Yf() ? new si : new oi;
    }, t.prototype.Yo = function(t) {
        return new ge(t, {
            hi: !0
        });
    }, t.prototype.un = function(t) {
        return JSON.stringify(t);
    }, t.prototype.atob = function(t) {
        return atob(t);
    }, t.prototype.btoa = function(t) {
        return btoa(t);
    }, t.prototype.ln = function(t) {
        // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
        var e = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
        if (e) e.getRandomValues(n); else 
        // Falls back to Math.random
        for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
        return n;
    }, t;
}())), fi(i);
//# sourceMappingURL=index.esm.js.map
