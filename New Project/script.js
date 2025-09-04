const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})
var videocon =document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1,
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-70,
        top:dets.y-80,
    })
})
gsap.from("#page1 h1",{
    opacity:0,
    y:100,
    duration:0.6,
    stagger:0.4,
    delay:0.5
})
gsap.from("#video-container",{
    y:100,
    opacity:0,
    duration:0.9,
    delay:0.9
})

