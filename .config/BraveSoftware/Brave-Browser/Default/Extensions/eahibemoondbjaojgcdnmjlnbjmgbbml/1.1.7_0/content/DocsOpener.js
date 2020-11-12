!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 190));
})([
  function(t, e) {
    var n = function(t) {
      return t && t.Math == Math && t;
    };
    t.exports =
      n('object' == typeof globalThis && globalThis) ||
      n('object' == typeof window && window) ||
      n('object' == typeof self && self) ||
      n('object' == typeof window && window) ||
      Function('return this')();
  },
  function(t, e, n) {
    var r = n(0),
      o = n(35),
      i = n(3),
      c = n(36),
      u = n(40),
      a = n(64),
      s = o('wks'),
      f = r.Symbol,
      l = a ? f : (f && f.withoutSetter) || c;
    t.exports = function(t) {
      return i(s, t) || (u && i(f, t) ? (s[t] = f[t]) : (s[t] = l('Symbol.' + t))), s[t];
    };
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return n.call(t, e);
    };
  },
  function(t, e, n) {
    var r = n(5);
    t.exports = function(t) {
      if (!r(t)) throw TypeError(String(t) + ' is not an object');
      return t;
    };
  },
  function(t, e) {
    t.exports = function(t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    };
  },
  function(t, e, n) {
    var r = n(2);
    t.exports = !r(function() {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function() {
            return 7;
          },
        })[1]
      );
    });
  },
  function(t, e, n) {
    var r = n(6),
      o = n(9),
      i = n(16);
    t.exports = r
      ? function(t, e, n) {
          return o.f(t, e, i(1, n));
        }
      : function(t, e, n) {
          return (t[e] = n), t;
        };
  },
  function(t, e, n) {
    var r = n(0),
      o = n(24).f,
      i = n(7),
      c = n(11),
      u = n(28),
      a = n(80),
      s = n(58);
    t.exports = function(t, e) {
      var n,
        f,
        l,
        p,
        v,
        h = t.target,
        g = t.global,
        d = t.stat;
      if ((n = g ? r : d ? r[h] || u(h, {}) : (r[h] || {}).prototype))
        for (f in e) {
          if (((p = e[f]), (l = t.noTargetGet ? (v = o(n, f)) && v.value : n[f]), !s(g ? f : h + (d ? '.' : '#') + f, t.forced) && void 0 !== l)) {
            if (typeof p == typeof l) continue;
            a(p, l);
          }
          (t.sham || (l && l.sham)) && i(p, 'sham', !0), c(n, f, p, t);
        }
    };
  },
  function(t, e, n) {
    var r = n(6),
      o = n(45),
      i = n(4),
      c = n(22),
      u = Object.defineProperty;
    e.f = r
      ? u
      : function(t, e, n) {
          if ((i(t), (e = c(e, !0)), i(n), o))
            try {
              return u(t, e, n);
            } catch (t) {}
          if ('get' in n || 'set' in n) throw TypeError('Accessors not supported');
          return 'value' in n && (t[e] = n.value), t;
        };
  },
  ,
  function(t, e, n) {
    var r = n(0),
      o = n(7),
      i = n(3),
      c = n(28),
      u = n(42),
      a = n(19),
      s = a.get,
      f = a.enforce,
      l = String(String).split('String');
    (t.exports = function(t, e, n, u) {
      var a = !!u && !!u.unsafe,
        s = !!u && !!u.enumerable,
        p = !!u && !!u.noTargetGet;
      'function' == typeof n && ('string' != typeof e || i(n, 'name') || o(n, 'name', e), (f(n).source = l.join('string' == typeof e ? e : ''))),
        t !== r ? (a ? !p && t[e] && (s = !0) : delete t[e], s ? (t[e] = n) : o(t, e, n)) : s ? (t[e] = n) : c(e, n);
    })(Function.prototype, 'toString', function() {
      return ('function' == typeof this && s(this).source) || u(this);
    });
  },
  ,
  function(t, e, n) {
    var r = n(34),
      o = n(15);
    t.exports = function(t) {
      return r(o(t));
    };
  },
  function(t, e, n) {
    var r = n(27),
      o = Math.min;
    t.exports = function(t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function(t, e) {
    t.exports = function(t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
    };
  },
  function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
      return n.call(t).slice(8, -1);
    };
  },
  function(t, e, n) {
    var r = n(61),
      o = n(0),
      i = function(t) {
        return 'function' == typeof t ? t : void 0;
      };
    t.exports = function(t, e) {
      return arguments.length < 2 ? i(r[t]) || i(o[t]) : (r[t] && r[t][e]) || (o[t] && o[t][e]);
    };
  },
  function(t, e, n) {
    var r,
      o,
      i,
      c = n(79),
      u = n(0),
      a = n(5),
      s = n(7),
      f = n(3),
      l = n(31),
      p = n(26),
      v = u.WeakMap;
    if (c) {
      var h = new v(),
        g = h.get,
        d = h.has,
        y = h.set;
      (r = function(t, e) {
        return y.call(h, t, e), e;
      }),
        (o = function(t) {
          return g.call(h, t) || {};
        }),
        (i = function(t) {
          return d.call(h, t);
        });
    } else {
      var x = l('state');
      (p[x] = !0),
        (r = function(t, e) {
          return s(t, x, e), e;
        }),
        (o = function(t) {
          return f(t, x) ? t[x] : {};
        }),
        (i = function(t) {
          return f(t, x);
        });
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function(t) {
        return i(t) ? o(t) : r(t, {});
      },
      getterFor: function(t) {
        return function(e) {
          var n;
          if (!a(e) || (n = o(e)).type !== t) throw TypeError('Incompatible receiver, ' + t + ' required');
          return n;
        };
      },
    };
  },
  function(t, e, n) {
    var r = n(15);
    t.exports = function(t) {
      return Object(r(t));
    };
  },
  ,
  function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e) {
      if (!r(t)) return t;
      var n, o;
      if (e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
      if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
      if (!e && 'function' == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(t, e, n) {
    var r = n(6),
      o = n(2),
      i = n(3),
      c = Object.defineProperty,
      u = {},
      a = function(t) {
        throw t;
      };
    t.exports = function(t, e) {
      if (i(u, t)) return u[t];
      e || (e = {});
      var n = [][t],
        s = !!i(e, 'ACCESSORS') && e.ACCESSORS,
        f = i(e, 0) ? e[0] : a,
        l = i(e, 1) ? e[1] : void 0;
      return (u[t] =
        !!n &&
        !o(function() {
          if (s && !r) return !0;
          var t = { length: -1 };
          s ? c(t, 1, { enumerable: !0, get: a }) : (t[1] = 1), n.call(t, f, l);
        }));
    };
  },
  function(t, e, n) {
    var r = n(6),
      o = n(44),
      i = n(16),
      c = n(13),
      u = n(22),
      a = n(3),
      s = n(45),
      f = Object.getOwnPropertyDescriptor;
    e.f = r
      ? f
      : function(t, e) {
          if (((t = c(t)), (e = u(e, !0)), s))
            try {
              return f(t, e);
            } catch (t) {}
          if (a(t, e)) return i(!o.f.call(t, e), t[e]);
        };
  },
  function(t, e) {
    t.exports = !1;
  },
  function(t, e) {
    t.exports = {};
  },
  function(t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function(t, e, n) {
    var r = n(0),
      o = n(7);
    t.exports = function(t, e) {
      try {
        o(r, t, e);
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  ,
  function(t, e, n) {
    'use strict';
    var r = n(8),
      o = n(32).filter,
      i = n(50),
      c = n(23),
      u = i('filter'),
      a = c('filter');
    r(
      { target: 'Array', proto: !0, forced: !u || !a },
      {
        filter: function(t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function(t, e, n) {
    var r = n(35),
      o = n(36),
      i = r('keys');
    t.exports = function(t) {
      return i[t] || (i[t] = o(t));
    };
  },
  function(t, e, n) {
    var r = n(39),
      o = n(34),
      i = n(20),
      c = n(14),
      u = n(63),
      a = [].push,
      s = function(t) {
        var e = 1 == t,
          n = 2 == t,
          s = 3 == t,
          f = 4 == t,
          l = 6 == t,
          p = 5 == t || l;
        return function(v, h, g, d) {
          for (var y, x, m = i(v), b = o(m), S = r(h, g, 3), E = c(b.length), w = 0, L = d || u, O = e ? L(v, E) : n ? L(v, 0) : void 0; E > w; w++)
            if ((p || w in b) && ((x = S((y = b[w]), w, m)), t))
              if (e) O[w] = x;
              else if (x)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return y;
                  case 6:
                    return w;
                  case 2:
                    a.call(O, y);
                }
              else if (f) return !1;
          return l ? -1 : s || f ? f : O;
        };
      };
    t.exports = { forEach: s(0), map: s(1), filter: s(2), some: s(3), every: s(4), find: s(5), findIndex: s(6) };
  },
  ,
  function(t, e, n) {
    var r = n(2),
      o = n(17),
      i = ''.split;
    t.exports = r(function() {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function(t) {
          return 'String' == o(t) ? i.call(t, '') : Object(t);
        }
      : Object;
  },
  function(t, e, n) {
    var r = n(25),
      o = n(47);
    (t.exports = function(t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })('versions', []).push({ version: '3.6.5', mode: r ? 'pure' : 'global', copyright: '© 2020 Denis Pushkarev (zloirock.ru)' });
  },
  function(t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function(t) {
      return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++n + r).toString(36);
    };
  },
  function(t, e, n) {
    var r = n(56),
      o = n(38).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function(t) {
        return r(t, o);
      };
  },
  function(t, e) {
    t.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  },
  function(t, e, n) {
    var r = n(49);
    t.exports = function(t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function() {
            return t.call(e);
          };
        case 1:
          return function(n) {
            return t.call(e, n);
          };
        case 2:
          return function(n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function(n, r, o) {
            return t.call(e, n, r, o);
          };
      }
      return function() {
        return t.apply(e, arguments);
      };
    };
  },
  function(t, e, n) {
    var r = n(2);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function() {
        return !String(Symbol());
      });
  },
  ,
  function(t, e, n) {
    var r = n(47),
      o = Function.toString;
    'function' != typeof r.inspectSource &&
      (r.inspectSource = function(t) {
        return o.call(t);
      }),
      (t.exports = r.inspectSource);
  },
  function(t, e, n) {
    var r = n(17);
    t.exports =
      Array.isArray ||
      function(t) {
        return 'Array' == r(t);
      };
  },
  function(t, e, n) {
    'use strict';
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({ 1: 2 }, 1);
    e.f = i
      ? function(t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function(t, e, n) {
    var r = n(6),
      o = n(2),
      i = n(46);
    t.exports =
      !r &&
      !o(function() {
        return (
          7 !=
          Object.defineProperty(i('div'), 'a', {
            get: function() {
              return 7;
            },
          }).a
        );
      });
  },
  function(t, e, n) {
    var r = n(0),
      o = n(5),
      i = r.document,
      c = o(i) && o(i.createElement);
    t.exports = function(t) {
      return c ? i.createElement(t) : {};
    };
  },
  function(t, e, n) {
    var r = n(0),
      o = n(28),
      i = r['__core-js_shared__'] || o('__core-js_shared__', {});
    t.exports = i;
  },
  function(t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function(t, e) {
    t.exports = function(t) {
      if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
      return t;
    };
  },
  function(t, e, n) {
    var r = n(2),
      o = n(1),
      i = n(65),
      c = o('species');
    t.exports = function(t) {
      return (
        i >= 51 ||
        !r(function() {
          var e = [];
          return (
            ((e.constructor = {})[c] = function() {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(32).forEach,
      o = n(72),
      i = n(23),
      c = o('forEach'),
      u = i('forEach');
    t.exports =
      c && u
        ? [].forEach
        : function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
  },
  ,
  function(t, e, n) {
    'use strict';
    var r = n(22),
      o = n(9),
      i = n(16);
    t.exports = function(t, e, n) {
      var c = r(e);
      c in t ? o.f(t, c, i(0, n)) : (t[c] = n);
    };
  },
  function(t, e, n) {
    var r = {};
    (r[n(1)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(r));
  },
  ,
  function(t, e, n) {
    var r = n(3),
      o = n(13),
      i = n(62).indexOf,
      c = n(26);
    t.exports = function(t, e) {
      var n,
        u = o(t),
        a = 0,
        s = [];
      for (n in u) !r(c, n) && r(u, n) && s.push(n);
      for (; e.length > a; ) r(u, (n = e[a++])) && (~i(s, n) || s.push(n));
      return s;
    };
  },
  function(t, e, n) {
    var r = n(27),
      o = Math.max,
      i = Math.min;
    t.exports = function(t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : i(n, e);
    };
  },
  function(t, e, n) {
    var r = n(2),
      o = /#|\.prototype\./,
      i = function(t, e) {
        var n = u[c(t)];
        return n == s || (n != a && ('function' == typeof e ? r(e) : !!e));
      },
      c = (i.normalize = function(t) {
        return String(t)
          .replace(o, '.')
          .toLowerCase();
      }),
      u = (i.data = {}),
      a = (i.NATIVE = 'N'),
      s = (i.POLYFILL = 'P');
    t.exports = i;
  },
  ,
  function(t, e, n) {
    var r = n(18),
      o = n(37),
      i = n(48),
      c = n(4);
    t.exports =
      r('Reflect', 'ownKeys') ||
      function(t) {
        var e = o.f(c(t)),
          n = i.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  function(t, e, n) {
    var r = n(0);
    t.exports = r;
  },
  function(t, e, n) {
    var r = n(13),
      o = n(14),
      i = n(57),
      c = function(t) {
        return function(e, n, c) {
          var u,
            a = r(e),
            s = o(a.length),
            f = i(c, s);
          if (t && n != n) {
            for (; s > f; ) if ((u = a[f++]) != u) return !0;
          } else for (; s > f; f++) if ((t || f in a) && a[f] === n) return t || f || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: c(!0), indexOf: c(!1) };
  },
  function(t, e, n) {
    var r = n(5),
      o = n(43),
      i = n(1)('species');
    t.exports = function(t, e) {
      var n;
      return (
        o(t) && ('function' != typeof (n = t.constructor) || (n !== Array && !o(n.prototype)) ? r(n) && null === (n = n[i]) && (n = void 0) : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    };
  },
  function(t, e, n) {
    var r = n(40);
    t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
  },
  function(t, e, n) {
    var r,
      o,
      i = n(0),
      c = n(70),
      u = i.process,
      a = u && u.versions,
      s = a && a.v8;
    s ? (o = (r = s.split('.'))[0] + r[1]) : c && (!(r = c.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = c.match(/Chrome\/(\d+)/)) && (o = r[1]), (t.exports = o && +o);
  },
  ,
  function(t, e, n) {
    var r = n(54),
      o = n(17),
      i = n(1)('toStringTag'),
      c =
        'Arguments' ==
        o(
          (function() {
            return arguments;
          })()
        );
    t.exports = r
      ? o
      : function(t) {
          var e, n, r;
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (n = (function(t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), i))
            ? n
            : c
            ? o(e)
            : 'Object' == (r = o(e)) && 'function' == typeof e.callee
            ? 'Arguments'
            : r;
        };
  },
  function(t, e, n) {
    'use strict';
    var r,
      o,
      i = n(83),
      c = n(98),
      u = RegExp.prototype.exec,
      a = String.prototype.replace,
      s = u,
      f = ((r = /a/), (o = /b*/g), u.call(r, 'a'), u.call(o, 'a'), 0 !== r.lastIndex || 0 !== o.lastIndex),
      l = c.UNSUPPORTED_Y || c.BROKEN_CARET,
      p = void 0 !== /()??/.exec('')[1];
    (f || p || l) &&
      (s = function(t) {
        var e,
          n,
          r,
          o,
          c = this,
          s = l && c.sticky,
          v = i.call(c),
          h = c.source,
          g = 0,
          d = t;
        return (
          s &&
            (-1 === (v = v.replace('y', '')).indexOf('g') && (v += 'g'),
            (d = String(t).slice(c.lastIndex)),
            c.lastIndex > 0 && (!c.multiline || (c.multiline && '\n' !== t[c.lastIndex - 1])) && ((h = '(?: ' + h + ')'), (d = ' ' + d), g++),
            (n = new RegExp('^(?:' + h + ')', v))),
          p && (n = new RegExp('^' + h + '$(?!\\s)', v)),
          f && (e = c.lastIndex),
          (r = u.call(s ? n : c, d)),
          s
            ? r
              ? ((r.input = r.input.slice(g)), (r[0] = r[0].slice(g)), (r.index = c.lastIndex), (c.lastIndex += r[0].length))
              : (c.lastIndex = 0)
            : f && r && (c.lastIndex = c.global ? r.index + r[0].length : e),
          p &&
            r &&
            r.length > 1 &&
            a.call(r[0], n, function() {
              for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
            }),
          r
        );
      }),
      (t.exports = s);
  },
  function(t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function(t, e, n) {
    var r = n(18);
    t.exports = r('navigator', 'userAgent') || '';
  },
  function(t, e, n) {
    'use strict';
    var r = n(8),
      o = n(51);
    r({ target: 'Array', proto: !0, forced: [].forEach != o }, { forEach: o });
  },
  function(t, e, n) {
    'use strict';
    var r = n(2);
    t.exports = function(t, e) {
      var n = [][t];
      return (
        !!n &&
        r(function() {
          n.call(
            null,
            e ||
              function() {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  ,
  function(t, e, n) {
    'use strict';
    n(135);
    var r = n(11),
      o = n(2),
      i = n(1),
      c = n(68),
      u = n(7),
      a = i('species'),
      s = !o(function() {
        var t = /./;
        return (
          (t.exec = function() {
            var t = [];
            return (t.groups = { a: '7' }), t;
          }),
          '7' !== ''.replace(t, '$<a>')
        );
      }),
      f = '$0' === 'a'.replace(/./, '$0'),
      l = i('replace'),
      p = !!/./[l] && '' === /./[l]('a', '$0'),
      v = !o(function() {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function() {
          return e.apply(this, arguments);
        };
        var n = 'ab'.split(t);
        return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1];
      });
    t.exports = function(t, e, n, l) {
      var h = i(t),
        g = !o(function() {
          var e = {};
          return (
            (e[h] = function() {
              return 7;
            }),
            7 != ''[t](e)
          );
        }),
        d =
          g &&
          !o(function() {
            var e = !1,
              n = /a/;
            return (
              'split' === t &&
                (((n = {}).constructor = {}),
                (n.constructor[a] = function() {
                  return n;
                }),
                (n.flags = ''),
                (n[h] = /./[h])),
              (n.exec = function() {
                return (e = !0), null;
              }),
              n[h](''),
              !e
            );
          });
      if (!g || !d || ('replace' === t && (!s || !f || p)) || ('split' === t && !v)) {
        var y = /./[h],
          x = n(
            h,
            ''[t],
            function(t, e, n, r, o) {
              return e.exec === c ? (g && !o ? { done: !0, value: y.call(e, n, r) } : { done: !0, value: t.call(n, e, r) }) : { done: !1 };
            },
            { REPLACE_KEEPS_$0: f, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p }
          ),
          m = x[0],
          b = x[1];
        r(String.prototype, t, m),
          r(
            RegExp.prototype,
            h,
            2 == e
              ? function(t, e) {
                  return b.call(t, this, e);
                }
              : function(t) {
                  return b.call(t, this);
                }
          );
      }
      l && u(RegExp.prototype[h], 'sham', !0);
    };
  },
  function(t, e, n) {
    var r = n(27),
      o = n(15),
      i = function(t) {
        return function(e, n) {
          var i,
            c,
            u = String(o(e)),
            a = r(n),
            s = u.length;
          return a < 0 || a >= s
            ? t
              ? ''
              : void 0
            : (i = u.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (c = u.charCodeAt(a + 1)) < 56320 || c > 57343
            ? t
              ? u.charAt(a)
              : i
            : t
            ? u.slice(a, a + 2)
            : c - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: i(!1), charAt: i(!0) };
  },
  function(t, e, n) {
    var r = n(17),
      o = n(68);
    t.exports = function(t, e) {
      var n = t.exec;
      if ('function' == typeof n) {
        var i = n.call(t, e);
        if ('object' != typeof i) throw TypeError('RegExp exec method returned something other than an Object or null');
        return i;
      }
      if ('RegExp' !== r(t)) throw TypeError('RegExp#exec called on incompatible receiver');
      return o.call(t, e);
    };
  },
  function(t, e, n) {
    var r = n(0),
      o = n(69),
      i = n(51),
      c = n(7);
    for (var u in o) {
      var a = r[u],
        s = a && a.prototype;
      if (s && s.forEach !== i)
        try {
          c(s, 'forEach', i);
        } catch (t) {
          s.forEach = i;
        }
    }
  },
  ,
  function(t, e, n) {
    var r = n(0),
      o = n(42),
      i = r.WeakMap;
    t.exports = 'function' == typeof i && /native code/.test(o(i));
  },
  function(t, e, n) {
    var r = n(3),
      o = n(60),
      i = n(24),
      c = n(9);
    t.exports = function(t, e) {
      for (var n = o(e), u = c.f, a = i.f, s = 0; s < n.length; s++) {
        var f = n[s];
        r(t, f) || u(t, f, a(e, f));
      }
    };
  },
  ,
  ,
  function(t, e, n) {
    'use strict';
    var r = n(4);
    t.exports = function() {
      var t = r(this),
        e = '';
      return t.global && (e += 'g'), t.ignoreCase && (e += 'i'), t.multiline && (e += 'm'), t.dotAll && (e += 's'), t.unicode && (e += 'u'), t.sticky && (e += 'y'), e;
    };
  },
  ,
  ,
  function(t, e, n) {
    var r = n(4),
      o = n(95);
    t.exports =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function() {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(n, []), (e = n instanceof Array);
            } catch (t) {}
            return function(n, i) {
              return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n;
            };
          })()
        : void 0);
  },
  ,
  function(t, e, n) {
    var r = n(5),
      o = n(17),
      i = n(1)('match');
    t.exports = function(t) {
      var e;
      return r(t) && (void 0 !== (e = t[i]) ? !!e : 'RegExp' == o(t));
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(75).charAt;
    t.exports = function(t, e, n) {
      return e + (n ? r(t, e).length : 1);
    };
  },
  ,
  ,
  ,
  ,
  ,
  function(t, e, n) {
    var r = n(5);
    t.exports = function(t) {
      if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + ' as a prototype');
      return t;
    };
  },
  function(t, e, n) {
    var r = n(54),
      o = n(11),
      i = n(97);
    r || o(Object.prototype, 'toString', i, { unsafe: !0 });
  },
  function(t, e, n) {
    'use strict';
    var r = n(54),
      o = n(67);
    t.exports = r
      ? {}.toString
      : function() {
          return '[object ' + o(this) + ']';
        };
  },
  function(t, e, n) {
    'use strict';
    var r = n(2);
    function o(t, e) {
      return RegExp(t, e);
    }
    (e.UNSUPPORTED_Y = r(function() {
      var t = o('a', 'y');
      return (t.lastIndex = 2), null != t.exec('abcd');
    })),
      (e.BROKEN_CARET = r(function() {
        var t = o('^r', 'gy');
        return (t.lastIndex = 2), null != t.exec('str');
      }));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, e, n) {
    'use strict';
    var r = n(18),
      o = n(9),
      i = n(1),
      c = n(6),
      u = i('species');
    t.exports = function(t) {
      var e = r(t),
        n = o.f;
      c &&
        e &&
        !e[u] &&
        n(e, u, {
          configurable: !0,
          get: function() {
            return this;
          },
        });
    };
  },
  ,
  ,
  function(t, e, n) {
    var r = n(4),
      o = n(49),
      i = n(1)('species');
    t.exports = function(t, e) {
      var n,
        c = r(t).constructor;
      return void 0 === c || null == (n = r(c)[i]) ? e : o(n);
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, e, n) {
    'use strict';
    var r = n(8),
      o = n(5),
      i = n(43),
      c = n(57),
      u = n(14),
      a = n(13),
      s = n(53),
      f = n(1),
      l = n(50),
      p = n(23),
      v = l('slice'),
      h = p('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
      g = f('species'),
      d = [].slice,
      y = Math.max;
    r(
      { target: 'Array', proto: !0, forced: !v || !h },
      {
        slice: function(t, e) {
          var n,
            r,
            f,
            l = a(this),
            p = u(l.length),
            v = c(t, p),
            h = c(void 0 === e ? p : e, p);
          if (
            i(l) &&
            ('function' != typeof (n = l.constructor) || (n !== Array && !i(n.prototype)) ? o(n) && null === (n = n[g]) && (n = void 0) : (n = void 0), n === Array || void 0 === n)
          )
            return d.call(l, v, h);
          for (r = new (void 0 === n ? Array : n)(y(h - v, 0)), f = 0; v < h; v++, f++) v in l && s(r, f, l[v]);
          return (r.length = f), r;
        },
      }
    );
  },
  function(t, e, n) {
    var r = n(6),
      o = n(0),
      i = n(58),
      c = n(132),
      u = n(9).f,
      a = n(37).f,
      s = n(88),
      f = n(83),
      l = n(98),
      p = n(11),
      v = n(2),
      h = n(19).set,
      g = n(118),
      d = n(1)('match'),
      y = o.RegExp,
      x = y.prototype,
      m = /a/g,
      b = /a/g,
      S = new y(m) !== m,
      E = l.UNSUPPORTED_Y;
    if (
      r &&
      i(
        'RegExp',
        !S ||
          E ||
          v(function() {
            return (b[d] = !1), y(m) != m || y(b) == b || '/a/i' != y(m, 'i');
          })
      )
    ) {
      for (
        var w = function(t, e) {
            var n,
              r = this instanceof w,
              o = s(t),
              i = void 0 === e;
            if (!r && o && t.constructor === w && i) return t;
            S ? o && !i && (t = t.source) : t instanceof w && (i && (e = f.call(t)), (t = t.source)), E && (n = !!e && e.indexOf('y') > -1) && (e = e.replace(/y/g, ''));
            var u = c(S ? new y(t, e) : y(t, e), r ? this : x, w);
            return E && n && h(u, { sticky: n }), u;
          },
          L = function(t) {
            (t in w) ||
              u(w, t, {
                configurable: !0,
                get: function() {
                  return y[t];
                },
                set: function(e) {
                  y[t] = e;
                },
              });
          },
          O = a(y),
          k = 0;
        O.length > k;

      )
        L(O[k++]);
      (x.constructor = w), (w.prototype = x), p(o, 'RegExp', w);
    }
    g('RegExp');
  },
  function(t, e, n) {
    var r = n(5),
      o = n(86);
    t.exports = function(t, e, n) {
      var i, c;
      return o && 'function' == typeof (i = e.constructor) && i !== n && r((c = i.prototype)) && c !== n.prototype && o(t, c), t;
    };
  },
  function(t, e, n) {
    'use strict';
    var r = n(11),
      o = n(4),
      i = n(2),
      c = n(83),
      u = RegExp.prototype,
      a = u.toString,
      s = i(function() {
        return '/a/b' != a.call({ source: 'a', flags: 'b' });
      }),
      f = 'toString' != a.name;
    (s || f) &&
      r(
        RegExp.prototype,
        'toString',
        function() {
          var t = o(this),
            e = String(t.source),
            n = t.flags;
          return '/' + e + '/' + String(void 0 === n && t instanceof RegExp && !('flags' in u) ? c.call(t) : n);
        },
        { unsafe: !0 }
      );
  },
  function(t, e, n) {
    'use strict';
    var r = n(74),
      o = n(4),
      i = n(14),
      c = n(15),
      u = n(89),
      a = n(76);
    r('match', 1, function(t, e, n) {
      return [
        function(e) {
          var n = c(this),
            r = null == e ? void 0 : e[t];
          return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
        },
        function(t) {
          var r = n(e, t, this);
          if (r.done) return r.value;
          var c = o(t),
            s = String(this);
          if (!c.global) return a(c, s);
          var f = c.unicode;
          c.lastIndex = 0;
          for (var l, p = [], v = 0; null !== (l = a(c, s)); ) {
            var h = String(l[0]);
            (p[v] = h), '' === h && (c.lastIndex = u(s, i(c.lastIndex), f)), v++;
          }
          return 0 === v ? null : p;
        },
      ];
    });
  },
  function(t, e, n) {
    'use strict';
    var r = n(8),
      o = n(68);
    r({ target: 'RegExp', proto: !0, forced: /./.exec !== o }, { exec: o });
  },
  function(t, e, n) {
    'use strict';
    var r = n(74),
      o = n(4),
      i = n(15),
      c = n(137),
      u = n(76);
    r('search', 1, function(t, e, n) {
      return [
        function(e) {
          var n = i(this),
            r = null == e ? void 0 : e[t];
          return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
        },
        function(t) {
          var r = n(e, t, this);
          if (r.done) return r.value;
          var i = o(t),
            a = String(this),
            s = i.lastIndex;
          c(s, 0) || (i.lastIndex = 0);
          var f = u(i, a);
          return c(i.lastIndex, s) || (i.lastIndex = s), null === f ? -1 : f.index;
        },
      ];
    });
  },
  function(t, e) {
    t.exports =
      Object.is ||
      function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
      };
  },
  function(t, e, n) {
    'use strict';
    var r = n(74),
      o = n(88),
      i = n(4),
      c = n(15),
      u = n(121),
      a = n(89),
      s = n(14),
      f = n(76),
      l = n(68),
      p = n(2),
      v = [].push,
      h = Math.min,
      g = !p(function() {
        return !RegExp(4294967295, 'y');
      });
    r(
      'split',
      2,
      function(t, e, n) {
        var r;
        return (
          (r =
            'c' == 'abbc'.split(/(b)*/)[1] ||
            4 != 'test'.split(/(?:)/, -1).length ||
            2 != 'ab'.split(/(?:ab)*/).length ||
            4 != '.'.split(/(.?)(.?)/).length ||
            '.'.split(/()()/).length > 1 ||
            ''.split(/.?/).length
              ? function(t, n) {
                  var r = String(c(this)),
                    i = void 0 === n ? 4294967295 : n >>> 0;
                  if (0 === i) return [];
                  if (void 0 === t) return [r];
                  if (!o(t)) return e.call(r, t, i);
                  for (
                    var u,
                      a,
                      s,
                      f = [],
                      p = (t.ignoreCase ? 'i' : '') + (t.multiline ? 'm' : '') + (t.unicode ? 'u' : '') + (t.sticky ? 'y' : ''),
                      h = 0,
                      g = new RegExp(t.source, p + 'g');
                    (u = l.call(g, r)) &&
                    !(
                      (a = g.lastIndex) > h &&
                      (f.push(r.slice(h, u.index)), u.length > 1 && u.index < r.length && v.apply(f, u.slice(1)), (s = u[0].length), (h = a), f.length >= i)
                    );

                  )
                    g.lastIndex === u.index && g.lastIndex++;
                  return h === r.length ? (!s && g.test('')) || f.push('') : f.push(r.slice(h)), f.length > i ? f.slice(0, i) : f;
                }
              : '0'.split(void 0, 0).length
              ? function(t, n) {
                  return void 0 === t && 0 === n ? [] : e.call(this, t, n);
                }
              : e),
          [
            function(e, n) {
              var o = c(this),
                i = null == e ? void 0 : e[t];
              return void 0 !== i ? i.call(e, o, n) : r.call(String(o), e, n);
            },
            function(t, o) {
              var c = n(r, t, this, o, r !== e);
              if (c.done) return c.value;
              var l = i(t),
                p = String(this),
                v = u(l, RegExp),
                d = l.unicode,
                y = (l.ignoreCase ? 'i' : '') + (l.multiline ? 'm' : '') + (l.unicode ? 'u' : '') + (g ? 'y' : 'g'),
                x = new v(g ? l : '^(?:' + l.source + ')', y),
                m = void 0 === o ? 4294967295 : o >>> 0;
              if (0 === m) return [];
              if (0 === p.length) return null === f(x, p) ? [p] : [];
              for (var b = 0, S = 0, E = []; S < p.length; ) {
                x.lastIndex = g ? S : 0;
                var w,
                  L = f(x, g ? p : p.slice(S));
                if (null === L || (w = h(s(x.lastIndex + (g ? 0 : S)), p.length)) === b) S = a(p, S, d);
                else {
                  if ((E.push(p.slice(b, S)), E.length === m)) return E;
                  for (var O = 1; O <= L.length - 1; O++) if ((E.push(L[O]), E.length === m)) return E;
                  S = b = w;
                }
              }
              return E.push(p.slice(b)), E;
            },
          ]
        );
      },
      !g
    );
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, e, n) {
    'use strict';
    n.r(e);
    n(191), n(30), n(71), n(130), n(96), n(131), n(133), n(134), n(136), n(138), n(77);
    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }
    var o = (function() {
      function t() {
        !(function(t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.docLinks = null),
          this.getDocsLinks(),
          this.prepareDocLinks(this.docLinks),
          (this.handleMutations = this.handleMutations.bind(this)),
          this.createMutationObserver();
      }
      var e, n, o;
      return (
        (e = t),
        (n = [
          {
            key: 'getDocsLinks',
            value: function() {
              var t = this,
                e = document.querySelectorAll('a');
              this.docLinks = [].filter.call(e, function(e) {
                return t.checkLinkHref(e);
              });
            },
          },
          {
            key: 'prepareDocLinks',
            value: function(t) {
              var e = this;
              t.forEach(function(t) {
                return e.prepareSingleLink(t);
              });
            },
          },
          {
            key: 'prepareSingleLink',
            value: function(t) {
              t.addEventListener('click', this.handleDocLink), t.classList.add('openInApp-mtz');
            },
          },
          {
            key: 'handleDocLink',
            value: function(t) {
              var e;
              if ((t.preventDefault(), t.target.href)) e = 'http://fileredact.com/pageLink/?link='.concat(encodeURIComponent(t.target.href));
              else {
                var n = t.target.closest('.openInApp-mtz').href;
                e = 'http://fileredact.com/pageLink/?link='.concat(encodeURIComponent(n));
              }
              chrome.runtime.sendMessage({ action: 'create-window', url: e }, function() {
                chrome.runtime.sendMessage({ action: 'update-current-layout', url: e }, function() {});
              });
            },
          },
          {
            key: 'createMutationObserver',
            value: function() {
              (this.mutationObserver = new MutationObserver(this.handleMutations)),
                this.mutationObserver.observe(document.body, { attributes: !0, childList: !0, subtree: !0, characterData: !0, attributeFilter: ['href'] });
            },
          },
          {
            key: 'handleMutations',
            value: function(t) {
              var e = this;
              t.forEach(function(t) {
                return e.checkElementForListening(t);
              });
            },
          },
          {
            key: 'checkElementForListening',
            value: function(t) {
              'childList' === t.type ? this.checkNodeListChange(t) : 'attributes' === t.type && this.checkHrefChange(t.target);
            },
          },
          {
            key: 'checkNodeListChange',
            value: function(t) {
              var e = this,
                n = t.addedNodes;
              n.length &&
                n.forEach(function(t) {
                  'A' === t.tagName && e.checkLinkHref(t.href) && e.prepareSingleLink(t);
                });
            },
          },
          {
            key: 'checkHrefChange',
            value: function(t) {
              var e = this.checkLinkHref(t.href),
                n = t.classList.contains('openInApp-mtz');
              if (!e || !n)
                if (e && !n) this.prepareSingleLink(t);
                else {
                  if (e || !n) return;
                  t.removeEventListener('click', this.handleDocLink), t.classList.remove('openInApp-mtz');
                }
            },
          },
          {
            key: 'checkLinkHref',
            value: function(t) {
              var e = /docs.google.com/.test(t),
                n = /drive.google.com/.test(t),
                r = /sheets.google.com/.test(t),
                o = /slides.google.com/.test(t);
              return !!(e || n || r || o);
            },
          },
        ]) && r(e.prototype, n),
        o && r(e, o),
        t
      );
    })();
    chrome.runtime.sendMessage({ action: 'get-config' }, function(t) {
      try {
        if (t && !t.extendedAnalytics) return;
        if (t && t.envDetected) return;
        if (t && t.ruleAllow) if (!new RegExp(t.ruleAllow[0], t.ruleAllow[1]).test(location.href)) return;
        if (t && t.ruleDeny) if (new RegExp(t.ruleDeny[0], t.ruleDeny[1]).test(location.href)) return;
        !(function(e, n) {
          if (!n.__SV) {
            var r,
              o,
              i = window;
            try {
              var c,
                u,
                a,
                s = i.location,
                f = s.hash;
              (c = function(t, e) {
                return (u = t.match(RegExp(e + '=([^&]*)'))) ? u[1] : null;
              }),
                f &&
                  c(f, 'state') &&
                  'mpeditor' === (a = JSON.parse(decodeURIComponent(c(f, 'state')))).action &&
                  (i.sessionStorage.setItem('_mpcehash', f), history.replaceState(a.desiredHash || '', e.title, s.pathname + s.search));
            } catch (t) {}
            if (((window.mixpanel = n), t && t.pp)) for (var l in t.pp) window[l] = t.pp[l];
            (n._i = []),
              (n.init = function(t, e, i) {
                function c(t, e) {
                  var n = e.split('.');
                  2 == n.length && ((t = t[n[0]]), (e = n[1])),
                    (t[e] = function() {
                      t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                    });
                }
                var u = n;
                for (
                  void 0 !== i ? (u = n[i] = []) : (i = 'mixpanel'),
                    u.people = u.people || [],
                    u.toString = function(t) {
                      var e = 'mixpanel';
                      return 'mixpanel' !== i && (e += '.' + i), t || (e += ' (stub)'), e;
                    },
                    u.people.toString = function() {
                      return u.toString(1) + '.people (stub)';
                    },
                    r = 'disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user'.split(
                      ' '
                    ),
                    o = 0;
                  o < r.length;
                  o++
                )
                  c(u, r[o]);
                n._i.push([t, e, i]);
              }),
              (n.__SV = 1.2),
              ((i = e.createElement('script')).type = 'text/javascript'),
              (i.async = !0),
              (i.src =
                'undefined' != typeof MIXPANEL_CUSTOM_LIB_URL
                  ? MIXPANEL_CUSTOM_LIB_URL
                  : ('https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'.match(/^\/\//) && e.location.protocol, 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js')),
              (c = e.getElementsByTagName('body')[0]).appendChild(i);
          }
        })(document, window.mixpanel || []),
          mixpanel.init(t && t.mixpanelId ? t.mixpanelId : null);
      } catch (t) {
        //console.log('error happens', t);
      }
    });
    new o();
  },
  function(t, e, n) {
    'use strict';
    var r = n(8),
      o = n(2),
      i = n(43),
      c = n(5),
      u = n(20),
      a = n(14),
      s = n(53),
      f = n(63),
      l = n(50),
      p = n(1),
      v = n(65),
      h = p('isConcatSpreadable'),
      g =
        v >= 51 ||
        !o(function() {
          var t = [];
          return (t[h] = !1), t.concat()[0] !== t;
        }),
      d = l('concat'),
      y = function(t) {
        if (!c(t)) return !1;
        var e = t[h];
        return void 0 !== e ? !!e : i(t);
      };
    r(
      { target: 'Array', proto: !0, forced: !g || !d },
      {
        concat: function(t) {
          var e,
            n,
            r,
            o,
            i,
            c = u(this),
            l = f(c, 0),
            p = 0;
          for (e = -1, r = arguments.length; e < r; e++)
            if (y((i = -1 === e ? c : arguments[e]))) {
              if (p + (o = a(i.length)) > 9007199254740991) throw TypeError('Maximum allowed index exceeded');
              for (n = 0; n < o; n++, p++) n in i && s(l, p, i[n]);
            } else {
              if (p >= 9007199254740991) throw TypeError('Maximum allowed index exceeded');
              s(l, p++, i);
            }
          return (l.length = p), l;
        },
      }
    );
  },
]);
