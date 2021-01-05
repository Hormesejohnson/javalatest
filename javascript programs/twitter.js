var tweets=[
    "kohli,tweet1",
    "kohli,tweet2",
    "sehwag,tweet1",
    "sachin,tweet1",
    "dhoni,tweet1",
    "kohli,tweet3",
    "dhoni,tweet2",
    "dhoni,tweet3",
    "dhoni,tweet4",
    "sachin,tweet2",
    "sachin,tweet3",
    "sachin,tweet4",
    "sachin,tweet5",

]
obj={}
for(let tweet of tweets){
    let name=tweet.split(",")[0]
    if(name in obj){
      obj[name]=obj[name]+1
    }
        else{
obj[name]=1
        }
    }
    var srtd=[]
    for(let da in obj){
        srtd.push([obj[da],da])
    }  
    srtd.sort((one,two)=>two[0]-one[0])
    console.log(srtd[0])
