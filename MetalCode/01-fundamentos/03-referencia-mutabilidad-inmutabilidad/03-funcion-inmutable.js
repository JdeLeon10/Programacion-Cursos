// La idea principal es crear una copia del objeto original y devolver una nueva versión modificada sin alterar el objeto original.
function toUpperCase(person){ // Pasa como parametro un objeto person
    const newName = {name: person.name.toUpperCase()};
    return newName;
}

const person1 = { name: 'Jeremy' };

const newName = toUpperCase(person1);

console.log('Original person:', person1);
console.log('New name:', newName);