var _ = Object.defineProperty;
var v = (t, s, e) => s in t ? _(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var a = (t, s, e) => (v(t, typeof s != "symbol" ? s + "" : s, e), e);
import { defineComponent as I, computed as c, openBlock as u, createElementBlock as r, normalizeClass as p, createElementVNode as o, createCommentVNode as m, toDisplayString as f } from "vue";
class n {
}
a(n, "customTitles", {
  200: "Success",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error"
}), a(n, "customMessages", {
  403: "You don't have access"
}), a(n, "customIcons", {});
const j = (t, s, e, l) => {
  typeof s < "u" && (n.customTitles[t] = s), typeof e < "u" && (n.customMessages[t] = e), typeof l < "u" && (n.customIcons[t] = l);
}, q = (t) => typeof n.customTitles[t] < "u" ? n.customTitles[t] : "", C = (t) => typeof n.customMessages[t] < "u" ? n.customMessages[t] : "", H = (t) => typeof n.customIcons[t] < "u" ? n.customIcons[t] : "", M = { class: "lkt-http-info-header" }, S = {
  key: 0,
  class: "lkt-http-info-icon"
}, T = { class: "lkt-http-info-code" }, D = { class: "lkt-http-info-title" }, B = { class: "lkt-http-info-message" }, E = /* @__PURE__ */ o("i", null, null, -1), N = [
  E
], x = { name: "LktHttpInfo", inheritAttrs: !1 }, F = /* @__PURE__ */ I({
  ...x,
  props: {
    code: { type: String, required: !0 },
    title: { type: String, required: !1, default: "" },
    message: { type: String, required: !1, default: "" },
    icon: { type: String, required: !1, default: "" },
    quick: { type: Boolean, required: !1, default: !1 },
    canClose: { type: Boolean, required: !1, default: !1 },
    palette: { type: String, required: !1, default: "warning" }
  },
  emits: ["close"],
  setup(t, { emit: s }) {
    const e = t, l = s, h = c(() => e.title !== "" ? e.title : q(e.code)), k = c(() => e.message !== "" ? e.message : C(e.code)), d = c(() => e.message !== "" ? e.message : H(e.code)), g = c(() => {
      let i = ["lkt-http-info"];
      return e.quick && i.push("lkt-http-info-quick"), e.palette && i.push(`lkt-http-info--${e.palette}`), i.join(" ");
    }), y = (i) => {
      l("close", i);
    };
    return (i, L) => (u(), r("div", {
      class: p(g.value)
    }, [
      o("div", M, [
        d.value ? (u(), r("div", S, [
          o("i", {
            class: p(d.value)
          }, null, 2)
        ])) : m("", !0),
        o("div", null, [
          o("div", T, f(t.code), 1),
          o("div", D, f(h.value), 1)
        ])
      ]),
      o("div", B, f(k.value), 1),
      t.canClose ? (u(), r("div", {
        key: 0,
        class: "lkt-http-info-close",
        onClick: y
      }, N)) : m("", !0)
    ], 2));
  }
}), w = {
  install: (t, s = {}) => {
    t.component("lkt-http-info", F);
  }
};
export {
  w as default,
  j as setDefaultHttpInfo
};
