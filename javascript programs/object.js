
student={
    name:"hormese",
    age:'10',
    total:'200',
}
console.log(student.name)
console.log(student.total)
for(let key in student){
    console.log(key+ " "+student[key])
}
console.log("age" in student)
console.log("gender" in student)
student["gender"]="male"
console.log(student)
student["total"]+=50
console.log(student)