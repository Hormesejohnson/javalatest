var num1=40
var num2=10
var num3=30
if ((num1>num2)&(num1>num3))
{
    if(num2>num3)
    console.log("num2 is second largest number")

    else{
        console.log("num3 is second largest")
    }
}
else if((num2>num1)&(num2>num3))
{
if(num1>num3)
{
    console.log("num1 is second largesest")
}
else{
    console.log("num3 is second largest")
}
}
else if((num3>num1)&(num3>num2))
{
    if(num2>num1){
        console.log("num2 is second largesrt")
    }
    else{
        console.log("num1 is second largest")
    }

}
