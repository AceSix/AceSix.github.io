/*
 * @FilePath: \AceSix.github.io\static_cv\js\index.js
 * @Author: AceSix
 * @Date: 2021-06-30 16:52:27
 * @LastEditors: AceSix
 * @LastEditTime: 2022-10-24 23:50:48
 * Copyright (C) 2021 SJTU. All rights reserved.
 */


!(function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var o = (i[n] = { exports: {}, id: n, loaded: !1 });
        return (
            t[n].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports
        );
    }
    var i = {};
    return (e.m = t), (e.c = i), (e.p = "./"), e(0);
})
([
    function(t, e, i) {
        "use strict";

        function n() {
            this.init(),
                (this.isable = !0),
                this.loop(),
                this.initEvents(),
                this.detect();
        }
        var o = i(2),
            r = i(1);
        delete r.__filename,
            (n.prototype.detect = function() {
                try {
                    /Android|webOS|iPhone|iPod|BlackBerry/i.test(
                            navigator.userAgent
                        ) ?
                        alert("Recommended opened with computer") :
                        /iPad/i.test(navigator.userAgent);
                } catch (t) {}
            }),
            (n.prototype.init = function() {
                var t = $("#grid-container"),
                    e = (this.grids = new o(t));
                e.data(r);
            });
        var s = 0,
            a = 0;
        (n.prototype.loop = function() {
            a++ % 180 === 0 && this.isable && this.grids.update(s++),
                window.requestAnimationFrame(this.loop.bind(this));
        }),
        (n.prototype.initEvents = function() {
            var t = this,
                e = $(".cn"),
                i = $(".en"),
                n = this.grids;
            e.on("touchstart mousedown", function() {
                    e.addClass("active").removeClass("normal"),
                        i.removeClass("active").addClass("normal"),
                        (n.options.text = function(t) {
                            return t.cname;
                        }),
                        (n.options.desc = function(t) {
                            return t.cdesc;
                        }),
                        n.updateText();
                }),
            i.on("touchstart mousedown", function() {
                    i.addClass("active").removeClass("normal"),
                        e.removeClass("active").addClass("normal"),
                        (n.options.text = function(t) {
                            return t.name;
                        }),
                        (n.options.desc = function(t) {
                            return t.desc;
                        }),
                        n.updateText();
                }),
            this.grids
                .on("hover-in-grid", function(e) {
                    t.drawPanel(e, this.options.desc), (t.isable = !1);
                })
                .on("hover-out-grid", function() {
                    (t.isable = !0), t.hidePanel();
                });
        }),
        (n.prototype.hidePanel = function() {
            $(".tag-container").css("opacity", 1),
                (this.hideId = setTimeout(
                    function() {
                        $(".panel-left").css("opacity", 0),
                            $(".panel-right").css("opacity", 0);
                    }.bind(this),
                    500
                ));
        }),
        (n.prototype.drawPanel = function(t, fn_desc) {
            var e = $(".panel-left").css("opacity", 1).empty(),
                i = $(".panel-right").css("opacity", 1).empty();
            $(".tag-container").css("opacity", 0.3),
                window.clearTimeout(this.hideId);
            var n = t.img;
            n &&
                e.html(
                    '<img src="' + n + '" style="width:100%;height:auto;">'
                );
            var o = "",
                r = t.name;
            r && (o += this.drawLine("<span>name: </span>" + r));
            var s = t.time;
            if (s) {
                var a = "<span>time | </span>" + s[0];
                s[1] !== s[0] && (a += " / " + s[1]),
                    (o += this.drawLine(a));
            }
            var c = fn_desc(t); 
            c && (o += "<span>" + c + "</div>"), i.html(o);
        }),
        (n.prototype.drawLine = function(t) {
            return '<div class="info-line">' + t + "</div><br>";
        }),
        new n(),
            (t.exports = n);
    },
    function(t, e) {
        "use strict";
        t.exports = my_experiences;
    },
    function(t, e, i) {
        "use strict";
        function n(t, e) {
            (e = this.options = p.deepMerge(n.options, e)),
            (this.container = t.addClass("grid-container")),
            (this.groupNode = $('<div class="grid-group"></div>').appendTo(
                t
            )),
            (this._grids = []),
            (this.imageURL = this.genCanvasUrl()),
            this.compute(),
                this.initDom(),
                this.initEvents();
        }
        var o = Math.floor,
            r = Math.random,
            s = Math.cos,
            a = Math.sin,
            c = Math.PI,
            h = (Math.abs, Math.asin),
            p = i(5),
            d = i(4);
        (n.options = {
            hPercent: 0.12,
            wN: 20,
            hN: 5,
            text: function(t) {
                return t.text || t.value || t.name;
            },
            desc: function(t) {
                return t.desc || t.cdesc;
            },
            highLightTag: "major",
            bgColorHover: "#0bf",
            bgColor: "#09f",
            sprite: { n: 16, color: "#09f", lineWidth: 3 },
            w: 1200,
            h: 400,
        }),
        (n = d.extend(n, {})),
        (n.prototype.data = function(t) {
            (this._data = t), this.render();
        }),
        (n.prototype.genCanvasUrl = function() {
            var t = this.options.sprite,
                e = document.createElement("canvas"),
                i = (e.width = 200),
                n = (e.height = 200),
                o = e.getContext("2d");
            (o.strokeStyle = t.color), (o.lineWidth = t.lineWidth);
            for (var r, s = t.n, a = (2 * i) / s, c = 0; c < t.n; c++)
                (r = a * c),
                o.beginPath(),
                o.moveTo(0, -n + r),
                o.lineTo(2 * n - r, n),
                o.stroke();
            return (
                $("body").append($(e).css("z-index", 1e3)), e.toDataURL()
            );
        }),
        (n.prototype.render = function() {
            var t,
                e,
                i,
                n,
                o = this.options.text,
                d = this.options.desc,
                r = this._data,
                s = r.length,
                a = this._grids;
            for (var c in a)
                (n = c % s),
                (i = r[n]),
                (e = o(i)),
                (t = a[c]),
                t.node.text(e),
                (t._data = t.node[0]._data = i);
            this.initSelectors();
        }),
        (n.prototype.compute = function() {
            var t = this.options,
                e = t.hN,
                i = t.wN,
                n = this.container,
                r = n.width(),
                s = n.height(),
                a = t.hPercent,
                p = (this.groupW = t.w),
                d = (this.groupH = t.h),
                a = r / t.w,
                u = (this.gridH = o(d / (e + 1))),
                l = (this.gridW = o((p * c) / i));
            (this.kphi = 2 * h((l / p) * 1.1) * 1.02),
            (this.dh = u / e),
            this.groupNode.css({
                    left: 0,
                    width: t.w,
                    top: (s - d) / 3,
                    height: t.h,
                    transform: "scale3d(" + a + "," + a + ",1)",
                    "transform-origin": "0 0",
                }),
                this.groupNode.find(".grid-node").css({ width: l });
        }),
        (n.prototype.initEvents = function() {
            var t = this;
            $(window).on("resize", function() {
                    t.compute(), t.update();
                }),
                this.groupNode
                .find(".grid-node")
                .on("mouseover", function() {
                    t.focus(this), t.emit("hover-in-grid", this._data);
                })
                .on("mouseout", function() {
                    t.emit("hover-out-grid"), t.unfocus();
                })
                .on("mousedown touchstart", function() {
                    var t = this._data;
                    t.link && window.open(t.link);
                });
        }),
        (n.prototype.focus = function(t) {
            t._data,
                this.each(function(t) {
                    $(t.node).css({
                        opacity: 0.3,
                        "background-size": "auto 100%",
                    });
                }),
                $(t).css({ opacity: 1, "background-size": "auto 100%" });
        }),
        (n.prototype.unfocus = function() {
            this.each(function(t) {
                $(t.node).css({
                    opacity: 1,
                    "background-size": "auto 100%",
                });
            });
        }),
        (n.prototype.initDom = function() {
            for (
                var t,
                    e,
                    i,
                    n,
                    s,
                    a,
                    h,
                    p,
                    d,
                    u,
                    l,
                    g = this.options,
                    m = this.groupNode,
                    f = this._grids,
                    v = this.groupW,
                    y = (this.groupH, g.hN * g.wN),
                    b = this.gridW,
                    w = this.gridH,
                    _ = this.kphi,
                    x = "",
                    k = 0; y > k; k++
            )
                (s = _ * k),
                (e = o(v * r())),
                (i = o(v * r())),
                (n = o(v * r())),
                (t = "grid_" + k + "_" + o(1e3 * r())),
                f.push({ id: t }),
                (x +=
                    '<div class="grid-node" id="' +
                    t +
                    '" style="width:' +
                    b +
                    'px;"></div>');
            m.html(x);
            for (var k = 0; y > k; k++) {
                (a = f[k]),
                (t = a.id),
                (h = a.node = m.find("#" + t)),
                (p = h.width()),
                (d = h.height()),
                (u = 2 * r() * c),
                (l = 2 * r() * c),
                (e = 4 * r() * v),
                (i = 4 * r() * v),
                (n = 4 * r() * v);
                var L =
                    "translateX(" +
                    e +
                    "px) translateY(" +
                    i +
                    "px) translateZ(" +
                    n +
                    "px) rotateX(0deg) rotateY(" +
                    u +
                    "deg) rotateZ(" +
                    l +
                    "deg)";
                h.css({
                    left: -b / 2,
                    top: -w / 2,
                    transform: L,
                    "-webkitTransform": L,
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out, background-color 0.5s ease-in-out, color " +
                        (1 + 0.5 * r()) +
                        "s ease-in-out",
                });
            }
        }),
        (n.prototype.genTransform = function() {}),
        (n.prototype.updateText = function() {
            var t = this.options,
                e = t.text,
                i = this._grids;
            for (var n in i) {
                var o = i[n];
                o.node.text(e(o._data));
            }
        }),
        (n.prototype.highLights = function(t) {
            if (t) {
                this.options.highLightTag = t;
                var e = this;
                this.each(function(t) {
                    setTimeout(function() {
                        e.highLight(t);
                    }, 500 * Math.random());
                });
            }
        }),
        (n.prototype.highLight = function(t) {
            var e,
                i = this.options,
                n = i.highLightTag,
                o = t._data,
                r = t.node,
                s = o.tags;
            for (var a in s)
                if (((e = s[a]), e === n))
                    return r.css({
                        background: "url(" + this.imageURL + ")",
                        border: "solid 1px " + i.bgColorHover,
                        color: i.bgColorHover,
                        "background-size": "auto 100%",
                    });
            r.css({
                background: "transparent",
                color: i.bgColor,
                border: "solid 1px " + i.bgColor,
            });
        }),
        (n.prototype.each = function(t) {
            var e = this._grids;
            for (var i in e) {
                var n = e[i];
                n && t(n);
            }
        }),
        (n.prototype.update = function(t) {
            t = this.time = t || this.time || 0;
            for (
                var e,
                    i,
                    n,
                    r,
                    c,
                    h,
                    p,
                    d,
                    u,
                    l,
                    g,
                    m = this.options,
                    f =
                    (m.bgColorHover,
                        m.bgColor,
                        this.groupNode,
                        this.groupW),
                    v = this.groupH,
                    y = (this.gridW, this.gridH, this.kphi),
                    b = (this._data, this._grids),
                    w = b.length,
                    _ = t * y,
                    x = this.dh,
                    k = t * x,
                    L = 0; w > L; L++
            ) {
                (g = b[L]),
                (h = L / w),
                window.clearTimeout(g.loopid),
                    (n = y * L + _),
                    (d = o((180 * n) / Math.PI)),
                    (i = (L * x + k) % v),
                    (e = o(c + c * a(n))),
                    (l = o(c * s(n))),
                    (r = l - 650),
                    (c = f / 2),
                    (u = (l / c) * 1 + 1),
                    (p =
                        "translateX(" +
                        e +
                        "px) translateY(" +
                        i +
                        "px) translateZ(" +
                        r +
                        "px) rotateX(0deg) rotateY(" +
                        d +
                        "deg) rotateZ(0deg)");
                var C = { opacity: u, transform: p, "-webkitTransform": p },
                    A = this;
                !(function(t, e) {
                    t.loopid = setTimeout(function() {
                        t.node.css(e), A.highLight(t);
                    }, 500 * (h + 0.2 * Math.random()));
                })(g, C);
            }
        }),
        (n.prototype.initSelectors = function() {
            var t,
                e = this.options.highLightTag,
                i = this.getAllTags(),
                n = (this.selectorContainer = $(".tag-container").empty());
            for (var o in i)
                (t = $('<div class="tag-selector">' + o + "</div>")),
                o === e && t.addClass("tag-selector-active"),
                this.initEventSelector(t),
                n.append(t);
        }),
        (n.prototype.initEventSelector = function(t) {
            var e = this,
                i = this.selectorContainer;
            t.on("touchstart mousedown", function() {
                var n = t.text();
                e.highLights(n),
                    i
                    .find(".tag-selector")
                    .removeClass("tag-selector-active"),
                    t.addClass("tag-selector-active");
            });
        }),
        (n.prototype.getAllTags = function() {
            var t = {};
            return (
                this.each(function(e) {
                    var i = e.node,
                        n = i[0]._data;
                    if (n) {
                        var o = n.tags;
                        for (var r in o) {
                            var s = o[r];
                            t[s] = !0;
                        }
                    }
                }),
                t
            );
        }),
        (t.exports = n);
    },
    function(t, e) {
        function i() {}
        (i.extend = function(t, e) {
            "function" == typeof t || e ?
                t || (t = function() {}) :
                ((e = t), (t = function() {}));
            var i,
                n,
                o = this;
            if (
                (Object.create ?
                    (i = Object.create(o.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                        },
                    })) :
                    ((i = new o()), (i.constructor = t)),
                    e)
            )
                for (n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
            return (
                (i._super = o),
                (t.prototype = i),
                (t.extend = arguments.callee),
                t
            );
        }),
        (t.exports = i);
    },
    function(t, e, i) {
        function n() {}
        var o = i(3),
            r =
            Array.isArray ||
            function(t) {
                return "[object Array]" ===
                    Object.prototype.toString.call(t) ?
                    !0 :
                    !1;
            };
        (n = o.extend(n)), (t.exports = n), (e.EventEmitter = n);
        var s = 20;
        (n.prototype.setMaxListeners = function(t) {
            this._events || (this._events = {}), (this._maxListeners = t);
        }),
        (n.prototype.emit = function() {
            var t = arguments[0];
            if (
                "error" === t &&
                (!this._events ||
                    !this._events.error ||
                    (r(this._events.error) && !this._events.error.length))
            )
                throw arguments[1] instanceof Error ?
                    arguments[1] :
                    new Error("Uncaught, unspecified 'error' event.");
            if (!this._events) return !1;
            var e = this._events[t];
            if (!e) return !1;
            if ("function" == typeof e) {
                switch (arguments.length) {
                    case 1:
                        e.call(this);
                        break;
                    case 2:
                        e.call(this, arguments[1]);
                        break;
                    case 3:
                        e.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        for (
                            var i = arguments.length,
                                n = new Array(i - 1),
                                o = 1; i > o; o++
                        )
                            n[o - 1] = arguments[o];
                        e.apply(this, n);
                }
                return !0;
            }
            if (r(e)) {
                for (
                    var i = arguments.length, n = new Array(i - 1), o = 1; i > o; o++
                )
                    n[o - 1] = arguments[o];
                for (var s = e.slice(), o = 0, i = s.length; i > o; o++)
                    s[o].apply(this, n);
                return !0;
            }
            return !1;
        }),
        (n.prototype.addListener = function(t, e) {
            if ("function" != typeof e)
                throw new Error(
                    "addListener only takes instances of Function"
                );
            if (
                (this._events || (this._events = {}),
                    this.emit("newListener", t, e),
                    this._events[t] ?
                    r(this._events[t]) ?
                    this._events[t].push(e) :
                    (this._events[t] = [this._events[t], e]) :
                    (this._events[t] = e),
                    r(this._events[t]) && !this._events[t].warned)
            ) {
                var i;
                (i =
                    void 0 !== this._maxListeners ? this._maxListeners : s),
                i &&
                    i > 0 &&
                    this._events[t].length > i &&
                    ((this._events[t].warned = !0),
                        console.error(
                            "Possible mem-leak detected. event[" +
                            t +
                            "] %d listeners added. Use emitter.setMaxListeners() to increase limit.",
                            this._events[t].length
                        ),
                        console.trace());
            }
            return this;
        }),
        (n.prototype.on = n.prototype.addListener),
        (n.prototype.once = function(t, e) {
            function i() {
                n.removeListener(t, i), e.apply(this, arguments);
            }
            if ("function" != typeof e)
                throw new Error(".once only takes instances of Function");
            var n = this;
            return (i.listener = e), n.on(t, i), this;
        }),
        (n.prototype.removeListener = function(t, e) {
            if ("function" != typeof e)
                throw new Error(
                    "removeListener only takes instances of Function"
                );
            if (!this._events || !this._events[t]) return this;
            var i = this._events[t];
            if (r(i)) {
                for (var n = -1, o = 0, s = i.length; s > o; o++)
                    if (
                        i[o] === e ||
                        (i[o].listener && i[o].listener === e)
                    ) {
                        n = o;
                        break;
                    }
                if (0 > n) return this;
                i.splice(n, 1), 0 == i.length && delete this._events[t];
            } else
                (i === e || (i.listener && i.listener === e)) &&
                delete this._events[t];
            return this;
        }),
        (n.prototype.removeAllListeners = function(t) {
            return 0 === arguments.length ?
                ((this._events = {}), this) :
                (t &&
                    this._events &&
                    this._events[t] &&
                    (this._events[t] = null),
                    this);
        }),
        (n.prototype.listeners = function(t) {
            return (
                this._events || (this._events = {}),
                this._events[t] || (this._events[t] = []),
                r(this._events[t]) || (this._events[t] = [this._events[t]]),
                this._events[t]
            );
        }),
        (n.prototype.off = n.prototype.removeAllListeners),
        (n.prototype.on = n.prototype.addListener),
        (n.prototype.fire = n.prototype.fireEvent = n.prototype.emit),
        (n.prototype.clearAllEventListeners =
            n.prototype.removeAllListeners);
    },
    function(t, e) {
        function i(t, e) {
            var n;
            for (var o in t)
                (n = t[o]), n && "object" == typeof n && (e(o, n, t), i(n, e));
        }

        function n(t) {
            return null === t || void 0 === t || isNaN(t);
        }

        function o(t) {
            var e,
                i,
                n,
                o,
                r = Array.prototype.slice.call(arguments, 1);
            for (i = 0, n = r.length; n > i; i++) {
                o = r[i] || {};
                for (e in o) o.hasOwnProperty(e) && (t[e] = o[e]);
            }
            return t;
        }

        function r(t) {
            var e = Array.isArray(t) ? [] : {};
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e;
        }

        function s(t) {
            var e = Array.isArray(t) ? [] : {};
            return c(e, t);
        }

        function a(t) {
            return t ?
                u.HTMLElement && t instanceof u.HTMLElement ?
                !1 :
                u.HTMLElement && t[0] && t[0] instanceof HTMLElement ?
                !1 :
                t.globalCompositeOperation ?
                !1 :
                !0 :
                !1;
        }

        function c(t, e, i, n) {
            var o,
                e,
                n = n || 0,
                h = i ? t : r(t);
            if (n++ >= l) return console.log("层数过深, 全部继承"), e;
            for (o in e)
                if (e.hasOwnProperty(o)) {
                    var p = e[o],
                        d = t[o];
                    if (p === d) continue;
                    if (void 0 === p) continue;
                    if (d && "object" == typeof d && "object" == typeof p) {
                        if (!a(p)) {
                            h[o] = p;
                            continue;
                        }
                        if (Array.isArray(d) !== Array.isArray(p)) {
                            "object" == typeof p && !i && a(p) && (p = s(p)),
                                (h[o] = p);
                            continue;
                        }
                        h[o] = c(d, p, i, n);
                        continue;
                    }
                    "object" == typeof p && !i && a(p) && (p = s(p)),
                        (h[o] = p);
                }
            return h;
        }

        function h(t, e) {
            return c(t, e, !1);
        }

        function p(t, e) {
            return c(t, e, !1);
        }

        function d(t, e, i, n, o) {
            return "function" == typeof t ? t(e, i, n, o) : t;
        }
        var u = this,
            l = 2;
        t.exports = {
            merge: o,
            isNone: n,
            traver: i,
            deepMerge: c,
            deepMergeDirect: p,
            deepMergeCopy: h,
            clone: r,
            deepClone: s,
            switchValue: d,
        };
    },
]);