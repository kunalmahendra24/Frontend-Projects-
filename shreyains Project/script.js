
var p =document.querySelector("#fullscreen-nav")
var but=document.querySelector("#navbar #nav1 i")
var k=document.querySelector("#navbar")
var y=document.querySelector("#fullscreen-nav i")
but.addEventListener("click",function(){
   p.style.top="0%"
   k.style.top="-100vh"
})
y.addEventListener("click",function(){
   p.style.top="-100vh"
   k.style.top="0%"
})