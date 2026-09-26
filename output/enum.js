"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["management"] = "management";
    whoType["labStaff"] = "labStaff";
})(whoType || (whoType = {}));
var who = whoType.student;
// it gives an error it allow only student teacher management and labstaff
// who = 'vivek'
console.log(whoType.student);
console.log(whoType.teacher);
console.log(whoType.management);
console.log(whoType.labStaff);
console.log(whoType);
console.log(who);
//# sourceMappingURL=enum.js.map