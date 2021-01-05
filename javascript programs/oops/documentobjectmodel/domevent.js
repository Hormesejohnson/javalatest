var hd=document.querySelector("#clk")
function change(){
clk.textContent="cliked"
clk.style.color="red"

}
clk.addEventListener("click",change)
var idr=document.querySelector("#dbclk")
idr.addEventListener("dblclick",()=>{
    idr.textContent="doublecliked"
    idr.style.color="green"
})
var ice=document.querySelector("#mou")
ice.addEventListener("mouseover",()=>{
ice.textContent="mouseoverme"
ice.style.color="gray"
})
ice.addEventListener("mouseout",()=>{
    ice.textContent="mouse outer"
    ice.style.color="black"

})
