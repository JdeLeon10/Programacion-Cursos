// const array1 = ["manzana, pera, limon"]
// const array2 = [...array1];

// console.log(array1)
// console.log(array2)

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

// Dentro de users, haz un find en donde x sea igual a x.id === 3
const user = users.find(x => x.id === 3);
console.log(user.name)

let newObject = { id: 4, name: 'David' }
users.push(newObject);
console.log(newObject.name)

const nuevoUsers = users.filter(name => name.name !== 'Alice');
console.log(nuevoUsers)
console.log(users)