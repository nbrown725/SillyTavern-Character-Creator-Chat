import { renderStoryString as W_, persona_description_positions as av } from "../../../../power-user.js";
import { parseMesExamples as e2, baseChatReplace as t2, chat_metadata as Ls, getMaxContextSize as n2, name1 as xr, name2 as Kr, this_chid as Ht, extension_prompt_types as wa, depth_prompt_role_default as r2, depth_prompt_depth_default as a2 } from "../../../../../script.js";
import { createWorldInfoEntry as i2, world_info_include_names as s2, wi_anchor_position as o2, world_names as iv } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as l2, formatInstructModeSystemPrompt as u2 } from "../../../../instruct-mode.js";
import { appendFileContent as c2 } from "../../../../chats.js";
import { setOpenAIMessages as f2, setOpenAIMessageExamples as d2, formatWorldInfo as h2, getPromptPosition as p2, getPromptRole as m2, prepareOpenAIMessages as g2 } from "../../../../openai.js";
import { metadata_keys as Is } from "../../../../authors-note.js";
import { getGroupDepthPrompts as v2, selected_group as Fn } from "../../../../group-chats.js";
import { getRegexedString as y2, regex_placement as sv } from "../../../regex/engine.js";
import { removeFromArray as ov, runAfterAnimation as b2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as wi, fixToastrForDialogs as Yf } from "../../../../popup.js";
import lv from "../../../../../lib/dialog-polyfill.esm.js";
function l0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Xf = { exports: {} }, Ps = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uv;
function _2() {
  if (uv) return Ps;
  uv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(s, l, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      u = {};
      for (var p in l)
        p !== "key" && (u[p] = l[p]);
    } else u = l;
    return l = u.ref, {
      $$typeof: t,
      type: s,
      key: f,
      ref: l !== void 0 ? l : null,
      props: u
    };
  }
  return Ps.Fragment = r, Ps.jsx = i, Ps.jsxs = i, Ps;
}
var cv;
function S2() {
  return cv || (cv = 1, Xf.exports = _2()), Xf.exports;
}
var x = S2(), $f = { exports: {} }, Pe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fv;
function x2() {
  if (fv) return Pe;
  fv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function b(R) {
    return R === null || typeof R != "object" ? null : (R = _ && R[_] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var v = {
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
  function E(R, W, se) {
    this.props = R, this.context = W, this.refs = S, this.updater = se || v;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(R, W) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, W, "setState");
  }, E.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function T() {
  }
  T.prototype = E.prototype;
  function A(R, W, se) {
    this.props = R, this.context = W, this.refs = S, this.updater = se || v;
  }
  var D = A.prototype = new T();
  D.constructor = A, d(D, E.prototype), D.isPureReactComponent = !0;
  var C = Array.isArray, N = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function k(R, W, se, ce, de, Ie) {
    return se = Ie.ref, {
      $$typeof: t,
      type: R,
      key: W,
      ref: se !== void 0 ? se : null,
      props: Ie
    };
  }
  function B(R, W) {
    return k(
      R.type,
      W,
      void 0,
      void 0,
      void 0,
      R.props
    );
  }
  function $(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }
  function I(R) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(se) {
      return W[se];
    });
  }
  var Z = /\/+/g;
  function K(R, W) {
    return typeof R == "object" && R !== null && R.key != null ? I("" + R.key) : W.toString(36);
  }
  function pe() {
  }
  function ge(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(pe, pe) : (R.status = "pending", R.then(
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
  function be(R, W, se, ce, de) {
    var Ie = typeof R;
    (Ie === "undefined" || Ie === "boolean") && (R = null);
    var X = !1;
    if (R === null) X = !0;
    else
      switch (Ie) {
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
              return X = R._init, be(
                X(R._payload),
                W,
                se,
                ce,
                de
              );
          }
      }
    if (X)
      return de = de(R), X = ce === "" ? "." + K(R, 0) : ce, C(de) ? (se = "", X != null && (se = X.replace(Z, "$&/") + "/"), be(de, W, se, "", function(Ye) {
        return Ye;
      })) : de != null && ($(de) && (de = B(
        de,
        se + (de.key == null || R && R.key === de.key ? "" : ("" + de.key).replace(
          Z,
          "$&/"
        ) + "/") + X
      )), W.push(de)), 1;
    X = 0;
    var Se = ce === "" ? "." : ce + ":";
    if (C(R))
      for (var Ee = 0; Ee < R.length; Ee++)
        ce = R[Ee], Ie = Se + K(ce, Ee), X += be(
          ce,
          W,
          se,
          Ie,
          de
        );
    else if (Ee = b(R), typeof Ee == "function")
      for (R = Ee.call(R), Ee = 0; !(ce = R.next()).done; )
        ce = ce.value, Ie = Se + K(ce, Ee++), X += be(
          ce,
          W,
          se,
          Ie,
          de
        );
    else if (Ie === "object") {
      if (typeof R.then == "function")
        return be(
          ge(R),
          W,
          se,
          ce,
          de
        );
      throw W = String(R), Error(
        "Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return X;
  }
  function U(R, W, se) {
    if (R == null) return R;
    var ce = [], de = 0;
    return be(R, ce, "", "", function(Ie) {
      return W.call(se, Ie, de++);
    }), ce;
  }
  function ne(R) {
    if (R._status === -1) {
      var W = R._result;
      W = W(), W.then(
        function(se) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = se);
        },
        function(se) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = se);
        }
      ), R._status === -1 && (R._status = 0, R._result = W);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var ve = typeof reportError == "function" ? reportError : function(R) {
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
  function Le() {
  }
  return Pe.Children = {
    map: U,
    forEach: function(R, W, se) {
      U(
        R,
        function() {
          W.apply(this, arguments);
        },
        se
      );
    },
    count: function(R) {
      var W = 0;
      return U(R, function() {
        W++;
      }), W;
    },
    toArray: function(R) {
      return U(R, function(W) {
        return W;
      }) || [];
    },
    only: function(R) {
      if (!$(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  }, Pe.Component = E, Pe.Fragment = i, Pe.Profiler = l, Pe.PureComponent = A, Pe.StrictMode = s, Pe.Suspense = h, Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, Pe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return N.H.useMemoCache(R);
    }
  }, Pe.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, Pe.cloneElement = function(R, W, se) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var ce = d({}, R.props), de = R.key, Ie = void 0;
    if (W != null)
      for (X in W.ref !== void 0 && (Ie = void 0), W.key !== void 0 && (de = "" + W.key), W)
        !M.call(W, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && W.ref === void 0 || (ce[X] = W[X]);
    var X = arguments.length - 2;
    if (X === 1) ce.children = se;
    else if (1 < X) {
      for (var Se = Array(X), Ee = 0; Ee < X; Ee++)
        Se[Ee] = arguments[Ee + 2];
      ce.children = Se;
    }
    return k(R.type, de, void 0, void 0, Ie, ce);
  }, Pe.createContext = function(R) {
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
  }, Pe.createElement = function(R, W, se) {
    var ce, de = {}, Ie = null;
    if (W != null)
      for (ce in W.key !== void 0 && (Ie = "" + W.key), W)
        M.call(W, ce) && ce !== "key" && ce !== "__self" && ce !== "__source" && (de[ce] = W[ce]);
    var X = arguments.length - 2;
    if (X === 1) de.children = se;
    else if (1 < X) {
      for (var Se = Array(X), Ee = 0; Ee < X; Ee++)
        Se[Ee] = arguments[Ee + 2];
      de.children = Se;
    }
    if (R && R.defaultProps)
      for (ce in X = R.defaultProps, X)
        de[ce] === void 0 && (de[ce] = X[ce]);
    return k(R, Ie, void 0, void 0, null, de);
  }, Pe.createRef = function() {
    return { current: null };
  }, Pe.forwardRef = function(R) {
    return { $$typeof: p, render: R };
  }, Pe.isValidElement = $, Pe.lazy = function(R) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: R },
      _init: ne
    };
  }, Pe.memo = function(R, W) {
    return {
      $$typeof: m,
      type: R,
      compare: W === void 0 ? null : W
    };
  }, Pe.startTransition = function(R) {
    var W = N.T, se = {};
    N.T = se;
    try {
      var ce = R(), de = N.S;
      de !== null && de(se, ce), typeof ce == "object" && ce !== null && typeof ce.then == "function" && ce.then(Le, ve);
    } catch (Ie) {
      ve(Ie);
    } finally {
      N.T = W;
    }
  }, Pe.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, Pe.use = function(R) {
    return N.H.use(R);
  }, Pe.useActionState = function(R, W, se) {
    return N.H.useActionState(R, W, se);
  }, Pe.useCallback = function(R, W) {
    return N.H.useCallback(R, W);
  }, Pe.useContext = function(R) {
    return N.H.useContext(R);
  }, Pe.useDebugValue = function() {
  }, Pe.useDeferredValue = function(R, W) {
    return N.H.useDeferredValue(R, W);
  }, Pe.useEffect = function(R, W, se) {
    var ce = N.H;
    if (typeof se == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return ce.useEffect(R, W);
  }, Pe.useId = function() {
    return N.H.useId();
  }, Pe.useImperativeHandle = function(R, W, se) {
    return N.H.useImperativeHandle(R, W, se);
  }, Pe.useInsertionEffect = function(R, W) {
    return N.H.useInsertionEffect(R, W);
  }, Pe.useLayoutEffect = function(R, W) {
    return N.H.useLayoutEffect(R, W);
  }, Pe.useMemo = function(R, W) {
    return N.H.useMemo(R, W);
  }, Pe.useOptimistic = function(R, W) {
    return N.H.useOptimistic(R, W);
  }, Pe.useReducer = function(R, W, se) {
    return N.H.useReducer(R, W, se);
  }, Pe.useRef = function(R) {
    return N.H.useRef(R);
  }, Pe.useState = function(R) {
    return N.H.useState(R);
  }, Pe.useSyncExternalStore = function(R, W, se) {
    return N.H.useSyncExternalStore(
      R,
      W,
      se
    );
  }, Pe.useTransition = function() {
    return N.H.useTransition();
  }, Pe.version = "19.1.1", Pe;
}
var dv;
function Jd() {
  return dv || (dv = 1, $f.exports = x2()), $f.exports;
}
var V = Jd();
const pu = /* @__PURE__ */ l0(V);
var Qf = { exports: {} }, Bs = {}, Kf = { exports: {} }, Jf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hv;
function E2() {
  return hv || (hv = 1, (function(t) {
    function r(U, ne) {
      var ve = U.length;
      U.push(ne);
      e: for (; 0 < ve; ) {
        var Le = ve - 1 >>> 1, R = U[Le];
        if (0 < l(R, ne))
          U[Le] = ne, U[ve] = R, ve = Le;
        else break e;
      }
    }
    function i(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var ne = U[0], ve = U.pop();
      if (ve !== ne) {
        U[0] = ve;
        e: for (var Le = 0, R = U.length, W = R >>> 1; Le < W; ) {
          var se = 2 * (Le + 1) - 1, ce = U[se], de = se + 1, Ie = U[de];
          if (0 > l(ce, ve))
            de < R && 0 > l(Ie, ce) ? (U[Le] = Ie, U[de] = ve, Le = de) : (U[Le] = ce, U[se] = ve, Le = se);
          else if (de < R && 0 > l(Ie, ve))
            U[Le] = Ie, U[de] = ve, Le = de;
          else break e;
        }
      }
      return ne;
    }
    function l(U, ne) {
      var ve = U.sortIndex - ne.sortIndex;
      return ve !== 0 ? ve : U.id - ne.id;
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
    var h = [], m = [], y = 1, _ = null, b = 3, v = !1, d = !1, S = !1, E = !1, T = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function C(U) {
      for (var ne = i(m); ne !== null; ) {
        if (ne.callback === null) s(m);
        else if (ne.startTime <= U)
          s(m), ne.sortIndex = ne.expirationTime, r(h, ne);
        else break;
        ne = i(m);
      }
    }
    function N(U) {
      if (S = !1, C(U), !d)
        if (i(h) !== null)
          d = !0, M || (M = !0, K());
        else {
          var ne = i(m);
          ne !== null && be(N, ne.startTime - U);
        }
    }
    var M = !1, k = -1, B = 5, $ = -1;
    function I() {
      return E ? !0 : !(t.unstable_now() - $ < B);
    }
    function Z() {
      if (E = !1, M) {
        var U = t.unstable_now();
        $ = U;
        var ne = !0;
        try {
          e: {
            d = !1, S && (S = !1, A(k), k = -1), v = !0;
            var ve = b;
            try {
              t: {
                for (C(U), _ = i(h); _ !== null && !(_.expirationTime > U && I()); ) {
                  var Le = _.callback;
                  if (typeof Le == "function") {
                    _.callback = null, b = _.priorityLevel;
                    var R = Le(
                      _.expirationTime <= U
                    );
                    if (U = t.unstable_now(), typeof R == "function") {
                      _.callback = R, C(U), ne = !0;
                      break t;
                    }
                    _ === i(h) && s(h), C(U);
                  } else s(h);
                  _ = i(h);
                }
                if (_ !== null) ne = !0;
                else {
                  var W = i(m);
                  W !== null && be(
                    N,
                    W.startTime - U
                  ), ne = !1;
                }
              }
              break e;
            } finally {
              _ = null, b = ve, v = !1;
            }
            ne = void 0;
          }
        } finally {
          ne ? K() : M = !1;
        }
      }
    }
    var K;
    if (typeof D == "function")
      K = function() {
        D(Z);
      };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), ge = pe.port2;
      pe.port1.onmessage = Z, K = function() {
        ge.postMessage(null);
      };
    } else
      K = function() {
        T(Z, 0);
      };
    function be(U, ne) {
      k = T(function() {
        U(t.unstable_now());
      }, ne);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, t.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : B = 0 < U ? Math.floor(1e3 / U) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, t.unstable_next = function(U) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = b;
      }
      var ve = b;
      b = ne;
      try {
        return U();
      } finally {
        b = ve;
      }
    }, t.unstable_requestPaint = function() {
      E = !0;
    }, t.unstable_runWithPriority = function(U, ne) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var ve = b;
      b = U;
      try {
        return ne();
      } finally {
        b = ve;
      }
    }, t.unstable_scheduleCallback = function(U, ne, ve) {
      var Le = t.unstable_now();
      switch (typeof ve == "object" && ve !== null ? (ve = ve.delay, ve = typeof ve == "number" && 0 < ve ? Le + ve : Le) : ve = Le, U) {
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
      return R = ve + R, U = {
        id: y++,
        callback: ne,
        priorityLevel: U,
        startTime: ve,
        expirationTime: R,
        sortIndex: -1
      }, ve > Le ? (U.sortIndex = ve, r(m, U), i(h) === null && U === i(m) && (S ? (A(k), k = -1) : S = !0, be(N, ve - Le))) : (U.sortIndex = R, r(h, U), d || v || (d = !0, M || (M = !0, K()))), U;
    }, t.unstable_shouldYield = I, t.unstable_wrapCallback = function(U) {
      var ne = b;
      return function() {
        var ve = b;
        b = ne;
        try {
          return U.apply(this, arguments);
        } finally {
          b = ve;
        }
      };
    };
  })(Jf)), Jf;
}
var pv;
function C2() {
  return pv || (pv = 1, Kf.exports = E2()), Kf.exports;
}
var Wf = { exports: {} }, Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mv;
function w2() {
  if (mv) return Bt;
  mv = 1;
  var t = Jd();
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
  }, l = Symbol.for("react.portal");
  function u(h, m, y) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
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
  return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Bt.createPortal = function(h, m) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(r(299));
    return u(h, m, null, y);
  }, Bt.flushSync = function(h) {
    var m = f.T, y = s.p;
    try {
      if (f.T = null, s.p = 2, h) return h();
    } finally {
      f.T = m, s.p = y, s.d.f();
    }
  }, Bt.preconnect = function(h, m) {
    typeof h == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(h, m));
  }, Bt.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, Bt.preinit = function(h, m) {
    if (typeof h == "string" && m && typeof m.as == "string") {
      var y = m.as, _ = p(y, m.crossOrigin), b = typeof m.integrity == "string" ? m.integrity : void 0, v = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      y === "style" ? s.d.S(
        h,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: _,
          integrity: b,
          fetchPriority: v
        }
      ) : y === "script" && s.d.X(h, {
        crossOrigin: _,
        integrity: b,
        fetchPriority: v,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, Bt.preinitModule = function(h, m) {
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
  }, Bt.preload = function(h, m) {
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
  }, Bt.preloadModule = function(h, m) {
    if (typeof h == "string")
      if (m) {
        var y = p(m.as, m.crossOrigin);
        s.d.m(h, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: y,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else s.d.m(h);
  }, Bt.requestFormReset = function(h) {
    s.d.r(h);
  }, Bt.unstable_batchedUpdates = function(h, m) {
    return h(m);
  }, Bt.useFormState = function(h, m, y) {
    return f.H.useFormState(h, m, y);
  }, Bt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Bt.version = "19.1.1", Bt;
}
var gv;
function u0() {
  if (gv) return Wf.exports;
  gv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Wf.exports = w2(), Wf.exports;
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
var vv;
function A2() {
  if (vv) return Bs;
  vv = 1;
  var t = C2(), r = Jd(), i = u0();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l(e) {
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
    for (var a = e, o = n; ; ) {
      var c = a.return;
      if (c === null) break;
      var g = c.alternate;
      if (g === null) {
        if (o = c.return, o !== null) {
          a = o;
          continue;
        }
        break;
      }
      if (c.child === g.child) {
        for (g = c.child; g; ) {
          if (g === a) return p(c), e;
          if (g === o) return p(c), n;
          g = g.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== o.return) a = c, o = g;
      else {
        for (var w = !1, O = c.child; O; ) {
          if (O === a) {
            w = !0, a = c, o = g;
            break;
          }
          if (O === o) {
            w = !0, o = c, a = g;
            break;
          }
          O = O.sibling;
        }
        if (!w) {
          for (O = g.child; O; ) {
            if (O === a) {
              w = !0, a = g, o = c;
              break;
            }
            if (O === o) {
              w = !0, o = g, a = c;
              break;
            }
            O = O.sibling;
          }
          if (!w) throw Error(s(189));
        }
      }
      if (a.alternate !== o) throw Error(s(190));
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
  var y = Object.assign, _ = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), A = Symbol.for("react.consumer"), D = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), I = Symbol.for("react.memo_cache_sentinel"), Z = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != "object" ? null : (e = Z && e[Z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var pe = Symbol.for("react.client.reference");
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === pe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case E:
        return "Profiler";
      case S:
        return "StrictMode";
      case N:
        return "Suspense";
      case M:
        return "SuspenseList";
      case $:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case v:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case A:
          return (e._context.displayName || "Context") + ".Consumer";
        case C:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return n = e.displayName || null, n !== null ? n : ge(e.type) || "Memo";
        case B:
          n = e._payload, e = e._init;
          try {
            return ge(e(n));
          } catch {
          }
      }
    return null;
  }
  var be = Array.isArray, U = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ve = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Le = [], R = -1;
  function W(e) {
    return { current: e };
  }
  function se(e) {
    0 > R || (e.current = Le[R], Le[R] = null, R--);
  }
  function ce(e, n) {
    R++, Le[R] = e.current, e.current = n;
  }
  var de = W(null), Ie = W(null), X = W(null), Se = W(null);
  function Ee(e, n) {
    switch (ce(X, n), ce(Ie, e), ce(de, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? kg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = kg(n), e = jg(n, e);
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
    se(de), ce(de, e);
  }
  function Ye() {
    se(de), se(Ie), se(X);
  }
  function We(e) {
    e.memoizedState !== null && ce(Se, e);
    var n = de.current, a = jg(n, e.type);
    n !== a && (ce(Ie, e), ce(de, a));
  }
  function je(e) {
    Ie.current === e && (se(de), se(Ie)), Se.current === e && (se(Se), Ms._currentValue = ve);
  }
  var P = Object.prototype.hasOwnProperty, oe = t.unstable_scheduleCallback, ae = t.unstable_cancelCallback, Y = t.unstable_shouldYield, le = t.unstable_requestPaint, he = t.unstable_now, re = t.unstable_getCurrentPriorityLevel, we = t.unstable_ImmediatePriority, ue = t.unstable_UserBlockingPriority, ie = t.unstable_NormalPriority, ze = t.unstable_LowPriority, Ce = t.unstable_IdlePriority, Ue = t.log, Qt = t.unstable_setDisableYieldValue, rr = null, gt = null;
  function Vn(e) {
    if (typeof Ue == "function" && Qt(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(rr, e);
      } catch {
      }
  }
  var Zt = Math.clz32 ? Math.clz32 : oa, Sn = Math.log, sa = Math.LN2;
  function oa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Sn(e) / sa | 0) | 0;
  }
  var ar = 256, Yn = 4194304;
  function xn(e) {
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
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0, g = e.suspendedLanes, w = e.pingedLanes;
    e = e.warmLanes;
    var O = o & 134217727;
    return O !== 0 ? (o = O & ~g, o !== 0 ? c = xn(o) : (w &= O, w !== 0 ? c = xn(w) : a || (a = O & ~e, a !== 0 && (c = xn(a))))) : (O = o & ~g, O !== 0 ? c = xn(O) : w !== 0 ? c = xn(w) : a || (a = o & ~e, a !== 0 && (c = xn(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & g) === 0 && (g = c & -c, a = n & -n, g >= a || g === 32 && (a & 4194048) !== 0) ? n : c;
  }
  function Kt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function ho(e, n) {
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
  function Ba() {
    var e = ar;
    return ar <<= 1, (ar & 4194048) === 0 && (ar = 256), e;
  }
  function gh() {
    var e = Yn;
    return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), e;
  }
  function zu(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Hi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function H1(e, n, a, o, c, g) {
    var w = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var O = e.entanglements, j = e.expirationTimes, q = e.hiddenUpdates;
    for (a = w & ~a; 0 < a; ) {
      var Q = 31 - Zt(a), ee = 1 << Q;
      O[Q] = 0, j[Q] = -1;
      var F = q[Q];
      if (F !== null)
        for (q[Q] = null, Q = 0; Q < F.length; Q++) {
          var G = F[Q];
          G !== null && (G.lane &= -536870913);
        }
      a &= ~ee;
    }
    o !== 0 && vh(e, o, 0), g !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= g & ~(w & ~n));
  }
  function vh(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Zt(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 4194090;
  }
  function yh(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var o = 31 - Zt(a), c = 1 << o;
      c & n | e[o] & n && (e[o] |= n), a &= ~c;
    }
  }
  function Lu(e) {
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
  function Iu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function bh() {
    var e = ne.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Jg(e.type));
  }
  function q1(e, n) {
    var a = ne.p;
    try {
      return ne.p = e, n();
    } finally {
      ne.p = a;
    }
  }
  var Tr = Math.random().toString(36).slice(2), It = "__reactFiber$" + Tr, Jt = "__reactProps$" + Tr, Ua = "__reactContainer$" + Tr, Pu = "__reactEvents$" + Tr, F1 = "__reactListeners$" + Tr, Z1 = "__reactHandles$" + Tr, _h = "__reactResources$" + Tr, qi = "__reactMarker$" + Tr;
  function Bu(e) {
    delete e[It], delete e[Jt], delete e[Pu], delete e[F1], delete e[Z1];
  }
  function Ha(e) {
    var n = e[It];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ua] || a[It]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = Ig(e); e !== null; ) {
            if (a = e[It]) return a;
            e = Ig(e);
          }
        return n;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function qa(e) {
    if (e = e[It] || e[Ua]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Fi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Fa(e) {
    var n = e[_h];
    return n || (n = e[_h] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ot(e) {
    e[qi] = !0;
  }
  var Sh = /* @__PURE__ */ new Set(), xh = {};
  function la(e, n) {
    Za(e, n), Za(e + "Capture", n);
  }
  function Za(e, n) {
    for (xh[e] = n, e = 0; e < n.length; e++)
      Sh.add(n[e]);
  }
  var G1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Eh = {}, Ch = {};
  function V1(e) {
    return P.call(Ch, e) ? !0 : P.call(Eh, e) ? !1 : G1.test(e) ? Ch[e] = !0 : (Eh[e] = !0, !1);
  }
  function po(e, n, a) {
    if (V1(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
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
        e.setAttribute(n, "" + a);
      }
  }
  function mo(e, n, a) {
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
  function ir(e, n, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + o);
    }
  }
  var Uu, wh;
  function Ga(e) {
    if (Uu === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        Uu = n && n[1] || "", wh = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Uu + e + wh;
  }
  var Hu = !1;
  function qu(e, n) {
    if (!e || Hu) return "";
    Hu = !0;
    var a = Error.prepareStackTrace;
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
                } catch (G) {
                  var F = G;
                }
                Reflect.construct(e, [], ee);
              } else {
                try {
                  ee.call();
                } catch (G) {
                  F = G;
                }
                e.call(ee.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                F = G;
              }
              (ee = e()) && typeof ee.catch == "function" && ee.catch(function() {
              });
            }
          } catch (G) {
            if (G && F && typeof G.stack == "string")
              return [G.stack, F.stack];
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
      var g = o.DetermineComponentFrameRoot(), w = g[0], O = g[1];
      if (w && O) {
        var j = w.split(`
`), q = O.split(`
`);
        for (c = o = 0; o < j.length && !j[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; c < q.length && !q[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (o === j.length || c === q.length)
          for (o = j.length - 1, c = q.length - 1; 1 <= o && 0 <= c && j[o] !== q[c]; )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (j[o] !== q[c]) {
            if (o !== 1 || c !== 1)
              do
                if (o--, c--, 0 > c || j[o] !== q[c]) {
                  var Q = `
` + j[o].replace(" at new ", " at ");
                  return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q;
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      Hu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ga(a) : "";
  }
  function Y1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ga(e.type);
      case 16:
        return Ga("Lazy");
      case 13:
        return Ga("Suspense");
      case 19:
        return Ga("SuspenseList");
      case 0:
      case 15:
        return qu(e.type, !1);
      case 11:
        return qu(e.type.render, !1);
      case 1:
        return qu(e.type, !0);
      case 31:
        return Ga("Activity");
      default:
        return "";
    }
  }
  function Ah(e) {
    try {
      var n = "";
      do
        n += Y1(e), e = e.return;
      while (e);
      return n;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function En(e) {
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
  function Nh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function X1(e) {
    var n = Nh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var c = a.get, g = a.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(w) {
          o = "" + w, g.call(this, w);
        }
      }), Object.defineProperty(e, n, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(w) {
          o = "" + w;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function go(e) {
    e._valueTracker || (e._valueTracker = X1(e));
  }
  function Th(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(), o = "";
    return e && (o = Nh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (n.setValue(e), !0) : !1;
  }
  function vo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var $1 = /[\n"\\]/g;
  function Cn(e) {
    return e.replace(
      $1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fu(e, n, a, o, c, g, w, O) {
    e.name = "", w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.type = w : e.removeAttribute("type"), n != null ? w === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + En(n)) : e.value !== "" + En(n) && (e.value = "" + En(n)) : w !== "submit" && w !== "reset" || e.removeAttribute("value"), n != null ? Zu(e, w, En(n)) : a != null ? Zu(e, w, En(a)) : o != null && e.removeAttribute("value"), c == null && g != null && (e.defaultChecked = !!g), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? e.name = "" + En(O) : e.removeAttribute("name");
  }
  function Oh(e, n, a, o, c, g, w, O) {
    if (g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.type = g), n != null || a != null) {
      if (!(g !== "submit" && g !== "reset" || n != null))
        return;
      a = a != null ? "" + En(a) : "", n = n != null ? "" + En(n) : a, O || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = O ? e.checked : !!o, e.defaultChecked = !!o, w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" && (e.name = w);
  }
  function Zu(e, n, a) {
    n === "number" && vo(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Va(e, n, a, o) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < a.length; c++)
        n["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        c = n.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + En(a), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, o && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Dh(e, n, a) {
    if (n != null && (n = "" + En(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + En(a) : "";
  }
  function Mh(e, n, a, o) {
    if (n == null) {
      if (o != null) {
        if (a != null) throw Error(s(92));
        if (be(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), n = a;
    }
    a = En(n), e.defaultValue = a, o = e.textContent, o === a && o !== "" && o !== null && (e.value = o);
  }
  function Ya(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Q1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function kh(e, n, a) {
    var o = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, a) : typeof a != "number" || a === 0 || Q1.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
  }
  function jh(e, n, a) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var o in a)
        !a.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in n)
        o = n[c], n.hasOwnProperty(c) && a[c] !== o && kh(e, c, o);
    } else
      for (var g in n)
        n.hasOwnProperty(g) && kh(e, g, n[g]);
  }
  function Gu(e) {
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
  var K1 = /* @__PURE__ */ new Map([
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
  ]), J1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yo(e) {
    return J1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Vu = null;
  function Yu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xa = null, $a = null;
  function Rh(e) {
    var n = qa(e);
    if (n && (e = n.stateNode)) {
      var a = e[Jt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Fu(
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
              'input[name="' + Cn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < a.length; n++) {
              var o = a[n];
              if (o !== e && o.form === e.form) {
                var c = o[Jt] || null;
                if (!c) throw Error(s(90));
                Fu(
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
            for (n = 0; n < a.length; n++)
              o = a[n], o.form === e.form && Th(o);
          }
          break e;
        case "textarea":
          Dh(e, a.value, a.defaultValue);
          break e;
        case "select":
          n = a.value, n != null && Va(e, !!a.multiple, n, !1);
      }
    }
  }
  var Xu = !1;
  function zh(e, n, a) {
    if (Xu) return e(n, a);
    Xu = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (Xu = !1, (Xa !== null || $a !== null) && (rl(), Xa && (n = Xa, e = $a, $a = Xa = null, Rh(n), e)))
        for (n = 0; n < e.length; n++) Rh(e[n]);
    }
  }
  function Zi(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[Jt] || null;
    if (o === null) return null;
    a = o[n];
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
    if (a && typeof a != "function")
      throw Error(
        s(231, n, typeof a)
      );
    return a;
  }
  var sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $u = !1;
  if (sr)
    try {
      var Gi = {};
      Object.defineProperty(Gi, "passive", {
        get: function() {
          $u = !0;
        }
      }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi);
    } catch {
      $u = !1;
    }
  var Or = null, Qu = null, bo = null;
  function Lh() {
    if (bo) return bo;
    var e, n = Qu, a = n.length, o, c = "value" in Or ? Or.value : Or.textContent, g = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var w = a - e;
    for (o = 1; o <= w && n[a - o] === c[g - o]; o++) ;
    return bo = c.slice(e, 1 < o ? 1 - o : void 0);
  }
  function _o(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function So() {
    return !0;
  }
  function Ih() {
    return !1;
  }
  function Wt(e) {
    function n(a, o, c, g, w) {
      this._reactName = a, this._targetInst = c, this.type = o, this.nativeEvent = g, this.target = w, this.currentTarget = null;
      for (var O in e)
        e.hasOwnProperty(O) && (a = e[O], this[O] = a ? a(g) : g[O]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? So : Ih, this.isPropagationStopped = Ih, this;
    }
    return y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = So);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = So);
      },
      persist: function() {
      },
      isPersistent: So
    }), n;
  }
  var ua = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, xo = Wt(ua), Vi = y({}, ua, { view: 0, detail: 0 }), W1 = Wt(Vi), Ku, Ju, Yi, Eo = y({}, Vi, {
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
    getModifierState: ec,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Yi && (Yi && e.type === "mousemove" ? (Ku = e.screenX - Yi.screenX, Ju = e.screenY - Yi.screenY) : Ju = Ku = 0, Yi = e), Ku);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ju;
    }
  }), Ph = Wt(Eo), eb = y({}, Eo, { dataTransfer: 0 }), tb = Wt(eb), nb = y({}, Vi, { relatedTarget: 0 }), Wu = Wt(nb), rb = y({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ab = Wt(rb), ib = y({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), sb = Wt(ib), ob = y({}, ua, { data: 0 }), Bh = Wt(ob), lb = {
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
  }, ub = {
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
  }, cb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function fb(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = cb[e]) ? !!n[e] : !1;
  }
  function ec() {
    return fb;
  }
  var db = y({}, Vi, {
    key: function(e) {
      if (e.key) {
        var n = lb[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = _o(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ub[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ec,
    charCode: function(e) {
      return e.type === "keypress" ? _o(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? _o(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), hb = Wt(db), pb = y({}, Eo, {
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
  }), Uh = Wt(pb), mb = y({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ec
  }), gb = Wt(mb), vb = y({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), yb = Wt(vb), bb = y({}, Eo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _b = Wt(bb), Sb = y({}, ua, {
    newState: 0,
    oldState: 0
  }), xb = Wt(Sb), Eb = [9, 13, 27, 32], tc = sr && "CompositionEvent" in window, Xi = null;
  sr && "documentMode" in document && (Xi = document.documentMode);
  var Cb = sr && "TextEvent" in window && !Xi, Hh = sr && (!tc || Xi && 8 < Xi && 11 >= Xi), qh = " ", Fh = !1;
  function Zh(e, n) {
    switch (e) {
      case "keyup":
        return Eb.indexOf(n.keyCode) !== -1;
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
  function Gh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Qa = !1;
  function wb(e, n) {
    switch (e) {
      case "compositionend":
        return Gh(n);
      case "keypress":
        return n.which !== 32 ? null : (Fh = !0, qh);
      case "textInput":
        return e = n.data, e === qh && Fh ? null : e;
      default:
        return null;
    }
  }
  function Ab(e, n) {
    if (Qa)
      return e === "compositionend" || !tc && Zh(e, n) ? (e = Lh(), bo = Qu = Or = null, Qa = !1, e) : null;
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
        return Hh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Nb = {
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
  function Vh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Nb[e.type] : n === "textarea";
  }
  function Yh(e, n, a, o) {
    Xa ? $a ? $a.push(o) : $a = [o] : Xa = o, n = ul(n, "onChange"), 0 < n.length && (a = new xo(
      "onChange",
      "change",
      null,
      a,
      o
    ), e.push({ event: a, listeners: n }));
  }
  var $i = null, Qi = null;
  function Tb(e) {
    Ng(e, 0);
  }
  function Co(e) {
    var n = Fi(e);
    if (Th(n)) return e;
  }
  function Xh(e, n) {
    if (e === "change") return n;
  }
  var $h = !1;
  if (sr) {
    var nc;
    if (sr) {
      var rc = "oninput" in document;
      if (!rc) {
        var Qh = document.createElement("div");
        Qh.setAttribute("oninput", "return;"), rc = typeof Qh.oninput == "function";
      }
      nc = rc;
    } else nc = !1;
    $h = nc && (!document.documentMode || 9 < document.documentMode);
  }
  function Kh() {
    $i && ($i.detachEvent("onpropertychange", Jh), Qi = $i = null);
  }
  function Jh(e) {
    if (e.propertyName === "value" && Co(Qi)) {
      var n = [];
      Yh(
        n,
        Qi,
        e,
        Yu(e)
      ), zh(Tb, n);
    }
  }
  function Ob(e, n, a) {
    e === "focusin" ? (Kh(), $i = n, Qi = a, $i.attachEvent("onpropertychange", Jh)) : e === "focusout" && Kh();
  }
  function Db(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Co(Qi);
  }
  function Mb(e, n) {
    if (e === "click") return Co(n);
  }
  function kb(e, n) {
    if (e === "input" || e === "change")
      return Co(n);
  }
  function jb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var un = typeof Object.is == "function" ? Object.is : jb;
  function Ki(e, n) {
    if (un(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), o = Object.keys(n);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var c = a[o];
      if (!P.call(n, c) || !un(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function Wh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ep(e, n) {
    var a = Wh(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (o = e + a.textContent.length, e <= n && o >= n)
          return { node: a, offset: n - e };
        e = o;
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
      a = Wh(a);
    }
  }
  function tp(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? tp(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function np(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = vo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = vo(e.document);
    }
    return n;
  }
  function ac(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Rb = sr && "documentMode" in document && 11 >= document.documentMode, Ka = null, ic = null, Ji = null, sc = !1;
  function rp(e, n, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    sc || Ka == null || Ka !== vo(o) || (o = Ka, "selectionStart" in o && ac(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Ji && Ki(Ji, o) || (Ji = o, o = ul(ic, "onSelect"), 0 < o.length && (n = new xo(
      "onSelect",
      "select",
      null,
      n,
      a
    ), e.push({ event: n, listeners: o }), n.target = Ka)));
  }
  function ca(e, n) {
    var a = {};
    return a[e.toLowerCase()] = n.toLowerCase(), a["Webkit" + e] = "webkit" + n, a["Moz" + e] = "moz" + n, a;
  }
  var Ja = {
    animationend: ca("Animation", "AnimationEnd"),
    animationiteration: ca("Animation", "AnimationIteration"),
    animationstart: ca("Animation", "AnimationStart"),
    transitionrun: ca("Transition", "TransitionRun"),
    transitionstart: ca("Transition", "TransitionStart"),
    transitioncancel: ca("Transition", "TransitionCancel"),
    transitionend: ca("Transition", "TransitionEnd")
  }, oc = {}, ap = {};
  sr && (ap = document.createElement("div").style, "AnimationEvent" in window || (delete Ja.animationend.animation, delete Ja.animationiteration.animation, delete Ja.animationstart.animation), "TransitionEvent" in window || delete Ja.transitionend.transition);
  function fa(e) {
    if (oc[e]) return oc[e];
    if (!Ja[e]) return e;
    var n = Ja[e], a;
    for (a in n)
      if (n.hasOwnProperty(a) && a in ap)
        return oc[e] = n[a];
    return e;
  }
  var ip = fa("animationend"), sp = fa("animationiteration"), op = fa("animationstart"), zb = fa("transitionrun"), Lb = fa("transitionstart"), Ib = fa("transitioncancel"), lp = fa("transitionend"), up = /* @__PURE__ */ new Map(), lc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  lc.push("scrollEnd");
  function In(e, n) {
    up.set(e, n), la(n, [e]);
  }
  var cp = /* @__PURE__ */ new WeakMap();
  function wn(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = cp.get(e);
      return a !== void 0 ? a : (n = {
        value: e,
        source: n,
        stack: Ah(n)
      }, cp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Ah(n)
    };
  }
  var An = [], Wa = 0, uc = 0;
  function wo() {
    for (var e = Wa, n = uc = Wa = 0; n < e; ) {
      var a = An[n];
      An[n++] = null;
      var o = An[n];
      An[n++] = null;
      var c = An[n];
      An[n++] = null;
      var g = An[n];
      if (An[n++] = null, o !== null && c !== null) {
        var w = o.pending;
        w === null ? c.next = c : (c.next = w.next, w.next = c), o.pending = c;
      }
      g !== 0 && fp(a, c, g);
    }
  }
  function Ao(e, n, a, o) {
    An[Wa++] = e, An[Wa++] = n, An[Wa++] = a, An[Wa++] = o, uc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function cc(e, n, a, o) {
    return Ao(e, n, a, o), No(e);
  }
  function ei(e, n) {
    return Ao(e, null, null, n), No(e);
  }
  function fp(e, n, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var c = !1, g = e.return; g !== null; )
      g.childLanes |= a, o = g.alternate, o !== null && (o.childLanes |= a), g.tag === 22 && (e = g.stateNode, e === null || e._visibility & 1 || (c = !0)), e = g, g = g.return;
    return e.tag === 3 ? (g = e.stateNode, c && n !== null && (c = 31 - Zt(a), e = g.hiddenUpdates, o = e[c], o === null ? e[c] = [n] : o.push(n), n.lane = a | 536870912), g) : null;
  }
  function No(e) {
    if (50 < Es)
      throw Es = 0, vf = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ti = {};
  function Pb(e, n, a, o) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function cn(e, n, a, o) {
    return new Pb(e, n, a, o);
  }
  function fc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function or(e, n) {
    var a = e.alternate;
    return a === null ? (a = cn(
      e.tag,
      n,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = n, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, n = e.dependencies, a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function dp(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function To(e, n, a, o, c, g) {
    var w = 0;
    if (o = e, typeof e == "function") fc(e) && (w = 1);
    else if (typeof e == "string")
      w = U_(
        e,
        a,
        de.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case $:
          return e = cn(31, a, n, c), e.elementType = $, e.lanes = g, e;
        case d:
          return da(a.children, c, g, n);
        case S:
          w = 8, c |= 24;
          break;
        case E:
          return e = cn(12, a, n, c | 2), e.elementType = E, e.lanes = g, e;
        case N:
          return e = cn(13, a, n, c), e.elementType = N, e.lanes = g, e;
        case M:
          return e = cn(19, a, n, c), e.elementType = M, e.lanes = g, e;
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
              case B:
                w = 16, o = null;
                break e;
            }
          w = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = cn(w, a, n, c), n.elementType = e, n.type = o, n.lanes = g, n;
  }
  function da(e, n, a, o) {
    return e = cn(7, e, o, n), e.lanes = a, e;
  }
  function dc(e, n, a) {
    return e = cn(6, e, null, n), e.lanes = a, e;
  }
  function hc(e, n, a) {
    return n = cn(
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
  var ni = [], ri = 0, Oo = null, Do = 0, Nn = [], Tn = 0, ha = null, lr = 1, ur = "";
  function pa(e, n) {
    ni[ri++] = Do, ni[ri++] = Oo, Oo = e, Do = n;
  }
  function hp(e, n, a) {
    Nn[Tn++] = lr, Nn[Tn++] = ur, Nn[Tn++] = ha, ha = e;
    var o = lr;
    e = ur;
    var c = 32 - Zt(o) - 1;
    o &= ~(1 << c), a += 1;
    var g = 32 - Zt(n) + c;
    if (30 < g) {
      var w = c - c % 5;
      g = (o & (1 << w) - 1).toString(32), o >>= w, c -= w, lr = 1 << 32 - Zt(n) + c | a << c | o, ur = g + e;
    } else
      lr = 1 << g | a << c | o, ur = e;
  }
  function pc(e) {
    e.return !== null && (pa(e, 1), hp(e, 1, 0));
  }
  function mc(e) {
    for (; e === Oo; )
      Oo = ni[--ri], ni[ri] = null, Do = ni[--ri], ni[ri] = null;
    for (; e === ha; )
      ha = Nn[--Tn], Nn[Tn] = null, ur = Nn[--Tn], Nn[Tn] = null, lr = Nn[--Tn], Nn[Tn] = null;
  }
  var Vt = null, dt = null, $e = !1, ma = null, Xn = !1, gc = Error(s(519));
  function ga(e) {
    var n = Error(s(418, ""));
    throw ts(wn(n, e)), gc;
  }
  function pp(e) {
    var n = e.stateNode, a = e.type, o = e.memoizedProps;
    switch (n[It] = e, n[Jt] = o, a) {
      case "dialog":
        Fe("cancel", n), Fe("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Fe("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ws.length; a++)
          Fe(ws[a], n);
        break;
      case "source":
        Fe("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Fe("error", n), Fe("load", n);
        break;
      case "details":
        Fe("toggle", n);
        break;
      case "input":
        Fe("invalid", n), Oh(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), go(n);
        break;
      case "select":
        Fe("invalid", n);
        break;
      case "textarea":
        Fe("invalid", n), Mh(n, o.value, o.defaultValue, o.children), go(n);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || o.suppressHydrationWarning === !0 || Mg(n.textContent, a) ? (o.popover != null && (Fe("beforetoggle", n), Fe("toggle", n)), o.onScroll != null && Fe("scroll", n), o.onScrollEnd != null && Fe("scrollend", n), o.onClick != null && (n.onclick = cl), n = !0) : n = !1, n || ga(e);
  }
  function mp(e) {
    for (Vt = e.return; Vt; )
      switch (Vt.tag) {
        case 5:
        case 13:
          Xn = !1;
          return;
        case 27:
        case 3:
          Xn = !0;
          return;
        default:
          Vt = Vt.return;
      }
  }
  function Wi(e) {
    if (e !== Vt) return !1;
    if (!$e) return mp(e), $e = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || jf(e.type, e.memoizedProps)), a = !a), a && dt && ga(e), mp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (n === 0) {
                dt = Bn(e.nextSibling);
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
      n === 27 ? (n = dt, Gr(e.type) ? (e = If, If = null, dt = e) : dt = n) : dt = Vt ? Bn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    dt = Vt = null, $e = !1;
  }
  function gp() {
    var e = ma;
    return e !== null && (nn === null ? nn = e : nn.push.apply(
      nn,
      e
    ), ma = null), e;
  }
  function ts(e) {
    ma === null ? ma = [e] : ma.push(e);
  }
  var vc = W(null), va = null, cr = null;
  function Dr(e, n, a) {
    ce(vc, n._currentValue), n._currentValue = a;
  }
  function fr(e) {
    e._currentValue = vc.current, se(vc);
  }
  function yc(e, n, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === a) break;
      e = e.return;
    }
  }
  function bc(e, n, a, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var g = c.dependencies;
      if (g !== null) {
        var w = c.child;
        g = g.firstContext;
        e: for (; g !== null; ) {
          var O = g;
          g = c;
          for (var j = 0; j < n.length; j++)
            if (O.context === n[j]) {
              g.lanes |= a, O = g.alternate, O !== null && (O.lanes |= a), yc(
                g.return,
                a,
                e
              ), o || (w = null);
              break e;
            }
          g = O.next;
        }
      } else if (c.tag === 18) {
        if (w = c.return, w === null) throw Error(s(341));
        w.lanes |= a, g = w.alternate, g !== null && (g.lanes |= a), yc(w, a, e), w = null;
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
  function ns(e, n, a, o) {
    e = null;
    for (var c = n, g = !1; c !== null; ) {
      if (!g) {
        if ((c.flags & 524288) !== 0) g = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var w = c.alternate;
        if (w === null) throw Error(s(387));
        if (w = w.memoizedProps, w !== null) {
          var O = c.type;
          un(c.pendingProps.value, w.value) || (e !== null ? e.push(O) : e = [O]);
        }
      } else if (c === Se.current) {
        if (w = c.alternate, w === null) throw Error(s(387));
        w.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Ms) : e = [Ms]);
      }
      c = c.return;
    }
    e !== null && bc(
      n,
      e,
      a,
      o
    ), n.flags |= 262144;
  }
  function Mo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!un(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ya(e) {
    va = e, cr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Pt(e) {
    return vp(va, e);
  }
  function ko(e, n) {
    return va === null && ya(e), vp(e, n);
  }
  function vp(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, cr === null) {
      if (e === null) throw Error(s(308));
      cr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else cr = cr.next = n;
    return a;
  }
  var Bb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(a, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, Ub = t.unstable_scheduleCallback, Hb = t.unstable_NormalPriority, wt = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _c() {
    return {
      controller: new Bb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function rs(e) {
    e.refCount--, e.refCount === 0 && Ub(Hb, function() {
      e.controller.abort();
    });
  }
  var as = null, Sc = 0, ai = 0, ii = null;
  function qb(e, n) {
    if (as === null) {
      var a = as = [];
      Sc = 0, ai = Cf(), ii = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return Sc++, n.then(yp, yp), n;
  }
  function yp() {
    if (--Sc === 0 && as !== null) {
      ii !== null && (ii.status = "fulfilled");
      var e = as;
      as = null, ai = 0, ii = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Fb(e, n) {
    var a = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        a.push(c);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = n;
        for (var c = 0; c < a.length; c++) (0, a[c])(n);
      },
      function(c) {
        for (o.status = "rejected", o.reason = c, c = 0; c < a.length; c++)
          (0, a[c])(void 0);
      }
    ), o;
  }
  var bp = U.S;
  U.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && qb(e, n), bp !== null && bp(e, n);
  };
  var ba = W(null);
  function xc() {
    var e = ba.current;
    return e !== null ? e : at.pooledCache;
  }
  function jo(e, n) {
    n === null ? ce(ba, ba.current) : ce(ba, n.pool);
  }
  function _p() {
    var e = xc();
    return e === null ? null : { parent: wt._currentValue, pool: e };
  }
  var is = Error(s(460)), Sp = Error(s(474)), Ro = Error(s(542)), Ec = { then: function() {
  } };
  function xp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function zo() {
  }
  function Ep(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(zo, zo), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, wp(e), e;
      default:
        if (typeof n.status == "string") n.then(zo, zo);
        else {
          if (e = at, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = n.reason, wp(e), e;
        }
        throw ss = n, is;
    }
  }
  var ss = null;
  function Cp() {
    if (ss === null) throw Error(s(459));
    var e = ss;
    return ss = null, e;
  }
  function wp(e) {
    if (e === is || e === Ro)
      throw Error(s(483));
  }
  var Mr = !1;
  function Cc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function wc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function kr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function jr(e, n, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Qe & 2) !== 0) {
      var c = o.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), o.pending = n, n = No(e), fp(e, null, a), n;
    }
    return Ao(e, o, n, a), No(e);
  }
  function os(e, n, a) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, yh(e, a);
    }
  }
  function Ac(e, n) {
    var a = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, a === o)) {
      var c = null, g = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var w = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          g === null ? c = g = w : g = g.next = w, a = a.next;
        } while (a !== null);
        g === null ? c = g = n : g = g.next = n;
      } else c = g = n;
      a = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: g,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = n : e.next = n, a.lastBaseUpdate = n;
  }
  var Nc = !1;
  function ls() {
    if (Nc) {
      var e = ii;
      if (e !== null) throw e;
    }
  }
  function us(e, n, a, o) {
    Nc = !1;
    var c = e.updateQueue;
    Mr = !1;
    var g = c.firstBaseUpdate, w = c.lastBaseUpdate, O = c.shared.pending;
    if (O !== null) {
      c.shared.pending = null;
      var j = O, q = j.next;
      j.next = null, w === null ? g = q : w.next = q, w = j;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, O = Q.lastBaseUpdate, O !== w && (O === null ? Q.firstBaseUpdate = q : O.next = q, Q.lastBaseUpdate = j));
    }
    if (g !== null) {
      var ee = c.baseState;
      w = 0, Q = q = j = null, O = g;
      do {
        var F = O.lane & -536870913, G = F !== O.lane;
        if (G ? (Ve & F) === F : (o & F) === F) {
          F !== 0 && F === ai && (Nc = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: null,
            next: null
          });
          e: {
            var Oe = e, Ne = O;
            F = n;
            var nt = a;
            switch (Ne.tag) {
              case 1:
                if (Oe = Ne.payload, typeof Oe == "function") {
                  ee = Oe.call(nt, ee, F);
                  break e;
                }
                ee = Oe;
                break e;
              case 3:
                Oe.flags = Oe.flags & -65537 | 128;
              case 0:
                if (Oe = Ne.payload, F = typeof Oe == "function" ? Oe.call(nt, ee, F) : Oe, F == null) break e;
                ee = y({}, ee, F);
                break e;
              case 2:
                Mr = !0;
            }
          }
          F = O.callback, F !== null && (e.flags |= 64, G && (e.flags |= 8192), G = c.callbacks, G === null ? c.callbacks = [F] : G.push(F));
        } else
          G = {
            lane: F,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          }, Q === null ? (q = Q = G, j = ee) : Q = Q.next = G, w |= F;
        if (O = O.next, O === null) {
          if (O = c.shared.pending, O === null)
            break;
          G = O, O = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (!0);
      Q === null && (j = ee), c.baseState = j, c.firstBaseUpdate = q, c.lastBaseUpdate = Q, g === null && (c.shared.lanes = 0), Hr |= w, e.lanes = w, e.memoizedState = ee;
    }
  }
  function Ap(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function Np(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Ap(a[e], n);
  }
  var si = W(null), Lo = W(0);
  function Tp(e, n) {
    e = yr, ce(Lo, e), ce(si, n), yr = e | n.baseLanes;
  }
  function Tc() {
    ce(Lo, yr), ce(si, si.current);
  }
  function Oc() {
    yr = Lo.current, se(si), se(Lo);
  }
  var Rr = 0, Be = null, et = null, _t = null, Io = !1, oi = !1, _a = !1, Po = 0, cs = 0, li = null, Zb = 0;
  function vt() {
    throw Error(s(321));
  }
  function Dc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!un(e[a], n[a])) return !1;
    return !0;
  }
  function Mc(e, n, a, o, c, g) {
    return Rr = g, Be = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, U.H = e === null || e.memoizedState === null ? fm : dm, _a = !1, g = a(o, c), _a = !1, oi && (g = Dp(
      n,
      a,
      o,
      c
    )), Op(e), g;
  }
  function Op(e) {
    U.H = Zo;
    var n = et !== null && et.next !== null;
    if (Rr = 0, _t = et = Be = null, Io = !1, cs = 0, li = null, n) throw Error(s(300));
    e === null || Dt || (e = e.dependencies, e !== null && Mo(e) && (Dt = !0));
  }
  function Dp(e, n, a, o) {
    Be = e;
    var c = 0;
    do {
      if (oi && (li = null), cs = 0, oi = !1, 25 <= c) throw Error(s(301));
      if (c += 1, _t = et = null, e.updateQueue != null) {
        var g = e.updateQueue;
        g.lastEffect = null, g.events = null, g.stores = null, g.memoCache != null && (g.memoCache.index = 0);
      }
      U.H = Kb, g = n(a, o);
    } while (oi);
    return g;
  }
  function Gb() {
    var e = U.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? fs(n) : n, e = e.useState()[0], (et !== null ? et.memoizedState : null) !== e && (Be.flags |= 1024), n;
  }
  function kc() {
    var e = Po !== 0;
    return Po = 0, e;
  }
  function jc(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function Rc(e) {
    if (Io) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Io = !1;
    }
    Rr = 0, _t = et = Be = null, oi = !1, cs = Po = 0, li = null;
  }
  function en() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return _t === null ? Be.memoizedState = _t = e : _t = _t.next = e, _t;
  }
  function St() {
    if (et === null) {
      var e = Be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var n = _t === null ? Be.memoizedState : _t.next;
    if (n !== null)
      _t = n, et = e;
    else {
      if (e === null)
        throw Be.alternate === null ? Error(s(467)) : Error(s(310));
      et = e, e = {
        memoizedState: et.memoizedState,
        baseState: et.baseState,
        baseQueue: et.baseQueue,
        queue: et.queue,
        next: null
      }, _t === null ? Be.memoizedState = _t = e : _t = _t.next = e;
    }
    return _t;
  }
  function zc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fs(e) {
    var n = cs;
    return cs += 1, li === null && (li = []), e = Ep(li, e, n), n = Be, (_t === null ? n.memoizedState : _t.next) === null && (n = n.alternate, U.H = n === null || n.memoizedState === null ? fm : dm), e;
  }
  function Bo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return fs(e);
      if (e.$$typeof === D) return Pt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Lc(e) {
    var n = null, a = Be.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var o = Be.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = zc(), Be.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), o = 0; o < e; o++)
        a[o] = I;
    return n.index++, a;
  }
  function dr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Uo(e) {
    var n = St();
    return Ic(n, et, e);
  }
  function Ic(e, n, a) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = a;
    var c = e.baseQueue, g = o.pending;
    if (g !== null) {
      if (c !== null) {
        var w = c.next;
        c.next = g.next, g.next = w;
      }
      n.baseQueue = c = g, o.pending = null;
    }
    if (g = e.baseState, c === null) e.memoizedState = g;
    else {
      n = c.next;
      var O = w = null, j = null, q = n, Q = !1;
      do {
        var ee = q.lane & -536870913;
        if (ee !== q.lane ? (Ve & ee) === ee : (Rr & ee) === ee) {
          var F = q.revertLane;
          if (F === 0)
            j !== null && (j = j.next = {
              lane: 0,
              revertLane: 0,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), ee === ai && (Q = !0);
          else if ((Rr & F) === F) {
            q = q.next, F === ai && (Q = !0);
            continue;
          } else
            ee = {
              lane: 0,
              revertLane: q.revertLane,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, j === null ? (O = j = ee, w = g) : j = j.next = ee, Be.lanes |= F, Hr |= F;
          ee = q.action, _a && a(g, ee), g = q.hasEagerState ? q.eagerState : a(g, ee);
        } else
          F = {
            lane: ee,
            revertLane: q.revertLane,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, j === null ? (O = j = F, w = g) : j = j.next = F, Be.lanes |= ee, Hr |= ee;
        q = q.next;
      } while (q !== null && q !== n);
      if (j === null ? w = g : j.next = O, !un(g, e.memoizedState) && (Dt = !0, Q && (a = ii, a !== null)))
        throw a;
      e.memoizedState = g, e.baseState = w, e.baseQueue = j, o.lastRenderedState = g;
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Pc(e) {
    var n = St(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, c = a.pending, g = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var w = c = c.next;
      do
        g = e(g, w.action), w = w.next;
      while (w !== c);
      un(g, n.memoizedState) || (Dt = !0), n.memoizedState = g, n.baseQueue === null && (n.baseState = g), a.lastRenderedState = g;
    }
    return [g, o];
  }
  function Mp(e, n, a) {
    var o = Be, c = St(), g = $e;
    if (g) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var w = !un(
      (et || c).memoizedState,
      a
    );
    w && (c.memoizedState = a, Dt = !0), c = c.queue;
    var O = Rp.bind(null, o, c, e);
    if (ds(2048, 8, O, [e]), c.getSnapshot !== n || w || _t !== null && _t.memoizedState.tag & 1) {
      if (o.flags |= 2048, ui(
        9,
        Ho(),
        jp.bind(
          null,
          o,
          c,
          a,
          n
        ),
        null
      ), at === null) throw Error(s(349));
      g || (Rr & 124) !== 0 || kp(o, n, a);
    }
    return a;
  }
  function kp(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = Be.updateQueue, n === null ? (n = zc(), Be.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function jp(e, n, a, o) {
    n.value = a, n.getSnapshot = o, zp(n) && Lp(e);
  }
  function Rp(e, n, a) {
    return a(function() {
      zp(n) && Lp(e);
    });
  }
  function zp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !un(e, a);
    } catch {
      return !0;
    }
  }
  function Lp(e) {
    var n = ei(e, 2);
    n !== null && mn(n, e, 2);
  }
  function Bc(e) {
    var n = en();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), _a) {
        Vn(!0);
        try {
          a();
        } finally {
          Vn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dr,
      lastRenderedState: e
    }, n;
  }
  function Ip(e, n, a, o) {
    return e.baseState = a, Ic(
      e,
      et,
      typeof o == "function" ? o : dr
    );
  }
  function Vb(e, n, a, o, c) {
    if (Fo(e)) throw Error(s(485));
    if (e = n.action, e !== null) {
      var g = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(w) {
          g.listeners.push(w);
        }
      };
      U.T !== null ? a(!0) : g.isTransition = !1, o(g), a = n.pending, a === null ? (g.next = n.pending = g, Pp(n, g)) : (g.next = a.next, n.pending = a.next = g);
    }
  }
  function Pp(e, n) {
    var a = n.action, o = n.payload, c = e.state;
    if (n.isTransition) {
      var g = U.T, w = {};
      U.T = w;
      try {
        var O = a(c, o), j = U.S;
        j !== null && j(w, O), Bp(e, n, O);
      } catch (q) {
        Uc(e, n, q);
      } finally {
        U.T = g;
      }
    } else
      try {
        g = a(c, o), Bp(e, n, g);
      } catch (q) {
        Uc(e, n, q);
      }
  }
  function Bp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(o) {
        Up(e, n, o);
      },
      function(o) {
        return Uc(e, n, o);
      }
    ) : Up(e, n, a);
  }
  function Up(e, n, a) {
    n.status = "fulfilled", n.value = a, Hp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, Pp(e, a)));
  }
  function Uc(e, n, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = a, Hp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Hp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function qp(e, n) {
    return n;
  }
  function Fp(e, n) {
    if ($e) {
      var a = at.formState;
      if (a !== null) {
        e: {
          var o = Be;
          if ($e) {
            if (dt) {
              t: {
                for (var c = dt, g = Xn; c.nodeType !== 8; ) {
                  if (!g) {
                    c = null;
                    break t;
                  }
                  if (c = Bn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                g = c.data, c = g === "F!" || g === "F" ? c : null;
              }
              if (c) {
                dt = Bn(
                  c.nextSibling
                ), o = c.data === "F!";
                break e;
              }
            }
            ga(o);
          }
          o = !1;
        }
        o && (n = a[0]);
      }
    }
    return a = en(), a.memoizedState = a.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qp,
      lastRenderedState: n
    }, a.queue = o, a = lm.bind(
      null,
      Be,
      o
    ), o.dispatch = a, o = Bc(!1), g = Gc.bind(
      null,
      Be,
      !1,
      o.queue
    ), o = en(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = c, a = Vb.bind(
      null,
      Be,
      c,
      g,
      a
    ), c.dispatch = a, o.memoizedState = e, [n, a, !1];
  }
  function Zp(e) {
    var n = St();
    return Gp(n, et, e);
  }
  function Gp(e, n, a) {
    if (n = Ic(
      e,
      n,
      qp
    )[0], e = Uo(dr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = fs(n);
      } catch (w) {
        throw w === is ? Ro : w;
      }
    else o = n;
    n = St();
    var c = n.queue, g = c.dispatch;
    return a !== n.memoizedState && (Be.flags |= 2048, ui(
      9,
      Ho(),
      Yb.bind(null, c, a),
      null
    )), [o, g, e];
  }
  function Yb(e, n) {
    e.action = n;
  }
  function Vp(e) {
    var n = St(), a = et;
    if (a !== null)
      return Gp(n, a, e);
    St(), n = n.memoizedState, a = St();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [n, o, !1];
  }
  function ui(e, n, a, o) {
    return e = { tag: e, create: a, deps: o, inst: n, next: null }, n = Be.updateQueue, n === null && (n = zc(), Be.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, n.lastEffect = e), e;
  }
  function Ho() {
    return { destroy: void 0, resource: void 0 };
  }
  function Yp() {
    return St().memoizedState;
  }
  function qo(e, n, a, o) {
    var c = en();
    o = o === void 0 ? null : o, Be.flags |= e, c.memoizedState = ui(
      1 | n,
      Ho(),
      a,
      o
    );
  }
  function ds(e, n, a, o) {
    var c = St();
    o = o === void 0 ? null : o;
    var g = c.memoizedState.inst;
    et !== null && o !== null && Dc(o, et.memoizedState.deps) ? c.memoizedState = ui(n, g, a, o) : (Be.flags |= e, c.memoizedState = ui(
      1 | n,
      g,
      a,
      o
    ));
  }
  function Xp(e, n) {
    qo(8390656, 8, e, n);
  }
  function $p(e, n) {
    ds(2048, 8, e, n);
  }
  function Qp(e, n) {
    return ds(4, 2, e, n);
  }
  function Kp(e, n) {
    return ds(4, 4, e, n);
  }
  function Jp(e, n) {
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
  function Wp(e, n, a) {
    a = a != null ? a.concat([e]) : null, ds(4, 4, Jp.bind(null, n, e), a);
  }
  function Hc() {
  }
  function em(e, n) {
    var a = St();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    return n !== null && Dc(n, o[1]) ? o[0] : (a.memoizedState = [e, n], e);
  }
  function tm(e, n) {
    var a = St();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    if (n !== null && Dc(n, o[1]))
      return o[0];
    if (o = e(), _a) {
      Vn(!0);
      try {
        e();
      } finally {
        Vn(!1);
      }
    }
    return a.memoizedState = [o, n], o;
  }
  function qc(e, n, a) {
    return a === void 0 || (Rr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = ag(), Be.lanes |= e, Hr |= e, a);
  }
  function nm(e, n, a, o) {
    return un(a, n) ? a : si.current !== null ? (e = qc(e, a, o), un(e, n) || (Dt = !0), e) : (Rr & 42) === 0 ? (Dt = !0, e.memoizedState = a) : (e = ag(), Be.lanes |= e, Hr |= e, n);
  }
  function rm(e, n, a, o, c) {
    var g = ne.p;
    ne.p = g !== 0 && 8 > g ? g : 8;
    var w = U.T, O = {};
    U.T = O, Gc(e, !1, n, a);
    try {
      var j = c(), q = U.S;
      if (q !== null && q(O, j), j !== null && typeof j == "object" && typeof j.then == "function") {
        var Q = Fb(
          j,
          o
        );
        hs(
          e,
          n,
          Q,
          pn(e)
        );
      } else
        hs(
          e,
          n,
          o,
          pn(e)
        );
    } catch (ee) {
      hs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: ee },
        pn()
      );
    } finally {
      ne.p = g, U.T = w;
    }
  }
  function Xb() {
  }
  function Fc(e, n, a, o) {
    if (e.tag !== 5) throw Error(s(476));
    var c = am(e).queue;
    rm(
      e,
      c,
      n,
      ve,
      a === null ? Xb : function() {
        return im(e), a(o);
      }
    );
  }
  function am(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ve,
      baseState: ve,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: ve
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
        lastRenderedReducer: dr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function im(e) {
    var n = am(e).next.queue;
    hs(e, n, {}, pn());
  }
  function Zc() {
    return Pt(Ms);
  }
  function sm() {
    return St().memoizedState;
  }
  function om() {
    return St().memoizedState;
  }
  function $b(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = pn();
          e = kr(a);
          var o = jr(n, e, a);
          o !== null && (mn(o, n, a), os(o, n, a)), n = { cache: _c() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Qb(e, n, a) {
    var o = pn();
    a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fo(e) ? um(n, a) : (a = cc(e, n, a, o), a !== null && (mn(a, e, o), cm(a, n, o)));
  }
  function lm(e, n, a) {
    var o = pn();
    hs(e, n, a, o);
  }
  function hs(e, n, a, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Fo(e)) um(n, c);
    else {
      var g = e.alternate;
      if (e.lanes === 0 && (g === null || g.lanes === 0) && (g = n.lastRenderedReducer, g !== null))
        try {
          var w = n.lastRenderedState, O = g(w, a);
          if (c.hasEagerState = !0, c.eagerState = O, un(O, w))
            return Ao(e, n, c, 0), at === null && wo(), !1;
        } catch {
        } finally {
        }
      if (a = cc(e, n, c, o), a !== null)
        return mn(a, e, o), cm(a, n, o), !0;
    }
    return !1;
  }
  function Gc(e, n, a, o) {
    if (o = {
      lane: 2,
      revertLane: Cf(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fo(e)) {
      if (n) throw Error(s(479));
    } else
      n = cc(
        e,
        a,
        o,
        2
      ), n !== null && mn(n, e, 2);
  }
  function Fo(e) {
    var n = e.alternate;
    return e === Be || n !== null && n === Be;
  }
  function um(e, n) {
    oi = Io = !0;
    var a = e.pending;
    a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
  }
  function cm(e, n, a) {
    if ((a & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, yh(e, a);
    }
  }
  var Zo = {
    readContext: Pt,
    use: Bo,
    useCallback: vt,
    useContext: vt,
    useEffect: vt,
    useImperativeHandle: vt,
    useLayoutEffect: vt,
    useInsertionEffect: vt,
    useMemo: vt,
    useReducer: vt,
    useRef: vt,
    useState: vt,
    useDebugValue: vt,
    useDeferredValue: vt,
    useTransition: vt,
    useSyncExternalStore: vt,
    useId: vt,
    useHostTransitionStatus: vt,
    useFormState: vt,
    useActionState: vt,
    useOptimistic: vt,
    useMemoCache: vt,
    useCacheRefresh: vt
  }, fm = {
    readContext: Pt,
    use: Bo,
    useCallback: function(e, n) {
      return en().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Pt,
    useEffect: Xp,
    useImperativeHandle: function(e, n, a) {
      a = a != null ? a.concat([e]) : null, qo(
        4194308,
        4,
        Jp.bind(null, n, e),
        a
      );
    },
    useLayoutEffect: function(e, n) {
      return qo(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      qo(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var a = en();
      n = n === void 0 ? null : n;
      var o = e();
      if (_a) {
        Vn(!0);
        try {
          e();
        } finally {
          Vn(!1);
        }
      }
      return a.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, a) {
      var o = en();
      if (a !== void 0) {
        var c = a(n);
        if (_a) {
          Vn(!0);
          try {
            a(n);
          } finally {
            Vn(!1);
          }
        }
      } else c = n;
      return o.memoizedState = o.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, o.queue = e, e = e.dispatch = Qb.bind(
        null,
        Be,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = en();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Bc(e);
      var n = e.queue, a = lm.bind(null, Be, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Hc,
    useDeferredValue: function(e, n) {
      var a = en();
      return qc(a, e, n);
    },
    useTransition: function() {
      var e = Bc(!1);
      return e = rm.bind(
        null,
        Be,
        e.queue,
        !0,
        !1
      ), en().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var o = Be, c = en();
      if ($e) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), at === null)
          throw Error(s(349));
        (Ve & 124) !== 0 || kp(o, n, a);
      }
      c.memoizedState = a;
      var g = { value: a, getSnapshot: n };
      return c.queue = g, Xp(Rp.bind(null, o, g, e), [
        e
      ]), o.flags |= 2048, ui(
        9,
        Ho(),
        jp.bind(
          null,
          o,
          g,
          a,
          n
        ),
        null
      ), a;
    },
    useId: function() {
      var e = en(), n = at.identifierPrefix;
      if ($e) {
        var a = ur, o = lr;
        a = (o & ~(1 << 32 - Zt(o) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = Po++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = Zb++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Zc,
    useFormState: Fp,
    useActionState: Fp,
    useOptimistic: function(e) {
      var n = en();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = a, n = Gc.bind(
        null,
        Be,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: Lc,
    useCacheRefresh: function() {
      return en().memoizedState = $b.bind(
        null,
        Be
      );
    }
  }, dm = {
    readContext: Pt,
    use: Bo,
    useCallback: em,
    useContext: Pt,
    useEffect: $p,
    useImperativeHandle: Wp,
    useInsertionEffect: Qp,
    useLayoutEffect: Kp,
    useMemo: tm,
    useReducer: Uo,
    useRef: Yp,
    useState: function() {
      return Uo(dr);
    },
    useDebugValue: Hc,
    useDeferredValue: function(e, n) {
      var a = St();
      return nm(
        a,
        et.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Uo(dr)[0], n = St().memoizedState;
      return [
        typeof e == "boolean" ? e : fs(e),
        n
      ];
    },
    useSyncExternalStore: Mp,
    useId: sm,
    useHostTransitionStatus: Zc,
    useFormState: Zp,
    useActionState: Zp,
    useOptimistic: function(e, n) {
      var a = St();
      return Ip(a, et, e, n);
    },
    useMemoCache: Lc,
    useCacheRefresh: om
  }, Kb = {
    readContext: Pt,
    use: Bo,
    useCallback: em,
    useContext: Pt,
    useEffect: $p,
    useImperativeHandle: Wp,
    useInsertionEffect: Qp,
    useLayoutEffect: Kp,
    useMemo: tm,
    useReducer: Pc,
    useRef: Yp,
    useState: function() {
      return Pc(dr);
    },
    useDebugValue: Hc,
    useDeferredValue: function(e, n) {
      var a = St();
      return et === null ? qc(a, e, n) : nm(
        a,
        et.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Pc(dr)[0], n = St().memoizedState;
      return [
        typeof e == "boolean" ? e : fs(e),
        n
      ];
    },
    useSyncExternalStore: Mp,
    useId: sm,
    useHostTransitionStatus: Zc,
    useFormState: Vp,
    useActionState: Vp,
    useOptimistic: function(e, n) {
      var a = St();
      return et !== null ? Ip(a, et, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Lc,
    useCacheRefresh: om
  }, ci = null, ps = 0;
  function Go(e) {
    var n = ps;
    return ps += 1, ci === null && (ci = []), Ep(ci, e, n);
  }
  function ms(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Vo(e, n) {
    throw n.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function hm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function pm(e) {
    function n(L, z) {
      if (e) {
        var H = L.deletions;
        H === null ? (L.deletions = [z], L.flags |= 16) : H.push(z);
      }
    }
    function a(L, z) {
      if (!e) return null;
      for (; z !== null; )
        n(L, z), z = z.sibling;
      return null;
    }
    function o(L) {
      for (var z = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? z.set(L.key, L) : z.set(L.index, L), L = L.sibling;
      return z;
    }
    function c(L, z) {
      return L = or(L, z), L.index = 0, L.sibling = null, L;
    }
    function g(L, z, H) {
      return L.index = H, e ? (H = L.alternate, H !== null ? (H = H.index, H < z ? (L.flags |= 67108866, z) : H) : (L.flags |= 67108866, z)) : (L.flags |= 1048576, z);
    }
    function w(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function O(L, z, H, J) {
      return z === null || z.tag !== 6 ? (z = dc(H, L.mode, J), z.return = L, z) : (z = c(z, H), z.return = L, z);
    }
    function j(L, z, H, J) {
      var ye = H.type;
      return ye === d ? Q(
        L,
        z,
        H.props.children,
        J,
        H.key
      ) : z !== null && (z.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === B && hm(ye) === z.type) ? (z = c(z, H.props), ms(z, H), z.return = L, z) : (z = To(
        H.type,
        H.key,
        H.props,
        null,
        L.mode,
        J
      ), ms(z, H), z.return = L, z);
    }
    function q(L, z, H, J) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== H.containerInfo || z.stateNode.implementation !== H.implementation ? (z = hc(H, L.mode, J), z.return = L, z) : (z = c(z, H.children || []), z.return = L, z);
    }
    function Q(L, z, H, J, ye) {
      return z === null || z.tag !== 7 ? (z = da(
        H,
        L.mode,
        J,
        ye
      ), z.return = L, z) : (z = c(z, H), z.return = L, z);
    }
    function ee(L, z, H) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = dc(
          "" + z,
          L.mode,
          H
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            return H = To(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              H
            ), ms(H, z), H.return = L, H;
          case v:
            return z = hc(
              z,
              L.mode,
              H
            ), z.return = L, z;
          case B:
            var J = z._init;
            return z = J(z._payload), ee(L, z, H);
        }
        if (be(z) || K(z))
          return z = da(
            z,
            L.mode,
            H,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return ee(L, Go(z), H);
        if (z.$$typeof === D)
          return ee(
            L,
            ko(L, z),
            H
          );
        Vo(L, z);
      }
      return null;
    }
    function F(L, z, H, J) {
      var ye = z !== null ? z.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return ye !== null ? null : O(L, z, "" + H, J);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case b:
            return H.key === ye ? j(L, z, H, J) : null;
          case v:
            return H.key === ye ? q(L, z, H, J) : null;
          case B:
            return ye = H._init, H = ye(H._payload), F(L, z, H, J);
        }
        if (be(H) || K(H))
          return ye !== null ? null : Q(L, z, H, J, null);
        if (typeof H.then == "function")
          return F(
            L,
            z,
            Go(H),
            J
          );
        if (H.$$typeof === D)
          return F(
            L,
            z,
            ko(L, H),
            J
          );
        Vo(L, H);
      }
      return null;
    }
    function G(L, z, H, J, ye) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return L = L.get(H) || null, O(z, L, "" + J, ye);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case b:
            return L = L.get(
              J.key === null ? H : J.key
            ) || null, j(z, L, J, ye);
          case v:
            return L = L.get(
              J.key === null ? H : J.key
            ) || null, q(z, L, J, ye);
          case B:
            var He = J._init;
            return J = He(J._payload), G(
              L,
              z,
              H,
              J,
              ye
            );
        }
        if (be(J) || K(J))
          return L = L.get(H) || null, Q(z, L, J, ye, null);
        if (typeof J.then == "function")
          return G(
            L,
            z,
            H,
            Go(J),
            ye
          );
        if (J.$$typeof === D)
          return G(
            L,
            z,
            H,
            ko(z, J),
            ye
          );
        Vo(z, J);
      }
      return null;
    }
    function Oe(L, z, H, J) {
      for (var ye = null, He = null, xe = z, Te = z = 0, kt = null; xe !== null && Te < H.length; Te++) {
        xe.index > Te ? (kt = xe, xe = null) : kt = xe.sibling;
        var Xe = F(
          L,
          xe,
          H[Te],
          J
        );
        if (Xe === null) {
          xe === null && (xe = kt);
          break;
        }
        e && xe && Xe.alternate === null && n(L, xe), z = g(Xe, z, Te), He === null ? ye = Xe : He.sibling = Xe, He = Xe, xe = kt;
      }
      if (Te === H.length)
        return a(L, xe), $e && pa(L, Te), ye;
      if (xe === null) {
        for (; Te < H.length; Te++)
          xe = ee(L, H[Te], J), xe !== null && (z = g(
            xe,
            z,
            Te
          ), He === null ? ye = xe : He.sibling = xe, He = xe);
        return $e && pa(L, Te), ye;
      }
      for (xe = o(xe); Te < H.length; Te++)
        kt = G(
          xe,
          L,
          Te,
          H[Te],
          J
        ), kt !== null && (e && kt.alternate !== null && xe.delete(
          kt.key === null ? Te : kt.key
        ), z = g(
          kt,
          z,
          Te
        ), He === null ? ye = kt : He.sibling = kt, He = kt);
      return e && xe.forEach(function(Qr) {
        return n(L, Qr);
      }), $e && pa(L, Te), ye;
    }
    function Ne(L, z, H, J) {
      if (H == null) throw Error(s(151));
      for (var ye = null, He = null, xe = z, Te = z = 0, kt = null, Xe = H.next(); xe !== null && !Xe.done; Te++, Xe = H.next()) {
        xe.index > Te ? (kt = xe, xe = null) : kt = xe.sibling;
        var Qr = F(L, xe, Xe.value, J);
        if (Qr === null) {
          xe === null && (xe = kt);
          break;
        }
        e && xe && Qr.alternate === null && n(L, xe), z = g(Qr, z, Te), He === null ? ye = Qr : He.sibling = Qr, He = Qr, xe = kt;
      }
      if (Xe.done)
        return a(L, xe), $e && pa(L, Te), ye;
      if (xe === null) {
        for (; !Xe.done; Te++, Xe = H.next())
          Xe = ee(L, Xe.value, J), Xe !== null && (z = g(Xe, z, Te), He === null ? ye = Xe : He.sibling = Xe, He = Xe);
        return $e && pa(L, Te), ye;
      }
      for (xe = o(xe); !Xe.done; Te++, Xe = H.next())
        Xe = G(xe, L, Te, Xe.value, J), Xe !== null && (e && Xe.alternate !== null && xe.delete(Xe.key === null ? Te : Xe.key), z = g(Xe, z, Te), He === null ? ye = Xe : He.sibling = Xe, He = Xe);
      return e && xe.forEach(function(J_) {
        return n(L, J_);
      }), $e && pa(L, Te), ye;
    }
    function nt(L, z, H, J) {
      if (typeof H == "object" && H !== null && H.type === d && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case b:
            e: {
              for (var ye = H.key; z !== null; ) {
                if (z.key === ye) {
                  if (ye = H.type, ye === d) {
                    if (z.tag === 7) {
                      a(
                        L,
                        z.sibling
                      ), J = c(
                        z,
                        H.props.children
                      ), J.return = L, L = J;
                      break e;
                    }
                  } else if (z.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === B && hm(ye) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), J = c(z, H.props), ms(J, H), J.return = L, L = J;
                    break e;
                  }
                  a(L, z);
                  break;
                } else n(L, z);
                z = z.sibling;
              }
              H.type === d ? (J = da(
                H.props.children,
                L.mode,
                J,
                H.key
              ), J.return = L, L = J) : (J = To(
                H.type,
                H.key,
                H.props,
                null,
                L.mode,
                J
              ), ms(J, H), J.return = L, L = J);
            }
            return w(L);
          case v:
            e: {
              for (ye = H.key; z !== null; ) {
                if (z.key === ye)
                  if (z.tag === 4 && z.stateNode.containerInfo === H.containerInfo && z.stateNode.implementation === H.implementation) {
                    a(
                      L,
                      z.sibling
                    ), J = c(z, H.children || []), J.return = L, L = J;
                    break e;
                  } else {
                    a(L, z);
                    break;
                  }
                else n(L, z);
                z = z.sibling;
              }
              J = hc(H, L.mode, J), J.return = L, L = J;
            }
            return w(L);
          case B:
            return ye = H._init, H = ye(H._payload), nt(
              L,
              z,
              H,
              J
            );
        }
        if (be(H))
          return Oe(
            L,
            z,
            H,
            J
          );
        if (K(H)) {
          if (ye = K(H), typeof ye != "function") throw Error(s(150));
          return H = ye.call(H), Ne(
            L,
            z,
            H,
            J
          );
        }
        if (typeof H.then == "function")
          return nt(
            L,
            z,
            Go(H),
            J
          );
        if (H.$$typeof === D)
          return nt(
            L,
            z,
            ko(L, H),
            J
          );
        Vo(L, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, z !== null && z.tag === 6 ? (a(L, z.sibling), J = c(z, H), J.return = L, L = J) : (a(L, z), J = dc(H, L.mode, J), J.return = L, L = J), w(L)) : a(L, z);
    }
    return function(L, z, H, J) {
      try {
        ps = 0;
        var ye = nt(
          L,
          z,
          H,
          J
        );
        return ci = null, ye;
      } catch (xe) {
        if (xe === is || xe === Ro) throw xe;
        var He = cn(29, xe, null, L.mode);
        return He.lanes = J, He.return = L, He;
      } finally {
      }
    };
  }
  var fi = pm(!0), mm = pm(!1), On = W(null), $n = null;
  function zr(e) {
    var n = e.alternate;
    ce(At, At.current & 1), ce(On, e), $n === null && (n === null || si.current !== null || n.memoizedState !== null) && ($n = e);
  }
  function gm(e) {
    if (e.tag === 22) {
      if (ce(At, At.current), ce(On, e), $n === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && ($n = e);
      }
    } else Lr();
  }
  function Lr() {
    ce(At, At.current), ce(On, On.current);
  }
  function hr(e) {
    se(On), $n === e && ($n = null), se(At);
  }
  var At = W(0);
  function Yo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Lf(a)))
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
  function Vc(e, n, a, o) {
    n = e.memoizedState, a = a(o, n), a = a == null ? n : y({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Yc = {
    enqueueSetState: function(e, n, a) {
      e = e._reactInternals;
      var o = pn(), c = kr(o);
      c.payload = n, a != null && (c.callback = a), n = jr(e, c, o), n !== null && (mn(n, e, o), os(n, e, o));
    },
    enqueueReplaceState: function(e, n, a) {
      e = e._reactInternals;
      var o = pn(), c = kr(o);
      c.tag = 1, c.payload = n, a != null && (c.callback = a), n = jr(e, c, o), n !== null && (mn(n, e, o), os(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var a = pn(), o = kr(a);
      o.tag = 2, n != null && (o.callback = n), n = jr(e, o, a), n !== null && (mn(n, e, a), os(n, e, a));
    }
  };
  function vm(e, n, a, o, c, g, w) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, g, w) : n.prototype && n.prototype.isPureReactComponent ? !Ki(a, o) || !Ki(c, g) : !0;
  }
  function ym(e, n, a, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, o), n.state !== e && Yc.enqueueReplaceState(n, n.state, null);
  }
  function Sa(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var o in n)
        o !== "ref" && (a[o] = n[o]);
    }
    if (e = e.defaultProps) {
      a === n && (a = y({}, a));
      for (var c in e)
        a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  var Xo = typeof reportError == "function" ? reportError : function(e) {
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
  function bm(e) {
    Xo(e);
  }
  function _m(e) {
    console.error(e);
  }
  function Sm(e) {
    Xo(e);
  }
  function $o(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function xm(e, n, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Xc(e, n, a) {
    return a = kr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      $o(e, n);
    }, a;
  }
  function Em(e) {
    return e = kr(e), e.tag = 3, e;
  }
  function Cm(e, n, a, o) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var g = o.value;
      e.payload = function() {
        return c(g);
      }, e.callback = function() {
        xm(n, a, o);
      };
    }
    var w = a.stateNode;
    w !== null && typeof w.componentDidCatch == "function" && (e.callback = function() {
      xm(n, a, o), typeof c != "function" && (qr === null ? qr = /* @__PURE__ */ new Set([this]) : qr.add(this));
      var O = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: O !== null ? O : ""
      });
    });
  }
  function Jb(e, n, a, o, c) {
    if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = a.alternate, n !== null && ns(
        n,
        a,
        c,
        !0
      ), a = On.current, a !== null) {
        switch (a.tag) {
          case 13:
            return $n === null ? bf() : a.alternate === null && ht === 0 && (ht = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, o === Ec ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Sf(e, o, c)), !1;
          case 22:
            return a.flags |= 65536, o === Ec ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), Sf(e, o, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return Sf(e, o, c), bf(), !1;
    }
    if ($e)
      return n = On.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, o !== gc && (e = Error(s(422), { cause: o }), ts(wn(e, a)))) : (o !== gc && (n = Error(s(423), {
        cause: o
      }), ts(
        wn(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = wn(o, a), c = Xc(
        e.stateNode,
        o,
        c
      ), Ac(e, c), ht !== 4 && (ht = 2)), !1;
    var g = Error(s(520), { cause: o });
    if (g = wn(g, a), xs === null ? xs = [g] : xs.push(g), ht !== 4 && (ht = 2), n === null) return !0;
    o = wn(o, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Xc(a.stateNode, o, e), Ac(a, e), !1;
        case 1:
          if (n = a.type, g = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (qr === null || !qr.has(g))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = Em(c), Cm(
              c,
              e,
              a,
              o
            ), Ac(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var wm = Error(s(461)), Dt = !1;
  function jt(e, n, a, o) {
    n.child = e === null ? mm(n, null, a, o) : fi(
      n,
      e.child,
      a,
      o
    );
  }
  function Am(e, n, a, o, c) {
    a = a.render;
    var g = n.ref;
    if ("ref" in o) {
      var w = {};
      for (var O in o)
        O !== "ref" && (w[O] = o[O]);
    } else w = o;
    return ya(n), o = Mc(
      e,
      n,
      a,
      w,
      g,
      c
    ), O = kc(), e !== null && !Dt ? (jc(e, n, c), pr(e, n, c)) : ($e && O && pc(n), n.flags |= 1, jt(e, n, o, c), n.child);
  }
  function Nm(e, n, a, o, c) {
    if (e === null) {
      var g = a.type;
      return typeof g == "function" && !fc(g) && g.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = g, Tm(
        e,
        n,
        g,
        o,
        c
      )) : (e = To(
        a.type,
        null,
        o,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (g = e.child, !nf(e, c)) {
      var w = g.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ki, a(w, o) && e.ref === n.ref)
        return pr(e, n, c);
    }
    return n.flags |= 1, e = or(g, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Tm(e, n, a, o, c) {
    if (e !== null) {
      var g = e.memoizedProps;
      if (Ki(g, o) && e.ref === n.ref)
        if (Dt = !1, n.pendingProps = o = g, nf(e, c))
          (e.flags & 131072) !== 0 && (Dt = !0);
        else
          return n.lanes = e.lanes, pr(e, n, c);
    }
    return $c(
      e,
      n,
      a,
      o,
      c
    );
  }
  function Om(e, n, a) {
    var o = n.pendingProps, c = o.children, g = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = g !== null ? g.baseLanes | a : a, e !== null) {
          for (c = n.child = e.child, g = 0; c !== null; )
            g = g | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = g & ~o;
        } else n.childLanes = 0, n.child = null;
        return Dm(
          e,
          n,
          o,
          a
        );
      }
      if ((a & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && jo(
          n,
          g !== null ? g.cachePool : null
        ), g !== null ? Tp(n, g) : Tc(), gm(n);
      else
        return n.lanes = n.childLanes = 536870912, Dm(
          e,
          n,
          g !== null ? g.baseLanes | a : a,
          a
        );
    } else
      g !== null ? (jo(n, g.cachePool), Tp(n, g), Lr(), n.memoizedState = null) : (e !== null && jo(n, null), Tc(), Lr());
    return jt(e, n, c, a), n.child;
  }
  function Dm(e, n, a, o) {
    var c = xc();
    return c = c === null ? null : { parent: wt._currentValue, pool: c }, n.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && jo(n, null), Tc(), gm(n), e !== null && ns(e, n, o, !0), null;
  }
  function Qo(e, n) {
    var a = n.ref;
    if (a === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 4194816);
    }
  }
  function $c(e, n, a, o, c) {
    return ya(n), a = Mc(
      e,
      n,
      a,
      o,
      void 0,
      c
    ), o = kc(), e !== null && !Dt ? (jc(e, n, c), pr(e, n, c)) : ($e && o && pc(n), n.flags |= 1, jt(e, n, a, c), n.child);
  }
  function Mm(e, n, a, o, c, g) {
    return ya(n), n.updateQueue = null, a = Dp(
      n,
      o,
      a,
      c
    ), Op(e), o = kc(), e !== null && !Dt ? (jc(e, n, g), pr(e, n, g)) : ($e && o && pc(n), n.flags |= 1, jt(e, n, a, g), n.child);
  }
  function km(e, n, a, o, c) {
    if (ya(n), n.stateNode === null) {
      var g = ti, w = a.contextType;
      typeof w == "object" && w !== null && (g = Pt(w)), g = new a(o, g), n.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, g.updater = Yc, n.stateNode = g, g._reactInternals = n, g = n.stateNode, g.props = o, g.state = n.memoizedState, g.refs = {}, Cc(n), w = a.contextType, g.context = typeof w == "object" && w !== null ? Pt(w) : ti, g.state = n.memoizedState, w = a.getDerivedStateFromProps, typeof w == "function" && (Vc(
        n,
        a,
        w,
        o
      ), g.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (w = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), w !== g.state && Yc.enqueueReplaceState(g, g.state, null), us(n, o, g, c), ls(), g.state = n.memoizedState), typeof g.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      g = n.stateNode;
      var O = n.memoizedProps, j = Sa(a, O);
      g.props = j;
      var q = g.context, Q = a.contextType;
      w = ti, typeof Q == "object" && Q !== null && (w = Pt(Q));
      var ee = a.getDerivedStateFromProps;
      Q = typeof ee == "function" || typeof g.getSnapshotBeforeUpdate == "function", O = n.pendingProps !== O, Q || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (O || q !== w) && ym(
        n,
        g,
        o,
        w
      ), Mr = !1;
      var F = n.memoizedState;
      g.state = F, us(n, o, g, c), ls(), q = n.memoizedState, O || F !== q || Mr ? (typeof ee == "function" && (Vc(
        n,
        a,
        ee,
        o
      ), q = n.memoizedState), (j = Mr || vm(
        n,
        a,
        j,
        o,
        F,
        q,
        w
      )) ? (Q || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = q), g.props = o, g.state = q, g.context = w, o = j) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      g = n.stateNode, wc(e, n), w = n.memoizedProps, Q = Sa(a, w), g.props = Q, ee = n.pendingProps, F = g.context, q = a.contextType, j = ti, typeof q == "object" && q !== null && (j = Pt(q)), O = a.getDerivedStateFromProps, (q = typeof O == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (w !== ee || F !== j) && ym(
        n,
        g,
        o,
        j
      ), Mr = !1, F = n.memoizedState, g.state = F, us(n, o, g, c), ls();
      var G = n.memoizedState;
      w !== ee || F !== G || Mr || e !== null && e.dependencies !== null && Mo(e.dependencies) ? (typeof O == "function" && (Vc(
        n,
        a,
        O,
        o
      ), G = n.memoizedState), (Q = Mr || vm(
        n,
        a,
        Q,
        o,
        F,
        G,
        j
      ) || e !== null && e.dependencies !== null && Mo(e.dependencies)) ? (q || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(o, G, j), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(
        o,
        G,
        j
      )), typeof g.componentDidUpdate == "function" && (n.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || w === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = G), g.props = o, g.state = G, g.context = j, o = Q) : (typeof g.componentDidUpdate != "function" || w === e.memoizedProps && F === e.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && F === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return g = o, Qo(e, n), o = (n.flags & 128) !== 0, g || o ? (g = n.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : g.render(), n.flags |= 1, e !== null && o ? (n.child = fi(
      n,
      e.child,
      null,
      c
    ), n.child = fi(
      n,
      null,
      a,
      c
    )) : jt(e, n, a, c), n.memoizedState = g.state, e = n.child) : e = pr(
      e,
      n,
      c
    ), e;
  }
  function jm(e, n, a, o) {
    return es(), n.flags |= 256, jt(e, n, a, o), n.child;
  }
  var Qc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Kc(e) {
    return { baseLanes: e, cachePool: _p() };
  }
  function Jc(e, n, a) {
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= Dn), e;
  }
  function Rm(e, n, a) {
    var o = n.pendingProps, c = !1, g = (n.flags & 128) !== 0, w;
    if ((w = g) || (w = e !== null && e.memoizedState === null ? !1 : (At.current & 2) !== 0), w && (c = !0, n.flags &= -129), w = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if ($e) {
        if (c ? zr(n) : Lr(), $e) {
          var O = dt, j;
          if (j = O) {
            e: {
              for (j = O, O = Xn; j.nodeType !== 8; ) {
                if (!O) {
                  O = null;
                  break e;
                }
                if (j = Bn(
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
              treeContext: ha !== null ? { id: lr, overflow: ur } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, j = cn(
              18,
              null,
              null,
              0
            ), j.stateNode = O, j.return = n, n.child = j, Vt = n, dt = null, j = !0) : j = !1;
          }
          j || ga(n);
        }
        if (O = n.memoizedState, O !== null && (O = O.dehydrated, O !== null))
          return Lf(O) ? n.lanes = 32 : n.lanes = 536870912, null;
        hr(n);
      }
      return O = o.children, o = o.fallback, c ? (Lr(), c = n.mode, O = Ko(
        { mode: "hidden", children: O },
        c
      ), o = da(
        o,
        c,
        a,
        null
      ), O.return = n, o.return = n, O.sibling = o, n.child = O, c = n.child, c.memoizedState = Kc(a), c.childLanes = Jc(
        e,
        w,
        a
      ), n.memoizedState = Qc, o) : (zr(n), Wc(n, O));
    }
    if (j = e.memoizedState, j !== null && (O = j.dehydrated, O !== null)) {
      if (g)
        n.flags & 256 ? (zr(n), n.flags &= -257, n = ef(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (Lr(), n.child = e.child, n.flags |= 128, n = null) : (Lr(), c = o.fallback, O = n.mode, o = Ko(
          { mode: "visible", children: o.children },
          O
        ), c = da(
          c,
          O,
          a,
          null
        ), c.flags |= 2, o.return = n, c.return = n, o.sibling = c, n.child = o, fi(
          n,
          e.child,
          null,
          a
        ), o = n.child, o.memoizedState = Kc(a), o.childLanes = Jc(
          e,
          w,
          a
        ), n.memoizedState = Qc, n = c);
      else if (zr(n), Lf(O)) {
        if (w = O.nextSibling && O.nextSibling.dataset, w) var q = w.dgst;
        w = q, o = Error(s(419)), o.stack = "", o.digest = w, ts({ value: o, source: null, stack: null }), n = ef(
          e,
          n,
          a
        );
      } else if (Dt || ns(e, n, a, !1), w = (a & e.childLanes) !== 0, Dt || w) {
        if (w = at, w !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Lu(o), o = (o & (w.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== j.retryLane))
          throw j.retryLane = o, ei(e, o), mn(w, e, o), wm;
        O.data === "$?" || bf(), n = ef(
          e,
          n,
          a
        );
      } else
        O.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = j.treeContext, dt = Bn(
          O.nextSibling
        ), Vt = n, $e = !0, ma = null, Xn = !1, e !== null && (Nn[Tn++] = lr, Nn[Tn++] = ur, Nn[Tn++] = ha, lr = e.id, ur = e.overflow, ha = n), n = Wc(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (Lr(), c = o.fallback, O = n.mode, j = e.child, q = j.sibling, o = or(j, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = j.subtreeFlags & 65011712, q !== null ? c = or(q, c) : (c = da(
      c,
      O,
      a,
      null
    ), c.flags |= 2), c.return = n, o.return = n, o.sibling = c, n.child = o, o = c, c = n.child, O = e.child.memoizedState, O === null ? O = Kc(a) : (j = O.cachePool, j !== null ? (q = wt._currentValue, j = j.parent !== q ? { parent: q, pool: q } : j) : j = _p(), O = {
      baseLanes: O.baseLanes | a,
      cachePool: j
    }), c.memoizedState = O, c.childLanes = Jc(
      e,
      w,
      a
    ), n.memoizedState = Qc, o) : (zr(n), a = e.child, e = a.sibling, a = or(a, {
      mode: "visible",
      children: o.children
    }), a.return = n, a.sibling = null, e !== null && (w = n.deletions, w === null ? (n.deletions = [e], n.flags |= 16) : w.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function Wc(e, n) {
    return n = Ko(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Ko(e, n) {
    return e = cn(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function ef(e, n, a) {
    return fi(n, e.child, null, a), e = Wc(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function zm(e, n, a) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), yc(e.return, n, a);
  }
  function tf(e, n, a, o, c) {
    var g = e.memoizedState;
    g === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: a,
      tailMode: c
    } : (g.isBackwards = n, g.rendering = null, g.renderingStartTime = 0, g.last = o, g.tail = a, g.tailMode = c);
  }
  function Lm(e, n, a) {
    var o = n.pendingProps, c = o.revealOrder, g = o.tail;
    if (jt(e, n, o.children, a), o = At.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && zm(e, a, n);
          else if (e.tag === 19)
            zm(e, a, n);
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
    switch (ce(At, o), c) {
      case "forwards":
        for (a = n.child, c = null; a !== null; )
          e = a.alternate, e !== null && Yo(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = n.child, n.child = null) : (c = a.sibling, a.sibling = null), tf(
          n,
          !1,
          c,
          a,
          g
        );
        break;
      case "backwards":
        for (a = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Yo(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = a, a = c, c = e;
        }
        tf(
          n,
          !0,
          a,
          null,
          g
        );
        break;
      case "together":
        tf(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function pr(e, n, a) {
    if (e !== null && (n.dependencies = e.dependencies), Hr |= n.lanes, (a & n.childLanes) === 0)
      if (e !== null) {
        if (ns(
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
      for (e = n.child, a = or(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; )
        e = e.sibling, a = a.sibling = or(e, e.pendingProps), a.return = n;
      a.sibling = null;
    }
    return n.child;
  }
  function nf(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Mo(e)));
  }
  function Wb(e, n, a) {
    switch (n.tag) {
      case 3:
        Ee(n, n.stateNode.containerInfo), Dr(n, wt, e.memoizedState.cache), es();
        break;
      case 27:
      case 5:
        We(n);
        break;
      case 4:
        Ee(n, n.stateNode.containerInfo);
        break;
      case 10:
        Dr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (zr(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? Rm(e, n, a) : (zr(n), e = pr(
            e,
            n,
            a
          ), e !== null ? e.sibling : null);
        zr(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (o = (a & n.childLanes) !== 0, o || (ns(
          e,
          n,
          a,
          !1
        ), o = (a & n.childLanes) !== 0), c) {
          if (o)
            return Lm(
              e,
              n,
              a
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ce(At, At.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Om(e, n, a);
      case 24:
        Dr(n, wt, e.memoizedState.cache);
    }
    return pr(e, n, a);
  }
  function Im(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Dt = !0;
      else {
        if (!nf(e, a) && (n.flags & 128) === 0)
          return Dt = !1, Wb(
            e,
            n,
            a
          );
        Dt = (e.flags & 131072) !== 0;
      }
    else
      Dt = !1, $e && (n.flags & 1048576) !== 0 && hp(n, Do, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, c = o._init;
          if (o = c(o._payload), n.type = o, typeof o == "function")
            fc(o) ? (e = Sa(o, e), n.tag = 1, n = km(
              null,
              n,
              o,
              e,
              a
            )) : (n.tag = 0, n = $c(
              null,
              n,
              o,
              e,
              a
            ));
          else {
            if (o != null) {
              if (c = o.$$typeof, c === C) {
                n.tag = 11, n = Am(
                  null,
                  n,
                  o,
                  e,
                  a
                );
                break e;
              } else if (c === k) {
                n.tag = 14, n = Nm(
                  null,
                  n,
                  o,
                  e,
                  a
                );
                break e;
              }
            }
            throw n = ge(o) || o, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return $c(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 1:
        return o = n.type, c = Sa(
          o,
          n.pendingProps
        ), km(
          e,
          n,
          o,
          c,
          a
        );
      case 3:
        e: {
          if (Ee(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          o = n.pendingProps;
          var g = n.memoizedState;
          c = g.element, wc(e, n), us(n, o, null, a);
          var w = n.memoizedState;
          if (o = w.cache, Dr(n, wt, o), o !== g.cache && bc(
            n,
            [wt],
            a,
            !0
          ), ls(), o = w.element, g.isDehydrated)
            if (g = {
              element: o,
              isDehydrated: !1,
              cache: w.cache
            }, n.updateQueue.baseState = g, n.memoizedState = g, n.flags & 256) {
              n = jm(
                e,
                n,
                o,
                a
              );
              break e;
            } else if (o !== c) {
              c = wn(
                Error(s(424)),
                n
              ), ts(c), n = jm(
                e,
                n,
                o,
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
              for (dt = Bn(e.firstChild), Vt = n, $e = !0, ma = null, Xn = !0, a = mm(
                n,
                null,
                o,
                a
              ), n.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (es(), o === c) {
              n = pr(
                e,
                n,
                a
              );
              break e;
            }
            jt(
              e,
              n,
              o,
              a
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Qo(e, n), e === null ? (a = Hg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = a : $e || (a = n.type, e = n.pendingProps, o = fl(
          X.current
        ).createElement(a), o[It] = n, o[Jt] = e, zt(o, a, e), Ot(o), n.stateNode = o) : n.memoizedState = Hg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return We(n), e === null && $e && (o = n.stateNode = Pg(
          n.type,
          n.pendingProps,
          X.current
        ), Vt = n, Xn = !0, c = dt, Gr(n.type) ? (If = c, dt = Bn(
          o.firstChild
        )) : dt = c), jt(
          e,
          n,
          n.pendingProps.children,
          a
        ), Qo(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && $e && ((c = o = dt) && (o = N_(
          o,
          n.type,
          n.pendingProps,
          Xn
        ), o !== null ? (n.stateNode = o, Vt = n, dt = Bn(
          o.firstChild
        ), Xn = !1, c = !0) : c = !1), c || ga(n)), We(n), c = n.type, g = n.pendingProps, w = e !== null ? e.memoizedProps : null, o = g.children, jf(c, g) ? o = null : w !== null && jf(c, w) && (n.flags |= 32), n.memoizedState !== null && (c = Mc(
          e,
          n,
          Gb,
          null,
          null,
          a
        ), Ms._currentValue = c), Qo(e, n), jt(e, n, o, a), n.child;
      case 6:
        return e === null && $e && ((e = a = dt) && (a = T_(
          a,
          n.pendingProps,
          Xn
        ), a !== null ? (n.stateNode = a, Vt = n, dt = null, e = !0) : e = !1), e || ga(n)), null;
      case 13:
        return Rm(e, n, a);
      case 4:
        return Ee(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = fi(
          n,
          null,
          o,
          a
        ) : jt(
          e,
          n,
          o,
          a
        ), n.child;
      case 11:
        return Am(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 7:
        return jt(
          e,
          n,
          n.pendingProps,
          a
        ), n.child;
      case 8:
        return jt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 12:
        return jt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 10:
        return o = n.pendingProps, Dr(n, n.type, o.value), jt(
          e,
          n,
          o.children,
          a
        ), n.child;
      case 9:
        return c = n.type._context, o = n.pendingProps.children, ya(n), c = Pt(c), o = o(c), n.flags |= 1, jt(e, n, o, a), n.child;
      case 14:
        return Nm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 15:
        return Tm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 19:
        return Lm(e, n, a);
      case 31:
        return o = n.pendingProps, a = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (a = Ko(
          o,
          a
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = or(e.child, o), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return Om(e, n, a);
      case 24:
        return ya(n), o = Pt(wt), e === null ? (c = xc(), c === null && (c = at, g = _c(), c.pooledCache = g, g.refCount++, g !== null && (c.pooledCacheLanes |= a), c = g), n.memoizedState = {
          parent: o,
          cache: c
        }, Cc(n), Dr(n, wt, c)) : ((e.lanes & a) !== 0 && (wc(e, n), us(n, null, null, a), ls()), c = e.memoizedState, g = n.memoizedState, c.parent !== o ? (c = { parent: o, cache: o }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Dr(n, wt, o)) : (o = g.cache, Dr(n, wt, o), o !== c.cache && bc(
          n,
          [wt],
          a,
          !0
        ))), jt(
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
  function mr(e) {
    e.flags |= 4;
  }
  function Pm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Vg(n)) {
      if (n = On.current, n !== null && ((Ve & 4194048) === Ve ? $n !== null : (Ve & 62914560) !== Ve && (Ve & 536870912) === 0 || n !== $n))
        throw ss = Ec, Sp;
      e.flags |= 8192;
    }
  }
  function Jo(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? gh() : 536870912, e.lanes |= n, mi |= n);
  }
  function gs(e, n) {
    if (!$e)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), a = a.sibling;
          o === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function ut(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, a = 0, o = 0;
    if (n)
      for (var c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, o |= c.subtreeFlags & 65011712, o |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= o, e.childLanes = a, n;
  }
  function e_(e, n, a) {
    var o = n.pendingProps;
    switch (mc(n), n.tag) {
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
        return a = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), fr(wt), Ye(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Wi(n) ? mr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, gp())), ut(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (mr(n), a !== null ? (ut(n), Pm(n, a)) : (ut(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (mr(n), ut(n), Pm(n, a)) : (ut(n), n.flags &= -16777217) : (e.memoizedProps !== o && mr(n), ut(n), n.flags &= -16777217), null;
      case 27:
        je(n), a = X.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && mr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          e = de.current, Wi(n) ? pp(n) : (e = Pg(c, o, a), n.stateNode = e, mr(n));
        }
        return ut(n), null;
      case 5:
        if (je(n), a = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && mr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ut(n), null;
          }
          if (e = de.current, Wi(n))
            pp(n);
          else {
            switch (c = fl(
              X.current
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
                    e = typeof o.is == "string" ? c.createElement("select", { is: o.is }) : c.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? c.createElement(a, { is: o.is }) : c.createElement(a);
                }
            }
            e[It] = n, e[Jt] = o;
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
            e: switch (zt(e, a, o), a) {
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
            e && mr(n);
          }
        }
        return ut(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== o && mr(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = X.current, Wi(n)) {
            if (e = n.stateNode, a = n.memoizedProps, o = null, c = Vt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            e[It] = n, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || Mg(e.nodeValue, a)), e || ga(n);
          } else
            e = fl(e).createTextNode(
              o
            ), e[It] = n, n.stateNode = e;
        }
        return ut(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Wi(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[It] = n;
            } else
              es(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ut(n), c = !1;
          } else
            c = gp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (hr(n), n) : (hr(n), null);
        }
        if (hr(n), (n.flags & 128) !== 0)
          return n.lanes = a, n;
        if (a = o !== null, e = e !== null && e.memoizedState !== null, a) {
          o = n.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool);
          var g = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (g = o.memoizedState.cachePool.pool), g !== c && (o.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), Jo(n, n.updateQueue), ut(n), null;
      case 4:
        return Ye(), e === null && Tf(n.stateNode.containerInfo), ut(n), null;
      case 10:
        return fr(n.type), ut(n), null;
      case 19:
        if (se(At), c = n.memoizedState, c === null) return ut(n), null;
        if (o = (n.flags & 128) !== 0, g = c.rendering, g === null)
          if (o) gs(c, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (g = Yo(e), g !== null) {
                  for (n.flags |= 128, gs(c, !1), e = g.updateQueue, n.updateQueue = e, Jo(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    dp(a, e), a = a.sibling;
                  return ce(
                    At,
                    At.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && he() > tl && (n.flags |= 128, o = !0, gs(c, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Yo(g), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, Jo(n, e), gs(c, !0), c.tail === null && c.tailMode === "hidden" && !g.alternate && !$e)
                return ut(n), null;
            } else
              2 * he() - c.renderingStartTime > tl && a !== 536870912 && (n.flags |= 128, o = !0, gs(c, !1), n.lanes = 4194304);
          c.isBackwards ? (g.sibling = n.child, n.child = g) : (e = c.last, e !== null ? e.sibling = g : n.child = g, c.last = g);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = he(), n.sibling = null, e = At.current, ce(At, o ? e & 1 | 2 : e & 1), n) : (ut(n), null);
      case 22:
      case 23:
        return hr(n), Oc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (ut(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ut(n), a = n.updateQueue, a !== null && Jo(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== a && (n.flags |= 2048), e !== null && se(ba), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), fr(wt), ut(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function t_(e, n) {
    switch (mc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return fr(wt), Ye(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return je(n), null;
      case 13:
        if (hr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          es();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return se(At), null;
      case 4:
        return Ye(), null;
      case 10:
        return fr(n.type), null;
      case 22:
      case 23:
        return hr(n), Oc(), e !== null && se(ba), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return fr(wt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bm(e, n) {
    switch (mc(n), n.tag) {
      case 3:
        fr(wt), Ye();
        break;
      case 26:
      case 27:
      case 5:
        je(n);
        break;
      case 4:
        Ye();
        break;
      case 13:
        hr(n);
        break;
      case 19:
        se(At);
        break;
      case 10:
        fr(n.type);
        break;
      case 22:
      case 23:
        hr(n), Oc(), e !== null && se(ba);
        break;
      case 24:
        fr(wt);
    }
  }
  function vs(e, n) {
    try {
      var a = n.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var g = a.create, w = a.inst;
            o = g(), w.destroy = o;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (O) {
      rt(n, n.return, O);
    }
  }
  function Ir(e, n, a) {
    try {
      var o = n.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var g = c.next;
        o = g;
        do {
          if ((o.tag & e) === e) {
            var w = o.inst, O = w.destroy;
            if (O !== void 0) {
              w.destroy = void 0, c = n;
              var j = a, q = O;
              try {
                q();
              } catch (Q) {
                rt(
                  c,
                  j,
                  Q
                );
              }
            }
          }
          o = o.next;
        } while (o !== g);
      }
    } catch (Q) {
      rt(n, n.return, Q);
    }
  }
  function Um(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        Np(n, a);
      } catch (o) {
        rt(e, e.return, o);
      }
    }
  }
  function Hm(e, n, a) {
    a.props = Sa(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (o) {
      rt(e, n, o);
    }
  }
  function ys(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
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
        typeof a == "function" ? e.refCleanup = a(o) : a.current = o;
      }
    } catch (c) {
      rt(e, n, c);
    }
  }
  function Qn(e, n) {
    var a = e.ref, o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          rt(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          rt(e, n, c);
        }
      else a.current = null;
  }
  function qm(e) {
    var n = e.type, a = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? o.src = a.src : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (c) {
      rt(e, e.return, c);
    }
  }
  function rf(e, n, a) {
    try {
      var o = e.stateNode;
      x_(o, e.type, a, n), o[Jt] = n;
    } catch (c) {
      rt(e, e.return, c);
    }
  }
  function Fm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Gr(e.type) || e.tag === 4;
  }
  function af(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Gr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function sf(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = cl));
    else if (o !== 4 && (o === 27 && Gr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for (sf(e, n, a), e = e.sibling; e !== null; )
        sf(e, n, a), e = e.sibling;
  }
  function Wo(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (o !== 4 && (o === 27 && Gr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Wo(e, n, a), e = e.sibling; e !== null; )
        Wo(e, n, a), e = e.sibling;
  }
  function Zm(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      zt(n, o, a), n[It] = e, n[Jt] = a;
    } catch (g) {
      rt(e, e.return, g);
    }
  }
  var gr = !1, yt = !1, of = !1, Gm = typeof WeakSet == "function" ? WeakSet : Set, Mt = null;
  function n_(e, n) {
    if (e = e.containerInfo, Mf = vl, e = np(e), ac(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var c = o.anchorOffset, g = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, g.nodeType;
            } catch {
              a = null;
              break e;
            }
            var w = 0, O = -1, j = -1, q = 0, Q = 0, ee = e, F = null;
            t: for (; ; ) {
              for (var G; ee !== a || c !== 0 && ee.nodeType !== 3 || (O = w + c), ee !== g || o !== 0 && ee.nodeType !== 3 || (j = w + o), ee.nodeType === 3 && (w += ee.nodeValue.length), (G = ee.firstChild) !== null; )
                F = ee, ee = G;
              for (; ; ) {
                if (ee === e) break t;
                if (F === a && ++q === c && (O = w), F === g && ++Q === o && (j = w), (G = ee.nextSibling) !== null) break;
                ee = F, F = ee.parentNode;
              }
              ee = G;
            }
            a = O === -1 || j === -1 ? null : { start: O, end: j };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (kf = { focusedElem: e, selectionRange: a }, vl = !1, Mt = n; Mt !== null; )
      if (n = Mt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, Mt = e;
      else
        for (; Mt !== null; ) {
          switch (n = Mt, g = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && g !== null) {
                e = void 0, a = n, c = g.memoizedProps, g = g.memoizedState, o = a.stateNode;
                try {
                  var Oe = Sa(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Oe,
                    g
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Ne) {
                  rt(
                    a,
                    a.return,
                    Ne
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, a = e.nodeType, a === 9)
                  zf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      zf(e);
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
            e.return = n.return, Mt = e;
            break;
          }
          Mt = n.return;
        }
  }
  function Vm(e, n, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e, a), o & 4 && vs(5, a);
        break;
      case 1:
        if (Pr(e, a), o & 4)
          if (e = a.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (w) {
              rt(a, a.return, w);
            }
          else {
            var c = Sa(
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
              rt(
                a,
                a.return,
                w
              );
            }
          }
        o & 64 && Um(a), o & 512 && ys(a, a.return);
        break;
      case 3:
        if (Pr(e, a), o & 64 && (e = a.updateQueue, e !== null)) {
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
            Np(e, n);
          } catch (w) {
            rt(a, a.return, w);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Zm(a);
      case 26:
      case 5:
        Pr(e, a), n === null && o & 4 && qm(a), o & 512 && ys(a, a.return);
        break;
      case 12:
        Pr(e, a);
        break;
      case 13:
        Pr(e, a), o & 4 && $m(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = f_.bind(
          null,
          a
        ), O_(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || gr, !o) {
          n = n !== null && n.memoizedState !== null || yt, c = gr;
          var g = yt;
          gr = o, (yt = n) && !g ? Br(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Pr(e, a), gr = c, yt = g;
        }
        break;
      case 30:
        break;
      default:
        Pr(e, a);
    }
  }
  function Ym(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Ym(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Bu(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, tn = !1;
  function vr(e, n, a) {
    for (a = a.child; a !== null; )
      Xm(e, n, a), a = a.sibling;
  }
  function Xm(e, n, a) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(rr, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        yt || Qn(a, n), vr(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        yt || Qn(a, n);
        var o = st, c = tn;
        Gr(a.type) && (st = a.stateNode, tn = !1), vr(
          e,
          n,
          a
        ), Ns(a.stateNode), st = o, tn = c;
        break;
      case 5:
        yt || Qn(a, n);
      case 6:
        if (o = st, c = tn, st = null, vr(
          e,
          n,
          a
        ), st = o, tn = c, st !== null)
          if (tn)
            try {
              (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(a.stateNode);
            } catch (g) {
              rt(
                a,
                n,
                g
              );
            }
          else
            try {
              st.removeChild(a.stateNode);
            } catch (g) {
              rt(
                a,
                n,
                g
              );
            }
        break;
      case 18:
        st !== null && (tn ? (e = st, Lg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), zs(e)) : Lg(st, a.stateNode));
        break;
      case 4:
        o = st, c = tn, st = a.stateNode.containerInfo, tn = !0, vr(
          e,
          n,
          a
        ), st = o, tn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yt || Ir(2, a, n), yt || Ir(4, a, n), vr(
          e,
          n,
          a
        );
        break;
      case 1:
        yt || (Qn(a, n), o = a.stateNode, typeof o.componentWillUnmount == "function" && Hm(
          a,
          n,
          o
        )), vr(
          e,
          n,
          a
        );
        break;
      case 21:
        vr(
          e,
          n,
          a
        );
        break;
      case 22:
        yt = (o = yt) || a.memoizedState !== null, vr(
          e,
          n,
          a
        ), yt = o;
        break;
      default:
        vr(
          e,
          n,
          a
        );
    }
  }
  function $m(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        zs(e);
      } catch (a) {
        rt(n, n.return, a);
      }
  }
  function r_(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Gm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Gm()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function lf(e, n) {
    var a = r_(e);
    n.forEach(function(o) {
      var c = d_.bind(null, e, o);
      a.has(o) || (a.add(o), o.then(c, c));
    });
  }
  function fn(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var c = a[o], g = e, w = n, O = w;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (Gr(O.type)) {
                st = O.stateNode, tn = !1;
                break e;
              }
              break;
            case 5:
              st = O.stateNode, tn = !1;
              break e;
            case 3:
            case 4:
              st = O.stateNode.containerInfo, tn = !0;
              break e;
          }
          O = O.return;
        }
        if (st === null) throw Error(s(160));
        Xm(g, w, c), st = null, tn = !1, g = c.alternate, g !== null && (g.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Qm(n, e), n = n.sibling;
  }
  var Pn = null;
  function Qm(e, n) {
    var a = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fn(n, e), dn(e), o & 4 && (Ir(3, e, e.return), vs(3, e), Ir(5, e, e.return));
        break;
      case 1:
        fn(n, e), dn(e), o & 512 && (yt || a === null || Qn(a, a.return)), o & 64 && gr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
        break;
      case 26:
        var c = Pn;
        if (fn(n, e), dn(e), o & 512 && (yt || a === null || Qn(a, a.return)), o & 4) {
          var g = a !== null ? a.memoizedState : null;
          if (o = e.memoizedState, a === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (o) {
                    case "title":
                      g = c.getElementsByTagName("title")[0], (!g || g[qi] || g[It] || g.namespaceURI === "http://www.w3.org/2000/svg" || g.hasAttribute("itemprop")) && (g = c.createElement(o), c.head.insertBefore(
                        g,
                        c.querySelector("head > title")
                      )), zt(g, o, a), g[It] = e, Ot(g), o = g;
                      break e;
                    case "link":
                      var w = Zg(
                        "link",
                        "href",
                        c
                      ).get(o + (a.href || ""));
                      if (w) {
                        for (var O = 0; O < w.length; O++)
                          if (g = w[O], g.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && g.getAttribute("rel") === (a.rel == null ? null : a.rel) && g.getAttribute("title") === (a.title == null ? null : a.title) && g.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            w.splice(O, 1);
                            break t;
                          }
                      }
                      g = c.createElement(o), zt(g, o, a), c.head.appendChild(g);
                      break;
                    case "meta":
                      if (w = Zg(
                        "meta",
                        "content",
                        c
                      ).get(o + (a.content || ""))) {
                        for (O = 0; O < w.length; O++)
                          if (g = w[O], g.getAttribute("content") === (a.content == null ? null : "" + a.content) && g.getAttribute("name") === (a.name == null ? null : a.name) && g.getAttribute("property") === (a.property == null ? null : a.property) && g.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && g.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            w.splice(O, 1);
                            break t;
                          }
                      }
                      g = c.createElement(o), zt(g, o, a), c.head.appendChild(g);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  g[It] = e, Ot(g), o = g;
                }
                e.stateNode = o;
              } else
                Gg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Fg(
                c,
                o,
                e.memoizedProps
              );
          else
            g !== o ? (g === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : g.count--, o === null ? Gg(
              c,
              e.type,
              e.stateNode
            ) : Fg(
              c,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && rf(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        fn(n, e), dn(e), o & 512 && (yt || a === null || Qn(a, a.return)), a !== null && o & 4 && rf(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (fn(n, e), dn(e), o & 512 && (yt || a === null || Qn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Ya(c, "");
          } catch (G) {
            rt(e, e.return, G);
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, rf(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), o & 1024 && (of = !0);
        break;
      case 6:
        if (fn(n, e), dn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          o = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = o;
          } catch (G) {
            rt(e, e.return, G);
          }
        }
        break;
      case 3:
        if (pl = null, c = Pn, Pn = dl(n.containerInfo), fn(n, e), Pn = c, dn(e), o & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            zs(n.containerInfo);
          } catch (G) {
            rt(e, e.return, G);
          }
        of && (of = !1, Km(e));
        break;
      case 4:
        o = Pn, Pn = dl(
          e.stateNode.containerInfo
        ), fn(n, e), dn(e), Pn = o;
        break;
      case 12:
        fn(n, e), dn(e);
        break;
      case 13:
        fn(n, e), dn(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (pf = he()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, lf(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var j = a !== null && a.memoizedState !== null, q = gr, Q = yt;
        if (gr = q || c, yt = Q || j, fn(n, e), yt = Q, gr = q, dn(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || j || gr || yt || xa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                j = a = n;
                try {
                  if (g = j.stateNode, c)
                    w = g.style, typeof w.setProperty == "function" ? w.setProperty("display", "none", "important") : w.display = "none";
                  else {
                    O = j.stateNode;
                    var ee = j.memoizedProps.style, F = ee != null && ee.hasOwnProperty("display") ? ee.display : null;
                    O.style.display = F == null || typeof F == "boolean" ? "" : ("" + F).trim();
                  }
                } catch (G) {
                  rt(j, j.return, G);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                j = n;
                try {
                  j.stateNode.nodeValue = c ? "" : j.memoizedProps;
                } catch (G) {
                  rt(j, j.return, G);
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
        o & 4 && (o = e.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, lf(e, a))));
        break;
      case 19:
        fn(n, e), dn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, lf(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        fn(n, e), dn(e);
    }
  }
  function dn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var a, o = e.return; o !== null; ) {
          if (Fm(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, g = af(e);
            Wo(e, g, c);
            break;
          case 5:
            var w = a.stateNode;
            a.flags & 32 && (Ya(w, ""), a.flags &= -33);
            var O = af(e);
            Wo(e, O, w);
            break;
          case 3:
          case 4:
            var j = a.stateNode.containerInfo, q = af(e);
            sf(
              e,
              q,
              j
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (Q) {
        rt(e, e.return, Q);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Km(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Km(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Vm(e, n.alternate, n), n = n.sibling;
  }
  function xa(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ir(4, n, n.return), xa(n);
          break;
        case 1:
          Qn(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && Hm(
            n,
            n.return,
            a
          ), xa(n);
          break;
        case 27:
          Ns(n.stateNode);
        case 26:
        case 5:
          Qn(n, n.return), xa(n);
          break;
        case 22:
          n.memoizedState === null && xa(n);
          break;
        case 30:
          xa(n);
          break;
        default:
          xa(n);
      }
      e = e.sibling;
    }
  }
  function Br(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate, c = e, g = n, w = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Br(
            c,
            g,
            a
          ), vs(4, g);
          break;
        case 1:
          if (Br(
            c,
            g,
            a
          ), o = g, c = o.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (q) {
              rt(o, o.return, q);
            }
          if (o = g, c = o.updateQueue, c !== null) {
            var O = o.stateNode;
            try {
              var j = c.shared.hiddenCallbacks;
              if (j !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < j.length; c++)
                  Ap(j[c], O);
            } catch (q) {
              rt(o, o.return, q);
            }
          }
          a && w & 64 && Um(g), ys(g, g.return);
          break;
        case 27:
          Zm(g);
        case 26:
        case 5:
          Br(
            c,
            g,
            a
          ), a && o === null && w & 4 && qm(g), ys(g, g.return);
          break;
        case 12:
          Br(
            c,
            g,
            a
          );
          break;
        case 13:
          Br(
            c,
            g,
            a
          ), a && w & 4 && $m(c, g);
          break;
        case 22:
          g.memoizedState === null && Br(
            c,
            g,
            a
          ), ys(g, g.return);
          break;
        case 30:
          break;
        default:
          Br(
            c,
            g,
            a
          );
      }
      n = n.sibling;
    }
  }
  function uf(e, n) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && rs(a));
  }
  function cf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e));
  }
  function Kn(e, n, a, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Jm(
          e,
          n,
          a,
          o
        ), n = n.sibling;
  }
  function Jm(e, n, a, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Kn(
          e,
          n,
          a,
          o
        ), c & 2048 && vs(9, n);
        break;
      case 1:
        Kn(
          e,
          n,
          a,
          o
        );
        break;
      case 3:
        Kn(
          e,
          n,
          a,
          o
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && rs(e)));
        break;
      case 12:
        if (c & 2048) {
          Kn(
            e,
            n,
            a,
            o
          ), e = n.stateNode;
          try {
            var g = n.memoizedProps, w = g.id, O = g.onPostCommit;
            typeof O == "function" && O(
              w,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (j) {
            rt(n, n.return, j);
          }
        } else
          Kn(
            e,
            n,
            a,
            o
          );
        break;
      case 13:
        Kn(
          e,
          n,
          a,
          o
        );
        break;
      case 23:
        break;
      case 22:
        g = n.stateNode, w = n.alternate, n.memoizedState !== null ? g._visibility & 2 ? Kn(
          e,
          n,
          a,
          o
        ) : bs(e, n) : g._visibility & 2 ? Kn(
          e,
          n,
          a,
          o
        ) : (g._visibility |= 2, di(
          e,
          n,
          a,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && uf(w, n);
        break;
      case 24:
        Kn(
          e,
          n,
          a,
          o
        ), c & 2048 && cf(n.alternate, n);
        break;
      default:
        Kn(
          e,
          n,
          a,
          o
        );
    }
  }
  function di(e, n, a, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var g = e, w = n, O = a, j = o, q = w.flags;
      switch (w.tag) {
        case 0:
        case 11:
        case 15:
          di(
            g,
            w,
            O,
            j,
            c
          ), vs(8, w);
          break;
        case 23:
          break;
        case 22:
          var Q = w.stateNode;
          w.memoizedState !== null ? Q._visibility & 2 ? di(
            g,
            w,
            O,
            j,
            c
          ) : bs(
            g,
            w
          ) : (Q._visibility |= 2, di(
            g,
            w,
            O,
            j,
            c
          )), c && q & 2048 && uf(
            w.alternate,
            w
          );
          break;
        case 24:
          di(
            g,
            w,
            O,
            j,
            c
          ), c && q & 2048 && cf(w.alternate, w);
          break;
        default:
          di(
            g,
            w,
            O,
            j,
            c
          );
      }
      n = n.sibling;
    }
  }
  function bs(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e, o = n, c = o.flags;
        switch (o.tag) {
          case 22:
            bs(a, o), c & 2048 && uf(
              o.alternate,
              o
            );
            break;
          case 24:
            bs(a, o), c & 2048 && cf(o.alternate, o);
            break;
          default:
            bs(a, o);
        }
        n = n.sibling;
      }
  }
  var _s = 8192;
  function hi(e) {
    if (e.subtreeFlags & _s)
      for (e = e.child; e !== null; )
        Wm(e), e = e.sibling;
  }
  function Wm(e) {
    switch (e.tag) {
      case 26:
        hi(e), e.flags & _s && e.memoizedState !== null && q_(
          Pn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        hi(e);
        break;
      case 3:
      case 4:
        var n = Pn;
        Pn = dl(e.stateNode.containerInfo), hi(e), Pn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = _s, _s = 16777216, hi(e), _s = n) : hi(e));
        break;
      default:
        hi(e);
    }
  }
  function eg(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Ss(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          Mt = o, ng(
            o,
            e
          );
        }
      eg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        tg(e), e = e.sibling;
  }
  function tg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ss(e), e.flags & 2048 && Ir(9, e, e.return);
        break;
      case 3:
        Ss(e);
        break;
      case 12:
        Ss(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, el(e)) : Ss(e);
        break;
      default:
        Ss(e);
    }
  }
  function el(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          Mt = o, ng(
            o,
            e
          );
        }
      eg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Ir(8, n, n.return), el(n);
          break;
        case 22:
          a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, el(n));
          break;
        default:
          el(n);
      }
      e = e.sibling;
    }
  }
  function ng(e, n) {
    for (; Mt !== null; ) {
      var a = Mt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ir(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          rs(a.memoizedState.cache);
      }
      if (o = a.child, o !== null) o.return = a, Mt = o;
      else
        e: for (a = e; Mt !== null; ) {
          o = Mt;
          var c = o.sibling, g = o.return;
          if (Ym(o), o === a) {
            Mt = null;
            break e;
          }
          if (c !== null) {
            c.return = g, Mt = c;
            break e;
          }
          Mt = g;
        }
    }
  }
  var a_ = {
    getCacheForType: function(e) {
      var n = Pt(wt), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, i_ = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, at = null, qe = null, Ve = 0, Ke = 0, hn = null, Ur = !1, pi = !1, ff = !1, yr = 0, ht = 0, Hr = 0, Ea = 0, df = 0, Dn = 0, mi = 0, xs = null, nn = null, hf = !1, pf = 0, tl = 1 / 0, nl = null, qr = null, Rt = 0, Fr = null, gi = null, vi = 0, mf = 0, gf = null, rg = null, Es = 0, vf = null;
  function pn() {
    if ((Qe & 2) !== 0 && Ve !== 0)
      return Ve & -Ve;
    if (U.T !== null) {
      var e = ai;
      return e !== 0 ? e : Cf();
    }
    return bh();
  }
  function ag() {
    Dn === 0 && (Dn = (Ve & 536870912) === 0 || $e ? Ba() : 536870912);
    var e = On.current;
    return e !== null && (e.flags |= 32), Dn;
  }
  function mn(e, n, a) {
    (e === at && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null) && (yi(e, 0), Zr(
      e,
      Ve,
      Dn,
      !1
    )), Hi(e, a), ((Qe & 2) === 0 || e !== at) && (e === at && ((Qe & 2) === 0 && (Ea |= a), ht === 4 && Zr(
      e,
      Ve,
      Dn,
      !1
    )), Jn(e));
  }
  function ig(e, n, a) {
    if ((Qe & 6) !== 0) throw Error(s(327));
    var o = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Kt(e, n), c = o ? l_(e, n) : _f(e, n, !0), g = o;
    do {
      if (c === 0) {
        pi && !o && Zr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, g && !s_(a)) {
          c = _f(e, n, !1), g = !1;
          continue;
        }
        if (c === 2) {
          if (g = n, e.errorRecoveryDisabledLanes & g)
            var w = 0;
          else
            w = e.pendingLanes & -536870913, w = w !== 0 ? w : w & 536870912 ? 536870912 : 0;
          if (w !== 0) {
            n = w;
            e: {
              var O = e;
              c = xs;
              var j = O.current.memoizedState.isDehydrated;
              if (j && (yi(O, w).flags |= 256), w = _f(
                O,
                w,
                !1
              ), w !== 2) {
                if (ff && !j) {
                  O.errorRecoveryDisabledLanes |= g, Ea |= g, c = 4;
                  break e;
                }
                g = nn, nn = c, g !== null && (nn === null ? nn = g : nn.push.apply(
                  nn,
                  g
                ));
              }
              c = w;
            }
            if (g = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          yi(e, 0), Zr(e, n, 0, !0);
          break;
        }
        e: {
          switch (o = e, g = c, g) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Zr(
                o,
                n,
                Dn,
                !Ur
              );
              break e;
            case 2:
              nn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = pf + 300 - he(), 10 < c)) {
            if (Zr(
              o,
              n,
              Dn,
              !Ur
            ), Gt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Rg(
              sg.bind(
                null,
                o,
                a,
                nn,
                nl,
                hf,
                n,
                Dn,
                Ea,
                mi,
                Ur,
                g,
                2,
                -0,
                0
              ),
              c
            );
            break e;
          }
          sg(
            o,
            a,
            nn,
            nl,
            hf,
            n,
            Dn,
            Ea,
            mi,
            Ur,
            g,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Jn(e);
  }
  function sg(e, n, a, o, c, g, w, O, j, q, Q, ee, F, G) {
    if (e.timeoutHandle = -1, ee = n.subtreeFlags, (ee & 8192 || (ee & 16785408) === 16785408) && (Ds = { stylesheets: null, count: 0, unsuspend: H_ }, Wm(n), ee = F_(), ee !== null)) {
      e.cancelPendingCommit = ee(
        hg.bind(
          null,
          e,
          n,
          g,
          a,
          o,
          c,
          w,
          O,
          j,
          Q,
          1,
          F,
          G
        )
      ), Zr(e, g, w, !q);
      return;
    }
    hg(
      e,
      n,
      g,
      a,
      o,
      c,
      w,
      O,
      j
    );
  }
  function s_(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var o = 0; o < a.length; o++) {
          var c = a[o], g = c.getSnapshot;
          c = c.value;
          try {
            if (!un(g(), c)) return !1;
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
  function Zr(e, n, a, o) {
    n &= ~df, n &= ~Ea, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var g = 31 - Zt(c), w = 1 << g;
      o[g] = -1, c &= ~w;
    }
    a !== 0 && vh(e, a, n);
  }
  function rl() {
    return (Qe & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function yf() {
    if (qe !== null) {
      if (Ke === 0)
        var e = qe.return;
      else
        e = qe, cr = va = null, Rc(e), ci = null, ps = 0, e = qe;
      for (; e !== null; )
        Bm(e.alternate, e), e = e.return;
      qe = null;
    }
  }
  function yi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, C_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), yf(), at = e, qe = a = or(e.current, null), Ve = n, Ke = 0, hn = null, Ur = !1, pi = Kt(e, n), ff = !1, mi = Dn = df = Ea = Hr = ht = 0, nn = xs = null, hf = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Zt(o), g = 1 << c;
        n |= e[c], o &= ~g;
      }
    return yr = n, wo(), a;
  }
  function og(e, n) {
    Be = null, U.H = Zo, n === is || n === Ro ? (n = Cp(), Ke = 3) : n === Sp ? (n = Cp(), Ke = 4) : Ke = n === wm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, hn = n, qe === null && (ht = 1, $o(
      e,
      wn(n, e.current)
    ));
  }
  function lg() {
    var e = U.H;
    return U.H = Zo, e === null ? Zo : e;
  }
  function ug() {
    var e = U.A;
    return U.A = a_, e;
  }
  function bf() {
    ht = 4, Ur || (Ve & 4194048) !== Ve && On.current !== null || (pi = !0), (Hr & 134217727) === 0 && (Ea & 134217727) === 0 || at === null || Zr(
      at,
      Ve,
      Dn,
      !1
    );
  }
  function _f(e, n, a) {
    var o = Qe;
    Qe |= 2;
    var c = lg(), g = ug();
    (at !== e || Ve !== n) && (nl = null, yi(e, n)), n = !1;
    var w = ht;
    e: do
      try {
        if (Ke !== 0 && qe !== null) {
          var O = qe, j = hn;
          switch (Ke) {
            case 8:
              yf(), w = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              On.current === null && (n = !0);
              var q = Ke;
              if (Ke = 0, hn = null, bi(e, O, j, q), a && pi) {
                w = 0;
                break e;
              }
              break;
            default:
              q = Ke, Ke = 0, hn = null, bi(e, O, j, q);
          }
        }
        o_(), w = ht;
        break;
      } catch (Q) {
        og(e, Q);
      }
    while (!0);
    return n && e.shellSuspendCounter++, cr = va = null, Qe = o, U.H = c, U.A = g, qe === null && (at = null, Ve = 0, wo()), w;
  }
  function o_() {
    for (; qe !== null; ) cg(qe);
  }
  function l_(e, n) {
    var a = Qe;
    Qe |= 2;
    var o = lg(), c = ug();
    at !== e || Ve !== n ? (nl = null, tl = he() + 500, yi(e, n)) : pi = Kt(
      e,
      n
    );
    e: do
      try {
        if (Ke !== 0 && qe !== null) {
          n = qe;
          var g = hn;
          t: switch (Ke) {
            case 1:
              Ke = 0, hn = null, bi(e, n, g, 1);
              break;
            case 2:
            case 9:
              if (xp(g)) {
                Ke = 0, hn = null, fg(n);
                break;
              }
              n = function() {
                Ke !== 2 && Ke !== 9 || at !== e || (Ke = 7), Jn(e);
              }, g.then(n, n);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              xp(g) ? (Ke = 0, hn = null, fg(n)) : (Ke = 0, hn = null, bi(e, n, g, 7));
              break;
            case 5:
              var w = null;
              switch (qe.tag) {
                case 26:
                  w = qe.memoizedState;
                case 5:
                case 27:
                  var O = qe;
                  if (!w || Vg(w)) {
                    Ke = 0, hn = null;
                    var j = O.sibling;
                    if (j !== null) qe = j;
                    else {
                      var q = O.return;
                      q !== null ? (qe = q, al(q)) : qe = null;
                    }
                    break t;
                  }
              }
              Ke = 0, hn = null, bi(e, n, g, 5);
              break;
            case 6:
              Ke = 0, hn = null, bi(e, n, g, 6);
              break;
            case 8:
              yf(), ht = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        u_();
        break;
      } catch (Q) {
        og(e, Q);
      }
    while (!0);
    return cr = va = null, U.H = o, U.A = c, Qe = a, qe !== null ? 0 : (at = null, Ve = 0, wo(), ht);
  }
  function u_() {
    for (; qe !== null && !Y(); )
      cg(qe);
  }
  function cg(e) {
    var n = Im(e.alternate, e, yr);
    e.memoizedProps = e.pendingProps, n === null ? al(e) : qe = n;
  }
  function fg(e) {
    var n = e, a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Mm(
          a,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ve
        );
        break;
      case 11:
        n = Mm(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ve
        );
        break;
      case 5:
        Rc(n);
      default:
        Bm(a, n), n = qe = dp(n, yr), n = Im(a, n, yr);
    }
    e.memoizedProps = e.pendingProps, n === null ? al(e) : qe = n;
  }
  function bi(e, n, a, o) {
    cr = va = null, Rc(n), ci = null, ps = 0;
    var c = n.return;
    try {
      if (Jb(
        e,
        c,
        n,
        a,
        Ve
      )) {
        ht = 1, $o(
          e,
          wn(a, e.current)
        ), qe = null;
        return;
      }
    } catch (g) {
      if (c !== null) throw qe = c, g;
      ht = 1, $o(
        e,
        wn(a, e.current)
      ), qe = null;
      return;
    }
    n.flags & 32768 ? ($e || o === 1 ? e = !0 : pi || (Ve & 536870912) !== 0 ? e = !1 : (Ur = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = On.current, o !== null && o.tag === 13 && (o.flags |= 16384))), dg(n, e)) : al(n);
  }
  function al(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        dg(
          n,
          Ur
        );
        return;
      }
      e = n.return;
      var a = e_(
        n.alternate,
        n,
        yr
      );
      if (a !== null) {
        qe = a;
        return;
      }
      if (n = n.sibling, n !== null) {
        qe = n;
        return;
      }
      qe = n = e;
    } while (n !== null);
    ht === 0 && (ht = 5);
  }
  function dg(e, n) {
    do {
      var a = t_(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, qe = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (e = e.sibling, e !== null)) {
        qe = e;
        return;
      }
      qe = e = a;
    } while (e !== null);
    ht = 6, qe = null;
  }
  function hg(e, n, a, o, c, g, w, O, j) {
    e.cancelPendingCommit = null;
    do
      il();
    while (Rt !== 0);
    if ((Qe & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (g = n.lanes | n.childLanes, g |= uc, H1(
        e,
        a,
        g,
        w,
        O,
        j
      ), e === at && (qe = at = null, Ve = 0), gi = n, Fr = e, vi = a, mf = g, gf = c, rg = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, h_(ie, function() {
        return yg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = U.T, U.T = null, c = ne.p, ne.p = 2, w = Qe, Qe |= 4;
        try {
          n_(e, n, a);
        } finally {
          Qe = w, ne.p = c, U.T = o;
        }
      }
      Rt = 1, pg(), mg(), gg();
    }
  }
  function pg() {
    if (Rt === 1) {
      Rt = 0;
      var e = Fr, n = gi, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null;
        var o = ne.p;
        ne.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          Qm(n, e);
          var g = kf, w = np(e.containerInfo), O = g.focusedElem, j = g.selectionRange;
          if (w !== O && O && O.ownerDocument && tp(
            O.ownerDocument.documentElement,
            O
          )) {
            if (j !== null && ac(O)) {
              var q = j.start, Q = j.end;
              if (Q === void 0 && (Q = q), "selectionStart" in O)
                O.selectionStart = q, O.selectionEnd = Math.min(
                  Q,
                  O.value.length
                );
              else {
                var ee = O.ownerDocument || document, F = ee && ee.defaultView || window;
                if (F.getSelection) {
                  var G = F.getSelection(), Oe = O.textContent.length, Ne = Math.min(j.start, Oe), nt = j.end === void 0 ? Ne : Math.min(j.end, Oe);
                  !G.extend && Ne > nt && (w = nt, nt = Ne, Ne = w);
                  var L = ep(
                    O,
                    Ne
                  ), z = ep(
                    O,
                    nt
                  );
                  if (L && z && (G.rangeCount !== 1 || G.anchorNode !== L.node || G.anchorOffset !== L.offset || G.focusNode !== z.node || G.focusOffset !== z.offset)) {
                    var H = ee.createRange();
                    H.setStart(L.node, L.offset), G.removeAllRanges(), Ne > nt ? (G.addRange(H), G.extend(z.node, z.offset)) : (H.setEnd(z.node, z.offset), G.addRange(H));
                  }
                }
              }
            }
            for (ee = [], G = O; G = G.parentNode; )
              G.nodeType === 1 && ee.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof O.focus == "function" && O.focus(), O = 0; O < ee.length; O++) {
              var J = ee[O];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          vl = !!Mf, kf = Mf = null;
        } finally {
          Qe = c, ne.p = o, U.T = a;
        }
      }
      e.current = n, Rt = 2;
    }
  }
  function mg() {
    if (Rt === 2) {
      Rt = 0;
      var e = Fr, n = gi, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = U.T, U.T = null;
        var o = ne.p;
        ne.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          Vm(e, n.alternate, n);
        } finally {
          Qe = c, ne.p = o, U.T = a;
        }
      }
      Rt = 3;
    }
  }
  function gg() {
    if (Rt === 4 || Rt === 3) {
      Rt = 0, le();
      var e = Fr, n = gi, a = vi, o = rg;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Rt = 5 : (Rt = 0, gi = Fr = null, vg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (qr = null), Iu(a), n = n.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
        try {
          gt.onCommitFiberRoot(
            rr,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = U.T, c = ne.p, ne.p = 2, U.T = null;
        try {
          for (var g = e.onRecoverableError, w = 0; w < o.length; w++) {
            var O = o[w];
            g(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          U.T = n, ne.p = c;
        }
      }
      (vi & 3) !== 0 && il(), Jn(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === vf ? Es++ : (Es = 0, vf = e) : Es = 0, Cs(0);
    }
  }
  function vg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, rs(n)));
  }
  function il(e) {
    return pg(), mg(), gg(), yg();
  }
  function yg() {
    if (Rt !== 5) return !1;
    var e = Fr, n = mf;
    mf = 0;
    var a = Iu(vi), o = U.T, c = ne.p;
    try {
      ne.p = 32 > a ? 32 : a, U.T = null, a = gf, gf = null;
      var g = Fr, w = vi;
      if (Rt = 0, gi = Fr = null, vi = 0, (Qe & 6) !== 0) throw Error(s(331));
      var O = Qe;
      if (Qe |= 4, tg(g.current), Jm(
        g,
        g.current,
        w,
        a
      ), Qe = O, Cs(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(rr, g);
        } catch {
        }
      return !0;
    } finally {
      ne.p = c, U.T = o, vg(e, n);
    }
  }
  function bg(e, n, a) {
    n = wn(a, n), n = Xc(e.stateNode, n, 2), e = jr(e, n, 2), e !== null && (Hi(e, 2), Jn(e));
  }
  function rt(e, n, a) {
    if (e.tag === 3)
      bg(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          bg(
            n,
            e,
            a
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (qr === null || !qr.has(o))) {
            e = wn(a, e), a = Em(2), o = jr(n, a, 2), o !== null && (Cm(
              a,
              o,
              n,
              e
            ), Hi(o, 2), Jn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Sf(e, n, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new i_();
      var c = /* @__PURE__ */ new Set();
      o.set(n, c);
    } else
      c = o.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(n, c));
    c.has(a) || (ff = !0, c.add(a), e = c_.bind(null, e, n, a), n.then(e, e));
  }
  function c_(e, n, a) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, at === e && (Ve & a) === a && (ht === 4 || ht === 3 && (Ve & 62914560) === Ve && 300 > he() - pf ? (Qe & 2) === 0 && yi(e, 0) : df |= a, mi === Ve && (mi = 0)), Jn(e);
  }
  function _g(e, n) {
    n === 0 && (n = gh()), e = ei(e, n), e !== null && (Hi(e, n), Jn(e));
  }
  function f_(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), _g(e, a);
  }
  function d_(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, c = e.memoizedState;
        c !== null && (a = c.retryLane);
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
    o !== null && o.delete(n), _g(e, a);
  }
  function h_(e, n) {
    return oe(e, n);
  }
  var sl = null, _i = null, xf = !1, ol = !1, Ef = !1, Ca = 0;
  function Jn(e) {
    e !== _i && e.next === null && (_i === null ? sl = _i = e : _i = _i.next = e), ol = !0, xf || (xf = !0, m_());
  }
  function Cs(e, n) {
    if (!Ef && ol) {
      Ef = !0;
      do
        for (var a = !1, o = sl; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var g = 0;
            else {
              var w = o.suspendedLanes, O = o.pingedLanes;
              g = (1 << 31 - Zt(42 | e) + 1) - 1, g &= c & ~(w & ~O), g = g & 201326741 ? g & 201326741 | 1 : g ? g | 2 : 0;
            }
            g !== 0 && (a = !0, Cg(o, g));
          } else
            g = Ve, g = Gt(
              o,
              o === at ? g : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (g & 3) === 0 || Kt(o, g) || (a = !0, Cg(o, g));
          o = o.next;
        }
      while (a);
      Ef = !1;
    }
  }
  function p_() {
    Sg();
  }
  function Sg() {
    ol = xf = !1;
    var e = 0;
    Ca !== 0 && (E_() && (e = Ca), Ca = 0);
    for (var n = he(), a = null, o = sl; o !== null; ) {
      var c = o.next, g = xg(o, n);
      g === 0 ? (o.next = null, a === null ? sl = c : a.next = c, c === null && (_i = a)) : (a = o, (e !== 0 || (g & 3) !== 0) && (ol = !0)), o = c;
    }
    Cs(e);
  }
  function xg(e, n) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, g = e.pendingLanes & -62914561; 0 < g; ) {
      var w = 31 - Zt(g), O = 1 << w, j = c[w];
      j === -1 ? ((O & a) === 0 || (O & o) !== 0) && (c[w] = ho(O, n)) : j <= n && (e.expiredLanes |= O), g &= ~O;
    }
    if (n = at, a = Ve, a = Gt(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, a === 0 || e === n && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && ae(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Kt(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (o !== null && ae(o), Iu(a)) {
        case 2:
        case 8:
          a = ue;
          break;
        case 32:
          a = ie;
          break;
        case 268435456:
          a = Ce;
          break;
        default:
          a = ie;
      }
      return o = Eg.bind(null, e), a = oe(a, o), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return o !== null && o !== null && ae(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Eg(e, n) {
    if (Rt !== 0 && Rt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (il() && e.callbackNode !== a)
      return null;
    var o = Ve;
    return o = Gt(
      e,
      e === at ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (ig(e, o, n), xg(e, he()), e.callbackNode != null && e.callbackNode === a ? Eg.bind(null, e) : null);
  }
  function Cg(e, n) {
    if (il()) return null;
    ig(e, n, !0);
  }
  function m_() {
    w_(function() {
      (Qe & 6) !== 0 ? oe(
        we,
        p_
      ) : Sg();
    });
  }
  function Cf() {
    return Ca === 0 && (Ca = Ba()), Ca;
  }
  function wg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yo("" + e);
  }
  function Ag(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function g_(e, n, a, o, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var g = wg(
        (c[Jt] || null).action
      ), w = o.submitter;
      w && (n = (n = w[Jt] || null) ? wg(n.formAction) : w.getAttribute("formAction"), n !== null && (g = n, w = null));
      var O = new xo(
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
                if (Ca !== 0) {
                  var j = w ? Ag(c, w) : new FormData(c);
                  Fc(
                    a,
                    {
                      pending: !0,
                      data: j,
                      method: c.method,
                      action: g
                    },
                    null,
                    j
                  );
                }
              } else
                typeof g == "function" && (O.preventDefault(), j = w ? Ag(c, w) : new FormData(c), Fc(
                  a,
                  {
                    pending: !0,
                    data: j,
                    method: c.method,
                    action: g
                  },
                  g,
                  j
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var wf = 0; wf < lc.length; wf++) {
    var Af = lc[wf], v_ = Af.toLowerCase(), y_ = Af[0].toUpperCase() + Af.slice(1);
    In(
      v_,
      "on" + y_
    );
  }
  In(ip, "onAnimationEnd"), In(sp, "onAnimationIteration"), In(op, "onAnimationStart"), In("dblclick", "onDoubleClick"), In("focusin", "onFocus"), In("focusout", "onBlur"), In(zb, "onTransitionRun"), In(Lb, "onTransitionStart"), In(Ib, "onTransitionCancel"), In(lp, "onTransitionEnd"), Za("onMouseEnter", ["mouseout", "mouseover"]), Za("onMouseLeave", ["mouseout", "mouseover"]), Za("onPointerEnter", ["pointerout", "pointerover"]), Za("onPointerLeave", ["pointerout", "pointerover"]), la(
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
  var ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), b_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ws)
  );
  function Ng(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a], c = o.event;
      o = o.listeners;
      e: {
        var g = void 0;
        if (n)
          for (var w = o.length - 1; 0 <= w; w--) {
            var O = o[w], j = O.instance, q = O.currentTarget;
            if (O = O.listener, j !== g && c.isPropagationStopped())
              break e;
            g = O, c.currentTarget = q;
            try {
              g(c);
            } catch (Q) {
              Xo(Q);
            }
            c.currentTarget = null, g = j;
          }
        else
          for (w = 0; w < o.length; w++) {
            if (O = o[w], j = O.instance, q = O.currentTarget, O = O.listener, j !== g && c.isPropagationStopped())
              break e;
            g = O, c.currentTarget = q;
            try {
              g(c);
            } catch (Q) {
              Xo(Q);
            }
            c.currentTarget = null, g = j;
          }
      }
    }
  }
  function Fe(e, n) {
    var a = n[Pu];
    a === void 0 && (a = n[Pu] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (Tg(n, e, 2, !1), a.add(o));
  }
  function Nf(e, n, a) {
    var o = 0;
    n && (o |= 4), Tg(
      a,
      e,
      o,
      n
    );
  }
  var ll = "_reactListening" + Math.random().toString(36).slice(2);
  function Tf(e) {
    if (!e[ll]) {
      e[ll] = !0, Sh.forEach(function(a) {
        a !== "selectionchange" && (b_.has(a) || Nf(a, !1, e), Nf(a, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[ll] || (n[ll] = !0, Nf("selectionchange", !1, n));
    }
  }
  function Tg(e, n, a, o) {
    switch (Jg(n)) {
      case 2:
        var c = V_;
        break;
      case 8:
        c = Y_;
        break;
      default:
        c = qf;
    }
    a = c.bind(
      null,
      n,
      a,
      e
    ), c = void 0, !$u || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), o ? c !== void 0 ? e.addEventListener(n, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, a, !0) : c !== void 0 ? e.addEventListener(n, a, {
      passive: c
    }) : e.addEventListener(n, a, !1);
  }
  function Of(e, n, a, o, c) {
    var g = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var w = o.tag;
        if (w === 3 || w === 4) {
          var O = o.stateNode.containerInfo;
          if (O === c) break;
          if (w === 4)
            for (w = o.return; w !== null; ) {
              var j = w.tag;
              if ((j === 3 || j === 4) && w.stateNode.containerInfo === c)
                return;
              w = w.return;
            }
          for (; O !== null; ) {
            if (w = Ha(O), w === null) return;
            if (j = w.tag, j === 5 || j === 6 || j === 26 || j === 27) {
              o = g = w;
              continue e;
            }
            O = O.parentNode;
          }
        }
        o = o.return;
      }
    zh(function() {
      var q = g, Q = Yu(a), ee = [];
      e: {
        var F = up.get(e);
        if (F !== void 0) {
          var G = xo, Oe = e;
          switch (e) {
            case "keypress":
              if (_o(a) === 0) break e;
            case "keydown":
            case "keyup":
              G = hb;
              break;
            case "focusin":
              Oe = "focus", G = Wu;
              break;
            case "focusout":
              Oe = "blur", G = Wu;
              break;
            case "beforeblur":
            case "afterblur":
              G = Wu;
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
              G = Ph;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = tb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = gb;
              break;
            case ip:
            case sp:
            case op:
              G = ab;
              break;
            case lp:
              G = yb;
              break;
            case "scroll":
            case "scrollend":
              G = W1;
              break;
            case "wheel":
              G = _b;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = sb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Uh;
              break;
            case "toggle":
            case "beforetoggle":
              G = xb;
          }
          var Ne = (n & 4) !== 0, nt = !Ne && (e === "scroll" || e === "scrollend"), L = Ne ? F !== null ? F + "Capture" : null : F;
          Ne = [];
          for (var z = q, H; z !== null; ) {
            var J = z;
            if (H = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || H === null || L === null || (J = Zi(z, L), J != null && Ne.push(
              As(z, J, H)
            )), nt) break;
            z = z.return;
          }
          0 < Ne.length && (F = new G(
            F,
            Oe,
            null,
            a,
            Q
          ), ee.push({ event: F, listeners: Ne }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (F = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", F && a !== Vu && (Oe = a.relatedTarget || a.fromElement) && (Ha(Oe) || Oe[Ua]))
            break e;
          if ((G || F) && (F = Q.window === Q ? Q : (F = Q.ownerDocument) ? F.defaultView || F.parentWindow : window, G ? (Oe = a.relatedTarget || a.toElement, G = q, Oe = Oe ? Ha(Oe) : null, Oe !== null && (nt = u(Oe), Ne = Oe.tag, Oe !== nt || Ne !== 5 && Ne !== 27 && Ne !== 6) && (Oe = null)) : (G = null, Oe = q), G !== Oe)) {
            if (Ne = Ph, J = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Ne = Uh, J = "onPointerLeave", L = "onPointerEnter", z = "pointer"), nt = G == null ? F : Fi(G), H = Oe == null ? F : Fi(Oe), F = new Ne(
              J,
              z + "leave",
              G,
              a,
              Q
            ), F.target = nt, F.relatedTarget = H, J = null, Ha(Q) === q && (Ne = new Ne(
              L,
              z + "enter",
              Oe,
              a,
              Q
            ), Ne.target = H, Ne.relatedTarget = nt, J = Ne), nt = J, G && Oe)
              t: {
                for (Ne = G, L = Oe, z = 0, H = Ne; H; H = Si(H))
                  z++;
                for (H = 0, J = L; J; J = Si(J))
                  H++;
                for (; 0 < z - H; )
                  Ne = Si(Ne), z--;
                for (; 0 < H - z; )
                  L = Si(L), H--;
                for (; z--; ) {
                  if (Ne === L || L !== null && Ne === L.alternate)
                    break t;
                  Ne = Si(Ne), L = Si(L);
                }
                Ne = null;
              }
            else Ne = null;
            G !== null && Og(
              ee,
              F,
              G,
              Ne,
              !1
            ), Oe !== null && nt !== null && Og(
              ee,
              nt,
              Oe,
              Ne,
              !0
            );
          }
        }
        e: {
          if (F = q ? Fi(q) : window, G = F.nodeName && F.nodeName.toLowerCase(), G === "select" || G === "input" && F.type === "file")
            var ye = Xh;
          else if (Vh(F))
            if ($h)
              ye = kb;
            else {
              ye = Db;
              var He = Ob;
            }
          else
            G = F.nodeName, !G || G.toLowerCase() !== "input" || F.type !== "checkbox" && F.type !== "radio" ? q && Gu(q.elementType) && (ye = Xh) : ye = Mb;
          if (ye && (ye = ye(e, q))) {
            Yh(
              ee,
              ye,
              a,
              Q
            );
            break e;
          }
          He && He(e, F, q), e === "focusout" && q && F.type === "number" && q.memoizedProps.value != null && Zu(F, "number", F.value);
        }
        switch (He = q ? Fi(q) : window, e) {
          case "focusin":
            (Vh(He) || He.contentEditable === "true") && (Ka = He, ic = q, Ji = null);
            break;
          case "focusout":
            Ji = ic = Ka = null;
            break;
          case "mousedown":
            sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sc = !1, rp(ee, a, Q);
            break;
          case "selectionchange":
            if (Rb) break;
          case "keydown":
          case "keyup":
            rp(ee, a, Q);
        }
        var xe;
        if (tc)
          e: {
            switch (e) {
              case "compositionstart":
                var Te = "onCompositionStart";
                break e;
              case "compositionend":
                Te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Te = "onCompositionUpdate";
                break e;
            }
            Te = void 0;
          }
        else
          Qa ? Zh(e, a) && (Te = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Te = "onCompositionStart");
        Te && (Hh && a.locale !== "ko" && (Qa || Te !== "onCompositionStart" ? Te === "onCompositionEnd" && Qa && (xe = Lh()) : (Or = Q, Qu = "value" in Or ? Or.value : Or.textContent, Qa = !0)), He = ul(q, Te), 0 < He.length && (Te = new Bh(
          Te,
          e,
          null,
          a,
          Q
        ), ee.push({ event: Te, listeners: He }), xe ? Te.data = xe : (xe = Gh(a), xe !== null && (Te.data = xe)))), (xe = Cb ? wb(e, a) : Ab(e, a)) && (Te = ul(q, "onBeforeInput"), 0 < Te.length && (He = new Bh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          Q
        ), ee.push({
          event: He,
          listeners: Te
        }), He.data = xe)), g_(
          ee,
          e,
          q,
          a,
          Q
        );
      }
      Ng(ee, n);
    });
  }
  function As(e, n, a) {
    return {
      instance: e,
      listener: n,
      currentTarget: a
    };
  }
  function ul(e, n) {
    for (var a = n + "Capture", o = []; e !== null; ) {
      var c = e, g = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || g === null || (c = Zi(e, a), c != null && o.unshift(
        As(e, c, g)
      ), c = Zi(e, n), c != null && o.push(
        As(e, c, g)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function Si(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Og(e, n, a, o, c) {
    for (var g = n._reactName, w = []; a !== null && a !== o; ) {
      var O = a, j = O.alternate, q = O.stateNode;
      if (O = O.tag, j !== null && j === o) break;
      O !== 5 && O !== 26 && O !== 27 || q === null || (j = q, c ? (q = Zi(a, g), q != null && w.unshift(
        As(a, q, j)
      )) : c || (q = Zi(a, g), q != null && w.push(
        As(a, q, j)
      ))), a = a.return;
    }
    w.length !== 0 && e.push({ event: n, listeners: w });
  }
  var __ = /\r\n?/g, S_ = /\u0000|\uFFFD/g;
  function Dg(e) {
    return (typeof e == "string" ? e : "" + e).replace(__, `
`).replace(S_, "");
  }
  function Mg(e, n) {
    return n = Dg(n), Dg(e) === n;
  }
  function cl() {
  }
  function tt(e, n, a, o, c, g) {
    switch (a) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Ya(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Ya(e, "" + o);
        break;
      case "className":
        mo(e, "class", o);
        break;
      case "tabIndex":
        mo(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        mo(e, a, o);
        break;
      case "style":
        jh(e, o, g);
        break;
      case "data":
        if (n !== "object") {
          mo(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = yo("" + o), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof g == "function" && (a === "formAction" ? (n !== "input" && tt(e, n, "name", c.name, c, null), tt(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), tt(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), tt(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (tt(e, n, "encType", c.encType, c, null), tt(e, n, "method", c.method, c, null), tt(e, n, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = yo("" + o), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = cl);
        break;
      case "onScroll":
        o != null && Fe("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Fe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (a = o.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = a;
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
        a = yo("" + o), e.setAttributeNS(
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
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "" + o) : e.removeAttribute(a);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(a, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(a) : e.setAttribute(a, o);
        break;
      case "popover":
        Fe("beforetoggle", e), Fe("toggle", e), po(e, "popover", o);
        break;
      case "xlinkActuate":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        ir(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        ir(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        ir(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        po(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = K1.get(a) || a, po(e, a, o));
    }
  }
  function Df(e, n, a, o, c, g) {
    switch (a) {
      case "style":
        jh(e, o, g);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(s(61));
          if (a = o.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Ya(e, o) : (typeof o == "number" || typeof o == "bigint") && Ya(e, "" + o);
        break;
      case "onScroll":
        o != null && Fe("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Fe("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = cl);
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
        if (!xh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), g = e[Jt] || null, g = g != null ? g[a] : null, typeof g == "function" && e.removeEventListener(n, g, c), typeof o == "function")) {
              typeof g != "function" && g !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, o, c);
              break e;
            }
            a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : po(e, a, o);
          }
    }
  }
  function zt(e, n, a) {
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
        Fe("error", e), Fe("load", e);
        var o = !1, c = !1, g;
        for (g in a)
          if (a.hasOwnProperty(g)) {
            var w = a[g];
            if (w != null)
              switch (g) {
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
                  tt(e, n, g, w, a, null);
              }
          }
        c && tt(e, n, "srcSet", a.srcSet, a, null), o && tt(e, n, "src", a.src, a, null);
        return;
      case "input":
        Fe("invalid", e);
        var O = g = w = c = null, j = null, q = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var Q = a[o];
            if (Q != null)
              switch (o) {
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
                  g = Q;
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
                  tt(e, n, o, Q, a, null);
              }
          }
        Oh(
          e,
          g,
          O,
          j,
          q,
          w,
          c,
          !1
        ), go(e);
        return;
      case "select":
        Fe("invalid", e), o = w = g = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (O = a[c], O != null))
            switch (c) {
              case "value":
                g = O;
                break;
              case "defaultValue":
                w = O;
                break;
              case "multiple":
                o = O;
              default:
                tt(e, n, c, O, a, null);
            }
        n = g, a = w, e.multiple = !!o, n != null ? Va(e, !!o, n, !1) : a != null && Va(e, !!o, a, !0);
        return;
      case "textarea":
        Fe("invalid", e), g = c = o = null;
        for (w in a)
          if (a.hasOwnProperty(w) && (O = a[w], O != null))
            switch (w) {
              case "value":
                o = O;
                break;
              case "defaultValue":
                c = O;
                break;
              case "children":
                g = O;
                break;
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(s(91));
                break;
              default:
                tt(e, n, w, O, a, null);
            }
        Mh(e, o, c, g), go(e);
        return;
      case "option":
        for (j in a)
          if (a.hasOwnProperty(j) && (o = a[j], o != null))
            switch (j) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                tt(e, n, j, o, a, null);
            }
        return;
      case "dialog":
        Fe("beforetoggle", e), Fe("toggle", e), Fe("cancel", e), Fe("close", e);
        break;
      case "iframe":
      case "object":
        Fe("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < ws.length; o++)
          Fe(ws[o], e);
        break;
      case "image":
        Fe("error", e), Fe("load", e);
        break;
      case "details":
        Fe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Fe("error", e), Fe("load", e);
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
          if (a.hasOwnProperty(q) && (o = a[q], o != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                tt(e, n, q, o, a, null);
            }
        return;
      default:
        if (Gu(n)) {
          for (Q in a)
            a.hasOwnProperty(Q) && (o = a[Q], o !== void 0 && Df(
              e,
              n,
              Q,
              o,
              a,
              void 0
            ));
          return;
        }
    }
    for (O in a)
      a.hasOwnProperty(O) && (o = a[O], o != null && tt(e, n, O, o, a, null));
  }
  function x_(e, n, a, o) {
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
        var c = null, g = null, w = null, O = null, j = null, q = null, Q = null;
        for (G in a) {
          var ee = a[G];
          if (a.hasOwnProperty(G) && ee != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                j = ee;
              default:
                o.hasOwnProperty(G) || tt(e, n, G, null, o, ee);
            }
        }
        for (var F in o) {
          var G = o[F];
          if (ee = a[F], o.hasOwnProperty(F) && (G != null || ee != null))
            switch (F) {
              case "type":
                g = G;
                break;
              case "name":
                c = G;
                break;
              case "checked":
                q = G;
                break;
              case "defaultChecked":
                Q = G;
                break;
              case "value":
                w = G;
                break;
              case "defaultValue":
                O = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(s(137, n));
                break;
              default:
                G !== ee && tt(
                  e,
                  n,
                  F,
                  G,
                  o,
                  ee
                );
            }
        }
        Fu(
          e,
          w,
          O,
          j,
          q,
          Q,
          g,
          c
        );
        return;
      case "select":
        G = w = O = F = null;
        for (g in a)
          if (j = a[g], a.hasOwnProperty(g) && j != null)
            switch (g) {
              case "value":
                break;
              case "multiple":
                G = j;
              default:
                o.hasOwnProperty(g) || tt(
                  e,
                  n,
                  g,
                  null,
                  o,
                  j
                );
            }
        for (c in o)
          if (g = o[c], j = a[c], o.hasOwnProperty(c) && (g != null || j != null))
            switch (c) {
              case "value":
                F = g;
                break;
              case "defaultValue":
                O = g;
                break;
              case "multiple":
                w = g;
              default:
                g !== j && tt(
                  e,
                  n,
                  c,
                  g,
                  o,
                  j
                );
            }
        n = O, a = w, o = G, F != null ? Va(e, !!a, F, !1) : !!o != !!a && (n != null ? Va(e, !!a, n, !0) : Va(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        G = F = null;
        for (O in a)
          if (c = a[O], a.hasOwnProperty(O) && c != null && !o.hasOwnProperty(O))
            switch (O) {
              case "value":
                break;
              case "children":
                break;
              default:
                tt(e, n, O, null, o, c);
            }
        for (w in o)
          if (c = o[w], g = a[w], o.hasOwnProperty(w) && (c != null || g != null))
            switch (w) {
              case "value":
                F = c;
                break;
              case "defaultValue":
                G = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== g && tt(e, n, w, c, o, g);
            }
        Dh(e, F, G);
        return;
      case "option":
        for (var Oe in a)
          if (F = a[Oe], a.hasOwnProperty(Oe) && F != null && !o.hasOwnProperty(Oe))
            switch (Oe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                tt(
                  e,
                  n,
                  Oe,
                  null,
                  o,
                  F
                );
            }
        for (j in o)
          if (F = o[j], G = a[j], o.hasOwnProperty(j) && F !== G && (F != null || G != null))
            switch (j) {
              case "selected":
                e.selected = F && typeof F != "function" && typeof F != "symbol";
                break;
              default:
                tt(
                  e,
                  n,
                  j,
                  F,
                  o,
                  G
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
        for (var Ne in a)
          F = a[Ne], a.hasOwnProperty(Ne) && F != null && !o.hasOwnProperty(Ne) && tt(e, n, Ne, null, o, F);
        for (q in o)
          if (F = o[q], G = a[q], o.hasOwnProperty(q) && F !== G && (F != null || G != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(s(137, n));
                break;
              default:
                tt(
                  e,
                  n,
                  q,
                  F,
                  o,
                  G
                );
            }
        return;
      default:
        if (Gu(n)) {
          for (var nt in a)
            F = a[nt], a.hasOwnProperty(nt) && F !== void 0 && !o.hasOwnProperty(nt) && Df(
              e,
              n,
              nt,
              void 0,
              o,
              F
            );
          for (Q in o)
            F = o[Q], G = a[Q], !o.hasOwnProperty(Q) || F === G || F === void 0 && G === void 0 || Df(
              e,
              n,
              Q,
              F,
              o,
              G
            );
          return;
        }
    }
    for (var L in a)
      F = a[L], a.hasOwnProperty(L) && F != null && !o.hasOwnProperty(L) && tt(e, n, L, null, o, F);
    for (ee in o)
      F = o[ee], G = a[ee], !o.hasOwnProperty(ee) || F === G || F == null && G == null || tt(e, n, ee, F, o, G);
  }
  var Mf = null, kf = null;
  function fl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function kg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function jg(e, n) {
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
  function jf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Rf = null;
  function E_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Rf ? !1 : (Rf = e, !0) : (Rf = null, !1);
  }
  var Rg = typeof setTimeout == "function" ? setTimeout : void 0, C_ = typeof clearTimeout == "function" ? clearTimeout : void 0, zg = typeof Promise == "function" ? Promise : void 0, w_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof zg < "u" ? function(e) {
    return zg.resolve(null).then(e).catch(A_);
  } : Rg;
  function A_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Gr(e) {
    return e === "head";
  }
  function Lg(e, n) {
    var a = n, o = 0, c = 0;
    do {
      var g = a.nextSibling;
      if (e.removeChild(a), g && g.nodeType === 8)
        if (a = g.data, a === "/$") {
          if (0 < o && 8 > o) {
            a = o;
            var w = e.ownerDocument;
            if (a & 1 && Ns(w.documentElement), a & 2 && Ns(w.body), a & 4)
              for (a = w.head, Ns(a), w = a.firstChild; w; ) {
                var O = w.nextSibling, j = w.nodeName;
                w[qi] || j === "SCRIPT" || j === "STYLE" || j === "LINK" && w.rel.toLowerCase() === "stylesheet" || a.removeChild(w), w = O;
              }
          }
          if (c === 0) {
            e.removeChild(g), zs(n);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!" ? c++ : o = a.charCodeAt(0) - 48;
      else o = 0;
      a = g;
    } while (a);
    zs(n);
  }
  function zf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          zf(a), Bu(a);
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
  function N_(e, n, a, o) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[qi])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (g = e.getAttribute("rel"), g === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (g !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (g = e.getAttribute("src"), (g !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && g && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var g = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === g)
          return e;
      } else return e;
      if (e = Bn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function T_(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Bn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Lf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function O_(e, n) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      n();
    else {
      var o = function() {
        n(), a.removeEventListener("DOMContentLoaded", o);
      };
      a.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Bn(e) {
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
  var If = null;
  function Ig(e) {
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
  function Pg(e, n, a) {
    switch (n = fl(a), e) {
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
  function Ns(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Bu(e);
  }
  var Mn = /* @__PURE__ */ new Map(), Bg = /* @__PURE__ */ new Set();
  function dl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var br = ne.d;
  ne.d = {
    f: D_,
    r: M_,
    D: k_,
    C: j_,
    L: R_,
    m: z_,
    X: I_,
    S: L_,
    M: P_
  };
  function D_() {
    var e = br.f(), n = rl();
    return e || n;
  }
  function M_(e) {
    var n = qa(e);
    n !== null && n.tag === 5 && n.type === "form" ? im(n) : br.r(e);
  }
  var xi = typeof document > "u" ? null : document;
  function Ug(e, n, a) {
    var o = xi;
    if (o && typeof n == "string" && n) {
      var c = Cn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), Bg.has(c) || (Bg.add(c), e = { rel: e, crossOrigin: a, href: n }, o.querySelector(c) === null && (n = o.createElement("link"), zt(n, "link", e), Ot(n), o.head.appendChild(n)));
    }
  }
  function k_(e) {
    br.D(e), Ug("dns-prefetch", e, null);
  }
  function j_(e, n) {
    br.C(e, n), Ug("preconnect", e, n);
  }
  function R_(e, n, a) {
    br.L(e, n, a);
    var o = xi;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + Cn(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + Cn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + Cn(
        a.imageSizes
      ) + '"]')) : c += '[href="' + Cn(e) + '"]';
      var g = c;
      switch (n) {
        case "style":
          g = Ei(e);
          break;
        case "script":
          g = Ci(e);
      }
      Mn.has(g) || (e = y(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), Mn.set(g, e), o.querySelector(c) !== null || n === "style" && o.querySelector(Ts(g)) || n === "script" && o.querySelector(Os(g)) || (n = o.createElement("link"), zt(n, "link", e), Ot(n), o.head.appendChild(n)));
    }
  }
  function z_(e, n) {
    br.m(e, n);
    var a = xi;
    if (a && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + Cn(o) + '"][href="' + Cn(e) + '"]', g = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = Ci(e);
      }
      if (!Mn.has(g) && (e = y({ rel: "modulepreload", href: e }, n), Mn.set(g, e), a.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Os(g)))
              return;
        }
        o = a.createElement("link"), zt(o, "link", e), Ot(o), a.head.appendChild(o);
      }
    }
  }
  function L_(e, n, a) {
    br.S(e, n, a);
    var o = xi;
    if (o && e) {
      var c = Fa(o).hoistableStyles, g = Ei(e);
      n = n || "default";
      var w = c.get(g);
      if (!w) {
        var O = { loading: 0, preload: null };
        if (w = o.querySelector(
          Ts(g)
        ))
          O.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = Mn.get(g)) && Pf(e, a);
          var j = w = o.createElement("link");
          Ot(j), zt(j, "link", e), j._p = new Promise(function(q, Q) {
            j.onload = q, j.onerror = Q;
          }), j.addEventListener("load", function() {
            O.loading |= 1;
          }), j.addEventListener("error", function() {
            O.loading |= 2;
          }), O.loading |= 4, hl(w, n, o);
        }
        w = {
          type: "stylesheet",
          instance: w,
          count: 1,
          state: O
        }, c.set(g, w);
      }
    }
  }
  function I_(e, n) {
    br.X(e, n);
    var a = xi;
    if (a && e) {
      var o = Fa(a).hoistableScripts, c = Ci(e), g = o.get(c);
      g || (g = a.querySelector(Os(c)), g || (e = y({ src: e, async: !0 }, n), (n = Mn.get(c)) && Bf(e, n), g = a.createElement("script"), Ot(g), zt(g, "link", e), a.head.appendChild(g)), g = {
        type: "script",
        instance: g,
        count: 1,
        state: null
      }, o.set(c, g));
    }
  }
  function P_(e, n) {
    br.M(e, n);
    var a = xi;
    if (a && e) {
      var o = Fa(a).hoistableScripts, c = Ci(e), g = o.get(c);
      g || (g = a.querySelector(Os(c)), g || (e = y({ src: e, async: !0, type: "module" }, n), (n = Mn.get(c)) && Bf(e, n), g = a.createElement("script"), Ot(g), zt(g, "link", e), a.head.appendChild(g)), g = {
        type: "script",
        instance: g,
        count: 1,
        state: null
      }, o.set(c, g));
    }
  }
  function Hg(e, n, a, o) {
    var c = (c = X.current) ? dl(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (n = Ei(a.href), a = Fa(
          c
        ).hoistableStyles, o = a.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Ei(a.href);
          var g = Fa(
            c
          ).hoistableStyles, w = g.get(e);
          if (w || (c = c.ownerDocument || c, w = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, g.set(e, w), (g = c.querySelector(
            Ts(e)
          )) && !g._p && (w.instance = g, w.state.loading = 5), Mn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Mn.set(e, a), g || B_(
            c,
            e,
            a,
            w.state
          ))), n && o === null)
            throw Error(s(528, ""));
          return w;
        }
        if (n && o !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ci(a), a = Fa(
          c
        ).hoistableScripts, o = a.get(n), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Ei(e) {
    return 'href="' + Cn(e) + '"';
  }
  function Ts(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function qg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function B_(e, n, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), zt(n, "link", a), Ot(n), e.head.appendChild(n));
  }
  function Ci(e) {
    return '[src="' + Cn(e) + '"]';
  }
  function Os(e) {
    return "script[async]" + e;
  }
  function Fg(e, n, a) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + Cn(a.href) + '"]'
          );
          if (o)
            return n.instance = o, Ot(o), o;
          var c = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), Ot(o), zt(o, "style", c), hl(o, a.precedence, e), n.instance = o;
        case "stylesheet":
          c = Ei(a.href);
          var g = e.querySelector(
            Ts(c)
          );
          if (g)
            return n.state.loading |= 4, n.instance = g, Ot(g), g;
          o = qg(a), (c = Mn.get(c)) && Pf(o, c), g = (e.ownerDocument || e).createElement("link"), Ot(g);
          var w = g;
          return w._p = new Promise(function(O, j) {
            w.onload = O, w.onerror = j;
          }), zt(g, "link", o), n.state.loading |= 4, hl(g, a.precedence, e), n.instance = g;
        case "script":
          return g = Ci(a.src), (c = e.querySelector(
            Os(g)
          )) ? (n.instance = c, Ot(c), c) : (o = a, (c = Mn.get(g)) && (o = y({}, a), Bf(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), Ot(c), zt(c, "link", o), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, hl(o, a.precedence, e));
    return n.instance;
  }
  function hl(e, n, a) {
    for (var o = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = o.length ? o[o.length - 1] : null, g = c, w = 0; w < o.length; w++) {
      var O = o[w];
      if (O.dataset.precedence === n) g = O;
      else if (g !== c) break;
    }
    g ? g.parentNode.insertBefore(e, g.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function Pf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Bf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var pl = null;
  function Zg(e, n, a) {
    if (pl === null) {
      var o = /* @__PURE__ */ new Map(), c = pl = /* @__PURE__ */ new Map();
      c.set(a, o);
    } else
      c = pl, o = c.get(a), o || (o = /* @__PURE__ */ new Map(), c.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var g = a[c];
      if (!(g[qi] || g[It] || e === "link" && g.getAttribute("rel") === "stylesheet") && g.namespaceURI !== "http://www.w3.org/2000/svg") {
        var w = g.getAttribute(n) || "";
        w = e + w;
        var O = o.get(w);
        O ? O.push(g) : o.set(w, [g]);
      }
    }
    return o;
  }
  function Gg(e, n, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function U_(e, n, a) {
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
  function Vg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ds = null;
  function H_() {
  }
  function q_(e, n, a) {
    if (Ds === null) throw Error(s(475));
    var o = Ds;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ei(a.href), g = e.querySelector(
          Ts(c)
        );
        if (g) {
          e = g._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = ml.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = g, Ot(g);
          return;
        }
        g = e.ownerDocument || e, a = qg(a), (c = Mn.get(c)) && Pf(a, c), g = g.createElement("link"), Ot(g);
        var w = g;
        w._p = new Promise(function(O, j) {
          w.onload = O, w.onerror = j;
        }), zt(g, "link", a), n.instance = g;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = ml.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function F_() {
    if (Ds === null) throw Error(s(475));
    var e = Ds;
    return e.stylesheets && e.count === 0 && Uf(e, e.stylesheets), 0 < e.count ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Uf(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function ml() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Uf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var gl = null;
  function Uf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, gl = /* @__PURE__ */ new Map(), n.forEach(Z_, e), gl = null, ml.call(e));
  }
  function Z_(e, n) {
    if (!(n.state.loading & 4)) {
      var a = gl.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), gl.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), g = 0; g < c.length; g++) {
          var w = c[g];
          (w.nodeName === "LINK" || w.getAttribute("media") !== "not all") && (a.set(w.dataset.precedence, w), o = w);
        }
        o && a.set(null, o);
      }
      c = n.instance, w = c.getAttribute("data-precedence"), g = a.get(w) || o, g === o && a.set(null, c), a.set(w, c), this.count++, o = ml.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), g ? g.parentNode.insertBefore(c, g.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Ms = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ve,
    _currentValue2: ve,
    _threadCount: 0
  };
  function G_(e, n, a, o, c, g, w, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = zu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zu(0), this.hiddenUpdates = zu(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = g, this.onRecoverableError = w, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Yg(e, n, a, o, c, g, w, O, j, q, Q, ee) {
    return e = new G_(
      e,
      n,
      a,
      w,
      O,
      j,
      q,
      ee
    ), n = 1, g === !0 && (n |= 24), g = cn(3, null, null, n), e.current = g, g.stateNode = e, n = _c(), n.refCount++, e.pooledCache = n, n.refCount++, g.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: n
    }, Cc(g), e;
  }
  function Xg(e) {
    return e ? (e = ti, e) : ti;
  }
  function $g(e, n, a, o, c, g) {
    c = Xg(c), o.context === null ? o.context = c : o.pendingContext = c, o = kr(n), o.payload = { element: a }, g = g === void 0 ? null : g, g !== null && (o.callback = g), a = jr(e, o, n), a !== null && (mn(a, e, n), os(a, e, n));
  }
  function Qg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Hf(e, n) {
    Qg(e, n), (e = e.alternate) && Qg(e, n);
  }
  function Kg(e) {
    if (e.tag === 13) {
      var n = ei(e, 67108864);
      n !== null && mn(n, e, 67108864), Hf(e, 67108864);
    }
  }
  var vl = !0;
  function V_(e, n, a, o) {
    var c = U.T;
    U.T = null;
    var g = ne.p;
    try {
      ne.p = 2, qf(e, n, a, o);
    } finally {
      ne.p = g, U.T = c;
    }
  }
  function Y_(e, n, a, o) {
    var c = U.T;
    U.T = null;
    var g = ne.p;
    try {
      ne.p = 8, qf(e, n, a, o);
    } finally {
      ne.p = g, U.T = c;
    }
  }
  function qf(e, n, a, o) {
    if (vl) {
      var c = Ff(o);
      if (c === null)
        Of(
          e,
          n,
          o,
          yl,
          a
        ), Wg(e, o);
      else if ($_(
        c,
        e,
        n,
        a,
        o
      ))
        o.stopPropagation();
      else if (Wg(e, o), n & 4 && -1 < X_.indexOf(e)) {
        for (; c !== null; ) {
          var g = qa(c);
          if (g !== null)
            switch (g.tag) {
              case 3:
                if (g = g.stateNode, g.current.memoizedState.isDehydrated) {
                  var w = xn(g.pendingLanes);
                  if (w !== 0) {
                    var O = g;
                    for (O.pendingLanes |= 2, O.entangledLanes |= 2; w; ) {
                      var j = 1 << 31 - Zt(w);
                      O.entanglements[1] |= j, w &= ~j;
                    }
                    Jn(g), (Qe & 6) === 0 && (tl = he() + 500, Cs(0));
                  }
                }
                break;
              case 13:
                O = ei(g, 2), O !== null && mn(O, g, 2), rl(), Hf(g, 2);
            }
          if (g = Ff(o), g === null && Of(
            e,
            n,
            o,
            yl,
            a
          ), g === c) break;
          c = g;
        }
        c !== null && o.stopPropagation();
      } else
        Of(
          e,
          n,
          o,
          null,
          a
        );
    }
  }
  function Ff(e) {
    return e = Yu(e), Zf(e);
  }
  var yl = null;
  function Zf(e) {
    if (yl = null, e = Ha(e), e !== null) {
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
    return yl = e, null;
  }
  function Jg(e) {
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
        switch (re()) {
          case we:
            return 2;
          case ue:
            return 8;
          case ie:
          case ze:
            return 32;
          case Ce:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Gf = !1, Vr = null, Yr = null, Xr = null, ks = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), $r = [], X_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Wg(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vr = null;
        break;
      case "dragenter":
      case "dragleave":
        Yr = null;
        break;
      case "mouseover":
      case "mouseout":
        Xr = null;
        break;
      case "pointerover":
      case "pointerout":
        ks.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        js.delete(n.pointerId);
    }
  }
  function Rs(e, n, a, o, c, g) {
    return e === null || e.nativeEvent !== g ? (e = {
      blockedOn: n,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: g,
      targetContainers: [c]
    }, n !== null && (n = qa(n), n !== null && Kg(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function $_(e, n, a, o, c) {
    switch (n) {
      case "focusin":
        return Vr = Rs(
          Vr,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "dragenter":
        return Yr = Rs(
          Yr,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "mouseover":
        return Xr = Rs(
          Xr,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "pointerover":
        var g = c.pointerId;
        return ks.set(
          g,
          Rs(
            ks.get(g) || null,
            e,
            n,
            a,
            o,
            c
          )
        ), !0;
      case "gotpointercapture":
        return g = c.pointerId, js.set(
          g,
          Rs(
            js.get(g) || null,
            e,
            n,
            a,
            o,
            c
          )
        ), !0;
    }
    return !1;
  }
  function ev(e) {
    var n = Ha(e.target);
    if (n !== null) {
      var a = u(n);
      if (a !== null) {
        if (n = a.tag, n === 13) {
          if (n = f(a), n !== null) {
            e.blockedOn = n, q1(e.priority, function() {
              if (a.tag === 13) {
                var o = pn();
                o = Lu(o);
                var c = ei(a, o);
                c !== null && mn(c, a, o), Hf(a, o);
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
  function bl(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = Ff(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(
          a.type,
          a
        );
        Vu = o, a.target.dispatchEvent(o), Vu = null;
      } else
        return n = qa(a), n !== null && Kg(n), e.blockedOn = a, !1;
      n.shift();
    }
    return !0;
  }
  function tv(e, n, a) {
    bl(e) && a.delete(n);
  }
  function Q_() {
    Gf = !1, Vr !== null && bl(Vr) && (Vr = null), Yr !== null && bl(Yr) && (Yr = null), Xr !== null && bl(Xr) && (Xr = null), ks.forEach(tv), js.forEach(tv);
  }
  function _l(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Gf || (Gf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      Q_
    )));
  }
  var Sl = null;
  function nv(e) {
    Sl !== e && (Sl = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        Sl === e && (Sl = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n], o = e[n + 1], c = e[n + 2];
          if (typeof o != "function") {
            if (Zf(o || a) === null)
              continue;
            break;
          }
          var g = qa(a);
          g !== null && (e.splice(n, 3), n -= 3, Fc(
            g,
            {
              pending: !0,
              data: c,
              method: a.method,
              action: o
            },
            o,
            c
          ));
        }
      }
    ));
  }
  function zs(e) {
    function n(j) {
      return _l(j, e);
    }
    Vr !== null && _l(Vr, e), Yr !== null && _l(Yr, e), Xr !== null && _l(Xr, e), ks.forEach(n), js.forEach(n);
    for (var a = 0; a < $r.length; a++) {
      var o = $r[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < $r.length && (a = $r[0], a.blockedOn === null); )
      ev(a), a.blockedOn === null && $r.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (o = 0; o < a.length; o += 3) {
        var c = a[o], g = a[o + 1], w = c[Jt] || null;
        if (typeof g == "function")
          w || nv(a);
        else if (w) {
          var O = null;
          if (g && g.hasAttribute("formAction")) {
            if (c = g, w = g[Jt] || null)
              O = w.formAction;
            else if (Zf(c) !== null) continue;
          } else O = w.action;
          typeof O == "function" ? a[o + 1] = O : (a.splice(o, 3), o -= 3), nv(a);
        }
      }
  }
  function Vf(e) {
    this._internalRoot = e;
  }
  xl.prototype.render = Vf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var a = n.current, o = pn();
    $g(a, o, e, n, null, null);
  }, xl.prototype.unmount = Vf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      $g(e.current, 2, null, e, null, null), rl(), n[Ua] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = bh();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < $r.length && n !== 0 && n < $r[a].priority; a++) ;
      $r.splice(a, 0, e), a === 0 && ev(e);
    }
  };
  var rv = r.version;
  if (rv !== "19.1.1")
    throw Error(
      s(
        527,
        rv,
        "19.1.1"
      )
    );
  ne.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(n), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var K_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var El = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!El.isDisabled && El.supportsFiber)
      try {
        rr = El.inject(
          K_
        ), gt = El;
      } catch {
      }
  }
  return Bs.createRoot = function(e, n) {
    if (!l(e)) throw Error(s(299));
    var a = !1, o = "", c = bm, g = _m, w = Sm, O = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (g = n.onCaughtError), n.onRecoverableError !== void 0 && (w = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (O = n.unstable_transitionCallbacks)), n = Yg(
      e,
      1,
      !1,
      null,
      null,
      a,
      o,
      c,
      g,
      w,
      O,
      null
    ), e[Ua] = n.current, Tf(e), new Vf(n);
  }, Bs.hydrateRoot = function(e, n, a) {
    if (!l(e)) throw Error(s(299));
    var o = !1, c = "", g = bm, w = _m, O = Sm, j = null, q = null;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (g = a.onUncaughtError), a.onCaughtError !== void 0 && (w = a.onCaughtError), a.onRecoverableError !== void 0 && (O = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (j = a.unstable_transitionCallbacks), a.formState !== void 0 && (q = a.formState)), n = Yg(
      e,
      1,
      !0,
      n,
      a ?? null,
      o,
      c,
      g,
      w,
      O,
      j,
      q
    ), n.context = Xg(null), a = n.current, o = pn(), o = Lu(o), c = kr(o), c.callback = null, jr(a, c, o), a = o, n.current.lanes = a, Hi(n, a), Jn(n), e[Ua] = n.current, Tf(e), new xl(n);
  }, Bs.version = "19.1.1", Bs;
}
var yv;
function N2() {
  if (yv) return Qf.exports;
  yv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Qf.exports = A2(), Qf.exports;
}
var T2 = N2();
const bv = /* @__PURE__ */ l0(T2);
var O2 = Object.defineProperty, D2 = (t, r, i) => r in t ? O2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, M2 = (t, r, i) => D2(t, r + "", i);
class c0 extends Error {
  constructor(r, i) {
    super(r), M2(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function k2(t, r) {
  const i = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(t)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const l = i.getRequestHeaders();
  delete l["Content-Type"];
  const u = await fetch("/api/characters/import", {
    method: "POST",
    headers: l,
    body: s,
    cache: "no-cache"
  });
  if (!u.ok)
    throw new c0(u.statusText, u);
  await i.getCharacters();
}
async function j2(t, r) {
  var i;
  const s = SillyTavern.getContext();
  if (!t.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  t == null || delete t.json_data, (i = t?.data) == null || delete i.json_data;
  const l = s.getRequestHeaders(), u = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: l,
    body: JSON.stringify(t),
    cache: "no-cache"
  });
  if (!u.ok) {
    const f = await u.json().catch(() => ({ message: u.statusText }));
    throw new c0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var R2 = Object.defineProperty, z2 = (t, r, i) => r in t ? R2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, _v = (t, r, i) => z2(t, typeof r != "symbol" ? r + "" : r, i);
class f0 {
  constructor(r, i) {
    _v(this, "settingsKey"), _v(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
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
    const { strategy: i = "recursive" } = r, s = this.defaultSettings.version, l = this.defaultSettings.formatVersion, u = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
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
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), l && l !== "*" && u.formatVersion !== l && (p.formatVersion.changed = !0, p.formatVersion.new = l, u.formatVersion = l), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), l && !u.formatVersion && (u.formatVersion = l, p.formatVersion.changed = !0, p.formatVersion.new = l);
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
function wr(t) {
  return Array.isArray ? Array.isArray(t) : p0(t) === "[object Array]";
}
function L2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function I2(t) {
  return t == null ? "" : L2(t);
}
function er(t) {
  return typeof t == "string";
}
function d0(t) {
  return typeof t == "number";
}
function P2(t) {
  return t === !0 || t === !1 || B2(t) && p0(t) == "[object Boolean]";
}
function h0(t) {
  return typeof t == "object";
}
function B2(t) {
  return h0(t) && t !== null;
}
function bn(t) {
  return t != null;
}
function ed(t) {
  return !t.trim().length;
}
function p0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const U2 = "Incorrect 'index' type", H2 = (t) => `Invalid value for key ${t}`, q2 = (t) => `Pattern length exceeds max of ${t}.`, F2 = (t) => `Missing ${t} property in key`, Z2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Sv = Object.prototype.hasOwnProperty;
class G2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let l = m0(s);
      this._keys.push(l), this._keyMap[l.id] = l, i += l.weight;
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
function m0(t) {
  let r = null, i = null, s = null, l = 1, u = null;
  if (er(t) || wr(t))
    s = t, r = xv(t), i = wd(t);
  else {
    if (!Sv.call(t, "name"))
      throw new Error(F2("name"));
    const f = t.name;
    if (s = f, Sv.call(t, "weight") && (l = t.weight, l <= 0))
      throw new Error(Z2(f));
    r = xv(f), i = wd(f), u = t.getFn;
  }
  return { path: r, id: i, weight: l, src: s, getFn: u };
}
function xv(t) {
  return wr(t) ? t : t.split(".");
}
function wd(t) {
  return wr(t) ? t.join(".") : t;
}
function V2(t, r) {
  let i = [], s = !1;
  const l = (u, f, p) => {
    if (bn(u))
      if (!f[p])
        i.push(u);
      else {
        let h = f[p];
        const m = u[h];
        if (!bn(m))
          return;
        if (p === f.length - 1 && (er(m) || d0(m) || P2(m)))
          i.push(I2(m));
        else if (wr(m)) {
          s = !0;
          for (let y = 0, _ = m.length; y < _; y += 1)
            l(m[y], f, p + 1);
        } else f.length && l(m, f, p + 1);
      }
  };
  return l(t, er(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const Y2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, X2 = {
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
}, $2 = {
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
}, Q2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: V2,
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
var ke = {
  ...X2,
  ...Y2,
  ...$2,
  ...Q2
};
const K2 = /[^ ]+/g;
function J2(t = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(l) {
      const u = l.match(K2).length;
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
class Wd {
  constructor({
    getFn: r = ke.getFn,
    fieldNormWeight: i = ke.fieldNormWeight
  } = {}) {
    this.norm = J2(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, er(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    er(r) ? this._addString(r, i) : this._addObject(r, i);
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
    if (!bn(r) || ed(r))
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
    this.keys.forEach((l, u) => {
      let f = l.getFn ? l.getFn(r) : this.getFn(r, l.path);
      if (bn(f)) {
        if (wr(f)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: m, value: y } = h.pop();
            if (bn(y))
              if (er(y) && !ed(y)) {
                let _ = {
                  v: y,
                  i: m,
                  n: this.norm.get(y)
                };
                p.push(_);
              } else wr(y) && y.forEach((_, b) => {
                h.push({
                  nestedArrIndex: b,
                  value: _
                });
              });
          }
          s.$[u] = p;
        } else if (er(f) && !ed(f)) {
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
function g0(t, r, { getFn: i = ke.getFn, fieldNormWeight: s = ke.fieldNormWeight } = {}) {
  const l = new Wd({ getFn: i, fieldNormWeight: s });
  return l.setKeys(t.map(m0)), l.setSources(r), l.create(), l;
}
function W2(t, { getFn: r = ke.getFn, fieldNormWeight: i = ke.fieldNormWeight } = {}) {
  const { keys: s, records: l } = t, u = new Wd({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(l), u;
}
function Cl(t, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: l = ke.distance,
  ignoreLocation: u = ke.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (u)
    return f;
  const p = Math.abs(s - i);
  return l ? f + p / l : p ? 1 : f;
}
function eS(t = [], r = ke.minMatchCharLength) {
  let i = [], s = -1, l = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (l = u - 1, l - s + 1 >= r && i.push([s, l]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const Ma = 32;
function tS(t, r, i, {
  location: s = ke.location,
  distance: l = ke.distance,
  threshold: u = ke.threshold,
  findAllMatches: f = ke.findAllMatches,
  minMatchCharLength: p = ke.minMatchCharLength,
  includeMatches: h = ke.includeMatches,
  ignoreLocation: m = ke.ignoreLocation
} = {}) {
  if (r.length > Ma)
    throw new Error(q2(Ma));
  const y = r.length, _ = t.length, b = Math.max(0, Math.min(s, _));
  let v = u, d = b;
  const S = p > 1 || h, E = S ? Array(_) : [];
  let T;
  for (; (T = t.indexOf(r, d)) > -1; ) {
    let k = Cl(r, {
      currentLocation: T,
      expectedLocation: b,
      distance: l,
      ignoreLocation: m
    });
    if (v = Math.min(k, v), d = T + y, S) {
      let B = 0;
      for (; B < y; )
        E[T + B] = 1, B += 1;
    }
  }
  d = -1;
  let A = [], D = 1, C = y + _;
  const N = 1 << y - 1;
  for (let k = 0; k < y; k += 1) {
    let B = 0, $ = C;
    for (; B < $; )
      Cl(r, {
        errors: k,
        currentLocation: b + $,
        expectedLocation: b,
        distance: l,
        ignoreLocation: m
      }) <= v ? B = $ : C = $, $ = Math.floor((C - B) / 2 + B);
    C = $;
    let I = Math.max(1, b - $ + 1), Z = f ? _ : Math.min(b + $, _) + y, K = Array(Z + 2);
    K[Z + 1] = (1 << k) - 1;
    for (let ge = Z; ge >= I; ge -= 1) {
      let be = ge - 1, U = i[t.charAt(be)];
      if (S && (E[be] = +!!U), K[ge] = (K[ge + 1] << 1 | 1) & U, k && (K[ge] |= (A[ge + 1] | A[ge]) << 1 | 1 | A[ge + 1]), K[ge] & N && (D = Cl(r, {
        errors: k,
        currentLocation: be,
        expectedLocation: b,
        distance: l,
        ignoreLocation: m
      }), D <= v)) {
        if (v = D, d = be, d <= b)
          break;
        I = Math.max(1, 2 * b - d);
      }
    }
    if (Cl(r, {
      errors: k + 1,
      currentLocation: b,
      expectedLocation: b,
      distance: l,
      ignoreLocation: m
    }) > v)
      break;
    A = K;
  }
  const M = {
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (S) {
    const k = eS(E, p);
    k.length ? h && (M.indices = k) : M.isMatch = !1;
  }
  return M;
}
function nS(t) {
  let r = {};
  for (let i = 0, s = t.length; i < s; i += 1) {
    const l = t.charAt(i);
    r[l] = (r[l] || 0) | 1 << s - i - 1;
  }
  return r;
}
const mu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class v0 {
  constructor(r, {
    location: i = ke.location,
    threshold: s = ke.threshold,
    distance: l = ke.distance,
    includeMatches: u = ke.includeMatches,
    findAllMatches: f = ke.findAllMatches,
    minMatchCharLength: p = ke.minMatchCharLength,
    isCaseSensitive: h = ke.isCaseSensitive,
    ignoreDiacritics: m = ke.ignoreDiacritics,
    ignoreLocation: y = ke.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: m,
      ignoreLocation: y
    }, r = h ? r : r.toLowerCase(), r = m ? mu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (v, d) => {
      this.chunks.push({
        pattern: v,
        alphabet: nS(v),
        startIndex: d
      });
    }, b = this.pattern.length;
    if (b > Ma) {
      let v = 0;
      const d = b % Ma, S = b - d;
      for (; v < S; )
        _(this.pattern.substr(v, Ma), v), v += Ma;
      if (d) {
        const E = b - Ma;
        _(this.pattern.substr(E), E);
      }
    } else
      _(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: s, includeMatches: l } = this.options;
    if (r = i ? r : r.toLowerCase(), r = s ? mu(r) : r, this.pattern === r) {
      let S = {
        isMatch: !0,
        score: 0
      };
      return l && (S.indices = [[0, r.length - 1]]), S;
    }
    const {
      location: u,
      distance: f,
      threshold: p,
      findAllMatches: h,
      minMatchCharLength: m,
      ignoreLocation: y
    } = this.options;
    let _ = [], b = 0, v = !1;
    this.chunks.forEach(({ pattern: S, alphabet: E, startIndex: T }) => {
      const { isMatch: A, score: D, indices: C } = tS(r, S, E, {
        location: u + T,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: m,
        includeMatches: l,
        ignoreLocation: y
      });
      A && (v = !0), b += D, A && C && (_ = [..._, ...C]);
    });
    let d = {
      isMatch: v,
      score: v ? b / this.chunks.length : 1
    };
    return v && l && (d.indices = _), d;
  }
}
class ra {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return Ev(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return Ev(r, this.singleRegex);
  }
  search() {
  }
}
function Ev(t, r) {
  const i = t.match(r);
  return i ? i[1] : null;
}
class rS extends ra {
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
class aS extends ra {
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
class iS extends ra {
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
class sS extends ra {
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
class oS extends ra {
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
class lS extends ra {
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
class y0 extends ra {
  constructor(r, {
    location: i = ke.location,
    threshold: s = ke.threshold,
    distance: l = ke.distance,
    includeMatches: u = ke.includeMatches,
    findAllMatches: f = ke.findAllMatches,
    minMatchCharLength: p = ke.minMatchCharLength,
    isCaseSensitive: h = ke.isCaseSensitive,
    ignoreDiacritics: m = ke.ignoreDiacritics,
    ignoreLocation: y = ke.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new v0(r, {
      location: i,
      threshold: s,
      distance: l,
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
class b0 extends ra {
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
    const l = [], u = this.pattern.length;
    for (; (s = r.indexOf(this.pattern, i)) > -1; )
      i = s + u, l.push([s, i - 1]);
    const f = !!l.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: l
    };
  }
}
const Ad = [
  rS,
  b0,
  iS,
  sS,
  lS,
  oS,
  aS,
  y0
], Cv = Ad.length, uS = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, cS = "|";
function fS(t, r = {}) {
  return t.split(cS).map((i) => {
    let s = i.trim().split(uS).filter((u) => u && !!u.trim()), l = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let h = !1, m = -1;
      for (; !h && ++m < Cv; ) {
        const y = Ad[m];
        let _ = y.isMultiMatch(p);
        _ && (l.push(new y(_, r)), h = !0);
      }
      if (!h)
        for (m = -1; ++m < Cv; ) {
          const y = Ad[m];
          let _ = y.isSingleMatch(p);
          if (_) {
            l.push(new y(_, r));
            break;
          }
        }
    }
    return l;
  });
}
const dS = /* @__PURE__ */ new Set([y0.type, b0.type]);
class hS {
  constructor(r, {
    isCaseSensitive: i = ke.isCaseSensitive,
    ignoreDiacritics: s = ke.ignoreDiacritics,
    includeMatches: l = ke.includeMatches,
    minMatchCharLength: u = ke.minMatchCharLength,
    ignoreLocation: f = ke.ignoreLocation,
    findAllMatches: p = ke.findAllMatches,
    location: h = ke.location,
    threshold: m = ke.threshold,
    distance: y = ke.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: l,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: f,
      location: h,
      threshold: m,
      distance: y
    }, r = i ? r : r.toLowerCase(), r = s ? mu(r) : r, this.pattern = r, this.query = fS(this.pattern, this.options);
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
    const { includeMatches: s, isCaseSensitive: l, ignoreDiacritics: u } = this.options;
    r = l ? r : r.toLowerCase(), r = u ? mu(r) : r;
    let f = 0, p = [], h = 0;
    for (let m = 0, y = i.length; m < y; m += 1) {
      const _ = i[m];
      p.length = 0, f = 0;
      for (let b = 0, v = _.length; b < v; b += 1) {
        const d = _[b], { isMatch: S, indices: E, score: T } = d.search(r);
        if (S) {
          if (f += 1, h += T, s) {
            const A = d.constructor.type;
            dS.has(A) ? p = [...p, ...E] : p.push(E);
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
const Nd = [];
function pS(...t) {
  Nd.push(...t);
}
function Td(t, r) {
  for (let i = 0, s = Nd.length; i < s; i += 1) {
    let l = Nd[i];
    if (l.condition(t, r))
      return new l(t, r);
  }
  return new v0(t, r);
}
const gu = {
  AND: "$and",
  OR: "$or"
}, Od = {
  PATH: "$path",
  PATTERN: "$val"
}, Dd = (t) => !!(t[gu.AND] || t[gu.OR]), mS = (t) => !!t[Od.PATH], gS = (t) => !wr(t) && h0(t) && !Dd(t), wv = (t) => ({
  [gu.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function _0(t, r, { auto: i = !0 } = {}) {
  const s = (l) => {
    let u = Object.keys(l);
    const f = mS(l);
    if (!f && u.length > 1 && !Dd(l))
      return s(wv(l));
    if (gS(l)) {
      const h = f ? l[Od.PATH] : u[0], m = f ? l[Od.PATTERN] : l[h];
      if (!er(m))
        throw new Error(H2(h));
      const y = {
        keyId: wd(h),
        pattern: m
      };
      return i && (y.searcher = Td(m, r)), y;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const m = l[h];
      wr(m) && m.forEach((y) => {
        p.children.push(s(y));
      });
    }), p;
  };
  return Dd(t) || (t = wv(t)), s(t);
}
function vS(t, { ignoreFieldNorm: r = ke.ignoreFieldNorm }) {
  t.forEach((i) => {
    let s = 1;
    i.matches.forEach(({ key: l, norm: u, score: f }) => {
      const p = l ? l.weight : null;
      s *= Math.pow(
        f === 0 && p ? Number.EPSILON : f,
        (p || 1) * (r ? 1 : u)
      );
    }), i.score = s;
  });
}
function yS(t, r) {
  const i = t.matches;
  r.matches = [], bn(i) && i.forEach((s) => {
    if (!bn(s.indices) || !s.indices.length)
      return;
    const { indices: l, value: u } = s;
    let f = {
      indices: l,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function bS(t, r) {
  r.score = t.score;
}
function _S(t, r, {
  includeMatches: i = ke.includeMatches,
  includeScore: s = ke.includeScore
} = {}) {
  const l = [];
  return i && l.push(yS), s && l.push(bS), t.map((u) => {
    const { idx: f } = u, p = {
      item: r[f],
      refIndex: f
    };
    return l.length && l.forEach((h) => {
      h(u, p);
    }), p;
  });
}
class Bi {
  constructor(r, i = {}, s) {
    this.options = { ...ke, ...i }, this.options.useExtendedSearch, this._keyStore = new G2(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Wd))
      throw new Error(U2);
    this._myIndex = i || g0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    bn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const i = [];
    for (let s = 0, l = this._docs.length; s < l; s += 1) {
      const u = this._docs[s];
      r(u, s) && (this.removeAt(s), s -= 1, l -= 1, i.push(u));
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
      includeScore: l,
      shouldSort: u,
      sortFn: f,
      ignoreFieldNorm: p
    } = this.options;
    let h = er(r) ? er(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return vS(h, { ignoreFieldNorm: p }), u && h.sort(f), d0(i) && i > -1 && (h = h.slice(0, i)), _S(h, this._docs, {
      includeMatches: s,
      includeScore: l
    });
  }
  _searchStringList(r) {
    const i = Td(r, this.options), { records: s } = this._myIndex, l = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!bn(u))
        return;
      const { isMatch: h, score: m, indices: y } = i.searchIn(u);
      h && l.push({
        item: u,
        idx: f,
        matches: [{ score: m, value: u, norm: p, indices: y }]
      });
    }), l;
  }
  _searchLogical(r) {
    const i = _0(r, this.options), s = (p, h, m) => {
      if (!p.children) {
        const { keyId: _, searcher: b } = p, v = this._findMatches({
          key: this._keyStore.get(_),
          value: this._myIndex.getValueForItemAtKeyId(h, _),
          searcher: b
        });
        return v && v.length ? [
          {
            idx: m,
            item: h,
            matches: v
          }
        ] : [];
      }
      const y = [];
      for (let _ = 0, b = p.children.length; _ < b; _ += 1) {
        const v = p.children[_], d = s(v, h, m);
        if (d.length)
          y.push(...d);
        else if (p.operator === gu.AND)
          return [];
      }
      return y;
    }, l = this._myIndex.records, u = {}, f = [];
    return l.forEach(({ $: p, i: h }) => {
      if (bn(p)) {
        let m = s(i, p, h);
        m.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), m.forEach(({ matches: y }) => {
          u[h].matches.push(...y);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const i = Td(r, this.options), { keys: s, records: l } = this._myIndex, u = [];
    return l.forEach(({ $: f, i: p }) => {
      if (!bn(f))
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
    if (!bn(i))
      return [];
    let l = [];
    if (wr(i))
      i.forEach(({ v: u, i: f, n: p }) => {
        if (!bn(u))
          return;
        const { isMatch: h, score: m, indices: y } = s.searchIn(u);
        h && l.push({
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
      p && l.push({ score: h, key: r, value: u, norm: f, indices: m });
    }
    return l;
  }
}
Bi.version = "7.1.0";
Bi.createIndex = g0;
Bi.parseIndex = W2;
Bi.config = ke;
Bi.parseQuery = _0;
pS(hS);
var SS = Object.defineProperty, xS = (t, r, i) => r in t ? SS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, ES = (t, r, i) => xS(t, r + "", i);
let CS = class {
  constructor() {
    ES(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
    const l = SillyTavern.getContext(), u = l.uuidv4(), f = ((s = r?.custom) == null ? void 0 : s.stream) ?? !1;
    if (this.requestMap.set(u, {
      abortController: i?.abortController,
      isStream: f,
      options: i
    }), f)
      try {
        const p = await l.ConnectionManagerRequestService.sendRequest(
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
        const p = await l.ConnectionManagerRequestService.sendRequest(
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
async function wS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function _e(t, r, { escapeHtml: i = !0 } = {}) {
  await wS("echo", { severity: t, escapeHtml: (!!i).toString() }, r);
}
function td(t) {
  return n2(t);
}
function Av(t, r) {
  return e2(t, r);
}
function wl(t, r, i) {
  return t2(t, r, i);
}
function AS(t, r, i) {
  return l2(t, r, i);
}
function NS(t, r) {
  return u2(t, r);
}
function TS(t, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return W_(t, { customStoryString: r, customInstructSettings: i });
}
function Aa(t) {
  return m2(t);
}
function OS() {
  return {
    prompt: Ls[Is.prompt],
    interval: Ls[Is.interval],
    position: Ls[Is.position],
    depth: Ls[Is.depth],
    role: Ls[Is.role]
  };
}
function DS(t, r) {
  return v2(t, r);
}
function MS({
  name2: t,
  charDescription: r,
  charPersonality: i,
  Scenario: s,
  worldInfoBefore: l,
  worldInfoAfter: u,
  bias: f,
  type: p,
  quietPrompt: h,
  quietImage: m,
  extensionPrompts: y,
  cyclePrompt: _,
  systemPromptOverride: b,
  jailbreakPromptOverride: v,
  personaDescription: d,
  messages: S,
  messageExamples: E
}, T) {
  return g2(
    {
      name2: t,
      charDescription: r,
      charPersonality: i,
      Scenario: s,
      worldInfoBefore: l,
      worldInfoAfter: u,
      bias: f,
      type: p,
      quietPrompt: h,
      quietImage: m,
      cyclePrompt: _,
      systemPromptOverride: b,
      jailbreakPromptOverride: v,
      personaDescription: d,
      extensionPrompts: y,
      messages: S,
      messageExamples: E
    },
    T
  );
}
function kS(t) {
  return f2(t);
}
function jS(t) {
  return d2(t);
}
function RS(t, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: l,
  isEdit: u,
  depth: f
}) {
  return y2(t, r, { characterOverride: i, isMarkdown: s, isPrompt: l, isEdit: u, depth: f });
}
async function zS(t, r) {
  return await c2(t, r);
}
function Nv(t, {
  wiFormat: r
} = {}) {
  return h2(t, { wiFormat: r });
}
function Us(t) {
  return p2(t);
}
function LS(t, r) {
  return i2(t, r);
}
class IS {
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
var PS = Object.defineProperty, BS = (t, r, i) => r in t ? PS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, Al = (t, r, i) => BS(t, typeof r != "symbol" ? r + "" : r, i);
class US {
  constructor(r) {
    Al(this, "messages", []), Al(this, "tokenizer"), Al(this, "maxContext"), Al(this, "currentTokenCount", 0), this.tokenizer = new IS(), this.maxContext = r;
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
    const i = r.filter((p) => p.content), s = i.map((p) => this.getTokenCount(p)), l = s.reduce((p, h) => p + h, 0);
    if (this.currentTokenCount + l <= this.maxContext)
      return this.messages.push(...i), this.currentTokenCount += l, !0;
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
async function S0(t, {
  targetCharacterId: r,
  presetName: i,
  instructName: s,
  contextName: l,
  syspromptName: u,
  maxContext: f,
  includeNames: p,
  ignoreCharacterFields: h,
  ignoreAuthorNote: m,
  ignoreWorldInfo: y,
  messageIndexesBetween: _
} = {}) {
  var b, v, d, S, E, T, A, D, C, N, M, k, B, $;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const I = SillyTavern.getContext();
  let { description: Z, personality: K, persona: pe, scenario: ge, mesExamples: be, system: U, jailbreak: ne } = h ? {
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
  const ve = t === "textgenerationwebui" ? (b = I.getPresetManager("instruct")) == null ? void 0 : b.getCompletionPresetByName(s) : void 0, Le = !!(ve != null && ve.enabled);
  let R = Av(be, Le);
  function W() {
    var ue, ie;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !i)
      return td();
    if (typeof f == "number")
      return f;
    let ze;
    if (t === "textgenerationwebui") {
      const Ce = (ue = I.getPresetManager("textgenerationwebui")) == null ? void 0 : ue.getCompletionPresetByName(i);
      ze = Ce?.max_length;
    } else {
      const Ce = (ie = I.getPresetManager("openai")) == null ? void 0 : ie.getCompletionPresetByName(i);
      ze = Ce?.openai_max_context;
    }
    return typeof ze == "number" ? ze : td();
  }
  let se = [];
  const ce = W();
  if (ce <= 0)
    return { result: [], warnings: se };
  const de = new US(ce), Ie = I.ToolManager.isToolCallingSupported(), X = _?.start ?? 0, Se = _ != null && _.end ? _.end + 1 : void 0;
  let Ee = X === -1 && Se === 0 ? [] : I.chat.slice(X, Se).filter((ue) => {
    var ie;
    return !ue.is_system || Ie && Array.isArray((ie = ue.extra) == null ? void 0 : ie.tool_invocations);
  });
  Ee = await Promise.all(
    Ee.map(async (ue, ie) => {
      var ze, Ce;
      let Ue = ue.mes, Qt = ue.is_user ? sv.USER_INPUT : sv.AI_OUTPUT, rr = { isPrompt: !0, depth: Ee.length - ie - 1 }, gt = RS(Ue, Qt, rr);
      return gt = await zS(ue, gt), (ze = ue?.extra) != null && ze.append_title && (Ce = ue?.extra) != null && Ce.title && (gt = `${gt}

${ue.extra.title}`), {
        ...ue,
        mes: gt,
        index: ie
      };
    })
  );
  const Ye = Ee.map((ue) => s2 ? `${ue.name}: ${ue.mes}` : ue.mes).reverse(), { worldInfoString: We, worldInfoBefore: je, worldInfoAfter: P, worldInfoExamples: oe, worldInfoDepth: ae, anBefore: Y, anAfter: le } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await I.getWorldInfoPrompt(Ye, ce, !1);
  for (const ue of oe) {
    const ie = ue.content;
    if (ie.length === 0)
      continue;
    const ze = wl(ie, xr, Kr), Ce = Av(ze, Le);
    ue.position === o2.before ? R.unshift(...Ce) : R.push(...Ce);
  }
  function he() {
    const ue = [];
    for (let ie = Ee.length - 1; ie >= 0; ie--) {
      const ze = Ee[ie], Ce = ze.name === "System" && !ze.is_user ? "system" : ze.is_user ? "user" : "assistant";
      ue.unshift({
        role: Ce,
        content: p && Ce != "system" ? `${ze.name}: ${ze.mes}` : ze.mes,
        source: ze
      });
    }
    de.addMany(ue);
  }
  if (t === "textgenerationwebui") {
    const ue = [...R];
    R && (R = AS(R, xr, Kr));
    const ie = (v = I.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    ie && (U = I.powerUserSettings.prefer_character_prompt && U ? U : wl(ie.content, xr, Kr), U = Le ? NS(
      I.substituteParams(U, xr, Kr, ie.content),
      ve
    ) : U);
    const ze = {
      description: Z,
      personality: K,
      persona: I.powerUserSettings.persona_description_position == av.IN_PROMPT ? pe : "",
      scenario: ge,
      system: U,
      char: Kr,
      user: xr,
      wiBefore: je,
      wiAfter: P,
      loreBefore: je,
      loreAfter: P,
      mesExamples: R.join(""),
      mesExamplesRaw: ue.join("")
    }, Ce = (d = I.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(l);
    let Ue = TS(ze, {
      customInstructSettings: ve,
      customStoryString: Ce?.story_string
    });
    Ue && de.add({ role: "system", content: Ue, ignoreInstruct: !0 }), he();
  } else {
    let ue = function(Gt) {
      const Kt = Sn.find((Ba) => Ba.identifier === Gt);
      if (Kt)
        return Kt;
      const ho = Ue.prompts.find((Ba) => Ba.identifier === Gt);
      if (ho)
        return ho;
    }, ie = kS(Ee), ze = jS(R);
    async function Ce() {
      let [Gt, Kt] = await MS(
        {
          name2: Kr,
          charDescription: Z,
          charPersonality: K,
          Scenario: ge,
          worldInfoBefore: je,
          worldInfoAfter: P,
          extensionPrompts: I.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: U,
          jailbreakPromptOverride: ne,
          personaDescription: pe,
          messages: ie,
          messageExamples: ze
        },
        !1
      );
      de.addMany(Gt);
    }
    if (!i)
      return se.push("No preset name provided. Using default preset."), await Ce(), { result: de.getMessages(), warnings: se };
    const Ue = (S = I.getPresetManager("openai")) == null ? void 0 : S.getCompletionPresetByName(i);
    if (!Ue)
      return console.warn(`Preset not found: ${i}. Using current preset.`), se.push(`Preset not found: ${i}. Using current preset.`), Ce(), { result: de.getMessages(), warnings: se };
    let Qt = (E = Ue.prompt_order) == null ? void 0 : E.find((Gt) => Gt.character_id === Ht);
    if (!Qt && Ue.prompt_order && Ue.prompt_order.length > 0 && (Qt = Ue.prompt_order[Ue.prompt_order.length - 1]), !Qt)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), se.push(`No prompt order found for preset: ${i}. Using current preset.`), Ce(), { result: de.getMessages(), warnings: se };
    const rr = ge && Ue.scenario_format ? I.substituteParams(Ue.scenario_format) : "", gt = K && Ue.personality_format ? I.substituteParams(Ue.personality_format) : "", Vn = I.substituteParams(Ue.group_nudge_prompt), Zt = Ue.impersonation_prompt ? I.substituteParams(Ue.impersonation_prompt) : "", Sn = [];
    y || Sn.push(
      {
        role: "system",
        content: Nv(je, { wiFormat: Ue.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Nv(P, { wiFormat: Ue.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || Sn.push(
      { role: "system", content: Z, identifier: "charDescription" },
      { role: "system", content: gt, identifier: "charPersonality" },
      { role: "system", content: rr, identifier: "scenario" }
    ), Sn.push(
      { role: "system", content: Zt, identifier: "impersonate" },
      { role: "system", content: Vn, identifier: "groupNudge" }
    );
    const sa = I.extensionPrompts["1_memory"];
    sa && sa.value && Sn.push({
      role: Aa(sa.role),
      content: sa.value,
      identifier: "summary",
      position: Us(sa.position)
    });
    const oa = I.extensionPrompts["2_floating_prompt"];
    !m && oa && oa.value && Sn.push({
      role: Aa(oa.role),
      content: oa.value,
      identifier: "authorsNote",
      position: Us(oa.position)
    });
    const ar = I.extensionPrompts["3_vectors"];
    ar && ar.value && Sn.push({
      role: "system",
      content: ar.value,
      identifier: "vectorsMemory",
      position: Us(ar.position)
    });
    const Yn = I.extensionPrompts["4_vectors_data_bank"];
    Yn && Yn.value && Sn.push({
      role: Aa(Yn.role),
      content: Yn.value,
      identifier: "vectorsDataBank",
      position: Us(Yn.position)
    });
    const xn = I.extensionPrompts.chromadb;
    xn && xn.value && Sn.push({
      role: "system",
      content: xn.value,
      identifier: "smartContext",
      position: Us(xn.position)
    }), !h && I.powerUserSettings.persona_description && I.powerUserSettings.persona_description_position === av.IN_PROMPT && Sn.push({
      role: "system",
      content: I.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Qt.order.forEach((Gt) => {
      if (!Gt.enabled)
        return;
      const Kt = ue(Gt.identifier);
      if (Kt && Kt.content) {
        de.add({
          role: Kt.role ?? "system",
          content: I.substituteParams(Kt.content)
        });
        return;
      }
      Gt.identifier === "chatHistory" && he();
    });
  }
  const re = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const ue in I.extensionPrompts)
    if (Object.hasOwn(I.extensionPrompts, ue)) {
      const ie = I.extensionPrompts[ue];
      if (re.includes(ue) || !I.extensionPrompts[ue].value || ![wa.BEFORE_PROMPT, wa.IN_PROMPT].includes(ie.position) || typeof ie.filter == "function" && !await ie.filter()) continue;
      const ze = {
        role: Aa(ie.role) ?? "system",
        content: ie.value
      };
      if (ie.position === wa.BEFORE_PROMPT)
        de.insert(ie.depth, ze);
      else if (ie.position === wa.IN_PROMPT) {
        const Ce = de.getMessages();
        de.insert(Ce.length - ie.depth, ze);
      }
    }
  for (const ue of ae) {
    const ie = de.getMessages();
    de.insert(ie.length - ue.depth, {
      role: Aa(ue.role),
      content: ue.entries.join(`
`)
    });
  }
  if (!h) {
    const ue = DS(Fn, Number(Ht));
    if (Fn && Array.isArray(ue) && ue.length > 0)
      ue.filter((ie) => ie.text).forEach((ie, ze) => {
        const Ce = de.getMessages();
        de.insert(Ce.length - ie.depth, { role: ie.role, content: ie.text });
      });
    else {
      const ie = wl(
        (N = (C = (D = (A = (T = I.characters[Ht]) == null ? void 0 : T.data) == null ? void 0 : A.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : C.prompt) == null ? void 0 : N.trim(),
        xr,
        Kr
      ) || "";
      if (ie) {
        const ze = a2, Ce = (($ = (B = (k = (M = I.characters[Ht]) == null ? void 0 : M.data) == null ? void 0 : k.extensions) == null ? void 0 : B.depth_prompt) == null ? void 0 : $.role) ?? r2, Ue = de.getMessages();
        de.insert(Ue.length - ze, {
          role: Aa(Ce),
          content: ie
        });
      }
    }
  }
  let we = -1;
  if (!m) {
    const ue = OS();
    if (ue.prompt) {
      ue.prompt = wl(ue.prompt, xr, Kr);
      const ie = { role: Aa(ue.role), content: ue.prompt };
      switch (ue.position) {
        case wa.IN_PROMPT:
          de.insert(1, ie), we = 1;
          break;
        case wa.IN_CHAT:
          we = de.getMessages().length - ue.depth, de.insert(we, ie);
          break;
        case wa.BEFORE_PROMPT:
          de.addFront(ie), we = 0;
          break;
      }
    }
  }
  return we >= 0 && (Y.length > 0 && (de.insert(we, { role: "system", content: Y.join(`
`) }), we++), le.length > 0 && de.insert(we + 1, { role: "system", content: le.join(`
`) })), { result: de.getMessages(), warnings: se };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Tv(t, r) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function nr(t) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Tv(Object(i), !0).forEach(function(s) {
      HS(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Tv(Object(i)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return t;
}
function uu(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? uu = function(r) {
    return typeof r;
  } : uu = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, uu(t);
}
function HS(t, r, i) {
  return r in t ? Object.defineProperty(t, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = i, t;
}
function Ar() {
  return Ar = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, Ar.apply(this, arguments);
}
function qS(t, r) {
  if (t == null) return {};
  var i = {}, s = Object.keys(t), l, u;
  for (u = 0; u < s.length; u++)
    l = s[u], !(r.indexOf(l) >= 0) && (i[l] = t[l]);
  return i;
}
function FS(t, r) {
  if (t == null) return {};
  var i = qS(t, r), s, l;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (l = 0; l < u.length; l++)
      s = u[l], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s]);
  }
  return i;
}
var ZS = "1.15.6";
function Cr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Nr = Cr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), oo = Cr(/Edge/i), Ov = Cr(/firefox/i), Ws = Cr(/safari/i) && !Cr(/chrome/i) && !Cr(/android/i), eh = Cr(/iP(ad|od|hone)/i), x0 = Cr(/chrome/i) && Cr(/android/i), E0 = {
  capture: !1,
  passive: !1
};
function Ge(t, r, i) {
  t.addEventListener(r, i, !Nr && E0);
}
function Ze(t, r, i) {
  t.removeEventListener(r, i, !Nr && E0);
}
function vu(t, r) {
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
function C0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function qn(t, r, i, s) {
  if (t) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === i && vu(t, r) : vu(t, r)) || s && t === i)
        return t;
      if (t === i) break;
    } while (t = C0(t));
  }
  return null;
}
var Dv = /\s+/g;
function vn(t, r, i) {
  if (t && r)
    if (t.classList)
      t.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(Dv, " ").replace(" " + r + " ", " ");
      t.className = (s + (i ? " " + r : "")).replace(Dv, " ");
    }
}
function De(t, r, i) {
  var s = t && t.style;
  if (s) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (i = t.currentStyle), r === void 0 ? i : i[r];
    !(r in s) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), s[r] = i + (typeof i == "string" ? "" : "px");
  }
}
function zi(t, r) {
  var i = "";
  if (typeof t == "string")
    i = t;
  else
    do {
      var s = De(t, "transform");
      s && s !== "none" && (i = s + " " + i);
    } while (!r && (t = t.parentNode));
  var l = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return l && new l(i);
}
function w0(t, r, i) {
  if (t) {
    var s = t.getElementsByTagName(r), l = 0, u = s.length;
    if (i)
      for (; l < u; l++)
        i(s[l], l);
    return s;
  }
  return [];
}
function tr() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function Et(t, r, i, s, l) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, p, h, m, y, _;
    if (t !== window && t.parentNode && t !== tr() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, m = u.right, y = u.height, _ = u.width) : (f = 0, p = 0, h = window.innerHeight, m = window.innerWidth, y = window.innerHeight, _ = window.innerWidth), (r || i) && t !== window && (l = l || t.parentNode, !Nr))
      do
        if (l && l.getBoundingClientRect && (De(l, "transform") !== "none" || i && De(l, "position") !== "static")) {
          var b = l.getBoundingClientRect();
          f -= b.top + parseInt(De(l, "border-top-width")), p -= b.left + parseInt(De(l, "border-left-width")), h = f + u.height, m = p + u.width;
          break;
        }
      while (l = l.parentNode);
    if (s && t !== window) {
      var v = zi(l || t), d = v && v.a, S = v && v.d;
      v && (f /= S, p /= d, _ /= d, y /= S, h = f + y, m = p + _);
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
function Mv(t, r, i) {
  for (var s = na(t, !0), l = Et(t)[r]; s; ) {
    var u = Et(s)[i], f = void 0;
    if (f = l >= u, !f) return s;
    if (s === tr()) break;
    s = na(s, !1);
  }
  return !1;
}
function Pi(t, r, i, s) {
  for (var l = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== Me.ghost && (s || f[u] !== Me.dragged) && qn(f[u], i.draggable, t, !1)) {
      if (l === r)
        return f[u];
      l++;
    }
    u++;
  }
  return null;
}
function th(t, r) {
  for (var i = t.lastElementChild; i && (i === Me.ghost || De(i, "display") === "none" || r && !vu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function jn(t, r) {
  var i = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Me.clone && (!r || vu(t, r)) && i++;
  return i;
}
function kv(t) {
  var r = 0, i = 0, s = tr();
  if (t)
    do {
      var l = zi(t), u = l.a, f = l.d;
      r += t.scrollLeft * u, i += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, i];
}
function GS(t, r) {
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[i][s]) return Number(i);
    }
  return -1;
}
function na(t, r) {
  if (!t || !t.getBoundingClientRect) return tr();
  var i = t, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var l = De(i);
      if (i.clientWidth < i.scrollWidth && (l.overflowX == "auto" || l.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (l.overflowY == "auto" || l.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return tr();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return tr();
}
function VS(t, r) {
  if (t && r)
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  return t;
}
function nd(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var eo;
function A0(t, r) {
  return function() {
    if (!eo) {
      var i = arguments, s = this;
      i.length === 1 ? t.call(s, i[0]) : t.apply(s, i), eo = setTimeout(function() {
        eo = void 0;
      }, r);
    }
  };
}
function YS() {
  clearTimeout(eo), eo = void 0;
}
function N0(t, r, i) {
  t.scrollLeft += r, t.scrollTop += i;
}
function T0(t) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : i ? i(t).clone(!0)[0] : t.cloneNode(!0);
}
function O0(t, r, i) {
  var s = {};
  return Array.from(t.children).forEach(function(l) {
    var u, f, p, h;
    if (!(!qn(l, r.draggable, t, !1) || l.animated || l === i)) {
      var m = Et(l);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, m.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, m.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, m.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, m.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var sn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function XS() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(l) {
          if (!(De(l, "display") === "none" || l === Me.ghost)) {
            t.push({
              target: l,
              rect: Et(l)
            });
            var u = nr({}, t[t.length - 1].rect);
            if (l.thisAnimationDuration) {
              var f = zi(l, !0);
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
      t.splice(GS(t, {
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
      t.forEach(function(p) {
        var h = 0, m = p.target, y = m.fromRect, _ = Et(m), b = m.prevFromRect, v = m.prevToRect, d = p.rect, S = zi(m, !0);
        S && (_.top -= S.f, _.left -= S.e), m.toRect = _, m.thisAnimationDuration && nd(b, _) && !nd(y, _) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - _.top) / (d.left - _.left) === (y.top - _.top) / (y.left - _.left) && (h = QS(d, b, v, l.options)), nd(_, y) || (m.prevFromRect = y, m.prevToRect = _, h || (h = l.options.animation), l.animate(m, d, _, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(m.animationResetTimer), m.animationResetTimer = setTimeout(function() {
          m.animationTime = 0, m.prevFromRect = null, m.fromRect = null, m.prevToRect = null, m.thisAnimationDuration = null;
        }, h), m.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, l, u, f) {
      if (f) {
        De(s, "transition", ""), De(s, "transform", "");
        var p = zi(this.el), h = p && p.a, m = p && p.d, y = (l.left - u.left) / (h || 1), _ = (l.top - u.top) / (m || 1);
        s.animatingX = !!y, s.animatingY = !!_, De(s, "transform", "translate3d(" + y + "px," + _ + "px,0)"), this.forRepaintDummy = $S(s), De(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), De(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          De(s, "transition", ""), De(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function $S(t) {
  return t.offsetWidth;
}
function QS(t, r, i, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * s.animation;
}
var Ai = [], rd = {
  initializeByDefault: !0
}, lo = {
  mount: function(r) {
    for (var i in rd)
      rd.hasOwnProperty(i) && !(i in r) && (r[i] = rd[i]);
    Ai.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Ai.push(r);
  },
  pluginEvent: function(r, i, s) {
    var l = this;
    this.eventCanceled = !1, s.cancel = function() {
      l.eventCanceled = !0;
    };
    var u = r + "Global";
    Ai.forEach(function(f) {
      i[f.pluginName] && (i[f.pluginName][u] && i[f.pluginName][u](nr({
        sortable: i
      }, s)), i.options[f.pluginName] && i[f.pluginName][r] && i[f.pluginName][r](nr({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, l) {
    Ai.forEach(function(p) {
      var h = p.pluginName;
      if (!(!r.options[h] && !p.initializeByDefault)) {
        var m = new p(r, i, r.options);
        m.sortable = r, m.options = r.options, r[h] = m, Ar(s, m.defaults);
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
    return Ai.forEach(function(l) {
      typeof l.eventProperties == "function" && Ar(s, l.eventProperties.call(i[l.pluginName], r));
    }), s;
  },
  modifyOption: function(r, i, s) {
    var l;
    return Ai.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[i] == "function" && (l = u.optionListeners[i].call(r[u.pluginName], s));
    }), l;
  }
};
function KS(t) {
  var r = t.sortable, i = t.rootEl, s = t.name, l = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, h = t.oldIndex, m = t.newIndex, y = t.oldDraggableIndex, _ = t.newDraggableIndex, b = t.originalEvent, v = t.putSortable, d = t.extraEventProperties;
  if (r = r || i && i[sn], !!r) {
    var S, E = r.options, T = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !Nr && !oo ? S = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(s, !0, !0)), S.to = f || i, S.from = p || i, S.item = l || i, S.clone = u, S.oldIndex = h, S.newIndex = m, S.oldDraggableIndex = y, S.newDraggableIndex = _, S.originalEvent = b, S.pullMode = v ? v.lastPutMode : void 0;
    var A = nr(nr({}, d), lo.getEventProperties(s, r));
    for (var D in A)
      S[D] = A[D];
    i && i.dispatchEvent(S), E[T] && E[T].call(r, S);
  }
}
var JS = ["evt"], rn = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = s.evt, u = FS(s, JS);
  lo.pluginEvent.bind(Me)(r, i, nr({
    dragEl: fe,
    parentEl: pt,
    ghostEl: Re,
    rootEl: ot,
    nextEl: Oa,
    lastDownEl: cu,
    cloneEl: ct,
    cloneHidden: ta,
    dragStarted: $s,
    putSortable: Lt,
    activeSortable: Me.active,
    originalEvent: l,
    oldIndex: ji,
    oldDraggableIndex: to,
    newIndex: yn,
    newDraggableIndex: ea,
    hideGhostForTarget: j0,
    unhideGhostForTarget: R0,
    cloneNowHidden: function() {
      ta = !0;
    },
    cloneNowShown: function() {
      ta = !1;
    },
    dispatchSortableEvent: function(p) {
      Yt({
        sortable: i,
        name: p,
        originalEvent: l
      });
    }
  }, u));
};
function Yt(t) {
  KS(nr({
    putSortable: Lt,
    cloneEl: ct,
    targetEl: fe,
    rootEl: ot,
    oldIndex: ji,
    oldDraggableIndex: to,
    newIndex: yn,
    newDraggableIndex: ea
  }, t));
}
var fe, pt, Re, ot, Oa, cu, ct, ta, ji, yn, to, ea, Nl, Lt, ki = !1, yu = !1, bu = [], Na, Un, ad, id, jv, Rv, $s, Ni, no, ro = !1, Tl = !1, fu, Ut, sd = [], Md = !1, _u = [], Du = typeof document < "u", Ol = eh, zv = oo || Nr ? "cssFloat" : "float", WS = Du && !x0 && !eh && "draggable" in document.createElement("div"), D0 = (function() {
  if (Du) {
    if (Nr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), M0 = function(r, i) {
  var s = De(r), l = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Pi(r, 0, i), f = Pi(r, 1, i), p = u && De(u), h = f && De(f), m = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + Et(u).width, y = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + Et(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var _ = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === _) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || m >= l && s[zv] === "none" || f && s[zv] === "none" && m + y > l) ? "vertical" : "horizontal";
}, ex = function(r, i, s) {
  var l = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? i.left : i.top, h = s ? i.right : i.bottom, m = s ? i.width : i.height;
  return l === p || u === h || l + f / 2 === p + m / 2;
}, tx = function(r, i) {
  var s;
  return bu.some(function(l) {
    var u = l[sn].options.emptyInsertThreshold;
    if (!(!u || th(l))) {
      var f = Et(l), p = r >= f.left - u && r <= f.right + u, h = i >= f.top - u && i <= f.bottom + u;
      if (p && h)
        return s = l;
    }
  }), s;
}, k0 = function(r) {
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
  var s = {}, l = r.group;
  (!l || uu(l) != "object") && (l = {
    name: l
  }), s.name = l.name, s.checkPull = i(l.pull, !0), s.checkPut = i(l.put), s.revertClone = l.revertClone, r.group = s;
}, j0 = function() {
  !D0 && Re && De(Re, "display", "none");
}, R0 = function() {
  !D0 && Re && De(Re, "display", "");
};
Du && !x0 && document.addEventListener("click", function(t) {
  if (yu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), yu = !1, !1;
}, !0);
var Ta = function(r) {
  if (fe) {
    r = r.touches ? r.touches[0] : r;
    var i = tx(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var l in r)
        r.hasOwnProperty(l) && (s[l] = r[l]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[sn]._onDragOver(s);
    }
  }
}, nx = function(r) {
  fe && fe.parentNode[sn]._isOutsideThisEl(r.target);
};
function Me(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Ar({}, r), t[sn] = this;
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
      return M0(t, this.options);
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
    supportPointer: Me.supportPointer !== !1 && "PointerEvent" in window && (!Ws || eh),
    emptyInsertThreshold: 5
  };
  lo.initializePlugins(this, t, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  k0(r);
  for (var l in this)
    l.charAt(0) === "_" && typeof this[l] == "function" && (this[l] = this[l].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : WS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Ge(t, "pointerdown", this._onTapStart) : (Ge(t, "mousedown", this._onTapStart), Ge(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ge(t, "dragover", this), Ge(t, "dragenter", this)), bu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Ar(this, XS());
}
Me.prototype = /** @lends Sortable.prototype */
{
  constructor: Me,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ni = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, fe) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, l = this.options, u = l.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, m = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, y = l.filter;
      if (cx(s), !fe && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || l.disabled) && !m.isContentEditable && !(!this.nativeDraggable && Ws && h && h.tagName.toUpperCase() === "SELECT") && (h = qn(h, l.draggable, s, !1), !(h && h.animated) && cu !== h)) {
        if (ji = jn(h), to = jn(h, l.draggable), typeof y == "function") {
          if (y.call(this, r, h, this)) {
            Yt({
              sortable: i,
              rootEl: m,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), rn("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (y && (y = y.split(",").some(function(_) {
          if (_ = qn(m, _.trim(), s, !1), _)
            return Yt({
              sortable: i,
              rootEl: _,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), rn("filter", i, {
              evt: r
            }), !0;
        }), y)) {
          u && r.preventDefault();
          return;
        }
        l.handle && !qn(m, l.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var l = this, u = l.el, f = l.options, p = u.ownerDocument, h;
    if (s && !fe && s.parentNode === u) {
      var m = Et(s);
      if (ot = u, fe = s, pt = fe.parentNode, Oa = fe.nextSibling, cu = s, Nl = f.group, Me.dragged = fe, Na = {
        target: fe,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, jv = Na.clientX - m.left, Rv = Na.clientY - m.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, fe.style["will-change"] = "all", h = function() {
        if (rn("delayEnded", l, {
          evt: r
        }), Me.eventCanceled) {
          l._onDrop();
          return;
        }
        l._disableDelayedDragEvents(), !Ov && l.nativeDraggable && (fe.draggable = !0), l._triggerDragStart(r, i), Yt({
          sortable: l,
          name: "choose",
          originalEvent: r
        }), vn(fe, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(y) {
        w0(fe, y.trim(), od);
      }), Ge(p, "dragover", Ta), Ge(p, "mousemove", Ta), Ge(p, "touchmove", Ta), f.supportPointer ? (Ge(p, "pointerup", l._onDrop), !this.nativeDraggable && Ge(p, "pointercancel", l._onDrop)) : (Ge(p, "mouseup", l._onDrop), Ge(p, "touchend", l._onDrop), Ge(p, "touchcancel", l._onDrop)), Ov && this.nativeDraggable && (this.options.touchStartThreshold = 4, fe.draggable = !0), rn("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(oo || Nr))) {
        if (Me.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Ge(p, "pointerup", l._disableDelayedDrag), Ge(p, "pointercancel", l._disableDelayedDrag)) : (Ge(p, "mouseup", l._disableDelayedDrag), Ge(p, "touchend", l._disableDelayedDrag), Ge(p, "touchcancel", l._disableDelayedDrag)), Ge(p, "mousemove", l._delayedDragTouchMoveHandler), Ge(p, "touchmove", l._delayedDragTouchMoveHandler), f.supportPointer && Ge(p, "pointermove", l._delayedDragTouchMoveHandler), l._dragStartTimer = setTimeout(h, f.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    fe && od(fe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ze(r, "mouseup", this._disableDelayedDrag), Ze(r, "touchend", this._disableDelayedDrag), Ze(r, "touchcancel", this._disableDelayedDrag), Ze(r, "pointerup", this._disableDelayedDrag), Ze(r, "pointercancel", this._disableDelayedDrag), Ze(r, "mousemove", this._delayedDragTouchMoveHandler), Ze(r, "touchmove", this._delayedDragTouchMoveHandler), Ze(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Ge(document, "pointermove", this._onTouchMove) : i ? Ge(document, "touchmove", this._onTouchMove) : Ge(document, "mousemove", this._onTouchMove) : (Ge(fe, "dragend", this), Ge(ot, "dragstart", this._onDragStart));
    try {
      document.selection ? du(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (ki = !1, ot && fe) {
      rn("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Ge(document, "dragover", nx);
      var s = this.options;
      !r && vn(fe, s.dragClass, !1), vn(fe, s.ghostClass, !0), Me.active = this, r && this._appendGhost(), Yt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Un) {
      this._lastX = Un.clientX, this._lastY = Un.clientY, j0();
      for (var r = document.elementFromPoint(Un.clientX, Un.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Un.clientX, Un.clientY), r !== i); )
        i = r;
      if (fe.parentNode[sn]._isOutsideThisEl(r), i)
        do {
          if (i[sn]) {
            var s = void 0;
            if (s = i[sn]._onDragOver({
              clientX: Un.clientX,
              clientY: Un.clientY,
              target: r,
              rootEl: i
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = C0(i));
      R0();
    }
  },
  _onTouchMove: function(r) {
    if (Na) {
      var i = this.options, s = i.fallbackTolerance, l = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Re && zi(Re, !0), p = Re && f && f.a, h = Re && f && f.d, m = Ol && Ut && kv(Ut), y = (u.clientX - Na.clientX + l.x) / (p || 1) + (m ? m[0] - sd[0] : 0) / (p || 1), _ = (u.clientY - Na.clientY + l.y) / (h || 1) + (m ? m[1] - sd[1] : 0) / (h || 1);
      if (!Me.active && !ki) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Re) {
        f ? (f.e += y - (ad || 0), f.f += _ - (id || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: _
        };
        var b = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        De(Re, "webkitTransform", b), De(Re, "mozTransform", b), De(Re, "msTransform", b), De(Re, "transform", b), ad = y, id = _, Un = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Re) {
      var r = this.options.fallbackOnBody ? document.body : ot, i = Et(fe, !0, Ol, !0, r), s = this.options;
      if (Ol) {
        for (Ut = r; De(Ut, "position") === "static" && De(Ut, "transform") === "none" && Ut !== document; )
          Ut = Ut.parentNode;
        Ut !== document.body && Ut !== document.documentElement ? (Ut === document && (Ut = tr()), i.top += Ut.scrollTop, i.left += Ut.scrollLeft) : Ut = tr(), sd = kv(Ut);
      }
      Re = fe.cloneNode(!0), vn(Re, s.ghostClass, !1), vn(Re, s.fallbackClass, !0), vn(Re, s.dragClass, !0), De(Re, "transition", ""), De(Re, "transform", ""), De(Re, "box-sizing", "border-box"), De(Re, "margin", 0), De(Re, "top", i.top), De(Re, "left", i.left), De(Re, "width", i.width), De(Re, "height", i.height), De(Re, "opacity", "0.8"), De(Re, "position", Ol ? "absolute" : "fixed"), De(Re, "zIndex", "100000"), De(Re, "pointerEvents", "none"), Me.ghost = Re, r.appendChild(Re), De(Re, "transform-origin", jv / parseInt(Re.style.width) * 100 + "% " + Rv / parseInt(Re.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, l = r.dataTransfer, u = s.options;
    if (rn("dragStart", this, {
      evt: r
    }), Me.eventCanceled) {
      this._onDrop();
      return;
    }
    rn("setupClone", this), Me.eventCanceled || (ct = T0(fe), ct.removeAttribute("id"), ct.draggable = !1, ct.style["will-change"] = "", this._hideClone(), vn(ct, this.options.chosenClass, !1), Me.clone = ct), s.cloneId = du(function() {
      rn("clone", s), !Me.eventCanceled && (s.options.removeCloneOnHide || ot.insertBefore(ct, fe), s._hideClone(), Yt({
        sortable: s,
        name: "clone"
      }));
    }), !i && vn(fe, u.dragClass, !0), i ? (yu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Ze(document, "mouseup", s._onDrop), Ze(document, "touchend", s._onDrop), Ze(document, "touchcancel", s._onDrop), l && (l.effectAllowed = "move", u.setData && u.setData.call(s, l, fe)), Ge(document, "drop", s), De(fe, "transform", "translateZ(0)")), ki = !0, s._dragStartId = du(s._dragStarted.bind(s, i, r)), Ge(document, "selectstart", s), $s = !0, window.getSelection().removeAllRanges(), Ws && De(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, l, u, f, p = this.options, h = p.group, m = Me.active, y = Nl === h, _ = p.sort, b = Lt || m, v, d = this, S = !1;
    if (Md) return;
    function E(ve, Le) {
      rn(ve, d, nr({
        evt: r,
        isOwner: y,
        axis: v ? "vertical" : "horizontal",
        revert: f,
        dragRect: l,
        targetRect: u,
        canSort: _,
        fromSortable: b,
        target: s,
        completed: A,
        onMove: function(W, se) {
          return Dl(ot, i, fe, l, W, Et(W), r, se);
        },
        changed: D
      }, Le));
    }
    function T() {
      E("dragOverAnimationCapture"), d.captureAnimationState(), d !== b && b.captureAnimationState();
    }
    function A(ve) {
      return E("dragOverCompleted", {
        insertion: ve
      }), ve && (y ? m._hideClone() : m._showClone(d), d !== b && (vn(fe, Lt ? Lt.options.ghostClass : m.options.ghostClass, !1), vn(fe, p.ghostClass, !0)), Lt !== d && d !== Me.active ? Lt = d : d === Me.active && Lt && (Lt = null), b === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        E("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (s === fe && !fe.animated || s === i && !s.animated) && (Ni = null), !p.dragoverBubble && !r.rootEl && s !== document && (fe.parentNode[sn]._isOutsideThisEl(r.target), !ve && Ta(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), S = !0;
    }
    function D() {
      yn = jn(fe), ea = jn(fe, p.draggable), Yt({
        sortable: d,
        name: "change",
        toEl: i,
        newIndex: yn,
        newDraggableIndex: ea,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = qn(s, p.draggable, i, !0), E("dragOver"), Me.eventCanceled) return S;
    if (fe.contains(r.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return A(!1);
    if (yu = !1, m && !p.disabled && (y ? _ || (f = pt !== ot) : Lt === this || (this.lastPutMode = Nl.checkPull(this, m, fe, r)) && h.checkPut(this, m, fe, r))) {
      if (v = this._getDirection(r, s) === "vertical", l = Et(fe), E("dragOverValid"), Me.eventCanceled) return S;
      if (f)
        return pt = ot, T(), this._hideClone(), E("revert"), Me.eventCanceled || (Oa ? ot.insertBefore(fe, Oa) : ot.appendChild(fe)), A(!0);
      var C = th(i, p.draggable);
      if (!C || sx(r, v, this) && !C.animated) {
        if (C === fe)
          return A(!1);
        if (C && i === r.target && (s = C), s && (u = Et(s)), Dl(ot, i, fe, l, s, u, r, !!s) !== !1)
          return T(), C && C.nextSibling ? i.insertBefore(fe, C.nextSibling) : i.appendChild(fe), pt = i, D(), A(!0);
      } else if (C && ix(r, v, this)) {
        var N = Pi(i, 0, p, !0);
        if (N === fe)
          return A(!1);
        if (s = N, u = Et(s), Dl(ot, i, fe, l, s, u, r, !1) !== !1)
          return T(), i.insertBefore(fe, N), pt = i, D(), A(!0);
      } else if (s.parentNode === i) {
        u = Et(s);
        var M = 0, k, B = fe.parentNode !== i, $ = !ex(fe.animated && fe.toRect || l, s.animated && s.toRect || u, v), I = v ? "top" : "left", Z = Mv(s, "top", "top") || Mv(fe, "top", "top"), K = Z ? Z.scrollTop : void 0;
        Ni !== s && (k = u[I], ro = !1, Tl = !$ && p.invertSwap || B), M = ox(r, s, u, v, $ ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, Tl, Ni === s);
        var pe;
        if (M !== 0) {
          var ge = jn(fe);
          do
            ge -= M, pe = pt.children[ge];
          while (pe && (De(pe, "display") === "none" || pe === Re));
        }
        if (M === 0 || pe === s)
          return A(!1);
        Ni = s, no = M;
        var be = s.nextElementSibling, U = !1;
        U = M === 1;
        var ne = Dl(ot, i, fe, l, s, u, r, U);
        if (ne !== !1)
          return (ne === 1 || ne === -1) && (U = ne === 1), Md = !0, setTimeout(ax, 30), T(), U && !be ? i.appendChild(fe) : s.parentNode.insertBefore(fe, U ? be : s), Z && N0(Z, 0, K - Z.scrollTop), pt = fe.parentNode, k !== void 0 && !Tl && (fu = Math.abs(k - Et(s)[I])), D(), A(!0);
      }
      if (i.contains(fe))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ze(document, "mousemove", this._onTouchMove), Ze(document, "touchmove", this._onTouchMove), Ze(document, "pointermove", this._onTouchMove), Ze(document, "dragover", Ta), Ze(document, "mousemove", Ta), Ze(document, "touchmove", Ta);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Ze(r, "mouseup", this._onDrop), Ze(r, "touchend", this._onDrop), Ze(r, "pointerup", this._onDrop), Ze(r, "pointercancel", this._onDrop), Ze(r, "touchcancel", this._onDrop), Ze(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (yn = jn(fe), ea = jn(fe, s.draggable), rn("drop", this, {
      evt: r
    }), pt = fe && fe.parentNode, yn = jn(fe), ea = jn(fe, s.draggable), Me.eventCanceled) {
      this._nulling();
      return;
    }
    ki = !1, Tl = !1, ro = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), kd(this.cloneId), kd(this._dragStartId), this.nativeDraggable && (Ze(document, "drop", this), Ze(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ws && De(document.body, "user-select", ""), De(fe, "transform", ""), r && ($s && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Re && Re.parentNode && Re.parentNode.removeChild(Re), (ot === pt || Lt && Lt.lastPutMode !== "clone") && ct && ct.parentNode && ct.parentNode.removeChild(ct), fe && (this.nativeDraggable && Ze(fe, "dragend", this), od(fe), fe.style["will-change"] = "", $s && !ki && vn(fe, Lt ? Lt.options.ghostClass : this.options.ghostClass, !1), vn(fe, this.options.chosenClass, !1), Yt({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), ot !== pt ? (yn >= 0 && (Yt({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: ot,
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
      fromEl: ot,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Lt && Lt.save()) : yn !== ji && yn >= 0 && (Yt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Me.active && ((yn == null || yn === -1) && (yn = ji, ea = to), Yt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    rn("nulling", this), ot = fe = pt = Re = Oa = ct = cu = ta = Na = Un = $s = yn = ea = ji = to = Ni = no = Lt = Nl = Me.dragged = Me.ghost = Me.clone = Me.active = null, _u.forEach(function(r) {
      r.checked = !0;
    }), _u.length = ad = id = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        fe && (this._onDragOver(r), rx(r));
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
    for (var r = [], i, s = this.el.children, l = 0, u = s.length, f = this.options; l < u; l++)
      i = s[l], qn(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || ux(i));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, i) {
    var s = {}, l = this.el;
    this.toArray().forEach(function(u, f) {
      var p = l.children[f];
      qn(p, this.options.draggable, l, !1) && (s[u] = p);
    }, this), i && this.captureAnimationState(), r.forEach(function(u) {
      s[u] && (l.removeChild(s[u]), l.appendChild(s[u]));
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
    return qn(r, i || this.options.draggable, this.el, !1);
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
    var l = lo.modifyOption(this, r, i);
    typeof l < "u" ? s[r] = l : s[r] = i, r === "group" && k0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    rn("destroy", this);
    var r = this.el;
    r[sn] = null, Ze(r, "mousedown", this._onTapStart), Ze(r, "touchstart", this._onTapStart), Ze(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ze(r, "dragover", this), Ze(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), bu.splice(bu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ta) {
      if (rn("hideClone", this), Me.eventCanceled) return;
      De(ct, "display", "none"), this.options.removeCloneOnHide && ct.parentNode && ct.parentNode.removeChild(ct), ta = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ta) {
      if (rn("showClone", this), Me.eventCanceled) return;
      fe.parentNode == ot && !this.options.group.revertClone ? ot.insertBefore(ct, fe) : Oa ? ot.insertBefore(ct, Oa) : ot.appendChild(ct), this.options.group.revertClone && this.animate(fe, ct), De(ct, "display", ""), ta = !1;
    }
  }
};
function rx(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Dl(t, r, i, s, l, u, f, p) {
  var h, m = t[sn], y = m.options.onMove, _;
  return window.CustomEvent && !Nr && !oo ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = i, h.draggedRect = s, h.related = l || r, h.relatedRect = u || Et(r), h.willInsertAfter = p, h.originalEvent = f, t.dispatchEvent(h), y && (_ = y.call(m, h, f)), _;
}
function od(t) {
  t.draggable = !1;
}
function ax() {
  Md = !1;
}
function ix(t, r, i) {
  var s = Et(Pi(i.el, 0, i.options, !0)), l = O0(i.el, i.options, Re), u = 10;
  return r ? t.clientX < l.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < l.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function sx(t, r, i) {
  var s = Et(th(i.el, i.options.draggable)), l = O0(i.el, i.options, Re), u = 10;
  return r ? t.clientX > l.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > l.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function ox(t, r, i, s, l, u, f, p) {
  var h = s ? t.clientY : t.clientX, m = s ? i.height : i.width, y = s ? i.top : i.left, _ = s ? i.bottom : i.right, b = !1;
  if (!f) {
    if (p && fu < m * l) {
      if (!ro && (no === 1 ? h > y + m * u / 2 : h < _ - m * u / 2) && (ro = !0), ro)
        b = !0;
      else if (no === 1 ? h < y + fu : h > _ - fu)
        return -no;
    } else if (h > y + m * (1 - l) / 2 && h < _ - m * (1 - l) / 2)
      return lx(r);
  }
  return b = b || f, b && (h < y + m * u / 2 || h > _ - m * u / 2) ? h > y + m / 2 ? 1 : -1 : 0;
}
function lx(t) {
  return jn(fe) < jn(t) ? 1 : -1;
}
function ux(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function cx(t) {
  _u.length = 0;
  for (var r = t.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && _u.push(s);
  }
}
function du(t) {
  return setTimeout(t, 0);
}
function kd(t) {
  return clearTimeout(t);
}
Du && Ge(document, "touchmove", function(t) {
  (Me.active || ki) && t.cancelable && t.preventDefault();
});
Me.utils = {
  on: Ge,
  off: Ze,
  css: De,
  find: w0,
  is: function(r, i) {
    return !!qn(r, i, r, !1);
  },
  extend: VS,
  throttle: A0,
  closest: qn,
  toggleClass: vn,
  clone: T0,
  index: jn,
  nextTick: du,
  cancelNextTick: kd,
  detectDirection: M0,
  getChild: Pi,
  expando: sn
};
Me.get = function(t) {
  return t[sn];
};
Me.mount = function() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Me.utils = nr(nr({}, Me.utils), s.utils)), lo.mount(s);
  });
};
Me.create = function(t, r) {
  return new Me(t, r);
};
Me.version = ZS;
var xt = [], Qs, jd, Rd = !1, ld, ud, Su, Ks;
function fx() {
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
      this.sortable.nativeDraggable ? Ge(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ge(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Ge(document, "touchmove", this._handleFallbackAutoScroll) : Ge(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ze(document, "dragover", this._handleAutoScroll) : (Ze(document, "pointermove", this._handleFallbackAutoScroll), Ze(document, "touchmove", this._handleFallbackAutoScroll), Ze(document, "mousemove", this._handleFallbackAutoScroll)), Lv(), hu(), YS();
    },
    nulling: function() {
      Su = jd = Qs = Rd = Ks = ld = ud = null, xt.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var l = this, u = (i.touches ? i.touches[0] : i).clientX, f = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, f);
      if (Su = i, s || this.options.forceAutoScrollFallback || oo || Nr || Ws) {
        cd(i, this.options, p, s);
        var h = na(p, !0);
        Rd && (!Ks || u !== ld || f !== ud) && (Ks && Lv(), Ks = setInterval(function() {
          var m = na(document.elementFromPoint(u, f), !0);
          m !== h && (h = m, hu()), cd(i, l.options, m, s);
        }, 10), ld = u, ud = f);
      } else {
        if (!this.options.bubbleScroll || na(p, !0) === tr()) {
          hu();
          return;
        }
        cd(i, this.options, na(p, !1), !1);
      }
    }
  }, Ar(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function hu() {
  xt.forEach(function(t) {
    clearInterval(t.pid);
  }), xt = [];
}
function Lv() {
  clearInterval(Ks);
}
var cd = A0(function(t, r, i, s) {
  if (r.scroll) {
    var l = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = tr(), m = !1, y;
    jd !== i && (jd = i, hu(), Qs = r.scroll, y = r.scrollFn, Qs === !0 && (Qs = na(i, !0)));
    var _ = 0, b = Qs;
    do {
      var v = b, d = Et(v), S = d.top, E = d.bottom, T = d.left, A = d.right, D = d.width, C = d.height, N = void 0, M = void 0, k = v.scrollWidth, B = v.scrollHeight, $ = De(v), I = v.scrollLeft, Z = v.scrollTop;
      v === h ? (N = D < k && ($.overflowX === "auto" || $.overflowX === "scroll" || $.overflowX === "visible"), M = C < B && ($.overflowY === "auto" || $.overflowY === "scroll" || $.overflowY === "visible")) : (N = D < k && ($.overflowX === "auto" || $.overflowX === "scroll"), M = C < B && ($.overflowY === "auto" || $.overflowY === "scroll"));
      var K = N && (Math.abs(A - l) <= f && I + D < k) - (Math.abs(T - l) <= f && !!I), pe = M && (Math.abs(E - u) <= f && Z + C < B) - (Math.abs(S - u) <= f && !!Z);
      if (!xt[_])
        for (var ge = 0; ge <= _; ge++)
          xt[ge] || (xt[ge] = {});
      (xt[_].vx != K || xt[_].vy != pe || xt[_].el !== v) && (xt[_].el = v, xt[_].vx = K, xt[_].vy = pe, clearInterval(xt[_].pid), (K != 0 || pe != 0) && (m = !0, xt[_].pid = setInterval((function() {
        s && this.layer === 0 && Me.active._onTouchMove(Su);
        var be = xt[this.layer].vy ? xt[this.layer].vy * p : 0, U = xt[this.layer].vx ? xt[this.layer].vx * p : 0;
        typeof y == "function" && y.call(Me.dragged.parentNode[sn], U, be, t, Su, xt[this.layer].el) !== "continue" || N0(xt[this.layer].el, U, be);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && b !== h && (b = na(b, !1)));
    Rd = m;
  }
}, 30), z0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, l = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (i) {
    var m = s || u;
    p();
    var y = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, _ = document.elementFromPoint(y.clientX, y.clientY);
    h(), m && !m.el.contains(_) && (f("spill"), this.onSpill({
      dragEl: l,
      putSortable: s
    }));
  }
};
function nh() {
}
nh.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var i = r.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var l = Pi(this.sortable.el, this.startIndex, this.options);
    l ? this.sortable.el.insertBefore(i, l) : this.sortable.el.appendChild(i), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: z0
};
Ar(nh, {
  pluginName: "revertOnSpill"
});
function rh() {
}
rh.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, l = s || this.sortable;
    l.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), l.animateAll();
  },
  drop: z0
};
Ar(rh, {
  pluginName: "removeOnSpill"
});
Me.mount(new fx());
Me.mount(rh, nh);
async function dx({
  entry: t,
  selectedWorldName: r,
  skipSave: i = !1,
  skipReload: s = !1,
  operation: l = "auto"
}) {
  const u = SillyTavern.getContext(), f = await u.loadWorldInfo(r);
  if (!f)
    throw new Error("Failed to load world info");
  const p = Object.values(f.entries), h = p.length > 0 ? p[p.length - 1] : void 0;
  let m;
  if (l === "update" || l === "auto") {
    const _ = Object.values(f.entries).find((b) => b.uid === t.uid);
    if (_)
      (l === "auto" || l === "update") && (m = _);
    else if (l === "update")
      throw new Error("Entry not found for update operation");
  }
  const y = m ? "update" : "add";
  if (!m) {
    if (m = LS(r, f), !m)
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
const zd = `=======

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

=======`, Ld = `{{#if characters}}
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
{{/if}}`, hx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, px = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, mx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, ah = "{{activeFormatInstructions}}", L0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, I0 = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, ao = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, gx = `## User's Persona Description
name: {{user}}
{{persona}}`, ih = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, vx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", yx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML structure in a markdown code block (```xml\\n...\\n```).\n2.  Every element MUST be nested inside a single top-level <root> element. XML permits only one root node.\n3.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n4.  The XML inside the code block MUST be well-formed. Escape &, < and > inside text as &amp;, &lt; and &gt;.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n<root>\n{{example_response}}\n</root>\n```", bx = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, sh = "You are a creative writing assistant helping brainstorm and design a character. Engage in freeform discussion about character concepts, personality traits, backstory ideas, world-building, and narrative design. Be collaborative, offer suggestions, and help refine ideas through conversation.", P0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", _x = P0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Sx = "[" + P0 + "][" + _x + "]*", xx = new RegExp("^" + Sx + "$");
function B0(t, r) {
  const i = [];
  let s = r.exec(t);
  for (; s; ) {
    const l = [];
    l.startIndex = r.lastIndex - s[0].length;
    const u = s.length;
    for (let f = 0; f < u; f++)
      l.push(s[f]);
    i.push(l), s = r.exec(t);
  }
  return i;
}
const oh = function(t) {
  const r = xx.exec(t);
  return !(r === null || typeof r > "u");
};
function Ex(t) {
  return typeof t < "u";
}
const Cx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function U0(t, r) {
  r = Object.assign({}, Cx, r);
  const i = [];
  let s = !1, l = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Pv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = Bv(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let h = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          h += t[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !kx(h)) {
          let _;
          return h.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + h + "' is an invalid name.", bt("InvalidTag", _, Xt(t, u));
        }
        const m = Nx(t, u);
        if (m === !1)
          return bt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Xt(t, u));
        let y = m.value;
        if (u = m.index, y[y.length - 1] === "/") {
          const _ = u - y.length;
          y = y.substring(0, y.length - 1);
          const b = Uv(y, r);
          if (b === !0)
            s = !0;
          else
            return bt(b.err.code, b.err.msg, Xt(t, _ + b.err.line));
        } else if (p)
          if (m.tagClosed) {
            if (y.trim().length > 0)
              return bt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Xt(t, f));
            if (i.length === 0)
              return bt("InvalidTag", "Closing tag '" + h + "' has not been opened.", Xt(t, f));
            {
              const _ = i.pop();
              if (h !== _.tagName) {
                let b = Xt(t, _.tagStartPos);
                return bt(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + b.line + ", col " + b.col + ") instead of closing tag '" + h + "'.",
                  Xt(t, f)
                );
              }
              i.length == 0 && (l = !0);
            }
          } else return bt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Xt(t, u));
        else {
          const _ = Uv(y, r);
          if (_ !== !0)
            return bt(_.err.code, _.err.msg, Xt(t, u - y.length + _.err.line));
          if (l === !0)
            return bt("InvalidXml", "Multiple possible root nodes found.", Xt(t, u));
          r.unpairedTags.indexOf(h) !== -1 || i.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = Bv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Pv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = Dx(t, u);
            if (_ == -1)
              return bt("InvalidChar", "char '&' is not expected.", Xt(t, u));
            u = _;
          } else if (l === !0 && !Iv(t[u]))
            return bt("InvalidXml", "Extra text at the end", Xt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (Iv(t[u]))
        continue;
      return bt("InvalidChar", "char '" + t[u] + "' is not expected.", Xt(t, u));
    }
  if (s) {
    if (i.length == 1)
      return bt("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Xt(t, i[0].tagStartPos));
    if (i.length > 0)
      return bt("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return bt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Iv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Pv(t, r) {
  const i = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(i, r - i);
      if (r > 5 && s === "xml")
        return bt("InvalidXml", "XML declaration allowed only at the start of the document.", Xt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Bv(t, r) {
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
const wx = '"', Ax = "'";
function Nx(t, r) {
  let i = "", s = "", l = !1;
  for (; r < t.length; r++) {
    if (t[r] === wx || t[r] === Ax)
      s === "" ? s = t[r] : s !== t[r] || (s = "");
    else if (t[r] === ">" && s === "") {
      l = !0;
      break;
    }
    i += t[r];
  }
  return s !== "" ? !1 : {
    value: i,
    index: r,
    tagClosed: l
  };
}
const Tx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Uv(t, r) {
  const i = B0(t, Tx), s = {};
  for (let l = 0; l < i.length; l++) {
    if (i[l][1].length === 0)
      return bt("InvalidAttr", "Attribute '" + i[l][2] + "' has no space in starting.", Hs(i[l]));
    if (i[l][3] !== void 0 && i[l][4] === void 0)
      return bt("InvalidAttr", "Attribute '" + i[l][2] + "' is without value.", Hs(i[l]));
    if (i[l][3] === void 0 && !r.allowBooleanAttributes)
      return bt("InvalidAttr", "boolean attribute '" + i[l][2] + "' is not allowed.", Hs(i[l]));
    const u = i[l][2];
    if (!Mx(u))
      return bt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Hs(i[l]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return bt("InvalidAttr", "Attribute '" + u + "' is repeated.", Hs(i[l]));
  }
  return !0;
}
function Ox(t, r) {
  let i = /\d/;
  for (t[r] === "x" && (r++, i = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(i))
      break;
  }
  return -1;
}
function Dx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, Ox(t, r);
  let i = 0;
  for (; r < t.length; r++, i++)
    if (!(t[r].match(/\w/) && i < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function bt(t, r, i) {
  return {
    err: {
      code: t,
      msg: r,
      line: i.line || i,
      col: i.col
    }
  };
}
function Mx(t) {
  return oh(t);
}
function kx(t) {
  return oh(t);
}
function Xt(t, r) {
  const i = t.substring(0, r).split(/\r?\n/);
  return {
    line: i.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: i[i.length - 1].length + 1
  };
}
function Hs(t) {
  return t.startIndex + t[1].length;
}
const jx = {
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
}, Rx = function(t) {
  return Object.assign({}, jx, t);
};
class qs {
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
function zx(t, r) {
  const i = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, l = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (l && Px(t, r)) {
          r += 7;
          let p, h;
          [p, h, r] = Lx(t, r + 1), h.indexOf("&") === -1 && (i[qx(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (l && Bx(t, r)) r += 8;
        else if (l && Ux(t, r)) r += 8;
        else if (l && Hx(t, r)) r += 9;
        else if (Ix) u = !0;
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
  return { entities: i, i: r };
}
function Lx(t, r) {
  let i = "";
  for (; r < t.length && t[r] !== "'" && t[r] !== '"'; r++)
    i += t[r];
  if (i = i.trim(), i.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = t[r++];
  let l = "";
  for (; r < t.length && t[r] !== s; r++)
    l += t[r];
  return [i, l, r];
}
function Ix(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function Px(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Bx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Ux(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function Hx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function qx(t) {
  if (oh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Fx = /^[-+]?0x[a-fA-F0-9]+$/, Zx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Gx = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Vx(t, r = {}) {
  if (r = Object.assign({}, Gx, r), !t || typeof t != "string") return t;
  let i = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return t;
  if (t === "0") return 0;
  if (r.hex && Fx.test(i))
    return Xx(i, 16);
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
    const s = Zx.exec(i);
    if (s) {
      const l = s[1], u = s[2];
      let f = Yx(s[3]);
      if (!r.leadingZeros && u.length > 0 && l && i[2] !== ".") return t;
      if (!r.leadingZeros && u.length > 0 && !l && i[1] !== ".") return t;
      if (r.leadingZeros && u === t) return 0;
      {
        const p = Number(i), h = "" + p;
        return h.search(/[eE]/) !== -1 ? r.eNotation ? p : t : i.indexOf(".") !== -1 ? h === "0" && f === "" || h === f || l && h === "-" + f ? p : t : u ? f === h || l + f === h ? p : t : i === h || i === l + h ? p : t;
      }
    } else
      return t;
  }
}
function Yx(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function Xx(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function $x(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const i of t)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class Qx {
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
    }, this.addExternalEntities = Kx, this.parseXml = nE, this.parseTextData = Jx, this.resolveNameSpace = Wx, this.buildAttributesMap = tE, this.isItStopNode = sE, this.replaceEntitiesValue = aE, this.readStopNodeData = lE, this.saveTextToParentTag = iE, this.addChild = rE, this.ignoreAttributesFn = $x(this.options.ignoreAttributes);
  }
}
function Kx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function Jx(t, r, i, s, l, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, i, l, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? Pd(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Pd(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function Wx(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), i = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = i + r[1]);
  }
  return t;
}
const eE = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function tE(t, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = B0(t, eE), l = s.length, u = {};
    for (let f = 0; f < l; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], m = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (m = this.options.transformAttributeName(m)), m === "__proto__" && (m = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const y = this.options.attributeValueProcessor(p, h, r);
          y == null ? u[m] = h : typeof y != typeof h || y !== h ? u[m] = y : u[m] = Pd(
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
const nE = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new qs("!xml");
  let i = r, s = "", l = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const p = ka(t, ">", u, "Closing Tag is not closed.");
        let h = t.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const _ = h.indexOf(":");
          _ !== -1 && (h = h.substr(_ + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && (s = this.saveTextToParentTag(s, i, l));
        const m = l.substring(l.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let y = 0;
        m && this.options.unpairedTags.indexOf(m) !== -1 ? (y = l.lastIndexOf(".", l.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = l.lastIndexOf("."), l = l.substring(0, y), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = Id(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, l), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new qs(p.tagName);
          h.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (h[":@"] = this.buildAttributesMap(p.tagExp, l, p.tagName)), this.addChild(i, h, l);
        }
        u = p.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const p = ka(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = t.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, i, l), i.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = p;
      } else if (t.substr(u + 1, 2) === "!D") {
        const p = zx(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = ka(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, l);
        let m = this.parseTextData(h, i.tagname, l, !0, !1, !0, !0);
        m == null && (m = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : i.add(this.options.textNodeName, m), u = p + 2;
      } else {
        let p = Id(t, u, this.options.removeNSPrefix), h = p.tagName;
        const m = p.rawTagName;
        let y = p.tagExp, _ = p.attrExpPresent, b = p.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, l, !1));
        const v = i;
        if (v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (i = this.tagsNodeStack.pop(), l = l.substring(0, l.lastIndexOf("."))), h !== r.tagname && (l += l ? "." + h : h), this.isItStopNode(this.options.stopNodes, l, h)) {
          let d = "";
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), l = l.substr(0, l.length - 1), y = h) : y = y.substr(0, y.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = p.closeIndex;
          else {
            const E = this.readStopNodeData(t, m, b + 1);
            if (!E) throw new Error(`Unexpected end of ${m}`);
            u = E.i, d = E.tagContent;
          }
          const S = new qs(h);
          h !== y && _ && (S[":@"] = this.buildAttributesMap(y, l, h)), d && (d = this.parseTextData(d, h, l, !0, _, !0, !0)), l = l.substr(0, l.lastIndexOf(".")), S.add(this.options.textNodeName, d), this.addChild(i, S, l);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), l = l.substr(0, l.length - 1), y = h) : y = y.substr(0, y.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const d = new qs(h);
            h !== y && _ && (d[":@"] = this.buildAttributesMap(y, l, h)), this.addChild(i, d, l), l = l.substr(0, l.lastIndexOf("."));
          } else {
            const d = new qs(h);
            this.tagsNodeStack.push(i), h !== y && _ && (d[":@"] = this.buildAttributesMap(y, l, h)), this.addChild(i, d, l), i = d;
          }
          s = "", u = b;
        }
      }
    else
      s += t[u];
  return r.child;
};
function rE(t, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const aE = function(t) {
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
function iE(t, r, i, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function sE(t, r, i) {
  const s = "*." + i;
  for (const l in t) {
    const u = t[l];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function oE(t, r, i = ">") {
  let s, l = "";
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
function ka(t, r, i, s) {
  const l = t.indexOf(r, i);
  if (l === -1)
    throw new Error(s);
  return l + r.length - 1;
}
function Id(t, r, i, s = ">") {
  const l = oE(t, r + 1, s);
  if (!l) return;
  let u = l.data;
  const f = l.index, p = u.search(/\s/);
  let h = u, m = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const y = h;
  if (i) {
    const _ = h.indexOf(":");
    _ !== -1 && (h = h.substr(_ + 1), m = h !== l.data.substr(_ + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: m,
    rawTagName: y
  };
}
function lE(t, r, i) {
  const s = i;
  let l = 1;
  for (; i < t.length; i++)
    if (t[i] === "<")
      if (t[i + 1] === "/") {
        const u = ka(t, ">", i, `${r} is not closed`);
        if (t.substring(i + 2, u).trim() === r && (l--, l === 0))
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
        const u = Id(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && l++, i = u.closeIndex);
      }
}
function Pd(t, r, i) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : Vx(t, i);
  } else
    return Ex(t) ? t : "";
}
function uE(t, r) {
  return H0(t, r);
}
function H0(t, r, i) {
  let s;
  const l = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = cE(f);
    let h = "";
    if (i === void 0 ? h = p : h = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let m = H0(f[p], r, h);
        const y = dE(m, r);
        f[":@"] ? fE(m, f[":@"], h, r) : Object.keys(m).length === 1 && m[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? m = m[r.textNodeName] : Object.keys(m).length === 0 && (r.alwaysCreateTextNode ? m[r.textNodeName] = "" : m = ""), l[p] !== void 0 && l.hasOwnProperty(p) ? (Array.isArray(l[p]) || (l[p] = [l[p]]), l[p].push(m)) : r.isArray(p, h, y) ? l[p] = [m] : l[p] = m;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (l[r.textNodeName] = s) : s !== void 0 && (l[r.textNodeName] = s), l;
}
function cE(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function fE(t, r, i, s) {
  if (r) {
    const l = Object.keys(r), u = l.length;
    for (let f = 0; f < u; f++) {
      const p = l[f];
      s.isArray(p, i + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function dE(t, r) {
  const { textNodeName: i } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[i] || typeof t[i] == "boolean" || t[i] === 0));
}
class hE {
  constructor(r) {
    this.externalEntities = {}, this.options = Rx(r);
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
      const u = U0(r, i);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new Qx(this.options);
    s.addExternalEntities(this.externalEntities);
    const l = s.parseXml(r);
    return this.options.preserveOrder || l === void 0 ? l : uE(l, this.options);
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
const pE = {
  validate: U0
}, mE = new hE({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function Bd(t, r) {
  if (!(!r || !t || !r.properties))
    for (const i in r.properties) {
      if (!t.hasOwnProperty(i)) continue;
      const s = r.properties[i];
      let l = t[i];
      s.type === "array" && !Array.isArray(l) && (l = [l], t[i] = l), s.type === "object" && typeof l == "object" && l !== null ? Bd(l, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(l) && l.forEach((u) => Bd(u, s.items)), s.type === "string" && typeof l != "string" ? t[i] = String(l) : s.type === "array" && s.items?.type === "string" && Array.isArray(l) && (t[i] = l.map(String));
    }
}
const gE = /^```(?:\w+)?[ \t]*\r?\n?((?:(?!```)[\s\S])*?)\r?\n?```$/;
function vE(t) {
  const r = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
  let i, s = null;
  for (; (i = r.exec(t)) !== null; )
    s = i[1].trim();
  return s;
}
function ja(t) {
  if (t == null)
    return "";
  if (typeof t != "object")
    return String(t).trim();
  if ("#text" in t)
    return ja(t["#text"]);
  if ("response" in t)
    return ja(t.response);
  if ("message" in t)
    return ja(t.message);
  const r = Object.values(t)[0];
  return ja(r);
}
function q0(t, r, i = {}) {
  const s = t.trim();
  if (r === "none") {
    const f = s.match(gE);
    return f ? f[1].trim() : s;
  }
  let u = vE(t) ?? s;
  try {
    switch (r) {
      case "xml": {
        if (i.schema) {
          const p = pE.validate(u);
          if (p !== !0)
            throw new Error(`Model response is not valid XML: ${p.err.msg}`);
        }
        let f = mE.parse(u);
        if (f.root)
          f = f.root;
        else if (!i.schema && f.response !== void 0)
          return ja(f.response);
        return i.schema ? (Bd(f, i.schema), f) : ja(f);
      }
      case "json": {
        const f = JSON.parse(u);
        return i.schema ? f : ja(f);
      }
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (f) {
    if (!i.schema) {
      const p = u.match(/<response>([\s\S]*)/);
      if (p) return p[1].replace(/<\/[\s\S]*$/, "").trim();
      const h = u.match(/"response":\s*"([\s\S]*)/);
      if (h) return h[1].replace(/"\s*}\s*$/, "");
    }
    throw console.error(`Error parsing response in format '${r}':`, f), console.error("Raw content received:", t), r === "xml" ? f.message.startsWith("Model response is not valid XML:") ? f : new Error(`Model response is not valid XML: ${f.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${f.message}`);
  }
}
function Hv(t, r) {
  const i = t.trim();
  switch (r) {
    case "xml":
      return `<response>${i}`;
    case "json":
      return `{
  "response": ${JSON.stringify(i).slice(0, -1)}`;
    case "none":
      return i;
    default:
      throw new Error(`Unsupported format specified: ${r}`);
  }
}
var Ml = { exports: {} }, kl = { exports: {} }, Hn = {}, an = {}, qv;
function on() {
  if (qv) return an;
  qv = 1, an.__esModule = !0, an.extend = l, an.indexOf = h, an.escapeExpression = m, an.isEmpty = y, an.createFrame = _, an.blockParams = b, an.appendContextPath = v;
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
  function l(d) {
    for (var S = 1; S < arguments.length; S++)
      for (var E in arguments[S])
        Object.prototype.hasOwnProperty.call(arguments[S], E) && (d[E] = arguments[S][E]);
    return d;
  }
  var u = Object.prototype.toString;
  an.toString = u;
  var f = function(S) {
    return typeof S == "function";
  };
  f(/x/) && (an.isFunction = f = function(d) {
    return typeof d == "function" && u.call(d) === "[object Function]";
  }), an.isFunction = f;
  var p = Array.isArray || function(d) {
    return d && typeof d == "object" ? u.call(d) === "[object Array]" : !1;
  };
  an.isArray = p;
  function h(d, S) {
    for (var E = 0, T = d.length; E < T; E++)
      if (d[E] === S)
        return E;
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
    var S = l({}, d);
    return S._parent = d, S;
  }
  function b(d, S) {
    return d.path = S, d;
  }
  function v(d, S) {
    return (d ? d + "." : "") + S;
  }
  return an;
}
var jl = { exports: {} }, Fv;
function Gn() {
  return Fv || (Fv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(l, u) {
      var f = u && u.loc, p = void 0, h = void 0, m = void 0, y = void 0;
      f && (p = f.start.line, h = f.end.line, m = f.start.column, y = f.end.column, l += " - " + p + ":" + m);
      for (var _ = Error.prototype.constructor.call(this, l), b = 0; b < i.length; b++)
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
  })(jl, jl.exports)), jl.exports;
}
var Fs = {}, Rl = { exports: {} }, Zv;
function yE() {
  return Zv || (Zv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = on();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(l, u) {
        var f = u.inverse, p = u.fn;
        if (l === !0)
          return p(this);
        if (l === !1 || l == null)
          return f(this);
        if (i.isArray(l))
          return l.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(l, u)) : f(this);
        if (u.data && u.ids) {
          var h = i.createFrame(u.data);
          h.contextPath = i.appendContextPath(u.data.contextPath, u.name), u = { data: h };
        }
        return p(l, u);
      });
    }, t.exports = r.default;
  })(Rl, Rl.exports)), Rl.exports;
}
var zl = { exports: {} }, Gv;
function bE() {
  return Gv || (Gv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = on(), l = Gn(), u = i(l);
    r.default = function(f) {
      f.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var m = h.fn, y = h.inverse, _ = 0, b = "", v = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (v = s.createFrame(h.data));
        function S(C, N, M) {
          v && (v.key = C, v.index = N, v.first = N === 0, v.last = !!M, d && (v.contextPath = d + C)), b = b + m(p[C], {
            data: v,
            blockParams: s.blockParams([p[C], C], [d + C, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var E = p.length; _ < E; _++)
              _ in p && S(_, _, _ === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var T = [], A = p[Symbol.iterator](), D = A.next(); !D.done; D = A.next())
              T.push(D.value);
            p = T;
            for (var E = p.length; _ < E; _++)
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
  })(zl, zl.exports)), zl.exports;
}
var Ll = { exports: {} }, Vv;
function _E() {
  return Vv || (Vv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = Gn(), l = i(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new l.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Ll, Ll.exports)), Ll.exports;
}
var Il = { exports: {} }, Yv;
function SE() {
  return Yv || (Yv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = on(), l = Gn(), u = i(l);
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
  })(Il, Il.exports)), Il.exports;
}
var Pl = { exports: {} }, Xv;
function xE() {
  return Xv || (Xv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var s = [void 0], l = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        l.hash.level != null ? f = l.hash.level : l.data && l.data.level != null && (f = l.data.level), s[0] = f, i.log.apply(i, s);
      });
    }, t.exports = r.default;
  })(Pl, Pl.exports)), Pl.exports;
}
var Bl = { exports: {} }, $v;
function EE() {
  return $v || ($v = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, l, u) {
        return s && u.lookupProperty(s, l);
      });
    }, t.exports = r.default;
  })(Bl, Bl.exports)), Bl.exports;
}
var Ul = { exports: {} }, Qv;
function CE() {
  return Qv || (Qv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = on(), l = Gn(), u = i(l);
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
  })(Ul, Ul.exports)), Ul.exports;
}
var Kv;
function F0() {
  if (Kv) return Fs;
  Kv = 1, Fs.__esModule = !0, Fs.registerDefaultHelpers = S, Fs.moveHelperToHooks = E;
  function t(T) {
    return T && T.__esModule ? T : { default: T };
  }
  var r = yE(), i = t(r), s = bE(), l = t(s), u = _E(), f = t(u), p = SE(), h = t(p), m = xE(), y = t(m), _ = EE(), b = t(_), v = CE(), d = t(v);
  function S(T) {
    i.default(T), l.default(T), f.default(T), h.default(T), y.default(T), b.default(T), d.default(T);
  }
  function E(T, A, D) {
    T.helpers[A] && (T.hooks[A] = T.helpers[A], D || delete T.helpers[A]);
  }
  return Fs;
}
var Hl = {}, ql = { exports: {} }, Jv;
function wE() {
  return Jv || (Jv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = on();
    r.default = function(s) {
      s.registerDecorator("inline", function(l, u, f, p) {
        var h = l;
        return u.partials || (u.partials = {}, h = function(m, y) {
          var _ = f.partials;
          f.partials = i.extend({}, _, u.partials);
          var b = l(m, y);
          return f.partials = _, b;
        }), u.partials[p.args[0]] = p.fn, h;
      });
    }, t.exports = r.default;
  })(ql, ql.exports)), ql.exports;
}
var Wv;
function AE() {
  if (Wv) return Hl;
  Wv = 1, Hl.__esModule = !0, Hl.registerDefaultDecorators = s;
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var r = wE(), i = t(r);
  function s(l) {
    i.default(l);
  }
  return Hl;
}
var Fl = { exports: {} }, ey;
function Z0() {
  return ey || (ey = 1, (function(t, r) {
    r.__esModule = !0;
    var i = on(), s = {
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
  })(Fl, Fl.exports)), Fl.exports;
}
var Ti = {}, Zl = {}, ty;
function NE() {
  if (ty) return Zl;
  ty = 1, Zl.__esModule = !0, Zl.createNewLookupObject = r;
  var t = on();
  function r() {
    for (var i = arguments.length, s = Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Zl;
}
var ny;
function G0() {
  if (ny) return Ti;
  ny = 1, Ti.__esModule = !0, Ti.createProtoAccessControl = u, Ti.resultIsAllowed = f, Ti.resetLoggedProperties = m;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = NE(), i = Z0(), s = t(i), l = /* @__PURE__ */ Object.create(null);
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
    l[y] !== !0 && (l[y] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + y + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function m() {
    Object.keys(l).forEach(function(y) {
      delete l[y];
    });
  }
  return Ti;
}
var ry;
function lh() {
  if (ry) return Hn;
  ry = 1, Hn.__esModule = !0, Hn.HandlebarsEnvironment = d;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var r = on(), i = Gn(), s = t(i), l = F0(), u = AE(), f = Z0(), p = t(f), h = G0(), m = "4.7.8";
  Hn.VERSION = m;
  var y = 8;
  Hn.COMPILER_REVISION = y;
  var _ = 7;
  Hn.LAST_COMPATIBLE_COMPILER_REVISION = _;
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
  Hn.REVISION_CHANGES = b;
  var v = "[object Object]";
  function d(E, T, A) {
    this.helpers = E || {}, this.partials = T || {}, this.decorators = A || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(T, A) {
      if (r.toString.call(T) === v) {
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
      if (r.toString.call(T) === v)
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
      if (r.toString.call(T) === v) {
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
  return Hn.log = S, Hn.createFrame = r.createFrame, Hn.logger = p.default, Hn;
}
var Gl = { exports: {} }, ay;
function TE() {
  return ay || (ay = 1, (function(t, r) {
    r.__esModule = !0;
    function i(s) {
      this.string = s;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, t.exports = r.default;
  })(Gl, Gl.exports)), Gl.exports;
}
var _r = {}, Vl = {}, iy;
function OE() {
  if (iy) return Vl;
  iy = 1, Vl.__esModule = !0, Vl.wrapHelper = t;
  function t(r, i) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(u), r.apply(this, arguments);
    };
    return s;
  }
  return Vl;
}
var sy;
function DE() {
  if (sy) return _r;
  sy = 1, _r.__esModule = !0, _r.checkRevision = y, _r.template = _, _r.wrapProgram = b, _r.resolvePartial = v, _r.invokePartial = d, _r.noop = S;
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
  var i = on(), s = r(i), l = Gn(), u = t(l), f = lh(), p = F0(), h = OE(), m = G0();
  function y(C) {
    var N = C && C[0] || 1, M = f.COMPILER_REVISION;
    if (!(N >= f.LAST_COMPATIBLE_COMPILER_REVISION && N <= f.COMPILER_REVISION))
      if (N < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[M], B = f.REVISION_CHANGES[N];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + B + ").");
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
    function k(I, Z, K) {
      K.hash && (Z = s.extend({}, Z, K.hash), K.ids && (K.ids[0] = !0)), I = N.VM.resolvePartial.call(this, I, Z, K);
      var pe = s.extend({}, K, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), ge = N.VM.invokePartial.call(this, I, Z, pe);
      if (ge == null && N.compile && (K.partials[K.name] = N.compile(I, C.compilerOptions, N), ge = K.partials[K.name](Z, pe)), ge != null) {
        if (K.indent) {
          for (var be = ge.split(`
`), U = 0, ne = be.length; U < ne && !(!be[U] && U + 1 === ne); U++)
            be[U] = K.indent + be[U];
          ge = be.join(`
`);
        }
        return ge;
      } else
        throw new u.default("The partial " + K.name + " could not be compiled when running in runtime-only mode");
    }
    var B = {
      strict: function(Z, K, pe) {
        if (!Z || !(K in Z))
          throw new u.default('"' + K + '" not defined in ' + Z, {
            loc: pe
          });
        return B.lookupProperty(Z, K);
      },
      lookupProperty: function(Z, K) {
        var pe = Z[K];
        if (pe == null || Object.prototype.hasOwnProperty.call(Z, K) || m.resultIsAllowed(pe, B.protoAccessControl, K))
          return pe;
      },
      lookup: function(Z, K) {
        for (var pe = Z.length, ge = 0; ge < pe; ge++) {
          var be = Z[ge] && B.lookupProperty(Z[ge], K);
          if (be != null)
            return Z[ge][K];
        }
      },
      lambda: function(Z, K) {
        return typeof Z == "function" ? Z.call(K) : Z;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: k,
      fn: function(Z) {
        var K = C[Z];
        return K.decorator = C[Z + "_d"], K;
      },
      programs: [],
      program: function(Z, K, pe, ge, be) {
        var U = this.programs[Z], ne = this.fn(Z);
        return K || be || ge || pe ? U = b(this, Z, ne, K, pe, ge, be) : U || (U = this.programs[Z] = b(this, Z, ne)), U;
      },
      data: function(Z, K) {
        for (; Z && K--; )
          Z = Z._parent;
        return Z;
      },
      mergeIfNeeded: function(Z, K) {
        var pe = Z || K;
        return Z && K && Z !== K && (pe = s.extend({}, K, Z)), pe;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: N.VM.noop,
      compilerInfo: C.compiler
    };
    function $(I) {
      var Z = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], K = Z.data;
      $._setup(Z), !Z.partial && C.useData && (K = E(I, K));
      var pe = void 0, ge = C.useBlockParams ? [] : void 0;
      C.useDepths && (Z.depths ? pe = I != Z.depths[0] ? [I].concat(Z.depths) : Z.depths : pe = [I]);
      function be(U) {
        return "" + C.main(B, U, B.helpers, B.partials, K, ge, pe);
      }
      return be = T(C.main, be, B, Z.depths || [], K, ge), be(I, Z);
    }
    return $.isTop = !0, $._setup = function(I) {
      if (I.partial)
        B.protoAccessControl = I.protoAccessControl, B.helpers = I.helpers, B.partials = I.partials, B.decorators = I.decorators, B.hooks = I.hooks;
      else {
        var Z = s.extend({}, N.helpers, I.helpers);
        A(Z, B), B.helpers = Z, C.usePartial && (B.partials = B.mergeIfNeeded(I.partials, N.partials)), (C.usePartial || C.useDecorators) && (B.decorators = s.extend({}, N.decorators, I.decorators)), B.hooks = {}, B.protoAccessControl = m.createProtoAccessControl(I);
        var K = I.allowCallsToHelperMissing || M;
        p.moveHelperToHooks(B, "helperMissing", K), p.moveHelperToHooks(B, "blockHelperMissing", K);
      }
    }, $._child = function(I, Z, K, pe) {
      if (C.useBlockParams && !K)
        throw new u.default("must pass block params");
      if (C.useDepths && !pe)
        throw new u.default("must pass parent depths");
      return b(B, I, C[I], Z, 0, K, pe);
    }, $;
  }
  function b(C, N, M, k, B, $, I) {
    function Z(K) {
      var pe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], ge = I;
      return I && K != I[0] && !(K === C.nullContext && I[0] === null) && (ge = [K].concat(I)), M(C, K, C.helpers, C.partials, pe.data || k, $ && [pe.blockParams].concat($), ge);
    }
    return Z = T(M, Z, C, I, k, $), Z.program = N, Z.depth = I ? I.length : 0, Z.blockParams = B || 0, Z;
  }
  function v(C, N, M) {
    return C ? !C.call && !M.name && (M.name = C, C = M.partials[C]) : M.name === "@partial-block" ? C = M.data["partial-block"] : C = M.partials[M.name], C;
  }
  function d(C, N, M) {
    var k = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var B = void 0;
    if (M.fn && M.fn !== S && (function() {
      M.data = f.createFrame(M.data);
      var $ = M.fn;
      B = M.data["partial-block"] = function(Z) {
        var K = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return K.data = f.createFrame(K.data), K.data["partial-block"] = k, $(Z, K);
      }, $.partials && (M.partials = s.extend({}, M.partials, $.partials));
    })(), C === void 0 && B && (C = B), C === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (C instanceof Function)
      return C(N, M);
  }
  function S() {
    return "";
  }
  function E(C, N) {
    return (!N || !("root" in N)) && (N = N ? f.createFrame(N) : {}, N.root = C), N;
  }
  function T(C, N, M, k, B, $) {
    if (C.decorator) {
      var I = {};
      N = C.decorator(N, I, M, k && k[0], B, $, k), s.extend(N, I);
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
  return _r;
}
var Yl = { exports: {} }, oy;
function V0() {
  return oy || (oy = 1, (function(t, r) {
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
  })(Yl, Yl.exports)), Yl.exports;
}
var ly;
function ME() {
  return ly || (ly = 1, (function(t, r) {
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
    var l = lh(), u = s(l), f = TE(), p = i(f), h = Gn(), m = i(h), y = on(), _ = s(y), b = DE(), v = s(b), d = V0(), S = i(d);
    function E() {
      var A = new u.HandlebarsEnvironment();
      return _.extend(A, u), A.SafeString = p.default, A.Exception = m.default, A.Utils = _, A.escapeExpression = _.escapeExpression, A.VM = v, A.template = function(D) {
        return v.template(D, A);
      }, A;
    }
    var T = E();
    T.create = E, S.default(T), T.default = T, r.default = T, t.exports = r.default;
  })(kl, kl.exports)), kl.exports;
}
var Xl = { exports: {} }, uy;
function Y0() {
  return uy || (uy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = {
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
          return l.parts.length === 1 && !i.helpers.scopedId(l) && !l.depth;
        }
      }
    };
    r.default = i, t.exports = r.default;
  })(Xl, Xl.exports)), Xl.exports;
}
var Oi = {}, $l = { exports: {} }, cy;
function kE() {
  return cy || (cy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(p, h, m, y, _, b, v) {
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
              var S = y.prepareBlock(b[d - 2], b[d - 1], b[d], b[d], !1, this._$), E = y.prepareProgram([S], b[d - 1].loc);
              E.chained = !0, this.$ = { strip: b[d - 2].strip, program: E, chain: !0 };
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
          var h = this, m = [0], y = [null], _ = [], b = this.table, v = "", d = 0, S = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var E = this.lexer.yylloc;
          _.push(E);
          var T = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function A() {
            var pe;
            return pe = h.lexer.lex() || 1, typeof pe != "number" && (pe = h.symbols_[pe] || pe), pe;
          }
          for (var D, C, N, M, k = {}, B, $, I, Z; ; ) {
            if (C = m[m.length - 1], this.defaultActions[C] ? N = this.defaultActions[C] : ((D === null || typeof D > "u") && (D = A()), N = b[C] && b[C][D]), typeof N > "u" || !N.length || !N[0]) {
              var K = "";
              {
                Z = [];
                for (B in b[C]) this.terminals_[B] && B > 2 && Z.push("'" + this.terminals_[B] + "'");
                this.lexer.showPosition ? K = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + Z.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : K = "Parse error on line " + (d + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError(K, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: E, expected: Z });
              }
            }
            if (N[0] instanceof Array && N.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + C + ", token: " + D);
            switch (N[0]) {
              case 1:
                m.push(D), y.push(this.lexer.yytext), _.push(this.lexer.yylloc), m.push(N[1]), D = null, S = this.lexer.yyleng, v = this.lexer.yytext, d = this.lexer.yylineno, E = this.lexer.yylloc;
                break;
              case 2:
                if ($ = this.productions_[N[1]][1], k.$ = y[y.length - $], k._$ = { first_line: _[_.length - ($ || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - ($ || 1)].first_column, last_column: _[_.length - 1].last_column }, T && (k._$.range = [_[_.length - ($ || 1)].range[0], _[_.length - 1].range[1]]), M = this.performAction.call(k, v, S, d, this.yy, N[1], y, _), typeof M < "u")
                  return M;
                $ && (m = m.slice(0, -1 * $ * 2), y = y.slice(0, -1 * $), _ = _.slice(0, -1 * $)), m.push(this.productions_[N[1]][0]), y.push(k.$), _.push(k._$), I = b[m[m.length - 2]][m[m.length - 1]], m.push(I);
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
            for (var v = this._currentRules(), d = 0; d < v.length && (y = this._input.match(this.rules[v[d]]), !(y && (!m || y[0].length > m[0].length) && (m = y, _ = d, !this.options.flex))); d++)
              ;
            return m ? (b = m[0].match(/(?:\r\n?|\n).*/g), b && (this.yylineno += b.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: b ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + m[0].length
            }, this.yytext += m[0], this.match += m[0], this.matches = m, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(m[0].length), this.matched += m[0], h = this.performAction.call(this, this.yy, this, v[_], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
          function b(v, d) {
            return m.yytext = m.yytext.substring(v, m.yyleng - d + v);
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
      s.lexer = l;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    r.default = i, t.exports = r.default;
  })($l, $l.exports)), $l.exports;
}
var Ql = { exports: {} }, Kl = { exports: {} }, fy;
function X0() {
  return fy || (fy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(m) {
      return m && m.__esModule ? m : { default: m };
    }
    var s = Gn(), l = i(s);
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
  })(Kl, Kl.exports)), Kl.exports;
}
var dy;
function jE() {
  return dy || (dy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = X0(), l = i(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new l.default(), u.prototype.Program = function(y) {
      var _ = !this.options.ignoreStandalone, b = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var v = y.body, d = 0, S = v.length; d < S; d++) {
        var E = v[d], T = this.accept(E);
        if (T) {
          var A = f(v, d, b), D = p(v, d, b), C = T.openStandalone && A, N = T.closeStandalone && D, M = T.inlineStandalone && A && D;
          T.close && h(v, d, !0), T.open && m(v, d, !0), _ && M && (h(v, d), m(v, d) && E.type === "PartialStatement" && (E.indent = /([ \t]+$)/.exec(v[d - 1].original)[1])), _ && C && (h((E.program || E.inverse).body), m(v, d)), _ && N && (h(v, d), m((E.inverse || E.program).body));
        }
      }
      return y;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(y) {
      this.accept(y.program), this.accept(y.inverse);
      var _ = y.program || y.inverse, b = y.program && y.inverse, v = b, d = b;
      if (b && b.chained)
        for (v = b.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var S = {
        open: y.openStrip.open,
        close: y.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(_.body),
        closeStandalone: f((v || _).body)
      };
      if (y.openStrip.close && h(_.body, null, !0), b) {
        var E = y.inverseStrip;
        E.open && m(_.body, null, !0), E.close && h(v.body, null, !0), y.closeStrip.open && m(d.body, null, !0), !this.options.ignoreStandalone && f(_.body) && p(v.body) && (m(_.body), h(v.body));
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
      var v = y[_ - 1], d = y[_ - 2];
      if (!v)
        return b;
      if (v.type === "ContentStatement")
        return (d || !b ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(v.original);
    }
    function p(y, _, b) {
      _ === void 0 && (_ = -1);
      var v = y[_ + 1], d = y[_ + 2];
      if (!v)
        return b;
      if (v.type === "ContentStatement")
        return (d || !b ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(v.original);
    }
    function h(y, _, b) {
      var v = y[_ == null ? 0 : _ + 1];
      if (!(!v || v.type !== "ContentStatement" || !b && v.rightStripped)) {
        var d = v.value;
        v.value = v.value.replace(b ? /^\s+/ : /^[ \t]*\r?\n?/, ""), v.rightStripped = v.value !== d;
      }
    }
    function m(y, _, b) {
      var v = y[_ == null ? y.length - 1 : _ - 1];
      if (!(!v || v.type !== "ContentStatement" || !b && v.leftStripped)) {
        var d = v.value;
        return v.value = v.value.replace(b ? /\s+$/ : /[ \t]+$/, ""), v.leftStripped = v.value !== d, v.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Ql, Ql.exports)), Ql.exports;
}
var gn = {}, hy;
function RE() {
  if (hy) return gn;
  hy = 1, gn.__esModule = !0, gn.SourceLocation = l, gn.id = u, gn.stripFlags = f, gn.stripComment = p, gn.preparePath = h, gn.prepareMustache = m, gn.prepareRawBlock = y, gn.prepareBlock = _, gn.prepareProgram = b, gn.preparePartialBlock = v;
  function t(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var r = Gn(), i = t(r);
  function s(d, S) {
    if (S = S.path ? S.path.original : S, d.path.original !== S) {
      var E = { loc: d.path.loc };
      throw new i.default(d.path.original + " doesn't match " + S, E);
    }
  }
  function l(d, S) {
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
  function h(d, S, E) {
    E = this.locInfo(E);
    for (var T = d ? "@" : "", A = [], D = 0, C = 0, N = S.length; C < N; C++) {
      var M = S[C].part, k = S[C].original !== M;
      if (T += (S[C].separator || "") + M, !k && (M === ".." || M === "." || M === "this")) {
        if (A.length > 0)
          throw new i.default("Invalid path: " + T, { loc: E });
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
      loc: E
    };
  }
  function m(d, S, E, T, A, D) {
    var C = T.charAt(3) || T.charAt(2), N = C !== "{" && C !== "&", M = /\*/.test(T);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: d,
      params: S,
      hash: E,
      escaped: N,
      strip: A,
      loc: this.locInfo(D)
    };
  }
  function y(d, S, E, T) {
    s(d, E), T = this.locInfo(T);
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
  function _(d, S, E, T, A, D) {
    T && T.path && s(d, T);
    var C = /\*/.test(d.open);
    S.blockParams = d.blockParams;
    var N = void 0, M = void 0;
    if (E) {
      if (C)
        throw new i.default("Unexpected inverse block on decorator", E);
      E.chain && (E.program.body[0].closeStrip = T.strip), M = E.strip, N = E.program;
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
      var E = d[0].loc, T = d[d.length - 1].loc;
      E && T && (S = {
        source: E.source,
        start: {
          line: E.start.line,
          column: E.start.column
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
  function v(d, S, E, T) {
    return s(d, E), {
      type: "PartialBlockStatement",
      name: d.path,
      params: d.params,
      hash: d.hash,
      program: S,
      openStrip: d.strip,
      closeStrip: E && E.strip,
      loc: this.locInfo(T)
    };
  }
  return gn;
}
var py;
function zE() {
  if (py) return Oi;
  py = 1, Oi.__esModule = !0, Oi.parseWithoutProcessing = y, Oi.parse = _;
  function t(b) {
    if (b && b.__esModule)
      return b;
    var v = {};
    if (b != null)
      for (var d in b)
        Object.prototype.hasOwnProperty.call(b, d) && (v[d] = b[d]);
    return v.default = b, v;
  }
  function r(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var i = kE(), s = r(i), l = jE(), u = r(l), f = RE(), p = t(f), h = on();
  Oi.parser = s.default;
  var m = {};
  h.extend(m, p);
  function y(b, v) {
    if (b.type === "Program")
      return b;
    s.default.yy = m, m.locInfo = function(S) {
      return new m.SourceLocation(v && v.srcName, S);
    };
    var d = s.default.parse(b);
    return d;
  }
  function _(b, v) {
    var d = y(b, v), S = new u.default(v);
    return S.accept(d);
  }
  return Oi;
}
var Di = {}, my;
function LE() {
  if (my) return Di;
  my = 1, Di.__esModule = !0, Di.Compiler = p, Di.precompile = h, Di.compile = m;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = Gn(), i = t(r), s = on(), l = Y0(), u = t(l), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(v) {
      var d = this.opcodes.length;
      if (v.opcodes.length !== d)
        return !1;
      for (var S = 0; S < d; S++) {
        var E = this.opcodes[S], T = v.opcodes[S];
        if (E.opcode !== T.opcode || !y(E.args, T.args))
          return !1;
      }
      d = this.children.length;
      for (var S = 0; S < d; S++)
        if (!this.children[S].equals(v.children[S]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(v, d) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = d, this.stringParams = d.stringParams, this.trackIds = d.trackIds, d.blockParams = d.blockParams || [], d.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, d.knownHelpers), this.accept(v);
    },
    compileProgram: function(v) {
      var d = new this.compiler(), S = d.compile(v, this.options), E = this.guid++;
      return this.usePartial = this.usePartial || S.usePartial, this.children[E] = S, this.useDepths = this.useDepths || S.useDepths, E;
    },
    accept: function(v) {
      if (!this[v.type])
        throw new i.default("Unknown type: " + v.type, v);
      this.sourceNode.unshift(v);
      var d = this[v.type](v);
      return this.sourceNode.shift(), d;
    },
    Program: function(v) {
      this.options.blockParams.unshift(v.blockParams);
      for (var d = v.body, S = d.length, E = 0; E < S; E++)
        this.accept(d[E]);
      return this.options.blockParams.shift(), this.isSimple = S === 1, this.blockParams = v.blockParams ? v.blockParams.length : 0, this;
    },
    BlockStatement: function(v) {
      _(v);
      var d = v.program, S = v.inverse;
      d = d && this.compileProgram(d), S = S && this.compileProgram(S);
      var E = this.classifySexpr(v);
      E === "helper" ? this.helperSexpr(v, d, S) : E === "simple" ? (this.simpleSexpr(v), this.opcode("pushProgram", d), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("blockValue", v.path.original)) : (this.ambiguousSexpr(v, d, S), this.opcode("pushProgram", d), this.opcode("pushProgram", S), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(v) {
      var d = v.program && this.compileProgram(v.program), S = this.setupFullMustacheParams(v, d, void 0), E = v.path;
      this.useDecorators = !0, this.opcode("registerDecorator", S.length, E.original);
    },
    PartialStatement: function(v) {
      this.usePartial = !0;
      var d = v.program;
      d && (d = this.compileProgram(v.program));
      var S = v.params;
      if (S.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + S.length, v);
      S.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : S.push({ type: "PathExpression", parts: [], depth: 0 }));
      var E = v.name.original, T = v.name.type === "SubExpression";
      T && this.accept(v.name), this.setupFullMustacheParams(v, d, void 0, !0);
      var A = v.indent || "";
      this.options.preventIndent && A && (this.opcode("appendContent", A), A = ""), this.opcode("invokePartial", T, E, A), this.opcode("append");
    },
    PartialBlockStatement: function(v) {
      this.PartialStatement(v);
    },
    MustacheStatement: function(v) {
      this.SubExpression(v), v.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(v) {
      this.DecoratorBlock(v);
    },
    ContentStatement: function(v) {
      v.value && this.opcode("appendContent", v.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(v) {
      _(v);
      var d = this.classifySexpr(v);
      d === "simple" ? this.simpleSexpr(v) : d === "helper" ? this.helperSexpr(v) : this.ambiguousSexpr(v);
    },
    ambiguousSexpr: function(v, d, S) {
      var E = v.path, T = E.parts[0], A = d != null || S != null;
      this.opcode("getContext", E.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", S), E.strict = !0, this.accept(E), this.opcode("invokeAmbiguous", T, A);
    },
    simpleSexpr: function(v) {
      var d = v.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(v, d, S) {
      var E = this.setupFullMustacheParams(v, d, S), T = v.path, A = T.parts[0];
      if (this.options.knownHelpers[A])
        this.opcode("invokeKnownHelper", E.length, A);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + A, v);
        T.strict = !0, T.falsy = !0, this.accept(T), this.opcode("invokeHelper", E.length, T.original, u.default.helpers.simpleId(T));
      }
    },
    PathExpression: function(v) {
      this.addDepth(v.depth), this.opcode("getContext", v.depth);
      var d = v.parts[0], S = u.default.helpers.scopedId(v), E = !v.depth && !S && this.blockParamIndex(d);
      E ? this.opcode("lookupBlockParam", E, v.parts) : d ? v.data ? (this.options.data = !0, this.opcode("lookupData", v.depth, v.parts, v.strict)) : this.opcode("lookupOnContext", v.parts, v.falsy, v.strict, S) : this.opcode("pushContext");
    },
    StringLiteral: function(v) {
      this.opcode("pushString", v.value);
    },
    NumberLiteral: function(v) {
      this.opcode("pushLiteral", v.value);
    },
    BooleanLiteral: function(v) {
      this.opcode("pushLiteral", v.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(v) {
      var d = v.pairs, S = 0, E = d.length;
      for (this.opcode("pushHash"); S < E; S++)
        this.pushParam(d[S].value);
      for (; S--; )
        this.opcode("assignToHash", d[S].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(v) {
      this.opcodes.push({
        opcode: v,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(v) {
      v && (this.useDepths = !0);
    },
    classifySexpr: function(v) {
      var d = u.default.helpers.simpleId(v.path), S = d && !!this.blockParamIndex(v.path.parts[0]), E = !S && u.default.helpers.helperExpression(v), T = !S && (E || d);
      if (T && !E) {
        var A = v.path.parts[0], D = this.options;
        D.knownHelpers[A] ? E = !0 : D.knownHelpersOnly && (T = !1);
      }
      return E ? "helper" : T ? "ambiguous" : "simple";
    },
    pushParams: function(v) {
      for (var d = 0, S = v.length; d < S; d++)
        this.pushParam(v[d]);
    },
    pushParam: function(v) {
      var d = v.value != null ? v.value : v.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), v.depth && this.addDepth(v.depth), this.opcode("getContext", v.depth || 0), this.opcode("pushStringParam", d, v.type), v.type === "SubExpression" && this.accept(v);
      else {
        if (this.trackIds) {
          var S = void 0;
          if (v.parts && !u.default.helpers.scopedId(v) && !v.depth && (S = this.blockParamIndex(v.parts[0])), S) {
            var E = v.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", S, E);
          } else
            d = v.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", v.type, d);
        }
        this.accept(v);
      }
    },
    setupFullMustacheParams: function(v, d, S, E) {
      var T = v.params;
      return this.pushParams(T), this.opcode("pushProgram", d), this.opcode("pushProgram", S), v.hash ? this.accept(v.hash) : this.opcode("emptyHash", E), T;
    },
    blockParamIndex: function(v) {
      for (var d = 0, S = this.options.blockParams.length; d < S; d++) {
        var E = this.options.blockParams[d], T = E && s.indexOf(E, v);
        if (E && T >= 0)
          return [d, T];
      }
    }
  };
  function h(b, v, d) {
    if (b == null || typeof b != "string" && b.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + b);
    v = v || {}, "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = d.parse(b, v), E = new d.Compiler().compile(S, v);
    return new d.JavaScriptCompiler().compile(E, v);
  }
  function m(b, v, d) {
    if (v === void 0 && (v = {}), b == null || typeof b != "string" && b.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + b);
    v = s.extend({}, v), "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var S = void 0;
    function E() {
      var A = d.parse(b, v), D = new d.Compiler().compile(A, v), C = new d.JavaScriptCompiler().compile(D, v, void 0, !0);
      return d.template(C);
    }
    function T(A, D) {
      return S || (S = E()), S.call(this, A, D);
    }
    return T._setup = function(A) {
      return S || (S = E()), S._setup(A);
    }, T._child = function(A, D, C, N) {
      return S || (S = E()), S._child(A, D, C, N);
    }, T;
  }
  function y(b, v) {
    if (b === v)
      return !0;
    if (s.isArray(b) && s.isArray(v) && b.length === v.length) {
      for (var d = 0; d < b.length; d++)
        if (!y(b[d], v[d]))
          return !1;
      return !0;
    }
  }
  function _(b) {
    if (!b.path.parts) {
      var v = b.path;
      b.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [v.original + ""],
        original: v.original + "",
        loc: v.loc
      };
    }
  }
  return Di;
}
var Jl = { exports: {} }, Wl = { exports: {} }, Zs = {}, fd = {}, eu = {}, tu = {}, gy;
function IE() {
  if (gy) return tu;
  gy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return tu.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, tu.decode = function(r) {
    var i = 65, s = 90, l = 97, u = 122, f = 48, p = 57, h = 43, m = 47, y = 26, _ = 52;
    return i <= r && r <= s ? r - i : l <= r && r <= u ? r - l + y : f <= r && r <= p ? r - f + _ : r == h ? 62 : r == m ? 63 : -1;
  }, tu;
}
var vy;
function $0() {
  if (vy) return eu;
  vy = 1;
  var t = IE(), r = 5, i = 1 << r, s = i - 1, l = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var h = (p & 1) === 1, m = p >> 1;
    return h ? -m : m;
  }
  return eu.encode = function(h) {
    var m = "", y, _ = u(h);
    do
      y = _ & s, _ >>>= r, _ > 0 && (y |= l), m += t.encode(y);
    while (_ > 0);
    return m;
  }, eu.decode = function(h, m, y) {
    var _ = h.length, b = 0, v = 0, d, S;
    do {
      if (m >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (S = t.decode(h.charCodeAt(m++)), S === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(m - 1));
      d = !!(S & l), S &= s, b = b + (S << v), v += r;
    } while (d);
    y.value = f(b), y.rest = m;
  }, eu;
}
var dd = {}, yy;
function uo() {
  return yy || (yy = 1, (function(t) {
    function r(C, N, M) {
      if (N in C)
        return C[N];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + N + '" is a required argument.');
    }
    t.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function l(C) {
      var N = C.match(i);
      return N ? {
        scheme: N[1],
        auth: N[2],
        host: N[3],
        port: N[4],
        path: N[5]
      } : null;
    }
    t.urlParse = l;
    function u(C) {
      var N = "";
      return C.scheme && (N += C.scheme + ":"), N += "//", C.auth && (N += C.auth + "@"), C.host && (N += C.host), C.port && (N += ":" + C.port), C.path && (N += C.path), N;
    }
    t.urlGenerate = u;
    function f(C) {
      var N = C, M = l(C);
      if (M) {
        if (!M.path)
          return C;
        N = M.path;
      }
      for (var k = t.isAbsolute(N), B = N.split(/\/+/), $, I = 0, Z = B.length - 1; Z >= 0; Z--)
        $ = B[Z], $ === "." ? B.splice(Z, 1) : $ === ".." ? I++ : I > 0 && ($ === "" ? (B.splice(Z + 1, I), I = 0) : (B.splice(Z, 2), I--));
      return N = B.join("/"), N === "" && (N = k ? "/" : "."), M ? (M.path = N, u(M)) : N;
    }
    t.normalize = f;
    function p(C, N) {
      C === "" && (C = "."), N === "" && (N = ".");
      var M = l(N), k = l(C);
      if (k && (C = k.path || "/"), M && !M.scheme)
        return k && (M.scheme = k.scheme), u(M);
      if (M || N.match(s))
        return N;
      if (k && !k.host && !k.path)
        return k.host = N, u(k);
      var B = N.charAt(0) === "/" ? N : f(C.replace(/\/+$/, "") + "/" + N);
      return k ? (k.path = B, u(k)) : B;
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
      return v(C) ? "$" + C : C;
    }
    t.toSetString = m ? y : _;
    function b(C) {
      return v(C) ? C.slice(1) : C;
    }
    t.fromSetString = m ? y : b;
    function v(C) {
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
      var k = E(C.source, N.source);
      return k !== 0 || (k = C.originalLine - N.originalLine, k !== 0) || (k = C.originalColumn - N.originalColumn, k !== 0 || M) || (k = C.generatedColumn - N.generatedColumn, k !== 0) || (k = C.generatedLine - N.generatedLine, k !== 0) ? k : E(C.name, N.name);
    }
    t.compareByOriginalPositions = d;
    function S(C, N, M) {
      var k = C.generatedLine - N.generatedLine;
      return k !== 0 || (k = C.generatedColumn - N.generatedColumn, k !== 0 || M) || (k = E(C.source, N.source), k !== 0) || (k = C.originalLine - N.originalLine, k !== 0) || (k = C.originalColumn - N.originalColumn, k !== 0) ? k : E(C.name, N.name);
    }
    t.compareByGeneratedPositionsDeflated = S;
    function E(C, N) {
      return C === N ? 0 : C === null ? 1 : N === null ? -1 : C > N ? 1 : -1;
    }
    function T(C, N) {
      var M = C.generatedLine - N.generatedLine;
      return M !== 0 || (M = C.generatedColumn - N.generatedColumn, M !== 0) || (M = E(C.source, N.source), M !== 0) || (M = C.originalLine - N.originalLine, M !== 0) || (M = C.originalColumn - N.originalColumn, M !== 0) ? M : E(C.name, N.name);
    }
    t.compareByGeneratedPositionsInflated = T;
    function A(C) {
      return JSON.parse(C.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = A;
    function D(C, N, M) {
      if (N = N || "", C && (C[C.length - 1] !== "/" && N[0] !== "/" && (C += "/"), N = C + N), M) {
        var k = l(M);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var B = k.path.lastIndexOf("/");
          B >= 0 && (k.path = k.path.substring(0, B + 1));
        }
        N = p(u(k), N);
      }
      return f(N);
    }
    t.computeSourceURL = D;
  })(dd)), dd;
}
var hd = {}, by;
function Q0() {
  if (by) return hd;
  by = 1;
  var t = uo(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
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
  }, hd.ArraySet = s, hd;
}
var pd = {}, _y;
function PE() {
  if (_y) return pd;
  _y = 1;
  var t = uo();
  function r(s, l) {
    var u = s.generatedLine, f = l.generatedLine, p = s.generatedColumn, h = l.generatedColumn;
    return f > u || f == u && h >= p || t.compareByGeneratedPositionsInflated(s, l) <= 0;
  }
  function i() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return i.prototype.unsortedForEach = function(l, u) {
    this._array.forEach(l, u);
  }, i.prototype.add = function(l) {
    r(this._last, l) ? (this._last = l, this._array.push(l)) : (this._sorted = !1, this._array.push(l));
  }, i.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, pd.MappingList = i, pd;
}
var Sy;
function K0() {
  if (Sy) return fd;
  Sy = 1;
  var t = $0(), r = uo(), i = Q0().ArraySet, s = PE().MappingList;
  function l(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return l.prototype._version = 3, l.fromSourceMap = function(f) {
    var p = f.sourceRoot, h = new l({
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
  }, l.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), h = r.getArg(f, "original", null), m = r.getArg(f, "source", null), y = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, h, m, y), m != null && (m = String(m), this._sources.has(m) || this._sources.add(m)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: m,
      name: y
    });
  }, l.prototype.setSourceContent = function(f, p) {
    var h = f;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, l.prototype.applySourceMap = function(f, p, h) {
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
    this._mappings.unsortedForEach(function(v) {
      if (v.source === m && v.originalLine != null) {
        var d = f.originalPositionFor({
          line: v.originalLine,
          column: v.originalColumn
        });
        d.source != null && (v.source = d.source, h != null && (v.source = r.join(h, v.source)), y != null && (v.source = r.relative(y, v.source)), v.originalLine = d.line, v.originalColumn = d.column, d.name != null && (v.name = d.name));
      }
      var S = v.source;
      S != null && !_.has(S) && _.add(S);
      var E = v.name;
      E != null && !b.has(E) && b.add(E);
    }, this), this._sources = _, this._names = b, f.sources.forEach(function(v) {
      var d = f.sourceContentFor(v);
      d != null && (h != null && (v = r.join(h, v)), y != null && (v = r.relative(y, v)), this.setSourceContent(v, d));
    }, this);
  }, l.prototype._validateMapping = function(f, p, h, m) {
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
  }, l.prototype._serializeMappings = function() {
    for (var f = 0, p = 1, h = 0, m = 0, y = 0, _ = 0, b = "", v, d, S, E, T = this._mappings.toArray(), A = 0, D = T.length; A < D; A++) {
      if (d = T[A], v = "", d.generatedLine !== p)
        for (f = 0; d.generatedLine !== p; )
          v += ";", p++;
      else if (A > 0) {
        if (!r.compareByGeneratedPositionsInflated(d, T[A - 1]))
          continue;
        v += ",";
      }
      v += t.encode(d.generatedColumn - f), f = d.generatedColumn, d.source != null && (E = this._sources.indexOf(d.source), v += t.encode(E - _), _ = E, v += t.encode(d.originalLine - 1 - m), m = d.originalLine - 1, v += t.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (S = this._names.indexOf(d.name), v += t.encode(S - y), y = S)), b += v;
    }
    return b;
  }, l.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(h) {
      if (!this._sourcesContents)
        return null;
      p != null && (h = r.relative(p, h));
      var m = r.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, m) ? this._sourcesContents[m] : null;
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
  }, fd.SourceMapGenerator = l, fd;
}
var Gs = {}, md = {}, xy;
function BE() {
  return xy || (xy = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(i, s, l, u, f, p) {
      var h = Math.floor((s - i) / 2) + i, m = f(l, u[h], !0);
      return m === 0 ? h : m > 0 ? s - h > 1 ? r(h, s, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - i > 1 ? r(i, h, l, u, f, p) : p == t.LEAST_UPPER_BOUND ? h : i < 0 ? -1 : i;
    }
    t.search = function(s, l, u, f) {
      if (l.length === 0)
        return -1;
      var p = r(
        -1,
        l.length,
        s,
        l,
        u,
        f || t.GREATEST_LOWER_BOUND
      );
      if (p < 0)
        return -1;
      for (; p - 1 >= 0 && u(l[p], l[p - 1], !0) === 0; )
        --p;
      return p;
    };
  })(md)), md;
}
var gd = {}, Ey;
function UE() {
  if (Ey) return gd;
  Ey = 1;
  function t(s, l, u) {
    var f = s[l];
    s[l] = s[u], s[u] = f;
  }
  function r(s, l) {
    return Math.round(s + Math.random() * (l - s));
  }
  function i(s, l, u, f) {
    if (u < f) {
      var p = r(u, f), h = u - 1;
      t(s, p, f);
      for (var m = s[f], y = u; y < f; y++)
        l(s[y], m) <= 0 && (h += 1, t(s, h, y));
      t(s, h + 1, y);
      var _ = h + 1;
      i(s, l, u, _ - 1), i(s, l, _ + 1, f);
    }
  }
  return gd.quickSort = function(s, l) {
    i(s, l, 0, s.length - 1);
  }, gd;
}
var Cy;
function HE() {
  if (Cy) return Gs;
  Cy = 1;
  var t = uo(), r = BE(), i = Q0().ArraySet, s = $0(), l = UE().quickSort;
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
    var v = _ || null, d = b || u.GENERATED_ORDER, S;
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
    var E = this.sourceRoot;
    S.map(function(T) {
      var A = T.source === null ? null : this._sources.at(T.source);
      return A = t.computeSourceURL(E, A, this._sourceMapURL), {
        source: A,
        generatedLine: T.generatedLine,
        generatedColumn: T.generatedColumn,
        originalLine: T.originalLine,
        originalColumn: T.originalColumn,
        name: T.name === null ? null : this._names.at(T.name)
      };
    }, this).forEach(y, v);
  }, u.prototype.allGeneratedPositionsFor = function(y) {
    var _ = t.getArg(y, "line"), b = {
      source: t.getArg(y, "source"),
      originalLine: _,
      originalColumn: t.getArg(y, "column", 0)
    };
    if (b.source = this._findSourceIndex(b.source), b.source < 0)
      return [];
    var v = [], d = this._findMapping(
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
        for (var E = S.originalLine; S && S.originalLine === E; )
          v.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++d];
      else
        for (var T = S.originalColumn; S && S.originalLine === _ && S.originalColumn == T; )
          v.push({
            line: t.getArg(S, "generatedLine", null),
            column: t.getArg(S, "generatedColumn", null),
            lastColumn: t.getArg(S, "lastGeneratedColumn", null)
          }), S = this._originalMappings[++d];
    }
    return v;
  }, Gs.SourceMapConsumer = u;
  function f(m, y) {
    var _ = m;
    typeof m == "string" && (_ = t.parseSourceMapInput(m));
    var b = t.getArg(_, "version"), v = t.getArg(_, "sources"), d = t.getArg(_, "names", []), S = t.getArg(_, "sourceRoot", null), E = t.getArg(_, "sourcesContent", null), T = t.getArg(_, "mappings"), A = t.getArg(_, "file", null);
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    S && (S = t.normalize(S)), v = v.map(String).map(t.normalize).map(function(D) {
      return S && t.isAbsolute(S) && t.isAbsolute(D) ? t.relative(S, D) : D;
    }), this._names = i.fromArray(d.map(String), !0), this._sources = i.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return t.computeSourceURL(S, D, y);
    }), this.sourceRoot = S, this.sourcesContent = E, this._mappings = T, this._sourceMapURL = y, this.file = A;
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
    var b = Object.create(f.prototype), v = b._names = i.fromArray(y._names.toArray(), !0), d = b._sources = i.fromArray(y._sources.toArray(), !0);
    b.sourceRoot = y._sourceRoot, b.sourcesContent = y._generateSourcesContent(
      b._sources.toArray(),
      b.sourceRoot
    ), b.file = y._file, b._sourceMapURL = _, b._absoluteSources = b._sources.toArray().map(function(M) {
      return t.computeSourceURL(b.sourceRoot, M, _);
    });
    for (var S = y._mappings.toArray().slice(), E = b.__generatedMappings = [], T = b.__originalMappings = [], A = 0, D = S.length; A < D; A++) {
      var C = S[A], N = new p();
      N.generatedLine = C.generatedLine, N.generatedColumn = C.generatedColumn, C.source && (N.source = d.indexOf(C.source), N.originalLine = C.originalLine, N.originalColumn = C.originalColumn, C.name && (N.name = v.indexOf(C.name)), T.push(N)), E.push(N);
    }
    return l(b.__originalMappings, t.compareByOriginalPositions), b;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(y, _) {
    for (var b = 1, v = 0, d = 0, S = 0, E = 0, T = 0, A = y.length, D = 0, C = {}, N = {}, M = [], k = [], B, $, I, Z, K; D < A; )
      if (y.charAt(D) === ";")
        b++, D++, v = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (B = new p(), B.generatedLine = b, Z = D; Z < A && !this._charIsMappingSeparator(y, Z); Z++)
          ;
        if ($ = y.slice(D, Z), I = C[$], I)
          D += $.length;
        else {
          for (I = []; D < Z; )
            s.decode(y, D, N), K = N.value, D = N.rest, I.push(K);
          if (I.length === 2)
            throw new Error("Found a source, but no line and column");
          if (I.length === 3)
            throw new Error("Found a source and line, but no column");
          C[$] = I;
        }
        B.generatedColumn = v + I[0], v = B.generatedColumn, I.length > 1 && (B.source = E + I[1], E += I[1], B.originalLine = d + I[2], d = B.originalLine, B.originalLine += 1, B.originalColumn = S + I[3], S = B.originalColumn, I.length > 4 && (B.name = T + I[4], T += I[4])), k.push(B), typeof B.originalLine == "number" && M.push(B);
      }
    l(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, l(M, t.compareByOriginalPositions), this.__originalMappings = M;
  }, f.prototype._findMapping = function(y, _, b, v, d, S) {
    if (y[b] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + y[b]);
    if (y[v] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + y[v]);
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
      var v = this._generatedMappings[b];
      if (v.generatedLine === _.generatedLine) {
        var d = t.getArg(v, "source", null);
        d !== null && (d = this._sources.at(d), d = t.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var S = t.getArg(v, "name", null);
        return S !== null && (S = this._names.at(S)), {
          source: d,
          line: t.getArg(v, "originalLine", null),
          column: t.getArg(v, "originalColumn", null),
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
    var v = y;
    this.sourceRoot != null && (v = t.relative(this.sourceRoot, v));
    var d;
    if (this.sourceRoot != null && (d = t.urlParse(this.sourceRoot))) {
      var S = v.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(S))
        return this.sourcesContent[this._sources.indexOf(S)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + v))
        return this.sourcesContent[this._sources.indexOf("/" + v)];
    }
    if (_)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
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
    }, v = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var d = this._originalMappings[v];
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
  }, Gs.BasicSourceMapConsumer = f;
  function h(m, y) {
    var _ = m;
    typeof m == "string" && (_ = t.parseSourceMapInput(m));
    var b = t.getArg(_, "version"), v = t.getArg(_, "sections");
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    this._sources = new i(), this._names = new i();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = v.map(function(S) {
      if (S.url)
        throw new Error("Support for url field in sections not implemented.");
      var E = t.getArg(S, "offset"), T = t.getArg(E, "line"), A = t.getArg(E, "column");
      if (T < d.line || T === d.line && A < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = E, {
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
        var E = d.generatedLine - S.generatedOffset.generatedLine;
        return E || d.generatedColumn - S.generatedOffset.generatedColumn;
      }
    ), v = this._sections[b];
    return v ? v.consumer.originalPositionFor({
      line: _.generatedLine - (v.generatedOffset.generatedLine - 1),
      column: _.generatedColumn - (v.generatedOffset.generatedLine === _.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
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
      var v = this._sections[b], d = v.consumer.sourceContentFor(y, !0);
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
        var v = b.consumer.generatedPositionFor(y);
        if (v) {
          var d = {
            line: v.line + (b.generatedOffset.generatedLine - 1),
            column: v.column + (b.generatedOffset.generatedLine === v.line ? b.generatedOffset.generatedColumn - 1 : 0)
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
      for (var v = this._sections[b], d = v.consumer._generatedMappings, S = 0; S < d.length; S++) {
        var E = d[S], T = v.consumer._sources.at(E.source);
        T = t.computeSourceURL(v.consumer.sourceRoot, T, this._sourceMapURL), this._sources.add(T), T = this._sources.indexOf(T);
        var A = null;
        E.name && (A = v.consumer._names.at(E.name), this._names.add(A), A = this._names.indexOf(A));
        var D = {
          source: T,
          generatedLine: E.generatedLine + (v.generatedOffset.generatedLine - 1),
          generatedColumn: E.generatedColumn + (v.generatedOffset.generatedLine === E.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
          originalLine: E.originalLine,
          originalColumn: E.originalColumn,
          name: A
        };
        this.__generatedMappings.push(D), typeof D.originalLine == "number" && this.__originalMappings.push(D);
      }
    l(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), l(this.__originalMappings, t.compareByOriginalPositions);
  }, Gs.IndexedSourceMapConsumer = h, Gs;
}
var vd = {}, wy;
function qE() {
  if (wy) return vd;
  wy = 1;
  var t = K0().SourceMapGenerator, r = uo(), i = /(\r?\n)/, s = 10, l = "$$$isSourceNode$$$";
  function u(f, p, h, m, y) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = y ?? null, this[l] = !0, m != null && this.add(m);
  }
  return u.fromStringWithSourceMap = function(p, h, m) {
    var y = new u(), _ = p.split(i), b = 0, v = function() {
      var A = C(), D = C() || "";
      return A + D;
      function C() {
        return b < _.length ? _[b++] : void 0;
      }
    }, d = 1, S = 0, E = null;
    return h.eachMapping(function(A) {
      if (E !== null)
        if (d < A.generatedLine)
          T(E, v()), d++, S = 0;
        else {
          var D = _[b] || "", C = D.substr(0, A.generatedColumn - S);
          _[b] = D.substr(A.generatedColumn - S), S = A.generatedColumn, T(E, C), E = A;
          return;
        }
      for (; d < A.generatedLine; )
        y.add(v()), d++;
      if (S < A.generatedColumn) {
        var D = _[b] || "";
        y.add(D.substr(0, A.generatedColumn)), _[b] = D.substr(A.generatedColumn), S = A.generatedColumn;
      }
      E = A;
    }, this), b < _.length && (E && T(E, v()), y.add(_.splice(b).join(""))), h.sources.forEach(function(A) {
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
    else if (p[l] || typeof p == "string")
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
    else if (p[l] || typeof p == "string")
      this.children.unshift(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.walk = function(p) {
    for (var h, m = 0, y = this.children.length; m < y; m++)
      h = this.children[m], h[l] ? h.walk(p) : h !== "" && p(h, {
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
    return m[l] ? m.replaceRight(p, h) : typeof m == "string" ? this.children[this.children.length - 1] = m.replace(p, h) : this.children.push("".replace(p, h)), this;
  }, u.prototype.setSourceContent = function(p, h) {
    this.sourceContents[r.toSetString(p)] = h;
  }, u.prototype.walkSourceContents = function(p) {
    for (var h = 0, m = this.children.length; h < m; h++)
      this.children[h][l] && this.children[h].walkSourceContents(p);
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
    }, m = new t(p), y = !1, _ = null, b = null, v = null, d = null;
    return this.walk(function(S, E) {
      h.code += S, E.source !== null && E.line !== null && E.column !== null ? ((_ !== E.source || b !== E.line || v !== E.column || d !== E.name) && m.addMapping({
        source: E.source,
        original: {
          line: E.line,
          column: E.column
        },
        generated: {
          line: h.line,
          column: h.column
        },
        name: E.name
      }), _ = E.source, b = E.line, v = E.column, d = E.name, y = !0) : y && (m.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), _ = null, y = !1);
      for (var T = 0, A = S.length; T < A; T++)
        S.charCodeAt(T) === s ? (h.line++, h.column = 0, T + 1 === A ? (_ = null, y = !1) : y && m.addMapping({
          source: E.source,
          original: {
            line: E.line,
            column: E.column
          },
          generated: {
            line: h.line,
            column: h.column
          },
          name: E.name
        })) : h.column++;
    }), this.walkSourceContents(function(S, E) {
      m.setSourceContent(S, E);
    }), { code: h.code, map: m };
  }, vd.SourceNode = u, vd;
}
var Ay;
function FE() {
  return Ay || (Ay = 1, Zs.SourceMapGenerator = K0().SourceMapGenerator, Zs.SourceMapConsumer = HE().SourceMapConsumer, Zs.SourceNode = qE().SourceNode), Zs;
}
var Ny;
function ZE() {
  return Ny || (Ny = 1, (function(t, r) {
    r.__esModule = !0;
    var i = on(), s = void 0;
    try {
      var l = FE();
      s = l.SourceNode;
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
          var v = u(h[b], m);
          v !== "undefined" && y.push([m.quotedString(b), ":", v]);
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
  })(Wl, Wl.exports)), Wl.exports;
}
var Ty;
function GE() {
  return Ty || (Ty = 1, (function(t, r) {
    r.__esModule = !0;
    function i(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = lh(), l = Gn(), u = i(l), f = on(), p = ZE(), h = i(p);
    function m(b) {
      this.value = b;
    }
    function y() {
    }
    y.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(v, d) {
        return this.internalNameLookup(v, d);
      },
      depthedLookup: function(v) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(v), ")"];
      },
      compilerInfo: function() {
        var v = s.COMPILER_REVISION, d = s.REVISION_CHANGES[v];
        return [v, d];
      },
      appendToBuffer: function(v, d, S) {
        return f.isArray(v) || (v = [v]), v = this.source.wrap(v, d), this.environment.isSimple ? ["return ", v, ";"] : S ? ["buffer += ", v, ";"] : (v.appendToBuffer = !0, v);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(v, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", v, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(v, d, S, E) {
        this.environment = v, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !E, this.name = this.environment.name, this.isChild = !!S, this.context = S || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(v, d), this.useDepths = this.useDepths || v.useDepths || v.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || v.useBlockParams;
        var T = v.opcodes, A = void 0, D = void 0, C = void 0, N = void 0;
        for (C = 0, N = T.length; C < N; C++)
          A = T[C], this.source.currentLocation = A.loc, D = D || A.loc, this[A.opcode].apply(this, A.args);
        if (this.source.currentLocation = D, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), E ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(E);
        if (this.isChild)
          return M;
        var k = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var B = this.context, $ = B.programs, I = B.decorators;
        for (C = 0, N = $.length; C < N; C++)
          $[C] && (k[C] = $[C], I[C] && (k[C + "_d"] = I[C], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), E ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), d.srcName ? (k = k.toStringWithSourceMap({ file: d.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(v) {
        var d = this, S = "", E = this.stackVars.concat(this.registers.list);
        E.length > 0 && (S += ", " + E.join(", "));
        var T = 0;
        Object.keys(this.aliases).forEach(function(C) {
          var N = d.aliases[C];
          N.children && N.referenceCount > 1 && (S += ", alias" + ++T + "=" + C, N.children[0] = "alias" + T);
        }), this.lookupPropertyFunctionIsUsed && (S += ", " + this.lookupPropertyFunctionVarDeclaration());
        var A = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && A.push("blockParams"), this.useDepths && A.push("depths");
        var D = this.mergeSource(S);
        return v ? (A.push(D), Function.apply(this, A)) : this.source.wrap(["function(", A.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(v) {
        var d = this.environment.isSimple, S = !this.forceBuffer, E = void 0, T = void 0, A = void 0, D = void 0;
        return this.source.each(function(C) {
          C.appendToBuffer ? (A ? C.prepend("  + ") : A = C, D = C) : (A && (T ? A.prepend("buffer += ") : E = !0, D.add(";"), A = D = void 0), T = !0, d || (S = !1));
        }), S ? A ? (A.prepend("return "), D.add(";")) : T || this.source.push('return "";') : (v += ", buffer = " + (E ? "" : this.initializeBuffer()), A ? (A.prepend("return buffer + "), D.add(";")) : this.source.push("return buffer;")), v && this.source.prepend("var " + v.substring(2) + (E ? "" : `;
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
      blockValue: function(v) {
        var d = this.aliasable("container.hooks.blockHelperMissing"), S = [this.contextName(0)];
        this.setupHelperArgs(v, 0, S);
        var E = this.popStack();
        S.splice(1, 0, E), this.push(this.source.functionCall(d, "call", S));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var v = this.aliasable("container.hooks.blockHelperMissing"), d = [this.contextName(0)];
        this.setupHelperArgs("", 0, d, !0), this.flushInline();
        var S = this.topStack();
        d.splice(1, 0, S), this.pushSource(["if (!", this.lastHelper, ") { ", S, " = ", this.source.functionCall(v, "call", d), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(v) {
        this.pendingContent ? v = this.pendingContent + v : this.pendingLocation = this.source.currentLocation, this.pendingContent = v;
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
          var v = this.popStack();
          this.pushSource(["if (", v, " != null) { ", this.appendToBuffer(v, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
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
      getContext: function(v) {
        this.lastContext = v;
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
      lookupOnContext: function(v, d, S, E) {
        var T = 0;
        !E && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(v[T++])) : this.pushContext(), this.resolvePath("context", v, T, d, S);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(v, d) {
        this.useBlockParams = !0, this.push(["blockParams[", v[0], "][", v[1], "]"]), this.resolvePath("context", d, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(v, d, S) {
        v ? this.pushStackLiteral("container.data(data, " + v + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, S);
      },
      resolvePath: function(v, d, S, E, T) {
        var A = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(_(this.options.strict && T, this, d, S, v));
          return;
        }
        for (var D = d.length; S < D; S++)
          this.replaceStack(function(C) {
            var N = A.nameLookup(C, d[S], v);
            return E ? [" && ", N] : [" != null ? ", N, " : ", C];
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
      pushStringParam: function(v, d) {
        this.pushContext(), this.pushString(d), d !== "SubExpression" && (typeof v == "string" ? this.pushString(v) : this.pushStackLiteral(v));
      },
      emptyHash: function(v) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(v ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var v = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(v.ids)), this.stringParams && (this.push(this.objectLiteral(v.contexts)), this.push(this.objectLiteral(v.types))), this.push(this.objectLiteral(v.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(v) {
        this.pushStackLiteral(this.quotedString(v));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(v) {
        this.pushStackLiteral(v);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(v) {
        v != null ? this.pushStackLiteral(this.programExpression(v)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(v, d) {
        var S = this.nameLookup("decorators", d, "decorator"), E = this.setupHelperArgs(d, v);
        this.decorators.push(["fn = ", this.decorators.functionCall(S, "", ["fn", "props", "container", E]), " || fn;"]);
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
      invokeHelper: function(v, d, S) {
        var E = this.popStack(), T = this.setupHelper(v, d), A = [];
        S && A.push(T.name), A.push(E), this.options.strict || A.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(A, "||"), ")"], C = this.source.functionCall(D, "call", T.callParams);
        this.push(C);
      },
      itemsSeparatedBy: function(v, d) {
        var S = [];
        S.push(v[0]);
        for (var E = 1; E < v.length; E++)
          S.push(d, v[E]);
        return S;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(v, d) {
        var S = this.setupHelper(v, d);
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
      invokeAmbiguous: function(v, d) {
        this.useRegister("helper");
        var S = this.popStack();
        this.emptyHash();
        var E = this.setupHelper(0, v, d), T = this.lastHelper = this.nameLookup("helpers", v, "helper"), A = ["(", "(helper = ", T, " || ", S, ")"];
        this.options.strict || (A[0] = "(helper = ", A.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", A, E.paramsInit ? ["),(", E.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", E.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(v, d, S) {
        var E = [], T = this.setupParams(d, 1, E);
        v && (d = this.popStack(), delete T.name), S && (T.indent = JSON.stringify(S)), T.helpers = "helpers", T.partials = "partials", T.decorators = "container.decorators", v ? E.unshift(d) : E.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (T.depths = "depths"), T = this.objectLiteral(T), E.push(T), this.push(this.source.functionCall("container.invokePartial", "", E));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(v) {
        var d = this.popStack(), S = void 0, E = void 0, T = void 0;
        this.trackIds && (T = this.popStack()), this.stringParams && (E = this.popStack(), S = this.popStack());
        var A = this.hash;
        S && (A.contexts[v] = S), E && (A.types[v] = E), T && (A.ids[v] = T), A.values[v] = d;
      },
      pushId: function(v, d, S) {
        v === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (S ? " + " + JSON.stringify("." + S) : "")) : v === "PathExpression" ? this.pushString(d) : v === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: y,
      compileChildren: function(v, d) {
        for (var S = v.children, E = void 0, T = void 0, A = 0, D = S.length; A < D; A++) {
          E = S[A], T = new this.compiler();
          var C = this.matchExistingProgram(E);
          if (C == null) {
            this.context.programs.push("");
            var N = this.context.programs.length;
            E.index = N, E.name = "program" + N, this.context.programs[N] = T.compile(E, d, this.context, !this.precompile), this.context.decorators[N] = T.decorators, this.context.environments[N] = E, this.useDepths = this.useDepths || T.useDepths, this.useBlockParams = this.useBlockParams || T.useBlockParams, E.useDepths = this.useDepths, E.useBlockParams = this.useBlockParams;
          } else
            E.index = C.index, E.name = "program" + C.index, this.useDepths = this.useDepths || C.useDepths, this.useBlockParams = this.useBlockParams || C.useBlockParams;
        }
      },
      matchExistingProgram: function(v) {
        for (var d = 0, S = this.context.environments.length; d < S; d++) {
          var E = this.context.environments[d];
          if (E && E.equals(v))
            return E;
        }
      },
      programExpression: function(v) {
        var d = this.environment.children[v], S = [d.index, "data", d.blockParams];
        return (this.useBlockParams || this.useDepths) && S.push("blockParams"), this.useDepths && S.push("depths"), "container.program(" + S.join(", ") + ")";
      },
      useRegister: function(v) {
        this.registers[v] || (this.registers[v] = !0, this.registers.list.push(v));
      },
      push: function(v) {
        return v instanceof m || (v = this.source.wrap(v)), this.inlineStack.push(v), v;
      },
      pushStackLiteral: function(v) {
        this.push(new m(v));
      },
      pushSource: function(v) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), v && this.source.push(v);
      },
      replaceStack: function(v) {
        var d = ["("], S = void 0, E = void 0, T = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var A = this.popStack(!0);
        if (A instanceof m)
          S = [A.value], d = ["(", S], T = !0;
        else {
          E = !0;
          var D = this.incrStack();
          d = ["((", this.push(D), " = ", A, ")"], S = this.topStack();
        }
        var C = v.call(this, S);
        T || this.popStack(), E && this.stackSlot--, this.push(d.concat(C, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var v = this.inlineStack;
        this.inlineStack = [];
        for (var d = 0, S = v.length; d < S; d++) {
          var E = v[d];
          if (E instanceof m)
            this.compileStack.push(E);
          else {
            var T = this.incrStack();
            this.pushSource([T, " = ", E, ";"]), this.compileStack.push(T);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(v) {
        var d = this.isInline(), S = (d ? this.inlineStack : this.compileStack).pop();
        if (!v && S instanceof m)
          return S.value;
        if (!d) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return S;
      },
      topStack: function() {
        var v = this.isInline() ? this.inlineStack : this.compileStack, d = v[v.length - 1];
        return d instanceof m ? d.value : d;
      },
      contextName: function(v) {
        return this.useDepths && v ? "depths[" + v + "]" : "depth" + v;
      },
      quotedString: function(v) {
        return this.source.quotedString(v);
      },
      objectLiteral: function(v) {
        return this.source.objectLiteral(v);
      },
      aliasable: function(v) {
        var d = this.aliases[v];
        return d ? (d.referenceCount++, d) : (d = this.aliases[v] = this.source.wrap(v), d.aliasable = !0, d.referenceCount = 1, d);
      },
      setupHelper: function(v, d, S) {
        var E = [], T = this.setupHelperArgs(d, v, E, S), A = this.nameLookup("helpers", d, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: E,
          paramsInit: T,
          name: A,
          callParams: [D].concat(E)
        };
      },
      setupParams: function(v, d, S) {
        var E = {}, T = [], A = [], D = [], C = !S, N = void 0;
        C && (S = []), E.name = this.quotedString(v), E.hash = this.popStack(), this.trackIds && (E.hashIds = this.popStack()), this.stringParams && (E.hashTypes = this.popStack(), E.hashContexts = this.popStack());
        var M = this.popStack(), k = this.popStack();
        (k || M) && (E.fn = k || "container.noop", E.inverse = M || "container.noop");
        for (var B = d; B--; )
          N = this.popStack(), S[B] = N, this.trackIds && (D[B] = this.popStack()), this.stringParams && (A[B] = this.popStack(), T[B] = this.popStack());
        return C && (E.args = this.source.generateArray(S)), this.trackIds && (E.ids = this.source.generateArray(D)), this.stringParams && (E.types = this.source.generateArray(A), E.contexts = this.source.generateArray(T)), this.options.data && (E.data = "data"), this.useBlockParams && (E.blockParams = "blockParams"), E;
      },
      setupHelperArgs: function(v, d, S, E) {
        var T = this.setupParams(v, d, S);
        return T.loc = JSON.stringify(this.source.currentLocation), T = this.objectLiteral(T), E ? (this.useRegister("options"), S.push("options"), ["options=", T]) : S ? (S.push(T), "") : T;
      }
    }, (function() {
      for (var b = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), v = y.RESERVED_WORDS = {}, d = 0, S = b.length; d < S; d++)
        v[b[d]] = !0;
    })(), y.isValidJavaScriptVariableName = function(b) {
      return !y.RESERVED_WORDS[b] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(b);
    };
    function _(b, v, d, S, E) {
      var T = v.popStack(), A = d.length;
      for (b && A--; S < A; S++)
        T = v.nameLookup(T, d[S], E);
      return b ? [v.aliasable("container.strict"), "(", T, ", ", v.quotedString(d[S]), ", ", JSON.stringify(v.source.currentLocation), " )"] : T;
    }
    r.default = y, t.exports = r.default;
  })(Jl, Jl.exports)), Jl.exports;
}
var Oy;
function VE() {
  return Oy || (Oy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(A) {
      return A && A.__esModule ? A : { default: A };
    }
    var s = ME(), l = i(s), u = Y0(), f = i(u), p = zE(), h = LE(), m = GE(), y = i(m), _ = X0(), b = i(_), v = V0(), d = i(v), S = l.default.create;
    function E() {
      var A = S();
      return A.compile = function(D, C) {
        return h.compile(D, C, A);
      }, A.precompile = function(D, C) {
        return h.precompile(D, C, A);
      }, A.AST = f.default, A.Compiler = h.Compiler, A.JavaScriptCompiler = y.default, A.Parser = p.parser, A.parse = p.parse, A.parseWithoutProcessing = p.parseWithoutProcessing, A;
    }
    var T = E();
    T.create = E, d.default(T), T.Visitor = b.default, T.default = T, r.default = T, t.exports = r.default;
  })(Ml, Ml.exports)), Ml.exports;
}
var qt = VE();
function Ui(t, r) {
  qt.helpers[t] || qt.registerHelper(t, r);
}
Ui("add", (t, r) => Number(t) + Number(r));
Ui("join", (t, r) => Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "");
Ui("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
Ui("indent", (t, r) => {
  const i = " ".repeat(Math.max(0, Number(t) || 0));
  return String(r ?? "").split(`
`).join(`
${i}`);
});
Ui("json", (t) => JSON.stringify(t));
Ui(
  "xmlEscape",
  (t) => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
);
const Ft = SillyTavern.getContext(), Wn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Er = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First_Message",
  mes_example: "Example_Dialogue"
};
new f0("dumb", {}).getSettings();
async function YE({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: i,
  continueFrom: s,
  session: l,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: p,
  formatDescription: h,
  mainContextList: m,
  includeUserMacro: y,
  maxResponseToken: _,
  targetField: b,
  outputFormat: v
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const d = Ft.extensionSettings.connectionManager?.profiles?.find((B) => B.id === t);
  if (!d)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const S = d.api ? Ft.CONNECT_API_MAP[d.api]?.selected : void 0;
  if (!S)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const E = {};
  E.char = l.fields.name?.value || "{{char}}", E.user = y && xr ? xr : "{{user}}", E.persona = "{{persona}}", E.targetField = b, E.userInstructions = qt.compile(r.trim(), { noEscape: !0 })(E);
  const T = l.draftFields[b]?.prompt ?? l.fields[b]?.prompt ?? "";
  E.fieldSpecificInstructions = qt.compile(T, { noEscape: !0 })({
    ...E,
    char: b === "mes_example" ? "{{char}}" : E.char,
    user: b === "mes_example" ? "{{user}}" : E.user
  }), E.activeFormatInstructions = qt.compile(h.content, { noEscape: !0 })(
    E
  );
  {
    const B = [];
    l.selectedCharacterIndexes.forEach(($) => {
      const I = parseInt($), Z = u[I];
      Z && B.push(Z);
    }), E.characters = B;
  }
  {
    const B = {};
    Object.entries(f).filter(
      ([$, I]) => I.length > 0 && l.selectedWorldNames.includes($) && I.some((Z) => !Z.disable)
    ).forEach(([$, I]) => {
      B[$] = I.filter((Z) => !Z.disable);
    }), E.lorebooks = B;
  }
  {
    const B = {}, $ = {}, I = {}, Z = b.startsWith("alternate_greetings_"), K = mt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(l.fields).forEach(([ge, be]) => {
      let U = !1;
      if (K) {
        const ne = ge.startsWith("alternate_greetings_");
        Z ? U = ne && ge !== b || ge === "first_mes" : U = ne;
      }
      if (!U) {
        const ne = qt.compile(be.value, { noEscape: !0 })({
          ...E,
          char: ge === "mes_example" ? "{{char}}" : E.char,
          user: ge === "mes_example" ? "{{user}}" : E.user
        });
        Wn.includes(ge) ? B[be.label] = ne : ge.startsWith("alternate_greetings_") && ($[ge] = ne);
      }
    }), Object.entries(l.draftFields || {}).forEach(([ge, be]) => {
      I[be.label] = qt.compile(be.value, { noEscape: !0 })(E);
    });
    const pe = {};
    Object.keys(B).length > 0 && (pe.core = B), Object.keys($).length > 0 && (pe.alternate_greetings = $), Object.keys(I).length > 0 && (pe.draft = I), E.fields = pe;
  }
  const A = [];
  {
    for (const B of m) {
      if (B.promptName === "chatHistory") {
        const K = await S0(S, i);
        if (K.warnings && K.warnings.length > 0)
          for (const pe of K.warnings)
            _e("warning", pe);
        A.push(...K.result);
        continue;
      }
      let $ = structuredClone(E);
      B.promptName === "stDescription" && ($.char = "{{char}}", $.user = "{{user}}");
      const I = p[B.promptName];
      if (!I)
        continue;
      const Z = {
        role: B.role,
        content: qt.compile(I.content, { noEscape: !0 })($)
      };
      Z.content = Z.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), Z.content = Z.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), Z.content = Ft.substituteParams(Z.content), Z.content = Z.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), Z.content = Z.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), Z.content && A.push(Z);
    }
    s && A.push({
      role: "assistant",
      content: Hv(s, v)
    });
  }
  const D = xu(), C = await Ft.ConnectionManagerRequestService.sendRequest(
    t,
    A,
    _,
    void 0,
    D
  ), N = s ? Hv(s, v) + C.content : C.content, M = q0(N, v);
  let k;
  if (typeof M == "string")
    k = M;
  else if (typeof M == "object" && M !== null)
    if ("response" in M && typeof M.response == "string")
      k = M.response;
    else {
      const B = Object.values(M)[0];
      k = B ? String(B) : "";
    }
  else
    k = "";
  return k;
}
const Rn = "SillyTavern-Character-Creator-Chat", J0 = "0.3.0", XE = "F_1.13", $E = [
  { value: "default", label: "Default (Use Preset)" },
  { value: "min", label: "Min" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "max", label: "Max" }
], QE = {
  EXTENSION: "charCreator"
}, nu = [
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
], Je = {
  stDescription: zd,
  charDefinitions: Ld,
  lorebookDefinitions: L0,
  xmlFormat: hx,
  jsonFormat: px,
  noneFormat: mx,
  worldInfoCharDefinition: I0,
  existingFieldDefinitions: ao,
  taskDescription: ih,
  outputFormatInstructions: ah,
  personaDescription: gx,
  reviseJsonPrompt: vx,
  reviseXmlPrompt: yx,
  reviseTaskDescription: bx,
  brainstormSystemPrompt: sh
}, W0 = {
  version: J0,
  formatVersion: XE,
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
      content: Je.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: Je.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: Je.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: Je.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: Je.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: Je.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: Je.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: ao,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: ih,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: ah,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: Je.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: Je.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: Je.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: Je.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    },
    brainstormSystemPrompt: {
      content: sh,
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
function Ud(t) {
  const i = t.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return i.map((l, u) => {
    const f = l.replace(/^\d+/, "");
    if (f) {
      const p = s ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return s || (s = !0), p;
    }
    return "";
  }).join("");
}
function xu() {
  const t = mt.getSettings();
  return t.thinkingLevel && t.thinkingLevel !== "default" ? { reasoning_effort: t.thinkingLevel } : {};
}
const mt = new f0(QE.EXTENSION, W0);
async function KE() {
  return new Promise((t, r) => {
    mt.initializeSettings({
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
                  content: Je.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: Je.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: Je.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: Je.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: Je.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: Je.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: Je.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: ao,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: ih,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: ah,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: Je.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Generic Prompt Presets
              promptPreset: i?.promptPreset ?? "default",
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
              showSaveAsWorldInfoEntry: {
                show: i?.showSaveAsWorldInfoEntry?.show ?? !1
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
                  content: Je.personaDescription,
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
            return await _e("info", `[${Rn}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: Je.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: Je.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: Je.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: ao,
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
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = zd), s;
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
              content: Je.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: Je.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: Je.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Ld), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = L0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = ao), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = zd), s;
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
              content: sh,
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
        },
        {
          from: "F_1.11",
          to: "F_1.12",
          action(i) {
            const s = structuredClone(i);
            return s.prompts?.reviseXmlPrompt?.isDefault !== !1 && (s.prompts.reviseXmlPrompt = {
              content: Je.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }), s;
          }
        },
        {
          from: "F_1.12",
          to: "F_1.13",
          action(i) {
            const s = structuredClone(i);
            return i.prompts?.charDefinitions?.isDefault && (s.prompts.charDefinitions.content = Ld), i.prompts?.worldInfoCharDefinition?.isDefault && (s.prompts.worldInfoCharDefinition.content = I0), s;
          }
        }
      ]
    }).then((i) => {
      t();
    }).catch((i) => {
      console.error(`[${Rn}] Error initializing settings:`, i), _e("error", `[${Rn}] Failed to initialize settings: ${i.message}`), Ft.Popup.show.confirm(
        `[${Rn}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s ? (mt.resetSettings(), _e("success", `[${Rn}] Settings reset. Reloading may be required.`)) : _e("warning", `[${Rn}] Continuing with default settings for this session.`);
      }).catch((s) => {
        console.error(`[${Rn}] Failed to show settings reset prompt:`, s);
      }).finally(() => t());
    });
  });
}
const me = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = V.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ x.jsx("button", { className: l, ...s, children: t });
}, JE = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...l }) => {
  const u = V.useMemo(() => {
    const f = [];
    return i || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [i, r, s]);
  if (s === "checkbox") {
    const f = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ x.jsxs("label", { className: f, children: [
      /* @__PURE__ */ x.jsx("input", { type: "checkbox", ...l }),
      t && /* @__PURE__ */ x.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ x.jsx("input", { type: s, className: u, ...l });
}, Eu = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = V.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ x.jsx("select", { className: l, ...s, children: t });
}, $t = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = V.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ x.jsx("textarea", { className: l, ...s, children: t });
};
var WE = u0(), _n = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(_n || {}), Wr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Wr || {});
const eC = SillyTavern.getContext(), Li = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: l = !1,
  onComplete: u
}) => {
  var f;
  const p = V.useRef(null), h = V.useRef(null), [m, y] = V.useState(!1), [_, b] = V.useState(null), v = V.useRef(eC.uuidv4()), d = V.useRef({
    id: v.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  V.useEffect(() => {
    const A = p.current;
    if (!A) return;
    const D = (C) => {
      C.preventDefault(), l || S(Wr.CANCELLED);
    };
    return A.addEventListener("cancel", D), d.current.dlg = A, d.current.mainInput = h.current, wi.util.popups.push(d.current), A.showModal || (A.classList.add("poly_dialog"), lv.registerDialog(A), new ResizeObserver((C) => {
      for (const N of C)
        lv.reposition(N.target);
    }).observe(A)), A.showModal(), Yf(), () => {
      ov(wi.util.popups, d.current), Yf(), A.removeEventListener("cancel", D);
    };
  }, []);
  const S = async (A) => {
    var D, C;
    let N = A;
    if (r === _n.INPUT && (A >= Wr.AFFIRMATIVE ? N = (D = h.current) == null ? void 0 : D.value : A === Wr.NEGATIVE ? N = !1 : A === Wr.CANCELLED ? N = null : N = !1), (C = s.customInputs) != null && C.length) {
      const k = new Map(
        s.customInputs.map((B) => {
          var $;
          const I = ($ = p.current) == null ? void 0 : $.querySelector(`#${B.id}`);
          return [I.id, I.checked];
        })
      );
      d.current.inputResults = k;
    }
    if (d.current.result = A, d.current.value = N, s.onClosing && !await s.onClosing(d.current)) {
      y(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    y(!1), wi.util.lastResult = {
      value: N,
      result: A,
      inputResults: d.current.inputResults
    };
    const M = p.current;
    M && (M.setAttribute("closing", ""), Yf(), b2(M, async () => {
      var k;
      if (M.close(), s.onClose && await s.onClose(d.current), ov(wi.util.popups, d.current), wi.util.popups.length > 0) {
        const B = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), $ = B?.getAttribute("data-id"), I = wi.util.popups.find((Z) => Z.id === $);
        I && I.lastFocus && I.lastFocus.focus();
      }
      u(N);
    }));
  }, E = (A) => {
    A.target instanceof HTMLElement && A.target !== p.current && (b(A.target), d.current.lastFocus = A.target);
  }, T = async (A) => {
  };
  return WE.createPortal(
    /* @__PURE__ */ x.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const A = ["popup"];
          return s.wide && A.push("wide_dialogue_popup"), s.wider && A.push("wider_dialogue_popup"), s.large && A.push("large_dialogue_popup"), s.transparent && A.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && A.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && A.push("vertical_scrolling_dialogue_popup"), s.animation && A.push(`popup--animation-${s.animation}`), A.join(" ");
        })(),
        "data-id": v.current,
        onKeyDown: T,
        onFocus: E,
        children: /* @__PURE__ */ x.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ x.jsx("div", { className: "popup-content", children: t }),
          r === _n.INPUT && /* @__PURE__ */ x.jsx(
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
          s.customInputs && /* @__PURE__ */ x.jsx("div", { className: "popup-inputs", children: s.customInputs.map((A) => /* @__PURE__ */ x.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: A.id, children: [
            /* @__PURE__ */ x.jsx("input", { type: "checkbox", id: A.id, defaultChecked: A.defaultState }),
            /* @__PURE__ */ x.jsx("span", { "data-i18n": A.label, children: A.label }),
            A.tooltip && /* @__PURE__ */ x.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: A.tooltip,
                "data-i18n": `[title]${A.tooltip}`
              }
            )
          ] }, A.id)) }),
          r !== _n.DISPLAY && /* @__PURE__ */ x.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((A, D) => {
              const C = typeof A == "string" ? { text: A, result: D + 2 } : A;
              return /* @__PURE__ */ x.jsx(
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
            r !== _n.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ x.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => S(Wr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== _n.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ x.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => S(Wr.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === _n.DISPLAY && /* @__PURE__ */ x.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => S(Wr.CANCELLED),
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
}, Vs = (t, r, i) => {
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
}, Sr = SillyTavern.getContext(), e1 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: l,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, h] = V.useState(t ?? ""), [m, y] = V.useState(Date.now()), { isEnabled: _, profiles: b, connectApiMap: v } = V.useMemo(() => {
    var E, T;
    return (E = Sr.extensionSettings.disabledExtensions) != null && E.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((T = Sr.extensionSettings.connectionManager) == null ? void 0 : T.profiles) ?? [],
      connectApiMap: Sr.CONNECT_API_MAP
    };
  }, [m]);
  V.useEffect(() => {
    if (!_) return;
    const E = (D) => {
      Vs(D, r, v) && (y(Date.now()), l?.(D));
    }, T = (D, C) => {
      const N = Vs(D, r, v), M = Vs(C, r, v);
      (N || M) && y(Date.now()), u?.(D, C), p === D.id && !M && (h(""), s?.(void 0));
    }, A = (D) => {
      Vs(D, r, v) && (y(Date.now()), f?.(D), p === D.id && (h(""), s?.(void 0)));
    };
    return Sr.eventSource.on("CONNECTION_PROFILE_CREATED", E), Sr.eventSource.on("CONNECTION_PROFILE_UPDATED", T), Sr.eventSource.on("CONNECTION_PROFILE_DELETED", A), () => {
      Sr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", E), Sr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", T), Sr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", A);
    };
  }, [_, p, r, v, s, l, u, f]);
  const d = V.useMemo(() => {
    if (!_) return [];
    const E = b.filter((A) => Vs(A, r, v)), T = {};
    for (const [A, D] of Object.entries(r))
      T[A] = { label: D, profiles: [] };
    for (const A of E) {
      const D = v[A.api];
      T[D.selected] && T[D.selected].profiles.push(A);
    }
    for (const A of Object.values(T))
      A.profiles.sort((D, C) => (D.name ?? "").localeCompare(C.name ?? ""));
    return Object.values(T).filter((A) => A.profiles.length > 0);
  }, [_, b, r, v]), S = V.useCallback(
    (E) => {
      const T = E.target.value;
      h(T);
      const A = b.find((D) => D.id === T);
      s?.(A);
    },
    [b, s]
  );
  return _ ? /* @__PURE__ */ x.jsxs(Eu, { value: p, onChange: S, children: [
    /* @__PURE__ */ x.jsx("option", { value: "", children: i }),
    d.map((E) => /* @__PURE__ */ x.jsx("optgroup", { label: E.label, children: E.profiles.map((T) => /* @__PURE__ */ x.jsx("option", { value: T.id, children: T.name }, T.id)) }, E.label))
  ] }) : /* @__PURE__ */ x.jsx(Eu, { disabled: !0, value: "", children: /* @__PURE__ */ x.jsx("option", { children: "Connection Manager disabled" }) });
}, tC = pu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: l, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: h,
      enabled: m,
      canDelete: y = !0,
      canToggle: _ = !0,
      showSelect: b = !0,
      canSelect: v = !0,
      selectOptions: d = [],
      selectValue: S
    } = t, E = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !m ? 0.6 : 1
    }, T = { cursor: "pointer", flexShrink: 0 }, A = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ x.jsxs("li", { className: "sortable-list-item", style: E, "data-id": p, children: [
      /* @__PURE__ */ x.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ x.jsx(
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
      s && b && v && /* @__PURE__ */ x.jsx(
        Eu,
        {
          value: S,
          onChange: (D) => f(p, D.target.value),
          disabled: !m,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ x.jsx("option", { disabled: !0, children: "--" }) : d.map((D) => /* @__PURE__ */ x.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!b || !v) && /* @__PURE__ */ x.jsx("span", { style: A }),
      r && _ && /* @__PURE__ */ x.jsx(
        me,
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
          onClick: () => l(p)
        }
      ),
      r && !_ && /* @__PURE__ */ x.jsx("span", { style: A }),
      i && y && /* @__PURE__ */ x.jsx(
        me,
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
      i && !y && /* @__PURE__ */ x.jsx("span", { style: { ...A, marginRight: 0 } })
    ] });
  }
), nC = ({
  items: t,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: s = !1,
  showSelectInput: l = !1,
  sortableJsOptions: u = {}
}) => {
  const f = V.useRef(null), p = V.useRef(null);
  V.useEffect(() => (f.current && (p.current = Me.create(f.current, {
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
      const { oldIndex: b, newIndex: v } = _;
      if (b === void 0 || v === void 0 || b === v)
        return;
      const d = Array.from(t), [S] = d.splice(b, 1);
      d.splice(v, 0, S), r(d);
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
    r(t.map((v) => v.id === _ ? { ...v, selectValue: b } : v));
  };
  return /* @__PURE__ */ x.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ x.jsx(
    tC,
    {
      item: _,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: l,
      onToggle: h,
      onDelete: m,
      onSelectChange: y
    },
    _.id
  )) });
}, ru = ({
  items: t,
  value: r,
  onChange: i,
  placeholder: s = "Select items...",
  closeOnSelect: l = !1,
  multiple: u = !0,
  disabled: f = !1,
  onBeforeSelection: p,
  enableSearch: h = !1,
  searchPlaceholder: m = "Search...",
  searchNoResultsText: y = "No results found",
  searchFuseOptions: _,
  inputClasses: b,
  containerClasses: v
}) => {
  const [d, S] = V.useState(!1), [E, T] = V.useState(""), A = V.useRef(null);
  V.useEffect(() => {
    const k = (B) => {
      A.current && !A.current.contains(B.target) && S(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), V.useEffect(() => {
    d || T("");
  }, [d]);
  const D = V.useMemo(() => {
    if (!h) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ..._
    };
    return new Bi(t, k);
  }, [t, h, _]), C = V.useMemo(() => !h || !E.trim() || !D ? t : D.search(E.trim()).map((k) => k.item), [t, E, h, D]), N = async (k) => {
    let B;
    u ? B = r.includes(k) ? r.filter(($) => $ !== k) : [...r, k] : B = r.includes(k) ? [] : [k], !(p && !await Promise.resolve(p(r, B))) && (i(B), l && S(!1));
  }, M = V.useMemo(() => {
    var k;
    return r.length === 0 ? s : r.length === 1 ? ((k = t.find((B) => B.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ x.jsxs(
    "div",
    {
      ref: A,
      className: `fancy-dropdown-container ${v ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ x.jsxs(
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
              /* @__PURE__ */ x.jsx("span", { className: "fancy-dropdown-trigger-text", children: M }),
              /* @__PURE__ */ x.jsx("i", { className: `fas ${d ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        d && /* @__PURE__ */ x.jsxs(
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
              h && /* @__PURE__ */ x.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ x.jsx(
                    JE,
                    {
                      type: "text",
                      placeholder: m,
                      value: E,
                      onChange: (k) => T(k.target.value),
                      autoFocus: !0,
                      className: b
                    }
                  )
                }
              ),
              /* @__PURE__ */ x.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: C.length > 0 ? C.map((k) => /* @__PURE__ */ x.jsx(
                rC,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: N
                },
                k.value
              )) : /* @__PURE__ */ x.jsx(
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
}, rC = pu.memo(({ item: t, isSelected: r, onClick: i }) => {
  const [s, l] = V.useState(!1);
  return /* @__PURE__ */ x.jsxs(
    "li",
    {
      onClick: () => i(t.value),
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
        /* @__PURE__ */ x.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ x.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), yd = SillyTavern.getContext(), Cu = ({
  value: t,
  items: r,
  readOnlyValues: i = [],
  label: s,
  onChange: l,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: p = !1,
  enableDelete: h = !1,
  onCreate: m,
  onRename: y,
  onDelete: _,
  buttons: b
}) => {
  const v = V.useMemo(() => r.find((A) => A.value === t), [r, t]), d = V.useCallback((A) => A ? i.includes(A) : !1, [i]), S = async () => {
    const A = await yd.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!A || A.trim() === "") return;
    const D = A.trim();
    if (r.some((N) => N.value === D)) {
      await _e("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: D, label: D };
    if (m) {
      const N = await Promise.resolve(m(D));
      if (!N.confirmed) return;
      N.value && (typeof N.value == "string" ? C = { value: N.value, label: N.value } : C = N.value);
    }
    u([...r, C]), l(C.value, t);
  }, E = async () => {
    if (!v) {
      await _e("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(v.value)) {
      await _e("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const A = await yd.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${v.label}":`,
      v.label
    );
    if (!A || A.trim() === "" || A.trim() === v.value) return;
    const D = A.trim();
    if (r.some((M) => M.value === D)) {
      await _e("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: D, label: D };
    if (y) {
      const M = await Promise.resolve(y(v.value, D));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? C = { value: M.value, label: M.value } : C = M.value);
    }
    const N = r.map((M) => M.value === v.value ? C : M);
    u(N), l(C.value, t);
  }, T = async () => {
    var A;
    if (!v) {
      await _e("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(v.value)) {
      await _e("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await yd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${v.label}"?`
    ) || _ && !await Promise.resolve(_(v.value)))
      return;
    const D = r.findIndex((M) => M.value === v.value), C = r.filter((M) => M.value !== v.value);
    u(C);
    let N;
    if (C.length > 0) {
      const M = Math.min(D, C.length - 1);
      N = (A = C[M]) == null ? void 0 : A.value;
    }
    l(N, t);
  };
  return /* @__PURE__ */ x.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ x.jsx(Eu, { value: t ?? "", onChange: (A) => l(A.target.value, t), children: r.map((A) => /* @__PURE__ */ x.jsx("option", { value: A.value, children: A.label }, A.value)) }),
    f && /* @__PURE__ */ x.jsx(
      me,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: S,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ x.jsx(
      me,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: E,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ x.jsx(
      me,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: T,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    b?.map((A) => /* @__PURE__ */ x.jsx(
      me,
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
}, t1 = () => {
  const [, t] = V.useState(0);
  return V.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, bd = SillyTavern.getContext(), aC = () => {
  const t = t1(), r = mt.getSettings(), [i, s] = V.useState(nu[0]), l = V.useCallback(
    (C) => {
      const N = mt.getSettings();
      C(N), mt.saveSettings(), t();
    },
    [t]
  ), u = V.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((C) => ({ value: C, label: C })),
    [r.mainContextTemplatePresets]
  ), f = V.useMemo(
    () => Object.entries(r.prompts).map(([C, N]) => ({
      value: C,
      label: `${N.label} (${C})`
    })),
    [r.prompts]
  ), p = V.useMemo(() => {
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
    l((N) => {
      N.mainContextTemplatePreset = C ?? "default";
    });
  }, m = (C) => {
    l((N) => {
      const M = {};
      C.forEach((k) => {
        M[k.value] = N.mainContextTemplatePresets[k.value] ?? structuredClone(
          N.mainContextTemplatePresets[N.mainContextTemplatePreset] ?? N.mainContextTemplatePresets.default
        );
      }), N.mainContextTemplatePresets = M;
    });
  }, y = (C) => {
    l((N) => {
      const M = C.map(($) => ({
        promptName: $.id,
        enabled: $.enabled,
        role: $.selectValue ?? "user"
      })), k = {
        ...N.mainContextTemplatePresets[N.mainContextTemplatePreset],
        prompts: M
      }, B = {
        ...N.mainContextTemplatePresets,
        [N.mainContextTemplatePreset]: k
      };
      N.mainContextTemplatePresets = B;
    });
  }, _ = async () => {
    await bd.Popup.show.confirm("Restore default", "Are you sure?") && l((N) => {
      N.mainContextTemplatePresets = {
        ...N.mainContextTemplatePresets,
        default: structuredClone(W0.mainContextTemplatePresets.default)
      }, N.mainContextTemplatePreset === "default" ? t() : N.mainContextTemplatePreset = "default";
    });
  }, b = (C) => {
    l((N) => {
      const M = C.map((I) => I.value);
      Object.keys(N.prompts).filter((I) => !M.includes(I)).forEach((I) => {
        Object.values(N.mainContextTemplatePresets).forEach((Z) => {
          Z.prompts = Z.prompts.filter((K) => K.promptName !== I);
        });
      });
      const $ = {};
      C.forEach((I) => {
        $[I.value] = N.prompts[I.value] ?? { content: "", isDefault: !1, label: I.label };
      }), N.prompts = $;
    });
  }, v = (C) => {
    const N = Ud(C);
    return N ? r.prompts[N] ? (_e("error", `Prompt name already exists: ${N}`), { confirmed: !1 }) : (l((M) => {
      M.prompts = {
        ...M.prompts,
        [N]: { content: M.prompts[i]?.content ?? "", isDefault: !1, label: C }
      };
      const k = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([B, $]) => [
          B,
          {
            ...$,
            prompts: [...$.prompts, { enabled: !0, promptName: N, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = k;
    }), s(N), { confirmed: !0, value: N }) : (_e("error", `Invalid prompt name: ${C}`), { confirmed: !1 });
  }, d = (C, N) => {
    const M = Ud(N);
    return M ? r.prompts[M] ? (_e("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (l((k) => {
      const { [C]: B, ...$ } = k.prompts;
      k.prompts = {
        ...$,
        [M]: { ...B, label: N }
      };
      const I = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([Z, K]) => [
          Z,
          {
            ...K,
            prompts: K.prompts.map((pe) => pe.promptName === C ? { ...pe, promptName: M } : pe)
          }
        ])
      );
      k.mainContextTemplatePresets = I;
    }), s(M), { confirmed: !0, value: M }) : (_e("error", `Invalid prompt name: ${N}`), { confirmed: !1 });
  }, S = (C) => {
    const N = C.target.value;
    l((M) => {
      const k = M.prompts[i];
      k && (M.prompts = {
        ...M.prompts,
        [i]: {
          ...k,
          // Copy existing properties
          content: N,
          isDefault: nu.includes(i) ? Je[i] === N : !1
        }
      });
    });
  }, E = async () => {
    const C = r.prompts[i];
    if (!C) return _e("warning", "No prompt selected.");
    await bd.Popup.show.confirm("Restore Default", `Restore default for "${C.label}"?`) && l((M) => {
      M.prompts = {
        ...M.prompts,
        [i]: {
          ...M.prompts[i],
          content: Je[i]
        }
      };
    });
  }, T = async () => {
    await bd.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (mt.resetSettings(), t(), _e("success", "Settings have been reset."));
  }, A = r.prompts[i], D = nu.includes(i);
  return /* @__PURE__ */ x.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ x.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ x.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ x.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ x.jsx(
          me,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: _
          }
        )
      ] }),
      /* @__PURE__ */ x.jsx(
        Cu,
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
      /* @__PURE__ */ x.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ x.jsx(
        nC,
        {
          items: p,
          onItemsChange: y,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ x.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ x.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ x.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ x.jsx("span", { children: "Prompt Templates" }),
        D && /* @__PURE__ */ x.jsx(
          me,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: E
          }
        )
      ] }),
      /* @__PURE__ */ x.jsx(
        Cu,
        {
          label: "Prompt",
          items: f,
          value: i,
          readOnlyValues: nu,
          onChange: (C) => s(C ?? ""),
          onItemsChange: b,
          onCreate: v,
          onRename: d,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ x.jsx(
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
    /* @__PURE__ */ x.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ x.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "checkbox",
          checked: r.showSaveAsWorldInfoEntry.show,
          onChange: (C) => l((N) => {
            N.showSaveAsWorldInfoEntry.show = C.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ x.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ x.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ x.jsxs(me, { className: "danger_button", style: { width: "auto" }, onClick: T, children: [
      /* @__PURE__ */ x.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, Dy = ({
  fieldId: t,
  label: r,
  value: i,
  prompt: s,
  large: l = !1,
  rows: u = 3,
  promptEnabled: f = !0,
  isDraft: p = !1,
  isGenerating: h = !1,
  onValueChange: m,
  onPromptChange: y,
  onGenerate: _,
  onContinue: b,
  onClear: v,
  onCompare: d,
  onDelete: S,
  onOpenReviseSessions: E
}) => /* @__PURE__ */ x.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ x.jsx("label", { children: r }),
  /* @__PURE__ */ x.jsxs("div", { className: `field-container ${l ? "large-field" : ""}`, children: [
    /* @__PURE__ */ x.jsx($t, { value: i, onChange: (T) => m(t, T.target.value), rows: u }),
    /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ x.jsx(me, { onClick: () => _(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ x.jsx(me, { onClick: () => b(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ x.jsx(me, { onClick: () => v(t), title: "Clear field content", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-eraser" }) }),
      E && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ x.jsx(me, { onClick: () => E(t), title: "Revise with AI chat", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && d && /* @__PURE__ */ x.jsx(me, { onClick: () => d(t), title: "Compare with loaded character", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && S && /* @__PURE__ */ x.jsx(me, { onClick: () => S(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ x.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ x.jsx(
    $t,
    {
      value: s,
      onChange: (T) => y(t, T.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), iC = SillyTavern.getContext(), sC = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: l,
  isGenerating: u
}) => {
  const [f, p] = V.useState(0);
  V.useEffect(() => {
    f >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, f]);
  const h = () => {
    const b = [...t, { value: "", prompt: "" }];
    r(b), p(b.length - 1);
  }, m = async () => {
    if (t.length === 0) return;
    if (await iC.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const v = t.filter((d, S) => S !== f);
      r(v);
    }
  }, y = (b, v, d) => {
    r(t.map((S, E) => E === b ? { ...S, [v]: d } : S));
  }, _ = t[f];
  return /* @__PURE__ */ x.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ x.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ x.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((b, v) => /* @__PURE__ */ x.jsxs(
            me,
            {
              onClick: () => p(v),
              className: `menu_button ${v === f ? "active" : ""}`,
              children: [
                "Greeting ",
                v + 1
              ]
            },
            v
          ))
        }
      ),
      /* @__PURE__ */ x.jsxs(me, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ x.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ x.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ x.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ x.jsx(
          $t,
          {
            value: _?.value ?? "",
            onChange: (b) => y(f, "value", b.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ x.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ x.jsx(
          $t,
          {
            value: _?.prompt ?? "",
            onChange: (b) => y(f, "prompt", b.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ x.jsx(me, { onClick: () => i(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ x.jsx(me, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ x.jsx(
          me,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ x.jsx(me, { onClick: () => l(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ x.jsx(
          me,
          {
            onClick: m,
            disabled: u,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        )
      ] })
    ] })
  ] });
};
var aa = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.diff = function(r, i, s) {
      s === void 0 && (s = {});
      var l;
      typeof s == "function" ? (l = s, s = {}) : "callback" in s && (l = s.callback);
      var u = this.castInput(r, s), f = this.castInput(i, s), p = this.removeEmpty(this.tokenize(u, s)), h = this.removeEmpty(this.tokenize(f, s));
      return this.diffWithOptionsObj(p, h, s, l);
    }, t.prototype.diffWithOptionsObj = function(r, i, s, l) {
      var u = this, f, p = function(C) {
        if (C = u.postProcess(C, s), l) {
          setTimeout(function() {
            l(C);
          }, 0);
          return;
        } else
          return C;
      }, h = i.length, m = r.length, y = 1, _ = h + m;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var b = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, v = Date.now() + b, d = [{ oldPos: -1, lastComponent: void 0 }], S = this.extractCommon(d[0], i, r, 0, s);
      if (d[0].oldPos + 1 >= m && S + 1 >= h)
        return p(this.buildValues(d[0].lastComponent, i, r));
      var E = -1 / 0, T = 1 / 0, A = function() {
        for (var C = Math.max(E, -y); C <= Math.min(T, y); C += 2) {
          var N = void 0, M = d[C - 1], k = d[C + 1];
          M && (d[C - 1] = void 0);
          var B = !1;
          if (k) {
            var $ = k.oldPos - C;
            B = k && 0 <= $ && $ < h;
          }
          var I = M && M.oldPos + 1 < m;
          if (!B && !I) {
            d[C] = void 0;
            continue;
          }
          if (!I || B && M.oldPos < k.oldPos ? N = u.addToPath(k, !0, !1, 0, s) : N = u.addToPath(M, !1, !0, 1, s), S = u.extractCommon(N, i, r, C, s), N.oldPos + 1 >= m && S + 1 >= h)
            return p(u.buildValues(N.lastComponent, i, r)) || !0;
          d[C] = N, N.oldPos + 1 >= m && (T = Math.min(T, C - 1)), S + 1 >= h && (E = Math.max(E, C + 1));
        }
        y++;
      };
      if (l)
        (function C() {
          setTimeout(function() {
            if (y > _ || Date.now() > v)
              return l(void 0);
            A() || C();
          }, 0);
        })();
      else
        for (; y <= _ && Date.now() <= v; ) {
          var D = A();
          if (D)
            return D;
        }
    }, t.prototype.addToPath = function(r, i, s, l, u) {
      var f = r.lastComponent;
      return f && !u.oneChangePerToken && f.added === i && f.removed === s ? {
        oldPos: r.oldPos + l,
        lastComponent: { count: f.count + 1, added: i, removed: s, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + l,
        lastComponent: { count: 1, added: i, removed: s, previousComponent: f }
      };
    }, t.prototype.extractCommon = function(r, i, s, l, u) {
      for (var f = i.length, p = s.length, h = r.oldPos, m = h - l, y = 0; m + 1 < f && h + 1 < p && this.equals(s[h + 1], i[m + 1], u); )
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
      for (var l = [], u; r; )
        l.push(r), u = r.previousComponent, delete r.previousComponent, r = u;
      l.reverse();
      for (var f = l.length, p = 0, h = 0, m = 0; p < f; p++) {
        var y = l[p];
        if (y.removed)
          y.value = this.join(s.slice(m, m + y.count)), m += y.count;
        else {
          if (!y.added && this.useLongestToken) {
            var _ = i.slice(h, h + y.count);
            _ = _.map(function(b, v) {
              var d = s[m + v];
              return d.length > b.length ? d : b;
            }), y.value = this.join(_);
          } else
            y.value = this.join(i.slice(h, h + y.count));
          h += y.count, y.added || (m += y.count);
        }
      }
      return l;
    }, t;
  })()
), oC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), lC = (
  /** @class */
  (function(t) {
    oC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(aa)
);
new lC();
function My(t, r) {
  var i;
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[i] != r[i])
      return t.slice(0, i);
  return t.slice(0, i);
}
function ky(t, r) {
  var i;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[t.length - (i + 1)] != r[r.length - (i + 1)])
      return t.slice(-i);
  return t.slice(-i);
}
function Hd(t, r, i) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + t.slice(r.length);
}
function qd(t, r, i) {
  if (!r)
    return t + i;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + i;
}
function Ys(t, r) {
  return Hd(t, r, "");
}
function au(t, r) {
  return qd(t, r, "");
}
function jy(t, r) {
  return r.slice(0, uC(t, r));
}
function uC(t, r) {
  var i = 0;
  t.length > r.length && (i = t.length - r.length);
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
  for (var p = i; p < t.length; p++) {
    for (; u > 0 && t[p] != r[u]; )
      u = l[u];
    t[p] == r[u] && u++;
  }
  return u;
}
function Xs(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function Jr(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var n1 = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), wu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", cC = new RegExp("[".concat(wu, "]+|\\s+|[^").concat(wu, "]"), "ug"), fC = (
  /** @class */
  (function(t) {
    n1(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(i, s, l) {
      return l.ignoreCase && (i = i.toLowerCase(), s = s.toLowerCase()), i.trim() === s.trim();
    }, r.prototype.tokenize = function(i, s) {
      s === void 0 && (s = {});
      var l;
      if (s.intlSegmenter) {
        var u = s.intlSegmenter;
        if (u.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        l = Array.from(u.segment(i), function(h) {
          return h.segment;
        });
      } else
        l = i.match(cC) || [];
      var f = [], p = null;
      return l.forEach(function(h) {
        /\s/.test(h) ? p == null ? f.push(h) : f.push(f.pop() + h) : p != null && /\s/.test(p) ? f[f.length - 1] == p ? f.push(f.pop() + h) : f.push(p + h) : f.push(h), p = h;
      }), f;
    }, r.prototype.join = function(i) {
      return i.map(function(s, l) {
        return l == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(i, s) {
      if (!i || s.oneChangePerToken)
        return i;
      var l = null, u = null, f = null;
      return i.forEach(function(p) {
        p.added ? u = p : p.removed ? f = p : ((u || f) && Ry(l, f, u, p), l = p, u = null, f = null);
      }), (u || f) && Ry(l, f, u, null), i;
    }, r;
  })(aa)
), dC = new fC();
function r1(t, r, i) {
  return dC.diff(t, r, i);
}
function Ry(t, r, i, s) {
  if (r && i) {
    var l = Jr(r.value), u = Xs(r.value), f = Jr(i.value), p = Xs(i.value);
    if (t) {
      var h = My(l, f);
      t.value = qd(t.value, f, h), r.value = Ys(r.value, h), i.value = Ys(i.value, h);
    }
    if (s) {
      var m = ky(u, p);
      s.value = Hd(s.value, p, m), r.value = au(r.value, m), i.value = au(i.value, m);
    }
  } else if (i) {
    if (t) {
      var y = Jr(i.value);
      i.value = i.value.substring(y.length);
    }
    if (s) {
      var y = Jr(s.value);
      s.value = s.value.substring(y.length);
    }
  } else if (t && s) {
    var _ = Jr(s.value), b = Jr(r.value), v = Xs(r.value), d = My(_, b);
    r.value = Ys(r.value, d);
    var S = ky(Ys(_, d), v);
    r.value = au(r.value, S), s.value = Hd(s.value, _, S), t.value = qd(t.value, _, _.slice(0, _.length - S.length));
  } else if (s) {
    var E = Jr(s.value), T = Xs(r.value), A = jy(T, E);
    r.value = au(r.value, A);
  } else if (t) {
    var D = Xs(t.value), C = Jr(r.value), A = jy(D, C);
    r.value = Ys(r.value, A);
  }
}
var hC = (
  /** @class */
  (function(t) {
    n1(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(wu, "]+|[^\\S\\n\\r]+|[^").concat(wu, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(aa)
);
new hC();
var pC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), mC = (
  /** @class */
  (function(t) {
    pC(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = a1, i;
    }
    return r.prototype.equals = function(i, s, l) {
      return l.ignoreWhitespace ? ((!l.newlineIsToken || !i.includes(`
`)) && (i = i.trim()), (!l.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : l.ignoreNewlineAtEof && !l.newlineIsToken && (i.endsWith(`
`) && (i = i.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), t.prototype.equals.call(this, i, s, l);
    }, r;
  })(aa)
);
new mC();
function a1(t, r) {
  r.stripTrailingCr && (t = t.replace(/\r\n/g, `
`));
  var i = [], s = t.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var l = 0; l < s.length; l++) {
    var u = s[l];
    l % 2 && !r.newlineIsToken ? i[i.length - 1] += u : i.push(u);
  }
  return i;
}
var gC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), vC = (
  /** @class */
  (function(t) {
    gC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(aa)
);
new vC();
var yC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), bC = (
  /** @class */
  (function(t) {
    yC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(aa)
);
new bC();
var _C = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), SC = (
  /** @class */
  (function(t) {
    _C(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = a1, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, s) {
      var l = s.undefinedReplacement, u = s.stringifyReplacer, f = u === void 0 ? function(p, h) {
        return typeof h > "u" ? l : h;
      } : u;
      return typeof i == "string" ? i : JSON.stringify(Fd(i, null, null, f), null, "  ");
    }, r.prototype.equals = function(i, s, l) {
      return t.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), l);
    }, r;
  })(aa)
);
new SC();
function Fd(t, r, i, s, l) {
  r = r || [], i = i || [], s && (t = s(l === void 0 ? "" : l, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return i[u];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), i.push(f), u = 0; u < t.length; u += 1)
      f[u] = Fd(t[u], r, i, s, String(u));
    return r.pop(), i.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, i.push(f);
    var p = [], h;
    for (h in t)
      Object.prototype.hasOwnProperty.call(t, h) && p.push(h);
    for (p.sort(), u = 0; u < p.length; u += 1)
      h = p[u], f[h] = Fd(t[h], r, i, s, h);
    r.pop(), i.pop();
  } else
    f = t;
  return f;
}
var xC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, l) {
      s.__proto__ = l;
    } || function(s, l) {
      for (var u in l) Object.prototype.hasOwnProperty.call(l, u) && (s[u] = l[u]);
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
})(), EC = (
  /** @class */
  (function(t) {
    xC(r, t);
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
  })(aa)
);
new EC();
const CC = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = V.useMemo(() => {
    const l = r1(t, r);
    let u = "", f = "";
    return l.forEach((p) => {
      const m = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += m), p.removed || (f += m);
    }), { originalHtml: u, newHtml: f };
  }, [t, r]);
  return /* @__PURE__ */ x.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ x.jsxs("h3", { children: [
      "Compare Changes for: ",
      i
    ] }),
    /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ x.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ x.jsx("h4", { children: "Loaded Character Content" }),
        /* @__PURE__ */ x.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ x.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ x.jsx("h4", { children: "Current Content" }),
        /* @__PURE__ */ x.jsx(
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
  const l = i?.Parent ?? Object;
  class u extends l {
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
class Ii extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class i1 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const s1 = {};
function za(t) {
  return s1;
}
function o1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, l]) => r.indexOf(+s) === -1).map(([s, l]) => l);
}
function Zd(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function uh(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function ch(t) {
  return t == null;
}
function fh(t) {
  const r = t.startsWith("^") ? 1 : 0, i = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, i);
}
function wC(t, r) {
  const i = (t.toString().split(".")[1] || "").length, s = r.toString();
  let l = (s.split(".")[1] || "").length;
  if (l === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (l = Number.parseInt(h[1]));
  }
  const u = i > l ? i : l, f = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const zy = Symbol("evaluating");
function it(t, r, i) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== zy)
        return s === void 0 && (s = zy, s = i()), s;
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
function Ia(t, r, i) {
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
function Ly(t) {
  return JSON.stringify(t);
}
const l1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Au(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const AC = uh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function io(t) {
  if (Au(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(Au(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function u1(t) {
  return io(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const NC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Mu(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ia(t, r, i) {
  const s = new t._zod.constr(r ?? t._zod.def);
  return (!r || i?.parent) && (s._zod.parent = t), s;
}
function Ae(t) {
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
function TC(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const OC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function DC(t, r) {
  const i = t._zod.def, s = Pa(t._zod.def, {
    get shape() {
      const l = {};
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (l[u] = i.shape[u]);
      }
      return Ia(this, "shape", l), l;
    },
    checks: []
  });
  return ia(t, s);
}
function MC(t, r) {
  const i = t._zod.def, s = Pa(t._zod.def, {
    get shape() {
      const l = { ...t._zod.def.shape };
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete l[u];
      }
      return Ia(this, "shape", l), l;
    },
    checks: []
  });
  return ia(t, s);
}
function kC(t, r) {
  if (!io(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = t._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const l = Pa(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape, ...r };
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return ia(t, l);
}
function jC(t, r) {
  if (!io(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...r };
      return Ia(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return ia(t, i);
}
function RC(t, r) {
  const i = Pa(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...r._zod.def.shape };
      return Ia(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ia(t, i);
}
function zC(t, r, i) {
  const s = Pa(r._zod.def, {
    get shape() {
      const l = r._zod.def.shape, u = { ...l };
      if (i)
        for (const f in i) {
          if (!(f in l))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = t ? new t({
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
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return ia(r, s);
}
function LC(t, r, i) {
  const s = Pa(r._zod.def, {
    get shape() {
      const l = r._zod.def.shape, u = { ...l };
      if (i)
        for (const f in i) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = new t({
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
      return Ia(this, "shape", u), u;
    },
    checks: []
  });
  return ia(r, s);
}
function Ri(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let i = r; i < t.issues.length; i++)
    if (t.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function c1(t, r) {
  return r.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(t), i;
  });
}
function iu(t) {
  return typeof t == "string" ? t : t?.message;
}
function La(t, r, i) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const l = iu(t.inst?._zod.def?.error?.(t)) ?? iu(r?.error?.(t)) ?? iu(i.customError?.(t)) ?? iu(i.localeError?.(t)) ?? "Invalid input";
    s.message = l;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function dh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function so(...t) {
  const [r, i, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: s
  } : { ...r };
}
const f1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Zd, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, d1 = te("$ZodError", f1), h1 = te("$ZodError", f1, { Parent: Error });
function IC(t, r = (i) => i.message) {
  const i = {}, s = [];
  for (const l of t.issues)
    l.path.length > 0 ? (i[l.path[0]] = i[l.path[0]] || [], i[l.path[0]].push(r(l))) : s.push(r(l));
  return { formErrors: s, fieldErrors: i };
}
function PC(t, r = (i) => i.message) {
  const i = { _errors: [] }, s = (l) => {
    for (const u of l.issues)
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
const hh = (t) => (r, i, s, l) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise)
    throw new Ii();
  if (f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((h) => La(h, u, za())));
    throw l1(p, l?.callee), p;
  }
  return f.value;
}, ph = (t) => async (r, i, s, l) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((h) => La(h, u, za())));
    throw l1(p, l?.callee), p;
  }
  return f.value;
}, ku = (t) => (r, i, s) => {
  const l = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, l);
  if (u instanceof Promise)
    throw new Ii();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? d1)(u.issues.map((f) => La(f, l, za())))
  } : { success: !0, data: u.value };
}, BC = /* @__PURE__ */ ku(h1), ju = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, l);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => La(f, l, za())))
  } : { success: !0, data: u.value };
}, UC = /* @__PURE__ */ ju(h1), HC = (t) => (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return hh(t)(r, i, l);
}, qC = (t) => (r, i, s) => hh(t)(r, i, s), FC = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ph(t)(r, i, l);
}, ZC = (t) => async (r, i, s) => ph(t)(r, i, s), GC = (t) => (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ku(t)(r, i, l);
}, VC = (t) => (r, i, s) => ku(t)(r, i, s), YC = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ju(t)(r, i, l);
}, XC = (t) => async (r, i, s) => ju(t)(r, i, s), $C = /^[cC][^\s-]{8,}$/, QC = /^[0-9a-z]+$/, KC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, JC = /^[0-9a-vA-V]{20}$/, WC = /^[A-Za-z0-9]{27}$/, ew = /^[a-zA-Z0-9_-]{21}$/, tw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, nw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Iy = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, rw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, aw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function iw() {
  return new RegExp(aw, "u");
}
const sw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ow = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, lw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, uw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, cw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, p1 = /^[A-Za-z0-9_-]*$/, fw = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, dw = /^\+(?:[0-9]){6,14}[0-9]$/, m1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", hw = /* @__PURE__ */ new RegExp(`^${m1}$`);
function g1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function pw(t) {
  return new RegExp(`^${g1(t)}$`);
}
function mw(t) {
  const r = g1({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${m1}T(?:${s})$`);
}
const gw = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, vw = /^-?\d+$/, yw = /^-?\d+(?:\.\d+)?/, bw = /^[^A-Z]*$/, _w = /^[^a-z]*$/, ln = /* @__PURE__ */ te("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), v1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, y1 = /* @__PURE__ */ te("$ZodCheckLessThan", (t, r) => {
  ln.init(t, r);
  const i = v1[typeof r.value];
  t._zod.onattach.push((s) => {
    const l = s._zod.bag, u = (r.inclusive ? l.maximum : l.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < u && (r.inclusive ? l.maximum = r.value : l.exclusiveMaximum = r.value);
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
}), b1 = /* @__PURE__ */ te("$ZodCheckGreaterThan", (t, r) => {
  ln.init(t, r);
  const i = v1[typeof r.value];
  t._zod.onattach.push((s) => {
    const l = s._zod.bag, u = (r.inclusive ? l.minimum : l.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > u && (r.inclusive ? l.minimum = r.value : l.exclusiveMinimum = r.value);
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
}), Sw = /* @__PURE__ */ te("$ZodCheckMultipleOf", (t, r) => {
  ln.init(t, r), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : wC(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), xw = /* @__PURE__ */ te("$ZodCheckNumberFormat", (t, r) => {
  ln.init(t, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [l, u] = OC[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = l, p.maximum = u, i && (p.pattern = vw);
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
    p < l && f.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: l,
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
}), Ew = /* @__PURE__ */ te("$ZodCheckMaxLength", (t, r) => {
  var i;
  ln.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !ch(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < l && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length <= r.maximum)
      return;
    const f = dh(l);
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
}), Cw = /* @__PURE__ */ te("$ZodCheckMinLength", (t, r) => {
  var i;
  ln.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !ch(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > l && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length >= r.minimum)
      return;
    const f = dh(l);
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
}), ww = /* @__PURE__ */ te("$ZodCheckLengthEquals", (t, r) => {
  var i;
  ln.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !ch(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.minimum = r.length, l.maximum = r.length, l.length = r.length;
  }), t._zod.check = (s) => {
    const l = s.value, u = l.length;
    if (u === r.length)
      return;
    const f = dh(l), p = u > r.length;
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
}), Ru = /* @__PURE__ */ te("$ZodCheckStringFormat", (t, r) => {
  var i, s;
  ln.init(t, r), t._zod.onattach.push((l) => {
    const u = l._zod.bag;
    u.format = r.format, r.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r.pattern));
  }), r.pattern ? (i = t._zod).check ?? (i.check = (l) => {
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
}), Aw = /* @__PURE__ */ te("$ZodCheckRegex", (t, r) => {
  Ru.init(t, r), t._zod.check = (i) => {
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
}), Nw = /* @__PURE__ */ te("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = bw), Ru.init(t, r);
}), Tw = /* @__PURE__ */ te("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = _w), Ru.init(t, r);
}), Ow = /* @__PURE__ */ te("$ZodCheckIncludes", (t, r) => {
  ln.init(t, r);
  const i = Mu(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
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
}), Dw = /* @__PURE__ */ te("$ZodCheckStartsWith", (t, r) => {
  ln.init(t, r);
  const i = new RegExp(`^${Mu(r.prefix)}.*`);
  r.pattern ?? (r.pattern = i), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(i);
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
}), Mw = /* @__PURE__ */ te("$ZodCheckEndsWith", (t, r) => {
  ln.init(t, r);
  const i = new RegExp(`.*${Mu(r.suffix)}$`);
  r.pattern ?? (r.pattern = i), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.patterns ?? (l.patterns = /* @__PURE__ */ new Set()), l.patterns.add(i);
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
}), kw = /* @__PURE__ */ te("$ZodCheckOverwrite", (t, r) => {
  ln.init(t, r), t._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class jw {
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
    const r = Function, i = this?.args, l = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new r(...i, l.join(`
`));
  }
}
const Rw = {
  major: 4,
  minor: 1,
  patch: 12
}, Ct = /* @__PURE__ */ te("$ZodType", (t, r) => {
  var i;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = Rw;
  const s = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && s.unshift(t);
  for (const l of s)
    for (const u of l._zod.onattach)
      u(t);
  if (s.length === 0)
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const l = (f, p, h) => {
      let m = Ri(f), y;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(f))
            continue;
        } else if (m)
          continue;
        const b = f.issues.length, v = _._zod.check(f);
        if (v instanceof Promise && h?.async === !1)
          throw new Ii();
        if (y || v instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await v, f.issues.length !== b && (m || (m = Ri(f, b)));
          });
        else {
          if (f.issues.length === b)
            continue;
          m || (m = Ri(f, b));
        }
      }
      return y ? y.then(() => f) : f;
    }, u = (f, p, h) => {
      if (Ri(f))
        return f.aborted = !0, f;
      const m = l(p, s, h);
      if (m instanceof Promise) {
        if (h.async === !1)
          throw new Ii();
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
          throw new Ii();
        return h.then((m) => l(m, s, p));
      }
      return l(h, s, p);
    };
  }
  t["~standard"] = {
    validate: (l) => {
      try {
        const u = BC(t, l);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return UC(t, l).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), mh = /* @__PURE__ */ te("$ZodString", (t, r) => {
  Ct.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? gw(t._zod.bag), t._zod.parse = (i, s) => {
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
}), lt = /* @__PURE__ */ te("$ZodStringFormat", (t, r) => {
  Ru.init(t, r), mh.init(t, r);
}), zw = /* @__PURE__ */ te("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = nw), lt.init(t, r);
}), Lw = /* @__PURE__ */ te("$ZodUUID", (t, r) => {
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
    r.pattern ?? (r.pattern = Iy(s));
  } else
    r.pattern ?? (r.pattern = Iy());
  lt.init(t, r);
}), Iw = /* @__PURE__ */ te("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = rw), lt.init(t, r);
}), Pw = /* @__PURE__ */ te("$ZodURL", (t, r) => {
  lt.init(t, r), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), l = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(l.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: fw.source,
        input: i.value,
        inst: t,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(l.protocol.endsWith(":") ? l.protocol.slice(0, -1) : l.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: i.value,
        inst: t,
        continue: !r.abort
      })), r.normalize ? i.value = l.href : i.value = s;
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
}), Bw = /* @__PURE__ */ te("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = iw()), lt.init(t, r);
}), Uw = /* @__PURE__ */ te("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = ew), lt.init(t, r);
}), Hw = /* @__PURE__ */ te("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = $C), lt.init(t, r);
}), qw = /* @__PURE__ */ te("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = QC), lt.init(t, r);
}), Fw = /* @__PURE__ */ te("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = KC), lt.init(t, r);
}), Zw = /* @__PURE__ */ te("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = JC), lt.init(t, r);
}), Gw = /* @__PURE__ */ te("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = WC), lt.init(t, r);
}), Vw = /* @__PURE__ */ te("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = mw(r)), lt.init(t, r);
}), Yw = /* @__PURE__ */ te("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = hw), lt.init(t, r);
}), Xw = /* @__PURE__ */ te("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = pw(r)), lt.init(t, r);
}), $w = /* @__PURE__ */ te("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = tw), lt.init(t, r);
}), Qw = /* @__PURE__ */ te("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = sw), lt.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), Kw = /* @__PURE__ */ te("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = ow), lt.init(t, r), t._zod.onattach.push((i) => {
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
}), Jw = /* @__PURE__ */ te("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = lw), lt.init(t, r);
}), Ww = /* @__PURE__ */ te("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = uw), lt.init(t, r), t._zod.check = (i) => {
    const s = i.value.split("/");
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
function _1(t) {
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
const e3 = /* @__PURE__ */ te("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = cw), lt.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    _1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function t3(t) {
  if (!p1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return _1(i);
}
const n3 = /* @__PURE__ */ te("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = p1), lt.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    t3(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), r3 = /* @__PURE__ */ te("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = dw), lt.init(t, r);
});
function a3(t, r = null) {
  try {
    const i = t.split(".");
    if (i.length !== 3)
      return !1;
    const [s] = i;
    if (!s)
      return !1;
    const l = JSON.parse(atob(s));
    return !("typ" in l && l?.typ !== "JWT" || !l.alg || r && (!("alg" in l) || l.alg !== r));
  } catch {
    return !1;
  }
}
const i3 = /* @__PURE__ */ te("$ZodJWT", (t, r) => {
  lt.init(t, r), t._zod.check = (i) => {
    a3(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), S1 = /* @__PURE__ */ te("$ZodNumber", (t, r) => {
  Ct.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? yw, t._zod.parse = (i, s) => {
    if (r.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    const l = i.value;
    if (typeof l == "number" && !Number.isNaN(l) && Number.isFinite(l))
      return i;
    const u = typeof l == "number" ? Number.isNaN(l) ? "NaN" : Number.isFinite(l) ? void 0 : "Infinity" : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: l,
      inst: t,
      ...u ? { received: u } : {}
    }), i;
  };
}), s3 = /* @__PURE__ */ te("$ZodNumber", (t, r) => {
  xw.init(t, r), S1.init(t, r);
}), o3 = /* @__PURE__ */ te("$ZodUnknown", (t, r) => {
  Ct.init(t, r), t._zod.parse = (i) => i;
}), l3 = /* @__PURE__ */ te("$ZodNever", (t, r) => {
  Ct.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function Py(t, r, i) {
  t.issues.length && r.issues.push(...c1(i, t.issues)), r.value[i] = t.value;
}
const u3 = /* @__PURE__ */ te("$ZodArray", (t, r) => {
  Ct.init(t, r), t._zod.parse = (i, s) => {
    const l = i.value;
    if (!Array.isArray(l))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: l,
        inst: t
      }), i;
    i.value = Array(l.length);
    const u = [];
    for (let f = 0; f < l.length; f++) {
      const p = l[f], h = r.element._zod.run({
        value: p,
        issues: []
      }, s);
      h instanceof Promise ? u.push(h.then((m) => Py(m, i, f))) : Py(h, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Nu(t, r, i, s) {
  t.issues.length && r.issues.push(...c1(i, t.issues)), t.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = t.value;
}
function x1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = TC(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function E1(t, r, i, s, l, u) {
  const f = [], p = l.keySet, h = l.catchall._zod, m = h.def.type;
  for (const y of Object.keys(r)) {
    if (p.has(y))
      continue;
    if (m === "never") {
      f.push(y);
      continue;
    }
    const _ = h.run({ value: r[y], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((b) => Nu(b, i, y, r))) : Nu(_, i, y, r);
  }
  return f.length && i.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const c3 = /* @__PURE__ */ te("$ZodObject", (t, r) => {
  if (Ct.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
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
  const s = uh(() => x1(r));
  it(t._zod, "propValues", () => {
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
  const l = Au, u = r.catchall;
  let f;
  t._zod.parse = (p, h) => {
    f ?? (f = s.value);
    const m = p.value;
    if (!l(m))
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
      d instanceof Promise ? y.push(d.then((S) => Nu(S, p, b, m))) : Nu(d, p, b, m);
    }
    return u ? E1(y, m, p, h, s.value, t) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), f3 = /* @__PURE__ */ te("$ZodObjectJIT", (t, r) => {
  c3.init(t, r);
  const i = t._zod.parse, s = uh(() => x1(r)), l = (b) => {
    const v = new jw(["shape", "payload", "ctx"]), d = s.value, S = (D) => {
      const C = Ly(D);
      return `shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const D of d.keys)
      E[D] = `key_${T++}`;
    v.write("const newResult = {};");
    for (const D of d.keys) {
      const C = E[D], N = Ly(D);
      v.write(`const ${C} = ${S(D)};`), v.write(`
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
    v.write("payload.value = newResult;"), v.write("return payload;");
    const A = v.compile();
    return (D, C) => A(b, D, C);
  };
  let u;
  const f = Au, p = !s1.jitless, m = p && AC.value, y = r.catchall;
  let _;
  t._zod.parse = (b, v) => {
    _ ?? (_ = s.value);
    const d = b.value;
    return f(d) ? p && m && v?.async === !1 && v.jitless !== !0 ? (u || (u = l(r.shape)), b = u(b, v), y ? E1([], d, b, v, _, t) : b) : i(b, v) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: t
    }), b);
  };
});
function By(t, r, i, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const l = t.filter((u) => !Ri(u));
  return l.length === 1 ? (r.value = l[0].value, l[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: t.map((u) => u.issues.map((f) => La(f, s, za())))
  }), r);
}
const d3 = /* @__PURE__ */ te("$ZodUnion", (t, r) => {
  Ct.init(t, r), it(t._zod, "optin", () => r.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), it(t._zod, "optout", () => r.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), it(t._zod, "values", () => {
    if (r.options.every((l) => l._zod.values))
      return new Set(r.options.flatMap((l) => Array.from(l._zod.values)));
  }), it(t._zod, "pattern", () => {
    if (r.options.every((l) => l._zod.pattern)) {
      const l = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${l.map((u) => fh(u.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, s = r.options[0]._zod.run;
  t._zod.parse = (l, u) => {
    if (i)
      return s(l, u);
    let f = !1;
    const p = [];
    for (const h of r.options) {
      const m = h._zod.run({
        value: l.value,
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
    return f ? Promise.all(p).then((h) => By(h, l, t, u)) : By(p, l, t, u);
  };
}), h3 = /* @__PURE__ */ te("$ZodIntersection", (t, r) => {
  Ct.init(t, r), t._zod.parse = (i, s) => {
    const l = i.value, u = r.left._zod.run({ value: l, issues: [] }, s), f = r.right._zod.run({ value: l, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, m]) => Uy(i, h, m)) : Uy(i, u, f);
  };
});
function Gd(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (io(t) && io(r)) {
    const i = Object.keys(r), s = Object.keys(t).filter((u) => i.indexOf(u) !== -1), l = { ...t, ...r };
    for (const u of s) {
      const f = Gd(t[u], r[u]);
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
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const l = t[s], u = r[s], f = Gd(l, u);
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
function Uy(t, r, i) {
  if (r.issues.length && t.issues.push(...r.issues), i.issues.length && t.issues.push(...i.issues), Ri(t))
    return t;
  const s = Gd(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const p3 = /* @__PURE__ */ te("$ZodEnum", (t, r) => {
  Ct.init(t, r);
  const i = o1(r.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((l) => NC.has(typeof l)).map((l) => typeof l == "string" ? Mu(l) : l.toString()).join("|")})$`), t._zod.parse = (l, u) => {
    const f = l.value;
    return s.has(f) || l.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: t
    }), l;
  };
}), m3 = /* @__PURE__ */ te("$ZodTransform", (t, r) => {
  Ct.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new i1(t.constructor.name);
    const l = r.transform(i.value, i);
    if (s.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((f) => (i.value = f, i));
    if (l instanceof Promise)
      throw new Ii();
    return i.value = l, i;
  };
});
function Hy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const g3 = /* @__PURE__ */ te("$ZodOptional", (t, r) => {
  Ct.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", it(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), it(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${fh(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const l = r.innerType._zod.run(i, s);
      return l instanceof Promise ? l.then((u) => Hy(u, i.value)) : Hy(l, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), v3 = /* @__PURE__ */ te("$ZodNullable", (t, r) => {
  Ct.init(t, r), it(t._zod, "optin", () => r.innerType._zod.optin), it(t._zod, "optout", () => r.innerType._zod.optout), it(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${fh(i.source)}|null)$`) : void 0;
  }), it(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), y3 = /* @__PURE__ */ te("$ZodDefault", (t, r) => {
  Ct.init(t, r), t._zod.optin = "optional", it(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => qy(u, r)) : qy(l, r);
  };
});
function qy(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const b3 = /* @__PURE__ */ te("$ZodPrefault", (t, r) => {
  Ct.init(t, r), t._zod.optin = "optional", it(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), _3 = /* @__PURE__ */ te("$ZodNonOptional", (t, r) => {
  Ct.init(t, r), it(t._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (i, s) => {
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => Fy(u, t)) : Fy(l, t);
  };
});
function Fy(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const S3 = /* @__PURE__ */ te("$ZodCatch", (t, r) => {
  Ct.init(t, r), it(t._zod, "optin", () => r.innerType._zod.optin), it(t._zod, "optout", () => r.innerType._zod.optout), it(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => (i.value = u.value, u.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: u.issues.map((f) => La(f, s, za()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = l.value, l.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: l.issues.map((u) => La(u, s, za()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), x3 = /* @__PURE__ */ te("$ZodPipe", (t, r) => {
  Ct.init(t, r), it(t._zod, "values", () => r.in._zod.values), it(t._zod, "optin", () => r.in._zod.optin), it(t._zod, "optout", () => r.out._zod.optout), it(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(i, s);
      return u instanceof Promise ? u.then((f) => su(f, r.in, s)) : su(u, r.in, s);
    }
    const l = r.in._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => su(u, r.out, s)) : su(l, r.out, s);
  };
});
function su(t, r, i) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, i);
}
const E3 = /* @__PURE__ */ te("$ZodReadonly", (t, r) => {
  Ct.init(t, r), it(t._zod, "propValues", () => r.innerType._zod.propValues), it(t._zod, "values", () => r.innerType._zod.values), it(t._zod, "optin", () => r.innerType._zod.optin), it(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then(Zy) : Zy(l);
  };
});
function Zy(t) {
  return t.value = Object.freeze(t.value), t;
}
const C3 = /* @__PURE__ */ te("$ZodCustom", (t, r) => {
  ln.init(t, r), Ct.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, l = r.fn(s);
    if (l instanceof Promise)
      return l.then((u) => Gy(u, i, s, t));
    Gy(l, i, s, t);
  };
});
function Gy(t, r, i, s) {
  if (!t) {
    const l = {
      code: "custom",
      input: i,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (l.params = s._zod.def.params), r.issues.push(so(l));
  }
}
class C1 {
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
      const l = { ...s, ...this._map.get(r) };
      return Object.keys(l).length ? l : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function w3() {
  return new C1();
}
const Js = /* @__PURE__ */ w3();
function A3(t, r) {
  return new t({
    type: "string",
    ...Ae(r)
  });
}
function N3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function Vy(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function T3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function O3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Ae(r)
  });
}
function D3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Ae(r)
  });
}
function M3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Ae(r)
  });
}
function k3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function j3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function R3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function z3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function L3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function I3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function P3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function B3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function U3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function H3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function q3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function F3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function Z3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function G3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function V3(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function Y3(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Ae(r)
  });
}
function X3(t, r) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Ae(r)
  });
}
function $3(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...Ae(r)
  });
}
function Q3(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Ae(r)
  });
}
function K3(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Ae(r)
  });
}
function J3(t, r) {
  return new t({
    type: "number",
    checks: [],
    ...Ae(r)
  });
}
function W3(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...Ae(r)
  });
}
function e4(t) {
  return new t({
    type: "unknown"
  });
}
function t4(t, r) {
  return new t({
    type: "never",
    ...Ae(r)
  });
}
function Yy(t, r) {
  return new y1({
    check: "less_than",
    ...Ae(r),
    value: t,
    inclusive: !1
  });
}
function _d(t, r) {
  return new y1({
    check: "less_than",
    ...Ae(r),
    value: t,
    inclusive: !0
  });
}
function Xy(t, r) {
  return new b1({
    check: "greater_than",
    ...Ae(r),
    value: t,
    inclusive: !1
  });
}
function Sd(t, r) {
  return new b1({
    check: "greater_than",
    ...Ae(r),
    value: t,
    inclusive: !0
  });
}
function $y(t, r) {
  return new Sw({
    check: "multiple_of",
    ...Ae(r),
    value: t
  });
}
function w1(t, r) {
  return new Ew({
    check: "max_length",
    ...Ae(r),
    maximum: t
  });
}
function Tu(t, r) {
  return new Cw({
    check: "min_length",
    ...Ae(r),
    minimum: t
  });
}
function A1(t, r) {
  return new ww({
    check: "length_equals",
    ...Ae(r),
    length: t
  });
}
function n4(t, r) {
  return new Aw({
    check: "string_format",
    format: "regex",
    ...Ae(r),
    pattern: t
  });
}
function r4(t) {
  return new Nw({
    check: "string_format",
    format: "lowercase",
    ...Ae(t)
  });
}
function a4(t) {
  return new Tw({
    check: "string_format",
    format: "uppercase",
    ...Ae(t)
  });
}
function i4(t, r) {
  return new Ow({
    check: "string_format",
    format: "includes",
    ...Ae(r),
    includes: t
  });
}
function s4(t, r) {
  return new Dw({
    check: "string_format",
    format: "starts_with",
    ...Ae(r),
    prefix: t
  });
}
function o4(t, r) {
  return new Mw({
    check: "string_format",
    format: "ends_with",
    ...Ae(r),
    suffix: t
  });
}
function co(t) {
  return new kw({
    check: "overwrite",
    tx: t
  });
}
function l4(t) {
  return co((r) => r.normalize(t));
}
function u4() {
  return co((t) => t.trim());
}
function c4() {
  return co((t) => t.toLowerCase());
}
function f4() {
  return co((t) => t.toUpperCase());
}
function d4(t, r, i) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...Ae(i)
  });
}
function h4(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...Ae(i)
  });
}
function p4(t) {
  const r = m4((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(so(s, i.value, r._zod.def));
    else {
      const l = s;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = i.value), l.inst ?? (l.inst = r), l.continue ?? (l.continue = !r._zod.def.abort), i.issues.push(so(l));
    }
  }, t(i.value, i)));
  return r;
}
function m4(t, r) {
  const i = new ln({
    check: "custom",
    ...Ae(r)
  });
  return i._zod.check = t, i;
}
class Qy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Js, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, i = { path: [], schemaPath: [] }) {
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
        const v = p.schema;
        switch (l.type) {
          case "string": {
            const d = v;
            d.type = "string";
            const { minimum: S, maximum: E, format: T, patterns: A, contentEncoding: D } = r._zod.bag;
            if (typeof S == "number" && (d.minLength = S), typeof E == "number" && (d.maxLength = E), T && (d.format = u[T] ?? T, d.format === "" && delete d.format), D && (d.contentEncoding = D), A && A.size > 0) {
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
            const d = v, { minimum: S, maximum: E, format: T, multipleOf: A, exclusiveMaximum: D, exclusiveMinimum: C } = r._zod.bag;
            typeof T == "string" && T.includes("int") ? d.type = "integer" : d.type = "number", typeof C == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.minimum = C, d.exclusiveMinimum = !0) : d.exclusiveMinimum = C), typeof S == "number" && (d.minimum = S, typeof C == "number" && this.target !== "draft-4" && (C >= S ? delete d.minimum : delete d.exclusiveMinimum)), typeof D == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.maximum = D, d.exclusiveMaximum = !0) : d.exclusiveMaximum = D), typeof E == "number" && (d.maximum = E, typeof D == "number" && this.target !== "draft-4" && (D <= E ? delete d.maximum : delete d.exclusiveMaximum)), typeof A == "number" && (d.multipleOf = A);
            break;
          }
          case "boolean": {
            const d = v;
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
            this.target === "openapi-3.0" ? (v.type = "string", v.nullable = !0, v.enum = [null]) : v.type = "null";
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
            v.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const d = v, { minimum: S, maximum: E } = r._zod.bag;
            typeof S == "number" && (d.minItems = S), typeof E == "number" && (d.maxItems = E), d.type = "array", d.items = this.process(l.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const d = v;
            d.type = "object", d.properties = {};
            const S = l.shape;
            for (const A in S)
              d.properties[A] = this.process(S[A], {
                ..._,
                path: [..._.path, "properties", A]
              });
            const E = new Set(Object.keys(S)), T = new Set([...E].filter((A) => {
              const D = l.shape[A]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            T.size > 0 && (d.required = Array.from(T)), l.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : l.catchall ? l.catchall && (d.additionalProperties = this.process(l.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = v, S = l.options.map((E, T) => this.process(E, {
              ..._,
              path: [..._.path, "anyOf", T]
            }));
            d.anyOf = S;
            break;
          }
          case "intersection": {
            const d = v, S = this.process(l.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), E = this.process(l.right, {
              ..._,
              path: [..._.path, "allOf", 1]
            }), T = (D) => "allOf" in D && Object.keys(D).length === 1, A = [
              ...T(S) ? S.allOf : [S],
              ...T(E) ? E.allOf : [E]
            ];
            d.allOf = A;
            break;
          }
          case "tuple": {
            const d = v;
            d.type = "array";
            const S = this.target === "draft-2020-12" ? "prefixItems" : "items", E = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", T = l.items.map((N, M) => this.process(N, {
              ..._,
              path: [..._.path, S, M]
            })), A = l.rest ? this.process(l.rest, {
              ..._,
              path: [..._.path, E, ...this.target === "openapi-3.0" ? [l.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (d.prefixItems = T, A && (d.items = A)) : this.target === "openapi-3.0" ? (d.items = {
              anyOf: T
            }, A && d.items.anyOf.push(A), d.minItems = T.length, A || (d.maxItems = T.length)) : (d.items = T, A && (d.additionalItems = A));
            const { minimum: D, maximum: C } = r._zod.bag;
            typeof D == "number" && (d.minItems = D), typeof C == "number" && (d.maxItems = C);
            break;
          }
          case "record": {
            const d = v;
            d.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (d.propertyNames = this.process(l.keyType, {
              ..._,
              path: [..._.path, "propertyNames"]
            })), d.additionalProperties = this.process(l.valueType, {
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
            const d = v, S = o1(l.entries);
            S.every((E) => typeof E == "number") && (d.type = "number"), S.every((E) => typeof E == "string") && (d.type = "string"), d.enum = S;
            break;
          }
          case "literal": {
            const d = v, S = [];
            for (const E of l.values)
              if (E === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof E == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                S.push(Number(E));
              } else
                S.push(E);
            if (S.length !== 0) if (S.length === 1) {
              const E = S[0];
              d.type = E === null ? "null" : typeof E, this.target === "draft-4" || this.target === "openapi-3.0" ? d.enum = [E] : d.const = E;
            } else
              S.every((E) => typeof E == "number") && (d.type = "number"), S.every((E) => typeof E == "string") && (d.type = "string"), S.every((E) => typeof E == "boolean") && (d.type = "string"), S.every((E) => E === null) && (d.type = "null"), d.enum = S;
            break;
          }
          case "file": {
            const d = v, S = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: E, maximum: T, mime: A } = r._zod.bag;
            E !== void 0 && (S.minLength = E), T !== void 0 && (S.maxLength = T), A ? A.length === 1 ? (S.contentMediaType = A[0], Object.assign(d, S)) : d.anyOf = A.map((D) => ({ ...S, contentMediaType: D })) : Object.assign(d, S);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const d = this.process(l.innerType, _);
            this.target === "openapi-3.0" ? (p.ref = l.innerType, v.nullable = !0) : v.anyOf = [d, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(l.innerType, _), p.ref = l.innerType;
            break;
          }
          case "success": {
            const d = v;
            d.type = "boolean";
            break;
          }
          case "default": {
            this.process(l.innerType, _), p.ref = l.innerType, v.default = JSON.parse(JSON.stringify(l.defaultValue));
            break;
          }
          case "prefault": {
            this.process(l.innerType, _), p.ref = l.innerType, this.io === "input" && (v._prefault = JSON.parse(JSON.stringify(l.defaultValue)));
            break;
          }
          case "catch": {
            this.process(l.innerType, _), p.ref = l.innerType;
            let d;
            try {
              d = l.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            v.default = d;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const d = v, S = r._zod.pattern;
            if (!S)
              throw new Error("Pattern not found in template literal");
            d.type = "string", d.pattern = S.source;
            break;
          }
          case "pipe": {
            const d = this.io === "input" ? l.in._zod.def.type === "transform" ? l.out : l.in : l.out;
            this.process(d, _), p.ref = d;
            break;
          }
          case "readonly": {
            this.process(l.innerType, _), p.ref = l.innerType, v.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(l.innerType, _), p.ref = l.innerType;
            break;
          }
          case "optional": {
            this.process(l.innerType, _), p.ref = l.innerType;
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
    return m && Object.assign(p.schema, m), this.io === "input" && Nt(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, i) {
    const s = {
      cycles: i?.cycles ?? "ref",
      reused: i?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: i?.external ?? void 0
    }, l = this.seen.get(r);
    if (!l)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const u = (y) => {
      const _ = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const S = s.external.registry.get(y[0])?.id, E = s.external.uri ?? ((A) => A);
        if (S)
          return { ref: E(S) };
        const T = y[1].defId ?? y[1].schema.id ?? `schema${this.counter++}`;
        return y[1].defId = T, { defId: T, ref: `${E("__shared")}#/${_}/${T}` };
      }
      if (y[1] === l)
        return { ref: "#" };
      const v = `#/${_}/`, d = y[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: d, ref: v + d };
    }, f = (y) => {
      if (y[1].schema.$ref)
        return;
      const _ = y[1], { ref: b, defId: v } = u(y);
      _.def = { ..._.schema }, v && (_.defId = v);
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
        const v = s.external.registry.get(y[0])?.id;
        if (r !== y[0] && v) {
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
      const b = this.seen.get(y), v = b.def ?? b.schema, d = { ...v };
      if (b.ref === null)
        return;
      const S = b.ref;
      if (b.ref = null, S) {
        p(S, _);
        const E = this.seen.get(S).schema;
        E.$ref && (_.target === "draft-7" || _.target === "draft-4" || _.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(E)) : (Object.assign(v, E), Object.assign(v, d));
      }
      b.isParent || this.override({
        zodSchema: y,
        jsonSchema: v,
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
    Object.assign(h, l.def);
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
function g4(t, r) {
  if (t instanceof C1) {
    const s = new Qy(r), l = {};
    for (const p of t._idmap.entries()) {
      const [h, m] = p;
      s.process(m);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: l
    };
    for (const p of t._idmap.entries()) {
      const [h, m] = p;
      u[h] = s.emit(m, {
        ...r,
        external: f
      });
    }
    if (Object.keys(l).length > 0) {
      const p = s.target === "draft-2020-12" ? "$defs" : "definitions";
      u.__shared = {
        [p]: l
      };
    }
    return { schemas: u };
  }
  const i = new Qy(r);
  return i.process(t), i.emit(t, r);
}
function Nt(t, r) {
  const i = r ?? { seen: /* @__PURE__ */ new Set() };
  if (i.seen.has(t))
    return !1;
  i.seen.add(t);
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
      return Nt(l.element, i);
    case "object": {
      for (const u in l.shape)
        if (Nt(l.shape[u], i))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of l.options)
        if (Nt(u, i))
          return !0;
      return !1;
    }
    case "intersection":
      return Nt(l.left, i) || Nt(l.right, i);
    case "tuple": {
      for (const u of l.items)
        if (Nt(u, i))
          return !0;
      return !!(l.rest && Nt(l.rest, i));
    }
    case "record":
      return Nt(l.keyType, i) || Nt(l.valueType, i);
    case "map":
      return Nt(l.keyType, i) || Nt(l.valueType, i);
    case "set":
      return Nt(l.valueType, i);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return Nt(l.innerType, i);
    case "lazy":
      return Nt(l.getter(), i);
    case "default":
      return Nt(l.innerType, i);
    case "prefault":
      return Nt(l.innerType, i);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return Nt(l.in, i) || Nt(l.out, i);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${l.type}`);
}
const v4 = /* @__PURE__ */ te("ZodISODateTime", (t, r) => {
  Vw.init(t, r), ft.init(t, r);
});
function y4(t) {
  return X3(v4, t);
}
const b4 = /* @__PURE__ */ te("ZodISODate", (t, r) => {
  Yw.init(t, r), ft.init(t, r);
});
function _4(t) {
  return $3(b4, t);
}
const S4 = /* @__PURE__ */ te("ZodISOTime", (t, r) => {
  Xw.init(t, r), ft.init(t, r);
});
function x4(t) {
  return Q3(S4, t);
}
const E4 = /* @__PURE__ */ te("ZodISODuration", (t, r) => {
  $w.init(t, r), ft.init(t, r);
});
function C4(t) {
  return K3(E4, t);
}
const w4 = (t, r) => {
  d1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => PC(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => IC(t, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        t.issues.push(i), t.message = JSON.stringify(t.issues, Zd, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        t.issues.push(...i), t.message = JSON.stringify(t.issues, Zd, 2);
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
}, Ln = te("ZodError", w4, {
  Parent: Error
}), A4 = /* @__PURE__ */ hh(Ln), N4 = /* @__PURE__ */ ph(Ln), T4 = /* @__PURE__ */ ku(Ln), O4 = /* @__PURE__ */ ju(Ln), D4 = /* @__PURE__ */ HC(Ln), M4 = /* @__PURE__ */ qC(Ln), k4 = /* @__PURE__ */ FC(Ln), j4 = /* @__PURE__ */ ZC(Ln), R4 = /* @__PURE__ */ GC(Ln), z4 = /* @__PURE__ */ VC(Ln), L4 = /* @__PURE__ */ YC(Ln), I4 = /* @__PURE__ */ XC(Ln), Tt = /* @__PURE__ */ te("ZodType", (t, r) => (Ct.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Pa(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => ia(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => A4(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => T4(t, i, s), t.parseAsync = async (i, s) => N4(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => O4(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => D4(t, i, s), t.decode = (i, s) => M4(t, i, s), t.encodeAsync = async (i, s) => k4(t, i, s), t.decodeAsync = async (i, s) => j4(t, i, s), t.safeEncode = (i, s) => R4(t, i, s), t.safeDecode = (i, s) => z4(t, i, s), t.safeEncodeAsync = async (i, s) => L4(t, i, s), t.safeDecodeAsync = async (i, s) => I4(t, i, s), t.refine = (i, s) => t.check(AA(i, s)), t.superRefine = (i) => t.check(NA(i)), t.overwrite = (i) => t.check(co(i)), t.optional = () => e0(t), t.nullable = () => t0(t), t.nullish = () => e0(t0(t)), t.nonoptional = (i) => bA(t, i), t.array = () => Zn(t), t.or = (i) => uA([t, i]), t.and = (i) => fA(t, i), t.transform = (i) => n0(t, hA(i)), t.default = (i) => gA(t, i), t.prefault = (i) => yA(t, i), t.catch = (i) => SA(t, i), t.pipe = (i) => n0(t, i), t.readonly = () => CA(t), t.describe = (i) => {
  const s = t.clone();
  return Js.add(s, { description: i }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return Js.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...i) => {
  if (i.length === 0)
    return Js.get(t);
  const s = t.clone();
  return Js.add(s, i[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), N1 = /* @__PURE__ */ te("_ZodString", (t, r) => {
  mh.init(t, r), Tt.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(n4(...s)), t.includes = (...s) => t.check(i4(...s)), t.startsWith = (...s) => t.check(s4(...s)), t.endsWith = (...s) => t.check(o4(...s)), t.min = (...s) => t.check(Tu(...s)), t.max = (...s) => t.check(w1(...s)), t.length = (...s) => t.check(A1(...s)), t.nonempty = (...s) => t.check(Tu(1, ...s)), t.lowercase = (s) => t.check(r4(s)), t.uppercase = (s) => t.check(a4(s)), t.trim = () => t.check(u4()), t.normalize = (...s) => t.check(l4(...s)), t.toLowerCase = () => t.check(c4()), t.toUpperCase = () => t.check(f4());
}), P4 = /* @__PURE__ */ te("ZodString", (t, r) => {
  mh.init(t, r), N1.init(t, r), t.email = (i) => t.check(N3(B4, i)), t.url = (i) => t.check(k3(U4, i)), t.jwt = (i) => t.check(Y3(tA, i)), t.emoji = (i) => t.check(j3(H4, i)), t.guid = (i) => t.check(Vy(Ky, i)), t.uuid = (i) => t.check(T3(ou, i)), t.uuidv4 = (i) => t.check(O3(ou, i)), t.uuidv6 = (i) => t.check(D3(ou, i)), t.uuidv7 = (i) => t.check(M3(ou, i)), t.nanoid = (i) => t.check(R3(q4, i)), t.guid = (i) => t.check(Vy(Ky, i)), t.cuid = (i) => t.check(z3(F4, i)), t.cuid2 = (i) => t.check(L3(Z4, i)), t.ulid = (i) => t.check(I3(G4, i)), t.base64 = (i) => t.check(Z3(J4, i)), t.base64url = (i) => t.check(G3(W4, i)), t.xid = (i) => t.check(P3(V4, i)), t.ksuid = (i) => t.check(B3(Y4, i)), t.ipv4 = (i) => t.check(U3(X4, i)), t.ipv6 = (i) => t.check(H3($4, i)), t.cidrv4 = (i) => t.check(q3(Q4, i)), t.cidrv6 = (i) => t.check(F3(K4, i)), t.e164 = (i) => t.check(V3(eA, i)), t.datetime = (i) => t.check(y4(i)), t.date = (i) => t.check(_4(i)), t.time = (i) => t.check(x4(i)), t.duration = (i) => t.check(C4(i));
});
function zn(t) {
  return A3(P4, t);
}
const ft = /* @__PURE__ */ te("ZodStringFormat", (t, r) => {
  lt.init(t, r), N1.init(t, r);
}), B4 = /* @__PURE__ */ te("ZodEmail", (t, r) => {
  Iw.init(t, r), ft.init(t, r);
}), Ky = /* @__PURE__ */ te("ZodGUID", (t, r) => {
  zw.init(t, r), ft.init(t, r);
}), ou = /* @__PURE__ */ te("ZodUUID", (t, r) => {
  Lw.init(t, r), ft.init(t, r);
}), U4 = /* @__PURE__ */ te("ZodURL", (t, r) => {
  Pw.init(t, r), ft.init(t, r);
}), H4 = /* @__PURE__ */ te("ZodEmoji", (t, r) => {
  Bw.init(t, r), ft.init(t, r);
}), q4 = /* @__PURE__ */ te("ZodNanoID", (t, r) => {
  Uw.init(t, r), ft.init(t, r);
}), F4 = /* @__PURE__ */ te("ZodCUID", (t, r) => {
  Hw.init(t, r), ft.init(t, r);
}), Z4 = /* @__PURE__ */ te("ZodCUID2", (t, r) => {
  qw.init(t, r), ft.init(t, r);
}), G4 = /* @__PURE__ */ te("ZodULID", (t, r) => {
  Fw.init(t, r), ft.init(t, r);
}), V4 = /* @__PURE__ */ te("ZodXID", (t, r) => {
  Zw.init(t, r), ft.init(t, r);
}), Y4 = /* @__PURE__ */ te("ZodKSUID", (t, r) => {
  Gw.init(t, r), ft.init(t, r);
}), X4 = /* @__PURE__ */ te("ZodIPv4", (t, r) => {
  Qw.init(t, r), ft.init(t, r);
}), $4 = /* @__PURE__ */ te("ZodIPv6", (t, r) => {
  Kw.init(t, r), ft.init(t, r);
}), Q4 = /* @__PURE__ */ te("ZodCIDRv4", (t, r) => {
  Jw.init(t, r), ft.init(t, r);
}), K4 = /* @__PURE__ */ te("ZodCIDRv6", (t, r) => {
  Ww.init(t, r), ft.init(t, r);
}), J4 = /* @__PURE__ */ te("ZodBase64", (t, r) => {
  e3.init(t, r), ft.init(t, r);
}), W4 = /* @__PURE__ */ te("ZodBase64URL", (t, r) => {
  n3.init(t, r), ft.init(t, r);
}), eA = /* @__PURE__ */ te("ZodE164", (t, r) => {
  r3.init(t, r), ft.init(t, r);
}), tA = /* @__PURE__ */ te("ZodJWT", (t, r) => {
  i3.init(t, r), ft.init(t, r);
}), T1 = /* @__PURE__ */ te("ZodNumber", (t, r) => {
  S1.init(t, r), Tt.init(t, r), t.gt = (s, l) => t.check(Xy(s, l)), t.gte = (s, l) => t.check(Sd(s, l)), t.min = (s, l) => t.check(Sd(s, l)), t.lt = (s, l) => t.check(Yy(s, l)), t.lte = (s, l) => t.check(_d(s, l)), t.max = (s, l) => t.check(_d(s, l)), t.int = (s) => t.check(Jy(s)), t.safe = (s) => t.check(Jy(s)), t.positive = (s) => t.check(Xy(0, s)), t.nonnegative = (s) => t.check(Sd(0, s)), t.negative = (s) => t.check(Yy(0, s)), t.nonpositive = (s) => t.check(_d(0, s)), t.multipleOf = (s, l) => t.check($y(s, l)), t.step = (s, l) => t.check($y(s, l)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Ou(t) {
  return J3(T1, t);
}
const nA = /* @__PURE__ */ te("ZodNumberFormat", (t, r) => {
  s3.init(t, r), T1.init(t, r);
});
function Jy(t) {
  return W3(nA, t);
}
const rA = /* @__PURE__ */ te("ZodUnknown", (t, r) => {
  o3.init(t, r), Tt.init(t, r);
});
function Wy() {
  return e4(rA);
}
const aA = /* @__PURE__ */ te("ZodNever", (t, r) => {
  l3.init(t, r), Tt.init(t, r);
});
function iA(t) {
  return t4(aA, t);
}
const sA = /* @__PURE__ */ te("ZodArray", (t, r) => {
  u3.init(t, r), Tt.init(t, r), t.element = r.element, t.min = (i, s) => t.check(Tu(i, s)), t.nonempty = (i) => t.check(Tu(1, i)), t.max = (i, s) => t.check(w1(i, s)), t.length = (i, s) => t.check(A1(i, s)), t.unwrap = () => t.element;
});
function Zn(t, r) {
  return d4(sA, t, r);
}
const oA = /* @__PURE__ */ te("ZodObject", (t, r) => {
  f3.init(t, r), Tt.init(t, r), it(t, "shape", () => r.shape), t.keyof = () => Yd(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Wy() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Wy() }), t.strict = () => t.clone({ ...t._zod.def, catchall: iA() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => kC(t, i), t.safeExtend = (i) => jC(t, i), t.merge = (i) => RC(t, i), t.pick = (i) => DC(t, i), t.omit = (i) => MC(t, i), t.partial = (...i) => zC(O1, t, i[0]), t.required = (...i) => LC(D1, t, i[0]);
});
function Ra(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ...Ae(r)
  };
  return new oA(i);
}
const lA = /* @__PURE__ */ te("ZodUnion", (t, r) => {
  d3.init(t, r), Tt.init(t, r), t.options = r.options;
});
function uA(t, r) {
  return new lA({
    type: "union",
    options: t,
    ...Ae(r)
  });
}
const cA = /* @__PURE__ */ te("ZodIntersection", (t, r) => {
  h3.init(t, r), Tt.init(t, r);
});
function fA(t, r) {
  return new cA({
    type: "intersection",
    left: t,
    right: r
  });
}
const Vd = /* @__PURE__ */ te("ZodEnum", (t, r) => {
  p3.init(t, r), Tt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  t.extract = (s, l) => {
    const u = {};
    for (const f of s)
      if (i.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Vd({
      ...r,
      checks: [],
      ...Ae(l),
      entries: u
    });
  }, t.exclude = (s, l) => {
    const u = { ...r.entries };
    for (const f of s)
      if (i.has(f))
        delete u[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Vd({
      ...r,
      checks: [],
      ...Ae(l),
      entries: u
    });
  };
});
function Yd(t, r) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Vd({
    type: "enum",
    entries: i,
    ...Ae(r)
  });
}
const dA = /* @__PURE__ */ te("ZodTransform", (t, r) => {
  m3.init(t, r), Tt.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new i1(t.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(so(u, i.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = i.value), f.inst ?? (f.inst = t), i.issues.push(so(f));
      }
    };
    const l = r.transform(i.value, i);
    return l instanceof Promise ? l.then((u) => (i.value = u, i)) : (i.value = l, i);
  };
});
function hA(t) {
  return new dA({
    type: "transform",
    transform: t
  });
}
const O1 = /* @__PURE__ */ te("ZodOptional", (t, r) => {
  g3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function e0(t) {
  return new O1({
    type: "optional",
    innerType: t
  });
}
const pA = /* @__PURE__ */ te("ZodNullable", (t, r) => {
  v3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function t0(t) {
  return new pA({
    type: "nullable",
    innerType: t
  });
}
const mA = /* @__PURE__ */ te("ZodDefault", (t, r) => {
  y3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function gA(t, r) {
  return new mA({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : u1(r);
    }
  });
}
const vA = /* @__PURE__ */ te("ZodPrefault", (t, r) => {
  b3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function yA(t, r) {
  return new vA({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : u1(r);
    }
  });
}
const D1 = /* @__PURE__ */ te("ZodNonOptional", (t, r) => {
  _3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function bA(t, r) {
  return new D1({
    type: "nonoptional",
    innerType: t,
    ...Ae(r)
  });
}
const _A = /* @__PURE__ */ te("ZodCatch", (t, r) => {
  S3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function SA(t, r) {
  return new _A({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const xA = /* @__PURE__ */ te("ZodPipe", (t, r) => {
  x3.init(t, r), Tt.init(t, r), t.in = r.in, t.out = r.out;
});
function n0(t, r) {
  return new xA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const EA = /* @__PURE__ */ te("ZodReadonly", (t, r) => {
  E3.init(t, r), Tt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function CA(t) {
  return new EA({
    type: "readonly",
    innerType: t
  });
}
const wA = /* @__PURE__ */ te("ZodCustom", (t, r) => {
  C3.init(t, r), Tt.init(t, r);
});
function AA(t, r = {}) {
  return h4(wA, t, r);
}
function NA(t) {
  return p4(t);
}
const r0 = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Xd = "placeholder-chatHistory", TA = Ra({
  justification: zn().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: zn().describe("The new, full content for the character field.")
}), OA = Ra({
  field: zn(),
  value: zn()
}), DA = Ra({
  index: Ou().int().positive(),
  value: zn()
});
Ra({
  justification: zn(),
  fields_to_change: Zn(OA).optional(),
  draft_fields_to_remove: Zn(zn()).optional(),
  greetings_to_add: Zn(zn()).optional(),
  greetings_to_remove: Zn(Ou().int().positive()).optional(),
  greetings_to_change: Zn(DA).optional()
});
const MA = (t, r) => {
  const i = Ra({
    index: Ou().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: zn().describe("The new content for the alternate greeting.")
  }), s = {
    justification: zn().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Zn(zn()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Zn(Ou().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Zn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const l = Ra({
      field: Yd(t).describe("The unique ID of the field to change (core or draft)."),
      value: zn().describe("The new content for the field.")
    });
    s.fields_to_change = Zn(l).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Zn(Yd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), Ra(s);
};
function xd(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function $d(t, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${$d(s, r + 1)}${i}</item>
` : `${i}<item>${xd(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const l of Object.keys(t)) {
      const u = t[l];
      u !== null && typeof u == "object" ? s += `${i}<${l}>
${$d(u, r + 1)}${i}</${l}>
` : s += `${i}<${l}>${xd(u)}</${l}>
`;
    }
    return s;
  }
  return `${i}<value>${xd(t)}</value>
`;
}
function kA(t, r) {
  const i = Da(t);
  return r === "xml" ? $d(i).trim() : JSON.stringify(i, null, 2);
}
function jA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function RA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function Da(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, i = jA(t.example, r, t.default);
  if (i !== void 0) return i;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return Da(s);
  switch (RA(t.type)) {
    case "object": {
      const u = {}, f = t.properties || {};
      for (const p of Object.keys(f))
        u[p] = Da(f[p]);
      return t.additionalProperties && typeof t.additionalProperties == "object" && (u.additionalProperty = Da(t.additionalProperties)), u;
    }
    case "array": {
      const u = t.items ?? {};
      return [Da(u)];
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
      return t.properties || t.additionalProperties ? Da({ ...t, type: "object" }) : t.items ? Da({ ...t, type: "array" }) : null;
  }
}
const zA = new CS();
async function Qd(t, r, i, s, l, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, h) => {
    const m = new AbortController(), y = u ?? m.signal;
    u && u.addEventListener("abort", () => m.abort(), { once: !0 }), zA.generateRequest(
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
        onFinish: (_, b, v) => y.aborted ? h(new DOMException("Request aborted by user", "AbortError")) : v ? h(v) : b === void 0 && v === void 0 ? h(new DOMException("Request aborted by user", "AbortError")) : b ? p(b) : h(new Error("No data received from LLM"))
      }
    );
  });
}
async function Kd(t, r, i, s) {
  const l = await Qd(t, r, i, xu(), void 0, s);
  if (!l?.content)
    throw new Error("Plain request failed to return content.");
  return l.content;
}
async function LA(t, r, i, s, l, u, f) {
  const p = mt.getSettings();
  let h, m;
  const y = g4(i);
  if (l === "native") {
    if (h = await Qd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: y },
        ...xu()
      },
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    m = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const b = l, v = kA(y, b), d = JSON.stringify(y, null, 2), S = b === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", E = p.prompts[S]?.content;
    if (!E)
      throw new Error(`Prompt template for mode "${b}" not found.`);
    const T = {
      example_response: v,
      schema: d
    }, D = { role: "system", content: qt.compile(E, { noEscape: !0, strict: !0 })(T) };
    if (h = await Qd(
      t,
      [...r, D],
      u,
      xu(),
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    m = q0(h.content, b, { schema: y });
  }
  const _ = i.safeParse(m);
  if (!_.success) {
    const b = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", m), await _e("error", b), new Error(b);
  }
  return _.data;
}
function a0(t, r, i) {
  return t.map((s) => {
    if (!s.images?.length)
      return { role: s.role, content: s.content };
    const l = [{ type: "text", text: s.content }];
    for (const u of s.images) {
      if (i && u.mediaType === "video")
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
const M1 = ({ originalContent: t, newContent: r }) => {
  const i = V.useMemo(() => {
    const s = r1(t, r);
    let l = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), m = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (l += m), f.removed || (u += m);
    }), { originalHtml: l, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ x.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ x.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ x.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, IA = ({ before: t, after: r }) => {
  const i = V.useMemo(() => {
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
  return /* @__PURE__ */ x.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ x.jsx("h3", { children: "Changes in this step" }),
    i.length === 0 ? /* @__PURE__ */ x.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ x.jsx("div", { className: "compare-state-list", children: i.map(({ label: s, before: l, after: u }) => /* @__PURE__ */ x.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ x.jsx("h4", { children: s }),
      /* @__PURE__ */ x.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ x.jsx("span", { children: "Before" }),
        /* @__PURE__ */ x.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ x.jsx(M1, { originalContent: l, newContent: u })
    ] }, s)) })
  ] });
}, PA = ({ currentState: t, initialState: r }) => {
  const [i, s] = V.useState(!1), { coreFields: l, alternateGreetings: u } = V.useMemo(() => {
    const p = [], h = [];
    return Wn.forEach((m) => {
      t.fields[m] && p.push({ label: t.fields[m].label, value: t.fields[m].value });
    }), Object.entries(t.fields).filter(([m]) => m.startsWith("alternate_greetings_")).sort((m, y) => parseInt(m[0].split("_")[2]) - parseInt(y[0].split("_")[2])).forEach(([, m]) => h.push(m.value)), { coreFields: p, alternateGreetings: h };
  }, [t]), f = V.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((m) => {
      const y = r.fields[m], _ = t.fields[m], b = y?.value ?? "", v = _?.value ?? "";
      b !== v && p.push({
        label: _?.label ?? y?.label ?? m,
        before: b,
        after: v
      });
    }), p;
  }, [r, t]);
  return /* @__PURE__ */ x.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ x.jsx("h3", { children: i ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ x.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ x.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ x.jsx("input", { type: "checkbox", checked: i, onChange: (p) => s(p.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ x.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ x.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ x.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: h, after: m }) => /* @__PURE__ */ x.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ x.jsx("h4", { children: p }),
      /* @__PURE__ */ x.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ x.jsx("span", { children: "Original" }),
        /* @__PURE__ */ x.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ x.jsx(M1, { originalContent: h, newContent: m })
    ] }, p)) }) : /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      /* @__PURE__ */ x.jsx("h4", { children: "Core Fields" }),
      l.map(({ label: p, value: h }) => /* @__PURE__ */ x.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ x.jsx("label", { children: p }),
        /* @__PURE__ */ x.jsx("div", { className: "state-value", children: h || /* @__PURE__ */ x.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        /* @__PURE__ */ x.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, h) => /* @__PURE__ */ x.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ x.jsxs("label", { children: [
            "Greeting ",
            h + 1
          ] }),
          /* @__PURE__ */ x.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ x.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, h))
      ] })
    ] }) })
  ] });
}, { showdown: BA, DOMPurify: UA, hljs: HA } = SillyTavern.libs, qA = new BA.Converter({
  emoji: !0,
  literalMidWordUnderscores: !0,
  parseImgDimensions: !0,
  tables: !0,
  underline: !0,
  simpleLineBreaks: !0,
  strikethrough: !0,
  disableForced4SpacesIndentedSublists: !0
}), k1 = ({ content: t }) => {
  const r = V.useRef(null), i = V.useMemo(() => {
    const s = qA.makeHtml(t);
    return UA.sanitize(s);
  }, [t]);
  return V.useEffect(() => {
    r.current && r.current.querySelectorAll("pre").forEach((s) => {
      const l = s.querySelector("code");
      if (l && HA.highlightElement(l), s.querySelector(".code-copy-button")) return;
      const u = document.createElement("button");
      u.className = "code-copy-button", u.title = "Copy code", u.innerHTML = '<i class="fa-solid fa-clipboard"></i>', u.addEventListener("click", () => {
        const f = s.querySelector("code")?.textContent ?? "";
        navigator.clipboard.writeText(f), u.innerHTML = '<i class="fa-solid fa-check"></i>', setTimeout(() => {
          u.innerHTML = '<i class="fa-solid fa-clipboard"></i>';
        }, 1500);
      }), s.style.position = "relative", s.appendChild(u);
    });
  }, [i]), /* @__PURE__ */ x.jsx("div", { ref: r, className: "message-content markdown-rendered", dangerouslySetInnerHTML: { __html: i } });
}, Mi = SillyTavern.getContext(), FA = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), l = parseInt(i[0].split("_")[2]);
  return s - l;
}).map(([, r]) => r.value), ZA = (t, r, i, s) => {
  const l = structuredClone(t);
  if (i === "field" && s) {
    const u = r;
    return l.fields[s] && (l.fields[s].value = u.response), l;
  }
  if (i === "global") {
    const u = r;
    let f = FA(l), p = !1;
    if (u.fields_to_change?.length)
      for (const h of u.fields_to_change)
        l.fields[h.field] ? l.fields[h.field].value = h.value : l.draftFields[h.field] && (l.draftFields[h.field].value = h.value);
    if (u.draft_fields_to_remove?.length)
      for (const h of u.draft_fields_to_remove)
        l.draftFields[h] && delete l.draftFields[h];
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
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add)), p && (Object.keys(l.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete l.fields[h];
    }), f.forEach((h, m) => {
      const y = `alternate_greetings_${m + 1}`;
      l.fields[y] = {
        value: h,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate_Greeting_${m + 1}`
      };
    }));
  }
  return l;
}, GA = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, l] = V.useState(() => structuredClone(t)), u = (_, b, v) => {
    const d = structuredClone(s), S = v ? "draftFields" : "fields";
    d[S][_] && (d[S][_].value = b), l(d);
  }, f = (_, b) => {
    const v = structuredClone(s), d = `alternate_greetings_${_ + 1}`;
    v.fields[d] && (v.fields[d].value = b), l(v);
  }, { coreFields: p, alternateGreetings: h, draftFields: m } = V.useMemo(() => {
    const _ = [], b = [], v = [];
    return Wn.forEach((d) => {
      s.fields[d] && _.push({ id: d, label: s.fields[d].label, value: s.fields[d].value });
    }), Object.entries(s.fields).filter(([d]) => d.startsWith("alternate_greetings_")).sort((d, S) => parseInt(d[0].split("_")[2]) - parseInt(S[0].split("_")[2])).forEach(([, d]) => b.push(d.value)), Object.entries(s.draftFields).forEach(([d, S]) => {
      v.push({ id: d, label: S.label, value: S.value });
    }), { coreFields: _, alternateGreetings: b, draftFields: v };
  }, [s]), y = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ x.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ x.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ x.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ x.jsxs(me, { onClick: y, children: [
          /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ x.jsxs(me, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ x.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ x.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ x.jsx("label", { children: b }),
        /* @__PURE__ */ x.jsx($t, { value: v, onChange: (d) => u(_, d.target.value, !1), rows: 4 })
      ] }, _)),
      m.length > 0 && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        /* @__PURE__ */ x.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        m.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ x.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ x.jsx("label", { children: b }),
          /* @__PURE__ */ x.jsx($t, { value: v, onChange: (d) => u(_, d.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      h.length > 0 && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        /* @__PURE__ */ x.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((_, b) => /* @__PURE__ */ x.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ x.jsxs("label", { children: [
            "Greeting ",
            b + 1
          ] }),
          /* @__PURE__ */ x.jsx($t, { value: _, onChange: (v) => f(b, v.target.value), rows: 4 })
        ] }, b))
      ] })
    ] })
  ] });
}, VA = ({
  session: t,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: l,
  chatContextOptions: u
}) => {
  const [f, p] = V.useState(t.messages), [h, m] = V.useState(""), [y, _] = V.useState(!1), [b, v] = V.useState(null), [d, S] = V.useState(!1), [E, T] = V.useState(!1), [A, D] = V.useState(null), [C, N] = V.useState(""), M = V.useRef(null), k = V.useRef(null);
  V.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const B = V.useCallback(
    (X, Se, Ee) => {
      if (JSON.stringify(Ee) === JSON.stringify(Se))
        return X;
      const We = mt.getSettings().prompts.existingFieldDefinitions;
      if (!We) return X;
      const je = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(Ee.fields), ...Object.keys(Se.fields)])).forEach((le) => {
        const he = Ee.fields[le]?.value ?? "", re = Se.fields[le]?.value ?? "";
        if (he !== re) {
          const we = Se.fields[le];
          we && (le.startsWith("alternate_greetings_") ? je.alternate_greetings[we.label] = we.value : Wn.includes(le) && (je.core[we.label] = we.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(Ee.draftFields), ...Object.keys(Se.draftFields)])).forEach((le) => {
        const he = Ee.draftFields[le]?.value ?? "", re = Se.draftFields[le]?.value ?? "";
        if (he !== re && Se.draftFields[le]) {
          const we = Se.draftFields[le];
          je.draft[we.label] = we.value;
        }
      }), Object.keys(je.core).length === 0 && Object.keys(je.alternate_greetings).length === 0 && Object.keys(je.draft).length === 0)
        return X;
      const ae = { fields: je };
      let Y = qt.compile(We.content, { noEscape: !0 })(ae);
      if (Y = Mi.substituteParams(Y), Y.trim()) {
        const le = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: Y.trim(),
          isStateUpdate: !0
        };
        return [...X, le];
      }
      return X;
    },
    []
  ), $ = V.useCallback(
    async (X, Se, Ee, Ye) => {
      const We = mt.getSettings();
      if (!t.profileId) {
        _e("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), Ee(), _(!0);
      try {
        const je = [], P = Mi.extensionSettings.connectionManager?.profiles?.find(
          (le) => le.id === t.profileId
        ), oe = P?.api ? Mi.CONNECT_API_MAP[P.api]?.selected : void 0;
        if (!oe)
          throw new Error("No API selected for this session.");
        for (const le of X)
          if (le.id === Xd) {
            if (Ht === void 0 && !Fn) continue;
            const he = await S0(oe, u);
            he.warnings?.length && he.warnings.forEach((re) => _e("warning", re)), je.push(...he.result);
          } else
            je.push(le);
        const ae = X.slice(0, X.length - (Se ? 0 : 1)).reverse().find((le) => le.stateSnapshot)?.stateSnapshot ?? l, Y = We.prompts.existingFieldDefinitions;
        if (Y) {
          const le = {
            fields: {
              core: Object.fromEntries(
                Object.entries(ae.fields).filter(([re]) => !re.startsWith("alternate_greetings_")).map(([, re]) => [re.label, re.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(ae.fields).filter(([re]) => re.startsWith("alternate_greetings_")).map(([, re]) => [re.label, re.value])
              ),
              draft: Object.fromEntries(Object.entries(ae.draftFields).map(([, re]) => [re.label, re.value]))
            }
          };
          let he = qt.compile(Y.content, { noEscape: !0 })(le);
          if (he = Mi.substituteParams(he), he.trim()) {
            const re = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: he.trim()
            }, we = je.pop();
            je.push(re), we && je.push(we);
          }
        }
        if (t.isReadonly) {
          je.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const le = await Kd(
            t.profileId,
            je,
            We.maxResponseToken,
            k.current.signal
          ), he = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: le
          }, re = [...X, he];
          p(re), s({ ...t, messages: re });
        } else {
          const le = t.type === "field" ? TA : (() => {
            const ze = [...Object.keys(ae.fields), ...Object.keys(ae.draftFields)], Ce = Object.keys(ae.draftFields);
            return MA(ze, Ce);
          })(), re = await LA(
            t.profileId,
            je,
            le,
            t.type === "field" ? r0.FIELD : r0.GLOBAL,
            t.promptEngineeringMode,
            We.maxResponseToken,
            k.current.signal
          ), we = ZA(ae, re, t.type, t.targetFieldId), ue = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: re.justification,
            stateSnapshot: we
          };
          let ie = [...X, ue];
          ie = B(ie, we, ae), p(ie), s({ ...t, messages: ie });
        }
      } catch (je) {
        je.name === "AbortError" ? _e("info", "Request was cancelled.") : (console.error("Revise request failed:", je), _e("error", `Request failed: ${je.message}`)), Ye();
      } finally {
        _(!1), k.current = null;
      }
    },
    [t, s, l, u, B]
  ), I = V.useCallback(async () => {
    if (!h.trim() || y) return;
    const X = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, Se = f;
    $(
      [...f, X],
      !1,
      () => {
        p([...f, X]), m("");
      },
      () => p(Se)
    );
  }, [h, y, f, $]), Z = V.useCallback(async () => {
    if (y || f.length === 0) return;
    const X = f;
    let Se = [...f];
    const Ee = f.findLastIndex((Ye) => !Ye.isStateUpdate);
    Ee > -1 && f[Ee].role === "assistant" && (Se = f.slice(0, Ee)), await $(
      Se,
      !0,
      () => p(Se),
      () => p(X)
    );
  }, [y, f, $]), K = () => {
    const X = f.slice().reverse().find((Se) => Se.stateSnapshot)?.stateSnapshot ?? l;
    i(X), r();
  }, pe = (X) => {
    const Se = f.findIndex((We) => We.id === X);
    if (Se === -1 || !f[Se].stateSnapshot) return;
    const Ee = f[Se].stateSnapshot;
    let Ye = l;
    for (let We = Se - 1; We >= 0; We--)
      if (f[We].stateSnapshot) {
        Ye = f[We].stateSnapshot;
        break;
      }
    v({ before: Ye, after: Ee });
  }, ge = () => {
    S(!0);
  }, be = (X) => {
    D(X.id), N(X.content);
  }, U = () => {
    D(null), N("");
  }, ne = async () => {
    if (!A) return;
    const X = f.findIndex((P) => P.id === A);
    if (X === -1 || !await Mi.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const Ee = f, Ye = f.slice(0, X), We = { ...f[X], content: C }, je = [...Ye, We];
    U(), $(
      je,
      !1,
      () => p(je),
      () => p(Ee)
    );
  }, ve = async (X) => {
    const Se = f.findIndex((P) => P.id === X);
    if (Se === -1) return;
    const Ye = !!f[Se].isInitial;
    if (!await Mi.Popup.show.confirm(
      "Delete Message",
      Ye ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let je;
    Ye ? je = f.filter((P) => P.isInitial && P.id !== X) : je = f.slice(0, Se), p(je), s({ ...t, messages: je }), _e("info", "Message history has been updated.");
  }, Le = f.filter((X) => !X.isStateUpdate), R = Le.filter((X) => X.isInitial), W = Le.filter((X) => !X.isInitial), se = f.slice().reverse().find((X) => X.stateSnapshot)?.stateSnapshot ?? l, ce = () => {
    T(!0);
  }, de = (X) => {
    const Se = f.slice().reverse().find((We) => We.stateSnapshot)?.stateSnapshot ?? l, Ee = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: X
    };
    let Ye = [...f, Ee];
    Ye = B(Ye, X, Se), p(Ye), s({ ...t, messages: Ye }), T(!1);
  }, Ie = () => {
    k.current?.abort();
  };
  return /* @__PURE__ */ x.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ x.jsx("h2", { children: t.name }),
      /* @__PURE__ */ x.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ x.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.isReadonly ?? !1,
              onChange: (X) => s({ ...t, isReadonly: X.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ x.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ x.jsx(
          e1,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (X) => s({ ...t, profileId: X?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ x.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (X) => s({ ...t, promptEngineeringMode: X.target.value }),
            title: "Prompt Engineering Mode",
            disabled: t.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ x.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ x.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ x.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ x.jsx(me, { onClick: ge, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ x.jsx(me, { onClick: ce, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ x.jsx(me, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ x.jsxs(me, { onClick: K, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: "chat-messages", children: [
      R.length > 0 && /* @__PURE__ */ x.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ x.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ x.jsx("div", { className: "initial-messages-content", children: R.map(
          (X) => A === X.id ? /* @__PURE__ */ x.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ x.jsx($t, { value: C, onChange: (Se) => N(Se.target.value), rows: 5 }),
            /* @__PURE__ */ x.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ x.jsxs(me, { onClick: ne, children: [
                /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ x.jsxs(me, { onClick: U, children: [
                /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, X.id) : /* @__PURE__ */ x.jsxs("div", { className: `message-bubble-wrapper initial-context ${X.role}`, children: [
            /* @__PURE__ */ x.jsx("div", { className: `message-bubble ${X.role} initial`, children: /* @__PURE__ */ x.jsx("div", { className: "message-content", children: X.content }) }),
            !y && X.id !== Xd && /* @__PURE__ */ x.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ x.jsxs(
                me,
                {
                  className: "message-action-button",
                  onClick: () => be(X),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ x.jsxs(
                me,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ve(X.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, X.id)
        ) })
      ] }),
      W.map(
        (X) => A === X.id ? /* @__PURE__ */ x.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ x.jsx($t, { value: C, onChange: (Se) => N(Se.target.value), rows: 3 }),
          /* @__PURE__ */ x.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ x.jsxs(me, { onClick: ne, children: [
              /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ x.jsxs(me, { onClick: U, children: [
              /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, X.id) : /* @__PURE__ */ x.jsxs("div", { className: `message-bubble-wrapper ${X.role}`, children: [
          /* @__PURE__ */ x.jsxs("div", { className: "message-actions", children: [
            X.role === "user" && !X.stateSnapshot && !y && /* @__PURE__ */ x.jsxs(
              me,
              {
                className: "message-action-button",
                onClick: () => be(X),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            X.stateSnapshot && !y && /* @__PURE__ */ x.jsxs(
              me,
              {
                className: "message-action-button",
                onClick: () => pe(X.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !y && /* @__PURE__ */ x.jsxs(
              me,
              {
                className: "message-action-button danger_button",
                onClick: () => ve(X.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ x.jsx("div", { className: `message-bubble ${X.role}`, children: X.role === "assistant" ? /* @__PURE__ */ x.jsx(k1, { content: X.content }) : /* @__PURE__ */ x.jsx("div", { className: "message-content", children: X.content }) })
        ] }, X.id)
      ),
      W.length > 0 && !y && /* @__PURE__ */ x.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ x.jsxs(me, { onClick: Z, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ x.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ x.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ x.jsx(me, { onClick: Ie, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ x.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ x.jsx(
        $t,
        {
          value: h,
          onChange: (X) => m(X.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: y || !!A,
          onKeyDown: (X) => {
            X.key === "Enter" && !X.shiftKey && (X.preventDefault(), I());
          }
        }
      ),
      /* @__PURE__ */ x.jsxs(me, { onClick: I, disabled: y || !h.trim() || !!A, children: [
        " ",
        /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    b && /* @__PURE__ */ x.jsx(
      Li,
      {
        type: _n.DISPLAY,
        content: /* @__PURE__ */ x.jsx(IA, { before: b.before, after: b.after }),
        onComplete: () => v(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ x.jsx(
      Li,
      {
        type: _n.DISPLAY,
        content: /* @__PURE__ */ x.jsx(PA, { currentState: se, initialState: l }),
        onComplete: () => S(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    E && /* @__PURE__ */ x.jsx(
      Li,
      {
        type: _n.DISPLAY,
        content: /* @__PURE__ */ x.jsx(
          GA,
          {
            initialState: se,
            onSave: de,
            onClose: () => T(!1)
          }
        ),
        onComplete: () => T(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
function j1(t, r = {}) {
  const i = t?.entries;
  if (!i)
    return [];
  const s = Array.isArray(i) ? i : Object.values(i);
  return r.includeDisabled ? s : s.filter((l) => !l.disable);
}
async function YA(t, r, i, s, l) {
  const u = mt.getSettings(), f = u.mainContextTemplatePresets[i];
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
        Object.entries(t.fields).filter(([v]) => !v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([v]) => v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, v]) => [v.label, v.value]))
    }
  };
  if (s.charCard) {
    const v = [];
    l.selectedCharacterIndexes.forEach((d) => {
      const S = Ft.characters[parseInt(d)];
      S && v.push(S);
    }), m.characters = v;
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      l.selectedWorldNames.map(async (d) => {
        const S = await Ft.loadWorldInfo(d);
        S && (v[d] = j1(S));
      })
    ), m.lorebooks = v;
  }
  for (const v of f.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona || v.promptName === "chatHistory" && s.messages.type === "none" || Ht === void 0 && !Fn && v.promptName === "chatHistory") continue;
    if (v.promptName === "chatHistory") {
      p.push({
        id: Xd,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(v.promptName))
      continue;
    const S = u.prompts[v.promptName];
    if (!S || S.content.includes("{{activeFormatInstructions}}"))
      continue;
    let E = "";
    E = qt.compile(S.content, { noEscape: !0 })(m), E = Ft.substituteParams(E), E.trim() && p.push({
      id: `im-${p.length}`,
      role: v.role,
      content: E.trim(),
      isInitial: !0
    });
  }
  const y = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, b = qt.compile(_, { noEscape: !0 })({
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
const R1 = "charCreator", z1 = "charCreator_reviseSessions", fo = () => SillyTavern.libs.localforage, XA = (t) => {
  if (!t)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(t), recovered: !1 };
  } catch (r) {
    return { value: null, recovered: !0, error: r };
  }
}, L1 = async (t, r, i) => {
  try {
    const s = await r.getItem(t);
    if (s !== null)
      return { value: s, migrated: !1, recovered: !1 };
    const l = XA(i.getItem(t));
    return l.value === null ? (l.recovered && i.removeItem(t), { value: null, migrated: !1, recovered: l.recovered, error: l.error }) : (await r.setItem(t, l.value), i.removeItem(t), { value: l.value, migrated: !0, recovered: l.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, I1 = async (t, r, i = fo()) => {
  try {
    return await i.setItem(t, r), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, $A = (t = fo(), r = localStorage) => L1(R1, t, r), QA = (t, r = fo()) => I1(R1, t, r), KA = (t = fo(), r = localStorage) => L1(z1, t, r), JA = (t, r = fo()) => I1(z1, t, r), lu = SillyTavern.getContext(), WA = ({
  target: t,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: l,
  sessionForContext: u
}) => {
  const [f, p] = V.useState([]), [h, m] = V.useState(null), [y, _] = V.useState(!0);
  V.useEffect(() => {
    let D = !0;
    return KA().then(({ value: C, recovered: N }) => {
      D && (p(Array.isArray(C) ? C : []), N && _e("warning", "Some saved revise sessions were invalid and have been reset."));
    }).catch((C) => {
      console.error("Failed to load revise sessions:", C), _e("warning", "Saved revise sessions could not be loaded.");
    }).finally(() => {
      D && _(!1);
    }), () => {
      D = !1;
    };
  }, []);
  const b = V.useMemo(() => f.filter((D) => D.type === t.type && (D.type === "global" || D.targetFieldId === t.fieldId)).sort((D, C) => new Date(C.createdAt).getTime() - new Date(D.createdAt).getTime()), [f, t]), v = (D) => {
    p(D), JA(D).then((C) => {
      C.persisted || (console.warn("Failed to save revise sessions:", C.error), _e("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, d = async () => {
    const D = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", C = await lu.Popup.show.input(
      "New Session Name",
      `Session for ${D} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (C)
      try {
        const N = mt.getSettings();
        if (!N.profileId) {
          _e("warning", "Please select a connection profile in the main popup first.");
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
        }, k = await YA(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          l,
          u
        );
        M.messages = k, v([...f, M]), m(M);
      } catch (N) {
        console.error("Failed to create session:", N), _e("error", `Failed to create session: ${N.message}`);
      }
  }, S = (D) => {
    m(D);
  }, E = async (D) => {
    if (await lu.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const N = f.filter((M) => M.id !== D);
      v(N);
    }
  }, T = (D) => {
    const C = f.findIndex((M) => M.id === D.id), N = [...f];
    C !== -1 ? N[C] = D : N.push(D), v(N), m(D);
  };
  if (h) {
    const D = lu.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === h.profileId
    ), C = {
      targetCharacterId: Ht,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Fn,
      presetName: D?.preset,
      contextName: D?.context,
      instructName: D?.instruct
    }, N = l.messages;
    switch (N.type) {
      case "none":
        C.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        C.messageIndexesBetween = { start: 0, end: N.first ?? 10 };
        break;
      case "last":
        const M = lu.chat?.length ?? 0, k = N.last ?? 10;
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
    return Ht === void 0 && !Fn && (C.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ x.jsx(
      VA,
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
  return /* @__PURE__ */ x.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ x.jsx("div", { className: "popup_header", children: /* @__PURE__ */ x.jsxs("h2", { children: [
      'Revise Sessions for "',
      A,
      '"'
    ] }) }),
    /* @__PURE__ */ x.jsx("div", { className: "session-list", children: y ? /* @__PURE__ */ x.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : b.length === 0 ? /* @__PURE__ */ x.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : b.map((D) => /* @__PURE__ */ x.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ x.jsxs("div", { className: "session-info", onClick: () => S(D), children: [
        /* @__PURE__ */ x.jsx("span", { className: "session-name", children: D.name }),
        /* @__PURE__ */ x.jsx("span", { className: "session-date", children: new Date(D.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ x.jsx(me, { className: "danger_button", onClick: () => E(D.id), children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ x.jsx("div", { className: "session-actions", children: /* @__PURE__ */ x.jsxs(me, { onClick: d, className: "menu_button", children: [
      /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, eN = SillyTavern.getContext(), tN = 50 * 1024 * 1024, nN = {
  "x-msvideo": "avi",
  quicktime: "mov",
  "x-matroska": "mkv",
  "x-ms-wmv": "wmv",
  "x-flv": "flv",
  "3gpp": "3gp"
};
function P1(t) {
  return new Promise((r, i) => {
    const s = new FileReader();
    s.onload = () => r(s.result), s.onerror = () => i(new Error("Failed to read file")), s.readAsDataURL(t);
  });
}
let rN = 0;
async function aN(t) {
  const r = t.type.startsWith("video/");
  r && t.size > tN && _e(
    "warning",
    `Video "${t.name}" is ${(t.size / 1024 / 1024).toFixed(1)}MB. Large videos may be slow to upload and expensive in tokens.`
  );
  const s = (await P1(t)).split(",")[1], l = t.type.split("/")[1] || "png", u = nN[l] || l, f = `brainstorm_${Date.now()}_${rN++}`, p = await fetch("/api/images/upload", {
    method: "POST",
    headers: eN.getRequestHeaders(),
    body: JSON.stringify({
      image: s,
      format: u,
      ch_name: "brainstorm",
      filename: f
    })
  });
  if (!p.ok)
    throw new Error(`Upload failed: ${p.statusText}`);
  return {
    url: (await p.json()).path,
    name: t.name,
    ...r ? { mediaType: "video" } : {}
  };
}
async function iN(t) {
  const r = await fetch(t);
  if (!r.ok)
    throw new Error(`Failed to fetch image: ${r.statusText}`);
  const i = await r.blob();
  return new Promise((s, l) => {
    const u = new FileReader();
    u.onload = () => s(u.result), u.onerror = () => l(new Error("Failed to convert image to data URL")), u.readAsDataURL(i);
  });
}
async function B1(t, r, i, s, l) {
  const u = mt.getSettings(), f = u.mainContextTemplatePresets[i];
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
      alternate_greetings: s.dontSendOtherGreetings ? {} : Object.fromEntries(
        Object.entries(t).filter(([_]) => _.startsWith("alternate_greetings_")).map(([, _]) => [_.label, _.value])
      ),
      draft: Object.fromEntries(Object.entries(r).map(([, _]) => [_.label, _.value]))
    }
  };
  if (s.charCard) {
    const _ = [];
    l.selectedCharacterIndexes.forEach((b) => {
      const v = Ft.characters[parseInt(b)];
      v && _.push(v);
    }), m.characters = _;
  }
  if (s.worldInfo) {
    const _ = {};
    await Promise.all(
      l.selectedWorldNames.map(async (b) => {
        const v = await Ft.loadWorldInfo(b);
        v && (_[b] = Object.values(v.entries).filter((d) => !d.disable));
      })
    ), m.lorebooks = _;
  }
  const y = u.prompts.brainstormSystemPrompt;
  if (y?.content) {
    let _ = qt.compile(y.content, { noEscape: !0 })(m);
    _ = Ft.substituteParams(_), _.trim() && p.push({
      id: `im-${p.length}`,
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
      "brainstormSystemPrompt"
    ].includes(_.promptName)) continue;
    const v = u.prompts[_.promptName];
    if (!v || v.content.includes("{{activeFormatInstructions}}")) continue;
    let d = qt.compile(v.content, { noEscape: !0 })(m);
    d = Ft.substituteParams(d), d.trim() && p.push({
      id: `im-${p.length}`,
      role: _.role,
      content: d.trim(),
      isInitial: !0
    });
  }
  return p;
}
const i0 = SillyTavern.getContext(), sN = ({
  session: t,
  onBack: r,
  onSessionUpdate: i,
  contextToSend: s,
  sessionForContext: l
}) => {
  const [u, f] = V.useState(t.messages), [p, h] = V.useState(""), [m, y] = V.useState(!1), [_, b] = V.useState(null), [v, d] = V.useState(""), [S, E] = V.useState([]), T = V.useRef(null), A = V.useRef(null), [D, C] = V.useState([]), [N, M] = V.useState([]), k = V.useRef(null), B = V.useRef(/* @__PURE__ */ new Map()), $ = V.useRef(!1), I = (Y) => Y.type.startsWith("video/"), Z = (Y) => Y.mediaType === "video", K = V.useRef(u);
  K.current = u;
  const pe = V.useRef(t);
  pe.current = t;
  const ge = V.useRef(i);
  ge.current = i;
  const be = V.useRef(l);
  be.current = l;
  const U = JSON.stringify(s), ne = V.useRef(!0);
  V.useEffect(() => {
    if (ne.current) {
      ne.current = !1;
      return;
    }
    let Y = !1;
    return (async () => {
      const he = mt.getSettings();
      try {
        const re = await B1(
          be.current.fields,
          be.current.draftFields,
          he.mainContextTemplatePreset,
          s,
          be.current
        );
        if (Y) return;
        const we = K.current.filter((ie) => !ie.isInitial), ue = [...re, ...we];
        f(ue), ge.current({
          ...pe.current,
          messages: ue,
          contextConfig: {
            stDescription: s.stDescription,
            charCard: s.charCard,
            existingFields: s.existingFields,
            worldInfo: s.worldInfo,
            persona: s.persona,
            messages: s.messages
          }
        });
      } catch (re) {
        console.error("Failed to rebuild brainstorm context:", re);
      }
    })(), () => {
      Y = !0;
    };
  }, [U]);
  const ve = V.useCallback(async (Y) => {
    const le = Y.filter((re) => re.type.startsWith("image/") || re.type.startsWith("video/"));
    if (le.length === 0) return;
    const he = await Promise.all(le.map((re) => P1(re)));
    C((re) => [...re, ...le]), M((re) => [...re, ...he]);
  }, []), Le = V.useCallback((Y) => {
    C((le) => le.filter((he, re) => re !== Y)), M((le) => le.filter((he, re) => re !== Y));
  }, []), R = V.useCallback(
    (Y) => {
      const le = Array.from(Y.clipboardData.files);
      le.some((he) => he.type.startsWith("image/") || he.type.startsWith("video/")) && (Y.preventDefault(), ve(le));
    },
    [ve]
  ), W = V.useCallback(
    (Y) => {
      const le = Array.from(Y.target.files || []);
      ve(le), k.current && (k.current.value = "");
    },
    [ve]
  );
  V.useEffect(() => {
    T.current?.scrollIntoView({ behavior: "smooth" });
  }, [u]);
  const se = V.useCallback(
    async (Y, le, he) => {
      const re = mt.getSettings();
      if (!re.profileId) {
        _e("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      A.current = new AbortController();
      for (const we of Y)
        if (we.images) {
          for (const ue of we.images)
            if (!B.current.has(ue.url))
              try {
                const ie = await iN(ue.url);
                B.current.set(ue.url, ie);
              } catch (ie) {
                console.warn(`Failed to load image ${ue.url}, skipping`, ie);
              }
        }
      le(), y(!0);
      try {
        const we = Y.some((Ue) => Ue.images?.some((Qt) => Qt.mediaType === "video")), ue = a0(
          Y,
          B.current,
          we && $.current
        );
        let ie;
        try {
          ie = await Kd(
            re.profileId,
            ue,
            re.maxResponseToken,
            A.current.signal
          );
        } catch (Ue) {
          if (Ue.name === "AbortError" || !we || $.current)
            throw Ue;
          $.current = !0;
          const Qt = a0(Y, B.current, !0);
          ie = await Kd(
            re.profileId,
            Qt,
            re.maxResponseToken,
            A.current.signal
          ), _e("warning", "Video attachments were skipped because the current model does not support them.");
        }
        const ze = {
          id: `bm-${Date.now()}-ai`,
          role: "assistant",
          content: ie
        }, Ce = [...Y, ze];
        f(Ce), i({ ...t, messages: Ce });
      } catch (we) {
        we.name === "AbortError" ? _e("info", "Request was cancelled.") : (console.error("Brainstorm request failed:", we), _e("error", `Request failed: ${we.message}`)), he();
      } finally {
        y(!1), A.current = null;
      }
    },
    [t, i]
  ), ce = V.useCallback(async () => {
    if (m) return;
    const Y = u.filter((ie) => !ie.isInitial), he = Y[Y.length - 1]?.role === "user";
    if (!p.trim() && D.length === 0 && !he) return;
    if (!p.trim() && D.length === 0 && he) {
      const ie = u;
      await se(
        u,
        () => {
        },
        () => f(ie)
      );
      return;
    }
    let re = [];
    if (D.length > 0)
      try {
        re = await Promise.all(D.map((ie) => aN(ie)));
        for (let ie = 0; ie < re.length; ie++)
          B.current.set(re[ie].url, N[ie]);
      } catch (ie) {
        console.error("Upload failed:", ie), _e("error", `Upload failed: ${ie.message}`);
        return;
      }
    const we = {
      id: `bm-${Date.now()}`,
      role: "user",
      content: p.trim(),
      ...re.length > 0 ? { images: re } : {}
    }, ue = [...u, we];
    se(
      ue,
      () => {
        f(ue), h(""), C([]), M([]);
      },
      () => {
        f(ue), i({ ...t, messages: ue });
      }
    );
  }, [p, m, u, se, D, N, t, i]), de = V.useCallback(async () => {
    if (m || u.length === 0) return;
    const Y = u;
    let le = [...u];
    const he = u.length - 1;
    u[he].role === "assistant" && (le = u.slice(0, he)), await se(
      le,
      () => f(le),
      () => f(Y)
    );
  }, [m, u, se]), Ie = (Y) => {
    b(Y.id), d(Y.content), E(Y.images ? [...Y.images] : []);
  }, X = () => {
    b(null), d(""), E([]);
  }, Se = async () => {
    if (!_) return;
    const Y = u.findIndex((ze) => ze.id === _);
    if (Y === -1) return;
    if (u[Y].role === "assistant") {
      const ze = u.map(
        (Ce) => Ce.id === _ ? { ...Ce, content: v, images: S.length > 0 ? S : void 0 } : Ce
      );
      f(ze), i({ ...t, messages: ze }), X();
      return;
    }
    if (!await i0.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const re = u, we = u.slice(0, Y), ue = {
      ...u[Y],
      content: v,
      images: S.length > 0 ? S : void 0
    }, ie = [...we, ue];
    X(), se(
      ie,
      () => f(ie),
      () => f(re)
    );
  }, Ee = async (Y) => {
    const le = u.findIndex((ie) => ie.id === Y);
    if (le === -1) return;
    const re = !!u[le].isInitial;
    if (!await i0.Popup.show.confirm(
      "Delete Message",
      re ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let ue;
    re ? ue = u.filter((ie) => ie.isInitial && ie.id !== Y) : ue = u.slice(0, le), f(ue), i({ ...t, messages: ue }), _e("info", "Message history has been updated.");
  }, Ye = () => {
    A.current?.abort();
  }, We = u.filter((Y) => Y.isInitial), je = u.filter((Y) => !Y.isInitial), P = je.filter((Y) => Y.role === "assistant").at(-1)?.id, oe = je[je.length - 1], ae = !!(oe && oe.role === "user");
  return /* @__PURE__ */ x.jsxs("div", { className: "brainstorm-chat", children: [
    /* @__PURE__ */ x.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ x.jsx("h3", { children: t.name }),
      /* @__PURE__ */ x.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ x.jsxs(me, { onClick: r, title: "Back to sessions", children: [
        /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-arrow-left" }),
        " Back"
      ] }) })
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: "chat-messages", children: [
      We.length > 0 && /* @__PURE__ */ x.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ x.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ x.jsx("div", { className: "initial-messages-content", children: We.map(
          (Y) => _ === Y.id ? /* @__PURE__ */ x.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ x.jsx($t, { value: v, onChange: (le) => d(le.target.value), rows: 5 }),
            S.length > 0 && /* @__PURE__ */ x.jsx("div", { className: "pending-images-preview", children: S.map((le, he) => /* @__PURE__ */ x.jsxs("div", { className: "pending-image-item", children: [
              Z(le) ? /* @__PURE__ */ x.jsxs("div", { className: "video-thumbnail-wrapper", children: [
                /* @__PURE__ */ x.jsx("video", { src: le.url, muted: !0, preload: "metadata" }),
                /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-play video-play-icon" })
              ] }) : /* @__PURE__ */ x.jsx("img", { src: le.url, alt: le.name }),
              /* @__PURE__ */ x.jsx(
                me,
                {
                  className: "remove-image-button danger_button",
                  onClick: () => E((re) => re.filter((we, ue) => ue !== he)),
                  title: "Remove image",
                  children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-times" })
                }
              )
            ] }, he)) }),
            /* @__PURE__ */ x.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ x.jsxs(me, { onClick: Se, children: [
                /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ x.jsxs(me, { onClick: X, children: [
                /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, Y.id) : /* @__PURE__ */ x.jsxs("div", { className: `message-bubble-wrapper initial-context ${Y.role}`, children: [
            /* @__PURE__ */ x.jsx("div", { className: `message-bubble ${Y.role} initial`, children: /* @__PURE__ */ x.jsx("div", { className: "message-content", children: Y.content }) }),
            !m && /* @__PURE__ */ x.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ x.jsx(
                me,
                {
                  className: "message-action-button",
                  onClick: () => Ie(Y),
                  title: "Edit Context",
                  children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ x.jsx(
                me,
                {
                  className: "message-action-button danger_button",
                  onClick: () => Ee(Y.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, Y.id)
        ) })
      ] }),
      je.map((Y) => {
        const le = Y.role === "assistant" && Y.id === P;
        return _ === Y.id ? /* @__PURE__ */ x.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ x.jsx($t, { value: v, onChange: (re) => d(re.target.value), rows: 10 }),
          S.length > 0 && /* @__PURE__ */ x.jsx("div", { className: "pending-images-preview", children: S.map((re, we) => /* @__PURE__ */ x.jsxs("div", { className: "pending-image-item", children: [
            Z(re) ? /* @__PURE__ */ x.jsxs("div", { className: "video-thumbnail-wrapper", children: [
              /* @__PURE__ */ x.jsx("video", { src: re.url, muted: !0, preload: "metadata" }),
              /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-play video-play-icon" })
            ] }) : /* @__PURE__ */ x.jsx("img", { src: re.url, alt: re.name }),
            /* @__PURE__ */ x.jsx(
              me,
              {
                className: "remove-image-button danger_button",
                onClick: () => E((ue) => ue.filter((ie, ze) => ze !== we)),
                title: "Remove image",
                children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-times" })
              }
            )
          ] }, we)) }),
          /* @__PURE__ */ x.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ x.jsxs(me, { onClick: Se, children: [
              /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-check" }),
              " ",
              Y.role === "assistant" ? "Save" : "Save & Fork"
            ] }),
            /* @__PURE__ */ x.jsxs(me, { onClick: X, children: [
              /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, Y.id) : /* @__PURE__ */ x.jsx("div", { className: `message-bubble-wrapper ${Y.role}`, children: /* @__PURE__ */ x.jsxs("div", { className: `message-bubble ${Y.role}`, children: [
          !m && /* @__PURE__ */ x.jsxs("div", { className: "message-actions", children: [
            /* @__PURE__ */ x.jsx(
              me,
              {
                className: "message-action-button",
                onClick: () => Ie(Y),
                title: Y.role === "assistant" ? "Edit Message" : "Edit and Fork",
                children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            le && /* @__PURE__ */ x.jsx(
              me,
              {
                className: "message-action-button",
                onClick: de,
                title: "Regenerate response",
                children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-rotate-right" })
              }
            ),
            /* @__PURE__ */ x.jsx(
              me,
              {
                className: "message-action-button danger_button",
                onClick: () => Ee(Y.id),
                title: "Delete Message",
                children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          Y.role === "assistant" ? /* @__PURE__ */ x.jsx(k1, { content: Y.content }) : /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
            /* @__PURE__ */ x.jsx("div", { className: "message-content", children: Y.content }),
            Y.images && Y.images.length > 0 && /* @__PURE__ */ x.jsx("div", { className: "message-images", children: Y.images.map(
              (re, we) => Z(re) ? /* @__PURE__ */ x.jsxs(
                "div",
                {
                  className: "video-thumbnail-wrapper",
                  title: re.name,
                  onClick: () => window.open(re.url, "_blank"),
                  children: [
                    /* @__PURE__ */ x.jsx("video", { src: re.url, muted: !0, preload: "metadata" }),
                    /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-play video-play-icon" })
                  ]
                },
                we
              ) : /* @__PURE__ */ x.jsx(
                "img",
                {
                  src: re.url,
                  alt: re.name,
                  title: re.name,
                  onClick: () => window.open(re.url, "_blank")
                },
                we
              )
            ) })
          ] })
        ] }) }, Y.id);
      }),
      m && /* @__PURE__ */ x.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ x.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ x.jsx(me, { onClick: Ye, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ x.jsx("div", { ref: T })
    ] }),
    N.length > 0 && /* @__PURE__ */ x.jsx("div", { className: "pending-images-preview", children: N.map((Y, le) => /* @__PURE__ */ x.jsxs(
      "div",
      {
        className: `pending-image-item ${I(D[le]) ? "video-thumbnail-wrapper" : ""}`,
        children: [
          I(D[le]) ? /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
            /* @__PURE__ */ x.jsx("video", { src: Y, muted: !0, preload: "metadata" }),
            /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-play video-play-icon" })
          ] }) : /* @__PURE__ */ x.jsx("img", { src: Y, alt: D[le]?.name || "pending" }),
          /* @__PURE__ */ x.jsx(
            me,
            {
              className: "remove-image-button danger_button",
              onClick: () => Le(le),
              title: "Remove image",
              children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-times" })
            }
          )
        ]
      },
      le
    )) }),
    /* @__PURE__ */ x.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ x.jsx(
        "input",
        {
          ref: k,
          type: "file",
          accept: "image/*,video/*",
          multiple: !0,
          style: { display: "none" },
          onChange: W
        }
      ),
      /* @__PURE__ */ x.jsx(
        $t,
        {
          value: p,
          onChange: (Y) => h(Y.target.value),
          placeholder: "Brainstorm ideas for your character...",
          rows: 3,
          disabled: m || !!_,
          onKeyDown: (Y) => {
            Y.key === "Enter" && !Y.shiftKey && (Y.preventDefault(), ce());
          },
          onPaste: R
        }
      ),
      /* @__PURE__ */ x.jsx(
        me,
        {
          className: "image-attach-button",
          onClick: () => k.current?.click(),
          disabled: m || !!_,
          title: "Attach image or video",
          children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-paperclip" })
        }
      ),
      /* @__PURE__ */ x.jsx(
        me,
        {
          onClick: ce,
          disabled: m || !!_ || !p.trim() && D.length === 0 && !ae,
          children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-paper-plane" })
        }
      )
    ] })
  ] });
}, s0 = SillyTavern.getContext(), Ed = "charCreator_brainstormSessions", oN = 5, lN = ({ contextToSend: t, sessionForContext: r }) => {
  const [i, s] = V.useState([]), [l, u] = V.useState(null), [f, p] = V.useState(!0);
  V.useEffect(() => {
    const E = JSON.parse(localStorage.getItem(Ed) || "[]"), T = E.some((D) => D.saved === void 0), A = E.map((D) => ({
      ...D,
      saved: D.saved ?? !0
    }));
    T && localStorage.setItem(Ed, JSON.stringify(A)), s(A), p(!1);
  }, []);
  const h = V.useMemo(() => i.filter((E) => E.saved).sort((E, T) => new Date(T.createdAt).getTime() - new Date(E.createdAt).getTime()), [i]), m = V.useMemo(() => i.filter((E) => !E.saved).sort((E, T) => new Date(T.createdAt).getTime() - new Date(E.createdAt).getTime()), [i]), y = (E) => {
    localStorage.setItem(Ed, JSON.stringify(E)), s(E);
  }, _ = async () => {
    const E = `Brainstorm - ${(/* @__PURE__ */ new Date()).toLocaleString()}`;
    try {
      const T = mt.getSettings();
      if (!T.profileId) {
        _e("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      const A = {
        id: `bs-${Date.now()}`,
        name: E,
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
      }, D = await B1(
        r.fields,
        r.draftFields,
        T.mainContextTemplatePreset,
        t,
        r
      );
      A.messages = D;
      let C = [...i];
      const N = C.filter((M) => !M.saved).sort((M, k) => new Date(M.createdAt).getTime() - new Date(k.createdAt).getTime());
      if (N.length >= oN) {
        const M = N[0];
        C = C.filter((k) => k.id !== M.id), l?.id === M.id && u(null);
      }
      C.push(A), y(C), u(A);
    } catch (T) {
      console.error("Failed to create brainstorm session:", T), _e("error", `Failed to create session: ${T.message}`);
    }
  }, b = (E) => {
    u(E);
  }, v = async (E) => {
    if (await s0.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const A = i.filter((D) => D.id !== E);
      y(A), l?.id === E && u(null);
    }
  }, d = async (E) => {
    const T = i.find((C) => C.id === E);
    if (!T) return;
    const A = await s0.Popup.show.input("Save Session", T.name);
    if (!A) return;
    const D = i.map((C) => C.id === E ? { ...C, saved: !0, name: A } : C);
    y(D), l?.id === E && u({ ...T, saved: !0, name: A });
  }, S = (E) => {
    const T = i.findIndex((D) => D.id === E.id), A = [...i];
    T !== -1 ? A[T] = E : A.push(E), y(A), u(E);
  };
  return l ? /* @__PURE__ */ x.jsx(
    sN,
    {
      session: l,
      onBack: () => u(null),
      onSessionUpdate: S,
      contextToSend: t,
      sessionForContext: r
    }
  ) : /* @__PURE__ */ x.jsxs("div", { className: "brainstorm-session-manager", children: [
    /* @__PURE__ */ x.jsx("div", { className: "popup_header", children: /* @__PURE__ */ x.jsx("h3", { children: "Brainstorm Sessions" }) }),
    /* @__PURE__ */ x.jsx("div", { className: "session-actions", children: /* @__PURE__ */ x.jsxs(me, { onClick: _, className: "menu_button", children: [
      /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) }),
    /* @__PURE__ */ x.jsx("div", { className: "session-list", children: f ? /* @__PURE__ */ x.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : h.length === 0 && m.length === 0 ? /* @__PURE__ */ x.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      m.length > 0 && /* @__PURE__ */ x.jsxs("div", { className: "session-section", children: [
        /* @__PURE__ */ x.jsxs("h4", { className: "session-section-header", children: [
          /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-clock" }),
          " Workspace"
        ] }),
        m.map((E) => /* @__PURE__ */ x.jsxs("div", { className: "session-item", children: [
          /* @__PURE__ */ x.jsxs("div", { className: "session-info", onClick: () => b(E), children: [
            /* @__PURE__ */ x.jsx("span", { className: "session-name", children: E.name }),
            /* @__PURE__ */ x.jsx("span", { className: "session-date", children: new Date(E.createdAt).toLocaleString() })
          ] }),
          /* @__PURE__ */ x.jsxs("div", { className: "session-item-actions", children: [
            /* @__PURE__ */ x.jsx(me, { className: "menu_button", onClick: () => d(E.id), children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-floppy-disk" }) }),
            /* @__PURE__ */ x.jsx(me, { className: "danger_button", onClick: () => v(E.id), children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-trash-can" }) })
          ] })
        ] }, E.id))
      ] }),
      h.length > 0 && /* @__PURE__ */ x.jsxs("div", { className: "session-section", children: [
        /* @__PURE__ */ x.jsxs("h4", { className: "session-section-header", children: [
          /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-bookmark" }),
          " Saved"
        ] }),
        h.map((E) => /* @__PURE__ */ x.jsxs("div", { className: "session-item", children: [
          /* @__PURE__ */ x.jsxs("div", { className: "session-info", onClick: () => b(E), children: [
            /* @__PURE__ */ x.jsx("span", { className: "session-name", children: E.name }),
            /* @__PURE__ */ x.jsx("span", { className: "session-date", children: new Date(E.createdAt).toLocaleString() })
          ] }),
          /* @__PURE__ */ x.jsx(me, { className: "danger_button", onClick: () => v(E.id), children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-trash-can" }) })
        ] }, E.id))
      ] })
    ] }) })
  ] });
};
function uN(t, r) {
  return {
    name: t.name?.value ?? "",
    description: t.description?.value ?? "",
    personality: t.personality?.value ?? "",
    scenario: t.scenario?.value ?? "",
    first_mes: t.first_mes?.value ?? "",
    mes_example: t.mes_example?.value ?? "",
    alternate_greetings: r.map((i) => i.value).filter(Boolean)
  };
}
function cN(t, r = []) {
  const i = new Set(t), s = r.filter((l) => l && !i.has(l));
  return [
    ...t.map((l) => ({ value: l, label: l })),
    ...s.map((l) => ({ value: l, label: `${l} (missing)` }))
  ];
}
const kn = SillyTavern.getContext(), Cd = () => ({
  selectedCharacterIndexes: Ht ? [String(Ht)] : [],
  selectedWorldNames: [],
  fields: Wn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Er[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), fN = {
  name: { label: Er.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Er.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Er.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Er.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Er.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Er.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, dN = () => {
  const t = t1(), r = mt.getSettings(), [i, s] = V.useState(Cd()), [l, u] = V.useState([]), [f, p] = V.useState(!0), [h, m] = V.useState("core"), [y, _] = V.useState([]), [b, v] = V.useState([]), [d, S] = V.useState(null), [E, T] = V.useState(null), [A, D] = V.useState(!1), [C, N] = V.useState(null);
  V.useEffect(() => {
    (async () => {
      p(!0), _(kn.characters), v(iv);
      const oe = (await $A()).value ?? {}, ae = Cd();
      if (oe.fields && (ae.fields = { ...ae.fields, ...oe.fields }), oe.draftFields && (ae.draftFields = oe.draftFields), oe.selectedCharacterIndexes && (ae.selectedCharacterIndexes = oe.selectedCharacterIndexes), oe.selectedWorldNames && (ae.selectedWorldNames = oe.selectedWorldNames), oe.lastLoadedCharacterId) {
        ae.lastLoadedCharacterId = oe.lastLoadedCharacterId;
        const Y = kn.characters.find((le) => le.avatar === oe.lastLoadedCharacterId);
        Y && S(Y);
      }
      s(ae), p(!1);
    })();
  }, []), V.useEffect(() => {
    f || QA(i).then((P) => {
      P.persisted || (console.warn("Failed to save Character Creator session:", P.error), _e("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [i, f]);
  const M = (P, oe) => {
    mt.getSettings()[P] = oe, mt.saveSettings(), t();
  }, k = (P, oe) => {
    mt.getSettings().contextToSend[P] = oe, mt.saveSettings(), t();
  }, B = V.useCallback(
    (P, oe, ae, Y) => {
      s((le) => {
        const he = Y ? "draftFields" : "fields", re = { ...le[he] };
        return re[P] || (re[P] = { value: "", prompt: "", label: P }), re[P][ae] = oe, { ...le, [he]: re };
      });
    },
    []
  ), $ = V.useMemo(
    () => Object.keys(i.fields).filter((P) => P.startsWith("alternate_greetings_")).sort((P, oe) => parseInt(P.split("_")[2]) - parseInt(oe.split("_")[2])).map((P) => i.fields[P]),
    [i.fields]
  ), I = V.useCallback((P) => {
    s((oe) => {
      const ae = { ...oe.fields };
      return Object.keys(ae).forEach((Y) => {
        Y.startsWith("alternate_greetings_") && delete ae[Y];
      }), P.forEach((Y, le) => {
        const he = `alternate_greetings_${le + 1}`;
        ae[he] = { ...Y, label: `Alternate_Greeting_${le + 1}` };
      }), { ...oe, fields: ae };
    });
  }, []), Z = V.useCallback(
    (P, oe) => {
      B(P, "", "value", oe);
    },
    [B]
  ), K = V.useCallback(
    async (P) => {
      await kn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[P].label}"?`
      ) && s((ae) => {
        const Y = { ...ae.draftFields };
        return delete Y[P], { ...ae, draftFields: Y };
      });
    },
    [i.draftFields]
  ), pe = V.useCallback(async () => {
    const P = await kn.Popup.show.input("Enter Draft Field Name", "");
    if (!P?.trim()) return;
    const oe = Ud(P.trim());
    if (!oe) return _e("error", "Invalid field name.");
    if (i.draftFields[oe] || Wn.includes(oe))
      return _e("warning", "Field name already exists.");
    s((ae) => ({
      ...ae,
      draftFields: { ...ae.draftFields, [oe]: { value: "", prompt: "", label: P } }
    })), m("draft");
  }, [i.draftFields]), ge = (P) => {
    N({ type: "field", fieldId: P }), D(!0);
  }, be = () => {
    N({ type: "global" }), D(!0);
  }, U = (P) => {
    s((oe) => ({
      ...oe,
      fields: { ...oe.fields, ...P.fields },
      draftFields: { ...oe.draftFields, ...P.draftFields }
    })), _e("success", "Changes from revise session applied."), D(!1);
  }, ne = V.useCallback(
    async (P, oe) => {
      if (!r.profileId) return _e("warning", "Please select a connection profile.");
      u((ae) => [...ae, P]);
      try {
        const ae = kn.extensionSettings.connectionManager?.profiles?.find(
          (Ce) => Ce.id === r.profileId
        );
        if (!ae) throw new Error("Connection profile not found.");
        const Y = {
          presetName: ae?.preset,
          contextName: ae?.context,
          instructName: ae?.instruct,
          targetCharacterId: Ht,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Fn
        }, le = r.contextToSend.messages;
        switch (le.type) {
          case "none":
            Y.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            Y.messageIndexesBetween = { start: 0, end: le.first ?? 10 };
            break;
          case "last":
            const Ce = kn.chat?.length ?? 0, Ue = le.last ?? 10;
            Y.messageIndexesBetween = {
              end: Math.max(0, Ce - 1),
              start: Math.max(0, Ce - Ue)
            };
            break;
          case "range":
            Y.messageIndexesBetween = {
              start: le.range?.start ?? 0,
              end: le.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        Ht === void 0 && !Fn && (Y.messageIndexesBetween = { start: -1, end: -1 });
        const he = {};
        await Promise.all(
          iv.filter((Ce) => !he[Ce]).map(async (Ce) => {
            const Ue = await kn.loadWorldInfo(Ce);
            Ue && (he[Ce] = j1(Ue, { includeDisabled: !0 }));
          })
        );
        const re = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete re.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete re.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete re.lorebookDefinitions, r.contextToSend.existingFields || delete re.existingFieldDefinitions, r.contextToSend.persona || delete re.personaDescription, delete re.worldInfoCharDefinition;
        const we = r.mainContextTemplatePresets[r.mainContextTemplatePreset] ?? r.mainContextTemplatePresets.default;
        if (!we) throw new Error("Main context template preset not found.");
        const ue = await YE({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset]?.content ?? "",
          buildPromptOptions: Y,
          continueFrom: oe,
          session: i,
          allCharacters: y,
          entriesGroupByWorldName: he,
          promptSettings: re,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`]?.content ?? "" },
          mainContextList: we.prompts.filter((Ce) => Ce.enabled),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: P,
          outputFormat: r.outputFormat
        }), ie = P.startsWith("alternate_greetings_"), ze = !ie && !Wn.includes(P);
        if (ie) {
          const Ce = parseInt(P.split("_")[2]) - 1;
          $[Ce] && I($.map((Ue, Qt) => Qt === Ce ? { ...Ue, value: ue } : Ue));
        } else
          B(P, ue, "value", ze);
      } catch (ae) {
        console.error(ae), _e("error", ae.message || String(ae));
      } finally {
        u((ae) => ae.filter((Y) => Y !== P));
      }
    },
    [i, r, y, $, B, I]
  ), ve = V.useCallback(async () => {
    await kn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(Cd()), S(null));
  }, []), Le = V.useCallback(
    (P) => {
      if (!d) return _e("warning", "Please load a character to compare against.");
      let oe, ae, Y;
      typeof P == "number" ? (oe = $[P]?.value ?? "", ae = d.data?.alternate_greetings?.[P] ?? "", Y = `Alternate_Greeting_${P + 1}`) : (oe = i.fields[P]?.value ?? "", ae = d[P] ?? d.data?.[P] ?? "", Y = Er[P]), T({ original: ae, current: oe, fieldName: Y });
    },
    [d, i.fields, $]
  ), R = V.useCallback(
    async (P) => {
      const oe = y[parseInt(P)];
      if (!oe || Wn.some((he) => i.fields[he].value.trim() !== "") && !await kn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const Y = { ...i.fields };
      Wn.forEach((he) => {
        Y[he] = { value: oe[he] ?? oe.data?.[he] ?? "", prompt: "", label: Er[he] };
      });
      const le = (oe.data?.alternate_greetings ?? []).map((he) => ({ value: he, prompt: "" }));
      S(oe), s((he) => ({ ...he, fields: Y, lastLoadedCharacterId: oe.avatar })), I(le);
    },
    [y, i.fields, I]
  ), W = V.useCallback(async () => {
    if (Fn) {
      _e("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (Ht === void 0) {
      _e("warning", "No character chat is currently open.");
      return;
    }
    await R(String(Ht));
  }, [R]), se = () => $.map((P) => P.value).filter((P) => P.trim() !== ""), ce = async () => {
    if (!i.fields.name.value) return _e("warning", "Please provide a character name.");
    if (!await kn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const oe = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: se(),
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
      await k2(oe, !0);
    } catch (ae) {
      _e("error", `Failed to create character: ${ae.message}`);
    }
  }, de = async () => {
    if (!d) return _e("warning", "Please load a character to override.");
    if (!await kn.Popup.show.confirm(
      "Override Character",
      `Override "${d.name}"? This cannot be undone.`
    )) return;
    const oe = {
      ...d,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        ...d.data,
        alternate_greetings: se(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await j2(oe, !0), _e("success", `Character "${oe.name}" updated!`);
    } catch (ae) {
      _e("error", `Failed to override character: ${ae.message}`);
    }
  }, Ie = () => {
    const P = JSON.stringify({ draftFields: i.draftFields, version: J0 }, null, 2), oe = new Blob([P], { type: "application/json" }), ae = document.createElement("a");
    ae.href = URL.createObjectURL(oe), ae.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ae.click(), URL.revokeObjectURL(ae.href);
  }, X = () => {
    const P = document.createElement("input");
    P.type = "file", P.accept = ".json", P.onchange = async () => {
      const oe = P.files?.[0];
      if (oe)
        try {
          const ae = await oe.text(), Y = JSON.parse(ae);
          if (!Y.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await kn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((he) => ({ ...he, draftFields: Y.draftFields })), _e("success", "Draft fields imported."));
        } catch (ae) {
          _e("error", `Import failed: ${ae.message}`);
        }
    }, P.click();
  }, Se = V.useMemo(
    () => y.map((P, oe) => ({ value: String(oe), label: P.name })),
    [y]
  ), Ee = V.useMemo(
    () => b.map((P) => ({ value: P, label: P })),
    [b]
  ), Ye = V.useMemo(
    () => cN(b, i.selectedWorldNames),
    [b, i.selectedWorldNames]
  ), We = V.useMemo(
    () => Object.keys(r.promptPresets).map((P) => ({ value: P, label: P })),
    [r.promptPresets]
  ), je = V.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((P) => ({ value: P, label: P })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ x.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ x.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ x.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ x.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ x.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ x.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ x.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ x.jsx(
            e1,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (P) => M("profileId", P?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ x.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ x.jsx("h3", { children: "Context to Send" }),
          /* @__PURE__ */ x.jsxs("div", { className: "context-options", children: [
            /* @__PURE__ */ x.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ x.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.stDescription,
                  onChange: (P) => k("stDescription", P.target.checked)
                }
              ),
              " ",
              "Description of SillyTavern & Char Card"
            ] }),
            /* @__PURE__ */ x.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ x.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.persona,
                  onChange: (P) => k("persona", P.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (Ht !== void 0 || Fn) && /* @__PURE__ */ x.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ x.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ x.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (P) => k("messages", {
                    ...r.contextToSend.messages,
                    type: P.target.value
                  }),
                  children: [
                    /* @__PURE__ */ x.jsx("option", { value: "none", children: "None" }),
                    /* @__PURE__ */ x.jsx("option", { value: "all", children: "All Messages" }),
                    /* @__PURE__ */ x.jsx("option", { value: "first", children: "First X Messages" }),
                    /* @__PURE__ */ x.jsx("option", { value: "last", children: "Last X Messages" }),
                    /* @__PURE__ */ x.jsx("option", { value: "range", children: "Range" })
                  ]
                }
              ),
              r.contextToSend.messages.type === "first" && /* @__PURE__ */ x.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ x.jsxs("label", { children: [
                "First",
                " ",
                /* @__PURE__ */ x.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.first ?? 10,
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(P.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "last" && /* @__PURE__ */ x.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ x.jsxs("label", { children: [
                "Last",
                " ",
                /* @__PURE__ */ x.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.last ?? 10,
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(P.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "range" && /* @__PURE__ */ x.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ x.jsxs("label", { children: [
                "Range:",
                " ",
                /* @__PURE__ */ x.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "0",
                    placeholder: "Start",
                    value: r.contextToSend.messages.range?.start ?? 0,
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: parseInt(P.target.value) || 0
                      }
                    })
                  }
                ),
                " ",
                "to",
                " ",
                /* @__PURE__ */ x.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    placeholder: "End",
                    value: r.contextToSend.messages.range?.end ?? 10,
                    onChange: (P) => k("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(P.target.value) || 10 }
                    })
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ x.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ x.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.charCard,
                  onChange: (P) => k("charCard", P.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ x.jsx(
              ru,
              {
                items: Se,
                value: i.selectedCharacterIndexes,
                onChange: (P) => s((oe) => ({ ...oe, selectedCharacterIndexes: P })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ x.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ x.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.worldInfo,
                  onChange: (P) => k("worldInfo", P.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ x.jsx(
              ru,
              {
                items: Ye,
                value: i.selectedWorldNames,
                onChange: (P) => s((oe) => ({ ...oe, selectedWorldNames: P })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ x.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ x.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.existingFields,
                  onChange: (P) => k("existingFields", P.target.checked)
                }
              ),
              " ",
              "Existing Field Content"
            ] }),
            /* @__PURE__ */ x.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ x.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.dontSendOtherGreetings,
                  onChange: (P) => k("dontSendOtherGreetings", P.target.checked)
                }
              ),
              " ",
              "Don't send other alternate greetings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ x.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ x.jsx("h3", { children: "Generation Options" }),
          /* @__PURE__ */ x.jsxs("label", { title: "You can edit in extension settings", children: [
            "Main Context Template",
            /* @__PURE__ */ x.jsx(
              Cu,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: je,
                value: r.mainContextTemplatePreset,
                onChange: (P) => M("mainContextTemplatePreset", P ?? "default")
              }
            )
          ] }),
          /* @__PURE__ */ x.jsxs("label", { children: [
            "Max Context Tokens",
            /* @__PURE__ */ x.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.maxContextType,
                onChange: (P) => M("maxContextType", P.target.value),
                children: [
                  /* @__PURE__ */ x.jsx("option", { value: "profile", children: "Use profile preset" }),
                  /* @__PURE__ */ x.jsx("option", { value: "sampler", children: "Use active preset" }),
                  /* @__PURE__ */ x.jsx("option", { value: "custom", children: "Custom" })
                ]
              }
            )
          ] }),
          r.maxContextType === "custom" && /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: r.maxContextValue,
              onChange: (P) => M("maxContextValue", parseInt(P.target.value) || 16384)
            }
          ),
          /* @__PURE__ */ x.jsxs("label", { children: [
            "Max Response Tokens",
            /* @__PURE__ */ x.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                value: r.maxResponseToken,
                onChange: (P) => M("maxResponseToken", parseInt(P.target.value) || 1024)
              }
            )
          ] }),
          /* @__PURE__ */ x.jsxs("label", { children: [
            "Thinking Level",
            /* @__PURE__ */ x.jsx(
              "select",
              {
                className: "text_pole",
                value: r.thinkingLevel ?? "default",
                onChange: (P) => M("thinkingLevel", P.target.value),
                children: $E.map((P) => /* @__PURE__ */ x.jsx("option", { value: P.value, children: P.label }, P.value))
              }
            )
          ] }),
          /* @__PURE__ */ x.jsxs("label", { children: [
            "Output Format",
            /* @__PURE__ */ x.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.outputFormat,
                onChange: (P) => M("outputFormat", P.target.value),
                children: [
                  /* @__PURE__ */ x.jsx("option", { value: "none", children: "Plain Text" }),
                  /* @__PURE__ */ x.jsx("option", { value: "xml", children: "XML" }),
                  /* @__PURE__ */ x.jsx("option", { value: "json", children: "JSON" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ x.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ x.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ x.jsx(
            Cu,
            {
              label: "Prompt Preset",
              items: We,
              value: r.promptPreset,
              onChange: (P) => M("promptPreset", P ?? "default"),
              onItemsChange: (P) => M(
                "promptPresets",
                P.reduce(
                  (oe, ae) => ({ ...oe, [ae.value]: r.promptPresets[ae.value] ?? { content: "" } }),
                  {}
                )
              ),
              enableCreate: !0,
              enableDelete: !0,
              enableRename: !0,
              readOnlyValues: ["default"]
            }
          ),
          /* @__PURE__ */ x.jsx(
            $t,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (P) => M("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: P.target.value }
              }),
              rows: 4
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "wide-column", children: [
        /* @__PURE__ */ x.jsxs("div", { className: "character-field-actions", children: [
          /* @__PURE__ */ x.jsxs("div", { className: "toolbar-group", children: [
            /* @__PURE__ */ x.jsx("div", { className: "toolbar-group-dropdown", title: "Load Character Data", children: /* @__PURE__ */ x.jsx(
              ru,
              {
                items: Se,
                value: d ? [String(y.indexOf(d))] : [],
                onChange: (P) => R(P[0]),
                multiple: !1,
                enableSearch: !0,
                placeholder: "Load Character..."
              }
            ) }),
            /* @__PURE__ */ x.jsxs(
              me,
              {
                onClick: W,
                disabled: !!Fn || Ht === void 0,
                title: "Load the character from the currently open chat",
                children: [
                  /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-user" }),
                  " Load Current"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ x.jsxs("div", { className: "toolbar-group", children: [
            /* @__PURE__ */ x.jsxs(me, { onClick: ce, title: "Save as a new character", children: [
              /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-floppy-disk" }),
              " Save New"
            ] }),
            /* @__PURE__ */ x.jsxs(me, { onClick: de, disabled: !d, title: "Override loaded character", children: [
              /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-pen-to-square" }),
              " Override"
            ] }),
            r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ x.jsx(
              ru,
              {
                items: Ee,
                placeholder: "Save as WI Entry",
                closeOnSelect: !0,
                value: [],
                onChange: (P) => {
                },
                onBeforeSelection: async (P, oe) => {
                  if (!i.fields.name.value)
                    return _e("warning", "Please enter a name first."), !1;
                  const ae = oe[0], le = qt.compile(r.prompts.worldInfoCharDefinition.content)({
                    character: uN(i.fields, $)
                  }), he = {
                    uid: -1,
                    key: [i.fields.name.value],
                    content: le,
                    comment: i.fields.name.value,
                    disable: !1,
                    keysecondary: []
                  };
                  try {
                    await dx({ entry: he, selectedWorldName: ae, operation: "add" }), _e("success", `Entry added to ${ae}.`);
                  } catch (re) {
                    _e("error", `Failed to add WI Entry: ${re.message}`);
                  }
                  return !1;
                }
              }
            )
          ] }),
          /* @__PURE__ */ x.jsxs("div", { className: "toolbar-group", children: [
            /* @__PURE__ */ x.jsxs(me, { onClick: ve, title: "Clear all fields", children: [
              /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-rotate-left" }),
              " Reset"
            ] }),
            /* @__PURE__ */ x.jsx(
              me,
              {
                onClick: be,
                title: "Open global revision sessions to edit multiple fields at once",
                children: /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-comments" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ x.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ x.jsx(
            me,
            {
              onClick: () => m("core"),
              className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ x.jsx(
            me,
            {
              onClick: () => m("draft"),
              className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ x.jsx(
            me,
            {
              onClick: () => m("brainstorm"),
              className: `menu_button tab-button ${h === "brainstorm" ? "active" : ""}`,
              children: "Brainstorm"
            }
          ),
          /* @__PURE__ */ x.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
            /* @__PURE__ */ x.jsxs(me, { onClick: pe, children: [
              /* @__PURE__ */ x.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ x.jsx(me, { onClick: Ie, children: "Export" }),
            /* @__PURE__ */ x.jsx(me, { onClick: X, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ x.jsxs("div", { className: "tab-content-area", children: [
          h === "core" && /* @__PURE__ */ x.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ x.jsx("h3", { children: "Core Character Fields" }),
            Wn.map((P) => {
              const oe = fN[P];
              return oe ? /* @__PURE__ */ x.jsx(
                Dy,
                {
                  fieldId: P,
                  label: oe.label,
                  value: i.fields[P]?.value ?? "",
                  prompt: i.fields[P]?.prompt ?? "",
                  large: oe.large,
                  rows: oe.rows,
                  promptEnabled: oe.promptEnabled,
                  isGenerating: l.includes(P),
                  onValueChange: (ae, Y) => B(ae, Y, "value", !1),
                  onPromptChange: (ae, Y) => B(ae, Y, "prompt", !1),
                  onGenerate: ne,
                  onContinue: (ae) => ne(ae, i.fields[ae].value),
                  onClear: (ae) => Z(ae, !1),
                  onCompare: Le,
                  onOpenReviseSessions: ge
                },
                P
              ) : null;
            }),
            /* @__PURE__ */ x.jsx(
              sC,
              {
                greetings: $,
                onGreetingsChange: I,
                isGenerating: l.some((P) => P.startsWith("alternate_greetings_")),
                onGenerate: (P) => ne(`alternate_greetings_${P + 1}`),
                onContinue: (P) => ne(`alternate_greetings_${P + 1}`, $[P].value),
                onCompare: Le
              }
            )
          ] }),
          h === "draft" && /* @__PURE__ */ x.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ x.jsx("h3", { children: "Draft Fields" }),
            Object.entries(i.draftFields).map(([P, oe]) => /* @__PURE__ */ x.jsx(
              Dy,
              {
                fieldId: P,
                label: oe.label,
                value: oe.value,
                prompt: oe.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: l.includes(P),
                onValueChange: (ae, Y) => B(ae, Y, "value", !0),
                onPromptChange: (ae, Y) => B(ae, Y, "prompt", !0),
                onGenerate: ne,
                onContinue: (ae) => ne(ae, i.draftFields[ae].value),
                onClear: (ae) => Z(ae, !0),
                onDelete: K
              },
              P
            ))
          ] }),
          h === "brainstorm" && /* @__PURE__ */ x.jsx("div", { className: "card tab-content active", children: /* @__PURE__ */ x.jsx(
            lN,
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
    E && /* @__PURE__ */ x.jsx(
      Li,
      {
        type: _n.DISPLAY,
        content: /* @__PURE__ */ x.jsx(
          CC,
          {
            originalContent: E.original,
            newContent: E.current,
            fieldName: E.fieldName
          }
        ),
        onComplete: () => T(null),
        options: { wide: !0 }
      }
    ),
    A && C && /* @__PURE__ */ x.jsx(
      Li,
      {
        type: _n.DISPLAY,
        content: /* @__PURE__ */ x.jsx(
          WA,
          {
            target: C,
            onClose: () => D(!1),
            onApply: U,
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
}, hN = () => {
  const [t, r] = V.useState(!1), i = V.useCallback(() => r(!0), []), s = V.useCallback(() => r(!1), []);
  return V.useEffect(() => (window.openCharacterCreatorPopup = i, () => {
    window.openCharacterCreatorPopup === i && delete window.openCharacterCreatorPopup;
  }), [i]), t ? /* @__PURE__ */ x.jsx(
    Li,
    {
      content: /* @__PURE__ */ x.jsx(dN, {}),
      type: _n.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, U1 = SillyTavern.getContext(), o0 = "charCreator-icon";
async function pN() {
  const t = document.querySelector("#extensions_settings");
  if (!t) {
    console.error(`[${Rn}] #extensions_settings not found; settings panel not rendered.`);
    return;
  }
  const r = await U1.renderExtensionTemplateAsync(
    `third-party/${Rn}`,
    "templates/settings"
  );
  t.insertAdjacentHTML("beforeend", r);
  const i = document.createElement("div"), s = document.querySelector(".charCreator_settings .inline-drawer-content");
  s && (s.prepend(i), bv.createRoot(i).render(
    /* @__PURE__ */ x.jsx(pu.StrictMode, { children: /* @__PURE__ */ x.jsx(aC, {}) })
  ));
  const l = `<div class="menu_button fa-solid fa-user-astronaut interactable ${o0}" title="Character Creator"></div>`, u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], f = document.createElement("div");
  document.body.appendChild(f), bv.createRoot(f).render(
    /* @__PURE__ */ x.jsx(pu.StrictMode, { children: /* @__PURE__ */ x.jsx(hN, {}) })
  ), u.forEach((h) => {
    if (!h || h.querySelector(`.${o0}`)) return;
    const m = document.createElement("div");
    m.innerHTML = l.trim();
    const y = m.firstChild;
    y && (h.prepend(y), y.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function mN() {
  return !!U1.ConnectionManagerRequestService;
}
mN() ? KE().then(() => pN()).catch((t) => {
  console.error(`[${Rn}] Initialization failed:`, t), _e("error", `[${Rn}] Initialization failed: ${t?.message ?? t}`);
}) : _e("error", `[${Rn}] Make sure ST is updated.`);
export {
  pN as init
};
