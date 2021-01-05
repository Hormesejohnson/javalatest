var arr=[1,2,3,4,5]
var element=5
var flag=0
var low=0
var upper=arr.length-1
while(low<upper){
    var total =arr[low]+arr[upper]

    if(total>element){
    upper=upper-1
    }
    else if(total<element){
        low=low+1
    }
    else if((arr[low]+arr[upper])==element)
    {
        console.log("pair is "+arr[low],arr[upper])
       break
    }
    


}