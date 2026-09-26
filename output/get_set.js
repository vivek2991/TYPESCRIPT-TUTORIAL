class EmpInfo {
    _name = 'Vk';
    _email = 'vk@test.com';
    get name() {
        return "Mr. " + this._name;
    }
    set email(val) {
        this._email = "baby_" + val;
    }
}
var emp1 = new EmpInfo();
console.log(emp1.name);
emp1.email = "vkdude@test.com";
console.log(emp1._email);
export {};
