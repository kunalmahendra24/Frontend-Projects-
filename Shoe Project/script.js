var tl =gsap.timeline();
gsap.set(".a",{opacity:0,y:10})
gsap.set("#right img",{opacity:0,scale:2.00})
tl
.from("#left",{
    width:0,
    ease:Expo.InOut,
    duration:1.5
})
.from("#right",{
    width:0,
    ease:Expo.InOut,
    duration:1.5
})
.to(".a",{
    delay:-1.5,
    stagger:.1,
    opacity:1,
    y:0,
    ease:Expo.InOut,
    duration:2
})
.to("#right img",{
    delay:-1,
    opacity:1,
    scale:1,
    ease:Expo.InOut,
    duration:1.5
})