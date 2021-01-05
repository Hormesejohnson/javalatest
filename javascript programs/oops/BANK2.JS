class Bank {
    static bankname(){
        console.log("SBI")
    }
    account(accno,name,age,minimumbalance){
          this.accno=accno;
          this.name=name;
          this.age=age;
          this.minimumbalance=minimumbalance;
      }
  
      deposit(amount) {
      
        
          this.minimumbalance+=amount
          console.log("your account with accno:"+this.accno+"balance after transaction is"+this.minimumbalance)
  
      }
      withdrawal(amount){
          if(amount>this.minimumbalance){
     console.log("insufficient balance")
      }
      else{
          this.minimumbalance-=amount
          console.log("your account has a withdrawal of"+this.accno+"balance aftere transaction"+this.minimumbalance)
  }
}
      
     balance_enquiry(){
         console.log("your avilable balance is "+this.minimumbalance)
   
     
    
  }
}
  
  
  var obj=new Bank
  obj.account(678,"hor",12,2000)
  obj.deposit(3000)
  obj.withdrawal(1000)
  obj.balance_enquiry()
  Bank.bankname()

  