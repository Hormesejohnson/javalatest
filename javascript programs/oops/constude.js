class student{
    constructor(name,age,course,){
        this.name=name
        this.age=age
        this.course=course
    }
    print(){
        console.log("name"+this.name)
        console.log("age"+this.age)
        console.log("course"+this.course)
    }
}
var obj=new student("hari",56,"bca")
var obj1=new student("muth",52,"mca")
var obj2=new student("ravi",96,"bba")
var obj3=new student("shukku",86,"bca")
var obj4=new student("nayin",66,"bcom")
var obj5=new student("ramesh",26,"ba")
var su=[]
su.push(obj)
su.push(obj1)
su.push(obj2)
su.push(obj3)
su.push(obj4)
su.push(obj5)
//console.log(su)

for(var obj of su){
    
   function funs(obj){
    console.log(obj.name)
}
}
//su.forEach(obj=>console.log(obj.name))
//su.filter(obj=>obj.course=="mca").forEach(obj=>console.log(obj.name))
//var max=su.map(obj=>obj.age).reduce((age1,age2)=>age1>age2?age1:age2)
//console.log(max)
//var sor=su.sort((ob1,ob2)=>ob1.age>ob2.age?1:-1)
//console.log(sor)