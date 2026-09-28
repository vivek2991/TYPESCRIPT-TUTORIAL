let userData1:number | string | boolean = 'Vivek Patel';

// userData1 = true

// userData1 = 20

// if(typeof userData1 == 'boolean'){
//     console.log('This is bool data type');
// } else if(typeof userData1 == 'string'){
//     console.log('This is String value');
// } else {
//     console.log('This is a number');
    
// }

function checkDataType(data:string|number){
   if(typeof data=='number'){
    console.log('This is a number');
   } else {
    console.log('This is a string');
    
   }
}

checkDataType('Hello')
checkDataType(20)