var arr="this is this is java"
var words=arr.split(" ")
obj={}
for(let word of words){
    if(word in obj){
        obj[word]+=1
    }
    else{
        obj[word]=1
    }
}
console.log(obj)