type PersonT = {
    name:string,
    age:number,
    isEmp:boolean
}

let personData:PersonT = {
    name: 'VK',
    age:30,
    isEmp: true
}

type PersonX = keyof PersonT;

let PersonDataX:PersonX;

PersonDataX='name';
PersonDataX='age';
PersonDataX='isEmp';

let UserX:keyof typeof personData = 'name'