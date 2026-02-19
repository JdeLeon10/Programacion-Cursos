// Definicion de una funcion async, siempre retornara una promesa
const funcAsync = async() => {

}

// Retorna una promesa
const prueba = funcAsync();
console.log(prueba);

/*
    La palabra clave async es lo que usamos para definir las funciones asíncronas, como mencioné arriba. Pero, ¿qué hay de await? Bueno, impide a JavaScript de asignar fetch a la variable respuesta hasta que la promesa se haya resuelto. Una vez que la promesa ha sido resuelta, los resultados del método fetch pueden ahora ser asignados a la variable respuesta.
*/
const funcAsync2 = async () => {
	const respuesta = await fetch(recurso);
   	const datos = await respuesta.json();
}

const asyncFunc = async () => {
  const respuesta = await fetch(recurso);
  const datos = await respuesta.json();
}