// Animated Hamburger Icon & Sticky Header
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("change");
    }),
        $(".navbar").sticky({ topSpacing: 0, zIndex: 500 });
});

// Mobile Meny Toggle Effect
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".mobile-menu").toggleClass("menu-visible");
        $(".navbar").toggleClass("navbar-shadow");
        $("main").toggleClass("main-hidden");
        $("footer").toggleClass("menu-overflow1");
    });
});

// GSAP Banner Text Animation
var banner = gsap.timeline();

banner.from(".banner-content h1", {
    duration: 1.5,
    autoAlpha: 0,
    delay: 0.4,
}),
    banner.from(
        ".banner-content h1 span",
        {
            duration: 1.5,
            autoAlpha: 0,
        },
        "-=0.8"
    );

// GSAP Single Box 1 Image Animation
gsap.registerPlugin(ScrollTrigger);

var boximg1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-box .single-box-image",
        start: "-200 50%",
        end: "50% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boximg1.from(".first-box .single-box-image", {
    duration: 0.6,
    x: -100,
    autoAlpha: 0,
});

// GSAP Single Box 2 Image Animation
gsap.registerPlugin(ScrollTrigger);

var boximg2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-box .single-box-image",
        start: "-200 50%",
        end: "50% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boximg2.from(".second-box .single-box-image", {
    duration: 0.6,
    x: 100,
    autoAlpha: 0,
});

// GSAP Single Box 3 Image Animation
gsap.registerPlugin(ScrollTrigger);

var boximg1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".last-box .single-box-image",
        start: "-200 50%",
        end: "50% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boximg1.from(".last-box .single-box-image", {
    duration: 0.6,
    x: -100,
    autoAlpha: 0,
});

// GSAP Center Details Text Animation
gsap.registerPlugin(ScrollTrigger);

var centertext = gsap.timeline({
    scrollTrigger: {
        trigger: ".center-details-area",
        start: "0 65%",
        end: "100% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

centertext.from(".center-details-content .learn-btn a", {
    duration: 0.8,
    autoAlpha: 0,
    delay: 0.2,
});
// GSAP ANIMATION END

// CountUp Define Effect
jQuery(document).ready(function ($) {
    $(".counter").counterUp({
        delay: 10,
        time: 1300000, // You Can Change This "time" Value for customize Speed
    });
});

// CounterUp Effect JS Code
(function (e) {
    "use strict";
    e.fn.counterUp = function (t) {
        var n = e.extend({ time: 400, delay: 10 }, t);
        return this.each(function () {
            var t = e(this),
                r = n,
                i = function () {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || []).length : 0;

                    // You Can Change This f >= Value for customize Speed
                    for (var f = n; f >= 129000; f--) {
                        var l = parseInt((i / n) * f);
                        u && (l = parseFloat((i / n) * f).toFixed(a));
                        if (s) while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l);
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function () {
                        t.text(t.data("counterup-nums").shift());
                        if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null);
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay);
                };
            t.waypoint(i, { offset: "100%", triggerOnce: !0 });
        });
    };
})(jQuery);
