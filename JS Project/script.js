var arr=[
    {name:"Kunal Mahendra",img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",status:"Strangers"},
    {name:"Adarsh Pandey",img:"https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",status:"Strangers"},
    {name:"Abhinav Bellam",img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",status:"Strangers"},
]
function kunal(){
    var clutter="";
    arr.forEach(function(val,index){
        clutter+=`<div id="card">
                <div id="img">
                <img src="${val.img}" ></div>
                <h3>${val.name}</h3>
                <h5 id="${val.status}">${val.status}</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum delectus veritatis iure veniam?</p>
                <button class=${val.status==="Strangers" ?"red":"green"} id="${index}">${val.status==="Strangers" ? "Add friend":"Remove Friend"}</button>
            </div>`;
   })
   document.querySelector("#main").innerHTML=clutter;
}
kunal();
document.querySelector("#main")
.addEventListener("click",function(details){
    arr[details.target.id].status="Friends";
    kunal();
})