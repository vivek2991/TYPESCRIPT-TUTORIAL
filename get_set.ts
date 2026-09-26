class EmpInfo{
    _name:string = 'Vk'
    _email:string = 'vk@test.com'

    get name():string{
        return "Mr. "+this._name;
    }

    set email(val:string){
        this._email = "baby_"+val
    }
}

var emp1 = new EmpInfo();
console.log(emp1.name);
emp1.email = "vkdude@test.com"
console.log(emp1._email);

