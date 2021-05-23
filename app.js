let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to(".girl", 3, { y: -200 })
    .to(".rock", 3, { y: -300 }, "-=3")
    .to(".main-title", 3, { y: -100 }, "-=3")
    .fromTo(".bg1", { y: 0 }, { y: 0 }, "-=3")
    .to(".content", 3, { top: "0%" }, "-=3")
    .fromTo(".content-images", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "250%",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);
