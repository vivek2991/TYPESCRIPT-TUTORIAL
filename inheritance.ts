export default class Auth{
    login(name:string, password:string){
        if(name && password){
            return "Login Successfully"
        } else {
            return "Not Login"
        }
    }
}

class Student extends Auth{

    result(marks:number){
        if(marks >35){
            return "Pass"
        } else {
            return "Failed"
        }
    }
}

var s1 = new Student();
console.log(s1.login('vivek', '12345'));
console.log(s1.result(60));

class Teacher extends Auth{
    subject(sub:string){
        return "They Teach: "+sub; 
    }
}

var t1 = new Teacher();
console.log(t1.login('vk', '123'));
console.log(t1.subject('Math'));

