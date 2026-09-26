interface CollegeDataType{
    name: string;
    displayTeachersName():void;
    getStudentList():string[];
}

class CollegeData implements CollegeDataType{
    name:string;
    constructor(cName:string){
        this.name =cName;
    }

    displayTeachersName(): void {
        console.log('Vk', 'Smriti', 'Shreyanka');
    }

    getStudentList(): string[] {
        return ['vk1', 'smriti_baby', 'shreyanka2']
    }
}

var college1 = new CollegeData('IIM Ahmedabad');

console.log(college1.name);

college1.displayTeachersName();
console.log(college1.getStudentList());
