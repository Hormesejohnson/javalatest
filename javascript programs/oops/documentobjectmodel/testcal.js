function dis(num){
    var txt=document.querySelector(".result")
    txt.value+=num
}
function solve(){
    var tmt=document.querySelector(".result")
    let res=eval(tmt.value)
    tmt.value=res
}
function clean(){
   var txt=document.querySelector(".result")
   txt.value=""
}