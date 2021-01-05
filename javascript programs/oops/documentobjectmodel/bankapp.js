class bank{
   static getaccountdetails(){
        var accountdetails={
            
            userone:{accno:1000,balance:1000,username:"userone",password:"testuser"},
            usertwo:{accno:1001,balance:2000,username:"usertwo",password:"testuser1"},
            userthree:{accno:1003,balance:4000,username:"userthree",password:"testuser2"}
        
        }
    return accountdetails
    
    }

    static login(){
       
        var us=document.querySelector("#unam").value
        var ps=document.querySelector("#pswrd").value
        var dat=bank.getaccountdetails()
    
        if(us in dat){
            if(dat[us].password===ps){
            alert("succesfull login")
            window.location.href="bankhome.html"
            }
            else{
                alert("invalid password")
            
            }
        }
    
    else{
        alert("invalid username")
    }
}
    

static deposit(){
    var us=document.querySelector("#unam").value
    var ps=document.querySelector("#pswrd").value
    var amt=Number(document.querySelector("#amt").value)
 var das=bank.getaccountdetails()
    if(us in das){
        if(das[us].password===ps){
            das[us].balance+=amt
        alert("your account as been credited with amount"+amt+"your new balance is"+das[us].balance)
        
        }
    
    
        else{
            alert("invalid password")
        
        }
    }
    else{
        alert("invalid username")
    }
    }
    static withdrawal(){
        var us=document.querySelector("#unam").value
        var ps=document.querySelector("#pswrd").value
        var amt=Number(document.querySelector("#amt").value)
     var das=bank.getaccountdetails()
        if(us in das){
            if(das[us].password===ps){
                if(das[us].balance>=amt){
                das[us].balance-=amt
                alert("your account as been debited with amount"+amt+"your new balance is"+das[us].balance)      
    }
    else{
       alert ("no suffficient amount in your account")
    }
}
else{
   alert ("invalid password")
}
        }
        else{
            alert("invalid username")
        }
    
     
    }
}


     
    

