import { renderStoryString as F_, persona_description_positions as Wg } from "../../../../power-user.js";
import { parseMesExamples as Z_, baseChatReplace as G_, chat_metadata as Rs, getMaxContextSize as V_, name1 as _r, name2 as Qr, this_chid as It, extension_prompt_types as Ca, depth_prompt_role_default as Y_, depth_prompt_depth_default as X_ } from "../../../../../script.js";
import { createWorldInfoEntry as $_, world_info_include_names as Q_, wi_anchor_position as K_, world_names as ev } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as J_, formatInstructModeSystemPrompt as W_ } from "../../../../instruct-mode.js";
import { appendFileContent as e2 } from "../../../../chats.js";
import { setOpenAIMessages as t2, setOpenAIMessageExamples as n2, formatWorldInfo as r2, getPromptPosition as a2, getPromptRole as i2, prepareOpenAIMessages as s2 } from "../../../../openai.js";
import { metadata_keys as zs } from "../../../../authors-note.js";
import { getGroupDepthPrompts as l2, selected_group as Jn } from "../../../../group-chats.js";
import { getRegexedString as o2, regex_placement as tv } from "../../../regex/engine.js";
import { removeFromArray as nv, runAfterAnimation as u2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ci, fixToastrForDialogs as Zf } from "../../../../popup.js";
import rv from "../../../../../lib/dialog-polyfill.esm.js";
function r0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Gf = { exports: {} }, Ls = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var av;
function c2() {
  if (av) return Ls;
  av = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(s, o, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      u = {};
      for (var p in o)
        p !== "key" && (u[p] = o[p]);
    } else u = o;
    return o = u.ref, {
      $$typeof: t,
      type: s,
      key: f,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return Ls.Fragment = r, Ls.jsx = i, Ls.jsxs = i, Ls;
}
var iv;
function f2() {
  return iv || (iv = 1, Gf.exports = c2()), Gf.exports;
}
var E = f2(), Vf = { exports: {} }, ze = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv;
function d2() {
  if (sv) return ze;
  sv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function b(R) {
    return R === null || typeof R != "object" ? null : (R = _ && R[_] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var g = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, d = Object.assign, S = {};
  function x(R, W, ie) {
    this.props = R, this.context = W, this.refs = S, this.updater = ie || g;
  }
  x.prototype.isReactComponent = {}, x.prototype.setState = function(R, W) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, W, "setState");
  }, x.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function T() {
  }
  T.prototype = x.prototype;
  function A(R, W, ie) {
    this.props = R, this.context = W, this.refs = S, this.updater = ie || g;
  }
  var D = A.prototype = new T();
  D.constructor = A, d(D, x.prototype), D.isPureReactComponent = !0;
  var C = Array.isArray, N = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function k(R, W, ie, le, F, fe) {
    return ie = fe.ref, {
      $$typeof: t,
      type: R,
      key: W,
      ref: ie !== void 0 ? ie : null,
      props: fe
    };
  }
  function H(R, W) {
    return k(
      R.type,
      W,
      void 0,
      void 0,
      void 0,
      R.props
    );
  }
  function X(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }
  function P(R) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ie) {
      return W[ie];
    });
  }
  var Y = /\/+/g;
  function K(R, W) {
    return typeof R == "object" && R !== null && R.key != null ? P("" + R.key) : W.toString(36);
  }
  function ue() {
  }
  function me(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(ue, ue) : (R.status = "pending", R.then(
          function(W) {
            R.status === "pending" && (R.status = "fulfilled", R.value = W);
          },
          function(W) {
            R.status === "pending" && (R.status = "rejected", R.reason = W);
          }
        )), R.status) {
          case "fulfilled":
            return R.value;
          case "rejected":
            throw R.reason;
        }
    }
    throw R;
  }
  function ve(R, W, ie, le, F) {
    var fe = typeof R;
    (fe === "undefined" || fe === "boolean") && (R = null);
    var G = !1;
    if (R === null) G = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case t:
            case r:
              G = !0;
              break;
            case y:
              return G = R._init, ve(
                G(R._payload),
                W,
                ie,
                le,
                F
              );
          }
      }
    if (G)
      return F = F(R), G = le === "" ? "." + K(R, 0) : le, C(F) ? (ie = "", G != null && (ie = G.replace(Y, "$&/") + "/"), ve(F, W, ie, "", function(Ce) {
        return Ce;
      })) : F != null && (X(F) && (F = H(
        F,
        ie + (F.key == null || R && R.key === F.key ? "" : ("" + F.key).replace(
          Y,
          "$&/"
        ) + "/") + G
      )), W.push(F)), 1;
    G = 0;
    var ae = le === "" ? "." : le + ":";
    if (C(R))
      for (var ce = 0; ce < R.length; ce++)
        le = R[ce], fe = ae + K(le, ce), G += ve(
          le,
          W,
          ie,
          fe,
          F
        );
    else if (ce = b(R), typeof ce == "function")
      for (R = ce.call(R), ce = 0; !(le = R.next()).done; )
        le = le.value, fe = ae + K(le, ce++), G += ve(
          le,
          W,
          ie,
          fe,
          F
        );
    else if (fe === "object") {
      if (typeof R.then == "function")
        return ve(
          me(R),
          W,
          ie,
          le,
          F
        );
      throw W = String(R), Error(
        "Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return G;
  }
  function B(R, W, ie) {
    if (R == null) return R;
    var le = [], F = 0;
    return ve(R, le, "", "", function(fe) {
      return W.call(ie, fe, F++);
    }), le;
  }
  function re(R) {
    if (R._status === -1) {
      var W = R._result;
      W = W(), W.then(
        function(ie) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ie);
        },
        function(ie) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ie);
        }
      ), R._status === -1 && (R._status = 0, R._result = W);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var pe = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var W = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(W)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  };
  function Re() {
  }
  return ze.Children = {
    map: B,
    forEach: function(R, W, ie) {
      B(
        R,
        function() {
          W.apply(this, arguments);
        },
        ie
      );
    },
    count: function(R) {
      var W = 0;
      return B(R, function() {
        W++;
      }), W;
    },
    toArray: function(R) {
      return B(R, function(W) {
        return W;
      }) || [];
    },
    only: function(R) {
      if (!X(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  }, ze.Component = x, ze.Fragment = i, ze.Profiler = o, ze.PureComponent = A, ze.StrictMode = s, ze.Suspense = h, ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, ze.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return N.H.useMemoCache(R);
    }
  }, ze.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, ze.cloneElement = function(R, W, ie) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var le = d({}, R.props), F = R.key, fe = void 0;
    if (W != null)
      for (G in W.ref !== void 0 && (fe = void 0), W.key !== void 0 && (F = "" + W.key), W)
        !M.call(W, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && W.ref === void 0 || (le[G] = W[G]);
    var G = arguments.length - 2;
    if (G === 1) le.children = ie;
    else if (1 < G) {
      for (var ae = Array(G), ce = 0; ce < G; ce++)
        ae[ce] = arguments[ce + 2];
      le.children = ae;
    }
    return k(R.type, F, void 0, void 0, fe, le);
  }, ze.createContext = function(R) {
    return R = {
      $$typeof: f,
      _currentValue: R,
      _currentValue2: R,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, R.Provider = R, R.Consumer = {
      $$typeof: u,
      _context: R
    }, R;
  }, ze.createElement = function(R, W, ie) {
    var le, F = {}, fe = null;
    if (W != null)
      for (le in W.key !== void 0 && (fe = "" + W.key), W)
        M.call(W, le) && le !== "key" && le !== "__self" && le !== "__source" && (F[le] = W[le]);
    var G = arguments.length - 2;
    if (G === 1) F.children = ie;
    else if (1 < G) {
      for (var ae = Array(G), ce = 0; ce < G; ce++)
        ae[ce] = arguments[ce + 2];
      F.children = ae;
    }
    if (R && R.defaultProps)
      for (le in G = R.defaultProps, G)
        F[le] === void 0 && (F[le] = G[le]);
    return k(R, fe, void 0, void 0, null, F);
  }, ze.createRef = function() {
    return { current: null };
  }, ze.forwardRef = function(R) {
    return { $$typeof: p, render: R };
  }, ze.isValidElement = X, ze.lazy = function(R) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: R },
      _init: re
    };
  }, ze.memo = function(R, W) {
    return {
      $$typeof: m,
      type: R,
      compare: W === void 0 ? null : W
    };
  }, ze.startTransition = function(R) {
    var W = N.T, ie = {};
    N.T = ie;
    try {
      var le = R(), F = N.S;
      F !== null && F(ie, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(Re, pe);
    } catch (fe) {
      pe(fe);
    } finally {
      N.T = W;
    }
  }, ze.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, ze.use = function(R) {
    return N.H.use(R);
  }, ze.useActionState = function(R, W, ie) {
    return N.H.useActionState(R, W, ie);
  }, ze.useCallback = function(R, W) {
    return N.H.useCallback(R, W);
  }, ze.useContext = function(R) {
    return N.H.useContext(R);
  }, ze.useDebugValue = function() {
  }, ze.useDeferredValue = function(R, W) {
    return N.H.useDeferredValue(R, W);
  }, ze.useEffect = function(R, W, ie) {
    var le = N.H;
    if (typeof ie == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return le.useEffect(R, W);
  }, ze.useId = function() {
    return N.H.useId();
  }, ze.useImperativeHandle = function(R, W, ie) {
    return N.H.useImperativeHandle(R, W, ie);
  }, ze.useInsertionEffect = function(R, W) {
    return N.H.useInsertionEffect(R, W);
  }, ze.useLayoutEffect = function(R, W) {
    return N.H.useLayoutEffect(R, W);
  }, ze.useMemo = function(R, W) {
    return N.H.useMemo(R, W);
  }, ze.useOptimistic = function(R, W) {
    return N.H.useOptimistic(R, W);
  }, ze.useReducer = function(R, W, ie) {
    return N.H.useReducer(R, W, ie);
  }, ze.useRef = function(R) {
    return N.H.useRef(R);
  }, ze.useState = function(R) {
    return N.H.useState(R);
  }, ze.useSyncExternalStore = function(R, W, ie) {
    return N.H.useSyncExternalStore(
      R,
      W,
      ie
    );
  }, ze.useTransition = function() {
    return N.H.useTransition();
  }, ze.version = "19.1.1", ze;
}
var lv;
function Yd() {
  return lv || (lv = 1, Vf.exports = d2()), Vf.exports;
}
var $ = Yd();
const fu = /* @__PURE__ */ r0($);
var Yf = { exports: {} }, Ps = {}, Xf = { exports: {} }, $f = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ov;
function h2() {
  return ov || (ov = 1, (function(t) {
    function r(B, re) {
      var pe = B.length;
      B.push(re);
      e: for (; 0 < pe; ) {
        var Re = pe - 1 >>> 1, R = B[Re];
        if (0 < o(R, re))
          B[Re] = re, B[pe] = R, pe = Re;
        else break e;
      }
    }
    function i(B) {
      return B.length === 0 ? null : B[0];
    }
    function s(B) {
      if (B.length === 0) return null;
      var re = B[0], pe = B.pop();
      if (pe !== re) {
        B[0] = pe;
        e: for (var Re = 0, R = B.length, W = R >>> 1; Re < W; ) {
          var ie = 2 * (Re + 1) - 1, le = B[ie], F = ie + 1, fe = B[F];
          if (0 > o(le, pe))
            F < R && 0 > o(fe, le) ? (B[Re] = fe, B[F] = pe, Re = F) : (B[Re] = le, B[ie] = pe, Re = ie);
          else if (F < R && 0 > o(fe, pe))
            B[Re] = fe, B[F] = pe, Re = F;
          else break e;
        }
      }
      return re;
    }
    function o(B, re) {
      var pe = B.sortIndex - re.sortIndex;
      return pe !== 0 ? pe : B.id - re.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, p = f.now();
      t.unstable_now = function() {
        return f.now() - p;
      };
    }
    var h = [], m = [], y = 1, _ = null, b = 3, g = !1, d = !1, S = !1, x = !1, T = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function C(B) {
      for (var re = i(m); re !== null; ) {
        if (re.callback === null) s(m);
        else if (re.startTime <= B)
          s(m), re.sortIndex = re.expirationTime, r(h, re);
        else break;
        re = i(m);
      }
    }
    function N(B) {
      if (S = !1, C(B), !d)
        if (i(h) !== null)
          d = !0, M || (M = !0, K());
        else {
          var re = i(m);
          re !== null && ve(N, re.startTime - B);
        }
    }
    var M = !1, k = -1, H = 5, X = -1;
    function P() {
      return x ? !0 : !(t.unstable_now() - X < H);
    }
    function Y() {
      if (x = !1, M) {
        var B = t.unstable_now();
        X = B;
        var re = !0;
        try {
          e: {
            d = !1, S && (S = !1, A(k), k = -1), g = !0;
            var pe = b;
            try {
              t: {
                for (C(B), _ = i(h); _ !== null && !(_.expirationTime > B && P()); ) {
                  var Re = _.callback;
                  if (typeof Re == "function") {
                    _.callback = null, b = _.priorityLevel;
                    var R = Re(
                      _.expirationTime <= B
                    );
                    if (B = t.unstable_now(), typeof R == "function") {
                      _.callback = R, C(B), re = !0;
                      break t;
                    }
                    _ === i(h) && s(h), C(B);
                  } else s(h);
                  _ = i(h);
                }
                if (_ !== null) re = !0;
                else {
                  var W = i(m);
                  W !== null && ve(
                    N,
                    W.startTime - B
                  ), re = !1;
                }
              }
              break e;
            } finally {
              _ = null, b = pe, g = !1;
            }
            re = void 0;
          }
        } finally {
          re ? K() : M = !1;
        }
      }
    }
    var K;
    if (typeof D == "function")
      K = function() {
        D(Y);
      };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), me = ue.port2;
      ue.port1.onmessage = Y, K = function() {
        me.postMessage(null);
      };
    } else
      K = function() {
        T(Y, 0);
      };
    function ve(B, re) {
      k = T(function() {
        B(t.unstable_now());
      }, re);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, t.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : H = 0 < B ? Math.floor(1e3 / B) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, t.unstable_next = function(B) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = b;
      }
      var pe = b;
      b = re;
      try {
        return B();
      } finally {
        b = pe;
      }
    }, t.unstable_requestPaint = function() {
      x = !0;
    }, t.unstable_runWithPriority = function(B, re) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var pe = b;
      b = B;
      try {
        return re();
      } finally {
        b = pe;
      }
    }, t.unstable_scheduleCallback = function(B, re, pe) {
      var Re = t.unstable_now();
      switch (typeof pe == "object" && pe !== null ? (pe = pe.delay, pe = typeof pe == "number" && 0 < pe ? Re + pe : Re) : pe = Re, B) {
        case 1:
          var R = -1;
          break;
        case 2:
          R = 250;
          break;
        case 5:
          R = 1073741823;
          break;
        case 4:
          R = 1e4;
          break;
        default:
          R = 5e3;
      }
      return R = pe + R, B = {
        id: y++,
        callback: re,
        priorityLevel: B,
        startTime: pe,
        expirationTime: R,
        sortIndex: -1
      }, pe > Re ? (B.sortIndex = pe, r(m, B), i(h) === null && B === i(m) && (S ? (A(k), k = -1) : S = !0, ve(N, pe - Re))) : (B.sortIndex = R, r(h, B), d || g || (d = !0, M || (M = !0, K()))), B;
    }, t.unstable_shouldYield = P, t.unstable_wrapCallback = function(B) {
      var re = b;
      return function() {
        var pe = b;
        b = re;
        try {
          return B.apply(this, arguments);
        } finally {
          b = pe;
        }
      };
    };
  })($f)), $f;
}
var uv;
function p2() {
  return uv || (uv = 1, Xf.exports = h2()), Xf.exports;
}
var Qf = { exports: {} }, Ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cv;
function m2() {
  if (cv) return Ht;
  cv = 1;
  var t = Yd();
  function r(h) {
    var m = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + h + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var s = {
    d: {
      f: i,
      r: function() {
        throw Error(r(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function u(h, m, y) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: _ == null ? null : "" + _,
      children: h,
      containerInfo: m,
      implementation: y
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, m) {
    if (h === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Ht.createPortal = function(h, m) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(r(299));
    return u(h, m, null, y);
  }, Ht.flushSync = function(h) {
    var m = f.T, y = s.p;
    try {
      if (f.T = null, s.p = 2, h) return h();
    } finally {
      f.T = m, s.p = y, s.d.f();
    }
  }, Ht.preconnect = function(h, m) {
    typeof h == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(h, m));
  }, Ht.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, Ht.preinit = function(h, m) {
    if (typeof h == "string" && m && typeof m.as == "string") {
      var y = m.as, _ = p(y, m.crossOrigin), b = typeof m.integrity == "string" ? m.integrity : void 0, g = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      y === "style" ? s.d.S(
        h,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: _,
          integrity: b,
          fetchPriority: g
        }
      ) : y === "script" && s.d.X(h, {
        crossOrigin: _,
        integrity: b,
        fetchPriority: g,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, Ht.preinitModule = function(h, m) {
    if (typeof h == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var y = p(
            m.as,
            m.crossOrigin
          );
          s.d.M(h, {
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && s.d.M(h);
  }, Ht.preload = function(h, m) {
    if (typeof h == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var y = m.as, _ = p(y, m.crossOrigin);
      s.d.L(h, y, {
        crossOrigin: _,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, Ht.preloadModule = function(h, m) {
    if (typeof h == "string")
      if (m) {
        var y = p(m.as, m.crossOrigin);
        s.d.m(h, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: y,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else s.d.m(h);
  }, Ht.requestFormReset = function(h) {
    s.d.r(h);
  }, Ht.unstable_batchedUpdates = function(h, m) {
    return h(m);
  }, Ht.useFormState = function(h, m, y) {
    return f.H.useFormState(h, m, y);
  }, Ht.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ht.version = "19.1.1", Ht;
}
var fv;
function a0() {
  if (fv) return Qf.exports;
  fv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Qf.exports = m2(), Qf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dv;
function g2() {
  if (dv) return Ps;
  dv = 1;
  var t = p2(), r = Yd(), i = a0();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
    var n = e, a = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (a = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? a : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (u(e) !== e)
      throw Error(s(188));
  }
  function h(e) {
    var n = e.alternate;
    if (!n) {
      if (n = u(e), n === null) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var a = e, l = n; ; ) {
      var c = a.return;
      if (c === null) break;
      var v = c.alternate;
      if (v === null) {
        if (l = c.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (c.child === v.child) {
        for (v = c.child; v; ) {
          if (v === a) return p(c), e;
          if (v === l) return p(c), n;
          v = v.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== l.return) a = c, l = v;
      else {
        for (var w = !1, O = c.child; O; ) {
          if (O === a) {
            w = !0, a = c, l = v;
            break;
          }
          if (O === l) {
            w = !0, l = c, a = v;
            break;
          }
          O = O.sibling;
        }
        if (!w) {
          for (O = v.child; O; ) {
            if (O === a) {
              w = !0, a = v, l = c;
              break;
            }
            if (O === l) {
              w = !0, l = v, a = c;
              break;
            }
            O = O.sibling;
          }
          if (!w) throw Error(s(189));
        }
      }
      if (a.alternate !== l) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : n;
  }
  function m(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = m(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, _ = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), A = Symbol.for("react.consumer"), D = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), P = Symbol.for("react.memo_cache_sentinel"), Y = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != "object" ? null : (e = Y && e[Y] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ue = Symbol.for("react.client.reference");
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ue ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case x:
        return "Profiler";
      case S:
        return "StrictMode";
      case N:
        return "Suspense";
      case M:
        return "SuspenseList";
      case X:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case g:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case A:
          return (e._context.displayName || "Context") + ".Consumer";
        case C:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return n = e.displayName || null, n !== null ? n : me(e.type) || "Memo";
        case H:
          n = e._payload, e = e._init;
          try {
            return me(e(n));
          } catch {
          }
      }
    return null;
  }
  var ve = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Re = [], R = -1;
  function W(e) {
    return { current: e };
  }
  function ie(e) {
    0 > R || (e.current = Re[R], Re[R] = null, R--);
  }
  function le(e, n) {
    R++, Re[R] = e.current, e.current = n;
  }
  var F = W(null), fe = W(null), G = W(null), ae = W(null);
  function ce(e, n) {
    switch (le(G, n), le(fe, e), le(F, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Ng(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Ng(n), e = Tg(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ie(F), le(F, e);
  }
  function Ce() {
    ie(F), ie(fe), ie(G);
  }
  function xe(e) {
    e.memoizedState !== null && le(ae, e);
    var n = F.current, a = Tg(n, e.type);
    n !== a && (le(fe, e), le(F, a));
  }
  function L(e) {
    fe.current === e && (ie(F), ie(fe)), ae.current === e && (ie(ae), Os._currentValue = pe);
  }
  var ne = Object.prototype.hasOwnProperty, se = t.unstable_scheduleCallback, ye = t.unstable_cancelCallback, Ye = t.unstable_shouldYield, Se = t.unstable_requestPaint, ke = t.unstable_now, Ze = t.unstable_getCurrentPriorityLevel, $e = t.unstable_ImmediatePriority, be = t.unstable_UserBlockingPriority, he = t.unstable_NormalPriority, Le = t.unstable_LowPriority, Ge = t.unstable_IdlePriority, it = t.log, Ar = t.unstable_setDisableYieldValue, tr = null, mt = null;
  function Fn(e) {
    if (typeof it == "function" && Ar(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(tr, e);
      } catch {
      }
  }
  var Zt = Math.clz32 ? Math.clz32 : sa, _n = Math.log, ia = Math.LN2;
  function sa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_n(e) / ia | 0) | 0;
  }
  var nr = 256, Zn = 4194304;
  function Sn(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Gt(e, n, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, v = e.suspendedLanes, w = e.pingedLanes;
    e = e.warmLanes;
    var O = l & 134217727;
    return O !== 0 ? (l = O & ~v, l !== 0 ? c = Sn(l) : (w &= O, w !== 0 ? c = Sn(w) : a || (a = O & ~e, a !== 0 && (c = Sn(a))))) : (O = l & ~v, O !== 0 ? c = Sn(O) : w !== 0 ? c = Sn(w) : a || (a = l & ~e, a !== 0 && (c = Sn(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & v) === 0 && (v = c & -c, a = n & -n, v >= a || v === 32 && (a & 4194048) !== 0) ? n : c;
  }
  function Qt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function ul(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ia() {
    var e = nr;
    return nr <<= 1, (nr & 4194048) === 0 && (nr = 256), e;
  }
  function fh() {
    var e = Zn;
    return Zn <<= 1, (Zn & 62914560) === 0 && (Zn = 4194304), e;
  }
  function ku(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Bi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function M1(e, n, a, l, c, v) {
    var w = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var O = e.entanglements, j = e.expirationTimes, q = e.hiddenUpdates;
    for (a = w & ~a; 0 < a; ) {
      var Q = 31 - Zt(a), ee = 1 << Q;
      O[Q] = 0, j[Q] = -1;
      var Z = q[Q];
      if (Z !== null)
        for (q[Q] = null, Q = 0; Q < Z.length; Q++) {
          var V = Z[Q];
          V !== null && (V.lane &= -536870913);
        }
      a &= ~ee;
    }
    l !== 0 && dh(e, l, 0), v !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= v & ~(w & ~n));
  }
  function dh(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - Zt(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function hh(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var l = 31 - Zt(a), c = 1 << l;
      c & n | e[l] & n && (e[l] |= n), a &= ~c;
    }
  }
  function ju(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ru(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ph() {
    var e = re.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Yg(e.type));
  }
  function k1(e, n) {
    var a = re.p;
    try {
      return re.p = e, n();
    } finally {
      re.p = a;
    }
  }
  var Nr = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Nr, Kt = "__reactProps$" + Nr, Ba = "__reactContainer$" + Nr, zu = "__reactEvents$" + Nr, j1 = "__reactListeners$" + Nr, R1 = "__reactHandles$" + Nr, mh = "__reactResources$" + Nr, Ui = "__reactMarker$" + Nr;
  function Lu(e) {
    delete e[Bt], delete e[Kt], delete e[zu], delete e[j1], delete e[R1];
  }
  function Ua(e) {
    var n = e[Bt];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ba] || a[Bt]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = kg(e); e !== null; ) {
            if (a = e[Bt]) return a;
            e = kg(e);
          }
        return n;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ha(e) {
    if (e = e[Bt] || e[Ba]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Hi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function qa(e) {
    var n = e[mh];
    return n || (n = e[mh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Dt(e) {
    e[Ui] = !0;
  }
  var gh = /* @__PURE__ */ new Set(), vh = {};
  function la(e, n) {
    Fa(e, n), Fa(e + "Capture", n);
  }
  function Fa(e, n) {
    for (vh[e] = n, e = 0; e < n.length; e++)
      gh.add(n[e]);
  }
  var z1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), yh = {}, bh = {};
  function L1(e) {
    return ne.call(bh, e) ? !0 : ne.call(yh, e) ? !1 : z1.test(e) ? bh[e] = !0 : (yh[e] = !0, !1);
  }
  function cl(e, n, a) {
    if (L1(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + a);
      }
  }
  function fl(e, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + a);
    }
  }
  function rr(e, n, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + l);
    }
  }
  var Pu, _h;
  function Za(e) {
    if (Pu === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        Pu = n && n[1] || "", _h = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Pu + e + _h;
  }
  var Iu = !1;
  function Bu(e, n) {
    if (!e || Iu) return "";
    Iu = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var ee = function() {
                throw Error();
              };
              if (Object.defineProperty(ee.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ee, []);
                } catch (V) {
                  var Z = V;
                }
                Reflect.construct(e, [], ee);
              } else {
                try {
                  ee.call();
                } catch (V) {
                  Z = V;
                }
                e.call(ee.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                Z = V;
              }
              (ee = e()) && typeof ee.catch == "function" && ee.catch(function() {
              });
            }
          } catch (V) {
            if (V && Z && typeof V.stack == "string")
              return [V.stack, Z.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var v = l.DetermineComponentFrameRoot(), w = v[0], O = v[1];
      if (w && O) {
        var j = w.split(`
`), q = O.split(`
`);
        for (c = l = 0; l < j.length && !j[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; c < q.length && !q[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (l === j.length || c === q.length)
          for (l = j.length - 1, c = q.length - 1; 1 <= l && 0 <= c && j[l] !== q[c]; )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (j[l] !== q[c]) {
            if (l !== 1 || c !== 1)
              do
                if (l--, c--, 0 > c || j[l] !== q[c]) {
                  var Q = `
` + j[l].replace(" at new ", " at ");
                  return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q;
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      Iu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Za(a) : "";
  }
  function P1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Za(e.type);
      case 16:
        return Za("Lazy");
      case 13:
        return Za("Suspense");
      case 19:
        return Za("SuspenseList");
      case 0:
      case 15:
        return Bu(e.type, !1);
      case 11:
        return Bu(e.type.render, !1);
      case 1:
        return Bu(e.type, !0);
      case 31:
        return Za("Activity");
      default:
        return "";
    }
  }
  function Sh(e) {
    try {
      var n = "";
      do
        n += P1(e), e = e.return;
      while (e);
      return n;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function xn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function xh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function I1(e) {
    var n = xh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), l = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var c = a.get, v = a.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(w) {
          l = "" + w, v.call(this, w);
        }
      }), Object.defineProperty(e, n, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(w) {
          l = "" + w;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function dl(e) {
    e._valueTracker || (e._valueTracker = I1(e));
  }
  function Eh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(), l = "";
    return e && (l = xh(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (n.setValue(e), !0) : !1;
  }
  function hl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var B1 = /[\n"\\]/g;
  function En(e) {
    return e.replace(
      B1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Uu(e, n, a, l, c, v, w, O) {
    e.name = "", w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.type = w : e.removeAttribute("type"), n != null ? w === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + xn(n)) : e.value !== "" + xn(n) && (e.value = "" + xn(n)) : w !== "submit" && w !== "reset" || e.removeAttribute("value"), n != null ? Hu(e, w, xn(n)) : a != null ? Hu(e, w, xn(a)) : l != null && e.removeAttribute("value"), c == null && v != null && (e.defaultChecked = !!v), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? e.name = "" + xn(O) : e.removeAttribute("name");
  }
  function Ch(e, n, a, l, c, v, w, O) {
    if (v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.type = v), n != null || a != null) {
      if (!(v !== "submit" && v !== "reset" || n != null))
        return;
      a = a != null ? "" + xn(a) : "", n = n != null ? "" + xn(n) : a, O || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = O ? e.checked : !!l, e.defaultChecked = !!l, w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" && (e.name = w);
  }
  function Hu(e, n, a) {
    n === "number" && hl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ga(e, n, a, l) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < a.length; c++)
        n["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        c = n.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + xn(a), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, l && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function wh(e, n, a) {
    if (n != null && (n = "" + xn(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + xn(a) : "";
  }
  function Ah(e, n, a, l) {
    if (n == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (ve(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), n = a;
    }
    a = xn(n), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l);
  }
  function Va(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var U1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nh(e, n, a) {
    var l = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, a) : typeof a != "number" || a === 0 || U1.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
  }
  function Th(e, n, a) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var c in n)
        l = n[c], n.hasOwnProperty(c) && a[c] !== l && Nh(e, c, l);
    } else
      for (var v in n)
        n.hasOwnProperty(v) && Nh(e, v, n[v]);
  }
  function qu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var H1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), q1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pl(e) {
    return q1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Fu = null;
  function Zu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ya = null, Xa = null;
  function Oh(e) {
    var n = Ha(e);
    if (n && (e = n.stateNode)) {
      var a = e[Kt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Uu(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), n = a.name, a.type === "radio" && n != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + En(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < a.length; n++) {
              var l = a[n];
              if (l !== e && l.form === e.form) {
                var c = l[Kt] || null;
                if (!c) throw Error(s(90));
                Uu(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (n = 0; n < a.length; n++)
              l = a[n], l.form === e.form && Eh(l);
          }
          break e;
        case "textarea":
          wh(e, a.value, a.defaultValue);
          break e;
        case "select":
          n = a.value, n != null && Ga(e, !!a.multiple, n, !1);
      }
    }
  }
  var Gu = !1;
  function Dh(e, n, a) {
    if (Gu) return e(n, a);
    Gu = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (Gu = !1, (Ya !== null || Xa !== null) && (Wl(), Ya && (n = Ya, e = Xa, Xa = Ya = null, Oh(n), e)))
        for (n = 0; n < e.length; n++) Oh(e[n]);
    }
  }
  function qi(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Kt] || null;
    if (l === null) return null;
    a = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        s(231, n, typeof a)
      );
    return a;
  }
  var ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vu = !1;
  if (ar)
    try {
      var Fi = {};
      Object.defineProperty(Fi, "passive", {
        get: function() {
          Vu = !0;
        }
      }), window.addEventListener("test", Fi, Fi), window.removeEventListener("test", Fi, Fi);
    } catch {
      Vu = !1;
    }
  var Tr = null, Yu = null, ml = null;
  function Mh() {
    if (ml) return ml;
    var e, n = Yu, a = n.length, l, c = "value" in Tr ? Tr.value : Tr.textContent, v = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var w = a - e;
    for (l = 1; l <= w && n[a - l] === c[v - l]; l++) ;
    return ml = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function gl(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vl() {
    return !0;
  }
  function kh() {
    return !1;
  }
  function Jt(e) {
    function n(a, l, c, v, w) {
      this._reactName = a, this._targetInst = c, this.type = l, this.nativeEvent = v, this.target = w, this.currentTarget = null;
      for (var O in e)
        e.hasOwnProperty(O) && (a = e[O], this[O] = a ? a(v) : v[O]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? vl : kh, this.isPropagationStopped = kh, this;
    }
    return y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = vl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = vl);
      },
      persist: function() {
      },
      isPersistent: vl
    }), n;
  }
  var oa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, yl = Jt(oa), Zi = y({}, oa, { view: 0, detail: 0 }), F1 = Jt(Zi), Xu, $u, Gi, bl = y({}, Zi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ku,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Gi && (Gi && e.type === "mousemove" ? (Xu = e.screenX - Gi.screenX, $u = e.screenY - Gi.screenY) : $u = Xu = 0, Gi = e), Xu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : $u;
    }
  }), jh = Jt(bl), Z1 = y({}, bl, { dataTransfer: 0 }), G1 = Jt(Z1), V1 = y({}, Zi, { relatedTarget: 0 }), Qu = Jt(V1), Y1 = y({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), X1 = Jt(Y1), $1 = y({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Q1 = Jt($1), K1 = y({}, oa, { data: 0 }), Rh = Jt(K1), J1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, W1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, eb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function tb(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = eb[e]) ? !!n[e] : !1;
  }
  function Ku() {
    return tb;
  }
  var nb = y({}, Zi, {
    key: function(e) {
      if (e.key) {
        var n = J1[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? W1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ku,
    charCode: function(e) {
      return e.type === "keypress" ? gl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), rb = Jt(nb), ab = y({}, bl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), zh = Jt(ab), ib = y({}, Zi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ku
  }), sb = Jt(ib), lb = y({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ob = Jt(lb), ub = y({}, bl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), cb = Jt(ub), fb = y({}, oa, {
    newState: 0,
    oldState: 0
  }), db = Jt(fb), hb = [9, 13, 27, 32], Ju = ar && "CompositionEvent" in window, Vi = null;
  ar && "documentMode" in document && (Vi = document.documentMode);
  var pb = ar && "TextEvent" in window && !Vi, Lh = ar && (!Ju || Vi && 8 < Vi && 11 >= Vi), Ph = " ", Ih = !1;
  function Bh(e, n) {
    switch (e) {
      case "keyup":
        return hb.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Uh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $a = !1;
  function mb(e, n) {
    switch (e) {
      case "compositionend":
        return Uh(n);
      case "keypress":
        return n.which !== 32 ? null : (Ih = !0, Ph);
      case "textInput":
        return e = n.data, e === Ph && Ih ? null : e;
      default:
        return null;
    }
  }
  function gb(e, n) {
    if ($a)
      return e === "compositionend" || !Ju && Bh(e, n) ? (e = Mh(), ml = Yu = Tr = null, $a = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Lh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var vb = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Hh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!vb[e.type] : n === "textarea";
  }
  function qh(e, n, a, l) {
    Ya ? Xa ? Xa.push(l) : Xa = [l] : Ya = l, n = io(n, "onChange"), 0 < n.length && (a = new yl(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: n }));
  }
  var Yi = null, Xi = null;
  function yb(e) {
    xg(e, 0);
  }
  function _l(e) {
    var n = Hi(e);
    if (Eh(n)) return e;
  }
  function Fh(e, n) {
    if (e === "change") return n;
  }
  var Zh = !1;
  if (ar) {
    var Wu;
    if (ar) {
      var ec = "oninput" in document;
      if (!ec) {
        var Gh = document.createElement("div");
        Gh.setAttribute("oninput", "return;"), ec = typeof Gh.oninput == "function";
      }
      Wu = ec;
    } else Wu = !1;
    Zh = Wu && (!document.documentMode || 9 < document.documentMode);
  }
  function Vh() {
    Yi && (Yi.detachEvent("onpropertychange", Yh), Xi = Yi = null);
  }
  function Yh(e) {
    if (e.propertyName === "value" && _l(Xi)) {
      var n = [];
      qh(
        n,
        Xi,
        e,
        Zu(e)
      ), Dh(yb, n);
    }
  }
  function bb(e, n, a) {
    e === "focusin" ? (Vh(), Yi = n, Xi = a, Yi.attachEvent("onpropertychange", Yh)) : e === "focusout" && Vh();
  }
  function _b(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return _l(Xi);
  }
  function Sb(e, n) {
    if (e === "click") return _l(n);
  }
  function xb(e, n) {
    if (e === "input" || e === "change")
      return _l(n);
  }
  function Eb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var on = typeof Object.is == "function" ? Object.is : Eb;
  function $i(e, n) {
    if (on(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(n);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var c = a[l];
      if (!ne.call(n, c) || !on(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function Xh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $h(e, n) {
    var a = Xh(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= n && l >= n)
          return { node: a, offset: n - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Xh(a);
    }
  }
  function Qh(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Qh(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Kh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = hl(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = hl(e.document);
    }
    return n;
  }
  function tc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Cb = ar && "documentMode" in document && 11 >= document.documentMode, Qa = null, nc = null, Qi = null, rc = !1;
  function Jh(e, n, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    rc || Qa == null || Qa !== hl(l) || (l = Qa, "selectionStart" in l && tc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Qi && $i(Qi, l) || (Qi = l, l = io(nc, "onSelect"), 0 < l.length && (n = new yl(
      "onSelect",
      "select",
      null,
      n,
      a
    ), e.push({ event: n, listeners: l }), n.target = Qa)));
  }
  function ua(e, n) {
    var a = {};
    return a[e.toLowerCase()] = n.toLowerCase(), a["Webkit" + e] = "webkit" + n, a["Moz" + e] = "moz" + n, a;
  }
  var Ka = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, ac = {}, Wh = {};
  ar && (Wh = document.createElement("div").style, "AnimationEvent" in window || (delete Ka.animationend.animation, delete Ka.animationiteration.animation, delete Ka.animationstart.animation), "TransitionEvent" in window || delete Ka.transitionend.transition);
  function ca(e) {
    if (ac[e]) return ac[e];
    if (!Ka[e]) return e;
    var n = Ka[e], a;
    for (a in n)
      if (n.hasOwnProperty(a) && a in Wh)
        return ac[e] = n[a];
    return e;
  }
  var ep = ca("animationend"), tp = ca("animationiteration"), np = ca("animationstart"), wb = ca("transitionrun"), Ab = ca("transitionstart"), Nb = ca("transitioncancel"), rp = ca("transitionend"), ap = /* @__PURE__ */ new Map(), ic = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ic.push("scrollEnd");
  function zn(e, n) {
    ap.set(e, n), la(n, [e]);
  }
  var ip = /* @__PURE__ */ new WeakMap();
  function Cn(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = ip.get(e);
      return a !== void 0 ? a : (n = {
        value: e,
        source: n,
        stack: Sh(n)
      }, ip.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Sh(n)
    };
  }
  var wn = [], Ja = 0, sc = 0;
  function Sl() {
    for (var e = Ja, n = sc = Ja = 0; n < e; ) {
      var a = wn[n];
      wn[n++] = null;
      var l = wn[n];
      wn[n++] = null;
      var c = wn[n];
      wn[n++] = null;
      var v = wn[n];
      if (wn[n++] = null, l !== null && c !== null) {
        var w = l.pending;
        w === null ? c.next = c : (c.next = w.next, w.next = c), l.pending = c;
      }
      v !== 0 && sp(a, c, v);
    }
  }
  function xl(e, n, a, l) {
    wn[Ja++] = e, wn[Ja++] = n, wn[Ja++] = a, wn[Ja++] = l, sc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function lc(e, n, a, l) {
    return xl(e, n, a, l), El(e);
  }
  function Wa(e, n) {
    return xl(e, null, null, n), El(e);
  }
  function sp(e, n, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var c = !1, v = e.return; v !== null; )
      v.childLanes |= a, l = v.alternate, l !== null && (l.childLanes |= a), v.tag === 22 && (e = v.stateNode, e === null || e._visibility & 1 || (c = !0)), e = v, v = v.return;
    return e.tag === 3 ? (v = e.stateNode, c && n !== null && (c = 31 - Zt(a), e = v.hiddenUpdates, l = e[c], l === null ? e[c] = [n] : l.push(n), n.lane = a | 536870912), v) : null;
  }
  function El(e) {
    if (50 < Ss)
      throw Ss = 0, pf = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ei = {};
  function Tb(e, n, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function un(e, n, a, l) {
    return new Tb(e, n, a, l);
  }
  function oc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ir(e, n) {
    var a = e.alternate;
    return a === null ? (a = un(
      e.tag,
      n,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = n, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, n = e.dependencies, a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function lp(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Cl(e, n, a, l, c, v) {
    var w = 0;
    if (l = e, typeof e == "function") oc(e) && (w = 1);
    else if (typeof e == "string")
      w = D_(
        e,
        a,
        F.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case X:
          return e = un(31, a, n, c), e.elementType = X, e.lanes = v, e;
        case d:
          return fa(a.children, c, v, n);
        case S:
          w = 8, c |= 24;
          break;
        case x:
          return e = un(12, a, n, c | 2), e.elementType = x, e.lanes = v, e;
        case N:
          return e = un(13, a, n, c), e.elementType = N, e.lanes = v, e;
        case M:
          return e = un(19, a, n, c), e.elementType = M, e.lanes = v, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case D:
                w = 10;
                break e;
              case A:
                w = 9;
                break e;
              case C:
                w = 11;
                break e;
              case k:
                w = 14;
                break e;
              case H:
                w = 16, l = null;
                break e;
            }
          w = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return n = un(w, a, n, c), n.elementType = e, n.type = l, n.lanes = v, n;
  }
  function fa(e, n, a, l) {
    return e = un(7, e, l, n), e.lanes = a, e;
  }
  function uc(e, n, a) {
    return e = un(6, e, null, n), e.lanes = a, e;
  }
  function cc(e, n, a) {
    return n = un(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = a, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var ti = [], ni = 0, wl = null, Al = 0, An = [], Nn = 0, da = null, sr = 1, lr = "";
  function ha(e, n) {
    ti[ni++] = Al, ti[ni++] = wl, wl = e, Al = n;
  }
  function op(e, n, a) {
    An[Nn++] = sr, An[Nn++] = lr, An[Nn++] = da, da = e;
    var l = sr;
    e = lr;
    var c = 32 - Zt(l) - 1;
    l &= ~(1 << c), a += 1;
    var v = 32 - Zt(n) + c;
    if (30 < v) {
      var w = c - c % 5;
      v = (l & (1 << w) - 1).toString(32), l >>= w, c -= w, sr = 1 << 32 - Zt(n) + c | a << c | l, lr = v + e;
    } else
      sr = 1 << v | a << c | l, lr = e;
  }
  function fc(e) {
    e.return !== null && (ha(e, 1), op(e, 1, 0));
  }
  function dc(e) {
    for (; e === wl; )
      wl = ti[--ni], ti[ni] = null, Al = ti[--ni], ti[ni] = null;
    for (; e === da; )
      da = An[--Nn], An[Nn] = null, lr = An[--Nn], An[Nn] = null, sr = An[--Nn], An[Nn] = null;
  }
  var Vt = null, dt = null, Xe = !1, pa = null, Gn = !1, hc = Error(s(519));
  function ma(e) {
    var n = Error(s(418, ""));
    throw Wi(Cn(n, e)), hc;
  }
  function up(e) {
    var n = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (n[Bt] = e, n[Kt] = l, a) {
      case "dialog":
        Ue("cancel", n), Ue("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ue("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Es.length; a++)
          Ue(Es[a], n);
        break;
      case "source":
        Ue("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ue("error", n), Ue("load", n);
        break;
      case "details":
        Ue("toggle", n);
        break;
      case "input":
        Ue("invalid", n), Ch(
          n,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), dl(n);
        break;
      case "select":
        Ue("invalid", n);
        break;
      case "textarea":
        Ue("invalid", n), Ah(n, l.value, l.defaultValue, l.children), dl(n);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || l.suppressHydrationWarning === !0 || Ag(n.textContent, a) ? (l.popover != null && (Ue("beforetoggle", n), Ue("toggle", n)), l.onScroll != null && Ue("scroll", n), l.onScrollEnd != null && Ue("scrollend", n), l.onClick != null && (n.onclick = so), n = !0) : n = !1, n || ma(e);
  }
  function cp(e) {
    for (Vt = e.return; Vt; )
      switch (Vt.tag) {
        case 5:
        case 13:
          Gn = !1;
          return;
        case 27:
        case 3:
          Gn = !0;
          return;
        default:
          Vt = Vt.return;
      }
  }
  function Ki(e) {
    if (e !== Vt) return !1;
    if (!Xe) return cp(e), Xe = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Df(e.type, e.memoizedProps)), a = !a), a && dt && ma(e), cp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (n === 0) {
                dt = Pn(e.nextSibling);
                break e;
              }
              n--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || n++;
          e = e.nextSibling;
        }
        dt = null;
      }
    } else
      n === 27 ? (n = dt, Zr(e.type) ? (e = Rf, Rf = null, dt = e) : dt = n) : dt = Vt ? Pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ji() {
    dt = Vt = null, Xe = !1;
  }
  function fp() {
    var e = pa;
    return e !== null && (tn === null ? tn = e : tn.push.apply(
      tn,
      e
    ), pa = null), e;
  }
  function Wi(e) {
    pa === null ? pa = [e] : pa.push(e);
  }
  var pc = W(null), ga = null, or = null;
  function Or(e, n, a) {
    le(pc, n._currentValue), n._currentValue = a;
  }
  function ur(e) {
    e._currentValue = pc.current, ie(pc);
  }
  function mc(e, n, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === a) break;
      e = e.return;
    }
  }
  function gc(e, n, a, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var v = c.dependencies;
      if (v !== null) {
        var w = c.child;
        v = v.firstContext;
        e: for (; v !== null; ) {
          var O = v;
          v = c;
          for (var j = 0; j < n.length; j++)
            if (O.context === n[j]) {
              v.lanes |= a, O = v.alternate, O !== null && (O.lanes |= a), mc(
                v.return,
                a,
                e
              ), l || (w = null);
              break e;
            }
          v = O.next;
        }
      } else if (c.tag === 18) {
        if (w = c.return, w === null) throw Error(s(341));
        w.lanes |= a, v = w.alternate, v !== null && (v.lanes |= a), mc(w, a, e), w = null;
      } else w = c.child;
      if (w !== null) w.return = c;
      else
        for (w = c; w !== null; ) {
          if (w === e) {
            w = null;
            break;
          }
          if (c = w.sibling, c !== null) {
            c.return = w.return, w = c;
            break;
          }
          w = w.return;
        }
      c = w;
    }
  }
  function es(e, n, a, l) {
    e = null;
    for (var c = n, v = !1; c !== null; ) {
      if (!v) {
        if ((c.flags & 524288) !== 0) v = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var w = c.alternate;
        if (w === null) throw Error(s(387));
        if (w = w.memoizedProps, w !== null) {
          var O = c.type;
          on(c.pendingProps.value, w.value) || (e !== null ? e.push(O) : e = [O]);
        }
      } else if (c === ae.current) {
        if (w = c.alternate, w === null) throw Error(s(387));
        w.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Os) : e = [Os]);
      }
      c = c.return;
    }
    e !== null && gc(
      n,
      e,
      a,
      l
    ), n.flags |= 262144;
  }
  function Nl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!on(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function va(e) {
    ga = e, or = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ut(e) {
    return dp(ga, e);
  }
  function Tl(e, n) {
    return ga === null && va(e), dp(e, n);
  }
  function dp(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, or === null) {
      if (e === null) throw Error(s(308));
      or = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else or = or.next = n;
    return a;
  }
  var Ob = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, Db = t.unstable_scheduleCallback, Mb = t.unstable_NormalPriority, At = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function vc() {
    return {
      controller: new Ob(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ts(e) {
    e.refCount--, e.refCount === 0 && Db(Mb, function() {
      e.controller.abort();
    });
  }
  var ns = null, yc = 0, ri = 0, ai = null;
  function kb(e, n) {
    if (ns === null) {
      var a = ns = [];
      yc = 0, ri = Sf(), ai = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return yc++, n.then(hp, hp), n;
  }
  function hp() {
    if (--yc === 0 && ns !== null) {
      ai !== null && (ai.status = "fulfilled");
      var e = ns;
      ns = null, ri = 0, ai = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function jb(e, n) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        a.push(c);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = n;
        for (var c = 0; c < a.length; c++) (0, a[c])(n);
      },
      function(c) {
        for (l.status = "rejected", l.reason = c, c = 0; c < a.length; c++)
          (0, a[c])(void 0);
      }
    ), l;
  }
  var pp = B.S;
  B.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && kb(e, n), pp !== null && pp(e, n);
  };
  var ya = W(null);
  function bc() {
    var e = ya.current;
    return e !== null ? e : rt.pooledCache;
  }
  function Ol(e, n) {
    n === null ? le(ya, ya.current) : le(ya, n.pool);
  }
  function mp() {
    var e = bc();
    return e === null ? null : { parent: At._currentValue, pool: e };
  }
  var rs = Error(s(460)), gp = Error(s(474)), Dl = Error(s(542)), _c = { then: function() {
  } };
  function vp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Ml() {
  }
  function yp(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(Ml, Ml), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, _p(e), e;
      default:
        if (typeof n.status == "string") n.then(Ml, Ml);
        else {
          if (e = rt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = n, e.status = "pending", e.then(
            function(l) {
              if (n.status === "pending") {
                var c = n;
                c.status = "fulfilled", c.value = l;
              }
            },
            function(l) {
              if (n.status === "pending") {
                var c = n;
                c.status = "rejected", c.reason = l;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, _p(e), e;
        }
        throw as = n, rs;
    }
  }
  var as = null;
  function bp() {
    if (as === null) throw Error(s(459));
    var e = as;
    return as = null, e;
  }
  function _p(e) {
    if (e === rs || e === Dl)
      throw Error(s(483));
  }
  var Dr = !1;
  function Sc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Mr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function kr(e, n, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Qe & 2) !== 0) {
      var c = l.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), l.pending = n, n = El(e), sp(e, null, a), n;
    }
    return xl(e, l, n, a), El(e);
  }
  function is(e, n, a) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, a |= l, n.lanes = a, hh(e, a);
    }
  }
  function Ec(e, n) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var c = null, v = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var w = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          v === null ? c = v = w : v = v.next = w, a = a.next;
        } while (a !== null);
        v === null ? c = v = n : v = v.next = n;
      } else c = v = n;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: v,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = n : e.next = n, a.lastBaseUpdate = n;
  }
  var Cc = !1;
  function ss() {
    if (Cc) {
      var e = ai;
      if (e !== null) throw e;
    }
  }
  function ls(e, n, a, l) {
    Cc = !1;
    var c = e.updateQueue;
    Dr = !1;
    var v = c.firstBaseUpdate, w = c.lastBaseUpdate, O = c.shared.pending;
    if (O !== null) {
      c.shared.pending = null;
      var j = O, q = j.next;
      j.next = null, w === null ? v = q : w.next = q, w = j;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, O = Q.lastBaseUpdate, O !== w && (O === null ? Q.firstBaseUpdate = q : O.next = q, Q.lastBaseUpdate = j));
    }
    if (v !== null) {
      var ee = c.baseState;
      w = 0, Q = q = j = null, O = v;
      do {
        var Z = O.lane & -536870913, V = Z !== O.lane;
        if (V ? (Fe & Z) === Z : (l & Z) === Z) {
          Z !== 0 && Z === ri && (Cc = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: null,
            next: null
          });
          e: {
            var Te = e, we = O;
            Z = n;
            var et = a;
            switch (we.tag) {
              case 1:
                if (Te = we.payload, typeof Te == "function") {
                  ee = Te.call(et, ee, Z);
                  break e;
                }
                ee = Te;
                break e;
              case 3:
                Te.flags = Te.flags & -65537 | 128;
              case 0:
                if (Te = we.payload, Z = typeof Te == "function" ? Te.call(et, ee, Z) : Te, Z == null) break e;
                ee = y({}, ee, Z);
                break e;
              case 2:
                Dr = !0;
            }
          }
          Z = O.callback, Z !== null && (e.flags |= 64, V && (e.flags |= 8192), V = c.callbacks, V === null ? c.callbacks = [Z] : V.push(Z));
        } else
          V = {
            lane: Z,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          }, Q === null ? (q = Q = V, j = ee) : Q = Q.next = V, w |= Z;
        if (O = O.next, O === null) {
          if (O = c.shared.pending, O === null)
            break;
          V = O, O = V.next, V.next = null, c.lastBaseUpdate = V, c.shared.pending = null;
        }
      } while (!0);
      Q === null && (j = ee), c.baseState = j, c.firstBaseUpdate = q, c.lastBaseUpdate = Q, v === null && (c.shared.lanes = 0), Ur |= w, e.lanes = w, e.memoizedState = ee;
    }
  }
  function Sp(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function xp(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Sp(a[e], n);
  }
  var ii = W(null), kl = W(0);
  function Ep(e, n) {
    e = gr, le(kl, e), le(ii, n), gr = e | n.baseLanes;
  }
  function wc() {
    le(kl, gr), le(ii, ii.current);
  }
  function Ac() {
    gr = kl.current, ie(ii), ie(kl);
  }
  var jr = 0, Pe = null, Je = null, _t = null, jl = !1, si = !1, ba = !1, Rl = 0, os = 0, li = null, Rb = 0;
  function gt() {
    throw Error(s(321));
  }
  function Nc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!on(e[a], n[a])) return !1;
    return !0;
  }
  function Tc(e, n, a, l, c, v) {
    return jr = v, Pe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, B.H = e === null || e.memoizedState === null ? sm : lm, ba = !1, v = a(l, c), ba = !1, si && (v = wp(
      n,
      a,
      l,
      c
    )), Cp(e), v;
  }
  function Cp(e) {
    B.H = Ul;
    var n = Je !== null && Je.next !== null;
    if (jr = 0, _t = Je = Pe = null, jl = !1, os = 0, li = null, n) throw Error(s(300));
    e === null || Mt || (e = e.dependencies, e !== null && Nl(e) && (Mt = !0));
  }
  function wp(e, n, a, l) {
    Pe = e;
    var c = 0;
    do {
      if (si && (li = null), os = 0, si = !1, 25 <= c) throw Error(s(301));
      if (c += 1, _t = Je = null, e.updateQueue != null) {
        var v = e.updateQueue;
        v.lastEffect = null, v.events = null, v.stores = null, v.memoCache != null && (v.memoCache.index = 0);
      }
      B.H = Hb, v = n(a, l);
    } while (si);
    return v;
  }
  function zb() {
    var e = B.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? us(n) : n, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (Pe.flags |= 1024), n;
  }
  function Oc() {
    var e = Rl !== 0;
    return Rl = 0, e;
  }
  function Dc(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function Mc(e) {
    if (jl) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      jl = !1;
    }
    jr = 0, _t = Je = Pe = null, si = !1, os = Rl = 0, li = null;
  }
  function Wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return _t === null ? Pe.memoizedState = _t = e : _t = _t.next = e, _t;
  }
  function St() {
    if (Je === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var n = _t === null ? Pe.memoizedState : _t.next;
    if (n !== null)
      _t = n, Je = e;
    else {
      if (e === null)
        throw Pe.alternate === null ? Error(s(467)) : Error(s(310));
      Je = e, e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null
      }, _t === null ? Pe.memoizedState = _t = e : _t = _t.next = e;
    }
    return _t;
  }
  function kc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function us(e) {
    var n = os;
    return os += 1, li === null && (li = []), e = yp(li, e, n), n = Pe, (_t === null ? n.memoizedState : _t.next) === null && (n = n.alternate, B.H = n === null || n.memoizedState === null ? sm : lm), e;
  }
  function zl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return us(e);
      if (e.$$typeof === D) return Ut(e);
    }
    throw Error(s(438, String(e)));
  }
  function jc(e) {
    var n = null, a = Pe.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var l = Pe.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = kc(), Pe.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), l = 0; l < e; l++)
        a[l] = P;
    return n.index++, a;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ll(e) {
    var n = St();
    return Rc(n, Je, e);
  }
  function Rc(e, n, a) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var c = e.baseQueue, v = l.pending;
    if (v !== null) {
      if (c !== null) {
        var w = c.next;
        c.next = v.next, v.next = w;
      }
      n.baseQueue = c = v, l.pending = null;
    }
    if (v = e.baseState, c === null) e.memoizedState = v;
    else {
      n = c.next;
      var O = w = null, j = null, q = n, Q = !1;
      do {
        var ee = q.lane & -536870913;
        if (ee !== q.lane ? (Fe & ee) === ee : (jr & ee) === ee) {
          var Z = q.revertLane;
          if (Z === 0)
            j !== null && (j = j.next = {
              lane: 0,
              revertLane: 0,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), ee === ri && (Q = !0);
          else if ((jr & Z) === Z) {
            q = q.next, Z === ri && (Q = !0);
            continue;
          } else
            ee = {
              lane: 0,
              revertLane: q.revertLane,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, j === null ? (O = j = ee, w = v) : j = j.next = ee, Pe.lanes |= Z, Ur |= Z;
          ee = q.action, ba && a(v, ee), v = q.hasEagerState ? q.eagerState : a(v, ee);
        } else
          Z = {
            lane: ee,
            revertLane: q.revertLane,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, j === null ? (O = j = Z, w = v) : j = j.next = Z, Pe.lanes |= ee, Ur |= ee;
        q = q.next;
      } while (q !== null && q !== n);
      if (j === null ? w = v : j.next = O, !on(v, e.memoizedState) && (Mt = !0, Q && (a = ai, a !== null)))
        throw a;
      e.memoizedState = v, e.baseState = w, e.baseQueue = j, l.lastRenderedState = v;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function zc(e) {
    var n = St(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, c = a.pending, v = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var w = c = c.next;
      do
        v = e(v, w.action), w = w.next;
      while (w !== c);
      on(v, n.memoizedState) || (Mt = !0), n.memoizedState = v, n.baseQueue === null && (n.baseState = v), a.lastRenderedState = v;
    }
    return [v, l];
  }
  function Ap(e, n, a) {
    var l = Pe, c = St(), v = Xe;
    if (v) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var w = !on(
      (Je || c).memoizedState,
      a
    );
    w && (c.memoizedState = a, Mt = !0), c = c.queue;
    var O = Op.bind(null, l, c, e);
    if (cs(2048, 8, O, [e]), c.getSnapshot !== n || w || _t !== null && _t.memoizedState.tag & 1) {
      if (l.flags |= 2048, oi(
        9,
        Pl(),
        Tp.bind(
          null,
          l,
          c,
          a,
          n
        ),
        null
      ), rt === null) throw Error(s(349));
      v || (jr & 124) !== 0 || Np(l, n, a);
    }
    return a;
  }
  function Np(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = Pe.updateQueue, n === null ? (n = kc(), Pe.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function Tp(e, n, a, l) {
    n.value = a, n.getSnapshot = l, Dp(n) && Mp(e);
  }
  function Op(e, n, a) {
    return a(function() {
      Dp(n) && Mp(e);
    });
  }
  function Dp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !on(e, a);
    } catch {
      return !0;
    }
  }
  function Mp(e) {
    var n = Wa(e, 2);
    n !== null && pn(n, e, 2);
  }
  function Lc(e) {
    var n = Wt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ba) {
        Fn(!0);
        try {
          a();
        } finally {
          Fn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e
    }, n;
  }
  function kp(e, n, a, l) {
    return e.baseState = a, Rc(
      e,
      Je,
      typeof l == "function" ? l : cr
    );
  }
  function Lb(e, n, a, l, c) {
    if (Bl(e)) throw Error(s(485));
    if (e = n.action, e !== null) {
      var v = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(w) {
          v.listeners.push(w);
        }
      };
      B.T !== null ? a(!0) : v.isTransition = !1, l(v), a = n.pending, a === null ? (v.next = n.pending = v, jp(n, v)) : (v.next = a.next, n.pending = a.next = v);
    }
  }
  function jp(e, n) {
    var a = n.action, l = n.payload, c = e.state;
    if (n.isTransition) {
      var v = B.T, w = {};
      B.T = w;
      try {
        var O = a(c, l), j = B.S;
        j !== null && j(w, O), Rp(e, n, O);
      } catch (q) {
        Pc(e, n, q);
      } finally {
        B.T = v;
      }
    } else
      try {
        v = a(c, l), Rp(e, n, v);
      } catch (q) {
        Pc(e, n, q);
      }
  }
  function Rp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        zp(e, n, l);
      },
      function(l) {
        return Pc(e, n, l);
      }
    ) : zp(e, n, a);
  }
  function zp(e, n, a) {
    n.status = "fulfilled", n.value = a, Lp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, jp(e, a)));
  }
  function Pc(e, n, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = a, Lp(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function Lp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Pp(e, n) {
    return n;
  }
  function Ip(e, n) {
    if (Xe) {
      var a = rt.formState;
      if (a !== null) {
        e: {
          var l = Pe;
          if (Xe) {
            if (dt) {
              t: {
                for (var c = dt, v = Gn; c.nodeType !== 8; ) {
                  if (!v) {
                    c = null;
                    break t;
                  }
                  if (c = Pn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                v = c.data, c = v === "F!" || v === "F" ? c : null;
              }
              if (c) {
                dt = Pn(
                  c.nextSibling
                ), l = c.data === "F!";
                break e;
              }
            }
            ma(l);
          }
          l = !1;
        }
        l && (n = a[0]);
      }
    }
    return a = Wt(), a.memoizedState = a.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pp,
      lastRenderedState: n
    }, a.queue = l, a = rm.bind(
      null,
      Pe,
      l
    ), l.dispatch = a, l = Lc(!1), v = qc.bind(
      null,
      Pe,
      !1,
      l.queue
    ), l = Wt(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, a = Lb.bind(
      null,
      Pe,
      c,
      v,
      a
    ), c.dispatch = a, l.memoizedState = e, [n, a, !1];
  }
  function Bp(e) {
    var n = St();
    return Up(n, Je, e);
  }
  function Up(e, n, a) {
    if (n = Rc(
      e,
      n,
      Pp
    )[0], e = Ll(cr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = us(n);
      } catch (w) {
        throw w === rs ? Dl : w;
      }
    else l = n;
    n = St();
    var c = n.queue, v = c.dispatch;
    return a !== n.memoizedState && (Pe.flags |= 2048, oi(
      9,
      Pl(),
      Pb.bind(null, c, a),
      null
    )), [l, v, e];
  }
  function Pb(e, n) {
    e.action = n;
  }
  function Hp(e) {
    var n = St(), a = Je;
    if (a !== null)
      return Up(n, a, e);
    St(), n = n.memoizedState, a = St();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [n, l, !1];
  }
  function oi(e, n, a, l) {
    return e = { tag: e, create: a, deps: l, inst: n, next: null }, n = Pe.updateQueue, n === null && (n = kc(), Pe.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Pl() {
    return { destroy: void 0, resource: void 0 };
  }
  function qp() {
    return St().memoizedState;
  }
  function Il(e, n, a, l) {
    var c = Wt();
    l = l === void 0 ? null : l, Pe.flags |= e, c.memoizedState = oi(
      1 | n,
      Pl(),
      a,
      l
    );
  }
  function cs(e, n, a, l) {
    var c = St();
    l = l === void 0 ? null : l;
    var v = c.memoizedState.inst;
    Je !== null && l !== null && Nc(l, Je.memoizedState.deps) ? c.memoizedState = oi(n, v, a, l) : (Pe.flags |= e, c.memoizedState = oi(
      1 | n,
      v,
      a,
      l
    ));
  }
  function Fp(e, n) {
    Il(8390656, 8, e, n);
  }
  function Zp(e, n) {
    cs(2048, 8, e, n);
  }
  function Gp(e, n) {
    return cs(4, 2, e, n);
  }
  function Vp(e, n) {
    return cs(4, 4, e, n);
  }
  function Yp(e, n) {
    if (typeof n == "function") {
      e = e();
      var a = n(e);
      return function() {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Xp(e, n, a) {
    a = a != null ? a.concat([e]) : null, cs(4, 4, Yp.bind(null, n, e), a);
  }
  function Ic() {
  }
  function $p(e, n) {
    var a = St();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    return n !== null && Nc(n, l[1]) ? l[0] : (a.memoizedState = [e, n], e);
  }
  function Qp(e, n) {
    var a = St();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    if (n !== null && Nc(n, l[1]))
      return l[0];
    if (l = e(), ba) {
      Fn(!0);
      try {
        e();
      } finally {
        Fn(!1);
      }
    }
    return a.memoizedState = [l, n], l;
  }
  function Bc(e, n, a) {
    return a === void 0 || (jr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Wm(), Pe.lanes |= e, Ur |= e, a);
  }
  function Kp(e, n, a, l) {
    return on(a, n) ? a : ii.current !== null ? (e = Bc(e, a, l), on(e, n) || (Mt = !0), e) : (jr & 42) === 0 ? (Mt = !0, e.memoizedState = a) : (e = Wm(), Pe.lanes |= e, Ur |= e, n);
  }
  function Jp(e, n, a, l, c) {
    var v = re.p;
    re.p = v !== 0 && 8 > v ? v : 8;
    var w = B.T, O = {};
    B.T = O, qc(e, !1, n, a);
    try {
      var j = c(), q = B.S;
      if (q !== null && q(O, j), j !== null && typeof j == "object" && typeof j.then == "function") {
        var Q = jb(
          j,
          l
        );
        fs(
          e,
          n,
          Q,
          hn(e)
        );
      } else
        fs(
          e,
          n,
          l,
          hn(e)
        );
    } catch (ee) {
      fs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: ee },
        hn()
      );
    } finally {
      re.p = v, B.T = w;
    }
  }
  function Ib() {
  }
  function Uc(e, n, a, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Wp(e).queue;
    Jp(
      e,
      c,
      n,
      pe,
      a === null ? Ib : function() {
        return em(e), a(l);
      }
    );
  }
  function Wp(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: pe,
      baseState: pe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: pe
      },
      next: null
    };
    var a = {};
    return n.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function em(e) {
    var n = Wp(e).next.queue;
    fs(e, n, {}, hn());
  }
  function Hc() {
    return Ut(Os);
  }
  function tm() {
    return St().memoizedState;
  }
  function nm() {
    return St().memoizedState;
  }
  function Bb(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = hn();
          e = Mr(a);
          var l = kr(n, e, a);
          l !== null && (pn(l, n, a), is(l, n, a)), n = { cache: vc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Ub(e, n, a) {
    var l = hn();
    a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bl(e) ? am(n, a) : (a = lc(e, n, a, l), a !== null && (pn(a, e, l), im(a, n, l)));
  }
  function rm(e, n, a) {
    var l = hn();
    fs(e, n, a, l);
  }
  function fs(e, n, a, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Bl(e)) am(n, c);
    else {
      var v = e.alternate;
      if (e.lanes === 0 && (v === null || v.lanes === 0) && (v = n.lastRenderedReducer, v !== null))
        try {
          var w = n.lastRenderedState, O = v(w, a);
          if (c.hasEagerState = !0, c.eagerState = O, on(O, w))
            return xl(e, n, c, 0), rt === null && Sl(), !1;
        } catch {
        } finally {
        }
      if (a = lc(e, n, c, l), a !== null)
        return pn(a, e, l), im(a, n, l), !0;
    }
    return !1;
  }
  function qc(e, n, a, l) {
    if (l = {
      lane: 2,
      revertLane: Sf(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bl(e)) {
      if (n) throw Error(s(479));
    } else
      n = lc(
        e,
        a,
        l,
        2
      ), n !== null && pn(n, e, 2);
  }
  function Bl(e) {
    var n = e.alternate;
    return e === Pe || n !== null && n === Pe;
  }
  function am(e, n) {
    si = jl = !0;
    var a = e.pending;
    a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
  }
  function im(e, n, a) {
    if ((a & 4194048) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, a |= l, n.lanes = a, hh(e, a);
    }
  }
  var Ul = {
    readContext: Ut,
    use: zl,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useLayoutEffect: gt,
    useInsertionEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useSyncExternalStore: gt,
    useId: gt,
    useHostTransitionStatus: gt,
    useFormState: gt,
    useActionState: gt,
    useOptimistic: gt,
    useMemoCache: gt,
    useCacheRefresh: gt
  }, sm = {
    readContext: Ut,
    use: zl,
    useCallback: function(e, n) {
      return Wt().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Ut,
    useEffect: Fp,
    useImperativeHandle: function(e, n, a) {
      a = a != null ? a.concat([e]) : null, Il(
        4194308,
        4,
        Yp.bind(null, n, e),
        a
      );
    },
    useLayoutEffect: function(e, n) {
      return Il(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Il(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var a = Wt();
      n = n === void 0 ? null : n;
      var l = e();
      if (ba) {
        Fn(!0);
        try {
          e();
        } finally {
          Fn(!1);
        }
      }
      return a.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, a) {
      var l = Wt();
      if (a !== void 0) {
        var c = a(n);
        if (ba) {
          Fn(!0);
          try {
            a(n);
          } finally {
            Fn(!1);
          }
        }
      } else c = n;
      return l.memoizedState = l.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, l.queue = e, e = e.dispatch = Ub.bind(
        null,
        Pe,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = Wt();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Lc(e);
      var n = e.queue, a = rm.bind(null, Pe, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, n) {
      var a = Wt();
      return Bc(a, e, n);
    },
    useTransition: function() {
      var e = Lc(!1);
      return e = Jp.bind(
        null,
        Pe,
        e.queue,
        !0,
        !1
      ), Wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var l = Pe, c = Wt();
      if (Xe) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), rt === null)
          throw Error(s(349));
        (Fe & 124) !== 0 || Np(l, n, a);
      }
      c.memoizedState = a;
      var v = { value: a, getSnapshot: n };
      return c.queue = v, Fp(Op.bind(null, l, v, e), [
        e
      ]), l.flags |= 2048, oi(
        9,
        Pl(),
        Tp.bind(
          null,
          l,
          v,
          a,
          n
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Wt(), n = rt.identifierPrefix;
      if (Xe) {
        var a = lr, l = sr;
        a = (l & ~(1 << 32 - Zt(l) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = Rl++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = Rb++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Hc,
    useFormState: Ip,
    useActionState: Ip,
    useOptimistic: function(e) {
      var n = Wt();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = a, n = qc.bind(
        null,
        Pe,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: jc,
    useCacheRefresh: function() {
      return Wt().memoizedState = Bb.bind(
        null,
        Pe
      );
    }
  }, lm = {
    readContext: Ut,
    use: zl,
    useCallback: $p,
    useContext: Ut,
    useEffect: Zp,
    useImperativeHandle: Xp,
    useInsertionEffect: Gp,
    useLayoutEffect: Vp,
    useMemo: Qp,
    useReducer: Ll,
    useRef: qp,
    useState: function() {
      return Ll(cr);
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, n) {
      var a = St();
      return Kp(
        a,
        Je.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Ll(cr)[0], n = St().memoizedState;
      return [
        typeof e == "boolean" ? e : us(e),
        n
      ];
    },
    useSyncExternalStore: Ap,
    useId: tm,
    useHostTransitionStatus: Hc,
    useFormState: Bp,
    useActionState: Bp,
    useOptimistic: function(e, n) {
      var a = St();
      return kp(a, Je, e, n);
    },
    useMemoCache: jc,
    useCacheRefresh: nm
  }, Hb = {
    readContext: Ut,
    use: zl,
    useCallback: $p,
    useContext: Ut,
    useEffect: Zp,
    useImperativeHandle: Xp,
    useInsertionEffect: Gp,
    useLayoutEffect: Vp,
    useMemo: Qp,
    useReducer: zc,
    useRef: qp,
    useState: function() {
      return zc(cr);
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, n) {
      var a = St();
      return Je === null ? Bc(a, e, n) : Kp(
        a,
        Je.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = zc(cr)[0], n = St().memoizedState;
      return [
        typeof e == "boolean" ? e : us(e),
        n
      ];
    },
    useSyncExternalStore: Ap,
    useId: tm,
    useHostTransitionStatus: Hc,
    useFormState: Hp,
    useActionState: Hp,
    useOptimistic: function(e, n) {
      var a = St();
      return Je !== null ? kp(a, Je, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: jc,
    useCacheRefresh: nm
  }, ui = null, ds = 0;
  function Hl(e) {
    var n = ds;
    return ds += 1, ui === null && (ui = []), yp(ui, e, n);
  }
  function hs(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function ql(e, n) {
    throw n.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function om(e) {
    var n = e._init;
    return n(e._payload);
  }
  function um(e) {
    function n(I, z) {
      if (e) {
        var U = I.deletions;
        U === null ? (I.deletions = [z], I.flags |= 16) : U.push(z);
      }
    }
    function a(I, z) {
      if (!e) return null;
      for (; z !== null; )
        n(I, z), z = z.sibling;
      return null;
    }
    function l(I) {
      for (var z = /* @__PURE__ */ new Map(); I !== null; )
        I.key !== null ? z.set(I.key, I) : z.set(I.index, I), I = I.sibling;
      return z;
    }
    function c(I, z) {
      return I = ir(I, z), I.index = 0, I.sibling = null, I;
    }
    function v(I, z, U) {
      return I.index = U, e ? (U = I.alternate, U !== null ? (U = U.index, U < z ? (I.flags |= 67108866, z) : U) : (I.flags |= 67108866, z)) : (I.flags |= 1048576, z);
    }
    function w(I) {
      return e && I.alternate === null && (I.flags |= 67108866), I;
    }
    function O(I, z, U, J) {
      return z === null || z.tag !== 6 ? (z = uc(U, I.mode, J), z.return = I, z) : (z = c(z, U), z.return = I, z);
    }
    function j(I, z, U, J) {
      var ge = U.type;
      return ge === d ? Q(
        I,
        z,
        U.props.children,
        J,
        U.key
      ) : z !== null && (z.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === H && om(ge) === z.type) ? (z = c(z, U.props), hs(z, U), z.return = I, z) : (z = Cl(
        U.type,
        U.key,
        U.props,
        null,
        I.mode,
        J
      ), hs(z, U), z.return = I, z);
    }
    function q(I, z, U, J) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== U.containerInfo || z.stateNode.implementation !== U.implementation ? (z = cc(U, I.mode, J), z.return = I, z) : (z = c(z, U.children || []), z.return = I, z);
    }
    function Q(I, z, U, J, ge) {
      return z === null || z.tag !== 7 ? (z = fa(
        U,
        I.mode,
        J,
        ge
      ), z.return = I, z) : (z = c(z, U), z.return = I, z);
    }
    function ee(I, z, U) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = uc(
          "" + z,
          I.mode,
          U
        ), z.return = I, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            return U = Cl(
              z.type,
              z.key,
              z.props,
              null,
              I.mode,
              U
            ), hs(U, z), U.return = I, U;
          case g:
            return z = cc(
              z,
              I.mode,
              U
            ), z.return = I, z;
          case H:
            var J = z._init;
            return z = J(z._payload), ee(I, z, U);
        }
        if (ve(z) || K(z))
          return z = fa(
            z,
            I.mode,
            U,
            null
          ), z.return = I, z;
        if (typeof z.then == "function")
          return ee(I, Hl(z), U);
        if (z.$$typeof === D)
          return ee(
            I,
            Tl(I, z),
            U
          );
        ql(I, z);
      }
      return null;
    }
    function Z(I, z, U, J) {
      var ge = z !== null ? z.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return ge !== null ? null : O(I, z, "" + U, J);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case b:
            return U.key === ge ? j(I, z, U, J) : null;
          case g:
            return U.key === ge ? q(I, z, U, J) : null;
          case H:
            return ge = U._init, U = ge(U._payload), Z(I, z, U, J);
        }
        if (ve(U) || K(U))
          return ge !== null ? null : Q(I, z, U, J, null);
        if (typeof U.then == "function")
          return Z(
            I,
            z,
            Hl(U),
            J
          );
        if (U.$$typeof === D)
          return Z(
            I,
            z,
            Tl(I, U),
            J
          );
        ql(I, U);
      }
      return null;
    }
    function V(I, z, U, J, ge) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return I = I.get(U) || null, O(z, I, "" + J, ge);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case b:
            return I = I.get(
              J.key === null ? U : J.key
            ) || null, j(z, I, J, ge);
          case g:
            return I = I.get(
              J.key === null ? U : J.key
            ) || null, q(z, I, J, ge);
          case H:
            var Ie = J._init;
            return J = Ie(J._payload), V(
              I,
              z,
              U,
              J,
              ge
            );
        }
        if (ve(J) || K(J))
          return I = I.get(U) || null, Q(z, I, J, ge, null);
        if (typeof J.then == "function")
          return V(
            I,
            z,
            U,
            Hl(J),
            ge
          );
        if (J.$$typeof === D)
          return V(
            I,
            z,
            U,
            Tl(z, J),
            ge
          );
        ql(z, J);
      }
      return null;
    }
    function Te(I, z, U, J) {
      for (var ge = null, Ie = null, _e = z, Ae = z = 0, jt = null; _e !== null && Ae < U.length; Ae++) {
        _e.index > Ae ? (jt = _e, _e = null) : jt = _e.sibling;
        var Ve = Z(
          I,
          _e,
          U[Ae],
          J
        );
        if (Ve === null) {
          _e === null && (_e = jt);
          break;
        }
        e && _e && Ve.alternate === null && n(I, _e), z = v(Ve, z, Ae), Ie === null ? ge = Ve : Ie.sibling = Ve, Ie = Ve, _e = jt;
      }
      if (Ae === U.length)
        return a(I, _e), Xe && ha(I, Ae), ge;
      if (_e === null) {
        for (; Ae < U.length; Ae++)
          _e = ee(I, U[Ae], J), _e !== null && (z = v(
            _e,
            z,
            Ae
          ), Ie === null ? ge = _e : Ie.sibling = _e, Ie = _e);
        return Xe && ha(I, Ae), ge;
      }
      for (_e = l(_e); Ae < U.length; Ae++)
        jt = V(
          _e,
          I,
          Ae,
          U[Ae],
          J
        ), jt !== null && (e && jt.alternate !== null && _e.delete(
          jt.key === null ? Ae : jt.key
        ), z = v(
          jt,
          z,
          Ae
        ), Ie === null ? ge = jt : Ie.sibling = jt, Ie = jt);
      return e && _e.forEach(function($r) {
        return n(I, $r);
      }), Xe && ha(I, Ae), ge;
    }
    function we(I, z, U, J) {
      if (U == null) throw Error(s(151));
      for (var ge = null, Ie = null, _e = z, Ae = z = 0, jt = null, Ve = U.next(); _e !== null && !Ve.done; Ae++, Ve = U.next()) {
        _e.index > Ae ? (jt = _e, _e = null) : jt = _e.sibling;
        var $r = Z(I, _e, Ve.value, J);
        if ($r === null) {
          _e === null && (_e = jt);
          break;
        }
        e && _e && $r.alternate === null && n(I, _e), z = v($r, z, Ae), Ie === null ? ge = $r : Ie.sibling = $r, Ie = $r, _e = jt;
      }
      if (Ve.done)
        return a(I, _e), Xe && ha(I, Ae), ge;
      if (_e === null) {
        for (; !Ve.done; Ae++, Ve = U.next())
          Ve = ee(I, Ve.value, J), Ve !== null && (z = v(Ve, z, Ae), Ie === null ? ge = Ve : Ie.sibling = Ve, Ie = Ve);
        return Xe && ha(I, Ae), ge;
      }
      for (_e = l(_e); !Ve.done; Ae++, Ve = U.next())
        Ve = V(_e, I, Ae, Ve.value, J), Ve !== null && (e && Ve.alternate !== null && _e.delete(Ve.key === null ? Ae : Ve.key), z = v(Ve, z, Ae), Ie === null ? ge = Ve : Ie.sibling = Ve, Ie = Ve);
      return e && _e.forEach(function(q_) {
        return n(I, q_);
      }), Xe && ha(I, Ae), ge;
    }
    function et(I, z, U, J) {
      if (typeof U == "object" && U !== null && U.type === d && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case b:
            e: {
              for (var ge = U.key; z !== null; ) {
                if (z.key === ge) {
                  if (ge = U.type, ge === d) {
                    if (z.tag === 7) {
                      a(
                        I,
                        z.sibling
                      ), J = c(
                        z,
                        U.props.children
                      ), J.return = I, I = J;
                      break e;
                    }
                  } else if (z.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === H && om(ge) === z.type) {
                    a(
                      I,
                      z.sibling
                    ), J = c(z, U.props), hs(J, U), J.return = I, I = J;
                    break e;
                  }
                  a(I, z);
                  break;
                } else n(I, z);
                z = z.sibling;
              }
              U.type === d ? (J = fa(
                U.props.children,
                I.mode,
                J,
                U.key
              ), J.return = I, I = J) : (J = Cl(
                U.type,
                U.key,
                U.props,
                null,
                I.mode,
                J
              ), hs(J, U), J.return = I, I = J);
            }
            return w(I);
          case g:
            e: {
              for (ge = U.key; z !== null; ) {
                if (z.key === ge)
                  if (z.tag === 4 && z.stateNode.containerInfo === U.containerInfo && z.stateNode.implementation === U.implementation) {
                    a(
                      I,
                      z.sibling
                    ), J = c(z, U.children || []), J.return = I, I = J;
                    break e;
                  } else {
                    a(I, z);
                    break;
                  }
                else n(I, z);
                z = z.sibling;
              }
              J = cc(U, I.mode, J), J.return = I, I = J;
            }
            return w(I);
          case H:
            return ge = U._init, U = ge(U._payload), et(
              I,
              z,
              U,
              J
            );
        }
        if (ve(U))
          return Te(
            I,
            z,
            U,
            J
          );
        if (K(U)) {
          if (ge = K(U), typeof ge != "function") throw Error(s(150));
          return U = ge.call(U), we(
            I,
            z,
            U,
            J
          );
        }
        if (typeof U.then == "function")
          return et(
            I,
            z,
            Hl(U),
            J
          );
        if (U.$$typeof === D)
          return et(
            I,
            z,
            Tl(I, U),
            J
          );
        ql(I, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, z !== null && z.tag === 6 ? (a(I, z.sibling), J = c(z, U), J.return = I, I = J) : (a(I, z), J = uc(U, I.mode, J), J.return = I, I = J), w(I)) : a(I, z);
    }
    return function(I, z, U, J) {
      try {
        ds = 0;
        var ge = et(
          I,
          z,
          U,
          J
        );
        return ui = null, ge;
      } catch (_e) {
        if (_e === rs || _e === Dl) throw _e;
        var Ie = un(29, _e, null, I.mode);
        return Ie.lanes = J, Ie.return = I, Ie;
      } finally {
      }
    };
  }
  var ci = um(!0), cm = um(!1), Tn = W(null), Vn = null;
  function Rr(e) {
    var n = e.alternate;
    le(Nt, Nt.current & 1), le(Tn, e), Vn === null && (n === null || ii.current !== null || n.memoizedState !== null) && (Vn = e);
  }
  function fm(e) {
    if (e.tag === 22) {
      if (le(Nt, Nt.current), le(Tn, e), Vn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Vn = e);
      }
    } else zr();
  }
  function zr() {
    le(Nt, Nt.current), le(Tn, Tn.current);
  }
  function fr(e) {
    ie(Tn), Vn === e && (Vn = null), ie(Nt);
  }
  var Nt = W(0);
  function Fl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || jf(a)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function Fc(e, n, a, l) {
    n = e.memoizedState, a = a(l, n), a = a == null ? n : y({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Zc = {
    enqueueSetState: function(e, n, a) {
      e = e._reactInternals;
      var l = hn(), c = Mr(l);
      c.payload = n, a != null && (c.callback = a), n = kr(e, c, l), n !== null && (pn(n, e, l), is(n, e, l));
    },
    enqueueReplaceState: function(e, n, a) {
      e = e._reactInternals;
      var l = hn(), c = Mr(l);
      c.tag = 1, c.payload = n, a != null && (c.callback = a), n = kr(e, c, l), n !== null && (pn(n, e, l), is(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var a = hn(), l = Mr(a);
      l.tag = 2, n != null && (l.callback = n), n = kr(e, l, a), n !== null && (pn(n, e, a), is(n, e, a));
    }
  };
  function dm(e, n, a, l, c, v, w) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, v, w) : n.prototype && n.prototype.isPureReactComponent ? !$i(a, l) || !$i(c, v) : !0;
  }
  function hm(e, n, a, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, l), n.state !== e && Zc.enqueueReplaceState(n, n.state, null);
  }
  function _a(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var l in n)
        l !== "ref" && (a[l] = n[l]);
    }
    if (e = e.defaultProps) {
      a === n && (a = y({}, a));
      for (var c in e)
        a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  var Zl = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function pm(e) {
    Zl(e);
  }
  function mm(e) {
    console.error(e);
  }
  function gm(e) {
    Zl(e);
  }
  function Gl(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function vm(e, n, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Gc(e, n, a) {
    return a = Mr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Gl(e, n);
    }, a;
  }
  function ym(e) {
    return e = Mr(e), e.tag = 3, e;
  }
  function bm(e, n, a, l) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var v = l.value;
      e.payload = function() {
        return c(v);
      }, e.callback = function() {
        vm(n, a, l);
      };
    }
    var w = a.stateNode;
    w !== null && typeof w.componentDidCatch == "function" && (e.callback = function() {
      vm(n, a, l), typeof c != "function" && (Hr === null ? Hr = /* @__PURE__ */ new Set([this]) : Hr.add(this));
      var O = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: O !== null ? O : ""
      });
    });
  }
  function qb(e, n, a, l, c) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = a.alternate, n !== null && es(
        n,
        a,
        c,
        !0
      ), a = Tn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Vn === null ? gf() : a.alternate === null && ht === 0 && (ht = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === _c ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), yf(e, l, c)), !1;
          case 22:
            return a.flags |= 65536, l === _c ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), yf(e, l, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return yf(e, l, c), gf(), !1;
    }
    if (Xe)
      return n = Tn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, l !== hc && (e = Error(s(422), { cause: l }), Wi(Cn(e, a)))) : (l !== hc && (n = Error(s(423), {
        cause: l
      }), Wi(
        Cn(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = Cn(l, a), c = Gc(
        e.stateNode,
        l,
        c
      ), Ec(e, c), ht !== 4 && (ht = 2)), !1;
    var v = Error(s(520), { cause: l });
    if (v = Cn(v, a), _s === null ? _s = [v] : _s.push(v), ht !== 4 && (ht = 2), n === null) return !0;
    l = Cn(l, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Gc(a.stateNode, l, e), Ec(a, e), !1;
        case 1:
          if (n = a.type, v = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Hr === null || !Hr.has(v))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = ym(c), bm(
              c,
              e,
              a,
              l
            ), Ec(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var _m = Error(s(461)), Mt = !1;
  function Rt(e, n, a, l) {
    n.child = e === null ? cm(n, null, a, l) : ci(
      n,
      e.child,
      a,
      l
    );
  }
  function Sm(e, n, a, l, c) {
    a = a.render;
    var v = n.ref;
    if ("ref" in l) {
      var w = {};
      for (var O in l)
        O !== "ref" && (w[O] = l[O]);
    } else w = l;
    return va(n), l = Tc(
      e,
      n,
      a,
      w,
      v,
      c
    ), O = Oc(), e !== null && !Mt ? (Dc(e, n, c), dr(e, n, c)) : (Xe && O && fc(n), n.flags |= 1, Rt(e, n, l, c), n.child);
  }
  function xm(e, n, a, l, c) {
    if (e === null) {
      var v = a.type;
      return typeof v == "function" && !oc(v) && v.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = v, Em(
        e,
        n,
        v,
        l,
        c
      )) : (e = Cl(
        a.type,
        null,
        l,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (v = e.child, !Wc(e, c)) {
      var w = v.memoizedProps;
      if (a = a.compare, a = a !== null ? a : $i, a(w, l) && e.ref === n.ref)
        return dr(e, n, c);
    }
    return n.flags |= 1, e = ir(v, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Em(e, n, a, l, c) {
    if (e !== null) {
      var v = e.memoizedProps;
      if ($i(v, l) && e.ref === n.ref)
        if (Mt = !1, n.pendingProps = l = v, Wc(e, c))
          (e.flags & 131072) !== 0 && (Mt = !0);
        else
          return n.lanes = e.lanes, dr(e, n, c);
    }
    return Vc(
      e,
      n,
      a,
      l,
      c
    );
  }
  function Cm(e, n, a) {
    var l = n.pendingProps, c = l.children, v = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (l = v !== null ? v.baseLanes | a : a, e !== null) {
          for (c = n.child = e.child, v = 0; c !== null; )
            v = v | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = v & ~l;
        } else n.childLanes = 0, n.child = null;
        return wm(
          e,
          n,
          l,
          a
        );
      }
      if ((a & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ol(
          n,
          v !== null ? v.cachePool : null
        ), v !== null ? Ep(n, v) : wc(), fm(n);
      else
        return n.lanes = n.childLanes = 536870912, wm(
          e,
          n,
          v !== null ? v.baseLanes | a : a,
          a
        );
    } else
      v !== null ? (Ol(n, v.cachePool), Ep(n, v), zr(), n.memoizedState = null) : (e !== null && Ol(n, null), wc(), zr());
    return Rt(e, n, c, a), n.child;
  }
  function wm(e, n, a, l) {
    var c = bc();
    return c = c === null ? null : { parent: At._currentValue, pool: c }, n.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && Ol(n, null), wc(), fm(n), e !== null && es(e, n, l, !0), null;
  }
  function Vl(e, n) {
    var a = n.ref;
    if (a === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 4194816);
    }
  }
  function Vc(e, n, a, l, c) {
    return va(n), a = Tc(
      e,
      n,
      a,
      l,
      void 0,
      c
    ), l = Oc(), e !== null && !Mt ? (Dc(e, n, c), dr(e, n, c)) : (Xe && l && fc(n), n.flags |= 1, Rt(e, n, a, c), n.child);
  }
  function Am(e, n, a, l, c, v) {
    return va(n), n.updateQueue = null, a = wp(
      n,
      l,
      a,
      c
    ), Cp(e), l = Oc(), e !== null && !Mt ? (Dc(e, n, v), dr(e, n, v)) : (Xe && l && fc(n), n.flags |= 1, Rt(e, n, a, v), n.child);
  }
  function Nm(e, n, a, l, c) {
    if (va(n), n.stateNode === null) {
      var v = ei, w = a.contextType;
      typeof w == "object" && w !== null && (v = Ut(w)), v = new a(l, v), n.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, v.updater = Zc, n.stateNode = v, v._reactInternals = n, v = n.stateNode, v.props = l, v.state = n.memoizedState, v.refs = {}, Sc(n), w = a.contextType, v.context = typeof w == "object" && w !== null ? Ut(w) : ei, v.state = n.memoizedState, w = a.getDerivedStateFromProps, typeof w == "function" && (Fc(
        n,
        a,
        w,
        l
      ), v.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (w = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), w !== v.state && Zc.enqueueReplaceState(v, v.state, null), ls(n, l, v, c), ss(), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      v = n.stateNode;
      var O = n.memoizedProps, j = _a(a, O);
      v.props = j;
      var q = v.context, Q = a.contextType;
      w = ei, typeof Q == "object" && Q !== null && (w = Ut(Q));
      var ee = a.getDerivedStateFromProps;
      Q = typeof ee == "function" || typeof v.getSnapshotBeforeUpdate == "function", O = n.pendingProps !== O, Q || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (O || q !== w) && hm(
        n,
        v,
        l,
        w
      ), Dr = !1;
      var Z = n.memoizedState;
      v.state = Z, ls(n, l, v, c), ss(), q = n.memoizedState, O || Z !== q || Dr ? (typeof ee == "function" && (Fc(
        n,
        a,
        ee,
        l
      ), q = n.memoizedState), (j = Dr || dm(
        n,
        a,
        j,
        l,
        Z,
        q,
        w
      )) ? (Q || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = q), v.props = l, v.state = q, v.context = w, l = j) : (typeof v.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      v = n.stateNode, xc(e, n), w = n.memoizedProps, Q = _a(a, w), v.props = Q, ee = n.pendingProps, Z = v.context, q = a.contextType, j = ei, typeof q == "object" && q !== null && (j = Ut(q)), O = a.getDerivedStateFromProps, (q = typeof O == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (w !== ee || Z !== j) && hm(
        n,
        v,
        l,
        j
      ), Dr = !1, Z = n.memoizedState, v.state = Z, ls(n, l, v, c), ss();
      var V = n.memoizedState;
      w !== ee || Z !== V || Dr || e !== null && e.dependencies !== null && Nl(e.dependencies) ? (typeof O == "function" && (Fc(
        n,
        a,
        O,
        l
      ), V = n.memoizedState), (Q = Dr || dm(
        n,
        a,
        Q,
        l,
        Z,
        V,
        j
      ) || e !== null && e.dependencies !== null && Nl(e.dependencies)) ? (q || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(l, V, j), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(
        l,
        V,
        j
      )), typeof v.componentDidUpdate == "function" && (n.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = V), v.props = l, v.state = V, v.context = j, l = Q) : (typeof v.componentDidUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return v = l, Vl(e, n), l = (n.flags & 128) !== 0, v || l ? (v = n.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : v.render(), n.flags |= 1, e !== null && l ? (n.child = ci(
      n,
      e.child,
      null,
      c
    ), n.child = ci(
      n,
      null,
      a,
      c
    )) : Rt(e, n, a, c), n.memoizedState = v.state, e = n.child) : e = dr(
      e,
      n,
      c
    ), e;
  }
  function Tm(e, n, a, l) {
    return Ji(), n.flags |= 256, Rt(e, n, a, l), n.child;
  }
  var Yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Xc(e) {
    return { baseLanes: e, cachePool: mp() };
  }
  function $c(e, n, a) {
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= On), e;
  }
  function Om(e, n, a) {
    var l = n.pendingProps, c = !1, v = (n.flags & 128) !== 0, w;
    if ((w = v) || (w = e !== null && e.memoizedState === null ? !1 : (Nt.current & 2) !== 0), w && (c = !0, n.flags &= -129), w = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Xe) {
        if (c ? Rr(n) : zr(), Xe) {
          var O = dt, j;
          if (j = O) {
            e: {
              for (j = O, O = Gn; j.nodeType !== 8; ) {
                if (!O) {
                  O = null;
                  break e;
                }
                if (j = Pn(
                  j.nextSibling
                ), j === null) {
                  O = null;
                  break e;
                }
              }
              O = j;
            }
            O !== null ? (n.memoizedState = {
              dehydrated: O,
              treeContext: da !== null ? { id: sr, overflow: lr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, j = un(
              18,
              null,
              null,
              0
            ), j.stateNode = O, j.return = n, n.child = j, Vt = n, dt = null, j = !0) : j = !1;
          }
          j || ma(n);
        }
        if (O = n.memoizedState, O !== null && (O = O.dehydrated, O !== null))
          return jf(O) ? n.lanes = 32 : n.lanes = 536870912, null;
        fr(n);
      }
      return O = l.children, l = l.fallback, c ? (zr(), c = n.mode, O = Yl(
        { mode: "hidden", children: O },
        c
      ), l = fa(
        l,
        c,
        a,
        null
      ), O.return = n, l.return = n, O.sibling = l, n.child = O, c = n.child, c.memoizedState = Xc(a), c.childLanes = $c(
        e,
        w,
        a
      ), n.memoizedState = Yc, l) : (Rr(n), Qc(n, O));
    }
    if (j = e.memoizedState, j !== null && (O = j.dehydrated, O !== null)) {
      if (v)
        n.flags & 256 ? (Rr(n), n.flags &= -257, n = Kc(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (zr(), n.child = e.child, n.flags |= 128, n = null) : (zr(), c = l.fallback, O = n.mode, l = Yl(
          { mode: "visible", children: l.children },
          O
        ), c = fa(
          c,
          O,
          a,
          null
        ), c.flags |= 2, l.return = n, c.return = n, l.sibling = c, n.child = l, ci(
          n,
          e.child,
          null,
          a
        ), l = n.child, l.memoizedState = Xc(a), l.childLanes = $c(
          e,
          w,
          a
        ), n.memoizedState = Yc, n = c);
      else if (Rr(n), jf(O)) {
        if (w = O.nextSibling && O.nextSibling.dataset, w) var q = w.dgst;
        w = q, l = Error(s(419)), l.stack = "", l.digest = w, Wi({ value: l, source: null, stack: null }), n = Kc(
          e,
          n,
          a
        );
      } else if (Mt || es(e, n, a, !1), w = (a & e.childLanes) !== 0, Mt || w) {
        if (w = rt, w !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : ju(l), l = (l & (w.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== j.retryLane))
          throw j.retryLane = l, Wa(e, l), pn(w, e, l), _m;
        O.data === "$?" || gf(), n = Kc(
          e,
          n,
          a
        );
      } else
        O.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = j.treeContext, dt = Pn(
          O.nextSibling
        ), Vt = n, Xe = !0, pa = null, Gn = !1, e !== null && (An[Nn++] = sr, An[Nn++] = lr, An[Nn++] = da, sr = e.id, lr = e.overflow, da = n), n = Qc(
          n,
          l.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (zr(), c = l.fallback, O = n.mode, j = e.child, q = j.sibling, l = ir(j, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = j.subtreeFlags & 65011712, q !== null ? c = ir(q, c) : (c = fa(
      c,
      O,
      a,
      null
    ), c.flags |= 2), c.return = n, l.return = n, l.sibling = c, n.child = l, l = c, c = n.child, O = e.child.memoizedState, O === null ? O = Xc(a) : (j = O.cachePool, j !== null ? (q = At._currentValue, j = j.parent !== q ? { parent: q, pool: q } : j) : j = mp(), O = {
      baseLanes: O.baseLanes | a,
      cachePool: j
    }), c.memoizedState = O, c.childLanes = $c(
      e,
      w,
      a
    ), n.memoizedState = Yc, l) : (Rr(n), a = e.child, e = a.sibling, a = ir(a, {
      mode: "visible",
      children: l.children
    }), a.return = n, a.sibling = null, e !== null && (w = n.deletions, w === null ? (n.deletions = [e], n.flags |= 16) : w.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function Qc(e, n) {
    return n = Yl(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Yl(e, n) {
    return e = un(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Kc(e, n, a) {
    return ci(n, e.child, null, a), e = Qc(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Dm(e, n, a) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), mc(e.return, n, a);
  }
  function Jc(e, n, a, l, c) {
    var v = e.memoizedState;
    v === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: c
    } : (v.isBackwards = n, v.rendering = null, v.renderingStartTime = 0, v.last = l, v.tail = a, v.tailMode = c);
  }
  function Mm(e, n, a) {
    var l = n.pendingProps, c = l.revealOrder, v = l.tail;
    if (Rt(e, n, l.children, a), l = Nt.current, (l & 2) !== 0)
      l = l & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Dm(e, a, n);
          else if (e.tag === 19)
            Dm(e, a, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      l &= 1;
    }
    switch (le(Nt, l), c) {
      case "forwards":
        for (a = n.child, c = null; a !== null; )
          e = a.alternate, e !== null && Fl(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = n.child, n.child = null) : (c = a.sibling, a.sibling = null), Jc(
          n,
          !1,
          c,
          a,
          v
        );
        break;
      case "backwards":
        for (a = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Fl(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = a, a = c, c = e;
        }
        Jc(
          n,
          !0,
          a,
          null,
          v
        );
        break;
      case "together":
        Jc(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function dr(e, n, a) {
    if (e !== null && (n.dependencies = e.dependencies), Ur |= n.lanes, (a & n.childLanes) === 0)
      if (e !== null) {
        if (es(
          e,
          n,
          a,
          !1
        ), (a & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(s(153));
    if (n.child !== null) {
      for (e = n.child, a = ir(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ir(e, e.pendingProps), a.return = n;
      a.sibling = null;
    }
    return n.child;
  }
  function Wc(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Nl(e)));
  }
  function Fb(e, n, a) {
    switch (n.tag) {
      case 3:
        ce(n, n.stateNode.containerInfo), Or(n, At, e.memoizedState.cache), Ji();
        break;
      case 27:
      case 5:
        xe(n);
        break;
      case 4:
        ce(n, n.stateNode.containerInfo);
        break;
      case 10:
        Or(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Rr(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? Om(e, n, a) : (Rr(n), e = dr(
            e,
            n,
            a
          ), e !== null ? e.sibling : null);
        Rr(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (l = (a & n.childLanes) !== 0, l || (es(
          e,
          n,
          a,
          !1
        ), l = (a & n.childLanes) !== 0), c) {
          if (l)
            return Mm(
              e,
              n,
              a
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), le(Nt, Nt.current), l) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Cm(e, n, a);
      case 24:
        Or(n, At, e.memoizedState.cache);
    }
    return dr(e, n, a);
  }
  function km(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Mt = !0;
      else {
        if (!Wc(e, a) && (n.flags & 128) === 0)
          return Mt = !1, Fb(
            e,
            n,
            a
          );
        Mt = (e.flags & 131072) !== 0;
      }
    else
      Mt = !1, Xe && (n.flags & 1048576) !== 0 && op(n, Al, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var l = n.elementType, c = l._init;
          if (l = c(l._payload), n.type = l, typeof l == "function")
            oc(l) ? (e = _a(l, e), n.tag = 1, n = Nm(
              null,
              n,
              l,
              e,
              a
            )) : (n.tag = 0, n = Vc(
              null,
              n,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              if (c = l.$$typeof, c === C) {
                n.tag = 11, n = Sm(
                  null,
                  n,
                  l,
                  e,
                  a
                );
                break e;
              } else if (c === k) {
                n.tag = 14, n = xm(
                  null,
                  n,
                  l,
                  e,
                  a
                );
                break e;
              }
            }
            throw n = me(l) || l, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return Vc(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 1:
        return l = n.type, c = _a(
          l,
          n.pendingProps
        ), Nm(
          e,
          n,
          l,
          c,
          a
        );
      case 3:
        e: {
          if (ce(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = n.pendingProps;
          var v = n.memoizedState;
          c = v.element, xc(e, n), ls(n, l, null, a);
          var w = n.memoizedState;
          if (l = w.cache, Or(n, At, l), l !== v.cache && gc(
            n,
            [At],
            a,
            !0
          ), ss(), l = w.element, v.isDehydrated)
            if (v = {
              element: l,
              isDehydrated: !1,
              cache: w.cache
            }, n.updateQueue.baseState = v, n.memoizedState = v, n.flags & 256) {
              n = Tm(
                e,
                n,
                l,
                a
              );
              break e;
            } else if (l !== c) {
              c = Cn(
                Error(s(424)),
                n
              ), Wi(c), n = Tm(
                e,
                n,
                l,
                a
              );
              break e;
            } else {
              switch (e = n.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (dt = Pn(e.firstChild), Vt = n, Xe = !0, pa = null, Gn = !0, a = cm(
                n,
                null,
                l,
                a
              ), n.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ji(), l === c) {
              n = dr(
                e,
                n,
                a
              );
              break e;
            }
            Rt(
              e,
              n,
              l,
              a
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Vl(e, n), e === null ? (a = Lg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = a : Xe || (a = n.type, e = n.pendingProps, l = lo(
          G.current
        ).createElement(a), l[Bt] = n, l[Kt] = e, Lt(l, a, e), Dt(l), n.stateNode = l) : n.memoizedState = Lg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return xe(n), e === null && Xe && (l = n.stateNode = jg(
          n.type,
          n.pendingProps,
          G.current
        ), Vt = n, Gn = !0, c = dt, Zr(n.type) ? (Rf = c, dt = Pn(
          l.firstChild
        )) : dt = c), Rt(
          e,
          n,
          n.pendingProps.children,
          a
        ), Vl(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Xe && ((c = l = dt) && (l = v_(
          l,
          n.type,
          n.pendingProps,
          Gn
        ), l !== null ? (n.stateNode = l, Vt = n, dt = Pn(
          l.firstChild
        ), Gn = !1, c = !0) : c = !1), c || ma(n)), xe(n), c = n.type, v = n.pendingProps, w = e !== null ? e.memoizedProps : null, l = v.children, Df(c, v) ? l = null : w !== null && Df(c, w) && (n.flags |= 32), n.memoizedState !== null && (c = Tc(
          e,
          n,
          zb,
          null,
          null,
          a
        ), Os._currentValue = c), Vl(e, n), Rt(e, n, l, a), n.child;
      case 6:
        return e === null && Xe && ((e = a = dt) && (a = y_(
          a,
          n.pendingProps,
          Gn
        ), a !== null ? (n.stateNode = a, Vt = n, dt = null, e = !0) : e = !1), e || ma(n)), null;
      case 13:
        return Om(e, n, a);
      case 4:
        return ce(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, e === null ? n.child = ci(
          n,
          null,
          l,
          a
        ) : Rt(
          e,
          n,
          l,
          a
        ), n.child;
      case 11:
        return Sm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 7:
        return Rt(
          e,
          n,
          n.pendingProps,
          a
        ), n.child;
      case 8:
        return Rt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 12:
        return Rt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 10:
        return l = n.pendingProps, Or(n, n.type, l.value), Rt(
          e,
          n,
          l.children,
          a
        ), n.child;
      case 9:
        return c = n.type._context, l = n.pendingProps.children, va(n), c = Ut(c), l = l(c), n.flags |= 1, Rt(e, n, l, a), n.child;
      case 14:
        return xm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 15:
        return Em(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 19:
        return Mm(e, n, a);
      case 31:
        return l = n.pendingProps, a = n.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (a = Yl(
          l,
          a
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = ir(e.child, l), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return Cm(e, n, a);
      case 24:
        return va(n), l = Ut(At), e === null ? (c = bc(), c === null && (c = rt, v = vc(), c.pooledCache = v, v.refCount++, v !== null && (c.pooledCacheLanes |= a), c = v), n.memoizedState = {
          parent: l,
          cache: c
        }, Sc(n), Or(n, At, c)) : ((e.lanes & a) !== 0 && (xc(e, n), ls(n, null, null, a), ss()), c = e.memoizedState, v = n.memoizedState, c.parent !== l ? (c = { parent: l, cache: l }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Or(n, At, l)) : (l = v.cache, Or(n, At, l), l !== c.cache && gc(
          n,
          [At],
          a,
          !0
        ))), Rt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(s(156, n.tag));
  }
  function hr(e) {
    e.flags |= 4;
  }
  function jm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Hg(n)) {
      if (n = Tn.current, n !== null && ((Fe & 4194048) === Fe ? Vn !== null : (Fe & 62914560) !== Fe && (Fe & 536870912) === 0 || n !== Vn))
        throw as = _c, gp;
      e.flags |= 8192;
    }
  }
  function Xl(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? fh() : 536870912, e.lanes |= n, pi |= n);
  }
  function ps(e, n) {
    if (!Xe)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function ut(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (n)
      for (var c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, l |= c.subtreeFlags & 65011712, l |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, n;
  }
  function Zb(e, n, a) {
    var l = n.pendingProps;
    switch (dc(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ut(n), null;
      case 1:
        return ut(n), null;
      case 3:
        return a = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), ur(At), Ce(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ki(n) ? hr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, fp())), ut(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (hr(n), a !== null ? (ut(n), jm(n, a)) : (ut(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (hr(n), ut(n), jm(n, a)) : (ut(n), n.flags &= -16777217) : (e.memoizedProps !== l && hr(n), ut(n), n.flags &= -16777217), null;
      case 27:
        L(n), a = G.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          e = F.current, Ki(n) ? up(n) : (e = jg(c, l, a), n.stateNode = e, hr(n));
        }
        return ut(n), null;
      case 5:
        if (L(n), a = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          if (e = F.current, Ki(n))
            up(n);
          else {
            switch (c = lo(
              G.current
            ), e) {
              case 1:
                e = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof l.is == "string" ? c.createElement("select", { is: l.is }) : c.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == "string" ? c.createElement(a, { is: l.is }) : c.createElement(a);
                }
            }
            e[Bt] = n, e[Kt] = l;
            e: for (c = n.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === n) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === n)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            n.stateNode = e;
            e: switch (Lt(e, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && hr(n);
          }
        }
        return ut(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && hr(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = G.current, Ki(n)) {
            if (e = n.stateNode, a = n.memoizedProps, l = null, c = Vt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            e[Bt] = n, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Ag(e.nodeValue, a)), e || ma(n);
          } else
            e = lo(e).createTextNode(
              l
            ), e[Bt] = n, n.stateNode = e;
        }
        return ut(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Ki(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[Bt] = n;
            } else
              Ji(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ut(n), c = !1;
          } else
            c = fp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (fr(n), n) : (fr(n), null);
        }
        if (fr(n), (n.flags & 128) !== 0)
          return n.lanes = a, n;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = n.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool);
          var v = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (v = l.memoizedState.cachePool.pool), v !== c && (l.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), Xl(n, n.updateQueue), ut(n), null;
      case 4:
        return Ce(), e === null && wf(n.stateNode.containerInfo), ut(n), null;
      case 10:
        return ur(n.type), ut(n), null;
      case 19:
        if (ie(Nt), c = n.memoizedState, c === null) return ut(n), null;
        if (l = (n.flags & 128) !== 0, v = c.rendering, v === null)
          if (l) ps(c, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (v = Fl(e), v !== null) {
                  for (n.flags |= 128, ps(c, !1), e = v.updateQueue, n.updateQueue = e, Xl(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    lp(a, e), a = a.sibling;
                  return le(
                    Nt,
                    Nt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && ke() > Kl && (n.flags |= 128, l = !0, ps(c, !1), n.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Fl(v), e !== null) {
              if (n.flags |= 128, l = !0, e = e.updateQueue, n.updateQueue = e, Xl(n, e), ps(c, !0), c.tail === null && c.tailMode === "hidden" && !v.alternate && !Xe)
                return ut(n), null;
            } else
              2 * ke() - c.renderingStartTime > Kl && a !== 536870912 && (n.flags |= 128, l = !0, ps(c, !1), n.lanes = 4194304);
          c.isBackwards ? (v.sibling = n.child, n.child = v) : (e = c.last, e !== null ? e.sibling = v : n.child = v, c.last = v);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = ke(), n.sibling = null, e = Nt.current, le(Nt, l ? e & 1 | 2 : e & 1), n) : (ut(n), null);
      case 22:
      case 23:
        return fr(n), Ac(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (ut(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ut(n), a = n.updateQueue, a !== null && Xl(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== a && (n.flags |= 2048), e !== null && ie(ya), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), ur(At), ut(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function Gb(e, n) {
    switch (dc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return ur(At), Ce(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return L(n), null;
      case 13:
        if (fr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          Ji();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ie(Nt), null;
      case 4:
        return Ce(), null;
      case 10:
        return ur(n.type), null;
      case 22:
      case 23:
        return fr(n), Ac(), e !== null && ie(ya), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return ur(At), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Rm(e, n) {
    switch (dc(n), n.tag) {
      case 3:
        ur(At), Ce();
        break;
      case 26:
      case 27:
      case 5:
        L(n);
        break;
      case 4:
        Ce();
        break;
      case 13:
        fr(n);
        break;
      case 19:
        ie(Nt);
        break;
      case 10:
        ur(n.type);
        break;
      case 22:
      case 23:
        fr(n), Ac(), e !== null && ie(ya);
        break;
      case 24:
        ur(At);
    }
  }
  function ms(e, n) {
    try {
      var a = n.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var v = a.create, w = a.inst;
            l = v(), w.destroy = l;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (O) {
      nt(n, n.return, O);
    }
  }
  function Lr(e, n, a) {
    try {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var v = c.next;
        l = v;
        do {
          if ((l.tag & e) === e) {
            var w = l.inst, O = w.destroy;
            if (O !== void 0) {
              w.destroy = void 0, c = n;
              var j = a, q = O;
              try {
                q();
              } catch (Q) {
                nt(
                  c,
                  j,
                  Q
                );
              }
            }
          }
          l = l.next;
        } while (l !== v);
      }
    } catch (Q) {
      nt(n, n.return, Q);
    }
  }
  function zm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        xp(n, a);
      } catch (l) {
        nt(e, e.return, l);
      }
    }
  }
  function Lm(e, n, a) {
    a.props = _a(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      nt(e, n, l);
    }
  }
  function gs(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (c) {
      nt(e, n, c);
    }
  }
  function Yn(e, n) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          nt(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          nt(e, n, c);
        }
      else a.current = null;
  }
  function Pm(e) {
    var n = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (c) {
      nt(e, e.return, c);
    }
  }
  function ef(e, n, a) {
    try {
      var l = e.stateNode;
      d_(l, e.type, a, n), l[Kt] = n;
    } catch (c) {
      nt(e, e.return, c);
    }
  }
  function Im(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zr(e.type) || e.tag === 4;
  }
  function tf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Im(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function nf(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = so));
    else if (l !== 4 && (l === 27 && Zr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for (nf(e, n, a), e = e.sibling; e !== null; )
        nf(e, n, a), e = e.sibling;
  }
  function $l(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Zr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for ($l(e, n, a), e = e.sibling; e !== null; )
        $l(e, n, a), e = e.sibling;
  }
  function Bm(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Lt(n, l, a), n[Bt] = e, n[Kt] = a;
    } catch (v) {
      nt(e, e.return, v);
    }
  }
  var pr = !1, vt = !1, rf = !1, Um = typeof WeakSet == "function" ? WeakSet : Set, kt = null;
  function Vb(e, n) {
    if (e = e.containerInfo, Tf = po, e = Kh(e), tc(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var c = l.anchorOffset, v = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, v.nodeType;
            } catch {
              a = null;
              break e;
            }
            var w = 0, O = -1, j = -1, q = 0, Q = 0, ee = e, Z = null;
            t: for (; ; ) {
              for (var V; ee !== a || c !== 0 && ee.nodeType !== 3 || (O = w + c), ee !== v || l !== 0 && ee.nodeType !== 3 || (j = w + l), ee.nodeType === 3 && (w += ee.nodeValue.length), (V = ee.firstChild) !== null; )
                Z = ee, ee = V;
              for (; ; ) {
                if (ee === e) break t;
                if (Z === a && ++q === c && (O = w), Z === v && ++Q === l && (j = w), (V = ee.nextSibling) !== null) break;
                ee = Z, Z = ee.parentNode;
              }
              ee = V;
            }
            a = O === -1 || j === -1 ? null : { start: O, end: j };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Of = { focusedElem: e, selectionRange: a }, po = !1, kt = n; kt !== null; )
      if (n = kt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, kt = e;
      else
        for (; kt !== null; ) {
          switch (n = kt, v = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && v !== null) {
                e = void 0, a = n, c = v.memoizedProps, v = v.memoizedState, l = a.stateNode;
                try {
                  var Te = _a(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Te,
                    v
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (we) {
                  nt(
                    a,
                    a.return,
                    we
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, a = e.nodeType, a === 9)
                  kf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      kf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, kt = e;
            break;
          }
          kt = n.return;
        }
  }
  function Hm(e, n, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e, a), l & 4 && ms(5, a);
        break;
      case 1:
        if (Pr(e, a), l & 4)
          if (e = a.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (w) {
              nt(a, a.return, w);
            }
          else {
            var c = _a(
              a.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                c,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (w) {
              nt(
                a,
                a.return,
                w
              );
            }
          }
        l & 64 && zm(a), l & 512 && gs(a, a.return);
        break;
      case 3:
        if (Pr(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (n = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                n = a.child.stateNode;
                break;
              case 1:
                n = a.child.stateNode;
            }
          try {
            xp(e, n);
          } catch (w) {
            nt(a, a.return, w);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Bm(a);
      case 26:
      case 5:
        Pr(e, a), n === null && l & 4 && Pm(a), l & 512 && gs(a, a.return);
        break;
      case 12:
        Pr(e, a);
        break;
      case 13:
        Pr(e, a), l & 4 && Zm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = t_.bind(
          null,
          a
        ), b_(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || pr, !l) {
          n = n !== null && n.memoizedState !== null || vt, c = pr;
          var v = vt;
          pr = l, (vt = n) && !v ? Ir(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Pr(e, a), pr = c, vt = v;
        }
        break;
      case 30:
        break;
      default:
        Pr(e, a);
    }
  }
  function qm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, qm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Lu(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, en = !1;
  function mr(e, n, a) {
    for (a = a.child; a !== null; )
      Fm(e, n, a), a = a.sibling;
  }
  function Fm(e, n, a) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(tr, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        vt || Yn(a, n), mr(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        vt || Yn(a, n);
        var l = st, c = en;
        Zr(a.type) && (st = a.stateNode, en = !1), mr(
          e,
          n,
          a
        ), ws(a.stateNode), st = l, en = c;
        break;
      case 5:
        vt || Yn(a, n);
      case 6:
        if (l = st, c = en, st = null, mr(
          e,
          n,
          a
        ), st = l, en = c, st !== null)
          if (en)
            try {
              (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(a.stateNode);
            } catch (v) {
              nt(
                a,
                n,
                v
              );
            }
          else
            try {
              st.removeChild(a.stateNode);
            } catch (v) {
              nt(
                a,
                n,
                v
              );
            }
        break;
      case 18:
        st !== null && (en ? (e = st, Mg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), js(e)) : Mg(st, a.stateNode));
        break;
      case 4:
        l = st, c = en, st = a.stateNode.containerInfo, en = !0, mr(
          e,
          n,
          a
        ), st = l, en = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || Lr(2, a, n), vt || Lr(4, a, n), mr(
          e,
          n,
          a
        );
        break;
      case 1:
        vt || (Yn(a, n), l = a.stateNode, typeof l.componentWillUnmount == "function" && Lm(
          a,
          n,
          l
        )), mr(
          e,
          n,
          a
        );
        break;
      case 21:
        mr(
          e,
          n,
          a
        );
        break;
      case 22:
        vt = (l = vt) || a.memoizedState !== null, mr(
          e,
          n,
          a
        ), vt = l;
        break;
      default:
        mr(
          e,
          n,
          a
        );
    }
  }
  function Zm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        js(e);
      } catch (a) {
        nt(n, n.return, a);
      }
  }
  function Yb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Um()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Um()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function af(e, n) {
    var a = Yb(e);
    n.forEach(function(l) {
      var c = n_.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(c, c));
    });
  }
  function cn(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var c = a[l], v = e, w = n, O = w;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (Zr(O.type)) {
                st = O.stateNode, en = !1;
                break e;
              }
              break;
            case 5:
              st = O.stateNode, en = !1;
              break e;
            case 3:
            case 4:
              st = O.stateNode.containerInfo, en = !0;
              break e;
          }
          O = O.return;
        }
        if (st === null) throw Error(s(160));
        Fm(v, w, c), st = null, en = !1, v = c.alternate, v !== null && (v.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Gm(n, e), n = n.sibling;
  }
  var Ln = null;
  function Gm(e, n) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        cn(n, e), fn(e), l & 4 && (Lr(3, e, e.return), ms(3, e), Lr(5, e, e.return));
        break;
      case 1:
        cn(n, e), fn(e), l & 512 && (vt || a === null || Yn(a, a.return)), l & 64 && pr && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var c = Ln;
        if (cn(n, e), fn(e), l & 512 && (vt || a === null || Yn(a, a.return)), l & 4) {
          var v = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (l) {
                    case "title":
                      v = c.getElementsByTagName("title")[0], (!v || v[Ui] || v[Bt] || v.namespaceURI === "http://www.w3.org/2000/svg" || v.hasAttribute("itemprop")) && (v = c.createElement(l), c.head.insertBefore(
                        v,
                        c.querySelector("head > title")
                      )), Lt(v, l, a), v[Bt] = e, Dt(v), l = v;
                      break e;
                    case "link":
                      var w = Bg(
                        "link",
                        "href",
                        c
                      ).get(l + (a.href || ""));
                      if (w) {
                        for (var O = 0; O < w.length; O++)
                          if (v = w[O], v.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && v.getAttribute("rel") === (a.rel == null ? null : a.rel) && v.getAttribute("title") === (a.title == null ? null : a.title) && v.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            w.splice(O, 1);
                            break t;
                          }
                      }
                      v = c.createElement(l), Lt(v, l, a), c.head.appendChild(v);
                      break;
                    case "meta":
                      if (w = Bg(
                        "meta",
                        "content",
                        c
                      ).get(l + (a.content || ""))) {
                        for (O = 0; O < w.length; O++)
                          if (v = w[O], v.getAttribute("content") === (a.content == null ? null : "" + a.content) && v.getAttribute("name") === (a.name == null ? null : a.name) && v.getAttribute("property") === (a.property == null ? null : a.property) && v.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && v.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            w.splice(O, 1);
                            break t;
                          }
                      }
                      v = c.createElement(l), Lt(v, l, a), c.head.appendChild(v);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  v[Bt] = e, Dt(v), l = v;
                }
                e.stateNode = l;
              } else
                Ug(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Ig(
                c,
                l,
                e.memoizedProps
              );
          else
            v !== l ? (v === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : v.count--, l === null ? Ug(
              c,
              e.type,
              e.stateNode
            ) : Ig(
              c,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && ef(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        cn(n, e), fn(e), l & 512 && (vt || a === null || Yn(a, a.return)), a !== null && l & 4 && ef(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (cn(n, e), fn(e), l & 512 && (vt || a === null || Yn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Va(c, "");
          } catch (V) {
            nt(e, e.return, V);
          }
        }
        l & 4 && e.stateNode != null && (c = e.memoizedProps, ef(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), l & 1024 && (rf = !0);
        break;
      case 6:
        if (cn(n, e), fn(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (V) {
            nt(e, e.return, V);
          }
        }
        break;
      case 3:
        if (co = null, c = Ln, Ln = oo(n.containerInfo), cn(n, e), Ln = c, fn(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            js(n.containerInfo);
          } catch (V) {
            nt(e, e.return, V);
          }
        rf && (rf = !1, Vm(e));
        break;
      case 4:
        l = Ln, Ln = oo(
          e.stateNode.containerInfo
        ), cn(n, e), fn(e), Ln = l;
        break;
      case 12:
        cn(n, e), fn(e);
        break;
      case 13:
        cn(n, e), fn(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ff = ke()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, af(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var j = a !== null && a.memoizedState !== null, q = pr, Q = vt;
        if (pr = q || c, vt = Q || j, cn(n, e), vt = Q, pr = q, fn(e), l & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || j || pr || vt || Sa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                j = a = n;
                try {
                  if (v = j.stateNode, c)
                    w = v.style, typeof w.setProperty == "function" ? w.setProperty("display", "none", "important") : w.display = "none";
                  else {
                    O = j.stateNode;
                    var ee = j.memoizedProps.style, Z = ee != null && ee.hasOwnProperty("display") ? ee.display : null;
                    O.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (V) {
                  nt(j, j.return, V);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                j = n;
                try {
                  j.stateNode.nodeValue = c ? "" : j.memoizedProps;
                } catch (V) {
                  nt(j, j.return, V);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              a === n && (a = null), n = n.return;
            }
            a === n && (a = null), n.sibling.return = n.return, n = n.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, af(e, a))));
        break;
      case 19:
        cn(n, e), fn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, af(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        cn(n, e), fn(e);
    }
  }
  function fn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Im(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, v = tf(e);
            $l(e, v, c);
            break;
          case 5:
            var w = a.stateNode;
            a.flags & 32 && (Va(w, ""), a.flags &= -33);
            var O = tf(e);
            $l(e, O, w);
            break;
          case 3:
          case 4:
            var j = a.stateNode.containerInfo, q = tf(e);
            nf(
              e,
              q,
              j
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (Q) {
        nt(e, e.return, Q);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Vm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Vm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Hm(e, n.alternate, n), n = n.sibling;
  }
  function Sa(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Lr(4, n, n.return), Sa(n);
          break;
        case 1:
          Yn(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && Lm(
            n,
            n.return,
            a
          ), Sa(n);
          break;
        case 27:
          ws(n.stateNode);
        case 26:
        case 5:
          Yn(n, n.return), Sa(n);
          break;
        case 22:
          n.memoizedState === null && Sa(n);
          break;
        case 30:
          Sa(n);
          break;
        default:
          Sa(n);
      }
      e = e.sibling;
    }
  }
  function Ir(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var l = n.alternate, c = e, v = n, w = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Ir(
            c,
            v,
            a
          ), ms(4, v);
          break;
        case 1:
          if (Ir(
            c,
            v,
            a
          ), l = v, c = l.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (q) {
              nt(l, l.return, q);
            }
          if (l = v, c = l.updateQueue, c !== null) {
            var O = l.stateNode;
            try {
              var j = c.shared.hiddenCallbacks;
              if (j !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < j.length; c++)
                  Sp(j[c], O);
            } catch (q) {
              nt(l, l.return, q);
            }
          }
          a && w & 64 && zm(v), gs(v, v.return);
          break;
        case 27:
          Bm(v);
        case 26:
        case 5:
          Ir(
            c,
            v,
            a
          ), a && l === null && w & 4 && Pm(v), gs(v, v.return);
          break;
        case 12:
          Ir(
            c,
            v,
            a
          );
          break;
        case 13:
          Ir(
            c,
            v,
            a
          ), a && w & 4 && Zm(c, v);
          break;
        case 22:
          v.memoizedState === null && Ir(
            c,
            v,
            a
          ), gs(v, v.return);
          break;
        case 30:
          break;
        default:
          Ir(
            c,
            v,
            a
          );
      }
      n = n.sibling;
    }
  }
  function sf(e, n) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && ts(a));
  }
  function lf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ts(e));
  }
  function Xn(e, n, a, l) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Ym(
          e,
          n,
          a,
          l
        ), n = n.sibling;
  }
  function Ym(e, n, a, l) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Xn(
          e,
          n,
          a,
          l
        ), c & 2048 && ms(9, n);
        break;
      case 1:
        Xn(
          e,
          n,
          a,
          l
        );
        break;
      case 3:
        Xn(
          e,
          n,
          a,
          l
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ts(e)));
        break;
      case 12:
        if (c & 2048) {
          Xn(
            e,
            n,
            a,
            l
          ), e = n.stateNode;
          try {
            var v = n.memoizedProps, w = v.id, O = v.onPostCommit;
            typeof O == "function" && O(
              w,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (j) {
            nt(n, n.return, j);
          }
        } else
          Xn(
            e,
            n,
            a,
            l
          );
        break;
      case 13:
        Xn(
          e,
          n,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        v = n.stateNode, w = n.alternate, n.memoizedState !== null ? v._visibility & 2 ? Xn(
          e,
          n,
          a,
          l
        ) : vs(e, n) : v._visibility & 2 ? Xn(
          e,
          n,
          a,
          l
        ) : (v._visibility |= 2, fi(
          e,
          n,
          a,
          l,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && sf(w, n);
        break;
      case 24:
        Xn(
          e,
          n,
          a,
          l
        ), c & 2048 && lf(n.alternate, n);
        break;
      default:
        Xn(
          e,
          n,
          a,
          l
        );
    }
  }
  function fi(e, n, a, l, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var v = e, w = n, O = a, j = l, q = w.flags;
      switch (w.tag) {
        case 0:
        case 11:
        case 15:
          fi(
            v,
            w,
            O,
            j,
            c
          ), ms(8, w);
          break;
        case 23:
          break;
        case 22:
          var Q = w.stateNode;
          w.memoizedState !== null ? Q._visibility & 2 ? fi(
            v,
            w,
            O,
            j,
            c
          ) : vs(
            v,
            w
          ) : (Q._visibility |= 2, fi(
            v,
            w,
            O,
            j,
            c
          )), c && q & 2048 && sf(
            w.alternate,
            w
          );
          break;
        case 24:
          fi(
            v,
            w,
            O,
            j,
            c
          ), c && q & 2048 && lf(w.alternate, w);
          break;
        default:
          fi(
            v,
            w,
            O,
            j,
            c
          );
      }
      n = n.sibling;
    }
  }
  function vs(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e, l = n, c = l.flags;
        switch (l.tag) {
          case 22:
            vs(a, l), c & 2048 && sf(
              l.alternate,
              l
            );
            break;
          case 24:
            vs(a, l), c & 2048 && lf(l.alternate, l);
            break;
          default:
            vs(a, l);
        }
        n = n.sibling;
      }
  }
  var ys = 8192;
  function di(e) {
    if (e.subtreeFlags & ys)
      for (e = e.child; e !== null; )
        Xm(e), e = e.sibling;
  }
  function Xm(e) {
    switch (e.tag) {
      case 26:
        di(e), e.flags & ys && e.memoizedState !== null && k_(
          Ln,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        di(e);
        break;
      case 3:
      case 4:
        var n = Ln;
        Ln = oo(e.stateNode.containerInfo), di(e), Ln = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = ys, ys = 16777216, di(e), ys = n) : di(e));
        break;
      default:
        di(e);
    }
  }
  function $m(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function bs(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a];
          kt = l, Km(
            l,
            e
          );
        }
      $m(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Qm(e), e = e.sibling;
  }
  function Qm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        bs(e), e.flags & 2048 && Lr(9, e, e.return);
        break;
      case 3:
        bs(e);
        break;
      case 12:
        bs(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Ql(e)) : bs(e);
        break;
      default:
        bs(e);
    }
  }
  function Ql(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a];
          kt = l, Km(
            l,
            e
          );
        }
      $m(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, n, n.return), Ql(n);
          break;
        case 22:
          a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, Ql(n));
          break;
        default:
          Ql(n);
      }
      e = e.sibling;
    }
  }
  function Km(e, n) {
    for (; kt !== null; ) {
      var a = kt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ts(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, kt = l;
      else
        e: for (a = e; kt !== null; ) {
          l = kt;
          var c = l.sibling, v = l.return;
          if (qm(l), l === a) {
            kt = null;
            break e;
          }
          if (c !== null) {
            c.return = v, kt = c;
            break e;
          }
          kt = v;
        }
    }
  }
  var Xb = {
    getCacheForType: function(e) {
      var n = Ut(At), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, $b = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, rt = null, Be = null, Fe = 0, Ke = 0, dn = null, Br = !1, hi = !1, of = !1, gr = 0, ht = 0, Ur = 0, xa = 0, uf = 0, On = 0, pi = 0, _s = null, tn = null, cf = !1, ff = 0, Kl = 1 / 0, Jl = null, Hr = null, zt = 0, qr = null, mi = null, gi = 0, df = 0, hf = null, Jm = null, Ss = 0, pf = null;
  function hn() {
    if ((Qe & 2) !== 0 && Fe !== 0)
      return Fe & -Fe;
    if (B.T !== null) {
      var e = ri;
      return e !== 0 ? e : Sf();
    }
    return ph();
  }
  function Wm() {
    On === 0 && (On = (Fe & 536870912) === 0 || Xe ? Ia() : 536870912);
    var e = Tn.current;
    return e !== null && (e.flags |= 32), On;
  }
  function pn(e, n, a) {
    (e === rt && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null) && (vi(e, 0), Fr(
      e,
      Fe,
      On,
      !1
    )), Bi(e, a), ((Qe & 2) === 0 || e !== rt) && (e === rt && ((Qe & 2) === 0 && (xa |= a), ht === 4 && Fr(
      e,
      Fe,
      On,
      !1
    )), $n(e));
  }
  function eg(e, n, a) {
    if ((Qe & 6) !== 0) throw Error(s(327));
    var l = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Qt(e, n), c = l ? Jb(e, n) : vf(e, n, !0), v = l;
    do {
      if (c === 0) {
        hi && !l && Fr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, v && !Qb(a)) {
          c = vf(e, n, !1), v = !1;
          continue;
        }
        if (c === 2) {
          if (v = n, e.errorRecoveryDisabledLanes & v)
            var w = 0;
          else
            w = e.pendingLanes & -536870913, w = w !== 0 ? w : w & 536870912 ? 536870912 : 0;
          if (w !== 0) {
            n = w;
            e: {
              var O = e;
              c = _s;
              var j = O.current.memoizedState.isDehydrated;
              if (j && (vi(O, w).flags |= 256), w = vf(
                O,
                w,
                !1
              ), w !== 2) {
                if (of && !j) {
                  O.errorRecoveryDisabledLanes |= v, xa |= v, c = 4;
                  break e;
                }
                v = tn, tn = c, v !== null && (tn === null ? tn = v : tn.push.apply(
                  tn,
                  v
                ));
              }
              c = w;
            }
            if (v = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          vi(e, 0), Fr(e, n, 0, !0);
          break;
        }
        e: {
          switch (l = e, v = c, v) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Fr(
                l,
                n,
                On,
                !Br
              );
              break e;
            case 2:
              tn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = ff + 300 - ke(), 10 < c)) {
            if (Fr(
              l,
              n,
              On,
              !Br
            ), Gt(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Og(
              tg.bind(
                null,
                l,
                a,
                tn,
                Jl,
                cf,
                n,
                On,
                xa,
                pi,
                Br,
                v,
                2,
                -0,
                0
              ),
              c
            );
            break e;
          }
          tg(
            l,
            a,
            tn,
            Jl,
            cf,
            n,
            On,
            xa,
            pi,
            Br,
            v,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    $n(e);
  }
  function tg(e, n, a, l, c, v, w, O, j, q, Q, ee, Z, V) {
    if (e.timeoutHandle = -1, ee = n.subtreeFlags, (ee & 8192 || (ee & 16785408) === 16785408) && (Ts = { stylesheets: null, count: 0, unsuspend: M_ }, Xm(n), ee = j_(), ee !== null)) {
      e.cancelPendingCommit = ee(
        og.bind(
          null,
          e,
          n,
          v,
          a,
          l,
          c,
          w,
          O,
          j,
          Q,
          1,
          Z,
          V
        )
      ), Fr(e, v, w, !q);
      return;
    }
    og(
      e,
      n,
      v,
      a,
      l,
      c,
      w,
      O,
      j
    );
  }
  function Qb(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var c = a[l], v = c.getSnapshot;
          c = c.value;
          try {
            if (!on(v(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = n.child, n.subtreeFlags & 16384 && a !== null)
        a.return = n, n = a;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Fr(e, n, a, l) {
    n &= ~uf, n &= ~xa, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var v = 31 - Zt(c), w = 1 << v;
      l[v] = -1, c &= ~w;
    }
    a !== 0 && dh(e, a, n);
  }
  function Wl() {
    return (Qe & 6) === 0 ? (xs(0), !1) : !0;
  }
  function mf() {
    if (Be !== null) {
      if (Ke === 0)
        var e = Be.return;
      else
        e = Be, or = ga = null, Mc(e), ui = null, ds = 0, e = Be;
      for (; e !== null; )
        Rm(e.alternate, e), e = e.return;
      Be = null;
    }
  }
  function vi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, p_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), mf(), rt = e, Be = a = ir(e.current, null), Fe = n, Ke = 0, dn = null, Br = !1, hi = Qt(e, n), of = !1, pi = On = uf = xa = Ur = ht = 0, tn = _s = null, cf = !1, (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var c = 31 - Zt(l), v = 1 << c;
        n |= e[c], l &= ~v;
      }
    return gr = n, Sl(), a;
  }
  function ng(e, n) {
    Pe = null, B.H = Ul, n === rs || n === Dl ? (n = bp(), Ke = 3) : n === gp ? (n = bp(), Ke = 4) : Ke = n === _m ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, dn = n, Be === null && (ht = 1, Gl(
      e,
      Cn(n, e.current)
    ));
  }
  function rg() {
    var e = B.H;
    return B.H = Ul, e === null ? Ul : e;
  }
  function ag() {
    var e = B.A;
    return B.A = Xb, e;
  }
  function gf() {
    ht = 4, Br || (Fe & 4194048) !== Fe && Tn.current !== null || (hi = !0), (Ur & 134217727) === 0 && (xa & 134217727) === 0 || rt === null || Fr(
      rt,
      Fe,
      On,
      !1
    );
  }
  function vf(e, n, a) {
    var l = Qe;
    Qe |= 2;
    var c = rg(), v = ag();
    (rt !== e || Fe !== n) && (Jl = null, vi(e, n)), n = !1;
    var w = ht;
    e: do
      try {
        if (Ke !== 0 && Be !== null) {
          var O = Be, j = dn;
          switch (Ke) {
            case 8:
              mf(), w = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tn.current === null && (n = !0);
              var q = Ke;
              if (Ke = 0, dn = null, yi(e, O, j, q), a && hi) {
                w = 0;
                break e;
              }
              break;
            default:
              q = Ke, Ke = 0, dn = null, yi(e, O, j, q);
          }
        }
        Kb(), w = ht;
        break;
      } catch (Q) {
        ng(e, Q);
      }
    while (!0);
    return n && e.shellSuspendCounter++, or = ga = null, Qe = l, B.H = c, B.A = v, Be === null && (rt = null, Fe = 0, Sl()), w;
  }
  function Kb() {
    for (; Be !== null; ) ig(Be);
  }
  function Jb(e, n) {
    var a = Qe;
    Qe |= 2;
    var l = rg(), c = ag();
    rt !== e || Fe !== n ? (Jl = null, Kl = ke() + 500, vi(e, n)) : hi = Qt(
      e,
      n
    );
    e: do
      try {
        if (Ke !== 0 && Be !== null) {
          n = Be;
          var v = dn;
          t: switch (Ke) {
            case 1:
              Ke = 0, dn = null, yi(e, n, v, 1);
              break;
            case 2:
            case 9:
              if (vp(v)) {
                Ke = 0, dn = null, sg(n);
                break;
              }
              n = function() {
                Ke !== 2 && Ke !== 9 || rt !== e || (Ke = 7), $n(e);
              }, v.then(n, n);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              vp(v) ? (Ke = 0, dn = null, sg(n)) : (Ke = 0, dn = null, yi(e, n, v, 7));
              break;
            case 5:
              var w = null;
              switch (Be.tag) {
                case 26:
                  w = Be.memoizedState;
                case 5:
                case 27:
                  var O = Be;
                  if (!w || Hg(w)) {
                    Ke = 0, dn = null;
                    var j = O.sibling;
                    if (j !== null) Be = j;
                    else {
                      var q = O.return;
                      q !== null ? (Be = q, eo(q)) : Be = null;
                    }
                    break t;
                  }
              }
              Ke = 0, dn = null, yi(e, n, v, 5);
              break;
            case 6:
              Ke = 0, dn = null, yi(e, n, v, 6);
              break;
            case 8:
              mf(), ht = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Wb();
        break;
      } catch (Q) {
        ng(e, Q);
      }
    while (!0);
    return or = ga = null, B.H = l, B.A = c, Qe = a, Be !== null ? 0 : (rt = null, Fe = 0, Sl(), ht);
  }
  function Wb() {
    for (; Be !== null && !Ye(); )
      ig(Be);
  }
  function ig(e) {
    var n = km(e.alternate, e, gr);
    e.memoizedProps = e.pendingProps, n === null ? eo(e) : Be = n;
  }
  function sg(e) {
    var n = e, a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Am(
          a,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Fe
        );
        break;
      case 11:
        n = Am(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Fe
        );
        break;
      case 5:
        Mc(n);
      default:
        Rm(a, n), n = Be = lp(n, gr), n = km(a, n, gr);
    }
    e.memoizedProps = e.pendingProps, n === null ? eo(e) : Be = n;
  }
  function yi(e, n, a, l) {
    or = ga = null, Mc(n), ui = null, ds = 0;
    var c = n.return;
    try {
      if (qb(
        e,
        c,
        n,
        a,
        Fe
      )) {
        ht = 1, Gl(
          e,
          Cn(a, e.current)
        ), Be = null;
        return;
      }
    } catch (v) {
      if (c !== null) throw Be = c, v;
      ht = 1, Gl(
        e,
        Cn(a, e.current)
      ), Be = null;
      return;
    }
    n.flags & 32768 ? (Xe || l === 1 ? e = !0 : hi || (Fe & 536870912) !== 0 ? e = !1 : (Br = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Tn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), lg(n, e)) : eo(n);
  }
  function eo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        lg(
          n,
          Br
        );
        return;
      }
      e = n.return;
      var a = Zb(
        n.alternate,
        n,
        gr
      );
      if (a !== null) {
        Be = a;
        return;
      }
      if (n = n.sibling, n !== null) {
        Be = n;
        return;
      }
      Be = n = e;
    } while (n !== null);
    ht === 0 && (ht = 5);
  }
  function lg(e, n) {
    do {
      var a = Gb(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Be = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (e = e.sibling, e !== null)) {
        Be = e;
        return;
      }
      Be = e = a;
    } while (e !== null);
    ht = 6, Be = null;
  }
  function og(e, n, a, l, c, v, w, O, j) {
    e.cancelPendingCommit = null;
    do
      to();
    while (zt !== 0);
    if ((Qe & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (v = n.lanes | n.childLanes, v |= sc, M1(
        e,
        a,
        v,
        w,
        O,
        j
      ), e === rt && (Be = rt = null, Fe = 0), mi = n, qr = e, gi = a, df = v, hf = c, Jm = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, r_(he, function() {
        return hg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
        l = B.T, B.T = null, c = re.p, re.p = 2, w = Qe, Qe |= 4;
        try {
          Vb(e, n, a);
        } finally {
          Qe = w, re.p = c, B.T = l;
        }
      }
      zt = 1, ug(), cg(), fg();
    }
  }
  function ug() {
    if (zt === 1) {
      zt = 0;
      var e = qr, n = mi, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = B.T, B.T = null;
        var l = re.p;
        re.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          Gm(n, e);
          var v = Of, w = Kh(e.containerInfo), O = v.focusedElem, j = v.selectionRange;
          if (w !== O && O && O.ownerDocument && Qh(
            O.ownerDocument.documentElement,
            O
          )) {
            if (j !== null && tc(O)) {
              var q = j.start, Q = j.end;
              if (Q === void 0 && (Q = q), "selectionStart" in O)
                O.selectionStart = q, O.selectionEnd = Math.min(
                  Q,
                  O.value.length
                );
              else {
                var ee = O.ownerDocument || document, Z = ee && ee.defaultView || window;
                if (Z.getSelection) {
                  var V = Z.getSelection(), Te = O.textContent.length, we = Math.min(j.start, Te), et = j.end === void 0 ? we : Math.min(j.end, Te);
                  !V.extend && we > et && (w = et, et = we, we = w);
                  var I = $h(
                    O,
                    we
                  ), z = $h(
                    O,
                    et
                  );
                  if (I && z && (V.rangeCount !== 1 || V.anchorNode !== I.node || V.anchorOffset !== I.offset || V.focusNode !== z.node || V.focusOffset !== z.offset)) {
                    var U = ee.createRange();
                    U.setStart(I.node, I.offset), V.removeAllRanges(), we > et ? (V.addRange(U), V.extend(z.node, z.offset)) : (U.setEnd(z.node, z.offset), V.addRange(U));
                  }
                }
              }
            }
            for (ee = [], V = O; V = V.parentNode; )
              V.nodeType === 1 && ee.push({
                element: V,
                left: V.scrollLeft,
                top: V.scrollTop
              });
            for (typeof O.focus == "function" && O.focus(), O = 0; O < ee.length; O++) {
              var J = ee[O];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          po = !!Tf, Of = Tf = null;
        } finally {
          Qe = c, re.p = l, B.T = a;
        }
      }
      e.current = n, zt = 2;
    }
  }
  function cg() {
    if (zt === 2) {
      zt = 0;
      var e = qr, n = mi, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = B.T, B.T = null;
        var l = re.p;
        re.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          Hm(e, n.alternate, n);
        } finally {
          Qe = c, re.p = l, B.T = a;
        }
      }
      zt = 3;
    }
  }
  function fg() {
    if (zt === 4 || zt === 3) {
      zt = 0, Se();
      var e = qr, n = mi, a = gi, l = Jm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? zt = 5 : (zt = 0, mi = qr = null, dg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Hr = null), Ru(a), n = n.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            tr,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = B.T, c = re.p, re.p = 2, B.T = null;
        try {
          for (var v = e.onRecoverableError, w = 0; w < l.length; w++) {
            var O = l[w];
            v(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          B.T = n, re.p = c;
        }
      }
      (gi & 3) !== 0 && to(), $n(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === pf ? Ss++ : (Ss = 0, pf = e) : Ss = 0, xs(0);
    }
  }
  function dg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ts(n)));
  }
  function to(e) {
    return ug(), cg(), fg(), hg();
  }
  function hg() {
    if (zt !== 5) return !1;
    var e = qr, n = df;
    df = 0;
    var a = Ru(gi), l = B.T, c = re.p;
    try {
      re.p = 32 > a ? 32 : a, B.T = null, a = hf, hf = null;
      var v = qr, w = gi;
      if (zt = 0, mi = qr = null, gi = 0, (Qe & 6) !== 0) throw Error(s(331));
      var O = Qe;
      if (Qe |= 4, Qm(v.current), Ym(
        v,
        v.current,
        w,
        a
      ), Qe = O, xs(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(tr, v);
        } catch {
        }
      return !0;
    } finally {
      re.p = c, B.T = l, dg(e, n);
    }
  }
  function pg(e, n, a) {
    n = Cn(a, n), n = Gc(e.stateNode, n, 2), e = kr(e, n, 2), e !== null && (Bi(e, 2), $n(e));
  }
  function nt(e, n, a) {
    if (e.tag === 3)
      pg(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          pg(
            n,
            e,
            a
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Hr === null || !Hr.has(l))) {
            e = Cn(a, e), a = ym(2), l = kr(n, a, 2), l !== null && (bm(
              a,
              l,
              n,
              e
            ), Bi(l, 2), $n(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function yf(e, n, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new $b();
      var c = /* @__PURE__ */ new Set();
      l.set(n, c);
    } else
      c = l.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(n, c));
    c.has(a) || (of = !0, c.add(a), e = e_.bind(null, e, n, a), n.then(e, e));
  }
  function e_(e, n, a) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, rt === e && (Fe & a) === a && (ht === 4 || ht === 3 && (Fe & 62914560) === Fe && 300 > ke() - ff ? (Qe & 2) === 0 && vi(e, 0) : uf |= a, pi === Fe && (pi = 0)), $n(e);
  }
  function mg(e, n) {
    n === 0 && (n = fh()), e = Wa(e, n), e !== null && (Bi(e, n), $n(e));
  }
  function t_(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), mg(e, a);
  }
  function n_(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, c = e.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(n), mg(e, a);
  }
  function r_(e, n) {
    return se(e, n);
  }
  var no = null, bi = null, bf = !1, ro = !1, _f = !1, Ea = 0;
  function $n(e) {
    e !== bi && e.next === null && (bi === null ? no = bi = e : bi = bi.next = e), ro = !0, bf || (bf = !0, i_());
  }
  function xs(e, n) {
    if (!_f && ro) {
      _f = !0;
      do
        for (var a = !1, l = no; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var v = 0;
            else {
              var w = l.suspendedLanes, O = l.pingedLanes;
              v = (1 << 31 - Zt(42 | e) + 1) - 1, v &= c & ~(w & ~O), v = v & 201326741 ? v & 201326741 | 1 : v ? v | 2 : 0;
            }
            v !== 0 && (a = !0, bg(l, v));
          } else
            v = Fe, v = Gt(
              l,
              l === rt ? v : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (v & 3) === 0 || Qt(l, v) || (a = !0, bg(l, v));
          l = l.next;
        }
      while (a);
      _f = !1;
    }
  }
  function a_() {
    gg();
  }
  function gg() {
    ro = bf = !1;
    var e = 0;
    Ea !== 0 && (h_() && (e = Ea), Ea = 0);
    for (var n = ke(), a = null, l = no; l !== null; ) {
      var c = l.next, v = vg(l, n);
      v === 0 ? (l.next = null, a === null ? no = c : a.next = c, c === null && (bi = a)) : (a = l, (e !== 0 || (v & 3) !== 0) && (ro = !0)), l = c;
    }
    xs(e);
  }
  function vg(e, n) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, v = e.pendingLanes & -62914561; 0 < v; ) {
      var w = 31 - Zt(v), O = 1 << w, j = c[w];
      j === -1 ? ((O & a) === 0 || (O & l) !== 0) && (c[w] = ul(O, n)) : j <= n && (e.expiredLanes |= O), v &= ~O;
    }
    if (n = rt, a = Fe, a = Gt(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === n && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && ye(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Qt(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (l !== null && ye(l), Ru(a)) {
        case 2:
        case 8:
          a = be;
          break;
        case 32:
          a = he;
          break;
        case 268435456:
          a = Ge;
          break;
        default:
          a = he;
      }
      return l = yg.bind(null, e), a = se(a, l), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return l !== null && l !== null && ye(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function yg(e, n) {
    if (zt !== 0 && zt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (to() && e.callbackNode !== a)
      return null;
    var l = Fe;
    return l = Gt(
      e,
      e === rt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (eg(e, l, n), vg(e, ke()), e.callbackNode != null && e.callbackNode === a ? yg.bind(null, e) : null);
  }
  function bg(e, n) {
    if (to()) return null;
    eg(e, n, !0);
  }
  function i_() {
    m_(function() {
      (Qe & 6) !== 0 ? se(
        $e,
        a_
      ) : gg();
    });
  }
  function Sf() {
    return Ea === 0 && (Ea = Ia()), Ea;
  }
  function _g(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : pl("" + e);
  }
  function Sg(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function s_(e, n, a, l, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var v = _g(
        (c[Kt] || null).action
      ), w = l.submitter;
      w && (n = (n = w[Kt] || null) ? _g(n.formAction) : w.getAttribute("formAction"), n !== null && (v = n, w = null));
      var O = new yl(
        "action",
        "action",
        null,
        l,
        c
      );
      e.push({
        event: O,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Ea !== 0) {
                  var j = w ? Sg(c, w) : new FormData(c);
                  Uc(
                    a,
                    {
                      pending: !0,
                      data: j,
                      method: c.method,
                      action: v
                    },
                    null,
                    j
                  );
                }
              } else
                typeof v == "function" && (O.preventDefault(), j = w ? Sg(c, w) : new FormData(c), Uc(
                  a,
                  {
                    pending: !0,
                    data: j,
                    method: c.method,
                    action: v
                  },
                  v,
                  j
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var xf = 0; xf < ic.length; xf++) {
    var Ef = ic[xf], l_ = Ef.toLowerCase(), o_ = Ef[0].toUpperCase() + Ef.slice(1);
    zn(
      l_,
      "on" + o_
    );
  }
  zn(ep, "onAnimationEnd"), zn(tp, "onAnimationIteration"), zn(np, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(wb, "onTransitionRun"), zn(Ab, "onTransitionStart"), zn(Nb, "onTransitionCancel"), zn(rp, "onTransitionEnd"), Fa("onMouseEnter", ["mouseout", "mouseover"]), Fa("onMouseLeave", ["mouseout", "mouseover"]), Fa("onPointerEnter", ["pointerout", "pointerover"]), Fa("onPointerLeave", ["pointerout", "pointerover"]), la(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), la(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), la("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), la(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), la(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), la(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Es = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), u_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Es)
  );
  function xg(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], c = l.event;
      l = l.listeners;
      e: {
        var v = void 0;
        if (n)
          for (var w = l.length - 1; 0 <= w; w--) {
            var O = l[w], j = O.instance, q = O.currentTarget;
            if (O = O.listener, j !== v && c.isPropagationStopped())
              break e;
            v = O, c.currentTarget = q;
            try {
              v(c);
            } catch (Q) {
              Zl(Q);
            }
            c.currentTarget = null, v = j;
          }
        else
          for (w = 0; w < l.length; w++) {
            if (O = l[w], j = O.instance, q = O.currentTarget, O = O.listener, j !== v && c.isPropagationStopped())
              break e;
            v = O, c.currentTarget = q;
            try {
              v(c);
            } catch (Q) {
              Zl(Q);
            }
            c.currentTarget = null, v = j;
          }
      }
    }
  }
  function Ue(e, n) {
    var a = n[zu];
    a === void 0 && (a = n[zu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Eg(n, e, 2, !1), a.add(l));
  }
  function Cf(e, n, a) {
    var l = 0;
    n && (l |= 4), Eg(
      a,
      e,
      l,
      n
    );
  }
  var ao = "_reactListening" + Math.random().toString(36).slice(2);
  function wf(e) {
    if (!e[ao]) {
      e[ao] = !0, gh.forEach(function(a) {
        a !== "selectionchange" && (u_.has(a) || Cf(a, !1, e), Cf(a, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[ao] || (n[ao] = !0, Cf("selectionchange", !1, n));
    }
  }
  function Eg(e, n, a, l) {
    switch (Yg(n)) {
      case 2:
        var c = L_;
        break;
      case 8:
        c = P_;
        break;
      default:
        c = Bf;
    }
    a = c.bind(
      null,
      n,
      a,
      e
    ), c = void 0, !Vu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(n, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, a, !0) : c !== void 0 ? e.addEventListener(n, a, {
      passive: c
    }) : e.addEventListener(n, a, !1);
  }
  function Af(e, n, a, l, c) {
    var v = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var w = l.tag;
        if (w === 3 || w === 4) {
          var O = l.stateNode.containerInfo;
          if (O === c) break;
          if (w === 4)
            for (w = l.return; w !== null; ) {
              var j = w.tag;
              if ((j === 3 || j === 4) && w.stateNode.containerInfo === c)
                return;
              w = w.return;
            }
          for (; O !== null; ) {
            if (w = Ua(O), w === null) return;
            if (j = w.tag, j === 5 || j === 6 || j === 26 || j === 27) {
              l = v = w;
              continue e;
            }
            O = O.parentNode;
          }
        }
        l = l.return;
      }
    Dh(function() {
      var q = v, Q = Zu(a), ee = [];
      e: {
        var Z = ap.get(e);
        if (Z !== void 0) {
          var V = yl, Te = e;
          switch (e) {
            case "keypress":
              if (gl(a) === 0) break e;
            case "keydown":
            case "keyup":
              V = rb;
              break;
            case "focusin":
              Te = "focus", V = Qu;
              break;
            case "focusout":
              Te = "blur", V = Qu;
              break;
            case "beforeblur":
            case "afterblur":
              V = Qu;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = jh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = G1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = sb;
              break;
            case ep:
            case tp:
            case np:
              V = X1;
              break;
            case rp:
              V = ob;
              break;
            case "scroll":
            case "scrollend":
              V = F1;
              break;
            case "wheel":
              V = cb;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = Q1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = zh;
              break;
            case "toggle":
            case "beforetoggle":
              V = db;
          }
          var we = (n & 4) !== 0, et = !we && (e === "scroll" || e === "scrollend"), I = we ? Z !== null ? Z + "Capture" : null : Z;
          we = [];
          for (var z = q, U; z !== null; ) {
            var J = z;
            if (U = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || U === null || I === null || (J = qi(z, I), J != null && we.push(
              Cs(z, J, U)
            )), et) break;
            z = z.return;
          }
          0 < we.length && (Z = new V(
            Z,
            Te,
            null,
            a,
            Q
          ), ee.push({ event: Z, listeners: we }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Z = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", Z && a !== Fu && (Te = a.relatedTarget || a.fromElement) && (Ua(Te) || Te[Ba]))
            break e;
          if ((V || Z) && (Z = Q.window === Q ? Q : (Z = Q.ownerDocument) ? Z.defaultView || Z.parentWindow : window, V ? (Te = a.relatedTarget || a.toElement, V = q, Te = Te ? Ua(Te) : null, Te !== null && (et = u(Te), we = Te.tag, Te !== et || we !== 5 && we !== 27 && we !== 6) && (Te = null)) : (V = null, Te = q), V !== Te)) {
            if (we = jh, J = "onMouseLeave", I = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (we = zh, J = "onPointerLeave", I = "onPointerEnter", z = "pointer"), et = V == null ? Z : Hi(V), U = Te == null ? Z : Hi(Te), Z = new we(
              J,
              z + "leave",
              V,
              a,
              Q
            ), Z.target = et, Z.relatedTarget = U, J = null, Ua(Q) === q && (we = new we(
              I,
              z + "enter",
              Te,
              a,
              Q
            ), we.target = U, we.relatedTarget = et, J = we), et = J, V && Te)
              t: {
                for (we = V, I = Te, z = 0, U = we; U; U = _i(U))
                  z++;
                for (U = 0, J = I; J; J = _i(J))
                  U++;
                for (; 0 < z - U; )
                  we = _i(we), z--;
                for (; 0 < U - z; )
                  I = _i(I), U--;
                for (; z--; ) {
                  if (we === I || I !== null && we === I.alternate)
                    break t;
                  we = _i(we), I = _i(I);
                }
                we = null;
              }
            else we = null;
            V !== null && Cg(
              ee,
              Z,
              V,
              we,
              !1
            ), Te !== null && et !== null && Cg(
              ee,
              et,
              Te,
              we,
              !0
            );
          }
        }
        e: {
          if (Z = q ? Hi(q) : window, V = Z.nodeName && Z.nodeName.toLowerCase(), V === "select" || V === "input" && Z.type === "file")
            var ge = Fh;
          else if (Hh(Z))
            if (Zh)
              ge = xb;
            else {
              ge = _b;
              var Ie = bb;
            }
          else
            V = Z.nodeName, !V || V.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? q && qu(q.elementType) && (ge = Fh) : ge = Sb;
          if (ge && (ge = ge(e, q))) {
            qh(
              ee,
              ge,
              a,
              Q
            );
            break e;
          }
          Ie && Ie(e, Z, q), e === "focusout" && q && Z.type === "number" && q.memoizedProps.value != null && Hu(Z, "number", Z.value);
        }
        switch (Ie = q ? Hi(q) : window, e) {
          case "focusin":
            (Hh(Ie) || Ie.contentEditable === "true") && (Qa = Ie, nc = q, Qi = null);
            break;
          case "focusout":
            Qi = nc = Qa = null;
            break;
          case "mousedown":
            rc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rc = !1, Jh(ee, a, Q);
            break;
          case "selectionchange":
            if (Cb) break;
          case "keydown":
          case "keyup":
            Jh(ee, a, Q);
        }
        var _e;
        if (Ju)
          e: {
            switch (e) {
              case "compositionstart":
                var Ae = "onCompositionStart";
                break e;
              case "compositionend":
                Ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ae = "onCompositionUpdate";
                break e;
            }
            Ae = void 0;
          }
        else
          $a ? Bh(e, a) && (Ae = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ae = "onCompositionStart");
        Ae && (Lh && a.locale !== "ko" && ($a || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && $a && (_e = Mh()) : (Tr = Q, Yu = "value" in Tr ? Tr.value : Tr.textContent, $a = !0)), Ie = io(q, Ae), 0 < Ie.length && (Ae = new Rh(
          Ae,
          e,
          null,
          a,
          Q
        ), ee.push({ event: Ae, listeners: Ie }), _e ? Ae.data = _e : (_e = Uh(a), _e !== null && (Ae.data = _e)))), (_e = pb ? mb(e, a) : gb(e, a)) && (Ae = io(q, "onBeforeInput"), 0 < Ae.length && (Ie = new Rh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          Q
        ), ee.push({
          event: Ie,
          listeners: Ae
        }), Ie.data = _e)), s_(
          ee,
          e,
          q,
          a,
          Q
        );
      }
      xg(ee, n);
    });
  }
  function Cs(e, n, a) {
    return {
      instance: e,
      listener: n,
      currentTarget: a
    };
  }
  function io(e, n) {
    for (var a = n + "Capture", l = []; e !== null; ) {
      var c = e, v = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || v === null || (c = qi(e, a), c != null && l.unshift(
        Cs(e, c, v)
      ), c = qi(e, n), c != null && l.push(
        Cs(e, c, v)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function _i(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Cg(e, n, a, l, c) {
    for (var v = n._reactName, w = []; a !== null && a !== l; ) {
      var O = a, j = O.alternate, q = O.stateNode;
      if (O = O.tag, j !== null && j === l) break;
      O !== 5 && O !== 26 && O !== 27 || q === null || (j = q, c ? (q = qi(a, v), q != null && w.unshift(
        Cs(a, q, j)
      )) : c || (q = qi(a, v), q != null && w.push(
        Cs(a, q, j)
      ))), a = a.return;
    }
    w.length !== 0 && e.push({ event: n, listeners: w });
  }
  var c_ = /\r\n?/g, f_ = /\u0000|\uFFFD/g;
  function wg(e) {
    return (typeof e == "string" ? e : "" + e).replace(c_, `
`).replace(f_, "");
  }
  function Ag(e, n) {
    return n = wg(n), wg(e) === n;
  }
  function so() {
  }
  function We(e, n, a, l, c, v) {
    switch (a) {
      case "children":
        typeof l == "string" ? n === "body" || n === "textarea" && l === "" || Va(e, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && Va(e, "" + l);
        break;
      case "className":
        fl(e, "class", l);
        break;
      case "tabIndex":
        fl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fl(e, a, l);
        break;
      case "style":
        Th(e, l, v);
        break;
      case "data":
        if (n !== "object") {
          fl(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = pl("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof v == "function" && (a === "formAction" ? (n !== "input" && We(e, n, "name", c.name, c, null), We(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), We(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), We(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (We(e, n, "encType", c.encType, c, null), We(e, n, "method", c.method, c, null), We(e, n, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = pl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = so);
        break;
      case "onScroll":
        l != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ue("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = pl("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        Ue("beforetoggle", e), Ue("toggle", e), cl(e, "popover", l);
        break;
      case "xlinkActuate":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        rr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        rr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        cl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = H1.get(a) || a, cl(e, a, l));
    }
  }
  function Nf(e, n, a, l, c, v) {
    switch (a) {
      case "style":
        Th(e, l, v);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Va(e, l) : (typeof l == "number" || typeof l == "bigint") && Va(e, "" + l);
        break;
      case "onScroll":
        l != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ue("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = so);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!vh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), v = e[Kt] || null, v = v != null ? v[a] : null, typeof v == "function" && e.removeEventListener(n, v, c), typeof l == "function")) {
              typeof v != "function" && v !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, l, c);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : cl(e, a, l);
          }
    }
  }
  function Lt(e, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ue("error", e), Ue("load", e);
        var l = !1, c = !1, v;
        for (v in a)
          if (a.hasOwnProperty(v)) {
            var w = a[v];
            if (w != null)
              switch (v) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, n));
                default:
                  We(e, n, v, w, a, null);
              }
          }
        c && We(e, n, "srcSet", a.srcSet, a, null), l && We(e, n, "src", a.src, a, null);
        return;
      case "input":
        Ue("invalid", e);
        var O = v = w = c = null, j = null, q = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var Q = a[l];
            if (Q != null)
              switch (l) {
                case "name":
                  c = Q;
                  break;
                case "type":
                  w = Q;
                  break;
                case "checked":
                  j = Q;
                  break;
                case "defaultChecked":
                  q = Q;
                  break;
                case "value":
                  v = Q;
                  break;
                case "defaultValue":
                  O = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(s(137, n));
                  break;
                default:
                  We(e, n, l, Q, a, null);
              }
          }
        Ch(
          e,
          v,
          O,
          j,
          q,
          w,
          c,
          !1
        ), dl(e);
        return;
      case "select":
        Ue("invalid", e), l = w = v = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (O = a[c], O != null))
            switch (c) {
              case "value":
                v = O;
                break;
              case "defaultValue":
                w = O;
                break;
              case "multiple":
                l = O;
              default:
                We(e, n, c, O, a, null);
            }
        n = v, a = w, e.multiple = !!l, n != null ? Ga(e, !!l, n, !1) : a != null && Ga(e, !!l, a, !0);
        return;
      case "textarea":
        Ue("invalid", e), v = c = l = null;
        for (w in a)
          if (a.hasOwnProperty(w) && (O = a[w], O != null))
            switch (w) {
              case "value":
                l = O;
                break;
              case "defaultValue":
                c = O;
                break;
              case "children":
                v = O;
                break;
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(s(91));
                break;
              default:
                We(e, n, w, O, a, null);
            }
        Ah(e, l, c, v), dl(e);
        return;
      case "option":
        for (j in a)
          if (a.hasOwnProperty(j) && (l = a[j], l != null))
            switch (j) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                We(e, n, j, l, a, null);
            }
        return;
      case "dialog":
        Ue("beforetoggle", e), Ue("toggle", e), Ue("cancel", e), Ue("close", e);
        break;
      case "iframe":
      case "object":
        Ue("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Es.length; l++)
          Ue(Es[l], e);
        break;
      case "image":
        Ue("error", e), Ue("load", e);
        break;
      case "details":
        Ue("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ue("error", e), Ue("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in a)
          if (a.hasOwnProperty(q) && (l = a[q], l != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                We(e, n, q, l, a, null);
            }
        return;
      default:
        if (qu(n)) {
          for (Q in a)
            a.hasOwnProperty(Q) && (l = a[Q], l !== void 0 && Nf(
              e,
              n,
              Q,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (O in a)
      a.hasOwnProperty(O) && (l = a[O], l != null && We(e, n, O, l, a, null));
  }
  function d_(e, n, a, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null, v = null, w = null, O = null, j = null, q = null, Q = null;
        for (V in a) {
          var ee = a[V];
          if (a.hasOwnProperty(V) && ee != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                j = ee;
              default:
                l.hasOwnProperty(V) || We(e, n, V, null, l, ee);
            }
        }
        for (var Z in l) {
          var V = l[Z];
          if (ee = a[Z], l.hasOwnProperty(Z) && (V != null || ee != null))
            switch (Z) {
              case "type":
                v = V;
                break;
              case "name":
                c = V;
                break;
              case "checked":
                q = V;
                break;
              case "defaultChecked":
                Q = V;
                break;
              case "value":
                w = V;
                break;
              case "defaultValue":
                O = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null)
                  throw Error(s(137, n));
                break;
              default:
                V !== ee && We(
                  e,
                  n,
                  Z,
                  V,
                  l,
                  ee
                );
            }
        }
        Uu(
          e,
          w,
          O,
          j,
          q,
          Q,
          v,
          c
        );
        return;
      case "select":
        V = w = O = Z = null;
        for (v in a)
          if (j = a[v], a.hasOwnProperty(v) && j != null)
            switch (v) {
              case "value":
                break;
              case "multiple":
                V = j;
              default:
                l.hasOwnProperty(v) || We(
                  e,
                  n,
                  v,
                  null,
                  l,
                  j
                );
            }
        for (c in l)
          if (v = l[c], j = a[c], l.hasOwnProperty(c) && (v != null || j != null))
            switch (c) {
              case "value":
                Z = v;
                break;
              case "defaultValue":
                O = v;
                break;
              case "multiple":
                w = v;
              default:
                v !== j && We(
                  e,
                  n,
                  c,
                  v,
                  l,
                  j
                );
            }
        n = O, a = w, l = V, Z != null ? Ga(e, !!a, Z, !1) : !!l != !!a && (n != null ? Ga(e, !!a, n, !0) : Ga(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        V = Z = null;
        for (O in a)
          if (c = a[O], a.hasOwnProperty(O) && c != null && !l.hasOwnProperty(O))
            switch (O) {
              case "value":
                break;
              case "children":
                break;
              default:
                We(e, n, O, null, l, c);
            }
        for (w in l)
          if (c = l[w], v = a[w], l.hasOwnProperty(w) && (c != null || v != null))
            switch (w) {
              case "value":
                Z = c;
                break;
              case "defaultValue":
                V = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== v && We(e, n, w, c, l, v);
            }
        wh(e, Z, V);
        return;
      case "option":
        for (var Te in a)
          if (Z = a[Te], a.hasOwnProperty(Te) && Z != null && !l.hasOwnProperty(Te))
            switch (Te) {
              case "selected":
                e.selected = !1;
                break;
              default:
                We(
                  e,
                  n,
                  Te,
                  null,
                  l,
                  Z
                );
            }
        for (j in l)
          if (Z = l[j], V = a[j], l.hasOwnProperty(j) && Z !== V && (Z != null || V != null))
            switch (j) {
              case "selected":
                e.selected = Z && typeof Z != "function" && typeof Z != "symbol";
                break;
              default:
                We(
                  e,
                  n,
                  j,
                  Z,
                  l,
                  V
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var we in a)
          Z = a[we], a.hasOwnProperty(we) && Z != null && !l.hasOwnProperty(we) && We(e, n, we, null, l, Z);
        for (q in l)
          if (Z = l[q], V = a[q], l.hasOwnProperty(q) && Z !== V && (Z != null || V != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, n));
                break;
              default:
                We(
                  e,
                  n,
                  q,
                  Z,
                  l,
                  V
                );
            }
        return;
      default:
        if (qu(n)) {
          for (var et in a)
            Z = a[et], a.hasOwnProperty(et) && Z !== void 0 && !l.hasOwnProperty(et) && Nf(
              e,
              n,
              et,
              void 0,
              l,
              Z
            );
          for (Q in l)
            Z = l[Q], V = a[Q], !l.hasOwnProperty(Q) || Z === V || Z === void 0 && V === void 0 || Nf(
              e,
              n,
              Q,
              Z,
              l,
              V
            );
          return;
        }
    }
    for (var I in a)
      Z = a[I], a.hasOwnProperty(I) && Z != null && !l.hasOwnProperty(I) && We(e, n, I, null, l, Z);
    for (ee in l)
      Z = l[ee], V = a[ee], !l.hasOwnProperty(ee) || Z === V || Z == null && V == null || We(e, n, ee, Z, l, V);
  }
  var Tf = null, Of = null;
  function lo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ng(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Tg(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Df(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Mf = null;
  function h_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Mf ? !1 : (Mf = e, !0) : (Mf = null, !1);
  }
  var Og = typeof setTimeout == "function" ? setTimeout : void 0, p_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Dg = typeof Promise == "function" ? Promise : void 0, m_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dg < "u" ? function(e) {
    return Dg.resolve(null).then(e).catch(g_);
  } : Og;
  function g_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Zr(e) {
    return e === "head";
  }
  function Mg(e, n) {
    var a = n, l = 0, c = 0;
    do {
      var v = a.nextSibling;
      if (e.removeChild(a), v && v.nodeType === 8)
        if (a = v.data, a === "/$") {
          if (0 < l && 8 > l) {
            a = l;
            var w = e.ownerDocument;
            if (a & 1 && ws(w.documentElement), a & 2 && ws(w.body), a & 4)
              for (a = w.head, ws(a), w = a.firstChild; w; ) {
                var O = w.nextSibling, j = w.nodeName;
                w[Ui] || j === "SCRIPT" || j === "STYLE" || j === "LINK" && w.rel.toLowerCase() === "stylesheet" || a.removeChild(w), w = O;
              }
          }
          if (c === 0) {
            e.removeChild(v), js(n);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!" ? c++ : l = a.charCodeAt(0) - 48;
      else l = 0;
      a = v;
    } while (a);
    js(n);
  }
  function kf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          kf(a), Lu(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function v_(e, n, a, l) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Ui])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (v = e.getAttribute("rel"), v === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (v !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (v = e.getAttribute("src"), (v !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && v && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var v = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === v)
          return e;
      } else return e;
      if (e = Pn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function y_(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function jf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function b_(e, n) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      n();
    else {
      var l = function() {
        n(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Pn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var Rf = null;
  function kg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return e;
          n--;
        } else a === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function jg(e, n, a) {
    switch (n = lo(a), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function ws(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Lu(e);
  }
  var Dn = /* @__PURE__ */ new Map(), Rg = /* @__PURE__ */ new Set();
  function oo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var vr = re.d;
  re.d = {
    f: __,
    r: S_,
    D: x_,
    C: E_,
    L: C_,
    m: w_,
    X: N_,
    S: A_,
    M: T_
  };
  function __() {
    var e = vr.f(), n = Wl();
    return e || n;
  }
  function S_(e) {
    var n = Ha(e);
    n !== null && n.tag === 5 && n.type === "form" ? em(n) : vr.r(e);
  }
  var Si = typeof document > "u" ? null : document;
  function zg(e, n, a) {
    var l = Si;
    if (l && typeof n == "string" && n) {
      var c = En(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), Rg.has(c) || (Rg.add(c), e = { rel: e, crossOrigin: a, href: n }, l.querySelector(c) === null && (n = l.createElement("link"), Lt(n, "link", e), Dt(n), l.head.appendChild(n)));
    }
  }
  function x_(e) {
    vr.D(e), zg("dns-prefetch", e, null);
  }
  function E_(e, n) {
    vr.C(e, n), zg("preconnect", e, n);
  }
  function C_(e, n, a) {
    vr.L(e, n, a);
    var l = Si;
    if (l && e && n) {
      var c = 'link[rel="preload"][as="' + En(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + En(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + En(
        a.imageSizes
      ) + '"]')) : c += '[href="' + En(e) + '"]';
      var v = c;
      switch (n) {
        case "style":
          v = xi(e);
          break;
        case "script":
          v = Ei(e);
      }
      Dn.has(v) || (e = y(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), Dn.set(v, e), l.querySelector(c) !== null || n === "style" && l.querySelector(As(v)) || n === "script" && l.querySelector(Ns(v)) || (n = l.createElement("link"), Lt(n, "link", e), Dt(n), l.head.appendChild(n)));
    }
  }
  function w_(e, n) {
    vr.m(e, n);
    var a = Si;
    if (a && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + En(l) + '"][href="' + En(e) + '"]', v = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          v = Ei(e);
      }
      if (!Dn.has(v) && (e = y({ rel: "modulepreload", href: e }, n), Dn.set(v, e), a.querySelector(c) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ns(v)))
              return;
        }
        l = a.createElement("link"), Lt(l, "link", e), Dt(l), a.head.appendChild(l);
      }
    }
  }
  function A_(e, n, a) {
    vr.S(e, n, a);
    var l = Si;
    if (l && e) {
      var c = qa(l).hoistableStyles, v = xi(e);
      n = n || "default";
      var w = c.get(v);
      if (!w) {
        var O = { loading: 0, preload: null };
        if (w = l.querySelector(
          As(v)
        ))
          O.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = Dn.get(v)) && zf(e, a);
          var j = w = l.createElement("link");
          Dt(j), Lt(j, "link", e), j._p = new Promise(function(q, Q) {
            j.onload = q, j.onerror = Q;
          }), j.addEventListener("load", function() {
            O.loading |= 1;
          }), j.addEventListener("error", function() {
            O.loading |= 2;
          }), O.loading |= 4, uo(w, n, l);
        }
        w = {
          type: "stylesheet",
          instance: w,
          count: 1,
          state: O
        }, c.set(v, w);
      }
    }
  }
  function N_(e, n) {
    vr.X(e, n);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = Ei(e), v = l.get(c);
      v || (v = a.querySelector(Ns(c)), v || (e = y({ src: e, async: !0 }, n), (n = Dn.get(c)) && Lf(e, n), v = a.createElement("script"), Dt(v), Lt(v, "link", e), a.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, l.set(c, v));
    }
  }
  function T_(e, n) {
    vr.M(e, n);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = Ei(e), v = l.get(c);
      v || (v = a.querySelector(Ns(c)), v || (e = y({ src: e, async: !0, type: "module" }, n), (n = Dn.get(c)) && Lf(e, n), v = a.createElement("script"), Dt(v), Lt(v, "link", e), a.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, l.set(c, v));
    }
  }
  function Lg(e, n, a, l) {
    var c = (c = G.current) ? oo(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (n = xi(a.href), a = qa(
          c
        ).hoistableStyles, l = a.get(n), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = xi(a.href);
          var v = qa(
            c
          ).hoistableStyles, w = v.get(e);
          if (w || (c = c.ownerDocument || c, w = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, v.set(e, w), (v = c.querySelector(
            As(e)
          )) && !v._p && (w.instance = v, w.state.loading = 5), Dn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Dn.set(e, a), v || O_(
            c,
            e,
            a,
            w.state
          ))), n && l === null)
            throw Error(s(528, ""));
          return w;
        }
        if (n && l !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ei(a), a = qa(
          c
        ).hoistableScripts, l = a.get(n), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function xi(e) {
    return 'href="' + En(e) + '"';
  }
  function As(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Pg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function O_(e, n, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = e.createElement("link"), l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    }), Lt(n, "link", a), Dt(n), e.head.appendChild(n));
  }
  function Ei(e) {
    return '[src="' + En(e) + '"]';
  }
  function Ns(e) {
    return "script[async]" + e;
  }
  function Ig(e, n, a) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + En(a.href) + '"]'
          );
          if (l)
            return n.instance = l, Dt(l), l;
          var c = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Dt(l), Lt(l, "style", c), uo(l, a.precedence, e), n.instance = l;
        case "stylesheet":
          c = xi(a.href);
          var v = e.querySelector(
            As(c)
          );
          if (v)
            return n.state.loading |= 4, n.instance = v, Dt(v), v;
          l = Pg(a), (c = Dn.get(c)) && zf(l, c), v = (e.ownerDocument || e).createElement("link"), Dt(v);
          var w = v;
          return w._p = new Promise(function(O, j) {
            w.onload = O, w.onerror = j;
          }), Lt(v, "link", l), n.state.loading |= 4, uo(v, a.precedence, e), n.instance = v;
        case "script":
          return v = Ei(a.src), (c = e.querySelector(
            Ns(v)
          )) ? (n.instance = c, Dt(c), c) : (l = a, (c = Dn.get(v)) && (l = y({}, a), Lf(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), Dt(c), Lt(c, "link", l), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, uo(l, a.precedence, e));
    return n.instance;
  }
  function uo(e, n, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = l.length ? l[l.length - 1] : null, v = c, w = 0; w < l.length; w++) {
      var O = l[w];
      if (O.dataset.precedence === n) v = O;
      else if (v !== c) break;
    }
    v ? v.parentNode.insertBefore(e, v.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function zf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Lf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var co = null;
  function Bg(e, n, a) {
    if (co === null) {
      var l = /* @__PURE__ */ new Map(), c = co = /* @__PURE__ */ new Map();
      c.set(a, l);
    } else
      c = co, l = c.get(a), l || (l = /* @__PURE__ */ new Map(), c.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var v = a[c];
      if (!(v[Ui] || v[Bt] || e === "link" && v.getAttribute("rel") === "stylesheet") && v.namespaceURI !== "http://www.w3.org/2000/svg") {
        var w = v.getAttribute(n) || "";
        w = e + w;
        var O = l.get(w);
        O ? O.push(v) : l.set(w, [v]);
      }
    }
    return l;
  }
  function Ug(e, n, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function D_(e, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Hg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ts = null;
  function M_() {
  }
  function k_(e, n, a) {
    if (Ts === null) throw Error(s(475));
    var l = Ts;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = xi(a.href), v = e.querySelector(
          As(c)
        );
        if (v) {
          e = v._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = fo.bind(l), e.then(l, l)), n.state.loading |= 4, n.instance = v, Dt(v);
          return;
        }
        v = e.ownerDocument || e, a = Pg(a), (c = Dn.get(c)) && zf(a, c), v = v.createElement("link"), Dt(v);
        var w = v;
        w._p = new Promise(function(O, j) {
          w.onload = O, w.onerror = j;
        }), Lt(v, "link", a), n.instance = v;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (l.count++, n = fo.bind(l), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function j_() {
    if (Ts === null) throw Error(s(475));
    var e = Ts;
    return e.stylesheets && e.count === 0 && Pf(e, e.stylesheets), 0 < e.count ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Pf(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function fo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Pf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ho = null;
  function Pf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ho = /* @__PURE__ */ new Map(), n.forEach(R_, e), ho = null, fo.call(e));
  }
  function R_(e, n) {
    if (!(n.state.loading & 4)) {
      var a = ho.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), ho.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), v = 0; v < c.length; v++) {
          var w = c[v];
          (w.nodeName === "LINK" || w.getAttribute("media") !== "not all") && (a.set(w.dataset.precedence, w), l = w);
        }
        l && a.set(null, l);
      }
      c = n.instance, w = c.getAttribute("data-precedence"), v = a.get(w) || l, v === l && a.set(null, c), a.set(w, c), this.count++, l = fo.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), v ? v.parentNode.insertBefore(c, v.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Os = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: pe,
    _currentValue2: pe,
    _threadCount: 0
  };
  function z_(e, n, a, l, c, v, w, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ku(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ku(0), this.hiddenUpdates = ku(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = v, this.onRecoverableError = w, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function qg(e, n, a, l, c, v, w, O, j, q, Q, ee) {
    return e = new z_(
      e,
      n,
      a,
      w,
      O,
      j,
      q,
      ee
    ), n = 1, v === !0 && (n |= 24), v = un(3, null, null, n), e.current = v, v.stateNode = e, n = vc(), n.refCount++, e.pooledCache = n, n.refCount++, v.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: n
    }, Sc(v), e;
  }
  function Fg(e) {
    return e ? (e = ei, e) : ei;
  }
  function Zg(e, n, a, l, c, v) {
    c = Fg(c), l.context === null ? l.context = c : l.pendingContext = c, l = Mr(n), l.payload = { element: a }, v = v === void 0 ? null : v, v !== null && (l.callback = v), a = kr(e, l, n), a !== null && (pn(a, e, n), is(a, e, n));
  }
  function Gg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function If(e, n) {
    Gg(e, n), (e = e.alternate) && Gg(e, n);
  }
  function Vg(e) {
    if (e.tag === 13) {
      var n = Wa(e, 67108864);
      n !== null && pn(n, e, 67108864), If(e, 67108864);
    }
  }
  var po = !0;
  function L_(e, n, a, l) {
    var c = B.T;
    B.T = null;
    var v = re.p;
    try {
      re.p = 2, Bf(e, n, a, l);
    } finally {
      re.p = v, B.T = c;
    }
  }
  function P_(e, n, a, l) {
    var c = B.T;
    B.T = null;
    var v = re.p;
    try {
      re.p = 8, Bf(e, n, a, l);
    } finally {
      re.p = v, B.T = c;
    }
  }
  function Bf(e, n, a, l) {
    if (po) {
      var c = Uf(l);
      if (c === null)
        Af(
          e,
          n,
          l,
          mo,
          a
        ), Xg(e, l);
      else if (B_(
        c,
        e,
        n,
        a,
        l
      ))
        l.stopPropagation();
      else if (Xg(e, l), n & 4 && -1 < I_.indexOf(e)) {
        for (; c !== null; ) {
          var v = Ha(c);
          if (v !== null)
            switch (v.tag) {
              case 3:
                if (v = v.stateNode, v.current.memoizedState.isDehydrated) {
                  var w = Sn(v.pendingLanes);
                  if (w !== 0) {
                    var O = v;
                    for (O.pendingLanes |= 2, O.entangledLanes |= 2; w; ) {
                      var j = 1 << 31 - Zt(w);
                      O.entanglements[1] |= j, w &= ~j;
                    }
                    $n(v), (Qe & 6) === 0 && (Kl = ke() + 500, xs(0));
                  }
                }
                break;
              case 13:
                O = Wa(v, 2), O !== null && pn(O, v, 2), Wl(), If(v, 2);
            }
          if (v = Uf(l), v === null && Af(
            e,
            n,
            l,
            mo,
            a
          ), v === c) break;
          c = v;
        }
        c !== null && l.stopPropagation();
      } else
        Af(
          e,
          n,
          l,
          null,
          a
        );
    }
  }
  function Uf(e) {
    return e = Zu(e), Hf(e);
  }
  var mo = null;
  function Hf(e) {
    if (mo = null, e = Ua(e), e !== null) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (e = f(n), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return mo = e, null;
  }
  function Yg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ze()) {
          case $e:
            return 2;
          case be:
            return 8;
          case he:
          case Le:
            return 32;
          case Ge:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qf = !1, Gr = null, Vr = null, Yr = null, Ds = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map(), Xr = [], I_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Xg(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gr = null;
        break;
      case "dragenter":
      case "dragleave":
        Vr = null;
        break;
      case "mouseover":
      case "mouseout":
        Yr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ds.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ms.delete(n.pointerId);
    }
  }
  function ks(e, n, a, l, c, v) {
    return e === null || e.nativeEvent !== v ? (e = {
      blockedOn: n,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: v,
      targetContainers: [c]
    }, n !== null && (n = Ha(n), n !== null && Vg(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function B_(e, n, a, l, c) {
    switch (n) {
      case "focusin":
        return Gr = ks(
          Gr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "dragenter":
        return Vr = ks(
          Vr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "mouseover":
        return Yr = ks(
          Yr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "pointerover":
        var v = c.pointerId;
        return Ds.set(
          v,
          ks(
            Ds.get(v) || null,
            e,
            n,
            a,
            l,
            c
          )
        ), !0;
      case "gotpointercapture":
        return v = c.pointerId, Ms.set(
          v,
          ks(
            Ms.get(v) || null,
            e,
            n,
            a,
            l,
            c
          )
        ), !0;
    }
    return !1;
  }
  function $g(e) {
    var n = Ua(e.target);
    if (n !== null) {
      var a = u(n);
      if (a !== null) {
        if (n = a.tag, n === 13) {
          if (n = f(a), n !== null) {
            e.blockedOn = n, k1(e.priority, function() {
              if (a.tag === 13) {
                var l = hn();
                l = ju(l);
                var c = Wa(a, l);
                c !== null && pn(c, a, l), If(a, l);
              }
            });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function go(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = Uf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Fu = l, a.target.dispatchEvent(l), Fu = null;
      } else
        return n = Ha(a), n !== null && Vg(n), e.blockedOn = a, !1;
      n.shift();
    }
    return !0;
  }
  function Qg(e, n, a) {
    go(e) && a.delete(n);
  }
  function U_() {
    qf = !1, Gr !== null && go(Gr) && (Gr = null), Vr !== null && go(Vr) && (Vr = null), Yr !== null && go(Yr) && (Yr = null), Ds.forEach(Qg), Ms.forEach(Qg);
  }
  function vo(e, n) {
    e.blockedOn === n && (e.blockedOn = null, qf || (qf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      U_
    )));
  }
  var yo = null;
  function Kg(e) {
    yo !== e && (yo = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        yo === e && (yo = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n], l = e[n + 1], c = e[n + 2];
          if (typeof l != "function") {
            if (Hf(l || a) === null)
              continue;
            break;
          }
          var v = Ha(a);
          v !== null && (e.splice(n, 3), n -= 3, Uc(
            v,
            {
              pending: !0,
              data: c,
              method: a.method,
              action: l
            },
            l,
            c
          ));
        }
      }
    ));
  }
  function js(e) {
    function n(j) {
      return vo(j, e);
    }
    Gr !== null && vo(Gr, e), Vr !== null && vo(Vr, e), Yr !== null && vo(Yr, e), Ds.forEach(n), Ms.forEach(n);
    for (var a = 0; a < Xr.length; a++) {
      var l = Xr[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Xr.length && (a = Xr[0], a.blockedOn === null); )
      $g(a), a.blockedOn === null && Xr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var c = a[l], v = a[l + 1], w = c[Kt] || null;
        if (typeof v == "function")
          w || Kg(a);
        else if (w) {
          var O = null;
          if (v && v.hasAttribute("formAction")) {
            if (c = v, w = v[Kt] || null)
              O = w.formAction;
            else if (Hf(c) !== null) continue;
          } else O = w.action;
          typeof O == "function" ? a[l + 1] = O : (a.splice(l, 3), l -= 3), Kg(a);
        }
      }
  }
  function Ff(e) {
    this._internalRoot = e;
  }
  bo.prototype.render = Ff.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var a = n.current, l = hn();
    Zg(a, l, e, n, null, null);
  }, bo.prototype.unmount = Ff.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Zg(e.current, 2, null, e, null, null), Wl(), n[Ba] = null;
    }
  };
  function bo(e) {
    this._internalRoot = e;
  }
  bo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = ph();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < Xr.length && n !== 0 && n < Xr[a].priority; a++) ;
      Xr.splice(a, 0, e), a === 0 && $g(e);
    }
  };
  var Jg = r.version;
  if (Jg !== "19.1.1")
    throw Error(
      s(
        527,
        Jg,
        "19.1.1"
      )
    );
  re.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(n), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var H_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_o.isDisabled && _o.supportsFiber)
      try {
        tr = _o.inject(
          H_
        ), mt = _o;
      } catch {
      }
  }
  return Ps.createRoot = function(e, n) {
    if (!o(e)) throw Error(s(299));
    var a = !1, l = "", c = pm, v = mm, w = gm, O = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (v = n.onCaughtError), n.onRecoverableError !== void 0 && (w = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (O = n.unstable_transitionCallbacks)), n = qg(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      c,
      v,
      w,
      O,
      null
    ), e[Ba] = n.current, wf(e), new Ff(n);
  }, Ps.hydrateRoot = function(e, n, a) {
    if (!o(e)) throw Error(s(299));
    var l = !1, c = "", v = pm, w = mm, O = gm, j = null, q = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (v = a.onUncaughtError), a.onCaughtError !== void 0 && (w = a.onCaughtError), a.onRecoverableError !== void 0 && (O = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (j = a.unstable_transitionCallbacks), a.formState !== void 0 && (q = a.formState)), n = qg(
      e,
      1,
      !0,
      n,
      a ?? null,
      l,
      c,
      v,
      w,
      O,
      j,
      q
    ), n.context = Fg(null), a = n.current, l = hn(), l = ju(l), c = Mr(l), c.callback = null, kr(a, c, l), a = l, n.current.lanes = a, Bi(n, a), $n(n), e[Ba] = n.current, wf(e), new bo(n);
  }, Ps.version = "19.1.1", Ps;
}
var hv;
function v2() {
  if (hv) return Yf.exports;
  hv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Yf.exports = g2(), Yf.exports;
}
var y2 = v2();
const pv = /* @__PURE__ */ r0(y2);
var b2 = Object.defineProperty, _2 = (t, r, i) => r in t ? b2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, S2 = (t, r, i) => _2(t, r + "", i);
class i0 extends Error {
  constructor(r, i) {
    super(r), S2(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function x2(t, r) {
  const i = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(t)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const o = i.getRequestHeaders();
  delete o["Content-Type"];
  const u = await fetch("/api/characters/import", {
    method: "POST",
    headers: o,
    body: s,
    cache: "no-cache"
  });
  if (!u.ok)
    throw new i0(u.statusText, u);
  await i.getCharacters();
}
async function E2(t, r) {
  var i;
  const s = SillyTavern.getContext();
  if (!t.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  t == null || delete t.json_data, (i = t?.data) == null || delete i.json_data;
  const o = s.getRequestHeaders(), u = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: o,
    body: JSON.stringify(t),
    cache: "no-cache"
  });
  if (!u.ok) {
    const f = await u.json().catch(() => ({ message: u.statusText }));
    throw new i0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var C2 = Object.defineProperty, w2 = (t, r, i) => r in t ? C2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, mv = (t, r, i) => w2(t, typeof r != "symbol" ? r + "" : r, i);
class s0 {
  constructor(r, i) {
    mv(this, "settingsKey"), mv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
  }
  /**
   * If defaultSettings has "version" and "formatVersion" properties, they will be used to track version and format version changes.
   *
   * For example, if you want to show a notification when a new version is released, you can check "result.version.changed".
   *
   * @param [options={}]
   * @param [options.strategy='recursive'] - 'recursive' will migrate old settings with the default settings.
   *
   * For complex settings, you can specify a custom migration strategy. For example, if you change the field name from "old" to "new", you can use:
   * @example
   * [
   *   {
   *     from: 'FORMAT-0.1.0',
   *     to: 'FORMAT-0.1.1',
   *     action: (previous) => {
   *       const data = {
   *         ...previous,
   *         new: previous.old,
   *       };
   *       delete data.old;
   *       return data;
   *     },
   *   },
   * ]
   */
  async initializeSettings(r = {}) {
    const { strategy: i = "recursive" } = r, s = this.defaultSettings.version, o = this.defaultSettings.formatVersion, u = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: s ?? ""
      },
      formatVersion: {
        changed: !1,
        new: o ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!u)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), f;
    const p = {
      ...f,
      oldSettings: structuredClone(u),
      version: {
        changed: !1,
        old: u.version,
        new: u.version
      },
      formatVersion: {
        changed: !1,
        old: u.formatVersion,
        new: u.formatVersion
      }
    };
    if (i === "recursive") {
      let h = function(m, y) {
        let _ = !1;
        for (const b of Object.keys(y))
          m[b] === void 0 ? (m[b] = y[b], _ = !0) : typeof y[b] == "object" && y[b] !== null && (m[b] = m[b] || {}, h(m[b], y[b]) && (_ = !0));
        return _;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), o && o !== "*" && u.formatVersion !== o && (p.formatVersion.changed = !0, p.formatVersion.new = o, u.formatVersion = o), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), o && !u.formatVersion && (u.formatVersion = o, p.formatVersion.changed = !0, p.formatVersion.new = o);
      let h = structuredClone(u), m = u.formatVersion;
      try {
        let y;
        do {
          y = !1;
          let _ = i.find((b) => b.from === m);
          if (_ && _.to > m)
            h = await _.action(h), m = _.to, h.formatVersion = _.to, y = !0;
          else
            for (const b of i)
              if (b.from === "*" && b.to > m && m !== b.to) {
                h = await b.action(h), m = b.to, h.formatVersion = b.to, y = !0;
                break;
              }
        } while (y);
        if (m !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = m;
          const _ = this.defaultSettings.version;
          _ && (h.version = _);
        }
        if (p.formatVersion.changed) {
          for (const _ of Object.keys(u))
            delete u[_];
          Object.assign(u, h), this.saveSettings();
        }
      } catch (y) {
        throw console.error("Failed to apply version changes:", y), new Error(`Version migration failed: ${y instanceof Error ? y.message : y}`, {
          cause: y
        });
      }
    }
    return p.newSettings = u, p;
  }
  getSettings() {
    return SillyTavern.getContext().extensionSettings[this.settingsKey];
  }
  updateSetting(r, i) {
    SillyTavern.getContext().extensionSettings[this.settingsKey][r] = i, this.saveSettings();
  }
  saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
  }
  resetSettings() {
    SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings();
  }
}
function Er(t) {
  return Array.isArray ? Array.isArray(t) : u0(t) === "[object Array]";
}
function A2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function N2(t) {
  return t == null ? "" : A2(t);
}
function Kn(t) {
  return typeof t == "string";
}
function l0(t) {
  return typeof t == "number";
}
function T2(t) {
  return t === !0 || t === !1 || O2(t) && u0(t) == "[object Boolean]";
}
function o0(t) {
  return typeof t == "object";
}
function O2(t) {
  return o0(t) && t !== null;
}
function yn(t) {
  return t != null;
}
function Kf(t) {
  return !t.trim().length;
}
function u0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const D2 = "Incorrect 'index' type", M2 = (t) => `Invalid value for key ${t}`, k2 = (t) => `Pattern length exceeds max of ${t}.`, j2 = (t) => `Missing ${t} property in key`, R2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, gv = Object.prototype.hasOwnProperty;
class z2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let o = c0(s);
      this._keys.push(o), this._keyMap[o.id] = o, i += o.weight;
    }), this._keys.forEach((s) => {
      s.weight /= i;
    });
  }
  get(r) {
    return this._keyMap[r];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function c0(t) {
  let r = null, i = null, s = null, o = 1, u = null;
  if (Kn(t) || Er(t))
    s = t, r = vv(t), i = xd(t);
  else {
    if (!gv.call(t, "name"))
      throw new Error(j2("name"));
    const f = t.name;
    if (s = f, gv.call(t, "weight") && (o = t.weight, o <= 0))
      throw new Error(R2(f));
    r = vv(f), i = xd(f), u = t.getFn;
  }
  return { path: r, id: i, weight: o, src: s, getFn: u };
}
function vv(t) {
  return Er(t) ? t : t.split(".");
}
function xd(t) {
  return Er(t) ? t.join(".") : t;
}
function L2(t, r) {
  let i = [], s = !1;
  const o = (u, f, p) => {
    if (yn(u))
      if (!f[p])
        i.push(u);
      else {
        let h = f[p];
        const m = u[h];
        if (!yn(m))
          return;
        if (p === f.length - 1 && (Kn(m) || l0(m) || T2(m)))
          i.push(N2(m));
        else if (Er(m)) {
          s = !0;
          for (let y = 0, _ = m.length; y < _; y += 1)
            o(m[y], f, p + 1);
        } else f.length && o(m, f, p + 1);
      }
  };
  return o(t, Kn(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const P2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, I2 = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (t, r) => t.score === r.score ? t.idx < r.idx ? -1 : 1 : t.score < r.score ? -1 : 1
}, B2 = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, U2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: L2,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Me = {
  ...I2,
  ...P2,
  ...B2,
  ...U2
};
const H2 = /[^ ]+/g;
function q2(t = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(o) {
      const u = o.match(H2).length;
      if (i.has(u))
        return i.get(u);
      const f = 1 / Math.pow(u, 0.5 * t), p = parseFloat(Math.round(f * s) / s);
      return i.set(u, p), p;
    },
    clear() {
      i.clear();
    }
  };
}
class Xd {
  constructor({
    getFn: r = Me.getFn,
    fieldNormWeight: i = Me.fieldNormWeight
  } = {}) {
    this.norm = q2(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((i, s) => {
      this._keysMap[i.id] = s;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Kn(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    Kn(r) ? this._addString(r, i) : this._addObject(r, i);
  }
  // Removes the doc at the specified index of the index
  removeAt(r) {
    this.records.splice(r, 1);
    for (let i = r, s = this.size(); i < s; i += 1)
      this.records[i].i -= 1;
  }
  getValueForItemAtKeyId(r, i) {
    return r[this._keysMap[i]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, i) {
    if (!yn(r) || Kf(r))
      return;
    let s = {
      v: r,
      i,
      n: this.norm.get(r)
    };
    this.records.push(s);
  }
  _addObject(r, i) {
    let s = { i, $: {} };
    this.keys.forEach((o, u) => {
      let f = o.getFn ? o.getFn(r) : this.getFn(r, o.path);
      if (yn(f)) {
        if (Er(f)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: m, value: y } = h.pop();
            if (yn(y))
              if (Kn(y) && !Kf(y)) {
                let _ = {
                  v: y,
                  i: m,
                  n: this.norm.get(y)
                };
                p.push(_);
              } else Er(y) && y.forEach((_, b) => {
                h.push({
                  nestedArrIndex: b,
                  value: _
                });
              });
          }
          s.$[u] = p;
        } else if (Kn(f) && !Kf(f)) {
          let p = {
            v: f,
            n: this.norm.get(f)
          };
          s.$[u] = p;
        }
      }
    }), this.records.push(s);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function f0(t, r, { getFn: i = Me.getFn, fieldNormWeight: s = Me.fieldNormWeight } = {}) {
  const o = new Xd({ getFn: i, fieldNormWeight: s });
  return o.setKeys(t.map(c0)), o.setSources(r), o.create(), o;
}
function F2(t, { getFn: r = Me.getFn, fieldNormWeight: i = Me.fieldNormWeight } = {}) {
  const { keys: s, records: o } = t, u = new Xd({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(o), u;
}
function So(t, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: o = Me.distance,
  ignoreLocation: u = Me.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (u)
    return f;
  const p = Math.abs(s - i);
  return o ? f + p / o : p ? 1 : f;
}
function Z2(t = [], r = Me.minMatchCharLength) {
  let i = [], s = -1, o = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (o = u - 1, o - s + 1 >= r && i.push([s, o]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const Da = 32;
function G2(t, r, i, {
  location: s = Me.location,
  distance: o = Me.distance,
  threshold: u = Me.threshold,
  findAllMatches: f = Me.findAllMatches,
  minMatchCharLength: p = Me.minMatchCharLength,
  includeMatches: h = Me.includeMatches,
  ignoreLocation: m = Me.ignoreLocation
} = {}) {
  if (r.length > Da)
    throw new Error(k2(Da));
  const y = r.length, _ = t.length, b = Math.max(0, Math.min(s, _));
  let g = u, d = b;
  const S = p > 1 || h, x = S ? Array(_) : [];
  let T;
  for (; (T = t.indexOf(r, d)) > -1; ) {
    let k = So(r, {
      currentLocation: T,
      expectedLocation: b,
      distance: o,
      ignoreLocation: m
    });
    if (g = Math.min(k, g), d = T + y, S) {
      let H = 0;
      for (; H < y; )
        x[T + H] = 1, H += 1;
    }
  }
  d = -1;
  let A = [], D = 1, C = y + _;
  const N = 1 << y - 1;
  for (let k = 0; k < y; k += 1) {
    let H = 0, X = C;
    for (; H < X; )
      So(r, {
        errors: k,
        currentLocation: b + X,
        expectedLocation: b,
        distance: o,
        ignoreLocation: m
      }) <= g ? H = X : C = X, X = Math.floor((C - H) / 2 + H);
    C = X;
    let P = Math.max(1, b - X + 1), Y = f ? _ : Math.min(b + X, _) + y, K = Array(Y + 2);
    K[Y + 1] = (1 << k) - 1;
    for (let me = Y; me >= P; me -= 1) {
      let ve = me - 1, B = i[t.charAt(ve)];
      if (S && (x[ve] = +!!B), K[me] = (K[me + 1] << 1 | 1) & B, k && (K[me] |= (A[me + 1] | A[me]) << 1 | 1 | A[me + 1]), K[me] & N && (D = So(r, {
        errors: k,
        currentLocation: ve,
        expectedLocation: b,
        distance: o,
        ignoreLocation: m
      }), D <= g)) {
        if (g = D, d = ve, d <= b)
          break;
        P = Math.max(1, 2 * b - d);
      }
    }
    if (So(r, {
      errors: k + 1,
      currentLocation: b,
      expectedLocation: b,
      distance: o,
      ignoreLocation: m
    }) > g)
      break;
    A = K;
  }
  const M = {
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (S) {
    const k = Z2(x, p);
    k.length ? h && (M.indices = k) : M.isMatch = !1;
  }
  return M;
}
function V2(t) {
  let r = {};
  for (let i = 0, s = t.length; i < s; i += 1) {
    const o = t.charAt(i);
    r[o] = (r[o] || 0) | 1 << s - i - 1;
  }
  return r;
}
const du = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class d0 {
  constructor(r, {
    location: i = Me.location,
    threshold: s = Me.threshold,
    distance: o = Me.distance,
    includeMatches: u = Me.includeMatches,
    findAllMatches: f = Me.findAllMatches,
    minMatchCharLength: p = Me.minMatchCharLength,
    isCaseSensitive: h = Me.isCaseSensitive,
    ignoreDiacritics: m = Me.ignoreDiacritics,
    ignoreLocation: y = Me.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: m,
      ignoreLocation: y
    }, r = h ? r : r.toLowerCase(), r = m ? du(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (g, d) => {
      this.chunks.push({
        pattern: g,
        alphabet: V2(g),
        startIndex: d
      });
    }, b = this.pattern.length;
    if (b > Da) {
      let g = 0;
      const d = b % Da, S = b - d;
      for (; g < S; )
        _(this.pattern.substr(g, Da), g), g += Da;
      if (d) {
        const x = b - Da;
        _(this.pattern.substr(x), x);
      }
    } else
      _(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: s, includeMatches: o } = this.options;
    if (r = i ? r : r.toLowerCase(), r = s ? du(r) : r, this.pattern === r) {
      let S = {
        isMatch: !0,
        score: 0
      };
      return o && (S.indices = [[0, r.length - 1]]), S;
    }
    const {
      location: u,
      distance: f,
      threshold: p,
      findAllMatches: h,
      minMatchCharLength: m,
      ignoreLocation: y
    } = this.options;
    let _ = [], b = 0, g = !1;
    this.chunks.forEach(({ pattern: S, alphabet: x, startIndex: T }) => {
      const { isMatch: A, score: D, indices: C } = G2(r, S, x, {
        location: u + T,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: m,
        includeMatches: o,
        ignoreLocation: y
      });
      A && (g = !0), b += D, A && C && (_ = [..._, ...C]);
    });
    let d = {
      isMatch: g,
      score: g ? b / this.chunks.length : 1
    };
    return g && o && (d.indices = _), d;
  }
}
class na {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return yv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return yv(r, this.singleRegex);
  }
  search() {
  }
}
function yv(t, r) {
  const i = t.match(r);
  return i ? i[1] : null;
}
class Y2 extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(r) {
    const i = r === this.pattern;
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class X2 extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(r) {
    const s = r.indexOf(this.pattern) === -1;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class $2 extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(r) {
    const i = r.startsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class Q2 extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(r) {
    const i = !r.startsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class K2 extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(r) {
    const i = r.endsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [r.length - this.pattern.length, r.length - 1]
    };
  }
}
class J2 extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(r) {
    const i = !r.endsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class h0 extends na {
  constructor(r, {
    location: i = Me.location,
    threshold: s = Me.threshold,
    distance: o = Me.distance,
    includeMatches: u = Me.includeMatches,
    findAllMatches: f = Me.findAllMatches,
    minMatchCharLength: p = Me.minMatchCharLength,
    isCaseSensitive: h = Me.isCaseSensitive,
    ignoreDiacritics: m = Me.ignoreDiacritics,
    ignoreLocation: y = Me.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new d0(r, {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: m,
      ignoreLocation: y
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(r) {
    return this._bitapSearch.searchIn(r);
  }
}
class p0 extends na {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(r) {
    let i = 0, s;
    const o = [], u = this.pattern.length;
    for (; (s = r.indexOf(this.pattern, i)) > -1; )
      i = s + u, o.push([s, i - 1]);
    const f = !!o.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: o
    };
  }
}
const Ed = [
  Y2,
  p0,
  $2,
  Q2,
  J2,
  K2,
  X2,
  h0
], bv = Ed.length, W2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, eS = "|";
function tS(t, r = {}) {
  return t.split(eS).map((i) => {
    let s = i.trim().split(W2).filter((u) => u && !!u.trim()), o = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let h = !1, m = -1;
      for (; !h && ++m < bv; ) {
        const y = Ed[m];
        let _ = y.isMultiMatch(p);
        _ && (o.push(new y(_, r)), h = !0);
      }
      if (!h)
        for (m = -1; ++m < bv; ) {
          const y = Ed[m];
          let _ = y.isSingleMatch(p);
          if (_) {
            o.push(new y(_, r));
            break;
          }
        }
    }
    return o;
  });
}
const nS = /* @__PURE__ */ new Set([h0.type, p0.type]);
class rS {
  constructor(r, {
    isCaseSensitive: i = Me.isCaseSensitive,
    ignoreDiacritics: s = Me.ignoreDiacritics,
    includeMatches: o = Me.includeMatches,
    minMatchCharLength: u = Me.minMatchCharLength,
    ignoreLocation: f = Me.ignoreLocation,
    findAllMatches: p = Me.findAllMatches,
    location: h = Me.location,
    threshold: m = Me.threshold,
    distance: y = Me.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: o,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: f,
      location: h,
      threshold: m,
      distance: y
    }, r = i ? r : r.toLowerCase(), r = s ? du(r) : r, this.pattern = r, this.query = tS(this.pattern, this.options);
  }
  static condition(r, i) {
    return i.useExtendedSearch;
  }
  searchIn(r) {
    const i = this.query;
    if (!i)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: s, isCaseSensitive: o, ignoreDiacritics: u } = this.options;
    r = o ? r : r.toLowerCase(), r = u ? du(r) : r;
    let f = 0, p = [], h = 0;
    for (let m = 0, y = i.length; m < y; m += 1) {
      const _ = i[m];
      p.length = 0, f = 0;
      for (let b = 0, g = _.length; b < g; b += 1) {
        const d = _[b], { isMatch: S, indices: x, score: T } = d.search(r);
        if (S) {
          if (f += 1, h += T, s) {
            const A = d.constructor.type;
            nS.has(A) ? p = [...p, ...x] : p.push(x);
          }
        } else {
          h = 0, f = 0, p.length = 0;
          break;
        }
      }
      if (f) {
        let b = {
          isMatch: !0,
          score: h / f
        };
        return s && (b.indices = p), b;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Cd = [];
function aS(...t) {
  Cd.push(...t);
}
function wd(t, r) {
  for (let i = 0, s = Cd.length; i < s; i += 1) {
    let o = Cd[i];
    if (o.condition(t, r))
      return new o(t, r);
  }
  return new d0(t, r);
}
const hu = {
  AND: "$and",
  OR: "$or"
}, Ad = {
  PATH: "$path",
  PATTERN: "$val"
}, Nd = (t) => !!(t[hu.AND] || t[hu.OR]), iS = (t) => !!t[Ad.PATH], sS = (t) => !Er(t) && o0(t) && !Nd(t), _v = (t) => ({
  [hu.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function m0(t, r, { auto: i = !0 } = {}) {
  const s = (o) => {
    let u = Object.keys(o);
    const f = iS(o);
    if (!f && u.length > 1 && !Nd(o))
      return s(_v(o));
    if (sS(o)) {
      const h = f ? o[Ad.PATH] : u[0], m = f ? o[Ad.PATTERN] : o[h];
      if (!Kn(m))
        throw new Error(M2(h));
      const y = {
        keyId: xd(h),
        pattern: m
      };
      return i && (y.searcher = wd(m, r)), y;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const m = o[h];
      Er(m) && m.forEach((y) => {
        p.children.push(s(y));
      });
    }), p;
  };
  return Nd(t) || (t = _v(t)), s(t);
}
function lS(t, { ignoreFieldNorm: r = Me.ignoreFieldNorm }) {
  t.forEach((i) => {
    let s = 1;
    i.matches.forEach(({ key: o, norm: u, score: f }) => {
      const p = o ? o.weight : null;
      s *= Math.pow(
        f === 0 && p ? Number.EPSILON : f,
        (p || 1) * (r ? 1 : u)
      );
    }), i.score = s;
  });
}
function oS(t, r) {
  const i = t.matches;
  r.matches = [], yn(i) && i.forEach((s) => {
    if (!yn(s.indices) || !s.indices.length)
      return;
    const { indices: o, value: u } = s;
    let f = {
      indices: o,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function uS(t, r) {
  r.score = t.score;
}
function cS(t, r, {
  includeMatches: i = Me.includeMatches,
  includeScore: s = Me.includeScore
} = {}) {
  const o = [];
  return i && o.push(oS), s && o.push(uS), t.map((u) => {
    const { idx: f } = u, p = {
      item: r[f],
      refIndex: f
    };
    return o.length && o.forEach((h) => {
      h(u, p);
    }), p;
  });
}
class Ii {
  constructor(r, i = {}, s) {
    this.options = { ...Me, ...i }, this.options.useExtendedSearch, this._keyStore = new z2(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Xd))
      throw new Error(D2);
    this._myIndex = i || f0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    yn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const i = [];
    for (let s = 0, o = this._docs.length; s < o; s += 1) {
      const u = this._docs[s];
      r(u, s) && (this.removeAt(s), s -= 1, o -= 1, i.push(u));
    }
    return i;
  }
  removeAt(r) {
    this._docs.splice(r, 1), this._myIndex.removeAt(r);
  }
  getIndex() {
    return this._myIndex;
  }
  search(r, { limit: i = -1 } = {}) {
    const {
      includeMatches: s,
      includeScore: o,
      shouldSort: u,
      sortFn: f,
      ignoreFieldNorm: p
    } = this.options;
    let h = Kn(r) ? Kn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return lS(h, { ignoreFieldNorm: p }), u && h.sort(f), l0(i) && i > -1 && (h = h.slice(0, i)), cS(h, this._docs, {
      includeMatches: s,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = wd(r, this.options), { records: s } = this._myIndex, o = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!yn(u))
        return;
      const { isMatch: h, score: m, indices: y } = i.searchIn(u);
      h && o.push({
        item: u,
        idx: f,
        matches: [{ score: m, value: u, norm: p, indices: y }]
      });
    }), o;
  }
  _searchLogical(r) {
    const i = m0(r, this.options), s = (p, h, m) => {
      if (!p.children) {
        const { keyId: _, searcher: b } = p, g = this._findMatches({
          key: this._keyStore.get(_),
          value: this._myIndex.getValueForItemAtKeyId(h, _),
          searcher: b
        });
        return g && g.length ? [
          {
            idx: m,
            item: h,
            matches: g
          }
        ] : [];
      }
      const y = [];
      for (let _ = 0, b = p.children.length; _ < b; _ += 1) {
        const g = p.children[_], d = s(g, h, m);
        if (d.length)
          y.push(...d);
        else if (p.operator === hu.AND)
          return [];
      }
      return y;
    }, o = this._myIndex.records, u = {}, f = [];
    return o.forEach(({ $: p, i: h }) => {
      if (yn(p)) {
        let m = s(i, p, h);
        m.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), m.forEach(({ matches: y }) => {
          u[h].matches.push(...y);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const i = wd(r, this.options), { keys: s, records: o } = this._myIndex, u = [];
    return o.forEach(({ $: f, i: p }) => {
      if (!yn(f))
        return;
      let h = [];
      s.forEach((m, y) => {
        h.push(
          ...this._findMatches({
            key: m,
            value: f[y],
            searcher: i
          })
        );
      }), h.length && u.push({
        idx: p,
        item: f,
        matches: h
      });
    }), u;
  }
  _findMatches({ key: r, value: i, searcher: s }) {
    if (!yn(i))
      return [];
    let o = [];
    if (Er(i))
      i.forEach(({ v: u, i: f, n: p }) => {
        if (!yn(u))
          return;
        const { isMatch: h, score: m, indices: y } = s.searchIn(u);
        h && o.push({
          score: m,
          key: r,
          value: u,
          idx: f,
          norm: p,
          indices: y
        });
      });
    else {
      const { v: u, n: f } = i, { isMatch: p, score: h, indices: m } = s.searchIn(u);
      p && o.push({ score: h, key: r, value: u, norm: f, indices: m });
    }
    return o;
  }
}
Ii.version = "7.1.0";
Ii.createIndex = f0;
Ii.parseIndex = F2;
Ii.config = Me;
Ii.parseQuery = m0;
aS(rS);
var fS = Object.defineProperty, dS = (t, r, i) => r in t ? fS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, hS = (t, r, i) => dS(t, r + "", i);
let pS = class {
  constructor() {
    hS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
  }
  async abortRequest(r) {
    var i;
    const s = this.requestMap.get(r);
    if (s) {
      if (s.abortController)
        try {
          s.abortController.abort();
        } catch {
        }
      (i = s.options) != null && i.onFinish && await s.options.onFinish(r), this.requestMap.delete(r);
    }
  }
  /**
   * @returns return value is not important because request would be finished anyway. So use "options".
   */
  async generateRequest(r, i) {
    var s;
    const o = SillyTavern.getContext(), u = o.uuidv4(), f = ((s = r?.custom) == null ? void 0 : s.stream) ?? !1;
    if (this.requestMap.set(u, {
      abortController: i?.abortController,
      isStream: f,
      options: i
    }), f)
      try {
        const p = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        i != null && i.onStart && await i.onStart(u);
        let h;
        for await (const m of p())
          h = m, i != null && i.onEntry && await i.onEntry(u, m);
        i != null && i.onFinish && await i.onFinish(u, h);
      } catch (p) {
        i != null && i.onFinish && await i.onFinish(u, void 0, p);
      } finally {
        this.requestMap.delete(u);
      }
    else
      try {
        i != null && i.onStart && await i.onStart(u);
        const p = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        this.requestMap.get(u) && (i != null && i.onEntry && await i.onEntry(u, p), i != null && i.onFinish && await i.onFinish(u, p));
      } catch (p) {
        i != null && i.onFinish && await i.onFinish(u, void 0, p);
      } finally {
        this.requestMap.delete(u);
      }
    return u;
  }
  getActiveRequest(r) {
    var i;
    return (i = this.requestMap.get(r)) == null ? void 0 : i.abortController;
  }
  getAllActiveRequests() {
    const r = /* @__PURE__ */ new Map();
    for (const [i, s] of this.requestMap)
      r.set(i, s.abortController);
    return r;
  }
};
async function mS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function Ne(t, r, { escapeHtml: i = !0 } = {}) {
  await mS("echo", { severity: t, escapeHtml: (!!i).toString() }, r);
}
function Jf(t) {
  return V_(t);
}
function Sv(t, r) {
  return Z_(t, r);
}
function xo(t, r, i) {
  return G_(t, r, i);
}
function gS(t, r, i) {
  return J_(t, r, i);
}
function vS(t, r) {
  return W_(t, r);
}
function yS(t, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return F_(t, { customStoryString: r, customInstructSettings: i });
}
function wa(t) {
  return i2(t);
}
function bS() {
  return {
    prompt: Rs[zs.prompt],
    interval: Rs[zs.interval],
    position: Rs[zs.position],
    depth: Rs[zs.depth],
    role: Rs[zs.role]
  };
}
function _S(t, r) {
  return l2(t, r);
}
function SS({
  name2: t,
  charDescription: r,
  charPersonality: i,
  Scenario: s,
  worldInfoBefore: o,
  worldInfoAfter: u,
  bias: f,
  type: p,
  quietPrompt: h,
  quietImage: m,
  extensionPrompts: y,
  cyclePrompt: _,
  systemPromptOverride: b,
  jailbreakPromptOverride: g,
  personaDescription: d,
  messages: S,
  messageExamples: x
}, T) {
  return s2(
    {
      name2: t,
      charDescription: r,
      charPersonality: i,
      Scenario: s,
      worldInfoBefore: o,
      worldInfoAfter: u,
      bias: f,
      type: p,
      quietPrompt: h,
      quietImage: m,
      cyclePrompt: _,
      systemPromptOverride: b,
      jailbreakPromptOverride: g,
      personaDescription: d,
      extensionPrompts: y,
      messages: S,
      messageExamples: x
    },
    T
  );
}
function xS(t) {
  return t2(t);
}
function ES(t) {
  return n2(t);
}
function CS(t, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: o,
  isEdit: u,
  depth: f
}) {
  return o2(t, r, { characterOverride: i, isMarkdown: s, isPrompt: o, isEdit: u, depth: f });
}
async function wS(t, r) {
  return await e2(t, r);
}
function xv(t, {
  wiFormat: r
} = {}) {
  return r2(t, { wiFormat: r });
}
function Is(t) {
  return a2(t);
}
function AS(t, r) {
  return $_(t, r);
}
class NS {
  /**
   * Encodes a string into a sequence of tokens using a simple heuristic.
   * This is a placeholder for a real tokenizer.
   */
  encode(r) {
    const i = Math.ceil(r.length / 4);
    return new Array(i).fill(" ");
  }
  /**
   * Decodes a sequence of tokens back into a string.
   * This is a placeholder and doesn't actually decode.
   */
  decode(r) {
    return r.join("");
  }
}
var TS = Object.defineProperty, OS = (t, r, i) => r in t ? TS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, Eo = (t, r, i) => OS(t, typeof r != "symbol" ? r + "" : r, i);
class DS {
  constructor(r) {
    Eo(this, "messages", []), Eo(this, "tokenizer"), Eo(this, "maxContext"), Eo(this, "currentTokenCount", 0), this.tokenizer = new NS(), this.maxContext = r;
  }
  getTokenCount(r) {
    var i, s;
    return r.content ? ((s = (i = r.source) == null ? void 0 : i.extra) == null ? void 0 : s.token_count) ?? this.tokenizer.encode(r.content).length : 0;
  }
  canFit(r) {
    return this.currentTokenCount + this.getTokenCount(r) <= this.maxContext;
  }
  add(r) {
    if (!r.content) return !0;
    const i = this.getTokenCount(r);
    return this.currentTokenCount + i > this.maxContext ? !1 : (this.messages.push(r), this.currentTokenCount += i, !0);
  }
  addFront(r) {
    if (!r.content) return !0;
    const i = this.getTokenCount(r);
    return this.currentTokenCount + i > this.maxContext ? !1 : (this.messages.unshift(r), this.currentTokenCount += i, !0);
  }
  addMany(r) {
    const i = r.filter((p) => p.content), s = i.map((p) => this.getTokenCount(p)), o = s.reduce((p, h) => p + h, 0);
    if (this.currentTokenCount + o <= this.maxContext)
      return this.messages.push(...i), this.currentTokenCount += o, !0;
    let u = 0;
    const f = [];
    for (let p = i.length - 1; p >= 0; p--) {
      const h = i[p], m = s[p];
      if (this.currentTokenCount + u + m <= this.maxContext)
        f.unshift(h), u += m;
      else
        break;
    }
    return f.length > 0 && (this.messages.push(...f), this.currentTokenCount += u), f.length === i.length;
  }
  insert(r, i) {
    if (!i.content) return !0;
    const s = this.getTokenCount(i);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.splice(r, 0, i), this.currentTokenCount += s, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function g0(t, {
  targetCharacterId: r,
  presetName: i,
  instructName: s,
  contextName: o,
  syspromptName: u,
  maxContext: f,
  includeNames: p,
  ignoreCharacterFields: h,
  ignoreAuthorNote: m,
  ignoreWorldInfo: y,
  messageIndexesBetween: _
} = {}) {
  var b, g, d, S, x, T, A, D, C, N, M, k, H, X;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const P = SillyTavern.getContext();
  let { description: Y, personality: K, persona: ue, scenario: me, mesExamples: ve, system: B, jailbreak: re } = h ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : P.getCharacterCardFields({
    chid: r
  });
  const pe = t === "textgenerationwebui" ? (b = P.getPresetManager("instruct")) == null ? void 0 : b.getCompletionPresetByName(s) : void 0, Re = !!(pe != null && pe.enabled);
  let R = Sv(ve, Re);
  function W() {
    var be, he;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !i)
      return Jf();
    if (typeof f == "number")
      return f;
    let Le;
    if (t === "textgenerationwebui") {
      const Ge = (be = P.getPresetManager("textgenerationwebui")) == null ? void 0 : be.getCompletionPresetByName(i);
      Le = Ge?.max_length;
    } else {
      const Ge = (he = P.getPresetManager("openai")) == null ? void 0 : he.getCompletionPresetByName(i);
      Le = Ge?.openai_max_context;
    }
    return typeof Le == "number" ? Le : Jf();
  }
  let ie = [];
  const le = W();
  if (le <= 0)
    return { result: [], warnings: ie };
  const F = new DS(le), fe = P.ToolManager.isToolCallingSupported(), G = _?.start ?? 0, ae = _ != null && _.end ? _.end + 1 : void 0;
  let ce = G === -1 && ae === 0 ? [] : P.chat.slice(G, ae).filter((be) => {
    var he;
    return !be.is_system || fe && Array.isArray((he = be.extra) == null ? void 0 : he.tool_invocations);
  });
  ce = await Promise.all(
    ce.map(async (be, he) => {
      var Le, Ge;
      let it = be.mes, Ar = be.is_user ? tv.USER_INPUT : tv.AI_OUTPUT, tr = { isPrompt: !0, depth: ce.length - he - 1 }, mt = CS(it, Ar, tr);
      return mt = await wS(be, mt), (Le = be?.extra) != null && Le.append_title && (Ge = be?.extra) != null && Ge.title && (mt = `${mt}

${be.extra.title}`), {
        ...be,
        mes: mt,
        index: he
      };
    })
  );
  const Ce = ce.map((be) => Q_ ? `${be.name}: ${be.mes}` : be.mes).reverse(), { worldInfoString: xe, worldInfoBefore: L, worldInfoAfter: ne, worldInfoExamples: se, worldInfoDepth: ye, anBefore: Ye, anAfter: Se } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await P.getWorldInfoPrompt(Ce, le, !1);
  for (const be of se) {
    const he = be.content;
    if (he.length === 0)
      continue;
    const Le = xo(he, _r, Qr), Ge = Sv(Le, Re);
    be.position === K_.before ? R.unshift(...Ge) : R.push(...Ge);
  }
  function ke() {
    const be = [];
    for (let he = ce.length - 1; he >= 0; he--) {
      const Le = ce[he], Ge = Le.name === "System" && !Le.is_user ? "system" : Le.is_user ? "user" : "assistant";
      be.unshift({
        role: Ge,
        content: p && Ge != "system" ? `${Le.name}: ${Le.mes}` : Le.mes,
        source: Le
      });
    }
    F.addMany(be);
  }
  if (t === "textgenerationwebui") {
    const be = [...R];
    R && (R = gS(R, _r, Qr));
    const he = (g = P.getPresetManager("sysprompt")) == null ? void 0 : g.getCompletionPresetByName(u);
    he && (B = P.powerUserSettings.prefer_character_prompt && B ? B : xo(he.content, _r, Qr), B = Re ? vS(
      P.substituteParams(B, _r, Qr, he.content),
      pe
    ) : B);
    const Le = {
      description: Y,
      personality: K,
      persona: P.powerUserSettings.persona_description_position == Wg.IN_PROMPT ? ue : "",
      scenario: me,
      system: B,
      char: Qr,
      user: _r,
      wiBefore: L,
      wiAfter: ne,
      loreBefore: L,
      loreAfter: ne,
      mesExamples: R.join(""),
      mesExamplesRaw: be.join("")
    }, Ge = (d = P.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(o);
    let it = yS(Le, {
      customInstructSettings: pe,
      customStoryString: Ge?.story_string
    });
    it && F.add({ role: "system", content: it, ignoreInstruct: !0 }), ke();
  } else {
    let be = function(Gt) {
      const Qt = _n.find((Ia) => Ia.identifier === Gt);
      if (Qt)
        return Qt;
      const ul = it.prompts.find((Ia) => Ia.identifier === Gt);
      if (ul)
        return ul;
    }, he = xS(ce), Le = ES(R);
    async function Ge() {
      let [Gt, Qt] = await SS(
        {
          name2: Qr,
          charDescription: Y,
          charPersonality: K,
          Scenario: me,
          worldInfoBefore: L,
          worldInfoAfter: ne,
          extensionPrompts: P.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: B,
          jailbreakPromptOverride: re,
          personaDescription: ue,
          messages: he,
          messageExamples: Le
        },
        !1
      );
      F.addMany(Gt);
    }
    if (!i)
      return ie.push("No preset name provided. Using default preset."), await Ge(), { result: F.getMessages(), warnings: ie };
    const it = (S = P.getPresetManager("openai")) == null ? void 0 : S.getCompletionPresetByName(i);
    if (!it)
      return console.warn(`Preset not found: ${i}. Using current preset.`), ie.push(`Preset not found: ${i}. Using current preset.`), Ge(), { result: F.getMessages(), warnings: ie };
    let Ar = (x = it.prompt_order) == null ? void 0 : x.find((Gt) => Gt.character_id === It);
    if (!Ar && it.prompt_order && it.prompt_order.length > 0 && (Ar = it.prompt_order[it.prompt_order.length - 1]), !Ar)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), ie.push(`No prompt order found for preset: ${i}. Using current preset.`), Ge(), { result: F.getMessages(), warnings: ie };
    const tr = me && it.scenario_format ? P.substituteParams(it.scenario_format) : "", mt = K && it.personality_format ? P.substituteParams(it.personality_format) : "", Fn = P.substituteParams(it.group_nudge_prompt), Zt = it.impersonation_prompt ? P.substituteParams(it.impersonation_prompt) : "", _n = [];
    y || _n.push(
      {
        role: "system",
        content: xv(L, { wiFormat: it.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: xv(ne, { wiFormat: it.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || _n.push(
      { role: "system", content: Y, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: tr, identifier: "scenario" }
    ), _n.push(
      { role: "system", content: Zt, identifier: "impersonate" },
      { role: "system", content: Fn, identifier: "groupNudge" }
    );
    const ia = P.extensionPrompts["1_memory"];
    ia && ia.value && _n.push({
      role: wa(ia.role),
      content: ia.value,
      identifier: "summary",
      position: Is(ia.position)
    });
    const sa = P.extensionPrompts["2_floating_prompt"];
    !m && sa && sa.value && _n.push({
      role: wa(sa.role),
      content: sa.value,
      identifier: "authorsNote",
      position: Is(sa.position)
    });
    const nr = P.extensionPrompts["3_vectors"];
    nr && nr.value && _n.push({
      role: "system",
      content: nr.value,
      identifier: "vectorsMemory",
      position: Is(nr.position)
    });
    const Zn = P.extensionPrompts["4_vectors_data_bank"];
    Zn && Zn.value && _n.push({
      role: wa(Zn.role),
      content: Zn.value,
      identifier: "vectorsDataBank",
      position: Is(Zn.position)
    });
    const Sn = P.extensionPrompts.chromadb;
    Sn && Sn.value && _n.push({
      role: "system",
      content: Sn.value,
      identifier: "smartContext",
      position: Is(Sn.position)
    }), !h && P.powerUserSettings.persona_description && P.powerUserSettings.persona_description_position === Wg.IN_PROMPT && _n.push({
      role: "system",
      content: P.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Ar.order.forEach((Gt) => {
      if (!Gt.enabled)
        return;
      const Qt = be(Gt.identifier);
      if (Qt && Qt.content) {
        F.add({
          role: Qt.role ?? "system",
          content: P.substituteParams(Qt.content)
        });
        return;
      }
      Gt.identifier === "chatHistory" && ke();
    });
  }
  const Ze = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const be in P.extensionPrompts)
    if (Object.hasOwn(P.extensionPrompts, be)) {
      const he = P.extensionPrompts[be];
      if (Ze.includes(be) || !P.extensionPrompts[be].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(he.position) || typeof he.filter == "function" && !await he.filter()) continue;
      const Le = {
        role: wa(he.role) ?? "system",
        content: he.value
      };
      if (he.position === Ca.BEFORE_PROMPT)
        F.insert(he.depth, Le);
      else if (he.position === Ca.IN_PROMPT) {
        const Ge = F.getMessages();
        F.insert(Ge.length - he.depth, Le);
      }
    }
  for (const be of ye) {
    const he = F.getMessages();
    F.insert(he.length - be.depth, {
      role: wa(be.role),
      content: be.entries.join(`
`)
    });
  }
  if (!h) {
    const be = _S(Jn, Number(It));
    if (Jn && Array.isArray(be) && be.length > 0)
      be.filter((he) => he.text).forEach((he, Le) => {
        const Ge = F.getMessages();
        F.insert(Ge.length - he.depth, { role: he.role, content: he.text });
      });
    else {
      const he = xo(
        (N = (C = (D = (A = (T = P.characters[It]) == null ? void 0 : T.data) == null ? void 0 : A.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : C.prompt) == null ? void 0 : N.trim(),
        _r,
        Qr
      ) || "";
      if (he) {
        const Le = X_, Ge = ((X = (H = (k = (M = P.characters[It]) == null ? void 0 : M.data) == null ? void 0 : k.extensions) == null ? void 0 : H.depth_prompt) == null ? void 0 : X.role) ?? Y_, it = F.getMessages();
        F.insert(it.length - Le, {
          role: wa(Ge),
          content: he
        });
      }
    }
  }
  let $e = -1;
  if (!m) {
    const be = bS();
    if (be.prompt) {
      be.prompt = xo(be.prompt, _r, Qr);
      const he = { role: wa(be.role), content: be.prompt };
      switch (be.position) {
        case Ca.IN_PROMPT:
          F.insert(1, he), $e = 1;
          break;
        case Ca.IN_CHAT:
          $e = F.getMessages().length - be.depth, F.insert($e, he);
          break;
        case Ca.BEFORE_PROMPT:
          F.addFront(he), $e = 0;
          break;
      }
    }
  }
  return $e >= 0 && (Ye.length > 0 && (F.insert($e, { role: "system", content: Ye.join(`
`) }), $e++), Se.length > 0 && F.insert($e + 1, { role: "system", content: Se.join(`
`) })), { result: F.getMessages(), warnings: ie };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Ev(t, r) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function er(t) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ev(Object(i), !0).forEach(function(s) {
      MS(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ev(Object(i)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return t;
}
function su(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? su = function(r) {
    return typeof r;
  } : su = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, su(t);
}
function MS(t, r, i) {
  return r in t ? Object.defineProperty(t, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = i, t;
}
function Cr() {
  return Cr = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, Cr.apply(this, arguments);
}
function kS(t, r) {
  if (t == null) return {};
  var i = {}, s = Object.keys(t), o, u;
  for (u = 0; u < s.length; u++)
    o = s[u], !(r.indexOf(o) >= 0) && (i[o] = t[o]);
  return i;
}
function jS(t, r) {
  if (t == null) return {};
  var i = kS(t, r), s, o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (o = 0; o < u.length; o++)
      s = u[o], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s]);
  }
  return i;
}
var RS = "1.15.6";
function xr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var wr = xr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), il = xr(/Edge/i), Cv = xr(/firefox/i), Ks = xr(/safari/i) && !xr(/chrome/i) && !xr(/android/i), $d = xr(/iP(ad|od|hone)/i), v0 = xr(/chrome/i) && xr(/android/i), y0 = {
  capture: !1,
  passive: !1
};
function qe(t, r, i) {
  t.addEventListener(r, i, !wr && y0);
}
function He(t, r, i) {
  t.removeEventListener(r, i, !wr && y0);
}
function pu(t, r) {
  if (r) {
    if (r[0] === ">" && (r = r.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(r);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(r);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function b0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Un(t, r, i, s) {
  if (t) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === i && pu(t, r) : pu(t, r)) || s && t === i)
        return t;
      if (t === i) break;
    } while (t = b0(t));
  }
  return null;
}
var wv = /\s+/g;
function gn(t, r, i) {
  if (t && r)
    if (t.classList)
      t.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(wv, " ").replace(" " + r + " ", " ");
      t.className = (s + (i ? " " + r : "")).replace(wv, " ");
    }
}
function Oe(t, r, i) {
  var s = t && t.style;
  if (s) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (i = t.currentStyle), r === void 0 ? i : i[r];
    !(r in s) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), s[r] = i + (typeof i == "string" ? "" : "px");
  }
}
function Ri(t, r) {
  var i = "";
  if (typeof t == "string")
    i = t;
  else
    do {
      var s = Oe(t, "transform");
      s && s !== "none" && (i = s + " " + i);
    } while (!r && (t = t.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(i);
}
function _0(t, r, i) {
  if (t) {
    var s = t.getElementsByTagName(r), o = 0, u = s.length;
    if (i)
      for (; o < u; o++)
        i(s[o], o);
    return s;
  }
  return [];
}
function Wn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function Et(t, r, i, s, o) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, p, h, m, y, _;
    if (t !== window && t.parentNode && t !== Wn() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, m = u.right, y = u.height, _ = u.width) : (f = 0, p = 0, h = window.innerHeight, m = window.innerWidth, y = window.innerHeight, _ = window.innerWidth), (r || i) && t !== window && (o = o || t.parentNode, !wr))
      do
        if (o && o.getBoundingClientRect && (Oe(o, "transform") !== "none" || i && Oe(o, "position") !== "static")) {
          var b = o.getBoundingClientRect();
          f -= b.top + parseInt(Oe(o, "border-top-width")), p -= b.left + parseInt(Oe(o, "border-left-width")), h = f + u.height, m = p + u.width;
          break;
        }
      while (o = o.parentNode);
    if (s && t !== window) {
      var g = Ri(o || t), d = g && g.a, S = g && g.d;
      g && (f /= S, p /= d, _ /= d, y /= S, h = f + y, m = p + _);
    }
    return {
      top: f,
      left: p,
      bottom: h,
      right: m,
      width: _,
      height: y
    };
  }
}
function Av(t, r, i) {
  for (var s = ta(t, !0), o = Et(t)[r]; s; ) {
    var u = Et(s)[i], f = void 0;
    if (f = o >= u, !f) return s;
    if (s === Wn()) break;
    s = ta(s, !1);
  }
  return !1;
}
function Pi(t, r, i, s) {
  for (var o = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== De.ghost && (s || f[u] !== De.dragged) && Un(f[u], i.draggable, t, !1)) {
      if (o === r)
        return f[u];
      o++;
    }
    u++;
  }
  return null;
}
function Qd(t, r) {
  for (var i = t.lastElementChild; i && (i === De.ghost || Oe(i, "display") === "none" || r && !pu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function kn(t, r) {
  var i = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== De.clone && (!r || pu(t, r)) && i++;
  return i;
}
function Nv(t) {
  var r = 0, i = 0, s = Wn();
  if (t)
    do {
      var o = Ri(t), u = o.a, f = o.d;
      r += t.scrollLeft * u, i += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, i];
}
function zS(t, r) {
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[i][s]) return Number(i);
    }
  return -1;
}
function ta(t, r) {
  if (!t || !t.getBoundingClientRect) return Wn();
  var i = t, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = Oe(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return Wn();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return Wn();
}
function LS(t, r) {
  if (t && r)
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  return t;
}
function Wf(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var Js;
function S0(t, r) {
  return function() {
    if (!Js) {
      var i = arguments, s = this;
      i.length === 1 ? t.call(s, i[0]) : t.apply(s, i), Js = setTimeout(function() {
        Js = void 0;
      }, r);
    }
  };
}
function PS() {
  clearTimeout(Js), Js = void 0;
}
function x0(t, r, i) {
  t.scrollLeft += r, t.scrollTop += i;
}
function E0(t) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : i ? i(t).clone(!0)[0] : t.cloneNode(!0);
}
function C0(t, r, i) {
  var s = {};
  return Array.from(t.children).forEach(function(o) {
    var u, f, p, h;
    if (!(!Un(o, r.draggable, t, !1) || o.animated || o === i)) {
      var m = Et(o);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, m.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, m.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, m.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, m.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var an = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function IS() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(o) {
          if (!(Oe(o, "display") === "none" || o === De.ghost)) {
            t.push({
              target: o,
              rect: Et(o)
            });
            var u = er({}, t[t.length - 1].rect);
            if (o.thisAnimationDuration) {
              var f = Ri(o, !0);
              f && (u.top -= f.f, u.left -= f.e);
            }
            o.fromRect = u;
          }
        });
      }
    },
    addAnimationState: function(s) {
      t.push(s);
    },
    removeAnimationState: function(s) {
      t.splice(zS(t, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof s == "function" && s();
        return;
      }
      var u = !1, f = 0;
      t.forEach(function(p) {
        var h = 0, m = p.target, y = m.fromRect, _ = Et(m), b = m.prevFromRect, g = m.prevToRect, d = p.rect, S = Ri(m, !0);
        S && (_.top -= S.f, _.left -= S.e), m.toRect = _, m.thisAnimationDuration && Wf(b, _) && !Wf(y, _) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - _.top) / (d.left - _.left) === (y.top - _.top) / (y.left - _.left) && (h = US(d, b, g, o.options)), Wf(_, y) || (m.prevFromRect = y, m.prevToRect = _, h || (h = o.options.animation), o.animate(m, d, _, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(m.animationResetTimer), m.animationResetTimer = setTimeout(function() {
          m.animationTime = 0, m.prevFromRect = null, m.fromRect = null, m.prevToRect = null, m.thisAnimationDuration = null;
        }, h), m.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, o, u, f) {
      if (f) {
        Oe(s, "transition", ""), Oe(s, "transform", "");
        var p = Ri(this.el), h = p && p.a, m = p && p.d, y = (o.left - u.left) / (h || 1), _ = (o.top - u.top) / (m || 1);
        s.animatingX = !!y, s.animatingY = !!_, Oe(s, "transform", "translate3d(" + y + "px," + _ + "px,0)"), this.forRepaintDummy = BS(s), Oe(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Oe(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Oe(s, "transition", ""), Oe(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function BS(t) {
  return t.offsetWidth;
}
function US(t, r, i, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * s.animation;
}
var wi = [], ed = {
  initializeByDefault: !0
}, sl = {
  mount: function(r) {
    for (var i in ed)
      ed.hasOwnProperty(i) && !(i in r) && (r[i] = ed[i]);
    wi.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), wi.push(r);
  },
  pluginEvent: function(r, i, s) {
    var o = this;
    this.eventCanceled = !1, s.cancel = function() {
      o.eventCanceled = !0;
    };
    var u = r + "Global";
    wi.forEach(function(f) {
      i[f.pluginName] && (i[f.pluginName][u] && i[f.pluginName][u](er({
        sortable: i
      }, s)), i.options[f.pluginName] && i[f.pluginName][r] && i[f.pluginName][r](er({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, o) {
    wi.forEach(function(p) {
      var h = p.pluginName;
      if (!(!r.options[h] && !p.initializeByDefault)) {
        var m = new p(r, i, r.options);
        m.sortable = r, m.options = r.options, r[h] = m, Cr(s, m.defaults);
      }
    });
    for (var u in r.options)
      if (r.options.hasOwnProperty(u)) {
        var f = this.modifyOption(r, u, r.options[u]);
        typeof f < "u" && (r.options[u] = f);
      }
  },
  getEventProperties: function(r, i) {
    var s = {};
    return wi.forEach(function(o) {
      typeof o.eventProperties == "function" && Cr(s, o.eventProperties.call(i[o.pluginName], r));
    }), s;
  },
  modifyOption: function(r, i, s) {
    var o;
    return wi.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[i] == "function" && (o = u.optionListeners[i].call(r[u.pluginName], s));
    }), o;
  }
};
function HS(t) {
  var r = t.sortable, i = t.rootEl, s = t.name, o = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, h = t.oldIndex, m = t.newIndex, y = t.oldDraggableIndex, _ = t.newDraggableIndex, b = t.originalEvent, g = t.putSortable, d = t.extraEventProperties;
  if (r = r || i && i[an], !!r) {
    var S, x = r.options, T = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !wr && !il ? S = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(s, !0, !0)), S.to = f || i, S.from = p || i, S.item = o || i, S.clone = u, S.oldIndex = h, S.newIndex = m, S.oldDraggableIndex = y, S.newDraggableIndex = _, S.originalEvent = b, S.pullMode = g ? g.lastPutMode : void 0;
    var A = er(er({}, d), sl.getEventProperties(s, r));
    for (var D in A)
      S[D] = A[D];
    i && i.dispatchEvent(S), x[T] && x[T].call(r, S);
  }
}
var qS = ["evt"], nn = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = s.evt, u = jS(s, qS);
  sl.pluginEvent.bind(De)(r, i, er({
    dragEl: oe,
    parentEl: pt,
    ghostEl: je,
    rootEl: lt,
    nextEl: Ta,
    lastDownEl: lu,
    cloneEl: ct,
    cloneHidden: ea,
    dragStarted: Ys,
    putSortable: Pt,
    activeSortable: De.active,
    originalEvent: o,
    oldIndex: ki,
    oldDraggableIndex: Ws,
    newIndex: vn,
    newDraggableIndex: Wr,
    hideGhostForTarget: T0,
    unhideGhostForTarget: O0,
    cloneNowHidden: function() {
      ea = !0;
    },
    cloneNowShown: function() {
      ea = !1;
    },
    dispatchSortableEvent: function(p) {
      Yt({
        sortable: i,
        name: p,
        originalEvent: o
      });
    }
  }, u));
};
function Yt(t) {
  HS(er({
    putSortable: Pt,
    cloneEl: ct,
    targetEl: oe,
    rootEl: lt,
    oldIndex: ki,
    oldDraggableIndex: Ws,
    newIndex: vn,
    newDraggableIndex: Wr
  }, t));
}
var oe, pt, je, lt, Ta, lu, ct, ea, ki, vn, Ws, Wr, Co, Pt, Mi = !1, mu = !1, gu = [], Aa, In, td, nd, Tv, Ov, Ys, Ai, el, tl = !1, wo = !1, ou, qt, rd = [], Td = !1, vu = [], Nu = typeof document < "u", Ao = $d, Dv = il || wr ? "cssFloat" : "float", FS = Nu && !v0 && !$d && "draggable" in document.createElement("div"), w0 = (function() {
  if (Nu) {
    if (wr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), A0 = function(r, i) {
  var s = Oe(r), o = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Pi(r, 0, i), f = Pi(r, 1, i), p = u && Oe(u), h = f && Oe(f), m = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + Et(u).width, y = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + Et(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var _ = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === _) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || m >= o && s[Dv] === "none" || f && s[Dv] === "none" && m + y > o) ? "vertical" : "horizontal";
}, ZS = function(r, i, s) {
  var o = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? i.left : i.top, h = s ? i.right : i.bottom, m = s ? i.width : i.height;
  return o === p || u === h || o + f / 2 === p + m / 2;
}, GS = function(r, i) {
  var s;
  return gu.some(function(o) {
    var u = o[an].options.emptyInsertThreshold;
    if (!(!u || Qd(o))) {
      var f = Et(o), p = r >= f.left - u && r <= f.right + u, h = i >= f.top - u && i <= f.bottom + u;
      if (p && h)
        return s = o;
    }
  }), s;
}, N0 = function(r) {
  function i(u, f) {
    return function(p, h, m, y) {
      var _ = p.options.group.name && h.options.group.name && p.options.group.name === h.options.group.name;
      if (u == null && (f || _))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(p, h, m, y), f)(p, h, m, y);
      var b = (f ? p : h).options.group.name;
      return u === !0 || typeof u == "string" && u === b || u.join && u.indexOf(b) > -1;
    };
  }
  var s = {}, o = r.group;
  (!o || su(o) != "object") && (o = {
    name: o
  }), s.name = o.name, s.checkPull = i(o.pull, !0), s.checkPut = i(o.put), s.revertClone = o.revertClone, r.group = s;
}, T0 = function() {
  !w0 && je && Oe(je, "display", "none");
}, O0 = function() {
  !w0 && je && Oe(je, "display", "");
};
Nu && !v0 && document.addEventListener("click", function(t) {
  if (mu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), mu = !1, !1;
}, !0);
var Na = function(r) {
  if (oe) {
    r = r.touches ? r.touches[0] : r;
    var i = GS(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var o in r)
        r.hasOwnProperty(o) && (s[o] = r[o]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[an]._onDragOver(s);
    }
  }
}, VS = function(r) {
  oe && oe.parentNode[an]._isOutsideThisEl(r.target);
};
function De(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Cr({}, r), t[an] = this;
  var i = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return A0(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, p) {
      f.setData("Text", p.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: De.supportPointer !== !1 && "PointerEvent" in window && (!Ks || $d),
    emptyInsertThreshold: 5
  };
  sl.initializePlugins(this, t, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  N0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : FS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? qe(t, "pointerdown", this._onTapStart) : (qe(t, "mousedown", this._onTapStart), qe(t, "touchstart", this._onTapStart)), this.nativeDraggable && (qe(t, "dragover", this), qe(t, "dragenter", this)), gu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Cr(this, IS());
}
De.prototype = /** @lends Sortable.prototype */
{
  constructor: De,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ai = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, oe) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, o = this.options, u = o.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, m = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, y = o.filter;
      if (ex(s), !oe && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || o.disabled) && !m.isContentEditable && !(!this.nativeDraggable && Ks && h && h.tagName.toUpperCase() === "SELECT") && (h = Un(h, o.draggable, s, !1), !(h && h.animated) && lu !== h)) {
        if (ki = kn(h), Ws = kn(h, o.draggable), typeof y == "function") {
          if (y.call(this, r, h, this)) {
            Yt({
              sortable: i,
              rootEl: m,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), nn("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (y && (y = y.split(",").some(function(_) {
          if (_ = Un(m, _.trim(), s, !1), _)
            return Yt({
              sortable: i,
              rootEl: _,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), nn("filter", i, {
              evt: r
            }), !0;
        }), y)) {
          u && r.preventDefault();
          return;
        }
        o.handle && !Un(m, o.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var o = this, u = o.el, f = o.options, p = u.ownerDocument, h;
    if (s && !oe && s.parentNode === u) {
      var m = Et(s);
      if (lt = u, oe = s, pt = oe.parentNode, Ta = oe.nextSibling, lu = s, Co = f.group, De.dragged = oe, Aa = {
        target: oe,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, Tv = Aa.clientX - m.left, Ov = Aa.clientY - m.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, oe.style["will-change"] = "all", h = function() {
        if (nn("delayEnded", o, {
          evt: r
        }), De.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !Cv && o.nativeDraggable && (oe.draggable = !0), o._triggerDragStart(r, i), Yt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), gn(oe, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(y) {
        _0(oe, y.trim(), ad);
      }), qe(p, "dragover", Na), qe(p, "mousemove", Na), qe(p, "touchmove", Na), f.supportPointer ? (qe(p, "pointerup", o._onDrop), !this.nativeDraggable && qe(p, "pointercancel", o._onDrop)) : (qe(p, "mouseup", o._onDrop), qe(p, "touchend", o._onDrop), qe(p, "touchcancel", o._onDrop)), Cv && this.nativeDraggable && (this.options.touchStartThreshold = 4, oe.draggable = !0), nn("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(il || wr))) {
        if (De.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (qe(p, "pointerup", o._disableDelayedDrag), qe(p, "pointercancel", o._disableDelayedDrag)) : (qe(p, "mouseup", o._disableDelayedDrag), qe(p, "touchend", o._disableDelayedDrag), qe(p, "touchcancel", o._disableDelayedDrag)), qe(p, "mousemove", o._delayedDragTouchMoveHandler), qe(p, "touchmove", o._delayedDragTouchMoveHandler), f.supportPointer && qe(p, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(h, f.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    oe && ad(oe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    He(r, "mouseup", this._disableDelayedDrag), He(r, "touchend", this._disableDelayedDrag), He(r, "touchcancel", this._disableDelayedDrag), He(r, "pointerup", this._disableDelayedDrag), He(r, "pointercancel", this._disableDelayedDrag), He(r, "mousemove", this._delayedDragTouchMoveHandler), He(r, "touchmove", this._delayedDragTouchMoveHandler), He(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? qe(document, "pointermove", this._onTouchMove) : i ? qe(document, "touchmove", this._onTouchMove) : qe(document, "mousemove", this._onTouchMove) : (qe(oe, "dragend", this), qe(lt, "dragstart", this._onDragStart));
    try {
      document.selection ? uu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (Mi = !1, lt && oe) {
      nn("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && qe(document, "dragover", VS);
      var s = this.options;
      !r && gn(oe, s.dragClass, !1), gn(oe, s.ghostClass, !0), De.active = this, r && this._appendGhost(), Yt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (In) {
      this._lastX = In.clientX, this._lastY = In.clientY, T0();
      for (var r = document.elementFromPoint(In.clientX, In.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(In.clientX, In.clientY), r !== i); )
        i = r;
      if (oe.parentNode[an]._isOutsideThisEl(r), i)
        do {
          if (i[an]) {
            var s = void 0;
            if (s = i[an]._onDragOver({
              clientX: In.clientX,
              clientY: In.clientY,
              target: r,
              rootEl: i
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = b0(i));
      O0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var i = this.options, s = i.fallbackTolerance, o = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = je && Ri(je, !0), p = je && f && f.a, h = je && f && f.d, m = Ao && qt && Nv(qt), y = (u.clientX - Aa.clientX + o.x) / (p || 1) + (m ? m[0] - rd[0] : 0) / (p || 1), _ = (u.clientY - Aa.clientY + o.y) / (h || 1) + (m ? m[1] - rd[1] : 0) / (h || 1);
      if (!De.active && !Mi) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (je) {
        f ? (f.e += y - (td || 0), f.f += _ - (nd || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: _
        };
        var b = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Oe(je, "webkitTransform", b), Oe(je, "mozTransform", b), Oe(je, "msTransform", b), Oe(je, "transform", b), td = y, nd = _, In = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!je) {
      var r = this.options.fallbackOnBody ? document.body : lt, i = Et(oe, !0, Ao, !0, r), s = this.options;
      if (Ao) {
        for (qt = r; Oe(qt, "position") === "static" && Oe(qt, "transform") === "none" && qt !== document; )
          qt = qt.parentNode;
        qt !== document.body && qt !== document.documentElement ? (qt === document && (qt = Wn()), i.top += qt.scrollTop, i.left += qt.scrollLeft) : qt = Wn(), rd = Nv(qt);
      }
      je = oe.cloneNode(!0), gn(je, s.ghostClass, !1), gn(je, s.fallbackClass, !0), gn(je, s.dragClass, !0), Oe(je, "transition", ""), Oe(je, "transform", ""), Oe(je, "box-sizing", "border-box"), Oe(je, "margin", 0), Oe(je, "top", i.top), Oe(je, "left", i.left), Oe(je, "width", i.width), Oe(je, "height", i.height), Oe(je, "opacity", "0.8"), Oe(je, "position", Ao ? "absolute" : "fixed"), Oe(je, "zIndex", "100000"), Oe(je, "pointerEvents", "none"), De.ghost = je, r.appendChild(je), Oe(je, "transform-origin", Tv / parseInt(je.style.width) * 100 + "% " + Ov / parseInt(je.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, o = r.dataTransfer, u = s.options;
    if (nn("dragStart", this, {
      evt: r
    }), De.eventCanceled) {
      this._onDrop();
      return;
    }
    nn("setupClone", this), De.eventCanceled || (ct = E0(oe), ct.removeAttribute("id"), ct.draggable = !1, ct.style["will-change"] = "", this._hideClone(), gn(ct, this.options.chosenClass, !1), De.clone = ct), s.cloneId = uu(function() {
      nn("clone", s), !De.eventCanceled && (s.options.removeCloneOnHide || lt.insertBefore(ct, oe), s._hideClone(), Yt({
        sortable: s,
        name: "clone"
      }));
    }), !i && gn(oe, u.dragClass, !0), i ? (mu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (He(document, "mouseup", s._onDrop), He(document, "touchend", s._onDrop), He(document, "touchcancel", s._onDrop), o && (o.effectAllowed = "move", u.setData && u.setData.call(s, o, oe)), qe(document, "drop", s), Oe(oe, "transform", "translateZ(0)")), Mi = !0, s._dragStartId = uu(s._dragStarted.bind(s, i, r)), qe(document, "selectstart", s), Ys = !0, window.getSelection().removeAllRanges(), Ks && Oe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, o, u, f, p = this.options, h = p.group, m = De.active, y = Co === h, _ = p.sort, b = Pt || m, g, d = this, S = !1;
    if (Td) return;
    function x(pe, Re) {
      nn(pe, d, er({
        evt: r,
        isOwner: y,
        axis: g ? "vertical" : "horizontal",
        revert: f,
        dragRect: o,
        targetRect: u,
        canSort: _,
        fromSortable: b,
        target: s,
        completed: A,
        onMove: function(W, ie) {
          return No(lt, i, oe, o, W, Et(W), r, ie);
        },
        changed: D
      }, Re));
    }
    function T() {
      x("dragOverAnimationCapture"), d.captureAnimationState(), d !== b && b.captureAnimationState();
    }
    function A(pe) {
      return x("dragOverCompleted", {
        insertion: pe
      }), pe && (y ? m._hideClone() : m._showClone(d), d !== b && (gn(oe, Pt ? Pt.options.ghostClass : m.options.ghostClass, !1), gn(oe, p.ghostClass, !0)), Pt !== d && d !== De.active ? Pt = d : d === De.active && Pt && (Pt = null), b === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        x("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (s === oe && !oe.animated || s === i && !s.animated) && (Ai = null), !p.dragoverBubble && !r.rootEl && s !== document && (oe.parentNode[an]._isOutsideThisEl(r.target), !pe && Na(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function D() {
      vn = kn(oe), Wr = kn(oe, p.draggable), Yt({
        sortable: d,
        name: "change",
        toEl: i,
        newIndex: vn,
        newDraggableIndex: Wr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Un(s, p.draggable, i, !0), x("dragOver"), De.eventCanceled) return S;
    if (oe.contains(r.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return A(!1);
    if (mu = !1, m && !p.disabled && (y ? _ || (f = pt !== lt) : Pt === this || (this.lastPutMode = Co.checkPull(this, m, oe, r)) && h.checkPut(this, m, oe, r))) {
      if (g = this._getDirection(r, s) === "vertical", o = Et(oe), x("dragOverValid"), De.eventCanceled) return S;
      if (f)
        return pt = lt, T(), this._hideClone(), x("revert"), De.eventCanceled || (Ta ? lt.insertBefore(oe, Ta) : lt.appendChild(oe)), A(!0);
      var C = Qd(i, p.draggable);
      if (!C || QS(r, g, this) && !C.animated) {
        if (C === oe)
          return A(!1);
        if (C && i === r.target && (s = C), s && (u = Et(s)), No(lt, i, oe, o, s, u, r, !!s) !== !1)
          return T(), C && C.nextSibling ? i.insertBefore(oe, C.nextSibling) : i.appendChild(oe), pt = i, D(), A(!0);
      } else if (C && $S(r, g, this)) {
        var N = Pi(i, 0, p, !0);
        if (N === oe)
          return A(!1);
        if (s = N, u = Et(s), No(lt, i, oe, o, s, u, r, !1) !== !1)
          return T(), i.insertBefore(oe, N), pt = i, D(), A(!0);
      } else if (s.parentNode === i) {
        u = Et(s);
        var M = 0, k, H = oe.parentNode !== i, X = !ZS(oe.animated && oe.toRect || o, s.animated && s.toRect || u, g), P = g ? "top" : "left", Y = Av(s, "top", "top") || Av(oe, "top", "top"), K = Y ? Y.scrollTop : void 0;
        Ai !== s && (k = u[P], tl = !1, wo = !X && p.invertSwap || H), M = KS(r, s, u, g, X ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, wo, Ai === s);
        var ue;
        if (M !== 0) {
          var me = kn(oe);
          do
            me -= M, ue = pt.children[me];
          while (ue && (Oe(ue, "display") === "none" || ue === je));
        }
        if (M === 0 || ue === s)
          return A(!1);
        Ai = s, el = M;
        var ve = s.nextElementSibling, B = !1;
        B = M === 1;
        var re = No(lt, i, oe, o, s, u, r, B);
        if (re !== !1)
          return (re === 1 || re === -1) && (B = re === 1), Td = !0, setTimeout(XS, 30), T(), B && !ve ? i.appendChild(oe) : s.parentNode.insertBefore(oe, B ? ve : s), Y && x0(Y, 0, K - Y.scrollTop), pt = oe.parentNode, k !== void 0 && !wo && (ou = Math.abs(k - Et(s)[P])), D(), A(!0);
      }
      if (i.contains(oe))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    He(document, "mousemove", this._onTouchMove), He(document, "touchmove", this._onTouchMove), He(document, "pointermove", this._onTouchMove), He(document, "dragover", Na), He(document, "mousemove", Na), He(document, "touchmove", Na);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    He(r, "mouseup", this._onDrop), He(r, "touchend", this._onDrop), He(r, "pointerup", this._onDrop), He(r, "pointercancel", this._onDrop), He(r, "touchcancel", this._onDrop), He(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (vn = kn(oe), Wr = kn(oe, s.draggable), nn("drop", this, {
      evt: r
    }), pt = oe && oe.parentNode, vn = kn(oe), Wr = kn(oe, s.draggable), De.eventCanceled) {
      this._nulling();
      return;
    }
    Mi = !1, wo = !1, tl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Od(this.cloneId), Od(this._dragStartId), this.nativeDraggable && (He(document, "drop", this), He(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ks && Oe(document.body, "user-select", ""), Oe(oe, "transform", ""), r && (Ys && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), je && je.parentNode && je.parentNode.removeChild(je), (lt === pt || Pt && Pt.lastPutMode !== "clone") && ct && ct.parentNode && ct.parentNode.removeChild(ct), oe && (this.nativeDraggable && He(oe, "dragend", this), ad(oe), oe.style["will-change"] = "", Ys && !Mi && gn(oe, Pt ? Pt.options.ghostClass : this.options.ghostClass, !1), gn(oe, this.options.chosenClass, !1), Yt({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), lt !== pt ? (vn >= 0 && (Yt({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: lt,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: r
    }), Yt({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: lt,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Pt && Pt.save()) : vn !== ki && vn >= 0 && (Yt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), De.active && ((vn == null || vn === -1) && (vn = ki, Wr = Ws), Yt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    nn("nulling", this), lt = oe = pt = je = Ta = ct = lu = ea = Aa = In = Ys = vn = Wr = ki = Ws = Ai = el = Pt = Co = De.dragged = De.ghost = De.clone = De.active = null, vu.forEach(function(r) {
      r.checked = !0;
    }), vu.length = td = nd = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        oe && (this._onDragOver(r), YS(r));
        break;
      case "selectstart":
        r.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var r = [], i, s = this.el.children, o = 0, u = s.length, f = this.options; o < u; o++)
      i = s[o], Un(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || WS(i));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, i) {
    var s = {}, o = this.el;
    this.toArray().forEach(function(u, f) {
      var p = o.children[f];
      Un(p, this.options.draggable, o, !1) && (s[u] = p);
    }, this), i && this.captureAnimationState(), r.forEach(function(u) {
      s[u] && (o.removeChild(s[u]), o.appendChild(s[u]));
    }), i && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var r = this.options.store;
    r && r.set && r.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(r, i) {
    return Un(r, i || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, i) {
    var s = this.options;
    if (i === void 0)
      return s[r];
    var o = sl.modifyOption(this, r, i);
    typeof o < "u" ? s[r] = o : s[r] = i, r === "group" && N0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    nn("destroy", this);
    var r = this.el;
    r[an] = null, He(r, "mousedown", this._onTapStart), He(r, "touchstart", this._onTapStart), He(r, "pointerdown", this._onTapStart), this.nativeDraggable && (He(r, "dragover", this), He(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), gu.splice(gu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ea) {
      if (nn("hideClone", this), De.eventCanceled) return;
      Oe(ct, "display", "none"), this.options.removeCloneOnHide && ct.parentNode && ct.parentNode.removeChild(ct), ea = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ea) {
      if (nn("showClone", this), De.eventCanceled) return;
      oe.parentNode == lt && !this.options.group.revertClone ? lt.insertBefore(ct, oe) : Ta ? lt.insertBefore(ct, Ta) : lt.appendChild(ct), this.options.group.revertClone && this.animate(oe, ct), Oe(ct, "display", ""), ea = !1;
    }
  }
};
function YS(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function No(t, r, i, s, o, u, f, p) {
  var h, m = t[an], y = m.options.onMove, _;
  return window.CustomEvent && !wr && !il ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = i, h.draggedRect = s, h.related = o || r, h.relatedRect = u || Et(r), h.willInsertAfter = p, h.originalEvent = f, t.dispatchEvent(h), y && (_ = y.call(m, h, f)), _;
}
function ad(t) {
  t.draggable = !1;
}
function XS() {
  Td = !1;
}
function $S(t, r, i) {
  var s = Et(Pi(i.el, 0, i.options, !0)), o = C0(i.el, i.options, je), u = 10;
  return r ? t.clientX < o.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < o.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function QS(t, r, i) {
  var s = Et(Qd(i.el, i.options.draggable)), o = C0(i.el, i.options, je), u = 10;
  return r ? t.clientX > o.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > o.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function KS(t, r, i, s, o, u, f, p) {
  var h = s ? t.clientY : t.clientX, m = s ? i.height : i.width, y = s ? i.top : i.left, _ = s ? i.bottom : i.right, b = !1;
  if (!f) {
    if (p && ou < m * o) {
      if (!tl && (el === 1 ? h > y + m * u / 2 : h < _ - m * u / 2) && (tl = !0), tl)
        b = !0;
      else if (el === 1 ? h < y + ou : h > _ - ou)
        return -el;
    } else if (h > y + m * (1 - o) / 2 && h < _ - m * (1 - o) / 2)
      return JS(r);
  }
  return b = b || f, b && (h < y + m * u / 2 || h > _ - m * u / 2) ? h > y + m / 2 ? 1 : -1 : 0;
}
function JS(t) {
  return kn(oe) < kn(t) ? 1 : -1;
}
function WS(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function ex(t) {
  vu.length = 0;
  for (var r = t.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && vu.push(s);
  }
}
function uu(t) {
  return setTimeout(t, 0);
}
function Od(t) {
  return clearTimeout(t);
}
Nu && qe(document, "touchmove", function(t) {
  (De.active || Mi) && t.cancelable && t.preventDefault();
});
De.utils = {
  on: qe,
  off: He,
  css: Oe,
  find: _0,
  is: function(r, i) {
    return !!Un(r, i, r, !1);
  },
  extend: LS,
  throttle: S0,
  closest: Un,
  toggleClass: gn,
  clone: E0,
  index: kn,
  nextTick: uu,
  cancelNextTick: Od,
  detectDirection: A0,
  getChild: Pi,
  expando: an
};
De.get = function(t) {
  return t[an];
};
De.mount = function() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (De.utils = er(er({}, De.utils), s.utils)), sl.mount(s);
  });
};
De.create = function(t, r) {
  return new De(t, r);
};
De.version = RS;
var xt = [], Xs, Dd, Md = !1, id, sd, yu, $s;
function tx() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  }
  return t.prototype = {
    dragStarted: function(i) {
      var s = i.originalEvent;
      this.sortable.nativeDraggable ? qe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? qe(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? qe(document, "touchmove", this._handleFallbackAutoScroll) : qe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? He(document, "dragover", this._handleAutoScroll) : (He(document, "pointermove", this._handleFallbackAutoScroll), He(document, "touchmove", this._handleFallbackAutoScroll), He(document, "mousemove", this._handleFallbackAutoScroll)), Mv(), cu(), PS();
    },
    nulling: function() {
      yu = Dd = Xs = Md = $s = id = sd = null, xt.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var o = this, u = (i.touches ? i.touches[0] : i).clientX, f = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, f);
      if (yu = i, s || this.options.forceAutoScrollFallback || il || wr || Ks) {
        ld(i, this.options, p, s);
        var h = ta(p, !0);
        Md && (!$s || u !== id || f !== sd) && ($s && Mv(), $s = setInterval(function() {
          var m = ta(document.elementFromPoint(u, f), !0);
          m !== h && (h = m, cu()), ld(i, o.options, m, s);
        }, 10), id = u, sd = f);
      } else {
        if (!this.options.bubbleScroll || ta(p, !0) === Wn()) {
          cu();
          return;
        }
        ld(i, this.options, ta(p, !1), !1);
      }
    }
  }, Cr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function cu() {
  xt.forEach(function(t) {
    clearInterval(t.pid);
  }), xt = [];
}
function Mv() {
  clearInterval($s);
}
var ld = S0(function(t, r, i, s) {
  if (r.scroll) {
    var o = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = Wn(), m = !1, y;
    Dd !== i && (Dd = i, cu(), Xs = r.scroll, y = r.scrollFn, Xs === !0 && (Xs = ta(i, !0)));
    var _ = 0, b = Xs;
    do {
      var g = b, d = Et(g), S = d.top, x = d.bottom, T = d.left, A = d.right, D = d.width, C = d.height, N = void 0, M = void 0, k = g.scrollWidth, H = g.scrollHeight, X = Oe(g), P = g.scrollLeft, Y = g.scrollTop;
      g === h ? (N = D < k && (X.overflowX === "auto" || X.overflowX === "scroll" || X.overflowX === "visible"), M = C < H && (X.overflowY === "auto" || X.overflowY === "scroll" || X.overflowY === "visible")) : (N = D < k && (X.overflowX === "auto" || X.overflowX === "scroll"), M = C < H && (X.overflowY === "auto" || X.overflowY === "scroll"));
      var K = N && (Math.abs(A - o) <= f && P + D < k) - (Math.abs(T - o) <= f && !!P), ue = M && (Math.abs(x - u) <= f && Y + C < H) - (Math.abs(S - u) <= f && !!Y);
      if (!xt[_])
        for (var me = 0; me <= _; me++)
          xt[me] || (xt[me] = {});
      (xt[_].vx != K || xt[_].vy != ue || xt[_].el !== g) && (xt[_].el = g, xt[_].vx = K, xt[_].vy = ue, clearInterval(xt[_].pid), (K != 0 || ue != 0) && (m = !0, xt[_].pid = setInterval((function() {
        s && this.layer === 0 && De.active._onTouchMove(yu);
        var ve = xt[this.layer].vy ? xt[this.layer].vy * p : 0, B = xt[this.layer].vx ? xt[this.layer].vx * p : 0;
        typeof y == "function" && y.call(De.dragged.parentNode[an], B, ve, t, yu, xt[this.layer].el) !== "continue" || x0(xt[this.layer].el, B, ve);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && b !== h && (b = ta(b, !1)));
    Md = m;
  }
}, 30), D0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, o = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (i) {
    var m = s || u;
    p();
    var y = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, _ = document.elementFromPoint(y.clientX, y.clientY);
    h(), m && !m.el.contains(_) && (f("spill"), this.onSpill({
      dragEl: o,
      putSortable: s
    }));
  }
};
function Kd() {
}
Kd.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var i = r.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var o = Pi(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(i, o) : this.sortable.el.appendChild(i), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: D0
};
Cr(Kd, {
  pluginName: "revertOnSpill"
});
function Jd() {
}
Jd.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, o = s || this.sortable;
    o.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), o.animateAll();
  },
  drop: D0
};
Cr(Jd, {
  pluginName: "removeOnSpill"
});
De.mount(new tx());
De.mount(Jd, Kd);
async function nx({
  entry: t,
  selectedWorldName: r,
  skipSave: i = !1,
  skipReload: s = !1,
  operation: o = "auto"
}) {
  const u = SillyTavern.getContext(), f = await u.loadWorldInfo(r);
  if (!f)
    throw new Error("Failed to load world info");
  const p = Object.values(f.entries), h = p.length > 0 ? p[p.length - 1] : void 0;
  let m;
  if (o === "update" || o === "auto") {
    const _ = Object.values(f.entries).find((b) => b.uid === t.uid);
    if (_)
      (o === "auto" || o === "update") && (m = _);
    else if (o === "update")
      throw new Error("Entry not found for update operation");
  }
  const y = m ? "update" : "add";
  if (!m) {
    if (m = AS(r, f), !m)
      throw new Error("Failed to create entry");
    if (h) {
      const _ = m.uid;
      Object.assign(m, h), m.uid = _;
    }
  }
  return m.key = t.key, m.content = t.content, m.comment = t.comment, i || await u.saveWorldInfo(r, f), s || u.reloadWorldInfoEditor(r, !0), {
    entry: m,
    operation: y
  };
}
const kd = `=======

A character card is the blueprint for your AI. Its purpose is to provide a clear, consistent, and compelling set of instructions that guide the AI's personality, behavior, and speech. A well-crafted card is the difference between a forgettable bot and an immersive, believable character.

This guide is structured into two parts:
1.  **Core Identity:** The essential fields that define who your character is.
2.  **Interaction & Context:** The fields that define how the user will interact with them.

---

### Part 1: Core Identity - Defining Who The Character Is

These fields build the foundation of your character's being.

#### 1. Name
The character's primary identifier. It sets the first impression.

*   **Purpose**: To give the AI and user a clear reference point.
*   **Best Practices**:
    *   **Be Evocative**: A name like "Sergeant Rex 'Ironclad' Jones" tells a story. "Bob" does not.
    *   **Prioritize Clarity**: Avoid names that are difficult to spell or pronounce, as the AI may misuse them.
*   **Example**:
    *   **Strong**: "Kaelen, the Whisperwood Scout"
    *   **Weak**: "Xy'zth'gor"

#### 2. Description (The "At-a-Glance" Summary)
This is a concise paragraph that gives the AI a holistic "mental image" of the character. It should blend their most critical physical and personality traits into a single snapshot.

*   **Purpose**: To provide a quick, high-level summary the AI can reference for appearance, demeanor, and key details.
*   **Structure**:
    1.  **Appearance**: Start with their most defining physical features.
    2.  **Demeanor**: Describe their general personality and how they carry themselves.
    3.  **A Key Quirk**: End with a unique detail that makes them memorable.
*   **Example**:
    > A tall, graceful woman with bronze hair and startling green eyes, carrying herself with the quiet dignity of a noble and the focused intensity of a warrior. A member of a secretive matriarchal order, she is a master of subtle influence and a formidable political strategist. Though her exterior is composed and serene, she is fiercely protective of those she loves.

#### 3. Personality (The "Rulebook" for Behavior)
While the **Description** is a summary, this field contains direct, explicit instructions for the AI. It defines the character's internal thoughts, motivations, and behavioral rules in detail.

*   **Purpose**: To eliminate ambiguity and give the AI a clear, actionable set of traits to follow.
*   **Best Practices**:
    *   Use clear, declarative sentences to define the character's core rules.
    *   Focus on core motivations, deep-seated fears, and moral alignment.
    *   Avoid contradictions (e.g., describing a character as both "Patient" and "Impulsive") to ensure the AI's behavior remains consistent.
*   **Example**:
    > A supreme pragmatist who believes a functioning society is more important than a moral one. Masterfully manipulative, he remains several steps ahead of allies and enemies alike, viewing people as pieces on a chessboard to be positioned for the city's greater good. He abhors chaos and inefficiency above all else, maintaining a calm, detached, and unnervingly still demeanor that forces others to fill the silence. He never raises his voice, preferring to convey threats with quiet, measured words.

---

### Part 2: Interaction & Context - Setting the Stage

These fields define the environment and the way your character communicates.

#### 4. Scenario (The "Where, When, and Why")
This sets the scene for the interaction, providing the context that frames the roleplay.

*   **Purpose**: To establish the setting, the timeline, and the initial relationship between the character and the user.
*   **What to Include**:
    *   **Location**: Where is the interaction taking place?
    *   **Context**: What is happening?
    *   **Relationship**: How do {{char}} and {{user}} know each other?
*   **Example**:
    > The setting is a grimy, unsupervised slum in a sprawling metropolis, a place where illegal commerce thrives. The sky is the color of a dead television channel. {{char}} is a "console cowboy," a disgraced data thief whose nervous system was damaged as punishment for stealing from an employer. {{user}} is a mysterious mercenary who has tracked {{char}} down to offer a cure in exchange for one last, impossible job.

#### 5. First Message (The Opening Hook)
This is the character's opening line. It's the single most important field for establishing tone, voice, and immediate engagement.

*   **Purpose**: To kick off the roleplay with a compelling hook that embodies the character's personality.
*   **Key Elements**:
    1.  **Action**: Start with a physical action to ground the scene.
    2.  **Dialogue**: Write a line that reveals their personality.
    3.  **A Hook**: End with something that prompts a response.
*   **Example**:
    > *{{char}} calmly watches the spinning ceiling fan, the smoke from his cigarette curling into the stagnant air. He doesn't meet {{user}}'s eyes, instead focusing on the condensation on his glass.* "They're just questions. It's a test, designed to provoke an emotional response. Shall we continue?"

#### 6. Example Dialogue (The Voice & Style Guide)
This is a "style guide" that teaches the AI *how* your character speaks, thinks, and formats their responses.

*   **Purpose**: To provide a clear template for the character's speech patterns, vocabulary, and interaction style.
*   **Structure**:
    *   Use {{user}} and {{char}} to create 2-3 short exchanges.
    *   Showcase a range of emotions.
    *   Mix dialogue with actions (in asterisks) to demonstrate their body language.
*   **Example**:
    \`\`\`
    {{user}}: "What makes you think your plan will work?"
    {{char}}: *A slow, confident smirk spreads across her face as she leans back in her chair, boots resting on the scarred metal desk.* "Because I accounted for every variable. Especially the human one—your greed."

    {{user}}: "I'm not sure I can do this."
    {{char}}: *Her expression softens for a brief moment. She places a reassuring hand on {{user}}'s shoulder, her calloused fingers a surprising comfort.* "Fear is just a signal. It tells you what you need to protect. Now, let's protect it together."
    \`\`\`

#### 7. Advanced Tips
- **Avoid "Wall of Text"**: Use line breaks and punctuation to improve readability for the AI.

=======`, M0 = `{{#if characters}}
## Selected Characters for Context
{{#each characters}}
### {{this.name}}
{{#if this.description}}
#### Description
{{this.description}}
{{/if}}
{{#if this.personality}}
#### Personality
{{this.personality}}
{{/if}}
{{#if this.scenario}}
#### Scenario
{{this.scenario}}
{{/if}}
{{#if this.first_mes}}
#### First Message
{{this.first_mes}}
{{/if}}
{{#if this.mes_example}}
#### Example Dialogue
{{this.mes_example}}
{{/if}}
{{#if this.alternate_greetings}}
#### Alternate Greetings
{{#each this.alternate_greetings}}
### {{add @index 1}}
{{this}}
{{/each}}
{{/if}}

{{/each}}
{{/if}}`, rx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, ax = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, ix = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, Wd = "{{activeFormatInstructions}}", k0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, sx = `### {{character.name}}
- **Description:** {{#if character.description}}{{character.description}}{{else}}*Not provided*{{/if}}
- **Personality:** {{#if character.personality}}{{character.personality}}{{else}}*Not provided*{{/if}}
- **Scenario:** {{#if character.scenario}}{{character.scenario}}{{else}}*Not provided*{{/if}}
- **First Message:** {{#if character.first_mes}}{{character.first_mes}}{{else}}*Not provided*{{/if}}
- **Example Dialogue:**
  {{#if character.mes_example}}{{character.mes_example}}{{else}}*Not provided*{{/if}}
- **Alternate Greetings:**
  {{#if character.alternate_greetings}}
  {{#each character.alternate_greetings}}
  **{{add @index 1}}:** {{this}}
  {{/each}}
  {{else}}*Not provided*{{/if}}`, nl = `{{#is_not_empty fields}}
=== CURRENT CHARACTER FIELD VALUES ===
{{#is_not_empty fields.core}}
**Core Fields:**
{{#each fields.core as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}

{{#is_not_empty fields.alternate_greetings}}
**Alternate Greetings:**
{{#each fields.alternate_greetings as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}

{{#is_not_empty fields.draft}}
**Draft Fields:**
{{#each fields.draft as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}
{{/is_not_empty}}`, lx = `## User's Persona Description
name: {{user}}
{{persona}}`, eh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, ox = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", ux = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", cx = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, th = "You are a creative writing assistant helping brainstorm and design a character. Engage in freeform discussion about character concepts, personality traits, backstory ideas, world-building, and narrative design. Be collaborative, offer suggestions, and help refine ideas through conversation.", j0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fx = j0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", dx = "[" + j0 + "][" + fx + "]*", hx = new RegExp("^" + dx + "$");
function R0(t, r) {
  const i = [];
  let s = r.exec(t);
  for (; s; ) {
    const o = [];
    o.startIndex = r.lastIndex - s[0].length;
    const u = s.length;
    for (let f = 0; f < u; f++)
      o.push(s[f]);
    i.push(o), s = r.exec(t);
  }
  return i;
}
const nh = function(t) {
  const r = hx.exec(t);
  return !(r === null || typeof r > "u");
};
function px(t) {
  return typeof t < "u";
}
const mx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function z0(t, r) {
  r = Object.assign({}, mx, r);
  const i = [];
  let s = !1, o = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = jv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = Rv(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let h = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          h += t[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !Ex(h)) {
          let _;
          return h.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + h + "' is an invalid name.", yt("InvalidTag", _, Xt(t, u));
        }
        const m = yx(t, u);
        if (m === !1)
          return yt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Xt(t, u));
        let y = m.value;
        if (u = m.index, y[y.length - 1] === "/") {
          const _ = u - y.length;
          y = y.substring(0, y.length - 1);
          const b = zv(y, r);
          if (b === !0)
            s = !0;
          else
            return yt(b.err.code, b.err.msg, Xt(t, _ + b.err.line));
        } else if (p)
          if (m.tagClosed) {
            if (y.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Xt(t, f));
            if (i.length === 0)
              return yt("InvalidTag", "Closing tag '" + h + "' has not been opened.", Xt(t, f));
            {
              const _ = i.pop();
              if (h !== _.tagName) {
                let b = Xt(t, _.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + b.line + ", col " + b.col + ") instead of closing tag '" + h + "'.",
                  Xt(t, f)
                );
              }
              i.length == 0 && (o = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Xt(t, u));
        else {
          const _ = zv(y, r);
          if (_ !== !0)
            return yt(_.err.code, _.err.msg, Xt(t, u - y.length + _.err.line));
          if (o === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Xt(t, u));
          r.unpairedTags.indexOf(h) !== -1 || i.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = Rv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = jv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = Sx(t, u);
            if (_ == -1)
              return yt("InvalidChar", "char '&' is not expected.", Xt(t, u));
            u = _;
          } else if (o === !0 && !kv(t[u]))
            return yt("InvalidXml", "Extra text at the end", Xt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (kv(t[u]))
        continue;
      return yt("InvalidChar", "char '" + t[u] + "' is not expected.", Xt(t, u));
    }
  if (s) {
    if (i.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Xt(t, i[0].tagStartPos));
    if (i.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function kv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function jv(t, r) {
  const i = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(i, r - i);
      if (r > 5 && s === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", Xt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Rv(t, r) {
  if (t.length > r + 5 && t[r + 1] === "-" && t[r + 2] === "-") {
    for (r += 3; r < t.length; r++)
      if (t[r] === "-" && t[r + 1] === "-" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  } else if (t.length > r + 8 && t[r + 1] === "D" && t[r + 2] === "O" && t[r + 3] === "C" && t[r + 4] === "T" && t[r + 5] === "Y" && t[r + 6] === "P" && t[r + 7] === "E") {
    let i = 1;
    for (r += 8; r < t.length; r++)
      if (t[r] === "<")
        i++;
      else if (t[r] === ">" && (i--, i === 0))
        break;
  } else if (t.length > r + 9 && t[r + 1] === "[" && t[r + 2] === "C" && t[r + 3] === "D" && t[r + 4] === "A" && t[r + 5] === "T" && t[r + 6] === "A" && t[r + 7] === "[") {
    for (r += 8; r < t.length; r++)
      if (t[r] === "]" && t[r + 1] === "]" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  }
  return r;
}
const gx = '"', vx = "'";
function yx(t, r) {
  let i = "", s = "", o = !1;
  for (; r < t.length; r++) {
    if (t[r] === gx || t[r] === vx)
      s === "" ? s = t[r] : s !== t[r] || (s = "");
    else if (t[r] === ">" && s === "") {
      o = !0;
      break;
    }
    i += t[r];
  }
  return s !== "" ? !1 : {
    value: i,
    index: r,
    tagClosed: o
  };
}
const bx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function zv(t, r) {
  const i = R0(t, bx), s = {};
  for (let o = 0; o < i.length; o++) {
    if (i[o][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + i[o][2] + "' has no space in starting.", Bs(i[o]));
    if (i[o][3] !== void 0 && i[o][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + i[o][2] + "' is without value.", Bs(i[o]));
    if (i[o][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + i[o][2] + "' is not allowed.", Bs(i[o]));
    const u = i[o][2];
    if (!xx(u))
      return yt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Bs(i[o]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + u + "' is repeated.", Bs(i[o]));
  }
  return !0;
}
function _x(t, r) {
  let i = /\d/;
  for (t[r] === "x" && (r++, i = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(i))
      break;
  }
  return -1;
}
function Sx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, _x(t, r);
  let i = 0;
  for (; r < t.length; r++, i++)
    if (!(t[r].match(/\w/) && i < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function yt(t, r, i) {
  return {
    err: {
      code: t,
      msg: r,
      line: i.line || i,
      col: i.col
    }
  };
}
function xx(t) {
  return nh(t);
}
function Ex(t) {
  return nh(t);
}
function Xt(t, r) {
  const i = t.substring(0, r).split(/\r?\n/);
  return {
    line: i.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: i[i.length - 1].length + 1
  };
}
function Bs(t) {
  return t.startIndex + t[1].length;
}
const Cx = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(t, r) {
    return r;
  },
  attributeValueProcessor: function(t, r) {
    return r;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(t, r, i) {
    return t;
  }
  // skipEmptyListItem: false
}, wx = function(t) {
  return Object.assign({}, Cx, t);
};
class Us {
  constructor(r) {
    this.tagname = r, this.child = [], this[":@"] = {};
  }
  add(r, i) {
    r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: i });
  }
  addChild(r) {
    r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
  }
}
function Ax(t, r) {
  const i = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, o = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (o && Ox(t, r)) {
          r += 7;
          let p, h;
          [p, h, r] = Nx(t, r + 1), h.indexOf("&") === -1 && (i[jx(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (o && Dx(t, r)) r += 8;
        else if (o && Mx(t, r)) r += 8;
        else if (o && kx(t, r)) r += 9;
        else if (Tx) u = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, f = "";
      } else if (t[r] === ">") {
        if (u ? t[r - 1] === "-" && t[r - 2] === "-" && (u = !1, s--) : s--, s === 0)
          break;
      } else t[r] === "[" ? o = !0 : f += t[r];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: i, i: r };
}
function Nx(t, r) {
  let i = "";
  for (; r < t.length && t[r] !== "'" && t[r] !== '"'; r++)
    i += t[r];
  if (i = i.trim(), i.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = t[r++];
  let o = "";
  for (; r < t.length && t[r] !== s; r++)
    o += t[r];
  return [i, o, r];
}
function Tx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function Ox(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Dx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Mx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function kx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function jx(t) {
  if (nh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Rx = /^[-+]?0x[a-fA-F0-9]+$/, zx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Lx = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Px(t, r = {}) {
  if (r = Object.assign({}, Lx, r), !t || typeof t != "string") return t;
  let i = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return t;
  if (t === "0") return 0;
  if (r.hex && Rx.test(i))
    return Bx(i, 16);
  if (i.search(/[eE]/) !== -1) {
    const s = i.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (s) {
      if (r.leadingZeros)
        i = (s[1] || "") + s[3];
      else if (!(s[2] === "0" && s[3][0] === ".")) return t;
      return r.eNotation ? Number(i) : t;
    } else
      return t;
  } else {
    const s = zx.exec(i);
    if (s) {
      const o = s[1], u = s[2];
      let f = Ix(s[3]);
      if (!r.leadingZeros && u.length > 0 && o && i[2] !== ".") return t;
      if (!r.leadingZeros && u.length > 0 && !o && i[1] !== ".") return t;
      if (r.leadingZeros && u === t) return 0;
      {
        const p = Number(i), h = "" + p;
        return h.search(/[eE]/) !== -1 ? r.eNotation ? p : t : i.indexOf(".") !== -1 ? h === "0" && f === "" || h === f || o && h === "-" + f ? p : t : u ? f === h || o + f === h ? p : t : i === h || i === o + h ? p : t;
      }
    } else
      return t;
  }
}
function Ix(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function Bx(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function Ux(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const i of t)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class Hx {
  constructor(r) {
    this.options = r, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (i, s) => String.fromCodePoint(Number.parseInt(s, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (i, s) => String.fromCodePoint(Number.parseInt(s, 16)) }
    }, this.addExternalEntities = qx, this.parseXml = Yx, this.parseTextData = Fx, this.resolveNameSpace = Zx, this.buildAttributesMap = Vx, this.isItStopNode = Kx, this.replaceEntitiesValue = $x, this.readStopNodeData = Wx, this.saveTextToParentTag = Qx, this.addChild = Xx, this.ignoreAttributesFn = Ux(this.options.ignoreAttributes);
  }
}
function qx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function Fx(t, r, i, s, o, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, i, o, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? Rd(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Rd(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function Zx(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), i = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = i + r[1]);
  }
  return t;
}
const Gx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function Vx(t, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = R0(t, Gx), o = s.length, u = {};
    for (let f = 0; f < o; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], m = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (m = this.options.transformAttributeName(m)), m === "__proto__" && (m = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const y = this.options.attributeValueProcessor(p, h, r);
          y == null ? u[m] = h : typeof y != typeof h || y !== h ? u[m] = y : u[m] = Rd(
            h,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (u[m] = !0);
    }
    if (!Object.keys(u).length)
      return;
    if (this.options.attributesGroupName) {
      const f = {};
      return f[this.options.attributesGroupName] = u, f;
    }
    return u;
  }
}
const Yx = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new Us("!xml");
  let i = r, s = "", o = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const p = ka(t, ">", u, "Closing Tag is not closed.");
        let h = t.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const _ = h.indexOf(":");
          _ !== -1 && (h = h.substr(_ + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && (s = this.saveTextToParentTag(s, i, o));
        const m = o.substring(o.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let y = 0;
        m && this.options.unpairedTags.indexOf(m) !== -1 ? (y = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = o.lastIndexOf("."), o = o.substring(0, y), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = jd(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, o), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new Us(p.tagName);
          h.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (h[":@"] = this.buildAttributesMap(p.tagExp, o, p.tagName)), this.addChild(i, h, o);
        }
        u = p.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const p = ka(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = t.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, i, o), i.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = p;
      } else if (t.substr(u + 1, 2) === "!D") {
        const p = Ax(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = ka(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, o);
        let m = this.parseTextData(h, i.tagname, o, !0, !1, !0, !0);
        m == null && (m = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : i.add(this.options.textNodeName, m), u = p + 2;
      } else {
        let p = jd(t, u, this.options.removeNSPrefix), h = p.tagName;
        const m = p.rawTagName;
        let y = p.tagExp, _ = p.attrExpPresent, b = p.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, o, !1));
        const g = i;
        if (g && this.options.unpairedTags.indexOf(g.tagname) !== -1 && (i = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), h !== r.tagname && (o += o ? "." + h : h), this.isItStopNode(this.options.stopNodes, o, h)) {
          let d = "";
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), y = h) : y = y.substr(0, y.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = p.closeIndex;
          else {
            const x = this.readStopNodeData(t, m, b + 1);
            if (!x) throw new Error(`Unexpected end of ${m}`);
            u = x.i, d = x.tagContent;
          }
          const S = new Us(h);
          h !== y && _ && (S[":@"] = this.buildAttributesMap(y, o, h)), d && (d = this.parseTextData(d, h, o, !0, _, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), S.add(this.options.textNodeName, d), this.addChild(i, S, o);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), y = h) : y = y.substr(0, y.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const d = new Us(h);
            h !== y && _ && (d[":@"] = this.buildAttributesMap(y, o, h)), this.addChild(i, d, o), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const d = new Us(h);
            this.tagsNodeStack.push(i), h !== y && _ && (d[":@"] = this.buildAttributesMap(y, o, h)), this.addChild(i, d, o), i = d;
          }
          s = "", u = b;
        }
      }
    else
      s += t[u];
  return r.child;
};
function Xx(t, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const $x = function(t) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      const i = this.docTypeEntities[r];
      t = t.replace(i.regx, i.val);
    }
    for (let r in this.lastEntities) {
      const i = this.lastEntities[r];
      t = t.replace(i.regex, i.val);
    }
    if (this.options.htmlEntities)
      for (let r in this.htmlEntities) {
        const i = this.htmlEntities[r];
        t = t.replace(i.regex, i.val);
      }
    t = t.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return t;
};
function Qx(t, r, i, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function Kx(t, r, i) {
  const s = "*." + i;
  for (const o in t) {
    const u = t[o];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function Jx(t, r, i = ">") {
  let s, o = "";
  for (let u = r; u < t.length; u++) {
    let f = t[u];
    if (s)
      f === s && (s = "");
    else if (f === '"' || f === "'")
      s = f;
    else if (f === i[0])
      if (i[1]) {
        if (t[u + 1] === i[1])
          return {
            data: o,
            index: u
          };
      } else
        return {
          data: o,
          index: u
        };
    else f === "	" && (f = " ");
    o += f;
  }
}
function ka(t, r, i, s) {
  const o = t.indexOf(r, i);
  if (o === -1)
    throw new Error(s);
  return o + r.length - 1;
}
function jd(t, r, i, s = ">") {
  const o = Jx(t, r + 1, s);
  if (!o) return;
  let u = o.data;
  const f = o.index, p = u.search(/\s/);
  let h = u, m = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const y = h;
  if (i) {
    const _ = h.indexOf(":");
    _ !== -1 && (h = h.substr(_ + 1), m = h !== o.data.substr(_ + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: m,
    rawTagName: y
  };
}
function Wx(t, r, i) {
  const s = i;
  let o = 1;
  for (; i < t.length; i++)
    if (t[i] === "<")
      if (t[i + 1] === "/") {
        const u = ka(t, ">", i, `${r} is not closed`);
        if (t.substring(i + 2, u).trim() === r && (o--, o === 0))
          return {
            tagContent: t.substring(s, i),
            i: u
          };
        i = u;
      } else if (t[i + 1] === "?")
        i = ka(t, "?>", i + 1, "StopNode is not closed.");
      else if (t.substr(i + 1, 3) === "!--")
        i = ka(t, "-->", i + 3, "StopNode is not closed.");
      else if (t.substr(i + 1, 2) === "![")
        i = ka(t, "]]>", i, "StopNode is not closed.") - 2;
      else {
        const u = jd(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && o++, i = u.closeIndex);
      }
}
function Rd(t, r, i) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : Px(t, i);
  } else
    return px(t) ? t : "";
}
function eE(t, r) {
  return L0(t, r);
}
function L0(t, r, i) {
  let s;
  const o = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = tE(f);
    let h = "";
    if (i === void 0 ? h = p : h = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let m = L0(f[p], r, h);
        const y = rE(m, r);
        f[":@"] ? nE(m, f[":@"], h, r) : Object.keys(m).length === 1 && m[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? m = m[r.textNodeName] : Object.keys(m).length === 0 && (r.alwaysCreateTextNode ? m[r.textNodeName] = "" : m = ""), o[p] !== void 0 && o.hasOwnProperty(p) ? (Array.isArray(o[p]) || (o[p] = [o[p]]), o[p].push(m)) : r.isArray(p, h, y) ? o[p] = [m] : o[p] = m;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (o[r.textNodeName] = s) : s !== void 0 && (o[r.textNodeName] = s), o;
}
function tE(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function nE(t, r, i, s) {
  if (r) {
    const o = Object.keys(r), u = o.length;
    for (let f = 0; f < u; f++) {
      const p = o[f];
      s.isArray(p, i + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function rE(t, r) {
  const { textNodeName: i } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[i] || typeof t[i] == "boolean" || t[i] === 0));
}
class aE {
  constructor(r) {
    this.externalEntities = {}, this.options = wx(r);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(r, i) {
    if (typeof r != "string") if (r.toString)
      r = r.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (i) {
      i === !0 && (i = {});
      const u = z0(r, i);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new Hx(this.options);
    s.addExternalEntities(this.externalEntities);
    const o = s.parseXml(r);
    return this.options.preserveOrder || o === void 0 ? o : eE(o, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(r, i) {
    if (i.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (r.indexOf("&") !== -1 || r.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (i === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[r] = i;
  }
}
const iE = {
  validate: z0
}, sE = new aE({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function zd(t, r) {
  if (!(!r || !t || !r.properties))
    for (const i in r.properties) {
      if (!t.hasOwnProperty(i)) continue;
      const s = r.properties[i];
      let o = t[i];
      s.type === "array" && !Array.isArray(o) && (o = [o], t[i] = o), s.type === "object" && typeof o == "object" && o !== null ? zd(o, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(o) && o.forEach((u) => zd(u, s.items)), s.type === "string" && typeof o != "string" ? t[i] = String(o) : s.type === "array" && s.items?.type === "string" && Array.isArray(o) && (t[i] = o.map(String));
    }
}
function P0(t, r, i = {}) {
  const s = /```(?:\w+\n|\n)?([\s\S]*?)```/, o = t.match(s);
  let u = o ? o[1].trim() : t.trim();
  try {
    switch (r) {
      case "xml":
        if (i.schema) {
          const h = iE.validate(u);
          if (h !== !0)
            throw new Error(`Model response is not valid XML: ${h.err.msg}`);
        }
        let f = sE.parse(u);
        if (f.root)
          f = f.root;
        else if (f.response)
          return f.response;
        return i.schema && zd(f, i.schema), f;
      case "json":
        return JSON.parse(u);
      case "none":
        return u;
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (f) {
    if (r !== "none" && !i.schema) {
      const p = u.match(/<response>([\s\S]*)/);
      if (p) return p[1];
      const h = u.match(/"response":\s*"([\s\S]*)/);
      return h ? h[1].replace(/"\s*}\s*$/, "") : u;
    }
    throw console.error(`Error parsing response in format '${r}':`, f), console.error("Raw content received:", t), r === "xml" ? f.message.startsWith("Model response is not valid XML:") ? f : new Error(`Model response is not valid XML: ${f.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${f.message}`);
  }
}
function Lv(t, r) {
  const i = t.trim();
  switch (r) {
    case "xml":
      return `<response>${i}`;
    case "json":
      return `{
  "response": "${i.replace(/"/g, '\\"')}`;
    // Basic escaping
    case "none":
      return i;
    default:
      throw new Error(`Unsupported format specified: ${r}`);
  }
}
var To = { exports: {} }, Oo = { exports: {} }, Bn = {}, rn = {}, Pv;
function sn() {
  if (Pv) return rn;
  Pv = 1, rn.__esModule = !0, rn.extend = o, rn.indexOf = h, rn.escapeExpression = m, rn.isEmpty = y, rn.createFrame = _, rn.blockParams = b, rn.appendContextPath = g;
  var t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, i = /[&<>"'`=]/;
  function s(d) {
    return t[d];
  }
  function o(d) {
    for (var S = 1; S < arguments.length; S++)
      for (var x in arguments[S])
        Object.prototype.hasOwnProperty.call(arguments[S], x) && (d[x] = arguments[S][x]);
    return d;
  }
  var u = Object.prototype.toString;
  rn.toString = u;
  var f = function(S) {
    return typeof S == "function";
  };
  f(/x/) && (rn.isFunction = f = function(d) {
    return typeof d == "function" && u.call(d) === "[object Function]";
  }), rn.isFunction = f;
  var p = Array.isArray || function(d) {
    return d && typeof d == "object" ? u.call(d) === "[object Array]" : !1;
  };
  rn.isArray = p;
  function h(d, S) {
    for (var x = 0, T = d.length; x < T; x++)
      if (d[x] === S)
        return x;
    return -1;
  }
  function m(d) {
    if (typeof d != "string") {
      if (d && d.toHTML)
        return d.toHTML();
      if (d == null)
        return "";
      if (!d)
        return d + "";
      d = "" + d;
    }
    return i.test(d) ? d.replace(r, s) : d;
  }
  function y(d) {
    return !d && d !== 0 ? !0 : !!(p(d) && d.length === 0);
  }
  function _(d) {
    var S = o({}, d);
    return S._parent = d, S;
  }
  function b(d, S) {
    return d.path = S, d;
  }
  function g(d, S) {
    return (d ? d + "." : "") + S;
  }
  return rn;
}
var Do = { exports: {} }, Iv;
function qn() {
  return Iv || (Iv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(o, u) {
      var f = u && u.loc, p = void 0, h = void 0, m = void 0, y = void 0;
      f && (p = f.start.line, h = f.end.line, m = f.start.column, y = f.end.column, o += " - " + p + ":" + m);
      for (var _ = Error.prototype.constructor.call(this, o), b = 0; b < i.length; b++)
        this[i[b]] = _[i[b]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = p, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: m,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: y,
          enumerable: !0
        })) : (this.column = m, this.endColumn = y));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(Do, Do.exports)), Do.exports;
}
var Hs = {}, Mo = { exports: {} }, Bv;
function lE() {
  return Bv || (Bv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = sn();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(o, u) {
        var f = u.inverse, p = u.fn;
        if (o === !0)
          return p(this);
        if (o === !1 || o == null)
          return f(this);
        if (i.isArray(o))
          return o.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(o, u)) : f(this);
        if (u.data && u.ids) {
          var h = i.createFrame(u.data);
          h.contextPath = i.appendContextPath(u.data.contextPath, u.name), u = { data: h };
        }
        return p(o, u);
      });
    }, t.exports = r.default;
  })(Mo, Mo.exports)), Mo.exports;
}
var ko = { exports: {} }, Uv;
function oE() {
  return Uv || (Uv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = sn(), o = qn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var m = h.fn, y = h.inverse, _ = 0, b = "", g = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (g = s.createFrame(h.data));
        function S(C, N, M) {
          g && (g.key = C, g.index = N, g.first = N === 0, g.last = !!M, d && (g.contextPath = d + C)), b = b + m(p[C], {
            data: g,
            blockParams: s.blockParams([p[C], C], [d + C, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var x = p.length; _ < x; _++)
              _ in p && S(_, _, _ === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var T = [], A = p[Symbol.iterator](), D = A.next(); !D.done; D = A.next())
              T.push(D.value);
            p = T;
            for (var x = p.length; _ < x; _++)
              S(_, _, _ === p.length - 1);
          } else
            (function() {
              var C = void 0;
              Object.keys(p).forEach(function(N) {
                C !== void 0 && S(C, _ - 1), C = N, _++;
              }), C !== void 0 && S(C, _ - 1, !0);
            })();
        return _ === 0 && (b = y(this)), b;
      });
    }, t.exports = r.default;
  })(ko, ko.exports)), ko.exports;
}
var jo = { exports: {} }, Hv;
function uE() {
  return Hv || (Hv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = qn(), o = i(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(jo, jo.exports)), jo.exports;
}
var Ro = { exports: {} }, qv;
function cE() {
  return qv || (qv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = sn(), o = qn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("if", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(p) && (p = p.call(this)), !h.hash.includeZero && !p || s.isEmpty(p) ? h.inverse(this) : h.fn(this);
      }), f.registerHelper("unless", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, p, {
          fn: h.inverse,
          inverse: h.fn,
          hash: h.hash
        });
      });
    }, t.exports = r.default;
  })(Ro, Ro.exports)), Ro.exports;
}
var zo = { exports: {} }, Fv;
function fE() {
  return Fv || (Fv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var s = [void 0], o = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        o.hash.level != null ? f = o.hash.level : o.data && o.data.level != null && (f = o.data.level), s[0] = f, i.log.apply(i, s);
      });
    }, t.exports = r.default;
  })(zo, zo.exports)), zo.exports;
}
var Lo = { exports: {} }, Zv;
function dE() {
  return Zv || (Zv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, o, u) {
        return s && u.lookupProperty(s, o);
      });
    }, t.exports = r.default;
  })(Lo, Lo.exports)), Lo.exports;
}
var Po = { exports: {} }, Gv;
function hE() {
  return Gv || (Gv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = sn(), o = qn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("with", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(p) && (p = p.call(this));
        var m = h.fn;
        if (s.isEmpty(p))
          return h.inverse(this);
        var y = h.data;
        return h.data && h.ids && (y = s.createFrame(h.data), y.contextPath = s.appendContextPath(h.data.contextPath, h.ids[0])), m(p, {
          data: y,
          blockParams: s.blockParams([p], [y && y.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Po, Po.exports)), Po.exports;
}
var Vv;
function I0() {
  if (Vv) return Hs;
  Vv = 1, Hs.__esModule = !0, Hs.registerDefaultHelpers = S, Hs.moveHelperToHooks = x;
  function t(T) {
    return T && T.__esModule ? T : { default: T };
  }
  var r = lE(), i = t(r), s = oE(), o = t(s), u = uE(), f = t(u), p = cE(), h = t(p), m = fE(), y = t(m), _ = dE(), b = t(_), g = hE(), d = t(g);
  function S(T) {
    i.default(T), o.default(T), f.default(T), h.default(T), y.default(T), b.default(T), d.default(T);
  }
  function x(T, A, D) {
    T.helpers[A] && (T.hooks[A] = T.helpers[A], D || delete T.helpers[A]);
  }
  return Hs;
}
var Io = {}, Bo = { exports: {} }, Yv;
function pE() {
  return Yv || (Yv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = sn();
    r.default = function(s) {
      s.registerDecorator("inline", function(o, u, f, p) {
        var h = o;
        return u.partials || (u.partials = {}, h = function(m, y) {
          var _ = f.partials;
          f.partials = i.extend({}, _, u.partials);
          var b = o(m, y);
          return f.partials = _, b;
        }), u.partials[p.args[0]] = p.fn, h;
      });
    }, t.exports = r.default;
  })(Bo, Bo.exports)), Bo.exports;
}
var Xv;
function mE() {
  if (Xv) return Io;
  Xv = 1, Io.__esModule = !0, Io.registerDefaultDecorators = s;
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = pE(), i = t(r);
  function s(o) {
    i.default(o);
  }
  return Io;
}
var Uo = { exports: {} }, $v;
function B0() {
  return $v || ($v = 1, (function(t, r) {
    r.__esModule = !0;
    var i = sn(), s = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(u) {
        if (typeof u == "string") {
          var f = i.indexOf(s.methodMap, u.toLowerCase());
          f >= 0 ? u = f : u = parseInt(u, 10);
        }
        return u;
      },
      // Can be overridden in the host environment
      log: function(u) {
        if (u = s.lookupLevel(u), typeof console < "u" && s.lookupLevel(s.level) <= u) {
          var f = s.methodMap[u];
          console[f] || (f = "log");
          for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
            h[m - 1] = arguments[m];
          console[f].apply(console, h);
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Uo, Uo.exports)), Uo.exports;
}
var Ni = {}, Ho = {}, Qv;
function gE() {
  if (Qv) return Ho;
  Qv = 1, Ho.__esModule = !0, Ho.createNewLookupObject = r;
  var t = sn();
  function r() {
    for (var i = arguments.length, s = Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Ho;
}
var Kv;
function U0() {
  if (Kv) return Ni;
  Kv = 1, Ni.__esModule = !0, Ni.createProtoAccessControl = u, Ni.resultIsAllowed = f, Ni.resetLoggedProperties = m;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = gE(), i = B0(), s = t(i), o = /* @__PURE__ */ Object.create(null);
  function u(y) {
    var _ = /* @__PURE__ */ Object.create(null);
    _.constructor = !1, _.__defineGetter__ = !1, _.__defineSetter__ = !1, _.__lookupGetter__ = !1;
    var b = /* @__PURE__ */ Object.create(null);
    return b.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(b, y.allowedProtoProperties),
        defaultValue: y.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(_, y.allowedProtoMethods),
        defaultValue: y.allowProtoMethodsByDefault
      }
    };
  }
  function f(y, _, b) {
    return p(typeof y == "function" ? _.methods : _.properties, b);
  }
  function p(y, _) {
    return y.whitelist[_] !== void 0 ? y.whitelist[_] === !0 : y.defaultValue !== void 0 ? y.defaultValue : (h(_), !1);
  }
  function h(y) {
    o[y] !== !0 && (o[y] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + y + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function m() {
    Object.keys(o).forEach(function(y) {
      delete o[y];
    });
  }
  return Ni;
}
var Jv;
function rh() {
  if (Jv) return Bn;
  Jv = 1, Bn.__esModule = !0, Bn.HandlebarsEnvironment = d;
  function t(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var r = sn(), i = qn(), s = t(i), o = I0(), u = mE(), f = B0(), p = t(f), h = U0(), m = "4.7.8";
  Bn.VERSION = m;
  var y = 8;
  Bn.COMPILER_REVISION = y;
  var _ = 7;
  Bn.LAST_COMPATIBLE_COMPILER_REVISION = _;
  var b = {
    1: "<= 1.0.rc.2",
    // 1.0.rc.2 is actually rev2 but doesn't report it
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
  };
  Bn.REVISION_CHANGES = b;
  var g = "[object Object]";
  function d(x, T, A) {
    this.helpers = x || {}, this.partials = T || {}, this.decorators = A || {}, o.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(T, A) {
      if (r.toString.call(T) === g) {
        if (A)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, T);
      } else
        this.helpers[T] = A;
    },
    unregisterHelper: function(T) {
      delete this.helpers[T];
    },
    registerPartial: function(T, A) {
      if (r.toString.call(T) === g)
        r.extend(this.partials, T);
      else {
        if (typeof A > "u")
          throw new s.default('Attempting to register a partial called "' + T + '" as undefined');
        this.partials[T] = A;
      }
    },
    unregisterPartial: function(T) {
      delete this.partials[T];
    },
    registerDecorator: function(T, A) {
      if (r.toString.call(T) === g) {
        if (A)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, T);
      } else
        this.decorators[T] = A;
    },
    unregisterDecorator: function(T) {
      delete this.decorators[T];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      h.resetLoggedProperties();
    }
  };
  var S = p.default.log;
  return Bn.log = S, Bn.createFrame = r.createFrame, Bn.logger = p.default, Bn;
}
var qo = { exports: {} }, Wv;
function vE() {
  return Wv || (Wv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(s) {
      this.string = s;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, t.exports = r.default;
  })(qo, qo.exports)), qo.exports;
}
var yr = {}, Fo = {}, ey;
function yE() {
  if (ey) return Fo;
  ey = 1, Fo.__esModule = !0, Fo.wrapHelper = t;
  function t(r, i) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(u), r.apply(this, arguments);
    };
    return s;
  }
  return Fo;
}
var ty;
function bE() {
  if (ty) return yr;
  ty = 1, yr.__esModule = !0, yr.checkRevision = y, yr.template = _, yr.wrapProgram = b, yr.resolvePartial = g, yr.invokePartial = d, yr.noop = S;
  function t(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function r(C) {
    if (C && C.__esModule)
      return C;
    var N = {};
    if (C != null)
      for (var M in C)
        Object.prototype.hasOwnProperty.call(C, M) && (N[M] = C[M]);
    return N.default = C, N;
  }
  var i = sn(), s = r(i), o = qn(), u = t(o), f = rh(), p = I0(), h = yE(), m = U0();
  function y(C) {
    var N = C && C[0] || 1, M = f.COMPILER_REVISION;
    if (!(N >= f.LAST_COMPATIBLE_COMPILER_REVISION && N <= f.COMPILER_REVISION))
      if (N < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[M], H = f.REVISION_CHANGES[N];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + H + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + C[1] + ").");
  }
  function _(C, N) {
    if (!N)
      throw new u.default("No environment passed to template");
    if (!C || !C.main)
      throw new u.default("Unknown template object: " + typeof C);
    C.main.decorator = C.main_d, N.VM.checkRevision(C.compiler);
    var M = C.compiler && C.compiler[0] === 7;
    function k(P, Y, K) {
      K.hash && (Y = s.extend({}, Y, K.hash), K.ids && (K.ids[0] = !0)), P = N.VM.resolvePartial.call(this, P, Y, K);
      var ue = s.extend({}, K, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), me = N.VM.invokePartial.call(this, P, Y, ue);
      if (me == null && N.compile && (K.partials[K.name] = N.compile(P, C.compilerOptions, N), me = K.partials[K.name](Y, ue)), me != null) {
        if (K.indent) {
          for (var ve = me.split(`
`), B = 0, re = ve.length; B < re && !(!ve[B] && B + 1 === re); B++)
            ve[B] = K.indent + ve[B];
          me = ve.join(`
`);
        }
        return me;
      } else
        throw new u.default("The partial " + K.name + " could not be compiled when running in runtime-only mode");
    }
    var H = {
      strict: function(Y, K, ue) {
        if (!Y || !(K in Y))
          throw new u.default('"' + K + '" not defined in ' + Y, {
            loc: ue
          });
        return H.lookupProperty(Y, K);
      },
      lookupProperty: function(Y, K) {
        var ue = Y[K];
        if (ue == null || Object.prototype.hasOwnProperty.call(Y, K) || m.resultIsAllowed(ue, H.protoAccessControl, K))
          return ue;
      },
      lookup: function(Y, K) {
        for (var ue = Y.length, me = 0; me < ue; me++) {
          var ve = Y[me] && H.lookupProperty(Y[me], K);
          if (ve != null)
            return Y[me][K];
        }
      },
      lambda: function(Y, K) {
        return typeof Y == "function" ? Y.call(K) : Y;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: k,
      fn: function(Y) {
        var K = C[Y];
        return K.decorator = C[Y + "_d"], K;
      },
      programs: [],
      program: function(Y, K, ue, me, ve) {
        var B = this.programs[Y], re = this.fn(Y);
        return K || ve || me || ue ? B = b(this, Y, re, K, ue, me, ve) : B || (B = this.programs[Y] = b(this, Y, re)), B;
      },
      data: function(Y, K) {
        for (; Y && K--; )
          Y = Y._parent;
        return Y;
      },
      mergeIfNeeded: function(Y, K) {
        var ue = Y || K;
        return Y && K && Y !== K && (ue = s.extend({}, K, Y)), ue;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: N.VM.noop,
      compilerInfo: C.compiler
    };
    function X(P) {
      var Y = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], K = Y.data;
      X._setup(Y), !Y.partial && C.useData && (K = x(P, K));
      var ue = void 0, me = C.useBlockParams ? [] : void 0;
      C.useDepths && (Y.depths ? ue = P != Y.depths[0] ? [P].concat(Y.depths) : Y.depths : ue = [P]);
      function ve(B) {
        return "" + C.main(H, B, H.helpers, H.partials, K, me, ue);
      }
      return ve = T(C.main, ve, H, Y.depths || [], K, me), ve(P, Y);
    }
    return X.isTop = !0, X._setup = function(P) {
      if (P.partial)
        H.protoAccessControl = P.protoAccessControl, H.helpers = P.helpers, H.partials = P.partials, H.decorators = P.decorators, H.hooks = P.hooks;
      else {
        var Y = s.extend({}, N.helpers, P.helpers);
        A(Y, H), H.helpers = Y, C.usePartial && (H.partials = H.mergeIfNeeded(P.partials, N.partials)), (C.usePartial || C.useDecorators) && (H.decorators = s.extend({}, N.decorators, P.decorators)), H.hooks = {}, H.protoAccessControl = m.createProtoAccessControl(P);
        var K = P.allowCallsToHelperMissing || M;
        p.moveHelperToHooks(H, "helperMissing", K), p.moveHelperToHooks(H, "blockHelperMissing", K);
      }
    }, X._child = function(P, Y, K, ue) {
      if (C.useBlockParams && !K)
        throw new u.default("must pass block params");
      if (C.useDepths && !ue)
        throw new u.default("must pass parent depths");
      return b(H, P, C[P], Y, 0, K, ue);
    }, X;
  }
  function b(C, N, M, k, H, X, P) {
    function Y(K) {
      var ue = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], me = P;
      return P && K != P[0] && !(K === C.nullContext && P[0] === null) && (me = [K].concat(P)), M(C, K, C.helpers, C.partials, ue.data || k, X && [ue.blockParams].concat(X), me);
    }
    return Y = T(M, Y, C, P, k, X), Y.program = N, Y.depth = P ? P.length : 0, Y.blockParams = H || 0, Y;
  }
  function g(C, N, M) {
    return C ? !C.call && !M.name && (M.name = C, C = M.partials[C]) : M.name === "@partial-block" ? C = M.data["partial-block"] : C = M.partials[M.name], C;
  }
  function d(C, N, M) {
    var k = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var H = void 0;
    if (M.fn && M.fn !== S && (function() {
      M.data = f.createFrame(M.data);
      var X = M.fn;
      H = M.data["partial-block"] = function(Y) {
        var K = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return K.data = f.createFrame(K.data), K.data["partial-block"] = k, X(Y, K);
      }, X.partials && (M.partials = s.extend({}, M.partials, X.partials));
    })(), C === void 0 && H && (C = H), C === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (C instanceof Function)
      return C(N, M);
  }
  function S() {
    return "";
  }
  function x(C, N) {
    return (!N || !("root" in N)) && (N = N ? f.createFrame(N) : {}, N.root = C), N;
  }
  function T(C, N, M, k, H, X) {
    if (C.decorator) {
      var P = {};
      N = C.decorator(N, P, M, k && k[0], H, X, k), s.extend(N, P);
    }
    return N;
  }
  function A(C, N) {
    Object.keys(C).forEach(function(M) {
      var k = C[M];
      C[M] = D(k, N);
    });
  }
  function D(C, N) {
    var M = N.lookupProperty;
    return h.wrapHelper(C, function(k) {
      return s.extend({ lookupProperty: M }, k);
    });
  }
  return yr;
}
var Zo = { exports: {} }, ny;
function H0() {
  return ny || (ny = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var s = globalThis.Handlebars;
      i.noConflict = function() {
        return globalThis.Handlebars === i && (globalThis.Handlebars = s), i;
      };
    }, t.exports = r.default;
  })(Zo, Zo.exports)), Zo.exports;
}
var ry;
function _E() {
  return ry || (ry = 1, (function(t, r) {
    r.__esModule = !0;
    function i(A) {
      return A && A.__esModule ? A : { default: A };
    }
    function s(A) {
      if (A && A.__esModule)
        return A;
      var D = {};
      if (A != null)
        for (var C in A)
          Object.prototype.hasOwnProperty.call(A, C) && (D[C] = A[C]);
      return D.default = A, D;
    }
    var o = rh(), u = s(o), f = vE(), p = i(f), h = qn(), m = i(h), y = sn(), _ = s(y), b = bE(), g = s(b), d = H0(), S = i(d);
    function x() {
      var A = new u.HandlebarsEnvironment();
      return _.extend(A, u), A.SafeString = p.default, A.Exception = m.default, A.Utils = _, A.escapeExpression = _.escapeExpression, A.VM = g, A.template = function(D) {
        return g.template(D, A);
      }, A;
    }
    var T = x();
    T.create = x, S.default(T), T.default = T, r.default = T, t.exports = r.default;
  })(Oo, Oo.exports)), Oo.exports;
}
var Go = { exports: {} }, ay;
function q0() {
  return ay || (ay = 1, (function(t, r) {
    r.__esModule = !0;
    var i = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(o) {
          return o.type === "SubExpression" || (o.type === "MustacheStatement" || o.type === "BlockStatement") && !!(o.params && o.params.length || o.hash);
        },
        scopedId: function(o) {
          return /^\.|this\b/.test(o.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(o) {
          return o.parts.length === 1 && !i.helpers.scopedId(o) && !o.depth;
        }
      }
    };
    r.default = i, t.exports = r.default;
  })(Go, Go.exports)), Go.exports;
}
var Ti = {}, Vo = { exports: {} }, iy;
function SE() {
  return iy || (iy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(p, h, m, y, _, b, g) {
          var d = b.length - 1;
          switch (_) {
            case 1:
              return b[d - 1];
            case 2:
              this.$ = y.prepareProgram(b[d]);
              break;
            case 3:
              this.$ = b[d];
              break;
            case 4:
              this.$ = b[d];
              break;
            case 5:
              this.$ = b[d];
              break;
            case 6:
              this.$ = b[d];
              break;
            case 7:
              this.$ = b[d];
              break;
            case 8:
              this.$ = b[d];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: y.stripComment(b[d]),
                strip: y.stripFlags(b[d], b[d]),
                loc: y.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: b[d],
                value: b[d],
                loc: y.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = y.prepareRawBlock(b[d - 2], b[d - 1], b[d], this._$);
              break;
            case 12:
              this.$ = { path: b[d - 3], params: b[d - 2], hash: b[d - 1] };
              break;
            case 13:
              this.$ = y.prepareBlock(b[d - 3], b[d - 2], b[d - 1], b[d], !1, this._$);
              break;
            case 14:
              this.$ = y.prepareBlock(b[d - 3], b[d - 2], b[d - 1], b[d], !0, this._$);
              break;
            case 15:
              this.$ = { open: b[d - 5], path: b[d - 4], params: b[d - 3], hash: b[d - 2], blockParams: b[d - 1], strip: y.stripFlags(b[d - 5], b[d]) };
              break;
            case 16:
              this.$ = { path: b[d - 4], params: b[d - 3], hash: b[d - 2], blockParams: b[d - 1], strip: y.stripFlags(b[d - 5], b[d]) };
              break;
            case 17:
              this.$ = { path: b[d - 4], params: b[d - 3], hash: b[d - 2], blockParams: b[d - 1], strip: y.stripFlags(b[d - 5], b[d]) };
              break;
            case 18:
              this.$ = { strip: y.stripFlags(b[d - 1], b[d - 1]), program: b[d] };
              break;
            case 19:
              var S = y.prepareBlock(b[d - 2], b[d - 1], b[d], b[d], !1, this._$), x = y.prepareProgram([S], b[d - 1].loc);
              x.chained = !0, this.$ = { strip: b[d - 2].strip, program: x, chain: !0 };
              break;
            case 20:
              this.$ = b[d];
              break;
            case 21:
              this.$ = { path: b[d - 1], strip: y.stripFlags(b[d - 2], b[d]) };
              break;
            case 22:
              this.$ = y.prepareMustache(b[d - 3], b[d - 2], b[d - 1], b[d - 4], y.stripFlags(b[d - 4], b[d]), this._$);
              break;
            case 23:
              this.$ = y.prepareMustache(b[d - 3], b[d - 2], b[d - 1], b[d - 4], y.stripFlags(b[d - 4], b[d]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: b[d - 3],
                params: b[d - 2],
                hash: b[d - 1],
                indent: "",
                strip: y.stripFlags(b[d - 4], b[d]),
                loc: y.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = y.preparePartialBlock(b[d - 2], b[d - 1], b[d], this._$);
              break;
            case 26:
              this.$ = { path: b[d - 3], params: b[d - 2], hash: b[d - 1], strip: y.stripFlags(b[d - 4], b[d]) };
              break;
            case 27:
              this.$ = b[d];
              break;
            case 28:
              this.$ = b[d];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: b[d - 3],
                params: b[d - 2],
                hash: b[d - 1],
                loc: y.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: b[d], loc: y.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: y.id(b[d - 2]), value: b[d], loc: y.locInfo(this._$) };
              break;
            case 32:
              this.$ = y.id(b[d - 1]);
              break;
            case 33:
              this.$ = b[d];
              break;
            case 34:
              this.$ = b[d];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: b[d], original: b[d], loc: y.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(b[d]), original: Number(b[d]), loc: y.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: b[d] === "true", original: b[d] === "true", loc: y.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: y.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: y.locInfo(this._$) };
              break;
            case 40:
              this.$ = b[d];
              break;
            case 41:
              this.$ = b[d];
              break;
            case 42:
              this.$ = y.preparePath(!0, b[d], this._$);
              break;
            case 43:
              this.$ = y.preparePath(!1, b[d], this._$);
              break;
            case 44:
              b[d - 2].push({ part: y.id(b[d]), original: b[d], separator: b[d - 1] }), this.$ = b[d - 2];
              break;
            case 45:
              this.$ = [{ part: y.id(b[d]), original: b[d] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              b[d - 1].push(b[d]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              b[d - 1].push(b[d]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              b[d - 1].push(b[d]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              b[d - 1].push(b[d]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              b[d - 1].push(b[d]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              b[d - 1].push(b[d]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              b[d - 1].push(b[d]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              b[d - 1].push(b[d]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              b[d - 1].push(b[d]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              b[d - 1].push(b[d]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              b[d - 1].push(b[d]);
              break;
            case 98:
              this.$ = [b[d]];
              break;
            case 99:
              b[d - 1].push(b[d]);
              break;
            case 100:
              this.$ = [b[d]];
              break;
            case 101:
              b[d - 1].push(b[d]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(p, h) {
          throw new Error(p);
        },
        parse: function(p) {
          var h = this, m = [0], y = [null], _ = [], b = this.table, g = "", d = 0, S = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var x = this.lexer.yylloc;
          _.push(x);
          var T = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function A() {
            var ue;
            return ue = h.lexer.lex() || 1, typeof ue != "number" && (ue = h.symbols_[ue] || ue), ue;
          }
          for (var D, C, N, M, k = {}, H, X, P, Y; ; ) {
            if (C = m[m.length - 1], this.defaultActions[C] ? N = this.defaultActions[C] : ((D === null || typeof D > "u") && (D = A()), N = b[C] && b[C][D]), typeof N > "u" || !N.length || !N[0]) {
              var K = "";
              {
                Y = [];
                for (H in b[C]) this.terminals_[H] && H > 2 && Y.push("'" + this.terminals_[H] + "'");
                this.lexer.showPosition ? K = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + Y.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : K = "Parse error on line " + (d + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError(K, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: x, expected: Y });
              }
            }
            if (N[0] instanceof Array && N.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + C + ", token: " + D);
            switch (N[0]) {
              case 1:
                m.push(D), y.push(this.lexer.yytext), _.push(this.lexer.yylloc), m.push(N[1]), D = null, S = this.lexer.yyleng, g = this.lexer.yytext, d = this.lexer.yylineno, x = this.lexer.yylloc;
                break;
              case 2:
                if (X = this.productions_[N[1]][1], k.$ = y[y.length - X], k._$ = { first_line: _[_.length - (X || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - (X || 1)].first_column, last_column: _[_.length - 1].last_column }, T && (k._$.range = [_[_.length - (X || 1)].range[0], _[_.length - 1].range[1]]), M = this.performAction.call(k, g, S, d, this.yy, N[1], y, _), typeof M < "u")
                  return M;
                X && (m = m.slice(0, -1 * X * 2), y = y.slice(0, -1 * X), _ = _.slice(0, -1 * X)), m.push(this.productions_[N[1]][0]), y.push(k.$), _.push(k._$), P = b[m[m.length - 2]][m[m.length - 1]], m.push(P);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, o = (function() {
        var f = {
          EOF: 1,
          parseError: function(h, m) {
            if (this.yy.parser)
              this.yy.parser.parseError(h, m);
            else
              throw new Error(h);
          },
          setInput: function(h) {
            return this._input = h, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var h = this._input[0];
            this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
            var m = h.match(/(?:\r\n?|\n).*/g);
            return m ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
          },
          unput: function(h) {
            var m = h.length, y = h.split(/(?:\r\n?|\n)/g);
            this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - m - 1), this.offset -= m;
            var _ = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
            var b = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: y ? (y.length === _.length ? this.yylloc.first_column : 0) + _[_.length - y.length].length - y[0].length : this.yylloc.first_column - m
            }, this.options.ranges && (this.yylloc.range = [b[0], b[0] + this.yyleng - m]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(h) {
            this.unput(this.match.slice(h));
          },
          pastInput: function() {
            var h = this.matched.substr(0, this.matched.length - this.match.length);
            return (h.length > 20 ? "..." : "") + h.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var h = this.match;
            return h.length < 20 && (h += this._input.substr(0, 20 - h.length)), (h.substr(0, 20) + (h.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var h = this.pastInput(), m = new Array(h.length + 1).join("-");
            return h + this.upcomingInput() + `
` + m + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var h, m, y, _, b;
            this._more || (this.yytext = "", this.match = "");
            for (var g = this._currentRules(), d = 0; d < g.length && (y = this._input.match(this.rules[g[d]]), !(y && (!m || y[0].length > m[0].length) && (m = y, _ = d, !this.options.flex))); d++)
              ;
            return m ? (b = m[0].match(/(?:\r\n?|\n).*/g), b && (this.yylineno += b.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: b ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + m[0].length
            }, this.yytext += m[0], this.match += m[0], this.matches = m, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(m[0].length), this.matched += m[0], h = this.performAction.call(this, this.yy, this, g[_], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var h = this.next();
            return typeof h < "u" ? h : this.lex();
          },
          begin: function(h) {
            this.conditionStack.push(h);
          },
          popState: function() {
            return this.conditionStack.pop();
          },
          _currentRules: function() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function(h) {
            this.begin(h);
          }
        };
        return f.options = {}, f.performAction = function(h, m, y, _) {
          function b(g, d) {
            return m.yytext = m.yytext.substring(g, m.yyleng - d + g);
          }
          switch (y) {
            case 0:
              if (m.yytext.slice(-2) === "\\\\" ? (b(0, 1), this.begin("mu")) : m.yytext.slice(-1) === "\\" ? (b(0, 1), this.begin("emu")) : this.begin("mu"), m.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (b(5, 9), "END_RAW_BLOCK");
            case 5:
              return 15;
            case 6:
              return this.popState(), 14;
            case 7:
              return 65;
            case 8:
              return 68;
            case 9:
              return 19;
            case 10:
              return this.popState(), this.begin("raw"), 23;
            case 11:
              return 55;
            case 12:
              return 60;
            case 13:
              return 29;
            case 14:
              return 47;
            case 15:
              return this.popState(), 44;
            case 16:
              return this.popState(), 44;
            case 17:
              return 34;
            case 18:
              return 39;
            case 19:
              return 51;
            case 20:
              return 48;
            case 21:
              this.unput(m.yytext), this.popState(), this.begin("com");
              break;
            case 22:
              return this.popState(), 14;
            case 23:
              return 48;
            case 24:
              return 73;
            case 25:
              return 72;
            case 26:
              return 72;
            case 27:
              return 87;
            case 28:
              break;
            case 29:
              return this.popState(), 54;
            case 30:
              return this.popState(), 33;
            case 31:
              return m.yytext = b(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return m.yytext = b(1, 2).replace(/\\'/g, "'"), 80;
            case 33:
              return 85;
            case 34:
              return 82;
            case 35:
              return 82;
            case 36:
              return 83;
            case 37:
              return 84;
            case 38:
              return 81;
            case 39:
              return 75;
            case 40:
              return 77;
            case 41:
              return 72;
            case 42:
              return m.yytext = m.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, f.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], f.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, f;
      })();
      s.lexer = o;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    r.default = i, t.exports = r.default;
  })(Vo, Vo.exports)), Vo.exports;
}
var Yo = { exports: {} }, Xo = { exports: {} }, sy;
function F0() {
  return sy || (sy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(m) {
      return m && m.__esModule ? m : { default: m };
    }
    var s = qn(), o = i(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(y, _) {
        var b = this.accept(y[_]);
        if (this.mutating) {
          if (b && !u.prototype[b.type])
            throw new o.default('Unexpected node type "' + b.type + '" found when accepting ' + _ + " on " + y.type);
          y[_] = b;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(y, _) {
        if (this.acceptKey(y, _), !y[_])
          throw new o.default(y.type + " requires " + _);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(y) {
        for (var _ = 0, b = y.length; _ < b; _++)
          this.acceptKey(y, _), y[_] || (y.splice(_, 1), _--, b--);
      },
      accept: function(y) {
        if (y) {
          if (!this[y.type])
            throw new o.default("Unknown type: " + y.type, y);
          this.current && this.parents.unshift(this.current), this.current = y;
          var _ = this[y.type](y);
          if (this.current = this.parents.shift(), !this.mutating || _)
            return _;
          if (_ !== !1)
            return y;
        }
      },
      Program: function(y) {
        this.acceptArray(y.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: p,
      DecoratorBlock: p,
      PartialStatement: h,
      PartialBlockStatement: function(y) {
        h.call(this, y), this.acceptKey(y, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: f,
      PathExpression: function() {
      },
      StringLiteral: function() {
      },
      NumberLiteral: function() {
      },
      BooleanLiteral: function() {
      },
      UndefinedLiteral: function() {
      },
      NullLiteral: function() {
      },
      Hash: function(y) {
        this.acceptArray(y.pairs);
      },
      HashPair: function(y) {
        this.acceptRequired(y, "value");
      }
    };
    function f(m) {
      this.acceptRequired(m, "path"), this.acceptArray(m.params), this.acceptKey(m, "hash");
    }
    function p(m) {
      f.call(this, m), this.acceptKey(m, "program"), this.acceptKey(m, "inverse");
    }
    function h(m) {
      this.acceptRequired(m, "name"), this.acceptArray(m.params), this.acceptKey(m, "hash");
    }
    r.default = u, t.exports = r.default;
  })(Xo, Xo.exports)), Xo.exports;
}
var ly;
function xE() {
  return ly || (ly = 1, (function(t, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = F0(), o = i(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new o.default(), u.prototype.Program = function(y) {
      var _ = !this.options.ignoreStandalone, b = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var g = y.body, d = 0, S = g.length; d < S; d++) {
        var x = g[d], T = this.accept(x);
        if (T) {
          var A = f(g, d, b), D = p(g, d, b), C = T.openStandalone && A, N = T.closeStandalone && D, M = T.inlineStandalone && A && D;
          T.close && h(g, d, !0), T.open && m(g, d, !0), _ && M && (h(g, d), m(g, d) && x.type === "PartialStatement" && (x.indent = /([ \t]+$)/.exec(g[d - 1].original)[1])), _ && C && (h((x.program || x.inverse).body), m(g, d)), _ && N && (h(g, d), m((x.inverse || x.program).body));
        }
      }
      return y;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(y) {
      this.accept(y.program), this.accept(y.inverse);
      var _ = y.program || y.inverse, b = y.program && y.inverse, g = b, d = b;
      if (b && b.chained)
        for (g = b.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var S = {
        open: y.openStrip.open,
        close: y.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(_.body),
        closeStandalone: f((g || _).body)
      };
      if (y.openStrip.close && h(_.body, null, !0), b) {
        var x = y.inverseStrip;
        x.open && m(_.body, null, !0), x.close && h(g.body, null, !0), y.closeStrip.open && m(d.body, null, !0), !this.options.ignoreStandalone && f(_.body) && p(g.body) && (m(_.body), h(g.body));
      } else y.closeStrip.open && m(_.body, null, !0);
      return S;
    }, u.prototype.Decorator = u.prototype.MustacheStatement = function(y) {
      return y.strip;
    }, u.prototype.PartialStatement = u.prototype.CommentStatement = function(y) {
      var _ = y.strip || {};
      return {
        inlineStandalone: !0,
        open: _.open,
        close: _.close
      };
    };
    function f(y, _, b) {
      _ === void 0 && (_ = y.length);
      var g = y[_ - 1], d = y[_ - 2];
      if (!g)
        return b;
      if (g.type === "ContentStatement")
        return (d || !b ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(g.original);
    }
    function p(y, _, b) {
      _ === void 0 && (_ = -1);
      var g = y[_ + 1], d = y[_ + 2];
      if (!g)
        return b;
      if (g.type === "ContentStatement")
        return (d || !b ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(g.original);
    }
    function h(y, _, b) {
      var g = y[_ == null ? 0 : _ + 1];
      if (!(!g || g.type !== "ContentStatement" || !b && g.rightStripped)) {
        var d = g.value;
        g.value = g.value.replace(b ? /^\s+/ : /^[ \t]*\r?\n?/, ""), g.rightStripped = g.value !== d;
      }
    }
    function m(y, _, b) {
      var g = y[_ == null ? y.length - 1 : _ - 1];
      if (!(!g || g.type !== "ContentStatement" || !b && g.leftStripped)) {
        var d = g.value;
        return g.value = g.value.replace(b ? /\s+$/ : /[ \t]+$/, ""), g.leftStripped = g.value !== d, g.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Yo, Yo.exports)), Yo.exports;
}
var mn = {}, oy;
function EE() {
  if (oy) return mn;
  oy = 1, mn.__esModule = !0, mn.SourceLocation = o, mn.id = u, mn.stripFlags = f, mn.stripComment = p, mn.preparePath = h, mn.prepareMustache = m, mn.prepareRawBlock = y, mn.prepareBlock = _, mn.prepareProgram = b, mn.preparePartialBlock = g;
  function t(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var r = qn(), i = t(r);
  function s(d, S) {
    if (S = S.path ? S.path.original : S, d.path.original !== S) {
      var x = { loc: d.path.loc };
      throw new i.default(d.path.original + " doesn't match " + S, x);
    }
  }
  function o(d, S) {
    this.source = d, this.start = {
      line: S.first_line,
      column: S.first_column
    }, this.end = {
      line: S.last_line,
      column: S.last_column
    };
  }
  function u(d) {
    return /^\[.*\]$/.test(d) ? d.substring(1, d.length - 1) : d;
  }
  function f(d, S) {
    return {
      open: d.charAt(2) === "~",
      close: S.charAt(S.length - 3) === "~"
    };
  }
  function p(d) {
    return d.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function h(d, S, x) {
    x = this.locInfo(x);
    for (var T = d ? "@" : "", A = [], D = 0, C = 0, N = S.length; C < N; C++) {
      var M = S[C].part, k = S[C].original !== M;
      if (T += (S[C].separator || "") + M, !k && (M === ".." || M === "." || M === "this")) {
        if (A.length > 0)
          throw new i.default("Invalid path: " + T, { loc: x });
        M === ".." && D++;
      } else
        A.push(M);
    }
    return {
      type: "PathExpression",
      data: d,
      depth: D,
      parts: A,
      original: T,
      loc: x
    };
  }
  function m(d, S, x, T, A, D) {
    var C = T.charAt(3) || T.charAt(2), N = C !== "{" && C !== "&", M = /\*/.test(T);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: d,
      params: S,
      hash: x,
      escaped: N,
      strip: A,
      loc: this.locInfo(D)
    };
  }
  function y(d, S, x, T) {
    s(d, x), T = this.locInfo(T);
    var A = {
      type: "Program",
      body: S,
      strip: {},
      loc: T
    };
    return {
      type: "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: A,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: T
    };
  }
  function _(d, S, x, T, A, D) {
    T && T.path && s(d, T);
    var C = /\*/.test(d.open);
    S.blockParams = d.blockParams;
    var N = void 0, M = void 0;
    if (x) {
      if (C)
        throw new i.default("Unexpected inverse block on decorator", x);
      x.chain && (x.program.body[0].closeStrip = T.strip), M = x.strip, N = x.program;
    }
    return A && (A = N, N = S, S = A), {
      type: C ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: S,
      inverse: N,
      openStrip: d.strip,
      inverseStrip: M,
      closeStrip: T && T.strip,
      loc: this.locInfo(D)
    };
  }
  function b(d, S) {
    if (!S && d.length) {
      var x = d[0].loc, T = d[d.length - 1].loc;
      x && T && (S = {
        source: x.source,
        start: {
          line: x.start.line,
          column: x.start.column
        },
        end: {
          line: T.end.line,
          column: T.end.column
        }
      });
    }
    return {
      type: "Program",
      body: d,
      strip: {},
      loc: S
    };
  }
  function g(d, S, x, T) {
    return s(d, x), {
      type: "PartialBlockStatement",
      name: d.path,
      params: d.params,
      hash: d.hash,
      program: S,
      openStrip: d.strip,
      closeStrip: x && x.strip,
      loc: this.locInfo(T)
    };
  }
  return mn;
}
var uy;
function CE() {
  if (uy) return Ti;
  uy = 1, Ti.__esModule = !0, Ti.parseWithoutProcessing = y, Ti.parse = _;
  function t(b) {
    if (b && b.__esModule)
      return b;
    var g = {};
    if (b != null)
      for (var d in b)
        Object.prototype.hasOwnProperty.call(b, d) && (g[d] = b[d]);
    return g.default = b, g;
  }
  function r(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var i = SE(), s = r(i), o = xE(), u = r(o), f = EE(), p = t(f), h = sn();
  Ti.parser = s.default;
  var m = {};
  h.extend(m, p);
  function y(b, g) {
    if (b.type === "Program")
      return b;
    s.default.yy = m, m.locInfo = function(S) {
      return new m.SourceLocation(g && g.srcName, S);
    };
    var d = s.default.parse(b);
    return d;
  }
  function _(b, g) {
    var d = y(b, g), S = new u.default(g);
    return S.accept(d);
  }
  return Ti;
}
var Oi = {}, cy;
function wE() {
  if (cy) return Oi;
  cy = 1, Oi.__esModule = !0, Oi.Compiler = p, Oi.precompile = h, Oi.compile = m;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = qn(), i = t(r), s = sn(), o = q0(), u = t(o), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(g) {
      var d = this.opcodes.length;
      if (g.opcodes.length !== d)
        return !1;
      for (var S = 0; S < d; S++) {
        var x = this.opcodes[S], T = g.opcodes[S];
        if (x.opcode !== T.opcode || !y(x.args, T.args))
          return !1;
      }
      d = this.children.length;
      for (var S = 0; S < d; S++)
        if (!this.children[S].equals(g.children[S]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(g, d) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = d, this.stringParams = d.stringParams, this.trackIds = d.trackIds, d.blockParams = d.blockParams || [], d.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, d.knownHelpers), this.accept(g);
    },
    compileProgram: function(g) {
      var d = new this.compiler(), S = d.compile(g, this.options), x = this.guid++;
      return this.usePartial = this.usePartial || S.usePartial, this.children[x] = S, this.useDepths = this.useDepths || S.useDepths, x;
    },
    accept: function(g) {
      if (!this[g.type])
        throw new i.default("Unknown type: " + g.type, g);
      this.sourceNode.unshift(g);
      var d = this[g.type](g);
      return this.sourceNode.shift(), d;
    },
    Program: function(g) {
      this.options.blockParams.unshift(g.blockParams);
      for (var d = g.body, S = d.length, x = 0; x < S; x++)
        this.accept(d[x]);
      return this.options.blockParams.shift(), this.isSimple = S === 1, this.blockParams = g.blockParams ? g.blockParams.length : 0, this;
    },
    BlockStatement: function(g) {
      _(g);
      var d = g.program, S = g.inverse;
      d = d && this.compileProgram(d), S = S && this.compileProgram(S);
      var x = this.classifySexpr(g);
      x === "helper" ? this.helperSexpr(g, d, S) : x === "simple" ? (this.simpleSexpr(g), this.opcode("pushProgram", d), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("blockValue", g.path.original)) : (this.ambiguousSexpr(g, d, S), this.opcode("pushProgram", d), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(g) {
      var d = g.program && this.compileProgram(g.program), S = this.setupFullMustacheParams(g, d, void 0), x = g.path;
      this.useDecorators = !0, this.opcode("registerDecorator", S.length, x.original);
    },
    PartialStatement: function(g) {
      this.usePartial = !0;
      var d = g.program;
      d && (d = this.compileProgram(g.program));
      var S = g.params;
      if (S.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + S.length, g);
      S.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : S.push({ type: "PathExpression", parts: [], depth: 0 }));
      var x = g.name.original, T = g.name.type === "SubExpression";
      T && this.accept(g.name), this.setupFullMustacheParams(g, d, void 0, !0);
      var A = g.indent || "";
      this.options.preventIndent && A && (this.opcode("appendContent", A), A = ""), this.opcode("invokePartial", T, x, A), this.opcode("append");
    },
    PartialBlockStatement: function(g) {
      this.PartialStatement(g);
    },
    MustacheStatement: function(g) {
      this.SubExpression(g), g.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(g) {
      this.DecoratorBlock(g);
    },
    ContentStatement: function(g) {
      g.value && this.opcode("appendContent", g.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(g) {
      _(g);
      var d = this.classifySexpr(g);
      d === "simple" ? this.simpleSexpr(g) : d === "helper" ? this.helperSexpr(g) : this.ambiguousSexpr(g);
    },
    ambiguousSexpr: function(g, d, S) {
      var x = g.path, T = x.parts[0], A = d != null || S != null;
      this.opcode("getContext", x.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", S), x.strict = !0, this.accept(x), this.opcode("invokeAmbiguous", T, A);
    },
    simpleSexpr: function(g) {
      var d = g.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(g, d, S) {
      var x = this.setupFullMustacheParams(g, d, S), T = g.path, A = T.parts[0];
      if (this.options.knownHelpers[A])
        this.opcode("invokeKnownHelper", x.length, A);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + A, g);
        T.strict = !0, T.falsy = !0, this.accept(T), this.opcode("invokeHelper", x.length, T.original, u.default.helpers.simpleId(T));
      }
    },
    PathExpression: function(g) {
      this.addDepth(g.depth), this.opcode("getContext", g.depth);
      var d = g.parts[0], S = u.default.helpers.scopedId(g), x = !g.depth && !S && this.blockParamIndex(d);
      x ? this.opcode("lookupBlockParam", x, g.parts) : d ? g.data ? (this.options.data = !0, this.opcode("lookupData", g.depth, g.parts, g.strict)) : this.opcode("lookupOnContext", g.parts, g.falsy, g.strict, S) : this.opcode("pushContext");
    },
    StringLiteral: function(g) {
      this.opcode("pushString", g.value);
    },
    NumberLiteral: function(g) {
      this.opcode("pushLiteral", g.value);
    },
    BooleanLiteral: function(g) {
      this.opcode("pushLiteral", g.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(g) {
      var d = g.pairs, S = 0, x = d.length;
      for (this.opcode("pushHash"); S < x; S++)
        this.pushParam(d[S].value);
      for (; S--; )
        this.opcode("assignToHash", d[S].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(g) {
      this.opcodes.push({
        opcode: g,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(g) {
      g && (this.useDepths = !0);
    },
    classifySexpr: function(g) {
      var d = u.default.helpers.simpleId(g.path), S = d && !!this.blockParamIndex(g.path.parts[0]), x = !S && u.default.helpers.helperExpression(g), T = !S && (x || d);
      if (T && !x) {
        var A = g.path.parts[0], D = this.options;
        D.knownHelpers[A] ? x = !0 : D.knownHelpersOnly && (T = !1);
      }
      return x ? "helper" : T ? "ambiguous" : "simple";
    },
    pushParams: function(g) {
      for (var d = 0, S = g.length; d < S; d++)
        this.pushParam(g[d]);
    },
    pushParam: function(g) {
      var d = g.value != null ? g.value : g.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), g.depth && this.addDepth(g.depth), this.opcode("getContext", g.depth || 0), this.opcode("pushStringParam", d, g.type), g.type === "SubExpression" && this.accept(g);
      else {
        if (this.trackIds) {
          var S = void 0;
          if (g.parts && !u.default.helpers.scopedId(g) && !g.depth && (S = this.blockParamIndex(g.parts[0])), S) {
            var x = g.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", S, x);
          } else
            d = g.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", g.type, d);
        }
        this.accept(g);
      }
    },
    setupFullMustacheParams: function(g, d, S, x) {
      var T = g.params;
      return this.pushParams(T), this.opcode("pushProgram", d), this.opcode("pushProgram", S), g.hash ? this.accept(g.hash) : this.opcode("emptyHash", x), T;
    },
    blockParamIndex: function(g) {
      for (var d = 0, S = this.options.blockParams.length; d < S; d++) {
        var x = this.options.blockParams[d], T = x && s.indexOf(x, g);
        if (x && T >= 0)
          return [d, T];
      }
    }
  };
  function h(b, g, d) {
    if (b == null || typeof b != "string" && b.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + b);
    g = g || {}, "data" in g || (g.data = !0), g.compat && (g.useDepths = !0);
    var S = d.parse(b, g), x = new d.Compiler().compile(S, g);
    return new d.JavaScriptCompiler().compile(x, g);
  }
  function m(b, g, d) {
    if (g === void 0 && (g = {}), b == null || typeof b != "string" && b.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + b);
    g = s.extend({}, g), "data" in g || (g.data = !0), g.compat && (g.useDepths = !0);
    var S = void 0;
    function x() {
      var A = d.parse(b, g), D = new d.Compiler().compile(A, g), C = new d.JavaScriptCompiler().compile(D, g, void 0, !0);
      return d.template(C);
    }
    function T(A, D) {
      return S || (S = x()), S.call(this, A, D);
    }
    return T._setup = function(A) {
      return S || (S = x()), S._setup(A);
    }, T._child = function(A, D, C, N) {
      return S || (S = x()), S._child(A, D, C, N);
    }, T;
  }
  function y(b, g) {
    if (b === g)
      return !0;
    if (s.isArray(b) && s.isArray(g) && b.length === g.length) {
      for (var d = 0; d < b.length; d++)
        if (!y(b[d], g[d]))
          return !1;
      return !0;
    }
  }
  function _(b) {
    if (!b.path.parts) {
      var g = b.path;
      b.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [g.original + ""],
        original: g.original + "",
        loc: g.loc
      };
    }
  }
  return Oi;
}
var $o = { exports: {} }, Qo = { exports: {} }, qs = {}, od = {}, Ko = {}, Jo = {}, fy;
function AE() {
  if (fy) return Jo;
  fy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Jo.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Jo.decode = function(r) {
    var i = 65, s = 90, o = 97, u = 122, f = 48, p = 57, h = 43, m = 47, y = 26, _ = 52;
    return i <= r && r <= s ? r - i : o <= r && r <= u ? r - o + y : f <= r && r <= p ? r - f + _ : r == h ? 62 : r == m ? 63 : -1;
  }, Jo;
}
var dy;
function Z0() {
  if (dy) return Ko;
  dy = 1;
  var t = AE(), r = 5, i = 1 << r, s = i - 1, o = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var h = (p & 1) === 1, m = p >> 1;
    return h ? -m : m;
  }
  return Ko.encode = function(h) {
    var m = "", y, _ = u(h);
    do
      y = _ & s, _ >>>= r, _ > 0 && (y |= o), m += t.encode(y);
    while (_ > 0);
    return m;
  }, Ko.decode = function(h, m, y) {
    var _ = h.length, b = 0, g = 0, d, S;
    do {
      if (m >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = t.decode(h.charCodeAt(m++)), S === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(m - 1));
      d = !!(S & o), S &= s, b = b + (S << g), g += r;
    } while (d);
    y.value = f(b), y.rest = m;
  }, Ko;
}
var ud = {}, hy;
function ll() {
  return hy || (hy = 1, (function(t) {
    function r(C, N, M) {
      if (N in C)
        return C[N];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + N + '" is a required argument.');
    }
    t.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function o(C) {
      var N = C.match(i);
      return N ? {
        scheme: N[1],
        auth: N[2],
        host: N[3],
        port: N[4],
        path: N[5]
      } : null;
    }
    t.urlParse = o;
    function u(C) {
      var N = "";
      return C.scheme && (N += C.scheme + ":"), N += "//", C.auth && (N += C.auth + "@"), C.host && (N += C.host), C.port && (N += ":" + C.port), C.path && (N += C.path), N;
    }
    t.urlGenerate = u;
    function f(C) {
      var N = C, M = o(C);
      if (M) {
        if (!M.path)
          return C;
        N = M.path;
      }
      for (var k = t.isAbsolute(N), H = N.split(/\/+/), X, P = 0, Y = H.length - 1; Y >= 0; Y--)
        X = H[Y], X === "." ? H.splice(Y, 1) : X === ".." ? P++ : P > 0 && (X === "" ? (H.splice(Y + 1, P), P = 0) : (H.splice(Y, 2), P--));
      return N = H.join("/"), N === "" && (N = k ? "/" : "."), M ? (M.path = N, u(M)) : N;
    }
    t.normalize = f;
    function p(C, N) {
      C === "" && (C = "."), N === "" && (N = ".");
      var M = o(N), k = o(C);
      if (k && (C = k.path || "/"), M && !M.scheme)
        return k && (M.scheme = k.scheme), u(M);
      if (M || N.match(s))
        return N;
      if (k && !k.host && !k.path)
        return k.host = N, u(k);
      var H = N.charAt(0) === "/" ? N : f(C.replace(/\/+$/, "") + "/" + N);
      return k ? (k.path = H, u(k)) : H;
    }
    t.join = p, t.isAbsolute = function(C) {
      return C.charAt(0) === "/" || i.test(C);
    };
    function h(C, N) {
      C === "" && (C = "."), C = C.replace(/\/$/, "");
      for (var M = 0; N.indexOf(C + "/") !== 0; ) {
        var k = C.lastIndexOf("/");
        if (k < 0 || (C = C.slice(0, k), C.match(/^([^\/]+:\/)?\/*$/)))
          return N;
        ++M;
      }
      return Array(M + 1).join("../") + N.substr(C.length + 1);
    }
    t.relative = h;
    var m = (function() {
      var C = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in C);
    })();
    function y(C) {
      return C;
    }
    function _(C) {
      return g(C) ? "$" + C : C;
    }
    t.toSetString = m ? y : _;
    function b(C) {
      return g(C) ? C.slice(1) : C;
    }
    t.fromSetString = m ? y : b;
    function g(C) {
      if (!C)
        return !1;
      var N = C.length;
      if (N < 9 || C.charCodeAt(N - 1) !== 95 || C.charCodeAt(N - 2) !== 95 || C.charCodeAt(N - 3) !== 111 || C.charCodeAt(N - 4) !== 116 || C.charCodeAt(N - 5) !== 111 || C.charCodeAt(N - 6) !== 114 || C.charCodeAt(N - 7) !== 112 || C.charCodeAt(N - 8) !== 95 || C.charCodeAt(N - 9) !== 95)
        return !1;
      for (var M = N - 10; M >= 0; M--)
        if (C.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function d(C, N, M) {
      var k = x(C.source, N.source);
      return k !== 0 || (k = C.originalLine - N.originalLine, k !== 0) || (k = C.originalColumn - N.originalColumn, k !== 0 || M) || (k = C.generatedColumn - N.generatedColumn, k !== 0) || (k = C.generatedLine - N.generatedLine, k !== 0) ? k : x(C.name, N.name);
    }
    t.compareByOriginalPositions = d;
    function S(C, N, M) {
      var k = C.generatedLine - N.generatedLine;
      return k !== 0 || (k = C.generatedColumn - N.generatedColumn, k !== 0 || M) || (k = x(C.source, N.source), k !== 0) || (k = C.originalLine - N.originalLine, k !== 0) || (k = C.originalColumn - N.originalColumn, k !== 0) ? k : x(C.name, N.name);
    }
    t.compareByGeneratedPositionsDeflated = S;
    function x(C, N) {
      return C === N ? 0 : C === null ? 1 : N === null ? -1 : C > N ? 1 : -1;
    }
    function T(C, N) {
      var M = C.generatedLine - N.generatedLine;
      return M !== 0 || (M = C.generatedColumn - N.generatedColumn, M !== 0) || (M = x(C.source, N.source), M !== 0) || (M = C.originalLine - N.originalLine, M !== 0) || (M = C.originalColumn - N.originalColumn, M !== 0) ? M : x(C.name, N.name);
    }
    t.compareByGeneratedPositionsInflated = T;
    function A(C) {
      return JSON.parse(C.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = A;
    function D(C, N, M) {
      if (N = N || "", C && (C[C.length - 1] !== "/" && N[0] !== "/" && (C += "/"), N = C + N), M) {
        var k = o(M);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var H = k.path.lastIndexOf("/");
          H >= 0 && (k.path = k.path.substring(0, H + 1));
        }
        N = p(u(k), N);
      }
      return f(N);
    }
    t.computeSourceURL = D;
  })(ud)), ud;
}
var cd = {}, py;
function G0() {
  if (py) return cd;
  py = 1;
  var t = ll(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function s() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, f) {
    for (var p = new s(), h = 0, m = u.length; h < m; h++)
      p.add(u[h], f);
    return p;
  }, s.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var p = i ? u : t.toSetString(u), h = i ? this.has(u) : r.call(this._set, p), m = this._array.length;
    (!h || f) && this._array.push(u), h || (i ? this._set.set(u, m) : this._set[p] = m);
  }, s.prototype.has = function(u) {
    if (i)
      return this._set.has(u);
    var f = t.toSetString(u);
    return r.call(this._set, f);
  }, s.prototype.indexOf = function(u) {
    if (i) {
      var f = this._set.get(u);
      if (f >= 0)
        return f;
    } else {
      var p = t.toSetString(u);
      if (r.call(this._set, p))
        return this._set[p];
    }
    throw new Error('"' + u + '" is not in the set.');
  }, s.prototype.at = function(u) {
    if (u >= 0 && u < this._array.length)
      return this._array[u];
    throw new Error("No element indexed by " + u);
  }, s.prototype.toArray = function() {
    return this._array.slice();
  }, cd.ArraySet = s, cd;
}
var fd = {}, my;
function NE() {
  if (my) return fd;
  my = 1;
  var t = ll();
  function r(s, o) {
    var u = s.generatedLine, f = o.generatedLine, p = s.generatedColumn, h = o.generatedColumn;
    return f > u || f == u && h >= p || t.compareByGeneratedPositionsInflated(s, o) <= 0;
  }
  function i() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return i.prototype.unsortedForEach = function(o, u) {
    this._array.forEach(o, u);
  }, i.prototype.add = function(o) {
    r(this._last, o) ? (this._last = o, this._array.push(o)) : (this._sorted = !1, this._array.push(o));
  }, i.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, fd.MappingList = i, fd;
}
var gy;
function V0() {
  if (gy) return od;
  gy = 1;
  var t = Z0(), r = ll(), i = G0().ArraySet, s = NE().MappingList;
  function o(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(f) {
    var p = f.sourceRoot, h = new o({
      file: f.file,
      sourceRoot: p
    });
    return f.eachMapping(function(m) {
      var y = {
        generated: {
          line: m.generatedLine,
          column: m.generatedColumn
        }
      };
      m.source != null && (y.source = m.source, p != null && (y.source = r.relative(p, y.source)), y.original = {
        line: m.originalLine,
        column: m.originalColumn
      }, m.name != null && (y.name = m.name)), h.addMapping(y);
    }), f.sources.forEach(function(m) {
      var y = m;
      p !== null && (y = r.relative(p, m)), h._sources.has(y) || h._sources.add(y);
      var _ = f.sourceContentFor(m);
      _ != null && h.setSourceContent(m, _);
    }), h;
  }, o.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), h = r.getArg(f, "original", null), m = r.getArg(f, "source", null), y = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, h, m, y), m != null && (m = String(m), this._sources.has(m) || this._sources.add(m)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: m,
      name: y
    });
  }, o.prototype.setSourceContent = function(f, p) {
    var h = f;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(f, p, h) {
    var m = p;
    if (p == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      m = f.file;
    }
    var y = this._sourceRoot;
    y != null && (m = r.relative(y, m));
    var _ = new i(), b = new i();
    this._mappings.unsortedForEach(function(g) {
      if (g.source === m && g.originalLine != null) {
        var d = f.originalPositionFor({
          line: g.originalLine,
          column: g.originalColumn
        });
        d.source != null && (g.source = d.source, h != null && (g.source = r.join(h, g.source)), y != null && (g.source = r.relative(y, g.source)), g.originalLine = d.line, g.originalColumn = d.column, d.name != null && (g.name = d.name));
      }
      var S = g.source;
      S != null && !_.has(S) && _.add(S);
      var x = g.name;
      x != null && !b.has(x) && b.add(x);
    }, this), this._sources = _, this._names = b, f.sources.forEach(function(g) {
      var d = f.sourceContentFor(g);
      d != null && (h != null && (g = r.join(h, g)), y != null && (g = r.relative(y, g)), this.setSourceContent(g, d));
    }, this);
  }, o.prototype._validateMapping = function(f, p, h, m) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !p && !h && !m)) {
      if (f && "line" in f && "column" in f && p && "line" in p && "column" in p && f.line > 0 && f.column >= 0 && p.line > 0 && p.column >= 0 && h)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: h,
        original: p,
        name: m
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var f = 0, p = 1, h = 0, m = 0, y = 0, _ = 0, b = "", g, d, S, x, T = this._mappings.toArray(), A = 0, D = T.length; A < D; A++) {
      if (d = T[A], g = "", d.generatedLine !== p)
        for (f = 0; d.generatedLine !== p; )
          g += ";", p++;
      else if (A > 0) {
        if (!r.compareByGeneratedPositionsInflated(d, T[A - 1]))
          continue;
        g += ",";
      }
      g += t.encode(d.generatedColumn - f), f = d.generatedColumn, d.source != null && (x = this._sources.indexOf(d.source), g += t.encode(x - _), _ = x, g += t.encode(d.originalLine - 1 - m), m = d.originalLine - 1, g += t.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (S = this._names.indexOf(d.name), g += t.encode(S - y), y = S)), b += g;
    }
    return b;
  }, o.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(h) {
      if (!this._sourcesContents)
        return null;
      p != null && (h = r.relative(p, h));
      var m = r.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, m) ? this._sourcesContents[m] : null;
    }, this);
  }, o.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, o.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, od.SourceMapGenerator = o, od;
}
var Fs = {}, dd = {}, vy;
function TE() {
  return vy || (vy = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(i, s, o, u, f, p) {
      var h = Math.floor((s - i) / 2) + i, m = f(o, u[h], !0);
      return m === 0 ? h : m > 0 ? s - h > 1 ? r(h, s, o, u, f, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - i > 1 ? r(i, h, o, u, f, p) : p == t.LEAST_UPPER_BOUND ? h : i < 0 ? -1 : i;
    }
    t.search = function(s, o, u, f) {
      if (o.length === 0)
        return -1;
      var p = r(
        -1,
        o.length,
        s,
        o,
        u,
        f || t.GREATEST_LOWER_BOUND
      );
      if (p < 0)
        return -1;
      for (; p - 1 >= 0 && u(o[p], o[p - 1], !0) === 0; )
        --p;
      return p;
    };
  })(dd)), dd;
}
var hd = {}, yy;
function OE() {
  if (yy) return hd;
  yy = 1;
  function t(s, o, u) {
    var f = s[o];
    s[o] = s[u], s[u] = f;
  }
  function r(s, o) {
    return Math.round(s + Math.random() * (o - s));
  }
  function i(s, o, u, f) {
    if (u < f) {
      var p = r(u, f), h = u - 1;
      t(s, p, f);
      for (var m = s[f], y = u; y < f; y++)
        o(s[y], m) <= 0 && (h += 1, t(s, h, y));
      t(s, h + 1, y);
      var _ = h + 1;
      i(s, o, u, _ - 1), i(s, o, _ + 1, f);
    }
  }
  return hd.quickSort = function(s, o) {
    i(s, o, 0, s.length - 1);
  }, hd;
}
var by;
function DE() {
  if (by) return Fs;
  by = 1;
  var t = ll(), r = TE(), i = G0().ArraySet, s = Z0(), o = OE().quickSort;
  function u(m, y) {
    var _ = m;
    return typeof m == "string" && (_ = t.parseSourceMapInput(m)), _.sections != null ? new h(_, y) : new f(_, y);
  }
  u.fromSourceMap = function(m, y) {
    return f.fromSourceMap(m, y);
  }, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), u.prototype._charIsMappingSeparator = function(y, _) {
    var b = y.charAt(_);
    return b === ";" || b === ",";
  }, u.prototype._parseMappings = function(y, _) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(y, _, b) {
    var g = _ || null, d = b || u.GENERATED_ORDER, S;
    switch (d) {
      case u.GENERATED_ORDER:
        S = this._generatedMappings;
        break;
      case u.ORIGINAL_ORDER:
        S = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var x = this.sourceRoot;
    S.map(function(T) {
      var A = T.source === null ? null : this._sources.at(T.source);
      return A = t.computeSourceURL(x, A, this._sourceMapURL), {
        source: A,
        generatedLine: T.generatedLine,
        generatedColumn: T.generatedColumn,
        originalLine: T.originalLine,
        originalColumn: T.originalColumn,
        name: T.name === null ? null : this._names.at(T.name)
      };
    }, this).forEach(y, g);
  }, u.prototype.allGeneratedPositionsFor = function(y) {
    var _ = t.getArg(y, "line"), b = {
      source: t.getArg(y, "source"),
      originalLine: _,
      originalColumn: t.getArg(y, "column", 0)
    };
    if (b.source = this._findSourceIndex(b.source), b.source < 0)
      return [];
    var g = [], d = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (d >= 0) {
      var S = this._originalMappings[d];
      if (y.column === void 0)
        for (var x = S.originalLine; S && S.originalLine === x; )
          g.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++d];
      else
        for (var T = S.originalColumn; S && S.originalLine === _ && S.originalColumn == T; )
          g.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++d];
    }
    return g;
  }, Fs.SourceMapConsumer = u;
  function f(m, y) {
    var _ = m;
    typeof m == "string" && (_ = t.parseSourceMapInput(m));
    var b = t.getArg(_, "version"), g = t.getArg(_, "sources"), d = t.getArg(_, "names", []), S = t.getArg(_, "sourceRoot", null), x = t.getArg(_, "sourcesContent", null), T = t.getArg(_, "mappings"), A = t.getArg(_, "file", null);
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    S && (S = t.normalize(S)), g = g.map(String).map(t.normalize).map(function(D) {
      return S && t.isAbsolute(S) && t.isAbsolute(D) ? t.relative(S, D) : D;
    }), this._names = i.fromArray(d.map(String), !0), this._sources = i.fromArray(g, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return t.computeSourceURL(S, D, y);
    }), this.sourceRoot = S, this.sourcesContent = x, this._mappings = T, this._sourceMapURL = y, this.file = A;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(m) {
    var y = m;
    if (this.sourceRoot != null && (y = t.relative(this.sourceRoot, y)), this._sources.has(y))
      return this._sources.indexOf(y);
    var _;
    for (_ = 0; _ < this._absoluteSources.length; ++_)
      if (this._absoluteSources[_] == m)
        return _;
    return -1;
  }, f.fromSourceMap = function(y, _) {
    var b = Object.create(f.prototype), g = b._names = i.fromArray(y._names.toArray(), !0), d = b._sources = i.fromArray(y._sources.toArray(), !0);
    b.sourceRoot = y._sourceRoot, b.sourcesContent = y._generateSourcesContent(
      b._sources.toArray(),
      b.sourceRoot
    ), b.file = y._file, b._sourceMapURL = _, b._absoluteSources = b._sources.toArray().map(function(M) {
      return t.computeSourceURL(b.sourceRoot, M, _);
    });
    for (var S = y._mappings.toArray().slice(), x = b.__generatedMappings = [], T = b.__originalMappings = [], A = 0, D = S.length; A < D; A++) {
      var C = S[A], N = new p();
      N.generatedLine = C.generatedLine, N.generatedColumn = C.generatedColumn, C.source && (N.source = d.indexOf(C.source), N.originalLine = C.originalLine, N.originalColumn = C.originalColumn, C.name && (N.name = g.indexOf(C.name)), T.push(N)), x.push(N);
    }
    return o(b.__originalMappings, t.compareByOriginalPositions), b;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(y, _) {
    for (var b = 1, g = 0, d = 0, S = 0, x = 0, T = 0, A = y.length, D = 0, C = {}, N = {}, M = [], k = [], H, X, P, Y, K; D < A; )
      if (y.charAt(D) === ";")
        b++, D++, g = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (H = new p(), H.generatedLine = b, Y = D; Y < A && !this._charIsMappingSeparator(y, Y); Y++)
          ;
        if (X = y.slice(D, Y), P = C[X], P)
          D += X.length;
        else {
          for (P = []; D < Y; )
            s.decode(y, D, N), K = N.value, D = N.rest, P.push(K);
          if (P.length === 2)
            throw new Error("Found a source, but no line and column");
          if (P.length === 3)
            throw new Error("Found a source and line, but no column");
          C[X] = P;
        }
        H.generatedColumn = g + P[0], g = H.generatedColumn, P.length > 1 && (H.source = x + P[1], x += P[1], H.originalLine = d + P[2], d = H.originalLine, H.originalLine += 1, H.originalColumn = S + P[3], S = H.originalColumn, P.length > 4 && (H.name = T + P[4], T += P[4])), k.push(H), typeof H.originalLine == "number" && M.push(H);
      }
    o(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, o(M, t.compareByOriginalPositions), this.__originalMappings = M;
  }, f.prototype._findMapping = function(y, _, b, g, d, S) {
    if (y[b] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + y[b]);
    if (y[g] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + y[g]);
    return r.search(y, _, d, S);
  }, f.prototype.computeColumnSpans = function() {
    for (var y = 0; y < this._generatedMappings.length; ++y) {
      var _ = this._generatedMappings[y];
      if (y + 1 < this._generatedMappings.length) {
        var b = this._generatedMappings[y + 1];
        if (_.generatedLine === b.generatedLine) {
          _.lastGeneratedColumn = b.generatedColumn - 1;
          continue;
        }
      }
      _.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(y) {
    var _ = {
      generatedLine: t.getArg(y, "line"),
      generatedColumn: t.getArg(y, "column")
    }, b = this._findMapping(
      _,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (b >= 0) {
      var g = this._generatedMappings[b];
      if (g.generatedLine === _.generatedLine) {
        var d = t.getArg(g, "source", null);
        d !== null && (d = this._sources.at(d), d = t.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var S = t.getArg(g, "name", null);
        return S !== null && (S = this._names.at(S)), {
          source: d,
          line: t.getArg(g, "originalLine", null),
          column: t.getArg(g, "originalColumn", null),
          name: S
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, f.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(y) {
      return y == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(y, _) {
    if (!this.sourcesContent)
      return null;
    var b = this._findSourceIndex(y);
    if (b >= 0)
      return this.sourcesContent[b];
    var g = y;
    this.sourceRoot != null && (g = t.relative(this.sourceRoot, g));
    var d;
    if (this.sourceRoot != null && (d = t.urlParse(this.sourceRoot))) {
      var S = g.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(S))
        return this.sourcesContent[this._sources.indexOf(S)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + g))
        return this.sourcesContent[this._sources.indexOf("/" + g)];
    }
    if (_)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(y) {
    var _ = t.getArg(y, "source");
    if (_ = this._findSourceIndex(_), _ < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var b = {
      source: _,
      originalLine: t.getArg(y, "line"),
      originalColumn: t.getArg(y, "column")
    }, g = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (g >= 0) {
      var d = this._originalMappings[g];
      if (d.source === b.source)
        return {
          line: t.getArg(d, "generatedLine", null),
          column: t.getArg(d, "generatedColumn", null),
          lastColumn: t.getArg(d, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Fs.BasicSourceMapConsumer = f;
  function h(m, y) {
    var _ = m;
    typeof m == "string" && (_ = t.parseSourceMapInput(m));
    var b = t.getArg(_, "version"), g = t.getArg(_, "sections");
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    this._sources = new i(), this._names = new i();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = g.map(function(S) {
      if (S.url)
        throw new Error("Support for url field in sections not implemented.");
      var x = t.getArg(S, "offset"), T = t.getArg(x, "line"), A = t.getArg(x, "column");
      if (T < d.line || T === d.line && A < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = x, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: T + 1,
          generatedColumn: A + 1
        },
        consumer: new u(t.getArg(S, "map"), y)
      };
    });
  }
  return h.prototype = Object.create(u.prototype), h.prototype.constructor = u, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      for (var m = [], y = 0; y < this._sections.length; y++)
        for (var _ = 0; _ < this._sections[y].consumer.sources.length; _++)
          m.push(this._sections[y].consumer.sources[_]);
      return m;
    }
  }), h.prototype.originalPositionFor = function(y) {
    var _ = {
      generatedLine: t.getArg(y, "line"),
      generatedColumn: t.getArg(y, "column")
    }, b = r.search(
      _,
      this._sections,
      function(d, S) {
        var x = d.generatedLine - S.generatedOffset.generatedLine;
        return x || d.generatedColumn - S.generatedOffset.generatedColumn;
      }
    ), g = this._sections[b];
    return g ? g.consumer.originalPositionFor({
      line: _.generatedLine - (g.generatedOffset.generatedLine - 1),
      column: _.generatedColumn - (g.generatedOffset.generatedLine === _.generatedLine ? g.generatedOffset.generatedColumn - 1 : 0),
      bias: y.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, h.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(y) {
      return y.consumer.hasContentsOfAllSources();
    });
  }, h.prototype.sourceContentFor = function(y, _) {
    for (var b = 0; b < this._sections.length; b++) {
      var g = this._sections[b], d = g.consumer.sourceContentFor(y, !0);
      if (d)
        return d;
    }
    if (_)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(y) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var b = this._sections[_];
      if (b.consumer._findSourceIndex(t.getArg(y, "source")) !== -1) {
        var g = b.consumer.generatedPositionFor(y);
        if (g) {
          var d = {
            line: g.line + (b.generatedOffset.generatedLine - 1),
            column: g.column + (b.generatedOffset.generatedLine === g.line ? b.generatedOffset.generatedColumn - 1 : 0)
          };
          return d;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, h.prototype._parseMappings = function(y, _) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var b = 0; b < this._sections.length; b++)
      for (var g = this._sections[b], d = g.consumer._generatedMappings, S = 0; S < d.length; S++) {
        var x = d[S], T = g.consumer._sources.at(x.source);
        T = t.computeSourceURL(g.consumer.sourceRoot, T, this._sourceMapURL), this._sources.add(T), T = this._sources.indexOf(T);
        var A = null;
        x.name && (A = g.consumer._names.at(x.name), this._names.add(A), A = this._names.indexOf(A));
        var D = {
          source: T,
          generatedLine: x.generatedLine + (g.generatedOffset.generatedLine - 1),
          generatedColumn: x.generatedColumn + (g.generatedOffset.generatedLine === x.generatedLine ? g.generatedOffset.generatedColumn - 1 : 0),
          originalLine: x.originalLine,
          originalColumn: x.originalColumn,
          name: A
        };
        this.__generatedMappings.push(D), typeof D.originalLine == "number" && this.__originalMappings.push(D);
      }
    o(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), o(this.__originalMappings, t.compareByOriginalPositions);
  }, Fs.IndexedSourceMapConsumer = h, Fs;
}
var pd = {}, _y;
function ME() {
  if (_y) return pd;
  _y = 1;
  var t = V0().SourceMapGenerator, r = ll(), i = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function u(f, p, h, m, y) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = y ?? null, this[o] = !0, m != null && this.add(m);
  }
  return u.fromStringWithSourceMap = function(p, h, m) {
    var y = new u(), _ = p.split(i), b = 0, g = function() {
      var A = C(), D = C() || "";
      return A + D;
      function C() {
        return b < _.length ? _[b++] : void 0;
      }
    }, d = 1, S = 0, x = null;
    return h.eachMapping(function(A) {
      if (x !== null)
        if (d < A.generatedLine)
          T(x, g()), d++, S = 0;
        else {
          var D = _[b] || "", C = D.substr(0, A.generatedColumn - S);
          _[b] = D.substr(A.generatedColumn - S), S = A.generatedColumn, T(x, C), x = A;
          return;
        }
      for (; d < A.generatedLine; )
        y.add(g()), d++;
      if (S < A.generatedColumn) {
        var D = _[b] || "";
        y.add(D.substr(0, A.generatedColumn)), _[b] = D.substr(A.generatedColumn), S = A.generatedColumn;
      }
      x = A;
    }, this), b < _.length && (x && T(x, g()), y.add(_.splice(b).join(""))), h.sources.forEach(function(A) {
      var D = h.sourceContentFor(A);
      D != null && (m != null && (A = r.join(m, A)), y.setSourceContent(A, D));
    }), y;
    function T(A, D) {
      if (A === null || A.source === void 0)
        y.add(D);
      else {
        var C = m ? r.join(m, A.source) : A.source;
        y.add(new u(
          A.originalLine,
          A.originalColumn,
          C,
          D,
          A.name
        ));
      }
    }
  }, u.prototype.add = function(p) {
    if (Array.isArray(p))
      p.forEach(function(h) {
        this.add(h);
      }, this);
    else if (p[o] || typeof p == "string")
      p && this.children.push(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.prepend = function(p) {
    if (Array.isArray(p))
      for (var h = p.length - 1; h >= 0; h--)
        this.prepend(p[h]);
    else if (p[o] || typeof p == "string")
      this.children.unshift(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.walk = function(p) {
    for (var h, m = 0, y = this.children.length; m < y; m++)
      h = this.children[m], h[o] ? h.walk(p) : h !== "" && p(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var h, m, y = this.children.length;
    if (y > 0) {
      for (h = [], m = 0; m < y - 1; m++)
        h.push(this.children[m]), h.push(p);
      h.push(this.children[m]), this.children = h;
    }
    return this;
  }, u.prototype.replaceRight = function(p, h) {
    var m = this.children[this.children.length - 1];
    return m[o] ? m.replaceRight(p, h) : typeof m == "string" ? this.children[this.children.length - 1] = m.replace(p, h) : this.children.push("".replace(p, h)), this;
  }, u.prototype.setSourceContent = function(p, h) {
    this.sourceContents[r.toSetString(p)] = h;
  }, u.prototype.walkSourceContents = function(p) {
    for (var h = 0, m = this.children.length; h < m; h++)
      this.children[h][o] && this.children[h].walkSourceContents(p);
    for (var y = Object.keys(this.sourceContents), h = 0, m = y.length; h < m; h++)
      p(r.fromSetString(y[h]), this.sourceContents[y[h]]);
  }, u.prototype.toString = function() {
    var p = "";
    return this.walk(function(h) {
      p += h;
    }), p;
  }, u.prototype.toStringWithSourceMap = function(p) {
    var h = {
      code: "",
      line: 1,
      column: 0
    }, m = new t(p), y = !1, _ = null, b = null, g = null, d = null;
    return this.walk(function(S, x) {
      h.code += S, x.source !== null && x.line !== null && x.column !== null ? ((_ !== x.source || b !== x.line || g !== x.column || d !== x.name) && m.addMapping({
        source: x.source,
        original: {
          line: x.line,
          column: x.column
        },
        generated: {
          line: h.line,
          column: h.column
        },
        name: x.name
      }), _ = x.source, b = x.line, g = x.column, d = x.name, y = !0) : y && (m.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), _ = null, y = !1);
      for (var T = 0, A = S.length; T < A; T++)
        S.charCodeAt(T) === s ? (h.line++, h.column = 0, T + 1 === A ? (_ = null, y = !1) : y && m.addMapping({
          source: x.source,
          original: {
            line: x.line,
            column: x.column
          },
          generated: {
            line: h.line,
            column: h.column
          },
          name: x.name
        })) : h.column++;
    }), this.walkSourceContents(function(S, x) {
      m.setSourceContent(S, x);
    }), { code: h.code, map: m };
  }, pd.SourceNode = u, pd;
}
var Sy;
function kE() {
  return Sy || (Sy = 1, qs.SourceMapGenerator = V0().SourceMapGenerator, qs.SourceMapConsumer = DE().SourceMapConsumer, qs.SourceNode = ME().SourceNode), qs;
}
var xy;
function jE() {
  return xy || (xy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = sn(), s = void 0;
    try {
      var o = kE();
      s = o.SourceNode;
    } catch {
    }
    s || (s = function(p, h, m, y) {
      this.src = "", y && this.add(y);
    }, s.prototype = {
      add: function(h) {
        i.isArray(h) && (h = h.join("")), this.src += h;
      },
      prepend: function(h) {
        i.isArray(h) && (h = h.join("")), this.src = h + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function u(p, h, m) {
      if (i.isArray(p)) {
        for (var y = [], _ = 0, b = p.length; _ < b; _++)
          y.push(h.wrap(p[_], m));
        return y;
      } else if (typeof p == "boolean" || typeof p == "number")
        return p + "";
      return p;
    }
    function f(p) {
      this.srcFile = p, this.source = [];
    }
    f.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(h, m) {
        this.source.unshift(this.wrap(h, m));
      },
      push: function(h, m) {
        this.source.push(this.wrap(h, m));
      },
      merge: function() {
        var h = this.empty();
        return this.each(function(m) {
          h.add(["  ", m, `
`]);
        }), h;
      },
      each: function(h) {
        for (var m = 0, y = this.source.length; m < y; m++)
          h(this.source[m]);
      },
      empty: function() {
        var h = this.currentLocation || { start: {} };
        return new s(h.start.line, h.start.column, this.srcFile);
      },
      wrap: function(h) {
        var m = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return h instanceof s ? h : (h = u(h, this, m), new s(m.start.line, m.start.column, this.srcFile, h));
      },
      functionCall: function(h, m, y) {
        return y = this.generateList(y), this.wrap([h, m ? "." + m + "(" : "(", y, ")"]);
      },
      quotedString: function(h) {
        return '"' + (h + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(h) {
        var m = this, y = [];
        Object.keys(h).forEach(function(b) {
          var g = u(h[b], m);
          g !== "undefined" && y.push([m.quotedString(b), ":", g]);
        });
        var _ = this.generateList(y);
        return _.prepend("{"), _.add("}"), _;
      },
      generateList: function(h) {
        for (var m = this.empty(), y = 0, _ = h.length; y < _; y++)
          y && m.add(","), m.add(u(h[y], this));
        return m;
      },
      generateArray: function(h) {
        var m = this.generateList(h);
        return m.prepend("["), m.add("]"), m;
      }
    }, r.default = f, t.exports = r.default;
  })(Qo, Qo.exports)), Qo.exports;
}
var Ey;
function RE() {
  return Ey || (Ey = 1, (function(t, r) {
    r.__esModule = !0;
    function i(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = rh(), o = qn(), u = i(o), f = sn(), p = jE(), h = i(p);
    function m(b) {
      this.value = b;
    }
    function y() {
    }
    y.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(g, d) {
        return this.internalNameLookup(g, d);
      },
      depthedLookup: function(g) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(g), ")"];
      },
      compilerInfo: function() {
        var g = s.COMPILER_REVISION, d = s.REVISION_CHANGES[g];
        return [g, d];
      },
      appendToBuffer: function(g, d, S) {
        return f.isArray(g) || (g = [g]), g = this.source.wrap(g, d), this.environment.isSimple ? ["return ", g, ";"] : S ? ["buffer += ", g, ";"] : (g.appendToBuffer = !0, g);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(g, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", g, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(g, d, S, x) {
        this.environment = g, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !x, this.name = this.environment.name, this.isChild = !!S, this.context = S || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(g, d), this.useDepths = this.useDepths || g.useDepths || g.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || g.useBlockParams;
        var T = g.opcodes, A = void 0, D = void 0, C = void 0, N = void 0;
        for (C = 0, N = T.length; C < N; C++)
          A = T[C], this.source.currentLocation = A.loc, D = D || A.loc, this[A.opcode].apply(this, A.args);
        if (this.source.currentLocation = D, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), x ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(x);
        if (this.isChild)
          return M;
        var k = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var H = this.context, X = H.programs, P = H.decorators;
        for (C = 0, N = X.length; C < N; C++)
          X[C] && (k[C] = X[C], P[C] && (k[C + "_d"] = P[C], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), x ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), d.srcName ? (k = k.toStringWithSourceMap({ file: d.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(g) {
        var d = this, S = "", x = this.stackVars.concat(this.registers.list);
        x.length > 0 && (S += ", " + x.join(", "));
        var T = 0;
        Object.keys(this.aliases).forEach(function(C) {
          var N = d.aliases[C];
          N.children && N.referenceCount > 1 && (S += ", alias" + ++T + "=" + C, N.children[0] = "alias" + T);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var A = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && A.push("blockParams"), this.useDepths && A.push("depths");
        var D = this.mergeSource(S);
        return g ? (A.push(D), Function.apply(this, A)) : this.source.wrap(["function(", A.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(g) {
        var d = this.environment.isSimple, S = !this.forceBuffer, x = void 0, T = void 0, A = void 0, D = void 0;
        return this.source.each(function(C) {
          C.appendToBuffer ? (A ? C.prepend("  + ") : A = C, D = C) : (A && (T ? A.prepend("buffer += ") : x = !0, D.add(";"), A = D = void 0), T = !0, d || (S = !1));
        }), S ? A ? (A.prepend("return "), D.add(";")) : T || this.source.push('return "";') : (g += ", buffer = " + (x ? "" : this.initializeBuffer()), A ? (A.prepend("return buffer + "), D.add(";")) : this.source.push("return buffer;")), g && this.source.prepend("var " + g.substring(2) + (x ? "" : `;
`)), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function() {
        return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function(g) {
        var d = this.aliasable("container.hooks.blockHelperMissing"), S = [this.contextName(0)];
        this.setupHelperArgs(g, 0, S);
        var x = this.popStack();
        S.splice(1, 0, x), this.push(this.source.functionCall(d, "call", S));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var g = this.aliasable("container.hooks.blockHelperMissing"), d = [this.contextName(0)];
        this.setupHelperArgs("", 0, d, !0), this.flushInline();
        var S = this.topStack();
        d.splice(1, 0, S), this.pushSource(["if (!", this.lastHelper, ") { ", S, " = ", this.source.functionCall(g, "call", d), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(g) {
        this.pendingContent ? g = this.pendingContent + g : this.pendingLocation = this.source.currentLocation, this.pendingContent = g;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function() {
        if (this.isInline())
          this.replaceStack(function(d) {
            return [" != null ? ", d, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var g = this.popStack();
          this.pushSource(["if (", g, " != null) { ", this.appendToBuffer(g, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function(g) {
        this.lastContext = g;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function(g, d, S, x) {
        var T = 0;
        !x && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(g[T++])) : this.pushContext(), this.resolvePath("context", g, T, d, S);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(g, d) {
        this.useBlockParams = !0, this.push(["blockParams[", g[0], "][", g[1], "]"]), this.resolvePath("context", d, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(g, d, S) {
        g ? this.pushStackLiteral("container.data(data, " + g + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, S);
      },
      resolvePath: function(g, d, S, x, T) {
        var A = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(_(this.options.strict && T, this, d, S, g));
          return;
        }
        for (var D = d.length; S < D; S++)
          this.replaceStack(function(C) {
            var N = A.nameLookup(C, d[S], g);
            return x ? [" && ", N] : [" != null ? ", N, " : ", C];
          });
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function(g, d) {
        this.pushContext(), this.pushString(d), d !== "SubExpression" && (typeof g == "string" ? this.pushString(g) : this.pushStackLiteral(g));
      },
      emptyHash: function(g) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(g ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var g = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(g.ids)), this.stringParams && (this.push(this.objectLiteral(g.contexts)), this.push(this.objectLiteral(g.types))), this.push(this.objectLiteral(g.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(g) {
        this.pushStackLiteral(this.quotedString(g));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(g) {
        this.pushStackLiteral(g);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(g) {
        g != null ? this.pushStackLiteral(this.programExpression(g)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(g, d) {
        var S = this.nameLookup("decorators", d, "decorator"), x = this.setupHelperArgs(d, g);
        this.decorators.push(["fn = ", this.decorators.functionCall(S, "", ["fn", "props", "container", x]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function(g, d, S) {
        var x = this.popStack(), T = this.setupHelper(g, d), A = [];
        S && A.push(T.name), A.push(x), this.options.strict || A.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(A, "||"), ")"], C = this.source.functionCall(D, "call", T.callParams);
        this.push(C);
      },
      itemsSeparatedBy: function(g, d) {
        var S = [];
        S.push(g[0]);
        for (var x = 1; x < g.length; x++)
          S.push(d, g[x]);
        return S;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(g, d) {
        var S = this.setupHelper(g, d);
        this.push(this.source.functionCall(S.name, "call", S.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function(g, d) {
        this.useRegister("helper");
        var S = this.popStack();
        this.emptyHash();
        var x = this.setupHelper(0, g, d), T = this.lastHelper = this.nameLookup("helpers", g, "helper"), A = ["(", "(helper = ", T, " || ", S, ")"];
        this.options.strict || (A[0] = "(helper = ", A.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", A, x.paramsInit ? ["),(", x.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", x.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(g, d, S) {
        var x = [], T = this.setupParams(d, 1, x);
        g && (d = this.popStack(), delete T.name), S && (T.indent = JSON.stringify(S)), T.helpers = "helpers", T.partials = "partials", T.decorators = "container.decorators", g ? x.unshift(d) : x.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (T.depths = "depths"), T = this.objectLiteral(T), x.push(T), this.push(this.source.functionCall("container.invokePartial", "", x));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(g) {
        var d = this.popStack(), S = void 0, x = void 0, T = void 0;
        this.trackIds && (T = this.popStack()), this.stringParams && (x = this.popStack(), S = this.popStack());
        var A = this.hash;
        S && (A.contexts[g] = S), x && (A.types[g] = x), T && (A.ids[g] = T), A.values[g] = d;
      },
      pushId: function(g, d, S) {
        g === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : g === "PathExpression" ? this.pushString(d) : g === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: y,
      compileChildren: function(g, d) {
        for (var S = g.children, x = void 0, T = void 0, A = 0, D = S.length; A < D; A++) {
          x = S[A], T = new this.compiler();
          var C = this.matchExistingProgram(x);
          if (C == null) {
            this.context.programs.push("");
            var N = this.context.programs.length;
            x.index = N, x.name = "program" + N, this.context.programs[N] = T.compile(x, d, this.context, !this.precompile), this.context.decorators[N] = T.decorators, this.context.environments[N] = x, this.useDepths = this.useDepths || T.useDepths, this.useBlockParams = this.useBlockParams || T.useBlockParams, x.useDepths = this.useDepths, x.useBlockParams = this.useBlockParams;
          } else
            x.index = C.index, x.name = "program" + C.index, this.useDepths = this.useDepths || C.useDepths, this.useBlockParams = this.useBlockParams || C.useBlockParams;
        }
      },
      matchExistingProgram: function(g) {
        for (var d = 0, S = this.context.environments.length; d < S; d++) {
          var x = this.context.environments[d];
          if (x && x.equals(g))
            return x;
        }
      },
      programExpression: function(g) {
        var d = this.environment.children[g], S = [d.index, "data", d.blockParams];
        return (this.useBlockParams || this.useDepths) && S.push("blockParams"), this.useDepths && S.push("depths"), "container.program(" + S.join(", ") + ")";
      },
      useRegister: function(g) {
        this.registers[g] || (this.registers[g] = !0, this.registers.list.push(g));
      },
      push: function(g) {
        return g instanceof m || (g = this.source.wrap(g)), this.inlineStack.push(g), g;
      },
      pushStackLiteral: function(g) {
        this.push(new m(g));
      },
      pushSource: function(g) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), g && this.source.push(g);
      },
      replaceStack: function(g) {
        var d = ["("], S = void 0, x = void 0, T = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var A = this.popStack(!0);
        if (A instanceof m)
          S = [A.value], d = ["(", S], T = !0;
        else {
          x = !0;
          var D = this.incrStack();
          d = ["((", this.push(D), " = ", A, ")"], S = this.topStack();
        }
        var C = g.call(this, S);
        T || this.popStack(), x && this.stackSlot--, this.push(d.concat(C, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var g = this.inlineStack;
        this.inlineStack = [];
        for (var d = 0, S = g.length; d < S; d++) {
          var x = g[d];
          if (x instanceof m)
            this.compileStack.push(x);
          else {
            var T = this.incrStack();
            this.pushSource([T, " = ", x, ";"]), this.compileStack.push(T);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(g) {
        var d = this.isInline(), S = (d ? this.inlineStack : this.compileStack).pop();
        if (!g && S instanceof m)
          return S.value;
        if (!d) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return S;
      },
      topStack: function() {
        var g = this.isInline() ? this.inlineStack : this.compileStack, d = g[g.length - 1];
        return d instanceof m ? d.value : d;
      },
      contextName: function(g) {
        return this.useDepths && g ? "depths[" + g + "]" : "depth" + g;
      },
      quotedString: function(g) {
        return this.source.quotedString(g);
      },
      objectLiteral: function(g) {
        return this.source.objectLiteral(g);
      },
      aliasable: function(g) {
        var d = this.aliases[g];
        return d ? (d.referenceCount++, d) : (d = this.aliases[g] = this.source.wrap(g), d.aliasable = !0, d.referenceCount = 1, d);
      },
      setupHelper: function(g, d, S) {
        var x = [], T = this.setupHelperArgs(d, g, x, S), A = this.nameLookup("helpers", d, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: x,
          paramsInit: T,
          name: A,
          callParams: [D].concat(x)
        };
      },
      setupParams: function(g, d, S) {
        var x = {}, T = [], A = [], D = [], C = !S, N = void 0;
        C && (S = []), x.name = this.quotedString(g), x.hash = this.popStack(), this.trackIds && (x.hashIds = this.popStack()), this.stringParams && (x.hashTypes = this.popStack(), x.hashContexts = this.popStack());
        var M = this.popStack(), k = this.popStack();
        (k || M) && (x.fn = k || "container.noop", x.inverse = M || "container.noop");
        for (var H = d; H--; )
          N = this.popStack(), S[H] = N, this.trackIds && (D[H] = this.popStack()), this.stringParams && (A[H] = this.popStack(), T[H] = this.popStack());
        return C && (x.args = this.source.generateArray(S)), this.trackIds && (x.ids = this.source.generateArray(D)), this.stringParams && (x.types = this.source.generateArray(A), x.contexts = this.source.generateArray(T)), this.options.data && (x.data = "data"), this.useBlockParams && (x.blockParams = "blockParams"), x;
      },
      setupHelperArgs: function(g, d, S, x) {
        var T = this.setupParams(g, d, S);
        return T.loc = JSON.stringify(this.source.currentLocation), T = this.objectLiteral(T), x ? (this.useRegister("options"), S.push("options"), ["options=", T]) : S ? (S.push(T), "") : T;
      }
    }, (function() {
      for (var b = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), g = y.RESERVED_WORDS = {}, d = 0, S = b.length; d < S; d++)
        g[b[d]] = !0;
    })(), y.isValidJavaScriptVariableName = function(b) {
      return !y.RESERVED_WORDS[b] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(b);
    };
    function _(b, g, d, S, x) {
      var T = g.popStack(), A = d.length;
      for (b && A--; S < A; S++)
        T = g.nameLookup(T, d[S], x);
      return b ? [g.aliasable("container.strict"), "(", T, ", ", g.quotedString(d[S]), ", ", JSON.stringify(g.source.currentLocation), " )"] : T;
    }
    r.default = y, t.exports = r.default;
  })($o, $o.exports)), $o.exports;
}
var Cy;
function zE() {
  return Cy || (Cy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(A) {
      return A && A.__esModule ? A : { default: A };
    }
    var s = _E(), o = i(s), u = q0(), f = i(u), p = CE(), h = wE(), m = RE(), y = i(m), _ = F0(), b = i(_), g = H0(), d = i(g), S = o.default.create;
    function x() {
      var A = S();
      return A.compile = function(D, C) {
        return h.compile(D, C, A);
      }, A.precompile = function(D, C) {
        return h.precompile(D, C, A);
      }, A.AST = f.default, A.Compiler = h.Compiler, A.JavaScriptCompiler = y.default, A.Parser = p.parser, A.parse = p.parse, A.parseWithoutProcessing = p.parseWithoutProcessing, A;
    }
    var T = x();
    T.create = x, d.default(T), T.Visitor = b.default, T.default = T, r.default = T, t.exports = r.default;
  })(To, To.exports)), To.exports;
}
var Ct = zE();
const Ft = SillyTavern.getContext(), Qn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Sr = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
};
new s0("dumb", {}).getSettings();
async function LE({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: i,
  continueFrom: s,
  session: o,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: p,
  formatDescription: h,
  mainContextList: m,
  includeUserMacro: y,
  maxResponseToken: _,
  targetField: b,
  outputFormat: g
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const d = Ft.extensionSettings.connectionManager?.profiles?.find((k) => k.id === t);
  if (!d)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const S = d.api ? Ft.CONNECT_API_MAP[d.api].selected : void 0;
  if (!S)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const x = {};
  x.char = o.fields.name.value ?? "{{char}}", x.user = y && _r ? _r : "{{user}}", x.persona = "{{persona}}", x.targetField = b, x.userInstructions = Ct.compile(r.trim(), { noEscape: !0 })(x), x.fieldSpecificInstructions = Ct.compile(
    o.draftFields[b]?.prompt ?? o.fields[b]?.prompt,
    { noEscape: !0 }
  )({
    ...x,
    char: b === "mes_example" ? "{{char}}" : x.char,
    user: b === "mes_example" ? "{{user}}" : x.user
  }), x.activeFormatInstructions = Ct.compile(h.content, { noEscape: !0 })(
    x
  );
  {
    const k = [];
    o.selectedCharacterIndexes.forEach((H) => {
      const X = parseInt(H), P = u[X];
      P && k.push(P);
    }), x.characters = k;
  }
  {
    const k = {};
    Object.entries(f).filter(
      ([H, X]) => X.length > 0 && o.selectedWorldNames.includes(H) && X.some((P) => !P.disable)
    ).forEach(([H, X]) => {
      k[H] = X.filter((P) => !P.disable);
    }), x.lorebooks = k;
  }
  {
    const k = {}, H = {}, X = {}, P = b.startsWith("alternate_greetings_"), Y = bt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(o.fields).forEach(([ue, me]) => {
      let ve = !1;
      if (Y) {
        const B = ue.startsWith("alternate_greetings_");
        P ? ve = B && ue !== b || ue === "first_mes" : ve = B;
      }
      if (!ve) {
        const B = Ct.compile(me.value, { noEscape: !0 })({
          ...x,
          char: ue === "mes_example" ? "{{char}}" : x.char,
          user: ue === "mes_example" ? "{{user}}" : x.user
        });
        Qn.includes(ue) ? k[me.label] = B : ue.startsWith("alternate_greetings_") && (H[ue] = B);
      }
    }), Object.entries(o.draftFields || {}).forEach(([ue, me]) => {
      X[me.label] = Ct.compile(me.value, { noEscape: !0 })(x);
    });
    const K = {};
    Object.keys(k).length > 0 && (K.core = k), Object.keys(H).length > 0 && (K.alternate_greetings = H), Object.keys(X).length > 0 && (K.draft = X), x.fields = K;
  }
  const T = [];
  {
    for (const k of m) {
      if (k.promptName === "chatHistory") {
        const Y = await g0(S, i);
        if (Y.warnings && Y.warnings.length > 0)
          for (const K of Y.warnings)
            Ne("warning", K);
        T.push(...Y.result);
        continue;
      }
      let H = structuredClone(x);
      k.promptName === "stDescription" && (H.char = "{{char}}", H.user = "{{user}}");
      const X = p[k.promptName];
      if (!X)
        continue;
      const P = {
        role: k.role,
        content: Ct.compile(X.content, { noEscape: !0 })(H)
      };
      P.content = P.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), P.content = P.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), P.content = Ft.substituteParams(P.content), P.content = P.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), P.content = P.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), P.content && T.push(P);
    }
    s && T.push({
      role: "assistant",
      content: Lv(s, g)
    });
  }
  const A = bu(), D = await Ft.ConnectionManagerRequestService.sendRequest(
    t,
    T,
    _,
    void 0,
    A
  ), C = s ? Lv(s, g) + D.content : D.content, N = P0(C, g);
  let M;
  if (typeof N == "string")
    M = N;
  else if (typeof N == "object" && N !== null)
    if ("response" in N && typeof N.response == "string")
      M = N.response;
    else {
      const k = Object.values(N)[0];
      M = k ? String(k) : "";
    }
  else
    M = "";
  return M;
}
const Ma = "SillyTavern-Character-Creator-Chat", Y0 = "0.3.0", PE = "F_1.11", IE = [
  { value: "default", label: "Default (Use Preset)" },
  { value: "min", label: "Min" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "max", label: "Max" }
], BE = {
  EXTENSION: "charCreator"
}, Wo = [
  "stDescription",
  "charDefinitions",
  "lorebookDefinitions",
  "xmlFormat",
  "jsonFormat",
  "noneFormat",
  "worldInfoCharDefinition",
  "existingFieldDefinitions",
  "taskDescription",
  "outputFormatInstructions",
  "personaDescription",
  "reviseJsonPrompt",
  "reviseXmlPrompt",
  "reviseTaskDescription",
  "brainstormSystemPrompt"
], tt = {
  stDescription: kd,
  charDefinitions: M0,
  lorebookDefinitions: k0,
  xmlFormat: rx,
  jsonFormat: ax,
  noneFormat: ix,
  worldInfoCharDefinition: sx,
  existingFieldDefinitions: nl,
  taskDescription: eh,
  outputFormatInstructions: Wd,
  personaDescription: lx,
  reviseJsonPrompt: ox,
  reviseXmlPrompt: ux,
  reviseTaskDescription: cx,
  brainstormSystemPrompt: th
}, X0 = {
  version: Y0,
  formatVersion: PE,
  profileId: "",
  maxContextType: "profile",
  maxContextValue: 16384,
  maxResponseToken: 1024,
  outputFormat: "xml",
  thinkingLevel: "default",
  contextToSend: {
    stDescription: !0,
    messages: {
      type: "last",
      first: 10,
      last: 10,
      range: {
        start: 0,
        end: 10
      }
    },
    charCard: !0,
    existingFields: !0,
    worldInfo: !0,
    persona: !0,
    dontSendOtherGreetings: !1
  },
  defaultPromptEngineeringMode: "native",
  // Updated prompts structure
  prompts: {
    stDescription: {
      content: tt.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: tt.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: tt.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: tt.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: tt.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: tt.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: tt.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: nl,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: eh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: Wd,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: tt.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: tt.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: tt.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: tt.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    },
    brainstormSystemPrompt: {
      content: th,
      isDefault: !0,
      label: "Brainstorm System Prompt"
    }
  },
  // Generic Prompt Presets
  promptPreset: "default",
  promptPresets: {
    default: {
      content: "Generate the field content based on the chat history and existing character details. Be creative but consistent."
    }
  },
  mainContextTemplatePreset: "default",
  mainContextTemplatePresets: {
    default: {
      prompts: [
        {
          enabled: !0,
          promptName: "chatHistory",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "stDescription",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "charDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "lorebookDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "existingFieldDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "personaDescription",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "outputFormatInstructions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "taskDescription",
          role: "user"
        }
      ]
    }
  },
  // World Info
  showSaveAsWorldInfoEntry: {
    show: !1
  }
};
function Ld(t) {
  const i = t.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return i.map((o, u) => {
    const f = o.replace(/^\d+/, "");
    if (f) {
      const p = s ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return s || (s = !0), p;
    }
    return "";
  }).join("");
}
function bu() {
  const t = bt.getSettings();
  return t.thinkingLevel && t.thinkingLevel !== "default" ? { reasoning_effort: t.thinkingLevel } : {};
}
const bt = new s0(BE.EXTENSION, X0);
async function UE() {
  return new Promise((t, r) => {
    bt.initializeSettings({
      strategy: [
        {
          from: "*",
          to: "F_1.4",
          action(i) {
            return {
              profileId: i?.profileId ?? "",
              maxContextType: i?.maxContextType ?? "profile",
              maxContextValue: i?.maxContextValue ?? 16384,
              maxResponseToken: i?.maxResponseToken ?? 1024,
              outputFormat: i?.outputFormat ?? "xml",
              contextToSend: {
                ...i?.contextToSend,
                persona: !0
              },
              // Updated prompts structure
              prompts: {
                stDescription: {
                  content: tt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: tt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: tt.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: tt.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: tt.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: tt.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: tt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: nl,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: eh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: Wd,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: tt.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Generic Prompt Presets
              promptPreset: i?.default ?? "default",
              promptPresets: i?.promptPresets ?? {
                default: {
                  content: "Generate the field content based on the chat history and existing character details. Be creative but consistent."
                }
              },
              mainContextTemplatePreset: "default",
              mainContextTemplatePresets: {
                default: {
                  prompts: [
                    {
                      enabled: !0,
                      promptName: "chatHistory",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "stDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "charDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "lorebookDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "existingFieldDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "personaDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "outputFormatInstructions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "taskDescription",
                      role: "user"
                    }
                  ]
                }
              },
              // World Info
              showSaveAsWorldInfoEntry: i?.showSaveAsWorldInfoEntry ?? {
                show: i?.showSaveAsWorldInfoEntry.show ?? !1
              }
            };
          }
        },
        {
          from: "F_1.4",
          to: "F_1.5",
          action(i) {
            return {
              ...i,
              // Update persona
              prompts: {
                ...i?.prompts,
                personaDescription: {
                  content: tt.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Reset default main context
              mainContextTemplatePresets: {
                ...i?.mainContextTemplatePresets,
                default: {
                  prompts: [
                    {
                      enabled: !0,
                      promptName: "chatHistory",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "stDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "charDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "lorebookDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "existingFieldDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "personaDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "outputFormatInstructions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "taskDescription",
                      role: "user"
                    }
                  ]
                }
              }
            };
          }
        },
        {
          from: "F_1.5",
          to: "F_1.6",
          async action(i) {
            return await Ne("info", `[${Ma}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: tt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: tt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: tt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: nl,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                }
              }
            };
          }
        },
        {
          from: "F_1.6",
          to: "F_1.7",
          async action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = kd), s;
          }
        },
        {
          from: "F_1.7",
          to: "F_1.8",
          action(i) {
            const s = {
              ...i,
              defaultPromptEngineeringMode: "native"
            };
            return s.prompts || (s.prompts = {}), s.prompts.reviseJsonPrompt = {
              content: tt.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: tt.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: tt.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = M0), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = k0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = nl), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = kd), s;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(i) {
            const s = {
              ...i
            };
            return s.prompts.brainstormSystemPrompt || (s.prompts.brainstormSystemPrompt = {
              content: th,
              isDefault: !0,
              label: "Brainstorm System Prompt"
            }), s;
          }
        },
        {
          from: "F_1.10",
          to: "F_1.11",
          action(i) {
            return {
              ...i,
              thinkingLevel: i.thinkingLevel ?? "default"
            };
          }
        }
      ]
    }).then((i) => {
      t();
    }).catch((i) => {
      console.error(`[${Ma}] Error initializing settings:`, i), Ne("error", `[${Ma}] Failed to initialize settings: ${i.message}`), Ft.Popup.show.confirm(
        `[${Ma}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (bt.resetSettings(), Ne("success", `[${Ma}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const de = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = $.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ E.jsx("button", { className: o, ...s, children: t });
}, HE = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...o }) => {
  const u = $.useMemo(() => {
    const f = [];
    return i || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [i, r, s]);
  if (s === "checkbox") {
    const f = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ E.jsxs("label", { className: f, children: [
      /* @__PURE__ */ E.jsx("input", { type: "checkbox", ...o }),
      t && /* @__PURE__ */ E.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ E.jsx("input", { type: s, className: u, ...o });
}, _u = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = $.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ E.jsx("select", { className: o, ...s, children: t });
}, $t = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = $.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ E.jsx("textarea", { className: o, ...s, children: t });
};
var qE = a0(), bn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(bn || {}), Jr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Jr || {});
const FE = SillyTavern.getContext(), zi = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: o = !1,
  onComplete: u
}) => {
  var f;
  const p = $.useRef(null), h = $.useRef(null), [m, y] = $.useState(!1), [_, b] = $.useState(null), g = $.useRef(FE.uuidv4()), d = $.useRef({
    id: g.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  $.useEffect(() => {
    const A = p.current;
    if (!A) return;
    const D = (C) => {
      C.preventDefault(), o || S(Jr.CANCELLED);
    };
    return A.addEventListener("cancel", D), d.current.dlg = A, d.current.mainInput = h.current, Ci.util.popups.push(d.current), A.showModal || (A.classList.add("poly_dialog"), rv.registerDialog(A), new ResizeObserver((C) => {
      for (const N of C)
        rv.reposition(N.target);
    }).observe(A)), A.showModal(), Zf(), () => {
      nv(Ci.util.popups, d.current), Zf(), A.removeEventListener("cancel", D);
    };
  }, []);
  const S = async (A) => {
    var D, C;
    let N = A;
    if (r === bn.INPUT && (A >= Jr.AFFIRMATIVE ? N = (D = h.current) == null ? void 0 : D.value : A === Jr.NEGATIVE ? N = !1 : A === Jr.CANCELLED ? N = null : N = !1), (C = s.customInputs) != null && C.length) {
      const k = new Map(
        s.customInputs.map((H) => {
          var X;
          const P = (X = p.current) == null ? void 0 : X.querySelector(`#${H.id}`);
          return [P.id, P.checked];
        })
      );
      d.current.inputResults = k;
    }
    if (d.current.result = A, d.current.value = N, s.onClosing && !await s.onClosing(d.current)) {
      y(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    y(!1), Ci.util.lastResult = {
      value: N,
      result: A,
      inputResults: d.current.inputResults
    };
    const M = p.current;
    M && (M.setAttribute("closing", ""), Zf(), u2(M, async () => {
      var k;
      if (M.close(), s.onClose && await s.onClose(d.current), nv(Ci.util.popups, d.current), Ci.util.popups.length > 0) {
        const H = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), X = H?.getAttribute("data-id"), P = Ci.util.popups.find((Y) => Y.id === X);
        P && P.lastFocus && P.lastFocus.focus();
      }
      u(N);
    }));
  }, x = (A) => {
    A.target instanceof HTMLElement && A.target !== p.current && (b(A.target), d.current.lastFocus = A.target);
  }, T = async (A) => {
  };
  return qE.createPortal(
    /* @__PURE__ */ E.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const A = ["popup"];
          return s.wide && A.push("wide_dialogue_popup"), s.wider && A.push("wider_dialogue_popup"), s.large && A.push("large_dialogue_popup"), s.transparent && A.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && A.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && A.push("vertical_scrolling_dialogue_popup"), s.animation && A.push(`popup--animation-${s.animation}`), A.join(" ");
        })(),
        "data-id": g.current,
        onKeyDown: T,
        onFocus: x,
        children: /* @__PURE__ */ E.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ E.jsx("div", { className: "popup-content", children: t }),
          r === bn.INPUT && /* @__PURE__ */ E.jsx(
            "textarea",
            {
              ref: h,
              className: "popup-input text_pole result-control auto-select",
              rows: s.rows ?? 1,
              defaultValue: i,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          s.customInputs && /* @__PURE__ */ E.jsx("div", { className: "popup-inputs", children: s.customInputs.map((A) => /* @__PURE__ */ E.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: A.id, children: [
            /* @__PURE__ */ E.jsx("input", { type: "checkbox", id: A.id, defaultChecked: A.defaultState }),
            /* @__PURE__ */ E.jsx("span", { "data-i18n": A.label, children: A.label }),
            A.tooltip && /* @__PURE__ */ E.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: A.tooltip,
                "data-i18n": `[title]${A.tooltip}`
              }
            )
          ] }, A.id)) }),
          r !== bn.DISPLAY && /* @__PURE__ */ E.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((A, D) => {
              const C = typeof A == "string" ? { text: A, result: D + 2 } : A;
              return /* @__PURE__ */ E.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${C.classes ?? ""}`,
                  "data-result": C.result,
                  onClick: () => {
                    var N;
                    (N = C.action) == null || N.call(C), S(C.result ?? D + 2);
                  },
                  "data-i18n": C.text,
                  children: C.text
                },
                D
              );
            }),
            r !== bn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ E.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S(Jr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== bn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ E.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S(Jr.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === bn.DISPLAY && /* @__PURE__ */ E.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => S(Jr.CANCELLED),
              "data-result": "0",
              title: "Close popup",
              "data-i18n": "[title]Close popup"
            }
          )
        ] })
      }
    ),
    document.body
  );
}, Zs = (t, r, i) => {
  if (!t || !t.api)
    return !1;
  const s = i[t.api];
  if (!s || !Object.hasOwn(r, s.selected))
    return !1;
  switch (s.selected) {
    case "openai":
      return !!s.source;
    case "textgenerationwebui":
      return !!s.type;
  }
  return !1;
}, br = SillyTavern.getContext(), $0 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: o,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, h] = $.useState(t ?? ""), [m, y] = $.useState(Date.now()), { isEnabled: _, profiles: b, connectApiMap: g } = $.useMemo(() => {
    var x, T;
    return (x = br.extensionSettings.disabledExtensions) != null && x.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((T = br.extensionSettings.connectionManager) == null ? void 0 : T.profiles) ?? [],
      connectApiMap: br.CONNECT_API_MAP
    };
  }, [m]);
  $.useEffect(() => {
    if (!_) return;
    const x = (D) => {
      Zs(D, r, g) && (y(Date.now()), o?.(D));
    }, T = (D, C) => {
      const N = Zs(D, r, g), M = Zs(C, r, g);
      (N || M) && y(Date.now()), u?.(D, C), p === D.id && !M && (h(""), s?.(void 0));
    }, A = (D) => {
      Zs(D, r, g) && (y(Date.now()), f?.(D), p === D.id && (h(""), s?.(void 0)));
    };
    return br.eventSource.on("CONNECTION_PROFILE_CREATED", x), br.eventSource.on("CONNECTION_PROFILE_UPDATED", T), br.eventSource.on("CONNECTION_PROFILE_DELETED", A), () => {
      br.eventSource.removeListener("CONNECTION_PROFILE_CREATED", x), br.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", T), br.eventSource.removeListener("CONNECTION_PROFILE_DELETED", A);
    };
  }, [_, p, r, g, s, o, u, f]);
  const d = $.useMemo(() => {
    if (!_) return [];
    const x = b.filter((A) => Zs(A, r, g)), T = {};
    for (const [A, D] of Object.entries(r))
      T[A] = { label: D, profiles: [] };
    for (const A of x) {
      const D = g[A.api];
      T[D.selected] && T[D.selected].profiles.push(A);
    }
    for (const A of Object.values(T))
      A.profiles.sort((D, C) => (D.name ?? "").localeCompare(C.name ?? ""));
    return Object.values(T).filter((A) => A.profiles.length > 0);
  }, [_, b, r, g]), S = $.useCallback(
    (x) => {
      const T = x.target.value;
      h(T);
      const A = b.find((D) => D.id === T);
      s?.(A);
    },
    [b, s]
  );
  return _ ? /* @__PURE__ */ E.jsxs(_u, { value: p, onChange: S, children: [
    /* @__PURE__ */ E.jsx("option", { value: "", children: i }),
    d.map((x) => /* @__PURE__ */ E.jsx("optgroup", { label: x.label, children: x.profiles.map((T) => /* @__PURE__ */ E.jsx("option", { value: T.id, children: T.name }, T.id)) }, x.label))
  ] }) : /* @__PURE__ */ E.jsx(_u, { disabled: !0, value: "", children: /* @__PURE__ */ E.jsx("option", { children: "Connection Manager disabled" }) });
}, ZE = fu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: o, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: h,
      enabled: m,
      canDelete: y = !0,
      canToggle: _ = !0,
      showSelect: b = !0,
      canSelect: g = !0,
      selectOptions: d = [],
      selectValue: S
    } = t, x = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !m ? 0.6 : 1
    }, T = { cursor: "pointer", flexShrink: 0 }, A = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ E.jsxs("li", { className: "sortable-list-item", style: x, "data-id": p, children: [
      /* @__PURE__ */ E.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ E.jsx(
        "span",
        {
          className: "item-label",
          style: {
            flexGrow: 1,
            marginRight: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: h
        }
      ),
      s && b && g && /* @__PURE__ */ E.jsx(
        _u,
        {
          value: S,
          onChange: (D) => f(p, D.target.value),
          disabled: !m,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ E.jsx("option", { disabled: !0, children: "--" }) : d.map((D) => /* @__PURE__ */ E.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!b || !g) && /* @__PURE__ */ E.jsx("span", { style: A }),
      r && _ && /* @__PURE__ */ E.jsx(
        de,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${m ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...T,
            marginRight: "10px",
            fontSize: "1.2em",
            color: m ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => o(p)
        }
      ),
      r && !_ && /* @__PURE__ */ E.jsx("span", { style: A }),
      i && y && /* @__PURE__ */ E.jsx(
        de,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...T,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(p)
        }
      ),
      i && !y && /* @__PURE__ */ E.jsx("span", { style: { ...A, marginRight: 0 } })
    ] });
  }
), GE = ({
  items: t,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: s = !1,
  showSelectInput: o = !1,
  sortableJsOptions: u = {}
}) => {
  const f = $.useRef(null), p = $.useRef(null);
  $.useEffect(() => (f.current && (p.current = De.create(f.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...u,
    onEnd: (_) => {
      const { oldIndex: b, newIndex: g } = _;
      if (b === void 0 || g === void 0 || b === g)
        return;
      const d = Array.from(t), [S] = d.splice(b, 1);
      d.splice(g, 0, S), r(d);
    }
  })), () => {
    var _;
    (_ = p.current) == null || _.destroy(), p.current = null;
  }), [t, r, u]);
  const h = (_) => {
    r(t.map((b) => b.id === _ ? { ...b, enabled: !b.enabled } : b));
  }, m = (_) => {
    r(t.filter((b) => b.id !== _));
  }, y = (_, b) => {
    r(t.map((g) => g.id === _ ? { ...g, selectValue: b } : g));
  };
  return /* @__PURE__ */ E.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ E.jsx(
    ZE,
    {
      item: _,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: o,
      onToggle: h,
      onDelete: m,
      onSelectChange: y
    },
    _.id
  )) });
}, eu = ({
  items: t,
  value: r,
  onChange: i,
  placeholder: s = "Select items...",
  closeOnSelect: o = !1,
  multiple: u = !0,
  disabled: f = !1,
  onBeforeSelection: p,
  enableSearch: h = !1,
  searchPlaceholder: m = "Search...",
  searchNoResultsText: y = "No results found",
  searchFuseOptions: _,
  inputClasses: b,
  containerClasses: g
}) => {
  const [d, S] = $.useState(!1), [x, T] = $.useState(""), A = $.useRef(null);
  $.useEffect(() => {
    const k = (H) => {
      A.current && !A.current.contains(H.target) && S(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), $.useEffect(() => {
    d || T("");
  }, [d]);
  const D = $.useMemo(() => {
    if (!h) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ..._
    };
    return new Ii(t, k);
  }, [t, h, _]), C = $.useMemo(() => !h || !x.trim() || !D ? t : D.search(x.trim()).map((k) => k.item), [t, x, h, D]), N = async (k) => {
    let H;
    u ? H = r.includes(k) ? r.filter((X) => X !== k) : [...r, k] : H = r.includes(k) ? [] : [k], !(p && !await Promise.resolve(p(r, H))) && (i(H), o && S(!1));
  }, M = $.useMemo(() => {
    var k;
    return r.length === 0 ? s : r.length === 1 ? ((k = t.find((H) => H.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      ref: A,
      className: `fancy-dropdown-container ${g ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ E.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !f && S(!d),
            style: {
              padding: "8px 12px",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ E.jsx("span", { className: "fancy-dropdown-trigger-text", children: M }),
              /* @__PURE__ */ E.jsx("i", { className: `fas ${d ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        d && /* @__PURE__ */ E.jsxs(
          "div",
          {
            className: "fancy-dropdown-list",
            style: {
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              maxHeight: "300px",
              zIndex: 1050,
              border: "1px solid var(--border-color)",
              borderTop: "none",
              backgroundColor: "var(--bg-color-popup, var(--bg-color-secondary, var(--greyCAIbg, var(--grey30))))",
              color: "var(--text-color)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 4px 8px var(--black50a)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            },
            children: [
              h && /* @__PURE__ */ E.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ E.jsx(
                    HE,
                    {
                      type: "text",
                      placeholder: m,
                      value: x,
                      onChange: (k) => T(k.target.value),
                      autoFocus: !0,
                      className: b
                    }
                  )
                }
              ),
              /* @__PURE__ */ E.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: C.length > 0 ? C.map((k) => /* @__PURE__ */ E.jsx(
                VE,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: N
                },
                k.value
              )) : /* @__PURE__ */ E.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: y
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, VE = fu.memo(({ item: t, isSelected: r, onClick: i }) => {
  const [s, o] = $.useState(!1);
  return /* @__PURE__ */ E.jsxs(
    "li",
    {
      onClick: () => i(t.value),
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      style: {
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : s ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ E.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ E.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), md = SillyTavern.getContext(), Su = ({
  value: t,
  items: r,
  readOnlyValues: i = [],
  label: s,
  onChange: o,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: p = !1,
  enableDelete: h = !1,
  onCreate: m,
  onRename: y,
  onDelete: _,
  buttons: b
}) => {
  const g = $.useMemo(() => r.find((A) => A.value === t), [r, t]), d = $.useCallback((A) => A ? i.includes(A) : !1, [i]), S = async () => {
    const A = await md.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!A || A.trim() === "") return;
    const D = A.trim();
    if (r.some((N) => N.value === D)) {
      await Ne("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: D, label: D };
    if (m) {
      const N = await Promise.resolve(m(D));
      if (!N.confirmed) return;
      N.value && (typeof N.value == "string" ? C = { value: N.value, label: N.value } : C = N.value);
    }
    u([...r, C]), o(C.value, t);
  }, x = async () => {
    if (!g) {
      await Ne("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(g.value)) {
      await Ne("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const A = await md.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${g.label}":`,
      g.label
    );
    if (!A || A.trim() === "" || A.trim() === g.value) return;
    const D = A.trim();
    if (r.some((M) => M.value === D)) {
      await Ne("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: D, label: D };
    if (y) {
      const M = await Promise.resolve(y(g.value, D));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? C = { value: M.value, label: M.value } : C = M.value);
    }
    const N = r.map((M) => M.value === g.value ? C : M);
    u(N), o(C.value, t);
  }, T = async () => {
    var A;
    if (!g) {
      await Ne("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(g.value)) {
      await Ne("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await md.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${g.label}"?`
    ) || _ && !await Promise.resolve(_(g.value)))
      return;
    const D = r.findIndex((M) => M.value === g.value), C = r.filter((M) => M.value !== g.value);
    u(C);
    let N;
    if (C.length > 0) {
      const M = Math.min(D, C.length - 1);
      N = (A = C[M]) == null ? void 0 : A.value;
    }
    o(N, t);
  };
  return /* @__PURE__ */ E.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ E.jsx(_u, { value: t ?? "", onChange: (A) => o(A.target.value, t), children: r.map((A) => /* @__PURE__ */ E.jsx("option", { value: A.value, children: A.label }, A.value)) }),
    f && /* @__PURE__ */ E.jsx(
      de,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ E.jsx(
      de,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: x,
        disabled: !g,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ E.jsx(
      de,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: T,
        disabled: !g,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    b?.map((A) => /* @__PURE__ */ E.jsx(
      de,
      {
        className: A.icon,
        title: A.title,
        onClick: A.onClick,
        disabled: A.disabled,
        "data-i18n": A.i18n ? `[title]${A.i18n}` : void 0
      },
      A.key
    ))
  ] });
}, Q0 = () => {
  const [, t] = $.useState(0);
  return $.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, gd = SillyTavern.getContext(), YE = () => {
  const t = Q0(), r = bt.getSettings(), [i, s] = $.useState(Wo[0]), o = $.useCallback(
    (C) => {
      const N = bt.getSettings();
      C(N), bt.saveSettings(), t();
    },
    [t]
  ), u = $.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((C) => ({ value: C, label: C })),
    [r.mainContextTemplatePresets]
  ), f = $.useMemo(
    () => Object.entries(r.prompts).map(([C, N]) => ({
      value: C,
      label: `${N.label} (${C})`
    })),
    [r.prompts]
  ), p = $.useMemo(() => {
    const C = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return C ? C.prompts.map((N) => {
      const M = r.prompts[N.promptName], k = M ? `${M.label} (${N.promptName})` : N.promptName;
      return {
        id: N.promptName,
        label: k,
        enabled: N.enabled,
        selectValue: N.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), h = (C) => {
    o((N) => {
      N.mainContextTemplatePreset = C ?? "default";
    });
  }, m = (C) => {
    o((N) => {
      const M = {};
      C.forEach((k) => {
        M[k.value] = N.mainContextTemplatePresets[k.value] ?? structuredClone(
          N.mainContextTemplatePresets[N.mainContextTemplatePreset] ?? N.mainContextTemplatePresets.default
        );
      }), N.mainContextTemplatePresets = M;
    });
  }, y = (C) => {
    o((N) => {
      const M = C.map((X) => ({
        promptName: X.id,
        enabled: X.enabled,
        role: X.selectValue ?? "user"
      })), k = {
        ...N.mainContextTemplatePresets[N.mainContextTemplatePreset],
        prompts: M
      }, H = {
        ...N.mainContextTemplatePresets,
        [N.mainContextTemplatePreset]: k
      };
      N.mainContextTemplatePresets = H;
    });
  }, _ = async () => {
    await gd.Popup.show.confirm("Restore default", "Are you sure?") && o((N) => {
      N.mainContextTemplatePresets = {
        ...N.mainContextTemplatePresets,
        default: structuredClone(X0.mainContextTemplatePresets.default)
      }, N.mainContextTemplatePreset === "default" ? t() : N.mainContextTemplatePreset = "default";
    });
  }, b = (C) => {
    o((N) => {
      const M = C.map((P) => P.value);
      Object.keys(N.prompts).filter((P) => !M.includes(P)).forEach((P) => {
        Object.values(N.mainContextTemplatePresets).forEach((Y) => {
          Y.prompts = Y.prompts.filter((K) => K.promptName !== P);
        });
      });
      const X = {};
      C.forEach((P) => {
        X[P.value] = N.prompts[P.value] ?? { content: "", isDefault: !1, label: P.label };
      }), N.prompts = X;
    });
  }, g = (C) => {
    const N = Ld(C);
    return N ? r.prompts[N] ? (Ne("error", `Prompt name already exists: ${N}`), { confirmed: !1 }) : (o((M) => {
      M.prompts = {
        ...M.prompts,
        [N]: { content: M.prompts[i]?.content ?? "", isDefault: !1, label: C }
      };
      const k = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([H, X]) => [
          H,
          {
            ...X,
            prompts: [...X.prompts, { enabled: !0, promptName: N, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = k;
    }), s(N), { confirmed: !0, value: N }) : (Ne("error", `Invalid prompt name: ${C}`), { confirmed: !1 });
  }, d = (C, N) => {
    const M = Ld(N);
    return M ? r.prompts[M] ? (Ne("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (o((k) => {
      const { [C]: H, ...X } = k.prompts;
      k.prompts = {
        ...X,
        [M]: { ...H, label: N }
      };
      const P = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([Y, K]) => [
          Y,
          {
            ...K,
            prompts: K.prompts.map((ue) => ue.promptName === C ? { ...ue, promptName: M } : ue)
          }
        ])
      );
      k.mainContextTemplatePresets = P;
    }), s(M), { confirmed: !0, value: M }) : (Ne("error", `Invalid prompt name: ${N}`), { confirmed: !1 });
  }, S = (C) => {
    const N = C.target.value;
    o((M) => {
      const k = M.prompts[i];
      k && (M.prompts = {
        ...M.prompts,
        [i]: {
          ...k,
          // Copy existing properties
          content: N,
          isDefault: Wo.includes(i) ? tt[i] === N : !1
        }
      });
    });
  }, x = async () => {
    const C = r.prompts[i];
    if (!C) return Ne("warning", "No prompt selected.");
    await gd.Popup.show.confirm("Restore Default", `Restore default for "${C.label}"?`) && o((M) => {
      M.prompts = {
        ...M.prompts,
        [i]: {
          ...M.prompts[i],
          content: tt[i]
        }
      };
    });
  }, T = async () => {
    await gd.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (bt.resetSettings(), t(), Ne("success", "Settings have been reset."));
  }, A = r.prompts[i], D = Wo.includes(i);
  return /* @__PURE__ */ E.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ E.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ E.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ E.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ E.jsx(
          de,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: _
          }
        )
      ] }),
      /* @__PURE__ */ E.jsx(
        Su,
        {
          label: "Template",
          items: u,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: h,
          onItemsChange: m,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ E.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ E.jsx(
        GE,
        {
          items: p,
          onItemsChange: y,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ E.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ E.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ E.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ E.jsx("span", { children: "Prompt Templates" }),
        D && /* @__PURE__ */ E.jsx(
          de,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: x
          }
        )
      ] }),
      /* @__PURE__ */ E.jsx(
        Su,
        {
          label: "Prompt",
          items: f,
          value: i,
          readOnlyValues: Wo,
          onChange: (C) => s(C ?? ""),
          onItemsChange: b,
          onCreate: g,
          onRename: d,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ E.jsx(
        $t,
        {
          value: A?.content ?? "",
          onChange: S,
          placeholder: "Edit the selected prompt template here...",
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ E.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ E.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ E.jsx(
        "input",
        {
          type: "checkbox",
          checked: r.showSaveAsWorldInfoEntry.show,
          onChange: (C) => o((N) => {
            N.showSaveAsWorldInfoEntry.show = C.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ E.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ E.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ E.jsxs(de, { className: "danger_button", style: { width: "auto" }, onClick: T, children: [
      /* @__PURE__ */ E.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, wy = ({
  fieldId: t,
  label: r,
  value: i,
  prompt: s,
  large: o = !1,
  rows: u = 3,
  promptEnabled: f = !0,
  isDraft: p = !1,
  isGenerating: h = !1,
  onValueChange: m,
  onPromptChange: y,
  onGenerate: _,
  onContinue: b,
  onClear: g,
  onCompare: d,
  onDelete: S,
  onOpenReviseSessions: x
}) => /* @__PURE__ */ E.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ E.jsx("label", { children: r }),
  /* @__PURE__ */ E.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ E.jsx($t, { value: i, onChange: (T) => m(t, T.target.value), rows: u }),
    /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ E.jsx(de, { onClick: () => _(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ E.jsx(de, { onClick: () => b(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ E.jsx(de, { onClick: () => g(t), title: "Clear field content", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-eraser" }) }),
      x && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ E.jsx(de, { onClick: () => x(t), title: "Revise with AI chat", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && d && /* @__PURE__ */ E.jsx(de, { onClick: () => d(t), title: "Compare with loaded character", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && S && /* @__PURE__ */ E.jsx(de, { onClick: () => S(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ E.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ E.jsx(
    $t,
    {
      value: s,
      onChange: (T) => y(t, T.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), XE = SillyTavern.getContext(), $E = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: o,
  isGenerating: u
}) => {
  const [f, p] = $.useState(0);
  $.useEffect(() => {
    f >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, f]);
  const h = () => {
    const b = [...t, { value: "", prompt: "" }];
    r(b), p(b.length - 1);
  }, m = async () => {
    if (t.length === 0) return;
    if (await XE.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const g = t.filter((d, S) => S !== f);
      r(g);
    }
  }, y = (b, g, d) => {
    const S = [...t];
    S[b][g] = d, r(S);
  }, _ = t[f];
  return /* @__PURE__ */ E.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ E.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ E.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((b, g) => /* @__PURE__ */ E.jsxs(
            de,
            {
              onClick: () => p(g),
              className: `menu_button ${g === f ? "active" : ""}`,
              children: [
                "Greeting ",
                g + 1
              ]
            },
            g
          ))
        }
      ),
      /* @__PURE__ */ E.jsxs(de, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ E.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ E.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ E.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ E.jsx(
          $t,
          {
            value: _?.value ?? "",
            onChange: (b) => y(f, "value", b.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ E.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ E.jsx(
          $t,
          {
            value: _?.prompt ?? "",
            onChange: (b) => y(f, "prompt", b.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ E.jsx(de, { onClick: () => i(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ E.jsx(de, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ E.jsx(
          de,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ E.jsx(de, { onClick: () => o(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ E.jsx(
          de,
          {
            onClick: m,
            disabled: u,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        )
      ] })
    ] })
  ] });
};
var ra = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.diff = function(r, i, s) {
      s === void 0 && (s = {});
      var o;
      typeof s == "function" ? (o = s, s = {}) : "callback" in s && (o = s.callback);
      var u = this.castInput(r, s), f = this.castInput(i, s), p = this.removeEmpty(this.tokenize(u, s)), h = this.removeEmpty(this.tokenize(f, s));
      return this.diffWithOptionsObj(p, h, s, o);
    }, t.prototype.diffWithOptionsObj = function(r, i, s, o) {
      var u = this, f, p = function(C) {
        if (C = u.postProcess(C, s), o) {
          setTimeout(function() {
            o(C);
          }, 0);
          return;
        } else
          return C;
      }, h = i.length, m = r.length, y = 1, _ = h + m;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var b = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, g = Date.now() + b, d = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(d[0], i, r, 0, s);
      if (d[0].oldPos + 1 >= m && S + 1 >= h)
        return p(this.buildValues(d[0].lastComponent, i, r));
      var x = -1 / 0, T = 1 / 0, A = function() {
        for (var C = Math.max(x, -y); C <= Math.min(T, y); C += 2) {
          var N = void 0, M = d[C - 1], k = d[C + 1];
          M && (d[C - 1] = void 0);
          var H = !1;
          if (k) {
            var X = k.oldPos - C;
            H = k && 0 <= X && X < h;
          }
          var P = M && M.oldPos + 1 < m;
          if (!H && !P) {
            d[C] = void 0;
            continue;
          }
          if (!P || H && M.oldPos < k.oldPos ? N = u.addToPath(k, !0, !1, 0, s) : N = u.addToPath(M, !1, !0, 1, s), S = u.extractCommon(N, i, r, C, s), N.oldPos + 1 >= m && S + 1 >= h)
            return p(u.buildValues(N.lastComponent, i, r)) || !0;
          d[C] = N, N.oldPos + 1 >= m && (T = Math.min(T, C - 1)), S + 1 >= h && (x = Math.max(x, C + 1));
        }
        y++;
      };
      if (o)
        (function C() {
          setTimeout(function() {
            if (y > _ || Date.now() > g)
              return o(void 0);
            A() || C();
          }, 0);
        })();
      else
        for (; y <= _ && Date.now() <= g; ) {
          var D = A();
          if (D)
            return D;
        }
    }, t.prototype.addToPath = function(r, i, s, o, u) {
      var f = r.lastComponent;
      return f && !u.oneChangePerToken && f.added === i && f.removed === s ? {
        oldPos: r.oldPos + o,
        lastComponent: { count: f.count + 1, added: i, removed: s, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + o,
        lastComponent: { count: 1, added: i, removed: s, previousComponent: f }
      };
    }, t.prototype.extractCommon = function(r, i, s, o, u) {
      for (var f = i.length, p = s.length, h = r.oldPos, m = h - o, y = 0; m + 1 < f && h + 1 < p && this.equals(s[h + 1], i[m + 1], u); )
        m++, h++, y++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return y && !u.oneChangePerToken && (r.lastComponent = { count: y, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = h, m;
    }, t.prototype.equals = function(r, i, s) {
      return s.comparator ? s.comparator(r, i) : r === i || !!s.ignoreCase && r.toLowerCase() === i.toLowerCase();
    }, t.prototype.removeEmpty = function(r) {
      for (var i = [], s = 0; s < r.length; s++)
        r[s] && i.push(r[s]);
      return i;
    }, t.prototype.castInput = function(r, i) {
      return r;
    }, t.prototype.tokenize = function(r, i) {
      return Array.from(r);
    }, t.prototype.join = function(r) {
      return r.join("");
    }, t.prototype.postProcess = function(r, i) {
      return r;
    }, Object.defineProperty(t.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.buildValues = function(r, i, s) {
      for (var o = [], u; r; )
        o.push(r), u = r.previousComponent, delete r.previousComponent, r = u;
      o.reverse();
      for (var f = o.length, p = 0, h = 0, m = 0; p < f; p++) {
        var y = o[p];
        if (y.removed)
          y.value = this.join(s.slice(m, m + y.count)), m += y.count;
        else {
          if (!y.added && this.useLongestToken) {
            var _ = i.slice(h, h + y.count);
            _ = _.map(function(b, g) {
              var d = s[m + g];
              return d.length > b.length ? d : b;
            }), y.value = this.join(_);
          } else
            y.value = this.join(i.slice(h, h + y.count));
          h += y.count, y.added || (m += y.count);
        }
      }
      return o;
    }, t;
  })()
), QE = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), KE = (
  /** @class */
  (function(t) {
    QE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(ra)
);
new KE();
function Ay(t, r) {
  var i;
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[i] != r[i])
      return t.slice(0, i);
  return t.slice(0, i);
}
function Ny(t, r) {
  var i;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[t.length - (i + 1)] != r[r.length - (i + 1)])
      return t.slice(-i);
  return t.slice(-i);
}
function Pd(t, r, i) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + t.slice(r.length);
}
function Id(t, r, i) {
  if (!r)
    return t + i;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + i;
}
function Gs(t, r) {
  return Pd(t, r, "");
}
function tu(t, r) {
  return Id(t, r, "");
}
function Ty(t, r) {
  return r.slice(0, JE(t, r));
}
function JE(t, r) {
  var i = 0;
  t.length > r.length && (i = t.length - r.length);
  var s = r.length;
  t.length < r.length && (s = t.length);
  var o = Array(s), u = 0;
  o[0] = 0;
  for (var f = 1; f < s; f++) {
    for (r[f] == r[u] ? o[f] = o[u] : o[f] = u; u > 0 && r[f] != r[u]; )
      u = o[u];
    r[f] == r[u] && u++;
  }
  u = 0;
  for (var p = i; p < t.length; p++) {
    for (; u > 0 && t[p] != r[u]; )
      u = o[u];
    t[p] == r[u] && u++;
  }
  return u;
}
function Vs(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function Kr(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var K0 = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), xu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", WE = new RegExp("[".concat(xu, "]+|\\s+|[^").concat(xu, "]"), "ug"), eC = (
  /** @class */
  (function(t) {
    K0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(i, s, o) {
      return o.ignoreCase && (i = i.toLowerCase(), s = s.toLowerCase()), i.trim() === s.trim();
    }, r.prototype.tokenize = function(i, s) {
      s === void 0 && (s = {});
      var o;
      if (s.intlSegmenter) {
        var u = s.intlSegmenter;
        if (u.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        o = Array.from(u.segment(i), function(h) {
          return h.segment;
        });
      } else
        o = i.match(WE) || [];
      var f = [], p = null;
      return o.forEach(function(h) {
        /\s/.test(h) ? p == null ? f.push(h) : f.push(f.pop() + h) : p != null && /\s/.test(p) ? f[f.length - 1] == p ? f.push(f.pop() + h) : f.push(p + h) : f.push(h), p = h;
      }), f;
    }, r.prototype.join = function(i) {
      return i.map(function(s, o) {
        return o == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(i, s) {
      if (!i || s.oneChangePerToken)
        return i;
      var o = null, u = null, f = null;
      return i.forEach(function(p) {
        p.added ? u = p : p.removed ? f = p : ((u || f) && Oy(o, f, u, p), o = p, u = null, f = null);
      }), (u || f) && Oy(o, f, u, null), i;
    }, r;
  })(ra)
), tC = new eC();
function J0(t, r, i) {
  return tC.diff(t, r, i);
}
function Oy(t, r, i, s) {
  if (r && i) {
    var o = Kr(r.value), u = Vs(r.value), f = Kr(i.value), p = Vs(i.value);
    if (t) {
      var h = Ay(o, f);
      t.value = Id(t.value, f, h), r.value = Gs(r.value, h), i.value = Gs(i.value, h);
    }
    if (s) {
      var m = Ny(u, p);
      s.value = Pd(s.value, p, m), r.value = tu(r.value, m), i.value = tu(i.value, m);
    }
  } else if (i) {
    if (t) {
      var y = Kr(i.value);
      i.value = i.value.substring(y.length);
    }
    if (s) {
      var y = Kr(s.value);
      s.value = s.value.substring(y.length);
    }
  } else if (t && s) {
    var _ = Kr(s.value), b = Kr(r.value), g = Vs(r.value), d = Ay(_, b);
    r.value = Gs(r.value, d);
    var S = Ny(Gs(_, d), g);
    r.value = tu(r.value, S), s.value = Pd(s.value, _, S), t.value = Id(t.value, _, _.slice(0, _.length - S.length));
  } else if (s) {
    var x = Kr(s.value), T = Vs(r.value), A = Ty(T, x);
    r.value = tu(r.value, A);
  } else if (t) {
    var D = Vs(t.value), C = Kr(r.value), A = Ty(D, C);
    r.value = Gs(r.value, A);
  }
}
var nC = (
  /** @class */
  (function(t) {
    K0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(xu, "]+|[^\\S\\n\\r]+|[^").concat(xu, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(ra)
);
new nC();
var rC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), aC = (
  /** @class */
  (function(t) {
    rC(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = W0, i;
    }
    return r.prototype.equals = function(i, s, o) {
      return o.ignoreWhitespace ? ((!o.newlineIsToken || !i.includes(`
`)) && (i = i.trim()), (!o.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : o.ignoreNewlineAtEof && !o.newlineIsToken && (i.endsWith(`
`) && (i = i.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), t.prototype.equals.call(this, i, s, o);
    }, r;
  })(ra)
);
new aC();
function W0(t, r) {
  r.stripTrailingCr && (t = t.replace(/\r\n/g, `
`));
  var i = [], s = t.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var o = 0; o < s.length; o++) {
    var u = s[o];
    o % 2 && !r.newlineIsToken ? i[i.length - 1] += u : i.push(u);
  }
  return i;
}
var iC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), sC = (
  /** @class */
  (function(t) {
    iC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ra)
);
new sC();
var lC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), oC = (
  /** @class */
  (function(t) {
    lC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(ra)
);
new oC();
var uC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), cC = (
  /** @class */
  (function(t) {
    uC(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = W0, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, s) {
      var o = s.undefinedReplacement, u = s.stringifyReplacer, f = u === void 0 ? function(p, h) {
        return typeof h > "u" ? o : h;
      } : u;
      return typeof i == "string" ? i : JSON.stringify(Bd(i, null, null, f), null, "  ");
    }, r.prototype.equals = function(i, s, o) {
      return t.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(ra)
);
new cC();
function Bd(t, r, i, s, o) {
  r = r || [], i = i || [], s && (t = s(o === void 0 ? "" : o, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return i[u];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), i.push(f), u = 0; u < t.length; u += 1)
      f[u] = Bd(t[u], r, i, s, String(u));
    return r.pop(), i.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, i.push(f);
    var p = [], h;
    for (h in t)
      Object.prototype.hasOwnProperty.call(t, h) && p.push(h);
    for (p.sort(), u = 0; u < p.length; u += 1)
      h = p[u], f[h] = Bd(t[h], r, i, s, h);
    r.pop(), i.pop();
  } else
    f = t;
  return f;
}
var fC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), dC = (
  /** @class */
  (function(t) {
    fC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.slice();
    }, r.prototype.join = function(i) {
      return i;
    }, r.prototype.removeEmpty = function(i) {
      return i;
    }, r;
  })(ra)
);
new dC();
const hC = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = $.useMemo(() => {
    const o = J0(t, r);
    let u = "", f = "";
    return o.forEach((p) => {
      const m = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += m), p.removed || (f += m);
    }), { originalHtml: u, newHtml: f };
  }, [t, r]);
  return /* @__PURE__ */ E.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ E.jsxs("h3", { children: [
      "Compare Changes for: ",
      i
    ] }),
    /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ E.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ E.jsx("h4", { children: "Loaded Character Content" }),
        /* @__PURE__ */ E.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ E.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ E.jsx("h4", { children: "Current Content" }),
        /* @__PURE__ */ E.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.newHtml }
          }
        )
      ] })
    ] })
  ] });
};
function te(t, r, i) {
  function s(p, h) {
    var m;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (m = p._zod).traits ?? (m.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, h);
    for (const y in f.prototype)
      y in p || Object.defineProperty(p, y, { value: f.prototype[y].bind(p) });
    p._zod.constr = f, p._zod.def = h;
  }
  const o = i?.Parent ?? Object;
  class u extends o {
  }
  Object.defineProperty(u, "name", { value: t });
  function f(p) {
    var h;
    const m = i?.Parent ? new u() : this;
    s(m, p), (h = m._zod).deferred ?? (h.deferred = []);
    for (const y of m._zod.deferred)
      y();
    return m;
  }
  return Object.defineProperty(f, "init", { value: s }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (p) => i?.Parent && p instanceof i.Parent ? !0 : p?._zod?.traits?.has(t)
  }), Object.defineProperty(f, "name", { value: t }), f;
}
class Li extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class e1 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const t1 = {};
function Ra(t) {
  return t1;
}
function n1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, o]) => r.indexOf(+s) === -1).map(([s, o]) => o);
}
function Ud(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function ah(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function ih(t) {
  return t == null;
}
function sh(t) {
  const r = t.startsWith("^") ? 1 : 0, i = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, i);
}
function pC(t, r) {
  const i = (t.toString().split(".")[1] || "").length, s = r.toString();
  let o = (s.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (o = Number.parseInt(h[1]));
  }
  const u = i > o ? i : o, f = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const Dy = Symbol("evaluating");
function at(t, r, i) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== Dy)
        return s === void 0 && (s = Dy, s = i()), s;
    },
    set(o) {
      Object.defineProperty(t, r, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function La(t, r, i) {
  Object.defineProperty(t, r, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Pa(...t) {
  const r = {};
  for (const i of t) {
    const s = Object.getOwnPropertyDescriptors(i);
    Object.assign(r, s);
  }
  return Object.defineProperties({}, r);
}
function My(t) {
  return JSON.stringify(t);
}
const r1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Eu(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const mC = ah(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function rl(t) {
  if (Eu(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(Eu(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function a1(t) {
  return rl(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const gC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Tu(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function aa(t, r, i) {
  const s = new t._zod.constr(r ?? t._zod.def);
  return (!r || i?.parent) && (s._zod.parent = t), s;
}
function Ee(t) {
  const r = t;
  if (!r)
    return {};
  if (typeof r == "string")
    return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return delete r.message, typeof r.error == "string" ? { ...r, error: () => r.error } : r;
}
function vC(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const yC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function bC(t, r) {
  const i = t._zod.def, s = Pa(t._zod.def, {
    get shape() {
      const o = {};
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (o[u] = i.shape[u]);
      }
      return La(this, "shape", o), o;
    },
    checks: []
  });
  return aa(t, s);
}
function _C(t, r) {
  const i = t._zod.def, s = Pa(t._zod.def, {
    get shape() {
      const o = { ...t._zod.def.shape };
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete o[u];
      }
      return La(this, "shape", o), o;
    },
    checks: []
  });
  return aa(t, s);
}
function SC(t, r) {
  if (!rl(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = t._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = Pa(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape, ...r };
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return aa(t, o);
}
function xC(t, r) {
  if (!rl(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...r };
      return La(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return aa(t, i);
}
function EC(t, r) {
  const i = Pa(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...r._zod.def.shape };
      return La(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return aa(t, i);
}
function CC(t, r, i) {
  const s = Pa(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (i)
        for (const f in i) {
          if (!(f in o))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = t ? new t({
            type: "optional",
            innerType: o[f]
          }) : o[f]);
        }
      else
        for (const f in o)
          u[f] = t ? new t({
            type: "optional",
            innerType: o[f]
          }) : o[f];
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return aa(r, s);
}
function wC(t, r, i) {
  const s = Pa(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (i)
        for (const f in i) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = new t({
            type: "nonoptional",
            innerType: o[f]
          }));
        }
      else
        for (const f in o)
          u[f] = new t({
            type: "nonoptional",
            innerType: o[f]
          });
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return aa(r, s);
}
function ji(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let i = r; i < t.issues.length; i++)
    if (t.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function i1(t, r) {
  return r.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(t), i;
  });
}
function nu(t) {
  return typeof t == "string" ? t : t?.message;
}
function za(t, r, i) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const o = nu(t.inst?._zod.def?.error?.(t)) ?? nu(r?.error?.(t)) ?? nu(i.customError?.(t)) ?? nu(i.localeError?.(t)) ?? "Invalid input";
    s.message = o;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function lh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function al(...t) {
  const [r, i, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: s
  } : { ...r };
}
const s1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Ud, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, l1 = te("$ZodError", s1), o1 = te("$ZodError", s1, { Parent: Error });
function AC(t, r = (i) => i.message) {
  const i = {}, s = [];
  for (const o of t.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : s.push(r(o));
  return { formErrors: s, fieldErrors: i };
}
function NC(t, r = (i) => i.message) {
  const i = { _errors: [] }, s = (o) => {
    for (const u of o.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((f) => s({ issues: f }));
      else if (u.code === "invalid_key")
        s({ issues: u.issues });
      else if (u.code === "invalid_element")
        s({ issues: u.issues });
      else if (u.path.length === 0)
        i._errors.push(r(u));
      else {
        let f = i, p = 0;
        for (; p < u.path.length; ) {
          const h = u.path[p];
          p === u.path.length - 1 ? (f[h] = f[h] || { _errors: [] }, f[h]._errors.push(r(u))) : f[h] = f[h] || { _errors: [] }, f = f[h], p++;
        }
      }
  };
  return s(t), i;
}
const oh = (t) => (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise)
    throw new Li();
  if (f.issues.length) {
    const p = new (o?.Err ?? t)(f.issues.map((h) => za(h, u, Ra())));
    throw r1(p, o?.callee), p;
  }
  return f.value;
}, uh = (t) => async (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (o?.Err ?? t)(f.issues.map((h) => za(h, u, Ra())));
    throw r1(p, o?.callee), p;
  }
  return f.value;
}, Ou = (t) => (r, i, s) => {
  const o = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, o);
  if (u instanceof Promise)
    throw new Li();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? l1)(u.issues.map((f) => za(f, o, Ra())))
  } : { success: !0, data: u.value };
}, TC = /* @__PURE__ */ Ou(o1), Du = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, o);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => za(f, o, Ra())))
  } : { success: !0, data: u.value };
}, OC = /* @__PURE__ */ Du(o1), DC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return oh(t)(r, i, o);
}, MC = (t) => (r, i, s) => oh(t)(r, i, s), kC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return uh(t)(r, i, o);
}, jC = (t) => async (r, i, s) => uh(t)(r, i, s), RC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Ou(t)(r, i, o);
}, zC = (t) => (r, i, s) => Ou(t)(r, i, s), LC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Du(t)(r, i, o);
}, PC = (t) => async (r, i, s) => Du(t)(r, i, s), IC = /^[cC][^\s-]{8,}$/, BC = /^[0-9a-z]+$/, UC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, HC = /^[0-9a-vA-V]{20}$/, qC = /^[A-Za-z0-9]{27}$/, FC = /^[a-zA-Z0-9_-]{21}$/, ZC = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, GC = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ky = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, VC = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, YC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function XC() {
  return new RegExp(YC, "u");
}
const $C = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, QC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, KC = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, JC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, WC = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, u1 = /^[A-Za-z0-9_-]*$/, ew = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, tw = /^\+(?:[0-9]){6,14}[0-9]$/, c1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", nw = /* @__PURE__ */ new RegExp(`^${c1}$`);
function f1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function rw(t) {
  return new RegExp(`^${f1(t)}$`);
}
function aw(t) {
  const r = f1({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${c1}T(?:${s})$`);
}
const iw = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, sw = /^-?\d+$/, lw = /^-?\d+(?:\.\d+)?/, ow = /^[^A-Z]*$/, uw = /^[^a-z]*$/, ln = /* @__PURE__ */ te("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), d1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, h1 = /* @__PURE__ */ te("$ZodCheckLessThan", (t, r) => {
  ln.init(t, r);
  const i = d1[typeof r.value];
  t._zod.onattach.push((s) => {
    const o = s._zod.bag, u = (r.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < u && (r.inclusive ? o.maximum = r.value : o.exclusiveMaximum = r.value);
  }), t._zod.check = (s) => {
    (r.inclusive ? s.value <= r.value : s.value < r.value) || s.issues.push({
      origin: i,
      code: "too_big",
      maximum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), p1 = /* @__PURE__ */ te("$ZodCheckGreaterThan", (t, r) => {
  ln.init(t, r);
  const i = d1[typeof r.value];
  t._zod.onattach.push((s) => {
    const o = s._zod.bag, u = (r.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > u && (r.inclusive ? o.minimum = r.value : o.exclusiveMinimum = r.value);
  }), t._zod.check = (s) => {
    (r.inclusive ? s.value >= r.value : s.value > r.value) || s.issues.push({
      origin: i,
      code: "too_small",
      minimum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), cw = /* @__PURE__ */ te("$ZodCheckMultipleOf", (t, r) => {
  ln.init(t, r), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : pC(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), fw = /* @__PURE__ */ te("$ZodCheckNumberFormat", (t, r) => {
  ln.init(t, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [o, u] = yC[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = o, p.maximum = u, i && (p.pattern = sw);
  }), t._zod.check = (f) => {
    const p = f.value;
    if (i) {
      if (!Number.isInteger(p)) {
        f.issues.push({
          expected: s,
          format: r.format,
          code: "invalid_type",
          continue: !1,
          input: p,
          inst: t
        });
        return;
      }
      if (!Number.isSafeInteger(p)) {
        p > 0 ? f.issues.push({
          input: p,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !r.abort
        }) : f.issues.push({
          input: p,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !r.abort
        });
        return;
      }
    }
    p < o && f.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: t,
      continue: !r.abort
    }), p > u && f.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: u,
      inst: t
    });
  };
}), dw = /* @__PURE__ */ te("$ZodCheckMaxLength", (t, r) => {
  var i;
  ln.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !ih(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < o && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const o = s.value;
    if (o.length <= r.maximum)
      return;
    const f = lh(o);
    s.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: o,
      inst: t,
      continue: !r.abort
    });
  };
}), hw = /* @__PURE__ */ te("$ZodCheckMinLength", (t, r) => {
  var i;
  ln.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !ih(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > o && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const o = s.value;
    if (o.length >= r.minimum)
      return;
    const f = lh(o);
    s.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: o,
      inst: t,
      continue: !r.abort
    });
  };
}), pw = /* @__PURE__ */ te("$ZodCheckLengthEquals", (t, r) => {
  var i;
  ln.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !ih(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), t._zod.check = (s) => {
    const o = s.value, u = o.length;
    if (u === r.length)
      return;
    const f = lh(o), p = u > r.length;
    s.issues.push({
      origin: f,
      ...p ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Mu = /* @__PURE__ */ te("$ZodCheckStringFormat", (t, r) => {
  var i, s;
  ln.init(t, r), t._zod.onattach.push((o) => {
    const u = o._zod.bag;
    u.format = r.format, r.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r.pattern));
  }), r.pattern ? (i = t._zod).check ?? (i.check = (o) => {
    r.pattern.lastIndex = 0, !r.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: o.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: t,
      continue: !r.abort
    });
  }) : (s = t._zod).check ?? (s.check = () => {
  });
}), mw = /* @__PURE__ */ te("$ZodCheckRegex", (t, r) => {
  Mu.init(t, r), t._zod.check = (i) => {
    r.pattern.lastIndex = 0, !r.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: r.pattern.toString(),
      inst: t,
      continue: !r.abort
    });
  };
}), gw = /* @__PURE__ */ te("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = ow), Mu.init(t, r);
}), vw = /* @__PURE__ */ te("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = uw), Mu.init(t, r);
}), yw = /* @__PURE__ */ te("$ZodCheckIncludes", (t, r) => {
  ln.init(t, r);
  const i = Tu(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
  r.pattern = s, t._zod.onattach.push((o) => {
    const u = o._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (o) => {
    o.value.includes(r.includes, r.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: o.value,
      inst: t,
      continue: !r.abort
    });
  };
}), bw = /* @__PURE__ */ te("$ZodCheckStartsWith", (t, r) => {
  ln.init(t, r);
  const i = new RegExp(`^${Tu(r.prefix)}.*`);
  r.pattern ?? (r.pattern = i), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), t._zod.check = (s) => {
    s.value.startsWith(r.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), _w = /* @__PURE__ */ te("$ZodCheckEndsWith", (t, r) => {
  ln.init(t, r);
  const i = new RegExp(`.*${Tu(r.suffix)}$`);
  r.pattern ?? (r.pattern = i), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), t._zod.check = (s) => {
    s.value.endsWith(r.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Sw = /* @__PURE__ */ te("$ZodCheckOverwrite", (t, r) => {
  ln.init(t, r), t._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class xw {
  constructor(r = []) {
    this.content = [], this.indent = 0, this && (this.args = r);
  }
  indented(r) {
    this.indent += 1, r(this), this.indent -= 1;
  }
  write(r) {
    if (typeof r == "function") {
      r(this, { execution: "sync" }), r(this, { execution: "async" });
      return;
    }
    const s = r.split(`
`).filter((f) => f), o = Math.min(...s.map((f) => f.length - f.trimStart().length)), u = s.map((f) => f.slice(o)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of u)
      this.content.push(f);
  }
  compile() {
    const r = Function, i = this?.args, o = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new r(...i, o.join(`
`));
  }
}
const Ew = {
  major: 4,
  minor: 1,
  patch: 12
}, wt = /* @__PURE__ */ te("$ZodType", (t, r) => {
  var i;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = Ew;
  const s = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && s.unshift(t);
  for (const o of s)
    for (const u of o._zod.onattach)
      u(t);
  if (s.length === 0)
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const o = (f, p, h) => {
      let m = ji(f), y;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(f))
            continue;
        } else if (m)
          continue;
        const b = f.issues.length, g = _._zod.check(f);
        if (g instanceof Promise && h?.async === !1)
          throw new Li();
        if (y || g instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await g, f.issues.length !== b && (m || (m = ji(f, b)));
          });
        else {
          if (f.issues.length === b)
            continue;
          m || (m = ji(f, b));
        }
      }
      return y ? y.then(() => f) : f;
    }, u = (f, p, h) => {
      if (ji(f))
        return f.aborted = !0, f;
      const m = o(p, s, h);
      if (m instanceof Promise) {
        if (h.async === !1)
          throw new Li();
        return m.then((y) => t._zod.parse(y, h));
      }
      return t._zod.parse(m, h);
    };
    t._zod.run = (f, p) => {
      if (p.skipChecks)
        return t._zod.parse(f, p);
      if (p.direction === "backward") {
        const m = t._zod.parse({ value: f.value, issues: [] }, { ...p, skipChecks: !0 });
        return m instanceof Promise ? m.then((y) => u(y, f, p)) : u(m, f, p);
      }
      const h = t._zod.parse(f, p);
      if (h instanceof Promise) {
        if (p.async === !1)
          throw new Li();
        return h.then((m) => o(m, s, p));
      }
      return o(h, s, p);
    };
  }
  t["~standard"] = {
    validate: (o) => {
      try {
        const u = TC(t, o);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return OC(t, o).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ch = /* @__PURE__ */ te("$ZodString", (t, r) => {
  wt.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? iw(t._zod.bag), t._zod.parse = (i, s) => {
    if (r.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: t
    }), i;
  };
}), ot = /* @__PURE__ */ te("$ZodStringFormat", (t, r) => {
  Mu.init(t, r), ch.init(t, r);
}), Cw = /* @__PURE__ */ te("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = GC), ot.init(t, r);
}), ww = /* @__PURE__ */ te("$ZodUUID", (t, r) => {
  if (r.version) {
    const s = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (s === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = ky(s));
  } else
    r.pattern ?? (r.pattern = ky());
  ot.init(t, r);
}), Aw = /* @__PURE__ */ te("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = VC), ot.init(t, r);
}), Nw = /* @__PURE__ */ te("$ZodURL", (t, r) => {
  ot.init(t, r), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), o = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: ew.source,
        input: i.value,
        inst: t,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: i.value,
        inst: t,
        continue: !r.abort
      })), r.normalize ? i.value = o.href : i.value = s;
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), Tw = /* @__PURE__ */ te("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = XC()), ot.init(t, r);
}), Ow = /* @__PURE__ */ te("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = FC), ot.init(t, r);
}), Dw = /* @__PURE__ */ te("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = IC), ot.init(t, r);
}), Mw = /* @__PURE__ */ te("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = BC), ot.init(t, r);
}), kw = /* @__PURE__ */ te("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = UC), ot.init(t, r);
}), jw = /* @__PURE__ */ te("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = HC), ot.init(t, r);
}), Rw = /* @__PURE__ */ te("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = qC), ot.init(t, r);
}), zw = /* @__PURE__ */ te("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = aw(r)), ot.init(t, r);
}), Lw = /* @__PURE__ */ te("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = nw), ot.init(t, r);
}), Pw = /* @__PURE__ */ te("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = rw(r)), ot.init(t, r);
}), Iw = /* @__PURE__ */ te("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = ZC), ot.init(t, r);
}), Bw = /* @__PURE__ */ te("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = $C), ot.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), Uw = /* @__PURE__ */ te("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = QC), ot.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv6";
  }), t._zod.check = (i) => {
    try {
      new URL(`http://[${i.value}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: i.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), Hw = /* @__PURE__ */ te("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = KC), ot.init(t, r);
}), qw = /* @__PURE__ */ te("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = JC), ot.init(t, r), t._zod.check = (i) => {
    const s = i.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [o, u] = s;
      if (!u)
        throw new Error();
      const f = Number(u);
      if (`${f}` !== u)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: i.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
});
function m1(t) {
  if (t === "")
    return !0;
  if (t.length % 4 !== 0)
    return !1;
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}
const Fw = /* @__PURE__ */ te("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = WC), ot.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    m1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function Zw(t) {
  if (!u1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return m1(i);
}
const Gw = /* @__PURE__ */ te("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = u1), ot.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    Zw(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Vw = /* @__PURE__ */ te("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = tw), ot.init(t, r);
});
function Yw(t, r = null) {
  try {
    const i = t.split(".");
    if (i.length !== 3)
      return !1;
    const [s] = i;
    if (!s)
      return !1;
    const o = JSON.parse(atob(s));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || r && (!("alg" in o) || o.alg !== r));
  } catch {
    return !1;
  }
}
const Xw = /* @__PURE__ */ te("$ZodJWT", (t, r) => {
  ot.init(t, r), t._zod.check = (i) => {
    Yw(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), g1 = /* @__PURE__ */ te("$ZodNumber", (t, r) => {
  wt.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? lw, t._zod.parse = (i, s) => {
    if (r.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    const o = i.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return i;
    const u = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: t,
      ...u ? { received: u } : {}
    }), i;
  };
}), $w = /* @__PURE__ */ te("$ZodNumber", (t, r) => {
  fw.init(t, r), g1.init(t, r);
}), Qw = /* @__PURE__ */ te("$ZodUnknown", (t, r) => {
  wt.init(t, r), t._zod.parse = (i) => i;
}), Kw = /* @__PURE__ */ te("$ZodNever", (t, r) => {
  wt.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function jy(t, r, i) {
  t.issues.length && r.issues.push(...i1(i, t.issues)), r.value[i] = t.value;
}
const Jw = /* @__PURE__ */ te("$ZodArray", (t, r) => {
  wt.init(t, r), t._zod.parse = (i, s) => {
    const o = i.value;
    if (!Array.isArray(o))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: t
      }), i;
    i.value = Array(o.length);
    const u = [];
    for (let f = 0; f < o.length; f++) {
      const p = o[f], h = r.element._zod.run({
        value: p,
        issues: []
      }, s);
      h instanceof Promise ? u.push(h.then((m) => jy(m, i, f))) : jy(h, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Cu(t, r, i, s) {
  t.issues.length && r.issues.push(...i1(i, t.issues)), t.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = t.value;
}
function v1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = vC(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function y1(t, r, i, s, o, u) {
  const f = [], p = o.keySet, h = o.catchall._zod, m = h.def.type;
  for (const y of Object.keys(r)) {
    if (p.has(y))
      continue;
    if (m === "never") {
      f.push(y);
      continue;
    }
    const _ = h.run({ value: r[y], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((b) => Cu(b, i, y, r))) : Cu(_, i, y, r);
  }
  return f.length && i.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const Ww = /* @__PURE__ */ te("$ZodObject", (t, r) => {
  if (wt.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const p = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const h = { ...p };
        return Object.defineProperty(r, "shape", {
          value: h
        }), h;
      }
    });
  }
  const s = ah(() => v1(r));
  at(t._zod, "propValues", () => {
    const p = r.shape, h = {};
    for (const m in p) {
      const y = p[m]._zod;
      if (y.values) {
        h[m] ?? (h[m] = /* @__PURE__ */ new Set());
        for (const _ of y.values)
          h[m].add(_);
      }
    }
    return h;
  });
  const o = Eu, u = r.catchall;
  let f;
  t._zod.parse = (p, h) => {
    f ?? (f = s.value);
    const m = p.value;
    if (!o(m))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: m,
        inst: t
      }), p;
    p.value = {};
    const y = [], _ = f.shape;
    for (const b of f.keys) {
      const d = _[b]._zod.run({ value: m[b], issues: [] }, h);
      d instanceof Promise ? y.push(d.then((S) => Cu(S, p, b, m))) : Cu(d, p, b, m);
    }
    return u ? y1(y, m, p, h, s.value, t) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), e3 = /* @__PURE__ */ te("$ZodObjectJIT", (t, r) => {
  Ww.init(t, r);
  const i = t._zod.parse, s = ah(() => v1(r)), o = (b) => {
    const g = new xw(["shape", "payload", "ctx"]), d = s.value, S = (D) => {
      const C = My(D);
      return `shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`;
    };
    g.write("const input = payload.value;");
    const x = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const D of d.keys)
      x[D] = `key_${T++}`;
    g.write("const newResult = {};");
    for (const D of d.keys) {
      const C = x[D], N = My(D);
      g.write(`const ${C} = ${S(D)};`), g.write(`
        if (${C}.issues.length) {
          payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${N}, ...iss.path] : [${N}]
          })));
        }
        
        
        if (${C}.value === undefined) {
          if (${N} in input) {
            newResult[${N}] = undefined;
          }
        } else {
          newResult[${N}] = ${C}.value;
        }
        
      `);
    }
    g.write("payload.value = newResult;"), g.write("return payload;");
    const A = g.compile();
    return (D, C) => A(b, D, C);
  };
  let u;
  const f = Eu, p = !t1.jitless, m = p && mC.value, y = r.catchall;
  let _;
  t._zod.parse = (b, g) => {
    _ ?? (_ = s.value);
    const d = b.value;
    return f(d) ? p && m && g?.async === !1 && g.jitless !== !0 ? (u || (u = o(r.shape)), b = u(b, g), y ? y1([], d, b, g, _, t) : b) : i(b, g) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: t
    }), b);
  };
});
function Ry(t, r, i, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const o = t.filter((u) => !ji(u));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: t.map((u) => u.issues.map((f) => za(f, s, Ra())))
  }), r);
}
const t3 = /* @__PURE__ */ te("$ZodUnion", (t, r) => {
  wt.init(t, r), at(t._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), at(t._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), at(t._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), at(t._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${o.map((u) => sh(u.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, s = r.options[0]._zod.run;
  t._zod.parse = (o, u) => {
    if (i)
      return s(o, u);
    let f = !1;
    const p = [];
    for (const h of r.options) {
      const m = h._zod.run({
        value: o.value,
        issues: []
      }, u);
      if (m instanceof Promise)
        p.push(m), f = !0;
      else {
        if (m.issues.length === 0)
          return m;
        p.push(m);
      }
    }
    return f ? Promise.all(p).then((h) => Ry(h, o, t, u)) : Ry(p, o, t, u);
  };
}), n3 = /* @__PURE__ */ te("$ZodIntersection", (t, r) => {
  wt.init(t, r), t._zod.parse = (i, s) => {
    const o = i.value, u = r.left._zod.run({ value: o, issues: [] }, s), f = r.right._zod.run({ value: o, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, m]) => zy(i, h, m)) : zy(i, u, f);
  };
});
function Hd(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (rl(t) && rl(r)) {
    const i = Object.keys(r), s = Object.keys(t).filter((u) => i.indexOf(u) !== -1), o = { ...t, ...r };
    for (const u of s) {
      const f = Hd(t[u], r[u]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...f.mergeErrorPath]
        };
      o[u] = f.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s], u = r[s], f = Hd(o, u);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...f.mergeErrorPath]
        };
      i.push(f.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function zy(t, r, i) {
  if (r.issues.length && t.issues.push(...r.issues), i.issues.length && t.issues.push(...i.issues), ji(t))
    return t;
  const s = Hd(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const r3 = /* @__PURE__ */ te("$ZodEnum", (t, r) => {
  wt.init(t, r);
  const i = n1(r.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((o) => gC.has(typeof o)).map((o) => typeof o == "string" ? Tu(o) : o.toString()).join("|")})$`), t._zod.parse = (o, u) => {
    const f = o.value;
    return s.has(f) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: t
    }), o;
  };
}), a3 = /* @__PURE__ */ te("$ZodTransform", (t, r) => {
  wt.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new e1(t.constructor.name);
    const o = r.transform(i.value, i);
    if (s.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((f) => (i.value = f, i));
    if (o instanceof Promise)
      throw new Li();
    return i.value = o, i;
  };
});
function Ly(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const i3 = /* @__PURE__ */ te("$ZodOptional", (t, r) => {
  wt.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), at(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${sh(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, s);
      return o instanceof Promise ? o.then((u) => Ly(u, i.value)) : Ly(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), s3 = /* @__PURE__ */ te("$ZodNullable", (t, r) => {
  wt.init(t, r), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), at(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${sh(i.source)}|null)$`) : void 0;
  }), at(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), l3 = /* @__PURE__ */ te("$ZodDefault", (t, r) => {
  wt.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => Py(u, r)) : Py(o, r);
  };
});
function Py(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const o3 = /* @__PURE__ */ te("$ZodPrefault", (t, r) => {
  wt.init(t, r), t._zod.optin = "optional", at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), u3 = /* @__PURE__ */ te("$ZodNonOptional", (t, r) => {
  wt.init(t, r), at(t._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (i, s) => {
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => Iy(u, t)) : Iy(o, t);
  };
});
function Iy(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const c3 = /* @__PURE__ */ te("$ZodCatch", (t, r) => {
  wt.init(t, r), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), at(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => (i.value = u.value, u.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: u.issues.map((f) => za(f, s, Ra()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = o.value, o.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: o.issues.map((u) => za(u, s, Ra()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), f3 = /* @__PURE__ */ te("$ZodPipe", (t, r) => {
  wt.init(t, r), at(t._zod, "values", () => r.in._zod.values), at(t._zod, "optin", () => r.in._zod.optin), at(t._zod, "optout", () => r.out._zod.optout), at(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(i, s);
      return u instanceof Promise ? u.then((f) => ru(f, r.in, s)) : ru(u, r.in, s);
    }
    const o = r.in._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => ru(u, r.out, s)) : ru(o, r.out, s);
  };
});
function ru(t, r, i) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, i);
}
const d3 = /* @__PURE__ */ te("$ZodReadonly", (t, r) => {
  wt.init(t, r), at(t._zod, "propValues", () => r.innerType._zod.propValues), at(t._zod, "values", () => r.innerType._zod.values), at(t._zod, "optin", () => r.innerType._zod.optin), at(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then(By) : By(o);
  };
});
function By(t) {
  return t.value = Object.freeze(t.value), t;
}
const h3 = /* @__PURE__ */ te("$ZodCustom", (t, r) => {
  ln.init(t, r), wt.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, o = r.fn(s);
    if (o instanceof Promise)
      return o.then((u) => Uy(u, i, s, t));
    Uy(o, i, s, t);
  };
});
function Uy(t, r, i, s) {
  if (!t) {
    const o = {
      code: "custom",
      input: i,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (o.params = s._zod.def.params), r.issues.push(al(o));
  }
}
class b1 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...i) {
    const s = i[0];
    if (this._map.set(r, s), s && typeof s == "object" && "id" in s) {
      if (this._idmap.has(s.id))
        throw new Error(`ID ${s.id} already exists in the registry`);
      this._idmap.set(s.id, r);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(r) {
    const i = this._map.get(r);
    return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(r), this;
  }
  get(r) {
    const i = r._zod.parent;
    if (i) {
      const s = { ...this.get(i) ?? {} };
      delete s.id;
      const o = { ...s, ...this._map.get(r) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function p3() {
  return new b1();
}
const Qs = /* @__PURE__ */ p3();
function m3(t, r) {
  return new t({
    type: "string",
    ...Ee(r)
  });
}
function g3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function Hy(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function v3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function y3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Ee(r)
  });
}
function b3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Ee(r)
  });
}
function _3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Ee(r)
  });
}
function S3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function x3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function E3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function C3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function w3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function A3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function N3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function T3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function O3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function D3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function M3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function k3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function j3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function R3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function z3(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function L3(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Ee(r)
  });
}
function P3(t, r) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Ee(r)
  });
}
function I3(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...Ee(r)
  });
}
function B3(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Ee(r)
  });
}
function U3(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Ee(r)
  });
}
function H3(t, r) {
  return new t({
    type: "number",
    checks: [],
    ...Ee(r)
  });
}
function q3(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...Ee(r)
  });
}
function F3(t) {
  return new t({
    type: "unknown"
  });
}
function Z3(t, r) {
  return new t({
    type: "never",
    ...Ee(r)
  });
}
function qy(t, r) {
  return new h1({
    check: "less_than",
    ...Ee(r),
    value: t,
    inclusive: !1
  });
}
function vd(t, r) {
  return new h1({
    check: "less_than",
    ...Ee(r),
    value: t,
    inclusive: !0
  });
}
function Fy(t, r) {
  return new p1({
    check: "greater_than",
    ...Ee(r),
    value: t,
    inclusive: !1
  });
}
function yd(t, r) {
  return new p1({
    check: "greater_than",
    ...Ee(r),
    value: t,
    inclusive: !0
  });
}
function Zy(t, r) {
  return new cw({
    check: "multiple_of",
    ...Ee(r),
    value: t
  });
}
function _1(t, r) {
  return new dw({
    check: "max_length",
    ...Ee(r),
    maximum: t
  });
}
function wu(t, r) {
  return new hw({
    check: "min_length",
    ...Ee(r),
    minimum: t
  });
}
function S1(t, r) {
  return new pw({
    check: "length_equals",
    ...Ee(r),
    length: t
  });
}
function G3(t, r) {
  return new mw({
    check: "string_format",
    format: "regex",
    ...Ee(r),
    pattern: t
  });
}
function V3(t) {
  return new gw({
    check: "string_format",
    format: "lowercase",
    ...Ee(t)
  });
}
function Y3(t) {
  return new vw({
    check: "string_format",
    format: "uppercase",
    ...Ee(t)
  });
}
function X3(t, r) {
  return new yw({
    check: "string_format",
    format: "includes",
    ...Ee(r),
    includes: t
  });
}
function $3(t, r) {
  return new bw({
    check: "string_format",
    format: "starts_with",
    ...Ee(r),
    prefix: t
  });
}
function Q3(t, r) {
  return new _w({
    check: "string_format",
    format: "ends_with",
    ...Ee(r),
    suffix: t
  });
}
function ol(t) {
  return new Sw({
    check: "overwrite",
    tx: t
  });
}
function K3(t) {
  return ol((r) => r.normalize(t));
}
function J3() {
  return ol((t) => t.trim());
}
function W3() {
  return ol((t) => t.toLowerCase());
}
function e4() {
  return ol((t) => t.toUpperCase());
}
function t4(t, r, i) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...Ee(i)
  });
}
function n4(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...Ee(i)
  });
}
function r4(t) {
  const r = a4((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(al(s, i.value, r._zod.def));
    else {
      const o = s;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(al(o));
    }
  }, t(i.value, i)));
  return r;
}
function a4(t, r) {
  const i = new ln({
    check: "custom",
    ...Ee(r)
  });
  return i._zod.check = t, i;
}
class Gy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Qs, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, i = { path: [], schemaPath: [] }) {
    var s;
    const o = r._zod.def, u = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, f = this.seen.get(r);
    if (f)
      return f.count++, i.schemaPath.includes(r) && (f.cycle = i.path), f.schema;
    const p = { schema: {}, count: 1, cycle: void 0, path: i.path };
    this.seen.set(r, p);
    const h = r._zod.toJSONSchema?.();
    if (h)
      p.schema = h;
    else {
      const _ = {
        ...i,
        schemaPath: [...i.schemaPath, r],
        path: i.path
      }, b = r._zod.parent;
      if (b)
        p.ref = b, this.process(b, _), this.seen.get(b).isParent = !0;
      else {
        const g = p.schema;
        switch (o.type) {
          case "string": {
            const d = g;
            d.type = "string";
            const { minimum: S, maximum: x, format: T, patterns: A, contentEncoding: D } = r._zod.bag;
            if (typeof S == "number" && (d.minLength = S), typeof x == "number" && (d.maxLength = x), T && (d.format = u[T] ?? T, d.format === "" && delete d.format), D && (d.contentEncoding = D), A && A.size > 0) {
              const C = [...A];
              C.length === 1 ? d.pattern = C[0].source : C.length > 1 && (p.schema.allOf = [
                ...C.map((N) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: N.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const d = g, { minimum: S, maximum: x, format: T, multipleOf: A, exclusiveMaximum: D, exclusiveMinimum: C } = r._zod.bag;
            typeof T == "string" && T.includes("int") ? d.type = "integer" : d.type = "number", typeof C == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.minimum = C, d.exclusiveMinimum = !0) : d.exclusiveMinimum = C), typeof S == "number" && (d.minimum = S, typeof C == "number" && this.target !== "draft-4" && (C >= S ? delete d.minimum : delete d.exclusiveMinimum)), typeof D == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.maximum = D, d.exclusiveMaximum = !0) : d.exclusiveMaximum = D), typeof x == "number" && (d.maximum = x, typeof D == "number" && this.target !== "draft-4" && (D <= x ? delete d.maximum : delete d.exclusiveMaximum)), typeof A == "number" && (d.multipleOf = A);
            break;
          }
          case "boolean": {
            const d = g;
            d.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (g.type = "string", g.nullable = !0, g.enum = [null]) : g.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            g.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const d = g, { minimum: S, maximum: x } = r._zod.bag;
            typeof S == "number" && (d.minItems = S), typeof x == "number" && (d.maxItems = x), d.type = "array", d.items = this.process(o.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const d = g;
            d.type = "object", d.properties = {};
            const S = o.shape;
            for (const A in S)
              d.properties[A] = this.process(S[A], {
                ..._,
                path: [..._.path, "properties", A]
              });
            const x = new Set(Object.keys(S)), T = new Set([...x].filter((A) => {
              const D = o.shape[A]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            T.size > 0 && (d.required = Array.from(T)), o.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : o.catchall ? o.catchall && (d.additionalProperties = this.process(o.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = g, S = o.options.map((x, T) => this.process(x, {
              ..._,
              path: [..._.path, "anyOf", T]
            }));
            d.anyOf = S;
            break;
          }
          case "intersection": {
            const d = g, S = this.process(o.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), x = this.process(o.right, {
              ..._,
              path: [..._.path, "allOf", 1]
            }), T = (D) => "allOf" in D && Object.keys(D).length === 1, A = [
              ...T(S) ? S.allOf : [S],
              ...T(x) ? x.allOf : [x]
            ];
            d.allOf = A;
            break;
          }
          case "tuple": {
            const d = g;
            d.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", x = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", T = o.items.map((N, M) => this.process(N, {
              ..._,
              path: [..._.path, S, M]
            })), A = o.rest ? this.process(o.rest, {
              ..._,
              path: [..._.path, x, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (d.prefixItems = T, A && (d.items = A)) : this.target === "openapi-3.0" ? (d.items = {
              anyOf: T
            }, A && d.items.anyOf.push(A), d.minItems = T.length, A || (d.maxItems = T.length)) : (d.items = T, A && (d.additionalItems = A));
            const { minimum: D, maximum: C } = r._zod.bag;
            typeof D == "number" && (d.minItems = D), typeof C == "number" && (d.maxItems = C);
            break;
          }
          case "record": {
            const d = g;
            d.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (d.propertyNames = this.process(o.keyType, {
              ..._,
              path: [..._.path, "propertyNames"]
            })), d.additionalProperties = this.process(o.valueType, {
              ..._,
              path: [..._.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const d = g, S = n1(o.entries);
            S.every((x) => typeof x == "number") && (d.type = "number"), S.every((x) => typeof x == "string") && (d.type = "string"), d.enum = S;
            break;
          }
          case "literal": {
            const d = g, S = [];
            for (const x of o.values)
              if (x === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof x == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                S.push(Number(x));
              } else
                S.push(x);
            if (S.length !== 0) if (S.length === 1) {
              const x = S[0];
              d.type = x === null ? "null" : typeof x, this.target === "draft-4" || this.target === "openapi-3.0" ? d.enum = [x] : d.const = x;
            } else
              S.every((x) => typeof x == "number") && (d.type = "number"), S.every((x) => typeof x == "string") && (d.type = "string"), S.every((x) => typeof x == "boolean") && (d.type = "string"), S.every((x) => x === null) && (d.type = "null"), d.enum = S;
            break;
          }
          case "file": {
            const d = g, S = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: x, maximum: T, mime: A } = r._zod.bag;
            x !== void 0 && (S.minLength = x), T !== void 0 && (S.maxLength = T), A ? A.length === 1 ? (S.contentMediaType = A[0], Object.assign(d, S)) : d.anyOf = A.map((D) => ({ ...S, contentMediaType: D })) : Object.assign(d, S);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const d = this.process(o.innerType, _);
            this.target === "openapi-3.0" ? (p.ref = o.innerType, g.nullable = !0) : g.anyOf = [d, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "success": {
            const d = g;
            d.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, _), p.ref = o.innerType, g.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, _), p.ref = o.innerType, this.io === "input" && (g._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, _), p.ref = o.innerType;
            let d;
            try {
              d = o.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            g.default = d;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const d = g, S = r._zod.pattern;
            if (!S)
              throw new Error("Pattern not found in template literal");
            d.type = "string", d.pattern = S.source;
            break;
          }
          case "pipe": {
            const d = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(d, _), p.ref = d;
            break;
          }
          case "readonly": {
            this.process(o.innerType, _), p.ref = o.innerType, g.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "lazy": {
            const d = r._zod.innerType;
            this.process(d, _), p.ref = d;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const m = this.metadataRegistry.get(r);
    return m && Object.assign(p.schema, m), this.io === "input" && Tt(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, i) {
    const s = {
      cycles: i?.cycles ?? "ref",
      reused: i?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: i?.external ?? void 0
    }, o = this.seen.get(r);
    if (!o)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const u = (y) => {
      const _ = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const S = s.external.registry.get(y[0])?.id, x = s.external.uri ?? ((A) => A);
        if (S)
          return { ref: x(S) };
        const T = y[1].defId ?? y[1].schema.id ?? `schema${this.counter++}`;
        return y[1].defId = T, { defId: T, ref: `${x("__shared")}#/${_}/${T}` };
      }
      if (y[1] === o)
        return { ref: "#" };
      const g = `#/${_}/`, d = y[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: d, ref: g + d };
    }, f = (y) => {
      if (y[1].schema.$ref)
        return;
      const _ = y[1], { ref: b, defId: g } = u(y);
      _.def = { ..._.schema }, g && (_.defId = g);
      const d = _.schema;
      for (const S in d)
        delete d[S];
      d.$ref = b;
    };
    if (s.cycles === "throw")
      for (const y of this.seen.entries()) {
        const _ = y[1];
        if (_.cycle)
          throw new Error(`Cycle detected: #/${_.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const y of this.seen.entries()) {
      const _ = y[1];
      if (r === y[0]) {
        f(y);
        continue;
      }
      if (s.external) {
        const g = s.external.registry.get(y[0])?.id;
        if (r !== y[0] && g) {
          f(y);
          continue;
        }
      }
      if (this.metadataRegistry.get(y[0])?.id) {
        f(y);
        continue;
      }
      if (_.cycle) {
        f(y);
        continue;
      }
      if (_.count > 1 && s.reused === "ref") {
        f(y);
        continue;
      }
    }
    const p = (y, _) => {
      const b = this.seen.get(y), g = b.def ?? b.schema, d = { ...g };
      if (b.ref === null)
        return;
      const S = b.ref;
      if (b.ref = null, S) {
        p(S, _);
        const x = this.seen.get(S).schema;
        x.$ref && (_.target === "draft-7" || _.target === "draft-4" || _.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(x)) : (Object.assign(g, x), Object.assign(g, d));
      }
      b.isParent || this.override({
        zodSchema: y,
        jsonSchema: g,
        path: b.path ?? []
      });
    };
    for (const y of [...this.seen.entries()].reverse())
      p(y[0], { target: this.target });
    const h = {};
    if (this.target === "draft-2020-12" ? h.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? h.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? h.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const y = s.external.registry.get(r)?.id;
      if (!y)
        throw new Error("Schema is missing an `id` property");
      h.$id = s.external.uri(y);
    }
    Object.assign(h, o.def);
    const m = s.external?.defs ?? {};
    for (const y of this.seen.entries()) {
      const _ = y[1];
      _.def && _.defId && (m[_.defId] = _.def);
    }
    s.external || Object.keys(m).length > 0 && (this.target === "draft-2020-12" ? h.$defs = m : h.definitions = m);
    try {
      return JSON.parse(JSON.stringify(h));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function i4(t, r) {
  if (t instanceof b1) {
    const s = new Gy(r), o = {};
    for (const p of t._idmap.entries()) {
      const [h, m] = p;
      s.process(m);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: o
    };
    for (const p of t._idmap.entries()) {
      const [h, m] = p;
      u[h] = s.emit(m, {
        ...r,
        external: f
      });
    }
    if (Object.keys(o).length > 0) {
      const p = s.target === "draft-2020-12" ? "$defs" : "definitions";
      u.__shared = {
        [p]: o
      };
    }
    return { schemas: u };
  }
  const i = new Gy(r);
  return i.process(t), i.emit(t, r);
}
function Tt(t, r) {
  const i = r ?? { seen: /* @__PURE__ */ new Set() };
  if (i.seen.has(t))
    return !1;
  i.seen.add(t);
  const o = t._zod.def;
  switch (o.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return Tt(o.element, i);
    case "object": {
      for (const u in o.shape)
        if (Tt(o.shape[u], i))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of o.options)
        if (Tt(u, i))
          return !0;
      return !1;
    }
    case "intersection":
      return Tt(o.left, i) || Tt(o.right, i);
    case "tuple": {
      for (const u of o.items)
        if (Tt(u, i))
          return !0;
      return !!(o.rest && Tt(o.rest, i));
    }
    case "record":
      return Tt(o.keyType, i) || Tt(o.valueType, i);
    case "map":
      return Tt(o.keyType, i) || Tt(o.valueType, i);
    case "set":
      return Tt(o.valueType, i);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return Tt(o.innerType, i);
    case "lazy":
      return Tt(o.getter(), i);
    case "default":
      return Tt(o.innerType, i);
    case "prefault":
      return Tt(o.innerType, i);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return Tt(o.in, i) || Tt(o.out, i);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${o.type}`);
}
const s4 = /* @__PURE__ */ te("ZodISODateTime", (t, r) => {
  zw.init(t, r), ft.init(t, r);
});
function l4(t) {
  return P3(s4, t);
}
const o4 = /* @__PURE__ */ te("ZodISODate", (t, r) => {
  Lw.init(t, r), ft.init(t, r);
});
function u4(t) {
  return I3(o4, t);
}
const c4 = /* @__PURE__ */ te("ZodISOTime", (t, r) => {
  Pw.init(t, r), ft.init(t, r);
});
function f4(t) {
  return B3(c4, t);
}
const d4 = /* @__PURE__ */ te("ZodISODuration", (t, r) => {
  Iw.init(t, r), ft.init(t, r);
});
function h4(t) {
  return U3(d4, t);
}
const p4 = (t, r) => {
  l1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => NC(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => AC(t, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        t.issues.push(i), t.message = JSON.stringify(t.issues, Ud, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        t.issues.push(...i), t.message = JSON.stringify(t.issues, Ud, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return t.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Rn = te("ZodError", p4, {
  Parent: Error
}), m4 = /* @__PURE__ */ oh(Rn), g4 = /* @__PURE__ */ uh(Rn), v4 = /* @__PURE__ */ Ou(Rn), y4 = /* @__PURE__ */ Du(Rn), b4 = /* @__PURE__ */ DC(Rn), _4 = /* @__PURE__ */ MC(Rn), S4 = /* @__PURE__ */ kC(Rn), x4 = /* @__PURE__ */ jC(Rn), E4 = /* @__PURE__ */ RC(Rn), C4 = /* @__PURE__ */ zC(Rn), w4 = /* @__PURE__ */ LC(Rn), A4 = /* @__PURE__ */ PC(Rn), Ot = /* @__PURE__ */ te("ZodType", (t, r) => (wt.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Pa(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => aa(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => m4(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => v4(t, i, s), t.parseAsync = async (i, s) => g4(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => y4(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => b4(t, i, s), t.decode = (i, s) => _4(t, i, s), t.encodeAsync = async (i, s) => S4(t, i, s), t.decodeAsync = async (i, s) => x4(t, i, s), t.safeEncode = (i, s) => E4(t, i, s), t.safeDecode = (i, s) => C4(t, i, s), t.safeEncodeAsync = async (i, s) => w4(t, i, s), t.safeDecodeAsync = async (i, s) => A4(t, i, s), t.refine = (i, s) => t.check(mA(i, s)), t.superRefine = (i) => t.check(gA(i)), t.overwrite = (i) => t.check(ol(i)), t.optional = () => $y(t), t.nullable = () => Qy(t), t.nullish = () => $y(Qy(t)), t.nonoptional = (i) => oA(t, i), t.array = () => Hn(t), t.or = (i) => J4([t, i]), t.and = (i) => eA(t, i), t.transform = (i) => Ky(t, nA(i)), t.default = (i) => iA(t, i), t.prefault = (i) => lA(t, i), t.catch = (i) => cA(t, i), t.pipe = (i) => Ky(t, i), t.readonly = () => hA(t), t.describe = (i) => {
  const s = t.clone();
  return Qs.add(s, { description: i }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return Qs.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...i) => {
  if (i.length === 0)
    return Qs.get(t);
  const s = t.clone();
  return Qs.add(s, i[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), x1 = /* @__PURE__ */ te("_ZodString", (t, r) => {
  ch.init(t, r), Ot.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(G3(...s)), t.includes = (...s) => t.check(X3(...s)), t.startsWith = (...s) => t.check($3(...s)), t.endsWith = (...s) => t.check(Q3(...s)), t.min = (...s) => t.check(wu(...s)), t.max = (...s) => t.check(_1(...s)), t.length = (...s) => t.check(S1(...s)), t.nonempty = (...s) => t.check(wu(1, ...s)), t.lowercase = (s) => t.check(V3(s)), t.uppercase = (s) => t.check(Y3(s)), t.trim = () => t.check(J3()), t.normalize = (...s) => t.check(K3(...s)), t.toLowerCase = () => t.check(W3()), t.toUpperCase = () => t.check(e4());
}), N4 = /* @__PURE__ */ te("ZodString", (t, r) => {
  ch.init(t, r), x1.init(t, r), t.email = (i) => t.check(g3(T4, i)), t.url = (i) => t.check(S3(O4, i)), t.jwt = (i) => t.check(L3(Z4, i)), t.emoji = (i) => t.check(x3(D4, i)), t.guid = (i) => t.check(Hy(Vy, i)), t.uuid = (i) => t.check(v3(au, i)), t.uuidv4 = (i) => t.check(y3(au, i)), t.uuidv6 = (i) => t.check(b3(au, i)), t.uuidv7 = (i) => t.check(_3(au, i)), t.nanoid = (i) => t.check(E3(M4, i)), t.guid = (i) => t.check(Hy(Vy, i)), t.cuid = (i) => t.check(C3(k4, i)), t.cuid2 = (i) => t.check(w3(j4, i)), t.ulid = (i) => t.check(A3(R4, i)), t.base64 = (i) => t.check(j3(H4, i)), t.base64url = (i) => t.check(R3(q4, i)), t.xid = (i) => t.check(N3(z4, i)), t.ksuid = (i) => t.check(T3(L4, i)), t.ipv4 = (i) => t.check(O3(P4, i)), t.ipv6 = (i) => t.check(D3(I4, i)), t.cidrv4 = (i) => t.check(M3(B4, i)), t.cidrv6 = (i) => t.check(k3(U4, i)), t.e164 = (i) => t.check(z3(F4, i)), t.datetime = (i) => t.check(l4(i)), t.date = (i) => t.check(u4(i)), t.time = (i) => t.check(f4(i)), t.duration = (i) => t.check(h4(i));
});
function jn(t) {
  return m3(N4, t);
}
const ft = /* @__PURE__ */ te("ZodStringFormat", (t, r) => {
  ot.init(t, r), x1.init(t, r);
}), T4 = /* @__PURE__ */ te("ZodEmail", (t, r) => {
  Aw.init(t, r), ft.init(t, r);
}), Vy = /* @__PURE__ */ te("ZodGUID", (t, r) => {
  Cw.init(t, r), ft.init(t, r);
}), au = /* @__PURE__ */ te("ZodUUID", (t, r) => {
  ww.init(t, r), ft.init(t, r);
}), O4 = /* @__PURE__ */ te("ZodURL", (t, r) => {
  Nw.init(t, r), ft.init(t, r);
}), D4 = /* @__PURE__ */ te("ZodEmoji", (t, r) => {
  Tw.init(t, r), ft.init(t, r);
}), M4 = /* @__PURE__ */ te("ZodNanoID", (t, r) => {
  Ow.init(t, r), ft.init(t, r);
}), k4 = /* @__PURE__ */ te("ZodCUID", (t, r) => {
  Dw.init(t, r), ft.init(t, r);
}), j4 = /* @__PURE__ */ te("ZodCUID2", (t, r) => {
  Mw.init(t, r), ft.init(t, r);
}), R4 = /* @__PURE__ */ te("ZodULID", (t, r) => {
  kw.init(t, r), ft.init(t, r);
}), z4 = /* @__PURE__ */ te("ZodXID", (t, r) => {
  jw.init(t, r), ft.init(t, r);
}), L4 = /* @__PURE__ */ te("ZodKSUID", (t, r) => {
  Rw.init(t, r), ft.init(t, r);
}), P4 = /* @__PURE__ */ te("ZodIPv4", (t, r) => {
  Bw.init(t, r), ft.init(t, r);
}), I4 = /* @__PURE__ */ te("ZodIPv6", (t, r) => {
  Uw.init(t, r), ft.init(t, r);
}), B4 = /* @__PURE__ */ te("ZodCIDRv4", (t, r) => {
  Hw.init(t, r), ft.init(t, r);
}), U4 = /* @__PURE__ */ te("ZodCIDRv6", (t, r) => {
  qw.init(t, r), ft.init(t, r);
}), H4 = /* @__PURE__ */ te("ZodBase64", (t, r) => {
  Fw.init(t, r), ft.init(t, r);
}), q4 = /* @__PURE__ */ te("ZodBase64URL", (t, r) => {
  Gw.init(t, r), ft.init(t, r);
}), F4 = /* @__PURE__ */ te("ZodE164", (t, r) => {
  Vw.init(t, r), ft.init(t, r);
}), Z4 = /* @__PURE__ */ te("ZodJWT", (t, r) => {
  Xw.init(t, r), ft.init(t, r);
}), E1 = /* @__PURE__ */ te("ZodNumber", (t, r) => {
  g1.init(t, r), Ot.init(t, r), t.gt = (s, o) => t.check(Fy(s, o)), t.gte = (s, o) => t.check(yd(s, o)), t.min = (s, o) => t.check(yd(s, o)), t.lt = (s, o) => t.check(qy(s, o)), t.lte = (s, o) => t.check(vd(s, o)), t.max = (s, o) => t.check(vd(s, o)), t.int = (s) => t.check(Yy(s)), t.safe = (s) => t.check(Yy(s)), t.positive = (s) => t.check(Fy(0, s)), t.nonnegative = (s) => t.check(yd(0, s)), t.negative = (s) => t.check(qy(0, s)), t.nonpositive = (s) => t.check(vd(0, s)), t.multipleOf = (s, o) => t.check(Zy(s, o)), t.step = (s, o) => t.check(Zy(s, o)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Au(t) {
  return H3(E1, t);
}
const G4 = /* @__PURE__ */ te("ZodNumberFormat", (t, r) => {
  $w.init(t, r), E1.init(t, r);
});
function Yy(t) {
  return q3(G4, t);
}
const V4 = /* @__PURE__ */ te("ZodUnknown", (t, r) => {
  Qw.init(t, r), Ot.init(t, r);
});
function Xy() {
  return F3(V4);
}
const Y4 = /* @__PURE__ */ te("ZodNever", (t, r) => {
  Kw.init(t, r), Ot.init(t, r);
});
function X4(t) {
  return Z3(Y4, t);
}
const $4 = /* @__PURE__ */ te("ZodArray", (t, r) => {
  Jw.init(t, r), Ot.init(t, r), t.element = r.element, t.min = (i, s) => t.check(wu(i, s)), t.nonempty = (i) => t.check(wu(1, i)), t.max = (i, s) => t.check(_1(i, s)), t.length = (i, s) => t.check(S1(i, s)), t.unwrap = () => t.element;
});
function Hn(t, r) {
  return t4($4, t, r);
}
const Q4 = /* @__PURE__ */ te("ZodObject", (t, r) => {
  e3.init(t, r), Ot.init(t, r), at(t, "shape", () => r.shape), t.keyof = () => Fd(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Xy() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Xy() }), t.strict = () => t.clone({ ...t._zod.def, catchall: X4() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => SC(t, i), t.safeExtend = (i) => xC(t, i), t.merge = (i) => EC(t, i), t.pick = (i) => bC(t, i), t.omit = (i) => _C(t, i), t.partial = (...i) => CC(C1, t, i[0]), t.required = (...i) => wC(w1, t, i[0]);
});
function ja(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ...Ee(r)
  };
  return new Q4(i);
}
const K4 = /* @__PURE__ */ te("ZodUnion", (t, r) => {
  t3.init(t, r), Ot.init(t, r), t.options = r.options;
});
function J4(t, r) {
  return new K4({
    type: "union",
    options: t,
    ...Ee(r)
  });
}
const W4 = /* @__PURE__ */ te("ZodIntersection", (t, r) => {
  n3.init(t, r), Ot.init(t, r);
});
function eA(t, r) {
  return new W4({
    type: "intersection",
    left: t,
    right: r
  });
}
const qd = /* @__PURE__ */ te("ZodEnum", (t, r) => {
  r3.init(t, r), Ot.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  t.extract = (s, o) => {
    const u = {};
    for (const f of s)
      if (i.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new qd({
      ...r,
      checks: [],
      ...Ee(o),
      entries: u
    });
  }, t.exclude = (s, o) => {
    const u = { ...r.entries };
    for (const f of s)
      if (i.has(f))
        delete u[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new qd({
      ...r,
      checks: [],
      ...Ee(o),
      entries: u
    });
  };
});
function Fd(t, r) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new qd({
    type: "enum",
    entries: i,
    ...Ee(r)
  });
}
const tA = /* @__PURE__ */ te("ZodTransform", (t, r) => {
  a3.init(t, r), Ot.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new e1(t.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(al(u, i.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = i.value), f.inst ?? (f.inst = t), i.issues.push(al(f));
      }
    };
    const o = r.transform(i.value, i);
    return o instanceof Promise ? o.then((u) => (i.value = u, i)) : (i.value = o, i);
  };
});
function nA(t) {
  return new tA({
    type: "transform",
    transform: t
  });
}
const C1 = /* @__PURE__ */ te("ZodOptional", (t, r) => {
  i3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function $y(t) {
  return new C1({
    type: "optional",
    innerType: t
  });
}
const rA = /* @__PURE__ */ te("ZodNullable", (t, r) => {
  s3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Qy(t) {
  return new rA({
    type: "nullable",
    innerType: t
  });
}
const aA = /* @__PURE__ */ te("ZodDefault", (t, r) => {
  l3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function iA(t, r) {
  return new aA({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : a1(r);
    }
  });
}
const sA = /* @__PURE__ */ te("ZodPrefault", (t, r) => {
  o3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function lA(t, r) {
  return new sA({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : a1(r);
    }
  });
}
const w1 = /* @__PURE__ */ te("ZodNonOptional", (t, r) => {
  u3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function oA(t, r) {
  return new w1({
    type: "nonoptional",
    innerType: t,
    ...Ee(r)
  });
}
const uA = /* @__PURE__ */ te("ZodCatch", (t, r) => {
  c3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function cA(t, r) {
  return new uA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const fA = /* @__PURE__ */ te("ZodPipe", (t, r) => {
  f3.init(t, r), Ot.init(t, r), t.in = r.in, t.out = r.out;
});
function Ky(t, r) {
  return new fA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const dA = /* @__PURE__ */ te("ZodReadonly", (t, r) => {
  d3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function hA(t) {
  return new dA({
    type: "readonly",
    innerType: t
  });
}
const pA = /* @__PURE__ */ te("ZodCustom", (t, r) => {
  h3.init(t, r), Ot.init(t, r);
});
function mA(t, r = {}) {
  return n4(pA, t, r);
}
function gA(t) {
  return r4(t);
}
const Jy = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Zd = "placeholder-chatHistory", vA = ja({
  justification: jn().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: jn().describe("The new, full content for the character field.")
}), yA = ja({
  field: jn(),
  value: jn()
}), bA = ja({
  index: Au().int().positive(),
  value: jn()
});
ja({
  justification: jn(),
  fields_to_change: Hn(yA).optional(),
  draft_fields_to_remove: Hn(jn()).optional(),
  greetings_to_add: Hn(jn()).optional(),
  greetings_to_remove: Hn(Au().int().positive()).optional(),
  greetings_to_change: Hn(bA).optional()
});
const _A = (t, r) => {
  const i = ja({
    index: Au().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: jn().describe("The new content for the alternate greeting.")
  }), s = {
    justification: jn().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Hn(jn()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Hn(Au().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Hn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const o = ja({
      field: Fd(t).describe("The unique ID of the field to change (core or draft)."),
      value: jn().describe("The new content for the field.")
    });
    s.fields_to_change = Hn(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Hn(Fd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ja(s);
};
function bd(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Gd(t, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${Gd(s, r + 1)}${i}</item>
` : `${i}<item>${bd(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const o of Object.keys(t)) {
      const u = t[o];
      u !== null && typeof u == "object" ? s += `${i}<${o}>
${Gd(u, r + 1)}${i}</${o}>
` : s += `${i}<${o}>${bd(u)}</${o}>
`;
    }
    return s;
  }
  return `${i}<value>${bd(t)}</value>
`;
}
function SA(t, r) {
  const i = Oa(t);
  return r === "xml" ? Gd(i).trim() : JSON.stringify(i, null, 2);
}
function xA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function EA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function Oa(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, i = xA(t.example, r, t.default);
  if (i !== void 0) return i;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return Oa(s);
  switch (EA(t.type)) {
    case "object": {
      const u = {}, f = t.properties || {};
      for (const p of Object.keys(f))
        u[p] = Oa(f[p]);
      return t.additionalProperties && typeof t.additionalProperties == "object" && (u.additionalProperty = Oa(t.additionalProperties)), u;
    }
    case "array": {
      const u = t.items ?? {};
      return [Oa(u)];
    }
    case "string":
      switch (t.format) {
        case "date-time":
          return (/* @__PURE__ */ new Date(0)).toISOString();
        case "date":
          return "1970-01-01";
        case "time":
          return "00:00:00";
        case "email":
          return "user@example.com";
        case "uri":
        case "url":
          return "https://example.com";
        case "uuid":
          return "00000000-0000-0000-0000-000000000000";
        default:
          return t.title || t.description || "string";
      }
    case "integer":
      return 0;
    case "number":
      return 0;
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return t.properties || t.additionalProperties ? Oa({ ...t, type: "object" }) : t.items ? Oa({ ...t, type: "array" }) : null;
  }
}
const CA = new pS();
async function Vd(t, r, i, s, o, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, h) => {
    const m = new AbortController(), y = u ?? m.signal;
    u && u.addEventListener("abort", () => m.abort(), { once: !0 }), CA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: i,
        custom: { stream: f, signal: y },
        overridePayload: s
      },
      {
        abortController: m,
        onEntry: void 0,
        onFinish: (_, b, g) => y.aborted ? h(new DOMException("Request aborted by user", "AbortError")) : g ? h(g) : b === void 0 && g === void 0 ? h(new DOMException("Request aborted by user", "AbortError")) : (b || h(new Error("No data received from LLM")), g ? h(g) : p(b))
      }
    );
  });
}
async function A1(t, r, i, s) {
  const o = await Vd(t, r, i, bu(), void 0, s);
  if (!o?.content)
    throw new Error("Plain request failed to return content.");
  return o.content;
}
async function wA(t, r, i, s, o, u, f) {
  const p = bt.getSettings();
  let h, m;
  const y = i4(i);
  if (o === "native") {
    if (h = await Vd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: y },
        ...bu()
      },
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    m = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const b = o, g = SA(y, b), d = JSON.stringify(y, null, 2), S = b === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", x = p.prompts[S]?.content;
    if (!x)
      throw new Error(`Prompt template for mode "${b}" not found.`);
    const T = {
      example_response: g,
      schema: d
    }, D = { role: "system", content: Ct.compile(x, { noEscape: !0, strict: !0 })(T) };
    if (h = await Vd(
      t,
      [...r, D],
      u,
      bu(),
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    m = P0(h.content, b, { schema: y });
  }
  const _ = i.safeParse(m);
  if (!_.success) {
    const b = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", m), await Ne("error", b), new Error(b);
  }
  return _.data;
}
function AA(t, r) {
  return t.map((i) => {
    if (!i.images?.length)
      return { role: i.role, content: i.content };
    const s = [{ type: "text", text: i.content }];
    for (const o of i.images) {
      const u = r?.get(o.url);
      u && s.push({
        type: "image_url",
        image_url: { url: u, detail: "auto" }
      });
    }
    return { role: i.role, content: s };
  });
}
const N1 = ({ originalContent: t, newContent: r }) => {
  const i = $.useMemo(() => {
    const s = J0(t, r);
    let o = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), m = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (o += m), f.removed || (u += m);
    }), { originalHtml: o, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ E.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ E.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ E.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, NA = ({ before: t, after: r }) => {
  const i = $.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = t.fields[u], p = r.fields[u], h = f?.value ?? "", m = p?.value ?? "";
      h !== m && s.push({
        label: p?.label ?? f?.label ?? u,
        before: h,
        after: m
      });
    }), s;
  }, [t, r]);
  return /* @__PURE__ */ E.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ E.jsx("h3", { children: "Changes in this step" }),
    i.length === 0 ? /* @__PURE__ */ E.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ E.jsx("div", { className: "compare-state-list", children: i.map(({ label: s, before: o, after: u }) => /* @__PURE__ */ E.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ E.jsx("h4", { children: s }),
      /* @__PURE__ */ E.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ E.jsx("span", { children: "Before" }),
        /* @__PURE__ */ E.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ E.jsx(N1, { originalContent: o, newContent: u })
    ] }, s)) })
  ] });
}, TA = ({ currentState: t, initialState: r }) => {
  const [i, s] = $.useState(!1), { coreFields: o, alternateGreetings: u } = $.useMemo(() => {
    const p = [], h = [];
    return Qn.forEach((m) => {
      t.fields[m] && p.push({ label: t.fields[m].label, value: t.fields[m].value });
    }), Object.entries(t.fields).filter(([m]) => m.startsWith("alternate_greetings_")).sort((m, y) => parseInt(m[0].split("_")[2]) - parseInt(y[0].split("_")[2])).forEach(([, m]) => h.push(m.value)), { coreFields: p, alternateGreetings: h };
  }, [t]), f = $.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((m) => {
      const y = r.fields[m], _ = t.fields[m], b = y?.value ?? "", g = _?.value ?? "";
      b !== g && p.push({
        label: _?.label ?? y?.label ?? m,
        before: b,
        after: g
      });
    }), p;
  }, [r, t]);
  return /* @__PURE__ */ E.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ E.jsx("h3", { children: i ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ E.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ E.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ E.jsx("input", { type: "checkbox", checked: i, onChange: (p) => s(p.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ E.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ E.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ E.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: h, after: m }) => /* @__PURE__ */ E.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ E.jsx("h4", { children: p }),
      /* @__PURE__ */ E.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ E.jsx("span", { children: "Original" }),
        /* @__PURE__ */ E.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ E.jsx(N1, { originalContent: h, newContent: m })
    ] }, p)) }) : /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
      /* @__PURE__ */ E.jsx("h4", { children: "Core Fields" }),
      o.map(({ label: p, value: h }) => /* @__PURE__ */ E.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ E.jsx("label", { children: p }),
        /* @__PURE__ */ E.jsx("div", { className: "state-value", children: h || /* @__PURE__ */ E.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
        /* @__PURE__ */ E.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, h) => /* @__PURE__ */ E.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ E.jsxs("label", { children: [
            "Greeting ",
            h + 1
          ] }),
          /* @__PURE__ */ E.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ E.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, h))
      ] })
    ] }) })
  ] });
}, { showdown: OA, DOMPurify: DA, hljs: MA } = SillyTavern.libs, kA = new OA.Converter({
  emoji: !0,
  literalMidWordUnderscores: !0,
  parseImgDimensions: !0,
  tables: !0,
  underline: !0,
  simpleLineBreaks: !0,
  strikethrough: !0,
  disableForced4SpacesIndentedSublists: !0
}), T1 = ({ content: t }) => {
  const r = $.useRef(null), i = $.useMemo(() => {
    const s = kA.makeHtml(t);
    return DA.sanitize(s);
  }, [t]);
  return $.useEffect(() => {
    r.current && r.current.querySelectorAll("pre").forEach((s) => {
      const o = s.querySelector("code");
      if (o && MA.highlightElement(o), s.querySelector(".code-copy-button")) return;
      const u = document.createElement("button");
      u.className = "code-copy-button", u.title = "Copy code", u.innerHTML = '<i class="fa-solid fa-clipboard"></i>', u.addEventListener("click", () => {
        const f = s.querySelector("code")?.textContent ?? "";
        navigator.clipboard.writeText(f), u.innerHTML = '<i class="fa-solid fa-check"></i>', setTimeout(() => {
          u.innerHTML = '<i class="fa-solid fa-clipboard"></i>';
        }, 1500);
      }), s.style.position = "relative", s.appendChild(u);
    });
  }, [i]), /* @__PURE__ */ E.jsx("div", { ref: r, className: "message-content markdown-rendered", dangerouslySetInnerHTML: { __html: i } });
}, Di = SillyTavern.getContext(), jA = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), o = parseInt(i[0].split("_")[2]);
  return s - o;
}).map(([, r]) => r.value), RA = (t, r, i, s) => {
  const o = structuredClone(t);
  if (i === "field" && s) {
    const u = r;
    return o.fields[s] && (o.fields[s].value = u.response), o;
  }
  if (i === "global") {
    const u = r;
    let f = jA(o), p = !1;
    if (u.fields_to_change?.length)
      for (const h of u.fields_to_change)
        o.fields[h.field] ? o.fields[h.field].value = h.value : o.draftFields[h.field] && (o.draftFields[h.field].value = h.value);
    if (u.draft_fields_to_remove?.length)
      for (const h of u.draft_fields_to_remove)
        o.draftFields[h] && delete o.draftFields[h];
    if (u.greetings_to_change?.length) {
      p = !0;
      for (const h of u.greetings_to_change)
        h.index > 0 && h.index <= f.length && (f[h.index - 1] = h.value);
    }
    if (u.greetings_to_remove?.length) {
      p = !0;
      const h = new Set(u.greetings_to_remove.map((m) => m - 1));
      f = f.filter((m, y) => !h.has(y));
    }
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add)), p && (Object.keys(o.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete o.fields[h];
    }), f.forEach((h, m) => {
      const y = `alternate_greetings_${m + 1}`;
      o.fields[y] = {
        value: h,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate Greeting ${m + 1}`
      };
    }));
  }
  return o;
}, zA = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, o] = $.useState(() => structuredClone(t)), u = (_, b, g) => {
    const d = structuredClone(s), S = g ? "draftFields" : "fields";
    d[S][_] && (d[S][_].value = b), o(d);
  }, f = (_, b) => {
    const g = structuredClone(s), d = `alternate_greetings_${_ + 1}`;
    g.fields[d] && (g.fields[d].value = b), o(g);
  }, { coreFields: p, alternateGreetings: h, draftFields: m } = $.useMemo(() => {
    const _ = [], b = [], g = [];
    return Qn.forEach((d) => {
      s.fields[d] && _.push({ id: d, label: s.fields[d].label, value: s.fields[d].value });
    }), Object.entries(s.fields).filter(([d]) => d.startsWith("alternate_greetings_")).sort((d, S) => parseInt(d[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, d]) => b.push(d.value)), Object.entries(s.draftFields).forEach(([d, S]) => {
      g.push({ id: d, label: S.label, value: S.value });
    }), { coreFields: _, alternateGreetings: b, draftFields: g };
  }, [s]), y = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ E.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ E.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ E.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ E.jsxs(de, { onClick: y, children: [
          /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ E.jsxs(de, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ E.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ E.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: _, label: b, value: g }) => /* @__PURE__ */ E.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ E.jsx("label", { children: b }),
        /* @__PURE__ */ E.jsx($t, { value: g, onChange: (d) => u(_, d.target.value, !1), rows: 4 })
      ] }, _)),
      m.length > 0 && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
        /* @__PURE__ */ E.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        m.map(({ id: _, label: b, value: g }) => /* @__PURE__ */ E.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ E.jsx("label", { children: b }),
          /* @__PURE__ */ E.jsx($t, { value: g, onChange: (d) => u(_, d.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      h.length > 0 && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
        /* @__PURE__ */ E.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((_, b) => /* @__PURE__ */ E.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ E.jsxs("label", { children: [
            "Greeting ",
            b + 1
          ] }),
          /* @__PURE__ */ E.jsx($t, { value: _, onChange: (g) => f(b, g.target.value), rows: 4 })
        ] }, b))
      ] })
    ] })
  ] });
}, LA = ({
  session: t,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: o,
  chatContextOptions: u
}) => {
  const [f, p] = $.useState(t.messages), [h, m] = $.useState(""), [y, _] = $.useState(!1), [b, g] = $.useState(null), [d, S] = $.useState(!1), [x, T] = $.useState(!1), [A, D] = $.useState(null), [C, N] = $.useState(""), M = $.useRef(null), k = $.useRef(null);
  $.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const H = $.useCallback(
    (G, ae, ce) => {
      if (JSON.stringify(ce) === JSON.stringify(ae))
        return G;
      const xe = bt.getSettings().prompts.existingFieldDefinitions;
      if (!xe) return G;
      const L = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(ce.fields), ...Object.keys(ae.fields)])).forEach((Se) => {
        const ke = ce.fields[Se]?.value ?? "", Ze = ae.fields[Se]?.value ?? "";
        if (ke !== Ze) {
          const $e = ae.fields[Se];
          $e && (Se.startsWith("alternate_greetings_") ? L.alternate_greetings[$e.label] = $e.value : Qn.includes(Se) && (L.core[$e.label] = $e.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(ce.draftFields), ...Object.keys(ae.draftFields)])).forEach((Se) => {
        const ke = ce.draftFields[Se]?.value ?? "", Ze = ae.draftFields[Se]?.value ?? "";
        if (ke !== Ze && ae.draftFields[Se]) {
          const $e = ae.draftFields[Se];
          L.draft[$e.label] = $e.value;
        }
      }), Object.keys(L.core).length === 0 && Object.keys(L.alternate_greetings).length === 0 && Object.keys(L.draft).length === 0)
        return G;
      const ye = { fields: L };
      let Ye = Ct.compile(xe.content, { noEscape: !0 })(ye);
      if (Ye = Di.substituteParams(Ye), Ye.trim()) {
        const Se = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: Ye.trim(),
          isStateUpdate: !0
        };
        return [...G, Se];
      }
      return G;
    },
    []
  ), X = $.useCallback(
    async (G, ae, ce, Ce) => {
      const xe = bt.getSettings();
      if (!t.profileId) {
        Ne("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), ce(), _(!0);
      try {
        const L = [], ne = Di.extensionSettings.connectionManager?.profiles?.find(
          (Se) => Se.id === t.profileId
        ), se = ne?.api ? Di.CONNECT_API_MAP[ne.api].selected : void 0;
        if (!se) {
          Ne("warning", "No API selected for this session.");
          return;
        }
        for (const Se of G)
          if (Se.id === Zd) {
            if (It === void 0 && !Jn) continue;
            const ke = await g0(se, u);
            ke.warnings?.length && ke.warnings.forEach((Ze) => Ne("warning", Ze)), L.push(...ke.result);
          } else
            L.push(Se);
        const ye = G.slice(0, G.length - (ae ? 0 : 1)).reverse().find((Se) => Se.stateSnapshot)?.stateSnapshot ?? o, Ye = xe.prompts.existingFieldDefinitions;
        if (Ye) {
          const Se = {
            fields: {
              core: Object.fromEntries(
                Object.entries(ye.fields).filter(([Ze]) => !Ze.startsWith("alternate_greetings_")).map(([, Ze]) => [Ze.label, Ze.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(ye.fields).filter(([Ze]) => Ze.startsWith("alternate_greetings_")).map(([, Ze]) => [Ze.label, Ze.value])
              ),
              draft: Object.fromEntries(Object.entries(ye.draftFields).map(([, Ze]) => [Ze.label, Ze.value]))
            }
          };
          let ke = Ct.compile(Ye.content, { noEscape: !0 })(Se);
          if (ke = Di.substituteParams(ke), ke.trim()) {
            const Ze = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: ke.trim()
            }, $e = L.pop();
            L.push(Ze), $e && L.push($e);
          }
        }
        if (t.isReadonly) {
          L.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const Se = await A1(
            t.profileId,
            L,
            xe.maxResponseToken,
            k.current.signal
          ), ke = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Se
          }, Ze = [...G, ke];
          p(Ze), s({ ...t, messages: Ze });
        } else {
          const Se = t.type === "field" ? vA : (() => {
            const Le = [...Object.keys(ye.fields), ...Object.keys(ye.draftFields)], Ge = Object.keys(ye.draftFields);
            return _A(Le, Ge);
          })(), Ze = await wA(
            t.profileId,
            L,
            Se,
            t.type === "field" ? Jy.FIELD : Jy.GLOBAL,
            t.promptEngineeringMode,
            xe.maxResponseToken,
            k.current.signal
          ), $e = RA(ye, Ze, t.type, t.targetFieldId), be = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Ze.justification,
            stateSnapshot: $e
          };
          let he = [...G, be];
          he = H(he, $e, ye), p(he), s({ ...t, messages: he });
        }
      } catch (L) {
        L.name === "AbortError" ? Ne("info", "Request was cancelled.") : (console.error("Revise request failed:", L), Ne("error", `Request failed: ${L.message}`)), Ce();
      } finally {
        _(!1), k.current = null;
      }
    },
    [t, s, o, u, H]
  ), P = $.useCallback(async () => {
    if (!h.trim() || y) return;
    const G = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, ae = f;
    X(
      [...f, G],
      !1,
      () => {
        p([...f, G]), m("");
      },
      () => p(ae)
    );
  }, [h, y, f, X]), Y = $.useCallback(async () => {
    if (y || f.length === 0) return;
    const G = f;
    let ae = [...f];
    const ce = f.findLastIndex((Ce) => !Ce.isStateUpdate);
    ce > -1 && f[ce].role === "assistant" && (ae = f.slice(0, ce)), await X(
      ae,
      !0,
      () => p(ae),
      () => p(G)
    );
  }, [y, f, X]), K = () => {
    const G = f.slice().reverse().find((ae) => ae.stateSnapshot)?.stateSnapshot ?? o;
    i(G), r();
  }, ue = (G) => {
    const ae = f.findIndex((xe) => xe.id === G);
    if (ae === -1 || !f[ae].stateSnapshot) return;
    const ce = f[ae].stateSnapshot;
    let Ce = o;
    for (let xe = ae - 1; xe >= 0; xe--)
      if (f[xe].stateSnapshot) {
        Ce = f[xe].stateSnapshot;
        break;
      }
    g({ before: Ce, after: ce });
  }, me = () => {
    S(!0);
  }, ve = (G) => {
    D(G.id), N(G.content);
  }, B = () => {
    D(null), N("");
  }, re = async () => {
    if (!A) return;
    const G = f.findIndex((ne) => ne.id === A);
    if (G === -1 || !await Di.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ce = f, Ce = f.slice(0, G), xe = { ...f[G], content: C }, L = [...Ce, xe];
    B(), X(
      L,
      !1,
      () => p(L),
      () => p(ce)
    );
  }, pe = async (G) => {
    const ae = f.findIndex((ne) => ne.id === G);
    if (ae === -1) return;
    const Ce = !!f[ae].isInitial;
    if (!await Di.Popup.show.confirm(
      "Delete Message",
      Ce ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let L;
    Ce ? L = f.filter((ne) => ne.isInitial && ne.id !== G) : L = f.slice(0, ae), p(L), s({ ...t, messages: L }), Ne("info", "Message history has been updated.");
  }, Re = f.filter((G) => !G.isStateUpdate), R = Re.filter((G) => G.isInitial), W = Re.filter((G) => !G.isInitial), ie = f.slice().reverse().find((G) => G.stateSnapshot)?.stateSnapshot ?? o, le = () => {
    T(!0);
  }, F = (G) => {
    const ae = f.slice().reverse().find((xe) => xe.stateSnapshot)?.stateSnapshot ?? o, ce = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: G
    };
    let Ce = [...f, ce];
    Ce = H(Ce, G, ae), p(Ce), s({ ...t, messages: Ce }), T(!1);
  }, fe = () => {
    k.current?.abort();
  };
  return /* @__PURE__ */ E.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ E.jsx("h2", { children: t.name }),
      /* @__PURE__ */ E.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ E.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.isReadonly ?? !1,
              onChange: (G) => s({ ...t, isReadonly: G.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ E.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ E.jsx(
          $0,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (G) => s({ ...t, profileId: G?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ E.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (G) => s({ ...t, promptEngineeringMode: G.target.value }),
            title: "Prompt Engineering Mode",
            disabled: t.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ E.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ E.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ E.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ E.jsx(de, { onClick: me, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ E.jsx(de, { onClick: le, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ E.jsx(de, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ E.jsxs(de, { onClick: K, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ E.jsxs("div", { className: "chat-messages", children: [
      R.length > 0 && /* @__PURE__ */ E.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ E.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ E.jsx("div", { className: "initial-messages-content", children: R.map(
          (G) => A === G.id ? /* @__PURE__ */ E.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ E.jsx($t, { value: C, onChange: (ae) => N(ae.target.value), rows: 5 }),
            /* @__PURE__ */ E.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ E.jsxs(de, { onClick: re, children: [
                /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ E.jsxs(de, { onClick: B, children: [
                /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, G.id) : /* @__PURE__ */ E.jsxs("div", { className: `message-bubble-wrapper initial-context ${G.role}`, children: [
            /* @__PURE__ */ E.jsx("div", { className: `message-bubble ${G.role} initial`, children: /* @__PURE__ */ E.jsx("div", { className: "message-content", children: G.content }) }),
            !y && G.id !== Zd && /* @__PURE__ */ E.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ E.jsxs(
                de,
                {
                  className: "message-action-button",
                  onClick: () => ve(G),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ E.jsxs(
                de,
                {
                  className: "message-action-button danger_button",
                  onClick: () => pe(G.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, G.id)
        ) })
      ] }),
      W.map(
        (G) => A === G.id ? /* @__PURE__ */ E.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ E.jsx($t, { value: C, onChange: (ae) => N(ae.target.value), rows: 3 }),
          /* @__PURE__ */ E.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ E.jsxs(de, { onClick: re, children: [
              /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ E.jsxs(de, { onClick: B, children: [
              /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, G.id) : /* @__PURE__ */ E.jsxs("div", { className: `message-bubble-wrapper ${G.role}`, children: [
          /* @__PURE__ */ E.jsxs("div", { className: "message-actions", children: [
            G.role === "user" && !G.stateSnapshot && !y && /* @__PURE__ */ E.jsxs(
              de,
              {
                className: "message-action-button",
                onClick: () => ve(G),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            G.stateSnapshot && !y && /* @__PURE__ */ E.jsxs(
              de,
              {
                className: "message-action-button",
                onClick: () => ue(G.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !y && /* @__PURE__ */ E.jsxs(
              de,
              {
                className: "message-action-button danger_button",
                onClick: () => pe(G.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ E.jsx("div", { className: `message-bubble ${G.role}`, children: G.role === "assistant" ? /* @__PURE__ */ E.jsx(T1, { content: G.content }) : /* @__PURE__ */ E.jsx("div", { className: "message-content", children: G.content }) })
        ] }, G.id)
      ),
      W.length > 0 && !y && /* @__PURE__ */ E.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ E.jsxs(de, { onClick: Y, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ E.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ E.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ E.jsx(de, { onClick: fe, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ E.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ E.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ E.jsx(
        $t,
        {
          value: h,
          onChange: (G) => m(G.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: y || !!A,
          onKeyDown: (G) => {
            G.key === "Enter" && !G.shiftKey && (G.preventDefault(), P());
          }
        }
      ),
      /* @__PURE__ */ E.jsxs(de, { onClick: P, disabled: y || !h.trim() || !!A, children: [
        " ",
        /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    b && /* @__PURE__ */ E.jsx(
      zi,
      {
        type: bn.DISPLAY,
        content: /* @__PURE__ */ E.jsx(NA, { before: b.before, after: b.after }),
        onComplete: () => g(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ E.jsx(
      zi,
      {
        type: bn.DISPLAY,
        content: /* @__PURE__ */ E.jsx(TA, { currentState: ie, initialState: o }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    x && /* @__PURE__ */ E.jsx(
      zi,
      {
        type: bn.DISPLAY,
        content: /* @__PURE__ */ E.jsx(
          zA,
          {
            initialState: ie,
            onSave: F,
            onClose: () => T(!1)
          }
        ),
        onComplete: () => T(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function PA(t, r, i, s, o) {
  const u = bt.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], m = {
    ...{
      user: Ft.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: Ft.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(t.fields).filter(([g]) => !g.startsWith("alternate_greetings_")).map(([, g]) => [g.label, g.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([g]) => g.startsWith("alternate_greetings_")).map(([, g]) => [g.label, g.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, g]) => [g.label, g.value]))
    }
  };
  if (s.charCard) {
    const g = [];
    o.selectedCharacterIndexes.forEach((d) => {
      const S = Ft.characters[parseInt(d)];
      S && g.push(S);
    }), m.characters = g;
  }
  if (s.worldInfo) {
    const g = {};
    await Promise.all(
      o.selectedWorldNames.map(async (d) => {
        const S = await Ft.loadWorldInfo(d);
        S && (g[d] = Object.values(S.entries).filter((x) => !x.disable));
      })
    ), m.lorebooks = g;
  }
  for (const g of f.prompts) {
    if (!g.enabled || g.promptName === "stDescription" && !s.stDescription || g.promptName === "charDefinitions" && !s.charCard || g.promptName === "lorebookDefinitions" && !s.worldInfo || g.promptName === "existingFieldDefinitions" && !s.existingFields || g.promptName === "personaDescription" && !s.persona || g.promptName === "chatHistory" && s.messages.type === "none" || It === void 0 && !Jn && g.promptName === "chatHistory") continue;
    if (g.promptName === "chatHistory") {
      p.push({
        id: Zd,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(g.promptName))
      continue;
    const S = u.prompts[g.promptName];
    if (!S || S.content.includes("{{activeFormatInstructions}}"))
      continue;
    let x = "";
    x = Ct.compile(S.content, { noEscape: !0 })(m), x = Ft.substituteParams(x), x.trim() && p.push({
      id: `im-${p.length}`,
      role: g.role,
      content: x.trim(),
      isInitial: !0
    });
  }
  const y = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, b = Ct.compile(_, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: y
  });
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: b,
    isInitial: !0
  }), p;
}
const iu = SillyTavern.getContext(), Wy = "charCreator_reviseSessions", IA = ({
  target: t,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: o,
  sessionForContext: u
}) => {
  const [f, p] = $.useState([]), [h, m] = $.useState(null), [y, _] = $.useState(!0);
  $.useEffect(() => {
    const D = JSON.parse(localStorage.getItem(Wy) || "[]");
    p(D), _(!1);
  }, []);
  const b = $.useMemo(() => f.filter((D) => D.type === t.type && (D.type === "global" || D.targetFieldId === t.fieldId)).sort((D, C) => new Date(C.createdAt).getTime() - new Date(D.createdAt).getTime()), [f, t]), g = (D) => {
    localStorage.setItem(Wy, JSON.stringify(D)), p(D);
  }, d = async () => {
    const D = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", C = await iu.Popup.show.input(
      "New Session Name",
      `Session for ${D} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (C)
      try {
        const N = bt.getSettings();
        if (!N.profileId) {
          Ne("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const M = {
          id: `rs-${Date.now()}`,
          name: C,
          type: t.type,
          targetFieldId: t.fieldId,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: [],
          // Will be populated next
          context: {
            mainContextTemplatePreset: N.mainContextTemplatePreset
          },
          profileId: N.profileId,
          promptEngineeringMode: N.defaultPromptEngineeringMode,
          isReadonly: !1
        }, k = await PA(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          o,
          u
        );
        M.messages = k, m(M);
      } catch (N) {
        console.error("Failed to create session:", N), Ne("error", `Failed to create session: ${N.message}`);
      }
  }, S = (D) => {
    m(D);
  }, x = async (D) => {
    if (await iu.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const N = f.filter((M) => M.id !== D);
      g(N);
    }
  }, T = (D) => {
    const C = f.findIndex((M) => M.id === D.id), N = [...f];
    C !== -1 ? N[C] = D : N.push(D), g(N), m(D);
  };
  if (h) {
    const D = iu.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === h.profileId
    ), C = {
      targetCharacterId: It,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Jn,
      presetName: D?.preset,
      contextName: D?.context,
      instructName: D?.instruct
    }, N = o.messages;
    switch (N.type) {
      case "none":
        C.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        C.messageIndexesBetween = { start: 0, end: N.first ?? 10 };
        break;
      case "last":
        const M = iu.chat?.length ?? 0, k = N.last ?? 10;
        C.messageIndexesBetween = {
          end: Math.max(0, M - 1),
          start: Math.max(0, M - k)
        };
        break;
      case "range":
        C.messageIndexesBetween = {
          start: N.range?.start ?? 0,
          end: N.range?.end ?? 10
        };
        break;
    }
    return It === void 0 && !Jn && (C.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ E.jsx(
      LA,
      {
        session: h,
        onBack: () => m(null),
        onApply: i,
        onSessionUpdate: T,
        initialState: s,
        chatContextOptions: C
      }
    );
  }
  const A = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ E.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ E.jsx("div", { className: "popup_header", children: /* @__PURE__ */ E.jsxs("h2", { children: [
      'Revise Sessions for "',
      A,
      '"'
    ] }) }),
    /* @__PURE__ */ E.jsx("div", { className: "session-list", children: y ? /* @__PURE__ */ E.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : b.length === 0 ? /* @__PURE__ */ E.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : b.map((D) => /* @__PURE__ */ E.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ E.jsxs("div", { className: "session-info", onClick: () => S(D), children: [
        /* @__PURE__ */ E.jsx("span", { className: "session-name", children: D.name }),
        /* @__PURE__ */ E.jsx("span", { className: "session-date", children: new Date(D.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ E.jsx(de, { className: "danger_button", onClick: () => x(D.id), children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ E.jsx("div", { className: "session-actions", children: /* @__PURE__ */ E.jsxs(de, { onClick: d, className: "menu_button", children: [
      /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, BA = SillyTavern.getContext();
function O1(t) {
  return new Promise((r, i) => {
    const s = new FileReader();
    s.onload = () => r(s.result), s.onerror = () => i(new Error("Failed to read file")), s.readAsDataURL(t);
  });
}
async function UA(t) {
  const i = (await O1(t)).split(",")[1], s = t.type.split("/")[1] || "png", o = `brainstorm_${Date.now()}`, u = await fetch("/api/images/upload", {
    method: "POST",
    headers: BA.getRequestHeaders(),
    body: JSON.stringify({
      image: i,
      format: s,
      ch_name: "brainstorm",
      filename: o
    })
  });
  if (!u.ok)
    throw new Error(`Image upload failed: ${u.statusText}`);
  return {
    url: (await u.json()).path,
    name: t.name
  };
}
async function HA(t) {
  const r = await fetch(t);
  if (!r.ok)
    throw new Error(`Failed to fetch image: ${r.statusText}`);
  const i = await r.blob();
  return new Promise((s, o) => {
    const u = new FileReader();
    u.onload = () => s(u.result), u.onerror = () => o(new Error("Failed to convert image to data URL")), u.readAsDataURL(i);
  });
}
const e0 = SillyTavern.getContext(), qA = ({ session: t, onBack: r, onSessionUpdate: i }) => {
  const [s, o] = $.useState(t.messages), [u, f] = $.useState(""), [p, h] = $.useState(!1), [m, y] = $.useState(null), [_, b] = $.useState(""), [g, d] = $.useState([]), S = $.useRef(null), x = $.useRef(null), [T, A] = $.useState([]), [D, C] = $.useState([]), N = $.useRef(null), M = $.useRef(/* @__PURE__ */ new Map()), k = $.useCallback(async (F) => {
    const fe = F.filter((ae) => ae.type.startsWith("image/"));
    if (fe.length === 0) return;
    A((ae) => [...ae, ...fe]);
    const G = await Promise.all(fe.map((ae) => O1(ae)));
    C((ae) => [...ae, ...G]);
  }, []), H = $.useCallback((F) => {
    A((fe) => fe.filter((G, ae) => ae !== F)), C((fe) => fe.filter((G, ae) => ae !== F));
  }, []), X = $.useCallback(
    (F) => {
      const fe = Array.from(F.clipboardData.files);
      fe.some((G) => G.type.startsWith("image/")) && (F.preventDefault(), k(fe));
    },
    [k]
  ), P = $.useCallback(
    (F) => {
      const fe = Array.from(F.target.files || []);
      k(fe), N.current && (N.current.value = "");
    },
    [k]
  );
  $.useEffect(() => {
    S.current?.scrollIntoView({ behavior: "smooth" });
  }, [s]);
  const Y = $.useCallback(
    async (F, fe, G) => {
      const ae = bt.getSettings();
      if (!ae.profileId) {
        Ne("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      x.current = new AbortController();
      for (const ce of F)
        if (ce.images) {
          for (const Ce of ce.images)
            if (!M.current.has(Ce.url))
              try {
                const xe = await HA(Ce.url);
                M.current.set(Ce.url, xe);
              } catch (xe) {
                console.warn(`Failed to load image ${Ce.url}, skipping`, xe);
              }
        }
      fe(), h(!0);
      try {
        const ce = AA(F, M.current), Ce = await A1(
          ae.profileId,
          ce,
          ae.maxResponseToken,
          x.current.signal
        ), xe = {
          id: `bm-${Date.now()}-ai`,
          role: "assistant",
          content: Ce
        }, L = [...F, xe];
        o(L), i({ ...t, messages: L });
      } catch (ce) {
        ce.name === "AbortError" ? Ne("info", "Request was cancelled.") : (console.error("Brainstorm request failed:", ce), Ne("error", `Request failed: ${ce.message}`)), G();
      } finally {
        h(!1), x.current = null;
      }
    },
    [t, i]
  ), K = $.useCallback(async () => {
    if (p) return;
    const F = s.filter((xe) => !xe.isInitial), G = F[F.length - 1]?.role === "user";
    if (!u.trim() && T.length === 0 && !G) return;
    if (!u.trim() && T.length === 0 && G) {
      const xe = s;
      await Y(
        s,
        () => {
        },
        () => o(xe)
      );
      return;
    }
    let ae = [];
    if (T.length > 0)
      try {
        ae = await Promise.all(T.map((xe) => UA(xe)));
        for (let xe = 0; xe < ae.length; xe++)
          M.current.set(ae[xe].url, D[xe]);
      } catch (xe) {
        console.error("Image upload failed:", xe), Ne("error", `Image upload failed: ${xe.message}`);
        return;
      }
    const ce = {
      id: `bm-${Date.now()}`,
      role: "user",
      content: u.trim(),
      ...ae.length > 0 ? { images: ae } : {}
    }, Ce = s;
    Y(
      [...s, ce],
      () => {
        o([...s, ce]), f(""), A([]), C([]);
      },
      () => o(Ce)
    );
  }, [u, p, s, Y, T, D]), ue = $.useCallback(async () => {
    if (p || s.length === 0) return;
    const F = s;
    let fe = [...s];
    const G = s.length - 1;
    s[G].role === "assistant" && (fe = s.slice(0, G)), await Y(
      fe,
      () => o(fe),
      () => o(F)
    );
  }, [p, s, Y]), me = (F) => {
    y(F.id), b(F.content), d(F.images ? [...F.images] : []);
  }, ve = () => {
    y(null), b(""), d([]);
  }, B = async () => {
    if (!m) return;
    const F = s.findIndex((L) => L.id === m);
    if (F === -1) return;
    if (s[F].role === "assistant") {
      const L = s.map(
        (ne) => ne.id === m ? { ...ne, content: _, images: g.length > 0 ? g : void 0 } : ne
      );
      o(L), i({ ...t, messages: L }), ve();
      return;
    }
    if (!await e0.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ae = s, ce = s.slice(0, F), Ce = {
      ...s[F],
      content: _,
      images: g.length > 0 ? g : void 0
    }, xe = [...ce, Ce];
    ve(), Y(
      xe,
      () => o(xe),
      () => o(ae)
    );
  }, re = async (F) => {
    const fe = s.findIndex((xe) => xe.id === F);
    if (fe === -1) return;
    const ae = !!s[fe].isInitial;
    if (!await e0.Popup.show.confirm(
      "Delete Message",
      ae ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let Ce;
    ae ? Ce = s.filter((xe) => xe.isInitial && xe.id !== F) : Ce = s.slice(0, fe), o(Ce), i({ ...t, messages: Ce }), Ne("info", "Message history has been updated.");
  }, pe = () => {
    x.current?.abort();
  }, Re = s.filter((F) => F.isInitial), R = s.filter((F) => !F.isInitial), W = R.filter((F) => F.role === "assistant").at(-1)?.id, ie = R[R.length - 1], le = !!(ie && ie.role === "user");
  return /* @__PURE__ */ E.jsxs("div", { className: "brainstorm-chat", children: [
    /* @__PURE__ */ E.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ E.jsx("h3", { children: t.name }),
      /* @__PURE__ */ E.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ E.jsxs(de, { onClick: r, title: "Back to sessions", children: [
        /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-arrow-left" }),
        " Back"
      ] }) })
    ] }),
    /* @__PURE__ */ E.jsxs("div", { className: "chat-messages", children: [
      Re.length > 0 && /* @__PURE__ */ E.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ E.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ E.jsx("div", { className: "initial-messages-content", children: Re.map(
          (F) => m === F.id ? /* @__PURE__ */ E.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ E.jsx($t, { value: _, onChange: (fe) => b(fe.target.value), rows: 5 }),
            g.length > 0 && /* @__PURE__ */ E.jsx("div", { className: "pending-images-preview", children: g.map((fe, G) => /* @__PURE__ */ E.jsxs("div", { className: "pending-image-item", children: [
              /* @__PURE__ */ E.jsx("img", { src: fe.url, alt: fe.name }),
              /* @__PURE__ */ E.jsx(
                de,
                {
                  className: "remove-image-button danger_button",
                  onClick: () => d((ae) => ae.filter((ce, Ce) => Ce !== G)),
                  title: "Remove image",
                  children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-times" })
                }
              )
            ] }, G)) }),
            /* @__PURE__ */ E.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ E.jsxs(de, { onClick: B, children: [
                /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ E.jsxs(de, { onClick: ve, children: [
                /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, F.id) : /* @__PURE__ */ E.jsxs("div", { className: `message-bubble-wrapper initial-context ${F.role}`, children: [
            /* @__PURE__ */ E.jsx("div", { className: `message-bubble ${F.role} initial`, children: /* @__PURE__ */ E.jsx("div", { className: "message-content", children: F.content }) }),
            !p && /* @__PURE__ */ E.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ E.jsx(
                de,
                {
                  className: "message-action-button",
                  onClick: () => me(F),
                  title: "Edit Context",
                  children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ E.jsx(
                de,
                {
                  className: "message-action-button danger_button",
                  onClick: () => re(F.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, F.id)
        ) })
      ] }),
      R.map((F) => {
        const fe = F.role === "assistant" && F.id === W;
        return m === F.id ? /* @__PURE__ */ E.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ E.jsx($t, { value: _, onChange: (ae) => b(ae.target.value), rows: 10 }),
          g.length > 0 && /* @__PURE__ */ E.jsx("div", { className: "pending-images-preview", children: g.map((ae, ce) => /* @__PURE__ */ E.jsxs("div", { className: "pending-image-item", children: [
            /* @__PURE__ */ E.jsx("img", { src: ae.url, alt: ae.name }),
            /* @__PURE__ */ E.jsx(
              de,
              {
                className: "remove-image-button danger_button",
                onClick: () => d((Ce) => Ce.filter((xe, L) => L !== ce)),
                title: "Remove image",
                children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-times" })
              }
            )
          ] }, ce)) }),
          /* @__PURE__ */ E.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ E.jsxs(de, { onClick: B, children: [
              /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-check" }),
              " ",
              F.role === "assistant" ? "Save" : "Save & Fork"
            ] }),
            /* @__PURE__ */ E.jsxs(de, { onClick: ve, children: [
              /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, F.id) : /* @__PURE__ */ E.jsx("div", { className: `message-bubble-wrapper ${F.role}`, children: /* @__PURE__ */ E.jsxs("div", { className: `message-bubble ${F.role}`, children: [
          !p && /* @__PURE__ */ E.jsxs("div", { className: "message-actions", children: [
            /* @__PURE__ */ E.jsx(
              de,
              {
                className: "message-action-button",
                onClick: () => me(F),
                title: F.role === "assistant" ? "Edit Message" : "Edit and Fork",
                children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            fe && /* @__PURE__ */ E.jsx(
              de,
              {
                className: "message-action-button",
                onClick: ue,
                title: "Regenerate response",
                children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-rotate-right" })
              }
            ),
            /* @__PURE__ */ E.jsx(
              de,
              {
                className: "message-action-button danger_button",
                onClick: () => re(F.id),
                title: "Delete Message",
                children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          F.role === "assistant" ? /* @__PURE__ */ E.jsx(T1, { content: F.content }) : /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
            /* @__PURE__ */ E.jsx("div", { className: "message-content", children: F.content }),
            F.images && F.images.length > 0 && /* @__PURE__ */ E.jsx("div", { className: "message-images", children: F.images.map((ae, ce) => /* @__PURE__ */ E.jsx(
              "img",
              {
                src: ae.url,
                alt: ae.name,
                title: ae.name,
                onClick: () => window.open(ae.url, "_blank")
              },
              ce
            )) })
          ] })
        ] }) }, F.id);
      }),
      p && /* @__PURE__ */ E.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ E.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ E.jsx(de, { onClick: pe, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ E.jsx("div", { ref: S })
    ] }),
    D.length > 0 && /* @__PURE__ */ E.jsx("div", { className: "pending-images-preview", children: D.map((F, fe) => /* @__PURE__ */ E.jsxs("div", { className: "pending-image-item", children: [
      /* @__PURE__ */ E.jsx("img", { src: F, alt: T[fe]?.name || "pending" }),
      /* @__PURE__ */ E.jsx(
        de,
        {
          className: "remove-image-button danger_button",
          onClick: () => H(fe),
          title: "Remove image",
          children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-times" })
        }
      )
    ] }, fe)) }),
    /* @__PURE__ */ E.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ E.jsx(
        "input",
        {
          ref: N,
          type: "file",
          accept: "image/*",
          multiple: !0,
          style: { display: "none" },
          onChange: P
        }
      ),
      /* @__PURE__ */ E.jsx(
        $t,
        {
          value: u,
          onChange: (F) => f(F.target.value),
          placeholder: "Brainstorm ideas for your character...",
          rows: 3,
          disabled: p || !!m,
          onKeyDown: (F) => {
            F.key === "Enter" && !F.shiftKey && (F.preventDefault(), K());
          },
          onPaste: X
        }
      ),
      /* @__PURE__ */ E.jsx(
        de,
        {
          className: "image-attach-button",
          onClick: () => N.current?.click(),
          disabled: p || !!m,
          title: "Attach image",
          children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-paperclip" })
        }
      ),
      /* @__PURE__ */ E.jsx(
        de,
        {
          onClick: K,
          disabled: p || !!m || !u.trim() && T.length === 0 && !le,
          children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-paper-plane" })
        }
      )
    ] })
  ] });
};
async function FA(t, r, i, s, o) {
  const u = bt.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], m = {
    ...{
      user: Ft.name1 || "You",
      char: t.name?.value || "Character",
      persona: Ft.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(t).filter(([_]) => !_.startsWith("alternate_greetings_")).map(([, _]) => [_.label, _.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t).filter(([_]) => _.startsWith("alternate_greetings_")).map(([, _]) => [_.label, _.value])
      ),
      draft: Object.fromEntries(Object.entries(r).map(([, _]) => [_.label, _.value]))
    }
  };
  if (s.charCard) {
    const _ = [];
    o.selectedCharacterIndexes.forEach((b) => {
      const g = Ft.characters[parseInt(b)];
      g && _.push(g);
    }), m.characters = _;
  }
  if (s.worldInfo) {
    const _ = {};
    await Promise.all(
      o.selectedWorldNames.map(async (b) => {
        const g = await Ft.loadWorldInfo(b);
        g && (_[b] = Object.values(g.entries).filter((d) => !d.disable));
      })
    ), m.lorebooks = _;
  }
  const y = u.prompts.brainstormSystemPrompt;
  if (y?.content) {
    let _ = Ct.compile(y.content, { noEscape: !0 })(m);
    _ = Ft.substituteParams(_), _.trim() && p.push({
      id: `im-${p.length}`,
      role: "system",
      content: _.trim(),
      isInitial: !0
    });
  }
  for (const _ of f.prompts) {
    if (!_.enabled || _.promptName === "stDescription" && !s.stDescription || _.promptName === "charDefinitions" && !s.charCard || _.promptName === "lorebookDefinitions" && !s.worldInfo || _.promptName === "existingFieldDefinitions" && !s.existingFields || _.promptName === "personaDescription" && !s.persona || _.promptName === "chatHistory" && s.messages.type === "none" || It === void 0 && !Jn && _.promptName === "chatHistory" || _.promptName === "chatHistory" || [
      "taskDescription",
      "outputFormatInstructions",
      "reviseTaskDescription",
      "reviseJsonPrompt",
      "reviseXmlPrompt",
      "brainstormSystemPrompt"
    ].includes(_.promptName)) continue;
    const g = u.prompts[_.promptName];
    if (!g || g.content.includes("{{activeFormatInstructions}}")) continue;
    let d = Ct.compile(g.content, { noEscape: !0 })(m);
    d = Ft.substituteParams(d), d.trim() && p.push({
      id: `im-${p.length}`,
      role: _.role,
      content: d.trim(),
      isInitial: !0
    });
  }
  return p;
}
const t0 = SillyTavern.getContext(), _d = "charCreator_brainstormSessions", ZA = 5, GA = ({ contextToSend: t, sessionForContext: r }) => {
  const [i, s] = $.useState([]), [o, u] = $.useState(null), [f, p] = $.useState(!0);
  $.useEffect(() => {
    const x = JSON.parse(localStorage.getItem(_d) || "[]"), T = x.some((D) => D.saved === void 0), A = x.map((D) => ({
      ...D,
      saved: D.saved ?? !0
    }));
    T && localStorage.setItem(_d, JSON.stringify(A)), s(A), p(!1);
  }, []);
  const h = $.useMemo(() => i.filter((x) => x.saved).sort((x, T) => new Date(T.createdAt).getTime() - new Date(x.createdAt).getTime()), [i]), m = $.useMemo(() => i.filter((x) => !x.saved).sort((x, T) => new Date(T.createdAt).getTime() - new Date(x.createdAt).getTime()), [i]), y = (x) => {
    localStorage.setItem(_d, JSON.stringify(x)), s(x);
  }, _ = async () => {
    const x = `Brainstorm - ${(/* @__PURE__ */ new Date()).toLocaleString()}`;
    try {
      const T = bt.getSettings();
      if (!T.profileId) {
        Ne("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      const A = {
        id: `bs-${Date.now()}`,
        name: x,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        messages: [],
        contextConfig: {
          stDescription: t.stDescription,
          charCard: t.charCard,
          existingFields: t.existingFields,
          worldInfo: t.worldInfo,
          persona: t.persona,
          messages: t.messages
        },
        saved: !1
      }, D = await FA(
        r.fields,
        r.draftFields,
        T.mainContextTemplatePreset,
        t,
        r
      );
      A.messages = D;
      let C = [...i];
      const N = C.filter((M) => !M.saved).sort((M, k) => new Date(M.createdAt).getTime() - new Date(k.createdAt).getTime());
      if (N.length >= ZA) {
        const M = N[0];
        C = C.filter((k) => k.id !== M.id), o?.id === M.id && u(null);
      }
      C.push(A), y(C), u(A);
    } catch (T) {
      console.error("Failed to create brainstorm session:", T), Ne("error", `Failed to create session: ${T.message}`);
    }
  }, b = (x) => {
    u(x);
  }, g = async (x) => {
    if (await t0.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const A = i.filter((D) => D.id !== x);
      y(A), o?.id === x && u(null);
    }
  }, d = async (x) => {
    const T = i.find((C) => C.id === x);
    if (!T) return;
    const A = await t0.Popup.show.input("Save Session", T.name);
    if (!A) return;
    const D = i.map((C) => C.id === x ? { ...C, saved: !0, name: A } : C);
    y(D), o?.id === x && u({ ...T, saved: !0, name: A });
  }, S = (x) => {
    const T = i.findIndex((D) => D.id === x.id), A = [...i];
    T !== -1 ? A[T] = x : A.push(x), y(A), u(x);
  };
  return o ? /* @__PURE__ */ E.jsx(
    qA,
    {
      session: o,
      onBack: () => u(null),
      onSessionUpdate: S
    }
  ) : /* @__PURE__ */ E.jsxs("div", { className: "brainstorm-session-manager", children: [
    /* @__PURE__ */ E.jsx("div", { className: "popup_header", children: /* @__PURE__ */ E.jsx("h3", { children: "Brainstorm Sessions" }) }),
    /* @__PURE__ */ E.jsx("div", { className: "session-list", children: f ? /* @__PURE__ */ E.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : h.length === 0 && m.length === 0 ? /* @__PURE__ */ E.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
      m.length > 0 && /* @__PURE__ */ E.jsxs("div", { className: "session-section", children: [
        /* @__PURE__ */ E.jsxs("h4", { className: "session-section-header", children: [
          /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-clock" }),
          " Workspace"
        ] }),
        m.map((x) => /* @__PURE__ */ E.jsxs("div", { className: "session-item", children: [
          /* @__PURE__ */ E.jsxs("div", { className: "session-info", onClick: () => b(x), children: [
            /* @__PURE__ */ E.jsx("span", { className: "session-name", children: x.name }),
            /* @__PURE__ */ E.jsx("span", { className: "session-date", children: new Date(x.createdAt).toLocaleString() })
          ] }),
          /* @__PURE__ */ E.jsxs("div", { className: "session-item-actions", children: [
            /* @__PURE__ */ E.jsx(de, { className: "menu_button", onClick: () => d(x.id), children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-floppy-disk" }) }),
            /* @__PURE__ */ E.jsx(de, { className: "danger_button", onClick: () => g(x.id), children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-trash-can" }) })
          ] })
        ] }, x.id))
      ] }),
      h.length > 0 && /* @__PURE__ */ E.jsxs("div", { className: "session-section", children: [
        /* @__PURE__ */ E.jsxs("h4", { className: "session-section-header", children: [
          /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-bookmark" }),
          " Saved"
        ] }),
        h.map((x) => /* @__PURE__ */ E.jsxs("div", { className: "session-item", children: [
          /* @__PURE__ */ E.jsxs("div", { className: "session-info", onClick: () => b(x), children: [
            /* @__PURE__ */ E.jsx("span", { className: "session-name", children: x.name }),
            /* @__PURE__ */ E.jsx("span", { className: "session-date", children: new Date(x.createdAt).toLocaleString() })
          ] }),
          /* @__PURE__ */ E.jsx(de, { className: "danger_button", onClick: () => g(x.id), children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-trash-can" }) })
        ] }, x.id))
      ] })
    ] }) }),
    /* @__PURE__ */ E.jsx("div", { className: "session-actions", children: /* @__PURE__ */ E.jsxs(de, { onClick: _, className: "menu_button", children: [
      /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
};
Ct.helpers.add || Ct.registerHelper("add", function(t, r) {
  return Number(t) + Number(r);
});
Ct.helpers.join || Ct.registerHelper("join", function(t, r) {
  return Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "";
});
Ct.helpers.is_not_empty || Ct.registerHelper("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Mn = SillyTavern.getContext(), n0 = "charCreator", Sd = () => ({
  selectedCharacterIndexes: It ? [String(It)] : [],
  selectedWorldNames: [],
  fields: Qn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Sr[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), VA = {
  name: { label: Sr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Sr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Sr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Sr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Sr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Sr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, YA = () => {
  const t = Q0(), r = bt.getSettings(), [i, s] = $.useState(Sd()), [o, u] = $.useState([]), [f, p] = $.useState(!0), [h, m] = $.useState("core"), [y, _] = $.useState([]), [b, g] = $.useState([]), [d, S] = $.useState(null), [x, T] = $.useState(null), [A, D] = $.useState(!1), [C, N] = $.useState(null);
  $.useEffect(() => {
    (async () => {
      p(!0), _(Mn.characters), g(ev);
      const ne = JSON.parse(localStorage.getItem(n0) ?? "{}"), se = Sd();
      if (ne.fields && (se.fields = { ...se.fields, ...ne.fields }), ne.draftFields && (se.draftFields = ne.draftFields), ne.selectedCharacterIndexes && (se.selectedCharacterIndexes = ne.selectedCharacterIndexes), ne.selectedWorldNames && (se.selectedWorldNames = ne.selectedWorldNames), ne.lastLoadedCharacterId) {
        se.lastLoadedCharacterId = ne.lastLoadedCharacterId;
        const ye = Mn.characters.find((Ye) => Ye.avatar === ne.lastLoadedCharacterId);
        ye && S(ye);
      }
      s(se), p(!1);
    })();
  }, []), $.useEffect(() => {
    f || localStorage.setItem(n0, JSON.stringify(i));
  }, [i, f]);
  const M = (L, ne) => {
    bt.getSettings()[L] = ne, bt.saveSettings(), t();
  }, k = (L, ne) => {
    bt.getSettings().contextToSend[L] = ne, bt.saveSettings(), t();
  }, H = $.useCallback(
    (L, ne, se, ye) => {
      s((Ye) => {
        const Se = ye ? "draftFields" : "fields", ke = { ...Ye[Se] };
        return ke[L] || (ke[L] = { value: "", prompt: "", label: L }), ke[L][se] = ne, { ...Ye, [Se]: ke };
      });
    },
    []
  ), X = $.useMemo(
    () => Object.keys(i.fields).filter((L) => L.startsWith("alternate_greetings_")).sort((L, ne) => parseInt(L.split("_")[2]) - parseInt(ne.split("_")[2])).map((L) => i.fields[L]),
    [i.fields]
  ), P = $.useCallback((L) => {
    s((ne) => {
      const se = { ...ne.fields };
      return Object.keys(se).forEach((ye) => {
        ye.startsWith("alternate_greetings_") && delete se[ye];
      }), L.forEach((ye, Ye) => {
        const Se = `alternate_greetings_${Ye + 1}`;
        se[Se] = { ...ye, label: `Alternate Greeting ${Ye + 1}` };
      }), { ...ne, fields: se };
    });
  }, []), Y = $.useCallback(
    (L, ne) => {
      H(L, "", "value", ne);
    },
    [H]
  ), K = $.useCallback(
    async (L) => {
      await Mn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[L].label}"?`
      ) && s((se) => {
        const ye = { ...se.draftFields };
        return delete ye[L], { ...se, draftFields: ye };
      });
    },
    [i.draftFields]
  ), ue = $.useCallback(async () => {
    const L = await Mn.Popup.show.input("Enter Draft Field Name", "");
    if (!L?.trim()) return;
    const ne = Ld(L.trim());
    if (!ne) return Ne("error", "Invalid field name.");
    if (i.draftFields[ne] || Qn.includes(ne))
      return Ne("warning", "Field name already exists.");
    s((se) => ({
      ...se,
      draftFields: { ...se.draftFields, [ne]: { value: "", prompt: "", label: L } }
    })), m("draft");
  }, [i.draftFields]), me = (L) => {
    N({ type: "field", fieldId: L }), D(!0);
  }, ve = () => {
    N({ type: "global" }), D(!0);
  }, B = (L) => {
    s((ne) => ({
      ...ne,
      fields: { ...ne.fields, ...L.fields },
      draftFields: { ...ne.draftFields, ...L.draftFields }
    })), Ne("success", "Changes from revise session applied."), D(!1);
  }, re = $.useCallback(
    async (L, ne) => {
      if (!r.profileId) return Ne("warning", "Please select a connection profile.");
      u((se) => [...se, L]);
      try {
        const se = Mn.extensionSettings.connectionManager?.profiles?.find(
          (he) => he.id === r.profileId
        );
        if (!se) throw new Error("Connection profile not found.");
        const ye = {
          presetName: se?.preset,
          contextName: se?.context,
          instructName: se?.instruct,
          targetCharacterId: It,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Jn
        }, Ye = r.contextToSend.messages;
        switch (Ye.type) {
          case "none":
            ye.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            ye.messageIndexesBetween = { start: 0, end: Ye.first ?? 10 };
            break;
          case "last":
            const he = Mn.chat?.length ?? 0, Le = Ye.last ?? 10;
            ye.messageIndexesBetween = {
              end: Math.max(0, he - 1),
              start: Math.max(0, he - Le)
            };
            break;
          case "range":
            ye.messageIndexesBetween = {
              start: Ye.range?.start ?? 0,
              end: Ye.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        It === void 0 && !Jn && (ye.messageIndexesBetween = { start: -1, end: -1 });
        const Se = {};
        await Promise.all(
          ev.filter((he) => !Se[he]).map(async (he) => {
            const Le = await Mn.loadWorldInfo(he);
            Le && (Se[he] = Object.values(Le.entries));
          })
        );
        const ke = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete ke.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete ke.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete ke.lorebookDefinitions, r.contextToSend.existingFields || delete ke.existingFieldDefinitions, r.contextToSend.persona || delete ke.personaDescription, delete ke.worldInfoCharDefinition;
        const Ze = await LE({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: ye,
          continueFrom: ne,
          session: i,
          allCharacters: y,
          entriesGroupByWorldName: Se,
          promptSettings: ke,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (he) => he.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: L,
          outputFormat: r.outputFormat
        }), $e = L.startsWith("alternate_greetings_"), be = !$e && !Qn.includes(L);
        if ($e) {
          const he = parseInt(L.split("_")[2]) - 1, Le = [...X];
          Le[he] && (Le[he].value = Ze), P(Le);
        } else
          H(L, Ze, "value", be);
      } catch (se) {
        console.error(se), Ne("error", se.message || String(se));
      } finally {
        u((se) => se.filter((ye) => ye !== L));
      }
    },
    [i, r, y, X, H, P]
  ), pe = $.useCallback(async () => {
    await Mn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(Sd()), S(null));
  }, []), Re = $.useCallback(
    (L) => {
      if (!d) return Ne("warning", "Please load a character to compare against.");
      let ne, se, ye;
      typeof L == "number" ? (ne = X[L]?.value ?? "", se = d.data?.alternate_greetings?.[L] ?? "", ye = `Alternate Greeting ${L + 1}`) : (ne = i.fields[L]?.value ?? "", se = d[L] ?? d.data?.[L] ?? "", ye = Sr[L]), T({ original: se, current: ne, fieldName: ye });
    },
    [d, i.fields, X]
  ), R = $.useCallback(
    async (L) => {
      const ne = y[parseInt(L)];
      if (!ne || Qn.some((Se) => i.fields[Se].value.trim() !== "") && !await Mn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const ye = { ...i.fields };
      Qn.forEach((Se) => {
        ye[Se] = { value: ne[Se] ?? ne.data?.[Se] ?? "", prompt: "", label: Sr[Se] };
      });
      const Ye = (ne.data?.alternate_greetings ?? []).map((Se) => ({ value: Se, prompt: "" }));
      S(ne), s((Se) => ({ ...Se, fields: ye, lastLoadedCharacterId: ne.avatar })), P(Ye);
    },
    [y, i.fields, P]
  ), W = $.useCallback(async () => {
    if (It === void 0) return Ne("warning", "No character selected in the main chat.");
    await R(String(It));
  }, [R]), ie = () => X.map((L) => L.value).filter((L) => L.trim() !== ""), le = async () => {
    if (!i.fields.name.value) return Ne("warning", "Please provide a character name.");
    if (!await Mn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const ne = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: ie(),
        tags: [],
        avatar: "none",
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      },
      avatar: "none",
      tags: [],
      spec: "chara_card_v3",
      spec_version: "3.0"
    };
    try {
      await x2(ne, !0);
    } catch (se) {
      Ne("error", `Failed to create character: ${se.message}`);
    }
  }, F = async () => {
    if (!d) return Ne("warning", "Please load a character to override.");
    if (!await Mn.Popup.show.confirm(
      "Override Character",
      `Override "${d.name}"? This cannot be undone.`
    )) return;
    const ne = {
      ...d,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: ie(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await E2(ne, !0), Ne("success", `Character "${ne.name}" updated!`);
    } catch (se) {
      Ne("error", `Failed to override character: ${se.message}`);
    }
  }, fe = () => {
    const L = JSON.stringify({ draftFields: i.draftFields, version: Y0 }, null, 2), ne = new Blob([L], { type: "application/json" }), se = document.createElement("a");
    se.href = URL.createObjectURL(ne), se.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, se.click(), URL.revokeObjectURL(se.href);
  }, G = () => {
    const L = document.createElement("input");
    L.type = "file", L.accept = ".json", L.onchange = async () => {
      const ne = L.files?.[0];
      if (ne)
        try {
          const se = await ne.text(), ye = JSON.parse(se);
          if (!ye.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await Mn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((Se) => ({ ...Se, draftFields: ye.draftFields })), Ne("success", "Draft fields imported."));
        } catch (se) {
          Ne("error", `Import failed: ${se.message}`);
        }
    }, L.click();
  }, ae = $.useMemo(
    () => y.map((L, ne) => ({ value: String(ne), label: L.name })),
    [y]
  ), ce = $.useMemo(
    () => b.map((L) => ({ value: L, label: L })),
    [b]
  ), Ce = $.useMemo(
    () => Object.keys(r.promptPresets).map((L) => ({ value: L, label: L })),
    [r.promptPresets]
  ), xe = $.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((L) => ({ value: L, label: L })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ E.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ E.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ E.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ E.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ E.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ E.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ E.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ E.jsx(
            $0,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (L) => M("profileId", L?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ E.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ E.jsx("h3", { children: "Context to Send" }),
          /* @__PURE__ */ E.jsxs("div", { className: "context-options", children: [
            /* @__PURE__ */ E.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ E.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.stDescription,
                  onChange: (L) => k("stDescription", L.target.checked)
                }
              ),
              " ",
              "Description of SillyTavern & Char Card"
            ] }),
            /* @__PURE__ */ E.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ E.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.persona,
                  onChange: (L) => k("persona", L.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (It !== void 0 || Jn) && /* @__PURE__ */ E.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ E.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ E.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (L) => k("messages", {
                    ...r.contextToSend.messages,
                    type: L.target.value
                  }),
                  children: [
                    /* @__PURE__ */ E.jsx("option", { value: "none", children: "None" }),
                    /* @__PURE__ */ E.jsx("option", { value: "all", children: "All Messages" }),
                    /* @__PURE__ */ E.jsx("option", { value: "first", children: "First X Messages" }),
                    /* @__PURE__ */ E.jsx("option", { value: "last", children: "Last X Messages" }),
                    /* @__PURE__ */ E.jsx("option", { value: "range", children: "Range" })
                  ]
                }
              ),
              r.contextToSend.messages.type === "first" && /* @__PURE__ */ E.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ E.jsxs("label", { children: [
                "First",
                " ",
                /* @__PURE__ */ E.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.first ?? 10,
                    onChange: (L) => k("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(L.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "last" && /* @__PURE__ */ E.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ E.jsxs("label", { children: [
                "Last",
                " ",
                /* @__PURE__ */ E.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.last ?? 10,
                    onChange: (L) => k("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(L.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "range" && /* @__PURE__ */ E.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ E.jsxs("label", { children: [
                "Range:",
                " ",
                /* @__PURE__ */ E.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "0",
                    placeholder: "Start",
                    value: r.contextToSend.messages.range?.start ?? 0,
                    onChange: (L) => k("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: parseInt(L.target.value) || 0
                      }
                    })
                  }
                ),
                " ",
                "to",
                " ",
                /* @__PURE__ */ E.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    placeholder: "End",
                    value: r.contextToSend.messages.range?.end ?? 10,
                    onChange: (L) => k("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(L.target.value) || 10 }
                    })
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ E.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ E.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.charCard,
                  onChange: (L) => k("charCard", L.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ E.jsx(
              eu,
              {
                items: ae,
                value: i.selectedCharacterIndexes,
                onChange: (L) => s((ne) => ({ ...ne, selectedCharacterIndexes: L })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ E.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ E.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.worldInfo,
                  onChange: (L) => k("worldInfo", L.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ E.jsx(
              eu,
              {
                items: ce,
                value: i.selectedWorldNames,
                onChange: (L) => s((ne) => ({ ...ne, selectedWorldNames: L })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ E.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ E.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.existingFields,
                  onChange: (L) => k("existingFields", L.target.checked)
                }
              ),
              " ",
              "Existing Field Content"
            ] }),
            /* @__PURE__ */ E.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ E.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.dontSendOtherGreetings,
                  onChange: (L) => k("dontSendOtherGreetings", L.target.checked)
                }
              ),
              " ",
              "Don't send other alternate greetings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ E.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ E.jsx("h3", { children: "Generation Options" }),
          /* @__PURE__ */ E.jsxs("label", { title: "You can edit in extension settings", children: [
            "Main Context Template",
            /* @__PURE__ */ E.jsx(
              Su,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: xe,
                value: r.mainContextTemplatePreset,
                onChange: (L) => M("mainContextTemplatePreset", L ?? "default")
              }
            )
          ] }),
          /* @__PURE__ */ E.jsxs("label", { children: [
            "Max Context Tokens",
            /* @__PURE__ */ E.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.maxContextType,
                onChange: (L) => M("maxContextType", L.target.value),
                children: [
                  /* @__PURE__ */ E.jsx("option", { value: "profile", children: "Use profile preset" }),
                  /* @__PURE__ */ E.jsx("option", { value: "sampler", children: "Use active preset" }),
                  /* @__PURE__ */ E.jsx("option", { value: "custom", children: "Custom" })
                ]
              }
            )
          ] }),
          r.maxContextType === "custom" && /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: r.maxContextValue,
              onChange: (L) => M("maxContextValue", parseInt(L.target.value) || 16384)
            }
          ),
          /* @__PURE__ */ E.jsxs("label", { children: [
            "Max Response Tokens",
            /* @__PURE__ */ E.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                value: r.maxResponseToken,
                onChange: (L) => M("maxResponseToken", parseInt(L.target.value) || 1024)
              }
            )
          ] }),
          /* @__PURE__ */ E.jsxs("label", { children: [
            "Thinking Level",
            /* @__PURE__ */ E.jsx(
              "select",
              {
                className: "text_pole",
                value: r.thinkingLevel ?? "default",
                onChange: (L) => M("thinkingLevel", L.target.value),
                children: IE.map((L) => /* @__PURE__ */ E.jsx("option", { value: L.value, children: L.label }, L.value))
              }
            )
          ] }),
          /* @__PURE__ */ E.jsxs("label", { children: [
            "Output Format",
            /* @__PURE__ */ E.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.outputFormat,
                onChange: (L) => M("outputFormat", L.target.value),
                children: [
                  /* @__PURE__ */ E.jsx("option", { value: "none", children: "Plain Text" }),
                  /* @__PURE__ */ E.jsx("option", { value: "xml", children: "XML" }),
                  /* @__PURE__ */ E.jsx("option", { value: "json", children: "JSON" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ E.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ E.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ E.jsx(
            Su,
            {
              label: "Prompt Preset",
              items: Ce,
              value: r.promptPreset,
              onChange: (L) => M("promptPreset", L ?? "default"),
              onItemsChange: (L) => M(
                "promptPresets",
                L.reduce(
                  (ne, se) => ({ ...ne, [se.value]: r.promptPresets[se.value] ?? { content: "" } }),
                  {}
                )
              ),
              enableCreate: !0,
              enableDelete: !0,
              enableRename: !0,
              readOnlyValues: ["default"]
            }
          ),
          /* @__PURE__ */ E.jsx(
            $t,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (L) => M("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: L.target.value }
              }),
              rows: 4
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ E.jsxs("div", { className: "wide-column", children: [
        /* @__PURE__ */ E.jsxs("div", { className: "character-field-actions", children: [
          /* @__PURE__ */ E.jsx(
            de,
            {
              onClick: ve,
              title: "Open global revision sessions to edit multiple fields at once",
              children: /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-comments" })
            }
          ),
          /* @__PURE__ */ E.jsx(de, { onClick: le, children: "Save as New" }),
          /* @__PURE__ */ E.jsx(de, { onClick: F, disabled: !d, children: "Override Char" }),
          r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ E.jsx(
            eu,
            {
              items: ce,
              placeholder: "Save as WI Entry",
              closeOnSelect: !0,
              value: [],
              onChange: (L) => {
              },
              onBeforeSelection: async (L, ne) => {
                if (!i.fields.name.value)
                  return Ne("warning", "Please enter a name first."), !1;
                const se = ne[0], Ye = Ct.compile(r.prompts.worldInfoCharDefinition.content)({
                  character: { ...i.fields, alternate_greetings: X.map((ke) => ke.value) }
                }), Se = {
                  uid: -1,
                  key: [i.fields.name.value],
                  content: Ye,
                  comment: i.fields.name.value,
                  disable: !1,
                  keysecondary: []
                };
                try {
                  await nx({ entry: Se, selectedWorldName: se, operation: "add" }), Ne("success", `Entry added to ${se}.`);
                } catch (ke) {
                  Ne("error", `Failed to add WI Entry: ${ke.message}`);
                }
                return !1;
              }
            }
          ),
          /* @__PURE__ */ E.jsxs(de, { onClick: pe, children: [
            /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-rotate-left", style: { marginRight: "10px" } }),
            "Reset Fields"
          ] }),
          /* @__PURE__ */ E.jsxs(
            de,
            {
              onClick: W,
              disabled: It === void 0,
              title: "Load current character",
              children: [
                /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-user" }),
                " Load Current"
              ]
            }
          ),
          /* @__PURE__ */ E.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ E.jsx(
            eu,
            {
              items: ae,
              value: d ? [String(y.indexOf(d))] : [],
              onChange: (L) => R(L[0]),
              multiple: !1,
              enableSearch: !0,
              placeholder: "Load Character..."
            }
          ) })
        ] }),
        /* @__PURE__ */ E.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ E.jsx(
            de,
            {
              onClick: () => m("core"),
              className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ E.jsx(
            de,
            {
              onClick: () => m("draft"),
              className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ E.jsx(
            de,
            {
              onClick: () => m("brainstorm"),
              className: `menu_button tab-button ${h === "brainstorm" ? "active" : ""}`,
              children: "Brainstorm"
            }
          ),
          /* @__PURE__ */ E.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
            /* @__PURE__ */ E.jsxs(de, { onClick: ue, children: [
              /* @__PURE__ */ E.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ E.jsx(de, { onClick: fe, children: "Export" }),
            /* @__PURE__ */ E.jsx(de, { onClick: G, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ E.jsxs("div", { className: "tab-content-area", children: [
          h === "core" && /* @__PURE__ */ E.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ E.jsx("h3", { children: "Core Character Fields" }),
            Qn.map((L) => {
              const ne = VA[L];
              return ne ? /* @__PURE__ */ E.jsx(
                wy,
                {
                  fieldId: L,
                  label: ne.label,
                  value: i.fields[L]?.value ?? "",
                  prompt: i.fields[L]?.prompt ?? "",
                  large: ne.large,
                  rows: ne.rows,
                  promptEnabled: ne.promptEnabled,
                  isGenerating: o.includes(L),
                  onValueChange: (se, ye) => H(se, ye, "value", !1),
                  onPromptChange: (se, ye) => H(se, ye, "prompt", !1),
                  onGenerate: re,
                  onContinue: (se) => re(se, i.fields[se].value),
                  onClear: (se) => Y(se, !1),
                  onCompare: Re,
                  onOpenReviseSessions: me
                },
                L
              ) : null;
            }),
            /* @__PURE__ */ E.jsx(
              $E,
              {
                greetings: X,
                onGreetingsChange: P,
                isGenerating: o.some((L) => L.startsWith("alternate_greetings_")),
                onGenerate: (L) => re(`alternate_greetings_${L + 1}`),
                onContinue: (L) => re(`alternate_greetings_${L + 1}`, X[L].value),
                onCompare: Re
              }
            )
          ] }),
          h === "draft" && /* @__PURE__ */ E.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ E.jsx("h3", { children: "Draft Fields" }),
            Object.entries(i.draftFields).map(([L, ne]) => /* @__PURE__ */ E.jsx(
              wy,
              {
                fieldId: L,
                label: ne.label,
                value: ne.value,
                prompt: ne.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(L),
                onValueChange: (se, ye) => H(se, ye, "value", !0),
                onPromptChange: (se, ye) => H(se, ye, "prompt", !0),
                onGenerate: re,
                onContinue: (se) => re(se, i.draftFields[se].value),
                onClear: (se) => Y(se, !0),
                onDelete: K
              },
              L
            ))
          ] }),
          h === "brainstorm" && /* @__PURE__ */ E.jsx("div", { className: "card tab-content active", children: /* @__PURE__ */ E.jsx(
            GA,
            {
              contextToSend: r.contextToSend,
              sessionForContext: {
                fields: i.fields,
                draftFields: i.draftFields,
                selectedCharacterIndexes: i.selectedCharacterIndexes,
                selectedWorldNames: i.selectedWorldNames
              }
            }
          ) })
        ] })
      ] })
    ] }),
    x && /* @__PURE__ */ E.jsx(
      zi,
      {
        type: bn.DISPLAY,
        content: /* @__PURE__ */ E.jsx(
          hC,
          {
            originalContent: x.original,
            newContent: x.current,
            fieldName: x.fieldName
          }
        ),
        onComplete: () => T(null),
        options: { wide: !0 }
      }
    ),
    A && C && /* @__PURE__ */ E.jsx(
      zi,
      {
        type: bn.DISPLAY,
        content: /* @__PURE__ */ E.jsx(
          IA,
          {
            target: C,
            onClose: () => D(!1),
            onApply: B,
            initialState: { fields: i.fields, draftFields: i.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: i.selectedCharacterIndexes,
              selectedWorldNames: i.selectedWorldNames
            }
          }
        ),
        onComplete: () => D(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, XA = () => {
  const [t, r] = $.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, t ? /* @__PURE__ */ E.jsx(
    zi,
    {
      content: /* @__PURE__ */ E.jsx(YA, {}),
      type: bn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, D1 = SillyTavern.getContext();
async function $A() {
  const t = await D1.renderExtensionTemplateAsync(
    `third-party/${Ma}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), pv.createRoot(r).render(
    /* @__PURE__ */ E.jsx(fu.StrictMode, { children: /* @__PURE__ */ E.jsx(YE, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), pv.createRoot(u).render(
    /* @__PURE__ */ E.jsx(fu.StrictMode, { children: /* @__PURE__ */ E.jsx(XA, {}) })
  ), o.forEach((p) => {
    if (!p) return;
    const h = document.createElement("div");
    h.innerHTML = s.trim();
    const m = h.firstChild;
    m && (p.prepend(m), m.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function QA() {
  return !!D1.ConnectionManagerRequestService;
}
QA() ? UE().then(() => {
  $A();
}) : Ne("error", `[${Ma}] Make sure ST is updated.`);
export {
  $A as init
};
