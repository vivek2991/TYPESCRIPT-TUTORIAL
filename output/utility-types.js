let CollegeData = {
    name: 'IIT',
    location: 'Ahmedabad',
    students: 500
};
function getCollegeData(data) {
    console.log(data);
}
getCollegeData({ name: 'IIM Ahmedabad' });
getCollegeData({ name: 'IIM Ahmedabad', location: 'Ahmedabad' });
export {};
