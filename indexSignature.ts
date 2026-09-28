// type userData7Type = {
//    [key:string]:number|string
// }

// var userData7 : userData7Type = {
//     mobile: 9999,
//     id: 10,
//     marks: 90,
//     age: 32,
//     name: 'VK'
// }

type userData7Type = {
    name: string,
    id: number,
    mobile: number,
    [key: string]: number | string
}

var userData7: userData7Type = {
    name: 'VK',
    id: 10,
    mobile: 9999,
    marks: 90,
    age: 32
}

