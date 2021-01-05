var arr=[
    ["hormese","mca",'2500'],
    ["akhil","bca",'2000'],
    ["reji","bca",'4000']
]
var count=0
var total=0
for(let data of arr){
    console.log(data[0].toUpperCase())
    if(data[1]=="bca"){
        count=count+1
    }
}
console.log("no of bca students="+count)
for(let data of arr){

    if(data[1]=="bca"){
       total=total+Math.floor(data[2])
    }
}
    console.log(total)
    for(let data of arr){
    console.log(data[0].toUpperCase())
    
    }
    for(let data of arr){
        if(data[2]>'2000'){
            console.log(data[0],data[1])
        }
    }