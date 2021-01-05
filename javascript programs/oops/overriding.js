class parent{
    phone(){
        console.log("my parent phone")
    }
    constructor(){
        console.log("harre waaa")

    }
}
    class child extends parent{
        phone(){
            console.log("iphone 215")
        }
        constructor(){
            super()
        }

        
    }
    var obj=new child
    obj.phone()
