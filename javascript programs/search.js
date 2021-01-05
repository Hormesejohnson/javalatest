var arr=[1,3,8,6,7,10]
var flag=0
var search=0

for(let data of arr){
    if(data==search){
    flag=flag+1
    }
}
if(flag==1){
    console.log("element is present")
} 
else{
    console.log("not present")
}  
