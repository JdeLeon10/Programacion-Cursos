# JavaScript

## Datos primitivos

- `String`
- `Number`
- `BigInt`
- `Undefined`: variable declarada sin valor
- `Null`: ausencia de valor intencional
- `Symbol`

## Datos no primitivos

- `Object`
- `Array`
- `Map` / `Set`
- `Function`
- `RegExp`
- `Date`

---

## Strings

Pendiente de agregar contenido.

---

## Functions

Pendiente de agregar contenido.

---

## Arrays

Pendiente de agregar contenido.

---

## Objects

### Eliminar propiedades de un objeto con `delete`

```js
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer",
};

delete person.job;

console.log(person.job); // undefined
```

---

### Eliminar propiedades con operador rest

```js
const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York",
};

const { job, city, ...remainingProperties } = person;

console.log(remainingProperties); // { name: "Bob", age: 25 }
console.log(person);
// {
//   name: "Bob",
//   age: 25,
//   job: "Designer",
//   city: "New York"
// }
```

> El operador rest no modifica el objeto original. Solo crea un nuevo objeto con las propiedades restantes.

---

### Revisar propiedades

```js
const person = {
  name: "Alice",
  age: 30,
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false

console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "job")); // false

console.log("name" in person); // true
```

`Object.hasOwn()` necesita como parámetros el objeto y la propiedad.

`hasOwn` solo revisa si la propiedad existe directamente en el objeto. No evalúa el valor de la propiedad, por lo que devolverá `true` aunque el valor sea `0`, `false`, `null` o `undefined`.

---

## Diferencia entre valores primitivos y no primitivos

### Valor primitivo

Un valor primitivo se copia por valor. Cada variable guarda su propio valor en memoria.

```js
let num1 = 5;
let num2 = num1;

num1 = 10;

console.log(num2); // 5
```

En este caso, `num2` mantiene el valor `5`, porque recibió una copia del valor original.

---

### Valor no primitivo

Un valor no primitivo se copia por referencia. Ambas variables apuntan al mismo espacio en memoria.

```js
const originalPerson = {
  name: "John",
  age: 30,
};

const copiedPerson = originalPerson;

originalPerson.age = 31;

console.log(copiedPerson.age); // 31
```

En este caso, `copiedPerson.age` también cambia porque ambos objetos apuntan a la misma referencia en memoria.
