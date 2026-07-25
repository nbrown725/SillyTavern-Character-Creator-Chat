import { renderStoryString as c2, persona_description_positions as cv } from "../../../../power-user.js";
import { parseMesExamples as f2, baseChatReplace as d2, chat_metadata as Fs, getMaxContextSize as h2, name1 as Or, name2 as aa, this_chid as Kt, extension_prompt_types as Da, depth_prompt_role_default as p2, depth_prompt_depth_default as m2 } from "../../../../../script.js";
import { createWorldInfoEntry as g2, world_info_include_names as v2, wi_anchor_position as y2, world_names as fv } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as b2, formatInstructModeSystemPrompt as _2 } from "../../../../instruct-mode.js";
import { appendFileContent as S2 } from "../../../../chats.js";
import { setOpenAIMessages as x2, setOpenAIMessageExamples as E2, formatWorldInfo as w2, getPromptPosition as C2, getPromptRole as N2, prepareOpenAIMessages as A2 } from "../../../../openai.js";
import { metadata_keys as Hs } from "../../../../authors-note.js";
import { getGroupDepthPrompts as T2, selected_group as er } from "../../../../group-chats.js";
import { getRegexedString as O2, regex_placement as dv } from "../../../regex/engine.js";
import { removeFromArray as hv, runAfterAnimation as D2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Di, fixToastrForDialogs as Wf } from "../../../../popup.js";
import pv from "../../../../../lib/dialog-polyfill.esm.js";
function g0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ed = { exports: {} }, qs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mv;
function M2() {
  if (mv) return qs;
  mv = 1;
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
  return qs.Fragment = r, qs.jsx = a, qs.jsxs = a, qs;
}
var gv;
function k2() {
  return gv || (gv = 1, ed.exports = M2()), ed.exports;
}
var S = k2(), td = { exports: {} }, Ie = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vv;
function j2() {
  if (vv) return Ie;
  vv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function b(j) {
    return j === null || typeof j != "object" ? null : (j = _ && j[_] || j["@@iterator"], typeof j == "function" ? j : null);
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
  }, p = Object.assign, x = {};
  function E(j, J, ie) {
    this.props = j, this.context = J, this.refs = x, this.updater = ie || m;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(j, J) {
    if (typeof j != "object" && typeof j != "function" && j != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, j, J, "setState");
  }, E.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function A() {
  }
  A.prototype = E.prototype;
  function w(j, J, ie) {
    this.props = j, this.context = J, this.refs = x, this.updater = ie || m;
  }
  var D = w.prototype = new A();
  D.constructor = w, p(D, E.prototype), D.isPureReactComponent = !0;
  var C = Array.isArray, T = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function R(j, J, ie, se, le, Re) {
    return ie = Re.ref, {
      $$typeof: t,
      type: j,
      key: J,
      ref: ie !== void 0 ? ie : null,
      props: Re
    };
  }
  function L(j, J) {
    return R(
      j.type,
      J,
      void 0,
      void 0,
      void 0,
      j.props
    );
  }
  function Y(j) {
    return typeof j == "object" && j !== null && j.$$typeof === t;
  }
  function U(j) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ie) {
      return J[ie];
    });
  }
  var q = /\/+/g;
  function Q(j, J) {
    return typeof j == "object" && j !== null && j.key != null ? U("" + j.key) : J.toString(36);
  }
  function pe() {
  }
  function fe(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (typeof j.status == "string" ? j.then(pe, pe) : (j.status = "pending", j.then(
          function(J) {
            j.status === "pending" && (j.status = "fulfilled", j.value = J);
          },
          function(J) {
            j.status === "pending" && (j.status = "rejected", j.reason = J);
          }
        )), j.status) {
          case "fulfilled":
            return j.value;
          case "rejected":
            throw j.reason;
        }
    }
    throw j;
  }
  function _e(j, J, ie, se, le) {
    var Re = typeof j;
    (Re === "undefined" || Re === "boolean") && (j = null);
    var X = !1;
    if (j === null) X = !0;
    else
      switch (Re) {
        case "bigint":
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case t:
            case r:
              X = !0;
              break;
            case v:
              return X = j._init, _e(
                X(j._payload),
                J,
                ie,
                se,
                le
              );
          }
      }
    if (X)
      return le = le(j), X = se === "" ? "." + Q(j, 0) : se, C(le) ? (ie = "", X != null && (ie = X.replace(q, "$&/") + "/"), _e(le, J, ie, "", function($e) {
        return $e;
      })) : le != null && (Y(le) && (le = L(
        le,
        ie + (le.key == null || j && j.key === le.key ? "" : ("" + le.key).replace(
          q,
          "$&/"
        ) + "/") + X
      )), J.push(le)), 1;
    X = 0;
    var xe = se === "" ? "." : se + ":";
    if (C(j))
      for (var Ee = 0; Ee < j.length; Ee++)
        se = j[Ee], Re = xe + Q(se, Ee), X += _e(
          se,
          J,
          ie,
          Re,
          le
        );
    else if (Ee = b(j), typeof Ee == "function")
      for (j = Ee.call(j), Ee = 0; !(se = j.next()).done; )
        se = se.value, Re = xe + Q(se, Ee++), X += _e(
          se,
          J,
          ie,
          Re,
          le
        );
    else if (Re === "object") {
      if (typeof j.then == "function")
        return _e(
          fe(j),
          J,
          ie,
          se,
          le
        );
      throw J = String(j), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return X;
  }
  function P(j, J, ie) {
    if (j == null) return j;
    var se = [], le = 0;
    return _e(j, se, "", "", function(Re) {
      return J.call(ie, Re, le++);
    }), se;
  }
  function ae(j) {
    if (j._status === -1) {
      var J = j._result;
      J = J(), J.then(
        function(ie) {
          (j._status === 0 || j._status === -1) && (j._status = 1, j._result = ie);
        },
        function(ie) {
          (j._status === 0 || j._status === -1) && (j._status = 2, j._result = ie);
        }
      ), j._status === -1 && (j._status = 0, j._result = J);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var me = typeof reportError == "function" ? reportError : function(j) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
        error: j
      });
      if (!window.dispatchEvent(J)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", j);
      return;
    }
    console.error(j);
  };
  function Le() {
  }
  return Ie.Children = {
    map: P,
    forEach: function(j, J, ie) {
      P(
        j,
        function() {
          J.apply(this, arguments);
        },
        ie
      );
    },
    count: function(j) {
      var J = 0;
      return P(j, function() {
        J++;
      }), J;
    },
    toArray: function(j) {
      return P(j, function(J) {
        return J;
      }) || [];
    },
    only: function(j) {
      if (!Y(j))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return j;
    }
  }, Ie.Component = E, Ie.Fragment = a, Ie.Profiler = l, Ie.PureComponent = w, Ie.StrictMode = s, Ie.Suspense = h, Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, Ie.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return T.H.useMemoCache(j);
    }
  }, Ie.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, Ie.cloneElement = function(j, J, ie) {
    if (j == null)
      throw Error(
        "The argument must be a React element, but you passed " + j + "."
      );
    var se = p({}, j.props), le = j.key, Re = void 0;
    if (J != null)
      for (X in J.ref !== void 0 && (Re = void 0), J.key !== void 0 && (le = "" + J.key), J)
        !M.call(J, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && J.ref === void 0 || (se[X] = J[X]);
    var X = arguments.length - 2;
    if (X === 1) se.children = ie;
    else if (1 < X) {
      for (var xe = Array(X), Ee = 0; Ee < X; Ee++)
        xe[Ee] = arguments[Ee + 2];
      se.children = xe;
    }
    return R(j.type, le, void 0, void 0, Re, se);
  }, Ie.createContext = function(j) {
    return j = {
      $$typeof: f,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, j.Provider = j, j.Consumer = {
      $$typeof: u,
      _context: j
    }, j;
  }, Ie.createElement = function(j, J, ie) {
    var se, le = {}, Re = null;
    if (J != null)
      for (se in J.key !== void 0 && (Re = "" + J.key), J)
        M.call(J, se) && se !== "key" && se !== "__self" && se !== "__source" && (le[se] = J[se]);
    var X = arguments.length - 2;
    if (X === 1) le.children = ie;
    else if (1 < X) {
      for (var xe = Array(X), Ee = 0; Ee < X; Ee++)
        xe[Ee] = arguments[Ee + 2];
      le.children = xe;
    }
    if (j && j.defaultProps)
      for (se in X = j.defaultProps, X)
        le[se] === void 0 && (le[se] = X[se]);
    return R(j, Re, void 0, void 0, null, le);
  }, Ie.createRef = function() {
    return { current: null };
  }, Ie.forwardRef = function(j) {
    return { $$typeof: d, render: j };
  }, Ie.isValidElement = Y, Ie.lazy = function(j) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: j },
      _init: ae
    };
  }, Ie.memo = function(j, J) {
    return {
      $$typeof: g,
      type: j,
      compare: J === void 0 ? null : J
    };
  }, Ie.startTransition = function(j) {
    var J = T.T, ie = {};
    T.T = ie;
    try {
      var se = j(), le = T.S;
      le !== null && le(ie, se), typeof se == "object" && se !== null && typeof se.then == "function" && se.then(Le, me);
    } catch (Re) {
      me(Re);
    } finally {
      T.T = J;
    }
  }, Ie.unstable_useCacheRefresh = function() {
    return T.H.useCacheRefresh();
  }, Ie.use = function(j) {
    return T.H.use(j);
  }, Ie.useActionState = function(j, J, ie) {
    return T.H.useActionState(j, J, ie);
  }, Ie.useCallback = function(j, J) {
    return T.H.useCallback(j, J);
  }, Ie.useContext = function(j) {
    return T.H.useContext(j);
  }, Ie.useDebugValue = function() {
  }, Ie.useDeferredValue = function(j, J) {
    return T.H.useDeferredValue(j, J);
  }, Ie.useEffect = function(j, J, ie) {
    var se = T.H;
    if (typeof ie == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return se.useEffect(j, J);
  }, Ie.useId = function() {
    return T.H.useId();
  }, Ie.useImperativeHandle = function(j, J, ie) {
    return T.H.useImperativeHandle(j, J, ie);
  }, Ie.useInsertionEffect = function(j, J) {
    return T.H.useInsertionEffect(j, J);
  }, Ie.useLayoutEffect = function(j, J) {
    return T.H.useLayoutEffect(j, J);
  }, Ie.useMemo = function(j, J) {
    return T.H.useMemo(j, J);
  }, Ie.useOptimistic = function(j, J) {
    return T.H.useOptimistic(j, J);
  }, Ie.useReducer = function(j, J, ie) {
    return T.H.useReducer(j, J, ie);
  }, Ie.useRef = function(j) {
    return T.H.useRef(j);
  }, Ie.useState = function(j) {
    return T.H.useState(j);
  }, Ie.useSyncExternalStore = function(j, J, ie) {
    return T.H.useSyncExternalStore(
      j,
      J,
      ie
    );
  }, Ie.useTransition = function() {
    return T.H.useTransition();
  }, Ie.version = "19.1.1", Ie;
}
var yv;
function th() {
  return yv || (yv = 1, td.exports = j2()), td.exports;
}
var G = th();
const yu = /* @__PURE__ */ g0(G);
var nd = { exports: {} }, Zs = {}, rd = { exports: {} }, ad = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bv;
function R2() {
  return bv || (bv = 1, (function(t) {
    function r(P, ae) {
      var me = P.length;
      P.push(ae);
      e: for (; 0 < me; ) {
        var Le = me - 1 >>> 1, j = P[Le];
        if (0 < l(j, ae))
          P[Le] = ae, P[me] = j, me = Le;
        else break e;
      }
    }
    function a(P) {
      return P.length === 0 ? null : P[0];
    }
    function s(P) {
      if (P.length === 0) return null;
      var ae = P[0], me = P.pop();
      if (me !== ae) {
        P[0] = me;
        e: for (var Le = 0, j = P.length, J = j >>> 1; Le < J; ) {
          var ie = 2 * (Le + 1) - 1, se = P[ie], le = ie + 1, Re = P[le];
          if (0 > l(se, me))
            le < j && 0 > l(Re, se) ? (P[Le] = Re, P[le] = me, Le = le) : (P[Le] = se, P[ie] = me, Le = ie);
          else if (le < j && 0 > l(Re, me))
            P[Le] = Re, P[le] = me, Le = le;
          else break e;
        }
      }
      return ae;
    }
    function l(P, ae) {
      var me = P.sortIndex - ae.sortIndex;
      return me !== 0 ? me : P.id - ae.id;
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
    var h = [], g = [], v = 1, _ = null, b = 3, m = !1, p = !1, x = !1, E = !1, A = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function C(P) {
      for (var ae = a(g); ae !== null; ) {
        if (ae.callback === null) s(g);
        else if (ae.startTime <= P)
          s(g), ae.sortIndex = ae.expirationTime, r(h, ae);
        else break;
        ae = a(g);
      }
    }
    function T(P) {
      if (x = !1, C(P), !p)
        if (a(h) !== null)
          p = !0, M || (M = !0, Q());
        else {
          var ae = a(g);
          ae !== null && _e(T, ae.startTime - P);
        }
    }
    var M = !1, R = -1, L = 5, Y = -1;
    function U() {
      return E ? !0 : !(t.unstable_now() - Y < L);
    }
    function q() {
      if (E = !1, M) {
        var P = t.unstable_now();
        Y = P;
        var ae = !0;
        try {
          e: {
            p = !1, x && (x = !1, w(R), R = -1), m = !0;
            var me = b;
            try {
              t: {
                for (C(P), _ = a(h); _ !== null && !(_.expirationTime > P && U()); ) {
                  var Le = _.callback;
                  if (typeof Le == "function") {
                    _.callback = null, b = _.priorityLevel;
                    var j = Le(
                      _.expirationTime <= P
                    );
                    if (P = t.unstable_now(), typeof j == "function") {
                      _.callback = j, C(P), ae = !0;
                      break t;
                    }
                    _ === a(h) && s(h), C(P);
                  } else s(h);
                  _ = a(h);
                }
                if (_ !== null) ae = !0;
                else {
                  var J = a(g);
                  J !== null && _e(
                    T,
                    J.startTime - P
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
          ae ? Q() : M = !1;
        }
      }
    }
    var Q;
    if (typeof D == "function")
      Q = function() {
        D(q);
      };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), fe = pe.port2;
      pe.port1.onmessage = q, Q = function() {
        fe.postMessage(null);
      };
    } else
      Q = function() {
        A(q, 0);
      };
    function _e(P, ae) {
      R = A(function() {
        P(t.unstable_now());
      }, ae);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, t.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : L = 0 < P ? Math.floor(1e3 / P) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, t.unstable_next = function(P) {
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
        return P();
      } finally {
        b = me;
      }
    }, t.unstable_requestPaint = function() {
      E = !0;
    }, t.unstable_runWithPriority = function(P, ae) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var me = b;
      b = P;
      try {
        return ae();
      } finally {
        b = me;
      }
    }, t.unstable_scheduleCallback = function(P, ae, me) {
      var Le = t.unstable_now();
      switch (typeof me == "object" && me !== null ? (me = me.delay, me = typeof me == "number" && 0 < me ? Le + me : Le) : me = Le, P) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = me + j, P = {
        id: v++,
        callback: ae,
        priorityLevel: P,
        startTime: me,
        expirationTime: j,
        sortIndex: -1
      }, me > Le ? (P.sortIndex = me, r(g, P), a(h) === null && P === a(g) && (x ? (w(R), R = -1) : x = !0, _e(T, me - Le))) : (P.sortIndex = j, r(h, P), p || m || (p = !0, M || (M = !0, Q()))), P;
    }, t.unstable_shouldYield = U, t.unstable_wrapCallback = function(P) {
      var ae = b;
      return function() {
        var me = b;
        b = ae;
        try {
          return P.apply(this, arguments);
        } finally {
          b = me;
        }
      };
    };
  })(ad)), ad;
}
var _v;
function z2() {
  return _v || (_v = 1, rd.exports = R2()), rd.exports;
}
var id = { exports: {} }, $t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sv;
function L2() {
  if (Sv) return $t;
  Sv = 1;
  var t = th();
  function r(h) {
    var g = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + h + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function u(h, g, v) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: _ == null ? null : "" + _,
      children: h,
      containerInfo: g,
      implementation: v
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(h, g) {
    if (h === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, $t.createPortal = function(h, g) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return u(h, g, null, v);
  }, $t.flushSync = function(h) {
    var g = f.T, v = s.p;
    try {
      if (f.T = null, s.p = 2, h) return h();
    } finally {
      f.T = g, s.p = v, s.d.f();
    }
  }, $t.preconnect = function(h, g) {
    typeof h == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(h, g));
  }, $t.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, $t.preinit = function(h, g) {
    if (typeof h == "string" && g && typeof g.as == "string") {
      var v = g.as, _ = d(v, g.crossOrigin), b = typeof g.integrity == "string" ? g.integrity : void 0, m = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      v === "style" ? s.d.S(
        h,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: _,
          integrity: b,
          fetchPriority: m
        }
      ) : v === "script" && s.d.X(h, {
        crossOrigin: _,
        integrity: b,
        fetchPriority: m,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, $t.preinitModule = function(h, g) {
    if (typeof h == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var v = d(
            g.as,
            g.crossOrigin
          );
          s.d.M(h, {
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(h);
  }, $t.preload = function(h, g) {
    if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var v = g.as, _ = d(v, g.crossOrigin);
      s.d.L(h, v, {
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
  }, $t.preloadModule = function(h, g) {
    if (typeof h == "string")
      if (g) {
        var v = d(g.as, g.crossOrigin);
        s.d.m(h, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: v,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(h);
  }, $t.requestFormReset = function(h) {
    s.d.r(h);
  }, $t.unstable_batchedUpdates = function(h, g) {
    return h(g);
  }, $t.useFormState = function(h, g, v) {
    return f.H.useFormState(h, g, v);
  }, $t.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, $t.version = "19.1.1", $t;
}
var xv;
function v0() {
  if (xv) return id.exports;
  xv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), id.exports = L2(), id.exports;
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
var Ev;
function I2() {
  if (Ev) return Zs;
  Ev = 1;
  var t = z2(), r = th(), a = v0();
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
  function h(e) {
    var n = e.alternate;
    if (!n) {
      if (n = u(e), n === null) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var i = e, o = n; ; ) {
      var c = i.return;
      if (c === null) break;
      var y = c.alternate;
      if (y === null) {
        if (o = c.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (c.child === y.child) {
        for (y = c.child; y; ) {
          if (y === i) return d(c), e;
          if (y === o) return d(c), n;
          y = y.sibling;
        }
        throw Error(s(188));
      }
      if (i.return !== o.return) i = c, o = y;
      else {
        for (var N = !1, O = c.child; O; ) {
          if (O === i) {
            N = !0, i = c, o = y;
            break;
          }
          if (O === o) {
            N = !0, o = c, i = y;
            break;
          }
          O = O.sibling;
        }
        if (!N) {
          for (O = y.child; O; ) {
            if (O === i) {
              N = !0, i = y, o = c;
              break;
            }
            if (O === o) {
              N = !0, o = y, i = c;
              break;
            }
            O = O.sibling;
          }
          if (!N) throw Error(s(189));
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
  var v = Object.assign, _ = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), D = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), U = Symbol.for("react.memo_cache_sentinel"), q = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object" ? null : (e = q && e[q] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var pe = Symbol.for("react.client.reference");
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === pe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case p:
        return "Fragment";
      case E:
        return "Profiler";
      case x:
        return "StrictMode";
      case T:
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
        case w:
          return (e._context.displayName || "Context") + ".Consumer";
        case C:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case R:
          return n = e.displayName || null, n !== null ? n : fe(e.type) || "Memo";
        case L:
          n = e._payload, e = e._init;
          try {
            return fe(e(n));
          } catch {
          }
      }
    return null;
  }
  var _e = Array.isArray, P = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, me = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Le = [], j = -1;
  function J(e) {
    return { current: e };
  }
  function ie(e) {
    0 > j || (e.current = Le[j], Le[j] = null, j--);
  }
  function se(e, n) {
    j++, Le[j] = e.current, e.current = n;
  }
  var le = J(null), Re = J(null), X = J(null), xe = J(null);
  function Ee(e, n) {
    switch (se(X, n), se(Re, e), se(le, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Pg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Pg(n), e = Bg(n, e);
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
  function $e() {
    ie(le), ie(Re), ie(X);
  }
  function We(e) {
    e.memoizedState !== null && se(xe, e);
    var n = le.current, i = Bg(n, e.type);
    n !== i && (se(Re, e), se(le, i));
  }
  function ke(e) {
    Re.current === e && (ie(le), ie(Re)), xe.current === e && (ie(xe), Ls._currentValue = me);
  }
  var nt = Object.prototype.hasOwnProperty, un = t.unstable_scheduleCallback, Nt = t.unstable_cancelCallback, B = t.unstable_shouldYield, W = t.unstable_requestPaint, ne = t.unstable_now, de = t.unstable_getCurrentPriorityLevel, Ne = t.unstable_ImmediatePriority, oe = t.unstable_UserBlockingPriority, he = t.unstable_NormalPriority, Ve = t.unstable_LowPriority, Fe = t.unstable_IdlePriority, Qe = t.log, jn = t.unstable_setDisableYieldValue, ut = null, et = null;
  function en(e) {
    if (typeof Qe == "function" && jn(e), et && typeof et.setStrictMode == "function")
      try {
        et.setStrictMode(ut, e);
      } catch {
      }
  }
  var Lt = Math.clz32 ? Math.clz32 : be, tn = Math.log, re = Math.LN2;
  function be(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (tn(e) / re | 0) | 0;
  }
  var Pe = 256, ge = 4194304;
  function Be(e) {
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
  function He(e, n, i) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0, y = e.suspendedLanes, N = e.pingedLanes;
    e = e.warmLanes;
    var O = o & 134217727;
    return O !== 0 ? (o = O & ~y, o !== 0 ? c = Be(o) : (N &= O, N !== 0 ? c = Be(N) : i || (i = O & ~e, i !== 0 && (c = Be(i))))) : (O = o & ~y, O !== 0 ? c = Be(O) : N !== 0 ? c = Be(N) : i || (i = o & ~e, i !== 0 && (c = Be(i)))), c === 0 ? 0 : n !== 0 && n !== c && (n & y) === 0 && (y = c & -c, i = n & -n, y >= i || y === 32 && (i & 4194048) !== 0) ? n : c;
  }
  function je(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function nn(e, n) {
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
  function Vt() {
    var e = Pe;
    return Pe <<= 1, (Pe & 4194048) === 0 && (Pe = 256), e;
  }
  function Yn() {
    var e = ge;
    return ge <<= 1, (ge & 62914560) === 0 && (ge = 4194304), e;
  }
  function fr(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function Vi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Jb(e, n, i, o, c, y) {
    var N = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var O = e.entanglements, k = e.expirationTimes, H = e.hiddenUpdates;
    for (i = N & ~i; 0 < i; ) {
      var $ = 31 - Lt(i), ee = 1 << $;
      O[$] = 0, k[$] = -1;
      var Z = H[$];
      if (Z !== null)
        for (H[$] = null, $ = 0; $ < Z.length; $++) {
          var V = Z[$];
          V !== null && (V.lane &= -536870913);
        }
      i &= ~ee;
    }
    o !== 0 && Eh(e, o, 0), y !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= y & ~(N & ~n));
  }
  function Eh(e, n, i) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Lt(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 4194090;
  }
  function wh(e, n) {
    var i = e.entangledLanes |= n;
    for (e = e.entanglements; i; ) {
      var o = 31 - Lt(i), c = 1 << o;
      c & n | e[o] & n && (e[o] |= n), i &= ~c;
    }
  }
  function Hu(e) {
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
  function qu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ch() {
    var e = ae.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : av(e.type));
  }
  function Wb(e, n) {
    var i = ae.p;
    try {
      return ae.p = e, n();
    } finally {
      ae.p = i;
    }
  }
  var zr = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + zr, cn = "__reactProps$" + zr, Ga = "__reactContainer$" + zr, Zu = "__reactEvents$" + zr, e1 = "__reactListeners$" + zr, t1 = "__reactHandles$" + zr, Nh = "__reactResources$" + zr, Yi = "__reactMarker$" + zr;
  function Gu(e) {
    delete e[Yt], delete e[cn], delete e[Zu], delete e[e1], delete e[t1];
  }
  function Va(e) {
    var n = e[Yt];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if (n = i[Ga] || i[Yt]) {
        if (i = n.alternate, n.child !== null || i !== null && i.child !== null)
          for (e = qg(e); e !== null; ) {
            if (i = e[Yt]) return i;
            e = qg(e);
          }
        return n;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Ya(e) {
    if (e = e[Yt] || e[Ga]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Xi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Xa(e) {
    var n = e[Nh];
    return n || (n = e[Nh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function It(e) {
    e[Yi] = !0;
  }
  var Ah = /* @__PURE__ */ new Set(), Th = {};
  function ha(e, n) {
    $a(e, n), $a(e + "Capture", n);
  }
  function $a(e, n) {
    for (Th[e] = n, e = 0; e < n.length; e++)
      Ah.add(n[e]);
  }
  var n1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Oh = {}, Dh = {};
  function r1(e) {
    return nt.call(Dh, e) ? !0 : nt.call(Oh, e) ? !1 : n1.test(e) ? Dh[e] = !0 : (Oh[e] = !0, !1);
  }
  function bo(e, n, i) {
    if (r1(n))
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
  function _o(e, n, i) {
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
  function dr(e, n, i, o) {
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
  var Vu, Mh;
  function Qa(e) {
    if (Vu === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        Vu = n && n[1] || "", Mh = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Vu + e + Mh;
  }
  var Yu = !1;
  function Xu(e, n) {
    if (!e || Yu) return "";
    Yu = !0;
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
      var y = o.DetermineComponentFrameRoot(), N = y[0], O = y[1];
      if (N && O) {
        var k = N.split(`
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
                  var $ = `
` + k[o].replace(" at new ", " at ");
                  return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), $;
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      Yu = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? Qa(i) : "";
  }
  function a1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Qa(e.type);
      case 16:
        return Qa("Lazy");
      case 13:
        return Qa("Suspense");
      case 19:
        return Qa("SuspenseList");
      case 0:
      case 15:
        return Xu(e.type, !1);
      case 11:
        return Xu(e.type.render, !1);
      case 1:
        return Xu(e.type, !0);
      case 31:
        return Qa("Activity");
      default:
        return "";
    }
  }
  function kh(e) {
    try {
      var n = "";
      do
        n += a1(e), e = e.return;
      while (e);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function Rn(e) {
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
  function jh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function i1(e) {
    var n = jh(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), o = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var c = i.get, y = i.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(N) {
          o = "" + N, y.call(this, N);
        }
      }), Object.defineProperty(e, n, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(N) {
          o = "" + N;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function So(e) {
    e._valueTracker || (e._valueTracker = i1(e));
  }
  function Rh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(), o = "";
    return e && (o = jh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (n.setValue(e), !0) : !1;
  }
  function xo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var s1 = /[\n"\\]/g;
  function zn(e) {
    return e.replace(
      s1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function $u(e, n, i, o, c, y, N, O) {
    e.name = "", N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" ? e.type = N : e.removeAttribute("type"), n != null ? N === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Rn(n)) : e.value !== "" + Rn(n) && (e.value = "" + Rn(n)) : N !== "submit" && N !== "reset" || e.removeAttribute("value"), n != null ? Qu(e, N, Rn(n)) : i != null ? Qu(e, N, Rn(i)) : o != null && e.removeAttribute("value"), c == null && y != null && (e.defaultChecked = !!y), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? e.name = "" + Rn(O) : e.removeAttribute("name");
  }
  function zh(e, n, i, o, c, y, N, O) {
    if (y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.type = y), n != null || i != null) {
      if (!(y !== "submit" && y !== "reset" || n != null))
        return;
      i = i != null ? "" + Rn(i) : "", n = n != null ? "" + Rn(n) : i, O || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = O ? e.checked : !!o, e.defaultChecked = !!o, N != null && typeof N != "function" && typeof N != "symbol" && typeof N != "boolean" && (e.name = N);
  }
  function Qu(e, n, i) {
    n === "number" && xo(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function Ka(e, n, i, o) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < i.length; c++)
        n["$" + i[c]] = !0;
      for (i = 0; i < e.length; i++)
        c = n.hasOwnProperty("$" + e[i].value), e[i].selected !== c && (e[i].selected = c), c && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + Rn(i), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          e[c].selected = !0, o && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Lh(e, n, i) {
    if (n != null && (n = "" + Rn(n), n !== e.value && (e.value = n), i == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? "" + Rn(i) : "";
  }
  function Ih(e, n, i, o) {
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
    i = Rn(n), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o);
  }
  function Ja(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var o1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ph(e, n, i) {
    var o = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, i) : typeof i != "number" || i === 0 || o1.has(n) ? n === "float" ? e.cssFloat = i : e[n] = ("" + i).trim() : e[n] = i + "px";
  }
  function Bh(e, n, i) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in n)
        o = n[c], n.hasOwnProperty(c) && i[c] !== o && Ph(e, c, o);
    } else
      for (var y in n)
        n.hasOwnProperty(y) && Ph(e, y, n[y]);
  }
  function Ku(e) {
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
  var l1 = /* @__PURE__ */ new Map([
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
  ]), u1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Eo(e) {
    return u1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Ju = null;
  function Wu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Wa = null, ei = null;
  function Uh(e) {
    var n = Ya(e);
    if (n && (e = n.stateNode)) {
      var i = e[cn] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if ($u(
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
              'input[name="' + zn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < i.length; n++) {
              var o = i[n];
              if (o !== e && o.form === e.form) {
                var c = o[cn] || null;
                if (!c) throw Error(s(90));
                $u(
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
              o = i[n], o.form === e.form && Rh(o);
          }
          break e;
        case "textarea":
          Lh(e, i.value, i.defaultValue);
          break e;
        case "select":
          n = i.value, n != null && Ka(e, !!i.multiple, n, !1);
      }
    }
  }
  var ec = !1;
  function Fh(e, n, i) {
    if (ec) return e(n, i);
    ec = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (ec = !1, (Wa !== null || ei !== null) && (ll(), Wa && (n = Wa, e = ei, ei = Wa = null, Uh(n), e)))
        for (n = 0; n < e.length; n++) Uh(e[n]);
    }
  }
  function $i(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = i[cn] || null;
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
  var hr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tc = !1;
  if (hr)
    try {
      var Qi = {};
      Object.defineProperty(Qi, "passive", {
        get: function() {
          tc = !0;
        }
      }), window.addEventListener("test", Qi, Qi), window.removeEventListener("test", Qi, Qi);
    } catch {
      tc = !1;
    }
  var Lr = null, nc = null, wo = null;
  function Hh() {
    if (wo) return wo;
    var e, n = nc, i = n.length, o, c = "value" in Lr ? Lr.value : Lr.textContent, y = c.length;
    for (e = 0; e < i && n[e] === c[e]; e++) ;
    var N = i - e;
    for (o = 1; o <= N && n[i - o] === c[y - o]; o++) ;
    return wo = c.slice(e, 1 < o ? 1 - o : void 0);
  }
  function Co(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function No() {
    return !0;
  }
  function qh() {
    return !1;
  }
  function fn(e) {
    function n(i, o, c, y, N) {
      this._reactName = i, this._targetInst = c, this.type = o, this.nativeEvent = y, this.target = N, this.currentTarget = null;
      for (var O in e)
        e.hasOwnProperty(O) && (i = e[O], this[O] = i ? i(y) : y[O]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? No : qh, this.isPropagationStopped = qh, this;
    }
    return v(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = No);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = No);
      },
      persist: function() {
      },
      isPersistent: No
    }), n;
  }
  var pa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ao = fn(pa), Ki = v({}, pa, { view: 0, detail: 0 }), c1 = fn(Ki), rc, ac, Ji, To = v({}, Ki, {
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
    getModifierState: sc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ji && (Ji && e.type === "mousemove" ? (rc = e.screenX - Ji.screenX, ac = e.screenY - Ji.screenY) : ac = rc = 0, Ji = e), rc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ac;
    }
  }), Zh = fn(To), f1 = v({}, To, { dataTransfer: 0 }), d1 = fn(f1), h1 = v({}, Ki, { relatedTarget: 0 }), ic = fn(h1), p1 = v({}, pa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), m1 = fn(p1), g1 = v({}, pa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), v1 = fn(g1), y1 = v({}, pa, { data: 0 }), Gh = fn(y1), b1 = {
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
  }, _1 = {
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
  }, S1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function x1(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = S1[e]) ? !!n[e] : !1;
  }
  function sc() {
    return x1;
  }
  var E1 = v({}, Ki, {
    key: function(e) {
      if (e.key) {
        var n = b1[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = Co(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sc,
    charCode: function(e) {
      return e.type === "keypress" ? Co(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Co(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), w1 = fn(E1), C1 = v({}, To, {
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
  }), Vh = fn(C1), N1 = v({}, Ki, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sc
  }), A1 = fn(N1), T1 = v({}, pa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), O1 = fn(T1), D1 = v({}, To, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), M1 = fn(D1), k1 = v({}, pa, {
    newState: 0,
    oldState: 0
  }), j1 = fn(k1), R1 = [9, 13, 27, 32], oc = hr && "CompositionEvent" in window, Wi = null;
  hr && "documentMode" in document && (Wi = document.documentMode);
  var z1 = hr && "TextEvent" in window && !Wi, Yh = hr && (!oc || Wi && 8 < Wi && 11 >= Wi), Xh = " ", $h = !1;
  function Qh(e, n) {
    switch (e) {
      case "keyup":
        return R1.indexOf(n.keyCode) !== -1;
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
  function Kh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ti = !1;
  function L1(e, n) {
    switch (e) {
      case "compositionend":
        return Kh(n);
      case "keypress":
        return n.which !== 32 ? null : ($h = !0, Xh);
      case "textInput":
        return e = n.data, e === Xh && $h ? null : e;
      default:
        return null;
    }
  }
  function I1(e, n) {
    if (ti)
      return e === "compositionend" || !oc && Qh(e, n) ? (e = Hh(), wo = nc = Lr = null, ti = !1, e) : null;
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
        return Yh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var P1 = {
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
  function Jh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!P1[e.type] : n === "textarea";
  }
  function Wh(e, n, i, o) {
    Wa ? ei ? ei.push(o) : ei = [o] : Wa = o, n = pl(n, "onChange"), 0 < n.length && (i = new Ao(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: n }));
  }
  var es = null, ts = null;
  function B1(e) {
    jg(e, 0);
  }
  function Oo(e) {
    var n = Xi(e);
    if (Rh(n)) return e;
  }
  function ep(e, n) {
    if (e === "change") return n;
  }
  var tp = !1;
  if (hr) {
    var lc;
    if (hr) {
      var uc = "oninput" in document;
      if (!uc) {
        var np = document.createElement("div");
        np.setAttribute("oninput", "return;"), uc = typeof np.oninput == "function";
      }
      lc = uc;
    } else lc = !1;
    tp = lc && (!document.documentMode || 9 < document.documentMode);
  }
  function rp() {
    es && (es.detachEvent("onpropertychange", ap), ts = es = null);
  }
  function ap(e) {
    if (e.propertyName === "value" && Oo(ts)) {
      var n = [];
      Wh(
        n,
        ts,
        e,
        Wu(e)
      ), Fh(B1, n);
    }
  }
  function U1(e, n, i) {
    e === "focusin" ? (rp(), es = n, ts = i, es.attachEvent("onpropertychange", ap)) : e === "focusout" && rp();
  }
  function F1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Oo(ts);
  }
  function H1(e, n) {
    if (e === "click") return Oo(n);
  }
  function q1(e, n) {
    if (e === "input" || e === "change")
      return Oo(n);
  }
  function Z1(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Sn = typeof Object.is == "function" ? Object.is : Z1;
  function ns(e, n) {
    if (Sn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var i = Object.keys(e), o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var c = i[o];
      if (!nt.call(n, c) || !Sn(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function ip(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function sp(e, n) {
    var i = ip(e);
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
      i = ip(i);
    }
  }
  function op(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? op(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function lp(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = xo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = xo(e.document);
    }
    return n;
  }
  function cc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var G1 = hr && "documentMode" in document && 11 >= document.documentMode, ni = null, fc = null, rs = null, dc = !1;
  function up(e, n, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    dc || ni == null || ni !== xo(o) || (o = ni, "selectionStart" in o && cc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), rs && ns(rs, o) || (rs = o, o = pl(fc, "onSelect"), 0 < o.length && (n = new Ao(
      "onSelect",
      "select",
      null,
      n,
      i
    ), e.push({ event: n, listeners: o }), n.target = ni)));
  }
  function ma(e, n) {
    var i = {};
    return i[e.toLowerCase()] = n.toLowerCase(), i["Webkit" + e] = "webkit" + n, i["Moz" + e] = "moz" + n, i;
  }
  var ri = {
    animationend: ma("Animation", "AnimationEnd"),
    animationiteration: ma("Animation", "AnimationIteration"),
    animationstart: ma("Animation", "AnimationStart"),
    transitionrun: ma("Transition", "TransitionRun"),
    transitionstart: ma("Transition", "TransitionStart"),
    transitioncancel: ma("Transition", "TransitionCancel"),
    transitionend: ma("Transition", "TransitionEnd")
  }, hc = {}, cp = {};
  hr && (cp = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
  function ga(e) {
    if (hc[e]) return hc[e];
    if (!ri[e]) return e;
    var n = ri[e], i;
    for (i in n)
      if (n.hasOwnProperty(i) && i in cp)
        return hc[e] = n[i];
    return e;
  }
  var fp = ga("animationend"), dp = ga("animationiteration"), hp = ga("animationstart"), V1 = ga("transitionrun"), Y1 = ga("transitionstart"), X1 = ga("transitioncancel"), pp = ga("transitionend"), mp = /* @__PURE__ */ new Map(), pc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  pc.push("scrollEnd");
  function Xn(e, n) {
    mp.set(e, n), ha(n, [e]);
  }
  var gp = /* @__PURE__ */ new WeakMap();
  function Ln(e, n) {
    if (typeof e == "object" && e !== null) {
      var i = gp.get(e);
      return i !== void 0 ? i : (n = {
        value: e,
        source: n,
        stack: kh(n)
      }, gp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: kh(n)
    };
  }
  var In = [], ai = 0, mc = 0;
  function Do() {
    for (var e = ai, n = mc = ai = 0; n < e; ) {
      var i = In[n];
      In[n++] = null;
      var o = In[n];
      In[n++] = null;
      var c = In[n];
      In[n++] = null;
      var y = In[n];
      if (In[n++] = null, o !== null && c !== null) {
        var N = o.pending;
        N === null ? c.next = c : (c.next = N.next, N.next = c), o.pending = c;
      }
      y !== 0 && vp(i, c, y);
    }
  }
  function Mo(e, n, i, o) {
    In[ai++] = e, In[ai++] = n, In[ai++] = i, In[ai++] = o, mc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function gc(e, n, i, o) {
    return Mo(e, n, i, o), ko(e);
  }
  function ii(e, n) {
    return Mo(e, null, null, n), ko(e);
  }
  function vp(e, n, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var c = !1, y = e.return; y !== null; )
      y.childLanes |= i, o = y.alternate, o !== null && (o.childLanes |= i), y.tag === 22 && (e = y.stateNode, e === null || e._visibility & 1 || (c = !0)), e = y, y = y.return;
    return e.tag === 3 ? (y = e.stateNode, c && n !== null && (c = 31 - Lt(i), e = y.hiddenUpdates, o = e[c], o === null ? e[c] = [n] : o.push(n), n.lane = i | 536870912), y) : null;
  }
  function ko(e) {
    if (50 < Ts)
      throw Ts = 0, Ef = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var si = {};
  function $1(e, n, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xn(e, n, i, o) {
    return new $1(e, n, i, o);
  }
  function vc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function pr(e, n) {
    var i = e.alternate;
    return i === null ? (i = xn(
      e.tag,
      n,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = n, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, n = e.dependencies, i.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function yp(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, n = i.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function jo(e, n, i, o, c, y) {
    var N = 0;
    if (o = e, typeof e == "function") vc(e) && (N = 1);
    else if (typeof e == "string")
      N = K_(
        e,
        i,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Y:
          return e = xn(31, i, n, c), e.elementType = Y, e.lanes = y, e;
        case p:
          return va(i.children, c, y, n);
        case x:
          N = 8, c |= 24;
          break;
        case E:
          return e = xn(12, i, n, c | 2), e.elementType = E, e.lanes = y, e;
        case T:
          return e = xn(13, i, n, c), e.elementType = T, e.lanes = y, e;
        case M:
          return e = xn(19, i, n, c), e.elementType = M, e.lanes = y, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case A:
              case D:
                N = 10;
                break e;
              case w:
                N = 9;
                break e;
              case C:
                N = 11;
                break e;
              case R:
                N = 14;
                break e;
              case L:
                N = 16, o = null;
                break e;
            }
          N = 29, i = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = xn(N, i, n, c), n.elementType = e, n.type = o, n.lanes = y, n;
  }
  function va(e, n, i, o) {
    return e = xn(7, e, o, n), e.lanes = i, e;
  }
  function yc(e, n, i) {
    return e = xn(6, e, null, n), e.lanes = i, e;
  }
  function bc(e, n, i) {
    return n = xn(
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
  var oi = [], li = 0, Ro = null, zo = 0, Pn = [], Bn = 0, ya = null, mr = 1, gr = "";
  function ba(e, n) {
    oi[li++] = zo, oi[li++] = Ro, Ro = e, zo = n;
  }
  function bp(e, n, i) {
    Pn[Bn++] = mr, Pn[Bn++] = gr, Pn[Bn++] = ya, ya = e;
    var o = mr;
    e = gr;
    var c = 32 - Lt(o) - 1;
    o &= ~(1 << c), i += 1;
    var y = 32 - Lt(n) + c;
    if (30 < y) {
      var N = c - c % 5;
      y = (o & (1 << N) - 1).toString(32), o >>= N, c -= N, mr = 1 << 32 - Lt(n) + c | i << c | o, gr = y + e;
    } else
      mr = 1 << y | i << c | o, gr = e;
  }
  function _c(e) {
    e.return !== null && (ba(e, 1), bp(e, 1, 0));
  }
  function Sc(e) {
    for (; e === Ro; )
      Ro = oi[--li], oi[li] = null, zo = oi[--li], oi[li] = null;
    for (; e === ya; )
      ya = Pn[--Bn], Pn[Bn] = null, gr = Pn[--Bn], Pn[Bn] = null, mr = Pn[--Bn], Pn[Bn] = null;
  }
  var rn = null, _t = null, tt = !1, _a = null, rr = !1, xc = Error(s(519));
  function Sa(e) {
    var n = Error(s(418, ""));
    throw ss(Ln(n, e)), xc;
  }
  function _p(e) {
    var n = e.stateNode, i = e.type, o = e.memoizedProps;
    switch (n[Yt] = e, n[cn] = o, i) {
      case "dialog":
        Ge("cancel", n), Ge("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ge("load", n);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Ds.length; i++)
          Ge(Ds[i], n);
        break;
      case "source":
        Ge("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ge("error", n), Ge("load", n);
        break;
      case "details":
        Ge("toggle", n);
        break;
      case "input":
        Ge("invalid", n), zh(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), So(n);
        break;
      case "select":
        Ge("invalid", n);
        break;
      case "textarea":
        Ge("invalid", n), Ih(n, o.value, o.defaultValue, o.children), So(n);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || o.suppressHydrationWarning === !0 || Ig(n.textContent, i) ? (o.popover != null && (Ge("beforetoggle", n), Ge("toggle", n)), o.onScroll != null && Ge("scroll", n), o.onScrollEnd != null && Ge("scrollend", n), o.onClick != null && (n.onclick = ml), n = !0) : n = !1, n || Sa(e);
  }
  function Sp(e) {
    for (rn = e.return; rn; )
      switch (rn.tag) {
        case 5:
        case 13:
          rr = !1;
          return;
        case 27:
        case 3:
          rr = !0;
          return;
        default:
          rn = rn.return;
      }
  }
  function as(e) {
    if (e !== rn) return !1;
    if (!tt) return Sp(e), tt = !0, !1;
    var n = e.tag, i;
    if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || Bf(e.type, e.memoizedProps)), i = !i), i && _t && Sa(e), Sp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (i = e.data, i === "/$") {
              if (n === 0) {
                _t = Qn(e.nextSibling);
                break e;
              }
              n--;
            } else
              i !== "$" && i !== "$!" && i !== "$?" || n++;
          e = e.nextSibling;
        }
        _t = null;
      }
    } else
      n === 27 ? (n = _t, Jr(e.type) ? (e = qf, qf = null, _t = e) : _t = n) : _t = rn ? Qn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function is() {
    _t = rn = null, tt = !1;
  }
  function xp() {
    var e = _a;
    return e !== null && (pn === null ? pn = e : pn.push.apply(
      pn,
      e
    ), _a = null), e;
  }
  function ss(e) {
    _a === null ? _a = [e] : _a.push(e);
  }
  var Ec = J(null), xa = null, vr = null;
  function Ir(e, n, i) {
    se(Ec, n._currentValue), n._currentValue = i;
  }
  function yr(e) {
    e._currentValue = Ec.current, ie(Ec);
  }
  function wc(e, n, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === i) break;
      e = e.return;
    }
  }
  function Cc(e, n, i, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var y = c.dependencies;
      if (y !== null) {
        var N = c.child;
        y = y.firstContext;
        e: for (; y !== null; ) {
          var O = y;
          y = c;
          for (var k = 0; k < n.length; k++)
            if (O.context === n[k]) {
              y.lanes |= i, O = y.alternate, O !== null && (O.lanes |= i), wc(
                y.return,
                i,
                e
              ), o || (N = null);
              break e;
            }
          y = O.next;
        }
      } else if (c.tag === 18) {
        if (N = c.return, N === null) throw Error(s(341));
        N.lanes |= i, y = N.alternate, y !== null && (y.lanes |= i), wc(N, i, e), N = null;
      } else N = c.child;
      if (N !== null) N.return = c;
      else
        for (N = c; N !== null; ) {
          if (N === e) {
            N = null;
            break;
          }
          if (c = N.sibling, c !== null) {
            c.return = N.return, N = c;
            break;
          }
          N = N.return;
        }
      c = N;
    }
  }
  function os(e, n, i, o) {
    e = null;
    for (var c = n, y = !1; c !== null; ) {
      if (!y) {
        if ((c.flags & 524288) !== 0) y = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var N = c.alternate;
        if (N === null) throw Error(s(387));
        if (N = N.memoizedProps, N !== null) {
          var O = c.type;
          Sn(c.pendingProps.value, N.value) || (e !== null ? e.push(O) : e = [O]);
        }
      } else if (c === xe.current) {
        if (N = c.alternate, N === null) throw Error(s(387));
        N.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Ls) : e = [Ls]);
      }
      c = c.return;
    }
    e !== null && Cc(
      n,
      e,
      i,
      o
    ), n.flags |= 262144;
  }
  function Lo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Sn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ea(e) {
    xa = e, vr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Xt(e) {
    return Ep(xa, e);
  }
  function Io(e, n) {
    return xa === null && Ea(e), Ep(e, n);
  }
  function Ep(e, n) {
    var i = n._currentValue;
    if (n = { context: n, memoizedValue: i, next: null }, vr === null) {
      if (e === null) throw Error(s(308));
      vr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else vr = vr.next = n;
    return i;
  }
  var Q1 = typeof AbortController < "u" ? AbortController : function() {
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
  }, K1 = t.unstable_scheduleCallback, J1 = t.unstable_NormalPriority, kt = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Nc() {
    return {
      controller: new Q1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ls(e) {
    e.refCount--, e.refCount === 0 && K1(J1, function() {
      e.controller.abort();
    });
  }
  var us = null, Ac = 0, ui = 0, ci = null;
  function W1(e, n) {
    if (us === null) {
      var i = us = [];
      Ac = 0, ui = Df(), ci = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return Ac++, n.then(wp, wp), n;
  }
  function wp() {
    if (--Ac === 0 && us !== null) {
      ci !== null && (ci.status = "fulfilled");
      var e = us;
      us = null, ui = 0, ci = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function e_(e, n) {
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
  var Cp = P.S;
  P.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && W1(e, n), Cp !== null && Cp(e, n);
  };
  var wa = J(null);
  function Tc() {
    var e = wa.current;
    return e !== null ? e : ft.pooledCache;
  }
  function Po(e, n) {
    n === null ? se(wa, wa.current) : se(wa, n.pool);
  }
  function Np() {
    var e = Tc();
    return e === null ? null : { parent: kt._currentValue, pool: e };
  }
  var cs = Error(s(460)), Ap = Error(s(474)), Bo = Error(s(542)), Oc = { then: function() {
  } };
  function Tp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Uo() {
  }
  function Op(e, n, i) {
    switch (i = e[i], i === void 0 ? e.push(n) : i !== n && (n.then(Uo, Uo), n = i), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Mp(e), e;
      default:
        if (typeof n.status == "string") n.then(Uo, Uo);
        else {
          if (e = ft, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = n.reason, Mp(e), e;
        }
        throw fs = n, cs;
    }
  }
  var fs = null;
  function Dp() {
    if (fs === null) throw Error(s(459));
    var e = fs;
    return fs = null, e;
  }
  function Mp(e) {
    if (e === cs || e === Bo)
      throw Error(s(483));
  }
  var Pr = !1;
  function Dc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Mc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Br(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ur(e, n, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (at & 2) !== 0) {
      var c = o.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), o.pending = n, n = ko(e), vp(e, null, i), n;
    }
    return Mo(e, o, n, i), ko(e);
  }
  function ds(e, n, i) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (i & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, wh(e, i);
    }
  }
  function kc(e, n) {
    var i = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var c = null, y = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var N = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          y === null ? c = y = N : y = y.next = N, i = i.next;
        } while (i !== null);
        y === null ? c = y = n : y = y.next = n;
      } else c = y = n;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: y,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = n : e.next = n, i.lastBaseUpdate = n;
  }
  var jc = !1;
  function hs() {
    if (jc) {
      var e = ci;
      if (e !== null) throw e;
    }
  }
  function ps(e, n, i, o) {
    jc = !1;
    var c = e.updateQueue;
    Pr = !1;
    var y = c.firstBaseUpdate, N = c.lastBaseUpdate, O = c.shared.pending;
    if (O !== null) {
      c.shared.pending = null;
      var k = O, H = k.next;
      k.next = null, N === null ? y = H : N.next = H, N = k;
      var $ = e.alternate;
      $ !== null && ($ = $.updateQueue, O = $.lastBaseUpdate, O !== N && (O === null ? $.firstBaseUpdate = H : O.next = H, $.lastBaseUpdate = k));
    }
    if (y !== null) {
      var ee = c.baseState;
      N = 0, $ = H = k = null, O = y;
      do {
        var Z = O.lane & -536870913, V = Z !== O.lane;
        if (V ? (Ke & Z) === Z : (o & Z) === Z) {
          Z !== 0 && Z === ui && (jc = !0), $ !== null && ($ = $.next = {
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
                ee = v({}, ee, Z);
                break e;
              case 2:
                Pr = !0;
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
          }, $ === null ? (H = $ = V, k = ee) : $ = $.next = V, N |= Z;
        if (O = O.next, O === null) {
          if (O = c.shared.pending, O === null)
            break;
          V = O, O = V.next, V.next = null, c.lastBaseUpdate = V, c.shared.pending = null;
        }
      } while (!0);
      $ === null && (k = ee), c.baseState = k, c.firstBaseUpdate = H, c.lastBaseUpdate = $, y === null && (c.shared.lanes = 0), Xr |= N, e.lanes = N, e.memoizedState = ee;
    }
  }
  function kp(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function jp(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        kp(i[e], n);
  }
  var fi = J(null), Fo = J(0);
  function Rp(e, n) {
    e = Cr, se(Fo, e), se(fi, n), Cr = e | n.baseLanes;
  }
  function Rc() {
    se(Fo, Cr), se(fi, fi.current);
  }
  function zc() {
    Cr = Fo.current, ie(fi), ie(Fo);
  }
  var Fr = 0, Ue = null, st = null, At = null, Ho = !1, di = !1, Ca = !1, qo = 0, ms = 0, hi = null, t_ = 0;
  function Et() {
    throw Error(s(321));
  }
  function Lc(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!Sn(e[i], n[i])) return !1;
    return !0;
  }
  function Ic(e, n, i, o, c, y) {
    return Fr = y, Ue = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, P.H = e === null || e.memoizedState === null ? vm : ym, Ca = !1, y = i(o, c), Ca = !1, di && (y = Lp(
      n,
      i,
      o,
      c
    )), zp(e), y;
  }
  function zp(e) {
    P.H = $o;
    var n = st !== null && st.next !== null;
    if (Fr = 0, At = st = Ue = null, Ho = !1, ms = 0, hi = null, n) throw Error(s(300));
    e === null || Pt || (e = e.dependencies, e !== null && Lo(e) && (Pt = !0));
  }
  function Lp(e, n, i, o) {
    Ue = e;
    var c = 0;
    do {
      if (di && (hi = null), ms = 0, di = !1, 25 <= c) throw Error(s(301));
      if (c += 1, At = st = null, e.updateQueue != null) {
        var y = e.updateQueue;
        y.lastEffect = null, y.events = null, y.stores = null, y.memoCache != null && (y.memoCache.index = 0);
      }
      P.H = l_, y = n(i, o);
    } while (di);
    return y;
  }
  function n_() {
    var e = P.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? gs(n) : n, e = e.useState()[0], (st !== null ? st.memoizedState : null) !== e && (Ue.flags |= 1024), n;
  }
  function Pc() {
    var e = qo !== 0;
    return qo = 0, e;
  }
  function Bc(e, n, i) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~i;
  }
  function Uc(e) {
    if (Ho) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Ho = !1;
    }
    Fr = 0, At = st = Ue = null, di = !1, ms = qo = 0, hi = null;
  }
  function dn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return At === null ? Ue.memoizedState = At = e : At = At.next = e, At;
  }
  function Tt() {
    if (st === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = st.next;
    var n = At === null ? Ue.memoizedState : At.next;
    if (n !== null)
      At = n, st = e;
    else {
      if (e === null)
        throw Ue.alternate === null ? Error(s(467)) : Error(s(310));
      st = e, e = {
        memoizedState: st.memoizedState,
        baseState: st.baseState,
        baseQueue: st.baseQueue,
        queue: st.queue,
        next: null
      }, At === null ? Ue.memoizedState = At = e : At = At.next = e;
    }
    return At;
  }
  function Fc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function gs(e) {
    var n = ms;
    return ms += 1, hi === null && (hi = []), e = Op(hi, e, n), n = Ue, (At === null ? n.memoizedState : At.next) === null && (n = n.alternate, P.H = n === null || n.memoizedState === null ? vm : ym), e;
  }
  function Zo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return gs(e);
      if (e.$$typeof === D) return Xt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Hc(e) {
    var n = null, i = Ue.updateQueue;
    if (i !== null && (n = i.memoCache), n == null) {
      var o = Ue.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), i === null && (i = Fc(), Ue.updateQueue = i), i.memoCache = n, i = n.data[n.index], i === void 0)
      for (i = n.data[n.index] = Array(e), o = 0; o < e; o++)
        i[o] = U;
    return n.index++, i;
  }
  function br(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Go(e) {
    var n = Tt();
    return qc(n, st, e);
  }
  function qc(e, n, i) {
    var o = e.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = i;
    var c = e.baseQueue, y = o.pending;
    if (y !== null) {
      if (c !== null) {
        var N = c.next;
        c.next = y.next, y.next = N;
      }
      n.baseQueue = c = y, o.pending = null;
    }
    if (y = e.baseState, c === null) e.memoizedState = y;
    else {
      n = c.next;
      var O = N = null, k = null, H = n, $ = !1;
      do {
        var ee = H.lane & -536870913;
        if (ee !== H.lane ? (Ke & ee) === ee : (Fr & ee) === ee) {
          var Z = H.revertLane;
          if (Z === 0)
            k !== null && (k = k.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), ee === ui && ($ = !0);
          else if ((Fr & Z) === Z) {
            H = H.next, Z === ui && ($ = !0);
            continue;
          } else
            ee = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, k === null ? (O = k = ee, N = y) : k = k.next = ee, Ue.lanes |= Z, Xr |= Z;
          ee = H.action, Ca && i(y, ee), y = H.hasEagerState ? H.eagerState : i(y, ee);
        } else
          Z = {
            lane: ee,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, k === null ? (O = k = Z, N = y) : k = k.next = Z, Ue.lanes |= ee, Xr |= ee;
        H = H.next;
      } while (H !== null && H !== n);
      if (k === null ? N = y : k.next = O, !Sn(y, e.memoizedState) && (Pt = !0, $ && (i = ci, i !== null)))
        throw i;
      e.memoizedState = y, e.baseState = N, e.baseQueue = k, o.lastRenderedState = y;
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Zc(e) {
    var n = Tt(), i = n.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch, c = i.pending, y = n.memoizedState;
    if (c !== null) {
      i.pending = null;
      var N = c = c.next;
      do
        y = e(y, N.action), N = N.next;
      while (N !== c);
      Sn(y, n.memoizedState) || (Pt = !0), n.memoizedState = y, n.baseQueue === null && (n.baseState = y), i.lastRenderedState = y;
    }
    return [y, o];
  }
  function Ip(e, n, i) {
    var o = Ue, c = Tt(), y = tt;
    if (y) {
      if (i === void 0) throw Error(s(407));
      i = i();
    } else i = n();
    var N = !Sn(
      (st || c).memoizedState,
      i
    );
    N && (c.memoizedState = i, Pt = !0), c = c.queue;
    var O = Up.bind(null, o, c, e);
    if (vs(2048, 8, O, [e]), c.getSnapshot !== n || N || At !== null && At.memoizedState.tag & 1) {
      if (o.flags |= 2048, pi(
        9,
        Vo(),
        Bp.bind(
          null,
          o,
          c,
          i,
          n
        ),
        null
      ), ft === null) throw Error(s(349));
      y || (Fr & 124) !== 0 || Pp(o, n, i);
    }
    return i;
  }
  function Pp(e, n, i) {
    e.flags |= 16384, e = { getSnapshot: n, value: i }, n = Ue.updateQueue, n === null ? (n = Fc(), Ue.updateQueue = n, n.stores = [e]) : (i = n.stores, i === null ? n.stores = [e] : i.push(e));
  }
  function Bp(e, n, i, o) {
    n.value = i, n.getSnapshot = o, Fp(n) && Hp(e);
  }
  function Up(e, n, i) {
    return i(function() {
      Fp(n) && Hp(e);
    });
  }
  function Fp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !Sn(e, i);
    } catch {
      return !0;
    }
  }
  function Hp(e) {
    var n = ii(e, 2);
    n !== null && An(n, e, 2);
  }
  function Gc(e) {
    var n = dn();
    if (typeof e == "function") {
      var i = e;
      if (e = i(), Ca) {
        en(!0);
        try {
          i();
        } finally {
          en(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: br,
      lastRenderedState: e
    }, n;
  }
  function qp(e, n, i, o) {
    return e.baseState = i, qc(
      e,
      st,
      typeof o == "function" ? o : br
    );
  }
  function r_(e, n, i, o, c) {
    if (Xo(e)) throw Error(s(485));
    if (e = n.action, e !== null) {
      var y = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(N) {
          y.listeners.push(N);
        }
      };
      P.T !== null ? i(!0) : y.isTransition = !1, o(y), i = n.pending, i === null ? (y.next = n.pending = y, Zp(n, y)) : (y.next = i.next, n.pending = i.next = y);
    }
  }
  function Zp(e, n) {
    var i = n.action, o = n.payload, c = e.state;
    if (n.isTransition) {
      var y = P.T, N = {};
      P.T = N;
      try {
        var O = i(c, o), k = P.S;
        k !== null && k(N, O), Gp(e, n, O);
      } catch (H) {
        Vc(e, n, H);
      } finally {
        P.T = y;
      }
    } else
      try {
        y = i(c, o), Gp(e, n, y);
      } catch (H) {
        Vc(e, n, H);
      }
  }
  function Gp(e, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        Vp(e, n, o);
      },
      function(o) {
        return Vc(e, n, o);
      }
    ) : Vp(e, n, i);
  }
  function Vp(e, n, i) {
    n.status = "fulfilled", n.value = i, Yp(n), e.state = i, n = e.pending, n !== null && (i = n.next, i === n ? e.pending = null : (i = i.next, n.next = i, Zp(e, i)));
  }
  function Vc(e, n, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = i, Yp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Yp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Xp(e, n) {
    return n;
  }
  function $p(e, n) {
    if (tt) {
      var i = ft.formState;
      if (i !== null) {
        e: {
          var o = Ue;
          if (tt) {
            if (_t) {
              t: {
                for (var c = _t, y = rr; c.nodeType !== 8; ) {
                  if (!y) {
                    c = null;
                    break t;
                  }
                  if (c = Qn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                y = c.data, c = y === "F!" || y === "F" ? c : null;
              }
              if (c) {
                _t = Qn(
                  c.nextSibling
                ), o = c.data === "F!";
                break e;
              }
            }
            Sa(o);
          }
          o = !1;
        }
        o && (n = i[0]);
      }
    }
    return i = dn(), i.memoizedState = i.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xp,
      lastRenderedState: n
    }, i.queue = o, i = pm.bind(
      null,
      Ue,
      o
    ), o.dispatch = i, o = Gc(!1), y = Kc.bind(
      null,
      Ue,
      !1,
      o.queue
    ), o = dn(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = c, i = r_.bind(
      null,
      Ue,
      c,
      y,
      i
    ), c.dispatch = i, o.memoizedState = e, [n, i, !1];
  }
  function Qp(e) {
    var n = Tt();
    return Kp(n, st, e);
  }
  function Kp(e, n, i) {
    if (n = qc(
      e,
      n,
      Xp
    )[0], e = Go(br)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = gs(n);
      } catch (N) {
        throw N === cs ? Bo : N;
      }
    else o = n;
    n = Tt();
    var c = n.queue, y = c.dispatch;
    return i !== n.memoizedState && (Ue.flags |= 2048, pi(
      9,
      Vo(),
      a_.bind(null, c, i),
      null
    )), [o, y, e];
  }
  function a_(e, n) {
    e.action = n;
  }
  function Jp(e) {
    var n = Tt(), i = st;
    if (i !== null)
      return Kp(n, i, e);
    Tt(), n = n.memoizedState, i = Tt();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [n, o, !1];
  }
  function pi(e, n, i, o) {
    return e = { tag: e, create: i, deps: o, inst: n, next: null }, n = Ue.updateQueue, n === null && (n = Fc(), Ue.updateQueue = n), i = n.lastEffect, i === null ? n.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, n.lastEffect = e), e;
  }
  function Vo() {
    return { destroy: void 0, resource: void 0 };
  }
  function Wp() {
    return Tt().memoizedState;
  }
  function Yo(e, n, i, o) {
    var c = dn();
    o = o === void 0 ? null : o, Ue.flags |= e, c.memoizedState = pi(
      1 | n,
      Vo(),
      i,
      o
    );
  }
  function vs(e, n, i, o) {
    var c = Tt();
    o = o === void 0 ? null : o;
    var y = c.memoizedState.inst;
    st !== null && o !== null && Lc(o, st.memoizedState.deps) ? c.memoizedState = pi(n, y, i, o) : (Ue.flags |= e, c.memoizedState = pi(
      1 | n,
      y,
      i,
      o
    ));
  }
  function em(e, n) {
    Yo(8390656, 8, e, n);
  }
  function tm(e, n) {
    vs(2048, 8, e, n);
  }
  function nm(e, n) {
    return vs(4, 2, e, n);
  }
  function rm(e, n) {
    return vs(4, 4, e, n);
  }
  function am(e, n) {
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
  function im(e, n, i) {
    i = i != null ? i.concat([e]) : null, vs(4, 4, am.bind(null, n, e), i);
  }
  function Yc() {
  }
  function sm(e, n) {
    var i = Tt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    return n !== null && Lc(n, o[1]) ? o[0] : (i.memoizedState = [e, n], e);
  }
  function om(e, n) {
    var i = Tt();
    n = n === void 0 ? null : n;
    var o = i.memoizedState;
    if (n !== null && Lc(n, o[1]))
      return o[0];
    if (o = e(), Ca) {
      en(!0);
      try {
        e();
      } finally {
        en(!1);
      }
    }
    return i.memoizedState = [o, n], o;
  }
  function Xc(e, n, i) {
    return i === void 0 || (Fr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = i, e = cg(), Ue.lanes |= e, Xr |= e, i);
  }
  function lm(e, n, i, o) {
    return Sn(i, n) ? i : fi.current !== null ? (e = Xc(e, i, o), Sn(e, n) || (Pt = !0), e) : (Fr & 42) === 0 ? (Pt = !0, e.memoizedState = i) : (e = cg(), Ue.lanes |= e, Xr |= e, n);
  }
  function um(e, n, i, o, c) {
    var y = ae.p;
    ae.p = y !== 0 && 8 > y ? y : 8;
    var N = P.T, O = {};
    P.T = O, Kc(e, !1, n, i);
    try {
      var k = c(), H = P.S;
      if (H !== null && H(O, k), k !== null && typeof k == "object" && typeof k.then == "function") {
        var $ = e_(
          k,
          o
        );
        ys(
          e,
          n,
          $,
          Nn(e)
        );
      } else
        ys(
          e,
          n,
          o,
          Nn(e)
        );
    } catch (ee) {
      ys(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: ee },
        Nn()
      );
    } finally {
      ae.p = y, P.T = N;
    }
  }
  function i_() {
  }
  function $c(e, n, i, o) {
    if (e.tag !== 5) throw Error(s(476));
    var c = cm(e).queue;
    um(
      e,
      c,
      n,
      me,
      i === null ? i_ : function() {
        return fm(e), i(o);
      }
    );
  }
  function cm(e) {
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
        lastRenderedReducer: br,
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
        lastRenderedReducer: br,
        lastRenderedState: i
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function fm(e) {
    var n = cm(e).next.queue;
    ys(e, n, {}, Nn());
  }
  function Qc() {
    return Xt(Ls);
  }
  function dm() {
    return Tt().memoizedState;
  }
  function hm() {
    return Tt().memoizedState;
  }
  function s_(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = Nn();
          e = Br(i);
          var o = Ur(n, e, i);
          o !== null && (An(o, n, i), ds(o, n, i)), n = { cache: Nc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function o_(e, n, i) {
    var o = Nn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xo(e) ? mm(n, i) : (i = gc(e, n, i, o), i !== null && (An(i, e, o), gm(i, n, o)));
  }
  function pm(e, n, i) {
    var o = Nn();
    ys(e, n, i, o);
  }
  function ys(e, n, i, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Xo(e)) mm(n, c);
    else {
      var y = e.alternate;
      if (e.lanes === 0 && (y === null || y.lanes === 0) && (y = n.lastRenderedReducer, y !== null))
        try {
          var N = n.lastRenderedState, O = y(N, i);
          if (c.hasEagerState = !0, c.eagerState = O, Sn(O, N))
            return Mo(e, n, c, 0), ft === null && Do(), !1;
        } catch {
        } finally {
        }
      if (i = gc(e, n, c, o), i !== null)
        return An(i, e, o), gm(i, n, o), !0;
    }
    return !1;
  }
  function Kc(e, n, i, o) {
    if (o = {
      lane: 2,
      revertLane: Df(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xo(e)) {
      if (n) throw Error(s(479));
    } else
      n = gc(
        e,
        i,
        o,
        2
      ), n !== null && An(n, e, 2);
  }
  function Xo(e) {
    var n = e.alternate;
    return e === Ue || n !== null && n === Ue;
  }
  function mm(e, n) {
    di = Ho = !0;
    var i = e.pending;
    i === null ? n.next = n : (n.next = i.next, i.next = n), e.pending = n;
  }
  function gm(e, n, i) {
    if ((i & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, i |= o, n.lanes = i, wh(e, i);
    }
  }
  var $o = {
    readContext: Xt,
    use: Zo,
    useCallback: Et,
    useContext: Et,
    useEffect: Et,
    useImperativeHandle: Et,
    useLayoutEffect: Et,
    useInsertionEffect: Et,
    useMemo: Et,
    useReducer: Et,
    useRef: Et,
    useState: Et,
    useDebugValue: Et,
    useDeferredValue: Et,
    useTransition: Et,
    useSyncExternalStore: Et,
    useId: Et,
    useHostTransitionStatus: Et,
    useFormState: Et,
    useActionState: Et,
    useOptimistic: Et,
    useMemoCache: Et,
    useCacheRefresh: Et
  }, vm = {
    readContext: Xt,
    use: Zo,
    useCallback: function(e, n) {
      return dn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Xt,
    useEffect: em,
    useImperativeHandle: function(e, n, i) {
      i = i != null ? i.concat([e]) : null, Yo(
        4194308,
        4,
        am.bind(null, n, e),
        i
      );
    },
    useLayoutEffect: function(e, n) {
      return Yo(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Yo(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var i = dn();
      n = n === void 0 ? null : n;
      var o = e();
      if (Ca) {
        en(!0);
        try {
          e();
        } finally {
          en(!1);
        }
      }
      return i.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, i) {
      var o = dn();
      if (i !== void 0) {
        var c = i(n);
        if (Ca) {
          en(!0);
          try {
            i(n);
          } finally {
            en(!1);
          }
        }
      } else c = n;
      return o.memoizedState = o.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, o.queue = e, e = e.dispatch = o_.bind(
        null,
        Ue,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = dn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Gc(e);
      var n = e.queue, i = pm.bind(null, Ue, n);
      return n.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, n) {
      var i = dn();
      return Xc(i, e, n);
    },
    useTransition: function() {
      var e = Gc(!1);
      return e = um.bind(
        null,
        Ue,
        e.queue,
        !0,
        !1
      ), dn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, i) {
      var o = Ue, c = dn();
      if (tt) {
        if (i === void 0)
          throw Error(s(407));
        i = i();
      } else {
        if (i = n(), ft === null)
          throw Error(s(349));
        (Ke & 124) !== 0 || Pp(o, n, i);
      }
      c.memoizedState = i;
      var y = { value: i, getSnapshot: n };
      return c.queue = y, em(Up.bind(null, o, y, e), [
        e
      ]), o.flags |= 2048, pi(
        9,
        Vo(),
        Bp.bind(
          null,
          o,
          y,
          i,
          n
        ),
        null
      ), i;
    },
    useId: function() {
      var e = dn(), n = ft.identifierPrefix;
      if (tt) {
        var i = gr, o = mr;
        i = (o & ~(1 << 32 - Lt(o) - 1)).toString(32) + i, n = "«" + n + "R" + i, i = qo++, 0 < i && (n += "H" + i.toString(32)), n += "»";
      } else
        i = t_++, n = "«" + n + "r" + i.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Qc,
    useFormState: $p,
    useActionState: $p,
    useOptimistic: function(e) {
      var n = dn();
      n.memoizedState = n.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = i, n = Kc.bind(
        null,
        Ue,
        !0,
        i
      ), i.dispatch = n, [e, n];
    },
    useMemoCache: Hc,
    useCacheRefresh: function() {
      return dn().memoizedState = s_.bind(
        null,
        Ue
      );
    }
  }, ym = {
    readContext: Xt,
    use: Zo,
    useCallback: sm,
    useContext: Xt,
    useEffect: tm,
    useImperativeHandle: im,
    useInsertionEffect: nm,
    useLayoutEffect: rm,
    useMemo: om,
    useReducer: Go,
    useRef: Wp,
    useState: function() {
      return Go(br);
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, n) {
      var i = Tt();
      return lm(
        i,
        st.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Go(br)[0], n = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : gs(e),
        n
      ];
    },
    useSyncExternalStore: Ip,
    useId: dm,
    useHostTransitionStatus: Qc,
    useFormState: Qp,
    useActionState: Qp,
    useOptimistic: function(e, n) {
      var i = Tt();
      return qp(i, st, e, n);
    },
    useMemoCache: Hc,
    useCacheRefresh: hm
  }, l_ = {
    readContext: Xt,
    use: Zo,
    useCallback: sm,
    useContext: Xt,
    useEffect: tm,
    useImperativeHandle: im,
    useInsertionEffect: nm,
    useLayoutEffect: rm,
    useMemo: om,
    useReducer: Zc,
    useRef: Wp,
    useState: function() {
      return Zc(br);
    },
    useDebugValue: Yc,
    useDeferredValue: function(e, n) {
      var i = Tt();
      return st === null ? Xc(i, e, n) : lm(
        i,
        st.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Zc(br)[0], n = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : gs(e),
        n
      ];
    },
    useSyncExternalStore: Ip,
    useId: dm,
    useHostTransitionStatus: Qc,
    useFormState: Jp,
    useActionState: Jp,
    useOptimistic: function(e, n) {
      var i = Tt();
      return st !== null ? qp(i, st, e, n) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Hc,
    useCacheRefresh: hm
  }, mi = null, bs = 0;
  function Qo(e) {
    var n = bs;
    return bs += 1, mi === null && (mi = []), Op(mi, e, n);
  }
  function _s(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Ko(e, n) {
    throw n.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function bm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function _m(e) {
    function n(I, z) {
      if (e) {
        var F = I.deletions;
        F === null ? (I.deletions = [z], I.flags |= 16) : F.push(z);
      }
    }
    function i(I, z) {
      if (!e) return null;
      for (; z !== null; )
        n(I, z), z = z.sibling;
      return null;
    }
    function o(I) {
      for (var z = /* @__PURE__ */ new Map(); I !== null; )
        I.key !== null ? z.set(I.key, I) : z.set(I.index, I), I = I.sibling;
      return z;
    }
    function c(I, z) {
      return I = pr(I, z), I.index = 0, I.sibling = null, I;
    }
    function y(I, z, F) {
      return I.index = F, e ? (F = I.alternate, F !== null ? (F = F.index, F < z ? (I.flags |= 67108866, z) : F) : (I.flags |= 67108866, z)) : (I.flags |= 1048576, z);
    }
    function N(I) {
      return e && I.alternate === null && (I.flags |= 67108866), I;
    }
    function O(I, z, F, K) {
      return z === null || z.tag !== 6 ? (z = yc(F, I.mode, K), z.return = I, z) : (z = c(z, F), z.return = I, z);
    }
    function k(I, z, F, K) {
      var ye = F.type;
      return ye === p ? $(
        I,
        z,
        F.props.children,
        K,
        F.key
      ) : z !== null && (z.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === L && bm(ye) === z.type) ? (z = c(z, F.props), _s(z, F), z.return = I, z) : (z = jo(
        F.type,
        F.key,
        F.props,
        null,
        I.mode,
        K
      ), _s(z, F), z.return = I, z);
    }
    function H(I, z, F, K) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== F.containerInfo || z.stateNode.implementation !== F.implementation ? (z = bc(F, I.mode, K), z.return = I, z) : (z = c(z, F.children || []), z.return = I, z);
    }
    function $(I, z, F, K, ye) {
      return z === null || z.tag !== 7 ? (z = va(
        F,
        I.mode,
        K,
        ye
      ), z.return = I, z) : (z = c(z, F), z.return = I, z);
    }
    function ee(I, z, F) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = yc(
          "" + z,
          I.mode,
          F
        ), z.return = I, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            return F = jo(
              z.type,
              z.key,
              z.props,
              null,
              I.mode,
              F
            ), _s(F, z), F.return = I, F;
          case m:
            return z = bc(
              z,
              I.mode,
              F
            ), z.return = I, z;
          case L:
            var K = z._init;
            return z = K(z._payload), ee(I, z, F);
        }
        if (_e(z) || Q(z))
          return z = va(
            z,
            I.mode,
            F,
            null
          ), z.return = I, z;
        if (typeof z.then == "function")
          return ee(I, Qo(z), F);
        if (z.$$typeof === D)
          return ee(
            I,
            Io(I, z),
            F
          );
        Ko(I, z);
      }
      return null;
    }
    function Z(I, z, F, K) {
      var ye = z !== null ? z.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return ye !== null ? null : O(I, z, "" + F, K);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case b:
            return F.key === ye ? k(I, z, F, K) : null;
          case m:
            return F.key === ye ? H(I, z, F, K) : null;
          case L:
            return ye = F._init, F = ye(F._payload), Z(I, z, F, K);
        }
        if (_e(F) || Q(F))
          return ye !== null ? null : $(I, z, F, K, null);
        if (typeof F.then == "function")
          return Z(
            I,
            z,
            Qo(F),
            K
          );
        if (F.$$typeof === D)
          return Z(
            I,
            z,
            Io(I, F),
            K
          );
        Ko(I, F);
      }
      return null;
    }
    function V(I, z, F, K, ye) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return I = I.get(F) || null, O(z, I, "" + K, ye);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case b:
            return I = I.get(
              K.key === null ? F : K.key
            ) || null, k(z, I, K, ye);
          case m:
            return I = I.get(
              K.key === null ? F : K.key
            ) || null, H(z, I, K, ye);
          case L:
            var qe = K._init;
            return K = qe(K._payload), V(
              I,
              z,
              F,
              K,
              ye
            );
        }
        if (_e(K) || Q(K))
          return I = I.get(F) || null, $(z, I, K, ye, null);
        if (typeof K.then == "function")
          return V(
            I,
            z,
            F,
            Qo(K),
            ye
          );
        if (K.$$typeof === D)
          return V(
            I,
            z,
            F,
            Io(z, K),
            ye
          );
        Ko(z, K);
      }
      return null;
    }
    function Te(I, z, F, K) {
      for (var ye = null, qe = null, Se = z, Ae = z = 0, Ut = null; Se !== null && Ae < F.length; Ae++) {
        Se.index > Ae ? (Ut = Se, Se = null) : Ut = Se.sibling;
        var Je = Z(
          I,
          Se,
          F[Ae],
          K
        );
        if (Je === null) {
          Se === null && (Se = Ut);
          break;
        }
        e && Se && Je.alternate === null && n(I, Se), z = y(Je, z, Ae), qe === null ? ye = Je : qe.sibling = Je, qe = Je, Se = Ut;
      }
      if (Ae === F.length)
        return i(I, Se), tt && ba(I, Ae), ye;
      if (Se === null) {
        for (; Ae < F.length; Ae++)
          Se = ee(I, F[Ae], K), Se !== null && (z = y(
            Se,
            z,
            Ae
          ), qe === null ? ye = Se : qe.sibling = Se, qe = Se);
        return tt && ba(I, Ae), ye;
      }
      for (Se = o(Se); Ae < F.length; Ae++)
        Ut = V(
          Se,
          I,
          Ae,
          F[Ae],
          K
        ), Ut !== null && (e && Ut.alternate !== null && Se.delete(
          Ut.key === null ? Ae : Ut.key
        ), z = y(
          Ut,
          z,
          Ae
        ), qe === null ? ye = Ut : qe.sibling = Ut, qe = Ut);
      return e && Se.forEach(function(ra) {
        return n(I, ra);
      }), tt && ba(I, Ae), ye;
    }
    function Ce(I, z, F, K) {
      if (F == null) throw Error(s(151));
      for (var ye = null, qe = null, Se = z, Ae = z = 0, Ut = null, Je = F.next(); Se !== null && !Je.done; Ae++, Je = F.next()) {
        Se.index > Ae ? (Ut = Se, Se = null) : Ut = Se.sibling;
        var ra = Z(I, Se, Je.value, K);
        if (ra === null) {
          Se === null && (Se = Ut);
          break;
        }
        e && Se && ra.alternate === null && n(I, Se), z = y(ra, z, Ae), qe === null ? ye = ra : qe.sibling = ra, qe = ra, Se = Ut;
      }
      if (Je.done)
        return i(I, Se), tt && ba(I, Ae), ye;
      if (Se === null) {
        for (; !Je.done; Ae++, Je = F.next())
          Je = ee(I, Je.value, K), Je !== null && (z = y(Je, z, Ae), qe === null ? ye = Je : qe.sibling = Je, qe = Je);
        return tt && ba(I, Ae), ye;
      }
      for (Se = o(Se); !Je.done; Ae++, Je = F.next())
        Je = V(Se, I, Ae, Je.value, K), Je !== null && (e && Je.alternate !== null && Se.delete(Je.key === null ? Ae : Je.key), z = y(Je, z, Ae), qe === null ? ye = Je : qe.sibling = Je, qe = Je);
      return e && Se.forEach(function(u2) {
        return n(I, u2);
      }), tt && ba(I, Ae), ye;
    }
    function lt(I, z, F, K) {
      if (typeof F == "object" && F !== null && F.type === p && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case b:
            e: {
              for (var ye = F.key; z !== null; ) {
                if (z.key === ye) {
                  if (ye = F.type, ye === p) {
                    if (z.tag === 7) {
                      i(
                        I,
                        z.sibling
                      ), K = c(
                        z,
                        F.props.children
                      ), K.return = I, I = K;
                      break e;
                    }
                  } else if (z.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === L && bm(ye) === z.type) {
                    i(
                      I,
                      z.sibling
                    ), K = c(z, F.props), _s(K, F), K.return = I, I = K;
                    break e;
                  }
                  i(I, z);
                  break;
                } else n(I, z);
                z = z.sibling;
              }
              F.type === p ? (K = va(
                F.props.children,
                I.mode,
                K,
                F.key
              ), K.return = I, I = K) : (K = jo(
                F.type,
                F.key,
                F.props,
                null,
                I.mode,
                K
              ), _s(K, F), K.return = I, I = K);
            }
            return N(I);
          case m:
            e: {
              for (ye = F.key; z !== null; ) {
                if (z.key === ye)
                  if (z.tag === 4 && z.stateNode.containerInfo === F.containerInfo && z.stateNode.implementation === F.implementation) {
                    i(
                      I,
                      z.sibling
                    ), K = c(z, F.children || []), K.return = I, I = K;
                    break e;
                  } else {
                    i(I, z);
                    break;
                  }
                else n(I, z);
                z = z.sibling;
              }
              K = bc(F, I.mode, K), K.return = I, I = K;
            }
            return N(I);
          case L:
            return ye = F._init, F = ye(F._payload), lt(
              I,
              z,
              F,
              K
            );
        }
        if (_e(F))
          return Te(
            I,
            z,
            F,
            K
          );
        if (Q(F)) {
          if (ye = Q(F), typeof ye != "function") throw Error(s(150));
          return F = ye.call(F), Ce(
            I,
            z,
            F,
            K
          );
        }
        if (typeof F.then == "function")
          return lt(
            I,
            z,
            Qo(F),
            K
          );
        if (F.$$typeof === D)
          return lt(
            I,
            z,
            Io(I, F),
            K
          );
        Ko(I, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint" ? (F = "" + F, z !== null && z.tag === 6 ? (i(I, z.sibling), K = c(z, F), K.return = I, I = K) : (i(I, z), K = yc(F, I.mode, K), K.return = I, I = K), N(I)) : i(I, z);
    }
    return function(I, z, F, K) {
      try {
        bs = 0;
        var ye = lt(
          I,
          z,
          F,
          K
        );
        return mi = null, ye;
      } catch (Se) {
        if (Se === cs || Se === Bo) throw Se;
        var qe = xn(29, Se, null, I.mode);
        return qe.lanes = K, qe.return = I, qe;
      } finally {
      }
    };
  }
  var gi = _m(!0), Sm = _m(!1), Un = J(null), ar = null;
  function Hr(e) {
    var n = e.alternate;
    se(jt, jt.current & 1), se(Un, e), ar === null && (n === null || fi.current !== null || n.memoizedState !== null) && (ar = e);
  }
  function xm(e) {
    if (e.tag === 22) {
      if (se(jt, jt.current), se(Un, e), ar === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (ar = e);
      }
    } else qr();
  }
  function qr() {
    se(jt, jt.current), se(Un, Un.current);
  }
  function _r(e) {
    ie(Un), ar === e && (ar = null), ie(jt);
  }
  var jt = J(0);
  function Jo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Hf(i)))
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
  function Jc(e, n, i, o) {
    n = e.memoizedState, i = i(o, n), i = i == null ? n : v({}, n, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Wc = {
    enqueueSetState: function(e, n, i) {
      e = e._reactInternals;
      var o = Nn(), c = Br(o);
      c.payload = n, i != null && (c.callback = i), n = Ur(e, c, o), n !== null && (An(n, e, o), ds(n, e, o));
    },
    enqueueReplaceState: function(e, n, i) {
      e = e._reactInternals;
      var o = Nn(), c = Br(o);
      c.tag = 1, c.payload = n, i != null && (c.callback = i), n = Ur(e, c, o), n !== null && (An(n, e, o), ds(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var i = Nn(), o = Br(i);
      o.tag = 2, n != null && (o.callback = n), n = Ur(e, o, i), n !== null && (An(n, e, i), ds(n, e, i));
    }
  };
  function Em(e, n, i, o, c, y, N) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, y, N) : n.prototype && n.prototype.isPureReactComponent ? !ns(i, o) || !ns(c, y) : !0;
  }
  function wm(e, n, i, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, o), n.state !== e && Wc.enqueueReplaceState(n, n.state, null);
  }
  function Na(e, n) {
    var i = n;
    if ("ref" in n) {
      i = {};
      for (var o in n)
        o !== "ref" && (i[o] = n[o]);
    }
    if (e = e.defaultProps) {
      i === n && (i = v({}, i));
      for (var c in e)
        i[c] === void 0 && (i[c] = e[c]);
    }
    return i;
  }
  var Wo = typeof reportError == "function" ? reportError : function(e) {
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
  function Cm(e) {
    Wo(e);
  }
  function Nm(e) {
    console.error(e);
  }
  function Am(e) {
    Wo(e);
  }
  function el(e, n) {
    try {
      var i = e.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Tm(e, n, i) {
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
  function ef(e, n, i) {
    return i = Br(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      el(e, n);
    }, i;
  }
  function Om(e) {
    return e = Br(e), e.tag = 3, e;
  }
  function Dm(e, n, i, o) {
    var c = i.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var y = o.value;
      e.payload = function() {
        return c(y);
      }, e.callback = function() {
        Tm(n, i, o);
      };
    }
    var N = i.stateNode;
    N !== null && typeof N.componentDidCatch == "function" && (e.callback = function() {
      Tm(n, i, o), typeof c != "function" && ($r === null ? $r = /* @__PURE__ */ new Set([this]) : $r.add(this));
      var O = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: O !== null ? O : ""
      });
    });
  }
  function u_(e, n, i, o, c) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = i.alternate, n !== null && os(
        n,
        i,
        c,
        !0
      ), i = Un.current, i !== null) {
        switch (i.tag) {
          case 13:
            return ar === null ? Cf() : i.alternate === null && St === 0 && (St = 3), i.flags &= -257, i.flags |= 65536, i.lanes = c, o === Oc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Af(e, o, c)), !1;
          case 22:
            return i.flags |= 65536, o === Oc ? i.flags |= 16384 : (n = i.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = n) : (i = n.retryQueue, i === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), Af(e, o, c)), !1;
        }
        throw Error(s(435, i.tag));
      }
      return Af(e, o, c), Cf(), !1;
    }
    if (tt)
      return n = Un.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, o !== xc && (e = Error(s(422), { cause: o }), ss(Ln(e, i)))) : (o !== xc && (n = Error(s(423), {
        cause: o
      }), ss(
        Ln(n, i)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = Ln(o, i), c = ef(
        e.stateNode,
        o,
        c
      ), kc(e, c), St !== 4 && (St = 2)), !1;
    var y = Error(s(520), { cause: o });
    if (y = Ln(y, i), As === null ? As = [y] : As.push(y), St !== 4 && (St = 2), n === null) return !0;
    o = Ln(o, i), i = n;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = c & -c, i.lanes |= e, e = ef(i.stateNode, o, e), kc(i, e), !1;
        case 1:
          if (n = i.type, y = i.stateNode, (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && ($r === null || !$r.has(y))))
            return i.flags |= 65536, c &= -c, i.lanes |= c, c = Om(c), Dm(
              c,
              e,
              i,
              o
            ), kc(i, c), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Mm = Error(s(461)), Pt = !1;
  function Ht(e, n, i, o) {
    n.child = e === null ? Sm(n, null, i, o) : gi(
      n,
      e.child,
      i,
      o
    );
  }
  function km(e, n, i, o, c) {
    i = i.render;
    var y = n.ref;
    if ("ref" in o) {
      var N = {};
      for (var O in o)
        O !== "ref" && (N[O] = o[O]);
    } else N = o;
    return Ea(n), o = Ic(
      e,
      n,
      i,
      N,
      y,
      c
    ), O = Pc(), e !== null && !Pt ? (Bc(e, n, c), Sr(e, n, c)) : (tt && O && _c(n), n.flags |= 1, Ht(e, n, o, c), n.child);
  }
  function jm(e, n, i, o, c) {
    if (e === null) {
      var y = i.type;
      return typeof y == "function" && !vc(y) && y.defaultProps === void 0 && i.compare === null ? (n.tag = 15, n.type = y, Rm(
        e,
        n,
        y,
        o,
        c
      )) : (e = jo(
        i.type,
        null,
        o,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (y = e.child, !uf(e, c)) {
      var N = y.memoizedProps;
      if (i = i.compare, i = i !== null ? i : ns, i(N, o) && e.ref === n.ref)
        return Sr(e, n, c);
    }
    return n.flags |= 1, e = pr(y, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Rm(e, n, i, o, c) {
    if (e !== null) {
      var y = e.memoizedProps;
      if (ns(y, o) && e.ref === n.ref)
        if (Pt = !1, n.pendingProps = o = y, uf(e, c))
          (e.flags & 131072) !== 0 && (Pt = !0);
        else
          return n.lanes = e.lanes, Sr(e, n, c);
    }
    return tf(
      e,
      n,
      i,
      o,
      c
    );
  }
  function zm(e, n, i) {
    var o = n.pendingProps, c = o.children, y = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = y !== null ? y.baseLanes | i : i, e !== null) {
          for (c = n.child = e.child, y = 0; c !== null; )
            y = y | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = y & ~o;
        } else n.childLanes = 0, n.child = null;
        return Lm(
          e,
          n,
          o,
          i
        );
      }
      if ((i & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Po(
          n,
          y !== null ? y.cachePool : null
        ), y !== null ? Rp(n, y) : Rc(), xm(n);
      else
        return n.lanes = n.childLanes = 536870912, Lm(
          e,
          n,
          y !== null ? y.baseLanes | i : i,
          i
        );
    } else
      y !== null ? (Po(n, y.cachePool), Rp(n, y), qr(), n.memoizedState = null) : (e !== null && Po(n, null), Rc(), qr());
    return Ht(e, n, c, i), n.child;
  }
  function Lm(e, n, i, o) {
    var c = Tc();
    return c = c === null ? null : { parent: kt._currentValue, pool: c }, n.memoizedState = {
      baseLanes: i,
      cachePool: c
    }, e !== null && Po(n, null), Rc(), xm(n), e !== null && os(e, n, o, !0), null;
  }
  function tl(e, n) {
    var i = n.ref;
    if (i === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(s(284));
      (e === null || e.ref !== i) && (n.flags |= 4194816);
    }
  }
  function tf(e, n, i, o, c) {
    return Ea(n), i = Ic(
      e,
      n,
      i,
      o,
      void 0,
      c
    ), o = Pc(), e !== null && !Pt ? (Bc(e, n, c), Sr(e, n, c)) : (tt && o && _c(n), n.flags |= 1, Ht(e, n, i, c), n.child);
  }
  function Im(e, n, i, o, c, y) {
    return Ea(n), n.updateQueue = null, i = Lp(
      n,
      o,
      i,
      c
    ), zp(e), o = Pc(), e !== null && !Pt ? (Bc(e, n, y), Sr(e, n, y)) : (tt && o && _c(n), n.flags |= 1, Ht(e, n, i, y), n.child);
  }
  function Pm(e, n, i, o, c) {
    if (Ea(n), n.stateNode === null) {
      var y = si, N = i.contextType;
      typeof N == "object" && N !== null && (y = Xt(N)), y = new i(o, y), n.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, y.updater = Wc, n.stateNode = y, y._reactInternals = n, y = n.stateNode, y.props = o, y.state = n.memoizedState, y.refs = {}, Dc(n), N = i.contextType, y.context = typeof N == "object" && N !== null ? Xt(N) : si, y.state = n.memoizedState, N = i.getDerivedStateFromProps, typeof N == "function" && (Jc(
        n,
        i,
        N,
        o
      ), y.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (N = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), N !== y.state && Wc.enqueueReplaceState(y, y.state, null), ps(n, o, y, c), hs(), y.state = n.memoizedState), typeof y.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      y = n.stateNode;
      var O = n.memoizedProps, k = Na(i, O);
      y.props = k;
      var H = y.context, $ = i.contextType;
      N = si, typeof $ == "object" && $ !== null && (N = Xt($));
      var ee = i.getDerivedStateFromProps;
      $ = typeof ee == "function" || typeof y.getSnapshotBeforeUpdate == "function", O = n.pendingProps !== O, $ || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (O || H !== N) && wm(
        n,
        y,
        o,
        N
      ), Pr = !1;
      var Z = n.memoizedState;
      y.state = Z, ps(n, o, y, c), hs(), H = n.memoizedState, O || Z !== H || Pr ? (typeof ee == "function" && (Jc(
        n,
        i,
        ee,
        o
      ), H = n.memoizedState), (k = Pr || Em(
        n,
        i,
        k,
        o,
        Z,
        H,
        N
      )) ? ($ || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = H), y.props = o, y.state = H, y.context = N, o = k) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      y = n.stateNode, Mc(e, n), N = n.memoizedProps, $ = Na(i, N), y.props = $, ee = n.pendingProps, Z = y.context, H = i.contextType, k = si, typeof H == "object" && H !== null && (k = Xt(H)), O = i.getDerivedStateFromProps, (H = typeof O == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (N !== ee || Z !== k) && wm(
        n,
        y,
        o,
        k
      ), Pr = !1, Z = n.memoizedState, y.state = Z, ps(n, o, y, c), hs();
      var V = n.memoizedState;
      N !== ee || Z !== V || Pr || e !== null && e.dependencies !== null && Lo(e.dependencies) ? (typeof O == "function" && (Jc(
        n,
        i,
        O,
        o
      ), V = n.memoizedState), ($ = Pr || Em(
        n,
        i,
        $,
        o,
        Z,
        V,
        k
      ) || e !== null && e.dependencies !== null && Lo(e.dependencies)) ? (H || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(o, V, k), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(
        o,
        V,
        k
      )), typeof y.componentDidUpdate == "function" && (n.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || N === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = V), y.props = o, y.state = V, y.context = k, o = $) : (typeof y.componentDidUpdate != "function" || N === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || N === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return y = o, tl(e, n), o = (n.flags & 128) !== 0, y || o ? (y = n.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : y.render(), n.flags |= 1, e !== null && o ? (n.child = gi(
      n,
      e.child,
      null,
      c
    ), n.child = gi(
      n,
      null,
      i,
      c
    )) : Ht(e, n, i, c), n.memoizedState = y.state, e = n.child) : e = Sr(
      e,
      n,
      c
    ), e;
  }
  function Bm(e, n, i, o) {
    return is(), n.flags |= 256, Ht(e, n, i, o), n.child;
  }
  var nf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function rf(e) {
    return { baseLanes: e, cachePool: Np() };
  }
  function af(e, n, i) {
    return e = e !== null ? e.childLanes & ~i : 0, n && (e |= Fn), e;
  }
  function Um(e, n, i) {
    var o = n.pendingProps, c = !1, y = (n.flags & 128) !== 0, N;
    if ((N = y) || (N = e !== null && e.memoizedState === null ? !1 : (jt.current & 2) !== 0), N && (c = !0, n.flags &= -129), N = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (tt) {
        if (c ? Hr(n) : qr(), tt) {
          var O = _t, k;
          if (k = O) {
            e: {
              for (k = O, O = rr; k.nodeType !== 8; ) {
                if (!O) {
                  O = null;
                  break e;
                }
                if (k = Qn(
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
              treeContext: ya !== null ? { id: mr, overflow: gr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, k = xn(
              18,
              null,
              null,
              0
            ), k.stateNode = O, k.return = n, n.child = k, rn = n, _t = null, k = !0) : k = !1;
          }
          k || Sa(n);
        }
        if (O = n.memoizedState, O !== null && (O = O.dehydrated, O !== null))
          return Hf(O) ? n.lanes = 32 : n.lanes = 536870912, null;
        _r(n);
      }
      return O = o.children, o = o.fallback, c ? (qr(), c = n.mode, O = nl(
        { mode: "hidden", children: O },
        c
      ), o = va(
        o,
        c,
        i,
        null
      ), O.return = n, o.return = n, O.sibling = o, n.child = O, c = n.child, c.memoizedState = rf(i), c.childLanes = af(
        e,
        N,
        i
      ), n.memoizedState = nf, o) : (Hr(n), sf(n, O));
    }
    if (k = e.memoizedState, k !== null && (O = k.dehydrated, O !== null)) {
      if (y)
        n.flags & 256 ? (Hr(n), n.flags &= -257, n = of(
          e,
          n,
          i
        )) : n.memoizedState !== null ? (qr(), n.child = e.child, n.flags |= 128, n = null) : (qr(), c = o.fallback, O = n.mode, o = nl(
          { mode: "visible", children: o.children },
          O
        ), c = va(
          c,
          O,
          i,
          null
        ), c.flags |= 2, o.return = n, c.return = n, o.sibling = c, n.child = o, gi(
          n,
          e.child,
          null,
          i
        ), o = n.child, o.memoizedState = rf(i), o.childLanes = af(
          e,
          N,
          i
        ), n.memoizedState = nf, n = c);
      else if (Hr(n), Hf(O)) {
        if (N = O.nextSibling && O.nextSibling.dataset, N) var H = N.dgst;
        N = H, o = Error(s(419)), o.stack = "", o.digest = N, ss({ value: o, source: null, stack: null }), n = of(
          e,
          n,
          i
        );
      } else if (Pt || os(e, n, i, !1), N = (i & e.childLanes) !== 0, Pt || N) {
        if (N = ft, N !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : Hu(o), o = (o & (N.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== k.retryLane))
          throw k.retryLane = o, ii(e, o), An(N, e, o), Mm;
        O.data === "$?" || Cf(), n = of(
          e,
          n,
          i
        );
      } else
        O.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = k.treeContext, _t = Qn(
          O.nextSibling
        ), rn = n, tt = !0, _a = null, rr = !1, e !== null && (Pn[Bn++] = mr, Pn[Bn++] = gr, Pn[Bn++] = ya, mr = e.id, gr = e.overflow, ya = n), n = sf(
          n,
          o.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (qr(), c = o.fallback, O = n.mode, k = e.child, H = k.sibling, o = pr(k, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = k.subtreeFlags & 65011712, H !== null ? c = pr(H, c) : (c = va(
      c,
      O,
      i,
      null
    ), c.flags |= 2), c.return = n, o.return = n, o.sibling = c, n.child = o, o = c, c = n.child, O = e.child.memoizedState, O === null ? O = rf(i) : (k = O.cachePool, k !== null ? (H = kt._currentValue, k = k.parent !== H ? { parent: H, pool: H } : k) : k = Np(), O = {
      baseLanes: O.baseLanes | i,
      cachePool: k
    }), c.memoizedState = O, c.childLanes = af(
      e,
      N,
      i
    ), n.memoizedState = nf, o) : (Hr(n), i = e.child, e = i.sibling, i = pr(i, {
      mode: "visible",
      children: o.children
    }), i.return = n, i.sibling = null, e !== null && (N = n.deletions, N === null ? (n.deletions = [e], n.flags |= 16) : N.push(e)), n.child = i, n.memoizedState = null, i);
  }
  function sf(e, n) {
    return n = nl(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function nl(e, n) {
    return e = xn(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function of(e, n, i) {
    return gi(n, e.child, null, i), e = sf(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Fm(e, n, i) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), wc(e.return, n, i);
  }
  function lf(e, n, i, o, c) {
    var y = e.memoizedState;
    y === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: c
    } : (y.isBackwards = n, y.rendering = null, y.renderingStartTime = 0, y.last = o, y.tail = i, y.tailMode = c);
  }
  function Hm(e, n, i) {
    var o = n.pendingProps, c = o.revealOrder, y = o.tail;
    if (Ht(e, n, o.children, i), o = jt.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Fm(e, i, n);
          else if (e.tag === 19)
            Fm(e, i, n);
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
    switch (se(jt, o), c) {
      case "forwards":
        for (i = n.child, c = null; i !== null; )
          e = i.alternate, e !== null && Jo(e) === null && (c = i), i = i.sibling;
        i = c, i === null ? (c = n.child, n.child = null) : (c = i.sibling, i.sibling = null), lf(
          n,
          !1,
          c,
          i,
          y
        );
        break;
      case "backwards":
        for (i = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Jo(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = i, i = c, c = e;
        }
        lf(
          n,
          !0,
          i,
          null,
          y
        );
        break;
      case "together":
        lf(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Sr(e, n, i) {
    if (e !== null && (n.dependencies = e.dependencies), Xr |= n.lanes, (i & n.childLanes) === 0)
      if (e !== null) {
        if (os(
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
      for (e = n.child, i = pr(e, e.pendingProps), n.child = i, i.return = n; e.sibling !== null; )
        e = e.sibling, i = i.sibling = pr(e, e.pendingProps), i.return = n;
      i.sibling = null;
    }
    return n.child;
  }
  function uf(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Lo(e)));
  }
  function c_(e, n, i) {
    switch (n.tag) {
      case 3:
        Ee(n, n.stateNode.containerInfo), Ir(n, kt, e.memoizedState.cache), is();
        break;
      case 27:
      case 5:
        We(n);
        break;
      case 4:
        Ee(n, n.stateNode.containerInfo);
        break;
      case 10:
        Ir(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Hr(n), n.flags |= 128, null) : (i & n.child.childLanes) !== 0 ? Um(e, n, i) : (Hr(n), e = Sr(
            e,
            n,
            i
          ), e !== null ? e.sibling : null);
        Hr(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (o = (i & n.childLanes) !== 0, o || (os(
          e,
          n,
          i,
          !1
        ), o = (i & n.childLanes) !== 0), c) {
          if (o)
            return Hm(
              e,
              n,
              i
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), se(jt, jt.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, zm(e, n, i);
      case 24:
        Ir(n, kt, e.memoizedState.cache);
    }
    return Sr(e, n, i);
  }
  function qm(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Pt = !0;
      else {
        if (!uf(e, i) && (n.flags & 128) === 0)
          return Pt = !1, c_(
            e,
            n,
            i
          );
        Pt = (e.flags & 131072) !== 0;
      }
    else
      Pt = !1, tt && (n.flags & 1048576) !== 0 && bp(n, zo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, c = o._init;
          if (o = c(o._payload), n.type = o, typeof o == "function")
            vc(o) ? (e = Na(o, e), n.tag = 1, n = Pm(
              null,
              n,
              o,
              e,
              i
            )) : (n.tag = 0, n = tf(
              null,
              n,
              o,
              e,
              i
            ));
          else {
            if (o != null) {
              if (c = o.$$typeof, c === C) {
                n.tag = 11, n = km(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              } else if (c === R) {
                n.tag = 14, n = jm(
                  null,
                  n,
                  o,
                  e,
                  i
                );
                break e;
              }
            }
            throw n = fe(o) || o, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return tf(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 1:
        return o = n.type, c = Na(
          o,
          n.pendingProps
        ), Pm(
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
          var y = n.memoizedState;
          c = y.element, Mc(e, n), ps(n, o, null, i);
          var N = n.memoizedState;
          if (o = N.cache, Ir(n, kt, o), o !== y.cache && Cc(
            n,
            [kt],
            i,
            !0
          ), hs(), o = N.element, y.isDehydrated)
            if (y = {
              element: o,
              isDehydrated: !1,
              cache: N.cache
            }, n.updateQueue.baseState = y, n.memoizedState = y, n.flags & 256) {
              n = Bm(
                e,
                n,
                o,
                i
              );
              break e;
            } else if (o !== c) {
              c = Ln(
                Error(s(424)),
                n
              ), ss(c), n = Bm(
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
              for (_t = Qn(e.firstChild), rn = n, tt = !0, _a = null, rr = !0, i = Sm(
                n,
                null,
                o,
                i
              ), n.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
            }
          else {
            if (is(), o === c) {
              n = Sr(
                e,
                n,
                i
              );
              break e;
            }
            Ht(
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
        return tl(e, n), e === null ? (i = Yg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = i : tt || (i = n.type, e = n.pendingProps, o = gl(
          X.current
        ).createElement(i), o[Yt] = n, o[cn] = e, Zt(o, i, e), It(o), n.stateNode = o) : n.memoizedState = Yg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return We(n), e === null && tt && (o = n.stateNode = Zg(
          n.type,
          n.pendingProps,
          X.current
        ), rn = n, rr = !0, c = _t, Jr(n.type) ? (qf = c, _t = Qn(
          o.firstChild
        )) : _t = c), Ht(
          e,
          n,
          n.pendingProps.children,
          i
        ), tl(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && tt && ((c = o = _t) && (o = P_(
          o,
          n.type,
          n.pendingProps,
          rr
        ), o !== null ? (n.stateNode = o, rn = n, _t = Qn(
          o.firstChild
        ), rr = !1, c = !0) : c = !1), c || Sa(n)), We(n), c = n.type, y = n.pendingProps, N = e !== null ? e.memoizedProps : null, o = y.children, Bf(c, y) ? o = null : N !== null && Bf(c, N) && (n.flags |= 32), n.memoizedState !== null && (c = Ic(
          e,
          n,
          n_,
          null,
          null,
          i
        ), Ls._currentValue = c), tl(e, n), Ht(e, n, o, i), n.child;
      case 6:
        return e === null && tt && ((e = i = _t) && (i = B_(
          i,
          n.pendingProps,
          rr
        ), i !== null ? (n.stateNode = i, rn = n, _t = null, e = !0) : e = !1), e || Sa(n)), null;
      case 13:
        return Um(e, n, i);
      case 4:
        return Ee(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = gi(
          n,
          null,
          o,
          i
        ) : Ht(
          e,
          n,
          o,
          i
        ), n.child;
      case 11:
        return km(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 7:
        return Ht(
          e,
          n,
          n.pendingProps,
          i
        ), n.child;
      case 8:
        return Ht(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 12:
        return Ht(
          e,
          n,
          n.pendingProps.children,
          i
        ), n.child;
      case 10:
        return o = n.pendingProps, Ir(n, n.type, o.value), Ht(
          e,
          n,
          o.children,
          i
        ), n.child;
      case 9:
        return c = n.type._context, o = n.pendingProps.children, Ea(n), c = Xt(c), o = o(c), n.flags |= 1, Ht(e, n, o, i), n.child;
      case 14:
        return jm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 15:
        return Rm(
          e,
          n,
          n.type,
          n.pendingProps,
          i
        );
      case 19:
        return Hm(e, n, i);
      case 31:
        return o = n.pendingProps, i = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (i = nl(
          o,
          i
        ), i.ref = n.ref, n.child = i, i.return = n, n = i) : (i = pr(e.child, o), i.ref = n.ref, n.child = i, i.return = n, n = i), n;
      case 22:
        return zm(e, n, i);
      case 24:
        return Ea(n), o = Xt(kt), e === null ? (c = Tc(), c === null && (c = ft, y = Nc(), c.pooledCache = y, y.refCount++, y !== null && (c.pooledCacheLanes |= i), c = y), n.memoizedState = {
          parent: o,
          cache: c
        }, Dc(n), Ir(n, kt, c)) : ((e.lanes & i) !== 0 && (Mc(e, n), ps(n, null, null, i), hs()), c = e.memoizedState, y = n.memoizedState, c.parent !== o ? (c = { parent: o, cache: o }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Ir(n, kt, o)) : (o = y.cache, Ir(n, kt, o), o !== c.cache && Cc(
          n,
          [kt],
          i,
          !0
        ))), Ht(
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
  function xr(e) {
    e.flags |= 4;
  }
  function Zm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Jg(n)) {
      if (n = Un.current, n !== null && ((Ke & 4194048) === Ke ? ar !== null : (Ke & 62914560) !== Ke && (Ke & 536870912) === 0 || n !== ar))
        throw fs = Oc, Ap;
      e.flags |= 8192;
    }
  }
  function rl(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Yn() : 536870912, e.lanes |= n, _i |= n);
  }
  function Ss(e, n) {
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
  function vt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, i = 0, o = 0;
    if (n)
      for (var c = e.child; c !== null; )
        i |= c.lanes | c.childLanes, o |= c.subtreeFlags & 65011712, o |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        i |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= o, e.childLanes = i, n;
  }
  function f_(e, n, i) {
    var o = n.pendingProps;
    switch (Sc(n), n.tag) {
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
        return vt(n), null;
      case 1:
        return vt(n), null;
      case 3:
        return i = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), yr(kt), $e(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (as(n) ? xr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, xp())), vt(n), null;
      case 26:
        return i = n.memoizedState, e === null ? (xr(n), i !== null ? (vt(n), Zm(n, i)) : (vt(n), n.flags &= -16777217)) : i ? i !== e.memoizedState ? (xr(n), vt(n), Zm(n, i)) : (vt(n), n.flags &= -16777217) : (e.memoizedProps !== o && xr(n), vt(n), n.flags &= -16777217), null;
      case 27:
        ke(n), i = X.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && xr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return vt(n), null;
          }
          e = le.current, as(n) ? _p(n) : (e = Zg(c, o, i), n.stateNode = e, xr(n));
        }
        return vt(n), null;
      case 5:
        if (ke(n), i = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && xr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return vt(n), null;
          }
          if (e = le.current, as(n))
            _p(n);
          else {
            switch (c = gl(
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
            e[Yt] = n, e[cn] = o;
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
            e: switch (Zt(e, i, o), i) {
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
            e && xr(n);
          }
        }
        return vt(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== o && xr(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = X.current, as(n)) {
            if (e = n.stateNode, i = n.memoizedProps, o = null, c = rn, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            e[Yt] = n, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || Ig(e.nodeValue, i)), e || Sa(n);
          } else
            e = gl(e).createTextNode(
              o
            ), e[Yt] = n, n.stateNode = e;
        }
        return vt(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = as(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[Yt] = n;
            } else
              is(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            vt(n), c = !1;
          } else
            c = xp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (_r(n), n) : (_r(n), null);
        }
        if (_r(n), (n.flags & 128) !== 0)
          return n.lanes = i, n;
        if (i = o !== null, e = e !== null && e.memoizedState !== null, i) {
          o = n.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool);
          var y = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (y = o.memoizedState.cachePool.pool), y !== c && (o.flags |= 2048);
        }
        return i !== e && i && (n.child.flags |= 8192), rl(n, n.updateQueue), vt(n), null;
      case 4:
        return $e(), e === null && Rf(n.stateNode.containerInfo), vt(n), null;
      case 10:
        return yr(n.type), vt(n), null;
      case 19:
        if (ie(jt), c = n.memoizedState, c === null) return vt(n), null;
        if (o = (n.flags & 128) !== 0, y = c.rendering, y === null)
          if (o) Ss(c, !1);
          else {
            if (St !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (y = Jo(e), y !== null) {
                  for (n.flags |= 128, Ss(c, !1), e = y.updateQueue, n.updateQueue = e, rl(n, e), n.subtreeFlags = 0, e = i, i = n.child; i !== null; )
                    yp(i, e), i = i.sibling;
                  return se(
                    jt,
                    jt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && ne() > sl && (n.flags |= 128, o = !0, Ss(c, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Jo(y), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, rl(n, e), Ss(c, !0), c.tail === null && c.tailMode === "hidden" && !y.alternate && !tt)
                return vt(n), null;
            } else
              2 * ne() - c.renderingStartTime > sl && i !== 536870912 && (n.flags |= 128, o = !0, Ss(c, !1), n.lanes = 4194304);
          c.isBackwards ? (y.sibling = n.child, n.child = y) : (e = c.last, e !== null ? e.sibling = y : n.child = y, c.last = y);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = ne(), n.sibling = null, e = jt.current, se(jt, o ? e & 1 | 2 : e & 1), n) : (vt(n), null);
      case 22:
      case 23:
        return _r(n), zc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (vt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : vt(n), i = n.updateQueue, i !== null && rl(n, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== i && (n.flags |= 2048), e !== null && ie(wa), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), yr(kt), vt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function d_(e, n) {
    switch (Sc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return yr(kt), $e(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ke(n), null;
      case 13:
        if (_r(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          is();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ie(jt), null;
      case 4:
        return $e(), null;
      case 10:
        return yr(n.type), null;
      case 22:
      case 23:
        return _r(n), zc(), e !== null && ie(wa), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return yr(kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Gm(e, n) {
    switch (Sc(n), n.tag) {
      case 3:
        yr(kt), $e();
        break;
      case 26:
      case 27:
      case 5:
        ke(n);
        break;
      case 4:
        $e();
        break;
      case 13:
        _r(n);
        break;
      case 19:
        ie(jt);
        break;
      case 10:
        yr(n.type);
        break;
      case 22:
      case 23:
        _r(n), zc(), e !== null && ie(wa);
        break;
      case 24:
        yr(kt);
    }
  }
  function xs(e, n) {
    try {
      var i = n.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        i = c;
        do {
          if ((i.tag & e) === e) {
            o = void 0;
            var y = i.create, N = i.inst;
            o = y(), N.destroy = o;
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (O) {
      ct(n, n.return, O);
    }
  }
  function Zr(e, n, i) {
    try {
      var o = n.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var y = c.next;
        o = y;
        do {
          if ((o.tag & e) === e) {
            var N = o.inst, O = N.destroy;
            if (O !== void 0) {
              N.destroy = void 0, c = n;
              var k = i, H = O;
              try {
                H();
              } catch ($) {
                ct(
                  c,
                  k,
                  $
                );
              }
            }
          }
          o = o.next;
        } while (o !== y);
      }
    } catch ($) {
      ct(n, n.return, $);
    }
  }
  function Vm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        jp(n, i);
      } catch (o) {
        ct(e, e.return, o);
      }
    }
  }
  function Ym(e, n, i) {
    i.props = Na(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      ct(e, n, o);
    }
  }
  function Es(e, n) {
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
      ct(e, n, c);
    }
  }
  function ir(e, n) {
    var i = e.ref, o = e.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          ct(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (c) {
          ct(e, n, c);
        }
      else i.current = null;
  }
  function Xm(e) {
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
      ct(e, e.return, c);
    }
  }
  function cf(e, n, i) {
    try {
      var o = e.stateNode;
      j_(o, e.type, i, n), o[cn] = n;
    } catch (c) {
      ct(e, e.return, c);
    }
  }
  function $m(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Jr(e.type) || e.tag === 4;
  }
  function ff(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || $m(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Jr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function df(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, n.appendChild(e), i = i._reactRootContainer, i != null || n.onclick !== null || (n.onclick = ml));
    else if (o !== 4 && (o === 27 && Jr(e.type) && (i = e.stateNode, n = null), e = e.child, e !== null))
      for (df(e, n, i), e = e.sibling; e !== null; )
        df(e, n, i), e = e.sibling;
  }
  function al(e, n, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Jr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (al(e, n, i), e = e.sibling; e !== null; )
        al(e, n, i), e = e.sibling;
  }
  function Qm(e) {
    var n = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Zt(n, o, i), n[Yt] = e, n[cn] = i;
    } catch (y) {
      ct(e, e.return, y);
    }
  }
  var Er = !1, wt = !1, hf = !1, Km = typeof WeakSet == "function" ? WeakSet : Set, Bt = null;
  function h_(e, n) {
    if (e = e.containerInfo, If = xl, e = lp(e), cc(e)) {
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
            var c = o.anchorOffset, y = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, y.nodeType;
            } catch {
              i = null;
              break e;
            }
            var N = 0, O = -1, k = -1, H = 0, $ = 0, ee = e, Z = null;
            t: for (; ; ) {
              for (var V; ee !== i || c !== 0 && ee.nodeType !== 3 || (O = N + c), ee !== y || o !== 0 && ee.nodeType !== 3 || (k = N + o), ee.nodeType === 3 && (N += ee.nodeValue.length), (V = ee.firstChild) !== null; )
                Z = ee, ee = V;
              for (; ; ) {
                if (ee === e) break t;
                if (Z === i && ++H === c && (O = N), Z === y && ++$ === o && (k = N), (V = ee.nextSibling) !== null) break;
                ee = Z, Z = ee.parentNode;
              }
              ee = V;
            }
            i = O === -1 || k === -1 ? null : { start: O, end: k };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Pf = { focusedElem: e, selectionRange: i }, xl = !1, Bt = n; Bt !== null; )
      if (n = Bt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, Bt = e;
      else
        for (; Bt !== null; ) {
          switch (n = Bt, y = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && y !== null) {
                e = void 0, i = n, c = y.memoizedProps, y = y.memoizedState, o = i.stateNode;
                try {
                  var Te = Na(
                    i.type,
                    c,
                    i.elementType === i.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Te,
                    y
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Ce) {
                  ct(
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
                  Ff(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ff(e);
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
            e.return = n.return, Bt = e;
            break;
          }
          Bt = n.return;
        }
  }
  function Jm(e, n, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Gr(e, i), o & 4 && xs(5, i);
        break;
      case 1:
        if (Gr(e, i), o & 4)
          if (e = i.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (N) {
              ct(i, i.return, N);
            }
          else {
            var c = Na(
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
            } catch (N) {
              ct(
                i,
                i.return,
                N
              );
            }
          }
        o & 64 && Vm(i), o & 512 && Es(i, i.return);
        break;
      case 3:
        if (Gr(e, i), o & 64 && (e = i.updateQueue, e !== null)) {
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
            jp(e, n);
          } catch (N) {
            ct(i, i.return, N);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Qm(i);
      case 26:
      case 5:
        Gr(e, i), n === null && o & 4 && Xm(i), o & 512 && Es(i, i.return);
        break;
      case 12:
        Gr(e, i);
        break;
      case 13:
        Gr(e, i), o & 4 && tg(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = x_.bind(
          null,
          i
        ), U_(e, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || Er, !o) {
          n = n !== null && n.memoizedState !== null || wt, c = Er;
          var y = wt;
          Er = o, (wt = n) && !y ? Vr(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : Gr(e, i), Er = c, wt = y;
        }
        break;
      case 30:
        break;
      default:
        Gr(e, i);
    }
  }
  function Wm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Wm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Gu(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ht = null, hn = !1;
  function wr(e, n, i) {
    for (i = i.child; i !== null; )
      eg(e, n, i), i = i.sibling;
  }
  function eg(e, n, i) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(ut, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        wt || ir(i, n), wr(
          e,
          n,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        wt || ir(i, n);
        var o = ht, c = hn;
        Jr(i.type) && (ht = i.stateNode, hn = !1), wr(
          e,
          n,
          i
        ), ks(i.stateNode), ht = o, hn = c;
        break;
      case 5:
        wt || ir(i, n);
      case 6:
        if (o = ht, c = hn, ht = null, wr(
          e,
          n,
          i
        ), ht = o, hn = c, ht !== null)
          if (hn)
            try {
              (ht.nodeType === 9 ? ht.body : ht.nodeName === "HTML" ? ht.ownerDocument.body : ht).removeChild(i.stateNode);
            } catch (y) {
              ct(
                i,
                n,
                y
              );
            }
          else
            try {
              ht.removeChild(i.stateNode);
            } catch (y) {
              ct(
                i,
                n,
                y
              );
            }
        break;
      case 18:
        ht !== null && (hn ? (e = ht, Hg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), Us(e)) : Hg(ht, i.stateNode));
        break;
      case 4:
        o = ht, c = hn, ht = i.stateNode.containerInfo, hn = !0, wr(
          e,
          n,
          i
        ), ht = o, hn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        wt || Zr(2, i, n), wt || Zr(4, i, n), wr(
          e,
          n,
          i
        );
        break;
      case 1:
        wt || (ir(i, n), o = i.stateNode, typeof o.componentWillUnmount == "function" && Ym(
          i,
          n,
          o
        )), wr(
          e,
          n,
          i
        );
        break;
      case 21:
        wr(
          e,
          n,
          i
        );
        break;
      case 22:
        wt = (o = wt) || i.memoizedState !== null, wr(
          e,
          n,
          i
        ), wt = o;
        break;
      default:
        wr(
          e,
          n,
          i
        );
    }
  }
  function tg(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Us(e);
      } catch (i) {
        ct(n, n.return, i);
      }
  }
  function p_(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Km()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Km()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function pf(e, n) {
    var i = p_(e);
    n.forEach(function(o) {
      var c = E_.bind(null, e, o);
      i.has(o) || (i.add(o), o.then(c, c));
    });
  }
  function En(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var c = i[o], y = e, N = n, O = N;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (Jr(O.type)) {
                ht = O.stateNode, hn = !1;
                break e;
              }
              break;
            case 5:
              ht = O.stateNode, hn = !1;
              break e;
            case 3:
            case 4:
              ht = O.stateNode.containerInfo, hn = !0;
              break e;
          }
          O = O.return;
        }
        if (ht === null) throw Error(s(160));
        eg(y, N, c), ht = null, hn = !1, y = c.alternate, y !== null && (y.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        ng(n, e), n = n.sibling;
  }
  var $n = null;
  function ng(e, n) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        En(n, e), wn(e), o & 4 && (Zr(3, e, e.return), xs(3, e), Zr(5, e, e.return));
        break;
      case 1:
        En(n, e), wn(e), o & 512 && (wt || i === null || ir(i, i.return)), o & 64 && Er && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var c = $n;
        if (En(n, e), wn(e), o & 512 && (wt || i === null || ir(i, i.return)), o & 4) {
          var y = i !== null ? i.memoizedState : null;
          if (o = e.memoizedState, i === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, i = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (o) {
                    case "title":
                      y = c.getElementsByTagName("title")[0], (!y || y[Yi] || y[Yt] || y.namespaceURI === "http://www.w3.org/2000/svg" || y.hasAttribute("itemprop")) && (y = c.createElement(o), c.head.insertBefore(
                        y,
                        c.querySelector("head > title")
                      )), Zt(y, o, i), y[Yt] = e, It(y), o = y;
                      break e;
                    case "link":
                      var N = Qg(
                        "link",
                        "href",
                        c
                      ).get(o + (i.href || ""));
                      if (N) {
                        for (var O = 0; O < N.length; O++)
                          if (y = N[O], y.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && y.getAttribute("rel") === (i.rel == null ? null : i.rel) && y.getAttribute("title") === (i.title == null ? null : i.title) && y.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            N.splice(O, 1);
                            break t;
                          }
                      }
                      y = c.createElement(o), Zt(y, o, i), c.head.appendChild(y);
                      break;
                    case "meta":
                      if (N = Qg(
                        "meta",
                        "content",
                        c
                      ).get(o + (i.content || ""))) {
                        for (O = 0; O < N.length; O++)
                          if (y = N[O], y.getAttribute("content") === (i.content == null ? null : "" + i.content) && y.getAttribute("name") === (i.name == null ? null : i.name) && y.getAttribute("property") === (i.property == null ? null : i.property) && y.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && y.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            N.splice(O, 1);
                            break t;
                          }
                      }
                      y = c.createElement(o), Zt(y, o, i), c.head.appendChild(y);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  y[Yt] = e, It(y), o = y;
                }
                e.stateNode = o;
              } else
                Kg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = $g(
                c,
                o,
                e.memoizedProps
              );
          else
            y !== o ? (y === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : y.count--, o === null ? Kg(
              c,
              e.type,
              e.stateNode
            ) : $g(
              c,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && cf(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        En(n, e), wn(e), o & 512 && (wt || i === null || ir(i, i.return)), i !== null && o & 4 && cf(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (En(n, e), wn(e), o & 512 && (wt || i === null || ir(i, i.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Ja(c, "");
          } catch (V) {
            ct(e, e.return, V);
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, cf(
          e,
          c,
          i !== null ? i.memoizedProps : c
        )), o & 1024 && (hf = !0);
        break;
      case 6:
        if (En(n, e), wn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          o = e.memoizedProps, i = e.stateNode;
          try {
            i.nodeValue = o;
          } catch (V) {
            ct(e, e.return, V);
          }
        }
        break;
      case 3:
        if (bl = null, c = $n, $n = vl(n.containerInfo), En(n, e), $n = c, wn(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Us(n.containerInfo);
          } catch (V) {
            ct(e, e.return, V);
          }
        hf && (hf = !1, rg(e));
        break;
      case 4:
        o = $n, $n = vl(
          e.stateNode.containerInfo
        ), En(n, e), wn(e), $n = o;
        break;
      case 12:
        En(n, e), wn(e);
        break;
      case 13:
        En(n, e), wn(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (_f = ne()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, pf(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var k = i !== null && i.memoizedState !== null, H = Er, $ = wt;
        if (Er = H || c, wt = $ || k, En(n, e), wt = $, Er = H, wn(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (i === null || k || Er || wt || Aa(e)), i = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (i === null) {
                k = i = n;
                try {
                  if (y = k.stateNode, c)
                    N = y.style, typeof N.setProperty == "function" ? N.setProperty("display", "none", "important") : N.display = "none";
                  else {
                    O = k.stateNode;
                    var ee = k.memoizedProps.style, Z = ee != null && ee.hasOwnProperty("display") ? ee.display : null;
                    O.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (V) {
                  ct(k, k.return, V);
                }
              }
            } else if (n.tag === 6) {
              if (i === null) {
                k = n;
                try {
                  k.stateNode.nodeValue = c ? "" : k.memoizedProps;
                } catch (V) {
                  ct(k, k.return, V);
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
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, pf(e, i))));
        break;
      case 19:
        En(n, e), wn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, pf(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        En(n, e), wn(e);
    }
  }
  function wn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if ($m(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(s(160));
        switch (i.tag) {
          case 27:
            var c = i.stateNode, y = ff(e);
            al(e, y, c);
            break;
          case 5:
            var N = i.stateNode;
            i.flags & 32 && (Ja(N, ""), i.flags &= -33);
            var O = ff(e);
            al(e, O, N);
            break;
          case 3:
          case 4:
            var k = i.stateNode.containerInfo, H = ff(e);
            df(
              e,
              H,
              k
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch ($) {
        ct(e, e.return, $);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function rg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        rg(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Gr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Jm(e, n.alternate, n), n = n.sibling;
  }
  function Aa(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zr(4, n, n.return), Aa(n);
          break;
        case 1:
          ir(n, n.return);
          var i = n.stateNode;
          typeof i.componentWillUnmount == "function" && Ym(
            n,
            n.return,
            i
          ), Aa(n);
          break;
        case 27:
          ks(n.stateNode);
        case 26:
        case 5:
          ir(n, n.return), Aa(n);
          break;
        case 22:
          n.memoizedState === null && Aa(n);
          break;
        case 30:
          Aa(n);
          break;
        default:
          Aa(n);
      }
      e = e.sibling;
    }
  }
  function Vr(e, n, i) {
    for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate, c = e, y = n, N = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Vr(
            c,
            y,
            i
          ), xs(4, y);
          break;
        case 1:
          if (Vr(
            c,
            y,
            i
          ), o = y, c = o.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (H) {
              ct(o, o.return, H);
            }
          if (o = y, c = o.updateQueue, c !== null) {
            var O = o.stateNode;
            try {
              var k = c.shared.hiddenCallbacks;
              if (k !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < k.length; c++)
                  kp(k[c], O);
            } catch (H) {
              ct(o, o.return, H);
            }
          }
          i && N & 64 && Vm(y), Es(y, y.return);
          break;
        case 27:
          Qm(y);
        case 26:
        case 5:
          Vr(
            c,
            y,
            i
          ), i && o === null && N & 4 && Xm(y), Es(y, y.return);
          break;
        case 12:
          Vr(
            c,
            y,
            i
          );
          break;
        case 13:
          Vr(
            c,
            y,
            i
          ), i && N & 4 && tg(c, y);
          break;
        case 22:
          y.memoizedState === null && Vr(
            c,
            y,
            i
          ), Es(y, y.return);
          break;
        case 30:
          break;
        default:
          Vr(
            c,
            y,
            i
          );
      }
      n = n.sibling;
    }
  }
  function mf(e, n) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && ls(i));
  }
  function gf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ls(e));
  }
  function sr(e, n, i, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        ag(
          e,
          n,
          i,
          o
        ), n = n.sibling;
  }
  function ag(e, n, i, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        sr(
          e,
          n,
          i,
          o
        ), c & 2048 && xs(9, n);
        break;
      case 1:
        sr(
          e,
          n,
          i,
          o
        );
        break;
      case 3:
        sr(
          e,
          n,
          i,
          o
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ls(e)));
        break;
      case 12:
        if (c & 2048) {
          sr(
            e,
            n,
            i,
            o
          ), e = n.stateNode;
          try {
            var y = n.memoizedProps, N = y.id, O = y.onPostCommit;
            typeof O == "function" && O(
              N,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (k) {
            ct(n, n.return, k);
          }
        } else
          sr(
            e,
            n,
            i,
            o
          );
        break;
      case 13:
        sr(
          e,
          n,
          i,
          o
        );
        break;
      case 23:
        break;
      case 22:
        y = n.stateNode, N = n.alternate, n.memoizedState !== null ? y._visibility & 2 ? sr(
          e,
          n,
          i,
          o
        ) : ws(e, n) : y._visibility & 2 ? sr(
          e,
          n,
          i,
          o
        ) : (y._visibility |= 2, vi(
          e,
          n,
          i,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && mf(N, n);
        break;
      case 24:
        sr(
          e,
          n,
          i,
          o
        ), c & 2048 && gf(n.alternate, n);
        break;
      default:
        sr(
          e,
          n,
          i,
          o
        );
    }
  }
  function vi(e, n, i, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var y = e, N = n, O = i, k = o, H = N.flags;
      switch (N.tag) {
        case 0:
        case 11:
        case 15:
          vi(
            y,
            N,
            O,
            k,
            c
          ), xs(8, N);
          break;
        case 23:
          break;
        case 22:
          var $ = N.stateNode;
          N.memoizedState !== null ? $._visibility & 2 ? vi(
            y,
            N,
            O,
            k,
            c
          ) : ws(
            y,
            N
          ) : ($._visibility |= 2, vi(
            y,
            N,
            O,
            k,
            c
          )), c && H & 2048 && mf(
            N.alternate,
            N
          );
          break;
        case 24:
          vi(
            y,
            N,
            O,
            k,
            c
          ), c && H & 2048 && gf(N.alternate, N);
          break;
        default:
          vi(
            y,
            N,
            O,
            k,
            c
          );
      }
      n = n.sibling;
    }
  }
  function ws(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var i = e, o = n, c = o.flags;
        switch (o.tag) {
          case 22:
            ws(i, o), c & 2048 && mf(
              o.alternate,
              o
            );
            break;
          case 24:
            ws(i, o), c & 2048 && gf(o.alternate, o);
            break;
          default:
            ws(i, o);
        }
        n = n.sibling;
      }
  }
  var Cs = 8192;
  function yi(e) {
    if (e.subtreeFlags & Cs)
      for (e = e.child; e !== null; )
        ig(e), e = e.sibling;
  }
  function ig(e) {
    switch (e.tag) {
      case 26:
        yi(e), e.flags & Cs && e.memoizedState !== null && W_(
          $n,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        yi(e);
        break;
      case 3:
      case 4:
        var n = $n;
        $n = vl(e.stateNode.containerInfo), yi(e), $n = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Cs, Cs = 16777216, yi(e), Cs = n) : yi(e));
        break;
      default:
        yi(e);
    }
  }
  function sg(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Ns(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          Bt = o, lg(
            o,
            e
          );
        }
      sg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        og(e), e = e.sibling;
  }
  function og(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ns(e), e.flags & 2048 && Zr(9, e, e.return);
        break;
      case 3:
        Ns(e);
        break;
      case 12:
        Ns(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, il(e)) : Ns(e);
        break;
      default:
        Ns(e);
    }
  }
  function il(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          Bt = o, lg(
            o,
            e
          );
        }
      sg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Zr(8, n, n.return), il(n);
          break;
        case 22:
          i = n.stateNode, i._visibility & 2 && (i._visibility &= -3, il(n));
          break;
        default:
          il(n);
      }
      e = e.sibling;
    }
  }
  function lg(e, n) {
    for (; Bt !== null; ) {
      var i = Bt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Zr(8, i, n);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          ls(i.memoizedState.cache);
      }
      if (o = i.child, o !== null) o.return = i, Bt = o;
      else
        e: for (i = e; Bt !== null; ) {
          o = Bt;
          var c = o.sibling, y = o.return;
          if (Wm(o), o === i) {
            Bt = null;
            break e;
          }
          if (c !== null) {
            c.return = y, Bt = c;
            break e;
          }
          Bt = y;
        }
    }
  }
  var m_ = {
    getCacheForType: function(e) {
      var n = Xt(kt), i = n.data.get(e);
      return i === void 0 && (i = e(), n.data.set(e, i)), i;
    }
  }, g_ = typeof WeakMap == "function" ? WeakMap : Map, at = 0, ft = null, Ze = null, Ke = 0, it = 0, Cn = null, Yr = !1, bi = !1, vf = !1, Cr = 0, St = 0, Xr = 0, Ta = 0, yf = 0, Fn = 0, _i = 0, As = null, pn = null, bf = !1, _f = 0, sl = 1 / 0, ol = null, $r = null, qt = 0, Qr = null, Si = null, xi = 0, Sf = 0, xf = null, ug = null, Ts = 0, Ef = null;
  function Nn() {
    if ((at & 2) !== 0 && Ke !== 0)
      return Ke & -Ke;
    if (P.T !== null) {
      var e = ui;
      return e !== 0 ? e : Df();
    }
    return Ch();
  }
  function cg() {
    Fn === 0 && (Fn = (Ke & 536870912) === 0 || tt ? Vt() : 536870912);
    var e = Un.current;
    return e !== null && (e.flags |= 32), Fn;
  }
  function An(e, n, i) {
    (e === ft && (it === 2 || it === 9) || e.cancelPendingCommit !== null) && (Ei(e, 0), Kr(
      e,
      Ke,
      Fn,
      !1
    )), Vi(e, i), ((at & 2) === 0 || e !== ft) && (e === ft && ((at & 2) === 0 && (Ta |= i), St === 4 && Kr(
      e,
      Ke,
      Fn,
      !1
    )), or(e));
  }
  function fg(e, n, i) {
    if ((at & 6) !== 0) throw Error(s(327));
    var o = !i && (n & 124) === 0 && (n & e.expiredLanes) === 0 || je(e, n), c = o ? b_(e, n) : Nf(e, n, !0), y = o;
    do {
      if (c === 0) {
        bi && !o && Kr(e, n, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, y && !v_(i)) {
          c = Nf(e, n, !1), y = !1;
          continue;
        }
        if (c === 2) {
          if (y = n, e.errorRecoveryDisabledLanes & y)
            var N = 0;
          else
            N = e.pendingLanes & -536870913, N = N !== 0 ? N : N & 536870912 ? 536870912 : 0;
          if (N !== 0) {
            n = N;
            e: {
              var O = e;
              c = As;
              var k = O.current.memoizedState.isDehydrated;
              if (k && (Ei(O, N).flags |= 256), N = Nf(
                O,
                N,
                !1
              ), N !== 2) {
                if (vf && !k) {
                  O.errorRecoveryDisabledLanes |= y, Ta |= y, c = 4;
                  break e;
                }
                y = pn, pn = c, y !== null && (pn === null ? pn = y : pn.push.apply(
                  pn,
                  y
                ));
              }
              c = N;
            }
            if (y = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          Ei(e, 0), Kr(e, n, 0, !0);
          break;
        }
        e: {
          switch (o = e, y = c, y) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Kr(
                o,
                n,
                Fn,
                !Yr
              );
              break e;
            case 2:
              pn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = _f + 300 - ne(), 10 < c)) {
            if (Kr(
              o,
              n,
              Fn,
              !Yr
            ), He(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Ug(
              dg.bind(
                null,
                o,
                i,
                pn,
                ol,
                bf,
                n,
                Fn,
                Ta,
                _i,
                Yr,
                y,
                2,
                -0,
                0
              ),
              c
            );
            break e;
          }
          dg(
            o,
            i,
            pn,
            ol,
            bf,
            n,
            Fn,
            Ta,
            _i,
            Yr,
            y,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    or(e);
  }
  function dg(e, n, i, o, c, y, N, O, k, H, $, ee, Z, V) {
    if (e.timeoutHandle = -1, ee = n.subtreeFlags, (ee & 8192 || (ee & 16785408) === 16785408) && (zs = { stylesheets: null, count: 0, unsuspend: J_ }, ig(n), ee = e2(), ee !== null)) {
      e.cancelPendingCommit = ee(
        bg.bind(
          null,
          e,
          n,
          y,
          i,
          o,
          c,
          N,
          O,
          k,
          $,
          1,
          Z,
          V
        )
      ), Kr(e, y, N, !H);
      return;
    }
    bg(
      e,
      n,
      y,
      i,
      o,
      c,
      N,
      O,
      k
    );
  }
  function v_(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var c = i[o], y = c.getSnapshot;
          c = c.value;
          try {
            if (!Sn(y(), c)) return !1;
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
  function Kr(e, n, i, o) {
    n &= ~yf, n &= ~Ta, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var y = 31 - Lt(c), N = 1 << y;
      o[y] = -1, c &= ~N;
    }
    i !== 0 && Eh(e, i, n);
  }
  function ll() {
    return (at & 6) === 0 ? (Os(0), !1) : !0;
  }
  function wf() {
    if (Ze !== null) {
      if (it === 0)
        var e = Ze.return;
      else
        e = Ze, vr = xa = null, Uc(e), mi = null, bs = 0, e = Ze;
      for (; e !== null; )
        Gm(e.alternate, e), e = e.return;
      Ze = null;
    }
  }
  function Ei(e, n) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, z_(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), wf(), ft = e, Ze = i = pr(e.current, null), Ke = n, it = 0, Cn = null, Yr = !1, bi = je(e, n), vf = !1, _i = Fn = yf = Ta = Xr = St = 0, pn = As = null, bf = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Lt(o), y = 1 << c;
        n |= e[c], o &= ~y;
      }
    return Cr = n, Do(), i;
  }
  function hg(e, n) {
    Ue = null, P.H = $o, n === cs || n === Bo ? (n = Dp(), it = 3) : n === Ap ? (n = Dp(), it = 4) : it = n === Mm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Cn = n, Ze === null && (St = 1, el(
      e,
      Ln(n, e.current)
    ));
  }
  function pg() {
    var e = P.H;
    return P.H = $o, e === null ? $o : e;
  }
  function mg() {
    var e = P.A;
    return P.A = m_, e;
  }
  function Cf() {
    St = 4, Yr || (Ke & 4194048) !== Ke && Un.current !== null || (bi = !0), (Xr & 134217727) === 0 && (Ta & 134217727) === 0 || ft === null || Kr(
      ft,
      Ke,
      Fn,
      !1
    );
  }
  function Nf(e, n, i) {
    var o = at;
    at |= 2;
    var c = pg(), y = mg();
    (ft !== e || Ke !== n) && (ol = null, Ei(e, n)), n = !1;
    var N = St;
    e: do
      try {
        if (it !== 0 && Ze !== null) {
          var O = Ze, k = Cn;
          switch (it) {
            case 8:
              wf(), N = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Un.current === null && (n = !0);
              var H = it;
              if (it = 0, Cn = null, wi(e, O, k, H), i && bi) {
                N = 0;
                break e;
              }
              break;
            default:
              H = it, it = 0, Cn = null, wi(e, O, k, H);
          }
        }
        y_(), N = St;
        break;
      } catch ($) {
        hg(e, $);
      }
    while (!0);
    return n && e.shellSuspendCounter++, vr = xa = null, at = o, P.H = c, P.A = y, Ze === null && (ft = null, Ke = 0, Do()), N;
  }
  function y_() {
    for (; Ze !== null; ) gg(Ze);
  }
  function b_(e, n) {
    var i = at;
    at |= 2;
    var o = pg(), c = mg();
    ft !== e || Ke !== n ? (ol = null, sl = ne() + 500, Ei(e, n)) : bi = je(
      e,
      n
    );
    e: do
      try {
        if (it !== 0 && Ze !== null) {
          n = Ze;
          var y = Cn;
          t: switch (it) {
            case 1:
              it = 0, Cn = null, wi(e, n, y, 1);
              break;
            case 2:
            case 9:
              if (Tp(y)) {
                it = 0, Cn = null, vg(n);
                break;
              }
              n = function() {
                it !== 2 && it !== 9 || ft !== e || (it = 7), or(e);
              }, y.then(n, n);
              break e;
            case 3:
              it = 7;
              break e;
            case 4:
              it = 5;
              break e;
            case 7:
              Tp(y) ? (it = 0, Cn = null, vg(n)) : (it = 0, Cn = null, wi(e, n, y, 7));
              break;
            case 5:
              var N = null;
              switch (Ze.tag) {
                case 26:
                  N = Ze.memoizedState;
                case 5:
                case 27:
                  var O = Ze;
                  if (!N || Jg(N)) {
                    it = 0, Cn = null;
                    var k = O.sibling;
                    if (k !== null) Ze = k;
                    else {
                      var H = O.return;
                      H !== null ? (Ze = H, ul(H)) : Ze = null;
                    }
                    break t;
                  }
              }
              it = 0, Cn = null, wi(e, n, y, 5);
              break;
            case 6:
              it = 0, Cn = null, wi(e, n, y, 6);
              break;
            case 8:
              wf(), St = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        __();
        break;
      } catch ($) {
        hg(e, $);
      }
    while (!0);
    return vr = xa = null, P.H = o, P.A = c, at = i, Ze !== null ? 0 : (ft = null, Ke = 0, Do(), St);
  }
  function __() {
    for (; Ze !== null && !B(); )
      gg(Ze);
  }
  function gg(e) {
    var n = qm(e.alternate, e, Cr);
    e.memoizedProps = e.pendingProps, n === null ? ul(e) : Ze = n;
  }
  function vg(e) {
    var n = e, i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Im(
          i,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ke
        );
        break;
      case 11:
        n = Im(
          i,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ke
        );
        break;
      case 5:
        Uc(n);
      default:
        Gm(i, n), n = Ze = yp(n, Cr), n = qm(i, n, Cr);
    }
    e.memoizedProps = e.pendingProps, n === null ? ul(e) : Ze = n;
  }
  function wi(e, n, i, o) {
    vr = xa = null, Uc(n), mi = null, bs = 0;
    var c = n.return;
    try {
      if (u_(
        e,
        c,
        n,
        i,
        Ke
      )) {
        St = 1, el(
          e,
          Ln(i, e.current)
        ), Ze = null;
        return;
      }
    } catch (y) {
      if (c !== null) throw Ze = c, y;
      St = 1, el(
        e,
        Ln(i, e.current)
      ), Ze = null;
      return;
    }
    n.flags & 32768 ? (tt || o === 1 ? e = !0 : bi || (Ke & 536870912) !== 0 ? e = !1 : (Yr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Un.current, o !== null && o.tag === 13 && (o.flags |= 16384))), yg(n, e)) : ul(n);
  }
  function ul(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        yg(
          n,
          Yr
        );
        return;
      }
      e = n.return;
      var i = f_(
        n.alternate,
        n,
        Cr
      );
      if (i !== null) {
        Ze = i;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ze = n;
        return;
      }
      Ze = n = e;
    } while (n !== null);
    St === 0 && (St = 5);
  }
  function yg(e, n) {
    do {
      var i = d_(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, Ze = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !n && (e = e.sibling, e !== null)) {
        Ze = e;
        return;
      }
      Ze = e = i;
    } while (e !== null);
    St = 6, Ze = null;
  }
  function bg(e, n, i, o, c, y, N, O, k) {
    e.cancelPendingCommit = null;
    do
      cl();
    while (qt !== 0);
    if ((at & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (y = n.lanes | n.childLanes, y |= mc, Jb(
        e,
        i,
        y,
        N,
        O,
        k
      ), e === ft && (Ze = ft = null, Ke = 0), Si = n, Qr = e, xi = i, Sf = y, xf = c, ug = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, w_(he, function() {
        return wg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = P.T, P.T = null, c = ae.p, ae.p = 2, N = at, at |= 4;
        try {
          h_(e, n, i);
        } finally {
          at = N, ae.p = c, P.T = o;
        }
      }
      qt = 1, _g(), Sg(), xg();
    }
  }
  function _g() {
    if (qt === 1) {
      qt = 0;
      var e = Qr, n = Si, i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        i = P.T, P.T = null;
        var o = ae.p;
        ae.p = 2;
        var c = at;
        at |= 4;
        try {
          ng(n, e);
          var y = Pf, N = lp(e.containerInfo), O = y.focusedElem, k = y.selectionRange;
          if (N !== O && O && O.ownerDocument && op(
            O.ownerDocument.documentElement,
            O
          )) {
            if (k !== null && cc(O)) {
              var H = k.start, $ = k.end;
              if ($ === void 0 && ($ = H), "selectionStart" in O)
                O.selectionStart = H, O.selectionEnd = Math.min(
                  $,
                  O.value.length
                );
              else {
                var ee = O.ownerDocument || document, Z = ee && ee.defaultView || window;
                if (Z.getSelection) {
                  var V = Z.getSelection(), Te = O.textContent.length, Ce = Math.min(k.start, Te), lt = k.end === void 0 ? Ce : Math.min(k.end, Te);
                  !V.extend && Ce > lt && (N = lt, lt = Ce, Ce = N);
                  var I = sp(
                    O,
                    Ce
                  ), z = sp(
                    O,
                    lt
                  );
                  if (I && z && (V.rangeCount !== 1 || V.anchorNode !== I.node || V.anchorOffset !== I.offset || V.focusNode !== z.node || V.focusOffset !== z.offset)) {
                    var F = ee.createRange();
                    F.setStart(I.node, I.offset), V.removeAllRanges(), Ce > lt ? (V.addRange(F), V.extend(z.node, z.offset)) : (F.setEnd(z.node, z.offset), V.addRange(F));
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
          xl = !!If, Pf = If = null;
        } finally {
          at = c, ae.p = o, P.T = i;
        }
      }
      e.current = n, qt = 2;
    }
  }
  function Sg() {
    if (qt === 2) {
      qt = 0;
      var e = Qr, n = Si, i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        i = P.T, P.T = null;
        var o = ae.p;
        ae.p = 2;
        var c = at;
        at |= 4;
        try {
          Jm(e, n.alternate, n);
        } finally {
          at = c, ae.p = o, P.T = i;
        }
      }
      qt = 3;
    }
  }
  function xg() {
    if (qt === 4 || qt === 3) {
      qt = 0, W();
      var e = Qr, n = Si, i = xi, o = ug;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? qt = 5 : (qt = 0, Si = Qr = null, Eg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && ($r = null), qu(i), n = n.stateNode, et && typeof et.onCommitFiberRoot == "function")
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
        n = P.T, c = ae.p, ae.p = 2, P.T = null;
        try {
          for (var y = e.onRecoverableError, N = 0; N < o.length; N++) {
            var O = o[N];
            y(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          P.T = n, ae.p = c;
        }
      }
      (xi & 3) !== 0 && cl(), or(e), c = e.pendingLanes, (i & 4194090) !== 0 && (c & 42) !== 0 ? e === Ef ? Ts++ : (Ts = 0, Ef = e) : Ts = 0, Os(0);
    }
  }
  function Eg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ls(n)));
  }
  function cl(e) {
    return _g(), Sg(), xg(), wg();
  }
  function wg() {
    if (qt !== 5) return !1;
    var e = Qr, n = Sf;
    Sf = 0;
    var i = qu(xi), o = P.T, c = ae.p;
    try {
      ae.p = 32 > i ? 32 : i, P.T = null, i = xf, xf = null;
      var y = Qr, N = xi;
      if (qt = 0, Si = Qr = null, xi = 0, (at & 6) !== 0) throw Error(s(331));
      var O = at;
      if (at |= 4, og(y.current), ag(
        y,
        y.current,
        N,
        i
      ), at = O, Os(0, !1), et && typeof et.onPostCommitFiberRoot == "function")
        try {
          et.onPostCommitFiberRoot(ut, y);
        } catch {
        }
      return !0;
    } finally {
      ae.p = c, P.T = o, Eg(e, n);
    }
  }
  function Cg(e, n, i) {
    n = Ln(i, n), n = ef(e.stateNode, n, 2), e = Ur(e, n, 2), e !== null && (Vi(e, 2), or(e));
  }
  function ct(e, n, i) {
    if (e.tag === 3)
      Cg(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Cg(
            n,
            e,
            i
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && ($r === null || !$r.has(o))) {
            e = Ln(i, e), i = Om(2), o = Ur(n, i, 2), o !== null && (Dm(
              i,
              o,
              n,
              e
            ), Vi(o, 2), or(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Af(e, n, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new g_();
      var c = /* @__PURE__ */ new Set();
      o.set(n, c);
    } else
      c = o.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(n, c));
    c.has(i) || (vf = !0, c.add(i), e = S_.bind(null, e, n, i), n.then(e, e));
  }
  function S_(e, n, i) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, ft === e && (Ke & i) === i && (St === 4 || St === 3 && (Ke & 62914560) === Ke && 300 > ne() - _f ? (at & 2) === 0 && Ei(e, 0) : yf |= i, _i === Ke && (_i = 0)), or(e);
  }
  function Ng(e, n) {
    n === 0 && (n = Yn()), e = ii(e, n), e !== null && (Vi(e, n), or(e));
  }
  function x_(e) {
    var n = e.memoizedState, i = 0;
    n !== null && (i = n.retryLane), Ng(e, i);
  }
  function E_(e, n) {
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
  function w_(e, n) {
    return un(e, n);
  }
  var fl = null, Ci = null, Tf = !1, dl = !1, Of = !1, Oa = 0;
  function or(e) {
    e !== Ci && e.next === null && (Ci === null ? fl = Ci = e : Ci = Ci.next = e), dl = !0, Tf || (Tf = !0, N_());
  }
  function Os(e, n) {
    if (!Of && dl) {
      Of = !0;
      do
        for (var i = !1, o = fl; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var y = 0;
            else {
              var N = o.suspendedLanes, O = o.pingedLanes;
              y = (1 << 31 - Lt(42 | e) + 1) - 1, y &= c & ~(N & ~O), y = y & 201326741 ? y & 201326741 | 1 : y ? y | 2 : 0;
            }
            y !== 0 && (i = !0, Dg(o, y));
          } else
            y = Ke, y = He(
              o,
              o === ft ? y : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (y & 3) === 0 || je(o, y) || (i = !0, Dg(o, y));
          o = o.next;
        }
      while (i);
      Of = !1;
    }
  }
  function C_() {
    Ag();
  }
  function Ag() {
    dl = Tf = !1;
    var e = 0;
    Oa !== 0 && (R_() && (e = Oa), Oa = 0);
    for (var n = ne(), i = null, o = fl; o !== null; ) {
      var c = o.next, y = Tg(o, n);
      y === 0 ? (o.next = null, i === null ? fl = c : i.next = c, c === null && (Ci = i)) : (i = o, (e !== 0 || (y & 3) !== 0) && (dl = !0)), o = c;
    }
    Os(e);
  }
  function Tg(e, n) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, y = e.pendingLanes & -62914561; 0 < y; ) {
      var N = 31 - Lt(y), O = 1 << N, k = c[N];
      k === -1 ? ((O & i) === 0 || (O & o) !== 0) && (c[N] = nn(O, n)) : k <= n && (e.expiredLanes |= O), y &= ~O;
    }
    if (n = ft, i = Ke, i = He(
      e,
      e === n ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === n && (it === 2 || it === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && Nt(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || je(e, i)) {
      if (n = i & -i, n === e.callbackPriority) return n;
      switch (o !== null && Nt(o), qu(i)) {
        case 2:
        case 8:
          i = oe;
          break;
        case 32:
          i = he;
          break;
        case 268435456:
          i = Fe;
          break;
        default:
          i = he;
      }
      return o = Og.bind(null, e), i = un(i, o), e.callbackPriority = n, e.callbackNode = i, n;
    }
    return o !== null && o !== null && Nt(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Og(e, n) {
    if (qt !== 0 && qt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (cl() && e.callbackNode !== i)
      return null;
    var o = Ke;
    return o = He(
      e,
      e === ft ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (fg(e, o, n), Tg(e, ne()), e.callbackNode != null && e.callbackNode === i ? Og.bind(null, e) : null);
  }
  function Dg(e, n) {
    if (cl()) return null;
    fg(e, n, !0);
  }
  function N_() {
    L_(function() {
      (at & 6) !== 0 ? un(
        Ne,
        C_
      ) : Ag();
    });
  }
  function Df() {
    return Oa === 0 && (Oa = Vt()), Oa;
  }
  function Mg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Eo("" + e);
  }
  function kg(e, n) {
    var i = n.ownerDocument.createElement("input");
    return i.name = n.name, i.value = n.value, e.id && i.setAttribute("form", e.id), n.parentNode.insertBefore(i, n), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function A_(e, n, i, o, c) {
    if (n === "submit" && i && i.stateNode === c) {
      var y = Mg(
        (c[cn] || null).action
      ), N = o.submitter;
      N && (n = (n = N[cn] || null) ? Mg(n.formAction) : N.getAttribute("formAction"), n !== null && (y = n, N = null));
      var O = new Ao(
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
                if (Oa !== 0) {
                  var k = N ? kg(c, N) : new FormData(c);
                  $c(
                    i,
                    {
                      pending: !0,
                      data: k,
                      method: c.method,
                      action: y
                    },
                    null,
                    k
                  );
                }
              } else
                typeof y == "function" && (O.preventDefault(), k = N ? kg(c, N) : new FormData(c), $c(
                  i,
                  {
                    pending: !0,
                    data: k,
                    method: c.method,
                    action: y
                  },
                  y,
                  k
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var Mf = 0; Mf < pc.length; Mf++) {
    var kf = pc[Mf], T_ = kf.toLowerCase(), O_ = kf[0].toUpperCase() + kf.slice(1);
    Xn(
      T_,
      "on" + O_
    );
  }
  Xn(fp, "onAnimationEnd"), Xn(dp, "onAnimationIteration"), Xn(hp, "onAnimationStart"), Xn("dblclick", "onDoubleClick"), Xn("focusin", "onFocus"), Xn("focusout", "onBlur"), Xn(V1, "onTransitionRun"), Xn(Y1, "onTransitionStart"), Xn(X1, "onTransitionCancel"), Xn(pp, "onTransitionEnd"), $a("onMouseEnter", ["mouseout", "mouseover"]), $a("onMouseLeave", ["mouseout", "mouseover"]), $a("onPointerEnter", ["pointerout", "pointerover"]), $a("onPointerLeave", ["pointerout", "pointerover"]), ha(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ha(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ha("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ha(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ha(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ha(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ds = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), D_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ds)
  );
  function jg(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], c = o.event;
      o = o.listeners;
      e: {
        var y = void 0;
        if (n)
          for (var N = o.length - 1; 0 <= N; N--) {
            var O = o[N], k = O.instance, H = O.currentTarget;
            if (O = O.listener, k !== y && c.isPropagationStopped())
              break e;
            y = O, c.currentTarget = H;
            try {
              y(c);
            } catch ($) {
              Wo($);
            }
            c.currentTarget = null, y = k;
          }
        else
          for (N = 0; N < o.length; N++) {
            if (O = o[N], k = O.instance, H = O.currentTarget, O = O.listener, k !== y && c.isPropagationStopped())
              break e;
            y = O, c.currentTarget = H;
            try {
              y(c);
            } catch ($) {
              Wo($);
            }
            c.currentTarget = null, y = k;
          }
      }
    }
  }
  function Ge(e, n) {
    var i = n[Zu];
    i === void 0 && (i = n[Zu] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (Rg(n, e, 2, !1), i.add(o));
  }
  function jf(e, n, i) {
    var o = 0;
    n && (o |= 4), Rg(
      i,
      e,
      o,
      n
    );
  }
  var hl = "_reactListening" + Math.random().toString(36).slice(2);
  function Rf(e) {
    if (!e[hl]) {
      e[hl] = !0, Ah.forEach(function(i) {
        i !== "selectionchange" && (D_.has(i) || jf(i, !1, e), jf(i, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[hl] || (n[hl] = !0, jf("selectionchange", !1, n));
    }
  }
  function Rg(e, n, i, o) {
    switch (av(n)) {
      case 2:
        var c = r2;
        break;
      case 8:
        c = a2;
        break;
      default:
        c = Xf;
    }
    i = c.bind(
      null,
      n,
      i,
      e
    ), c = void 0, !tc || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), o ? c !== void 0 ? e.addEventListener(n, i, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, i, !0) : c !== void 0 ? e.addEventListener(n, i, {
      passive: c
    }) : e.addEventListener(n, i, !1);
  }
  function zf(e, n, i, o, c) {
    var y = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var N = o.tag;
        if (N === 3 || N === 4) {
          var O = o.stateNode.containerInfo;
          if (O === c) break;
          if (N === 4)
            for (N = o.return; N !== null; ) {
              var k = N.tag;
              if ((k === 3 || k === 4) && N.stateNode.containerInfo === c)
                return;
              N = N.return;
            }
          for (; O !== null; ) {
            if (N = Va(O), N === null) return;
            if (k = N.tag, k === 5 || k === 6 || k === 26 || k === 27) {
              o = y = N;
              continue e;
            }
            O = O.parentNode;
          }
        }
        o = o.return;
      }
    Fh(function() {
      var H = y, $ = Wu(i), ee = [];
      e: {
        var Z = mp.get(e);
        if (Z !== void 0) {
          var V = Ao, Te = e;
          switch (e) {
            case "keypress":
              if (Co(i) === 0) break e;
            case "keydown":
            case "keyup":
              V = w1;
              break;
            case "focusin":
              Te = "focus", V = ic;
              break;
            case "focusout":
              Te = "blur", V = ic;
              break;
            case "beforeblur":
            case "afterblur":
              V = ic;
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
              V = Zh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = d1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = A1;
              break;
            case fp:
            case dp:
            case hp:
              V = m1;
              break;
            case pp:
              V = O1;
              break;
            case "scroll":
            case "scrollend":
              V = c1;
              break;
            case "wheel":
              V = M1;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = v1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Vh;
              break;
            case "toggle":
            case "beforetoggle":
              V = j1;
          }
          var Ce = (n & 4) !== 0, lt = !Ce && (e === "scroll" || e === "scrollend"), I = Ce ? Z !== null ? Z + "Capture" : null : Z;
          Ce = [];
          for (var z = H, F; z !== null; ) {
            var K = z;
            if (F = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || F === null || I === null || (K = $i(z, I), K != null && Ce.push(
              Ms(z, K, F)
            )), lt) break;
            z = z.return;
          }
          0 < Ce.length && (Z = new V(
            Z,
            Te,
            null,
            i,
            $
          ), ee.push({ event: Z, listeners: Ce }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Z = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", Z && i !== Ju && (Te = i.relatedTarget || i.fromElement) && (Va(Te) || Te[Ga]))
            break e;
          if ((V || Z) && (Z = $.window === $ ? $ : (Z = $.ownerDocument) ? Z.defaultView || Z.parentWindow : window, V ? (Te = i.relatedTarget || i.toElement, V = H, Te = Te ? Va(Te) : null, Te !== null && (lt = u(Te), Ce = Te.tag, Te !== lt || Ce !== 5 && Ce !== 27 && Ce !== 6) && (Te = null)) : (V = null, Te = H), V !== Te)) {
            if (Ce = Zh, K = "onMouseLeave", I = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Ce = Vh, K = "onPointerLeave", I = "onPointerEnter", z = "pointer"), lt = V == null ? Z : Xi(V), F = Te == null ? Z : Xi(Te), Z = new Ce(
              K,
              z + "leave",
              V,
              i,
              $
            ), Z.target = lt, Z.relatedTarget = F, K = null, Va($) === H && (Ce = new Ce(
              I,
              z + "enter",
              Te,
              i,
              $
            ), Ce.target = F, Ce.relatedTarget = lt, K = Ce), lt = K, V && Te)
              t: {
                for (Ce = V, I = Te, z = 0, F = Ce; F; F = Ni(F))
                  z++;
                for (F = 0, K = I; K; K = Ni(K))
                  F++;
                for (; 0 < z - F; )
                  Ce = Ni(Ce), z--;
                for (; 0 < F - z; )
                  I = Ni(I), F--;
                for (; z--; ) {
                  if (Ce === I || I !== null && Ce === I.alternate)
                    break t;
                  Ce = Ni(Ce), I = Ni(I);
                }
                Ce = null;
              }
            else Ce = null;
            V !== null && zg(
              ee,
              Z,
              V,
              Ce,
              !1
            ), Te !== null && lt !== null && zg(
              ee,
              lt,
              Te,
              Ce,
              !0
            );
          }
        }
        e: {
          if (Z = H ? Xi(H) : window, V = Z.nodeName && Z.nodeName.toLowerCase(), V === "select" || V === "input" && Z.type === "file")
            var ye = ep;
          else if (Jh(Z))
            if (tp)
              ye = q1;
            else {
              ye = F1;
              var qe = U1;
            }
          else
            V = Z.nodeName, !V || V.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? H && Ku(H.elementType) && (ye = ep) : ye = H1;
          if (ye && (ye = ye(e, H))) {
            Wh(
              ee,
              ye,
              i,
              $
            );
            break e;
          }
          qe && qe(e, Z, H), e === "focusout" && H && Z.type === "number" && H.memoizedProps.value != null && Qu(Z, "number", Z.value);
        }
        switch (qe = H ? Xi(H) : window, e) {
          case "focusin":
            (Jh(qe) || qe.contentEditable === "true") && (ni = qe, fc = H, rs = null);
            break;
          case "focusout":
            rs = fc = ni = null;
            break;
          case "mousedown":
            dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            dc = !1, up(ee, i, $);
            break;
          case "selectionchange":
            if (G1) break;
          case "keydown":
          case "keyup":
            up(ee, i, $);
        }
        var Se;
        if (oc)
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
          ti ? Qh(e, i) && (Ae = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (Ae = "onCompositionStart");
        Ae && (Yh && i.locale !== "ko" && (ti || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && ti && (Se = Hh()) : (Lr = $, nc = "value" in Lr ? Lr.value : Lr.textContent, ti = !0)), qe = pl(H, Ae), 0 < qe.length && (Ae = new Gh(
          Ae,
          e,
          null,
          i,
          $
        ), ee.push({ event: Ae, listeners: qe }), Se ? Ae.data = Se : (Se = Kh(i), Se !== null && (Ae.data = Se)))), (Se = z1 ? L1(e, i) : I1(e, i)) && (Ae = pl(H, "onBeforeInput"), 0 < Ae.length && (qe = new Gh(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          $
        ), ee.push({
          event: qe,
          listeners: Ae
        }), qe.data = Se)), A_(
          ee,
          e,
          H,
          i,
          $
        );
      }
      jg(ee, n);
    });
  }
  function Ms(e, n, i) {
    return {
      instance: e,
      listener: n,
      currentTarget: i
    };
  }
  function pl(e, n) {
    for (var i = n + "Capture", o = []; e !== null; ) {
      var c = e, y = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || y === null || (c = $i(e, i), c != null && o.unshift(
        Ms(e, c, y)
      ), c = $i(e, n), c != null && o.push(
        Ms(e, c, y)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function Ni(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function zg(e, n, i, o, c) {
    for (var y = n._reactName, N = []; i !== null && i !== o; ) {
      var O = i, k = O.alternate, H = O.stateNode;
      if (O = O.tag, k !== null && k === o) break;
      O !== 5 && O !== 26 && O !== 27 || H === null || (k = H, c ? (H = $i(i, y), H != null && N.unshift(
        Ms(i, H, k)
      )) : c || (H = $i(i, y), H != null && N.push(
        Ms(i, H, k)
      ))), i = i.return;
    }
    N.length !== 0 && e.push({ event: n, listeners: N });
  }
  var M_ = /\r\n?/g, k_ = /\u0000|\uFFFD/g;
  function Lg(e) {
    return (typeof e == "string" ? e : "" + e).replace(M_, `
`).replace(k_, "");
  }
  function Ig(e, n) {
    return n = Lg(n), Lg(e) === n;
  }
  function ml() {
  }
  function ot(e, n, i, o, c, y) {
    switch (i) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Ja(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Ja(e, "" + o);
        break;
      case "className":
        _o(e, "class", o);
        break;
      case "tabIndex":
        _o(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _o(e, i, o);
        break;
      case "style":
        Bh(e, o, y);
        break;
      case "data":
        if (n !== "object") {
          _o(e, "data", o);
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
        o = Eo("" + o), e.setAttribute(i, o);
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
          typeof y == "function" && (i === "formAction" ? (n !== "input" && ot(e, n, "name", c.name, c, null), ot(
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
        o = Eo("" + o), e.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (e.onclick = ml);
        break;
      case "onScroll":
        o != null && Ge("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ge("scrollend", e);
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
        i = Eo("" + o), e.setAttributeNS(
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
        Ge("beforetoggle", e), Ge("toggle", e), bo(e, "popover", o);
        break;
      case "xlinkActuate":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        dr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        dr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        dr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        bo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = l1.get(i) || i, bo(e, i, o));
    }
  }
  function Lf(e, n, i, o, c, y) {
    switch (i) {
      case "style":
        Bh(e, o, y);
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
        typeof o == "string" ? Ja(e, o) : (typeof o == "number" || typeof o == "bigint") && Ja(e, "" + o);
        break;
      case "onScroll":
        o != null && Ge("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ge("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = ml);
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
        if (!Th.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (c = i.endsWith("Capture"), n = i.slice(2, c ? i.length - 7 : void 0), y = e[cn] || null, y = y != null ? y[i] : null, typeof y == "function" && e.removeEventListener(n, y, c), typeof o == "function")) {
              typeof y != "function" && y !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(n, o, c);
              break e;
            }
            i in e ? e[i] = o : o === !0 ? e.setAttribute(i, "") : bo(e, i, o);
          }
    }
  }
  function Zt(e, n, i) {
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
        Ge("error", e), Ge("load", e);
        var o = !1, c = !1, y;
        for (y in i)
          if (i.hasOwnProperty(y)) {
            var N = i[y];
            if (N != null)
              switch (y) {
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
                  ot(e, n, y, N, i, null);
              }
          }
        c && ot(e, n, "srcSet", i.srcSet, i, null), o && ot(e, n, "src", i.src, i, null);
        return;
      case "input":
        Ge("invalid", e);
        var O = y = N = c = null, k = null, H = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var $ = i[o];
            if ($ != null)
              switch (o) {
                case "name":
                  c = $;
                  break;
                case "type":
                  N = $;
                  break;
                case "checked":
                  k = $;
                  break;
                case "defaultChecked":
                  H = $;
                  break;
                case "value":
                  y = $;
                  break;
                case "defaultValue":
                  O = $;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if ($ != null)
                    throw Error(s(137, n));
                  break;
                default:
                  ot(e, n, o, $, i, null);
              }
          }
        zh(
          e,
          y,
          O,
          k,
          H,
          N,
          c,
          !1
        ), So(e);
        return;
      case "select":
        Ge("invalid", e), o = N = y = null;
        for (c in i)
          if (i.hasOwnProperty(c) && (O = i[c], O != null))
            switch (c) {
              case "value":
                y = O;
                break;
              case "defaultValue":
                N = O;
                break;
              case "multiple":
                o = O;
              default:
                ot(e, n, c, O, i, null);
            }
        n = y, i = N, e.multiple = !!o, n != null ? Ka(e, !!o, n, !1) : i != null && Ka(e, !!o, i, !0);
        return;
      case "textarea":
        Ge("invalid", e), y = c = o = null;
        for (N in i)
          if (i.hasOwnProperty(N) && (O = i[N], O != null))
            switch (N) {
              case "value":
                o = O;
                break;
              case "defaultValue":
                c = O;
                break;
              case "children":
                y = O;
                break;
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(s(91));
                break;
              default:
                ot(e, n, N, O, i, null);
            }
        Ih(e, o, c, y), So(e);
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
        Ge("beforetoggle", e), Ge("toggle", e), Ge("cancel", e), Ge("close", e);
        break;
      case "iframe":
      case "object":
        Ge("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ds.length; o++)
          Ge(Ds[o], e);
        break;
      case "image":
        Ge("error", e), Ge("load", e);
        break;
      case "details":
        Ge("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ge("error", e), Ge("load", e);
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
        if (Ku(n)) {
          for ($ in i)
            i.hasOwnProperty($) && (o = i[$], o !== void 0 && Lf(
              e,
              n,
              $,
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
  function j_(e, n, i, o) {
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
        var c = null, y = null, N = null, O = null, k = null, H = null, $ = null;
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
                y = V;
                break;
              case "name":
                c = V;
                break;
              case "checked":
                H = V;
                break;
              case "defaultChecked":
                $ = V;
                break;
              case "value":
                N = V;
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
        $u(
          e,
          N,
          O,
          k,
          H,
          $,
          y,
          c
        );
        return;
      case "select":
        V = N = O = Z = null;
        for (y in i)
          if (k = i[y], i.hasOwnProperty(y) && k != null)
            switch (y) {
              case "value":
                break;
              case "multiple":
                V = k;
              default:
                o.hasOwnProperty(y) || ot(
                  e,
                  n,
                  y,
                  null,
                  o,
                  k
                );
            }
        for (c in o)
          if (y = o[c], k = i[c], o.hasOwnProperty(c) && (y != null || k != null))
            switch (c) {
              case "value":
                Z = y;
                break;
              case "defaultValue":
                O = y;
                break;
              case "multiple":
                N = y;
              default:
                y !== k && ot(
                  e,
                  n,
                  c,
                  y,
                  o,
                  k
                );
            }
        n = O, i = N, o = V, Z != null ? Ka(e, !!i, Z, !1) : !!o != !!i && (n != null ? Ka(e, !!i, n, !0) : Ka(e, !!i, i ? [] : "", !1));
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
        for (N in o)
          if (c = o[N], y = i[N], o.hasOwnProperty(N) && (c != null || y != null))
            switch (N) {
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
                c !== y && ot(e, n, N, c, o, y);
            }
        Lh(e, Z, V);
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
        if (Ku(n)) {
          for (var lt in i)
            Z = i[lt], i.hasOwnProperty(lt) && Z !== void 0 && !o.hasOwnProperty(lt) && Lf(
              e,
              n,
              lt,
              void 0,
              o,
              Z
            );
          for ($ in o)
            Z = o[$], V = i[$], !o.hasOwnProperty($) || Z === V || Z === void 0 && V === void 0 || Lf(
              e,
              n,
              $,
              Z,
              o,
              V
            );
          return;
        }
    }
    for (var I in i)
      Z = i[I], i.hasOwnProperty(I) && Z != null && !o.hasOwnProperty(I) && ot(e, n, I, null, o, Z);
    for (ee in o)
      Z = o[ee], V = i[ee], !o.hasOwnProperty(ee) || Z === V || Z == null && V == null || ot(e, n, ee, Z, o, V);
  }
  var If = null, Pf = null;
  function gl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Pg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Bg(e, n) {
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
  function Bf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Uf = null;
  function R_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Uf ? !1 : (Uf = e, !0) : (Uf = null, !1);
  }
  var Ug = typeof setTimeout == "function" ? setTimeout : void 0, z_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Fg = typeof Promise == "function" ? Promise : void 0, L_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fg < "u" ? function(e) {
    return Fg.resolve(null).then(e).catch(I_);
  } : Ug;
  function I_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Jr(e) {
    return e === "head";
  }
  function Hg(e, n) {
    var i = n, o = 0, c = 0;
    do {
      var y = i.nextSibling;
      if (e.removeChild(i), y && y.nodeType === 8)
        if (i = y.data, i === "/$") {
          if (0 < o && 8 > o) {
            i = o;
            var N = e.ownerDocument;
            if (i & 1 && ks(N.documentElement), i & 2 && ks(N.body), i & 4)
              for (i = N.head, ks(i), N = i.firstChild; N; ) {
                var O = N.nextSibling, k = N.nodeName;
                N[Yi] || k === "SCRIPT" || k === "STYLE" || k === "LINK" && N.rel.toLowerCase() === "stylesheet" || i.removeChild(N), N = O;
              }
          }
          if (c === 0) {
            e.removeChild(y), Us(n);
            return;
          }
          c--;
        } else
          i === "$" || i === "$?" || i === "$!" ? c++ : o = i.charCodeAt(0) - 48;
      else o = 0;
      i = y;
    } while (i);
    Us(n);
  }
  function Ff(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (n = n.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ff(i), Gu(i);
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
  function P_(e, n, i, o) {
    for (; e.nodeType === 1; ) {
      var c = i;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Yi])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (y = e.getAttribute("rel"), y === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (y !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (y = e.getAttribute("src"), (y !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && y && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var y = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === y)
          return e;
      } else return e;
      if (e = Qn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function B_(e, n, i) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Qn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Hf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function U_(e, n) {
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
  function Qn(e) {
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
  var qf = null;
  function qg(e) {
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
  function Zg(e, n, i) {
    switch (n = gl(i), e) {
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
  function ks(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Gu(e);
  }
  var Hn = /* @__PURE__ */ new Map(), Gg = /* @__PURE__ */ new Set();
  function vl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Nr = ae.d;
  ae.d = {
    f: F_,
    r: H_,
    D: q_,
    C: Z_,
    L: G_,
    m: V_,
    X: X_,
    S: Y_,
    M: $_
  };
  function F_() {
    var e = Nr.f(), n = ll();
    return e || n;
  }
  function H_(e) {
    var n = Ya(e);
    n !== null && n.tag === 5 && n.type === "form" ? fm(n) : Nr.r(e);
  }
  var Ai = typeof document > "u" ? null : document;
  function Vg(e, n, i) {
    var o = Ai;
    if (o && typeof n == "string" && n) {
      var c = zn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof i == "string" && (c += '[crossorigin="' + i + '"]'), Gg.has(c) || (Gg.add(c), e = { rel: e, crossOrigin: i, href: n }, o.querySelector(c) === null && (n = o.createElement("link"), Zt(n, "link", e), It(n), o.head.appendChild(n)));
    }
  }
  function q_(e) {
    Nr.D(e), Vg("dns-prefetch", e, null);
  }
  function Z_(e, n) {
    Nr.C(e, n), Vg("preconnect", e, n);
  }
  function G_(e, n, i) {
    Nr.L(e, n, i);
    var o = Ai;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + zn(n) + '"]';
      n === "image" && i && i.imageSrcSet ? (c += '[imagesrcset="' + zn(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (c += '[imagesizes="' + zn(
        i.imageSizes
      ) + '"]')) : c += '[href="' + zn(e) + '"]';
      var y = c;
      switch (n) {
        case "style":
          y = Ti(e);
          break;
        case "script":
          y = Oi(e);
      }
      Hn.has(y) || (e = v(
        {
          rel: "preload",
          href: n === "image" && i && i.imageSrcSet ? void 0 : e,
          as: n
        },
        i
      ), Hn.set(y, e), o.querySelector(c) !== null || n === "style" && o.querySelector(js(y)) || n === "script" && o.querySelector(Rs(y)) || (n = o.createElement("link"), Zt(n, "link", e), It(n), o.head.appendChild(n)));
    }
  }
  function V_(e, n) {
    Nr.m(e, n);
    var i = Ai;
    if (i && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + zn(o) + '"][href="' + zn(e) + '"]', y = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          y = Oi(e);
      }
      if (!Hn.has(y) && (e = v({ rel: "modulepreload", href: e }, n), Hn.set(y, e), i.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Rs(y)))
              return;
        }
        o = i.createElement("link"), Zt(o, "link", e), It(o), i.head.appendChild(o);
      }
    }
  }
  function Y_(e, n, i) {
    Nr.S(e, n, i);
    var o = Ai;
    if (o && e) {
      var c = Xa(o).hoistableStyles, y = Ti(e);
      n = n || "default";
      var N = c.get(y);
      if (!N) {
        var O = { loading: 0, preload: null };
        if (N = o.querySelector(
          js(y)
        ))
          O.loading = 5;
        else {
          e = v(
            { rel: "stylesheet", href: e, "data-precedence": n },
            i
          ), (i = Hn.get(y)) && Zf(e, i);
          var k = N = o.createElement("link");
          It(k), Zt(k, "link", e), k._p = new Promise(function(H, $) {
            k.onload = H, k.onerror = $;
          }), k.addEventListener("load", function() {
            O.loading |= 1;
          }), k.addEventListener("error", function() {
            O.loading |= 2;
          }), O.loading |= 4, yl(N, n, o);
        }
        N = {
          type: "stylesheet",
          instance: N,
          count: 1,
          state: O
        }, c.set(y, N);
      }
    }
  }
  function X_(e, n) {
    Nr.X(e, n);
    var i = Ai;
    if (i && e) {
      var o = Xa(i).hoistableScripts, c = Oi(e), y = o.get(c);
      y || (y = i.querySelector(Rs(c)), y || (e = v({ src: e, async: !0 }, n), (n = Hn.get(c)) && Gf(e, n), y = i.createElement("script"), It(y), Zt(y, "link", e), i.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, o.set(c, y));
    }
  }
  function $_(e, n) {
    Nr.M(e, n);
    var i = Ai;
    if (i && e) {
      var o = Xa(i).hoistableScripts, c = Oi(e), y = o.get(c);
      y || (y = i.querySelector(Rs(c)), y || (e = v({ src: e, async: !0, type: "module" }, n), (n = Hn.get(c)) && Gf(e, n), y = i.createElement("script"), It(y), Zt(y, "link", e), i.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, o.set(c, y));
    }
  }
  function Yg(e, n, i, o) {
    var c = (c = X.current) ? vl(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (n = Ti(i.href), i = Xa(
          c
        ).hoistableStyles, o = i.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = Ti(i.href);
          var y = Xa(
            c
          ).hoistableStyles, N = y.get(e);
          if (N || (c = c.ownerDocument || c, N = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, y.set(e, N), (y = c.querySelector(
            js(e)
          )) && !y._p && (N.instance = y, N.state.loading = 5), Hn.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, Hn.set(e, i), y || Q_(
            c,
            e,
            i,
            N.state
          ))), n && o === null)
            throw Error(s(528, ""));
          return N;
        }
        if (n && o !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return n = i.async, i = i.src, typeof i == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Oi(i), i = Xa(
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
  function Ti(e) {
    return 'href="' + zn(e) + '"';
  }
  function js(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xg(e) {
    return v({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Q_(e, n, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), Zt(n, "link", i), It(n), e.head.appendChild(n));
  }
  function Oi(e) {
    return '[src="' + zn(e) + '"]';
  }
  function Rs(e) {
    return "script[async]" + e;
  }
  function $g(e, n, i) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + zn(i.href) + '"]'
          );
          if (o)
            return n.instance = o, It(o), o;
          var c = v({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), It(o), Zt(o, "style", c), yl(o, i.precedence, e), n.instance = o;
        case "stylesheet":
          c = Ti(i.href);
          var y = e.querySelector(
            js(c)
          );
          if (y)
            return n.state.loading |= 4, n.instance = y, It(y), y;
          o = Xg(i), (c = Hn.get(c)) && Zf(o, c), y = (e.ownerDocument || e).createElement("link"), It(y);
          var N = y;
          return N._p = new Promise(function(O, k) {
            N.onload = O, N.onerror = k;
          }), Zt(y, "link", o), n.state.loading |= 4, yl(y, i.precedence, e), n.instance = y;
        case "script":
          return y = Oi(i.src), (c = e.querySelector(
            Rs(y)
          )) ? (n.instance = c, It(c), c) : (o = i, (c = Hn.get(y)) && (o = v({}, i), Gf(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), It(c), Zt(c, "link", o), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, yl(o, i.precedence, e));
    return n.instance;
  }
  function yl(e, n, i) {
    for (var o = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = o.length ? o[o.length - 1] : null, y = c, N = 0; N < o.length; N++) {
      var O = o[N];
      if (O.dataset.precedence === n) y = O;
      else if (y !== c) break;
    }
    y ? y.parentNode.insertBefore(e, y.nextSibling) : (n = i.nodeType === 9 ? i.head : i, n.insertBefore(e, n.firstChild));
  }
  function Zf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Gf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var bl = null;
  function Qg(e, n, i) {
    if (bl === null) {
      var o = /* @__PURE__ */ new Map(), c = bl = /* @__PURE__ */ new Map();
      c.set(i, o);
    } else
      c = bl, o = c.get(i), o || (o = /* @__PURE__ */ new Map(), c.set(i, o));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), c = 0; c < i.length; c++) {
      var y = i[c];
      if (!(y[Yi] || y[Yt] || e === "link" && y.getAttribute("rel") === "stylesheet") && y.namespaceURI !== "http://www.w3.org/2000/svg") {
        var N = y.getAttribute(n) || "";
        N = e + N;
        var O = o.get(N);
        O ? O.push(y) : o.set(N, [y]);
      }
    }
    return o;
  }
  function Kg(e, n, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function K_(e, n, i) {
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
  function Jg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var zs = null;
  function J_() {
  }
  function W_(e, n, i) {
    if (zs === null) throw Error(s(475));
    var o = zs;
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ti(i.href), y = e.querySelector(
          js(c)
        );
        if (y) {
          e = y._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = _l.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = y, It(y);
          return;
        }
        y = e.ownerDocument || e, i = Xg(i), (c = Hn.get(c)) && Zf(i, c), y = y.createElement("link"), It(y);
        var N = y;
        N._p = new Promise(function(O, k) {
          N.onload = O, N.onerror = k;
        }), Zt(y, "link", i), n.instance = y;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = _l.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function e2() {
    if (zs === null) throw Error(s(475));
    var e = zs;
    return e.stylesheets && e.count === 0 && Vf(e, e.stylesheets), 0 < e.count ? function(n) {
      var i = setTimeout(function() {
        if (e.stylesheets && Vf(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function _l() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Vf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Sl = null;
  function Vf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Sl = /* @__PURE__ */ new Map(), n.forEach(t2, e), Sl = null, _l.call(e));
  }
  function t2(e, n) {
    if (!(n.state.loading & 4)) {
      var i = Sl.get(e);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), Sl.set(e, i);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), y = 0; y < c.length; y++) {
          var N = c[y];
          (N.nodeName === "LINK" || N.getAttribute("media") !== "not all") && (i.set(N.dataset.precedence, N), o = N);
        }
        o && i.set(null, o);
      }
      c = n.instance, N = c.getAttribute("data-precedence"), y = i.get(N) || o, y === o && i.set(null, c), i.set(N, c), this.count++, o = _l.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), y ? y.parentNode.insertBefore(c, y.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Ls = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: me,
    _currentValue2: me,
    _threadCount: 0
  };
  function n2(e, n, i, o, c, y, N, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = fr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fr(0), this.hiddenUpdates = fr(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = y, this.onRecoverableError = N, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Wg(e, n, i, o, c, y, N, O, k, H, $, ee) {
    return e = new n2(
      e,
      n,
      i,
      N,
      O,
      k,
      H,
      ee
    ), n = 1, y === !0 && (n |= 24), y = xn(3, null, null, n), e.current = y, y.stateNode = e, n = Nc(), n.refCount++, e.pooledCache = n, n.refCount++, y.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: n
    }, Dc(y), e;
  }
  function ev(e) {
    return e ? (e = si, e) : si;
  }
  function tv(e, n, i, o, c, y) {
    c = ev(c), o.context === null ? o.context = c : o.pendingContext = c, o = Br(n), o.payload = { element: i }, y = y === void 0 ? null : y, y !== null && (o.callback = y), i = Ur(e, o, n), i !== null && (An(i, e, n), ds(i, e, n));
  }
  function nv(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Yf(e, n) {
    nv(e, n), (e = e.alternate) && nv(e, n);
  }
  function rv(e) {
    if (e.tag === 13) {
      var n = ii(e, 67108864);
      n !== null && An(n, e, 67108864), Yf(e, 67108864);
    }
  }
  var xl = !0;
  function r2(e, n, i, o) {
    var c = P.T;
    P.T = null;
    var y = ae.p;
    try {
      ae.p = 2, Xf(e, n, i, o);
    } finally {
      ae.p = y, P.T = c;
    }
  }
  function a2(e, n, i, o) {
    var c = P.T;
    P.T = null;
    var y = ae.p;
    try {
      ae.p = 8, Xf(e, n, i, o);
    } finally {
      ae.p = y, P.T = c;
    }
  }
  function Xf(e, n, i, o) {
    if (xl) {
      var c = $f(o);
      if (c === null)
        zf(
          e,
          n,
          o,
          El,
          i
        ), iv(e, o);
      else if (s2(
        c,
        e,
        n,
        i,
        o
      ))
        o.stopPropagation();
      else if (iv(e, o), n & 4 && -1 < i2.indexOf(e)) {
        for (; c !== null; ) {
          var y = Ya(c);
          if (y !== null)
            switch (y.tag) {
              case 3:
                if (y = y.stateNode, y.current.memoizedState.isDehydrated) {
                  var N = Be(y.pendingLanes);
                  if (N !== 0) {
                    var O = y;
                    for (O.pendingLanes |= 2, O.entangledLanes |= 2; N; ) {
                      var k = 1 << 31 - Lt(N);
                      O.entanglements[1] |= k, N &= ~k;
                    }
                    or(y), (at & 6) === 0 && (sl = ne() + 500, Os(0));
                  }
                }
                break;
              case 13:
                O = ii(y, 2), O !== null && An(O, y, 2), ll(), Yf(y, 2);
            }
          if (y = $f(o), y === null && zf(
            e,
            n,
            o,
            El,
            i
          ), y === c) break;
          c = y;
        }
        c !== null && o.stopPropagation();
      } else
        zf(
          e,
          n,
          o,
          null,
          i
        );
    }
  }
  function $f(e) {
    return e = Wu(e), Qf(e);
  }
  var El = null;
  function Qf(e) {
    if (El = null, e = Va(e), e !== null) {
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
    return El = e, null;
  }
  function av(e) {
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
        switch (de()) {
          case Ne:
            return 2;
          case oe:
            return 8;
          case he:
          case Ve:
            return 32;
          case Fe:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Kf = !1, Wr = null, ea = null, ta = null, Is = /* @__PURE__ */ new Map(), Ps = /* @__PURE__ */ new Map(), na = [], i2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function iv(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wr = null;
        break;
      case "dragenter":
      case "dragleave":
        ea = null;
        break;
      case "mouseover":
      case "mouseout":
        ta = null;
        break;
      case "pointerover":
      case "pointerout":
        Is.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ps.delete(n.pointerId);
    }
  }
  function Bs(e, n, i, o, c, y) {
    return e === null || e.nativeEvent !== y ? (e = {
      blockedOn: n,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: y,
      targetContainers: [c]
    }, n !== null && (n = Ya(n), n !== null && rv(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function s2(e, n, i, o, c) {
    switch (n) {
      case "focusin":
        return Wr = Bs(
          Wr,
          e,
          n,
          i,
          o,
          c
        ), !0;
      case "dragenter":
        return ea = Bs(
          ea,
          e,
          n,
          i,
          o,
          c
        ), !0;
      case "mouseover":
        return ta = Bs(
          ta,
          e,
          n,
          i,
          o,
          c
        ), !0;
      case "pointerover":
        var y = c.pointerId;
        return Is.set(
          y,
          Bs(
            Is.get(y) || null,
            e,
            n,
            i,
            o,
            c
          )
        ), !0;
      case "gotpointercapture":
        return y = c.pointerId, Ps.set(
          y,
          Bs(
            Ps.get(y) || null,
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
  function sv(e) {
    var n = Va(e.target);
    if (n !== null) {
      var i = u(n);
      if (i !== null) {
        if (n = i.tag, n === 13) {
          if (n = f(i), n !== null) {
            e.blockedOn = n, Wb(e.priority, function() {
              if (i.tag === 13) {
                var o = Nn();
                o = Hu(o);
                var c = ii(i, o);
                c !== null && An(c, i, o), Yf(i, o);
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
  function wl(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = $f(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        Ju = o, i.target.dispatchEvent(o), Ju = null;
      } else
        return n = Ya(i), n !== null && rv(n), e.blockedOn = i, !1;
      n.shift();
    }
    return !0;
  }
  function ov(e, n, i) {
    wl(e) && i.delete(n);
  }
  function o2() {
    Kf = !1, Wr !== null && wl(Wr) && (Wr = null), ea !== null && wl(ea) && (ea = null), ta !== null && wl(ta) && (ta = null), Is.forEach(ov), Ps.forEach(ov);
  }
  function Cl(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Kf || (Kf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      o2
    )));
  }
  var Nl = null;
  function lv(e) {
    Nl !== e && (Nl = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        Nl === e && (Nl = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n], o = e[n + 1], c = e[n + 2];
          if (typeof o != "function") {
            if (Qf(o || i) === null)
              continue;
            break;
          }
          var y = Ya(i);
          y !== null && (e.splice(n, 3), n -= 3, $c(
            y,
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
  function Us(e) {
    function n(k) {
      return Cl(k, e);
    }
    Wr !== null && Cl(Wr, e), ea !== null && Cl(ea, e), ta !== null && Cl(ta, e), Is.forEach(n), Ps.forEach(n);
    for (var i = 0; i < na.length; i++) {
      var o = na[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < na.length && (i = na[0], i.blockedOn === null); )
      sv(i), i.blockedOn === null && na.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var c = i[o], y = i[o + 1], N = c[cn] || null;
        if (typeof y == "function")
          N || lv(i);
        else if (N) {
          var O = null;
          if (y && y.hasAttribute("formAction")) {
            if (c = y, N = y[cn] || null)
              O = N.formAction;
            else if (Qf(c) !== null) continue;
          } else O = N.action;
          typeof O == "function" ? i[o + 1] = O : (i.splice(o, 3), o -= 3), lv(i);
        }
      }
  }
  function Jf(e) {
    this._internalRoot = e;
  }
  Al.prototype.render = Jf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var i = n.current, o = Nn();
    tv(i, o, e, n, null, null);
  }, Al.prototype.unmount = Jf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      tv(e.current, 2, null, e, null, null), ll(), n[Ga] = null;
    }
  };
  function Al(e) {
    this._internalRoot = e;
  }
  Al.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Ch();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < na.length && n !== 0 && n < na[i].priority; i++) ;
      na.splice(i, 0, e), i === 0 && sv(e);
    }
  };
  var uv = r.version;
  if (uv !== "19.1.1")
    throw Error(
      s(
        527,
        uv,
        "19.1.1"
      )
    );
  ae.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(n), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var l2 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: P,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber)
      try {
        ut = Tl.inject(
          l2
        ), et = Tl;
      } catch {
      }
  }
  return Zs.createRoot = function(e, n) {
    if (!l(e)) throw Error(s(299));
    var i = !1, o = "", c = Cm, y = Nm, N = Am, O = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (y = n.onCaughtError), n.onRecoverableError !== void 0 && (N = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (O = n.unstable_transitionCallbacks)), n = Wg(
      e,
      1,
      !1,
      null,
      null,
      i,
      o,
      c,
      y,
      N,
      O,
      null
    ), e[Ga] = n.current, Rf(e), new Jf(n);
  }, Zs.hydrateRoot = function(e, n, i) {
    if (!l(e)) throw Error(s(299));
    var o = !1, c = "", y = Cm, N = Nm, O = Am, k = null, H = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (c = i.identifierPrefix), i.onUncaughtError !== void 0 && (y = i.onUncaughtError), i.onCaughtError !== void 0 && (N = i.onCaughtError), i.onRecoverableError !== void 0 && (O = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (k = i.unstable_transitionCallbacks), i.formState !== void 0 && (H = i.formState)), n = Wg(
      e,
      1,
      !0,
      n,
      i ?? null,
      o,
      c,
      y,
      N,
      O,
      k,
      H
    ), n.context = ev(null), i = n.current, o = Nn(), o = Hu(o), c = Br(o), c.callback = null, Ur(i, c, o), i = o, n.current.lanes = i, Vi(n, i), or(n), e[Ga] = n.current, Rf(e), new Al(n);
  }, Zs.version = "19.1.1", Zs;
}
var wv;
function P2() {
  if (wv) return nd.exports;
  wv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), nd.exports = I2(), nd.exports;
}
var B2 = P2();
const Cv = /* @__PURE__ */ g0(B2);
var U2 = Object.defineProperty, F2 = (t, r, a) => r in t ? U2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, H2 = (t, r, a) => F2(t, r + "", a);
class y0 extends Error {
  constructor(r, a) {
    super(r), H2(this, "data"), this.data = a;
  }
  toString() {
    return this.message;
  }
}
async function q2(t, r) {
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
    throw new y0(u.statusText, u);
  await a.getCharacters();
}
async function Z2(t, r) {
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
    throw new y0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var G2 = Object.defineProperty, V2 = (t, r, a) => r in t ? G2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, Nv = (t, r, a) => V2(t, typeof r != "symbol" ? r + "" : r, a);
class b0 {
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
      let h = function(g, v) {
        let _ = !1;
        for (const b of Object.keys(v))
          g[b] === void 0 ? (g[b] = v[b], _ = !0) : typeof v[b] == "object" && v[b] !== null && (g[b] = g[b] || {}, h(g[b], v[b]) && (_ = !0));
        return _;
      };
      s && u.version !== s && (d.version.changed = !0, d.version.new = s, u.version = s), l && l !== "*" && u.formatVersion !== l && (d.formatVersion.changed = !0, d.formatVersion.new = l, u.formatVersion = l), (h(u, this.defaultSettings) || d.version.changed || d.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(a)) {
      s && !u.version && (u.version = s, d.version.changed = !0, d.version.new = s), l && !u.formatVersion && (u.formatVersion = l, d.formatVersion.changed = !0, d.formatVersion.new = l);
      let h = structuredClone(u), g = u.formatVersion;
      try {
        let v;
        do {
          v = !1;
          let _ = a.find((b) => b.from === g);
          if (_ && _.to > g)
            h = await _.action(h), g = _.to, h.formatVersion = _.to, v = !0;
          else
            for (const b of a)
              if (b.from === "*" && b.to > g && g !== b.to) {
                h = await b.action(h), g = b.to, h.formatVersion = b.to, v = !0;
                break;
              }
        } while (v);
        if (g !== u.formatVersion) {
          d.formatVersion.changed = !0, d.formatVersion.new = g;
          const _ = this.defaultSettings.version;
          _ && (h.version = _);
        }
        if (d.formatVersion.changed) {
          for (const _ of Object.keys(u))
            delete u[_];
          Object.assign(u, h), this.saveSettings();
        }
      } catch (v) {
        throw console.error("Failed to apply version changes:", v), new Error(`Version migration failed: ${v instanceof Error ? v.message : v}`, {
          cause: v
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
function kr(t) {
  return Array.isArray ? Array.isArray(t) : x0(t) === "[object Array]";
}
function Y2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function X2(t) {
  return t == null ? "" : Y2(t);
}
function lr(t) {
  return typeof t == "string";
}
function _0(t) {
  return typeof t == "number";
}
function $2(t) {
  return t === !0 || t === !1 || Q2(t) && x0(t) == "[object Boolean]";
}
function S0(t) {
  return typeof t == "object";
}
function Q2(t) {
  return S0(t) && t !== null;
}
function Mn(t) {
  return t != null;
}
function sd(t) {
  return !t.trim().length;
}
function x0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const K2 = "Incorrect 'index' type", J2 = (t) => `Invalid value for key ${t}`, W2 = (t) => `Pattern length exceeds max of ${t}.`, eS = (t) => `Missing ${t} property in key`, tS = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Av = Object.prototype.hasOwnProperty;
class nS {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let a = 0;
    r.forEach((s) => {
      let l = E0(s);
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
function E0(t) {
  let r = null, a = null, s = null, l = 1, u = null;
  if (lr(t) || kr(t))
    s = t, r = Tv(t), a = Md(t);
  else {
    if (!Av.call(t, "name"))
      throw new Error(eS("name"));
    const f = t.name;
    if (s = f, Av.call(t, "weight") && (l = t.weight, l <= 0))
      throw new Error(tS(f));
    r = Tv(f), a = Md(f), u = t.getFn;
  }
  return { path: r, id: a, weight: l, src: s, getFn: u };
}
function Tv(t) {
  return kr(t) ? t : t.split(".");
}
function Md(t) {
  return kr(t) ? t.join(".") : t;
}
function rS(t, r) {
  let a = [], s = !1;
  const l = (u, f, d) => {
    if (Mn(u))
      if (!f[d])
        a.push(u);
      else {
        let h = f[d];
        const g = u[h];
        if (!Mn(g))
          return;
        if (d === f.length - 1 && (lr(g) || _0(g) || $2(g)))
          a.push(X2(g));
        else if (kr(g)) {
          s = !0;
          for (let v = 0, _ = g.length; v < _; v += 1)
            l(g[v], f, d + 1);
        } else f.length && l(g, f, d + 1);
      }
  };
  return l(t, lr(r) ? r.split(".") : r, 0), s ? a : a[0];
}
const aS = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, iS = {
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
}, sS = {
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
}, oS = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: rS,
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
  ...iS,
  ...aS,
  ...sS,
  ...oS
};
const lS = /[^ ]+/g;
function uS(t = 1, r = 3) {
  const a = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(l) {
      const u = l.match(lS).length;
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
class nh {
  constructor({
    getFn: r = Me.getFn,
    fieldNormWeight: a = Me.fieldNormWeight
  } = {}) {
    this.norm = uS(a, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, lr(this.docs[0]) ? this.docs.forEach((r, a) => {
      this._addString(r, a);
    }) : this.docs.forEach((r, a) => {
      this._addObject(r, a);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const a = this.size();
    lr(r) ? this._addString(r, a) : this._addObject(r, a);
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
    if (!Mn(r) || sd(r))
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
      if (Mn(f)) {
        if (kr(f)) {
          let d = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: g, value: v } = h.pop();
            if (Mn(v))
              if (lr(v) && !sd(v)) {
                let _ = {
                  v,
                  i: g,
                  n: this.norm.get(v)
                };
                d.push(_);
              } else kr(v) && v.forEach((_, b) => {
                h.push({
                  nestedArrIndex: b,
                  value: _
                });
              });
          }
          s.$[u] = d;
        } else if (lr(f) && !sd(f)) {
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
function w0(t, r, { getFn: a = Me.getFn, fieldNormWeight: s = Me.fieldNormWeight } = {}) {
  const l = new nh({ getFn: a, fieldNormWeight: s });
  return l.setKeys(t.map(E0)), l.setSources(r), l.create(), l;
}
function cS(t, { getFn: r = Me.getFn, fieldNormWeight: a = Me.fieldNormWeight } = {}) {
  const { keys: s, records: l } = t, u = new nh({ getFn: r, fieldNormWeight: a });
  return u.setKeys(s), u.setIndexRecords(l), u;
}
function Ol(t, {
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
function fS(t = [], r = Me.minMatchCharLength) {
  let a = [], s = -1, l = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let d = t[u];
    d && s === -1 ? s = u : !d && s !== -1 && (l = u - 1, l - s + 1 >= r && a.push([s, l]), s = -1);
  }
  return t[u - 1] && u - s >= r && a.push([s, u - 1]), a;
}
const La = 32;
function dS(t, r, a, {
  location: s = Me.location,
  distance: l = Me.distance,
  threshold: u = Me.threshold,
  findAllMatches: f = Me.findAllMatches,
  minMatchCharLength: d = Me.minMatchCharLength,
  includeMatches: h = Me.includeMatches,
  ignoreLocation: g = Me.ignoreLocation
} = {}) {
  if (r.length > La)
    throw new Error(W2(La));
  const v = r.length, _ = t.length, b = Math.max(0, Math.min(s, _));
  let m = u, p = b;
  const x = d > 1 || h, E = x ? Array(_) : [];
  let A;
  for (; (A = t.indexOf(r, p)) > -1; ) {
    let R = Ol(r, {
      currentLocation: A,
      expectedLocation: b,
      distance: l,
      ignoreLocation: g
    });
    if (m = Math.min(R, m), p = A + v, x) {
      let L = 0;
      for (; L < v; )
        E[A + L] = 1, L += 1;
    }
  }
  p = -1;
  let w = [], D = 1, C = v + _;
  const T = 1 << v - 1;
  for (let R = 0; R < v; R += 1) {
    let L = 0, Y = C;
    for (; L < Y; )
      Ol(r, {
        errors: R,
        currentLocation: b + Y,
        expectedLocation: b,
        distance: l,
        ignoreLocation: g
      }) <= m ? L = Y : C = Y, Y = Math.floor((C - L) / 2 + L);
    C = Y;
    let U = Math.max(1, b - Y + 1), q = f ? _ : Math.min(b + Y, _) + v, Q = Array(q + 2);
    Q[q + 1] = (1 << R) - 1;
    for (let fe = q; fe >= U; fe -= 1) {
      let _e = fe - 1, P = a[t.charAt(_e)];
      if (x && (E[_e] = +!!P), Q[fe] = (Q[fe + 1] << 1 | 1) & P, R && (Q[fe] |= (w[fe + 1] | w[fe]) << 1 | 1 | w[fe + 1]), Q[fe] & T && (D = Ol(r, {
        errors: R,
        currentLocation: _e,
        expectedLocation: b,
        distance: l,
        ignoreLocation: g
      }), D <= m)) {
        if (m = D, p = _e, p <= b)
          break;
        U = Math.max(1, 2 * b - p);
      }
    }
    if (Ol(r, {
      errors: R + 1,
      currentLocation: b,
      expectedLocation: b,
      distance: l,
      ignoreLocation: g
    }) > m)
      break;
    w = Q;
  }
  const M = {
    isMatch: p >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (x) {
    const R = fS(E, d);
    R.length ? h && (M.indices = R) : M.isMatch = !1;
  }
  return M;
}
function hS(t) {
  let r = {};
  for (let a = 0, s = t.length; a < s; a += 1) {
    const l = t.charAt(a);
    r[l] = (r[l] || 0) | 1 << s - a - 1;
  }
  return r;
}
const bu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class C0 {
  constructor(r, {
    location: a = Me.location,
    threshold: s = Me.threshold,
    distance: l = Me.distance,
    includeMatches: u = Me.includeMatches,
    findAllMatches: f = Me.findAllMatches,
    minMatchCharLength: d = Me.minMatchCharLength,
    isCaseSensitive: h = Me.isCaseSensitive,
    ignoreDiacritics: g = Me.ignoreDiacritics,
    ignoreLocation: v = Me.ignoreLocation
  } = {}) {
    if (this.options = {
      location: a,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: d,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: v
    }, r = h ? r : r.toLowerCase(), r = g ? bu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (m, p) => {
      this.chunks.push({
        pattern: m,
        alphabet: hS(m),
        startIndex: p
      });
    }, b = this.pattern.length;
    if (b > La) {
      let m = 0;
      const p = b % La, x = b - p;
      for (; m < x; )
        _(this.pattern.substr(m, La), m), m += La;
      if (p) {
        const E = b - La;
        _(this.pattern.substr(E), E);
      }
    } else
      _(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: a, ignoreDiacritics: s, includeMatches: l } = this.options;
    if (r = a ? r : r.toLowerCase(), r = s ? bu(r) : r, this.pattern === r) {
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
      findAllMatches: h,
      minMatchCharLength: g,
      ignoreLocation: v
    } = this.options;
    let _ = [], b = 0, m = !1;
    this.chunks.forEach(({ pattern: x, alphabet: E, startIndex: A }) => {
      const { isMatch: w, score: D, indices: C } = dS(r, x, E, {
        location: u + A,
        distance: f,
        threshold: d,
        findAllMatches: h,
        minMatchCharLength: g,
        includeMatches: l,
        ignoreLocation: v
      });
      w && (m = !0), b += D, w && C && (_ = [..._, ...C]);
    });
    let p = {
      isMatch: m,
      score: m ? b / this.chunks.length : 1
    };
    return m && l && (p.indices = _), p;
  }
}
class ca {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return Ov(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return Ov(r, this.singleRegex);
  }
  search() {
  }
}
function Ov(t, r) {
  const a = t.match(r);
  return a ? a[1] : null;
}
class pS extends ca {
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
class mS extends ca {
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
class gS extends ca {
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
class vS extends ca {
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
class yS extends ca {
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
class bS extends ca {
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
class N0 extends ca {
  constructor(r, {
    location: a = Me.location,
    threshold: s = Me.threshold,
    distance: l = Me.distance,
    includeMatches: u = Me.includeMatches,
    findAllMatches: f = Me.findAllMatches,
    minMatchCharLength: d = Me.minMatchCharLength,
    isCaseSensitive: h = Me.isCaseSensitive,
    ignoreDiacritics: g = Me.ignoreDiacritics,
    ignoreLocation: v = Me.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new C0(r, {
      location: a,
      threshold: s,
      distance: l,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: d,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: v
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
class A0 extends ca {
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
const kd = [
  pS,
  A0,
  gS,
  vS,
  bS,
  yS,
  mS,
  N0
], Dv = kd.length, _S = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, SS = "|";
function xS(t, r = {}) {
  return t.split(SS).map((a) => {
    let s = a.trim().split(_S).filter((u) => u && !!u.trim()), l = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const d = s[u];
      let h = !1, g = -1;
      for (; !h && ++g < Dv; ) {
        const v = kd[g];
        let _ = v.isMultiMatch(d);
        _ && (l.push(new v(_, r)), h = !0);
      }
      if (!h)
        for (g = -1; ++g < Dv; ) {
          const v = kd[g];
          let _ = v.isSingleMatch(d);
          if (_) {
            l.push(new v(_, r));
            break;
          }
        }
    }
    return l;
  });
}
const ES = /* @__PURE__ */ new Set([N0.type, A0.type]);
class wS {
  constructor(r, {
    isCaseSensitive: a = Me.isCaseSensitive,
    ignoreDiacritics: s = Me.ignoreDiacritics,
    includeMatches: l = Me.includeMatches,
    minMatchCharLength: u = Me.minMatchCharLength,
    ignoreLocation: f = Me.ignoreLocation,
    findAllMatches: d = Me.findAllMatches,
    location: h = Me.location,
    threshold: g = Me.threshold,
    distance: v = Me.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: a,
      ignoreDiacritics: s,
      includeMatches: l,
      minMatchCharLength: u,
      findAllMatches: d,
      ignoreLocation: f,
      location: h,
      threshold: g,
      distance: v
    }, r = a ? r : r.toLowerCase(), r = s ? bu(r) : r, this.pattern = r, this.query = xS(this.pattern, this.options);
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
    r = l ? r : r.toLowerCase(), r = u ? bu(r) : r;
    let f = 0, d = [], h = 0;
    for (let g = 0, v = a.length; g < v; g += 1) {
      const _ = a[g];
      d.length = 0, f = 0;
      for (let b = 0, m = _.length; b < m; b += 1) {
        const p = _[b], { isMatch: x, indices: E, score: A } = p.search(r);
        if (x) {
          if (f += 1, h += A, s) {
            const w = p.constructor.type;
            ES.has(w) ? d = [...d, ...E] : d.push(E);
          }
        } else {
          h = 0, f = 0, d.length = 0;
          break;
        }
      }
      if (f) {
        let b = {
          isMatch: !0,
          score: h / f
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
const jd = [];
function CS(...t) {
  jd.push(...t);
}
function Rd(t, r) {
  for (let a = 0, s = jd.length; a < s; a += 1) {
    let l = jd[a];
    if (l.condition(t, r))
      return new l(t, r);
  }
  return new C0(t, r);
}
const _u = {
  AND: "$and",
  OR: "$or"
}, zd = {
  PATH: "$path",
  PATTERN: "$val"
}, Ld = (t) => !!(t[_u.AND] || t[_u.OR]), NS = (t) => !!t[zd.PATH], AS = (t) => !kr(t) && S0(t) && !Ld(t), Mv = (t) => ({
  [_u.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function T0(t, r, { auto: a = !0 } = {}) {
  const s = (l) => {
    let u = Object.keys(l);
    const f = NS(l);
    if (!f && u.length > 1 && !Ld(l))
      return s(Mv(l));
    if (AS(l)) {
      const h = f ? l[zd.PATH] : u[0], g = f ? l[zd.PATTERN] : l[h];
      if (!lr(g))
        throw new Error(J2(h));
      const v = {
        keyId: Md(h),
        pattern: g
      };
      return a && (v.searcher = Rd(g, r)), v;
    }
    let d = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const g = l[h];
      kr(g) && g.forEach((v) => {
        d.children.push(s(v));
      });
    }), d;
  };
  return Ld(t) || (t = Mv(t)), s(t);
}
function TS(t, { ignoreFieldNorm: r = Me.ignoreFieldNorm }) {
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
function OS(t, r) {
  const a = t.matches;
  r.matches = [], Mn(a) && a.forEach((s) => {
    if (!Mn(s.indices) || !s.indices.length)
      return;
    const { indices: l, value: u } = s;
    let f = {
      indices: l,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function DS(t, r) {
  r.score = t.score;
}
function MS(t, r, {
  includeMatches: a = Me.includeMatches,
  includeScore: s = Me.includeScore
} = {}) {
  const l = [];
  return a && l.push(OS), s && l.push(DS), t.map((u) => {
    const { idx: f } = u, d = {
      item: r[f],
      refIndex: f
    };
    return l.length && l.forEach((h) => {
      h(u, d);
    }), d;
  });
}
class Zi {
  constructor(r, a = {}, s) {
    this.options = { ...Me, ...a }, this.options.useExtendedSearch, this._keyStore = new nS(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, a) {
    if (this._docs = r, a && !(a instanceof nh))
      throw new Error(K2);
    this._myIndex = a || w0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    Mn(r) && (this._docs.push(r), this._myIndex.add(r));
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
    let h = lr(r) ? lr(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return TS(h, { ignoreFieldNorm: d }), u && h.sort(f), _0(a) && a > -1 && (h = h.slice(0, a)), MS(h, this._docs, {
      includeMatches: s,
      includeScore: l
    });
  }
  _searchStringList(r) {
    const a = Rd(r, this.options), { records: s } = this._myIndex, l = [];
    return s.forEach(({ v: u, i: f, n: d }) => {
      if (!Mn(u))
        return;
      const { isMatch: h, score: g, indices: v } = a.searchIn(u);
      h && l.push({
        item: u,
        idx: f,
        matches: [{ score: g, value: u, norm: d, indices: v }]
      });
    }), l;
  }
  _searchLogical(r) {
    const a = T0(r, this.options), s = (d, h, g) => {
      if (!d.children) {
        const { keyId: _, searcher: b } = d, m = this._findMatches({
          key: this._keyStore.get(_),
          value: this._myIndex.getValueForItemAtKeyId(h, _),
          searcher: b
        });
        return m && m.length ? [
          {
            idx: g,
            item: h,
            matches: m
          }
        ] : [];
      }
      const v = [];
      for (let _ = 0, b = d.children.length; _ < b; _ += 1) {
        const m = d.children[_], p = s(m, h, g);
        if (p.length)
          v.push(...p);
        else if (d.operator === _u.AND)
          return [];
      }
      return v;
    }, l = this._myIndex.records, u = {}, f = [];
    return l.forEach(({ $: d, i: h }) => {
      if (Mn(d)) {
        let g = s(a, d, h);
        g.length && (u[h] || (u[h] = { idx: h, item: d, matches: [] }, f.push(u[h])), g.forEach(({ matches: v }) => {
          u[h].matches.push(...v);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const a = Rd(r, this.options), { keys: s, records: l } = this._myIndex, u = [];
    return l.forEach(({ $: f, i: d }) => {
      if (!Mn(f))
        return;
      let h = [];
      s.forEach((g, v) => {
        h.push(
          ...this._findMatches({
            key: g,
            value: f[v],
            searcher: a
          })
        );
      }), h.length && u.push({
        idx: d,
        item: f,
        matches: h
      });
    }), u;
  }
  _findMatches({ key: r, value: a, searcher: s }) {
    if (!Mn(a))
      return [];
    let l = [];
    if (kr(a))
      a.forEach(({ v: u, i: f, n: d }) => {
        if (!Mn(u))
          return;
        const { isMatch: h, score: g, indices: v } = s.searchIn(u);
        h && l.push({
          score: g,
          key: r,
          value: u,
          idx: f,
          norm: d,
          indices: v
        });
      });
    else {
      const { v: u, n: f } = a, { isMatch: d, score: h, indices: g } = s.searchIn(u);
      d && l.push({ score: h, key: r, value: u, norm: f, indices: g });
    }
    return l;
  }
}
Zi.version = "7.1.0";
Zi.createIndex = w0;
Zi.parseIndex = cS;
Zi.config = Me;
Zi.parseQuery = T0;
CS(wS);
var kS = Object.defineProperty, jS = (t, r, a) => r in t ? kS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, RS = (t, r, a) => jS(t, r + "", a);
let zS = class {
  constructor() {
    RS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
        let h;
        for await (const g of d())
          h = g, a != null && a.onEntry && await a.onEntry(u, g);
        a != null && a.onFinish && await a.onFinish(u, h);
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
async function LS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function ve(t, r, { escapeHtml: a = !0 } = {}) {
  await LS("echo", { severity: t, escapeHtml: (!!a).toString() }, r);
}
function od(t) {
  return h2(t);
}
function kv(t, r) {
  return f2(t, r);
}
function Dl(t, r, a) {
  return d2(t, r, a);
}
function IS(t, r, a) {
  return b2(t, r, a);
}
function PS(t, r) {
  return _2(t, r);
}
function BS(t, {
  customStoryString: r,
  customInstructSettings: a
} = {}) {
  return c2(t, { customStoryString: r, customInstructSettings: a });
}
function Ma(t) {
  return N2(t);
}
function US() {
  return {
    prompt: Fs[Hs.prompt],
    interval: Fs[Hs.interval],
    position: Fs[Hs.position],
    depth: Fs[Hs.depth],
    role: Fs[Hs.role]
  };
}
function FS(t, r) {
  return T2(t, r);
}
function HS({
  name2: t,
  charDescription: r,
  charPersonality: a,
  Scenario: s,
  worldInfoBefore: l,
  worldInfoAfter: u,
  bias: f,
  type: d,
  quietPrompt: h,
  quietImage: g,
  extensionPrompts: v,
  cyclePrompt: _,
  systemPromptOverride: b,
  jailbreakPromptOverride: m,
  personaDescription: p,
  messages: x,
  messageExamples: E
}, A) {
  return A2(
    {
      name2: t,
      charDescription: r,
      charPersonality: a,
      Scenario: s,
      worldInfoBefore: l,
      worldInfoAfter: u,
      bias: f,
      type: d,
      quietPrompt: h,
      quietImage: g,
      cyclePrompt: _,
      systemPromptOverride: b,
      jailbreakPromptOverride: m,
      personaDescription: p,
      extensionPrompts: v,
      messages: x,
      messageExamples: E
    },
    A
  );
}
function qS(t) {
  return x2(t);
}
function ZS(t) {
  return E2(t);
}
function GS(t, r, {
  characterOverride: a,
  isMarkdown: s,
  isPrompt: l,
  isEdit: u,
  depth: f
}) {
  return O2(t, r, { characterOverride: a, isMarkdown: s, isPrompt: l, isEdit: u, depth: f });
}
async function VS(t, r) {
  return await S2(t, r);
}
function jv(t, {
  wiFormat: r
} = {}) {
  return w2(t, { wiFormat: r });
}
function Gs(t) {
  return C2(t);
}
function YS(t, r) {
  return g2(t, r);
}
class XS {
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
var $S = Object.defineProperty, QS = (t, r, a) => r in t ? $S(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a, Ml = (t, r, a) => QS(t, typeof r != "symbol" ? r + "" : r, a);
class KS {
  constructor(r) {
    Ml(this, "messages", []), Ml(this, "tokenizer"), Ml(this, "maxContext"), Ml(this, "currentTokenCount", 0), this.tokenizer = new XS(), this.maxContext = r;
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
    const a = r.filter((d) => d.content), s = a.map((d) => this.getTokenCount(d)), l = s.reduce((d, h) => d + h, 0);
    if (this.currentTokenCount + l <= this.maxContext)
      return this.messages.push(...a), this.currentTokenCount += l, !0;
    let u = 0;
    const f = [];
    for (let d = a.length - 1; d >= 0; d--) {
      const h = a[d], g = s[d];
      if (this.currentTokenCount + u + g <= this.maxContext)
        f.unshift(h), u += g;
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
async function O0(t, {
  targetCharacterId: r,
  presetName: a,
  instructName: s,
  contextName: l,
  syspromptName: u,
  maxContext: f,
  includeNames: d,
  ignoreCharacterFields: h,
  ignoreAuthorNote: g,
  ignoreWorldInfo: v,
  messageIndexesBetween: _
} = {}) {
  var b, m, p, x, E, A, w, D, C, T, M, R, L, Y;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const U = SillyTavern.getContext();
  let { description: q, personality: Q, persona: pe, scenario: fe, mesExamples: _e, system: P, jailbreak: ae } = h ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : U.getCharacterCardFields({
    chid: r
  });
  const me = t === "textgenerationwebui" ? (b = U.getPresetManager("instruct")) == null ? void 0 : b.getCompletionPresetByName(s) : void 0, Le = !!(me != null && me.enabled);
  let j = kv(_e, Le);
  function J() {
    var oe, he;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !a)
      return od();
    if (typeof f == "number")
      return f;
    let Ve;
    if (t === "textgenerationwebui") {
      const Fe = (oe = U.getPresetManager("textgenerationwebui")) == null ? void 0 : oe.getCompletionPresetByName(a);
      Ve = Fe?.max_length;
    } else {
      const Fe = (he = U.getPresetManager("openai")) == null ? void 0 : he.getCompletionPresetByName(a);
      Ve = Fe?.openai_max_context;
    }
    return typeof Ve == "number" ? Ve : od();
  }
  let ie = [];
  const se = J();
  if (se <= 0)
    return { result: [], warnings: ie };
  const le = new KS(se), Re = U.ToolManager.isToolCallingSupported(), X = _?.start ?? 0, xe = _ != null && _.end ? _.end + 1 : void 0;
  let Ee = X === -1 && xe === 0 ? [] : U.chat.slice(X, xe).filter((oe) => {
    var he;
    return !oe.is_system || Re && Array.isArray((he = oe.extra) == null ? void 0 : he.tool_invocations);
  });
  Ee = await Promise.all(
    Ee.map(async (oe, he) => {
      var Ve, Fe;
      let Qe = oe.mes, jn = oe.is_user ? dv.USER_INPUT : dv.AI_OUTPUT, ut = { isPrompt: !0, depth: Ee.length - he - 1 }, et = GS(Qe, jn, ut);
      return et = await VS(oe, et), (Ve = oe?.extra) != null && Ve.append_title && (Fe = oe?.extra) != null && Fe.title && (et = `${et}

${oe.extra.title}`), {
        ...oe,
        mes: et,
        index: he
      };
    })
  );
  const $e = Ee.map((oe) => v2 ? `${oe.name}: ${oe.mes}` : oe.mes).reverse(), { worldInfoString: We, worldInfoBefore: ke, worldInfoAfter: nt, worldInfoExamples: un, worldInfoDepth: Nt, anBefore: B, anAfter: W } = v ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await U.getWorldInfoPrompt($e, se, !1);
  for (const oe of un) {
    const he = oe.content;
    if (he.length === 0)
      continue;
    const Ve = Dl(he, Or, aa), Fe = kv(Ve, Le);
    oe.position === y2.before ? j.unshift(...Fe) : j.push(...Fe);
  }
  function ne() {
    const oe = [];
    for (let he = Ee.length - 1; he >= 0; he--) {
      const Ve = Ee[he], Fe = Ve.name === "System" && !Ve.is_user ? "system" : Ve.is_user ? "user" : "assistant";
      oe.unshift({
        role: Fe,
        content: d && Fe != "system" ? `${Ve.name}: ${Ve.mes}` : Ve.mes,
        source: Ve
      });
    }
    le.addMany(oe);
  }
  if (t === "textgenerationwebui") {
    const oe = [...j];
    j && (j = IS(j, Or, aa));
    const he = (m = U.getPresetManager("sysprompt")) == null ? void 0 : m.getCompletionPresetByName(u);
    he && (P = U.powerUserSettings.prefer_character_prompt && P ? P : Dl(he.content, Or, aa), P = Le ? PS(
      U.substituteParams(P, Or, aa, he.content),
      me
    ) : P);
    const Ve = {
      description: q,
      personality: Q,
      persona: U.powerUserSettings.persona_description_position == cv.IN_PROMPT ? pe : "",
      scenario: fe,
      system: P,
      char: aa,
      user: Or,
      wiBefore: ke,
      wiAfter: nt,
      loreBefore: ke,
      loreAfter: nt,
      mesExamples: j.join(""),
      mesExamplesRaw: oe.join("")
    }, Fe = (p = U.getPresetManager("context")) == null ? void 0 : p.getCompletionPresetByName(l);
    let Qe = BS(Ve, {
      customInstructSettings: me,
      customStoryString: Fe?.story_string
    });
    Qe && le.add({ role: "system", content: Qe, ignoreInstruct: !0 }), ne();
  } else {
    let oe = function(He) {
      const je = tn.find((Vt) => Vt.identifier === He);
      if (je)
        return je;
      const nn = Qe.prompts.find((Vt) => Vt.identifier === He);
      if (nn)
        return nn;
    }, he = qS(Ee), Ve = ZS(j);
    async function Fe() {
      let [He, je] = await HS(
        {
          name2: aa,
          charDescription: q,
          charPersonality: Q,
          Scenario: fe,
          worldInfoBefore: ke,
          worldInfoAfter: nt,
          extensionPrompts: U.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: P,
          jailbreakPromptOverride: ae,
          personaDescription: pe,
          messages: he,
          messageExamples: Ve
        },
        !1
      );
      le.addMany(He);
    }
    if (!a)
      return ie.push("No preset name provided. Using default preset."), await Fe(), { result: le.getMessages(), warnings: ie };
    const Qe = (x = U.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(a);
    if (!Qe)
      return console.warn(`Preset not found: ${a}. Using current preset.`), ie.push(`Preset not found: ${a}. Using current preset.`), Fe(), { result: le.getMessages(), warnings: ie };
    let jn = (E = Qe.prompt_order) == null ? void 0 : E.find((He) => He.character_id === Kt);
    if (!jn && Qe.prompt_order && Qe.prompt_order.length > 0 && (jn = Qe.prompt_order[Qe.prompt_order.length - 1]), !jn)
      return console.warn(`No prompt order found for preset: ${a}. Using current preset.`), ie.push(`No prompt order found for preset: ${a}. Using current preset.`), Fe(), { result: le.getMessages(), warnings: ie };
    const ut = fe && Qe.scenario_format ? U.substituteParams(Qe.scenario_format) : "", et = Q && Qe.personality_format ? U.substituteParams(Qe.personality_format) : "", en = U.substituteParams(Qe.group_nudge_prompt), Lt = Qe.impersonation_prompt ? U.substituteParams(Qe.impersonation_prompt) : "", tn = [];
    v || tn.push(
      {
        role: "system",
        content: jv(ke, { wiFormat: Qe.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: jv(nt, { wiFormat: Qe.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || tn.push(
      { role: "system", content: q, identifier: "charDescription" },
      { role: "system", content: et, identifier: "charPersonality" },
      { role: "system", content: ut, identifier: "scenario" }
    ), tn.push(
      { role: "system", content: Lt, identifier: "impersonate" },
      { role: "system", content: en, identifier: "groupNudge" }
    );
    const re = U.extensionPrompts["1_memory"];
    re && re.value && tn.push({
      role: Ma(re.role),
      content: re.value,
      identifier: "summary",
      position: Gs(re.position)
    });
    const be = U.extensionPrompts["2_floating_prompt"];
    !g && be && be.value && tn.push({
      role: Ma(be.role),
      content: be.value,
      identifier: "authorsNote",
      position: Gs(be.position)
    });
    const Pe = U.extensionPrompts["3_vectors"];
    Pe && Pe.value && tn.push({
      role: "system",
      content: Pe.value,
      identifier: "vectorsMemory",
      position: Gs(Pe.position)
    });
    const ge = U.extensionPrompts["4_vectors_data_bank"];
    ge && ge.value && tn.push({
      role: Ma(ge.role),
      content: ge.value,
      identifier: "vectorsDataBank",
      position: Gs(ge.position)
    });
    const Be = U.extensionPrompts.chromadb;
    Be && Be.value && tn.push({
      role: "system",
      content: Be.value,
      identifier: "smartContext",
      position: Gs(Be.position)
    }), !h && U.powerUserSettings.persona_description && U.powerUserSettings.persona_description_position === cv.IN_PROMPT && tn.push({
      role: "system",
      content: U.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), jn.order.forEach((He) => {
      if (!He.enabled)
        return;
      const je = oe(He.identifier);
      if (je && je.content) {
        le.add({
          role: je.role ?? "system",
          content: U.substituteParams(je.content)
        });
        return;
      }
      He.identifier === "chatHistory" && ne();
    });
  }
  const de = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const oe in U.extensionPrompts)
    if (Object.hasOwn(U.extensionPrompts, oe)) {
      const he = U.extensionPrompts[oe];
      if (de.includes(oe) || !U.extensionPrompts[oe].value || ![Da.BEFORE_PROMPT, Da.IN_PROMPT].includes(he.position) || typeof he.filter == "function" && !await he.filter()) continue;
      const Ve = {
        role: Ma(he.role) ?? "system",
        content: he.value
      };
      if (he.position === Da.BEFORE_PROMPT)
        le.insert(he.depth, Ve);
      else if (he.position === Da.IN_PROMPT) {
        const Fe = le.getMessages();
        le.insert(Fe.length - he.depth, Ve);
      }
    }
  for (const oe of Nt) {
    const he = le.getMessages();
    le.insert(he.length - oe.depth, {
      role: Ma(oe.role),
      content: oe.entries.join(`
`)
    });
  }
  if (!h) {
    const oe = FS(er, Number(Kt));
    if (er && Array.isArray(oe) && oe.length > 0)
      oe.filter((he) => he.text).forEach((he, Ve) => {
        const Fe = le.getMessages();
        le.insert(Fe.length - he.depth, { role: he.role, content: he.text });
      });
    else {
      const he = Dl(
        (T = (C = (D = (w = (A = U.characters[Kt]) == null ? void 0 : A.data) == null ? void 0 : w.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : C.prompt) == null ? void 0 : T.trim(),
        Or,
        aa
      ) || "";
      if (he) {
        const Ve = m2, Fe = ((Y = (L = (R = (M = U.characters[Kt]) == null ? void 0 : M.data) == null ? void 0 : R.extensions) == null ? void 0 : L.depth_prompt) == null ? void 0 : Y.role) ?? p2, Qe = le.getMessages();
        le.insert(Qe.length - Ve, {
          role: Ma(Fe),
          content: he
        });
      }
    }
  }
  let Ne = -1;
  if (!g) {
    const oe = US();
    if (oe.prompt) {
      oe.prompt = Dl(oe.prompt, Or, aa);
      const he = { role: Ma(oe.role), content: oe.prompt };
      switch (oe.position) {
        case Da.IN_PROMPT:
          le.insert(1, he), Ne = 1;
          break;
        case Da.IN_CHAT:
          Ne = le.getMessages().length - oe.depth, le.insert(Ne, he);
          break;
        case Da.BEFORE_PROMPT:
          le.addFront(he), Ne = 0;
          break;
      }
    }
  }
  return Ne >= 0 && (B.length > 0 && (le.insert(Ne, { role: "system", content: B.join(`
`) }), Ne++), W.length > 0 && le.insert(Ne + 1, { role: "system", content: W.join(`
`) })), { result: le.getMessages(), warnings: ie };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Rv(t, r) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), a.push.apply(a, s);
  }
  return a;
}
function cr(t) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Rv(Object(a), !0).forEach(function(s) {
      JS(t, s, a[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Rv(Object(a)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(a, s));
    });
  }
  return t;
}
function hu(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hu = function(r) {
    return typeof r;
  } : hu = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, hu(t);
}
function JS(t, r, a) {
  return r in t ? Object.defineProperty(t, r, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = a, t;
}
function jr() {
  return jr = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var s in a)
        Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s]);
    }
    return t;
  }, jr.apply(this, arguments);
}
function WS(t, r) {
  if (t == null) return {};
  var a = {}, s = Object.keys(t), l, u;
  for (u = 0; u < s.length; u++)
    l = s[u], !(r.indexOf(l) >= 0) && (a[l] = t[l]);
  return a;
}
function ex(t, r) {
  if (t == null) return {};
  var a = WS(t, r), s, l;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (l = 0; l < u.length; l++)
      s = u[l], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (a[s] = t[s]);
  }
  return a;
}
var tx = "1.15.6";
function Mr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Rr = Mr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), mo = Mr(/Edge/i), zv = Mr(/firefox/i), io = Mr(/safari/i) && !Mr(/chrome/i) && !Mr(/android/i), rh = Mr(/iP(ad|od|hone)/i), D0 = Mr(/chrome/i) && Mr(/android/i), M0 = {
  capture: !1,
  passive: !1
};
function Xe(t, r, a) {
  t.addEventListener(r, a, !Rr && M0);
}
function Ye(t, r, a) {
  t.removeEventListener(r, a, !Rr && M0);
}
function Su(t, r) {
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
function k0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Wn(t, r, a, s) {
  if (t) {
    a = a || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === a && Su(t, r) : Su(t, r)) || s && t === a)
        return t;
      if (t === a) break;
    } while (t = k0(t));
  }
  return null;
}
var Lv = /\s+/g;
function On(t, r, a) {
  if (t && r)
    if (t.classList)
      t.classList[a ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(Lv, " ").replace(" " + r + " ", " ");
      t.className = (s + (a ? " " + r : "")).replace(Lv, " ");
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
function Fi(t, r) {
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
function j0(t, r, a) {
  if (t) {
    var s = t.getElementsByTagName(r), l = 0, u = s.length;
    if (a)
      for (; l < u; l++)
        a(s[l], l);
    return s;
  }
  return [];
}
function ur() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function Dt(t, r, a, s, l) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, d, h, g, v, _;
    if (t !== window && t.parentNode && t !== ur() ? (u = t.getBoundingClientRect(), f = u.top, d = u.left, h = u.bottom, g = u.right, v = u.height, _ = u.width) : (f = 0, d = 0, h = window.innerHeight, g = window.innerWidth, v = window.innerHeight, _ = window.innerWidth), (r || a) && t !== window && (l = l || t.parentNode, !Rr))
      do
        if (l && l.getBoundingClientRect && (Oe(l, "transform") !== "none" || a && Oe(l, "position") !== "static")) {
          var b = l.getBoundingClientRect();
          f -= b.top + parseInt(Oe(l, "border-top-width")), d -= b.left + parseInt(Oe(l, "border-left-width")), h = f + u.height, g = d + u.width;
          break;
        }
      while (l = l.parentNode);
    if (s && t !== window) {
      var m = Fi(l || t), p = m && m.a, x = m && m.d;
      m && (f /= x, d /= p, _ /= p, v /= x, h = f + v, g = d + _);
    }
    return {
      top: f,
      left: d,
      bottom: h,
      right: g,
      width: _,
      height: v
    };
  }
}
function Iv(t, r, a) {
  for (var s = ua(t, !0), l = Dt(t)[r]; s; ) {
    var u = Dt(s)[a], f = void 0;
    if (f = l >= u, !f) return s;
    if (s === ur()) break;
    s = ua(s, !1);
  }
  return !1;
}
function qi(t, r, a, s) {
  for (var l = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== De.ghost && (s || f[u] !== De.dragged) && Wn(f[u], a.draggable, t, !1)) {
      if (l === r)
        return f[u];
      l++;
    }
    u++;
  }
  return null;
}
function ah(t, r) {
  for (var a = t.lastElementChild; a && (a === De.ghost || Oe(a, "display") === "none" || r && !Su(a, r)); )
    a = a.previousElementSibling;
  return a || null;
}
function Zn(t, r) {
  var a = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== De.clone && (!r || Su(t, r)) && a++;
  return a;
}
function Pv(t) {
  var r = 0, a = 0, s = ur();
  if (t)
    do {
      var l = Fi(t), u = l.a, f = l.d;
      r += t.scrollLeft * u, a += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, a];
}
function nx(t, r) {
  for (var a in t)
    if (t.hasOwnProperty(a)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[a][s]) return Number(a);
    }
  return -1;
}
function ua(t, r) {
  if (!t || !t.getBoundingClientRect) return ur();
  var a = t, s = !1;
  do
    if (a.clientWidth < a.scrollWidth || a.clientHeight < a.scrollHeight) {
      var l = Oe(a);
      if (a.clientWidth < a.scrollWidth && (l.overflowX == "auto" || l.overflowX == "scroll") || a.clientHeight < a.scrollHeight && (l.overflowY == "auto" || l.overflowY == "scroll")) {
        if (!a.getBoundingClientRect || a === document.body) return ur();
        if (s || r) return a;
        s = !0;
      }
    }
  while (a = a.parentNode);
  return ur();
}
function rx(t, r) {
  if (t && r)
    for (var a in r)
      r.hasOwnProperty(a) && (t[a] = r[a]);
  return t;
}
function ld(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var so;
function R0(t, r) {
  return function() {
    if (!so) {
      var a = arguments, s = this;
      a.length === 1 ? t.call(s, a[0]) : t.apply(s, a), so = setTimeout(function() {
        so = void 0;
      }, r);
    }
  };
}
function ax() {
  clearTimeout(so), so = void 0;
}
function z0(t, r, a) {
  t.scrollLeft += r, t.scrollTop += a;
}
function L0(t) {
  var r = window.Polymer, a = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : a ? a(t).clone(!0)[0] : t.cloneNode(!0);
}
function I0(t, r, a) {
  var s = {};
  return Array.from(t.children).forEach(function(l) {
    var u, f, d, h;
    if (!(!Wn(l, r.draggable, t, !1) || l.animated || l === a)) {
      var g = Dt(l);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, g.top), s.right = Math.max((d = s.right) !== null && d !== void 0 ? d : -1 / 0, g.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var yn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function ix() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(l) {
          if (!(Oe(l, "display") === "none" || l === De.ghost)) {
            t.push({
              target: l,
              rect: Dt(l)
            });
            var u = cr({}, t[t.length - 1].rect);
            if (l.thisAnimationDuration) {
              var f = Fi(l, !0);
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
      t.splice(nx(t, {
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
        var h = 0, g = d.target, v = g.fromRect, _ = Dt(g), b = g.prevFromRect, m = g.prevToRect, p = d.rect, x = Fi(g, !0);
        x && (_.top -= x.f, _.left -= x.e), g.toRect = _, g.thisAnimationDuration && ld(b, _) && !ld(v, _) && // Make sure animatingRect is on line between toRect & fromRect
        (p.top - _.top) / (p.left - _.left) === (v.top - _.top) / (v.left - _.left) && (h = ox(p, b, m, l.options)), ld(_, v) || (g.prevFromRect = v, g.prevToRect = _, h || (h = l.options.animation), l.animate(g, p, _, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, h), g.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, l, u, f) {
      if (f) {
        Oe(s, "transition", ""), Oe(s, "transform", "");
        var d = Fi(this.el), h = d && d.a, g = d && d.d, v = (l.left - u.left) / (h || 1), _ = (l.top - u.top) / (g || 1);
        s.animatingX = !!v, s.animatingY = !!_, Oe(s, "transform", "translate3d(" + v + "px," + _ + "px,0)"), this.forRepaintDummy = sx(s), Oe(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Oe(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Oe(s, "transition", ""), Oe(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function sx(t) {
  return t.offsetWidth;
}
function ox(t, r, a, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - a.top, 2) + Math.pow(r.left - a.left, 2)) * s.animation;
}
var Mi = [], ud = {
  initializeByDefault: !0
}, go = {
  mount: function(r) {
    for (var a in ud)
      ud.hasOwnProperty(a) && !(a in r) && (r[a] = ud[a]);
    Mi.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Mi.push(r);
  },
  pluginEvent: function(r, a, s) {
    var l = this;
    this.eventCanceled = !1, s.cancel = function() {
      l.eventCanceled = !0;
    };
    var u = r + "Global";
    Mi.forEach(function(f) {
      a[f.pluginName] && (a[f.pluginName][u] && a[f.pluginName][u](cr({
        sortable: a
      }, s)), a.options[f.pluginName] && a[f.pluginName][r] && a[f.pluginName][r](cr({
        sortable: a
      }, s)));
    });
  },
  initializePlugins: function(r, a, s, l) {
    Mi.forEach(function(d) {
      var h = d.pluginName;
      if (!(!r.options[h] && !d.initializeByDefault)) {
        var g = new d(r, a, r.options);
        g.sortable = r, g.options = r.options, r[h] = g, jr(s, g.defaults);
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
    return Mi.forEach(function(l) {
      typeof l.eventProperties == "function" && jr(s, l.eventProperties.call(a[l.pluginName], r));
    }), s;
  },
  modifyOption: function(r, a, s) {
    var l;
    return Mi.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[a] == "function" && (l = u.optionListeners[a].call(r[u.pluginName], s));
    }), l;
  }
};
function lx(t) {
  var r = t.sortable, a = t.rootEl, s = t.name, l = t.targetEl, u = t.cloneEl, f = t.toEl, d = t.fromEl, h = t.oldIndex, g = t.newIndex, v = t.oldDraggableIndex, _ = t.newDraggableIndex, b = t.originalEvent, m = t.putSortable, p = t.extraEventProperties;
  if (r = r || a && a[yn], !!r) {
    var x, E = r.options, A = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !Rr && !mo ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = f || a, x.from = d || a, x.item = l || a, x.clone = u, x.oldIndex = h, x.newIndex = g, x.oldDraggableIndex = v, x.newDraggableIndex = _, x.originalEvent = b, x.pullMode = m ? m.lastPutMode : void 0;
    var w = cr(cr({}, p), go.getEventProperties(s, r));
    for (var D in w)
      x[D] = w[D];
    a && a.dispatchEvent(x), E[A] && E[A].call(r, x);
  }
}
var ux = ["evt"], mn = function(r, a) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = s.evt, u = ex(s, ux);
  go.pluginEvent.bind(De)(r, a, cr({
    dragEl: ue,
    parentEl: xt,
    ghostEl: ze,
    rootEl: pt,
    nextEl: Ra,
    lastDownEl: pu,
    cloneEl: yt,
    cloneHidden: la,
    dragStarted: eo,
    putSortable: Gt,
    activeSortable: De.active,
    originalEvent: l,
    oldIndex: Pi,
    oldDraggableIndex: oo,
    newIndex: Dn,
    newDraggableIndex: oa,
    hideGhostForTarget: F0,
    unhideGhostForTarget: H0,
    cloneNowHidden: function() {
      la = !0;
    },
    cloneNowShown: function() {
      la = !1;
    },
    dispatchSortableEvent: function(d) {
      an({
        sortable: a,
        name: d,
        originalEvent: l
      });
    }
  }, u));
};
function an(t) {
  lx(cr({
    putSortable: Gt,
    cloneEl: yt,
    targetEl: ue,
    rootEl: pt,
    oldIndex: Pi,
    oldDraggableIndex: oo,
    newIndex: Dn,
    newDraggableIndex: oa
  }, t));
}
var ue, xt, ze, pt, Ra, pu, yt, la, Pi, Dn, oo, oa, kl, Gt, Ii = !1, xu = !1, Eu = [], ka, Kn, cd, fd, Bv, Uv, eo, ki, lo, uo = !1, jl = !1, mu, Qt, dd = [], Id = !1, wu = [], Lu = typeof document < "u", Rl = rh, Fv = mo || Rr ? "cssFloat" : "float", cx = Lu && !D0 && !rh && "draggable" in document.createElement("div"), P0 = (function() {
  if (Lu) {
    if (Rr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), B0 = function(r, a) {
  var s = Oe(r), l = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = qi(r, 0, a), f = qi(r, 1, a), d = u && Oe(u), h = f && Oe(f), g = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + Dt(u).width, v = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + Dt(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && d.float && d.float !== "none") {
    var _ = d.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === _) ? "vertical" : "horizontal";
  }
  return u && (d.display === "block" || d.display === "flex" || d.display === "table" || d.display === "grid" || g >= l && s[Fv] === "none" || f && s[Fv] === "none" && g + v > l) ? "vertical" : "horizontal";
}, fx = function(r, a, s) {
  var l = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, d = s ? a.left : a.top, h = s ? a.right : a.bottom, g = s ? a.width : a.height;
  return l === d || u === h || l + f / 2 === d + g / 2;
}, dx = function(r, a) {
  var s;
  return Eu.some(function(l) {
    var u = l[yn].options.emptyInsertThreshold;
    if (!(!u || ah(l))) {
      var f = Dt(l), d = r >= f.left - u && r <= f.right + u, h = a >= f.top - u && a <= f.bottom + u;
      if (d && h)
        return s = l;
    }
  }), s;
}, U0 = function(r) {
  function a(u, f) {
    return function(d, h, g, v) {
      var _ = d.options.group.name && h.options.group.name && d.options.group.name === h.options.group.name;
      if (u == null && (f || _))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return a(u(d, h, g, v), f)(d, h, g, v);
      var b = (f ? d : h).options.group.name;
      return u === !0 || typeof u == "string" && u === b || u.join && u.indexOf(b) > -1;
    };
  }
  var s = {}, l = r.group;
  (!l || hu(l) != "object") && (l = {
    name: l
  }), s.name = l.name, s.checkPull = a(l.pull, !0), s.checkPut = a(l.put), s.revertClone = l.revertClone, r.group = s;
}, F0 = function() {
  !P0 && ze && Oe(ze, "display", "none");
}, H0 = function() {
  !P0 && ze && Oe(ze, "display", "");
};
Lu && !D0 && document.addEventListener("click", function(t) {
  if (xu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), xu = !1, !1;
}, !0);
var ja = function(r) {
  if (ue) {
    r = r.touches ? r.touches[0] : r;
    var a = dx(r.clientX, r.clientY);
    if (a) {
      var s = {};
      for (var l in r)
        r.hasOwnProperty(l) && (s[l] = r[l]);
      s.target = s.rootEl = a, s.preventDefault = void 0, s.stopPropagation = void 0, a[yn]._onDragOver(s);
    }
  }
}, hx = function(r) {
  ue && ue.parentNode[yn]._isOutsideThisEl(r.target);
};
function De(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = jr({}, r), t[yn] = this;
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
      return B0(t, this.options);
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
    supportPointer: De.supportPointer !== !1 && "PointerEvent" in window && (!io || rh),
    emptyInsertThreshold: 5
  };
  go.initializePlugins(this, t, a);
  for (var s in a)
    !(s in r) && (r[s] = a[s]);
  U0(r);
  for (var l in this)
    l.charAt(0) === "_" && typeof this[l] == "function" && (this[l] = this[l].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : cx, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Xe(t, "pointerdown", this._onTapStart) : (Xe(t, "mousedown", this._onTapStart), Xe(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Xe(t, "dragover", this), Xe(t, "dragenter", this)), Eu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), jr(this, ix());
}
De.prototype = /** @lends Sortable.prototype */
{
  constructor: De,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (ki = null);
  },
  _getDirection: function(r, a) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, a, ue) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var a = this, s = this.el, l = this.options, u = l.preventOnFilter, f = r.type, d = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (d || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, v = l.filter;
      if (Sx(s), !ue && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || l.disabled) && !g.isContentEditable && !(!this.nativeDraggable && io && h && h.tagName.toUpperCase() === "SELECT") && (h = Wn(h, l.draggable, s, !1), !(h && h.animated) && pu !== h)) {
        if (Pi = Zn(h), oo = Zn(h, l.draggable), typeof v == "function") {
          if (v.call(this, r, h, this)) {
            an({
              sortable: a,
              rootEl: g,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), mn("filter", a, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (v && (v = v.split(",").some(function(_) {
          if (_ = Wn(g, _.trim(), s, !1), _)
            return an({
              sortable: a,
              rootEl: _,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), mn("filter", a, {
              evt: r
            }), !0;
        }), v)) {
          u && r.preventDefault();
          return;
        }
        l.handle && !Wn(g, l.handle, s, !1) || this._prepareDragStart(r, d, h);
      }
    }
  },
  _prepareDragStart: function(r, a, s) {
    var l = this, u = l.el, f = l.options, d = u.ownerDocument, h;
    if (s && !ue && s.parentNode === u) {
      var g = Dt(s);
      if (pt = u, ue = s, xt = ue.parentNode, Ra = ue.nextSibling, pu = s, kl = f.group, De.dragged = ue, ka = {
        target: ue,
        clientX: (a || r).clientX,
        clientY: (a || r).clientY
      }, Bv = ka.clientX - g.left, Uv = ka.clientY - g.top, this._lastX = (a || r).clientX, this._lastY = (a || r).clientY, ue.style["will-change"] = "all", h = function() {
        if (mn("delayEnded", l, {
          evt: r
        }), De.eventCanceled) {
          l._onDrop();
          return;
        }
        l._disableDelayedDragEvents(), !zv && l.nativeDraggable && (ue.draggable = !0), l._triggerDragStart(r, a), an({
          sortable: l,
          name: "choose",
          originalEvent: r
        }), On(ue, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(v) {
        j0(ue, v.trim(), hd);
      }), Xe(d, "dragover", ja), Xe(d, "mousemove", ja), Xe(d, "touchmove", ja), f.supportPointer ? (Xe(d, "pointerup", l._onDrop), !this.nativeDraggable && Xe(d, "pointercancel", l._onDrop)) : (Xe(d, "mouseup", l._onDrop), Xe(d, "touchend", l._onDrop), Xe(d, "touchcancel", l._onDrop)), zv && this.nativeDraggable && (this.options.touchStartThreshold = 4, ue.draggable = !0), mn("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || a) && (!this.nativeDraggable || !(mo || Rr))) {
        if (De.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Xe(d, "pointerup", l._disableDelayedDrag), Xe(d, "pointercancel", l._disableDelayedDrag)) : (Xe(d, "mouseup", l._disableDelayedDrag), Xe(d, "touchend", l._disableDelayedDrag), Xe(d, "touchcancel", l._disableDelayedDrag)), Xe(d, "mousemove", l._delayedDragTouchMoveHandler), Xe(d, "touchmove", l._delayedDragTouchMoveHandler), f.supportPointer && Xe(d, "pointermove", l._delayedDragTouchMoveHandler), l._dragStartTimer = setTimeout(h, f.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var a = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ue && hd(ue), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ye(r, "mouseup", this._disableDelayedDrag), Ye(r, "touchend", this._disableDelayedDrag), Ye(r, "touchcancel", this._disableDelayedDrag), Ye(r, "pointerup", this._disableDelayedDrag), Ye(r, "pointercancel", this._disableDelayedDrag), Ye(r, "mousemove", this._delayedDragTouchMoveHandler), Ye(r, "touchmove", this._delayedDragTouchMoveHandler), Ye(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, a) {
    a = a || r.pointerType == "touch" && r, !this.nativeDraggable || a ? this.options.supportPointer ? Xe(document, "pointermove", this._onTouchMove) : a ? Xe(document, "touchmove", this._onTouchMove) : Xe(document, "mousemove", this._onTouchMove) : (Xe(ue, "dragend", this), Xe(pt, "dragstart", this._onDragStart));
    try {
      document.selection ? gu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, a) {
    if (Ii = !1, pt && ue) {
      mn("dragStarted", this, {
        evt: a
      }), this.nativeDraggable && Xe(document, "dragover", hx);
      var s = this.options;
      !r && On(ue, s.dragClass, !1), On(ue, s.ghostClass, !0), De.active = this, r && this._appendGhost(), an({
        sortable: this,
        name: "start",
        originalEvent: a
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Kn) {
      this._lastX = Kn.clientX, this._lastY = Kn.clientY, F0();
      for (var r = document.elementFromPoint(Kn.clientX, Kn.clientY), a = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Kn.clientX, Kn.clientY), r !== a); )
        a = r;
      if (ue.parentNode[yn]._isOutsideThisEl(r), a)
        do {
          if (a[yn]) {
            var s = void 0;
            if (s = a[yn]._onDragOver({
              clientX: Kn.clientX,
              clientY: Kn.clientY,
              target: r,
              rootEl: a
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = a;
        } while (a = k0(a));
      H0();
    }
  },
  _onTouchMove: function(r) {
    if (ka) {
      var a = this.options, s = a.fallbackTolerance, l = a.fallbackOffset, u = r.touches ? r.touches[0] : r, f = ze && Fi(ze, !0), d = ze && f && f.a, h = ze && f && f.d, g = Rl && Qt && Pv(Qt), v = (u.clientX - ka.clientX + l.x) / (d || 1) + (g ? g[0] - dd[0] : 0) / (d || 1), _ = (u.clientY - ka.clientY + l.y) / (h || 1) + (g ? g[1] - dd[1] : 0) / (h || 1);
      if (!De.active && !Ii) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (ze) {
        f ? (f.e += v - (cd || 0), f.f += _ - (fd || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: v,
          f: _
        };
        var b = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Oe(ze, "webkitTransform", b), Oe(ze, "mozTransform", b), Oe(ze, "msTransform", b), Oe(ze, "transform", b), cd = v, fd = _, Kn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ze) {
      var r = this.options.fallbackOnBody ? document.body : pt, a = Dt(ue, !0, Rl, !0, r), s = this.options;
      if (Rl) {
        for (Qt = r; Oe(Qt, "position") === "static" && Oe(Qt, "transform") === "none" && Qt !== document; )
          Qt = Qt.parentNode;
        Qt !== document.body && Qt !== document.documentElement ? (Qt === document && (Qt = ur()), a.top += Qt.scrollTop, a.left += Qt.scrollLeft) : Qt = ur(), dd = Pv(Qt);
      }
      ze = ue.cloneNode(!0), On(ze, s.ghostClass, !1), On(ze, s.fallbackClass, !0), On(ze, s.dragClass, !0), Oe(ze, "transition", ""), Oe(ze, "transform", ""), Oe(ze, "box-sizing", "border-box"), Oe(ze, "margin", 0), Oe(ze, "top", a.top), Oe(ze, "left", a.left), Oe(ze, "width", a.width), Oe(ze, "height", a.height), Oe(ze, "opacity", "0.8"), Oe(ze, "position", Rl ? "absolute" : "fixed"), Oe(ze, "zIndex", "100000"), Oe(ze, "pointerEvents", "none"), De.ghost = ze, r.appendChild(ze), Oe(ze, "transform-origin", Bv / parseInt(ze.style.width) * 100 + "% " + Uv / parseInt(ze.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, a) {
    var s = this, l = r.dataTransfer, u = s.options;
    if (mn("dragStart", this, {
      evt: r
    }), De.eventCanceled) {
      this._onDrop();
      return;
    }
    mn("setupClone", this), De.eventCanceled || (yt = L0(ue), yt.removeAttribute("id"), yt.draggable = !1, yt.style["will-change"] = "", this._hideClone(), On(yt, this.options.chosenClass, !1), De.clone = yt), s.cloneId = gu(function() {
      mn("clone", s), !De.eventCanceled && (s.options.removeCloneOnHide || pt.insertBefore(yt, ue), s._hideClone(), an({
        sortable: s,
        name: "clone"
      }));
    }), !a && On(ue, u.dragClass, !0), a ? (xu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Ye(document, "mouseup", s._onDrop), Ye(document, "touchend", s._onDrop), Ye(document, "touchcancel", s._onDrop), l && (l.effectAllowed = "move", u.setData && u.setData.call(s, l, ue)), Xe(document, "drop", s), Oe(ue, "transform", "translateZ(0)")), Ii = !0, s._dragStartId = gu(s._dragStarted.bind(s, a, r)), Xe(document, "selectstart", s), eo = !0, window.getSelection().removeAllRanges(), io && Oe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var a = this.el, s = r.target, l, u, f, d = this.options, h = d.group, g = De.active, v = kl === h, _ = d.sort, b = Gt || g, m, p = this, x = !1;
    if (Id) return;
    function E(me, Le) {
      mn(me, p, cr({
        evt: r,
        isOwner: v,
        axis: m ? "vertical" : "horizontal",
        revert: f,
        dragRect: l,
        targetRect: u,
        canSort: _,
        fromSortable: b,
        target: s,
        completed: w,
        onMove: function(J, ie) {
          return zl(pt, a, ue, l, J, Dt(J), r, ie);
        },
        changed: D
      }, Le));
    }
    function A() {
      E("dragOverAnimationCapture"), p.captureAnimationState(), p !== b && b.captureAnimationState();
    }
    function w(me) {
      return E("dragOverCompleted", {
        insertion: me
      }), me && (v ? g._hideClone() : g._showClone(p), p !== b && (On(ue, Gt ? Gt.options.ghostClass : g.options.ghostClass, !1), On(ue, d.ghostClass, !0)), Gt !== p && p !== De.active ? Gt = p : p === De.active && Gt && (Gt = null), b === p && (p._ignoreWhileAnimating = s), p.animateAll(function() {
        E("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (s === ue && !ue.animated || s === a && !s.animated) && (ki = null), !d.dragoverBubble && !r.rootEl && s !== document && (ue.parentNode[yn]._isOutsideThisEl(r.target), !me && ja(r)), !d.dragoverBubble && r.stopPropagation && r.stopPropagation(), x = !0;
    }
    function D() {
      Dn = Zn(ue), oa = Zn(ue, d.draggable), an({
        sortable: p,
        name: "change",
        toEl: a,
        newIndex: Dn,
        newDraggableIndex: oa,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Wn(s, d.draggable, a, !0), E("dragOver"), De.eventCanceled) return x;
    if (ue.contains(r.target) || s.animated && s.animatingX && s.animatingY || p._ignoreWhileAnimating === s)
      return w(!1);
    if (xu = !1, g && !d.disabled && (v ? _ || (f = xt !== pt) : Gt === this || (this.lastPutMode = kl.checkPull(this, g, ue, r)) && h.checkPut(this, g, ue, r))) {
      if (m = this._getDirection(r, s) === "vertical", l = Dt(ue), E("dragOverValid"), De.eventCanceled) return x;
      if (f)
        return xt = pt, A(), this._hideClone(), E("revert"), De.eventCanceled || (Ra ? pt.insertBefore(ue, Ra) : pt.appendChild(ue)), w(!0);
      var C = ah(a, d.draggable);
      if (!C || vx(r, m, this) && !C.animated) {
        if (C === ue)
          return w(!1);
        if (C && a === r.target && (s = C), s && (u = Dt(s)), zl(pt, a, ue, l, s, u, r, !!s) !== !1)
          return A(), C && C.nextSibling ? a.insertBefore(ue, C.nextSibling) : a.appendChild(ue), xt = a, D(), w(!0);
      } else if (C && gx(r, m, this)) {
        var T = qi(a, 0, d, !0);
        if (T === ue)
          return w(!1);
        if (s = T, u = Dt(s), zl(pt, a, ue, l, s, u, r, !1) !== !1)
          return A(), a.insertBefore(ue, T), xt = a, D(), w(!0);
      } else if (s.parentNode === a) {
        u = Dt(s);
        var M = 0, R, L = ue.parentNode !== a, Y = !fx(ue.animated && ue.toRect || l, s.animated && s.toRect || u, m), U = m ? "top" : "left", q = Iv(s, "top", "top") || Iv(ue, "top", "top"), Q = q ? q.scrollTop : void 0;
        ki !== s && (R = u[U], uo = !1, jl = !Y && d.invertSwap || L), M = yx(r, s, u, m, Y ? 1 : d.swapThreshold, d.invertedSwapThreshold == null ? d.swapThreshold : d.invertedSwapThreshold, jl, ki === s);
        var pe;
        if (M !== 0) {
          var fe = Zn(ue);
          do
            fe -= M, pe = xt.children[fe];
          while (pe && (Oe(pe, "display") === "none" || pe === ze));
        }
        if (M === 0 || pe === s)
          return w(!1);
        ki = s, lo = M;
        var _e = s.nextElementSibling, P = !1;
        P = M === 1;
        var ae = zl(pt, a, ue, l, s, u, r, P);
        if (ae !== !1)
          return (ae === 1 || ae === -1) && (P = ae === 1), Id = !0, setTimeout(mx, 30), A(), P && !_e ? a.appendChild(ue) : s.parentNode.insertBefore(ue, P ? _e : s), q && z0(q, 0, Q - q.scrollTop), xt = ue.parentNode, R !== void 0 && !jl && (mu = Math.abs(R - Dt(s)[U])), D(), w(!0);
      }
      if (a.contains(ue))
        return w(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ye(document, "mousemove", this._onTouchMove), Ye(document, "touchmove", this._onTouchMove), Ye(document, "pointermove", this._onTouchMove), Ye(document, "dragover", ja), Ye(document, "mousemove", ja), Ye(document, "touchmove", ja);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Ye(r, "mouseup", this._onDrop), Ye(r, "touchend", this._onDrop), Ye(r, "pointerup", this._onDrop), Ye(r, "pointercancel", this._onDrop), Ye(r, "touchcancel", this._onDrop), Ye(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var a = this.el, s = this.options;
    if (Dn = Zn(ue), oa = Zn(ue, s.draggable), mn("drop", this, {
      evt: r
    }), xt = ue && ue.parentNode, Dn = Zn(ue), oa = Zn(ue, s.draggable), De.eventCanceled) {
      this._nulling();
      return;
    }
    Ii = !1, jl = !1, uo = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Pd(this.cloneId), Pd(this._dragStartId), this.nativeDraggable && (Ye(document, "drop", this), Ye(a, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), io && Oe(document.body, "user-select", ""), Oe(ue, "transform", ""), r && (eo && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), ze && ze.parentNode && ze.parentNode.removeChild(ze), (pt === xt || Gt && Gt.lastPutMode !== "clone") && yt && yt.parentNode && yt.parentNode.removeChild(yt), ue && (this.nativeDraggable && Ye(ue, "dragend", this), hd(ue), ue.style["will-change"] = "", eo && !Ii && On(ue, Gt ? Gt.options.ghostClass : this.options.ghostClass, !1), On(ue, this.options.chosenClass, !1), an({
      sortable: this,
      name: "unchoose",
      toEl: xt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), pt !== xt ? (Dn >= 0 && (an({
      rootEl: xt,
      name: "add",
      toEl: xt,
      fromEl: pt,
      originalEvent: r
    }), an({
      sortable: this,
      name: "remove",
      toEl: xt,
      originalEvent: r
    }), an({
      rootEl: xt,
      name: "sort",
      toEl: xt,
      fromEl: pt,
      originalEvent: r
    }), an({
      sortable: this,
      name: "sort",
      toEl: xt,
      originalEvent: r
    })), Gt && Gt.save()) : Dn !== Pi && Dn >= 0 && (an({
      sortable: this,
      name: "update",
      toEl: xt,
      originalEvent: r
    }), an({
      sortable: this,
      name: "sort",
      toEl: xt,
      originalEvent: r
    })), De.active && ((Dn == null || Dn === -1) && (Dn = Pi, oa = oo), an({
      sortable: this,
      name: "end",
      toEl: xt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    mn("nulling", this), pt = ue = xt = ze = Ra = yt = pu = la = ka = Kn = eo = Dn = oa = Pi = oo = ki = lo = Gt = kl = De.dragged = De.ghost = De.clone = De.active = null, wu.forEach(function(r) {
      r.checked = !0;
    }), wu.length = cd = fd = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        ue && (this._onDragOver(r), px(r));
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
      a = s[l], Wn(a, f.draggable, this.el, !1) && r.push(a.getAttribute(f.dataIdAttr) || _x(a));
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
      Wn(d, this.options.draggable, l, !1) && (s[u] = d);
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
    return Wn(r, a || this.options.draggable, this.el, !1);
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
    var l = go.modifyOption(this, r, a);
    typeof l < "u" ? s[r] = l : s[r] = a, r === "group" && U0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    mn("destroy", this);
    var r = this.el;
    r[yn] = null, Ye(r, "mousedown", this._onTapStart), Ye(r, "touchstart", this._onTapStart), Ye(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ye(r, "dragover", this), Ye(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(a) {
      a.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Eu.splice(Eu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!la) {
      if (mn("hideClone", this), De.eventCanceled) return;
      Oe(yt, "display", "none"), this.options.removeCloneOnHide && yt.parentNode && yt.parentNode.removeChild(yt), la = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (la) {
      if (mn("showClone", this), De.eventCanceled) return;
      ue.parentNode == pt && !this.options.group.revertClone ? pt.insertBefore(yt, ue) : Ra ? pt.insertBefore(yt, Ra) : pt.appendChild(yt), this.options.group.revertClone && this.animate(ue, yt), Oe(yt, "display", ""), la = !1;
    }
  }
};
function px(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function zl(t, r, a, s, l, u, f, d) {
  var h, g = t[yn], v = g.options.onMove, _;
  return window.CustomEvent && !Rr && !mo ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = a, h.draggedRect = s, h.related = l || r, h.relatedRect = u || Dt(r), h.willInsertAfter = d, h.originalEvent = f, t.dispatchEvent(h), v && (_ = v.call(g, h, f)), _;
}
function hd(t) {
  t.draggable = !1;
}
function mx() {
  Id = !1;
}
function gx(t, r, a) {
  var s = Dt(qi(a.el, 0, a.options, !0)), l = I0(a.el, a.options, ze), u = 10;
  return r ? t.clientX < l.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < l.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function vx(t, r, a) {
  var s = Dt(ah(a.el, a.options.draggable)), l = I0(a.el, a.options, ze), u = 10;
  return r ? t.clientX > l.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > l.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function yx(t, r, a, s, l, u, f, d) {
  var h = s ? t.clientY : t.clientX, g = s ? a.height : a.width, v = s ? a.top : a.left, _ = s ? a.bottom : a.right, b = !1;
  if (!f) {
    if (d && mu < g * l) {
      if (!uo && (lo === 1 ? h > v + g * u / 2 : h < _ - g * u / 2) && (uo = !0), uo)
        b = !0;
      else if (lo === 1 ? h < v + mu : h > _ - mu)
        return -lo;
    } else if (h > v + g * (1 - l) / 2 && h < _ - g * (1 - l) / 2)
      return bx(r);
  }
  return b = b || f, b && (h < v + g * u / 2 || h > _ - g * u / 2) ? h > v + g / 2 ? 1 : -1 : 0;
}
function bx(t) {
  return Zn(ue) < Zn(t) ? 1 : -1;
}
function _x(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, a = r.length, s = 0; a--; )
    s += r.charCodeAt(a);
  return s.toString(36);
}
function Sx(t) {
  wu.length = 0;
  for (var r = t.getElementsByTagName("input"), a = r.length; a--; ) {
    var s = r[a];
    s.checked && wu.push(s);
  }
}
function gu(t) {
  return setTimeout(t, 0);
}
function Pd(t) {
  return clearTimeout(t);
}
Lu && Xe(document, "touchmove", function(t) {
  (De.active || Ii) && t.cancelable && t.preventDefault();
});
De.utils = {
  on: Xe,
  off: Ye,
  css: Oe,
  find: j0,
  is: function(r, a) {
    return !!Wn(r, a, r, !1);
  },
  extend: rx,
  throttle: R0,
  closest: Wn,
  toggleClass: On,
  clone: L0,
  index: Zn,
  nextTick: gu,
  cancelNextTick: Pd,
  detectDirection: B0,
  getChild: qi,
  expando: yn
};
De.get = function(t) {
  return t[yn];
};
De.mount = function() {
  for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
    r[a] = arguments[a];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (De.utils = cr(cr({}, De.utils), s.utils)), go.mount(s);
  });
};
De.create = function(t, r) {
  return new De(t, r);
};
De.version = tx;
var Ot = [], to, Bd, Ud = !1, pd, md, Cu, no;
function xx() {
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
      this.sortable.nativeDraggable ? Xe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Xe(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Xe(document, "touchmove", this._handleFallbackAutoScroll) : Xe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(a) {
      var s = a.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ye(document, "dragover", this._handleAutoScroll) : (Ye(document, "pointermove", this._handleFallbackAutoScroll), Ye(document, "touchmove", this._handleFallbackAutoScroll), Ye(document, "mousemove", this._handleFallbackAutoScroll)), Hv(), vu(), ax();
    },
    nulling: function() {
      Cu = Bd = to = Ud = no = pd = md = null, Ot.length = 0;
    },
    _handleFallbackAutoScroll: function(a) {
      this._handleAutoScroll(a, !0);
    },
    _handleAutoScroll: function(a, s) {
      var l = this, u = (a.touches ? a.touches[0] : a).clientX, f = (a.touches ? a.touches[0] : a).clientY, d = document.elementFromPoint(u, f);
      if (Cu = a, s || this.options.forceAutoScrollFallback || mo || Rr || io) {
        gd(a, this.options, d, s);
        var h = ua(d, !0);
        Ud && (!no || u !== pd || f !== md) && (no && Hv(), no = setInterval(function() {
          var g = ua(document.elementFromPoint(u, f), !0);
          g !== h && (h = g, vu()), gd(a, l.options, g, s);
        }, 10), pd = u, md = f);
      } else {
        if (!this.options.bubbleScroll || ua(d, !0) === ur()) {
          vu();
          return;
        }
        gd(a, this.options, ua(d, !1), !1);
      }
    }
  }, jr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function vu() {
  Ot.forEach(function(t) {
    clearInterval(t.pid);
  }), Ot = [];
}
function Hv() {
  clearInterval(no);
}
var gd = R0(function(t, r, a, s) {
  if (r.scroll) {
    var l = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, d = r.scrollSpeed, h = ur(), g = !1, v;
    Bd !== a && (Bd = a, vu(), to = r.scroll, v = r.scrollFn, to === !0 && (to = ua(a, !0)));
    var _ = 0, b = to;
    do {
      var m = b, p = Dt(m), x = p.top, E = p.bottom, A = p.left, w = p.right, D = p.width, C = p.height, T = void 0, M = void 0, R = m.scrollWidth, L = m.scrollHeight, Y = Oe(m), U = m.scrollLeft, q = m.scrollTop;
      m === h ? (T = D < R && (Y.overflowX === "auto" || Y.overflowX === "scroll" || Y.overflowX === "visible"), M = C < L && (Y.overflowY === "auto" || Y.overflowY === "scroll" || Y.overflowY === "visible")) : (T = D < R && (Y.overflowX === "auto" || Y.overflowX === "scroll"), M = C < L && (Y.overflowY === "auto" || Y.overflowY === "scroll"));
      var Q = T && (Math.abs(w - l) <= f && U + D < R) - (Math.abs(A - l) <= f && !!U), pe = M && (Math.abs(E - u) <= f && q + C < L) - (Math.abs(x - u) <= f && !!q);
      if (!Ot[_])
        for (var fe = 0; fe <= _; fe++)
          Ot[fe] || (Ot[fe] = {});
      (Ot[_].vx != Q || Ot[_].vy != pe || Ot[_].el !== m) && (Ot[_].el = m, Ot[_].vx = Q, Ot[_].vy = pe, clearInterval(Ot[_].pid), (Q != 0 || pe != 0) && (g = !0, Ot[_].pid = setInterval((function() {
        s && this.layer === 0 && De.active._onTouchMove(Cu);
        var _e = Ot[this.layer].vy ? Ot[this.layer].vy * d : 0, P = Ot[this.layer].vx ? Ot[this.layer].vx * d : 0;
        typeof v == "function" && v.call(De.dragged.parentNode[yn], P, _e, t, Cu, Ot[this.layer].el) !== "continue" || z0(Ot[this.layer].el, P, _e);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && b !== h && (b = ua(b, !1)));
    Ud = g;
  }
}, 30), q0 = function(r) {
  var a = r.originalEvent, s = r.putSortable, l = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, d = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (a) {
    var g = s || u;
    d();
    var v = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, _ = document.elementFromPoint(v.clientX, v.clientY);
    h(), g && !g.el.contains(_) && (f("spill"), this.onSpill({
      dragEl: l,
      putSortable: s
    }));
  }
};
function ih() {
}
ih.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var a = r.oldDraggableIndex;
    this.startIndex = a;
  },
  onSpill: function(r) {
    var a = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var l = qi(this.sortable.el, this.startIndex, this.options);
    l ? this.sortable.el.insertBefore(a, l) : this.sortable.el.appendChild(a), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: q0
};
jr(ih, {
  pluginName: "revertOnSpill"
});
function sh() {
}
sh.prototype = {
  onSpill: function(r) {
    var a = r.dragEl, s = r.putSortable, l = s || this.sortable;
    l.captureAnimationState(), a.parentNode && a.parentNode.removeChild(a), l.animateAll();
  },
  drop: q0
};
jr(sh, {
  pluginName: "removeOnSpill"
});
De.mount(new xx());
De.mount(sh, ih);
async function Ex({
  entry: t,
  selectedWorldName: r,
  skipSave: a = !1,
  skipReload: s = !1,
  operation: l = "auto"
}) {
  const u = SillyTavern.getContext(), f = await u.loadWorldInfo(r);
  if (!f)
    throw new Error("Failed to load world info");
  const d = Object.values(f.entries), h = d.length > 0 ? d[d.length - 1] : void 0;
  let g;
  if (l === "update" || l === "auto") {
    const _ = Object.values(f.entries).find((b) => b.uid === t.uid);
    if (_)
      (l === "auto" || l === "update") && (g = _);
    else if (l === "update")
      throw new Error("Entry not found for update operation");
  }
  const v = g ? "update" : "add";
  if (!g) {
    if (g = YS(r, f), !g)
      throw new Error("Failed to create entry");
    if (h) {
      const _ = g.uid;
      Object.assign(g, h), g.uid = _;
    }
  }
  return g.key = t.key, g.content = t.content, g.comment = t.comment, a || await u.saveWorldInfo(r, f), s || u.reloadWorldInfoEditor(r, !0), {
    entry: g,
    operation: v
  };
}
const Fd = `=======

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

=======`, oh = `{{#if characters}}
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
{{/if}}`, wx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, Cx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, Nx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, lh = "{{activeFormatInstructions}}", Z0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, G0 = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, co = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, Ax = `## User's Persona Description
name: {{user}}
{{persona}}`, uh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, Tx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", Ox = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML structure in a markdown code block (```xml\\n...\\n```).\n2.  Every element MUST be nested inside a single top-level <root> element. XML permits only one root node.\n3.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n4.  The XML inside the code block MUST be well-formed. Escape &, < and > inside text as &amp;, &lt; and &gt;.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n<root>\n{{example_response}}\n</root>\n```", Dx = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, V0 = "You are a creative writing assistant helping brainstorm and design a character. Engage in freeform discussion about character concepts, personality traits, backstory ideas, world-building, and narrative design. Be collaborative, offer suggestions, and help refine ideas through conversation.", Y0 = `=== TASK: DRAFT CHARACTER CARD FIELDS FROM THIS CONVERSATION ===

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

In \`justification\`, briefly tell the user which fields you filled in and any choice you had to make between competing ideas from the conversation.`, X0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Mx = X0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", kx = "[" + X0 + "][" + Mx + "]*", jx = new RegExp("^" + kx + "$");
function $0(t, r) {
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
  const r = jx.exec(t);
  return !(r === null || typeof r > "u");
};
function Rx(t) {
  return typeof t < "u";
}
const zx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function Q0(t, r) {
  r = Object.assign({}, zx, r);
  const a = [];
  let s = !1, l = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Zv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = Gv(t, u);
        continue;
      } else {
        let d = !1;
        t[u] === "/" && (d = !0, u++);
        let h = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          h += t[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !qx(h)) {
          let _;
          return h.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + h + "' is an invalid name.", Ct("InvalidTag", _, sn(t, u));
        }
        const g = Px(t, u);
        if (g === !1)
          return Ct("InvalidAttr", "Attributes for '" + h + "' have open quote.", sn(t, u));
        let v = g.value;
        if (u = g.index, v[v.length - 1] === "/") {
          const _ = u - v.length;
          v = v.substring(0, v.length - 1);
          const b = Vv(v, r);
          if (b === !0)
            s = !0;
          else
            return Ct(b.err.code, b.err.msg, sn(t, _ + b.err.line));
        } else if (d)
          if (g.tagClosed) {
            if (v.trim().length > 0)
              return Ct("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", sn(t, f));
            if (a.length === 0)
              return Ct("InvalidTag", "Closing tag '" + h + "' has not been opened.", sn(t, f));
            {
              const _ = a.pop();
              if (h !== _.tagName) {
                let b = sn(t, _.tagStartPos);
                return Ct(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + b.line + ", col " + b.col + ") instead of closing tag '" + h + "'.",
                  sn(t, f)
                );
              }
              a.length == 0 && (l = !0);
            }
          } else return Ct("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", sn(t, u));
        else {
          const _ = Vv(v, r);
          if (_ !== !0)
            return Ct(_.err.code, _.err.msg, sn(t, u - v.length + _.err.line));
          if (l === !0)
            return Ct("InvalidXml", "Multiple possible root nodes found.", sn(t, u));
          r.unpairedTags.indexOf(h) !== -1 || a.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = Gv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Zv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = Fx(t, u);
            if (_ == -1)
              return Ct("InvalidChar", "char '&' is not expected.", sn(t, u));
            u = _;
          } else if (l === !0 && !qv(t[u]))
            return Ct("InvalidXml", "Extra text at the end", sn(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (qv(t[u]))
        continue;
      return Ct("InvalidChar", "char '" + t[u] + "' is not expected.", sn(t, u));
    }
  if (s) {
    if (a.length == 1)
      return Ct("InvalidTag", "Unclosed tag '" + a[0].tagName + "'.", sn(t, a[0].tagStartPos));
    if (a.length > 0)
      return Ct("InvalidXml", "Invalid '" + JSON.stringify(a.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return Ct("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function qv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Zv(t, r) {
  const a = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(a, r - a);
      if (r > 5 && s === "xml")
        return Ct("InvalidXml", "XML declaration allowed only at the start of the document.", sn(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Gv(t, r) {
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
const Lx = '"', Ix = "'";
function Px(t, r) {
  let a = "", s = "", l = !1;
  for (; r < t.length; r++) {
    if (t[r] === Lx || t[r] === Ix)
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
const Bx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Vv(t, r) {
  const a = $0(t, Bx), s = {};
  for (let l = 0; l < a.length; l++) {
    if (a[l][1].length === 0)
      return Ct("InvalidAttr", "Attribute '" + a[l][2] + "' has no space in starting.", Vs(a[l]));
    if (a[l][3] !== void 0 && a[l][4] === void 0)
      return Ct("InvalidAttr", "Attribute '" + a[l][2] + "' is without value.", Vs(a[l]));
    if (a[l][3] === void 0 && !r.allowBooleanAttributes)
      return Ct("InvalidAttr", "boolean attribute '" + a[l][2] + "' is not allowed.", Vs(a[l]));
    const u = a[l][2];
    if (!Hx(u))
      return Ct("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Vs(a[l]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return Ct("InvalidAttr", "Attribute '" + u + "' is repeated.", Vs(a[l]));
  }
  return !0;
}
function Ux(t, r) {
  let a = /\d/;
  for (t[r] === "x" && (r++, a = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(a))
      break;
  }
  return -1;
}
function Fx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, Ux(t, r);
  let a = 0;
  for (; r < t.length; r++, a++)
    if (!(t[r].match(/\w/) && a < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function Ct(t, r, a) {
  return {
    err: {
      code: t,
      msg: r,
      line: a.line || a,
      col: a.col
    }
  };
}
function Hx(t) {
  return ch(t);
}
function qx(t) {
  return ch(t);
}
function sn(t, r) {
  const a = t.substring(0, r).split(/\r?\n/);
  return {
    line: a.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: a[a.length - 1].length + 1
  };
}
function Vs(t) {
  return t.startIndex + t[1].length;
}
const Zx = {
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
}, Gx = function(t) {
  return Object.assign({}, Zx, t);
};
class Ys {
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
function Vx(t, r) {
  const a = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, l = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (l && $x(t, r)) {
          r += 7;
          let d, h;
          [d, h, r] = Yx(t, r + 1), h.indexOf("&") === -1 && (a[Wx(d)] = {
            regx: RegExp(`&${d};`, "g"),
            val: h
          });
        } else if (l && Qx(t, r)) r += 8;
        else if (l && Kx(t, r)) r += 8;
        else if (l && Jx(t, r)) r += 9;
        else if (Xx) u = !0;
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
function Yx(t, r) {
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
function Xx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function $x(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Qx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Kx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function Jx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function Wx(t) {
  if (ch(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const eE = /^[-+]?0x[a-fA-F0-9]+$/, tE = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, nE = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function rE(t, r = {}) {
  if (r = Object.assign({}, nE, r), !t || typeof t != "string") return t;
  let a = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(a)) return t;
  if (t === "0") return 0;
  if (r.hex && eE.test(a))
    return iE(a, 16);
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
    const s = tE.exec(a);
    if (s) {
      const l = s[1], u = s[2];
      let f = aE(s[3]);
      if (!r.leadingZeros && u.length > 0 && l && a[2] !== ".") return t;
      if (!r.leadingZeros && u.length > 0 && !l && a[1] !== ".") return t;
      if (r.leadingZeros && u === t) return 0;
      {
        const d = Number(a), h = "" + d;
        return h.search(/[eE]/) !== -1 ? r.eNotation ? d : t : a.indexOf(".") !== -1 ? h === "0" && f === "" || h === f || l && h === "-" + f ? d : t : u ? f === h || l + f === h ? d : t : a === h || a === l + h ? d : t;
      }
    } else
      return t;
  }
}
function aE(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function iE(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function sE(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const a of t)
      if (typeof a == "string" && r === a || a instanceof RegExp && a.test(r))
        return !0;
  } : () => !1;
}
class oE {
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
    }, this.addExternalEntities = lE, this.parseXml = hE, this.parseTextData = uE, this.resolveNameSpace = cE, this.buildAttributesMap = dE, this.isItStopNode = vE, this.replaceEntitiesValue = mE, this.readStopNodeData = bE, this.saveTextToParentTag = gE, this.addChild = pE, this.ignoreAttributesFn = sE(this.options.ignoreAttributes);
  }
}
function lE(t) {
  const r = Object.keys(t);
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function uE(t, r, a, s, l, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const d = this.options.tagValueProcessor(r, t, a, l, u);
    return d == null ? t : typeof d != typeof t || d !== t ? d : this.options.trimValues ? qd(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? qd(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function cE(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), a = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = a + r[1]);
  }
  return t;
}
const fE = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function dE(t, r, a) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = $0(t, fE), l = s.length, u = {};
    for (let f = 0; f < l; f++) {
      const d = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(d, r))
        continue;
      let h = s[f][4], g = this.options.attributeNamePrefix + d;
      if (d.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const v = this.options.attributeValueProcessor(d, h, r);
          v == null ? u[g] = h : typeof v != typeof h || v !== h ? u[g] = v : u[g] = qd(
            h,
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
const hE = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new Ys("!xml");
  let a = r, s = "", l = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const d = Ia(t, ">", u, "Closing Tag is not closed.");
        let h = t.substring(u + 2, d).trim();
        if (this.options.removeNSPrefix) {
          const _ = h.indexOf(":");
          _ !== -1 && (h = h.substr(_ + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), a && (s = this.saveTextToParentTag(s, a, l));
        const g = l.substring(l.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let v = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (v = l.lastIndexOf(".", l.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : v = l.lastIndexOf("."), l = l.substring(0, v), a = this.tagsNodeStack.pop(), s = "", u = d;
      } else if (t[u + 1] === "?") {
        let d = Hd(t, u, !1, "?>");
        if (!d) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, a, l), !(this.options.ignoreDeclaration && d.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new Ys(d.tagName);
          h.add(this.options.textNodeName, ""), d.tagName !== d.tagExp && d.attrExpPresent && (h[":@"] = this.buildAttributesMap(d.tagExp, l, d.tagName)), this.addChild(a, h, l);
        }
        u = d.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const d = Ia(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = t.substring(u + 4, d - 2);
          s = this.saveTextToParentTag(s, a, l), a.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = d;
      } else if (t.substr(u + 1, 2) === "!D") {
        const d = Vx(t, u);
        this.docTypeEntities = d.entities, u = d.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const d = Ia(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, d);
        s = this.saveTextToParentTag(s, a, l);
        let g = this.parseTextData(h, a.tagname, l, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? a.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : a.add(this.options.textNodeName, g), u = d + 2;
      } else {
        let d = Hd(t, u, this.options.removeNSPrefix), h = d.tagName;
        const g = d.rawTagName;
        let v = d.tagExp, _ = d.attrExpPresent, b = d.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), a && s && a.tagname !== "!xml" && (s = this.saveTextToParentTag(s, a, l, !1));
        const m = a;
        if (m && this.options.unpairedTags.indexOf(m.tagname) !== -1 && (a = this.tagsNodeStack.pop(), l = l.substring(0, l.lastIndexOf("."))), h !== r.tagname && (l += l ? "." + h : h), this.isItStopNode(this.options.stopNodes, l, h)) {
          let p = "";
          if (v.length > 0 && v.lastIndexOf("/") === v.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), l = l.substr(0, l.length - 1), v = h) : v = v.substr(0, v.length - 1), u = d.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = d.closeIndex;
          else {
            const E = this.readStopNodeData(t, g, b + 1);
            if (!E) throw new Error(`Unexpected end of ${g}`);
            u = E.i, p = E.tagContent;
          }
          const x = new Ys(h);
          h !== v && _ && (x[":@"] = this.buildAttributesMap(v, l, h)), p && (p = this.parseTextData(p, h, l, !0, _, !0, !0)), l = l.substr(0, l.lastIndexOf(".")), x.add(this.options.textNodeName, p), this.addChild(a, x, l);
        } else {
          if (v.length > 0 && v.lastIndexOf("/") === v.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), l = l.substr(0, l.length - 1), v = h) : v = v.substr(0, v.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const p = new Ys(h);
            h !== v && _ && (p[":@"] = this.buildAttributesMap(v, l, h)), this.addChild(a, p, l), l = l.substr(0, l.lastIndexOf("."));
          } else {
            const p = new Ys(h);
            this.tagsNodeStack.push(a), h !== v && _ && (p[":@"] = this.buildAttributesMap(v, l, h)), this.addChild(a, p, l), a = p;
          }
          s = "", u = b;
        }
      }
    else
      s += t[u];
  return r.child;
};
function pE(t, r, a) {
  const s = this.options.updateTag(r.tagname, a, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const mE = function(t) {
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
function gE(t, r, a, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    a,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function vE(t, r, a) {
  const s = "*." + a;
  for (const l in t) {
    const u = t[l];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function yE(t, r, a = ">") {
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
function Ia(t, r, a, s) {
  const l = t.indexOf(r, a);
  if (l === -1)
    throw new Error(s);
  return l + r.length - 1;
}
function Hd(t, r, a, s = ">") {
  const l = yE(t, r + 1, s);
  if (!l) return;
  let u = l.data;
  const f = l.index, d = u.search(/\s/);
  let h = u, g = !0;
  d !== -1 && (h = u.substring(0, d), u = u.substring(d + 1).trimStart());
  const v = h;
  if (a) {
    const _ = h.indexOf(":");
    _ !== -1 && (h = h.substr(_ + 1), g = h !== l.data.substr(_ + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: g,
    rawTagName: v
  };
}
function bE(t, r, a) {
  const s = a;
  let l = 1;
  for (; a < t.length; a++)
    if (t[a] === "<")
      if (t[a + 1] === "/") {
        const u = Ia(t, ">", a, `${r} is not closed`);
        if (t.substring(a + 2, u).trim() === r && (l--, l === 0))
          return {
            tagContent: t.substring(s, a),
            i: u
          };
        a = u;
      } else if (t[a + 1] === "?")
        a = Ia(t, "?>", a + 1, "StopNode is not closed.");
      else if (t.substr(a + 1, 3) === "!--")
        a = Ia(t, "-->", a + 3, "StopNode is not closed.");
      else if (t.substr(a + 1, 2) === "![")
        a = Ia(t, "]]>", a, "StopNode is not closed.") - 2;
      else {
        const u = Hd(t, a, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && l++, a = u.closeIndex);
      }
}
function qd(t, r, a) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : rE(t, a);
  } else
    return Rx(t) ? t : "";
}
function _E(t, r) {
  return K0(t, r);
}
function K0(t, r, a) {
  let s;
  const l = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], d = SE(f);
    let h = "";
    if (a === void 0 ? h = d : h = a + "." + d, d === r.textNodeName)
      s === void 0 ? s = f[d] : s += "" + f[d];
    else {
      if (d === void 0)
        continue;
      if (f[d]) {
        let g = K0(f[d], r, h);
        const v = EE(g, r);
        f[":@"] ? xE(g, f[":@"], h, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), l[d] !== void 0 && l.hasOwnProperty(d) ? (Array.isArray(l[d]) || (l[d] = [l[d]]), l[d].push(g)) : r.isArray(d, h, v) ? l[d] = [g] : l[d] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (l[r.textNodeName] = s) : s !== void 0 && (l[r.textNodeName] = s), l;
}
function SE(t) {
  const r = Object.keys(t);
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (s !== ":@") return s;
  }
}
function xE(t, r, a, s) {
  if (r) {
    const l = Object.keys(r), u = l.length;
    for (let f = 0; f < u; f++) {
      const d = l[f];
      s.isArray(d, a + "." + d, !0, !0) ? t[d] = [r[d]] : t[d] = r[d];
    }
  }
}
function EE(t, r) {
  const { textNodeName: a } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[a] || typeof t[a] == "boolean" || t[a] === 0));
}
class wE {
  constructor(r) {
    this.externalEntities = {}, this.options = Gx(r);
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
      const u = Q0(r, a);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new oE(this.options);
    s.addExternalEntities(this.externalEntities);
    const l = s.parseXml(r);
    return this.options.preserveOrder || l === void 0 ? l : _E(l, this.options);
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
const CE = {
  validate: Q0
}, NE = new wE({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function Zd(t, r) {
  if (!(!r || !t || !r.properties))
    for (const a in r.properties) {
      if (!t.hasOwnProperty(a)) continue;
      const s = r.properties[a];
      let l = t[a];
      s.type === "array" && !Array.isArray(l) && (l = [l], t[a] = l), s.type === "object" && typeof l == "object" && l !== null ? Zd(l, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(l) && l.forEach((u) => Zd(u, s.items)), s.type === "string" && typeof l != "string" ? t[a] = String(l) : s.type === "array" && s.items?.type === "string" && Array.isArray(l) && (t[a] = l.map(String));
    }
}
const AE = /^```(?:\w+)?[ \t]*\r?\n?((?:(?!```)[\s\S])*?)\r?\n?```$/;
function TE(t) {
  const r = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
  let a, s = null;
  for (; (a = r.exec(t)) !== null; )
    s = a[1].trim();
  return s;
}
function Pa(t) {
  if (t == null)
    return "";
  if (typeof t != "object")
    return String(t).trim();
  if ("#text" in t)
    return Pa(t["#text"]);
  if ("response" in t)
    return Pa(t.response);
  if ("message" in t)
    return Pa(t.message);
  const r = Object.values(t)[0];
  return Pa(r);
}
function J0(t, r, a = {}) {
  const s = t.trim();
  if (r === "none") {
    const f = s.match(AE);
    return f ? f[1].trim() : s;
  }
  let u = TE(t) ?? s;
  try {
    switch (r) {
      case "xml": {
        if (a.schema) {
          const d = CE.validate(u);
          if (d !== !0)
            throw new Error(`Model response is not valid XML: ${d.err.msg}`);
        }
        let f = NE.parse(u);
        if (f.root)
          f = f.root;
        else if (!a.schema && f.response !== void 0)
          return Pa(f.response);
        return a.schema ? (Zd(f, a.schema), f) : Pa(f);
      }
      case "json": {
        const f = JSON.parse(u);
        return a.schema ? f : Pa(f);
      }
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (f) {
    if (!a.schema) {
      const d = u.match(/<response>([\s\S]*)/);
      if (d) return d[1].replace(/<\/[\s\S]*$/, "").trim();
      const h = u.match(/"response":\s*"([\s\S]*)/);
      if (h) return h[1].replace(/"\s*}\s*$/, "");
    }
    throw console.error(`Error parsing response in format '${r}':`, f), console.error("Raw content received:", t), r === "xml" ? f.message.startsWith("Model response is not valid XML:") ? f : new Error(`Model response is not valid XML: ${f.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${f.message}`);
  }
}
function Yv(t, r) {
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
const kn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Dr = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First_Message",
  mes_example: "Example_Dialogue"
}, W0 = "alternate_greetings_", Iu = (t) => t.startsWith(W0), Bi = (t) => parseInt(t.split("_")[2]);
function Nu(t) {
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
var Ll = { exports: {} }, Il = { exports: {} }, Jn = {}, gn = {}, Xv;
function bn() {
  if (Xv) return gn;
  Xv = 1, gn.__esModule = !0, gn.extend = l, gn.indexOf = h, gn.escapeExpression = g, gn.isEmpty = v, gn.createFrame = _, gn.blockParams = b, gn.appendContextPath = m;
  var t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, a = /[&<>"'`=]/;
  function s(p) {
    return t[p];
  }
  function l(p) {
    for (var x = 1; x < arguments.length; x++)
      for (var E in arguments[x])
        Object.prototype.hasOwnProperty.call(arguments[x], E) && (p[E] = arguments[x][E]);
    return p;
  }
  var u = Object.prototype.toString;
  gn.toString = u;
  var f = function(x) {
    return typeof x == "function";
  };
  f(/x/) && (gn.isFunction = f = function(p) {
    return typeof p == "function" && u.call(p) === "[object Function]";
  }), gn.isFunction = f;
  var d = Array.isArray || function(p) {
    return p && typeof p == "object" ? u.call(p) === "[object Array]" : !1;
  };
  gn.isArray = d;
  function h(p, x) {
    for (var E = 0, A = p.length; E < A; E++)
      if (p[E] === x)
        return E;
    return -1;
  }
  function g(p) {
    if (typeof p != "string") {
      if (p && p.toHTML)
        return p.toHTML();
      if (p == null)
        return "";
      if (!p)
        return p + "";
      p = "" + p;
    }
    return a.test(p) ? p.replace(r, s) : p;
  }
  function v(p) {
    return !p && p !== 0 ? !0 : !!(d(p) && p.length === 0);
  }
  function _(p) {
    var x = l({}, p);
    return x._parent = p, x;
  }
  function b(p, x) {
    return p.path = x, p;
  }
  function m(p, x) {
    return (p ? p + "." : "") + x;
  }
  return gn;
}
var Pl = { exports: {} }, $v;
function nr() {
  return $v || ($v = 1, (function(t, r) {
    r.__esModule = !0;
    var a = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(l, u) {
      var f = u && u.loc, d = void 0, h = void 0, g = void 0, v = void 0;
      f && (d = f.start.line, h = f.end.line, g = f.start.column, v = f.end.column, l += " - " + d + ":" + g);
      for (var _ = Error.prototype.constructor.call(this, l), b = 0; b < a.length; b++)
        this[a[b]] = _[a[b]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = d, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: g,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: v,
          enumerable: !0
        })) : (this.column = g, this.endColumn = v));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(Pl, Pl.exports)), Pl.exports;
}
var Xs = {}, Bl = { exports: {} }, Qv;
function OE() {
  return Qv || (Qv = 1, (function(t, r) {
    r.__esModule = !0;
    var a = bn();
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
          var h = a.createFrame(u.data);
          h.contextPath = a.appendContextPath(u.data.contextPath, u.name), u = { data: h };
        }
        return d(l, u);
      });
    }, t.exports = r.default;
  })(Bl, Bl.exports)), Bl.exports;
}
var Ul = { exports: {} }, Kv;
function DE() {
  return Kv || (Kv = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = bn(), l = nr(), u = a(l);
    r.default = function(f) {
      f.registerHelper("each", function(d, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var g = h.fn, v = h.inverse, _ = 0, b = "", m = void 0, p = void 0;
        h.data && h.ids && (p = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(d) && (d = d.call(this)), h.data && (m = s.createFrame(h.data));
        function x(C, T, M) {
          m && (m.key = C, m.index = T, m.first = T === 0, m.last = !!M, p && (m.contextPath = p + C)), b = b + g(d[C], {
            data: m,
            blockParams: s.blockParams([d[C], C], [p + C, null])
          });
        }
        if (d && typeof d == "object")
          if (s.isArray(d))
            for (var E = d.length; _ < E; _++)
              _ in d && x(_, _, _ === d.length - 1);
          else if (typeof Symbol == "function" && d[Symbol.iterator]) {
            for (var A = [], w = d[Symbol.iterator](), D = w.next(); !D.done; D = w.next())
              A.push(D.value);
            d = A;
            for (var E = d.length; _ < E; _++)
              x(_, _, _ === d.length - 1);
          } else
            (function() {
              var C = void 0;
              Object.keys(d).forEach(function(T) {
                C !== void 0 && x(C, _ - 1), C = T, _++;
              }), C !== void 0 && x(C, _ - 1, !0);
            })();
        return _ === 0 && (b = v(this)), b;
      });
    }, t.exports = r.default;
  })(Ul, Ul.exports)), Ul.exports;
}
var Fl = { exports: {} }, Jv;
function ME() {
  return Jv || (Jv = 1, (function(t, r) {
    r.__esModule = !0;
    function a(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = nr(), l = a(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new l.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Fl, Fl.exports)), Fl.exports;
}
var Hl = { exports: {} }, Wv;
function kE() {
  return Wv || (Wv = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = bn(), l = nr(), u = a(l);
    r.default = function(f) {
      f.registerHelper("if", function(d, h) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(d) && (d = d.call(this)), !h.hash.includeZero && !d || s.isEmpty(d) ? h.inverse(this) : h.fn(this);
      }), f.registerHelper("unless", function(d, h) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, d, {
          fn: h.inverse,
          inverse: h.fn,
          hash: h.hash
        });
      });
    }, t.exports = r.default;
  })(Hl, Hl.exports)), Hl.exports;
}
var ql = { exports: {} }, ey;
function jE() {
  return ey || (ey = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      a.registerHelper("log", function() {
        for (var s = [void 0], l = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        l.hash.level != null ? f = l.hash.level : l.data && l.data.level != null && (f = l.data.level), s[0] = f, a.log.apply(a, s);
      });
    }, t.exports = r.default;
  })(ql, ql.exports)), ql.exports;
}
var Zl = { exports: {} }, ty;
function RE() {
  return ty || (ty = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(a) {
      a.registerHelper("lookup", function(s, l, u) {
        return s && u.lookupProperty(s, l);
      });
    }, t.exports = r.default;
  })(Zl, Zl.exports)), Zl.exports;
}
var Gl = { exports: {} }, ny;
function zE() {
  return ny || (ny = 1, (function(t, r) {
    r.__esModule = !0;
    function a(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = bn(), l = nr(), u = a(l);
    r.default = function(f) {
      f.registerHelper("with", function(d, h) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(d) && (d = d.call(this));
        var g = h.fn;
        if (s.isEmpty(d))
          return h.inverse(this);
        var v = h.data;
        return h.data && h.ids && (v = s.createFrame(h.data), v.contextPath = s.appendContextPath(h.data.contextPath, h.ids[0])), g(d, {
          data: v,
          blockParams: s.blockParams([d], [v && v.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Gl, Gl.exports)), Gl.exports;
}
var ry;
function eb() {
  if (ry) return Xs;
  ry = 1, Xs.__esModule = !0, Xs.registerDefaultHelpers = x, Xs.moveHelperToHooks = E;
  function t(A) {
    return A && A.__esModule ? A : { default: A };
  }
  var r = OE(), a = t(r), s = DE(), l = t(s), u = ME(), f = t(u), d = kE(), h = t(d), g = jE(), v = t(g), _ = RE(), b = t(_), m = zE(), p = t(m);
  function x(A) {
    a.default(A), l.default(A), f.default(A), h.default(A), v.default(A), b.default(A), p.default(A);
  }
  function E(A, w, D) {
    A.helpers[w] && (A.hooks[w] = A.helpers[w], D || delete A.helpers[w]);
  }
  return Xs;
}
var Vl = {}, Yl = { exports: {} }, ay;
function LE() {
  return ay || (ay = 1, (function(t, r) {
    r.__esModule = !0;
    var a = bn();
    r.default = function(s) {
      s.registerDecorator("inline", function(l, u, f, d) {
        var h = l;
        return u.partials || (u.partials = {}, h = function(g, v) {
          var _ = f.partials;
          f.partials = a.extend({}, _, u.partials);
          var b = l(g, v);
          return f.partials = _, b;
        }), u.partials[d.args[0]] = d.fn, h;
      });
    }, t.exports = r.default;
  })(Yl, Yl.exports)), Yl.exports;
}
var iy;
function IE() {
  if (iy) return Vl;
  iy = 1, Vl.__esModule = !0, Vl.registerDefaultDecorators = s;
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var r = LE(), a = t(r);
  function s(l) {
    a.default(l);
  }
  return Vl;
}
var Xl = { exports: {} }, sy;
function tb() {
  return sy || (sy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = bn(), s = {
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
          for (var d = arguments.length, h = Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
            h[g - 1] = arguments[g];
          console[f].apply(console, h);
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Xl, Xl.exports)), Xl.exports;
}
var ji = {}, $l = {}, oy;
function PE() {
  if (oy) return $l;
  oy = 1, $l.__esModule = !0, $l.createNewLookupObject = r;
  var t = bn();
  function r() {
    for (var a = arguments.length, s = Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return $l;
}
var ly;
function nb() {
  if (ly) return ji;
  ly = 1, ji.__esModule = !0, ji.createProtoAccessControl = u, ji.resultIsAllowed = f, ji.resetLoggedProperties = g;
  function t(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var r = PE(), a = tb(), s = t(a), l = /* @__PURE__ */ Object.create(null);
  function u(v) {
    var _ = /* @__PURE__ */ Object.create(null);
    _.constructor = !1, _.__defineGetter__ = !1, _.__defineSetter__ = !1, _.__lookupGetter__ = !1;
    var b = /* @__PURE__ */ Object.create(null);
    return b.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(b, v.allowedProtoProperties),
        defaultValue: v.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(_, v.allowedProtoMethods),
        defaultValue: v.allowProtoMethodsByDefault
      }
    };
  }
  function f(v, _, b) {
    return d(typeof v == "function" ? _.methods : _.properties, b);
  }
  function d(v, _) {
    return v.whitelist[_] !== void 0 ? v.whitelist[_] === !0 : v.defaultValue !== void 0 ? v.defaultValue : (h(_), !1);
  }
  function h(v) {
    l[v] !== !0 && (l[v] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + v + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(l).forEach(function(v) {
      delete l[v];
    });
  }
  return ji;
}
var uy;
function fh() {
  if (uy) return Jn;
  uy = 1, Jn.__esModule = !0, Jn.HandlebarsEnvironment = p;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var r = bn(), a = nr(), s = t(a), l = eb(), u = IE(), f = tb(), d = t(f), h = nb(), g = "4.7.8";
  Jn.VERSION = g;
  var v = 8;
  Jn.COMPILER_REVISION = v;
  var _ = 7;
  Jn.LAST_COMPATIBLE_COMPILER_REVISION = _;
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
  Jn.REVISION_CHANGES = b;
  var m = "[object Object]";
  function p(E, A, w) {
    this.helpers = E || {}, this.partials = A || {}, this.decorators = w || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  p.prototype = {
    constructor: p,
    logger: d.default,
    log: d.default.log,
    registerHelper: function(A, w) {
      if (r.toString.call(A) === m) {
        if (w)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, A);
      } else
        this.helpers[A] = w;
    },
    unregisterHelper: function(A) {
      delete this.helpers[A];
    },
    registerPartial: function(A, w) {
      if (r.toString.call(A) === m)
        r.extend(this.partials, A);
      else {
        if (typeof w > "u")
          throw new s.default('Attempting to register a partial called "' + A + '" as undefined');
        this.partials[A] = w;
      }
    },
    unregisterPartial: function(A) {
      delete this.partials[A];
    },
    registerDecorator: function(A, w) {
      if (r.toString.call(A) === m) {
        if (w)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, A);
      } else
        this.decorators[A] = w;
    },
    unregisterDecorator: function(A) {
      delete this.decorators[A];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      h.resetLoggedProperties();
    }
  };
  var x = d.default.log;
  return Jn.log = x, Jn.createFrame = r.createFrame, Jn.logger = d.default, Jn;
}
var Ql = { exports: {} }, cy;
function BE() {
  return cy || (cy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(s) {
      this.string = s;
    }
    a.prototype.toString = a.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = a, t.exports = r.default;
  })(Ql, Ql.exports)), Ql.exports;
}
var Ar = {}, Kl = {}, fy;
function UE() {
  if (fy) return Kl;
  fy = 1, Kl.__esModule = !0, Kl.wrapHelper = t;
  function t(r, a) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = a(u), r.apply(this, arguments);
    };
    return s;
  }
  return Kl;
}
var dy;
function FE() {
  if (dy) return Ar;
  dy = 1, Ar.__esModule = !0, Ar.checkRevision = v, Ar.template = _, Ar.wrapProgram = b, Ar.resolvePartial = m, Ar.invokePartial = p, Ar.noop = x;
  function t(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function r(C) {
    if (C && C.__esModule)
      return C;
    var T = {};
    if (C != null)
      for (var M in C)
        Object.prototype.hasOwnProperty.call(C, M) && (T[M] = C[M]);
    return T.default = C, T;
  }
  var a = bn(), s = r(a), l = nr(), u = t(l), f = fh(), d = eb(), h = UE(), g = nb();
  function v(C) {
    var T = C && C[0] || 1, M = f.COMPILER_REVISION;
    if (!(T >= f.LAST_COMPATIBLE_COMPILER_REVISION && T <= f.COMPILER_REVISION))
      if (T < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var R = f.REVISION_CHANGES[M], L = f.REVISION_CHANGES[T];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + R + ") or downgrade your runtime to an older version (" + L + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + C[1] + ").");
  }
  function _(C, T) {
    if (!T)
      throw new u.default("No environment passed to template");
    if (!C || !C.main)
      throw new u.default("Unknown template object: " + typeof C);
    C.main.decorator = C.main_d, T.VM.checkRevision(C.compiler);
    var M = C.compiler && C.compiler[0] === 7;
    function R(U, q, Q) {
      Q.hash && (q = s.extend({}, q, Q.hash), Q.ids && (Q.ids[0] = !0)), U = T.VM.resolvePartial.call(this, U, q, Q);
      var pe = s.extend({}, Q, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), fe = T.VM.invokePartial.call(this, U, q, pe);
      if (fe == null && T.compile && (Q.partials[Q.name] = T.compile(U, C.compilerOptions, T), fe = Q.partials[Q.name](q, pe)), fe != null) {
        if (Q.indent) {
          for (var _e = fe.split(`
`), P = 0, ae = _e.length; P < ae && !(!_e[P] && P + 1 === ae); P++)
            _e[P] = Q.indent + _e[P];
          fe = _e.join(`
`);
        }
        return fe;
      } else
        throw new u.default("The partial " + Q.name + " could not be compiled when running in runtime-only mode");
    }
    var L = {
      strict: function(q, Q, pe) {
        if (!q || !(Q in q))
          throw new u.default('"' + Q + '" not defined in ' + q, {
            loc: pe
          });
        return L.lookupProperty(q, Q);
      },
      lookupProperty: function(q, Q) {
        var pe = q[Q];
        if (pe == null || Object.prototype.hasOwnProperty.call(q, Q) || g.resultIsAllowed(pe, L.protoAccessControl, Q))
          return pe;
      },
      lookup: function(q, Q) {
        for (var pe = q.length, fe = 0; fe < pe; fe++) {
          var _e = q[fe] && L.lookupProperty(q[fe], Q);
          if (_e != null)
            return q[fe][Q];
        }
      },
      lambda: function(q, Q) {
        return typeof q == "function" ? q.call(Q) : q;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: R,
      fn: function(q) {
        var Q = C[q];
        return Q.decorator = C[q + "_d"], Q;
      },
      programs: [],
      program: function(q, Q, pe, fe, _e) {
        var P = this.programs[q], ae = this.fn(q);
        return Q || _e || fe || pe ? P = b(this, q, ae, Q, pe, fe, _e) : P || (P = this.programs[q] = b(this, q, ae)), P;
      },
      data: function(q, Q) {
        for (; q && Q--; )
          q = q._parent;
        return q;
      },
      mergeIfNeeded: function(q, Q) {
        var pe = q || Q;
        return q && Q && q !== Q && (pe = s.extend({}, Q, q)), pe;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: T.VM.noop,
      compilerInfo: C.compiler
    };
    function Y(U) {
      var q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Q = q.data;
      Y._setup(q), !q.partial && C.useData && (Q = E(U, Q));
      var pe = void 0, fe = C.useBlockParams ? [] : void 0;
      C.useDepths && (q.depths ? pe = U != q.depths[0] ? [U].concat(q.depths) : q.depths : pe = [U]);
      function _e(P) {
        return "" + C.main(L, P, L.helpers, L.partials, Q, fe, pe);
      }
      return _e = A(C.main, _e, L, q.depths || [], Q, fe), _e(U, q);
    }
    return Y.isTop = !0, Y._setup = function(U) {
      if (U.partial)
        L.protoAccessControl = U.protoAccessControl, L.helpers = U.helpers, L.partials = U.partials, L.decorators = U.decorators, L.hooks = U.hooks;
      else {
        var q = s.extend({}, T.helpers, U.helpers);
        w(q, L), L.helpers = q, C.usePartial && (L.partials = L.mergeIfNeeded(U.partials, T.partials)), (C.usePartial || C.useDecorators) && (L.decorators = s.extend({}, T.decorators, U.decorators)), L.hooks = {}, L.protoAccessControl = g.createProtoAccessControl(U);
        var Q = U.allowCallsToHelperMissing || M;
        d.moveHelperToHooks(L, "helperMissing", Q), d.moveHelperToHooks(L, "blockHelperMissing", Q);
      }
    }, Y._child = function(U, q, Q, pe) {
      if (C.useBlockParams && !Q)
        throw new u.default("must pass block params");
      if (C.useDepths && !pe)
        throw new u.default("must pass parent depths");
      return b(L, U, C[U], q, 0, Q, pe);
    }, Y;
  }
  function b(C, T, M, R, L, Y, U) {
    function q(Q) {
      var pe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], fe = U;
      return U && Q != U[0] && !(Q === C.nullContext && U[0] === null) && (fe = [Q].concat(U)), M(C, Q, C.helpers, C.partials, pe.data || R, Y && [pe.blockParams].concat(Y), fe);
    }
    return q = A(M, q, C, U, R, Y), q.program = T, q.depth = U ? U.length : 0, q.blockParams = L || 0, q;
  }
  function m(C, T, M) {
    return C ? !C.call && !M.name && (M.name = C, C = M.partials[C]) : M.name === "@partial-block" ? C = M.data["partial-block"] : C = M.partials[M.name], C;
  }
  function p(C, T, M) {
    var R = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var L = void 0;
    if (M.fn && M.fn !== x && (function() {
      M.data = f.createFrame(M.data);
      var Y = M.fn;
      L = M.data["partial-block"] = function(q) {
        var Q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return Q.data = f.createFrame(Q.data), Q.data["partial-block"] = R, Y(q, Q);
      }, Y.partials && (M.partials = s.extend({}, M.partials, Y.partials));
    })(), C === void 0 && L && (C = L), C === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (C instanceof Function)
      return C(T, M);
  }
  function x() {
    return "";
  }
  function E(C, T) {
    return (!T || !("root" in T)) && (T = T ? f.createFrame(T) : {}, T.root = C), T;
  }
  function A(C, T, M, R, L, Y) {
    if (C.decorator) {
      var U = {};
      T = C.decorator(T, U, M, R && R[0], L, Y, R), s.extend(T, U);
    }
    return T;
  }
  function w(C, T) {
    Object.keys(C).forEach(function(M) {
      var R = C[M];
      C[M] = D(R, T);
    });
  }
  function D(C, T) {
    var M = T.lookupProperty;
    return h.wrapHelper(C, function(R) {
      return s.extend({ lookupProperty: M }, R);
    });
  }
  return Ar;
}
var Jl = { exports: {} }, hy;
function rb() {
  return hy || (hy = 1, (function(t, r) {
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
  })(Jl, Jl.exports)), Jl.exports;
}
var py;
function HE() {
  return py || (py = 1, (function(t, r) {
    r.__esModule = !0;
    function a(w) {
      return w && w.__esModule ? w : { default: w };
    }
    function s(w) {
      if (w && w.__esModule)
        return w;
      var D = {};
      if (w != null)
        for (var C in w)
          Object.prototype.hasOwnProperty.call(w, C) && (D[C] = w[C]);
      return D.default = w, D;
    }
    var l = fh(), u = s(l), f = BE(), d = a(f), h = nr(), g = a(h), v = bn(), _ = s(v), b = FE(), m = s(b), p = rb(), x = a(p);
    function E() {
      var w = new u.HandlebarsEnvironment();
      return _.extend(w, u), w.SafeString = d.default, w.Exception = g.default, w.Utils = _, w.escapeExpression = _.escapeExpression, w.VM = m, w.template = function(D) {
        return m.template(D, w);
      }, w;
    }
    var A = E();
    A.create = E, x.default(A), A.default = A, r.default = A, t.exports = r.default;
  })(Il, Il.exports)), Il.exports;
}
var Wl = { exports: {} }, my;
function ab() {
  return my || (my = 1, (function(t, r) {
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
  })(Wl, Wl.exports)), Wl.exports;
}
var Ri = {}, eu = { exports: {} }, gy;
function qE() {
  return gy || (gy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(d, h, g, v, _, b, m) {
          var p = b.length - 1;
          switch (_) {
            case 1:
              return b[p - 1];
            case 2:
              this.$ = v.prepareProgram(b[p]);
              break;
            case 3:
              this.$ = b[p];
              break;
            case 4:
              this.$ = b[p];
              break;
            case 5:
              this.$ = b[p];
              break;
            case 6:
              this.$ = b[p];
              break;
            case 7:
              this.$ = b[p];
              break;
            case 8:
              this.$ = b[p];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: v.stripComment(b[p]),
                strip: v.stripFlags(b[p], b[p]),
                loc: v.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: b[p],
                value: b[p],
                loc: v.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = v.prepareRawBlock(b[p - 2], b[p - 1], b[p], this._$);
              break;
            case 12:
              this.$ = { path: b[p - 3], params: b[p - 2], hash: b[p - 1] };
              break;
            case 13:
              this.$ = v.prepareBlock(b[p - 3], b[p - 2], b[p - 1], b[p], !1, this._$);
              break;
            case 14:
              this.$ = v.prepareBlock(b[p - 3], b[p - 2], b[p - 1], b[p], !0, this._$);
              break;
            case 15:
              this.$ = { open: b[p - 5], path: b[p - 4], params: b[p - 3], hash: b[p - 2], blockParams: b[p - 1], strip: v.stripFlags(b[p - 5], b[p]) };
              break;
            case 16:
              this.$ = { path: b[p - 4], params: b[p - 3], hash: b[p - 2], blockParams: b[p - 1], strip: v.stripFlags(b[p - 5], b[p]) };
              break;
            case 17:
              this.$ = { path: b[p - 4], params: b[p - 3], hash: b[p - 2], blockParams: b[p - 1], strip: v.stripFlags(b[p - 5], b[p]) };
              break;
            case 18:
              this.$ = { strip: v.stripFlags(b[p - 1], b[p - 1]), program: b[p] };
              break;
            case 19:
              var x = v.prepareBlock(b[p - 2], b[p - 1], b[p], b[p], !1, this._$), E = v.prepareProgram([x], b[p - 1].loc);
              E.chained = !0, this.$ = { strip: b[p - 2].strip, program: E, chain: !0 };
              break;
            case 20:
              this.$ = b[p];
              break;
            case 21:
              this.$ = { path: b[p - 1], strip: v.stripFlags(b[p - 2], b[p]) };
              break;
            case 22:
              this.$ = v.prepareMustache(b[p - 3], b[p - 2], b[p - 1], b[p - 4], v.stripFlags(b[p - 4], b[p]), this._$);
              break;
            case 23:
              this.$ = v.prepareMustache(b[p - 3], b[p - 2], b[p - 1], b[p - 4], v.stripFlags(b[p - 4], b[p]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: b[p - 3],
                params: b[p - 2],
                hash: b[p - 1],
                indent: "",
                strip: v.stripFlags(b[p - 4], b[p]),
                loc: v.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = v.preparePartialBlock(b[p - 2], b[p - 1], b[p], this._$);
              break;
            case 26:
              this.$ = { path: b[p - 3], params: b[p - 2], hash: b[p - 1], strip: v.stripFlags(b[p - 4], b[p]) };
              break;
            case 27:
              this.$ = b[p];
              break;
            case 28:
              this.$ = b[p];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: b[p - 3],
                params: b[p - 2],
                hash: b[p - 1],
                loc: v.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: b[p], loc: v.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: v.id(b[p - 2]), value: b[p], loc: v.locInfo(this._$) };
              break;
            case 32:
              this.$ = v.id(b[p - 1]);
              break;
            case 33:
              this.$ = b[p];
              break;
            case 34:
              this.$ = b[p];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: b[p], original: b[p], loc: v.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(b[p]), original: Number(b[p]), loc: v.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: b[p] === "true", original: b[p] === "true", loc: v.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: v.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: v.locInfo(this._$) };
              break;
            case 40:
              this.$ = b[p];
              break;
            case 41:
              this.$ = b[p];
              break;
            case 42:
              this.$ = v.preparePath(!0, b[p], this._$);
              break;
            case 43:
              this.$ = v.preparePath(!1, b[p], this._$);
              break;
            case 44:
              b[p - 2].push({ part: v.id(b[p]), original: b[p], separator: b[p - 1] }), this.$ = b[p - 2];
              break;
            case 45:
              this.$ = [{ part: v.id(b[p]), original: b[p] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              b[p - 1].push(b[p]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              b[p - 1].push(b[p]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              b[p - 1].push(b[p]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              b[p - 1].push(b[p]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              b[p - 1].push(b[p]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              b[p - 1].push(b[p]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              b[p - 1].push(b[p]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              b[p - 1].push(b[p]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              b[p - 1].push(b[p]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              b[p - 1].push(b[p]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              b[p - 1].push(b[p]);
              break;
            case 98:
              this.$ = [b[p]];
              break;
            case 99:
              b[p - 1].push(b[p]);
              break;
            case 100:
              this.$ = [b[p]];
              break;
            case 101:
              b[p - 1].push(b[p]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(d, h) {
          throw new Error(d);
        },
        parse: function(d) {
          var h = this, g = [0], v = [null], _ = [], b = this.table, m = "", p = 0, x = 0;
          this.lexer.setInput(d), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var E = this.lexer.yylloc;
          _.push(E);
          var A = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var pe;
            return pe = h.lexer.lex() || 1, typeof pe != "number" && (pe = h.symbols_[pe] || pe), pe;
          }
          for (var D, C, T, M, R = {}, L, Y, U, q; ; ) {
            if (C = g[g.length - 1], this.defaultActions[C] ? T = this.defaultActions[C] : ((D === null || typeof D > "u") && (D = w()), T = b[C] && b[C][D]), typeof T > "u" || !T.length || !T[0]) {
              var Q = "";
              {
                q = [];
                for (L in b[C]) this.terminals_[L] && L > 2 && q.push("'" + this.terminals_[L] + "'");
                this.lexer.showPosition ? Q = "Parse error on line " + (p + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + q.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : Q = "Parse error on line " + (p + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError(Q, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: E, expected: q });
              }
            }
            if (T[0] instanceof Array && T.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + C + ", token: " + D);
            switch (T[0]) {
              case 1:
                g.push(D), v.push(this.lexer.yytext), _.push(this.lexer.yylloc), g.push(T[1]), D = null, x = this.lexer.yyleng, m = this.lexer.yytext, p = this.lexer.yylineno, E = this.lexer.yylloc;
                break;
              case 2:
                if (Y = this.productions_[T[1]][1], R.$ = v[v.length - Y], R._$ = { first_line: _[_.length - (Y || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - (Y || 1)].first_column, last_column: _[_.length - 1].last_column }, A && (R._$.range = [_[_.length - (Y || 1)].range[0], _[_.length - 1].range[1]]), M = this.performAction.call(R, m, x, p, this.yy, T[1], v, _), typeof M < "u")
                  return M;
                Y && (g = g.slice(0, -1 * Y * 2), v = v.slice(0, -1 * Y), _ = _.slice(0, -1 * Y)), g.push(this.productions_[T[1]][0]), v.push(R.$), _.push(R._$), U = b[g[g.length - 2]][g[g.length - 1]], g.push(U);
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
          parseError: function(h, g) {
            if (this.yy.parser)
              this.yy.parser.parseError(h, g);
            else
              throw new Error(h);
          },
          setInput: function(h) {
            return this._input = h, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var h = this._input[0];
            this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
            var g = h.match(/(?:\r\n?|\n).*/g);
            return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
          },
          unput: function(h) {
            var g = h.length, v = h.split(/(?:\r\n?|\n)/g);
            this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var _ = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), v.length - 1 && (this.yylineno -= v.length - 1);
            var b = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: v ? (v.length === _.length ? this.yylloc.first_column : 0) + _[_.length - v.length].length - v[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [b[0], b[0] + this.yyleng - g]), this;
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
            var h = this.pastInput(), g = new Array(h.length + 1).join("-");
            return h + this.upcomingInput() + `
` + g + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var h, g, v, _, b;
            this._more || (this.yytext = "", this.match = "");
            for (var m = this._currentRules(), p = 0; p < m.length && (v = this._input.match(this.rules[m[p]]), !(v && (!g || v[0].length > g[0].length) && (g = v, _ = p, !this.options.flex))); p++)
              ;
            return g ? (b = g[0].match(/(?:\r\n?|\n).*/g), b && (this.yylineno += b.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: b ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], h = this.performAction.call(this, this.yy, this, m[_], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(h, g, v, _) {
          function b(m, p) {
            return g.yytext = g.yytext.substring(m, g.yyleng - p + m);
          }
          switch (v) {
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
  })(eu, eu.exports)), eu.exports;
}
var tu = { exports: {} }, nu = { exports: {} }, vy;
function ib() {
  return vy || (vy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = nr(), l = a(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(v, _) {
        var b = this.accept(v[_]);
        if (this.mutating) {
          if (b && !u.prototype[b.type])
            throw new l.default('Unexpected node type "' + b.type + '" found when accepting ' + _ + " on " + v.type);
          v[_] = b;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(v, _) {
        if (this.acceptKey(v, _), !v[_])
          throw new l.default(v.type + " requires " + _);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(v) {
        for (var _ = 0, b = v.length; _ < b; _++)
          this.acceptKey(v, _), v[_] || (v.splice(_, 1), _--, b--);
      },
      accept: function(v) {
        if (v) {
          if (!this[v.type])
            throw new l.default("Unknown type: " + v.type, v);
          this.current && this.parents.unshift(this.current), this.current = v;
          var _ = this[v.type](v);
          if (this.current = this.parents.shift(), !this.mutating || _)
            return _;
          if (_ !== !1)
            return v;
        }
      },
      Program: function(v) {
        this.acceptArray(v.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: d,
      DecoratorBlock: d,
      PartialStatement: h,
      PartialBlockStatement: function(v) {
        h.call(this, v), this.acceptKey(v, "program");
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
      Hash: function(v) {
        this.acceptArray(v.pairs);
      },
      HashPair: function(v) {
        this.acceptRequired(v, "value");
      }
    };
    function f(g) {
      this.acceptRequired(g, "path"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    function d(g) {
      f.call(this, g), this.acceptKey(g, "program"), this.acceptKey(g, "inverse");
    }
    function h(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = u, t.exports = r.default;
  })(nu, nu.exports)), nu.exports;
}
var yy;
function ZE() {
  return yy || (yy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var s = ib(), l = a(s);
    function u() {
      var v = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = v;
    }
    u.prototype = new l.default(), u.prototype.Program = function(v) {
      var _ = !this.options.ignoreStandalone, b = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var m = v.body, p = 0, x = m.length; p < x; p++) {
        var E = m[p], A = this.accept(E);
        if (A) {
          var w = f(m, p, b), D = d(m, p, b), C = A.openStandalone && w, T = A.closeStandalone && D, M = A.inlineStandalone && w && D;
          A.close && h(m, p, !0), A.open && g(m, p, !0), _ && M && (h(m, p), g(m, p) && E.type === "PartialStatement" && (E.indent = /([ \t]+$)/.exec(m[p - 1].original)[1])), _ && C && (h((E.program || E.inverse).body), g(m, p)), _ && T && (h(m, p), g((E.inverse || E.program).body));
        }
      }
      return v;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(v) {
      this.accept(v.program), this.accept(v.inverse);
      var _ = v.program || v.inverse, b = v.program && v.inverse, m = b, p = b;
      if (b && b.chained)
        for (m = b.body[0].program; p.chained; )
          p = p.body[p.body.length - 1].program;
      var x = {
        open: v.openStrip.open,
        close: v.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: d(_.body),
        closeStandalone: f((m || _).body)
      };
      if (v.openStrip.close && h(_.body, null, !0), b) {
        var E = v.inverseStrip;
        E.open && g(_.body, null, !0), E.close && h(m.body, null, !0), v.closeStrip.open && g(p.body, null, !0), !this.options.ignoreStandalone && f(_.body) && d(m.body) && (g(_.body), h(m.body));
      } else v.closeStrip.open && g(_.body, null, !0);
      return x;
    }, u.prototype.Decorator = u.prototype.MustacheStatement = function(v) {
      return v.strip;
    }, u.prototype.PartialStatement = u.prototype.CommentStatement = function(v) {
      var _ = v.strip || {};
      return {
        inlineStandalone: !0,
        open: _.open,
        close: _.close
      };
    };
    function f(v, _, b) {
      _ === void 0 && (_ = v.length);
      var m = v[_ - 1], p = v[_ - 2];
      if (!m)
        return b;
      if (m.type === "ContentStatement")
        return (p || !b ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(m.original);
    }
    function d(v, _, b) {
      _ === void 0 && (_ = -1);
      var m = v[_ + 1], p = v[_ + 2];
      if (!m)
        return b;
      if (m.type === "ContentStatement")
        return (p || !b ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(m.original);
    }
    function h(v, _, b) {
      var m = v[_ == null ? 0 : _ + 1];
      if (!(!m || m.type !== "ContentStatement" || !b && m.rightStripped)) {
        var p = m.value;
        m.value = m.value.replace(b ? /^\s+/ : /^[ \t]*\r?\n?/, ""), m.rightStripped = m.value !== p;
      }
    }
    function g(v, _, b) {
      var m = v[_ == null ? v.length - 1 : _ - 1];
      if (!(!m || m.type !== "ContentStatement" || !b && m.leftStripped)) {
        var p = m.value;
        return m.value = m.value.replace(b ? /\s+$/ : /[ \t]+$/, ""), m.leftStripped = m.value !== p, m.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(tu, tu.exports)), tu.exports;
}
var Tn = {}, by;
function GE() {
  if (by) return Tn;
  by = 1, Tn.__esModule = !0, Tn.SourceLocation = l, Tn.id = u, Tn.stripFlags = f, Tn.stripComment = d, Tn.preparePath = h, Tn.prepareMustache = g, Tn.prepareRawBlock = v, Tn.prepareBlock = _, Tn.prepareProgram = b, Tn.preparePartialBlock = m;
  function t(p) {
    return p && p.__esModule ? p : { default: p };
  }
  var r = nr(), a = t(r);
  function s(p, x) {
    if (x = x.path ? x.path.original : x, p.path.original !== x) {
      var E = { loc: p.path.loc };
      throw new a.default(p.path.original + " doesn't match " + x, E);
    }
  }
  function l(p, x) {
    this.source = p, this.start = {
      line: x.first_line,
      column: x.first_column
    }, this.end = {
      line: x.last_line,
      column: x.last_column
    };
  }
  function u(p) {
    return /^\[.*\]$/.test(p) ? p.substring(1, p.length - 1) : p;
  }
  function f(p, x) {
    return {
      open: p.charAt(2) === "~",
      close: x.charAt(x.length - 3) === "~"
    };
  }
  function d(p) {
    return p.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function h(p, x, E) {
    E = this.locInfo(E);
    for (var A = p ? "@" : "", w = [], D = 0, C = 0, T = x.length; C < T; C++) {
      var M = x[C].part, R = x[C].original !== M;
      if (A += (x[C].separator || "") + M, !R && (M === ".." || M === "." || M === "this")) {
        if (w.length > 0)
          throw new a.default("Invalid path: " + A, { loc: E });
        M === ".." && D++;
      } else
        w.push(M);
    }
    return {
      type: "PathExpression",
      data: p,
      depth: D,
      parts: w,
      original: A,
      loc: E
    };
  }
  function g(p, x, E, A, w, D) {
    var C = A.charAt(3) || A.charAt(2), T = C !== "{" && C !== "&", M = /\*/.test(A);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: p,
      params: x,
      hash: E,
      escaped: T,
      strip: w,
      loc: this.locInfo(D)
    };
  }
  function v(p, x, E, A) {
    s(p, E), A = this.locInfo(A);
    var w = {
      type: "Program",
      body: x,
      strip: {},
      loc: A
    };
    return {
      type: "BlockStatement",
      path: p.path,
      params: p.params,
      hash: p.hash,
      program: w,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: A
    };
  }
  function _(p, x, E, A, w, D) {
    A && A.path && s(p, A);
    var C = /\*/.test(p.open);
    x.blockParams = p.blockParams;
    var T = void 0, M = void 0;
    if (E) {
      if (C)
        throw new a.default("Unexpected inverse block on decorator", E);
      E.chain && (E.program.body[0].closeStrip = A.strip), M = E.strip, T = E.program;
    }
    return w && (w = T, T = x, x = w), {
      type: C ? "DecoratorBlock" : "BlockStatement",
      path: p.path,
      params: p.params,
      hash: p.hash,
      program: x,
      inverse: T,
      openStrip: p.strip,
      inverseStrip: M,
      closeStrip: A && A.strip,
      loc: this.locInfo(D)
    };
  }
  function b(p, x) {
    if (!x && p.length) {
      var E = p[0].loc, A = p[p.length - 1].loc;
      E && A && (x = {
        source: E.source,
        start: {
          line: E.start.line,
          column: E.start.column
        },
        end: {
          line: A.end.line,
          column: A.end.column
        }
      });
    }
    return {
      type: "Program",
      body: p,
      strip: {},
      loc: x
    };
  }
  function m(p, x, E, A) {
    return s(p, E), {
      type: "PartialBlockStatement",
      name: p.path,
      params: p.params,
      hash: p.hash,
      program: x,
      openStrip: p.strip,
      closeStrip: E && E.strip,
      loc: this.locInfo(A)
    };
  }
  return Tn;
}
var _y;
function VE() {
  if (_y) return Ri;
  _y = 1, Ri.__esModule = !0, Ri.parseWithoutProcessing = v, Ri.parse = _;
  function t(b) {
    if (b && b.__esModule)
      return b;
    var m = {};
    if (b != null)
      for (var p in b)
        Object.prototype.hasOwnProperty.call(b, p) && (m[p] = b[p]);
    return m.default = b, m;
  }
  function r(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var a = qE(), s = r(a), l = ZE(), u = r(l), f = GE(), d = t(f), h = bn();
  Ri.parser = s.default;
  var g = {};
  h.extend(g, d);
  function v(b, m) {
    if (b.type === "Program")
      return b;
    s.default.yy = g, g.locInfo = function(x) {
      return new g.SourceLocation(m && m.srcName, x);
    };
    var p = s.default.parse(b);
    return p;
  }
  function _(b, m) {
    var p = v(b, m), x = new u.default(m);
    return x.accept(p);
  }
  return Ri;
}
var zi = {}, Sy;
function YE() {
  if (Sy) return zi;
  Sy = 1, zi.__esModule = !0, zi.Compiler = d, zi.precompile = h, zi.compile = g;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = nr(), a = t(r), s = bn(), l = ab(), u = t(l), f = [].slice;
  function d() {
  }
  d.prototype = {
    compiler: d,
    equals: function(m) {
      var p = this.opcodes.length;
      if (m.opcodes.length !== p)
        return !1;
      for (var x = 0; x < p; x++) {
        var E = this.opcodes[x], A = m.opcodes[x];
        if (E.opcode !== A.opcode || !v(E.args, A.args))
          return !1;
      }
      p = this.children.length;
      for (var x = 0; x < p; x++)
        if (!this.children[x].equals(m.children[x]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(m, p) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = p, this.stringParams = p.stringParams, this.trackIds = p.trackIds, p.blockParams = p.blockParams || [], p.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, p.knownHelpers), this.accept(m);
    },
    compileProgram: function(m) {
      var p = new this.compiler(), x = p.compile(m, this.options), E = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[E] = x, this.useDepths = this.useDepths || x.useDepths, E;
    },
    accept: function(m) {
      if (!this[m.type])
        throw new a.default("Unknown type: " + m.type, m);
      this.sourceNode.unshift(m);
      var p = this[m.type](m);
      return this.sourceNode.shift(), p;
    },
    Program: function(m) {
      this.options.blockParams.unshift(m.blockParams);
      for (var p = m.body, x = p.length, E = 0; E < x; E++)
        this.accept(p[E]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = m.blockParams ? m.blockParams.length : 0, this;
    },
    BlockStatement: function(m) {
      _(m);
      var p = m.program, x = m.inverse;
      p = p && this.compileProgram(p), x = x && this.compileProgram(x);
      var E = this.classifySexpr(m);
      E === "helper" ? this.helperSexpr(m, p, x) : E === "simple" ? (this.simpleSexpr(m), this.opcode("pushProgram", p), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", m.path.original)) : (this.ambiguousSexpr(m, p, x), this.opcode("pushProgram", p), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(m) {
      var p = m.program && this.compileProgram(m.program), x = this.setupFullMustacheParams(m, p, void 0), E = m.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, E.original);
    },
    PartialStatement: function(m) {
      this.usePartial = !0;
      var p = m.program;
      p && (p = this.compileProgram(m.program));
      var x = m.params;
      if (x.length > 1)
        throw new a.default("Unsupported number of partial arguments: " + x.length, m);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var E = m.name.original, A = m.name.type === "SubExpression";
      A && this.accept(m.name), this.setupFullMustacheParams(m, p, void 0, !0);
      var w = m.indent || "";
      this.options.preventIndent && w && (this.opcode("appendContent", w), w = ""), this.opcode("invokePartial", A, E, w), this.opcode("append");
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
      var p = this.classifySexpr(m);
      p === "simple" ? this.simpleSexpr(m) : p === "helper" ? this.helperSexpr(m) : this.ambiguousSexpr(m);
    },
    ambiguousSexpr: function(m, p, x) {
      var E = m.path, A = E.parts[0], w = p != null || x != null;
      this.opcode("getContext", E.depth), this.opcode("pushProgram", p), this.opcode("pushProgram", x), E.strict = !0, this.accept(E), this.opcode("invokeAmbiguous", A, w);
    },
    simpleSexpr: function(m) {
      var p = m.path;
      p.strict = !0, this.accept(p), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(m, p, x) {
      var E = this.setupFullMustacheParams(m, p, x), A = m.path, w = A.parts[0];
      if (this.options.knownHelpers[w])
        this.opcode("invokeKnownHelper", E.length, w);
      else {
        if (this.options.knownHelpersOnly)
          throw new a.default("You specified knownHelpersOnly, but used the unknown helper " + w, m);
        A.strict = !0, A.falsy = !0, this.accept(A), this.opcode("invokeHelper", E.length, A.original, u.default.helpers.simpleId(A));
      }
    },
    PathExpression: function(m) {
      this.addDepth(m.depth), this.opcode("getContext", m.depth);
      var p = m.parts[0], x = u.default.helpers.scopedId(m), E = !m.depth && !x && this.blockParamIndex(p);
      E ? this.opcode("lookupBlockParam", E, m.parts) : p ? m.data ? (this.options.data = !0, this.opcode("lookupData", m.depth, m.parts, m.strict)) : this.opcode("lookupOnContext", m.parts, m.falsy, m.strict, x) : this.opcode("pushContext");
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
      var p = m.pairs, x = 0, E = p.length;
      for (this.opcode("pushHash"); x < E; x++)
        this.pushParam(p[x].value);
      for (; x--; )
        this.opcode("assignToHash", p[x].key);
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
      var p = u.default.helpers.simpleId(m.path), x = p && !!this.blockParamIndex(m.path.parts[0]), E = !x && u.default.helpers.helperExpression(m), A = !x && (E || p);
      if (A && !E) {
        var w = m.path.parts[0], D = this.options;
        D.knownHelpers[w] ? E = !0 : D.knownHelpersOnly && (A = !1);
      }
      return E ? "helper" : A ? "ambiguous" : "simple";
    },
    pushParams: function(m) {
      for (var p = 0, x = m.length; p < x; p++)
        this.pushParam(m[p]);
    },
    pushParam: function(m) {
      var p = m.value != null ? m.value : m.original || "";
      if (this.stringParams)
        p.replace && (p = p.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), m.depth && this.addDepth(m.depth), this.opcode("getContext", m.depth || 0), this.opcode("pushStringParam", p, m.type), m.type === "SubExpression" && this.accept(m);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (m.parts && !u.default.helpers.scopedId(m) && !m.depth && (x = this.blockParamIndex(m.parts[0])), x) {
            var E = m.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, E);
          } else
            p = m.original || p, p.replace && (p = p.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", m.type, p);
        }
        this.accept(m);
      }
    },
    setupFullMustacheParams: function(m, p, x, E) {
      var A = m.params;
      return this.pushParams(A), this.opcode("pushProgram", p), this.opcode("pushProgram", x), m.hash ? this.accept(m.hash) : this.opcode("emptyHash", E), A;
    },
    blockParamIndex: function(m) {
      for (var p = 0, x = this.options.blockParams.length; p < x; p++) {
        var E = this.options.blockParams[p], A = E && s.indexOf(E, m);
        if (E && A >= 0)
          return [p, A];
      }
    }
  };
  function h(b, m, p) {
    if (b == null || typeof b != "string" && b.type !== "Program")
      throw new a.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + b);
    m = m || {}, "data" in m || (m.data = !0), m.compat && (m.useDepths = !0);
    var x = p.parse(b, m), E = new p.Compiler().compile(x, m);
    return new p.JavaScriptCompiler().compile(E, m);
  }
  function g(b, m, p) {
    if (m === void 0 && (m = {}), b == null || typeof b != "string" && b.type !== "Program")
      throw new a.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + b);
    m = s.extend({}, m), "data" in m || (m.data = !0), m.compat && (m.useDepths = !0);
    var x = void 0;
    function E() {
      var w = p.parse(b, m), D = new p.Compiler().compile(w, m), C = new p.JavaScriptCompiler().compile(D, m, void 0, !0);
      return p.template(C);
    }
    function A(w, D) {
      return x || (x = E()), x.call(this, w, D);
    }
    return A._setup = function(w) {
      return x || (x = E()), x._setup(w);
    }, A._child = function(w, D, C, T) {
      return x || (x = E()), x._child(w, D, C, T);
    }, A;
  }
  function v(b, m) {
    if (b === m)
      return !0;
    if (s.isArray(b) && s.isArray(m) && b.length === m.length) {
      for (var p = 0; p < b.length; p++)
        if (!v(b[p], m[p]))
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
  return zi;
}
var ru = { exports: {} }, au = { exports: {} }, $s = {}, vd = {}, iu = {}, su = {}, xy;
function XE() {
  if (xy) return su;
  xy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return su.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, su.decode = function(r) {
    var a = 65, s = 90, l = 97, u = 122, f = 48, d = 57, h = 43, g = 47, v = 26, _ = 52;
    return a <= r && r <= s ? r - a : l <= r && r <= u ? r - l + v : f <= r && r <= d ? r - f + _ : r == h ? 62 : r == g ? 63 : -1;
  }, su;
}
var Ey;
function sb() {
  if (Ey) return iu;
  Ey = 1;
  var t = XE(), r = 5, a = 1 << r, s = a - 1, l = a;
  function u(d) {
    return d < 0 ? (-d << 1) + 1 : (d << 1) + 0;
  }
  function f(d) {
    var h = (d & 1) === 1, g = d >> 1;
    return h ? -g : g;
  }
  return iu.encode = function(h) {
    var g = "", v, _ = u(h);
    do
      v = _ & s, _ >>>= r, _ > 0 && (v |= l), g += t.encode(v);
    while (_ > 0);
    return g;
  }, iu.decode = function(h, g, v) {
    var _ = h.length, b = 0, m = 0, p, x;
    do {
      if (g >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = t.decode(h.charCodeAt(g++)), x === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(g - 1));
      p = !!(x & l), x &= s, b = b + (x << m), m += r;
    } while (p);
    v.value = f(b), v.rest = g;
  }, iu;
}
var yd = {}, wy;
function vo() {
  return wy || (wy = 1, (function(t) {
    function r(C, T, M) {
      if (T in C)
        return C[T];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + T + '" is a required argument.');
    }
    t.getArg = r;
    var a = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function l(C) {
      var T = C.match(a);
      return T ? {
        scheme: T[1],
        auth: T[2],
        host: T[3],
        port: T[4],
        path: T[5]
      } : null;
    }
    t.urlParse = l;
    function u(C) {
      var T = "";
      return C.scheme && (T += C.scheme + ":"), T += "//", C.auth && (T += C.auth + "@"), C.host && (T += C.host), C.port && (T += ":" + C.port), C.path && (T += C.path), T;
    }
    t.urlGenerate = u;
    function f(C) {
      var T = C, M = l(C);
      if (M) {
        if (!M.path)
          return C;
        T = M.path;
      }
      for (var R = t.isAbsolute(T), L = T.split(/\/+/), Y, U = 0, q = L.length - 1; q >= 0; q--)
        Y = L[q], Y === "." ? L.splice(q, 1) : Y === ".." ? U++ : U > 0 && (Y === "" ? (L.splice(q + 1, U), U = 0) : (L.splice(q, 2), U--));
      return T = L.join("/"), T === "" && (T = R ? "/" : "."), M ? (M.path = T, u(M)) : T;
    }
    t.normalize = f;
    function d(C, T) {
      C === "" && (C = "."), T === "" && (T = ".");
      var M = l(T), R = l(C);
      if (R && (C = R.path || "/"), M && !M.scheme)
        return R && (M.scheme = R.scheme), u(M);
      if (M || T.match(s))
        return T;
      if (R && !R.host && !R.path)
        return R.host = T, u(R);
      var L = T.charAt(0) === "/" ? T : f(C.replace(/\/+$/, "") + "/" + T);
      return R ? (R.path = L, u(R)) : L;
    }
    t.join = d, t.isAbsolute = function(C) {
      return C.charAt(0) === "/" || a.test(C);
    };
    function h(C, T) {
      C === "" && (C = "."), C = C.replace(/\/$/, "");
      for (var M = 0; T.indexOf(C + "/") !== 0; ) {
        var R = C.lastIndexOf("/");
        if (R < 0 || (C = C.slice(0, R), C.match(/^([^\/]+:\/)?\/*$/)))
          return T;
        ++M;
      }
      return Array(M + 1).join("../") + T.substr(C.length + 1);
    }
    t.relative = h;
    var g = (function() {
      var C = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in C);
    })();
    function v(C) {
      return C;
    }
    function _(C) {
      return m(C) ? "$" + C : C;
    }
    t.toSetString = g ? v : _;
    function b(C) {
      return m(C) ? C.slice(1) : C;
    }
    t.fromSetString = g ? v : b;
    function m(C) {
      if (!C)
        return !1;
      var T = C.length;
      if (T < 9 || C.charCodeAt(T - 1) !== 95 || C.charCodeAt(T - 2) !== 95 || C.charCodeAt(T - 3) !== 111 || C.charCodeAt(T - 4) !== 116 || C.charCodeAt(T - 5) !== 111 || C.charCodeAt(T - 6) !== 114 || C.charCodeAt(T - 7) !== 112 || C.charCodeAt(T - 8) !== 95 || C.charCodeAt(T - 9) !== 95)
        return !1;
      for (var M = T - 10; M >= 0; M--)
        if (C.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function p(C, T, M) {
      var R = E(C.source, T.source);
      return R !== 0 || (R = C.originalLine - T.originalLine, R !== 0) || (R = C.originalColumn - T.originalColumn, R !== 0 || M) || (R = C.generatedColumn - T.generatedColumn, R !== 0) || (R = C.generatedLine - T.generatedLine, R !== 0) ? R : E(C.name, T.name);
    }
    t.compareByOriginalPositions = p;
    function x(C, T, M) {
      var R = C.generatedLine - T.generatedLine;
      return R !== 0 || (R = C.generatedColumn - T.generatedColumn, R !== 0 || M) || (R = E(C.source, T.source), R !== 0) || (R = C.originalLine - T.originalLine, R !== 0) || (R = C.originalColumn - T.originalColumn, R !== 0) ? R : E(C.name, T.name);
    }
    t.compareByGeneratedPositionsDeflated = x;
    function E(C, T) {
      return C === T ? 0 : C === null ? 1 : T === null ? -1 : C > T ? 1 : -1;
    }
    function A(C, T) {
      var M = C.generatedLine - T.generatedLine;
      return M !== 0 || (M = C.generatedColumn - T.generatedColumn, M !== 0) || (M = E(C.source, T.source), M !== 0) || (M = C.originalLine - T.originalLine, M !== 0) || (M = C.originalColumn - T.originalColumn, M !== 0) ? M : E(C.name, T.name);
    }
    t.compareByGeneratedPositionsInflated = A;
    function w(C) {
      return JSON.parse(C.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = w;
    function D(C, T, M) {
      if (T = T || "", C && (C[C.length - 1] !== "/" && T[0] !== "/" && (C += "/"), T = C + T), M) {
        var R = l(M);
        if (!R)
          throw new Error("sourceMapURL could not be parsed");
        if (R.path) {
          var L = R.path.lastIndexOf("/");
          L >= 0 && (R.path = R.path.substring(0, L + 1));
        }
        T = d(u(R), T);
      }
      return f(T);
    }
    t.computeSourceURL = D;
  })(yd)), yd;
}
var bd = {}, Cy;
function ob() {
  if (Cy) return bd;
  Cy = 1;
  var t = vo(), r = Object.prototype.hasOwnProperty, a = typeof Map < "u";
  function s() {
    this._array = [], this._set = a ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, f) {
    for (var d = new s(), h = 0, g = u.length; h < g; h++)
      d.add(u[h], f);
    return d;
  }, s.prototype.size = function() {
    return a ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var d = a ? u : t.toSetString(u), h = a ? this.has(u) : r.call(this._set, d), g = this._array.length;
    (!h || f) && this._array.push(u), h || (a ? this._set.set(u, g) : this._set[d] = g);
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
  }, bd.ArraySet = s, bd;
}
var _d = {}, Ny;
function $E() {
  if (Ny) return _d;
  Ny = 1;
  var t = vo();
  function r(s, l) {
    var u = s.generatedLine, f = l.generatedLine, d = s.generatedColumn, h = l.generatedColumn;
    return f > u || f == u && h >= d || t.compareByGeneratedPositionsInflated(s, l) <= 0;
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
  }, _d.MappingList = a, _d;
}
var Ay;
function lb() {
  if (Ay) return vd;
  Ay = 1;
  var t = sb(), r = vo(), a = ob().ArraySet, s = $E().MappingList;
  function l(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new a(), this._names = new a(), this._mappings = new s(), this._sourcesContents = null;
  }
  return l.prototype._version = 3, l.fromSourceMap = function(f) {
    var d = f.sourceRoot, h = new l({
      file: f.file,
      sourceRoot: d
    });
    return f.eachMapping(function(g) {
      var v = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (v.source = g.source, d != null && (v.source = r.relative(d, v.source)), v.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (v.name = g.name)), h.addMapping(v);
    }), f.sources.forEach(function(g) {
      var v = g;
      d !== null && (v = r.relative(d, g)), h._sources.has(v) || h._sources.add(v);
      var _ = f.sourceContentFor(g);
      _ != null && h.setSourceContent(g, _);
    }), h;
  }, l.prototype.addMapping = function(f) {
    var d = r.getArg(f, "generated"), h = r.getArg(f, "original", null), g = r.getArg(f, "source", null), v = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(d, h, g, v), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), v != null && (v = String(v), this._names.has(v) || this._names.add(v)), this._mappings.add({
      generatedLine: d.line,
      generatedColumn: d.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: g,
      name: v
    });
  }, l.prototype.setSourceContent = function(f, d) {
    var h = f;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), d != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = d) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, l.prototype.applySourceMap = function(f, d, h) {
    var g = d;
    if (d == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      g = f.file;
    }
    var v = this._sourceRoot;
    v != null && (g = r.relative(v, g));
    var _ = new a(), b = new a();
    this._mappings.unsortedForEach(function(m) {
      if (m.source === g && m.originalLine != null) {
        var p = f.originalPositionFor({
          line: m.originalLine,
          column: m.originalColumn
        });
        p.source != null && (m.source = p.source, h != null && (m.source = r.join(h, m.source)), v != null && (m.source = r.relative(v, m.source)), m.originalLine = p.line, m.originalColumn = p.column, p.name != null && (m.name = p.name));
      }
      var x = m.source;
      x != null && !_.has(x) && _.add(x);
      var E = m.name;
      E != null && !b.has(E) && b.add(E);
    }, this), this._sources = _, this._names = b, f.sources.forEach(function(m) {
      var p = f.sourceContentFor(m);
      p != null && (h != null && (m = r.join(h, m)), v != null && (m = r.relative(v, m)), this.setSourceContent(m, p));
    }, this);
  }, l.prototype._validateMapping = function(f, d, h, g) {
    if (d && typeof d.line != "number" && typeof d.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !d && !h && !g)) {
      if (f && "line" in f && "column" in f && d && "line" in d && "column" in d && f.line > 0 && f.column >= 0 && d.line > 0 && d.column >= 0 && h)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: h,
        original: d,
        name: g
      }));
    }
  }, l.prototype._serializeMappings = function() {
    for (var f = 0, d = 1, h = 0, g = 0, v = 0, _ = 0, b = "", m, p, x, E, A = this._mappings.toArray(), w = 0, D = A.length; w < D; w++) {
      if (p = A[w], m = "", p.generatedLine !== d)
        for (f = 0; p.generatedLine !== d; )
          m += ";", d++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(p, A[w - 1]))
          continue;
        m += ",";
      }
      m += t.encode(p.generatedColumn - f), f = p.generatedColumn, p.source != null && (E = this._sources.indexOf(p.source), m += t.encode(E - _), _ = E, m += t.encode(p.originalLine - 1 - g), g = p.originalLine - 1, m += t.encode(p.originalColumn - h), h = p.originalColumn, p.name != null && (x = this._names.indexOf(p.name), m += t.encode(x - v), v = x)), b += m;
    }
    return b;
  }, l.prototype._generateSourcesContent = function(f, d) {
    return f.map(function(h) {
      if (!this._sourcesContents)
        return null;
      d != null && (h = r.relative(d, h));
      var g = r.toSetString(h);
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
  }, vd.SourceMapGenerator = l, vd;
}
var Qs = {}, Sd = {}, Ty;
function QE() {
  return Ty || (Ty = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(a, s, l, u, f, d) {
      var h = Math.floor((s - a) / 2) + a, g = f(l, u[h], !0);
      return g === 0 ? h : g > 0 ? s - h > 1 ? r(h, s, l, u, f, d) : d == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - a > 1 ? r(a, h, l, u, f, d) : d == t.LEAST_UPPER_BOUND ? h : a < 0 ? -1 : a;
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
  })(Sd)), Sd;
}
var xd = {}, Oy;
function KE() {
  if (Oy) return xd;
  Oy = 1;
  function t(s, l, u) {
    var f = s[l];
    s[l] = s[u], s[u] = f;
  }
  function r(s, l) {
    return Math.round(s + Math.random() * (l - s));
  }
  function a(s, l, u, f) {
    if (u < f) {
      var d = r(u, f), h = u - 1;
      t(s, d, f);
      for (var g = s[f], v = u; v < f; v++)
        l(s[v], g) <= 0 && (h += 1, t(s, h, v));
      t(s, h + 1, v);
      var _ = h + 1;
      a(s, l, u, _ - 1), a(s, l, _ + 1, f);
    }
  }
  return xd.quickSort = function(s, l) {
    a(s, l, 0, s.length - 1);
  }, xd;
}
var Dy;
function JE() {
  if (Dy) return Qs;
  Dy = 1;
  var t = vo(), r = QE(), a = ob().ArraySet, s = sb(), l = KE().quickSort;
  function u(g, v) {
    var _ = g;
    return typeof g == "string" && (_ = t.parseSourceMapInput(g)), _.sections != null ? new h(_, v) : new f(_, v);
  }
  u.fromSourceMap = function(g, v) {
    return f.fromSourceMap(g, v);
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
  }), u.prototype._charIsMappingSeparator = function(v, _) {
    var b = v.charAt(_);
    return b === ";" || b === ",";
  }, u.prototype._parseMappings = function(v, _) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(v, _, b) {
    var m = _ || null, p = b || u.GENERATED_ORDER, x;
    switch (p) {
      case u.GENERATED_ORDER:
        x = this._generatedMappings;
        break;
      case u.ORIGINAL_ORDER:
        x = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var E = this.sourceRoot;
    x.map(function(A) {
      var w = A.source === null ? null : this._sources.at(A.source);
      return w = t.computeSourceURL(E, w, this._sourceMapURL), {
        source: w,
        generatedLine: A.generatedLine,
        generatedColumn: A.generatedColumn,
        originalLine: A.originalLine,
        originalColumn: A.originalColumn,
        name: A.name === null ? null : this._names.at(A.name)
      };
    }, this).forEach(v, m);
  }, u.prototype.allGeneratedPositionsFor = function(v) {
    var _ = t.getArg(v, "line"), b = {
      source: t.getArg(v, "source"),
      originalLine: _,
      originalColumn: t.getArg(v, "column", 0)
    };
    if (b.source = this._findSourceIndex(b.source), b.source < 0)
      return [];
    var m = [], p = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (p >= 0) {
      var x = this._originalMappings[p];
      if (v.column === void 0)
        for (var E = x.originalLine; x && x.originalLine === E; )
          m.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++p];
      else
        for (var A = x.originalColumn; x && x.originalLine === _ && x.originalColumn == A; )
          m.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++p];
    }
    return m;
  }, Qs.SourceMapConsumer = u;
  function f(g, v) {
    var _ = g;
    typeof g == "string" && (_ = t.parseSourceMapInput(g));
    var b = t.getArg(_, "version"), m = t.getArg(_, "sources"), p = t.getArg(_, "names", []), x = t.getArg(_, "sourceRoot", null), E = t.getArg(_, "sourcesContent", null), A = t.getArg(_, "mappings"), w = t.getArg(_, "file", null);
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    x && (x = t.normalize(x)), m = m.map(String).map(t.normalize).map(function(D) {
      return x && t.isAbsolute(x) && t.isAbsolute(D) ? t.relative(x, D) : D;
    }), this._names = a.fromArray(p.map(String), !0), this._sources = a.fromArray(m, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return t.computeSourceURL(x, D, v);
    }), this.sourceRoot = x, this.sourcesContent = E, this._mappings = A, this._sourceMapURL = v, this.file = w;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(g) {
    var v = g;
    if (this.sourceRoot != null && (v = t.relative(this.sourceRoot, v)), this._sources.has(v))
      return this._sources.indexOf(v);
    var _;
    for (_ = 0; _ < this._absoluteSources.length; ++_)
      if (this._absoluteSources[_] == g)
        return _;
    return -1;
  }, f.fromSourceMap = function(v, _) {
    var b = Object.create(f.prototype), m = b._names = a.fromArray(v._names.toArray(), !0), p = b._sources = a.fromArray(v._sources.toArray(), !0);
    b.sourceRoot = v._sourceRoot, b.sourcesContent = v._generateSourcesContent(
      b._sources.toArray(),
      b.sourceRoot
    ), b.file = v._file, b._sourceMapURL = _, b._absoluteSources = b._sources.toArray().map(function(M) {
      return t.computeSourceURL(b.sourceRoot, M, _);
    });
    for (var x = v._mappings.toArray().slice(), E = b.__generatedMappings = [], A = b.__originalMappings = [], w = 0, D = x.length; w < D; w++) {
      var C = x[w], T = new d();
      T.generatedLine = C.generatedLine, T.generatedColumn = C.generatedColumn, C.source && (T.source = p.indexOf(C.source), T.originalLine = C.originalLine, T.originalColumn = C.originalColumn, C.name && (T.name = m.indexOf(C.name)), A.push(T)), E.push(T);
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
  f.prototype._parseMappings = function(v, _) {
    for (var b = 1, m = 0, p = 0, x = 0, E = 0, A = 0, w = v.length, D = 0, C = {}, T = {}, M = [], R = [], L, Y, U, q, Q; D < w; )
      if (v.charAt(D) === ";")
        b++, D++, m = 0;
      else if (v.charAt(D) === ",")
        D++;
      else {
        for (L = new d(), L.generatedLine = b, q = D; q < w && !this._charIsMappingSeparator(v, q); q++)
          ;
        if (Y = v.slice(D, q), U = C[Y], U)
          D += Y.length;
        else {
          for (U = []; D < q; )
            s.decode(v, D, T), Q = T.value, D = T.rest, U.push(Q);
          if (U.length === 2)
            throw new Error("Found a source, but no line and column");
          if (U.length === 3)
            throw new Error("Found a source and line, but no column");
          C[Y] = U;
        }
        L.generatedColumn = m + U[0], m = L.generatedColumn, U.length > 1 && (L.source = E + U[1], E += U[1], L.originalLine = p + U[2], p = L.originalLine, L.originalLine += 1, L.originalColumn = x + U[3], x = L.originalColumn, U.length > 4 && (L.name = A + U[4], A += U[4])), R.push(L), typeof L.originalLine == "number" && M.push(L);
      }
    l(R, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = R, l(M, t.compareByOriginalPositions), this.__originalMappings = M;
  }, f.prototype._findMapping = function(v, _, b, m, p, x) {
    if (v[b] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + v[b]);
    if (v[m] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + v[m]);
    return r.search(v, _, p, x);
  }, f.prototype.computeColumnSpans = function() {
    for (var v = 0; v < this._generatedMappings.length; ++v) {
      var _ = this._generatedMappings[v];
      if (v + 1 < this._generatedMappings.length) {
        var b = this._generatedMappings[v + 1];
        if (_.generatedLine === b.generatedLine) {
          _.lastGeneratedColumn = b.generatedColumn - 1;
          continue;
        }
      }
      _.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(v) {
    var _ = {
      generatedLine: t.getArg(v, "line"),
      generatedColumn: t.getArg(v, "column")
    }, b = this._findMapping(
      _,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(v, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (b >= 0) {
      var m = this._generatedMappings[b];
      if (m.generatedLine === _.generatedLine) {
        var p = t.getArg(m, "source", null);
        p !== null && (p = this._sources.at(p), p = t.computeSourceURL(this.sourceRoot, p, this._sourceMapURL));
        var x = t.getArg(m, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: p,
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
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(v) {
      return v == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(v, _) {
    if (!this.sourcesContent)
      return null;
    var b = this._findSourceIndex(v);
    if (b >= 0)
      return this.sourcesContent[b];
    var m = v;
    this.sourceRoot != null && (m = t.relative(this.sourceRoot, m));
    var p;
    if (this.sourceRoot != null && (p = t.urlParse(this.sourceRoot))) {
      var x = m.replace(/^file:\/\//, "");
      if (p.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
      if ((!p.path || p.path == "/") && this._sources.has("/" + m))
        return this.sourcesContent[this._sources.indexOf("/" + m)];
    }
    if (_)
      return null;
    throw new Error('"' + m + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(v) {
    var _ = t.getArg(v, "source");
    if (_ = this._findSourceIndex(_), _ < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var b = {
      source: _,
      originalLine: t.getArg(v, "line"),
      originalColumn: t.getArg(v, "column")
    }, m = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(v, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (m >= 0) {
      var p = this._originalMappings[m];
      if (p.source === b.source)
        return {
          line: t.getArg(p, "generatedLine", null),
          column: t.getArg(p, "generatedColumn", null),
          lastColumn: t.getArg(p, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Qs.BasicSourceMapConsumer = f;
  function h(g, v) {
    var _ = g;
    typeof g == "string" && (_ = t.parseSourceMapInput(g));
    var b = t.getArg(_, "version"), m = t.getArg(_, "sections");
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    this._sources = new a(), this._names = new a();
    var p = {
      line: -1,
      column: 0
    };
    this._sections = m.map(function(x) {
      if (x.url)
        throw new Error("Support for url field in sections not implemented.");
      var E = t.getArg(x, "offset"), A = t.getArg(E, "line"), w = t.getArg(E, "column");
      if (A < p.line || A === p.line && w < p.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return p = E, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: A + 1,
          generatedColumn: w + 1
        },
        consumer: new u(t.getArg(x, "map"), v)
      };
    });
  }
  return h.prototype = Object.create(u.prototype), h.prototype.constructor = u, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      for (var g = [], v = 0; v < this._sections.length; v++)
        for (var _ = 0; _ < this._sections[v].consumer.sources.length; _++)
          g.push(this._sections[v].consumer.sources[_]);
      return g;
    }
  }), h.prototype.originalPositionFor = function(v) {
    var _ = {
      generatedLine: t.getArg(v, "line"),
      generatedColumn: t.getArg(v, "column")
    }, b = r.search(
      _,
      this._sections,
      function(p, x) {
        var E = p.generatedLine - x.generatedOffset.generatedLine;
        return E || p.generatedColumn - x.generatedOffset.generatedColumn;
      }
    ), m = this._sections[b];
    return m ? m.consumer.originalPositionFor({
      line: _.generatedLine - (m.generatedOffset.generatedLine - 1),
      column: _.generatedColumn - (m.generatedOffset.generatedLine === _.generatedLine ? m.generatedOffset.generatedColumn - 1 : 0),
      bias: v.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, h.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(v) {
      return v.consumer.hasContentsOfAllSources();
    });
  }, h.prototype.sourceContentFor = function(v, _) {
    for (var b = 0; b < this._sections.length; b++) {
      var m = this._sections[b], p = m.consumer.sourceContentFor(v, !0);
      if (p)
        return p;
    }
    if (_)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(v) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var b = this._sections[_];
      if (b.consumer._findSourceIndex(t.getArg(v, "source")) !== -1) {
        var m = b.consumer.generatedPositionFor(v);
        if (m) {
          var p = {
            line: m.line + (b.generatedOffset.generatedLine - 1),
            column: m.column + (b.generatedOffset.generatedLine === m.line ? b.generatedOffset.generatedColumn - 1 : 0)
          };
          return p;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, h.prototype._parseMappings = function(v, _) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var b = 0; b < this._sections.length; b++)
      for (var m = this._sections[b], p = m.consumer._generatedMappings, x = 0; x < p.length; x++) {
        var E = p[x], A = m.consumer._sources.at(E.source);
        A = t.computeSourceURL(m.consumer.sourceRoot, A, this._sourceMapURL), this._sources.add(A), A = this._sources.indexOf(A);
        var w = null;
        E.name && (w = m.consumer._names.at(E.name), this._names.add(w), w = this._names.indexOf(w));
        var D = {
          source: A,
          generatedLine: E.generatedLine + (m.generatedOffset.generatedLine - 1),
          generatedColumn: E.generatedColumn + (m.generatedOffset.generatedLine === E.generatedLine ? m.generatedOffset.generatedColumn - 1 : 0),
          originalLine: E.originalLine,
          originalColumn: E.originalColumn,
          name: w
        };
        this.__generatedMappings.push(D), typeof D.originalLine == "number" && this.__originalMappings.push(D);
      }
    l(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), l(this.__originalMappings, t.compareByOriginalPositions);
  }, Qs.IndexedSourceMapConsumer = h, Qs;
}
var Ed = {}, My;
function WE() {
  if (My) return Ed;
  My = 1;
  var t = lb().SourceMapGenerator, r = vo(), a = /(\r?\n)/, s = 10, l = "$$$isSourceNode$$$";
  function u(f, d, h, g, v) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = d ?? null, this.source = h ?? null, this.name = v ?? null, this[l] = !0, g != null && this.add(g);
  }
  return u.fromStringWithSourceMap = function(d, h, g) {
    var v = new u(), _ = d.split(a), b = 0, m = function() {
      var w = C(), D = C() || "";
      return w + D;
      function C() {
        return b < _.length ? _[b++] : void 0;
      }
    }, p = 1, x = 0, E = null;
    return h.eachMapping(function(w) {
      if (E !== null)
        if (p < w.generatedLine)
          A(E, m()), p++, x = 0;
        else {
          var D = _[b] || "", C = D.substr(0, w.generatedColumn - x);
          _[b] = D.substr(w.generatedColumn - x), x = w.generatedColumn, A(E, C), E = w;
          return;
        }
      for (; p < w.generatedLine; )
        v.add(m()), p++;
      if (x < w.generatedColumn) {
        var D = _[b] || "";
        v.add(D.substr(0, w.generatedColumn)), _[b] = D.substr(w.generatedColumn), x = w.generatedColumn;
      }
      E = w;
    }, this), b < _.length && (E && A(E, m()), v.add(_.splice(b).join(""))), h.sources.forEach(function(w) {
      var D = h.sourceContentFor(w);
      D != null && (g != null && (w = r.join(g, w)), v.setSourceContent(w, D));
    }), v;
    function A(w, D) {
      if (w === null || w.source === void 0)
        v.add(D);
      else {
        var C = g ? r.join(g, w.source) : w.source;
        v.add(new u(
          w.originalLine,
          w.originalColumn,
          C,
          D,
          w.name
        ));
      }
    }
  }, u.prototype.add = function(d) {
    if (Array.isArray(d))
      d.forEach(function(h) {
        this.add(h);
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
      for (var h = d.length - 1; h >= 0; h--)
        this.prepend(d[h]);
    else if (d[l] || typeof d == "string")
      this.children.unshift(d);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + d
      );
    return this;
  }, u.prototype.walk = function(d) {
    for (var h, g = 0, v = this.children.length; g < v; g++)
      h = this.children[g], h[l] ? h.walk(d) : h !== "" && d(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(d) {
    var h, g, v = this.children.length;
    if (v > 0) {
      for (h = [], g = 0; g < v - 1; g++)
        h.push(this.children[g]), h.push(d);
      h.push(this.children[g]), this.children = h;
    }
    return this;
  }, u.prototype.replaceRight = function(d, h) {
    var g = this.children[this.children.length - 1];
    return g[l] ? g.replaceRight(d, h) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(d, h) : this.children.push("".replace(d, h)), this;
  }, u.prototype.setSourceContent = function(d, h) {
    this.sourceContents[r.toSetString(d)] = h;
  }, u.prototype.walkSourceContents = function(d) {
    for (var h = 0, g = this.children.length; h < g; h++)
      this.children[h][l] && this.children[h].walkSourceContents(d);
    for (var v = Object.keys(this.sourceContents), h = 0, g = v.length; h < g; h++)
      d(r.fromSetString(v[h]), this.sourceContents[v[h]]);
  }, u.prototype.toString = function() {
    var d = "";
    return this.walk(function(h) {
      d += h;
    }), d;
  }, u.prototype.toStringWithSourceMap = function(d) {
    var h = {
      code: "",
      line: 1,
      column: 0
    }, g = new t(d), v = !1, _ = null, b = null, m = null, p = null;
    return this.walk(function(x, E) {
      h.code += x, E.source !== null && E.line !== null && E.column !== null ? ((_ !== E.source || b !== E.line || m !== E.column || p !== E.name) && g.addMapping({
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
      }), _ = E.source, b = E.line, m = E.column, p = E.name, v = !0) : v && (g.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), _ = null, v = !1);
      for (var A = 0, w = x.length; A < w; A++)
        x.charCodeAt(A) === s ? (h.line++, h.column = 0, A + 1 === w ? (_ = null, v = !1) : v && g.addMapping({
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
    }), this.walkSourceContents(function(x, E) {
      g.setSourceContent(x, E);
    }), { code: h.code, map: g };
  }, Ed.SourceNode = u, Ed;
}
var ky;
function ew() {
  return ky || (ky = 1, $s.SourceMapGenerator = lb().SourceMapGenerator, $s.SourceMapConsumer = JE().SourceMapConsumer, $s.SourceNode = WE().SourceNode), $s;
}
var jy;
function tw() {
  return jy || (jy = 1, (function(t, r) {
    r.__esModule = !0;
    var a = bn(), s = void 0;
    try {
      var l = ew();
      s = l.SourceNode;
    } catch {
    }
    s || (s = function(d, h, g, v) {
      this.src = "", v && this.add(v);
    }, s.prototype = {
      add: function(h) {
        a.isArray(h) && (h = h.join("")), this.src += h;
      },
      prepend: function(h) {
        a.isArray(h) && (h = h.join("")), this.src = h + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function u(d, h, g) {
      if (a.isArray(d)) {
        for (var v = [], _ = 0, b = d.length; _ < b; _++)
          v.push(h.wrap(d[_], g));
        return v;
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
      prepend: function(h, g) {
        this.source.unshift(this.wrap(h, g));
      },
      push: function(h, g) {
        this.source.push(this.wrap(h, g));
      },
      merge: function() {
        var h = this.empty();
        return this.each(function(g) {
          h.add(["  ", g, `
`]);
        }), h;
      },
      each: function(h) {
        for (var g = 0, v = this.source.length; g < v; g++)
          h(this.source[g]);
      },
      empty: function() {
        var h = this.currentLocation || { start: {} };
        return new s(h.start.line, h.start.column, this.srcFile);
      },
      wrap: function(h) {
        var g = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return h instanceof s ? h : (h = u(h, this, g), new s(g.start.line, g.start.column, this.srcFile, h));
      },
      functionCall: function(h, g, v) {
        return v = this.generateList(v), this.wrap([h, g ? "." + g + "(" : "(", v, ")"]);
      },
      quotedString: function(h) {
        return '"' + (h + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(h) {
        var g = this, v = [];
        Object.keys(h).forEach(function(b) {
          var m = u(h[b], g);
          m !== "undefined" && v.push([g.quotedString(b), ":", m]);
        });
        var _ = this.generateList(v);
        return _.prepend("{"), _.add("}"), _;
      },
      generateList: function(h) {
        for (var g = this.empty(), v = 0, _ = h.length; v < _; v++)
          v && g.add(","), g.add(u(h[v], this));
        return g;
      },
      generateArray: function(h) {
        var g = this.generateList(h);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = f, t.exports = r.default;
  })(au, au.exports)), au.exports;
}
var Ry;
function nw() {
  return Ry || (Ry = 1, (function(t, r) {
    r.__esModule = !0;
    function a(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = fh(), l = nr(), u = a(l), f = bn(), d = tw(), h = a(d);
    function g(b) {
      this.value = b;
    }
    function v() {
    }
    v.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(m, p) {
        return this.internalNameLookup(m, p);
      },
      depthedLookup: function(m) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(m), ")"];
      },
      compilerInfo: function() {
        var m = s.COMPILER_REVISION, p = s.REVISION_CHANGES[m];
        return [m, p];
      },
      appendToBuffer: function(m, p, x) {
        return f.isArray(m) || (m = [m]), m = this.source.wrap(m, p), this.environment.isSimple ? ["return ", m, ";"] : x ? ["buffer += ", m, ";"] : (m.appendToBuffer = !0, m);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(m, p) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", m, ",", JSON.stringify(p), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(m, p, x, E) {
        this.environment = m, this.options = p, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !E, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(m, p), this.useDepths = this.useDepths || m.useDepths || m.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || m.useBlockParams;
        var A = m.opcodes, w = void 0, D = void 0, C = void 0, T = void 0;
        for (C = 0, T = A.length; C < T; C++)
          w = A[C], this.source.currentLocation = w.loc, D = D || w.loc, this[w.opcode].apply(this, w.args);
        if (this.source.currentLocation = D, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), E ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(E);
        if (this.isChild)
          return M;
        var R = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (R.main_d = this.decorators, R.useDecorators = !0);
        var L = this.context, Y = L.programs, U = L.decorators;
        for (C = 0, T = Y.length; C < T; C++)
          Y[C] && (R[C] = Y[C], U[C] && (R[C + "_d"] = U[C], R.useDecorators = !0));
        return this.environment.usePartial && (R.usePartial = !0), this.options.data && (R.useData = !0), this.useDepths && (R.useDepths = !0), this.useBlockParams && (R.useBlockParams = !0), this.options.compat && (R.compat = !0), E ? R.compilerOptions = this.options : (R.compiler = JSON.stringify(R.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, R = this.objectLiteral(R), p.srcName ? (R = R.toStringWithSourceMap({ file: p.destName }), R.map = R.map && R.map.toString()) : R = R.toString()), R;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(m) {
        var p = this, x = "", E = this.stackVars.concat(this.registers.list);
        E.length > 0 && (x += ", " + E.join(", "));
        var A = 0;
        Object.keys(this.aliases).forEach(function(C) {
          var T = p.aliases[C];
          T.children && T.referenceCount > 1 && (x += ", alias" + ++A + "=" + C, T.children[0] = "alias" + A);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var D = this.mergeSource(x);
        return m ? (w.push(D), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(m) {
        var p = this.environment.isSimple, x = !this.forceBuffer, E = void 0, A = void 0, w = void 0, D = void 0;
        return this.source.each(function(C) {
          C.appendToBuffer ? (w ? C.prepend("  + ") : w = C, D = C) : (w && (A ? w.prepend("buffer += ") : E = !0, D.add(";"), w = D = void 0), A = !0, p || (x = !1));
        }), x ? w ? (w.prepend("return "), D.add(";")) : A || this.source.push('return "";') : (m += ", buffer = " + (E ? "" : this.initializeBuffer()), w ? (w.prepend("return buffer + "), D.add(";")) : this.source.push("return buffer;")), m && this.source.prepend("var " + m.substring(2) + (E ? "" : `;
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
        var p = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(m, 0, x);
        var E = this.popStack();
        x.splice(1, 0, E), this.push(this.source.functionCall(p, "call", x));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var m = this.aliasable("container.hooks.blockHelperMissing"), p = [this.contextName(0)];
        this.setupHelperArgs("", 0, p, !0), this.flushInline();
        var x = this.topStack();
        p.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(m, "call", p), "}"]);
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
          this.replaceStack(function(p) {
            return [" != null ? ", p, ' : ""'];
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
      lookupOnContext: function(m, p, x, E) {
        var A = 0;
        !E && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(m[A++])) : this.pushContext(), this.resolvePath("context", m, A, p, x);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(m, p) {
        this.useBlockParams = !0, this.push(["blockParams[", m[0], "][", m[1], "]"]), this.resolvePath("context", p, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(m, p, x) {
        m ? this.pushStackLiteral("container.data(data, " + m + ")") : this.pushStackLiteral("data"), this.resolvePath("data", p, 0, !0, x);
      },
      resolvePath: function(m, p, x, E, A) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(_(this.options.strict && A, this, p, x, m));
          return;
        }
        for (var D = p.length; x < D; x++)
          this.replaceStack(function(C) {
            var T = w.nameLookup(C, p[x], m);
            return E ? [" && ", T] : [" != null ? ", T, " : ", C];
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
      pushStringParam: function(m, p) {
        this.pushContext(), this.pushString(p), p !== "SubExpression" && (typeof m == "string" ? this.pushString(m) : this.pushStackLiteral(m));
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
      registerDecorator: function(m, p) {
        var x = this.nameLookup("decorators", p, "decorator"), E = this.setupHelperArgs(p, m);
        this.decorators.push(["fn = ", this.decorators.functionCall(x, "", ["fn", "props", "container", E]), " || fn;"]);
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
      invokeHelper: function(m, p, x) {
        var E = this.popStack(), A = this.setupHelper(m, p), w = [];
        x && w.push(A.name), w.push(E), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(w, "||"), ")"], C = this.source.functionCall(D, "call", A.callParams);
        this.push(C);
      },
      itemsSeparatedBy: function(m, p) {
        var x = [];
        x.push(m[0]);
        for (var E = 1; E < m.length; E++)
          x.push(p, m[E]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(m, p) {
        var x = this.setupHelper(m, p);
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
      invokeAmbiguous: function(m, p) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var E = this.setupHelper(0, m, p), A = this.lastHelper = this.nameLookup("helpers", m, "helper"), w = ["(", "(helper = ", A, " || ", x, ")"];
        this.options.strict || (w[0] = "(helper = ", w.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", w, E.paramsInit ? ["),(", E.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", E.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(m, p, x) {
        var E = [], A = this.setupParams(p, 1, E);
        m && (p = this.popStack(), delete A.name), x && (A.indent = JSON.stringify(x)), A.helpers = "helpers", A.partials = "partials", A.decorators = "container.decorators", m ? E.unshift(p) : E.unshift(this.nameLookup("partials", p, "partial")), this.options.compat && (A.depths = "depths"), A = this.objectLiteral(A), E.push(A), this.push(this.source.functionCall("container.invokePartial", "", E));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(m) {
        var p = this.popStack(), x = void 0, E = void 0, A = void 0;
        this.trackIds && (A = this.popStack()), this.stringParams && (E = this.popStack(), x = this.popStack());
        var w = this.hash;
        x && (w.contexts[m] = x), E && (w.types[m] = E), A && (w.ids[m] = A), w.values[m] = p;
      },
      pushId: function(m, p, x) {
        m === "BlockParam" ? this.pushStackLiteral("blockParams[" + p[0] + "].path[" + p[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : m === "PathExpression" ? this.pushString(p) : m === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: v,
      compileChildren: function(m, p) {
        for (var x = m.children, E = void 0, A = void 0, w = 0, D = x.length; w < D; w++) {
          E = x[w], A = new this.compiler();
          var C = this.matchExistingProgram(E);
          if (C == null) {
            this.context.programs.push("");
            var T = this.context.programs.length;
            E.index = T, E.name = "program" + T, this.context.programs[T] = A.compile(E, p, this.context, !this.precompile), this.context.decorators[T] = A.decorators, this.context.environments[T] = E, this.useDepths = this.useDepths || A.useDepths, this.useBlockParams = this.useBlockParams || A.useBlockParams, E.useDepths = this.useDepths, E.useBlockParams = this.useBlockParams;
          } else
            E.index = C.index, E.name = "program" + C.index, this.useDepths = this.useDepths || C.useDepths, this.useBlockParams = this.useBlockParams || C.useBlockParams;
        }
      },
      matchExistingProgram: function(m) {
        for (var p = 0, x = this.context.environments.length; p < x; p++) {
          var E = this.context.environments[p];
          if (E && E.equals(m))
            return E;
        }
      },
      programExpression: function(m) {
        var p = this.environment.children[m], x = [p.index, "data", p.blockParams];
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
        var p = ["("], x = void 0, E = void 0, A = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof g)
          x = [w.value], p = ["(", x], A = !0;
        else {
          E = !0;
          var D = this.incrStack();
          p = ["((", this.push(D), " = ", w, ")"], x = this.topStack();
        }
        var C = m.call(this, x);
        A || this.popStack(), E && this.stackSlot--, this.push(p.concat(C, ")"));
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
        for (var p = 0, x = m.length; p < x; p++) {
          var E = m[p];
          if (E instanceof g)
            this.compileStack.push(E);
          else {
            var A = this.incrStack();
            this.pushSource([A, " = ", E, ";"]), this.compileStack.push(A);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(m) {
        var p = this.isInline(), x = (p ? this.inlineStack : this.compileStack).pop();
        if (!m && x instanceof g)
          return x.value;
        if (!p) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
      },
      topStack: function() {
        var m = this.isInline() ? this.inlineStack : this.compileStack, p = m[m.length - 1];
        return p instanceof g ? p.value : p;
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
        var p = this.aliases[m];
        return p ? (p.referenceCount++, p) : (p = this.aliases[m] = this.source.wrap(m), p.aliasable = !0, p.referenceCount = 1, p);
      },
      setupHelper: function(m, p, x) {
        var E = [], A = this.setupHelperArgs(p, m, E, x), w = this.nameLookup("helpers", p, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: E,
          paramsInit: A,
          name: w,
          callParams: [D].concat(E)
        };
      },
      setupParams: function(m, p, x) {
        var E = {}, A = [], w = [], D = [], C = !x, T = void 0;
        C && (x = []), E.name = this.quotedString(m), E.hash = this.popStack(), this.trackIds && (E.hashIds = this.popStack()), this.stringParams && (E.hashTypes = this.popStack(), E.hashContexts = this.popStack());
        var M = this.popStack(), R = this.popStack();
        (R || M) && (E.fn = R || "container.noop", E.inverse = M || "container.noop");
        for (var L = p; L--; )
          T = this.popStack(), x[L] = T, this.trackIds && (D[L] = this.popStack()), this.stringParams && (w[L] = this.popStack(), A[L] = this.popStack());
        return C && (E.args = this.source.generateArray(x)), this.trackIds && (E.ids = this.source.generateArray(D)), this.stringParams && (E.types = this.source.generateArray(w), E.contexts = this.source.generateArray(A)), this.options.data && (E.data = "data"), this.useBlockParams && (E.blockParams = "blockParams"), E;
      },
      setupHelperArgs: function(m, p, x, E) {
        var A = this.setupParams(m, p, x);
        return A.loc = JSON.stringify(this.source.currentLocation), A = this.objectLiteral(A), E ? (this.useRegister("options"), x.push("options"), ["options=", A]) : x ? (x.push(A), "") : A;
      }
    }, (function() {
      for (var b = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), m = v.RESERVED_WORDS = {}, p = 0, x = b.length; p < x; p++)
        m[b[p]] = !0;
    })(), v.isValidJavaScriptVariableName = function(b) {
      return !v.RESERVED_WORDS[b] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(b);
    };
    function _(b, m, p, x, E) {
      var A = m.popStack(), w = p.length;
      for (b && w--; x < w; x++)
        A = m.nameLookup(A, p[x], E);
      return b ? [m.aliasable("container.strict"), "(", A, ", ", m.quotedString(p[x]), ", ", JSON.stringify(m.source.currentLocation), " )"] : A;
    }
    r.default = v, t.exports = r.default;
  })(ru, ru.exports)), ru.exports;
}
var zy;
function rw() {
  return zy || (zy = 1, (function(t, r) {
    r.__esModule = !0;
    function a(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var s = HE(), l = a(s), u = ab(), f = a(u), d = VE(), h = YE(), g = nw(), v = a(g), _ = ib(), b = a(_), m = rb(), p = a(m), x = l.default.create;
    function E() {
      var w = x();
      return w.compile = function(D, C) {
        return h.compile(D, C, w);
      }, w.precompile = function(D, C) {
        return h.precompile(D, C, w);
      }, w.AST = f.default, w.Compiler = h.Compiler, w.JavaScriptCompiler = v.default, w.Parser = d.parser, w.parse = d.parse, w.parseWithoutProcessing = d.parseWithoutProcessing, w;
    }
    var A = E();
    A.create = E, p.default(A), A.Visitor = b.default, A.default = A, r.default = A, t.exports = r.default;
  })(Ll, Ll.exports)), Ll.exports;
}
var Jt = rw();
function Gi(t, r) {
  Jt.helpers[t] || Jt.registerHelper(t, r);
}
Gi("add", (t, r) => Number(t) + Number(r));
Gi("join", (t, r) => Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "");
Gi("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
Gi("indent", (t, r) => {
  const a = " ".repeat(Math.max(0, Number(t) || 0));
  return String(r ?? "").split(`
`).join(`
${a}`);
});
Gi("json", (t) => JSON.stringify(t));
Gi(
  "xmlEscape",
  (t) => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
);
const on = SillyTavern.getContext();
new b0("dumb", {}).getSettings();
async function aw({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: a,
  continueFrom: s,
  session: l,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: d,
  formatDescription: h,
  mainContextList: g,
  includeUserMacro: v,
  maxResponseToken: _,
  targetField: b,
  outputFormat: m
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const p = on.extensionSettings.connectionManager?.profiles?.find((L) => L.id === t);
  if (!p)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const x = p.api ? on.CONNECT_API_MAP[p.api]?.selected : void 0;
  if (!x)
    throw new Error(`Could not determine API for profile "${p.name}".`);
  const E = {};
  E.char = l.fields.name?.value || "{{char}}", E.user = v && Or ? Or : "{{user}}", E.persona = "{{persona}}", E.targetField = b, E.userInstructions = Jt.compile(r.trim(), { noEscape: !0 })(E);
  const A = l.draftFields[b]?.prompt ?? l.fields[b]?.prompt ?? "";
  E.fieldSpecificInstructions = Jt.compile(A, { noEscape: !0 })({
    ...E,
    char: b === "mes_example" ? "{{char}}" : E.char,
    user: b === "mes_example" ? "{{user}}" : E.user
  }), E.activeFormatInstructions = Jt.compile(h.content, { noEscape: !0 })(
    E
  );
  {
    const L = [];
    l.selectedCharacterIndexes.forEach((Y) => {
      const U = parseInt(Y), q = u[U];
      q && L.push(q);
    }), E.characters = L;
  }
  {
    const L = {};
    Object.entries(f).filter(
      ([Y, U]) => U.length > 0 && l.selectedWorldNames.includes(Y) && U.some((q) => !q.disable)
    ).forEach(([Y, U]) => {
      L[Y] = U.filter((q) => !q.disable);
    }), E.lorebooks = L;
  }
  {
    const L = {}, Y = {}, U = {}, q = b.startsWith("alternate_greetings_"), Q = mt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(l.fields).forEach(([fe, _e]) => {
      let P = !1;
      if (Q) {
        const ae = fe.startsWith("alternate_greetings_");
        q ? P = ae && fe !== b || fe === "first_mes" : P = ae;
      }
      if (!P) {
        const ae = Jt.compile(_e.value, { noEscape: !0 })({
          ...E,
          char: fe === "mes_example" ? "{{char}}" : E.char,
          user: fe === "mes_example" ? "{{user}}" : E.user
        });
        kn.includes(fe) ? L[_e.label] = ae : fe.startsWith("alternate_greetings_") && (Y[fe] = ae);
      }
    }), Object.entries(l.draftFields || {}).forEach(([fe, _e]) => {
      U[_e.label] = Jt.compile(_e.value, { noEscape: !0 })(E);
    });
    const pe = {};
    Object.keys(L).length > 0 && (pe.core = L), Object.keys(Y).length > 0 && (pe.alternate_greetings = Y), Object.keys(U).length > 0 && (pe.draft = U), E.fields = pe;
  }
  const w = [];
  {
    for (const L of g) {
      if (L.promptName === "chatHistory") {
        const Q = await O0(x, a);
        if (Q.warnings && Q.warnings.length > 0)
          for (const pe of Q.warnings)
            ve("warning", pe);
        w.push(...Q.result);
        continue;
      }
      let Y = structuredClone(E);
      L.promptName === "stDescription" && (Y.char = "{{char}}", Y.user = "{{user}}");
      const U = d[L.promptName];
      if (!U)
        continue;
      const q = {
        role: L.role,
        content: Jt.compile(U.content, { noEscape: !0 })(Y)
      };
      q.content = q.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), q.content = q.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), q.content = on.substituteParams(q.content), q.content = q.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), q.content = q.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), q.content && w.push(q);
    }
    s && w.push({
      role: "assistant",
      content: Yv(s, m)
    });
  }
  const D = Tu(), C = await on.ConnectionManagerRequestService.sendRequest(
    t,
    w,
    _,
    void 0,
    D
  ), T = s ? Yv(s, m) + C.content : C.content, M = J0(T, m);
  let R;
  if (typeof M == "string")
    R = M;
  else if (typeof M == "object" && M !== null)
    if ("response" in M && typeof M.response == "string")
      R = M.response;
    else {
      const L = Object.values(M)[0];
      R = L ? String(L) : "";
    }
  else
    R = "";
  return R;
}
const Gn = "SillyTavern-Character-Creator-Chat", ub = "0.3.0", cb = "F_2.02", iw = [
  { value: "default", label: "Default (Use Preset)" },
  { value: "min", label: "Min" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "max", label: "Max" }
], sw = {
  EXTENSION: "charCreator"
}, ro = [
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
], rt = {
  stDescription: Fd,
  charDefinitions: oh,
  lorebookDefinitions: Z0,
  xmlFormat: wx,
  jsonFormat: Cx,
  noneFormat: Nx,
  worldInfoCharDefinition: G0,
  existingFieldDefinitions: co,
  taskDescription: uh,
  outputFormatInstructions: lh,
  personaDescription: Ax,
  reviseJsonPrompt: Tx,
  reviseXmlPrompt: Ox,
  reviseTaskDescription: Dx,
  brainstormSystemPrompt: V0,
  brainstormExtractPrompt: Y0
}, Au = {
  version: ub,
  formatVersion: cb,
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
      content: rt.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: rt.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: rt.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: rt.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: rt.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: rt.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: rt.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: co,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: uh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: lh,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: rt.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: rt.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: rt.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: rt.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    },
    brainstormSystemPrompt: {
      content: V0,
      isDefault: !0,
      label: "Brainstorm System Prompt"
    },
    brainstormExtractPrompt: {
      content: Y0,
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
  brainstormContextTemplatePreset: "default",
  brainstormContextTemplatePresets: {
    default: {
      prompts: [
        {
          enabled: !0,
          promptName: "brainstormSystemPrompt",
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
          // Consumed by the "Draft Card" extraction request, not the opening context: its role and
          // enabled flag apply there, its position in this list does not.
          enabled: !0,
          promptName: "brainstormExtractPrompt",
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
function Tu() {
  const t = mt.getSettings();
  return t.thinkingLevel && t.thinkingLevel !== "default" ? { reasoning_effort: t.thinkingLevel } : {};
}
const mt = new b0(sw.EXTENSION, Au), ow = ["F_1.9", "F_1.10", "F_1.11", "F_1.12", "F_1.13", "F_1.14", "F_2.00", "F_2.01"], lw = (t) => {
  const r = structuredClone(t);
  r.prompts = r.prompts ?? {};
  for (const a of ro)
    r.prompts[a] || (r.prompts[a] = {
      content: rt[a],
      isDefault: !0,
      label: Au.prompts[a].label
    });
  r.thinkingLevel = r.thinkingLevel ?? "default", r.prompts.reviseXmlPrompt.isDefault !== !1 && (r.prompts.reviseXmlPrompt.content = rt.reviseXmlPrompt), r.prompts.charDefinitions.isDefault && (r.prompts.charDefinitions.content = oh), r.prompts.worldInfoCharDefinition.isDefault && (r.prompts.worldInfoCharDefinition.content = G0), r.brainstormContextTemplatePresets?.default || (r.brainstormContextTemplatePresets = structuredClone(Au.brainstormContextTemplatePresets)), r.brainstormContextTemplatePreset = r.brainstormContextTemplatePreset ?? "default";
  for (const a of Object.values(r.brainstormContextTemplatePresets))
    a.prompts.some((s) => s.promptName === "brainstormExtractPrompt") || a.prompts.push({ enabled: !0, promptName: "brainstormExtractPrompt", role: "user" });
  return r;
};
async function uw() {
  return new Promise((t, r) => {
    mt.initializeSettings({
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
                  content: rt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: rt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: rt.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: rt.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: rt.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: rt.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: rt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: co,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: uh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: lh,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: rt.personaDescription,
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
                  content: rt.personaDescription,
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
            return await ve("info", `[${Gn}] Added Alternate Greetings.`), {
              ...a,
              prompts: {
                ...a?.prompts,
                stDescription: {
                  content: rt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: rt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: rt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: co,
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
            return a.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Fd), s;
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
              content: rt.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: rt.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: rt.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, a.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = oh), a.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = Z0), a.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = co), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(a) {
            const s = {
              ...a
            };
            return a.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Fd), s;
          }
        },
        // Every install at F_1.9 or later lands on F_2.00 in one idempotent step. See
        // LEGACY_FORMAT_VERSIONS above for why the original one-step-at-a-time chain could not work.
        ...ow.map((a) => ({ from: a, to: cb, action: lw }))
      ]
    }).then((a) => {
      t();
    }).catch((a) => {
      console.error(`[${Gn}] Error initializing settings:`, a), ve("error", `[${Gn}] Failed to initialize settings: ${a.message}`), on.Popup.show.confirm(
        `[${Gn}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s ? (mt.resetSettings(), ve("success", `[${Gn}] Settings reset. Reloading may be required.`)) : ve("warning", `[${Gn}] Continuing with default settings for this session.`);
      }).catch((s) => {
        console.error(`[${Gn}] Failed to show settings reset prompt:`, s);
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
}, cw = ({ label: t, className: r, overrideDefaults: a = !1, type: s = "text", ...l }) => {
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
}, Ou = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const l = G.useMemo(() => {
    const u = [];
    return a || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ S.jsx("select", { className: l, ...s, children: t });
}, Wt = ({ children: t, className: r, overrideDefaults: a = !1, ...s }) => {
  const l = G.useMemo(() => {
    const u = [];
    return a || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [a, r]);
  return /* @__PURE__ */ S.jsx("textarea", { className: l, ...s, children: t });
};
var fw = v0(), vn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(vn || {}), sa = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(sa || {});
const dw = SillyTavern.getContext(), Ba = ({
  content: t,
  type: r,
  inputValue: a = "",
  options: s = {},
  preventEscape: l = !1,
  onComplete: u
}) => {
  var f;
  const d = G.useRef(null), h = G.useRef(null), [g, v] = G.useState(!1), [_, b] = G.useState(null), m = G.useRef(dw.uuidv4()), p = G.useRef({
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
    const w = d.current;
    if (!w) return;
    const D = (C) => {
      C.preventDefault(), l || x(sa.CANCELLED);
    };
    return w.addEventListener("cancel", D), p.current.dlg = w, p.current.mainInput = h.current, Di.util.popups.push(p.current), w.showModal || (w.classList.add("poly_dialog"), pv.registerDialog(w), new ResizeObserver((C) => {
      for (const T of C)
        pv.reposition(T.target);
    }).observe(w)), w.showModal(), Wf(), () => {
      hv(Di.util.popups, p.current), Wf(), w.removeEventListener("cancel", D);
    };
  }, []);
  const x = async (w) => {
    var D, C;
    let T = w;
    if (r === vn.INPUT && (w >= sa.AFFIRMATIVE ? T = (D = h.current) == null ? void 0 : D.value : w === sa.NEGATIVE ? T = !1 : w === sa.CANCELLED ? T = null : T = !1), (C = s.customInputs) != null && C.length) {
      const R = new Map(
        s.customInputs.map((L) => {
          var Y;
          const U = (Y = d.current) == null ? void 0 : Y.querySelector(`#${L.id}`);
          return [U.id, U.checked];
        })
      );
      p.current.inputResults = R;
    }
    if (p.current.result = w, p.current.value = T, s.onClosing && !await s.onClosing(p.current)) {
      v(!0), p.current.value = void 0, p.current.result = void 0, p.current.inputResults = void 0;
      return;
    }
    v(!1), Di.util.lastResult = {
      value: T,
      result: w,
      inputResults: p.current.inputResults
    };
    const M = d.current;
    M && (M.setAttribute("closing", ""), Wf(), D2(M, async () => {
      var R;
      if (M.close(), s.onClose && await s.onClose(p.current), hv(Di.util.popups, p.current), Di.util.popups.length > 0) {
        const L = (R = document.activeElement) == null ? void 0 : R.closest(".popup"), Y = L?.getAttribute("data-id"), U = Di.util.popups.find((q) => q.id === Y);
        U && U.lastFocus && U.lastFocus.focus();
      }
      u(T);
    }));
  }, E = (w) => {
    w.target instanceof HTMLElement && w.target !== d.current && (b(w.target), p.current.lastFocus = w.target);
  }, A = async (w) => {
  };
  return fw.createPortal(
    /* @__PURE__ */ S.jsx(
      "dialog",
      {
        ref: d,
        className: (() => {
          const w = ["popup"];
          return s.wide && w.push("wide_dialogue_popup"), s.wider && w.push("wider_dialogue_popup"), s.large && w.push("large_dialogue_popup"), s.transparent && w.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && w.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && w.push("vertical_scrolling_dialogue_popup"), s.animation && w.push(`popup--animation-${s.animation}`), w.join(" ");
        })(),
        "data-id": m.current,
        onKeyDown: A,
        onFocus: E,
        children: /* @__PURE__ */ S.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ S.jsx("div", { className: "popup-content", children: t }),
          r === vn.INPUT && /* @__PURE__ */ S.jsx(
            "textarea",
            {
              ref: h,
              className: "popup-input text_pole result-control auto-select",
              rows: s.rows ?? 1,
              defaultValue: a,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          s.customInputs && /* @__PURE__ */ S.jsx("div", { className: "popup-inputs", children: s.customInputs.map((w) => /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: w.id, children: [
            /* @__PURE__ */ S.jsx("input", { type: "checkbox", id: w.id, defaultChecked: w.defaultState }),
            /* @__PURE__ */ S.jsx("span", { "data-i18n": w.label, children: w.label }),
            w.tooltip && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: w.tooltip,
                "data-i18n": `[title]${w.tooltip}`
              }
            )
          ] }, w.id)) }),
          r !== vn.DISPLAY && /* @__PURE__ */ S.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((w, D) => {
              const C = typeof w == "string" ? { text: w, result: D + 2 } : w;
              return /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${C.classes ?? ""}`,
                  "data-result": C.result,
                  onClick: () => {
                    var T;
                    (T = C.action) == null || T.call(C), x(C.result ?? D + 2);
                  },
                  "data-i18n": C.text,
                  children: C.text
                },
                D
              );
            }),
            r !== vn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => x(sa.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== vn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => x(sa.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === vn.DISPLAY && /* @__PURE__ */ S.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => x(sa.CANCELLED),
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
}, Ks = (t, r, a) => {
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
}, Tr = SillyTavern.getContext(), fb = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: a = "Select a Connection Profile",
  onChange: s,
  onCreate: l,
  onUpdate: u,
  onDelete: f
}) => {
  const [d, h] = G.useState(t ?? ""), [g, v] = G.useState(Date.now()), { isEnabled: _, profiles: b, connectApiMap: m } = G.useMemo(() => {
    var E, A;
    return (E = Tr.extensionSettings.disabledExtensions) != null && E.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((A = Tr.extensionSettings.connectionManager) == null ? void 0 : A.profiles) ?? [],
      connectApiMap: Tr.CONNECT_API_MAP
    };
  }, [g]);
  G.useEffect(() => {
    if (!_) return;
    const E = (D) => {
      Ks(D, r, m) && (v(Date.now()), l?.(D));
    }, A = (D, C) => {
      const T = Ks(D, r, m), M = Ks(C, r, m);
      (T || M) && v(Date.now()), u?.(D, C), d === D.id && !M && (h(""), s?.(void 0));
    }, w = (D) => {
      Ks(D, r, m) && (v(Date.now()), f?.(D), d === D.id && (h(""), s?.(void 0)));
    };
    return Tr.eventSource.on("CONNECTION_PROFILE_CREATED", E), Tr.eventSource.on("CONNECTION_PROFILE_UPDATED", A), Tr.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      Tr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", E), Tr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", A), Tr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [_, d, r, m, s, l, u, f]);
  const p = G.useMemo(() => {
    if (!_) return [];
    const E = b.filter((w) => Ks(w, r, m)), A = {};
    for (const [w, D] of Object.entries(r))
      A[w] = { label: D, profiles: [] };
    for (const w of E) {
      const D = m[w.api];
      A[D.selected] && A[D.selected].profiles.push(w);
    }
    for (const w of Object.values(A))
      w.profiles.sort((D, C) => (D.name ?? "").localeCompare(C.name ?? ""));
    return Object.values(A).filter((w) => w.profiles.length > 0);
  }, [_, b, r, m]), x = G.useCallback(
    (E) => {
      const A = E.target.value;
      h(A);
      const w = b.find((D) => D.id === A);
      s?.(w);
    },
    [b, s]
  );
  return _ ? /* @__PURE__ */ S.jsxs(Ou, { value: d, onChange: x, children: [
    /* @__PURE__ */ S.jsx("option", { value: "", children: a }),
    p.map((E) => /* @__PURE__ */ S.jsx("optgroup", { label: E.label, children: E.profiles.map((A) => /* @__PURE__ */ S.jsx("option", { value: A.id, children: A.name }, A.id)) }, E.label))
  ] }) : /* @__PURE__ */ S.jsx(Ou, { disabled: !0, value: "", children: /* @__PURE__ */ S.jsx("option", { children: "Connection Manager disabled" }) });
}, hw = yu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: a, showSelectInput: s, onToggle: l, onDelete: u, onSelectChange: f }) => {
    const {
      id: d,
      label: h,
      enabled: g,
      canDelete: v = !0,
      canToggle: _ = !0,
      showSelect: b = !0,
      canSelect: m = !0,
      selectOptions: p = [],
      selectValue: x
    } = t, E = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !g ? 0.6 : 1
    }, A = { cursor: "pointer", flexShrink: 0 }, w = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ S.jsxs("li", { className: "sortable-list-item", style: E, "data-id": d, children: [
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
          children: h
        }
      ),
      s && b && m && /* @__PURE__ */ S.jsx(
        Ou,
        {
          value: x,
          onChange: (D) => f(d, D.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: p.length === 0 ? /* @__PURE__ */ S.jsx("option", { disabled: !0, children: "--" }) : p.map((D) => /* @__PURE__ */ S.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!b || !m) && /* @__PURE__ */ S.jsx("span", { style: w }),
      r && _ && /* @__PURE__ */ S.jsx(
        ce,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${g ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...A,
            marginRight: "10px",
            fontSize: "1.2em",
            color: g ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => l(d)
        }
      ),
      r && !_ && /* @__PURE__ */ S.jsx("span", { style: w }),
      a && v && /* @__PURE__ */ S.jsx(
        ce,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...A,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(d)
        }
      ),
      a && !v && /* @__PURE__ */ S.jsx("span", { style: { ...w, marginRight: 0 } })
    ] });
  }
), pw = ({
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
      const p = Array.from(t), [x] = p.splice(b, 1);
      p.splice(m, 0, x), r(p);
    }
  })), () => {
    var _;
    (_ = d.current) == null || _.destroy(), d.current = null;
  }), [t, r, u]);
  const h = (_) => {
    r(t.map((b) => b.id === _ ? { ...b, enabled: !b.enabled } : b));
  }, g = (_) => {
    r(t.filter((b) => b.id !== _));
  }, v = (_, b) => {
    r(t.map((m) => m.id === _ ? { ...m, selectValue: b } : m));
  };
  return /* @__PURE__ */ S.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ S.jsx(
    hw,
    {
      item: _,
      showToggleButton: a,
      showDeleteButton: s,
      showSelectInput: l,
      onToggle: h,
      onDelete: g,
      onSelectChange: v
    },
    _.id
  )) });
}, ou = ({
  items: t,
  value: r,
  onChange: a,
  placeholder: s = "Select items...",
  closeOnSelect: l = !1,
  multiple: u = !0,
  disabled: f = !1,
  onBeforeSelection: d,
  enableSearch: h = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: v = "No results found",
  searchFuseOptions: _,
  inputClasses: b,
  containerClasses: m
}) => {
  const [p, x] = G.useState(!1), [E, A] = G.useState(""), w = G.useRef(null);
  G.useEffect(() => {
    const R = (L) => {
      w.current && !w.current.contains(L.target) && x(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, []), G.useEffect(() => {
    p || A("");
  }, [p]);
  const D = G.useMemo(() => {
    if (!h) return null;
    const R = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ..._
    };
    return new Zi(t, R);
  }, [t, h, _]), C = G.useMemo(() => !h || !E.trim() || !D ? t : D.search(E.trim()).map((R) => R.item), [t, E, h, D]), T = async (R) => {
    let L;
    u ? L = r.includes(R) ? r.filter((Y) => Y !== R) : [...r, R] : L = r.includes(R) ? [] : [R], !(d && !await Promise.resolve(d(r, L))) && (a(L), l && x(!1));
  }, M = G.useMemo(() => {
    var R;
    return r.length === 0 ? s : r.length === 1 ? ((R = t.find((L) => L.value === r[0])) == null ? void 0 : R.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      ref: w,
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
            onClick: () => !f && x(!p),
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
              /* @__PURE__ */ S.jsx("i", { className: `fas ${p ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        p && /* @__PURE__ */ S.jsxs(
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
              h && /* @__PURE__ */ S.jsx(
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
                    cw,
                    {
                      type: "text",
                      placeholder: g,
                      value: E,
                      onChange: (R) => A(R.target.value),
                      autoFocus: !0,
                      className: b
                    }
                  )
                }
              ),
              /* @__PURE__ */ S.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: C.length > 0 ? C.map((R) => /* @__PURE__ */ S.jsx(
                mw,
                {
                  item: R,
                  isSelected: r.includes(R.value),
                  onClick: T
                },
                R.value
              )) : /* @__PURE__ */ S.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: v
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, mw = yu.memo(({ item: t, isSelected: r, onClick: a }) => {
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
}), wd = SillyTavern.getContext(), Du = ({
  value: t,
  items: r,
  readOnlyValues: a = [],
  label: s,
  onChange: l,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: d = !1,
  enableDelete: h = !1,
  onCreate: g,
  onRename: v,
  onDelete: _,
  buttons: b
}) => {
  const m = G.useMemo(() => r.find((w) => w.value === t), [r, t]), p = G.useCallback((w) => w ? a.includes(w) : !1, [a]), x = async () => {
    const w = await wd.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const D = w.trim();
    if (r.some((T) => T.value === D)) {
      await ve("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: D, label: D };
    if (g) {
      const T = await Promise.resolve(g(D));
      if (!T.confirmed) return;
      T.value && (typeof T.value == "string" ? C = { value: T.value, label: T.value } : C = T.value);
    }
    u([...r, C]), l(C.value, t);
  }, E = async () => {
    if (!m) {
      await ve("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (p(m.value)) {
      await ve("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await wd.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${m.label}":`,
      m.label
    );
    if (!w || w.trim() === "" || w.trim() === m.value) return;
    const D = w.trim();
    if (r.some((M) => M.value === D)) {
      await ve("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: D, label: D };
    if (v) {
      const M = await Promise.resolve(v(m.value, D));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? C = { value: M.value, label: M.value } : C = M.value);
    }
    const T = r.map((M) => M.value === m.value ? C : M);
    u(T), l(C.value, t);
  }, A = async () => {
    var w;
    if (!m) {
      await ve("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (p(m.value)) {
      await ve("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await wd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${m.label}"?`
    ) || _ && !await Promise.resolve(_(m.value)))
      return;
    const D = r.findIndex((M) => M.value === m.value), C = r.filter((M) => M.value !== m.value);
    u(C);
    let T;
    if (C.length > 0) {
      const M = Math.min(D, C.length - 1);
      T = (w = C[M]) == null ? void 0 : w.value;
    }
    l(T, t);
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ S.jsx(Ou, { value: t ?? "", onChange: (w) => l(w.target.value, t), children: r.map((w) => /* @__PURE__ */ S.jsx("option", { value: w.value, children: w.label }, w.value)) }),
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
        onClick: E,
        disabled: !m,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ S.jsx(
      ce,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: A,
        disabled: !m,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    b?.map((w) => /* @__PURE__ */ S.jsx(
      ce,
      {
        className: w.icon,
        title: w.title,
        onClick: w.onClick,
        disabled: w.disabled,
        "data-i18n": w.i18n ? `[title]${w.i18n}` : void 0
      },
      w.key
    ))
  ] });
}, db = () => {
  const [, t] = G.useState(0);
  return G.useCallback(() => {
    t((a) => a + 1);
  }, []);
}, Cd = SillyTavern.getContext(), Ly = ({
  title: t,
  restoreTitle: r,
  presetName: a,
  presets: s,
  prompts: l,
  blockNotes: u,
  onPresetNameChange: f,
  onPresetsChange: d,
  onListChange: h,
  onRestoreDefault: g
}) => {
  const v = Object.keys(s).map((b) => ({ value: b, label: b })), _ = (s[a]?.prompts ?? []).map((b) => {
    const m = l[b.promptName], p = m ? `${m.label} (${b.promptName})` : b.promptName, x = u?.[b.promptName];
    return {
      id: b.promptName,
      label: x ? `${p} — ${x}` : p,
      enabled: b.enabled,
      selectValue: b.role,
      selectOptions: [
        { value: "user", label: "User" },
        { value: "assistant", label: "Assistant" },
        { value: "system", label: "System" }
      ]
    };
  });
  return /* @__PURE__ */ S.jsxs("div", { style: { marginTop: "10px" }, children: [
    /* @__PURE__ */ S.jsxs("div", { className: "title_restorable", children: [
      /* @__PURE__ */ S.jsx("span", { children: t }),
      /* @__PURE__ */ S.jsx(ce, { className: "fa-solid fa-undo", title: r, onClick: g })
    ] }),
    /* @__PURE__ */ S.jsx(
      Du,
      {
        label: "Template",
        items: v,
        value: a,
        readOnlyValues: ["default"],
        onChange: f,
        onItemsChange: d,
        enableCreate: !0,
        enableRename: !0,
        enableDelete: !0
      }
    ),
    /* @__PURE__ */ S.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(pw, { items: _, onItemsChange: h, showSelectInput: !0, showToggleButton: !0 }) })
  ] });
}, gw = {
  main: { presetKey: "mainContextTemplatePreset", presetsKey: "mainContextTemplatePresets" },
  brainstorm: { presetKey: "brainstormContextTemplatePreset", presetsKey: "brainstormContextTemplatePresets" }
}, vw = () => {
  const t = db(), r = mt.getSettings(), [a, s] = G.useState(ro[0]), l = G.useCallback(
    (x) => {
      const E = mt.getSettings();
      x(E), mt.saveSettings(), t();
    },
    [t]
  ), u = G.useMemo(
    () => Object.entries(r.prompts).map(([x, E]) => ({
      value: x,
      label: `${E.label} (${x})`
    })),
    [r.prompts]
  ), f = (x) => {
    const { presetKey: E, presetsKey: A } = gw[x];
    return {
      onPresetNameChange: (w) => l((D) => {
        D[E] = w ?? "default";
      }),
      onPresetsChange: (w) => l((D) => {
        const C = {};
        w.forEach((T) => {
          C[T.value] = D[A][T.value] ?? structuredClone(D[A][D[E]] ?? D[A].default);
        }), D[A] = C;
      }),
      onListChange: (w) => l((D) => {
        const C = w.map((T) => ({
          promptName: T.id,
          enabled: T.enabled,
          role: T.selectValue ?? "user"
        }));
        D[A] = {
          ...D[A],
          [D[E]]: { ...D[A][D[E]], prompts: C }
        };
      }),
      onRestoreDefault: async () => {
        await Cd.Popup.show.confirm("Restore default", "Are you sure?") && l((D) => {
          D[A] = {
            ...D[A],
            default: structuredClone(Au[A].default)
          }, D[E] = "default";
        });
      }
    };
  }, d = (x) => {
    l((E) => {
      const A = x.map((T) => T.value);
      Object.keys(E.prompts).filter((T) => !A.includes(T)).forEach((T) => {
        [...Object.values(E.mainContextTemplatePresets), ...Object.values(E.brainstormContextTemplatePresets)].forEach(
          (M) => {
            M.prompts = M.prompts.filter((R) => R.promptName !== T);
          }
        );
      });
      const C = {};
      x.forEach((T) => {
        C[T.value] = E.prompts[T.value] ?? { content: "", isDefault: !1, label: T.label };
      }), E.prompts = C;
    });
  }, h = (x) => {
    const E = Nu(x);
    return E ? r.prompts[E] ? (ve("error", `Prompt name already exists: ${E}`), { confirmed: !1 }) : (l((A) => {
      A.prompts = {
        ...A.prompts,
        [E]: { content: A.prompts[a]?.content ?? "", isDefault: !1, label: x }
      };
      const w = (D) => Object.fromEntries(
        Object.entries(D).map(([C, T]) => [
          C,
          {
            ...T,
            prompts: [...T.prompts, { enabled: !0, promptName: E, role: "user" }]
          }
        ])
      );
      A.mainContextTemplatePresets = w(A.mainContextTemplatePresets), A.brainstormContextTemplatePresets = w(A.brainstormContextTemplatePresets);
    }), s(E), { confirmed: !0, value: E }) : (ve("error", `Invalid prompt name: ${x}`), { confirmed: !1 });
  }, g = (x, E) => {
    const A = Nu(E);
    return A ? r.prompts[A] ? (ve("error", `Prompt name already exists: ${A}`), { confirmed: !1 }) : (l((w) => {
      const { [x]: D, ...C } = w.prompts;
      w.prompts = {
        ...C,
        [A]: { ...D, label: E }
      };
      const T = (M) => Object.fromEntries(
        Object.entries(M).map(([R, L]) => [
          R,
          {
            ...L,
            prompts: L.prompts.map((Y) => Y.promptName === x ? { ...Y, promptName: A } : Y)
          }
        ])
      );
      w.mainContextTemplatePresets = T(w.mainContextTemplatePresets), w.brainstormContextTemplatePresets = T(w.brainstormContextTemplatePresets);
    }), s(A), { confirmed: !0, value: A }) : (ve("error", `Invalid prompt name: ${E}`), { confirmed: !1 });
  }, v = (x) => {
    const E = x.target.value;
    l((A) => {
      const w = A.prompts[a];
      w && (A.prompts = {
        ...A.prompts,
        [a]: {
          ...w,
          // Copy existing properties
          content: E,
          isDefault: ro.includes(a) ? rt[a] === E : !1
        }
      });
    });
  }, _ = async () => {
    const x = r.prompts[a];
    if (!x) return ve("warning", "No prompt selected.");
    await Cd.Popup.show.confirm("Restore Default", `Restore default for "${x.label}"?`) && l((A) => {
      A.prompts = {
        ...A.prompts,
        [a]: {
          ...A.prompts[a],
          content: rt[a]
        }
      };
    });
  }, b = async () => {
    await Cd.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (mt.resetSettings(), t(), ve("success", "Settings have been reset."));
  }, m = r.prompts[a], p = ro.includes(a);
  return /* @__PURE__ */ S.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ S.jsx(
      Ly,
      {
        title: "Main Context Template",
        restoreTitle: "Restore main context template to default",
        presetName: r.mainContextTemplatePreset,
        presets: r.mainContextTemplatePresets,
        prompts: r.prompts,
        ...f("main")
      }
    ),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ S.jsx(
      Ly,
      {
        title: "Brainstorm Context Template",
        restoreTitle: "Restore brainstorm context template to default",
        presetName: r.brainstormContextTemplatePreset,
        presets: r.brainstormContextTemplatePresets,
        prompts: r.prompts,
        blockNotes: {
          brainstormExtractPrompt: "sent after the transcript on Draft Card; position has no effect"
        },
        ...f("brainstorm")
      }
    ),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ S.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ S.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Prompt Templates" }),
        p && /* @__PURE__ */ S.jsx(
          ce,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: _
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx(
        Du,
        {
          label: "Prompt",
          items: u,
          value: a,
          readOnlyValues: ro,
          onChange: (x) => s(x ?? ""),
          onItemsChange: d,
          onCreate: h,
          onRename: g,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        Wt,
        {
          value: m?.content ?? "",
          onChange: v,
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
          onChange: (x) => l((E) => {
            E.showSaveAsWorldInfoEntry.show = x.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ S.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ S.jsxs(ce, { className: "danger_button", style: { width: "auto" }, onClick: b, children: [
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
  isGenerating: h = !1,
  onValueChange: g,
  onPromptChange: v,
  onGenerate: _,
  onContinue: b,
  onClear: m,
  onCompare: p,
  onDelete: x,
  onOpenReviseSessions: E
}) => /* @__PURE__ */ S.jsxs("div", { className: `character-field ${d ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ S.jsx("label", { children: r }),
  /* @__PURE__ */ S.jsxs("div", { className: `field-container ${l ? "large-field" : ""}`, children: [
    /* @__PURE__ */ S.jsx(Wt, { value: a, onChange: (A) => g(t, A.target.value), rows: u }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ S.jsx(ce, { onClick: () => _(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ S.jsx(ce, { onClick: () => b(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ S.jsx(ce, { onClick: () => m(t), title: "Clear field content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" }) }),
      E && !d && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ S.jsx(ce, { onClick: () => E(t), title: "Revise with AI chat", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" }) }),
      !d && p && /* @__PURE__ */ S.jsx(ce, { onClick: () => p(t), title: "Compare with loaded character", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      d && x && /* @__PURE__ */ S.jsx(ce, { onClick: () => x(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ S.jsx(
    Wt,
    {
      value: s,
      onChange: (A) => v(t, A.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), yw = SillyTavern.getContext(), bw = ({
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
  const h = () => {
    const b = [...t, { value: "", prompt: "" }];
    r(b), d(b.length - 1);
  }, g = async () => {
    if (t.length === 0) return;
    if (await yw.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const m = t.filter((p, x) => x !== f);
      r(m);
    }
  }, v = (b, m, p) => {
    r(t.map((x, E) => E === b ? { ...x, [m]: p } : x));
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
      /* @__PURE__ */ S.jsxs(ce, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ S.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ S.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ S.jsx(
          Wt,
          {
            value: _?.value ?? "",
            onChange: (b) => v(f, "value", b.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(
          Wt,
          {
            value: _?.prompt ?? "",
            onChange: (b) => v(f, "prompt", b.target.value),
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
            onClick: () => v(f, "value", ""),
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
var fa = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.diff = function(r, a, s) {
      s === void 0 && (s = {});
      var l;
      typeof s == "function" ? (l = s, s = {}) : "callback" in s && (l = s.callback);
      var u = this.castInput(r, s), f = this.castInput(a, s), d = this.removeEmpty(this.tokenize(u, s)), h = this.removeEmpty(this.tokenize(f, s));
      return this.diffWithOptionsObj(d, h, s, l);
    }, t.prototype.diffWithOptionsObj = function(r, a, s, l) {
      var u = this, f, d = function(C) {
        if (C = u.postProcess(C, s), l) {
          setTimeout(function() {
            l(C);
          }, 0);
          return;
        } else
          return C;
      }, h = a.length, g = r.length, v = 1, _ = h + g;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var b = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, m = Date.now() + b, p = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(p[0], a, r, 0, s);
      if (p[0].oldPos + 1 >= g && x + 1 >= h)
        return d(this.buildValues(p[0].lastComponent, a, r));
      var E = -1 / 0, A = 1 / 0, w = function() {
        for (var C = Math.max(E, -v); C <= Math.min(A, v); C += 2) {
          var T = void 0, M = p[C - 1], R = p[C + 1];
          M && (p[C - 1] = void 0);
          var L = !1;
          if (R) {
            var Y = R.oldPos - C;
            L = R && 0 <= Y && Y < h;
          }
          var U = M && M.oldPos + 1 < g;
          if (!L && !U) {
            p[C] = void 0;
            continue;
          }
          if (!U || L && M.oldPos < R.oldPos ? T = u.addToPath(R, !0, !1, 0, s) : T = u.addToPath(M, !1, !0, 1, s), x = u.extractCommon(T, a, r, C, s), T.oldPos + 1 >= g && x + 1 >= h)
            return d(u.buildValues(T.lastComponent, a, r)) || !0;
          p[C] = T, T.oldPos + 1 >= g && (A = Math.min(A, C - 1)), x + 1 >= h && (E = Math.max(E, C + 1));
        }
        v++;
      };
      if (l)
        (function C() {
          setTimeout(function() {
            if (v > _ || Date.now() > m)
              return l(void 0);
            w() || C();
          }, 0);
        })();
      else
        for (; v <= _ && Date.now() <= m; ) {
          var D = w();
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
      for (var f = a.length, d = s.length, h = r.oldPos, g = h - l, v = 0; g + 1 < f && h + 1 < d && this.equals(s[h + 1], a[g + 1], u); )
        g++, h++, v++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return v && !u.oneChangePerToken && (r.lastComponent = { count: v, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = h, g;
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
      for (var f = l.length, d = 0, h = 0, g = 0; d < f; d++) {
        var v = l[d];
        if (v.removed)
          v.value = this.join(s.slice(g, g + v.count)), g += v.count;
        else {
          if (!v.added && this.useLongestToken) {
            var _ = a.slice(h, h + v.count);
            _ = _.map(function(b, m) {
              var p = s[g + m];
              return p.length > b.length ? p : b;
            }), v.value = this.join(_);
          } else
            v.value = this.join(a.slice(h, h + v.count));
          h += v.count, v.added || (g += v.count);
        }
      }
      return l;
    }, t;
  })()
), _w = /* @__PURE__ */ (function() {
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
})(), Sw = (
  /** @class */
  (function(t) {
    _w(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(fa)
);
new Sw();
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
function Gd(t, r, a) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return a + t.slice(r.length);
}
function Vd(t, r, a) {
  if (!r)
    return t + a;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + a;
}
function Js(t, r) {
  return Gd(t, r, "");
}
function lu(t, r) {
  return Vd(t, r, "");
}
function Uy(t, r) {
  return r.slice(0, xw(t, r));
}
function xw(t, r) {
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
function Ws(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function ia(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var hb = /* @__PURE__ */ (function() {
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
})(), Mu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", Ew = new RegExp("[".concat(Mu, "]+|\\s+|[^").concat(Mu, "]"), "ug"), ww = (
  /** @class */
  (function(t) {
    hb(r, t);
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
        l = Array.from(u.segment(a), function(h) {
          return h.segment;
        });
      } else
        l = a.match(Ew) || [];
      var f = [], d = null;
      return l.forEach(function(h) {
        /\s/.test(h) ? d == null ? f.push(h) : f.push(f.pop() + h) : d != null && /\s/.test(d) ? f[f.length - 1] == d ? f.push(f.pop() + h) : f.push(d + h) : f.push(h), d = h;
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
  })(fa)
), Cw = new ww();
function pb(t, r, a) {
  return Cw.diff(t, r, a);
}
function Fy(t, r, a, s) {
  if (r && a) {
    var l = ia(r.value), u = Ws(r.value), f = ia(a.value), d = Ws(a.value);
    if (t) {
      var h = Py(l, f);
      t.value = Vd(t.value, f, h), r.value = Js(r.value, h), a.value = Js(a.value, h);
    }
    if (s) {
      var g = By(u, d);
      s.value = Gd(s.value, d, g), r.value = lu(r.value, g), a.value = lu(a.value, g);
    }
  } else if (a) {
    if (t) {
      var v = ia(a.value);
      a.value = a.value.substring(v.length);
    }
    if (s) {
      var v = ia(s.value);
      s.value = s.value.substring(v.length);
    }
  } else if (t && s) {
    var _ = ia(s.value), b = ia(r.value), m = Ws(r.value), p = Py(_, b);
    r.value = Js(r.value, p);
    var x = By(Js(_, p), m);
    r.value = lu(r.value, x), s.value = Gd(s.value, _, x), t.value = Vd(t.value, _, _.slice(0, _.length - x.length));
  } else if (s) {
    var E = ia(s.value), A = Ws(r.value), w = Uy(A, E);
    r.value = lu(r.value, w);
  } else if (t) {
    var D = Ws(t.value), C = ia(r.value), w = Uy(D, C);
    r.value = Js(r.value, w);
  }
}
var Nw = (
  /** @class */
  (function(t) {
    hb(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      var s = new RegExp("(\\r?\\n)|[".concat(Mu, "]+|[^\\S\\n\\r]+|[^").concat(Mu, "]"), "ug");
      return a.match(s) || [];
    }, r;
  })(fa)
);
new Nw();
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
})(), Tw = (
  /** @class */
  (function(t) {
    Aw(r, t);
    function r() {
      var a = t !== null && t.apply(this, arguments) || this;
      return a.tokenize = mb, a;
    }
    return r.prototype.equals = function(a, s, l) {
      return l.ignoreWhitespace ? ((!l.newlineIsToken || !a.includes(`
`)) && (a = a.trim()), (!l.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : l.ignoreNewlineAtEof && !l.newlineIsToken && (a.endsWith(`
`) && (a = a.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), t.prototype.equals.call(this, a, s, l);
    }, r;
  })(fa)
);
new Tw();
function mb(t, r) {
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
var Ow = /* @__PURE__ */ (function() {
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
})(), Dw = (
  /** @class */
  (function(t) {
    Ow(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(fa)
);
new Dw();
var Mw = /* @__PURE__ */ (function() {
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
})(), kw = (
  /** @class */
  (function(t) {
    Mw(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(a) {
      return a.split(/([{}:;,]|\s+)/);
    }, r;
  })(fa)
);
new kw();
var jw = /* @__PURE__ */ (function() {
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
})(), Rw = (
  /** @class */
  (function(t) {
    jw(r, t);
    function r() {
      var a = t !== null && t.apply(this, arguments) || this;
      return a.tokenize = mb, a;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(a, s) {
      var l = s.undefinedReplacement, u = s.stringifyReplacer, f = u === void 0 ? function(d, h) {
        return typeof h > "u" ? l : h;
      } : u;
      return typeof a == "string" ? a : JSON.stringify(Yd(a, null, null, f), null, "  ");
    }, r.prototype.equals = function(a, s, l) {
      return t.prototype.equals.call(this, a.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), l);
    }, r;
  })(fa)
);
new Rw();
function Yd(t, r, a, s, l) {
  r = r || [], a = a || [], s && (t = s(l === void 0 ? "" : l, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return a[u];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), a.push(f), u = 0; u < t.length; u += 1)
      f[u] = Yd(t[u], r, a, s, String(u));
    return r.pop(), a.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, a.push(f);
    var d = [], h;
    for (h in t)
      Object.prototype.hasOwnProperty.call(t, h) && d.push(h);
    for (d.sort(), u = 0; u < d.length; u += 1)
      h = d[u], f[h] = Yd(t[h], r, a, s, h);
    r.pop(), a.pop();
  } else
    f = t;
  return f;
}
var zw = /* @__PURE__ */ (function() {
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
})(), Lw = (
  /** @class */
  (function(t) {
    zw(r, t);
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
  })(fa)
);
new Lw();
const Iw = ({ originalContent: t, newContent: r, fieldName: a }) => {
  const s = G.useMemo(() => {
    const l = pb(t, r);
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
  function s(d, h) {
    var g;
    Object.defineProperty(d, "_zod", {
      value: d._zod ?? {},
      enumerable: !1
    }), (g = d._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), d._zod.traits.add(t), r(d, h);
    for (const v in f.prototype)
      v in d || Object.defineProperty(d, v, { value: f.prototype[v].bind(d) });
    d._zod.constr = f, d._zod.def = h;
  }
  const l = a?.Parent ?? Object;
  class u extends l {
  }
  Object.defineProperty(u, "name", { value: t });
  function f(d) {
    var h;
    const g = a?.Parent ? new u() : this;
    s(g, d), (h = g._zod).deferred ?? (h.deferred = []);
    for (const v of g._zod.deferred)
      v();
    return g;
  }
  return Object.defineProperty(f, "init", { value: s }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (d) => a?.Parent && d instanceof a.Parent ? !0 : d?._zod?.traits?.has(t)
  }), Object.defineProperty(f, "name", { value: t }), f;
}
class Hi extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class gb extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const vb = {};
function Ua(t) {
  return vb;
}
function yb(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, l]) => r.indexOf(+s) === -1).map(([s, l]) => l);
}
function Xd(t, r) {
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
function Pw(t, r) {
  const a = (t.toString().split(".")[1] || "").length, s = r.toString();
  let l = (s.split(".")[1] || "").length;
  if (l === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (l = Number.parseInt(h[1]));
  }
  const u = a > l ? a : l, f = Number.parseInt(t.toFixed(u).replace(".", "")), d = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % d / 10 ** u;
}
const Hy = Symbol("evaluating");
function dt(t, r, a) {
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
function Ha(t, r, a) {
  Object.defineProperty(t, r, {
    value: a,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function qa(...t) {
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
const bb = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function ku(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const Bw = dh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function fo(t) {
  if (ku(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const a = r.prototype;
  return !(ku(a) === !1 || Object.prototype.hasOwnProperty.call(a, "isPrototypeOf") === !1);
}
function _b(t) {
  return fo(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const Uw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Pu(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function da(t, r, a) {
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
function Fw(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const Hw = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function qw(t, r) {
  const a = t._zod.def, s = qa(t._zod.def, {
    get shape() {
      const l = {};
      for (const u in r) {
        if (!(u in a.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (l[u] = a.shape[u]);
      }
      return Ha(this, "shape", l), l;
    },
    checks: []
  });
  return da(t, s);
}
function Zw(t, r) {
  const a = t._zod.def, s = qa(t._zod.def, {
    get shape() {
      const l = { ...t._zod.def.shape };
      for (const u in r) {
        if (!(u in a.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete l[u];
      }
      return Ha(this, "shape", l), l;
    },
    checks: []
  });
  return da(t, s);
}
function Gw(t, r) {
  if (!fo(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const a = t._zod.def.checks;
  if (a && a.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const l = qa(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape, ...r };
      return Ha(this, "shape", u), u;
    },
    checks: []
  });
  return da(t, l);
}
function Vw(t, r) {
  if (!fo(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const a = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...r };
      return Ha(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return da(t, a);
}
function Yw(t, r) {
  const a = qa(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...r._zod.def.shape };
      return Ha(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return da(t, a);
}
function Xw(t, r, a) {
  const s = qa(r._zod.def, {
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
      return Ha(this, "shape", u), u;
    },
    checks: []
  });
  return da(r, s);
}
function $w(t, r, a) {
  const s = qa(r._zod.def, {
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
      return Ha(this, "shape", u), u;
    },
    checks: []
  });
  return da(r, s);
}
function Ui(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = r; a < t.issues.length; a++)
    if (t.issues[a]?.continue !== !0)
      return !0;
  return !1;
}
function Sb(t, r) {
  return r.map((a) => {
    var s;
    return (s = a).path ?? (s.path = []), a.path.unshift(t), a;
  });
}
function uu(t) {
  return typeof t == "string" ? t : t?.message;
}
function Fa(t, r, a) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const l = uu(t.inst?._zod.def?.error?.(t)) ?? uu(r?.error?.(t)) ?? uu(a.customError?.(t)) ?? uu(a.localeError?.(t)) ?? "Invalid input";
    s.message = l;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function mh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function ho(...t) {
  const [r, a, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: a,
    inst: s
  } : { ...r };
}
const xb = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Xd, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, Eb = te("$ZodError", xb), wb = te("$ZodError", xb, { Parent: Error });
function Qw(t, r = (a) => a.message) {
  const a = {}, s = [];
  for (const l of t.issues)
    l.path.length > 0 ? (a[l.path[0]] = a[l.path[0]] || [], a[l.path[0]].push(r(l))) : s.push(r(l));
  return { formErrors: s, fieldErrors: a };
}
function Kw(t, r = (a) => a.message) {
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
          const h = u.path[d];
          d === u.path.length - 1 ? (f[h] = f[h] || { _errors: [] }, f[h]._errors.push(r(u))) : f[h] = f[h] || { _errors: [] }, f = f[h], d++;
        }
      }
  };
  return s(t), a;
}
const gh = (t) => (r, a, s, l) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: a, issues: [] }, u);
  if (f instanceof Promise)
    throw new Hi();
  if (f.issues.length) {
    const d = new (l?.Err ?? t)(f.issues.map((h) => Fa(h, u, Ua())));
    throw bb(d, l?.callee), d;
  }
  return f.value;
}, vh = (t) => async (r, a, s, l) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: a, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const d = new (l?.Err ?? t)(f.issues.map((h) => Fa(h, u, Ua())));
    throw bb(d, l?.callee), d;
  }
  return f.value;
}, Bu = (t) => (r, a, s) => {
  const l = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: a, issues: [] }, l);
  if (u instanceof Promise)
    throw new Hi();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? Eb)(u.issues.map((f) => Fa(f, l, Ua())))
  } : { success: !0, data: u.value };
}, Jw = /* @__PURE__ */ Bu(wb), Uu = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: a, issues: [] }, l);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => Fa(f, l, Ua())))
  } : { success: !0, data: u.value };
}, Ww = /* @__PURE__ */ Uu(wb), eC = (t) => (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return gh(t)(r, a, l);
}, tC = (t) => (r, a, s) => gh(t)(r, a, s), nC = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return vh(t)(r, a, l);
}, rC = (t) => async (r, a, s) => vh(t)(r, a, s), aC = (t) => (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Bu(t)(r, a, l);
}, iC = (t) => (r, a, s) => Bu(t)(r, a, s), sC = (t) => async (r, a, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Uu(t)(r, a, l);
}, oC = (t) => async (r, a, s) => Uu(t)(r, a, s), lC = /^[cC][^\s-]{8,}$/, uC = /^[0-9a-z]+$/, cC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, fC = /^[0-9a-vA-V]{20}$/, dC = /^[A-Za-z0-9]{27}$/, hC = /^[a-zA-Z0-9_-]{21}$/, pC = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, mC = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Zy = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, gC = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, vC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function yC() {
  return new RegExp(vC, "u");
}
const bC = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, _C = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, SC = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, xC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, EC = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Cb = /^[A-Za-z0-9_-]*$/, wC = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, CC = /^\+(?:[0-9]){6,14}[0-9]$/, Nb = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", NC = /* @__PURE__ */ new RegExp(`^${Nb}$`);
function Ab(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function AC(t) {
  return new RegExp(`^${Ab(t)}$`);
}
function TC(t) {
  const r = Ab({ precision: t.precision }), a = ["Z"];
  t.local && a.push(""), t.offset && a.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${a.join("|")})`;
  return new RegExp(`^${Nb}T(?:${s})$`);
}
const OC = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, DC = /^-?\d+$/, MC = /^-?\d+(?:\.\d+)?/, kC = /^[^A-Z]*$/, jC = /^[^a-z]*$/, _n = /* @__PURE__ */ te("$ZodCheck", (t, r) => {
  var a;
  t._zod ?? (t._zod = {}), t._zod.def = r, (a = t._zod).onattach ?? (a.onattach = []);
}), Tb = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Ob = /* @__PURE__ */ te("$ZodCheckLessThan", (t, r) => {
  _n.init(t, r);
  const a = Tb[typeof r.value];
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
}), Db = /* @__PURE__ */ te("$ZodCheckGreaterThan", (t, r) => {
  _n.init(t, r);
  const a = Tb[typeof r.value];
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
}), RC = /* @__PURE__ */ te("$ZodCheckMultipleOf", (t, r) => {
  _n.init(t, r), t._zod.onattach.push((a) => {
    var s;
    (s = a._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (a) => {
    if (typeof a.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof a.value == "bigint" ? a.value % r.value === BigInt(0) : Pw(a.value, r.value) === 0) || a.issues.push({
      origin: typeof a.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), zC = /* @__PURE__ */ te("$ZodCheckNumberFormat", (t, r) => {
  _n.init(t, r), r.format = r.format || "float64";
  const a = r.format?.includes("int"), s = a ? "int" : "number", [l, u] = Hw[r.format];
  t._zod.onattach.push((f) => {
    const d = f._zod.bag;
    d.format = r.format, d.minimum = l, d.maximum = u, a && (d.pattern = DC);
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
}), LC = /* @__PURE__ */ te("$ZodCheckMaxLength", (t, r) => {
  var a;
  _n.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
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
}), IC = /* @__PURE__ */ te("$ZodCheckMinLength", (t, r) => {
  var a;
  _n.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
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
}), PC = /* @__PURE__ */ te("$ZodCheckLengthEquals", (t, r) => {
  var a;
  _n.init(t, r), (a = t._zod.def).when ?? (a.when = (s) => {
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
}), Fu = /* @__PURE__ */ te("$ZodCheckStringFormat", (t, r) => {
  var a, s;
  _n.init(t, r), t._zod.onattach.push((l) => {
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
}), BC = /* @__PURE__ */ te("$ZodCheckRegex", (t, r) => {
  Fu.init(t, r), t._zod.check = (a) => {
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
}), UC = /* @__PURE__ */ te("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = kC), Fu.init(t, r);
}), FC = /* @__PURE__ */ te("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = jC), Fu.init(t, r);
}), HC = /* @__PURE__ */ te("$ZodCheckIncludes", (t, r) => {
  _n.init(t, r);
  const a = Pu(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${a}` : a);
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
}), qC = /* @__PURE__ */ te("$ZodCheckStartsWith", (t, r) => {
  _n.init(t, r);
  const a = new RegExp(`^${Pu(r.prefix)}.*`);
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
}), ZC = /* @__PURE__ */ te("$ZodCheckEndsWith", (t, r) => {
  _n.init(t, r);
  const a = new RegExp(`.*${Pu(r.suffix)}$`);
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
}), GC = /* @__PURE__ */ te("$ZodCheckOverwrite", (t, r) => {
  _n.init(t, r), t._zod.check = (a) => {
    a.value = r.tx(a.value);
  };
});
class VC {
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
const YC = {
  major: 4,
  minor: 1,
  patch: 12
}, Mt = /* @__PURE__ */ te("$ZodType", (t, r) => {
  var a;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = YC;
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
    const l = (f, d, h) => {
      let g = Ui(f), v;
      for (const _ of d) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(f))
            continue;
        } else if (g)
          continue;
        const b = f.issues.length, m = _._zod.check(f);
        if (m instanceof Promise && h?.async === !1)
          throw new Hi();
        if (v || m instanceof Promise)
          v = (v ?? Promise.resolve()).then(async () => {
            await m, f.issues.length !== b && (g || (g = Ui(f, b)));
          });
        else {
          if (f.issues.length === b)
            continue;
          g || (g = Ui(f, b));
        }
      }
      return v ? v.then(() => f) : f;
    }, u = (f, d, h) => {
      if (Ui(f))
        return f.aborted = !0, f;
      const g = l(d, s, h);
      if (g instanceof Promise) {
        if (h.async === !1)
          throw new Hi();
        return g.then((v) => t._zod.parse(v, h));
      }
      return t._zod.parse(g, h);
    };
    t._zod.run = (f, d) => {
      if (d.skipChecks)
        return t._zod.parse(f, d);
      if (d.direction === "backward") {
        const g = t._zod.parse({ value: f.value, issues: [] }, { ...d, skipChecks: !0 });
        return g instanceof Promise ? g.then((v) => u(v, f, d)) : u(g, f, d);
      }
      const h = t._zod.parse(f, d);
      if (h instanceof Promise) {
        if (d.async === !1)
          throw new Hi();
        return h.then((g) => l(g, s, d));
      }
      return l(h, s, d);
    };
  }
  t["~standard"] = {
    validate: (l) => {
      try {
        const u = Jw(t, l);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return Ww(t, l).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), yh = /* @__PURE__ */ te("$ZodString", (t, r) => {
  Mt.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? OC(t._zod.bag), t._zod.parse = (a, s) => {
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
}), gt = /* @__PURE__ */ te("$ZodStringFormat", (t, r) => {
  Fu.init(t, r), yh.init(t, r);
}), XC = /* @__PURE__ */ te("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = mC), gt.init(t, r);
}), $C = /* @__PURE__ */ te("$ZodUUID", (t, r) => {
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
  gt.init(t, r);
}), QC = /* @__PURE__ */ te("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = gC), gt.init(t, r);
}), KC = /* @__PURE__ */ te("$ZodURL", (t, r) => {
  gt.init(t, r), t._zod.check = (a) => {
    try {
      const s = a.value.trim(), l = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(l.hostname) || a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: wC.source,
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
}), JC = /* @__PURE__ */ te("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = yC()), gt.init(t, r);
}), WC = /* @__PURE__ */ te("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = hC), gt.init(t, r);
}), e3 = /* @__PURE__ */ te("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = lC), gt.init(t, r);
}), t3 = /* @__PURE__ */ te("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = uC), gt.init(t, r);
}), n3 = /* @__PURE__ */ te("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = cC), gt.init(t, r);
}), r3 = /* @__PURE__ */ te("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = fC), gt.init(t, r);
}), a3 = /* @__PURE__ */ te("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = dC), gt.init(t, r);
}), i3 = /* @__PURE__ */ te("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = TC(r)), gt.init(t, r);
}), s3 = /* @__PURE__ */ te("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = NC), gt.init(t, r);
}), o3 = /* @__PURE__ */ te("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = AC(r)), gt.init(t, r);
}), l3 = /* @__PURE__ */ te("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = pC), gt.init(t, r);
}), u3 = /* @__PURE__ */ te("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = bC), gt.init(t, r), t._zod.onattach.push((a) => {
    const s = a._zod.bag;
    s.format = "ipv4";
  });
}), c3 = /* @__PURE__ */ te("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = _C), gt.init(t, r), t._zod.onattach.push((a) => {
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
}), f3 = /* @__PURE__ */ te("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = SC), gt.init(t, r);
}), d3 = /* @__PURE__ */ te("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = xC), gt.init(t, r), t._zod.check = (a) => {
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
function Mb(t) {
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
const h3 = /* @__PURE__ */ te("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = EC), gt.init(t, r), t._zod.onattach.push((a) => {
    a._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (a) => {
    Mb(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function p3(t) {
  if (!Cb.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), a = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return Mb(a);
}
const m3 = /* @__PURE__ */ te("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = Cb), gt.init(t, r), t._zod.onattach.push((a) => {
    a._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (a) => {
    p3(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), g3 = /* @__PURE__ */ te("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = CC), gt.init(t, r);
});
function v3(t, r = null) {
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
const y3 = /* @__PURE__ */ te("$ZodJWT", (t, r) => {
  gt.init(t, r), t._zod.check = (a) => {
    v3(a.value, r.alg) || a.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: a.value,
      inst: t,
      continue: !r.abort
    });
  };
}), kb = /* @__PURE__ */ te("$ZodNumber", (t, r) => {
  Mt.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? MC, t._zod.parse = (a, s) => {
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
}), b3 = /* @__PURE__ */ te("$ZodNumber", (t, r) => {
  zC.init(t, r), kb.init(t, r);
}), _3 = /* @__PURE__ */ te("$ZodUnknown", (t, r) => {
  Mt.init(t, r), t._zod.parse = (a) => a;
}), S3 = /* @__PURE__ */ te("$ZodNever", (t, r) => {
  Mt.init(t, r), t._zod.parse = (a, s) => (a.issues.push({
    expected: "never",
    code: "invalid_type",
    input: a.value,
    inst: t
  }), a);
});
function Gy(t, r, a) {
  t.issues.length && r.issues.push(...Sb(a, t.issues)), r.value[a] = t.value;
}
const x3 = /* @__PURE__ */ te("$ZodArray", (t, r) => {
  Mt.init(t, r), t._zod.parse = (a, s) => {
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
      const d = l[f], h = r.element._zod.run({
        value: d,
        issues: []
      }, s);
      h instanceof Promise ? u.push(h.then((g) => Gy(g, a, f))) : Gy(h, a, f);
    }
    return u.length ? Promise.all(u).then(() => a) : a;
  };
});
function ju(t, r, a, s) {
  t.issues.length && r.issues.push(...Sb(a, t.issues)), t.value === void 0 ? a in s && (r.value[a] = void 0) : r.value[a] = t.value;
}
function jb(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const a = Fw(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(a)
  };
}
function Rb(t, r, a, s, l, u) {
  const f = [], d = l.keySet, h = l.catchall._zod, g = h.def.type;
  for (const v of Object.keys(r)) {
    if (d.has(v))
      continue;
    if (g === "never") {
      f.push(v);
      continue;
    }
    const _ = h.run({ value: r[v], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((b) => ju(b, a, v, r))) : ju(_, a, v, r);
  }
  return f.length && a.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => a) : a;
}
const E3 = /* @__PURE__ */ te("$ZodObject", (t, r) => {
  if (Mt.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const d = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const h = { ...d };
        return Object.defineProperty(r, "shape", {
          value: h
        }), h;
      }
    });
  }
  const s = dh(() => jb(r));
  dt(t._zod, "propValues", () => {
    const d = r.shape, h = {};
    for (const g in d) {
      const v = d[g]._zod;
      if (v.values) {
        h[g] ?? (h[g] = /* @__PURE__ */ new Set());
        for (const _ of v.values)
          h[g].add(_);
      }
    }
    return h;
  });
  const l = ku, u = r.catchall;
  let f;
  t._zod.parse = (d, h) => {
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
    const v = [], _ = f.shape;
    for (const b of f.keys) {
      const p = _[b]._zod.run({ value: g[b], issues: [] }, h);
      p instanceof Promise ? v.push(p.then((x) => ju(x, d, b, g))) : ju(p, d, b, g);
    }
    return u ? Rb(v, g, d, h, s.value, t) : v.length ? Promise.all(v).then(() => d) : d;
  };
}), w3 = /* @__PURE__ */ te("$ZodObjectJIT", (t, r) => {
  E3.init(t, r);
  const a = t._zod.parse, s = dh(() => jb(r)), l = (b) => {
    const m = new VC(["shape", "payload", "ctx"]), p = s.value, x = (D) => {
      const C = qy(D);
      return `shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let A = 0;
    for (const D of p.keys)
      E[D] = `key_${A++}`;
    m.write("const newResult = {};");
    for (const D of p.keys) {
      const C = E[D], T = qy(D);
      m.write(`const ${C} = ${x(D)};`), m.write(`
        if (${C}.issues.length) {
          payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${T}, ...iss.path] : [${T}]
          })));
        }
        
        
        if (${C}.value === undefined) {
          if (${T} in input) {
            newResult[${T}] = undefined;
          }
        } else {
          newResult[${T}] = ${C}.value;
        }
        
      `);
    }
    m.write("payload.value = newResult;"), m.write("return payload;");
    const w = m.compile();
    return (D, C) => w(b, D, C);
  };
  let u;
  const f = ku, d = !vb.jitless, g = d && Bw.value, v = r.catchall;
  let _;
  t._zod.parse = (b, m) => {
    _ ?? (_ = s.value);
    const p = b.value;
    return f(p) ? d && g && m?.async === !1 && m.jitless !== !0 ? (u || (u = l(r.shape)), b = u(b, m), v ? Rb([], p, b, m, _, t) : b) : a(b, m) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: p,
      inst: t
    }), b);
  };
});
function Vy(t, r, a, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const l = t.filter((u) => !Ui(u));
  return l.length === 1 ? (r.value = l[0].value, l[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: a,
    errors: t.map((u) => u.issues.map((f) => Fa(f, s, Ua())))
  }), r);
}
const C3 = /* @__PURE__ */ te("$ZodUnion", (t, r) => {
  Mt.init(t, r), dt(t._zod, "optin", () => r.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), dt(t._zod, "optout", () => r.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), dt(t._zod, "values", () => {
    if (r.options.every((l) => l._zod.values))
      return new Set(r.options.flatMap((l) => Array.from(l._zod.values)));
  }), dt(t._zod, "pattern", () => {
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
    for (const h of r.options) {
      const g = h._zod.run({
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
    return f ? Promise.all(d).then((h) => Vy(h, l, t, u)) : Vy(d, l, t, u);
  };
}), N3 = /* @__PURE__ */ te("$ZodIntersection", (t, r) => {
  Mt.init(t, r), t._zod.parse = (a, s) => {
    const l = a.value, u = r.left._zod.run({ value: l, issues: [] }, s), f = r.right._zod.run({ value: l, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, g]) => Yy(a, h, g)) : Yy(a, u, f);
  };
});
function $d(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (fo(t) && fo(r)) {
    const a = Object.keys(r), s = Object.keys(t).filter((u) => a.indexOf(u) !== -1), l = { ...t, ...r };
    for (const u of s) {
      const f = $d(t[u], r[u]);
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
      const l = t[s], u = r[s], f = $d(l, u);
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
  if (r.issues.length && t.issues.push(...r.issues), a.issues.length && t.issues.push(...a.issues), Ui(t))
    return t;
  const s = $d(r.value, a.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const A3 = /* @__PURE__ */ te("$ZodEnum", (t, r) => {
  Mt.init(t, r);
  const a = yb(r.entries), s = new Set(a);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${a.filter((l) => Uw.has(typeof l)).map((l) => typeof l == "string" ? Pu(l) : l.toString()).join("|")})$`), t._zod.parse = (l, u) => {
    const f = l.value;
    return s.has(f) || l.issues.push({
      code: "invalid_value",
      values: a,
      input: f,
      inst: t
    }), l;
  };
}), T3 = /* @__PURE__ */ te("$ZodTransform", (t, r) => {
  Mt.init(t, r), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      throw new gb(t.constructor.name);
    const l = r.transform(a.value, a);
    if (s.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((f) => (a.value = f, a));
    if (l instanceof Promise)
      throw new Hi();
    return a.value = l, a;
  };
});
function Xy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const O3 = /* @__PURE__ */ te("$ZodOptional", (t, r) => {
  Mt.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", dt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), dt(t._zod, "pattern", () => {
    const a = r.innerType._zod.pattern;
    return a ? new RegExp(`^(${ph(a.source)})?$`) : void 0;
  }), t._zod.parse = (a, s) => {
    if (r.innerType._zod.optin === "optional") {
      const l = r.innerType._zod.run(a, s);
      return l instanceof Promise ? l.then((u) => Xy(u, a.value)) : Xy(l, a.value);
    }
    return a.value === void 0 ? a : r.innerType._zod.run(a, s);
  };
}), D3 = /* @__PURE__ */ te("$ZodNullable", (t, r) => {
  Mt.init(t, r), dt(t._zod, "optin", () => r.innerType._zod.optin), dt(t._zod, "optout", () => r.innerType._zod.optout), dt(t._zod, "pattern", () => {
    const a = r.innerType._zod.pattern;
    return a ? new RegExp(`^(${ph(a.source)}|null)$`) : void 0;
  }), dt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (a, s) => a.value === null ? a : r.innerType._zod.run(a, s);
}), M3 = /* @__PURE__ */ te("$ZodDefault", (t, r) => {
  Mt.init(t, r), t._zod.optin = "optional", dt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => {
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
const k3 = /* @__PURE__ */ te("$ZodPrefault", (t, r) => {
  Mt.init(t, r), t._zod.optin = "optional", dt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => (s.direction === "backward" || a.value === void 0 && (a.value = r.defaultValue), r.innerType._zod.run(a, s));
}), j3 = /* @__PURE__ */ te("$ZodNonOptional", (t, r) => {
  Mt.init(t, r), dt(t._zod, "values", () => {
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
const R3 = /* @__PURE__ */ te("$ZodCatch", (t, r) => {
  Mt.init(t, r), dt(t._zod, "optin", () => r.innerType._zod.optin), dt(t._zod, "optout", () => r.innerType._zod.optout), dt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => (a.value = u.value, u.issues.length && (a.value = r.catchValue({
      ...a,
      error: {
        issues: u.issues.map((f) => Fa(f, s, Ua()))
      },
      input: a.value
    }), a.issues = []), a)) : (a.value = l.value, l.issues.length && (a.value = r.catchValue({
      ...a,
      error: {
        issues: l.issues.map((u) => Fa(u, s, Ua()))
      },
      input: a.value
    }), a.issues = []), a);
  };
}), z3 = /* @__PURE__ */ te("$ZodPipe", (t, r) => {
  Mt.init(t, r), dt(t._zod, "values", () => r.in._zod.values), dt(t._zod, "optin", () => r.in._zod.optin), dt(t._zod, "optout", () => r.out._zod.optout), dt(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (a, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(a, s);
      return u instanceof Promise ? u.then((f) => cu(f, r.in, s)) : cu(u, r.in, s);
    }
    const l = r.in._zod.run(a, s);
    return l instanceof Promise ? l.then((u) => cu(u, r.out, s)) : cu(l, r.out, s);
  };
});
function cu(t, r, a) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, a);
}
const L3 = /* @__PURE__ */ te("$ZodReadonly", (t, r) => {
  Mt.init(t, r), dt(t._zod, "propValues", () => r.innerType._zod.propValues), dt(t._zod, "values", () => r.innerType._zod.values), dt(t._zod, "optin", () => r.innerType._zod.optin), dt(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(a, s);
    const l = r.innerType._zod.run(a, s);
    return l instanceof Promise ? l.then(Ky) : Ky(l);
  };
});
function Ky(t) {
  return t.value = Object.freeze(t.value), t;
}
const I3 = /* @__PURE__ */ te("$ZodCustom", (t, r) => {
  _n.init(t, r), Mt.init(t, r), t._zod.parse = (a, s) => a, t._zod.check = (a) => {
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
    s._zod.def.params && (l.params = s._zod.def.params), r.issues.push(ho(l));
  }
}
class zb {
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
function P3() {
  return new zb();
}
const ao = /* @__PURE__ */ P3();
function B3(t, r) {
  return new t({
    type: "string",
    ...we(r)
  });
}
function U3(t, r) {
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
function F3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function H3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...we(r)
  });
}
function q3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...we(r)
  });
}
function Z3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...we(r)
  });
}
function G3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function V3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function Y3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function X3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function $3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function Q3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function K3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function J3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function W3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function eN(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function tN(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function nN(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function rN(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function aN(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function iN(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function sN(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function oN(t, r) {
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
function lN(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...we(r)
  });
}
function uN(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...we(r)
  });
}
function cN(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...we(r)
  });
}
function fN(t, r) {
  return new t({
    type: "number",
    checks: [],
    ...we(r)
  });
}
function dN(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...we(r)
  });
}
function hN(t) {
  return new t({
    type: "unknown"
  });
}
function pN(t, r) {
  return new t({
    type: "never",
    ...we(r)
  });
}
function e0(t, r) {
  return new Ob({
    check: "less_than",
    ...we(r),
    value: t,
    inclusive: !1
  });
}
function Nd(t, r) {
  return new Ob({
    check: "less_than",
    ...we(r),
    value: t,
    inclusive: !0
  });
}
function t0(t, r) {
  return new Db({
    check: "greater_than",
    ...we(r),
    value: t,
    inclusive: !1
  });
}
function Ad(t, r) {
  return new Db({
    check: "greater_than",
    ...we(r),
    value: t,
    inclusive: !0
  });
}
function n0(t, r) {
  return new RC({
    check: "multiple_of",
    ...we(r),
    value: t
  });
}
function Lb(t, r) {
  return new LC({
    check: "max_length",
    ...we(r),
    maximum: t
  });
}
function Ru(t, r) {
  return new IC({
    check: "min_length",
    ...we(r),
    minimum: t
  });
}
function Ib(t, r) {
  return new PC({
    check: "length_equals",
    ...we(r),
    length: t
  });
}
function mN(t, r) {
  return new BC({
    check: "string_format",
    format: "regex",
    ...we(r),
    pattern: t
  });
}
function gN(t) {
  return new UC({
    check: "string_format",
    format: "lowercase",
    ...we(t)
  });
}
function vN(t) {
  return new FC({
    check: "string_format",
    format: "uppercase",
    ...we(t)
  });
}
function yN(t, r) {
  return new HC({
    check: "string_format",
    format: "includes",
    ...we(r),
    includes: t
  });
}
function bN(t, r) {
  return new qC({
    check: "string_format",
    format: "starts_with",
    ...we(r),
    prefix: t
  });
}
function _N(t, r) {
  return new ZC({
    check: "string_format",
    format: "ends_with",
    ...we(r),
    suffix: t
  });
}
function yo(t) {
  return new GC({
    check: "overwrite",
    tx: t
  });
}
function SN(t) {
  return yo((r) => r.normalize(t));
}
function xN() {
  return yo((t) => t.trim());
}
function EN() {
  return yo((t) => t.toLowerCase());
}
function wN() {
  return yo((t) => t.toUpperCase());
}
function CN(t, r, a) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...we(a)
  });
}
function NN(t, r, a) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...we(a)
  });
}
function AN(t) {
  const r = TN((a) => (a.addIssue = (s) => {
    if (typeof s == "string")
      a.issues.push(ho(s, a.value, r._zod.def));
    else {
      const l = s;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = a.value), l.inst ?? (l.inst = r), l.continue ?? (l.continue = !r._zod.def.abort), a.issues.push(ho(l));
    }
  }, t(a.value, a)));
  return r;
}
function TN(t, r) {
  const a = new _n({
    check: "custom",
    ...we(r)
  });
  return a._zod.check = t, a;
}
class r0 {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? ao, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
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
    const h = r._zod.toJSONSchema?.();
    if (h)
      d.schema = h;
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
            const p = m;
            p.type = "string";
            const { minimum: x, maximum: E, format: A, patterns: w, contentEncoding: D } = r._zod.bag;
            if (typeof x == "number" && (p.minLength = x), typeof E == "number" && (p.maxLength = E), A && (p.format = u[A] ?? A, p.format === "" && delete p.format), D && (p.contentEncoding = D), w && w.size > 0) {
              const C = [...w];
              C.length === 1 ? p.pattern = C[0].source : C.length > 1 && (d.schema.allOf = [
                ...C.map((T) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: T.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const p = m, { minimum: x, maximum: E, format: A, multipleOf: w, exclusiveMaximum: D, exclusiveMinimum: C } = r._zod.bag;
            typeof A == "string" && A.includes("int") ? p.type = "integer" : p.type = "number", typeof C == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (p.minimum = C, p.exclusiveMinimum = !0) : p.exclusiveMinimum = C), typeof x == "number" && (p.minimum = x, typeof C == "number" && this.target !== "draft-4" && (C >= x ? delete p.minimum : delete p.exclusiveMinimum)), typeof D == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (p.maximum = D, p.exclusiveMaximum = !0) : p.exclusiveMaximum = D), typeof E == "number" && (p.maximum = E, typeof D == "number" && this.target !== "draft-4" && (D <= E ? delete p.maximum : delete p.exclusiveMaximum)), typeof w == "number" && (p.multipleOf = w);
            break;
          }
          case "boolean": {
            const p = m;
            p.type = "boolean";
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
            const p = m, { minimum: x, maximum: E } = r._zod.bag;
            typeof x == "number" && (p.minItems = x), typeof E == "number" && (p.maxItems = E), p.type = "array", p.items = this.process(l.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const p = m;
            p.type = "object", p.properties = {};
            const x = l.shape;
            for (const w in x)
              p.properties[w] = this.process(x[w], {
                ..._,
                path: [..._.path, "properties", w]
              });
            const E = new Set(Object.keys(x)), A = new Set([...E].filter((w) => {
              const D = l.shape[w]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            A.size > 0 && (p.required = Array.from(A)), l.catchall?._zod.def.type === "never" ? p.additionalProperties = !1 : l.catchall ? l.catchall && (p.additionalProperties = this.process(l.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (p.additionalProperties = !1);
            break;
          }
          case "union": {
            const p = m, x = l.options.map((E, A) => this.process(E, {
              ..._,
              path: [..._.path, "anyOf", A]
            }));
            p.anyOf = x;
            break;
          }
          case "intersection": {
            const p = m, x = this.process(l.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), E = this.process(l.right, {
              ..._,
              path: [..._.path, "allOf", 1]
            }), A = (D) => "allOf" in D && Object.keys(D).length === 1, w = [
              ...A(x) ? x.allOf : [x],
              ...A(E) ? E.allOf : [E]
            ];
            p.allOf = w;
            break;
          }
          case "tuple": {
            const p = m;
            p.type = "array";
            const x = this.target === "draft-2020-12" ? "prefixItems" : "items", E = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", A = l.items.map((T, M) => this.process(T, {
              ..._,
              path: [..._.path, x, M]
            })), w = l.rest ? this.process(l.rest, {
              ..._,
              path: [..._.path, E, ...this.target === "openapi-3.0" ? [l.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (p.prefixItems = A, w && (p.items = w)) : this.target === "openapi-3.0" ? (p.items = {
              anyOf: A
            }, w && p.items.anyOf.push(w), p.minItems = A.length, w || (p.maxItems = A.length)) : (p.items = A, w && (p.additionalItems = w));
            const { minimum: D, maximum: C } = r._zod.bag;
            typeof D == "number" && (p.minItems = D), typeof C == "number" && (p.maxItems = C);
            break;
          }
          case "record": {
            const p = m;
            p.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (p.propertyNames = this.process(l.keyType, {
              ..._,
              path: [..._.path, "propertyNames"]
            })), p.additionalProperties = this.process(l.valueType, {
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
            const p = m, x = yb(l.entries);
            x.every((E) => typeof E == "number") && (p.type = "number"), x.every((E) => typeof E == "string") && (p.type = "string"), p.enum = x;
            break;
          }
          case "literal": {
            const p = m, x = [];
            for (const E of l.values)
              if (E === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof E == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                x.push(Number(E));
              } else
                x.push(E);
            if (x.length !== 0) if (x.length === 1) {
              const E = x[0];
              p.type = E === null ? "null" : typeof E, this.target === "draft-4" || this.target === "openapi-3.0" ? p.enum = [E] : p.const = E;
            } else
              x.every((E) => typeof E == "number") && (p.type = "number"), x.every((E) => typeof E == "string") && (p.type = "string"), x.every((E) => typeof E == "boolean") && (p.type = "string"), x.every((E) => E === null) && (p.type = "null"), p.enum = x;
            break;
          }
          case "file": {
            const p = m, x = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: E, maximum: A, mime: w } = r._zod.bag;
            E !== void 0 && (x.minLength = E), A !== void 0 && (x.maxLength = A), w ? w.length === 1 ? (x.contentMediaType = w[0], Object.assign(p, x)) : p.anyOf = w.map((D) => ({ ...x, contentMediaType: D })) : Object.assign(p, x);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const p = this.process(l.innerType, _);
            this.target === "openapi-3.0" ? (d.ref = l.innerType, m.nullable = !0) : m.anyOf = [p, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(l.innerType, _), d.ref = l.innerType;
            break;
          }
          case "success": {
            const p = m;
            p.type = "boolean";
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
            let p;
            try {
              p = l.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            m.default = p;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const p = m, x = r._zod.pattern;
            if (!x)
              throw new Error("Pattern not found in template literal");
            p.type = "string", p.pattern = x.source;
            break;
          }
          case "pipe": {
            const p = this.io === "input" ? l.in._zod.def.type === "transform" ? l.out : l.in : l.out;
            this.process(p, _), d.ref = p;
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
            const p = r._zod.innerType;
            this.process(p, _), d.ref = p;
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
    return g && Object.assign(d.schema, g), this.io === "input" && Rt(r) && (delete d.schema.examples, delete d.schema.default), this.io === "input" && d.schema._prefault && ((s = d.schema).default ?? (s.default = d.schema._prefault)), delete d.schema._prefault, this.seen.get(r).schema;
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
    const u = (v) => {
      const _ = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const x = s.external.registry.get(v[0])?.id, E = s.external.uri ?? ((w) => w);
        if (x)
          return { ref: E(x) };
        const A = v[1].defId ?? v[1].schema.id ?? `schema${this.counter++}`;
        return v[1].defId = A, { defId: A, ref: `${E("__shared")}#/${_}/${A}` };
      }
      if (v[1] === l)
        return { ref: "#" };
      const m = `#/${_}/`, p = v[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: p, ref: m + p };
    }, f = (v) => {
      if (v[1].schema.$ref)
        return;
      const _ = v[1], { ref: b, defId: m } = u(v);
      _.def = { ..._.schema }, m && (_.defId = m);
      const p = _.schema;
      for (const x in p)
        delete p[x];
      p.$ref = b;
    };
    if (s.cycles === "throw")
      for (const v of this.seen.entries()) {
        const _ = v[1];
        if (_.cycle)
          throw new Error(`Cycle detected: #/${_.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const v of this.seen.entries()) {
      const _ = v[1];
      if (r === v[0]) {
        f(v);
        continue;
      }
      if (s.external) {
        const m = s.external.registry.get(v[0])?.id;
        if (r !== v[0] && m) {
          f(v);
          continue;
        }
      }
      if (this.metadataRegistry.get(v[0])?.id) {
        f(v);
        continue;
      }
      if (_.cycle) {
        f(v);
        continue;
      }
      if (_.count > 1 && s.reused === "ref") {
        f(v);
        continue;
      }
    }
    const d = (v, _) => {
      const b = this.seen.get(v), m = b.def ?? b.schema, p = { ...m };
      if (b.ref === null)
        return;
      const x = b.ref;
      if (b.ref = null, x) {
        d(x, _);
        const E = this.seen.get(x).schema;
        E.$ref && (_.target === "draft-7" || _.target === "draft-4" || _.target === "openapi-3.0") ? (m.allOf = m.allOf ?? [], m.allOf.push(E)) : (Object.assign(m, E), Object.assign(m, p));
      }
      b.isParent || this.override({
        zodSchema: v,
        jsonSchema: m,
        path: b.path ?? []
      });
    };
    for (const v of [...this.seen.entries()].reverse())
      d(v[0], { target: this.target });
    const h = {};
    if (this.target === "draft-2020-12" ? h.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? h.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? h.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const v = s.external.registry.get(r)?.id;
      if (!v)
        throw new Error("Schema is missing an `id` property");
      h.$id = s.external.uri(v);
    }
    Object.assign(h, l.def);
    const g = s.external?.defs ?? {};
    for (const v of this.seen.entries()) {
      const _ = v[1];
      _.def && _.defId && (g[_.defId] = _.def);
    }
    s.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? h.$defs = g : h.definitions = g);
    try {
      return JSON.parse(JSON.stringify(h));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function ON(t, r) {
  if (t instanceof zb) {
    const s = new r0(r), l = {};
    for (const d of t._idmap.entries()) {
      const [h, g] = d;
      s.process(g);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: l
    };
    for (const d of t._idmap.entries()) {
      const [h, g] = d;
      u[h] = s.emit(g, {
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
function Rt(t, r) {
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
      return Rt(l.element, a);
    case "object": {
      for (const u in l.shape)
        if (Rt(l.shape[u], a))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of l.options)
        if (Rt(u, a))
          return !0;
      return !1;
    }
    case "intersection":
      return Rt(l.left, a) || Rt(l.right, a);
    case "tuple": {
      for (const u of l.items)
        if (Rt(u, a))
          return !0;
      return !!(l.rest && Rt(l.rest, a));
    }
    case "record":
      return Rt(l.keyType, a) || Rt(l.valueType, a);
    case "map":
      return Rt(l.keyType, a) || Rt(l.valueType, a);
    case "set":
      return Rt(l.valueType, a);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return Rt(l.innerType, a);
    case "lazy":
      return Rt(l.getter(), a);
    case "default":
      return Rt(l.innerType, a);
    case "prefault":
      return Rt(l.innerType, a);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return Rt(l.in, a) || Rt(l.out, a);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${l.type}`);
}
const DN = /* @__PURE__ */ te("ZodISODateTime", (t, r) => {
  i3.init(t, r), bt.init(t, r);
});
function MN(t) {
  return oN(DN, t);
}
const kN = /* @__PURE__ */ te("ZodISODate", (t, r) => {
  s3.init(t, r), bt.init(t, r);
});
function jN(t) {
  return lN(kN, t);
}
const RN = /* @__PURE__ */ te("ZodISOTime", (t, r) => {
  o3.init(t, r), bt.init(t, r);
});
function zN(t) {
  return uN(RN, t);
}
const LN = /* @__PURE__ */ te("ZodISODuration", (t, r) => {
  l3.init(t, r), bt.init(t, r);
});
function IN(t) {
  return cN(LN, t);
}
const PN = (t, r) => {
  Eb.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (a) => Kw(t, a)
      // enumerable: false,
    },
    flatten: {
      value: (a) => Qw(t, a)
      // enumerable: false,
    },
    addIssue: {
      value: (a) => {
        t.issues.push(a), t.message = JSON.stringify(t.issues, Xd, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (a) => {
        t.issues.push(...a), t.message = JSON.stringify(t.issues, Xd, 2);
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
}, Vn = te("ZodError", PN, {
  Parent: Error
}), BN = /* @__PURE__ */ gh(Vn), UN = /* @__PURE__ */ vh(Vn), FN = /* @__PURE__ */ Bu(Vn), HN = /* @__PURE__ */ Uu(Vn), qN = /* @__PURE__ */ eC(Vn), ZN = /* @__PURE__ */ tC(Vn), GN = /* @__PURE__ */ nC(Vn), VN = /* @__PURE__ */ rC(Vn), YN = /* @__PURE__ */ aC(Vn), XN = /* @__PURE__ */ iC(Vn), $N = /* @__PURE__ */ sC(Vn), QN = /* @__PURE__ */ oC(Vn), zt = /* @__PURE__ */ te("ZodType", (t, r) => (Mt.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...a) => t.clone(qa(r, {
  checks: [
    ...r.checks ?? [],
    ...a.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (a, s) => da(t, a, s), t.brand = () => t, t.register = ((a, s) => (a.add(t, s), t)), t.parse = (a, s) => BN(t, a, s, { callee: t.parse }), t.safeParse = (a, s) => FN(t, a, s), t.parseAsync = async (a, s) => UN(t, a, s, { callee: t.parseAsync }), t.safeParseAsync = async (a, s) => HN(t, a, s), t.spa = t.safeParseAsync, t.encode = (a, s) => qN(t, a, s), t.decode = (a, s) => ZN(t, a, s), t.encodeAsync = async (a, s) => GN(t, a, s), t.decodeAsync = async (a, s) => VN(t, a, s), t.safeEncode = (a, s) => YN(t, a, s), t.safeDecode = (a, s) => XN(t, a, s), t.safeEncodeAsync = async (a, s) => $N(t, a, s), t.safeDecodeAsync = async (a, s) => QN(t, a, s), t.refine = (a, s) => t.check(BA(a, s)), t.superRefine = (a) => t.check(UA(a)), t.overwrite = (a) => t.check(yo(a)), t.optional = () => o0(t), t.nullable = () => l0(t), t.nullish = () => o0(l0(t)), t.nonoptional = (a) => kA(t, a), t.array = () => ln(t), t.or = (a) => xA([t, a]), t.and = (a) => wA(t, a), t.transform = (a) => u0(t, NA(a)), t.default = (a) => OA(t, a), t.prefault = (a) => MA(t, a), t.catch = (a) => RA(t, a), t.pipe = (a) => u0(t, a), t.readonly = () => IA(t), t.describe = (a) => {
  const s = t.clone();
  return ao.add(s, { description: a }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return ao.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...a) => {
  if (a.length === 0)
    return ao.get(t);
  const s = t.clone();
  return ao.add(s, a[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), Pb = /* @__PURE__ */ te("_ZodString", (t, r) => {
  yh.init(t, r), zt.init(t, r);
  const a = t._zod.bag;
  t.format = a.format ?? null, t.minLength = a.minimum ?? null, t.maxLength = a.maximum ?? null, t.regex = (...s) => t.check(mN(...s)), t.includes = (...s) => t.check(yN(...s)), t.startsWith = (...s) => t.check(bN(...s)), t.endsWith = (...s) => t.check(_N(...s)), t.min = (...s) => t.check(Ru(...s)), t.max = (...s) => t.check(Lb(...s)), t.length = (...s) => t.check(Ib(...s)), t.nonempty = (...s) => t.check(Ru(1, ...s)), t.lowercase = (s) => t.check(gN(s)), t.uppercase = (s) => t.check(vN(s)), t.trim = () => t.check(xN()), t.normalize = (...s) => t.check(SN(...s)), t.toLowerCase = () => t.check(EN()), t.toUpperCase = () => t.check(wN());
}), KN = /* @__PURE__ */ te("ZodString", (t, r) => {
  yh.init(t, r), Pb.init(t, r), t.email = (a) => t.check(U3(JN, a)), t.url = (a) => t.check(G3(WN, a)), t.jwt = (a) => t.check(sN(pA, a)), t.emoji = (a) => t.check(V3(eA, a)), t.guid = (a) => t.check(Wy(a0, a)), t.uuid = (a) => t.check(F3(fu, a)), t.uuidv4 = (a) => t.check(H3(fu, a)), t.uuidv6 = (a) => t.check(q3(fu, a)), t.uuidv7 = (a) => t.check(Z3(fu, a)), t.nanoid = (a) => t.check(Y3(tA, a)), t.guid = (a) => t.check(Wy(a0, a)), t.cuid = (a) => t.check(X3(nA, a)), t.cuid2 = (a) => t.check($3(rA, a)), t.ulid = (a) => t.check(Q3(aA, a)), t.base64 = (a) => t.check(rN(fA, a)), t.base64url = (a) => t.check(aN(dA, a)), t.xid = (a) => t.check(K3(iA, a)), t.ksuid = (a) => t.check(J3(sA, a)), t.ipv4 = (a) => t.check(W3(oA, a)), t.ipv6 = (a) => t.check(eN(lA, a)), t.cidrv4 = (a) => t.check(tN(uA, a)), t.cidrv6 = (a) => t.check(nN(cA, a)), t.e164 = (a) => t.check(iN(hA, a)), t.datetime = (a) => t.check(MN(a)), t.date = (a) => t.check(jN(a)), t.time = (a) => t.check(zN(a)), t.duration = (a) => t.check(IN(a));
});
function Ft(t) {
  return B3(KN, t);
}
const bt = /* @__PURE__ */ te("ZodStringFormat", (t, r) => {
  gt.init(t, r), Pb.init(t, r);
}), JN = /* @__PURE__ */ te("ZodEmail", (t, r) => {
  QC.init(t, r), bt.init(t, r);
}), a0 = /* @__PURE__ */ te("ZodGUID", (t, r) => {
  XC.init(t, r), bt.init(t, r);
}), fu = /* @__PURE__ */ te("ZodUUID", (t, r) => {
  $C.init(t, r), bt.init(t, r);
}), WN = /* @__PURE__ */ te("ZodURL", (t, r) => {
  KC.init(t, r), bt.init(t, r);
}), eA = /* @__PURE__ */ te("ZodEmoji", (t, r) => {
  JC.init(t, r), bt.init(t, r);
}), tA = /* @__PURE__ */ te("ZodNanoID", (t, r) => {
  WC.init(t, r), bt.init(t, r);
}), nA = /* @__PURE__ */ te("ZodCUID", (t, r) => {
  e3.init(t, r), bt.init(t, r);
}), rA = /* @__PURE__ */ te("ZodCUID2", (t, r) => {
  t3.init(t, r), bt.init(t, r);
}), aA = /* @__PURE__ */ te("ZodULID", (t, r) => {
  n3.init(t, r), bt.init(t, r);
}), iA = /* @__PURE__ */ te("ZodXID", (t, r) => {
  r3.init(t, r), bt.init(t, r);
}), sA = /* @__PURE__ */ te("ZodKSUID", (t, r) => {
  a3.init(t, r), bt.init(t, r);
}), oA = /* @__PURE__ */ te("ZodIPv4", (t, r) => {
  u3.init(t, r), bt.init(t, r);
}), lA = /* @__PURE__ */ te("ZodIPv6", (t, r) => {
  c3.init(t, r), bt.init(t, r);
}), uA = /* @__PURE__ */ te("ZodCIDRv4", (t, r) => {
  f3.init(t, r), bt.init(t, r);
}), cA = /* @__PURE__ */ te("ZodCIDRv6", (t, r) => {
  d3.init(t, r), bt.init(t, r);
}), fA = /* @__PURE__ */ te("ZodBase64", (t, r) => {
  h3.init(t, r), bt.init(t, r);
}), dA = /* @__PURE__ */ te("ZodBase64URL", (t, r) => {
  m3.init(t, r), bt.init(t, r);
}), hA = /* @__PURE__ */ te("ZodE164", (t, r) => {
  g3.init(t, r), bt.init(t, r);
}), pA = /* @__PURE__ */ te("ZodJWT", (t, r) => {
  y3.init(t, r), bt.init(t, r);
}), Bb = /* @__PURE__ */ te("ZodNumber", (t, r) => {
  kb.init(t, r), zt.init(t, r), t.gt = (s, l) => t.check(t0(s, l)), t.gte = (s, l) => t.check(Ad(s, l)), t.min = (s, l) => t.check(Ad(s, l)), t.lt = (s, l) => t.check(e0(s, l)), t.lte = (s, l) => t.check(Nd(s, l)), t.max = (s, l) => t.check(Nd(s, l)), t.int = (s) => t.check(i0(s)), t.safe = (s) => t.check(i0(s)), t.positive = (s) => t.check(t0(0, s)), t.nonnegative = (s) => t.check(Ad(0, s)), t.negative = (s) => t.check(e0(0, s)), t.nonpositive = (s) => t.check(Nd(0, s)), t.multipleOf = (s, l) => t.check(n0(s, l)), t.step = (s, l) => t.check(n0(s, l)), t.finite = () => t;
  const a = t._zod.bag;
  t.minValue = Math.max(a.minimum ?? Number.NEGATIVE_INFINITY, a.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(a.maximum ?? Number.POSITIVE_INFINITY, a.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (a.format ?? "").includes("int") || Number.isSafeInteger(a.multipleOf ?? 0.5), t.isFinite = !0, t.format = a.format ?? null;
});
function po(t) {
  return fN(Bb, t);
}
const mA = /* @__PURE__ */ te("ZodNumberFormat", (t, r) => {
  b3.init(t, r), Bb.init(t, r);
});
function i0(t) {
  return dN(mA, t);
}
const gA = /* @__PURE__ */ te("ZodUnknown", (t, r) => {
  _3.init(t, r), zt.init(t, r);
});
function s0() {
  return hN(gA);
}
const vA = /* @__PURE__ */ te("ZodNever", (t, r) => {
  S3.init(t, r), zt.init(t, r);
});
function yA(t) {
  return pN(vA, t);
}
const bA = /* @__PURE__ */ te("ZodArray", (t, r) => {
  x3.init(t, r), zt.init(t, r), t.element = r.element, t.min = (a, s) => t.check(Ru(a, s)), t.nonempty = (a) => t.check(Ru(1, a)), t.max = (a, s) => t.check(Lb(a, s)), t.length = (a, s) => t.check(Ib(a, s)), t.unwrap = () => t.element;
});
function ln(t, r) {
  return CN(bA, t, r);
}
const _A = /* @__PURE__ */ te("ZodObject", (t, r) => {
  w3.init(t, r), zt.init(t, r), dt(t, "shape", () => r.shape), t.keyof = () => zu(Object.keys(t._zod.def.shape)), t.catchall = (a) => t.clone({ ...t._zod.def, catchall: a }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: s0() }), t.loose = () => t.clone({ ...t._zod.def, catchall: s0() }), t.strict = () => t.clone({ ...t._zod.def, catchall: yA() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (a) => Gw(t, a), t.safeExtend = (a) => Vw(t, a), t.merge = (a) => Yw(t, a), t.pick = (a) => qw(t, a), t.omit = (a) => Zw(t, a), t.partial = (...a) => Xw(Ub, t, a[0]), t.required = (...a) => $w(Fb, t, a[0]);
});
function tr(t, r) {
  const a = {
    type: "object",
    shape: t ?? {},
    ...we(r)
  };
  return new _A(a);
}
const SA = /* @__PURE__ */ te("ZodUnion", (t, r) => {
  C3.init(t, r), zt.init(t, r), t.options = r.options;
});
function xA(t, r) {
  return new SA({
    type: "union",
    options: t,
    ...we(r)
  });
}
const EA = /* @__PURE__ */ te("ZodIntersection", (t, r) => {
  N3.init(t, r), zt.init(t, r);
});
function wA(t, r) {
  return new EA({
    type: "intersection",
    left: t,
    right: r
  });
}
const Qd = /* @__PURE__ */ te("ZodEnum", (t, r) => {
  A3.init(t, r), zt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const a = new Set(Object.keys(r.entries));
  t.extract = (s, l) => {
    const u = {};
    for (const f of s)
      if (a.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Qd({
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
    return new Qd({
      ...r,
      checks: [],
      ...we(l),
      entries: u
    });
  };
});
function zu(t, r) {
  const a = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Qd({
    type: "enum",
    entries: a,
    ...we(r)
  });
}
const CA = /* @__PURE__ */ te("ZodTransform", (t, r) => {
  T3.init(t, r), zt.init(t, r), t._zod.parse = (a, s) => {
    if (s.direction === "backward")
      throw new gb(t.constructor.name);
    a.addIssue = (u) => {
      if (typeof u == "string")
        a.issues.push(ho(u, a.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = a.value), f.inst ?? (f.inst = t), a.issues.push(ho(f));
      }
    };
    const l = r.transform(a.value, a);
    return l instanceof Promise ? l.then((u) => (a.value = u, a)) : (a.value = l, a);
  };
});
function NA(t) {
  return new CA({
    type: "transform",
    transform: t
  });
}
const Ub = /* @__PURE__ */ te("ZodOptional", (t, r) => {
  O3.init(t, r), zt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function o0(t) {
  return new Ub({
    type: "optional",
    innerType: t
  });
}
const AA = /* @__PURE__ */ te("ZodNullable", (t, r) => {
  D3.init(t, r), zt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function l0(t) {
  return new AA({
    type: "nullable",
    innerType: t
  });
}
const TA = /* @__PURE__ */ te("ZodDefault", (t, r) => {
  M3.init(t, r), zt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function OA(t, r) {
  return new TA({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : _b(r);
    }
  });
}
const DA = /* @__PURE__ */ te("ZodPrefault", (t, r) => {
  k3.init(t, r), zt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function MA(t, r) {
  return new DA({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : _b(r);
    }
  });
}
const Fb = /* @__PURE__ */ te("ZodNonOptional", (t, r) => {
  j3.init(t, r), zt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function kA(t, r) {
  return new Fb({
    type: "nonoptional",
    innerType: t,
    ...we(r)
  });
}
const jA = /* @__PURE__ */ te("ZodCatch", (t, r) => {
  R3.init(t, r), zt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function RA(t, r) {
  return new jA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const zA = /* @__PURE__ */ te("ZodPipe", (t, r) => {
  z3.init(t, r), zt.init(t, r), t.in = r.in, t.out = r.out;
});
function u0(t, r) {
  return new zA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const LA = /* @__PURE__ */ te("ZodReadonly", (t, r) => {
  L3.init(t, r), zt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function IA(t) {
  return new LA({
    type: "readonly",
    innerType: t
  });
}
const PA = /* @__PURE__ */ te("ZodCustom", (t, r) => {
  I3.init(t, r), zt.init(t, r);
});
function BA(t, r = {}) {
  return NN(PA, t, r);
}
function UA(t) {
  return AN(t);
}
const c0 = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Kd = "placeholder-chatHistory", FA = tr({
  justification: Ft().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Ft().describe("The new, full content for the character field.")
}), HA = tr({
  field: Ft(),
  value: Ft()
}), qA = tr({
  index: po().int().positive(),
  value: Ft()
});
tr({
  justification: Ft(),
  fields_to_change: ln(HA).optional(),
  draft_fields_to_remove: ln(Ft()).optional(),
  greetings_to_add: ln(Ft()).optional(),
  greetings_to_remove: ln(po().int().positive()).optional(),
  greetings_to_change: ln(qA).optional()
});
const ZA = (t, r) => {
  const a = tr({
    index: po().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Ft().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Ft().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: ln(Ft()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: ln(po().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: ln(a).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const l = tr({
      field: zu(t).describe("The unique ID of the field to change (core or draft)."),
      value: Ft().describe("The new content for the field.")
    });
    s.fields_to_change = ln(l).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = ln(zu(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), tr(s);
};
function Td(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Jd(t, r = 0) {
  const a = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${a}<item>
${Jd(s, r + 1)}${a}</item>
` : `${a}<item>${Td(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const l of Object.keys(t)) {
      const u = t[l];
      u !== null && typeof u == "object" ? s += `${a}<${l}>
${Jd(u, r + 1)}${a}</${l}>
` : s += `${a}<${l}>${Td(u)}</${l}>
`;
    }
    return s;
  }
  return `${a}<value>${Td(t)}</value>
`;
}
function GA(t, r) {
  const a = za(t);
  return r === "xml" ? Jd(a).trim() : JSON.stringify(a, null, 2);
}
function VA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function YA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function za(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, a = VA(t.example, r, t.default);
  if (a !== void 0) return a;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return za(s);
  switch (YA(t.type)) {
    case "object": {
      const u = {}, f = t.properties || {};
      for (const d of Object.keys(f))
        u[d] = za(f[d]);
      return t.additionalProperties && typeof t.additionalProperties == "object" && (u.additionalProperty = za(t.additionalProperties)), u;
    }
    case "array": {
      const u = t.items ?? {};
      return [za(u)];
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
      return t.properties || t.additionalProperties ? za({ ...t, type: "object" }) : t.items ? za({ ...t, type: "array" }) : null;
  }
}
const XA = new zS();
async function Wd(t, r, a, s, l, u) {
  const f = !s.json_schema && !1;
  return new Promise((d, h) => {
    const g = new AbortController(), v = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), XA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: a,
        custom: { stream: f, signal: v },
        overridePayload: s
      },
      {
        abortController: g,
        onEntry: void 0,
        onFinish: (_, b, m) => v.aborted ? h(new DOMException("Request aborted by user", "AbortError")) : m ? h(m) : b === void 0 && m === void 0 ? h(new DOMException("Request aborted by user", "AbortError")) : b ? d(b) : h(new Error("No data received from LLM"))
      }
    );
  });
}
async function eh(t, r, a, s) {
  const l = await Wd(t, r, a, Tu(), void 0, s);
  if (!l?.content)
    throw new Error("Plain request failed to return content.");
  return l.content;
}
async function Hb(t, r, a, s, l, u, f) {
  const d = mt.getSettings();
  let h, g;
  const v = ON(a);
  if (l === "native") {
    if (h = await Wd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: v },
        ...Tu()
      },
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const b = l, m = GA(v, b), p = JSON.stringify(v, null, 2), x = b === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", E = d.prompts[x]?.content;
    if (!E)
      throw new Error(`Prompt template for mode "${b}" not found.`);
    const A = {
      example_response: m,
      schema: p
    }, D = { role: "system", content: Jt.compile(E, { noEscape: !0, strict: !0 })(A) };
    if (h = await Wd(
      t,
      [...r, D],
      u,
      Tu(),
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = J0(h.content, b, { schema: v });
  }
  const _ = a.safeParse(g);
  if (!_.success) {
    const b = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", g), await ve("error", b), new Error(b);
  }
  return _.data;
}
function Od(t, r, a) {
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
    const s = pb(t, r);
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
}, $A = ({ before: t, after: r }) => {
  const a = G.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = t.fields[u], d = r.fields[u], h = f?.value ?? "", g = d?.value ?? "";
      h !== g && s.push({
        label: d?.label ?? f?.label ?? u,
        before: h,
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
}, QA = ({ currentState: t, initialState: r }) => {
  const [a, s] = G.useState(!1), { coreFields: l, alternateGreetings: u } = G.useMemo(() => {
    const d = [], h = [];
    return kn.forEach((g) => {
      t.fields[g] && d.push({ label: t.fields[g].label, value: t.fields[g].value });
    }), Object.entries(t.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, v) => parseInt(g[0].split("_")[2]) - parseInt(v[0].split("_")[2])).forEach(([, g]) => h.push(g.value)), { coreFields: d, alternateGreetings: h };
  }, [t]), f = G.useMemo(() => {
    const d = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((g) => {
      const v = r.fields[g], _ = t.fields[g], b = v?.value ?? "", m = _?.value ?? "";
      b !== m && d.push({
        label: _?.label ?? v?.label ?? g,
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
    /* @__PURE__ */ S.jsx("div", { className: "current-state-content", children: a ? /* @__PURE__ */ S.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: d, before: h, after: g }) => /* @__PURE__ */ S.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ S.jsx("h4", { children: d }),
      /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Original" }),
        /* @__PURE__ */ S.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ S.jsx(bh, { originalContent: h, newContent: g })
    ] }, d)) }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx("h4", { children: "Core Fields" }),
      l.map(({ label: d, value: h }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ S.jsx("label", { children: d }),
        /* @__PURE__ */ S.jsx("div", { className: "state-value", children: h || /* @__PURE__ */ S.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, d)),
      u.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((d, h) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            h + 1
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: "state-value", children: d || /* @__PURE__ */ S.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, h))
      ] })
    ] }) })
  ] });
}, _h = (t) => Object.entries(t.fields).filter(([r]) => Iu(r)).sort((r, a) => Bi(r[0]) - Bi(a[0])).map(([, r]) => r.value), KA = (t, r) => {
  const a = Nu(t) || "draftField", s = (u) => kn.includes(u) || Iu(u) || !!r.fields[u];
  if (!s(a))
    return a;
  let l = 2;
  for (; s(`${a}${l}`); )
    l++;
  return `${a}${l}`;
}, qb = (t, r, a, s) => {
  const l = structuredClone(t);
  if (a === "field" && s) {
    const u = r;
    return l.fields[s] && (l.fields[s].value = u.response), l;
  }
  if (a === "global") {
    const u = r;
    let f = _h(l), d = !1;
    if (u.fields_to_change?.length)
      for (const h of u.fields_to_change)
        l.fields[h.field] ? l.fields[h.field].value = h.value : l.draftFields[h.field] && (l.draftFields[h.field].value = h.value);
    if (u.draft_fields_to_add?.length)
      for (const h of u.draft_fields_to_add) {
        const g = h.label.trim();
        if (!g) continue;
        const v = KA(g, l), _ = l.draftFields[v];
        l.draftFields[v] = {
          value: h.value,
          // Keep the prompt of a draft field we are overwriting; the user wrote it.
          prompt: _?.prompt ?? "",
          label: _?.label ?? g
        };
      }
    if (u.draft_fields_to_remove?.length)
      for (const h of u.draft_fields_to_remove)
        l.draftFields[h] && delete l.draftFields[h];
    if (u.greetings_to_change?.length) {
      d = !0;
      for (const h of u.greetings_to_change)
        h.index > 0 && h.index <= f.length && (f[h.index - 1] = h.value);
    }
    if (u.greetings_to_remove?.length) {
      d = !0;
      const h = new Set(u.greetings_to_remove.map((g) => g - 1));
      f = f.filter((g, v) => !h.has(v));
    }
    u.greetings_to_add?.length && (d = !0, f.push(...u.greetings_to_add)), d && (Object.keys(l.fields).forEach((h) => {
      Iu(h) && delete l.fields[h];
    }), f.forEach((h, g) => {
      const v = `${W0}${g + 1}`;
      l.fields[v] = {
        value: h,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate_Greeting_${g + 1}`
      };
    }));
  }
  return l;
}, { showdown: JA, DOMPurify: WA, hljs: e4 } = SillyTavern.libs, t4 = new JA.Converter({
  emoji: !0,
  literalMidWordUnderscores: !0,
  parseImgDimensions: !0,
  tables: !0,
  underline: !0,
  simpleLineBreaks: !0,
  strikethrough: !0,
  disableForced4SpacesIndentedSublists: !0
}), Zb = ({ content: t }) => {
  const r = G.useRef(null), a = G.useMemo(() => {
    const s = t4.makeHtml(t);
    return WA.sanitize(s);
  }, [t]);
  return G.useLayoutEffect(() => {
    const s = r.current;
    s && (s.innerHTML = a, s.querySelectorAll("pre").forEach((l) => {
      const u = l.querySelector("code");
      if (u && e4.highlightElement(u), l.querySelector(".code-copy-button")) return;
      const f = document.createElement("button");
      f.className = "code-copy-button", f.title = "Copy code", f.innerHTML = '<i class="fa-solid fa-clipboard"></i>', f.addEventListener("click", () => {
        const d = l.querySelector("code")?.textContent ?? "";
        navigator.clipboard.writeText(d), f.innerHTML = '<i class="fa-solid fa-check"></i>', setTimeout(() => {
          f.innerHTML = '<i class="fa-solid fa-clipboard"></i>';
        }, 1500);
      }), l.style.position = "relative", l.appendChild(f);
    }));
  }, [a]), /* @__PURE__ */ S.jsx("div", { ref: r, className: "message-content markdown-rendered" });
}, Li = SillyTavern.getContext(), n4 = ({ initialState: t, onSave: r, onClose: a }) => {
  const [s, l] = G.useState(() => structuredClone(t)), u = (_, b, m) => {
    const p = structuredClone(s), x = m ? "draftFields" : "fields";
    p[x][_] && (p[x][_].value = b), l(p);
  }, f = (_, b) => {
    const m = structuredClone(s), p = `alternate_greetings_${_ + 1}`;
    m.fields[p] && (m.fields[p].value = b), l(m);
  }, { coreFields: d, alternateGreetings: h, draftFields: g } = G.useMemo(() => {
    const _ = [], b = [], m = [];
    return kn.forEach((p) => {
      s.fields[p] && _.push({ id: p, label: s.fields[p].label, value: s.fields[p].value });
    }), Object.entries(s.fields).filter(([p]) => p.startsWith("alternate_greetings_")).sort((p, x) => parseInt(p[0].split("_")[2]) - parseInt(x[0].split("_")[2])).forEach(([, p]) => b.push(p.value)), Object.entries(s.draftFields).forEach(([p, x]) => {
      m.push({ id: p, label: x.label, value: x.value });
    }), { coreFields: _, alternateGreetings: b, draftFields: m };
  }, [s]), v = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), a();
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ S.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ S.jsxs(ce, { onClick: v, children: [
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
        /* @__PURE__ */ S.jsx(Wt, { value: m, onChange: (p) => u(_, p.target.value, !1), rows: 4 })
      ] }, _)),
      g.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: _, label: b, value: m }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsx("label", { children: b }),
          /* @__PURE__ */ S.jsx(Wt, { value: m, onChange: (p) => u(_, p.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      h.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((_, b) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            b + 1
          ] }),
          /* @__PURE__ */ S.jsx(Wt, { value: _, onChange: (m) => f(b, m.target.value), rows: 4 })
        ] }, b))
      ] })
    ] })
  ] });
}, r4 = ({
  session: t,
  onBack: r,
  onApply: a,
  onSessionUpdate: s,
  initialState: l,
  chatContextOptions: u
}) => {
  const [f, d] = G.useState(t.messages), [h, g] = G.useState(""), [v, _] = G.useState(!1), [b, m] = G.useState(null), [p, x] = G.useState(!1), [E, A] = G.useState(!1), [w, D] = G.useState(null), [C, T] = G.useState(""), M = G.useRef(null), R = G.useRef(null);
  G.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const L = G.useCallback(
    (X, xe, Ee) => {
      if (JSON.stringify(Ee) === JSON.stringify(xe))
        return X;
      const We = mt.getSettings().prompts.existingFieldDefinitions;
      if (!We) return X;
      const ke = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(Ee.fields), ...Object.keys(xe.fields)])).forEach((W) => {
        const ne = Ee.fields[W]?.value ?? "", de = xe.fields[W]?.value ?? "";
        if (ne !== de) {
          const Ne = xe.fields[W];
          Ne && (W.startsWith("alternate_greetings_") ? ke.alternate_greetings[Ne.label] = Ne.value : kn.includes(W) && (ke.core[Ne.label] = Ne.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(Ee.draftFields), ...Object.keys(xe.draftFields)])).forEach((W) => {
        const ne = Ee.draftFields[W]?.value ?? "", de = xe.draftFields[W]?.value ?? "";
        if (ne !== de && xe.draftFields[W]) {
          const Ne = xe.draftFields[W];
          ke.draft[Ne.label] = Ne.value;
        }
      }), Object.keys(ke.core).length === 0 && Object.keys(ke.alternate_greetings).length === 0 && Object.keys(ke.draft).length === 0)
        return X;
      const Nt = { fields: ke };
      let B = Jt.compile(We.content, { noEscape: !0 })(Nt);
      if (B = Li.substituteParams(B), B.trim()) {
        const W = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: B.trim(),
          isStateUpdate: !0
        };
        return [...X, W];
      }
      return X;
    },
    []
  ), Y = G.useCallback(
    async (X, xe, Ee, $e) => {
      const We = mt.getSettings();
      if (!t.profileId) {
        ve("warning", "Please select a connection profile for this session.");
        return;
      }
      R.current = new AbortController(), Ee(), _(!0);
      try {
        const ke = [], nt = Li.extensionSettings.connectionManager?.profiles?.find(
          (W) => W.id === t.profileId
        ), un = nt?.api ? Li.CONNECT_API_MAP[nt.api]?.selected : void 0;
        if (!un)
          throw new Error("No API selected for this session.");
        for (const W of X)
          if (W.id === Kd) {
            if (Kt === void 0 && !er) continue;
            const ne = await O0(un, u);
            ne.warnings?.length && ne.warnings.forEach((de) => ve("warning", de)), ke.push(...ne.result);
          } else
            ke.push(W);
        const Nt = X.slice(0, X.length - (xe ? 0 : 1)).reverse().find((W) => W.stateSnapshot)?.stateSnapshot ?? l, B = We.prompts.existingFieldDefinitions;
        if (B) {
          const W = {
            fields: {
              core: Object.fromEntries(
                Object.entries(Nt.fields).filter(([de]) => !de.startsWith("alternate_greetings_")).map(([, de]) => [de.label, de.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(Nt.fields).filter(([de]) => de.startsWith("alternate_greetings_")).map(([, de]) => [de.label, de.value])
              ),
              draft: Object.fromEntries(Object.entries(Nt.draftFields).map(([, de]) => [de.label, de.value]))
            }
          };
          let ne = Jt.compile(B.content, { noEscape: !0 })(W);
          if (ne = Li.substituteParams(ne), ne.trim()) {
            const de = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: ne.trim()
            }, Ne = ke.pop();
            ke.push(de), Ne && ke.push(Ne);
          }
        }
        if (t.isReadonly) {
          ke.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const W = await eh(
            t.profileId,
            ke,
            We.maxResponseToken,
            R.current.signal
          ), ne = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: W
          }, de = [...X, ne];
          d(de), s({ ...t, messages: de });
        } else {
          const W = t.type === "field" ? FA : (() => {
            const Ve = [...Object.keys(Nt.fields), ...Object.keys(Nt.draftFields)], Fe = Object.keys(Nt.draftFields);
            return ZA(Ve, Fe);
          })(), de = await Hb(
            t.profileId,
            ke,
            W,
            t.type === "field" ? c0.FIELD : c0.GLOBAL,
            t.promptEngineeringMode,
            We.maxResponseToken,
            R.current.signal
          ), Ne = qb(Nt, de, t.type, t.targetFieldId), oe = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: de.justification,
            stateSnapshot: Ne
          };
          let he = [...X, oe];
          he = L(he, Ne, Nt), d(he), s({ ...t, messages: he });
        }
      } catch (ke) {
        ke.name === "AbortError" ? ve("info", "Request was cancelled.") : (console.error("Revise request failed:", ke), ve("error", `Request failed: ${ke.message}`)), $e();
      } finally {
        _(!1), R.current = null;
      }
    },
    [t, s, l, u, L]
  ), U = G.useCallback(async () => {
    if (!h.trim() || v) return;
    const X = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, xe = f;
    Y(
      [...f, X],
      !1,
      () => {
        d([...f, X]), g("");
      },
      () => d(xe)
    );
  }, [h, v, f, Y]), q = G.useCallback(async () => {
    if (v || f.length === 0) return;
    const X = f;
    let xe = [...f];
    const Ee = f.findLastIndex(($e) => !$e.isStateUpdate);
    Ee > -1 && f[Ee].role === "assistant" && (xe = f.slice(0, Ee)), await Y(
      xe,
      !0,
      () => d(xe),
      () => d(X)
    );
  }, [v, f, Y]), Q = () => {
    const X = f.slice().reverse().find((xe) => xe.stateSnapshot)?.stateSnapshot ?? l;
    a(X), r();
  }, pe = (X) => {
    const xe = f.findIndex((We) => We.id === X);
    if (xe === -1 || !f[xe].stateSnapshot) return;
    const Ee = f[xe].stateSnapshot;
    let $e = l;
    for (let We = xe - 1; We >= 0; We--)
      if (f[We].stateSnapshot) {
        $e = f[We].stateSnapshot;
        break;
      }
    m({ before: $e, after: Ee });
  }, fe = () => {
    x(!0);
  }, _e = (X) => {
    D(X.id), T(X.content);
  }, P = () => {
    D(null), T("");
  }, ae = async () => {
    if (!w) return;
    const X = f.findIndex((nt) => nt.id === w);
    if (X === -1 || !await Li.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const Ee = f, $e = f.slice(0, X), We = { ...f[X], content: C }, ke = [...$e, We];
    P(), Y(
      ke,
      !1,
      () => d(ke),
      () => d(Ee)
    );
  }, me = async (X) => {
    const xe = f.findIndex((nt) => nt.id === X);
    if (xe === -1) return;
    const $e = !!f[xe].isInitial;
    if (!await Li.Popup.show.confirm(
      "Delete Message",
      $e ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let ke;
    $e ? ke = f.filter((nt) => nt.isInitial && nt.id !== X) : ke = f.slice(0, xe), d(ke), s({ ...t, messages: ke }), ve("info", "Message history has been updated.");
  }, Le = f.filter((X) => !X.isStateUpdate), j = Le.filter((X) => X.isInitial), J = Le.filter((X) => !X.isInitial), ie = f.slice().reverse().find((X) => X.stateSnapshot)?.stateSnapshot ?? l, se = () => {
    A(!0);
  }, le = (X) => {
    const xe = f.slice().reverse().find((We) => We.stateSnapshot)?.stateSnapshot ?? l, Ee = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: X
    };
    let $e = [...f, Ee];
    $e = L($e, X, xe), d($e), s({ ...t, messages: $e }), A(!1);
  }, Re = () => {
    R.current?.abort();
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
          fb,
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
        /* @__PURE__ */ S.jsx(ce, { onClick: fe, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ S.jsx(ce, { onClick: se, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ S.jsx(ce, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ S.jsxs(ce, { onClick: Q, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      j.length > 0 && /* @__PURE__ */ S.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ S.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ S.jsx("div", { className: "initial-messages-content", children: j.map(
          (X) => w === X.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ S.jsx(Wt, { value: C, onChange: (xe) => T(xe.target.value), rows: 5 }),
            /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ S.jsxs(ce, { onClick: ae, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ S.jsxs(ce, { onClick: P, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, X.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper initial-context ${X.role}`, children: [
            /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${X.role} initial`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: X.content }) }),
            !v && X.id !== Kd && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
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
        (X) => w === X.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ S.jsx(Wt, { value: C, onChange: (xe) => T(xe.target.value), rows: 3 }),
          /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ S.jsxs(ce, { onClick: ae, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ S.jsxs(ce, { onClick: P, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, X.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper ${X.role}`, children: [
          /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
            X.role === "user" && !X.stateSnapshot && !v && /* @__PURE__ */ S.jsxs(
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
            X.stateSnapshot && !v && /* @__PURE__ */ S.jsxs(
              ce,
              {
                className: "message-action-button",
                onClick: () => pe(X.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !v && /* @__PURE__ */ S.jsxs(
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
          /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${X.role}`, children: X.role === "assistant" ? /* @__PURE__ */ S.jsx(Zb, { content: X.content }) : /* @__PURE__ */ S.jsx("div", { className: "message-content", children: X.content }) })
        ] }, X.id)
      ),
      J.length > 0 && !v && /* @__PURE__ */ S.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ S.jsxs(ce, { onClick: q, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      v && /* @__PURE__ */ S.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ S.jsx(ce, { onClick: Re, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        Wt,
        {
          value: h,
          onChange: (X) => g(X.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: v || !!w,
          onKeyDown: (X) => {
            X.key === "Enter" && !X.shiftKey && (X.preventDefault(), U());
          }
        }
      ),
      /* @__PURE__ */ S.jsxs(ce, { onClick: U, disabled: v || !h.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    b && /* @__PURE__ */ S.jsx(
      Ba,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx($A, { before: b.before, after: b.after }),
        onComplete: () => m(null),
        options: { wide: !0, large: !0 }
      }
    ),
    p && /* @__PURE__ */ S.jsx(
      Ba,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(QA, { currentState: ie, initialState: l }),
        onComplete: () => x(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    E && /* @__PURE__ */ S.jsx(
      Ba,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          n4,
          {
            initialState: ie,
            onSave: le,
            onClose: () => A(!1)
          }
        ),
        onComplete: () => A(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
function Gb(t, r = {}) {
  const a = t?.entries;
  if (!a)
    return [];
  const s = Array.isArray(a) ? a : Object.values(a);
  return r.includeDisabled ? s : s.filter((l) => !l.disable);
}
async function a4(t, r, a, s, l) {
  const u = mt.getSettings(), f = u.mainContextTemplatePresets[a];
  if (!f)
    throw new Error(`Main context template preset "${a}" not found.`);
  const d = [], g = {
    ...{
      user: on.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: on.powerUserSettings.persona_description
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
    l.selectedCharacterIndexes.forEach((p) => {
      const x = on.characters[parseInt(p)];
      x && m.push(x);
    }), g.characters = m;
  }
  if (s.worldInfo) {
    const m = {};
    await Promise.all(
      l.selectedWorldNames.map(async (p) => {
        const x = await on.loadWorldInfo(p);
        x && (m[p] = Gb(x));
      })
    ), g.lorebooks = m;
  }
  for (const m of f.prompts) {
    if (!m.enabled || m.promptName === "stDescription" && !s.stDescription || m.promptName === "charDefinitions" && !s.charCard || m.promptName === "lorebookDefinitions" && !s.worldInfo || m.promptName === "existingFieldDefinitions" && !s.existingFields || m.promptName === "personaDescription" && !s.persona || m.promptName === "chatHistory" && s.messages.type === "none" || Kt === void 0 && !er && m.promptName === "chatHistory") continue;
    if (m.promptName === "chatHistory") {
      d.push({
        id: Kd,
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
    let E = "";
    E = Jt.compile(x.content, { noEscape: !0 })(g), E = on.substituteParams(E), E.trim() && d.push({
      id: `im-${d.length}`,
      role: m.role,
      content: E.trim(),
      isInitial: !0
    });
  }
  const v = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, b = Jt.compile(_, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: v
  });
  return d.push({
    id: `im-${d.length}`,
    role: "system",
    content: b,
    isInitial: !0
  }), d;
}
const Vb = "charCreator", Yb = "charCreator_reviseSessions", Xb = "charCreator_brainstormSessions", Za = () => SillyTavern.libs.localforage, i4 = (t) => {
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
    const l = i4(a.getItem(t));
    return l.value === null ? (l.recovered && a.removeItem(t), { value: null, migrated: !1, recovered: l.recovered, error: l.error }) : (await r.setItem(t, l.value), a.removeItem(t), { value: l.value, migrated: !0, recovered: l.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, xh = async (t, r, a = Za()) => {
  try {
    return await a.setItem(t, r), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, s4 = (t = Za(), r = localStorage) => Sh(Vb, t, r), o4 = (t, r = Za()) => xh(Vb, t, r), l4 = (t = Za(), r = localStorage) => Sh(Yb, t, r), u4 = (t, r = Za()) => xh(Yb, t, r), c4 = (t = Za(), r = localStorage) => Sh(Xb, t, r), f0 = (t, r = Za()) => xh(Xb, t, r), du = SillyTavern.getContext(), f4 = ({
  target: t,
  onClose: r,
  onApply: a,
  initialState: s,
  contextToSend: l,
  sessionForContext: u
}) => {
  const [f, d] = G.useState([]), [h, g] = G.useState(null), [v, _] = G.useState(!0);
  G.useEffect(() => {
    let D = !0;
    return l4().then(({ value: C, recovered: T }) => {
      D && (d(Array.isArray(C) ? C : []), T && ve("warning", "Some saved revise sessions were invalid and have been reset."));
    }).catch((C) => {
      console.error("Failed to load revise sessions:", C), ve("warning", "Saved revise sessions could not be loaded.");
    }).finally(() => {
      D && _(!1);
    }), () => {
      D = !1;
    };
  }, []);
  const b = G.useMemo(() => f.filter((D) => D.type === t.type && (D.type === "global" || D.targetFieldId === t.fieldId)).sort((D, C) => new Date(C.createdAt).getTime() - new Date(D.createdAt).getTime()), [f, t]), m = (D) => {
    d(D), u4(D).then((C) => {
      C.persisted || (console.warn("Failed to save revise sessions:", C.error), ve("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, p = async () => {
    const D = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", C = await du.Popup.show.input(
      "New Session Name",
      `Session for ${D} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (C)
      try {
        const T = mt.getSettings();
        if (!T.profileId) {
          ve("warning", "Please select a connection profile in the main popup first.");
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
            mainContextTemplatePreset: T.mainContextTemplatePreset
          },
          profileId: T.profileId,
          promptEngineeringMode: T.defaultPromptEngineeringMode,
          isReadonly: !1
        }, R = await a4(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          l,
          u
        );
        M.messages = R, m([...f, M]), g(M);
      } catch (T) {
        console.error("Failed to create session:", T), ve("error", `Failed to create session: ${T.message}`);
      }
  }, x = (D) => {
    g(D);
  }, E = async (D) => {
    if (await du.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const T = f.filter((M) => M.id !== D);
      m(T);
    }
  }, A = (D) => {
    const C = f.findIndex((M) => M.id === D.id), T = [...f];
    C !== -1 ? T[C] = D : T.push(D), m(T), g(D);
  };
  if (h) {
    const D = du.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === h.profileId
    ), C = {
      targetCharacterId: Kt,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!er,
      presetName: D?.preset,
      contextName: D?.context,
      instructName: D?.instruct
    }, T = l.messages;
    switch (T.type) {
      case "none":
        C.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        C.messageIndexesBetween = { start: 0, end: T.first ?? 10 };
        break;
      case "last":
        const M = du.chat?.length ?? 0, R = T.last ?? 10;
        C.messageIndexesBetween = {
          end: Math.max(0, M - 1),
          start: Math.max(0, M - R)
        };
        break;
      case "range":
        C.messageIndexesBetween = {
          start: T.range?.start ?? 0,
          end: T.range?.end ?? 10
        };
        break;
    }
    return Kt === void 0 && !er && (C.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ S.jsx(
      r4,
      {
        session: h,
        onBack: () => g(null),
        onApply: a,
        onSessionUpdate: A,
        initialState: s,
        chatContextOptions: C
      }
    );
  }
  const w = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ S.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ S.jsx("div", { className: "popup_header", children: /* @__PURE__ */ S.jsxs("h2", { children: [
      'Revise Sessions for "',
      w,
      '"'
    ] }) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-list", children: v ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : b.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : b.map((D) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => x(D), children: [
        /* @__PURE__ */ S.jsx("span", { className: "session-name", children: D.name }),
        /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(D.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ S.jsx(ce, { className: "danger_button", onClick: () => E(D.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-actions", children: /* @__PURE__ */ S.jsxs(ce, { onClick: p, className: "menu_button", children: [
      /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, d4 = SillyTavern.getContext(), h4 = 50 * 1024 * 1024, p4 = {
  "x-msvideo": "avi",
  quicktime: "mov",
  "x-matroska": "mkv",
  "x-ms-wmv": "wmv",
  "x-flv": "flv",
  "3gpp": "3gp"
};
function $b(t) {
  return new Promise((r, a) => {
    const s = new FileReader();
    s.onload = () => r(s.result), s.onerror = () => a(new Error("Failed to read file")), s.readAsDataURL(t);
  });
}
let m4 = 0;
async function g4(t) {
  const r = t.type.startsWith("video/");
  r && t.size > h4 && ve(
    "warning",
    `Video "${t.name}" is ${(t.size / 1024 / 1024).toFixed(1)}MB. Large videos may be slow to upload and expensive in tokens.`
  );
  const s = (await $b(t)).split(",")[1], l = t.type.split("/")[1] || "png", u = p4[l] || l, f = `brainstorm_${Date.now()}_${m4++}`, d = await fetch("/api/images/upload", {
    method: "POST",
    headers: d4.getRequestHeaders(),
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
async function v4(t) {
  const r = await fetch(t);
  if (!r.ok)
    throw new Error(`Failed to fetch image: ${r.statusText}`);
  const a = await r.blob();
  return new Promise((s, l) => {
    const u = new FileReader();
    u.onload = () => s(u.result), u.onerror = () => l(new Error("Failed to convert image to data URL")), u.readAsDataURL(a);
  });
}
async function Qb(t, r, a, s, l) {
  const u = mt.getSettings(), f = u.brainstormContextTemplatePresets?.[a] ?? u.brainstormContextTemplatePresets?.default;
  if (!f)
    throw new Error(`Brainstorm context template preset "${a}" not found.`);
  const d = [], g = {
    ...{
      user: on.name1 || "You",
      char: t.name?.value || "Character",
      persona: on.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(t).filter(([v]) => !v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      alternate_greetings: s.dontSendOtherGreetings ? {} : Object.fromEntries(
        Object.entries(t).filter(([v]) => v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      draft: Object.fromEntries(Object.entries(r).map(([, v]) => [v.label, v.value]))
    }
  };
  if (s.charCard) {
    const v = [];
    l.selectedCharacterIndexes.forEach((_) => {
      const b = on.characters[parseInt(_)];
      b && v.push(b);
    }), g.characters = v;
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      l.selectedWorldNames.map(async (_) => {
        const b = await on.loadWorldInfo(_);
        b && (v[_] = Object.values(b.entries).filter((m) => !m.disable));
      })
    ), g.lorebooks = v;
  }
  for (const v of f.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona || v.promptName === "chatHistory" || v.promptName === "brainstormExtractPrompt") continue;
    const _ = u.prompts[v.promptName];
    if (!_ || _.content.includes("{{activeFormatInstructions}}")) continue;
    let b = Jt.compile(_.content, { noEscape: !0 })(g);
    b = on.substituteParams(b), b.trim() && d.push({
      id: `im-${d.length}`,
      role: v.role,
      content: b.trim(),
      isInitial: !0
    });
  }
  return d;
}
const y4 = {
  field: "field",
  "draft-add": "new draft",
  "greeting-change": "greeting",
  "greeting-add": "new greeting"
}, b4 = ({
  justification: t,
  items: r,
  isExtracting: a,
  onApply: s,
  onReExtract: l,
  onCancel: u
}) => {
  const [f, d] = G.useState(() => new Set(r.map((m) => m.id))), [h, g] = G.useState(""), v = (m) => {
    d((p) => {
      const x = new Set(p);
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
        const p = f.has(m.id);
        return /* @__PURE__ */ S.jsxs("div", { className: `extract-item ${p ? "" : "deselected"}`, children: [
          /* @__PURE__ */ S.jsxs("label", { className: "extract-item-header checkbox_label", children: [
            /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: p, onChange: () => v(m.id) }),
            /* @__PURE__ */ S.jsx("span", { className: "extract-item-label", children: m.label }),
            /* @__PURE__ */ S.jsx("span", { className: "extract-item-badge", children: y4[m.kind] }),
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
        Wt,
        {
          id: "crec-extract-hint",
          value: h,
          onChange: (m) => g(m.target.value),
          placeholder: "e.g. use the second name we discussed, ignore the pirate tangent",
          rows: 2,
          disabled: a
        }
      ),
      /* @__PURE__ */ S.jsx(ce, { onClick: () => l(h), disabled: a, title: "Run the extraction again", children: a ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
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
}, _4 = "BrainstormCardExtraction", S4 = "brainstormExtractPrompt", d0 = (t) => {
  const r = t?.prompts.find((a) => a.promptName === S4);
  return !r || !r.enabled ? null : { role: r.role };
}, x4 = 4096, E4 = (t, r) => {
  const a = {
    justification: Ft().describe(
      "A brief, friendly explanation of which fields you filled in and any choice you had to make between competing ideas from the conversation."
    ),
    greetings_to_add: ln(Ft()).optional().describe("New alternate greetings to append. Only include greetings the conversation supports."),
    draft_fields_to_add: ln(
      tr({
        label: Ft().describe('A short human-readable name for the field, e.g. "Backstory" or "Voice Notes".'),
        value: Ft().describe("The content for the field.")
      })
    ).optional().describe(
      "Character material that fits none of the core card fields. Omit unless the conversation produced such material."
    )
  };
  return t.length > 0 && (a.fields_to_change = ln(
    tr({
      field: zu(t).describe("The ID of the card field to fill in, exactly as listed in the task instructions."),
      value: Ft().describe("The finished content for the field.")
    })
  ).optional().describe("Card fields to fill in from the conversation. Omit any field the conversation does not support.")), r > 0 && (a.greetings_to_change = ln(
    tr({
      index: po().int().positive().describe(`The 1-based index of an existing alternate greeting (1 to ${r}).`),
      value: Ft().describe("The new content for that alternate greeting.")
    })
  ).optional().describe("Existing alternate greetings to rewrite.")), tr(a);
}, w4 = (t) => {
  const r = kn.filter((l) => t.fields[l]).map((l) => ({
    id: l,
    label: t.fields[l].label,
    value: t.fields[l].value
  })), a = Object.entries(t.fields).filter(([l]) => Iu(l)).sort((l, u) => Bi(l[0]) - Bi(u[0])).map(([l, u], f) => ({
    index: Number.isNaN(Bi(l)) ? f + 1 : Bi(l),
    value: u.value
  })), s = Object.entries(t.draftFields).map(([l, u]) => ({
    id: l,
    label: u.label,
    value: u.value
  }));
  return { coreFields: r, greetings: a, draftFields: s };
}, C4 = (t, r, a) => {
  const { coreFields: s, greetings: l, draftFields: u } = w4(r);
  return Jt.compile(t, { noEscape: !0 })({
    char: "{{char}}",
    user: "{{user}}",
    coreFields: s,
    greetings: l,
    draftFields: u,
    extractionHint: a?.trim() ?? ""
  }).trim();
}, N4 = (t, r) => {
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
}, A4 = (t, r) => {
  const a = { justification: t.justification }, s = t.fields_to_change?.filter((d) => r.has(`field:${d.field}`));
  s?.length && (a.fields_to_change = s);
  const l = t.greetings_to_change?.filter(
    (d) => r.has(`greeting-change:${d.index}`)
  );
  l?.length && (a.greetings_to_change = l);
  const u = t.greetings_to_add?.filter((d, h) => r.has(`greeting-add:${h}`));
  u?.length && (a.greetings_to_add = u);
  const f = t.draft_fields_to_add?.filter((d, h) => r.has(`draft-add:${h}`));
  return f?.length && (a.draft_fields_to_add = f), a;
}, h0 = SillyTavern.getContext(), T4 = ({
  session: t,
  onBack: r,
  onSessionUpdate: a,
  contextToSend: s,
  sessionForContext: l,
  onApplyToCard: u,
  isActive: f = !0
}) => {
  const [d, h] = G.useState(t.messages), [g, v] = G.useState(""), [_, b] = G.useState(!1), [m, p] = G.useState(null), [x, E] = G.useState(""), [A, w] = G.useState([]), D = G.useRef(null), C = G.useRef(null), [T, M] = G.useState([]), [R, L] = G.useState([]), Y = G.useRef(null), U = G.useRef(/* @__PURE__ */ new Map()), q = G.useRef(!1), [Q, pe] = G.useState(!1), [fe, _e] = G.useState(null), P = G.useRef(null), ae = (re) => re.type.startsWith("video/"), me = (re) => re.mediaType === "video", Le = G.useRef(d);
  Le.current = d;
  const j = G.useRef(t);
  j.current = t;
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
    let re = !1;
    return (async () => {
      const Pe = mt.getSettings();
      try {
        const ge = await Qb(
          ie.current.fields,
          ie.current.draftFields,
          Pe.brainstormContextTemplatePreset,
          s,
          ie.current
        );
        if (re) return;
        const Be = Le.current.filter((je) => !je.isInitial), He = [...ge, ...Be];
        h(He), J.current({
          ...j.current,
          messages: He,
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
      re = !0;
    };
  }, [se]);
  const Re = G.useCallback(async (re) => {
    const be = re.filter((ge) => ge.type.startsWith("image/") || ge.type.startsWith("video/"));
    if (be.length === 0) return;
    const Pe = await Promise.all(be.map((ge) => $b(ge)));
    M((ge) => [...ge, ...be]), L((ge) => [...ge, ...Pe]);
  }, []), X = G.useCallback((re) => {
    M((be) => be.filter((Pe, ge) => ge !== re)), L((be) => be.filter((Pe, ge) => ge !== re));
  }, []), xe = G.useCallback(
    (re) => {
      const be = Array.from(re.clipboardData.files);
      be.some((Pe) => Pe.type.startsWith("image/") || Pe.type.startsWith("video/")) && (re.preventDefault(), Re(be));
    },
    [Re]
  ), Ee = G.useCallback(
    (re) => {
      const be = Array.from(re.target.files || []);
      Re(be), Y.current && (Y.current.value = "");
    },
    [Re]
  ), $e = G.useRef(f);
  G.useEffect(() => {
    const re = f && !$e.current;
    $e.current = f, f && D.current?.scrollIntoView({ behavior: re ? "auto" : "smooth" });
  }, [d, f]);
  const We = G.useCallback(async (re) => {
    for (const be of re)
      if (be.images) {
        for (const Pe of be.images)
          if (!U.current.has(Pe.url))
            try {
              const ge = await v4(Pe.url);
              U.current.set(Pe.url, ge);
            } catch (ge) {
              console.warn(`Failed to load image ${Pe.url}, skipping`, ge);
            }
      }
  }, []), ke = G.useCallback(
    async (re, be, Pe) => {
      const ge = mt.getSettings();
      if (!ge.profileId) {
        ve("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      C.current = new AbortController(), await We(re), be(), b(!0);
      try {
        const Be = re.some((Yn) => Yn.images?.some((fr) => fr.mediaType === "video")), He = Od(
          re,
          U.current,
          Be && q.current
        );
        let je;
        try {
          je = await eh(
            ge.profileId,
            He,
            ge.maxResponseToken,
            C.current.signal
          );
        } catch (Yn) {
          if (Yn.name === "AbortError" || !Be || q.current)
            throw Yn;
          q.current = !0;
          const fr = Od(re, U.current, !0);
          je = await eh(
            ge.profileId,
            fr,
            ge.maxResponseToken,
            C.current.signal
          ), ve("warning", "Video attachments were skipped because the current model does not support them.");
        }
        const nn = {
          id: `bm-${Date.now()}-ai`,
          role: "assistant",
          content: je
        }, Vt = [...re, nn];
        h(Vt), a({ ...t, messages: Vt });
      } catch (Be) {
        Be.name === "AbortError" ? ve("info", "Request was cancelled.") : (console.error("Brainstorm request failed:", Be), ve("error", `Request failed: ${Be.message}`)), Pe();
      } finally {
        b(!1), C.current = null;
      }
    },
    [t, a, We]
  ), nt = G.useMemo(
    () => ({ fields: l.fields, draftFields: l.draftFields }),
    [l.fields, l.draftFields]
  ), un = G.useCallback(
    async (re) => {
      const be = mt.getSettings();
      if (!be.profileId) {
        ve("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      const Pe = be.prompts.brainstormExtractPrompt?.content;
      if (!Pe) {
        ve("error", "The brainstorm card extraction prompt is missing from settings.");
        return;
      }
      const ge = d0(
        be.brainstormContextTemplatePresets?.[be.brainstormContextTemplatePreset]
      );
      if (!ge) {
        ve("warning", "Card extraction is disabled in the brainstorm context template.");
        return;
      }
      pe(!0), P.current = new AbortController();
      try {
        await We(d);
        const Be = d.some((Yn) => Yn.images?.some((fr) => fr.mediaType === "video")), He = Od(d, U.current, Be && q.current), je = [
          ...kn.filter((Yn) => nt.fields[Yn]),
          ...Object.keys(nt.draftFields)
        ], nn = E4(je, _h(nt).length), Vt = await Hb(
          be.profileId,
          [
            ...He,
            { role: ge.role, content: C4(Pe, nt, re) }
          ],
          nn,
          _4,
          be.defaultPromptEngineeringMode,
          Math.max(be.maxResponseToken, x4),
          P.current.signal
        );
        _e({ response: Vt, items: N4(nt, Vt) });
      } catch (Be) {
        Be?.name === "AbortError" ? ve("info", "Extraction was cancelled.") : (console.error("Card extraction failed:", Be), ve("error", `Could not draft a card: ${Be.message}`));
      } finally {
        pe(!1), P.current = null;
      }
    },
    [d, nt, We]
  ), Nt = G.useCallback(
    (re) => {
      if (!fe) return;
      const be = A4(fe.response, re);
      u(qb(nt, be, "global")), _e(null);
    },
    [fe, nt, u]
  ), B = G.useCallback(() => {
    P.current?.abort(), _e(null);
  }, []), W = G.useCallback(async () => {
    if (_) return;
    const re = d.filter((je) => !je.isInitial), Pe = re[re.length - 1]?.role === "user";
    if (!g.trim() && T.length === 0 && !Pe) return;
    if (!g.trim() && T.length === 0 && Pe) {
      const je = d;
      await ke(
        d,
        () => {
        },
        () => h(je)
      );
      return;
    }
    let ge = [];
    if (T.length > 0)
      try {
        ge = await Promise.all(T.map((je) => g4(je)));
        for (let je = 0; je < ge.length; je++)
          U.current.set(ge[je].url, R[je]);
      } catch (je) {
        console.error("Upload failed:", je), ve("error", `Upload failed: ${je.message}`);
        return;
      }
    const Be = {
      id: `bm-${Date.now()}`,
      role: "user",
      content: g.trim(),
      ...ge.length > 0 ? { images: ge } : {}
    }, He = [...d, Be];
    ke(
      He,
      () => {
        h(He), v(""), M([]), L([]);
      },
      () => {
        h(He), a({ ...t, messages: He });
      }
    );
  }, [g, _, d, ke, T, R, t, a]), ne = G.useCallback(async () => {
    if (_ || d.length === 0) return;
    const re = d;
    let be = [...d];
    const Pe = d.length - 1;
    d[Pe].role === "assistant" && (be = d.slice(0, Pe)), await ke(
      be,
      () => h(be),
      () => h(re)
    );
  }, [_, d, ke]), de = (re) => {
    p(re.id), E(re.content), w(re.images ? [...re.images] : []);
  }, Ne = () => {
    p(null), E(""), w([]);
  }, oe = async () => {
    if (!m) return;
    const re = d.findIndex((nn) => nn.id === m);
    if (re === -1) return;
    if (d[re].role === "assistant") {
      const nn = d.map(
        (Vt) => Vt.id === m ? { ...Vt, content: x, images: A.length > 0 ? A : void 0 } : Vt
      );
      h(nn), a({ ...t, messages: nn }), Ne();
      return;
    }
    if (!await h0.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ge = d, Be = d.slice(0, re), He = {
      ...d[re],
      content: x,
      images: A.length > 0 ? A : void 0
    }, je = [...Be, He];
    Ne(), ke(
      je,
      () => h(je),
      () => h(ge)
    );
  }, he = async (re) => {
    const be = d.findIndex((je) => je.id === re);
    if (be === -1) return;
    const ge = !!d[be].isInitial;
    if (!await h0.Popup.show.confirm(
      "Delete Message",
      ge ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let He;
    ge ? He = d.filter((je) => je.isInitial && je.id !== re) : He = d.slice(0, be), h(He), a({ ...t, messages: He }), ve("info", "Message history has been updated.");
  }, Ve = () => {
    C.current?.abort();
  }, Fe = d.filter((re) => re.isInitial), Qe = d.filter((re) => !re.isInitial), jn = Qe.filter((re) => re.role === "assistant").at(-1)?.id, ut = Qe[Qe.length - 1], et = !!(ut && ut.role === "user"), en = mt.getSettings(), Lt = !!d0(
    en.brainstormContextTemplatePresets?.[en.brainstormContextTemplatePreset]
  ), tn = Lt && Qe.some((re) => re.role === "assistant");
  return /* @__PURE__ */ S.jsxs("div", { className: "brainstorm-chat", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: t.name }),
      /* @__PURE__ */ S.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ S.jsx(
          ce,
          {
            onClick: () => un(),
            disabled: !tn || _ || Q,
            title: Lt ? tn ? "Turn this conversation into character card fields" : "Brainstorm a little first — there is nothing to draft from yet" : "Card extraction is disabled in the brainstorm context template",
            children: Q ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
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
      Fe.length > 0 && /* @__PURE__ */ S.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ S.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ S.jsx("div", { className: "initial-messages-content", children: Fe.map(
          (re) => m === re.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ S.jsx(Wt, { value: x, onChange: (be) => E(be.target.value), rows: 5 }),
            A.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "pending-images-preview", children: A.map((be, Pe) => /* @__PURE__ */ S.jsxs("div", { className: "pending-image-item", children: [
              me(be) ? /* @__PURE__ */ S.jsxs("div", { className: "video-thumbnail-wrapper", children: [
                /* @__PURE__ */ S.jsx("video", { src: be.url, muted: !0, preload: "metadata" }),
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-play video-play-icon" })
              ] }) : /* @__PURE__ */ S.jsx("img", { src: be.url, alt: be.name }),
              /* @__PURE__ */ S.jsx(
                ce,
                {
                  className: "remove-image-button danger_button",
                  onClick: () => w((ge) => ge.filter((Be, He) => He !== Pe)),
                  title: "Remove image",
                  children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" })
                }
              )
            ] }, Pe)) }),
            /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ S.jsxs(ce, { onClick: oe, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ S.jsxs(ce, { onClick: Ne, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, re.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper initial-context ${re.role}`, children: [
            /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${re.role} initial`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: re.content }) }),
            !_ && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ S.jsx(
                ce,
                {
                  className: "message-action-button",
                  onClick: () => de(re),
                  title: "Edit Context",
                  children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ S.jsx(
                ce,
                {
                  className: "message-action-button danger_button",
                  onClick: () => he(re.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, re.id)
        ) })
      ] }),
      Qe.map((re) => {
        const be = re.role === "assistant" && re.id === jn;
        return m === re.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ S.jsx(Wt, { value: x, onChange: (ge) => E(ge.target.value), rows: 10 }),
          A.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "pending-images-preview", children: A.map((ge, Be) => /* @__PURE__ */ S.jsxs("div", { className: "pending-image-item", children: [
            me(ge) ? /* @__PURE__ */ S.jsxs("div", { className: "video-thumbnail-wrapper", children: [
              /* @__PURE__ */ S.jsx("video", { src: ge.url, muted: !0, preload: "metadata" }),
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-play video-play-icon" })
            ] }) : /* @__PURE__ */ S.jsx("img", { src: ge.url, alt: ge.name }),
            /* @__PURE__ */ S.jsx(
              ce,
              {
                className: "remove-image-button danger_button",
                onClick: () => w((He) => He.filter((je, nn) => nn !== Be)),
                title: "Remove image",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" })
              }
            )
          ] }, Be)) }),
          /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ S.jsxs(ce, { onClick: oe, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
              " ",
              re.role === "assistant" ? "Save" : "Save & Fork"
            ] }),
            /* @__PURE__ */ S.jsxs(ce, { onClick: Ne, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, re.id) : /* @__PURE__ */ S.jsx("div", { className: `message-bubble-wrapper ${re.role}`, children: /* @__PURE__ */ S.jsxs("div", { className: `message-bubble ${re.role}`, children: [
          !_ && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
            /* @__PURE__ */ S.jsx(
              ce,
              {
                className: "message-action-button",
                onClick: () => de(re),
                title: re.role === "assistant" ? "Edit Message" : "Edit and Fork",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            be && /* @__PURE__ */ S.jsx(
              ce,
              {
                className: "message-action-button",
                onClick: ne,
                title: "Regenerate response",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-right" })
              }
            ),
            /* @__PURE__ */ S.jsx(
              ce,
              {
                className: "message-action-button danger_button",
                onClick: () => he(re.id),
                title: "Delete Message",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          re.role === "assistant" ? /* @__PURE__ */ S.jsx(Zb, { content: re.content }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ S.jsx("div", { className: "message-content", children: re.content }),
            re.images && re.images.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "message-images", children: re.images.map(
              (ge, Be) => me(ge) ? /* @__PURE__ */ S.jsxs(
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
                Be
              ) : /* @__PURE__ */ S.jsx(
                "img",
                {
                  src: ge.url,
                  alt: ge.name,
                  title: ge.name,
                  onClick: () => window.open(ge.url, "_blank")
                },
                Be
              )
            ) })
          ] })
        ] }) }, re.id);
      }),
      _ && /* @__PURE__ */ S.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ S.jsx(ce, { onClick: Ve, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: D })
    ] }),
    R.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "pending-images-preview", children: R.map((re, be) => /* @__PURE__ */ S.jsxs(
      "div",
      {
        className: `pending-image-item ${ae(T[be]) ? "video-thumbnail-wrapper" : ""}`,
        children: [
          ae(T[be]) ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ S.jsx("video", { src: re, muted: !0, preload: "metadata" }),
            /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-play video-play-icon" })
          ] }) : /* @__PURE__ */ S.jsx("img", { src: re, alt: T[be]?.name || "pending" }),
          /* @__PURE__ */ S.jsx(
            ce,
            {
              className: "remove-image-button danger_button",
              onClick: () => X(be),
              title: "Remove image",
              children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" })
            }
          )
        ]
      },
      be
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
        Wt,
        {
          value: g,
          onChange: (re) => v(re.target.value),
          placeholder: "Brainstorm ideas for your character...",
          rows: 3,
          disabled: _ || !!m,
          onKeyDown: (re) => {
            re.key === "Enter" && !re.shiftKey && (re.preventDefault(), W());
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
          disabled: _ || !!m || !g.trim() && T.length === 0 && !et,
          children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane" })
        }
      )
    ] }),
    fe && /* @__PURE__ */ S.jsx(
      Ba,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          b4,
          {
            justification: fe.response.justification,
            items: fe.items,
            isExtracting: Q,
            onApply: Nt,
            onReExtract: (re) => un(re),
            onCancel: B
          }
        ),
        onComplete: B,
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, p0 = SillyTavern.getContext(), O4 = 5, D4 = ({
  contextToSend: t,
  sessionForContext: r,
  onApplyToCard: a,
  isActive: s = !0
}) => {
  const [l, u] = G.useState([]), [f, d] = G.useState(null), [h, g] = G.useState(!0);
  G.useEffect(() => {
    let w = !0;
    return c4().then(({ value: D, recovered: C }) => {
      if (!w) return;
      const T = Array.isArray(D) ? D : [], M = T.some((L) => L.saved === void 0), R = T.map((L) => ({ ...L, saved: L.saved ?? !0 }));
      u(R), M && f0(R), C && ve("warning", "Some saved brainstorm sessions were invalid and have been reset.");
    }).catch((D) => {
      console.error("Failed to load brainstorm sessions:", D), ve("warning", "Saved brainstorm sessions could not be loaded.");
    }).finally(() => {
      w && g(!1);
    }), () => {
      w = !1;
    };
  }, []);
  const v = G.useMemo(() => l.filter((w) => w.saved).sort((w, D) => new Date(D.createdAt).getTime() - new Date(w.createdAt).getTime()), [l]), _ = G.useMemo(() => l.filter((w) => !w.saved).sort((w, D) => new Date(D.createdAt).getTime() - new Date(w.createdAt).getTime()), [l]), b = (w) => {
    u(w), f0(w).then((D) => {
      D.persisted || (console.warn("Failed to save brainstorm sessions:", D.error), ve("warning", "Brainstorm session history could not be saved. Browser storage may be full."));
    });
  }, m = async () => {
    const w = `Brainstorm - ${(/* @__PURE__ */ new Date()).toLocaleString()}`;
    try {
      const D = mt.getSettings();
      if (!D.profileId) {
        ve("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      const C = {
        id: `bs-${Date.now()}`,
        name: w,
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
      }, T = await Qb(
        r.fields,
        r.draftFields,
        D.brainstormContextTemplatePreset,
        t,
        r
      );
      C.messages = T;
      let M = [...l];
      const R = M.filter((L) => !L.saved).sort((L, Y) => new Date(L.createdAt).getTime() - new Date(Y.createdAt).getTime());
      if (R.length >= O4) {
        const L = R[0];
        M = M.filter((Y) => Y.id !== L.id), f?.id === L.id && d(null);
      }
      M.push(C), b(M), d(C);
    } catch (D) {
      console.error("Failed to create brainstorm session:", D), ve("error", `Failed to create session: ${D.message}`);
    }
  }, p = (w) => {
    d(w);
  }, x = async (w) => {
    if (await p0.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const C = l.filter((T) => T.id !== w);
      b(C), f?.id === w && d(null);
    }
  }, E = async (w) => {
    const D = l.find((M) => M.id === w);
    if (!D) return;
    const C = await p0.Popup.show.input("Save Session", D.name);
    if (!C) return;
    const T = l.map((M) => M.id === w ? { ...M, saved: !0, name: C } : M);
    b(T), f?.id === w && d({ ...D, saved: !0, name: C });
  }, A = (w) => {
    const D = l.findIndex((T) => T.id === w.id), C = [...l];
    D !== -1 ? C[D] = w : C.push(w), b(C), d(w);
  };
  return f ? /* @__PURE__ */ S.jsx(
    T4,
    {
      session: f,
      isActive: s,
      onBack: () => d(null),
      onSessionUpdate: A,
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
    /* @__PURE__ */ S.jsx("div", { className: "session-list", children: h ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : v.length === 0 && _.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      _.length > 0 && /* @__PURE__ */ S.jsxs("div", { className: "session-section", children: [
        /* @__PURE__ */ S.jsxs("h4", { className: "session-section-header", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-clock" }),
          " Workspace"
        ] }),
        _.map((w) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => p(w), children: [
            /* @__PURE__ */ S.jsx("span", { className: "session-name", children: w.name }),
            /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(w.createdAt).toLocaleString() })
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "session-item-actions", children: [
            /* @__PURE__ */ S.jsx(ce, { className: "menu_button", onClick: () => E(w.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-floppy-disk" }) }),
            /* @__PURE__ */ S.jsx(ce, { className: "danger_button", onClick: () => x(w.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
          ] })
        ] }, w.id))
      ] }),
      v.length > 0 && /* @__PURE__ */ S.jsxs("div", { className: "session-section", children: [
        /* @__PURE__ */ S.jsxs("h4", { className: "session-section-header", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-bookmark" }),
          " Saved"
        ] }),
        v.map((w) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => p(w), children: [
            /* @__PURE__ */ S.jsx("span", { className: "session-name", children: w.name }),
            /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(w.createdAt).toLocaleString() })
          ] }),
          /* @__PURE__ */ S.jsx(ce, { className: "danger_button", onClick: () => x(w.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
        ] }, w.id))
      ] })
    ] }) })
  ] });
};
function M4(t, r) {
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
function k4(t, r = []) {
  const a = new Set(t), s = r.filter((l) => l && !a.has(l));
  return [
    ...t.map((l) => ({ value: l, label: l })),
    ...s.map((l) => ({ value: l, label: `${l} (missing)` }))
  ];
}
const qn = SillyTavern.getContext(), Dd = () => ({
  selectedCharacterIndexes: Kt ? [String(Kt)] : [],
  selectedWorldNames: [],
  fields: kn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Dr[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), j4 = {
  name: { label: Dr.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Dr.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Dr.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Dr.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Dr.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Dr.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, R4 = () => {
  const t = db(), r = mt.getSettings(), [a, s] = G.useState(Dd()), [l, u] = G.useState([]), [f, d] = G.useState(!0), [h, g] = G.useState("core"), [v, _] = G.useState(!1), [b, m] = G.useState([]), [p, x] = G.useState([]), [E, A] = G.useState(null), [w, D] = G.useState(null), [C, T] = G.useState(!1), [M, R] = G.useState(null);
  G.useEffect(() => {
    (async () => {
      d(!0), m(qn.characters), x(fv);
      const W = (await s4()).value ?? {}, ne = Dd();
      if (W.fields && (ne.fields = { ...ne.fields, ...W.fields }), W.draftFields && (ne.draftFields = W.draftFields), W.selectedCharacterIndexes && (ne.selectedCharacterIndexes = W.selectedCharacterIndexes), W.selectedWorldNames && (ne.selectedWorldNames = W.selectedWorldNames), W.lastLoadedCharacterId) {
        ne.lastLoadedCharacterId = W.lastLoadedCharacterId;
        const de = qn.characters.find((Ne) => Ne.avatar === W.lastLoadedCharacterId);
        de && A(de);
      }
      s(ne), d(!1);
    })();
  }, []), G.useEffect(() => {
    f || o4(a).then((B) => {
      B.persisted || (console.warn("Failed to save Character Creator session:", B.error), ve("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [a, f]);
  const L = (B, W) => {
    mt.getSettings()[B] = W, mt.saveSettings(), t();
  }, Y = (B, W) => {
    mt.getSettings().contextToSend[B] = W, mt.saveSettings(), t();
  }, U = G.useCallback(
    (B, W, ne, de) => {
      s((Ne) => {
        const oe = de ? "draftFields" : "fields", he = { ...Ne[oe] };
        return he[B] || (he[B] = { value: "", prompt: "", label: B }), he[B][ne] = W, { ...Ne, [oe]: he };
      });
    },
    []
  ), q = G.useMemo(
    () => Object.keys(a.fields).filter((B) => B.startsWith("alternate_greetings_")).sort((B, W) => parseInt(B.split("_")[2]) - parseInt(W.split("_")[2])).map((B) => a.fields[B]),
    [a.fields]
  ), Q = G.useCallback((B) => {
    s((W) => {
      const ne = { ...W.fields };
      return Object.keys(ne).forEach((de) => {
        de.startsWith("alternate_greetings_") && delete ne[de];
      }), B.forEach((de, Ne) => {
        const oe = `alternate_greetings_${Ne + 1}`;
        ne[oe] = { ...de, label: `Alternate_Greeting_${Ne + 1}` };
      }), { ...W, fields: ne };
    });
  }, []), pe = G.useCallback(
    (B, W) => {
      U(B, "", "value", W);
    },
    [U]
  ), fe = G.useCallback(
    async (B) => {
      await qn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${a.draftFields[B].label}"?`
      ) && s((ne) => {
        const de = { ...ne.draftFields };
        return delete de[B], { ...ne, draftFields: de };
      });
    },
    [a.draftFields]
  ), _e = G.useCallback(async () => {
    const B = await qn.Popup.show.input("Enter Draft Field Name", "");
    if (!B?.trim()) return;
    const W = Nu(B.trim());
    if (!W) return ve("error", "Invalid field name.");
    if (a.draftFields[W] || kn.includes(W))
      return ve("warning", "Field name already exists.");
    s((ne) => ({
      ...ne,
      draftFields: { ...ne.draftFields, [W]: { value: "", prompt: "", label: B } }
    })), g("draft");
  }, [a.draftFields]), P = (B) => {
    R({ type: "field", fieldId: B }), T(!0);
  }, ae = () => {
    R({ type: "global" }), T(!0);
  }, me = (B) => {
    s((W) => ({
      ...W,
      fields: { ...W.fields, ...B.fields },
      draftFields: { ...W.draftFields, ...B.draftFields }
    })), ve("success", "Changes from revise session applied."), T(!1);
  }, Le = G.useCallback((B) => {
    s((W) => ({
      ...W,
      fields: { ...W.fields, ...B.fields },
      draftFields: { ...W.draftFields, ...B.draftFields }
    })), g("core"), ve("success", "Card fields updated from the brainstorm conversation.");
  }, []), j = G.useCallback(
    async (B, W) => {
      if (!r.profileId) return ve("warning", "Please select a connection profile.");
      u((ne) => [...ne, B]);
      try {
        const ne = qn.extensionSettings.connectionManager?.profiles?.find(
          (ut) => ut.id === r.profileId
        );
        if (!ne) throw new Error("Connection profile not found.");
        const de = {
          presetName: ne?.preset,
          contextName: ne?.context,
          instructName: ne?.instruct,
          targetCharacterId: Kt,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!er
        }, Ne = r.contextToSend.messages;
        switch (Ne.type) {
          case "none":
            de.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            de.messageIndexesBetween = { start: 0, end: Ne.first ?? 10 };
            break;
          case "last":
            const ut = qn.chat?.length ?? 0, et = Ne.last ?? 10;
            de.messageIndexesBetween = {
              end: Math.max(0, ut - 1),
              start: Math.max(0, ut - et)
            };
            break;
          case "range":
            de.messageIndexesBetween = {
              start: Ne.range?.start ?? 0,
              end: Ne.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        Kt === void 0 && !er && (de.messageIndexesBetween = { start: -1, end: -1 });
        const oe = {};
        await Promise.all(
          fv.filter((ut) => !oe[ut]).map(async (ut) => {
            const et = await qn.loadWorldInfo(ut);
            et && (oe[ut] = Gb(et, { includeDisabled: !0 }));
          })
        );
        const he = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete he.stDescription, (!r.contextToSend.charCard || a.selectedCharacterIndexes.length === 0) && delete he.charDefinitions, (!r.contextToSend.worldInfo || a.selectedWorldNames.length === 0) && delete he.lorebookDefinitions, r.contextToSend.existingFields || delete he.existingFieldDefinitions, r.contextToSend.persona || delete he.personaDescription, delete he.worldInfoCharDefinition;
        const Ve = r.mainContextTemplatePresets[r.mainContextTemplatePreset] ?? r.mainContextTemplatePresets.default;
        if (!Ve) throw new Error("Main context template preset not found.");
        const Fe = await aw({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset]?.content ?? "",
          buildPromptOptions: de,
          continueFrom: W,
          session: a,
          allCharacters: b,
          entriesGroupByWorldName: oe,
          promptSettings: he,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`]?.content ?? "" },
          mainContextList: Ve.prompts.filter((ut) => ut.enabled),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: B,
          outputFormat: r.outputFormat
        }), Qe = B.startsWith("alternate_greetings_"), jn = !Qe && !kn.includes(B);
        if (Qe) {
          const ut = parseInt(B.split("_")[2]) - 1;
          q[ut] && Q(q.map((et, en) => en === ut ? { ...et, value: Fe } : et));
        } else
          U(B, Fe, "value", jn);
      } catch (ne) {
        console.error(ne), ve("error", ne.message || String(ne));
      } finally {
        u((ne) => ne.filter((de) => de !== B));
      }
    },
    [a, r, b, q, U, Q]
  ), J = G.useCallback(async () => {
    await qn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(Dd()), A(null));
  }, []), ie = G.useCallback(
    (B) => {
      if (!E) return ve("warning", "Please load a character to compare against.");
      let W, ne, de;
      typeof B == "number" ? (W = q[B]?.value ?? "", ne = E.data?.alternate_greetings?.[B] ?? "", de = `Alternate_Greeting_${B + 1}`) : (W = a.fields[B]?.value ?? "", ne = E[B] ?? E.data?.[B] ?? "", de = Dr[B]), D({ original: ne, current: W, fieldName: de });
    },
    [E, a.fields, q]
  ), se = G.useCallback(
    async (B) => {
      const W = b[parseInt(B)];
      if (!W || kn.some((oe) => a.fields[oe].value.trim() !== "") && !await qn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const de = { ...a.fields };
      kn.forEach((oe) => {
        de[oe] = { value: W[oe] ?? W.data?.[oe] ?? "", prompt: "", label: Dr[oe] };
      });
      const Ne = (W.data?.alternate_greetings ?? []).map((oe) => ({ value: oe, prompt: "" }));
      A(W), s((oe) => ({ ...oe, fields: de, lastLoadedCharacterId: W.avatar })), Q(Ne);
    },
    [b, a.fields, Q]
  ), le = G.useCallback(async () => {
    if (er) {
      ve("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (Kt === void 0) {
      ve("warning", "No character chat is currently open.");
      return;
    }
    await se(String(Kt));
  }, [se]), Re = () => q.map((B) => B.value).filter((B) => B.trim() !== ""), X = async () => {
    if (!a.fields.name.value) return ve("warning", "Please provide a character name.");
    if (!await qn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const W = {
      name: a.fields.name.value,
      description: a.fields.description.value,
      personality: a.fields.personality.value,
      scenario: a.fields.scenario.value,
      first_mes: a.fields.first_mes.value,
      mes_example: a.fields.mes_example.value,
      data: {
        alternate_greetings: Re(),
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
      await q2(W, !0);
    } catch (ne) {
      ve("error", `Failed to create character: ${ne.message}`);
    }
  }, xe = async () => {
    if (!E) return ve("warning", "Please load a character to override.");
    if (!await qn.Popup.show.confirm(
      "Override Character",
      `Override "${E.name}"? This cannot be undone.`
    )) return;
    const W = {
      ...E,
      name: a.fields.name.value,
      description: a.fields.description.value,
      personality: a.fields.personality.value,
      scenario: a.fields.scenario.value,
      first_mes: a.fields.first_mes.value,
      mes_example: a.fields.mes_example.value,
      data: {
        ...E.data,
        alternate_greetings: Re(),
        name: a.fields.name.value,
        description: a.fields.description.value,
        first_mes: a.fields.first_mes.value,
        mes_example: a.fields.mes_example.value,
        personality: a.fields.personality.value,
        scenario: a.fields.scenario.value
      }
    };
    try {
      await Z2(W, !0), ve("success", `Character "${W.name}" updated!`);
    } catch (ne) {
      ve("error", `Failed to override character: ${ne.message}`);
    }
  }, Ee = () => {
    const B = JSON.stringify({ draftFields: a.draftFields, version: ub }, null, 2), W = new Blob([B], { type: "application/json" }), ne = document.createElement("a");
    ne.href = URL.createObjectURL(W), ne.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ne.click(), URL.revokeObjectURL(ne.href);
  }, $e = () => {
    const B = document.createElement("input");
    B.type = "file", B.accept = ".json", B.onchange = async () => {
      const W = B.files?.[0];
      if (W)
        try {
          const ne = await W.text(), de = JSON.parse(ne);
          if (!de.draftFields) throw new Error("Invalid file format.");
          (Object.keys(a.draftFields).length > 0 ? await qn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((oe) => ({ ...oe, draftFields: de.draftFields })), ve("success", "Draft fields imported."));
        } catch (ne) {
          ve("error", `Import failed: ${ne.message}`);
        }
    }, B.click();
  }, We = G.useMemo(
    () => b.map((B, W) => ({ value: String(W), label: B.name })),
    [b]
  ), ke = G.useMemo(
    () => p.map((B) => ({ value: B, label: B })),
    [p]
  ), nt = G.useMemo(
    () => k4(p, a.selectedWorldNames),
    [p, a.selectedWorldNames]
  ), un = G.useMemo(
    () => Object.keys(r.promptPresets).map((B) => ({ value: B, label: B })),
    [r.promptPresets]
  ), Nt = G.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((B) => ({ value: B, label: B })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ S.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ S.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ S.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ S.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ S.jsx(
            fb,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (B) => L("profileId", B?.id ?? "")
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
                  onChange: (B) => Y("stDescription", B.target.checked)
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
                  onChange: (B) => Y("persona", B.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (Kt !== void 0 || er) && /* @__PURE__ */ S.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ S.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ S.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (B) => Y("messages", {
                    ...r.contextToSend.messages,
                    type: B.target.value
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
                    onChange: (B) => Y("messages", {
                      ...r.contextToSend.messages,
                      first: parseInt(B.target.value) || 10
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
                    onChange: (B) => Y("messages", {
                      ...r.contextToSend.messages,
                      last: parseInt(B.target.value) || 10
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
                    onChange: (B) => Y("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: parseInt(B.target.value) || 0
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
                    onChange: (B) => Y("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: parseInt(B.target.value) || 10 }
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
                  onChange: (B) => Y("charCard", B.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ S.jsx(
              ou,
              {
                items: We,
                value: a.selectedCharacterIndexes,
                onChange: (B) => s((W) => ({ ...W, selectedCharacterIndexes: B })),
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
                  onChange: (B) => Y("worldInfo", B.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ S.jsx(
              ou,
              {
                items: nt,
                value: a.selectedWorldNames,
                onChange: (B) => s((W) => ({ ...W, selectedWorldNames: B })),
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
                  onChange: (B) => Y("existingFields", B.target.checked)
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
                  onChange: (B) => Y("dontSendOtherGreetings", B.target.checked)
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
              Du,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: Nt,
                value: r.mainContextTemplatePreset,
                onChange: (B) => L("mainContextTemplatePreset", B ?? "default")
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
                onChange: (B) => L("maxContextType", B.target.value),
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
              onChange: (B) => L("maxContextValue", parseInt(B.target.value) || 16384)
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
                onChange: (B) => L("maxResponseToken", parseInt(B.target.value) || 1024)
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
                onChange: (B) => L("thinkingLevel", B.target.value),
                children: iw.map((B) => /* @__PURE__ */ S.jsx("option", { value: B.value, children: B.label }, B.value))
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
                onChange: (B) => L("outputFormat", B.target.value),
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
            Du,
            {
              label: "Prompt Preset",
              items: un,
              value: r.promptPreset,
              onChange: (B) => L("promptPreset", B ?? "default"),
              onItemsChange: (B) => L(
                "promptPresets",
                B.reduce(
                  (W, ne) => ({ ...W, [ne.value]: r.promptPresets[ne.value] ?? { content: "" } }),
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
            Wt,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (B) => L("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: B.target.value }
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
              ou,
              {
                items: We,
                value: E ? [String(b.indexOf(E))] : [],
                onChange: (B) => se(B[0]),
                multiple: !1,
                enableSearch: !0,
                placeholder: "Load Character..."
              }
            ) }),
            /* @__PURE__ */ S.jsxs(
              ce,
              {
                onClick: le,
                disabled: !!er || Kt === void 0,
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
            /* @__PURE__ */ S.jsxs(ce, { onClick: xe, disabled: !E, title: "Override loaded character", children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pen-to-square" }),
              " Override"
            ] }),
            r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ S.jsx(
              ou,
              {
                items: ke,
                placeholder: "Save as WI Entry",
                closeOnSelect: !0,
                value: [],
                onChange: (B) => {
                },
                onBeforeSelection: async (B, W) => {
                  if (!a.fields.name.value)
                    return ve("warning", "Please enter a name first."), !1;
                  const ne = W[0], Ne = Jt.compile(r.prompts.worldInfoCharDefinition.content)({
                    character: M4(a.fields, q)
                  }), oe = {
                    uid: -1,
                    key: [a.fields.name.value],
                    content: Ne,
                    comment: a.fields.name.value,
                    disable: !1,
                    keysecondary: []
                  };
                  try {
                    await Ex({ entry: oe, selectedWorldName: ne, operation: "add" }), ve("success", `Entry added to ${ne}.`);
                  } catch (he) {
                    ve("error", `Failed to add WI Entry: ${he.message}`);
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
              className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ S.jsx(
            ce,
            {
              onClick: () => g("draft"),
              className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ S.jsx(
            ce,
            {
              onClick: () => {
                _(!0), g("brainstorm");
              },
              className: `menu_button tab-button ${h === "brainstorm" ? "active" : ""}`,
              children: "Brainstorm"
            }
          ),
          /* @__PURE__ */ S.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ S.jsxs(ce, { onClick: _e, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ S.jsx(ce, { onClick: Ee, children: "Export" }),
            /* @__PURE__ */ S.jsx(ce, { onClick: $e, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "tab-content-area", children: [
          h === "core" && /* @__PURE__ */ S.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ S.jsx("h3", { children: "Core Character Fields" }),
            kn.map((B) => {
              const W = j4[B];
              return W ? /* @__PURE__ */ S.jsx(
                Iy,
                {
                  fieldId: B,
                  label: W.label,
                  value: a.fields[B]?.value ?? "",
                  prompt: a.fields[B]?.prompt ?? "",
                  large: W.large,
                  rows: W.rows,
                  promptEnabled: W.promptEnabled,
                  isGenerating: l.includes(B),
                  onValueChange: (ne, de) => U(ne, de, "value", !1),
                  onPromptChange: (ne, de) => U(ne, de, "prompt", !1),
                  onGenerate: j,
                  onContinue: (ne) => j(ne, a.fields[ne].value),
                  onClear: (ne) => pe(ne, !1),
                  onCompare: ie,
                  onOpenReviseSessions: P
                },
                B
              ) : null;
            }),
            /* @__PURE__ */ S.jsx(
              bw,
              {
                greetings: q,
                onGreetingsChange: Q,
                isGenerating: l.some((B) => B.startsWith("alternate_greetings_")),
                onGenerate: (B) => j(`alternate_greetings_${B + 1}`),
                onContinue: (B) => j(`alternate_greetings_${B + 1}`, q[B].value),
                onCompare: ie
              }
            )
          ] }),
          h === "draft" && /* @__PURE__ */ S.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ S.jsx("h3", { children: "Draft Fields" }),
            Object.entries(a.draftFields).map(([B, W]) => /* @__PURE__ */ S.jsx(
              Iy,
              {
                fieldId: B,
                label: W.label,
                value: W.value,
                prompt: W.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: l.includes(B),
                onValueChange: (ne, de) => U(ne, de, "value", !0),
                onPromptChange: (ne, de) => U(ne, de, "prompt", !0),
                onGenerate: j,
                onContinue: (ne) => j(ne, a.draftFields[ne].value),
                onClear: (ne) => pe(ne, !0),
                onDelete: fe
              },
              B
            ))
          ] }),
          v && /* @__PURE__ */ S.jsx("div", { className: `card tab-content ${h === "brainstorm" ? "active" : ""}`, children: /* @__PURE__ */ S.jsx(
            D4,
            {
              isActive: h === "brainstorm",
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
    w && /* @__PURE__ */ S.jsx(
      Ba,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          Iw,
          {
            originalContent: w.original,
            newContent: w.current,
            fieldName: w.fieldName
          }
        ),
        onComplete: () => D(null),
        options: { wide: !0 }
      }
    ),
    C && M && /* @__PURE__ */ S.jsx(
      Ba,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          f4,
          {
            target: M,
            onClose: () => T(!1),
            onApply: me,
            initialState: { fields: a.fields, draftFields: a.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: a.selectedCharacterIndexes,
              selectedWorldNames: a.selectedWorldNames
            }
          }
        ),
        onComplete: () => T(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, z4 = () => {
  const [t, r] = G.useState(!1), a = G.useCallback(() => r(!0), []), s = G.useCallback(() => r(!1), []);
  return G.useEffect(() => (window.openCharacterCreatorPopup = a, () => {
    window.openCharacterCreatorPopup === a && delete window.openCharacterCreatorPopup;
  }), [a]), t ? /* @__PURE__ */ S.jsx(
    Ba,
    {
      content: /* @__PURE__ */ S.jsx(R4, {}),
      type: vn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, Kb = SillyTavern.getContext(), m0 = "charCreator-icon";
async function L4() {
  const t = document.querySelector("#extensions_settings");
  if (!t) {
    console.error(`[${Gn}] #extensions_settings not found; settings panel not rendered.`);
    return;
  }
  const r = await Kb.renderExtensionTemplateAsync(
    `third-party/${Gn}`,
    "templates/settings"
  );
  t.insertAdjacentHTML("beforeend", r);
  const a = document.createElement("div"), s = document.querySelector(".charCreator_settings .inline-drawer-content");
  s && (s.prepend(a), Cv.createRoot(a).render(
    /* @__PURE__ */ S.jsx(yu.StrictMode, { children: /* @__PURE__ */ S.jsx(vw, {}) })
  ));
  const l = `<div class="menu_button fa-solid fa-user-astronaut interactable ${m0}" title="Character Creator"></div>`, u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], f = document.createElement("div");
  document.body.appendChild(f), Cv.createRoot(f).render(
    /* @__PURE__ */ S.jsx(yu.StrictMode, { children: /* @__PURE__ */ S.jsx(z4, {}) })
  ), u.forEach((h) => {
    if (!h || h.querySelector(`.${m0}`)) return;
    const g = document.createElement("div");
    g.innerHTML = l.trim();
    const v = g.firstChild;
    v && (h.prepend(v), v.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function I4() {
  return !!Kb.ConnectionManagerRequestService;
}
I4() ? uw().then(() => L4()).catch((t) => {
  console.error(`[${Gn}] Initialization failed:`, t), ve("error", `[${Gn}] Initialization failed: ${t?.message ?? t}`);
}) : ve("error", `[${Gn}] Make sure ST is updated.`);
export {
  L4 as init
};
