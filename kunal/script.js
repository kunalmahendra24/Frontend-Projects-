var btn = document.querySelector("#main #menu i");
var ovrl = document.querySelector("#main #fsnav");
var clr = document.querySelector("#main #nav");
var flag = 0;
var shoe = [
    {
        src:"./yeezy01.png",
        nam:"YZY FOAM RNR ADULTS",
        price:"8999.00"
    },
    {
        src:"./yeezy02.png",
        nam:"YEEZY BOOST 700 V2",
        price:"23,999.00"
    },
    {
        src:"./yeezy03.png",
        nam:"YEEZY BOOST 700",
        price:"21,999.00"
    },
    {
        src:"./yeezy04.png",
        nam:"YEEZY 500 HIGH",
        price:"21,999.00"
    },
]
btn.addEventListener("click",function(){
    if(flag==0){
    btn.setAttribute("class","ri-close-large-fill");
    ovrl.style.top="0%";
    flag=1;
    }
    else{
    btn.setAttribute("class","ri-menu-3-line");
    ovrl.style.top="-100%";
    clr.style.color="#dadada"
    flag=0;
    }
})
var x = ["Shoes","Athleisure","Men","Women"];
function generateSearch(){
var srchbar = document.querySelector("#nav #navRight #srchbar input");
var idx = Math.floor(Math.random()*4);
srchbar.setAttribute("placeholder",`${x[idx]}`)
}
setInterval(generateSearch,1000);
var svg = document.querySelector("#svg");
var tl = gsap.timeline();
var load = document.querySelector("#loading");
var pg3btn = document.querySelector("#pg3btn");
var crdpg3 = `<div id = "crdpg3nav"><i class="ri-close-large-fill"></i></div>`;
shoe.forEach(function(sh,idx){
    crdpg3 += `<div class = "crdpg3" id = "${idx}">
    <i class="ri-heart-3-fill"></i>
    <img src="${sh.src}" alt="">
    <div class = "crdpg3Text">
    <h2>${sh.nam}</h2>
    <h3>${sh.price}</h3>
    <button type = "button name ="buton">BUY NOW</button>
    </div>
    </div>`
});
document.querySelector("#pg3cards").innerHTML=crdpg3;
var kholna = 1;
pg3btn.addEventListener("click",function sl(){
    document.querySelector("#yeezyImg").style.display="none";
    document.querySelector("#cardContainer").style.opacity = 1;
    document.querySelector("#cardContainer").style.pointerEvents = 
    "initial";
    document.querySelector("#pg3btn").style.opacity=0;
    document.querySelector(".ellipse").style.opacity=0;
    kholna = 0;
})
document.querySelector("#crdpg3nav i").addEventListener("click",function (){
    document.querySelector("#cardContainer").style.opacity = 0;
    document.querySelector("#cardContainer").style.pointerEvents = 
    "none";
    document.querySelector("#yeezyImg").style.display="block";
    document.querySelector("#pg3btn").style.opacity=1;
    document.querySelector(".ellipse").style.opacity=1;
    kholna = 1;
})
document.querySelectorAll(".crdpg3").forEach(elem => {
    elem.addEventListener("mouseover",function(dets){
        //var target1 = document.querySelectorAll(".crdpg3")[2];
        var mx = dets.layerX ;
        var my = dets.layerY ;
        var offsetX = (mx/100<=2? (mx/100)-4 : (mx/100)+0.31);
        var offsetY = (my/100<=3? (my/100)-6 : (my/100)-0.17);
        elem.style.transform = `perspective(1200px) rotateY(${offsetX*3}deg) rotateX(${-offsetY*4}deg)`
    })
    elem.addEventListener("mouseleave",function(dets){
        //var target1 = document.querySelectorAll(".crdpg3")[2];
        elem.style.transform = "rotateX(0deg) rotateY(0deg)";
    })
});
/*document.querySelectorAll(".crdpg3").addEventListener("mouseover",function(dets){
    var target1 = document.querySelectorAll(".crdpg3")[2];
    var mx = dets.layerX ;
    var my = dets.layerY ;
    var offsetX = (mx/100<=2? (mx/100)-4 : (mx/100)+0.31);
    var offsetY = (my/100<=3? (my/100)-6 : (my/100)-0.17);
    target1.style.transform = `perspective(1200px) rotateY(${offsetX*3}deg) rotateX(${-offsetY*4}deg)`
})
document.querySelectorAll(".crdpg3").addEventListener("mouseleave",function(dets){
    var target1 = document.querySelectorAll(".crdpg3")[2];
    target1.style.transform = "rotateX(0deg) rotateY(0deg)";
})*/

gsap.set("#page1 #textfs h2",{
    opacity:0
})
tl.delay(1)
tl.to("#loading",{
   opacity:0
})
.call(function rem(){
    load.remove();
})
.to("#page1 #textfs h1",{
    opacity:1,
    y:120,
    duration:0.8
})
.to("#page1 #textfs h1",{
    opacity:0,
    duration:0.3
})
.to("#page1 #textfs h2",{
    opacity:1,
    scale:1,
    duration:0.4,
    delay: -0.1,
})
.to("#page1 #textfs h2",{
    opacity:0,
    delay:0.6,
})
.call(function rem1(){
    document.querySelector("#textfs").remove();
})
.call(function(){
    document.querySelector("#contentPage1").style.opacity="1";
    document.querySelector("#contentPage1").style.opacity="1";
})
gsap.from("#page2 #page2img",{
    opacity:0,
    scale:0.01,
    y:150,
    borderRadius:"200%",
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #page2img",
        scroller:"body",
        start:"top 95%",
        end:"top 80%",
        scrub:1,
    }
})
gsap.to("#arrow",{
            y:-50,
            opacity:1,
            ease: "power2.in",
            scrollTrigger:{
                trigger:"#arrow",
                start:"top 50%",
                end:"top 30%",
                scroller:"body",
                scrub:1
            }
})
gsap.to("#arrow",{
    opacity:0,
    y:100,
    duration:0.1,
    ease: "power2.in",
    scrollTrigger:{
        trigger:"#arrow",
        start:"bottom 50%",
        end:"bottom 40%",
        scroller:"body",
        scrub:0.5
    }
})
gsap.to("#page2",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#page2 #page2img",
        scroller:"body",
        start:"top 95%",
        end:"top 80%",
        scrub:1,
    }
})
    gsap.timeline().from("#yeezyImg",{
        x:150,
        opacity:0,
        ease:"expo.in",
        scrollTrigger:{
            trigger:"#yeezyImg",
            start:"center 100%",
            end:"center 90%",
            scrub:1
        }
    })
    .call(function (){
        var imgS = ["./yeezy01.png","./yeezy02.png","./yeezy03.png","./yeezy04.png"];
        var imgIterator = 0;
        setInterval(function(){
            document.querySelector("#yeezyImg").style.backgroundImage = `url(${imgS[imgIterator]})`;
            imgIterator !=3 ? imgIterator++ : imgIterator=0
        },2500)
    })
var flag = true;
var mark = gsap.to("#marquee h2",{
    xPercent:-100,
    repeat:-1,
    duration:3.91,
    ease: "none"
})
.totalProgress(0.5);
var currentScroll = 0;
var flag = true;
gsap.set("#marquee",{xPercent:-0});
window.addEventListener("scroll",function (){
    if(window.pageYOffset > currentScroll){
        flag = true;
    }
    else{
        flag = false;
    }
    gsap.to(mark,{
        timeScale: flag ? 1 : -1,
    });

    currentScroll = window.pageYOffset;
})
