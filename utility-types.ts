interface CollegeType {
    name: string,
    location: string,
    students: number,
    branches: number
}

let CollegeData : Partial<CollegeType> = {
    name: 'IIT',
    location: 'Ahmedabad',
    students: 500
}

function getCollegeData(data:Partial<CollegeType>){
    console.log(data);
}

getCollegeData({name:'IIM Ahmedabad'})
getCollegeData({name:'IIM Ahmedabad', location: 'Ahmedabad'})