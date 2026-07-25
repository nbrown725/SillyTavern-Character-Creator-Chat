import { renderStoryString as i2, persona_description_positions as ov } from "../../../../power-user.js";
import { parseMesExamples as s2, baseChatReplace as o2, chat_metadata as Ps, getMaxContextSize as l2, name1 as xr, name2 as Kr, this_chid as Ft, extension_prompt_types as wa, depth_prompt_role_default as u2, depth_prompt_depth_default as c2 } from "../../../../../script.js";
import { createWorldInfoEntry as f2, world_info_include_names as d2, wi_anchor_position as h2, world_names as lv } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as p2, formatInstructModeSystemPrompt as m2 } from "../../../../instruct-mode.js";
import { appendFileContent as g2 } from "../../../../chats.js";
import { setOpenAIMessages as v2, setOpenAIMessageExamples as y2, formatWorldInfo as b2, getPromptPosition as _2, getPromptRole as S2, prepareOpenAIMessages as x2 } from "../../../../openai.js";
import { metadata_keys as Is } from "../../../../authors-note.js";
import { getGroupDepthPrompts as E2, selected_group as Zn } from "../../../../group-chats.js";
import { getRegexedString as C2, regex_placement as uv } from "../../../regex/engine.js";
import { removeFromArray as cv, runAfterAnimation as w2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ai, fixToastrForDialogs as $f } from "../../../../popup.js";
import fv from "../../../../../lib/dialog-polyfill.esm.js";
function p0(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Qf = { exports: {} }, Bs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dv;
function A2() {
  if (dv) return Bs;
  dv = 1;
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
  return Bs.Fragment = r, Bs.jsx = i, Bs.jsxs = i, Bs;
}
var hv;
function N2() {
  return hv || (hv = 1, Qf.exports = A2()), Qf.exports;
}
var S = N2(), Kf = { exports: {} }, Le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pv;
function T2() {
  if (pv) return Le;
  pv = 1;
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
  }, d = Object.assign, x = {};
  function C(R, ee, oe) {
    this.props = R, this.context = ee, this.refs = x, this.updater = oe || v;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(R, ee) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, ee, "setState");
  }, C.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function N() {
  }
  N.prototype = C.prototype;
  function A(R, ee, oe) {
    this.props = R, this.context = ee, this.refs = x, this.updater = oe || v;
  }
  var D = A.prototype = new N();
  D.constructor = A, d(D, C.prototype), D.isPureReactComponent = !0;
  var E = Array.isArray, T = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function k(R, ee, oe, ue, le, ze) {
    return oe = ze.ref, {
      $$typeof: t,
      type: R,
      key: ee,
      ref: oe !== void 0 ? oe : null,
      props: ze
    };
  }
  function I(R, ee) {
    return k(
      R.type,
      ee,
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
    var ee = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(oe) {
      return ee[oe];
    });
  }
  var V = /\/+/g;
  function Q(R, ee) {
    return typeof R == "object" && R !== null && R.key != null ? P("" + R.key) : ee.toString(36);
  }
  function de() {
  }
  function me(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(de, de) : (R.status = "pending", R.then(
          function(ee) {
            R.status === "pending" && (R.status = "fulfilled", R.value = ee);
          },
          function(ee) {
            R.status === "pending" && (R.status = "rejected", R.reason = ee);
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
  function Se(R, ee, oe, ue, le) {
    var ze = typeof R;
    (ze === "undefined" || ze === "boolean") && (R = null);
    var $ = !1;
    if (R === null) $ = !0;
    else
      switch (ze) {
        case "bigint":
        case "string":
        case "number":
          $ = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case t:
            case r:
              $ = !0;
              break;
            case y:
              return $ = R._init, Se(
                $(R._payload),
                ee,
                oe,
                ue,
                le
              );
          }
      }
    if ($)
      return le = le(R), $ = ue === "" ? "." + Q(R, 0) : ue, E(le) ? (oe = "", $ != null && (oe = $.replace(V, "$&/") + "/"), Se(le, ee, oe, "", function(Fe) {
        return Fe;
      })) : le != null && (X(le) && (le = I(
        le,
        oe + (le.key == null || R && R.key === le.key ? "" : ("" + le.key).replace(
          V,
          "$&/"
        ) + "/") + $
      )), ee.push(le)), 1;
    $ = 0;
    var Ce = ue === "" ? "." : ue + ":";
    if (E(R))
      for (var xe = 0; xe < R.length; xe++)
        ue = R[xe], ze = Ce + Q(ue, xe), $ += Se(
          ue,
          ee,
          oe,
          ze,
          le
        );
    else if (xe = b(R), typeof xe == "function")
      for (R = xe.call(R), xe = 0; !(ue = R.next()).done; )
        ue = ue.value, ze = Ce + Q(ue, xe++), $ += Se(
          ue,
          ee,
          oe,
          ze,
          le
        );
    else if (ze === "object") {
      if (typeof R.then == "function")
        return Se(
          me(R),
          ee,
          oe,
          ue,
          le
        );
      throw ee = String(R), Error(
        "Objects are not valid as a React child (found: " + (ee === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : ee) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return $;
  }
  function B(R, ee, oe) {
    if (R == null) return R;
    var ue = [], le = 0;
    return Se(R, ue, "", "", function(ze) {
      return ee.call(oe, ze, le++);
    }), ue;
  }
  function ae(R) {
    if (R._status === -1) {
      var ee = R._result;
      ee = ee(), ee.then(
        function(oe) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = oe);
        },
        function(oe) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = oe);
        }
      ), R._status === -1 && (R._status = 0, R._result = ee);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var ge = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var ee = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(ee)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  };
  function Te() {
  }
  return Le.Children = {
    map: B,
    forEach: function(R, ee, oe) {
      B(
        R,
        function() {
          ee.apply(this, arguments);
        },
        oe
      );
    },
    count: function(R) {
      var ee = 0;
      return B(R, function() {
        ee++;
      }), ee;
    },
    toArray: function(R) {
      return B(R, function(ee) {
        return ee;
      }) || [];
    },
    only: function(R) {
      if (!X(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  }, Le.Component = C, Le.Fragment = i, Le.Profiler = l, Le.PureComponent = A, Le.StrictMode = s, Le.Suspense = h, Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, Le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return T.H.useMemoCache(R);
    }
  }, Le.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, Le.cloneElement = function(R, ee, oe) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var ue = d({}, R.props), le = R.key, ze = void 0;
    if (ee != null)
      for ($ in ee.ref !== void 0 && (ze = void 0), ee.key !== void 0 && (le = "" + ee.key), ee)
        !M.call(ee, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && ee.ref === void 0 || (ue[$] = ee[$]);
    var $ = arguments.length - 2;
    if ($ === 1) ue.children = oe;
    else if (1 < $) {
      for (var Ce = Array($), xe = 0; xe < $; xe++)
        Ce[xe] = arguments[xe + 2];
      ue.children = Ce;
    }
    return k(R.type, le, void 0, void 0, ze, ue);
  }, Le.createContext = function(R) {
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
  }, Le.createElement = function(R, ee, oe) {
    var ue, le = {}, ze = null;
    if (ee != null)
      for (ue in ee.key !== void 0 && (ze = "" + ee.key), ee)
        M.call(ee, ue) && ue !== "key" && ue !== "__self" && ue !== "__source" && (le[ue] = ee[ue]);
    var $ = arguments.length - 2;
    if ($ === 1) le.children = oe;
    else if (1 < $) {
      for (var Ce = Array($), xe = 0; xe < $; xe++)
        Ce[xe] = arguments[xe + 2];
      le.children = Ce;
    }
    if (R && R.defaultProps)
      for (ue in $ = R.defaultProps, $)
        le[ue] === void 0 && (le[ue] = $[ue]);
    return k(R, ze, void 0, void 0, null, le);
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(R) {
    return { $$typeof: p, render: R };
  }, Le.isValidElement = X, Le.lazy = function(R) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: R },
      _init: ae
    };
  }, Le.memo = function(R, ee) {
    return {
      $$typeof: m,
      type: R,
      compare: ee === void 0 ? null : ee
    };
  }, Le.startTransition = function(R) {
    var ee = T.T, oe = {};
    T.T = oe;
    try {
      var ue = R(), le = T.S;
      le !== null && le(oe, ue), typeof ue == "object" && ue !== null && typeof ue.then == "function" && ue.then(Te, ge);
    } catch (ze) {
      ge(ze);
    } finally {
      T.T = ee;
    }
  }, Le.unstable_useCacheRefresh = function() {
    return T.H.useCacheRefresh();
  }, Le.use = function(R) {
    return T.H.use(R);
  }, Le.useActionState = function(R, ee, oe) {
    return T.H.useActionState(R, ee, oe);
  }, Le.useCallback = function(R, ee) {
    return T.H.useCallback(R, ee);
  }, Le.useContext = function(R) {
    return T.H.useContext(R);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(R, ee) {
    return T.H.useDeferredValue(R, ee);
  }, Le.useEffect = function(R, ee, oe) {
    var ue = T.H;
    if (typeof oe == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return ue.useEffect(R, ee);
  }, Le.useId = function() {
    return T.H.useId();
  }, Le.useImperativeHandle = function(R, ee, oe) {
    return T.H.useImperativeHandle(R, ee, oe);
  }, Le.useInsertionEffect = function(R, ee) {
    return T.H.useInsertionEffect(R, ee);
  }, Le.useLayoutEffect = function(R, ee) {
    return T.H.useLayoutEffect(R, ee);
  }, Le.useMemo = function(R, ee) {
    return T.H.useMemo(R, ee);
  }, Le.useOptimistic = function(R, ee) {
    return T.H.useOptimistic(R, ee);
  }, Le.useReducer = function(R, ee, oe) {
    return T.H.useReducer(R, ee, oe);
  }, Le.useRef = function(R) {
    return T.H.useRef(R);
  }, Le.useState = function(R) {
    return T.H.useState(R);
  }, Le.useSyncExternalStore = function(R, ee, oe) {
    return T.H.useSyncExternalStore(
      R,
      ee,
      oe
    );
  }, Le.useTransition = function() {
    return T.H.useTransition();
  }, Le.version = "19.1.1", Le;
}
var mv;
function Jd() {
  return mv || (mv = 1, Kf.exports = T2()), Kf.exports;
}
var Y = Jd();
const pu = /* @__PURE__ */ p0(Y);
var Jf = { exports: {} }, Us = {}, Wf = { exports: {} }, ed = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gv;
function O2() {
  return gv || (gv = 1, (function(t) {
    function r(B, ae) {
      var ge = B.length;
      B.push(ae);
      e: for (; 0 < ge; ) {
        var Te = ge - 1 >>> 1, R = B[Te];
        if (0 < l(R, ae))
          B[Te] = ae, B[ge] = R, ge = Te;
        else break e;
      }
    }
    function i(B) {
      return B.length === 0 ? null : B[0];
    }
    function s(B) {
      if (B.length === 0) return null;
      var ae = B[0], ge = B.pop();
      if (ge !== ae) {
        B[0] = ge;
        e: for (var Te = 0, R = B.length, ee = R >>> 1; Te < ee; ) {
          var oe = 2 * (Te + 1) - 1, ue = B[oe], le = oe + 1, ze = B[le];
          if (0 > l(ue, ge))
            le < R && 0 > l(ze, ue) ? (B[Te] = ze, B[le] = ge, Te = le) : (B[Te] = ue, B[oe] = ge, Te = oe);
          else if (le < R && 0 > l(ze, ge))
            B[Te] = ze, B[le] = ge, Te = le;
          else break e;
        }
      }
      return ae;
    }
    function l(B, ae) {
      var ge = B.sortIndex - ae.sortIndex;
      return ge !== 0 ? ge : B.id - ae.id;
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
    var h = [], m = [], y = 1, _ = null, b = 3, v = !1, d = !1, x = !1, C = !1, N = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function E(B) {
      for (var ae = i(m); ae !== null; ) {
        if (ae.callback === null) s(m);
        else if (ae.startTime <= B)
          s(m), ae.sortIndex = ae.expirationTime, r(h, ae);
        else break;
        ae = i(m);
      }
    }
    function T(B) {
      if (x = !1, E(B), !d)
        if (i(h) !== null)
          d = !0, M || (M = !0, Q());
        else {
          var ae = i(m);
          ae !== null && Se(T, ae.startTime - B);
        }
    }
    var M = !1, k = -1, I = 5, X = -1;
    function P() {
      return C ? !0 : !(t.unstable_now() - X < I);
    }
    function V() {
      if (C = !1, M) {
        var B = t.unstable_now();
        X = B;
        var ae = !0;
        try {
          e: {
            d = !1, x && (x = !1, A(k), k = -1), v = !0;
            var ge = b;
            try {
              t: {
                for (E(B), _ = i(h); _ !== null && !(_.expirationTime > B && P()); ) {
                  var Te = _.callback;
                  if (typeof Te == "function") {
                    _.callback = null, b = _.priorityLevel;
                    var R = Te(
                      _.expirationTime <= B
                    );
                    if (B = t.unstable_now(), typeof R == "function") {
                      _.callback = R, E(B), ae = !0;
                      break t;
                    }
                    _ === i(h) && s(h), E(B);
                  } else s(h);
                  _ = i(h);
                }
                if (_ !== null) ae = !0;
                else {
                  var ee = i(m);
                  ee !== null && Se(
                    T,
                    ee.startTime - B
                  ), ae = !1;
                }
              }
              break e;
            } finally {
              _ = null, b = ge, v = !1;
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
        D(V);
      };
    else if (typeof MessageChannel < "u") {
      var de = new MessageChannel(), me = de.port2;
      de.port1.onmessage = V, Q = function() {
        me.postMessage(null);
      };
    } else
      Q = function() {
        N(V, 0);
      };
    function Se(B, ae) {
      k = N(function() {
        B(t.unstable_now());
      }, ae);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, t.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : I = 0 < B ? Math.floor(1e3 / B) : 5;
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
      var ge = b;
      b = ae;
      try {
        return B();
      } finally {
        b = ge;
      }
    }, t.unstable_requestPaint = function() {
      C = !0;
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
      var ge = b;
      b = B;
      try {
        return ae();
      } finally {
        b = ge;
      }
    }, t.unstable_scheduleCallback = function(B, ae, ge) {
      var Te = t.unstable_now();
      switch (typeof ge == "object" && ge !== null ? (ge = ge.delay, ge = typeof ge == "number" && 0 < ge ? Te + ge : Te) : ge = Te, B) {
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
      return R = ge + R, B = {
        id: y++,
        callback: ae,
        priorityLevel: B,
        startTime: ge,
        expirationTime: R,
        sortIndex: -1
      }, ge > Te ? (B.sortIndex = ge, r(m, B), i(h) === null && B === i(m) && (x ? (A(k), k = -1) : x = !0, Se(T, ge - Te))) : (B.sortIndex = R, r(h, B), d || v || (d = !0, M || (M = !0, Q()))), B;
    }, t.unstable_shouldYield = P, t.unstable_wrapCallback = function(B) {
      var ae = b;
      return function() {
        var ge = b;
        b = ae;
        try {
          return B.apply(this, arguments);
        } finally {
          b = ge;
        }
      };
    };
  })(ed)), ed;
}
var vv;
function D2() {
  return vv || (vv = 1, Wf.exports = O2()), Wf.exports;
}
var td = { exports: {} }, Ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yv;
function M2() {
  if (yv) return Ht;
  yv = 1;
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
var bv;
function m0() {
  if (bv) return td.exports;
  bv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), td.exports = M2(), td.exports;
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
var _v;
function k2() {
  if (_v) return Us;
  _v = 1;
  var t = D2(), r = Jd(), i = m0();
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
  var y = Object.assign, _ = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), N = Symbol.for("react.provider"), A = Symbol.for("react.consumer"), D = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), P = Symbol.for("react.memo_cache_sentinel"), V = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var de = Symbol.for("react.client.reference");
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === de ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case C:
        return "Profiler";
      case x:
        return "StrictMode";
      case T:
        return "Suspense";
      case M:
        return "SuspenseList";
      case X:
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
        case E:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return n = e.displayName || null, n !== null ? n : me(e.type) || "Memo";
        case I:
          n = e._payload, e = e._init;
          try {
            return me(e(n));
          } catch {
          }
      }
    return null;
  }
  var Se = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Te = [], R = -1;
  function ee(e) {
    return { current: e };
  }
  function oe(e) {
    0 > R || (e.current = Te[R], Te[R] = null, R--);
  }
  function ue(e, n) {
    R++, Te[R] = e.current, e.current = n;
  }
  var le = ee(null), ze = ee(null), $ = ee(null), Ce = ee(null);
  function xe(e, n) {
    switch (ue($, n), ue(ze, e), ue(le, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? zg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = zg(n), e = Lg(n, e);
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
    oe(le), ue(le, e);
  }
  function Fe() {
    oe(le), oe(ze), oe($);
  }
  function Je(e) {
    e.memoizedState !== null && ue(Ce, e);
    var n = le.current, a = Lg(n, e.type);
    n !== a && (ue(ze, e), ue(le, a));
  }
  function Re(e) {
    ze.current === e && (oe(le), oe(ze)), Ce.current === e && (oe(Ce), ks._currentValue = ge);
  }
  var st = Object.prototype.hasOwnProperty, It = t.unstable_scheduleCallback, U = t.unstable_cancelCallback, ie = t.unstable_shouldYield, re = t.unstable_requestPaint, F = t.unstable_now, se = t.unstable_getCurrentPriorityLevel, he = t.unstable_ImmediatePriority, K = t.unstable_UserBlockingPriority, ce = t.unstable_NormalPriority, _e = t.unstable_LowPriority, ve = t.unstable_IdlePriority, He = t.log, Xe = t.unstable_setDisableYieldValue, ht = null, nt = null;
  function Yn(e) {
    if (typeof He == "function" && Xe(e), nt && typeof nt.setStrictMode == "function")
      try {
        nt.setStrictMode(ht, e);
      } catch {
      }
  }
  var Vt = Math.clz32 ? Math.clz32 : oa, xn = Math.log, sa = Math.LN2;
  function oa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xn(e) / sa | 0) | 0;
  }
  var ar = 256, Xn = 4194304;
  function En(e) {
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
  function Yt(e, n, a) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0, g = e.suspendedLanes, w = e.pingedLanes;
    e = e.warmLanes;
    var O = o & 134217727;
    return O !== 0 ? (o = O & ~g, o !== 0 ? c = En(o) : (w &= O, w !== 0 ? c = En(w) : a || (a = O & ~e, a !== 0 && (c = En(a))))) : (O = o & ~g, O !== 0 ? c = En(O) : w !== 0 ? c = En(w) : a || (a = o & ~e, a !== 0 && (c = En(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & g) === 0 && (g = c & -c, a = n & -n, g >= a || g === 32 && (a & 4194048) !== 0) ? n : c;
  }
  function Jt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function po(e, n) {
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
  function Ua() {
    var e = ar;
    return ar <<= 1, (ar & 4194048) === 0 && (ar = 256), e;
  }
  function bh() {
    var e = Xn;
    return Xn <<= 1, (Xn & 62914560) === 0 && (Xn = 4194304), e;
  }
  function Pu(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function qi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Y1(e, n, a, o, c, g) {
    var w = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var O = e.entanglements, j = e.expirationTimes, q = e.hiddenUpdates;
    for (a = w & ~a; 0 < a; ) {
      var J = 31 - Vt(a), te = 1 << J;
      O[J] = 0, j[J] = -1;
      var Z = q[J];
      if (Z !== null)
        for (q[J] = null, J = 0; J < Z.length; J++) {
          var G = Z[J];
          G !== null && (G.lane &= -536870913);
        }
      a &= ~te;
    }
    o !== 0 && _h(e, o, 0), g !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= g & ~(w & ~n));
  }
  function _h(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var o = 31 - Vt(n);
    e.entangledLanes |= n, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 4194090;
  }
  function Sh(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var o = 31 - Vt(a), c = 1 << o;
      c & n | e[o] & n && (e[o] |= n), a &= ~c;
    }
  }
  function Iu(e) {
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
  function Bu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function xh() {
    var e = ae.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : tv(e.type));
  }
  function X1(e, n) {
    var a = ae.p;
    try {
      return ae.p = e, n();
    } finally {
      ae.p = a;
    }
  }
  var Tr = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Tr, Wt = "__reactProps$" + Tr, Ha = "__reactContainer$" + Tr, Uu = "__reactEvents$" + Tr, $1 = "__reactListeners$" + Tr, Q1 = "__reactHandles$" + Tr, Eh = "__reactResources$" + Tr, Fi = "__reactMarker$" + Tr;
  function Hu(e) {
    delete e[Bt], delete e[Wt], delete e[Uu], delete e[$1], delete e[Q1];
  }
  function qa(e) {
    var n = e[Bt];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ha] || a[Bt]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = Ug(e); e !== null; ) {
            if (a = e[Bt]) return a;
            e = Ug(e);
          }
        return n;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Fa(e) {
    if (e = e[Bt] || e[Ha]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Zi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Za(e) {
    var n = e[Eh];
    return n || (n = e[Eh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Dt(e) {
    e[Fi] = !0;
  }
  var Ch = /* @__PURE__ */ new Set(), wh = {};
  function la(e, n) {
    Ga(e, n), Ga(e + "Capture", n);
  }
  function Ga(e, n) {
    for (wh[e] = n, e = 0; e < n.length; e++)
      Ch.add(n[e]);
  }
  var K1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ah = {}, Nh = {};
  function J1(e) {
    return st.call(Nh, e) ? !0 : st.call(Ah, e) ? !1 : K1.test(e) ? Nh[e] = !0 : (Ah[e] = !0, !1);
  }
  function mo(e, n, a) {
    if (J1(n))
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
  function go(e, n, a) {
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
  var qu, Th;
  function Va(e) {
    if (qu === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        qu = n && n[1] || "", Th = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + qu + e + Th;
  }
  var Fu = !1;
  function Zu(e, n) {
    if (!e || Fu) return "";
    Fu = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var te = function() {
                throw Error();
              };
              if (Object.defineProperty(te.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(te, []);
                } catch (G) {
                  var Z = G;
                }
                Reflect.construct(e, [], te);
              } else {
                try {
                  te.call();
                } catch (G) {
                  Z = G;
                }
                e.call(te.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                Z = G;
              }
              (te = e()) && typeof te.catch == "function" && te.catch(function() {
              });
            }
          } catch (G) {
            if (G && Z && typeof G.stack == "string")
              return [G.stack, Z.stack];
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
                  var J = `
` + j[o].replace(" at new ", " at ");
                  return e.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", e.displayName)), J;
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      Fu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Va(a) : "";
  }
  function W1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Va(e.type);
      case 16:
        return Va("Lazy");
      case 13:
        return Va("Suspense");
      case 19:
        return Va("SuspenseList");
      case 0:
      case 15:
        return Zu(e.type, !1);
      case 11:
        return Zu(e.type.render, !1);
      case 1:
        return Zu(e.type, !0);
      case 31:
        return Va("Activity");
      default:
        return "";
    }
  }
  function Oh(e) {
    try {
      var n = "";
      do
        n += W1(e), e = e.return;
      while (e);
      return n;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function Cn(e) {
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
  function Dh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function eb(e) {
    var n = Dh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
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
  function vo(e) {
    e._valueTracker || (e._valueTracker = eb(e));
  }
  function Mh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(), o = "";
    return e && (o = Dh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (n.setValue(e), !0) : !1;
  }
  function yo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var tb = /[\n"\\]/g;
  function wn(e) {
    return e.replace(
      tb,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Gu(e, n, a, o, c, g, w, O) {
    e.name = "", w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.type = w : e.removeAttribute("type"), n != null ? w === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Cn(n)) : e.value !== "" + Cn(n) && (e.value = "" + Cn(n)) : w !== "submit" && w !== "reset" || e.removeAttribute("value"), n != null ? Vu(e, w, Cn(n)) : a != null ? Vu(e, w, Cn(a)) : o != null && e.removeAttribute("value"), c == null && g != null && (e.defaultChecked = !!g), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? e.name = "" + Cn(O) : e.removeAttribute("name");
  }
  function kh(e, n, a, o, c, g, w, O) {
    if (g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.type = g), n != null || a != null) {
      if (!(g !== "submit" && g !== "reset" || n != null))
        return;
      a = a != null ? "" + Cn(a) : "", n = n != null ? "" + Cn(n) : a, O || n === e.value || (e.value = n), e.defaultValue = n;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = O ? e.checked : !!o, e.defaultChecked = !!o, w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" && (e.name = w);
  }
  function Vu(e, n, a) {
    n === "number" && yo(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ya(e, n, a, o) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < a.length; c++)
        n["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        c = n.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Cn(a), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, o && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function jh(e, n, a) {
    if (n != null && (n = "" + Cn(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + Cn(a) : "";
  }
  function Rh(e, n, a, o) {
    if (n == null) {
      if (o != null) {
        if (a != null) throw Error(s(92));
        if (Se(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), n = a;
    }
    a = Cn(n), e.defaultValue = a, o = e.textContent, o === a && o !== "" && o !== null && (e.value = o);
  }
  function Xa(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var nb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function zh(e, n, a) {
    var o = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : o ? e.setProperty(n, a) : typeof a != "number" || a === 0 || nb.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
  }
  function Lh(e, n, a) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var o in a)
        !a.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in n)
        o = n[c], n.hasOwnProperty(c) && a[c] !== o && zh(e, c, o);
    } else
      for (var g in n)
        n.hasOwnProperty(g) && zh(e, g, n[g]);
  }
  function Yu(e) {
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
  var rb = /* @__PURE__ */ new Map([
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
  ]), ab = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function bo(e) {
    return ab.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Xu = null;
  function $u(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var $a = null, Qa = null;
  function Ph(e) {
    var n = Fa(e);
    if (n && (e = n.stateNode)) {
      var a = e[Wt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Gu(
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
              'input[name="' + wn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < a.length; n++) {
              var o = a[n];
              if (o !== e && o.form === e.form) {
                var c = o[Wt] || null;
                if (!c) throw Error(s(90));
                Gu(
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
              o = a[n], o.form === e.form && Mh(o);
          }
          break e;
        case "textarea":
          jh(e, a.value, a.defaultValue);
          break e;
        case "select":
          n = a.value, n != null && Ya(e, !!a.multiple, n, !1);
      }
    }
  }
  var Qu = !1;
  function Ih(e, n, a) {
    if (Qu) return e(n, a);
    Qu = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (Qu = !1, ($a !== null || Qa !== null) && (al(), $a && (n = $a, e = Qa, Qa = $a = null, Ph(n), e)))
        for (n = 0; n < e.length; n++) Ph(e[n]);
    }
  }
  function Gi(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[Wt] || null;
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
  var sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ku = !1;
  if (sr)
    try {
      var Vi = {};
      Object.defineProperty(Vi, "passive", {
        get: function() {
          Ku = !0;
        }
      }), window.addEventListener("test", Vi, Vi), window.removeEventListener("test", Vi, Vi);
    } catch {
      Ku = !1;
    }
  var Or = null, Ju = null, _o = null;
  function Bh() {
    if (_o) return _o;
    var e, n = Ju, a = n.length, o, c = "value" in Or ? Or.value : Or.textContent, g = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var w = a - e;
    for (o = 1; o <= w && n[a - o] === c[g - o]; o++) ;
    return _o = c.slice(e, 1 < o ? 1 - o : void 0);
  }
  function So(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function xo() {
    return !0;
  }
  function Uh() {
    return !1;
  }
  function en(e) {
    function n(a, o, c, g, w) {
      this._reactName = a, this._targetInst = c, this.type = o, this.nativeEvent = g, this.target = w, this.currentTarget = null;
      for (var O in e)
        e.hasOwnProperty(O) && (a = e[O], this[O] = a ? a(g) : g[O]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? xo : Uh, this.isPropagationStopped = Uh, this;
    }
    return y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xo);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xo);
      },
      persist: function() {
      },
      isPersistent: xo
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
  }, Eo = en(ua), Yi = y({}, ua, { view: 0, detail: 0 }), ib = en(Yi), Wu, ec, Xi, Co = y({}, Yi, {
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
    getModifierState: nc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Xi && (Xi && e.type === "mousemove" ? (Wu = e.screenX - Xi.screenX, ec = e.screenY - Xi.screenY) : ec = Wu = 0, Xi = e), Wu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ec;
    }
  }), Hh = en(Co), sb = y({}, Co, { dataTransfer: 0 }), ob = en(sb), lb = y({}, Yi, { relatedTarget: 0 }), tc = en(lb), ub = y({}, ua, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), cb = en(ub), fb = y({}, ua, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), db = en(fb), hb = y({}, ua, { data: 0 }), qh = en(hb), pb = {
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
  }, mb = {
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
  }, gb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function vb(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = gb[e]) ? !!n[e] : !1;
  }
  function nc() {
    return vb;
  }
  var yb = y({}, Yi, {
    key: function(e) {
      if (e.key) {
        var n = pb[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = So(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mb[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nc,
    charCode: function(e) {
      return e.type === "keypress" ? So(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? So(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), bb = en(yb), _b = y({}, Co, {
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
  }), Fh = en(_b), Sb = y({}, Yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nc
  }), xb = en(Sb), Eb = y({}, ua, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Cb = en(Eb), wb = y({}, Co, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ab = en(wb), Nb = y({}, ua, {
    newState: 0,
    oldState: 0
  }), Tb = en(Nb), Ob = [9, 13, 27, 32], rc = sr && "CompositionEvent" in window, $i = null;
  sr && "documentMode" in document && ($i = document.documentMode);
  var Db = sr && "TextEvent" in window && !$i, Zh = sr && (!rc || $i && 8 < $i && 11 >= $i), Gh = " ", Vh = !1;
  function Yh(e, n) {
    switch (e) {
      case "keyup":
        return Ob.indexOf(n.keyCode) !== -1;
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
  function Xh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ka = !1;
  function Mb(e, n) {
    switch (e) {
      case "compositionend":
        return Xh(n);
      case "keypress":
        return n.which !== 32 ? null : (Vh = !0, Gh);
      case "textInput":
        return e = n.data, e === Gh && Vh ? null : e;
      default:
        return null;
    }
  }
  function kb(e, n) {
    if (Ka)
      return e === "compositionend" || !rc && Yh(e, n) ? (e = Bh(), _o = Ju = Or = null, Ka = !1, e) : null;
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
        return Zh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var jb = {
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
  function $h(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!jb[e.type] : n === "textarea";
  }
  function Qh(e, n, a, o) {
    $a ? Qa ? Qa.push(o) : Qa = [o] : $a = o, n = cl(n, "onChange"), 0 < n.length && (a = new Eo(
      "onChange",
      "change",
      null,
      a,
      o
    ), e.push({ event: a, listeners: n }));
  }
  var Qi = null, Ki = null;
  function Rb(e) {
    Dg(e, 0);
  }
  function wo(e) {
    var n = Zi(e);
    if (Mh(n)) return e;
  }
  function Kh(e, n) {
    if (e === "change") return n;
  }
  var Jh = !1;
  if (sr) {
    var ac;
    if (sr) {
      var ic = "oninput" in document;
      if (!ic) {
        var Wh = document.createElement("div");
        Wh.setAttribute("oninput", "return;"), ic = typeof Wh.oninput == "function";
      }
      ac = ic;
    } else ac = !1;
    Jh = ac && (!document.documentMode || 9 < document.documentMode);
  }
  function ep() {
    Qi && (Qi.detachEvent("onpropertychange", tp), Ki = Qi = null);
  }
  function tp(e) {
    if (e.propertyName === "value" && wo(Ki)) {
      var n = [];
      Qh(
        n,
        Ki,
        e,
        $u(e)
      ), Ih(Rb, n);
    }
  }
  function zb(e, n, a) {
    e === "focusin" ? (ep(), Qi = n, Ki = a, Qi.attachEvent("onpropertychange", tp)) : e === "focusout" && ep();
  }
  function Lb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return wo(Ki);
  }
  function Pb(e, n) {
    if (e === "click") return wo(n);
  }
  function Ib(e, n) {
    if (e === "input" || e === "change")
      return wo(n);
  }
  function Bb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var cn = typeof Object.is == "function" ? Object.is : Bb;
  function Ji(e, n) {
    if (cn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), o = Object.keys(n);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var c = a[o];
      if (!st.call(n, c) || !cn(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function np(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rp(e, n) {
    var a = np(e);
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
      a = np(a);
    }
  }
  function ap(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ap(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function ip(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = yo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = yo(e.document);
    }
    return n;
  }
  function sc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var Ub = sr && "documentMode" in document && 11 >= document.documentMode, Ja = null, oc = null, Wi = null, lc = !1;
  function sp(e, n, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    lc || Ja == null || Ja !== yo(o) || (o = Ja, "selectionStart" in o && sc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Wi && Ji(Wi, o) || (Wi = o, o = cl(oc, "onSelect"), 0 < o.length && (n = new Eo(
      "onSelect",
      "select",
      null,
      n,
      a
    ), e.push({ event: n, listeners: o }), n.target = Ja)));
  }
  function ca(e, n) {
    var a = {};
    return a[e.toLowerCase()] = n.toLowerCase(), a["Webkit" + e] = "webkit" + n, a["Moz" + e] = "moz" + n, a;
  }
  var Wa = {
    animationend: ca("Animation", "AnimationEnd"),
    animationiteration: ca("Animation", "AnimationIteration"),
    animationstart: ca("Animation", "AnimationStart"),
    transitionrun: ca("Transition", "TransitionRun"),
    transitionstart: ca("Transition", "TransitionStart"),
    transitioncancel: ca("Transition", "TransitionCancel"),
    transitionend: ca("Transition", "TransitionEnd")
  }, uc = {}, op = {};
  sr && (op = document.createElement("div").style, "AnimationEvent" in window || (delete Wa.animationend.animation, delete Wa.animationiteration.animation, delete Wa.animationstart.animation), "TransitionEvent" in window || delete Wa.transitionend.transition);
  function fa(e) {
    if (uc[e]) return uc[e];
    if (!Wa[e]) return e;
    var n = Wa[e], a;
    for (a in n)
      if (n.hasOwnProperty(a) && a in op)
        return uc[e] = n[a];
    return e;
  }
  var lp = fa("animationend"), up = fa("animationiteration"), cp = fa("animationstart"), Hb = fa("transitionrun"), qb = fa("transitionstart"), Fb = fa("transitioncancel"), fp = fa("transitionend"), dp = /* @__PURE__ */ new Map(), cc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  cc.push("scrollEnd");
  function In(e, n) {
    dp.set(e, n), la(n, [e]);
  }
  var hp = /* @__PURE__ */ new WeakMap();
  function An(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = hp.get(e);
      return a !== void 0 ? a : (n = {
        value: e,
        source: n,
        stack: Oh(n)
      }, hp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: Oh(n)
    };
  }
  var Nn = [], ei = 0, fc = 0;
  function Ao() {
    for (var e = ei, n = fc = ei = 0; n < e; ) {
      var a = Nn[n];
      Nn[n++] = null;
      var o = Nn[n];
      Nn[n++] = null;
      var c = Nn[n];
      Nn[n++] = null;
      var g = Nn[n];
      if (Nn[n++] = null, o !== null && c !== null) {
        var w = o.pending;
        w === null ? c.next = c : (c.next = w.next, w.next = c), o.pending = c;
      }
      g !== 0 && pp(a, c, g);
    }
  }
  function No(e, n, a, o) {
    Nn[ei++] = e, Nn[ei++] = n, Nn[ei++] = a, Nn[ei++] = o, fc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function dc(e, n, a, o) {
    return No(e, n, a, o), To(e);
  }
  function ti(e, n) {
    return No(e, null, null, n), To(e);
  }
  function pp(e, n, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var c = !1, g = e.return; g !== null; )
      g.childLanes |= a, o = g.alternate, o !== null && (o.childLanes |= a), g.tag === 22 && (e = g.stateNode, e === null || e._visibility & 1 || (c = !0)), e = g, g = g.return;
    return e.tag === 3 ? (g = e.stateNode, c && n !== null && (c = 31 - Vt(a), e = g.hiddenUpdates, o = e[c], o === null ? e[c] = [n] : o.push(n), n.lane = a | 536870912), g) : null;
  }
  function To(e) {
    if (50 < Cs)
      throw Cs = 0, bf = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ni = {};
  function Zb(e, n, a, o) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fn(e, n, a, o) {
    return new Zb(e, n, a, o);
  }
  function hc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function or(e, n) {
    var a = e.alternate;
    return a === null ? (a = fn(
      e.tag,
      n,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = n, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, n = e.dependencies, a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function mp(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Oo(e, n, a, o, c, g) {
    var w = 0;
    if (o = e, typeof e == "function") hc(e) && (w = 1);
    else if (typeof e == "string")
      w = V_(
        e,
        a,
        le.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case X:
          return e = fn(31, a, n, c), e.elementType = X, e.lanes = g, e;
        case d:
          return da(a.children, c, g, n);
        case x:
          w = 8, c |= 24;
          break;
        case C:
          return e = fn(12, a, n, c | 2), e.elementType = C, e.lanes = g, e;
        case T:
          return e = fn(13, a, n, c), e.elementType = T, e.lanes = g, e;
        case M:
          return e = fn(19, a, n, c), e.elementType = M, e.lanes = g, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case N:
              case D:
                w = 10;
                break e;
              case A:
                w = 9;
                break e;
              case E:
                w = 11;
                break e;
              case k:
                w = 14;
                break e;
              case I:
                w = 16, o = null;
                break e;
            }
          w = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return n = fn(w, a, n, c), n.elementType = e, n.type = o, n.lanes = g, n;
  }
  function da(e, n, a, o) {
    return e = fn(7, e, o, n), e.lanes = a, e;
  }
  function pc(e, n, a) {
    return e = fn(6, e, null, n), e.lanes = a, e;
  }
  function mc(e, n, a) {
    return n = fn(
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
  var ri = [], ai = 0, Do = null, Mo = 0, Tn = [], On = 0, ha = null, lr = 1, ur = "";
  function pa(e, n) {
    ri[ai++] = Mo, ri[ai++] = Do, Do = e, Mo = n;
  }
  function gp(e, n, a) {
    Tn[On++] = lr, Tn[On++] = ur, Tn[On++] = ha, ha = e;
    var o = lr;
    e = ur;
    var c = 32 - Vt(o) - 1;
    o &= ~(1 << c), a += 1;
    var g = 32 - Vt(n) + c;
    if (30 < g) {
      var w = c - c % 5;
      g = (o & (1 << w) - 1).toString(32), o >>= w, c -= w, lr = 1 << 32 - Vt(n) + c | a << c | o, ur = g + e;
    } else
      lr = 1 << g | a << c | o, ur = e;
  }
  function gc(e) {
    e.return !== null && (pa(e, 1), gp(e, 1, 0));
  }
  function vc(e) {
    for (; e === Do; )
      Do = ri[--ai], ri[ai] = null, Mo = ri[--ai], ri[ai] = null;
    for (; e === ha; )
      ha = Tn[--On], Tn[On] = null, ur = Tn[--On], Tn[On] = null, lr = Tn[--On], Tn[On] = null;
  }
  var Xt = null, pt = null, Ye = !1, ma = null, $n = !1, yc = Error(s(519));
  function ga(e) {
    var n = Error(s(418, ""));
    throw ns(An(n, e)), yc;
  }
  function vp(e) {
    var n = e.stateNode, a = e.type, o = e.memoizedProps;
    switch (n[Bt] = e, n[Wt] = o, a) {
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
        for (a = 0; a < As.length; a++)
          Ue(As[a], n);
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
        Ue("invalid", n), kh(
          n,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), vo(n);
        break;
      case "select":
        Ue("invalid", n);
        break;
      case "textarea":
        Ue("invalid", n), Rh(n, o.value, o.defaultValue, o.children), vo(n);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || o.suppressHydrationWarning === !0 || Rg(n.textContent, a) ? (o.popover != null && (Ue("beforetoggle", n), Ue("toggle", n)), o.onScroll != null && Ue("scroll", n), o.onScrollEnd != null && Ue("scrollend", n), o.onClick != null && (n.onclick = fl), n = !0) : n = !1, n || ga(e);
  }
  function yp(e) {
    for (Xt = e.return; Xt; )
      switch (Xt.tag) {
        case 5:
        case 13:
          $n = !1;
          return;
        case 27:
        case 3:
          $n = !0;
          return;
        default:
          Xt = Xt.return;
      }
  }
  function es(e) {
    if (e !== Xt) return !1;
    if (!Ye) return yp(e), Ye = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || zf(e.type, e.memoizedProps)), a = !a), a && pt && ga(e), yp(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (n === 0) {
                pt = Un(e.nextSibling);
                break e;
              }
              n--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || n++;
          e = e.nextSibling;
        }
        pt = null;
      }
    } else
      n === 27 ? (n = pt, Gr(e.type) ? (e = Bf, Bf = null, pt = e) : pt = n) : pt = Xt ? Un(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ts() {
    pt = Xt = null, Ye = !1;
  }
  function bp() {
    var e = ma;
    return e !== null && (rn === null ? rn = e : rn.push.apply(
      rn,
      e
    ), ma = null), e;
  }
  function ns(e) {
    ma === null ? ma = [e] : ma.push(e);
  }
  var bc = ee(null), va = null, cr = null;
  function Dr(e, n, a) {
    ue(bc, n._currentValue), n._currentValue = a;
  }
  function fr(e) {
    e._currentValue = bc.current, oe(bc);
  }
  function _c(e, n, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n), e === a) break;
      e = e.return;
    }
  }
  function Sc(e, n, a, o) {
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
              g.lanes |= a, O = g.alternate, O !== null && (O.lanes |= a), _c(
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
        w.lanes |= a, g = w.alternate, g !== null && (g.lanes |= a), _c(w, a, e), w = null;
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
  function rs(e, n, a, o) {
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
          cn(c.pendingProps.value, w.value) || (e !== null ? e.push(O) : e = [O]);
        }
      } else if (c === Ce.current) {
        if (w = c.alternate, w === null) throw Error(s(387));
        w.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(ks) : e = [ks]);
      }
      c = c.return;
    }
    e !== null && Sc(
      n,
      e,
      a,
      o
    ), n.flags |= 262144;
  }
  function ko(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!cn(
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
  function Ut(e) {
    return _p(va, e);
  }
  function jo(e, n) {
    return va === null && ya(e), _p(e, n);
  }
  function _p(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, cr === null) {
      if (e === null) throw Error(s(308));
      cr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else cr = cr.next = n;
    return a;
  }
  var Gb = typeof AbortController < "u" ? AbortController : function() {
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
  }, Vb = t.unstable_scheduleCallback, Yb = t.unstable_NormalPriority, At = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function xc() {
    return {
      controller: new Gb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function as(e) {
    e.refCount--, e.refCount === 0 && Vb(Yb, function() {
      e.controller.abort();
    });
  }
  var is = null, Ec = 0, ii = 0, si = null;
  function Xb(e, n) {
    if (is === null) {
      var a = is = [];
      Ec = 0, ii = Af(), si = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return Ec++, n.then(Sp, Sp), n;
  }
  function Sp() {
    if (--Ec === 0 && is !== null) {
      si !== null && (si.status = "fulfilled");
      var e = is;
      is = null, ii = 0, si = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function $b(e, n) {
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
  var xp = B.S;
  B.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Xb(e, n), xp !== null && xp(e, n);
  };
  var ba = ee(null);
  function Cc() {
    var e = ba.current;
    return e !== null ? e : at.pooledCache;
  }
  function Ro(e, n) {
    n === null ? ue(ba, ba.current) : ue(ba, n.pool);
  }
  function Ep() {
    var e = Cc();
    return e === null ? null : { parent: At._currentValue, pool: e };
  }
  var ss = Error(s(460)), Cp = Error(s(474)), zo = Error(s(542)), wc = { then: function() {
  } };
  function wp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Lo() {
  }
  function Ap(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(Lo, Lo), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, Tp(e), e;
      default:
        if (typeof n.status == "string") n.then(Lo, Lo);
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
            throw e = n.reason, Tp(e), e;
        }
        throw os = n, ss;
    }
  }
  var os = null;
  function Np() {
    if (os === null) throw Error(s(459));
    var e = os;
    return os = null, e;
  }
  function Tp(e) {
    if (e === ss || e === zo)
      throw Error(s(483));
  }
  var Mr = !1;
  function Ac(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nc(e, n) {
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
      return c === null ? n.next = n : (n.next = c.next, c.next = n), o.pending = n, n = To(e), pp(e, null, a), n;
    }
    return No(e, o, n, a), To(e);
  }
  function ls(e, n, a) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, Sh(e, a);
    }
  }
  function Tc(e, n) {
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
  var Oc = !1;
  function us() {
    if (Oc) {
      var e = si;
      if (e !== null) throw e;
    }
  }
  function cs(e, n, a, o) {
    Oc = !1;
    var c = e.updateQueue;
    Mr = !1;
    var g = c.firstBaseUpdate, w = c.lastBaseUpdate, O = c.shared.pending;
    if (O !== null) {
      c.shared.pending = null;
      var j = O, q = j.next;
      j.next = null, w === null ? g = q : w.next = q, w = j;
      var J = e.alternate;
      J !== null && (J = J.updateQueue, O = J.lastBaseUpdate, O !== w && (O === null ? J.firstBaseUpdate = q : O.next = q, J.lastBaseUpdate = j));
    }
    if (g !== null) {
      var te = c.baseState;
      w = 0, J = q = j = null, O = g;
      do {
        var Z = O.lane & -536870913, G = Z !== O.lane;
        if (G ? (Ge & Z) === Z : (o & Z) === Z) {
          Z !== 0 && Z === ii && (Oc = !0), J !== null && (J = J.next = {
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: null,
            next: null
          });
          e: {
            var Oe = e, Ae = O;
            Z = n;
            var tt = a;
            switch (Ae.tag) {
              case 1:
                if (Oe = Ae.payload, typeof Oe == "function") {
                  te = Oe.call(tt, te, Z);
                  break e;
                }
                te = Oe;
                break e;
              case 3:
                Oe.flags = Oe.flags & -65537 | 128;
              case 0:
                if (Oe = Ae.payload, Z = typeof Oe == "function" ? Oe.call(tt, te, Z) : Oe, Z == null) break e;
                te = y({}, te, Z);
                break e;
              case 2:
                Mr = !0;
            }
          }
          Z = O.callback, Z !== null && (e.flags |= 64, G && (e.flags |= 8192), G = c.callbacks, G === null ? c.callbacks = [Z] : G.push(Z));
        } else
          G = {
            lane: Z,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          }, J === null ? (q = J = G, j = te) : J = J.next = G, w |= Z;
        if (O = O.next, O === null) {
          if (O = c.shared.pending, O === null)
            break;
          G = O, O = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (!0);
      J === null && (j = te), c.baseState = j, c.firstBaseUpdate = q, c.lastBaseUpdate = J, g === null && (c.shared.lanes = 0), Hr |= w, e.lanes = w, e.memoizedState = te;
    }
  }
  function Op(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function Dp(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Op(a[e], n);
  }
  var oi = ee(null), Po = ee(0);
  function Mp(e, n) {
    e = yr, ue(Po, e), ue(oi, n), yr = e | n.baseLanes;
  }
  function Dc() {
    ue(Po, yr), ue(oi, oi.current);
  }
  function Mc() {
    yr = Po.current, oe(oi), oe(Po);
  }
  var Rr = 0, Pe = null, We = null, St = null, Io = !1, li = !1, _a = !1, Bo = 0, fs = 0, ui = null, Qb = 0;
  function yt() {
    throw Error(s(321));
  }
  function kc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!cn(e[a], n[a])) return !1;
    return !0;
  }
  function jc(e, n, a, o, c, g) {
    return Rr = g, Pe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, B.H = e === null || e.memoizedState === null ? pm : mm, _a = !1, g = a(o, c), _a = !1, li && (g = jp(
      n,
      a,
      o,
      c
    )), kp(e), g;
  }
  function kp(e) {
    B.H = Go;
    var n = We !== null && We.next !== null;
    if (Rr = 0, St = We = Pe = null, Io = !1, fs = 0, ui = null, n) throw Error(s(300));
    e === null || Mt || (e = e.dependencies, e !== null && ko(e) && (Mt = !0));
  }
  function jp(e, n, a, o) {
    Pe = e;
    var c = 0;
    do {
      if (li && (ui = null), fs = 0, li = !1, 25 <= c) throw Error(s(301));
      if (c += 1, St = We = null, e.updateQueue != null) {
        var g = e.updateQueue;
        g.lastEffect = null, g.events = null, g.stores = null, g.memoCache != null && (g.memoCache.index = 0);
      }
      B.H = r_, g = n(a, o);
    } while (li);
    return g;
  }
  function Kb() {
    var e = B.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? ds(n) : n, e = e.useState()[0], (We !== null ? We.memoizedState : null) !== e && (Pe.flags |= 1024), n;
  }
  function Rc() {
    var e = Bo !== 0;
    return Bo = 0, e;
  }
  function zc(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function Lc(e) {
    if (Io) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Io = !1;
    }
    Rr = 0, St = We = Pe = null, li = !1, fs = Bo = 0, ui = null;
  }
  function tn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return St === null ? Pe.memoizedState = St = e : St = St.next = e, St;
  }
  function xt() {
    if (We === null) {
      var e = Pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var n = St === null ? Pe.memoizedState : St.next;
    if (n !== null)
      St = n, We = e;
    else {
      if (e === null)
        throw Pe.alternate === null ? Error(s(467)) : Error(s(310));
      We = e, e = {
        memoizedState: We.memoizedState,
        baseState: We.baseState,
        baseQueue: We.baseQueue,
        queue: We.queue,
        next: null
      }, St === null ? Pe.memoizedState = St = e : St = St.next = e;
    }
    return St;
  }
  function Pc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ds(e) {
    var n = fs;
    return fs += 1, ui === null && (ui = []), e = Ap(ui, e, n), n = Pe, (St === null ? n.memoizedState : St.next) === null && (n = n.alternate, B.H = n === null || n.memoizedState === null ? pm : mm), e;
  }
  function Uo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ds(e);
      if (e.$$typeof === D) return Ut(e);
    }
    throw Error(s(438, String(e)));
  }
  function Ic(e) {
    var n = null, a = Pe.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var o = Pe.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (n = {
        data: o.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = Pc(), Pe.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), o = 0; o < e; o++)
        a[o] = P;
    return n.index++, a;
  }
  function dr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ho(e) {
    var n = xt();
    return Bc(n, We, e);
  }
  function Bc(e, n, a) {
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
      var O = w = null, j = null, q = n, J = !1;
      do {
        var te = q.lane & -536870913;
        if (te !== q.lane ? (Ge & te) === te : (Rr & te) === te) {
          var Z = q.revertLane;
          if (Z === 0)
            j !== null && (j = j.next = {
              lane: 0,
              revertLane: 0,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), te === ii && (J = !0);
          else if ((Rr & Z) === Z) {
            q = q.next, Z === ii && (J = !0);
            continue;
          } else
            te = {
              lane: 0,
              revertLane: q.revertLane,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, j === null ? (O = j = te, w = g) : j = j.next = te, Pe.lanes |= Z, Hr |= Z;
          te = q.action, _a && a(g, te), g = q.hasEagerState ? q.eagerState : a(g, te);
        } else
          Z = {
            lane: te,
            revertLane: q.revertLane,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, j === null ? (O = j = Z, w = g) : j = j.next = Z, Pe.lanes |= te, Hr |= te;
        q = q.next;
      } while (q !== null && q !== n);
      if (j === null ? w = g : j.next = O, !cn(g, e.memoizedState) && (Mt = !0, J && (a = si, a !== null)))
        throw a;
      e.memoizedState = g, e.baseState = w, e.baseQueue = j, o.lastRenderedState = g;
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Uc(e) {
    var n = xt(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, c = a.pending, g = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var w = c = c.next;
      do
        g = e(g, w.action), w = w.next;
      while (w !== c);
      cn(g, n.memoizedState) || (Mt = !0), n.memoizedState = g, n.baseQueue === null && (n.baseState = g), a.lastRenderedState = g;
    }
    return [g, o];
  }
  function Rp(e, n, a) {
    var o = Pe, c = xt(), g = Ye;
    if (g) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var w = !cn(
      (We || c).memoizedState,
      a
    );
    w && (c.memoizedState = a, Mt = !0), c = c.queue;
    var O = Pp.bind(null, o, c, e);
    if (hs(2048, 8, O, [e]), c.getSnapshot !== n || w || St !== null && St.memoizedState.tag & 1) {
      if (o.flags |= 2048, ci(
        9,
        qo(),
        Lp.bind(
          null,
          o,
          c,
          a,
          n
        ),
        null
      ), at === null) throw Error(s(349));
      g || (Rr & 124) !== 0 || zp(o, n, a);
    }
    return a;
  }
  function zp(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = Pe.updateQueue, n === null ? (n = Pc(), Pe.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function Lp(e, n, a, o) {
    n.value = a, n.getSnapshot = o, Ip(n) && Bp(e);
  }
  function Pp(e, n, a) {
    return a(function() {
      Ip(n) && Bp(e);
    });
  }
  function Ip(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !cn(e, a);
    } catch {
      return !0;
    }
  }
  function Bp(e) {
    var n = ti(e, 2);
    n !== null && gn(n, e, 2);
  }
  function Hc(e) {
    var n = tn();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), _a) {
        Yn(!0);
        try {
          a();
        } finally {
          Yn(!1);
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
  function Up(e, n, a, o) {
    return e.baseState = a, Bc(
      e,
      We,
      typeof o == "function" ? o : dr
    );
  }
  function Jb(e, n, a, o, c) {
    if (Zo(e)) throw Error(s(485));
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
      B.T !== null ? a(!0) : g.isTransition = !1, o(g), a = n.pending, a === null ? (g.next = n.pending = g, Hp(n, g)) : (g.next = a.next, n.pending = a.next = g);
    }
  }
  function Hp(e, n) {
    var a = n.action, o = n.payload, c = e.state;
    if (n.isTransition) {
      var g = B.T, w = {};
      B.T = w;
      try {
        var O = a(c, o), j = B.S;
        j !== null && j(w, O), qp(e, n, O);
      } catch (q) {
        qc(e, n, q);
      } finally {
        B.T = g;
      }
    } else
      try {
        g = a(c, o), qp(e, n, g);
      } catch (q) {
        qc(e, n, q);
      }
  }
  function qp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(o) {
        Fp(e, n, o);
      },
      function(o) {
        return qc(e, n, o);
      }
    ) : Fp(e, n, a);
  }
  function Fp(e, n, a) {
    n.status = "fulfilled", n.value = a, Zp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, Hp(e, a)));
  }
  function qc(e, n, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        n.status = "rejected", n.reason = a, Zp(n), n = n.next;
      while (n !== o);
    }
    e.action = null;
  }
  function Zp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Gp(e, n) {
    return n;
  }
  function Vp(e, n) {
    if (Ye) {
      var a = at.formState;
      if (a !== null) {
        e: {
          var o = Pe;
          if (Ye) {
            if (pt) {
              t: {
                for (var c = pt, g = $n; c.nodeType !== 8; ) {
                  if (!g) {
                    c = null;
                    break t;
                  }
                  if (c = Un(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                g = c.data, c = g === "F!" || g === "F" ? c : null;
              }
              if (c) {
                pt = Un(
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
    return a = tn(), a.memoizedState = a.baseState = n, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gp,
      lastRenderedState: n
    }, a.queue = o, a = fm.bind(
      null,
      Pe,
      o
    ), o.dispatch = a, o = Hc(!1), g = Yc.bind(
      null,
      Pe,
      !1,
      o.queue
    ), o = tn(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = c, a = Jb.bind(
      null,
      Pe,
      c,
      g,
      a
    ), c.dispatch = a, o.memoizedState = e, [n, a, !1];
  }
  function Yp(e) {
    var n = xt();
    return Xp(n, We, e);
  }
  function Xp(e, n, a) {
    if (n = Bc(
      e,
      n,
      Gp
    )[0], e = Ho(dr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = ds(n);
      } catch (w) {
        throw w === ss ? zo : w;
      }
    else o = n;
    n = xt();
    var c = n.queue, g = c.dispatch;
    return a !== n.memoizedState && (Pe.flags |= 2048, ci(
      9,
      qo(),
      Wb.bind(null, c, a),
      null
    )), [o, g, e];
  }
  function Wb(e, n) {
    e.action = n;
  }
  function $p(e) {
    var n = xt(), a = We;
    if (a !== null)
      return Xp(n, a, e);
    xt(), n = n.memoizedState, a = xt();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [n, o, !1];
  }
  function ci(e, n, a, o) {
    return e = { tag: e, create: a, deps: o, inst: n, next: null }, n = Pe.updateQueue, n === null && (n = Pc(), Pe.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, n.lastEffect = e), e;
  }
  function qo() {
    return { destroy: void 0, resource: void 0 };
  }
  function Qp() {
    return xt().memoizedState;
  }
  function Fo(e, n, a, o) {
    var c = tn();
    o = o === void 0 ? null : o, Pe.flags |= e, c.memoizedState = ci(
      1 | n,
      qo(),
      a,
      o
    );
  }
  function hs(e, n, a, o) {
    var c = xt();
    o = o === void 0 ? null : o;
    var g = c.memoizedState.inst;
    We !== null && o !== null && kc(o, We.memoizedState.deps) ? c.memoizedState = ci(n, g, a, o) : (Pe.flags |= e, c.memoizedState = ci(
      1 | n,
      g,
      a,
      o
    ));
  }
  function Kp(e, n) {
    Fo(8390656, 8, e, n);
  }
  function Jp(e, n) {
    hs(2048, 8, e, n);
  }
  function Wp(e, n) {
    return hs(4, 2, e, n);
  }
  function em(e, n) {
    return hs(4, 4, e, n);
  }
  function tm(e, n) {
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
  function nm(e, n, a) {
    a = a != null ? a.concat([e]) : null, hs(4, 4, tm.bind(null, n, e), a);
  }
  function Fc() {
  }
  function rm(e, n) {
    var a = xt();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    return n !== null && kc(n, o[1]) ? o[0] : (a.memoizedState = [e, n], e);
  }
  function am(e, n) {
    var a = xt();
    n = n === void 0 ? null : n;
    var o = a.memoizedState;
    if (n !== null && kc(n, o[1]))
      return o[0];
    if (o = e(), _a) {
      Yn(!0);
      try {
        e();
      } finally {
        Yn(!1);
      }
    }
    return a.memoizedState = [o, n], o;
  }
  function Zc(e, n, a) {
    return a === void 0 || (Rr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = og(), Pe.lanes |= e, Hr |= e, a);
  }
  function im(e, n, a, o) {
    return cn(a, n) ? a : oi.current !== null ? (e = Zc(e, a, o), cn(e, n) || (Mt = !0), e) : (Rr & 42) === 0 ? (Mt = !0, e.memoizedState = a) : (e = og(), Pe.lanes |= e, Hr |= e, n);
  }
  function sm(e, n, a, o, c) {
    var g = ae.p;
    ae.p = g !== 0 && 8 > g ? g : 8;
    var w = B.T, O = {};
    B.T = O, Yc(e, !1, n, a);
    try {
      var j = c(), q = B.S;
      if (q !== null && q(O, j), j !== null && typeof j == "object" && typeof j.then == "function") {
        var J = $b(
          j,
          o
        );
        ps(
          e,
          n,
          J,
          mn(e)
        );
      } else
        ps(
          e,
          n,
          o,
          mn(e)
        );
    } catch (te) {
      ps(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: te },
        mn()
      );
    } finally {
      ae.p = g, B.T = w;
    }
  }
  function e_() {
  }
  function Gc(e, n, a, o) {
    if (e.tag !== 5) throw Error(s(476));
    var c = om(e).queue;
    sm(
      e,
      c,
      n,
      ge,
      a === null ? e_ : function() {
        return lm(e), a(o);
      }
    );
  }
  function om(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ge,
      baseState: ge,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: ge
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
  function lm(e) {
    var n = om(e).next.queue;
    ps(e, n, {}, mn());
  }
  function Vc() {
    return Ut(ks);
  }
  function um() {
    return xt().memoizedState;
  }
  function cm() {
    return xt().memoizedState;
  }
  function t_(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = mn();
          e = kr(a);
          var o = jr(n, e, a);
          o !== null && (gn(o, n, a), ls(o, n, a)), n = { cache: xc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function n_(e, n, a) {
    var o = mn();
    a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zo(e) ? dm(n, a) : (a = dc(e, n, a, o), a !== null && (gn(a, e, o), hm(a, n, o)));
  }
  function fm(e, n, a) {
    var o = mn();
    ps(e, n, a, o);
  }
  function ps(e, n, a, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Zo(e)) dm(n, c);
    else {
      var g = e.alternate;
      if (e.lanes === 0 && (g === null || g.lanes === 0) && (g = n.lastRenderedReducer, g !== null))
        try {
          var w = n.lastRenderedState, O = g(w, a);
          if (c.hasEagerState = !0, c.eagerState = O, cn(O, w))
            return No(e, n, c, 0), at === null && Ao(), !1;
        } catch {
        } finally {
        }
      if (a = dc(e, n, c, o), a !== null)
        return gn(a, e, o), hm(a, n, o), !0;
    }
    return !1;
  }
  function Yc(e, n, a, o) {
    if (o = {
      lane: 2,
      revertLane: Af(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zo(e)) {
      if (n) throw Error(s(479));
    } else
      n = dc(
        e,
        a,
        o,
        2
      ), n !== null && gn(n, e, 2);
  }
  function Zo(e) {
    var n = e.alternate;
    return e === Pe || n !== null && n === Pe;
  }
  function dm(e, n) {
    li = Io = !0;
    var a = e.pending;
    a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
  }
  function hm(e, n, a) {
    if ((a & 4194048) !== 0) {
      var o = n.lanes;
      o &= e.pendingLanes, a |= o, n.lanes = a, Sh(e, a);
    }
  }
  var Go = {
    readContext: Ut,
    use: Uo,
    useCallback: yt,
    useContext: yt,
    useEffect: yt,
    useImperativeHandle: yt,
    useLayoutEffect: yt,
    useInsertionEffect: yt,
    useMemo: yt,
    useReducer: yt,
    useRef: yt,
    useState: yt,
    useDebugValue: yt,
    useDeferredValue: yt,
    useTransition: yt,
    useSyncExternalStore: yt,
    useId: yt,
    useHostTransitionStatus: yt,
    useFormState: yt,
    useActionState: yt,
    useOptimistic: yt,
    useMemoCache: yt,
    useCacheRefresh: yt
  }, pm = {
    readContext: Ut,
    use: Uo,
    useCallback: function(e, n) {
      return tn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Ut,
    useEffect: Kp,
    useImperativeHandle: function(e, n, a) {
      a = a != null ? a.concat([e]) : null, Fo(
        4194308,
        4,
        tm.bind(null, n, e),
        a
      );
    },
    useLayoutEffect: function(e, n) {
      return Fo(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Fo(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var a = tn();
      n = n === void 0 ? null : n;
      var o = e();
      if (_a) {
        Yn(!0);
        try {
          e();
        } finally {
          Yn(!1);
        }
      }
      return a.memoizedState = [o, n], o;
    },
    useReducer: function(e, n, a) {
      var o = tn();
      if (a !== void 0) {
        var c = a(n);
        if (_a) {
          Yn(!0);
          try {
            a(n);
          } finally {
            Yn(!1);
          }
        }
      } else c = n;
      return o.memoizedState = o.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, o.queue = e, e = e.dispatch = n_.bind(
        null,
        Pe,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var n = tn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Hc(e);
      var n = e.queue, a = fm.bind(null, Pe, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Fc,
    useDeferredValue: function(e, n) {
      var a = tn();
      return Zc(a, e, n);
    },
    useTransition: function() {
      var e = Hc(!1);
      return e = sm.bind(
        null,
        Pe,
        e.queue,
        !0,
        !1
      ), tn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var o = Pe, c = tn();
      if (Ye) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), at === null)
          throw Error(s(349));
        (Ge & 124) !== 0 || zp(o, n, a);
      }
      c.memoizedState = a;
      var g = { value: a, getSnapshot: n };
      return c.queue = g, Kp(Pp.bind(null, o, g, e), [
        e
      ]), o.flags |= 2048, ci(
        9,
        qo(),
        Lp.bind(
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
      var e = tn(), n = at.identifierPrefix;
      if (Ye) {
        var a = ur, o = lr;
        a = (o & ~(1 << 32 - Vt(o) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = Bo++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = Qb++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Vc,
    useFormState: Vp,
    useActionState: Vp,
    useOptimistic: function(e) {
      var n = tn();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = a, n = Yc.bind(
        null,
        Pe,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: Ic,
    useCacheRefresh: function() {
      return tn().memoizedState = t_.bind(
        null,
        Pe
      );
    }
  }, mm = {
    readContext: Ut,
    use: Uo,
    useCallback: rm,
    useContext: Ut,
    useEffect: Jp,
    useImperativeHandle: nm,
    useInsertionEffect: Wp,
    useLayoutEffect: em,
    useMemo: am,
    useReducer: Ho,
    useRef: Qp,
    useState: function() {
      return Ho(dr);
    },
    useDebugValue: Fc,
    useDeferredValue: function(e, n) {
      var a = xt();
      return im(
        a,
        We.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Ho(dr)[0], n = xt().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        n
      ];
    },
    useSyncExternalStore: Rp,
    useId: um,
    useHostTransitionStatus: Vc,
    useFormState: Yp,
    useActionState: Yp,
    useOptimistic: function(e, n) {
      var a = xt();
      return Up(a, We, e, n);
    },
    useMemoCache: Ic,
    useCacheRefresh: cm
  }, r_ = {
    readContext: Ut,
    use: Uo,
    useCallback: rm,
    useContext: Ut,
    useEffect: Jp,
    useImperativeHandle: nm,
    useInsertionEffect: Wp,
    useLayoutEffect: em,
    useMemo: am,
    useReducer: Uc,
    useRef: Qp,
    useState: function() {
      return Uc(dr);
    },
    useDebugValue: Fc,
    useDeferredValue: function(e, n) {
      var a = xt();
      return We === null ? Zc(a, e, n) : im(
        a,
        We.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Uc(dr)[0], n = xt().memoizedState;
      return [
        typeof e == "boolean" ? e : ds(e),
        n
      ];
    },
    useSyncExternalStore: Rp,
    useId: um,
    useHostTransitionStatus: Vc,
    useFormState: $p,
    useActionState: $p,
    useOptimistic: function(e, n) {
      var a = xt();
      return We !== null ? Up(a, We, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Ic,
    useCacheRefresh: cm
  }, fi = null, ms = 0;
  function Vo(e) {
    var n = ms;
    return ms += 1, fi === null && (fi = []), Ap(fi, e, n);
  }
  function gs(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Yo(e, n) {
    throw n.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function gm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function vm(e) {
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
    function O(L, z, H, W) {
      return z === null || z.tag !== 6 ? (z = pc(H, L.mode, W), z.return = L, z) : (z = c(z, H), z.return = L, z);
    }
    function j(L, z, H, W) {
      var ye = H.type;
      return ye === d ? J(
        L,
        z,
        H.props.children,
        W,
        H.key
      ) : z !== null && (z.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === I && gm(ye) === z.type) ? (z = c(z, H.props), gs(z, H), z.return = L, z) : (z = Oo(
        H.type,
        H.key,
        H.props,
        null,
        L.mode,
        W
      ), gs(z, H), z.return = L, z);
    }
    function q(L, z, H, W) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== H.containerInfo || z.stateNode.implementation !== H.implementation ? (z = mc(H, L.mode, W), z.return = L, z) : (z = c(z, H.children || []), z.return = L, z);
    }
    function J(L, z, H, W, ye) {
      return z === null || z.tag !== 7 ? (z = da(
        H,
        L.mode,
        W,
        ye
      ), z.return = L, z) : (z = c(z, H), z.return = L, z);
    }
    function te(L, z, H) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = pc(
          "" + z,
          L.mode,
          H
        ), z.return = L, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            return H = Oo(
              z.type,
              z.key,
              z.props,
              null,
              L.mode,
              H
            ), gs(H, z), H.return = L, H;
          case v:
            return z = mc(
              z,
              L.mode,
              H
            ), z.return = L, z;
          case I:
            var W = z._init;
            return z = W(z._payload), te(L, z, H);
        }
        if (Se(z) || Q(z))
          return z = da(
            z,
            L.mode,
            H,
            null
          ), z.return = L, z;
        if (typeof z.then == "function")
          return te(L, Vo(z), H);
        if (z.$$typeof === D)
          return te(
            L,
            jo(L, z),
            H
          );
        Yo(L, z);
      }
      return null;
    }
    function Z(L, z, H, W) {
      var ye = z !== null ? z.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return ye !== null ? null : O(L, z, "" + H, W);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case b:
            return H.key === ye ? j(L, z, H, W) : null;
          case v:
            return H.key === ye ? q(L, z, H, W) : null;
          case I:
            return ye = H._init, H = ye(H._payload), Z(L, z, H, W);
        }
        if (Se(H) || Q(H))
          return ye !== null ? null : J(L, z, H, W, null);
        if (typeof H.then == "function")
          return Z(
            L,
            z,
            Vo(H),
            W
          );
        if (H.$$typeof === D)
          return Z(
            L,
            z,
            jo(L, H),
            W
          );
        Yo(L, H);
      }
      return null;
    }
    function G(L, z, H, W, ye) {
      if (typeof W == "string" && W !== "" || typeof W == "number" || typeof W == "bigint")
        return L = L.get(H) || null, O(z, L, "" + W, ye);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case b:
            return L = L.get(
              W.key === null ? H : W.key
            ) || null, j(z, L, W, ye);
          case v:
            return L = L.get(
              W.key === null ? H : W.key
            ) || null, q(z, L, W, ye);
          case I:
            var Ie = W._init;
            return W = Ie(W._payload), G(
              L,
              z,
              H,
              W,
              ye
            );
        }
        if (Se(W) || Q(W))
          return L = L.get(H) || null, J(z, L, W, ye, null);
        if (typeof W.then == "function")
          return G(
            L,
            z,
            H,
            Vo(W),
            ye
          );
        if (W.$$typeof === D)
          return G(
            L,
            z,
            H,
            jo(z, W),
            ye
          );
        Yo(z, W);
      }
      return null;
    }
    function Oe(L, z, H, W) {
      for (var ye = null, Ie = null, Ee = z, Ne = z = 0, jt = null; Ee !== null && Ne < H.length; Ne++) {
        Ee.index > Ne ? (jt = Ee, Ee = null) : jt = Ee.sibling;
        var Ve = Z(
          L,
          Ee,
          H[Ne],
          W
        );
        if (Ve === null) {
          Ee === null && (Ee = jt);
          break;
        }
        e && Ee && Ve.alternate === null && n(L, Ee), z = g(Ve, z, Ne), Ie === null ? ye = Ve : Ie.sibling = Ve, Ie = Ve, Ee = jt;
      }
      if (Ne === H.length)
        return a(L, Ee), Ye && pa(L, Ne), ye;
      if (Ee === null) {
        for (; Ne < H.length; Ne++)
          Ee = te(L, H[Ne], W), Ee !== null && (z = g(
            Ee,
            z,
            Ne
          ), Ie === null ? ye = Ee : Ie.sibling = Ee, Ie = Ee);
        return Ye && pa(L, Ne), ye;
      }
      for (Ee = o(Ee); Ne < H.length; Ne++)
        jt = G(
          Ee,
          L,
          Ne,
          H[Ne],
          W
        ), jt !== null && (e && jt.alternate !== null && Ee.delete(
          jt.key === null ? Ne : jt.key
        ), z = g(
          jt,
          z,
          Ne
        ), Ie === null ? ye = jt : Ie.sibling = jt, Ie = jt);
      return e && Ee.forEach(function(Qr) {
        return n(L, Qr);
      }), Ye && pa(L, Ne), ye;
    }
    function Ae(L, z, H, W) {
      if (H == null) throw Error(s(151));
      for (var ye = null, Ie = null, Ee = z, Ne = z = 0, jt = null, Ve = H.next(); Ee !== null && !Ve.done; Ne++, Ve = H.next()) {
        Ee.index > Ne ? (jt = Ee, Ee = null) : jt = Ee.sibling;
        var Qr = Z(L, Ee, Ve.value, W);
        if (Qr === null) {
          Ee === null && (Ee = jt);
          break;
        }
        e && Ee && Qr.alternate === null && n(L, Ee), z = g(Qr, z, Ne), Ie === null ? ye = Qr : Ie.sibling = Qr, Ie = Qr, Ee = jt;
      }
      if (Ve.done)
        return a(L, Ee), Ye && pa(L, Ne), ye;
      if (Ee === null) {
        for (; !Ve.done; Ne++, Ve = H.next())
          Ve = te(L, Ve.value, W), Ve !== null && (z = g(Ve, z, Ne), Ie === null ? ye = Ve : Ie.sibling = Ve, Ie = Ve);
        return Ye && pa(L, Ne), ye;
      }
      for (Ee = o(Ee); !Ve.done; Ne++, Ve = H.next())
        Ve = G(Ee, L, Ne, Ve.value, W), Ve !== null && (e && Ve.alternate !== null && Ee.delete(Ve.key === null ? Ne : Ve.key), z = g(Ve, z, Ne), Ie === null ? ye = Ve : Ie.sibling = Ve, Ie = Ve);
      return e && Ee.forEach(function(a2) {
        return n(L, a2);
      }), Ye && pa(L, Ne), ye;
    }
    function tt(L, z, H, W) {
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
                      ), W = c(
                        z,
                        H.props.children
                      ), W.return = L, L = W;
                      break e;
                    }
                  } else if (z.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === I && gm(ye) === z.type) {
                    a(
                      L,
                      z.sibling
                    ), W = c(z, H.props), gs(W, H), W.return = L, L = W;
                    break e;
                  }
                  a(L, z);
                  break;
                } else n(L, z);
                z = z.sibling;
              }
              H.type === d ? (W = da(
                H.props.children,
                L.mode,
                W,
                H.key
              ), W.return = L, L = W) : (W = Oo(
                H.type,
                H.key,
                H.props,
                null,
                L.mode,
                W
              ), gs(W, H), W.return = L, L = W);
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
                    ), W = c(z, H.children || []), W.return = L, L = W;
                    break e;
                  } else {
                    a(L, z);
                    break;
                  }
                else n(L, z);
                z = z.sibling;
              }
              W = mc(H, L.mode, W), W.return = L, L = W;
            }
            return w(L);
          case I:
            return ye = H._init, H = ye(H._payload), tt(
              L,
              z,
              H,
              W
            );
        }
        if (Se(H))
          return Oe(
            L,
            z,
            H,
            W
          );
        if (Q(H)) {
          if (ye = Q(H), typeof ye != "function") throw Error(s(150));
          return H = ye.call(H), Ae(
            L,
            z,
            H,
            W
          );
        }
        if (typeof H.then == "function")
          return tt(
            L,
            z,
            Vo(H),
            W
          );
        if (H.$$typeof === D)
          return tt(
            L,
            z,
            jo(L, H),
            W
          );
        Yo(L, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, z !== null && z.tag === 6 ? (a(L, z.sibling), W = c(z, H), W.return = L, L = W) : (a(L, z), W = pc(H, L.mode, W), W.return = L, L = W), w(L)) : a(L, z);
    }
    return function(L, z, H, W) {
      try {
        ms = 0;
        var ye = tt(
          L,
          z,
          H,
          W
        );
        return fi = null, ye;
      } catch (Ee) {
        if (Ee === ss || Ee === zo) throw Ee;
        var Ie = fn(29, Ee, null, L.mode);
        return Ie.lanes = W, Ie.return = L, Ie;
      } finally {
      }
    };
  }
  var di = vm(!0), ym = vm(!1), Dn = ee(null), Qn = null;
  function zr(e) {
    var n = e.alternate;
    ue(Nt, Nt.current & 1), ue(Dn, e), Qn === null && (n === null || oi.current !== null || n.memoizedState !== null) && (Qn = e);
  }
  function bm(e) {
    if (e.tag === 22) {
      if (ue(Nt, Nt.current), ue(Dn, e), Qn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Qn = e);
      }
    } else Lr();
  }
  function Lr() {
    ue(Nt, Nt.current), ue(Dn, Dn.current);
  }
  function hr(e) {
    oe(Dn), Qn === e && (Qn = null), oe(Nt);
  }
  var Nt = ee(0);
  function Xo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || If(a)))
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
  function Xc(e, n, a, o) {
    n = e.memoizedState, a = a(o, n), a = a == null ? n : y({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var $c = {
    enqueueSetState: function(e, n, a) {
      e = e._reactInternals;
      var o = mn(), c = kr(o);
      c.payload = n, a != null && (c.callback = a), n = jr(e, c, o), n !== null && (gn(n, e, o), ls(n, e, o));
    },
    enqueueReplaceState: function(e, n, a) {
      e = e._reactInternals;
      var o = mn(), c = kr(o);
      c.tag = 1, c.payload = n, a != null && (c.callback = a), n = jr(e, c, o), n !== null && (gn(n, e, o), ls(n, e, o));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var a = mn(), o = kr(a);
      o.tag = 2, n != null && (o.callback = n), n = jr(e, o, a), n !== null && (gn(n, e, a), ls(n, e, a));
    }
  };
  function _m(e, n, a, o, c, g, w) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, g, w) : n.prototype && n.prototype.isPureReactComponent ? !Ji(a, o) || !Ji(c, g) : !0;
  }
  function Sm(e, n, a, o) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, o), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, o), n.state !== e && $c.enqueueReplaceState(n, n.state, null);
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
  var $o = typeof reportError == "function" ? reportError : function(e) {
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
  function xm(e) {
    $o(e);
  }
  function Em(e) {
    console.error(e);
  }
  function Cm(e) {
    $o(e);
  }
  function Qo(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function wm(e, n, a) {
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
  function Qc(e, n, a) {
    return a = kr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Qo(e, n);
    }, a;
  }
  function Am(e) {
    return e = kr(e), e.tag = 3, e;
  }
  function Nm(e, n, a, o) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var g = o.value;
      e.payload = function() {
        return c(g);
      }, e.callback = function() {
        wm(n, a, o);
      };
    }
    var w = a.stateNode;
    w !== null && typeof w.componentDidCatch == "function" && (e.callback = function() {
      wm(n, a, o), typeof c != "function" && (qr === null ? qr = /* @__PURE__ */ new Set([this]) : qr.add(this));
      var O = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: O !== null ? O : ""
      });
    });
  }
  function a_(e, n, a, o, c) {
    if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = a.alternate, n !== null && rs(
        n,
        a,
        c,
        !0
      ), a = Dn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Qn === null ? Sf() : a.alternate === null && mt === 0 && (mt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, o === wc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : n.add(o), Ef(e, o, c)), !1;
          case 22:
            return a.flags |= 65536, o === wc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), Ef(e, o, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return Ef(e, o, c), Sf(), !1;
    }
    if (Ye)
      return n = Dn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, o !== yc && (e = Error(s(422), { cause: o }), ns(An(e, a)))) : (o !== yc && (n = Error(s(423), {
        cause: o
      }), ns(
        An(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = An(o, a), c = Qc(
        e.stateNode,
        o,
        c
      ), Tc(e, c), mt !== 4 && (mt = 2)), !1;
    var g = Error(s(520), { cause: o });
    if (g = An(g, a), Es === null ? Es = [g] : Es.push(g), mt !== 4 && (mt = 2), n === null) return !0;
    o = An(o, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Qc(a.stateNode, o, e), Tc(a, e), !1;
        case 1:
          if (n = a.type, g = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (qr === null || !qr.has(g))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = Am(c), Nm(
              c,
              e,
              a,
              o
            ), Tc(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Tm = Error(s(461)), Mt = !1;
  function Rt(e, n, a, o) {
    n.child = e === null ? ym(n, null, a, o) : di(
      n,
      e.child,
      a,
      o
    );
  }
  function Om(e, n, a, o, c) {
    a = a.render;
    var g = n.ref;
    if ("ref" in o) {
      var w = {};
      for (var O in o)
        O !== "ref" && (w[O] = o[O]);
    } else w = o;
    return ya(n), o = jc(
      e,
      n,
      a,
      w,
      g,
      c
    ), O = Rc(), e !== null && !Mt ? (zc(e, n, c), pr(e, n, c)) : (Ye && O && gc(n), n.flags |= 1, Rt(e, n, o, c), n.child);
  }
  function Dm(e, n, a, o, c) {
    if (e === null) {
      var g = a.type;
      return typeof g == "function" && !hc(g) && g.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = g, Mm(
        e,
        n,
        g,
        o,
        c
      )) : (e = Oo(
        a.type,
        null,
        o,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (g = e.child, !af(e, c)) {
      var w = g.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ji, a(w, o) && e.ref === n.ref)
        return pr(e, n, c);
    }
    return n.flags |= 1, e = or(g, o), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Mm(e, n, a, o, c) {
    if (e !== null) {
      var g = e.memoizedProps;
      if (Ji(g, o) && e.ref === n.ref)
        if (Mt = !1, n.pendingProps = o = g, af(e, c))
          (e.flags & 131072) !== 0 && (Mt = !0);
        else
          return n.lanes = e.lanes, pr(e, n, c);
    }
    return Kc(
      e,
      n,
      a,
      o,
      c
    );
  }
  function km(e, n, a) {
    var o = n.pendingProps, c = o.children, g = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = g !== null ? g.baseLanes | a : a, e !== null) {
          for (c = n.child = e.child, g = 0; c !== null; )
            g = g | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = g & ~o;
        } else n.childLanes = 0, n.child = null;
        return jm(
          e,
          n,
          o,
          a
        );
      }
      if ((a & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ro(
          n,
          g !== null ? g.cachePool : null
        ), g !== null ? Mp(n, g) : Dc(), bm(n);
      else
        return n.lanes = n.childLanes = 536870912, jm(
          e,
          n,
          g !== null ? g.baseLanes | a : a,
          a
        );
    } else
      g !== null ? (Ro(n, g.cachePool), Mp(n, g), Lr(), n.memoizedState = null) : (e !== null && Ro(n, null), Dc(), Lr());
    return Rt(e, n, c, a), n.child;
  }
  function jm(e, n, a, o) {
    var c = Cc();
    return c = c === null ? null : { parent: At._currentValue, pool: c }, n.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && Ro(n, null), Dc(), bm(n), e !== null && rs(e, n, o, !0), null;
  }
  function Ko(e, n) {
    var a = n.ref;
    if (a === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 4194816);
    }
  }
  function Kc(e, n, a, o, c) {
    return ya(n), a = jc(
      e,
      n,
      a,
      o,
      void 0,
      c
    ), o = Rc(), e !== null && !Mt ? (zc(e, n, c), pr(e, n, c)) : (Ye && o && gc(n), n.flags |= 1, Rt(e, n, a, c), n.child);
  }
  function Rm(e, n, a, o, c, g) {
    return ya(n), n.updateQueue = null, a = jp(
      n,
      o,
      a,
      c
    ), kp(e), o = Rc(), e !== null && !Mt ? (zc(e, n, g), pr(e, n, g)) : (Ye && o && gc(n), n.flags |= 1, Rt(e, n, a, g), n.child);
  }
  function zm(e, n, a, o, c) {
    if (ya(n), n.stateNode === null) {
      var g = ni, w = a.contextType;
      typeof w == "object" && w !== null && (g = Ut(w)), g = new a(o, g), n.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, g.updater = $c, n.stateNode = g, g._reactInternals = n, g = n.stateNode, g.props = o, g.state = n.memoizedState, g.refs = {}, Ac(n), w = a.contextType, g.context = typeof w == "object" && w !== null ? Ut(w) : ni, g.state = n.memoizedState, w = a.getDerivedStateFromProps, typeof w == "function" && (Xc(
        n,
        a,
        w,
        o
      ), g.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (w = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), w !== g.state && $c.enqueueReplaceState(g, g.state, null), cs(n, o, g, c), us(), g.state = n.memoizedState), typeof g.componentDidMount == "function" && (n.flags |= 4194308), o = !0;
    } else if (e === null) {
      g = n.stateNode;
      var O = n.memoizedProps, j = Sa(a, O);
      g.props = j;
      var q = g.context, J = a.contextType;
      w = ni, typeof J == "object" && J !== null && (w = Ut(J));
      var te = a.getDerivedStateFromProps;
      J = typeof te == "function" || typeof g.getSnapshotBeforeUpdate == "function", O = n.pendingProps !== O, J || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (O || q !== w) && Sm(
        n,
        g,
        o,
        w
      ), Mr = !1;
      var Z = n.memoizedState;
      g.state = Z, cs(n, o, g, c), us(), q = n.memoizedState, O || Z !== q || Mr ? (typeof te == "function" && (Xc(
        n,
        a,
        te,
        o
      ), q = n.memoizedState), (j = Mr || _m(
        n,
        a,
        j,
        o,
        Z,
        q,
        w
      )) ? (J || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = o, n.memoizedState = q), g.props = o, g.state = q, g.context = w, o = j) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), o = !1);
    } else {
      g = n.stateNode, Nc(e, n), w = n.memoizedProps, J = Sa(a, w), g.props = J, te = n.pendingProps, Z = g.context, q = a.contextType, j = ni, typeof q == "object" && q !== null && (j = Ut(q)), O = a.getDerivedStateFromProps, (q = typeof O == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (w !== te || Z !== j) && Sm(
        n,
        g,
        o,
        j
      ), Mr = !1, Z = n.memoizedState, g.state = Z, cs(n, o, g, c), us();
      var G = n.memoizedState;
      w !== te || Z !== G || Mr || e !== null && e.dependencies !== null && ko(e.dependencies) ? (typeof O == "function" && (Xc(
        n,
        a,
        O,
        o
      ), G = n.memoizedState), (J = Mr || _m(
        n,
        a,
        J,
        o,
        Z,
        G,
        j
      ) || e !== null && e.dependencies !== null && ko(e.dependencies)) ? (q || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(o, G, j), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(
        o,
        G,
        j
      )), typeof g.componentDidUpdate == "function" && (n.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), n.memoizedProps = o, n.memoizedState = G), g.props = o, g.state = G, g.context = j, o = J) : (typeof g.componentDidUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), o = !1);
    }
    return g = o, Ko(e, n), o = (n.flags & 128) !== 0, g || o ? (g = n.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : g.render(), n.flags |= 1, e !== null && o ? (n.child = di(
      n,
      e.child,
      null,
      c
    ), n.child = di(
      n,
      null,
      a,
      c
    )) : Rt(e, n, a, c), n.memoizedState = g.state, e = n.child) : e = pr(
      e,
      n,
      c
    ), e;
  }
  function Lm(e, n, a, o) {
    return ts(), n.flags |= 256, Rt(e, n, a, o), n.child;
  }
  var Jc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Wc(e) {
    return { baseLanes: e, cachePool: Ep() };
  }
  function ef(e, n, a) {
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= Mn), e;
  }
  function Pm(e, n, a) {
    var o = n.pendingProps, c = !1, g = (n.flags & 128) !== 0, w;
    if ((w = g) || (w = e !== null && e.memoizedState === null ? !1 : (Nt.current & 2) !== 0), w && (c = !0, n.flags &= -129), w = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ye) {
        if (c ? zr(n) : Lr(), Ye) {
          var O = pt, j;
          if (j = O) {
            e: {
              for (j = O, O = $n; j.nodeType !== 8; ) {
                if (!O) {
                  O = null;
                  break e;
                }
                if (j = Un(
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
            }, j = fn(
              18,
              null,
              null,
              0
            ), j.stateNode = O, j.return = n, n.child = j, Xt = n, pt = null, j = !0) : j = !1;
          }
          j || ga(n);
        }
        if (O = n.memoizedState, O !== null && (O = O.dehydrated, O !== null))
          return If(O) ? n.lanes = 32 : n.lanes = 536870912, null;
        hr(n);
      }
      return O = o.children, o = o.fallback, c ? (Lr(), c = n.mode, O = Jo(
        { mode: "hidden", children: O },
        c
      ), o = da(
        o,
        c,
        a,
        null
      ), O.return = n, o.return = n, O.sibling = o, n.child = O, c = n.child, c.memoizedState = Wc(a), c.childLanes = ef(
        e,
        w,
        a
      ), n.memoizedState = Jc, o) : (zr(n), tf(n, O));
    }
    if (j = e.memoizedState, j !== null && (O = j.dehydrated, O !== null)) {
      if (g)
        n.flags & 256 ? (zr(n), n.flags &= -257, n = nf(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (Lr(), n.child = e.child, n.flags |= 128, n = null) : (Lr(), c = o.fallback, O = n.mode, o = Jo(
          { mode: "visible", children: o.children },
          O
        ), c = da(
          c,
          O,
          a,
          null
        ), c.flags |= 2, o.return = n, c.return = n, o.sibling = c, n.child = o, di(
          n,
          e.child,
          null,
          a
        ), o = n.child, o.memoizedState = Wc(a), o.childLanes = ef(
          e,
          w,
          a
        ), n.memoizedState = Jc, n = c);
      else if (zr(n), If(O)) {
        if (w = O.nextSibling && O.nextSibling.dataset, w) var q = w.dgst;
        w = q, o = Error(s(419)), o.stack = "", o.digest = w, ns({ value: o, source: null, stack: null }), n = nf(
          e,
          n,
          a
        );
      } else if (Mt || rs(e, n, a, !1), w = (a & e.childLanes) !== 0, Mt || w) {
        if (w = at, w !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Iu(o), o = (o & (w.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== j.retryLane))
          throw j.retryLane = o, ti(e, o), gn(w, e, o), Tm;
        O.data === "$?" || Sf(), n = nf(
          e,
          n,
          a
        );
      } else
        O.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = j.treeContext, pt = Un(
          O.nextSibling
        ), Xt = n, Ye = !0, ma = null, $n = !1, e !== null && (Tn[On++] = lr, Tn[On++] = ur, Tn[On++] = ha, lr = e.id, ur = e.overflow, ha = n), n = tf(
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
    ), c.flags |= 2), c.return = n, o.return = n, o.sibling = c, n.child = o, o = c, c = n.child, O = e.child.memoizedState, O === null ? O = Wc(a) : (j = O.cachePool, j !== null ? (q = At._currentValue, j = j.parent !== q ? { parent: q, pool: q } : j) : j = Ep(), O = {
      baseLanes: O.baseLanes | a,
      cachePool: j
    }), c.memoizedState = O, c.childLanes = ef(
      e,
      w,
      a
    ), n.memoizedState = Jc, o) : (zr(n), a = e.child, e = a.sibling, a = or(a, {
      mode: "visible",
      children: o.children
    }), a.return = n, a.sibling = null, e !== null && (w = n.deletions, w === null ? (n.deletions = [e], n.flags |= 16) : w.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function tf(e, n) {
    return n = Jo(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Jo(e, n) {
    return e = fn(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function nf(e, n, a) {
    return di(n, e.child, null, a), e = tf(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Im(e, n, a) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), _c(e.return, n, a);
  }
  function rf(e, n, a, o, c) {
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
  function Bm(e, n, a) {
    var o = n.pendingProps, c = o.revealOrder, g = o.tail;
    if (Rt(e, n, o.children, a), o = Nt.current, (o & 2) !== 0)
      o = o & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Im(e, a, n);
          else if (e.tag === 19)
            Im(e, a, n);
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
    switch (ue(Nt, o), c) {
      case "forwards":
        for (a = n.child, c = null; a !== null; )
          e = a.alternate, e !== null && Xo(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = n.child, n.child = null) : (c = a.sibling, a.sibling = null), rf(
          n,
          !1,
          c,
          a,
          g
        );
        break;
      case "backwards":
        for (a = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Xo(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = a, a = c, c = e;
        }
        rf(
          n,
          !0,
          a,
          null,
          g
        );
        break;
      case "together":
        rf(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function pr(e, n, a) {
    if (e !== null && (n.dependencies = e.dependencies), Hr |= n.lanes, (a & n.childLanes) === 0)
      if (e !== null) {
        if (rs(
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
  function af(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ko(e)));
  }
  function i_(e, n, a) {
    switch (n.tag) {
      case 3:
        xe(n, n.stateNode.containerInfo), Dr(n, At, e.memoizedState.cache), ts();
        break;
      case 27:
      case 5:
        Je(n);
        break;
      case 4:
        xe(n, n.stateNode.containerInfo);
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
          return o.dehydrated !== null ? (zr(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? Pm(e, n, a) : (zr(n), e = pr(
            e,
            n,
            a
          ), e !== null ? e.sibling : null);
        zr(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (o = (a & n.childLanes) !== 0, o || (rs(
          e,
          n,
          a,
          !1
        ), o = (a & n.childLanes) !== 0), c) {
          if (o)
            return Bm(
              e,
              n,
              a
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ue(Nt, Nt.current), o) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, km(e, n, a);
      case 24:
        Dr(n, At, e.memoizedState.cache);
    }
    return pr(e, n, a);
  }
  function Um(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Mt = !0;
      else {
        if (!af(e, a) && (n.flags & 128) === 0)
          return Mt = !1, i_(
            e,
            n,
            a
          );
        Mt = (e.flags & 131072) !== 0;
      }
    else
      Mt = !1, Ye && (n.flags & 1048576) !== 0 && gp(n, Mo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType, c = o._init;
          if (o = c(o._payload), n.type = o, typeof o == "function")
            hc(o) ? (e = Sa(o, e), n.tag = 1, n = zm(
              null,
              n,
              o,
              e,
              a
            )) : (n.tag = 0, n = Kc(
              null,
              n,
              o,
              e,
              a
            ));
          else {
            if (o != null) {
              if (c = o.$$typeof, c === E) {
                n.tag = 11, n = Om(
                  null,
                  n,
                  o,
                  e,
                  a
                );
                break e;
              } else if (c === k) {
                n.tag = 14, n = Dm(
                  null,
                  n,
                  o,
                  e,
                  a
                );
                break e;
              }
            }
            throw n = me(o) || o, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return Kc(
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
        ), zm(
          e,
          n,
          o,
          c,
          a
        );
      case 3:
        e: {
          if (xe(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          o = n.pendingProps;
          var g = n.memoizedState;
          c = g.element, Nc(e, n), cs(n, o, null, a);
          var w = n.memoizedState;
          if (o = w.cache, Dr(n, At, o), o !== g.cache && Sc(
            n,
            [At],
            a,
            !0
          ), us(), o = w.element, g.isDehydrated)
            if (g = {
              element: o,
              isDehydrated: !1,
              cache: w.cache
            }, n.updateQueue.baseState = g, n.memoizedState = g, n.flags & 256) {
              n = Lm(
                e,
                n,
                o,
                a
              );
              break e;
            } else if (o !== c) {
              c = An(
                Error(s(424)),
                n
              ), ns(c), n = Lm(
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
              for (pt = Un(e.firstChild), Xt = n, Ye = !0, ma = null, $n = !0, a = ym(
                n,
                null,
                o,
                a
              ), n.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (ts(), o === c) {
              n = pr(
                e,
                n,
                a
              );
              break e;
            }
            Rt(
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
        return Ko(e, n), e === null ? (a = Zg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = a : Ye || (a = n.type, e = n.pendingProps, o = dl(
          $.current
        ).createElement(a), o[Bt] = n, o[Wt] = e, Lt(o, a, e), Dt(o), n.stateNode = o) : n.memoizedState = Zg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Je(n), e === null && Ye && (o = n.stateNode = Hg(
          n.type,
          n.pendingProps,
          $.current
        ), Xt = n, $n = !0, c = pt, Gr(n.type) ? (Bf = c, pt = Un(
          o.firstChild
        )) : pt = c), Rt(
          e,
          n,
          n.pendingProps.children,
          a
        ), Ko(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ye && ((c = o = pt) && (o = j_(
          o,
          n.type,
          n.pendingProps,
          $n
        ), o !== null ? (n.stateNode = o, Xt = n, pt = Un(
          o.firstChild
        ), $n = !1, c = !0) : c = !1), c || ga(n)), Je(n), c = n.type, g = n.pendingProps, w = e !== null ? e.memoizedProps : null, o = g.children, zf(c, g) ? o = null : w !== null && zf(c, w) && (n.flags |= 32), n.memoizedState !== null && (c = jc(
          e,
          n,
          Kb,
          null,
          null,
          a
        ), ks._currentValue = c), Ko(e, n), Rt(e, n, o, a), n.child;
      case 6:
        return e === null && Ye && ((e = a = pt) && (a = R_(
          a,
          n.pendingProps,
          $n
        ), a !== null ? (n.stateNode = a, Xt = n, pt = null, e = !0) : e = !1), e || ga(n)), null;
      case 13:
        return Pm(e, n, a);
      case 4:
        return xe(
          n,
          n.stateNode.containerInfo
        ), o = n.pendingProps, e === null ? n.child = di(
          n,
          null,
          o,
          a
        ) : Rt(
          e,
          n,
          o,
          a
        ), n.child;
      case 11:
        return Om(
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
        return o = n.pendingProps, Dr(n, n.type, o.value), Rt(
          e,
          n,
          o.children,
          a
        ), n.child;
      case 9:
        return c = n.type._context, o = n.pendingProps.children, ya(n), c = Ut(c), o = o(c), n.flags |= 1, Rt(e, n, o, a), n.child;
      case 14:
        return Dm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 15:
        return Mm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 19:
        return Bm(e, n, a);
      case 31:
        return o = n.pendingProps, a = n.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (a = Jo(
          o,
          a
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = or(e.child, o), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return km(e, n, a);
      case 24:
        return ya(n), o = Ut(At), e === null ? (c = Cc(), c === null && (c = at, g = xc(), c.pooledCache = g, g.refCount++, g !== null && (c.pooledCacheLanes |= a), c = g), n.memoizedState = {
          parent: o,
          cache: c
        }, Ac(n), Dr(n, At, c)) : ((e.lanes & a) !== 0 && (Nc(e, n), cs(n, null, null, a), us()), c = e.memoizedState, g = n.memoizedState, c.parent !== o ? (c = { parent: o, cache: o }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Dr(n, At, o)) : (o = g.cache, Dr(n, At, o), o !== c.cache && Sc(
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
  function mr(e) {
    e.flags |= 4;
  }
  function Hm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !$g(n)) {
      if (n = Dn.current, n !== null && ((Ge & 4194048) === Ge ? Qn !== null : (Ge & 62914560) !== Ge && (Ge & 536870912) === 0 || n !== Qn))
        throw os = wc, Cp;
      e.flags |= 8192;
    }
  }
  function Wo(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? bh() : 536870912, e.lanes |= n, gi |= n);
  }
  function vs(e, n) {
    if (!Ye)
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
  function ct(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, a = 0, o = 0;
    if (n)
      for (var c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, o |= c.subtreeFlags & 65011712, o |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= o, e.childLanes = a, n;
  }
  function s_(e, n, a) {
    var o = n.pendingProps;
    switch (vc(n), n.tag) {
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
        return ct(n), null;
      case 1:
        return ct(n), null;
      case 3:
        return a = n.stateNode, o = null, e !== null && (o = e.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), fr(At), Fe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (es(n) ? mr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, bp())), ct(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (mr(n), a !== null ? (ct(n), Hm(n, a)) : (ct(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (mr(n), ct(n), Hm(n, a)) : (ct(n), n.flags &= -16777217) : (e.memoizedProps !== o && mr(n), ct(n), n.flags &= -16777217), null;
      case 27:
        Re(n), a = $.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== o && mr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ct(n), null;
          }
          e = le.current, es(n) ? vp(n) : (e = Hg(c, o, a), n.stateNode = e, mr(n));
        }
        return ct(n), null;
      case 5:
        if (Re(n), a = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== o && mr(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ct(n), null;
          }
          if (e = le.current, es(n))
            vp(n);
          else {
            switch (c = dl(
              $.current
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
            e[Bt] = n, e[Wt] = o;
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
            e: switch (Lt(e, a, o), a) {
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
        return ct(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== o && mr(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = $.current, es(n)) {
            if (e = n.stateNode, a = n.memoizedProps, o = null, c = Xt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            e[Bt] = n, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || Rg(e.nodeValue, a)), e || ga(n);
          } else
            e = dl(e).createTextNode(
              o
            ), e[Bt] = n, n.stateNode = e;
        }
        return ct(n), null;
      case 13:
        if (o = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = es(n), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[Bt] = n;
            } else
              ts(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ct(n), c = !1;
          } else
            c = bp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
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
        return a !== e && a && (n.child.flags |= 8192), Wo(n, n.updateQueue), ct(n), null;
      case 4:
        return Fe(), e === null && Df(n.stateNode.containerInfo), ct(n), null;
      case 10:
        return fr(n.type), ct(n), null;
      case 19:
        if (oe(Nt), c = n.memoizedState, c === null) return ct(n), null;
        if (o = (n.flags & 128) !== 0, g = c.rendering, g === null)
          if (o) vs(c, !1);
          else {
            if (mt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (g = Xo(e), g !== null) {
                  for (n.flags |= 128, vs(c, !1), e = g.updateQueue, n.updateQueue = e, Wo(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    mp(a, e), a = a.sibling;
                  return ue(
                    Nt,
                    Nt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && F() > nl && (n.flags |= 128, o = !0, vs(c, !1), n.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Xo(g), e !== null) {
              if (n.flags |= 128, o = !0, e = e.updateQueue, n.updateQueue = e, Wo(n, e), vs(c, !0), c.tail === null && c.tailMode === "hidden" && !g.alternate && !Ye)
                return ct(n), null;
            } else
              2 * F() - c.renderingStartTime > nl && a !== 536870912 && (n.flags |= 128, o = !0, vs(c, !1), n.lanes = 4194304);
          c.isBackwards ? (g.sibling = n.child, n.child = g) : (e = c.last, e !== null ? e.sibling = g : n.child = g, c.last = g);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = F(), n.sibling = null, e = Nt.current, ue(Nt, o ? e & 1 | 2 : e & 1), n) : (ct(n), null);
      case 22:
      case 23:
        return hr(n), Mc(), o = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192), o ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (ct(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ct(n), a = n.updateQueue, a !== null && Wo(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool), o !== a && (n.flags |= 2048), e !== null && oe(ba), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), fr(At), ct(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function o_(e, n) {
    switch (vc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return fr(At), Fe(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Re(n), null;
      case 13:
        if (hr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          ts();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return oe(Nt), null;
      case 4:
        return Fe(), null;
      case 10:
        return fr(n.type), null;
      case 22:
      case 23:
        return hr(n), Mc(), e !== null && oe(ba), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return fr(At), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qm(e, n) {
    switch (vc(n), n.tag) {
      case 3:
        fr(At), Fe();
        break;
      case 26:
      case 27:
      case 5:
        Re(n);
        break;
      case 4:
        Fe();
        break;
      case 13:
        hr(n);
        break;
      case 19:
        oe(Nt);
        break;
      case 10:
        fr(n.type);
        break;
      case 22:
      case 23:
        hr(n), Mc(), e !== null && oe(ba);
        break;
      case 24:
        fr(At);
    }
  }
  function ys(e, n) {
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
  function Pr(e, n, a) {
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
              } catch (J) {
                rt(
                  c,
                  j,
                  J
                );
              }
            }
          }
          o = o.next;
        } while (o !== g);
      }
    } catch (J) {
      rt(n, n.return, J);
    }
  }
  function Fm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        Dp(n, a);
      } catch (o) {
        rt(e, e.return, o);
      }
    }
  }
  function Zm(e, n, a) {
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
  function bs(e, n) {
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
  function Kn(e, n) {
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
  function Gm(e) {
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
  function sf(e, n, a) {
    try {
      var o = e.stateNode;
      T_(o, e.type, a, n), o[Wt] = n;
    } catch (c) {
      rt(e, e.return, c);
    }
  }
  function Vm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Gr(e.type) || e.tag === 4;
  }
  function of(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Vm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Gr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lf(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = fl));
    else if (o !== 4 && (o === 27 && Gr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for (lf(e, n, a), e = e.sibling; e !== null; )
        lf(e, n, a), e = e.sibling;
  }
  function el(e, n, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (o !== 4 && (o === 27 && Gr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (el(e, n, a), e = e.sibling; e !== null; )
        el(e, n, a), e = e.sibling;
  }
  function Ym(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Lt(n, o, a), n[Bt] = e, n[Wt] = a;
    } catch (g) {
      rt(e, e.return, g);
    }
  }
  var gr = !1, bt = !1, uf = !1, Xm = typeof WeakSet == "function" ? WeakSet : Set, kt = null;
  function l_(e, n) {
    if (e = e.containerInfo, jf = yl, e = ip(e), sc(e)) {
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
            var w = 0, O = -1, j = -1, q = 0, J = 0, te = e, Z = null;
            t: for (; ; ) {
              for (var G; te !== a || c !== 0 && te.nodeType !== 3 || (O = w + c), te !== g || o !== 0 && te.nodeType !== 3 || (j = w + o), te.nodeType === 3 && (w += te.nodeValue.length), (G = te.firstChild) !== null; )
                Z = te, te = G;
              for (; ; ) {
                if (te === e) break t;
                if (Z === a && ++q === c && (O = w), Z === g && ++J === o && (j = w), (G = te.nextSibling) !== null) break;
                te = Z, Z = te.parentNode;
              }
              te = G;
            }
            a = O === -1 || j === -1 ? null : { start: O, end: j };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Rf = { focusedElem: e, selectionRange: a }, yl = !1, kt = n; kt !== null; )
      if (n = kt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, kt = e;
      else
        for (; kt !== null; ) {
          switch (n = kt, g = n.alternate, e = n.flags, n.tag) {
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
                } catch (Ae) {
                  rt(
                    a,
                    a.return,
                    Ae
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Pf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Pf(e);
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
  function $m(e, n, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ir(e, a), o & 4 && ys(5, a);
        break;
      case 1:
        if (Ir(e, a), o & 4)
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
        o & 64 && Fm(a), o & 512 && bs(a, a.return);
        break;
      case 3:
        if (Ir(e, a), o & 64 && (e = a.updateQueue, e !== null)) {
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
            Dp(e, n);
          } catch (w) {
            rt(a, a.return, w);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Ym(a);
      case 26:
      case 5:
        Ir(e, a), n === null && o & 4 && Gm(a), o & 512 && bs(a, a.return);
        break;
      case 12:
        Ir(e, a);
        break;
      case 13:
        Ir(e, a), o & 4 && Jm(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = v_.bind(
          null,
          a
        ), z_(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || gr, !o) {
          n = n !== null && n.memoizedState !== null || bt, c = gr;
          var g = bt;
          gr = o, (bt = n) && !g ? Br(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ir(e, a), gr = c, bt = g;
        }
        break;
      case 30:
        break;
      default:
        Ir(e, a);
    }
  }
  function Qm(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Qm(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Hu(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ot = null, nn = !1;
  function vr(e, n, a) {
    for (a = a.child; a !== null; )
      Km(e, n, a), a = a.sibling;
  }
  function Km(e, n, a) {
    if (nt && typeof nt.onCommitFiberUnmount == "function")
      try {
        nt.onCommitFiberUnmount(ht, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        bt || Kn(a, n), vr(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        bt || Kn(a, n);
        var o = ot, c = nn;
        Gr(a.type) && (ot = a.stateNode, nn = !1), vr(
          e,
          n,
          a
        ), Ts(a.stateNode), ot = o, nn = c;
        break;
      case 5:
        bt || Kn(a, n);
      case 6:
        if (o = ot, c = nn, ot = null, vr(
          e,
          n,
          a
        ), ot = o, nn = c, ot !== null)
          if (nn)
            try {
              (ot.nodeType === 9 ? ot.body : ot.nodeName === "HTML" ? ot.ownerDocument.body : ot).removeChild(a.stateNode);
            } catch (g) {
              rt(
                a,
                n,
                g
              );
            }
          else
            try {
              ot.removeChild(a.stateNode);
            } catch (g) {
              rt(
                a,
                n,
                g
              );
            }
        break;
      case 18:
        ot !== null && (nn ? (e = ot, Bg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Ls(e)) : Bg(ot, a.stateNode));
        break;
      case 4:
        o = ot, c = nn, ot = a.stateNode.containerInfo, nn = !0, vr(
          e,
          n,
          a
        ), ot = o, nn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bt || Pr(2, a, n), bt || Pr(4, a, n), vr(
          e,
          n,
          a
        );
        break;
      case 1:
        bt || (Kn(a, n), o = a.stateNode, typeof o.componentWillUnmount == "function" && Zm(
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
        bt = (o = bt) || a.memoizedState !== null, vr(
          e,
          n,
          a
        ), bt = o;
        break;
      default:
        vr(
          e,
          n,
          a
        );
    }
  }
  function Jm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ls(e);
      } catch (a) {
        rt(n, n.return, a);
      }
  }
  function u_(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Xm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Xm()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function cf(e, n) {
    var a = u_(e);
    n.forEach(function(o) {
      var c = y_.bind(null, e, o);
      a.has(o) || (a.add(o), o.then(c, c));
    });
  }
  function dn(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var c = a[o], g = e, w = n, O = w;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (Gr(O.type)) {
                ot = O.stateNode, nn = !1;
                break e;
              }
              break;
            case 5:
              ot = O.stateNode, nn = !1;
              break e;
            case 3:
            case 4:
              ot = O.stateNode.containerInfo, nn = !0;
              break e;
          }
          O = O.return;
        }
        if (ot === null) throw Error(s(160));
        Km(g, w, c), ot = null, nn = !1, g = c.alternate, g !== null && (g.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Wm(n, e), n = n.sibling;
  }
  var Bn = null;
  function Wm(e, n) {
    var a = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        dn(n, e), hn(e), o & 4 && (Pr(3, e, e.return), ys(3, e), Pr(5, e, e.return));
        break;
      case 1:
        dn(n, e), hn(e), o & 512 && (bt || a === null || Kn(a, a.return)), o & 64 && gr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
        break;
      case 26:
        var c = Bn;
        if (dn(n, e), hn(e), o & 512 && (bt || a === null || Kn(a, a.return)), o & 4) {
          var g = a !== null ? a.memoizedState : null;
          if (o = e.memoizedState, a === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (o) {
                    case "title":
                      g = c.getElementsByTagName("title")[0], (!g || g[Fi] || g[Bt] || g.namespaceURI === "http://www.w3.org/2000/svg" || g.hasAttribute("itemprop")) && (g = c.createElement(o), c.head.insertBefore(
                        g,
                        c.querySelector("head > title")
                      )), Lt(g, o, a), g[Bt] = e, Dt(g), o = g;
                      break e;
                    case "link":
                      var w = Yg(
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
                      g = c.createElement(o), Lt(g, o, a), c.head.appendChild(g);
                      break;
                    case "meta":
                      if (w = Yg(
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
                      g = c.createElement(o), Lt(g, o, a), c.head.appendChild(g);
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  g[Bt] = e, Dt(g), o = g;
                }
                e.stateNode = o;
              } else
                Xg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Vg(
                c,
                o,
                e.memoizedProps
              );
          else
            g !== o ? (g === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : g.count--, o === null ? Xg(
              c,
              e.type,
              e.stateNode
            ) : Vg(
              c,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && sf(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        dn(n, e), hn(e), o & 512 && (bt || a === null || Kn(a, a.return)), a !== null && o & 4 && sf(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (dn(n, e), hn(e), o & 512 && (bt || a === null || Kn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Xa(c, "");
          } catch (G) {
            rt(e, e.return, G);
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, sf(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), o & 1024 && (uf = !0);
        break;
      case 6:
        if (dn(n, e), hn(e), o & 4) {
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
        if (ml = null, c = Bn, Bn = hl(n.containerInfo), dn(n, e), Bn = c, hn(e), o & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ls(n.containerInfo);
          } catch (G) {
            rt(e, e.return, G);
          }
        uf && (uf = !1, eg(e));
        break;
      case 4:
        o = Bn, Bn = hl(
          e.stateNode.containerInfo
        ), dn(n, e), hn(e), Bn = o;
        break;
      case 12:
        dn(n, e), hn(e);
        break;
      case 13:
        dn(n, e), hn(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (gf = F()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, cf(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var j = a !== null && a.memoizedState !== null, q = gr, J = bt;
        if (gr = q || c, bt = J || j, dn(n, e), bt = J, gr = q, hn(e), o & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || j || gr || bt || xa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                j = a = n;
                try {
                  if (g = j.stateNode, c)
                    w = g.style, typeof w.setProperty == "function" ? w.setProperty("display", "none", "important") : w.display = "none";
                  else {
                    O = j.stateNode;
                    var te = j.memoizedProps.style, Z = te != null && te.hasOwnProperty("display") ? te.display : null;
                    O.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
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
        o & 4 && (o = e.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, cf(e, a))));
        break;
      case 19:
        dn(n, e), hn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, cf(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        dn(n, e), hn(e);
    }
  }
  function hn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var a, o = e.return; o !== null; ) {
          if (Vm(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, g = of(e);
            el(e, g, c);
            break;
          case 5:
            var w = a.stateNode;
            a.flags & 32 && (Xa(w, ""), a.flags &= -33);
            var O = of(e);
            el(e, O, w);
            break;
          case 3:
          case 4:
            var j = a.stateNode.containerInfo, q = of(e);
            lf(
              e,
              q,
              j
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (J) {
        rt(e, e.return, J);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function eg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        eg(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Ir(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        $m(e, n.alternate, n), n = n.sibling;
  }
  function xa(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pr(4, n, n.return), xa(n);
          break;
        case 1:
          Kn(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && Zm(
            n,
            n.return,
            a
          ), xa(n);
          break;
        case 27:
          Ts(n.stateNode);
        case 26:
        case 5:
          Kn(n, n.return), xa(n);
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
          ), ys(4, g);
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
                  Op(j[c], O);
            } catch (q) {
              rt(o, o.return, q);
            }
          }
          a && w & 64 && Fm(g), bs(g, g.return);
          break;
        case 27:
          Ym(g);
        case 26:
        case 5:
          Br(
            c,
            g,
            a
          ), a && o === null && w & 4 && Gm(g), bs(g, g.return);
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
          ), a && w & 4 && Jm(c, g);
          break;
        case 22:
          g.memoizedState === null && Br(
            c,
            g,
            a
          ), bs(g, g.return);
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
  function ff(e, n) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && as(a));
  }
  function df(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && as(e));
  }
  function Jn(e, n, a, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        tg(
          e,
          n,
          a,
          o
        ), n = n.sibling;
  }
  function tg(e, n, a, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Jn(
          e,
          n,
          a,
          o
        ), c & 2048 && ys(9, n);
        break;
      case 1:
        Jn(
          e,
          n,
          a,
          o
        );
        break;
      case 3:
        Jn(
          e,
          n,
          a,
          o
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && as(e)));
        break;
      case 12:
        if (c & 2048) {
          Jn(
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
          Jn(
            e,
            n,
            a,
            o
          );
        break;
      case 13:
        Jn(
          e,
          n,
          a,
          o
        );
        break;
      case 23:
        break;
      case 22:
        g = n.stateNode, w = n.alternate, n.memoizedState !== null ? g._visibility & 2 ? Jn(
          e,
          n,
          a,
          o
        ) : _s(e, n) : g._visibility & 2 ? Jn(
          e,
          n,
          a,
          o
        ) : (g._visibility |= 2, hi(
          e,
          n,
          a,
          o,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && ff(w, n);
        break;
      case 24:
        Jn(
          e,
          n,
          a,
          o
        ), c & 2048 && df(n.alternate, n);
        break;
      default:
        Jn(
          e,
          n,
          a,
          o
        );
    }
  }
  function hi(e, n, a, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var g = e, w = n, O = a, j = o, q = w.flags;
      switch (w.tag) {
        case 0:
        case 11:
        case 15:
          hi(
            g,
            w,
            O,
            j,
            c
          ), ys(8, w);
          break;
        case 23:
          break;
        case 22:
          var J = w.stateNode;
          w.memoizedState !== null ? J._visibility & 2 ? hi(
            g,
            w,
            O,
            j,
            c
          ) : _s(
            g,
            w
          ) : (J._visibility |= 2, hi(
            g,
            w,
            O,
            j,
            c
          )), c && q & 2048 && ff(
            w.alternate,
            w
          );
          break;
        case 24:
          hi(
            g,
            w,
            O,
            j,
            c
          ), c && q & 2048 && df(w.alternate, w);
          break;
        default:
          hi(
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
  function _s(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e, o = n, c = o.flags;
        switch (o.tag) {
          case 22:
            _s(a, o), c & 2048 && ff(
              o.alternate,
              o
            );
            break;
          case 24:
            _s(a, o), c & 2048 && df(o.alternate, o);
            break;
          default:
            _s(a, o);
        }
        n = n.sibling;
      }
  }
  var Ss = 8192;
  function pi(e) {
    if (e.subtreeFlags & Ss)
      for (e = e.child; e !== null; )
        ng(e), e = e.sibling;
  }
  function ng(e) {
    switch (e.tag) {
      case 26:
        pi(e), e.flags & Ss && e.memoizedState !== null && X_(
          Bn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        pi(e);
        break;
      case 3:
      case 4:
        var n = Bn;
        Bn = hl(e.stateNode.containerInfo), pi(e), Bn = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Ss, Ss = 16777216, pi(e), Ss = n) : pi(e));
        break;
      default:
        pi(e);
    }
  }
  function rg(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function xs(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          kt = o, ig(
            o,
            e
          );
        }
      rg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ag(e), e = e.sibling;
  }
  function ag(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        xs(e), e.flags & 2048 && Pr(9, e, e.return);
        break;
      case 3:
        xs(e);
        break;
      case 12:
        xs(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, tl(e)) : xs(e);
        break;
      default:
        xs(e);
    }
  }
  function tl(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var o = n[a];
          kt = o, ig(
            o,
            e
          );
        }
      rg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Pr(8, n, n.return), tl(n);
          break;
        case 22:
          a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, tl(n));
          break;
        default:
          tl(n);
      }
      e = e.sibling;
    }
  }
  function ig(e, n) {
    for (; kt !== null; ) {
      var a = kt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Pr(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          as(a.memoizedState.cache);
      }
      if (o = a.child, o !== null) o.return = a, kt = o;
      else
        e: for (a = e; kt !== null; ) {
          o = kt;
          var c = o.sibling, g = o.return;
          if (Qm(o), o === a) {
            kt = null;
            break e;
          }
          if (c !== null) {
            c.return = g, kt = c;
            break e;
          }
          kt = g;
        }
    }
  }
  var c_ = {
    getCacheForType: function(e) {
      var n = Ut(At), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, f_ = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, at = null, Be = null, Ge = 0, Ke = 0, pn = null, Ur = !1, mi = !1, hf = !1, yr = 0, mt = 0, Hr = 0, Ea = 0, pf = 0, Mn = 0, gi = 0, Es = null, rn = null, mf = !1, gf = 0, nl = 1 / 0, rl = null, qr = null, zt = 0, Fr = null, vi = null, yi = 0, vf = 0, yf = null, sg = null, Cs = 0, bf = null;
  function mn() {
    if ((Qe & 2) !== 0 && Ge !== 0)
      return Ge & -Ge;
    if (B.T !== null) {
      var e = ii;
      return e !== 0 ? e : Af();
    }
    return xh();
  }
  function og() {
    Mn === 0 && (Mn = (Ge & 536870912) === 0 || Ye ? Ua() : 536870912);
    var e = Dn.current;
    return e !== null && (e.flags |= 32), Mn;
  }
  function gn(e, n, a) {
    (e === at && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null) && (bi(e, 0), Zr(
      e,
      Ge,
      Mn,
      !1
    )), qi(e, a), ((Qe & 2) === 0 || e !== at) && (e === at && ((Qe & 2) === 0 && (Ea |= a), mt === 4 && Zr(
      e,
      Ge,
      Mn,
      !1
    )), Wn(e));
  }
  function lg(e, n, a) {
    if ((Qe & 6) !== 0) throw Error(s(327));
    var o = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Jt(e, n), c = o ? p_(e, n) : xf(e, n, !0), g = o;
    do {
      if (c === 0) {
        mi && !o && Zr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, g && !d_(a)) {
          c = xf(e, n, !1), g = !1;
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
              c = Es;
              var j = O.current.memoizedState.isDehydrated;
              if (j && (bi(O, w).flags |= 256), w = xf(
                O,
                w,
                !1
              ), w !== 2) {
                if (hf && !j) {
                  O.errorRecoveryDisabledLanes |= g, Ea |= g, c = 4;
                  break e;
                }
                g = rn, rn = c, g !== null && (rn === null ? rn = g : rn.push.apply(
                  rn,
                  g
                ));
              }
              c = w;
            }
            if (g = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          bi(e, 0), Zr(e, n, 0, !0);
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
                Mn,
                !Ur
              );
              break e;
            case 2:
              rn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = gf + 300 - F(), 10 < c)) {
            if (Zr(
              o,
              n,
              Mn,
              !Ur
            ), Yt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Pg(
              ug.bind(
                null,
                o,
                a,
                rn,
                rl,
                mf,
                n,
                Mn,
                Ea,
                gi,
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
          ug(
            o,
            a,
            rn,
            rl,
            mf,
            n,
            Mn,
            Ea,
            gi,
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
    Wn(e);
  }
  function ug(e, n, a, o, c, g, w, O, j, q, J, te, Z, G) {
    if (e.timeoutHandle = -1, te = n.subtreeFlags, (te & 8192 || (te & 16785408) === 16785408) && (Ms = { stylesheets: null, count: 0, unsuspend: Y_ }, ng(n), te = $_(), te !== null)) {
      e.cancelPendingCommit = te(
        gg.bind(
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
          J,
          1,
          Z,
          G
        )
      ), Zr(e, g, w, !q);
      return;
    }
    gg(
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
  function d_(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var o = 0; o < a.length; o++) {
          var c = a[o], g = c.getSnapshot;
          c = c.value;
          try {
            if (!cn(g(), c)) return !1;
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
    n &= ~pf, n &= ~Ea, e.suspendedLanes |= n, e.pingedLanes &= ~n, o && (e.warmLanes |= n), o = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var g = 31 - Vt(c), w = 1 << g;
      o[g] = -1, c &= ~w;
    }
    a !== 0 && _h(e, a, n);
  }
  function al() {
    return (Qe & 6) === 0 ? (ws(0), !1) : !0;
  }
  function _f() {
    if (Be !== null) {
      if (Ke === 0)
        var e = Be.return;
      else
        e = Be, cr = va = null, Lc(e), fi = null, ms = 0, e = Be;
      for (; e !== null; )
        qm(e.alternate, e), e = e.return;
      Be = null;
    }
  }
  function bi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, D_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), _f(), at = e, Be = a = or(e.current, null), Ge = n, Ke = 0, pn = null, Ur = !1, mi = Jt(e, n), hf = !1, gi = Mn = pf = Ea = Hr = mt = 0, rn = Es = null, mf = !1, (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Vt(o), g = 1 << c;
        n |= e[c], o &= ~g;
      }
    return yr = n, Ao(), a;
  }
  function cg(e, n) {
    Pe = null, B.H = Go, n === ss || n === zo ? (n = Np(), Ke = 3) : n === Cp ? (n = Np(), Ke = 4) : Ke = n === Tm ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, pn = n, Be === null && (mt = 1, Qo(
      e,
      An(n, e.current)
    ));
  }
  function fg() {
    var e = B.H;
    return B.H = Go, e === null ? Go : e;
  }
  function dg() {
    var e = B.A;
    return B.A = c_, e;
  }
  function Sf() {
    mt = 4, Ur || (Ge & 4194048) !== Ge && Dn.current !== null || (mi = !0), (Hr & 134217727) === 0 && (Ea & 134217727) === 0 || at === null || Zr(
      at,
      Ge,
      Mn,
      !1
    );
  }
  function xf(e, n, a) {
    var o = Qe;
    Qe |= 2;
    var c = fg(), g = dg();
    (at !== e || Ge !== n) && (rl = null, bi(e, n)), n = !1;
    var w = mt;
    e: do
      try {
        if (Ke !== 0 && Be !== null) {
          var O = Be, j = pn;
          switch (Ke) {
            case 8:
              _f(), w = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Dn.current === null && (n = !0);
              var q = Ke;
              if (Ke = 0, pn = null, _i(e, O, j, q), a && mi) {
                w = 0;
                break e;
              }
              break;
            default:
              q = Ke, Ke = 0, pn = null, _i(e, O, j, q);
          }
        }
        h_(), w = mt;
        break;
      } catch (J) {
        cg(e, J);
      }
    while (!0);
    return n && e.shellSuspendCounter++, cr = va = null, Qe = o, B.H = c, B.A = g, Be === null && (at = null, Ge = 0, Ao()), w;
  }
  function h_() {
    for (; Be !== null; ) hg(Be);
  }
  function p_(e, n) {
    var a = Qe;
    Qe |= 2;
    var o = fg(), c = dg();
    at !== e || Ge !== n ? (rl = null, nl = F() + 500, bi(e, n)) : mi = Jt(
      e,
      n
    );
    e: do
      try {
        if (Ke !== 0 && Be !== null) {
          n = Be;
          var g = pn;
          t: switch (Ke) {
            case 1:
              Ke = 0, pn = null, _i(e, n, g, 1);
              break;
            case 2:
            case 9:
              if (wp(g)) {
                Ke = 0, pn = null, pg(n);
                break;
              }
              n = function() {
                Ke !== 2 && Ke !== 9 || at !== e || (Ke = 7), Wn(e);
              }, g.then(n, n);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              wp(g) ? (Ke = 0, pn = null, pg(n)) : (Ke = 0, pn = null, _i(e, n, g, 7));
              break;
            case 5:
              var w = null;
              switch (Be.tag) {
                case 26:
                  w = Be.memoizedState;
                case 5:
                case 27:
                  var O = Be;
                  if (!w || $g(w)) {
                    Ke = 0, pn = null;
                    var j = O.sibling;
                    if (j !== null) Be = j;
                    else {
                      var q = O.return;
                      q !== null ? (Be = q, il(q)) : Be = null;
                    }
                    break t;
                  }
              }
              Ke = 0, pn = null, _i(e, n, g, 5);
              break;
            case 6:
              Ke = 0, pn = null, _i(e, n, g, 6);
              break;
            case 8:
              _f(), mt = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        m_();
        break;
      } catch (J) {
        cg(e, J);
      }
    while (!0);
    return cr = va = null, B.H = o, B.A = c, Qe = a, Be !== null ? 0 : (at = null, Ge = 0, Ao(), mt);
  }
  function m_() {
    for (; Be !== null && !ie(); )
      hg(Be);
  }
  function hg(e) {
    var n = Um(e.alternate, e, yr);
    e.memoizedProps = e.pendingProps, n === null ? il(e) : Be = n;
  }
  function pg(e) {
    var n = e, a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Rm(
          a,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ge
        );
        break;
      case 11:
        n = Rm(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ge
        );
        break;
      case 5:
        Lc(n);
      default:
        qm(a, n), n = Be = mp(n, yr), n = Um(a, n, yr);
    }
    e.memoizedProps = e.pendingProps, n === null ? il(e) : Be = n;
  }
  function _i(e, n, a, o) {
    cr = va = null, Lc(n), fi = null, ms = 0;
    var c = n.return;
    try {
      if (a_(
        e,
        c,
        n,
        a,
        Ge
      )) {
        mt = 1, Qo(
          e,
          An(a, e.current)
        ), Be = null;
        return;
      }
    } catch (g) {
      if (c !== null) throw Be = c, g;
      mt = 1, Qo(
        e,
        An(a, e.current)
      ), Be = null;
      return;
    }
    n.flags & 32768 ? (Ye || o === 1 ? e = !0 : mi || (Ge & 536870912) !== 0 ? e = !1 : (Ur = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Dn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), mg(n, e)) : il(n);
  }
  function il(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        mg(
          n,
          Ur
        );
        return;
      }
      e = n.return;
      var a = s_(
        n.alternate,
        n,
        yr
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
    mt === 0 && (mt = 5);
  }
  function mg(e, n) {
    do {
      var a = o_(e.alternate, e);
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
    mt = 6, Be = null;
  }
  function gg(e, n, a, o, c, g, w, O, j) {
    e.cancelPendingCommit = null;
    do
      sl();
    while (zt !== 0);
    if ((Qe & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (g = n.lanes | n.childLanes, g |= fc, Y1(
        e,
        a,
        g,
        w,
        O,
        j
      ), e === at && (Be = at = null, Ge = 0), vi = n, Fr = e, yi = a, vf = g, yf = c, sg = o, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, b_(ce, function() {
        return Sg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || o) {
        o = B.T, B.T = null, c = ae.p, ae.p = 2, w = Qe, Qe |= 4;
        try {
          l_(e, n, a);
        } finally {
          Qe = w, ae.p = c, B.T = o;
        }
      }
      zt = 1, vg(), yg(), bg();
    }
  }
  function vg() {
    if (zt === 1) {
      zt = 0;
      var e = Fr, n = vi, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = B.T, B.T = null;
        var o = ae.p;
        ae.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          Wm(n, e);
          var g = Rf, w = ip(e.containerInfo), O = g.focusedElem, j = g.selectionRange;
          if (w !== O && O && O.ownerDocument && ap(
            O.ownerDocument.documentElement,
            O
          )) {
            if (j !== null && sc(O)) {
              var q = j.start, J = j.end;
              if (J === void 0 && (J = q), "selectionStart" in O)
                O.selectionStart = q, O.selectionEnd = Math.min(
                  J,
                  O.value.length
                );
              else {
                var te = O.ownerDocument || document, Z = te && te.defaultView || window;
                if (Z.getSelection) {
                  var G = Z.getSelection(), Oe = O.textContent.length, Ae = Math.min(j.start, Oe), tt = j.end === void 0 ? Ae : Math.min(j.end, Oe);
                  !G.extend && Ae > tt && (w = tt, tt = Ae, Ae = w);
                  var L = rp(
                    O,
                    Ae
                  ), z = rp(
                    O,
                    tt
                  );
                  if (L && z && (G.rangeCount !== 1 || G.anchorNode !== L.node || G.anchorOffset !== L.offset || G.focusNode !== z.node || G.focusOffset !== z.offset)) {
                    var H = te.createRange();
                    H.setStart(L.node, L.offset), G.removeAllRanges(), Ae > tt ? (G.addRange(H), G.extend(z.node, z.offset)) : (H.setEnd(z.node, z.offset), G.addRange(H));
                  }
                }
              }
            }
            for (te = [], G = O; G = G.parentNode; )
              G.nodeType === 1 && te.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof O.focus == "function" && O.focus(), O = 0; O < te.length; O++) {
              var W = te[O];
              W.element.scrollLeft = W.left, W.element.scrollTop = W.top;
            }
          }
          yl = !!jf, Rf = jf = null;
        } finally {
          Qe = c, ae.p = o, B.T = a;
        }
      }
      e.current = n, zt = 2;
    }
  }
  function yg() {
    if (zt === 2) {
      zt = 0;
      var e = Fr, n = vi, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = B.T, B.T = null;
        var o = ae.p;
        ae.p = 2;
        var c = Qe;
        Qe |= 4;
        try {
          $m(e, n.alternate, n);
        } finally {
          Qe = c, ae.p = o, B.T = a;
        }
      }
      zt = 3;
    }
  }
  function bg() {
    if (zt === 4 || zt === 3) {
      zt = 0, re();
      var e = Fr, n = vi, a = yi, o = sg;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? zt = 5 : (zt = 0, vi = Fr = null, _g(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (qr = null), Bu(a), n = n.stateNode, nt && typeof nt.onCommitFiberRoot == "function")
        try {
          nt.onCommitFiberRoot(
            ht,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = B.T, c = ae.p, ae.p = 2, B.T = null;
        try {
          for (var g = e.onRecoverableError, w = 0; w < o.length; w++) {
            var O = o[w];
            g(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          B.T = n, ae.p = c;
        }
      }
      (yi & 3) !== 0 && sl(), Wn(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === bf ? Cs++ : (Cs = 0, bf = e) : Cs = 0, ws(0);
    }
  }
  function _g(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, as(n)));
  }
  function sl(e) {
    return vg(), yg(), bg(), Sg();
  }
  function Sg() {
    if (zt !== 5) return !1;
    var e = Fr, n = vf;
    vf = 0;
    var a = Bu(yi), o = B.T, c = ae.p;
    try {
      ae.p = 32 > a ? 32 : a, B.T = null, a = yf, yf = null;
      var g = Fr, w = yi;
      if (zt = 0, vi = Fr = null, yi = 0, (Qe & 6) !== 0) throw Error(s(331));
      var O = Qe;
      if (Qe |= 4, ag(g.current), tg(
        g,
        g.current,
        w,
        a
      ), Qe = O, ws(0, !1), nt && typeof nt.onPostCommitFiberRoot == "function")
        try {
          nt.onPostCommitFiberRoot(ht, g);
        } catch {
        }
      return !0;
    } finally {
      ae.p = c, B.T = o, _g(e, n);
    }
  }
  function xg(e, n, a) {
    n = An(a, n), n = Qc(e.stateNode, n, 2), e = jr(e, n, 2), e !== null && (qi(e, 2), Wn(e));
  }
  function rt(e, n, a) {
    if (e.tag === 3)
      xg(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          xg(
            n,
            e,
            a
          );
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (qr === null || !qr.has(o))) {
            e = An(a, e), a = Am(2), o = jr(n, a, 2), o !== null && (Nm(
              a,
              o,
              n,
              e
            ), qi(o, 2), Wn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ef(e, n, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new f_();
      var c = /* @__PURE__ */ new Set();
      o.set(n, c);
    } else
      c = o.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(n, c));
    c.has(a) || (hf = !0, c.add(a), e = g_.bind(null, e, n, a), n.then(e, e));
  }
  function g_(e, n, a) {
    var o = e.pingCache;
    o !== null && o.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, at === e && (Ge & a) === a && (mt === 4 || mt === 3 && (Ge & 62914560) === Ge && 300 > F() - gf ? (Qe & 2) === 0 && bi(e, 0) : pf |= a, gi === Ge && (gi = 0)), Wn(e);
  }
  function Eg(e, n) {
    n === 0 && (n = bh()), e = ti(e, n), e !== null && (qi(e, n), Wn(e));
  }
  function v_(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), Eg(e, a);
  }
  function y_(e, n) {
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
    o !== null && o.delete(n), Eg(e, a);
  }
  function b_(e, n) {
    return It(e, n);
  }
  var ol = null, Si = null, Cf = !1, ll = !1, wf = !1, Ca = 0;
  function Wn(e) {
    e !== Si && e.next === null && (Si === null ? ol = Si = e : Si = Si.next = e), ll = !0, Cf || (Cf = !0, S_());
  }
  function ws(e, n) {
    if (!wf && ll) {
      wf = !0;
      do
        for (var a = !1, o = ol; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var g = 0;
            else {
              var w = o.suspendedLanes, O = o.pingedLanes;
              g = (1 << 31 - Vt(42 | e) + 1) - 1, g &= c & ~(w & ~O), g = g & 201326741 ? g & 201326741 | 1 : g ? g | 2 : 0;
            }
            g !== 0 && (a = !0, Ng(o, g));
          } else
            g = Ge, g = Yt(
              o,
              o === at ? g : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (g & 3) === 0 || Jt(o, g) || (a = !0, Ng(o, g));
          o = o.next;
        }
      while (a);
      wf = !1;
    }
  }
  function __() {
    Cg();
  }
  function Cg() {
    ll = Cf = !1;
    var e = 0;
    Ca !== 0 && (O_() && (e = Ca), Ca = 0);
    for (var n = F(), a = null, o = ol; o !== null; ) {
      var c = o.next, g = wg(o, n);
      g === 0 ? (o.next = null, a === null ? ol = c : a.next = c, c === null && (Si = a)) : (a = o, (e !== 0 || (g & 3) !== 0) && (ll = !0)), o = c;
    }
    ws(e);
  }
  function wg(e, n) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, g = e.pendingLanes & -62914561; 0 < g; ) {
      var w = 31 - Vt(g), O = 1 << w, j = c[w];
      j === -1 ? ((O & a) === 0 || (O & o) !== 0) && (c[w] = po(O, n)) : j <= n && (e.expiredLanes |= O), g &= ~O;
    }
    if (n = at, a = Ge, a = Yt(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, a === 0 || e === n && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && U(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Jt(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (o !== null && U(o), Bu(a)) {
        case 2:
        case 8:
          a = K;
          break;
        case 32:
          a = ce;
          break;
        case 268435456:
          a = ve;
          break;
        default:
          a = ce;
      }
      return o = Ag.bind(null, e), a = It(a, o), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return o !== null && o !== null && U(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ag(e, n) {
    if (zt !== 0 && zt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (sl() && e.callbackNode !== a)
      return null;
    var o = Ge;
    return o = Yt(
      e,
      e === at ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (lg(e, o, n), wg(e, F()), e.callbackNode != null && e.callbackNode === a ? Ag.bind(null, e) : null);
  }
  function Ng(e, n) {
    if (sl()) return null;
    lg(e, n, !0);
  }
  function S_() {
    M_(function() {
      (Qe & 6) !== 0 ? It(
        he,
        __
      ) : Cg();
    });
  }
  function Af() {
    return Ca === 0 && (Ca = Ua()), Ca;
  }
  function Tg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : bo("" + e);
  }
  function Og(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function x_(e, n, a, o, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var g = Tg(
        (c[Wt] || null).action
      ), w = o.submitter;
      w && (n = (n = w[Wt] || null) ? Tg(n.formAction) : w.getAttribute("formAction"), n !== null && (g = n, w = null));
      var O = new Eo(
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
                  var j = w ? Og(c, w) : new FormData(c);
                  Gc(
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
                typeof g == "function" && (O.preventDefault(), j = w ? Og(c, w) : new FormData(c), Gc(
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
  for (var Nf = 0; Nf < cc.length; Nf++) {
    var Tf = cc[Nf], E_ = Tf.toLowerCase(), C_ = Tf[0].toUpperCase() + Tf.slice(1);
    In(
      E_,
      "on" + C_
    );
  }
  In(lp, "onAnimationEnd"), In(up, "onAnimationIteration"), In(cp, "onAnimationStart"), In("dblclick", "onDoubleClick"), In("focusin", "onFocus"), In("focusout", "onBlur"), In(Hb, "onTransitionRun"), In(qb, "onTransitionStart"), In(Fb, "onTransitionCancel"), In(fp, "onTransitionEnd"), Ga("onMouseEnter", ["mouseout", "mouseover"]), Ga("onMouseLeave", ["mouseout", "mouseover"]), Ga("onPointerEnter", ["pointerout", "pointerover"]), Ga("onPointerLeave", ["pointerout", "pointerover"]), la(
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
  var As = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), w_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(As)
  );
  function Dg(e, n) {
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
            } catch (J) {
              $o(J);
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
            } catch (J) {
              $o(J);
            }
            c.currentTarget = null, g = j;
          }
      }
    }
  }
  function Ue(e, n) {
    var a = n[Uu];
    a === void 0 && (a = n[Uu] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (Mg(n, e, 2, !1), a.add(o));
  }
  function Of(e, n, a) {
    var o = 0;
    n && (o |= 4), Mg(
      a,
      e,
      o,
      n
    );
  }
  var ul = "_reactListening" + Math.random().toString(36).slice(2);
  function Df(e) {
    if (!e[ul]) {
      e[ul] = !0, Ch.forEach(function(a) {
        a !== "selectionchange" && (w_.has(a) || Of(a, !1, e), Of(a, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[ul] || (n[ul] = !0, Of("selectionchange", !1, n));
    }
  }
  function Mg(e, n, a, o) {
    switch (tv(n)) {
      case 2:
        var c = J_;
        break;
      case 8:
        c = W_;
        break;
      default:
        c = Zf;
    }
    a = c.bind(
      null,
      n,
      a,
      e
    ), c = void 0, !Ku || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), o ? c !== void 0 ? e.addEventListener(n, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, a, !0) : c !== void 0 ? e.addEventListener(n, a, {
      passive: c
    }) : e.addEventListener(n, a, !1);
  }
  function Mf(e, n, a, o, c) {
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
            if (w = qa(O), w === null) return;
            if (j = w.tag, j === 5 || j === 6 || j === 26 || j === 27) {
              o = g = w;
              continue e;
            }
            O = O.parentNode;
          }
        }
        o = o.return;
      }
    Ih(function() {
      var q = g, J = $u(a), te = [];
      e: {
        var Z = dp.get(e);
        if (Z !== void 0) {
          var G = Eo, Oe = e;
          switch (e) {
            case "keypress":
              if (So(a) === 0) break e;
            case "keydown":
            case "keyup":
              G = bb;
              break;
            case "focusin":
              Oe = "focus", G = tc;
              break;
            case "focusout":
              Oe = "blur", G = tc;
              break;
            case "beforeblur":
            case "afterblur":
              G = tc;
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
              G = Hh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = ob;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = xb;
              break;
            case lp:
            case up:
            case cp:
              G = cb;
              break;
            case fp:
              G = Cb;
              break;
            case "scroll":
            case "scrollend":
              G = ib;
              break;
            case "wheel":
              G = Ab;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = db;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Fh;
              break;
            case "toggle":
            case "beforetoggle":
              G = Tb;
          }
          var Ae = (n & 4) !== 0, tt = !Ae && (e === "scroll" || e === "scrollend"), L = Ae ? Z !== null ? Z + "Capture" : null : Z;
          Ae = [];
          for (var z = q, H; z !== null; ) {
            var W = z;
            if (H = W.stateNode, W = W.tag, W !== 5 && W !== 26 && W !== 27 || H === null || L === null || (W = Gi(z, L), W != null && Ae.push(
              Ns(z, W, H)
            )), tt) break;
            z = z.return;
          }
          0 < Ae.length && (Z = new G(
            Z,
            Oe,
            null,
            a,
            J
          ), te.push({ event: Z, listeners: Ae }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Z = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", Z && a !== Xu && (Oe = a.relatedTarget || a.fromElement) && (qa(Oe) || Oe[Ha]))
            break e;
          if ((G || Z) && (Z = J.window === J ? J : (Z = J.ownerDocument) ? Z.defaultView || Z.parentWindow : window, G ? (Oe = a.relatedTarget || a.toElement, G = q, Oe = Oe ? qa(Oe) : null, Oe !== null && (tt = u(Oe), Ae = Oe.tag, Oe !== tt || Ae !== 5 && Ae !== 27 && Ae !== 6) && (Oe = null)) : (G = null, Oe = q), G !== Oe)) {
            if (Ae = Hh, W = "onMouseLeave", L = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Ae = Fh, W = "onPointerLeave", L = "onPointerEnter", z = "pointer"), tt = G == null ? Z : Zi(G), H = Oe == null ? Z : Zi(Oe), Z = new Ae(
              W,
              z + "leave",
              G,
              a,
              J
            ), Z.target = tt, Z.relatedTarget = H, W = null, qa(J) === q && (Ae = new Ae(
              L,
              z + "enter",
              Oe,
              a,
              J
            ), Ae.target = H, Ae.relatedTarget = tt, W = Ae), tt = W, G && Oe)
              t: {
                for (Ae = G, L = Oe, z = 0, H = Ae; H; H = xi(H))
                  z++;
                for (H = 0, W = L; W; W = xi(W))
                  H++;
                for (; 0 < z - H; )
                  Ae = xi(Ae), z--;
                for (; 0 < H - z; )
                  L = xi(L), H--;
                for (; z--; ) {
                  if (Ae === L || L !== null && Ae === L.alternate)
                    break t;
                  Ae = xi(Ae), L = xi(L);
                }
                Ae = null;
              }
            else Ae = null;
            G !== null && kg(
              te,
              Z,
              G,
              Ae,
              !1
            ), Oe !== null && tt !== null && kg(
              te,
              tt,
              Oe,
              Ae,
              !0
            );
          }
        }
        e: {
          if (Z = q ? Zi(q) : window, G = Z.nodeName && Z.nodeName.toLowerCase(), G === "select" || G === "input" && Z.type === "file")
            var ye = Kh;
          else if ($h(Z))
            if (Jh)
              ye = Ib;
            else {
              ye = Lb;
              var Ie = zb;
            }
          else
            G = Z.nodeName, !G || G.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? q && Yu(q.elementType) && (ye = Kh) : ye = Pb;
          if (ye && (ye = ye(e, q))) {
            Qh(
              te,
              ye,
              a,
              J
            );
            break e;
          }
          Ie && Ie(e, Z, q), e === "focusout" && q && Z.type === "number" && q.memoizedProps.value != null && Vu(Z, "number", Z.value);
        }
        switch (Ie = q ? Zi(q) : window, e) {
          case "focusin":
            ($h(Ie) || Ie.contentEditable === "true") && (Ja = Ie, oc = q, Wi = null);
            break;
          case "focusout":
            Wi = oc = Ja = null;
            break;
          case "mousedown":
            lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lc = !1, sp(te, a, J);
            break;
          case "selectionchange":
            if (Ub) break;
          case "keydown":
          case "keyup":
            sp(te, a, J);
        }
        var Ee;
        if (rc)
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
          Ka ? Yh(e, a) && (Ne = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ne = "onCompositionStart");
        Ne && (Zh && a.locale !== "ko" && (Ka || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && Ka && (Ee = Bh()) : (Or = J, Ju = "value" in Or ? Or.value : Or.textContent, Ka = !0)), Ie = cl(q, Ne), 0 < Ie.length && (Ne = new qh(
          Ne,
          e,
          null,
          a,
          J
        ), te.push({ event: Ne, listeners: Ie }), Ee ? Ne.data = Ee : (Ee = Xh(a), Ee !== null && (Ne.data = Ee)))), (Ee = Db ? Mb(e, a) : kb(e, a)) && (Ne = cl(q, "onBeforeInput"), 0 < Ne.length && (Ie = new qh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          J
        ), te.push({
          event: Ie,
          listeners: Ne
        }), Ie.data = Ee)), x_(
          te,
          e,
          q,
          a,
          J
        );
      }
      Dg(te, n);
    });
  }
  function Ns(e, n, a) {
    return {
      instance: e,
      listener: n,
      currentTarget: a
    };
  }
  function cl(e, n) {
    for (var a = n + "Capture", o = []; e !== null; ) {
      var c = e, g = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || g === null || (c = Gi(e, a), c != null && o.unshift(
        Ns(e, c, g)
      ), c = Gi(e, n), c != null && o.push(
        Ns(e, c, g)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function xi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function kg(e, n, a, o, c) {
    for (var g = n._reactName, w = []; a !== null && a !== o; ) {
      var O = a, j = O.alternate, q = O.stateNode;
      if (O = O.tag, j !== null && j === o) break;
      O !== 5 && O !== 26 && O !== 27 || q === null || (j = q, c ? (q = Gi(a, g), q != null && w.unshift(
        Ns(a, q, j)
      )) : c || (q = Gi(a, g), q != null && w.push(
        Ns(a, q, j)
      ))), a = a.return;
    }
    w.length !== 0 && e.push({ event: n, listeners: w });
  }
  var A_ = /\r\n?/g, N_ = /\u0000|\uFFFD/g;
  function jg(e) {
    return (typeof e == "string" ? e : "" + e).replace(A_, `
`).replace(N_, "");
  }
  function Rg(e, n) {
    return n = jg(n), jg(e) === n;
  }
  function fl() {
  }
  function et(e, n, a, o, c, g) {
    switch (a) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || Xa(e, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && Xa(e, "" + o);
        break;
      case "className":
        go(e, "class", o);
        break;
      case "tabIndex":
        go(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        go(e, a, o);
        break;
      case "style":
        Lh(e, o, g);
        break;
      case "data":
        if (n !== "object") {
          go(e, "data", o);
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
        o = bo("" + o), e.setAttribute(a, o);
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
          typeof g == "function" && (a === "formAction" ? (n !== "input" && et(e, n, "name", c.name, c, null), et(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), et(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), et(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (et(e, n, "encType", c.encType, c, null), et(e, n, "method", c.method, c, null), et(e, n, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = bo("" + o), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = fl);
        break;
      case "onScroll":
        o != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ue("scrollend", e);
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
        a = bo("" + o), e.setAttributeNS(
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
        Ue("beforetoggle", e), Ue("toggle", e), mo(e, "popover", o);
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
        mo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = rb.get(a) || a, mo(e, a, o));
    }
  }
  function kf(e, n, a, o, c, g) {
    switch (a) {
      case "style":
        Lh(e, o, g);
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
        typeof o == "string" ? Xa(e, o) : (typeof o == "number" || typeof o == "bigint") && Xa(e, "" + o);
        break;
      case "onScroll":
        o != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ue("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = fl);
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
        if (!wh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), g = e[Wt] || null, g = g != null ? g[a] : null, typeof g == "function" && e.removeEventListener(n, g, c), typeof o == "function")) {
              typeof g != "function" && g !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, o, c);
              break e;
            }
            a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : mo(e, a, o);
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
                  et(e, n, g, w, a, null);
              }
          }
        c && et(e, n, "srcSet", a.srcSet, a, null), o && et(e, n, "src", a.src, a, null);
        return;
      case "input":
        Ue("invalid", e);
        var O = g = w = c = null, j = null, q = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var J = a[o];
            if (J != null)
              switch (o) {
                case "name":
                  c = J;
                  break;
                case "type":
                  w = J;
                  break;
                case "checked":
                  j = J;
                  break;
                case "defaultChecked":
                  q = J;
                  break;
                case "value":
                  g = J;
                  break;
                case "defaultValue":
                  O = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null)
                    throw Error(s(137, n));
                  break;
                default:
                  et(e, n, o, J, a, null);
              }
          }
        kh(
          e,
          g,
          O,
          j,
          q,
          w,
          c,
          !1
        ), vo(e);
        return;
      case "select":
        Ue("invalid", e), o = w = g = null;
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
                et(e, n, c, O, a, null);
            }
        n = g, a = w, e.multiple = !!o, n != null ? Ya(e, !!o, n, !1) : a != null && Ya(e, !!o, a, !0);
        return;
      case "textarea":
        Ue("invalid", e), g = c = o = null;
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
                et(e, n, w, O, a, null);
            }
        Rh(e, o, c, g), vo(e);
        return;
      case "option":
        for (j in a)
          if (a.hasOwnProperty(j) && (o = a[j], o != null))
            switch (j) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                et(e, n, j, o, a, null);
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
        for (o = 0; o < As.length; o++)
          Ue(As[o], e);
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
          if (a.hasOwnProperty(q) && (o = a[q], o != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                et(e, n, q, o, a, null);
            }
        return;
      default:
        if (Yu(n)) {
          for (J in a)
            a.hasOwnProperty(J) && (o = a[J], o !== void 0 && kf(
              e,
              n,
              J,
              o,
              a,
              void 0
            ));
          return;
        }
    }
    for (O in a)
      a.hasOwnProperty(O) && (o = a[O], o != null && et(e, n, O, o, a, null));
  }
  function T_(e, n, a, o) {
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
        var c = null, g = null, w = null, O = null, j = null, q = null, J = null;
        for (G in a) {
          var te = a[G];
          if (a.hasOwnProperty(G) && te != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                j = te;
              default:
                o.hasOwnProperty(G) || et(e, n, G, null, o, te);
            }
        }
        for (var Z in o) {
          var G = o[Z];
          if (te = a[Z], o.hasOwnProperty(Z) && (G != null || te != null))
            switch (Z) {
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
                J = G;
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
                G !== te && et(
                  e,
                  n,
                  Z,
                  G,
                  o,
                  te
                );
            }
        }
        Gu(
          e,
          w,
          O,
          j,
          q,
          J,
          g,
          c
        );
        return;
      case "select":
        G = w = O = Z = null;
        for (g in a)
          if (j = a[g], a.hasOwnProperty(g) && j != null)
            switch (g) {
              case "value":
                break;
              case "multiple":
                G = j;
              default:
                o.hasOwnProperty(g) || et(
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
                Z = g;
                break;
              case "defaultValue":
                O = g;
                break;
              case "multiple":
                w = g;
              default:
                g !== j && et(
                  e,
                  n,
                  c,
                  g,
                  o,
                  j
                );
            }
        n = O, a = w, o = G, Z != null ? Ya(e, !!a, Z, !1) : !!o != !!a && (n != null ? Ya(e, !!a, n, !0) : Ya(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        G = Z = null;
        for (O in a)
          if (c = a[O], a.hasOwnProperty(O) && c != null && !o.hasOwnProperty(O))
            switch (O) {
              case "value":
                break;
              case "children":
                break;
              default:
                et(e, n, O, null, o, c);
            }
        for (w in o)
          if (c = o[w], g = a[w], o.hasOwnProperty(w) && (c != null || g != null))
            switch (w) {
              case "value":
                Z = c;
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
                c !== g && et(e, n, w, c, o, g);
            }
        jh(e, Z, G);
        return;
      case "option":
        for (var Oe in a)
          if (Z = a[Oe], a.hasOwnProperty(Oe) && Z != null && !o.hasOwnProperty(Oe))
            switch (Oe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                et(
                  e,
                  n,
                  Oe,
                  null,
                  o,
                  Z
                );
            }
        for (j in o)
          if (Z = o[j], G = a[j], o.hasOwnProperty(j) && Z !== G && (Z != null || G != null))
            switch (j) {
              case "selected":
                e.selected = Z && typeof Z != "function" && typeof Z != "symbol";
                break;
              default:
                et(
                  e,
                  n,
                  j,
                  Z,
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
        for (var Ae in a)
          Z = a[Ae], a.hasOwnProperty(Ae) && Z != null && !o.hasOwnProperty(Ae) && et(e, n, Ae, null, o, Z);
        for (q in o)
          if (Z = o[q], G = a[q], o.hasOwnProperty(q) && Z !== G && (Z != null || G != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, n));
                break;
              default:
                et(
                  e,
                  n,
                  q,
                  Z,
                  o,
                  G
                );
            }
        return;
      default:
        if (Yu(n)) {
          for (var tt in a)
            Z = a[tt], a.hasOwnProperty(tt) && Z !== void 0 && !o.hasOwnProperty(tt) && kf(
              e,
              n,
              tt,
              void 0,
              o,
              Z
            );
          for (J in o)
            Z = o[J], G = a[J], !o.hasOwnProperty(J) || Z === G || Z === void 0 && G === void 0 || kf(
              e,
              n,
              J,
              Z,
              o,
              G
            );
          return;
        }
    }
    for (var L in a)
      Z = a[L], a.hasOwnProperty(L) && Z != null && !o.hasOwnProperty(L) && et(e, n, L, null, o, Z);
    for (te in o)
      Z = o[te], G = a[te], !o.hasOwnProperty(te) || Z === G || Z == null && G == null || et(e, n, te, Z, o, G);
  }
  var jf = null, Rf = null;
  function dl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function zg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Lg(e, n) {
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
  function zf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Lf = null;
  function O_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Lf ? !1 : (Lf = e, !0) : (Lf = null, !1);
  }
  var Pg = typeof setTimeout == "function" ? setTimeout : void 0, D_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Ig = typeof Promise == "function" ? Promise : void 0, M_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ig < "u" ? function(e) {
    return Ig.resolve(null).then(e).catch(k_);
  } : Pg;
  function k_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Gr(e) {
    return e === "head";
  }
  function Bg(e, n) {
    var a = n, o = 0, c = 0;
    do {
      var g = a.nextSibling;
      if (e.removeChild(a), g && g.nodeType === 8)
        if (a = g.data, a === "/$") {
          if (0 < o && 8 > o) {
            a = o;
            var w = e.ownerDocument;
            if (a & 1 && Ts(w.documentElement), a & 2 && Ts(w.body), a & 4)
              for (a = w.head, Ts(a), w = a.firstChild; w; ) {
                var O = w.nextSibling, j = w.nodeName;
                w[Fi] || j === "SCRIPT" || j === "STYLE" || j === "LINK" && w.rel.toLowerCase() === "stylesheet" || a.removeChild(w), w = O;
              }
          }
          if (c === 0) {
            e.removeChild(g), Ls(n);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!" ? c++ : o = a.charCodeAt(0) - 48;
      else o = 0;
      a = g;
    } while (a);
    Ls(n);
  }
  function Pf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Pf(a), Hu(a);
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
  function j_(e, n, a, o) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Fi])
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
      if (e = Un(e.nextSibling), e === null) break;
    }
    return null;
  }
  function R_(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Un(e.nextSibling), e === null)) return null;
    return e;
  }
  function If(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function z_(e, n) {
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
  function Un(e) {
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
  var Bf = null;
  function Ug(e) {
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
  function Hg(e, n, a) {
    switch (n = dl(a), e) {
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
  function Ts(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Hu(e);
  }
  var kn = /* @__PURE__ */ new Map(), qg = /* @__PURE__ */ new Set();
  function hl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var br = ae.d;
  ae.d = {
    f: L_,
    r: P_,
    D: I_,
    C: B_,
    L: U_,
    m: H_,
    X: F_,
    S: q_,
    M: Z_
  };
  function L_() {
    var e = br.f(), n = al();
    return e || n;
  }
  function P_(e) {
    var n = Fa(e);
    n !== null && n.tag === 5 && n.type === "form" ? lm(n) : br.r(e);
  }
  var Ei = typeof document > "u" ? null : document;
  function Fg(e, n, a) {
    var o = Ei;
    if (o && typeof n == "string" && n) {
      var c = wn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), qg.has(c) || (qg.add(c), e = { rel: e, crossOrigin: a, href: n }, o.querySelector(c) === null && (n = o.createElement("link"), Lt(n, "link", e), Dt(n), o.head.appendChild(n)));
    }
  }
  function I_(e) {
    br.D(e), Fg("dns-prefetch", e, null);
  }
  function B_(e, n) {
    br.C(e, n), Fg("preconnect", e, n);
  }
  function U_(e, n, a) {
    br.L(e, n, a);
    var o = Ei;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + wn(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + wn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + wn(
        a.imageSizes
      ) + '"]')) : c += '[href="' + wn(e) + '"]';
      var g = c;
      switch (n) {
        case "style":
          g = Ci(e);
          break;
        case "script":
          g = wi(e);
      }
      kn.has(g) || (e = y(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), kn.set(g, e), o.querySelector(c) !== null || n === "style" && o.querySelector(Os(g)) || n === "script" && o.querySelector(Ds(g)) || (n = o.createElement("link"), Lt(n, "link", e), Dt(n), o.head.appendChild(n)));
    }
  }
  function H_(e, n) {
    br.m(e, n);
    var a = Ei;
    if (a && e) {
      var o = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + wn(o) + '"][href="' + wn(e) + '"]', g = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = wi(e);
      }
      if (!kn.has(g) && (e = y({ rel: "modulepreload", href: e }, n), kn.set(g, e), a.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ds(g)))
              return;
        }
        o = a.createElement("link"), Lt(o, "link", e), Dt(o), a.head.appendChild(o);
      }
    }
  }
  function q_(e, n, a) {
    br.S(e, n, a);
    var o = Ei;
    if (o && e) {
      var c = Za(o).hoistableStyles, g = Ci(e);
      n = n || "default";
      var w = c.get(g);
      if (!w) {
        var O = { loading: 0, preload: null };
        if (w = o.querySelector(
          Os(g)
        ))
          O.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = kn.get(g)) && Uf(e, a);
          var j = w = o.createElement("link");
          Dt(j), Lt(j, "link", e), j._p = new Promise(function(q, J) {
            j.onload = q, j.onerror = J;
          }), j.addEventListener("load", function() {
            O.loading |= 1;
          }), j.addEventListener("error", function() {
            O.loading |= 2;
          }), O.loading |= 4, pl(w, n, o);
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
  function F_(e, n) {
    br.X(e, n);
    var a = Ei;
    if (a && e) {
      var o = Za(a).hoistableScripts, c = wi(e), g = o.get(c);
      g || (g = a.querySelector(Ds(c)), g || (e = y({ src: e, async: !0 }, n), (n = kn.get(c)) && Hf(e, n), g = a.createElement("script"), Dt(g), Lt(g, "link", e), a.head.appendChild(g)), g = {
        type: "script",
        instance: g,
        count: 1,
        state: null
      }, o.set(c, g));
    }
  }
  function Z_(e, n) {
    br.M(e, n);
    var a = Ei;
    if (a && e) {
      var o = Za(a).hoistableScripts, c = wi(e), g = o.get(c);
      g || (g = a.querySelector(Ds(c)), g || (e = y({ src: e, async: !0, type: "module" }, n), (n = kn.get(c)) && Hf(e, n), g = a.createElement("script"), Dt(g), Lt(g, "link", e), a.head.appendChild(g)), g = {
        type: "script",
        instance: g,
        count: 1,
        state: null
      }, o.set(c, g));
    }
  }
  function Zg(e, n, a, o) {
    var c = (c = $.current) ? hl(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (n = Ci(a.href), a = Za(
          c
        ).hoistableStyles, o = a.get(n), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Ci(a.href);
          var g = Za(
            c
          ).hoistableStyles, w = g.get(e);
          if (w || (c = c.ownerDocument || c, w = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, g.set(e, w), (g = c.querySelector(
            Os(e)
          )) && !g._p && (w.instance = g, w.state.loading = 5), kn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, kn.set(e, a), g || G_(
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
        return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = wi(a), a = Za(
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
  function Ci(e) {
    return 'href="' + wn(e) + '"';
  }
  function Os(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Gg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function G_(e, n, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = e.createElement("link"), o.preload = n, n.addEventListener("load", function() {
      return o.loading |= 1;
    }), n.addEventListener("error", function() {
      return o.loading |= 2;
    }), Lt(n, "link", a), Dt(n), e.head.appendChild(n));
  }
  function wi(e) {
    return '[src="' + wn(e) + '"]';
  }
  function Ds(e) {
    return "script[async]" + e;
  }
  function Vg(e, n, a) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + wn(a.href) + '"]'
          );
          if (o)
            return n.instance = o, Dt(o), o;
          var c = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), Dt(o), Lt(o, "style", c), pl(o, a.precedence, e), n.instance = o;
        case "stylesheet":
          c = Ci(a.href);
          var g = e.querySelector(
            Os(c)
          );
          if (g)
            return n.state.loading |= 4, n.instance = g, Dt(g), g;
          o = Gg(a), (c = kn.get(c)) && Uf(o, c), g = (e.ownerDocument || e).createElement("link"), Dt(g);
          var w = g;
          return w._p = new Promise(function(O, j) {
            w.onload = O, w.onerror = j;
          }), Lt(g, "link", o), n.state.loading |= 4, pl(g, a.precedence, e), n.instance = g;
        case "script":
          return g = wi(a.src), (c = e.querySelector(
            Ds(g)
          )) ? (n.instance = c, Dt(c), c) : (o = a, (c = kn.get(g)) && (o = y({}, a), Hf(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), Dt(c), Lt(c, "link", o), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance, n.state.loading |= 4, pl(o, a.precedence, e));
    return n.instance;
  }
  function pl(e, n, a) {
    for (var o = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = o.length ? o[o.length - 1] : null, g = c, w = 0; w < o.length; w++) {
      var O = o[w];
      if (O.dataset.precedence === n) g = O;
      else if (g !== c) break;
    }
    g ? g.parentNode.insertBefore(e, g.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function Uf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Hf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var ml = null;
  function Yg(e, n, a) {
    if (ml === null) {
      var o = /* @__PURE__ */ new Map(), c = ml = /* @__PURE__ */ new Map();
      c.set(a, o);
    } else
      c = ml, o = c.get(a), o || (o = /* @__PURE__ */ new Map(), c.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var g = a[c];
      if (!(g[Fi] || g[Bt] || e === "link" && g.getAttribute("rel") === "stylesheet") && g.namespaceURI !== "http://www.w3.org/2000/svg") {
        var w = g.getAttribute(n) || "";
        w = e + w;
        var O = o.get(w);
        O ? O.push(g) : o.set(w, [g]);
      }
    }
    return o;
  }
  function Xg(e, n, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function V_(e, n, a) {
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
  function $g(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ms = null;
  function Y_() {
  }
  function X_(e, n, a) {
    if (Ms === null) throw Error(s(475));
    var o = Ms;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = Ci(a.href), g = e.querySelector(
          Os(c)
        );
        if (g) {
          e = g._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = gl.bind(o), e.then(o, o)), n.state.loading |= 4, n.instance = g, Dt(g);
          return;
        }
        g = e.ownerDocument || e, a = Gg(a), (c = kn.get(c)) && Uf(a, c), g = g.createElement("link"), Dt(g);
        var w = g;
        w._p = new Promise(function(O, j) {
          w.onload = O, w.onerror = j;
        }), Lt(g, "link", a), n.instance = g;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++, n = gl.bind(o), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function $_() {
    if (Ms === null) throw Error(s(475));
    var e = Ms;
    return e.stylesheets && e.count === 0 && qf(e, e.stylesheets), 0 < e.count ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && qf(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function gl() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) qf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var vl = null;
  function qf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, vl = /* @__PURE__ */ new Map(), n.forEach(Q_, e), vl = null, gl.call(e));
  }
  function Q_(e, n) {
    if (!(n.state.loading & 4)) {
      var a = vl.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), vl.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), g = 0; g < c.length; g++) {
          var w = c[g];
          (w.nodeName === "LINK" || w.getAttribute("media") !== "not all") && (a.set(w.dataset.precedence, w), o = w);
        }
        o && a.set(null, o);
      }
      c = n.instance, w = c.getAttribute("data-precedence"), g = a.get(w) || o, g === o && a.set(null, c), a.set(w, c), this.count++, o = gl.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), g ? g.parentNode.insertBefore(c, g.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var ks = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: ge,
    _currentValue2: ge,
    _threadCount: 0
  };
  function K_(e, n, a, o, c, g, w, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pu(0), this.hiddenUpdates = Pu(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = g, this.onRecoverableError = w, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Qg(e, n, a, o, c, g, w, O, j, q, J, te) {
    return e = new K_(
      e,
      n,
      a,
      w,
      O,
      j,
      q,
      te
    ), n = 1, g === !0 && (n |= 24), g = fn(3, null, null, n), e.current = g, g.stateNode = e, n = xc(), n.refCount++, e.pooledCache = n, n.refCount++, g.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: n
    }, Ac(g), e;
  }
  function Kg(e) {
    return e ? (e = ni, e) : ni;
  }
  function Jg(e, n, a, o, c, g) {
    c = Kg(c), o.context === null ? o.context = c : o.pendingContext = c, o = kr(n), o.payload = { element: a }, g = g === void 0 ? null : g, g !== null && (o.callback = g), a = jr(e, o, n), a !== null && (gn(a, e, n), ls(a, e, n));
  }
  function Wg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Ff(e, n) {
    Wg(e, n), (e = e.alternate) && Wg(e, n);
  }
  function ev(e) {
    if (e.tag === 13) {
      var n = ti(e, 67108864);
      n !== null && gn(n, e, 67108864), Ff(e, 67108864);
    }
  }
  var yl = !0;
  function J_(e, n, a, o) {
    var c = B.T;
    B.T = null;
    var g = ae.p;
    try {
      ae.p = 2, Zf(e, n, a, o);
    } finally {
      ae.p = g, B.T = c;
    }
  }
  function W_(e, n, a, o) {
    var c = B.T;
    B.T = null;
    var g = ae.p;
    try {
      ae.p = 8, Zf(e, n, a, o);
    } finally {
      ae.p = g, B.T = c;
    }
  }
  function Zf(e, n, a, o) {
    if (yl) {
      var c = Gf(o);
      if (c === null)
        Mf(
          e,
          n,
          o,
          bl,
          a
        ), nv(e, o);
      else if (t2(
        c,
        e,
        n,
        a,
        o
      ))
        o.stopPropagation();
      else if (nv(e, o), n & 4 && -1 < e2.indexOf(e)) {
        for (; c !== null; ) {
          var g = Fa(c);
          if (g !== null)
            switch (g.tag) {
              case 3:
                if (g = g.stateNode, g.current.memoizedState.isDehydrated) {
                  var w = En(g.pendingLanes);
                  if (w !== 0) {
                    var O = g;
                    for (O.pendingLanes |= 2, O.entangledLanes |= 2; w; ) {
                      var j = 1 << 31 - Vt(w);
                      O.entanglements[1] |= j, w &= ~j;
                    }
                    Wn(g), (Qe & 6) === 0 && (nl = F() + 500, ws(0));
                  }
                }
                break;
              case 13:
                O = ti(g, 2), O !== null && gn(O, g, 2), al(), Ff(g, 2);
            }
          if (g = Gf(o), g === null && Mf(
            e,
            n,
            o,
            bl,
            a
          ), g === c) break;
          c = g;
        }
        c !== null && o.stopPropagation();
      } else
        Mf(
          e,
          n,
          o,
          null,
          a
        );
    }
  }
  function Gf(e) {
    return e = $u(e), Vf(e);
  }
  var bl = null;
  function Vf(e) {
    if (bl = null, e = qa(e), e !== null) {
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
    return bl = e, null;
  }
  function tv(e) {
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
        switch (se()) {
          case he:
            return 2;
          case K:
            return 8;
          case ce:
          case _e:
            return 32;
          case ve:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yf = !1, Vr = null, Yr = null, Xr = null, js = /* @__PURE__ */ new Map(), Rs = /* @__PURE__ */ new Map(), $r = [], e2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function nv(e, n) {
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
        js.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rs.delete(n.pointerId);
    }
  }
  function zs(e, n, a, o, c, g) {
    return e === null || e.nativeEvent !== g ? (e = {
      blockedOn: n,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: g,
      targetContainers: [c]
    }, n !== null && (n = Fa(n), n !== null && ev(n)), e) : (e.eventSystemFlags |= o, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function t2(e, n, a, o, c) {
    switch (n) {
      case "focusin":
        return Vr = zs(
          Vr,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "dragenter":
        return Yr = zs(
          Yr,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "mouseover":
        return Xr = zs(
          Xr,
          e,
          n,
          a,
          o,
          c
        ), !0;
      case "pointerover":
        var g = c.pointerId;
        return js.set(
          g,
          zs(
            js.get(g) || null,
            e,
            n,
            a,
            o,
            c
          )
        ), !0;
      case "gotpointercapture":
        return g = c.pointerId, Rs.set(
          g,
          zs(
            Rs.get(g) || null,
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
  function rv(e) {
    var n = qa(e.target);
    if (n !== null) {
      var a = u(n);
      if (a !== null) {
        if (n = a.tag, n === 13) {
          if (n = f(a), n !== null) {
            e.blockedOn = n, X1(e.priority, function() {
              if (a.tag === 13) {
                var o = mn();
                o = Iu(o);
                var c = ti(a, o);
                c !== null && gn(c, a, o), Ff(a, o);
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
  function _l(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = Gf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(
          a.type,
          a
        );
        Xu = o, a.target.dispatchEvent(o), Xu = null;
      } else
        return n = Fa(a), n !== null && ev(n), e.blockedOn = a, !1;
      n.shift();
    }
    return !0;
  }
  function av(e, n, a) {
    _l(e) && a.delete(n);
  }
  function n2() {
    Yf = !1, Vr !== null && _l(Vr) && (Vr = null), Yr !== null && _l(Yr) && (Yr = null), Xr !== null && _l(Xr) && (Xr = null), js.forEach(av), Rs.forEach(av);
  }
  function Sl(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Yf || (Yf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      n2
    )));
  }
  var xl = null;
  function iv(e) {
    xl !== e && (xl = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        xl === e && (xl = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n], o = e[n + 1], c = e[n + 2];
          if (typeof o != "function") {
            if (Vf(o || a) === null)
              continue;
            break;
          }
          var g = Fa(a);
          g !== null && (e.splice(n, 3), n -= 3, Gc(
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
  function Ls(e) {
    function n(j) {
      return Sl(j, e);
    }
    Vr !== null && Sl(Vr, e), Yr !== null && Sl(Yr, e), Xr !== null && Sl(Xr, e), js.forEach(n), Rs.forEach(n);
    for (var a = 0; a < $r.length; a++) {
      var o = $r[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < $r.length && (a = $r[0], a.blockedOn === null); )
      rv(a), a.blockedOn === null && $r.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (o = 0; o < a.length; o += 3) {
        var c = a[o], g = a[o + 1], w = c[Wt] || null;
        if (typeof g == "function")
          w || iv(a);
        else if (w) {
          var O = null;
          if (g && g.hasAttribute("formAction")) {
            if (c = g, w = g[Wt] || null)
              O = w.formAction;
            else if (Vf(c) !== null) continue;
          } else O = w.action;
          typeof O == "function" ? a[o + 1] = O : (a.splice(o, 3), o -= 3), iv(a);
        }
      }
  }
  function Xf(e) {
    this._internalRoot = e;
  }
  El.prototype.render = Xf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var a = n.current, o = mn();
    Jg(a, o, e, n, null, null);
  }, El.prototype.unmount = Xf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      Jg(e.current, 2, null, e, null, null), al(), n[Ha] = null;
    }
  };
  function El(e) {
    this._internalRoot = e;
  }
  El.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = xh();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < $r.length && n !== 0 && n < $r[a].priority; a++) ;
      $r.splice(a, 0, e), a === 0 && rv(e);
    }
  };
  var sv = r.version;
  if (sv !== "19.1.1")
    throw Error(
      s(
        527,
        sv,
        "19.1.1"
      )
    );
  ae.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(n), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var r2 = {
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
        ht = Cl.inject(
          r2
        ), nt = Cl;
      } catch {
      }
  }
  return Us.createRoot = function(e, n) {
    if (!l(e)) throw Error(s(299));
    var a = !1, o = "", c = xm, g = Em, w = Cm, O = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (g = n.onCaughtError), n.onRecoverableError !== void 0 && (w = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (O = n.unstable_transitionCallbacks)), n = Qg(
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
    ), e[Ha] = n.current, Df(e), new Xf(n);
  }, Us.hydrateRoot = function(e, n, a) {
    if (!l(e)) throw Error(s(299));
    var o = !1, c = "", g = xm, w = Em, O = Cm, j = null, q = null;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (g = a.onUncaughtError), a.onCaughtError !== void 0 && (w = a.onCaughtError), a.onRecoverableError !== void 0 && (O = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (j = a.unstable_transitionCallbacks), a.formState !== void 0 && (q = a.formState)), n = Qg(
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
    ), n.context = Kg(null), a = n.current, o = mn(), o = Iu(o), c = kr(o), c.callback = null, jr(a, c, o), a = o, n.current.lanes = a, qi(n, a), Wn(n), e[Ha] = n.current, Df(e), new El(n);
  }, Us.version = "19.1.1", Us;
}
var Sv;
function j2() {
  if (Sv) return Jf.exports;
  Sv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Jf.exports = k2(), Jf.exports;
}
var R2 = j2();
const xv = /* @__PURE__ */ p0(R2);
var z2 = Object.defineProperty, L2 = (t, r, i) => r in t ? z2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, P2 = (t, r, i) => L2(t, r + "", i);
class g0 extends Error {
  constructor(r, i) {
    super(r), P2(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function I2(t, r) {
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
    throw new g0(u.statusText, u);
  await i.getCharacters();
}
async function B2(t, r) {
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
    throw new g0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var U2 = Object.defineProperty, H2 = (t, r, i) => r in t ? U2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, Ev = (t, r, i) => H2(t, typeof r != "symbol" ? r + "" : r, i);
class v0 {
  constructor(r, i) {
    Ev(this, "settingsKey"), Ev(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
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
  return Array.isArray ? Array.isArray(t) : _0(t) === "[object Array]";
}
function q2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function F2(t) {
  return t == null ? "" : q2(t);
}
function tr(t) {
  return typeof t == "string";
}
function y0(t) {
  return typeof t == "number";
}
function Z2(t) {
  return t === !0 || t === !1 || G2(t) && _0(t) == "[object Boolean]";
}
function b0(t) {
  return typeof t == "object";
}
function G2(t) {
  return b0(t) && t !== null;
}
function _n(t) {
  return t != null;
}
function nd(t) {
  return !t.trim().length;
}
function _0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const V2 = "Incorrect 'index' type", Y2 = (t) => `Invalid value for key ${t}`, X2 = (t) => `Pattern length exceeds max of ${t}.`, $2 = (t) => `Missing ${t} property in key`, Q2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, Cv = Object.prototype.hasOwnProperty;
class K2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let l = S0(s);
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
function S0(t) {
  let r = null, i = null, s = null, l = 1, u = null;
  if (tr(t) || wr(t))
    s = t, r = wv(t), i = Ad(t);
  else {
    if (!Cv.call(t, "name"))
      throw new Error($2("name"));
    const f = t.name;
    if (s = f, Cv.call(t, "weight") && (l = t.weight, l <= 0))
      throw new Error(Q2(f));
    r = wv(f), i = Ad(f), u = t.getFn;
  }
  return { path: r, id: i, weight: l, src: s, getFn: u };
}
function wv(t) {
  return wr(t) ? t : t.split(".");
}
function Ad(t) {
  return wr(t) ? t.join(".") : t;
}
function J2(t, r) {
  let i = [], s = !1;
  const l = (u, f, p) => {
    if (_n(u))
      if (!f[p])
        i.push(u);
      else {
        let h = f[p];
        const m = u[h];
        if (!_n(m))
          return;
        if (p === f.length - 1 && (tr(m) || y0(m) || Z2(m)))
          i.push(F2(m));
        else if (wr(m)) {
          s = !0;
          for (let y = 0, _ = m.length; y < _; y += 1)
            l(m[y], f, p + 1);
        } else f.length && l(m, f, p + 1);
      }
  };
  return l(t, tr(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const W2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, eS = {
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
}, tS = {
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
}, nS = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: J2,
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
  ...eS,
  ...W2,
  ...tS,
  ...nS
};
const rS = /[^ ]+/g;
function aS(t = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(l) {
      const u = l.match(rS).length;
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
    this.norm = aS(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, tr(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    tr(r) ? this._addString(r, i) : this._addObject(r, i);
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
    if (!_n(r) || nd(r))
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
      if (_n(f)) {
        if (wr(f)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: m, value: y } = h.pop();
            if (_n(y))
              if (tr(y) && !nd(y)) {
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
        } else if (tr(f) && !nd(f)) {
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
function x0(t, r, { getFn: i = ke.getFn, fieldNormWeight: s = ke.fieldNormWeight } = {}) {
  const l = new Wd({ getFn: i, fieldNormWeight: s });
  return l.setKeys(t.map(S0)), l.setSources(r), l.create(), l;
}
function iS(t, { getFn: r = ke.getFn, fieldNormWeight: i = ke.fieldNormWeight } = {}) {
  const { keys: s, records: l } = t, u = new Wd({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(l), u;
}
function wl(t, {
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
function sS(t = [], r = ke.minMatchCharLength) {
  let i = [], s = -1, l = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (l = u - 1, l - s + 1 >= r && i.push([s, l]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const Ma = 32;
function oS(t, r, i, {
  location: s = ke.location,
  distance: l = ke.distance,
  threshold: u = ke.threshold,
  findAllMatches: f = ke.findAllMatches,
  minMatchCharLength: p = ke.minMatchCharLength,
  includeMatches: h = ke.includeMatches,
  ignoreLocation: m = ke.ignoreLocation
} = {}) {
  if (r.length > Ma)
    throw new Error(X2(Ma));
  const y = r.length, _ = t.length, b = Math.max(0, Math.min(s, _));
  let v = u, d = b;
  const x = p > 1 || h, C = x ? Array(_) : [];
  let N;
  for (; (N = t.indexOf(r, d)) > -1; ) {
    let k = wl(r, {
      currentLocation: N,
      expectedLocation: b,
      distance: l,
      ignoreLocation: m
    });
    if (v = Math.min(k, v), d = N + y, x) {
      let I = 0;
      for (; I < y; )
        C[N + I] = 1, I += 1;
    }
  }
  d = -1;
  let A = [], D = 1, E = y + _;
  const T = 1 << y - 1;
  for (let k = 0; k < y; k += 1) {
    let I = 0, X = E;
    for (; I < X; )
      wl(r, {
        errors: k,
        currentLocation: b + X,
        expectedLocation: b,
        distance: l,
        ignoreLocation: m
      }) <= v ? I = X : E = X, X = Math.floor((E - I) / 2 + I);
    E = X;
    let P = Math.max(1, b - X + 1), V = f ? _ : Math.min(b + X, _) + y, Q = Array(V + 2);
    Q[V + 1] = (1 << k) - 1;
    for (let me = V; me >= P; me -= 1) {
      let Se = me - 1, B = i[t.charAt(Se)];
      if (x && (C[Se] = +!!B), Q[me] = (Q[me + 1] << 1 | 1) & B, k && (Q[me] |= (A[me + 1] | A[me]) << 1 | 1 | A[me + 1]), Q[me] & T && (D = wl(r, {
        errors: k,
        currentLocation: Se,
        expectedLocation: b,
        distance: l,
        ignoreLocation: m
      }), D <= v)) {
        if (v = D, d = Se, d <= b)
          break;
        P = Math.max(1, 2 * b - d);
      }
    }
    if (wl(r, {
      errors: k + 1,
      currentLocation: b,
      expectedLocation: b,
      distance: l,
      ignoreLocation: m
    }) > v)
      break;
    A = Q;
  }
  const M = {
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (x) {
    const k = sS(C, p);
    k.length ? h && (M.indices = k) : M.isMatch = !1;
  }
  return M;
}
function lS(t) {
  let r = {};
  for (let i = 0, s = t.length; i < s; i += 1) {
    const l = t.charAt(i);
    r[l] = (r[l] || 0) | 1 << s - i - 1;
  }
  return r;
}
const mu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class E0 {
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
        alphabet: lS(v),
        startIndex: d
      });
    }, b = this.pattern.length;
    if (b > Ma) {
      let v = 0;
      const d = b % Ma, x = b - d;
      for (; v < x; )
        _(this.pattern.substr(v, Ma), v), v += Ma;
      if (d) {
        const C = b - Ma;
        _(this.pattern.substr(C), C);
      }
    } else
      _(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: s, includeMatches: l } = this.options;
    if (r = i ? r : r.toLowerCase(), r = s ? mu(r) : r, this.pattern === r) {
      let x = {
        isMatch: !0,
        score: 0
      };
      return l && (x.indices = [[0, r.length - 1]]), x;
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
    this.chunks.forEach(({ pattern: x, alphabet: C, startIndex: N }) => {
      const { isMatch: A, score: D, indices: E } = oS(r, x, C, {
        location: u + N,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: m,
        includeMatches: l,
        ignoreLocation: y
      });
      A && (v = !0), b += D, A && E && (_ = [..._, ...E]);
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
    return Av(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return Av(r, this.singleRegex);
  }
  search() {
  }
}
function Av(t, r) {
  const i = t.match(r);
  return i ? i[1] : null;
}
class uS extends ra {
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
class cS extends ra {
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
class fS extends ra {
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
class dS extends ra {
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
class hS extends ra {
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
class pS extends ra {
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
class C0 extends ra {
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
    super(r), this._bitapSearch = new E0(r, {
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
class w0 extends ra {
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
const Nd = [
  uS,
  w0,
  fS,
  dS,
  pS,
  hS,
  cS,
  C0
], Nv = Nd.length, mS = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, gS = "|";
function vS(t, r = {}) {
  return t.split(gS).map((i) => {
    let s = i.trim().split(mS).filter((u) => u && !!u.trim()), l = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let h = !1, m = -1;
      for (; !h && ++m < Nv; ) {
        const y = Nd[m];
        let _ = y.isMultiMatch(p);
        _ && (l.push(new y(_, r)), h = !0);
      }
      if (!h)
        for (m = -1; ++m < Nv; ) {
          const y = Nd[m];
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
const yS = /* @__PURE__ */ new Set([C0.type, w0.type]);
class bS {
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
    }, r = i ? r : r.toLowerCase(), r = s ? mu(r) : r, this.pattern = r, this.query = vS(this.pattern, this.options);
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
        const d = _[b], { isMatch: x, indices: C, score: N } = d.search(r);
        if (x) {
          if (f += 1, h += N, s) {
            const A = d.constructor.type;
            yS.has(A) ? p = [...p, ...C] : p.push(C);
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
const Td = [];
function _S(...t) {
  Td.push(...t);
}
function Od(t, r) {
  for (let i = 0, s = Td.length; i < s; i += 1) {
    let l = Td[i];
    if (l.condition(t, r))
      return new l(t, r);
  }
  return new E0(t, r);
}
const gu = {
  AND: "$and",
  OR: "$or"
}, Dd = {
  PATH: "$path",
  PATTERN: "$val"
}, Md = (t) => !!(t[gu.AND] || t[gu.OR]), SS = (t) => !!t[Dd.PATH], xS = (t) => !wr(t) && b0(t) && !Md(t), Tv = (t) => ({
  [gu.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function A0(t, r, { auto: i = !0 } = {}) {
  const s = (l) => {
    let u = Object.keys(l);
    const f = SS(l);
    if (!f && u.length > 1 && !Md(l))
      return s(Tv(l));
    if (xS(l)) {
      const h = f ? l[Dd.PATH] : u[0], m = f ? l[Dd.PATTERN] : l[h];
      if (!tr(m))
        throw new Error(Y2(h));
      const y = {
        keyId: Ad(h),
        pattern: m
      };
      return i && (y.searcher = Od(m, r)), y;
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
  return Md(t) || (t = Tv(t)), s(t);
}
function ES(t, { ignoreFieldNorm: r = ke.ignoreFieldNorm }) {
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
function CS(t, r) {
  const i = t.matches;
  r.matches = [], _n(i) && i.forEach((s) => {
    if (!_n(s.indices) || !s.indices.length)
      return;
    const { indices: l, value: u } = s;
    let f = {
      indices: l,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function wS(t, r) {
  r.score = t.score;
}
function AS(t, r, {
  includeMatches: i = ke.includeMatches,
  includeScore: s = ke.includeScore
} = {}) {
  const l = [];
  return i && l.push(CS), s && l.push(wS), t.map((u) => {
    const { idx: f } = u, p = {
      item: r[f],
      refIndex: f
    };
    return l.length && l.forEach((h) => {
      h(u, p);
    }), p;
  });
}
class Ui {
  constructor(r, i = {}, s) {
    this.options = { ...ke, ...i }, this.options.useExtendedSearch, this._keyStore = new K2(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Wd))
      throw new Error(V2);
    this._myIndex = i || x0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    _n(r) && (this._docs.push(r), this._myIndex.add(r));
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
    let h = tr(r) ? tr(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return ES(h, { ignoreFieldNorm: p }), u && h.sort(f), y0(i) && i > -1 && (h = h.slice(0, i)), AS(h, this._docs, {
      includeMatches: s,
      includeScore: l
    });
  }
  _searchStringList(r) {
    const i = Od(r, this.options), { records: s } = this._myIndex, l = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!_n(u))
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
    const i = A0(r, this.options), s = (p, h, m) => {
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
      if (_n(p)) {
        let m = s(i, p, h);
        m.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), m.forEach(({ matches: y }) => {
          u[h].matches.push(...y);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const i = Od(r, this.options), { keys: s, records: l } = this._myIndex, u = [];
    return l.forEach(({ $: f, i: p }) => {
      if (!_n(f))
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
    if (!_n(i))
      return [];
    let l = [];
    if (wr(i))
      i.forEach(({ v: u, i: f, n: p }) => {
        if (!_n(u))
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
Ui.version = "7.1.0";
Ui.createIndex = x0;
Ui.parseIndex = iS;
Ui.config = ke;
Ui.parseQuery = A0;
_S(bS);
var NS = Object.defineProperty, TS = (t, r, i) => r in t ? NS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, OS = (t, r, i) => TS(t, r + "", i);
let DS = class {
  constructor() {
    OS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
async function MS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function be(t, r, { escapeHtml: i = !0 } = {}) {
  await MS("echo", { severity: t, escapeHtml: (!!i).toString() }, r);
}
function rd(t) {
  return l2(t);
}
function Ov(t, r) {
  return s2(t, r);
}
function Al(t, r, i) {
  return o2(t, r, i);
}
function kS(t, r, i) {
  return p2(t, r, i);
}
function jS(t, r) {
  return m2(t, r);
}
function RS(t, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return i2(t, { customStoryString: r, customInstructSettings: i });
}
function Aa(t) {
  return S2(t);
}
function zS() {
  return {
    prompt: Ps[Is.prompt],
    interval: Ps[Is.interval],
    position: Ps[Is.position],
    depth: Ps[Is.depth],
    role: Ps[Is.role]
  };
}
function LS(t, r) {
  return E2(t, r);
}
function PS({
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
  messages: x,
  messageExamples: C
}, N) {
  return x2(
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
      messages: x,
      messageExamples: C
    },
    N
  );
}
function IS(t) {
  return v2(t);
}
function BS(t) {
  return y2(t);
}
function US(t, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: l,
  isEdit: u,
  depth: f
}) {
  return C2(t, r, { characterOverride: i, isMarkdown: s, isPrompt: l, isEdit: u, depth: f });
}
async function HS(t, r) {
  return await g2(t, r);
}
function Dv(t, {
  wiFormat: r
} = {}) {
  return b2(t, { wiFormat: r });
}
function Hs(t) {
  return _2(t);
}
function qS(t, r) {
  return f2(t, r);
}
class FS {
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
var ZS = Object.defineProperty, GS = (t, r, i) => r in t ? ZS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, Nl = (t, r, i) => GS(t, typeof r != "symbol" ? r + "" : r, i);
class VS {
  constructor(r) {
    Nl(this, "messages", []), Nl(this, "tokenizer"), Nl(this, "maxContext"), Nl(this, "currentTokenCount", 0), this.tokenizer = new FS(), this.maxContext = r;
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
async function N0(t, {
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
  var b, v, d, x, C, N, A, D, E, T, M, k, I, X;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const P = SillyTavern.getContext();
  let { description: V, personality: Q, persona: de, scenario: me, mesExamples: Se, system: B, jailbreak: ae } = h ? {
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
  const ge = t === "textgenerationwebui" ? (b = P.getPresetManager("instruct")) == null ? void 0 : b.getCompletionPresetByName(s) : void 0, Te = !!(ge != null && ge.enabled);
  let R = Ov(Se, Te);
  function ee() {
    var K, ce;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !i)
      return rd();
    if (typeof f == "number")
      return f;
    let _e;
    if (t === "textgenerationwebui") {
      const ve = (K = P.getPresetManager("textgenerationwebui")) == null ? void 0 : K.getCompletionPresetByName(i);
      _e = ve?.max_length;
    } else {
      const ve = (ce = P.getPresetManager("openai")) == null ? void 0 : ce.getCompletionPresetByName(i);
      _e = ve?.openai_max_context;
    }
    return typeof _e == "number" ? _e : rd();
  }
  let oe = [];
  const ue = ee();
  if (ue <= 0)
    return { result: [], warnings: oe };
  const le = new VS(ue), ze = P.ToolManager.isToolCallingSupported(), $ = _?.start ?? 0, Ce = _ != null && _.end ? _.end + 1 : void 0;
  let xe = $ === -1 && Ce === 0 ? [] : P.chat.slice($, Ce).filter((K) => {
    var ce;
    return !K.is_system || ze && Array.isArray((ce = K.extra) == null ? void 0 : ce.tool_invocations);
  });
  xe = await Promise.all(
    xe.map(async (K, ce) => {
      var _e, ve;
      let He = K.mes, Xe = K.is_user ? uv.USER_INPUT : uv.AI_OUTPUT, ht = { isPrompt: !0, depth: xe.length - ce - 1 }, nt = US(He, Xe, ht);
      return nt = await HS(K, nt), (_e = K?.extra) != null && _e.append_title && (ve = K?.extra) != null && ve.title && (nt = `${nt}

${K.extra.title}`), {
        ...K,
        mes: nt,
        index: ce
      };
    })
  );
  const Fe = xe.map((K) => d2 ? `${K.name}: ${K.mes}` : K.mes).reverse(), { worldInfoString: Je, worldInfoBefore: Re, worldInfoAfter: st, worldInfoExamples: It, worldInfoDepth: U, anBefore: ie, anAfter: re } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await P.getWorldInfoPrompt(Fe, ue, !1);
  for (const K of It) {
    const ce = K.content;
    if (ce.length === 0)
      continue;
    const _e = Al(ce, xr, Kr), ve = Ov(_e, Te);
    K.position === h2.before ? R.unshift(...ve) : R.push(...ve);
  }
  function F() {
    const K = [];
    for (let ce = xe.length - 1; ce >= 0; ce--) {
      const _e = xe[ce], ve = _e.name === "System" && !_e.is_user ? "system" : _e.is_user ? "user" : "assistant";
      K.unshift({
        role: ve,
        content: p && ve != "system" ? `${_e.name}: ${_e.mes}` : _e.mes,
        source: _e
      });
    }
    le.addMany(K);
  }
  if (t === "textgenerationwebui") {
    const K = [...R];
    R && (R = kS(R, xr, Kr));
    const ce = (v = P.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    ce && (B = P.powerUserSettings.prefer_character_prompt && B ? B : Al(ce.content, xr, Kr), B = Te ? jS(
      P.substituteParams(B, xr, Kr, ce.content),
      ge
    ) : B);
    const _e = {
      description: V,
      personality: Q,
      persona: P.powerUserSettings.persona_description_position == ov.IN_PROMPT ? de : "",
      scenario: me,
      system: B,
      char: Kr,
      user: xr,
      wiBefore: Re,
      wiAfter: st,
      loreBefore: Re,
      loreAfter: st,
      mesExamples: R.join(""),
      mesExamplesRaw: K.join("")
    }, ve = (d = P.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(l);
    let He = RS(_e, {
      customInstructSettings: ge,
      customStoryString: ve?.story_string
    });
    He && le.add({ role: "system", content: He, ignoreInstruct: !0 }), F();
  } else {
    let K = function(Yt) {
      const Jt = xn.find((Ua) => Ua.identifier === Yt);
      if (Jt)
        return Jt;
      const po = He.prompts.find((Ua) => Ua.identifier === Yt);
      if (po)
        return po;
    }, ce = IS(xe), _e = BS(R);
    async function ve() {
      let [Yt, Jt] = await PS(
        {
          name2: Kr,
          charDescription: V,
          charPersonality: Q,
          Scenario: me,
          worldInfoBefore: Re,
          worldInfoAfter: st,
          extensionPrompts: P.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: B,
          jailbreakPromptOverride: ae,
          personaDescription: de,
          messages: ce,
          messageExamples: _e
        },
        !1
      );
      le.addMany(Yt);
    }
    if (!i)
      return oe.push("No preset name provided. Using default preset."), await ve(), { result: le.getMessages(), warnings: oe };
    const He = (x = P.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(i);
    if (!He)
      return console.warn(`Preset not found: ${i}. Using current preset.`), oe.push(`Preset not found: ${i}. Using current preset.`), ve(), { result: le.getMessages(), warnings: oe };
    let Xe = (C = He.prompt_order) == null ? void 0 : C.find((Yt) => Yt.character_id === Ft);
    if (!Xe && He.prompt_order && He.prompt_order.length > 0 && (Xe = He.prompt_order[He.prompt_order.length - 1]), !Xe)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), oe.push(`No prompt order found for preset: ${i}. Using current preset.`), ve(), { result: le.getMessages(), warnings: oe };
    const ht = me && He.scenario_format ? P.substituteParams(He.scenario_format) : "", nt = Q && He.personality_format ? P.substituteParams(He.personality_format) : "", Yn = P.substituteParams(He.group_nudge_prompt), Vt = He.impersonation_prompt ? P.substituteParams(He.impersonation_prompt) : "", xn = [];
    y || xn.push(
      {
        role: "system",
        content: Dv(Re, { wiFormat: He.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Dv(st, { wiFormat: He.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || xn.push(
      { role: "system", content: V, identifier: "charDescription" },
      { role: "system", content: nt, identifier: "charPersonality" },
      { role: "system", content: ht, identifier: "scenario" }
    ), xn.push(
      { role: "system", content: Vt, identifier: "impersonate" },
      { role: "system", content: Yn, identifier: "groupNudge" }
    );
    const sa = P.extensionPrompts["1_memory"];
    sa && sa.value && xn.push({
      role: Aa(sa.role),
      content: sa.value,
      identifier: "summary",
      position: Hs(sa.position)
    });
    const oa = P.extensionPrompts["2_floating_prompt"];
    !m && oa && oa.value && xn.push({
      role: Aa(oa.role),
      content: oa.value,
      identifier: "authorsNote",
      position: Hs(oa.position)
    });
    const ar = P.extensionPrompts["3_vectors"];
    ar && ar.value && xn.push({
      role: "system",
      content: ar.value,
      identifier: "vectorsMemory",
      position: Hs(ar.position)
    });
    const Xn = P.extensionPrompts["4_vectors_data_bank"];
    Xn && Xn.value && xn.push({
      role: Aa(Xn.role),
      content: Xn.value,
      identifier: "vectorsDataBank",
      position: Hs(Xn.position)
    });
    const En = P.extensionPrompts.chromadb;
    En && En.value && xn.push({
      role: "system",
      content: En.value,
      identifier: "smartContext",
      position: Hs(En.position)
    }), !h && P.powerUserSettings.persona_description && P.powerUserSettings.persona_description_position === ov.IN_PROMPT && xn.push({
      role: "system",
      content: P.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Xe.order.forEach((Yt) => {
      if (!Yt.enabled)
        return;
      const Jt = K(Yt.identifier);
      if (Jt && Jt.content) {
        le.add({
          role: Jt.role ?? "system",
          content: P.substituteParams(Jt.content)
        });
        return;
      }
      Yt.identifier === "chatHistory" && F();
    });
  }
  const se = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const K in P.extensionPrompts)
    if (Object.hasOwn(P.extensionPrompts, K)) {
      const ce = P.extensionPrompts[K];
      if (se.includes(K) || !P.extensionPrompts[K].value || ![wa.BEFORE_PROMPT, wa.IN_PROMPT].includes(ce.position) || typeof ce.filter == "function" && !await ce.filter()) continue;
      const _e = {
        role: Aa(ce.role) ?? "system",
        content: ce.value
      };
      if (ce.position === wa.BEFORE_PROMPT)
        le.insert(ce.depth, _e);
      else if (ce.position === wa.IN_PROMPT) {
        const ve = le.getMessages();
        le.insert(ve.length - ce.depth, _e);
      }
    }
  for (const K of U) {
    const ce = le.getMessages();
    le.insert(ce.length - K.depth, {
      role: Aa(K.role),
      content: K.entries.join(`
`)
    });
  }
  if (!h) {
    const K = LS(Zn, Number(Ft));
    if (Zn && Array.isArray(K) && K.length > 0)
      K.filter((ce) => ce.text).forEach((ce, _e) => {
        const ve = le.getMessages();
        le.insert(ve.length - ce.depth, { role: ce.role, content: ce.text });
      });
    else {
      const ce = Al(
        (T = (E = (D = (A = (N = P.characters[Ft]) == null ? void 0 : N.data) == null ? void 0 : A.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : E.prompt) == null ? void 0 : T.trim(),
        xr,
        Kr
      ) || "";
      if (ce) {
        const _e = c2, ve = ((X = (I = (k = (M = P.characters[Ft]) == null ? void 0 : M.data) == null ? void 0 : k.extensions) == null ? void 0 : I.depth_prompt) == null ? void 0 : X.role) ?? u2, He = le.getMessages();
        le.insert(He.length - _e, {
          role: Aa(ve),
          content: ce
        });
      }
    }
  }
  let he = -1;
  if (!m) {
    const K = zS();
    if (K.prompt) {
      K.prompt = Al(K.prompt, xr, Kr);
      const ce = { role: Aa(K.role), content: K.prompt };
      switch (K.position) {
        case wa.IN_PROMPT:
          le.insert(1, ce), he = 1;
          break;
        case wa.IN_CHAT:
          he = le.getMessages().length - K.depth, le.insert(he, ce);
          break;
        case wa.BEFORE_PROMPT:
          le.addFront(ce), he = 0;
          break;
      }
    }
  }
  return he >= 0 && (ie.length > 0 && (le.insert(he, { role: "system", content: ie.join(`
`) }), he++), re.length > 0 && le.insert(he + 1, { role: "system", content: re.join(`
`) })), { result: le.getMessages(), warnings: oe };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Mv(t, r) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(l) {
      return Object.getOwnPropertyDescriptor(t, l).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function rr(t) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Mv(Object(i), !0).forEach(function(s) {
      YS(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Mv(Object(i)).forEach(function(s) {
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
function YS(t, r, i) {
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
function XS(t, r) {
  if (t == null) return {};
  var i = {}, s = Object.keys(t), l, u;
  for (u = 0; u < s.length; u++)
    l = s[u], !(r.indexOf(l) >= 0) && (i[l] = t[l]);
  return i;
}
function $S(t, r) {
  if (t == null) return {};
  var i = XS(t, r), s, l;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (l = 0; l < u.length; l++)
      s = u[l], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s]);
  }
  return i;
}
var QS = "1.15.6";
function Cr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Nr = Cr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), uo = Cr(/Edge/i), kv = Cr(/firefox/i), to = Cr(/safari/i) && !Cr(/chrome/i) && !Cr(/android/i), eh = Cr(/iP(ad|od|hone)/i), T0 = Cr(/chrome/i) && Cr(/android/i), O0 = {
  capture: !1,
  passive: !1
};
function Ze(t, r, i) {
  t.addEventListener(r, i, !Nr && O0);
}
function qe(t, r, i) {
  t.removeEventListener(r, i, !Nr && O0);
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
function D0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Fn(t, r, i, s) {
  if (t) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === i && vu(t, r) : vu(t, r)) || s && t === i)
        return t;
      if (t === i) break;
    } while (t = D0(t));
  }
  return null;
}
var jv = /\s+/g;
function yn(t, r, i) {
  if (t && r)
    if (t.classList)
      t.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(jv, " ").replace(" " + r + " ", " ");
      t.className = (s + (i ? " " + r : "")).replace(jv, " ");
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
function Li(t, r) {
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
function M0(t, r, i) {
  if (t) {
    var s = t.getElementsByTagName(r), l = 0, u = s.length;
    if (i)
      for (; l < u; l++)
        i(s[l], l);
    return s;
  }
  return [];
}
function nr() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function Ct(t, r, i, s, l) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, p, h, m, y, _;
    if (t !== window && t.parentNode && t !== nr() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, m = u.right, y = u.height, _ = u.width) : (f = 0, p = 0, h = window.innerHeight, m = window.innerWidth, y = window.innerHeight, _ = window.innerWidth), (r || i) && t !== window && (l = l || t.parentNode, !Nr))
      do
        if (l && l.getBoundingClientRect && (De(l, "transform") !== "none" || i && De(l, "position") !== "static")) {
          var b = l.getBoundingClientRect();
          f -= b.top + parseInt(De(l, "border-top-width")), p -= b.left + parseInt(De(l, "border-left-width")), h = f + u.height, m = p + u.width;
          break;
        }
      while (l = l.parentNode);
    if (s && t !== window) {
      var v = Li(l || t), d = v && v.a, x = v && v.d;
      v && (f /= x, p /= d, _ /= d, y /= x, h = f + y, m = p + _);
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
function Rv(t, r, i) {
  for (var s = na(t, !0), l = Ct(t)[r]; s; ) {
    var u = Ct(s)[i], f = void 0;
    if (f = l >= u, !f) return s;
    if (s === nr()) break;
    s = na(s, !1);
  }
  return !1;
}
function Bi(t, r, i, s) {
  for (var l = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== Me.ghost && (s || f[u] !== Me.dragged) && Fn(f[u], i.draggable, t, !1)) {
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
function Rn(t, r) {
  var i = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Me.clone && (!r || vu(t, r)) && i++;
  return i;
}
function zv(t) {
  var r = 0, i = 0, s = nr();
  if (t)
    do {
      var l = Li(t), u = l.a, f = l.d;
      r += t.scrollLeft * u, i += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, i];
}
function KS(t, r) {
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[i][s]) return Number(i);
    }
  return -1;
}
function na(t, r) {
  if (!t || !t.getBoundingClientRect) return nr();
  var i = t, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var l = De(i);
      if (i.clientWidth < i.scrollWidth && (l.overflowX == "auto" || l.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (l.overflowY == "auto" || l.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return nr();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return nr();
}
function JS(t, r) {
  if (t && r)
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  return t;
}
function ad(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var no;
function k0(t, r) {
  return function() {
    if (!no) {
      var i = arguments, s = this;
      i.length === 1 ? t.call(s, i[0]) : t.apply(s, i), no = setTimeout(function() {
        no = void 0;
      }, r);
    }
  };
}
function WS() {
  clearTimeout(no), no = void 0;
}
function j0(t, r, i) {
  t.scrollLeft += r, t.scrollTop += i;
}
function R0(t) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : i ? i(t).clone(!0)[0] : t.cloneNode(!0);
}
function z0(t, r, i) {
  var s = {};
  return Array.from(t.children).forEach(function(l) {
    var u, f, p, h;
    if (!(!Fn(l, r.draggable, t, !1) || l.animated || l === i)) {
      var m = Ct(l);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, m.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, m.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, m.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, m.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var on = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function ex() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(l) {
          if (!(De(l, "display") === "none" || l === Me.ghost)) {
            t.push({
              target: l,
              rect: Ct(l)
            });
            var u = rr({}, t[t.length - 1].rect);
            if (l.thisAnimationDuration) {
              var f = Li(l, !0);
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
      t.splice(KS(t, {
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
        var h = 0, m = p.target, y = m.fromRect, _ = Ct(m), b = m.prevFromRect, v = m.prevToRect, d = p.rect, x = Li(m, !0);
        x && (_.top -= x.f, _.left -= x.e), m.toRect = _, m.thisAnimationDuration && ad(b, _) && !ad(y, _) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - _.top) / (d.left - _.left) === (y.top - _.top) / (y.left - _.left) && (h = nx(d, b, v, l.options)), ad(_, y) || (m.prevFromRect = y, m.prevToRect = _, h || (h = l.options.animation), l.animate(m, d, _, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(m.animationResetTimer), m.animationResetTimer = setTimeout(function() {
          m.animationTime = 0, m.prevFromRect = null, m.fromRect = null, m.prevToRect = null, m.thisAnimationDuration = null;
        }, h), m.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, l, u, f) {
      if (f) {
        De(s, "transition", ""), De(s, "transform", "");
        var p = Li(this.el), h = p && p.a, m = p && p.d, y = (l.left - u.left) / (h || 1), _ = (l.top - u.top) / (m || 1);
        s.animatingX = !!y, s.animatingY = !!_, De(s, "transform", "translate3d(" + y + "px," + _ + "px,0)"), this.forRepaintDummy = tx(s), De(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), De(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          De(s, "transition", ""), De(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function tx(t) {
  return t.offsetWidth;
}
function nx(t, r, i, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * s.animation;
}
var Ni = [], id = {
  initializeByDefault: !0
}, co = {
  mount: function(r) {
    for (var i in id)
      id.hasOwnProperty(i) && !(i in r) && (r[i] = id[i]);
    Ni.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Ni.push(r);
  },
  pluginEvent: function(r, i, s) {
    var l = this;
    this.eventCanceled = !1, s.cancel = function() {
      l.eventCanceled = !0;
    };
    var u = r + "Global";
    Ni.forEach(function(f) {
      i[f.pluginName] && (i[f.pluginName][u] && i[f.pluginName][u](rr({
        sortable: i
      }, s)), i.options[f.pluginName] && i[f.pluginName][r] && i[f.pluginName][r](rr({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, l) {
    Ni.forEach(function(p) {
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
    return Ni.forEach(function(l) {
      typeof l.eventProperties == "function" && Ar(s, l.eventProperties.call(i[l.pluginName], r));
    }), s;
  },
  modifyOption: function(r, i, s) {
    var l;
    return Ni.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[i] == "function" && (l = u.optionListeners[i].call(r[u.pluginName], s));
    }), l;
  }
};
function rx(t) {
  var r = t.sortable, i = t.rootEl, s = t.name, l = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, h = t.oldIndex, m = t.newIndex, y = t.oldDraggableIndex, _ = t.newDraggableIndex, b = t.originalEvent, v = t.putSortable, d = t.extraEventProperties;
  if (r = r || i && i[on], !!r) {
    var x, C = r.options, N = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !Nr && !uo ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = f || i, x.from = p || i, x.item = l || i, x.clone = u, x.oldIndex = h, x.newIndex = m, x.oldDraggableIndex = y, x.newDraggableIndex = _, x.originalEvent = b, x.pullMode = v ? v.lastPutMode : void 0;
    var A = rr(rr({}, d), co.getEventProperties(s, r));
    for (var D in A)
      x[D] = A[D];
    i && i.dispatchEvent(x), C[N] && C[N].call(r, x);
  }
}
var ax = ["evt"], an = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = s.evt, u = $S(s, ax);
  co.pluginEvent.bind(Me)(r, i, rr({
    dragEl: fe,
    parentEl: gt,
    ghostEl: je,
    rootEl: lt,
    nextEl: Oa,
    lastDownEl: cu,
    cloneEl: ft,
    cloneHidden: ta,
    dragStarted: Qs,
    putSortable: Pt,
    activeSortable: Me.active,
    originalEvent: l,
    oldIndex: Ri,
    oldDraggableIndex: ro,
    newIndex: bn,
    newDraggableIndex: ea,
    hideGhostForTarget: B0,
    unhideGhostForTarget: U0,
    cloneNowHidden: function() {
      ta = !0;
    },
    cloneNowShown: function() {
      ta = !1;
    },
    dispatchSortableEvent: function(p) {
      $t({
        sortable: i,
        name: p,
        originalEvent: l
      });
    }
  }, u));
};
function $t(t) {
  rx(rr({
    putSortable: Pt,
    cloneEl: ft,
    targetEl: fe,
    rootEl: lt,
    oldIndex: Ri,
    oldDraggableIndex: ro,
    newIndex: bn,
    newDraggableIndex: ea
  }, t));
}
var fe, gt, je, lt, Oa, cu, ft, ta, Ri, bn, ro, ea, Tl, Pt, ji = !1, yu = !1, bu = [], Na, Hn, sd, od, Lv, Pv, Qs, Ti, ao, io = !1, Ol = !1, fu, qt, ld = [], kd = !1, _u = [], ku = typeof document < "u", Dl = eh, Iv = uo || Nr ? "cssFloat" : "float", ix = ku && !T0 && !eh && "draggable" in document.createElement("div"), L0 = (function() {
  if (ku) {
    if (Nr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), P0 = function(r, i) {
  var s = De(r), l = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Bi(r, 0, i), f = Bi(r, 1, i), p = u && De(u), h = f && De(f), m = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + Ct(u).width, y = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + Ct(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var _ = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === _) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || m >= l && s[Iv] === "none" || f && s[Iv] === "none" && m + y > l) ? "vertical" : "horizontal";
}, sx = function(r, i, s) {
  var l = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? i.left : i.top, h = s ? i.right : i.bottom, m = s ? i.width : i.height;
  return l === p || u === h || l + f / 2 === p + m / 2;
}, ox = function(r, i) {
  var s;
  return bu.some(function(l) {
    var u = l[on].options.emptyInsertThreshold;
    if (!(!u || th(l))) {
      var f = Ct(l), p = r >= f.left - u && r <= f.right + u, h = i >= f.top - u && i <= f.bottom + u;
      if (p && h)
        return s = l;
    }
  }), s;
}, I0 = function(r) {
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
}, B0 = function() {
  !L0 && je && De(je, "display", "none");
}, U0 = function() {
  !L0 && je && De(je, "display", "");
};
ku && !T0 && document.addEventListener("click", function(t) {
  if (yu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), yu = !1, !1;
}, !0);
var Ta = function(r) {
  if (fe) {
    r = r.touches ? r.touches[0] : r;
    var i = ox(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var l in r)
        r.hasOwnProperty(l) && (s[l] = r[l]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[on]._onDragOver(s);
    }
  }
}, lx = function(r) {
  fe && fe.parentNode[on]._isOutsideThisEl(r.target);
};
function Me(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Ar({}, r), t[on] = this;
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
    supportPointer: Me.supportPointer !== !1 && "PointerEvent" in window && (!to || eh),
    emptyInsertThreshold: 5
  };
  co.initializePlugins(this, t, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  I0(r);
  for (var l in this)
    l.charAt(0) === "_" && typeof this[l] == "function" && (this[l] = this[l].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : ix, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Ze(t, "pointerdown", this._onTapStart) : (Ze(t, "mousedown", this._onTapStart), Ze(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ze(t, "dragover", this), Ze(t, "dragenter", this)), bu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Ar(this, ex());
}
Me.prototype = /** @lends Sortable.prototype */
{
  constructor: Me,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ti = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, fe) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, l = this.options, u = l.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, m = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, y = l.filter;
      if (gx(s), !fe && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || l.disabled) && !m.isContentEditable && !(!this.nativeDraggable && to && h && h.tagName.toUpperCase() === "SELECT") && (h = Fn(h, l.draggable, s, !1), !(h && h.animated) && cu !== h)) {
        if (Ri = Rn(h), ro = Rn(h, l.draggable), typeof y == "function") {
          if (y.call(this, r, h, this)) {
            $t({
              sortable: i,
              rootEl: m,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), an("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (y && (y = y.split(",").some(function(_) {
          if (_ = Fn(m, _.trim(), s, !1), _)
            return $t({
              sortable: i,
              rootEl: _,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), an("filter", i, {
              evt: r
            }), !0;
        }), y)) {
          u && r.preventDefault();
          return;
        }
        l.handle && !Fn(m, l.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var l = this, u = l.el, f = l.options, p = u.ownerDocument, h;
    if (s && !fe && s.parentNode === u) {
      var m = Ct(s);
      if (lt = u, fe = s, gt = fe.parentNode, Oa = fe.nextSibling, cu = s, Tl = f.group, Me.dragged = fe, Na = {
        target: fe,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, Lv = Na.clientX - m.left, Pv = Na.clientY - m.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, fe.style["will-change"] = "all", h = function() {
        if (an("delayEnded", l, {
          evt: r
        }), Me.eventCanceled) {
          l._onDrop();
          return;
        }
        l._disableDelayedDragEvents(), !kv && l.nativeDraggable && (fe.draggable = !0), l._triggerDragStart(r, i), $t({
          sortable: l,
          name: "choose",
          originalEvent: r
        }), yn(fe, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(y) {
        M0(fe, y.trim(), ud);
      }), Ze(p, "dragover", Ta), Ze(p, "mousemove", Ta), Ze(p, "touchmove", Ta), f.supportPointer ? (Ze(p, "pointerup", l._onDrop), !this.nativeDraggable && Ze(p, "pointercancel", l._onDrop)) : (Ze(p, "mouseup", l._onDrop), Ze(p, "touchend", l._onDrop), Ze(p, "touchcancel", l._onDrop)), kv && this.nativeDraggable && (this.options.touchStartThreshold = 4, fe.draggable = !0), an("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(uo || Nr))) {
        if (Me.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Ze(p, "pointerup", l._disableDelayedDrag), Ze(p, "pointercancel", l._disableDelayedDrag)) : (Ze(p, "mouseup", l._disableDelayedDrag), Ze(p, "touchend", l._disableDelayedDrag), Ze(p, "touchcancel", l._disableDelayedDrag)), Ze(p, "mousemove", l._delayedDragTouchMoveHandler), Ze(p, "touchmove", l._delayedDragTouchMoveHandler), f.supportPointer && Ze(p, "pointermove", l._delayedDragTouchMoveHandler), l._dragStartTimer = setTimeout(h, f.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    fe && ud(fe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    qe(r, "mouseup", this._disableDelayedDrag), qe(r, "touchend", this._disableDelayedDrag), qe(r, "touchcancel", this._disableDelayedDrag), qe(r, "pointerup", this._disableDelayedDrag), qe(r, "pointercancel", this._disableDelayedDrag), qe(r, "mousemove", this._delayedDragTouchMoveHandler), qe(r, "touchmove", this._delayedDragTouchMoveHandler), qe(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Ze(document, "pointermove", this._onTouchMove) : i ? Ze(document, "touchmove", this._onTouchMove) : Ze(document, "mousemove", this._onTouchMove) : (Ze(fe, "dragend", this), Ze(lt, "dragstart", this._onDragStart));
    try {
      document.selection ? du(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (ji = !1, lt && fe) {
      an("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Ze(document, "dragover", lx);
      var s = this.options;
      !r && yn(fe, s.dragClass, !1), yn(fe, s.ghostClass, !0), Me.active = this, r && this._appendGhost(), $t({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Hn) {
      this._lastX = Hn.clientX, this._lastY = Hn.clientY, B0();
      for (var r = document.elementFromPoint(Hn.clientX, Hn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Hn.clientX, Hn.clientY), r !== i); )
        i = r;
      if (fe.parentNode[on]._isOutsideThisEl(r), i)
        do {
          if (i[on]) {
            var s = void 0;
            if (s = i[on]._onDragOver({
              clientX: Hn.clientX,
              clientY: Hn.clientY,
              target: r,
              rootEl: i
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = D0(i));
      U0();
    }
  },
  _onTouchMove: function(r) {
    if (Na) {
      var i = this.options, s = i.fallbackTolerance, l = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = je && Li(je, !0), p = je && f && f.a, h = je && f && f.d, m = Dl && qt && zv(qt), y = (u.clientX - Na.clientX + l.x) / (p || 1) + (m ? m[0] - ld[0] : 0) / (p || 1), _ = (u.clientY - Na.clientY + l.y) / (h || 1) + (m ? m[1] - ld[1] : 0) / (h || 1);
      if (!Me.active && !ji) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (je) {
        f ? (f.e += y - (sd || 0), f.f += _ - (od || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: _
        };
        var b = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        De(je, "webkitTransform", b), De(je, "mozTransform", b), De(je, "msTransform", b), De(je, "transform", b), sd = y, od = _, Hn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!je) {
      var r = this.options.fallbackOnBody ? document.body : lt, i = Ct(fe, !0, Dl, !0, r), s = this.options;
      if (Dl) {
        for (qt = r; De(qt, "position") === "static" && De(qt, "transform") === "none" && qt !== document; )
          qt = qt.parentNode;
        qt !== document.body && qt !== document.documentElement ? (qt === document && (qt = nr()), i.top += qt.scrollTop, i.left += qt.scrollLeft) : qt = nr(), ld = zv(qt);
      }
      je = fe.cloneNode(!0), yn(je, s.ghostClass, !1), yn(je, s.fallbackClass, !0), yn(je, s.dragClass, !0), De(je, "transition", ""), De(je, "transform", ""), De(je, "box-sizing", "border-box"), De(je, "margin", 0), De(je, "top", i.top), De(je, "left", i.left), De(je, "width", i.width), De(je, "height", i.height), De(je, "opacity", "0.8"), De(je, "position", Dl ? "absolute" : "fixed"), De(je, "zIndex", "100000"), De(je, "pointerEvents", "none"), Me.ghost = je, r.appendChild(je), De(je, "transform-origin", Lv / parseInt(je.style.width) * 100 + "% " + Pv / parseInt(je.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, l = r.dataTransfer, u = s.options;
    if (an("dragStart", this, {
      evt: r
    }), Me.eventCanceled) {
      this._onDrop();
      return;
    }
    an("setupClone", this), Me.eventCanceled || (ft = R0(fe), ft.removeAttribute("id"), ft.draggable = !1, ft.style["will-change"] = "", this._hideClone(), yn(ft, this.options.chosenClass, !1), Me.clone = ft), s.cloneId = du(function() {
      an("clone", s), !Me.eventCanceled && (s.options.removeCloneOnHide || lt.insertBefore(ft, fe), s._hideClone(), $t({
        sortable: s,
        name: "clone"
      }));
    }), !i && yn(fe, u.dragClass, !0), i ? (yu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (qe(document, "mouseup", s._onDrop), qe(document, "touchend", s._onDrop), qe(document, "touchcancel", s._onDrop), l && (l.effectAllowed = "move", u.setData && u.setData.call(s, l, fe)), Ze(document, "drop", s), De(fe, "transform", "translateZ(0)")), ji = !0, s._dragStartId = du(s._dragStarted.bind(s, i, r)), Ze(document, "selectstart", s), Qs = !0, window.getSelection().removeAllRanges(), to && De(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, l, u, f, p = this.options, h = p.group, m = Me.active, y = Tl === h, _ = p.sort, b = Pt || m, v, d = this, x = !1;
    if (kd) return;
    function C(ge, Te) {
      an(ge, d, rr({
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
        onMove: function(ee, oe) {
          return Ml(lt, i, fe, l, ee, Ct(ee), r, oe);
        },
        changed: D
      }, Te));
    }
    function N() {
      C("dragOverAnimationCapture"), d.captureAnimationState(), d !== b && b.captureAnimationState();
    }
    function A(ge) {
      return C("dragOverCompleted", {
        insertion: ge
      }), ge && (y ? m._hideClone() : m._showClone(d), d !== b && (yn(fe, Pt ? Pt.options.ghostClass : m.options.ghostClass, !1), yn(fe, p.ghostClass, !0)), Pt !== d && d !== Me.active ? Pt = d : d === Me.active && Pt && (Pt = null), b === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        C("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (s === fe && !fe.animated || s === i && !s.animated) && (Ti = null), !p.dragoverBubble && !r.rootEl && s !== document && (fe.parentNode[on]._isOutsideThisEl(r.target), !ge && Ta(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), x = !0;
    }
    function D() {
      bn = Rn(fe), ea = Rn(fe, p.draggable), $t({
        sortable: d,
        name: "change",
        toEl: i,
        newIndex: bn,
        newDraggableIndex: ea,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Fn(s, p.draggable, i, !0), C("dragOver"), Me.eventCanceled) return x;
    if (fe.contains(r.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return A(!1);
    if (yu = !1, m && !p.disabled && (y ? _ || (f = gt !== lt) : Pt === this || (this.lastPutMode = Tl.checkPull(this, m, fe, r)) && h.checkPut(this, m, fe, r))) {
      if (v = this._getDirection(r, s) === "vertical", l = Ct(fe), C("dragOverValid"), Me.eventCanceled) return x;
      if (f)
        return gt = lt, N(), this._hideClone(), C("revert"), Me.eventCanceled || (Oa ? lt.insertBefore(fe, Oa) : lt.appendChild(fe)), A(!0);
      var E = th(i, p.draggable);
      if (!E || dx(r, v, this) && !E.animated) {
        if (E === fe)
          return A(!1);
        if (E && i === r.target && (s = E), s && (u = Ct(s)), Ml(lt, i, fe, l, s, u, r, !!s) !== !1)
          return N(), E && E.nextSibling ? i.insertBefore(fe, E.nextSibling) : i.appendChild(fe), gt = i, D(), A(!0);
      } else if (E && fx(r, v, this)) {
        var T = Bi(i, 0, p, !0);
        if (T === fe)
          return A(!1);
        if (s = T, u = Ct(s), Ml(lt, i, fe, l, s, u, r, !1) !== !1)
          return N(), i.insertBefore(fe, T), gt = i, D(), A(!0);
      } else if (s.parentNode === i) {
        u = Ct(s);
        var M = 0, k, I = fe.parentNode !== i, X = !sx(fe.animated && fe.toRect || l, s.animated && s.toRect || u, v), P = v ? "top" : "left", V = Rv(s, "top", "top") || Rv(fe, "top", "top"), Q = V ? V.scrollTop : void 0;
        Ti !== s && (k = u[P], io = !1, Ol = !X && p.invertSwap || I), M = hx(r, s, u, v, X ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, Ol, Ti === s);
        var de;
        if (M !== 0) {
          var me = Rn(fe);
          do
            me -= M, de = gt.children[me];
          while (de && (De(de, "display") === "none" || de === je));
        }
        if (M === 0 || de === s)
          return A(!1);
        Ti = s, ao = M;
        var Se = s.nextElementSibling, B = !1;
        B = M === 1;
        var ae = Ml(lt, i, fe, l, s, u, r, B);
        if (ae !== !1)
          return (ae === 1 || ae === -1) && (B = ae === 1), kd = !0, setTimeout(cx, 30), N(), B && !Se ? i.appendChild(fe) : s.parentNode.insertBefore(fe, B ? Se : s), V && j0(V, 0, Q - V.scrollTop), gt = fe.parentNode, k !== void 0 && !Ol && (fu = Math.abs(k - Ct(s)[P])), D(), A(!0);
      }
      if (i.contains(fe))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    qe(document, "mousemove", this._onTouchMove), qe(document, "touchmove", this._onTouchMove), qe(document, "pointermove", this._onTouchMove), qe(document, "dragover", Ta), qe(document, "mousemove", Ta), qe(document, "touchmove", Ta);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    qe(r, "mouseup", this._onDrop), qe(r, "touchend", this._onDrop), qe(r, "pointerup", this._onDrop), qe(r, "pointercancel", this._onDrop), qe(r, "touchcancel", this._onDrop), qe(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (bn = Rn(fe), ea = Rn(fe, s.draggable), an("drop", this, {
      evt: r
    }), gt = fe && fe.parentNode, bn = Rn(fe), ea = Rn(fe, s.draggable), Me.eventCanceled) {
      this._nulling();
      return;
    }
    ji = !1, Ol = !1, io = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), jd(this.cloneId), jd(this._dragStartId), this.nativeDraggable && (qe(document, "drop", this), qe(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), to && De(document.body, "user-select", ""), De(fe, "transform", ""), r && (Qs && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), je && je.parentNode && je.parentNode.removeChild(je), (lt === gt || Pt && Pt.lastPutMode !== "clone") && ft && ft.parentNode && ft.parentNode.removeChild(ft), fe && (this.nativeDraggable && qe(fe, "dragend", this), ud(fe), fe.style["will-change"] = "", Qs && !ji && yn(fe, Pt ? Pt.options.ghostClass : this.options.ghostClass, !1), yn(fe, this.options.chosenClass, !1), $t({
      sortable: this,
      name: "unchoose",
      toEl: gt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), lt !== gt ? (bn >= 0 && ($t({
      rootEl: gt,
      name: "add",
      toEl: gt,
      fromEl: lt,
      originalEvent: r
    }), $t({
      sortable: this,
      name: "remove",
      toEl: gt,
      originalEvent: r
    }), $t({
      rootEl: gt,
      name: "sort",
      toEl: gt,
      fromEl: lt,
      originalEvent: r
    }), $t({
      sortable: this,
      name: "sort",
      toEl: gt,
      originalEvent: r
    })), Pt && Pt.save()) : bn !== Ri && bn >= 0 && ($t({
      sortable: this,
      name: "update",
      toEl: gt,
      originalEvent: r
    }), $t({
      sortable: this,
      name: "sort",
      toEl: gt,
      originalEvent: r
    })), Me.active && ((bn == null || bn === -1) && (bn = Ri, ea = ro), $t({
      sortable: this,
      name: "end",
      toEl: gt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    an("nulling", this), lt = fe = gt = je = Oa = ft = cu = ta = Na = Hn = Qs = bn = ea = Ri = ro = Ti = ao = Pt = Tl = Me.dragged = Me.ghost = Me.clone = Me.active = null, _u.forEach(function(r) {
      r.checked = !0;
    }), _u.length = sd = od = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        fe && (this._onDragOver(r), ux(r));
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
      i = s[l], Fn(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || mx(i));
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
      Fn(p, this.options.draggable, l, !1) && (s[u] = p);
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
    return Fn(r, i || this.options.draggable, this.el, !1);
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
    var l = co.modifyOption(this, r, i);
    typeof l < "u" ? s[r] = l : s[r] = i, r === "group" && I0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    an("destroy", this);
    var r = this.el;
    r[on] = null, qe(r, "mousedown", this._onTapStart), qe(r, "touchstart", this._onTapStart), qe(r, "pointerdown", this._onTapStart), this.nativeDraggable && (qe(r, "dragover", this), qe(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), bu.splice(bu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ta) {
      if (an("hideClone", this), Me.eventCanceled) return;
      De(ft, "display", "none"), this.options.removeCloneOnHide && ft.parentNode && ft.parentNode.removeChild(ft), ta = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ta) {
      if (an("showClone", this), Me.eventCanceled) return;
      fe.parentNode == lt && !this.options.group.revertClone ? lt.insertBefore(ft, fe) : Oa ? lt.insertBefore(ft, Oa) : lt.appendChild(ft), this.options.group.revertClone && this.animate(fe, ft), De(ft, "display", ""), ta = !1;
    }
  }
};
function ux(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Ml(t, r, i, s, l, u, f, p) {
  var h, m = t[on], y = m.options.onMove, _;
  return window.CustomEvent && !Nr && !uo ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = i, h.draggedRect = s, h.related = l || r, h.relatedRect = u || Ct(r), h.willInsertAfter = p, h.originalEvent = f, t.dispatchEvent(h), y && (_ = y.call(m, h, f)), _;
}
function ud(t) {
  t.draggable = !1;
}
function cx() {
  kd = !1;
}
function fx(t, r, i) {
  var s = Ct(Bi(i.el, 0, i.options, !0)), l = z0(i.el, i.options, je), u = 10;
  return r ? t.clientX < l.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < l.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function dx(t, r, i) {
  var s = Ct(th(i.el, i.options.draggable)), l = z0(i.el, i.options, je), u = 10;
  return r ? t.clientX > l.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > l.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function hx(t, r, i, s, l, u, f, p) {
  var h = s ? t.clientY : t.clientX, m = s ? i.height : i.width, y = s ? i.top : i.left, _ = s ? i.bottom : i.right, b = !1;
  if (!f) {
    if (p && fu < m * l) {
      if (!io && (ao === 1 ? h > y + m * u / 2 : h < _ - m * u / 2) && (io = !0), io)
        b = !0;
      else if (ao === 1 ? h < y + fu : h > _ - fu)
        return -ao;
    } else if (h > y + m * (1 - l) / 2 && h < _ - m * (1 - l) / 2)
      return px(r);
  }
  return b = b || f, b && (h < y + m * u / 2 || h > _ - m * u / 2) ? h > y + m / 2 ? 1 : -1 : 0;
}
function px(t) {
  return Rn(fe) < Rn(t) ? 1 : -1;
}
function mx(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function gx(t) {
  _u.length = 0;
  for (var r = t.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && _u.push(s);
  }
}
function du(t) {
  return setTimeout(t, 0);
}
function jd(t) {
  return clearTimeout(t);
}
ku && Ze(document, "touchmove", function(t) {
  (Me.active || ji) && t.cancelable && t.preventDefault();
});
Me.utils = {
  on: Ze,
  off: qe,
  css: De,
  find: M0,
  is: function(r, i) {
    return !!Fn(r, i, r, !1);
  },
  extend: JS,
  throttle: k0,
  closest: Fn,
  toggleClass: yn,
  clone: R0,
  index: Rn,
  nextTick: du,
  cancelNextTick: jd,
  detectDirection: P0,
  getChild: Bi,
  expando: on
};
Me.get = function(t) {
  return t[on];
};
Me.mount = function() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Me.utils = rr(rr({}, Me.utils), s.utils)), co.mount(s);
  });
};
Me.create = function(t, r) {
  return new Me(t, r);
};
Me.version = QS;
var Et = [], Ks, Rd, zd = !1, cd, fd, Su, Js;
function vx() {
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
      this.sortable.nativeDraggable ? Ze(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ze(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Ze(document, "touchmove", this._handleFallbackAutoScroll) : Ze(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? qe(document, "dragover", this._handleAutoScroll) : (qe(document, "pointermove", this._handleFallbackAutoScroll), qe(document, "touchmove", this._handleFallbackAutoScroll), qe(document, "mousemove", this._handleFallbackAutoScroll)), Bv(), hu(), WS();
    },
    nulling: function() {
      Su = Rd = Ks = zd = Js = cd = fd = null, Et.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var l = this, u = (i.touches ? i.touches[0] : i).clientX, f = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, f);
      if (Su = i, s || this.options.forceAutoScrollFallback || uo || Nr || to) {
        dd(i, this.options, p, s);
        var h = na(p, !0);
        zd && (!Js || u !== cd || f !== fd) && (Js && Bv(), Js = setInterval(function() {
          var m = na(document.elementFromPoint(u, f), !0);
          m !== h && (h = m, hu()), dd(i, l.options, m, s);
        }, 10), cd = u, fd = f);
      } else {
        if (!this.options.bubbleScroll || na(p, !0) === nr()) {
          hu();
          return;
        }
        dd(i, this.options, na(p, !1), !1);
      }
    }
  }, Ar(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function hu() {
  Et.forEach(function(t) {
    clearInterval(t.pid);
  }), Et = [];
}
function Bv() {
  clearInterval(Js);
}
var dd = k0(function(t, r, i, s) {
  if (r.scroll) {
    var l = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = nr(), m = !1, y;
    Rd !== i && (Rd = i, hu(), Ks = r.scroll, y = r.scrollFn, Ks === !0 && (Ks = na(i, !0)));
    var _ = 0, b = Ks;
    do {
      var v = b, d = Ct(v), x = d.top, C = d.bottom, N = d.left, A = d.right, D = d.width, E = d.height, T = void 0, M = void 0, k = v.scrollWidth, I = v.scrollHeight, X = De(v), P = v.scrollLeft, V = v.scrollTop;
      v === h ? (T = D < k && (X.overflowX === "auto" || X.overflowX === "scroll" || X.overflowX === "visible"), M = E < I && (X.overflowY === "auto" || X.overflowY === "scroll" || X.overflowY === "visible")) : (T = D < k && (X.overflowX === "auto" || X.overflowX === "scroll"), M = E < I && (X.overflowY === "auto" || X.overflowY === "scroll"));
      var Q = T && (Math.abs(A - l) <= f && P + D < k) - (Math.abs(N - l) <= f && !!P), de = M && (Math.abs(C - u) <= f && V + E < I) - (Math.abs(x - u) <= f && !!V);
      if (!Et[_])
        for (var me = 0; me <= _; me++)
          Et[me] || (Et[me] = {});
      (Et[_].vx != Q || Et[_].vy != de || Et[_].el !== v) && (Et[_].el = v, Et[_].vx = Q, Et[_].vy = de, clearInterval(Et[_].pid), (Q != 0 || de != 0) && (m = !0, Et[_].pid = setInterval((function() {
        s && this.layer === 0 && Me.active._onTouchMove(Su);
        var Se = Et[this.layer].vy ? Et[this.layer].vy * p : 0, B = Et[this.layer].vx ? Et[this.layer].vx * p : 0;
        typeof y == "function" && y.call(Me.dragged.parentNode[on], B, Se, t, Su, Et[this.layer].el) !== "continue" || j0(Et[this.layer].el, B, Se);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && b !== h && (b = na(b, !1)));
    zd = m;
  }
}, 30), H0 = function(r) {
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
    var l = Bi(this.sortable.el, this.startIndex, this.options);
    l ? this.sortable.el.insertBefore(i, l) : this.sortable.el.appendChild(i), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: H0
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
  drop: H0
};
Ar(rh, {
  pluginName: "removeOnSpill"
});
Me.mount(new vx());
Me.mount(rh, nh);
async function yx({
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
    if (m = qS(r, f), !m)
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
const Ld = `=======

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

=======`, ah = `{{#if characters}}
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
{{/if}}`, bx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, _x = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, Sx = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, ih = "{{activeFormatInstructions}}", q0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, F0 = `### {{character.name}}
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
  {{else}}*Not provided*{{/if}}`, so = `{{#is_not_empty fields}}
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
{{/is_not_empty}}`, xx = `## User's Persona Description
name: {{user}}
{{persona}}`, sh = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, Ex = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", Cx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML structure in a markdown code block (```xml\\n...\\n```).\n2.  Every element MUST be nested inside a single top-level <root> element. XML permits only one root node.\n3.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n4.  The XML inside the code block MUST be well-formed. Escape &, < and > inside text as &amp;, &lt; and &gt;.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n<root>\n{{example_response}}\n</root>\n```", wx = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, Z0 = "You are a creative writing assistant helping brainstorm and design a character. Engage in freeform discussion about character concepts, personality traits, backstory ideas, world-building, and narrative design. Be collaborative, offer suggestions, and help refine ideas through conversation.", G0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ax = G0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Nx = "[" + G0 + "][" + Ax + "]*", Tx = new RegExp("^" + Nx + "$");
function V0(t, r) {
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
  const r = Tx.exec(t);
  return !(r === null || typeof r > "u");
};
function Ox(t) {
  return typeof t < "u";
}
const Dx = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function Y0(t, r) {
  r = Object.assign({}, Dx, r);
  const i = [];
  let s = !1, l = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Hv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = qv(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let h = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          h += t[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !Ix(h)) {
          let _;
          return h.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + h + "' is an invalid name.", _t("InvalidTag", _, Qt(t, u));
        }
        const m = jx(t, u);
        if (m === !1)
          return _t("InvalidAttr", "Attributes for '" + h + "' have open quote.", Qt(t, u));
        let y = m.value;
        if (u = m.index, y[y.length - 1] === "/") {
          const _ = u - y.length;
          y = y.substring(0, y.length - 1);
          const b = Fv(y, r);
          if (b === !0)
            s = !0;
          else
            return _t(b.err.code, b.err.msg, Qt(t, _ + b.err.line));
        } else if (p)
          if (m.tagClosed) {
            if (y.trim().length > 0)
              return _t("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Qt(t, f));
            if (i.length === 0)
              return _t("InvalidTag", "Closing tag '" + h + "' has not been opened.", Qt(t, f));
            {
              const _ = i.pop();
              if (h !== _.tagName) {
                let b = Qt(t, _.tagStartPos);
                return _t(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + b.line + ", col " + b.col + ") instead of closing tag '" + h + "'.",
                  Qt(t, f)
                );
              }
              i.length == 0 && (l = !0);
            }
          } else return _t("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Qt(t, u));
        else {
          const _ = Fv(y, r);
          if (_ !== !0)
            return _t(_.err.code, _.err.msg, Qt(t, u - y.length + _.err.line));
          if (l === !0)
            return _t("InvalidXml", "Multiple possible root nodes found.", Qt(t, u));
          r.unpairedTags.indexOf(h) !== -1 || i.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = qv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Hv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = Lx(t, u);
            if (_ == -1)
              return _t("InvalidChar", "char '&' is not expected.", Qt(t, u));
            u = _;
          } else if (l === !0 && !Uv(t[u]))
            return _t("InvalidXml", "Extra text at the end", Qt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (Uv(t[u]))
        continue;
      return _t("InvalidChar", "char '" + t[u] + "' is not expected.", Qt(t, u));
    }
  if (s) {
    if (i.length == 1)
      return _t("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Qt(t, i[0].tagStartPos));
    if (i.length > 0)
      return _t("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return _t("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Uv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Hv(t, r) {
  const i = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(i, r - i);
      if (r > 5 && s === "xml")
        return _t("InvalidXml", "XML declaration allowed only at the start of the document.", Qt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function qv(t, r) {
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
const Mx = '"', kx = "'";
function jx(t, r) {
  let i = "", s = "", l = !1;
  for (; r < t.length; r++) {
    if (t[r] === Mx || t[r] === kx)
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
const Rx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Fv(t, r) {
  const i = V0(t, Rx), s = {};
  for (let l = 0; l < i.length; l++) {
    if (i[l][1].length === 0)
      return _t("InvalidAttr", "Attribute '" + i[l][2] + "' has no space in starting.", qs(i[l]));
    if (i[l][3] !== void 0 && i[l][4] === void 0)
      return _t("InvalidAttr", "Attribute '" + i[l][2] + "' is without value.", qs(i[l]));
    if (i[l][3] === void 0 && !r.allowBooleanAttributes)
      return _t("InvalidAttr", "boolean attribute '" + i[l][2] + "' is not allowed.", qs(i[l]));
    const u = i[l][2];
    if (!Px(u))
      return _t("InvalidAttr", "Attribute '" + u + "' is an invalid name.", qs(i[l]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return _t("InvalidAttr", "Attribute '" + u + "' is repeated.", qs(i[l]));
  }
  return !0;
}
function zx(t, r) {
  let i = /\d/;
  for (t[r] === "x" && (r++, i = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(i))
      break;
  }
  return -1;
}
function Lx(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, zx(t, r);
  let i = 0;
  for (; r < t.length; r++, i++)
    if (!(t[r].match(/\w/) && i < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function _t(t, r, i) {
  return {
    err: {
      code: t,
      msg: r,
      line: i.line || i,
      col: i.col
    }
  };
}
function Px(t) {
  return oh(t);
}
function Ix(t) {
  return oh(t);
}
function Qt(t, r) {
  const i = t.substring(0, r).split(/\r?\n/);
  return {
    line: i.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: i[i.length - 1].length + 1
  };
}
function qs(t) {
  return t.startIndex + t[1].length;
}
const Bx = {
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
}, Ux = function(t) {
  return Object.assign({}, Bx, t);
};
class Fs {
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
function Hx(t, r) {
  const i = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, l = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (l && Zx(t, r)) {
          r += 7;
          let p, h;
          [p, h, r] = qx(t, r + 1), h.indexOf("&") === -1 && (i[Xx(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (l && Gx(t, r)) r += 8;
        else if (l && Vx(t, r)) r += 8;
        else if (l && Yx(t, r)) r += 9;
        else if (Fx) u = !0;
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
function qx(t, r) {
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
function Fx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function Zx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Gx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Vx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function Yx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function Xx(t) {
  if (oh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const $x = /^[-+]?0x[a-fA-F0-9]+$/, Qx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Kx = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function Jx(t, r = {}) {
  if (r = Object.assign({}, Kx, r), !t || typeof t != "string") return t;
  let i = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return t;
  if (t === "0") return 0;
  if (r.hex && $x.test(i))
    return eE(i, 16);
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
    const s = Qx.exec(i);
    if (s) {
      const l = s[1], u = s[2];
      let f = Wx(s[3]);
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
function Wx(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function eE(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function tE(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const i of t)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class nE {
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
    }, this.addExternalEntities = rE, this.parseXml = lE, this.parseTextData = aE, this.resolveNameSpace = iE, this.buildAttributesMap = oE, this.isItStopNode = dE, this.replaceEntitiesValue = cE, this.readStopNodeData = pE, this.saveTextToParentTag = fE, this.addChild = uE, this.ignoreAttributesFn = tE(this.options.ignoreAttributes);
  }
}
function rE(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function aE(t, r, i, s, l, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, i, l, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? Id(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Id(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function iE(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), i = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = i + r[1]);
  }
  return t;
}
const sE = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function oE(t, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = V0(t, sE), l = s.length, u = {};
    for (let f = 0; f < l; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], m = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (m = this.options.transformAttributeName(m)), m === "__proto__" && (m = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const y = this.options.attributeValueProcessor(p, h, r);
          y == null ? u[m] = h : typeof y != typeof h || y !== h ? u[m] = y : u[m] = Id(
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
const lE = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new Fs("!xml");
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
        let p = Pd(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, l), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new Fs(p.tagName);
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
        const p = Hx(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = ka(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, l);
        let m = this.parseTextData(h, i.tagname, l, !0, !1, !0, !0);
        m == null && (m = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : i.add(this.options.textNodeName, m), u = p + 2;
      } else {
        let p = Pd(t, u, this.options.removeNSPrefix), h = p.tagName;
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
            const C = this.readStopNodeData(t, m, b + 1);
            if (!C) throw new Error(`Unexpected end of ${m}`);
            u = C.i, d = C.tagContent;
          }
          const x = new Fs(h);
          h !== y && _ && (x[":@"] = this.buildAttributesMap(y, l, h)), d && (d = this.parseTextData(d, h, l, !0, _, !0, !0)), l = l.substr(0, l.lastIndexOf(".")), x.add(this.options.textNodeName, d), this.addChild(i, x, l);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), l = l.substr(0, l.length - 1), y = h) : y = y.substr(0, y.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const d = new Fs(h);
            h !== y && _ && (d[":@"] = this.buildAttributesMap(y, l, h)), this.addChild(i, d, l), l = l.substr(0, l.lastIndexOf("."));
          } else {
            const d = new Fs(h);
            this.tagsNodeStack.push(i), h !== y && _ && (d[":@"] = this.buildAttributesMap(y, l, h)), this.addChild(i, d, l), i = d;
          }
          s = "", u = b;
        }
      }
    else
      s += t[u];
  return r.child;
};
function uE(t, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const cE = function(t) {
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
function fE(t, r, i, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function dE(t, r, i) {
  const s = "*." + i;
  for (const l in t) {
    const u = t[l];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function hE(t, r, i = ">") {
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
function Pd(t, r, i, s = ">") {
  const l = hE(t, r + 1, s);
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
function pE(t, r, i) {
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
        const u = Pd(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && l++, i = u.closeIndex);
      }
}
function Id(t, r, i) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : Jx(t, i);
  } else
    return Ox(t) ? t : "";
}
function mE(t, r) {
  return X0(t, r);
}
function X0(t, r, i) {
  let s;
  const l = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = gE(f);
    let h = "";
    if (i === void 0 ? h = p : h = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let m = X0(f[p], r, h);
        const y = yE(m, r);
        f[":@"] ? vE(m, f[":@"], h, r) : Object.keys(m).length === 1 && m[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? m = m[r.textNodeName] : Object.keys(m).length === 0 && (r.alwaysCreateTextNode ? m[r.textNodeName] = "" : m = ""), l[p] !== void 0 && l.hasOwnProperty(p) ? (Array.isArray(l[p]) || (l[p] = [l[p]]), l[p].push(m)) : r.isArray(p, h, y) ? l[p] = [m] : l[p] = m;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (l[r.textNodeName] = s) : s !== void 0 && (l[r.textNodeName] = s), l;
}
function gE(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function vE(t, r, i, s) {
  if (r) {
    const l = Object.keys(r), u = l.length;
    for (let f = 0; f < u; f++) {
      const p = l[f];
      s.isArray(p, i + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function yE(t, r) {
  const { textNodeName: i } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[i] || typeof t[i] == "boolean" || t[i] === 0));
}
class bE {
  constructor(r) {
    this.externalEntities = {}, this.options = Ux(r);
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
      const u = Y0(r, i);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new nE(this.options);
    s.addExternalEntities(this.externalEntities);
    const l = s.parseXml(r);
    return this.options.preserveOrder || l === void 0 ? l : mE(l, this.options);
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
const _E = {
  validate: Y0
}, SE = new bE({
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
const xE = /^```(?:\w+)?[ \t]*\r?\n?((?:(?!```)[\s\S])*?)\r?\n?```$/;
function EE(t) {
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
function $0(t, r, i = {}) {
  const s = t.trim();
  if (r === "none") {
    const f = s.match(xE);
    return f ? f[1].trim() : s;
  }
  let u = EE(t) ?? s;
  try {
    switch (r) {
      case "xml": {
        if (i.schema) {
          const p = _E.validate(u);
          if (p !== !0)
            throw new Error(`Model response is not valid XML: ${p.err.msg}`);
        }
        let f = SE.parse(u);
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
function Zv(t, r) {
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
var kl = { exports: {} }, jl = { exports: {} }, qn = {}, sn = {}, Gv;
function ln() {
  if (Gv) return sn;
  Gv = 1, sn.__esModule = !0, sn.extend = l, sn.indexOf = h, sn.escapeExpression = m, sn.isEmpty = y, sn.createFrame = _, sn.blockParams = b, sn.appendContextPath = v;
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
    for (var x = 1; x < arguments.length; x++)
      for (var C in arguments[x])
        Object.prototype.hasOwnProperty.call(arguments[x], C) && (d[C] = arguments[x][C]);
    return d;
  }
  var u = Object.prototype.toString;
  sn.toString = u;
  var f = function(x) {
    return typeof x == "function";
  };
  f(/x/) && (sn.isFunction = f = function(d) {
    return typeof d == "function" && u.call(d) === "[object Function]";
  }), sn.isFunction = f;
  var p = Array.isArray || function(d) {
    return d && typeof d == "object" ? u.call(d) === "[object Array]" : !1;
  };
  sn.isArray = p;
  function h(d, x) {
    for (var C = 0, N = d.length; C < N; C++)
      if (d[C] === x)
        return C;
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
    var x = l({}, d);
    return x._parent = d, x;
  }
  function b(d, x) {
    return d.path = x, d;
  }
  function v(d, x) {
    return (d ? d + "." : "") + x;
  }
  return sn;
}
var Rl = { exports: {} }, Vv;
function Vn() {
  return Vv || (Vv = 1, (function(t, r) {
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
  })(Rl, Rl.exports)), Rl.exports;
}
var Zs = {}, zl = { exports: {} }, Yv;
function CE() {
  return Yv || (Yv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ln();
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
  })(zl, zl.exports)), zl.exports;
}
var Ll = { exports: {} }, Xv;
function wE() {
  return Xv || (Xv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = ln(), l = Vn(), u = i(l);
    r.default = function(f) {
      f.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var m = h.fn, y = h.inverse, _ = 0, b = "", v = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (v = s.createFrame(h.data));
        function x(E, T, M) {
          v && (v.key = E, v.index = T, v.first = T === 0, v.last = !!M, d && (v.contextPath = d + E)), b = b + m(p[E], {
            data: v,
            blockParams: s.blockParams([p[E], E], [d + E, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var C = p.length; _ < C; _++)
              _ in p && x(_, _, _ === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var N = [], A = p[Symbol.iterator](), D = A.next(); !D.done; D = A.next())
              N.push(D.value);
            p = N;
            for (var C = p.length; _ < C; _++)
              x(_, _, _ === p.length - 1);
          } else
            (function() {
              var E = void 0;
              Object.keys(p).forEach(function(T) {
                E !== void 0 && x(E, _ - 1), E = T, _++;
              }), E !== void 0 && x(E, _ - 1, !0);
            })();
        return _ === 0 && (b = y(this)), b;
      });
    }, t.exports = r.default;
  })(Ll, Ll.exports)), Ll.exports;
}
var Pl = { exports: {} }, $v;
function AE() {
  return $v || ($v = 1, (function(t, r) {
    r.__esModule = !0;
    function i(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = Vn(), l = i(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new l.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(Pl, Pl.exports)), Pl.exports;
}
var Il = { exports: {} }, Qv;
function NE() {
  return Qv || (Qv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = ln(), l = Vn(), u = i(l);
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
var Bl = { exports: {} }, Kv;
function TE() {
  return Kv || (Kv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var s = [void 0], l = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        l.hash.level != null ? f = l.hash.level : l.data && l.data.level != null && (f = l.data.level), s[0] = f, i.log.apply(i, s);
      });
    }, t.exports = r.default;
  })(Bl, Bl.exports)), Bl.exports;
}
var Ul = { exports: {} }, Jv;
function OE() {
  return Jv || (Jv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, l, u) {
        return s && u.lookupProperty(s, l);
      });
    }, t.exports = r.default;
  })(Ul, Ul.exports)), Ul.exports;
}
var Hl = { exports: {} }, Wv;
function DE() {
  return Wv || (Wv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = ln(), l = Vn(), u = i(l);
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
  })(Hl, Hl.exports)), Hl.exports;
}
var ey;
function Q0() {
  if (ey) return Zs;
  ey = 1, Zs.__esModule = !0, Zs.registerDefaultHelpers = x, Zs.moveHelperToHooks = C;
  function t(N) {
    return N && N.__esModule ? N : { default: N };
  }
  var r = CE(), i = t(r), s = wE(), l = t(s), u = AE(), f = t(u), p = NE(), h = t(p), m = TE(), y = t(m), _ = OE(), b = t(_), v = DE(), d = t(v);
  function x(N) {
    i.default(N), l.default(N), f.default(N), h.default(N), y.default(N), b.default(N), d.default(N);
  }
  function C(N, A, D) {
    N.helpers[A] && (N.hooks[A] = N.helpers[A], D || delete N.helpers[A]);
  }
  return Zs;
}
var ql = {}, Fl = { exports: {} }, ty;
function ME() {
  return ty || (ty = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ln();
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
  })(Fl, Fl.exports)), Fl.exports;
}
var ny;
function kE() {
  if (ny) return ql;
  ny = 1, ql.__esModule = !0, ql.registerDefaultDecorators = s;
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var r = ME(), i = t(r);
  function s(l) {
    i.default(l);
  }
  return ql;
}
var Zl = { exports: {} }, ry;
function K0() {
  return ry || (ry = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ln(), s = {
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
  })(Zl, Zl.exports)), Zl.exports;
}
var Oi = {}, Gl = {}, ay;
function jE() {
  if (ay) return Gl;
  ay = 1, Gl.__esModule = !0, Gl.createNewLookupObject = r;
  var t = ln();
  function r() {
    for (var i = arguments.length, s = Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Gl;
}
var iy;
function J0() {
  if (iy) return Oi;
  iy = 1, Oi.__esModule = !0, Oi.createProtoAccessControl = u, Oi.resultIsAllowed = f, Oi.resetLoggedProperties = m;
  function t(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = jE(), i = K0(), s = t(i), l = /* @__PURE__ */ Object.create(null);
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
  return Oi;
}
var sy;
function lh() {
  if (sy) return qn;
  sy = 1, qn.__esModule = !0, qn.HandlebarsEnvironment = d;
  function t(C) {
    return C && C.__esModule ? C : { default: C };
  }
  var r = ln(), i = Vn(), s = t(i), l = Q0(), u = kE(), f = K0(), p = t(f), h = J0(), m = "4.7.8";
  qn.VERSION = m;
  var y = 8;
  qn.COMPILER_REVISION = y;
  var _ = 7;
  qn.LAST_COMPATIBLE_COMPILER_REVISION = _;
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
  qn.REVISION_CHANGES = b;
  var v = "[object Object]";
  function d(C, N, A) {
    this.helpers = C || {}, this.partials = N || {}, this.decorators = A || {}, l.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(N, A) {
      if (r.toString.call(N) === v) {
        if (A)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, N);
      } else
        this.helpers[N] = A;
    },
    unregisterHelper: function(N) {
      delete this.helpers[N];
    },
    registerPartial: function(N, A) {
      if (r.toString.call(N) === v)
        r.extend(this.partials, N);
      else {
        if (typeof A > "u")
          throw new s.default('Attempting to register a partial called "' + N + '" as undefined');
        this.partials[N] = A;
      }
    },
    unregisterPartial: function(N) {
      delete this.partials[N];
    },
    registerDecorator: function(N, A) {
      if (r.toString.call(N) === v) {
        if (A)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, N);
      } else
        this.decorators[N] = A;
    },
    unregisterDecorator: function(N) {
      delete this.decorators[N];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      h.resetLoggedProperties();
    }
  };
  var x = p.default.log;
  return qn.log = x, qn.createFrame = r.createFrame, qn.logger = p.default, qn;
}
var Vl = { exports: {} }, oy;
function RE() {
  return oy || (oy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(s) {
      this.string = s;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, t.exports = r.default;
  })(Vl, Vl.exports)), Vl.exports;
}
var _r = {}, Yl = {}, ly;
function zE() {
  if (ly) return Yl;
  ly = 1, Yl.__esModule = !0, Yl.wrapHelper = t;
  function t(r, i) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(u), r.apply(this, arguments);
    };
    return s;
  }
  return Yl;
}
var uy;
function LE() {
  if (uy) return _r;
  uy = 1, _r.__esModule = !0, _r.checkRevision = y, _r.template = _, _r.wrapProgram = b, _r.resolvePartial = v, _r.invokePartial = d, _r.noop = x;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function r(E) {
    if (E && E.__esModule)
      return E;
    var T = {};
    if (E != null)
      for (var M in E)
        Object.prototype.hasOwnProperty.call(E, M) && (T[M] = E[M]);
    return T.default = E, T;
  }
  var i = ln(), s = r(i), l = Vn(), u = t(l), f = lh(), p = Q0(), h = zE(), m = J0();
  function y(E) {
    var T = E && E[0] || 1, M = f.COMPILER_REVISION;
    if (!(T >= f.LAST_COMPATIBLE_COMPILER_REVISION && T <= f.COMPILER_REVISION))
      if (T < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[M], I = f.REVISION_CHANGES[T];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + I + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + E[1] + ").");
  }
  function _(E, T) {
    if (!T)
      throw new u.default("No environment passed to template");
    if (!E || !E.main)
      throw new u.default("Unknown template object: " + typeof E);
    E.main.decorator = E.main_d, T.VM.checkRevision(E.compiler);
    var M = E.compiler && E.compiler[0] === 7;
    function k(P, V, Q) {
      Q.hash && (V = s.extend({}, V, Q.hash), Q.ids && (Q.ids[0] = !0)), P = T.VM.resolvePartial.call(this, P, V, Q);
      var de = s.extend({}, Q, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), me = T.VM.invokePartial.call(this, P, V, de);
      if (me == null && T.compile && (Q.partials[Q.name] = T.compile(P, E.compilerOptions, T), me = Q.partials[Q.name](V, de)), me != null) {
        if (Q.indent) {
          for (var Se = me.split(`
`), B = 0, ae = Se.length; B < ae && !(!Se[B] && B + 1 === ae); B++)
            Se[B] = Q.indent + Se[B];
          me = Se.join(`
`);
        }
        return me;
      } else
        throw new u.default("The partial " + Q.name + " could not be compiled when running in runtime-only mode");
    }
    var I = {
      strict: function(V, Q, de) {
        if (!V || !(Q in V))
          throw new u.default('"' + Q + '" not defined in ' + V, {
            loc: de
          });
        return I.lookupProperty(V, Q);
      },
      lookupProperty: function(V, Q) {
        var de = V[Q];
        if (de == null || Object.prototype.hasOwnProperty.call(V, Q) || m.resultIsAllowed(de, I.protoAccessControl, Q))
          return de;
      },
      lookup: function(V, Q) {
        for (var de = V.length, me = 0; me < de; me++) {
          var Se = V[me] && I.lookupProperty(V[me], Q);
          if (Se != null)
            return V[me][Q];
        }
      },
      lambda: function(V, Q) {
        return typeof V == "function" ? V.call(Q) : V;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: k,
      fn: function(V) {
        var Q = E[V];
        return Q.decorator = E[V + "_d"], Q;
      },
      programs: [],
      program: function(V, Q, de, me, Se) {
        var B = this.programs[V], ae = this.fn(V);
        return Q || Se || me || de ? B = b(this, V, ae, Q, de, me, Se) : B || (B = this.programs[V] = b(this, V, ae)), B;
      },
      data: function(V, Q) {
        for (; V && Q--; )
          V = V._parent;
        return V;
      },
      mergeIfNeeded: function(V, Q) {
        var de = V || Q;
        return V && Q && V !== Q && (de = s.extend({}, Q, V)), de;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: T.VM.noop,
      compilerInfo: E.compiler
    };
    function X(P) {
      var V = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Q = V.data;
      X._setup(V), !V.partial && E.useData && (Q = C(P, Q));
      var de = void 0, me = E.useBlockParams ? [] : void 0;
      E.useDepths && (V.depths ? de = P != V.depths[0] ? [P].concat(V.depths) : V.depths : de = [P]);
      function Se(B) {
        return "" + E.main(I, B, I.helpers, I.partials, Q, me, de);
      }
      return Se = N(E.main, Se, I, V.depths || [], Q, me), Se(P, V);
    }
    return X.isTop = !0, X._setup = function(P) {
      if (P.partial)
        I.protoAccessControl = P.protoAccessControl, I.helpers = P.helpers, I.partials = P.partials, I.decorators = P.decorators, I.hooks = P.hooks;
      else {
        var V = s.extend({}, T.helpers, P.helpers);
        A(V, I), I.helpers = V, E.usePartial && (I.partials = I.mergeIfNeeded(P.partials, T.partials)), (E.usePartial || E.useDecorators) && (I.decorators = s.extend({}, T.decorators, P.decorators)), I.hooks = {}, I.protoAccessControl = m.createProtoAccessControl(P);
        var Q = P.allowCallsToHelperMissing || M;
        p.moveHelperToHooks(I, "helperMissing", Q), p.moveHelperToHooks(I, "blockHelperMissing", Q);
      }
    }, X._child = function(P, V, Q, de) {
      if (E.useBlockParams && !Q)
        throw new u.default("must pass block params");
      if (E.useDepths && !de)
        throw new u.default("must pass parent depths");
      return b(I, P, E[P], V, 0, Q, de);
    }, X;
  }
  function b(E, T, M, k, I, X, P) {
    function V(Q) {
      var de = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], me = P;
      return P && Q != P[0] && !(Q === E.nullContext && P[0] === null) && (me = [Q].concat(P)), M(E, Q, E.helpers, E.partials, de.data || k, X && [de.blockParams].concat(X), me);
    }
    return V = N(M, V, E, P, k, X), V.program = T, V.depth = P ? P.length : 0, V.blockParams = I || 0, V;
  }
  function v(E, T, M) {
    return E ? !E.call && !M.name && (M.name = E, E = M.partials[E]) : M.name === "@partial-block" ? E = M.data["partial-block"] : E = M.partials[M.name], E;
  }
  function d(E, T, M) {
    var k = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var I = void 0;
    if (M.fn && M.fn !== x && (function() {
      M.data = f.createFrame(M.data);
      var X = M.fn;
      I = M.data["partial-block"] = function(V) {
        var Q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return Q.data = f.createFrame(Q.data), Q.data["partial-block"] = k, X(V, Q);
      }, X.partials && (M.partials = s.extend({}, M.partials, X.partials));
    })(), E === void 0 && I && (E = I), E === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (E instanceof Function)
      return E(T, M);
  }
  function x() {
    return "";
  }
  function C(E, T) {
    return (!T || !("root" in T)) && (T = T ? f.createFrame(T) : {}, T.root = E), T;
  }
  function N(E, T, M, k, I, X) {
    if (E.decorator) {
      var P = {};
      T = E.decorator(T, P, M, k && k[0], I, X, k), s.extend(T, P);
    }
    return T;
  }
  function A(E, T) {
    Object.keys(E).forEach(function(M) {
      var k = E[M];
      E[M] = D(k, T);
    });
  }
  function D(E, T) {
    var M = T.lookupProperty;
    return h.wrapHelper(E, function(k) {
      return s.extend({ lookupProperty: M }, k);
    });
  }
  return _r;
}
var Xl = { exports: {} }, cy;
function W0() {
  return cy || (cy = 1, (function(t, r) {
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
  })(Xl, Xl.exports)), Xl.exports;
}
var fy;
function PE() {
  return fy || (fy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(A) {
      return A && A.__esModule ? A : { default: A };
    }
    function s(A) {
      if (A && A.__esModule)
        return A;
      var D = {};
      if (A != null)
        for (var E in A)
          Object.prototype.hasOwnProperty.call(A, E) && (D[E] = A[E]);
      return D.default = A, D;
    }
    var l = lh(), u = s(l), f = RE(), p = i(f), h = Vn(), m = i(h), y = ln(), _ = s(y), b = LE(), v = s(b), d = W0(), x = i(d);
    function C() {
      var A = new u.HandlebarsEnvironment();
      return _.extend(A, u), A.SafeString = p.default, A.Exception = m.default, A.Utils = _, A.escapeExpression = _.escapeExpression, A.VM = v, A.template = function(D) {
        return v.template(D, A);
      }, A;
    }
    var N = C();
    N.create = C, x.default(N), N.default = N, r.default = N, t.exports = r.default;
  })(jl, jl.exports)), jl.exports;
}
var $l = { exports: {} }, dy;
function e1() {
  return dy || (dy = 1, (function(t, r) {
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
  })($l, $l.exports)), $l.exports;
}
var Di = {}, Ql = { exports: {} }, hy;
function IE() {
  return hy || (hy = 1, (function(t, r) {
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
              var x = y.prepareBlock(b[d - 2], b[d - 1], b[d], b[d], !1, this._$), C = y.prepareProgram([x], b[d - 1].loc);
              C.chained = !0, this.$ = { strip: b[d - 2].strip, program: C, chain: !0 };
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
          var h = this, m = [0], y = [null], _ = [], b = this.table, v = "", d = 0, x = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var C = this.lexer.yylloc;
          _.push(C);
          var N = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function A() {
            var de;
            return de = h.lexer.lex() || 1, typeof de != "number" && (de = h.symbols_[de] || de), de;
          }
          for (var D, E, T, M, k = {}, I, X, P, V; ; ) {
            if (E = m[m.length - 1], this.defaultActions[E] ? T = this.defaultActions[E] : ((D === null || typeof D > "u") && (D = A()), T = b[E] && b[E][D]), typeof T > "u" || !T.length || !T[0]) {
              var Q = "";
              {
                V = [];
                for (I in b[E]) this.terminals_[I] && I > 2 && V.push("'" + this.terminals_[I] + "'");
                this.lexer.showPosition ? Q = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + V.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : Q = "Parse error on line " + (d + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError(Q, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: C, expected: V });
              }
            }
            if (T[0] instanceof Array && T.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + E + ", token: " + D);
            switch (T[0]) {
              case 1:
                m.push(D), y.push(this.lexer.yytext), _.push(this.lexer.yylloc), m.push(T[1]), D = null, x = this.lexer.yyleng, v = this.lexer.yytext, d = this.lexer.yylineno, C = this.lexer.yylloc;
                break;
              case 2:
                if (X = this.productions_[T[1]][1], k.$ = y[y.length - X], k._$ = { first_line: _[_.length - (X || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - (X || 1)].first_column, last_column: _[_.length - 1].last_column }, N && (k._$.range = [_[_.length - (X || 1)].range[0], _[_.length - 1].range[1]]), M = this.performAction.call(k, v, x, d, this.yy, T[1], y, _), typeof M < "u")
                  return M;
                X && (m = m.slice(0, -1 * X * 2), y = y.slice(0, -1 * X), _ = _.slice(0, -1 * X)), m.push(this.productions_[T[1]][0]), y.push(k.$), _.push(k._$), P = b[m[m.length - 2]][m[m.length - 1]], m.push(P);
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
  })(Ql, Ql.exports)), Ql.exports;
}
var Kl = { exports: {} }, Jl = { exports: {} }, py;
function t1() {
  return py || (py = 1, (function(t, r) {
    r.__esModule = !0;
    function i(m) {
      return m && m.__esModule ? m : { default: m };
    }
    var s = Vn(), l = i(s);
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
  })(Jl, Jl.exports)), Jl.exports;
}
var my;
function BE() {
  return my || (my = 1, (function(t, r) {
    r.__esModule = !0;
    function i(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = t1(), l = i(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new l.default(), u.prototype.Program = function(y) {
      var _ = !this.options.ignoreStandalone, b = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var v = y.body, d = 0, x = v.length; d < x; d++) {
        var C = v[d], N = this.accept(C);
        if (N) {
          var A = f(v, d, b), D = p(v, d, b), E = N.openStandalone && A, T = N.closeStandalone && D, M = N.inlineStandalone && A && D;
          N.close && h(v, d, !0), N.open && m(v, d, !0), _ && M && (h(v, d), m(v, d) && C.type === "PartialStatement" && (C.indent = /([ \t]+$)/.exec(v[d - 1].original)[1])), _ && E && (h((C.program || C.inverse).body), m(v, d)), _ && T && (h(v, d), m((C.inverse || C.program).body));
        }
      }
      return y;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(y) {
      this.accept(y.program), this.accept(y.inverse);
      var _ = y.program || y.inverse, b = y.program && y.inverse, v = b, d = b;
      if (b && b.chained)
        for (v = b.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var x = {
        open: y.openStrip.open,
        close: y.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(_.body),
        closeStandalone: f((v || _).body)
      };
      if (y.openStrip.close && h(_.body, null, !0), b) {
        var C = y.inverseStrip;
        C.open && m(_.body, null, !0), C.close && h(v.body, null, !0), y.closeStrip.open && m(d.body, null, !0), !this.options.ignoreStandalone && f(_.body) && p(v.body) && (m(_.body), h(v.body));
      } else y.closeStrip.open && m(_.body, null, !0);
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
  })(Kl, Kl.exports)), Kl.exports;
}
var vn = {}, gy;
function UE() {
  if (gy) return vn;
  gy = 1, vn.__esModule = !0, vn.SourceLocation = l, vn.id = u, vn.stripFlags = f, vn.stripComment = p, vn.preparePath = h, vn.prepareMustache = m, vn.prepareRawBlock = y, vn.prepareBlock = _, vn.prepareProgram = b, vn.preparePartialBlock = v;
  function t(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var r = Vn(), i = t(r);
  function s(d, x) {
    if (x = x.path ? x.path.original : x, d.path.original !== x) {
      var C = { loc: d.path.loc };
      throw new i.default(d.path.original + " doesn't match " + x, C);
    }
  }
  function l(d, x) {
    this.source = d, this.start = {
      line: x.first_line,
      column: x.first_column
    }, this.end = {
      line: x.last_line,
      column: x.last_column
    };
  }
  function u(d) {
    return /^\[.*\]$/.test(d) ? d.substring(1, d.length - 1) : d;
  }
  function f(d, x) {
    return {
      open: d.charAt(2) === "~",
      close: x.charAt(x.length - 3) === "~"
    };
  }
  function p(d) {
    return d.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function h(d, x, C) {
    C = this.locInfo(C);
    for (var N = d ? "@" : "", A = [], D = 0, E = 0, T = x.length; E < T; E++) {
      var M = x[E].part, k = x[E].original !== M;
      if (N += (x[E].separator || "") + M, !k && (M === ".." || M === "." || M === "this")) {
        if (A.length > 0)
          throw new i.default("Invalid path: " + N, { loc: C });
        M === ".." && D++;
      } else
        A.push(M);
    }
    return {
      type: "PathExpression",
      data: d,
      depth: D,
      parts: A,
      original: N,
      loc: C
    };
  }
  function m(d, x, C, N, A, D) {
    var E = N.charAt(3) || N.charAt(2), T = E !== "{" && E !== "&", M = /\*/.test(N);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: d,
      params: x,
      hash: C,
      escaped: T,
      strip: A,
      loc: this.locInfo(D)
    };
  }
  function y(d, x, C, N) {
    s(d, C), N = this.locInfo(N);
    var A = {
      type: "Program",
      body: x,
      strip: {},
      loc: N
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
      loc: N
    };
  }
  function _(d, x, C, N, A, D) {
    N && N.path && s(d, N);
    var E = /\*/.test(d.open);
    x.blockParams = d.blockParams;
    var T = void 0, M = void 0;
    if (C) {
      if (E)
        throw new i.default("Unexpected inverse block on decorator", C);
      C.chain && (C.program.body[0].closeStrip = N.strip), M = C.strip, T = C.program;
    }
    return A && (A = T, T = x, x = A), {
      type: E ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: x,
      inverse: T,
      openStrip: d.strip,
      inverseStrip: M,
      closeStrip: N && N.strip,
      loc: this.locInfo(D)
    };
  }
  function b(d, x) {
    if (!x && d.length) {
      var C = d[0].loc, N = d[d.length - 1].loc;
      C && N && (x = {
        source: C.source,
        start: {
          line: C.start.line,
          column: C.start.column
        },
        end: {
          line: N.end.line,
          column: N.end.column
        }
      });
    }
    return {
      type: "Program",
      body: d,
      strip: {},
      loc: x
    };
  }
  function v(d, x, C, N) {
    return s(d, C), {
      type: "PartialBlockStatement",
      name: d.path,
      params: d.params,
      hash: d.hash,
      program: x,
      openStrip: d.strip,
      closeStrip: C && C.strip,
      loc: this.locInfo(N)
    };
  }
  return vn;
}
var vy;
function HE() {
  if (vy) return Di;
  vy = 1, Di.__esModule = !0, Di.parseWithoutProcessing = y, Di.parse = _;
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
  var i = IE(), s = r(i), l = BE(), u = r(l), f = UE(), p = t(f), h = ln();
  Di.parser = s.default;
  var m = {};
  h.extend(m, p);
  function y(b, v) {
    if (b.type === "Program")
      return b;
    s.default.yy = m, m.locInfo = function(x) {
      return new m.SourceLocation(v && v.srcName, x);
    };
    var d = s.default.parse(b);
    return d;
  }
  function _(b, v) {
    var d = y(b, v), x = new u.default(v);
    return x.accept(d);
  }
  return Di;
}
var Mi = {}, yy;
function qE() {
  if (yy) return Mi;
  yy = 1, Mi.__esModule = !0, Mi.Compiler = p, Mi.precompile = h, Mi.compile = m;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = Vn(), i = t(r), s = ln(), l = e1(), u = t(l), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(v) {
      var d = this.opcodes.length;
      if (v.opcodes.length !== d)
        return !1;
      for (var x = 0; x < d; x++) {
        var C = this.opcodes[x], N = v.opcodes[x];
        if (C.opcode !== N.opcode || !y(C.args, N.args))
          return !1;
      }
      d = this.children.length;
      for (var x = 0; x < d; x++)
        if (!this.children[x].equals(v.children[x]))
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
      var d = new this.compiler(), x = d.compile(v, this.options), C = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[C] = x, this.useDepths = this.useDepths || x.useDepths, C;
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
      for (var d = v.body, x = d.length, C = 0; C < x; C++)
        this.accept(d[C]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = v.blockParams ? v.blockParams.length : 0, this;
    },
    BlockStatement: function(v) {
      _(v);
      var d = v.program, x = v.inverse;
      d = d && this.compileProgram(d), x = x && this.compileProgram(x);
      var C = this.classifySexpr(v);
      C === "helper" ? this.helperSexpr(v, d, x) : C === "simple" ? (this.simpleSexpr(v), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", v.path.original)) : (this.ambiguousSexpr(v, d, x), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(v) {
      var d = v.program && this.compileProgram(v.program), x = this.setupFullMustacheParams(v, d, void 0), C = v.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, C.original);
    },
    PartialStatement: function(v) {
      this.usePartial = !0;
      var d = v.program;
      d && (d = this.compileProgram(v.program));
      var x = v.params;
      if (x.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + x.length, v);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var C = v.name.original, N = v.name.type === "SubExpression";
      N && this.accept(v.name), this.setupFullMustacheParams(v, d, void 0, !0);
      var A = v.indent || "";
      this.options.preventIndent && A && (this.opcode("appendContent", A), A = ""), this.opcode("invokePartial", N, C, A), this.opcode("append");
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
    ambiguousSexpr: function(v, d, x) {
      var C = v.path, N = C.parts[0], A = d != null || x != null;
      this.opcode("getContext", C.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", x), C.strict = !0, this.accept(C), this.opcode("invokeAmbiguous", N, A);
    },
    simpleSexpr: function(v) {
      var d = v.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(v, d, x) {
      var C = this.setupFullMustacheParams(v, d, x), N = v.path, A = N.parts[0];
      if (this.options.knownHelpers[A])
        this.opcode("invokeKnownHelper", C.length, A);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + A, v);
        N.strict = !0, N.falsy = !0, this.accept(N), this.opcode("invokeHelper", C.length, N.original, u.default.helpers.simpleId(N));
      }
    },
    PathExpression: function(v) {
      this.addDepth(v.depth), this.opcode("getContext", v.depth);
      var d = v.parts[0], x = u.default.helpers.scopedId(v), C = !v.depth && !x && this.blockParamIndex(d);
      C ? this.opcode("lookupBlockParam", C, v.parts) : d ? v.data ? (this.options.data = !0, this.opcode("lookupData", v.depth, v.parts, v.strict)) : this.opcode("lookupOnContext", v.parts, v.falsy, v.strict, x) : this.opcode("pushContext");
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
      var d = v.pairs, x = 0, C = d.length;
      for (this.opcode("pushHash"); x < C; x++)
        this.pushParam(d[x].value);
      for (; x--; )
        this.opcode("assignToHash", d[x].key);
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
      var d = u.default.helpers.simpleId(v.path), x = d && !!this.blockParamIndex(v.path.parts[0]), C = !x && u.default.helpers.helperExpression(v), N = !x && (C || d);
      if (N && !C) {
        var A = v.path.parts[0], D = this.options;
        D.knownHelpers[A] ? C = !0 : D.knownHelpersOnly && (N = !1);
      }
      return C ? "helper" : N ? "ambiguous" : "simple";
    },
    pushParams: function(v) {
      for (var d = 0, x = v.length; d < x; d++)
        this.pushParam(v[d]);
    },
    pushParam: function(v) {
      var d = v.value != null ? v.value : v.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), v.depth && this.addDepth(v.depth), this.opcode("getContext", v.depth || 0), this.opcode("pushStringParam", d, v.type), v.type === "SubExpression" && this.accept(v);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (v.parts && !u.default.helpers.scopedId(v) && !v.depth && (x = this.blockParamIndex(v.parts[0])), x) {
            var C = v.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, C);
          } else
            d = v.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", v.type, d);
        }
        this.accept(v);
      }
    },
    setupFullMustacheParams: function(v, d, x, C) {
      var N = v.params;
      return this.pushParams(N), this.opcode("pushProgram", d), this.opcode("pushProgram", x), v.hash ? this.accept(v.hash) : this.opcode("emptyHash", C), N;
    },
    blockParamIndex: function(v) {
      for (var d = 0, x = this.options.blockParams.length; d < x; d++) {
        var C = this.options.blockParams[d], N = C && s.indexOf(C, v);
        if (C && N >= 0)
          return [d, N];
      }
    }
  };
  function h(b, v, d) {
    if (b == null || typeof b != "string" && b.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + b);
    v = v || {}, "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var x = d.parse(b, v), C = new d.Compiler().compile(x, v);
    return new d.JavaScriptCompiler().compile(C, v);
  }
  function m(b, v, d) {
    if (v === void 0 && (v = {}), b == null || typeof b != "string" && b.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + b);
    v = s.extend({}, v), "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var x = void 0;
    function C() {
      var A = d.parse(b, v), D = new d.Compiler().compile(A, v), E = new d.JavaScriptCompiler().compile(D, v, void 0, !0);
      return d.template(E);
    }
    function N(A, D) {
      return x || (x = C()), x.call(this, A, D);
    }
    return N._setup = function(A) {
      return x || (x = C()), x._setup(A);
    }, N._child = function(A, D, E, T) {
      return x || (x = C()), x._child(A, D, E, T);
    }, N;
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
  return Mi;
}
var Wl = { exports: {} }, eu = { exports: {} }, Gs = {}, hd = {}, tu = {}, nu = {}, by;
function FE() {
  if (by) return nu;
  by = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return nu.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, nu.decode = function(r) {
    var i = 65, s = 90, l = 97, u = 122, f = 48, p = 57, h = 43, m = 47, y = 26, _ = 52;
    return i <= r && r <= s ? r - i : l <= r && r <= u ? r - l + y : f <= r && r <= p ? r - f + _ : r == h ? 62 : r == m ? 63 : -1;
  }, nu;
}
var _y;
function n1() {
  if (_y) return tu;
  _y = 1;
  var t = FE(), r = 5, i = 1 << r, s = i - 1, l = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var h = (p & 1) === 1, m = p >> 1;
    return h ? -m : m;
  }
  return tu.encode = function(h) {
    var m = "", y, _ = u(h);
    do
      y = _ & s, _ >>>= r, _ > 0 && (y |= l), m += t.encode(y);
    while (_ > 0);
    return m;
  }, tu.decode = function(h, m, y) {
    var _ = h.length, b = 0, v = 0, d, x;
    do {
      if (m >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = t.decode(h.charCodeAt(m++)), x === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(m - 1));
      d = !!(x & l), x &= s, b = b + (x << v), v += r;
    } while (d);
    y.value = f(b), y.rest = m;
  }, tu;
}
var pd = {}, Sy;
function fo() {
  return Sy || (Sy = 1, (function(t) {
    function r(E, T, M) {
      if (T in E)
        return E[T];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + T + '" is a required argument.');
    }
    t.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function l(E) {
      var T = E.match(i);
      return T ? {
        scheme: T[1],
        auth: T[2],
        host: T[3],
        port: T[4],
        path: T[5]
      } : null;
    }
    t.urlParse = l;
    function u(E) {
      var T = "";
      return E.scheme && (T += E.scheme + ":"), T += "//", E.auth && (T += E.auth + "@"), E.host && (T += E.host), E.port && (T += ":" + E.port), E.path && (T += E.path), T;
    }
    t.urlGenerate = u;
    function f(E) {
      var T = E, M = l(E);
      if (M) {
        if (!M.path)
          return E;
        T = M.path;
      }
      for (var k = t.isAbsolute(T), I = T.split(/\/+/), X, P = 0, V = I.length - 1; V >= 0; V--)
        X = I[V], X === "." ? I.splice(V, 1) : X === ".." ? P++ : P > 0 && (X === "" ? (I.splice(V + 1, P), P = 0) : (I.splice(V, 2), P--));
      return T = I.join("/"), T === "" && (T = k ? "/" : "."), M ? (M.path = T, u(M)) : T;
    }
    t.normalize = f;
    function p(E, T) {
      E === "" && (E = "."), T === "" && (T = ".");
      var M = l(T), k = l(E);
      if (k && (E = k.path || "/"), M && !M.scheme)
        return k && (M.scheme = k.scheme), u(M);
      if (M || T.match(s))
        return T;
      if (k && !k.host && !k.path)
        return k.host = T, u(k);
      var I = T.charAt(0) === "/" ? T : f(E.replace(/\/+$/, "") + "/" + T);
      return k ? (k.path = I, u(k)) : I;
    }
    t.join = p, t.isAbsolute = function(E) {
      return E.charAt(0) === "/" || i.test(E);
    };
    function h(E, T) {
      E === "" && (E = "."), E = E.replace(/\/$/, "");
      for (var M = 0; T.indexOf(E + "/") !== 0; ) {
        var k = E.lastIndexOf("/");
        if (k < 0 || (E = E.slice(0, k), E.match(/^([^\/]+:\/)?\/*$/)))
          return T;
        ++M;
      }
      return Array(M + 1).join("../") + T.substr(E.length + 1);
    }
    t.relative = h;
    var m = (function() {
      var E = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in E);
    })();
    function y(E) {
      return E;
    }
    function _(E) {
      return v(E) ? "$" + E : E;
    }
    t.toSetString = m ? y : _;
    function b(E) {
      return v(E) ? E.slice(1) : E;
    }
    t.fromSetString = m ? y : b;
    function v(E) {
      if (!E)
        return !1;
      var T = E.length;
      if (T < 9 || E.charCodeAt(T - 1) !== 95 || E.charCodeAt(T - 2) !== 95 || E.charCodeAt(T - 3) !== 111 || E.charCodeAt(T - 4) !== 116 || E.charCodeAt(T - 5) !== 111 || E.charCodeAt(T - 6) !== 114 || E.charCodeAt(T - 7) !== 112 || E.charCodeAt(T - 8) !== 95 || E.charCodeAt(T - 9) !== 95)
        return !1;
      for (var M = T - 10; M >= 0; M--)
        if (E.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function d(E, T, M) {
      var k = C(E.source, T.source);
      return k !== 0 || (k = E.originalLine - T.originalLine, k !== 0) || (k = E.originalColumn - T.originalColumn, k !== 0 || M) || (k = E.generatedColumn - T.generatedColumn, k !== 0) || (k = E.generatedLine - T.generatedLine, k !== 0) ? k : C(E.name, T.name);
    }
    t.compareByOriginalPositions = d;
    function x(E, T, M) {
      var k = E.generatedLine - T.generatedLine;
      return k !== 0 || (k = E.generatedColumn - T.generatedColumn, k !== 0 || M) || (k = C(E.source, T.source), k !== 0) || (k = E.originalLine - T.originalLine, k !== 0) || (k = E.originalColumn - T.originalColumn, k !== 0) ? k : C(E.name, T.name);
    }
    t.compareByGeneratedPositionsDeflated = x;
    function C(E, T) {
      return E === T ? 0 : E === null ? 1 : T === null ? -1 : E > T ? 1 : -1;
    }
    function N(E, T) {
      var M = E.generatedLine - T.generatedLine;
      return M !== 0 || (M = E.generatedColumn - T.generatedColumn, M !== 0) || (M = C(E.source, T.source), M !== 0) || (M = E.originalLine - T.originalLine, M !== 0) || (M = E.originalColumn - T.originalColumn, M !== 0) ? M : C(E.name, T.name);
    }
    t.compareByGeneratedPositionsInflated = N;
    function A(E) {
      return JSON.parse(E.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = A;
    function D(E, T, M) {
      if (T = T || "", E && (E[E.length - 1] !== "/" && T[0] !== "/" && (E += "/"), T = E + T), M) {
        var k = l(M);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var I = k.path.lastIndexOf("/");
          I >= 0 && (k.path = k.path.substring(0, I + 1));
        }
        T = p(u(k), T);
      }
      return f(T);
    }
    t.computeSourceURL = D;
  })(pd)), pd;
}
var md = {}, xy;
function r1() {
  if (xy) return md;
  xy = 1;
  var t = fo(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
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
  }, md.ArraySet = s, md;
}
var gd = {}, Ey;
function ZE() {
  if (Ey) return gd;
  Ey = 1;
  var t = fo();
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
  }, gd.MappingList = i, gd;
}
var Cy;
function a1() {
  if (Cy) return hd;
  Cy = 1;
  var t = n1(), r = fo(), i = r1().ArraySet, s = ZE().MappingList;
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
      var x = v.source;
      x != null && !_.has(x) && _.add(x);
      var C = v.name;
      C != null && !b.has(C) && b.add(C);
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
    for (var f = 0, p = 1, h = 0, m = 0, y = 0, _ = 0, b = "", v, d, x, C, N = this._mappings.toArray(), A = 0, D = N.length; A < D; A++) {
      if (d = N[A], v = "", d.generatedLine !== p)
        for (f = 0; d.generatedLine !== p; )
          v += ";", p++;
      else if (A > 0) {
        if (!r.compareByGeneratedPositionsInflated(d, N[A - 1]))
          continue;
        v += ",";
      }
      v += t.encode(d.generatedColumn - f), f = d.generatedColumn, d.source != null && (C = this._sources.indexOf(d.source), v += t.encode(C - _), _ = C, v += t.encode(d.originalLine - 1 - m), m = d.originalLine - 1, v += t.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (x = this._names.indexOf(d.name), v += t.encode(x - y), y = x)), b += v;
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
  }, hd.SourceMapGenerator = l, hd;
}
var Vs = {}, vd = {}, wy;
function GE() {
  return wy || (wy = 1, (function(t) {
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
  })(vd)), vd;
}
var yd = {}, Ay;
function VE() {
  if (Ay) return yd;
  Ay = 1;
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
  return yd.quickSort = function(s, l) {
    i(s, l, 0, s.length - 1);
  }, yd;
}
var Ny;
function YE() {
  if (Ny) return Vs;
  Ny = 1;
  var t = fo(), r = GE(), i = r1().ArraySet, s = n1(), l = VE().quickSort;
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
    var v = _ || null, d = b || u.GENERATED_ORDER, x;
    switch (d) {
      case u.GENERATED_ORDER:
        x = this._generatedMappings;
        break;
      case u.ORIGINAL_ORDER:
        x = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var C = this.sourceRoot;
    x.map(function(N) {
      var A = N.source === null ? null : this._sources.at(N.source);
      return A = t.computeSourceURL(C, A, this._sourceMapURL), {
        source: A,
        generatedLine: N.generatedLine,
        generatedColumn: N.generatedColumn,
        originalLine: N.originalLine,
        originalColumn: N.originalColumn,
        name: N.name === null ? null : this._names.at(N.name)
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
      var x = this._originalMappings[d];
      if (y.column === void 0)
        for (var C = x.originalLine; x && x.originalLine === C; )
          v.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
      else
        for (var N = x.originalColumn; x && x.originalLine === _ && x.originalColumn == N; )
          v.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
    }
    return v;
  }, Vs.SourceMapConsumer = u;
  function f(m, y) {
    var _ = m;
    typeof m == "string" && (_ = t.parseSourceMapInput(m));
    var b = t.getArg(_, "version"), v = t.getArg(_, "sources"), d = t.getArg(_, "names", []), x = t.getArg(_, "sourceRoot", null), C = t.getArg(_, "sourcesContent", null), N = t.getArg(_, "mappings"), A = t.getArg(_, "file", null);
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    x && (x = t.normalize(x)), v = v.map(String).map(t.normalize).map(function(D) {
      return x && t.isAbsolute(x) && t.isAbsolute(D) ? t.relative(x, D) : D;
    }), this._names = i.fromArray(d.map(String), !0), this._sources = i.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return t.computeSourceURL(x, D, y);
    }), this.sourceRoot = x, this.sourcesContent = C, this._mappings = N, this._sourceMapURL = y, this.file = A;
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
    for (var x = y._mappings.toArray().slice(), C = b.__generatedMappings = [], N = b.__originalMappings = [], A = 0, D = x.length; A < D; A++) {
      var E = x[A], T = new p();
      T.generatedLine = E.generatedLine, T.generatedColumn = E.generatedColumn, E.source && (T.source = d.indexOf(E.source), T.originalLine = E.originalLine, T.originalColumn = E.originalColumn, E.name && (T.name = v.indexOf(E.name)), N.push(T)), C.push(T);
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
    for (var b = 1, v = 0, d = 0, x = 0, C = 0, N = 0, A = y.length, D = 0, E = {}, T = {}, M = [], k = [], I, X, P, V, Q; D < A; )
      if (y.charAt(D) === ";")
        b++, D++, v = 0;
      else if (y.charAt(D) === ",")
        D++;
      else {
        for (I = new p(), I.generatedLine = b, V = D; V < A && !this._charIsMappingSeparator(y, V); V++)
          ;
        if (X = y.slice(D, V), P = E[X], P)
          D += X.length;
        else {
          for (P = []; D < V; )
            s.decode(y, D, T), Q = T.value, D = T.rest, P.push(Q);
          if (P.length === 2)
            throw new Error("Found a source, but no line and column");
          if (P.length === 3)
            throw new Error("Found a source and line, but no column");
          E[X] = P;
        }
        I.generatedColumn = v + P[0], v = I.generatedColumn, P.length > 1 && (I.source = C + P[1], C += P[1], I.originalLine = d + P[2], d = I.originalLine, I.originalLine += 1, I.originalColumn = x + P[3], x = I.originalColumn, P.length > 4 && (I.name = N + P[4], N += P[4])), k.push(I), typeof I.originalLine == "number" && M.push(I);
      }
    l(k, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, l(M, t.compareByOriginalPositions), this.__originalMappings = M;
  }, f.prototype._findMapping = function(y, _, b, v, d, x) {
    if (y[b] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + y[b]);
    if (y[v] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + y[v]);
    return r.search(y, _, d, x);
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
        var x = t.getArg(v, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: d,
          line: t.getArg(v, "originalLine", null),
          column: t.getArg(v, "originalColumn", null),
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
    var v = y;
    this.sourceRoot != null && (v = t.relative(this.sourceRoot, v));
    var d;
    if (this.sourceRoot != null && (d = t.urlParse(this.sourceRoot))) {
      var x = v.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
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
  }, Vs.BasicSourceMapConsumer = f;
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
    this._sections = v.map(function(x) {
      if (x.url)
        throw new Error("Support for url field in sections not implemented.");
      var C = t.getArg(x, "offset"), N = t.getArg(C, "line"), A = t.getArg(C, "column");
      if (N < d.line || N === d.line && A < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = C, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: N + 1,
          generatedColumn: A + 1
        },
        consumer: new u(t.getArg(x, "map"), y)
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
      function(d, x) {
        var C = d.generatedLine - x.generatedOffset.generatedLine;
        return C || d.generatedColumn - x.generatedOffset.generatedColumn;
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
      for (var v = this._sections[b], d = v.consumer._generatedMappings, x = 0; x < d.length; x++) {
        var C = d[x], N = v.consumer._sources.at(C.source);
        N = t.computeSourceURL(v.consumer.sourceRoot, N, this._sourceMapURL), this._sources.add(N), N = this._sources.indexOf(N);
        var A = null;
        C.name && (A = v.consumer._names.at(C.name), this._names.add(A), A = this._names.indexOf(A));
        var D = {
          source: N,
          generatedLine: C.generatedLine + (v.generatedOffset.generatedLine - 1),
          generatedColumn: C.generatedColumn + (v.generatedOffset.generatedLine === C.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
          originalLine: C.originalLine,
          originalColumn: C.originalColumn,
          name: A
        };
        this.__generatedMappings.push(D), typeof D.originalLine == "number" && this.__originalMappings.push(D);
      }
    l(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), l(this.__originalMappings, t.compareByOriginalPositions);
  }, Vs.IndexedSourceMapConsumer = h, Vs;
}
var bd = {}, Ty;
function XE() {
  if (Ty) return bd;
  Ty = 1;
  var t = a1().SourceMapGenerator, r = fo(), i = /(\r?\n)/, s = 10, l = "$$$isSourceNode$$$";
  function u(f, p, h, m, y) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = y ?? null, this[l] = !0, m != null && this.add(m);
  }
  return u.fromStringWithSourceMap = function(p, h, m) {
    var y = new u(), _ = p.split(i), b = 0, v = function() {
      var A = E(), D = E() || "";
      return A + D;
      function E() {
        return b < _.length ? _[b++] : void 0;
      }
    }, d = 1, x = 0, C = null;
    return h.eachMapping(function(A) {
      if (C !== null)
        if (d < A.generatedLine)
          N(C, v()), d++, x = 0;
        else {
          var D = _[b] || "", E = D.substr(0, A.generatedColumn - x);
          _[b] = D.substr(A.generatedColumn - x), x = A.generatedColumn, N(C, E), C = A;
          return;
        }
      for (; d < A.generatedLine; )
        y.add(v()), d++;
      if (x < A.generatedColumn) {
        var D = _[b] || "";
        y.add(D.substr(0, A.generatedColumn)), _[b] = D.substr(A.generatedColumn), x = A.generatedColumn;
      }
      C = A;
    }, this), b < _.length && (C && N(C, v()), y.add(_.splice(b).join(""))), h.sources.forEach(function(A) {
      var D = h.sourceContentFor(A);
      D != null && (m != null && (A = r.join(m, A)), y.setSourceContent(A, D));
    }), y;
    function N(A, D) {
      if (A === null || A.source === void 0)
        y.add(D);
      else {
        var E = m ? r.join(m, A.source) : A.source;
        y.add(new u(
          A.originalLine,
          A.originalColumn,
          E,
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
    return this.walk(function(x, C) {
      h.code += x, C.source !== null && C.line !== null && C.column !== null ? ((_ !== C.source || b !== C.line || v !== C.column || d !== C.name) && m.addMapping({
        source: C.source,
        original: {
          line: C.line,
          column: C.column
        },
        generated: {
          line: h.line,
          column: h.column
        },
        name: C.name
      }), _ = C.source, b = C.line, v = C.column, d = C.name, y = !0) : y && (m.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), _ = null, y = !1);
      for (var N = 0, A = x.length; N < A; N++)
        x.charCodeAt(N) === s ? (h.line++, h.column = 0, N + 1 === A ? (_ = null, y = !1) : y && m.addMapping({
          source: C.source,
          original: {
            line: C.line,
            column: C.column
          },
          generated: {
            line: h.line,
            column: h.column
          },
          name: C.name
        })) : h.column++;
    }), this.walkSourceContents(function(x, C) {
      m.setSourceContent(x, C);
    }), { code: h.code, map: m };
  }, bd.SourceNode = u, bd;
}
var Oy;
function $E() {
  return Oy || (Oy = 1, Gs.SourceMapGenerator = a1().SourceMapGenerator, Gs.SourceMapConsumer = YE().SourceMapConsumer, Gs.SourceNode = XE().SourceNode), Gs;
}
var Dy;
function QE() {
  return Dy || (Dy = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ln(), s = void 0;
    try {
      var l = $E();
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
  })(eu, eu.exports)), eu.exports;
}
var My;
function KE() {
  return My || (My = 1, (function(t, r) {
    r.__esModule = !0;
    function i(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = lh(), l = Vn(), u = i(l), f = ln(), p = QE(), h = i(p);
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
      appendToBuffer: function(v, d, x) {
        return f.isArray(v) || (v = [v]), v = this.source.wrap(v, d), this.environment.isSimple ? ["return ", v, ";"] : x ? ["buffer += ", v, ";"] : (v.appendToBuffer = !0, v);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(v, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", v, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(v, d, x, C) {
        this.environment = v, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !C, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(v, d), this.useDepths = this.useDepths || v.useDepths || v.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || v.useBlockParams;
        var N = v.opcodes, A = void 0, D = void 0, E = void 0, T = void 0;
        for (E = 0, T = N.length; E < T; E++)
          A = N[E], this.source.currentLocation = A.loc, D = D || A.loc, this[A.opcode].apply(this, A.args);
        if (this.source.currentLocation = D, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), C ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(C);
        if (this.isChild)
          return M;
        var k = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var I = this.context, X = I.programs, P = I.decorators;
        for (E = 0, T = X.length; E < T; E++)
          X[E] && (k[E] = X[E], P[E] && (k[E + "_d"] = P[E], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), C ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), d.srcName ? (k = k.toStringWithSourceMap({ file: d.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(v) {
        var d = this, x = "", C = this.stackVars.concat(this.registers.list);
        C.length > 0 && (x += ", " + C.join(", "));
        var N = 0;
        Object.keys(this.aliases).forEach(function(E) {
          var T = d.aliases[E];
          T.children && T.referenceCount > 1 && (x += ", alias" + ++N + "=" + E, T.children[0] = "alias" + N);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var A = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && A.push("blockParams"), this.useDepths && A.push("depths");
        var D = this.mergeSource(x);
        return v ? (A.push(D), Function.apply(this, A)) : this.source.wrap(["function(", A.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(v) {
        var d = this.environment.isSimple, x = !this.forceBuffer, C = void 0, N = void 0, A = void 0, D = void 0;
        return this.source.each(function(E) {
          E.appendToBuffer ? (A ? E.prepend("  + ") : A = E, D = E) : (A && (N ? A.prepend("buffer += ") : C = !0, D.add(";"), A = D = void 0), N = !0, d || (x = !1));
        }), x ? A ? (A.prepend("return "), D.add(";")) : N || this.source.push('return "";') : (v += ", buffer = " + (C ? "" : this.initializeBuffer()), A ? (A.prepend("return buffer + "), D.add(";")) : this.source.push("return buffer;")), v && this.source.prepend("var " + v.substring(2) + (C ? "" : `;
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
        var d = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(v, 0, x);
        var C = this.popStack();
        x.splice(1, 0, C), this.push(this.source.functionCall(d, "call", x));
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
        var x = this.topStack();
        d.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(v, "call", d), "}"]);
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
      lookupOnContext: function(v, d, x, C) {
        var N = 0;
        !C && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(v[N++])) : this.pushContext(), this.resolvePath("context", v, N, d, x);
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
      lookupData: function(v, d, x) {
        v ? this.pushStackLiteral("container.data(data, " + v + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, x);
      },
      resolvePath: function(v, d, x, C, N) {
        var A = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(_(this.options.strict && N, this, d, x, v));
          return;
        }
        for (var D = d.length; x < D; x++)
          this.replaceStack(function(E) {
            var T = A.nameLookup(E, d[x], v);
            return C ? [" && ", T] : [" != null ? ", T, " : ", E];
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
        var x = this.nameLookup("decorators", d, "decorator"), C = this.setupHelperArgs(d, v);
        this.decorators.push(["fn = ", this.decorators.functionCall(x, "", ["fn", "props", "container", C]), " || fn;"]);
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
      invokeHelper: function(v, d, x) {
        var C = this.popStack(), N = this.setupHelper(v, d), A = [];
        x && A.push(N.name), A.push(C), this.options.strict || A.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(A, "||"), ")"], E = this.source.functionCall(D, "call", N.callParams);
        this.push(E);
      },
      itemsSeparatedBy: function(v, d) {
        var x = [];
        x.push(v[0]);
        for (var C = 1; C < v.length; C++)
          x.push(d, v[C]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(v, d) {
        var x = this.setupHelper(v, d);
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
      invokeAmbiguous: function(v, d) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var C = this.setupHelper(0, v, d), N = this.lastHelper = this.nameLookup("helpers", v, "helper"), A = ["(", "(helper = ", N, " || ", x, ")"];
        this.options.strict || (A[0] = "(helper = ", A.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", A, C.paramsInit ? ["),(", C.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", C.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(v, d, x) {
        var C = [], N = this.setupParams(d, 1, C);
        v && (d = this.popStack(), delete N.name), x && (N.indent = JSON.stringify(x)), N.helpers = "helpers", N.partials = "partials", N.decorators = "container.decorators", v ? C.unshift(d) : C.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (N.depths = "depths"), N = this.objectLiteral(N), C.push(N), this.push(this.source.functionCall("container.invokePartial", "", C));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(v) {
        var d = this.popStack(), x = void 0, C = void 0, N = void 0;
        this.trackIds && (N = this.popStack()), this.stringParams && (C = this.popStack(), x = this.popStack());
        var A = this.hash;
        x && (A.contexts[v] = x), C && (A.types[v] = C), N && (A.ids[v] = N), A.values[v] = d;
      },
      pushId: function(v, d, x) {
        v === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : v === "PathExpression" ? this.pushString(d) : v === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: y,
      compileChildren: function(v, d) {
        for (var x = v.children, C = void 0, N = void 0, A = 0, D = x.length; A < D; A++) {
          C = x[A], N = new this.compiler();
          var E = this.matchExistingProgram(C);
          if (E == null) {
            this.context.programs.push("");
            var T = this.context.programs.length;
            C.index = T, C.name = "program" + T, this.context.programs[T] = N.compile(C, d, this.context, !this.precompile), this.context.decorators[T] = N.decorators, this.context.environments[T] = C, this.useDepths = this.useDepths || N.useDepths, this.useBlockParams = this.useBlockParams || N.useBlockParams, C.useDepths = this.useDepths, C.useBlockParams = this.useBlockParams;
          } else
            C.index = E.index, C.name = "program" + E.index, this.useDepths = this.useDepths || E.useDepths, this.useBlockParams = this.useBlockParams || E.useBlockParams;
        }
      },
      matchExistingProgram: function(v) {
        for (var d = 0, x = this.context.environments.length; d < x; d++) {
          var C = this.context.environments[d];
          if (C && C.equals(v))
            return C;
        }
      },
      programExpression: function(v) {
        var d = this.environment.children[v], x = [d.index, "data", d.blockParams];
        return (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths"), "container.program(" + x.join(", ") + ")";
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
        var d = ["("], x = void 0, C = void 0, N = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var A = this.popStack(!0);
        if (A instanceof m)
          x = [A.value], d = ["(", x], N = !0;
        else {
          C = !0;
          var D = this.incrStack();
          d = ["((", this.push(D), " = ", A, ")"], x = this.topStack();
        }
        var E = v.call(this, x);
        N || this.popStack(), C && this.stackSlot--, this.push(d.concat(E, ")"));
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
        for (var d = 0, x = v.length; d < x; d++) {
          var C = v[d];
          if (C instanceof m)
            this.compileStack.push(C);
          else {
            var N = this.incrStack();
            this.pushSource([N, " = ", C, ";"]), this.compileStack.push(N);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(v) {
        var d = this.isInline(), x = (d ? this.inlineStack : this.compileStack).pop();
        if (!v && x instanceof m)
          return x.value;
        if (!d) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
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
      setupHelper: function(v, d, x) {
        var C = [], N = this.setupHelperArgs(d, v, C, x), A = this.nameLookup("helpers", d, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: C,
          paramsInit: N,
          name: A,
          callParams: [D].concat(C)
        };
      },
      setupParams: function(v, d, x) {
        var C = {}, N = [], A = [], D = [], E = !x, T = void 0;
        E && (x = []), C.name = this.quotedString(v), C.hash = this.popStack(), this.trackIds && (C.hashIds = this.popStack()), this.stringParams && (C.hashTypes = this.popStack(), C.hashContexts = this.popStack());
        var M = this.popStack(), k = this.popStack();
        (k || M) && (C.fn = k || "container.noop", C.inverse = M || "container.noop");
        for (var I = d; I--; )
          T = this.popStack(), x[I] = T, this.trackIds && (D[I] = this.popStack()), this.stringParams && (A[I] = this.popStack(), N[I] = this.popStack());
        return E && (C.args = this.source.generateArray(x)), this.trackIds && (C.ids = this.source.generateArray(D)), this.stringParams && (C.types = this.source.generateArray(A), C.contexts = this.source.generateArray(N)), this.options.data && (C.data = "data"), this.useBlockParams && (C.blockParams = "blockParams"), C;
      },
      setupHelperArgs: function(v, d, x, C) {
        var N = this.setupParams(v, d, x);
        return N.loc = JSON.stringify(this.source.currentLocation), N = this.objectLiteral(N), C ? (this.useRegister("options"), x.push("options"), ["options=", N]) : x ? (x.push(N), "") : N;
      }
    }, (function() {
      for (var b = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), v = y.RESERVED_WORDS = {}, d = 0, x = b.length; d < x; d++)
        v[b[d]] = !0;
    })(), y.isValidJavaScriptVariableName = function(b) {
      return !y.RESERVED_WORDS[b] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(b);
    };
    function _(b, v, d, x, C) {
      var N = v.popStack(), A = d.length;
      for (b && A--; x < A; x++)
        N = v.nameLookup(N, d[x], C);
      return b ? [v.aliasable("container.strict"), "(", N, ", ", v.quotedString(d[x]), ", ", JSON.stringify(v.source.currentLocation), " )"] : N;
    }
    r.default = y, t.exports = r.default;
  })(Wl, Wl.exports)), Wl.exports;
}
var ky;
function JE() {
  return ky || (ky = 1, (function(t, r) {
    r.__esModule = !0;
    function i(A) {
      return A && A.__esModule ? A : { default: A };
    }
    var s = PE(), l = i(s), u = e1(), f = i(u), p = HE(), h = qE(), m = KE(), y = i(m), _ = t1(), b = i(_), v = W0(), d = i(v), x = l.default.create;
    function C() {
      var A = x();
      return A.compile = function(D, E) {
        return h.compile(D, E, A);
      }, A.precompile = function(D, E) {
        return h.precompile(D, E, A);
      }, A.AST = f.default, A.Compiler = h.Compiler, A.JavaScriptCompiler = y.default, A.Parser = p.parser, A.parse = p.parse, A.parseWithoutProcessing = p.parseWithoutProcessing, A;
    }
    var N = C();
    N.create = C, d.default(N), N.Visitor = b.default, N.default = N, r.default = N, t.exports = r.default;
  })(kl, kl.exports)), kl.exports;
}
var Zt = JE();
function Hi(t, r) {
  Zt.helpers[t] || Zt.registerHelper(t, r);
}
Hi("add", (t, r) => Number(t) + Number(r));
Hi("join", (t, r) => Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "");
Hi("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
Hi("indent", (t, r) => {
  const i = " ".repeat(Math.max(0, Number(t) || 0));
  return String(r ?? "").split(`
`).join(`
${i}`);
});
Hi("json", (t) => JSON.stringify(t));
Hi(
  "xmlEscape",
  (t) => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
);
const jy = "[[[crec_veryUniqueUserPlaceHolder]]]", Ry = "[[[crec_veryUniqueCharPlaceHolder]]]", WE = (t) => t === "stDescription", xu = (t, r) => WE(r) ? { ...t, char: "{{char}}", user: "{{user}}" } : t, Eu = (t, r) => {
  const i = t.replaceAll("{{user}}", jy).replaceAll("{{char}}", Ry);
  return r(i).replaceAll(jy, "{{user}}").replaceAll(Ry, "{{char}}");
}, Gt = SillyTavern.getContext(), er = [
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
new v0("dumb", {}).getSettings();
async function eC({
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
  const d = Gt.extensionSettings.connectionManager?.profiles?.find((I) => I.id === t);
  if (!d)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const x = d.api ? Gt.CONNECT_API_MAP[d.api]?.selected : void 0;
  if (!x)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const C = {};
  C.char = l.fields.name?.value || "{{char}}", C.user = y && xr ? xr : "{{user}}", C.persona = "{{persona}}", C.targetField = b, C.userInstructions = Zt.compile(r.trim(), { noEscape: !0 })(C);
  const N = l.draftFields[b]?.prompt ?? l.fields[b]?.prompt ?? "";
  C.fieldSpecificInstructions = Zt.compile(N, { noEscape: !0 })({
    ...C,
    char: b === "mes_example" ? "{{char}}" : C.char,
    user: b === "mes_example" ? "{{user}}" : C.user
  }), C.activeFormatInstructions = Zt.compile(h.content, { noEscape: !0 })(
    C
  );
  {
    const I = [];
    l.selectedCharacterIndexes.forEach((X) => {
      const P = parseInt(X), V = u[P];
      V && I.push(V);
    }), C.characters = I;
  }
  {
    const I = {};
    Object.entries(f).filter(
      ([X, P]) => P.length > 0 && l.selectedWorldNames.includes(X) && P.some((V) => !V.disable)
    ).forEach(([X, P]) => {
      I[X] = P.filter((V) => !V.disable);
    }), C.lorebooks = I;
  }
  {
    const I = {}, X = {}, P = {}, V = b.startsWith("alternate_greetings_"), Q = vt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(l.fields).forEach(([me, Se]) => {
      let B = !1;
      if (Q) {
        const ae = me.startsWith("alternate_greetings_");
        V ? B = ae && me !== b || me === "first_mes" : B = ae;
      }
      if (!B) {
        const ae = Zt.compile(Se.value, { noEscape: !0 })({
          ...C,
          char: me === "mes_example" ? "{{char}}" : C.char,
          user: me === "mes_example" ? "{{user}}" : C.user
        });
        er.includes(me) ? I[Se.label] = ae : me.startsWith("alternate_greetings_") && (X[me] = ae);
      }
    }), Object.entries(l.draftFields || {}).forEach(([me, Se]) => {
      P[Se.label] = Zt.compile(Se.value, { noEscape: !0 })(C);
    });
    const de = {};
    Object.keys(I).length > 0 && (de.core = I), Object.keys(X).length > 0 && (de.alternate_greetings = X), Object.keys(P).length > 0 && (de.draft = P), C.fields = de;
  }
  const A = [];
  {
    for (const I of m) {
      if (I.promptName === "chatHistory") {
        const Q = await N0(x, i);
        if (Q.warnings && Q.warnings.length > 0)
          for (const de of Q.warnings)
            be("warning", de);
        A.push(...Q.result);
        continue;
      }
      const X = xu(structuredClone(C), I.promptName), P = p[I.promptName];
      if (!P)
        continue;
      const V = {
        role: I.role,
        content: Zt.compile(P.content, { noEscape: !0 })(X)
      };
      V.content = Eu(
        V.content,
        (Q) => Gt.substituteParams(Q)
      ), V.content && A.push(V);
    }
    s && A.push({
      role: "assistant",
      content: Zv(s, v)
    });
  }
  const D = Cu(), E = await Gt.ConnectionManagerRequestService.sendRequest(
    t,
    A,
    _,
    void 0,
    D
  ), T = s ? Zv(s, v) + E.content : E.content, M = $0(T, v);
  let k;
  if (typeof M == "string")
    k = M;
  else if (typeof M == "object" && M !== null)
    if ("response" in M && typeof M.response == "string")
      k = M.response;
    else {
      const I = Object.values(M)[0];
      k = I ? String(I) : "";
    }
  else
    k = "";
  return k;
}
const zn = "SillyTavern-Character-Creator-Chat", i1 = "0.3.0", s1 = "F_2.00", tC = [
  { value: "default", label: "Default (Use Preset)" },
  { value: "min", label: "Min" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "max", label: "Max" }
], nC = {
  EXTENSION: "charCreator"
}, Ws = [
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
], $e = {
  stDescription: Ld,
  charDefinitions: ah,
  lorebookDefinitions: q0,
  xmlFormat: bx,
  jsonFormat: _x,
  noneFormat: Sx,
  worldInfoCharDefinition: F0,
  existingFieldDefinitions: so,
  taskDescription: sh,
  outputFormatInstructions: ih,
  personaDescription: xx,
  reviseJsonPrompt: Ex,
  reviseXmlPrompt: Cx,
  reviseTaskDescription: wx,
  brainstormSystemPrompt: Z0
}, uh = {
  version: i1,
  formatVersion: s1,
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
      content: $e.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: $e.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: $e.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: $e.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: $e.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: $e.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: $e.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: so,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: sh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: ih,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: $e.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: $e.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: $e.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: $e.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    },
    brainstormSystemPrompt: {
      content: Z0,
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
function Cu() {
  const t = vt.getSettings();
  return t.thinkingLevel && t.thinkingLevel !== "default" ? { reasoning_effort: t.thinkingLevel } : {};
}
const vt = new v0(nC.EXTENSION, uh), rC = ["F_1.9", "F_1.10", "F_1.11", "F_1.12", "F_1.13"], aC = (t) => {
  const r = structuredClone(t);
  r.prompts = r.prompts ?? {};
  for (const i of Ws)
    r.prompts[i] || (r.prompts[i] = {
      content: $e[i],
      isDefault: !0,
      label: uh.prompts[i].label
    });
  return r.thinkingLevel = r.thinkingLevel ?? "default", r.prompts.reviseXmlPrompt.isDefault !== !1 && (r.prompts.reviseXmlPrompt.content = $e.reviseXmlPrompt), r.prompts.charDefinitions.isDefault && (r.prompts.charDefinitions.content = ah), r.prompts.worldInfoCharDefinition.isDefault && (r.prompts.worldInfoCharDefinition.content = F0), r;
};
async function iC() {
  return new Promise((t, r) => {
    vt.initializeSettings({
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
                  content: $e.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: $e.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: $e.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: $e.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: $e.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: $e.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: $e.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: so,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: sh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: ih,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: $e.personaDescription,
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
                  content: $e.personaDescription,
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
            return await be("info", `[${zn}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: $e.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: $e.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: $e.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: so,
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
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Ld), s;
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
              content: $e.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: $e.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: $e.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = ah), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = q0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = so), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Ld), s;
          }
        },
        // Every install at F_1.9 or later lands on F_2.00 in one idempotent step. See
        // LEGACY_FORMAT_VERSIONS above for why the original one-step-at-a-time chain could not work.
        ...rC.map((i) => ({ from: i, to: s1, action: aC }))
      ]
    }).then((i) => {
      t();
    }).catch((i) => {
      console.error(`[${zn}] Error initializing settings:`, i), be("error", `[${zn}] Failed to initialize settings: ${i.message}`), Gt.Popup.show.confirm(
        `[${zn}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s ? (vt.resetSettings(), be("success", `[${zn}] Settings reset. Reloading may be required.`)) : be("warning", `[${zn}] Continuing with default settings for this session.`);
      }).catch((s) => {
        console.error(`[${zn}] Failed to show settings reset prompt:`, s);
      }).finally(() => t());
    });
  });
}
const pe = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = Y.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("button", { className: l, ...s, children: t });
}, sC = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...l }) => {
  const u = Y.useMemo(() => {
    const f = [];
    return i || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [i, r, s]);
  if (s === "checkbox") {
    const f = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ S.jsxs("label", { className: f, children: [
      /* @__PURE__ */ S.jsx("input", { type: "checkbox", ...l }),
      t && /* @__PURE__ */ S.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ S.jsx("input", { type: s, className: u, ...l });
}, wu = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = Y.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("select", { className: l, ...s, children: t });
}, Kt = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const l = Y.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("textarea", { className: l, ...s, children: t });
};
var oC = m0(), Sn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(Sn || {}), Wr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Wr || {});
const lC = SillyTavern.getContext(), Pi = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: l = !1,
  onComplete: u
}) => {
  var f;
  const p = Y.useRef(null), h = Y.useRef(null), [m, y] = Y.useState(!1), [_, b] = Y.useState(null), v = Y.useRef(lC.uuidv4()), d = Y.useRef({
    id: v.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  Y.useEffect(() => {
    const A = p.current;
    if (!A) return;
    const D = (E) => {
      E.preventDefault(), l || x(Wr.CANCELLED);
    };
    return A.addEventListener("cancel", D), d.current.dlg = A, d.current.mainInput = h.current, Ai.util.popups.push(d.current), A.showModal || (A.classList.add("poly_dialog"), fv.registerDialog(A), new ResizeObserver((E) => {
      for (const T of E)
        fv.reposition(T.target);
    }).observe(A)), A.showModal(), $f(), () => {
      cv(Ai.util.popups, d.current), $f(), A.removeEventListener("cancel", D);
    };
  }, []);
  const x = async (A) => {
    var D, E;
    let T = A;
    if (r === Sn.INPUT && (A >= Wr.AFFIRMATIVE ? T = (D = h.current) == null ? void 0 : D.value : A === Wr.NEGATIVE ? T = !1 : A === Wr.CANCELLED ? T = null : T = !1), (E = s.customInputs) != null && E.length) {
      const k = new Map(
        s.customInputs.map((I) => {
          var X;
          const P = (X = p.current) == null ? void 0 : X.querySelector(`#${I.id}`);
          return [P.id, P.checked];
        })
      );
      d.current.inputResults = k;
    }
    if (d.current.result = A, d.current.value = T, s.onClosing && !await s.onClosing(d.current)) {
      y(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    y(!1), Ai.util.lastResult = {
      value: T,
      result: A,
      inputResults: d.current.inputResults
    };
    const M = p.current;
    M && (M.setAttribute("closing", ""), $f(), w2(M, async () => {
      var k;
      if (M.close(), s.onClose && await s.onClose(d.current), cv(Ai.util.popups, d.current), Ai.util.popups.length > 0) {
        const I = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), X = I?.getAttribute("data-id"), P = Ai.util.popups.find((V) => V.id === X);
        P && P.lastFocus && P.lastFocus.focus();
      }
      u(T);
    }));
  }, C = (A) => {
    A.target instanceof HTMLElement && A.target !== p.current && (b(A.target), d.current.lastFocus = A.target);
  }, N = async (A) => {
  };
  return oC.createPortal(
    /* @__PURE__ */ S.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const A = ["popup"];
          return s.wide && A.push("wide_dialogue_popup"), s.wider && A.push("wider_dialogue_popup"), s.large && A.push("large_dialogue_popup"), s.transparent && A.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && A.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && A.push("vertical_scrolling_dialogue_popup"), s.animation && A.push(`popup--animation-${s.animation}`), A.join(" ");
        })(),
        "data-id": v.current,
        onKeyDown: N,
        onFocus: C,
        children: /* @__PURE__ */ S.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ S.jsx("div", { className: "popup-content", children: t }),
          r === Sn.INPUT && /* @__PURE__ */ S.jsx(
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
          s.customInputs && /* @__PURE__ */ S.jsx("div", { className: "popup-inputs", children: s.customInputs.map((A) => /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: A.id, children: [
            /* @__PURE__ */ S.jsx("input", { type: "checkbox", id: A.id, defaultChecked: A.defaultState }),
            /* @__PURE__ */ S.jsx("span", { "data-i18n": A.label, children: A.label }),
            A.tooltip && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: A.tooltip,
                "data-i18n": `[title]${A.tooltip}`
              }
            )
          ] }, A.id)) }),
          r !== Sn.DISPLAY && /* @__PURE__ */ S.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((A, D) => {
              const E = typeof A == "string" ? { text: A, result: D + 2 } : A;
              return /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${E.classes ?? ""}`,
                  "data-result": E.result,
                  onClick: () => {
                    var T;
                    (T = E.action) == null || T.call(E), x(E.result ?? D + 2);
                  },
                  "data-i18n": E.text,
                  children: E.text
                },
                D
              );
            }),
            r !== Sn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => x(Wr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== Sn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => x(Wr.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === Sn.DISPLAY && /* @__PURE__ */ S.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => x(Wr.CANCELLED),
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
}, Ys = (t, r, i) => {
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
}, Sr = SillyTavern.getContext(), o1 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: l,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, h] = Y.useState(t ?? ""), [m, y] = Y.useState(Date.now()), { isEnabled: _, profiles: b, connectApiMap: v } = Y.useMemo(() => {
    var C, N;
    return (C = Sr.extensionSettings.disabledExtensions) != null && C.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((N = Sr.extensionSettings.connectionManager) == null ? void 0 : N.profiles) ?? [],
      connectApiMap: Sr.CONNECT_API_MAP
    };
  }, [m]);
  Y.useEffect(() => {
    if (!_) return;
    const C = (D) => {
      Ys(D, r, v) && (y(Date.now()), l?.(D));
    }, N = (D, E) => {
      const T = Ys(D, r, v), M = Ys(E, r, v);
      (T || M) && y(Date.now()), u?.(D, E), p === D.id && !M && (h(""), s?.(void 0));
    }, A = (D) => {
      Ys(D, r, v) && (y(Date.now()), f?.(D), p === D.id && (h(""), s?.(void 0)));
    };
    return Sr.eventSource.on("CONNECTION_PROFILE_CREATED", C), Sr.eventSource.on("CONNECTION_PROFILE_UPDATED", N), Sr.eventSource.on("CONNECTION_PROFILE_DELETED", A), () => {
      Sr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", C), Sr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", N), Sr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", A);
    };
  }, [_, p, r, v, s, l, u, f]);
  const d = Y.useMemo(() => {
    if (!_) return [];
    const C = b.filter((A) => Ys(A, r, v)), N = {};
    for (const [A, D] of Object.entries(r))
      N[A] = { label: D, profiles: [] };
    for (const A of C) {
      const D = v[A.api];
      N[D.selected] && N[D.selected].profiles.push(A);
    }
    for (const A of Object.values(N))
      A.profiles.sort((D, E) => (D.name ?? "").localeCompare(E.name ?? ""));
    return Object.values(N).filter((A) => A.profiles.length > 0);
  }, [_, b, r, v]), x = Y.useCallback(
    (C) => {
      const N = C.target.value;
      h(N);
      const A = b.find((D) => D.id === N);
      s?.(A);
    },
    [b, s]
  );
  return _ ? /* @__PURE__ */ S.jsxs(wu, { value: p, onChange: x, children: [
    /* @__PURE__ */ S.jsx("option", { value: "", children: i }),
    d.map((C) => /* @__PURE__ */ S.jsx("optgroup", { label: C.label, children: C.profiles.map((N) => /* @__PURE__ */ S.jsx("option", { value: N.id, children: N.name }, N.id)) }, C.label))
  ] }) : /* @__PURE__ */ S.jsx(wu, { disabled: !0, value: "", children: /* @__PURE__ */ S.jsx("option", { children: "Connection Manager disabled" }) });
}, uC = pu.memo(
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
      selectValue: x
    } = t, C = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !m ? 0.6 : 1
    }, N = { cursor: "pointer", flexShrink: 0 }, A = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ S.jsxs("li", { className: "sortable-list-item", style: C, "data-id": p, children: [
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
      s && b && v && /* @__PURE__ */ S.jsx(
        wu,
        {
          value: x,
          onChange: (D) => f(p, D.target.value),
          disabled: !m,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ S.jsx("option", { disabled: !0, children: "--" }) : d.map((D) => /* @__PURE__ */ S.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!b || !v) && /* @__PURE__ */ S.jsx("span", { style: A }),
      r && _ && /* @__PURE__ */ S.jsx(
        pe,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${m ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...N,
            marginRight: "10px",
            fontSize: "1.2em",
            color: m ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => l(p)
        }
      ),
      r && !_ && /* @__PURE__ */ S.jsx("span", { style: A }),
      i && y && /* @__PURE__ */ S.jsx(
        pe,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...N,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(p)
        }
      ),
      i && !y && /* @__PURE__ */ S.jsx("span", { style: { ...A, marginRight: 0 } })
    ] });
  }
), cC = ({
  items: t,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: s = !1,
  showSelectInput: l = !1,
  sortableJsOptions: u = {}
}) => {
  const f = Y.useRef(null), p = Y.useRef(null);
  Y.useEffect(() => (f.current && (p.current = Me.create(f.current, {
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
      const d = Array.from(t), [x] = d.splice(b, 1);
      d.splice(v, 0, x), r(d);
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
  return /* @__PURE__ */ S.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ S.jsx(
    uC,
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
  const [d, x] = Y.useState(!1), [C, N] = Y.useState(""), A = Y.useRef(null);
  Y.useEffect(() => {
    const k = (I) => {
      A.current && !A.current.contains(I.target) && x(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), Y.useEffect(() => {
    d || N("");
  }, [d]);
  const D = Y.useMemo(() => {
    if (!h) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ..._
    };
    return new Ui(t, k);
  }, [t, h, _]), E = Y.useMemo(() => !h || !C.trim() || !D ? t : D.search(C.trim()).map((k) => k.item), [t, C, h, D]), T = async (k) => {
    let I;
    u ? I = r.includes(k) ? r.filter((X) => X !== k) : [...r, k] : I = r.includes(k) ? [] : [k], !(p && !await Promise.resolve(p(r, I))) && (i(I), l && x(!1));
  }, M = Y.useMemo(() => {
    var k;
    return r.length === 0 ? s : r.length === 1 ? ((k = t.find((I) => I.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ S.jsxs(
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
        /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !f && x(!d),
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
              /* @__PURE__ */ S.jsx("i", { className: `fas ${d ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        d && /* @__PURE__ */ S.jsxs(
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
                    sC,
                    {
                      type: "text",
                      placeholder: m,
                      value: C,
                      onChange: (k) => N(k.target.value),
                      autoFocus: !0,
                      className: b
                    }
                  )
                }
              ),
              /* @__PURE__ */ S.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: E.length > 0 ? E.map((k) => /* @__PURE__ */ S.jsx(
                fC,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: T
                },
                k.value
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
}, fC = pu.memo(({ item: t, isSelected: r, onClick: i }) => {
  const [s, l] = Y.useState(!1);
  return /* @__PURE__ */ S.jsxs(
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
        /* @__PURE__ */ S.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ S.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), _d = SillyTavern.getContext(), Au = ({
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
  const v = Y.useMemo(() => r.find((A) => A.value === t), [r, t]), d = Y.useCallback((A) => A ? i.includes(A) : !1, [i]), x = async () => {
    const A = await _d.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!A || A.trim() === "") return;
    const D = A.trim();
    if (r.some((T) => T.value === D)) {
      await be("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: D, label: D };
    if (m) {
      const T = await Promise.resolve(m(D));
      if (!T.confirmed) return;
      T.value && (typeof T.value == "string" ? E = { value: T.value, label: T.value } : E = T.value);
    }
    u([...r, E]), l(E.value, t);
  }, C = async () => {
    if (!v) {
      await be("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(v.value)) {
      await be("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const A = await _d.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${v.label}":`,
      v.label
    );
    if (!A || A.trim() === "" || A.trim() === v.value) return;
    const D = A.trim();
    if (r.some((M) => M.value === D)) {
      await be("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: D, label: D };
    if (y) {
      const M = await Promise.resolve(y(v.value, D));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? E = { value: M.value, label: M.value } : E = M.value);
    }
    const T = r.map((M) => M.value === v.value ? E : M);
    u(T), l(E.value, t);
  }, N = async () => {
    var A;
    if (!v) {
      await be("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(v.value)) {
      await be("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await _d.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${v.label}"?`
    ) || _ && !await Promise.resolve(_(v.value)))
      return;
    const D = r.findIndex((M) => M.value === v.value), E = r.filter((M) => M.value !== v.value);
    u(E);
    let T;
    if (E.length > 0) {
      const M = Math.min(D, E.length - 1);
      T = (A = E[M]) == null ? void 0 : A.value;
    }
    l(T, t);
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ S.jsx(wu, { value: t ?? "", onChange: (A) => l(A.target.value, t), children: r.map((A) => /* @__PURE__ */ S.jsx("option", { value: A.value, children: A.label }, A.value)) }),
    f && /* @__PURE__ */ S.jsx(
      pe,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: x,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ S.jsx(
      pe,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: C,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ S.jsx(
      pe,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: N,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    b?.map((A) => /* @__PURE__ */ S.jsx(
      pe,
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
}, l1 = () => {
  const [, t] = Y.useState(0);
  return Y.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, Sd = SillyTavern.getContext(), dC = () => {
  const t = l1(), r = vt.getSettings(), [i, s] = Y.useState(Ws[0]), l = Y.useCallback(
    (E) => {
      const T = vt.getSettings();
      E(T), vt.saveSettings(), t();
    },
    [t]
  ), u = Y.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((E) => ({ value: E, label: E })),
    [r.mainContextTemplatePresets]
  ), f = Y.useMemo(
    () => Object.entries(r.prompts).map(([E, T]) => ({
      value: E,
      label: `${T.label} (${E})`
    })),
    [r.prompts]
  ), p = Y.useMemo(() => {
    const E = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return E ? E.prompts.map((T) => {
      const M = r.prompts[T.promptName], k = M ? `${M.label} (${T.promptName})` : T.promptName;
      return {
        id: T.promptName,
        label: k,
        enabled: T.enabled,
        selectValue: T.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), h = (E) => {
    l((T) => {
      T.mainContextTemplatePreset = E ?? "default";
    });
  }, m = (E) => {
    l((T) => {
      const M = {};
      E.forEach((k) => {
        M[k.value] = T.mainContextTemplatePresets[k.value] ?? structuredClone(
          T.mainContextTemplatePresets[T.mainContextTemplatePreset] ?? T.mainContextTemplatePresets.default
        );
      }), T.mainContextTemplatePresets = M;
    });
  }, y = (E) => {
    l((T) => {
      const M = E.map((X) => ({
        promptName: X.id,
        enabled: X.enabled,
        role: X.selectValue ?? "user"
      })), k = {
        ...T.mainContextTemplatePresets[T.mainContextTemplatePreset],
        prompts: M
      }, I = {
        ...T.mainContextTemplatePresets,
        [T.mainContextTemplatePreset]: k
      };
      T.mainContextTemplatePresets = I;
    });
  }, _ = async () => {
    await Sd.Popup.show.confirm("Restore default", "Are you sure?") && l((T) => {
      T.mainContextTemplatePresets = {
        ...T.mainContextTemplatePresets,
        default: structuredClone(uh.mainContextTemplatePresets.default)
      }, T.mainContextTemplatePreset === "default" ? t() : T.mainContextTemplatePreset = "default";
    });
  }, b = (E) => {
    l((T) => {
      const M = E.map((P) => P.value);
      Object.keys(T.prompts).filter((P) => !M.includes(P)).forEach((P) => {
        Object.values(T.mainContextTemplatePresets).forEach((V) => {
          V.prompts = V.prompts.filter((Q) => Q.promptName !== P);
        });
      });
      const X = {};
      E.forEach((P) => {
        X[P.value] = T.prompts[P.value] ?? { content: "", isDefault: !1, label: P.label };
      }), T.prompts = X;
    });
  }, v = (E) => {
    const T = Ud(E);
    return T ? r.prompts[T] ? (be("error", `Prompt name already exists: ${T}`), { confirmed: !1 }) : (l((M) => {
      M.prompts = {
        ...M.prompts,
        [T]: { content: M.prompts[i]?.content ?? "", isDefault: !1, label: E }
      };
      const k = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([I, X]) => [
          I,
          {
            ...X,
            prompts: [...X.prompts, { enabled: !0, promptName: T, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = k;
    }), s(T), { confirmed: !0, value: T }) : (be("error", `Invalid prompt name: ${E}`), { confirmed: !1 });
  }, d = (E, T) => {
    const M = Ud(T);
    return M ? r.prompts[M] ? (be("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (l((k) => {
      const { [E]: I, ...X } = k.prompts;
      k.prompts = {
        ...X,
        [M]: { ...I, label: T }
      };
      const P = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([V, Q]) => [
          V,
          {
            ...Q,
            prompts: Q.prompts.map((de) => de.promptName === E ? { ...de, promptName: M } : de)
          }
        ])
      );
      k.mainContextTemplatePresets = P;
    }), s(M), { confirmed: !0, value: M }) : (be("error", `Invalid prompt name: ${T}`), { confirmed: !1 });
  }, x = (E) => {
    const T = E.target.value;
    l((M) => {
      const k = M.prompts[i];
      k && (M.prompts = {
        ...M.prompts,
        [i]: {
          ...k,
          // Copy existing properties
          content: T,
          isDefault: Ws.includes(i) ? $e[i] === T : !1
        }
      });
    });
  }, C = async () => {
    const E = r.prompts[i];
    if (!E) return be("warning", "No prompt selected.");
    await Sd.Popup.show.confirm("Restore Default", `Restore default for "${E.label}"?`) && l((M) => {
      M.prompts = {
        ...M.prompts,
        [i]: {
          ...M.prompts[i],
          content: $e[i]
        }
      };
    });
  }, N = async () => {
    await Sd.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (vt.resetSettings(), t(), be("success", "Settings have been reset."));
  }, A = r.prompts[i], D = Ws.includes(i);
  return /* @__PURE__ */ S.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ S.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ S.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ S.jsx(
          pe,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: _
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx(
        Au,
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
      /* @__PURE__ */ S.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(
        cC,
        {
          items: p,
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
          pe,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: C
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx(
        Au,
        {
          label: "Prompt",
          items: f,
          value: i,
          readOnlyValues: Ws,
          onChange: (E) => s(E ?? ""),
          onItemsChange: b,
          onCreate: v,
          onRename: d,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        Kt,
        {
          value: A?.content ?? "",
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
          onChange: (E) => l((T) => {
            T.showSaveAsWorldInfoEntry.show = E.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ S.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ S.jsxs(pe, { className: "danger_button", style: { width: "auto" }, onClick: N, children: [
      /* @__PURE__ */ S.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, zy = ({
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
  onDelete: x,
  onOpenReviseSessions: C
}) => /* @__PURE__ */ S.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ S.jsx("label", { children: r }),
  /* @__PURE__ */ S.jsxs("div", { className: `field-container ${l ? "large-field" : ""}`, children: [
    /* @__PURE__ */ S.jsx(Kt, { value: i, onChange: (N) => m(t, N.target.value), rows: u }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
      /* @__PURE__ */ S.jsx(pe, { onClick: () => _(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ S.jsx(pe, { onClick: () => b(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ S.jsx(pe, { onClick: () => v(t), title: "Clear field content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" }) }),
      C && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ S.jsx(pe, { onClick: () => C(t), title: "Revise with AI chat", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && d && /* @__PURE__ */ S.jsx(pe, { onClick: () => d(t), title: "Compare with loaded character", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && x && /* @__PURE__ */ S.jsx(pe, { onClick: () => x(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ S.jsx(
    Kt,
    {
      value: s,
      onChange: (N) => y(t, N.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), hC = SillyTavern.getContext(), pC = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: l,
  isGenerating: u
}) => {
  const [f, p] = Y.useState(0);
  Y.useEffect(() => {
    f >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, f]);
  const h = () => {
    const b = [...t, { value: "", prompt: "" }];
    r(b), p(b.length - 1);
  }, m = async () => {
    if (t.length === 0) return;
    if (await hC.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const v = t.filter((d, x) => x !== f);
      r(v);
    }
  }, y = (b, v, d) => {
    r(t.map((x, C) => C === b ? { ...x, [v]: d } : x));
  }, _ = t[f];
  return /* @__PURE__ */ S.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ S.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ S.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((b, v) => /* @__PURE__ */ S.jsxs(
            pe,
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
      /* @__PURE__ */ S.jsxs(pe, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ S.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ S.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ S.jsx(
          Kt,
          {
            value: _?.value ?? "",
            onChange: (b) => y(f, "value", b.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(
          Kt,
          {
            value: _?.prompt ?? "",
            onChange: (b) => y(f, "prompt", b.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ S.jsx(pe, { onClick: () => i(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ S.jsx(pe, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ S.jsx(
          pe,
          {
            onClick: () => y(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ S.jsx(pe, { onClick: () => l(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ S.jsx(
          pe,
          {
            onClick: m,
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
      var u = this, f, p = function(E) {
        if (E = u.postProcess(E, s), l) {
          setTimeout(function() {
            l(E);
          }, 0);
          return;
        } else
          return E;
      }, h = i.length, m = r.length, y = 1, _ = h + m;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var b = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, v = Date.now() + b, d = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(d[0], i, r, 0, s);
      if (d[0].oldPos + 1 >= m && x + 1 >= h)
        return p(this.buildValues(d[0].lastComponent, i, r));
      var C = -1 / 0, N = 1 / 0, A = function() {
        for (var E = Math.max(C, -y); E <= Math.min(N, y); E += 2) {
          var T = void 0, M = d[E - 1], k = d[E + 1];
          M && (d[E - 1] = void 0);
          var I = !1;
          if (k) {
            var X = k.oldPos - E;
            I = k && 0 <= X && X < h;
          }
          var P = M && M.oldPos + 1 < m;
          if (!I && !P) {
            d[E] = void 0;
            continue;
          }
          if (!P || I && M.oldPos < k.oldPos ? T = u.addToPath(k, !0, !1, 0, s) : T = u.addToPath(M, !1, !0, 1, s), x = u.extractCommon(T, i, r, E, s), T.oldPos + 1 >= m && x + 1 >= h)
            return p(u.buildValues(T.lastComponent, i, r)) || !0;
          d[E] = T, T.oldPos + 1 >= m && (N = Math.min(N, E - 1)), x + 1 >= h && (C = Math.max(C, E + 1));
        }
        y++;
      };
      if (l)
        (function E() {
          setTimeout(function() {
            if (y > _ || Date.now() > v)
              return l(void 0);
            A() || E();
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
), mC = /* @__PURE__ */ (function() {
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
})(), gC = (
  /** @class */
  (function(t) {
    mC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(aa)
);
new gC();
function Ly(t, r) {
  var i;
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[i] != r[i])
      return t.slice(0, i);
  return t.slice(0, i);
}
function Py(t, r) {
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
function Xs(t, r) {
  return Hd(t, r, "");
}
function au(t, r) {
  return qd(t, r, "");
}
function Iy(t, r) {
  return r.slice(0, vC(t, r));
}
function vC(t, r) {
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
function $s(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function Jr(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var u1 = /* @__PURE__ */ (function() {
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
})(), Nu = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", yC = new RegExp("[".concat(Nu, "]+|\\s+|[^").concat(Nu, "]"), "ug"), bC = (
  /** @class */
  (function(t) {
    u1(r, t);
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
        l = i.match(yC) || [];
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
        p.added ? u = p : p.removed ? f = p : ((u || f) && By(l, f, u, p), l = p, u = null, f = null);
      }), (u || f) && By(l, f, u, null), i;
    }, r;
  })(aa)
), _C = new bC();
function c1(t, r, i) {
  return _C.diff(t, r, i);
}
function By(t, r, i, s) {
  if (r && i) {
    var l = Jr(r.value), u = $s(r.value), f = Jr(i.value), p = $s(i.value);
    if (t) {
      var h = Ly(l, f);
      t.value = qd(t.value, f, h), r.value = Xs(r.value, h), i.value = Xs(i.value, h);
    }
    if (s) {
      var m = Py(u, p);
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
    var _ = Jr(s.value), b = Jr(r.value), v = $s(r.value), d = Ly(_, b);
    r.value = Xs(r.value, d);
    var x = Py(Xs(_, d), v);
    r.value = au(r.value, x), s.value = Hd(s.value, _, x), t.value = qd(t.value, _, _.slice(0, _.length - x.length));
  } else if (s) {
    var C = Jr(s.value), N = $s(r.value), A = Iy(N, C);
    r.value = au(r.value, A);
  } else if (t) {
    var D = $s(t.value), E = Jr(r.value), A = Iy(D, E);
    r.value = Xs(r.value, A);
  }
}
var SC = (
  /** @class */
  (function(t) {
    u1(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(Nu, "]+|[^\\S\\n\\r]+|[^").concat(Nu, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(aa)
);
new SC();
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
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = f1, i;
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
new EC();
function f1(t, r) {
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
var CC = /* @__PURE__ */ (function() {
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
})(), wC = (
  /** @class */
  (function(t) {
    CC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(aa)
);
new wC();
var AC = /* @__PURE__ */ (function() {
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
})(), NC = (
  /** @class */
  (function(t) {
    AC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(aa)
);
new NC();
var TC = /* @__PURE__ */ (function() {
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
})(), OC = (
  /** @class */
  (function(t) {
    TC(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = f1, i;
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
new OC();
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
var DC = /* @__PURE__ */ (function() {
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
})(), MC = (
  /** @class */
  (function(t) {
    DC(r, t);
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
new MC();
const kC = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = Y.useMemo(() => {
    const l = c1(t, r);
    let u = "", f = "";
    return l.forEach((p) => {
      const m = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += m), p.removed || (f += m);
    }), { originalHtml: u, newHtml: f };
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ S.jsxs("h3", { children: [
      "Compare Changes for: ",
      i
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
function ne(t, r, i) {
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
class d1 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const h1 = {};
function za(t) {
  return h1;
}
function p1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, l]) => r.indexOf(+s) === -1).map(([s, l]) => l);
}
function Zd(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function ch(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function fh(t) {
  return t == null;
}
function dh(t) {
  const r = t.startsWith("^") ? 1 : 0, i = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, i);
}
function jC(t, r) {
  const i = (t.toString().split(".")[1] || "").length, s = r.toString();
  let l = (s.split(".")[1] || "").length;
  if (l === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (l = Number.parseInt(h[1]));
  }
  const u = i > l ? i : l, f = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const Uy = Symbol("evaluating");
function it(t, r, i) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== Uy)
        return s === void 0 && (s = Uy, s = i()), s;
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
function Pa(t, r, i) {
  Object.defineProperty(t, r, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ia(...t) {
  const r = {};
  for (const i of t) {
    const s = Object.getOwnPropertyDescriptors(i);
    Object.assign(r, s);
  }
  return Object.defineProperties({}, r);
}
function Hy(t) {
  return JSON.stringify(t);
}
const m1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Tu(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const RC = ch(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function oo(t) {
  if (Tu(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(Tu(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function g1(t) {
  return oo(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const zC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ju(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ia(t, r, i) {
  const s = new t._zod.constr(r ?? t._zod.def);
  return (!r || i?.parent) && (s._zod.parent = t), s;
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
function LC(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const PC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function IC(t, r) {
  const i = t._zod.def, s = Ia(t._zod.def, {
    get shape() {
      const l = {};
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (l[u] = i.shape[u]);
      }
      return Pa(this, "shape", l), l;
    },
    checks: []
  });
  return ia(t, s);
}
function BC(t, r) {
  const i = t._zod.def, s = Ia(t._zod.def, {
    get shape() {
      const l = { ...t._zod.def.shape };
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete l[u];
      }
      return Pa(this, "shape", l), l;
    },
    checks: []
  });
  return ia(t, s);
}
function UC(t, r) {
  if (!oo(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = t._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const l = Ia(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape, ...r };
      return Pa(this, "shape", u), u;
    },
    checks: []
  });
  return ia(t, l);
}
function HC(t, r) {
  if (!oo(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...r };
      return Pa(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return ia(t, i);
}
function qC(t, r) {
  const i = Ia(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...r._zod.def.shape };
      return Pa(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ia(t, i);
}
function FC(t, r, i) {
  const s = Ia(r._zod.def, {
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
      return Pa(this, "shape", u), u;
    },
    checks: []
  });
  return ia(r, s);
}
function ZC(t, r, i) {
  const s = Ia(r._zod.def, {
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
      return Pa(this, "shape", u), u;
    },
    checks: []
  });
  return ia(r, s);
}
function zi(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let i = r; i < t.issues.length; i++)
    if (t.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function v1(t, r) {
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
function hh(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function lo(...t) {
  const [r, i, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: s
  } : { ...r };
}
const y1 = (t, r) => {
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
}, b1 = ne("$ZodError", y1), _1 = ne("$ZodError", y1, { Parent: Error });
function GC(t, r = (i) => i.message) {
  const i = {}, s = [];
  for (const l of t.issues)
    l.path.length > 0 ? (i[l.path[0]] = i[l.path[0]] || [], i[l.path[0]].push(r(l))) : s.push(r(l));
  return { formErrors: s, fieldErrors: i };
}
function VC(t, r = (i) => i.message) {
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
const ph = (t) => (r, i, s, l) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise)
    throw new Ii();
  if (f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((h) => La(h, u, za())));
    throw m1(p, l?.callee), p;
  }
  return f.value;
}, mh = (t) => async (r, i, s, l) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (l?.Err ?? t)(f.issues.map((h) => La(h, u, za())));
    throw m1(p, l?.callee), p;
  }
  return f.value;
}, Ru = (t) => (r, i, s) => {
  const l = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, l);
  if (u instanceof Promise)
    throw new Ii();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? b1)(u.issues.map((f) => La(f, l, za())))
  } : { success: !0, data: u.value };
}, YC = /* @__PURE__ */ Ru(_1), zu = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, l);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => La(f, l, za())))
  } : { success: !0, data: u.value };
}, XC = /* @__PURE__ */ zu(_1), $C = (t) => (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return ph(t)(r, i, l);
}, QC = (t) => (r, i, s) => ph(t)(r, i, s), KC = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return mh(t)(r, i, l);
}, JC = (t) => async (r, i, s) => mh(t)(r, i, s), WC = (t) => (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Ru(t)(r, i, l);
}, ew = (t) => (r, i, s) => Ru(t)(r, i, s), tw = (t) => async (r, i, s) => {
  const l = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return zu(t)(r, i, l);
}, nw = (t) => async (r, i, s) => zu(t)(r, i, s), rw = /^[cC][^\s-]{8,}$/, aw = /^[0-9a-z]+$/, iw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, sw = /^[0-9a-vA-V]{20}$/, ow = /^[A-Za-z0-9]{27}$/, lw = /^[a-zA-Z0-9_-]{21}$/, uw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, cw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, qy = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, fw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, dw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function hw() {
  return new RegExp(dw, "u");
}
const pw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, mw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, gw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, vw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, yw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, S1 = /^[A-Za-z0-9_-]*$/, bw = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, _w = /^\+(?:[0-9]){6,14}[0-9]$/, x1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Sw = /* @__PURE__ */ new RegExp(`^${x1}$`);
function E1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function xw(t) {
  return new RegExp(`^${E1(t)}$`);
}
function Ew(t) {
  const r = E1({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${x1}T(?:${s})$`);
}
const Cw = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, ww = /^-?\d+$/, Aw = /^-?\d+(?:\.\d+)?/, Nw = /^[^A-Z]*$/, Tw = /^[^a-z]*$/, un = /* @__PURE__ */ ne("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), C1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, w1 = /* @__PURE__ */ ne("$ZodCheckLessThan", (t, r) => {
  un.init(t, r);
  const i = C1[typeof r.value];
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
}), A1 = /* @__PURE__ */ ne("$ZodCheckGreaterThan", (t, r) => {
  un.init(t, r);
  const i = C1[typeof r.value];
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
}), Ow = /* @__PURE__ */ ne("$ZodCheckMultipleOf", (t, r) => {
  un.init(t, r), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : jC(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Dw = /* @__PURE__ */ ne("$ZodCheckNumberFormat", (t, r) => {
  un.init(t, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [l, u] = PC[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = l, p.maximum = u, i && (p.pattern = ww);
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
}), Mw = /* @__PURE__ */ ne("$ZodCheckMaxLength", (t, r) => {
  var i;
  un.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !fh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < l && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length <= r.maximum)
      return;
    const f = hh(l);
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
}), kw = /* @__PURE__ */ ne("$ZodCheckMinLength", (t, r) => {
  var i;
  un.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !fh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > l && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const l = s.value;
    if (l.length >= r.minimum)
      return;
    const f = hh(l);
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
}), jw = /* @__PURE__ */ ne("$ZodCheckLengthEquals", (t, r) => {
  var i;
  un.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const l = s.value;
    return !fh(l) && l.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const l = s._zod.bag;
    l.minimum = r.length, l.maximum = r.length, l.length = r.length;
  }), t._zod.check = (s) => {
    const l = s.value, u = l.length;
    if (u === r.length)
      return;
    const f = hh(l), p = u > r.length;
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
}), Lu = /* @__PURE__ */ ne("$ZodCheckStringFormat", (t, r) => {
  var i, s;
  un.init(t, r), t._zod.onattach.push((l) => {
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
}), Rw = /* @__PURE__ */ ne("$ZodCheckRegex", (t, r) => {
  Lu.init(t, r), t._zod.check = (i) => {
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
}), zw = /* @__PURE__ */ ne("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = Nw), Lu.init(t, r);
}), Lw = /* @__PURE__ */ ne("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = Tw), Lu.init(t, r);
}), Pw = /* @__PURE__ */ ne("$ZodCheckIncludes", (t, r) => {
  un.init(t, r);
  const i = ju(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
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
}), Iw = /* @__PURE__ */ ne("$ZodCheckStartsWith", (t, r) => {
  un.init(t, r);
  const i = new RegExp(`^${ju(r.prefix)}.*`);
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
}), Bw = /* @__PURE__ */ ne("$ZodCheckEndsWith", (t, r) => {
  un.init(t, r);
  const i = new RegExp(`.*${ju(r.suffix)}$`);
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
}), Uw = /* @__PURE__ */ ne("$ZodCheckOverwrite", (t, r) => {
  un.init(t, r), t._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class Hw {
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
const qw = {
  major: 4,
  minor: 1,
  patch: 12
}, wt = /* @__PURE__ */ ne("$ZodType", (t, r) => {
  var i;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = qw;
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
      let m = zi(f), y;
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
            await v, f.issues.length !== b && (m || (m = zi(f, b)));
          });
        else {
          if (f.issues.length === b)
            continue;
          m || (m = zi(f, b));
        }
      }
      return y ? y.then(() => f) : f;
    }, u = (f, p, h) => {
      if (zi(f))
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
        const u = YC(t, l);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return XC(t, l).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), gh = /* @__PURE__ */ ne("$ZodString", (t, r) => {
  wt.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? Cw(t._zod.bag), t._zod.parse = (i, s) => {
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
}), ut = /* @__PURE__ */ ne("$ZodStringFormat", (t, r) => {
  Lu.init(t, r), gh.init(t, r);
}), Fw = /* @__PURE__ */ ne("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = cw), ut.init(t, r);
}), Zw = /* @__PURE__ */ ne("$ZodUUID", (t, r) => {
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
    r.pattern ?? (r.pattern = qy(s));
  } else
    r.pattern ?? (r.pattern = qy());
  ut.init(t, r);
}), Gw = /* @__PURE__ */ ne("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = fw), ut.init(t, r);
}), Vw = /* @__PURE__ */ ne("$ZodURL", (t, r) => {
  ut.init(t, r), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), l = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(l.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: bw.source,
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
}), Yw = /* @__PURE__ */ ne("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = hw()), ut.init(t, r);
}), Xw = /* @__PURE__ */ ne("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = lw), ut.init(t, r);
}), $w = /* @__PURE__ */ ne("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = rw), ut.init(t, r);
}), Qw = /* @__PURE__ */ ne("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = aw), ut.init(t, r);
}), Kw = /* @__PURE__ */ ne("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = iw), ut.init(t, r);
}), Jw = /* @__PURE__ */ ne("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = sw), ut.init(t, r);
}), Ww = /* @__PURE__ */ ne("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = ow), ut.init(t, r);
}), e3 = /* @__PURE__ */ ne("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = Ew(r)), ut.init(t, r);
}), t3 = /* @__PURE__ */ ne("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = Sw), ut.init(t, r);
}), n3 = /* @__PURE__ */ ne("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = xw(r)), ut.init(t, r);
}), r3 = /* @__PURE__ */ ne("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = uw), ut.init(t, r);
}), a3 = /* @__PURE__ */ ne("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = pw), ut.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), i3 = /* @__PURE__ */ ne("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = mw), ut.init(t, r), t._zod.onattach.push((i) => {
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
}), s3 = /* @__PURE__ */ ne("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = gw), ut.init(t, r);
}), o3 = /* @__PURE__ */ ne("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = vw), ut.init(t, r), t._zod.check = (i) => {
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
function N1(t) {
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
const l3 = /* @__PURE__ */ ne("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = yw), ut.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    N1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function u3(t) {
  if (!S1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return N1(i);
}
const c3 = /* @__PURE__ */ ne("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = S1), ut.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    u3(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), f3 = /* @__PURE__ */ ne("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = _w), ut.init(t, r);
});
function d3(t, r = null) {
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
const h3 = /* @__PURE__ */ ne("$ZodJWT", (t, r) => {
  ut.init(t, r), t._zod.check = (i) => {
    d3(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), T1 = /* @__PURE__ */ ne("$ZodNumber", (t, r) => {
  wt.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? Aw, t._zod.parse = (i, s) => {
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
}), p3 = /* @__PURE__ */ ne("$ZodNumber", (t, r) => {
  Dw.init(t, r), T1.init(t, r);
}), m3 = /* @__PURE__ */ ne("$ZodUnknown", (t, r) => {
  wt.init(t, r), t._zod.parse = (i) => i;
}), g3 = /* @__PURE__ */ ne("$ZodNever", (t, r) => {
  wt.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function Fy(t, r, i) {
  t.issues.length && r.issues.push(...v1(i, t.issues)), r.value[i] = t.value;
}
const v3 = /* @__PURE__ */ ne("$ZodArray", (t, r) => {
  wt.init(t, r), t._zod.parse = (i, s) => {
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
      h instanceof Promise ? u.push(h.then((m) => Fy(m, i, f))) : Fy(h, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function Ou(t, r, i, s) {
  t.issues.length && r.issues.push(...v1(i, t.issues)), t.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = t.value;
}
function O1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = LC(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function D1(t, r, i, s, l, u) {
  const f = [], p = l.keySet, h = l.catchall._zod, m = h.def.type;
  for (const y of Object.keys(r)) {
    if (p.has(y))
      continue;
    if (m === "never") {
      f.push(y);
      continue;
    }
    const _ = h.run({ value: r[y], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((b) => Ou(b, i, y, r))) : Ou(_, i, y, r);
  }
  return f.length && i.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const y3 = /* @__PURE__ */ ne("$ZodObject", (t, r) => {
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
  const s = ch(() => O1(r));
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
  const l = Tu, u = r.catchall;
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
      d instanceof Promise ? y.push(d.then((x) => Ou(x, p, b, m))) : Ou(d, p, b, m);
    }
    return u ? D1(y, m, p, h, s.value, t) : y.length ? Promise.all(y).then(() => p) : p;
  };
}), b3 = /* @__PURE__ */ ne("$ZodObjectJIT", (t, r) => {
  y3.init(t, r);
  const i = t._zod.parse, s = ch(() => O1(r)), l = (b) => {
    const v = new Hw(["shape", "payload", "ctx"]), d = s.value, x = (D) => {
      const E = Hy(D);
      return `shape[${E}]._zod.run({ value: input[${E}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const C = /* @__PURE__ */ Object.create(null);
    let N = 0;
    for (const D of d.keys)
      C[D] = `key_${N++}`;
    v.write("const newResult = {};");
    for (const D of d.keys) {
      const E = C[D], T = Hy(D);
      v.write(`const ${E} = ${x(D)};`), v.write(`
        if (${E}.issues.length) {
          payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${T}, ...iss.path] : [${T}]
          })));
        }
        
        
        if (${E}.value === undefined) {
          if (${T} in input) {
            newResult[${T}] = undefined;
          }
        } else {
          newResult[${T}] = ${E}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const A = v.compile();
    return (D, E) => A(b, D, E);
  };
  let u;
  const f = Tu, p = !h1.jitless, m = p && RC.value, y = r.catchall;
  let _;
  t._zod.parse = (b, v) => {
    _ ?? (_ = s.value);
    const d = b.value;
    return f(d) ? p && m && v?.async === !1 && v.jitless !== !0 ? (u || (u = l(r.shape)), b = u(b, v), y ? D1([], d, b, v, _, t) : b) : i(b, v) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: t
    }), b);
  };
});
function Zy(t, r, i, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const l = t.filter((u) => !zi(u));
  return l.length === 1 ? (r.value = l[0].value, l[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: t.map((u) => u.issues.map((f) => La(f, s, za())))
  }), r);
}
const _3 = /* @__PURE__ */ ne("$ZodUnion", (t, r) => {
  wt.init(t, r), it(t._zod, "optin", () => r.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), it(t._zod, "optout", () => r.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), it(t._zod, "values", () => {
    if (r.options.every((l) => l._zod.values))
      return new Set(r.options.flatMap((l) => Array.from(l._zod.values)));
  }), it(t._zod, "pattern", () => {
    if (r.options.every((l) => l._zod.pattern)) {
      const l = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${l.map((u) => dh(u.source)).join("|")})$`);
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
    return f ? Promise.all(p).then((h) => Zy(h, l, t, u)) : Zy(p, l, t, u);
  };
}), S3 = /* @__PURE__ */ ne("$ZodIntersection", (t, r) => {
  wt.init(t, r), t._zod.parse = (i, s) => {
    const l = i.value, u = r.left._zod.run({ value: l, issues: [] }, s), f = r.right._zod.run({ value: l, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, m]) => Gy(i, h, m)) : Gy(i, u, f);
  };
});
function Gd(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (oo(t) && oo(r)) {
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
function Gy(t, r, i) {
  if (r.issues.length && t.issues.push(...r.issues), i.issues.length && t.issues.push(...i.issues), zi(t))
    return t;
  const s = Gd(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const x3 = /* @__PURE__ */ ne("$ZodEnum", (t, r) => {
  wt.init(t, r);
  const i = p1(r.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((l) => zC.has(typeof l)).map((l) => typeof l == "string" ? ju(l) : l.toString()).join("|")})$`), t._zod.parse = (l, u) => {
    const f = l.value;
    return s.has(f) || l.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: t
    }), l;
  };
}), E3 = /* @__PURE__ */ ne("$ZodTransform", (t, r) => {
  wt.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new d1(t.constructor.name);
    const l = r.transform(i.value, i);
    if (s.async)
      return (l instanceof Promise ? l : Promise.resolve(l)).then((f) => (i.value = f, i));
    if (l instanceof Promise)
      throw new Ii();
    return i.value = l, i;
  };
});
function Vy(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const C3 = /* @__PURE__ */ ne("$ZodOptional", (t, r) => {
  wt.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", it(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), it(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${dh(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const l = r.innerType._zod.run(i, s);
      return l instanceof Promise ? l.then((u) => Vy(u, i.value)) : Vy(l, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), w3 = /* @__PURE__ */ ne("$ZodNullable", (t, r) => {
  wt.init(t, r), it(t._zod, "optin", () => r.innerType._zod.optin), it(t._zod, "optout", () => r.innerType._zod.optout), it(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${dh(i.source)}|null)$`) : void 0;
  }), it(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), A3 = /* @__PURE__ */ ne("$ZodDefault", (t, r) => {
  wt.init(t, r), t._zod.optin = "optional", it(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => Yy(u, r)) : Yy(l, r);
  };
});
function Yy(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const N3 = /* @__PURE__ */ ne("$ZodPrefault", (t, r) => {
  wt.init(t, r), t._zod.optin = "optional", it(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), T3 = /* @__PURE__ */ ne("$ZodNonOptional", (t, r) => {
  wt.init(t, r), it(t._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (i, s) => {
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then((u) => Xy(u, t)) : Xy(l, t);
  };
});
function Xy(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const O3 = /* @__PURE__ */ ne("$ZodCatch", (t, r) => {
  wt.init(t, r), it(t._zod, "optin", () => r.innerType._zod.optin), it(t._zod, "optout", () => r.innerType._zod.optout), it(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
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
}), D3 = /* @__PURE__ */ ne("$ZodPipe", (t, r) => {
  wt.init(t, r), it(t._zod, "values", () => r.in._zod.values), it(t._zod, "optin", () => r.in._zod.optin), it(t._zod, "optout", () => r.out._zod.optout), it(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (i, s) => {
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
const M3 = /* @__PURE__ */ ne("$ZodReadonly", (t, r) => {
  wt.init(t, r), it(t._zod, "propValues", () => r.innerType._zod.propValues), it(t._zod, "values", () => r.innerType._zod.values), it(t._zod, "optin", () => r.innerType._zod.optin), it(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const l = r.innerType._zod.run(i, s);
    return l instanceof Promise ? l.then($y) : $y(l);
  };
});
function $y(t) {
  return t.value = Object.freeze(t.value), t;
}
const k3 = /* @__PURE__ */ ne("$ZodCustom", (t, r) => {
  un.init(t, r), wt.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, l = r.fn(s);
    if (l instanceof Promise)
      return l.then((u) => Qy(u, i, s, t));
    Qy(l, i, s, t);
  };
});
function Qy(t, r, i, s) {
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
    s._zod.def.params && (l.params = s._zod.def.params), r.issues.push(lo(l));
  }
}
class M1 {
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
function j3() {
  return new M1();
}
const eo = /* @__PURE__ */ j3();
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
function Ky(t, r) {
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
function P3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...we(r)
  });
}
function I3(t, r) {
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
function H3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function q3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...we(r)
  });
}
function F3(t, r) {
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
function Jy(t, r) {
  return new w1({
    check: "less_than",
    ...we(r),
    value: t,
    inclusive: !1
  });
}
function xd(t, r) {
  return new w1({
    check: "less_than",
    ...we(r),
    value: t,
    inclusive: !0
  });
}
function Wy(t, r) {
  return new A1({
    check: "greater_than",
    ...we(r),
    value: t,
    inclusive: !1
  });
}
function Ed(t, r) {
  return new A1({
    check: "greater_than",
    ...we(r),
    value: t,
    inclusive: !0
  });
}
function e0(t, r) {
  return new Ow({
    check: "multiple_of",
    ...we(r),
    value: t
  });
}
function k1(t, r) {
  return new Mw({
    check: "max_length",
    ...we(r),
    maximum: t
  });
}
function Du(t, r) {
  return new kw({
    check: "min_length",
    ...we(r),
    minimum: t
  });
}
function j1(t, r) {
  return new jw({
    check: "length_equals",
    ...we(r),
    length: t
  });
}
function c4(t, r) {
  return new Rw({
    check: "string_format",
    format: "regex",
    ...we(r),
    pattern: t
  });
}
function f4(t) {
  return new zw({
    check: "string_format",
    format: "lowercase",
    ...we(t)
  });
}
function d4(t) {
  return new Lw({
    check: "string_format",
    format: "uppercase",
    ...we(t)
  });
}
function h4(t, r) {
  return new Pw({
    check: "string_format",
    format: "includes",
    ...we(r),
    includes: t
  });
}
function p4(t, r) {
  return new Iw({
    check: "string_format",
    format: "starts_with",
    ...we(r),
    prefix: t
  });
}
function m4(t, r) {
  return new Bw({
    check: "string_format",
    format: "ends_with",
    ...we(r),
    suffix: t
  });
}
function ho(t) {
  return new Uw({
    check: "overwrite",
    tx: t
  });
}
function g4(t) {
  return ho((r) => r.normalize(t));
}
function v4() {
  return ho((t) => t.trim());
}
function y4() {
  return ho((t) => t.toLowerCase());
}
function b4() {
  return ho((t) => t.toUpperCase());
}
function _4(t, r, i) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...we(i)
  });
}
function S4(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...we(i)
  });
}
function x4(t) {
  const r = E4((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(lo(s, i.value, r._zod.def));
    else {
      const l = s;
      l.fatal && (l.continue = !1), l.code ?? (l.code = "custom"), l.input ?? (l.input = i.value), l.inst ?? (l.inst = r), l.continue ?? (l.continue = !r._zod.def.abort), i.issues.push(lo(l));
    }
  }, t(i.value, i)));
  return r;
}
function E4(t, r) {
  const i = new un({
    check: "custom",
    ...we(r)
  });
  return i._zod.check = t, i;
}
class t0 {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? eo, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
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
            const { minimum: x, maximum: C, format: N, patterns: A, contentEncoding: D } = r._zod.bag;
            if (typeof x == "number" && (d.minLength = x), typeof C == "number" && (d.maxLength = C), N && (d.format = u[N] ?? N, d.format === "" && delete d.format), D && (d.contentEncoding = D), A && A.size > 0) {
              const E = [...A];
              E.length === 1 ? d.pattern = E[0].source : E.length > 1 && (p.schema.allOf = [
                ...E.map((T) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: T.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const d = v, { minimum: x, maximum: C, format: N, multipleOf: A, exclusiveMaximum: D, exclusiveMinimum: E } = r._zod.bag;
            typeof N == "string" && N.includes("int") ? d.type = "integer" : d.type = "number", typeof E == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.minimum = E, d.exclusiveMinimum = !0) : d.exclusiveMinimum = E), typeof x == "number" && (d.minimum = x, typeof E == "number" && this.target !== "draft-4" && (E >= x ? delete d.minimum : delete d.exclusiveMinimum)), typeof D == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.maximum = D, d.exclusiveMaximum = !0) : d.exclusiveMaximum = D), typeof C == "number" && (d.maximum = C, typeof D == "number" && this.target !== "draft-4" && (D <= C ? delete d.maximum : delete d.exclusiveMaximum)), typeof A == "number" && (d.multipleOf = A);
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
            const d = v, { minimum: x, maximum: C } = r._zod.bag;
            typeof x == "number" && (d.minItems = x), typeof C == "number" && (d.maxItems = C), d.type = "array", d.items = this.process(l.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const d = v;
            d.type = "object", d.properties = {};
            const x = l.shape;
            for (const A in x)
              d.properties[A] = this.process(x[A], {
                ..._,
                path: [..._.path, "properties", A]
              });
            const C = new Set(Object.keys(x)), N = new Set([...C].filter((A) => {
              const D = l.shape[A]._zod;
              return this.io === "input" ? D.optin === void 0 : D.optout === void 0;
            }));
            N.size > 0 && (d.required = Array.from(N)), l.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : l.catchall ? l.catchall && (d.additionalProperties = this.process(l.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = v, x = l.options.map((C, N) => this.process(C, {
              ..._,
              path: [..._.path, "anyOf", N]
            }));
            d.anyOf = x;
            break;
          }
          case "intersection": {
            const d = v, x = this.process(l.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), C = this.process(l.right, {
              ..._,
              path: [..._.path, "allOf", 1]
            }), N = (D) => "allOf" in D && Object.keys(D).length === 1, A = [
              ...N(x) ? x.allOf : [x],
              ...N(C) ? C.allOf : [C]
            ];
            d.allOf = A;
            break;
          }
          case "tuple": {
            const d = v;
            d.type = "array";
            const x = this.target === "draft-2020-12" ? "prefixItems" : "items", C = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", N = l.items.map((T, M) => this.process(T, {
              ..._,
              path: [..._.path, x, M]
            })), A = l.rest ? this.process(l.rest, {
              ..._,
              path: [..._.path, C, ...this.target === "openapi-3.0" ? [l.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (d.prefixItems = N, A && (d.items = A)) : this.target === "openapi-3.0" ? (d.items = {
              anyOf: N
            }, A && d.items.anyOf.push(A), d.minItems = N.length, A || (d.maxItems = N.length)) : (d.items = N, A && (d.additionalItems = A));
            const { minimum: D, maximum: E } = r._zod.bag;
            typeof D == "number" && (d.minItems = D), typeof E == "number" && (d.maxItems = E);
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
            const d = v, x = p1(l.entries);
            x.every((C) => typeof C == "number") && (d.type = "number"), x.every((C) => typeof C == "string") && (d.type = "string"), d.enum = x;
            break;
          }
          case "literal": {
            const d = v, x = [];
            for (const C of l.values)
              if (C === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof C == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                x.push(Number(C));
              } else
                x.push(C);
            if (x.length !== 0) if (x.length === 1) {
              const C = x[0];
              d.type = C === null ? "null" : typeof C, this.target === "draft-4" || this.target === "openapi-3.0" ? d.enum = [C] : d.const = C;
            } else
              x.every((C) => typeof C == "number") && (d.type = "number"), x.every((C) => typeof C == "string") && (d.type = "string"), x.every((C) => typeof C == "boolean") && (d.type = "string"), x.every((C) => C === null) && (d.type = "null"), d.enum = x;
            break;
          }
          case "file": {
            const d = v, x = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: C, maximum: N, mime: A } = r._zod.bag;
            C !== void 0 && (x.minLength = C), N !== void 0 && (x.maxLength = N), A ? A.length === 1 ? (x.contentMediaType = A[0], Object.assign(d, x)) : d.anyOf = A.map((D) => ({ ...x, contentMediaType: D })) : Object.assign(d, x);
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
            const d = v, x = r._zod.pattern;
            if (!x)
              throw new Error("Pattern not found in template literal");
            d.type = "string", d.pattern = x.source;
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
    return m && Object.assign(p.schema, m), this.io === "input" && Tt(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
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
        const x = s.external.registry.get(y[0])?.id, C = s.external.uri ?? ((A) => A);
        if (x)
          return { ref: C(x) };
        const N = y[1].defId ?? y[1].schema.id ?? `schema${this.counter++}`;
        return y[1].defId = N, { defId: N, ref: `${C("__shared")}#/${_}/${N}` };
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
      for (const x in d)
        delete d[x];
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
      const x = b.ref;
      if (b.ref = null, x) {
        p(x, _);
        const C = this.seen.get(x).schema;
        C.$ref && (_.target === "draft-7" || _.target === "draft-4" || _.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(C)) : (Object.assign(v, C), Object.assign(v, d));
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
function C4(t, r) {
  if (t instanceof M1) {
    const s = new t0(r), l = {};
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
  const i = new t0(r);
  return i.process(t), i.emit(t, r);
}
function Tt(t, r) {
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
      return Tt(l.element, i);
    case "object": {
      for (const u in l.shape)
        if (Tt(l.shape[u], i))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of l.options)
        if (Tt(u, i))
          return !0;
      return !1;
    }
    case "intersection":
      return Tt(l.left, i) || Tt(l.right, i);
    case "tuple": {
      for (const u of l.items)
        if (Tt(u, i))
          return !0;
      return !!(l.rest && Tt(l.rest, i));
    }
    case "record":
      return Tt(l.keyType, i) || Tt(l.valueType, i);
    case "map":
      return Tt(l.keyType, i) || Tt(l.valueType, i);
    case "set":
      return Tt(l.valueType, i);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return Tt(l.innerType, i);
    case "lazy":
      return Tt(l.getter(), i);
    case "default":
      return Tt(l.innerType, i);
    case "prefault":
      return Tt(l.innerType, i);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return Tt(l.in, i) || Tt(l.out, i);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${l.type}`);
}
const w4 = /* @__PURE__ */ ne("ZodISODateTime", (t, r) => {
  e3.init(t, r), dt.init(t, r);
});
function A4(t) {
  return n4(w4, t);
}
const N4 = /* @__PURE__ */ ne("ZodISODate", (t, r) => {
  t3.init(t, r), dt.init(t, r);
});
function T4(t) {
  return r4(N4, t);
}
const O4 = /* @__PURE__ */ ne("ZodISOTime", (t, r) => {
  n3.init(t, r), dt.init(t, r);
});
function D4(t) {
  return a4(O4, t);
}
const M4 = /* @__PURE__ */ ne("ZodISODuration", (t, r) => {
  r3.init(t, r), dt.init(t, r);
});
function k4(t) {
  return i4(M4, t);
}
const j4 = (t, r) => {
  b1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => VC(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => GC(t, i)
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
}, Pn = ne("ZodError", j4, {
  Parent: Error
}), R4 = /* @__PURE__ */ ph(Pn), z4 = /* @__PURE__ */ mh(Pn), L4 = /* @__PURE__ */ Ru(Pn), P4 = /* @__PURE__ */ zu(Pn), I4 = /* @__PURE__ */ $C(Pn), B4 = /* @__PURE__ */ QC(Pn), U4 = /* @__PURE__ */ KC(Pn), H4 = /* @__PURE__ */ JC(Pn), q4 = /* @__PURE__ */ WC(Pn), F4 = /* @__PURE__ */ ew(Pn), Z4 = /* @__PURE__ */ tw(Pn), G4 = /* @__PURE__ */ nw(Pn), Ot = /* @__PURE__ */ ne("ZodType", (t, r) => (wt.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Ia(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => ia(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => R4(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => L4(t, i, s), t.parseAsync = async (i, s) => z4(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => P4(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => I4(t, i, s), t.decode = (i, s) => B4(t, i, s), t.encodeAsync = async (i, s) => U4(t, i, s), t.decodeAsync = async (i, s) => H4(t, i, s), t.safeEncode = (i, s) => q4(t, i, s), t.safeDecode = (i, s) => F4(t, i, s), t.safeEncodeAsync = async (i, s) => Z4(t, i, s), t.safeDecodeAsync = async (i, s) => G4(t, i, s), t.refine = (i, s) => t.check(RA(i, s)), t.superRefine = (i) => t.check(zA(i)), t.overwrite = (i) => t.check(ho(i)), t.optional = () => i0(t), t.nullable = () => s0(t), t.nullish = () => i0(s0(t)), t.nonoptional = (i) => NA(t, i), t.array = () => Gn(t), t.or = (i) => vA([t, i]), t.and = (i) => bA(t, i), t.transform = (i) => o0(t, SA(i)), t.default = (i) => CA(t, i), t.prefault = (i) => AA(t, i), t.catch = (i) => OA(t, i), t.pipe = (i) => o0(t, i), t.readonly = () => kA(t), t.describe = (i) => {
  const s = t.clone();
  return eo.add(s, { description: i }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return eo.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...i) => {
  if (i.length === 0)
    return eo.get(t);
  const s = t.clone();
  return eo.add(s, i[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), R1 = /* @__PURE__ */ ne("_ZodString", (t, r) => {
  gh.init(t, r), Ot.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(c4(...s)), t.includes = (...s) => t.check(h4(...s)), t.startsWith = (...s) => t.check(p4(...s)), t.endsWith = (...s) => t.check(m4(...s)), t.min = (...s) => t.check(Du(...s)), t.max = (...s) => t.check(k1(...s)), t.length = (...s) => t.check(j1(...s)), t.nonempty = (...s) => t.check(Du(1, ...s)), t.lowercase = (s) => t.check(f4(s)), t.uppercase = (s) => t.check(d4(s)), t.trim = () => t.check(v4()), t.normalize = (...s) => t.check(g4(...s)), t.toLowerCase = () => t.check(y4()), t.toUpperCase = () => t.check(b4());
}), V4 = /* @__PURE__ */ ne("ZodString", (t, r) => {
  gh.init(t, r), R1.init(t, r), t.email = (i) => t.check(z3(Y4, i)), t.url = (i) => t.check(U3(X4, i)), t.jwt = (i) => t.check(t4(uA, i)), t.emoji = (i) => t.check(H3($4, i)), t.guid = (i) => t.check(Ky(n0, i)), t.uuid = (i) => t.check(L3(ou, i)), t.uuidv4 = (i) => t.check(P3(ou, i)), t.uuidv6 = (i) => t.check(I3(ou, i)), t.uuidv7 = (i) => t.check(B3(ou, i)), t.nanoid = (i) => t.check(q3(Q4, i)), t.guid = (i) => t.check(Ky(n0, i)), t.cuid = (i) => t.check(F3(K4, i)), t.cuid2 = (i) => t.check(Z3(J4, i)), t.ulid = (i) => t.check(G3(W4, i)), t.base64 = (i) => t.check(J3(sA, i)), t.base64url = (i) => t.check(W3(oA, i)), t.xid = (i) => t.check(V3(eA, i)), t.ksuid = (i) => t.check(Y3(tA, i)), t.ipv4 = (i) => t.check(X3(nA, i)), t.ipv6 = (i) => t.check($3(rA, i)), t.cidrv4 = (i) => t.check(Q3(aA, i)), t.cidrv6 = (i) => t.check(K3(iA, i)), t.e164 = (i) => t.check(e4(lA, i)), t.datetime = (i) => t.check(A4(i)), t.date = (i) => t.check(T4(i)), t.time = (i) => t.check(D4(i)), t.duration = (i) => t.check(k4(i));
});
function Ln(t) {
  return R3(V4, t);
}
const dt = /* @__PURE__ */ ne("ZodStringFormat", (t, r) => {
  ut.init(t, r), R1.init(t, r);
}), Y4 = /* @__PURE__ */ ne("ZodEmail", (t, r) => {
  Gw.init(t, r), dt.init(t, r);
}), n0 = /* @__PURE__ */ ne("ZodGUID", (t, r) => {
  Fw.init(t, r), dt.init(t, r);
}), ou = /* @__PURE__ */ ne("ZodUUID", (t, r) => {
  Zw.init(t, r), dt.init(t, r);
}), X4 = /* @__PURE__ */ ne("ZodURL", (t, r) => {
  Vw.init(t, r), dt.init(t, r);
}), $4 = /* @__PURE__ */ ne("ZodEmoji", (t, r) => {
  Yw.init(t, r), dt.init(t, r);
}), Q4 = /* @__PURE__ */ ne("ZodNanoID", (t, r) => {
  Xw.init(t, r), dt.init(t, r);
}), K4 = /* @__PURE__ */ ne("ZodCUID", (t, r) => {
  $w.init(t, r), dt.init(t, r);
}), J4 = /* @__PURE__ */ ne("ZodCUID2", (t, r) => {
  Qw.init(t, r), dt.init(t, r);
}), W4 = /* @__PURE__ */ ne("ZodULID", (t, r) => {
  Kw.init(t, r), dt.init(t, r);
}), eA = /* @__PURE__ */ ne("ZodXID", (t, r) => {
  Jw.init(t, r), dt.init(t, r);
}), tA = /* @__PURE__ */ ne("ZodKSUID", (t, r) => {
  Ww.init(t, r), dt.init(t, r);
}), nA = /* @__PURE__ */ ne("ZodIPv4", (t, r) => {
  a3.init(t, r), dt.init(t, r);
}), rA = /* @__PURE__ */ ne("ZodIPv6", (t, r) => {
  i3.init(t, r), dt.init(t, r);
}), aA = /* @__PURE__ */ ne("ZodCIDRv4", (t, r) => {
  s3.init(t, r), dt.init(t, r);
}), iA = /* @__PURE__ */ ne("ZodCIDRv6", (t, r) => {
  o3.init(t, r), dt.init(t, r);
}), sA = /* @__PURE__ */ ne("ZodBase64", (t, r) => {
  l3.init(t, r), dt.init(t, r);
}), oA = /* @__PURE__ */ ne("ZodBase64URL", (t, r) => {
  c3.init(t, r), dt.init(t, r);
}), lA = /* @__PURE__ */ ne("ZodE164", (t, r) => {
  f3.init(t, r), dt.init(t, r);
}), uA = /* @__PURE__ */ ne("ZodJWT", (t, r) => {
  h3.init(t, r), dt.init(t, r);
}), z1 = /* @__PURE__ */ ne("ZodNumber", (t, r) => {
  T1.init(t, r), Ot.init(t, r), t.gt = (s, l) => t.check(Wy(s, l)), t.gte = (s, l) => t.check(Ed(s, l)), t.min = (s, l) => t.check(Ed(s, l)), t.lt = (s, l) => t.check(Jy(s, l)), t.lte = (s, l) => t.check(xd(s, l)), t.max = (s, l) => t.check(xd(s, l)), t.int = (s) => t.check(r0(s)), t.safe = (s) => t.check(r0(s)), t.positive = (s) => t.check(Wy(0, s)), t.nonnegative = (s) => t.check(Ed(0, s)), t.negative = (s) => t.check(Jy(0, s)), t.nonpositive = (s) => t.check(xd(0, s)), t.multipleOf = (s, l) => t.check(e0(s, l)), t.step = (s, l) => t.check(e0(s, l)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Mu(t) {
  return s4(z1, t);
}
const cA = /* @__PURE__ */ ne("ZodNumberFormat", (t, r) => {
  p3.init(t, r), z1.init(t, r);
});
function r0(t) {
  return o4(cA, t);
}
const fA = /* @__PURE__ */ ne("ZodUnknown", (t, r) => {
  m3.init(t, r), Ot.init(t, r);
});
function a0() {
  return l4(fA);
}
const dA = /* @__PURE__ */ ne("ZodNever", (t, r) => {
  g3.init(t, r), Ot.init(t, r);
});
function hA(t) {
  return u4(dA, t);
}
const pA = /* @__PURE__ */ ne("ZodArray", (t, r) => {
  v3.init(t, r), Ot.init(t, r), t.element = r.element, t.min = (i, s) => t.check(Du(i, s)), t.nonempty = (i) => t.check(Du(1, i)), t.max = (i, s) => t.check(k1(i, s)), t.length = (i, s) => t.check(j1(i, s)), t.unwrap = () => t.element;
});
function Gn(t, r) {
  return _4(pA, t, r);
}
const mA = /* @__PURE__ */ ne("ZodObject", (t, r) => {
  b3.init(t, r), Ot.init(t, r), it(t, "shape", () => r.shape), t.keyof = () => Yd(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: a0() }), t.loose = () => t.clone({ ...t._zod.def, catchall: a0() }), t.strict = () => t.clone({ ...t._zod.def, catchall: hA() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => UC(t, i), t.safeExtend = (i) => HC(t, i), t.merge = (i) => qC(t, i), t.pick = (i) => IC(t, i), t.omit = (i) => BC(t, i), t.partial = (...i) => FC(L1, t, i[0]), t.required = (...i) => ZC(P1, t, i[0]);
});
function Ra(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ...we(r)
  };
  return new mA(i);
}
const gA = /* @__PURE__ */ ne("ZodUnion", (t, r) => {
  _3.init(t, r), Ot.init(t, r), t.options = r.options;
});
function vA(t, r) {
  return new gA({
    type: "union",
    options: t,
    ...we(r)
  });
}
const yA = /* @__PURE__ */ ne("ZodIntersection", (t, r) => {
  S3.init(t, r), Ot.init(t, r);
});
function bA(t, r) {
  return new yA({
    type: "intersection",
    left: t,
    right: r
  });
}
const Vd = /* @__PURE__ */ ne("ZodEnum", (t, r) => {
  x3.init(t, r), Ot.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
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
      ...we(l),
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
      ...we(l),
      entries: u
    });
  };
});
function Yd(t, r) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Vd({
    type: "enum",
    entries: i,
    ...we(r)
  });
}
const _A = /* @__PURE__ */ ne("ZodTransform", (t, r) => {
  E3.init(t, r), Ot.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new d1(t.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(lo(u, i.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = i.value), f.inst ?? (f.inst = t), i.issues.push(lo(f));
      }
    };
    const l = r.transform(i.value, i);
    return l instanceof Promise ? l.then((u) => (i.value = u, i)) : (i.value = l, i);
  };
});
function SA(t) {
  return new _A({
    type: "transform",
    transform: t
  });
}
const L1 = /* @__PURE__ */ ne("ZodOptional", (t, r) => {
  C3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function i0(t) {
  return new L1({
    type: "optional",
    innerType: t
  });
}
const xA = /* @__PURE__ */ ne("ZodNullable", (t, r) => {
  w3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function s0(t) {
  return new xA({
    type: "nullable",
    innerType: t
  });
}
const EA = /* @__PURE__ */ ne("ZodDefault", (t, r) => {
  A3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function CA(t, r) {
  return new EA({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : g1(r);
    }
  });
}
const wA = /* @__PURE__ */ ne("ZodPrefault", (t, r) => {
  N3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function AA(t, r) {
  return new wA({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : g1(r);
    }
  });
}
const P1 = /* @__PURE__ */ ne("ZodNonOptional", (t, r) => {
  T3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function NA(t, r) {
  return new P1({
    type: "nonoptional",
    innerType: t,
    ...we(r)
  });
}
const TA = /* @__PURE__ */ ne("ZodCatch", (t, r) => {
  O3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function OA(t, r) {
  return new TA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const DA = /* @__PURE__ */ ne("ZodPipe", (t, r) => {
  D3.init(t, r), Ot.init(t, r), t.in = r.in, t.out = r.out;
});
function o0(t, r) {
  return new DA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const MA = /* @__PURE__ */ ne("ZodReadonly", (t, r) => {
  M3.init(t, r), Ot.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function kA(t) {
  return new MA({
    type: "readonly",
    innerType: t
  });
}
const jA = /* @__PURE__ */ ne("ZodCustom", (t, r) => {
  k3.init(t, r), Ot.init(t, r);
});
function RA(t, r = {}) {
  return S4(jA, t, r);
}
function zA(t) {
  return x4(t);
}
const l0 = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, Xd = "placeholder-chatHistory", LA = Ra({
  justification: Ln().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Ln().describe("The new, full content for the character field.")
}), PA = Ra({
  field: Ln(),
  value: Ln()
}), IA = Ra({
  index: Mu().int().positive(),
  value: Ln()
});
Ra({
  justification: Ln(),
  fields_to_change: Gn(PA).optional(),
  draft_fields_to_remove: Gn(Ln()).optional(),
  greetings_to_add: Gn(Ln()).optional(),
  greetings_to_remove: Gn(Mu().int().positive()).optional(),
  greetings_to_change: Gn(IA).optional()
});
const BA = (t, r) => {
  const i = Ra({
    index: Mu().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Ln().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Ln().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Gn(Ln()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Gn(Mu().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Gn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const l = Ra({
      field: Yd(t).describe("The unique ID of the field to change (core or draft)."),
      value: Ln().describe("The new content for the field.")
    });
    s.fields_to_change = Gn(l).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Gn(Yd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), Ra(s);
};
function Cd(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function $d(t, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${$d(s, r + 1)}${i}</item>
` : `${i}<item>${Cd(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const l of Object.keys(t)) {
      const u = t[l];
      u !== null && typeof u == "object" ? s += `${i}<${l}>
${$d(u, r + 1)}${i}</${l}>
` : s += `${i}<${l}>${Cd(u)}</${l}>
`;
    }
    return s;
  }
  return `${i}<value>${Cd(t)}</value>
`;
}
function UA(t, r) {
  const i = Da(t);
  return r === "xml" ? $d(i).trim() : JSON.stringify(i, null, 2);
}
function HA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function qA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function Da(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, i = HA(t.example, r, t.default);
  if (i !== void 0) return i;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return Da(s);
  switch (qA(t.type)) {
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
const FA = new DS();
async function Qd(t, r, i, s, l, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, h) => {
    const m = new AbortController(), y = u ?? m.signal;
    u && u.addEventListener("abort", () => m.abort(), { once: !0 }), FA.generateRequest(
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
  const l = await Qd(t, r, i, Cu(), void 0, s);
  if (!l?.content)
    throw new Error("Plain request failed to return content.");
  return l.content;
}
async function ZA(t, r, i, s, l, u, f) {
  const p = vt.getSettings();
  let h, m;
  const y = C4(i);
  if (l === "native") {
    if (h = await Qd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: y },
        ...Cu()
      },
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    m = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const b = l, v = UA(y, b), d = JSON.stringify(y, null, 2), x = b === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", C = p.prompts[x]?.content;
    if (!C)
      throw new Error(`Prompt template for mode "${b}" not found.`);
    const N = {
      example_response: v,
      schema: d
    }, D = { role: "system", content: Zt.compile(C, { noEscape: !0, strict: !0 })(N) };
    if (h = await Qd(
      t,
      [...r, D],
      u,
      Cu(),
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    m = $0(h.content, b, { schema: y });
  }
  const _ = i.safeParse(m);
  if (!_.success) {
    const b = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", m), await be("error", b), new Error(b);
  }
  return _.data;
}
function u0(t, r, i) {
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
const I1 = ({ originalContent: t, newContent: r }) => {
  const i = Y.useMemo(() => {
    const s = c1(t, r);
    let l = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), m = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (l += m), f.removed || (u += m);
    }), { originalHtml: l, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, GA = ({ before: t, after: r }) => {
  const i = Y.useMemo(() => {
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
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ S.jsx("h3", { children: "Changes in this step" }),
    i.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ S.jsx("div", { className: "compare-state-list", children: i.map(({ label: s, before: l, after: u }) => /* @__PURE__ */ S.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ S.jsx("h4", { children: s }),
      /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Before" }),
        /* @__PURE__ */ S.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ S.jsx(I1, { originalContent: l, newContent: u })
    ] }, s)) })
  ] });
}, VA = ({ currentState: t, initialState: r }) => {
  const [i, s] = Y.useState(!1), { coreFields: l, alternateGreetings: u } = Y.useMemo(() => {
    const p = [], h = [];
    return er.forEach((m) => {
      t.fields[m] && p.push({ label: t.fields[m].label, value: t.fields[m].value });
    }), Object.entries(t.fields).filter(([m]) => m.startsWith("alternate_greetings_")).sort((m, y) => parseInt(m[0].split("_")[2]) - parseInt(y[0].split("_")[2])).forEach(([, m]) => h.push(m.value)), { coreFields: p, alternateGreetings: h };
  }, [t]), f = Y.useMemo(() => {
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
  return /* @__PURE__ */ S.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: i ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ S.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: i, onChange: (p) => s(p.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ S.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: h, after: m }) => /* @__PURE__ */ S.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ S.jsx("h4", { children: p }),
      /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Original" }),
        /* @__PURE__ */ S.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ S.jsx(I1, { originalContent: h, newContent: m })
    ] }, p)) }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx("h4", { children: "Core Fields" }),
      l.map(({ label: p, value: h }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ S.jsx("label", { children: p }),
        /* @__PURE__ */ S.jsx("div", { className: "state-value", children: h || /* @__PURE__ */ S.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, h) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            h + 1
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ S.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, h))
      ] })
    ] }) })
  ] });
}, { showdown: YA, DOMPurify: XA, hljs: $A } = SillyTavern.libs, QA = new YA.Converter({
  emoji: !0,
  literalMidWordUnderscores: !0,
  parseImgDimensions: !0,
  tables: !0,
  underline: !0,
  simpleLineBreaks: !0,
  strikethrough: !0,
  disableForced4SpacesIndentedSublists: !0
}), B1 = ({ content: t }) => {
  const r = Y.useRef(null), i = Y.useMemo(() => {
    const s = QA.makeHtml(t);
    return XA.sanitize(s);
  }, [t]);
  return Y.useLayoutEffect(() => {
    const s = r.current;
    s && (s.innerHTML = i, s.querySelectorAll("pre").forEach((l) => {
      const u = l.querySelector("code");
      if (u && $A.highlightElement(u), l.querySelector(".code-copy-button")) return;
      const f = document.createElement("button");
      f.className = "code-copy-button", f.title = "Copy code", f.innerHTML = '<i class="fa-solid fa-clipboard"></i>', f.addEventListener("click", () => {
        const p = l.querySelector("code")?.textContent ?? "";
        navigator.clipboard.writeText(p), f.innerHTML = '<i class="fa-solid fa-check"></i>', setTimeout(() => {
          f.innerHTML = '<i class="fa-solid fa-clipboard"></i>';
        }, 1500);
      }), l.style.position = "relative", l.appendChild(f);
    }));
  }, [i]), /* @__PURE__ */ S.jsx("div", { ref: r, className: "message-content markdown-rendered" });
}, ki = SillyTavern.getContext(), KA = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), l = parseInt(i[0].split("_")[2]);
  return s - l;
}).map(([, r]) => r.value), JA = (t, r, i, s) => {
  const l = structuredClone(t);
  if (i === "field" && s) {
    const u = r;
    return l.fields[s] && (l.fields[s].value = u.response), l;
  }
  if (i === "global") {
    const u = r;
    let f = KA(l), p = !1;
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
}, WA = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, l] = Y.useState(() => structuredClone(t)), u = (_, b, v) => {
    const d = structuredClone(s), x = v ? "draftFields" : "fields";
    d[x][_] && (d[x][_].value = b), l(d);
  }, f = (_, b) => {
    const v = structuredClone(s), d = `alternate_greetings_${_ + 1}`;
    v.fields[d] && (v.fields[d].value = b), l(v);
  }, { coreFields: p, alternateGreetings: h, draftFields: m } = Y.useMemo(() => {
    const _ = [], b = [], v = [];
    return er.forEach((d) => {
      s.fields[d] && _.push({ id: d, label: s.fields[d].label, value: s.fields[d].value });
    }), Object.entries(s.fields).filter(([d]) => d.startsWith("alternate_greetings_")).sort((d, x) => parseInt(d[0].split("_")[2]) - parseInt(x[0].split("_")[2])).forEach(([, d]) => b.push(d.value)), Object.entries(s.draftFields).forEach(([d, x]) => {
      v.push({ id: d, label: x.label, value: x.value });
    }), { coreFields: _, alternateGreetings: b, draftFields: v };
  }, [s]), y = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ S.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ S.jsxs(pe, { onClick: y, children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ S.jsxs(pe, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ S.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ S.jsx("label", { children: b }),
        /* @__PURE__ */ S.jsx(Kt, { value: v, onChange: (d) => u(_, d.target.value, !1), rows: 4 })
      ] }, _)),
      m.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        m.map(({ id: _, label: b, value: v }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsx("label", { children: b }),
          /* @__PURE__ */ S.jsx(Kt, { value: v, onChange: (d) => u(_, d.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      h.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((_, b) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            b + 1
          ] }),
          /* @__PURE__ */ S.jsx(Kt, { value: _, onChange: (v) => f(b, v.target.value), rows: 4 })
        ] }, b))
      ] })
    ] })
  ] });
}, eN = ({
  session: t,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: l,
  chatContextOptions: u
}) => {
  const [f, p] = Y.useState(t.messages), [h, m] = Y.useState(""), [y, _] = Y.useState(!1), [b, v] = Y.useState(null), [d, x] = Y.useState(!1), [C, N] = Y.useState(!1), [A, D] = Y.useState(null), [E, T] = Y.useState(""), M = Y.useRef(null), k = Y.useRef(null);
  Y.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const I = Y.useCallback(
    ($, Ce, xe) => {
      if (JSON.stringify(xe) === JSON.stringify(Ce))
        return $;
      const Je = vt.getSettings().prompts.existingFieldDefinitions;
      if (!Je) return $;
      const Re = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(xe.fields), ...Object.keys(Ce.fields)])).forEach((re) => {
        const F = xe.fields[re]?.value ?? "", se = Ce.fields[re]?.value ?? "";
        if (F !== se) {
          const he = Ce.fields[re];
          he && (re.startsWith("alternate_greetings_") ? Re.alternate_greetings[he.label] = he.value : er.includes(re) && (Re.core[he.label] = he.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(xe.draftFields), ...Object.keys(Ce.draftFields)])).forEach((re) => {
        const F = xe.draftFields[re]?.value ?? "", se = Ce.draftFields[re]?.value ?? "";
        if (F !== se && Ce.draftFields[re]) {
          const he = Ce.draftFields[re];
          Re.draft[he.label] = he.value;
        }
      }), Object.keys(Re.core).length === 0 && Object.keys(Re.alternate_greetings).length === 0 && Object.keys(Re.draft).length === 0)
        return $;
      const U = { fields: Re };
      let ie = Zt.compile(Je.content, { noEscape: !0 })(U);
      if (ie = ki.substituteParams(ie), ie.trim()) {
        const re = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: ie.trim(),
          isStateUpdate: !0
        };
        return [...$, re];
      }
      return $;
    },
    []
  ), X = Y.useCallback(
    async ($, Ce, xe, Fe) => {
      const Je = vt.getSettings();
      if (!t.profileId) {
        be("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), xe(), _(!0);
      try {
        const Re = [], st = ki.extensionSettings.connectionManager?.profiles?.find(
          (re) => re.id === t.profileId
        ), It = st?.api ? ki.CONNECT_API_MAP[st.api]?.selected : void 0;
        if (!It)
          throw new Error("No API selected for this session.");
        for (const re of $)
          if (re.id === Xd) {
            if (Ft === void 0 && !Zn) continue;
            const F = await N0(It, u);
            F.warnings?.length && F.warnings.forEach((se) => be("warning", se)), Re.push(...F.result);
          } else
            Re.push(re);
        const U = $.slice(0, $.length - (Ce ? 0 : 1)).reverse().find((re) => re.stateSnapshot)?.stateSnapshot ?? l, ie = Je.prompts.existingFieldDefinitions;
        if (ie) {
          const re = {
            fields: {
              core: Object.fromEntries(
                Object.entries(U.fields).filter(([se]) => !se.startsWith("alternate_greetings_")).map(([, se]) => [se.label, se.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(U.fields).filter(([se]) => se.startsWith("alternate_greetings_")).map(([, se]) => [se.label, se.value])
              ),
              draft: Object.fromEntries(Object.entries(U.draftFields).map(([, se]) => [se.label, se.value]))
            }
          };
          let F = Zt.compile(ie.content, { noEscape: !0 })(re);
          if (F = ki.substituteParams(F), F.trim()) {
            const se = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: F.trim()
            }, he = Re.pop();
            Re.push(se), he && Re.push(he);
          }
        }
        if (t.isReadonly) {
          Re.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const re = await Kd(
            t.profileId,
            Re,
            Je.maxResponseToken,
            k.current.signal
          ), F = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: re
          }, se = [...$, F];
          p(se), s({ ...t, messages: se });
        } else {
          const re = t.type === "field" ? LA : (() => {
            const _e = [...Object.keys(U.fields), ...Object.keys(U.draftFields)], ve = Object.keys(U.draftFields);
            return BA(_e, ve);
          })(), se = await ZA(
            t.profileId,
            Re,
            re,
            t.type === "field" ? l0.FIELD : l0.GLOBAL,
            t.promptEngineeringMode,
            Je.maxResponseToken,
            k.current.signal
          ), he = JA(U, se, t.type, t.targetFieldId), K = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: se.justification,
            stateSnapshot: he
          };
          let ce = [...$, K];
          ce = I(ce, he, U), p(ce), s({ ...t, messages: ce });
        }
      } catch (Re) {
        Re.name === "AbortError" ? be("info", "Request was cancelled.") : (console.error("Revise request failed:", Re), be("error", `Request failed: ${Re.message}`)), Fe();
      } finally {
        _(!1), k.current = null;
      }
    },
    [t, s, l, u, I]
  ), P = Y.useCallback(async () => {
    if (!h.trim() || y) return;
    const $ = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, Ce = f;
    X(
      [...f, $],
      !1,
      () => {
        p([...f, $]), m("");
      },
      () => p(Ce)
    );
  }, [h, y, f, X]), V = Y.useCallback(async () => {
    if (y || f.length === 0) return;
    const $ = f;
    let Ce = [...f];
    const xe = f.findLastIndex((Fe) => !Fe.isStateUpdate);
    xe > -1 && f[xe].role === "assistant" && (Ce = f.slice(0, xe)), await X(
      Ce,
      !0,
      () => p(Ce),
      () => p($)
    );
  }, [y, f, X]), Q = () => {
    const $ = f.slice().reverse().find((Ce) => Ce.stateSnapshot)?.stateSnapshot ?? l;
    i($), r();
  }, de = ($) => {
    const Ce = f.findIndex((Je) => Je.id === $);
    if (Ce === -1 || !f[Ce].stateSnapshot) return;
    const xe = f[Ce].stateSnapshot;
    let Fe = l;
    for (let Je = Ce - 1; Je >= 0; Je--)
      if (f[Je].stateSnapshot) {
        Fe = f[Je].stateSnapshot;
        break;
      }
    v({ before: Fe, after: xe });
  }, me = () => {
    x(!0);
  }, Se = ($) => {
    D($.id), T($.content);
  }, B = () => {
    D(null), T("");
  }, ae = async () => {
    if (!A) return;
    const $ = f.findIndex((st) => st.id === A);
    if ($ === -1 || !await ki.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const xe = f, Fe = f.slice(0, $), Je = { ...f[$], content: E }, Re = [...Fe, Je];
    B(), X(
      Re,
      !1,
      () => p(Re),
      () => p(xe)
    );
  }, ge = async ($) => {
    const Ce = f.findIndex((st) => st.id === $);
    if (Ce === -1) return;
    const Fe = !!f[Ce].isInitial;
    if (!await ki.Popup.show.confirm(
      "Delete Message",
      Fe ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let Re;
    Fe ? Re = f.filter((st) => st.isInitial && st.id !== $) : Re = f.slice(0, Ce), p(Re), s({ ...t, messages: Re }), be("info", "Message history has been updated.");
  }, Te = f.filter(($) => !$.isStateUpdate), R = Te.filter(($) => $.isInitial), ee = Te.filter(($) => !$.isInitial), oe = f.slice().reverse().find(($) => $.stateSnapshot)?.stateSnapshot ?? l, ue = () => {
    N(!0);
  }, le = ($) => {
    const Ce = f.slice().reverse().find((Je) => Je.stateSnapshot)?.stateSnapshot ?? l, xe = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: $
    };
    let Fe = [...f, xe];
    Fe = I(Fe, $, Ce), p(Fe), s({ ...t, messages: Fe }), N(!1);
  }, ze = () => {
    k.current?.abort();
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
              onChange: ($) => s({ ...t, isReadonly: $.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ S.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ S.jsx(
          o1,
          {
            initialSelectedProfileId: t.profileId,
            onChange: ($) => s({ ...t, profileId: $?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ S.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: ($) => s({ ...t, promptEngineeringMode: $.target.value }),
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
        /* @__PURE__ */ S.jsx(pe, { onClick: me, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ S.jsx(pe, { onClick: ue, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ S.jsx(pe, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ S.jsxs(pe, { onClick: Q, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      R.length > 0 && /* @__PURE__ */ S.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ S.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ S.jsx("div", { className: "initial-messages-content", children: R.map(
          ($) => A === $.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ S.jsx(Kt, { value: E, onChange: (Ce) => T(Ce.target.value), rows: 5 }),
            /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ S.jsxs(pe, { onClick: ae, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ S.jsxs(pe, { onClick: B, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, $.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper initial-context ${$.role}`, children: [
            /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${$.role} initial`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: $.content }) }),
            !y && $.id !== Xd && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ S.jsxs(
                pe,
                {
                  className: "message-action-button",
                  onClick: () => Se($),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ S.jsxs(
                pe,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ge($.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, $.id)
        ) })
      ] }),
      ee.map(
        ($) => A === $.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ S.jsx(Kt, { value: E, onChange: (Ce) => T(Ce.target.value), rows: 3 }),
          /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ S.jsxs(pe, { onClick: ae, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ S.jsxs(pe, { onClick: B, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, $.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper ${$.role}`, children: [
          /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
            $.role === "user" && !$.stateSnapshot && !y && /* @__PURE__ */ S.jsxs(
              pe,
              {
                className: "message-action-button",
                onClick: () => Se($),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            $.stateSnapshot && !y && /* @__PURE__ */ S.jsxs(
              pe,
              {
                className: "message-action-button",
                onClick: () => de($.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !y && /* @__PURE__ */ S.jsxs(
              pe,
              {
                className: "message-action-button danger_button",
                onClick: () => ge($.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${$.role}`, children: $.role === "assistant" ? /* @__PURE__ */ S.jsx(B1, { content: $.content }) : /* @__PURE__ */ S.jsx("div", { className: "message-content", children: $.content }) })
        ] }, $.id)
      ),
      ee.length > 0 && !y && /* @__PURE__ */ S.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ S.jsxs(pe, { onClick: V, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      y && /* @__PURE__ */ S.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ S.jsx(pe, { onClick: ze, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        Kt,
        {
          value: h,
          onChange: ($) => m($.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: y || !!A,
          onKeyDown: ($) => {
            $.key === "Enter" && !$.shiftKey && ($.preventDefault(), P());
          }
        }
      ),
      /* @__PURE__ */ S.jsxs(pe, { onClick: P, disabled: y || !h.trim() || !!A, children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    b && /* @__PURE__ */ S.jsx(
      Pi,
      {
        type: Sn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(GA, { before: b.before, after: b.after }),
        onComplete: () => v(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ S.jsx(
      Pi,
      {
        type: Sn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(VA, { currentState: oe, initialState: l }),
        onComplete: () => x(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    C && /* @__PURE__ */ S.jsx(
      Pi,
      {
        type: Sn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          WA,
          {
            initialState: oe,
            onSave: le,
            onClose: () => N(!1)
          }
        ),
        onComplete: () => N(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
function U1(t, r = {}) {
  const i = t?.entries;
  if (!i)
    return [];
  const s = Array.isArray(i) ? i : Object.values(i);
  return r.includeDisabled ? s : s.filter((l) => !l.disable);
}
async function tN(t, r, i, s, l) {
  const u = vt.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], m = {
    ...{
      user: Gt.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: Gt.powerUserSettings.persona_description
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
      const x = Gt.characters[parseInt(d)];
      x && v.push(x);
    }), m.characters = v;
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      l.selectedWorldNames.map(async (d) => {
        const x = await Gt.loadWorldInfo(d);
        x && (v[d] = U1(x));
      })
    ), m.lorebooks = v;
  }
  for (const v of f.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona || v.promptName === "chatHistory" && s.messages.type === "none" || Ft === void 0 && !Zn && v.promptName === "chatHistory") continue;
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
    const x = u.prompts[v.promptName];
    if (!x || x.content.includes("{{activeFormatInstructions}}"))
      continue;
    let C = Zt.compile(x.content, { noEscape: !0 })(
      xu(m, v.promptName)
    );
    C = Eu(C, (N) => Gt.substituteParams(N)), C.trim() && p.push({
      id: `im-${p.length}`,
      role: v.role,
      content: C.trim(),
      isInitial: !0
    });
  }
  const y = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, b = Zt.compile(_, { noEscape: !0 })({
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
const H1 = "charCreator", q1 = "charCreator_reviseSessions", F1 = "charCreator_brainstormSessions", Ba = () => SillyTavern.libs.localforage, nN = (t) => {
  if (!t)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(t), recovered: !1 };
  } catch (r) {
    return { value: null, recovered: !0, error: r };
  }
}, vh = async (t, r, i) => {
  try {
    const s = await r.getItem(t);
    if (s !== null)
      return { value: s, migrated: !1, recovered: !1 };
    const l = nN(i.getItem(t));
    return l.value === null ? (l.recovered && i.removeItem(t), { value: null, migrated: !1, recovered: l.recovered, error: l.error }) : (await r.setItem(t, l.value), i.removeItem(t), { value: l.value, migrated: !0, recovered: l.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, yh = async (t, r, i = Ba()) => {
  try {
    return await i.setItem(t, r), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, rN = (t = Ba(), r = localStorage) => vh(H1, t, r), aN = (t, r = Ba()) => yh(H1, t, r), iN = (t = Ba(), r = localStorage) => vh(q1, t, r), sN = (t, r = Ba()) => yh(q1, t, r), oN = (t = Ba(), r = localStorage) => vh(F1, t, r), c0 = (t, r = Ba()) => yh(F1, t, r), lu = SillyTavern.getContext(), lN = ({
  target: t,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: l,
  sessionForContext: u
}) => {
  const [f, p] = Y.useState([]), [h, m] = Y.useState(null), [y, _] = Y.useState(!0);
  Y.useEffect(() => {
    let D = !0;
    return iN().then(({ value: E, recovered: T }) => {
      D && (p(Array.isArray(E) ? E : []), T && be("warning", "Some saved revise sessions were invalid and have been reset."));
    }).catch((E) => {
      console.error("Failed to load revise sessions:", E), be("warning", "Saved revise sessions could not be loaded.");
    }).finally(() => {
      D && _(!1);
    }), () => {
      D = !1;
    };
  }, []);
  const b = Y.useMemo(() => f.filter((D) => D.type === t.type && (D.type === "global" || D.targetFieldId === t.fieldId)).sort((D, E) => new Date(E.createdAt).getTime() - new Date(D.createdAt).getTime()), [f, t]), v = (D) => {
    p(D), sN(D).then((E) => {
      E.persisted || (console.warn("Failed to save revise sessions:", E.error), be("warning", "Revise session history could not be saved. Browser storage may be full."));
    });
  }, d = async () => {
    const D = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", E = await lu.Popup.show.input(
      "New Session Name",
      `Session for ${D} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (E)
      try {
        const T = vt.getSettings();
        if (!T.profileId) {
          be("warning", "Please select a connection profile in the main popup first.");
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
            mainContextTemplatePreset: T.mainContextTemplatePreset
          },
          profileId: T.profileId,
          promptEngineeringMode: T.defaultPromptEngineeringMode,
          isReadonly: !1
        }, k = await tN(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          l,
          u
        );
        M.messages = k, v([...f, M]), m(M);
      } catch (T) {
        console.error("Failed to create session:", T), be("error", `Failed to create session: ${T.message}`);
      }
  }, x = (D) => {
    m(D);
  }, C = async (D) => {
    if (await lu.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const T = f.filter((M) => M.id !== D);
      v(T);
    }
  }, N = (D) => {
    const E = f.findIndex((M) => M.id === D.id), T = [...f];
    E !== -1 ? T[E] = D : T.push(D), v(T), m(D);
  };
  if (h) {
    const D = lu.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === h.profileId
    ), E = {
      targetCharacterId: Ft,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Zn,
      presetName: D?.preset,
      contextName: D?.context,
      instructName: D?.instruct
    }, T = l.messages;
    switch (T.type) {
      case "none":
        E.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        E.messageIndexesBetween = { start: 0, end: T.first ?? 10 };
        break;
      case "last":
        const M = lu.chat?.length ?? 0, k = T.last ?? 10;
        E.messageIndexesBetween = {
          end: Math.max(0, M - 1),
          start: Math.max(0, M - k)
        };
        break;
      case "range":
        E.messageIndexesBetween = {
          start: T.range?.start ?? 0,
          end: T.range?.end ?? 10
        };
        break;
    }
    return Ft === void 0 && !Zn && (E.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ S.jsx(
      eN,
      {
        session: h,
        onBack: () => m(null),
        onApply: i,
        onSessionUpdate: N,
        initialState: s,
        chatContextOptions: E
      }
    );
  }
  const A = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ S.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ S.jsx("div", { className: "popup_header", children: /* @__PURE__ */ S.jsxs("h2", { children: [
      'Revise Sessions for "',
      A,
      '"'
    ] }) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-list", children: y ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : b.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : b.map((D) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => x(D), children: [
        /* @__PURE__ */ S.jsx("span", { className: "session-name", children: D.name }),
        /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(D.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ S.jsx(pe, { className: "danger_button", onClick: () => C(D.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, D.id)) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-actions", children: /* @__PURE__ */ S.jsxs(pe, { onClick: d, className: "menu_button", children: [
      /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, uN = SillyTavern.getContext(), cN = 50 * 1024 * 1024, fN = {
  "x-msvideo": "avi",
  quicktime: "mov",
  "x-matroska": "mkv",
  "x-ms-wmv": "wmv",
  "x-flv": "flv",
  "3gpp": "3gp"
};
function Z1(t) {
  return new Promise((r, i) => {
    const s = new FileReader();
    s.onload = () => r(s.result), s.onerror = () => i(new Error("Failed to read file")), s.readAsDataURL(t);
  });
}
let dN = 0;
async function hN(t) {
  const r = t.type.startsWith("video/");
  r && t.size > cN && be(
    "warning",
    `Video "${t.name}" is ${(t.size / 1024 / 1024).toFixed(1)}MB. Large videos may be slow to upload and expensive in tokens.`
  );
  const s = (await Z1(t)).split(",")[1], l = t.type.split("/")[1] || "png", u = fN[l] || l, f = `brainstorm_${Date.now()}_${dN++}`, p = await fetch("/api/images/upload", {
    method: "POST",
    headers: uN.getRequestHeaders(),
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
async function pN(t) {
  const r = await fetch(t);
  if (!r.ok)
    throw new Error(`Failed to fetch image: ${r.statusText}`);
  const i = await r.blob();
  return new Promise((s, l) => {
    const u = new FileReader();
    u.onload = () => s(u.result), u.onerror = () => l(new Error("Failed to convert image to data URL")), u.readAsDataURL(i);
  });
}
async function G1(t, r, i, s, l) {
  const u = vt.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], m = {
    ...{
      user: Gt.name1 || "You",
      char: t.name?.value || "Character",
      persona: Gt.powerUserSettings.persona_description
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
      const v = Gt.characters[parseInt(b)];
      v && _.push(v);
    }), m.characters = _;
  }
  if (s.worldInfo) {
    const _ = {};
    await Promise.all(
      l.selectedWorldNames.map(async (b) => {
        const v = await Gt.loadWorldInfo(b);
        v && (_[b] = Object.values(v.entries).filter((d) => !d.disable));
      })
    ), m.lorebooks = _;
  }
  const y = u.prompts.brainstormSystemPrompt;
  if (y?.content) {
    let _ = Zt.compile(y.content, { noEscape: !0 })(
      xu(m, "brainstormSystemPrompt")
    );
    _ = Eu(_, (b) => Gt.substituteParams(b)), _.trim() && p.push({
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
    let d = Zt.compile(v.content, { noEscape: !0 })(
      xu(m, _.promptName)
    );
    d = Eu(d, (x) => Gt.substituteParams(x)), d.trim() && p.push({
      id: `im-${p.length}`,
      role: _.role,
      content: d.trim(),
      isInitial: !0
    });
  }
  return p;
}
const f0 = SillyTavern.getContext(), mN = ({
  session: t,
  onBack: r,
  onSessionUpdate: i,
  contextToSend: s,
  sessionForContext: l,
  isActive: u = !0
}) => {
  const [f, p] = Y.useState(t.messages), [h, m] = Y.useState(""), [y, _] = Y.useState(!1), [b, v] = Y.useState(null), [d, x] = Y.useState(""), [C, N] = Y.useState([]), A = Y.useRef(null), D = Y.useRef(null), [E, T] = Y.useState([]), [M, k] = Y.useState([]), I = Y.useRef(null), X = Y.useRef(/* @__PURE__ */ new Map()), P = Y.useRef(!1), V = (F) => F.type.startsWith("video/"), Q = (F) => F.mediaType === "video", de = Y.useRef(f);
  de.current = f;
  const me = Y.useRef(t);
  me.current = t;
  const Se = Y.useRef(i);
  Se.current = i;
  const B = Y.useRef(l);
  B.current = l;
  const ae = JSON.stringify(s), ge = Y.useRef(!0);
  Y.useEffect(() => {
    if (ge.current) {
      ge.current = !1;
      return;
    }
    let F = !1;
    return (async () => {
      const he = vt.getSettings();
      try {
        const K = await G1(
          B.current.fields,
          B.current.draftFields,
          he.mainContextTemplatePreset,
          s,
          B.current
        );
        if (F) return;
        const ce = de.current.filter((ve) => !ve.isInitial), _e = [...K, ...ce];
        p(_e), Se.current({
          ...me.current,
          messages: _e,
          contextConfig: {
            stDescription: s.stDescription,
            charCard: s.charCard,
            existingFields: s.existingFields,
            worldInfo: s.worldInfo,
            persona: s.persona,
            messages: s.messages
          }
        });
      } catch (K) {
        console.error("Failed to rebuild brainstorm context:", K);
      }
    })(), () => {
      F = !0;
    };
  }, [ae]);
  const Te = Y.useCallback(async (F) => {
    const se = F.filter((K) => K.type.startsWith("image/") || K.type.startsWith("video/"));
    if (se.length === 0) return;
    const he = await Promise.all(se.map((K) => Z1(K)));
    T((K) => [...K, ...se]), k((K) => [...K, ...he]);
  }, []), R = Y.useCallback((F) => {
    T((se) => se.filter((he, K) => K !== F)), k((se) => se.filter((he, K) => K !== F));
  }, []), ee = Y.useCallback(
    (F) => {
      const se = Array.from(F.clipboardData.files);
      se.some((he) => he.type.startsWith("image/") || he.type.startsWith("video/")) && (F.preventDefault(), Te(se));
    },
    [Te]
  ), oe = Y.useCallback(
    (F) => {
      const se = Array.from(F.target.files || []);
      Te(se), I.current && (I.current.value = "");
    },
    [Te]
  ), ue = Y.useRef(u);
  Y.useEffect(() => {
    const F = u && !ue.current;
    ue.current = u, u && A.current?.scrollIntoView({ behavior: F ? "auto" : "smooth" });
  }, [f, u]);
  const le = Y.useCallback(
    async (F, se, he) => {
      const K = vt.getSettings();
      if (!K.profileId) {
        be("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      D.current = new AbortController();
      for (const ce of F)
        if (ce.images) {
          for (const _e of ce.images)
            if (!X.current.has(_e.url))
              try {
                const ve = await pN(_e.url);
                X.current.set(_e.url, ve);
              } catch (ve) {
                console.warn(`Failed to load image ${_e.url}, skipping`, ve);
              }
        }
      se(), _(!0);
      try {
        const ce = F.some((ht) => ht.images?.some((nt) => nt.mediaType === "video")), _e = u0(
          F,
          X.current,
          ce && P.current
        );
        let ve;
        try {
          ve = await Kd(
            K.profileId,
            _e,
            K.maxResponseToken,
            D.current.signal
          );
        } catch (ht) {
          if (ht.name === "AbortError" || !ce || P.current)
            throw ht;
          P.current = !0;
          const nt = u0(F, X.current, !0);
          ve = await Kd(
            K.profileId,
            nt,
            K.maxResponseToken,
            D.current.signal
          ), be("warning", "Video attachments were skipped because the current model does not support them.");
        }
        const He = {
          id: `bm-${Date.now()}-ai`,
          role: "assistant",
          content: ve
        }, Xe = [...F, He];
        p(Xe), i({ ...t, messages: Xe });
      } catch (ce) {
        ce.name === "AbortError" ? be("info", "Request was cancelled.") : (console.error("Brainstorm request failed:", ce), be("error", `Request failed: ${ce.message}`)), he();
      } finally {
        _(!1), D.current = null;
      }
    },
    [t, i]
  ), ze = Y.useCallback(async () => {
    if (y) return;
    const F = f.filter((ve) => !ve.isInitial), he = F[F.length - 1]?.role === "user";
    if (!h.trim() && E.length === 0 && !he) return;
    if (!h.trim() && E.length === 0 && he) {
      const ve = f;
      await le(
        f,
        () => {
        },
        () => p(ve)
      );
      return;
    }
    let K = [];
    if (E.length > 0)
      try {
        K = await Promise.all(E.map((ve) => hN(ve)));
        for (let ve = 0; ve < K.length; ve++)
          X.current.set(K[ve].url, M[ve]);
      } catch (ve) {
        console.error("Upload failed:", ve), be("error", `Upload failed: ${ve.message}`);
        return;
      }
    const ce = {
      id: `bm-${Date.now()}`,
      role: "user",
      content: h.trim(),
      ...K.length > 0 ? { images: K } : {}
    }, _e = [...f, ce];
    le(
      _e,
      () => {
        p(_e), m(""), T([]), k([]);
      },
      () => {
        p(_e), i({ ...t, messages: _e });
      }
    );
  }, [h, y, f, le, E, M, t, i]), $ = Y.useCallback(async () => {
    if (y || f.length === 0) return;
    const F = f;
    let se = [...f];
    const he = f.length - 1;
    f[he].role === "assistant" && (se = f.slice(0, he)), await le(
      se,
      () => p(se),
      () => p(F)
    );
  }, [y, f, le]), Ce = (F) => {
    v(F.id), x(F.content), N(F.images ? [...F.images] : []);
  }, xe = () => {
    v(null), x(""), N([]);
  }, Fe = async () => {
    if (!b) return;
    const F = f.findIndex((He) => He.id === b);
    if (F === -1) return;
    if (f[F].role === "assistant") {
      const He = f.map(
        (Xe) => Xe.id === b ? { ...Xe, content: d, images: C.length > 0 ? C : void 0 } : Xe
      );
      p(He), i({ ...t, messages: He }), xe();
      return;
    }
    if (!await f0.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const K = f, ce = f.slice(0, F), _e = {
      ...f[F],
      content: d,
      images: C.length > 0 ? C : void 0
    }, ve = [...ce, _e];
    xe(), le(
      ve,
      () => p(ve),
      () => p(K)
    );
  }, Je = async (F) => {
    const se = f.findIndex((ve) => ve.id === F);
    if (se === -1) return;
    const K = !!f[se].isInitial;
    if (!await f0.Popup.show.confirm(
      "Delete Message",
      K ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let _e;
    K ? _e = f.filter((ve) => ve.isInitial && ve.id !== F) : _e = f.slice(0, se), p(_e), i({ ...t, messages: _e }), be("info", "Message history has been updated.");
  }, Re = () => {
    D.current?.abort();
  }, st = f.filter((F) => F.isInitial), It = f.filter((F) => !F.isInitial), U = It.filter((F) => F.role === "assistant").at(-1)?.id, ie = It[It.length - 1], re = !!(ie && ie.role === "user");
  return /* @__PURE__ */ S.jsxs("div", { className: "brainstorm-chat", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: t.name }),
      /* @__PURE__ */ S.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ S.jsxs(pe, { onClick: r, title: "Back to sessions", children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-left" }),
        " Back"
      ] }) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      st.length > 0 && /* @__PURE__ */ S.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ S.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ S.jsx("div", { className: "initial-messages-content", children: st.map(
          (F) => b === F.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ S.jsx(Kt, { value: d, onChange: (se) => x(se.target.value), rows: 5 }),
            C.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "pending-images-preview", children: C.map((se, he) => /* @__PURE__ */ S.jsxs("div", { className: "pending-image-item", children: [
              Q(se) ? /* @__PURE__ */ S.jsxs("div", { className: "video-thumbnail-wrapper", children: [
                /* @__PURE__ */ S.jsx("video", { src: se.url, muted: !0, preload: "metadata" }),
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-play video-play-icon" })
              ] }) : /* @__PURE__ */ S.jsx("img", { src: se.url, alt: se.name }),
              /* @__PURE__ */ S.jsx(
                pe,
                {
                  className: "remove-image-button danger_button",
                  onClick: () => N((K) => K.filter((ce, _e) => _e !== he)),
                  title: "Remove image",
                  children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" })
                }
              )
            ] }, he)) }),
            /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ S.jsxs(pe, { onClick: Fe, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ S.jsxs(pe, { onClick: xe, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, F.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper initial-context ${F.role}`, children: [
            /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${F.role} initial`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: F.content }) }),
            !y && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ S.jsx(
                pe,
                {
                  className: "message-action-button",
                  onClick: () => Ce(F),
                  title: "Edit Context",
                  children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ S.jsx(
                pe,
                {
                  className: "message-action-button danger_button",
                  onClick: () => Je(F.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, F.id)
        ) })
      ] }),
      It.map((F) => {
        const se = F.role === "assistant" && F.id === U;
        return b === F.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ S.jsx(Kt, { value: d, onChange: (K) => x(K.target.value), rows: 10 }),
          C.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "pending-images-preview", children: C.map((K, ce) => /* @__PURE__ */ S.jsxs("div", { className: "pending-image-item", children: [
            Q(K) ? /* @__PURE__ */ S.jsxs("div", { className: "video-thumbnail-wrapper", children: [
              /* @__PURE__ */ S.jsx("video", { src: K.url, muted: !0, preload: "metadata" }),
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-play video-play-icon" })
            ] }) : /* @__PURE__ */ S.jsx("img", { src: K.url, alt: K.name }),
            /* @__PURE__ */ S.jsx(
              pe,
              {
                className: "remove-image-button danger_button",
                onClick: () => N((_e) => _e.filter((ve, He) => He !== ce)),
                title: "Remove image",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" })
              }
            )
          ] }, ce)) }),
          /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ S.jsxs(pe, { onClick: Fe, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
              " ",
              F.role === "assistant" ? "Save" : "Save & Fork"
            ] }),
            /* @__PURE__ */ S.jsxs(pe, { onClick: xe, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, F.id) : /* @__PURE__ */ S.jsx("div", { className: `message-bubble-wrapper ${F.role}`, children: /* @__PURE__ */ S.jsxs("div", { className: `message-bubble ${F.role}`, children: [
          !y && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
            /* @__PURE__ */ S.jsx(
              pe,
              {
                className: "message-action-button",
                onClick: () => Ce(F),
                title: F.role === "assistant" ? "Edit Message" : "Edit and Fork",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            se && /* @__PURE__ */ S.jsx(
              pe,
              {
                className: "message-action-button",
                onClick: $,
                title: "Regenerate response",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-right" })
              }
            ),
            /* @__PURE__ */ S.jsx(
              pe,
              {
                className: "message-action-button danger_button",
                onClick: () => Je(F.id),
                title: "Delete Message",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          F.role === "assistant" ? /* @__PURE__ */ S.jsx(B1, { content: F.content }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ S.jsx("div", { className: "message-content", children: F.content }),
            F.images && F.images.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "message-images", children: F.images.map(
              (K, ce) => Q(K) ? /* @__PURE__ */ S.jsxs(
                "div",
                {
                  className: "video-thumbnail-wrapper",
                  title: K.name,
                  onClick: () => window.open(K.url, "_blank"),
                  children: [
                    /* @__PURE__ */ S.jsx("video", { src: K.url, muted: !0, preload: "metadata" }),
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-play video-play-icon" })
                  ]
                },
                ce
              ) : /* @__PURE__ */ S.jsx(
                "img",
                {
                  src: K.url,
                  alt: K.name,
                  title: K.name,
                  onClick: () => window.open(K.url, "_blank")
                },
                ce
              )
            ) })
          ] })
        ] }) }, F.id);
      }),
      y && /* @__PURE__ */ S.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ S.jsx(pe, { onClick: Re, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: A })
    ] }),
    M.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "pending-images-preview", children: M.map((F, se) => /* @__PURE__ */ S.jsxs(
      "div",
      {
        className: `pending-image-item ${V(E[se]) ? "video-thumbnail-wrapper" : ""}`,
        children: [
          V(E[se]) ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ S.jsx("video", { src: F, muted: !0, preload: "metadata" }),
            /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-play video-play-icon" })
          ] }) : /* @__PURE__ */ S.jsx("img", { src: F, alt: E[se]?.name || "pending" }),
          /* @__PURE__ */ S.jsx(
            pe,
            {
              className: "remove-image-button danger_button",
              onClick: () => R(se),
              title: "Remove image",
              children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" })
            }
          )
        ]
      },
      se
    )) }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        "input",
        {
          ref: I,
          type: "file",
          accept: "image/*,video/*",
          multiple: !0,
          style: { display: "none" },
          onChange: oe
        }
      ),
      /* @__PURE__ */ S.jsx(
        Kt,
        {
          value: h,
          onChange: (F) => m(F.target.value),
          placeholder: "Brainstorm ideas for your character...",
          rows: 3,
          disabled: y || !!b,
          onKeyDown: (F) => {
            F.key === "Enter" && !F.shiftKey && (F.preventDefault(), ze());
          },
          onPaste: ee
        }
      ),
      /* @__PURE__ */ S.jsx(
        pe,
        {
          className: "image-attach-button",
          onClick: () => I.current?.click(),
          disabled: y || !!b,
          title: "Attach image or video",
          children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paperclip" })
        }
      ),
      /* @__PURE__ */ S.jsx(
        pe,
        {
          onClick: ze,
          disabled: y || !!b || !h.trim() && E.length === 0 && !re,
          children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane" })
        }
      )
    ] })
  ] });
}, d0 = SillyTavern.getContext(), gN = 5, vN = ({
  contextToSend: t,
  sessionForContext: r,
  isActive: i = !0
}) => {
  const [s, l] = Y.useState([]), [u, f] = Y.useState(null), [p, h] = Y.useState(!0);
  Y.useEffect(() => {
    let N = !0;
    return oN().then(({ value: A, recovered: D }) => {
      if (!N) return;
      const E = Array.isArray(A) ? A : [], T = E.some((k) => k.saved === void 0), M = E.map((k) => ({ ...k, saved: k.saved ?? !0 }));
      l(M), T && c0(M), D && be("warning", "Some saved brainstorm sessions were invalid and have been reset.");
    }).catch((A) => {
      console.error("Failed to load brainstorm sessions:", A), be("warning", "Saved brainstorm sessions could not be loaded.");
    }).finally(() => {
      N && h(!1);
    }), () => {
      N = !1;
    };
  }, []);
  const m = Y.useMemo(() => s.filter((N) => N.saved).sort((N, A) => new Date(A.createdAt).getTime() - new Date(N.createdAt).getTime()), [s]), y = Y.useMemo(() => s.filter((N) => !N.saved).sort((N, A) => new Date(A.createdAt).getTime() - new Date(N.createdAt).getTime()), [s]), _ = (N) => {
    l(N), c0(N).then((A) => {
      A.persisted || (console.warn("Failed to save brainstorm sessions:", A.error), be("warning", "Brainstorm session history could not be saved. Browser storage may be full."));
    });
  }, b = async () => {
    const N = `Brainstorm - ${(/* @__PURE__ */ new Date()).toLocaleString()}`;
    try {
      const A = vt.getSettings();
      if (!A.profileId) {
        be("warning", "Please select a connection profile in the extension settings.");
        return;
      }
      const D = {
        id: `bs-${Date.now()}`,
        name: N,
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
      }, E = await G1(
        r.fields,
        r.draftFields,
        A.mainContextTemplatePreset,
        t,
        r
      );
      D.messages = E;
      let T = [...s];
      const M = T.filter((k) => !k.saved).sort((k, I) => new Date(k.createdAt).getTime() - new Date(I.createdAt).getTime());
      if (M.length >= gN) {
        const k = M[0];
        T = T.filter((I) => I.id !== k.id), u?.id === k.id && f(null);
      }
      T.push(D), _(T), f(D);
    } catch (A) {
      console.error("Failed to create brainstorm session:", A), be("error", `Failed to create session: ${A.message}`);
    }
  }, v = (N) => {
    f(N);
  }, d = async (N) => {
    if (await d0.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const D = s.filter((E) => E.id !== N);
      _(D), u?.id === N && f(null);
    }
  }, x = async (N) => {
    const A = s.find((T) => T.id === N);
    if (!A) return;
    const D = await d0.Popup.show.input("Save Session", A.name);
    if (!D) return;
    const E = s.map((T) => T.id === N ? { ...T, saved: !0, name: D } : T);
    _(E), u?.id === N && f({ ...A, saved: !0, name: D });
  }, C = (N) => {
    const A = s.findIndex((E) => E.id === N.id), D = [...s];
    A !== -1 ? D[A] = N : D.push(N), _(D), f(N);
  };
  return u ? /* @__PURE__ */ S.jsx(
    mN,
    {
      session: u,
      isActive: i,
      onBack: () => f(null),
      onSessionUpdate: C,
      contextToSend: t,
      sessionForContext: r
    }
  ) : /* @__PURE__ */ S.jsxs("div", { className: "brainstorm-session-manager", children: [
    /* @__PURE__ */ S.jsx("div", { className: "popup_header", children: /* @__PURE__ */ S.jsx("h3", { children: "Brainstorm Sessions" }) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-actions", children: /* @__PURE__ */ S.jsxs(pe, { onClick: b, className: "menu_button", children: [
      /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-list", children: p ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : m.length === 0 && y.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      y.length > 0 && /* @__PURE__ */ S.jsxs("div", { className: "session-section", children: [
        /* @__PURE__ */ S.jsxs("h4", { className: "session-section-header", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-clock" }),
          " Workspace"
        ] }),
        y.map((N) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => v(N), children: [
            /* @__PURE__ */ S.jsx("span", { className: "session-name", children: N.name }),
            /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(N.createdAt).toLocaleString() })
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "session-item-actions", children: [
            /* @__PURE__ */ S.jsx(pe, { className: "menu_button", onClick: () => x(N.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-floppy-disk" }) }),
            /* @__PURE__ */ S.jsx(pe, { className: "danger_button", onClick: () => d(N.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
          ] })
        ] }, N.id))
      ] }),
      m.length > 0 && /* @__PURE__ */ S.jsxs("div", { className: "session-section", children: [
        /* @__PURE__ */ S.jsxs("h4", { className: "session-section-header", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-bookmark" }),
          " Saved"
        ] }),
        m.map((N) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => v(N), children: [
            /* @__PURE__ */ S.jsx("span", { className: "session-name", children: N.name }),
            /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(N.createdAt).toLocaleString() })
          ] }),
          /* @__PURE__ */ S.jsx(pe, { className: "danger_button", onClick: () => d(N.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
        ] }, N.id))
      ] })
    ] }) })
  ] });
};
function yN(t, r) {
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
function bN(t, r = []) {
  const i = new Set(t), s = r.filter((l) => l && !i.has(l));
  return [
    ...t.map((l) => ({ value: l, label: l })),
    ...s.map((l) => ({ value: l, label: `${l} (missing)` }))
  ];
}
const jn = SillyTavern.getContext(), wd = () => ({
  selectedCharacterIndexes: Ft ? [String(Ft)] : [],
  selectedWorldNames: [],
  fields: er.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Er[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), _N = {
  name: { label: Er.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Er.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Er.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Er.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Er.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Er.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, SN = () => {
  const t = l1(), r = vt.getSettings(), [i, s] = Y.useState(wd()), [l, u] = Y.useState([]), [f, p] = Y.useState(!0), [h, m] = Y.useState("core"), [y, _] = Y.useState(!1), [b, v] = Y.useState([]), [d, x] = Y.useState([]), [C, N] = Y.useState(null), [A, D] = Y.useState(null), [E, T] = Y.useState(!1), [M, k] = Y.useState(null);
  Y.useEffect(() => {
    (async () => {
      p(!0), v(jn.characters), x(lv);
      const ie = (await rN()).value ?? {}, re = wd();
      if (ie.fields && (re.fields = { ...re.fields, ...ie.fields }), ie.draftFields && (re.draftFields = ie.draftFields), ie.selectedCharacterIndexes && (re.selectedCharacterIndexes = ie.selectedCharacterIndexes), ie.selectedWorldNames && (re.selectedWorldNames = ie.selectedWorldNames), ie.lastLoadedCharacterId) {
        re.lastLoadedCharacterId = ie.lastLoadedCharacterId;
        const F = jn.characters.find((se) => se.avatar === ie.lastLoadedCharacterId);
        F && N(F);
      }
      s(re), p(!1);
    })();
  }, []), Y.useEffect(() => {
    f || aN(i).then((U) => {
      U.persisted || (console.warn("Failed to save Character Creator session:", U.error), be("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [i, f]);
  const I = (U, ie) => {
    vt.getSettings()[U] = ie, vt.saveSettings(), t();
  }, X = (U, ie) => {
    vt.getSettings().contextToSend[U] = ie, vt.saveSettings(), t();
  }, P = Y.useCallback(
    (U, ie, re, F) => {
      s((se) => {
        const he = F ? "draftFields" : "fields", K = { ...se[he] };
        return K[U] || (K[U] = { value: "", prompt: "", label: U }), K[U][re] = ie, { ...se, [he]: K };
      });
    },
    []
  ), V = Y.useMemo(
    () => Object.keys(i.fields).filter((U) => U.startsWith("alternate_greetings_")).sort((U, ie) => parseInt(U.split("_")[2]) - parseInt(ie.split("_")[2])).map((U) => i.fields[U]),
    [i.fields]
  ), Q = Y.useCallback((U) => {
    s((ie) => {
      const re = { ...ie.fields };
      return Object.keys(re).forEach((F) => {
        F.startsWith("alternate_greetings_") && delete re[F];
      }), U.forEach((F, se) => {
        const he = `alternate_greetings_${se + 1}`;
        re[he] = { ...F, label: `Alternate_Greeting_${se + 1}` };
      }), { ...ie, fields: re };
    });
  }, []), de = Y.useCallback(
    (U, ie) => {
      P(U, "", "value", ie);
    },
    [P]
  ), me = Y.useCallback(
    async (U) => {
      await jn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[U].label}"?`
      ) && s((re) => {
        const F = { ...re.draftFields };
        return delete F[U], { ...re, draftFields: F };
      });
    },
    [i.draftFields]
  ), Se = Y.useCallback(async () => {
    const U = await jn.Popup.show.input("Enter Draft Field Name", "");
    if (!U?.trim()) return;
    const ie = Ud(U.trim());
    if (!ie) return be("error", "Invalid field name.");
    if (i.draftFields[ie] || er.includes(ie))
      return be("warning", "Field name already exists.");
    s((re) => ({
      ...re,
      draftFields: { ...re.draftFields, [ie]: { value: "", prompt: "", label: U } }
    })), m("draft");
  }, [i.draftFields]), B = (U) => {
    k({ type: "field", fieldId: U }), T(!0);
  }, ae = () => {
    k({ type: "global" }), T(!0);
  }, ge = (U) => {
    s((ie) => ({
      ...ie,
      fields: { ...ie.fields, ...U.fields },
      draftFields: { ...ie.draftFields, ...U.draftFields }
    })), be("success", "Changes from revise session applied."), T(!1);
  }, Te = Y.useCallback(
    async (U, ie) => {
      if (!r.profileId) return be("warning", "Please select a connection profile.");
      u((re) => [...re, U]);
      try {
        const re = jn.extensionSettings.connectionManager?.profiles?.find(
          (Xe) => Xe.id === r.profileId
        );
        if (!re) throw new Error("Connection profile not found.");
        const F = {
          presetName: re?.preset,
          contextName: re?.context,
          instructName: re?.instruct,
          targetCharacterId: Ft,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Zn
        }, se = r.contextToSend.messages;
        switch (se.type) {
          case "none":
            F.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            F.messageIndexesBetween = { start: 0, end: se.first ?? 10 };
            break;
          case "last":
            const Xe = jn.chat?.length ?? 0, ht = se.last ?? 10;
            F.messageIndexesBetween = {
              end: Math.max(0, Xe - 1),
              start: Math.max(0, Xe - ht)
            };
            break;
          case "range":
            F.messageIndexesBetween = {
              start: se.range?.start ?? 0,
              end: se.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        Ft === void 0 && !Zn && (F.messageIndexesBetween = { start: -1, end: -1 });
        const he = {};
        await Promise.all(
          lv.filter((Xe) => !he[Xe]).map(async (Xe) => {
            const ht = await jn.loadWorldInfo(Xe);
            ht && (he[Xe] = U1(ht, { includeDisabled: !0 }));
          })
        );
        const K = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete K.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete K.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete K.lorebookDefinitions, r.contextToSend.existingFields || delete K.existingFieldDefinitions, r.contextToSend.persona || delete K.personaDescription, delete K.worldInfoCharDefinition;
        const ce = r.mainContextTemplatePresets[r.mainContextTemplatePreset] ?? r.mainContextTemplatePresets.default;
        if (!ce) throw new Error("Main context template preset not found.");
        const _e = await eC({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset]?.content ?? "",
          buildPromptOptions: F,
          continueFrom: ie,
          session: i,
          allCharacters: b,
          entriesGroupByWorldName: he,
          promptSettings: K,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`]?.content ?? "" },
          mainContextList: ce.prompts.filter((Xe) => Xe.enabled),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: U,
          outputFormat: r.outputFormat
        }), ve = U.startsWith("alternate_greetings_"), He = !ve && !er.includes(U);
        if (ve) {
          const Xe = parseInt(U.split("_")[2]) - 1;
          V[Xe] && Q(V.map((ht, nt) => nt === Xe ? { ...ht, value: _e } : ht));
        } else
          P(U, _e, "value", He);
      } catch (re) {
        console.error(re), be("error", re.message || String(re));
      } finally {
        u((re) => re.filter((F) => F !== U));
      }
    },
    [i, r, b, V, P, Q]
  ), R = Y.useCallback(async () => {
    await jn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(wd()), N(null));
  }, []), ee = Y.useCallback(
    (U) => {
      if (!C) return be("warning", "Please load a character to compare against.");
      let ie, re, F;
      typeof U == "number" ? (ie = V[U]?.value ?? "", re = C.data?.alternate_greetings?.[U] ?? "", F = `Alternate_Greeting_${U + 1}`) : (ie = i.fields[U]?.value ?? "", re = C[U] ?? C.data?.[U] ?? "", F = Er[U]), D({ original: re, current: ie, fieldName: F });
    },
    [C, i.fields, V]
  ), oe = Y.useCallback(
    async (U) => {
      const ie = b[parseInt(U)];
      if (!ie || er.some((he) => i.fields[he].value.trim() !== "") && !await jn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const F = { ...i.fields };
      er.forEach((he) => {
        F[he] = { value: ie[he] ?? ie.data?.[he] ?? "", prompt: "", label: Er[he] };
      });
      const se = (ie.data?.alternate_greetings ?? []).map((he) => ({ value: he, prompt: "" }));
      N(ie), s((he) => ({ ...he, fields: F, lastLoadedCharacterId: ie.avatar })), Q(se);
    },
    [b, i.fields, Q]
  ), ue = Y.useCallback(async () => {
    if (Zn) {
      be("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (Ft === void 0) {
      be("warning", "No character chat is currently open.");
      return;
    }
    await oe(String(Ft));
  }, [oe]), le = () => V.map((U) => U.value).filter((U) => U.trim() !== ""), ze = async () => {
    if (!i.fields.name.value) return be("warning", "Please provide a character name.");
    if (!await jn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const ie = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: le(),
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
      await I2(ie, !0);
    } catch (re) {
      be("error", `Failed to create character: ${re.message}`);
    }
  }, $ = async () => {
    if (!C) return be("warning", "Please load a character to override.");
    if (!await jn.Popup.show.confirm(
      "Override Character",
      `Override "${C.name}"? This cannot be undone.`
    )) return;
    const ie = {
      ...C,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        ...C.data,
        alternate_greetings: le(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await B2(ie, !0), be("success", `Character "${ie.name}" updated!`);
    } catch (re) {
      be("error", `Failed to override character: ${re.message}`);
    }
  }, Ce = () => {
    const U = JSON.stringify({ draftFields: i.draftFields, version: i1 }, null, 2), ie = new Blob([U], { type: "application/json" }), re = document.createElement("a");
    re.href = URL.createObjectURL(ie), re.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, re.click(), URL.revokeObjectURL(re.href);
  }, xe = () => {
    const U = document.createElement("input");
    U.type = "file", U.accept = ".json", U.onchange = async () => {
      const ie = U.files?.[0];
      if (ie)
        try {
          const re = await ie.text(), F = JSON.parse(re);
          if (!F.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await jn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((he) => ({ ...he, draftFields: F.draftFields })), be("success", "Draft fields imported."));
        } catch (re) {
          be("error", `Import failed: ${re.message}`);
        }
    }, U.click();
  }, Fe = Y.useMemo(
    () => b.map((U, ie) => ({ value: String(ie), label: U.name })),
    [b]
  ), Je = Y.useMemo(
    () => d.map((U) => ({ value: U, label: U })),
    [d]
  ), Re = Y.useMemo(
    () => bN(d, i.selectedWorldNames),
    [d, i.selectedWorldNames]
  ), st = Y.useMemo(
    () => Object.keys(r.promptPresets).map((U) => ({ value: U, label: U })),
    [r.promptPresets]
  ), It = Y.useMemo(
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
            o1,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (U) => I("profileId", U?.id ?? "")
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
                  onChange: (U) => X("stDescription", U.target.checked)
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
                  onChange: (U) => X("persona", U.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (Ft !== void 0 || Zn) && /* @__PURE__ */ S.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ S.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ S.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (U) => X("messages", {
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
                    onChange: (U) => X("messages", {
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
                    onChange: (U) => X("messages", {
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
                    onChange: (U) => X("messages", {
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
                    onChange: (U) => X("messages", {
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
                  onChange: (U) => X("charCard", U.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ S.jsx(
              ru,
              {
                items: Fe,
                value: i.selectedCharacterIndexes,
                onChange: (U) => s((ie) => ({ ...ie, selectedCharacterIndexes: U })),
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
                  onChange: (U) => X("worldInfo", U.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ S.jsx(
              ru,
              {
                items: Re,
                value: i.selectedWorldNames,
                onChange: (U) => s((ie) => ({ ...ie, selectedWorldNames: U })),
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
                  onChange: (U) => X("existingFields", U.target.checked)
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
                  onChange: (U) => X("dontSendOtherGreetings", U.target.checked)
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
              Au,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: It,
                value: r.mainContextTemplatePreset,
                onChange: (U) => I("mainContextTemplatePreset", U ?? "default")
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
                onChange: (U) => I("maxContextType", U.target.value),
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
              onChange: (U) => I("maxContextValue", parseInt(U.target.value) || 16384)
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
                onChange: (U) => I("maxResponseToken", parseInt(U.target.value) || 1024)
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
                onChange: (U) => I("thinkingLevel", U.target.value),
                children: tC.map((U) => /* @__PURE__ */ S.jsx("option", { value: U.value, children: U.label }, U.value))
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
                onChange: (U) => I("outputFormat", U.target.value),
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
            Au,
            {
              label: "Prompt Preset",
              items: st,
              value: r.promptPreset,
              onChange: (U) => I("promptPreset", U ?? "default"),
              onItemsChange: (U) => I(
                "promptPresets",
                U.reduce(
                  (ie, re) => ({ ...ie, [re.value]: r.promptPresets[re.value] ?? { content: "" } }),
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
            Kt,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (U) => I("promptPresets", {
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
              ru,
              {
                items: Fe,
                value: C ? [String(b.indexOf(C))] : [],
                onChange: (U) => oe(U[0]),
                multiple: !1,
                enableSearch: !0,
                placeholder: "Load Character..."
              }
            ) }),
            /* @__PURE__ */ S.jsxs(
              pe,
              {
                onClick: ue,
                disabled: !!Zn || Ft === void 0,
                title: "Load the character from the currently open chat",
                children: [
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-user" }),
                  " Load Current"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "toolbar-group", children: [
            /* @__PURE__ */ S.jsxs(pe, { onClick: ze, title: "Save as a new character", children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-floppy-disk" }),
              " Save New"
            ] }),
            /* @__PURE__ */ S.jsxs(pe, { onClick: $, disabled: !C, title: "Override loaded character", children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pen-to-square" }),
              " Override"
            ] }),
            r.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ S.jsx(
              ru,
              {
                items: Je,
                placeholder: "Save as WI Entry",
                closeOnSelect: !0,
                value: [],
                onChange: (U) => {
                },
                onBeforeSelection: async (U, ie) => {
                  if (!i.fields.name.value)
                    return be("warning", "Please enter a name first."), !1;
                  const re = ie[0], se = Zt.compile(r.prompts.worldInfoCharDefinition.content)({
                    character: yN(i.fields, V)
                  }), he = {
                    uid: -1,
                    key: [i.fields.name.value],
                    content: se,
                    comment: i.fields.name.value,
                    disable: !1,
                    keysecondary: []
                  };
                  try {
                    await yx({ entry: he, selectedWorldName: re, operation: "add" }), be("success", `Entry added to ${re}.`);
                  } catch (K) {
                    be("error", `Failed to add WI Entry: ${K.message}`);
                  }
                  return !1;
                }
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "toolbar-group", children: [
            /* @__PURE__ */ S.jsxs(pe, { onClick: R, title: "Clear all fields", children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-left" }),
              " Reset"
            ] }),
            /* @__PURE__ */ S.jsx(
              pe,
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
            pe,
            {
              onClick: () => m("core"),
              className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
              children: "Core Fields"
            }
          ),
          /* @__PURE__ */ S.jsx(
            pe,
            {
              onClick: () => m("draft"),
              className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
              children: "Draft Fields"
            }
          ),
          /* @__PURE__ */ S.jsx(
            pe,
            {
              onClick: () => {
                _(!0), m("brainstorm");
              },
              className: `menu_button tab-button ${h === "brainstorm" ? "active" : ""}`,
              children: "Brainstorm"
            }
          ),
          /* @__PURE__ */ S.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ S.jsxs(pe, { onClick: Se, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ S.jsx(pe, { onClick: Ce, children: "Export" }),
            /* @__PURE__ */ S.jsx(pe, { onClick: xe, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "tab-content-area", children: [
          h === "core" && /* @__PURE__ */ S.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ S.jsx("h3", { children: "Core Character Fields" }),
            er.map((U) => {
              const ie = _N[U];
              return ie ? /* @__PURE__ */ S.jsx(
                zy,
                {
                  fieldId: U,
                  label: ie.label,
                  value: i.fields[U]?.value ?? "",
                  prompt: i.fields[U]?.prompt ?? "",
                  large: ie.large,
                  rows: ie.rows,
                  promptEnabled: ie.promptEnabled,
                  isGenerating: l.includes(U),
                  onValueChange: (re, F) => P(re, F, "value", !1),
                  onPromptChange: (re, F) => P(re, F, "prompt", !1),
                  onGenerate: Te,
                  onContinue: (re) => Te(re, i.fields[re].value),
                  onClear: (re) => de(re, !1),
                  onCompare: ee,
                  onOpenReviseSessions: B
                },
                U
              ) : null;
            }),
            /* @__PURE__ */ S.jsx(
              pC,
              {
                greetings: V,
                onGreetingsChange: Q,
                isGenerating: l.some((U) => U.startsWith("alternate_greetings_")),
                onGenerate: (U) => Te(`alternate_greetings_${U + 1}`),
                onContinue: (U) => Te(`alternate_greetings_${U + 1}`, V[U].value),
                onCompare: ee
              }
            )
          ] }),
          h === "draft" && /* @__PURE__ */ S.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ S.jsx("h3", { children: "Draft Fields" }),
            Object.entries(i.draftFields).map(([U, ie]) => /* @__PURE__ */ S.jsx(
              zy,
              {
                fieldId: U,
                label: ie.label,
                value: ie.value,
                prompt: ie.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: l.includes(U),
                onValueChange: (re, F) => P(re, F, "value", !0),
                onPromptChange: (re, F) => P(re, F, "prompt", !0),
                onGenerate: Te,
                onContinue: (re) => Te(re, i.draftFields[re].value),
                onClear: (re) => de(re, !0),
                onDelete: me
              },
              U
            ))
          ] }),
          y && /* @__PURE__ */ S.jsx("div", { className: `card tab-content ${h === "brainstorm" ? "active" : ""}`, children: /* @__PURE__ */ S.jsx(
            vN,
            {
              isActive: h === "brainstorm",
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
    A && /* @__PURE__ */ S.jsx(
      Pi,
      {
        type: Sn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          kC,
          {
            originalContent: A.original,
            newContent: A.current,
            fieldName: A.fieldName
          }
        ),
        onComplete: () => D(null),
        options: { wide: !0 }
      }
    ),
    E && M && /* @__PURE__ */ S.jsx(
      Pi,
      {
        type: Sn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          lN,
          {
            target: M,
            onClose: () => T(!1),
            onApply: ge,
            initialState: { fields: i.fields, draftFields: i.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: i.selectedCharacterIndexes,
              selectedWorldNames: i.selectedWorldNames
            }
          }
        ),
        onComplete: () => T(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, xN = () => {
  const [t, r] = Y.useState(!1), i = Y.useCallback(() => r(!0), []), s = Y.useCallback(() => r(!1), []);
  return Y.useEffect(() => (window.openCharacterCreatorPopup = i, () => {
    window.openCharacterCreatorPopup === i && delete window.openCharacterCreatorPopup;
  }), [i]), t ? /* @__PURE__ */ S.jsx(
    Pi,
    {
      content: /* @__PURE__ */ S.jsx(SN, {}),
      type: Sn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, V1 = SillyTavern.getContext(), h0 = "charCreator-icon";
async function EN() {
  const t = document.querySelector("#extensions_settings");
  if (!t) {
    console.error(`[${zn}] #extensions_settings not found; settings panel not rendered.`);
    return;
  }
  const r = await V1.renderExtensionTemplateAsync(
    `third-party/${zn}`,
    "templates/settings"
  );
  t.insertAdjacentHTML("beforeend", r);
  const i = document.createElement("div"), s = document.querySelector(".charCreator_settings .inline-drawer-content");
  s && (s.prepend(i), xv.createRoot(i).render(
    /* @__PURE__ */ S.jsx(pu.StrictMode, { children: /* @__PURE__ */ S.jsx(dC, {}) })
  ));
  const l = `<div class="menu_button fa-solid fa-user-astronaut interactable ${h0}" title="Character Creator"></div>`, u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], f = document.createElement("div");
  document.body.appendChild(f), xv.createRoot(f).render(
    /* @__PURE__ */ S.jsx(pu.StrictMode, { children: /* @__PURE__ */ S.jsx(xN, {}) })
  ), u.forEach((h) => {
    if (!h || h.querySelector(`.${h0}`)) return;
    const m = document.createElement("div");
    m.innerHTML = l.trim();
    const y = m.firstChild;
    y && (h.prepend(y), y.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function CN() {
  return !!V1.ConnectionManagerRequestService;
}
CN() ? iC().then(() => EN()).catch((t) => {
  console.error(`[${zn}] Initialization failed:`, t), be("error", `[${zn}] Initialization failed: ${t?.message ?? t}`);
}) : be("error", `[${zn}] Make sure ST is updated.`);
export {
  EN as init
};
