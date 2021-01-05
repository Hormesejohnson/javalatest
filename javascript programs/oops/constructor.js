class person{
    

    constructor(name ,age, gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
    printperson(){
        console.log(this.name+this.age+this.gender)
    }
    }
    var obj=new person("ajay",45,"male")
    
    obj.printperson()