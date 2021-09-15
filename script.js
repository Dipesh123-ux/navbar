
var menu = document.getElementById("show");
var open = document.getElementById("op");
var close = document.getElementById("cl");


open.addEventListener("click",()=>{
    menu.style.right = "-15%";
})
close.addEventListener("click",()=>{
    menu.style.right = "-65%";
})