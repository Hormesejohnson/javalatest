var arr=[567,2,4,6,8,7,]
arr.sort((num1,num2)=>num1-num2)
console.log(arr)


 var upper=arr.length-1

 var low=0
var search=567
var flag=0
var mid=0
while(low<=upper){
   mid=Math.floor((low+upper)/2)
    if(arr[mid]>search)
    {
        upper=mid-1
     

    }
    else if(arr[mid]<search){
        low=mid+1
    }
    else if(arr[mid]==search){
    flag++
      break;
 
   
       
    }
}

    if(flag==1){
    console.log("element found")
}
else{
    console.log("element not found")
}

    
    

