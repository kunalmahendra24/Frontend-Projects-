

var menu =document.querySelector("#nav-prt i")
var full =document.querySelector("#full-scr-nav")

var flag = 0
    menu.addEventListener("click",function(){
        if(flag==0){
        full.style.top="0%"
        document.querySelector("#nav h2").style.color="#222"
        document.querySelector("#nav h3").style.color="#222"
        document.querySelector("#nav i").style.color="#222"
        document.querySelector("#page1 h3").style.display="none"
        document.querySelector("#page1 h2").style.display="none"
        document.querySelector("#page1 h1").style.display="none"
        flag = 1
    }
else{
    full.style.top="-100%"
        document.querySelector("#nav h2").style.color="#dadada"
        document.querySelector("#nav h3").style.color="#dadada"
        document.querySelector("#nav i").style.color="#dadada"
        document.querySelector("#page1 h3").style.display="initial"
        document.querySelector("#page1 h2").style.display="initial"
        document.querySelector("#page1 h1").style.display="initial"
        flag =0
}})

var tl =gsap.timeline()
tl.from("#nav h2",{
    y:40,
    duration:0.7,
    opacity:0,
})
.from("#nav h3",{
    y:40,
    duration:0.7,
    opacity:0,
})
.from("#nav i",{
    y:40,
    duration:0.7,
    opacity:0,
})
.from("#page1 h1",{
    x:70,
    duration:0.7,
    opacity:0
})
.from("#page1 h2",{
    y:40,
    duration:0.7,
    opacity:0,
})
.from("#page1 h3",{
    y:40,
    duration:0.7,
    opacity:0,
})
gsap.to("#page2 img",{
    scale:0.98,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"body",
        start:"top 80%",
        end:"top 0",
        scrub:3
    }
})
gsap.from("#page2 h1",{
    rotateX:"90deg",
    opacity:0,
    scrollTrigger:{
        trigger:"#h11",
        scroller:"body",
        start:"top 70%",
        end:"top 60%",
        scrub:2
    }
})





