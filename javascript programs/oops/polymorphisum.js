class parent{
    add(){
        console.log("first method")
    }
    add(no1){
        console.log("second method")
    }
    add(no1,no2){
        console.log("third method")
    }
}
var ob=new parent// same method name different no of arguments method over loading
// only execute recently implemented method
ob.add()