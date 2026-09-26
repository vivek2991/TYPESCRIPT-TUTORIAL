class CollegeData {
    name;
    constructor(cName) {
        this.name = cName;
    }
    displayTeachersName() {
        console.log('Vk', 'Smriti', 'Shreyanka');
    }
    getStudentList() {
        return ['vk1', 'smriti_baby', 'shreyanka2'];
    }
}
var college1 = new CollegeData('IIM Ahmedabad');
console.log(college1.name);
college1.displayTeachersName();
console.log(college1.getStudentList());
export {};
