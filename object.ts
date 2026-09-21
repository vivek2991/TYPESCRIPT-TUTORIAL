var userData = {
    name: 'Vivek',
    age: 35,
    city: 'Ahmedabad'
}


// var empData:{
//     name: string,
//     age: number,
//     city: string
// }={
//     name:'vivek patel',
//     age: 35,
//     city: 'Ahmedabad'
// }
// console.log(empData);

// empData.name="Smriti Mandhana";

// console.log(empData);

var empData:{
    name: string,
    age: number,
    city: string,
    company: string | undefined
}={
    name:'vivek patel',
    age: 35,
    city: 'Ahmedabad',
    company: undefined
}

console.log(empData);
empData.company = 'HCL';
console.log(empData);

var tempData:{
    [key:string]:string | null
}={

}

tempData.name= "Shreyanka";
tempData.age = "24";
tempData.company = "TCS";
tempData.city = 'Bhavnagar'

console.log(tempData);
