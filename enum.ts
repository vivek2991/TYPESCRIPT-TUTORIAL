enum whoType{
    student = 'student',
    teacher = 'teacher',
    management = 'management',
    labStaff = 'labStaff',
}

var who : whoType = whoType.student


// it gives an error it allow only student teacher management and labstaff
// who = 'vivek'

console.log(whoType.student);
console.log(whoType.teacher);
console.log(whoType.management);
console.log(whoType.labStaff);

console.log(whoType);
console.log(who);




