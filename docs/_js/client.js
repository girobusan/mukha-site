(() => {
  "use strict";

  var e = {
      975: e => {
        function t(e) {
          if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
        }
        function r(e, t) {
          for (var r, n = "", o = 0, i = -1, a = 0, l = 0; l <= e.length; ++l) {
            if (l < e.length) r = e.charCodeAt(l);else {
              if (47 === r) break;
              r = 47;
            }
            if (47 === r) {
              if (i === l - 1 || 1 === a) ;else if (i !== l - 1 && 2 === a) {
                if (n.length < 2 || 2 !== o || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2)) if (n.length > 2) {
                  var c = n.lastIndexOf("/");
                  if (c !== n.length - 1) {
                    -1 === c ? (n = "", o = 0) : o = (n = n.slice(0, c)).length - 1 - n.lastIndexOf("/"), i = l, a = 0;
                    continue;
                  }
                } else if (2 === n.length || 1 === n.length) {
                  n = "", o = 0, i = l, a = 0;
                  continue;
                }
                t && (n.length > 0 ? n += "/.." : n = "..", o = 2);
              } else n.length > 0 ? n += "/" + e.slice(i + 1, l) : n = e.slice(i + 1, l), o = l - i - 1;
              i = l, a = 0;
            } else 46 === r && -1 !== a ? ++a : a = -1;
          }
          return n;
        }
        var n = {
          resolve: function () {
            for (var e, n = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
              var a;
              i >= 0 ? a = arguments[i] : (void 0 === e && (e = process.cwd()), a = e), t(a), 0 !== a.length && (n = a + "/" + n, o = 47 === a.charCodeAt(0));
            }
            return n = r(n, !o), o ? n.length > 0 ? "/" + n : "/" : n.length > 0 ? n : ".";
          },
          normalize: function (e) {
            if (t(e), 0 === e.length) return ".";
            var n = 47 === e.charCodeAt(0),
              o = 47 === e.charCodeAt(e.length - 1);
            return 0 !== (e = r(e, !n)).length || n || (e = "."), e.length > 0 && o && (e += "/"), n ? "/" + e : e;
          },
          isAbsolute: function (e) {
            return t(e), e.length > 0 && 47 === e.charCodeAt(0);
          },
          join: function () {
            if (0 === arguments.length) return ".";
            for (var e, r = 0; r < arguments.length; ++r) {
              var o = arguments[r];
              t(o), o.length > 0 && (void 0 === e ? e = o : e += "/" + o);
            }
            return void 0 === e ? "." : n.normalize(e);
          },
          relative: function (e, r) {
            if (t(e), t(r), e === r) return "";
            if ((e = n.resolve(e)) === (r = n.resolve(r))) return "";
            for (var o = 1; o < e.length && 47 === e.charCodeAt(o); ++o);
            for (var i = e.length, a = i - o, l = 1; l < r.length && 47 === r.charCodeAt(l); ++l);
            for (var c = r.length - l, s = a < c ? a : c, f = -1, h = 0; h <= s; ++h) {
              if (h === s) {
                if (c > s) {
                  if (47 === r.charCodeAt(l + h)) return r.slice(l + h + 1);
                  if (0 === h) return r.slice(l + h);
                } else a > s && (47 === e.charCodeAt(o + h) ? f = h : 0 === h && (f = 0));
                break;
              }
              var u = e.charCodeAt(o + h);
              if (u !== r.charCodeAt(l + h)) break;
              47 === u && (f = h);
            }
            var d = "";
            for (h = o + f + 1; h <= i; ++h) h !== i && 47 !== e.charCodeAt(h) || (0 === d.length ? d += ".." : d += "/..");
            return d.length > 0 ? d + r.slice(l + f) : (l += f, 47 === r.charCodeAt(l) && ++l, r.slice(l));
          },
          _makeLong: function (e) {
            return e;
          },
          dirname: function (e) {
            if (t(e), 0 === e.length) return ".";
            for (var r = e.charCodeAt(0), n = 47 === r, o = -1, i = !0, a = e.length - 1; a >= 1; --a) if (47 === (r = e.charCodeAt(a))) {
              if (!i) {
                o = a;
                break;
              }
            } else i = !1;
            return -1 === o ? n ? "/" : "." : n && 1 === o ? "//" : e.slice(0, o);
          },
          basename: function (e, r) {
            if (void 0 !== r && "string" != typeof r) throw new TypeError('"ext" argument must be a string');
            t(e);
            var n,
              o = 0,
              i = -1,
              a = !0;
            if (void 0 !== r && r.length > 0 && r.length <= e.length) {
              if (r.length === e.length && r === e) return "";
              var l = r.length - 1,
                c = -1;
              for (n = e.length - 1; n >= 0; --n) {
                var s = e.charCodeAt(n);
                if (47 === s) {
                  if (!a) {
                    o = n + 1;
                    break;
                  }
                } else -1 === c && (a = !1, c = n + 1), l >= 0 && (s === r.charCodeAt(l) ? -1 === --l && (i = n) : (l = -1, i = c));
              }
              return o === i ? i = c : -1 === i && (i = e.length), e.slice(o, i);
            }
            for (n = e.length - 1; n >= 0; --n) if (47 === e.charCodeAt(n)) {
              if (!a) {
                o = n + 1;
                break;
              }
            } else -1 === i && (a = !1, i = n + 1);
            return -1 === i ? "" : e.slice(o, i);
          },
          extname: function (e) {
            t(e);
            for (var r = -1, n = 0, o = -1, i = !0, a = 0, l = e.length - 1; l >= 0; --l) {
              var c = e.charCodeAt(l);
              if (47 !== c) -1 === o && (i = !1, o = l + 1), 46 === c ? -1 === r ? r = l : 1 !== a && (a = 1) : -1 !== r && (a = -1);else if (!i) {
                n = l + 1;
                break;
              }
            }
            return -1 === r || -1 === o || 0 === a || 1 === a && r === o - 1 && r === n + 1 ? "" : e.slice(r, o);
          },
          format: function (e) {
            if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
            return function (e, t) {
              var r = t.dir || t.root,
                n = t.base || (t.name || "") + (t.ext || "");
              return r ? r === t.root ? r + n : r + e + n : n;
            }("/", e);
          },
          parse: function (e) {
            t(e);
            var r = {
              root: "",
              dir: "",
              base: "",
              ext: "",
              name: ""
            };
            if (0 === e.length) return r;
            var n,
              o = e.charCodeAt(0),
              i = 47 === o;
            i ? (r.root = "/", n = 1) : n = 0;
            for (var a = -1, l = 0, c = -1, s = !0, f = e.length - 1, h = 0; f >= n; --f) if (47 !== (o = e.charCodeAt(f))) -1 === c && (s = !1, c = f + 1), 46 === o ? -1 === a ? a = f : 1 !== h && (h = 1) : -1 !== a && (h = -1);else if (!s) {
              l = f + 1;
              break;
            }
            return -1 === a || -1 === c || 0 === h || 1 === h && a === c - 1 && a === l + 1 ? -1 !== c && (r.base = r.name = 0 === l && i ? e.slice(1, c) : e.slice(l, c)) : (0 === l && i ? (r.name = e.slice(1, a), r.base = e.slice(1, c)) : (r.name = e.slice(l, a), r.base = e.slice(l, c)), r.ext = e.slice(a, c)), l > 0 ? r.dir = e.slice(0, l - 1) : i && (r.dir = "/"), r;
          },
          sep: "/",
          delimiter: ":",
          win32: null,
          posix: null
        };
        n.posix = n, e.exports = n;
      }
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = t[n] = {
      exports: {}
    };
    return e[n](i, i.exports, r), i.exports;
  }
  r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, {
      a: t
    }), t;
  }, r.d = (e, t) => {
    for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
  var n = r(975);
  !function () {
    if (window.Mukha) return;
    const e = document.currentScript.dataset.location;
    function t(e, t) {
      return n.posix.relative(n.posix.dirname(e), t);
    }
    function r(e, t, r) {
      const n = e.split(".");
      n.reduce((e, t, o) => (e[t] || (o + 1 === n.length ? e[t] = r : e[t] = {}), e = e[t]), t);
      return t;
    }
    console.info("Mukha JS API client", "0.0.14b", "at", e);
    var o = {},
      i = {};
    window.Mukha = {
      registerData: (e, t, n) => {
        let a = t;
        if (n && (a = function (e) {
          const t = [];
          return e.rows.forEach(r => {
            t.push(e.cols.reduce((e, t, n) => (e[t] = r[n], e), {}));
          }), t;
        }(t)), i[e]) return i[e](a), void delete i[e];
        console.warn("Unrequested dataset:", e), r(e, o, t);
      },
      relpath: (e, r) => t(e, r),
      permalink: e,
      getData: function (n, a) {
        let l = a;
        l || (l = "datasets");
        let c = l + "." + n,
          s = function (e, t, r) {
            const n = r || ".";
            return e.split(n).filter(e => e).reduce((e, t) => e ? e[t] : void 0, t);
          }(c, o);
        if (s) return Promise.resolve(s);
        let f = "/_js/data/global/" + l + "/" + n.split(".").join("/") + ".js";
        return new Promise((n, a) => {
          let l = document.createElement("script");
          l.addEventListener("error", () => a("no data")), document.body.appendChild(l), l.src = t(e, f), i[c] = e => {
            r(c, o, e), n(e);
          };
        });
      }
    };
  }();
})();