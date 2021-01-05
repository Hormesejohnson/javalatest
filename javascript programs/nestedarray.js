var arr=[
    ["hormese",'20','2500'],
    ["shaju",'21','041'],
    ["mari",'300','23000'],
]
var total=0

for(let data of arr){
    total=total+Math.floor(data[2])
    
}
console.log(total)
for(let data of arr){
    console.log(data[0],data[2])
}
