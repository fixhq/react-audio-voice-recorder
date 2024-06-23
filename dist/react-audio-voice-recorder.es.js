(function(){"use strict";(r=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder-mic{box-sizing:content-box;cursor:pointer;height:16px;color:#000;padding:12px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{box-sizing:content-box;height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
import ge, { useState as Y, useCallback as K, useEffect as vr, Suspense as pr } from "react";
var pe = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function gr() {
  if (Me) return X;
  Me = 1;
  var P = ge, w = Symbol.for("react.element"), D = Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, S = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(T, a, c) {
    var v, p = {}, g = null, m = null;
    c !== void 0 && (g = "" + c), a.key !== void 0 && (g = "" + a.key), a.ref !== void 0 && (m = a.ref);
    for (v in a) k.call(a, v) && !R.hasOwnProperty(v) && (p[v] = a[v]);
    if (T && T.defaultProps) for (v in a = T.defaultProps, a) p[v] === void 0 && (p[v] = a[v]);
    return { $$typeof: w, type: T, key: g, ref: m, props: p, _owner: S.current };
  }
  return X.Fragment = D, X.jsx = y, X.jsxs = y, X;
}
var Z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function mr() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var P = ge, w = Symbol.for("react.element"), D = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), T = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), F = Symbol.iterator, I = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = F && e[F] || e[I];
      return typeof r == "function" ? r : null;
    }
    var j = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        z("error", e, t);
      }
    }
    function z(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var x = !1, O = !1, A = !1, B = !1, M = !1, L;
    L = Symbol.for("react.module.reference");
    function C(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === k || e === R || M || e === S || e === c || e === v || B || e === m || x || O || A || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === p || e.$$typeof === y || e.$$typeof === T || e.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function V(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case k:
          return "Fragment";
        case D:
          return "Portal";
        case R:
          return "Profiler";
        case S:
          return "StrictMode";
        case c:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ae(r) + ".Consumer";
          case y:
            var t = e;
            return ae(t._context) + ".Provider";
          case a:
            return ne(e, e.render, "ForwardRef");
          case p:
            var n = e.displayName || null;
            return n !== null ? n : V(e.type) || "Memo";
          case g: {
            var s = e, u = s._payload, o = s._init;
            try {
              return V(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, q = 0, me, he, be, ye, we, Re, xe;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function Le() {
      {
        if (q === 0) {
          me = console.log, he = console.info, be = console.warn, ye = console.error, we = console.group, Re = console.groupCollapsed, xe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        q++;
      }
    }
    function We() {
      {
        if (q--, q === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: me
            }),
            info: W({}, e, {
              value: he
            }),
            warn: W({}, e, {
              value: be
            }),
            error: W({}, e, {
              value: ye
            }),
            group: W({}, e, {
              value: we
            }),
            groupCollapsed: W({}, e, {
              value: Re
            }),
            groupEnd: W({}, e, {
              value: xe
            })
          });
        }
        q < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = j.ReactCurrentDispatcher, oe;
    function Q(e, r, t) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            oe = n && n[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var se = !1, ee;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new Ge();
    }
    function Ee(e, r) {
      if (!e || se)
        return "";
      {
        var t = ee.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      se = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = ie.current, ie.current = null, Le();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (b) {
              n = b;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var i = b.stack.split(`
`), h = n.stack.split(`
`), l = i.length - 1, d = h.length - 1; l >= 1 && d >= 0 && i[l] !== h[d]; )
            d--;
          for (; l >= 1 && d >= 0; l--, d--)
            if (i[l] !== h[d]) {
              if (l !== 1 || d !== 1)
                do
                  if (l--, d--, d < 0 || i[l] !== h[d]) {
                    var _ = `
` + i[l].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && ee.set(e, _), _;
                  }
                while (l >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        se = !1, ie.current = u, We(), Error.prepareStackTrace = s;
      }
      var N = e ? e.displayName || e.name : "", G = N ? Q(N) : "";
      return typeof e == "function" && ee.set(e, G), G;
    }
    function Ye(e, r, t) {
      return Ee(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function re(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, ze(e));
      if (typeof e == "string")
        return Q(e);
      switch (e) {
        case c:
          return Q("Suspense");
        case v:
          return Q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            return Ye(e.render);
          case p:
            return re(e.type, r, t);
          case g: {
            var n = e, s = n._payload, u = n._init;
            try {
              return re(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Se = {}, Te = j.ReactDebugCurrentFrame;
    function te(e) {
      if (e) {
        var r = e._owner, t = re(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, s) {
      {
        var u = Function.call.bind(J);
        for (var o in e)
          if (u(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              i = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              i = l;
            }
            i && !(i instanceof Error) && (te(s), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof i), te(null)), i instanceof Error && !(i.message in Se) && (Se[i.message] = !0, te(s), f("Failed %s type: %s", t, i.message), te(null));
          }
      }
    }
    var Ne = Array.isArray;
    function ue(e) {
      return Ne(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function Pe(e) {
      if (Je(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), Ce(e);
    }
    var H = j.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ke, je, ce;
    ce = {};
    function Ke(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && H.current && r && H.current.stateNode !== r) {
        var t = V(H.current.type);
        ce[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(H.current.type), e.ref), ce[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ke || (ke = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          je || (je = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, s, u, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function tr(e, r, t, n, s) {
      {
        var u, o = {}, i = null, h = null;
        t !== void 0 && (Pe(t), i = "" + t), Xe(r) && (Pe(r.key), i = "" + r.key), Ke(r) && (h = r.ref, Ze(r, s));
        for (u in r)
          J.call(r, u) && !He.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            o[u] === void 0 && (o[u] = l[u]);
        }
        if (i || h) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && Qe(o, d), h && er(o, d);
        }
        return rr(e, i, h, s, n, H.current, o);
      }
    }
    var le = j.ReactCurrentOwner, Oe = j.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = re(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    function Ae() {
      {
        if (le.current) {
          var e = V(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var Ve = {};
    function ar(e) {
      {
        var r = Ae();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function De(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Ve[t])
          return;
        Ve[t] = !0;
        var n = "";
        e && e._owner && e._owner !== le.current && (n = " It was passed a child from " + V(e._owner.type) + "."), U(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), U(null);
      }
    }
    function Ie(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            de(n) && De(n, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = $(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), o; !(o = u.next()).done; )
              de(o.value) && De(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === p))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = V(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !fe) {
          fe = !0;
          var s = V(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            U(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    var $e = {};
    function Fe(e, r, t, n, s, u) {
      {
        var o = C(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = nr();
          h ? i += h : i += Ae();
          var l;
          e === null ? l = "null" : ue(e) ? l = "array" : e !== void 0 && e.$$typeof === w ? (l = "<" + (V(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var d = tr(e, r, t, s, u);
        if (d == null)
          return d;
        if (o) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (ue(_)) {
                for (var N = 0; N < _.length; N++)
                  Ie(_[N], e);
                Object.freeze && Object.freeze(_);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(_, e);
        }
        if (J.call(r, "key")) {
          var G = V(e), b = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), ve = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[G + ve]) {
            var fr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ve, G, fr, G), $e[G + ve] = !0;
          }
        }
        return e === k ? or(d) : ir(d), d;
      }
    }
    function sr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var cr = ur, lr = sr;
    Z.Fragment = k, Z.jsx = cr, Z.jsxs = lr;
  }()), Z;
}
process.env.NODE_ENV === "production" ? pe.exports = gr() : pe.exports = mr();
var E = pe.exports;
const hr = (P, w, D) => {
  const [k, S] = Y(!1), [R, y] = Y(!1), [T, a] = Y(0), [c, v] = Y(), [p, g] = Y(), [m, F] = Y(), I = K(() => {
    const x = setInterval(() => {
      a((O) => O + 1);
    }, 1e3);
    g(x);
  }, [a, g]), $ = K(() => {
    p != null && clearInterval(p), g(void 0);
  }, [p, g]), j = K(() => {
    p == null && navigator.mediaDevices.getUserMedia({ audio: P ?? !0 }).then((x) => {
      S(!0);
      const O = new MediaRecorder(
        x,
        D
      );
      v(O), O.start(), I(), O.addEventListener("dataavailable", (A) => {
        F(A.data), O.stream.getTracks().forEach((B) => {
          B.stop();
        }), v(void 0);
      });
    }).catch((x) => {
      console.log(x.name, x.message, x.cause), w == null || w(x);
    });
  }, [
    p,
    S,
    v,
    I,
    F,
    w,
    D
  ]), f = K(() => {
    c == null || c.stop(), $(), a(0), S(!1), y(!1);
  }, [
    c,
    a,
    S,
    y,
    $
  ]), z = K(() => {
    R ? (y(!1), c == null || c.resume(), I()) : (y(!0), $(), c == null || c.pause());
  }, [c, y, I, $]);
  return {
    startRecording: j,
    stopRecording: f,
    togglePauseResume: z,
    recordingBlob: m,
    isRecording: k,
    isPaused: R,
    recordingTime: T,
    mediaRecorder: c
  };
}, br = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20470%20470'%20style='enable-background:new%200%200%20470%20470;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M235,302.296c47.177,0,85.423-38.245,85.423-85.423V85.423C320.423,38.245,282.177,0,235,0s-85.423,38.245-85.423,85.423%20v131.451C149.577,264.051,187.823,302.296,235,302.296z'/%3e%3cpath%20d='M350.423,136.148v30h15v50.726c0,71.915-58.508,130.423-130.423,130.423s-130.423-58.507-130.423-130.423v-50.726h15v-30%20h-45v80.726C74.577,300.273,138.551,369,220,376.589V440h-90.444v30h210.889v-30H250v-63.411%20c81.449-7.589,145.423-76.317,145.423-159.716v-80.726H350.423z'/%3e%3c/g%3e%3c/svg%3e", yr = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2047.607%2047.607'%20style='enable-background:new%200%200%2047.607%2047.607;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0%20l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z'/%3e%3cpath%20d='M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631%20C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z'/%3e%3c/g%3e%3c/svg%3e", wr = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20494.148%20494.148'%20style='enable-background:new%200%200%20494.148%20494.148;'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124%20c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884%20C432.632,229.572,422.964,213.288,405.284,201.188z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Rr = "data:image/svg+xml,%3csvg%20width='18px'%20height='18px'%20viewBox='0%200%2018%2018'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23000000'%20d='M17.85%203.15l-2.99-3A.508.508%200%200%200%2014.5%200H1.4A1.417%201.417%200%200%200%200%201.43v15.14A1.417%201.417%200%200%200%201.4%2018h15.2a1.417%201.417%200%200%200%201.4-1.43V3.5a.47.47%200%200%200-.15-.35zM2%205V3a1%201%200%200%201%201-1h8a1%201%200%200%201%201%201v2a1%201%200%200%201-1%201H3a1%201%200%200%201-1-1zm7%2011a4%204%200%201%201%204-4%204%204%200%200%201-4%204z'/%3e%3c/svg%3e", xr = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2046.734%2046.734'%20style='enable-background:new%200%200%2046.734%2046.734;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M41.346,0H5.388C2.417,0,0,2.417,0,5.388v35.958c0,2.971,2.417,5.388,5.388,5.388h35.958c2.971,0,5.388-2.417,5.388-5.388%20V5.388C46.733,2.417,44.316,0,41.346,0z'/%3e%3c/g%3e%3c/svg%3e", _r = ge.lazy(async () => {
  const { LiveAudioVisualizer: P } = await import("./react-audio-visualize.es-PZvQhH_4.js");
  return { default: P };
}), Sr = ({
  onRecordingComplete: P,
  onNotAllowedOrFound: w,
  recorderControls: D,
  audioTrackConstraints: k,
  downloadOnSavePress: S = !1,
  downloadFileExtension: R = "webm",
  showVisualizer: y = !1,
  mediaRecorderOptions: T,
  classes: a
}) => {
  const {
    startRecording: c,
    stopRecording: v,
    togglePauseResume: p,
    recordingBlob: g,
    isRecording: m,
    isPaused: F,
    recordingTime: I,
    mediaRecorder: $
  } = D ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  hr(
    k,
    w,
    T
  ), [j, f] = Y(!1), z = (A = !0) => {
    f(A), v();
  }, x = async (A) => {
    const B = await import("./index-CGLxPaxW.js"), M = new B.FFmpeg();
    await M.load();
    const L = "input.webm", C = `output.${R}`;
    await M.writeFile(
      L,
      new Uint8Array(await A.arrayBuffer())
    ), await M.exec(["-i", L, C]);
    const ne = await M.readFile(C);
    return new Blob([ne], {
      type: `audio/${R}`
    });
  }, O = async (A) => {
    !crossOriginIsolated && R !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const B = crossOriginIsolated ? await x(A) : A, M = crossOriginIsolated ? R : "webm", L = URL.createObjectURL(B), C = document.createElement("a");
    C.style.display = "none", C.href = L, C.download = `audio.${M}`, document.body.appendChild(C), C.click(), C.remove();
  };
  return vr(() => {
    (j || D) && g != null && P != null && (P(g), S && O(g));
  }, [g]), /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: `audio-recorder ${m ? "recording" : ""} ${(a == null ? void 0 : a.AudioRecorderClass) ?? ""}`,
      "data-testid": "audio_recorder",
      children: [
        /* @__PURE__ */ E.jsx(
          "img",
          {
            src: m ? Rr : br,
            className: `audio-recorder-mic ${(a == null ? void 0 : a.AudioRecorderStartSaveClass) ?? ""}`,
            onClick: m ? () => {
              z();
            } : c,
            "data-testid": "ar_mic",
            title: m ? "Save recording" : "Start recording"
          }
        ),
        /* @__PURE__ */ E.jsxs(
          "span",
          {
            className: `audio-recorder-timer ${m ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderTimerClass) ?? ""}`,
            "data-testid": "ar_timer",
            children: [
              Math.floor(I / 60),
              ":",
              String(I % 60).padStart(2, "0")
            ]
          }
        ),
        y ? /* @__PURE__ */ E.jsx(
          "span",
          {
            className: `audio-recorder-visualizer ${m ? "" : "display-none"}`,
            children: $ && /* @__PURE__ */ E.jsx(pr, { fallback: /* @__PURE__ */ E.jsx(E.Fragment, {}), children: /* @__PURE__ */ E.jsx(
              _r,
              {
                mediaRecorder: $,
                barWidth: 2,
                gap: 2,
                width: 140,
                height: 30,
                fftSize: 512,
                maxDecibels: -10,
                minDecibels: -80,
                smoothingTimeConstant: 0.4
              }
            ) })
          }
        ) : /* @__PURE__ */ E.jsxs(
          "span",
          {
            className: `audio-recorder-status ${m ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderStatusClass) ?? ""}`,
            children: [
              /* @__PURE__ */ E.jsx("span", { className: "audio-recorder-status-dot" }),
              "Recording"
            ]
          }
        ),
        /* @__PURE__ */ E.jsx(
          "img",
          {
            src: F ? wr : yr,
            className: `audio-recorder-options ${m ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: p,
            title: F ? "Resume recording" : "Pause recording",
            "data-testid": "ar_pause"
          }
        ),
        /* @__PURE__ */ E.jsx(
          "img",
          {
            src: xr,
            className: `audio-recorder-options ${m ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => {
              z(!1);
            },
            title: "Discard Recording",
            "data-testid": "ar_cancel"
          }
        )
      ]
    }
  );
};
export {
  Sr as AudioRecorder,
  hr as useAudioRecorder
};
