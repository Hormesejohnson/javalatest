
class person{
    

setperson(name ,age, gender){
    this.name=name
    this.age=age
    this.gender=gender
}
printperson(){
    console.log(this.name+this.age+this.gender)
}
}
var obj=new person()
obj.setperson("ajay",45,"male")
obj.printperson()