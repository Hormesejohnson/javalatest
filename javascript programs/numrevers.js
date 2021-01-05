
var num1=273
var res=""
while(num1>0)
{
   var digit=num1%10
   console.log(digit)
   res=res+String(digit)
   num1=Math.floor(num1/10)
}

   console.log(res)