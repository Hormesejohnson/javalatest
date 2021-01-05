var pattern="ABABBC"
obj={}
for (let char of pattern){
if(char in obj){
    console.log(char+" "+ "is the  first recrsing charachter")
    break;
}
else{
    obj[char]=1
}
} 
