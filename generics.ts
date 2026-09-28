function fruit<T>(name:T):T{
    return name
}

let onlyFruit = fruit('Apple')
let onlyNum = fruit(100)
let onlyBool = fruit(true)

console.log(onlyFruit);
console.log(onlyNum);
console.log(onlyBool);

function users<T>(data:T):T{
    return data
}

let userCollection =  users(['vk', 'smriti', 'SP'])

console.log(userCollection);

console.log(userCollection[0]);
