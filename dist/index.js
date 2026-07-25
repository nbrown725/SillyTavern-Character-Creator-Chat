import { renderStoryString as o2, persona_description_positions as fv } from "../../../../power-user.js";
import { parseMesExamples as l2, baseChatReplace as u2, chat_metadata as Bs, getMaxContextSize as c2, name1 as Nr, name2 as na, this_chid as Jt, extension_prompt_types as Ta, depth_prompt_role_default as f2, depth_prompt_depth_default as d2 } from "../../../../../script.js";
import { createWorldInfoEntry as h2, world_info_include_names as p2, wi_anchor_position as m2, world_names as dv } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as g2, formatInstructModeSystemPrompt as v2 } from "../../../../instruct-mode.js";
import { appendFileContent as y2 } from "../../../../chats.js";
import { setOpenAIMessages as b2, setOpenAIMessageExamples as _2, formatWorldInfo as S2, getPromptPosition as x2, getPromptRole as E2, prepareOpenAIMessages as w2 } from "../../../../openai.js";
import { metadata_keys as Us } from "../../../../authors-note.js";
import { getGroupDepthPrompts as C2, selected_group as Jn } from "../../../../group-chats.js";
import { getRegexedString as A2, regex_placement as hv } from "../../../regex/engine.js";
import { removeFromArray as pv, runAfterAnimation as N2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ti, fixToastrForDialogs as Kf } from "../../../../popup.js";
import mv from "../../../../../lib/dialog-polyfill.esm.js";
function m0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Jf = { exports: {} }, Fs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gv;
function T2() {
  if (gv) return Fs;
  gv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function a(s, l, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      u = {};
      for (var d in l)
        d !== "key" && (u[d] = l[d]);
    } else u = l;
    return l = u.ref, {
      $$typeof: t,
      type: s,
      key: f,
      ref: l !== void 0 ? l : null,
      props: u
    };
  }
  return Fs.Fragment = r, Fs.jsx = a, Fs.jsxs = a, Fs;
}
var vv;
function O2() {
  return vv || (vv = 1, Jf.exports = T2()), Jf.exports;
}
var S = O2(), Wf = { exports: {} }, Ie = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yv;
function D2() {
  if (yv) return Ie;
  yv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function b(R) {
    return R === null || typeof R != "object" ? null : (R = _ && R[_] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var m = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, h = Object.assign, x = {};
  function w(R, J, ie) {
    this.props = R, this.context = J, this.refs = x, this.updater = ie || m;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(R, J) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, J, "setState");
  }, w.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function T() {
  }
  T.prototype = w.prototype;
  function C(R, J, ie) {
    this.props = R, this.context = J, this.refs = x, this.updater = ie || m;
  }
  var D = C.prototype = new T();
  D.constructor = C, h(D, w.prototype), D.isPureReactComponent = !0;
  var E = Array.isArray, N = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function j(R, J, ie, se, le, je) {
    return ie = je.ref, {
      $$typeof: t,
      type: R,
      key: J,
      ref: ie !== void 0 ? ie : null,
      props: je
    };
  }
  function L(R, J) {
    return j(
      R.type,
      J,
      void 0,
      void 0,
      void 0,
      R.props
    );
  }
  function Y(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }
  function I(R) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ie) {
      return J[ie];
    });
  }
  var q = /\/+/g;
  function $(R, J) {
    return typeof R == "object" && R !== null && R.key != null ? I("" + R.key) : J.toString(36);
  }
  function fe() {
  }
  function de(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(fe, fe) : (R.status = "pending", R.then(
          function(J) {
            R.status === "pending" && (R.status = "fulfilled", R.value = J);
          },
          function(J) {
            R.status === "pending" && (R.status = "rejected", R.reason = J);
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
  function _e(R, J, ie, se, le) {
    var je = typeof R;
    (je === "undefined" || je === "boolean") && (R = null);
    var X = !1;
    if (R === null) X = !0;
    else
      switch (je) {
        case "bigint":
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case t:
            case r:
              X = !0;
              break;
            case y:
              return X = R._init, _e(
                X(R._payload),
                J,
                ie,
                se,
                le
              );
          }
      }
    if (X)
      return le = le(R), X = se === "" ? "." + $(R, 0) : se, E(le) ? (ie = "", X != null && (ie = X.replace(q, "$&/") + "/"), _e(le, J, ie, "", function(Ye) {
        return Ye;
      })) : le != null && (Y(le) && (le = L(
        le,
        ie + (le.key == null || R && R.key === le.key ? "" : ("" + le.key).replace(
          q,
          "$&/"
        ) + "/") + X
      )), J.push(le)), 1;
    X = 0;
    var xe = se === "" ? "." : se + ":";
    if (E(R))
      for (var Ee = 0; Ee < R.length; Ee++)
        se = R[Ee], je = xe + $(se, Ee), X += _e(
          se,
          J,
          ie,
          je,
          le
        );
    else if (Ee = b(R), typeof Ee == "function")
      for (R = Ee.call(R), Ee = 0; !(se = R.next()).done; )
        se = se.value, je = xe + $(se, Ee++), X += _e(
          se,
          J,
          ie,
          je,
          le
        );
    else if (je === "object") {
      if (typeof R.then == "function")
        return _e(
          de(R),
          J,
          ie,
          se,
          le
        );
      throw J = String(R), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return X;
  }
  function B(R, J, ie) {
    if (R == null) return R;
    var se = [], le = 0;
    return _e(R, se, "", "", function(je) {
      return J.call(ie, je, le++);
    }), se;
  }
  function ae(R) {
    if (R._status === -1) {
      var J = R._result;
      J = J(), J.then(
        function(ie) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ie);
        },
        function(ie) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ie);
        }
      ), R._status === -1 && (R._status = 0, R._result = J);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var me = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(J)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  };
  function Le() {
  }
  return Ie.Children = {
    map: B,
    forEach: function(R, J, ie) {
      B(
        R,
        function() {
          J.apply(this, arguments);
        },
        ie
      );
    },
    count: function(R) {
      var J = 0;
      return B(R, function() {
        J++;
      }), J;
    },
    toArray: function(R) {
      return B(R, function(J) {
        return J;
      }) || [];
    },
    only: function(R) {
      if (!Y(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  }, Ie.Component = w, Ie.Fragment = a, Ie.Profiler = l, Ie.PureComponent = C, Ie.StrictMode = s, Ie.Suspense = p, Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, Ie.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return N.H.useMemoCache(R);
    }
  }, Ie.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, Ie.cloneElement = function(R, J, ie) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var se = h({}, R.props), le = R.key, je = void 0;
    if (J != null)
      for (X in J.ref !== void 0 && (je = void 0), J.key !== void 0 && (le = "" + J.key), J)
        !M.call(J, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && J.ref === void 0 || (se[X] = J[X]);
    var X = arguments.length - 2;
    if (X === 1) se.children = ie;
    else if (1 < X) {
      for (var xe = Array(X), Ee = 0; Ee < X; Ee++)
        xe[Ee] = arguments[Ee + 2];
      se.children = xe;
    }
    return j(R.type, le, void 0, void 0, je, se);
  }, Ie.createContext = function(R) {
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
  }, Ie.createElement = function(R, J, ie) {
    var se, le = {}, je = null;
    if (J != null)
      for (se in J.key !== void 0 && (je = "" + J.key), J)
        M.call(J, se) && se !== "key" && se !== "__self" && se !== "__source" && (le[se] = J[se]);
    var X = arguments.length - 2;
    if (X === 1) le.children = ie;
    else if (1 < X) {
      for (var xe = Array(X), Ee = 0; Ee < X; Ee++)
        xe[Ee] = arguments[Ee + 2];
      le.children = xe;
    }
    if (R && R.defaultProps)
      for (se in X = R.defaultProps, X)
        le[se] === void 0 && (le[se] = X[se]);
    return j(R, je, void 0, void 0, null, le);
  }, Ie.createRef = function() {
    return { current: null };
  }, Ie.forwardRef = function(R) {
    return { $$typeof: d, render: R };
  }, Ie.isValidElement = Y, Ie.lazy = function(R) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: R },
      _init: ae
    };
  }, Ie.memo = function(R, J) {
    return {
      $$typeof: g,
      type: R,
      compare: J === void 0 ? null : J
    };
  }, Ie.startTransition = function(R) {
    var J = N.T, ie = {};
    N.T = ie;
    try {
      var se = R(), le = N.S;
      le !== null && le(ie, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(Le, me);
    } catch (je) {
      me(je);
    } finally {
      N.T = J;
    }
  }, Ie.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, Ie.use = function(R) {
    return N.H.use(R);
  }, Ie.useActionState = function(R, J, ie) {
    return N.H.useActionState(R, J, ie);
  }, Ie.useCallback = function(R, J) {
    return N.H.useCallback(R, J);
  }, Ie.useContext = function(R) {
    return N.H.useContext(R);
  }, Ie.useDebugValue = function() {
  }, Ie.useDeferredValue = function(R, J) {
    return N.H.useDeferredValue(R, J);
  }, Ie.useEffect = function(R, J, ie) {
    var se = N.H;
    if (typeof ie == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(R, J);
  }, Ie.useId = function() {
    return N.H.useId();
  }, Ie.useImperativeHandle = function(R, J, ie) {
    return N.H.useImperativeHandle(R, J, ie);
  }, Ie.useInsertionEffect = function(R, J) {
    return N.H.useInsertionEffect(R, J);
  }, Ie.useLayoutEffect = function(R, J) {
    return N.H.useLayoutEffect(R, J);
  }, Ie.useMemo = function(R, J) {
    return N.H.useMemo(R, J);
  }, Ie.useOptimistic = function(R, J) {
    return N.H.useOptimistic(R, J);
  }, Ie.useReducer = function(R, J, ie) {
    return N.H.useReducer(R, J, ie);
  }, Ie.useRef = function(R) {
    return N.H.useRef(R);
  }, Ie.useState = function(R) {
    return N.H.useState(R);
  }, Ie.useSyncExternalStore = function(R, J, ie) {
    return N.H.useSyncExternalStore(
      R,
      J,
      ie
    );
  }, Ie.useTransition = function() {
    return N.H.useTransition();
  }, Ie.version = "19.1.1", Ie;
}
var bv;
function eh() {
  return bv || (bv = 1, Wf.exports = D2()), Wf.exports;
}
var G = eh();
const gu = /* @__PURE__ */ m0(G);
var ed = { exports: {} }, Hs = {}, td = { exports: {} }, nd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _v;
function M2() {
  return _v || (_v = 1, (function(t) {
    function r(B, ae) {
      var me = B.length;
      B.push(ae);
      e: for (; 0 < me; ) {
        var Le = me - 1 >>> 1, R = B[Le];
        if (0 < l(R, ae))
          B[Le] = ae, B[me] = R, me = Le;
        else break e;
      }
    }
    function a(B) {
      return B.length === 0 ? null : B[0];
    }
    function s(B) {
      if (B.length === 0) return null;
      var ae = B[0], me = B.pop();
      if (me !== ae) {
        B[0] = me;
        e: for (var Le = 0, R = B.length, J = R >>> 1; Le < J; ) {
          var ie = 2 * (Le + 1) - 1, se = B[ie], le = ie + 1, je = B[le];
          if (0 > l(se, me))
            le < R && 0 > l(je, se) ? (B[Le] = je, B[le] = me, Le = le) : (B[Le] = se, B[ie] = me, Le = ie);
          else if (le < R && 0 > l(je, me))
            B[Le] = je, B[le] = me, Le = le;
          else break e;
        }
      }
      return ae;
    }
    function l(B, ae) {
      var me = B.sortIndex - ae.sortIndex;
      return me !== 0 ? me : B.id - ae.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, d = f.now();
      t.unstable_now = function() {
        return f.now() - d;
      };
    }
    var p = [], g = [], y = 1, _ = null, b = 3, m = !1, h = !1, x = !1, w = !1, T = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function E(B) {
      for (var ae = a(g); ae !== null; ) {
        if (ae.callback === null) s(g);
        else if (ae.startTime <= B)
          s(g), ae.sortIndex = ae.expirationTime, r(p, ae);
        else break;
        ae = a(g);
      }
    }
    function N(B) {
      if (x = !1, E(B), !h)
        if (a(p) !== null)
          h = !0, M || (M = !0, $());
        else {
          var ae = a(g);
          ae !== null && _e(N, ae.startTime - B);
        }
    }
    var M = !1, j = -1, L = 5, Y = -1;
    function I() {
      return w ? !0 : !(t.unstable_now() - Y < L);
    }
    function q() {
      if (w = !1, M) {
        var B = t.unstable_now();
        Y = B;
        var ae = !0;
        try {
          e: {
            h = !1, x && (x = !1, C(j), j = -1), m = !0;
            var me = b;
            try {
              t: {
                for (E(B), _ = a(p); _ !== null && !(_.expirationTime > B && I()); ) {
                  var Le = _.callback;
                  if (typeof Le == "function") {
                    _.callback = null, b = _.priorityLevel;
                    var R = Le(
                      _.expirationTime <= B
                    );
                    if (B = t.unstable_now(), typeof R == "function") {
                      _.callback = R, E(B), ae = !0;
                      break t;
                    }
                    _ === a(p) && s(p), E(B);
                  } else s(p);
                  _ = a(p);
                }
                if (_ !== null) ae = !0;
                else {
                  var J = a(g);
                  J !== null && _e(
                    N,
                    J.startTime - B
                  ), ae = !1;
                }
              }
              break e;
            } finally {
              _ = null, b = me, m = !1;
            }
            ae = void 0;
          }
        } finally {
          ae ? $() : M = !1;
        }
      }
    }
    var $;
    if (typeof D == "function")
      $ = function() {
        D(q);
      };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), de = fe.port2;
      fe.port1.onmessage = q, $ = function() {
        de.postMessage(null);
      };
    } else
      $ = function() {
        T(q, 0);
      };
    function _e(B, ae) {
      j = T(function() {
        B(t.unstable_now());
      }, ae);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, t.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : L = 0 < B ? Math.floor(1e3 / B) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, t.unstable_next = function(B) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = b;
      }
      var me = b;
      b = ae;
      try {
        return B();
      } finally {
        b = me;
      }
    }, t.unstable_requestPaint = function() {
      w = !0;
    }, t.unstable_runWithPriority = function(B, ae) {
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
      var me = b;
      b = B;
      try {
        return ae();
      } finally {
        b = me;
      }
    }, t.unstable_scheduleCallback = function(B, ae, me) {
      var Le = t.unstable_now();
      switch (typeof me == "object" && me !== null ? (me = me.delay, me = typeof me == "number" && 0 < me ? Le + me : Le) : me = Le, B) {
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
      return R = me + R, B = {
        id: y++,
        callback: ae,
        priorityLevel: B,
        startTime: me,
        expirationTime: R,
        sortIndex: -1
      }, me > Le ? (B.sortIndex = me, r(g, B), a(p) === null && B === a(g) && (x ? (C(j), j = -1) : x = !0, _e(N, me - Le))) : (B.sortIndex = R, r(p, B), h || m || (h = !0, M || (M = !0, $()))), B;
    }, t.unstable_shouldYield = I, t.unstable_wrapCallback = function(B) {
      var ae = b;
      return function() {
        var me = b;
        b = ae;
        try {
          return B.apply(this, arguments);
        } finally {
          b = me;
        }
      };
    };
  })(nd)), nd;
}
var Sv;
function k2() {
  return Sv || (Sv = 1, td.exports = M2()), td.exports;
}
var rd = { exports: {} }, Qt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xv;
function j2() {
  if (xv) return Qt;
  xv = 1;
  var t = eh();
  function r(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        g += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function a() {
  }
  var s = {
    d: {
      f: a,
      r: function() {
        throw Error(r(522));
      },
      D: a,
      C: a,
      L: a,
      m: a,
      X: a,
      S: a,
      M: a
    },
    p: 0,
    findDOMNode: null
  }, l = Symbol.for("react.portal");
  function u(p, g, y) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: _ == null ? null : "" + _,
      children: p,
      containerInfo: g,
      implementation: y
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(p, g) {
    if (p === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Qt.createPortal = function(p, g) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return u(p, g, null, y);
  }, Qt.flushSync = function(p) {
    var g = f.T, y = s.p;
    try {
      if (f.T = null, s.p = 2, p) return p();
    } finally {
      f.T = g, s.p = y, s.d.f();
    }
  }, Qt.preconnect = function(p, g) {
    typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(p, g));
  }, Qt.prefetchDNS = function(p) {
    typeof p == "string" && s.d.D(p);
  }, Qt.preinit = function(p, g) {
    if (typeof p == "string" && g && typeof g.as == "string") {
      var y = g.as, _ = d(y, g.crossOrigin), b = typeof g.integrity == "string" ? g.integrity : void 0, m = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      y === "style" ? s.d.S(
        p,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: _,
          integrity: b,
          fetchPriority: m
        }
      ) : y === "script" && s.d.X(p, {
        crossOrigin: _,
        integrity: b,
        fetchPriority: m,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Qt.preinitModule = function(p, g) {
    if (typeof p == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var y = d(
            g.as,
            g.crossOrigin
          );
          s.d.M(p, {
            crossOrigin: y,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(p);
  }, Qt.preload = function(p, g) {
    if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var y = g.as, _ = d(y, g.crossOrigin);
      s.d.L(p, y, {
        crossOrigin: _,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, Qt.preloadModule = function(p, g) {
    if (typeof p == "string")
      if (g) {
        var y = d(g.as, g.crossOrigin);
        s.d.m(p, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: y,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(p);
  }, Qt.requestFormReset = function(p) {
    s.d.r(p);
  }, Qt.unstable_batchedUpdates = function(p, g) {
    return p(g);
  }, Qt.useFormState = function(p, g, y) {
    return f.H.useFormState(p, g, y);
  }, Qt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Qt.version = "19.1.1", Qt;
}
var Ev;
function g0() {
  if (Ev) return rd.exports;
  Ev = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), rd.exports = j2(), rd.exports;
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
var wv;
function R2() {
  if (wv) return Hs;
  wv = 1;
  var t = k2(), r = eh(), a = g0();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        n += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
    var n = e, i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (i = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function d(e) {
    if (u(e) !== e)
      throw Error(s(188));
  }
  function p(e) {
    var n = e.alternate;
    if (!n) {
      if (n = u(e), n === null) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var i = e, o = n; ; ) {
      var c = i.return;
      if (c === null) break;
      var v = c.alternate;
      if (v === null) {
        if (o = c.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (c.child === v.child) {
        for (v = c.child; v; ) {
          if (v === i) return d(c), e;
          if (v === o) return d(c), n;
          v = v.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== o.return) i = c, o = v;
      else {
        for (var A = !1, O = c.child; O; ) {
          if (O === i) {
            A = !0, i = c, o = v;
            break;
          }
          if (O === o) {
            A = !0, o = c, i = v;
            break;
          }
          O = O.sibling;
        }
        if (!A) {
          for (O = v.child; O; ) {
            if (O === i) {
              A = !0, i = v, o = c;
              break;
            }
            if (O === o) {
              A = !0, o = v, i = c;
              break;
            }
            O = O.sibling;
          }
          if (!A) throw Error(s(189));
        }
      }
      if (i.alternate !== o) throw Error(s(190));
    }
    if (i.tag !== 3) throw Error(s(188));
    return i.stateNode.current === i ? e : n;
  }
  function g(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = g(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, _ = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), C = Symbol.for("react.consumer"), D = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), I = Symbol.for("react.memo_cache_sentinel"), q = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = q && e[q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var fe = Symbol.for("react.client.reference");
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === fe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case h:
        return "Fragment";
      case w:
        return "Profiler";
      case x:
        return "StrictMode";
      case N:
        return "Suspense";
      case M:
        return "SuspenseList";
      case Y:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case m:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case C:
          return (e._context.displayName || "Context") + ".Consumer";
        case E:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case j:
          return n = e.displayName || null, n !== null ? n : de(e.type) || "Memo";
        case L:
          n = e._payload, e = e._init;
          try {
            return de(e(n));
          } catch {
          }
      }
    return null;
  }
  var _e = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Le = [], R = -1;
  function J(e) {
    return { current: e };
  }
  function ie(e) {
    0 > R || (e.current = Le[R], Le[R] = null, R--);
  }
  function se(e, n) {
    R++, Le[R] = e.current, e.current = n;
  }
  var le = J(null), je = J(null), X = J(null), xe = J(null);
  function Ee(e, n) {
    switch (se(X, n), se(je, e), se(le, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Bg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Bg(n), e = Ug(n, e);
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
    ie(le), se(le, e);
  }
  function Ye() {
    ie(le), ie(je), ie(X);
  }
  function We(e) {
    e.memoizedState !== null && se(xe, e);
    var n = le.current, i = Ug(n, e.type);
    n !== i && (se(je, e), se(le, i));
  }
  function ke(e) {
    je.current === e && (ie(le), ie(je)), xe.current === e && (ie(xe), Rs._currentValue = me);
  }
  var nt = Object.prototype.hasOwnProperty, on = t.unstable_scheduleCallback, Tt = t.unstable_cancelCallback, U = t.unstable_shouldYield, W = t.unstable_requestPaint, re = t.unstable_now, he = t.unstable_getCurrentPriorityLevel, Ae = t.unstable_ImmediatePriority, oe = t.unstable_UserBlockingPriority, pe = t.unstable_NormalPriority, Ze = t.unstable_LowPriority, Be = t.unstable_IdlePriority, Xe = t.log, Mn = t.unstable_setDisableYieldValue, ut = null, et = null;
  function tn(e) {
    if (typeof Xe == "function" && Mn(e), et && typeof et.setStrictMode == "function")
      try {
        et.setStrictMode(ut, e);
      } catch {
      }
  }
  var ne = Math.clz32 ? Math.clz32 : ge, ye = Math.log, Ue = Math.LN2;
  function ge(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ye(e) / Ue | 0) | 0;
  }
  var Ke = 256, Qe = 4194304;
  function ze(e) {
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
  function ct(e, n, i) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0, v = e.suspendedLanes, A = e.pingedLanes;
    e = e.warmLanes;
    var O = o & 134217727;
    return O !== 0 ? (o = O & ~v, o !== 0 ? c = ze(o) : (A &= O, A !== 0 ? c = ze(A) : i || (i = O & ~e, i !== 0 && (c = ze(i))))) : (O = o & ~v, O !== 0 ? c = ze(O) : A !== 0 ? c = ze(A) : i || (i = o & ~e, i !== 0 && (c = ze(i)))), c === 0 ? 0 : n !== 0 && n !== c && (n & v) === 0 && (v = c & -c, i = n & -n, v >= i || v === 32 && (i & 4194048) !== 0) ? n : c;
  }
  function pt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Gn(e, n) {
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
  function tr() {
    var e = Ke;
    return Ke <<= 1, (Ke & 4194048) === 0 && (Ke = 256), e;
  }
  function Eh() {
    var e = Qe;
    return Qe <<= 1, (Qe & 62914560) === 0 && (Qe = 4194304), e;
  }
  function Bu(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function Zi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function $1(e, n, i, o, c, v) {
    var A = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var O = e.entanglements, k = e.expirationTimes, H = e.hiddenUpdates;
    for (i = A & ~i; 0 < i; ) {
      var Q = 31 - ne(i), ee = 1 << Q;
      O[Q] = 0, k[Q] = -1;
      var Z = H[Q];
      if (Z !== null)
        for (H[Q] = null, Q = 0; Q < Z.length; Q++) {
          var V = Z[Q];
          V !== null && (V.lane &= -536870913);
        }
      i &= ~ee;
    }
    o !== 0 && wh(e, o, 0), v !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= v & ~(A & ~n));
  }
  function wh(e, n, i) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - ne(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 4194090;
  }
  function Ch(e, n) {
    var i = e.entangledLanes |= n;
    for (e = e.entanglements; i; ) {
      var o = 31 - ne(i), c = 1 << o;
      c & n | e[o] & n && (e[o] |= n), i &= ~c;
    }
  }
  function Uu(e) {
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
  function Fu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ah() {
    var e = ae.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : iv(e.type));
  }
  function Q1(e, n) {
    var i = ae.p;
    try {
      return ae.p = e, n();
    } finally {
      ae.p = i;
    }
  }
  var jr = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + jr, ln = "__reactProps$" + jr, qa = "__reactContainer$" + jr, Hu = "__reactEvents$" + jr, K1 = "__reactListeners$" + jr, J1 = "__reactHandles$" + jr, Nh = "__reactResources$" + jr, Gi = "__reactMarker$" + jr;
  function qu(e) {
    delete e[Xt], delete e[ln], delete e[Hu], delete e[K1], delete e[J1];
  }
  function Za(e) {
    var n = e[Xt];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if (n = i[qa] || i[Xt]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null)
          for (e = Zg(e); e !== null; ) {
            if (i = e[Xt]) return i;
            e = Zg(e);
          }
        return n;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Ga(e) {
    if (e = e[Xt] || e[qa]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Vi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Va(e) {
    var n = e[Nh];
    return n || (n = e[Nh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Pt(e) {
    e[Gi] = !0;
  }
  var Th = /* @__PURE__ */ new Set(), Oh = {};
  function fa(e, n) {
    Ya(e, n), Ya(e + "Capture", n);
  }
  function Ya(e, n) {
    for (Oh[e] = n, e = 0; e < n.length; e++)
      Th.add(n[e]);
  }
  var W1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Dh = {}, Mh = {};
  function eb(e) {
    return nt.call(Mh, e) ? !0 : nt.call(Dh, e) ? !1 : W1.test(e) ? Mh[e] = !0 : (Dh[e] = !0, !1);
  }
  function go(e, n, i) {
    if (eb(n))
      if (i === null) e.removeAttribute(n);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + i);
      }
  }
  function vo(e, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + i);
    }
  }
  function cr(e, n, i, o) {
    if (o === null) e.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(n, i, "" + o);
    }
  }
  var Zu, kh;
  function Xa(e) {
    if (Zu === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        Zu = n && n[1] || "", kh = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zu + e + kh;
  }
  var Gu = !1;
  function Vu(e, n) {
    if (!e || Gu) return "";
    Gu = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
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
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var v = o.DetermineComponentFrameRoot(), A = v[0], O = v[1];
      if (A && O) {
        var k = A.split(`
`), H = O.split(`
`);
        for (c = o = 0; o < k.length && !k[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; c < H.length && !H[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (o === k.length || c === H.length)
          for (o = k.length - 1, c = H.length - 1; 1 <= o && 0 <= c && k[o] !== H[c]; )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (k[o] !== H[c]) {
            if (o !== 1 || c !== 1)
              do
                if (o--, c--, 0 > c || k[o] !== H[c]) {
                  var Q = `
` + k[o].replace(" at new ", " at ");
                  return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q;
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      Gu = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? Xa(i) : "";
  }
  function tb(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Xa(e.type);
      case 16:
        return Xa("Lazy");
      case 13:
        return Xa("Suspense");
      case 19:
        return Xa("SuspenseList");
      case 0:
      case 15:
        return Vu(e.type, !1);
      case 11:
        return Vu(e.type.render, !1);
      case 1:
        return Vu(e.type, !0);
      case 31:
        return Xa("Activity");
      default:
        return "";
    }
  }
  function jh(e) {
    try {
      var n = "";
      do
        n += tb(e), e = e.return;
      while (e);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function kn(e) {
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
  function Rh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function nb(e) {
    var n = Rh(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var c = i.get, v = i.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(A) {
          o = "" + A, v.call(this, A);
        }
      }), Object.defineProperty(e, n, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(A) {
          o = "" + A;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function yo(e) {
    e._valueTracker || (e._valueTracker = nb(e));
  }
  function zh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(), o = "";
    return e && (o = Rh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (n.setValue(e), !0) : !1;
  }
  function bo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var rb = /[\n"\\]/g;
  function jn(e) {
    return e.replace(
      rb,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Yu(e, n, i, o, c, v, A, O) {
    e.name = "", A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" ? e.type = A : e.removeAttribute("type"), n != null ? A === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + kn(n)) : e.value !== "" + kn(n) && (e.value = "" + kn(n)) : A !== "submit" && A !== "reset" || e.removeAttribute("value"), n != null ? Xu(e, A, kn(n)) : i != null ? Xu(e, A, kn(i)) : o != null && e.removeAttribute("value"), c == null && v != null && (e.defaultChecked = !!v), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? e.name = "" + kn(O) : e.removeAttribute("name");
  }
  function Lh(e, n, i, o, c, v, A, O) {
    if (v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.type = v), n != null || i != null) {
      if (!(v !== "submit" && v !== "reset" || n != null))
        return;
      i = i != null ? "" + kn(i) : "", n = n != null ? "" + kn(n) : i, O || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = O ? e.checked : !!o, e.defaultChecked = !!o, A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" && (e.name = A);
  }
  function Xu(e, n, i) {
    n === "number" && bo(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function $a(e, n, i, o) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < i.length; c++)
        n["$" + i[c]] = !0;
      for (i = 0; i < e.length; i++)
        c = n.hasOwnProperty("$" + e[i].value), e[i].selected !== c && (e[i].selected = c), c && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + kn(i), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          e[c].selected = !0, o && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ih(e, n, i) {
    if (n != null && (n = "" + kn(n), n !== e.value && (e.value = n), i == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? "" + kn(i) : "";
  }
  function Ph(e, n, i, o) {
    if (n == null) {
      if (o != null) {
        if (i != null) throw Error(s(92));
        if (_e(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        i = o;
      }
      i == null && (i = ""), n = i;
    }
    i = kn(n), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o);
  }
  function Qa(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var ab = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Bh(e, n, i) {
    var o = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, i) : typeof i != "number" || i === 0 || ab.has(n) ? n === "float" ? e.cssFloat = i : e[n] = ("" + i).trim() : e[n] = i + "px";
  }
  function Uh(e, n, i) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in n)
        o = n[c], n.hasOwnProperty(c) && i[c] !== o && Bh(e, c, o);
    } else
      for (var v in n)
        n.hasOwnProperty(v) && Bh(e, v, n[v]);
  }
  function $u(e) {
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
  var ib = /* @__PURE__ */ new Map([
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
  ]), sb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _o(e) {
    return sb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Qu = null;
  function Ku(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ka = null, Ja = null;
  function Fh(e) {
    var n = Ga(e);
    if (n && (e = n.stateNode)) {
      var i = e[ln] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Yu(
            e,
            i.value,
            i.defaultValue,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name
          ), n = i.name, i.type === "radio" && n != null) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll(
              'input[name="' + jn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < i.length; n++) {
              var o = i[n];
              if (o !== e && o.form === e.form) {
                var c = o[ln] || null;
                if (!c) throw Error(s(90));
                Yu(
                  o,
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
            for (n = 0; n < i.length; n++)
              o = i[n], o.form === e.form && zh(o);
          }
          break e;
        case "textarea":
          Ih(e, i.value, i.defaultValue);
          break e;
        case "select":
          n = i.value, n != null && $a(e, !!i.multiple, n, !1);
      }
    }
  }
  var Ju = !1;
  function Hh(e, n, i) {
    if (Ju) return e(n, i);
    Ju = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (Ju = !1, (Ka !== null || Ja !== null) && (il(), Ka && (n = Ka, e = Ja, Ja = Ka = null, Fh(n), e)))
        for (n = 0; n < e.length; n++) Fh(e[n]);
    }
  }
  function Yi(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = i[ln] || null;
    if (o === null) return null;
    i = o[n];
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function")
      throw Error(
        s(231, n, typeof i)
      );
    return i;
  }
  var fr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wu = !1;
  if (fr)
    try {
      var Xi = {};
      Object.defineProperty(Xi, "passive", {
        get: function() {
          Wu = !0;
        }
      }), window.addEventListener("test", Xi, Xi), window.removeEventListener("test", Xi, Xi);
    } catch {
      Wu = !1;
    }
  var Rr = null, ec = null, So = null;
  function qh() {
    if (So) return So;
    var e, n = ec, i = n.length, o, c = "value" in Rr ? Rr.value : Rr.textContent, v = c.length;
    for (e = 0; e < i && n[e] === c[e]; e++) ;
    var A = i - e;
    for (o = 1; o <= A && n[i - o] === c[v - o]; o++) ;
    return So = c.slice(e, 1 < o ? 1 - o : void 0);
  }
  function xo(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Eo() {
    return !0;
  }
  function Zh() {
    return !1;
  }
  function un(e) {
    function n(i, o, c, v, A) {
      this._reactName = i, this._targetInst = c, this.type = o, this.nativeEvent = v, this.target = A, this.currentTarget = null;
      for (var O in e)
        e.hasOwnProperty(O) && (i = e[O], this[O] = i ? i(v) : v[O]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? Eo : Zh, this.isPropagationStopped = Zh, this;
    }
    return y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Eo);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Eo);
      },
      persist: function() {
      },
      isPersistent: Eo
    }), n;
  }
  var da = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, wo = un(da), $i = y({}, da, { view: 0, detail: 0 }), ob = un($i), tc, nc, Qi, Co = y({}, $i, {
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
    getModifierState: ac,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Qi && (Qi && e.type === "mousemove" ? (tc = e.screenX - Qi.screenX, nc = e.screenY - Qi.screenY) : nc = tc = 0, Qi = e), tc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : nc;
    }
  }), Gh = un(Co), lb = y({}, Co, { dataTransfer: 0 }), ub = un(lb), cb = y({}, $i, { relatedTarget: 0 }), rc = un(cb), fb = y({}, da, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), db = un(fb), hb = y({}, da, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), pb = un(hb), mb = y({}, da, { data: 0 }), Vh = un(mb), gb = {
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
  }, vb = {
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
  }, yb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function bb(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = yb[e]) ? !!n[e] : !1;
  }
  function ac() {
    return bb;
  }
  var _b = y({}, $i, {
    key: function(e) {
      if (e.key) {
        var n = gb[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = xo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vb[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ac,
    charCode: function(e) {
      return e.type === "keypress" ? xo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? xo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Sb = un(_b), xb = y({}, Co, {
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
  }), Yh = un(xb), Eb = y({}, $i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ac
  }), wb = un(Eb), Cb = y({}, da, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ab = un(Cb), Nb = y({}, Co, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Tb = un(Nb), Ob = y({}, da, {
    newState: 0,
    oldState: 0
  }), Db = un(Ob), Mb = [9, 13, 27, 32], ic = fr && "CompositionEvent" in window, Ki = null;
  fr && "documentMode" in document && (Ki = document.documentMode);
  var kb = fr && "TextEvent" in window && !Ki, Xh = fr && (!ic || Ki && 8 < Ki && 11 >= Ki), $h = " ", Qh = !1;
  function Kh(e, n) {
    switch (e) {
      case "keyup":
        return Mb.indexOf(n.keyCode) !== -1;
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
  function Jh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Wa = !1;
  function jb(e, n) {
    switch (e) {
      case "compositionend":
        return Jh(n);
      case "keypress":
        return n.which !== 32 ? null : (Qh = !0, $h);
      case "textInput":
        return e = n.data, e === $h && Qh ? null : e;
      default:
        return null;
    }
  }
  function Rb(e, n) {
    if (Wa)
      return e === "compositionend" || !ic && Kh(e, n) ? (e = qh(), So = ec = Rr = null, Wa = !1, e) : null;
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
        return Xh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var zb = {
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
  function Wh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!zb[e.type] : n === "textarea";
  }
  function ep(e, n, i, o) {
    Ka ? Ja ? Ja.push(o) : Ja = [o] : Ka = o, n = fl(n, "onChange"), 0 < n.length && (i = new wo(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: n }));
  }
  var Ji = null, Wi = null;
  function Lb(e) {
    Rg(e, 0);
  }
  function Ao(e) {
    var n = Vi(e);
    if (zh(n)) return e;
  }
  function tp(e, n) {
    if (e === "change") return n;
  }
  var np = !1;
  if (fr) {
    var sc;
    if (fr) {
      var oc = "oninput" in document;
      if (!oc) {
        var rp = document.createElement("div");
        rp.setAttribute("oninput", "return;"), oc = typeof rp.oninput == "function";
      }
      sc = oc;
    } else sc = !1;
    np = sc && (!document.documentMode || 9 < document.documentMode);
  }
  function ap() {
    Ji && (Ji.detachEvent("onpropertychange", ip), Wi = Ji = null);
  }
  function ip(e) {
    if (e.propertyName === "value" && Ao(Wi)) {
      var n = [];
      ep(
        n,
        Wi,
        e,
        Ku(e)
      ), Hh(Lb, n);
    }
  }
  function Ib(e, n, i) {
    e === "focusin" ? (ap(), Ji = n, Wi = i, Ji.attachEvent("onpropertychange", ip)) : e === "focusout" && ap();
  }
  function Pb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ao(Wi);
  }
  function Bb(e, n) {
    if (e === "click") return Ao(n);
  }
  function Ub(e, n) {
    if (e === "input" || e === "change")
      return Ao(n);
  }
  function Fb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var bn = typeof Object.is == "function" ? Object.is : Fb;
  function es(e, n) {
    if (bn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var i = Object.keys(e), o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var c = i[o];
      if (!nt.call(n, c) || !bn(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function sp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function op(e, n) {
    var i = sp(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = e + i.textContent.length, e <= n && o >= n)
          return { node: i, offset: n - e };
        e = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = sp(i);
    }
  }
  function lp(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? lp(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function up(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = bo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = bo(e.document);
    }
    return n;
  }
  function lc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Hb = fr && "documentMode" in document && 11 >= document.documentMode, ei = null, uc = null, ts = null, cc = !1;
  function cp(e, n, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    cc || ei == null || ei !== bo(o) || (o = ei, "selectionStart" in o && lc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), ts && es(ts, o) || (ts = o, o = fl(uc, "onSelect"), 0 < o.length && (n = new wo(
      "onSelect",
      "select",
      null,
      n,
      i
    ), e.push({ event: n, listeners: o }), n.target = ei)));
  }
  function ha(e, n) {
    var i = {};
    return i[e.toLowerCase()] = n.toLowerCase(), i["Webkit" + e] = "webkit" + n, i["Moz" + e] = "moz" + n, i;
  }
  var ti = {
    animationend: ha("Animation", "AnimationEnd"),
    animationiteration: ha("Animation", "AnimationIteration"),
    animationstart: ha("Animation", "AnimationStart"),
    transitionrun: ha("Transition", "TransitionRun"),
    transitionstart: ha("Transition", "TransitionStart"),
    transitioncancel: ha("Transition", "TransitionCancel"),
    transitionend: ha("Transition", "TransitionEnd")
  }, fc = {}, fp = {};
  fr && (fp = document.createElement("div").style, "AnimationEvent" in window || (delete ti.animationend.animation, delete ti.animationiteration.animation, delete ti.animationstart.animation), "TransitionEvent" in window || delete ti.transitionend.transition);
  function pa(e) {
    if (fc[e]) return fc[e];
    if (!ti[e]) return e;
    var n = ti[e], i;
    for (i in n)
      if (n.hasOwnProperty(i) && i in fp)
        return fc[e] = n[i];
    return e;
  }
  var dp = pa("animationend"), hp = pa("animationiteration"), pp = pa("animationstart"), qb = pa("transitionrun"), Zb = pa("transitionstart"), Gb = pa("transitioncancel"), mp = pa("transitionend"), gp = /* @__PURE__ */ new Map(), dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  dc.push("scrollEnd");
  function Vn(e, n) {
    gp.set(e, n), fa(n, [e]);
  }
  var vp = /* @__PURE__ */ new WeakMap();
  function Rn(e, n) {
    if (typeof e == "object" && e !== null) {
      var i = vp.get(e);
      return i !== void 0 ? i : (n = {
        value: e,
        source: n,
        stack: jh(n)
      }, vp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: jh(n)
    };
  }
  var zn = [], ni = 0, hc = 0;
  function No() {
    for (var e = ni, n = hc = ni = 0; n < e; ) {
      var i = zn[n];
      zn[n++] = null;
      var o = zn[n];
      zn[n++] = null;
      var c = zn[n];
      zn[n++] = null;
      var v = zn[n];
      if (zn[n++] = null, o !== null && c !== null) {
        var A = o.pending;
        A === null ? c.next = c : (c.next = A.next, A.next = c), o.pending = c;
      }
      v !== 0 && yp(i, c, v);
    }
  }
  function To(e, n, i, o) {
    zn[ni++] = e, zn[ni++] = n, zn[ni++] = i, zn[ni++] = o, hc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function pc(e, n, i, o) {
    return To(e, n, i, o), Oo(e);
  }
  function ri(e, n) {
    return To(e, null, null, n), Oo(e);
  }
  function yp(e, n, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var c = !1, v = e.return; v !== null; )
      v.childLanes |= i, o = v.alternate, o !== null && (o.childLanes |= i), v.tag === 22 && (e = v.stateNode, e === null || e._visibility & 1 || (c = !0)), e = v, v = v.return;
    return e.tag === 3 ? (v = e.stateNode, c && n !== null && (c = 31 - ne(i), e = v.hiddenUpdates, o = e[c], o === null ? e[c] = [n] : o.push(n), n.lane = i | 536870912), v) : null;
  }
  function Oo(e) {
    if (50 < As)
      throw As = 0, Sf = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ai = {};
  function Vb(e, n, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _n(e, n, i, o) {
    return new Vb(e, n, i, o);
  }
  function mc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function dr(e, n) {
    var i = e.alternate;
    return i === null ? (i = _n(
      e.tag,
      n,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = n, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, n = e.dependencies, i.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function bp(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, n = i.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Do(e, n, i, o, c, v) {
    var A = 0;
    if (o = e, typeof e == "function") mc(e) && (A = 1);
    else if (typeof e == "string")
      A = X_(
        e,
        i,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Y:
          return e = _n(31, i, n, c), e.elementType = Y, e.lanes = v, e;
        case h:
          return ma(i.children, c, v, n);
        case x:
          A = 8, c |= 24;
          break;
        case w:
          return e = _n(12, i, n, c | 2), e.elementType = w, e.lanes = v, e;
        case N:
          return e = _n(13, i, n, c), e.elementType = N, e.lanes = v, e;
        case M:
          return e = _n(19, i, n, c), e.elementType = M, e.lanes = v, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case D:
                A = 10;
                break e;
              case C:
                A = 9;
                break e;
              case E:
                A = 11;
                break e;
              case j:
                A = 14;
                break e;
              case L:
                A = 16, o = null;
                break e;
            }
          A = 29, i = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = _n(A, i, n, c), n.elementType = e, n.type = o, n.lanes = v, n;
  }
  function ma(e, n, i, o) {
    return e = _n(7, e, o, n), e.lanes = i, e;
  }
  function gc(e, n, i) {
    return e = _n(6, e, null, n), e.lanes = i, e;
  }
  function vc(e, n, i) {
    return n = _n(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = i, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var ii = [], si = 0, Mo = null, ko = 0, Ln = [], In = 0, ga = null, hr = 1, pr = "";
  function va(e, n) {
    ii[si++] = ko, ii[si++] = Mo, Mo = e, ko = n;
  }
  function _p(e, n, i) {
    Ln[In++] = hr, Ln[In++] = pr, Ln[In++] = ga, ga = e;
    var o = hr;
    e = pr;
    var c = 32 - ne(o) - 1;
    o &= ~(1 << c), i += 1;
    var v = 32 - ne(n) + c;
    if (30 < v) {
      var A = c - c % 5;
      v = (o & (1 << A) - 1).toString(32), o >>= A, c -= A, hr = 1 << 32 - ne(n) + c | i << c | o, pr = v + e;
    } else
      hr = 1 << v | i << c | o, pr = e;
  }
  function yc(e) {
    e.return !== null && (va(e, 1), _p(e, 1, 0));
  }
  function bc(e) {
    for (; e === Mo; )
      Mo = ii[--si], ii[si] = null, ko = ii[--si], ii[si] = null;
    for (; e === ga; )
      ga = Ln[--In], Ln[In] = null, pr = Ln[--In], Ln[In] = null, hr = Ln[--In], Ln[In] = null;
  }
  var nn = null, xt = null, tt = !1, ya = null, nr = !1, _c = Error(s(519));
  function ba(e) {
    var n = Error(s(418, ""));
    throw as(Rn(n, e)), _c;
  }
  function Sp(e) {
    var n = e.stateNode, i = e.type, o = e.memoizedProps;
    switch (n[Xt] = e, n[ln] = o, i) {
      case "dialog":
        qe("cancel", n), qe("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        qe("load", n);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Ts.length; i++)
          qe(Ts[i], n);
        break;
      case "source":
        qe("error", n);
        break;
      case "img":
      case "image":
      case "link":
        qe("error", n), qe("load", n);
        break;
      case "details":
        qe("toggle", n);
        break;
      case "input":
        qe("invalid", n), Lh(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), yo(n);
        break;
      case "select":
        qe("invalid", n);
        break;
      case "textarea":
        qe("invalid", n), Ph(n, o.value, o.defaultValue, o.children), yo(n);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || o.suppressHydrationWarning === !0 || Pg(n.textContent, i) ? (o.popover != null && (qe("beforetoggle", n), qe("toggle", n)), o.onScroll != null && qe("scroll", n), o.onScrollEnd != null && qe("scrollend", n), o.onClick != null && (n.onclick = dl), n = !0) : n = !1, n || ba(e);
  }
  function xp(e) {
    for (nn = e.return; nn; )
      switch (nn.tag) {
        case 5:
        case 13:
          nr = !1;
          return;
        case 27:
        case 3:
          nr = !0;
          return;
        default:
          nn = nn.return;
      }
  }
  function ns(e) {
    if (e !== nn) return !1;
    if (!tt) return xp(e), tt = !0, !1;
    var n = e.tag, i;
    if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || If(e.type, e.memoizedProps)), i = !i), i && xt && ba(e), xp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (i = e.data, i === "/$") {
              if (n === 0) {
                xt = Xn(e.nextSibling);
                break e;
              }
              n--;
            } else
              i !== "$" && i !== "$!" && i !== "$?" || n++;
          e = e.nextSibling;
        }
        xt = null;
      }
    } else
      n === 27 ? (n = xt, Qr(e.type) ? (e = Ff, Ff = null, xt = e) : xt = n) : xt = nn ? Xn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    xt = nn = null, tt = !1;
  }
  function Ep() {
    var e = ya;
    return e !== null && (dn === null ? dn = e : dn.push.apply(
      dn,
      e
    ), ya = null), e;
  }
  function as(e) {
    ya === null ? ya = [e] : ya.push(e);
  }
  var Sc = J(null), _a = null, mr = null;
  function zr(e, n, i) {
    se(Sc, n._currentValue), n._currentValue = i;
  }
  function gr(e) {
    e._currentValue = Sc.current, ie(Sc);
  }
  function xc(e, n, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === i) break;
      e = e.return;
    }
  }
  function Ec(e, n, i, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var v = c.dependencies;
      if (v !== null) {
        var A = c.child;
        v = v.firstContext;
        e: for (; v !== null; ) {
          var O = v;
          v = c;
          for (var k = 0; k < n.length; k++)
            if (O.context === n[k]) {
              v.lanes |= i, O = v.alternate, O !== null && (O.lanes |= i), xc(
                v.return,
                i,
                e
              ), o || (A = null);
              break e;
            }
          v = O.next;
        }
      } else if (c.tag === 18) {
        if (A = c.return, A === null) throw Error(s(341));
        A.lanes |= i, v = A.alternate, v !== null && (v.lanes |= i), xc(A, i, e), A = null;
      } else A = c.child;
      if (A !== null) A.return = c;
      else
        for (A = c; A !== null; ) {
          if (A === e) {
            A = null;
            break;
          }
          if (c = A.sibling, c !== null) {
            c.return = A.return, A = c;
            break;
          }
          A = A.return;
        }
      c = A;
    }
  }
  function is(e, n, i, o) {
    e = null;
    for (var c = n, v = !1; c !== null; ) {
      if (!v) {
        if ((c.flags & 524288) !== 0) v = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var A = c.alternate;
        if (A === null) throw Error(s(387));
        if (A = A.memoizedProps, A !== null) {
          var O = c.type;
          bn(c.pendingProps.value, A.value) || (e !== null ? e.push(O) : e = [O]);
        }
      } else if (c === xe.current) {
        if (A = c.alternate, A === null) throw Error(s(387));
        A.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Rs) : e = [Rs]);
      }
      c = c.return;
    }
    e !== null && Ec(
      n,
      e,
      i,
      o
    ), n.flags |= 262144;
  }
  function jo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!bn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Sa(e) {
    _a = e, mr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function $t(e) {
    return wp(_a, e);
  }
  function Ro(e, n) {
    return _a === null && Sa(e), wp(e, n);
  }
  function wp(e, n) {
    var i = n._currentValue;
    if (n = { context: n, memoizedValue: i, next: null }, mr === null) {
      if (e === null) throw Error(s(308));
      mr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else mr = mr.next = n;
    return i;
  }
  var Yb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(i, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(i) {
        return i();
      });
    };
  }, Xb = t.unstable_scheduleCallback, $b = t.unstable_NormalPriority, Rt = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function wc() {
    return {
      controller: new Yb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ss(e) {
    e.refCount--, e.refCount === 0 && Xb($b, function() {
      e.controller.abort();
    });
  }
  var os = null, Cc = 0, oi = 0, li = null;
  function Qb(e, n) {
    if (os === null) {
      var i = os = [];
      Cc = 0, oi = Tf(), li = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return Cc++, n.then(Cp, Cp), n;
  }
  function Cp() {
    if (--Cc === 0 && os !== null) {
      li !== null && (li.status = "fulfilled");
      var e = os;
      os = null, oi = 0, li = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Kb(e, n) {
    var i = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        i.push(c);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = n;
        for (var c = 0; c < i.length; c++) (0, i[c])(n);
      },
      function(c) {
        for (o.status = "rejected", o.reason = c, c = 0; c < i.length; c++)
          (0, i[c])(void 0);
      }
    ), o;
  }
  var Ap = B.S;
  B.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Qb(e, n), Ap !== null && Ap(e, n);
  };
  var xa = J(null);
  function Ac() {
    var e = xa.current;
    return e !== null ? e : dt.pooledCache;
  }
  function zo(e, n) {
    n === null ? se(xa, xa.current) : se(xa, n.pool);
  }
  function Np() {
    var e = Ac();
    return e === null ? null : { parent: Rt._currentValue, pool: e };
  }
  var ls = Error(s(460)), Tp = Error(s(474)), Lo = Error(s(542)), Nc = { then: function() {
  } };
  function Op(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Io() {
  }
  function Dp(e, n, i) {
    switch (i = e[i], i === void 0 ? e.push(n) : i !== n && (n.then(Io, Io), n = i), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, kp(e), e;
      default:
        if (typeof n.status == "string") n.then(Io, Io);
        else {
          if (e = dt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = n, e.status = "pending", e.then(
            function(o) {
              if (n.status === "pending") {
                var c = n;
                c.status = "fulfilled", c.value = o;
              }
            },
            function(o) {
              if (n.status === "pending") {
                var c = n;
                c.status = "rejected", c.reason = o;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, kp(e), e;
        }
        throw us = n, ls;
    }
  }
  var us = null;
  function Mp() {
    if (us === null) throw Error(s(459));
    var e = us;
    return us = null, e;
  }
  function kp(e) {
    if (e === ls || e === Lo)
      throw Error(s(483));
  }
  var Lr = !1;
  function Tc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Oc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ir(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Pr(e, n, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (rt & 2) !== 0) {
      var c = o.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), o.pending = n, n = Oo(e), yp(e, null, i), n;
    }
    return To(e, o, n, i), Oo(e);
  }
  function cs(e, n, i) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, Ch(e, i);
    }
  }
  function Dc(e, n) {
    var i = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var c = null, v = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var A = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          v === null ? c = v = A : v = v.next = A, i = i.next;
        } while (i !== null);
        v === null ? c = v = n : v = v.next = n;
      } else c = v = n;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: v,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = n : e.next = n, i.lastBaseUpdate = n;
  }
  var Mc = !1;
  function fs() {
    if (Mc) {
      var e = li;
      if (e !== null) throw e;
    }
  }
  function ds(e, n, i, o) {
    Mc = !1;
    var c = e.updateQueue;
    Lr = !1;
    var v = c.firstBaseUpdate, A = c.lastBaseUpdate, O = c.shared.pending;
    if (O !== null) {
      c.shared.pending = null;
      var k = O, H = k.next;
      k.next = null, A === null ? v = H : A.next = H, A = k;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, O = Q.lastBaseUpdate, O !== A && (O === null ? Q.firstBaseUpdate = H : O.next = H, Q.lastBaseUpdate = k));
    }
    if (v !== null) {
      var ee = c.baseState;
      A = 0, Q = H = k = null, O = v;
      do {
        var Z = O.lane & -536870913, V = Z !== O.lane;
        if (V ? ($e & Z) === Z : (o & Z) === Z) {
          Z !== 0 && Z === oi && (Mc = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: null,
            next: null
          });
          e: {
            var Te = e, Ce = O;
            Z = n;
            var lt = i;
            switch (Ce.tag) {
              case 1:
                if (Te = Ce.payload, typeof Te == "function") {
                  ee = Te.call(lt, ee, Z);
                  break e;
                }
                ee = Te;
                break e;
              case 3:
                Te.flags = Te.flags & -65537 | 128;
              case 0:
                if (Te = Ce.payload, Z = typeof Te == "function" ? Te.call(lt, ee, Z) : Te, Z == null) break e;
                ee = y({}, ee, Z);
                break e;
              case 2:
                Lr = !0;
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
          }, Q === null ? (H = Q = V, k = ee) : Q = Q.next = V, A |= Z;
        if (O = O.next, O === null) {
          if (O = c.shared.pending, O === null)
            break;
          V = O, O = V.next, V.next = null, c.lastBaseUpdate = V, c.shared.pending = null;
        }
      } while (!0);
      Q === null && (k = ee), c.baseState = k, c.firstBaseUpdate = H, c.lastBaseUpdate = Q, v === null && (c.shared.lanes = 0), Vr |= A, e.lanes = A, e.memoizedState = ee;
    }
  }
  function jp(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function Rp(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        jp(i[e], n);
  }
  var ui = J(null), Po = J(0);
  function zp(e, n) {
    e = Er, se(Po, e), se(ui, n), Er = e | n.baseLanes;
  }
  function kc() {
    se(Po, Er), se(ui, ui.current);
  }
  function jc() {
    Er = Po.current, ie(ui), ie(Po);
  }
  var Br = 0, Pe = null, st = null, Ot = null, Bo = !1, ci = !1, Ea = !1, Uo = 0, hs = 0, fi = null, Jb = 0;
  function Ct() {
    throw Error(s(321));
  }
  function Rc(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!bn(e[i], n[i])) return !1;
    return !0;
  }
  function zc(e, n, i, o, c, v) {
    return Br = v, Pe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, B.H = e === null || e.memoizedState === null ? ym : bm, Ea = !1, v = i(o, c), Ea = !1, ci && (v = Ip(
      n,
      i,
      o,
      c
    )), Lp(e), v;
  }
  function Lp(e) {
    B.H = Vo;
    var n = st !== null && st.next !== null;
    if (Br = 0, Ot = st = Pe = null, Bo = !1, hs = 0, fi = null, n) throw Error(s(300));
    e === null || Bt || (e = e.dependencies, e !== null && jo(e) && (Bt = !0));
  }
  function Ip(e, n, i, o) {
    Pe = e;
    var c = 0;
    do {
      if (ci && (fi = null), hs = 0, ci = !1, 25 <= c) throw Error(s(301));
      if (c += 1, Ot = st = null, e.updateQueue != null) {
        var v = e.updateQueue;
        v.lastEffect = null, v.events = null, v.stores = null, v.memoCache != null && (v.memoCache.index = 0);
      }
      B.H = i_, v = n(i, o);
    } while (ci);
    return v;
  }
  function Wb() {
    var e = B.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? ps(n) : n, e = e.useState()[0], (st !== null ? st.memoizedState : null) !== e && (Pe.flags |= 1024), n;
  }
  function Lc() {
    var e = Uo !== 0;
    return Uo = 0, e;
  }
  function Ic(e, n, i) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i;
  }
  function Pc(e) {
    if (Bo) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Bo = !1;
    }
    Br = 0, Ot = st = Pe = null, ci = !1, hs = Uo = 0, fi = null;
  }
  function cn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ot === null ? Pe.memoizedState = Ot = e : Ot = Ot.next = e, Ot;
  }
  function Dt() {
    if (st === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = st.next;
    var n = Ot === null ? Pe.memoizedState : Ot.next;
    if (n !== null)
      Ot = n, st = e;
    else {
      if (e === null)
        throw Pe.alternate === null ? Error(s(467)) : Error(s(310));
      st = e, e = {
        memoizedState: st.memoizedState,
        baseState: st.baseState,
        baseQueue: st.baseQueue,
        queue: st.queue,
        next: null
      }, Ot === null ? Pe.memoizedState = Ot = e : Ot = Ot.next = e;
    }
    return Ot;
  }
  function Bc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ps(e) {
    var n = hs;
    return hs += 1, fi === null && (fi = []), e = Dp(fi, e, n), n = Pe, (Ot === null ? n.memoizedState : Ot.next) === null && (n = n.alternate, B.H = n === null || n.memoizedState === null ? ym : bm), e;
  }
  function Fo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ps(e);
      if (e.$$typeof === D) return $t(e);
    }
    throw Error(s(438, String(e)));
  }
  function Uc(e) {
    var n = null, i = Pe.updateQueue;
    if (i !== null && (n = i.memoCache), n == null) {
      var o = Pe.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), i === null && (i = Bc(), Pe.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0)
      for (i = n.data[n.index] = Array(e), o = 0; o < e; o++)
        i[o] = I;
    return n.index++, i;
  }
  function vr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ho(e) {
    var n = Dt();
    return Fc(n, st, e);
  }
  function Fc(e, n, i) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = i;
    var c = e.baseQueue, v = o.pending;
    if (v !== null) {
      if (c !== null) {
        var A = c.next;
        c.next = v.next, v.next = A;
      }
      n.baseQueue = c = v, o.pending = null;
    }
    if (v = e.baseState, c === null) e.memoizedState = v;
    else {
      n = c.next;
      var O = A = null, k = null, H = n, Q = !1;
      do {
        var ee = H.lane & -536870913;
        if (ee !== H.lane ? ($e & ee) === ee : (Br & ee) === ee) {
          var Z = H.revertLane;
          if (Z === 0)
            k !== null && (k = k.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), ee === oi && (Q = !0);
          else if ((Br & Z) === Z) {
            H = H.next, Z === oi && (Q = !0);
            continue;
          } else
            ee = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, k === null ? (O = k = ee, A = v) : k = k.next = ee, Pe.lanes |= Z, Vr |= Z;
          ee = H.action, Ea && i(v, ee), v = H.hasEagerState ? H.eagerState : i(v, ee);
        } else
          Z = {
            lane: ee,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, k === null ? (O = k = Z, A = v) : k = k.next = Z, Pe.lanes |= ee, Vr |= ee;
        H = H.next;
      } while (H !== null && H !== n);
      if (k === null ? A = v : k.next = O, !bn(v, e.memoizedState) && (Bt = !0, Q && (i = li, i !== null)))
        throw i;
      e.memoizedState = v, e.baseState = A, e.baseQueue = k, o.lastRenderedState = v;
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Hc(e) {
    var n = Dt(), i = n.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch, c = i.pending, v = n.memoizedState;
    if (c !== null) {
      i.pending = null;
      var A = c = c.next;
      do
        v = e(v, A.action), A = A.next;
      while (A !== c);
      bn(v, n.memoizedState) || (Bt = !0), n.memoizedState = v, n.baseQueue === null && (n.baseState = v), i.lastRenderedState = v;
    }
    return [v, o];
  }
  function Pp(e, n, i) {
    var o = Pe, c = Dt(), v = tt;
    if (v) {
      if (i === void 0) throw Error(s(407));
      i = i();
    } else i = n();
    var A = !bn(
      (st || c).memoizedState,
      i
    );
    A && (c.memoizedState = i, Bt = !0), c = c.queue;
    var O = Fp.bind(null, o, c, e);
    if (ms(2048, 8, O, [e]), c.getSnapshot !== n || A || Ot !== null && Ot.memoizedState.tag & 1) {
      if (o.flags |= 2048, di(
        9,
        qo(),
        Up.bind(
          null,
          o,
          c,
          i,
          n
        ),
        null
      ), dt === null) throw Error(s(349));
      v || (Br & 124) !== 0 || Bp(o, n, i);
    }
    return i;
  }
  function Bp(e, n, i) {
    e.flags |= 16384, e = { getSnapshot: n, value: i }, n = Pe.updateQueue, n === null ? (n = Bc(), Pe.updateQueue = n, n.stores = [e]) : (i = n.stores, i === null ? n.stores = [e] : i.push(e));
  }
  function Up(e, n, i, o) {
    n.value = i, n.getSnapshot = o, Hp(n) && qp(e);
  }
  function Fp(e, n, i) {
    return i(function() {
      Hp(n) && qp(e);
    });
  }
  function Hp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !bn(e, i);
    } catch {
      return !0;
    }
  }
  function qp(e) {
    var n = ri(e, 2);
    n !== null && Cn(n, e, 2);
  }
  function qc(e) {
    var n = cn();
    if (typeof e == "function") {
      var i = e;
      if (e = i(), Ea) {
        tn(!0);
        try {
          i();
        } finally {
          tn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vr,
      lastRenderedState: e
    }, n;
  }
  function Zp(e, n, i, o) {
    return e.baseState = i, Fc(
      e,
      st,
      typeof o == "function" ? o : vr
    );
  }
  function e_(e, n, i, o, c) {
    if (Go(e)) throw Error(s(485));
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
        then: function(A) {
          v.listeners.push(A);
        }
      };
      B.T !== null ? i(!0) : v.isTransition = !1, o(v), i = n.pending, i === null ? (v.next = n.pending = v, Gp(n, v)) : (v.next = i.next, n.pending = i.next = v);
    }
  }
  function Gp(e, n) {
    var i = n.action, o = n.payload, c = e.state;
    if (n.isTransition) {
      var v = B.T, A = {};
      B.T = A;
      try {
        var O = i(c, o), k = B.S;
        k !== null && k(A, O), Vp(e, n, O);
      } catch (H) {
        Zc(e, n, H);
      } finally {
        B.T = v;
      }
    } else
      try {
        v = i(c, o), Vp(e, n, v);
      } catch (H) {
        Zc(e, n, H);
      }
  }
  function Vp(e, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        Yp(e, n, o);
      },
      function(o) {
        return Zc(e, n, o);
      }
    ) : Yp(e, n, i);
  }
  function Yp(e, n, i) {
    n.status = "fulfilled", n.value = i, Xp(n), e.state = i, n = e.pending, n !== null && (i = n.next, i === n ? e.pending = null : (i = i.next, n.next = i, Gp(e, i)));
  }
  function Zc(e, n, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = i, Xp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Xp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function $p(e, n) {
    return n;
  }
  function Qp(e, n) {
    if (tt) {
      var i = dt.formState;
      if (i !== null) {
        e: {
          var o = Pe;
          if (tt) {
            if (xt) {
              t: {
                for (var c = xt, v = nr; c.nodeType !== 8; ) {
                  if (!v) {
                    c = null;
                    break t;
                  }
                  if (c = Xn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                v = c.data, c = v === "F!" || v === "F" ? c : null;
              }
              if (c) {
                xt = Xn(
                  c.nextSibling
                ), o = c.data === "F!";
                break e;
              }
            }
            ba(o);
          }
          o = !1;
        }
        o && (n = i[0]);
      }
    }
    return i = cn(), i.memoizedState = i.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $p,
      lastRenderedState: n
    }, i.queue = o, i = mm.bind(
      null,
      Pe,
      o
    ), o.dispatch = i, o = qc(!1), v = $c.bind(
      null,
      Pe,
      !1,
      o.queue
    ), o = cn(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = c, i = e_.bind(
      null,
      Pe,
      c,
      v,
      i
    ), c.dispatch = i, o.memoizedState = e, [n, i, !1];
  }
  function Kp(e) {
    var n = Dt();
    return Jp(n, st, e);
  }
  function Jp(e, n, i) {
    if (n = Fc(
      e,
      n,
      $p
    )[0], e = Ho(vr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = ps(n);
      } catch (A) {
        throw A === ls ? Lo : A;
      }
    else o = n;
    n = Dt();
    var c = n.queue, v = c.dispatch;
    return i !== n.memoizedState && (Pe.flags |= 2048, di(
      9,
      qo(),
      t_.bind(null, c, i),
      null
    )), [o, v, e];
  }
  function t_(e, n) {
    e.action = n;
  }
  function Wp(e) {
    var n = Dt(), i = st;
    if (i !== null)
      return Jp(n, i, e);
    Dt(), n = n.memoizedState, i = Dt();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [n, o, !1];
  }
  function di(e, n, i, o) {
    return e = { tag: e, create: i, deps: o, inst: n, next: null }, n = Pe.updateQueue, n === null && (n = Bc(), Pe.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, n.lastEffect = e), e;
  }
  function qo() {
    return { destroy: void 0, resource: void 0 };
  }
  function em() {
    return Dt().memoizedState;
  }
  function Zo(e, n, i, o) {
    var c = cn();
    o = o === void 0 ? null : o, Pe.flags |= e, c.memoizedState = di(
      1 | n,
      qo(),
      i,
      o
    );
  }
  function ms(e, n, i, o) {
    var c = Dt();
    o = o === void 0 ? null : o;
    var v = c.memoizedState.inst;
    st !== null && o !== null && Rc(o, st.memoizedState.deps) ? c.memoizedState = di(n, v, i, o) : (Pe.flags |= e, c.memoizedState = di(
      1 | n,
      v,
      i,
      o
    ));
  }
  function tm(e, n) {
    Zo(8390656, 8, e, n);
  }
  function nm(e, n) {
    ms(2048, 8, e, n);
  }
  function rm(e, n) {
    return ms(4, 2, e, n);
  }
  function am(e, n) {
    return ms(4, 4, e, n);
  }
  function im(e, n) {
    if (typeof n == "function") {
      e = e();
      var i = n(e);
      return function() {
        typeof i == "function" ? i() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function sm(e, n, i) {
    i = i != null ? i.concat([e]) : null, ms(4, 4, im.bind(null, n, e), i);
  }
  function Gc() {
  }
  function om(e, n) {
    var i = Dt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && Rc(n, o[1]) ? o[0] : (i.memoizedState = [e, n], e);
  }
  function lm(e, n) {
    var i = Dt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && Rc(n, o[1]))
      return o[0];
    if (o = e(), Ea) {
      tn(!0);
      try {
        e();
      } finally {
        tn(!1);
      }
    }
    return i.memoizedState = [o, n], o;
  }
  function Vc(e, n, i) {
    return i === void 0 || (Br & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = i, e = fg(), Pe.lanes |= e, Vr |= e, i);
  }
  function um(e, n, i, o) {
    return bn(i, n) ? i : ui.current !== null ? (e = Vc(e, i, o), bn(e, n) || (Bt = !0), e) : (Br & 42) === 0 ? (Bt = !0, e.memoizedState = i) : (e = fg(), Pe.lanes |= e, Vr |= e, n);
  }
  function cm(e, n, i, o, c) {
    var v = ae.p;
    ae.p = v !== 0 && 8 > v ? v : 8;
    var A = B.T, O = {};
    B.T = O, $c(e, !1, n, i);
    try {
      var k = c(), H = B.S;
      if (H !== null && H(O, k), k !== null && typeof k == "object" && typeof k.then == "function") {
        var Q = Kb(
          k,
          o
        );
        gs(
          e,
          n,
          Q,
          wn(e)
        );
      } else
        gs(
          e,
          n,
          o,
          wn(e)
        );
    } catch (ee) {
      gs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: ee },
        wn()
      );
    } finally {
      ae.p = v, B.T = A;
    }
  }
  function n_() {
  }
  function Yc(e, n, i, o) {
    if (e.tag !== 5) throw Error(s(476));
    var c = fm(e).queue;
    cm(
      e,
      c,
      n,
      me,
      i === null ? n_ : function() {
        return dm(e), i(o);
      }
    );
  }
  function fm(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: me,
      baseState: me,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: me
      },
      next: null
    };
    var i = {};
    return n.next = {
      memoizedState: i,
      baseState: i,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: i
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function dm(e) {
    var n = fm(e).next.queue;
    gs(e, n, {}, wn());
  }
  function Xc() {
    return $t(Rs);
  }
  function hm() {
    return Dt().memoizedState;
  }
  function pm() {
    return Dt().memoizedState;
  }
  function r_(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = wn();
          e = Ir(i);
          var o = Pr(n, e, i);
          o !== null && (Cn(o, n, i), cs(o, n, i)), n = { cache: wc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function a_(e, n, i) {
    var o = wn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Go(e) ? gm(n, i) : (i = pc(e, n, i, o), i !== null && (Cn(i, e, o), vm(i, n, o)));
  }
  function mm(e, n, i) {
    var o = wn();
    gs(e, n, i, o);
  }
  function gs(e, n, i, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Go(e)) gm(n, c);
    else {
      var v = e.alternate;
      if (e.lanes === 0 && (v === null || v.lanes === 0) && (v = n.lastRenderedReducer, v !== null))
        try {
          var A = n.lastRenderedState, O = v(A, i);
          if (c.hasEagerState = !0, c.eagerState = O, bn(O, A))
            return To(e, n, c, 0), dt === null && No(), !1;
        } catch {
        } finally {
        }
      if (i = pc(e, n, c, o), i !== null)
        return Cn(i, e, o), vm(i, n, o), !0;
    }
    return !1;
  }
  function $c(e, n, i, o) {
    if (o = {
      lane: 2,
      revertLane: Tf(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Go(e)) {
      if (n) throw Error(s(479));
    } else
      n = pc(
        e,
        i,
        o,
        2
      ), n !== null && Cn(n, e, 2);
  }
  function Go(e) {
    var n = e.alternate;
    return e === Pe || n !== null && n === Pe;
  }
  function gm(e, n) {
    ci = Bo = !0;
    var i = e.pending;
    i === null ? n.next = n : (n.next = i.next, i.next = n), e.pending = n;
  }
  function vm(e, n, i) {
    if ((i & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, Ch(e, i);
    }
  }
  var Vo = {
    readContext: $t,
    use: Fo,
    useCallback: Ct,
    useContext: Ct,
    useEffect: Ct,
    useImperativeHandle: Ct,
    useLayoutEffect: Ct,
    useInsertionEffect: Ct,
    useMemo: Ct,
    useReducer: Ct,
    useRef: Ct,
    useState: Ct,
    useDebugValue: Ct,
    useDeferredValue: Ct,
    useTransition: Ct,
    useSyncExternalStore: Ct,
    useId: Ct,
    useHostTransitionStatus: Ct,
    useFormState: Ct,
    useActionState: Ct,
    useOptimistic: Ct,
    useMemoCache: Ct,
    useCacheRefresh: Ct
  }, ym = {
    readContext: $t,
    use: Fo,
    useCallback: function(e, n) {
      return cn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: $t,
    useEffect: tm,
    useImperativeHandle: function(e, n, i) {
      i = i != null ? i.concat([e]) : null, Zo(
        4194308,
        4,
        im.bind(null, n, e),
        i
      );
    },
    useLayoutEffect: function(e, n) {
      return Zo(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Zo(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var i = cn();
      n = n === void 0 ? null : n;
      var o = e();
      if (Ea) {
        tn(!0);
        try {
          e();
        } finally {
          tn(!1);
        }
      }
      return i.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, i) {
      var o = cn();
      if (i !== void 0) {
        var c = i(n);
        if (Ea) {
          tn(!0);
          try {
            i(n);
          } finally {
            tn(!1);
          }
        }
      } else c = n;
      return o.memoizedState = o.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, o.queue = e, e = e.dispatch = a_.bind(
        null,
        Pe,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = cn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = qc(e);
      var n = e.queue, i = mm.bind(null, Pe, n);
      return n.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: Gc,
    useDeferredValue: function(e, n) {
      var i = cn();
      return Vc(i, e, n);
    },
    useTransition: function() {
      var e = qc(!1);
      return e = cm.bind(
        null,
        Pe,
        e.queue,
        !0,
        !1
      ), cn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, i) {
      var o = Pe, c = cn();
      if (tt) {
        if (i === void 0)
          throw Error(s(407));
        i = i();
      } else {
        if (i = n(), dt === null)
          throw Error(s(349));
        ($e & 124) !== 0 || Bp(o, n, i);
      }
      c.memoizedState = i;
      var v = { value: i, getSnapshot: n };
      return c.queue = v, tm(Fp.bind(null, o, v, e), [
        e
      ]), o.flags |= 2048, di(
        9,
        qo(),
        Up.bind(
          null,
          o,
          v,
          i,
          n
        ),
        null
      ), i;
    },
    useId: function() {
      var e = cn(), n = dt.identifierPrefix;
      if (tt) {
        var i = pr, o = hr;
        i = (o & ~(1 << 32 - ne(o) - 1)).toString(32) + i, n = "«" + n + "R" + i, i = Uo++, 0 < i && (n += "H" + i.toString(32)), n += "»";
      } else
        i = Jb++, n = "«" + n + "r" + i.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Xc,
    useFormState: Qp,
    useActionState: Qp,
    useOptimistic: function(e) {
      var n = cn();
      n.memoizedState = n.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = i, n = $c.bind(
        null,
        Pe,
        !0,
        i
      ), i.dispatch = n, [e, n];
    },
    useMemoCache: Uc,
    useCacheRefresh: function() {
      return cn().memoizedState = r_.bind(
        null,
        Pe
      );
    }
  }, bm = {
    readContext: $t,
    use: Fo,
    useCallback: om,
    useContext: $t,
    useEffect: nm,
    useImperativeHandle: sm,
    useInsertionEffect: rm,
    useLayoutEffect: am,
    useMemo: lm,
    useReducer: Ho,
    useRef: em,
    useState: function() {
      return Ho(vr);
    },
    useDebugValue: Gc,
    useDeferredValue: function(e, n) {
      var i = Dt();
      return um(
        i,
        st.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Ho(vr)[0], n = Dt().memoizedState;
      return [
        typeof e == "boolean" ? e : ps(e),
        n
      ];
    },
    useSyncExternalStore: Pp,
    useId: hm,
    useHostTransitionStatus: Xc,
    useFormState: Kp,
    useActionState: Kp,
    useOptimistic: function(e, n) {
      var i = Dt();
      return Zp(i, st, e, n);
    },
    useMemoCache: Uc,
    useCacheRefresh: pm
  }, i_ = {
    readContext: $t,
    use: Fo,
    useCallback: om,
    useContext: $t,
    useEffect: nm,
    useImperativeHandle: sm,
    useInsertionEffect: rm,
    useLayoutEffect: am,
    useMemo: lm,
    useReducer: Hc,
    useRef: em,
    useState: function() {
      return Hc(vr);
    },
    useDebugValue: Gc,
    useDeferredValue: function(e, n) {
      var i = Dt();
      return st === null ? Vc(i, e, n) : um(
        i,
        st.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Hc(vr)[0], n = Dt().memoizedState;
      return [
        typeof e == "boolean" ? e : ps(e),
        n
      ];
    },
    useSyncExternalStore: Pp,
    useId: hm,
    useHostTransitionStatus: Xc,
    useFormState: Wp,
    useActionState: Wp,
    useOptimistic: function(e, n) {
      var i = Dt();
      return st !== null ? Zp(i, st, e, n) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Uc,
    useCacheRefresh: pm
  }, hi = null, vs = 0;
  function Yo(e) {
    var n = vs;
    return vs += 1, hi === null && (hi = []), Dp(hi, e, n);
  }
  function ys(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Xo(e, n) {
    throw n.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function _m(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Sm(e) {
    function n(P, z) {
      if (e) {
        var F = P.deletions;
        F === null ? (P.deletions = [z], P.flags |= 16) : F.push(z);
      }
    }
    function i(P, z) {
      if (!e) return null;
      for (; z !== null; )
        n(P, z), z = z.sibling;
      return null;
    }
    function o(P) {
      for (var z = /* @__PURE__ */ new Map(); P !== null; )
        P.key !== null ? z.set(P.key, P) : z.set(P.index, P), P = P.sibling;
      return z;
    }
    function c(P, z) {
      return P = dr(P, z), P.index = 0, P.sibling = null, P;
    }
    function v(P, z, F) {
      return P.index = F, e ? (F = P.alternate, F !== null ? (F = F.index, F < z ? (P.flags |= 67108866, z) : F) : (P.flags |= 67108866, z)) : (P.flags |= 1048576, z);
    }
    function A(P) {
      return e && P.alternate === null && (P.flags |= 67108866), P;
    }
    function O(P, z, F, K) {
      return z === null || z.tag !== 6 ? (z = gc(F, P.mode, K), z.return = P, z) : (z = c(z, F), z.return = P, z);
    }
    function k(P, z, F, K) {
      var be = F.type;
      return be === h ? Q(
        P,
        z,
        F.props.children,
        K,
        F.key
      ) : z !== null && (z.elementType === be || typeof be == "object" && be !== null && be.$$typeof === L && _m(be) === z.type) ? (z = c(z, F.props), ys(z, F), z.return = P, z) : (z = Do(
        F.type,
        F.key,
        F.props,
        null,
        P.mode,
        K
      ), ys(z, F), z.return = P, z);
    }
    function H(P, z, F, K) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== F.containerInfo || z.stateNode.implementation !== F.implementation ? (z = vc(F, P.mode, K), z.return = P, z) : (z = c(z, F.children || []), z.return = P, z);
    }
    function Q(P, z, F, K, be) {
      return z === null || z.tag !== 7 ? (z = ma(
        F,
        P.mode,
        K,
        be
      ), z.return = P, z) : (z = c(z, F), z.return = P, z);
    }
    function ee(P, z, F) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = gc(
          "" + z,
          P.mode,
          F
        ), z.return = P, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            return F = Do(
              z.type,
              z.key,
              z.props,
              null,
              P.mode,
              F
            ), ys(F, z), F.return = P, F;
          case m:
            return z = vc(
              z,
              P.mode,
              F
            ), z.return = P, z;
          case L:
            var K = z._init;
            return z = K(z._payload), ee(P, z, F);
        }
        if (_e(z) || $(z))
          return z = ma(
            z,
            P.mode,
            F,
            null
          ), z.return = P, z;
        if (typeof z.then == "function")
          return ee(P, Yo(z), F);
        if (z.$$typeof === D)
          return ee(
            P,
            Ro(P, z),
            F
          );
        Xo(P, z);
      }
      return null;
    }
    function Z(P, z, F, K) {
      var be = z !== null ? z.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return be !== null ? null : O(P, z, "" + F, K);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case b:
            return F.key === be ? k(P, z, F, K) : null;
          case m:
            return F.key === be ? H(P, z, F, K) : null;
          case L:
            return be = F._init, F = be(F._payload), Z(P, z, F, K);
        }
        if (_e(F) || $(F))
          return be !== null ? null : Q(P, z, F, K, null);
        if (typeof F.then == "function")
          return Z(
            P,
            z,
            Yo(F),
            K
          );
        if (F.$$typeof === D)
          return Z(
            P,
            z,
            Ro(P, F),
            K
          );
        Xo(P, F);
      }
      return null;
    }
    function V(P, z, F, K, be) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return P = P.get(F) || null, O(z, P, "" + K, be);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case b:
            return P = P.get(
              K.key === null ? F : K.key
            ) || null, k(z, P, K, be);
          case m:
            return P = P.get(
              K.key === null ? F : K.key
            ) || null, H(z, P, K, be);
          case L:
            var Fe = K._init;
            return K = Fe(K._payload), V(
              P,
              z,
              F,
              K,
              be
            );
        }
        if (_e(K) || $(K))
          return P = P.get(F) || null, Q(z, P, K, be, null);
        if (typeof K.then == "function")
          return V(
            P,
            z,
            F,
            Yo(K),
            be
          );
        if (K.$$typeof === D)
          return V(
            P,
            z,
            F,
            Ro(z, K),
            be
          );
        Xo(z, K);
      }
      return null;
    }
    function Te(P, z, F, K) {
      for (var be = null, Fe = null, Se = z, Ne = z = 0, Ft = null; Se !== null && Ne < F.length; Ne++) {
        Se.index > Ne ? (Ft = Se, Se = null) : Ft = Se.sibling;
        var Je = Z(
          P,
          Se,
          F[Ne],
          K
        );
        if (Je === null) {
          Se === null && (Se = Ft);
          break;
        }
        e && Se && Je.alternate === null && n(P, Se), z = v(Je, z, Ne), Fe === null ? be = Je : Fe.sibling = Je, Fe = Je, Se = Ft;
      }
      if (Ne === F.length)
        return i(P, Se), tt && va(P, Ne), be;
      if (Se === null) {
        for (; Ne < F.length; Ne++)
          Se = ee(P, F[Ne], K), Se !== null && (z = v(
            Se,
            z,
            Ne
          ), Fe === null ? be = Se : Fe.sibling = Se, Fe = Se);
        return tt && va(P, Ne), be;
      }
      for (Se = o(Se); Ne < F.length; Ne++)
        Ft = V(
          Se,
          P,
          Ne,
          F[Ne],
          K
        ), Ft !== null && (e && Ft.alternate !== null && Se.delete(
          Ft.key === null ? Ne : Ft.key
        ), z = v(
          Ft,
          z,
          Ne
        ), Fe === null ? be = Ft : Fe.sibling = Ft, Fe = Ft);
      return e && Se.forEach(function(ta) {
        return n(P, ta);
      }), tt && va(P, Ne), be;
    }
    function Ce(P, z, F, K) {
      if (F == null) throw Error(s(151));
      for (var be = null, Fe = null, Se = z, Ne = z = 0, Ft = null, Je = F.next(); Se !== null && !Je.done; Ne++, Je = F.next()) {
        Se.index > Ne ? (Ft = Se, Se = null) : Ft = Se.sibling;
        var ta = Z(P, Se, Je.value, K);
        if (ta === null) {
          Se === null && (Se = Ft);
          break;
        }
        e && Se && ta.alternate === null && n(P, Se), z = v(ta, z, Ne), Fe === null ? be = ta : Fe.sibling = ta, Fe = ta, Se = Ft;
      }
      if (Je.done)
        return i(P, Se), tt && va(P, Ne), be;
      if (Se === null) {
        for (; !Je.done; Ne++, Je = F.next())
          Je = ee(P, Je.value, K), Je !== null && (z = v(Je, z, Ne), Fe === null ? be = Je : Fe.sibling = Je, Fe = Je);
        return tt && va(P, Ne), be;
      }
      for (Se = o(Se); !Je.done; Ne++, Je = F.next())
        Je = V(Se, P, Ne, Je.value, K), Je !== null && (e && Je.alternate !== null && Se.delete(Je.key === null ? Ne : Je.key), z = v(Je, z, Ne), Fe === null ? be = Je : Fe.sibling = Je, Fe = Je);
      return e && Se.forEach(function(s2) {
        return n(P, s2);
      }), tt && va(P, Ne), be;
    }
    function lt(P, z, F, K) {
      if (typeof F == "object" && F !== null && F.type === h && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case b:
            e: {
              for (var be = F.key; z !== null; ) {
                if (z.key === be) {
                  if (be = F.type, be === h) {
                    if (z.tag === 7) {
                      i(
                        P,
                        z.sibling
                      ), K = c(
                        z,
                        F.props.children
                      ), K.return = P, P = K;
                      break e;
                    }
                  } else if (z.elementType === be || typeof be == "object" && be !== null && be.$$typeof === L && _m(be) === z.type) {
                    i(
                      P,
                      z.sibling
                    ), K = c(z, F.props), ys(K, F), K.return = P, P = K;
                    break e;
                  }
                  i(P, z);
                  break;
                } else n(P, z);
                z = z.sibling;
              }
              F.type === h ? (K = ma(
                F.props.children,
                P.mode,
                K,
                F.key
              ), K.return = P, P = K) : (K = Do(
                F.type,
                F.key,
                F.props,
                null,
                P.mode,
                K
              ), ys(K, F), K.return = P, P = K);
            }
            return A(P);
          case m:
            e: {
              for (be = F.key; z !== null; ) {
                if (z.key === be)
                  if (z.tag === 4 && z.stateNode.containerInfo === F.containerInfo && z.stateNode.implementation === F.implementation) {
                    i(
                      P,
                      z.sibling
                    ), K = c(z, F.children || []), K.return = P, P = K;
                    break e;
                  } else {
                    i(P, z);
                    break;
                  }
                else n(P, z);
                z = z.sibling;
              }
              K = vc(F, P.mode, K), K.return = P, P = K;
            }
            return A(P);
          case L:
            return be = F._init, F = be(F._payload), lt(
              P,
              z,
              F,
              K
            );
        }
        if (_e(F))
          return Te(
            P,
            z,
            F,
            K
          );
        if ($(F)) {
          if (be = $(F), typeof be != "function") throw Error(s(150));
          return F = be.call(F), Ce(
            P,
            z,
            F,
            K
          );
        }
        if (typeof F.then == "function")
          return lt(
            P,
            z,
            Yo(F),
            K
          );
        if (F.$$typeof === D)
          return lt(
            P,
            z,
            Ro(P, F),
            K
          );
        Xo(P, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint" ? (F = "" + F, z !== null && z.tag === 6 ? (i(P, z.sibling), K = c(z, F), K.return = P, P = K) : (i(P, z), K = gc(F, P.mode, K), K.return = P, P = K), A(P)) : i(P, z);
    }
    return function(P, z, F, K) {
      try {
        vs = 0;
        var be = lt(
          P,
          z,
          F,
          K
        );
        return hi = null, be;
      } catch (Se) {
        if (Se === ls || Se === Lo) throw Se;
        var Fe = _n(29, Se, null, P.mode);
        return Fe.lanes = K, Fe.return = P, Fe;
      } finally {
      }
    };
  }
  var pi = Sm(!0), xm = Sm(!1), Pn = J(null), rr = null;
  function Ur(e) {
    var n = e.alternate;
    se(zt, zt.current & 1), se(Pn, e), rr === null && (n === null || ui.current !== null || n.memoizedState !== null) && (rr = e);
  }
  function Em(e) {
    if (e.tag === 22) {
      if (se(zt, zt.current), se(Pn, e), rr === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (rr = e);
      }
    } else Fr();
  }
  function Fr() {
    se(zt, zt.current), se(Pn, Pn.current);
  }
  function yr(e) {
    ie(Pn), rr === e && (rr = null), ie(zt);
  }
  var zt = J(0);
  function $o(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Uf(i)))
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
  function Qc(e, n, i, o) {
    n = e.memoizedState, i = i(o, n), i = i == null ? n : y({}, n, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Kc = {
    enqueueSetState: function(e, n, i) {
      e = e._reactInternals;
      var o = wn(), c = Ir(o);
      c.payload = n, i != null && (c.callback = i), n = Pr(e, c, o), n !== null && (Cn(n, e, o), cs(n, e, o));
    },
    enqueueReplaceState: function(e, n, i) {
      e = e._reactInternals;
      var o = wn(), c = Ir(o);
      c.tag = 1, c.payload = n, i != null && (c.callback = i), n = Pr(e, c, o), n !== null && (Cn(n, e, o), cs(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var i = wn(), o = Ir(i);
      o.tag = 2, n != null && (o.callback = n), n = Pr(e, o, i), n !== null && (Cn(n, e, i), cs(n, e, i));
    }
  };
  function wm(e, n, i, o, c, v, A) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, v, A) : n.prototype && n.prototype.isPureReactComponent ? !es(i, o) || !es(c, v) : !0;
  }
  function Cm(e, n, i, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, o), n.state !== e && Kc.enqueueReplaceState(n, n.state, null);
  }
  function wa(e, n) {
    var i = n;
    if ("ref" in n) {
      i = {};
      for (var o in n)
        o !== "ref" && (i[o] = n[o]);
    }
    if (e = e.defaultProps) {
      i === n && (i = y({}, i));
      for (var c in e)
        i[c] === void 0 && (i[c] = e[c]);
    }
    return i;
  }
  var Qo = typeof reportError == "function" ? reportError : function(e) {
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
  function Am(e) {
    Qo(e);
  }
  function Nm(e) {
    console.error(e);
  }
  function Tm(e) {
    Qo(e);
  }
  function Ko(e, n) {
    try {
      var i = e.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Om(e, n, i) {
    try {
      var o = e.onCaughtError;
      o(i.value, {
        componentStack: i.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Jc(e, n, i) {
    return i = Ir(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      Ko(e, n);
    }, i;
  }
  function Dm(e) {
    return e = Ir(e), e.tag = 3, e;
  }
  function Mm(e, n, i, o) {
    var c = i.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var v = o.value;
      e.payload = function() {
        return c(v);
      }, e.callback = function() {
        Om(n, i, o);
      };
    }
    var A = i.stateNode;
    A !== null && typeof A.componentDidCatch == "function" && (e.callback = function() {
      Om(n, i, o), typeof c != "function" && (Yr === null ? Yr = /* @__PURE__ */ new Set([this]) : Yr.add(this));
      var O = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: O !== null ? O : ""
      });
    });
  }
  function s_(e, n, i, o, c) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = i.alternate, n !== null && is(
        n,
        i,
        c,
        !0
      ), i = Pn.current, i !== null) {
        switch (i.tag) {
          case 13:
            return rr === null ? Ef() : i.alternate === null && Et === 0 && (Et = 3), i.flags &= -257, i.flags |= 65536, i.lanes = c, o === Nc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Cf(e, o, c)), !1;
          case 22:
            return i.flags |= 65536, o === Nc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), Cf(e, o, c)), !1;
        }
        throw Error(s(435, i.tag));
      }
      return Cf(e, o, c), Ef(), !1;
    }
    if (tt)
      return n = Pn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, o !== _c && (e = Error(s(422), { cause: o }), as(Rn(e, i)))) : (o !== _c && (n = Error(s(423), {
        cause: o
      }), as(
        Rn(n, i)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = Rn(o, i), c = Jc(
        e.stateNode,
        o,
        c
      ), Dc(e, c), Et !== 4 && (Et = 2)), !1;
    var v = Error(s(520), { cause: o });
    if (v = Rn(v, i), Cs === null ? Cs = [v] : Cs.push(v), Et !== 4 && (Et = 2), n === null) return !0;
    o = Rn(o, i), i = n;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = c & -c, i.lanes |= e, e = Jc(i.stateNode, o, e), Dc(i, e), !1;
        case 1:
          if (n = i.type, v = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Yr === null || !Yr.has(v))))
            return i.flags |= 65536, c &= -c, i.lanes |= c, c = Dm(c), Mm(
              c,
              e,
              i,
              o
            ), Dc(i, c), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var km = Error(s(461)), Bt = !1;
  function qt(e, n, i, o) {
    n.child = e === null ? xm(n, null, i, o) : pi(
      n,
      e.child,
      i,
      o
    );
  }
  function jm(e, n, i, o, c) {
    i = i.render;
    var v = n.ref;
    if ("ref" in o) {
      var A = {};
      for (var O in o)
        O !== "ref" && (A[O] = o[O]);
    } else A = o;
    return Sa(n), o = zc(
      e,
      n,
      i,
      A,
      v,
      c
    ), O = Lc(), e !== null && !Bt ? (Ic(e, n, c), br(e, n, c)) : (tt && O && yc(n), n.flags |= 1, qt(e, n, o, c), n.child);
  }
  function Rm(e, n, i, o, c) {
    if (e === null) {
      var v = i.type;
      return typeof v == "function" && !mc(v) && v.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = v, zm(
        e,
        n,
        v,
        o,
        c
      )) : (e = Do(
        i.type,
        null,
        o,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (v = e.child, !of(e, c)) {
      var A = v.memoizedProps;
      if (i = i.compare, i = i !== null ? i : es, i(A, o) && e.ref === n.ref)
        return br(e, n, c);
    }
    return n.flags |= 1, e = dr(v, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function zm(e, n, i, o, c) {
    if (e !== null) {
      var v = e.memoizedProps;
      if (es(v, o) && e.ref === n.ref)
        if (Bt = !1, n.pendingProps = o = v, of(e, c))
          (e.flags & 131072) !== 0 && (Bt = !0);
        else
          return n.lanes = e.lanes, br(e, n, c);
    }
    return Wc(
      e,
      n,
      i,
      o,
      c
    );
  }
  function Lm(e, n, i) {
    var o = n.pendingProps, c = o.children, v = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = v !== null ? v.baseLanes | i : i, e !== null) {
          for (c = n.child = e.child, v = 0; c !== null; )
            v = v | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = v & ~o;
        } else n.childLanes = 0, n.child = null;
        return Im(
          e,
          n,
          o,
          i
        );
      }
      if ((i & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && zo(
          n,
          v !== null ? v.cachePool : null
        ), v !== null ? zp(n, v) : kc(), Em(n);
      else
        return n.lanes = n.childLanes = 536870912, Im(
          e,
          n,
          v !== null ? v.baseLanes | i : i,
          i
        );
    } else
      v !== null ? (zo(n, v.cachePool), zp(n, v), Fr(), n.memoizedState = null) : (e !== null && zo(n, null), kc(), Fr());
    return qt(e, n, c, i), n.child;
  }
  function Im(e, n, i, o) {
    var c = Ac();
    return c = c === null ? null : { parent: Rt._currentValue, pool: c }, n.memoizedState = {
      baseLanes: i,
      cachePool: c
    }, e !== null && zo(n, null), kc(), Em(n), e !== null && is(e, n, o, !0), null;
  }
  function Jo(e, n) {
    var i = n.ref;
    if (i === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(s(284));
      (e === null || e.ref !== i) && (n.flags |= 4194816);
    }
  }
  function Wc(e, n, i, o, c) {
    return Sa(n), i = zc(
      e,
      n,
      i,
      o,
      void 0,
      c
    ), o = Lc(), e !== null && !Bt ? (Ic(e, n, c), br(e, n, c)) : (tt && o && yc(n), n.flags |= 1, qt(e, n, i, c), n.child);
  }
  function Pm(e, n, i, o, c, v) {
    return Sa(n), n.updateQueue = null, i = Ip(
      n,
      o,
      i,
      c
    ), Lp(e), o = Lc(), e !== null && !Bt ? (Ic(e, n, v), br(e, n, v)) : (tt && o && yc(n), n.flags |= 1, qt(e, n, i, v), n.child);
  }
  function Bm(e, n, i, o, c) {
    if (Sa(n), n.stateNode === null) {
      var v = ai, A = i.contextType;
      typeof A == "object" && A !== null && (v = $t(A)), v = new i(o, v), n.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, v.updater = Kc, n.stateNode = v, v._reactInternals = n, v = n.stateNode, v.props = o, v.state = n.memoizedState, v.refs = {}, Tc(n), A = i.contextType, v.context = typeof A == "object" && A !== null ? $t(A) : ai, v.state = n.memoizedState, A = i.getDerivedStateFromProps, typeof A == "function" && (Qc(
        n,
        i,
        A,
        o
      ), v.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (A = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), A !== v.state && Kc.enqueueReplaceState(v, v.state, null), ds(n, o, v, c), fs(), v.state = n.memoizedState), typeof v.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      v = n.stateNode;
      var O = n.memoizedProps, k = wa(i, O);
      v.props = k;
      var H = v.context, Q = i.contextType;
      A = ai, typeof Q == "object" && Q !== null && (A = $t(Q));
      var ee = i.getDerivedStateFromProps;
      Q = typeof ee == "function" || typeof v.getSnapshotBeforeUpdate == "function", O = n.pendingProps !== O, Q || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (O || H !== A) && Cm(
        n,
        v,
        o,
        A
      ), Lr = !1;
      var Z = n.memoizedState;
      v.state = Z, ds(n, o, v, c), fs(), H = n.memoizedState, O || Z !== H || Lr ? (typeof ee == "function" && (Qc(
        n,
        i,
        ee,
        o
      ), H = n.memoizedState), (k = Lr || wm(
        n,
        i,
        k,
        o,
        Z,
        H,
        A
      )) ? (Q || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = H), v.props = o, v.state = H, v.context = A, o = k) : (typeof v.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      v = n.stateNode, Oc(e, n), A = n.memoizedProps, Q = wa(i, A), v.props = Q, ee = n.pendingProps, Z = v.context, H = i.contextType, k = ai, typeof H == "object" && H !== null && (k = $t(H)), O = i.getDerivedStateFromProps, (H = typeof O == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (A !== ee || Z !== k) && Cm(
        n,
        v,
        o,
        k
      ), Lr = !1, Z = n.memoizedState, v.state = Z, ds(n, o, v, c), fs();
      var V = n.memoizedState;
      A !== ee || Z !== V || Lr || e !== null && e.dependencies !== null && jo(e.dependencies) ? (typeof O == "function" && (Qc(
        n,
        i,
        O,
        o
      ), V = n.memoizedState), (Q = Lr || wm(
        n,
        i,
        Q,
        o,
        Z,
        V,
        k
      ) || e !== null && e.dependencies !== null && jo(e.dependencies)) ? (H || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(o, V, k), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(
        o,
        V,
        k
      )), typeof v.componentDidUpdate == "function" && (n.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || A === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = V), v.props = o, v.state = V, v.context = k, o = Q) : (typeof v.componentDidUpdate != "function" || A === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return v = o, Jo(e, n), o = (n.flags & 128) !== 0, v || o ? (v = n.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : v.render(), n.flags |= 1, e !== null && o ? (n.child = pi(
      n,
      e.child,
      null,
      c
    ), n.child = pi(
      n,
      null,
      i,
      c
    )) : qt(e, n, i, c), n.memoizedState = v.state, e = n.child) : e = br(
      e,
      n,
      c
    ), e;
  }
  function Um(e, n, i, o) {
    return rs(), n.flags |= 256, qt(e, n, i, o), n.child;
  }
  var ef = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function tf(e) {
    return { baseLanes: e, cachePool: Np() };
  }
  function nf(e, n, i) {
    return e = e !== null ? e.childLanes & ~i : 0, n && (e |= Bn), e;
  }
  function Fm(e, n, i) {
    var o = n.pendingProps, c = !1, v = (n.flags & 128) !== 0, A;
    if ((A = v) || (A = e !== null && e.memoizedState === null ? !1 : (zt.current & 2) !== 0), A && (c = !0, n.flags &= -129), A = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (tt) {
        if (c ? Ur(n) : Fr(), tt) {
          var O = xt, k;
          if (k = O) {
            e: {
              for (k = O, O = nr; k.nodeType !== 8; ) {
                if (!O) {
                  O = null;
                  break e;
                }
                if (k = Xn(
                  k.nextSibling
                ), k === null) {
                  O = null;
                  break e;
                }
              }
              O = k;
            }
            O !== null ? (n.memoizedState = {
              dehydrated: O,
              treeContext: ga !== null ? { id: hr, overflow: pr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, k = _n(
              18,
              null,
              null,
              0
            ), k.stateNode = O, k.return = n, n.child = k, nn = n, xt = null, k = !0) : k = !1;
          }
          k || ba(n);
        }
        if (O = n.memoizedState, O !== null && (O = O.dehydrated, O !== null))
          return Uf(O) ? n.lanes = 32 : n.lanes = 536870912, null;
        yr(n);
      }
      return O = o.children, o = o.fallback, c ? (Fr(), c = n.mode, O = Wo(
        { mode: "hidden", children: O },
        c
      ), o = ma(
        o,
        c,
        i,
        null
      ), O.return = n, o.return = n, O.sibling = o, n.child = O, c = n.child, c.memoizedState = tf(i), c.childLanes = nf(
        e,
        A,
        i
      ), n.memoizedState = ef, o) : (Ur(n), rf(n, O));
    }
    if (k = e.memoizedState, k !== null && (O = k.dehydrated, O !== null)) {
      if (v)
        n.flags & 256 ? (Ur(n), n.flags &= -257, n = af(
          e,
          n,
          i
        )) : n.memoizedState !== null ? (Fr(), n.child = e.child, n.flags |= 128, n = null) : (Fr(), c = o.fallback, O = n.mode, o = Wo(
          { mode: "visible", children: o.children },
          O
        ), c = ma(
          c,
          O,
          i,
          null
        ), c.flags |= 2, o.return = n, c.return = n, o.sibling = c, n.child = o, pi(
          n,
          e.child,
          null,
          i
        ), o = n.child, o.memoizedState = tf(i), o.childLanes = nf(
          e,
          A,
          i
        ), n.memoizedState = ef, n = c);
      else if (Ur(n), Uf(O)) {
        if (A = O.nextSibling && O.nextSibling.dataset, A) var H = A.dgst;
        A = H, o = Error(s(419)), o.stack = "", o.digest = A, as({ value: o, source: null, stack: null }), n = af(
          e,
          n,
          i
        );
      } else if (Bt || is(e, n, i, !1), A = (i & e.childLanes) !== 0, Bt || A) {
        if (A = dt, A !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : Uu(o), o = (o & (A.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== k.retryLane))
          throw k.retryLane = o, ri(e, o), Cn(A, e, o), km;
        O.data === "$?" || Ef(), n = af(
          e,
          n,
          i
        );
      } else
        O.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = k.treeContext, xt = Xn(
          O.nextSibling
        ), nn = n, tt = !0, ya = null, nr = !1, e !== null && (Ln[In++] = hr, Ln[In++] = pr, Ln[In++] = ga, hr = e.id, pr = e.overflow, ga = n), n = rf(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (Fr(), c = o.fallback, O = n.mode, k = e.child, H = k.sibling, o = dr(k, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = k.subtreeFlags & 65011712, H !== null ? c = dr(H, c) : (c = ma(
      c,
      O,
      i,
      null
    ), c.flags |= 2), c.return = n, o.return = n, o.sibling = c, n.child = o, o = c, c = n.child, O = e.child.memoizedState, O === null ? O = tf(i) : (k = O.cachePool, k !== null ? (H = Rt._currentValue, k = k.parent !== H ? { parent: H, pool: H } : k) : k = Np(), O = {
      baseLanes: O.baseLanes | i,
      cachePool: k
    }), c.memoizedState = O, c.childLanes = nf(
      e,
      A,
      i
    ), n.memoizedState = ef, o) : (Ur(n), i = e.child, e = i.sibling, i = dr(i, {
      mode: "visible",
      children: o.children
    }), i.return = n, i.sibling = null, e !== null && (A = n.deletions, A === null ? (n.deletions = [e], n.flags |= 16) : A.push(e)), n.child = i, n.memoizedState = null, i);
  }
  function rf(e, n) {
    return n = Wo(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Wo(e, n) {
    return e = _n(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function af(e, n, i) {
    return pi(n, e.child, null, i), e = rf(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Hm(e, n, i) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), xc(e.return, n, i);
  }
  function sf(e, n, i, o, c) {
    var v = e.memoizedState;
    v === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: c
    } : (v.isBackwards = n, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = i, v.tailMode = c);
  }
  function qm(e, n, i) {
    var o = n.pendingProps, c = o.revealOrder, v = o.tail;
    if (qt(e, n, o.children, i), o = zt.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Hm(e, i, n);
          else if (e.tag === 19)
            Hm(e, i, n);
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
      o &= 1;
    }
    switch (se(zt, o), c) {
      case "forwards":
        for (i = n.child, c = null; i !== null; )
          e = i.alternate, e !== null && $o(e) === null && (c = i), i = i.sibling;
        i = c, i === null ? (c = n.child, n.child = null) : (c = i.sibling, i.sibling = null), sf(
          n,
          !1,
          c,
          i,
          v
        );
        break;
      case "backwards":
        for (i = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && $o(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = i, i = c, c = e;
        }
        sf(
          n,
          !0,
          i,
          null,
          v
        );
        break;
      case "together":
        sf(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function br(e, n, i) {
    if (e !== null && (n.dependencies = e.dependencies), Vr |= n.lanes, (i & n.childLanes) === 0)
      if (e !== null) {
        if (is(
          e,
          n,
          i,
          !1
        ), (i & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(s(153));
    if (n.child !== null) {
      for (e = n.child, i = dr(e, e.pendingProps), n.child = i, i.return = n; e.sibling !== null; )
        e = e.sibling, i = i.sibling = dr(e, e.pendingProps), i.return = n;
      i.sibling = null;
    }
    return n.child;
  }
  function of(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && jo(e)));
  }
  function o_(e, n, i) {
    switch (n.tag) {
      case 3:
        Ee(n, n.stateNode.containerInfo), zr(n, Rt, e.memoizedState.cache), rs();
        break;
      case 27:
      case 5:
        We(n);
        break;
      case 4:
        Ee(n, n.stateNode.containerInfo);
        break;
      case 10:
        zr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Ur(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Fm(e, n, i) : (Ur(n), e = br(
            e,
            n,
            i
          ), e !== null ? e.sibling : null);
        Ur(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (o = (i & n.childLanes) !== 0, o || (is(
          e,
          n,
          i,
          !1
        ), o = (i & n.childLanes) !== 0), c) {
          if (o)
            return qm(
              e,
              n,
              i
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), se(zt, zt.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Lm(e, n, i);
      case 24:
        zr(n, Rt, e.memoizedState.cache);
    }
    return br(e, n, i);
  }
  function Zm(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Bt = !0;
      else {
        if (!of(e, i) && (n.flags & 128) === 0)
          return Bt = !1, o_(
            e,
            n,
            i
          );
        Bt = (e.flags & 131072) !== 0;
      }
    else
      Bt = !1, tt && (n.flags & 1048576) !== 0 && _p(n, ko, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, c = o._init;
          if (o = c(o._payload), n.type = o, typeof o == "function")
            mc(o) ? (e = wa(o, e), n.tag = 1, n = Bm(
              null,
              n,
              o,
              e,
              i
            )) : (n.tag = 0, n = Wc(
              null,
              n,
              o,
              e,
              i
            ));
          else {
            if (o != null) {
              if (c = o.$$typeof, c === E) {
                n.tag = 11, n = jm(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              } else if (c === j) {
                n.tag = 14, n = Rm(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              }
            }
            throw n = de(o) || o, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return Wc(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 1:
        return o = n.type, c = wa(
          o,
          n.pendingProps
        ), Bm(
          e,
          n,
          o,
          c,
          i
        );
      case 3:
        e: {
          if (Ee(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          o = n.pendingProps;
          var v = n.memoizedState;
          c = v.element, Oc(e, n), ds(n, o, null, i);
          var A = n.memoizedState;
          if (o = A.cache, zr(n, Rt, o), o !== v.cache && Ec(
            n,
            [Rt],
            i,
            !0
          ), fs(), o = A.element, v.isDehydrated)
            if (v = {
              element: o,
              isDehydrated: !1,
              cache: A.cache
            }, n.updateQueue.baseState = v, n.memoizedState = v, n.flags & 256) {
              n = Um(
                e,
                n,
                o,
                i
              );
              break e;
            } else if (o !== c) {
              c = Rn(
                Error(s(424)),
                n
              ), as(c), n = Um(
                e,
                n,
                o,
                i
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
              for (xt = Xn(e.firstChild), nn = n, tt = !0, ya = null, nr = !0, i = xm(
                n,
                null,
                o,
                i
              ), n.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
            }
          else {
            if (rs(), o === c) {
              n = br(
                e,
                n,
                i
              );
              break e;
            }
            qt(
              e,
              n,
              o,
              i
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Jo(e, n), e === null ? (i = Xg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = i : tt || (i = n.type, e = n.pendingProps, o = hl(
          X.current
        ).createElement(i), o[Xt] = n, o[ln] = e, Gt(o, i, e), Pt(o), n.stateNode = o) : n.memoizedState = Xg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return We(n), e === null && tt && (o = n.stateNode = Gg(
          n.type,
          n.pendingProps,
          X.current
        ), nn = n, nr = !0, c = xt, Qr(n.type) ? (Ff = c, xt = Xn(
          o.firstChild
        )) : xt = c), qt(
          e,
          n,
          n.pendingProps.children,
          i
        ), Jo(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && tt && ((c = o = xt) && (o = z_(
          o,
          n.type,
          n.pendingProps,
          nr
        ), o !== null ? (n.stateNode = o, nn = n, xt = Xn(
          o.firstChild
        ), nr = !1, c = !0) : c = !1), c || ba(n)), We(n), c = n.type, v = n.pendingProps, A = e !== null ? e.memoizedProps : null, o = v.children, If(c, v) ? o = null : A !== null && If(c, A) && (n.flags |= 32), n.memoizedState !== null && (c = zc(
          e,
          n,
          Wb,
          null,
          null,
          i
        ), Rs._currentValue = c), Jo(e, n), qt(e, n, o, i), n.child;
      case 6:
        return e === null && tt && ((e = i = xt) && (i = L_(
          i,
          n.pendingProps,
          nr
        ), i !== null ? (n.stateNode = i, nn = n, xt = null, e = !0) : e = !1), e || ba(n)), null;
      case 13:
        return Fm(e, n, i);
      case 4:
        return Ee(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = pi(
          n,
          null,
          o,
          i
        ) : qt(
          e,
          n,
          o,
          i
        ), n.child;
      case 11:
        return jm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 7:
        return qt(
          e,
          n,
          n.pendingProps,
          i
        ), n.child;
      case 8:
        return qt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 12:
        return qt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 10:
        return o = n.pendingProps, zr(n, n.type, o.value), qt(
          e,
          n,
          o.children,
          i
        ), n.child;
      case 9:
        return c = n.type._context, o = n.pendingProps.children, Sa(n), c = $t(c), o = o(c), n.flags |= 1, qt(e, n, o, i), n.child;
      case 14:
        return Rm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 15:
        return zm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 19:
        return qm(e, n, i);
      case 31:
        return o = n.pendingProps, i = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (i = Wo(
          o,
          i
        ), i.ref = n.ref, n.child = i, i.return = n, n = i) : (i = dr(e.child, o), i.ref = n.ref, n.child = i, i.return = n, n = i), n;
      case 22:
        return Lm(e, n, i);
      case 24:
        return Sa(n), o = $t(Rt), e === null ? (c = Ac(), c === null && (c = dt, v = wc(), c.pooledCache = v, v.refCount++, v !== null && (c.pooledCacheLanes |= i), c = v), n.memoizedState = {
          parent: o,
          cache: c
        }, Tc(n), zr(n, Rt, c)) : ((e.lanes & i) !== 0 && (Oc(e, n), ds(n, null, null, i), fs()), c = e.memoizedState, v = n.memoizedState, c.parent !== o ? (c = { parent: o, cache: o }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), zr(n, Rt, o)) : (o = v.cache, zr(n, Rt, o), o !== c.cache && Ec(
          n,
          [Rt],
          i,
          !0
        ))), qt(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(s(156, n.tag));
  }
  function _r(e) {
    e.flags |= 4;
  }
  function Gm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Wg(n)) {
      if (n = Pn.current, n !== null && (($e & 4194048) === $e ? rr !== null : ($e & 62914560) !== $e && ($e & 536870912) === 0 || n !== rr))
        throw us = Nc, Tp;
      e.flags |= 8192;
    }
  }
  function el(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Eh() : 536870912, e.lanes |= n, yi |= n);
  }
  function bs(e, n) {
    if (!tt)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = e.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), i = i.sibling;
          o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function yt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, i = 0, o = 0;
    if (n)
      for (var c = e.child; c !== null; )
        i |= c.lanes | c.childLanes, o |= c.subtreeFlags & 65011712, o |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        i |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= o, e.childLanes = i, n;
  }
  function l_(e, n, i) {
    var o = n.pendingProps;
    switch (bc(n), n.tag) {
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
        return yt(n), null;
      case 1:
        return yt(n), null;
      case 3:
        return i = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), gr(Rt), Ye(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (ns(n) ? _r(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Ep())), yt(n), null;
      case 26:
        return i = n.memoizedState, e === null ? (_r(n), i !== null ? (yt(n), Gm(n, i)) : (yt(n), n.flags &= -16777217)) : i ? i !== e.memoizedState ? (_r(n), yt(n), Gm(n, i)) : (yt(n), n.flags &= -16777217) : (e.memoizedProps !== o && _r(n), yt(n), n.flags &= -16777217), null;
      case 27:
        ke(n), i = X.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && _r(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return yt(n), null;
          }
          e = le.current, ns(n) ? Sp(n) : (e = Gg(c, o, i), n.stateNode = e, _r(n));
        }
        return yt(n), null;
      case 5:
        if (ke(n), i = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && _r(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return yt(n), null;
          }
          if (e = le.current, ns(n))
            Sp(n);
          else {
            switch (c = hl(
              X.current
            ), e) {
              case 1:
                e = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                e = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    e = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    e = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? c.createElement("select", { is: o.is }) : c.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? c.createElement(i, { is: o.is }) : c.createElement(i);
                }
            }
            e[Xt] = n, e[ln] = o;
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
            e: switch (Gt(e, i, o), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && _r(n);
          }
        }
        return yt(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== o && _r(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = X.current, ns(n)) {
            if (e = n.stateNode, i = n.memoizedProps, o = null, c = nn, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            e[Xt] = n, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || Pg(e.nodeValue, i)), e || ba(n);
          } else
            e = hl(e).createTextNode(
              o
            ), e[Xt] = n, n.stateNode = e;
        }
        return yt(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = ns(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[Xt] = n;
            } else
              rs(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            yt(n), c = !1;
          } else
            c = Ep(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (yr(n), n) : (yr(n), null);
        }
        if (yr(n), (n.flags & 128) !== 0)
          return n.lanes = i, n;
        if (i = o !== null, e = e !== null && e.memoizedState !== null, i) {
          o = n.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool);
          var v = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (v = o.memoizedState.cachePool.pool), v !== c && (o.flags |= 2048);
        }
        return i !== e && i && (n.child.flags |= 8192), el(n, n.updateQueue), yt(n), null;
      case 4:
        return Ye(), e === null && kf(n.stateNode.containerInfo), yt(n), null;
      case 10:
        return gr(n.type), yt(n), null;
      case 19:
        if (ie(zt), c = n.memoizedState, c === null) return yt(n), null;
        if (o = (n.flags & 128) !== 0, v = c.rendering, v === null)
          if (o) bs(c, !1);
          else {
            if (Et !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (v = $o(e), v !== null) {
                  for (n.flags |= 128, bs(c, !1), e = v.updateQueue, n.updateQueue = e, el(n, e), n.subtreeFlags = 0, e = i, i = n.child; i !== null; )
                    bp(i, e), i = i.sibling;
                  return se(
                    zt,
                    zt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && re() > rl && (n.flags |= 128, o = !0, bs(c, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = $o(v), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, el(n, e), bs(c, !0), c.tail === null && c.tailMode === "hidden" && !v.alternate && !tt)
                return yt(n), null;
            } else
              2 * re() - c.renderingStartTime > rl && i !== 536870912 && (n.flags |= 128, o = !0, bs(c, !1), n.lanes = 4194304);
          c.isBackwards ? (v.sibling = n.child, n.child = v) : (e = c.last, e !== null ? e.sibling = v : n.child = v, c.last = v);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = re(), n.sibling = null, e = zt.current, se(zt, o ? e & 1 | 2 : e & 1), n) : (yt(n), null);
      case 22:
      case 23:
        return yr(n), jc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (yt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : yt(n), i = n.updateQueue, i !== null && el(n, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== i && (n.flags |= 2048), e !== null && ie(xa), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), gr(Rt), yt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function u_(e, n) {
    switch (bc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return gr(Rt), Ye(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ke(n), null;
      case 13:
        if (yr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          rs();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ie(zt), null;
      case 4:
        return Ye(), null;
      case 10:
        return gr(n.type), null;
      case 22:
      case 23:
        return yr(n), jc(), e !== null && ie(xa), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return gr(Rt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vm(e, n) {
    switch (bc(n), n.tag) {
      case 3:
        gr(Rt), Ye();
        break;
      case 26:
      case 27:
      case 5:
        ke(n);
        break;
      case 4:
        Ye();
        break;
      case 13:
        yr(n);
        break;
      case 19:
        ie(zt);
        break;
      case 10:
        gr(n.type);
        break;
      case 22:
      case 23:
        yr(n), jc(), e !== null && ie(xa);
        break;
      case 24:
        gr(Rt);
    }
  }
  function _s(e, n) {
    try {
      var i = n.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        i = c;
        do {
          if ((i.tag & e) === e) {
            o = void 0;
            var v = i.create, A = i.inst;
            o = v(), A.destroy = o;
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (O) {
      ft(n, n.return, O);
    }
  }
  function Hr(e, n, i) {
    try {
      var o = n.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var v = c.next;
        o = v;
        do {
          if ((o.tag & e) === e) {
            var A = o.inst, O = A.destroy;
            if (O !== void 0) {
              A.destroy = void 0, c = n;
              var k = i, H = O;
              try {
                H();
              } catch (Q) {
                ft(
                  c,
                  k,
                  Q
                );
              }
            }
          }
          o = o.next;
        } while (o !== v);
      }
    } catch (Q) {
      ft(n, n.return, Q);
    }
  }
  function Ym(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        Rp(n, i);
      } catch (o) {
        ft(e, e.return, o);
      }
    }
  }
  function Xm(e, n, i) {
    i.props = wa(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      ft(e, n, o);
    }
  }
  function Ss(e, n) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof i == "function" ? e.refCleanup = i(o) : i.current = o;
      }
    } catch (c) {
      ft(e, n, c);
    }
  }
  function ar(e, n) {
    var i = e.ref, o = e.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          ft(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (c) {
          ft(e, n, c);
        }
      else i.current = null;
  }
  function $m(e) {
    var n = e.type, i = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? o.src = i.src : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (c) {
      ft(e, e.return, c);
    }
  }
  function lf(e, n, i) {
    try {
      var o = e.stateNode;
      D_(o, e.type, i, n), o[ln] = n;
    } catch (c) {
      ft(e, e.return, c);
    }
  }
  function Qm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Qr(e.type) || e.tag === 4;
  }
  function uf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Qr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function cf(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(e), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = dl));
    else if (o !== 4 && (o === 27 && Qr(e.type) && (i = e.stateNode, n = null), e = e.child, e !== null))
      for (cf(e, n, i), e = e.sibling; e !== null; )
        cf(e, n, i), e = e.sibling;
  }
  function tl(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Qr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (tl(e, n, i), e = e.sibling; e !== null; )
        tl(e, n, i), e = e.sibling;
  }
  function Km(e) {
    var n = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Gt(n, o, i), n[Xt] = e, n[ln] = i;
    } catch (v) {
      ft(e, e.return, v);
    }
  }
  var Sr = !1, At = !1, ff = !1, Jm = typeof WeakSet == "function" ? WeakSet : Set, Ut = null;
  function c_(e, n) {
    if (e = e.containerInfo, zf = bl, e = up(e), lc(e)) {
      if ("selectionStart" in e)
        var i = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          i = (i = e.ownerDocument) && i.defaultView || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var c = o.anchorOffset, v = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, v.nodeType;
            } catch {
              i = null;
              break e;
            }
            var A = 0, O = -1, k = -1, H = 0, Q = 0, ee = e, Z = null;
            t: for (; ; ) {
              for (var V; ee !== i || c !== 0 && ee.nodeType !== 3 || (O = A + c), ee !== v || o !== 0 && ee.nodeType !== 3 || (k = A + o), ee.nodeType === 3 && (A += ee.nodeValue.length), (V = ee.firstChild) !== null; )
                Z = ee, ee = V;
              for (; ; ) {
                if (ee === e) break t;
                if (Z === i && ++H === c && (O = A), Z === v && ++Q === o && (k = A), (V = ee.nextSibling) !== null) break;
                ee = Z, Z = ee.parentNode;
              }
              ee = V;
            }
            i = O === -1 || k === -1 ? null : { start: O, end: k };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Lf = { focusedElem: e, selectionRange: i }, bl = !1, Ut = n; Ut !== null; )
      if (n = Ut, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, Ut = e;
      else
        for (; Ut !== null; ) {
          switch (n = Ut, v = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && v !== null) {
                e = void 0, i = n, c = v.memoizedProps, v = v.memoizedState, o = i.stateNode;
                try {
                  var Te = wa(
                    i.type,
                    c,
                    i.elementType === i.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Te,
                    v
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Ce) {
                  ft(
                    i,
                    i.return,
                    Ce
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, i = e.nodeType, i === 9)
                  Bf(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Bf(e);
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
            e.return = n.return, Ut = e;
            break;
          }
          Ut = n.return;
        }
  }
  function Wm(e, n, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        qr(e, i), o & 4 && _s(5, i);
        break;
      case 1:
        if (qr(e, i), o & 4)
          if (e = i.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (A) {
              ft(i, i.return, A);
            }
          else {
            var c = wa(
              i.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                c,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (A) {
              ft(
                i,
                i.return,
                A
              );
            }
          }
        o & 64 && Ym(i), o & 512 && Ss(i, i.return);
        break;
      case 3:
        if (qr(e, i), o & 64 && (e = i.updateQueue, e !== null)) {
          if (n = null, i.child !== null)
            switch (i.child.tag) {
              case 27:
              case 5:
                n = i.child.stateNode;
                break;
              case 1:
                n = i.child.stateNode;
            }
          try {
            Rp(e, n);
          } catch (A) {
            ft(i, i.return, A);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Km(i);
      case 26:
      case 5:
        qr(e, i), n === null && o & 4 && $m(i), o & 512 && Ss(i, i.return);
        break;
      case 12:
        qr(e, i);
        break;
      case 13:
        qr(e, i), o & 4 && ng(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = b_.bind(
          null,
          i
        ), I_(e, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || Sr, !o) {
          n = n !== null && n.memoizedState !== null || At, c = Sr;
          var v = At;
          Sr = o, (At = n) && !v ? Zr(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : qr(e, i), Sr = c, At = v;
        }
        break;
      case 30:
        break;
      default:
        qr(e, i);
    }
  }
  function eg(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, eg(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && qu(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var mt = null, fn = !1;
  function xr(e, n, i) {
    for (i = i.child; i !== null; )
      tg(e, n, i), i = i.sibling;
  }
  function tg(e, n, i) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(ut, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        At || ar(i, n), xr(
          e,
          n,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        At || ar(i, n);
        var o = mt, c = fn;
        Qr(i.type) && (mt = i.stateNode, fn = !1), xr(
          e,
          n,
          i
        ), Ds(i.stateNode), mt = o, fn = c;
        break;
      case 5:
        At || ar(i, n);
      case 6:
        if (o = mt, c = fn, mt = null, xr(
          e,
          n,
          i
        ), mt = o, fn = c, mt !== null)
          if (fn)
            try {
              (mt.nodeType === 9 ? mt.body : mt.nodeName === "HTML" ? mt.ownerDocument.body : mt).removeChild(i.stateNode);
            } catch (v) {
              ft(
                i,
                n,
                v
              );
            }
          else
            try {
              mt.removeChild(i.stateNode);
            } catch (v) {
              ft(
                i,
                n,
                v
              );
            }
        break;
      case 18:
        mt !== null && (fn ? (e = mt, qg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), Ps(e)) : qg(mt, i.stateNode));
        break;
      case 4:
        o = mt, c = fn, mt = i.stateNode.containerInfo, fn = !0, xr(
          e,
          n,
          i
        ), mt = o, fn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        At || Hr(2, i, n), At || Hr(4, i, n), xr(
          e,
          n,
          i
        );
        break;
      case 1:
        At || (ar(i, n), o = i.stateNode, typeof o.componentWillUnmount == "function" && Xm(
          i,
          n,
          o
        )), xr(
          e,
          n,
          i
        );
        break;
      case 21:
        xr(
          e,
          n,
          i
        );
        break;
      case 22:
        At = (o = At) || i.memoizedState !== null, xr(
          e,
          n,
          i
        ), At = o;
        break;
      default:
        xr(
          e,
          n,
          i
        );
    }
  }
  function ng(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ps(e);
      } catch (i) {
        ft(n, n.return, i);
      }
  }
  function f_(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Jm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Jm()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function df(e, n) {
    var i = f_(e);
    n.forEach(function(o) {
      var c = __.bind(null, e, o);
      i.has(o) || (i.add(o), o.then(c, c));
    });
  }
  function Sn(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var c = i[o], v = e, A = n, O = A;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (Qr(O.type)) {
                mt = O.stateNode, fn = !1;
                break e;
              }
              break;
            case 5:
              mt = O.stateNode, fn = !1;
              break e;
            case 3:
            case 4:
              mt = O.stateNode.containerInfo, fn = !0;
              break e;
          }
          O = O.return;
        }
        if (mt === null) throw Error(s(160));
        tg(v, A, c), mt = null, fn = !1, v = c.alternate, v !== null && (v.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        rg(n, e), n = n.sibling;
  }
  var Yn = null;
  function rg(e, n) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Sn(n, e), xn(e), o & 4 && (Hr(3, e, e.return), _s(3, e), Hr(5, e, e.return));
        break;
      case 1:
        Sn(n, e), xn(e), o & 512 && (At || i === null || ar(i, i.return)), o & 64 && Sr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var c = Yn;
        if (Sn(n, e), xn(e), o & 512 && (At || i === null || ar(i, i.return)), o & 4) {
          var v = i !== null ? i.memoizedState : null;
          if (o = e.memoizedState, i === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, i = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (o) {
                    case "title":
                      v = c.getElementsByTagName("title")[0], (!v || v[Gi] || v[Xt] || v.namespaceURI === "http://www.w3.org/2000/svg" || v.hasAttribute("itemprop")) && (v = c.createElement(o), c.head.insertBefore(
                        v,
                        c.querySelector("head > title")
                      )), Gt(v, o, i), v[Xt] = e, Pt(v), o = v;
                      break e;
                    case "link":
                      var A = Kg(
                        "link",
                        "href",
                        c
                      ).get(o + (i.href || ""));
                      if (A) {
                        for (var O = 0; O < A.length; O++)
                          if (v = A[O], v.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && v.getAttribute("rel") === (i.rel == null ? null : i.rel) && v.getAttribute("title") === (i.title == null ? null : i.title) && v.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            A.splice(O, 1);
                            break t;
                          }
                      }
                      v = c.createElement(o), Gt(v, o, i), c.head.appendChild(v);
                      break;
                    case "meta":
                      if (A = Kg(
                        "meta",
                        "content",
                        c
                      ).get(o + (i.content || ""))) {
                        for (O = 0; O < A.length; O++)
                          if (v = A[O], v.getAttribute("content") === (i.content == null ? null : "" + i.content) && v.getAttribute("name") === (i.name == null ? null : i.name) && v.getAttribute("property") === (i.property == null ? null : i.property) && v.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && v.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            A.splice(O, 1);
                            break t;
                          }
                      }
                      v = c.createElement(o), Gt(v, o, i), c.head.appendChild(v);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  v[Xt] = e, Pt(v), o = v;
                }
                e.stateNode = o;
              } else
                Jg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Qg(
                c,
                o,
                e.memoizedProps
              );
          else
            v !== o ? (v === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : v.count--, o === null ? Jg(
              c,
              e.type,
              e.stateNode
            ) : Qg(
              c,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && lf(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        Sn(n, e), xn(e), o & 512 && (At || i === null || ar(i, i.return)), i !== null && o & 4 && lf(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (Sn(n, e), xn(e), o & 512 && (At || i === null || ar(i, i.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Qa(c, "");
          } catch (V) {
            ft(e, e.return, V);
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, lf(
          e,
          c,
          i !== null ? i.memoizedProps : c
        )), o & 1024 && (ff = !0);
        break;
      case 6:
        if (Sn(n, e), xn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          o = e.memoizedProps, i = e.stateNode;
          try {
            i.nodeValue = o;
          } catch (V) {
            ft(e, e.return, V);
          }
        }
        break;
      case 3:
        if (gl = null, c = Yn, Yn = pl(n.containerInfo), Sn(n, e), Yn = c, xn(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Ps(n.containerInfo);
          } catch (V) {
            ft(e, e.return, V);
          }
        ff && (ff = !1, ag(e));
        break;
      case 4:
        o = Yn, Yn = pl(
          e.stateNode.containerInfo
        ), Sn(n, e), xn(e), Yn = o;
        break;
      case 12:
        Sn(n, e), xn(e);
        break;
      case 13:
        Sn(n, e), xn(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (yf = re()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, df(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var k = i !== null && i.memoizedState !== null, H = Sr, Q = At;
        if (Sr = H || c, At = Q || k, Sn(n, e), At = Q, Sr = H, xn(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (i === null || k || Sr || At || Ca(e)), i = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (i === null) {
                k = i = n;
                try {
                  if (v = k.stateNode, c)
                    A = v.style, typeof A.setProperty == "function" ? A.setProperty("display", "none", "important") : A.display = "none";
                  else {
                    O = k.stateNode;
                    var ee = k.memoizedProps.style, Z = ee != null && ee.hasOwnProperty("display") ? ee.display : null;
                    O.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (V) {
                  ft(k, k.return, V);
                }
              }
            } else if (n.tag === 6) {
              if (i === null) {
                k = n;
                try {
                  k.stateNode.nodeValue = c ? "" : k.memoizedProps;
                } catch (V) {
                  ft(k, k.return, V);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              i === n && (i = null), n = n.return;
            }
            i === n && (i = null), n.sibling.return = n.return, n = n.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, df(e, i))));
        break;
      case 19:
        Sn(n, e), xn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, df(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Sn(n, e), xn(e);
    }
  }
  function xn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if (Qm(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(s(160));
        switch (i.tag) {
          case 27:
            var c = i.stateNode, v = uf(e);
            tl(e, v, c);
            break;
          case 5:
            var A = i.stateNode;
            i.flags & 32 && (Qa(A, ""), i.flags &= -33);
            var O = uf(e);
            tl(e, O, A);
            break;
          case 3:
          case 4:
            var k = i.stateNode.containerInfo, H = uf(e);
            cf(
              e,
              H,
              k
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (Q) {
        ft(e, e.return, Q);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function ag(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        ag(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function qr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Wm(e, n.alternate, n), n = n.sibling;
  }
  function Ca(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Hr(4, n, n.return), Ca(n);
          break;
        case 1:
          ar(n, n.return);
          var i = n.stateNode;
          typeof i.componentWillUnmount == "function" && Xm(
            n,
            n.return,
            i
          ), Ca(n);
          break;
        case 27:
          Ds(n.stateNode);
        case 26:
        case 5:
          ar(n, n.return), Ca(n);
          break;
        case 22:
          n.memoizedState === null && Ca(n);
          break;
        case 30:
          Ca(n);
          break;
        default:
          Ca(n);
      }
      e = e.sibling;
    }
  }
  function Zr(e, n, i) {
    for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate, c = e, v = n, A = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Zr(
            c,
            v,
            i
          ), _s(4, v);
          break;
        case 1:
          if (Zr(
            c,
            v,
            i
          ), o = v, c = o.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (H) {
              ft(o, o.return, H);
            }
          if (o = v, c = o.updateQueue, c !== null) {
            var O = o.stateNode;
            try {
              var k = c.shared.hiddenCallbacks;
              if (k !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < k.length; c++)
                  jp(k[c], O);
            } catch (H) {
              ft(o, o.return, H);
            }
          }
          i && A & 64 && Ym(v), Ss(v, v.return);
          break;
        case 27:
          Km(v);
        case 26:
        case 5:
          Zr(
            c,
            v,
            i
          ), i && o === null && A & 4 && $m(v), Ss(v, v.return);
          break;
        case 12:
          Zr(
            c,
            v,
            i
          );
          break;
        case 13:
          Zr(
            c,
            v,
            i
          ), i && A & 4 && ng(c, v);
          break;
        case 22:
          v.memoizedState === null && Zr(
            c,
            v,
            i
          ), Ss(v, v.return);
          break;
        case 30:
          break;
        default:
          Zr(
            c,
            v,
            i
          );
      }
      n = n.sibling;
    }
  }
  function hf(e, n) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && ss(i));
  }
  function pf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ss(e));
  }
  function ir(e, n, i, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        ig(
          e,
          n,
          i,
          o
        ), n = n.sibling;
  }
  function ig(e, n, i, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ir(
          e,
          n,
          i,
          o
        ), c & 2048 && _s(9, n);
        break;
      case 1:
        ir(
          e,
          n,
          i,
          o
        );
        break;
      case 3:
        ir(
          e,
          n,
          i,
          o
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ss(e)));
        break;
      case 12:
        if (c & 2048) {
          ir(
            e,
            n,
            i,
            o
          ), e = n.stateNode;
          try {
            var v = n.memoizedProps, A = v.id, O = v.onPostCommit;
            typeof O == "function" && O(
              A,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (k) {
            ft(n, n.return, k);
          }
        } else
          ir(
            e,
            n,
            i,
            o
          );
        break;
      case 13:
        ir(
          e,
          n,
          i,
          o
        );
        break;
      case 23:
        break;
      case 22:
        v = n.stateNode, A = n.alternate, n.memoizedState !== null ? v._visibility & 2 ? ir(
          e,
          n,
          i,
          o
        ) : xs(e, n) : v._visibility & 2 ? ir(
          e,
          n,
          i,
          o
        ) : (v._visibility |= 2, mi(
          e,
          n,
          i,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && hf(A, n);
        break;
      case 24:
        ir(
          e,
          n,
          i,
          o
        ), c & 2048 && pf(n.alternate, n);
        break;
      default:
        ir(
          e,
          n,
          i,
          o
        );
    }
  }
  function mi(e, n, i, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var v = e, A = n, O = i, k = o, H = A.flags;
      switch (A.tag) {
        case 0:
        case 11:
        case 15:
          mi(
            v,
            A,
            O,
            k,
            c
          ), _s(8, A);
          break;
        case 23:
          break;
        case 22:
          var Q = A.stateNode;
          A.memoizedState !== null ? Q._visibility & 2 ? mi(
            v,
            A,
            O,
            k,
            c
          ) : xs(
            v,
            A
          ) : (Q._visibility |= 2, mi(
            v,
            A,
            O,
            k,
            c
          )), c && H & 2048 && hf(
            A.alternate,
            A
          );
          break;
        case 24:
          mi(
            v,
            A,
            O,
            k,
            c
          ), c && H & 2048 && pf(A.alternate, A);
          break;
        default:
          mi(
            v,
            A,
            O,
            k,
            c
          );
      }
      n = n.sibling;
    }
  }
  function xs(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var i = e, o = n, c = o.flags;
        switch (o.tag) {
          case 22:
            xs(i, o), c & 2048 && hf(
              o.alternate,
              o
            );
            break;
          case 24:
            xs(i, o), c & 2048 && pf(o.alternate, o);
            break;
          default:
            xs(i, o);
        }
        n = n.sibling;
      }
  }
  var Es = 8192;
  function gi(e) {
    if (e.subtreeFlags & Es)
      for (e = e.child; e !== null; )
        sg(e), e = e.sibling;
  }
  function sg(e) {
    switch (e.tag) {
      case 26:
        gi(e), e.flags & Es && e.memoizedState !== null && Q_(
          Yn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        gi(e);
        break;
      case 3:
      case 4:
        var n = Yn;
        Yn = pl(e.stateNode.containerInfo), gi(e), Yn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Es, Es = 16777216, gi(e), Es = n) : gi(e));
        break;
      default:
        gi(e);
    }
  }
  function og(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function ws(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          Ut = o, ug(
            o,
            e
          );
        }
      og(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        lg(e), e = e.sibling;
  }
  function lg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ws(e), e.flags & 2048 && Hr(9, e, e.return);
        break;
      case 3:
        ws(e);
        break;
      case 12:
        ws(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, nl(e)) : ws(e);
        break;
      default:
        ws(e);
    }
  }
  function nl(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          Ut = o, ug(
            o,
            e
          );
        }
      og(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Hr(8, n, n.return), nl(n);
          break;
        case 22:
          i = n.stateNode, i._visibility & 2 && (i._visibility &= -3, nl(n));
          break;
        default:
          nl(n);
      }
      e = e.sibling;
    }
  }
  function ug(e, n) {
    for (; Ut !== null; ) {
      var i = Ut;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Hr(8, i, n);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          ss(i.memoizedState.cache);
      }
      if (o = i.child, o !== null) o.return = i, Ut = o;
      else
        e: for (i = e; Ut !== null; ) {
          o = Ut;
          var c = o.sibling, v = o.return;
          if (eg(o), o === i) {
            Ut = null;
            break e;
          }
          if (c !== null) {
            c.return = v, Ut = c;
            break e;
          }
          Ut = v;
        }
    }
  }
  var d_ = {
    getCacheForType: function(e) {
      var n = $t(Rt), i = n.data.get(e);
      return i === void 0 && (i = e(), n.data.set(e, i)), i;
    }
  }, h_ = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, dt = null, He = null, $e = 0, at = 0, En = null, Gr = !1, vi = !1, mf = !1, Er = 0, Et = 0, Vr = 0, Aa = 0, gf = 0, Bn = 0, yi = 0, Cs = null, dn = null, vf = !1, yf = 0, rl = 1 / 0, al = null, Yr = null, Zt = 0, Xr = null, bi = null, _i = 0, bf = 0, _f = null, cg = null, As = 0, Sf = null;
  function wn() {
    if ((rt & 2) !== 0 && $e !== 0)
      return $e & -$e;
    if (B.T !== null) {
      var e = oi;
      return e !== 0 ? e : Tf();
    }
    return Ah();
  }
  function fg() {
    Bn === 0 && (Bn = ($e & 536870912) === 0 || tt ? tr() : 536870912);
    var e = Pn.current;
    return e !== null && (e.flags |= 32), Bn;
  }
  function Cn(e, n, i) {
    (e === dt && (at === 2 || at === 9) || e.cancelPendingCommit !== null) && (Si(e, 0), $r(
      e,
      $e,
      Bn,
      !1
    )), Zi(e, i), ((rt & 2) === 0 || e !== dt) && (e === dt && ((rt & 2) === 0 && (Aa |= i), Et === 4 && $r(
      e,
      $e,
      Bn,
      !1
    )), sr(e));
  }
  function dg(e, n, i) {
    if ((rt & 6) !== 0) throw Error(s(327));
    var o = !i && (n & 124) === 0 && (n & e.expiredLanes) === 0 || pt(e, n), c = o ? g_(e, n) : wf(e, n, !0), v = o;
    do {
      if (c === 0) {
        vi && !o && $r(e, n, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, v && !p_(i)) {
          c = wf(e, n, !1), v = !1;
          continue;
        }
        if (c === 2) {
          if (v = n, e.errorRecoveryDisabledLanes & v)
            var A = 0;
          else
            A = e.pendingLanes & -536870913, A = A !== 0 ? A : A & 536870912 ? 536870912 : 0;
          if (A !== 0) {
            n = A;
            e: {
              var O = e;
              c = Cs;
              var k = O.current.memoizedState.isDehydrated;
              if (k && (Si(O, A).flags |= 256), A = wf(
                O,
                A,
                !1
              ), A !== 2) {
                if (mf && !k) {
                  O.errorRecoveryDisabledLanes |= v, Aa |= v, c = 4;
                  break e;
                }
                v = dn, dn = c, v !== null && (dn === null ? dn = v : dn.push.apply(
                  dn,
                  v
                ));
              }
              c = A;
            }
            if (v = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          Si(e, 0), $r(e, n, 0, !0);
          break;
        }
        e: {
          switch (o = e, v = c, v) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              $r(
                o,
                n,
                Bn,
                !Gr
              );
              break e;
            case 2:
              dn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = yf + 300 - re(), 10 < c)) {
            if ($r(
              o,
              n,
              Bn,
              !Gr
            ), ct(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Fg(
              hg.bind(
                null,
                o,
                i,
                dn,
                al,
                vf,
                n,
                Bn,
                Aa,
                yi,
                Gr,
                v,
                2,
                -0,
                0
              ),
              c
            );
            break e;
          }
          hg(
            o,
            i,
            dn,
            al,
            vf,
            n,
            Bn,
            Aa,
            yi,
            Gr,
            v,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    sr(e);
  }
  function hg(e, n, i, o, c, v, A, O, k, H, Q, ee, Z, V) {
    if (e.timeoutHandle = -1, ee = n.subtreeFlags, (ee & 8192 || (ee & 16785408) === 16785408) && (js = { stylesheets: null, count: 0, unsuspend: $_ }, sg(n), ee = K_(), ee !== null)) {
      e.cancelPendingCommit = ee(
        _g.bind(
          null,
          e,
          n,
          v,
          i,
          o,
          c,
          A,
          O,
          k,
          Q,
          1,
          Z,
          V
        )
      ), $r(e, v, A, !H);
      return;
    }
    _g(
      e,
      n,
      v,
      i,
      o,
      c,
      A,
      O,
      k
    );
  }
  function p_(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var c = i[o], v = c.getSnapshot;
          c = c.value;
          try {
            if (!bn(v(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (i = n.child, n.subtreeFlags & 16384 && i !== null)
        i.return = n, n = i;
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
  function $r(e, n, i, o) {
    n &= ~gf, n &= ~Aa, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var v = 31 - ne(c), A = 1 << v;
      o[v] = -1, c &= ~A;
    }
    i !== 0 && wh(e, i, n);
  }
  function il() {
    return (rt & 6) === 0 ? (Ns(0), !1) : !0;
  }
  function xf() {
    if (He !== null) {
      if (at === 0)
        var e = He.return;
      else
        e = He, mr = _a = null, Pc(e), hi = null, vs = 0, e = He;
      for (; e !== null; )
        Vm(e.alternate, e), e = e.return;
      He = null;
    }
  }
  function Si(e, n) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, k_(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), xf(), dt = e, He = i = dr(e.current, null), $e = n, at = 0, En = null, Gr = !1, vi = pt(e, n), mf = !1, yi = Bn = gf = Aa = Vr = Et = 0, dn = Cs = null, vf = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - ne(o), v = 1 << c;
        n |= e[c], o &= ~v;
      }
    return Er = n, No(), i;
  }
  function pg(e, n) {
    Pe = null, B.H = Vo, n === ls || n === Lo ? (n = Mp(), at = 3) : n === Tp ? (n = Mp(), at = 4) : at = n === km ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, En = n, He === null && (Et = 1, Ko(
      e,
      Rn(n, e.current)
    ));
  }
  function mg() {
    var e = B.H;
    return B.H = Vo, e === null ? Vo : e;
  }
  function gg() {
    var e = B.A;
    return B.A = d_, e;
  }
  function Ef() {
    Et = 4, Gr || ($e & 4194048) !== $e && Pn.current !== null || (vi = !0), (Vr & 134217727) === 0 && (Aa & 134217727) === 0 || dt === null || $r(
      dt,
      $e,
      Bn,
      !1
    );
  }
  function wf(e, n, i) {
    var o = rt;
    rt |= 2;
    var c = mg(), v = gg();
    (dt !== e || $e !== n) && (al = null, Si(e, n)), n = !1;
    var A = Et;
    e: do
      try {
        if (at !== 0 && He !== null) {
          var O = He, k = En;
          switch (at) {
            case 8:
              xf(), A = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Pn.current === null && (n = !0);
              var H = at;
              if (at = 0, En = null, xi(e, O, k, H), i && vi) {
                A = 0;
                break e;
              }
              break;
            default:
              H = at, at = 0, En = null, xi(e, O, k, H);
          }
        }
        m_(), A = Et;
        break;
      } catch (Q) {
        pg(e, Q);
      }
    while (!0);
    return n && e.shellSuspendCounter++, mr = _a = null, rt = o, B.H = c, B.A = v, He === null && (dt = null, $e = 0, No()), A;
  }
  function m_() {
    for (; He !== null; ) vg(He);
  }
  function g_(e, n) {
    var i = rt;
    rt |= 2;
    var o = mg(), c = gg();
    dt !== e || $e !== n ? (al = null, rl = re() + 500, Si(e, n)) : vi = pt(
      e,
      n
    );
    e: do
      try {
        if (at !== 0 && He !== null) {
          n = He;
          var v = En;
          t: switch (at) {
            case 1:
              at = 0, En = null, xi(e, n, v, 1);
              break;
            case 2:
            case 9:
              if (Op(v)) {
                at = 0, En = null, yg(n);
                break;
              }
              n = function() {
                at !== 2 && at !== 9 || dt !== e || (at = 7), sr(e);
              }, v.then(n, n);
              break e;
            case 3:
              at = 7;
              break e;
            case 4:
              at = 5;
              break e;
            case 7:
              Op(v) ? (at = 0, En = null, yg(n)) : (at = 0, En = null, xi(e, n, v, 7));
              break;
            case 5:
              var A = null;
              switch (He.tag) {
                case 26:
                  A = He.memoizedState;
                case 5:
                case 27:
                  var O = He;
                  if (!A || Wg(A)) {
                    at = 0, En = null;
                    var k = O.sibling;
                    if (k !== null) He = k;
                    else {
                      var H = O.return;
                      H !== null ? (He = H, sl(H)) : He = null;
                    }
                    break t;
                  }
              }
              at = 0, En = null, xi(e, n, v, 5);
              break;
            case 6:
              at = 0, En = null, xi(e, n, v, 6);
              break;
            case 8:
              xf(), Et = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        v_();
        break;
      } catch (Q) {
        pg(e, Q);
      }
    while (!0);
    return mr = _a = null, B.H = o, B.A = c, rt = i, He !== null ? 0 : (dt = null, $e = 0, No(), Et);
  }
  function v_() {
    for (; He !== null && !U(); )
      vg(He);
  }
  function vg(e) {
    var n = Zm(e.alternate, e, Er);
    e.memoizedProps = e.pendingProps, n === null ? sl(e) : He = n;
  }
  function yg(e) {
    var n = e, i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Pm(
          i,
          n,
          n.pendingProps,
          n.type,
          void 0,
          $e
        );
        break;
      case 11:
        n = Pm(
          i,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          $e
        );
        break;
      case 5:
        Pc(n);
      default:
        Vm(i, n), n = He = bp(n, Er), n = Zm(i, n, Er);
    }
    e.memoizedProps = e.pendingProps, n === null ? sl(e) : He = n;
  }
  function xi(e, n, i, o) {
    mr = _a = null, Pc(n), hi = null, vs = 0;
    var c = n.return;
    try {
      if (s_(
        e,
        c,
        n,
        i,
        $e
      )) {
        Et = 1, Ko(
          e,
          Rn(i, e.current)
        ), He = null;
        return;
      }
    } catch (v) {
      if (c !== null) throw He = c, v;
      Et = 1, Ko(
        e,
        Rn(i, e.current)
      ), He = null;
      return;
    }
    n.flags & 32768 ? (tt || o === 1 ? e = !0 : vi || ($e & 536870912) !== 0 ? e = !1 : (Gr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Pn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), bg(n, e)) : sl(n);
  }
  function sl(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        bg(
          n,
          Gr
        );
        return;
      }
      e = n.return;
      var i = l_(
        n.alternate,
        n,
        Er
      );
      if (i !== null) {
        He = i;
        return;
      }
      if (n = n.sibling, n !== null) {
        He = n;
        return;
      }
      He = n = e;
    } while (n !== null);
    Et === 0 && (Et = 5);
  }
  function bg(e, n) {
    do {
      var i = u_(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, He = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (e = e.sibling, e !== null)) {
        He = e;
        return;
      }
      He = e = i;
    } while (e !== null);
    Et = 6, He = null;
  }
  function _g(e, n, i, o, c, v, A, O, k) {
    e.cancelPendingCommit = null;
    do
      ol();
    while (Zt !== 0);
    if ((rt & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (v = n.lanes | n.childLanes, v |= hc, $1(
        e,
        i,
        v,
        A,
        O,
        k
      ), e === dt && (He = dt = null, $e = 0), bi = n, Xr = e, _i = i, bf = v, _f = c, cg = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, S_(pe, function() {
        return Cg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = B.T, B.T = null, c = ae.p, ae.p = 2, A = rt, rt |= 4;
        try {
          c_(e, n, i);
        } finally {
          rt = A, ae.p = c, B.T = o;
        }
      }
      Zt = 1, Sg(), xg(), Eg();
    }
  }
  function Sg() {
    if (Zt === 1) {
      Zt = 0;
      var e = Xr, n = bi, i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        i = B.T, B.T = null;
        var o = ae.p;
        ae.p = 2;
        var c = rt;
        rt |= 4;
        try {
          rg(n, e);
          var v = Lf, A = up(e.containerInfo), O = v.focusedElem, k = v.selectionRange;
          if (A !== O && O && O.ownerDocument && lp(
            O.ownerDocument.documentElement,
            O
          )) {
            if (k !== null && lc(O)) {
              var H = k.start, Q = k.end;
              if (Q === void 0 && (Q = H), "selectionStart" in O)
                O.selectionStart = H, O.selectionEnd = Math.min(
                  Q,
                  O.value.length
                );
              else {
                var ee = O.ownerDocument || document, Z = ee && ee.defaultView || window;
                if (Z.getSelection) {
                  var V = Z.getSelection(), Te = O.textContent.length, Ce = Math.min(k.start, Te), lt = k.end === void 0 ? Ce : Math.min(k.end, Te);
                  !V.extend && Ce > lt && (A = lt, lt = Ce, Ce = A);
                  var P = op(
                    O,
                    Ce
                  ), z = op(
                    O,
                    lt
                  );
                  if (P && z && (V.rangeCount !== 1 || V.anchorNode !== P.node || V.anchorOffset !== P.offset || V.focusNode !== z.node || V.focusOffset !== z.offset)) {
                    var F = ee.createRange();
                    F.setStart(P.node, P.offset), V.removeAllRanges(), Ce > lt ? (V.addRange(F), V.extend(z.node, z.offset)) : (F.setEnd(z.node, z.offset), V.addRange(F));
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
              var K = ee[O];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          bl = !!zf, Lf = zf = null;
        } finally {
          rt = c, ae.p = o, B.T = i;
        }
      }
      e.current = n, Zt = 2;
    }
  }
  function xg() {
    if (Zt === 2) {
      Zt = 0;
      var e = Xr, n = bi, i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        i = B.T, B.T = null;
        var o = ae.p;
        ae.p = 2;
        var c = rt;
        rt |= 4;
        try {
          Wm(e, n.alternate, n);
        } finally {
          rt = c, ae.p = o, B.T = i;
        }
      }
      Zt = 3;
    }
  }
  function Eg() {
    if (Zt === 4 || Zt === 3) {
      Zt = 0, W();
      var e = Xr, n = bi, i = _i, o = cg;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Zt = 5 : (Zt = 0, bi = Xr = null, wg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Yr = null), Fu(i), n = n.stateNode, et && typeof et.onCommitFiberRoot == "function")
        try {
          et.onCommitFiberRoot(
            ut,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = B.T, c = ae.p, ae.p = 2, B.T = null;
        try {
          for (var v = e.onRecoverableError, A = 0; A < o.length; A++) {
            var O = o[A];
            v(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          B.T = n, ae.p = c;
        }
      }
      (_i & 3) !== 0 && ol(), sr(e), c = e.pendingLanes, (i & 4194090) !== 0 && (c & 42) !== 0 ? e === Sf ? As++ : (As = 0, Sf = e) : As = 0, Ns(0);
    }
  }
  function wg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ss(n)));
  }
  function ol(e) {
    return Sg(), xg(), Eg(), Cg();
  }
  function Cg() {
    if (Zt !== 5) return !1;
    var e = Xr, n = bf;
    bf = 0;
    var i = Fu(_i), o = B.T, c = ae.p;
    try {
      ae.p = 32 > i ? 32 : i, B.T = null, i = _f, _f = null;
      var v = Xr, A = _i;
      if (Zt = 0, bi = Xr = null, _i = 0, (rt & 6) !== 0) throw Error(s(331));
      var O = rt;
      if (rt |= 4, lg(v.current), ig(
        v,
        v.current,
        A,
        i
      ), rt = O, Ns(0, !1), et && typeof et.onPostCommitFiberRoot == "function")
        try {
          et.onPostCommitFiberRoot(ut, v);
        } catch {
        }
      return !0;
    } finally {
      ae.p = c, B.T = o, wg(e, n);
    }
  }
  function Ag(e, n, i) {
    n = Rn(i, n), n = Jc(e.stateNode, n, 2), e = Pr(e, n, 2), e !== null && (Zi(e, 2), sr(e));
  }
  function ft(e, n, i) {
    if (e.tag === 3)
      Ag(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ag(
            n,
            e,
            i
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Yr === null || !Yr.has(o))) {
            e = Rn(i, e), i = Dm(2), o = Pr(n, i, 2), o !== null && (Mm(
              i,
              o,
              n,
              e
            ), Zi(o, 2), sr(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Cf(e, n, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new h_();
      var c = /* @__PURE__ */ new Set();
      o.set(n, c);
    } else
      c = o.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(n, c));
    c.has(i) || (mf = !0, c.add(i), e = y_.bind(null, e, n, i), n.then(e, e));
  }
  function y_(e, n, i) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, dt === e && ($e & i) === i && (Et === 4 || Et === 3 && ($e & 62914560) === $e && 300 > re() - yf ? (rt & 2) === 0 && Si(e, 0) : gf |= i, yi === $e && (yi = 0)), sr(e);
  }
  function Ng(e, n) {
    n === 0 && (n = Eh()), e = ri(e, n), e !== null && (Zi(e, n), sr(e));
  }
  function b_(e) {
    var n = e.memoizedState, i = 0;
    n !== null && (i = n.retryLane), Ng(e, i);
  }
  function __(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, c = e.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    o !== null && o.delete(n), Ng(e, i);
  }
  function S_(e, n) {
    return on(e, n);
  }
  var ll = null, Ei = null, Af = !1, ul = !1, Nf = !1, Na = 0;
  function sr(e) {
    e !== Ei && e.next === null && (Ei === null ? ll = Ei = e : Ei = Ei.next = e), ul = !0, Af || (Af = !0, E_());
  }
  function Ns(e, n) {
    if (!Nf && ul) {
      Nf = !0;
      do
        for (var i = !1, o = ll; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var v = 0;
            else {
              var A = o.suspendedLanes, O = o.pingedLanes;
              v = (1 << 31 - ne(42 | e) + 1) - 1, v &= c & ~(A & ~O), v = v & 201326741 ? v & 201326741 | 1 : v ? v | 2 : 0;
            }
            v !== 0 && (i = !0, Mg(o, v));
          } else
            v = $e, v = ct(
              o,
              o === dt ? v : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (v & 3) === 0 || pt(o, v) || (i = !0, Mg(o, v));
          o = o.next;
        }
      while (i);
      Nf = !1;
    }
  }
  function x_() {
    Tg();
  }
  function Tg() {
    ul = Af = !1;
    var e = 0;
    Na !== 0 && (M_() && (e = Na), Na = 0);
    for (var n = re(), i = null, o = ll; o !== null; ) {
      var c = o.next, v = Og(o, n);
      v === 0 ? (o.next = null, i === null ? ll = c : i.next = c, c === null && (Ei = i)) : (i = o, (e !== 0 || (v & 3) !== 0) && (ul = !0)), o = c;
    }
    Ns(e);
  }
  function Og(e, n) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, v = e.pendingLanes & -62914561; 0 < v; ) {
      var A = 31 - ne(v), O = 1 << A, k = c[A];
      k === -1 ? ((O & i) === 0 || (O & o) !== 0) && (c[A] = Gn(O, n)) : k <= n && (e.expiredLanes |= O), v &= ~O;
    }
    if (n = dt, i = $e, i = ct(
      e,
      e === n ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === n && (at === 2 || at === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && Tt(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || pt(e, i)) {
      if (n = i & -i, n === e.callbackPriority) return n;
      switch (o !== null && Tt(o), Fu(i)) {
        case 2:
        case 8:
          i = oe;
          break;
        case 32:
          i = pe;
          break;
        case 268435456:
          i = Be;
          break;
        default:
          i = pe;
      }
      return o = Dg.bind(null, e), i = on(i, o), e.callbackPriority = n, e.callbackNode = i, n;
    }
    return o !== null && o !== null && Tt(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Dg(e, n) {
    if (Zt !== 0 && Zt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (ol() && e.callbackNode !== i)
      return null;
    var o = $e;
    return o = ct(
      e,
      e === dt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (dg(e, o, n), Og(e, re()), e.callbackNode != null && e.callbackNode === i ? Dg.bind(null, e) : null);
  }
  function Mg(e, n) {
    if (ol()) return null;
    dg(e, n, !0);
  }
  function E_() {
    j_(function() {
      (rt & 6) !== 0 ? on(
        Ae,
        x_
      ) : Tg();
    });
  }
  function Tf() {
    return Na === 0 && (Na = tr()), Na;
  }
  function kg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : _o("" + e);
  }
  function jg(e, n) {
    var i = n.ownerDocument.createElement("input");
    return i.name = n.name, i.value = n.value, e.id && i.setAttribute("form", e.id), n.parentNode.insertBefore(i, n), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function w_(e, n, i, o, c) {
    if (n === "submit" && i && i.stateNode === c) {
      var v = kg(
        (c[ln] || null).action
      ), A = o.submitter;
      A && (n = (n = A[ln] || null) ? kg(n.formAction) : A.getAttribute("formAction"), n !== null && (v = n, A = null));
      var O = new wo(
        "action",
        "action",
        null,
        o,
        c
      );
      e.push({
        event: O,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (Na !== 0) {
                  var k = A ? jg(c, A) : new FormData(c);
                  Yc(
                    i,
                    {
                      pending: !0,
                      data: k,
                      method: c.method,
                      action: v
                    },
                    null,
                    k
                  );
                }
              } else
                typeof v == "function" && (O.preventDefault(), k = A ? jg(c, A) : new FormData(c), Yc(
                  i,
                  {
                    pending: !0,
                    data: k,
                    method: c.method,
                    action: v
                  },
                  v,
                  k
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var Of = 0; Of < dc.length; Of++) {
    var Df = dc[Of], C_ = Df.toLowerCase(), A_ = Df[0].toUpperCase() + Df.slice(1);
    Vn(
      C_,
      "on" + A_
    );
  }
  Vn(dp, "onAnimationEnd"), Vn(hp, "onAnimationIteration"), Vn(pp, "onAnimationStart"), Vn("dblclick", "onDoubleClick"), Vn("focusin", "onFocus"), Vn("focusout", "onBlur"), Vn(qb, "onTransitionRun"), Vn(Zb, "onTransitionStart"), Vn(Gb, "onTransitionCancel"), Vn(mp, "onTransitionEnd"), Ya("onMouseEnter", ["mouseout", "mouseover"]), Ya("onMouseLeave", ["mouseout", "mouseover"]), Ya("onPointerEnter", ["pointerout", "pointerover"]), Ya("onPointerLeave", ["pointerout", "pointerover"]), fa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), fa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), fa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), fa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), fa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), fa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), N_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ts)
  );
  function Rg(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], c = o.event;
      o = o.listeners;
      e: {
        var v = void 0;
        if (n)
          for (var A = o.length - 1; 0 <= A; A--) {
            var O = o[A], k = O.instance, H = O.currentTarget;
            if (O = O.listener, k !== v && c.isPropagationStopped())
              break e;
            v = O, c.currentTarget = H;
            try {
              v(c);
            } catch (Q) {
              Qo(Q);
            }
            c.currentTarget = null, v = k;
          }
        else
          for (A = 0; A < o.length; A++) {
            if (O = o[A], k = O.instance, H = O.currentTarget, O = O.listener, k !== v && c.isPropagationStopped())
              break e;
            v = O, c.currentTarget = H;
            try {
              v(c);
            } catch (Q) {
              Qo(Q);
            }
            c.currentTarget = null, v = k;
          }
      }
    }
  }
  function qe(e, n) {
    var i = n[Hu];
    i === void 0 && (i = n[Hu] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (zg(n, e, 2, !1), i.add(o));
  }
  function Mf(e, n, i) {
    var o = 0;
    n && (o |= 4), zg(
      i,
      e,
      o,
      n
    );
  }
  var cl = "_reactListening" + Math.random().toString(36).slice(2);
  function kf(e) {
    if (!e[cl]) {
      e[cl] = !0, Th.forEach(function(i) {
        i !== "selectionchange" && (N_.has(i) || Mf(i, !1, e), Mf(i, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[cl] || (n[cl] = !0, Mf("selectionchange", !1, n));
    }
  }
  function zg(e, n, i, o) {
    switch (iv(n)) {
      case 2:
        var c = e2;
        break;
      case 8:
        c = t2;
        break;
      default:
        c = Vf;
    }
    i = c.bind(
      null,
      n,
      i,
      e
    ), c = void 0, !Wu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), o ? c !== void 0 ? e.addEventListener(n, i, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, i, !0) : c !== void 0 ? e.addEventListener(n, i, {
      passive: c
    }) : e.addEventListener(n, i, !1);
  }
  function jf(e, n, i, o, c) {
    var v = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var A = o.tag;
        if (A === 3 || A === 4) {
          var O = o.stateNode.containerInfo;
          if (O === c) break;
          if (A === 4)
            for (A = o.return; A !== null; ) {
              var k = A.tag;
              if ((k === 3 || k === 4) && A.stateNode.containerInfo === c)
                return;
              A = A.return;
            }
          for (; O !== null; ) {
            if (A = Za(O), A === null) return;
            if (k = A.tag, k === 5 || k === 6 || k === 26 || k === 27) {
              o = v = A;
              continue e;
            }
            O = O.parentNode;
          }
        }
        o = o.return;
      }
    Hh(function() {
      var H = v, Q = Ku(i), ee = [];
      e: {
        var Z = gp.get(e);
        if (Z !== void 0) {
          var V = wo, Te = e;
          switch (e) {
            case "keypress":
              if (xo(i) === 0) break e;
            case "keydown":
            case "keyup":
              V = Sb;
              break;
            case "focusin":
              Te = "focus", V = rc;
              break;
            case "focusout":
              Te = "blur", V = rc;
              break;
            case "beforeblur":
            case "afterblur":
              V = rc;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Gh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = ub;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = wb;
              break;
            case dp:
            case hp:
            case pp:
              V = db;
              break;
            case mp:
              V = Ab;
              break;
            case "scroll":
            case "scrollend":
              V = ob;
              break;
            case "wheel":
              V = Tb;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = pb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Yh;
              break;
            case "toggle":
            case "beforetoggle":
              V = Db;
          }
          var Ce = (n & 4) !== 0, lt = !Ce && (e === "scroll" || e === "scrollend"), P = Ce ? Z !== null ? Z + "Capture" : null : Z;
          Ce = [];
          for (var z = H, F; z !== null; ) {
            var K = z;
            if (F = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || F === null || P === null || (K = Yi(z, P), K != null && Ce.push(
              Os(z, K, F)
            )), lt) break;
            z = z.return;
          }
          0 < Ce.length && (Z = new V(
            Z,
            Te,
            null,
            i,
            Q
          ), ee.push({ event: Z, listeners: Ce }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Z = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", Z && i !== Qu && (Te = i.relatedTarget || i.fromElement) && (Za(Te) || Te[qa]))
            break e;
          if ((V || Z) && (Z = Q.window === Q ? Q : (Z = Q.ownerDocument) ? Z.defaultView || Z.parentWindow : window, V ? (Te = i.relatedTarget || i.toElement, V = H, Te = Te ? Za(Te) : null, Te !== null && (lt = u(Te), Ce = Te.tag, Te !== lt || Ce !== 5 && Ce !== 27 && Ce !== 6) && (Te = null)) : (V = null, Te = H), V !== Te)) {
            if (Ce = Gh, K = "onMouseLeave", P = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Ce = Yh, K = "onPointerLeave", P = "onPointerEnter", z = "pointer"), lt = V == null ? Z : Vi(V), F = Te == null ? Z : Vi(Te), Z = new Ce(
              K,
              z + "leave",
              V,
              i,
              Q
            ), Z.target = lt, Z.relatedTarget = F, K = null, Za(Q) === H && (Ce = new Ce(
              P,
              z + "enter",
              Te,
              i,
              Q
            ), Ce.target = F, Ce.relatedTarget = lt, K = Ce), lt = K, V && Te)
              t: {
                for (Ce = V, P = Te, z = 0, F = Ce; F; F = wi(F))
                  z++;
                for (F = 0, K = P; K; K = wi(K))
                  F++;
                for (; 0 < z - F; )
                  Ce = wi(Ce), z--;
                for (; 0 < F - z; )
                  P = wi(P), F--;
                for (; z--; ) {
                  if (Ce === P || P !== null && Ce === P.alternate)
                    break t;
                  Ce = wi(Ce), P = wi(P);
                }
                Ce = null;
              }
            else Ce = null;
            V !== null && Lg(
              ee,
              Z,
              V,
              Ce,
              !1
            ), Te !== null && lt !== null && Lg(
              ee,
              lt,
              Te,
              Ce,
              !0
            );
          }
        }
        e: {
          if (Z = H ? Vi(H) : window, V = Z.nodeName && Z.nodeName.toLowerCase(), V === "select" || V === "input" && Z.type === "file")
            var be = tp;
          else if (Wh(Z))
            if (np)
              be = Ub;
            else {
              be = Pb;
              var Fe = Ib;
            }
          else
            V = Z.nodeName, !V || V.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? H && $u(H.elementType) && (be = tp) : be = Bb;
          if (be && (be = be(e, H))) {
            ep(
              ee,
              be,
              i,
              Q
            );
            break e;
          }
          Fe && Fe(e, Z, H), e === "focusout" && H && Z.type === "number" && H.memoizedProps.value != null && Xu(Z, "number", Z.value);
        }
        switch (Fe = H ? Vi(H) : window, e) {
          case "focusin":
            (Wh(Fe) || Fe.contentEditable === "true") && (ei = Fe, uc = H, ts = null);
            break;
          case "focusout":
            ts = uc = ei = null;
            break;
          case "mousedown":
            cc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            cc = !1, cp(ee, i, Q);
            break;
          case "selectionchange":
            if (Hb) break;
          case "keydown":
          case "keyup":
            cp(ee, i, Q);
        }
        var Se;
        if (ic)
          e: {
            switch (e) {
              case "compositionstart":
                var Ne = "onCompositionStart";
                break e;
              case "compositionend":
                Ne = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ne = "onCompositionUpdate";
                break e;
            }
            Ne = void 0;
          }
        else
          Wa ? Kh(e, i) && (Ne = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (Ne = "onCompositionStart");
        Ne && (Xh && i.locale !== "ko" && (Wa || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && Wa && (Se = qh()) : (Rr = Q, ec = "value" in Rr ? Rr.value : Rr.textContent, Wa = !0)), Fe = fl(H, Ne), 0 < Fe.length && (Ne = new Vh(
          Ne,
          e,
          null,
          i,
          Q
        ), ee.push({ event: Ne, listeners: Fe }), Se ? Ne.data = Se : (Se = Jh(i), Se !== null && (Ne.data = Se)))), (Se = kb ? jb(e, i) : Rb(e, i)) && (Ne = fl(H, "onBeforeInput"), 0 < Ne.length && (Fe = new Vh(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          Q
        ), ee.push({
          event: Fe,
          listeners: Ne
        }), Fe.data = Se)), w_(
          ee,
          e,
          H,
          i,
          Q
        );
      }
      Rg(ee, n);
    });
  }
  function Os(e, n, i) {
    return {
      instance: e,
      listener: n,
      currentTarget: i
    };
  }
  function fl(e, n) {
    for (var i = n + "Capture", o = []; e !== null; ) {
      var c = e, v = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || v === null || (c = Yi(e, i), c != null && o.unshift(
        Os(e, c, v)
      ), c = Yi(e, n), c != null && o.push(
        Os(e, c, v)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function wi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Lg(e, n, i, o, c) {
    for (var v = n._reactName, A = []; i !== null && i !== o; ) {
      var O = i, k = O.alternate, H = O.stateNode;
      if (O = O.tag, k !== null && k === o) break;
      O !== 5 && O !== 26 && O !== 27 || H === null || (k = H, c ? (H = Yi(i, v), H != null && A.unshift(
        Os(i, H, k)
      )) : c || (H = Yi(i, v), H != null && A.push(
        Os(i, H, k)
      ))), i = i.return;
    }
    A.length !== 0 && e.push({ event: n, listeners: A });
  }
  var T_ = /\r\n?/g, O_ = /\u0000|\uFFFD/g;
  function Ig(e) {
    return (typeof e == "string" ? e : "" + e).replace(T_, `
`).replace(O_, "");
  }
  function Pg(e, n) {
    return n = Ig(n), Ig(e) === n;
  }
  function dl() {
  }
  function ot(e, n, i, o, c, v) {
    switch (i) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Qa(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Qa(e, "" + o);
        break;
      case "className":
        vo(e, "class", o);
        break;
      case "tabIndex":
        vo(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        vo(e, i, o);
        break;
      case "style":
        Uh(e, o, v);
        break;
      case "data":
        if (n !== "object") {
          vo(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = _o("" + o), e.setAttribute(i, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof v == "function" && (i === "formAction" ? (n !== "input" && ot(e, n, "name", c.name, c, null), ot(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), ot(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), ot(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (ot(e, n, "encType", c.encType, c, null), ot(e, n, "method", c.method, c, null), ot(e, n, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = _o("" + o), e.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (e.onclick = dl);
        break;
      case "onScroll":
        o != null && qe("scroll", e);
        break;
      case "onScrollEnd":
        o != null && qe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (i = o.__html, i != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
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
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        i = _o("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          i
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
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "" + o) : e.removeAttribute(i);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(i, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(i) : e.setAttribute(i, o);
        break;
      case "popover":
        qe("beforetoggle", e), qe("toggle", e), go(e, "popover", o);
        break;
      case "xlinkActuate":
        cr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        cr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        cr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        cr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        cr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        cr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        cr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        cr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        cr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        go(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = ib.get(i) || i, go(e, i, o));
    }
  }
  function Rf(e, n, i, o, c, v) {
    switch (i) {
      case "style":
        Uh(e, o, v);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (i = o.__html, i != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Qa(e, o) : (typeof o == "number" || typeof o == "bigint") && Qa(e, "" + o);
        break;
      case "onScroll":
        o != null && qe("scroll", e);
        break;
      case "onScrollEnd":
        o != null && qe("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = dl);
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
        if (!Oh.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (c = i.endsWith("Capture"), n = i.slice(2, c ? i.length - 7 : void 0), v = e[ln] || null, v = v != null ? v[i] : null, typeof v == "function" && e.removeEventListener(n, v, c), typeof o == "function")) {
              typeof v != "function" && v !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(n, o, c);
              break e;
            }
            i in e ? e[i] = o : o === !0 ? e.setAttribute(i, "") : go(e, i, o);
          }
    }
  }
  function Gt(e, n, i) {
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
        qe("error", e), qe("load", e);
        var o = !1, c = !1, v;
        for (v in i)
          if (i.hasOwnProperty(v)) {
            var A = i[v];
            if (A != null)
              switch (v) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, n));
                default:
                  ot(e, n, v, A, i, null);
              }
          }
        c && ot(e, n, "srcSet", i.srcSet, i, null), o && ot(e, n, "src", i.src, i, null);
        return;
      case "input":
        qe("invalid", e);
        var O = v = A = c = null, k = null, H = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var Q = i[o];
            if (Q != null)
              switch (o) {
                case "name":
                  c = Q;
                  break;
                case "type":
                  A = Q;
                  break;
                case "checked":
                  k = Q;
                  break;
                case "defaultChecked":
                  H = Q;
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
                  ot(e, n, o, Q, i, null);
              }
          }
        Lh(
          e,
          v,
          O,
          k,
          H,
          A,
          c,
          !1
        ), yo(e);
        return;
      case "select":
        qe("invalid", e), o = A = v = null;
        for (c in i)
          if (i.hasOwnProperty(c) && (O = i[c], O != null))
            switch (c) {
              case "value":
                v = O;
                break;
              case "defaultValue":
                A = O;
                break;
              case "multiple":
                o = O;
              default:
                ot(e, n, c, O, i, null);
            }
        n = v, i = A, e.multiple = !!o, n != null ? $a(e, !!o, n, !1) : i != null && $a(e, !!o, i, !0);
        return;
      case "textarea":
        qe("invalid", e), v = c = o = null;
        for (A in i)
          if (i.hasOwnProperty(A) && (O = i[A], O != null))
            switch (A) {
              case "value":
                o = O;
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
                ot(e, n, A, O, i, null);
            }
        Ph(e, o, c, v), yo(e);
        return;
      case "option":
        for (k in i)
          if (i.hasOwnProperty(k) && (o = i[k], o != null))
            switch (k) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                ot(e, n, k, o, i, null);
            }
        return;
      case "dialog":
        qe("beforetoggle", e), qe("toggle", e), qe("cancel", e), qe("close", e);
        break;
      case "iframe":
      case "object":
        qe("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ts.length; o++)
          qe(Ts[o], e);
        break;
      case "image":
        qe("error", e), qe("load", e);
        break;
      case "details":
        qe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        qe("error", e), qe("load", e);
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
        for (H in i)
          if (i.hasOwnProperty(H) && (o = i[H], o != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                ot(e, n, H, o, i, null);
            }
        return;
      default:
        if ($u(n)) {
          for (Q in i)
            i.hasOwnProperty(Q) && (o = i[Q], o !== void 0 && Rf(
              e,
              n,
              Q,
              o,
              i,
              void 0
            ));
          return;
        }
    }
    for (O in i)
      i.hasOwnProperty(O) && (o = i[O], o != null && ot(e, n, O, o, i, null));
  }
  function D_(e, n, i, o) {
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
        var c = null, v = null, A = null, O = null, k = null, H = null, Q = null;
        for (V in i) {
          var ee = i[V];
          if (i.hasOwnProperty(V) && ee != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                k = ee;
              default:
                o.hasOwnProperty(V) || ot(e, n, V, null, o, ee);
            }
        }
        for (var Z in o) {
          var V = o[Z];
          if (ee = i[Z], o.hasOwnProperty(Z) && (V != null || ee != null))
            switch (Z) {
              case "type":
                v = V;
                break;
              case "name":
                c = V;
                break;
              case "checked":
                H = V;
                break;
              case "defaultChecked":
                Q = V;
                break;
              case "value":
                A = V;
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
                V !== ee && ot(
                  e,
                  n,
                  Z,
                  V,
                  o,
                  ee
                );
            }
        }
        Yu(
          e,
          A,
          O,
          k,
          H,
          Q,
          v,
          c
        );
        return;
      case "select":
        V = A = O = Z = null;
        for (v in i)
          if (k = i[v], i.hasOwnProperty(v) && k != null)
            switch (v) {
              case "value":
                break;
              case "multiple":
                V = k;
              default:
                o.hasOwnProperty(v) || ot(
                  e,
                  n,
                  v,
                  null,
                  o,
                  k
                );
            }
        for (c in o)
          if (v = o[c], k = i[c], o.hasOwnProperty(c) && (v != null || k != null))
            switch (c) {
              case "value":
                Z = v;
                break;
              case "defaultValue":
                O = v;
                break;
              case "multiple":
                A = v;
              default:
                v !== k && ot(
                  e,
                  n,
                  c,
                  v,
                  o,
                  k
                );
            }
        n = O, i = A, o = V, Z != null ? $a(e, !!i, Z, !1) : !!o != !!i && (n != null ? $a(e, !!i, n, !0) : $a(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        V = Z = null;
        for (O in i)
          if (c = i[O], i.hasOwnProperty(O) && c != null && !o.hasOwnProperty(O))
            switch (O) {
              case "value":
                break;
              case "children":
                break;
              default:
                ot(e, n, O, null, o, c);
            }
        for (A in o)
          if (c = o[A], v = i[A], o.hasOwnProperty(A) && (c != null || v != null))
            switch (A) {
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
                c !== v && ot(e, n, A, c, o, v);
            }
        Ih(e, Z, V);
        return;
      case "option":
        for (var Te in i)
          if (Z = i[Te], i.hasOwnProperty(Te) && Z != null && !o.hasOwnProperty(Te))
            switch (Te) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ot(
                  e,
                  n,
                  Te,
                  null,
                  o,
                  Z
                );
            }
        for (k in o)
          if (Z = o[k], V = i[k], o.hasOwnProperty(k) && Z !== V && (Z != null || V != null))
            switch (k) {
              case "selected":
                e.selected = Z && typeof Z != "function" && typeof Z != "symbol";
                break;
              default:
                ot(
                  e,
                  n,
                  k,
                  Z,
                  o,
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
        for (var Ce in i)
          Z = i[Ce], i.hasOwnProperty(Ce) && Z != null && !o.hasOwnProperty(Ce) && ot(e, n, Ce, null, o, Z);
        for (H in o)
          if (Z = o[H], V = i[H], o.hasOwnProperty(H) && Z !== V && (Z != null || V != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, n));
                break;
              default:
                ot(
                  e,
                  n,
                  H,
                  Z,
                  o,
                  V
                );
            }
        return;
      default:
        if ($u(n)) {
          for (var lt in i)
            Z = i[lt], i.hasOwnProperty(lt) && Z !== void 0 && !o.hasOwnProperty(lt) && Rf(
              e,
              n,
              lt,
              void 0,
              o,
              Z
            );
          for (Q in o)
            Z = o[Q], V = i[Q], !o.hasOwnProperty(Q) || Z === V || Z === void 0 && V === void 0 || Rf(
              e,
              n,
              Q,
              Z,
              o,
              V
            );
          return;
        }
    }
    for (var P in i)
      Z = i[P], i.hasOwnProperty(P) && Z != null && !o.hasOwnProperty(P) && ot(e, n, P, null, o, Z);
    for (ee in o)
      Z = o[ee], V = i[ee], !o.hasOwnProperty(ee) || Z === V || Z == null && V == null || ot(e, n, ee, Z, o, V);
  }
  var zf = null, Lf = null;
  function hl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Bg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ug(e, n) {
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
  function If(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Pf = null;
  function M_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Pf ? !1 : (Pf = e, !0) : (Pf = null, !1);
  }
  var Fg = typeof setTimeout == "function" ? setTimeout : void 0, k_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Hg = typeof Promise == "function" ? Promise : void 0, j_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hg < "u" ? function(e) {
    return Hg.resolve(null).then(e).catch(R_);
  } : Fg;
  function R_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Qr(e) {
    return e === "head";
  }
  function qg(e, n) {
    var i = n, o = 0, c = 0;
    do {
      var v = i.nextSibling;
      if (e.removeChild(i), v && v.nodeType === 8)
        if (i = v.data, i === "/$") {
          if (0 < o && 8 > o) {
            i = o;
            var A = e.ownerDocument;
            if (i & 1 && Ds(A.documentElement), i & 2 && Ds(A.body), i & 4)
              for (i = A.head, Ds(i), A = i.firstChild; A; ) {
                var O = A.nextSibling, k = A.nodeName;
                A[Gi] || k === "SCRIPT" || k === "STYLE" || k === "LINK" && A.rel.toLowerCase() === "stylesheet" || i.removeChild(A), A = O;
              }
          }
          if (c === 0) {
            e.removeChild(v), Ps(n);
            return;
          }
          c--;
        } else
          i === "$" || i === "$?" || i === "$!" ? c++ : o = i.charCodeAt(0) - 48;
      else o = 0;
      i = v;
    } while (i);
    Ps(n);
  }
  function Bf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (n = n.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bf(i), qu(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function z_(e, n, i, o) {
    for (; e.nodeType === 1; ) {
      var c = i;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Gi])
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
      if (e = Xn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function L_(e, n, i) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Xn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Uf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function I_(e, n) {
    var i = e.ownerDocument;
    if (e.data !== "$?" || i.readyState === "complete")
      n();
    else {
      var o = function() {
        n(), i.removeEventListener("DOMContentLoaded", o);
      };
      i.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Xn(e) {
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
  var Ff = null;
  function Zg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (n === 0) return e;
          n--;
        } else i === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Gg(e, n, i) {
    switch (n = hl(i), e) {
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
  function Ds(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    qu(e);
  }
  var Un = /* @__PURE__ */ new Map(), Vg = /* @__PURE__ */ new Set();
  function pl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var wr = ae.d;
  ae.d = {
    f: P_,
    r: B_,
    D: U_,
    C: F_,
    L: H_,
    m: q_,
    X: G_,
    S: Z_,
    M: V_
  };
  function P_() {
    var e = wr.f(), n = il();
    return e || n;
  }
  function B_(e) {
    var n = Ga(e);
    n !== null && n.tag === 5 && n.type === "form" ? dm(n) : wr.r(e);
  }
  var Ci = typeof document > "u" ? null : document;
  function Yg(e, n, i) {
    var o = Ci;
    if (o && typeof n == "string" && n) {
      var c = jn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof i == "string" && (c += '[crossorigin="' + i + '"]'), Vg.has(c) || (Vg.add(c), e = { rel: e, crossOrigin: i, href: n }, o.querySelector(c) === null && (n = o.createElement("link"), Gt(n, "link", e), Pt(n), o.head.appendChild(n)));
    }
  }
  function U_(e) {
    wr.D(e), Yg("dns-prefetch", e, null);
  }
  function F_(e, n) {
    wr.C(e, n), Yg("preconnect", e, n);
  }
  function H_(e, n, i) {
    wr.L(e, n, i);
    var o = Ci;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + jn(n) + '"]';
      n === "image" && i && i.imageSrcSet ? (c += '[imagesrcset="' + jn(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (c += '[imagesizes="' + jn(
        i.imageSizes
      ) + '"]')) : c += '[href="' + jn(e) + '"]';
      var v = c;
      switch (n) {
        case "style":
          v = Ai(e);
          break;
        case "script":
          v = Ni(e);
      }
      Un.has(v) || (e = y(
        {
          rel: "preload",
          href: n === "image" && i && i.imageSrcSet ? void 0 : e,
          as: n
        },
        i
      ), Un.set(v, e), o.querySelector(c) !== null || n === "style" && o.querySelector(Ms(v)) || n === "script" && o.querySelector(ks(v)) || (n = o.createElement("link"), Gt(n, "link", e), Pt(n), o.head.appendChild(n)));
    }
  }
  function q_(e, n) {
    wr.m(e, n);
    var i = Ci;
    if (i && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + jn(o) + '"][href="' + jn(e) + '"]', v = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          v = Ni(e);
      }
      if (!Un.has(v) && (e = y({ rel: "modulepreload", href: e }, n), Un.set(v, e), i.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(ks(v)))
              return;
        }
        o = i.createElement("link"), Gt(o, "link", e), Pt(o), i.head.appendChild(o);
      }
    }
  }
  function Z_(e, n, i) {
    wr.S(e, n, i);
    var o = Ci;
    if (o && e) {
      var c = Va(o).hoistableStyles, v = Ai(e);
      n = n || "default";
      var A = c.get(v);
      if (!A) {
        var O = { loading: 0, preload: null };
        if (A = o.querySelector(
          Ms(v)
        ))
          O.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": n },
            i
          ), (i = Un.get(v)) && Hf(e, i);
          var k = A = o.createElement("link");
          Pt(k), Gt(k, "link", e), k._p = new Promise(function(H, Q) {
            k.onload = H, k.onerror = Q;
          }), k.addEventListener("load", function() {
            O.loading |= 1;
          }), k.addEventListener("error", function() {
            O.loading |= 2;
          }), O.loading |= 4, ml(A, n, o);
        }
        A = {
          type: "stylesheet",
          instance: A,
          count: 1,
          state: O
        }, c.set(v, A);
      }
    }
  }
  function G_(e, n) {
    wr.X(e, n);
    var i = Ci;
    if (i && e) {
      var o = Va(i).hoistableScripts, c = Ni(e), v = o.get(c);
      v || (v = i.querySelector(ks(c)), v || (e = y({ src: e, async: !0 }, n), (n = Un.get(c)) && qf(e, n), v = i.createElement("script"), Pt(v), Gt(v, "link", e), i.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, o.set(c, v));
    }
  }
  function V_(e, n) {
    wr.M(e, n);
    var i = Ci;
    if (i && e) {
      var o = Va(i).hoistableScripts, c = Ni(e), v = o.get(c);
      v || (v = i.querySelector(ks(c)), v || (e = y({ src: e, async: !0, type: "module" }, n), (n = Un.get(c)) && qf(e, n), v = i.createElement("script"), Pt(v), Gt(v, "link", e), i.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, o.set(c, v));
    }
  }
  function Xg(e, n, i, o) {
    var c = (c = X.current) ? pl(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (n = Ai(i.href), i = Va(
          c
        ).hoistableStyles, o = i.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = Ai(i.href);
          var v = Va(
            c
          ).hoistableStyles, A = v.get(e);
          if (A || (c = c.ownerDocument || c, A = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, v.set(e, A), (v = c.querySelector(
            Ms(e)
          )) && !v._p && (A.instance = v, A.state.loading = 5), Un.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, Un.set(e, i), v || Y_(
            c,
            e,
            i,
            A.state
          ))), n && o === null)
            throw Error(s(528, ""));
          return A;
        }
        if (n && o !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return n = i.async, i = i.src, typeof i == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ni(i), i = Va(
          c
        ).hoistableScripts, o = i.get(n), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Ai(e) {
    return 'href="' + jn(e) + '"';
  }
  function Ms(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function $g(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Y_(e, n, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), Gt(n, "link", i), Pt(n), e.head.appendChild(n));
  }
  function Ni(e) {
    return '[src="' + jn(e) + '"]';
  }
  function ks(e) {
    return "script[async]" + e;
  }
  function Qg(e, n, i) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + jn(i.href) + '"]'
          );
          if (o)
            return n.instance = o, Pt(o), o;
          var c = y({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), Pt(o), Gt(o, "style", c), ml(o, i.precedence, e), n.instance = o;
        case "stylesheet":
          c = Ai(i.href);
          var v = e.querySelector(
            Ms(c)
          );
          if (v)
            return n.state.loading |= 4, n.instance = v, Pt(v), v;
          o = $g(i), (c = Un.get(c)) && Hf(o, c), v = (e.ownerDocument || e).createElement("link"), Pt(v);
          var A = v;
          return A._p = new Promise(function(O, k) {
            A.onload = O, A.onerror = k;
          }), Gt(v, "link", o), n.state.loading |= 4, ml(v, i.precedence, e), n.instance = v;
        case "script":
          return v = Ni(i.src), (c = e.querySelector(
            ks(v)
          )) ? (n.instance = c, Pt(c), c) : (o = i, (c = Un.get(v)) && (o = y({}, i), qf(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), Pt(c), Gt(c, "link", o), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, ml(o, i.precedence, e));
    return n.instance;
  }
  function ml(e, n, i) {
    for (var o = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = o.length ? o[o.length - 1] : null, v = c, A = 0; A < o.length; A++) {
      var O = o[A];
      if (O.dataset.precedence === n) v = O;
      else if (v !== c) break;
    }
    v ? v.parentNode.insertBefore(e, v.nextSibling) : (n = i.nodeType === 9 ? i.head : i, n.insertBefore(e, n.firstChild));
  }
  function Hf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function qf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var gl = null;
  function Kg(e, n, i) {
    if (gl === null) {
      var o = /* @__PURE__ */ new Map(), c = gl = /* @__PURE__ */ new Map();
      c.set(i, o);
    } else
      c = gl, o = c.get(i), o || (o = /* @__PURE__ */ new Map(), c.set(i, o));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), c = 0; c < i.length; c++) {
      var v = i[c];
      if (!(v[Gi] || v[Xt] || e === "link" && v.getAttribute("rel") === "stylesheet") && v.namespaceURI !== "http://www.w3.org/2000/svg") {
        var A = v.getAttribute(n) || "";
        A = e + A;
        var O = o.get(A);
        O ? O.push(v) : o.set(A, [v]);
      }
    }
    return o;
  }
  function Jg(e, n, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function X_(e, n, i) {
    if (i === 1 || n.itemProp != null) return !1;
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
  function Wg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var js = null;
  function $_() {
  }
  function Q_(e, n, i) {
    if (js === null) throw Error(s(475));
    var o = js;
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ai(i.href), v = e.querySelector(
          Ms(c)
        );
        if (v) {
          e = v._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = vl.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = v, Pt(v);
          return;
        }
        v = e.ownerDocument || e, i = $g(i), (c = Un.get(c)) && Hf(i, c), v = v.createElement("link"), Pt(v);
        var A = v;
        A._p = new Promise(function(O, k) {
          A.onload = O, A.onerror = k;
        }), Gt(v, "link", i), n.instance = v;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = vl.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function K_() {
    if (js === null) throw Error(s(475));
    var e = js;
    return e.stylesheets && e.count === 0 && Zf(e, e.stylesheets), 0 < e.count ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Zf(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function vl() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Zf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var yl = null;
  function Zf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, yl = /* @__PURE__ */ new Map(), n.forEach(J_, e), yl = null, vl.call(e));
  }
  function J_(e, n) {
    if (!(n.state.loading & 4)) {
      var i = yl.get(e);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), yl.set(e, i);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), v = 0; v < c.length; v++) {
          var A = c[v];
          (A.nodeName === "LINK" || A.getAttribute("media") !== "not all") && (i.set(A.dataset.precedence, A), o = A);
        }
        o && i.set(null, o);
      }
      c = n.instance, A = c.getAttribute("data-precedence"), v = i.get(A) || o, v === o && i.set(null, c), i.set(A, c), this.count++, o = vl.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), v ? v.parentNode.insertBefore(c, v.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Rs = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: me,
    _currentValue2: me,
    _threadCount: 0
  };
  function W_(e, n, i, o, c, v, A, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Bu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bu(0), this.hiddenUpdates = Bu(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = v, this.onRecoverableError = A, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ev(e, n, i, o, c, v, A, O, k, H, Q, ee) {
    return e = new W_(
      e,
      n,
      i,
      A,
      O,
      k,
      H,
      ee
    ), n = 1, v === !0 && (n |= 24), v = _n(3, null, null, n), e.current = v, v.stateNode = e, n = wc(), n.refCount++, e.pooledCache = n, n.refCount++, v.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: n
    }, Tc(v), e;
  }
  function tv(e) {
    return e ? (e = ai, e) : ai;
  }
  function nv(e, n, i, o, c, v) {
    c = tv(c), o.context === null ? o.context = c : o.pendingContext = c, o = Ir(n), o.payload = { element: i }, v = v === void 0 ? null : v, v !== null && (o.callback = v), i = Pr(e, o, n), i !== null && (Cn(i, e, n), cs(i, e, n));
  }
  function rv(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Gf(e, n) {
    rv(e, n), (e = e.alternate) && rv(e, n);
  }
  function av(e) {
    if (e.tag === 13) {
      var n = ri(e, 67108864);
      n !== null && Cn(n, e, 67108864), Gf(e, 67108864);
    }
  }
  var bl = !0;
  function e2(e, n, i, o) {
    var c = B.T;
    B.T = null;
    var v = ae.p;
    try {
      ae.p = 2, Vf(e, n, i, o);
    } finally {
      ae.p = v, B.T = c;
    }
  }
  function t2(e, n, i, o) {
    var c = B.T;
    B.T = null;
    var v = ae.p;
    try {
      ae.p = 8, Vf(e, n, i, o);
    } finally {
      ae.p = v, B.T = c;
    }
  }
  function Vf(e, n, i, o) {
    if (bl) {
      var c = Yf(o);
      if (c === null)
        jf(
          e,
          n,
          o,
          _l,
          i
        ), sv(e, o);
      else if (r2(
        c,
        e,
        n,
        i,
        o
      ))
        o.stopPropagation();
      else if (sv(e, o), n & 4 && -1 < n2.indexOf(e)) {
        for (; c !== null; ) {
          var v = Ga(c);
          if (v !== null)
            switch (v.tag) {
              case 3:
                if (v = v.stateNode, v.current.memoizedState.isDehydrated) {
                  var A = ze(v.pendingLanes);
                  if (A !== 0) {
                    var O = v;
                    for (O.pendingLanes |= 2, O.entangledLanes |= 2; A; ) {
                      var k = 1 << 31 - ne(A);
                      O.entanglements[1] |= k, A &= ~k;
                    }
                    sr(v), (rt & 6) === 0 && (rl = re() + 500, Ns(0));
                  }
                }
                break;
              case 13:
                O = ri(v, 2), O !== null && Cn(O, v, 2), il(), Gf(v, 2);
            }
          if (v = Yf(o), v === null && jf(
            e,
            n,
            o,
            _l,
            i
          ), v === c) break;
          c = v;
        }
        c !== null && o.stopPropagation();
      } else
        jf(
          e,
          n,
          o,
          null,
          i
        );
    }
  }
  function Yf(e) {
    return e = Ku(e), Xf(e);
  }
  var _l = null;
  function Xf(e) {
    if (_l = null, e = Za(e), e !== null) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var i = n.tag;
        if (i === 13) {
          if (e = f(n), e !== null) return e;
          e = null;
        } else if (i === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return _l = e, null;
  }
  function iv(e) {
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
        switch (he()) {
          case Ae:
            return 2;
          case oe:
            return 8;
          case pe:
          case Ze:
            return 32;
          case Be:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $f = !1, Kr = null, Jr = null, Wr = null, zs = /* @__PURE__ */ new Map(), Ls = /* @__PURE__ */ new Map(), ea = [], n2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sv(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kr = null;
        break;
      case "dragenter":
      case "dragleave":
        Jr = null;
        break;
      case "mouseover":
      case "mouseout":
        Wr = null;
        break;
      case "pointerover":
      case "pointerout":
        zs.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ls.delete(n.pointerId);
    }
  }
  function Is(e, n, i, o, c, v) {
    return e === null || e.nativeEvent !== v ? (e = {
      blockedOn: n,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: v,
      targetContainers: [c]
    }, n !== null && (n = Ga(n), n !== null && av(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function r2(e, n, i, o, c) {
    switch (n) {
      case "focusin":
        return Kr = Is(
          Kr,
          e,
          n,
          i,
          o,
          c
        ), !0;
      case "dragenter":
        return Jr = Is(
          Jr,
          e,
          n,
          i,
          o,
          c
        ), !0;
      case "mouseover":
        return Wr = Is(
          Wr,
          e,
          n,
          i,
          o,
          c
        ), !0;
      case "pointerover":
        var v = c.pointerId;
        return zs.set(
          v,
          Is(
            zs.get(v) || null,
            e,
            n,
            i,
            o,
            c
          )
        ), !0;
      case "gotpointercapture":
        return v = c.pointerId, Ls.set(
          v,
          Is(
            Ls.get(v) || null,
            e,
            n,
            i,
            o,
            c
          )
        ), !0;
    }
    return !1;
  }
  function ov(e) {
    var n = Za(e.target);
    if (n !== null) {
      var i = u(n);
      if (i !== null) {
        if (n = i.tag, n === 13) {
          if (n = f(i), n !== null) {
            e.blockedOn = n, Q1(e.priority, function() {
              if (i.tag === 13) {
                var o = wn();
                o = Uu(o);
                var c = ri(i, o);
                c !== null && Cn(c, i, o), Gf(i, o);
              }
            });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Sl(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = Yf(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        Qu = o, i.target.dispatchEvent(o), Qu = null;
      } else
        return n = Ga(i), n !== null && av(n), e.blockedOn = i, !1;
      n.shift();
    }
    return !0;
  }
  function lv(e, n, i) {
    Sl(e) && i.delete(n);
  }
  function a2() {
    $f = !1, Kr !== null && Sl(Kr) && (Kr = null), Jr !== null && Sl(Jr) && (Jr = null), Wr !== null && Sl(Wr) && (Wr = null), zs.forEach(lv), Ls.forEach(lv);
  }
  function xl(e, n) {
    e.blockedOn === n && (e.blockedOn = null, $f || ($f = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      a2
    )));
  }
  var El = null;
  function uv(e) {
    El !== e && (El = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        El === e && (El = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n], o = e[n + 1], c = e[n + 2];
          if (typeof o != "function") {
            if (Xf(o || i) === null)
              continue;
            break;
          }
          var v = Ga(i);
          v !== null && (e.splice(n, 3), n -= 3, Yc(
            v,
            {
              pending: !0,
              data: c,
              method: i.method,
              action: o
            },
            o,
            c
          ));
        }
      }
    ));
  }
  function Ps(e) {
    function n(k) {
      return xl(k, e);
    }
    Kr !== null && xl(Kr, e), Jr !== null && xl(Jr, e), Wr !== null && xl(Wr, e), zs.forEach(n), Ls.forEach(n);
    for (var i = 0; i < ea.length; i++) {
      var o = ea[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < ea.length && (i = ea[0], i.blockedOn === null); )
      ov(i), i.blockedOn === null && ea.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var c = i[o], v = i[o + 1], A = c[ln] || null;
        if (typeof v == "function")
          A || uv(i);
        else if (A) {
          var O = null;
          if (v && v.hasAttribute("formAction")) {
            if (c = v, A = v[ln] || null)
              O = A.formAction;
            else if (Xf(c) !== null) continue;
          } else O = A.action;
          typeof O == "function" ? i[o + 1] = O : (i.splice(o, 3), o -= 3), uv(i);
        }
      }
  }
  function Qf(e) {
    this._internalRoot = e;
  }
  wl.prototype.render = Qf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var i = n.current, o = wn();
    nv(i, o, e, n, null, null);
  }, wl.prototype.unmount = Qf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      nv(e.current, 2, null, e, null, null), il(), n[qa] = null;
    }
  };
  function wl(e) {
    this._internalRoot = e;
  }
  wl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Ah();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < ea.length && n !== 0 && n < ea[i].priority; i++) ;
      ea.splice(i, 0, e), i === 0 && ov(e);
    }
  };
  var cv = r.version;
  if (cv !== "19.1.1")
    throw Error(
      s(
        527,
        cv,
        "19.1.1"
      )
    );
  ae.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = p(n), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var i2 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cl.isDisabled && Cl.supportsFiber)
      try {
        ut = Cl.inject(
          i2
        ), et = Cl;
      } catch {
      }
  }
  return Hs.createRoot = function(e, n) {
    if (!l(e)) throw Error(s(299));
    var i = !1, o = "", c = Am, v = Nm, A = Tm, O = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (v = n.onCaughtError), n.onRecoverableError !== void 0 && (A = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (O = n.unstable_transitionCallbacks)), n = ev(
      e,
      1,
      !1,
      null,
      null,
      i,
      o,
      c,
      v,
      A,
      O,
      null
    ), e[qa] = n.current, kf(e), new Qf(n);
  }, Hs.hydrateRoot = function(e, n, i) {
    if (!l(e)) throw Error(s(299));
    var o = !1, c = "", v = Am, A = Nm, O = Tm, k = null, H = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (c = i.identifierPrefix), i.onUncaughtError !== void 0 && (v = i.onUncaughtError), i.onCaughtError !== void 0 && (A = i.onCaughtError), i.onRecoverableError !== void 0 && (O = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (k = i.unstable_transitionCallbacks), i.formState !== void 0 && (H = i.formState)), n = ev(
      e,
      1,
      !0,
      n,
      i ?? null,
      o,
      c,
      v,
      A,
      O,
      k,
      H
    ), n.context = tv(null), i = n.current, o = wn(), o = Uu(o), c = Ir(o), c.callback = null, Pr(i, c, o), i = o, n.current.lanes = i, Zi(n, i), sr(n), e[qa] = n.current, kf(e), new wl(n);
  }, Hs.version = "19.1.1", Hs;
}
var Cv;
function z2() {
  if (Cv) return ed.exports;
  Cv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), ed.exports = R2(), ed.exports;
}
var L2 = z2();
const Av = /* @__PURE__ */ m0(L2);
var I2 = Object.defineProperty, P2 = (t, r, a) => r in t ? I2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, B2 = (t, r, a) => P2(t, r + "", a);
class v0 extends Error {
  constructor(r, a) {
    super(r), B2(this, "data"), this.data = a;
  }
  toString() {
    return this.message;
  }
}
async function U2(t, r) {
  const a = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(t)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const l = a.getRequestHeaders();
  delete l["Content-Type"];
  const u = await fetch("/api/characters/import", {
    method: "POST",
    headers: l,
    body: s,
    cache: "no-cache"
  });
  if (!u.ok)
    throw new v0(u.statusText, u);
  await a.getCharacters();
}
async function F2(t, r) {
  var a;
  const s = SillyTavern.getContext();
  if (!t.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  t == null || delete t.json_data, (a = t?.data) == null || delete a.json_data;
  const l = s.getRequestHeaders(), u = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: l,
    body: JSON.stringify(t),
    cache: "no-cache"
  });
  if (!u.ok) {
    const f = await u.json().catch(() => ({ message: u.statusText }));
    throw new v0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var H2 = Object.defineProperty, q2 = (t, r, a) => r in t ? H2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, Nv = (t, r, a) => q2(t, typeof r != "symbol" ? r + "" : r, a);
class y0 {
  constructor(r, a) {
    Nv(this, "settingsKey"), Nv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = a;
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
    const { strategy: a = "recursive" } = r, s = this.defaultSettings.version, l = this.defaultSettings.formatVersion, u = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: s ?? ""
      },
      formatVersion: {
        changed: !1,
        new: l ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!u)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), f;
    const d = {
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
    if (a === "recursive") {
      let p = function(g, y) {
        let _ = !1;
        for (const b of Object.keys(y))
          g[b] === void 0 ? (g[b] = y[b], _ = !0) : typeof y[b] == "object" && y[b] !== null && (g[b] = g[b] || {}, p(g[b], y[b]) && (_ = !0));
        return _;
      };
      s && u.version !== s && (d.version.changed = !0, d.version.new = s, u.version = s), l && l !== "*" && u.formatVersion !== l && (d.formatVersion.changed = !0, d.formatVersion.new = l, u.formatVersion = l), (p(u, this.defaultSettings) || d.version.changed || d.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(a)) {
      s && !u.version && (u.version = s, d.version.changed = !0, d.version.new = s), l && !u.formatVersion && (u.formatVersion = l, d.formatVersion.changed = !0, d.formatVersion.new = l);
      let p = structuredClone(u), g = u.formatVersion;
      try {
        let y;
        do {
          y = !1;
          let _ = a.find((b) => b.from === g);
          if (_ && _.to > g)
            p = await _.action(p), g = _.to, p.formatVersion = _.to, y = !0;
          else
            for (const b of a)
              if (b.from === "*" && b.to > g && g !== b.to) {
                p = await b.action(p), g = b.to, p.formatVersion = b.to, y = !0;
                break;
              }
        } while (y);
        if (g !== u.formatVersion) {
          d.formatVersion.changed = !0, d.formatVersion.new = g;
          const _ = this.defaultSettings.version;
          _ && (p.version = _);
        }
        if (d.formatVersion.changed) {
          for (const _ of Object.keys(u))
            delete u[_];
          Object.assign(u, p), this.saveSettings();
        }
      } catch (y) {
        throw console.error("Failed to apply version changes:", y), new Error(`Version migration failed: ${y instanceof Error ? y.message : y}`, {
          cause: y
        });
      }
    }
    return d.newSettings = u, d;
  }
  getSettings() {
    return SillyTavern.getContext().extensionSettings[this.settingsKey];
  }
  updateSetting(r, a) {
    SillyTavern.getContext().extensionSettings[this.settingsKey][r] = a, this.saveSettings();
  }
  saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
  }
  resetSettings() {
    SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings();
  }
}
function Dr(t) {
  return Array.isArray ? Array.isArray(t) : S0(t) === "[object Array]";
}
function Z2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function G2(t) {
  return t == null ? "" : Z2(t);
}
function or(t) {
  return typeof t == "string";
}
function b0(t) {
  return typeof t == "number";
}
function V2(t) {
  return t === !0 || t === !1 || Y2(t) && S0(t) == "[object Boolean]";
}
function _0(t) {
  return typeof t == "object";
}
function Y2(t) {
  return _0(t) && t !== null;
}
function On(t) {
  return t != null;
}
function ad(t) {
  return !t.trim().length;
}
function S0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const X2 = "Incorrect 'index' type", $2 = (t) => `Invalid value for key ${t}`, Q2 = (t) => `Pattern length exceeds max of ${t}.`, K2 = (t) => `Missing ${t} property in key`, J2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Tv = Object.prototype.hasOwnProperty;
class W2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let a = 0;
    r.forEach((s) => {
      let l = x0(s);
      this._keys.push(l), this._keyMap[l.id] = l, a += l.weight;
    }), this._keys.forEach((s) => {
      s.weight /= a;
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
function x0(t) {
  let r = null, a = null, s = null, l = 1, u = null;
  if (or(t) || Dr(t))
    s = t, r = Ov(t), a = Od(t);
  else {
    if (!Tv.call(t, "name"))
      throw new Error(K2("name"));
    const f = t.name;
    if (s = f, Tv.call(t, "weight") && (l = t.weight, l <= 0))
      throw new Error(J2(f));
    r = Ov(f), a = Od(f), u = t.getFn;
  }
  return { path: r, id: a, weight: l, src: s, getFn: u };
}
function Ov(t) {
  return Dr(t) ? t : t.split(".");
}
function Od(t) {
  return Dr(t) ? t.join(".") : t;
}
function eS(t, r) {
  let a = [], s = !1;
  const l = (u, f, d) => {
    if (On(u))
      if (!f[d])
        a.push(u);
      else {
        let p = f[d];
        const g = u[p];
        if (!On(g))
          return;
        if (d === f.length - 1 && (or(g) || b0(g) || V2(g)))
          a.push(G2(g));
        else if (Dr(g)) {
          s = !0;
          for (let y = 0, _ = g.length; y < _; y += 1)
            l(g[y], f, d + 1);
        } else f.length && l(g, f, d + 1);
      }
  };
  return l(t, or(r) ? r.split(".") : r, 0), s ? a : a[0];
}
const tS = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, nS = {
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
}, rS = {
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
}, aS = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: eS,
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
  ...nS,
  ...tS,
  ...rS,
  ...aS
};
const iS = /[^ ]+/g;
function sS(t = 1, r = 3) {
  const a = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(l) {
      const u = l.match(iS).length;
      if (a.has(u))
        return a.get(u);
      const f = 1 / Math.pow(u, 0.5 * t), d = parseFloat(Math.round(f * s) / s);
      return a.set(u, d), d;
    },
    clear() {
      a.clear();
    }
  };
}
class th {
  constructor({
    getFn: r = Me.getFn,
    fieldNormWeight: a = Me.fieldNormWeight
  } = {}) {
    this.norm = sS(a, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((a, s) => {
      this._keysMap[a.id] = s;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, or(this.docs[0]) ? this.docs.forEach((r, a) => {
      this._addString(r, a);
    }) : this.docs.forEach((r, a) => {
      this._addObject(r, a);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const a = this.size();
    or(r) ? this._addString(r, a) : this._addObject(r, a);
  }
  // Removes the doc at the specified index of the index
  removeAt(r) {
    this.records.splice(r, 1);
    for (let a = r, s = this.size(); a < s; a += 1)
      this.records[a].i -= 1;
  }
  getValueForItemAtKeyId(r, a) {
    return r[this._keysMap[a]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, a) {
    if (!On(r) || ad(r))
      return;
    let s = {
      v: r,
      i: a,
      n: this.norm.get(r)
    };
    this.records.push(s);
  }
  _addObject(r, a) {
    let s = { i: a, $: {} };
    this.keys.forEach((l, u) => {
      let f = l.getFn ? l.getFn(r) : this.getFn(r, l.path);
      if (On(f)) {
        if (Dr(f)) {
          let d = [];
          const p = [{ nestedArrIndex: -1, value: f }];
          for (; p.length; ) {
            const { nestedArrIndex: g, value: y } = p.pop();
            if (On(y))
              if (or(y) && !ad(y)) {
                let _ = {
                  v: y,
                  i: g,
                  n: this.norm.get(y)
                };
                d.push(_);
              } else Dr(y) && y.forEach((_, b) => {
                p.push({
                  nestedArrIndex: b,
                  value: _
                });
              });
          }
          s.$[u] = d;
        } else if (or(f) && !ad(f)) {
          let d = {
            v: f,
            n: this.norm.get(f)
          };
          s.$[u] = d;
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
function E0(t, r, { getFn: a = Me.getFn, fieldNormWeight: s = Me.fieldNormWeight } = {}) {
  const l = new th({ getFn: a, fieldNormWeight: s });
  return l.setKeys(t.map(x0)), l.setSources(r), l.create(), l;
}
function oS(t, { getFn: r = Me.getFn, fieldNormWeight: a = Me.fieldNormWeight } = {}) {
  const { keys: s, records: l } = t, u = new th({ getFn: r, fieldNormWeight: a });
  return u.setKeys(s), u.setIndexRecords(l), u;
}
function Al(t, {
  errors: r = 0,
  currentLocation: a = 0,
  expectedLocation: s = 0,
  distance: l = Me.distance,
  ignoreLocation: u = Me.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (u)
    return f;
  const d = Math.abs(s - a);
  return l ? f + d / l : d ? 1 : f;
}
function lS(t = [], r = Me.minMatchCharLength) {
  let a = [], s = -1, l = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let d = t[u];
    d && s === -1 ? s = u : !d && s !== -1 && (l = u - 1, l - s + 1 >= r && a.push([s, l]), s = -1);
  }
  return t[u - 1] && u - s >= r && a.push([s, u - 1]), a;
}
const Ra = 32;
function uS(t, r, a, {
  location: s = Me.location,
  distance: l = Me.distance,
  threshold: u = Me.threshold,
  findAllMatches: f = Me.findAllMatches,
  minMatchCharLength: d = Me.minMatchCharLength,
  includeMatches: p = Me.includeMatches,
  ignoreLocation: g = Me.ignoreLocation
} = {}) {
  if (r.length > Ra)
    throw new Error(Q2(Ra));
  const y = r.length, _ = t.length, b = Math.max(0, Math.min(s, _));
  let m = u, h = b;
  const x = d > 1 || p, w = x ? Array(_) : [];
  let T;
  for (; (T = t.indexOf(r, h)) > -1; ) {
    let j = Al(r, {
      currentLocation: T,
      expectedLocation: b,
      distance: l,
      ignoreLocation: g
    });
    if (m = Math.min(j, m), h = T + y, x) {
      let L = 0;
      for (; L < y; )
        w[T + L] = 1, L += 1;
    }
  }
  h = -1;
  let C = [], D = 1, E = y + _;
  const N = 1 << y - 1;
  for (let j = 0; j < y; j += 1) {
    let L = 0, Y = E;
    for (; L < Y; )
      Al(r, {
        errors: j,
        currentLocation: b + Y,
        expectedLocation: b,
        distance: l,
        ignoreLocation: g
      }) <= m ? L = Y : E = Y, Y = Math.floor((E - L) / 2 + L);
    E = Y;
    let I = Math.max(1, b - Y + 1), q = f ? _ : Math.min(b + Y, _) + y, $ = Array(q + 2);
    $[q + 1] = (1 << j) - 1;
    for (let de = q; de >= I; de -= 1) {
      let _e = de - 1, B = a[t.charAt(_e)];
      if (x && (w[_e] = +!!B), $[de] = ($[de + 1] << 1 | 1) & B, j && ($[de] |= (C[de + 1] | C[de]) << 1 | 1 | C[de + 1]), $[de] & N && (D = Al(r, {
        errors: j,
        currentLocation: _e,
        expectedLocation: b,
        distance: l,
        ignoreLocation: g
      }), D <= m)) {
        if (m = D, h = _e, h <= b)
          break;
        I = Math.max(1, 2 * b - h);
      }
    }
    if (Al(r, {
      errors: j + 1,
      currentLocation: b,
      expectedLocation: b,
      distance: l,
      ignoreLocation: g
    }) > m)
      break;
    C = $;
  }
  const M = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (x) {
    const j = lS(w, d);
    j.length ? p && (M.indices = j) : M.isMatch = !1;
  }
  return M;
}
function cS(t) {
  let r = {};
  for (let a = 0, s = t.length; a < s; a += 1) {
    const l = t.charAt(a);
    r[l] = (r[l] || 0) | 1 << s - a - 1;
  }
  return r;
}
const vu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class w0 {
  constructor(r, {
    location: a = Me.location,
    threshold: s = Me.threshold,
    distance: l = Me.distance,
    includeMatches: u = Me.includeMatches,
    findAllMatches: f = Me.findAllMatches,
    minMatchCharLength: d = Me.minMatchCharLength,
    isCaseSensitive: p = Me.isCaseSensitive,
    ignoreDiacritics: g = Me.ignoreDiacritics,
    ignoreLocation: y = Me.ignoreLocation
  } = {}) {
    if (this.options = {
      location: a,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: d,
      isCaseSensitive: p,
      ignoreDiacritics: g,
      ignoreLocation: y
    }, r = p ? r : r.toLowerCase(), r = g ? vu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (m, h) => {
      this.chunks.push({
        pattern: m,
        alphabet: cS(m),
        startIndex: h
      });
    }, b = this.pattern.length;
    if (b > Ra) {
      let m = 0;
      const h = b % Ra, x = b - h;
      for (; m < x; )
        _(this.pattern.substr(m, Ra), m), m += Ra;
      if (h) {
        const w = b - Ra;
        _(this.pattern.substr(w), w);
      }
    } else
      _(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: a, ignoreDiacritics: s, includeMatches: l } = this.options;
    if (r = a ? r : r.toLowerCase(), r = s ? vu(r) : r, this.pattern === r) {
      let x = {
        isMatch: !0,
        score: 0
      };
      return l && (x.indices = [[0, r.length - 1]]), x;
    }
    const {
      location: u,
      distance: f,
      threshold: d,
      findAllMatches: p,
      minMatchCharLength: g,
      ignoreLocation: y
    } = this.options;
    let _ = [], b = 0, m = !1;
    this.chunks.forEach(({ pattern: x, alphabet: w, startIndex: T }) => {
      const { isMatch: C, score: D, indices: E } = uS(r, x, w, {
        location: u + T,
        distance: f,
        threshold: d,
        findAllMatches: p,
        minMatchCharLength: g,
        includeMatches: l,
        ignoreLocation: y
      });
      C && (m = !0), b += D, C && E && (_ = [..._, ...E]);
    });
    let h = {
      isMatch: m,
      score: m ? b / this.chunks.length : 1
    };
    return m && l && (h.indices = _), h;
  }
}
class la {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return Dv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return Dv(r, this.singleRegex);
  }
  search() {
  }
}
function Dv(t, r) {
  const a = t.match(r);
  return a ? a[1] : null;
}
class fS extends la {
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
    const a = r === this.pattern;
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class dS extends la {
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
class hS extends la {
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
    const a = r.startsWith(this.pattern);
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class pS extends la {
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
    const a = !r.startsWith(this.pattern);
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class mS extends la {
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
    const a = r.endsWith(this.pattern);
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [r.length - this.pattern.length, r.length - 1]
    };
  }
}
class gS extends la {
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
    const a = !r.endsWith(this.pattern);
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class C0 extends la {
  constructor(r, {
    location: a = Me.location,
    threshold: s = Me.threshold,
    distance: l = Me.distance,
    includeMatches: u = Me.includeMatches,
    findAllMatches: f = Me.findAllMatches,
    minMatchCharLength: d = Me.minMatchCharLength,
    isCaseSensitive: p = Me.isCaseSensitive,
    ignoreDiacritics: g = Me.ignoreDiacritics,
    ignoreLocation: y = Me.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new w0(r, {
      location: a,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: d,
      isCaseSensitive: p,
      ignoreDiacritics: g,
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
class A0 extends la {
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
    let a = 0, s;
    const l = [], u = this.pattern.length;
    for (; (s = r.indexOf(this.pattern, a)) > -1; )
      a = s + u, l.push([s, a - 1]);
    const f = !!l.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: l
    };
  }
}
const Dd = [
  fS,
  A0,
  hS,
  pS,
  gS,
  mS,
  dS,
  C0
], Mv = Dd.length, vS = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, yS = "|";
function bS(t, r = {}) {
  return t.split(yS).map((a) => {
    let s = a.trim().split(vS).filter((u) => u && !!u.trim()), l = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const d = s[u];
      let p = !1, g = -1;
      for (; !p && ++g < Mv; ) {
        const y = Dd[g];
        let _ = y.isMultiMatch(d);
        _ && (l.push(new y(_, r)), p = !0);
      }
      if (!p)
        for (g = -1; ++g < Mv; ) {
          const y = Dd[g];
          let _ = y.isSingleMatch(d);
          if (_) {
            l.push(new y(_, r));
            break;
          }
        }
    }
    return l;
  });
}
const _S = /* @__PURE__ */ new Set([C0.type, A0.type]);
class SS {
  constructor(r, {
    isCaseSensitive: a = Me.isCaseSensitive,
    ignoreDiacritics: s = Me.ignoreDiacritics,
    includeMatches: l = Me.includeMatches,
    minMatchCharLength: u = Me.minMatchCharLength,
    ignoreLocation: f = Me.ignoreLocation,
    findAllMatches: d = Me.findAllMatches,
    location: p = Me.location,
    threshold: g = Me.threshold,
    distance: y = Me.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: a,
      ignoreDiacritics: s,
      includeMatches: l,
      minMatchCharLength: u,
      findAllMatches: d,
      ignoreLocation: f,
      location: p,
      threshold: g,
      distance: y
    }, r = a ? r : r.toLowerCase(), r = s ? vu(r) : r, this.pattern = r, this.query = bS(this.pattern, this.options);
  }
  static condition(r, a) {
    return a.useExtendedSearch;
  }
  searchIn(r) {
    const a = this.query;
    if (!a)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: s, isCaseSensitive: l, ignoreDiacritics: u } = this.options;
    r = l ? r : r.toLowerCase(), r = u ? vu(r) : r;
    let f = 0, d = [], p = 0;
    for (let g = 0, y = a.length; g < y; g += 1) {
      const _ = a[g];
      d.length = 0, f = 0;
      for (let b = 0, m = _.length; b < m; b += 1) {
        const h = _[b], { isMatch: x, indices: w, score: T } = h.search(r);
        if (x) {
          if (f += 1, p += T, s) {
            const C = h.constructor.type;
            _S.has(C) ? d = [...d, ...w] : d.push(w);
          }
        } else {
          p = 0, f = 0, d.length = 0;
          break;
        }
      }
      if (f) {
        let b = {
          isMatch: !0,
          score: p / f
        };
        return s && (b.indices = d), b;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Md = [];
function xS(...t) {
  Md.push(...t);
}
function kd(t, r) {
  for (let a = 0, s = Md.length; a < s; a += 1) {
    let l = Md[a];
    if (l.condition(t, r))
      return new l(t, r);
  }
  return new w0(t, r);
}
const yu = {
  AND: "$and",
  OR: "$or"
}, jd = {
  PATH: "$path",
  PATTERN: "$val"
}, Rd = (t) => !!(t[yu.AND] || t[yu.OR]), ES = (t) => !!t[jd.PATH], wS = (t) => !Dr(t) && _0(t) && !Rd(t), kv = (t) => ({
  [yu.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function N0(t, r, { auto: a = !0 } = {}) {
  const s = (l) => {
    let u = Object.keys(l);
    const f = ES(l);
    if (!f && u.length > 1 && !Rd(l))
      return s(kv(l));
    if (wS(l)) {
      const p = f ? l[jd.PATH] : u[0], g = f ? l[jd.PATTERN] : l[p];
      if (!or(g))
        throw new Error($2(p));
      const y = {
        keyId: Od(p),
        pattern: g
      };
      return a && (y.searcher = kd(g, r)), y;
    }
    let d = {
      children: [],
      operator: u[0]
    };
    return u.forEach((p) => {
      const g = l[p];
      Dr(g) && g.forEach((y) => {
        d.children.push(s(y));
      });
    }), d;
  };
  return Rd(t) || (t = kv(t)), s(t);
}
function CS(t, { ignoreFieldNorm: r = Me.ignoreFieldNorm }) {
  t.forEach((a) => {
    let s = 1;
    a.matches.forEach(({ key: l, norm: u, score: f }) => {
      const d = l ? l.weight : null;
      s *= Math.pow(
        f === 0 && d ? Number.EPSILON : f,
        (d || 1) * (r ? 1 : u)
      );
    }), a.score = s;
  });
}
function AS(t, r) {
  const a = t.matches;
  r.matches = [], On(a) && a.forEach((s) => {
    if (!On(s.indices) || !s.indices.length)
      return;
    const { indices: l, value: u } = s;
    let f = {
      indices: l,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function NS(t, r) {
  r.score = t.score;
}
function TS(t, r, {
  includeMatches: a = Me.includeMatches,
  includeScore: s = Me.includeScore
} = {}) {
  const l = [];
  return a && l.push(AS), s && l.push(NS), t.map((u) => {
    const { idx: f } = u, d = {
      item: r[f],
      refIndex: f
    };
    return l.length && l.forEach((p) => {
      p(u, d);
    }), d;
  });
}
class Hi {
  constructor(r, a = {}, s) {
    this.options = { ...Me, ...a }, this.options.useExtendedSearch, this._keyStore = new W2(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, a) {
    if (this._docs = r, a && !(a instanceof th))
      throw new Error(X2);
    this._myIndex = a || E0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    On(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const a = [];
    for (let s = 0, l = this._docs.length; s < l; s += 1) {
      const u = this._docs[s];
      r(u, s) && (this.removeAt(s), s -= 1, l -= 1, a.push(u));
    }
    return a;
  }
  removeAt(r) {
    this._docs.splice(r, 1), this._myIndex.removeAt(r);
  }
  getIndex() {
    return this._myIndex;
  }
  search(r, { limit: a = -1 } = {}) {
    const {
      includeMatches: s,
      includeScore: l,
      shouldSort: u,
      sortFn: f,
      ignoreFieldNorm: d
    } = this.options;
    let p = or(r) ? or(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return CS(p, { ignoreFieldNorm: d }), u && p.sort(f), b0(a) && a > -1 && (p = p.slice(0, a)), TS(p, this._docs, {
      includeMatches: s,
      includeScore: l
    });
  }
  _searchStringList(r) {
    const a = kd(r, this.options), { records: s } = this._myIndex, l = [];
    return s.forEach(({ v: u, i: f, n: d }) => {
      if (!On(u))
        return;
      const { isMatch: p, score: g, indices: y } = a.searchIn(u);
      p && l.push({
        item: u,
        idx: f,
        matches: [{ score: g, value: u, norm: d, indices: y }]
      });
    }), l;
  }
  _searchLogical(r) {
    const a = N0(r, this.options), s = (d, p, g) => {
      if (!d.children) {
        const { keyId: _, searcher: b } = d, m = this._findMatches({
          key: this._keyStore.get(_),
          value: this._myIndex.getValueForItemAtKeyId(p, _),
          searcher: b
        });
        return m && m.length ? [
          {
            idx: g,
            item: p,
            matches: m
          }
        ] : [];
      }
      const y = [];
      for (let _ = 0, b = d.children.length; _ < b; _ += 1) {
        const m = d.children[_], h = s(m, p, g);
        if (h.length)
          y.push(...h);
        else if (d.operator === yu.AND)
          return [];
      }
      return y;
    }, l = this._myIndex.records, u = {}, f = [];
    return l.forEach(({ $: d, i: p }) => {
      if (On(d)) {
        let g = s(a, d, p);
        g.length && (u[p] || (u[p] = { idx: p, item: d, matches: [] }, f.push(u[p])), g.forEach(({ matches: y }) => {
          u[p].matches.push(...y);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const a = kd(r, this.options), { keys: s, records: l } = this._myIndex, u = [];
    return l.forEach(({ $: f, i: d }) => {
      if (!On(f))
        return;
      let p = [];
      s.forEach((g, y) => {
        p.push(
          ...this._findMatches({
            key: g,
            value: f[y],
            searcher: a
          })
        );
      }), p.length && u.push({
        idx: d,
        item: f,
        matches: p
      });
    }), u;
  }
  _findMatches({ key: r, value: a, searcher: s }) {
    if (!On(a))
      return [];
    let l = [];
    if (Dr(a))
      a.forEach(({ v: u, i: f, n: d }) => {
        if (!On(u))
          return;
        const { isMatch: p, score: g, indices: y } = s.searchIn(u);
        p && l.push({
          score: g,
          key: r,
          value: u,
          idx: f,
          norm: d,
          indices: y
        });
      });
    else {
      const { v: u, n: f } = a, { isMatch: d, score: p, indices: g } = s.searchIn(u);
      d && l.push({ score: p, key: r, value: u, norm: f, indices: g });
    }
    return l;
  }
}
Hi.version = "7.1.0";
Hi.createIndex = E0;
Hi.parseIndex = oS;
Hi.config = Me;
Hi.parseQuery = N0;
xS(SS);
var OS = Object.defineProperty, DS = (t, r, a) => r in t ? OS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, MS = (t, r, a) => DS(t, r + "", a);
let kS = class {
  constructor() {
    MS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
  }
  async abortRequest(r) {
    var a;
    const s = this.requestMap.get(r);
    if (s) {
      if (s.abortController)
        try {
          s.abortController.abort();
        } catch {
        }
      (a = s.options) != null && a.onFinish && await s.options.onFinish(r), this.requestMap.delete(r);
    }
  }
  /**
   * @returns return value is not important because request would be finished anyway. So use "options".
   */
  async generateRequest(r, a) {
    var s;
    const l = SillyTavern.getContext(), u = l.uuidv4(), f = ((s = r?.custom) == null ? void 0 : s.stream) ?? !1;
    if (this.requestMap.set(u, {
      abortController: a?.abortController,
      isStream: f,
      options: a
    }), f)
      try {
        const d = await l.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        a != null && a.onStart && await a.onStart(u);
        let p;
        for await (const g of d())
          p = g, a != null && a.onEntry && await a.onEntry(u, g);
        a != null && a.onFinish && await a.onFinish(u, p);
      } catch (d) {
        a != null && a.onFinish && await a.onFinish(u, void 0, d);
      } finally {
        this.requestMap.delete(u);
      }
    else
      try {
        a != null && a.onStart && await a.onStart(u);
        const d = await l.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        this.requestMap.get(u) && (a != null && a.onEntry && await a.onEntry(u, d), a != null && a.onFinish && await a.onFinish(u, d));
      } catch (d) {
        a != null && a.onFinish && await a.onFinish(u, void 0, d);
      } finally {
        this.requestMap.delete(u);
      }
    return u;
  }
  getActiveRequest(r) {
    var a;
    return (a = this.requestMap.get(r)) == null ? void 0 : a.abortController;
  }
  getAllActiveRequests() {
    const r = /* @__PURE__ */ new Map();
    for (const [a, s] of this.requestMap)
      r.set(a, s.abortController);
    return r;
  }
};
async function jS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function ve(t, r, { escapeHtml: a = !0 } = {}) {
  await jS("echo", { severity: t, escapeHtml: (!!a).toString() }, r);
}
function id(t) {
  return c2(t);
}
function jv(t, r) {
  return l2(t, r);
}
function Nl(t, r, a) {
  return u2(t, r, a);
}
function RS(t, r, a) {
  return g2(t, r, a);
}
function zS(t, r) {
  return v2(t, r);
}
function LS(t, {
  customStoryString: r,
  customInstructSettings: a
} = {}) {
  return o2(t, { customStoryString: r, customInstructSettings: a });
}
function Oa(t) {
  return E2(t);
}
function IS() {
  return {
    prompt: Bs[Us.prompt],
    interval: Bs[Us.interval],
    position: Bs[Us.position],
    depth: Bs[Us.depth],
    role: Bs[Us.role]
  };
}
function PS(t, r) {
  return C2(t, r);
}
function BS({
  name2: t,
  charDescription: r,
  charPersonality: a,
  Scenario: s,
  worldInfoBefore: l,
  worldInfoAfter: u,
  bias: f,
  type: d,
  quietPrompt: p,
  quietImage: g,
  extensionPrompts: y,
  cyclePrompt: _,
  systemPromptOverride: b,
  jailbreakPromptOverride: m,
  personaDescription: h,
  messages: x,
  messageExamples: w
}, T) {
  return w2(
    {
      name2: t,
      charDescription: r,
      charPersonality: a,
      Scenario: s,
      worldInfoBefore: l,
      worldInfoAfter: u,
      bias: f,
      type: d,
      quietPrompt: p,
      quietImage: g,
      cyclePrompt: _,
      systemPromptOverride: b,
      jailbreakPromptOverride: m,
      personaDescription: h,
      extensionPrompts: y,
      messages: x,
      messageExamples: w
    },
    T
  );
}
function US(t) {
  return b2(t);
}
function FS(t) {
  return _2(t);
}
function HS(t, r, {
  characterOverride: a,
  isMarkdown: s,
  isPrompt: l,
  isEdit: u,
  depth: f
}) {
  return A2(t, r, { characterOverride: a, isMarkdown: s, isPrompt: l, isEdit: u, depth: f });
}
async function qS(t, r) {
  return await y2(t, r);
}
function Rv(t, {
  wiFormat: r
} = {}) {
  return S2(t, { wiFormat: r });
}
function qs(t) {
  return x2(t);
}
function ZS(t, r) {
  return h2(t, r);
}
class GS {
  /**
   * Encodes a string into a sequence of tokens using a simple heuristic.
   * This is a placeholder for a real tokenizer.
   */
  encode(r) {
    const a = Math.ceil(r.length / 4);
    return new Array(a).fill(" ");
  }
  /**
   * Decodes a sequence of tokens back into a string.
   * This is a placeholder and doesn't actually decode.
   */
  decode(r) {
    return r.join("");
  }
}
var VS = Object.defineProperty, YS = (t, r, a) => r in t ? VS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, Tl = (t, r, a) => YS(t, typeof r != "symbol" ? r + "" : r, a);
class XS {
  constructor(r) {
    Tl(this, "messages", []), Tl(this, "tokenizer"), Tl(this, "maxContext"), Tl(this, "currentTokenCount", 0), this.tokenizer = new GS(), this.maxContext = r;
  }
  getTokenCount(r) {
    var a, s;
    return r.content ? ((s = (a = r.source) == null ? void 0 : a.extra) == null ? void 0 : s.token_count) ?? this.tokenizer.encode(r.content).length : 0;
  }
  canFit(r) {
    return this.currentTokenCount + this.getTokenCount(r) <= this.maxContext;
  }
  add(r) {
    if (!r.content) return !0;
    const a = this.getTokenCount(r);
    return this.currentTokenCount + a > this.maxContext ? !1 : (this.messages.push(r), this.currentTokenCount += a, !0);
  }
  addFront(r) {
    if (!r.content) return !0;
    const a = this.getTokenCount(r);
    return this.currentTokenCount + a > this.maxContext ? !1 : (this.messages.unshift(r), this.currentTokenCount += a, !0);
  }
  addMany(r) {
    const a = r.filter((d) => d.content), s = a.map((d) => this.getTokenCount(d)), l = s.reduce((d, p) => d + p, 0);
    if (this.currentTokenCount + l <= this.maxContext)
      return this.messages.push(...a), this.currentTokenCount += l, !0;
    let u = 0;
    const f = [];
    for (let d = a.length - 1; d >= 0; d--) {
      const p = a[d], g = s[d];
      if (this.currentTokenCount + u + g <= this.maxContext)
        f.unshift(p), u += g;
      else
        break;
    }
    return f.length > 0 && (this.messages.push(...f), this.currentTokenCount += u), f.length === a.length;
  }
  insert(r, a) {
    if (!a.content) return !0;
    const s = this.getTokenCount(a);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.splice(r, 0, a), this.currentTokenCount += s, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function T0(t, {
  targetCharacterId: r,
  presetName: a,
  instructName: s,
  contextName: l,
  syspromptName: u,
  maxContext: f,
  includeNames: d,
  ignoreCharacterFields: p,
  ignoreAuthorNote: g,
  ignoreWorldInfo: y,
  messageIndexesBetween: _
} = {}) {
  var b, m, h, x, w, T, C, D, E, N, M, j, L, Y;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const I = SillyTavern.getContext();
  let { description: q, personality: $, persona: fe, scenario: de, mesExamples: _e, system: B, jailbreak: ae } = p ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : I.getCharacterCardFields({
    chid: r
  });
  const me = t === "textgenerationwebui" ? (b = I.getPresetManager("instruct")) == null ? void 0 : b.getCompletionPresetByName(s) : void 0, Le = !!(me != null && me.enabled);
  let R = jv(_e, Le);
  function J() {
    var oe, pe;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !a)
      return id();
    if (typeof f == "number")
      return f;
    let Ze;
    if (t === "textgenerationwebui") {
      const Be = (oe = I.getPresetManager("textgenerationwebui")) == null ? void 0 : oe.getCompletionPresetByName(a);
      Ze = Be?.max_length;
    } else {
      const Be = (pe = I.getPresetManager("openai")) == null ? void 0 : pe.getCompletionPresetByName(a);
      Ze = Be?.openai_max_context;
    }
    return typeof Ze == "number" ? Ze : id();
  }
  let ie = [];
  const se = J();
  if (se <= 0)
    return { result: [], warnings: ie };
  const le = new XS(se), je = I.ToolManager.isToolCallingSupported(), X = _?.start ?? 0, xe = _ != null && _.end ? _.end + 1 : void 0;
  let Ee = X === -1 && xe === 0 ? [] : I.chat.slice(X, xe).filter((oe) => {
    var pe;
    return !oe.is_system || je && Array.isArray((pe = oe.extra) == null ? void 0 : pe.tool_invocations);
  });
  Ee = await Promise.all(
    Ee.map(async (oe, pe) => {
      var Ze, Be;
      let Xe = oe.mes, Mn = oe.is_user ? hv.USER_INPUT : hv.AI_OUTPUT, ut = { isPrompt: !0, depth: Ee.length - pe - 1 }, et = HS(Xe, Mn, ut);
      return et = await qS(oe, et), (Ze = oe?.extra) != null && Ze.append_title && (Be = oe?.extra) != null && Be.title && (et = `${et}

${oe.extra.title}`), {
        ...oe,
        mes: et,
        index: pe
      };
    })
  );
  const Ye = Ee.map((oe) => p2 ? `${oe.name}: ${oe.mes}` : oe.mes).reverse(), { worldInfoString: We, worldInfoBefore: ke, worldInfoAfter: nt, worldInfoExamples: on, worldInfoDepth: Tt, anBefore: U, anAfter: W } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await I.getWorldInfoPrompt(Ye, se, !1);
  for (const oe of on) {
    const pe = oe.content;
    if (pe.length === 0)
      continue;
    const Ze = Nl(pe, Nr, na), Be = jv(Ze, Le);
    oe.position === m2.before ? R.unshift(...Be) : R.push(...Be);
  }
  function re() {
    const oe = [];
    for (let pe = Ee.length - 1; pe >= 0; pe--) {
      const Ze = Ee[pe], Be = Ze.name === "System" && !Ze.is_user ? "system" : Ze.is_user ? "user" : "assistant";
      oe.unshift({
        role: Be,
        content: d && Be != "system" ? `${Ze.name}: ${Ze.mes}` : Ze.mes,
        source: Ze
      });
    }
    le.addMany(oe);
  }
  if (t === "textgenerationwebui") {
    const oe = [...R];
    R && (R = RS(R, Nr, na));
    const pe = (m = I.getPresetManager("sysprompt")) == null ? void 0 : m.getCompletionPresetByName(u);
    pe && (B = I.powerUserSettings.prefer_character_prompt && B ? B : Nl(pe.content, Nr, na), B = Le ? zS(
      I.substituteParams(B, Nr, na, pe.content),
      me
    ) : B);
    const Ze = {
      description: q,
      personality: $,
      persona: I.powerUserSettings.persona_description_position == fv.IN_PROMPT ? fe : "",
      scenario: de,
      system: B,
      char: na,
      user: Nr,
      wiBefore: ke,
      wiAfter: nt,
      loreBefore: ke,
      loreAfter: nt,
      mesExamples: R.join(""),
      mesExamplesRaw: oe.join("")
    }, Be = (h = I.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(l);
    let Xe = LS(Ze, {
      customInstructSettings: me,
      customStoryString: Be?.story_string
    });
    Xe && le.add({ role: "system", content: Xe, ignoreInstruct: !0 }), re();
  } else {
    let oe = function(ct) {
      const pt = ye.find((tr) => tr.identifier === ct);
      if (pt)
        return pt;
      const Gn = Xe.prompts.find((tr) => tr.identifier === ct);
      if (Gn)
        return Gn;
    }, pe = US(Ee), Ze = FS(R);
    async function Be() {
      let [ct, pt] = await BS(
        {
          name2: na,
          charDescription: q,
          charPersonality: $,
          Scenario: de,
          worldInfoBefore: ke,
          worldInfoAfter: nt,
          extensionPrompts: I.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: B,
          jailbreakPromptOverride: ae,
          personaDescription: fe,
          messages: pe,
          messageExamples: Ze
        },
        !1
      );
      le.addMany(ct);
    }
    if (!a)
      return ie.push("No preset name provided. Using default preset."), await Be(), { result: le.getMessages(), warnings: ie };
    const Xe = (x = I.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(a);
    if (!Xe)
      return console.warn(`Preset not found: ${a}. Using current preset.`), ie.push(`Preset not found: ${a}. Using current preset.`), Be(), { result: le.getMessages(), warnings: ie };
    let Mn = (w = Xe.prompt_order) == null ? void 0 : w.find((ct) => ct.character_id === Jt);
    if (!Mn && Xe.prompt_order && Xe.prompt_order.length > 0 && (Mn = Xe.prompt_order[Xe.prompt_order.length - 1]), !Mn)
      return console.warn(`No prompt order found for preset: ${a}. Using current preset.`), ie.push(`No prompt order found for preset: ${a}. Using current preset.`), Be(), { result: le.getMessages(), warnings: ie };
    const ut = de && Xe.scenario_format ? I.substituteParams(Xe.scenario_format) : "", et = $ && Xe.personality_format ? I.substituteParams(Xe.personality_format) : "", tn = I.substituteParams(Xe.group_nudge_prompt), ne = Xe.impersonation_prompt ? I.substituteParams(Xe.impersonation_prompt) : "", ye = [];
    y || ye.push(
      {
        role: "system",
        content: Rv(ke, { wiFormat: Xe.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Rv(nt, { wiFormat: Xe.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || ye.push(
      { role: "system", content: q, identifier: "charDescription" },
      { role: "system", content: et, identifier: "charPersonality" },
      { role: "system", content: ut, identifier: "scenario" }
    ), ye.push(
      { role: "system", content: ne, identifier: "impersonate" },
      { role: "system", content: tn, identifier: "groupNudge" }
    );
    const Ue = I.extensionPrompts["1_memory"];
    Ue && Ue.value && ye.push({
      role: Oa(Ue.role),
      content: Ue.value,
      identifier: "summary",
      position: qs(Ue.position)
    });
    const ge = I.extensionPrompts["2_floating_prompt"];
    !g && ge && ge.value && ye.push({
      role: Oa(ge.role),
      content: ge.value,
      identifier: "authorsNote",
      position: qs(ge.position)
    });
    const Ke = I.extensionPrompts["3_vectors"];
    Ke && Ke.value && ye.push({
      role: "system",
      content: Ke.value,
      identifier: "vectorsMemory",
      position: qs(Ke.position)
    });
    const Qe = I.extensionPrompts["4_vectors_data_bank"];
    Qe && Qe.value && ye.push({
      role: Oa(Qe.role),
      content: Qe.value,
      identifier: "vectorsDataBank",
      position: qs(Qe.position)
    });
    const ze = I.extensionPrompts.chromadb;
    ze && ze.value && ye.push({
      role: "system",
      content: ze.value,
      identifier: "smartContext",
      position: qs(ze.position)
    }), !p && I.powerUserSettings.persona_description && I.powerUserSettings.persona_description_position === fv.IN_PROMPT && ye.push({
      role: "system",
      content: I.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Mn.order.forEach((ct) => {
      if (!ct.enabled)
        return;
      const pt = oe(ct.identifier);
      if (pt && pt.content) {
        le.add({
          role: pt.role ?? "system",
          content: I.substituteParams(pt.content)
        });
        return;
      }
      ct.identifier === "chatHistory" && re();
    });
  }
  const he = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const oe in I.extensionPrompts)
    if (Object.hasOwn(I.extensionPrompts, oe)) {
      const pe = I.extensionPrompts[oe];
      if (he.includes(oe) || !I.extensionPrompts[oe].value || ![Ta.BEFORE_PROMPT, Ta.IN_PROMPT].includes(pe.position) || typeof pe.filter == "function" && !await pe.filter()) continue;
      const Ze = {
        role: Oa(pe.role) ?? "system",
        content: pe.value
      };
      if (pe.position === Ta.BEFORE_PROMPT)
        le.insert(pe.depth, Ze);
      else if (pe.position === Ta.IN_PROMPT) {
        const Be = le.getMessages();
        le.insert(Be.length - pe.depth, Ze);
      }
    }
  for (const oe of Tt) {
    const pe = le.getMessages();
    le.insert(pe.length - oe.depth, {
      role: Oa(oe.role),
      content: oe.entries.join(`
`)
    });
  }
  if (!p) {
    const oe = PS(Jn, Number(Jt));
    if (Jn && Array.isArray(oe) && oe.length > 0)
      oe.filter((pe) => pe.text).forEach((pe, Ze) => {
        const Be = le.getMessages();
        le.insert(Be.length - pe.depth, { role: pe.role, content: pe.text });
      });
    else {
      const pe = Nl(
        (N = (E = (D = (C = (T = I.characters[Jt]) == null ? void 0 : T.data) == null ? void 0 : C.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : E.prompt) == null ? void 0 : N.trim(),
        Nr,
        na
      ) || "";
      if (pe) {
        const Ze = d2, Be = ((Y = (L = (j = (M = I.characters[Jt]) == null ? void 0 : M.data) == null ? void 0 : j.extensions) == null ? void 0 : L.depth_prompt) == null ? void 0 : Y.role) ?? f2, Xe = le.getMessages();
        le.insert(Xe.length - Ze, {
          role: Oa(Be),
          content: pe
        });
      }
    }
  }
  let Ae = -1;
  if (!g) {
    const oe = IS();
    if (oe.prompt) {
      oe.prompt = Nl(oe.prompt, Nr, na);
      const pe = { role: Oa(oe.role), content: oe.prompt };
      switch (oe.position) {
        case Ta.IN_PROMPT:
          le.insert(1, pe), Ae = 1;
          break;
        case Ta.IN_CHAT:
          Ae = le.getMessages().length - oe.depth, le.insert(Ae, pe);
          break;
        case Ta.BEFORE_PROMPT:
          le.addFront(pe), Ae = 0;
          break;
      }
    }
  }
  return Ae >= 0 && (U.length > 0 && (le.insert(Ae, { role: "system", content: U.join(`
`) }), Ae++), W.length > 0 && le.insert(Ae + 1, { role: "system", content: W.join(`
`) })), { result: le.getMessages(), warnings: ie };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function zv(t, r) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), a.push.apply(a, s);
  }
  return a;
}
function ur(t) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? zv(Object(a), !0).forEach(function(s) {
      $S(t, s, a[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : zv(Object(a)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s));
    });
  }
  return t;
}
function fu(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fu = function(r) {
    return typeof r;
  } : fu = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, fu(t);
}
function $S(t, r, a) {
  return r in t ? Object.defineProperty(t, r, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = a, t;
}
function Mr() {
  return Mr = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var s in a)
        Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
    }
    return t;
  }, Mr.apply(this, arguments);
}
function QS(t, r) {
  if (t == null) return {};
  var a = {}, s = Object.keys(t), l, u;
  for (u = 0; u < s.length; u++)
    l = s[u], !(r.indexOf(l) >= 0) && (a[l] = t[l]);
  return a;
}
function KS(t, r) {
  if (t == null) return {};
  var a = QS(t, r), s, l;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (l = 0; l < u.length; l++)
      s = u[l], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (a[s] = t[s]);
  }
  return a;
}
var JS = "1.15.6";
function Or(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var kr = Or(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), fo = Or(/Edge/i), Lv = Or(/firefox/i), no = Or(/safari/i) && !Or(/chrome/i) && !Or(/android/i), nh = Or(/iP(ad|od|hone)/i), O0 = Or(/chrome/i) && Or(/android/i), D0 = {
  capture: !1,
  passive: !1
};
function Ve(t, r, a) {
  t.addEventListener(r, a, !kr && D0);
}
function Ge(t, r, a) {
  t.removeEventListener(r, a, !kr && D0);
}
function bu(t, r) {
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
function M0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Kn(t, r, a, s) {
  if (t) {
    a = a || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === a && bu(t, r) : bu(t, r)) || s && t === a)
        return t;
      if (t === a) break;
    } while (t = M0(t));
  }
  return null;
}
var Iv = /\s+/g;
function Nn(t, r, a) {
  if (t && r)
    if (t.classList)
      t.classList[a ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(Iv, " ").replace(" " + r + " ", " ");
      t.className = (s + (a ? " " + r : "")).replace(Iv, " ");
    }
}
function Oe(t, r, a) {
  var s = t && t.style;
  if (s) {
    if (a === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? a = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (a = t.currentStyle), r === void 0 ? a : a[r];
    !(r in s) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), s[r] = a + (typeof a == "string" ? "" : "px");
  }
}
function Bi(t, r) {
  var a = "";
  if (typeof t == "string")
    a = t;
  else
    do {
      var s = Oe(t, "transform");
      s && s !== "none" && (a = s + " " + a);
    } while (!r && (t = t.parentNode));
  var l = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return l && new l(a);
}
function k0(t, r, a) {
  if (t) {
    var s = t.getElementsByTagName(r), l = 0, u = s.length;
    if (a)
      for (; l < u; l++)
        a(s[l], l);
    return s;
  }
  return [];
}
function lr() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function kt(t, r, a, s, l) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, d, p, g, y, _;
    if (t !== window && t.parentNode && t !== lr() ? (u = t.getBoundingClientRect(), f = u.top, d = u.left, p = u.bottom, g = u.right, y = u.height, _ = u.width) : (f = 0, d = 0, p = window.innerHeight, g = window.innerWidth, y = window.innerHeight, _ = window.innerWidth), (r || a) && t !== window && (l = l || t.parentNode, !kr))
      do
        if (l && l.getBoundingClientRect && (Oe(l, "transform") !== "none" || a && Oe(l, "position") !== "static")) {
          var b = l.getBoundingClientRect();
          f -= b.top + parseInt(Oe(l, "border-top-width")), d -= b.left + parseInt(Oe(l, "border-left-width")), p = f + u.height, g = d + u.width;
          break;
        }
      while (l = l.parentNode);
    if (s && t !== window) {
      var m = Bi(l || t), h = m && m.a, x = m && m.d;
      m && (f /= x, d /= h, _ /= h, y /= x, p = f + y, g = d + _);
    }
    return {
      top: f,
      left: d,
      bottom: p,
      right: g,
      width: _,
      height: y
    };
  }
}
function Pv(t, r, a) {
  for (var s = oa(t, !0), l = kt(t)[r]; s; ) {
    var u = kt(s)[a], f = void 0;
    if (f = l >= u, !f) return s;
    if (s === lr()) break;
    s = oa(s, !1);
  }
  return !1;
}
function Fi(t, r, a, s) {
  for (var l = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== De.ghost && (s || f[u] !== De.dragged) && Kn(f[u], a.draggable, t, !1)) {
      if (l === r)
        return f[u];
      l++;
    }
    u++;
  }
  return null;
}
function rh(t, r) {
  for (var a = t.lastElementChild; a && (a === De.ghost || Oe(a, "display") === "none" || r && !bu(a, r)); )
    a = a.previousElementSibling;
  return a || null;
}
function Hn(t, r) {
  var a = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== De.clone && (!r || bu(t, r)) && a++;
  return a;
}
function Bv(t) {
  var r = 0, a = 0, s = lr();
  if (t)
    do {
      var l = Bi(t), u = l.a, f = l.d;
      r += t.scrollLeft * u, a += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, a];
}
function WS(t, r) {
  for (var a in t)
    if (t.hasOwnProperty(a)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[a][s]) return Number(a);
    }
  return -1;
}
function oa(t, r) {
  if (!t || !t.getBoundingClientRect) return lr();
  var a = t, s = !1;
  do
    if (a.clientWidth < a.scrollWidth || a.clientHeight < a.scrollHeight) {
      var l = Oe(a);
      if (a.clientWidth < a.scrollWidth && (l.overflowX == "auto" || l.overflowX == "scroll") || a.clientHeight < a.scrollHeight && (l.overflowY == "auto" || l.overflowY == "scroll")) {
        if (!a.getBoundingClientRect || a === document.body) return lr();
        if (s || r) return a;
        s = !0;
      }
    }
  while (a = a.parentNode);
  return lr();
}
function ex(t, r) {
  if (t && r)
    for (var a in r)
      r.hasOwnProperty(a) && (t[a] = r[a]);
  return t;
}
function sd(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var ro;
function j0(t, r) {
  return function() {
    if (!ro) {
      var a = arguments, s = this;
      a.length === 1 ? t.call(s, a[0]) : t.apply(s, a), ro = setTimeout(function() {
        ro = void 0;
      }, r);
    }
  };
}
function tx() {
  clearTimeout(ro), ro = void 0;
}
function R0(t, r, a) {
  t.scrollLeft += r, t.scrollTop += a;
}
function z0(t) {
  var r = window.Polymer, a = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : a ? a(t).clone(!0)[0] : t.cloneNode(!0);
}
function L0(t, r, a) {
  var s = {};
  return Array.from(t.children).forEach(function(l) {
    var u, f, d, p;
    if (!(!Kn(l, r.draggable, t, !1) || l.animated || l === a)) {
      var g = kt(l);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, g.top), s.right = Math.max((d = s.right) !== null && d !== void 0 ? d : -1 / 0, g.right), s.bottom = Math.max((p = s.bottom) !== null && p !== void 0 ? p : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var gn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function nx() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(l) {
          if (!(Oe(l, "display") === "none" || l === De.ghost)) {
            t.push({
              target: l,
              rect: kt(l)
            });
            var u = ur({}, t[t.length - 1].rect);
            if (l.thisAnimationDuration) {
              var f = Bi(l, !0);
              f && (u.top -= f.f, u.left -= f.e);
            }
            l.fromRect = u;
          }
        });
      }
    },
    addAnimationState: function(s) {
      t.push(s);
    },
    removeAnimationState: function(s) {
      t.splice(WS(t, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var l = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof s == "function" && s();
        return;
      }
      var u = !1, f = 0;
      t.forEach(function(d) {
        var p = 0, g = d.target, y = g.fromRect, _ = kt(g), b = g.prevFromRect, m = g.prevToRect, h = d.rect, x = Bi(g, !0);
        x && (_.top -= x.f, _.left -= x.e), g.toRect = _, g.thisAnimationDuration && sd(b, _) && !sd(y, _) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - _.top) / (h.left - _.left) === (y.top - _.top) / (y.left - _.left) && (p = ax(h, b, m, l.options)), sd(_, y) || (g.prevFromRect = y, g.prevToRect = _, p || (p = l.options.animation), l.animate(g, h, _, p)), p && (u = !0, f = Math.max(f, p), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, p), g.thisAnimationDuration = p);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, l, u, f) {
      if (f) {
        Oe(s, "transition", ""), Oe(s, "transform", "");
        var d = Bi(this.el), p = d && d.a, g = d && d.d, y = (l.left - u.left) / (p || 1), _ = (l.top - u.top) / (g || 1);
        s.animatingX = !!y, s.animatingY = !!_, Oe(s, "transform", "translate3d(" + y + "px," + _ + "px,0)"), this.forRepaintDummy = rx(s), Oe(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Oe(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Oe(s, "transition", ""), Oe(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function rx(t) {
  return t.offsetWidth;
}
function ax(t, r, a, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - a.top, 2) + Math.pow(r.left - a.left, 2)) * s.animation;
}
var Oi = [], od = {
  initializeByDefault: !0
}, ho = {
  mount: function(r) {
    for (var a in od)
      od.hasOwnProperty(a) && !(a in r) && (r[a] = od[a]);
    Oi.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Oi.push(r);
  },
  pluginEvent: function(r, a, s) {
    var l = this;
    this.eventCanceled = !1, s.cancel = function() {
      l.eventCanceled = !0;
    };
    var u = r + "Global";
    Oi.forEach(function(f) {
      a[f.pluginName] && (a[f.pluginName][u] && a[f.pluginName][u](ur({
        sortable: a
      }, s)), a.options[f.pluginName] && a[f.pluginName][r] && a[f.pluginName][r](ur({
        sortable: a
      }, s)));
    });
  },
  initializePlugins: function(r, a, s, l) {
    Oi.forEach(function(d) {
      var p = d.pluginName;
      if (!(!r.options[p] && !d.initializeByDefault)) {
        var g = new d(r, a, r.options);
        g.sortable = r, g.options = r.options, r[p] = g, Mr(s, g.defaults);
      }
    });
    for (var u in r.options)
      if (r.options.hasOwnProperty(u)) {
        var f = this.modifyOption(r, u, r.options[u]);
        typeof f < "u" && (r.options[u] = f);
      }
  },
  getEventProperties: function(r, a) {
    var s = {};
    return Oi.forEach(function(l) {
      typeof l.eventProperties == "function" && Mr(s, l.eventProperties.call(a[l.pluginName], r));
    }), s;
  },
  modifyOption: function(r, a, s) {
    var l;
    return Oi.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[a] == "function" && (l = u.optionListeners[a].call(r[u.pluginName], s));
    }), l;
  }
};
function ix(t) {
  var r = t.sortable, a = t.rootEl, s = t.name, l = t.targetEl, u = t.cloneEl, f = t.toEl, d = t.fromEl, p = t.oldIndex, g = t.newIndex, y = t.oldDraggableIndex, _ = t.newDraggableIndex, b = t.originalEvent, m = t.putSortable, h = t.extraEventProperties;
  if (r = r || a && a[gn], !!r) {
    var x, w = r.options, T = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !kr && !fo ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = f || a, x.from = d || a, x.item = l || a, x.clone = u, x.oldIndex = p, x.newIndex = g, x.oldDraggableIndex = y, x.newDraggableIndex = _, x.originalEvent = b, x.pullMode = m ? m.lastPutMode : void 0;
    var C = ur(ur({}, h), ho.getEventProperties(s, r));
    for (var D in C)
      x[D] = C[D];
    a && a.dispatchEvent(x), w[T] && w[T].call(r, x);
  }
}
var sx = ["evt"], hn = function(r, a) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = s.evt, u = KS(s, sx);
  ho.pluginEvent.bind(De)(r, a, ur({
    dragEl: ue,
    parentEl: wt,
    ghostEl: Re,
    rootEl: gt,
    nextEl: ka,
    lastDownEl: du,
    cloneEl: bt,
    cloneHidden: sa,
    dragStarted: Js,
    putSortable: Vt,
    activeSortable: De.active,
    originalEvent: l,
    oldIndex: Li,
    oldDraggableIndex: ao,
    newIndex: Tn,
    newDraggableIndex: ia,
    hideGhostForTarget: U0,
    unhideGhostForTarget: F0,
    cloneNowHidden: function() {
      sa = !0;
    },
    cloneNowShown: function() {
      sa = !1;
    },
    dispatchSortableEvent: function(d) {
      rn({
        sortable: a,
        name: d,
        originalEvent: l
      });
    }
  }, u));
};
function rn(t) {
  ix(ur({
    putSortable: Vt,
    cloneEl: bt,
    targetEl: ue,
    rootEl: gt,
    oldIndex: Li,
    oldDraggableIndex: ao,
    newIndex: Tn,
    newDraggableIndex: ia
  }, t));
}
var ue, wt, Re, gt, ka, du, bt, sa, Li, Tn, ao, ia, Ol, Vt, zi = !1, _u = !1, Su = [], Da, $n, ld, ud, Uv, Fv, Js, Di, io, so = !1, Dl = !1, hu, Kt, cd = [], zd = !1, xu = [], ju = typeof document < "u", Ml = nh, Hv = fo || kr ? "cssFloat" : "float", ox = ju && !O0 && !nh && "draggable" in document.createElement("div"), I0 = (function() {
  if (ju) {
    if (kr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), P0 = function(r, a) {
  var s = Oe(r), l = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Fi(r, 0, a), f = Fi(r, 1, a), d = u && Oe(u), p = f && Oe(f), g = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + kt(u).width, y = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + kt(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && d.float && d.float !== "none") {
    var _ = d.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === _) ? "vertical" : "horizontal";
  }
  return u && (d.display === "block" || d.display === "flex" || d.display === "table" || d.display === "grid" || g >= l && s[Hv] === "none" || f && s[Hv] === "none" && g + y > l) ? "vertical" : "horizontal";
}, lx = function(r, a, s) {
  var l = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, d = s ? a.left : a.top, p = s ? a.right : a.bottom, g = s ? a.width : a.height;
  return l === d || u === p || l + f / 2 === d + g / 2;
}, ux = function(r, a) {
  var s;
  return Su.some(function(l) {
    var u = l[gn].options.emptyInsertThreshold;
    if (!(!u || rh(l))) {
      var f = kt(l), d = r >= f.left - u && r <= f.right + u, p = a >= f.top - u && a <= f.bottom + u;
      if (d && p)
        return s = l;
    }
  }), s;
}, B0 = function(r) {
  function a(u, f) {
    return function(d, p, g, y) {
      var _ = d.options.group.name && p.options.group.name && d.options.group.name === p.options.group.name;
      if (u == null && (f || _))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return a(u(d, p, g, y), f)(d, p, g, y);
      var b = (f ? d : p).options.group.name;
      return u === !0 || typeof u == "string" && u === b || u.join && u.indexOf(b) > -1;
    };
  }
  var s = {}, l = r.group;
  (!l || fu(l) != "object") && (l = {
    name: l
  }), s.name = l.name, s.checkPull = a(l.pull, !0), s.checkPut = a(l.put), s.revertClone = l.revertClone, r.group = s;
}, U0 = function() {
  !I0 && Re && Oe(Re, "display", "none");
}, F0 = function() {
  !I0 && Re && Oe(Re, "display", "");
};
ju && !O0 && document.addEventListener("click", function(t) {
  if (_u)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), _u = !1, !1;
}, !0);
var Ma = function(r) {
  if (ue) {
    r = r.touches ? r.touches[0] : r;
    var a = ux(r.clientX, r.clientY);
    if (a) {
      var s = {};
      for (var l in r)
        r.hasOwnProperty(l) && (s[l] = r[l]);
      s.target = s.rootEl = a, s.preventDefault = void 0, s.stopPropagation = void 0, a[gn]._onDragOver(s);
    }
  }
}, cx = function(r) {
  ue && ue.parentNode[gn]._isOutsideThisEl(r.target);
};
function De(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Mr({}, r), t[gn] = this;
  var a = {
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
      return P0(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, d) {
      f.setData("Text", d.textContent);
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
    supportPointer: De.supportPointer !== !1 && "PointerEvent" in window && (!no || nh),
    emptyInsertThreshold: 5
  };
  ho.initializePlugins(this, t, a);
  for (var s in a)
    !(s in r) && (r[s] = a[s]);
  B0(r);
  for (var l in this)
    l.charAt(0) === "_" && typeof this[l] == "function" && (this[l] = this[l].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : ox, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Ve(t, "pointerdown", this._onTapStart) : (Ve(t, "mousedown", this._onTapStart), Ve(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ve(t, "dragover", this), Ve(t, "dragenter", this)), Su.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Mr(this, nx());
}
De.prototype = /** @lends Sortable.prototype */
{
  constructor: De,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Di = null);
  },
  _getDirection: function(r, a) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, a, ue) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var a = this, s = this.el, l = this.options, u = l.preventOnFilter, f = r.type, d = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (d || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, y = l.filter;
      if (yx(s), !ue && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || l.disabled) && !g.isContentEditable && !(!this.nativeDraggable && no && p && p.tagName.toUpperCase() === "SELECT") && (p = Kn(p, l.draggable, s, !1), !(p && p.animated) && du !== p)) {
        if (Li = Hn(p), ao = Hn(p, l.draggable), typeof y == "function") {
          if (y.call(this, r, p, this)) {
            rn({
              sortable: a,
              rootEl: g,
              name: "filter",
              targetEl: p,
              toEl: s,
              fromEl: s
            }), hn("filter", a, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (y && (y = y.split(",").some(function(_) {
          if (_ = Kn(g, _.trim(), s, !1), _)
            return rn({
              sortable: a,
              rootEl: _,
              name: "filter",
              targetEl: p,
              fromEl: s,
              toEl: s
            }), hn("filter", a, {
              evt: r
            }), !0;
        }), y)) {
          u && r.preventDefault();
          return;
        }
        l.handle && !Kn(g, l.handle, s, !1) || this._prepareDragStart(r, d, p);
      }
    }
  },
  _prepareDragStart: function(r, a, s) {
    var l = this, u = l.el, f = l.options, d = u.ownerDocument, p;
    if (s && !ue && s.parentNode === u) {
      var g = kt(s);
      if (gt = u, ue = s, wt = ue.parentNode, ka = ue.nextSibling, du = s, Ol = f.group, De.dragged = ue, Da = {
        target: ue,
        clientX: (a || r).clientX,
        clientY: (a || r).clientY
      }, Uv = Da.clientX - g.left, Fv = Da.clientY - g.top, this._lastX = (a || r).clientX, this._lastY = (a || r).clientY, ue.style["will-change"] = "all", p = function() {
        if (hn("delayEnded", l, {
          evt: r
        }), De.eventCanceled) {
          l._onDrop();
          return;
        }
        l._disableDelayedDragEvents(), !Lv && l.nativeDraggable && (ue.draggable = !0), l._triggerDragStart(r, a), rn({
          sortable: l,
          name: "choose",
          originalEvent: r
        }), Nn(ue, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(y) {
        k0(ue, y.trim(), fd);
      }), Ve(d, "dragover", Ma), Ve(d, "mousemove", Ma), Ve(d, "touchmove", Ma), f.supportPointer ? (Ve(d, "pointerup", l._onDrop), !this.nativeDraggable && Ve(d, "pointercancel", l._onDrop)) : (Ve(d, "mouseup", l._onDrop), Ve(d, "touchend", l._onDrop), Ve(d, "touchcancel", l._onDrop)), Lv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ue.draggable = !0), hn("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || a) && (!this.nativeDraggable || !(fo || kr))) {
        if (De.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Ve(d, "pointerup", l._disableDelayedDrag), Ve(d, "pointercancel", l._disableDelayedDrag)) : (Ve(d, "mouseup", l._disableDelayedDrag), Ve(d, "touchend", l._disableDelayedDrag), Ve(d, "touchcancel", l._disableDelayedDrag)), Ve(d, "mousemove", l._delayedDragTouchMoveHandler), Ve(d, "touchmove", l._delayedDragTouchMoveHandler), f.supportPointer && Ve(d, "pointermove", l._delayedDragTouchMoveHandler), l._dragStartTimer = setTimeout(p, f.delay);
      } else
        p();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var a = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ue && fd(ue), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ge(r, "mouseup", this._disableDelayedDrag), Ge(r, "touchend", this._disableDelayedDrag), Ge(r, "touchcancel", this._disableDelayedDrag), Ge(r, "pointerup", this._disableDelayedDrag), Ge(r, "pointercancel", this._disableDelayedDrag), Ge(r, "mousemove", this._delayedDragTouchMoveHandler), Ge(r, "touchmove", this._delayedDragTouchMoveHandler), Ge(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, a) {
    a = a || r.pointerType == "touch" && r, !this.nativeDraggable || a ? this.options.supportPointer ? Ve(document, "pointermove", this._onTouchMove) : a ? Ve(document, "touchmove", this._onTouchMove) : Ve(document, "mousemove", this._onTouchMove) : (Ve(ue, "dragend", this), Ve(gt, "dragstart", this._onDragStart));
    try {
      document.selection ? pu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, a) {
    if (zi = !1, gt && ue) {
      hn("dragStarted", this, {
        evt: a
      }), this.nativeDraggable && Ve(document, "dragover", cx);
      var s = this.options;
      !r && Nn(ue, s.dragClass, !1), Nn(ue, s.ghostClass, !0), De.active = this, r && this._appendGhost(), rn({
        sortable: this,
        name: "start",
        originalEvent: a
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if ($n) {
      this._lastX = $n.clientX, this._lastY = $n.clientY, U0();
      for (var r = document.elementFromPoint($n.clientX, $n.clientY), a = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint($n.clientX, $n.clientY), r !== a); )
        a = r;
      if (ue.parentNode[gn]._isOutsideThisEl(r), a)
        do {
          if (a[gn]) {
            var s = void 0;
            if (s = a[gn]._onDragOver({
              clientX: $n.clientX,
              clientY: $n.clientY,
              target: r,
              rootEl: a
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = a;
        } while (a = M0(a));
      F0();
    }
  },
  _onTouchMove: function(r) {
    if (Da) {
      var a = this.options, s = a.fallbackTolerance, l = a.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Re && Bi(Re, !0), d = Re && f && f.a, p = Re && f && f.d, g = Ml && Kt && Bv(Kt), y = (u.clientX - Da.clientX + l.x) / (d || 1) + (g ? g[0] - cd[0] : 0) / (d || 1), _ = (u.clientY - Da.clientY + l.y) / (p || 1) + (g ? g[1] - cd[1] : 0) / (p || 1);
      if (!De.active && !zi) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Re) {
        f ? (f.e += y - (ld || 0), f.f += _ - (ud || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: _
        };
        var b = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Oe(Re, "webkitTransform", b), Oe(Re, "mozTransform", b), Oe(Re, "msTransform", b), Oe(Re, "transform", b), ld = y, ud = _, $n = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Re) {
      var r = this.options.fallbackOnBody ? document.body : gt, a = kt(ue, !0, Ml, !0, r), s = this.options;
      if (Ml) {
        for (Kt = r; Oe(Kt, "position") === "static" && Oe(Kt, "transform") === "none" && Kt !== document; )
          Kt = Kt.parentNode;
        Kt !== document.body && Kt !== document.documentElement ? (Kt === document && (Kt = lr()), a.top += Kt.scrollTop, a.left += Kt.scrollLeft) : Kt = lr(), cd = Bv(Kt);
      }
      Re = ue.cloneNode(!0), Nn(Re, s.ghostClass, !1), Nn(Re, s.fallbackClass, !0), Nn(Re, s.dragClass, !0), Oe(Re, "transition", ""), Oe(Re, "transform", ""), Oe(Re, "box-sizing", "border-box"), Oe(Re, "margin", 0), Oe(Re, "top", a.top), Oe(Re, "left", a.left), Oe(Re, "width", a.width), Oe(Re, "height", a.height), Oe(Re, "opacity", "0.8"), Oe(Re, "position", Ml ? "absolute" : "fixed"), Oe(Re, "zIndex", "100000"), Oe(Re, "pointerEvents", "none"), De.ghost = Re, r.appendChild(Re), Oe(Re, "transform-origin", Uv / parseInt(Re.style.width) * 100 + "% " + Fv / parseInt(Re.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, a) {
    var s = this, l = r.dataTransfer, u = s.options;
    if (hn("dragStart", this, {
      evt: r
    }), De.eventCanceled) {
      this._onDrop();
      return;
    }
    hn("setupClone", this), De.eventCanceled || (bt = z0(ue), bt.removeAttribute("id"), bt.draggable = !1, bt.style["will-change"] = "", this._hideClone(), Nn(bt, this.options.chosenClass, !1), De.clone = bt), s.cloneId = pu(function() {
      hn("clone", s), !De.eventCanceled && (s.options.removeCloneOnHide || gt.insertBefore(bt, ue), s._hideClone(), rn({
        sortable: s,
        name: "clone"
      }));
    }), !a && Nn(ue, u.dragClass, !0), a ? (_u = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Ge(document, "mouseup", s._onDrop), Ge(document, "touchend", s._onDrop), Ge(document, "touchcancel", s._onDrop), l && (l.effectAllowed = "move", u.setData && u.setData.call(s, l, ue)), Ve(document, "drop", s), Oe(ue, "transform", "translateZ(0)")), zi = !0, s._dragStartId = pu(s._dragStarted.bind(s, a, r)), Ve(document, "selectstart", s), Js = !0, window.getSelection().removeAllRanges(), no && Oe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var a = this.el, s = r.target, l, u, f, d = this.options, p = d.group, g = De.active, y = Ol === p, _ = d.sort, b = Vt || g, m, h = this, x = !1;
    if (zd) return;
    function w(me, Le) {
      hn(me, h, ur({
        evt: r,
        isOwner: y,
        axis: m ? "vertical" : "horizontal",
        revert: f,
        dragRect: l,
        targetRect: u,
        canSort: _,
        fromSortable: b,
        target: s,
        completed: C,
        onMove: function(J, ie) {
          return kl(gt, a, ue, l, J, kt(J), r, ie);
        },
        changed: D
      }, Le));
    }
    function T() {
      w("dragOverAnimationCapture"), h.captureAnimationState(), h !== b && b.captureAnimationState();
    }
    function C(me) {
      return w("dragOverCompleted", {
        insertion: me
      }), me && (y ? g._hideClone() : g._showClone(h), h !== b && (Nn(ue, Vt ? Vt.options.ghostClass : g.options.ghostClass, !1), Nn(ue, d.ghostClass, !0)), Vt !== h && h !== De.active ? Vt = h : h === De.active && Vt && (Vt = null), b === h && (h._ignoreWhileAnimating = s), h.animateAll(function() {
        w("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (s === ue && !ue.animated || s === a && !s.animated) && (Di = null), !d.dragoverBubble && !r.rootEl && s !== document && (ue.parentNode[gn]._isOutsideThisEl(r.target), !me && Ma(r)), !d.dragoverBubble && r.stopPropagation && r.stopPropagation(), x = !0;
    }
    function D() {
      Tn = Hn(ue), ia = Hn(ue, d.draggable), rn({
        sortable: h,
        name: "change",
        toEl: a,
        newIndex: Tn,
        newDraggableIndex: ia,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Kn(s, d.draggable, a, !0), w("dragOver"), De.eventCanceled) return x;
    if (ue.contains(r.target) || s.animated && s.animatingX && s.animatingY || h._ignoreWhileAnimating === s)
      return C(!1);
    if (_u = !1, g && !d.disabled && (y ? _ || (f = wt !== gt) : Vt === this || (this.lastPutMode = Ol.checkPull(this, g, ue, r)) && p.checkPut(this, g, ue, r))) {
      if (m = this._getDirection(r, s) === "vertical", l = kt(ue), w("dragOverValid"), De.eventCanceled) return x;
      if (f)
        return wt = gt, T(), this._hideClone(), w("revert"), De.eventCanceled || (ka ? gt.insertBefore(ue, ka) : gt.appendChild(ue)), C(!0);
      var E = rh(a, d.draggable);
      if (!E || px(r, m, this) && !E.animated) {
        if (E === ue)
          return C(!1);
        if (E && a === r.target && (s = E), s && (u = kt(s)), kl(gt, a, ue, l, s, u, r, !!s) !== !1)
          return T(), E && E.nextSibling ? a.insertBefore(ue, E.nextSibling) : a.appendChild(ue), wt = a, D(), C(!0);
      } else if (E && hx(r, m, this)) {
        var N = Fi(a, 0, d, !0);
        if (N === ue)
          return C(!1);
        if (s = N, u = kt(s), kl(gt, a, ue, l, s, u, r, !1) !== !1)
          return T(), a.insertBefore(ue, N), wt = a, D(), C(!0);
      } else if (s.parentNode === a) {
        u = kt(s);
        var M = 0, j, L = ue.parentNode !== a, Y = !lx(ue.animated && ue.toRect || l, s.animated && s.toRect || u, m), I = m ? "top" : "left", q = Pv(s, "top", "top") || Pv(ue, "top", "top"), $ = q ? q.scrollTop : void 0;
        Di !== s && (j = u[I], so = !1, Dl = !Y && d.invertSwap || L), M = mx(r, s, u, m, Y ? 1 : d.swapThreshold, d.invertedSwapThreshold == null ? d.swapThreshold : d.invertedSwapThreshold, Dl, Di === s);
        var fe;
        if (M !== 0) {
          var de = Hn(ue);
          do
            de -= M, fe = wt.children[de];
          while (fe && (Oe(fe, "display") === "none" || fe === Re));
        }
        if (M === 0 || fe === s)
          return C(!1);
        Di = s, io = M;
        var _e = s.nextElementSibling, B = !1;
        B = M === 1;
        var ae = kl(gt, a, ue, l, s, u, r, B);
        if (ae !== !1)
          return (ae === 1 || ae === -1) && (B = ae === 1), zd = !0, setTimeout(dx, 30), T(), B && !_e ? a.appendChild(ue) : s.parentNode.insertBefore(ue, B ? _e : s), q && R0(q, 0, $ - q.scrollTop), wt = ue.parentNode, j !== void 0 && !Dl && (hu = Math.abs(j - kt(s)[I])), D(), C(!0);
      }
      if (a.contains(ue))
        return C(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ge(document, "mousemove", this._onTouchMove), Ge(document, "touchmove", this._onTouchMove), Ge(document, "pointermove", this._onTouchMove), Ge(document, "dragover", Ma), Ge(document, "mousemove", Ma), Ge(document, "touchmove", Ma);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Ge(r, "mouseup", this._onDrop), Ge(r, "touchend", this._onDrop), Ge(r, "pointerup", this._onDrop), Ge(r, "pointercancel", this._onDrop), Ge(r, "touchcancel", this._onDrop), Ge(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var a = this.el, s = this.options;
    if (Tn = Hn(ue), ia = Hn(ue, s.draggable), hn("drop", this, {
      evt: r
    }), wt = ue && ue.parentNode, Tn = Hn(ue), ia = Hn(ue, s.draggable), De.eventCanceled) {
      this._nulling();
      return;
    }
    zi = !1, Dl = !1, so = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ld(this.cloneId), Ld(this._dragStartId), this.nativeDraggable && (Ge(document, "drop", this), Ge(a, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), no && Oe(document.body, "user-select", ""), Oe(ue, "transform", ""), r && (Js && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Re && Re.parentNode && Re.parentNode.removeChild(Re), (gt === wt || Vt && Vt.lastPutMode !== "clone") && bt && bt.parentNode && bt.parentNode.removeChild(bt), ue && (this.nativeDraggable && Ge(ue, "dragend", this), fd(ue), ue.style["will-change"] = "", Js && !zi && Nn(ue, Vt ? Vt.options.ghostClass : this.options.ghostClass, !1), Nn(ue, this.options.chosenClass, !1), rn({
      sortable: this,
      name: "unchoose",
      toEl: wt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), gt !== wt ? (Tn >= 0 && (rn({
      rootEl: wt,
      name: "add",
      toEl: wt,
      fromEl: gt,
      originalEvent: r
    }), rn({
      sortable: this,
      name: "remove",
      toEl: wt,
      originalEvent: r
    }), rn({
      rootEl: wt,
      name: "sort",
      toEl: wt,
      fromEl: gt,
      originalEvent: r
    }), rn({
      sortable: this,
      name: "sort",
      toEl: wt,
      originalEvent: r
    })), Vt && Vt.save()) : Tn !== Li && Tn >= 0 && (rn({
      sortable: this,
      name: "update",
      toEl: wt,
      originalEvent: r
    }), rn({
      sortable: this,
      name: "sort",
      toEl: wt,
      originalEvent: r
    })), De.active && ((Tn == null || Tn === -1) && (Tn = Li, ia = ao), rn({
      sortable: this,
      name: "end",
      toEl: wt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    hn("nulling", this), gt = ue = wt = Re = ka = bt = du = sa = Da = $n = Js = Tn = ia = Li = ao = Di = io = Vt = Ol = De.dragged = De.ghost = De.clone = De.active = null, xu.forEach(function(r) {
      r.checked = !0;
    }), xu.length = ld = ud = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        ue && (this._onDragOver(r), fx(r));
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
    for (var r = [], a, s = this.el.children, l = 0, u = s.length, f = this.options; l < u; l++)
      a = s[l], Kn(a, f.draggable, this.el, !1) && r.push(a.getAttribute(f.dataIdAttr) || vx(a));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, a) {
    var s = {}, l = this.el;
    this.toArray().forEach(function(u, f) {
      var d = l.children[f];
      Kn(d, this.options.draggable, l, !1) && (s[u] = d);
    }, this), a && this.captureAnimationState(), r.forEach(function(u) {
      s[u] && (l.removeChild(s[u]), l.appendChild(s[u]));
    }), a && this.animateAll();
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
  closest: function(r, a) {
    return Kn(r, a || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, a) {
    var s = this.options;
    if (a === void 0)
      return s[r];
    var l = ho.modifyOption(this, r, a);
    typeof l < "u" ? s[r] = l : s[r] = a, r === "group" && B0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    hn("destroy", this);
    var r = this.el;
    r[gn] = null, Ge(r, "mousedown", this._onTapStart), Ge(r, "touchstart", this._onTapStart), Ge(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ge(r, "dragover", this), Ge(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(a) {
      a.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Su.splice(Su.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!sa) {
      if (hn("hideClone", this), De.eventCanceled) return;
      Oe(bt, "display", "none"), this.options.removeCloneOnHide && bt.parentNode && bt.parentNode.removeChild(bt), sa = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (sa) {
      if (hn("showClone", this), De.eventCanceled) return;
      ue.parentNode == gt && !this.options.group.revertClone ? gt.insertBefore(bt, ue) : ka ? gt.insertBefore(bt, ka) : gt.appendChild(bt), this.options.group.revertClone && this.animate(ue, bt), Oe(bt, "display", ""), sa = !1;
    }
  }
};
function fx(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function kl(t, r, a, s, l, u, f, d) {
  var p, g = t[gn], y = g.options.onMove, _;
  return window.CustomEvent && !kr && !fo ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = t, p.dragged = a, p.draggedRect = s, p.related = l || r, p.relatedRect = u || kt(r), p.willInsertAfter = d, p.originalEvent = f, t.dispatchEvent(p), y && (_ = y.call(g, p, f)), _;
}
function fd(t) {
  t.draggable = !1;
}
function dx() {
  zd = !1;
}
function hx(t, r, a) {
  var s = kt(Fi(a.el, 0, a.options, !0)), l = L0(a.el, a.options, Re), u = 10;
  return r ? t.clientX < l.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < l.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function px(t, r, a) {
  var s = kt(rh(a.el, a.options.draggable)), l = L0(a.el, a.options, Re), u = 10;
  return r ? t.clientX > l.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > l.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function mx(t, r, a, s, l, u, f, d) {
  var p = s ? t.clientY : t.clientX, g = s ? a.height : a.width, y = s ? a.top : a.left, _ = s ? a.bottom : a.right, b = !1;
  if (!f) {
    if (d && hu < g * l) {
      if (!so && (io === 1 ? p > y + g * u / 2 : p < _ - g * u / 2) && (so = !0), so)
        b = !0;
      else if (io === 1 ? p < y + hu : p > _ - hu)
        return -io;
    } else if (p > y + g * (1 - l) / 2 && p < _ - g * (1 - l) / 2)
      return gx(r);
  }
  return b = b || f, b && (p < y + g * u / 2 || p > _ - g * u / 2) ? p > y + g / 2 ? 1 : -1 : 0;
}
function gx(t) {
  return Hn(ue) < Hn(t) ? 1 : -1;
}
function vx(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, a = r.length, s = 0; a--; )
    s += r.charCodeAt(a);
  return s.toString(36);
}
function yx(t) {
  xu.length = 0;
  for (var r = t.getElementsByTagName("input"), a = r.length; a--; ) {
    var s = r[a];
    s.checked && xu.push(s);
  }
}
function pu(t) {
  return setTimeout(t, 0);
}
function Ld(t) {
  return clearTimeout(t);
}
ju && Ve(document, "touchmove", function(t) {
  (De.active || zi) && t.cancelable && t.preventDefault();
});
De.utils = {
  on: Ve,
  off: Ge,
  css: Oe,
  find: k0,
  is: function(r, a) {
    return !!Kn(r, a, r, !1);
  },
  extend: ex,
  throttle: j0,
  closest: Kn,
  toggleClass: Nn,
  clone: z0,
  index: Hn,
  nextTick: pu,
  cancelNextTick: Ld,
  detectDirection: P0,
  getChild: Fi,
  expando: gn
};
De.get = function(t) {
  return t[gn];
};
De.mount = function() {
  for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
    r[a] = arguments[a];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (De.utils = ur(ur({}, De.utils), s.utils)), ho.mount(s);
  });
};
De.create = function(t, r) {
  return new De(t, r);
};
De.version = JS;
var Mt = [], Ws, Id, Pd = !1, dd, hd, Eu, eo;
function bx() {
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
    dragStarted: function(a) {
      var s = a.originalEvent;
      this.sortable.nativeDraggable ? Ve(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ve(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Ve(document, "touchmove", this._handleFallbackAutoScroll) : Ve(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(a) {
      var s = a.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ge(document, "dragover", this._handleAutoScroll) : (Ge(document, "pointermove", this._handleFallbackAutoScroll), Ge(document, "touchmove", this._handleFallbackAutoScroll), Ge(document, "mousemove", this._handleFallbackAutoScroll)), qv(), mu(), tx();
    },
    nulling: function() {
      Eu = Id = Ws = Pd = eo = dd = hd = null, Mt.length = 0;
    },
    _handleFallbackAutoScroll: function(a) {
      this._handleAutoScroll(a, !0);
    },
    _handleAutoScroll: function(a, s) {
      var l = this, u = (a.touches ? a.touches[0] : a).clientX, f = (a.touches ? a.touches[0] : a).clientY, d = document.elementFromPoint(u, f);
      if (Eu = a, s || this.options.forceAutoScrollFallback || fo || kr || no) {
        pd(a, this.options, d, s);
        var p = oa(d, !0);
        Pd && (!eo || u !== dd || f !== hd) && (eo && qv(), eo = setInterval(function() {
          var g = oa(document.elementFromPoint(u, f), !0);
          g !== p && (p = g, mu()), pd(a, l.options, g, s);
        }, 10), dd = u, hd = f);
      } else {
        if (!this.options.bubbleScroll || oa(d, !0) === lr()) {
          mu();
          return;
        }
        pd(a, this.options, oa(d, !1), !1);
      }
    }
  }, Mr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function mu() {
  Mt.forEach(function(t) {
    clearInterval(t.pid);
  }), Mt = [];
}
function qv() {
  clearInterval(eo);
}
var pd = j0(function(t, r, a, s) {
  if (r.scroll) {
    var l = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, d = r.scrollSpeed, p = lr(), g = !1, y;
    Id !== a && (Id = a, mu(), Ws = r.scroll, y = r.scrollFn, Ws === !0 && (Ws = oa(a, !0)));
    var _ = 0, b = Ws;
    do {
      var m = b, h = kt(m), x = h.top, w = h.bottom, T = h.left, C = h.right, D = h.width, E = h.height, N = void 0, M = void 0, j = m.scrollWidth, L = m.scrollHeight, Y = Oe(m), I = m.scrollLeft, q = m.scrollTop;
      m === p ? (N = D < j && (Y.overflowX === "auto" || Y.overflowX === "scroll" || Y.overflowX === "visible"), M = E < L && (Y.overflowY === "auto" || Y.overflowY === "scroll" || Y.overflowY === "visible")) : (N = D < j && (Y.overflowX === "auto" || Y.overflowX === "scroll"), M = E < L && (Y.overflowY === "auto" || Y.overflowY === "scroll"));
      var $ = N && (Math.abs(C - l) <= f && I + D < j) - (Math.abs(T - l) <= f && !!I), fe = M && (Math.abs(w - u) <= f && q + E < L) - (Math.abs(x - u) <= f && !!q);
      if (!Mt[_])
        for (var de = 0; de <= _; de++)
          Mt[de] || (Mt[de] = {});
      (Mt[_].vx != $ || Mt[_].vy != fe || Mt[_].el !== m) && (Mt[_].el = m, Mt[_].vx = $, Mt[_].vy = fe, clearInterval(Mt[_].pid), ($ != 0 || fe != 0) && (g = !0, Mt[_].pid = setInterval((function() {
        s && this.layer === 0 && De.active._onTouchMove(Eu);
        var _e = Mt[this.layer].vy ? Mt[this.layer].vy * d : 0, B = Mt[this.layer].vx ? Mt[this.layer].vx * d : 0;
        typeof y == "function" && y.call(De.dragged.parentNode[gn], B, _e, t, Eu, Mt[this.layer].el) !== "continue" || R0(Mt[this.layer].el, B, _e);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && b !== p && (b = oa(b, !1)));
    Pd = g;
  }
}, 30), H0 = function(r) {
  var a = r.originalEvent, s = r.putSortable, l = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, d = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (a) {
    var g = s || u;
    d();
    var y = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, _ = document.elementFromPoint(y.clientX, y.clientY);
    p(), g && !g.el.contains(_) && (f("spill"), this.onSpill({
      dragEl: l,
      putSortable: s
    }));
  }
};
function ah() {
}
ah.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var a = r.oldDraggableIndex;
    this.startIndex = a;
  },
  onSpill: function(r) {
    var a = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var l = Fi(this.sortable.el, this.startIndex, this.options);
    l ? this.sortable.el.insertBefore(a, l) : this.sortable.el.appendChild(a), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: H0
};
Mr(ah, {
  pluginName: "revertOnSpill"
});
function ih() {
}
ih.prototype = {
  onSpill: function(r) {
    var a = r.dragEl, s = r.putSortable, l = s || this.sortable;
    l.captureAnimationState(), a.parentNode && a.parentNode.removeChild(a), l.animateAll();
  },
  drop: H0
};
Mr(ih, {
  pluginName: "removeOnSpill"
});
De.mount(new bx());
De.mount(ih, ah);
async function _x({
  entry: t,
  selectedWorldName: r,
  skipSave: a = !1,
  skipReload: s = !1,
  operation: l = "auto"
}) {
  const u = SillyTavern.getContext(), f = await u.loadWorldInfo(r);
  if (!f)
    throw new Error("Failed to load world info");
  const d = Object.values(f.entries), p = d.length > 0 ? d[d.length - 1] : void 0;
  let g;
  if (l === "update" || l === "auto") {
    const _ = Object.values(f.entries).find((b) => b.uid === t.uid);
    if (_)
      (l === "auto" || l === "update") && (g = _);
    else if (l === "update")
      throw new Error("Entry not found for update operation");
  }
  const y = g ? "update" : "add";
  if (!g) {
    if (g = ZS(r, f), !g)
      throw new Error("Failed to create entry");
    if (p) {
      const _ = g.uid;
      Object.assign(g, p), g.uid = _;
    }
  }
  return g.key = t.key, g.content = t.content, g.comment = t.comment, a || await u.saveWorldInfo(r, f), s || u.reloadWorldInfoEditor(r, !0), {
    entry: g,
    operation: y
  };
}
const Bd = `=======

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

=======`, Ud = `{{#if characters}}
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
{{#if this.data.alternate_greetings}}
#### Alternate Greetings
{{#each this.data.alternate_greetings}}
### {{add @index 1}}
{{this}}
{{/each}}
{{/if}}

{{/each}}
{{/if}}`, Sx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, xx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, Ex = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, sh = "{{activeFormatInstructions}}", q0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, Z0 = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, oo = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, wx = `## User's Persona Description
name: {{user}}
{{persona}}`, oh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, Cx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", Ax = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML structure in a markdown code block (```xml\\n...\\n```).\n2.  Every element MUST be nested inside a single top-level <root> element. XML permits only one root node.\n3.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n4.  The XML inside the code block MUST be well-formed. Escape &, < and > inside text as &amp;, &lt; and &gt;.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n<root>\n{{example_response}}\n</root>\n```", Nx = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, lh = "You are a creative writing assistant helping brainstorm and design a character. Engage in freeform discussion about character concepts, personality traits, backstory ideas, world-building, and narrative design. Be collaborative, offer suggestions, and help refine ideas through conversation.", uh = `=== TASK: DRAFT CHARACTER CARD FIELDS FROM THIS CONVERSATION ===

The conversation above is a brainstorming session about a character. Convert the ideas that were settled on into concrete character card field values.

**What each field is for:**
- \`name\` — The character's name, as it should appear on the card.
- \`description\` — One concise paragraph blending appearance, demeanour, and a memorable quirk. This is the AI's "mental image" of the character.
- \`personality\` — Explicit behavioural rules: core motivations, fears, and how they treat others. Instructions to the AI, not prose about the character.
- \`scenario\` — Where and when the interaction takes place, and how {{char}} and {{user}} know each other.
- \`first_mes\` — The character's opening message: an action to ground the scene, dialogue that reveals personality, and a hook that invites a reply.
- \`mes_example\` — Two or three short exchanges written as \`{{user}}:\` / \`{{char}}:\` that demonstrate voice, vocabulary, and formatting.

**Rules for selecting content:**
1. Use only ideas that appear in the conversation above. Do not invent new material to fill a field.
2. If several options were explored for something, use the one the user endorsed. If the user never chose, prefer the most recent and say so in your justification.
3. Ideas that were discarded or talked out of must not appear in the output.
4. Omit any field the conversation does not support. An omitted field is better than a guessed one.
5. Write finished card content, not commentary. Do not describe what a field should contain — write it.
6. Use {{char}} and {{user}} rather than literal names inside \`scenario\`, \`first_mes\`, and \`mes_example\`.
7. Character material that fits none of the core fields — backstory, relationships, voice notes — should become a draft field with a short descriptive label.

**Current field values.** This is what you would be overwriting. Leave a field out entirely if the conversation adds nothing to what is already there.
{{#each coreFields}}
- \`{{this.id}}\` ({{this.label}}) — {{#if this.value}}{{this.value}}{{else}}*empty*{{/if}}
{{/each}}
{{#is_not_empty greetings}}

Existing alternate greetings:
{{#each greetings}}
- Greeting {{this.index}} — {{#if this.value}}{{this.value}}{{else}}*empty*{{/if}}
{{/each}}
{{/is_not_empty}}
{{#is_not_empty draftFields}}

Existing draft fields:
{{#each draftFields}}
- \`{{this.id}}\` ({{this.label}}) — {{#if this.value}}{{this.value}}{{else}}*empty*{{/if}}
{{/each}}
{{/is_not_empty}}
{{#if extractionHint}}

**The user has asked you to focus on this:** {{extractionHint}}
{{/if}}

In \`justification\`, briefly tell the user which fields you filled in and any choice you had to make between competing ideas from the conversation.`, G0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Tx = G0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ox = "[" + G0 + "][" + Tx + "]*", Dx = new RegExp("^" + Ox + "$");
function V0(t, r) {
  const a = [];
  let s = r.exec(t);
  for (; s; ) {
    const l = [];
    l.startIndex = r.lastIndex - s[0].length;
    const u = s.length;
    for (let f = 0; f < u; f++)
      l.push(s[f]);
    a.push(l), s = r.exec(t);
  }
  return a;
}
const ch = function(t) {
  const r = Dx.exec(t);
  return !(r === null || typeof r > "u");
};
function Mx(t) {
  return typeof t < "u";
}
const kx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function Y0(t, r) {
  r = Object.assign({}, kx, r);
  const a = [];
  let s = !1, l = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Gv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = Vv(t, u);
        continue;
      } else {
        let d = !1;
        t[u] === "/" && (d = !0, u++);
        let p = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          p += t[u];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), u--), !Ux(p)) {
          let _;
          return p.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + p + "' is an invalid name.", Nt("InvalidTag", _, an(t, u));
        }
        const g = zx(t, u);
        if (g === !1)
          return Nt("InvalidAttr", "Attributes for '" + p + "' have open quote.", an(t, u));
        let y = g.value;
        if (u = g.index, y[y.length - 1] === "/") {
          const _ = u - y.length;
          y = y.substring(0, y.length - 1);
          const b = Yv(y, r);
          if (b === !0)
            s = !0;
          else
            return Nt(b.err.code, b.err.msg, an(t, _ + b.err.line));
        } else if (d)
          if (g.tagClosed) {
            if (y.trim().length > 0)
              return Nt("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", an(t, f));
            if (a.length === 0)
              return Nt("InvalidTag", "Closing tag '" + p + "' has not been opened.", an(t, f));
            {
              const _ = a.pop();
              if (p !== _.tagName) {
                let b = an(t, _.tagStartPos);
                return Nt(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + b.line + ", col " + b.col + ") instead of closing tag '" + p + "'.",
                  an(t, f)
                );
              }
              a.length == 0 && (l = !0);
            }
          } else return Nt("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", an(t, u));
        else {
          const _ = Yv(y, r);
          if (_ !== !0)
            return Nt(_.err.code, _.err.msg, an(t, u - y.length + _.err.line));
          if (l === !0)
            return Nt("InvalidXml", "Multiple possible root nodes found.", an(t, u));
          r.unpairedTags.indexOf(p) !== -1 || a.push({ tagName: p, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = Vv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Gv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = Px(t, u);
            if (_ == -1)
              return Nt("InvalidChar", "char '&' is not expected.", an(t, u));
            u = _;
          } else if (l === !0 && !Zv(t[u]))
            return Nt("InvalidXml", "Extra text at the end", an(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (Zv(t[u]))
        continue;
      return Nt("InvalidChar", "char '" + t[u] + "' is not expected.", an(t, u));
    }
  if (s) {
    if (a.length == 1)
      return Nt("InvalidTag", "Unclosed tag '" + a[0].tagName + "'.", an(t, a[0].tagStartPos));
    if (a.length > 0)
      return Nt("InvalidXml", "Invalid '" + JSON.stringify(a.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return Nt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Zv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Gv(t, r) {
  const a = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(a, r - a);
      if (r > 5 && s === "xml")
        return Nt("InvalidXml", "XML declaration allowed only at the start of the document.", an(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Vv(t, r) {
  if (t.length > r + 5 && t[r + 1] === "-" && t[r + 2] === "-") {
    for (r += 3; r < t.length; r++)
      if (t[r] === "-" && t[r + 1] === "-" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  } else if (t.length > r + 8 && t[r + 1] === "D" && t[r + 2] === "O" && t[r + 3] === "C" && t[r + 4] === "T" && t[r + 5] === "Y" && t[r + 6] === "P" && t[r + 7] === "E") {
    let a = 1;
    for (r += 8; r < t.length; r++)
      if (t[r] === "<")
        a++;
      else if (t[r] === ">" && (a--, a === 0))
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
const jx = '"', Rx = "'";
function zx(t, r) {
  let a = "", s = "", l = !1;
  for (; r < t.length; r++) {
    if (t[r] === jx || t[r] === Rx)
      s === "" ? s = t[r] : s !== t[r] || (s = "");
    else if (t[r] === ">" && s === "") {
      l = !0;
      break;
    }
    a += t[r];
  }
  return s !== "" ? !1 : {
    value: a,
    index: r,
    tagClosed: l
  };
}
const Lx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Yv(t, r) {
  const a = V0(t, Lx), s = {};
  for (let l = 0; l < a.length; l++) {
    if (a[l][1].length === 0)
      return Nt("InvalidAttr", "Attribute '" + a[l][2] + "' has no space in starting.", Zs(a[l]));
    if (a[l][3] !== void 0 && a[l][4] === void 0)
      return Nt("InvalidAttr", "Attribute '" + a[l][2] + "' is without value.", Zs(a[l]));
    if (a[l][3] === void 0 && !r.allowBooleanAttributes)
      return Nt("InvalidAttr", "boolean attribute '" + a[l][2] + "' is not allowed.", Zs(a[l]));
    const u = a[l][2];
    if (!Bx(u))
      return Nt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Zs(a[l]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return Nt("InvalidAttr", "Attribute '" + u + "' is repeated.", Zs(a[l]));
  }
  return !0;
}
function Ix(t, r) {
  let a = /\d/;
  for (t[r] === "x" && (r++, a = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(a))
      break;
  }
  return -1;
}
function Px(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, Ix(t, r);
  let a = 0;
  for (; r < t.length; r++, a++)
    if (!(t[r].match(/\w/) && a < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function Nt(t, r, a) {
  return {
    err: {
      code: t,
      msg: r,
      line: a.line || a,
      col: a.col
    }
  };
}
function Bx(t) {
  return ch(t);
}
function Ux(t) {
  return ch(t);
}
function an(t, r) {
  const a = t.substring(0, r).split(/\r?\n/);
  return {
    line: a.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: a[a.length - 1].length + 1
  };
}
function Zs(t) {
  return t.startIndex + t[1].length;
}
const Fx = {
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
  updateTag: function(t, r, a) {
    return t;
  }
  // skipEmptyListItem: false
}, Hx = function(t) {
  return Object.assign({}, Fx, t);
};
class Gs {
  constructor(r) {
    this.tagname = r, this.child = [], this[":@"] = {};
  }
  add(r, a) {
    r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: a });
  }
  addChild(r) {
    r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
  }
}
function qx(t, r) {
  const a = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, l = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (l && Vx(t, r)) {
          r += 7;
          let d, p;
          [d, p, r] = Zx(t, r + 1), p.indexOf("&") === -1 && (a[Qx(d)] = {
            regx: RegExp(`&${d};`, "g"),
            val: p
          });
        } else if (l && Yx(t, r)) r += 8;
        else if (l && Xx(t, r)) r += 8;
        else if (l && $x(t, r)) r += 9;
        else if (Gx) u = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, f = "";
      } else if (t[r] === ">") {
        if (u ? t[r - 1] === "-" && t[r - 2] === "-" && (u = !1, s--) : s--, s === 0)
          break;
      } else t[r] === "[" ? l = !0 : f += t[r];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: a, i: r };
}
function Zx(t, r) {
  let a = "";
  for (; r < t.length && t[r] !== "'" && t[r] !== '"'; r++)
    a += t[r];
  if (a = a.trim(), a.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = t[r++];
  let l = "";
  for (; r < t.length && t[r] !== s; r++)
    l += t[r];
  return [a, l, r];
}
function Gx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function Vx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Yx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Xx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function $x(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function Qx(t) {
  if (ch(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Kx = /^[-+]?0x[a-fA-F0-9]+$/, Jx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Wx = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function eE(t, r = {}) {
  if (r = Object.assign({}, Wx, r), !t || typeof t != "string") return t;
  let a = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(a)) return t;
  if (t === "0") return 0;
  if (r.hex && Kx.test(a))
    return nE(a, 16);
  if (a.search(/[eE]/) !== -1) {
    const s = a.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (s) {
      if (r.leadingZeros)
        a = (s[1] || "") + s[3];
      else if (!(s[2] === "0" && s[3][0] === ".")) return t;
      return r.eNotation ? Number(a) : t;
    } else
      return t;
  } else {
    const s = Jx.exec(a);
    if (s) {
      const l = s[1], u = s[2];
      let f = tE(s[3]);
      if (!r.leadingZeros && u.length > 0 && l && a[2] !== ".") return t;
      if (!r.leadingZeros && u.length > 0 && !l && a[1] !== ".") return t;
      if (r.leadingZeros && u === t) return 0;
      {
        const d = Number(a), p = "" + d;
        return p.search(/[eE]/) !== -1 ? r.eNotation ? d : t : a.indexOf(".") !== -1 ? p === "0" && f === "" || p === f || l && p === "-" + f ? d : t : u ? f === p || l + f === p ? d : t : a === p || a === l + p ? d : t;
      }
    } else
      return t;
  }
}
function tE(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function nE(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function rE(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const a of t)
      if (typeof a == "string" && r === a || a instanceof RegExp && a.test(r))
        return !0;
  } : () => !1;
}
class aE {
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
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (a, s) => String.fromCodePoint(Number.parseInt(s, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (a, s) => String.fromCodePoint(Number.parseInt(s, 16)) }
    }, this.addExternalEntities = iE, this.parseXml = cE, this.parseTextData = sE, this.resolveNameSpace = oE, this.buildAttributesMap = uE, this.isItStopNode = pE, this.replaceEntitiesValue = dE, this.readStopNodeData = gE, this.saveTextToParentTag = hE, this.addChild = fE, this.ignoreAttributesFn = rE(this.options.ignoreAttributes);
  }
}
function iE(t) {
  const r = Object.keys(t);
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function sE(t, r, a, s, l, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const d = this.options.tagValueProcessor(r, t, a, l, u);
    return d == null ? t : typeof d != typeof t || d !== t ? d : this.options.trimValues ? Hd(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Hd(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function oE(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), a = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = a + r[1]);
  }
  return t;
}
const lE = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function uE(t, r, a) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = V0(t, lE), l = s.length, u = {};
    for (let f = 0; f < l; f++) {
      const d = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(d, r))
        continue;
      let p = s[f][4], g = this.options.attributeNamePrefix + d;
      if (d.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const y = this.options.attributeValueProcessor(d, p, r);
          y == null ? u[g] = p : typeof y != typeof p || y !== p ? u[g] = y : u[g] = Hd(
            p,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (u[g] = !0);
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
const cE = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new Gs("!xml");
  let a = r, s = "", l = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const d = za(t, ">", u, "Closing Tag is not closed.");
        let p = t.substring(u + 2, d).trim();
        if (this.options.removeNSPrefix) {
          const _ = p.indexOf(":");
          _ !== -1 && (p = p.substr(_ + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), a && (s = this.saveTextToParentTag(s, a, l));
        const g = l.substring(l.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let y = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (y = l.lastIndexOf(".", l.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = l.lastIndexOf("."), l = l.substring(0, y), a = this.tagsNodeStack.pop(), s = "", u = d;
      } else if (t[u + 1] === "?") {
        let d = Fd(t, u, !1, "?>");
        if (!d) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, a, l), !(this.options.ignoreDeclaration && d.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new Gs(d.tagName);
          p.add(this.options.textNodeName, ""), d.tagName !== d.tagExp && d.attrExpPresent && (p[":@"] = this.buildAttributesMap(d.tagExp, l, d.tagName)), this.addChild(a, p, l);
        }
        u = d.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const d = za(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = t.substring(u + 4, d - 2);
          s = this.saveTextToParentTag(s, a, l), a.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        u = d;
      } else if (t.substr(u + 1, 2) === "!D") {
        const d = qx(t, u);
        this.docTypeEntities = d.entities, u = d.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const d = za(t, "]]>", u, "CDATA is not closed.") - 2, p = t.substring(u + 9, d);
        s = this.saveTextToParentTag(s, a, l);
        let g = this.parseTextData(p, a.tagname, l, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? a.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : a.add(this.options.textNodeName, g), u = d + 2;
      } else {
        let d = Fd(t, u, this.options.removeNSPrefix), p = d.tagName;
        const g = d.rawTagName;
        let y = d.tagExp, _ = d.attrExpPresent, b = d.closeIndex;
        this.options.transformTagName && (p = this.options.transformTagName(p)), a && s && a.tagname !== "!xml" && (s = this.saveTextToParentTag(s, a, l, !1));
        const m = a;
        if (m && this.options.unpairedTags.indexOf(m.tagname) !== -1 && (a = this.tagsNodeStack.pop(), l = l.substring(0, l.lastIndexOf("."))), p !== r.tagname && (l += l ? "." + p : p), this.isItStopNode(this.options.stopNodes, l, p)) {
          let h = "";
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1)
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), l = l.substr(0, l.length - 1), y = p) : y = y.substr(0, y.length - 1), u = d.closeIndex;
          else if (this.options.unpairedTags.indexOf(p) !== -1)
            u = d.closeIndex;
          else {
            const w = this.readStopNodeData(t, g, b + 1);
            if (!w) throw new Error(`Unexpected end of ${g}`);
            u = w.i, h = w.tagContent;
          }
          const x = new Gs(p);
          p !== y && _ && (x[":@"] = this.buildAttributesMap(y, l, p)), h && (h = this.parseTextData(h, p, l, !0, _, !0, !0)), l = l.substr(0, l.lastIndexOf(".")), x.add(this.options.textNodeName, h), this.addChild(a, x, l);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), l = l.substr(0, l.length - 1), y = p) : y = y.substr(0, y.length - 1), this.options.transformTagName && (p = this.options.transformTagName(p));
            const h = new Gs(p);
            p !== y && _ && (h[":@"] = this.buildAttributesMap(y, l, p)), this.addChild(a, h, l), l = l.substr(0, l.lastIndexOf("."));
          } else {
            const h = new Gs(p);
            this.tagsNodeStack.push(a), p !== y && _ && (h[":@"] = this.buildAttributesMap(y, l, p)), this.addChild(a, h, l), a = h;
          }
          s = "", u = b;
        }
      }
    else
      s += t[u];
  return r.child;
};
function fE(t, r, a) {
  const s = this.options.updateTag(r.tagname, a, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const dE = function(t) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      const a = this.docTypeEntities[r];
      t = t.replace(a.regx, a.val);
    }
    for (let r in this.lastEntities) {
      const a = this.lastEntities[r];
      t = t.replace(a.regex, a.val);
    }
    if (this.options.htmlEntities)
      for (let r in this.htmlEntities) {
        const a = this.htmlEntities[r];
        t = t.replace(a.regex, a.val);
      }
    t = t.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return t;
};
function hE(t, r, a, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    a,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function pE(t, r, a) {
  const s = "*." + a;
  for (const l in t) {
    const u = t[l];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function mE(t, r, a = ">") {
  let s, l = "";
  for (let u = r; u < t.length; u++) {
    let f = t[u];
    if (s)
      f === s && (s = "");
    else if (f === '"' || f === "'")
      s = f;
    else if (f === a[0])
      if (a[1]) {
        if (t[u + 1] === a[1])
          return {
            data: l,
            index: u
          };
      } else
        return {
          data: l,
          index: u
        };
    else f === "	" && (f = " ");
    l += f;
  }
}
function za(t, r, a, s) {
  const l = t.indexOf(r, a);
  if (l === -1)
    throw new Error(s);
  return l + r.length - 1;
}
function Fd(t, r, a, s = ">") {
  const l = mE(t, r + 1, s);
  if (!l) return;
  let u = l.data;
  const f = l.index, d = u.search(/\s/);
  let p = u, g = !0;
  d !== -1 && (p = u.substring(0, d), u = u.substring(d + 1).trimStart());
  const y = p;
  if (a) {
    const _ = p.indexOf(":");
    _ !== -1 && (p = p.substr(_ + 1), g = p !== l.data.substr(_ + 1));
  }
  return {
    tagName: p,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: g,
    rawTagName: y
  };
}
function gE(t, r, a) {
  const s = a;
  let l = 1;
  for (; a < t.length; a++)
    if (t[a] === "<")
      if (t[a + 1] === "/") {
        const u = za(t, ">", a, `${r} is not closed`);
        if (t.substring(a + 2, u).trim() === r && (l--, l === 0))
          return {
            tagContent: t.substring(s, a),
            i: u
          };
        a = u;
      } else if (t[a + 1] === "?")
        a = za(t, "?>", a + 1, "StopNode is not closed.");
      else if (t.substr(a + 1, 3) === "!--")
        a = za(t, "-->", a + 3, "StopNode is not closed.");
      else if (t.substr(a + 1, 2) === "![")
        a = za(t, "]]>", a, "StopNode is not closed.") - 2;
      else {
        const u = Fd(t, a, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && l++, a = u.closeIndex);
      }
}
function Hd(t, r, a) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : eE(t, a);
  } else
    return Mx(t) ? t : "";
}
function vE(t, r) {
  return X0(t, r);
}
function X0(t, r, a) {
  let s;
  const l = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], d = yE(f);
    let p = "";
    if (a === void 0 ? p = d : p = a + "." + d, d === r.textNodeName)
      s === void 0 ? s = f[d] : s += "" + f[d];
    else {
      if (d === void 0)
        continue;
      if (f[d]) {
        let g = X0(f[d], r, p);
        const y = _E(g, r);
        f[":@"] ? bE(g, f[":@"], p, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), l[d] !== void 0 && l.hasOwnProperty(d) ? (Array.isArray(l[d]) || (l[d] = [l[d]]), l[d].push(g)) : r.isArray(d, p, y) ? l[d] = [g] : l[d] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (l[r.textNodeName] = s) : s !== void 0 && (l[r.textNodeName] = s), l;
}
function yE(t) {
  const r = Object.keys(t);
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (s !== ":@") return s;
  }
}
function bE(t, r, a, s) {
  if (r) {
    const l = Object.keys(r), u = l.length;
    for (let f = 0; f < u; f++) {
      const d = l[f];
      s.isArray(d, a + "." + d, !0, !0) ? t[d] = [r[d]] : t[d] = r[d];
    }
  }
}
function _E(t, r) {
  const { textNodeName: a } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[a] || typeof t[a] == "boolean" || t[a] === 0));
}
class SE {
  constructor(r) {
    this.externalEntities = {}, this.options = Hx(r);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(r, a) {
    if (typeof r != "string") if (r.toString)
      r = r.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (a) {
      a === !0 && (a = {});
      const u = Y0(r, a);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new aE(this.options);
    s.addExternalEntities(this.externalEntities);
    const l = s.parseXml(r);
    return this.options.preserveOrder || l === void 0 ? l : vE(l, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(r, a) {
    if (a.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (r.indexOf("&") !== -1 || r.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (a === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[r] = a;
  }
}
const xE = {
  validate: Y0
}, EE = new SE({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function qd(t, r) {
  if (!(!r || !t || !r.properties))
    for (const a in r.properties) {
      if (!t.hasOwnProperty(a)) continue;
      const s = r.properties[a];
      let l = t[a];
      s.type === "array" && !Array.isArray(l) && (l = [l], t[a] = l), s.type === "object" && typeof l == "object" && l !== null ? qd(l, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(l) && l.forEach((u) => qd(u, s.items)), s.type === "string" && typeof l != "string" ? t[a] = String(l) : s.type === "array" && s.items?.type === "string" && Array.isArray(l) && (t[a] = l.map(String));
    }
}
const wE = /^```(?:\w+)?[ \t]*\r?\n?((?:(?!```)[\s\S])*?)\r?\n?```$/;
function CE(t) {
  const r = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
  let a, s = null;
  for (; (a = r.exec(t)) !== null; )
    s = a[1].trim();
  return s;
}
function La(t) {
  if (t == null)
    return "";
  if (typeof t != "object")
    return String(t).trim();
  if ("#text" in t)
    return La(t["#text"]);
  if ("response" in t)
    return La(t.response);
  if ("message" in t)
    return La(t.message);
  const r = Object.values(t)[0];
  return La(r);
}
function $0(t, r, a = {}) {
  const s = t.trim();
  if (r === "none") {
    const f = s.match(wE);
    return f ? f[1].trim() : s;
  }
  let u = CE(t) ?? s;
  try {
    switch (r) {
      case "xml": {
        if (a.schema) {
          const d = xE.validate(u);
          if (d !== !0)
            throw new Error(`Model response is not valid XML: ${d.err.msg}`);
        }
        let f = EE.parse(u);
        if (f.root)
          f = f.root;
        else if (!a.schema && f.response !== void 0)
          return La(f.response);
        return a.schema ? (qd(f, a.schema), f) : La(f);
      }
      case "json": {
        const f = JSON.parse(u);
        return a.schema ? f : La(f);
      }
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (f) {
    if (!a.schema) {
      const d = u.match(/<response>([\s\S]*)/);
      if (d) return d[1].replace(/<\/[\s\S]*$/, "").trim();
      const p = u.match(/"response":\s*"([\s\S]*)/);
      if (p) return p[1].replace(/"\s*}\s*$/, "");
    }
    throw console.error(`Error parsing response in format '${r}':`, f), console.error("Raw content received:", t), r === "xml" ? f.message.startsWith("Model response is not valid XML:") ? f : new Error(`Model response is not valid XML: ${f.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${f.message}`);
  }
}
function Xv(t, r) {
  const a = t.trim();
  switch (r) {
    case "xml":
      return `<response>${a}`;
    case "json":
      return `{
  "response": ${JSON.stringify(a).slice(0, -1)}`;
    case "none":
      return a;
    default:
      throw new Error(`Unsupported format specified: ${r}`);
  }
}
const Dn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Tr = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First_Message",
  mes_example: "Example_Dialogue"
}, Q0 = "alternate_greetings_", Ru = (t) => t.startsWith(Q0), Ii = (t) => parseInt(t.split("_")[2]);
function wu(t) {
  const a = t.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return a.map((l, u) => {
    const f = l.replace(/^\d+/, "");
    if (f) {
      const d = s ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return s || (s = !0), d;
    }
    return "";
  }).join("");
}
var jl = { exports: {} }, Rl = { exports: {} }, Qn = {}, pn = {}, $v;
function vn() {
  if ($v) return pn;
  $v = 1, pn.__esModule = !0, pn.extend = l, pn.indexOf = p, pn.escapeExpression = g, pn.isEmpty = y, pn.createFrame = _, pn.blockParams = b, pn.appendContextPath = m;
  var t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, a = /[&<>"'`=]/;
  function s(h) {
    return t[h];
  }
  function l(h) {
    for (var x = 1; x < arguments.length; x++)
      for (var w in arguments[x])
        Object.prototype.hasOwnProperty.call(arguments[x], w) && (h[w] = arguments[x][w]);
    return h;
  }
  var u = Object.prototype.toString;
  pn.toString = u;
  var f = function(x) {
    return typeof x == "function";
  };
  f(/x/) && (pn.isFunction = f = function(h) {
    return typeof h == "function" && u.call(h) === "[object Function]";
  }), pn.isFunction = f;
  var d = Array.isArray || function(h) {
    return h && typeof h == "object" ? u.call(h) === "[object Array]" : !1;
  };
  pn.isArray = d;
  function p(h, x) {
    for (var w = 0, T = h.length; w < T; w++)
      if (h[w] === x)
        return w;
    return -1;
  }
  function g(h) {
    if (typeof h != "string") {
      if (h && h.toHTML)
        return h.toHTML();
      if (h == null)
        return "";
      if (!h)
        return h + "";
      h = "" + h;
    }
    return a.test(h) ? h.replace(r, s) : h;
  }
  function y(h) {
    return !h && h !== 0 ? !0 : !!(d(h) && h.length === 0);
  }
  function _(h) {
    var x = l({}, h);
    return x._parent = h, x;
  }
  function b(h, x) {
    return h.path = x, h;
  }
  function m(h, x) {
    return (h ? h + "." : "") + x;
  }
  return pn;
}
var zl = { exports: {} }, Qv;
function er() {
  return Qv || (Qv = 1, (function(t, r) {
    r.__esModule = !0;
    var a = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(l, u) {
      var f = u && u.loc, d = void 0, p = void 0, g = void 0, y = void 0;
      f && (d = f.start.line, p = f.end.line, g = f.start.column, y = f.end.column, l += " - " + d + ":" + g);
      for (var _ = Error.prototype.constructor.call(this, l), b = 0; b < a.length; b++)
        this[a[b]] = _[a[b]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = d, this.endLineNumber = p, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: g,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: y,
          enumerable: !0
        })) : (this.column = g, this.endColumn = y));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(zl, zl.exports)), zl.exports;
}
var Vs = {}, Ll = { exports: {} }, Kv;
function AE() {
  return Kv || (Kv = 1, (function(t, r) {
    r.__esModule = !0;
    var a = vn();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(l, u) {
        var f = u.inverse, d = u.fn;
        if (l === !0)
          return d(this);
        if (l === !1 || l == null)
          return f(this);
        if (a.isArray(l))
          return l.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(l, u)) : f(this);
        if (u.data && u.ids) {
          var p = a.createFrame(u.data);
          p.contextPath = a.appendContextPath(u.data.contextPath, u.name), u = { data: p };
        }
        return d(l, u);
      });
    }, t.exports = r.default;
  })(Ll, Ll.exports)), Ll.exports;
}
var Il = { exports: {} }, Jv;
function NE() {
  return Jv || (Jv = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = vn(), l = er(), u = a(l);
    r.default = function(f) {
      f.registerHelper("each", function(d, p) {
        if (!p)
          throw new u.default("Must pass iterator to #each");
        var g = p.fn, y = p.inverse, _ = 0, b = "", m = void 0, h = void 0;
        p.data && p.ids && (h = s.appendContextPath(p.data.contextPath, p.ids[0]) + "."), s.isFunction(d) && (d = d.call(this)), p.data && (m = s.createFrame(p.data));
        function x(E, N, M) {
          m && (m.key = E, m.index = N, m.first = N === 0, m.last = !!M, h && (m.contextPath = h + E)), b = b + g(d[E], {
            data: m,
            blockParams: s.blockParams([d[E], E], [h + E, null])
          });
        }
        if (d && typeof d == "object")
          if (s.isArray(d))
            for (var w = d.length; _ < w; _++)
              _ in d && x(_, _, _ === d.length - 1);
          else if (typeof Symbol == "function" && d[Symbol.iterator]) {
            for (var T = [], C = d[Symbol.iterator](), D = C.next(); !D.done; D = C.next())
              T.push(D.value);
            d = T;
            for (var w = d.length; _ < w; _++)
              x(_, _, _ === d.length - 1);
          } else
            (function() {
              var E = void 0;
              Object.keys(d).forEach(function(N) {
                E !== void 0 && x(E, _ - 1), E = N, _++;
              }), E !== void 0 && x(E, _ - 1, !0);
            })();
        return _ === 0 && (b = y(this)), b;
      });
    }, t.exports = r.default;
  })(Il, Il.exports)), Il.exports;
}
var Pl = { exports: {} }, Wv;
function TE() {
  return Wv || (Wv = 1, (function(t, r) {
    r.__esModule = !0;
    function a(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = er(), l = a(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new l.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Pl, Pl.exports)), Pl.exports;
}
var Bl = { exports: {} }, ey;
function OE() {
  return ey || (ey = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = vn(), l = er(), u = a(l);
    r.default = function(f) {
      f.registerHelper("if", function(d, p) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(d) && (d = d.call(this)), !p.hash.includeZero && !d || s.isEmpty(d) ? p.inverse(this) : p.fn(this);
      }), f.registerHelper("unless", function(d, p) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, d, {
          fn: p.inverse,
          inverse: p.fn,
          hash: p.hash
        });
      });
    }, t.exports = r.default;
  })(Bl, Bl.exports)), Bl.exports;
}
var Ul = { exports: {} }, ty;
function DE() {
  return ty || (ty = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      a.registerHelper("log", function() {
        for (var s = [void 0], l = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        l.hash.level != null ? f = l.hash.level : l.data && l.data.level != null && (f = l.data.level), s[0] = f, a.log.apply(a, s);
      });
    }, t.exports = r.default;
  })(Ul, Ul.exports)), Ul.exports;
}
var Fl = { exports: {} }, ny;
function ME() {
  return ny || (ny = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      a.registerHelper("lookup", function(s, l, u) {
        return s && u.lookupProperty(s, l);
      });
    }, t.exports = r.default;
  })(Fl, Fl.exports)), Fl.exports;
}
var Hl = { exports: {} }, ry;
function kE() {
  return ry || (ry = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = vn(), l = er(), u = a(l);
    r.default = function(f) {
      f.registerHelper("with", function(d, p) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(d) && (d = d.call(this));
        var g = p.fn;
        if (s.isEmpty(d))
          return p.inverse(this);
        var y = p.data;
        return p.data && p.ids && (y = s.createFrame(p.data), y.contextPath = s.appendContextPath(p.data.contextPath, p.ids[0])), g(d, {
          data: y,
          blockParams: s.blockParams([d], [y && y.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Hl, Hl.exports)), Hl.exports;
}
var ay;
function K0() {
  if (ay) return Vs;
  ay = 1, Vs.__esModule = !0, Vs.registerDefaultHelpers = x, Vs.moveHelperToHooks = w;
  function t(T) {
    return T && T.__esModule ? T : { default: T };
  }
  var r = AE(), a = t(r), s = NE(), l = t(s), u = TE(), f = t(u), d = OE(), p = t(d), g = DE(), y = t(g), _ = ME(), b = t(_), m = kE(), h = t(m);
  function x(T) {
    a.default(T), l.default(T), f.default(T), p.default(T), y.default(T), b.default(T), h.default(T);
  }
  function w(T, C, D) {
    T.helpers[C] && (T.hooks[C] = T.helpers[C], D || delete T.helpers[C]);
  }
  return Vs;
}
var ql = {}, Zl = { exports: {} }, iy;
function jE() {
  return iy || (iy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = vn();
    r.default = function(s) {
      s.registerDecorator("inline", function(l, u, f, d) {
        var p = l;
        return u.partials || (u.partials = {}, p = function(g, y) {
          var _ = f.partials;
          f.partials = a.extend({}, _, u.partials);
          var b = l(g, y);
          return f.partials = _, b;
        }), u.partials[d.args[0]] = d.fn, p;
      });
    }, t.exports = r.default;
  })(Zl, Zl.exports)), Zl.exports;
}
var sy;
function RE() {
  if (sy) return ql;
  sy = 1, ql.__esModule = !0, ql.registerDefaultDecorators = s;
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var r = jE(), a = t(r);
  function s(l) {
    a.default(l);
  }
  return ql;
}
var Gl = { exports: {} }, oy;
function J0() {
  return oy || (oy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = vn(), s = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(u) {
        if (typeof u == "string") {
          var f = a.indexOf(s.methodMap, u.toLowerCase());
          f >= 0 ? u = f : u = parseInt(u, 10);
        }
        return u;
      },
      // Can be overridden in the host environment
      log: function(u) {
        if (u = s.lookupLevel(u), typeof console < "u" && s.lookupLevel(s.level) <= u) {
          var f = s.methodMap[u];
          console[f] || (f = "log");
          for (var d = arguments.length, p = Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
            p[g - 1] = arguments[g];
          console[f].apply(console, p);
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Gl, Gl.exports)), Gl.exports;
}
var Mi = {}, Vl = {}, ly;
function zE() {
  if (ly) return Vl;
  ly = 1, Vl.__esModule = !0, Vl.createNewLookupObject = r;
  var t = vn();
  function r() {
    for (var a = arguments.length, s = Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Vl;
}
var uy;
function W0() {
  if (uy) return Mi;
  uy = 1, Mi.__esModule = !0, Mi.createProtoAccessControl = u, Mi.resultIsAllowed = f, Mi.resetLoggedProperties = g;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = zE(), a = J0(), s = t(a), l = /* @__PURE__ */ Object.create(null);
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
    return d(typeof y == "function" ? _.methods : _.properties, b);
  }
  function d(y, _) {
    return y.whitelist[_] !== void 0 ? y.whitelist[_] === !0 : y.defaultValue !== void 0 ? y.defaultValue : (p(_), !1);
  }
  function p(y) {
    l[y] !== !0 && (l[y] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + y + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(l).forEach(function(y) {
      delete l[y];
    });
  }
  return Mi;
}
var cy;
function fh() {
  if (cy) return Qn;
  cy = 1, Qn.__esModule = !0, Qn.HandlebarsEnvironment = h;
  function t(w) {
    return w && w.__esModule ? w : { default: w };
  }
  var r = vn(), a = er(), s = t(a), l = K0(), u = RE(), f = J0(), d = t(f), p = W0(), g = "4.7.8";
  Qn.VERSION = g;
  var y = 8;
  Qn.COMPILER_REVISION = y;
  var _ = 7;
  Qn.LAST_COMPATIBLE_COMPILER_REVISION = _;
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
  Qn.REVISION_CHANGES = b;
  var m = "[object Object]";
  function h(w, T, C) {
    this.helpers = w || {}, this.partials = T || {}, this.decorators = C || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: d.default,
    log: d.default.log,
    registerHelper: function(T, C) {
      if (r.toString.call(T) === m) {
        if (C)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, T);
      } else
        this.helpers[T] = C;
    },
    unregisterHelper: function(T) {
      delete this.helpers[T];
    },
    registerPartial: function(T, C) {
      if (r.toString.call(T) === m)
        r.extend(this.partials, T);
      else {
        if (typeof C > "u")
          throw new s.default('Attempting to register a partial called "' + T + '" as undefined');
        this.partials[T] = C;
      }
    },
    unregisterPartial: function(T) {
      delete this.partials[T];
    },
    registerDecorator: function(T, C) {
      if (r.toString.call(T) === m) {
        if (C)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, T);
      } else
        this.decorators[T] = C;
    },
    unregisterDecorator: function(T) {
      delete this.decorators[T];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      p.resetLoggedProperties();
    }
  };
  var x = d.default.log;
  return Qn.log = x, Qn.createFrame = r.createFrame, Qn.logger = d.default, Qn;
}
var Yl = { exports: {} }, fy;
function LE() {
  return fy || (fy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(s) {
      this.string = s;
    }
    a.prototype.toString = a.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = a, t.exports = r.default;
  })(Yl, Yl.exports)), Yl.exports;
}
var Cr = {}, Xl = {}, dy;
function IE() {
  if (dy) return Xl;
  dy = 1, Xl.__esModule = !0, Xl.wrapHelper = t;
  function t(r, a) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = a(u), r.apply(this, arguments);
    };
    return s;
  }
  return Xl;
}
var hy;
function PE() {
  if (hy) return Cr;
  hy = 1, Cr.__esModule = !0, Cr.checkRevision = y, Cr.template = _, Cr.wrapProgram = b, Cr.resolvePartial = m, Cr.invokePartial = h, Cr.noop = x;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function r(E) {
    if (E && E.__esModule)
      return E;
    var N = {};
    if (E != null)
      for (var M in E)
        Object.prototype.hasOwnProperty.call(E, M) && (N[M] = E[M]);
    return N.default = E, N;
  }
  var a = vn(), s = r(a), l = er(), u = t(l), f = fh(), d = K0(), p = IE(), g = W0();
  function y(E) {
    var N = E && E[0] || 1, M = f.COMPILER_REVISION;
    if (!(N >= f.LAST_COMPATIBLE_COMPILER_REVISION && N <= f.COMPILER_REVISION))
      if (N < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var j = f.REVISION_CHANGES[M], L = f.REVISION_CHANGES[N];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + j + ") or downgrade your runtime to an older version (" + L + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + E[1] + ").");
  }
  function _(E, N) {
    if (!N)
      throw new u.default("No environment passed to template");
    if (!E || !E.main)
      throw new u.default("Unknown template object: " + typeof E);
    E.main.decorator = E.main_d, N.VM.checkRevision(E.compiler);
    var M = E.compiler && E.compiler[0] === 7;
    function j(I, q, $) {
      $.hash && (q = s.extend({}, q, $.hash), $.ids && ($.ids[0] = !0)), I = N.VM.resolvePartial.call(this, I, q, $);
      var fe = s.extend({}, $, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), de = N.VM.invokePartial.call(this, I, q, fe);
      if (de == null && N.compile && ($.partials[$.name] = N.compile(I, E.compilerOptions, N), de = $.partials[$.name](q, fe)), de != null) {
        if ($.indent) {
          for (var _e = de.split(`
`), B = 0, ae = _e.length; B < ae && !(!_e[B] && B + 1 === ae); B++)
            _e[B] = $.indent + _e[B];
          de = _e.join(`
`);
        }
        return de;
      } else
        throw new u.default("The partial " + $.name + " could not be compiled when running in runtime-only mode");
    }
    var L = {
      strict: function(q, $, fe) {
        if (!q || !($ in q))
          throw new u.default('"' + $ + '" not defined in ' + q, {
            loc: fe
          });
        return L.lookupProperty(q, $);
      },
      lookupProperty: function(q, $) {
        var fe = q[$];
        if (fe == null || Object.prototype.hasOwnProperty.call(q, $) || g.resultIsAllowed(fe, L.protoAccessControl, $))
          return fe;
      },
      lookup: function(q, $) {
        for (var fe = q.length, de = 0; de < fe; de++) {
          var _e = q[de] && L.lookupProperty(q[de], $);
          if (_e != null)
            return q[de][$];
        }
      },
      lambda: function(q, $) {
        return typeof q == "function" ? q.call($) : q;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: j,
      fn: function(q) {
        var $ = E[q];
        return $.decorator = E[q + "_d"], $;
      },
      programs: [],
      program: function(q, $, fe, de, _e) {
        var B = this.programs[q], ae = this.fn(q);
        return $ || _e || de || fe ? B = b(this, q, ae, $, fe, de, _e) : B || (B = this.programs[q] = b(this, q, ae)), B;
      },
      data: function(q, $) {
        for (; q && $--; )
          q = q._parent;
        return q;
      },
      mergeIfNeeded: function(q, $) {
        var fe = q || $;
        return q && $ && q !== $ && (fe = s.extend({}, $, q)), fe;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: N.VM.noop,
      compilerInfo: E.compiler
    };
    function Y(I) {
      var q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], $ = q.data;
      Y._setup(q), !q.partial && E.useData && ($ = w(I, $));
      var fe = void 0, de = E.useBlockParams ? [] : void 0;
      E.useDepths && (q.depths ? fe = I != q.depths[0] ? [I].concat(q.depths) : q.depths : fe = [I]);
      function _e(B) {
        return "" + E.main(L, B, L.helpers, L.partials, $, de, fe);
      }
      return _e = T(E.main, _e, L, q.depths || [], $, de), _e(I, q);
    }
    return Y.isTop = !0, Y._setup = function(I) {
      if (I.partial)
        L.protoAccessControl = I.protoAccessControl, L.helpers = I.helpers, L.partials = I.partials, L.decorators = I.decorators, L.hooks = I.hooks;
      else {
        var q = s.extend({}, N.helpers, I.helpers);
        C(q, L), L.helpers = q, E.usePartial && (L.partials = L.mergeIfNeeded(I.partials, N.partials)), (E.usePartial || E.useDecorators) && (L.decorators = s.extend({}, N.decorators, I.decorators)), L.hooks = {}, L.protoAccessControl = g.createProtoAccessControl(I);
        var $ = I.allowCallsToHelperMissing || M;
        d.moveHelperToHooks(L, "helperMissing", $), d.moveHelperToHooks(L, "blockHelperMissing", $);
      }
    }, Y._child = function(I, q, $, fe) {
      if (E.useBlockParams && !$)
        throw new u.default("must pass block params");
      if (E.useDepths && !fe)
        throw new u.default("must pass parent depths");
      return b(L, I, E[I], q, 0, $, fe);
    }, Y;
  }
  function b(E, N, M, j, L, Y, I) {
    function q($) {
      var fe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], de = I;
      return I && $ != I[0] && !($ === E.nullContext && I[0] === null) && (de = [$].concat(I)), M(E, $, E.helpers, E.partials, fe.data || j, Y && [fe.blockParams].concat(Y), de);
    }
    return q = T(M, q, E, I, j, Y), q.program = N, q.depth = I ? I.length : 0, q.blockParams = L || 0, q;
  }
  function m(E, N, M) {
    return E ? !E.call && !M.name && (M.name = E, E = M.partials[E]) : M.name === "@partial-block" ? E = M.data["partial-block"] : E = M.partials[M.name], E;
  }
  function h(E, N, M) {
    var j = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var L = void 0;
    if (M.fn && M.fn !== x && (function() {
      M.data = f.createFrame(M.data);
      var Y = M.fn;
      L = M.data["partial-block"] = function(q) {
        var $ = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return $.data = f.createFrame($.data), $.data["partial-block"] = j, Y(q, $);
      }, Y.partials && (M.partials = s.extend({}, M.partials, Y.partials));
    })(), E === void 0 && L && (E = L), E === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (E instanceof Function)
      return E(N, M);
  }
  function x() {
    return "";
  }
  function w(E, N) {
    return (!N || !("root" in N)) && (N = N ? f.createFrame(N) : {}, N.root = E), N;
  }
  function T(E, N, M, j, L, Y) {
    if (E.decorator) {
      var I = {};
      N = E.decorator(N, I, M, j && j[0], L, Y, j), s.extend(N, I);
    }
    return N;
  }
  function C(E, N) {
    Object.keys(E).forEach(function(M) {
      var j = E[M];
      E[M] = D(j, N);
    });
  }
  function D(E, N) {
    var M = N.lookupProperty;
    return p.wrapHelper(E, function(j) {
      return s.extend({ lookupProperty: M }, j);
    });
  }
  return Cr;
}
var $l = { exports: {} }, py;
function e1() {
  return py || (py = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var s = globalThis.Handlebars;
      a.noConflict = function() {
        return globalThis.Handlebars === a && (globalThis.Handlebars = s), a;
      };
    }, t.exports = r.default;
  })($l, $l.exports)), $l.exports;
}
var my;
function BE() {
  return my || (my = 1, (function(t, r) {
    r.__esModule = !0;
    function a(C) {
      return C && C.__esModule ? C : { default: C };
    }
    function s(C) {
      if (C && C.__esModule)
        return C;
      var D = {};
      if (C != null)
        for (var E in C)
          Object.prototype.hasOwnProperty.call(C, E) && (D[E] = C[E]);
      return D.default = C, D;
    }
    var l = fh(), u = s(l), f = LE(), d = a(f), p = er(), g = a(p), y = vn(), _ = s(y), b = PE(), m = s(b), h = e1(), x = a(h);
    function w() {
      var C = new u.HandlebarsEnvironment();
      return _.extend(C, u), C.SafeString = d.default, C.Exception = g.default, C.Utils = _, C.escapeExpression = _.escapeExpression, C.VM = m, C.template = function(D) {
        return m.template(D, C);
      }, C;
    }
    var T = w();
    T.create = w, x.default(T), T.default = T, r.default = T, t.exports = r.default;
  })(Rl, Rl.exports)), Rl.exports;
}
var Ql = { exports: {} }, gy;
function t1() {
  return gy || (gy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(l) {
          return l.type === "SubExpression" || (l.type === "MustacheStatement" || l.type === "BlockStatement") && !!(l.params && l.params.length || l.hash);
        },
        scopedId: function(l) {
          return /^\.|this\b/.test(l.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(l) {
          return l.parts.length === 1 && !a.helpers.scopedId(l) && !l.depth;
        }
      }
    };
    r.default = a, t.exports = r.default;
  })(Ql, Ql.exports)), Ql.exports;
}
var ki = {}, Kl = { exports: {} }, vy;
function UE() {
  return vy || (vy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(d, p, g, y, _, b, m) {
          var h = b.length - 1;
          switch (_) {
            case 1:
              return b[h - 1];
            case 2:
              this.$ = y.prepareProgram(b[h]);
              break;
            case 3:
              this.$ = b[h];
              break;
            case 4:
              this.$ = b[h];
              break;
            case 5:
              this.$ = b[h];
              break;
            case 6:
              this.$ = b[h];
              break;
            case 7:
              this.$ = b[h];
              break;
            case 8:
              this.$ = b[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: y.stripComment(b[h]),
                strip: y.stripFlags(b[h], b[h]),
                loc: y.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: b[h],
                value: b[h],
                loc: y.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = y.prepareRawBlock(b[h - 2], b[h - 1], b[h], this._$);
              break;
            case 12:
              this.$ = { path: b[h - 3], params: b[h - 2], hash: b[h - 1] };
              break;
            case 13:
              this.$ = y.prepareBlock(b[h - 3], b[h - 2], b[h - 1], b[h], !1, this._$);
              break;
            case 14:
              this.$ = y.prepareBlock(b[h - 3], b[h - 2], b[h - 1], b[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: b[h - 5], path: b[h - 4], params: b[h - 3], hash: b[h - 2], blockParams: b[h - 1], strip: y.stripFlags(b[h - 5], b[h]) };
              break;
            case 16:
              this.$ = { path: b[h - 4], params: b[h - 3], hash: b[h - 2], blockParams: b[h - 1], strip: y.stripFlags(b[h - 5], b[h]) };
              break;
            case 17:
              this.$ = { path: b[h - 4], params: b[h - 3], hash: b[h - 2], blockParams: b[h - 1], strip: y.stripFlags(b[h - 5], b[h]) };
              break;
            case 18:
              this.$ = { strip: y.stripFlags(b[h - 1], b[h - 1]), program: b[h] };
              break;
            case 19:
              var x = y.prepareBlock(b[h - 2], b[h - 1], b[h], b[h], !1, this._$), w = y.prepareProgram([x], b[h - 1].loc);
              w.chained = !0, this.$ = { strip: b[h - 2].strip, program: w, chain: !0 };
              break;
            case 20:
              this.$ = b[h];
              break;
            case 21:
              this.$ = { path: b[h - 1], strip: y.stripFlags(b[h - 2], b[h]) };
              break;
            case 22:
              this.$ = y.prepareMustache(b[h - 3], b[h - 2], b[h - 1], b[h - 4], y.stripFlags(b[h - 4], b[h]), this._$);
              break;
            case 23:
              this.$ = y.prepareMustache(b[h - 3], b[h - 2], b[h - 1], b[h - 4], y.stripFlags(b[h - 4], b[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: b[h - 3],
                params: b[h - 2],
                hash: b[h - 1],
                indent: "",
                strip: y.stripFlags(b[h - 4], b[h]),
                loc: y.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = y.preparePartialBlock(b[h - 2], b[h - 1], b[h], this._$);
              break;
            case 26:
              this.$ = { path: b[h - 3], params: b[h - 2], hash: b[h - 1], strip: y.stripFlags(b[h - 4], b[h]) };
              break;
            case 27:
              this.$ = b[h];
              break;
            case 28:
              this.$ = b[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: b[h - 3],
                params: b[h - 2],
                hash: b[h - 1],
                loc: y.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: b[h], loc: y.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: y.id(b[h - 2]), value: b[h], loc: y.locInfo(this._$) };
              break;
            case 32:
              this.$ = y.id(b[h - 1]);
              break;
            case 33:
              this.$ = b[h];
              break;
            case 34:
              this.$ = b[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: b[h], original: b[h], loc: y.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(b[h]), original: Number(b[h]), loc: y.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: b[h] === "true", original: b[h] === "true", loc: y.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: y.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: y.locInfo(this._$) };
              break;
            case 40:
              this.$ = b[h];
              break;
            case 41:
              this.$ = b[h];
              break;
            case 42:
              this.$ = y.preparePath(!0, b[h], this._$);
              break;
            case 43:
              this.$ = y.preparePath(!1, b[h], this._$);
              break;
            case 44:
              b[h - 2].push({ part: y.id(b[h]), original: b[h], separator: b[h - 1] }), this.$ = b[h - 2];
              break;
            case 45:
              this.$ = [{ part: y.id(b[h]), original: b[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              b[h - 1].push(b[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              b[h - 1].push(b[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              b[h - 1].push(b[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              b[h - 1].push(b[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              b[h - 1].push(b[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              b[h - 1].push(b[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              b[h - 1].push(b[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              b[h - 1].push(b[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              b[h - 1].push(b[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              b[h - 1].push(b[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              b[h - 1].push(b[h]);
              break;
            case 98:
              this.$ = [b[h]];
              break;
            case 99:
              b[h - 1].push(b[h]);
              break;
            case 100:
              this.$ = [b[h]];
              break;
            case 101:
              b[h - 1].push(b[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(d, p) {
          throw new Error(d);
        },
        parse: function(d) {
          var p = this, g = [0], y = [null], _ = [], b = this.table, m = "", h = 0, x = 0;
          this.lexer.setInput(d), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var w = this.lexer.yylloc;
          _.push(w);
          var T = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function C() {
            var fe;
            return fe = p.lexer.lex() || 1, typeof fe != "number" && (fe = p.symbols_[fe] || fe), fe;
          }
          for (var D, E, N, M, j = {}, L, Y, I, q; ; ) {
            if (E = g[g.length - 1], this.defaultActions[E] ? N = this.defaultActions[E] : ((D === null || typeof D > "u") && (D = C()), N = b[E] && b[E][D]), typeof N > "u" || !N.length || !N[0]) {
              var $ = "";
              {
                q = [];
                for (L in b[E]) this.terminals_[L] && L > 2 && q.push("'" + this.terminals_[L] + "'");
                this.lexer.showPosition ? $ = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + q.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : $ = "Parse error on line " + (h + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError($, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: w, expected: q });
              }
            }
            if (N[0] instanceof Array && N.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + E + ", token: " + D);
            switch (N[0]) {
              case 1:
                g.push(D), y.push(this.lexer.yytext), _.push(this.lexer.yylloc), g.push(N[1]), D = null, x = this.lexer.yyleng, m = this.lexer.yytext, h = this.lexer.yylineno, w = this.lexer.yylloc;
                break;
              case 2:
                if (Y = this.productions_[N[1]][1], j.$ = y[y.length - Y], j._$ = { first_line: _[_.length - (Y || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - (Y || 1)].first_column, last_column: _[_.length - 1].last_column }, T && (j._$.range = [_[_.length - (Y || 1)].range[0], _[_.length - 1].range[1]]), M = this.performAction.call(j, m, x, h, this.yy, N[1], y, _), typeof M < "u")
                  return M;
                Y && (g = g.slice(0, -1 * Y * 2), y = y.slice(0, -1 * Y), _ = _.slice(0, -1 * Y)), g.push(this.productions_[N[1]][0]), y.push(j.$), _.push(j._$), I = b[g[g.length - 2]][g[g.length - 1]], g.push(I);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, l = (function() {
        var f = {
          EOF: 1,
          parseError: function(p, g) {
            if (this.yy.parser)
              this.yy.parser.parseError(p, g);
            else
              throw new Error(p);
          },
          setInput: function(p) {
            return this._input = p, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var p = this._input[0];
            this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
            var g = p.match(/(?:\r\n?|\n).*/g);
            return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), p;
          },
          unput: function(p) {
            var g = p.length, y = p.split(/(?:\r\n?|\n)/g);
            this._input = p + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var _ = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
            var b = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: y ? (y.length === _.length ? this.yylloc.first_column : 0) + _[_.length - y.length].length - y[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [b[0], b[0] + this.yyleng - g]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(p) {
            this.unput(this.match.slice(p));
          },
          pastInput: function() {
            var p = this.matched.substr(0, this.matched.length - this.match.length);
            return (p.length > 20 ? "..." : "") + p.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var p = this.match;
            return p.length < 20 && (p += this._input.substr(0, 20 - p.length)), (p.substr(0, 20) + (p.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var p = this.pastInput(), g = new Array(p.length + 1).join("-");
            return p + this.upcomingInput() + `
` + g + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var p, g, y, _, b;
            this._more || (this.yytext = "", this.match = "");
            for (var m = this._currentRules(), h = 0; h < m.length && (y = this._input.match(this.rules[m[h]]), !(y && (!g || y[0].length > g[0].length) && (g = y, _ = h, !this.options.flex))); h++)
              ;
            return g ? (b = g[0].match(/(?:\r\n?|\n).*/g), b && (this.yylineno += b.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: b ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], p = this.performAction.call(this, this.yy, this, m[_], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), p || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var p = this.next();
            return typeof p < "u" ? p : this.lex();
          },
          begin: function(p) {
            this.conditionStack.push(p);
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
          pushState: function(p) {
            this.begin(p);
          }
        };
        return f.options = {}, f.performAction = function(p, g, y, _) {
          function b(m, h) {
            return g.yytext = g.yytext.substring(m, g.yyleng - h + m);
          }
          switch (y) {
            case 0:
              if (g.yytext.slice(-2) === "\\\\" ? (b(0, 1), this.begin("mu")) : g.yytext.slice(-1) === "\\" ? (b(0, 1), this.begin("emu")) : this.begin("mu"), g.yytext) return 15;
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
              this.unput(g.yytext), this.popState(), this.begin("com");
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
              return g.yytext = b(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return g.yytext = b(1, 2).replace(/\\'/g, "'"), 80;
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
              return g.yytext = g.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, f.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], f.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, f;
      })();
      s.lexer = l;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    r.default = a, t.exports = r.default;
  })(Kl, Kl.exports)), Kl.exports;
}
var Jl = { exports: {} }, Wl = { exports: {} }, yy;
function n1() {
  return yy || (yy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = er(), l = a(s);
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
            throw new l.default('Unexpected node type "' + b.type + '" found when accepting ' + _ + " on " + y.type);
          y[_] = b;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(y, _) {
        if (this.acceptKey(y, _), !y[_])
          throw new l.default(y.type + " requires " + _);
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
            throw new l.default("Unknown type: " + y.type, y);
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
      BlockStatement: d,
      DecoratorBlock: d,
      PartialStatement: p,
      PartialBlockStatement: function(y) {
        p.call(this, y), this.acceptKey(y, "program");
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
    function f(g) {
      this.acceptRequired(g, "path"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    function d(g) {
      f.call(this, g), this.acceptKey(g, "program"), this.acceptKey(g, "inverse");
    }
    function p(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = u, t.exports = r.default;
  })(Wl, Wl.exports)), Wl.exports;
}
var by;
function FE() {
  return by || (by = 1, (function(t, r) {
    r.__esModule = !0;
    function a(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = n1(), l = a(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new l.default(), u.prototype.Program = function(y) {
      var _ = !this.options.ignoreStandalone, b = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var m = y.body, h = 0, x = m.length; h < x; h++) {
        var w = m[h], T = this.accept(w);
        if (T) {
          var C = f(m, h, b), D = d(m, h, b), E = T.openStandalone && C, N = T.closeStandalone && D, M = T.inlineStandalone && C && D;
          T.close && p(m, h, !0), T.open && g(m, h, !0), _ && M && (p(m, h), g(m, h) && w.type === "PartialStatement" && (w.indent = /([ \t]+$)/.exec(m[h - 1].original)[1])), _ && E && (p((w.program || w.inverse).body), g(m, h)), _ && N && (p(m, h), g((w.inverse || w.program).body));
        }
      }
      return y;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(y) {
      this.accept(y.program), this.accept(y.inverse);
      var _ = y.program || y.inverse, b = y.program && y.inverse, m = b, h = b;
      if (b && b.chained)
        for (m = b.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var x = {
        open: y.openStrip.open,
        close: y.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: d(_.body),
        closeStandalone: f((m || _).body)
      };
      if (y.openStrip.close && p(_.body, null, !0), b) {
        var w = y.inverseStrip;
        w.open && g(_.body, null, !0), w.close && p(m.body, null, !0), y.closeStrip.open && g(h.body, null, !0), !this.options.ignoreStandalone && f(_.body) && d(m.body) && (g(_.body), p(m.body));
      } else y.closeStrip.open && g(_.body, null, !0);
      return x;
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
      var m = y[_ - 1], h = y[_ - 2];
      if (!m)
        return b;
      if (m.type === "ContentStatement")
        return (h || !b ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(m.original);
    }
    function d(y, _, b) {
      _ === void 0 && (_ = -1);
      var m = y[_ + 1], h = y[_ + 2];
      if (!m)
        return b;
      if (m.type === "ContentStatement")
        return (h || !b ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(m.original);
    }
    function p(y, _, b) {
      var m = y[_ == null ? 0 : _ + 1];
      if (!(!m || m.type !== "ContentStatement" || !b && m.rightStripped)) {
        var h = m.value;
        m.value = m.value.replace(b ? /^\s+/ : /^[ \t]*\r?\n?/, ""), m.rightStripped = m.value !== h;
      }
    }
    function g(y, _, b) {
      var m = y[_ == null ? y.length - 1 : _ - 1];
      if (!(!m || m.type !== "ContentStatement" || !b && m.leftStripped)) {
        var h = m.value;
        return m.value = m.value.replace(b ? /\s+$/ : /[ \t]+$/, ""), m.leftStripped = m.value !== h, m.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Jl, Jl.exports)), Jl.exports;
}
var An = {}, _y;
function HE() {
  if (_y) return An;
  _y = 1, An.__esModule = !0, An.SourceLocation = l, An.id = u, An.stripFlags = f, An.stripComment = d, An.preparePath = p, An.prepareMustache = g, An.prepareRawBlock = y, An.prepareBlock = _, An.prepareProgram = b, An.preparePartialBlock = m;
  function t(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = er(), a = t(r);
  function s(h, x) {
    if (x = x.path ? x.path.original : x, h.path.original !== x) {
      var w = { loc: h.path.loc };
      throw new a.default(h.path.original + " doesn't match " + x, w);
    }
  }
  function l(h, x) {
    this.source = h, this.start = {
      line: x.first_line,
      column: x.first_column
    }, this.end = {
      line: x.last_line,
      column: x.last_column
    };
  }
  function u(h) {
    return /^\[.*\]$/.test(h) ? h.substring(1, h.length - 1) : h;
  }
  function f(h, x) {
    return {
      open: h.charAt(2) === "~",
      close: x.charAt(x.length - 3) === "~"
    };
  }
  function d(h) {
    return h.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function p(h, x, w) {
    w = this.locInfo(w);
    for (var T = h ? "@" : "", C = [], D = 0, E = 0, N = x.length; E < N; E++) {
      var M = x[E].part, j = x[E].original !== M;
      if (T += (x[E].separator || "") + M, !j && (M === ".." || M === "." || M === "this")) {
        if (C.length > 0)
          throw new a.default("Invalid path: " + T, { loc: w });
        M === ".." && D++;
      } else
        C.push(M);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: D,
      parts: C,
      original: T,
      loc: w
    };
  }
  function g(h, x, w, T, C, D) {
    var E = T.charAt(3) || T.charAt(2), N = E !== "{" && E !== "&", M = /\*/.test(T);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: h,
      params: x,
      hash: w,
      escaped: N,
      strip: C,
      loc: this.locInfo(D)
    };
  }
  function y(h, x, w, T) {
    s(h, w), T = this.locInfo(T);
    var C = {
      type: "Program",
      body: x,
      strip: {},
      loc: T
    };
    return {
      type: "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: T
    };
  }
  function _(h, x, w, T, C, D) {
    T && T.path && s(h, T);
    var E = /\*/.test(h.open);
    x.blockParams = h.blockParams;
    var N = void 0, M = void 0;
    if (w) {
      if (E)
        throw new a.default("Unexpected inverse block on decorator", w);
      w.chain && (w.program.body[0].closeStrip = T.strip), M = w.strip, N = w.program;
    }
    return C && (C = N, N = x, x = C), {
      type: E ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: x,
      inverse: N,
      openStrip: h.strip,
      inverseStrip: M,
      closeStrip: T && T.strip,
      loc: this.locInfo(D)
    };
  }
  function b(h, x) {
    if (!x && h.length) {
      var w = h[0].loc, T = h[h.length - 1].loc;
      w && T && (x = {
        source: w.source,
        start: {
          line: w.start.line,
          column: w.start.column
        },
        end: {
          line: T.end.line,
          column: T.end.column
        }
      });
    }
    return {
      type: "Program",
      body: h,
      strip: {},
      loc: x
    };
  }
  function m(h, x, w, T) {
    return s(h, w), {
      type: "PartialBlockStatement",
      name: h.path,
      params: h.params,
      hash: h.hash,
      program: x,
      openStrip: h.strip,
      closeStrip: w && w.strip,
      loc: this.locInfo(T)
    };
  }
  return An;
}
var Sy;
function qE() {
  if (Sy) return ki;
  Sy = 1, ki.__esModule = !0, ki.parseWithoutProcessing = y, ki.parse = _;
  function t(b) {
    if (b && b.__esModule)
      return b;
    var m = {};
    if (b != null)
      for (var h in b)
        Object.prototype.hasOwnProperty.call(b, h) && (m[h] = b[h]);
    return m.default = b, m;
  }
  function r(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var a = UE(), s = r(a), l = FE(), u = r(l), f = HE(), d = t(f), p = vn();
  ki.parser = s.default;
  var g = {};
  p.extend(g, d);
  function y(b, m) {
    if (b.type === "Program")
      return b;
    s.default.yy = g, g.locInfo = function(x) {
      return new g.SourceLocation(m && m.srcName, x);
    };
    var h = s.default.parse(b);
    return h;
  }
  function _(b, m) {
    var h = y(b, m), x = new u.default(m);
    return x.accept(h);
  }
  return ki;
}
var ji = {}, xy;
function ZE() {
  if (xy) return ji;
  xy = 1, ji.__esModule = !0, ji.Compiler = d, ji.precompile = p, ji.compile = g;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = er(), a = t(r), s = vn(), l = t1(), u = t(l), f = [].slice;
  function d() {
  }
  d.prototype = {
    compiler: d,
    equals: function(m) {
      var h = this.opcodes.length;
      if (m.opcodes.length !== h)
        return !1;
      for (var x = 0; x < h; x++) {
        var w = this.opcodes[x], T = m.opcodes[x];
        if (w.opcode !== T.opcode || !y(w.args, T.args))
          return !1;
      }
      h = this.children.length;
      for (var x = 0; x < h; x++)
        if (!this.children[x].equals(m.children[x]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(m, h) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, h.knownHelpers), this.accept(m);
    },
    compileProgram: function(m) {
      var h = new this.compiler(), x = h.compile(m, this.options), w = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[w] = x, this.useDepths = this.useDepths || x.useDepths, w;
    },
    accept: function(m) {
      if (!this[m.type])
        throw new a.default("Unknown type: " + m.type, m);
      this.sourceNode.unshift(m);
      var h = this[m.type](m);
      return this.sourceNode.shift(), h;
    },
    Program: function(m) {
      this.options.blockParams.unshift(m.blockParams);
      for (var h = m.body, x = h.length, w = 0; w < x; w++)
        this.accept(h[w]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = m.blockParams ? m.blockParams.length : 0, this;
    },
    BlockStatement: function(m) {
      _(m);
      var h = m.program, x = m.inverse;
      h = h && this.compileProgram(h), x = x && this.compileProgram(x);
      var w = this.classifySexpr(m);
      w === "helper" ? this.helperSexpr(m, h, x) : w === "simple" ? (this.simpleSexpr(m), this.opcode("pushProgram", h), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", m.path.original)) : (this.ambiguousSexpr(m, h, x), this.opcode("pushProgram", h), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(m) {
      var h = m.program && this.compileProgram(m.program), x = this.setupFullMustacheParams(m, h, void 0), w = m.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, w.original);
    },
    PartialStatement: function(m) {
      this.usePartial = !0;
      var h = m.program;
      h && (h = this.compileProgram(m.program));
      var x = m.params;
      if (x.length > 1)
        throw new a.default("Unsupported number of partial arguments: " + x.length, m);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var w = m.name.original, T = m.name.type === "SubExpression";
      T && this.accept(m.name), this.setupFullMustacheParams(m, h, void 0, !0);
      var C = m.indent || "";
      this.options.preventIndent && C && (this.opcode("appendContent", C), C = ""), this.opcode("invokePartial", T, w, C), this.opcode("append");
    },
    PartialBlockStatement: function(m) {
      this.PartialStatement(m);
    },
    MustacheStatement: function(m) {
      this.SubExpression(m), m.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(m) {
      this.DecoratorBlock(m);
    },
    ContentStatement: function(m) {
      m.value && this.opcode("appendContent", m.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(m) {
      _(m);
      var h = this.classifySexpr(m);
      h === "simple" ? this.simpleSexpr(m) : h === "helper" ? this.helperSexpr(m) : this.ambiguousSexpr(m);
    },
    ambiguousSexpr: function(m, h, x) {
      var w = m.path, T = w.parts[0], C = h != null || x != null;
      this.opcode("getContext", w.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", x), w.strict = !0, this.accept(w), this.opcode("invokeAmbiguous", T, C);
    },
    simpleSexpr: function(m) {
      var h = m.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(m, h, x) {
      var w = this.setupFullMustacheParams(m, h, x), T = m.path, C = T.parts[0];
      if (this.options.knownHelpers[C])
        this.opcode("invokeKnownHelper", w.length, C);
      else {
        if (this.options.knownHelpersOnly)
          throw new a.default("You specified knownHelpersOnly, but used the unknown helper " + C, m);
        T.strict = !0, T.falsy = !0, this.accept(T), this.opcode("invokeHelper", w.length, T.original, u.default.helpers.simpleId(T));
      }
    },
    PathExpression: function(m) {
      this.addDepth(m.depth), this.opcode("getContext", m.depth);
      var h = m.parts[0], x = u.default.helpers.scopedId(m), w = !m.depth && !x && this.blockParamIndex(h);
      w ? this.opcode("lookupBlockParam", w, m.parts) : h ? m.data ? (this.options.data = !0, this.opcode("lookupData", m.depth, m.parts, m.strict)) : this.opcode("lookupOnContext", m.parts, m.falsy, m.strict, x) : this.opcode("pushContext");
    },
    StringLiteral: function(m) {
      this.opcode("pushString", m.value);
    },
    NumberLiteral: function(m) {
      this.opcode("pushLiteral", m.value);
    },
    BooleanLiteral: function(m) {
      this.opcode("pushLiteral", m.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(m) {
      var h = m.pairs, x = 0, w = h.length;
      for (this.opcode("pushHash"); x < w; x++)
        this.pushParam(h[x].value);
      for (; x--; )
        this.opcode("assignToHash", h[x].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(m) {
      this.opcodes.push({
        opcode: m,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(m) {
      m && (this.useDepths = !0);
    },
    classifySexpr: function(m) {
      var h = u.default.helpers.simpleId(m.path), x = h && !!this.blockParamIndex(m.path.parts[0]), w = !x && u.default.helpers.helperExpression(m), T = !x && (w || h);
      if (T && !w) {
        var C = m.path.parts[0], D = this.options;
        D.knownHelpers[C] ? w = !0 : D.knownHelpersOnly && (T = !1);
      }
      return w ? "helper" : T ? "ambiguous" : "simple";
    },
    pushParams: function(m) {
      for (var h = 0, x = m.length; h < x; h++)
        this.pushParam(m[h]);
    },
    pushParam: function(m) {
      var h = m.value != null ? m.value : m.original || "";
      if (this.stringParams)
        h.replace && (h = h.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), m.depth && this.addDepth(m.depth), this.opcode("getContext", m.depth || 0), this.opcode("pushStringParam", h, m.type), m.type === "SubExpression" && this.accept(m);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (m.parts && !u.default.helpers.scopedId(m) && !m.depth && (x = this.blockParamIndex(m.parts[0])), x) {
            var w = m.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, w);
          } else
            h = m.original || h, h.replace && (h = h.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", m.type, h);
        }
        this.accept(m);
      }
    },
    setupFullMustacheParams: function(m, h, x, w) {
      var T = m.params;
      return this.pushParams(T), this.opcode("pushProgram", h), this.opcode("pushProgram", x), m.hash ? this.accept(m.hash) : this.opcode("emptyHash", w), T;
    },
    blockParamIndex: function(m) {
      for (var h = 0, x = this.options.blockParams.length; h < x; h++) {
        var w = this.options.blockParams[h], T = w && s.indexOf(w, m);
        if (w && T >= 0)
          return [h, T];
      }
    }
  };
  function p(b, m, h) {
    if (b == null || typeof b != "string" && b.type !== "Program")
      throw new a.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + b);
    m = m || {}, "data" in m || (m.data = !0), m.compat && (m.useDepths = !0);
    var x = h.parse(b, m), w = new h.Compiler().compile(x, m);
    return new h.JavaScriptCompiler().compile(w, m);
  }
  function g(b, m, h) {
    if (m === void 0 && (m = {}), b == null || typeof b != "string" && b.type !== "Program")
      throw new a.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + b);
    m = s.extend({}, m), "data" in m || (m.data = !0), m.compat && (m.useDepths = !0);
    var x = void 0;
    function w() {
      var C = h.parse(b, m), D = new h.Compiler().compile(C, m), E = new h.JavaScriptCompiler().compile(D, m, void 0, !0);
      return h.template(E);
    }
    function T(C, D) {
      return x || (x = w()), x.call(this, C, D);
    }
    return T._setup = function(C) {
      return x || (x = w()), x._setup(C);
    }, T._child = function(C, D, E, N) {
      return x || (x = w()), x._child(C, D, E, N);
    }, T;
  }
  function y(b, m) {
    if (b === m)
      return !0;
    if (s.isArray(b) && s.isArray(m) && b.length === m.length) {
      for (var h = 0; h < b.length; h++)
        if (!y(b[h], m[h]))
          return !1;
      return !0;
    }
  }
  function _(b) {
    if (!b.path.parts) {
      var m = b.path;
      b.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [m.original + ""],
        original: m.original + "",
        loc: m.loc
      };
    }
  }
  return ji;
}
var eu = { exports: {} }, tu = { exports: {} }, Ys = {}, md = {}, nu = {}, ru = {}, Ey;
function GE() {
  if (Ey) return ru;
  Ey = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return ru.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, ru.decode = function(r) {
    var a = 65, s = 90, l = 97, u = 122, f = 48, d = 57, p = 43, g = 47, y = 26, _ = 52;
    return a <= r && r <= s ? r - a : l <= r && r <= u ? r - l + y : f <= r && r <= d ? r - f + _ : r == p ? 62 : r == g ? 63 : -1;
  }, ru;
}
var wy;
function r1() {
  if (wy) return nu;
  wy = 1;
  var t = GE(), r = 5, a = 1 << r, s = a - 1, l = a;
  function u(d) {
    return d < 0 ? (-d << 1) + 1 : (d << 1) + 0;
  }
  function f(d) {
    var p = (d & 1) === 1, g = d >> 1;
    return p ? -g : g;
  }
  return nu.encode = function(p) {
    var g = "", y, _ = u(p);
    do
      y = _ & s, _ >>>= r, _ > 0 && (y |= l), g += t.encode(y);
    while (_ > 0);
    return g;
  }, nu.decode = function(p, g, y) {
    var _ = p.length, b = 0, m = 0, h, x;
    do {
      if (g >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = t.decode(p.charCodeAt(g++)), x === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(g - 1));
      h = !!(x & l), x &= s, b = b + (x << m), m += r;
    } while (h);
    y.value = f(b), y.rest = g;
  }, nu;
}
var gd = {}, Cy;
function po() {
  return Cy || (Cy = 1, (function(t) {
    function r(E, N, M) {
      if (N in E)
        return E[N];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + N + '" is a required argument.');
    }
    t.getArg = r;
    var a = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function l(E) {
      var N = E.match(a);
      return N ? {
        scheme: N[1],
        auth: N[2],
        host: N[3],
        port: N[4],
        path: N[5]
      } : null;
    }
    t.urlParse = l;
    function u(E) {
      var N = "";
      return E.scheme && (N += E.scheme + ":"), N += "//", E.auth && (N += E.auth + "@"), E.host && (N += E.host), E.port && (N += ":" + E.port), E.path && (N += E.path), N;
    }
    t.urlGenerate = u;
    function f(E) {
      var N = E, M = l(E);
      if (M) {
        if (!M.path)
          return E;
        N = M.path;
      }
      for (var j = t.isAbsolute(N), L = N.split(/\/+/), Y, I = 0, q = L.length - 1; q >= 0; q--)
        Y = L[q], Y === "." ? L.splice(q, 1) : Y === ".." ? I++ : I > 0 && (Y === "" ? (L.splice(q + 1, I), I = 0) : (L.splice(q, 2), I--));
      return N = L.join("/"), N === "" && (N = j ? "/" : "."), M ? (M.path = N, u(M)) : N;
    }
    t.normalize = f;
    function d(E, N) {
      E === "" && (E = "."), N === "" && (N = ".");
      var M = l(N), j = l(E);
      if (j && (E = j.path || "/"), M && !M.scheme)
        return j && (M.scheme = j.scheme), u(M);
      if (M || N.match(s))
        return N;
      if (j && !j.host && !j.path)
        return j.host = N, u(j);
      var L = N.charAt(0) === "/" ? N : f(E.replace(/\/+$/, "") + "/" + N);
      return j ? (j.path = L, u(j)) : L;
    }
    t.join = d, t.isAbsolute = function(E) {
      return E.charAt(0) === "/" || a.test(E);
    };
    function p(E, N) {
      E === "" && (E = "."), E = E.replace(/\/$/, "");
      for (var M = 0; N.indexOf(E + "/") !== 0; ) {
        var j = E.lastIndexOf("/");
        if (j < 0 || (E = E.slice(0, j), E.match(/^([^\/]+:\/)?\/*$/)))
          return N;
        ++M;
      }
      return Array(M + 1).join("../") + N.substr(E.length + 1);
    }
    t.relative = p;
    var g = (function() {
      var E = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in E);
    })();
    function y(E) {
      return E;
    }
    function _(E) {
      return m(E) ? "$" + E : E;
    }
    t.toSetString = g ? y : _;
    function b(E) {
      return m(E) ? E.slice(1) : E;
    }
    t.fromSetString = g ? y : b;
    function m(E) {
      if (!E)
        return !1;
      var N = E.length;
      if (N < 9 || E.charCodeAt(N - 1) !== 95 || E.charCodeAt(N - 2) !== 95 || E.charCodeAt(N - 3) !== 111 || E.charCodeAt(N - 4) !== 116 || E.charCodeAt(N - 5) !== 111 || E.charCodeAt(N - 6) !== 114 || E.charCodeAt(N - 7) !== 112 || E.charCodeAt(N - 8) !== 95 || E.charCodeAt(N - 9) !== 95)
        return !1;
      for (var M = N - 10; M >= 0; M--)
        if (E.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function h(E, N, M) {
      var j = w(E.source, N.source);
      return j !== 0 || (j = E.originalLine - N.originalLine, j !== 0) || (j = E.originalColumn - N.originalColumn, j !== 0 || M) || (j = E.generatedColumn - N.generatedColumn, j !== 0) || (j = E.generatedLine - N.generatedLine, j !== 0) ? j : w(E.name, N.name);
    }
    t.compareByOriginalPositions = h;
    function x(E, N, M) {
      var j = E.generatedLine - N.generatedLine;
      return j !== 0 || (j = E.generatedColumn - N.generatedColumn, j !== 0 || M) || (j = w(E.source, N.source), j !== 0) || (j = E.originalLine - N.originalLine, j !== 0) || (j = E.originalColumn - N.originalColumn, j !== 0) ? j : w(E.name, N.name);
    }
    t.compareByGeneratedPositionsDeflated = x;
    function w(E, N) {
      return E === N ? 0 : E === null ? 1 : N === null ? -1 : E > N ? 1 : -1;
    }
    function T(E, N) {
      var M = E.generatedLine - N.generatedLine;
      return M !== 0 || (M = E.generatedColumn - N.generatedColumn, M !== 0) || (M = w(E.source, N.source), M !== 0) || (M = E.originalLine - N.originalLine, M !== 0) || (M = E.originalColumn - N.originalColumn, M !== 0) ? M : w(E.name, N.name);
    }
    t.compareByGeneratedPositionsInflated = T;
    function C(E) {
      return JSON.parse(E.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = C;
    function D(E, N, M) {
      if (N = N || "", E && (E[E.length - 1] !== "/" && N[0] !== "/" && (E += "/"), N = E + N), M) {
        var j = l(M);
        if (!j)
          throw new Error("sourceMapURL could not be parsed");
        if (j.path) {
          var L = j.path.lastIndexOf("/");
          L >= 0 && (j.path = j.path.substring(0, L + 1));
        }
        N = d(u(j), N);
      }
      return f(N);
    }
    t.computeSourceURL = D;
  })(gd)), gd;
}
var vd = {}, Ay;
function a1() {
  if (Ay) return vd;
  Ay = 1;
  var t = po(), r = Object.prototype.hasOwnProperty, a = typeof Map < "u";
  function s() {
    this._array = [], this._set = a ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, f) {
    for (var d = new s(), p = 0, g = u.length; p < g; p++)
      d.add(u[p], f);
    return d;
  }, s.prototype.size = function() {
    return a ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var d = a ? u : t.toSetString(u), p = a ? this.has(u) : r.call(this._set, d), g = this._array.length;
    (!p || f) && this._array.push(u), p || (a ? this._set.set(u, g) : this._set[d] = g);
  }, s.prototype.has = function(u) {
    if (a)
      return this._set.has(u);
    var f = t.toSetString(u);
    return r.call(this._set, f);
  }, s.prototype.indexOf = function(u) {
    if (a) {
      var f = this._set.get(u);
      if (f >= 0)
        return f;
    } else {
      var d = t.toSetString(u);
      if (r.call(this._set, d))
        return this._set[d];
    }
    throw new Error('"' + u + '" is not in the set.');
  }, s.prototype.at = function(u) {
    if (u >= 0 && u < this._array.length)
      return this._array[u];
    throw new Error("No element indexed by " + u);
  }, s.prototype.toArray = function() {
    return this._array.slice();
  }, vd.ArraySet = s, vd;
}
var yd = {}, Ny;
function VE() {
  if (Ny) return yd;
  Ny = 1;
  var t = po();
  function r(s, l) {
    var u = s.generatedLine, f = l.generatedLine, d = s.generatedColumn, p = l.generatedColumn;
    return f > u || f == u && p >= d || t.compareByGeneratedPositionsInflated(s, l) <= 0;
  }
  function a() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return a.prototype.unsortedForEach = function(l, u) {
    this._array.forEach(l, u);
  }, a.prototype.add = function(l) {
    r(this._last, l) ? (this._last = l, this._array.push(l)) : (this._sorted = !1, this._array.push(l));
  }, a.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, yd.MappingList = a, yd;
}
var Ty;
function i1() {
  if (Ty) return md;
  Ty = 1;
  var t = r1(), r = po(), a = a1().ArraySet, s = VE().MappingList;
  function l(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new a(), this._names = new a(), this._mappings = new s(), this._sourcesContents = null;
  }
  return l.prototype._version = 3, l.fromSourceMap = function(f) {
    var d = f.sourceRoot, p = new l({
      file: f.file,
      sourceRoot: d
    });
    return f.eachMapping(function(g) {
      var y = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (y.source = g.source, d != null && (y.source = r.relative(d, y.source)), y.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (y.name = g.name)), p.addMapping(y);
    }), f.sources.forEach(function(g) {
      var y = g;
      d !== null && (y = r.relative(d, g)), p._sources.has(y) || p._sources.add(y);
      var _ = f.sourceContentFor(g);
      _ != null && p.setSourceContent(g, _);
    }), p;
  }, l.prototype.addMapping = function(f) {
    var d = r.getArg(f, "generated"), p = r.getArg(f, "original", null), g = r.getArg(f, "source", null), y = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(d, p, g, y), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: d.line,
      generatedColumn: d.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: g,
      name: y
    });
  }, l.prototype.setSourceContent = function(f, d) {
    var p = f;
    this._sourceRoot != null && (p = r.relative(this._sourceRoot, p)), d != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(p)] = d) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, l.prototype.applySourceMap = function(f, d, p) {
    var g = d;
    if (d == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      g = f.file;
    }
    var y = this._sourceRoot;
    y != null && (g = r.relative(y, g));
    var _ = new a(), b = new a();
    this._mappings.unsortedForEach(function(m) {
      if (m.source === g && m.originalLine != null) {
        var h = f.originalPositionFor({
          line: m.originalLine,
          column: m.originalColumn
        });
        h.source != null && (m.source = h.source, p != null && (m.source = r.join(p, m.source)), y != null && (m.source = r.relative(y, m.source)), m.originalLine = h.line, m.originalColumn = h.column, h.name != null && (m.name = h.name));
      }
      var x = m.source;
      x != null && !_.has(x) && _.add(x);
      var w = m.name;
      w != null && !b.has(w) && b.add(w);
    }, this), this._sources = _, this._names = b, f.sources.forEach(function(m) {
      var h = f.sourceContentFor(m);
      h != null && (p != null && (m = r.join(p, m)), y != null && (m = r.relative(y, m)), this.setSourceContent(m, h));
    }, this);
  }, l.prototype._validateMapping = function(f, d, p, g) {
    if (d && typeof d.line != "number" && typeof d.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !d && !p && !g)) {
      if (f && "line" in f && "column" in f && d && "line" in d && "column" in d && f.line > 0 && f.column >= 0 && d.line > 0 && d.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: p,
        original: d,
        name: g
      }));
    }
  }, l.prototype._serializeMappings = function() {
    for (var f = 0, d = 1, p = 0, g = 0, y = 0, _ = 0, b = "", m, h, x, w, T = this._mappings.toArray(), C = 0, D = T.length; C < D; C++) {
      if (h = T[C], m = "", h.generatedLine !== d)
        for (f = 0; h.generatedLine !== d; )
          m += ";", d++;
      else if (C > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, T[C - 1]))
          continue;
        m += ",";
      }
      m += t.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (w = this._sources.indexOf(h.source), m += t.encode(w - _), _ = w, m += t.encode(h.originalLine - 1 - g), g = h.originalLine - 1, m += t.encode(h.originalColumn - p), p = h.originalColumn, h.name != null && (x = this._names.indexOf(h.name), m += t.encode(x - y), y = x)), b += m;
    }
    return b;
  }, l.prototype._generateSourcesContent = function(f, d) {
    return f.map(function(p) {
      if (!this._sourcesContents)
        return null;
      d != null && (p = r.relative(d, p));
      var g = r.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
    }, this);
  }, l.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, l.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, md.SourceMapGenerator = l, md;
}
var Xs = {}, bd = {}, Oy;
function YE() {
  return Oy || (Oy = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(a, s, l, u, f, d) {
      var p = Math.floor((s - a) / 2) + a, g = f(l, u[p], !0);
      return g === 0 ? p : g > 0 ? s - p > 1 ? r(p, s, l, u, f, d) : d == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : p : p - a > 1 ? r(a, p, l, u, f, d) : d == t.LEAST_UPPER_BOUND ? p : a < 0 ? -1 : a;
    }
    t.search = function(s, l, u, f) {
      if (l.length === 0)
        return -1;
      var d = r(
        -1,
        l.length,
        s,
        l,
        u,
        f || t.GREATEST_LOWER_BOUND
      );
      if (d < 0)
        return -1;
      for (; d - 1 >= 0 && u(l[d], l[d - 1], !0) === 0; )
        --d;
      return d;
    };
  })(bd)), bd;
}
var _d = {}, Dy;
function XE() {
  if (Dy) return _d;
  Dy = 1;
  function t(s, l, u) {
    var f = s[l];
    s[l] = s[u], s[u] = f;
  }
  function r(s, l) {
    return Math.round(s + Math.random() * (l - s));
  }
  function a(s, l, u, f) {
    if (u < f) {
      var d = r(u, f), p = u - 1;
      t(s, d, f);
      for (var g = s[f], y = u; y < f; y++)
        l(s[y], g) <= 0 && (p += 1, t(s, p, y));
      t(s, p + 1, y);
      var _ = p + 1;
      a(s, l, u, _ - 1), a(s, l, _ + 1, f);
    }
  }
  return _d.quickSort = function(s, l) {
    a(s, l, 0, s.length - 1);
  }, _d;
}
var My;
function $E() {
  if (My) return Xs;
  My = 1;
  var t = po(), r = YE(), a = a1().ArraySet, s = r1(), l = XE().quickSort;
  function u(g, y) {
    var _ = g;
    return typeof g == "string" && (_ = t.parseSourceMapInput(g)), _.sections != null ? new p(_, y) : new f(_, y);
  }
  u.fromSourceMap = function(g, y) {
    return f.fromSourceMap(g, y);
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
    var m = _ || null, h = b || u.GENERATED_ORDER, x;
    switch (h) {
      case u.GENERATED_ORDER:
        x = this._generatedMappings;
        break;
      case u.ORIGINAL_ORDER:
        x = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var w = this.sourceRoot;
    x.map(function(T) {
      var C = T.source === null ? null : this._sources.at(T.source);
      return C = t.computeSourceURL(w, C, this._sourceMapURL), {
        source: C,
        generatedLine: T.generatedLine,
        generatedColumn: T.generatedColumn,
        originalLine: T.originalLine,
        originalColumn: T.originalColumn,
        name: T.name === null ? null : this._names.at(T.name)
      };
    }, this).forEach(y, m);
  }, u.prototype.allGeneratedPositionsFor = function(y) {
    var _ = t.getArg(y, "line"), b = {
      source: t.getArg(y, "source"),
      originalLine: _,
      originalColumn: t.getArg(y, "column", 0)
    };
    if (b.source = this._findSourceIndex(b.source), b.source < 0)
      return [];
    var m = [], h = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (h >= 0) {
      var x = this._originalMappings[h];
      if (y.column === void 0)
        for (var w = x.originalLine; x && x.originalLine === w; )
          m.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++h];
      else
        for (var T = x.originalColumn; x && x.originalLine === _ && x.originalColumn == T; )
          m.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++h];
    }
    return m;
  }, Xs.SourceMapConsumer = u;
  function f(g, y) {
    var _ = g;
    typeof g == "string" && (_ = t.parseSourceMapInput(g));
    var b = t.getArg(_, "version"), m = t.getArg(_, "sources"), h = t.getArg(_, "names", []), x = t.getArg(_, "sourceRoot", null), w = t.getArg(_, "sourcesContent", null), T = t.getArg(_, "mappings"), C = t.getArg(_, "file", null);
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    x && (x = t.normalize(x)), m = m.map(String).map(t.normalize).map(function(D) {
      return x && t.isAbsolute(x) && t.isAbsolute(D) ? t.relative(x, D) : D;
    }), this._names = a.fromArray(h.map(String), !0), this._sources = a.fromArray(m, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return t.computeSourceURL(x, D, y);
    }), this.sourceRoot = x, this.sourcesContent = w, this._mappings = T, this._sourceMapURL = y, this.file = C;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(g) {
    var y = g;
    if (this.sourceRoot != null && (y = t.relative(this.sourceRoot, y)), this._sources.has(y))
      return this._sources.indexOf(y);
    var _;
    for (_ = 0; _ < this._absoluteSources.length; ++_)
      if (this._absoluteSources[_] == g)
        return _;
    return -1;
  }, f.fromSourceMap = function(y, _) {
    var b = Object.create(f.prototype), m = b._names = a.fromArray(y._names.toArray(), !0), h = b._sources = a.fromArray(y._sources.toArray(), !0);
    b.sourceRoot = y._sourceRoot, b.sourcesContent = y._generateSourcesContent(
      b._sources.toArray(),
      b.sourceRoot
    ), b.file = y._file, b._sourceMapURL = _, b._absoluteSources = b._sources.toArray().map(function(M) {
      return t.computeSourceURL(b.sourceRoot, M, _);
    });
    for (var x = y._mappings.toArray().slice(), w = b.__generatedMappings = [], T = b.__originalMappings = [], C = 0, D = x.length; C < D; C++) {
      var E = x[C], N = new d();
      N.generatedLine = E.generatedLine, N.generatedColumn = E.generatedColumn, E.source && (N.source = h.indexOf(E.source), N.originalLine = E.originalLine, N.originalColumn = E.originalColumn, E.name && (N.name = m.indexOf(E.name)), T.push(N)), w.push(N);
    }
    return l(b.__originalMappings, t.compareByOriginalPositions), b;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function d() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(y, _) {
    for (var b = 1, m = 0, h = 0, x = 0, w = 0, T = 0, C = y.length, D = 0, E = {}, N = {}, M = [], j = [], L, Y, I, q, $; D < C; )
      if (y.charAt(D) === ";")
        b++, D++, m = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (L = new d(), L.generatedLine = b, q = D; q < C && !this._charIsMappingSeparator(y, q); q++)
          ;
        if (Y = y.slice(D, q), I = E[Y], I)
          D += Y.length;
        else {
          for (I = []; D < q; )
            s.decode(y, D, N), $ = N.value, D = N.rest, I.push($);
          if (I.length === 2)
            throw new Error("Found a source, but no line and column");
          if (I.length === 3)
            throw new Error("Found a source and line, but no column");
          E[Y] = I;
        }
        L.generatedColumn = m + I[0], m = L.generatedColumn, I.length > 1 && (L.source = w + I[1], w += I[1], L.originalLine = h + I[2], h = L.originalLine, L.originalLine += 1, L.originalColumn = x + I[3], x = L.originalColumn, I.length > 4 && (L.name = T + I[4], T += I[4])), j.push(L), typeof L.originalLine == "number" && M.push(L);
      }
    l(j, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = j, l(M, t.compareByOriginalPositions), this.__originalMappings = M;
  }, f.prototype._findMapping = function(y, _, b, m, h, x) {
    if (y[b] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + y[b]);
    if (y[m] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + y[m]);
    return r.search(y, _, h, x);
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
      var m = this._generatedMappings[b];
      if (m.generatedLine === _.generatedLine) {
        var h = t.getArg(m, "source", null);
        h !== null && (h = this._sources.at(h), h = t.computeSourceURL(this.sourceRoot, h, this._sourceMapURL));
        var x = t.getArg(m, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: h,
          line: t.getArg(m, "originalLine", null),
          column: t.getArg(m, "originalColumn", null),
          name: x
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
    var m = y;
    this.sourceRoot != null && (m = t.relative(this.sourceRoot, m));
    var h;
    if (this.sourceRoot != null && (h = t.urlParse(this.sourceRoot))) {
      var x = m.replace(/^file:\/\//, "");
      if (h.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
      if ((!h.path || h.path == "/") && this._sources.has("/" + m))
        return this.sourcesContent[this._sources.indexOf("/" + m)];
    }
    if (_)
      return null;
    throw new Error('"' + m + '" is not in the SourceMap.');
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
    }, m = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (m >= 0) {
      var h = this._originalMappings[m];
      if (h.source === b.source)
        return {
          line: t.getArg(h, "generatedLine", null),
          column: t.getArg(h, "generatedColumn", null),
          lastColumn: t.getArg(h, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Xs.BasicSourceMapConsumer = f;
  function p(g, y) {
    var _ = g;
    typeof g == "string" && (_ = t.parseSourceMapInput(g));
    var b = t.getArg(_, "version"), m = t.getArg(_, "sections");
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    this._sources = new a(), this._names = new a();
    var h = {
      line: -1,
      column: 0
    };
    this._sections = m.map(function(x) {
      if (x.url)
        throw new Error("Support for url field in sections not implemented.");
      var w = t.getArg(x, "offset"), T = t.getArg(w, "line"), C = t.getArg(w, "column");
      if (T < h.line || T === h.line && C < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = w, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: T + 1,
          generatedColumn: C + 1
        },
        consumer: new u(t.getArg(x, "map"), y)
      };
    });
  }
  return p.prototype = Object.create(u.prototype), p.prototype.constructor = u, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
    get: function() {
      for (var g = [], y = 0; y < this._sections.length; y++)
        for (var _ = 0; _ < this._sections[y].consumer.sources.length; _++)
          g.push(this._sections[y].consumer.sources[_]);
      return g;
    }
  }), p.prototype.originalPositionFor = function(y) {
    var _ = {
      generatedLine: t.getArg(y, "line"),
      generatedColumn: t.getArg(y, "column")
    }, b = r.search(
      _,
      this._sections,
      function(h, x) {
        var w = h.generatedLine - x.generatedOffset.generatedLine;
        return w || h.generatedColumn - x.generatedOffset.generatedColumn;
      }
    ), m = this._sections[b];
    return m ? m.consumer.originalPositionFor({
      line: _.generatedLine - (m.generatedOffset.generatedLine - 1),
      column: _.generatedColumn - (m.generatedOffset.generatedLine === _.generatedLine ? m.generatedOffset.generatedColumn - 1 : 0),
      bias: y.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, p.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(y) {
      return y.consumer.hasContentsOfAllSources();
    });
  }, p.prototype.sourceContentFor = function(y, _) {
    for (var b = 0; b < this._sections.length; b++) {
      var m = this._sections[b], h = m.consumer.sourceContentFor(y, !0);
      if (h)
        return h;
    }
    if (_)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(y) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var b = this._sections[_];
      if (b.consumer._findSourceIndex(t.getArg(y, "source")) !== -1) {
        var m = b.consumer.generatedPositionFor(y);
        if (m) {
          var h = {
            line: m.line + (b.generatedOffset.generatedLine - 1),
            column: m.column + (b.generatedOffset.generatedLine === m.line ? b.generatedOffset.generatedColumn - 1 : 0)
          };
          return h;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, p.prototype._parseMappings = function(y, _) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var b = 0; b < this._sections.length; b++)
      for (var m = this._sections[b], h = m.consumer._generatedMappings, x = 0; x < h.length; x++) {
        var w = h[x], T = m.consumer._sources.at(w.source);
        T = t.computeSourceURL(m.consumer.sourceRoot, T, this._sourceMapURL), this._sources.add(T), T = this._sources.indexOf(T);
        var C = null;
        w.name && (C = m.consumer._names.at(w.name), this._names.add(C), C = this._names.indexOf(C));
        var D = {
          source: T,
          generatedLine: w.generatedLine + (m.generatedOffset.generatedLine - 1),
          generatedColumn: w.generatedColumn + (m.generatedOffset.generatedLine === w.generatedLine ? m.generatedOffset.generatedColumn - 1 : 0),
          originalLine: w.originalLine,
          originalColumn: w.originalColumn,
          name: C
        };
        this.__generatedMappings.push(D), typeof D.originalLine == "number" && this.__originalMappings.push(D);
      }
    l(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), l(this.__originalMappings, t.compareByOriginalPositions);
  }, Xs.IndexedSourceMapConsumer = p, Xs;
}
var Sd = {}, ky;
function QE() {
  if (ky) return Sd;
  ky = 1;
  var t = i1().SourceMapGenerator, r = po(), a = /(\r?\n)/, s = 10, l = "$$$isSourceNode$$$";
  function u(f, d, p, g, y) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = d ?? null, this.source = p ?? null, this.name = y ?? null, this[l] = !0, g != null && this.add(g);
  }
  return u.fromStringWithSourceMap = function(d, p, g) {
    var y = new u(), _ = d.split(a), b = 0, m = function() {
      var C = E(), D = E() || "";
      return C + D;
      function E() {
        return b < _.length ? _[b++] : void 0;
      }
    }, h = 1, x = 0, w = null;
    return p.eachMapping(function(C) {
      if (w !== null)
        if (h < C.generatedLine)
          T(w, m()), h++, x = 0;
        else {
          var D = _[b] || "", E = D.substr(0, C.generatedColumn - x);
          _[b] = D.substr(C.generatedColumn - x), x = C.generatedColumn, T(w, E), w = C;
          return;
        }
      for (; h < C.generatedLine; )
        y.add(m()), h++;
      if (x < C.generatedColumn) {
        var D = _[b] || "";
        y.add(D.substr(0, C.generatedColumn)), _[b] = D.substr(C.generatedColumn), x = C.generatedColumn;
      }
      w = C;
    }, this), b < _.length && (w && T(w, m()), y.add(_.splice(b).join(""))), p.sources.forEach(function(C) {
      var D = p.sourceContentFor(C);
      D != null && (g != null && (C = r.join(g, C)), y.setSourceContent(C, D));
    }), y;
    function T(C, D) {
      if (C === null || C.source === void 0)
        y.add(D);
      else {
        var E = g ? r.join(g, C.source) : C.source;
        y.add(new u(
          C.originalLine,
          C.originalColumn,
          E,
          D,
          C.name
        ));
      }
    }
  }, u.prototype.add = function(d) {
    if (Array.isArray(d))
      d.forEach(function(p) {
        this.add(p);
      }, this);
    else if (d[l] || typeof d == "string")
      d && this.children.push(d);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + d
      );
    return this;
  }, u.prototype.prepend = function(d) {
    if (Array.isArray(d))
      for (var p = d.length - 1; p >= 0; p--)
        this.prepend(d[p]);
    else if (d[l] || typeof d == "string")
      this.children.unshift(d);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + d
      );
    return this;
  }, u.prototype.walk = function(d) {
    for (var p, g = 0, y = this.children.length; g < y; g++)
      p = this.children[g], p[l] ? p.walk(d) : p !== "" && d(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(d) {
    var p, g, y = this.children.length;
    if (y > 0) {
      for (p = [], g = 0; g < y - 1; g++)
        p.push(this.children[g]), p.push(d);
      p.push(this.children[g]), this.children = p;
    }
    return this;
  }, u.prototype.replaceRight = function(d, p) {
    var g = this.children[this.children.length - 1];
    return g[l] ? g.replaceRight(d, p) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(d, p) : this.children.push("".replace(d, p)), this;
  }, u.prototype.setSourceContent = function(d, p) {
    this.sourceContents[r.toSetString(d)] = p;
  }, u.prototype.walkSourceContents = function(d) {
    for (var p = 0, g = this.children.length; p < g; p++)
      this.children[p][l] && this.children[p].walkSourceContents(d);
    for (var y = Object.keys(this.sourceContents), p = 0, g = y.length; p < g; p++)
      d(r.fromSetString(y[p]), this.sourceContents[y[p]]);
  }, u.prototype.toString = function() {
    var d = "";
    return this.walk(function(p) {
      d += p;
    }), d;
  }, u.prototype.toStringWithSourceMap = function(d) {
    var p = {
      code: "",
      line: 1,
      column: 0
    }, g = new t(d), y = !1, _ = null, b = null, m = null, h = null;
    return this.walk(function(x, w) {
      p.code += x, w.source !== null && w.line !== null && w.column !== null ? ((_ !== w.source || b !== w.line || m !== w.column || h !== w.name) && g.addMapping({
        source: w.source,
        original: {
          line: w.line,
          column: w.column
        },
        generated: {
          line: p.line,
          column: p.column
        },
        name: w.name
      }), _ = w.source, b = w.line, m = w.column, h = w.name, y = !0) : y && (g.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), _ = null, y = !1);
      for (var T = 0, C = x.length; T < C; T++)
        x.charCodeAt(T) === s ? (p.line++, p.column = 0, T + 1 === C ? (_ = null, y = !1) : y && g.addMapping({
          source: w.source,
          original: {
            line: w.line,
            column: w.column
          },
          generated: {
            line: p.line,
            column: p.column
          },
          name: w.name
        })) : p.column++;
    }), this.walkSourceContents(function(x, w) {
      g.setSourceContent(x, w);
    }), { code: p.code, map: g };
  }, Sd.SourceNode = u, Sd;
}
var jy;
function KE() {
  return jy || (jy = 1, Ys.SourceMapGenerator = i1().SourceMapGenerator, Ys.SourceMapConsumer = $E().SourceMapConsumer, Ys.SourceNode = QE().SourceNode), Ys;
}
var Ry;
function JE() {
  return Ry || (Ry = 1, (function(t, r) {
    r.__esModule = !0;
    var a = vn(), s = void 0;
    try {
      var l = KE();
      s = l.SourceNode;
    } catch {
    }
    s || (s = function(d, p, g, y) {
      this.src = "", y && this.add(y);
    }, s.prototype = {
      add: function(p) {
        a.isArray(p) && (p = p.join("")), this.src += p;
      },
      prepend: function(p) {
        a.isArray(p) && (p = p.join("")), this.src = p + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function u(d, p, g) {
      if (a.isArray(d)) {
        for (var y = [], _ = 0, b = d.length; _ < b; _++)
          y.push(p.wrap(d[_], g));
        return y;
      } else if (typeof d == "boolean" || typeof d == "number")
        return d + "";
      return d;
    }
    function f(d) {
      this.srcFile = d, this.source = [];
    }
    f.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(p, g) {
        this.source.unshift(this.wrap(p, g));
      },
      push: function(p, g) {
        this.source.push(this.wrap(p, g));
      },
      merge: function() {
        var p = this.empty();
        return this.each(function(g) {
          p.add(["  ", g, `
`]);
        }), p;
      },
      each: function(p) {
        for (var g = 0, y = this.source.length; g < y; g++)
          p(this.source[g]);
      },
      empty: function() {
        var p = this.currentLocation || { start: {} };
        return new s(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var g = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof s ? p : (p = u(p, this, g), new s(g.start.line, g.start.column, this.srcFile, p));
      },
      functionCall: function(p, g, y) {
        return y = this.generateList(y), this.wrap([p, g ? "." + g + "(" : "(", y, ")"]);
      },
      quotedString: function(p) {
        return '"' + (p + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(p) {
        var g = this, y = [];
        Object.keys(p).forEach(function(b) {
          var m = u(p[b], g);
          m !== "undefined" && y.push([g.quotedString(b), ":", m]);
        });
        var _ = this.generateList(y);
        return _.prepend("{"), _.add("}"), _;
      },
      generateList: function(p) {
        for (var g = this.empty(), y = 0, _ = p.length; y < _; y++)
          y && g.add(","), g.add(u(p[y], this));
        return g;
      },
      generateArray: function(p) {
        var g = this.generateList(p);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = f, t.exports = r.default;
  })(tu, tu.exports)), tu.exports;
}
var zy;
function WE() {
  return zy || (zy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = fh(), l = er(), u = a(l), f = vn(), d = JE(), p = a(d);
    function g(b) {
      this.value = b;
    }
    function y() {
    }
    y.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(m, h) {
        return this.internalNameLookup(m, h);
      },
      depthedLookup: function(m) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(m), ")"];
      },
      compilerInfo: function() {
        var m = s.COMPILER_REVISION, h = s.REVISION_CHANGES[m];
        return [m, h];
      },
      appendToBuffer: function(m, h, x) {
        return f.isArray(m) || (m = [m]), m = this.source.wrap(m, h), this.environment.isSimple ? ["return ", m, ";"] : x ? ["buffer += ", m, ";"] : (m.appendToBuffer = !0, m);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(m, h) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", m, ",", JSON.stringify(h), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(m, h, x, w) {
        this.environment = m, this.options = h, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !w, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(m, h), this.useDepths = this.useDepths || m.useDepths || m.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || m.useBlockParams;
        var T = m.opcodes, C = void 0, D = void 0, E = void 0, N = void 0;
        for (E = 0, N = T.length; E < N; E++)
          C = T[E], this.source.currentLocation = C.loc, D = D || C.loc, this[C.opcode].apply(this, C.args);
        if (this.source.currentLocation = D, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), w ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(w);
        if (this.isChild)
          return M;
        var j = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (j.main_d = this.decorators, j.useDecorators = !0);
        var L = this.context, Y = L.programs, I = L.decorators;
        for (E = 0, N = Y.length; E < N; E++)
          Y[E] && (j[E] = Y[E], I[E] && (j[E + "_d"] = I[E], j.useDecorators = !0));
        return this.environment.usePartial && (j.usePartial = !0), this.options.data && (j.useData = !0), this.useDepths && (j.useDepths = !0), this.useBlockParams && (j.useBlockParams = !0), this.options.compat && (j.compat = !0), w ? j.compilerOptions = this.options : (j.compiler = JSON.stringify(j.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, j = this.objectLiteral(j), h.srcName ? (j = j.toStringWithSourceMap({ file: h.destName }), j.map = j.map && j.map.toString()) : j = j.toString()), j;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new p.default(this.options.srcName), this.decorators = new p.default(this.options.srcName);
      },
      createFunctionContext: function(m) {
        var h = this, x = "", w = this.stackVars.concat(this.registers.list);
        w.length > 0 && (x += ", " + w.join(", "));
        var T = 0;
        Object.keys(this.aliases).forEach(function(E) {
          var N = h.aliases[E];
          N.children && N.referenceCount > 1 && (x += ", alias" + ++T + "=" + E, N.children[0] = "alias" + T);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var C = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && C.push("blockParams"), this.useDepths && C.push("depths");
        var D = this.mergeSource(x);
        return m ? (C.push(D), Function.apply(this, C)) : this.source.wrap(["function(", C.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(m) {
        var h = this.environment.isSimple, x = !this.forceBuffer, w = void 0, T = void 0, C = void 0, D = void 0;
        return this.source.each(function(E) {
          E.appendToBuffer ? (C ? E.prepend("  + ") : C = E, D = E) : (C && (T ? C.prepend("buffer += ") : w = !0, D.add(";"), C = D = void 0), T = !0, h || (x = !1));
        }), x ? C ? (C.prepend("return "), D.add(";")) : T || this.source.push('return "";') : (m += ", buffer = " + (w ? "" : this.initializeBuffer()), C ? (C.prepend("return buffer + "), D.add(";")) : this.source.push("return buffer;")), m && this.source.prepend("var " + m.substring(2) + (w ? "" : `;
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
      blockValue: function(m) {
        var h = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(m, 0, x);
        var w = this.popStack();
        x.splice(1, 0, w), this.push(this.source.functionCall(h, "call", x));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var m = this.aliasable("container.hooks.blockHelperMissing"), h = [this.contextName(0)];
        this.setupHelperArgs("", 0, h, !0), this.flushInline();
        var x = this.topStack();
        h.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(m, "call", h), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(m) {
        this.pendingContent ? m = this.pendingContent + m : this.pendingLocation = this.source.currentLocation, this.pendingContent = m;
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
          this.replaceStack(function(h) {
            return [" != null ? ", h, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var m = this.popStack();
          this.pushSource(["if (", m, " != null) { ", this.appendToBuffer(m, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
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
      getContext: function(m) {
        this.lastContext = m;
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
      lookupOnContext: function(m, h, x, w) {
        var T = 0;
        !w && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(m[T++])) : this.pushContext(), this.resolvePath("context", m, T, h, x);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(m, h) {
        this.useBlockParams = !0, this.push(["blockParams[", m[0], "][", m[1], "]"]), this.resolvePath("context", h, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(m, h, x) {
        m ? this.pushStackLiteral("container.data(data, " + m + ")") : this.pushStackLiteral("data"), this.resolvePath("data", h, 0, !0, x);
      },
      resolvePath: function(m, h, x, w, T) {
        var C = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(_(this.options.strict && T, this, h, x, m));
          return;
        }
        for (var D = h.length; x < D; x++)
          this.replaceStack(function(E) {
            var N = C.nameLookup(E, h[x], m);
            return w ? [" && ", N] : [" != null ? ", N, " : ", E];
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
      pushStringParam: function(m, h) {
        this.pushContext(), this.pushString(h), h !== "SubExpression" && (typeof m == "string" ? this.pushString(m) : this.pushStackLiteral(m));
      },
      emptyHash: function(m) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(m ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var m = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(m.ids)), this.stringParams && (this.push(this.objectLiteral(m.contexts)), this.push(this.objectLiteral(m.types))), this.push(this.objectLiteral(m.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(m) {
        this.pushStackLiteral(this.quotedString(m));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(m) {
        this.pushStackLiteral(m);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(m) {
        m != null ? this.pushStackLiteral(this.programExpression(m)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(m, h) {
        var x = this.nameLookup("decorators", h, "decorator"), w = this.setupHelperArgs(h, m);
        this.decorators.push(["fn = ", this.decorators.functionCall(x, "", ["fn", "props", "container", w]), " || fn;"]);
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
      invokeHelper: function(m, h, x) {
        var w = this.popStack(), T = this.setupHelper(m, h), C = [];
        x && C.push(T.name), C.push(w), this.options.strict || C.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(C, "||"), ")"], E = this.source.functionCall(D, "call", T.callParams);
        this.push(E);
      },
      itemsSeparatedBy: function(m, h) {
        var x = [];
        x.push(m[0]);
        for (var w = 1; w < m.length; w++)
          x.push(h, m[w]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(m, h) {
        var x = this.setupHelper(m, h);
        this.push(this.source.functionCall(x.name, "call", x.callParams));
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
      invokeAmbiguous: function(m, h) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var w = this.setupHelper(0, m, h), T = this.lastHelper = this.nameLookup("helpers", m, "helper"), C = ["(", "(helper = ", T, " || ", x, ")"];
        this.options.strict || (C[0] = "(helper = ", C.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", C, w.paramsInit ? ["),(", w.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", w.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(m, h, x) {
        var w = [], T = this.setupParams(h, 1, w);
        m && (h = this.popStack(), delete T.name), x && (T.indent = JSON.stringify(x)), T.helpers = "helpers", T.partials = "partials", T.decorators = "container.decorators", m ? w.unshift(h) : w.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (T.depths = "depths"), T = this.objectLiteral(T), w.push(T), this.push(this.source.functionCall("container.invokePartial", "", w));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(m) {
        var h = this.popStack(), x = void 0, w = void 0, T = void 0;
        this.trackIds && (T = this.popStack()), this.stringParams && (w = this.popStack(), x = this.popStack());
        var C = this.hash;
        x && (C.contexts[m] = x), w && (C.types[m] = w), T && (C.ids[m] = T), C.values[m] = h;
      },
      pushId: function(m, h, x) {
        m === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : m === "PathExpression" ? this.pushString(h) : m === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: y,
      compileChildren: function(m, h) {
        for (var x = m.children, w = void 0, T = void 0, C = 0, D = x.length; C < D; C++) {
          w = x[C], T = new this.compiler();
          var E = this.matchExistingProgram(w);
          if (E == null) {
            this.context.programs.push("");
            var N = this.context.programs.length;
            w.index = N, w.name = "program" + N, this.context.programs[N] = T.compile(w, h, this.context, !this.precompile), this.context.decorators[N] = T.decorators, this.context.environments[N] = w, this.useDepths = this.useDepths || T.useDepths, this.useBlockParams = this.useBlockParams || T.useBlockParams, w.useDepths = this.useDepths, w.useBlockParams = this.useBlockParams;
          } else
            w.index = E.index, w.name = "program" + E.index, this.useDepths = this.useDepths || E.useDepths, this.useBlockParams = this.useBlockParams || E.useBlockParams;
        }
      },
      matchExistingProgram: function(m) {
        for (var h = 0, x = this.context.environments.length; h < x; h++) {
          var w = this.context.environments[h];
          if (w && w.equals(m))
            return w;
        }
      },
      programExpression: function(m) {
        var h = this.environment.children[m], x = [h.index, "data", h.blockParams];
        return (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths"), "container.program(" + x.join(", ") + ")";
      },
      useRegister: function(m) {
        this.registers[m] || (this.registers[m] = !0, this.registers.list.push(m));
      },
      push: function(m) {
        return m instanceof g || (m = this.source.wrap(m)), this.inlineStack.push(m), m;
      },
      pushStackLiteral: function(m) {
        this.push(new g(m));
      },
      pushSource: function(m) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), m && this.source.push(m);
      },
      replaceStack: function(m) {
        var h = ["("], x = void 0, w = void 0, T = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var C = this.popStack(!0);
        if (C instanceof g)
          x = [C.value], h = ["(", x], T = !0;
        else {
          w = !0;
          var D = this.incrStack();
          h = ["((", this.push(D), " = ", C, ")"], x = this.topStack();
        }
        var E = m.call(this, x);
        T || this.popStack(), w && this.stackSlot--, this.push(h.concat(E, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var m = this.inlineStack;
        this.inlineStack = [];
        for (var h = 0, x = m.length; h < x; h++) {
          var w = m[h];
          if (w instanceof g)
            this.compileStack.push(w);
          else {
            var T = this.incrStack();
            this.pushSource([T, " = ", w, ";"]), this.compileStack.push(T);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(m) {
        var h = this.isInline(), x = (h ? this.inlineStack : this.compileStack).pop();
        if (!m && x instanceof g)
          return x.value;
        if (!h) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
      },
      topStack: function() {
        var m = this.isInline() ? this.inlineStack : this.compileStack, h = m[m.length - 1];
        return h instanceof g ? h.value : h;
      },
      contextName: function(m) {
        return this.useDepths && m ? "depths[" + m + "]" : "depth" + m;
      },
      quotedString: function(m) {
        return this.source.quotedString(m);
      },
      objectLiteral: function(m) {
        return this.source.objectLiteral(m);
      },
      aliasable: function(m) {
        var h = this.aliases[m];
        return h ? (h.referenceCount++, h) : (h = this.aliases[m] = this.source.wrap(m), h.aliasable = !0, h.referenceCount = 1, h);
      },
      setupHelper: function(m, h, x) {
        var w = [], T = this.setupHelperArgs(h, m, w, x), C = this.nameLookup("helpers", h, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: w,
          paramsInit: T,
          name: C,
          callParams: [D].concat(w)
        };
      },
      setupParams: function(m, h, x) {
        var w = {}, T = [], C = [], D = [], E = !x, N = void 0;
        E && (x = []), w.name = this.quotedString(m), w.hash = this.popStack(), this.trackIds && (w.hashIds = this.popStack()), this.stringParams && (w.hashTypes = this.popStack(), w.hashContexts = this.popStack());
        var M = this.popStack(), j = this.popStack();
        (j || M) && (w.fn = j || "container.noop", w.inverse = M || "container.noop");
        for (var L = h; L--; )
          N = this.popStack(), x[L] = N, this.trackIds && (D[L] = this.popStack()), this.stringParams && (C[L] = this.popStack(), T[L] = this.popStack());
        return E && (w.args = this.source.generateArray(x)), this.trackIds && (w.ids = this.source.generateArray(D)), this.stringParams && (w.types = this.source.generateArray(C), w.contexts = this.source.generateArray(T)), this.options.data && (w.data = "data"), this.useBlockParams && (w.blockParams = "blockParams"), w;
      },
      setupHelperArgs: function(m, h, x, w) {
        var T = this.setupParams(m, h, x);
        return T.loc = JSON.stringify(this.source.currentLocation), T = this.objectLiteral(T), w ? (this.useRegister("options"), x.push("options"), ["options=", T]) : x ? (x.push(T), "") : T;
      }
    }, (function() {
      for (var b = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), m = y.RESERVED_WORDS = {}, h = 0, x = b.length; h < x; h++)
        m[b[h]] = !0;
    })(), y.isValidJavaScriptVariableName = function(b) {
      return !y.RESERVED_WORDS[b] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(b);
    };
    function _(b, m, h, x, w) {
      var T = m.popStack(), C = h.length;
      for (b && C--; x < C; x++)
        T = m.nameLookup(T, h[x], w);
      return b ? [m.aliasable("container.strict"), "(", T, ", ", m.quotedString(h[x]), ", ", JSON.stringify(m.source.currentLocation), " )"] : T;
    }
    r.default = y, t.exports = r.default;
  })(eu, eu.exports)), eu.exports;
}
var Ly;
function ew() {
  return Ly || (Ly = 1, (function(t, r) {
    r.__esModule = !0;
    function a(C) {
      return C && C.__esModule ? C : { default: C };
    }
    var s = BE(), l = a(s), u = t1(), f = a(u), d = qE(), p = ZE(), g = WE(), y = a(g), _ = n1(), b = a(_), m = e1(), h = a(m), x = l.default.create;
    function w() {
      var C = x();
      return C.compile = function(D, E) {
        return p.compile(D, E, C);
      }, C.precompile = function(D, E) {
        return p.precompile(D, E, C);
      }, C.AST = f.default, C.Compiler = p.Compiler, C.JavaScriptCompiler = y.default, C.Parser = d.parser, C.parse = d.parse, C.parseWithoutProcessing = d.parseWithoutProcessing, C;
    }
    var T = w();
    T.create = w, h.default(T), T.Visitor = b.default, T.default = T, r.default = T, t.exports = r.default;
  })(jl, jl.exports)), jl.exports;
}
var Yt = ew();
function qi(t, r) {
  Yt.helpers[t] || Yt.registerHelper(t, r);
}
qi("add", (t, r) => Number(t) + Number(r));
qi("join", (t, r) => Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "");
qi("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
qi("indent", (t, r) => {
  const a = " ".repeat(Math.max(0, Number(t) || 0));
  return String(r ?? "").split(`
`).join(`
${a}`);
});
qi("json", (t) => JSON.stringify(t));
qi(
  "xmlEscape",
  (t) => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
);
const Wt = SillyTavern.getContext();
new y0("dumb", {}).getSettings();
async function tw({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: a,
  continueFrom: s,
  session: l,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: d,
  formatDescription: p,
  mainContextList: g,
  includeUserMacro: y,
  maxResponseToken: _,
  targetField: b,
  outputFormat: m
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const h = Wt.extensionSettings.connectionManager?.profiles?.find((L) => L.id === t);
  if (!h)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const x = h.api ? Wt.CONNECT_API_MAP[h.api]?.selected : void 0;
  if (!x)
    throw new Error(`Could not determine API for profile "${h.name}".`);
  const w = {};
  w.char = l.fields.name?.value || "{{char}}", w.user = y && Nr ? Nr : "{{user}}", w.persona = "{{persona}}", w.targetField = b, w.userInstructions = Yt.compile(r.trim(), { noEscape: !0 })(w);
  const T = l.draftFields[b]?.prompt ?? l.fields[b]?.prompt ?? "";
  w.fieldSpecificInstructions = Yt.compile(T, { noEscape: !0 })({
    ...w,
    char: b === "mes_example" ? "{{char}}" : w.char,
    user: b === "mes_example" ? "{{user}}" : w.user
  }), w.activeFormatInstructions = Yt.compile(p.content, { noEscape: !0 })(
    w
  );
  {
    const L = [];
    l.selectedCharacterIndexes.forEach((Y) => {
      const I = parseInt(Y), q = u[I];
      q && L.push(q);
    }), w.characters = L;
  }
  {
    const L = {};
    Object.entries(f).filter(
      ([Y, I]) => I.length > 0 && l.selectedWorldNames.includes(Y) && I.some((q) => !q.disable)
    ).forEach(([Y, I]) => {
      L[Y] = I.filter((q) => !q.disable);
    }), w.lorebooks = L;
  }
  {
    const L = {}, Y = {}, I = {}, q = b.startsWith("alternate_greetings_"), $ = _t.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(l.fields).forEach(([de, _e]) => {
      let B = !1;
      if ($) {
        const ae = de.startsWith("alternate_greetings_");
        q ? B = ae && de !== b || de === "first_mes" : B = ae;
      }
      if (!B) {
        const ae = Yt.compile(_e.value, { noEscape: !0 })({
          ...w,
          char: de === "mes_example" ? "{{char}}" : w.char,
          user: de === "mes_example" ? "{{user}}" : w.user
        });
        Dn.includes(de) ? L[_e.label] = ae : de.startsWith("alternate_greetings_") && (Y[de] = ae);
      }
    }), Object.entries(l.draftFields || {}).forEach(([de, _e]) => {
      I[_e.label] = Yt.compile(_e.value, { noEscape: !0 })(w);
    });
    const fe = {};
    Object.keys(L).length > 0 && (fe.core = L), Object.keys(Y).length > 0 && (fe.alternate_greetings = Y), Object.keys(I).length > 0 && (fe.draft = I), w.fields = fe;
  }
  const C = [];
  {
    for (const L of g) {
      if (L.promptName === "chatHistory") {
        const $ = await T0(x, a);
        if ($.warnings && $.warnings.length > 0)
          for (const fe of $.warnings)
            ve("warning", fe);
        C.push(...$.result);
        continue;
      }
      let Y = structuredClone(w);
      L.promptName === "stDescription" && (Y.char = "{{char}}", Y.user = "{{user}}");
      const I = d[L.promptName];
      if (!I)
        continue;
      const q = {
        role: L.role,
        content: Yt.compile(I.content, { noEscape: !0 })(Y)
      };
      q.content = q.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), q.content = q.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), q.content = Wt.substituteParams(q.content), q.content = q.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), q.content = q.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), q.content && C.push(q);
    }
    s && C.push({
      role: "assistant",
      content: Xv(s, m)
    });
  }
  const D = Cu(), E = await Wt.ConnectionManagerRequestService.sendRequest(
    t,
    C,
    _,
    void 0,
    D
  ), N = s ? Xv(s, m) + E.content : E.content, M = $0(N, m);
  let j;
  if (typeof M == "string")
    j = M;
  else if (typeof M == "object" && M !== null)
    if ("response" in M && typeof M.response == "string")
      j = M.response;
    else {
      const L = Object.values(M)[0];
      j = L ? String(L) : "";
    }
  else
    j = "";
  return j;
}
const qn = "SillyTavern-Character-Creator-Chat", s1 = "0.3.0", nw = "F_1.14", rw = [
  { value: "default", label: "Default (Use Preset)" },
  { value: "min", label: "Min" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "max", label: "Max" }
], aw = {
  EXTENSION: "charCreator"
}, au = [
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
  "brainstormSystemPrompt",
  "brainstormExtractPrompt"
], it = {
  stDescription: Bd,
  charDefinitions: Ud,
  lorebookDefinitions: q0,
  xmlFormat: Sx,
  jsonFormat: xx,
  noneFormat: Ex,
  worldInfoCharDefinition: Z0,
  existingFieldDefinitions: oo,
  taskDescription: oh,
  outputFormatInstructions: sh,
  personaDescription: wx,
  reviseJsonPrompt: Cx,
  reviseXmlPrompt: Ax,
  reviseTaskDescription: Nx,
  brainstormSystemPrompt: lh,
  brainstormExtractPrompt: uh
}, o1 = {
  version: s1,
  formatVersion: nw,
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
      content: it.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: it.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: it.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: it.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: it.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: it.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: it.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: oo,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: oh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: sh,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: it.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: it.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: it.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: it.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    },
    brainstormSystemPrompt: {
      content: lh,
      isDefault: !0,
      label: "Brainstorm System Prompt"
    },
    brainstormExtractPrompt: {
      content: uh,
      isDefault: !0,
      label: "Brainstorm Card Extraction"
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
function Cu() {
  const t = _t.getSettings();
  return t.thinkingLevel && t.thinkingLevel !== "default" ? { reasoning_effort: t.thinkingLevel } : {};
}
const _t = new y0(aw.EXTENSION, o1);
async function iw() {
  return new Promise((t, r) => {
    _t.initializeSettings({
      strategy: [
        {
          from: "*",
          to: "F_1.4",
          action(a) {
            return {
              profileId: a?.profileId ?? "",
              maxContextType: a?.maxContextType ?? "profile",
              maxContextValue: a?.maxContextValue ?? 16384,
              maxResponseToken: a?.maxResponseToken ?? 1024,
              outputFormat: a?.outputFormat ?? "xml",
              contextToSend: {
                ...a?.contextToSend,
                persona: !0
              },
              // Updated prompts structure
              prompts: {
                stDescription: {
                  content: it.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: it.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: it.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: it.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: it.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: it.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: it.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: oo,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: oh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: sh,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: it.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Generic Prompt Presets
              promptPreset: a?.promptPreset ?? "default",
              promptPresets: a?.promptPresets ?? {
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
                show: a?.showSaveAsWorldInfoEntry?.show ?? !1
              }
            };
          }
        },
        {
          from: "F_1.4",
          to: "F_1.5",
          action(a) {
            return {
              ...a,
              // Update persona
              prompts: {
                ...a?.prompts,
                personaDescription: {
                  content: it.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Reset default main context
              mainContextTemplatePresets: {
                ...a?.mainContextTemplatePresets,
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
          async action(a) {
            return await ve("info", `[${qn}] Added Alternate Greetings.`), {
              ...a,
              prompts: {
                ...a?.prompts,
                stDescription: {
                  content: it.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: it.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: it.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: oo,
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
          async action(a) {
            const s = {
              ...a
            };
            return a.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Bd), s;
          }
        },
        {
          from: "F_1.7",
          to: "F_1.8",
          action(a) {
            const s = {
              ...a,
              defaultPromptEngineeringMode: "native"
            };
            return s.prompts || (s.prompts = {}), s.prompts.reviseJsonPrompt = {
              content: it.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: it.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: it.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, a.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Ud), a.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = q0), a.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = oo), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(a) {
            const s = {
              ...a
            };
            return a.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Bd), s;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(a) {
            const s = {
              ...a
            };
            return s.prompts.brainstormSystemPrompt || (s.prompts.brainstormSystemPrompt = {
              content: lh,
              isDefault: !0,
              label: "Brainstorm System Prompt"
            }), s;
          }
        },
        {
          from: "F_1.10",
          to: "F_1.11",
          action(a) {
            return {
              ...a,
              thinkingLevel: a.thinkingLevel ?? "default"
            };
          }
        },
        {
          from: "F_1.11",
          to: "F_1.12",
          action(a) {
            const s = structuredClone(a);
            return s.prompts?.reviseXmlPrompt?.isDefault !== !1 && (s.prompts.reviseXmlPrompt = {
              content: it.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }), s;
          }
        },
        {
          from: "F_1.12",
          to: "F_1.13",
          action(a) {
            const s = structuredClone(a);
            return a.prompts?.charDefinitions?.isDefault && (s.prompts.charDefinitions.content = Ud), a.prompts?.worldInfoCharDefinition?.isDefault && (s.prompts.worldInfoCharDefinition.content = Z0), s;
          }
        },
        {
          from: "F_1.13",
          to: "F_1.14",
          action(a) {
            const s = structuredClone(a);
            return s.prompts.brainstormExtractPrompt || (s.prompts.brainstormExtractPrompt = {
              content: uh,
              isDefault: !0,
              label: "Brainstorm Card Extraction"
            }), s;
          }
        }
      ]
    }).then((a) => {
      t();
    }).catch((a) => {
      console.error(`[${qn}] Error initializing settings:`, a), ve("error", `[${qn}] Failed to initialize settings: ${a.message}`), Wt.Popup.show.confirm(
        `[${qn}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s ? (_t.resetSettings(), ve("success", `[${qn}] Settings reset. Reloading may be required.`)) : ve("warning", `[${qn}] Continuing with default settings for this session.`);
      }).catch((s) => {
        console.error(`[${qn}] Failed to show settings reset prompt:`, s);
      }).finally(() => t());
    });
  });
}
const ce = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const l = G.useMemo(() => {
    const u = [];
    return a || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ S.jsx("button", { className: l, ...s, children: t });
}, sw = ({ label: t, className: r, overrideDefaults: a = !1, type: s = "text", ...l }) => {
  const u = G.useMemo(() => {
    const f = [];
    return a || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [a, r, s]);
  if (s === "checkbox") {
    const f = a ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ S.jsxs("label", { className: f, children: [
      /* @__PURE__ */ S.jsx("input", { type: "checkbox", ...l }),
      t && /* @__PURE__ */ S.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ S.jsx("input", { type: s, className: u, ...l });
}, Au = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const l = G.useMemo(() => {
    const u = [];
    return a || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ S.jsx("select", { className: l, ...s, children: t });
}, en = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const l = G.useMemo(() => {
    const u = [];
    return a || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ S.jsx("textarea", { className: l, ...s, children: t });
};
var ow = g0(), mn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(mn || {}), aa = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(aa || {});
const lw = SillyTavern.getContext(), Ia = ({
  content: t,
  type: r,
  inputValue: a = "",
  options: s = {},
  preventEscape: l = !1,
  onComplete: u
}) => {
  var f;
  const d = G.useRef(null), p = G.useRef(null), [g, y] = G.useState(!1), [_, b] = G.useState(null), m = G.useRef(lw.uuidv4()), h = G.useRef({
    id: m.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  G.useEffect(() => {
    const C = d.current;
    if (!C) return;
    const D = (E) => {
      E.preventDefault(), l || x(aa.CANCELLED);
    };
    return C.addEventListener("cancel", D), h.current.dlg = C, h.current.mainInput = p.current, Ti.util.popups.push(h.current), C.showModal || (C.classList.add("poly_dialog"), mv.registerDialog(C), new ResizeObserver((E) => {
      for (const N of E)
        mv.reposition(N.target);
    }).observe(C)), C.showModal(), Kf(), () => {
      pv(Ti.util.popups, h.current), Kf(), C.removeEventListener("cancel", D);
    };
  }, []);
  const x = async (C) => {
    var D, E;
    let N = C;
    if (r === mn.INPUT && (C >= aa.AFFIRMATIVE ? N = (D = p.current) == null ? void 0 : D.value : C === aa.NEGATIVE ? N = !1 : C === aa.CANCELLED ? N = null : N = !1), (E = s.customInputs) != null && E.length) {
      const j = new Map(
        s.customInputs.map((L) => {
          var Y;
          const I = (Y = d.current) == null ? void 0 : Y.querySelector(`#${L.id}`);
          return [I.id, I.checked];
        })
      );
      h.current.inputResults = j;
    }
    if (h.current.result = C, h.current.value = N, s.onClosing && !await s.onClosing(h.current)) {
      y(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    y(!1), Ti.util.lastResult = {
      value: N,
      result: C,
      inputResults: h.current.inputResults
    };
    const M = d.current;
    M && (M.setAttribute("closing", ""), Kf(), N2(M, async () => {
      var j;
      if (M.close(), s.onClose && await s.onClose(h.current), pv(Ti.util.popups, h.current), Ti.util.popups.length > 0) {
        const L = (j = document.activeElement) == null ? void 0 : j.closest(".popup"), Y = L?.getAttribute("data-id"), I = Ti.util.popups.find((q) => q.id === Y);
        I && I.lastFocus && I.lastFocus.focus();
      }
      u(N);
    }));
  }, w = (C) => {
    C.target instanceof HTMLElement && C.target !== d.current && (b(C.target), h.current.lastFocus = C.target);
  }, T = async (C) => {
  };
  return ow.createPortal(
    /* @__PURE__ */ S.jsx(
      "dialog",
      {
        ref: d,
        className: (() => {
          const C = ["popup"];
          return s.wide && C.push("wide_dialogue_popup"), s.wider && C.push("wider_dialogue_popup"), s.large && C.push("large_dialogue_popup"), s.transparent && C.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && C.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && C.push("vertical_scrolling_dialogue_popup"), s.animation && C.push(`popup--animation-${s.animation}`), C.join(" ");
        })(),
        "data-id": m.current,
        onKeyDown: T,
        onFocus: w,
        children: /* @__PURE__ */ S.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ S.jsx("div", { className: "popup-content", children: t }),
          r === mn.INPUT && /* @__PURE__ */ S.jsx(
            "textarea",
            {
              ref: p,
              className: "popup-input text_pole result-control auto-select",
              rows: s.rows ?? 1,
              defaultValue: a,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          s.customInputs && /* @__PURE__ */ S.jsx("div", { className: "popup-inputs", children: s.customInputs.map((C) => /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: C.id, children: [
            /* @__PURE__ */ S.jsx("input", { type: "checkbox", id: C.id, defaultChecked: C.defaultState }),
            /* @__PURE__ */ S.jsx("span", { "data-i18n": C.label, children: C.label }),
            C.tooltip && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: C.tooltip,
                "data-i18n": `[title]${C.tooltip}`
              }
            )
          ] }, C.id)) }),
          r !== mn.DISPLAY && /* @__PURE__ */ S.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((C, D) => {
              const E = typeof C == "string" ? { text: C, result: D + 2 } : C;
              return /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${E.classes ?? ""}`,
                  "data-result": E.result,
                  onClick: () => {
                    var N;
                    (N = E.action) == null || N.call(E), x(E.result ?? D + 2);
                  },
                  "data-i18n": E.text,
                  children: E.text
                },
                D
              );
            }),
            r !== mn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => x(aa.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== mn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => x(aa.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === mn.DISPLAY && /* @__PURE__ */ S.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => x(aa.CANCELLED),
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
}, $s = (t, r, a) => {
  if (!t || !t.api)
    return !1;
  const s = a[t.api];
  if (!s || !Object.hasOwn(r, s.selected))
    return !1;
  switch (s.selected) {
    case "openai":
      return !!s.source;
    case "textgenerationwebui":
      return !!s.type;
  }
  return !1;
}, Ar = SillyTavern.getContext(), l1 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: a = "Select a Connection Profile",
  onChange: s,
  onCreate: l,
  onUpdate: u,
  onDelete: f
}) => {
  const [d, p] = G.useState(t ?? ""), [g, y] = G.useState(Date.now()), { isEnabled: _, profiles: b, connectApiMap: m } = G.useMemo(() => {
    var w, T;
    return (w = Ar.extensionSettings.disabledExtensions) != null && w.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((T = Ar.extensionSettings.connectionManager) == null ? void 0 : T.profiles) ?? [],
      connectApiMap: Ar.CONNECT_API_MAP
    };
  }, [g]);
  G.useEffect(() => {
    if (!_) return;
    const w = (D) => {
      $s(D, r, m) && (y(Date.now()), l?.(D));
    }, T = (D, E) => {
      const N = $s(D, r, m), M = $s(E, r, m);
      (N || M) && y(Date.now()), u?.(D, E), d === D.id && !M && (p(""), s?.(void 0));
    }, C = (D) => {
      $s(D, r, m) && (y(Date.now()), f?.(D), d === D.id && (p(""), s?.(void 0)));
    };
    return Ar.eventSource.on("CONNECTION_PROFILE_CREATED", w), Ar.eventSource.on("CONNECTION_PROFILE_UPDATED", T), Ar.eventSource.on("CONNECTION_PROFILE_DELETED", C), () => {
      Ar.eventSource.removeListener("CONNECTION_PROFILE_CREATED", w), Ar.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", T), Ar.eventSource.removeListener("CONNECTION_PROFILE_DELETED", C);
    };
  }, [_, d, r, m, s, l, u, f]);
  const h = G.useMemo(() => {
    if (!_) return [];
    const w = b.filter((C) => $s(C, r, m)), T = {};
    for (const [C, D] of Object.entries(r))
      T[C] = { label: D, profiles: [] };
    for (const C of w) {
      const D = m[C.api];
      T[D.selected] && T[D.selected].profiles.push(C);
    }
    for (const C of Object.values(T))
      C.profiles.sort((D, E) => (D.name ?? "").localeCompare(E.name ?? ""));
    return Object.values(T).filter((C) => C.profiles.length > 0);
  }, [_, b, r, m]), x = G.useCallback(
    (w) => {
      const T = w.target.value;
      p(T);
      const C = b.find((D) => D.id === T);
      s?.(C);
    },
    [b, s]
  );
  return _ ? /* @__PURE__ */ S.jsxs(Au, { value: d, onChange: x, children: [
    /* @__PURE__ */ S.jsx("option", { value: "", children: a }),
    h.map((w) => /* @__PURE__ */ S.jsx("optgroup", { label: w.label, children: w.profiles.map((T) => /* @__PURE__ */ S.jsx("option", { value: T.id, children: T.name }, T.id)) }, w.label))
  ] }) : /* @__PURE__ */ S.jsx(Au, { disabled: !0, value: "", children: /* @__PURE__ */ S.jsx("option", { children: "Connection Manager disabled" }) });
}, uw = gu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: a, showSelectInput: s, onToggle: l, onDelete: u, onSelectChange: f }) => {
    const {
      id: d,
      label: p,
      enabled: g,
      canDelete: y = !0,
      canToggle: _ = !0,
      showSelect: b = !0,
      canSelect: m = !0,
      selectOptions: h = [],
      selectValue: x
    } = t, w = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !g ? 0.6 : 1
    }, T = { cursor: "pointer", flexShrink: 0 }, C = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ S.jsxs("li", { className: "sortable-list-item", style: w, "data-id": d, children: [
      /* @__PURE__ */ S.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ S.jsx(
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
          children: p
        }
      ),
      s && b && m && /* @__PURE__ */ S.jsx(
        Au,
        {
          value: x,
          onChange: (D) => f(d, D.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ S.jsx("option", { disabled: !0, children: "--" }) : h.map((D) => /* @__PURE__ */ S.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!b || !m) && /* @__PURE__ */ S.jsx("span", { style: C }),
      r && _ && /* @__PURE__ */ S.jsx(
        ce,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${g ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...T,
            marginRight: "10px",
            fontSize: "1.2em",
            color: g ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => l(d)
        }
      ),
      r && !_ && /* @__PURE__ */ S.jsx("span", { style: C }),
      a && y && /* @__PURE__ */ S.jsx(
        ce,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...T,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(d)
        }
      ),
      a && !y && /* @__PURE__ */ S.jsx("span", { style: { ...C, marginRight: 0 } })
    ] });
  }
), cw = ({
  items: t,
  onItemsChange: r,
  showToggleButton: a = !1,
  showDeleteButton: s = !1,
  showSelectInput: l = !1,
  sortableJsOptions: u = {}
}) => {
  const f = G.useRef(null), d = G.useRef(null);
  G.useEffect(() => (f.current && (d.current = De.create(f.current, {
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
      const { oldIndex: b, newIndex: m } = _;
      if (b === void 0 || m === void 0 || b === m)
        return;
      const h = Array.from(t), [x] = h.splice(b, 1);
      h.splice(m, 0, x), r(h);
    }
  })), () => {
    var _;
    (_ = d.current) == null || _.destroy(), d.current = null;
  }), [t, r, u]);
  const p = (_) => {
    r(t.map((b) => b.id === _ ? { ...b, enabled: !b.enabled } : b));
  }, g = (_) => {
    r(t.filter((b) => b.id !== _));
  }, y = (_, b) => {
    r(t.map((m) => m.id === _ ? { ...m, selectValue: b } : m));
  };
  return /* @__PURE__ */ S.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ S.jsx(
    uw,
    {
      item: _,
      showToggleButton: a,
      showDeleteButton: s,
      showSelectInput: l,
      onToggle: p,
      onDelete: g,
      onSelectChange: y
    },
    _.id
  )) });
}, iu = ({
  items: t,
  value: r,
  onChange: a,
  placeholder: s = "Select items...",
  closeOnSelect: l = !1,
  multiple: u = !0,
  disabled: f = !1,
  onBeforeSelection: d,
  enableSearch: p = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: y = "No results found",
  searchFuseOptions: _,
  inputClasses: b,
  containerClasses: m
}) => {
  const [h, x] = G.useState(!1), [w, T] = G.useState(""), C = G.useRef(null);
  G.useEffect(() => {
    const j = (L) => {
      C.current && !C.current.contains(L.target) && x(!1);
    };
    return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
  }, []), G.useEffect(() => {
    h || T("");
  }, [h]);
  const D = G.useMemo(() => {
    if (!p) return null;
    const j = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ..._
    };
    return new Hi(t, j);
  }, [t, p, _]), E = G.useMemo(() => !p || !w.trim() || !D ? t : D.search(w.trim()).map((j) => j.item), [t, w, p, D]), N = async (j) => {
    let L;
    u ? L = r.includes(j) ? r.filter((Y) => Y !== j) : [...r, j] : L = r.includes(j) ? [] : [j], !(d && !await Promise.resolve(d(r, L))) && (a(L), l && x(!1));
  }, M = G.useMemo(() => {
    var j;
    return r.length === 0 ? s : r.length === 1 ? ((j = t.find((L) => L.value === r[0])) == null ? void 0 : j.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      ref: C,
      className: `fancy-dropdown-container ${m ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !f && x(!h),
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
              /* @__PURE__ */ S.jsx("span", { className: "fancy-dropdown-trigger-text", children: M }),
              /* @__PURE__ */ S.jsx("i", { className: `fas ${h ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        h && /* @__PURE__ */ S.jsxs(
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
              p && /* @__PURE__ */ S.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ S.jsx(
                    sw,
                    {
                      type: "text",
                      placeholder: g,
                      value: w,
                      onChange: (j) => T(j.target.value),
                      autoFocus: !0,
                      className: b
                    }
                  )
                }
              ),
              /* @__PURE__ */ S.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: E.length > 0 ? E.map((j) => /* @__PURE__ */ S.jsx(
                fw,
                {
                  item: j,
                  isSelected: r.includes(j.value),
                  onClick: N
                },
                j.value
              )) : /* @__PURE__ */ S.jsx(
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
}, fw = gu.memo(({ item: t, isSelected: r, onClick: a }) => {
  const [s, l] = G.useState(!1);
  return /* @__PURE__ */ S.jsxs(
    "li",
    {
      onClick: () => a(t.value),
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      style: {
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : s ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ S.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ S.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), xd = SillyTavern.getContext(), Nu = ({
  value: t,
  items: r,
  readOnlyValues: a = [],
  label: s,
  onChange: l,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: d = !1,
  enableDelete: p = !1,
  onCreate: g,
  onRename: y,
  onDelete: _,
  buttons: b
}) => {
  const m = G.useMemo(() => r.find((C) => C.value === t), [r, t]), h = G.useCallback((C) => C ? a.includes(C) : !1, [a]), x = async () => {
    const C = await xd.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!C || C.trim() === "") return;
    const D = C.trim();
    if (r.some((N) => N.value === D)) {
      await ve("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: D, label: D };
    if (g) {
      const N = await Promise.resolve(g(D));
      if (!N.confirmed) return;
      N.value && (typeof N.value == "string" ? E = { value: N.value, label: N.value } : E = N.value);
    }
    u([...r, E]), l(E.value, t);
  }, w = async () => {
    if (!m) {
      await ve("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (h(m.value)) {
      await ve("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const C = await xd.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${m.label}":`,
      m.label
    );
    if (!C || C.trim() === "" || C.trim() === m.value) return;
    const D = C.trim();
    if (r.some((M) => M.value === D)) {
      await ve("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: D, label: D };
    if (y) {
      const M = await Promise.resolve(y(m.value, D));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? E = { value: M.value, label: M.value } : E = M.value);
    }
    const N = r.map((M) => M.value === m.value ? E : M);
    u(N), l(E.value, t);
  }, T = async () => {
    var C;
    if (!m) {
      await ve("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (h(m.value)) {
      await ve("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await xd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${m.label}"?`
    ) || _ && !await Promise.resolve(_(m.value)))
      return;
    const D = r.findIndex((M) => M.value === m.value), E = r.filter((M) => M.value !== m.value);
    u(E);
    let N;
    if (E.length > 0) {
      const M = Math.min(D, E.length - 1);
      N = (C = E[M]) == null ? void 0 : C.value;
    }
    l(N, t);
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ S.jsx(Au, { value: t ?? "", onChange: (C) => l(C.target.value, t), children: r.map((C) => /* @__PURE__ */ S.jsx("option", { value: C.value, children: C.label }, C.value)) }),
    f && /* @__PURE__ */ S.jsx(
      ce,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: x,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    d && /* @__PURE__ */ S.jsx(
      ce,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: w,
        disabled: !m,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    p && /* @__PURE__ */ S.jsx(
      ce,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: T,
        disabled: !m,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    b?.map((C) => /* @__PURE__ */ S.jsx(
      ce,
      {
        className: C.icon,
        title: C.title,
        onClick: C.onClick,
        disabled: C.disabled,
        "data-i18n": C.i18n ? `[title]${C.i18n}` : void 0
      },
      C.key
    ))
  ] });
}, u1 = () => {
  const [, t] = G.useState(0);
  return G.useCallback(() => {
    t((a) => a + 1);
  }, []);
}, Ed = SillyTavern.getContext(), dw = () => {
  const t = u1(), r = _t.getSettings(), [a, s] = G.useState(au[0]), l = G.useCallback(
    (E) => {
      const N = _t.getSettings();
      E(N), _t.saveSettings(), t();
    },
    [t]
  ), u = G.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((E) => ({ value: E, label: E })),
    [r.mainContextTemplatePresets]
  ), f = G.useMemo(
    () => Object.entries(r.prompts).map(([E, N]) => ({
      value: E,
      label: `${N.label} (${E})`
    })),
    [r.prompts]
  ), d = G.useMemo(() => {
    const E = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return E ? E.prompts.map((N) => {
      const M = r.prompts[N.promptName], j = M ? `${M.label} (${N.promptName})` : N.promptName;
      return {
        id: N.promptName,
        label: j,
        enabled: N.enabled,
        selectValue: N.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), p = (E) => {
    l((N) => {
      N.mainContextTemplatePreset = E ?? "default";
    });
  }, g = (E) => {
    l((N) => {
      const M = {};
      E.forEach((j) => {
        M[j.value] = N.mainContextTemplatePresets[j.value] ?? structuredClone(
          N.mainContextTemplatePresets[N.mainContextTemplatePreset] ?? N.mainContextTemplatePresets.default
        );
      }), N.mainContextTemplatePresets = M;
    });
  }, y = (E) => {
    l((N) => {
      const M = E.map((Y) => ({
        promptName: Y.id,
        enabled: Y.enabled,
        role: Y.selectValue ?? "user"
      })), j = {
        ...N.mainContextTemplatePresets[N.mainContextTemplatePreset],
        prompts: M
      }, L = {
        ...N.mainContextTemplatePresets,
        [N.mainContextTemplatePreset]: j
      };
      N.mainContextTemplatePresets = L;
    });
  }, _ = async () => {
    await Ed.Popup.show.confirm("Restore default", "Are you sure?") && l((N) => {
      N.mainContextTemplatePresets = {
        ...N.mainContextTemplatePresets,
        default: structuredClone(o1.mainContextTemplatePresets.default)
      }, N.mainContextTemplatePreset === "default" ? t() : N.mainContextTemplatePreset = "default";
    });
  }, b = (E) => {
    l((N) => {
      const M = E.map((I) => I.value);
      Object.keys(N.prompts).filter((I) => !M.includes(I)).forEach((I) => {
        Object.values(N.mainContextTemplatePresets).forEach((q) => {
          q.prompts = q.prompts.filter(($) => $.promptName !== I);
        });
      });
      const Y = {};
      E.forEach((I) => {
        Y[I.value] = N.prompts[I.value] ?? { content: "", isDefault: !1, label: I.label };
      }), N.prompts = Y;
    });
  }, m = (E) => {
    const N = wu(E);
    return N ? r.prompts[N] ? (ve("error", `Prompt name already exists: ${N}`), { confirmed: !1 }) : (l((M) => {
      M.prompts = {
        ...M.prompts,
        [N]: { content: M.prompts[a]?.content ?? "", isDefault: !1, label: E }
      };
      const j = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([L, Y]) => [
          L,
          {
            ...Y,
            prompts: [...Y.prompts, { enabled: !0, promptName: N, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = j;
    }), s(N), { confirmed: !0, value: N }) : (ve("error", `Invalid prompt name: ${E}`), { confirmed: !1 });
  }, h = (E, N) => {
    const M = wu(N);
    return M ? r.prompts[M] ? (ve("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (l((j) => {
      const { [E]: L, ...Y } = j.prompts;
      j.prompts = {
        ...Y,
        [M]: { ...L, label: N }
      };
      const I = Object.fromEntries(
        Object.entries(j.mainContextTemplatePresets).map(([q, $]) => [
          q,
          {
            ...$,
            prompts: $.prompts.map((fe) => fe.promptName === E ? { ...fe, promptName: M } : fe)
          }
        ])
      );
      j.mainContextTemplatePresets = I;
    }), s(M), { confirmed: !0, value: M }) : (ve("error", `Invalid prompt name: ${N}`), { confirmed: !1 });
  }, x = (E) => {
    const N = E.target.value;
    l((M) => {
      const j = M.prompts[a];
      j && (M.prompts = {
        ...M.prompts,
        [a]: {
          ...j,
          // Copy existing properties
          content: N,
          isDefault: au.includes(a) ? it[a] === N : !1
        }
      });
    });
  }, w = async () => {
    const E = r.prompts[a];
    if (!E) return ve("warning", "No prompt selected.");
    await Ed.Popup.show.confirm("Restore Default", `Restore default for "${E.label}"?`) && l((M) => {
      M.prompts = {
        ...M.prompts,
        [a]: {
          ...M.prompts[a],
          content: it[a]
        }
      };
    });
  }, T = async () => {
    await Ed.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (_t.resetSettings(), t(), ve("success", "Settings have been reset."));
  }, C = r.prompts[a], D = au.includes(a);
  return /* @__PURE__ */ S.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ S.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ S.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ S.jsx(
          ce,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: _
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx(
        Nu,
        {
          label: "Template",
          items: u,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: p,
          onItemsChange: g,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ S.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(
        cw,
        {
          items: d,
          onItemsChange: y,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ S.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ S.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Prompt Templates" }),
        D && /* @__PURE__ */ S.jsx(
          ce,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: w
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx(
        Nu,
        {
          label: "Prompt",
          items: f,
          value: a,
          readOnlyValues: au,
          onChange: (E) => s(E ?? ""),
          onItemsChange: b,
          onCreate: m,
          onRename: h,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        en,
        {
          value: C?.content ?? "",
          onChange: x,
          placeholder: "Edit the selected prompt template here...",
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ S.jsx(
        "input",
        {
          type: "checkbox",
          checked: r.showSaveAsWorldInfoEntry.show,
          onChange: (E) => l((N) => {
            N.showSaveAsWorldInfoEntry.show = E.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ S.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ S.jsxs(ce, { className: "danger_button", style: { width: "auto" }, onClick: T, children: [
      /* @__PURE__ */ S.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, Iy = ({
  fieldId: t,
  label: r,
  value: a,
  prompt: s,
  large: l = !1,
  rows: u = 3,
  promptEnabled: f = !0,
  isDraft: d = !1,
  isGenerating: p = !1,
  onValueChange: g,
  onPromptChange: y,
  onGenerate: _,
  onContinue: b,
  onClear: m,
  onCompare: h,
  onDelete: x,
  onOpenReviseSessions: w
}) => /* @__PURE__ */ S.jsxs("div", { className: `character-field ${d ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ S.jsx("label", { children: r }),
  /* @__PURE__ */ S.jsxs("div", { className: `field-container ${l ? "large-field" : ""}`, children: [
    /* @__PURE__ */ S.jsx(en, { value: a, onChange: (T) => g(t, T.target.value), rows: u }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ S.jsx(ce, { onClick: () => _(t), disabled: p, title: "Generate field content", children: p ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ S.jsx(ce, { onClick: () => b(t), disabled: p, title: "Continue from current content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ S.jsx(ce, { onClick: () => m(t), title: "Clear field content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" }) }),
      w && !d && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ S.jsx(ce, { onClick: () => w(t), title: "Revise with AI chat", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" }) }),
      !d && h && /* @__PURE__ */ S.jsx(ce, { onClick: () => h(t), title: "Compare with loaded character", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      d && x && /* @__PURE__ */ S.jsx(ce, { onClick: () => x(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ S.jsx(
    en,
    {
      value: s,
      onChange: (T) => y(t, T.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), hw = SillyTavern.getContext(), pw = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: a,
  onContinue: s,
  onCompare: l,
  isGenerating: u
}) => {
  const [f, d] = G.useState(0);
  G.useEffect(() => {
    f >= t.length && t.length > 0 ? d(t.length - 1) : t.length === 0 && d(0);
  }, [t, f]);
  const p = () => {
    const b = [...t, { value: "", prompt: "" }];
    r(b), d(b.length - 1);
  }, g = async () => {
    if (t.length === 0) return;
    if (await hw.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const m = t.filter((h, x) => x !== f);
      r(m);
    }
  }, y = (b, m, h) => {
    r(t.map((x, w) => w === b ? { ...x, [m]: h } : x));
  }, _ = t[f];
  return /* @__PURE__ */ S.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ S.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ S.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((b, m) => /* @__PURE__ */ S.jsxs(
            ce,
            {
              onClick: () => d(m),
              className: `menu_button ${m === f ? "active" : ""}`,
              children: [
                "Greeting ",
                m + 1
              ]
            },
            m
          ))
        }
      ),
      /* @__PURE__ */ S.jsxs(ce, { onClick: p, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ S.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ S.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ S.jsx(
          en,
          {
            value: _?.value ?? "",
            onChange: (b) => y(f, "value", b.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(
          en,
          {
            value: _?.prompt ?? "",
            onChange: (b) => y(f, "prompt", b.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ S.jsx(ce, { onClick: () => a(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ S.jsx(ce, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ S.jsx(
          ce,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ S.jsx(ce, { onClick: () => l(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ S.jsx(
          ce,
          {
            onClick: g,
            disabled: u,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        )
      ] })
    ] })
  ] });
};
var ua = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.diff = function(r, a, s) {
      s === void 0 && (s = {});
      var l;
      typeof s == "function" ? (l = s, s = {}) : "callback" in s && (l = s.callback);
      var u = this.castInput(r, s), f = this.castInput(a, s), d = this.removeEmpty(this.tokenize(u, s)), p = this.removeEmpty(this.tokenize(f, s));
      return this.diffWithOptionsObj(d, p, s, l);
    }, t.prototype.diffWithOptionsObj = function(r, a, s, l) {
      var u = this, f, d = function(E) {
        if (E = u.postProcess(E, s), l) {
          setTimeout(function() {
            l(E);
          }, 0);
          return;
        } else
          return E;
      }, p = a.length, g = r.length, y = 1, _ = p + g;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var b = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, m = Date.now() + b, h = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(h[0], a, r, 0, s);
      if (h[0].oldPos + 1 >= g && x + 1 >= p)
        return d(this.buildValues(h[0].lastComponent, a, r));
      var w = -1 / 0, T = 1 / 0, C = function() {
        for (var E = Math.max(w, -y); E <= Math.min(T, y); E += 2) {
          var N = void 0, M = h[E - 1], j = h[E + 1];
          M && (h[E - 1] = void 0);
          var L = !1;
          if (j) {
            var Y = j.oldPos - E;
            L = j && 0 <= Y && Y < p;
          }
          var I = M && M.oldPos + 1 < g;
          if (!L && !I) {
            h[E] = void 0;
            continue;
          }
          if (!I || L && M.oldPos < j.oldPos ? N = u.addToPath(j, !0, !1, 0, s) : N = u.addToPath(M, !1, !0, 1, s), x = u.extractCommon(N, a, r, E, s), N.oldPos + 1 >= g && x + 1 >= p)
            return d(u.buildValues(N.lastComponent, a, r)) || !0;
          h[E] = N, N.oldPos + 1 >= g && (T = Math.min(T, E - 1)), x + 1 >= p && (w = Math.max(w, E + 1));
        }
        y++;
      };
      if (l)
        (function E() {
          setTimeout(function() {
            if (y > _ || Date.now() > m)
              return l(void 0);
            C() || E();
          }, 0);
        })();
      else
        for (; y <= _ && Date.now() <= m; ) {
          var D = C();
          if (D)
            return D;
        }
    }, t.prototype.addToPath = function(r, a, s, l, u) {
      var f = r.lastComponent;
      return f && !u.oneChangePerToken && f.added === a && f.removed === s ? {
        oldPos: r.oldPos + l,
        lastComponent: { count: f.count + 1, added: a, removed: s, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + l,
        lastComponent: { count: 1, added: a, removed: s, previousComponent: f }
      };
    }, t.prototype.extractCommon = function(r, a, s, l, u) {
      for (var f = a.length, d = s.length, p = r.oldPos, g = p - l, y = 0; g + 1 < f && p + 1 < d && this.equals(s[p + 1], a[g + 1], u); )
        g++, p++, y++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return y && !u.oneChangePerToken && (r.lastComponent = { count: y, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, g;
    }, t.prototype.equals = function(r, a, s) {
      return s.comparator ? s.comparator(r, a) : r === a || !!s.ignoreCase && r.toLowerCase() === a.toLowerCase();
    }, t.prototype.removeEmpty = function(r) {
      for (var a = [], s = 0; s < r.length; s++)
        r[s] && a.push(r[s]);
      return a;
    }, t.prototype.castInput = function(r, a) {
      return r;
    }, t.prototype.tokenize = function(r, a) {
      return Array.from(r);
    }, t.prototype.join = function(r) {
      return r.join("");
    }, t.prototype.postProcess = function(r, a) {
      return r;
    }, Object.defineProperty(t.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.buildValues = function(r, a, s) {
      for (var l = [], u; r; )
        l.push(r), u = r.previousComponent, delete r.previousComponent, r = u;
      l.reverse();
      for (var f = l.length, d = 0, p = 0, g = 0; d < f; d++) {
        var y = l[d];
        if (y.removed)
          y.value = this.join(s.slice(g, g + y.count)), g += y.count;
        else {
          if (!y.added && this.useLongestToken) {
            var _ = a.slice(p, p + y.count);
            _ = _.map(function(b, m) {
              var h = s[g + m];
              return h.length > b.length ? h : b;
            }), y.value = this.join(_);
          } else
            y.value = this.join(a.slice(p, p + y.count));
          p += y.count, y.added || (g += y.count);
        }
      }
      return l;
    }, t;
  })()
), mw = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), gw = (
  /** @class */
  (function(t) {
    mw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(ua)
);
new gw();
function Py(t, r) {
  var a;
  for (a = 0; a < t.length && a < r.length; a++)
    if (t[a] != r[a])
      return t.slice(0, a);
  return t.slice(0, a);
}
function By(t, r) {
  var a;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (a = 0; a < t.length && a < r.length; a++)
    if (t[t.length - (a + 1)] != r[r.length - (a + 1)])
      return t.slice(-a);
  return t.slice(-a);
}
function Zd(t, r, a) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return a + t.slice(r.length);
}
function Gd(t, r, a) {
  if (!r)
    return t + a;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + a;
}
function Qs(t, r) {
  return Zd(t, r, "");
}
function su(t, r) {
  return Gd(t, r, "");
}
function Uy(t, r) {
  return r.slice(0, vw(t, r));
}
function vw(t, r) {
  var a = 0;
  t.length > r.length && (a = t.length - r.length);
  var s = r.length;
  t.length < r.length && (s = t.length);
  var l = Array(s), u = 0;
  l[0] = 0;
  for (var f = 1; f < s; f++) {
    for (r[f] == r[u] ? l[f] = l[u] : l[f] = u; u > 0 && r[f] != r[u]; )
      u = l[u];
    r[f] == r[u] && u++;
  }
  u = 0;
  for (var d = a; d < t.length; d++) {
    for (; u > 0 && t[d] != r[u]; )
      u = l[u];
    t[d] == r[u] && u++;
  }
  return u;
}
function Ks(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function ra(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var c1 = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), Tu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", yw = new RegExp("[".concat(Tu, "]+|\\s+|[^").concat(Tu, "]"), "ug"), bw = (
  /** @class */
  (function(t) {
    c1(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(a, s, l) {
      return l.ignoreCase && (a = a.toLowerCase(), s = s.toLowerCase()), a.trim() === s.trim();
    }, r.prototype.tokenize = function(a, s) {
      s === void 0 && (s = {});
      var l;
      if (s.intlSegmenter) {
        var u = s.intlSegmenter;
        if (u.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        l = Array.from(u.segment(a), function(p) {
          return p.segment;
        });
      } else
        l = a.match(yw) || [];
      var f = [], d = null;
      return l.forEach(function(p) {
        /\s/.test(p) ? d == null ? f.push(p) : f.push(f.pop() + p) : d != null && /\s/.test(d) ? f[f.length - 1] == d ? f.push(f.pop() + p) : f.push(d + p) : f.push(p), d = p;
      }), f;
    }, r.prototype.join = function(a) {
      return a.map(function(s, l) {
        return l == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(a, s) {
      if (!a || s.oneChangePerToken)
        return a;
      var l = null, u = null, f = null;
      return a.forEach(function(d) {
        d.added ? u = d : d.removed ? f = d : ((u || f) && Fy(l, f, u, d), l = d, u = null, f = null);
      }), (u || f) && Fy(l, f, u, null), a;
    }, r;
  })(ua)
), _w = new bw();
function f1(t, r, a) {
  return _w.diff(t, r, a);
}
function Fy(t, r, a, s) {
  if (r && a) {
    var l = ra(r.value), u = Ks(r.value), f = ra(a.value), d = Ks(a.value);
    if (t) {
      var p = Py(l, f);
      t.value = Gd(t.value, f, p), r.value = Qs(r.value, p), a.value = Qs(a.value, p);
    }
    if (s) {
      var g = By(u, d);
      s.value = Zd(s.value, d, g), r.value = su(r.value, g), a.value = su(a.value, g);
    }
  } else if (a) {
    if (t) {
      var y = ra(a.value);
      a.value = a.value.substring(y.length);
    }
    if (s) {
      var y = ra(s.value);
      s.value = s.value.substring(y.length);
    }
  } else if (t && s) {
    var _ = ra(s.value), b = ra(r.value), m = Ks(r.value), h = Py(_, b);
    r.value = Qs(r.value, h);
    var x = By(Qs(_, h), m);
    r.value = su(r.value, x), s.value = Zd(s.value, _, x), t.value = Gd(t.value, _, _.slice(0, _.length - x.length));
  } else if (s) {
    var w = ra(s.value), T = Ks(r.value), C = Uy(T, w);
    r.value = su(r.value, C);
  } else if (t) {
    var D = Ks(t.value), E = ra(r.value), C = Uy(D, E);
    r.value = Qs(r.value, C);
  }
}
var Sw = (
  /** @class */
  (function(t) {
    c1(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      var s = new RegExp("(\\r?\\n)|[".concat(Tu, "]+|[^\\S\\n\\r]+|[^").concat(Tu, "]"), "ug");
      return a.match(s) || [];
    }, r;
  })(ua)
);
new Sw();
var xw = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), Ew = (
  /** @class */
  (function(t) {
    xw(r, t);
    function r() {
      var a = t !== null && t.apply(this, arguments) || this;
      return a.tokenize = d1, a;
    }
    return r.prototype.equals = function(a, s, l) {
      return l.ignoreWhitespace ? ((!l.newlineIsToken || !a.includes(`
`)) && (a = a.trim()), (!l.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : l.ignoreNewlineAtEof && !l.newlineIsToken && (a.endsWith(`
`) && (a = a.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), t.prototype.equals.call(this, a, s, l);
    }, r;
  })(ua)
);
new Ew();
function d1(t, r) {
  r.stripTrailingCr && (t = t.replace(/\r\n/g, `
`));
  var a = [], s = t.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var l = 0; l < s.length; l++) {
    var u = s[l];
    l % 2 && !r.newlineIsToken ? a[a.length - 1] += u : a.push(u);
  }
  return a;
}
var ww = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), Cw = (
  /** @class */
  (function(t) {
    ww(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ua)
);
new Cw();
var Aw = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), Nw = (
  /** @class */
  (function(t) {
    Aw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.split(/([{}:;,]|\s+)/);
    }, r;
  })(ua)
);
new Nw();
var Tw = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), Ow = (
  /** @class */
  (function(t) {
    Tw(r, t);
    function r() {
      var a = t !== null && t.apply(this, arguments) || this;
      return a.tokenize = d1, a;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(a, s) {
      var l = s.undefinedReplacement, u = s.stringifyReplacer, f = u === void 0 ? function(d, p) {
        return typeof p > "u" ? l : p;
      } : u;
      return typeof a == "string" ? a : JSON.stringify(Vd(a, null, null, f), null, "  ");
    }, r.prototype.equals = function(a, s, l) {
      return t.prototype.equals.call(this, a.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), l);
    }, r;
  })(ua)
);
new Ow();
function Vd(t, r, a, s, l) {
  r = r || [], a = a || [], s && (t = s(l === void 0 ? "" : l, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return a[u];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), a.push(f), u = 0; u < t.length; u += 1)
      f[u] = Vd(t[u], r, a, s, String(u));
    return r.pop(), a.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, a.push(f);
    var d = [], p;
    for (p in t)
      Object.prototype.hasOwnProperty.call(t, p) && d.push(p);
    for (d.sort(), u = 0; u < d.length; u += 1)
      p = d[u], f[p] = Vd(t[p], r, a, s, p);
    r.pop(), a.pop();
  } else
    f = t;
  return f;
}
var Dw = /* @__PURE__ */ (function() {
  var t = function(r, a) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
    }, t(r, a);
  };
  return function(r, a) {
    if (typeof a != "function" && a !== null)
      throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
    t(r, a);
    function s() {
      this.constructor = r;
    }
    r.prototype = a === null ? Object.create(a) : (s.prototype = a.prototype, new s());
  };
})(), Mw = (
  /** @class */
  (function(t) {
    Dw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.slice();
    }, r.prototype.join = function(a) {
      return a;
    }, r.prototype.removeEmpty = function(a) {
      return a;
    }, r;
  })(ua)
);
new Mw();
const kw = ({ originalContent: t, newContent: r, fieldName: a }) => {
  const s = G.useMemo(() => {
    const l = f1(t, r);
    let u = "", f = "";
    return l.forEach((d) => {
      const g = `<span style="${d.added ? "color: green; background-color: #e6ffed;" : d.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${d.value}</span>`;
      d.added || (u += g), d.removed || (f += g);
    }), { originalHtml: u, newHtml: f };
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ S.jsxs("h3", { children: [
      "Compare Changes for: ",
      a
    ] }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ S.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ S.jsx("h4", { children: "Loaded Character Content" }),
        /* @__PURE__ */ S.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ S.jsx("h4", { children: "Current Content" }),
        /* @__PURE__ */ S.jsx(
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
function te(t, r, a) {
  function s(d, p) {
    var g;
    Object.defineProperty(d, "_zod", {
      value: d._zod ?? {},
      enumerable: !1
    }), (g = d._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), d._zod.traits.add(t), r(d, p);
    for (const y in f.prototype)
      y in d || Object.defineProperty(d, y, { value: f.prototype[y].bind(d) });
    d._zod.constr = f, d._zod.def = p;
  }
  const l = a?.Parent ?? Object;
  class u extends l {
  }
  Object.defineProperty(u, "name", { value: t });
  function f(d) {
    var p;
    const g = a?.Parent ? new u() : this;
    s(g, d), (p = g._zod).deferred ?? (p.deferred = []);
    for (const y of g._zod.deferred)
      y();
    return g;
  }
  return Object.defineProperty(f, "init", { value: s }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (d) => a?.Parent && d instanceof a.Parent ? !0 : d?._zod?.traits?.has(t)
  }), Object.defineProperty(f, "name", { value: t }), f;
}
class Ui extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class h1 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const p1 = {};
function Pa(t) {
  return p1;
}
function m1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, l]) => r.indexOf(+s) === -1).map(([s, l]) => l);
}
function Yd(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function dh(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function hh(t) {
  return t == null;
}
function ph(t) {
  const r = t.startsWith("^") ? 1 : 0, a = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, a);
}
function jw(t, r) {
  const a = (t.toString().split(".")[1] || "").length, s = r.toString();
  let l = (s.split(".")[1] || "").length;
  if (l === 0 && /\d?e-\d?/.test(s)) {
    const p = s.match(/\d?e-(\d?)/);
    p?.[1] && (l = Number.parseInt(p[1]));
  }
  const u = a > l ? a : l, f = Number.parseInt(t.toFixed(u).replace(".", "")), d = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % d / 10 ** u;
}
const Hy = Symbol("evaluating");
function ht(t, r, a) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== Hy)
        return s === void 0 && (s = Hy, s = a()), s;
    },
    set(l) {
      Object.defineProperty(t, r, {
        value: l
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ua(t, r, a) {
  Object.defineProperty(t, r, {
    value: a,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Fa(...t) {
  const r = {};
  for (const a of t) {
    const s = Object.getOwnPropertyDescriptors(a);
    Object.assign(r, s);
  }
  return Object.defineProperties({}, r);
}
function qy(t) {
  return JSON.stringify(t);
}
const g1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Ou(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const Rw = dh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function lo(t) {
  if (Ou(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const a = r.prototype;
  return !(Ou(a) === !1 || Object.prototype.hasOwnProperty.call(a, "isPrototypeOf") === !1);
}
function v1(t) {
  return lo(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const zw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function zu(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ca(t, r, a) {
  const s = new t._zod.constr(r ?? t._zod.def);
  return (!r || a?.parent) && (s._zod.parent = t), s;
}
function we(t) {
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
function Lw(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const Iw = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Pw(t, r) {
  const a = t._zod.def, s = Fa(t._zod.def, {
    get shape() {
      const l = {};
      for (const u in r) {
        if (!(u in a.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (l[u] = a.shape[u]);
      }
      return Ua(this, "shape", l), l;
    },
    checks: []
  });
  return ca(t, s);
}
function Bw(t, r) {
  const a = t._zod.def, s = Fa(t._zod.def, {
    get shape() {
      const l = { ...t._zod.def.shape };
      for (const u in r) {
        if (!(u in a.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete l[u];
      }
      return Ua(this, "shape", l), l;
    },
    checks: []
  });
  return ca(t, s);
}
function Uw(t, r) {
  if (!lo(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const a = t._zod.def.checks;
  if (a && a.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const l = Fa(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape, ...r };
      return Ua(this, "shape", u), u;
    },
    checks: []
  });
  return ca(t, l);
}
function Fw(t, r) {
  if (!lo(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const a = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...r };
      return Ua(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return ca(t, a);
}
function Hw(t, r) {
  const a = Fa(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...r._zod.def.shape };
      return Ua(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ca(t, a);
}
function qw(t, r, a) {
  const s = Fa(r._zod.def, {
    get shape() {
      const l = r._zod.def.shape, u = { ...l };
      if (a)
        for (const f in a) {
          if (!(f in l))
            throw new Error(`Unrecognized key: "${f}"`);
          a[f] && (u[f] = t ? new t({
            type: "optional",
            innerType: l[f]
          }) : l[f]);
        }
      else
        for (const f in l)
          u[f] = t ? new t({
            type: "optional",
            innerType: l[f]
          }) : l[f];
      return Ua(this, "shape", u), u;
    },
    checks: []
  });
  return ca(r, s);
}
function Zw(t, r, a) {
  const s = Fa(r._zod.def, {
    get shape() {
      const l = r._zod.def.shape, u = { ...l };
      if (a)
        for (const f in a) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          a[f] && (u[f] = new t({
            type: "nonoptional",
            innerType: l[f]
          }));
        }
      else
        for (const f in l)
          u[f] = new t({
            type: "nonoptional",
            innerType: l[f]
          });
      return Ua(this, "shape", u), u;
    },
    checks: []
  });
  return ca(r, s);
}
function Pi(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = r; a < t.issues.length; a++)
    if (t.issues[a]?.continue !== !0)
      return !0;
  return !1;
}
function y1(t, r) {
  return r.map((a) => {
    var s;
    return (s = a).path ?? (s.path = []), a.path.unshift(t), a;
  });
}
function ou(t) {
  return typeof t == "string" ? t : t?.message;
}
function Ba(t, r, a) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const l = ou(t.inst?._zod.def?.error?.(t)) ?? ou(r?.error?.(t)) ?? ou(a.customError?.(t)) ?? ou(a.localeError?.(t)) ?? "Invalid input";
    s.message = l;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function mh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function uo(...t) {
  const [r, a, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: a,
    inst: s
  } : { ...r };
}
const b1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Yd, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, _1 = te("$ZodError", b1), S1 = te("$ZodError", b1, { Parent: Error });
function Gw(t, r = (a) => a.message) {
  const a = {}, s = [];
  for (const l of t.issues)
    l.path.length > 0 ? (a[l.path[0]] = a[l.path[0]] || [], a[l.path[0]].push(r(l))) : s.push(r(l));
  return { formErrors: s, fieldErrors: a };
}
function Vw(t, r = (a) => a.message) {
  const a = { _errors: [] }, s = (l) => {
    for (const u of l.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((f) => s({ issues: f }));
      else if (u.code === "invalid_key")
        s({ issues: u.issues });
      else if (u.code === "invalid_element")
        s({ issues: u.issues });
      else if (u.path.length === 0)
        a._errors.push(r(u));
      else {
        let f = a, d = 0;
        for (; d < u.path.length; ) {
          const p = u.path[d];
          d === u.path.length - 1 ? (f[p] = f[p] || { _errors: [] }, f[p]._errors.push(r(u))) : f[p] = f[p] || { _errors: [] }, f = f[p], d++;
        }
      }
  };
  return s(t), a;
}
const gh = (t) => (r, a, s, l) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: a, issues: [] }, u);
  if (f instanceof Promise)
    throw new Ui();
  if (f.issues.length) {
    const d = new (l?.Err ?? t)(f.issues.map((p) => Ba(p, u, Pa())));
    throw g1(d, l?.callee), d;
  }
  return f.value;
}, vh = (t) => async (r, a, s, l) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: a, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const d = new (l?.Err ?? t)(f.issues.map((p) => Ba(p, u, Pa())));
    throw g1(d, l?.callee), d;
  }
  return f.value;
}, Lu = (t) => (r, a, s) => {
  const l = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: a, issues: [] }, l);
  if (u instanceof Promise)
    throw new Ui();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? _1)(u.issues.map((f) => Ba(f, l, Pa())))
  } : { success: !0, data: u.value };
}, Yw = /* @__PURE__ */ Lu(S1), Iu = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: a, issues: [] }, l);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => Ba(f, l, Pa())))
  } : { success: !0, data: u.value };
}, Xw = /* @__PURE__ */ Iu(S1), $w = (t) => (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return gh(t)(r, a, l);
}, Qw = (t) => (r, a, s) => gh(t)(r, a, s), Kw = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return vh(t)(r, a, l);
}, Jw = (t) => async (r, a, s) => vh(t)(r, a, s), Ww = (t) => (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Lu(t)(r, a, l);
}, eC = (t) => (r, a, s) => Lu(t)(r, a, s), tC = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Iu(t)(r, a, l);
}, nC = (t) => async (r, a, s) => Iu(t)(r, a, s), rC = /^[cC][^\s-]{8,}$/, aC = /^[0-9a-z]+$/, iC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, sC = /^[0-9a-vA-V]{20}$/, oC = /^[A-Za-z0-9]{27}$/, lC = /^[a-zA-Z0-9_-]{21}$/, uC = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, cC = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Zy = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, fC = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, dC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function hC() {
  return new RegExp(dC, "u");
}
const pC = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, mC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, gC = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, vC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, yC = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, x1 = /^[A-Za-z0-9_-]*$/, bC = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, _C = /^\+(?:[0-9]){6,14}[0-9]$/, E1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", SC = /* @__PURE__ */ new RegExp(`^${E1}$`);
function w1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function xC(t) {
  return new RegExp(`^${w1(t)}$`);
}
function EC(t) {
  const r = w1({ precision: t.precision }), a = ["Z"];
  t.local && a.push(""), t.offset && a.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${a.join("|")})`;
  return new RegExp(`^${E1}T(?:${s})$`);
}
const wC = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, CC = /^-?\d+$/, AC = /^-?\d+(?:\.\d+)?/, NC = /^[^A-Z]*$/, TC = /^[^a-z]*$/, yn = /* @__PURE__ */ te("$ZodCheck", (t, r) => {
  var a;
  t._zod ?? (t._zod = {}), t._zod.def = r, (a = t._zod).onattach ?? (a.onattach = []);
}), C1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, A1 = /* @__PURE__ */ te("$ZodCheckLessThan", (t, r) => {
  yn.init(t, r);
  const a = C1[typeof r.value];
  t._zod.onattach.push((s) => {
    const l = s._zod.bag, u = (r.inclusive ? l.maximum : l.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < u && (r.inclusive ? l.maximum = r.value : l.exclusiveMaximum = r.value);
  }), t._zod.check = (s) => {
    (r.inclusive ? s.value <= r.value : s.value < r.value) || s.issues.push({
      origin: a,
      code: "too_big",
      maximum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), N1 = /* @__PURE__ */ te("$ZodCheckGreaterThan", (t, r) => {
  yn.init(t, r);
  const a = C1[typeof r.value];
  t._zod.onattach.push((s) => {
    const l = s._zod.bag, u = (r.inclusive ? l.minimum : l.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > u && (r.inclusive ? l.minimum = r.value : l.exclusiveMinimum = r.value);
  }), t._zod.check = (s) => {
    (r.inclusive ? s.value >= r.value : s.value > r.value) || s.issues.push({
      origin: a,
      code: "too_small",
      minimum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), OC = /* @__PURE__ */ te("$ZodCheckMultipleOf", (t, r) => {
  yn.init(t, r), t._zod.onattach.push((a) => {
    var s;
    (s = a._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (a) => {
    if (typeof a.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof a.value == "bigint" ? a.value % r.value === BigInt(0) : jw(a.value, r.value) === 0) || a.issues.push({
      origin: typeof a.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), DC = /* @__PURE__ */ te("$ZodCheckNumberFormat", (t, r) => {
  yn.init(t, r), r.format = r.format || "float64";
  const a = r.format?.includes("int"), s = a ? "int" : "number", [l, u] = Iw[r.format];
  t._zod.onattach.push((f) => {
    const d = f._zod.bag;
    d.format = r.format, d.minimum = l, d.maximum = u, a && (d.pattern = CC);
  }), t._zod.check = (f) => {
    const d = f.value;
    if (a) {
      if (!Number.isInteger(d)) {
        f.issues.push({
          expected: s,
          format: r.format,
          code: "invalid_type",
          continue: !1,
          input: d,
          inst: t
        });
        return;
      }
      if (!Number.isSafeInteger(d)) {
        d > 0 ? f.issues.push({
          input: d,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !r.abort
        }) : f.issues.push({
          input: d,
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
    d < l && f.issues.push({
      origin: "number",
      input: d,
      code: "too_small",
      minimum: l,
      inclusive: !0,
      inst: t,
      continue: !r.abort
    }), d > u && f.issues.push({
      origin: "number",
      input: d,
      code: "too_big",
      maximum: u,
      inst: t
    });
  };
}), MC = /* @__PURE__ */ te("$ZodCheckMaxLength", (t, r) => {
  var a;
  yn.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const l = s.value;
    return !hh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < l && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length <= r.maximum)
      return;
    const f = mh(l);
    s.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: l,
      inst: t,
      continue: !r.abort
    });
  };
}), kC = /* @__PURE__ */ te("$ZodCheckMinLength", (t, r) => {
  var a;
  yn.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const l = s.value;
    return !hh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > l && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length >= r.minimum)
      return;
    const f = mh(l);
    s.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: l,
      inst: t,
      continue: !r.abort
    });
  };
}), jC = /* @__PURE__ */ te("$ZodCheckLengthEquals", (t, r) => {
  var a;
  yn.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
    const l = s.value;
    return !hh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.minimum = r.length, l.maximum = r.length, l.length = r.length;
  }), t._zod.check = (s) => {
    const l = s.value, u = l.length;
    if (u === r.length)
      return;
    const f = mh(l), d = u > r.length;
    s.issues.push({
      origin: f,
      ...d ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Pu = /* @__PURE__ */ te("$ZodCheckStringFormat", (t, r) => {
  var a, s;
  yn.init(t, r), t._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.format = r.format, r.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r.pattern));
  }), r.pattern ? (a = t._zod).check ?? (a.check = (l) => {
    r.pattern.lastIndex = 0, !r.pattern.test(l.value) && l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: l.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: t,
      continue: !r.abort
    });
  }) : (s = t._zod).check ?? (s.check = () => {
  });
}), RC = /* @__PURE__ */ te("$ZodCheckRegex", (t, r) => {
  Pu.init(t, r), t._zod.check = (a) => {
    r.pattern.lastIndex = 0, !r.pattern.test(a.value) && a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: a.value,
      pattern: r.pattern.toString(),
      inst: t,
      continue: !r.abort
    });
  };
}), zC = /* @__PURE__ */ te("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = NC), Pu.init(t, r);
}), LC = /* @__PURE__ */ te("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = TC), Pu.init(t, r);
}), IC = /* @__PURE__ */ te("$ZodCheckIncludes", (t, r) => {
  yn.init(t, r);
  const a = zu(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${a}` : a);
  r.pattern = s, t._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (l) => {
    l.value.includes(r.includes, r.position) || l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: l.value,
      inst: t,
      continue: !r.abort
    });
  };
}), PC = /* @__PURE__ */ te("$ZodCheckStartsWith", (t, r) => {
  yn.init(t, r);
  const a = new RegExp(`^${zu(r.prefix)}.*`);
  r.pattern ?? (r.pattern = a), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(a);
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
}), BC = /* @__PURE__ */ te("$ZodCheckEndsWith", (t, r) => {
  yn.init(t, r);
  const a = new RegExp(`.*${zu(r.suffix)}$`);
  r.pattern ?? (r.pattern = a), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(a);
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
}), UC = /* @__PURE__ */ te("$ZodCheckOverwrite", (t, r) => {
  yn.init(t, r), t._zod.check = (a) => {
    a.value = r.tx(a.value);
  };
});
class FC {
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
`).filter((f) => f), l = Math.min(...s.map((f) => f.length - f.trimStart().length)), u = s.map((f) => f.slice(l)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of u)
      this.content.push(f);
  }
  compile() {
    const r = Function, a = this?.args, l = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new r(...a, l.join(`
`));
  }
}
const HC = {
  major: 4,
  minor: 1,
  patch: 12
}, jt = /* @__PURE__ */ te("$ZodType", (t, r) => {
  var a;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = HC;
  const s = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && s.unshift(t);
  for (const l of s)
    for (const u of l._zod.onattach)
      u(t);
  if (s.length === 0)
    (a = t._zod).deferred ?? (a.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const l = (f, d, p) => {
      let g = Pi(f), y;
      for (const _ of d) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(f))
            continue;
        } else if (g)
          continue;
        const b = f.issues.length, m = _._zod.check(f);
        if (m instanceof Promise && p?.async === !1)
          throw new Ui();
        if (y || m instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await m, f.issues.length !== b && (g || (g = Pi(f, b)));
          });
        else {
          if (f.issues.length === b)
            continue;
          g || (g = Pi(f, b));
        }
      }
      return y ? y.then(() => f) : f;
    }, u = (f, d, p) => {
      if (Pi(f))
        return f.aborted = !0, f;
      const g = l(d, s, p);
      if (g instanceof Promise) {
        if (p.async === !1)
          throw new Ui();
        return g.then((y) => t._zod.parse(y, p));
      }
      return t._zod.parse(g, p);
    };
    t._zod.run = (f, d) => {
      if (d.skipChecks)
        return t._zod.parse(f, d);
      if (d.direction === "backward") {
        const g = t._zod.parse({ value: f.value, issues: [] }, { ...d, skipChecks: !0 });
        return g instanceof Promise ? g.then((y) => u(y, f, d)) : u(g, f, d);
      }
      const p = t._zod.parse(f, d);
      if (p instanceof Promise) {
        if (d.async === !1)
          throw new Ui();
        return p.then((g) => l(g, s, d));
      }
      return l(p, s, d);
    };
  }
  t["~standard"] = {
    validate: (l) => {
      try {
        const u = Yw(t, l);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return Xw(t, l).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), yh = /* @__PURE__ */ te("$ZodString", (t, r) => {
  jt.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? wC(t._zod.bag), t._zod.parse = (a, s) => {
    if (r.coerce)
      try {
        a.value = String(a.value);
      } catch {
      }
    return typeof a.value == "string" || a.issues.push({
      expected: "string",
      code: "invalid_type",
      input: a.value,
      inst: t
    }), a;
  };
}), vt = /* @__PURE__ */ te("$ZodStringFormat", (t, r) => {
  Pu.init(t, r), yh.init(t, r);
}), qC = /* @__PURE__ */ te("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = cC), vt.init(t, r);
}), ZC = /* @__PURE__ */ te("$ZodUUID", (t, r) => {
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
    r.pattern ?? (r.pattern = Zy(s));
  } else
    r.pattern ?? (r.pattern = Zy());
  vt.init(t, r);
}), GC = /* @__PURE__ */ te("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = fC), vt.init(t, r);
}), VC = /* @__PURE__ */ te("$ZodURL", (t, r) => {
  vt.init(t, r), t._zod.check = (a) => {
    try {
      const s = a.value.trim(), l = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(l.hostname) || a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: bC.source,
        input: a.value,
        inst: t,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(l.protocol.endsWith(":") ? l.protocol.slice(0, -1) : l.protocol) || a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: a.value,
        inst: t,
        continue: !r.abort
      })), r.normalize ? a.value = l.href : a.value = s;
      return;
    } catch {
      a.issues.push({
        code: "invalid_format",
        format: "url",
        input: a.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), YC = /* @__PURE__ */ te("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = hC()), vt.init(t, r);
}), XC = /* @__PURE__ */ te("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = lC), vt.init(t, r);
}), $C = /* @__PURE__ */ te("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = rC), vt.init(t, r);
}), QC = /* @__PURE__ */ te("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = aC), vt.init(t, r);
}), KC = /* @__PURE__ */ te("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = iC), vt.init(t, r);
}), JC = /* @__PURE__ */ te("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = sC), vt.init(t, r);
}), WC = /* @__PURE__ */ te("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = oC), vt.init(t, r);
}), e3 = /* @__PURE__ */ te("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = EC(r)), vt.init(t, r);
}), t3 = /* @__PURE__ */ te("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = SC), vt.init(t, r);
}), n3 = /* @__PURE__ */ te("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = xC(r)), vt.init(t, r);
}), r3 = /* @__PURE__ */ te("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = uC), vt.init(t, r);
}), a3 = /* @__PURE__ */ te("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = pC), vt.init(t, r), t._zod.onattach.push((a) => {
    const s = a._zod.bag;
    s.format = "ipv4";
  });
}), i3 = /* @__PURE__ */ te("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = mC), vt.init(t, r), t._zod.onattach.push((a) => {
    const s = a._zod.bag;
    s.format = "ipv6";
  }), t._zod.check = (a) => {
    try {
      new URL(`http://[${a.value}]`);
    } catch {
      a.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: a.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), s3 = /* @__PURE__ */ te("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = gC), vt.init(t, r);
}), o3 = /* @__PURE__ */ te("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = vC), vt.init(t, r), t._zod.check = (a) => {
    const s = a.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [l, u] = s;
      if (!u)
        throw new Error();
      const f = Number(u);
      if (`${f}` !== u)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${l}]`);
    } catch {
      a.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: a.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
});
function T1(t) {
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
const l3 = /* @__PURE__ */ te("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = yC), vt.init(t, r), t._zod.onattach.push((a) => {
    a._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (a) => {
    T1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function u3(t) {
  if (!x1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), a = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return T1(a);
}
const c3 = /* @__PURE__ */ te("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = x1), vt.init(t, r), t._zod.onattach.push((a) => {
    a._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (a) => {
    u3(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), f3 = /* @__PURE__ */ te("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = _C), vt.init(t, r);
});
function d3(t, r = null) {
  try {
    const a = t.split(".");
    if (a.length !== 3)
      return !1;
    const [s] = a;
    if (!s)
      return !1;
    const l = JSON.parse(atob(s));
    return !("typ" in l && l?.typ !== "JWT" || !l.alg || r && (!("alg" in l) || l.alg !== r));
  } catch {
    return !1;
  }
}
const h3 = /* @__PURE__ */ te("$ZodJWT", (t, r) => {
  vt.init(t, r), t._zod.check = (a) => {
    d3(a.value, r.alg) || a.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), O1 = /* @__PURE__ */ te("$ZodNumber", (t, r) => {
  jt.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? AC, t._zod.parse = (a, s) => {
    if (r.coerce)
      try {
        a.value = Number(a.value);
      } catch {
      }
    const l = a.value;
    if (typeof l == "number" && !Number.isNaN(l) && Number.isFinite(l))
      return a;
    const u = typeof l == "number" ? Number.isNaN(l) ? "NaN" : Number.isFinite(l) ? void 0 : "Infinity" : void 0;
    return a.issues.push({
      expected: "number",
      code: "invalid_type",
      input: l,
      inst: t,
      ...u ? { received: u } : {}
    }), a;
  };
}), p3 = /* @__PURE__ */ te("$ZodNumber", (t, r) => {
  DC.init(t, r), O1.init(t, r);
}), m3 = /* @__PURE__ */ te("$ZodUnknown", (t, r) => {
  jt.init(t, r), t._zod.parse = (a) => a;
}), g3 = /* @__PURE__ */ te("$ZodNever", (t, r) => {
  jt.init(t, r), t._zod.parse = (a, s) => (a.issues.push({
    expected: "never",
    code: "invalid_type",
    input: a.value,
    inst: t
  }), a);
});
function Gy(t, r, a) {
  t.issues.length && r.issues.push(...y1(a, t.issues)), r.value[a] = t.value;
}
const v3 = /* @__PURE__ */ te("$ZodArray", (t, r) => {
  jt.init(t, r), t._zod.parse = (a, s) => {
    const l = a.value;
    if (!Array.isArray(l))
      return a.issues.push({
        expected: "array",
        code: "invalid_type",
        input: l,
        inst: t
      }), a;
    a.value = Array(l.length);
    const u = [];
    for (let f = 0; f < l.length; f++) {
      const d = l[f], p = r.element._zod.run({
        value: d,
        issues: []
      }, s);
      p instanceof Promise ? u.push(p.then((g) => Gy(g, a, f))) : Gy(p, a, f);
    }
    return u.length ? Promise.all(u).then(() => a) : a;
  };
});
function Du(t, r, a, s) {
  t.issues.length && r.issues.push(...y1(a, t.issues)), t.value === void 0 ? a in s && (r.value[a] = void 0) : r.value[a] = t.value;
}
function D1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const a = Lw(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(a)
  };
}
function M1(t, r, a, s, l, u) {
  const f = [], d = l.keySet, p = l.catchall._zod, g = p.def.type;
  for (const y of Object.keys(r)) {
    if (d.has(y))
      continue;
    if (g === "never") {
      f.push(y);
      continue;
    }
    const _ = p.run({ value: r[y], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((b) => Du(b, a, y, r))) : Du(_, a, y, r);
  }
  return f.length && a.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => a) : a;
}
const y3 = /* @__PURE__ */ te("$ZodObject", (t, r) => {
  if (jt.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const d = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const p = { ...d };
        return Object.defineProperty(r, "shape", {
          value: p
        }), p;
      }
    });
  }
  const s = dh(() => D1(r));
  ht(t._zod, "propValues", () => {
    const d = r.shape, p = {};
    for (const g in d) {
      const y = d[g]._zod;
      if (y.values) {
        p[g] ?? (p[g] = /* @__PURE__ */ new Set());
        for (const _ of y.values)
          p[g].add(_);
      }
    }
    return p;
  });
  const l = Ou, u = r.catchall;
  let f;
  t._zod.parse = (d, p) => {
    f ?? (f = s.value);
    const g = d.value;
    if (!l(g))
      return d.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: t
      }), d;
    d.value = {};
    const y = [], _ = f.shape;
    for (const b of f.keys) {
      const h = _[b]._zod.run({ value: g[b], issues: [] }, p);
      h instanceof Promise ? y.push(h.then((x) => Du(x, d, b, g))) : Du(h, d, b, g);
    }
    return u ? M1(y, g, d, p, s.value, t) : y.length ? Promise.all(y).then(() => d) : d;
  };
}), b3 = /* @__PURE__ */ te("$ZodObjectJIT", (t, r) => {
  y3.init(t, r);
  const a = t._zod.parse, s = dh(() => D1(r)), l = (b) => {
    const m = new FC(["shape", "payload", "ctx"]), h = s.value, x = (D) => {
      const E = qy(D);
      return `shape[${E}]._zod.run({ value: input[${E}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const w = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const D of h.keys)
      w[D] = `key_${T++}`;
    m.write("const newResult = {};");
    for (const D of h.keys) {
      const E = w[D], N = qy(D);
      m.write(`const ${E} = ${x(D)};`), m.write(`
        if (${E}.issues.length) {
          payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${N}, ...iss.path] : [${N}]
          })));
        }
        
        
        if (${E}.value === undefined) {
          if (${N} in input) {
            newResult[${N}] = undefined;
          }
        } else {
          newResult[${N}] = ${E}.value;
        }
        
      `);
    }
    m.write("payload.value = newResult;"), m.write("return payload;");
    const C = m.compile();
    return (D, E) => C(b, D, E);
  };
  let u;
  const f = Ou, d = !p1.jitless, g = d && Rw.value, y = r.catchall;
  let _;
  t._zod.parse = (b, m) => {
    _ ?? (_ = s.value);
    const h = b.value;
    return f(h) ? d && g && m?.async === !1 && m.jitless !== !0 ? (u || (u = l(r.shape)), b = u(b, m), y ? M1([], h, b, m, _, t) : b) : a(b, m) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: t
    }), b);
  };
});
function Vy(t, r, a, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const l = t.filter((u) => !Pi(u));
  return l.length === 1 ? (r.value = l[0].value, l[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: a,
    errors: t.map((u) => u.issues.map((f) => Ba(f, s, Pa())))
  }), r);
}
const _3 = /* @__PURE__ */ te("$ZodUnion", (t, r) => {
  jt.init(t, r), ht(t._zod, "optin", () => r.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), ht(t._zod, "optout", () => r.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), ht(t._zod, "values", () => {
    if (r.options.every((l) => l._zod.values))
      return new Set(r.options.flatMap((l) => Array.from(l._zod.values)));
  }), ht(t._zod, "pattern", () => {
    if (r.options.every((l) => l._zod.pattern)) {
      const l = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${l.map((u) => ph(u.source)).join("|")})$`);
    }
  });
  const a = r.options.length === 1, s = r.options[0]._zod.run;
  t._zod.parse = (l, u) => {
    if (a)
      return s(l, u);
    let f = !1;
    const d = [];
    for (const p of r.options) {
      const g = p._zod.run({
        value: l.value,
        issues: []
      }, u);
      if (g instanceof Promise)
        d.push(g), f = !0;
      else {
        if (g.issues.length === 0)
          return g;
        d.push(g);
      }
    }
    return f ? Promise.all(d).then((p) => Vy(p, l, t, u)) : Vy(d, l, t, u);
  };
}), S3 = /* @__PURE__ */ te("$ZodIntersection", (t, r) => {
  jt.init(t, r), t._zod.parse = (a, s) => {
    const l = a.value, u = r.left._zod.run({ value: l, issues: [] }, s), f = r.right._zod.run({ value: l, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([p, g]) => Yy(a, p, g)) : Yy(a, u, f);
  };
});
function Xd(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (lo(t) && lo(r)) {
    const a = Object.keys(r), s = Object.keys(t).filter((u) => a.indexOf(u) !== -1), l = { ...t, ...r };
    for (const u of s) {
      const f = Xd(t[u], r[u]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...f.mergeErrorPath]
        };
      l[u] = f.data;
    }
    return { valid: !0, data: l };
  }
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const a = [];
    for (let s = 0; s < t.length; s++) {
      const l = t[s], u = r[s], f = Xd(l, u);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...f.mergeErrorPath]
        };
      a.push(f.data);
    }
    return { valid: !0, data: a };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Yy(t, r, a) {
  if (r.issues.length && t.issues.push(...r.issues), a.issues.length && t.issues.push(...a.issues), Pi(t))
    return t;
  const s = Xd(r.value, a.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const x3 = /* @__PURE__ */ te("$ZodEnum", (t, r) => {
  jt.init(t, r);
  const a = m1(r.entries), s = new Set(a);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${a.filter((l) => zw.has(typeof l)).map((l) => typeof l == "string" ? zu(l) : l.toString()).join("|")})$`), t._zod.parse = (l, u) => {
    const f = l.value;
    return s.has(f) || l.issues.push({
      code: "invalid_value",
      values: a,
      input: f,
      inst: t
    }), l;
  };
}), E3 = /* @__PURE__ */ te("$ZodTransform", (t, r) => {
  jt.init(t, r), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      throw new h1(t.constructor.name);
    const l = r.transform(a.value, a);
    if (s.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((f) => (a.value = f, a));
    if (l instanceof Promise)
      throw new Ui();
    return a.value = l, a;
  };
});
function Xy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const w3 = /* @__PURE__ */ te("$ZodOptional", (t, r) => {
  jt.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", ht(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), ht(t._zod, "pattern", () => {
    const a = r.innerType._zod.pattern;
    return a ? new RegExp(`^(${ph(a.source)})?$`) : void 0;
  }), t._zod.parse = (a, s) => {
    if (r.innerType._zod.optin === "optional") {
      const l = r.innerType._zod.run(a, s);
      return l instanceof Promise ? l.then((u) => Xy(u, a.value)) : Xy(l, a.value);
    }
    return a.value === void 0 ? a : r.innerType._zod.run(a, s);
  };
}), C3 = /* @__PURE__ */ te("$ZodNullable", (t, r) => {
  jt.init(t, r), ht(t._zod, "optin", () => r.innerType._zod.optin), ht(t._zod, "optout", () => r.innerType._zod.optout), ht(t._zod, "pattern", () => {
    const a = r.innerType._zod.pattern;
    return a ? new RegExp(`^(${ph(a.source)}|null)$`) : void 0;
  }), ht(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (a, s) => a.value === null ? a : r.innerType._zod.run(a, s);
}), A3 = /* @__PURE__ */ te("$ZodDefault", (t, r) => {
  jt.init(t, r), t._zod.optin = "optional", ht(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    if (a.value === void 0)
      return a.value = r.defaultValue, a;
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => $y(u, r)) : $y(l, r);
  };
});
function $y(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const N3 = /* @__PURE__ */ te("$ZodPrefault", (t, r) => {
  jt.init(t, r), t._zod.optin = "optional", ht(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => (s.direction === "backward" || a.value === void 0 && (a.value = r.defaultValue), r.innerType._zod.run(a, s));
}), T3 = /* @__PURE__ */ te("$ZodNonOptional", (t, r) => {
  jt.init(t, r), ht(t._zod, "values", () => {
    const a = r.innerType._zod.values;
    return a ? new Set([...a].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (a, s) => {
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => Qy(u, t)) : Qy(l, t);
  };
});
function Qy(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const O3 = /* @__PURE__ */ te("$ZodCatch", (t, r) => {
  jt.init(t, r), ht(t._zod, "optin", () => r.innerType._zod.optin), ht(t._zod, "optout", () => r.innerType._zod.optout), ht(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => (a.value = u.value, u.issues.length && (a.value = r.catchValue({
      ...a,
      error: {
        issues: u.issues.map((f) => Ba(f, s, Pa()))
      },
      input: a.value
    }), a.issues = []), a)) : (a.value = l.value, l.issues.length && (a.value = r.catchValue({
      ...a,
      error: {
        issues: l.issues.map((u) => Ba(u, s, Pa()))
      },
      input: a.value
    }), a.issues = []), a);
  };
}), D3 = /* @__PURE__ */ te("$ZodPipe", (t, r) => {
  jt.init(t, r), ht(t._zod, "values", () => r.in._zod.values), ht(t._zod, "optin", () => r.in._zod.optin), ht(t._zod, "optout", () => r.out._zod.optout), ht(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (a, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(a, s);
      return u instanceof Promise ? u.then((f) => lu(f, r.in, s)) : lu(u, r.in, s);
    }
    const l = r.in._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => lu(u, r.out, s)) : lu(l, r.out, s);
  };
});
function lu(t, r, a) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, a);
}
const M3 = /* @__PURE__ */ te("$ZodReadonly", (t, r) => {
  jt.init(t, r), ht(t._zod, "propValues", () => r.innerType._zod.propValues), ht(t._zod, "values", () => r.innerType._zod.values), ht(t._zod, "optin", () => r.innerType._zod.optin), ht(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then(Ky) : Ky(l);
  };
});
function Ky(t) {
  return t.value = Object.freeze(t.value), t;
}
const k3 = /* @__PURE__ */ te("$ZodCustom", (t, r) => {
  yn.init(t, r), jt.init(t, r), t._zod.parse = (a, s) => a, t._zod.check = (a) => {
    const s = a.value, l = r.fn(s);
    if (l instanceof Promise)
      return l.then((u) => Jy(u, a, s, t));
    Jy(l, a, s, t);
  };
});
function Jy(t, r, a, s) {
  if (!t) {
    const l = {
      code: "custom",
      input: a,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (l.params = s._zod.def.params), r.issues.push(uo(l));
  }
}
class k1 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...a) {
    const s = a[0];
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
    const a = this._map.get(r);
    return a && typeof a == "object" && "id" in a && this._idmap.delete(a.id), this._map.delete(r), this;
  }
  get(r) {
    const a = r._zod.parent;
    if (a) {
      const s = { ...this.get(a) ?? {} };
      delete s.id;
      const l = { ...s, ...this._map.get(r) };
      return Object.keys(l).length ? l : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function j3() {
  return new k1();
}
const to = /* @__PURE__ */ j3();
function R3(t, r) {
  return new t({
    type: "string",
    ...we(r)
  });
}
function z3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function Wy(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function L3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function I3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...we(r)
  });
}
function P3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...we(r)
  });
}
function B3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...we(r)
  });
}
function U3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function F3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function H3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function q3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function Z3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function G3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function V3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function Y3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function X3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function $3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function Q3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function K3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function J3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function W3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function e4(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function t4(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function n4(t, r) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...we(r)
  });
}
function r4(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...we(r)
  });
}
function a4(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...we(r)
  });
}
function i4(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...we(r)
  });
}
function s4(t, r) {
  return new t({
    type: "number",
    checks: [],
    ...we(r)
  });
}
function o4(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...we(r)
  });
}
function l4(t) {
  return new t({
    type: "unknown"
  });
}
function u4(t, r) {
  return new t({
    type: "never",
    ...we(r)
  });
}
function e0(t, r) {
  return new A1({
    check: "less_than",
    ...we(r),
    value: t,
    inclusive: !1
  });
}
function wd(t, r) {
  return new A1({
    check: "less_than",
    ...we(r),
    value: t,
    inclusive: !0
  });
}
function t0(t, r) {
  return new N1({
    check: "greater_than",
    ...we(r),
    value: t,
    inclusive: !1
  });
}
function Cd(t, r) {
  return new N1({
    check: "greater_than",
    ...we(r),
    value: t,
    inclusive: !0
  });
}
function n0(t, r) {
  return new OC({
    check: "multiple_of",
    ...we(r),
    value: t
  });
}
function j1(t, r) {
  return new MC({
    check: "max_length",
    ...we(r),
    maximum: t
  });
}
function Mu(t, r) {
  return new kC({
    check: "min_length",
    ...we(r),
    minimum: t
  });
}
function R1(t, r) {
  return new jC({
    check: "length_equals",
    ...we(r),
    length: t
  });
}
function c4(t, r) {
  return new RC({
    check: "string_format",
    format: "regex",
    ...we(r),
    pattern: t
  });
}
function f4(t) {
  return new zC({
    check: "string_format",
    format: "lowercase",
    ...we(t)
  });
}
function d4(t) {
  return new LC({
    check: "string_format",
    format: "uppercase",
    ...we(t)
  });
}
function h4(t, r) {
  return new IC({
    check: "string_format",
    format: "includes",
    ...we(r),
    includes: t
  });
}
function p4(t, r) {
  return new PC({
    check: "string_format",
    format: "starts_with",
    ...we(r),
    prefix: t
  });
}
function m4(t, r) {
  return new BC({
    check: "string_format",
    format: "ends_with",
    ...we(r),
    suffix: t
  });
}
function mo(t) {
  return new UC({
    check: "overwrite",
    tx: t
  });
}
function g4(t) {
  return mo((r) => r.normalize(t));
}
function v4() {
  return mo((t) => t.trim());
}
function y4() {
  return mo((t) => t.toLowerCase());
}
function b4() {
  return mo((t) => t.toUpperCase());
}
function _4(t, r, a) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...we(a)
  });
}
function S4(t, r, a) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...we(a)
  });
}
function x4(t) {
  const r = E4((a) => (a.addIssue = (s) => {
    if (typeof s == "string")
      a.issues.push(uo(s, a.value, r._zod.def));
    else {
      const l = s;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = a.value), l.inst ?? (l.inst = r), l.continue ?? (l.continue = !r._zod.def.abort), a.issues.push(uo(l));
    }
  }, t(a.value, a)));
  return r;
}
function E4(t, r) {
  const a = new yn({
    check: "custom",
    ...we(r)
  });
  return a._zod.check = t, a;
}
class r0 {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? to, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, a = { path: [], schemaPath: [] }) {
    var s;
    const l = r._zod.def, u = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, f = this.seen.get(r);
    if (f)
      return f.count++, a.schemaPath.includes(r) && (f.cycle = a.path), f.schema;
    const d = { schema: {}, count: 1, cycle: void 0, path: a.path };
    this.seen.set(r, d);
    const p = r._zod.toJSONSchema?.();
    if (p)
      d.schema = p;
    else {
      const _ = {
        ...a,
        schemaPath: [...a.schemaPath, r],
        path: a.path
      }, b = r._zod.parent;
      if (b)
        d.ref = b, this.process(b, _), this.seen.get(b).isParent = !0;
      else {
        const m = d.schema;
        switch (l.type) {
          case "string": {
            const h = m;
            h.type = "string";
            const { minimum: x, maximum: w, format: T, patterns: C, contentEncoding: D } = r._zod.bag;
            if (typeof x == "number" && (h.minLength = x), typeof w == "number" && (h.maxLength = w), T && (h.format = u[T] ?? T, h.format === "" && delete h.format), D && (h.contentEncoding = D), C && C.size > 0) {
              const E = [...C];
              E.length === 1 ? h.pattern = E[0].source : E.length > 1 && (d.schema.allOf = [
                ...E.map((N) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: N.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = m, { minimum: x, maximum: w, format: T, multipleOf: C, exclusiveMaximum: D, exclusiveMinimum: E } = r._zod.bag;
            typeof T == "string" && T.includes("int") ? h.type = "integer" : h.type = "number", typeof E == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = E, h.exclusiveMinimum = !0) : h.exclusiveMinimum = E), typeof x == "number" && (h.minimum = x, typeof E == "number" && this.target !== "draft-4" && (E >= x ? delete h.minimum : delete h.exclusiveMinimum)), typeof D == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = D, h.exclusiveMaximum = !0) : h.exclusiveMaximum = D), typeof w == "number" && (h.maximum = w, typeof D == "number" && this.target !== "draft-4" && (D <= w ? delete h.maximum : delete h.exclusiveMaximum)), typeof C == "number" && (h.multipleOf = C);
            break;
          }
          case "boolean": {
            const h = m;
            h.type = "boolean";
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
            this.target === "openapi-3.0" ? (m.type = "string", m.nullable = !0, m.enum = [null]) : m.type = "null";
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
            m.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const h = m, { minimum: x, maximum: w } = r._zod.bag;
            typeof x == "number" && (h.minItems = x), typeof w == "number" && (h.maxItems = w), h.type = "array", h.items = this.process(l.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const h = m;
            h.type = "object", h.properties = {};
            const x = l.shape;
            for (const C in x)
              h.properties[C] = this.process(x[C], {
                ..._,
                path: [..._.path, "properties", C]
              });
            const w = new Set(Object.keys(x)), T = new Set([...w].filter((C) => {
              const D = l.shape[C]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            T.size > 0 && (h.required = Array.from(T)), l.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : l.catchall ? l.catchall && (h.additionalProperties = this.process(l.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = m, x = l.options.map((w, T) => this.process(w, {
              ..._,
              path: [..._.path, "anyOf", T]
            }));
            h.anyOf = x;
            break;
          }
          case "intersection": {
            const h = m, x = this.process(l.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), w = this.process(l.right, {
              ..._,
              path: [..._.path, "allOf", 1]
            }), T = (D) => "allOf" in D && Object.keys(D).length === 1, C = [
              ...T(x) ? x.allOf : [x],
              ...T(w) ? w.allOf : [w]
            ];
            h.allOf = C;
            break;
          }
          case "tuple": {
            const h = m;
            h.type = "array";
            const x = this.target === "draft-2020-12" ? "prefixItems" : "items", w = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", T = l.items.map((N, M) => this.process(N, {
              ..._,
              path: [..._.path, x, M]
            })), C = l.rest ? this.process(l.rest, {
              ..._,
              path: [..._.path, w, ...this.target === "openapi-3.0" ? [l.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = T, C && (h.items = C)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: T
            }, C && h.items.anyOf.push(C), h.minItems = T.length, C || (h.maxItems = T.length)) : (h.items = T, C && (h.additionalItems = C));
            const { minimum: D, maximum: E } = r._zod.bag;
            typeof D == "number" && (h.minItems = D), typeof E == "number" && (h.maxItems = E);
            break;
          }
          case "record": {
            const h = m;
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(l.keyType, {
              ..._,
              path: [..._.path, "propertyNames"]
            })), h.additionalProperties = this.process(l.valueType, {
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
            const h = m, x = m1(l.entries);
            x.every((w) => typeof w == "number") && (h.type = "number"), x.every((w) => typeof w == "string") && (h.type = "string"), h.enum = x;
            break;
          }
          case "literal": {
            const h = m, x = [];
            for (const w of l.values)
              if (w === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof w == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                x.push(Number(w));
              } else
                x.push(w);
            if (x.length !== 0) if (x.length === 1) {
              const w = x[0];
              h.type = w === null ? "null" : typeof w, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [w] : h.const = w;
            } else
              x.every((w) => typeof w == "number") && (h.type = "number"), x.every((w) => typeof w == "string") && (h.type = "string"), x.every((w) => typeof w == "boolean") && (h.type = "string"), x.every((w) => w === null) && (h.type = "null"), h.enum = x;
            break;
          }
          case "file": {
            const h = m, x = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: w, maximum: T, mime: C } = r._zod.bag;
            w !== void 0 && (x.minLength = w), T !== void 0 && (x.maxLength = T), C ? C.length === 1 ? (x.contentMediaType = C[0], Object.assign(h, x)) : h.anyOf = C.map((D) => ({ ...x, contentMediaType: D })) : Object.assign(h, x);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(l.innerType, _);
            this.target === "openapi-3.0" ? (d.ref = l.innerType, m.nullable = !0) : m.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(l.innerType, _), d.ref = l.innerType;
            break;
          }
          case "success": {
            const h = m;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(l.innerType, _), d.ref = l.innerType, m.default = JSON.parse(JSON.stringify(l.defaultValue));
            break;
          }
          case "prefault": {
            this.process(l.innerType, _), d.ref = l.innerType, this.io === "input" && (m._prefault = JSON.parse(JSON.stringify(l.defaultValue)));
            break;
          }
          case "catch": {
            this.process(l.innerType, _), d.ref = l.innerType;
            let h;
            try {
              h = l.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            m.default = h;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const h = m, x = r._zod.pattern;
            if (!x)
              throw new Error("Pattern not found in template literal");
            h.type = "string", h.pattern = x.source;
            break;
          }
          case "pipe": {
            const h = this.io === "input" ? l.in._zod.def.type === "transform" ? l.out : l.in : l.out;
            this.process(h, _), d.ref = h;
            break;
          }
          case "readonly": {
            this.process(l.innerType, _), d.ref = l.innerType, m.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(l.innerType, _), d.ref = l.innerType;
            break;
          }
          case "optional": {
            this.process(l.innerType, _), d.ref = l.innerType;
            break;
          }
          case "lazy": {
            const h = r._zod.innerType;
            this.process(h, _), d.ref = h;
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
    const g = this.metadataRegistry.get(r);
    return g && Object.assign(d.schema, g), this.io === "input" && Lt(r) && (delete d.schema.examples, delete d.schema.default), this.io === "input" && d.schema._prefault && ((s = d.schema).default ?? (s.default = d.schema._prefault)), delete d.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, a) {
    const s = {
      cycles: a?.cycles ?? "ref",
      reused: a?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: a?.external ?? void 0
    }, l = this.seen.get(r);
    if (!l)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const u = (y) => {
      const _ = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const x = s.external.registry.get(y[0])?.id, w = s.external.uri ?? ((C) => C);
        if (x)
          return { ref: w(x) };
        const T = y[1].defId ?? y[1].schema.id ?? `schema${this.counter++}`;
        return y[1].defId = T, { defId: T, ref: `${w("__shared")}#/${_}/${T}` };
      }
      if (y[1] === l)
        return { ref: "#" };
      const m = `#/${_}/`, h = y[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: m + h };
    }, f = (y) => {
      if (y[1].schema.$ref)
        return;
      const _ = y[1], { ref: b, defId: m } = u(y);
      _.def = { ..._.schema }, m && (_.defId = m);
      const h = _.schema;
      for (const x in h)
        delete h[x];
      h.$ref = b;
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
        const m = s.external.registry.get(y[0])?.id;
        if (r !== y[0] && m) {
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
    const d = (y, _) => {
      const b = this.seen.get(y), m = b.def ?? b.schema, h = { ...m };
      if (b.ref === null)
        return;
      const x = b.ref;
      if (b.ref = null, x) {
        d(x, _);
        const w = this.seen.get(x).schema;
        w.$ref && (_.target === "draft-7" || _.target === "draft-4" || _.target === "openapi-3.0") ? (m.allOf = m.allOf ?? [], m.allOf.push(w)) : (Object.assign(m, w), Object.assign(m, h));
      }
      b.isParent || this.override({
        zodSchema: y,
        jsonSchema: m,
        path: b.path ?? []
      });
    };
    for (const y of [...this.seen.entries()].reverse())
      d(y[0], { target: this.target });
    const p = {};
    if (this.target === "draft-2020-12" ? p.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? p.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? p.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const y = s.external.registry.get(r)?.id;
      if (!y)
        throw new Error("Schema is missing an `id` property");
      p.$id = s.external.uri(y);
    }
    Object.assign(p, l.def);
    const g = s.external?.defs ?? {};
    for (const y of this.seen.entries()) {
      const _ = y[1];
      _.def && _.defId && (g[_.defId] = _.def);
    }
    s.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? p.$defs = g : p.definitions = g);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function w4(t, r) {
  if (t instanceof k1) {
    const s = new r0(r), l = {};
    for (const d of t._idmap.entries()) {
      const [p, g] = d;
      s.process(g);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: l
    };
    for (const d of t._idmap.entries()) {
      const [p, g] = d;
      u[p] = s.emit(g, {
        ...r,
        external: f
      });
    }
    if (Object.keys(l).length > 0) {
      const d = s.target === "draft-2020-12" ? "$defs" : "definitions";
      u.__shared = {
        [d]: l
      };
    }
    return { schemas: u };
  }
  const a = new r0(r);
  return a.process(t), a.emit(t, r);
}
function Lt(t, r) {
  const a = r ?? { seen: /* @__PURE__ */ new Set() };
  if (a.seen.has(t))
    return !1;
  a.seen.add(t);
  const l = t._zod.def;
  switch (l.type) {
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
      return Lt(l.element, a);
    case "object": {
      for (const u in l.shape)
        if (Lt(l.shape[u], a))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of l.options)
        if (Lt(u, a))
          return !0;
      return !1;
    }
    case "intersection":
      return Lt(l.left, a) || Lt(l.right, a);
    case "tuple": {
      for (const u of l.items)
        if (Lt(u, a))
          return !0;
      return !!(l.rest && Lt(l.rest, a));
    }
    case "record":
      return Lt(l.keyType, a) || Lt(l.valueType, a);
    case "map":
      return Lt(l.keyType, a) || Lt(l.valueType, a);
    case "set":
      return Lt(l.valueType, a);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return Lt(l.innerType, a);
    case "lazy":
      return Lt(l.getter(), a);
    case "default":
      return Lt(l.innerType, a);
    case "prefault":
      return Lt(l.innerType, a);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return Lt(l.in, a) || Lt(l.out, a);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${l.type}`);
}
const C4 = /* @__PURE__ */ te("ZodISODateTime", (t, r) => {
  e3.init(t, r), St.init(t, r);
});
function A4(t) {
  return n4(C4, t);
}
const N4 = /* @__PURE__ */ te("ZodISODate", (t, r) => {
  t3.init(t, r), St.init(t, r);
});
function T4(t) {
  return r4(N4, t);
}
const O4 = /* @__PURE__ */ te("ZodISOTime", (t, r) => {
  n3.init(t, r), St.init(t, r);
});
function D4(t) {
  return a4(O4, t);
}
const M4 = /* @__PURE__ */ te("ZodISODuration", (t, r) => {
  r3.init(t, r), St.init(t, r);
});
function k4(t) {
  return i4(M4, t);
}
const j4 = (t, r) => {
  _1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (a) => Vw(t, a)
      // enumerable: false,
    },
    flatten: {
      value: (a) => Gw(t, a)
      // enumerable: false,
    },
    addIssue: {
      value: (a) => {
        t.issues.push(a), t.message = JSON.stringify(t.issues, Yd, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (a) => {
        t.issues.push(...a), t.message = JSON.stringify(t.issues, Yd, 2);
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
}, Zn = te("ZodError", j4, {
  Parent: Error
}), R4 = /* @__PURE__ */ gh(Zn), z4 = /* @__PURE__ */ vh(Zn), L4 = /* @__PURE__ */ Lu(Zn), I4 = /* @__PURE__ */ Iu(Zn), P4 = /* @__PURE__ */ $w(Zn), B4 = /* @__PURE__ */ Qw(Zn), U4 = /* @__PURE__ */ Kw(Zn), F4 = /* @__PURE__ */ Jw(Zn), H4 = /* @__PURE__ */ Ww(Zn), q4 = /* @__PURE__ */ eC(Zn), Z4 = /* @__PURE__ */ tC(Zn), G4 = /* @__PURE__ */ nC(Zn), It = /* @__PURE__ */ te("ZodType", (t, r) => (jt.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...a) => t.clone(Fa(r, {
  checks: [
    ...r.checks ?? [],
    ...a.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (a, s) => ca(t, a, s), t.brand = () => t, t.register = ((a, s) => (a.add(t, s), t)), t.parse = (a, s) => R4(t, a, s, { callee: t.parse }), t.safeParse = (a, s) => L4(t, a, s), t.parseAsync = async (a, s) => z4(t, a, s, { callee: t.parseAsync }), t.safeParseAsync = async (a, s) => I4(t, a, s), t.spa = t.safeParseAsync, t.encode = (a, s) => P4(t, a, s), t.decode = (a, s) => B4(t, a, s), t.encodeAsync = async (a, s) => U4(t, a, s), t.decodeAsync = async (a, s) => F4(t, a, s), t.safeEncode = (a, s) => H4(t, a, s), t.safeDecode = (a, s) => q4(t, a, s), t.safeEncodeAsync = async (a, s) => Z4(t, a, s), t.safeDecodeAsync = async (a, s) => G4(t, a, s), t.refine = (a, s) => t.check(RA(a, s)), t.superRefine = (a) => t.check(zA(a)), t.overwrite = (a) => t.check(mo(a)), t.optional = () => o0(t), t.nullable = () => l0(t), t.nullish = () => o0(l0(t)), t.nonoptional = (a) => NA(t, a), t.array = () => sn(t), t.or = (a) => vA([t, a]), t.and = (a) => bA(t, a), t.transform = (a) => u0(t, SA(a)), t.default = (a) => wA(t, a), t.prefault = (a) => AA(t, a), t.catch = (a) => OA(t, a), t.pipe = (a) => u0(t, a), t.readonly = () => kA(t), t.describe = (a) => {
  const s = t.clone();
  return to.add(s, { description: a }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return to.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...a) => {
  if (a.length === 0)
    return to.get(t);
  const s = t.clone();
  return to.add(s, a[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), z1 = /* @__PURE__ */ te("_ZodString", (t, r) => {
  yh.init(t, r), It.init(t, r);
  const a = t._zod.bag;
  t.format = a.format ?? null, t.minLength = a.minimum ?? null, t.maxLength = a.maximum ?? null, t.regex = (...s) => t.check(c4(...s)), t.includes = (...s) => t.check(h4(...s)), t.startsWith = (...s) => t.check(p4(...s)), t.endsWith = (...s) => t.check(m4(...s)), t.min = (...s) => t.check(Mu(...s)), t.max = (...s) => t.check(j1(...s)), t.length = (...s) => t.check(R1(...s)), t.nonempty = (...s) => t.check(Mu(1, ...s)), t.lowercase = (s) => t.check(f4(s)), t.uppercase = (s) => t.check(d4(s)), t.trim = () => t.check(v4()), t.normalize = (...s) => t.check(g4(...s)), t.toLowerCase = () => t.check(y4()), t.toUpperCase = () => t.check(b4());
}), V4 = /* @__PURE__ */ te("ZodString", (t, r) => {
  yh.init(t, r), z1.init(t, r), t.email = (a) => t.check(z3(Y4, a)), t.url = (a) => t.check(U3(X4, a)), t.jwt = (a) => t.check(t4(uA, a)), t.emoji = (a) => t.check(F3($4, a)), t.guid = (a) => t.check(Wy(a0, a)), t.uuid = (a) => t.check(L3(uu, a)), t.uuidv4 = (a) => t.check(I3(uu, a)), t.uuidv6 = (a) => t.check(P3(uu, a)), t.uuidv7 = (a) => t.check(B3(uu, a)), t.nanoid = (a) => t.check(H3(Q4, a)), t.guid = (a) => t.check(Wy(a0, a)), t.cuid = (a) => t.check(q3(K4, a)), t.cuid2 = (a) => t.check(Z3(J4, a)), t.ulid = (a) => t.check(G3(W4, a)), t.base64 = (a) => t.check(J3(sA, a)), t.base64url = (a) => t.check(W3(oA, a)), t.xid = (a) => t.check(V3(eA, a)), t.ksuid = (a) => t.check(Y3(tA, a)), t.ipv4 = (a) => t.check(X3(nA, a)), t.ipv6 = (a) => t.check($3(rA, a)), t.cidrv4 = (a) => t.check(Q3(aA, a)), t.cidrv6 = (a) => t.check(K3(iA, a)), t.e164 = (a) => t.check(e4(lA, a)), t.datetime = (a) => t.check(A4(a)), t.date = (a) => t.check(T4(a)), t.time = (a) => t.check(D4(a)), t.duration = (a) => t.check(k4(a));
});
function Ht(t) {
  return R3(V4, t);
}
const St = /* @__PURE__ */ te("ZodStringFormat", (t, r) => {
  vt.init(t, r), z1.init(t, r);
}), Y4 = /* @__PURE__ */ te("ZodEmail", (t, r) => {
  GC.init(t, r), St.init(t, r);
}), a0 = /* @__PURE__ */ te("ZodGUID", (t, r) => {
  qC.init(t, r), St.init(t, r);
}), uu = /* @__PURE__ */ te("ZodUUID", (t, r) => {
  ZC.init(t, r), St.init(t, r);
}), X4 = /* @__PURE__ */ te("ZodURL", (t, r) => {
  VC.init(t, r), St.init(t, r);
}), $4 = /* @__PURE__ */ te("ZodEmoji", (t, r) => {
  YC.init(t, r), St.init(t, r);
}), Q4 = /* @__PURE__ */ te("ZodNanoID", (t, r) => {
  XC.init(t, r), St.init(t, r);
}), K4 = /* @__PURE__ */ te("ZodCUID", (t, r) => {
  $C.init(t, r), St.init(t, r);
}), J4 = /* @__PURE__ */ te("ZodCUID2", (t, r) => {
  QC.init(t, r), St.init(t, r);
}), W4 = /* @__PURE__ */ te("ZodULID", (t, r) => {
  KC.init(t, r), St.init(t, r);
}), eA = /* @__PURE__ */ te("ZodXID", (t, r) => {
  JC.init(t, r), St.init(t, r);
}), tA = /* @__PURE__ */ te("ZodKSUID", (t, r) => {
  WC.init(t, r), St.init(t, r);
}), nA = /* @__PURE__ */ te("ZodIPv4", (t, r) => {
  a3.init(t, r), St.init(t, r);
}), rA = /* @__PURE__ */ te("ZodIPv6", (t, r) => {
  i3.init(t, r), St.init(t, r);
}), aA = /* @__PURE__ */ te("ZodCIDRv4", (t, r) => {
  s3.init(t, r), St.init(t, r);
}), iA = /* @__PURE__ */ te("ZodCIDRv6", (t, r) => {
  o3.init(t, r), St.init(t, r);
}), sA = /* @__PURE__ */ te("ZodBase64", (t, r) => {
  l3.init(t, r), St.init(t, r);
}), oA = /* @__PURE__ */ te("ZodBase64URL", (t, r) => {
  c3.init(t, r), St.init(t, r);
}), lA = /* @__PURE__ */ te("ZodE164", (t, r) => {
  f3.init(t, r), St.init(t, r);
}), uA = /* @__PURE__ */ te("ZodJWT", (t, r) => {
  h3.init(t, r), St.init(t, r);
}), L1 = /* @__PURE__ */ te("ZodNumber", (t, r) => {
  O1.init(t, r), It.init(t, r), t.gt = (s, l) => t.check(t0(s, l)), t.gte = (s, l) => t.check(Cd(s, l)), t.min = (s, l) => t.check(Cd(s, l)), t.lt = (s, l) => t.check(e0(s, l)), t.lte = (s, l) => t.check(wd(s, l)), t.max = (s, l) => t.check(wd(s, l)), t.int = (s) => t.check(i0(s)), t.safe = (s) => t.check(i0(s)), t.positive = (s) => t.check(t0(0, s)), t.nonnegative = (s) => t.check(Cd(0, s)), t.negative = (s) => t.check(e0(0, s)), t.nonpositive = (s) => t.check(wd(0, s)), t.multipleOf = (s, l) => t.check(n0(s, l)), t.step = (s, l) => t.check(n0(s, l)), t.finite = () => t;
  const a = t._zod.bag;
  t.minValue = Math.max(a.minimum ?? Number.NEGATIVE_INFINITY, a.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(a.maximum ?? Number.POSITIVE_INFINITY, a.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (a.format ?? "").includes("int") || Number.isSafeInteger(a.multipleOf ?? 0.5), t.isFinite = !0, t.format = a.format ?? null;
});
function co(t) {
  return s4(L1, t);
}
const cA = /* @__PURE__ */ te("ZodNumberFormat", (t, r) => {
  p3.init(t, r), L1.init(t, r);
});
function i0(t) {
  return o4(cA, t);
}
const fA = /* @__PURE__ */ te("ZodUnknown", (t, r) => {
  m3.init(t, r), It.init(t, r);
});
function s0() {
  return l4(fA);
}
const dA = /* @__PURE__ */ te("ZodNever", (t, r) => {
  g3.init(t, r), It.init(t, r);
});
function hA(t) {
  return u4(dA, t);
}
const pA = /* @__PURE__ */ te("ZodArray", (t, r) => {
  v3.init(t, r), It.init(t, r), t.element = r.element, t.min = (a, s) => t.check(Mu(a, s)), t.nonempty = (a) => t.check(Mu(1, a)), t.max = (a, s) => t.check(j1(a, s)), t.length = (a, s) => t.check(R1(a, s)), t.unwrap = () => t.element;
});
function sn(t, r) {
  return _4(pA, t, r);
}
const mA = /* @__PURE__ */ te("ZodObject", (t, r) => {
  b3.init(t, r), It.init(t, r), ht(t, "shape", () => r.shape), t.keyof = () => ku(Object.keys(t._zod.def.shape)), t.catchall = (a) => t.clone({ ...t._zod.def, catchall: a }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: s0() }), t.loose = () => t.clone({ ...t._zod.def, catchall: s0() }), t.strict = () => t.clone({ ...t._zod.def, catchall: hA() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (a) => Uw(t, a), t.safeExtend = (a) => Fw(t, a), t.merge = (a) => Hw(t, a), t.pick = (a) => Pw(t, a), t.omit = (a) => Bw(t, a), t.partial = (...a) => qw(I1, t, a[0]), t.required = (...a) => Zw(P1, t, a[0]);
});
function Wn(t, r) {
  const a = {
    type: "object",
    shape: t ?? {},
    ...we(r)
  };
  return new mA(a);
}
const gA = /* @__PURE__ */ te("ZodUnion", (t, r) => {
  _3.init(t, r), It.init(t, r), t.options = r.options;
});
function vA(t, r) {
  return new gA({
    type: "union",
    options: t,
    ...we(r)
  });
}
const yA = /* @__PURE__ */ te("ZodIntersection", (t, r) => {
  S3.init(t, r), It.init(t, r);
});
function bA(t, r) {
  return new yA({
    type: "intersection",
    left: t,
    right: r
  });
}
const $d = /* @__PURE__ */ te("ZodEnum", (t, r) => {
  x3.init(t, r), It.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const a = new Set(Object.keys(r.entries));
  t.extract = (s, l) => {
    const u = {};
    for (const f of s)
      if (a.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new $d({
      ...r,
      checks: [],
      ...we(l),
      entries: u
    });
  }, t.exclude = (s, l) => {
    const u = { ...r.entries };
    for (const f of s)
      if (a.has(f))
        delete u[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new $d({
      ...r,
      checks: [],
      ...we(l),
      entries: u
    });
  };
});
function ku(t, r) {
  const a = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new $d({
    type: "enum",
    entries: a,
    ...we(r)
  });
}
const _A = /* @__PURE__ */ te("ZodTransform", (t, r) => {
  E3.init(t, r), It.init(t, r), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      throw new h1(t.constructor.name);
    a.addIssue = (u) => {
      if (typeof u == "string")
        a.issues.push(uo(u, a.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = a.value), f.inst ?? (f.inst = t), a.issues.push(uo(f));
      }
    };
    const l = r.transform(a.value, a);
    return l instanceof Promise ? l.then((u) => (a.value = u, a)) : (a.value = l, a);
  };
});
function SA(t) {
  return new _A({
    type: "transform",
    transform: t
  });
}
const I1 = /* @__PURE__ */ te("ZodOptional", (t, r) => {
  w3.init(t, r), It.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function o0(t) {
  return new I1({
    type: "optional",
    innerType: t
  });
}
const xA = /* @__PURE__ */ te("ZodNullable", (t, r) => {
  C3.init(t, r), It.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function l0(t) {
  return new xA({
    type: "nullable",
    innerType: t
  });
}
const EA = /* @__PURE__ */ te("ZodDefault", (t, r) => {
  A3.init(t, r), It.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function wA(t, r) {
  return new EA({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : v1(r);
    }
  });
}
const CA = /* @__PURE__ */ te("ZodPrefault", (t, r) => {
  N3.init(t, r), It.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function AA(t, r) {
  return new CA({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : v1(r);
    }
  });
}
const P1 = /* @__PURE__ */ te("ZodNonOptional", (t, r) => {
  T3.init(t, r), It.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function NA(t, r) {
  return new P1({
    type: "nonoptional",
    innerType: t,
    ...we(r)
  });
}
const TA = /* @__PURE__ */ te("ZodCatch", (t, r) => {
  O3.init(t, r), It.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function OA(t, r) {
  return new TA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const DA = /* @__PURE__ */ te("ZodPipe", (t, r) => {
  D3.init(t, r), It.init(t, r), t.in = r.in, t.out = r.out;
});
function u0(t, r) {
  return new DA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const MA = /* @__PURE__ */ te("ZodReadonly", (t, r) => {
  M3.init(t, r), It.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function kA(t) {
  return new MA({
    type: "readonly",
    innerType: t
  });
}
const jA = /* @__PURE__ */ te("ZodCustom", (t, r) => {
  k3.init(t, r), It.init(t, r);
});
function RA(t, r = {}) {
  return S4(jA, t, r);
}
function zA(t) {
  return x4(t);
}
const c0 = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Qd = "placeholder-chatHistory", LA = Wn({
  justification: Ht().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Ht().describe("The new, full content for the character field.")
}), IA = Wn({
  field: Ht(),
  value: Ht()
}), PA = Wn({
  index: co().int().positive(),
  value: Ht()
});
Wn({
  justification: Ht(),
  fields_to_change: sn(IA).optional(),
  draft_fields_to_remove: sn(Ht()).optional(),
  greetings_to_add: sn(Ht()).optional(),
  greetings_to_remove: sn(co().int().positive()).optional(),
  greetings_to_change: sn(PA).optional()
});
const BA = (t, r) => {
  const a = Wn({
    index: co().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Ht().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Ht().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: sn(Ht()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: sn(co().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: sn(a).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const l = Wn({
      field: ku(t).describe("The unique ID of the field to change (core or draft)."),
      value: Ht().describe("The new content for the field.")
    });
    s.fields_to_change = sn(l).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = sn(ku(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), Wn(s);
};
function Ad(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Kd(t, r = 0) {
  const a = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${a}<item>
${Kd(s, r + 1)}${a}</item>
` : `${a}<item>${Ad(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const l of Object.keys(t)) {
      const u = t[l];
      u !== null && typeof u == "object" ? s += `${a}<${l}>
${Kd(u, r + 1)}${a}</${l}>
` : s += `${a}<${l}>${Ad(u)}</${l}>
`;
    }
    return s;
  }
  return `${a}<value>${Ad(t)}</value>
`;
}
function UA(t, r) {
  const a = ja(t);
  return r === "xml" ? Kd(a).trim() : JSON.stringify(a, null, 2);
}
function FA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function HA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function ja(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, a = FA(t.example, r, t.default);
  if (a !== void 0) return a;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return ja(s);
  switch (HA(t.type)) {
    case "object": {
      const u = {}, f = t.properties || {};
      for (const d of Object.keys(f))
        u[d] = ja(f[d]);
      return t.additionalProperties && typeof t.additionalProperties == "object" && (u.additionalProperty = ja(t.additionalProperties)), u;
    }
    case "array": {
      const u = t.items ?? {};
      return [ja(u)];
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
      return t.properties || t.additionalProperties ? ja({ ...t, type: "object" }) : t.items ? ja({ ...t, type: "array" }) : null;
  }
}
const qA = new kS();
async function Jd(t, r, a, s, l, u) {
  const f = !s.json_schema && !1;
  return new Promise((d, p) => {
    const g = new AbortController(), y = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), qA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: a,
        custom: { stream: f, signal: y },
        overridePayload: s
      },
      {
        abortController: g,
        onEntry: void 0,
        onFinish: (_, b, m) => y.aborted ? p(new DOMException("Request aborted by user", "AbortError")) : m ? p(m) : b === void 0 && m === void 0 ? p(new DOMException("Request aborted by user", "AbortError")) : b ? d(b) : p(new Error("No data received from LLM"))
      }
    );
  });
}
async function Wd(t, r, a, s) {
  const l = await Jd(t, r, a, Cu(), void 0, s);
  if (!l?.content)
    throw new Error("Plain request failed to return content.");
  return l.content;
}
async function B1(t, r, a, s, l, u, f) {
  const d = _t.getSettings();
  let p, g;
  const y = w4(a);
  if (l === "native") {
    if (p = await Jd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: y },
        ...Cu()
      },
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const b = l, m = UA(y, b), h = JSON.stringify(y, null, 2), x = b === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", w = d.prompts[x]?.content;
    if (!w)
      throw new Error(`Prompt template for mode "${b}" not found.`);
    const T = {
      example_response: m,
      schema: h
    }, D = { role: "system", content: Yt.compile(w, { noEscape: !0, strict: !0 })(T) };
    if (p = await Jd(
      t,
      [...r, D],
      u,
      Cu(),
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = $0(p.content, b, { schema: y });
  }
  const _ = a.safeParse(g);
  if (!_.success) {
    const b = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", g), await ve("error", b), new Error(b);
  }
  return _.data;
}
function Nd(t, r, a) {
  return t.map((s) => {
    if (!s.images?.length)
      return { role: s.role, content: s.content };
    const l = [{ type: "text", text: s.content }];
    for (const u of s.images) {
      if (a && u.mediaType === "video")
        continue;
      const f = r?.get(u.url);
      f && (u.mediaType === "video" ? l.push({
        type: "video_url",
        video_url: { url: f, detail: "auto" }
      }) : l.push({
        type: "image_url",
        image_url: { url: f, detail: "auto" }
      }));
    }
    return l.length === 1 ? { role: s.role, content: s.content } : { role: s.role, content: l };
  });
}
const bh = ({ originalContent: t, newContent: r }) => {
  const a = G.useMemo(() => {
    const s = f1(t, r);
    let l = "", u = "";
    return s.forEach((f) => {
      const d = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${d}</span>`;
      f.added || (l += g), f.removed || (u += g);
    }), { originalHtml: l, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: a.originalHtml } }),
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: a.newHtml } })
  ] });
}, ZA = ({ before: t, after: r }) => {
  const a = G.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = t.fields[u], d = r.fields[u], p = f?.value ?? "", g = d?.value ?? "";
      p !== g && s.push({
        label: d?.label ?? f?.label ?? u,
        before: p,
        after: g
      });
    }), s;
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ S.jsx("h3", { children: "Changes in this step" }),
    a.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ S.jsx("div", { className: "compare-state-list", children: a.map(({ label: s, before: l, after: u }) => /* @__PURE__ */ S.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ S.jsx("h4", { children: s }),
      /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Before" }),
        /* @__PURE__ */ S.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ S.jsx(bh, { originalContent: l, newContent: u })
    ] }, s)) })
  ] });
}, GA = ({ currentState: t, initialState: r }) => {
  const [a, s] = G.useState(!1), { coreFields: l, alternateGreetings: u } = G.useMemo(() => {
    const d = [], p = [];
    return Dn.forEach((g) => {
      t.fields[g] && d.push({ label: t.fields[g].label, value: t.fields[g].value });
    }), Object.entries(t.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, y) => parseInt(g[0].split("_")[2]) - parseInt(y[0].split("_")[2])).forEach(([, g]) => p.push(g.value)), { coreFields: d, alternateGreetings: p };
  }, [t]), f = G.useMemo(() => {
    const d = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((g) => {
      const y = r.fields[g], _ = t.fields[g], b = y?.value ?? "", m = _?.value ?? "";
      b !== m && d.push({
        label: _?.label ?? y?.label ?? g,
        before: b,
        after: m
      });
    }), d;
  }, [r, t]);
  return /* @__PURE__ */ S.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: a ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ S.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: a, onChange: (d) => s(d.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "current-state-content", children: a ? /* @__PURE__ */ S.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: d, before: p, after: g }) => /* @__PURE__ */ S.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ S.jsx("h4", { children: d }),
      /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Original" }),
        /* @__PURE__ */ S.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ S.jsx(bh, { originalContent: p, newContent: g })
    ] }, d)) }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx("h4", { children: "Core Fields" }),
      l.map(({ label: d, value: p }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ S.jsx("label", { children: d }),
        /* @__PURE__ */ S.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ S.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, d)),
      u.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((d, p) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            p + 1
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: "state-value", children: d || /* @__PURE__ */ S.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, p))
      ] })
    ] }) })
  ] });
}, _h = (t) => Object.entries(t.fields).filter(([r]) => Ru(r)).sort((r, a) => Ii(r[0]) - Ii(a[0])).map(([, r]) => r.value), VA = (t, r) => {
  const a = wu(t) || "draftField", s = (u) => Dn.includes(u) || Ru(u) || !!r.fields[u];
  if (!s(a))
    return a;
  let l = 2;
  for (; s(`${a}${l}`); )
    l++;
  return `${a}${l}`;
}, U1 = (t, r, a, s) => {
  const l = structuredClone(t);
  if (a === "field" && s) {
    const u = r;
    return l.fields[s] && (l.fields[s].value = u.response), l;
  }
  if (a === "global") {
    const u = r;
    let f = _h(l), d = !1;
    if (u.fields_to_change?.length)
      for (const p of u.fields_to_change)
        l.fields[p.field] ? l.fields[p.field].value = p.value : l.draftFields[p.field] && (l.draftFields[p.field].value = p.value);
    if (u.draft_fields_to_add?.length)
      for (const p of u.draft_fields_to_add) {
        const g = p.label.trim();
        if (!g) continue;
        const y = VA(g, l), _ = l.draftFields[y];
        l.draftFields[y] = {
          value: p.value,
          // Keep the prompt of a draft field we are overwriting; the user wrote it.
          prompt: _?.prompt ?? "",
          label: _?.label ?? g
        };
      }
    if (u.draft_fields_to_remove?.length)
      for (const p of u.draft_fields_to_remove)
        l.draftFields[p] && delete l.draftFields[p];
    if (u.greetings_to_change?.length) {
      d = !0;
      for (const p of u.greetings_to_change)
        p.index > 0 && p.index <= f.length && (f[p.index - 1] = p.value);
    }
    if (u.greetings_to_remove?.length) {
      d = !0;
      const p = new Set(u.greetings_to_remove.map((g) => g - 1));
      f = f.filter((g, y) => !p.has(y));
    }
    u.greetings_to_add?.length && (d = !0, f.push(...u.greetings_to_add)), d && (Object.keys(l.fields).forEach((p) => {
      Ru(p) && delete l.fields[p];
    }), f.forEach((p, g) => {
      const y = `${Q0}${g + 1}`;
      l.fields[y] = {
        value: p,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate_Greeting_${g + 1}`
      };
    }));
  }
  return l;
}, { showdown: YA, DOMPurify: XA, hljs: $A } = SillyTavern.libs, QA = new YA.Converter({
  emoji: !0,
  literalMidWordUnderscores: !0,
  parseImgDimensions: !0,
  tables: !0,
  underline: !0,
  simpleLineBreaks: !0,
  strikethrough: !0,
  disableForced4SpacesIndentedSublists: !0
}), F1 = ({ content: t }) => {
  const r = G.useRef(null), a = G.useMemo(() => {
    const s = QA.makeHtml(t);
    return XA.sanitize(s);
  }, [t]);
  return G.useLayoutEffect(() => {
    const s = r.current;
    s && (s.innerHTML = a, s.querySelectorAll("pre").forEach((l) => {
      const u = l.querySelector("code");
      if (u && $A.highlightElement(u), l.querySelector(".code-copy-button")) return;
      const f = document.createElement("button");
      f.className = "code-copy-button", f.title = "Copy code", f.innerHTML = '<i class="fa-solid fa-clipboard"></i>', f.addEventListener("click", () => {
        const d = l.querySelector("code")?.textContent ?? "";
        navigator.clipboard.writeText(d), f.innerHTML = '<i class="fa-solid fa-check"></i>', setTimeout(() => {
          f.innerHTML = '<i class="fa-solid fa-clipboard"></i>';
        }, 1500);
      }), l.style.position = "relative", l.appendChild(f);
    }));
  }, [a]), /* @__PURE__ */ S.jsx("div", { ref: r, className: "message-content markdown-rendered" });
}, Ri = SillyTavern.getContext(), KA = ({ initialState: t, onSave: r, onClose: a }) => {
  const [s, l] = G.useState(() => structuredClone(t)), u = (_, b, m) => {
    const h = structuredClone(s), x = m ? "draftFields" : "fields";
    h[x][_] && (h[x][_].value = b), l(h);
  }, f = (_, b) => {
    const m = structuredClone(s), h = `alternate_greetings_${_ + 1}`;
    m.fields[h] && (m.fields[h].value = b), l(m);
  }, { coreFields: d, alternateGreetings: p, draftFields: g } = G.useMemo(() => {
    const _ = [], b = [], m = [];
    return Dn.forEach((h) => {
      s.fields[h] && _.push({ id: h, label: s.fields[h].label, value: s.fields[h].value });
    }), Object.entries(s.fields).filter(([h]) => h.startsWith("alternate_greetings_")).sort((h, x) => parseInt(h[0].split("_")[2]) - parseInt(x[0].split("_")[2])).forEach(([, h]) => b.push(h.value)), Object.entries(s.draftFields).forEach(([h, x]) => {
      m.push({ id: h, label: x.label, value: x.value });
    }), { coreFields: _, alternateGreetings: b, draftFields: m };
  }, [s]), y = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), a();
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ S.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ S.jsxs(ce, { onClick: y, children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ S.jsxs(ce, { onClick: a, className: "danger_button", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ S.jsx("h4", { children: "Core Fields" }),
      d.map(({ id: _, label: b, value: m }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ S.jsx("label", { children: b }),
        /* @__PURE__ */ S.jsx(en, { value: m, onChange: (h) => u(_, h.target.value, !1), rows: 4 })
      ] }, _)),
      g.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: _, label: b, value: m }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsx("label", { children: b }),
          /* @__PURE__ */ S.jsx(en, { value: m, onChange: (h) => u(_, h.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      p.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        p.map((_, b) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            b + 1
          ] }),
          /* @__PURE__ */ S.jsx(en, { value: _, onChange: (m) => f(b, m.target.value), rows: 4 })
        ] }, b))
      ] })
    ] })
  ] });
}, JA = ({
  session: t,
  onBack: r,
  onApply: a,
  onSessionUpdate: s,
  initialState: l,
  chatContextOptions: u
}) => {
  const [f, d] = G.useState(t.messages), [p, g] = G.useState(""), [y, _] = G.useState(!1), [b, m] = G.useState(null), [h, x] = G.useState(!1), [w, T] = G.useState(!1), [C, D] = G.useState(null), [E, N] = G.useState(""), M = G.useRef(null), j = G.useRef(null);
  G.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const L = G.useCallback(
    (X, xe, Ee) => {
      if (JSON.stringify(Ee) === JSON.stringify(xe))
        return X;
      const We = _t.getSettings().prompts.existingFieldDefinitions;
      if (!We) return X;
      const ke = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(Ee.fields), ...Object.keys(xe.fields)])).forEach((W) => {
        const re = Ee.fields[W]?.value ?? "", he = xe.fields[W]?.value ?? "";
        if (re !== he) {
          const Ae = xe.fields[W];
          Ae && (W.startsWith("alternate_greetings_") ? ke.alternate_greetings[Ae.label] = Ae.value : Dn.includes(W) && (ke.core[Ae.label] = Ae.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(Ee.draftFields), ...Object.keys(xe.draftFields)])).forEach((W) => {
        const re = Ee.draftFields[W]?.value ?? "", he = xe.draftFields[W]?.value ?? "";
        if (re !== he && xe.draftFields[W]) {
          const Ae = xe.draftFields[W];
          ke.draft[Ae.label] = Ae.value;
        }
      }), Object.keys(ke.core).length === 0 && Object.keys(ke.alternate_greetings).length === 0 && Object.keys(ke.draft).length === 0)
        return X;
      const Tt = { fields: ke };
      let U = Yt.compile(We.content, { noEscape: !0 })(Tt);
      if (U = Ri.substituteParams(U), U.trim()) {
        const W = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: U.trim(),
          isStateUpdate: !0
        };
        return [...X, W];
      }
      return X;
    },
    []
  ), Y = G.useCallback(
    async (X, xe, Ee, Ye) => {
      const We = _t.getSettings();
      if (!t.profileId) {
        ve("warning", "Please select a connection profile for this session.");
        return;
      }
      j.current = new AbortController(), Ee(), _(!0);
      try {
        const ke = [], nt = Ri.extensionSettings.connectionManager?.profiles?.find(
          (W) => W.id === t.profileId
        ), on = nt?.api ? Ri.CONNECT_API_MAP[nt.api]?.selected : void 0;
        if (!on)
          throw new Error("No API selected for this session.");
        for (const W of X)
          if (W.id === Qd) {
            if (Jt === void 0 && !Jn) continue;
            const re = await T0(on, u);
            re.warnings?.length && re.warnings.forEach((he) => ve("warning", he)), ke.push(...re.result);
          } else
            ke.push(W);
        const Tt = X.slice(0, X.length - (xe ? 0 : 1)).reverse().find((W) => W.stateSnapshot)?.stateSnapshot ?? l, U = We.prompts.existingFieldDefinitions;
        if (U) {
          const W = {
            fields: {
              core: Object.fromEntries(
                Object.entries(Tt.fields).filter(([he]) => !he.startsWith("alternate_greetings_")).map(([, he]) => [he.label, he.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(Tt.fields).filter(([he]) => he.startsWith("alternate_greetings_")).map(([, he]) => [he.label, he.value])
              ),
              draft: Object.fromEntries(Object.entries(Tt.draftFields).map(([, he]) => [he.label, he.value]))
            }
          };
          let re = Yt.compile(U.content, { noEscape: !0 })(W);
          if (re = Ri.substituteParams(re), re.trim()) {
            const he = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: re.trim()
            }, Ae = ke.pop();
            ke.push(he), Ae && ke.push(Ae);
          }
        }
        if (t.isReadonly) {
          ke.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const W = await Wd(
            t.profileId,
            ke,
            We.maxResponseToken,
            j.current.signal
          ), re = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: W
          }, he = [...X, re];
          d(he), s({ ...t, messages: he });
        } else {
          const W = t.type === "field" ? LA : (() => {
            const Ze = [...Object.keys(Tt.fields), ...Object.keys(Tt.draftFields)], Be = Object.keys(Tt.draftFields);
            return BA(Ze, Be);
          })(), he = await B1(
            t.profileId,
            ke,
            W,
            t.type === "field" ? c0.FIELD : c0.GLOBAL,
            t.promptEngineeringMode,
            We.maxResponseToken,
            j.current.signal
          ), Ae = U1(Tt, he, t.type, t.targetFieldId), oe = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: he.justification,
            stateSnapshot: Ae
          };
          let pe = [...X, oe];
          pe = L(pe, Ae, Tt), d(pe), s({ ...t, messages: pe });
        }
      } catch (ke) {
        ke.name === "AbortError" ? ve("info", "Request was cancelled.") : (console.error("Revise request failed:", ke), ve("error", `Request failed: ${ke.message}`)), Ye();
      } finally {
        _(!1), j.current = null;
      }
    },
    [t, s, l, u, L]
  ), I = G.useCallback(async () => {
    if (!p.trim() || y) return;
    const X = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, xe = f;
    Y(
      [...f, X],
      !1,
      () => {
        d([...f, X]), g("");
      },
      () => d(xe)
    );
  }, [p, y, f, Y]), q = G.useCallback(async () => {
    if (y || f.length === 0) return;
    const X = f;
    let xe = [...f];
    const Ee = f.findLastIndex((Ye) => !Ye.isStateUpdate);
    Ee > -1 && f[Ee].role === "assistant" && (xe = f.slice(0, Ee)), await Y(
      xe,
      !0,
      () => d(xe),
      () => d(X)
    );
  }, [y, f, Y]), $ = () => {
    const X = f.slice().reverse().find((xe) => xe.stateSnapshot)?.stateSnapshot ?? l;
    a(X), r();
  }, fe = (X) => {
    const xe = f.findIndex((We) => We.id === X);
    if (xe === -1 || !f[xe].stateSnapshot) return;
    const Ee = f[xe].stateSnapshot;
    let Ye = l;
    for (let We = xe - 1; We >= 0; We--)
      if (f[We].stateSnapshot) {
        Ye = f[We].stateSnapshot;
        break;
      }
    m({ before: Ye, after: Ee });
  }, de = () => {
    x(!0);
  }, _e = (X) => {
    D(X.id), N(X.content);
  }, B = () => {
    D(null), N("");
  }, ae = async () => {
    if (!C) return;
    const X = f.findIndex((nt) => nt.id === C);
    if (X === -1 || !await Ri.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const Ee = f, Ye = f.slice(0, X), We = { ...f[X], content: E }, ke = [...Ye, We];
    B(), Y(
      ke,
      !1,
      () => d(ke),
      () => d(Ee)
    );
  }, me = async (X) => {
    const xe = f.findIndex((nt) => nt.id === X);
    if (xe === -1) return;
    const Ye = !!f[xe].isInitial;
    if (!await Ri.Popup.show.confirm(
      "Delete Message",
      Ye ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let ke;
    Ye ? ke = f.filter((nt) => nt.isInitial && nt.id !== X) : ke = f.slice(0, xe), d(ke), s({ ...t, messages: ke }), ve("info", "Message history has been updated.");
  }, Le = f.filter((X) => !X.isStateUpdate), R = Le.filter((X) => X.isInitial), J = Le.filter((X) => !X.isInitial), ie = f.slice().reverse().find((X) => X.stateSnapshot)?.stateSnapshot ?? l, se = () => {
    T(!0);
  }, le = (X) => {
    const xe = f.slice().reverse().find((We) => We.stateSnapshot)?.stateSnapshot ?? l, Ee = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: X
    };
    let Ye = [...f, Ee];
    Ye = L(Ye, X, xe), d(Ye), s({ ...t, messages: Ye }), T(!1);
  }, je = () => {
    j.current?.abort();
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h2", { children: t.name }),
      /* @__PURE__ */ S.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.isReadonly ?? !1,
              onChange: (X) => s({ ...t, isReadonly: X.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ S.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ S.jsx(
          l1,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (X) => s({ ...t, profileId: X?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ S.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (X) => s({ ...t, promptEngineeringMode: X.target.value }),
            title: "Prompt Engineering Mode",
            disabled: t.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ S.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ S.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ S.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ S.jsx(ce, { onClick: de, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ S.jsx(ce, { onClick: se, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ S.jsx(ce, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ S.jsxs(ce, { onClick: $, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      R.length > 0 && /* @__PURE__ */ S.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ S.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ S.jsx("div", { className: "initial-messages-content", children: R.map(
          (X) => C === X.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ S.jsx(en, { value: E, onChange: (xe) => N(xe.target.value), rows: 5 }),
            /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ S.jsxs(ce, { onClick: ae, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ S.jsxs(ce, { onClick: B, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, X.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper initial-context ${X.role}`, children: [
            /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${X.role} initial`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: X.content }) }),
            !y && X.id !== Qd && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ S.jsxs(
                ce,
                {
                  className: "message-action-button",
                  onClick: () => _e(X),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ S.jsxs(
                ce,
                {
                  className: "message-action-button danger_button",
                  onClick: () => me(X.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, X.id)
        ) })
      ] }),
      J.map(
        (X) => C === X.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ S.jsx(en, { value: E, onChange: (xe) => N(xe.target.value), rows: 3 }),
          /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ S.jsxs(ce, { onClick: ae, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ S.jsxs(ce, { onClick: B, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, X.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper ${X.role}`, children: [
          /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
            X.role === "user" && !X.stateSnapshot && !y && /* @__PURE__ */ S.jsxs(
              ce,
              {
                className: "message-action-button",
                onClick: () => _e(X),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            X.stateSnapshot && !y && /* @__PURE__ */ S.jsxs(
              ce,
              {
                className: "message-action-button",
                onClick: () => fe(X.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !y && /* @__PURE__ */ S.jsxs(
              ce,
              {
                className: "message-action-button danger_button",
                onClick: () => me(X.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${X.role}`, children: X.role === "assistant" ? /* @__PURE__ */ S.jsx(F1, { content: X.content }) : /* @__PURE__ */ S.jsx("div", { className: "message-content", children: X.content }) })
        ] }, X.id)
      ),
      J.length > 0 && !y && /* @__PURE__ */ S.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ S.jsxs(ce, { onClick: q, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ S.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ S.jsx(ce, { onClick: je, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        en,
        {
          value: p,
          onChange: (X) => g(X.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: y || !!C,
          onKeyDown: (X) => {
            X.key === "Enter" && !X.shiftKey && (X.preventDefault(), I());
          }
        }
      ),
      /* @__PURE__ */ S.jsxs(ce, { onClick: I, disabled: y || !p.trim() || !!C, children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    b && /* @__PURE__ */ S.jsx(
      Ia,
      {
        type: mn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(ZA, { before: b.before, after: b.after }),
        onComplete: () => m(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ S.jsx(
      Ia,
      {
        type: mn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(GA, { currentState: ie, initialState: l }),
        onComplete: () => x(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    w && /* @__PURE__ */ S.jsx(
      Ia,
      {
        type: mn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          KA,
          {
            initialState: ie,
            onSave: le,
            onClose: () => T(!1)
          }
        ),
        onComplete: () => T(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
function H1(t, r = {}) {
  const a = t?.entries;
  if (!a)
    return [];
  const s = Array.isArray(a) ? a : Object.values(a);
  return r.includeDisabled ? s : s.filter((l) => !l.disable);
}
async function WA(t, r, a, s, l) {
  const u = _t.getSettings(), f = u.mainContextTemplatePresets[a];
  if (!f)
    throw new Error(`Main context template preset "${a}" not found.`);
  const d = [], g = {
    ...{
      user: Wt.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: Wt.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(t.fields).filter(([m]) => !m.startsWith("alternate_greetings_")).map(([, m]) => [m.label, m.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([m]) => m.startsWith("alternate_greetings_")).map(([, m]) => [m.label, m.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, m]) => [m.label, m.value]))
    }
  };
  if (s.charCard) {
    const m = [];
    l.selectedCharacterIndexes.forEach((h) => {
      const x = Wt.characters[parseInt(h)];
      x && m.push(x);
    }), g.characters = m;
  }
  if (s.worldInfo) {
    const m = {};
    await Promise.all(
      l.selectedWorldNames.map(async (h) => {
        const x = await Wt.loadWorldInfo(h);
        x && (m[h] = H1(x));
      })
    ), g.lorebooks = m;
  }
  for (const m of f.prompts) {
    if (!m.enabled || m.promptName === "stDescription" && !s.stDescription || m.promptName === "charDefinitions" && !s.charCard || m.promptName === "lorebookDefinitions" && !s.worldInfo || m.promptName === "existingFieldDefinitions" && !s.existingFields || m.promptName === "personaDescription" && !s.persona || m.promptName === "chatHistory" && s.messages.type === "none" || Jt === void 0 && !Jn && m.promptName === "chatHistory") continue;
    if (m.promptName === "chatHistory") {
      d.push({
        id: Qd,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(m.promptName))
      continue;
    const x = u.prompts[m.promptName];
    if (!x || x.content.includes("{{activeFormatInstructions}}"))
      continue;
    let w = "";
    w = Yt.compile(x.content, { noEscape: !0 })(g), w = Wt.substituteParams(w), w.trim() && d.push({
      id: `im-${d.length}`,
      role: m.role,
      content: w.trim(),
      isInitial: !0
    });
  }
  const y = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, b = Yt.compile(_, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: y
  });
  return d.push({
    id: `im-${d.length}`,
    role: "system",
    content: b,
    isInitial: !0
  }), d;
}
const q1 = "charCreator", Z1 = "charCreator_reviseSessions", G1 = "charCreator_brainstormSessions", Ha = () => SillyTavern.libs.localforage, eN = (t) => {
  if (!t)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(t), recovered: !1 };
  } catch (r) {
    return { value: null, recovered: !0, error: r };
  }
}, Sh = async (t, r, a) => {
  try {
    const s = await r.getItem(t);
    if (s !== null)
      return { value: s, migrated: !1, recovered: !1 };
    const l = eN(a.getItem(t));
    return l.value === null ? (l.recovered && a.removeItem(t), { value: null, migrated: !1, recovered: l.recovered, error: l.error }) : (await r.setItem(t, l.value), a.removeItem(t), { value: l.value, migrated: !0, recovered: l.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, xh = async (t, r, a = Ha()) => {
  try {
    return await a.setItem(t, r), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, tN = (t = Ha(), r = localStorage) => Sh(q1, t, r), nN = (t, r = Ha()) => xh(q1, t, r), rN = (t = Ha(), r = localStorage) => Sh(Z1, t, r), aN = (t, r = Ha()) => xh(Z1, t, r), iN = (t = Ha(), r = localStorage) => Sh(G1, t, r), f0 = (t, r = Ha()) => xh(G1, t, r), cu = SillyTavern.getContext(), sN = ({
  target: t,
  onClose: r,
  onApply: a,
  initialState: s,
  contextToSend: l,
  sessionForContext: u
}) => {
  const [f, d] = G.useState([]), [p, g] = G.useState(null), [y, _] = G.useState(!0);
  G.useEffect(() => {
    let D = !0;
    return rN().then(({ value: E, recovered: N }) => {
      D && (d(Array.isArray(E) ? E : []), N && ve("warning", "Some saved revise sessions were invalid and have been reset."));
    }).catch((E) => {
      console.error("Failed to load revise sessions:", E), ve("warning", "Saved revise sessions could not be loaded.");
    }).finally(() => {
      D && _(!1);
    }), () => {
      D = !1;
    };
  }, []);
  const b = G.useMemo(() => f.filter((D) => D.type === t.type && (D.type === "global" || D.targetFieldId === t.fieldId)).sort((D, E) => new Date(E.createdAt).getTime() - new Date(D.createdAt).getTime()), [f, t]), m = (D) => {
    d(D), aN(D).then((E) => {
      E.persisted || (console.warn("Failed to save revise sessions:", E.error), ve("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, h = async () => {
    const D = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", E = await cu.Popup.show.input(
      "New Session Name",
      `Session for ${D} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (E)
      try {
        const N = _t.getSettings();
        if (!N.profileId) {
          ve("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const M = {
          id: `rs-${Date.now()}`,
          name: E,
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
        }, j = await WA(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          l,
          u
        );
        M.messages = j, m([...f, M]), g(M);
      } catch (N) {
        console.error("Failed to create session:", N), ve("error", `Failed to create session: ${N.message}`);
      }
  }, x = (D) => {
    g(D);
  }, w = async (D) => {
    if (await cu.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const N = f.filter((M) => M.id !== D);
      m(N);
    }
  }, T = (D) => {
    const E = f.findIndex((M) => M.id === D.id), N = [...f];
    E !== -1 ? N[E] = D : N.push(D), m(N), g(D);
  };
  if (p) {
    const D = cu.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === p.profileId
    ), E = {
      targetCharacterId: Jt,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Jn,
      presetName: D?.preset,
      contextName: D?.context,
      instructName: D?.instruct
    }, N = l.messages;
    switch (N.type) {
      case "none":
        E.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        E.messageIndexesBetween = { start: 0, end: N.first ?? 10 };
        break;
      case "last":
        const M = cu.chat?.length ?? 0, j = N.last ?? 10;
        E.messageIndexesBetween = {
          end: Math.max(0, M - 1),
          start: Math.max(0, M - j)
        };
        break;
      case "range":
        E.messageIndexesBetween = {
          start: N.range?.start ?? 0,
          end: N.range?.end ?? 10
        };
        break;
    }
    return Jt === void 0 && !Jn && (E.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ S.jsx(
      JA,
      {
        session: p,
        onBack: () => g(null),
        onApply: a,
        onSessionUpdate: T,
        initialState: s,
        chatContextOptions: E
      }
    );
  }
  const C = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ S.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ S.jsx("div", { className: "popup_header", children: /* @__PURE__ */ S.jsxs("h2", { children: [
      'Revise Sessions for "',
      C,
      '"'
    ] }) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-list", children: y ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : b.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : b.map((D) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => x(D), children: [
        /* @__PURE__ */ S.jsx("span", { className: "session-name", children: D.name }),
        /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(D.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ S.jsx(ce, { className: "danger_button", onClick: () => w(D.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-actions", children: /* @__PURE__ */ S.jsxs(ce, { onClick: h, className: "menu_button", children: [
      /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, oN = SillyTavern.getContext(), lN = 50 * 1024 * 1024, uN = {
  "x-msvideo": "avi",
  quicktime: "mov",
  "x-matroska": "mkv",
  "x-ms-wmv": "wmv",
  "x-flv": "flv",
  "3gpp": "3gp"
};
function V1(t) {
  return new Promise((r, a) => {
    const s = new FileReader();
    s.onload = () => r(s.result), s.onerror = () => a(new Error("Failed to read file")), s.readAsDataURL(t);
  });
}
let cN = 0;
async function fN(t) {
  const r = t.type.startsWith("video/");
  r && t.size > lN && ve(
    "warning",
    `Video "${t.name}" is ${(t.size / 1024 / 1024).toFixed(1)}MB. Large videos may be slow to upload and expensive in tokens.`
  );
  const s = (await V1(t)).split(",")[1], l = t.type.split("/")[1] || "png", u = uN[l] || l, f = `brainstorm_${Date.now()}_${cN++}`, d = await fetch("/api/images/upload", {
    method: "POST",
    headers: oN.getRequestHeaders(),
    body: JSON.stringify({
      image: s,
      format: u,
      ch_name: "brainstorm",
      filename: f
    })
  });
  if (!d.ok)
    throw new Error(`Upload failed: ${d.statusText}`);
  return {
    url: (await d.json()).path,
    name: t.name,
    ...r ? { mediaType: "video" } : {}
  };
}
async function dN(t) {
  const r = await fetch(t);
  if (!r.ok)
    throw new Error(`Failed to fetch image: ${r.statusText}`);
  const a = await r.blob();
  return new Promise((s, l) => {
    const u = new FileReader();
    u.onload = () => s(u.result), u.onerror = () => l(new Error("Failed to convert image to data URL")), u.readAsDataURL(a);
  });
}
async function Y1(t, r, a, s, l) {
  const u = _t.getSettings(), f = u.mainContextTemplatePresets[a];
  if (!f)
    throw new Error(`Main context template preset "${a}" not found.`);
  const d = [], g = {
    ...{
      user: Wt.name1 || "You",
      char: t.name?.value || "Character",
      persona: Wt.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(t).filter(([_]) => !_.startsWith("alternate_greetings_")).map(([, _]) => [_.label, _.value])
      ),
      alternate_greetings: s.dontSendOtherGreetings ? {} : Object.fromEntries(
        Object.entries(t).filter(([_]) => _.startsWith("alternate_greetings_")).map(([, _]) => [_.label, _.value])
      ),
      draft: Object.fromEntries(Object.entries(r).map(([, _]) => [_.label, _.value]))
    }
  };
  if (s.charCard) {
    const _ = [];
    l.selectedCharacterIndexes.forEach((b) => {
      const m = Wt.characters[parseInt(b)];
      m && _.push(m);
    }), g.characters = _;
  }
  if (s.worldInfo) {
    const _ = {};
    await Promise.all(
      l.selectedWorldNames.map(async (b) => {
        const m = await Wt.loadWorldInfo(b);
        m && (_[b] = Object.values(m.entries).filter((h) => !h.disable));
      })
    ), g.lorebooks = _;
  }
  const y = u.prompts.brainstormSystemPrompt;
  if (y?.content) {
    let _ = Yt.compile(y.content, { noEscape: !0 })(g);
    _ = Wt.substituteParams(_), _.trim() && d.push({
      id: `im-${d.length}`,
      role: "system",
      content: _.trim(),
      isInitial: !0
    });
  }
  for (const _ of f.prompts) {
    if (!_.enabled || _.promptName === "stDescription" && !s.stDescription || _.promptName === "charDefinitions" && !s.charCard || _.promptName === "lorebookDefinitions" && !s.worldInfo || _.promptName === "existingFieldDefinitions" && !s.existingFields || _.promptName === "personaDescription" && !s.persona || _.promptName === "chatHistory" || [
      "taskDescription",
      "outputFormatInstructions",
      "reviseTaskDescription",
      "reviseJsonPrompt",
      "reviseXmlPrompt",
      "brainstormSystemPrompt",
      // Appended after the transcript by the extraction call, never part of the opening context.
      "brainstormExtractPrompt"
    ].includes(_.promptName)) continue;
    const m = u.prompts[_.promptName];
    if (!m || m.content.includes("{{activeFormatInstructions}}")) continue;
    let h = Yt.compile(m.content, { noEscape: !0 })(g);
    h = Wt.substituteParams(h), h.trim() && d.push({
      id: `im-${d.length}`,
      role: _.role,
      content: h.trim(),
      isInitial: !0
    });
  }
  return d;
}
const hN = {
  field: "field",
  "draft-add": "new draft",
  "greeting-change": "greeting",
  "greeting-add": "new greeting"
}, pN = ({
  justification: t,
  items: r,
  isExtracting: a,
  onApply: s,
  onReExtract: l,
  onCancel: u
}) => {
  const [f, d] = G.useState(() => new Set(r.map((m) => m.id))), [p, g] = G.useState(""), y = (m) => {
    d((h) => {
      const x = new Set(h);
      return x.has(m) ? x.delete(m) : x.add(m), x;
    });
  }, _ = G.useMemo(
    () => r.length > 0 && r.every((m) => f.has(m.id)),
    [r, f]
  ), b = () => {
    d(_ ? /* @__PURE__ */ new Set() : new Set(r.map((m) => m.id)));
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "extract-review-popup", children: [
    /* @__PURE__ */ S.jsx("div", { className: "popup_header", children: /* @__PURE__ */ S.jsx("h3", { children: "Draft Card from Conversation" }) }),
    t && /* @__PURE__ */ S.jsx("div", { className: "extract-justification", children: t }),
    r.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "The model did not propose any changes. Try giving it a hint below about what to pull out." }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx("div", { className: "extract-select-all", children: /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: _, onChange: b }),
        " Select all"
      ] }) }),
      /* @__PURE__ */ S.jsx("div", { className: "extract-item-list", children: r.map((m) => {
        const h = f.has(m.id);
        return /* @__PURE__ */ S.jsxs("div", { className: `extract-item ${h ? "" : "deselected"}`, children: [
          /* @__PURE__ */ S.jsxs("label", { className: "extract-item-header checkbox_label", children: [
            /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: h, onChange: () => y(m.id) }),
            /* @__PURE__ */ S.jsx("span", { className: "extract-item-label", children: m.label }),
            /* @__PURE__ */ S.jsx("span", { className: "extract-item-badge", children: hN[m.kind] }),
            /* @__PURE__ */ S.jsx("span", { className: `extract-item-badge ${m.isNew ? "is-new" : "is-overwrite"}`, children: m.isNew ? "new" : "overwrite" })
          ] }),
          m.isNew ? /* @__PURE__ */ S.jsx("div", { className: "extract-item-new content", children: m.after }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
              /* @__PURE__ */ S.jsx("span", { children: "Current" }),
              /* @__PURE__ */ S.jsx("span", { children: "Proposed" })
            ] }),
            /* @__PURE__ */ S.jsx(bh, { originalContent: m.before, newContent: m.after })
          ] })
        ] }, m.id);
      }) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "extract-hint-row", children: [
      /* @__PURE__ */ S.jsx("label", { htmlFor: "crec-extract-hint", children: "Not quite?" }),
      /* @__PURE__ */ S.jsx(
        en,
        {
          id: "crec-extract-hint",
          value: p,
          onChange: (m) => g(m.target.value),
          placeholder: "e.g. use the second name we discussed, ignore the pirate tangent",
          rows: 2,
          disabled: a
        }
      ),
      /* @__PURE__ */ S.jsx(ce, { onClick: () => l(p), disabled: a, title: "Run the extraction again", children: a ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
        " Working"
      ] }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Redo"
      ] }) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "extract-actions", children: [
      /* @__PURE__ */ S.jsxs(ce, { onClick: () => s(f), disabled: a || f.size === 0, children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
        " Apply Selected (",
        f.size,
        ")"
      ] }),
      /* @__PURE__ */ S.jsxs(ce, { onClick: u, className: "danger_button", disabled: a, children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
        " Cancel"
      ] })
    ] })
  ] });
}, mN = "BrainstormCardExtraction", gN = 4096, vN = (t, r) => {
  const a = {
    justification: Ht().describe(
      "A brief, friendly explanation of which fields you filled in and any choice you had to make between competing ideas from the conversation."
    ),
    greetings_to_add: sn(Ht()).optional().describe("New alternate greetings to append. Only include greetings the conversation supports."),
    draft_fields_to_add: sn(
      Wn({
        label: Ht().describe('A short human-readable name for the field, e.g. "Backstory" or "Voice Notes".'),
        value: Ht().describe("The content for the field.")
      })
    ).optional().describe(
      "Character material that fits none of the core card fields. Omit unless the conversation produced such material."
    )
  };
  return t.length > 0 && (a.fields_to_change = sn(
    Wn({
      field: ku(t).describe("The ID of the card field to fill in, exactly as listed in the task instructions."),
      value: Ht().describe("The finished content for the field.")
    })
  ).optional().describe("Card fields to fill in from the conversation. Omit any field the conversation does not support.")), r > 0 && (a.greetings_to_change = sn(
    Wn({
      index: co().int().positive().describe(`The 1-based index of an existing alternate greeting (1 to ${r}).`),
      value: Ht().describe("The new content for that alternate greeting.")
    })
  ).optional().describe("Existing alternate greetings to rewrite.")), Wn(a);
}, yN = (t) => {
  const r = Dn.filter((l) => t.fields[l]).map((l) => ({
    id: l,
    label: t.fields[l].label,
    value: t.fields[l].value
  })), a = Object.entries(t.fields).filter(([l]) => Ru(l)).sort((l, u) => Ii(l[0]) - Ii(u[0])).map(([l, u], f) => ({
    index: Number.isNaN(Ii(l)) ? f + 1 : Ii(l),
    value: u.value
  })), s = Object.entries(t.draftFields).map(([l, u]) => ({
    id: l,
    label: u.label,
    value: u.value
  }));
  return { coreFields: r, greetings: a, draftFields: s };
}, bN = (t, r, a) => {
  const { coreFields: s, greetings: l, draftFields: u } = yN(r);
  return Yt.compile(t, { noEscape: !0 })({
    char: "{{char}}",
    user: "{{user}}",
    coreFields: s,
    greetings: l,
    draftFields: u,
    extractionHint: a?.trim() ?? ""
  }).trim();
}, _N = (t, r) => {
  const a = [], s = _h(t);
  return r.fields_to_change?.forEach((l) => {
    const u = t.fields[l.field] ?? t.draftFields[l.field];
    if (!u) return;
    const f = u.value ?? "";
    f !== l.value && a.push({
      id: `field:${l.field}`,
      kind: "field",
      label: u.label || l.field,
      before: f,
      after: l.value,
      isNew: f.trim() === ""
    });
  }), r.greetings_to_change?.forEach((l) => {
    if (l.index < 1 || l.index > s.length) return;
    const u = s[l.index - 1] ?? "";
    u !== l.value && a.push({
      id: `greeting-change:${l.index}`,
      kind: "greeting-change",
      label: `Alternate Greeting ${l.index}`,
      before: u,
      after: l.value,
      isNew: u.trim() === ""
    });
  }), r.greetings_to_add?.forEach((l, u) => {
    a.push({
      id: `greeting-add:${u}`,
      kind: "greeting-add",
      label: `Alternate Greeting ${s.length + u + 1}`,
      before: "",
      after: l,
      isNew: !0
    });
  }), r.draft_fields_to_add?.forEach((l, u) => {
    a.push({
      id: `draft-add:${u}`,
      kind: "draft-add",
      label: l.label,
      before: "",
      after: l.value,
      isNew: !0
    });
  }), a;
}, SN = (t, r) => {
  const a = { justification: t.justification }, s = t.fields_to_change?.filter((d) => r.has(`field:${d.field}`));
  s?.length && (a.fields_to_change = s);
  const l = t.greetings_to_change?.filter(
    (d) => r.has(`greeting-change:${d.index}`)
  );
  l?.length && (a.greetings_to_change = l);
  const u = t.greetings_to_add?.filter((d, p) => r.has(`greeting-add:${p}`));
  u?.length && (a.greetings_to_add = u);
  const f = t.draft_fields_to_add?.filter((d, p) => r.has(`draft-add:${p}`));
  return f?.length && (a.draft_fields_to_add = f), a;
}, d0 = SillyTavern.getContext(), xN = ({
  session: t,
  onBack: r,
  onSessionUpdate: a,
  contextToSend: s,
  sessionForContext: l,
  onApplyToCard: u,
  isActive: f = !0
}) => {
  const [d, p] = G.useState(t.messages), [g, y] = G.useState(""), [_, b] = G.useState(!1), [m, h] = G.useState(null), [x, w] = G.useState(""), [T, C] = G.useState([]), D = G.useRef(null), E = G.useRef(null), [N, M] = G.useState([]), [j, L] = G.useState([]), Y = G.useRef(null), I = G.useRef(/* @__PURE__ */ new Map()), q = G.useRef(!1), [$, fe] = G.useState(!1), [de, _e] = G.useState(null), B = G.useRef(null), ae = (ne) => ne.type.startsWith("video/"), me = (ne) => ne.mediaType === "video", Le = G.useRef(d);
  Le.current = d;
  const R = G.useRef(t);
  R.current = t;
  const J = G.useRef(a);
  J.current = a;
  const ie = G.useRef(l);
  ie.current = l;
  const se = JSON.stringify(s), le = G.useRef(!0);
  G.useEffect(() => {
    if (le.current) {
      le.current = !1;
      return;
    }
    let ne = !1;
    return (async () => {
      const Ue = _t.getSettings();
      try {
        const ge = await Y1(
          ie.current.fields,
          ie.current.draftFields,
          Ue.mainContextTemplatePreset,
          s,
          ie.current
        );
        if (ne) return;
        const Ke = Le.current.filter((ze) => !ze.isInitial), Qe = [...ge, ...Ke];
        p(Qe), J.current({
          ...R.current,
          messages: Qe,
          contextConfig: {
            stDescription: s.stDescription,
            charCard: s.charCard,
            existingFields: s.existingFields,
            worldInfo: s.worldInfo,
            persona: s.persona,
            messages: s.messages
          }
        });
      } catch (ge) {
        console.error("Failed to rebuild brainstorm context:", ge);
      }
    })(), () => {
      ne = !0;
    };
  }, [se]);
  const je = G.useCallback(async (ne) => {
    const ye = ne.filter((ge) => ge.type.startsWith("image/") || ge.type.startsWith("video/"));
    if (ye.length === 0) return;
    const Ue = await Promise.all(ye.map((ge) => V1(ge)));
    M((ge) => [...ge, ...ye]), L((ge) => [...ge, ...Ue]);
  }, []), X = G.useCallback((ne) => {
    M((ye) => ye.filter((Ue, ge) => ge !== ne)), L((ye) => ye.filter((Ue, ge) => ge !== ne));
  }, []), xe = G.useCallback(
    (ne) => {
      const ye = Array.from(ne.clipboardData.files);
      ye.some((Ue) => Ue.type.startsWith("image/") || Ue.type.startsWith("video/")) && (ne.preventDefault(), je(ye));
    },
    [je]
  ), Ee = G.useCallback(
    (ne) => {
      const ye = Array.from(ne.target.files || []);
      je(ye), Y.current && (Y.current.value = "");
    },
    [je]
  ), Ye = G.useRef(f);
  G.useEffect(() => {
    const ne = f && !Ye.current;
    Ye.current = f, f && D.current?.scrollIntoView({ behavior: ne ? "auto" : "smooth" });
  }, [d, f]);
  const We = G.useCallback(async (ne) => {
    for (const ye of ne)
      if (ye.images) {
        for (const Ue of ye.images)
          if (!I.current.has(Ue.url))
            try {
              const ge = await dN(Ue.url);
              I.current.set(Ue.url, ge);
            } catch (ge) {
              console.warn(`Failed to load image ${Ue.url}, skipping`, ge);
            }
      }
  }, []), ke = G.useCallback(
    async (ne, ye, Ue) => {
      const ge = _t.getSettings();
      if (!ge.profileId) {
        ve("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      E.current = new AbortController(), await We(ne), ye(), b(!0);
      try {
        const Ke = ne.some((Gn) => Gn.images?.some((tr) => tr.mediaType === "video")), Qe = Nd(
          ne,
          I.current,
          Ke && q.current
        );
        let ze;
        try {
          ze = await Wd(
            ge.profileId,
            Qe,
            ge.maxResponseToken,
            E.current.signal
          );
        } catch (Gn) {
          if (Gn.name === "AbortError" || !Ke || q.current)
            throw Gn;
          q.current = !0;
          const tr = Nd(ne, I.current, !0);
          ze = await Wd(
            ge.profileId,
            tr,
            ge.maxResponseToken,
            E.current.signal
          ), ve("warning", "Video attachments were skipped because the current model does not support them.");
        }
        const ct = {
          id: `bm-${Date.now()}-ai`,
          role: "assistant",
          content: ze
        }, pt = [...ne, ct];
        p(pt), a({ ...t, messages: pt });
      } catch (Ke) {
        Ke.name === "AbortError" ? ve("info", "Request was cancelled.") : (console.error("Brainstorm request failed:", Ke), ve("error", `Request failed: ${Ke.message}`)), Ue();
      } finally {
        b(!1), E.current = null;
      }
    },
    [t, a, We]
  ), nt = G.useMemo(
    () => ({ fields: l.fields, draftFields: l.draftFields }),
    [l.fields, l.draftFields]
  ), on = G.useCallback(
    async (ne) => {
      const ye = _t.getSettings();
      if (!ye.profileId) {
        ve("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      const Ue = ye.prompts.brainstormExtractPrompt?.content;
      if (!Ue) {
        ve("error", "The brainstorm card extraction prompt is missing from settings.");
        return;
      }
      fe(!0), B.current = new AbortController();
      try {
        await We(d);
        const ge = d.some((pt) => pt.images?.some((Gn) => Gn.mediaType === "video")), Ke = Nd(d, I.current, ge && q.current), Qe = [
          ...Dn.filter((pt) => nt.fields[pt]),
          ...Object.keys(nt.draftFields)
        ], ze = vN(Qe, _h(nt).length), ct = await B1(
          ye.profileId,
          [...Ke, { role: "user", content: bN(Ue, nt, ne) }],
          ze,
          mN,
          ye.defaultPromptEngineeringMode,
          Math.max(ye.maxResponseToken, gN),
          B.current.signal
        );
        _e({ response: ct, items: _N(nt, ct) });
      } catch (ge) {
        ge?.name === "AbortError" ? ve("info", "Extraction was cancelled.") : (console.error("Card extraction failed:", ge), ve("error", `Could not draft a card: ${ge.message}`));
      } finally {
        fe(!1), B.current = null;
      }
    },
    [d, nt, We]
  ), Tt = G.useCallback(
    (ne) => {
      if (!de) return;
      const ye = SN(de.response, ne);
      u(U1(nt, ye, "global")), _e(null);
    },
    [de, nt, u]
  ), U = G.useCallback(() => {
    B.current?.abort(), _e(null);
  }, []), W = G.useCallback(async () => {
    if (_) return;
    const ne = d.filter((ze) => !ze.isInitial), Ue = ne[ne.length - 1]?.role === "user";
    if (!g.trim() && N.length === 0 && !Ue) return;
    if (!g.trim() && N.length === 0 && Ue) {
      const ze = d;
      await ke(
        d,
        () => {
        },
        () => p(ze)
      );
      return;
    }
    let ge = [];
    if (N.length > 0)
      try {
        ge = await Promise.all(N.map((ze) => fN(ze)));
        for (let ze = 0; ze < ge.length; ze++)
          I.current.set(ge[ze].url, j[ze]);
      } catch (ze) {
        console.error("Upload failed:", ze), ve("error", `Upload failed: ${ze.message}`);
        return;
      }
    const Ke = {
      id: `bm-${Date.now()}`,
      role: "user",
      content: g.trim(),
      ...ge.length > 0 ? { images: ge } : {}
    }, Qe = [...d, Ke];
    ke(
      Qe,
      () => {
        p(Qe), y(""), M([]), L([]);
      },
      () => {
        p(Qe), a({ ...t, messages: Qe });
      }
    );
  }, [g, _, d, ke, N, j, t, a]), re = G.useCallback(async () => {
    if (_ || d.length === 0) return;
    const ne = d;
    let ye = [...d];
    const Ue = d.length - 1;
    d[Ue].role === "assistant" && (ye = d.slice(0, Ue)), await ke(
      ye,
      () => p(ye),
      () => p(ne)
    );
  }, [_, d, ke]), he = (ne) => {
    h(ne.id), w(ne.content), C(ne.images ? [...ne.images] : []);
  }, Ae = () => {
    h(null), w(""), C([]);
  }, oe = async () => {
    if (!m) return;
    const ne = d.findIndex((ct) => ct.id === m);
    if (ne === -1) return;
    if (d[ne].role === "assistant") {
      const ct = d.map(
        (pt) => pt.id === m ? { ...pt, content: x, images: T.length > 0 ? T : void 0 } : pt
      );
      p(ct), a({ ...t, messages: ct }), Ae();
      return;
    }
    if (!await d0.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ge = d, Ke = d.slice(0, ne), Qe = {
      ...d[ne],
      content: x,
      images: T.length > 0 ? T : void 0
    }, ze = [...Ke, Qe];
    Ae(), ke(
      ze,
      () => p(ze),
      () => p(ge)
    );
  }, pe = async (ne) => {
    const ye = d.findIndex((ze) => ze.id === ne);
    if (ye === -1) return;
    const ge = !!d[ye].isInitial;
    if (!await d0.Popup.show.confirm(
      "Delete Message",
      ge ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let Qe;
    ge ? Qe = d.filter((ze) => ze.isInitial && ze.id !== ne) : Qe = d.slice(0, ye), p(Qe), a({ ...t, messages: Qe }), ve("info", "Message history has been updated.");
  }, Ze = () => {
    E.current?.abort();
  }, Be = d.filter((ne) => ne.isInitial), Xe = d.filter((ne) => !ne.isInitial), Mn = Xe.filter((ne) => ne.role === "assistant").at(-1)?.id, ut = Xe[Xe.length - 1], et = !!(ut && ut.role === "user"), tn = Xe.some((ne) => ne.role === "assistant");
  return /* @__PURE__ */ S.jsxs("div", { className: "brainstorm-chat", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: t.name }),
      /* @__PURE__ */ S.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ S.jsx(
          ce,
          {
            onClick: () => on(),
            disabled: !tn || _ || $,
            title: tn ? "Turn this conversation into character card fields" : "Brainstorm a little first — there is nothing to draft from yet",
            children: $ ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
              " Drafting"
            ] }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }),
              " Draft Card"
            ] })
          }
        ),
        /* @__PURE__ */ S.jsxs(ce, { onClick: r, title: "Back to sessions", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-left" }),
          " Back"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      Be.length > 0 && /* @__PURE__ */ S.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ S.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ S.jsx("div", { className: "initial-messages-content", children: Be.map(
          (ne) => m === ne.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ S.jsx(en, { value: x, onChange: (ye) => w(ye.target.value), rows: 5 }),
            T.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "pending-images-preview", children: T.map((ye, Ue) => /* @__PURE__ */ S.jsxs("div", { className: "pending-image-item", children: [
              me(ye) ? /* @__PURE__ */ S.jsxs("div", { className: "video-thumbnail-wrapper", children: [
                /* @__PURE__ */ S.jsx("video", { src: ye.url, muted: !0, preload: "metadata" }),
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-play video-play-icon" })
              ] }) : /* @__PURE__ */ S.jsx("img", { src: ye.url, alt: ye.name }),
              /* @__PURE__ */ S.jsx(
                ce,
                {
                  className: "remove-image-button danger_button",
                  onClick: () => C((ge) => ge.filter((Ke, Qe) => Qe !== Ue)),
                  title: "Remove image",
                  children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" })
                }
              )
            ] }, Ue)) }),
            /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ S.jsxs(ce, { onClick: oe, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ S.jsxs(ce, { onClick: Ae, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, ne.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper initial-context ${ne.role}`, children: [
            /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${ne.role} initial`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: ne.content }) }),
            !_ && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ S.jsx(
                ce,
                {
                  className: "message-action-button",
                  onClick: () => he(ne),
                  title: "Edit Context",
                  children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ S.jsx(
                ce,
                {
                  className: "message-action-button danger_button",
                  onClick: () => pe(ne.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, ne.id)
        ) })
      ] }),
      Xe.map((ne) => {
        const ye = ne.role === "assistant" && ne.id === Mn;
        return m === ne.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ S.jsx(en, { value: x, onChange: (ge) => w(ge.target.value), rows: 10 }),
          T.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "pending-images-preview", children: T.map((ge, Ke) => /* @__PURE__ */ S.jsxs("div", { className: "pending-image-item", children: [
            me(ge) ? /* @__PURE__ */ S.jsxs("div", { className: "video-thumbnail-wrapper", children: [
              /* @__PURE__ */ S.jsx("video", { src: ge.url, muted: !0, preload: "metadata" }),
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-play video-play-icon" })
            ] }) : /* @__PURE__ */ S.jsx("img", { src: ge.url, alt: ge.name }),
            /* @__PURE__ */ S.jsx(
              ce,
              {
                className: "remove-image-button danger_button",
                onClick: () => C((Qe) => Qe.filter((ze, ct) => ct !== Ke)),
                title: "Remove image",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" })
              }
            )
          ] }, Ke)) }),
          /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ S.jsxs(ce, { onClick: oe, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
              " ",
              ne.role === "assistant" ? "Save" : "Save & Fork"
            ] }),
            /* @__PURE__ */ S.jsxs(ce, { onClick: Ae, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, ne.id) : /* @__PURE__ */ S.jsx("div", { className: `message-bubble-wrapper ${ne.role}`, children: /* @__PURE__ */ S.jsxs("div", { className: `message-bubble ${ne.role}`, children: [
          !_ && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
            /* @__PURE__ */ S.jsx(
              ce,
              {
                className: "message-action-button",
                onClick: () => he(ne),
                title: ne.role === "assistant" ? "Edit Message" : "Edit and Fork",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            ye && /* @__PURE__ */ S.jsx(
              ce,
              {
                className: "message-action-button",
                onClick: re,
                title: "Regenerate response",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-right" })
              }
            ),
            /* @__PURE__ */ S.jsx(
              ce,
              {
                className: "message-action-button danger_button",
                onClick: () => pe(ne.id),
                title: "Delete Message",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          ne.role === "assistant" ? /* @__PURE__ */ S.jsx(F1, { content: ne.content }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ S.jsx("div", { className: "message-content", children: ne.content }),
            ne.images && ne.images.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "message-images", children: ne.images.map(
              (ge, Ke) => me(ge) ? /* @__PURE__ */ S.jsxs(
                "div",
                {
                  className: "video-thumbnail-wrapper",
                  title: ge.name,
                  onClick: () => window.open(ge.url, "_blank"),
                  children: [
                    /* @__PURE__ */ S.jsx("video", { src: ge.url, muted: !0, preload: "metadata" }),
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-play video-play-icon" })
                  ]
                },
                Ke
              ) : /* @__PURE__ */ S.jsx(
                "img",
                {
                  src: ge.url,
                  alt: ge.name,
                  title: ge.name,
                  onClick: () => window.open(ge.url, "_blank")
                },
                Ke
              )
            ) })
          ] })
        ] }) }, ne.id);
      }),
      _ && /* @__PURE__ */ S.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ S.jsx(ce, { onClick: Ze, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: D })
    ] }),
    j.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "pending-images-preview", children: j.map((ne, ye) => /* @__PURE__ */ S.jsxs(
      "div",
      {
        className: `pending-image-item ${ae(N[ye]) ? "video-thumbnail-wrapper" : ""}`,
        children: [
          ae(N[ye]) ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ S.jsx("video", { src: ne, muted: !0, preload: "metadata" }),
            /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-play video-play-icon" })
          ] }) : /* @__PURE__ */ S.jsx("img", { src: ne, alt: N[ye]?.name || "pending" }),
          /* @__PURE__ */ S.jsx(
            ce,
            {
              className: "remove-image-button danger_button",
              onClick: () => X(ye),
              title: "Remove image",
              children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" })
            }
          )
        ]
      },
      ye
    )) }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        "input",
        {
          ref: Y,
          type: "file",
          accept: "image/*,video/*",
          multiple: !0,
          style: { display: "none" },
          onChange: Ee
        }
      ),
      /* @__PURE__ */ S.jsx(
        en,
        {
          value: g,
          onChange: (ne) => y(ne.target.value),
          placeholder: "Brainstorm ideas for your character...",
          rows: 3,
          disabled: _ || !!m,
          onKeyDown: (ne) => {
            ne.key === "Enter" && !ne.shiftKey && (ne.preventDefault(), W());
          },
          onPaste: xe
        }
      ),
      /* @__PURE__ */ S.jsx(
        ce,
        {
          className: "image-attach-button",
          onClick: () => Y.current?.click(),
          disabled: _ || !!m,
          title: "Attach image or video",
          children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paperclip" })
        }
      ),
      /* @__PURE__ */ S.jsx(
        ce,
        {
          onClick: W,
          disabled: _ || !!m || !g.trim() && N.length === 0 && !et,
          children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane" })
        }
      )
    ] }),
    de && /* @__PURE__ */ S.jsx(
      Ia,
      {
        type: mn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          pN,
          {
            justification: de.response.justification,
            items: de.items,
            isExtracting: $,
            onApply: Tt,
            onReExtract: (ne) => on(ne),
            onCancel: U
          }
        ),
        onComplete: U,
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, h0 = SillyTavern.getContext(), EN = 5, wN = ({
  contextToSend: t,
  sessionForContext: r,
  onApplyToCard: a,
  isActive: s = !0
}) => {
  const [l, u] = G.useState([]), [f, d] = G.useState(null), [p, g] = G.useState(!0);
  G.useEffect(() => {
    let C = !0;
    return iN().then(({ value: D, recovered: E }) => {
      if (!C) return;
      const N = Array.isArray(D) ? D : [], M = N.some((L) => L.saved === void 0), j = N.map((L) => ({ ...L, saved: L.saved ?? !0 }));
      u(j), M && f0(j), E && ve("warning", "Some saved brainstorm sessions were invalid and have been reset.");
    }).catch((D) => {
      console.error("Failed to load brainstorm sessions:", D), ve("warning", "Saved brainstorm sessions could not be loaded.");
    }).finally(() => {
      C && g(!1);
    }), () => {
      C = !1;
    };
  }, []);
  const y = G.useMemo(() => l.filter((C) => C.saved).sort((C, D) => new Date(D.createdAt).getTime() - new Date(C.createdAt).getTime()), [l]), _ = G.useMemo(() => l.filter((C) => !C.saved).sort((C, D) => new Date(D.createdAt).getTime() - new Date(C.createdAt).getTime()), [l]), b = (C) => {
    u(C), f0(C).then((D) => {
      D.persisted || (console.warn("Failed to save brainstorm sessions:", D.error), ve("warning", "Brainstorm session history could not be saved. Browser storage may be full."));
    });
  }, m = async () => {
    const C = `Brainstorm - ${(/* @__PURE__ */ new Date()).toLocaleString()}`;
    try {
      const D = _t.getSettings();
      if (!D.profileId) {
        ve("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      const E = {
        id: `bs-${Date.now()}`,
        name: C,
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
      }, N = await Y1(
        r.fields,
        r.draftFields,
        D.mainContextTemplatePreset,
        t,
        r
      );
      E.messages = N;
      let M = [...l];
      const j = M.filter((L) => !L.saved).sort((L, Y) => new Date(L.createdAt).getTime() - new Date(Y.createdAt).getTime());
      if (j.length >= EN) {
        const L = j[0];
        M = M.filter((Y) => Y.id !== L.id), f?.id === L.id && d(null);
      }
      M.push(E), b(M), d(E);
    } catch (D) {
      console.error("Failed to create brainstorm session:", D), ve("error", `Failed to create session: ${D.message}`);
    }
  }, h = (C) => {
    d(C);
  }, x = async (C) => {
    if (await h0.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const E = l.filter((N) => N.id !== C);
      b(E), f?.id === C && d(null);
    }
  }, w = async (C) => {
    const D = l.find((M) => M.id === C);
    if (!D) return;
    const E = await h0.Popup.show.input("Save Session", D.name);
    if (!E) return;
    const N = l.map((M) => M.id === C ? { ...M, saved: !0, name: E } : M);
    b(N), f?.id === C && d({ ...D, saved: !0, name: E });
  }, T = (C) => {
    const D = l.findIndex((N) => N.id === C.id), E = [...l];
    D !== -1 ? E[D] = C : E.push(C), b(E), d(C);
  };
  return f ? /* @__PURE__ */ S.jsx(
    xN,
    {
      session: f,
      isActive: s,
      onBack: () => d(null),
      onSessionUpdate: T,
      contextToSend: t,
      sessionForContext: r,
      onApplyToCard: a
    }
  ) : /* @__PURE__ */ S.jsxs("div", { className: "brainstorm-session-manager", children: [
    /* @__PURE__ */ S.jsx("div", { className: "popup_header", children: /* @__PURE__ */ S.jsx("h3", { children: "Brainstorm Sessions" }) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-actions", children: /* @__PURE__ */ S.jsxs(ce, { onClick: m, className: "menu_button", children: [
      /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-list", children: p ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : y.length === 0 && _.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      _.length > 0 && /* @__PURE__ */ S.jsxs("div", { className: "session-section", children: [
        /* @__PURE__ */ S.jsxs("h4", { className: "session-section-header", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-clock" }),
          " Workspace"
        ] }),
        _.map((C) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => h(C), children: [
            /* @__PURE__ */ S.jsx("span", { className: "session-name", children: C.name }),
            /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(C.createdAt).toLocaleString() })
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "session-item-actions", children: [
            /* @__PURE__ */ S.jsx(ce, { className: "menu_button", onClick: () => w(C.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-floppy-disk" }) }),
            /* @__PURE__ */ S.jsx(ce, { className: "danger_button", onClick: () => x(C.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
          ] })
        ] }, C.id))
      ] }),
      y.length > 0 && /* @__PURE__ */ S.jsxs("div", { className: "session-section", children: [
        /* @__PURE__ */ S.jsxs("h4", { className: "session-section-header", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-bookmark" }),
          " Saved"
        ] }),
        y.map((C) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => h(C), children: [
            /* @__PURE__ */ S.jsx("span", { className: "session-name", children: C.name }),
            /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(C.createdAt).toLocaleString() })
          ] }),
          /* @__PURE__ */ S.jsx(ce, { className: "danger_button", onClick: () => x(C.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
        ] }, C.id))
      ] })
    ] }) })
  ] });
};
function CN(t, r) {
  return {
    name: t.name?.value ?? "",
    description: t.description?.value ?? "",
    personality: t.personality?.value ?? "",
    scenario: t.scenario?.value ?? "",
    first_mes: t.first_mes?.value ?? "",
    mes_example: t.mes_example?.value ?? "",
    alternate_greetings: r.map((a) => a.value).filter(Boolean)
  };
}
function AN(t, r = []) {
  const a = new Set(t), s = r.filter((l) => l && !a.has(l));
  return [
    ...t.map((l) => ({ value: l, label: l })),
    ...s.map((l) => ({ value: l, label: `${l} (missing)` }))
  ];
}
const Fn = SillyTavern.getContext(), Td = () => ({
  selectedCharacterIndexes: Jt ? [String(Jt)] : [],
  selectedWorldNames: [],
  fields: Dn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Tr[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), NN = {
  name: { label: Tr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Tr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Tr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Tr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Tr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Tr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, TN = () => {
  const t = u1(), r = _t.getSettings(), [a, s] = G.useState(Td()), [l, u] = G.useState([]), [f, d] = G.useState(!0), [p, g] = G.useState("core"), [y, _] = G.useState(!1), [b, m] = G.useState([]), [h, x] = G.useState([]), [w, T] = G.useState(null), [C, D] = G.useState(null), [E, N] = G.useState(!1), [M, j] = G.useState(null);
  G.useEffect(() => {
    (async () => {
      d(!0), m(Fn.characters), x(dv);
      const W = (await tN()).value ?? {}, re = Td();
      if (W.fields && (re.fields = { ...re.fields, ...W.fields }), W.draftFields && (re.draftFields = W.draftFields), W.selectedCharacterIndexes && (re.selectedCharacterIndexes = W.selectedCharacterIndexes), W.selectedWorldNames && (re.selectedWorldNames = W.selectedWorldNames), W.lastLoadedCharacterId) {
        re.lastLoadedCharacterId = W.lastLoadedCharacterId;
        const he = Fn.characters.find((Ae) => Ae.avatar === W.lastLoadedCharacterId);
        he && T(he);
      }
      s(re), d(!1);
    })();
  }, []), G.useEffect(() => {
    f || nN(a).then((U) => {
      U.persisted || (console.warn("Failed to save Character Creator session:", U.error), ve("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [a, f]);
  const L = (U, W) => {
    _t.getSettings()[U] = W, _t.saveSettings(), t();
  }, Y = (U, W) => {
    _t.getSettings().contextToSend[U] = W, _t.saveSettings(), t();
  }, I = G.useCallback(
    (U, W, re, he) => {
      s((Ae) => {
        const oe = he ? "draftFields" : "fields", pe = { ...Ae[oe] };
        return pe[U] || (pe[U] = { value: "", prompt: "", label: U }), pe[U][re] = W, { ...Ae, [oe]: pe };
      });
    },
    []
  ), q = G.useMemo(
    () => Object.keys(a.fields).filter((U) => U.startsWith("alternate_greetings_")).sort((U, W) => parseInt(U.split("_")[2]) - parseInt(W.split("_")[2])).map((U) => a.fields[U]),
    [a.fields]
  ), $ = G.useCallback((U) => {
    s((W) => {
      const re = { ...W.fields };
      return Object.keys(re).forEach((he) => {
        he.startsWith("alternate_greetings_") && delete re[he];
      }), U.forEach((he, Ae) => {
        const oe = `alternate_greetings_${Ae + 1}`;
        re[oe] = { ...he, label: `Alternate_Greeting_${Ae + 1}` };
      }), { ...W, fields: re };
    });
  }, []), fe = G.useCallback(
    (U, W) => {
      I(U, "", "value", W);
    },
    [I]
  ), de = G.useCallback(
    async (U) => {
      await Fn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${a.draftFields[U].label}"?`
      ) && s((re) => {
        const he = { ...re.draftFields };
        return delete he[U], { ...re, draftFields: he };
      });
    },
    [a.draftFields]
  ), _e = G.useCallback(async () => {
    const U = await Fn.Popup.show.input("Enter Draft Field Name", "");
    if (!U?.trim()) return;
    const W = wu(U.trim());
    if (!W) return ve("error", "Invalid field name.");
    if (a.draftFields[W] || Dn.includes(W))
      return ve("warning", "Field name already exists.");
    s((re) => ({
      ...re,
      draftFields: { ...re.draftFields, [W]: { value: "", prompt: "", label: U } }
    })), g("draft");
  }, [a.draftFields]), B = (U) => {
    j({ type: "field", fieldId: U }), N(!0);
  }, ae = () => {
    j({ type: "global" }), N(!0);
  }, me = (U) => {
    s((W) => ({
      ...W,
      fields: { ...W.fields, ...U.fields },
      draftFields: { ...W.draftFields, ...U.draftFields }
    })), ve("success", "Changes from revise session applied."), N(!1);
  }, Le = G.useCallback((U) => {
    s((W) => ({
      ...W,
      fields: { ...W.fields, ...U.fields },
      draftFields: { ...W.draftFields, ...U.draftFields }
    })), g("core"), ve("success", "Card fields updated from the brainstorm conversation.");
  }, []), R = G.useCallback(
    async (U, W) => {
      if (!r.profileId) return ve("warning", "Please select a connection profile.");
      u((re) => [...re, U]);
      try {
        const re = Fn.extensionSettings.connectionManager?.profiles?.find(
          (ut) => ut.id === r.profileId
        );
        if (!re) throw new Error("Connection profile not found.");
        const he = {
          presetName: re?.preset,
          contextName: re?.context,
          instructName: re?.instruct,
          targetCharacterId: Jt,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Jn
        }, Ae = r.contextToSend.messages;
        switch (Ae.type) {
          case "none":
            he.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            he.messageIndexesBetween = { start: 0, end: Ae.first ?? 10 };
            break;
          case "last":
            const ut = Fn.chat?.length ?? 0, et = Ae.last ?? 10;
            he.messageIndexesBetween = {
              end: Math.max(0, ut - 1),
              start: Math.max(0, ut - et)
            };
            break;
          case "range":
            he.messageIndexesBetween = {
              start: Ae.range?.start ?? 0,
              end: Ae.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        Jt === void 0 && !Jn && (he.messageIndexesBetween = { start: -1, end: -1 });
        const oe = {};
        await Promise.all(
          dv.filter((ut) => !oe[ut]).map(async (ut) => {
            const et = await Fn.loadWorldInfo(ut);
            et && (oe[ut] = H1(et, { includeDisabled: !0 }));
          })
        );
        const pe = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete pe.stDescription, (!r.contextToSend.charCard || a.selectedCharacterIndexes.length === 0) && delete pe.charDefinitions, (!r.contextToSend.worldInfo || a.selectedWorldNames.length === 0) && delete pe.lorebookDefinitions, r.contextToSend.existingFields || delete pe.existingFieldDefinitions, r.contextToSend.persona || delete pe.personaDescription, delete pe.worldInfoCharDefinition;
        const Ze = r.mainContextTemplatePresets[r.mainContextTemplatePreset] ?? r.mainContextTemplatePresets.default;
        if (!Ze) throw new Error("Main context template preset not found.");
        const Be = await tw({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset]?.content ?? "",
          buildPromptOptions: he,
          continueFrom: W,
          session: a,
          allCharacters: b,
          entriesGroupByWorldName: oe,
          promptSettings: pe,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`]?.content ?? "" },
          mainContextList: Ze.prompts.filter((ut) => ut.enabled),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: U,
          outputFormat: r.outputFormat
        }), Xe = U.startsWith("alternate_greetings_"), Mn = !Xe && !Dn.includes(U);
        if (Xe) {
          const ut = parseInt(U.split("_")[2]) - 1;
          q[ut] && $(q.map((et, tn) => tn === ut ? { ...et, value: Be } : et));
        } else
          I(U, Be, "value", Mn);
      } catch (re) {
        console.error(re), ve("error", re.message || String(re));
      } finally {
        u((re) => re.filter((he) => he !== U));
      }
    },
    [a, r, b, q, I, $]
  ), J = G.useCallback(async () => {
    await Fn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(Td()), T(null));
  }, []), ie = G.useCallback(
    (U) => {
      if (!w) return ve("warning", "Please load a character to compare against.");
      let W, re, he;
      typeof U == "number" ? (W = q[U]?.value ?? "", re = w.data?.alternate_greetings?.[U] ?? "", he = `Alternate_Greeting_${U + 1}`) : (W = a.fields[U]?.value ?? "", re = w[U] ?? w.data?.[U] ?? "", he = Tr[U]), D({ original: re, current: W, fieldName: he });
    },
    [w, a.fields, q]
  ), se = G.useCallback(
    async (U) => {
      const W = b[parseInt(U)];
      if (!W || Dn.some((oe) => a.fields[oe].value.trim() !== "") && !await Fn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const he = { ...a.fields };
      Dn.forEach((oe) => {
        he[oe] = { value: W[oe] ?? W.data?.[oe] ?? "", prompt: "", label: Tr[oe] };
      });
      const Ae = (W.data?.alternate_greetings ?? []).map((oe) => ({ value: oe, prompt: "" }));
      T(W), s((oe) => ({ ...oe, fields: he, lastLoadedCharacterId: W.avatar })), $(Ae);
    },
    [b, a.fields, $]
  ), le = G.useCallback(async () => {
    if (Jn) {
      ve("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (Jt === void 0) {
      ve("warning", "No character chat is currently open.");
      return;
    }
    await se(String(Jt));
  }, [se]), je = () => q.map((U) => U.value).filter((U) => U.trim() !== ""), X = async () => {
    if (!a.fields.name.value) return ve("warning", "Please provide a character name.");
    if (!await Fn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const W = {
      name: a.fields.name.value,
      description: a.fields.description.value,
      personality: a.fields.personality.value,
      scenario: a.fields.scenario.value,
      first_mes: a.fields.first_mes.value,
      mes_example: a.fields.mes_example.value,
      data: {
        alternate_greetings: je(),
        tags: [],
        avatar: "none",
        name: a.fields.name.value,
        description: a.fields.description.value,
        first_mes: a.fields.first_mes.value,
        mes_example: a.fields.mes_example.value,
        personality: a.fields.personality.value,
        scenario: a.fields.scenario.value
      },
      avatar: "none",
      tags: [],
      spec: "chara_card_v3",
      spec_version: "3.0"
    };
    try {
      await U2(W, !0);
    } catch (re) {
      ve("error", `Failed to create character: ${re.message}`);
    }
  }, xe = async () => {
    if (!w) return ve("warning", "Please load a character to override.");
    if (!await Fn.Popup.show.confirm(
      "Override Character",
      `Override "${w.name}"? This cannot be undone.`
    )) return;
    const W = {
      ...w,
      name: a.fields.name.value,
      description: a.fields.description.value,
      personality: a.fields.personality.value,
      scenario: a.fields.scenario.value,
      first_mes: a.fields.first_mes.value,
      mes_example: a.fields.mes_example.value,
      data: {
        ...w.data,
        alternate_greetings: je(),
        name: a.fields.name.value,
        description: a.fields.description.value,
        first_mes: a.fields.first_mes.value,
        mes_example: a.fields.mes_example.value,
        personality: a.fields.personality.value,
        scenario: a.fields.scenario.value
      }
    };
    try {
      await F2(W, !0), ve("success", `Character "${W.name}" updated!`);
    } catch (re) {
      ve("error", `Failed to override character: ${re.message}`);
    }
  }, Ee = () => {
    const U = JSON.stringify({ draftFields: a.draftFields, version: s1 }, null, 2), W = new Blob([U], { type: "application/json" }), re = document.createElement("a");
    re.href = URL.createObjectURL(W), re.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, re.click(), URL.revokeObjectURL(re.href);
  }, Ye = () => {
    const U = document.createElement("input");
    U.type = "file", U.accept = ".json", U.onchange = async () => {
      const W = U.files?.[0];
      if (W)
        try {
          const re = await W.text(), he = JSON.parse(re);
          if (!he.draftFields) throw new Error("Invalid file format.");
          (Object.keys(a.draftFields).length > 0 ? await Fn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((oe) => ({ ...oe, draftFields: he.draftFields })), ve("success", "Draft fields imported."));
        } catch (re) {
          ve("error", `Import failed: ${re.message}`);
        }
    }, U.click();
  }, We = G.useMemo(
    () => b.map((U, W) => ({ value: String(W), label: U.name })),
    [b]
  ), ke = G.useMemo(
    () => h.map((U) => ({ value: U, label: U })),
    [h]
  ), nt = G.useMemo(
    () => AN(h, a.selectedWorldNames),
    [h, a.selectedWorldNames]
  ), on = G.useMemo(
    () => Object.keys(r.promptPresets).map((U) => ({ value: U, label: U })),
    [r.promptPresets]
  ), Tt = G.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((U) => ({ value: U, label: U })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ S.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ S.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ S.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ S.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ S.jsx(
            l1,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (U) => L("profileId", U?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Context to Send" }),
          /* @__PURE__ */ S.jsxs("div", { className: "context-options", children: [
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.stDescription,
                  onChange: (U) => Y("stDescription", U.target.checked)
                }
              ),
              " ",
              "Description of SillyTavern & Char Card"
            ] }),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.persona,
                  onChange: (U) => Y("persona", U.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (Jt !== void 0 || Jn) && /* @__PURE__ */ S.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ S.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ S.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (U) => Y("messages", {
                    ...r.contextToSend.messages,
                    type: U.target.value
                  }),
                  children: [
                    /* @__PURE__ */ S.jsx("option", { value: "none", children: "None" }),
                    /* @__PURE__ */ S.jsx("option", { value: "all", children: "All Messages" }),
                    /* @__PURE__ */ S.jsx("option", { value: "first", children: "First X Messages" }),
                    /* @__PURE__ */ S.jsx("option", { value: "last", children: "Last X Messages" }),
                    /* @__PURE__ */ S.jsx("option", { value: "range", children: "Range" })
                  ]
                }
              ),
              r.contextToSend.messages.type === "first" && /* @__PURE__ */ S.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ S.jsxs("label", { children: [
                "First",
                " ",
                /* @__PURE__ */ S.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.first ?? 10,
                    onChange: (U) => Y("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(U.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "last" && /* @__PURE__ */ S.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ S.jsxs("label", { children: [
                "Last",
                " ",
                /* @__PURE__ */ S.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.last ?? 10,
                    onChange: (U) => Y("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(U.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "range" && /* @__PURE__ */ S.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ S.jsxs("label", { children: [
                "Range:",
                " ",
                /* @__PURE__ */ S.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "0",
                    placeholder: "Start",
                    value: r.contextToSend.messages.range?.start ?? 0,
                    onChange: (U) => Y("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: parseInt(U.target.value) || 0
                      }
                    })
                  }
                ),
                " ",
                "to",
                " ",
                /* @__PURE__ */ S.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    placeholder: "End",
                    value: r.contextToSend.messages.range?.end ?? 10,
                    onChange: (U) => Y("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(U.target.value) || 10 }
                    })
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.charCard,
                  onChange: (U) => Y("charCard", U.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ S.jsx(
              iu,
              {
                items: We,
                value: a.selectedCharacterIndexes,
                onChange: (U) => s((W) => ({ ...W, selectedCharacterIndexes: U })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.worldInfo,
                  onChange: (U) => Y("worldInfo", U.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ S.jsx(
              iu,
              {
                items: nt,
                value: a.selectedWorldNames,
                onChange: (U) => s((W) => ({ ...W, selectedWorldNames: U })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.existingFields,
                  onChange: (U) => Y("existingFields", U.target.checked)
                }
              ),
              " ",
              "Existing Field Content"
            ] }),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.dontSendOtherGreetings,
                  onChange: (U) => Y("dontSendOtherGreetings", U.target.checked)
                }
              ),
              " ",
              "Don't send other alternate greetings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Generation Options" }),
          /* @__PURE__ */ S.jsxs("label", { title: "You can edit in extension settings", children: [
            "Main Context Template",
            /* @__PURE__ */ S.jsx(
              Nu,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: Tt,
                value: r.mainContextTemplatePreset,
                onChange: (U) => L("mainContextTemplatePreset", U ?? "default")
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Max Context Tokens",
            /* @__PURE__ */ S.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.maxContextType,
                onChange: (U) => L("maxContextType", U.target.value),
                children: [
                  /* @__PURE__ */ S.jsx("option", { value: "profile", children: "Use profile preset" }),
                  /* @__PURE__ */ S.jsx("option", { value: "sampler", children: "Use active preset" }),
                  /* @__PURE__ */ S.jsx("option", { value: "custom", children: "Custom" })
                ]
              }
            )
          ] }),
          r.maxContextType === "custom" && /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: r.maxContextValue,
              onChange: (U) => L("maxContextValue", parseInt(U.target.value) || 16384)
            }
          ),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Max Response Tokens",
            /* @__PURE__ */ S.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                value: r.maxResponseToken,
                onChange: (U) => L("maxResponseToken", parseInt(U.target.value) || 1024)
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Thinking Level",
            /* @__PURE__ */ S.jsx(
              "select",
              {
                className: "text_pole",
                value: r.thinkingLevel ?? "default",
                onChange: (U) => L("thinkingLevel", U.target.value),
                children: rw.map((U) => /* @__PURE__ */ S.jsx("option", { value: U.value, children: U.label }, U.value))
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Output Format",
            /* @__PURE__ */ S.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.outputFormat,
                onChange: (U) => L("outputFormat", U.target.value),
                children: [
                  /* @__PURE__ */ S.jsx("option", { value: "none", children: "Plain Text" }),
                  /* @__PURE__ */ S.jsx("option", { value: "xml", children: "XML" }),
                  /* @__PURE__ */ S.jsx("option", { value: "json", children: "JSON" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ S.jsx(
            Nu,
            {
              label: "Prompt Preset",
              items: on,
              value: r.promptPreset,
              onChange: (U) => L("promptPreset", U ?? "default"),
              onItemsChange: (U) => L(
                "promptPresets",
                U.reduce(
                  (W, re) => ({ ...W, [re.value]: r.promptPresets[re.value] ?? { content: "" } }),
                  {}
                )
              ),
              enableCreate: !0,
              enableDelete: !0,
              enableRename: !0,
              readOnlyValues: ["default"]
            }
          ),
          /* @__PURE__ */ S.jsx(
            en,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (U) => L("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: U.target.value }
              }),
              rows: 4
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "wide-column", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "character-field-actions", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "toolbar-group", children: [
            /* @__PURE__ */ S.jsx("div", { className: "toolbar-group-dropdown", title: "Load Character Data", children: /* @__PURE__ */ S.jsx(
              iu,
              {
                items: We,
                value: w ? [String(b.indexOf(w))] : [],
                onChange: (U) => se(U[0]),
                multiple: !1,
                enableSearch: !0,
                placeholder: "Load Character..."
              }
            ) }),
            /* @__PURE__ */ S.jsxs(
              ce,
              {
                onClick: le,
                disabled: !!Jn || Jt === void 0,
                title: "Load the character from the currently open chat",
                children: [
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-user" }),
                  " Load Current"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "toolbar-group", children: [
            /* @__PURE__ */ S.jsxs(ce, { onClick: X, title: "Save as a new character", children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-floppy-disk" }),
              " Save New"
            ] }),
            /* @__PURE__ */ S.jsxs(ce, { onClick: xe, disabled: !w, title: "Override loaded character", children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pen-to-square" }),
              " Override"
            ] }),
            r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ S.jsx(
              iu,
              {
                items: ke,
                placeholder: "Save as WI Entry",
                closeOnSelect: !0,
                value: [],
                onChange: (U) => {
                },
                onBeforeSelection: async (U, W) => {
                  if (!a.fields.name.value)
                    return ve("warning", "Please enter a name first."), !1;
                  const re = W[0], Ae = Yt.compile(r.prompts.worldInfoCharDefinition.content)({
                    character: CN(a.fields, q)
                  }), oe = {
                    uid: -1,
                    key: [a.fields.name.value],
                    content: Ae,
                    comment: a.fields.name.value,
                    disable: !1,
                    keysecondary: []
                  };
                  try {
                    await _x({ entry: oe, selectedWorldName: re, operation: "add" }), ve("success", `Entry added to ${re}.`);
                  } catch (pe) {
                    ve("error", `Failed to add WI Entry: ${pe.message}`);
                  }
                  return !1;
                }
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "toolbar-group", children: [
            /* @__PURE__ */ S.jsxs(ce, { onClick: J, title: "Clear all fields", children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-left" }),
              " Reset"
            ] }),
            /* @__PURE__ */ S.jsx(
              ce,
              {
                onClick: ae,
                title: "Open global revision sessions to edit multiple fields at once",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ S.jsx(
            ce,
            {
              onClick: () => g("core"),
              className: `menu_button tab-button ${p === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ S.jsx(
            ce,
            {
              onClick: () => g("draft"),
              className: `menu_button tab-button ${p === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ S.jsx(
            ce,
            {
              onClick: () => {
                _(!0), g("brainstorm");
              },
              className: `menu_button tab-button ${p === "brainstorm" ? "active" : ""}`,
              children: "Brainstorm"
            }
          ),
          /* @__PURE__ */ S.jsx("div", { className: "right-aligned", children: p === "draft" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ S.jsxs(ce, { onClick: _e, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ S.jsx(ce, { onClick: Ee, children: "Export" }),
            /* @__PURE__ */ S.jsx(ce, { onClick: Ye, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "tab-content-area", children: [
          p === "core" && /* @__PURE__ */ S.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ S.jsx("h3", { children: "Core Character Fields" }),
            Dn.map((U) => {
              const W = NN[U];
              return W ? /* @__PURE__ */ S.jsx(
                Iy,
                {
                  fieldId: U,
                  label: W.label,
                  value: a.fields[U]?.value ?? "",
                  prompt: a.fields[U]?.prompt ?? "",
                  large: W.large,
                  rows: W.rows,
                  promptEnabled: W.promptEnabled,
                  isGenerating: l.includes(U),
                  onValueChange: (re, he) => I(re, he, "value", !1),
                  onPromptChange: (re, he) => I(re, he, "prompt", !1),
                  onGenerate: R,
                  onContinue: (re) => R(re, a.fields[re].value),
                  onClear: (re) => fe(re, !1),
                  onCompare: ie,
                  onOpenReviseSessions: B
                },
                U
              ) : null;
            }),
            /* @__PURE__ */ S.jsx(
              pw,
              {
                greetings: q,
                onGreetingsChange: $,
                isGenerating: l.some((U) => U.startsWith("alternate_greetings_")),
                onGenerate: (U) => R(`alternate_greetings_${U + 1}`),
                onContinue: (U) => R(`alternate_greetings_${U + 1}`, q[U].value),
                onCompare: ie
              }
            )
          ] }),
          p === "draft" && /* @__PURE__ */ S.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ S.jsx("h3", { children: "Draft Fields" }),
            Object.entries(a.draftFields).map(([U, W]) => /* @__PURE__ */ S.jsx(
              Iy,
              {
                fieldId: U,
                label: W.label,
                value: W.value,
                prompt: W.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: l.includes(U),
                onValueChange: (re, he) => I(re, he, "value", !0),
                onPromptChange: (re, he) => I(re, he, "prompt", !0),
                onGenerate: R,
                onContinue: (re) => R(re, a.draftFields[re].value),
                onClear: (re) => fe(re, !0),
                onDelete: de
              },
              U
            ))
          ] }),
          y && /* @__PURE__ */ S.jsx("div", { className: `card tab-content ${p === "brainstorm" ? "active" : ""}`, children: /* @__PURE__ */ S.jsx(
            wN,
            {
              isActive: p === "brainstorm",
              contextToSend: r.contextToSend,
              onApplyToCard: Le,
              sessionForContext: {
                fields: a.fields,
                draftFields: a.draftFields,
                selectedCharacterIndexes: a.selectedCharacterIndexes,
                selectedWorldNames: a.selectedWorldNames
              }
            }
          ) })
        ] })
      ] })
    ] }),
    C && /* @__PURE__ */ S.jsx(
      Ia,
      {
        type: mn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          kw,
          {
            originalContent: C.original,
            newContent: C.current,
            fieldName: C.fieldName
          }
        ),
        onComplete: () => D(null),
        options: { wide: !0 }
      }
    ),
    E && M && /* @__PURE__ */ S.jsx(
      Ia,
      {
        type: mn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          sN,
          {
            target: M,
            onClose: () => N(!1),
            onApply: me,
            initialState: { fields: a.fields, draftFields: a.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: a.selectedCharacterIndexes,
              selectedWorldNames: a.selectedWorldNames
            }
          }
        ),
        onComplete: () => N(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, ON = () => {
  const [t, r] = G.useState(!1), a = G.useCallback(() => r(!0), []), s = G.useCallback(() => r(!1), []);
  return G.useEffect(() => (window.openCharacterCreatorPopup = a, () => {
    window.openCharacterCreatorPopup === a && delete window.openCharacterCreatorPopup;
  }), [a]), t ? /* @__PURE__ */ S.jsx(
    Ia,
    {
      content: /* @__PURE__ */ S.jsx(TN, {}),
      type: mn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, X1 = SillyTavern.getContext(), p0 = "charCreator-icon";
async function DN() {
  const t = document.querySelector("#extensions_settings");
  if (!t) {
    console.error(`[${qn}] #extensions_settings not found; settings panel not rendered.`);
    return;
  }
  const r = await X1.renderExtensionTemplateAsync(
    `third-party/${qn}`,
    "templates/settings"
  );
  t.insertAdjacentHTML("beforeend", r);
  const a = document.createElement("div"), s = document.querySelector(".charCreator_settings .inline-drawer-content");
  s && (s.prepend(a), Av.createRoot(a).render(
    /* @__PURE__ */ S.jsx(gu.StrictMode, { children: /* @__PURE__ */ S.jsx(dw, {}) })
  ));
  const l = `<div class="menu_button fa-solid fa-user-astronaut interactable ${p0}" title="Character Creator"></div>`, u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], f = document.createElement("div");
  document.body.appendChild(f), Av.createRoot(f).render(
    /* @__PURE__ */ S.jsx(gu.StrictMode, { children: /* @__PURE__ */ S.jsx(ON, {}) })
  ), u.forEach((p) => {
    if (!p || p.querySelector(`.${p0}`)) return;
    const g = document.createElement("div");
    g.innerHTML = l.trim();
    const y = g.firstChild;
    y && (p.prepend(y), y.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function MN() {
  return !!X1.ConnectionManagerRequestService;
}
MN() ? iw().then(() => DN()).catch((t) => {
  console.error(`[${qn}] Initialization failed:`, t), ve("error", `[${qn}] Initialization failed: ${t?.message ?? t}`);
}) : ve("error", `[${qn}] Make sure ST is updated.`);
export {
  DN as init
};
