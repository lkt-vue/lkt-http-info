var a = Object.defineProperty;
var c = (t, e, s) => e in t ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var o = (t, e, s) => (c(t, typeof e != "symbol" ? e + "" : e, s), s);
import { defineComponent as f, computed as i, openBlock as p, createElementBlock as d, createElementVNode as r, toDisplayString as l } from "vue";
class n {
}
o(n, "customTitles", {
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error"
}), o(n, "customMessages", {});
const k = (t, e, s) => {
  n.customTitles[t] = e, n.customMessages[t] = s;
}, m = (t) => typeof n.customTitles[t] < "u" ? n.customTitles[t] : "", g = (t) => typeof n.customMessages[t] < "u" ? n.customMessages[t] : "", v = { name: "LktHttpInfo", inheritAttrs: !1 }, y = /* @__PURE__ */ f({
  ...v,
  props: {
    code: { type: String, required: !0 },
    title: { type: String, required: !1 },
    message: { type: String, required: !1 }
  },
  setup(t) {
    const e = t, s = i(() => e.title !== "" ? e.title : m(e.code)), u = i(() => e.message !== "" ? e.message : g(e.code));
    return (I, M) => (p(), d("div", null, [
      r("div", null, [
        r("div", null, l(t.code), 1),
        r("div", null, l(s.value), 1)
      ]),
      r("div", null, l(u.value), 1)
    ]));
  }
}), H = {
  install: (t, e = {}) => {
    t.component("lkt-http-info", y);
  }
};
export {
  H as default,
  k as setDefaultHttpInfo
};
