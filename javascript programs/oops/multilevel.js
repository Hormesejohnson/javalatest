class parent{
    m1(){
        console.log("inside parent")
    }
}
class child extends parent{
    m2(){
        console.log("inside child")
    }
}
class subchild  extends child{
    m3(){
        console.log("inside subchild")
    }
}
var obj=new subchild()
obj.m2()
obj.m3()
obj.m1()
var obj2=new child()
obj2.m1()
//obj2.m3() error