!(function (e) {
  var t = {};
  function o(r) {
    if (t[r]) return t[r].exports;
    var s = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
  }
  (o.m = e),
    (o.c = t),
    (o.d = function (e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          o.d(
            r,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return r;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 0));
})([
  function (e, t, o) {
    "use strict";
    o.r(t);
    var r = () => {
      $(document).ready(function () {
        $(".games__list").slick({
          infinite: !0,
          slidesToShow: 4,
          swipeToSlide: !0,
          touchMove: !0,
          centerMode: !0,
          centerPadding: "0",
          arrows: !1,
          responsive: [
            {
              breakpoint: 1400,
              settings: {
                infinite: !0,
                slidesToShow: 3,
                swipeToSlide: !0,
                touchMove: !0,
                centerMode: !0,
                arrows: !1,
                centerPadding: "0",
              },
            },
            {
              breakpoint: 800,
              settings: {
                infinite: !0,
                slidesToShow: 2,
                variableWidth: !0,
                swipeToSlide: !0,
                touchMove: !0,
                arrows: !1,
                centerMode: !1,
              },
            },
          ],
        });
      });
    };
    var s = () => {
      const e = document.querySelector(".hamburger"),
        t = e.querySelectorAll(".hamburger__item"),
        o = document.querySelector(".menu-mobile"),
        r = document.querySelectorAll(".menu__link"),
        s = document.querySelector(".header"),
        a = document.querySelector(".modal_menu");
      r.forEach((e) => {
        e.addEventListener("click", (e) => {
          o.classList.remove("menu-mobile_active"),
            (document.body.style = "overflow: auto;"),
            s.classList.remove("header_active"),
            t[1].classList.remove("hide"),
            t[0].classList.remove("hamburger__item_left"),
            t[2].classList.remove("hamburger__item_right"),
            a.classList.remove("modal_menu_active");
        });
      }),
        e.addEventListener("click", (e) => {
          o.classList.contains("menu-mobile_active")
            ? ((document.body.style = "overflow: auto;"),
              o.classList.remove("menu-mobile_active"),
              s.classList.remove("header_active"),
              t[1].classList.remove("hide"),
              t[0].classList.remove("hamburger__item_left"),
              t[2].classList.remove("hamburger__item_right"),
              a.classList.remove("modal_menu_active"))
            : (o.classList.add("menu-mobile_active"),
              (document.body.style = "overflow: hidden;"),
              s.classList.add("header_active"),
              t[1].classList.add("hide"),
              t[0].classList.add("hamburger__item_left"),
              t[2].classList.add("hamburger__item_right"),
              a.classList.add("modal_menu_active"));
        });
    };
    var a = () => {
      const e = document.querySelectorAll(".games__button"),
        t = document.querySelector(".games__field"),
        o = document.querySelector(".games__close"),
        r = {
          fortune:
            "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=en&cur=EUR&gameSymbol=vs243fortune&websiteUrl=http%3A%2F%2Fdemogamesfree.pragmaticplay.net",
          wolf:
            "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=en&cur=EUR&gameSymbol=vs25wolfgold&websiteUrl=http%3A%2F%2Fdemogamesfree.pragmaticplay.net",
          pandagold:
            "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=en&cur=EUR&gameSymbol=vs25pandagold&websiteUrl=http%3A%2F%2Fdemogamesfree.pragmaticplay.net",
        },
        s = document.createElement("iframe");
      s.classList.add("games__frame"),
        e.forEach((e) => {
          e.addEventListener("click", (e) => {
            const o = e.target.getAttribute("data-game");
            (s.src = r[o]),
              (s.allow = "fullscreen; autoplay"),
              t.classList.contains("active") &&
                (console.log(5),
                document.querySelector(".games__frame").remove(),
                t.classList.remove("hide"),
                t.classList.add("active"),
                t.append(s)),
              t.classList.remove("hide"),
              t.classList.add("active"),
              t.append(s);
          });
        }),
        o.addEventListener("click", () => {
          s.remove(), t.classList.add("hide"), t.classList.remove("active");
        });
    };
    try {
      r();
    } catch (e) {}
    try {
      a();
    } catch (e) {}
    s();
  },
]);
