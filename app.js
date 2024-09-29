const intro = document.querySelector('.intro');
const video = intro.querySelector('video');


const controller = new ScrollMagic.Controller();

//scene 
const scene = new ScrollMagic.Scene({
duration: 4700,
triggerElemnt: intro,
triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//animation
let accelamount = 1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay  += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
}, 33.3 /* 1000/30(fps) */);


