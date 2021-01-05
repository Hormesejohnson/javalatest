var isl=[{team:"mumbai city",mp:10,win:05,lost:02,gf:'11',gd:'10' },
{team:"banglore city",mp:15,win:8,lost:6,gf:5,gd:4} ,
{team:"blaters fc",mp:17,win:9,lost:2,gf:1,gd:7},
{team:"chennai fc",mp:12,win:4,lost:4,gf:3,gd:4}
]
for(let data of isl){
    console.log(data.team)
}
var name=isl.map(tea=>tea.team.toUpperCase())
console.log(name)
var won=isl.filter(teaams=>teaams.win>4).forEach(teams=>console.log(teams.team))
var red=isl.reduce((mp1,mp2)=>mp1<mp2?mp1:mp2)
console.log(red)
  
