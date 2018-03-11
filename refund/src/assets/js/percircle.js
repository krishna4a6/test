! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports && "object" == typeof module ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t, e) {
    "use strict";
    t.fn.percircle = function(e) {
        var a = {
            animate: !0
        };
        e || (e = {}), t.extend(e, a);
        var s = 3.6;
        return this.each(function() {
            function a() {
                if (b -= 1, b > 30 && c.addClass("gt50"), b < 30 && c.removeClass("gt50"), i(), b <= 0) return n(), void c.html("<span>" + C + "</span>")
            }

            function o() {
                y = setInterval(a, 1e3)
            }

            function n() {
                clearInterval(y)
            }

            function d() {
                n(), b = e.secs, i(), o()
            }

            function i() {
                c.html("<span>" + b + "</span>"), t('<div class="slice"><div class="bar" ' + l + '></div><div class="fill" ' + l + "></div></div>").appendTo(c);
                var e = 6 * b;
                t(".bar", c).css({
                    "-webkit-transform": "rotate(" + e + "deg)",
                    "-moz-transform": "rotate(" + e + "deg)",
                    "-ms-transform": "rotate(" + e + "deg)",
                    "-o-transform": "rotate(" + e + "deg)",
                    transform: "rotate(" + e + "deg)"
                })
            }
            var c = t(this),
                l = "",
                f = function(t, e) {
                    c.on("mouseover", function() {
                        t.children("span").css("color", e)
                    }), c.on("mouseleave", function() {
                        t.children("span").attr("style", "")
                    })
                };
            c.hasClass("percircle") || c.addClass("percircle"), "undefined" != typeof c.attr("data-animate") && (e.animate = "true" == c.attr("data-animate")), e.animate && c.addClass("animate"), "undefined" != typeof c.attr("data-color") ? (e.progressBarColor = c.attr("data-color"), l = "style='border-color: " + e.progressBarColor + "'", f(t(this), e.progressBarColor)) : "undefined" != typeof e.progressBarColor && (l = "style='border-color: " + e.progressBarColor + "'", f(t(this), e.progressBarColor));
            var m = c.attr("data-percent") || e.percent || 0,
                p = c.attr("data-perclock") || e.perclock || 0,
                g = c.attr("data-perdown") || e.perdown || 0;
            if (m) {
                m > 50 && c.addClass("gt50");
                //var v = c.attr("data-text") || e.text || m + "%";
				 var v = c.attr("data-text") || e.text || m + "";
                t("<span>" + v + "</span>").appendTo(c), t('<div class="slice"><div class="bar" ' + l + '></div><div class="fill" ' + l + "></div></div>").appendTo(c), m > 50 && t(".bar", c).css({
                    "-webkit-transform": "rotate(180deg)",
                    "-moz-transform": "rotate(180deg)",
                    "-ms-transform": "rotate(180deg)",
                    "-o-transform": "rotate(180deg)",
                    transform: "rotate(180deg)"
                });
                var u = s * m;
                setTimeout(function() {
                    t(".bar", c).css({
                        "-webkit-transform": "rotate(" + u + "deg)",
                        "-moz-transform": "rotate(" + u + "deg)",
                        "-ms-transform": "rotate(" + u + "deg)",
                        "-o-transform": "rotate(" + u + "deg)",
                        transform: "rotate(" + u + "deg)"
                    })
                }, 0)
            } else if (p) c.hasClass("perclock") || c.addClass("perclock"), setInterval(function() {
                var e = new Date,
                    a = r(e.getHours()) + ":" + r(e.getMinutes()) + ":" + r(e.getSeconds());
                c.html("<span>" + a + "</span>"), t('<div class="slice"><div class="bar" ' + l + '></div><div class="fill" ' + l + "></div></div>").appendTo(c);
                var s = e.getSeconds();
                0 === s && c.removeClass("gt50"), s > 30 && (c.addClass("gt50"), t(".bar", c).css({
                    "-webkit-transform": "rotate(180deg);scale(1,3)",
                    "-moz-transform": "rotate(180deg);scale(1,3)",
                    "-ms-transform": "rotate(180deg);scale(1,3)",
                    "-o-transform": "rotate(180deg);scale(1,3)",
                    transform: "rotate(180deg);scale(1,3)"
                }));
                var o = 6 * s;
                t(".bar", c).css({
                    "-webkit-transform": "rotate(" + o + "deg)",
                    "-moz-transform": "rotate(" + o + "deg)",
                    "-ms-transform": "rotate(" + o + "deg)",
                    "-o-transform": "rotate(" + o + "deg)",
                    transform: "rotate(" + o + "deg)"
                })
            }, 1e3);
            else if (g) {
                var b = c.attr("data-secs") || e.secs,
                    C = c.attr("data-timeUpText") || e.timeUpText,
                    h = c[0].hasAttribute("data-reset") || e.reset;
                C.length > 8 && (C = "the end");
                var y;
                h && c.on("click", d), o()
            }
        })
    };
    var r = function(t) {
        return t < 10 ? "0" + t : t
    }
});