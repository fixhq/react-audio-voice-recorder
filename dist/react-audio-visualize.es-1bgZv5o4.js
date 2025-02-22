import Pe, { useState as A, useRef as Ne, useEffect as B, useCallback as ur, forwardRef as fr, useImperativeHandle as pr } from "react";
var ae = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function yr() {
  if (xe)
    return M;
  xe = 1;
  var f = Pe, y = Symbol.for("react.element"), O = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, g = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(i, l, d) {
    var o, a = {}, h = null, j = null;
    d !== void 0 && (h = "" + d), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (j = l.ref);
    for (o in l)
      b.call(l, o) && !_.hasOwnProperty(o) && (a[o] = l[o]);
    if (i && i.defaultProps)
      for (o in l = i.defaultProps, l)
        a[o] === void 0 && (a[o] = l[o]);
    return { $$typeof: y, type: i, key: h, ref: j, props: a, _owner: g.current };
  }
  return M.Fragment = O, M.jsx = S, M.jsxs = S, M;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function dr() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var f = Pe, y = Symbol.for("react.element"), O = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), x = Symbol.iterator, R = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = x && e[x] || e[R];
      return typeof r == "function" ? r : null;
    }
    var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        E("error", e, t);
      }
    }
    function E(e, r, t) {
      {
        var n = m.ReactDebugCurrentFrame, p = n.getStackAddendum();
        p !== "" && (r += "%s", t = t.concat([p]));
        var v = t.map(function(c) {
          return String(c);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var D = !1, P = !1, W = !1, Ie = !1, Te = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === _ || Te || e === g || e === d || e === o || Ie || e === j || D || P || W || typeof e == "object" && e !== null && (e.$$typeof === h || e.$$typeof === a || e.$$typeof === S || e.$$typeof === i || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var p = r.displayName || r.name || "";
      return p !== "" ? t + "(" + p + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case O:
          return "Portal";
        case _:
          return "Profiler";
        case g:
          return "StrictMode";
        case d:
          return "Suspense";
        case o:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return ie(r) + ".Consumer";
          case S:
            var t = e;
            return ie(t._context) + ".Provider";
          case l:
            return ze(e, e.render, "ForwardRef");
          case a:
            var n = e.displayName || null;
            return n !== null ? n : I(e.type) || "Memo";
          case h: {
            var p = e, v = p._payload, c = p._init;
            try {
              return I(c(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, U = 0, se, le, ce, ue, fe, pe, ye;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function We() {
      {
        if (U === 0) {
          se = console.log, le = console.info, ce = console.warn, ue = console.error, fe = console.group, pe = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        U++;
      }
    }
    function Ue() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: se
            }),
            info: T({}, e, {
              value: le
            }),
            warn: T({}, e, {
              value: ce
            }),
            error: T({}, e, {
              value: ue
            }),
            group: T({}, e, {
              value: fe
            }),
            groupCollapsed: T({}, e, {
              value: pe
            }),
            groupEnd: T({}, e, {
              value: ye
            })
          });
        }
        U < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = m.ReactCurrentDispatcher, K;
    function V(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (p) {
            var n = p.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var Q = !1, Y;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Me();
    }
    function ve(e, r) {
      if (!e || Q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = G.current, G.current = null, We();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (F) {
              n = F;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (F) {
              n = F;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            n = F;
          }
          e();
        }
      } catch (F) {
        if (F && n && typeof F.stack == "string") {
          for (var s = F.stack.split(`
`), C = n.stack.split(`
`), w = s.length - 1, k = C.length - 1; w >= 1 && k >= 0 && s[w] !== C[k]; )
            k--;
          for (; w >= 1 && k >= 0; w--, k--)
            if (s[w] !== C[k]) {
              if (w !== 1 || k !== 1)
                do
                  if (w--, k--, k < 0 || s[w] !== C[k]) {
                    var $ = `
` + s[w].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, $), $;
                  }
                while (w >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        Q = !1, G.current = v, Ue(), Error.prepareStackTrace = p;
      }
      var z = e ? e.displayName || e.name : "", De = z ? V(z) : "";
      return typeof e == "function" && Y.set(e, De), De;
    }
    function Ae(e, r, t) {
      return ve(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Be(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case d:
          return V("Suspense");
        case o:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ae(e.render);
          case a:
            return q(e.type, r, t);
          case h: {
            var n = e, p = n._payload, v = n._init;
            try {
              return q(v(p), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, me = {}, ge = m.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, p) {
      {
        var v = Function.call.bind(H);
        for (var c in e)
          if (v(e, c)) {
            var s = void 0;
            try {
              if (typeof e[c] != "function") {
                var C = Error((n || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              s = e[c](r, c, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              s = w;
            }
            s && !(s instanceof Error) && (J(p), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, c, typeof s), J(null)), s instanceof Error && !(s.message in me) && (me[s.message] = !0, J(p), u("Failed %s type: %s", t, s.message), J(null));
          }
      }
    }
    var Ye = Array.isArray;
    function Z(e) {
      return Ye(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function be(e) {
      if (He(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), he(e);
    }
    var _e = m.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Se;
    function Xe(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      typeof e.ref == "string" && _e.current;
    }
    function Qe(e, r) {
      {
        var t = function() {
          we || (we = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Se || (Se = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, p, v, c) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function rr(e, r, t, n, p) {
      {
        var v, c = {}, s = null, C = null;
        t !== void 0 && (be(t), s = "" + t), Ge(r) && (be(r.key), s = "" + r.key), Xe(r) && (C = r.ref, Ke(r, p));
        for (v in r)
          H.call(r, v) && !Je.hasOwnProperty(v) && (c[v] = r[v]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (v in w)
            c[v] === void 0 && (c[v] = w[v]);
        }
        if (s || C) {
          var k = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && Qe(c, k), C && Ze(c, k);
        }
        return er(e, s, C, p, n, _e.current, c);
      }
    }
    var ee = m.ReactCurrentOwner, ke = m.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function Re() {
      {
        if (ee.current) {
          var e = I(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var Oe = {};
    function nr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + I(e._owner.type) + "."), L(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), L(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && je(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = N(e);
          if (typeof p == "function" && p !== e.entries)
            for (var v = p.call(e), c; !(c = v.next()).done; )
              te(c.value) && je(c.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === a))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = I(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var p = I(r);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            L(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Ce(e, r, t, n, p, v) {
      {
        var c = Le(e);
        if (!c) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = tr();
          C ? s += C : s += Re();
          var w;
          e === null ? w = "null" : Z(e) ? w = "array" : e !== void 0 && e.$$typeof === y ? (w = "<" + (I(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, s);
        }
        var k = rr(e, r, t, p, v);
        if (k == null)
          return k;
        if (c) {
          var $ = r.children;
          if ($ !== void 0)
            if (n)
              if (Z($)) {
                for (var z = 0; z < $.length; z++)
                  Ee($[z], e);
                Object.freeze && Object.freeze($);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee($, e);
        }
        return e === b ? or(k) : ar(k), k;
      }
    }
    function ir(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var lr = sr, cr = ir;
    X.Fragment = b, X.jsx = lr, X.jsxs = cr;
  }()), X;
}
process.env.NODE_ENV === "production" ? ae.exports = yr() : ae.exports = dr();
var Fe = ae.exports;
const vr = (f, y, O, b) => {
  let g = y / (O + b), _ = Math.floor(f.length / g);
  g > f.length && (g = f.length, _ = 1);
  const S = [];
  for (let i = 0; i < g; i++) {
    let l = 0;
    for (let d = 0; d < _ && i * _ + d < f.length; d++)
      l += f[i * _ + d];
    S.push(l / _);
  }
  return S;
}, mr = (f, y, O, b, g, _) => {
  const S = y.height / 2, i = y.getContext("2d");
  i && (i.clearRect(0, 0, y.width, y.height), g !== "transparent" && (i.fillStyle = g, i.fillRect(0, 0, y.width, y.height)), f.forEach((l, d) => {
    i.fillStyle = _;
    const o = d * (O + b), a = S - l / 2, h = O, j = l || 1;
    i.beginPath(), i.roundRect ? (i.roundRect(o, a, h, j, 50), i.fill()) : i.fillRect(o, a, h, j);
  }));
}, _r = ({
  mediaRecorder: f,
  width: y = "100%",
  height: O = "100%",
  barWidth: b = 2,
  gap: g = 1,
  backgroundColor: _ = "transparent",
  barColor: S = "rgb(160, 198, 255)",
  fftSize: i = 1024,
  maxDecibels: l = -10,
  minDecibels: d = -90,
  smoothingTimeConstant: o = 0.4
}) => {
  const [a, h] = A(), [j, x] = A(), [R, N] = A(), m = Ne(null);
  B(() => {
    if (!f.stream)
      return;
    const D = new AudioContext(), P = D.createAnalyser();
    N(P), P.fftSize = i, P.minDecibels = d, P.maxDecibels = l, P.smoothingTimeConstant = o;
    const W = D.createMediaStreamSource(f.stream);
    return W.connect(P), h(D), x(W), () => {
      W.disconnect(), P.disconnect(), D.state !== "closed" && D.close();
    };
  }, [f.stream]), B(() => {
    R && f.state === "recording" && u();
  }, [R, f.state]);
  const u = ur(() => {
    if (!R || !a)
      return;
    const D = new Uint8Array(R == null ? void 0 : R.frequencyBinCount);
    f.state === "recording" ? (R == null || R.getByteFrequencyData(D), E(D), requestAnimationFrame(u)) : f.state === "paused" ? E(D) : f.state === "inactive" && a.state !== "closed" && a.close();
  }, [R, a == null ? void 0 : a.state]);
  B(() => () => {
    a && a.state !== "closed" && a.close(), j == null || j.disconnect(), R == null || R.disconnect();
  }, []);
  const E = (D) => {
    if (!m.current)
      return;
    const P = vr(
      D,
      m.current.width,
      b,
      g
    );
    mr(
      P,
      m.current,
      b,
      g,
      _,
      S
    );
  };
  return /* @__PURE__ */ Fe.jsx(
    "canvas",
    {
      ref: m,
      width: y,
      height: O,
      style: {
        aspectRatio: "unset"
      }
    }
  );
}, gr = (f, y, O, b, g) => {
  const _ = f.getChannelData(0), S = O / (b + g), i = Math.floor(_.length / S), l = y / 2;
  let d = [], o = 0;
  for (let a = 0; a < S; a++) {
    const h = [];
    let j = 0;
    const x = [];
    let R = 0;
    for (let u = 0; u < i && a * i + u < f.length; u++) {
      const E = _[a * i + u];
      E <= 0 && (h.push(E), j++), E > 0 && (x.push(E), R++);
    }
    const N = h.reduce((u, E) => u + E, 0) / j, m = { max: x.reduce((u, E) => u + E, 0) / R, min: N };
    m.max > o && (o = m.max), Math.abs(m.min) > o && (o = Math.abs(m.min)), d.push(m);
  }
  if (l * 0.8 > o * l) {
    const a = l * 0.8 / o;
    d = d.map((h) => ({
      max: h.max * a,
      min: h.min * a
    }));
  }
  return d;
}, ne = (f, y, O, b, g, _, S, i = 0, l = 1) => {
  const d = y.height / 2, o = y.getContext("2d");
  if (!o)
    return;
  o.clearRect(0, 0, y.width, y.height), g !== "transparent" && (o.fillStyle = g, o.fillRect(0, 0, y.width, y.height));
  const a = (i || 0) / l;
  f.forEach((h, j) => {
    const x = j / f.length, R = a > x;
    o.fillStyle = R && S ? S : _;
    const N = j * (O + b), m = d + h.min, u = O, E = d + h.max - m;
    o.beginPath(), o.roundRect ? (o.roundRect(N, m, u, E, 50), o.fill()) : o.fillRect(N, m, u, E);
  });
}, hr = fr(
  ({
    blob: f,
    width: y,
    height: O,
    barWidth: b = 2,
    gap: g = 1,
    currentTime: _,
    style: S,
    backgroundColor: i = "transparent",
    barColor: l = "rgb(184, 184, 184)",
    barPlayedColor: d = "rgb(160, 198, 255)"
  }, o) => {
    const a = Ne(null), [h, j] = A([]), [x, R] = A(0);
    return pr(
      o,
      () => a.current,
      []
    ), B(() => {
      (async () => {
        if (!a.current)
          return;
        if (!f) {
          const m = Array.from({ length: 100 }, () => ({
            max: 0,
            min: 0
          }));
          ne(
            m,
            a.current,
            b,
            g,
            i,
            l,
            d
          );
          return;
        }
        const N = await f.arrayBuffer();
        await new AudioContext().decodeAudioData(N, (m) => {
          if (!a.current)
            return;
          R(m.duration);
          const u = gr(
            m,
            O,
            y,
            b,
            g
          );
          j(u), ne(
            u,
            a.current,
            b,
            g,
            i,
            l,
            d
          );
        });
      })();
    }, [f, a.current]), B(() => {
      a.current && ne(
        h,
        a.current,
        b,
        g,
        i,
        l,
        d,
        _,
        x
      );
    }, [_, x]), /* @__PURE__ */ Fe.jsx(
      "canvas",
      {
        ref: a,
        width: y,
        height: O,
        style: {
          ...S
        }
      }
    );
  }
);
hr.displayName = "AudioVisualizer";
export {
  hr as AudioVisualizer,
  _r as LiveAudioVisualizer
};
