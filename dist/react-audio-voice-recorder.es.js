(function(){"use strict";(r=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder-mic{box-sizing:content-box;cursor:pointer;height:16px;color:#000;padding:12px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{box-sizing:content-box;height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
import re, { useState as C, useCallback as M, useEffect as ne, Suspense as ae } from "react";
var D = { exports: {} }, z = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function ie() {
  if (Q) return z;
  Q = 1;
  var l = Symbol.for("react.transitional.element"), g = Symbol.for("react.fragment");
  function p(_, n, a) {
    var m = null;
    if (a !== void 0 && (m = "" + a), n.key !== void 0 && (m = "" + n.key), "key" in n) {
      a = {};
      for (var T in n)
        T !== "key" && (a[T] = n[T]);
    } else a = n;
    return n = a.ref, {
      $$typeof: l,
      type: _,
      key: m,
      ref: n !== void 0 ? n : null,
      props: a
    };
  }
  return z.Fragment = g, z.jsx = p, z.jsxs = p, z;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K;
function se() {
  return K || (K = 1, process.env.NODE_ENV !== "production" && function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === b ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case I:
          return "Profiler";
        case k:
          return "StrictMode";
        case R:
          return "Suspense";
        case h:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case P:
            return "Portal";
          case O:
            return (e.displayName || "Context") + ".Provider";
          case $:
            return (e._context.displayName || "Context") + ".Consumer";
          case f:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case j:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case S:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function g(e) {
      return "" + e;
    }
    function p(e) {
      try {
        g(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), g(e);
      }
    }
    function _(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === S)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = G.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function T(e, r) {
      function o() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function t() {
      var e = l(this.type);
      return J[e] || (J[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function i(e, r, o, s, A, E, U, F) {
      return o = E.ref, e = {
        $$typeof: d,
        type: e,
        key: r,
        props: E,
        _owner: A
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: t
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function y(e, r, o, s, A, E, U, F) {
      var c = r.children;
      if (c !== void 0)
        if (s)
          if (te(c)) {
            for (s = 0; s < c.length; s++)
              x(c[s]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(c);
      if (L.call(r, "key")) {
        c = l(e);
        var N = Object.keys(r).filter(function(oe) {
          return oe !== "key";
        });
        s = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", Z[c + s] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          c,
          N,
          c
        ), Z[c + s] = !0);
      }
      if (c = null, o !== void 0 && (p(o), c = "" + o), m(r) && (p(r.key), c = "" + r.key), "key" in r) {
        o = {};
        for (var W in r)
          W !== "key" && (o[W] = r[W]);
      } else o = r;
      return c && T(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), i(
        e,
        c,
        E,
        A,
        n(),
        o,
        U,
        F
      );
    }
    function x(e) {
      typeof e == "object" && e !== null && e.$$typeof === d && e._store && (e._store.validated = 1);
    }
    var u = re, d = Symbol.for("react.transitional.element"), P = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), O = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), b = Symbol.for("react.client.reference"), G = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, te = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    u = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var q, J = {}, H = u["react-stack-bottom-frame"].bind(
      u,
      a
    )(), X = Y(_(a)), Z = {};
    B.Fragment = w, B.jsx = function(e, r, o, s, A) {
      var E = 1e4 > G.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        o,
        !1,
        s,
        A,
        E ? Error("react-stack-top-frame") : H,
        E ? Y(_(e)) : X
      );
    }, B.jsxs = function(e, r, o, s, A) {
      var E = 1e4 > G.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        o,
        !0,
        s,
        A,
        E ? Error("react-stack-top-frame") : H,
        E ? Y(_(e)) : X
      );
    };
  }()), B;
}
var ee;
function ce() {
  return ee || (ee = 1, process.env.NODE_ENV === "production" ? D.exports = ie() : D.exports = se()), D.exports;
}
var v = ce();
const le = (l, g, p) => {
  const [_, n] = C(!1), [a, m] = C(!1), [T, t] = C(0), [i, y] = C(), [x, u] = C(), [d, P] = C(), w = M(() => {
    const f = setInterval(() => {
      t((R) => R + 1);
    }, 1e3);
    u(f);
  }, [t, u]), k = M(() => {
    x != null && clearInterval(x), u(void 0);
  }, [x, u]), I = M(() => {
    x == null && navigator.mediaDevices.getUserMedia({ audio: l ?? !0 }).then((f) => {
      n(!0);
      const R = new MediaRecorder(
        f,
        p
      );
      y(R), R.start(), w(), R.addEventListener("dataavailable", (h) => {
        P(h.data), R.stream.getTracks().forEach((j) => {
          j.stop();
        }), y(void 0);
      });
    }).catch((f) => {
      console.log(f.name, f.message, f.cause), g == null || g(f);
    });
  }, [
    x,
    n,
    y,
    w,
    P,
    g,
    p
  ]), $ = M(() => {
    i == null || i.stop(), k(), t(0), n(!1), m(!1);
  }, [
    i,
    t,
    n,
    m,
    k
  ]), O = M(() => {
    a ? (m(!1), i == null || i.resume(), w()) : (m(!0), k(), i == null || i.pause());
  }, [i, m, w, k]);
  return {
    startRecording: I,
    stopRecording: $,
    togglePauseResume: O,
    recordingBlob: d,
    isRecording: _,
    isPaused: a,
    recordingTime: T,
    mediaRecorder: i
  };
}, ue = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20470%20470'%20style='enable-background:new%200%200%20470%20470;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M235,302.296c47.177,0,85.423-38.245,85.423-85.423V85.423C320.423,38.245,282.177,0,235,0s-85.423,38.245-85.423,85.423%20v131.451C149.577,264.051,187.823,302.296,235,302.296z'/%3e%3cpath%20d='M350.423,136.148v30h15v50.726c0,71.915-58.508,130.423-130.423,130.423s-130.423-58.507-130.423-130.423v-50.726h15v-30%20h-45v80.726C74.577,300.273,138.551,369,220,376.589V440h-90.444v30h210.889v-30H250v-63.411%20c81.449-7.589,145.423-76.317,145.423-159.716v-80.726H350.423z'/%3e%3c/g%3e%3c/svg%3e", de = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2047.607%2047.607'%20style='enable-background:new%200%200%2047.607%2047.607;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0%20l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z'/%3e%3cpath%20d='M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631%20C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z'/%3e%3c/g%3e%3c/svg%3e", me = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20494.148%20494.148'%20style='enable-background:new%200%200%20494.148%20494.148;'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124%20c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884%20C432.632,229.572,422.964,213.288,405.284,201.188z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", fe = "data:image/svg+xml,%3csvg%20width='18px'%20height='18px'%20viewBox='0%200%2018%2018'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23000000'%20d='M17.85%203.15l-2.99-3A.508.508%200%200%200%2014.5%200H1.4A1.417%201.417%200%200%200%200%201.43v15.14A1.417%201.417%200%200%200%201.4%2018h15.2a1.417%201.417%200%200%200%201.4-1.43V3.5a.47.47%200%200%200-.15-.35zM2%205V3a1%201%200%200%201%201-1h8a1%201%200%200%201%201%201v2a1%201%200%200%201-1%201H3a1%201%200%200%201-1-1zm7%2011a4%204%200%201%201%204-4%204%204%200%200%201-4%204z'/%3e%3c/svg%3e", ve = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2046.734%2046.734'%20style='enable-background:new%200%200%2046.734%2046.734;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M41.346,0H5.388C2.417,0,0,2.417,0,5.388v35.958c0,2.971,2.417,5.388,5.388,5.388h35.958c2.971,0,5.388-2.417,5.388-5.388%20V5.388C46.733,2.417,44.316,0,41.346,0z'/%3e%3c/g%3e%3c/svg%3e", ge = re.lazy(async () => {
  const { LiveAudioVisualizer: l } = await import("./react-audio-visualize.es-1bgZv5o4.js");
  return { default: l };
}), we = ({
  onRecordingComplete: l,
  onNotAllowedOrFound: g,
  recorderControls: p,
  audioTrackConstraints: _,
  downloadOnSavePress: n = !1,
  downloadFileExtension: a = "webm",
  showVisualizer: m = !1,
  mediaRecorderOptions: T,
  classes: t
}) => {
  const {
    startRecording: i,
    stopRecording: y,
    togglePauseResume: x,
    recordingBlob: u,
    isRecording: d,
    isPaused: P,
    recordingTime: w,
    mediaRecorder: k
  } = p ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  le(
    _,
    g,
    T
  ), [I, $] = C(!1), O = (h = !0) => {
    $(h), y();
  }, f = async (h) => {
    const j = await import("./index-D8kRViJr.js"), S = new j.FFmpeg();
    await S.load();
    const V = "input.webm", b = `output.${a}`;
    await S.writeFile(
      V,
      new Uint8Array(await h.arrayBuffer())
    ), await S.exec(["-i", V, b]);
    const G = await S.readFile(b);
    return new Blob([G], {
      type: `audio/${a}`
    });
  }, R = async (h) => {
    !crossOriginIsolated && a !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const j = crossOriginIsolated ? await f(h) : h, S = crossOriginIsolated ? a : "webm", V = URL.createObjectURL(j), b = document.createElement("a");
    b.style.display = "none", b.href = V, b.download = `audio.${S}`, document.body.appendChild(b), b.click(), b.remove();
  };
  return ne(() => {
    (I || p) && u != null && l != null && (l(u), n && R(u));
  }, [u]), /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: `audio-recorder ${d ? "recording" : ""} ${(t == null ? void 0 : t.AudioRecorderClass) ?? ""}`,
      "data-testid": "audio_recorder",
      children: [
        /* @__PURE__ */ v.jsx(
          "img",
          {
            src: d ? fe : ue,
            className: `audio-recorder-mic ${(t == null ? void 0 : t.AudioRecorderStartSaveClass) ?? ""}`,
            onClick: d ? () => {
              O();
            } : i,
            "data-testid": "ar_mic",
            title: d ? "Save recording" : "Start recording"
          }
        ),
        /* @__PURE__ */ v.jsxs(
          "span",
          {
            className: `audio-recorder-timer ${d ? "" : "display-none"} ${(t == null ? void 0 : t.AudioRecorderTimerClass) ?? ""}`,
            "data-testid": "ar_timer",
            children: [
              Math.floor(w / 60),
              ":",
              String(w % 60).padStart(2, "0")
            ]
          }
        ),
        m ? /* @__PURE__ */ v.jsx(
          "span",
          {
            className: `audio-recorder-visualizer ${d ? "" : "display-none"}`,
            children: k && /* @__PURE__ */ v.jsx(ae, { fallback: /* @__PURE__ */ v.jsx(v.Fragment, {}), children: /* @__PURE__ */ v.jsx(
              ge,
              {
                mediaRecorder: k,
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
        ) : /* @__PURE__ */ v.jsxs(
          "span",
          {
            className: `audio-recorder-status ${d ? "" : "display-none"} ${(t == null ? void 0 : t.AudioRecorderStatusClass) ?? ""}`,
            children: [
              /* @__PURE__ */ v.jsx("span", { className: "audio-recorder-status-dot" }),
              "Recording"
            ]
          }
        ),
        /* @__PURE__ */ v.jsx(
          "img",
          {
            src: P ? me : de,
            className: `audio-recorder-options ${d ? "" : "display-none"} ${(t == null ? void 0 : t.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: x,
            title: P ? "Resume recording" : "Pause recording",
            "data-testid": "ar_pause"
          }
        ),
        /* @__PURE__ */ v.jsx(
          "img",
          {
            src: ve,
            className: `audio-recorder-options ${d ? "" : "display-none"} ${(t == null ? void 0 : t.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => {
              O(!1);
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
  we as AudioRecorder,
  le as useAudioRecorder
};
