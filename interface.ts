interface Info {
    name:string,
    age:number,
    college: string
}

interface TeacherType extends Info{
    subject: string
}

var studentObj:Info={
    name:'vivek',
    age: 35,
    college: 'IIM Ahmedabad'
}

var teacherObj:TeacherType={
    name:'Smriti',
    age: 30,
    college: 'IIM Ahmedabad',
    subject: 'Math'
}

var management:Info={
    name:'Shreyanka',
    age: 24,
    college: 'IIM Ahmedabad'
}

console.log(studentObj);
console.log(teacherObj);
console.log(management);


