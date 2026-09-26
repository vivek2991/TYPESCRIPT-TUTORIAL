// type PersonTA = {name:string}
// type PersonTB = {age:number}
// type PersonTC = PersonTA & PersonTB
// type x = string | number

interface PersonTA  {name:string}
interface PersonTB  {age:number}
type PersonTC = PersonTA & PersonTB

var PersonDataA:PersonTA = { name: 'Vivek' }
var PersonDataB:PersonTB = { age: 35 }


var PersonDataC:PersonTC = {name:'Vivek', age:30}

console.log(PersonDataC);
