// Q1.How to compare two JSON have the same properties without order?
// a. var obj1={nameL:"Person 1",age:5}
// b. var obj2={name:"Person2", age:5}


let obj1={
    name:"Person1",
    age:5
}
let obj2={
    age:5,
    name:"Person2"
}

if (obj1.key==obj2.key){
    console.log("true")
}
else{
    console.log("False")
}


//Q2.Use the rest countries API and display all the country flag in console.
var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all')
req.send()
req.onload=function(){
var data=JSON.parse(req.response)
var countries=data.map(country=>
    console.log(country.flags.png))
}
 
// Q3.Use the same rset countries API and print all countries name, regions, sub-region and population
var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all')
req.send()
req.onload=function(){
var data=JSON.parse(req.response)
var countries=data.map(country=>
console.log(`${country.name.common}, ${country.region},${country.subregion},${country.population}`))
}