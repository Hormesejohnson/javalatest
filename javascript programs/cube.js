var number=400
var n2=0
var cubesu=0

while(number!=0){
    n2 = number%10

    cube = n2*n2*n2

    cubesu = cubesu + cube

    number = Math.floor(number/10)

}
console.log(cubesu)
