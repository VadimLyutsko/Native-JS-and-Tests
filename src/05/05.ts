const people = [
    {name : "Andrey Ivanov", age:20},
    {name : "Andrey Iakovlev", age:21},
    {name : "Andrey Petrov", age:22}
]

console.log(people.map(i=>{
    return(
        `Hello, ${i.name}`
    )
}));
console.log(22);