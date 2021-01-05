//var ur=document.URL
//alert(ur)
var tag=document.getElementsByTagName("h1")
for(tg of tag){
    tg.style.color="red"
}
var lis=document.getElementsByTagName("li")
for(li of lis){
    li.style.color="green"
}
var ho=document.getElementById("one")
ho.style.color="purple"
var hos=document.getElementsByClassName("raj")
for(tc of hos){
    
    tc.style.color="yellow"
}
var hd=document.querySelector("#wo")
hd.style.color="lightblue"
var hdo=document.querySelectorAll(".raj")
for(hs of hdo){
    hs.style.color="black"
}
var gh=document.querySelectorAll("li")
gh.forEach(ld=>ld.style.color="violet")
var nh=document.querySelector("#wo")
nh.innerHTML="<em>document my javascript program</em>"
alert(ho.textContent)