employee={
    eid:123,
    name:"ajay",
    age:10,
    desi:"developer",
    salary:25000
}
console.log(employee.name)
console.log(employee.gender in employee)
employee["gender"]="male"
console.log(employee)
employee.salary+=5000
console.log(employee)
for(let key in employee){
    console.log(key +":"+ employee[key])
}